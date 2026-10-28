// تحقق دورتي Excel و Power BI: يشغّل كل مثال وتمرين بمحركات المتصفح نفسها
// (js/xl-engine.js للصيغ، و js/m-engine.js لـ Power Query، و js/dax-engine.js لـ DAX)
const fs = require("fs");
const path = require("path");
const ROOT = path.join(__dirname, "..");
global.window = undefined;
["xl-engine.js", "xl-runner.js", "m-engine.js", "dax-engine.js"].forEach(f => { const p = path.join(ROOT, "js", f); if (fs.existsSync(p)) require(p); });
const CW = globalThis.CW;

const textOf = lines => lines.map(l => (l.kind === "err" ? "ERR: " : "") + l.text).join("\n").trimEnd();
const norm = s => s.split("\n").map(x => x.trim()).join("\n").trim();

module.exports = async function verifyXl(dir, runner, fill) {
  let fails = 0, checks = 0;
  const fail = (where, msg) => { fails++; console.log(`✗ ${where}\n  ${String(msg).replace(/\n/g, "\n  ")}`); };
  const cfg = JSON.parse(fs.readFileSync(path.join(dir, "course.json"), "utf8"));
  const courseSetup = cfg.setup ? fs.readFileSync(path.join(dir, cfg.setup), "utf8") : "";
  const exec = runner === "dax" ? CW.daxExec : CW.excelExec;
  const lang = runner === "dax" ? "(?:dax|excel)" : "excel";

  for (const file of fs.readdirSync(dir).filter(f => /^m\d+\.md$/.test(f)).sort((a, b) => parseInt(a.slice(1)) - parseInt(b.slice(1)))) {
    const p = path.join(dir, file);
    const text = fs.readFileSync(p, "utf8");
    const lessons = text.split(/(?=^=== lesson\s*$)/m);
    for (let li = 0; li < lessons.length; li++) {
      let chunk = lessons[li];
      if (!/^=== lesson/.test(chunk)) continue;
      const where = `${file} درس ${li}`;
      // الأمثلة: كتلة excel أو dax يليها output
      const re = new RegExp("^```(" + lang + ")\\n([\\s\\S]*?)^```[ \\t]*\\n(?:(\\s*)^```output\\n([\\s\\S]*?)^```[ \\t]*$)?", "gm");
      const reps = [];
      let m, ei = 0;
      while ((m = re.exec(chunk))) {
        ei++;
        const [all, kind, code, gap, want] = m;
        checks++;
        let got;
        try { got = textOf(exec(code, kind === "dax" ? courseSetup : "", "").shown); }
        catch (e) { fail(`${where} مثال ${ei}`, e.stack); continue; }
        if (want === undefined) { if (/^ERR: /m.test(got)) fail(`${where} مثال ${ei}`, "مثال بلا مخرجات فيه خطأ:\n" + got); }
        else if (fill && want.trim() === "?") {
          reps.push([all, "```" + kind + "\n" + code + "```\n" + gap + "```output\n" + got + "\n```"]);
          if (/^ERR: /m.test(got)) console.log(`⚠️ ${where} مثال ${ei} فيه خطأ، راجعه:\n  ${got.split("\n").filter(l => l.startsWith("ERR")).join("\n  ")}`);
        } else if (norm(got) !== norm(want)) fail(`${where} مثال ${ei}`, `المتوقع:\n${want.trimEnd()}\nالفعلي:\n${got}`);
      }
      reps.forEach(([a, b]) => { chunk = chunk.replace(a, () => b); });

      const get = n => { const mm = chunk.match(new RegExp("^~~~" + n + "\\n([\\s\\S]*?)^~~~\\s*$", "m")); return mm ? mm[1] : null; };
      const solution = get("solution");
      if (solution !== null) {
        const setup = [courseSetup, get("setup") || ""].filter(Boolean).join("\n"), test = get("test") || "";
        checks++;
        try {
          const sol = exec(solution, setup, test);
          const graded = sol.graded || sol.shown;
          const errs = [...sol.shown, ...(sol.graded || [])].filter(l => l.kind === "err");
          if (errs.length) fail(`${where} الحل`, errs.map(e => e.text).join("\n"));
          const got = textOf(graded.filter(l => l.kind !== "err"));
          if (fill && get("expected").trim() === "?") { chunk = chunk.replace(/^~~~expected\n\?\n~~~/m, () => "~~~expected\n" + got + "\n~~~"); console.log(`ملء التمرين: ${where}`); }
          else if (norm(got) !== norm(get("expected"))) fail(`${where} الحل`, `المتوقع:\n${get("expected").trimEnd()}\nالفعلي:\n${got}`);
          const st = exec(get("starter"), setup, test);
          const stGot = textOf((st.graded || st.shown).filter(l => l.kind !== "err"));
          if (norm(stGot) === norm(fill && get("expected").trim() === "?" ? got : get("expected"))) fail(`${where} البداية`, "كود البداية ينجح في الفحص دون حل");
        } catch (e) { fail(`${where} التمرين`, e.stack); }
      }
      lessons[li] = chunk;
    }
    const out = lessons.join("");
    if (out !== text) { fs.writeFileSync(p, out); console.log(`كُتبت: ${file}`); }
  }
  return { fails, checks };
};
