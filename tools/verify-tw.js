// تحقق دورة Tailwind في متصفح حقيقي (Playwright): لكل تمرين يعرض الحل النموذجي في نفس مشغّل المعاينة
// الذي يستخدمه الطالب (js/tw-runner.js) ويشغّل الفحص المخفي ~~~test، ويتأكد أن كود البداية لا يجتازه،
// وأن كل أمثلة ```tw في الشرح تُعرض دون أخطاء. مع --fill تُملأ ~~~expected التي قيمتها "?".
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

module.exports = async function verifyTw(dir, fill) {
  let playwright;
  try { playwright = require("playwright"); }
  catch (e) { playwright = require(path.join(execSync("npm root -g").toString().trim(), "playwright")); }
  const root = path.resolve(__dirname, "..");
  const harness = path.join(require("os").tmpdir(), `cw-tw-${process.pid}.html`);
  fs.writeFileSync(harness, `<!DOCTYPE html><html><head><meta charset="utf-8"><script>window.CW = {};</script>
<script src="file://${root}/js/tw-runner.js"></script></head><body><div id="box" style="width:800px"></div></body></html>`);
  const browser = await playwright.chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1000, height: 800 } });
  const pageErrors = [];
  page.on("pageerror", e => pageErrors.push(e.message));
  await page.goto("file://" + harness);
  const run = (code, test) => page.evaluate(([code, test]) => new Promise(res => {
    CW.runTailwind(code, test, document.getElementById("box"), lines => res(lines.map(l => (l.kind === "err" ? "ERR: " : "") + l.text).join("\n")));
  }), [code, test]);

  let fails = 0, checks = 0;
  const fail = (where, msg) => { fails++; console.log(`✗ ${where}\n  ${msg.replace(/\n/g, "\n  ")}`); };
  const norm = s => s.split("\n").map(x => x.trim()).join("\n").trim();
  const block = (src, name) => { const m = src.match(new RegExp("^~~~" + name + "\\n([\\s\\S]*?)^~~~\\s*$", "m")); return m ? m[1].replace(/\n$/, "") : null; };
  const files = fs.readdirSync(dir).filter(f => /^m\d+\.md$/.test(f)).sort((a, b) => parseInt(a.slice(1)) - parseInt(b.slice(1)));
  for (const file of files) {
    const p = path.join(dir, file);
    let text = fs.readFileSync(p, "utf8");
    const chunks = text.split(/(?=^=== lesson\s*$)/m);
    let li = 0;
    for (let ci = 0; ci < chunks.length; ci++) {
      if (!/^=== lesson/.test(chunks[ci])) continue;
      li++;
      const where = `${file} درس ${li}`;
      const body = chunks[ci].split(/^--- (?:exercise|quiz)\s*$/m)[0];
      for (const m of body.matchAll(/^```tw\n([\s\S]*?)^```\s*$/gm)) {
        checks++;
        const out = await run(m[1], "");
        if (/ERR:/.test(out)) fail(`${where} مثال`, out);
      }
      const ex = chunks[ci].split(/^--- exercise\s*$/m)[1];
      if (!ex) continue;
      const exPart = ex.split(/^--- quiz\s*$/m)[0];
      const solution = block(exPart, "solution"), starter = block(exPart, "starter"), test = block(exPart, "test");
      let expected = block(exPart, "expected");
      checks++;
      const got = await run(solution, test);
      if (fill && expected === "?") {
        chunks[ci] = chunks[ci].replace(/^~~~expected\n\?\n~~~/m, () => "~~~expected\n" + got + "\n~~~");
        expected = got;
        console.log(`ملء expected: ${where}`);
        if (/✗|ERR:/.test(got)) console.log(`⚠️ ${where}: الحل لا يجتاز كل الفحوص:\n  ${got.replace(/\n/g, "\n  ")}`);
      }
      if (norm(got) !== norm(expected)) fail(`${where} الحل`, `المتوقع:\n${norm(expected)}\nالفعلي:\n${norm(got)}`);
      if (/✗/.test(expected)) fail(`${where} المتوقع`, "المخرجات المتوقعة فيها فحص فاشل ✗");
      const st = await run(starter, test);
      if (norm(st) === norm(expected)) fail(`${where} البداية`, "كود البداية يجتاز التمرين دون حل");
    }
    const result = chunks.join("");
    if (fill && result !== text) { fs.writeFileSync(p, result); console.log(`كُتبت: ${file}`); }
  }
  await browser.close();
  fs.rmSync(harness, { force: true });
  if (pageErrors.length) { fails += pageErrors.length; console.log("أخطاء الصفحة:", pageErrors); }
  return { fails, checks };
};
