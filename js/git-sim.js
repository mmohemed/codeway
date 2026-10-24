// محاكي طرفية Git للتمارين: ينفّذ أوامر Git وأوامر ملفات بسيطة على مستودعات في الذاكرة،
// مع GitHub محاكى (gh repo create و push و pull و clone و Pull Requests).
// المخرجات تشبه مخرجات Git الحقيقية، والمعرّفات (hashes) حتمية حتى تتطابق النتائج في كل تشغيل.
// نفس الملف يعمل في المتصفح وفي tools/verify.js.
(function (root) {
  const CW = root.CW = root.CW || {};

  // ---------- أدوات ----------
  const fnv = s => {
    let h = 0x811c9dc5;
    for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 0x01000193) >>> 0; }
    return h.toString(16).padStart(8, "0");
  };
  const hash40 = s => (fnv(s) + fnv("a" + s) + fnv("b" + s) + fnv("c" + s) + fnv("d" + s)).slice(0, 40);
  // تقسيم سطر الأمر كما تفعل الطرفية: علامات التنصيص قد تأتي داخل الكلمة مثل --format="%h %s"
  const tokenize = line => {
    const out = [];
    let cur = null, q = null;
    for (let i = 0; i < line.length; i++) {
      const ch = line[i];
      if (q) {
        if (ch === q) q = null;
        else if (ch === "\\" && q === '"' && line[i + 1] === '"') { cur += '"'; i++; }
        else cur += ch;
      } else if (ch === '"' || ch === "'") { q = ch; if (cur === null) cur = ""; }
      else if (/\s/.test(ch)) { if (cur !== null) out.push(cur); cur = null; }
      else cur = (cur || "") + ch;
    }
    if (cur !== null) out.push(cur);
    return out;
  };
  const sortKeys = o => Object.keys(o).sort();
  const lines = s => (s === "" ? [] : s.replace(/\n$/, "").split("\n"));

  // فرق الأسطر بأطول تسلسل مشترك (الملفات في التمارين صغيرة)
  const diffLines = (a, b) => {
    const A = lines(a), B = lines(b);
    const dp = Array.from({ length: A.length + 1 }, () => new Array(B.length + 1).fill(0));
    for (let i = A.length - 1; i >= 0; i--)
      for (let j = B.length - 1; j >= 0; j--)
        dp[i][j] = A[i] === B[j] ? dp[i + 1][j + 1] + 1 : Math.max(dp[i + 1][j], dp[i][j + 1]);
    const ops = [];
    let i = 0, j = 0;
    while (i < A.length && j < B.length) {
      if (A[i] === B[j]) { ops.push(" " + A[i]); i++; j++; }
      else if (dp[i + 1][j] >= dp[i][j + 1]) ops.push("-" + A[i++]);
      else ops.push("+" + B[j++]);
    }
    while (i < A.length) ops.push("-" + A[i++]);
    while (j < B.length) ops.push("+" + B[j++]);
    return ops;
  };

  const plural = (n, one, many) => `${n} ${n === 1 ? one : many}`;
  const statLine = (files, ins, del) => {
    let s = ` ${plural(files, "file", "files")} changed`;
    if (ins) s += `, ${plural(ins, "insertion(+)", "insertions(+)")}`;
    if (del) s += `, ${plural(del, "deletion(-)", "deletions(-)")}`;
    if (!ins && !del) s += ", 0 insertions(+), 0 deletions(-)";
    return s;
  };

  // نمط .gitignore بسيط: *.log و dir/ و اسم ملف
  // قواعد .gitignore بالترتيب: *.log و dir/ و /root-only و ** و !استثناء، والقاعدة الأخيرة المطابقة هي التي تحكم
  const ignoreRule = (p, path) => {
    const dirOnly = p.endsWith("/");
    let pat = dirOnly ? p.slice(0, -1) : p;
    const anchored = pat.startsWith("/") || pat.includes("/");
    pat = pat.replace(/^\//, "");
    const rx = pat.replace(/[.+^${}()|[\]\\]/g, "\\$&").replace(/\*\*\//g, "\u0000").replace(/\*/g, "[^/]*").replace(/\?/g, "[^/]").replace(/\u0000/g, "(?:.*/)?");
    const segs = path.split("/");
    // المطابقة على المسار كاملاً أو على أي مجلد أب له
    for (let i = 1; i <= segs.length; i++) {
      const sub = segs.slice(0, i).join("/");
      const isDir = i < segs.length;
      if (dirOnly && !isDir) continue;
      if (anchored ? new RegExp("^" + rx + "$").test(sub) : new RegExp("^" + rx + "$").test(segs[i - 1])) return true;
    }
    return false;
  };
  const ignored = (repo, path) => {
    const gi = repo.files[".gitignore"];
    if (gi === undefined) return false;
    let result = false, rule = null;
    gi.split("\n").map(x => x.trim()).filter(x => x && !x.startsWith("#")).forEach((p, i) => {
      const neg = p.startsWith("!");
      if (ignoreRule(neg ? p.slice(1) : p, path)) { result = !neg; rule = { line: i + 1, p }; }
    });
    repo._lastRule = rule;
    return result;
  };


  // ---------- العالم المحاكى ----------
  function createWorld() {
    const world = {
      objects: {},          // كل الـ commits مشتركة بين المستودعات المحلية والبعيدة
      remotes: {},          // url -> { refs, prs, defaultBranch }
      repos: {},            // اسم المجلد -> مستودع محلي ("." هو المجلد الرئيسي)
      cwd: ".",
      seq: 0,
      user: { name: "CodeWay Student", email: "student@codeway.dev" },
      config: {},
      ghUser: "student"
    };
    world.repos["."] = newDir();
    return world;
  }
  function newDir() {
    return { git: false, files: {}, index: {}, refs: {}, tags: {}, head: "main", remoteRefs: {}, remotes: {}, upstream: {}, merging: null, stash: [] };
  }

  function makeCommit(world, tree, parents, msg) {
    world.seq++;
    const t = 10 * 60 + world.seq;
    const time = `${String(Math.floor(t / 60)).padStart(2, "0")}:${String(t % 60).padStart(2, "0")}`;
    const commit = { seq: world.seq, tree: Object.assign({}, tree), parents, msg, author: `${world.user.name} <${world.user.email}>`, date: `Mon Jan 6 ${time}:00 2025 +0300` };
    const id = hash40(JSON.stringify([commit.tree, parents, msg, world.seq]));
    world.objects[id] = commit;
    return id;
  }

  async function run(world, script, out) {
    const say = (text, kind = "log") => (text === "" ? [""] : lines(text)).forEach(t => out.push({ kind, text: t }));
    const err = text => say(text, "err");
    const repo = () => world.repos[world.cwd];

    const headCommit = r => (r.head.length === 40 ? r.head : r.refs[r.head]);
    const headTree = r => { const c = headCommit(r); return c ? world.objects[c].tree : {}; };
    const short = id => id.slice(0, 7);
    const ancestors = id => {
      const seen = new Set(), stack = id ? [id] : [];
      while (stack.length) { const c = stack.pop(); if (seen.has(c)) continue; seen.add(c); stack.push(...world.objects[c].parents); }
      return seen;
    };
    const mergeBase = (a, b) => {
      const A = ancestors(a);
      const queue = [b], seen = new Set();
      while (queue.length) { const c = queue.shift(); if (A.has(c)) return c; if (seen.has(c)) continue; seen.add(c); queue.push(...world.objects[c].parents); }
      return null;
    };
    const resolve = (r, name) => {
      if (!name || name === "HEAD") return headCommit(r);
      const m = name.match(/^(.+?)~(\d+)$/);
      if (m) { let c = resolve(r, m[1]); for (let i = 0; i < +m[2] && c; i++) c = world.objects[c].parents[0]; return c; }
      if (r.refs[name]) return r.refs[name];
      if (r.tags[name]) return r.tags[name].commit;
      if (r.remoteRefs[name]) return r.remoteRefs[name];
      const hit = Object.keys(world.objects).filter(id => id.startsWith(name));
      return hit.length === 1 ? hit[0] : null;
    };
    const decorations = (r, id) => {
      const d = [];
      if (r.head.length !== 40 && r.refs[r.head] === id) d.push(`HEAD -> ${r.head}`);
      else if (r.head === id) d.push("HEAD");
      sortKeys(r.tags).forEach(k => { if (r.tags[k].commit === id) d.push(`tag: ${k}`); });
      sortKeys(r.remoteRefs).forEach(k => { if (r.remoteRefs[k] === id) d.push(k); });
      sortKeys(r.refs).forEach(k => { if (k !== r.head && r.refs[k] === id) d.push(k); });
      return d.length ? ` (${d.join(", ")})` : "";
    };
    const fmtCommit = (fmt, id) => {
      const c = world.objects[id];
      return fmt.replace(/%(H|h|s|an|ae|d|p|P)/g, (_, k) => ({
        H: id, h: short(id), s: c.msg, an: c.author.replace(/ <.*/, ""), ae: c.author.replace(/.*<|>/g, ""),
        d: decorations(repo(), id), p: c.parents.map(short).join(" "), P: c.parents.join(" ")
      })[k]);
    };
    const mergeMsg = name => {
      const into = ["main", "master"].includes(repo().head) ? "" : ` into ${repo().head}`;
      return name.includes("/") && repo().remoteRefs[name] ? `Merge remote-tracking branch '${name}'${into}` : `Merge branch '${name}'${into}`;
    };
    // ملخص التغييرات كما يطبعه merge و pull: سطر لكل ملف ثم المجموع
    const diffStat = (from, to) => {
      const rows = [], modes = [];
      sortKeys(Object.assign({}, from, to)).forEach(p => {
        if (from[p] === to[p]) return;
        let ins = 0, del = 0;
        diffLines(from[p] || "", to[p] || "").forEach(o => { if (o[0] === "+") ins++; if (o[0] === "-") del++; });
        rows.push([p, ins, del]);
        if (from[p] === undefined) modes.push(` create mode 100644 ${p}`);
        if (to[p] === undefined) modes.push(` delete mode 100644 ${p}`);
      });
      const w = Math.max(...rows.map(x => x[0].length)), cw = Math.max(...rows.map(x => String(x[1] + x[2]).length));
      rows.forEach(([p, i, d]) => say(` ${p.padEnd(w)} | ${String(i + d).padStart(cw)} ${"+".repeat(i)}${"-".repeat(d)}`));
      say(statLine(rows.length, rows.reduce((a, x) => a + x[1], 0), rows.reduce((a, x) => a + x[2], 0)));
      modes.forEach(m => say(m));
    };
    const modeLines = (from, to) => sortKeys(Object.assign({}, from, to)).forEach(p => {
      if (from[p] === undefined && to[p] !== undefined) say(` create mode 100644 ${p}`);
      if (from[p] !== undefined && to[p] === undefined) say(` delete mode 100644 ${p}`);
    });
    const printDiff = (p, a, b) => {
      if (a === b) return;
      say(`diff --git a/${p} b/${p}`);
      if (a === undefined) say("new file mode 100644");
      if (b === undefined) say("deleted file mode 100644");
      say(`--- ${a === undefined ? "/dev/null" : "a/" + p}\n+++ ${b === undefined ? "/dev/null" : "b/" + p}`);
      const la = lines(a || "").length, lb = lines(b || "").length;
      say(`@@ -${la ? 1 : 0},${la} +${lb ? 1 : 0},${lb} @@`);
      diffLines(a || "", b || "").forEach(o => say(o));
    };
    const needRepo = () => {
      if (!repo().git) { err("fatal: not a git repository (or any of the parent directories): .git"); return false; }
      return true;
    };
    const changeStat = (fromTree, toTree) => {
      let files = 0, ins = 0, del = 0;
      new Set([...Object.keys(fromTree), ...Object.keys(toTree)]).forEach(p => {
        if (fromTree[p] === toTree[p]) return;
        files++;
        diffLines(fromTree[p] || "", toTree[p] || "").forEach(o => { if (o[0] === "+") ins++; if (o[0] === "-") del++; });
      });
      return { files, ins, del };
    };
    const setFiles = (r, tree) => {
      r.files = Object.assign({}, tree);
      r.index = Object.assign({}, tree);
    };
    const dirty = r => {
      const h = headTree(r);
      return JSON.stringify(sortKeys(r.index).map(k => [k, r.index[k]])) !== JSON.stringify(sortKeys(h).map(k => [k, h[k]])) ||
        Object.keys(r.index).some(p => r.files[p] !== r.index[p]);
    };

    // ---------- أوامر Git ----------
    const git = args => {
      const r = repo();
      const cmd = args[0];
      const flag = f => args.includes(f);
      const rest = args.slice(1).filter(a => !a.startsWith("-"));

      if (cmd === "init") {
        if (r.git) return say("Reinitialized existing Git repository in /project/.git/");
        r.git = true;
        return say(`Initialized empty Git repository in /project${world.cwd === "." ? "" : "/" + world.cwd}/.git/`);
      }
      if (cmd === "--version" || cmd === "version") return say("git version 2.47.0");
      if (cmd === "config") {
        const kv = args.slice(1).filter(a => !a.startsWith("--"));
        const [key, value] = kv;
        if (key === "user.name") { if (value === undefined) return say(world.user.name); world.user.name = value; return; }
        if (key === "user.email") { if (value === undefined) return say(world.user.email); world.user.email = value; return; }
        if (flag("--list")) return say(`user.name=${world.user.name}\nuser.email=${world.user.email}` + sortKeys(world.config).map(k => `\n${k}=${world.config[k]}`).join(""));
        if (value === undefined) return world.config[key] !== undefined ? say(world.config[key]) : undefined;
        world.config[key] = value;
        return;
      }
      if (cmd === "clone") {
        const url = rest[0];
        const remote = world.remotes[url];
        const dir = rest[1] || url.split("/").pop().replace(/\.git$/, "");
        say(`Cloning into '${dir}'...`);
        if (!remote) return err(`remote: Repository not found.\nfatal: repository '${url}' not found`);
        const nr = newDir();
        nr.git = true;
        nr.remotes.origin = url;
        Object.keys(remote.refs).forEach(b => { nr.remoteRefs["origin/" + b] = remote.refs[b]; });
        const def = remote.refs[remote.defaultBranch] ? remote.defaultBranch : Object.keys(remote.refs)[0];
        if (def) {
          nr.head = def;
          nr.refs[def] = remote.refs[def];
          nr.upstream[def] = "origin/" + def;
          setFiles(nr, world.objects[remote.refs[def]].tree);
        } else say("warning: You appear to have cloned an empty repository.");
        world.repos[dir] = nr;
        return;
      }
      if (!needRepo()) return;

      switch (cmd) {
        case "status": {
          const h = headTree(r);
          const staged = [], unstaged = [], untracked = [], unmerged = [];
          new Set([...Object.keys(h), ...Object.keys(r.index)]).forEach(p => {
            if (r.merging && r.merging.conflicts.includes(p)) return;
            if (!(p in h) && p in r.index) staged.push(["new file", p]);
            else if (p in h && !(p in r.index)) staged.push(["deleted", p]);
            else if (h[p] !== r.index[p]) staged.push(["modified", p]);
          });
          Object.keys(r.index).forEach(p => {
            if (r.merging && r.merging.conflicts.includes(p)) return unmerged.push(p);
            if (!(p in r.files)) unstaged.push(["deleted", p]);
            else if (r.files[p] !== r.index[p]) unstaged.push(["modified", p]);
          });
          sortKeys(r.files).forEach(p => {
            if (p in r.index || ignored(r, p)) return;
            // مجلد ليس فيه أي ملف متتبَّع يظهر كاسم مجلد واحد كما في Git
            const dir = p.includes("/") ? p.split("/")[0] + "/" : null;
            const show = dir && !Object.keys(r.index).some(f => f.startsWith(dir)) ? dir : p;
            if (!untracked.includes(show)) untracked.push(show);
          });
          if (flag("-s") || flag("--short")) {
            const all = {};
            staged.forEach(([k, p]) => { all[p] = (all[p] || "  ").split(""); all[p][0] = k === "new file" ? "A" : k === "deleted" ? "D" : "M"; });
            unstaged.forEach(([k, p]) => { all[p] = (all[p] || "  ").split(""); all[p][1] = k === "deleted" ? "D" : "M"; });
            unmerged.forEach(p => { all[p] = ["U", "U"]; });
            sortKeys(all).forEach(p => say(`${all[p].join ? all[p].join("") : all[p]} ${p}`));
            untracked.forEach(p => say(`?? ${p}`));
            return;
          }
          say(r.head.length === 40 ? `HEAD detached at ${short(r.head)}` : `On branch ${r.head}`);
          const up = r.upstream[r.head];
          if (up && r.remoteRefs[up] && r.refs[r.head]) {
            const mine = ancestors(r.refs[r.head]), theirs = ancestors(r.remoteRefs[up]);
            const ahead = [...mine].filter(c => !theirs.has(c)).length, behind = [...theirs].filter(c => !mine.has(c)).length;
            if (!ahead && !behind) say(`Your branch is up to date with '${up}'.`);
            else if (ahead && !behind) say(`Your branch is ahead of '${up}' by ${plural(ahead, "commit", "commits")}.\n  (use "git push" to publish your local commits)`);
            else if (behind && !ahead) say(`Your branch is behind '${up}' by ${plural(behind, "commit", "commits")}, and can be fast-forwarded.\n  (use "git pull" to update your local branch)`);
          }
          if (!headCommit(r)) say("\nNo commits yet");
          if (r.merging && r.merging.conflicts.length) say(`\nYou have unmerged paths.\n  (fix conflicts and run "git commit")\n  (use "git merge --abort" to abort the merge)`);
          else if (r.merging) say(`\nAll conflicts fixed but you are still merging.\n  (use "git commit" to conclude merge)`);
          if (staged.length) {
            say("\nChanges to be committed:\n  (use \"git restore --staged <file>...\" to unstage)");
            staged.sort((a, b) => a[1].localeCompare(b[1])).forEach(([k, p]) => say(`\t${(k + ":").padEnd(12)}${p}`));
          }
          if (unmerged.length) {
            say("\nUnmerged paths:\n  (use \"git add <file>...\" to mark resolution)");
            unmerged.forEach(p => say(`\tboth modified:   ${p}`));
          }
          if (unstaged.length) {
            say("\nChanges not staged for commit:\n  (use \"git add <file>...\" to update what will be committed)\n  (use \"git restore <file>...\" to discard changes in working directory)");
            unstaged.sort((a, b) => a[1].localeCompare(b[1])).forEach(([k, p]) => say(`\t${(k + ":").padEnd(12)}${p}`));
          }
          if (untracked.length) {
            say("\nUntracked files:\n  (use \"git add <file>...\" to include in what will be committed)");
            untracked.forEach(p => say(`\t${p}`));
          }
          if (!staged.length && !unstaged.length && !untracked.length && !unmerged.length)
            say(headCommit(r) ? "\nnothing to commit, working tree clean" : "\nnothing to commit (create/copy files and use \"git add\" to track)");
          else if (!staged.length && !unmerged.length) say(untracked.length && !unstaged.length ? "\nnothing added to commit but untracked files present (use \"git add\" to track)" : "\nno changes added to commit (use \"git add\" and/or \"git commit -a\")");
          return;
        }
        case "add": {
          const all = flag("-A") || flag("--all") || rest.includes(".");
          const targets = all ? new Set([...Object.keys(r.files), ...Object.keys(r.index)]) : new Set(rest);
          for (const p of targets) {
            const known = p in r.files || p in r.index || Object.keys(r.files).some(f => f.startsWith(p + "/"));
            if (!all && !known) return err(`fatal: pathspec '${p}' did not match any files`);
            const matches = p in r.files || p in r.index ? [p] : Object.keys(r.files).filter(f => f.startsWith(p + "/"));
            matches.forEach(f => {
              if (!(f in r.index) && ignored(r, f)) { if (!all) err(`The following paths are ignored by one of your .gitignore files:\n${f}`); return; }
              if (f in r.files) r.index[f] = r.files[f]; else delete r.index[f];
              if (r.merging) r.merging.conflicts = r.merging.conflicts.filter(c => c !== f);
            });
          }
          return;
        }
        case "commit": {
          const mi = args.findIndex(a => a === "-m" || a === "-am");
          if (flag("-a") || flag("-am")) Object.keys(r.index).forEach(p => { if (p in r.files) r.index[p] = r.files[p]; else delete r.index[p]; });
          if (r.merging && r.merging.conflicts.length) return err("error: Committing is not possible because you have unmerged files.\nhint: Fix them up in the work tree, and then use 'git add/rm <file>'\nfatal: Exiting because of an unresolved conflict.");
          let msg = mi >= 0 ? args[mi + 1] : r.merging ? r.merging.msg : null;
          if ((msg === null || msg === undefined) && !flag("--amend")) return err("error: no commit message given (use -m \"message\")");
          if (flag("--amend")) {
            const prev = headCommit(r);
            if (!prev) return err("fatal: You have nothing to amend.");
            const P = world.objects[prev];
            const id = makeCommit(world, r.index, P.parents, msg || P.msg);
            if (r.head.length === 40) r.head = id; else r.refs[r.head] = id;
            const st = changeStat(P.parents.length ? world.objects[P.parents[0]].tree : {}, r.index);
            say(`[${r.head}${P.parents.length ? "" : " (root-commit)"} ${short(id)}] ${msg || P.msg}\n Date: ${P.date}`);
            say(statLine(st.files, st.ins, st.del));
            return modeLines(P.parents.length ? world.objects[P.parents[0]].tree : {}, r.index);
          }
          const parent = headCommit(r);
          const h = headTree(r);
          if (!r.merging && JSON.stringify(sortKeys(r.index).map(k => [k, r.index[k]])) === JSON.stringify(sortKeys(h).map(k => [k, h[k]]))) {
            say(`On branch ${r.head}`);
            const changed = Object.keys(r.files).some(p => r.files[p] !== r.index[p]) || Object.keys(r.files).some(p => !(p in r.index) && !ignored(r, p));
            return say(changed ? "no changes added to commit (use \"git add\" and/or \"git commit -a\")" : "nothing to commit, working tree clean");
          }
          const parents = parent ? [parent] : [];
          if (r.merging) parents.push(r.merging.theirs);
          const id = makeCommit(world, r.index, parents, msg);
          if (r.head.length === 40) r.head = id; else r.refs[r.head] = id;
          const st = changeStat(h, r.index);
          say(`[${r.head.length === 40 ? "detached HEAD" : r.head}${parent ? "" : " (root-commit)"} ${short(id)}] ${msg}`);
          if (!r.merging) { say(statLine(st.files, st.ins, st.del)); modeLines(h, r.index); }
          r.merging = null;
          return;
        }
        case "log": {
          const oneline = flag("--oneline");
          const ni = args.findIndex(a => /^-n$|^-\d+$/.test(a));
          const limit = ni < 0 ? Infinity : args[ni] === "-n" ? +args[ni + 1] : +args[ni].slice(1);
          const fmtArg = args.find(a => /^--(format|pretty)=/.test(a));
          const fmt = fmtArg ? fmtArg.replace(/^--(format|pretty)=(format:)?/, "") : null;
          const starts = flag("--all") ? [headCommit(r), ...Object.values(r.refs), ...Object.values(r.remoteRefs)].filter(Boolean)
            : [rest.length ? resolve(r, rest[0]) : headCommit(r)];
          if (!starts[0]) return err(rest.length ? `fatal: ambiguous argument '${rest[0]}': unknown revision or path not in the working tree.` : `fatal: your current branch '${r.head}' does not have any commits yet`);
          // ترتيب زمني عكسي لكل الأسلاف
          const set = new Set();
          starts.forEach(st => ancestors(st).forEach(c => set.add(c)));
          const list = [...set].sort((a, b) => world.objects[b].seq - world.objects[a].seq)
            .filter(id => flag("--merges") ? world.objects[id].parents.length > 1 : flag("--no-merges") ? world.objects[id].parents.length < 2 : true);
          list.slice(0, limit).forEach((id, i) => {
            const c = world.objects[id];
            if (fmt !== null) return say(fmtCommit(fmt, id));
            if (oneline) return say(`${short(id)}${decorations(r, id)} ${c.msg}`);
            if (i) say("");
            say(`commit ${id}${decorations(r, id)}`);
            if (c.parents.length > 1) say(`Merge: ${c.parents.map(short).join(" ")}`);
            say(`Author: ${c.author}\nDate:   ${c.date}\n\n    ${c.msg}`);
          });
          return;
        }
        case "diff": {
          const staged = flag("--staged") || flag("--cached");
          // git diff <commit> يقارن تلك اللقطة بمجلد العمل، و git diff <a> <b> يقارن لقطتين
          const revs = rest.filter(x => !(x in r.files) && resolve(r, x));
          const paths0 = rest.filter(x => !revs.includes(x));
          let from = staged ? headTree(r) : r.index;
          let to = staged ? r.index : r.files;
          if (revs.length) { from = world.objects[resolve(r, revs[0])].tree; to = revs[1] ? world.objects[resolve(r, revs[1])].tree : r.files; }
          const both = staged || revs.length;
          const paths = (paths0.length ? paths0 : sortKeys(Object.assign({}, from, both ? to : {}))).filter(p => both || p in r.index);
          paths.forEach(p => printDiff(p, from[p], to[p]));
          return;
        }
        case "branch": {
          if (flag("-d") || flag("-D")) {
            const name = rest[0];
            if (!r.refs[name]) return err(`error: branch '${name}' not found`);
            if (name === r.head) return err(`error: Cannot delete branch '${name}' checked out at '/project'`);
            if (flag("-d") && !ancestors(headCommit(r)).has(r.refs[name])) return err(`error: the branch '${name}' is not fully merged.\nhint: If you are sure you want to delete it, run 'git branch -D ${name}'`);
            const was = r.refs[name];
            delete r.refs[name];
            return say(`Deleted branch ${name} (was ${short(was)}).`);
          }
          if (flag("-m")) {
            const [a, b] = rest.length === 2 ? rest : [r.head, rest[0]];
            r.refs[b] = r.refs[a]; delete r.refs[a];
            if (r.head === a) r.head = b;
            return;
          }
          if (rest.length) {
            if (!headCommit(r)) return err(`fatal: not a valid object name: '${r.head}'`);
            if (r.refs[rest[0]]) return err(`fatal: a branch named '${rest[0]}' already exists`);
            r.refs[rest[0]] = rest[1] ? resolve(r, rest[1]) : headCommit(r);
            return;
          }
          const names = new Set(Object.keys(r.refs));
          if (r.head.length !== 40) names.add(r.head);
          if (args.some(a => a.startsWith("--format="))) return [...names].sort().forEach(b => say(b));
          [...names].sort().forEach(b => say(`${b === r.head ? "*" : " "} ${b}`));
          if (flag("-a")) sortKeys(r.remoteRefs).forEach(b => say(`  remotes/${b}`));
          return;
        }
        case "switch":
        case "checkout": {
          const create = flag("-c") || flag("-b");
          const name = rest[0];
          if (cmd === "checkout" && name && (r.files[name] !== undefined || r.index[name] !== undefined) && !r.refs[name] && !create) {
            if (r.index[name] !== undefined) r.files[name] = r.index[name];
            return say("Updated 1 path from the index");
          }
          if (create) {
            if (r.refs[name]) return err(`fatal: a branch named '${name}' already exists`);
            r.refs[name] = headCommit(r);
            if (!r.refs[name]) delete r.refs[name];
            r.head = name;
            return say(`Switched to a new branch '${name}'`);
          }
          let target = r.refs[name];
          if (!target && r.remoteRefs["origin/" + name]) {
            r.refs[name] = target = r.remoteRefs["origin/" + name];
            r.upstream[name] = "origin/" + name;
            say(`branch '${name}' set up to track 'origin/${name}'.`);
          }
          if (!target) return err(`fatal: invalid reference: ${name}`);
          if (name === r.head) return say(`Already on '${name}'`);
          // نقل التغييرات غير المحفوظة إن لم تتعارض، كما يفعل Git
          const oldTree = headTree(r), newTree = world.objects[target].tree;
          const local = {};
          Object.keys(Object.assign({}, r.files, r.index)).forEach(p => { if (r.files[p] !== oldTree[p] || r.index[p] !== oldTree[p]) local[p] = [r.files[p], r.index[p]]; });
          const blocked = Object.keys(local).filter(p => p in oldTree && oldTree[p] !== newTree[p]);
          if (blocked.length) return err(`error: Your local changes to the following files would be overwritten by checkout:\n\t${blocked.join("\n\t")}\nPlease commit your changes or stash them before you switch branches.\nAborting`);
          setFiles(r, newTree);
          Object.keys(local).forEach(p => {
            if (local[p][0] === undefined) delete r.files[p]; else r.files[p] = local[p][0];
            if (local[p][1] === undefined) delete r.index[p]; else r.index[p] = local[p][1];
          });
          r.head = name;
          return say(`Switched to branch '${name}'`);
        }
        case "merge": {
          if (flag("--abort")) {
            if (!r.merging) return err("fatal: There is no merge to abort (MERGE_HEAD missing).");
            setFiles(r, headTree(r));
            r.merging = null;
            return;
          }
          const name = rest[0];
          const theirs = resolve(r, name);
          if (!theirs) return err(`merge: ${name} - not something we can merge`);
          const ours = headCommit(r);
          if (ancestors(ours).has(theirs)) return say("Already up to date.");
          const remoteName = name.split("/")[0];
          const msgText = flag("--pull-msg") ? `Merge branch '${name.slice(remoteName.length + 1)}' of ${(r.remotes[remoteName] || "").replace(/\.git$/, "")}` : mergeMsg(name);
          const base = mergeBase(ours, theirs);
          if (base === ours && !flag("--no-ff")) {
            say(`Updating ${short(ours)}..${short(theirs)}\nFast-forward`);
            diffStat(headTree(r), world.objects[theirs].tree);
            r.refs[r.head] = theirs;
            setFiles(r, world.objects[theirs].tree);
            return;
          }
          const B = world.objects[base].tree, O = headTree(r), T = world.objects[theirs].tree;
          const result = {}, conflicts = [];
          new Set([...Object.keys(B), ...Object.keys(O), ...Object.keys(T)]).forEach(p => {
            const b = B[p], o = O[p], t = T[p];
            if (o === t) { if (o !== undefined) result[p] = o; }
            else if (o === b) { if (t !== undefined) result[p] = t; }
            else if (t === b) { if (o !== undefined) result[p] = o; }
            else {
              conflicts.push(p);
              result[p] = `<<<<<<< HEAD\n${o || ""}${o && !o.endsWith("\n") ? "\n" : ""}=======\n${t || ""}${t && !t.endsWith("\n") ? "\n" : ""}>>>>>>> ${name}\n`;
            }
          });
          conflicts.forEach(p => say(`Auto-merging ${p}\nCONFLICT (content): Merge conflict in ${p}`));
          if (conflicts.length) {
            r.files = Object.assign({}, result);
            r.index = Object.assign({}, O);
            Object.keys(result).forEach(p => { if (!conflicts.includes(p)) r.index[p] = result[p]; });
            r.merging = { theirs, name, conflicts, msg: msgText };
            return err("Automatic merge failed; fix conflicts and then commit the result.");
          }
          const id = makeCommit(world, result, [ours, theirs], msgText);
          r.refs[r.head] = id;
          setFiles(r, result);
          say("Merge made by the 'ort' strategy.");
          diffStat(O, result);
          return;
        }
        case "rebase": {
          const onto = resolve(r, rest[0]);
          const ours = headCommit(r);
          if (!onto) return err(`fatal: invalid upstream '${rest[0]}'`);
          if (ancestors(ours).has(onto)) return say(`Current branch ${r.head} is up to date.`);
          const base = mergeBase(ours, onto);
          const mine = [];
          for (let c = ours; c && c !== base; c = world.objects[c].parents[0]) mine.unshift(c);
          let tip = onto;
          for (const c of mine) {
            const C = world.objects[c], P = world.objects[C.parents[0]].tree, tree = Object.assign({}, world.objects[tip].tree);
            for (const p of new Set([...Object.keys(P), ...Object.keys(C.tree)])) {
              if (P[p] === C.tree[p]) continue;
              if (tree[p] !== P[p] && tree[p] !== C.tree[p]) return err(`CONFLICT (content): Merge conflict in ${p}\nerror: could not apply ${short(c)}... ${C.msg}\nhint: هذا المحاكي لا يدعم حل تعارضات rebase، جرّب merge بدلاً منه`);
              if (C.tree[p] === undefined) delete tree[p]; else tree[p] = C.tree[p];
            }
            tip = makeCommit(world, tree, [tip], C.msg);
          }
          r.refs[r.head] = tip;
          setFiles(r, world.objects[tip].tree);
          return say(`Successfully rebased and updated refs/heads/${r.head}.`);
        }
        case "ls-files": return sortKeys(r.index).forEach(p => say(p));
        case "check-ignore": {
          return rest.forEach(p => {
            const hit = ignored(r, p);
            if (hit) say(flag("-v") ? `.gitignore:${r._lastRule.line}:${r._lastRule.p}\t${p}` : p);
          });
        }
        case "tag": {
          if (flag("-d")) { const t = rest[0]; if (!r.tags[t]) return err(`error: tag '${t}' not found.`); const c = r.tags[t].commit; delete r.tags[t]; return say(`Deleted tag '${t}' (was ${short(c)})`); }
          if (!rest.length || flag("-l") || flag("--list")) return sortKeys(r.tags).forEach(t => say(t));
          const mi = args.indexOf("-m");
          const name = rest.filter(x => mi < 0 || x !== args[mi + 1])[0];
          if (r.tags[name]) return err(`fatal: tag '${name}' already exists`);
          const target = resolve(r, rest.filter(x => x !== name && (mi < 0 || x !== args[mi + 1]))[0] || "HEAD");
          if (!target) return err("fatal: Failed to resolve 'HEAD' as a valid ref.");
          r.tags[name] = { commit: target, msg: mi >= 0 ? args[mi + 1] : null };
          return;
        }
        case "restore": {
          const staged = flag("--staged");
          rest.forEach(p => {
            if (staged) { const h = headTree(r); if (p in h) r.index[p] = h[p]; else delete r.index[p]; }
            else if (p in r.index) r.files[p] = r.index[p];
          });
          return;
        }
        case "rm": {
          const cached = flag("--cached");
          rest.forEach(p => { delete r.index[p]; if (!cached) delete r.files[p]; say(`rm '${p}'`); });
          return;
        }
        case "reset": {
          const target = resolve(r, rest[0] || "HEAD");
          if (!target) return err(`fatal: ambiguous argument '${rest[0]}'`);
          if (r.head.length === 40) r.head = target; else r.refs[r.head] = target;
          const tree = world.objects[target].tree;
          if (flag("--hard")) { setFiles(r, tree); return say(`HEAD is now at ${short(target)} ${world.objects[target].msg}`); }
          if (!flag("--soft")) r.index = Object.assign({}, tree);
          return;
        }
        case "revert": {
          const c = resolve(r, rest[0]);
          if (!c) return err(`fatal: bad revision '${rest[0]}'`);
          const C = world.objects[c], P = world.objects[C.parents[0]].tree, tree = Object.assign({}, headTree(r));
          new Set([...Object.keys(P), ...Object.keys(C.tree)]).forEach(p => {
            if (P[p] === C.tree[p]) return;
            if (P[p] === undefined) delete tree[p]; else tree[p] = P[p];
          });
          const msg = `Revert "${C.msg}"`;
          const h = headTree(r);
          const id = makeCommit(world, tree, [headCommit(r)], msg);
          r.refs[r.head] = id;
          setFiles(r, tree);
          const st = changeStat(h, tree);
          say(`[${r.head} ${short(id)}] ${msg}`);
          return say(statLine(st.files, st.ins, st.del));
        }
        case "stash": {
          const sub = rest[0] || "push";
          if (sub === "push" || sub === "save") {
            if (!dirty(r)) return say("No local changes to save");
            r.stash.unshift({ files: Object.assign({}, r.files), index: Object.assign({}, r.index), on: r.head, base: headCommit(r) });
            const keepUntracked = {};
            Object.keys(r.files).forEach(p => { if (!(p in r.index)) keepUntracked[p] = r.files[p]; });
            setFiles(r, headTree(r));
            Object.assign(r.files, keepUntracked);
            const c = headCommit(r);
            return say(`Saved working directory and index state WIP on ${r.head}: ${short(c)} ${world.objects[c].msg}`);
          }
          if (sub === "list") return r.stash.forEach((s, i) => say(`stash@{${i}}: WIP on ${s.on}: ${short(s.base)} ${world.objects[s.base].msg}`));
          if (sub === "pop" || sub === "apply") {
            const s = r.stash[0];
            if (!s) return err("error: No stash entries found.");
            Object.keys(s.files).forEach(p => { r.files[p] = s.files[p]; });
            if (sub === "pop") { r.stash.shift(); say(`Dropped refs/stash@{0}`); }
            return;
          }
          return err(`error: unknown subcommand: ${sub}`);
        }
        case "remote": {
          if (rest[0] === "add") { r.remotes[rest[1]] = rest[2]; return; }
          if (rest[0] === "remove") { delete r.remotes[rest[1]]; return; }
          return sortKeys(r.remotes).forEach(n => flag("-v") ? say(`${n}\t${r.remotes[n]} (fetch)\n${n}\t${r.remotes[n]} (push)`) : say(n));
        }
        case "push": {
          const remoteName = rest[0] || "origin";
          const url = r.remotes[remoteName];
          if (!url) return err(`fatal: '${remoteName}' does not appear to be a git repository\nfatal: Could not read from remote repository.`);
          const remote = world.remotes[url];
          if (!remote) return err(`remote: Repository not found.\nfatal: repository '${url}' not found`);
          if (flag("--tags") || (rest[1] && r.tags[rest[1]])) {
            remote.tags = remote.tags || {};
            const names = flag("--tags") ? sortKeys(r.tags) : [rest[1]];
            const fresh = names.filter(t => !remote.tags[t]);
            say(`To ${url}`);
            if (!fresh.length) return say("Everything up-to-date");
            fresh.forEach(t => { remote.tags[t] = r.tags[t]; say(` * [new tag]         ${t} -> ${t}`); });
            return;
          }
          const branch = rest[1] || r.head;
          const local = r.refs[branch];
          if (!local) return err(`error: src refspec ${branch} does not match any\nerror: failed to push some refs to '${url}'`);
          const old = remote.refs[branch];
          if (old && !ancestors(local).has(old)) {
            return err(`To ${url}\n ! [rejected]        ${branch} -> ${branch} (fetch first)\nerror: failed to push some refs to '${url}'\nhint: Updates were rejected because the remote contains work that you do not\nhint: have locally. Use 'git pull' before pushing again.`);
          }
          say(`To ${url}`);
          if (old === local) say("Everything up-to-date");
          else if (!old) {
            say(` * [new branch]      ${branch} -> ${branch}`);
            if (branch !== remote.defaultBranch && remote.refs[remote.defaultBranch]) {
              say(`remote:\nremote: Create a pull request for '${branch}' on GitHub by visiting:\nremote:      ${url.replace(/\.git$/, "")}/pull/new/${branch}`);
            }
          } else say(`   ${short(old)}..${short(local)}  ${branch} -> ${branch}`);
          remote.refs[branch] = local;
          if (!remote.defaultBranch || !remote.refs[remote.defaultBranch]) remote.defaultBranch = branch;
          r.remoteRefs[`${remoteName}/${branch}`] = local;
          if (flag("-u") || flag("--set-upstream")) {
            r.upstream[branch] = `${remoteName}/${branch}`;
            say(`branch '${branch}' set up to track '${remoteName}/${branch}'.`);
          }
          return;
        }
        case "fetch":
        case "pull": {
          const remoteName = rest[0] || "origin";
          const url = r.remotes[remoteName];
          if (!url || !world.remotes[url]) return err(`fatal: '${remoteName}' does not appear to be a git repository`);
          const remote = world.remotes[url];
          const updates = [];
          sortKeys(remote.refs).forEach(b => {
            const key = `${remoteName}/${b}`;
            if (r.remoteRefs[key] !== remote.refs[b]) updates.push([b, r.remoteRefs[key], remote.refs[b]]);
            r.remoteRefs[key] = remote.refs[b];
          });
          if (updates.length) {
            say(`From ${url}`);
            updates.forEach(([b, a, c]) => say(a ? `   ${short(a)}..${short(c)}  ${b.padEnd(10)} -> ${remoteName}/${b}` : ` * [new branch]      ${b.padEnd(10)} -> ${remoteName}/${b}`));
          }
          if (cmd === "fetch") return;
          const upstream = `${remoteName}/${rest[1] || r.head}`;
          if (!r.remoteRefs[upstream]) return err(`fatal: couldn't find remote ref ${rest[1] || r.head}`);
          const mine = headCommit(r), theirs = r.remoteRefs[upstream];
          if (!mine) { r.refs[r.head] = theirs; setFiles(r, world.objects[theirs].tree); return; }
          const diverged = !ancestors(mine).has(theirs) && !ancestors(theirs).has(mine);
          const useRebase = flag("--rebase") || (!flag("--no-rebase") && world.config["pull.rebase"] === "true");
          if (diverged && useRebase) return git(["rebase", upstream]);
          if (diverged && (flag("--ff-only") || world.config["pull.ff"] === "only")) return err("hint: Diverging branches can't be fast-forwarded, you need to either:\nhint:\nhint: \tgit merge --no-ff\nhint:\nhint: or:\nhint:\nhint: \tgit rebase\nhint:\nfatal: Not possible to fast-forward, aborting.");
          if (diverged && !flag("--no-rebase") && world.config["pull.rebase"] === undefined) {
            return err(`hint: You have divergent branches and need to specify how to reconcile them.
hint: You can do so by running one of the following commands sometime before
hint: your next pull:
hint:
hint:   git config pull.rebase false  # merge
hint:   git config pull.rebase true   # rebase
hint:   git config pull.ff only       # fast-forward only
hint:
hint: You can replace "git config" with "git config --global" to set a default
hint: preference for all repositories. You can also pass --rebase, --no-rebase,
hint: or --ff-only on the command line to override the configured default per
hint: invocation.
fatal: Need to specify how to reconcile divergent branches.`);
          }
          return git(["merge", upstream, "--pull-msg"]);
        }
        case "show": {
          // git show <rev>:<path> يعرض محتوى ملف في لقطة معيّنة
          const spec = (rest[0] || "HEAD").match(/^([^:]*):(.+)$/);
          if (spec) {
            const c0 = resolve(r, spec[1] || "HEAD");
            if (!c0) return err(`fatal: invalid object name '${spec[1]}'.`);
            const content = world.objects[c0].tree[spec[2]];
            if (content === undefined) return err(`fatal: path '${spec[2]}' does not exist in '${spec[1] || "HEAD"}'`);
            return say(content);
          }
          const c = resolve(r, rest[0] || "HEAD");
          if (!c) return err(`fatal: ambiguous argument '${rest[0]}': unknown revision or path not in the working tree.`);
          const C = world.objects[c];
          const sf = args.find(a => /^--(format|pretty)=/.test(a));
          if (sf) say(fmtCommit(sf.replace(/^--(format|pretty)=(format:)?/, ""), c));
          else say(`commit ${c}${decorations(r, c)}${C.parents.length > 1 ? "\nMerge: " + C.parents.map(short).join(" ") : ""}\nAuthor: ${C.author}\nDate:   ${C.date}\n\n    ${C.msg}`);
          if (flag("--no-patch") || flag("-s")) return;
          say("");
          const P = C.parents.length ? world.objects[C.parents[0]].tree : {};
          sortKeys(Object.assign({}, P, C.tree)).forEach(p => printDiff(p, P[p], C.tree[p]));
          return;
        }
        default:
          return err(`git: '${cmd}' is not a git command. See 'git --help'.`);
      }
    };

    // ---------- GitHub CLI المحاكى ----------
    // الطلبات (PR) والمشكلات (Issues) تتشارك الترقيم كما في GitHub
    const gh = args => {
      const [group, action] = args;
      const r = repo();
      const opt = (...names) => { for (const n of names) { const i = args.indexOf(n); if (i >= 0) return args[i + 1]; const eq = args.find(a => a.startsWith(n + "=")); if (eq) return eq.slice(n.length + 1); } return undefined; };
      const optAll = name => args.map((a, i) => (a === name ? args[i + 1] : null)).filter(Boolean);
      if (group === "auth") {
        if (action === "status") return say(`github.com\n  ✓ Logged in to github.com account ${world.ghUser}\n  - Active account: true`);
        if (action === "switch") { world.ghUser = opt("--user", "-u"); return say(`✓ Switched active account for github.com to ${world.ghUser}`); }
      }
      if (group === "repo" && action === "create") {
        const name = args[2];
        const owner = "student";
        const url = `https://github.com/${owner}/${name}.git`;
        if (world.remotes[url]) return err(`GraphQL: Name already exists on this account (createRepository)`);
        world.remotes[url] = { refs: {}, items: [], defaultBranch: "main", owner, name };
        say(`✓ Created repository ${owner}/${name} on GitHub\n  https://github.com/${owner}/${name}`);
        if (args.some(a => a === "--source=." || a === "--source")) {
          r.remotes.origin = url;
          say(`✓ Added remote ${url}`);
          if (args.includes("--push")) {
            const b = r.head;
            if (r.refs[b]) {
              world.remotes[url].refs[b] = r.refs[b];
              world.remotes[url].defaultBranch = b;
              r.remoteRefs[`origin/${b}`] = r.refs[b];
              r.upstream[b] = `origin/${b}`;
              say(`✓ Pushed commits to ${url}`);
            }
          }
        }
        return;
      }
      const url = r.remotes.origin;
      const remote = url && world.remotes[url];
      if (!remote) return err("failed to determine base repo: no git remotes found");
      const base = url.replace(/\.git$/, "");
      const slug = `${remote.owner}/${remote.name}`;
      const item = n => remote.items.find(x => x.n === +String(n).replace("#", ""));
      const newItem = data => { const x = Object.assign({ n: remote.items.length + 1, author: world.ghUser, comments: [], reviews: [], labels: [] }, data); remote.items.push(x); return x; };
      const commitsBetween = (fromId, toId) => { const A = ancestors(fromId); return [...ancestors(toId)].filter(c => !A.has(c)).length; };

      if (group === "pr") {
        if (action === "create") {
          const head = opt("--head", "-H") || r.head;
          if (!remote.refs[head]) return err(`aborted: you must first push the current branch to a remote, or use the --head flag`);
          const baseBranch = opt("--base", "-B") || remote.defaultBranch;
          if (remote.items.some(x => x.kind === "pr" && x.state === "OPEN" && x.head === head)) return err(`a pull request for branch "${head}" into branch "${baseBranch}" already exists`);
          const pr = newItem({ kind: "pr", title: opt("--title", "-t") || head, body: opt("--body", "-b") || "", head, base: baseBranch, state: "OPEN" });
          say(`\nCreating pull request for ${head} into ${baseBranch} in ${slug}\n`);
          return say(`${base}/pull/${pr.n}`);
        }
        if (action === "list") {
          const open = remote.items.filter(p => p.kind === "pr" && p.state === "OPEN");
          if (!open.length) return say(`no open pull requests in ${slug}`);
          say(`\nShowing ${open.length} of ${open.length} open pull request${open.length > 1 ? "s" : ""} in ${slug}\n`);
          return open.slice().reverse().forEach(p => say(`#${p.n}  ${p.title}  ${p.head}`));
        }
        const pr = item(args[2] || "");
        const prOf = pr && pr.kind === "pr" ? pr : remote.items.find(x => x.kind === "pr" && x.state === "OPEN" && x.head === r.head && !args[2]);
        if (!prOf) return err(`no pull requests found for ${args[2] ? "#" + args[2] : `branch "${r.head}"`}`);
        if (action === "view") {
          const n = prOf.state === "MERGED" ? prOf.mergedCount : commitsBetween(remote.refs[prOf.base], remote.refs[prOf.head]);
          const st = { OPEN: "Open", MERGED: "Merged", CLOSED: "Closed" }[prOf.state];
          say(`${prOf.title} ${slug}#${prOf.n}`);
          say(`${st} • ${prOf.author} ${prOf.state === "MERGED" ? "merged" : "wants to merge"} ${plural(n, "commit", "commits")} into ${prOf.base} from ${prOf.head}`);
          // آخر مراجعة لكل شخص هي حالته الحالية
          const latest = {};
          prOf.reviews.forEach(v => { latest[v.by] = v.state; });
          const label = { APPROVED: "Approved", CHANGES_REQUESTED: "Changes requested", COMMENTED: "Commented" };
          if (prOf.reviews.length) say(`Reviewers: ${Object.keys(latest).map(b => `${b} (${label[latest[b]]})`).join(", ")}`);
          say("");
          say(prOf.body ? prOf.body.split("\n").map(l => "  " + l).join("\n") : "  No description provided");
          const verb = { APPROVED: "approved", CHANGES_REQUESTED: "requested changes", COMMENTED: "commented" };
          prOf.reviews.filter(v => v.body).forEach(v => say(`\n${v.by} ${verb[v.state]} • ${v.body}`));
          prOf.comments.forEach(c => say(`\n${c.by} • ${c.body}`));
          return say(`\nView this pull request on GitHub: ${base}/pull/${prOf.n}`);
        }
        if (action === "diff") {
          const b = remote.refs[prOf.base], h = remote.refs[prOf.head];
          const T1 = world.objects[mergeBase(b, h)].tree, T2 = world.objects[h].tree;
          return sortKeys(Object.assign({}, T1, T2)).forEach(p => printDiff(p, T1[p], T2[p]));
        }
        if (action === "checkout") {
          git(["fetch", "origin"]);
          return git(["switch", prOf.head]);
        }
        if (action === "comment") {
          prOf.comments.push({ by: world.ghUser, body: opt("--body", "-b") || "" });
          return say(`${base}/pull/${prOf.n}#issuecomment-${prOf.comments.length}`);
        }
        if (action === "review") {
          const body = opt("--body", "-b") || "";
          const kind = args.includes("--approve") || args.includes("-a") ? "APPROVED" : args.includes("--request-changes") || args.includes("-r") ? "CHANGES_REQUESTED" : args.includes("--comment") || args.includes("-c") ? "COMMENTED" : null;
          if (!kind) return err("did not understand desired review action: --approve, --request-changes, or --comment required");
          if (kind !== "APPROVED" && !body) return err("body cannot be blank for comment or request-changes review");
          if (prOf.author === world.ghUser && kind !== "COMMENTED") return err(`failed to create review: GraphQL: Review Can not ${kind === "APPROVED" ? "approve" : "request changes on"} your own pull request (addPullRequestReview)`);
          prOf.reviews.push({ by: world.ghUser, state: kind, body });
          return say({ APPROVED: `✓ Approved pull request ${slug}#${prOf.n}`, CHANGES_REQUESTED: `+ Requested changes to pull request ${slug}#${prOf.n}`, COMMENTED: `- Reviewed pull request ${slug}#${prOf.n}` }[kind]);
        }
        if (action === "close") { prOf.state = "CLOSED"; return say(`✓ Closed pull request ${slug}#${prOf.n} (${prOf.title})`); }
        if (action === "merge") {
          if (prOf.state !== "OPEN") return err(`Pull request ${slug}#${prOf.n} (${prOf.title}) was already merged`);
          if (prOf.reviews.some(v => v.state === "CHANGES_REQUESTED") && !prOf.reviews.some(v => v.state === "APPROVED")) say("! Pull request has requested changes");
          const ours = remote.refs[prOf.base], theirs = remote.refs[prOf.head];
          const T = world.objects[theirs].tree;
          prOf.mergedCount = commitsBetween(ours, theirs);
          if (args.includes("--squash") || args.includes("-s")) remote.refs[prOf.base] = makeCommit(world, T, [ours], `${prOf.title} (#${prOf.n})`);
          else if (args.includes("--merge") || args.includes("-m")) remote.refs[prOf.base] = makeCommit(world, T, [ours, theirs], `Merge pull request #${prOf.n} from ${prOf.author}/${prOf.head}`);
          else if (args.includes("--rebase") || args.includes("-r")) {
            if (!ancestors(theirs).has(ours)) return err("X Pull request is not mergeable: the merge commit cannot be cleanly created.");
            remote.refs[prOf.base] = theirs;
          } else return err("--merge, --rebase, or --squash required when not running interactively");
          prOf.state = "MERGED";
          prOf.mergedHead = theirs;
          say(`✓ Merged pull request ${slug}#${prOf.n} (${prOf.title})`);
          // "Closes #3" في وصف الطلب يغلق المشكلة تلقائياً عند الدمج
          (prOf.body + " " + prOf.title).replace(/\b(?:close[sd]?|fix(?:e[sd])?|resolve[sd]?)\s+#(\d+)/gi, (_, n) => { const iss = item(n); if (iss && iss.kind === "issue") iss.state = "CLOSED"; });
          if (args.includes("--delete-branch") || args.includes("-d")) {
            delete remote.refs[prOf.head];
            delete r.remoteRefs["origin/" + prOf.head];
            if (r.head === prOf.head) { git(["switch", prOf.base]); git(["pull", "origin", prOf.base]); }
            if (r.refs[prOf.head]) { delete r.refs[prOf.head]; say(`✓ Deleted local branch ${prOf.head}`); }
            say(`✓ Deleted remote branch ${prOf.head}`);
          }
          return;
        }
      }

      if (group === "issue") {
        if (action === "create") {
          const iss = newItem({ kind: "issue", title: opt("--title", "-t") || "", body: opt("--body", "-b") || "", state: "OPEN", labels: optAll("--label").concat(optAll("-l")).flatMap(l => l.split(",")) });
          if (!iss.title) { remote.items.pop(); return err("must provide `--title` and `--body` when not running interactively"); }
          const as = opt("--assignee", "-a");
          if (as) iss.assignee = as === "@me" ? world.ghUser : as;
          say(`\nCreating issue in ${slug}\n`);
          return say(`${base}/issues/${iss.n}`);
        }
        if (action === "list") {
          const state = opt("--state", "-s") || "open";
          const label = opt("--label", "-l");
          const list = remote.items.filter(x => x.kind === "issue" && (state === "all" || x.state === state.toUpperCase()) && (!label || x.labels.includes(label)));
          if (!list.length) return say(`no ${state === "all" ? "" : state + " "}issues match your search in ${slug}`.replace("  ", " "));
          say(`\nShowing ${list.length} of ${list.length} ${state === "all" ? "" : state + " "}issue${list.length > 1 ? "s" : ""} in ${slug}\n`.replace("  ", " "));
          return list.slice().reverse().forEach(x => say(`#${x.n}  ${x.title}${x.labels.length ? "  " + x.labels.join(", ") : ""}`));
        }
        const iss = item(args[2] || "");
        if (!iss || iss.kind !== "issue") return err(`GraphQL: Could not resolve to an issue with the number of ${args[2]}. (repository.issue)`);
        if (action === "view") {
          say(`${iss.title} ${slug}#${iss.n}`);
          say(`${iss.state === "OPEN" ? "Open" : "Closed"} • ${iss.author} opened • ${plural(iss.comments.length, "comment", "comments")}`);
          if (iss.labels.length) say(`Labels: ${iss.labels.join(", ")}`);
          if (iss.assignee) say(`Assignees: ${iss.assignee}`);
          say("");
          say(iss.body ? "  " + iss.body : "  No description provided");
          iss.comments.forEach(c => say(`\n${c.by} • ${c.body}`));
          return say(`\nView this issue on GitHub: ${base}/issues/${iss.n}`);
        }
        if (action === "comment") {
          iss.comments.push({ by: world.ghUser, body: opt("--body", "-b") || "" });
          return say(`${base}/issues/${iss.n}#issuecomment-${iss.comments.length}`);
        }
        if (action === "close") {
          if (iss.state === "CLOSED") return say(`! Issue ${slug}#${iss.n} (${iss.title}) is already closed`);
          iss.state = "CLOSED";
          return say(`✓ Closed issue ${slug}#${iss.n} (${iss.title})`);
        }
        if (action === "reopen") { iss.state = "OPEN"; return say(`✓ Reopened issue ${slug}#${iss.n} (${iss.title})`); }
        if (action === "edit") {
          optAll("--add-label").forEach(l => l.split(",").forEach(x => { if (!iss.labels.includes(x)) iss.labels.push(x); }));
          const as = opt("--add-assignee");
          if (as) iss.assignee = as === "@me" ? world.ghUser : as;
          return say(`${base}/issues/${iss.n}`);
        }
      }
      return err(`unknown command "${args.join(" ")}" for "gh"`);
    };

    // ---------- أوامر الملفات ----------
    const shell = (tokens, raw) => {
      const r = repo();
      const cmd = tokens[0];
      const redirect = raw.match(/^(echo|printf)\s+(.*?)\s*(>>?)\s*(\S+)\s*$/);
      if (redirect) {
        const content = tokenize(redirect[2]).join(" ").replace(/\\n/g, "\n") + "\n";
        const file = redirect[4];
        r.files[file] = redirect[3] === ">>" ? (r.files[file] || "") + content : content;
        return;
      }
      switch (cmd) {
        case "echo": return say(tokens.slice(1).join(" "));
        case "cat": return tokens.slice(1).forEach(f => r.files[f] === undefined ? err(`cat: ${f}: No such file or directory`) : say(r.files[f]));
        case "ls": {
          const all = tokens.includes("-a");
          const names = new Set();
          Object.keys(r.files).forEach(p => names.add(p.split("/")[0]));
          Object.keys(world.repos).forEach(d => { if (world.cwd === "." && d !== ".") names.add(d); });
          if (all && r.git) names.add(".git");
          let list = [...names].sort();
          if (!all) list = list.filter(n => !n.startsWith("."));
          return say(list.join("  "));
        }
        case "touch": return tokens.slice(1).forEach(f => { if (r.files[f] === undefined) r.files[f] = ""; });
        case "rm": return tokens.slice(1).filter(t => !t.startsWith("-")).forEach(f => { delete r.files[f]; });
        case "mv": { const [a, b] = tokens.slice(1); r.files[b] = r.files[a]; delete r.files[a]; return; }
        case "mkdir": return;
        case "pwd": return say("/project" + (world.cwd === "." ? "" : "/" + world.cwd));
        case "cd": {
          const d = tokens[1];
          if (!d || d === ".." || d === "~") { world.cwd = "."; return; }
          if (!world.repos[d]) { world.repos[d] = newDir(); }
          world.cwd = d;
          return;
        }
        case "clear": return;
        default: return err(`${cmd}: command not found`);
      }
    };

    // ---------- تنفيذ السكربت ----------
    // يدعم: الأسطر العادية، و && بين الأوامر، و cat > file <<'EOF' ... EOF لكتابة ملفات متعددة الأسطر
    const api = { world, repo, say, err, git, tokenize, lines, ignored };
    const exec = async raw => {
      const tokens = tokenize(raw);
      const ext = CW.termExt && CW.termExt[tokens[0]];
      if (tokens[0] === "git") git(tokens.slice(1));
      else if (tokens[0] === "gh") gh(tokens.slice(1));
      else if (ext) return ext(tokens.slice(1), api, raw);
      else shell(tokens, raw);
    };
    const all = script.split("\n");
    for (let i = 0; i < all.length; i++) {
      const raw = all[i].trim();
      if (!raw || raw.startsWith("#")) continue;
      const heredoc = raw.match(/^cat\s*>\s*(\S+)\s*<<\s*-?\s*['"]?(\w+)['"]?\s*$/);
      if (heredoc) {
        const body = [];
        let j = i + 1;
        while (j < all.length && all[j].trim() !== heredoc[2]) body.push(all[j++]);
        out.push({ kind: "cmd", text: "$ " + raw });
        body.forEach(b => out.push({ kind: "cmd", text: "> " + b }));
        out.push({ kind: "cmd", text: "> " + heredoc[2] });
        repo().files[heredoc[1]] = body.join("\n") + "\n";
        i = j;
        continue;
      }
      out.push({ kind: "cmd", text: "$ " + raw });
      for (const part of raw.split(/\s+&&\s+/)) {
        const mark = out.length;
        try { await exec(part); }
        catch (e) { err("خطأ في المحاكي: " + e.message); }
        if (out.slice(mark).some(l => l.kind === "err" && !l.soft)) break;
      }
    }
  }

  CW.termWorld = createWorld;
  CW.termRun = run;
  // جلسة كنص: $ للأوامر، و ERR: للأخطاء (الصيغة نفسها المستخدمة في كتل ```terminal في الدروس)
  CW.termText = out => out.map(l => (l.kind === "err" ? "ERR: " : "") + l.text).join("\n");

  // ينفّذ: setup (مخفي) ثم كود الطالب ثم test (مخفي، ومخرجاته هي التي تُصحَّح)
  CW.gitRun = async (code, setup, test) => {
    const world = createWorld();
    const hidden = [];
    if (setup) await run(world, setup, hidden);
    const shown = [];
    await run(world, code, shown);
    const graded = [];
    if (test) await run(world, test, graded);
    return { shown, graded: graded.filter(l => l.kind !== "cmd"), world };
  };
})(typeof window !== "undefined" ? window : globalThis);
