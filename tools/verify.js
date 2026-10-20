#!/usr/bin/env node
// يتحقق من صحة محتوى الدروس قبل النشر:
// 1) كل كتلة ```js يليها ```output يجب أن تطبع نفس المخرجات حرفياً
// 2) كل كتلة ```js يجب أن تعمل دون أخطاء (الكتل ```js-error مستثناة لأنها تعرض أخطاء مقصودة)
// 3) الحل النموذجي لكل تمرين يجب أن يطابق المخرجات المتوقعة، وكود البداية يجب ألا يطابقها
// تمارين DOM (التي فيها ~~~html) تُختبر في المتصفح عبر tools/verify-browser.js
// الاستخدام: node tools/verify.js javascript
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

function run(code) {
  try {
    return execFileSync(process.execPath, ["-e", shim + "\n(0, eval)(" + JSON.stringify(code) + ");"], { timeout: 8000, encoding: "utf8" });
  } catch (e) {
    return (e.stdout || "") + "ERR: " + (e.stderr || e.message).split("\n").find(l => /Error/.test(l));
  }
}
const norm = s => s.split("\n").map(x => x.trim()).join("\n").trim();

const course = process.argv[2] || "javascript";
const dir = path.join(__dirname, "..", "content", course);
let fails = 0, checks = 0;
const fail = (where, msg) => { fails++; console.log(`✗ ${where}\n  ${msg.replace(/\n/g, "\n  ")}`); };

for (const file of fs.readdirSync(dir).filter(f => /^m\d+\.md$/.test(f)).sort((a, b) => parseInt(a.slice(1)) - parseInt(b.slice(1)))) {
  const lessons = fs.readFileSync(path.join(dir, file), "utf8").split(/^=== lesson\s*$/m).slice(1);
  lessons.forEach((src, li) => {
    const where = `${file} درس ${li + 1}`;
    const [bodyPart, ...rest] = src.split(/^--- (?:exercise|quiz)\s*$/m);
    const isDomLesson = /^~~~html\s*$/m.test(src);

    // الأمثلة داخل الشرح
    const blocks = [...bodyPart.matchAll(/^```([\w-]*)\n([\s\S]*?)^```\s*$/gm)].map(m => ({ lang: m[1], code: m[2] }));
    blocks.forEach((b, bi) => {
      if (b.lang !== "js") return;
      // أمثلة تحتاج متصفحاً أو إنترنت (إلا إذا عرّفت fetch محاكياً بنفسها)
      if (/document\.|window\.|localStorage/.test(b.code)) return;
      if (/fetch\(/.test(b.code) && !/(const|let|globalThis\.)\s*fetch\s*=/.test(b.code)) return;
      checks++;
      const got = run(b.code);
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
    const block = name => { const m = ex.match(new RegExp("^~~~" + name + "\\n([\\s\\S]*?)^~~~\\s*$", "m")); return m ? m[1] : null; };
    const expected = block("expected"), solution = block("solution"), starter = block("starter");
    checks++;
    const got = run(solution);
    if (norm(got) !== norm(expected)) fail(`${where} الحل`, `المتوقع:\n${norm(expected)}\nالفعلي:\n${norm(got)}`);
    if (norm(run(starter)) === norm(expected)) fail(`${where} البداية`, "كود البداية يجتاز التمرين دون حل");
  });
}
console.log(fails ? `\n${fails} مشكلة من ${checks} فحصاً` : `✓ ${checks} فحصاً ناجحاً في ${course}`);
process.exit(fails ? 1 : 0);
