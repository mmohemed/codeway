// تحقق دورات الطرفية (Git و npm): يشغّل كتل ```terminal في الشرح على المحاكي js/git-sim.js
// ويقارن الجلسة الناتجة بالمكتوبة، ويشغّل حلول التمارين مع الفحص المخفي ~~~test.
// مع --fill تُعاد كتابة كل كتل الطرفية من مخرجات المحاكي، وتُملأ ~~~expected التي قيمتها "?".
const fs = require("fs");
const path = require("path");

module.exports = async function verifyTerm(dir, fill, extensions = []) {
  require(path.join(__dirname, "..", "js", "git-sim.js"));
  extensions.forEach(f => require(path.join(__dirname, "..", "js", f)));
  const CW = globalThis.CW;
  const norm = s => s.split("\n").map(x => x.trimEnd()).join("\n").trim();
  let fails = 0, checks = 0;
  const fail = (where, msg) => { fails++; console.log(`✗ ${where}\n  ${msg.replace(/\n/g, "\n  ")}`); };

  // يستخرج الأوامر من جلسة مكتوبة: أسطر $ وتكملات > لأوامر heredoc
  const commandsOf = block => {
    const cmds = [];
    let inDoc = null;
    for (const l of block.split("\n")) {
      if (inDoc !== null) {
        const body = l.replace(/^> ?/, "");
        cmds.push(body);
        if (body.trim() === inDoc) inDoc = null;
      } else if (l.startsWith("$ ")) {
        cmds.push(l.slice(2));
        const m = l.match(/<<\s*-?\s*['"]?(\w+)['"]?\s*$/);
        if (m) inDoc = m[1];
      }
    }
    return cmds.join("\n");
  };
  const block = (src, name) => { const m = src.match(new RegExp("^~~~" + name + "\\n([\\s\\S]*?)^~~~\\s*$", "m")); return m ? m[1].replace(/\n$/, "") : null; };

  const files = fs.readdirSync(dir).filter(f => /^m\d+\.md$/.test(f)).sort((a, b) => parseInt(a.slice(1)) - parseInt(b.slice(1)));
  for (const file of files) {
    const p = path.join(dir, file);
    const text = fs.readFileSync(p, "utf8");
    const chunks = text.split(/(?=^=== lesson\s*$)/m);
    const outChunks = [];
    let li = 0;
    for (const chunk of chunks) {
      if (!/^=== lesson/.test(chunk)) { outChunks.push(chunk); continue; }
      li++;
      const where = `${file} درس ${li}`;
      const [body, ...restParts] = chunk.split(/(?=^--- (?:exercise|quiz)\s*$)/m);
      let world = CW.termWorld();
      let bi = 0;
      const blocks = [];
      const re = /^```(terminal(?:-new)?)\n([\s\S]*?)^```[ \t]*$/gm;
      let m, last = 0, newBody = "";
      while ((m = re.exec(body))) {
        bi++;
        if (m[1] === "terminal-new") world = CW.termWorld();
        const out = [];
        await CW.termRun(world, commandsOf(m[2]), out);
        const got = CW.termText(out);
        checks++;
        if (fill) {
          newBody += body.slice(last, m.index) + "```" + m[1] + "\n" + got + "\n```";
          last = m.index + m[0].length;
        } else if (norm(got) !== norm(m[2])) {
          fail(`${where} طرفية ${bi}`, `المكتوب:\n${norm(m[2])}\nالمحاكي:\n${norm(got)}`);
        }
        if (fill && /^ERR: /m.test(got)) console.log(`⚠️ ${where} طرفية ${bi}: فيها خطأ، راجعه:\n  ${got.split("\n").filter(l => l.startsWith("ERR: ")).join("\n  ")}`);
        blocks.push(m);
      }
      let newChunk = fill ? newBody + body.slice(last) + restParts.join("") : chunk;

      const exPart = newChunk.split(/^--- exercise\s*$/m)[1];
      if (exPart) {
        const ex = exPart.split(/^--- quiz\s*$/m)[0];
        const solution = block(ex, "solution"), starter = block(ex, "starter"), setup = block(ex, "setup") || "", test = block(ex, "test") || "";
        let expected = block(ex, "expected");
        checks++;
        const sol = await CW.gitRun(solution, setup, test);
        const graded = sol.graded.map(l => (l.kind === "err" ? "ERR: " : "") + l.text).join("\n");
        if (fill && expected === "?") {
          newChunk = newChunk.replace(/^~~~expected\n\?\n~~~/m, () => "~~~expected\n" + graded + "\n~~~");
          expected = graded;
          console.log(`ملء expected: ${where}`);
        }
        if (norm(graded) !== norm(expected)) fail(`${where} الحل`, `المتوقع:\n${norm(expected)}\nالفعلي:\n${norm(graded)}`);
        const shownErr = sol.shown.filter(l => l.kind === "err").map(l => l.text);
        if (shownErr.length && fill) console.log(`⚠️ ${where} الحل فيه أخطاء ظاهرة (تأكد أنها مقصودة):\n  ${shownErr.join("\n  ")}`);
        const st = await CW.gitRun(starter, setup, test);
        const stGraded = st.graded.map(l => (l.kind === "err" ? "ERR: " : "") + l.text).join("\n");
        if (norm(stGraded) === norm(expected)) fail(`${where} البداية`, "كود البداية يجتاز التمرين دون حل");
      }
      outChunks.push(newChunk);
    }
    const result = outChunks.join("");
    if (fill && result !== text) { fs.writeFileSync(p, result); console.log(`كُتبت: ${file}`); }
  }
  return { fails, checks };
};
