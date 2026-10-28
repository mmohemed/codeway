// محرك Power Query (لغة M) للتعليم: let/in و each و #"..." والجداول والسجلات والقوائم،
// ودوال Table.* و Text.* و List.* و Number.* و Date.* الأكثر استخداماً في Excel و Power BI
// المصادر: Excel.CurrentWorkbook() (أوراق الدفتر) و Csv.Document(File.Contents("x.csv")) (ملفات الإعداد)
(function (root) {
  const CW = root.CW = root.CW || {};

  // ---------- القيم ----------
  class MError extends Error { constructor(msg, kind = "Expression.Error") { super(msg); this.kind = kind; } toString() { return `${this.kind}: ${this.message}`; } }
  class MRecord { constructor(fields = {}) { this.f = new Map(Object.entries(fields)); } get(k) { if (!this.f.has(k)) throw new MError(`The field '${k}' of the record wasn't found.`); return this.f.get(k); } }
  class MTable {
    constructor(cols, rows) { this.cols = cols; this.rows = rows; }
    idx(c) { const i = this.cols.indexOf(c); if (i < 0) throw new MError(`The column '${c}' of the table wasn't found.`); return i; }
    record(i) { const r = new MRecord(); this.cols.forEach((c, j) => r.f.set(c, this.rows[i][j])); return r; }
    records() { return this.rows.map((_, i) => this.record(i)); }
  }
  class MFunc { constructor(f, name) { this.f = f; this.name = name || "function"; } call(...a) { return this.f(...a); } }
  class MDate { constructor(serial) { this.serial = serial; } }
  class MType { constructor(name) { this.name = name; } }
  const isTable = v => v instanceof MTable;

  // التواريخ: نفس الأرقام التسلسلية في محرك Excel
  const EPOCH = Date.UTC(1899, 11, 30);
  const ymd = d => { const x = new Date(EPOCH + d.serial * 86400000); return { y: x.getUTCFullYear(), m: x.getUTCMonth() + 1, d: x.getUTCDate(), wd: x.getUTCDay() }; };
  const mkDate = (y, m, d) => new MDate(Math.round((Date.UTC(y, m - 1, d) - EPOCH) / 86400000));
  const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  // ---------- التحليل اللفظي ----------
  function tokenize(src) {
    const t = [];
    let i = 0;
    while (i < src.length) {
      const s = src.slice(i);
      let m;
      if ((m = /^\s+/.exec(s))) { i += m[0].length; continue; }
      if ((m = /^\/\/[^\n]*/.exec(s)) || (m = /^\/\*[\s\S]*?\*\//.exec(s))) { i += m[0].length; continue; }
      if ((m = /^#"((?:[^"]|"")*)"/.exec(s))) { t.push({ k: "id", v: m[1].replace(/""/g, '"') }); i += m[0].length; continue; }
      if ((m = /^"((?:[^"]|"")*)"/.exec(s))) { t.push({ k: "str", v: m[1].replace(/""/g, '"') }); i += m[0].length; continue; }
      if ((m = /^#(date|datetime|table|duration)\b/.exec(s))) { t.push({ k: "hash", v: m[1] }); i += m[0].length; continue; }
      if ((m = /^(\d+\.\d+|\d+)(?:[eE][+-]?\d+)?/.exec(s)) && !/^\d+\.\.\d/.test(s.slice(0, m[0].length + 2))) { t.push({ k: "num", v: parseFloat(m[0]) }); i += m[0].length; continue; }
      if ((m = /^\d+/.exec(s))) { t.push({ k: "num", v: parseFloat(m[0]) }); i += m[0].length; continue; }
      if ((m = /^[A-Za-z_][\w]*(?:\.[A-Za-z_][\w]*)*/.exec(s))) { t.push({ k: "id", v: m[0], bare: true }); i += m[0].length; continue; }
      if ((m = /^(=>|<=|>=|<>|\.\.|\?\?|[=<>+\-*/&(){}\[\],;@?!])/.exec(s))) { t.push({ k: "op", v: m[0] }); i += m[0].length; continue; }
      throw new MError(`Invalid character '${s[0]}'`, "Expression.SyntaxError");
    }
    return t;
  }

  // ---------- التحليل النحوي ----------
  const KW = new Set(["let", "in", "each", "if", "then", "else", "and", "or", "not", "true", "false", "null", "type", "try", "otherwise", "as", "is", "meta"]);
  function parse(src) {
    const t = tokenize(src);
    let p = 0;
    const peek = (o = 0) => t[p + o];
    const isOp = (v, o = 0) => t[p + o] && t[p + o].k === "op" && t[p + o].v === v;
    const isKw = (v, o = 0) => t[p + o] && t[p + o].k === "id" && t[p + o].bare && t[p + o].v === v;
    const expectOp = v => { if (!isOp(v)) throw new MError(`Token '${v}' expected${t[p] ? ` near '${t[p].v}'` : ""}`, "Expression.SyntaxError"); p++; };
    const expectKw = v => { if (!isKw(v)) throw new MError(`Token '${v}' expected${t[p] ? ` near '${t[p].v}'` : ""}`, "Expression.SyntaxError"); p++; };

    function expr() {
      if (isKw("let")) {
        p++;
        const binds = [];
        do {
          const name = t[p++];
          if (!name || name.k !== "id") throw new MError("Identifier expected in let", "Expression.SyntaxError");
          expectOp("=");
          binds.push({ name: name.v, e: expr() });
        } while (isOp(",") && ++p);
        expectKw("in");
        return { k: "let", binds, body: expr() };
      }
      if (isKw("each")) { p++; return { k: "fn", params: ["_"], body: expr() }; }
      if (isKw("if")) { p++; const c = expr(); expectKw("then"); const a = expr(); expectKw("else"); return { k: "if", c, a, b: expr() }; }
      if (isKw("try")) { p++; const e = expr(); if (isKw("otherwise")) { p++; return { k: "try", e, o: expr() }; } return { k: "try", e, o: null }; }
      // دالة: (a, b) => ...
      if (isOp("(")) {
        let q = p + 1, ok = true;
        const params = [];
        while (t[q] && !(t[q].k === "op" && t[q].v === ")")) {
          if (t[q].k === "id" && !KW.has(t[q].v)) { params.push(t[q].v); q++; if (t[q] && t[q].k === "id" && t[q].v === "as") q += 2; if (t[q] && t[q].k === "op" && t[q].v === ",") q++; }
          else if (t[q].k === "id" && t[q].v === "optional") q++;
          else { ok = false; break; }
        }
        if (ok && t[q] && t[q + 1] && t[q + 1].k === "op" && t[q + 1].v === "=>") { p = q + 2; return { k: "fn", params, body: expr() }; }
      }
      return logicalOr();
    }
    function logicalOr() { let l = logicalAnd(); while (isKw("or")) { p++; l = { k: "or", l, r: logicalAnd() }; } return l; }
    function logicalAnd() { let l = notExpr(); while (isKw("and")) { p++; l = { k: "and", l, r: notExpr() }; } return l; }
    function notExpr() { if (isKw("not")) { p++; return { k: "not", e: notExpr() }; } return comparison(); }
    function comparison() {
      let l = additive();
      while (t[p] && t[p].k === "op" && ["=", "<>", "<", ">", "<=", ">="].includes(t[p].v)) { const op = t[p++].v; l = { k: "bin", op, l, r: additive() }; }
      if (isKw("is")) { p++; const ty = typeName(); l = { k: "is", e: l, ty }; }
      if (isOp("??")) { p++; l = { k: "coalesce", l, r: additive() }; }
      return l;
    }
    function additive() { let l = mult(); while (isOp("+") || isOp("-") || isOp("&")) { const op = t[p++].v; l = { k: "bin", op, l, r: mult() }; } return l; }
    function mult() { let l = unary(); while (isOp("*") || isOp("/")) { const op = t[p++].v; l = { k: "bin", op, l, r: unary() }; } return l; }
    function unary() { if (isOp("-")) { p++; return { k: "neg", e: unary() }; } if (isOp("+")) { p++; return unary(); } return postfix(); }
    function typeName() {
      if (isKw("type")) p++;
      const n = t[p++];
      if (!n) throw new MError("Type expected", "Expression.SyntaxError");
      return n.v;
    }
    function postfix() {
      let e = primary();
      for (;;) {
        if (isOp("(")) {
          p++;
          const args = [];
          if (!isOp(")")) { do { args.push(expr()); } while (isOp(",") && ++p); }
          expectOp(")");
          e = { k: "call", f: e, args };
        } else if (isOp("[")) {
          p++;
          const name = t[p++];
          expectOp("]");
          const opt = isOp("?") ? (p++, true) : false;
          e = { k: "field", e, name: name.v, opt };
        } else if (isOp("{")) {
          p++;
          const idx = expr();
          expectOp("}");
          const opt = isOp("?") ? (p++, true) : false;
          e = { k: "item", e, idx, opt };
        } else break;
      }
      return e;
    }
    function primary() {
      const tk = t[p++];
      if (!tk) throw new MError("Unexpected end of expression", "Expression.SyntaxError");
      if (tk.k === "num") return { k: "lit", v: tk.v };
      if (tk.k === "str") return { k: "lit", v: tk.v };
      if (tk.k === "hash") {
        expectOp("(");
        const args = [];
        if (!isOp(")")) { do { args.push(expr()); } while (isOp(",") && ++p); }
        expectOp(")");
        return { k: "hash", v: tk.v, args };
      }
      if (tk.k === "op" && tk.v === "(") { const e = expr(); expectOp(")"); return e; }
      if (tk.k === "op" && tk.v === "{") {
        const items = [];
        if (!isOp("}")) {
          do {
            const a = expr();
            if (isOp("..")) { p++; items.push({ k: "rng", a, b: expr() }); } else items.push(a);
          } while (isOp(",") && ++p);
        }
        expectOp("}");
        return { k: "list", items };
      }
      if (tk.k === "op" && tk.v === "[") {
        // [Col] اختصار لـ _[Col]، و [a = 1, b = 2] سجل
        if (isOp("]")) { p++; return { k: "record", fields: [] }; }
        if (t[p] && t[p].k === "id" && isOp("]", 1)) { const name = t[p].v; p += 2; const opt = isOp("?") ? (p++, true) : false; return { k: "field", e: { k: "id", v: "_" }, name, opt }; }
        const fields = [];
        do {
          const n = t[p++];
          expectOp("=");
          fields.push({ name: n.v, e: expr() });
        } while (isOp(",") && ++p);
        expectOp("]");
        return { k: "record", fields };
      }
      if (tk.k === "id") {
        if (tk.bare && tk.v === "true") return { k: "lit", v: true };
        if (tk.bare && tk.v === "false") return { k: "lit", v: false };
        if (tk.bare && tk.v === "null") return { k: "lit", v: null };
        if (tk.bare && tk.v === "type") { const n = typeName(); return { k: "lit", v: new MType(n.toLowerCase()) }; }
        if (tk.bare && tk.v === "_") return { k: "id", v: "_" };
        return { k: "id", v: tk.v };
      }
      throw new MError(`Unexpected token '${tk.v}'`, "Expression.SyntaxError");
    }
    const e = expr();
    if (p < t.length) throw new MError(`Unexpected token '${t[p].v}'`, "Expression.SyntaxError");
    return e;
  }

  // ---------- التقييم (كسول مثل M: كل خطوة تُحسب عند الحاجة) ----------
  function Env(parent, vars = {}) { this.parent = parent; this.vars = vars; }
  Env.prototype.get = function (name) {
    if (Object.prototype.hasOwnProperty.call(this.vars, name)) {
      let v = this.vars[name];
      if (v && v.__thunk) { if (v.busy) throw new MError(`A cyclic reference was encountered: ${name}`); v.busy = true; const val = v.fn(); this.vars[name] = val; return val; }
      return v;
    }
    if (this.parent) return this.parent.get(name);
    if (Object.prototype.hasOwnProperty.call(LIB, name)) return LIB[name];
    throw new MError(`The name '${name}' wasn't recognized. Make sure it's spelled correctly.`);
  };

  const truthy = v => { if (typeof v !== "boolean") throw new MError(`We cannot convert the value ${show(v)} to type Logical.`); return v; };
  function cmp(a, b) {
    if (a instanceof MDate) a = a.serial; if (b instanceof MDate) b = b.serial;
    if (a === null || b === null) return a === b ? 0 : NaN;
    if (typeof a === "string" && typeof b === "string") return a < b ? -1 : a > b ? 1 : 0;   // M يقارن النصوص بحساسية لحالة الأحرف
    if (typeof a !== typeof b) return NaN;
    return a < b ? -1 : a > b ? 1 : 0;
  }
  function binop(op, a, b) {
    if (op === "&") {
      if (a === null || b === null) return null;
      if (Array.isArray(a) && Array.isArray(b)) return a.concat(b);
      if (a instanceof MRecord && b instanceof MRecord) { const r = new MRecord(); a.f.forEach((v, k) => r.f.set(k, v)); b.f.forEach((v, k) => r.f.set(k, v)); return r; }
      if (typeof a !== "string" || typeof b !== "string") throw new MError(`We cannot apply operator & to types ${typeOf(a)} and ${typeOf(b)}.`);
      return a + b;
    }
    if (["=", "<>"].includes(op)) { const eq = equal(a, b); return op === "=" ? eq : !eq; }
    if (["<", ">", "<=", ">="].includes(op)) {
      if (a === null || b === null) return null;
      const c = cmp(a, b);
      if (isNaN(c)) throw new MError(`We cannot apply operator ${op} to types ${typeOf(a)} and ${typeOf(b)}.`);
      return { "<": c < 0, ">": c > 0, "<=": c <= 0, ">=": c >= 0 }[op];
    }
    if (a === null || b === null) return null;
    if (a instanceof MDate && typeof b === "number" && (op === "+" || op === "-")) return new MDate(a.serial + (op === "+" ? b : -b));
    if (a instanceof MDate && b instanceof MDate && op === "-") return b.serial === a.serial ? 0 : a.serial - b.serial;
    if (typeof a !== "number" || typeof b !== "number") throw new MError(`We cannot apply operator ${op} to types ${typeOf(a)} and ${typeOf(b)}.`);
    switch (op) { case "+": return a + b; case "-": return a - b; case "*": return a * b; case "/": return b === 0 ? (a === 0 ? NaN : a > 0 ? Infinity : -Infinity) : a / b; }
  }
  function equal(a, b) {
    if (a instanceof MDate && b instanceof MDate) return a.serial === b.serial;
    if (Array.isArray(a) && Array.isArray(b)) return a.length === b.length && a.every((x, i) => equal(x, b[i]));
    if (a instanceof MRecord && b instanceof MRecord) return a.f.size === b.f.size && [...a.f].every(([k, v]) => b.f.has(k) && equal(v, b.f.get(k)));
    return a === b;
  }
  const typeOf = v => v === null ? "Null" : typeof v === "number" ? "Number" : typeof v === "string" ? "Text" : typeof v === "boolean" ? "Logical" : v instanceof MDate ? "Date" : Array.isArray(v) ? "List" : v instanceof MRecord ? "Record" : v instanceof MTable ? "Table" : v instanceof MFunc ? "Function" : "Any";

  function evaluate(node, env) {
    switch (node.k) {
      case "lit": return node.v;
      case "id": return env.get(node.v);
      case "let": {
        const e = new Env(env);
        node.binds.forEach(b => { e.vars[b.name] = { __thunk: true, fn: () => evaluate(b.e, e) }; });
        return evaluate(node.body, e);
      }
      case "fn": return new MFunc((...args) => { const vars = {}; node.params.forEach((n, i) => { vars[n] = args[i] === undefined ? null : args[i]; }); return evaluate(node.body, new Env(env, vars)); });
      case "if": return truthy(evaluate(node.c, env)) ? evaluate(node.a, env) : evaluate(node.b, env);
      case "try": try { return evaluate(node.e, env); } catch (e) { if (!(e instanceof MError)) throw e; if (node.o) return evaluate(node.o, env); return new MRecord({ HasError: true, Error: new MRecord({ Reason: e.kind, Message: e.message }) }); }
      case "and": { const l = evaluate(node.l, env); if (l === false) return false; return truthy(l) && truthy(evaluate(node.r, env)); }
      case "or": { const l = evaluate(node.l, env); if (l === true) return true; return truthy(l) || truthy(evaluate(node.r, env)); }
      case "not": return !truthy(evaluate(node.e, env));
      case "neg": { const v = evaluate(node.e, env); return v === null ? null : -v; }
      case "bin": return binop(node.op, evaluate(node.l, env), evaluate(node.r, env));
      case "coalesce": { const l = evaluate(node.l, env); return l === null ? evaluate(node.r, env) : l; }
      case "is": { const v = evaluate(node.e, env), n = node.ty.toLowerCase(); return n === "null" ? v === null : n === "number" ? typeof v === "number" : n === "text" ? typeof v === "string" : n === "date" ? v instanceof MDate : n === "logical" ? typeof v === "boolean" : n === "table" ? isTable(v) : n === "list" ? Array.isArray(v) : true; }
      case "list": {
        const out = [];
        node.items.forEach(it => { if (it.k === "rng") { const a = evaluate(it.a, env), b = evaluate(it.b, env); for (let x = a; x <= b; x++) out.push(x); } else out.push(evaluate(it, env)); });
        return out;
      }
      case "record": { const r = new MRecord(); node.fields.forEach(f => r.f.set(f.name, evaluate(f.e, env))); return r; }
      case "field": {
        const v = evaluate(node.e, env);
        if (v instanceof MRecord) { if (!v.f.has(node.name)) { if (node.opt) return null; throw new MError(`The field '${node.name}' of the record wasn't found.`); } return v.f.get(node.name); }
        if (isTable(v)) { const i = v.idx(node.name); return v.rows.map(r => r[i]); }
        if (v === null && node.opt) return null;
        throw new MError(`We cannot apply field access to the type ${typeOf(v)}.`);
      }
      case "item": {
        const v = evaluate(node.e, env), idx = evaluate(node.idx, env);
        if (isTable(v) && idx instanceof MRecord) {
          const hits = v.records().filter(r => [...idx.f].every(([k, x]) => equal(r.f.get(k), x)));
          if (hits.length !== 1) { if (node.opt && !hits.length) return null; throw new MError(hits.length ? "The key matched more than one row in the table." : "The key didn't match any rows in the table."); }
          return hits[0];
        }
        if (isTable(v)) { if (idx >= v.rows.length) { if (node.opt) return null; throw new MError("There weren't enough elements in the enumeration to complete the operation."); } return v.record(idx); }
        if (Array.isArray(v)) { if (idx >= v.length) { if (node.opt) return null; throw new MError("There weren't enough elements in the enumeration to complete the operation."); } return v[idx]; }
        throw new MError(`We cannot apply indexing to the type ${typeOf(v)}.`);
      }
      case "call": {
        const f = evaluate(node.f, env);
        if (!(f instanceof MFunc)) throw new MError(`We cannot convert a value of type ${typeOf(f)} to type Function.`);
        return f.call(...node.args.map(a => evaluate(a, env)));
      }
      case "hash": {
        const a = node.args.map(x => evaluate(x, env));
        if (node.v === "date") return mkDate(a[0], a[1], a[2]);
        if (node.v === "table") return new MTable(Array.isArray(a[0]) ? a[0] : a[0].map((_, i) => "Column" + (i + 1)), a[1].map(r => [...r]));
        throw new MError(`#${node.v} is not supported`);
      }
    }
    throw new MError("Unsupported expression");
  }

  // ---------- التحويل بين الأنواع ----------
  function toNumber(v) {
    if (v === null || typeof v === "number") return v;
    if (typeof v === "boolean") return v ? 1 : 0;
    if (v instanceof MDate) return v.serial;
    if (typeof v === "string") {
      const s = v.trim().replace(/,/g, "");
      if (s === "") return null;
      if (/^[-+]?(\d+\.?\d*|\.\d+)(e[-+]?\d+)?%?$/i.test(s)) return parseFloat(s) / (s.endsWith("%") ? 100 : 1);
    }
    throw new MError(`We couldn't convert to Number.`, "DataFormat.Error");
  }
  function toDate(v) {
    if (v === null || v instanceof MDate) return v;
    if (typeof v === "number") return new MDate(Math.floor(v));
    if (typeof v === "string") {
      let m = /^\s*(\d{4})-(\d{1,2})-(\d{1,2})/.exec(v);
      if (m) return mkDate(+m[1], +m[2], +m[3]);
      m = /^\s*(\d{1,2})\/(\d{1,2})\/(\d{4})\s*$/.exec(v);
      if (m) return mkDate(+m[3], +m[1], +m[2]);   // ثقافة en-US: شهر/يوم/سنة
    }
    throw new MError(`We couldn't parse the input provided as a Date value.`, "DataFormat.Error");
  }
  function toText(v) {
    if (v === null || typeof v === "string") return v;
    if (typeof v === "number") return fmtNum(v);
    if (typeof v === "boolean") return v ? "true" : "false";
    if (v instanceof MDate) { const d = ymd(v); return `${d.m}/${d.d}/${d.y}`; }
    throw new MError(`We cannot convert a value of type ${typeOf(v)} to type Text.`);
  }
  function convert(v, ty) {
    const n = ty instanceof MType ? ty.name : String(ty).toLowerCase();
    if (v instanceof MError) return v;
    try {
      if (n === "number" || n === "currency.type" || n === "percentage.type") return toNumber(v);
      if (n === "int64.type") { const x = toNumber(v); return x === null ? null : Math.round(x); }
      if (n === "text") return toText(v);
      if (n === "date" || n === "datetime") return toDate(v);
      if (n === "logical") { if (v === null || typeof v === "boolean") return v; const s = String(v).toLowerCase(); if (s === "true") return true; if (s === "false") return false; throw new MError(`We couldn't convert to Logical.`, "DataFormat.Error"); }
      return v;
    } catch (e) { if (e instanceof MError) return e; throw e; }
  }
  const fmtNum = n => Number.isInteger(n) ? String(n) : String(parseFloat(n.toPrecision(12)));
  function show(v) {
    if (v instanceof MError) return "Error";
    if (v === null || v === undefined) return "null";
    if (typeof v === "number") return isNaN(v) ? "NaN" : !isFinite(v) ? (v > 0 ? "Infinity" : "-Infinity") : fmtNum(v);
    if (typeof v === "boolean") return v ? "TRUE" : "FALSE";
    if (v instanceof MDate) { const d = ymd(v); return `${d.y}-${String(d.m).padStart(2, "0")}-${String(d.d).padStart(2, "0")}`; }
    if (isTable(v)) return "Table";
    if (Array.isArray(v)) return "List";
    if (v instanceof MRecord) return "Record";
    if (v instanceof MFunc) return "Function";
    return String(v);
  }

  // ---------- المكتبة ----------
  const LIB = {};
  const def = (name, f) => { LIB[name] = new MFunc(f, name); };
  const cols = c => c === null || c === undefined ? null : Array.isArray(c) ? c : [c];
  const T = t => { if (!isTable(t)) throw new MError(`We cannot convert a value of type ${typeOf(t)} to type Table.`); return t; };
  const callRow = (f, rec) => f instanceof MFunc ? f.call(rec) : f;
  const safe = f => { try { return f(); } catch (e) { if (e instanceof MError) return e; throw e; } };

  // الثوابت
  Object.assign(LIB, {
    "Order.Ascending": 0, "Order.Descending": 1,
    "JoinKind.Inner": 0, "JoinKind.LeftOuter": 1, "JoinKind.RightOuter": 2, "JoinKind.FullOuter": 3, "JoinKind.LeftAnti": 4,
    "Int64.Type": new MType("int64.type"), "Currency.Type": new MType("currency.type"), "Percentage.Type": new MType("percentage.type"),
    "QuoteStyle.None": 0, "QuoteStyle.Csv": 1, "MissingField.Ignore": 1, "MissingField.UseNull": 2, "Occurrence.First": 0, "Occurrence.Last": 1, "Occurrence.All": 2
  });
  LIB["Replacer.ReplaceText"] = new MFunc((v, o, n) => typeof v === "string" ? v.split(o).join(n) : v, "Replacer.ReplaceText");
  LIB["Replacer.ReplaceValue"] = new MFunc((v, o, n) => equal(v, o) ? n : v, "Replacer.ReplaceValue");

  // الجداول
  def("Table.PromoteHeaders", t => { T(t); if (!t.rows.length) return t; const h = t.rows[0].map((v, i) => v === null || v === "" ? "Column" + (i + 1) : show(v)); return new MTable(h, t.rows.slice(1)); });
  def("Table.DemoteHeaders", t => new MTable(t.cols.map((_, i) => "Column" + (i + 1)), [t.cols.slice(), ...t.rows]));
  def("Table.TransformColumnTypes", (t, spec) => {
    T(t);
    const pairs = Array.isArray(spec[0]) ? spec : [spec];
    const conv = pairs.map(([c, ty]) => [t.idx(c), ty]);
    return new MTable(t.cols.slice(), t.rows.map(r => { const n = r.slice(); conv.forEach(([i, ty]) => { n[i] = convert(n[i], ty); }); return n; }));
  });
  def("Table.SelectRows", (t, f) => new MTable(T(t).cols.slice(), t.rows.filter((_, i) => { const v = f.call(t.record(i)); if (v === null) return false; return truthy(v); })));
  def("Table.RemoveColumns", (t, c, missing) => { T(t); const rm = cols(c); if (!missing) rm.forEach(x => t.idx(x)); const keep = t.cols.map((x, i) => [x, i]).filter(([x]) => !rm.includes(x)); return new MTable(keep.map(k => k[0]), t.rows.map(r => keep.map(k => r[k[1]]))); });
  def("Table.SelectColumns", (t, c) => { T(t); const sel = cols(c).map(x => [x, t.idx(x)]); return new MTable(sel.map(s => s[0]), t.rows.map(r => sel.map(s => r[s[1]]))); });
  def("Table.ReorderColumns", (t, c) => { T(t); const order = cols(c), rest = t.cols.filter(x => !order.includes(x)); return LIB["Table.SelectColumns"].call(t, [...order, ...rest]); });
  def("Table.RenameColumns", (t, spec) => { T(t); const pairs = Array.isArray(spec[0]) ? spec : [spec]; const names = t.cols.slice(); pairs.forEach(([o, n]) => { names[t.idx(o)] = n; }); return new MTable(names, t.rows.map(r => r.slice())); });
  def("Table.TransformColumnNames", (t, f) => new MTable(T(t).cols.map(c => f.call(c)), t.rows.map(r => r.slice())));
  def("Table.Distinct", (t, c) => {
    T(t);
    const idx = c ? cols(c).map(x => t.idx(x)) : t.cols.map((_, i) => i), seen = new Set();
    return new MTable(t.cols.slice(), t.rows.filter(r => { const k = JSON.stringify(idx.map(i => show(r[i]))); if (seen.has(k)) return false; seen.add(k); return true; }));
  });
  def("Table.AddColumn", (t, name, f, ty) => {
    T(t);
    if (t.cols.includes(name)) throw new MError(`The field '${name}' already exists in the record.`);
    return new MTable([...t.cols, name], t.rows.map((r, i) => [...r, safe(() => { const v = callRow(f, t.record(i)); return ty ? convert(v, ty) : v; })]));
  });
  def("Table.AddIndexColumn", (t, name, start = 0, step = 1) => new MTable([...T(t).cols, name], t.rows.map((r, i) => [...r, (start ?? 0) + i * (step ?? 1)])));
  def("Table.DuplicateColumn", (t, c, name) => { const i = T(t).idx(c); return new MTable([...t.cols, name], t.rows.map(r => [...r, r[i]])); });
  def("Table.TransformColumns", (t, spec) => {
    T(t);
    const pairs = Array.isArray(spec[0]) ? spec : [spec];
    const tr = pairs.map(([c, f, ty]) => [t.idx(c), f, ty]);
    return new MTable(t.cols.slice(), t.rows.map(r => { const n = r.slice(); tr.forEach(([i, f, ty]) => { if (!(n[i] instanceof MError)) n[i] = safe(() => { const v = f.call(n[i]); return ty ? convert(v, ty) : v; }); }); return n; }));
  });
  def("Table.ReplaceValue", (t, o, n, rep, c) => { T(t); const idx = cols(c).map(x => t.idx(x)); return new MTable(t.cols.slice(), t.rows.map(r => r.map((v, i) => idx.includes(i) && !(v instanceof MError) ? rep.call(v, o, n) : v))); });
  def("Table.ReplaceErrorValues", (t, spec) => { T(t); const pairs = Array.isArray(spec[0]) ? spec : [spec]; const m = pairs.map(([c, v]) => [t.idx(c), v]); return new MTable(t.cols.slice(), t.rows.map(r => { const n = r.slice(); m.forEach(([i, v]) => { if (n[i] instanceof MError) n[i] = v; }); return n; })); });
  def("Table.RemoveRowsWithErrors", (t, c) => { T(t); const idx = c ? cols(c).map(x => t.idx(x)) : t.cols.map((_, i) => i); return new MTable(t.cols.slice(), t.rows.filter(r => !idx.some(i => r[i] instanceof MError))); });
  def("Table.SelectRowsWithErrors", (t, c) => { T(t); const idx = c ? cols(c).map(x => t.idx(x)) : t.cols.map((_, i) => i); return new MTable(t.cols.slice(), t.rows.filter(r => idx.some(i => r[i] instanceof MError))); });
  def("Table.FillDown", (t, c) => { T(t); const idx = cols(c).map(x => t.idx(x)); const last = {}; return new MTable(t.cols.slice(), t.rows.map(r => r.map((v, i) => { if (!idx.includes(i)) return v; if (v === null) return last[i] ?? null; last[i] = v; return v; }))); });
  def("Table.Sort", (t, spec) => {
    T(t);
    const list = typeof spec === "string" ? [[spec, 0]] : Array.isArray(spec) && typeof spec[0] === "string" && typeof spec[1] === "number" && spec.length === 2 ? [spec] : spec.map(s => typeof s === "string" ? [s, 0] : s);
    const keys = list.map(([c, o]) => [t.idx(c), o ? -1 : 1]);
    return new MTable(t.cols.slice(), t.rows.map((r, i) => [r, i]).sort((a, b) => { for (const [i, d] of keys) { const c = cmp(a[0][i], b[0][i]); if (c) return c * d; if (isNaN(c)) return (a[0][i] === null ? -1 : 1) * d; } return a[1] - b[1]; }).map(x => x[0]));
  });
  def("Table.FirstN", (t, n) => new MTable(T(t).cols.slice(), typeof n === "number" ? t.rows.slice(0, n) : t.rows));
  def("Table.LastN", (t, n) => new MTable(T(t).cols.slice(), t.rows.slice(-n)));
  def("Table.Skip", (t, n) => new MTable(T(t).cols.slice(), t.rows.slice(n ?? 1)));
  def("Table.RowCount", t => T(t).rows.length);
  def("Table.ColumnCount", t => T(t).cols.length);
  def("Table.ColumnNames", t => T(t).cols.slice());
  def("Table.Column", (t, c) => { const i = T(t).idx(c); return t.rows.map(r => r[i]); });
  def("Table.ToRecords", t => T(t).records());
  def("Table.FromRecords", recs => { const names = []; recs.forEach(r => r.f.forEach((_, k) => { if (!names.includes(k)) names.push(k); })); return new MTable(names, recs.map(r => names.map(n => r.f.has(n) ? r.f.get(n) : null))); });
  def("Table.FromRows", (rows, names) => new MTable(names || rows[0].map((_, i) => "Column" + (i + 1)), rows.map(r => [...r])));
  def("Table.Combine", ts => { const names = []; ts.forEach(t => T(t).cols.forEach(c => { if (!names.includes(c)) names.push(c); })); return new MTable(names, ts.flatMap(t => t.rows.map(r => names.map(n => { const i = t.cols.indexOf(n); return i < 0 ? null : r[i]; })))); });
  def("Table.Group", (t, keys, aggs) => {
    T(t);
    const ks = cols(keys), ki = ks.map(k => t.idx(k));
    const list = Array.isArray(aggs[0]) ? aggs : [aggs];
    const groups = new Map();
    t.rows.forEach(r => { const k = JSON.stringify(ki.map(i => show(r[i]))); if (!groups.has(k)) groups.set(k, { key: ki.map(i => r[i]), rows: [] }); groups.get(k).rows.push(r); });
    return new MTable([...ks, ...list.map(a => a[0])], [...groups.values()].map(g => {
      const sub = new MTable(t.cols, g.rows);
      return [...g.key, ...list.map(([, f, ty]) => safe(() => { const v = f.call(sub); return ty ? convert(v, ty) : v; }))];
    }));
  });
  def("Table.NestedJoin", (t1, k1, t2, k2, name, kind = 1) => {
    T(t1); T(t2);
    const a = cols(k1).map(k => t1.idx(k)), b = cols(k2).map(k => t2.idx(k));
    const key = (r, idx) => JSON.stringify(idx.map(i => show(r[i])));
    const rows = [];
    t1.rows.forEach(r => {
      const m = t2.rows.filter(x => key(x, b) === key(r, a));
      if (kind === 0 && !m.length) return;
      if (kind === 4 && m.length) return;
      rows.push([...r, new MTable(t2.cols.slice(), m)]);
    });
    if (kind === 2 || kind === 3) t2.rows.forEach(x => { if (!t1.rows.some(r => key(x, b) === key(r, a))) rows.push([...t1.cols.map(() => null), new MTable(t2.cols.slice(), [x])]); });
    return new MTable([...t1.cols, name], rows);
  });
  def("Table.ExpandTableColumn", (t, c, names, newNames) => {
    const i = T(t).idx(c), nn = newNames || names, rows = [];
    t.rows.forEach(r => {
      const sub = r[i];
      const base = r.filter((_, j) => j !== i);
      if (!sub || !sub.rows.length) rows.push([...base, ...names.map(() => null)]);
      else sub.rows.forEach(sr => rows.push([...base, ...names.map(n => sr[sub.idx(n)])]));
    });
    return new MTable([...t.cols.filter((_, j) => j !== i), ...nn], rows);
  });
  def("Table.ExpandRecordColumn", (t, c, names, newNames) => { const i = T(t).idx(c), nn = newNames || names; return new MTable([...t.cols.filter((_, j) => j !== i), ...nn], t.rows.map(r => [...r.filter((_, j) => j !== i), ...names.map(n => r[i] ? r[i].get(n) : null)])); });
  def("Table.UnpivotOtherColumns", (t, keep, attr, val) => {
    T(t);
    const ki = cols(keep).map(k => t.idx(k)), others = t.cols.map((c, i) => [c, i]).filter(([, i]) => !ki.includes(i));
    const rows = [];
    t.rows.forEach(r => others.forEach(([c, i]) => { if (r[i] !== null) rows.push([...ki.map(k => r[k]), c, r[i]]); }));
    return new MTable([...cols(keep), attr, val], rows);
  });
  def("Table.Unpivot", (t, which, attr, val) => LIB["Table.UnpivotOtherColumns"].call(t, T(t).cols.filter(c => !which.includes(c)), attr, val));
  def("Table.Pivot", (t, values, attrCol, valCol, agg) => {
    T(t);
    const ai = t.idx(attrCol), vi = t.idx(valCol), ki = t.cols.map((_, i) => i).filter(i => i !== ai && i !== vi);
    const groups = new Map();
    t.rows.forEach(r => { const k = JSON.stringify(ki.map(i => show(r[i]))); if (!groups.has(k)) groups.set(k, { key: ki.map(i => r[i]), cells: {} }); const g = groups.get(k).cells; (g[show(r[ai])] = g[show(r[ai])] || []).push(r[vi]); });
    return new MTable([...ki.map(i => t.cols[i]), ...values], [...groups.values()].map(g => [...g.key, ...values.map(v => { const c = g.cells[v]; return !c ? null : agg ? agg.call(c) : c.length === 1 ? c[0] : new MError("There were too many elements in the enumeration to complete the operation."); })]));
  });
  def("Table.SplitColumn", (t, c, splitter, names) => {
    const i = T(t).idx(c), n = Array.isArray(names) ? names : Array.from({ length: names }, (_, k) => `${c}.${k + 1}`);
    return new MTable([...t.cols.slice(0, i), ...n, ...t.cols.slice(i + 1)], t.rows.map(r => { const parts = r[i] === null ? [] : splitter.call(r[i]); return [...r.slice(0, i), ...n.map((_, k) => parts[k] ?? null), ...r.slice(i + 1)]; }));
  });
  def("Table.Max", (t, c) => { const i = T(t).idx(c); let best = null; t.rows.forEach(r => { if (!best || cmp(r[i], best[i]) > 0) best = r; }); return best ? new MTable(t.cols, [best]).record(0) : null; });
  LIB["Splitter.SplitTextByDelimiter"] = new MFunc(d => new MFunc(s => String(s).split(d)), "Splitter.SplitTextByDelimiter");

  // القوائم
  const nums = l => l.filter(v => typeof v === "number");
  def("List.Sum", l => nums(l).reduce((a, b) => a + b, 0));
  def("List.Average", l => { const n = nums(l); return n.length ? n.reduce((a, b) => a + b, 0) / n.length : null; });
  def("List.Count", l => l.length);
  def("List.NonNullCount", l => l.filter(v => v !== null).length);
  def("List.Max", l => { const v = l.filter(x => x !== null); return v.length ? v.reduce((a, b) => cmp(b, a) > 0 ? b : a) : null; });
  def("List.Min", l => { const v = l.filter(x => x !== null); return v.length ? v.reduce((a, b) => cmp(b, a) < 0 ? b : a) : null; });
  def("List.Median", l => { const s = nums(l).sort((a, b) => a - b), m = s.length >> 1; return !s.length ? null : s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2; });
  def("List.Distinct", l => { const seen = new Set(); return l.filter(v => { const k = show(v) + typeOf(v); if (seen.has(k)) return false; seen.add(k); return true; }); });
  def("List.Sort", (l, o) => [...l].sort((a, b) => cmp(a, b) * (o ? -1 : 1)));
  def("List.Contains", (l, v) => l.some(x => equal(x, v)));
  def("List.Transform", (l, f) => l.map(v => f.call(v)));
  def("List.Select", (l, f) => l.filter(v => truthy(f.call(v))));
  def("List.First", l => l.length ? l[0] : null);
  def("List.Last", l => l.length ? l[l.length - 1] : null);
  def("List.Numbers", (s, n, inc = 1) => Array.from({ length: n }, (_, i) => s + i * inc));
  def("List.Combine", ls => ls.flat());

  // النصوص
  const S = v => { if (v === null) return null; if (typeof v !== "string") throw new MError(`We cannot convert the value ${show(v)} to type Text.`); return v; };
  const nn = f => (v, ...a) => v === null ? null : f(S(v), ...a);
  def("Text.Trim", nn(s => s.trim()));
  def("Text.Clean", nn(s => s.replace(/[\x00-\x1f]/g, "")));
  def("Text.Upper", nn(s => s.toUpperCase()));
  def("Text.Lower", nn(s => s.toLowerCase()));
  def("Text.Proper", nn(s => s.toLowerCase().replace(/(^|[^a-z])([a-z])/g, (m, a, b) => a + b.toUpperCase())));
  def("Text.Length", nn(s => s.length));
  def("Text.Start", nn((s, n) => s.slice(0, n)));
  def("Text.End", nn((s, n) => s.slice(-n)));
  def("Text.Middle", nn((s, a, n) => n === undefined ? s.slice(a) : s.substr(a, n)));
  def("Text.Range", nn((s, a, n) => n === undefined ? s.slice(a) : s.substr(a, n)));
  def("Text.Contains", nn((s, x) => s.includes(x)));
  def("Text.StartsWith", nn((s, x) => s.startsWith(x)));
  def("Text.EndsWith", nn((s, x) => s.endsWith(x)));
  def("Text.Replace", nn((s, a, b) => s.split(a).join(b)));
  def("Text.Remove", nn((s, chars) => s.split("").filter(c => !(Array.isArray(chars) ? chars : [chars]).includes(c)).join("")));
  def("Text.BeforeDelimiter", nn((s, d) => { const i = s.indexOf(d); return i < 0 ? s : s.slice(0, i); }));
  def("Text.AfterDelimiter", nn((s, d) => { const i = s.indexOf(d); return i < 0 ? "" : s.slice(i + d.length); }));
  def("Text.Split", nn((s, d) => s.split(d)));
  def("Text.Combine", (l, d = "") => l.filter(v => v !== null).map(v => S(v)).join(d ?? ""));
  def("Text.From", v => v === null ? null : toText(v));
  def("Text.PadStart", nn((s, n, c = " ") => s.padStart(n, c)));
  def("Text.PositionOf", nn((s, x) => s.indexOf(x)));

  // الأرقام
  def("Number.From", v => toNumber(v));
  def("Number.FromText", v => toNumber(S(v)));
  def("Number.Round", (n, d = 0) => { if (n === null) return null; const f = Math.pow(10, d ?? 0), x = n * f, r = Math.round(x); return (Math.abs(x % 1) === 0.5 ? (r % 2 === 0 ? r : r - 1) : r) / f; });   // التقريب المصرفي كما في M
  def("Number.RoundUp", (n, d = 0) => n === null ? null : Math.ceil(n * Math.pow(10, d)) / Math.pow(10, d));
  def("Number.RoundDown", (n, d = 0) => n === null ? null : Math.floor(n * Math.pow(10, d)) / Math.pow(10, d));
  def("Number.Abs", n => n === null ? null : Math.abs(n));
  def("Number.Mod", (a, b) => a === null ? null : a % b);
  def("Number.IntegerDivide", (a, b) => a === null ? null : Math.trunc(a / b));
  def("Value.Is", (v, ty) => convert(v, ty) === v);

  // التواريخ
  const Dt = v => { if (v === null) return null; return toDate(v); };
  const dd = f => v => { const d = Dt(v); return d === null ? null : f(ymd(d), d); };
  def("Date.From", v => Dt(v));
  def("Date.FromText", v => toDate(S(v)));
  def("Date.Year", dd(x => x.y));
  def("Date.Month", dd(x => x.m));
  def("Date.Day", dd(x => x.d));
  def("Date.QuarterOfYear", dd(x => Math.ceil(x.m / 3)));
  def("Date.MonthName", dd(x => MONTHS[x.m - 1]));
  def("Date.DayOfWeekName", dd(x => DAYS[x.wd]));
  def("Date.DayOfWeek", dd(x => (x.wd + 6) % 7));   // الاثنين = 0 افتراضياً في M
  def("Date.StartOfMonth", dd(x => mkDate(x.y, x.m, 1)));
  def("Date.EndOfMonth", dd(x => mkDate(x.y, x.m + 1, 0)));
  def("Date.StartOfYear", dd(x => mkDate(x.y, 1, 1)));
  def("Date.AddDays", (v, n) => { const d = Dt(v); return d === null ? null : new MDate(d.serial + n); });
  def("Date.AddMonths", (v, n) => { const d = Dt(v); if (d === null) return null; const x = ymd(d), last = new Date(Date.UTC(x.y, x.m - 1 + n + 1, 0)).getUTCDate(); return mkDate(x.y, x.m + n, Math.min(x.d, last)); });
  def("Date.ToText", (v, f = "M/d/yyyy") => {
    const d = Dt(v); if (d === null) return null;
    const x = ymd(d);
    const fmt = typeof f === "string" ? f : f instanceof MRecord && f.f.has("Format") ? f.get("Format") : "M/d/yyyy";
    return fmt.replace(/yyyy|MMMM|MMM|MM|M|dddd|ddd|dd|d/g, k => ({ yyyy: x.y, MMMM: MONTHS[x.m - 1], MMM: MONTHS[x.m - 1].slice(0, 3), MM: String(x.m).padStart(2, "0"), M: x.m, dddd: DAYS[x.wd], ddd: DAYS[x.wd].slice(0, 3), dd: String(x.d).padStart(2, "0"), d: x.d })[k]);
  });
  def("Duration.Days", n => n);

  // ---------- المصادر ----------
  function parseCsv(text, delim = ",") {
    const rows = [];
    text.replace(/\r/g, "").split("\n").filter(l => l.trim() !== "").forEach(line => {
      const out = []; let cur = "", q = false;
      for (let i = 0; i < line.length; i++) {
        const ch = line[i];
        if (q) { if (ch === '"' && line[i + 1] === '"') { cur += '"'; i++; } else if (ch === '"') q = false; else cur += ch; }
        else if (ch === '"') q = true; else if (ch === delim) { out.push(cur); cur = ""; } else cur += ch;
      }
      out.push(cur);
      rows.push(out);
    });
    return rows;
  }
  // الإعداد: ملفات (== file: x.csv أو == table: Name) وأوراق Excel (بصيغة المحاكي)
  function sources(setup) {
    const files = {}, xlLines = [];
    let cur = null;
    (setup || "").split("\n").forEach(line => {
      const m = /^==\s*(file|table)\s*:\s*(.+?)\s*$/i.exec(line.trim());
      if (m) { cur = m[1].toLowerCase() === "table" ? m[2] + ".csv" : m[2]; files[cur] = []; return; }
      if (/^==\s*relationship\s*:/i.test(line.trim())) { cur = null; return; }
      if (/^==/.test(line.trim())) { cur = null; xlLines.push(line); return; }
      if (cur) files[cur].push(line); else xlLines.push(line);
    });
    Object.keys(files).forEach(k => { files[k] = files[k].join("\n"); });
    return { files, xlText: xlLines.join("\n") };
  }
  function workbookTables(xlText) {
    if (!CW.xl || !xlText.trim()) return new MTable(["Name", "Content"], []);
    const book = CW.xl.run(xlText, "");
    const rows = book.wb.order.map(name => {
      const sh = book.wb.sheets[name];
      const vals = [];
      for (let r = 1; r <= sh.maxR; r++) { const row = []; for (let c = 1; c <= sh.maxC; c++) { const v = book.calc.cellValue(sh, r, c), f = book.calc.cellFmt(sh, r, c); row.push(v === null ? null : f === "date" && typeof v === "number" ? new MDate(v) : CW.xl.isErr(v) ? new MError(v.code) : v); } vals.push(row); }
      const head = vals[0] ? vals[0].map((v, i) => v === null ? "Column" + (i + 1) : String(v)) : [];
      return [name, new MTable(head, vals.slice(1))];
    });
    return new MTable(["Name", "Content"], rows);
  }

  // ---------- التشغيل ----------
  // يُرجع { shown, graded, table, steps } ويعرض نتيجة الاستعلام كجدول
  CW.mRun = function (code, setup, test) {
    const shown = [];
    let result, steps = [];
    const { files, xlText } = sources(setup);
    const env = new Env(null, {
      "Excel.CurrentWorkbook": new MFunc(() => workbookTables(xlText), "Excel.CurrentWorkbook"),
      "File.Contents": new MFunc(name => { const k = Object.keys(files).find(f => f.toLowerCase() === String(name).replace(/^.*[\\/]/, "").toLowerCase()); if (!k) throw new MError(`Could not find file '${name}'.`, "DataSource.NotFound"); return { __file: files[k] }; }, "File.Contents"),
      "Csv.Document": new MFunc((src, opts) => {
        const text = src && src.__file !== undefined ? src.__file : String(src);
        const delim = opts instanceof MRecord && opts.f.has("Delimiter") ? opts.get("Delimiter") : ",";
        const rows = parseCsv(text, delim), w = Math.max(...rows.map(r => r.length));
        return new MTable(Array.from({ length: w }, (_, i) => "Column" + (i + 1)), rows.map(r => r.concat(Array(w - r.length).fill(null))));
      }, "Csv.Document")
    });
    try {
      const ast = parse(code);
      if (ast.k === "let") {
        const e = new Env(env);
        ast.binds.forEach(b => { e.vars[b.name] = { __thunk: true, fn: () => evaluate(b.e, e) }; });
        steps = ast.binds.map(b => b.name);
        result = evaluate(ast.body, e);
        steps = steps.map(name => { let v; try { v = e.get(name); } catch (err) { v = err; } return { name, value: v }; });
      } else result = evaluate(ast, env);
    } catch (e) {
      if (!(e instanceof MError)) throw e;
      shown.push({ kind: "err", text: e.toString() });
      return { shown, graded: test ? [...shown] : undefined, steps, table: null };
    }
    if (steps.length) shown.push({ kind: "info", text: "Applied steps: " + steps.map(s => s.name).join(" → ") });
    const lines = tableLines(result);
    lines.forEach(t => shown.push({ kind: "log", text: t }));
    let graded;
    if (test) {
      graded = [];
      const say = t => String(t).split("\n").forEach(line => graded.push({ kind: "log", text: line }));
      const tbl = name => { if (!name) return result; const s = steps.find(x => x.name === name); if (!s) throw new Error(`لا توجد خطوة باسم ${name}`); return s.value; };
      const helpers = {
        print: (...a) => say(a.map(v => typeof v === "string" ? v : JSON.stringify(v)).join(" ")),
        columns: name => { const t = tbl(name); return isTable(t) ? t.cols.slice() : []; },
        rows: name => { const t = tbl(name); return isTable(t) ? t.rows.map(r => r.map(show)) : []; },
        show: name => tableLines(tbl(name)).forEach(say),
        steps: () => steps.map(s => s.name),
        value: name => show(tbl(name)),
        types: name => { const t = tbl(name); return isTable(t) ? t.cols.map((_, i) => { const v = t.rows.map(r => r[i]).find(x => x !== null && !(x instanceof MError)); return v === undefined ? "null" : typeOf(v); }) : []; },
        errors: name => { const t = tbl(name); return isTable(t) ? t.rows.reduce((n, r) => n + r.filter(v => v instanceof MError).length, 0) : 0; }
      };
      try { new Function(...Object.keys(helpers), test)(...Object.values(helpers)); }
      catch (e) { graded.push({ kind: "err", text: e.message }); }
    }
    return { shown, graded, steps, table: isTable(result) ? result : null, value: result };
  };
  function tableLines(v) {
    if (!isTable(v)) return [show(v) === "List" ? v.map(show).join(", ") : show(v)];
    const out = [v.cols.join(" | ")];
    v.rows.forEach(r => out.push(r.map(show).join(" | ")));
    out.push(`(${v.rows.length} rows)`);
    return out;
  }

  // عرض جدول النتيجة مع الخطوات المطبقة (مثل محرر Power Query)
  CW.renderMTable = function (container, r) {
    if (!container) return;
    const esc = s => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    let current = r.steps.length ? r.steps.length - 1 : -1;
    const draw = () => {
      const v = current >= 0 ? r.steps[current].value : r.value;
      let h = `<div class="pq">`;
      if (r.steps.length) h += `<div class="pq-steps"><b>APPLIED STEPS</b>${r.steps.map((s, i) => `<button class="${i === current ? "on" : ""}" data-i="${i}">${esc(s.name)}</button>`).join("")}</div>`;
      h += `<div class="pq-table xl-scroll">`;
      if (isTable(v)) {
        h += `<table class="xl-grid" dir="ltr"><thead><tr><th></th>${v.cols.map(c => `<th>${esc(c)}</th>`).join("")}</tr></thead><tbody>`;
        v.rows.slice(0, 100).forEach((row, i) => { h += `<tr><th>${i + 1}</th>${row.map(x => `<td class="${typeof x === "number" ? "n" : ""}${x instanceof MError ? " e" : ""}${x === null ? " nul" : ""}" title="${esc(x instanceof MError ? x.toString() : show(x))}">${esc(show(x))}</td>`).join("")}</tr>`; });
        h += `</tbody></table>`;
      } else if (v instanceof MError) h += `<div class="err" dir="ltr">${esc(v.toString())}</div>`;
      else h += `<div dir="ltr" style="padding:8px">${esc(show(v))}</div>`;
      h += `</div></div>`;
      container.innerHTML = h;
      container.querySelectorAll(".pq-steps button").forEach(b => b.onclick = () => { current = +b.dataset.i; draw(); });
    };
    draw();
  };

  CW.m = { parse, tokenize, evaluate, MTable, MRecord, MError, MDate, show, sources, parseCsv };
})(typeof window !== "undefined" ? window : globalThis);
