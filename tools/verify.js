#!/usr/bin/env node
// يتحقق من صحة محتوى الدروس قبل النشر:
// 1) كل كتلة ```js يليها ```output يجب أن تطبع نفس المخرجات حرفياً
// 2) كل كتلة ```js يجب أن تعمل دون أخطاء (الكتل ```js-error مستثناة لأنها تعرض أخطاء مقصودة)
// 3) الحل النموذجي لكل تمرين يجب أن يطابق المخرجات المتوقعة، وكود البداية يجب ألا يطابقها
// تمارين DOM (التي فيها ~~~html) تُختبر في المتصفح عبر tools/verify-browser.js
// دورات SQL تُشغَّل بمحرك sql.js نفسه الذي يعمل في المتصفح (npm install)،
// ودورات Dart تُشغَّل بـ Dart SDK حقيقي (الأمر dart في PATH أو المتغير DART)
// الاستخدام: node tools/verify.js javascript | sql | dart
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

function runJs(code) {
  try {
    return execFileSync(process.execPath, ["-e", shim + "\n(0, eval)(" + JSON.stringify(code) + ");"], { timeout: 8000, encoding: "utf8" });
  } catch (e) {
    return (e.stdout || "") + "ERR: " + (e.stderr || e.message).split("\n").find(l => /Error/.test(l));
  }
}
const norm = s => s.split("\n").map(x => x.trim()).join("\n").trim();

const os = require("os");
const course = process.argv[2] || "javascript";
const dir = path.join(__dirname, "..", "content", course);
const cfgPath = path.join(dir, "course.json");
const cfg = fs.existsSync(cfgPath) ? JSON.parse(fs.readFileSync(cfgPath, "utf8")) : {};
const runner = cfg.runner || "js";
const lang = { js: "js", sql: "sql", dart: "dart" }[runner];
const courseSetup = cfg.setup ? fs.readFileSync(path.join(dir, cfg.setup), "utf8") : "";

// ---------- مشغّلات اللغات ----------
global.window = undefined;
require(path.join(__dirname, "..", "js", "sql-runner.js"));
let SQL = null;
function runSql(code, setup) {
  const { tables, error } = globalThis.CW.sqlExecute(SQL, setup, code);
  return globalThis.CW.sqlFormat(tables) + (error ? "\nERR: " + error : "");
}

const dartBin = process.env.DART || "dart";
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "cw-dart-"));
function runDart(code) {
  const file = path.join(tmp, "main.dart");
  fs.writeFileSync(file, code);
  try {
    return execFileSync(dartBin, ["run", file], { timeout: 20000, encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] });
  } catch (e) {
    return (e.stdout || "") + "ERR: " + String(e.stderr || e.message).split("\n").filter(Boolean).slice(0, 3).join(" ");
  }
}

const run = (code, setup) => runner === "sql" ? runSql(code, setup) : runner === "dart" ? runDart(code) : runJs(code);

let fails = 0, checks = 0;
const fail = (where, msg) => { fails++; console.log(`✗ ${where}\n  ${msg.replace(/\n/g, "\n  ")}`); };

(async () => {
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
