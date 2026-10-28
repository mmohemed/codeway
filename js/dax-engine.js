// محرك DAX ونموذج Power BI للتعليم: جداول وعلاقات (متعدد ← واحد) وأعمدة محسوبة ومقاييس،
// وسياق التصفية وسياق الصف وانتقال السياق، و CALCULATE و ALL و FILTER، والذكاء الزمني،
// والمرئيات (بطاقة، جدول، مصفوفة، أعمدة، خط، دائري) وفلاتر الصفحة وأدوار أمان الصفوف (RLS)
(function (root) {
  const CW = root.CW = root.CW || {};

  class DaxError extends Error {}
  const err = m => { throw new DaxError(m); };
  class DDate { constructor(serial) { this.serial = serial; } }
  const EPOCH = Date.UTC(1899, 11, 30);
  const mkDate = (y, m, d) => new DDate(Math.round((Date.UTC(y, m - 1, d) - EPOCH) / 86400000));
  const parts = d => { const x = new Date(EPOCH + d.serial * 86400000); return { y: x.getUTCFullYear(), m: x.getUTCMonth() + 1, d: x.getUTCDate(), wd: x.getUTCDay() }; };
  const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const BLANK = null;
  const isBlank = v => v === null || v === undefined;
  const key = v => v instanceof DDate ? "d" + v.serial : typeof v + ":" + v;

  // ---------- التحليل اللفظي والنحوي ----------
  function tokenize(src) {
    const t = [];
    let i = 0;
    while (i < src.length) {
      const s = src.slice(i);
      let m;
      if ((m = /^\s+/.exec(s))) { i += m[0].length; continue; }
      if ((m = /^(\/\/|--)[^\n]*/.exec(s)) || (m = /^\/\*[\s\S]*?\*\//.exec(s))) { i += m[0].length; continue; }
      if ((m = /^"((?:[^"]|"")*)"/.exec(s))) { t.push({ k: "str", v: m[1].replace(/""/g, '"') }); i += m[0].length; continue; }
      if ((m = /^'((?:[^']|'')+)'/.exec(s))) { t.push({ k: "table", v: m[1].replace(/''/g, "'") }); i += m[0].length; continue; }
      if ((m = /^\[([^\]]+)\]/.exec(s))) { t.push({ k: "bracket", v: m[1].trim() }); i += m[0].length; continue; }
      if ((m = /^(\d+\.?\d*|\.\d+)(e[-+]?\d+)?/i.exec(s))) { t.push({ k: "num", v: parseFloat(m[0]) }); i += m[0].length; continue; }
      if ((m = /^[A-Za-z_][\w.]*/.exec(s))) { t.push({ k: "id", v: m[0] }); i += m[0].length; continue; }
      if ((m = /^(&&|\|\||<>|<=|>=|==|[-+*/^&=<>(),{}])/.exec(s))) { t.push({ k: "op", v: m[0] }); i += m[0].length; continue; }
      err(`رمز غير متوقع: ${s[0]}`);
    }
    return t;
  }
  function parse(src) {
    const t = tokenize(src);
    let p = 0;
    const isOp = v => t[p] && t[p].k === "op" && t[p].v === v;
    const isId = v => t[p] && t[p].k === "id" && t[p].v.toUpperCase() === v;
    const expect = v => { if (!isOp(v)) err(`متوقع "${v}"${t[p] ? ` قرب "${t[p].v}"` : " في نهاية الصيغة"}`); p++; };
    function expr() {
      if (isId("VAR")) {
        const vars = [];
        while (isId("VAR")) { p++; const name = t[p++].v; expect("="); vars.push({ name: name.toUpperCase(), e: expr() }); }
        if (!isId("RETURN")) err("متوقع RETURN بعد VAR");
        p++;
        return { k: "var", vars, body: expr() };
      }
      return or();
    }
    function or() { let l = and(); while (isOp("||")) { p++; l = { k: "or", l, r: and() }; } return l; }
    function and() { let l = cmp(); while (isOp("&&")) { p++; l = { k: "and", l, r: cmp() }; } return l; }
    function cmp() {
      let l = concat();
      for (;;) {
        if (t[p] && t[p].k === "op" && ["=", "==", "<>", "<", ">", "<=", ">="].includes(t[p].v)) { const op = t[p++].v; l = { k: "bin", op: op === "==" ? "=" : op, l, r: concat() }; }
        else if (isId("IN")) { p++; l = { k: "in", e: l, list: primary() }; }
        else if (isId("NOT") && t[p + 1] && t[p + 1].k === "id" && t[p + 1].v.toUpperCase() === "IN") { p += 2; l = { k: "not", e: { k: "in", e: l, list: primary() } }; }
        else break;
      }
      return l;
    }
    function concat() { let l = add(); while (isOp("&")) { p++; l = { k: "bin", op: "&", l, r: add() }; } return l; }
    function add() { let l = mul(); while (isOp("+") || isOp("-")) { const op = t[p++].v; l = { k: "bin", op, l, r: mul() }; } return l; }
    function mul() { let l = unary(); while (isOp("*") || isOp("/")) { const op = t[p++].v; l = { k: "bin", op, l, r: unary() }; } return l; }
    function unary() { if (isOp("-")) { p++; return { k: "neg", e: unary() }; } if (isOp("+")) { p++; return unary(); } return pow(); }
    function pow() { const b = primary(); if (isOp("^")) { p++; return { k: "bin", op: "^", l: b, r: unary() }; } return b; }
    function primary() {
      const tk = t[p++];
      if (!tk) err("الصيغة ناقصة");
      if (tk.k === "num") return { k: "lit", v: tk.v };
      if (tk.k === "str") return { k: "lit", v: tk.v };
      if (tk.k === "op" && tk.v === "(") { const e = expr(); expect(")"); return e; }
      if (tk.k === "op" && tk.v === "{") { const items = []; if (!isOp("}")) { do { items.push(expr()); } while (isOp(",") && ++p); } expect("}"); return { k: "list", items }; }
      if (tk.k === "bracket") return { k: "bracket", name: tk.v };
      if (tk.k === "table") { if (t[p] && t[p].k === "bracket") return { k: "col", table: tk.v, col: t[p++].v }; return { k: "tableref", name: tk.v }; }
      if (tk.k === "id") {
        if (t[p] && t[p].k === "bracket") return { k: "col", table: tk.v, col: t[p++].v };
        if (isOp("(")) {
          p++;
          const args = [];
          if (!isOp(")")) { do { if (isOp(",") || isOp(")")) args.push({ k: "lit", v: BLANK, missing: true }); else args.push(expr()); } while (isOp(",") && ++p); }
          expect(")");
          return { k: "call", name: tk.v.toUpperCase(), args };
        }
        const u = tk.v.toUpperCase();
        if (["ASC", "DESC", "DAY", "MONTH", "QUARTER", "YEAR", "SKIP", "DENSE"].includes(u)) return { k: "kw", v: u };
        return { k: "name", v: tk.v };
      }
      err(`رمز غير متوقع: ${tk.v}`);
    }
    const e = expr();
    if (p < t.length) err(`رمز زائد: ${t[p].v}`);
    return e;
  }

  // ---------- النموذج ----------
  function Model() {
    this.tables = {}; this.order = []; this.rels = []; this.measures = {}; this.measureOrder = []; this.calcCols = [];
    this.visuals = []; this.pageFilters = []; this.roles = {}; this.viewAs = null; this.errors = []; this.dateTables = new Set(); this.security = new Map();
  }
  Model.prototype.table = function (name) {
    const k = Object.keys(this.tables).find(x => x.toLowerCase() === String(name).toLowerCase());
    if (!k) err(`الجدول '${name}' غير موجود في النموذج`);
    return this.tables[k];
  };
  Model.prototype.hasTable = function (name) { return Object.keys(this.tables).some(x => x.toLowerCase() === String(name).toLowerCase()); };
  Model.prototype.colName = function (tbl, col) {
    const c = tbl.cols.find(x => x.toLowerCase() === col.toLowerCase());
    if (!c) err(`العمود '${col}' غير موجود في الجدول '${tbl.name}'`);
    return c;
  };
  function inferValue(s) {
    if (s === "") return BLANK;
    if (/^[-+]?(\d+\.?\d*|\.\d+)$/.test(s)) return parseFloat(s);
    const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(s);
    if (m) return mkDate(+m[1], +m[2], +m[3]);
    if (/^(true|false)$/i.test(s)) return s.toLowerCase() === "true";
    return s;
  }
  function addTable(model, name, cols, rows) {
    model.tables[name] = { name, cols, rows };
    model.order.push(name);
  }
  function dateTable(model, name, from, to) {
    const rows = [];
    for (let d = from.serial; d <= to.serial; d++) {
      const x = parts(new DDate(d));
      rows.push({ Date: new DDate(d), Year: x.y, Quarter: "Q" + Math.ceil(x.m / 3), MonthNum: x.m, Month: MONTHS[x.m - 1].slice(0, 3), YearMonth: `${x.y}-${String(x.m).padStart(2, "0")}` });
    }
    addTable(model, name, ["Date", "Year", "Quarter", "MonthNum", "Month", "YearMonth"], rows);
    model.dateTables.add(name);
  }
  const colRefRe = /^\s*('?)([^'\[]+)\1\[([^\]]+)\]\s*$/;
  function parseColRef(s) { const m = colRefRe.exec(s); if (!m) err(`مرجع عمود غير صحيح: ${s}`); return { table: m[2].trim(), col: m[3].trim() }; }
  function addRelationship(model, text) {
    const m = /^(.+?)\s*(->|-)\s*(.+?)(\s*\(inactive\))?\s*$/i.exec(text.trim());
    if (!m) err(`صيغة العلاقة: Sales[ProductID] -> Products[ProductID]`);
    const from = parseColRef(m[1]), to = parseColRef(m[3]);
    const ft = model.table(from.table), tt = model.table(to.table);
    from.table = ft.name; from.col = model.colName(ft, from.col); to.table = tt.name; to.col = model.colName(tt, to.col);
    const seen = new Set();
    for (const r of tt.rows) { const k = key(r[to.col]); if (seen.has(k)) err(`لا يمكن إنشاء علاقة متعدد ← واحد: العمود ${tt.name}[${to.col}] فيه قيم مكررة`); seen.add(k); }
    model.rels.push({ from, to, active: !m[4] });
  }

  // ---------- التقييم ----------
  const emptyCtx = () => ({ cols: new Map(), rows: new Map(), stack: [], vars: {} });
  // visualKeys: الفلاتر التي جاءت من محاور المرئي (يزيلها ALLSELECTED ويُبقي فلاتر الصفحة)
  const cloneCtx = c => ({ cols: new Map(c.cols), rows: new Map(c.rows), stack: c.stack.slice(), vars: Object.assign({}, c.vars), visualKeys: c.visualKeys });

  function Engine(model) {
    const M = model;
    const visCache = new Map();

    // أمان مستوى الصف: قيود ثابتة على الجداول لا يزيلها CALCULATE ولا ALL
    function hasFilter(tname, ctx, seen = new Set()) {
      if (seen.has(tname)) return false;
      seen.add(tname);
      if (ctx.rows.has(tname) || M.security.has(tname)) return true;
      for (const k of ctx.cols.keys()) if (k.split("|")[0] === tname) return true;
      return M.rels.some(r => r.active && r.from.table === tname && hasFilter(r.to.table, ctx, seen));
    }
    function visible(tname, ctx) {
      const tbl = M.tables[tname];
      let idx = tbl.rows.map((_, i) => i);
      if (M.security.has(tname)) { const sec = M.security.get(tname); idx = idx.filter(i => sec.has(i)); }
      for (const [k, f] of ctx.cols) {
        const [tn, cn] = k.split("|");
        if (tn !== tname) continue;
        idx = idx.filter(i => f.has(key(tbl.rows[i][cn])));
      }
      if (ctx.rows.has(tname)) { const s = ctx.rows.get(tname); idx = idx.filter(i => s.has(i)); }
      for (const r of M.rels) {
        if (!r.active || r.from.table !== tname || !hasFilter(r.to.table, ctx)) continue;
        const keys = new Set(visible(r.to.table, ctx).map(i => key(M.tables[r.to.table].rows[i][r.to.col])));
        idx = idx.filter(i => keys.has(key(tbl.rows[i][r.from.col])));
      }
      return idx;
    }

    // الجدول الناتج: { table, idx } لجداول النموذج، أو { virt: [Map("T|c" ← قيمة)], cols } للجداول الافتراضية
    const baseTable = (tname, idx, fromAll) => ({ table: tname, idx, fromAll });
    function rowsOf(tv) { return tv.table ? tv.idx.map(i => ({ t: tv.table, i })) : tv.virt.map(v => ({ v })); }

    function colKey(node, ctx) {
      const tbl = M.table(node.table);
      return { t: tbl.name, c: M.colName(tbl, node.col), k: tbl.name + "|" + M.colName(tbl, node.col) };
    }
    function rowValue(row, t, c) {
      if (row.t !== undefined) return row.t === t ? M.tables[t].rows[row.i][c] : undefined;
      return row.v.has(t + "|" + c) ? row.v.get(t + "|" + c) : undefined;
    }
    function colValue(node, ctx) {
      const { t, c } = colKey(node, ctx);
      for (let s = ctx.stack.length - 1; s >= 0; s--) { const v = rowValue(ctx.stack[s], t, c); if (v !== undefined) return v; }
      err(`لا يمكن تحديد قيمة واحدة للعمود '${t}'[${c}]: في المقياس استخدم دالة تجميع مثل SUM أو MAX، وفي العمود المحسوب من جدول آخر استخدم RELATED`);
    }
    function related(node, ctx) {
      const { t, c } = colKey(node, ctx);
      for (let s = ctx.stack.length - 1; s >= 0; s--) {
        const row = ctx.stack[s];
        if (row.t === undefined) continue;
        let cur = row, curT = row.t;
        const seen = new Set();
        while (curT !== t) {
          const rel = M.rels.find(r => r.active && r.from.table === curT && !seen.has(r.to.table));
          if (!rel) break;
          seen.add(rel.to.table);
          const k = key(M.tables[curT].rows[cur.i][rel.from.col]);
          const j = M.tables[rel.to.table].rows.findIndex(x => key(x[rel.to.col]) === k);
          if (j < 0) return BLANK;
          cur = { t: rel.to.table, i: j }; curT = rel.to.table;
        }
        if (curT === t) return M.tables[t].rows[cur.i][c];
      }
      err(`RELATED تحتاج سياق صف في جدول مرتبط بـ '${t}' بعلاقة متعدد ← واحد`);
    }

    // انتقال السياق: كل سياق صف يصبح تصفية
    function transition(ctx) {
      const c = cloneCtx(ctx);
      for (const row of ctx.stack) {
        if (row.t !== undefined) c.rows.set(row.t, new Set([row.i]));
        else row.v.forEach((v, k) => c.cols.set(k, new Set([key(v)])));
      }
      c.stack = [];
      return c;
    }

    function measure(name, ctx) {
      const mname = Object.keys(M.measures).find(x => x.toLowerCase() === name.toLowerCase());
      if (!mname) return null;
      const m = M.measures[mname];
      if (m.busy) err(`مرجع دائري في المقياس [${mname}]`);
      m.busy = true;
      try { return ev(m.ast, transition(ctx)); } finally { m.busy = false; }
    }

    function num(v) {
      if (isBlank(v)) return 0;
      if (typeof v === "number") return v;
      if (typeof v === "boolean") return v ? 1 : 0;
      if (v instanceof DDate) return v.serial;
      if (typeof v === "string" && /^[-+]?(\d+\.?\d*|\.\d+)$/.test(v.trim())) return parseFloat(v);
      err(`لا يمكن تحويل القيمة "${v}" من نوع نص إلى رقم`);
    }
    function compare(a, b) {
      if (a instanceof DDate) a = a.serial; if (b instanceof DDate) b = b.serial;
      if (isBlank(a)) a = typeof b === "string" ? "" : typeof b === "boolean" ? false : 0;
      if (isBlank(b)) b = typeof a === "string" ? "" : typeof a === "boolean" ? false : 0;
      if (typeof a === "string" && typeof b === "string") { a = a.toLowerCase(); b = b.toLowerCase(); }
      else if (typeof a !== typeof b) err(`لا يمكن مقارنة قيمة من نوع ${typeof a === "string" ? "نص" : "رقم"} بقيمة من نوع ${typeof b === "string" ? "نص" : "رقم"}`);
      return a < b ? -1 : a > b ? 1 : 0;
    }

    function tableExpr(node, ctx) {
      if (node.k === "tableref" || node.k === "name") {
        if (node.k === "name" && ctx.vars[node.v.toUpperCase()] !== undefined) { const v = ctx.vars[node.v.toUpperCase()]; if (v && (v.table || v.virt)) return v; }
        const tbl = M.table(node.k === "tableref" ? node.name : node.v);
        return baseTable(tbl.name, visible(tbl.name, ctx));
      }
      if (node.k === "call" && TABLEF[node.name]) return TABLEF[node.name](node.args, ctx);
      if (node.k === "list") { const items = node.items.map(e => ev(e, ctx)); return { virt: items.map(v => new Map([["|Value", v]])), cols: ["|Value"] }; }
      err("متوقع جدول هنا");
    }
    function distinctVals(tname, cname, idx) {
      const seen = new Map();
      idx.forEach(i => { const v = M.tables[tname].rows[i][cname]; if (!seen.has(key(v))) seen.set(key(v), v); });
      return [...seen.values()];
    }

    // تصفية CALCULATE: شرط على عمود، أو جدول، أو ALL/REMOVEFILTERS
    function applyFilter(node, outer, target) {
      if (node.k === "call" && (node.name === "ALL" || node.name === "REMOVEFILTERS") ) {
        if (!node.args.length) { target.cols.clear(); target.rows.clear(); return; }
        node.args.forEach(a => {
          if (a.k === "col") { const { k } = colKey(a); target.cols.delete(k); }
          else { const tn = M.table(a.k === "tableref" ? a.name : a.v).name; [...target.cols.keys()].forEach(k => { if (k.startsWith(tn + "|")) target.cols.delete(k); }); target.rows.delete(tn); }
        });
        return;
      }
      if (node.k === "call" && node.name === "ALLEXCEPT") {
        const tn = M.table(node.args[0].k === "tableref" ? node.args[0].name : node.args[0].v).name;
        const keep = node.args.slice(1).map(a => colKey(a).k);
        [...target.cols.keys()].forEach(k => { if (k.startsWith(tn + "|") && !keep.includes(k)) target.cols.delete(k); });
        target.rows.delete(tn);
        return;
      }
      if (node.k === "call" && node.name === "KEEPFILTERS") { const inner = cloneCtx(target); applyFilter(node.args[0], outer, inner); inner.cols.forEach((s, k) => { const old = target.cols.get(k); target.cols.set(k, old ? new Set([...s].filter(x => old.has(x))) : s); }); inner.rows.forEach((s, t) => target.rows.set(t, s)); return; }
      const isTable = (node.k === "call" && TABLEF[node.name]) || node.k === "tableref";
      if (isTable) {
        const tv = tableExpr(node, outer);
        if (tv.table) {
          if (tv.fromAll) { [...target.cols.keys()].forEach(k => { if (k.startsWith(tv.table + "|")) target.cols.delete(k); }); }
          target.rows.set(tv.table, new Set(tv.idx));
        } else {
          tv.cols.forEach(k => {
            const [tn] = k.split("|");
            if (M.dateTables.has(tn)) [...target.cols.keys()].forEach(x => { if (x.startsWith(tn + "|")) target.cols.delete(x); });
            target.cols.set(k, new Set(tv.virt.map(r => key(r.get(k)))));
          });
        }
        return;
      }
      // شرط منطقي: نجد الأعمدة المستخدمة فيه
      const cols = new Map();
      (function walk(n) { if (!n || typeof n !== "object") return; if (n.k === "col") { const c = colKey(n); cols.set(c.k, c); return; } if (n.k === "bracket" || n.k === "call" && AGG_NAMES.has(n.name)) return; Object.values(n).forEach(v => Array.isArray(v) ? v.forEach(walk) : walk(v)); })(node);
      if (!cols.size) err("شرط CALCULATE يجب أن يشير لعمود، مثل Products[Category] = \"Electronics\"");
      const list = [...cols.values()];
      if (new Set(list.map(c => c.t)).size > 1) err("شرط CALCULATE الواحد يجب أن يكون على أعمدة جدول واحد");
      if (list.length === 1) {
        const { t, c, k } = list[0];
        const vals = distinctVals(t, c, M.tables[t].rows.map((_, i) => i));
        const keep = vals.filter(v => { const r = ev(node, Object.assign(cloneCtx(outer), { stack: [...outer.stack, { v: new Map([[k, v]]) }] })); return r === true; });
        target.cols.set(k, new Set(keep.map(key)));
        if (M.dateTables.has(t)) [...target.cols.keys()].forEach(x => { if (x.startsWith(t + "|") && x !== k) target.cols.delete(x); });
      } else {
        const t = list[0].t;
        list.forEach(c => target.cols.delete(c.k));
        const idx = M.tables[t].rows.map((_, i) => i).filter(i => ev(node, Object.assign(cloneCtx(outer), { stack: [...outer.stack, { t, i }] })) === true);
        target.rows.set(t, new Set(idx));
      }
    }
    function calculate(exprNode, filters, ctx) {
      const target = transition(ctx);
      filters.forEach(f => applyFilter(f, ctx, target));
      target.vars = ctx.vars;
      return exprNode ? ev(exprNode, target) : target;
    }

    // التجميع على عمود في السياق الحالي
    function colValues(node, ctx) {
      const { t, c } = colKey(node, ctx);
      return visible(t, ctx).map(i => M.tables[t].rows[i][c]);
    }
    function iterate(tableNode, exprNode, ctx) {
      const tv = tableExpr(tableNode, ctx);
      return rowsOf(tv).map(row => ev(exprNode, Object.assign(cloneCtx(ctx), { stack: [...ctx.stack, row] })));
    }
    const nums = vals => vals.filter(v => !isBlank(v) && typeof v !== "string").map(v => v instanceof DDate ? v.serial : typeof v === "boolean" ? +v : v);
    const sum = v => { const n = nums(v); return n.length ? n.reduce((a, b) => a + b, 0) : BLANK; };
    const avg = v => { const n = nums(v); return n.length ? n.reduce((a, b) => a + b, 0) / n.length : BLANK; };
    const mx = (v, sign) => { const n = v.filter(x => !isBlank(x)); if (!n.length) return BLANK; return n.reduce((a, b) => compare(b, a) * sign > 0 ? b : a); };

    const AGG_NAMES = new Set(["SUM", "AVERAGE", "MIN", "MAX", "COUNT", "COUNTA", "COUNTROWS", "DISTINCTCOUNT", "SUMX", "AVERAGEX", "MINX", "MAXX", "COUNTX", "CALCULATE", "SELECTEDVALUE", "HASONEVALUE", "TOTALYTD", "RANKX"]);
    const F = {
      SUM: (a, c) => sum(colValues(a[0], c)),
      AVERAGE: (a, c) => avg(colValues(a[0], c)),
      MIN: (a, c) => a.length > 1 ? mx([ev(a[0], c), ev(a[1], c)], -1) : mx(colValues(a[0], c), -1),
      MAX: (a, c) => a.length > 1 ? mx([ev(a[0], c), ev(a[1], c)], 1) : mx(colValues(a[0], c), 1),
      COUNT: (a, c) => { const n = nums(colValues(a[0], c)).length; return n || BLANK; },
      COUNTA: (a, c) => { const n = colValues(a[0], c).filter(v => !isBlank(v)).length; return n || BLANK; },
      COUNTBLANK: (a, c) => colValues(a[0], c).filter(isBlank).length,
      COUNTROWS: (a, c) => { const n = rowsOf(tableExpr(a[0], c)).length; return n || BLANK; },
      DISTINCTCOUNT: (a, c) => { const n = new Set(colValues(a[0], c).map(key)).size; return n || BLANK; },
      SUMX: (a, c) => sum(iterate(a[0], a[1], c)),
      AVERAGEX: (a, c) => avg(iterate(a[0], a[1], c)),
      MINX: (a, c) => mx(iterate(a[0], a[1], c), -1),
      MAXX: (a, c) => mx(iterate(a[0], a[1], c), 1),
      COUNTX: (a, c) => iterate(a[0], a[1], c).filter(v => !isBlank(v)).length || BLANK,
      CALCULATE: (a, c) => calculate(a[0], a.slice(1), c),
      DIVIDE: (a, c) => { const x = ev(a[0], c), y = ev(a[1], c); if (isBlank(y) || num(y) === 0) return a[2] ? ev(a[2], c) : BLANK; return isBlank(x) ? BLANK : num(x) / num(y); },
      IF: (a, c) => { const b = ev(a[0], c); return truthy(b) ? ev(a[1], c) : a[2] ? ev(a[2], c) : BLANK; },
      SWITCH: (a, c) => { const v = ev(a[0], c); let k = 1; for (; k + 1 < a.length; k += 2) { const w = ev(a[k], c); if (v === true ? w === true : compare(v, w) === 0) return ev(a[k + 1], c); } return k < a.length ? ev(a[k], c) : BLANK; },
      AND: (a, c) => truthy(ev(a[0], c)) && truthy(ev(a[1], c)),
      OR: (a, c) => truthy(ev(a[0], c)) || truthy(ev(a[1], c)),
      NOT: (a, c) => !truthy(ev(a[0], c)),
      TRUE: () => true, FALSE: () => false, BLANK: () => BLANK,
      ISBLANK: (a, c) => isBlank(ev(a[0], c)),
      COALESCE: (a, c) => { for (const x of a) { const v = ev(x, c); if (!isBlank(v)) return v; } return BLANK; },
      SELECTEDVALUE: (a, c) => { const vals = new Set(colValues(a[0], c).map(key)); if (vals.size === 1) return colValues(a[0], c)[0]; return a[1] ? ev(a[1], c) : BLANK; },
      HASONEVALUE: (a, c) => new Set(colValues(a[0], c).map(key)).size === 1,
      RELATED: (a, c) => related(a[0], c),
      ROUND: (a, c) => { const v = ev(a[0], c); if (isBlank(v)) return BLANK; const d = a[1] ? num(ev(a[1], c)) : 0, f = Math.pow(10, d); return Math.sign(v) * Math.round(Math.abs(num(v)) * f + 1e-9) / f; },
      ABS: (a, c) => { const v = ev(a[0], c); return isBlank(v) ? BLANK : Math.abs(num(v)); },
      INT: (a, c) => Math.floor(num(ev(a[0], c))),
      DATE: (a, c) => mkDate(num(ev(a[0], c)), num(ev(a[1], c)), num(ev(a[2], c))),
      TODAY: () => mkDate(2024, 12, 31),
      YEAR: (a, c) => dpart(ev(a[0], c), "y"), MONTH: (a, c) => dpart(ev(a[0], c), "m"), DAY: (a, c) => dpart(ev(a[0], c), "d"),
      QUARTER: (a, c) => { const m = dpart(ev(a[0], c), "m"); return m === BLANK ? BLANK : Math.ceil(m / 3); },
      FORMAT: (a, c) => fmt(ev(a[0], c), ev(a[1], c)),
      CONCATENATE: (a, c) => str(ev(a[0], c)) + str(ev(a[1], c)),
      UPPER: (a, c) => str(ev(a[0], c)).toUpperCase(), LOWER: (a, c) => str(ev(a[0], c)).toLowerCase(),
      LEFT: (a, c) => str(ev(a[0], c)).slice(0, a[1] ? num(ev(a[1], c)) : 1), LEN: (a, c) => str(ev(a[0], c)).length,
      TOTALYTD: (a, c) => calculate(a[0], [{ k: "call", name: "DATESYTD", args: [a[1]] }, ...a.slice(2)], c),
      RANKX: (a, c) => {
        const tv = tableExpr(a[0], c);
        const vals = rowsOf(tv).map(row => ev(a[1], Object.assign(cloneCtx(c), { stack: [...c.stack, row] })));
        const me = a[2] && !a[2].missing ? ev(a[2], c) : ev(a[1], c);
        const asc = a[3] && a[3].k === "kw" && a[3].v === "ASC";
        const dense = a[4] && a[4].k === "kw" && a[4].v === "DENSE";
        if (isBlank(me)) return BLANK;
        const others = vals.filter(v => !isBlank(v) && (asc ? num(v) < num(me) : num(v) > num(me)));
        return 1 + (dense ? new Set(others.map(key)).size : others.length);
      }
    };
    const dpart = (v, p) => isBlank(v) ? BLANK : parts(v instanceof DDate ? v : new DDate(num(v)))[p];
    const str = v => isBlank(v) ? "" : v instanceof DDate ? display(v) : typeof v === "number" ? fmtNum(v) : String(v);
    const truthy = v => { if (typeof v === "boolean") return v; if (isBlank(v)) return false; if (typeof v === "number") return v !== 0; err(`لا يمكن تحويل النص "${v}" إلى قيمة منطقية`); };

    function datesOf(node, c) {
      // الدوال الزمنية تعمل على عمود التاريخ في جدول التاريخ: التواريخ الظاهرة في السياق
      const { t, col, k } = (() => { const x = colKey(node, c); return { t: x.t, col: x.c, k: x.k }; })();
      const vis = visible(t, c).map(i => M.tables[t].rows[i][col]).filter(v => v instanceof DDate);
      return { t, col, k, vis };
    }
    const dateSet = (k, list) => ({ virt: list.map(d => new Map([[k, d]])), cols: [k] });
    const TABLEF = {
      FILTER: (a, c) => {
        const tv = tableExpr(a[0], c);
        const keep = rowsOf(tv).filter(row => truthy(ev(a[1], Object.assign(cloneCtx(c), { stack: [...c.stack, row] }))));
        return tv.table ? { table: tv.table, idx: keep.map(r => r.i), fromAll: tv.fromAll } : { virt: keep.map(r => r.v), cols: tv.cols };
      },
      ALL: (a, c) => {
        if (!a.length) err("ALL تحتاج جدولاً أو عموداً");
        if (a[0].k === "col") {
          const ks = a.map(x => colKey(x));
          const t = ks[0].t, seen = new Map();
          M.tables[t].rows.forEach(r => { const vals = ks.map(x => r[x.c]); const kk = vals.map(key).join("§"); if (!seen.has(kk)) seen.set(kk, new Map(ks.map((x, i) => [x.k, vals[i]]))); });
          return { virt: [...seen.values()], cols: ks.map(x => x.k) };
        }
        const tn = M.table(a[0].k === "tableref" ? a[0].name : a[0].v).name;
        return baseTable(tn, M.tables[tn].rows.map((_, i) => i), true);
      },
      ALLSELECTED: (a, c) => {
        const cc = cloneCtx(c);
        (c.visualKeys || []).forEach(k => cc.cols.delete(k));
        if (a[0] && a[0].k === "col") { const x = colKey(a[0]); return { virt: distinctVals(x.t, x.c, visible(x.t, cc)).map(v => new Map([[x.k, v]])), cols: [x.k] }; }
        const tn = M.table(a[0].k === "tableref" ? a[0].name : a[0].v).name;
        return baseTable(tn, visible(tn, cc), true);
      },
      VALUES: (a, c) => {
        if (a[0].k === "col") { const x = colKey(a[0]); return { virt: distinctVals(x.t, x.c, visible(x.t, c)).map(v => new Map([[x.k, v]])), cols: [x.k] }; }
        return tableExpr(a[0], c);
      },
      RELATEDTABLE: (a, c) => { const tn = M.table(a[0].k === "tableref" ? a[0].name : a[0].v).name; return baseTable(tn, visible(tn, transition(c))); },
      TOPN: (a, c) => {
        const n = num(ev(a[0], c)), tv = tableExpr(a[1], c), rows = rowsOf(tv);
        const desc = !(a[3] && a[3].k === "kw" && a[3].v === "ASC");
        const scored = rows.map(row => ({ row, v: ev(a[2], Object.assign(cloneCtx(c), { stack: [...c.stack, row] })) }));
        scored.sort((x, y) => (num(y.v) - num(x.v)) * (desc ? 1 : -1));
        const cut = scored.length > n ? num(scored[n - 1].v) : null;
        const keep = scored.filter((s, i) => i < n || num(s.v) === cut).map(s => s.row);
        return tv.table ? { table: tv.table, idx: keep.map(r => r.i) } : { virt: keep.map(r => r.v), cols: tv.cols };
      },
      SUMMARIZE: (a, c) => {
        const tv = tableExpr(a[0], c);
        let k = 1;
        const groups = [];
        while (k < a.length && a[k].k === "col") groups.push(colKey(a[k++]));
        const seen = new Map();
        rowsOf(tv).forEach(row => {
          const ctxRow = Object.assign(cloneCtx(c), { stack: [...c.stack, row] });
          const vals = groups.map(g => g.t === tv.table ? M.tables[g.t].rows[row.i][g.c] : related({ k: "col", table: g.t, col: g.c }, ctxRow));
          const kk = vals.map(key).join("§");
          if (!seen.has(kk)) seen.set(kk, new Map(groups.map((g, i) => [g.k, vals[i]])));
        });
        const virt = [...seen.values()];
        for (; k + 1 < a.length; k += 2) { const name = ev(a[k], c); virt.forEach(r => r.set("|" + name, ev(a[k + 1], Object.assign(cloneCtx(c), { stack: [...c.stack, { v: r }] })))); }
        return { virt, cols: [...groups.map(g => g.k)] };
      },
      ADDCOLUMNS: (a, c) => {
        const tv = tableExpr(a[0], c);
        const virt = rowsOf(tv).map(row => { const m = row.v ? new Map(row.v) : new Map(M.tables[row.t].cols.map(cn => [row.t + "|" + cn, M.tables[row.t].rows[row.i][cn]])); return m; });
        for (let k = 1; k + 1 < a.length; k += 2) { const name = ev(a[k], c); virt.forEach(r => r.set("|" + name, ev(a[k + 1], Object.assign(cloneCtx(c), { stack: [...c.stack, { v: r }] })))); }
        return { virt, cols: tv.cols || M.tables[tv.table].cols.map(cn => tv.table + "|" + cn) };
      },
      CALENDAR: (a, c) => { const s = ev(a[0], c), e = ev(a[1], c), out = []; for (let d = s.serial; d <= e.serial; d++) out.push(new Map([["|Date", new DDate(d)]])); return { virt: out, cols: ["|Date"] }; },
      DATESYTD: (a, c) => { const { k, vis } = datesOf(a[0], c); if (!vis.length) return dateSet(k, []); const last = vis.reduce((x, y) => y.serial > x.serial ? y : x), y = parts(last).y, start = mkDate(y, 1, 1).serial; const all = M.tables[k.split("|")[0]].rows.map(r => r[k.split("|")[1]]).filter(d => d.serial >= start && d.serial <= last.serial); return dateSet(k, all); },
      SAMEPERIODLASTYEAR: (a, c) => { const { k, vis } = datesOf(a[0], c); return dateSet(k, shiftDates(k, vis, -1, "YEAR")); },
      DATEADD: (a, c) => { const { k, vis } = datesOf(a[0], c); return dateSet(k, shiftDates(k, vis, num(ev(a[1], c)), a[2].v)); },
      DATESBETWEEN: (a, c) => { const { k } = datesOf(a[0], c); const s = ev(a[1], c), e = ev(a[2], c); return dateSet(k, M.tables[k.split("|")[0]].rows.map(r => r[k.split("|")[1]]).filter(d => d.serial >= s.serial && d.serial <= e.serial)); }
    };
    TABLEF.DISTINCT = TABLEF.VALUES;
    TABLEF.CALCULATETABLE = (a, c) => { const cc = calculate(null, a.slice(1), c); cc.vars = c.vars; return tableExpr(a[0], cc); };
    function shiftDates(k, vis, n, unit) {
      const [t, col] = k.split("|");
      const all = new Set(M.tables[t].rows.map(r => r[col].serial));
      const out = [];
      vis.forEach(d => {
        const x = parts(d);
        let nd;
        if (unit === "DAY") nd = new DDate(d.serial + n);
        else {
          const months = unit === "YEAR" ? 12 * n : unit === "QUARTER" ? 3 * n : n;
          const last = new Date(Date.UTC(x.y, x.m - 1 + months + 1, 0)).getUTCDate();
          nd = mkDate(x.y, x.m + months, Math.min(x.d, last));
          // كما في DAX: آخر يوم في الشهر يقابله باقي أيام الشهر الهدف حتى نهايته (30 أبريل ← 30 و 31 مارس)
          const srcLast = new Date(Date.UTC(x.y, x.m, 0)).getUTCDate();
          if (x.d === srcLast) for (let dd = x.d + 1; dd <= last; dd++) { const extra = mkDate(x.y, x.m + months, dd); if (all.has(extra.serial)) out.push(extra); }
        }
        if (all.has(nd.serial)) out.push(nd);
      });
      const seen = new Set();
      return out.filter(d => !seen.has(d.serial) && seen.add(d.serial));
    }

    function ev(node, ctx) {
      switch (node.k) {
        case "lit": return node.v;
        case "list": err("القائمة {...} تُستخدم مع IN فقط");
        case "neg": { const v = ev(node.e, ctx); return isBlank(v) ? BLANK : -num(v); }
        case "and": return truthy(ev(node.l, ctx)) && truthy(ev(node.r, ctx));
        case "or": return truthy(ev(node.l, ctx)) || truthy(ev(node.r, ctx));
        case "not": return !truthy(ev(node.e, ctx));
        case "in": { const v = ev(node.e, ctx); return node.list.items.some(i => compare(v, ev(i, ctx)) === 0); }
        case "bin": {
          const a = ev(node.l, ctx), b = ev(node.r, ctx);
          if (node.op === "&") return str(a) + str(b);
          if (["=", "<>", "<", ">", "<=", ">="].includes(node.op)) { const c = compare(a, b); return { "=": c === 0, "<>": c !== 0, "<": c < 0, ">": c > 0, "<=": c <= 0, ">=": c >= 0 }[node.op]; }
          if (isBlank(a) && isBlank(b)) return BLANK;
          if (node.op === "+" && a instanceof DDate) return new DDate(a.serial + num(b));
          if (node.op === "-" && a instanceof DDate && b instanceof DDate) return a.serial - b.serial;
          const x = num(a), y = num(b);
          switch (node.op) { case "+": return x + y; case "-": return x - y; case "*": return x * y; case "^": return Math.pow(x, y); case "/": if (y === 0) err("قسمة على صفر: استخدم DIVIDE(a, b) لتجنب الخطأ"); return x / y; }
          break;
        }
        case "col": return colValue(node, ctx);
        case "bracket": {
          const v = measure(node.name, ctx);
          if (v !== null || Object.keys(M.measures).some(x => x.toLowerCase() === node.name.toLowerCase())) return v;
          // [عمود] في سياق صف
          for (let s = ctx.stack.length - 1; s >= 0; s--) {
            const row = ctx.stack[s];
            if (row.t !== undefined) { const col = M.tables[row.t].cols.find(x => x.toLowerCase() === node.name.toLowerCase()); if (col) return M.tables[row.t].rows[row.i][col]; }
            else { for (const [k, v2] of row.v) if (k.split("|")[1].toLowerCase() === node.name.toLowerCase()) return v2; }
          }
          err(`المقياس أو العمود [${node.name}] غير موجود`);
        }
        case "name": {
          const u = node.v.toUpperCase();
          if (ctx.vars[u] !== undefined) return ctx.vars[u];
          err(`الاسم '${node.v}' غير معروف (هل نسيت الأقواس [] أو اسم الجدول؟)`);
        }
        case "var": {
          const c = cloneCtx(ctx);
          node.vars.forEach(v => { const isTbl = v.e.k === "call" && TABLEF[v.e.name]; c.vars[v.name] = isTbl ? tableExpr(v.e, c) : ev(v.e, c); });
          return ev(node.body, c);
        }
        case "call": {
          if (F[node.name]) return F[node.name](node.args, ctx);
          if (TABLEF[node.name]) { const tv = tableExpr(node, ctx); const rows = rowsOf(tv); if (tv.virt && tv.cols.length === 1 && rows.length === 1) return rows[0].v.get(tv.cols[0]); err(`الدالة ${node.name} تُرجع جدولاً، ولا يمكن استخدامها كقيمة واحدة هنا`); }
          err(`الدالة ${node.name} غير معروفة`);
        }
        case "tableref": err(`'${node.name}' جدول، ولا يمكن استخدامه كقيمة هنا`);
        case "kw": return node.v;
      }
      err("تعبير غير مدعوم");
    }

    return { ev, visible, calculate, tableExpr, rowsOf, emptyCtx, applyFilter, compare };
  }

  // ---------- التنسيق ----------
  const fmtNum = n => Number.isInteger(n) ? String(n) : String(Math.round(n * 100) / 100);
  function fmt(v, f) {
    if (isBlank(v)) return "";
    f = String(f || "");
    if (v instanceof DDate) { const x = parts(v); return f.replace(/yyyy|mmmm|mmm|mm|dd|d/gi, k => ({ yyyy: x.y, mmmm: MONTHS[x.m - 1], mmm: MONTHS[x.m - 1].slice(0, 3), mm: String(x.m).padStart(2, "0"), dd: String(x.d).padStart(2, "0"), d: x.d })[k.toLowerCase()]); }
    if (typeof v !== "number") return String(v);
    const pct = f.includes("%"), val = pct ? v * 100 : v;
    const dec = (f.split(".")[1] || "").replace(/[^0#]/g, "").length;
    let s = Math.abs(val).toFixed(dec);
    if (f.includes(",")) { const [i, d] = s.split("."); s = i.replace(/\B(?=(\d{3})+(?!\d))/g, ",") + (d ? "." + d : ""); }
    return (val < 0 ? "-" : "") + s + (pct ? "%" : "");
  }
  // قيم الأعمدة في محاور المرئيات تُعرض كما هي (2024 لا 2,024)
  const label = v => typeof v === "number" ? fmtNum(v) : display(v);
  function display(v, name) {
    if (isBlank(v)) return "(Blank)";
    if (v instanceof DDate) { const x = parts(v); return `${x.y}-${String(x.m).padStart(2, "0")}-${String(x.d).padStart(2, "0")}`; }
    if (typeof v === "boolean") return v ? "True" : "False";
    if (typeof v === "number") {
      if (name && name.includes("%")) return fmt(v, "0.0%");
      return Number.isInteger(Math.round(v * 100) / 100) ? fmt(v, "#,0") : fmt(v, "#,0.00");
    }
    return String(v);
  }

  // ---------- تحميل الإعداد وكود الطالب ----------
  function loadSetup(model, text) {
    let cur = null, buf = [];
    const flush = () => {
      if (!cur) return;
      const rows = CW.m && CW.m.parseCsv ? CW.m.parseCsv(buf.join("\n")) : buf.filter(Boolean).map(l => l.split(","));
      const cols = rows[0].map(s => s.trim());
      addTable(model, cur, cols, rows.slice(1).map(r => Object.fromEntries(cols.map((c, i) => [c, inferValue((r[i] || "").trim())]))));
      cur = null; buf = [];
    };
    (text || "").split("\n").forEach(line => {
      const t = line.trim();
      let m;
      if ((m = /^==\s*table\s*:\s*(.+)$/i.exec(t))) { flush(); cur = m[1].trim(); return; }
      if ((m = /^==\s*datetable\s*:\s*'?([^'\s]+)'?\s+(\d{4})-(\d{2})-(\d{2})\s+(\d{4})-(\d{2})-(\d{2})$/i.exec(t))) { flush(); dateTable(model, m[1], mkDate(+m[2], +m[3], +m[4]), mkDate(+m[5], +m[6], +m[7])); return; }
      if ((m = /^==\s*relationship\s*:\s*(.+)$/i.exec(t))) { flush(); try { addRelationship(model, m[1]); } catch (e) { model.errors.push(e.message); } return; }
      if (/^==/.test(t)) { flush(); return; }
      if (cur && t && !t.startsWith("#")) buf.push(line);
    });
    flush();
  }
  // تعليمات الطالب: كل تعليمة تبدأ في أول السطر، والأسطر المزاحة تكملها
  function statements(code) {
    const out = [];
    code.split("\n").forEach((line, i) => {
      if (/^\s*(\/\/|--)/.test(line) || !line.trim()) return;
      if (/^\s/.test(line) && out.length) out[out.length - 1].text += "\n" + line;
      else out.push({ text: line, line: i + 1 });
    });
    return out;
  }

  function build(setup, code) {
    const model = new Model();
    loadSetup(model, setup);
    const eng = Engine(model);
    const pending = [];
    for (const st of statements(code || "")) {
      const s = st.text.trim();
      let m;
      try {
        if ((m = /^relationship\s*:\s*([\s\S]+)$/i.exec(s))) addRelationship(model, m[1]);
        else if ((m = /^visual\s*:\s*(\w+)\s+([\s\S]+)$/i.exec(s))) {
          let fields = m[2], title = "";
          const tm = /"([^"]*)"\s*$/.exec(fields);
          if (tm) { title = tm[1]; fields = fields.slice(0, tm.index); }
          model.visuals.push({ type: m[1].toLowerCase(), spec: fields.trim(), title, line: st.line });
        }
        else if ((m = /^filter\s*:\s*([\s\S]+)$/i.exec(s))) model.pageFilters.push({ src: m[1].trim(), ast: parse(m[1]) });
        else if ((m = /^role\s*:\s*([^=]+?)\s*=\s*([\s\S]+)$/i.exec(s))) model.roles[m[1].trim()] = { src: m[2].trim(), ast: parse(m[2]) };
        else if ((m = /^view\s+as\s*:\s*(.+)$/i.exec(s))) model.viewAs = m[1].trim();
        else if ((m = /^('?)([^'\[=]+)\1\[([^\]]+)\]\s*=\s*([\s\S]+)$/.exec(s))) {
          const tbl = model.table(m[2].trim());
          if (tbl.cols.some(c => c.toLowerCase() === m[3].trim().toLowerCase())) err(`العمود ${tbl.name}[${m[3].trim()}] موجود مسبقاً`);
          model.calcCols.push({ table: tbl.name, col: m[3].trim(), src: m[4].trim(), ast: parse(m[4]) });
          // العمود المحسوب يُحسب صفاً صفاً بسياق صف ودون تصفية
          tbl.cols.push(m[3].trim());
          tbl.rows.forEach((r, i) => { r[m[3].trim()] = eng.ev(model.calcCols[model.calcCols.length - 1].ast, Object.assign(eng.emptyCtx(), { stack: [{ t: tbl.name, i }] })); });
        }
        else if ((m = /^([^=\[\]]+?)\s*=\s*([\s\S]+)$/.exec(s))) {
          const name = m[1].trim();
          if (model.measures[name]) err(`المقياس [${name}] معرّف مسبقاً`);
          model.measures[name] = { name, src: m[2].trim(), ast: parse(m[2]) };
          model.measureOrder.push(name);
        }
        else err(`لم أفهم السطر. اكتب مقياساً هكذا: Total Sales = SUM(Sales[Amount])`);
      } catch (e) {
        if (!(e instanceof DaxError)) throw e;
        model.errors.push(`السطر ${st.line}: ${e.message}`);
      }
    }
    return { model, eng };
  }

  // سياق الصفحة: فلاتر الصفحة ودور أمان الصفوف
  function pageCtx(model, eng, extra = []) {
    const ctx = eng.emptyCtx();
    if (model.viewAs && !model.security.size) {
      const role = model.roles[model.viewAs];
      if (!role) err(`الدور '${model.viewAs}' غير معرّف`);
      // شرط الدور يُطبق صفاً صفاً على جدوله، وينتقل عبر العلاقات كأي فلتر
      const tmp = eng.emptyCtx();
      eng.applyFilter(role.ast, tmp, tmp);
      const tables = new Set([...tmp.cols.keys()].map(k => k.split("|")[0]).concat([...tmp.rows.keys()]));
      tables.forEach(t => model.security.set(t, new Set(eng.visible(t, tmp))));
    }
    [...model.pageFilters.map(f => f.ast), ...extra].forEach(f => eng.applyFilter(f, ctx, ctx));
    return ctx;
  }
  // حساب المرئي: الأعمدة تجمّع، والمقاييس تُحسب لكل مجموعة
  function computeVisual(model, eng, v) {
    const ctx = pageCtx(model, eng);
    const segs = v.spec.split("|").map(s => s.trim());
    const fields = s => s.split(/,(?![^(]*\))/).map(x => x.trim()).filter(Boolean).map(x => /^\[.+\]$/.test(x) ? { measure: x.slice(1, -1) } : { col: parse(x) });
    const evalMeasure = (name, c) => {
      const mm = Object.keys(model.measures).find(x => x.toLowerCase() === name.toLowerCase());
      if (!mm) err(`المقياس [${name}] غير موجود`);
      return eng.ev({ k: "bracket", name: mm }, c);
    };
    const groupVals = (colNode, c) => {
      const tbl = model.table(colNode.table), cn = model.colName(tbl, colNode.col);
      const seen = new Map();
      eng.visible(tbl.name, c).forEach(i => { const x = tbl.rows[i][cn]; if (!seen.has(key(x))) seen.set(key(x), x); });
      const sortCol = cn === "Month" && tbl.cols.includes("MonthNum") ? "MonthNum" : null;
      const vals = [...seen.values()];
      if (sortCol) { const order = new Map(tbl.rows.map(r => [r[cn], r[sortCol]])); vals.sort((a, b) => order.get(a) - order.get(b)); }
      else vals.sort((a, b) => eng.compare(a, b));
      return { k: tbl.name + "|" + cn, vals, label: `${tbl.name}[${cn}]` };
    };
    const withFilter = (c, k, val) => { const cc = Object.assign({}, c, { cols: new Map(c.cols), rows: new Map(c.rows), stack: [], vars: {} }); cc.cols.set(k, new Set([key(val)])); cc.visualKeys = [...(c.visualKeys || []), k]; return cc; };
    if (v.type === "matrix") {
      const [r, cl, vals] = segs.map(fields);
      const R = groupVals(r[0].col, ctx), C = groupVals(cl[0].col, ctx), m = vals[0].measure;
      const rows = R.vals.map(rv => ({ label: rv, cells: C.vals.map(cv => evalMeasure(m, withFilter(withFilter(ctx, R.k, rv), C.k, cv))), total: evalMeasure(m, withFilter(ctx, R.k, rv)) }))
        .filter(x => !isBlank(x.total) || x.cells.some(y => !isBlank(y)));
      const colTotals = C.vals.map(cv => evalMeasure(m, withFilter(ctx, C.k, cv)));
      return { type: "matrix", title: v.title, rowLabel: R.label, cols: C.vals, measure: m, rows, colTotals, total: evalMeasure(m, ctx) };
    }
    const fl = fields(segs[0]);
    const groups = fl.filter(f => f.col), measures = fl.filter(f => f.measure).map(f => f.measure);
    if (!measures.length && v.type !== "slicer") err("المرئي يحتاج مقياساً واحداً على الأقل، مثل [Total Sales]");
    if (v.type === "card" || !groups.length) return { type: "card", title: v.title, values: measures.map(mn => ({ name: mn, value: evalMeasure(mn, ctx) })) };
    const G = groupVals(groups[0].col, ctx);
    let rows = G.vals.map(gv => ({ label: gv, values: measures.map(mn => evalMeasure(mn, withFilter(ctx, G.k, gv))) })).filter(x => x.values.some(y => !isBlank(y)));
    if (["bar", "column", "pie"].includes(v.type)) rows.sort((a, b) => (b.values[0] || 0) - (a.values[0] || 0));
    return { type: v.type, title: v.title, group: G.label, measures, rows, totals: measures.map(mn => evalMeasure(mn, ctx)) };
  }
  function visualLines(model, r) {
    const out = [`[${r.type}]${r.title ? " " + r.title : ""}`];
    if (r.type === "card") r.values.forEach(x => out.push(`${x.name}: ${display(x.value, x.name)}`));
    else if (r.type === "matrix") {
      out.push([r.rowLabel, ...r.cols.map(label), "Total"].join(" | "));
      r.rows.forEach(x => out.push([label(x.label), ...x.cells.map(c => display(c, r.measure)), display(x.total, r.measure)].join(" | ")));
      out.push(["Total", ...r.colTotals.map(c => display(c, r.measure)), display(r.total, r.measure)].join(" | "));
    } else {
      out.push([r.group, ...r.measures].join(" | "));
      r.rows.forEach(x => out.push([label(x.label), ...x.values.map((v, i) => display(v, r.measures[i]))].join(" | ")));
      if (r.type === "table") out.push(["Total", ...r.totals.map((v, i) => display(v, r.measures[i]))].join(" | "));
    }
    return out;
  }

  CW.daxExec = function (code, setup, test) {
    // استعلامات Power Query في Power BI: الكود الذي يبدأ بـ let
    if (/^\s*((\/\/|--).*\n\s*)*let\b/i.test(code) && CW.mRun) return CW.mRun(code, setup, test);
    const { model, eng } = build(setup, code);
    const shown = model.errors.map(e => ({ kind: "err", text: e }));
    const results = [];
    for (const v of model.visuals) {
      try { const r = computeVisual(model, eng, v); results.push(r); visualLines(model, r).forEach(t => shown.push({ kind: "log", text: t })); }
      catch (e) { if (!(e instanceof DaxError)) throw e; shown.push({ kind: "err", text: `المرئي في السطر ${v.line}: ${e.message}` }); results.push(null); }
    }
    if (!model.visuals.length) {
      // دون مرئيات: نعرض كل مقياس كبطاقة، وأول قيم الأعمدة المحسوبة
      for (const name of model.measureOrder) {
        try { const c = pageCtx(model, eng); shown.push({ kind: "log", text: `${name} = ${display(eng.ev({ k: "bracket", name }, c), name)}` }); }
        catch (e) { if (!(e instanceof DaxError)) throw e; shown.push({ kind: "err", text: `[${name}]: ${e.message}` }); }
      }
      model.calcCols.forEach(cc => shown.push({ kind: "log", text: `${cc.table}[${cc.col}]: ${model.tables[cc.table].rows.slice(0, 5).map(r => display(r[cc.col])).join(", ")}, ...` }));
    }
    let graded;
    if (test) {
      graded = [];
      const say = t => String(t).split("\n").forEach(line => graded.push({ kind: "log", text: line }));
      const helpers = {
        print: (...a) => say(a.map(v => typeof v === "string" ? v : JSON.stringify(v)).join(" ")),
        // قيمة مقياس في سياق الصفحة مع فلاتر إضافية: measure("Total Sales", 'Products[Category] = "Furniture"')
        measure: (name, ...filters) => { const c = pageCtx(model, eng, filters.map(parse)); return display(eng.ev({ k: "bracket", name }, c), name); },
        raw: (name, ...filters) => { const c = pageCtx(model, eng, filters.map(parse)); return eng.ev({ k: "bracket", name }, c); },
        visual: i => results[i] ? visualLines(model, results[i]) : ["(خطأ في المرئي)"],
        showVisual: i => (results[i] ? visualLines(model, results[i]) : ["(خطأ في المرئي)"]).forEach(say),
        column: (t, c, n = 5) => { const tbl = model.table(t); return tbl.rows.slice(0, n).map(r => display(r[model.colName(tbl, c)])); },
        relationships: () => model.rels.map(r => `${r.from.table}[${r.from.col}] -> ${r.to.table}[${r.to.col}]`),
        measures: () => model.measureOrder.slice(),
        formula: name => model.measures[name] ? model.measures[name].src : null,
        rows: (t, ...filters) => { const c = pageCtx(model, eng, filters.map(parse)); return eng.visible(model.table(t).name, c).length; }
      };
      try { new Function(...Object.keys(helpers), test)(...Object.values(helpers)); }
      catch (e) { graded.push({ kind: "err", text: e.message }); }
      graded.push(...shown.filter(l => l.kind === "err"));
    }
    return { shown, graded, model, results };
  };

  // ---------- العرض: النموذج والمرئيات ----------
  const esc = s => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  const COLORS = ["#118dff", "#12239e", "#e66c37", "#6b007b", "#e044a7", "#744ec2"];
  function chartSvg(r) {
    const W = 460, H = 250, L = 96, B = 26, T = r.title ? 30 : 10;
    const vals = r.rows.map(x => typeof x.values[0] === "number" ? x.values[0] : 0), labels = r.rows.map(x => label(x.label));
    let s = `<svg viewBox="0 0 ${W} ${H}" class="pbi-chart" dir="ltr"><rect width="${W}" height="${H}" fill="#fff"/>`;
    if (r.title) s += `<text x="10" y="20" font-size="13" font-weight="600" fill="#252423">${esc(r.title)}</text>`;
    const max = Math.max(...vals, 0) || 1;
    if (r.type === "pie") {
      const tot = vals.reduce((a, b) => a + b, 0) || 1, cx = 120, cy = (H + T) / 2, rad = Math.min(95, (H - T - 12) / 2);
      let a0 = -Math.PI / 2;
      vals.forEach((v, i) => { const a1 = a0 + 2 * Math.PI * v / tot; s += `<path d="M${cx},${cy} L${cx + rad * Math.cos(a0)},${cy + rad * Math.sin(a0)} A${rad},${rad} 0 ${a1 - a0 > Math.PI ? 1 : 0} 1 ${cx + rad * Math.cos(a1)},${cy + rad * Math.sin(a1)} Z" fill="${COLORS[i % 6]}" stroke="#fff"/>`; s += `<rect x="250" y="${T + 6 + i * 18}" width="10" height="10" fill="${COLORS[i % 6]}"/><text x="265" y="${T + 15 + i * 18}" font-size="11" fill="#333">${esc(labels[i])} (${Math.round(100 * v / tot)}%)</text>`; a0 = a1; });
      return s + "</svg>";
    }
    if (r.type === "line" || r.type === "column") {
      const pw = W - 50, ph = H - T - B - 6, band = pw / Math.max(vals.length, 1);
      const y = v => T + ph - v / max * ph;
      if (r.type === "line") { s += `<polyline fill="none" stroke="${COLORS[0]}" stroke-width="2.5" points="${vals.map((v, i) => `${40 + band * (i + 0.5)},${y(v)}`).join(" ")}"/>`; vals.forEach((v, i) => { s += `<circle cx="${40 + band * (i + 0.5)}" cy="${y(v)}" r="3" fill="${COLORS[0]}"/>`; }); }
      else vals.forEach((v, i) => { s += `<rect x="${40 + band * i + band * 0.15}" y="${y(v)}" width="${band * 0.7}" height="${T + ph - y(v)}" fill="${COLORS[0]}"/>`; });
      labels.forEach((lb, i) => { if (vals.length <= 8 || i % Math.ceil(vals.length / 6) === 0) s += `<text x="${40 + band * (i + 0.5)}" y="${H - 8}" font-size="10" text-anchor="middle" fill="#605e5c">${esc(lb)}</text>`; });
      return s + "</svg>";
    }
    const band = (H - T - 8) / Math.max(vals.length, 1);
    vals.forEach((v, i) => {
      const w = v / max * (W - L - 70);
      s += `<text x="${L - 6}" y="${T + band * (i + 0.5) + 4}" font-size="11" text-anchor="end" fill="#252423">${esc(labels[i])}</text>`;
      s += `<rect x="${L}" y="${T + band * i + band * 0.15}" width="${Math.max(0, w)}" height="${band * 0.7}" fill="${COLORS[0]}"/>`;
      s += `<text x="${L + w + 4}" y="${T + band * (i + 0.5) + 4}" font-size="10" fill="#605e5c">${esc(display(r.rows[i].values[0], r.measures[0]))}</text>`;
    });
    return s + "</svg>";
  }
  CW.renderDaxModel = function (container, r) {
    if (!container) return;
    const { model, results } = r;
    let h = `<div class="pbi" dir="ltr">`;
    if (model.pageFilters.length || model.viewAs) h += `<div class="pbi-filters">${model.pageFilters.map(f => `<span>🔽 ${esc(f.src)}</span>`).join("")}${model.viewAs ? `<span class="role">👤 View as: ${esc(model.viewAs)}</span>` : ""}</div>`;
    h += `<div class="pbi-visuals">`;
    (results || []).forEach(v => {
      if (!v) return;
      if (v.type === "card") h += v.values.map(x => `<div class="pbi-card"><div class="v">${esc(display(x.value, x.name))}</div><div class="n">${esc(x.name)}</div></div>`).join("");
      else if (v.type === "table" || v.type === "matrix") {
        h += `<div class="pbi-table">${v.title ? `<b>${esc(v.title)}</b>` : ""}<table><thead><tr>`;
        if (v.type === "table") { h += [v.group, ...v.measures].map(c => `<th>${esc(c)}</th>`).join("") + `</tr></thead><tbody>`; v.rows.forEach(x => { h += `<tr><td>${esc(label(x.label))}</td>${x.values.map((y, i) => `<td class="n">${esc(display(y, v.measures[i]))}</td>`).join("")}</tr>`; }); h += `<tr class="tot"><td>Total</td>${v.totals.map((y, i) => `<td class="n">${esc(display(y, v.measures[i]))}</td>`).join("")}</tr>`; }
        else { h += [v.rowLabel, ...v.cols.map(label), "Total"].map(c => `<th>${esc(c)}</th>`).join("") + `</tr></thead><tbody>`; v.rows.forEach(x => { h += `<tr><td>${esc(label(x.label))}</td>${x.cells.map(y => `<td class="n">${esc(isBlank(y) ? "" : display(y, v.measure))}</td>`).join("")}<td class="n"><b>${esc(display(x.total, v.measure))}</b></td></tr>`; }); h += `<tr class="tot"><td>Total</td>${v.colTotals.map(y => `<td class="n">${esc(display(y, v.measure))}</td>`).join("")}<td class="n">${esc(display(v.total, v.measure))}</td></tr>`; }
        h += `</tbody></table></div>`;
      } else h += chartSvg(v);
    });
    h += `</div>`;
    // عرض النموذج: الجداول والعلاقات والمقاييس
    h += `<details class="pbi-model"><summary>Model view: ${model.order.length} tables · ${model.rels.length} relationships · ${model.measureOrder.length} measures</summary><div class="pbi-tables">`;
    model.order.forEach(t => { const tb = model.tables[t]; h += `<div class="pbi-tbl"><b>${esc(t)}</b> <small>${tb.rows.length} rows</small><ul>${tb.cols.map(c => `<li${model.calcCols.some(x => x.table === t && x.col === c) ? ' class="calc"' : ""}>${esc(c)}</li>`).join("")}</ul></div>`; });
    if (model.measureOrder.length) h += `<div class="pbi-tbl"><b>Measures</b><ul>${model.measureOrder.map(m => `<li class="ms">∑ ${esc(m)}</li>`).join("")}</ul></div>`;
    h += `</div><div class="pbi-rels">${model.rels.map(x => `<div>${esc(x.from.table)}[${esc(x.from.col)}] <b>*──1</b> ${esc(x.to.table)}[${esc(x.to.col)}]</div>`).join("") || "لا توجد علاقات"}</div></details>`;
    h += `</div>`;
    container.innerHTML = h;
  };
  CW.runDax = function (code, setup, test, container, onDone) {
    let r;
    try { r = CW.daxExec(code, setup, test); }
    catch (e) { return onDone([{ kind: "err", text: e.message }]); }
    if (r.model) CW.renderDaxModel(container, r);
    else if (r.steps && CW.renderMTable) CW.renderMTable(container, r);
    onDone(r.shown, r.graded);
  };

  CW.dax = { parse, tokenize, build, display, DDate };
})(typeof window !== "undefined" ? window : globalThis);
