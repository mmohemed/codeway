#!/usr/bin/env node
// يفتح كل درس في متصفح حقيقي، ويضع الحل النموذجي في المحرر، ويضغط «تحقق من الحل»
// ثم يتأكد أن النتيجة ناجحة، وأن كود البداية لا ينجح، وأنه لا توجد أخطاء في الصفحة.
// يتطلب Playwright: الاستخدام  node tools/verify-browser.js javascript [صورة.png]
const path = require("path");
const { execSync } = require("child_process");
let playwright;
try { playwright = require("playwright"); }
catch (e) { playwright = require(path.join(execSync("npm root -g").toString().trim(), "playwright")); }

const course = process.argv[2] || "javascript";
const root = "file://" + path.resolve(__dirname, "..") + "/";
global.window = global;
global.CW = { registerContent: (id, mods) => { CW.modules = mods; } };
require(path.resolve(__dirname, "..", "js", "content", course + ".js"));

(async () => {
  const browser = await playwright.chromium.launch();
  const page = await browser.newPage();
  // دورات Dart: نعترض طلبات خدمة الترجمة (DartPad) ونترجم محلياً بـ dart2js،
  // فنختبر المسار الكامل في المتصفح (إرسال الكود ← JavaScript ← تشغيله في Worker) دون إنترنت
  await page.route(/api\.dartpad\.dev/, async route => {
    const { compileDart } = require("./verify.js");
    const { js, error } = compileDart(JSON.parse(route.request().postData()).source);
    await route.fulfill({
      status: error ? 400 : 200, contentType: "application/json",
      headers: { "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify(error ? { error } : { result: js })
    });
  });
  // دورات Kotlin: نحاكي خدمة Kotlin Playground بترجمة وتشغيل محليين على JVM، بنفس صيغة استجابتها
  await page.route(/api\.kotlinlang\.org\/versions/, route => route.fulfill({
    status: 200, contentType: "application/json", headers: { "Access-Control-Allow-Origin": "*" },
    body: JSON.stringify([{ version: "2.4.21", latestStable: true }])
  }));
  await page.route(/api\.kotlinlang\.org\/api\/.*\/compiler\/run/, async route => {
    const { runKotlinRaw } = require("./verify.js");
    const code = JSON.parse(route.request().postData()).files[0].text;
    const r = runKotlinRaw(code);
    const esc = t => t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    await route.fulfill({
      status: 200, contentType: "application/json", headers: { "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify({
        errors: { "File.kt": r.errors.map(e => ({ interval: { start: { line: e.line - 1, ch: 0 }, end: { line: e.line - 1, ch: 0 } }, message: e.message, severity: "ERROR" })) },
        exception: r.exception,
        text: r.stdout ? `<outStream>${esc(r.stdout)}</outStream>` : ""
      })
    });
  });
  const errors = [];
  page.on("pageerror", e => errors.push(e.message));
  let fails = 0, n = 0, domN = 0;
  for (let m = 0; m < CW.modules.length; m++) {
    for (let l = 0; l < CW.modules[m].length; l++) {
      const ex = CW.modules[m][l].exercise;
      await page.goto(`${root}lesson.html?c=${course}&m=${m}&l=${l}`);
      await page.waitForSelector(".prose");
      // أمثلة DOM في الشرح: كتلة HTML ثم JavaScript ثم المخرجات
      const domFails = await page.evaluate(() => new Promise(resolve => {
        const blocks = [...document.querySelectorAll(".prose .code-block")].map(b => ({
          label: b.querySelector(".code-label").textContent, code: (b.querySelector("code") || {}).textContent || "" }));
        const jobs = [];
        let html = "";
        blocks.forEach((b, i) => {
          if (b.label === "HTML") html = b.code;
          const next = blocks[i + 1];
          if (b.label === "JavaScript" && /document|localStorage/.test(b.code) && next && next.label === "المخرجات")
            jobs.push({ code: b.code, html, want: next.code });
        });
        const norm = s => s.split("\n").map(x => x.trim()).join("\n").trim();
        const fails = [], count = jobs.length;
        const box = document.createElement("div");
        box.style.display = "none";
        document.body.append(box);
        const next = () => {
          const job = jobs.shift();
          if (!job) return resolve({ fails, count });
          CW.runDOM(job.code, job.html, box, lines => {
            const got = norm(lines.map(l => (l.kind === "err" ? "ERR: " : "") + l.text).join("\n"));
            if (got !== norm(job.want)) fails.push(`المتوقع:\n${norm(job.want)}\nالفعلي:\n${got}`);
            next();
          });
        };
        next();
      }));
      domN += domFails.count;
      domFails.fails.forEach(f => { fails++; console.log(`✗ وحدة ${m + 1} درس ${l + 1} مثال DOM\n  ${f.replace(/\n/g, "\n  ")}`); });
      if (!ex) continue;
      n++;
      const tryCode = async code => {
        await page.fill("#ex-code", code);
        await page.evaluate(() => { document.getElementById("ex-result").innerHTML = ""; });
        await page.click("#ex-check");
        await page.waitForSelector("#ex-result .result", { timeout: 30000 });
        return page.$eval("#ex-result .result", el => el.className.includes("ok") ? "ok" : el.innerText);
      };
      const sol = await tryCode(ex.solution);
      if (sol !== "ok") { fails++; console.log(`✗ وحدة ${m + 1} درس ${l + 1}: الحل لم ينجح\n  ${sol.replace(/\n/g, "\n  ")}`); }
      const start = await tryCode(ex.starter);
      if (start === "ok") { fails++; console.log(`✗ وحدة ${m + 1} درس ${l + 1}: كود البداية ينجح دون حل`); }
    }
  }
  if (process.argv[3]) {
    await page.goto(`${root}lesson.html?c=${course}&m=0&l=0`);
    await page.waitForSelector(".prose");
    await page.screenshot({ path: process.argv[3], fullPage: true });
  }
  await browser.close();
  if (errors.length) { fails += errors.length; console.log("أخطاء الصفحة:", errors); }
  console.log(fails ? `\n${fails} مشكلة` : `✓ ${n} تمريناً و ${domN} مثال DOM نجحت في المتصفح`);
  process.exit(fails ? 1 : 0);
})();
