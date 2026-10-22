#!/usr/bin/env node
// يجهّز ملفات TypeScript للمتصفح (مرة واحدة عند تحديث الإصدار):
// - js/vendor/typescript.min.js: المترجم الرسمي مصغّراً
// - js/vendor/ts-libs.js: تعريفات الأنواع المطلوبة لـ ES2022 فقط (دون DOM لتوفير الحجم)
// الاستخدام: node tools/vendor-ts.js
const fs = require("fs");
const path = require("path");
const { execFileSync } = require("child_process");

const root = path.join(__dirname, "..");
const tsDir = path.join(root, "node_modules", "typescript");
const libDir = path.join(tsDir, "lib");
const out = path.join(root, "js", "vendor");

// كل الملفات التي يحتاجها lib.es2022.d.ts عبر /// <reference lib="..." />
const libs = {};
const visit = name => {
  const file = `lib.${name}.d.ts`;
  if (libs[file]) return;
  const text = fs.readFileSync(path.join(libDir, file), "utf8");
  libs[file] = text;
  for (const m of text.matchAll(/<reference lib="([^"]+)"/g)) visit(m[1]);
};
visit("es2022");
fs.writeFileSync(path.join(out, "ts-libs.js"),
  "// تعريفات أنواع ES2022 من حزمة typescript، مولَّدة بـ tools/vendor-ts.js\nwindow.CW = window.CW || {};\nCW.tsLibs = " + JSON.stringify(libs) + ";\n");

execFileSync(process.execPath, [
  path.join(root, "node_modules", "terser", "bin", "terser"),
  path.join(libDir, "typescript.js"), "--compress", "--mangle", "--comments", "/Copyright|License/i",
  "-o", path.join(out, "typescript.min.js")
], { stdio: "inherit" });
fs.copyFileSync(path.join(tsDir, "LICENSE.txt"), path.join(out, "typescript-LICENSE.txt"));

const size = f => (fs.statSync(path.join(out, f)).size / 1024 / 1024).toFixed(2) + " MB";
console.log(`typescript.min.js ${size("typescript.min.js")}، ts-libs.js ${size("ts-libs.js")} (${Object.keys(libs).length} ملفاً)`);
