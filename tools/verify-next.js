// تحقق دورة Next.js: يشغّل أمثلة ```next في الشرح (ما بعد السطر // test هو الفحص) ويقارن مخرجاتها بكتلة output التالية،
// ويشغّل الحل النموذجي لكل تمرين مع ~~~setup و ~~~test، ويتأكد أن كود البداية لا يجتاز الفحص.
// مع --fill تُحسب المخرجات المكتوبة "?".
const fs = require("fs");
const path = require("path");

module.exports = async function verifyNext(dir, fill) {
  require(path.join(__dirname, "..", "js", "next-sim.js"));
  const CW = globalThis.CW;
  const text = lines => lines.map(l => (l.kind === "err" ? "ERR: " : "") + l.text).join("\n");
  const norm = s => s.split("\n").map(x => x.trimEnd()).join("\n").trim();
  let fails = 0, checks = 0;
  const fail = (where, msg) => { fails++; console.log(`✗ ${where}\n  ${msg.replace(/\n/g, "\n  ")}`); };
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
      // الأمثلة
      const re = /^```next\n([\s\S]*?)^```[ \t]*\n(\s*)^```output\n([\s\S]*?)^```[ \t]*$/gm;
      let out = "", last = 0, m, bi = 0;
      while ((m = re.exec(chunks[ci]))) {
        bi++;
        checks++;
        const [code, test] = m[1].split(/^\/\/ test\s*$/m);
        const got = text(await CW.nextRun(code, "", test || ""));
        if (fill && m[3].trim() === "?") {
          out += chunks[ci].slice(last, m.index) + "```next\n" + m[1] + "```\n" + m[2] + "```output\n" + got + "\n```";
          last = m.index + m[0].length;
          if (/ERR:/.test(got)) console.log(`⚠️ ${where} مثال ${bi} فيه خطأ، راجعه:\n  ${got.split("\n").filter(l => l.startsWith("ERR:")).join("\n  ")}`);
        } else if (norm(got) !== norm(m[3])) fail(`${where} مثال ${bi}`, `المكتوب:\n${norm(m[3])}\nالفعلي:\n${norm(got)}`);
      }
      if (fill) chunks[ci] = out + chunks[ci].slice(last);
      // التمرين
      const exAll = chunks[ci].split(/^--- exercise\s*$/m)[1];
      if (!exAll) continue;
      const ex = exAll.split(/^--- quiz\s*$/m)[0];
      const solution = block(ex, "solution"), starter = block(ex, "starter"), setup = block(ex, "setup") || "", test = block(ex, "test") || "";
      let expected = block(ex, "expected");
      checks++;
      const got = text(await CW.nextRun(solution, setup, test));
      if (fill && expected === "?") {
        chunks[ci] = chunks[ci].replace(/^~~~expected\n\?\n~~~/m, () => "~~~expected\n" + got + "\n~~~");
        expected = got;
        console.log(`ملء expected: ${where}`);
        if (/ERR:/.test(got)) console.log(`⚠️ ${where}: الحل فيه خطأ:\n  ${got}`);
      }
      if (norm(got) !== norm(expected)) fail(`${where} الحل`, `المتوقع:\n${norm(expected)}\nالفعلي:\n${norm(got)}`);
      if (/^ERR:/m.test(expected)) fail(`${where} المتوقع`, "المخرجات المتوقعة فيها خطأ");
      const st = text(await CW.nextRun(starter, setup, test));
      if (norm(st) === norm(expected)) fail(`${where} البداية`, "كود البداية يجتاز التمرين دون حل");
    }
    const result = chunks.join("");
    if (fill && result !== src) { fs.writeFileSync(p, result); console.log(`كُتبت: ${file}`); }
  }
  return { fails, checks };
};
