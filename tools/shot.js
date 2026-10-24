#!/usr/bin/env node
// لقطة شاشة لدرس بعد تشغيل الحل النموذجي، لمراجعة العرض بصرياً
// الاستخدام: node tools/shot.js <course> <module> <lesson> <out.png> [mobile]
const path = require("path");
const { execSync } = require("child_process");
let playwright;
try { playwright = require("playwright"); }
catch (e) { playwright = require(path.join(execSync("npm root -g").toString().trim(), "playwright")); }
const [course, m, l, out, mobile] = process.argv.slice(2);
const root = "file://" + path.resolve(__dirname, "..") + "/";
(async () => {
  const browser = await playwright.chromium.launch();
  const page = await browser.newPage(mobile ? { viewport: { width: 390, height: 844 }, deviceScaleFactor: 2 } : { viewport: { width: 1280, height: 900 } });
  const errors = [];
  page.on("pageerror", e => errors.push(e.message));
  await page.goto(`${root}lesson.html?c=${course}&m=${m}&l=${l}`);
  await page.waitForSelector(".prose");
  if (await page.$("#ex-code")) {
    const sol = await page.$eval(".hint-box code", el => el.textContent);
    await page.fill("#ex-code", sol);
    await page.click("#ex-check");
    await page.waitForSelector("#ex-result .result", { timeout: 15000 });
  }
  await page.waitForTimeout(600);
  await page.screenshot({ path: out, fullPage: true });
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
  console.log(`overflow: ${overflow}px`, errors.length ? errors : "");
  await browser.close();
})();
