// تحقق دورات Python (علم البيانات): يشغّل كل مثال وتمرين بـ Pyodide نفسه الذي يعمل في المتصفح
// وبنفس الغلاف CW.pyHarness من js/py-runner.js، فالمخرجات مطابقة لما يراه الطالب
// يحتاج توزيعة Pyodide الكاملة (فيها NumPy و Pandas و Matplotlib...) في المتغير PYODIDE_DIR
// والرسوم الناتجة عن الأمثلة تُحفظ في img/lessons/<course>/ وتُكتب في المخرجات كسطر [[img:المسار]]
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const ROOT = path.join(__dirname, "..");
require(path.join(ROOT, "js", "py-runner.js"));
const CW = globalThis.CW;

let py = null;
const installed = new Set();
async function boot() {
  if (py) return py;
  const dir = process.env.PYODIDE_DIR;
  if (!dir || !fs.existsSync(path.join(dir, "pyodide-lock.json"))) throw new Error("حدد مجلد توزيعة Pyodide الكاملة في المتغير PYODIDE_DIR");
  const { loadPyodide } = require("pyodide");
  py = await loadPyodide({ indexURL: dir.endsWith("/") ? dir : dir + "/", stdout: () => {}, stderr: () => {} });
  py.runPython(CW.pyHarness);
  return py;
}

let notebookMode = false;
async function run(code, setup, test) {
  const p = await boot();
  if (notebookMode) await p.loadPackage("ipython", { messageCallback: () => {} });
  // نفس منطق المتصفح: البحث عن الاستيرادات خلية خلية مع تجاوز الأوامر السحرية
  const parts = [setup, test, ...code.split(/^# %%.*$/m)].filter(x => x && !/^[ \t]*%%/m.test(x)).map(x => x.replace(/^[ \t]*[%!].*$/gm, ""));
  const all = parts.join("\n");
  const imports = [];
  for (const part of parts) {
    try { await p.loadPackagesFromImports(part, { messageCallback: () => {} }); imports.push(...p.pyimport("pyodide.code").find_imports(part).toJs()); } catch (e) {}
  }
  if (imports.includes("plotly")) await p.loadPackage("pandas", { messageCallback: () => {} });
  for (const pkg of CW.pyNeeded(imports, all).filter(x => !installed.has(x))) {
    await p.loadPackage("micropip", { messageCallback: () => {} });
    await p.pyimport("micropip").install(pkg);
    installed.add(pkg);
  }
  const fn = p.globals.get("_cw_run");
  const res = JSON.parse(fn(code, setup || "", test || "", notebookMode));
  fn.destroy();
  return res;
}

let browser = null;
async function plotlyPng(json) {
  if (!browser) {
    let pw;
    try { pw = require("playwright"); } catch (e) { pw = require(path.join(require("child_process").execSync("npm root -g").toString().trim(), "playwright")); }
    browser = await pw.chromium.launch();
  }
  const page = await browser.newPage({ viewport: { width: 760, height: 420 }, deviceScaleFactor: 1 });
  await page.setContent('<div id="p" style="width:740px;height:400px"></div>');
  await page.addScriptTag({ path: require.resolve("plotly.js-dist-min") });
  await page.evaluate(j => { const f = JSON.parse(j); return Plotly.newPlot("p", f.data, Object.assign({ width: 740, height: 400 }, f.layout), { staticPlot: true }); }, json);
  const png = await page.locator("#p").screenshot();
  await page.close();
  return png;
}

// نص المخرجات كما يُقارن في الدرس: الأسطر والجداول (نصها) والأخطاء، دون التحذيرات والرسوم
const textOf = lines => lines.filter(l => !["info", "img", "plotly", "cmd"].includes(l.kind))
  .map(l => (l.kind === "err" ? "ERR: " : "") + l.text).join("\n").trimEnd();
const norm = s => s.split("\n").map(x => x.trim()).join("\n").trim();

module.exports = async function verifyPy(dir, course, fill) {
  let fails = 0, checks = 0;
  const fail = (where, msg) => { fails++; console.log(`✗ ${where}\n  ${String(msg).replace(/\n/g, "\n  ")}`); };
  const cfg = JSON.parse(fs.readFileSync(path.join(dir, "course.json"), "utf8"));
  const courseSetup = cfg.setup ? fs.readFileSync(path.join(dir, cfg.setup), "utf8") : "";
  notebookMode = !!cfg.notebook;
  const imgDir = path.join(ROOT, "img", "lessons", course);
  const usedImgs = new Set();

  // نص كتلة output لمثال: الأسطر مع الرسوم كسطور [[img:...]] في مواضعها
  async function exampleOutput(code) {
    const { shown } = await run(code, courseSetup, "");
    const hash = crypto.createHash("sha1").update(code).digest("hex").slice(0, 10);
    let n = 0;
    const lines = [];
    for (const l of shown) {
      if (l.kind === "info") { console.log(`⚠️ تحذير في مثال: ${l.text}`); continue; }
      if (l.kind === "plotly") {
        // رسوم Plotly التفاعلية: نرسمها بـ plotly.js الحقيقي في Chromium ونحفظ صورة ثابتة للدرس
        const rel = `img/lessons/${course}/${hash}-${++n}.png`;
        usedImgs.add(path.basename(rel));
        if (fill) { fs.mkdirSync(imgDir, { recursive: true }); fs.writeFileSync(path.join(ROOT, rel), await plotlyPng(l.json)); }
        lines.push(`[[img:${rel}]]`);
        continue;
      }
      if (l.kind === "img") {
        const rel = `img/lessons/${course}/${hash}-${++n}.png`;
        usedImgs.add(path.basename(rel));
        if (fill) { fs.mkdirSync(imgDir, { recursive: true }); fs.writeFileSync(path.join(ROOT, rel), Buffer.from(l.src.split(",")[1], "base64")); }
        lines.push(`[[img:${rel}]]`);
        continue;
      }
      lines.push((l.kind === "err" ? "ERR: " : "") + l.text);
    }
    return lines.join("\n").trimEnd();
  }

  for (const file of fs.readdirSync(dir).filter(f => /^m\d+\.md$/.test(f)).sort((a, b) => parseInt(a.slice(1)) - parseInt(b.slice(1)))) {
    const p = path.join(dir, file);
    let text = fs.readFileSync(p, "utf8");
    const lessons = text.split(/(?=^=== lesson\s*$)/m);
    for (let li = 0; li < lessons.length; li++) {
      let chunk = lessons[li];
      if (!/^=== lesson/.test(chunk)) continue;
      const where = `${file} درس ${li}`;
      // ----- الأمثلة -----
      const re = /^```python\n([\s\S]*?)^```[ \t]*\n(?:(\s*)^```output\n([\s\S]*?)^```[ \t]*$)?/gm;
      const reps = [];
      let m, ei = 0;
      while ((m = re.exec(chunk))) {
        ei++;
        const [all, code, gap, want] = m;
        checks++;
        try {
          const got = await exampleOutput(code);
          if (want === undefined) {
            if (/^ERR: /m.test(got)) fail(`${where} مثال ${ei}`, "مثال بلا مخرجات فيه خطأ:\n" + got);
          } else if (fill && want.trim() === "?") {
            reps.push([all, "```python\n" + code + "```\n" + gap + "```output\n" + got + "\n```"]);
            if (/^ERR: /m.test(got)) console.log(`⚠️ ${where} مثال ${ei} فيه خطأ، راجعه:\n  ${got.split("\n").filter(l => l.startsWith("ERR")).join("\n  ")}`);
          } else {
            const strip = s => norm(s.replace(/^\[\[img:[^\]]+\]\]$/gm, "[[img]]"));
            if (strip(got) !== strip(want)) fail(`${where} مثال ${ei}`, `المتوقع:\n${want.trimEnd()}\nالفعلي:\n${got}`);
            for (const im of want.match(/\[\[img:([^\]]+)\]\]/g) || []) {
              const rel = im.slice(6, -2);
              usedImgs.add(path.basename(rel));
              if (!fs.existsSync(path.join(ROOT, rel))) fail(`${where} مثال ${ei}`, `الصورة غير موجودة: ${rel} (شغّل --fill بعد تصفير المخرجات)`);
            }
          }
        } catch (e) { fail(`${where} مثال ${ei}`, e.message); }
      }
      reps.forEach(([a, b]) => { chunk = chunk.replace(a, () => b); });

      // ----- التمرين -----
      const get = n => { const mm = chunk.match(new RegExp("^~~~" + n + "\\n([\\s\\S]*?)^~~~\\s*$", "m")); return mm ? mm[1] : null; };
      const solution = get("solution");
      if (solution !== null) {
        const setup = [courseSetup, get("setup") || ""].filter(Boolean).join("\n"), test = get("test") || "";
        const gradedText = r => textOf(r.graded || r.shown);
        checks++;
        try {
          const sol = await run(solution, setup, test);
          const got = gradedText(sol);
          [...sol.shown, ...(sol.graded || [])].filter(l => l.kind === "info").forEach(l => console.log(`⚠️ ${where}: تحذير في الحل: ${l.text}`));
          const errs = [...sol.shown, ...(sol.graded || [])].filter(l => l.kind === "err");
          if (errs.length) fail(`${where} الحل`, errs.map(e => e.text).join("\n"));
          if (fill && get("expected").trim() === "?") {
            chunk = chunk.replace(/^~~~expected\n\?\n~~~/m, () => "~~~expected\n" + got + "\n~~~");
            console.log(`ملء التمرين: ${where}`);
          } else if (norm(got) !== norm(get("expected"))) fail(`${where} الحل`, `المتوقع:\n${get("expected").trimEnd()}\nالفعلي:\n${got}`);
          const st = await run(get("starter"), setup, test);
          if (norm(gradedText(st)) === norm(fill && get("expected").trim() === "?" ? got : get("expected"))) fail(`${where} البداية`, "كود البداية ينجح في الفحص دون حل");
        } catch (e) { fail(`${where} التمرين`, e.message); }
      }
      lessons[li] = chunk;
    }
    const out = lessons.join("");
    if (out !== text) { fs.writeFileSync(p, out); console.log(`كُتبت: ${file}`); }
  }
  // حذف صور لم تعد مستخدمة
  if (fs.existsSync(imgDir) && !fails) fs.readdirSync(imgDir).filter(f => !usedImgs.has(f)).forEach(f => fs.rmSync(path.join(imgDir, f)));
  if (browser) { await browser.close(); browser = null; }
  return { fails, checks };
};
