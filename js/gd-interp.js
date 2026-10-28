// محاكي Godot للتعليم: مفسّر GDScript (مجموعة فرعية من Godot 4) ومشهد عُقد مبني على js/game-sim.js
// يدعم: extends و var/const و @export و @onready و func و if/elif/else و for و while و match و signal و await،
// والأعداد الصحيحة والعشرية بقواعد GDScript (5 / 2 = 2)، و Vector2، و CharacterBody2D.move_and_slide()،
// و Area2D وإشاراتها، و Timer و Label و AnimatedSprite2D و Input والمجموعات وتوليد المشاهد
(function (root) {
  const CW = root.CW = root.CW || {};

  class GDError extends Error {}
  const fail = (m, line) => { throw new GDError(line ? `${m} (السطر ${line})` : m); };

  // ---------- القيم ----------
  class Flt { constructor(v) { this.v = v; } valueOf() { return this.v; } }
  const F = v => new Flt(v);
  const isF = v => v instanceof Flt;
  const n = v => v instanceof Flt ? v.v : v;
  const isNum = v => typeof v === "number" || v instanceof Flt;
  class Vec2 {
    constructor(x = 0, y = 0) { this.x = +x; this.y = +y; }
    clone() { return new Vec2(this.x, this.y); }
  }
  class Signal { constructor(owner, name) { this.owner = owner; this.name = name; } }
  class Callable { constructor(fn, self, name) { this.fn = fn; this.self = self; this.name = name; } }
  const fmtFloat = v => { if (!isFinite(v)) return v > 0 ? "inf" : v < 0 ? "-inf" : "nan"; if (Number.isInteger(v)) return v.toFixed(1); return String(parseFloat(v.toPrecision(14))); };
  const fmtComp = v => Number.isInteger(v) ? String(v) : fmtFloat(v);
  function str(v) {
    if (v === null || v === undefined) return "<null>";
    if (v instanceof Flt) return fmtFloat(v.v);
    if (typeof v === "number") return String(v);
    if (typeof v === "boolean") return v ? "true" : "false";
    if (typeof v === "string") return v;
    if (v instanceof Vec2) return `(${fmtComp(v.x)}, ${fmtComp(v.y)})`;   // Godot 4: المتجه بلا ".0"
    if (Array.isArray(v)) return "[" + v.map(x => typeof x === "string" ? `"${x}"` : str(x)).join(", ") + "]";
    if (v instanceof Map) return v.size ? "{ " + [...v].map(([k, x]) => `${typeof k === "string" ? `"${k}"` : str(k)}: ${typeof x === "string" ? `"${x}"` : str(x)}`).join(", ") + " }" : "{  }";
    if (v instanceof GNode) return `${v.e.name}:<${v.e.type}#${v.e.id}>`;
    if (v instanceof Signal) return `${v.name}`;
    if (v instanceof Callable) return `${v.name}`;
    return String(v);
  }
  const truthy = v => v === null || v === undefined ? false : typeof v === "boolean" ? v : isNum(v) ? n(v) !== 0 : typeof v === "string" ? v.length > 0 : Array.isArray(v) ? v.length > 0 : v instanceof Map ? v.size > 0 : true;

  // ---------- التحليل اللفظي (بالمسافة البادئة كـ Python) ----------
  function lex(src) {
    const toks = [];
    const lines = src.replace(/\t/g, "    ").split("\n");
    const indents = [0];
    let depth = 0;   // داخل الأقواس: لا أسطر ولا مسافات بادئة
    lines.forEach((raw, li) => {
      const line = li + 1;
      let s = raw;
      if (depth === 0) {
        if (!s.trim() || /^\s*#/.test(s)) return;
        const ind = s.match(/^ */)[0].length;
        if (ind > indents[indents.length - 1]) { indents.push(ind); toks.push({ k: "indent", line }); }
        while (ind < indents[indents.length - 1]) { indents.pop(); toks.push({ k: "dedent", line }); }
        if (ind !== indents[indents.length - 1]) fail("Parse Error: مسافة بادئة غير متسقة", line);
      }
      let i = 0;
      while (i < s.length) {
        const r = s.slice(i);
        let m;
        if ((m = /^\s+/.exec(r))) { i += m[0].length; continue; }
        if (r[0] === "#") break;
        if ((m = /^("""[\s\S]*?"""|"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')/.exec(r))) {
          const body = m[0].startsWith('"""') ? m[0].slice(3, -3) : m[0].slice(1, -1);
          toks.push({ k: "str", v: body.replace(/\\(.)/g, (x, c) => ({ n: "\n", t: "\t", '"': '"', "'": "'", "\\": "\\" })[c] ?? c), line });
          i += m[0].length; continue;
        }
        if ((m = /^\$("[^"]*"|[A-Za-z_][\w/]*)/.exec(r))) { toks.push({ k: "nodepath", v: m[1].replace(/^"|"$/g, ""), line }); i += m[0].length; continue; }
        if ((m = /^(0x[0-9a-fA-F_]+|\d[\d_]*\.\d*(?:e[-+]?\d+)?|\d[\d_]*e[-+]?\d+|\.\d+|\d[\d_]*)/i.exec(r))) {
          const t = m[0].replace(/_/g, "");
          toks.push({ k: "num", v: /^0x/i.test(t) ? parseInt(t, 16) : /[.e]/i.test(t) ? F(parseFloat(t)) : parseInt(t, 10), line });
          i += m[0].length; continue;
        }
        if ((m = /^@[A-Za-z_]\w*/.exec(r))) { toks.push({ k: "annot", v: m[0].slice(1), line }); i += m[0].length; continue; }
        if ((m = /^[A-Za-z_]\w*/.exec(r))) { toks.push({ k: "id", v: m[0], line }); i += m[0].length; continue; }
        if ((m = /^(\*\*=|\*\*|->|:=|==|!=|<=|>=|\+=|-=|\*=|\/=|%=|&&|\|\||[-+*/%<>=!()[\]{},.:&|^~])/.exec(r))) {
          const v = m[0];
          if ("([{".includes(v)) depth++;
          if (")]}".includes(v)) depth = Math.max(0, depth - 1);
          toks.push({ k: "op", v, line }); i += v.length; continue;
        }
        fail(`Parse Error: رمز غير متوقع "${r[0]}"`, line);
      }
      if (depth === 0) toks.push({ k: "nl", line });
    });
    while (indents.length > 1) { indents.pop(); toks.push({ k: "dedent", line: lines.length }); }
    toks.push({ k: "eof", line: lines.length });
    return toks;
  }

  // ---------- التحليل النحوي ----------
  const KW = new Set(["if", "elif", "else", "for", "while", "match", "return", "pass", "break", "continue", "var", "const", "func", "signal", "extends", "class_name", "and", "or", "not", "in", "true", "false", "null", "self", "await", "enum", "is", "as", "static"]);
  function parse(src) {
    const t = lex(src);
    let p = 0;
    const peek = (o = 0) => t[p + o];
    const at = (k, v) => t[p].k === k && (v === undefined || t[p].v === v);
    const isOp = v => at("op", v);
    const isKw = v => at("id", v);
    const next = () => t[p++];
    const expect = (k, v) => { if (!at(k, v)) fail(`Parse Error: متوقع "${v || k}" ووُجد "${t[p].v ?? t[p].k}"`, t[p].line); return next(); };
    const skipNl = () => { while (at("nl")) p++; };

    function block() {
      // ":" ثم إما تعليمة على نفس السطر أو كتلة مزاحة
      expect("op", ":");
      if (!at("nl")) { const s = simpleStmt(); return [s]; }
      skipNl();
      if (!at("indent")) fail("Parse Error: متوقع كتلة مزاحة بعد \":\"", t[p].line);
      p++;
      const body = [];
      while (!at("dedent") && !at("eof")) { const s = statement(); if (s) body.push(s); skipNl(); }
      if (at("dedent")) p++;
      return body;
    }
    function typeHint() { if (isOp(":") && peek(1).k === "id") { p++; next(); if (isOp("[")) { p++; next(); expect("op", "]"); } return true; } return false; }
    function statement() {
      skipNl();
      const line = t[p].line;
      if (isKw("if")) {
        p++;
        const branches = [{ cond: expr(), body: block() }];
        skipNl();
        let els = null;
        while (isKw("elif")) { p++; branches.push({ cond: expr(), body: block() }); skipNl(); }
        if (isKw("else")) { p++; els = block(); }
        return { k: "if", branches, els, line };
      }
      if (isKw("for")) { p++; const name = next().v; typeHint(); expect("id", "in"); const iter = expr(); return { k: "for", name, iter, body: block(), line }; }
      if (isKw("while")) { p++; const cond = expr(); return { k: "while", cond, body: block(), line }; }
      if (isKw("match")) {
        p++;
        const subject = expr();
        expect("op", ":"); skipNl(); expect("indent");
        const cases = [];
        while (!at("dedent") && !at("eof")) {
          const pats = [];
          do { if (isOp(",")) p++; pats.push(at("id", "_") ? (p++, { k: "wild" }) : expr()); } while (isOp(","));
          cases.push({ pats, body: block() });
          skipNl();
        }
        if (at("dedent")) p++;
        return { k: "match", subject, cases, line };
      }
      return simpleStmt();
    }
    function simpleStmt() {
      const line = t[p].line;
      let s;
      if (isKw("pass")) { p++; s = { k: "pass" }; }
      else if (isKw("break")) { p++; s = { k: "break" }; }
      else if (isKw("continue")) { p++; s = { k: "continue" }; }
      else if (isKw("return")) { p++; s = { k: "return", e: at("nl") || at("dedent") || at("eof") ? null : expr(), line }; }
      else if (isKw("var") || isKw("const")) { const konst = next().v === "const"; const name = next().v; typeHint(); let init = null; if (isOp("=") || isOp(":=")) { p++; init = expr(); } s = { k: "var", name, init, konst, line }; }
      else {
        const e = expr();
        if (t[p].k === "op" && ["=", "+=", "-=", "*=", "/=", "%="].includes(t[p].v)) {
          const op = next().v;
          if (!["id", "attr", "index"].includes(e.k)) fail("Parse Error: لا يمكن الإسناد إلى هذا التعبير", line);
          s = { k: "assign", target: e, op, e: expr(), line };
        } else s = { k: "expr", e, line };
      }
      if (!at("nl") && !at("dedent") && !at("eof") && !isOp(")") && !isOp(",") && !isOp("]")) { if (isOp(";")) p++; else fail(`Parse Error: رمز زائد "${t[p].v}"`, t[p].line); }
      return s;
    }
    // الأسبقية: if-else ← or ← and ← not ← in/مقارنة ← | ← & ← +/- ← * / % ← سالب ← ** ← لاحقة
    function expr() {
      let e = orE();
      if (isKw("if")) { p++; const c = orE(); expect("id", "else"); const b = expr(); e = { k: "tern", a: e, c, b }; }
      return e;
    }
    function orE() { let l = andE(); while (isKw("or") || isOp("||")) { p++; l = { k: "or", l, r: andE() }; } return l; }
    function andE() { let l = notE(); while (isKw("and") || isOp("&&")) { p++; l = { k: "and", l, r: notE() }; } return l; }
    function notE() { if (isKw("not") || isOp("!")) { p++; return { k: "not", e: notE() }; } return cmpE(); }
    function cmpE() {
      let l = addE();
      for (;;) {
        if (t[p].k === "op" && ["==", "!=", "<", ">", "<=", ">="].includes(t[p].v)) { const op = next().v; l = { k: "bin", op, l, r: addE() }; }
        else if (isKw("in")) { p++; l = { k: "in", l, r: addE() }; }
        else if (isKw("not") && peek(1).k === "id" && peek(1).v === "in") { p += 2; l = { k: "not", e: { k: "in", l, r: addE() } }; }
        else if (isKw("is")) { p++; l = { k: "is", e: l, type: next().v }; }
        else if (isKw("as")) { p++; next(); }
        else break;
      }
      return l;
    }
    function addE() { let l = mulE(); while (isOp("+") || isOp("-")) { const op = next().v; l = { k: "bin", op, l, r: mulE() }; } return l; }
    function mulE() { let l = unary(); while (isOp("*") || isOp("/") || isOp("%")) { const op = next().v; l = { k: "bin", op, l, r: unary() }; } return l; }
    function unary() {
      if (isOp("-")) { p++; return { k: "neg", e: unary() }; }
      if (isOp("+")) { p++; return unary(); }
      if (isKw("await")) { p++; return { k: "await", e: unary() }; }
      const b = postfix();
      if (isOp("**")) { p++; return { k: "bin", op: "**", l: b, r: unary() }; }
      return b;
    }
    function args() {
      const a = [];
      expect("op", "(");
      while (!isOp(")")) { a.push(expr()); if (isOp(",")) p++; else break; }
      expect("op", ")");
      return a;
    }
    function postfix() {
      let e = primary();
      for (;;) {
        if (isOp("(")) { const line = t[p].line; e = { k: "call", f: e, args: args(), line }; }
        else if (isOp(".")) { p++; const name = next().v; e = { k: "attr", obj: e, name, line: t[p - 1].line }; }
        else if (isOp("[")) { p++; const i = expr(); expect("op", "]"); e = { k: "index", obj: e, i }; }
        else break;
      }
      return e;
    }
    function primary() {
      const tk = next();
      const line = tk.line;
      if (tk.k === "num") return { k: "lit", v: tk.v };
      if (tk.k === "str") return { k: "lit", v: tk.v };
      if (tk.k === "nodepath") return { k: "node", path: tk.v, line };
      if (tk.k === "op" && tk.v === "(") { const e = expr(); expect("op", ")"); return e; }
      if (tk.k === "op" && tk.v === "[") { const items = []; while (!isOp("]")) { items.push(expr()); if (isOp(",")) p++; else break; } expect("op", "]"); return { k: "arr", items }; }
      if (tk.k === "op" && tk.v === "{") {
        const items = [];
        while (!isOp("}")) {
          let key;
          if (at("id") && peek(1).k === "op" && peek(1).v === "=") { key = { k: "lit", v: next().v }; p++; }
          else { key = expr(); expect("op", ":"); }
          items.push([key, expr()]);
          if (isOp(",")) p++; else break;
        }
        expect("op", "}");
        return { k: "dict", items };
      }
      if (tk.k === "id") {
        if (tk.v === "true") return { k: "lit", v: true };
        if (tk.v === "false") return { k: "lit", v: false };
        if (tk.v === "null") return { k: "lit", v: null };
        if (tk.v === "self") return { k: "self" };
        if (tk.v === "func") {
          // دالة مجهولة: func(a, b): تعبير
          const params = [];
          expect("op", "(");
          while (!isOp(")")) { params.push(next().v); typeHint(); if (isOp(",")) p++; else break; }
          expect("op", ")");
          if (isOp("->")) { p++; next(); }
          const body = block();
          return { k: "lambda", params, body };
        }
        if (KW.has(tk.v) && !["self"].includes(tk.v)) fail(`Parse Error: كلمة محجوزة في غير مكانها "${tk.v}"`, line);
        return { k: "id", name: tk.v, line };
      }
      fail(`Parse Error: رمز غير متوقع "${tk.v ?? tk.k}"`, line);
    }

    // ---------- الصنف ----------
    const cls = { extends: "Node", vars: [], funcs: {}, signals: [], consts: {}, enums: {} };
    skipNl();
    while (!at("eof")) {
      skipNl();
      if (at("eof")) break;
      const annots = [];
      while (at("annot")) { const a = next().v; if (isOp("(")) args(); annots.push(a); skipNl(); }
      const line = t[p].line;
      if (isKw("extends")) { p++; cls.extends = next().v; }
      else if (isKw("class_name")) { p++; cls.name = next().v; }
      else if (isKw("signal")) { p++; const name = next().v; if (isOp("(")) { p++; while (!isOp(")")) p++; p++; } cls.signals.push(name); }
      else if (isKw("enum")) {
        p++;
        const ename = at("id") ? next().v : null;
        expect("op", "{"); skipNl();
        let i = 0;
        const vals = {};
        while (!isOp("}")) { skipNl(); const k = next().v; if (isOp("=")) { p++; i = n(primary().v); } vals[k] = i++; if (isOp(",")) p++; skipNl(); }
        expect("op", "}");
        if (ename) cls.enums[ename] = vals; else Object.assign(cls.consts, vals);
      }
      else if (isKw("var") || isKw("const")) {
        const konst = next().v === "const";
        const name = next().v;
        typeHint();
        let init = null;
        if (isOp("=") || isOp(":=")) { p++; init = expr(); }
        cls.vars.push({ name, init, konst, export: annots.includes("export") || annots.some(a => a.startsWith("export")), onready: annots.includes("onready"), line });
      }
      else if (isKw("func") || (isKw("static") && peek(1).v === "func")) {
        if (isKw("static")) p++;
        p++;
        const name = next().v;
        const params = [];
        expect("op", "(");
        while (!isOp(")")) { const pn = next().v; typeHint(); let def = null; if (isOp("=") || isOp(":=")) { p++; def = expr(); } params.push({ name: pn, def }); if (isOp(",")) p++; else break; }
        expect("op", ")");
        if (isOp("->")) { p++; next(); }
        cls.funcs[name] = { name, params, body: block(), line };
      }
      else fail(`Parse Error: متوقع تعريف (var أو func أو signal) ووُجد "${t[p].v ?? t[p].k}"`, line);
      skipNl();
    }
    return cls;
  }

  // ---------- عُقد Godot ----------
  const ANIM_FRAMES = { idle: [4], walk: [5, 6, 7, 8], run: [5, 6, 7, 8], jump: [6], fall: [7], hurt: [4] };
  const BODY = { CharacterBody2D: "character", RigidBody2D: "rigid", StaticBody2D: "static", Area2D: "area", AnimatableBody2D: "kinematic" };
  class GNode {
    constructor(game, e) { this.game = game; this.e = e; }
  }

  function Game(say) {
    const world = new CW.Sim.World({ yUp: false, gravity: new CW.Sim.V(0, 980), ppu: 1, view: { w: 480, h: 320, ox: 0, oy: 0 } });
    const G = { world, scripts: {}, templates: {}, actions: {}, inst: new Map(), coroutines: [], timers: [], pending: [], groups: new Map(), scene: null, rngState: 12345, sceneChange: null };
    const wrap = e => { if (!e) return null; if (!G.inst.has(e)) G.inst.set(e, new GNode(G, e)); return G.inst.get(e); };
    G.wrap = wrap;
    const rng = () => { G.rngState = (G.rngState * 1103515245 + 12345) % 2147483648; return G.rngState / 2147483648; };
    G.actions = { ui_left: ["left"], ui_right: ["right"], ui_up: ["up"], ui_down: ["down"], ui_accept: ["enter", "space"], ui_cancel: ["escape"] };

    // ----- بناء المشهد من النص -----
    function parseProps(s) {
      const props = {};
      const re = /(\w+)=("([^"]*)"|\([^)]*\)|\S+)/g;
      let m;
      while ((m = re.exec(s))) props[m[1]] = m[3] !== undefined ? m[3] : m[2];
      return props;
    }
    const tuple = s => s.replace(/[()]/g, "").split(",").map(x => parseFloat(x));
    function buildTree(lines, parent) {
      const stack = [{ ind: -1, e: parent }];
      const made = [];
      for (const raw of lines) {
        if (!raw.trim() || raw.trim().startsWith("#")) continue;
        const ind = raw.match(/^ */)[0].length;
        const m = /^\s*([\w-]+)\s*:\s*(\w+)\s*(.*)$/.exec(raw);
        if (!m) fail(`صيغة المشهد: "Name: Type key=value" ووُجد "${raw.trim()}"`);
        const [, name, type, rest] = m;
        const pr = parseProps(rest);
        while (stack.length && stack[stack.length - 1].ind >= ind) stack.pop();
        const par = stack[stack.length - 1].e;
        const spec = { name, type, pos: pr.pos ? tuple(pr.pos) : [0, 0], body: BODY[type] || null };
        if (type === "CollisionShape2D" || type === "Area2D" && pr.rect || pr.rect || pr.circle) {
          if (pr.rect) { const [w, h] = tuple(pr.rect); spec.shape = { kind: "rect", w, h }; }
          if (pr.circle) spec.shape = { kind: "circle", r: parseFloat(pr.circle) };
          if (type !== "CollisionShape2D" && !BODY[type]) delete spec.shape;
        }
        const e = world.add(spec, par);
        if (pr.color) e.visual = { color: pr.color };
        if (pr.sprite) e.visual = Object.assign(e.visual || {}, { sprite: pr.sprite, frame: pr.frame ? +pr.frame : pr.sprite === "player" ? 4 : 0, frameW: pr.sprite === "player" ? 32 : null, frameH: pr.sprite === "player" ? 48 : null });
        if (type === "Label") { e.visual = { text: pr.text ?? "", color: pr.color || "#ffffff", size: 16 }; }
        if (type === "Timer") e.data.timer = { wait: pr.wait_time ? parseFloat(pr.wait_time) : 1, one_shot: pr.one_shot === "true", left: 0, running: false, autostart: pr.autostart === "true" };
        if (type === "AnimatedSprite2D") e.data.anim = { name: pr.animation || "idle", playing: false, frame: 0, t: 0 };
        if (type === "RayCast2D") e.data.target = pr.target ? tuple(pr.target) : [0, 50];
        if (pr.scale) { const [x, y] = tuple(pr.scale); e.scale.x = x; e.scale.y = y ?? x; }
        if (pr.rotation_degrees) e.rot = parseFloat(pr.rotation_degrees);
        if (pr.visible === "false") e.active = false;
        if (pr.gravity_scale) e.gravityScale = parseFloat(pr.gravity_scale);
        if (pr.group) pr.group.split(",").forEach(g => e.tags.add(g));
        if (pr.script) e.data.scriptFile = pr.script;
        if (pr.label) e.visual = Object.assign(e.visual || { color: "#888" }, { label: name });
        e.data.props = pr;
        stack.push({ ind, e });
        made.push(e);
      }
      return made;
    }
    // ----- السكربتات -----
    function attach(e, file) {
      const cls = G.scripts[file];
      if (!cls) fail(`السكربت ${file} غير موجود`);
      const node = wrap(e);
      node.cls = cls;
      node.vars = new Map();
      node.signals = new Map();
      cls.signals.forEach(s => node.signals.set(s, []));
      const env = { node, locals: [] };
      for (const v of cls.vars) {
        if (v.onready) { node.vars.set(v.name, null); continue; }
        node.vars.set(v.name, v.init ? evalE(v.init, env) : defaultFor(v));
      }
      // قيم @export من المشهد تتغلب على القيم الافتراضية
      const pr = e.data.props || {};
      for (const v of cls.vars) if (v.export && pr[v.name] !== undefined) node.vars.set(v.name, parseLiteral(pr[v.name]));
      Object.entries(cls.consts).forEach(([k, v]) => node.vars.set(k, v));
      Object.entries(cls.enums).forEach(([k, v]) => node.vars.set(k, new Map(Object.entries(v))));
    }
    const defaultFor = v => null;
    const parseLiteral = s => /^-?\d+$/.test(s) ? parseInt(s, 10) : /^-?\d*\.\d+$/.test(s) ? F(parseFloat(s)) : s === "true" ? true : s === "false" ? false : s;
    function ready(e) {
      for (const c of e.children) ready(c);
      const node = wrap(e);
      if (!node.cls) return;
      const env = { node, locals: [] };
      for (const v of node.cls.vars) if (v.onready) node.vars.set(v.name, v.init ? evalE(v.init, env) : null);
      if (node.cls.funcs._ready) callUser(node, "_ready", []);
    }

    // ----- التنفيذ -----
    class Ret { constructor(v) { this.v = v; } }
    const BRK = {}, CNT = {};
    function callUser(node, name, args) {
      const f = node.cls.funcs[name];
      const locals = [new Map()];
      f.params.forEach((pp, i) => locals[0].set(pp.name, args[i] !== undefined ? args[i] : pp.def ? evalE(pp.def, { node, locals }) : null));
      return runFn(node, f.body, locals);
    }
    // تشغيل دالة كـ coroutine: إذا وصلت await تتوقف وتُستأنف لاحقاً، والمستدعي يكمل فوراً كما في Godot
    function runFn(node, body, locals) {
      const gen = execBlock(body, { node, locals });
      return drive(gen);
    }
    function drive(gen, input) {
      let r = gen.next(input);
      while (!r.done) {
        const w = r.value;   // انتظار: { timer } أو { signal }
        G.coroutines.push({ gen, wait: w });
        return null;
      }
      return r.value instanceof Ret ? r.value.v : null;
    }
    function* execBlock(stmts, env) {
      for (const s of stmts) {
        const r = yield* exec(s, env);
        if (r === BRK || r === CNT || r instanceof Ret) return r;
      }
    }
    function lookupLocal(env, name) { for (let i = env.locals.length - 1; i >= 0; i--) if (env.locals[i].has(name)) return env.locals[i]; return null; }
    function* exec(s, env) {
      G.steps = (G.steps || 0) + 1;
      if (G.steps > 5e6) fail("توقف التنفيذ: حلقة لا تنتهي؟");
      switch (s.k) {
        case "pass": return;
        case "break": return BRK;
        case "continue": return CNT;
        case "return": { const v = s.e ? yield* evalAwait(s.e, env) : null; return new Ret(v); }
        case "var": { const v = s.init ? yield* evalAwait(s.init, env) : null; env.locals[env.locals.length - 1].set(s.name, v); return; }
        case "expr": { yield* evalAwait(s.e, env); return; }
        case "assign": {
          let v = yield* evalAwait(s.e, env);
          if (s.op !== "=") v = binop(s.op[0], evalE(s.target, env), v, s.line);
          assign(s.target, v, env, s.line);
          return;
        }
        case "if": {
          for (const b of s.branches) if (truthy(evalE(b.cond, env))) { env.locals.push(new Map()); const r = yield* execBlock(b.body, env); env.locals.pop(); return r; }
          if (s.els) { env.locals.push(new Map()); const r = yield* execBlock(s.els, env); env.locals.pop(); return r; }
          return;
        }
        case "while": {
          let guard = 0;
          while (truthy(evalE(s.cond, env))) {
            if (++guard > 1e6) fail("توقف التنفيذ: حلقة while لا تنتهي", s.line);
            env.locals.push(new Map()); const r = yield* execBlock(s.body, env); env.locals.pop();
            if (r === BRK) break;
            if (r instanceof Ret) return r;
          }
          return;
        }
        case "for": {
          let it = evalE(s.iter, env);
          if (isNum(it)) it = Array.from({ length: Math.max(0, n(it)) }, (_, i) => i);
          if (it instanceof Map) it = [...it.keys()];
          if (typeof it === "string") it = [...it];
          if (!Array.isArray(it)) fail("لا يمكن التكرار على " + str(it), s.line);
          for (const x of [...it]) {
            env.locals.push(new Map([[s.name, x]]));
            const r = yield* execBlock(s.body, env);
            env.locals.pop();
            if (r === BRK) break;
            if (r instanceof Ret) return r;
          }
          return;
        }
        case "match": {
          const v = evalE(s.subject, env);
          for (const c of s.cases) {
            if (c.pats.some(pt => pt.k === "wild" || equal(evalE(pt, env), v))) { env.locals.push(new Map()); const r = yield* execBlock(c.body, env); env.locals.pop(); return r; }
          }
          return;
        }
      }
    }
    // await داخل تعبير: نقيّم ما عداه عادياً
    function* evalAwait(e, env) {
      if (e.k === "await") {
        const target = evalE(e.e, env);
        if (target instanceof Signal) { const v = yield { signal: target }; return v; }
        return target;
      }
      return evalE(e, env);
    }
    const equal = (a, b) => {
      if (isNum(a) && isNum(b)) return n(a) === n(b);
      if (a instanceof Vec2 && b instanceof Vec2) return a.x === b.x && a.y === b.y;
      if (a instanceof GNode && b instanceof GNode) return a.e === b.e;
      return a === b;
    };
    function binop(op, a, b, line) {
      if (op === "==") return equal(a, b);
      if (op === "!=") return !equal(a, b);
      if (op === "+" && typeof a === "string" && typeof b === "string") return a + b;
      if (op === "+" && Array.isArray(a) && Array.isArray(b)) return a.concat(b);
      if (op === "%" && typeof a === "string") return format(a, b);
      if (a instanceof Vec2 || b instanceof Vec2) {
        if (a instanceof Vec2 && b instanceof Vec2) {
          if (op === "+") return new Vec2(a.x + b.x, a.y + b.y);
          if (op === "-") return new Vec2(a.x - b.x, a.y - b.y);
          if (op === "*") return new Vec2(a.x * b.x, a.y * b.y);
          if (op === "/") return new Vec2(a.x / b.x, a.y / b.y);
        } else if (isNum(b) && a instanceof Vec2) {
          if (op === "*") return new Vec2(a.x * n(b), a.y * n(b));
          if (op === "/") return new Vec2(a.x / n(b), a.y / n(b));
        } else if (isNum(a) && op === "*") return new Vec2(b.x * n(a), b.y * n(a));
        fail(`Invalid operands "${typeName(a)}" and "${typeName(b)}" for "${op}" operator.`, line);
      }
      if (["<", ">", "<=", ">="].includes(op)) {
        if (!(isNum(a) && isNum(b)) && !(typeof a === "string" && typeof b === "string")) fail(`Invalid operands "${typeName(a)}" and "${typeName(b)}" for "${op}" operator.`, line);
        const x = isNum(a) ? n(a) : a, y = isNum(b) ? n(b) : b;
        return { "<": x < y, ">": x > y, "<=": x <= y, ">=": x >= y }[op];
      }
      if (!isNum(a) || !isNum(b)) fail(`Invalid operands "${typeName(a)}" and "${typeName(b)}" for "${op}" operator.`, line);
      const fl = isF(a) || isF(b), x = n(a), y = n(b);
      switch (op) {
        case "+": return fl ? F(x + y) : x + y;
        case "-": return fl ? F(x - y) : x - y;
        case "*": return fl ? F(x * y) : x * y;
        case "/": if (!fl) { if (y === 0) fail("Division by zero error in operator '/'.", line); return Math.trunc(x / y); } return F(x / y);
        case "%": if (!fl) { if (y === 0) fail("Modulo by zero error in operator '%'.", line); return x % y; } fail(`Invalid operands "float" for "%" operator: استخدم fmod()`, line);
        case "**": return fl || y < 0 ? F(Math.pow(x, y)) : Math.pow(x, y);
      }
    }
    function typeName(v) { return v === null ? "Nil" : typeof v === "boolean" ? "bool" : isF(v) ? "float" : typeof v === "number" ? "int" : typeof v === "string" ? "String" : v instanceof Vec2 ? "Vector2" : Array.isArray(v) ? "Array" : v instanceof Map ? "Dictionary" : v instanceof GNode ? "Object" : "Variant"; }
    function format(fmt, args) {
      const list = Array.isArray(args) ? args : [args];
      let i = 0;
      return fmt.replace(/%(-?\d*)(?:\.(\d+))?([sdif%])/g, (m, w, prec, c) => {
        if (c === "%") return "%";
        const v = list[i++];
        let s;
        if (c === "d" || c === "i") s = String(Math.trunc(n(v)));
        else if (c === "f") s = n(v).toFixed(prec ? +prec : 6);
        else s = str(v);
        return w ? s.padStart(+w) : s;
      });
    }
    function assign(target, v, env, line) {
      if (target.k === "id") {
        const loc = lookupLocal(env, target.name);
        if (loc) return loc.set(target.name, v);
        if (env.node.vars && env.node.vars.has(target.name)) { const decl = env.node.cls.vars.find(x => x.name === target.name); if (decl && decl.konst) fail(`لا يمكن تغيير الثابت "${target.name}"`, line); return env.node.vars.set(target.name, v); }
        return setProp(env.node, target.name, v, line);
      }
      if (target.k === "attr") {
        const obj = evalE(target.obj, env);
        if (obj instanceof Vec2) { const c = obj.clone(); c[target.name] = n(v); return assign(target.obj, c, env, line); }
        return setProp(obj, target.name, v, line);
      }
      if (target.k === "index") {
        const obj = evalE(target.obj, env), i = evalE(target.i, env);
        if (Array.isArray(obj)) { const k = n(i); if (k < 0 || k >= obj.length) fail(`Out of bounds set index '${k}' (on base: 'Array')`, line); obj[k] = v; return; }
        if (obj instanceof Map) return obj.set(i, v);
        fail("لا يمكن الإسناد بالفهرس هنا", line);
      }
    }

    // ----- خصائص العقد ودوالها -----
    function getProp(obj, name, line) {
      if (obj instanceof GNode) {
        const e = obj.e;
        if (obj.vars && obj.vars.has(name)) return obj.vars.get(name);
        if (obj.signals && obj.signals.has(name)) return new Signal(obj, name);
        switch (name) {
          case "position": return new Vec2(e.pos.x, e.pos.y);
          case "global_position": { const g = e.global(); return new Vec2(g.x, g.y); }
          case "velocity": case "linear_velocity": return new Vec2(e.vel.x, e.vel.y);
          case "rotation": return F(e.rot * Math.PI / 180);
          case "rotation_degrees": return F(e.rot);
          case "scale": return new Vec2(e.scale.x, e.scale.y);
          case "visible": return e.active;
          case "name": return e.name;
          case "text": return e.visual && e.visual.text != null ? String(e.visual.text) : "";
          case "gravity_scale": return F(e.gravityScale);
          case "flip_h": return !!(e.visual && e.visual.flip);
          case "animation": return e.data.anim ? e.data.anim.name : "";
          case "frame": return e.data.anim ? e.data.anim.frame : 0;
          case "time_left": return F(e.data.timer ? e.data.timer.left : 0);
          case "wait_time": return F(e.data.timer ? e.data.timer.wait : 0);
          case "one_shot": return e.data.timer ? e.data.timer.one_shot : false;
          case "disabled": return !e.active;
          case "target_position": return new Vec2(...(e.data.target || [0, 0]));
          case "body_entered": case "body_exited": case "area_entered": case "timeout": case "animation_finished": case "pressed": return new Signal(obj, name);
        }
        if (BUILTIN_METHODS[name]) return new Callable((...a) => BUILTIN_METHODS[name](obj, a, line), obj, name);
        if (obj.cls && obj.cls.funcs[name]) return new Callable((...a) => callUser(obj, name, a), obj, name);
        fail(`Invalid access to property or key '${name}' on a base object of type '${e.type}'.`, line);
      }
      if (obj instanceof Vec2) {
        if (name === "x" || name === "y") return F(obj[name]);
        const m = VEC_METHODS[name];
        if (m) return new Callable((...a) => m(obj, a), obj, name);
      }
      if (obj instanceof Map && obj.has(name)) return obj.get(name);
      if (obj && obj.__static) { if (name in obj) return obj[name]; }
      if (typeof obj === "string" || Array.isArray(obj) || obj instanceof Map) {
        const m = (typeof obj === "string" ? STR_METHODS : Array.isArray(obj) ? ARR_METHODS : DICT_METHODS)[name];
        if (m) return new Callable((...a) => m(obj, a), obj, name);
      }
      if (obj instanceof Signal) {
        if (name === "connect") return new Callable(cb => { connect(obj, cb); return 0; }, obj, name);
        if (name === "emit") return new Callable((...a) => emit(obj, a), obj, name);
        if (name === "disconnect") return new Callable(cb => { const l = obj.owner.signals.get(obj.name) || []; obj.owner.signals.set(obj.name, l.filter(x => x.fn !== cb.fn)); }, obj, name);
      }
      fail(`Invalid access to property or key '${name}' on a base object of type '${typeName(obj)}'.`, line);
    }
    function setProp(obj, name, v, line) {
      if (obj instanceof GNode) {
        const e = obj.e;
        if (obj.vars && obj.vars.has(name)) return obj.vars.set(name, v);
        switch (name) {
          case "position": e.pos.x = v.x; e.pos.y = v.y; return;
          case "global_position": { const g = e.global(); e.pos.x += v.x - g.x; e.pos.y += v.y - g.y; return; }
          case "velocity": case "linear_velocity": e.vel.x = v.x; e.vel.y = v.y; return;
          case "rotation": e.rot = n(v) * 180 / Math.PI; return;
          case "rotation_degrees": e.rot = n(v); return;
          case "scale": e.scale.x = v.x; e.scale.y = v.y; return;
          case "visible": e.active = !!v; return;
          case "text": e.visual = Object.assign(e.visual || {}, { text: str(v) }); return;
          case "gravity_scale": e.gravityScale = n(v); return;
          case "flip_h": e.visual = Object.assign(e.visual || {}, { flip: !!v }); return;
          case "wait_time": e.data.timer.wait = n(v); return;
          case "one_shot": e.data.timer.one_shot = !!v; return;
          case "disabled": e.active = !v; return;
          case "modulate": return;
          case "animation": if (e.data.anim) e.data.anim.name = v; return;
        }
        fail(`Invalid assignment of property or key '${name}' on a base object of type '${e.type}'.`, line);
      }
      if (obj instanceof Map) return obj.set(name, v);
      fail(`Invalid assignment of property '${name}' on '${typeName(obj)}'.`, line);
    }
    function connect(sig, cb) {
      if (!(cb instanceof Callable)) fail("connect تحتاج دالة (Callable)");
      const owner = sig.owner;
      if (!owner.signals) owner.signals = new Map();
      if (!owner.signals.has(sig.name)) owner.signals.set(sig.name, []);
      owner.signals.get(sig.name).push(cb);
    }
    function emit(sig, args) {
      const owner = sig.owner;
      const list = (owner.signals && owner.signals.get(sig.name)) || [];
      list.slice().forEach(cb => cb.fn(...args));
      // استئناف ما ينتظر هذه الإشارة بـ await
      const waiting = G.coroutines.filter(c => c.wait.signal && c.wait.signal.owner === owner && c.wait.signal.name === sig.name);
      G.coroutines = G.coroutines.filter(c => !waiting.includes(c));
      waiting.forEach(c => drive(c.gen, args[0] ?? null));
    }
    G.emit = emit;

    const BUILTIN_METHODS = {
      move_and_slide: (node) => { world.moveAndSlide(node.e, G.dt || 1 / 60); return world.solids(node.e).some(() => false); },
      is_on_floor: node => node.e.flags.floor,
      is_on_wall: node => node.e.flags.wall,
      is_on_ceiling: node => node.e.flags.ceiling,
      get_gravity: () => new Vec2(world.gravity.x, world.gravity.y),
      apply_impulse: (node, [v]) => { node.e.vel.x += v.x; node.e.vel.y += v.y; },
      apply_central_impulse: (node, [v]) => { node.e.vel.x += v.x; node.e.vel.y += v.y; },
      queue_free: node => { pendingFree.push(node.e); },
      get_node: (node, [p], line) => getNode(node, p, line),
      get_node_or_null: (node, [p]) => node.e.find(p) ? wrap(node.e.find(p)) : null,
      has_node: (node, [p]) => !!node.e.find(p),
      get_parent: node => wrap(node.e.parent),
      get_child_count: node => node.e.children.filter(c => !c.destroyed).length,
      get_child: (node, [i]) => wrap(node.e.children.filter(c => !c.destroyed)[n(i)] || null),
      get_children: node => node.e.children.filter(c => !c.destroyed).map(wrap),
      add_child: (node, [c]) => { addChild(node.e, c.e); },
      get_tree: node => tree,
      add_to_group: (node, [g]) => { node.e.tags.add(g); },
      remove_from_group: (node, [g]) => { node.e.tags.delete(g); },
      is_in_group: (node, [g]) => node.e.tags.has(g),
      get_overlapping_bodies: node => world.all().filter(o => o !== node.e && o.body && o.body !== "area" && o.isActive() && CW.Sim.World.overlap(world.aabb(node.e), world.aabb(o))).map(wrap),
      play: (node, [name]) => { const known = node.e.data.props && node.e.data.props.animations; if (node.e.data.anim && name != null && known && !known.split(",").includes(name)) { say(`E: play(): There is no animation with name '${name}'.`, "err"); return; } if (node.e.data.anim) { if (name != null && name !== node.e.data.anim.name) { node.e.data.anim.name = name; node.e.data.anim.frame = 0; } node.e.data.anim.playing = true; } else if (node.e.type.startsWith("Audio")) say("♪ " + node.e.name + " play"); },
      stop: node => { if (node.e.data.anim) node.e.data.anim.playing = false; if (node.e.data.timer) node.e.data.timer.running = false; },
      start: (node, [t]) => { const tm = node.e.data.timer; if (t != null) tm.wait = n(t); tm.left = tm.wait; tm.running = true; },
      is_stopped: node => !node.e.data.timer.running,
      is_playing: node => node.e.data.anim ? node.e.data.anim.playing : false,
      is_colliding: node => !!raycastOf(node),
      get_collider: node => { const h = raycastOf(node); return h ? wrap(h.entity) : null; },
      look_at: (node, [p]) => { const g = node.e.global(); node.e.rot = Math.atan2(p.y - g.y, p.x - g.x) * 180 / Math.PI; },
      translate: (node, [v]) => { node.e.pos.x += v.x; node.e.pos.y += v.y; },
      rotate: (node, [r]) => { node.e.rot += n(r) * 180 / Math.PI; },
      emit_signal: (node, [name, ...a]) => emit(new Signal(node, name), a),
      connect: (node, [name, cb]) => connect(new Signal(node, name), cb),
      has_method: (node, [m]) => !!(node.cls && node.cls.funcs[m]) || !!BUILTIN_METHODS[m],
      call: (node, [m, ...a]) => node.cls && node.cls.funcs[m] ? callUser(node, m, a) : null,
      set_process: () => null
    };
    const BUILTIN_SIGNALS = ["body_entered", "body_exited", "area_entered", "area_exited", "timeout", "animation_finished", "pressed", "ready"];
    const raycastOf = node => { const g = node.e.global(); const tp = node.e.data.target || [0, 50]; return world.raycast(g, new CW.Sim.V(tp[0], tp[1]), Math.hypot(tp[0], tp[1]), node.e.parent); };
    const pendingFree = [];
    G.pendingFree = pendingFree;
    function getNode(node, p, line) {
      const e = String(p).startsWith("/root/") ? world.root.find(String(p).slice(6)) : node.e.find(p);
      if (!e) fail(`Node not found: "${p}" (relative to "${node.e.name}").`, line);
      return wrap(e);
    }
    function addChild(parentE, childE) {
      if (childE.parent) childE.parent.children = childE.parent.children.filter(c => c !== childE);
      childE.parent = parentE; parentE.children.push(childE); childE.world = world;
      ready(childE);
    }
    const tree = {
      __static: true,
      reload_current_scene: () => { G.sceneChange = "reload"; say("↻ reload_current_scene()", "info"); return 0; },
      change_scene_to_file: f => { G.sceneChange = f; say(`→ change_scene_to_file("${f}")`, "info"); return 0; },
      get_nodes_in_group: g => world.all().filter(e => e.tags.has(g)).map(wrap),
      create_timer: t => { const owner = { signals: new Map([["timeout", []]]) }; G.timers.push({ left: n(t), owner }); return { __static: true, timeout: new Signal(owner, "timeout") }; },
      quit: () => { say("quit()", "info"); },
      call_group: (g, m, ...a) => world.all().filter(e => e.tags.has(g)).forEach(e => { const nd = wrap(e); if (nd.cls && nd.cls.funcs[m]) callUser(nd, m, a); }),
      paused: false
    };
    for (const k of Object.keys(tree)) if (typeof tree[k] === "function") { const f = tree[k]; tree[k] = new Callable(f, null, k); }

    const VEC_METHODS = {
      length: v => F(Math.hypot(v.x, v.y)),
      normalized: v => { const l = Math.hypot(v.x, v.y); return l ? new Vec2(v.x / l, v.y / l) : new Vec2(); },
      distance_to: (v, [o]) => F(Math.hypot(o.x - v.x, o.y - v.y)),
      direction_to: (v, [o]) => { const d = new Vec2(o.x - v.x, o.y - v.y), l = Math.hypot(d.x, d.y); return l ? new Vec2(d.x / l, d.y / l) : new Vec2(); },
      angle: v => F(Math.atan2(v.y, v.x)),
      dot: (v, [o]) => F(v.x * o.x + v.y * o.y),
      rotated: (v, [a]) => { const c = Math.cos(n(a)), s = Math.sin(n(a)); return new Vec2(v.x * c - v.y * s, v.x * s + v.y * c); },
      abs: v => new Vec2(Math.abs(v.x), Math.abs(v.y)),
      limit_length: (v, [m]) => { const l = Math.hypot(v.x, v.y), mx = n(m); return l > mx ? new Vec2(v.x / l * mx, v.y / l * mx) : v.clone(); },
      move_toward: (v, [to, d]) => { const dx = to.x - v.x, dy = to.y - v.y, l = Math.hypot(dx, dy); return l <= n(d) || !l ? to.clone() : new Vec2(v.x + dx / l * n(d), v.y + dy / l * n(d)); },
      lerp: (v, [to, w]) => new Vec2(v.x + (to.x - v.x) * n(w), v.y + (to.y - v.y) * n(w)),
      is_zero_approx: v => Math.abs(v.x) < 1e-5 && Math.abs(v.y) < 1e-5,
      round: v => new Vec2(Math.round(v.x), Math.round(v.y))
    };
    const STR_METHODS = {
      length: s => s.length, to_upper: s => s.toUpperCase(), to_lower: s => s.toLowerCase(),
      capitalize: s => s.replace(/_/g, " ").replace(/\b\w/g, c => c.toUpperCase()),
      begins_with: (s, [x]) => s.startsWith(x), ends_with: (s, [x]) => s.endsWith(x),
      contains: (s, [x]) => s.includes(x), find: (s, [x]) => s.indexOf(x),
      replace: (s, [a, b]) => s.split(a).join(b), split: (s, [d]) => s.split(d),
      strip_edges: s => s.trim(), is_empty: s => s.length === 0,
      substr: (s, [a, l]) => l == null ? s.slice(n(a)) : s.substr(n(a), n(l)),
      repeat: (s, [k]) => s.repeat(n(k)), to_int: s => parseInt(s, 10) || 0, to_float: s => F(parseFloat(s) || 0),
      pad_zeros: (s, [k]) => s.padStart(n(k), "0")
    };
    const ARR_METHODS = {
      append: (a, [x]) => { a.push(x); }, push_back: (a, [x]) => { a.push(x); }, push_front: (a, [x]) => { a.unshift(x); },
      pop_back: a => a.length ? a.pop() : null, pop_front: a => a.length ? a.shift() : null,
      size: a => a.length, is_empty: a => a.length === 0, has: (a, [x]) => a.some(y => equal(x, y)),
      erase: (a, [x]) => { const i = a.findIndex(y => equal(x, y)); if (i >= 0) a.splice(i, 1); },
      clear: a => { a.length = 0; }, find: (a, [x]) => a.findIndex(y => equal(x, y)),
      insert: (a, [i, x]) => { a.splice(n(i), 0, x); }, remove_at: (a, [i]) => { a.splice(n(i), 1); },
      front: a => a[0] ?? null, back: a => a[a.length - 1] ?? null,
      sort: a => { a.sort((x, y) => isNum(x) && isNum(y) ? n(x) - n(y) : str(x) < str(y) ? -1 : str(x) > str(y) ? 1 : 0); },
      reverse: a => { a.reverse(); }, duplicate: a => a.slice(), count: (a, [x]) => a.filter(y => equal(x, y)).length,
      pick_random: a => a.length ? a[Math.floor(rng() * a.length)] : null,
      shuffle: a => { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(rng() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } },
      max: a => a.length ? a.reduce((x, y) => n(y) > n(x) ? y : x) : null, min: a => a.length ? a.reduce((x, y) => n(y) < n(x) ? y : x) : null,
      map: (a, [f]) => a.map(x => f.fn(x)), filter: (a, [f]) => a.filter(x => truthy(f.fn(x))), any: (a, [f]) => a.some(x => truthy(f.fn(x))), all: (a, [f]) => a.every(x => truthy(f.fn(x)))
    };
    const DICT_METHODS = {
      keys: d => [...d.keys()], values: d => [...d.values()], has: (d, [k]) => d.has(k), size: d => d.size, is_empty: d => d.size === 0,
      get: (d, [k, def]) => d.has(k) ? d.get(k) : (def ?? null), erase: (d, [k]) => d.delete(k), clear: d => { d.clear(); }
    };

    // ----- المتغيرات العامة -----
    const action = a => { const keys = G.actions[a]; if (!keys) fail(`The InputMap action "${a}" doesn't exist.`); return keys; };
    const Input = {
      __static: true,
      is_action_pressed: new Callable(a => action(a).some(k => world.input.down.has(k)), null, "is_action_pressed"),
      is_action_just_pressed: new Callable(a => action(a).some(k => world.input.pressed.has(k)), null, "is_action_just_pressed"),
      is_action_just_released: new Callable(a => action(a).some(k => world.input.released.has(k)), null, "is_action_just_released"),
      get_axis: new Callable((neg, pos) => F((action(pos).some(k => world.input.down.has(k)) ? 1 : 0) - (action(neg).some(k => world.input.down.has(k)) ? 1 : 0)), null, "get_axis"),
      get_vector: new Callable((l, r, u, d) => { const x = (action(r).some(k => world.input.down.has(k)) ? 1 : 0) - (action(l).some(k => world.input.down.has(k)) ? 1 : 0), y = (action(d).some(k => world.input.down.has(k)) ? 1 : 0) - (action(u).some(k => world.input.down.has(k)) ? 1 : 0); const len = Math.hypot(x, y); return len ? new Vec2(x / len, y / len) : new Vec2(); }, null, "get_vector"),
      is_key_pressed: new Callable(k => world.input.down.has(k), null, "is_key_pressed")
    };
    const keyConst = {};
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").forEach(c => { keyConst["KEY_" + c] = c.toLowerCase(); });
    Object.assign(keyConst, { KEY_SPACE: "space", KEY_LEFT: "left", KEY_RIGHT: "right", KEY_UP: "up", KEY_DOWN: "down", KEY_ENTER: "enter", KEY_ESCAPE: "escape", KEY_SHIFT: "shift" });
    const num1 = (f, fl = true) => new Callable((...a) => { const r = f(...a.map(n)); return fl ? F(r) : r; });
    const GLOBALS = Object.assign({
      Input,
      Vector2: Object.assign(new Callable((x = 0, y = 0) => x instanceof Vec2 ? x.clone() : new Vec2(n(x), n(y)), null, "Vector2"), { __static: true, ZERO: new Vec2(0, 0), ONE: new Vec2(1, 1), LEFT: new Vec2(-1, 0), RIGHT: new Vec2(1, 0), UP: new Vec2(0, -1), DOWN: new Vec2(0, 1) }),
      PI: F(Math.PI), TAU: F(Math.PI * 2), INF: F(Infinity),
      print: new Callable((...a) => { say(a.map(str).join("")); return null; }, null, "print"),
      prints: new Callable((...a) => { say(a.map(str).join(" ")); return null; }, null, "prints"),
      push_warning: new Callable((...a) => { say("⚠️ " + a.map(str).join(""), "info"); }, null, "push_warning"),
      push_error: new Callable((...a) => { say(a.map(str).join(""), "err"); }, null, "push_error"),
      str: new Callable((...a) => a.map(str).join(""), null, "str"),
      int: new Callable(v => typeof v === "string" ? parseInt(v, 10) || 0 : Math.trunc(n(v)), null, "int"),
      float: new Callable(v => F(typeof v === "string" ? parseFloat(v) || 0 : n(v)), null, "float"),
      bool: new Callable(v => truthy(v), null, "bool"),
      len: new Callable(v => typeof v === "string" || Array.isArray(v) ? v.length : v instanceof Map ? v.size : fail("len() على نوع غير مدعوم"), null, "len"),
      range: new Callable((a, b, s) => { let start = 0, end = n(a), step = 1; if (b !== undefined) { start = n(a); end = n(b); } if (s !== undefined) step = n(s); const out = []; if (step > 0) for (let i = start; i < end; i += step) out.push(i); else for (let i = start; i > end; i += step) out.push(i); return out; }, null, "range"),
      abs: new Callable(v => isF(v) ? F(Math.abs(v.v)) : Math.abs(v), null, "abs"),
      sign: new Callable(v => isF(v) ? F(Math.sign(v.v)) : Math.sign(v), null, "sign"),
      min: new Callable((...a) => a.reduce((x, y) => n(y) < n(x) ? y : x), null, "min"),
      max: new Callable((...a) => a.reduce((x, y) => n(y) > n(x) ? y : x), null, "max"),
      clamp: new Callable((v, lo, hi) => { const r = Math.min(Math.max(n(v), n(lo)), n(hi)); return isF(v) || isF(lo) || isF(hi) ? F(r) : r; }, null, "clamp"),
      clampf: num1((v, lo, hi) => Math.min(Math.max(v, lo), hi)), clampi: num1((v, lo, hi) => Math.min(Math.max(v, lo), hi), false),
      lerp: new Callable((a, b, w) => a instanceof Vec2 ? new Vec2(a.x + (b.x - a.x) * n(w), a.y + (b.y - a.y) * n(w)) : F(n(a) + (n(b) - n(a)) * n(w)), null, "lerp"),
      move_toward: num1((a, b, d) => Math.abs(b - a) <= d ? b : a + Math.sign(b - a) * d),
      snapped: num1((v, s) => s ? Math.round(v / s) * s : v),
      round: num1(Math.round), floor: num1(Math.floor), ceil: num1(Math.ceil), sqrt: num1(Math.sqrt), sin: num1(Math.sin), cos: num1(Math.cos), atan2: num1(Math.atan2),
      pow: num1(Math.pow), fmod: num1((a, b) => a % b), deg_to_rad: num1(d => d * Math.PI / 180), rad_to_deg: num1(r => r * 180 / Math.PI),
      randi: new Callable(() => Math.floor(rng() * 4294967295), null, "randi"),
      randf: new Callable(() => F(rng()), null, "randf"),
      randi_range: new Callable((a, b) => n(a) + Math.floor(rng() * (n(b) - n(a) + 1)), null, "randi_range"),
      randf_range: new Callable((a, b) => F(n(a) + rng() * (n(b) - n(a))), null, "randf_range"),
      randomize: new Callable(() => null, null, "randomize"),
      is_instance_valid: new Callable(v => v instanceof GNode && !v.e.destroyed, null, "is_instance_valid"),
      preload: new Callable(p => loadScene(p), null, "preload"),
      load: new Callable(p => loadScene(p), null, "load"),
      Color: new Callable(() => null, null, "Color"),
      typeof: new Callable(v => ({ Nil: 0, bool: 1, int: 2, float: 3, String: 4, Vector2: 5, Object: 24, Dictionary: 27, Array: 28 })[typeName(v)] ?? 0, null, "typeof"),
      TYPE_NIL: 0, TYPE_BOOL: 1, TYPE_INT: 2, TYPE_FLOAT: 3, TYPE_STRING: 4, TYPE_VECTOR2: 5, TYPE_OBJECT: 24, TYPE_DICTIONARY: 27, TYPE_ARRAY: 28
    }, keyConst);
    function loadScene(path) {
      const name = String(path).replace(/^res:\/\//, "");
      const tpl = G.templates[name];
      if (!tpl) fail(`لا يوجد مشهد ${path} (المشاهد المتاحة: ${Object.keys(G.templates).join(", ") || "لا شيء"})`);
      return {
        __static: true,
        instantiate: new Callable(() => {
          const holder = new CW.Sim.Entity({ name: "_tmp" });
          holder.world = world;
          const made = buildTree(tpl, holder);
          const top = holder.children[0];
          holder.children = [];
          top.parent = null;
          made.forEach(e => { if (e.data.scriptFile) attach(e, e.data.scriptFile); });
          return wrap(top);
        }, null, "instantiate")
      };
    }

    function evalE(e, env) {
      switch (e.k) {
        case "lit": return e.v;
        case "self": return env.node;
        case "arr": return e.items.map(x => evalE(x, env));
        case "dict": return new Map(e.items.map(([k, v]) => [evalE(k, env), evalE(v, env)]));
        case "node": return getNode(env.node, e.path, e.line);
        case "id": {
          const loc = lookupLocal(env, e.name);
          if (loc) return loc.get(e.name);
          const nd = env.node;
          if (nd.vars && nd.vars.has(e.name)) return nd.vars.get(e.name);
          if (nd.signals && nd.signals.has(e.name)) return new Signal(nd, e.name);
          if (nd.cls && nd.cls.funcs[e.name]) return new Callable((...a) => callUser(nd, e.name, a), nd, e.name);
          if (BUILTIN_METHODS[e.name]) return new Callable((...a) => BUILTIN_METHODS[e.name](nd, a, e.line), nd, e.name);
          if (Object.prototype.hasOwnProperty.call(GLOBALS, e.name)) return GLOBALS[e.name];
          if (BUILTIN_SIGNALS.includes(e.name)) return new Signal(nd, e.name);
          if (["position", "velocity", "rotation", "rotation_degrees", "scale", "visible", "global_position", "linear_velocity", "text", "name", "gravity_scale", "flip_h"].includes(e.name)) return getProp(nd, e.name, e.line);
          fail(`Identifier "${e.name}" not declared in the current scope.`, e.line);
        }
        case "attr": {
          const obj = evalE(e.obj, env);
          if (obj === null) fail(`Invalid access to property or key '${e.name}' on a base object of type 'null instance'.`, e.line);
          return getProp(obj, e.name, e.line);
        }
        case "index": {
          const obj = evalE(e.obj, env), i = evalE(e.i, env);
          if (Array.isArray(obj) || typeof obj === "string") { let k = n(i); if (k < 0) k += obj.length; if (k < 0 || k >= obj.length) fail(`Out of bounds get index '${n(i)}' (on base: '${typeName(obj)}')`); return obj[k]; }
          if (obj instanceof Map) { if (!obj.has(i)) fail(`Invalid access to key '${str(i)}' on a base object of type 'Dictionary'.`); return obj.get(i); }
          if (obj instanceof Vec2) return F(n(i) === 0 ? obj.x : obj.y);
          fail("لا يمكن الفهرسة هنا");
        }
        case "call": {
          const f = evalE(e.f, env);
          const args = e.args.map(a => evalE(a, env));
          if (f instanceof Callable) return f.fn(...args);
          fail(`ليست دالة: ${e.f.name || e.f.k}`, e.line);
        }
        case "lambda": return new Callable((...a) => { const locals = [...env.locals, new Map(e.params.map((pn, i) => [pn, a[i] ?? null]))]; return runFn(env.node, e.body, locals); }, env.node, "lambda");
        case "neg": { const v = evalE(e.e, env); if (v instanceof Vec2) return new Vec2(-v.x, -v.y); return isF(v) ? F(-v.v) : -v; }
        case "not": return !truthy(evalE(e.e, env));
        case "and": return truthy(evalE(e.l, env)) && truthy(evalE(e.r, env));
        case "or": return truthy(evalE(e.l, env)) || truthy(evalE(e.r, env));
        case "tern": return truthy(evalE(e.c, env)) ? evalE(e.a, env) : evalE(e.b, env);
        case "in": { const a = evalE(e.l, env), b = evalE(e.r, env); if (Array.isArray(b)) return b.some(x => equal(a, x)); if (b instanceof Map) return b.has(a); if (typeof b === "string") return b.includes(a); fail("in على نوع غير مدعوم"); }
        case "is": { const v = evalE(e.e, env); return v instanceof GNode ? v.e.type === e.type || (v.cls && v.cls.name === e.type) : typeName(v) === e.type; }
        case "bin": return binop(e.op, evalE(e.l, env), evalE(e.r, env), e.line);
        case "await": return evalE(e.e, env);
      }
      fail("تعبير غير مدعوم: " + e.k);
    }

    // ----- إطار واحد -----
    function frame(dt) {
      G.dt = dt;
      const nodes = world.all().map(wrap).filter(nd => nd.cls && nd.e.isActive());
      // المؤقتات
      for (const e of world.all()) {
        const tm = e.data.timer;
        if (tm && tm.running && e.isActive()) { tm.left -= dt; if (tm.left <= 1e-9) { if (tm.one_shot) tm.running = false; else tm.left += tm.wait; emit(new Signal(wrap(e), "timeout"), []); } }
        const an = e.data.anim;
        if (an && an.playing) { an.t += dt; if (an.t >= 0.125) { an.t -= 0.125; an.frame = (an.frame + 1) % (ANIM_FRAMES[an.name] || [0]).length; } }
      }
      // مؤقتات create_timer (قد يُنشئ المستمع مؤقتاً جديداً أثناء الإرسال، فلا نستبدل القائمة)
      const due = [];
      for (const t of G.timers) { t.left -= dt; if (t.left <= 1e-9) due.push(t); }
      G.timers = G.timers.filter(t => !due.includes(t));
      due.forEach(t => emit(new Signal(t.owner, "timeout"), []));
      for (const nd of nodes) if (nd.cls.funcs._process && !nd.e.destroyed) callUser(nd, "_process", [F(dt)]);
      for (const nd of nodes) if (nd.cls.funcs._physics_process && !nd.e.destroyed) callUser(nd, "_physics_process", [F(dt)]);
      world.step(dt);
      // AnimatedSprite2D بصورة الشخصية: كل حركة إطارات من الصورة (walk أربعة إطارات، والباقي إطار واحد)
      for (const e of world.all()) {
        const an = e.data.anim;
        if (an && e.visual && e.visual.sprite === "player") e.visual.frame = (ANIM_FRAMES[an.name] || ANIM_FRAMES.idle)[an.frame % (ANIM_FRAMES[an.name] || ANIM_FRAMES.idle).length];
      }
      pendingFree.splice(0).forEach(e => world.destroy(e));
      world.endFrameInput();
    }
    // أحداث الفيزياء ← إشارات Godot
    world.on((type, a, b) => {
      const pairs = [[a, b], [b, a]];
      for (const [x, y] of pairs) {
        if (x.body !== "area") continue;
        const nd = wrap(x);
        if (type === "trigger-enter") emit(new Signal(nd, y.body === "area" ? "area_entered" : "body_entered"), [wrap(y)]);
        if (type === "trigger-exit") emit(new Signal(nd, y.body === "area" ? "area_exited" : "body_exited"), [wrap(y)]);
      }
      if (type === "collision-enter") for (const [x, y] of pairs) if (x.body === "rigid") emit(new Signal(wrap(x), "body_entered"), [wrap(y)]);
    });

    G.load = (code, setup) => {
      // الأقسام: [scene] و [input] و [template name] و # file: x.gd
      const files = {}, sections = { scene: [], input: [] };
      let cur = null, curFile = null;
      const codeHasFiles = /^#\s*file:/m.test(code || "");
      const parts = [];
      const lines = (setup || "").split("\n").concat(["\u0000"], (code || "").split("\n"));
      for (const raw of lines) {
        if (raw === "\u0000") { cur = null; curFile = null; continue; }   // كود الطالب يبدأ من جديد بعد الإعداد
        let m;
        if ((m = /^\[(scene|input|template)\s*([^\]]*)\]\s*$/.exec(raw.trim()))) { cur = m[1] === "template" ? "tpl:" + m[2].trim() : m[1]; curFile = null; if (cur.startsWith("tpl:")) G.templates[cur.slice(4)] = []; continue; }
        if ((m = /^#\s*file:\s*(\S+)\s*$/.exec(raw))) { curFile = m[1]; cur = null; files[curFile] = []; continue; }
        if (curFile) files[curFile].push(raw);
        else if (cur === "scene" || cur === "input") sections[cur].push(raw);
        else if (cur && cur.startsWith("tpl:")) G.templates[cur.slice(4)].push(raw);
        else parts.push(raw);
      }
      // كود الطالب بلا # file: هو سكربت أول عقدة تحتاج سكربتاً غير موجود
      const loose = (code || "").trim() && !codeHasFiles && !/^\[scene/m.test(code) ? code : null;
      sections.input.forEach(l => { const m = /^\s*(\w+)\s*=\s*(.+)$/.exec(l); if (m) G.actions[m[1]] = m[2].split(",").map(s => s.trim().toLowerCase()); });
      // سكربت بلا مشهد: عقدة واحدة تحمله
      if (!sections.scene.some(l => l.trim())) sections.scene = ["Main: Node2D script=main.gd"];
      const made = buildTree(sections.scene, world.root);
      const needed = made.map(e => e.data.scriptFile).filter(Boolean);
      if (loose) { const target = needed.find(f => !files[f]) || needed[0]; if (!target) fail("لا توجد عقدة في المشهد تحتاج سكربتاً"); files[target] = loose.split("\n"); }
      Object.entries(files).forEach(([f, lines]) => { G.scripts[f] = parse(lines.join("\n")); });
      made.forEach(e => { if (e.data.scriptFile) attach(e, e.data.scriptFile); });
      // كل سكربت يجب أن يرث نوعاً متوافقاً مع عقدته
      made.forEach(e => { const nd = wrap(e); if (nd.cls && nd.cls.extends !== e.type && !["Node", "Node2D"].includes(nd.cls.extends) && !(nd.cls.extends === "Node2D" && e.type)) say(`⚠️ السكربت ${e.data.scriptFile} يرث ${nd.cls.extends} لكن العقدة ${e.name} من نوع ${e.type}`, "info"); });
      G.scene = made;
    };
    G.start = () => {
      for (const e of world.all()) if (e.data.timer && e.data.timer.autostart) { e.data.timer.left = e.data.timer.wait; e.data.timer.running = true; }
      ready(world.root);
      pendingFree.splice(0).forEach(e => world.destroy(e));
    };
    G.frame = frame;
    G.str = str;
    G.getProp = getProp;
    return G;
  }

  CW.gd = { parse, lex, str, Vec2, Flt, F };
  CW.simKinds = CW.simKinds || {};
  CW.simKinds.godot = {
    label: "Godot (محاكي)",
    build(code, setup, say) {
      const G = Game(say);
      G.load(code, setup);
      // المسار من جذر المشهد (مثل "Player/Sprite")، أو اسم عقدة في أي مكان
      const findE = path => G.world.root.find(path) || (G.world.root.children[0] && G.world.root.children[0].find(path)) || G.world.byName(path);
      const node = path => {
        const e = findE(path);
        if (!e) throw new Error(`العقدة ${path} غير موجودة`);
        return G.wrap(e);
      };
      return {
        world: G.world,
        start: G.start,
        frame: G.frame,
        helpers: {
          // get("Player", "position") ← قيمة خاصية كنص GDScript، و node("Player") للعقدة
          get: (path, prop) => {
            const m = /^(\w+)\(\)$/.exec(prop);
            return G.str(m ? G.getProp(node(path), m[1]).fn() : G.getProp(node(path), prop));
          },
          val: (path, prop) => { const v = G.getProp(node(path), prop); return v && v.v !== undefined ? v.v : v && v.x !== undefined ? { x: v.x, y: v.y } : v; },
          pos: path => { const e = node(path).e; return [Math.round(e.pos.x * 10) / 10, Math.round(e.pos.y * 10) / 10]; },
          exists: path => { const e = findE(path); return !!e && !e.destroyed; },
          count: group => G.world.all().filter(e => e.tags.has(group) && !e.destroyed).length,
          scene: () => G.sceneChange,
          // call("Main", "damage", 100, 30) ← نتيجة دالة من سكربت الطالب كنص GDScript
          call: (path, method, ...args) => {
            const nd = node(path);
            const conv = v => typeof v === "number" ? (Number.isInteger(v) ? v : CW.gd.F(v)) : Array.isArray(v) ? v.map(conv) : v;
            const f = G.getProp(nd, method);
            return G.str(f.fn(...args.map(conv)));
          }
        }
      };
    }
  };
})(typeof window !== "undefined" ? window : globalThis);
