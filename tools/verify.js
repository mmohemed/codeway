#!/usr/bin/env node
// يتحقق من صحة محتوى الدروس قبل النشر:
// 1) كل كتلة ```js يليها ```output يجب أن تطبع نفس المخرجات حرفياً
// 2) كل كتلة ```js يجب أن تعمل دون أخطاء (الكتل ```js-error مستثناة لأنها تعرض أخطاء مقصودة)
// 3) الحل النموذجي لكل تمرين يجب أن يطابق المخرجات المتوقعة، وكود البداية يجب ألا يطابقها
// تمارين DOM (التي فيها ~~~html) تُختبر في المتصفح عبر tools/verify-browser.js
// دورات SQL تُشغَّل بمحرك sql.js نفسه الذي يعمل في المتصفح (npm install)،
// ودورات Dart تُشغَّل بـ Dart SDK حقيقي (الأمر dart في PATH أو المتغير DART)
// ودورات TypeScript تُفحص أنواعها بمترجم typescript نفسه الذي يعمل في المتصفح (npm install)،
// ودورات Kotlin تُترجم وتُشغَّل على JVM حقيقي (المتغير KOTLIN_LIB: مجلد jars المترجم و stdlib)
// ودورات الطرفية (git و vite) تُشغَّل على المحاكي js/git-sim.js عبر tools/verify-term.js
// الاستخدام: node tools/verify.js javascript | sql | dart | typescript | kotlin | git | vite
const fs = require("fs");
const path = require("path");
const { execFileSync } = require("child_process");

// نفس منطق تنسيق المخرجات في js/runner.js
const shim = `
const __fmt = v => {
  if (typeof v === "string") return v;
  if (v instanceof Error) return v.name + ": " + v.message;
  if (v === undefined) return "undefined";
    if (typeof v === "number" || typeof v === "boolean" || typeof v === "bigint") return String(v);
  if (typeof v === "function") return "[Function: " + (v.name || "anonymous") + "]";
  if (v instanceof Map) return "Map(" + v.size + ") " + JSON.stringify([...v]);
  if (v instanceof Set) return "Set(" + v.size + ") " + JSON.stringify([...v]);
  try { return JSON.stringify(v); } catch (e) { return String(v); }
};
const __out = (...a) => process.stdout.write(a.map(__fmt).join(" ") + "\\n");
console.log = console.info = console.warn = __out;
console.error = (...a) => process.stdout.write("ERR: " + a.map(__fmt).join(" ") + "\\n");
process.on("uncaughtException", e => { process.stdout.write("ERR: " + e.name + ": " + e.message + "\\n"); });
process.on("unhandledRejection", e => { process.stdout.write("ERR: Uncaught (in promise) " + __fmt(e) + "\\n"); });
`;

// الكود يُكتب في ملف مؤقت (وليس وسيطاً في سطر الأوامر) لأن كود Dart المترجم قد يتجاوز حد 128KB للوسيط
function runJs(code) {
  const file = path.join(require("os").tmpdir(), `cw-run-${process.pid}.js`);
  fs.writeFileSync(file, shim + "\n(0, eval)(" + JSON.stringify(code) + ");");
  try {
    return execFileSync(process.execPath, [file], { timeout: 8000, encoding: "utf8" });
  } catch (e) {
    return (e.stdout || "") + "ERR: " + String(e.stderr || e.message).split("\n").find(l => /Error/.test(l));
  } finally {
    fs.rmSync(file, { force: true });
  }
}
const norm = s => s.split("\n").map(x => x.trim()).join("\n").trim();

const os = require("os");
const course = process.argv[2] || "javascript";
const dir = path.join(__dirname, "..", "content", course);
const cfgPath = path.join(dir, "course.json");
const cfg = fs.existsSync(cfgPath) ? JSON.parse(fs.readFileSync(cfgPath, "utf8")) : {};
const runner = cfg.runner || "js";
const lang = { js: "js", sql: "sql", dart: "dart", ts: "ts", kotlin: "kotlin" }[runner];
const courseSetup = cfg.setup ? fs.readFileSync(path.join(dir, cfg.setup), "utf8") : "";

// ---------- مشغّلات اللغات ----------
global.window = undefined;
require(path.join(__dirname, "..", "js", "sql-runner.js"));
let SQL = null;
function runSql(code, setup) {
  const { tables, error } = globalThis.CW.sqlExecute(SQL, setup, code);
  return globalThis.CW.sqlFormat(tables) + (error ? "\nERR: " + error : "");
}

// Dart: نترجم إلى JavaScript بـ dart2js (نفس ما تفعله خدمة DartPad التي يستخدمها المتصفح)
// ثم نشغّل الناتج، لأن مخرجات الويب قد تختلف عن Dart VM (مثلاً print(10.0) تطبع 10)
const dartBin = process.env.DART || "dart";
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "cw-dart-"));
function compileDart(code) {
  const file = path.join(tmp, "main.dart"), out = path.join(tmp, "main.js");
  fs.writeFileSync(file, code);
  try {
    execFileSync(dartBin, ["compile", "js", "-O1", "-o", out, file], { timeout: 60000, encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] });
    return { js: fs.readFileSync(out, "utf8") };
  } catch (e) {
    return { error: String(e.stdout || "") + String(e.stderr || e.message) };
  }
}
function runDart(code) {
  const { js, error } = compileDart(code);
  if (error) return "ERR: " + error.split("\n").filter(l => /Error/.test(l)).slice(0, 3).join(" ");
  return runJs("globalThis.self = globalThis;\n" + js);
}

// TypeScript: نفس دالة الفحص والتحويل المستخدمة في المتصفح
require(path.join(__dirname, "..", "js", "ts-runner.js"));
let tsLibs = null;
function runTs(code) {
  const ts = require("typescript");
  if (!tsLibs) {
    const ctx = {};
    ctx.window = ctx; // كما في المتصفح: window هو الكائن العام نفسه
    require("vm").runInNewContext(fs.readFileSync(path.join(__dirname, "..", "js", "vendor", "ts-libs.js"), "utf8"), ctx);
    tsLibs = ctx.CW.tsLibs;
  }
  const { js, errors } = globalThis.CW.tsCompile(ts, tsLibs, code);
  if (errors.length) return "ERR: " + globalThis.CW.tsErrorText(errors).split("\n").join(" | ");
  return runJs(js);
}

// Kotlin: ترجمة وتشغيل على JVM، مع ذاكرة مؤقتة للنتائج لأن كل ترجمة تأخذ ثوانيَ
const crypto = require("crypto");
const cacheDir = path.join(os.tmpdir(), "cw-kotlin-cache");
fs.mkdirSync(cacheDir, { recursive: true });
function runKotlinRaw(code) {
  const lib = process.env.KOTLIN_LIB;
  if (!lib) throw new Error("حدد مجلد مكتبات Kotlin في المتغير KOTLIN_LIB");
  const key = path.join(cacheDir, crypto.createHash("sha1").update(code).digest("hex") + ".json");
  if (fs.existsSync(key)) return JSON.parse(fs.readFileSync(key, "utf8"));
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "cw-kt-"));
  const java = ["-Dfile.encoding=UTF-8", "-Dstdout.encoding=UTF-8", "-Dstderr.encoding=UTF-8"];
  const jars = fs.readdirSync(lib).filter(f => f.endsWith(".jar"));
  const runtimeCp = jars.filter(f => /^kotlin-stdlib|^kotlinx-coroutines/.test(f)).map(f => path.join(lib, f)).join(":");
  fs.writeFileSync(path.join(dir, "File.kt"), code);
  const result = { stdout: "", errors: [], exception: null };
  try {
    execFileSync("java", [...java, "-cp", path.join(lib, "*"), "org.jetbrains.kotlin.cli.jvm.K2JVMCompiler",
      path.join(dir, "File.kt"), "-d", path.join(dir, "out"), "-no-stdlib", "-cp", runtimeCp, "-nowarn"],
      { encoding: "utf8", stdio: ["ignore", "pipe", "pipe"], timeout: 120000 });
  } catch (e) {
    for (const m of String(e.stderr || "").matchAll(/File\.kt:(\d+):\d+: error: (.*)/g)) result.errors.push({ line: +m[1], message: m[2] });
    if (!result.errors.length) result.errors.push({ line: 0, message: String(e.stderr || e.message).split("\n")[0] });
  }
  if (!result.errors.length) {
    try {
      result.stdout = execFileSync("java", [...java, "-cp", path.join(dir, "out") + ":" + runtimeCp, "FileKt"],
        { encoding: "utf8", stdio: ["ignore", "pipe", "pipe"], timeout: 30000 });
    } catch (e) {
      result.stdout = String(e.stdout || "");
      const line = String(e.stderr || "").split("\n").find(l => /Exception|Error/.test(l)) || "";
      const m = line.match(/(?:Exception in thread "main" )?([\w.$]+)(?::\s*(.*))?/);
      result.exception = { fullName: m ? m[1] : line, message: m && m[2] ? m[2] : null };
    }
  }
  fs.rmSync(dir, { recursive: true, force: true });
  fs.writeFileSync(key, JSON.stringify(result));
  return result;
}
function runKotlin(code) {
  const r = runKotlinRaw(code);
  if (r.errors.length) return "ERR: " + r.errors.map(e => `line ${e.line}: ${e.message}`).join(" | ");
  return r.stdout + (r.exception ? `ERR: Exception: ${r.exception.fullName}${r.exception.message ? ": " + r.exception.message : ""}` : "");
}

module.exports = { compileDart, runKotlinRaw };

const run = (code, setup) => ({ sql: () => runSql(code, setup), dart: () => runDart(code), ts: () => runTs(code), kotlin: () => runKotlin(code) }[runner] || (() => runJs(code)))();

let fails = 0, checks = 0;
const fail = (where, msg) => { fails++; console.log(`✗ ${where}\n  ${msg.replace(/\n/g, "\n  ")}`); };

if (require.main === module) (async () => {
  if (runner === "terminal") {
    const r = await require("./verify-term.js")(dir, process.argv.includes("--fill"), cfg.extensions || []);
    console.log(r.fails ? `\n${r.fails} مشكلة من ${r.checks} فحصاً` : `✓ ${r.checks} فحصاً ناجحاً في ${course}`);
    process.exit(r.fails ? 1 : 0);
  }
  if (runner === "vue" || runner === "angular") {
    const r = await require("./verify-fw.js")(dir, runner, process.argv.includes("--fill"));
    console.log(r.fails ? `\n${r.fails} مشكلة من ${r.checks} فحصاً` : `✓ ${r.checks} فحصاً ناجحاً في ${course}`);
    process.exit(r.fails ? 1 : 0);
  }
  if (runner === "tests") {
    const r = await require("./verify-tests.js")(dir, process.argv.includes("--fill"));
    console.log(r.fails ? `\n${r.fails} مشكلة من ${r.checks} فحصاً` : `✓ ${r.checks} فحصاً ناجحاً في ${course}`);
    process.exit(r.fails ? 1 : 0);
  }
  if (runner === "next") {
    const r = await require("./verify-next.js")(dir, process.argv.includes("--fill"));
    console.log(r.fails ? `\n${r.fails} مشكلة من ${r.checks} فحصاً` : `✓ ${r.checks} فحصاً ناجحاً في ${course}`);
    process.exit(r.fails ? 1 : 0);
  }
  if (runner === "tailwind") {
    const r = await require("./verify-tw.js")(dir, process.argv.includes("--fill"));
    console.log(r.fails ? `\n${r.fails} مشكلة من ${r.checks} فحصاً` : `✓ ${r.checks} فحصاً ناجحاً في ${course}`);
    process.exit(r.fails ? 1 : 0);
  }
  if (runner === "sql") SQL = await require("sql.js")();

  // --fill: يحسب المخرجات المكتوبة كـ "?" بتشغيل الكود فعلاً، ثم يكمل التحقق
  if (process.argv.includes("--fill")) {
    for (const file of fs.readdirSync(dir).filter(f => /^m\d+\.md$/.test(f))) {
      const p = path.join(dir, file);
      let text = fs.readFileSync(p, "utf8");
      const before = text;
      text = text.replace(new RegExp("^```" + lang + "\\n((?:(?!^```)[\\s\\S])*?)^```[ \\t]*\\n(\\s*)^```output\\n\\?\\n^```", "gm"),
        (all, code, gap) => "```" + lang + "\n" + code + "```\n" + gap + "```output\n" + run(code, courseSetup).trimEnd() + "\n```");
      text = text.split(/(?=^=== lesson\s*$)/m).map(chunk => {
        if (!/^~~~expected\n\?\n~~~/m.test(chunk)) return chunk;
        const get = n => { const m = chunk.match(new RegExp("^~~~" + n + "\\n([\\s\\S]*?)^~~~\\s*$", "m")); return m ? m[1] : null; };
        const out = run(get("solution"), get("setup") || courseSetup).trimEnd();
        return chunk.replace(/^~~~expected\n\?\n~~~/m, () => "~~~expected\n" + out + "\n~~~");
      }).join("");
      if (text !== before) { fs.writeFileSync(p, text); console.log(`ملء المخرجات: ${file}`); }
      // المخرجات التي فيها خطأ تحتاج مراجعة: هل الخطأ مقصود في الدرس أم المثال معطوب؟
      const errs = (text.match(/^```output\n(?:(?!```)[\s\S])*?ERR:.*$/gm) || []);
      errs.forEach(e => console.log(`⚠️ ${file}: مخرجات فيها خطأ، راجعها: ${e.split("\n").pop()}`));
    }
  }

  for (const file of fs.readdirSync(dir).filter(f => /^m\d+\.md$/.test(f)).sort((a, b) => parseInt(a.slice(1)) - parseInt(b.slice(1)))) {
    const lessons = fs.readFileSync(path.join(dir, file), "utf8").split(/^=== lesson\s*$/m).slice(1);
    lessons.forEach((src, li) => {
      const where = `${file} درس ${li + 1}`;
      const bodyPart = src.split(/^--- (?:exercise|quiz)\s*$/m)[0];
      const isDomLesson = /^~~~html\s*$/m.test(src);

      // الأمثلة داخل الشرح
      const blocks = [...bodyPart.matchAll(/^```([\w-]*)\n([\s\S]*?)^```\s*$/gm)].map(m => ({ lang: m[1], code: m[2] }));
      blocks.forEach((b, bi) => {
        if (b.lang !== lang) return;
        if (runner === "js") {
          // أمثلة تحتاج متصفحاً أو إنترنت (إلا إذا عرّفت fetch محاكياً بنفسها)
          if (/document\.|window\.|localStorage/.test(b.code)) return;
          if (/fetch\(/.test(b.code) && !/(const|let|globalThis\.)\s*fetch\s*=/.test(b.code)) return;
        }
        checks++;
        const got = run(b.code, courseSetup);
        const next = blocks[bi + 1];
        if (next && next.lang === "output") {
          if (norm(got) !== norm(next.code)) fail(`${where} مثال ${bi + 1}`, `المتوقع:\n${norm(next.code)}\nالفعلي:\n${norm(got)}`);
        } else if (/ERR:/.test(got)) {
          fail(`${where} مثال ${bi + 1}`, got);
        }
      });

      // التمرين
      const ex = src.split(/^--- exercise\s*$/m)[1];
      if (!ex || isDomLesson) return;
      const block = name => { const m = ex.split(/^--- quiz\s*$/m)[0].match(new RegExp("^~~~" + name + "\\n([\\s\\S]*?)^~~~\\s*$", "m")); return m ? m[1] : null; };
      const expected = block("expected"), solution = block("solution"), starter = block("starter");
      const setup = block("setup") || courseSetup;
      checks++;
      const got = run(solution, setup);
      if (norm(got) !== norm(expected)) fail(`${where} الحل`, `المتوقع:\n${norm(expected)}\nالفعلي:\n${norm(got)}`);
      if (norm(run(starter, setup)) === norm(expected)) fail(`${where} البداية`, "كود البداية يجتاز التمرين دون حل");
    });
  }
  fs.rmSync(tmp, { recursive: true, force: true });
  console.log(fails ? `\n${fails} مشكلة من ${checks} فحصاً` : `✓ ${checks} فحصاً ناجحاً في ${course}`);
  process.exit(fails ? 1 : 0);
})();
