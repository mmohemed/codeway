// تحقق دورة «اختبار الواجهات» في متصفح حقيقي (Playwright): يشغّل أمثلة ```testfiles في الشرح ويقارن مخرجاتها
// بكتلة output التالية، ويشغّل الحل النموذجي لكل تمرين مع ~~~setup و ~~~test في نفس مشغّل الطالب (js/test-runner.js)،
// ويتأكد أن كود البداية لا يجتاز الفحص. مع --fill تُحسب المخرجات المكتوبة "?".
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

module.exports = async function verifyTests(dir, fill) {
  let playwright;
  try { playwright = require("playwright"); }
  catch (e) { playwright = require(path.join(execSync("npm root -g").toString().trim(), "playwright")); }
  const root = path.resolve(__dirname, "..");
  const harness = path.join(require("os").tmpdir(), `cw-tests-${process.pid}.html`);
  fs.writeFileSync(harness, `<!DOCTYPE html><html><head><meta charset="utf-8"><script>window.CW = {};</script>
<script src="file://${root}/js/test-runner.js"></script></head><body></body></html>`);
  const browser = await playwright.chromium.launch();
  const page = await browser.newPage();
  const pageErrors = [];
  page.on("pageerror", e => pageErrors.push(e.message));
  await page.goto("file://" + harness);
  const run = (code, setup, test) => page.evaluate(([code, setup, test]) => new Promise(res => {
    CW.runTests(code, setup, test, null, lines => res(lines.filter(l => l.kind !== "info").map(l => (l.kind === "err" ? "ERR: " : "") + l.text).join("\n")));
  }), [code, setup, test]);

  let fails = 0, checks = 0;
  const fail = (where, msg) => { fails++; console.log(`✗ ${where}\n  ${msg.replace(/\n/g, "\n  ")}`); };
  const norm = s => s.split("\n").map(x => x.trimEnd()).join("\n").trim();
  const block = (src, name) => { const m = src.match(new RegExp("^~~~" + name + "\\n([\\s\\S]*?)^~~~\\s*$", "m")); return m ? m[1].replace(/\n$/, "") : null; };
  const files = fs.readdirSync(dir).filter(f => /^m\d+\.md$/.test(f)).sort((a, b) => parseInt(a.slice(1)) - parseInt(b.slice(1)));
  for (const file of files) {
    const p = path.join(dir, file);
    const src = fs.readFileSync(p, "utf8");
    const chunks = src.split(/(?=^=== lesson\s*$)/m);
    let li = 0;
    for (let ci = 0; ci < chunks.length; ci++) {
      if (!/^=== lesson/.test(chunks[ci])) continue;
      li++;
      const where = `${file} درس ${li}`;
      const re = /^```testfiles\n([\s\S]*?)^```[ \t]*\n(\s*)^```output\n([\s\S]*?)^```[ \t]*$/gm;
      let out = "", last = 0, m, bi = 0;
      while ((m = re.exec(chunks[ci]))) {
        bi++;
        checks++;
        const [code, test] = m[1].split(/^\/\/ test\s*$/m);
        const got = await run(code, "", test || "");
        if (fill && m[3].trim() === "?") {
          out += chunks[ci].slice(last, m.index) + "```testfiles\n" + m[1] + "```\n" + m[2] + "```output\n" + got.replace(/^\n+/, "") + "\n```";
          last = m.index + m[0].length;
          if (/^ERR:/m.test(got)) console.log(`⚠️ ${where} مثال ${bi} فيه خطأ:\n  ${got}`);
        } else if (norm(got) !== norm(m[3])) fail(`${where} مثال ${bi}`, `المكتوب:\n${norm(m[3])}\nالفعلي:\n${norm(got)}`);
      }
      if (fill) chunks[ci] = out + chunks[ci].slice(last);
      const exAll = chunks[ci].split(/^--- exercise\s*$/m)[1];
      if (!exAll) continue;
      const ex = exAll.split(/^--- quiz\s*$/m)[0];
      const solution = block(ex, "solution"), starter = block(ex, "starter"), setup = block(ex, "setup") || "", test = block(ex, "test") || "";
      let expected = block(ex, "expected");
      checks++;
      const got = await run(solution, setup, test);
      if (fill && expected === "?") {
        chunks[ci] = chunks[ci].replace(/^~~~expected\n\?\n~~~/m, () => "~~~expected\n" + got.replace(/^\n+/, "") + "\n~~~");
        expected = got;
        console.log(`ملء expected: ${where}`);
        if (/^ERR:|✗|×|✘/m.test(got)) console.log(`⚠️ ${where}: راجع الحل:\n  ${got.replace(/\n/g, "\n  ")}`);
      }
      if (norm(got) !== norm(expected)) fail(`${where} الحل`, `المتوقع:\n${norm(expected)}\nالفعلي:\n${norm(got)}`);
      const st = await run(starter, setup, test);
      if (norm(st) === norm(expected)) fail(`${where} البداية`, "كود البداية يجتاز التمرين دون حل");
    }
    const result = chunks.join("");
    if (fill && result !== src) { fs.writeFileSync(p, result); console.log(`كُتبت: ${file}`); }
  }
  await browser.close();
  fs.rmSync(harness, { force: true });
  if (pageErrors.length) { fails += pageErrors.length; console.log("أخطاء الصفحة:", pageErrors); }
  return { fails, checks };
};
