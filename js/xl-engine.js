// محرك صيغ Excel للتعليم: يحلل الصيغ ويحسبها بنفس قواعد Excel
// (المراجع النسبية والمطلقة، والنطاقات، والأوراق، والمصفوفات الديناميكية التي "تنسكب"، ورموز الأخطاء)
// يعمل في المتصفح وفي Node (لأداة التحقق tools/verify-xl.js)
(function (root) {
  const CW = root.CW = root.CW || {};

  // ---------- القيم ----------
  class XlError { constructor(code) { this.code = code; } toString() { return this.code; } }
  const E = c => new XlError(c);
  const isErr = v => v instanceof XlError;
  const NA = () => E("#N/A"), VALUE = () => E("#VALUE!"), DIV0 = () => E("#DIV/0!"), REF = () => E("#REF!"), NAME = () => E("#NAME?"), NUM = () => E("#NUM!"), CALC = () => E("#CALC!");
  class Arr { constructor(rows) { this.rows = rows; } get h() { return this.rows.length; } get w() { return this.rows[0] ? this.rows[0].length : 0; } }
  class Range { constructor(sheet, r1, c1, r2, c2) { Object.assign(this, { sheet, r1: Math.min(r1, r2), c1: Math.min(c1, c2), r2: Math.max(r1, r2), c2: Math.max(c1, c2) }); } get h() { return this.r2 - this.r1 + 1; } get w() { return this.c2 - this.c1 + 1; } }
  class Fn { constructor(name, f) { this.name = name; this.f = f; } }   // دالة كقيمة (SUM في GROUPBY مثلاً)

  // ---------- العناوين ----------
  const colNum = s => s.toUpperCase().split("").reduce((n, ch) => n * 26 + ch.charCodeAt(0) - 64, 0);
  const colName = n => { let s = ""; while (n > 0) { const m = (n - 1) % 26; s = String.fromCharCode(65 + m) + s; n = Math.floor((n - 1) / 26); } return s; };
  const addr = (r, c) => colName(c) + r;
  const parseAddr = a => { const m = /^\$?([A-Za-z]{1,3})\$?(\d+)$/.exec(a); return m ? { r: +m[2], c: colNum(m[1]) } : null; };

  // ---------- التواريخ: الرقم التسلسلي كما في Excel (1 = 1900-01-01) ----------
  const EPOCH = Date.UTC(1899, 11, 30);
  const toSerial = (y, m, d) => Math.round((Date.UTC(y, m - 1, d) - EPOCH) / 86400000);
  const fromSerial = n => { const d = new Date(EPOCH + Math.floor(n) * 86400000); return { y: d.getUTCFullYear(), m: d.getUTCMonth() + 1, d: d.getUTCDate(), wd: d.getUTCDay() }; };
  const TODAY = toSerial(2024, 7, 1);   // "اليوم" ثابت في المحاكي لتبقى النتائج قابلة للتكرار

  // ---------- التحليل اللفظي ----------
  function tokenize(src) {
    const t = [];
    let i = 0;
    const re = {
      ws: /^\s+/,
      num: /^(\d+\.?\d*(?:[eE][+-]?\d+)?|\.\d+(?:[eE][+-]?\d+)?)/,
      str: /^"((?:[^"]|"")*)"/,
      // مرجع بورقة: Sheet!A1 أو 'My sheet'!A1:B2 أو نطاق أعمدة A:A
      ref: /^((?:'[^']+'|[A-Za-z_][\w.]*)!)?(\$?[A-Za-z]{1,3}\$?\d+(?::\$?[A-Za-z]{1,3}\$?\d+)?|\$?[A-Za-z]{1,3}:\$?[A-Za-z]{1,3}(?![\w(]))(#?)/,
      err: /^#(N\/A|DIV\/0!|VALUE!|REF!|NAME\?|NUM!|NULL!|SPILL!|CALC!)/,
      name: /^[A-Za-z_][\w.]*/,
      op: /^(<=|>=|<>|[-+*/^&=<>%(),;{}:@])/
    };
    while (i < src.length) {
      const s = src.slice(i);
      let m;
      if ((m = re.ws.exec(s))) { i += m[0].length; continue; }
      if ((m = re.str.exec(s))) { t.push({ k: "str", v: m[1].replace(/""/g, '"') }); i += m[0].length; continue; }
      if ((m = re.err.exec(s))) { t.push({ k: "err", v: m[0] }); i += m[0].length; continue; }
      // مرجع لا يتبعه قوس (حتى لا تُعامل دالة مثل LOG10( كمرجع خلية)
      if ((m = re.ref.exec(s)) && s[m[0].length] !== "(") {
        const sheet = m[1] ? m[1].slice(0, -1).replace(/^'|'$/g, "") : null;
        t.push({ k: "ref", sheet, ref: m[2], spill: m[3] === "#" });
        i += m[0].length; continue;
      }
      if ((m = re.num.exec(s))) { t.push({ k: "num", v: parseFloat(m[0]) }); i += m[0].length; continue; }
      if ((m = re.name.exec(s))) { t.push({ k: "name", v: m[0] }); i += m[0].length; continue; }
      if ((m = re.op.exec(s))) { t.push({ k: "op", v: m[0] }); i += m[0].length; continue; }
      throw new Error(`رمز غير متوقع في الصيغة: ${s[0]}`);
    }
    return t;
  }

  // ---------- التحليل النحوي (أسبقية Excel) ----------
  function parse(src) {
    const t = tokenize(src);
    let p = 0;
    const peek = () => t[p], next = () => t[p++];
    const isOp = (v) => t[p] && t[p].k === "op" && t[p].v === v;
    const expect = v => { if (!isOp(v)) throw new Error(`متوقع "${v}" في الصيغة`); p++; };
    const cmp = ["=", "<>", "<", ">", "<=", ">="];
    function expr() { return comparison(); }
    function comparison() { let l = concat(); while (t[p] && t[p].k === "op" && cmp.includes(t[p].v)) { const op = next().v; l = { k: "bin", op, l, r: concat() }; } return l; }
    function concat() { let l = additive(); while (isOp("&")) { next(); l = { k: "bin", op: "&", l, r: additive() }; } return l; }
    function additive() { let l = mult(); while (isOp("+") || isOp("-")) { const op = next().v; l = { k: "bin", op, l, r: mult() }; } return l; }
    function mult() { let l = power(); while (isOp("*") || isOp("/")) { const op = next().v; l = { k: "bin", op, l, r: power() }; } return l; }
    function power() { let l = unary(); while (isOp("^")) { next(); l = { k: "bin", op: "^", l, r: unary() }; } return l; }
    function unary() {
      if (isOp("-")) { next(); return { k: "neg", e: unary() }; }
      if (isOp("+")) { next(); return unary(); }
      return percent();
    }
    function percent() { let e = primary(); while (isOp("%")) { next(); e = { k: "pct", e }; } return e; }
    function primary() {
      const tk = next();
      if (!tk) throw new Error("الصيغة ناقصة");
      if (tk.k === "num") return { k: "num", v: tk.v };
      if (tk.k === "str") return { k: "str", v: tk.v };
      if (tk.k === "err") return { k: "errlit", v: tk.v };
      if (tk.k === "ref") return { k: "ref", sheet: tk.sheet, ref: tk.ref, spill: tk.spill };
      if (tk.k === "op" && tk.v === "(") { const e = expr(); expect(")"); return e; }
      if (tk.k === "op" && tk.v === "{") {
        const rows = [[]];
        while (!isOp("}")) {
          rows[rows.length - 1].push(unary());
          if (isOp(",")) next(); else if (isOp(";")) { next(); rows.push([]); }
        }
        next();
        return { k: "arr", rows };
      }
      if (tk.k === "name") {
        const name = tk.v.toUpperCase();
        if (isOp("(")) {
          next();
          const args = [];
          if (!isOp(")")) { do { if (isOp(",") || isOp(")")) args.push({ k: "missing" }); else args.push(expr()); } while (isOp(",") && next()); }
          expect(")");
          return { k: "call", name: name.replace(/^_XLFN\./, ""), args };
        }
        if (name === "TRUE" || name === "FALSE") return { k: "bool", v: name === "TRUE" };
        return { k: "name", v: tk.v };
      }
      throw new Error(`رمز غير متوقع: ${tk.v}`);
    }
    const e = expr();
    if (p < t.length) throw new Error(`رمز زائد في الصيغة: ${t[p].v || t[p].ref}`);
    return e;
  }

  // ---------- التحويلات ----------
  function num(v) {
    if (isErr(v)) return v;
    if (typeof v === "number") return v;
    if (typeof v === "boolean") return v ? 1 : 0;
    if (v === null || v === undefined || v === "") return 0;
    if (typeof v === "string") { const s = v.trim().replace(/,/g, ""); if (/^[-+]?(\d+\.?\d*|\.\d+)(e[-+]?\d+)?%?$/i.test(s)) return parseFloat(s) / (s.endsWith("%") ? 100 : 1); const d = parseDate(s); return d !== null ? d : VALUE(); }
    return VALUE();
  }
  function str(v) {
    if (isErr(v)) return v;
    if (v === null || v === undefined) return "";
    if (typeof v === "boolean") return v ? "TRUE" : "FALSE";
    if (typeof v === "number") return fmtGeneral(v);
    return String(v);
  }
  function bool(v) {
    if (isErr(v)) return v;
    if (typeof v === "boolean") return v;
    if (typeof v === "number") return v !== 0;
    if (v === null || v === undefined) return false;
    const s = String(v).toUpperCase();
    if (s === "TRUE") return true;
    if (s === "FALSE") return false;
    return VALUE();
  }
  function parseDate(s) {
    let m = /^(\d{4})-(\d{1,2})-(\d{1,2})$/.exec(s);
    if (m) return toSerial(+m[1], +m[2], +m[3]);
    m = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/.exec(s);   // dd/mm/yyyy
    if (m) return toSerial(+m[3], +m[2], +m[1]);
    return null;
  }
  function fmtGeneral(n) {
    if (!isFinite(n)) return "#NUM!";
    if (Number.isInteger(n) && Math.abs(n) < 1e15) return String(n);
    const r = parseFloat(n.toPrecision(10));
    return String(r);
  }

  // ---------- الدفتر والأوراق ----------
  class Workbook {
    constructor() { this.sheets = {}; this.order = []; this.charts = []; this.inputs = []; }
    sheet(name) {
      const key = Object.keys(this.sheets).find(k => k.toLowerCase() === String(name).toLowerCase());
      if (key) return this.sheets[key];
      const s = { name, cells: new Map(), maxR: 0, maxC: 0 };
      this.sheets[name] = s; this.order.push(name);
      return s;
    }
    set(sheetName, r, c, input) {
      const s = this.sheet(sheetName);
      const cell = { r, c, input, fmt: null };
      if (typeof input === "string" && input.startsWith("=") && input.length > 1) {
        cell.src = input.slice(1);
        try { cell.ast = parse(cell.src); } catch (e) { cell.parseError = e.message; }
      } else cell.value = literal(input, cell);
      s.cells.set(addr(r, c), cell);
      s.maxR = Math.max(s.maxR, r); s.maxC = Math.max(s.maxC, c);
      return cell;
    }
  }
  function literal(input, cell) {
    if (input === null || input === undefined) return null;
    if (typeof input !== "string") return input;
    const s = input.trim();
    if (s === "") return null;
    if (/^(TRUE|FALSE)$/i.test(s)) return s.toUpperCase() === "TRUE";
    if (/^[-+]?(\d+\.?\d*|\.\d+)(e[-+]?\d+)?$/i.test(s)) return parseFloat(s);
    if (/^[-+]?(\d+\.?\d*|\.\d+)%$/.test(s)) { cell.fmt = "percent"; return parseFloat(s) / 100; }
    const d = parseDate(s);
    if (d !== null) { cell.fmt = "date"; return d; }
    if (/^'/.test(s)) return s.slice(1);
    return s;
  }

  // ---------- الحساب ----------
  function Calc(wb) {
    const computing = new Set();
    const spillOwner = new Map();   // "Sheet!A1" ← الخلية التي انسكبت فيها
    const done = new Set();

    function evalCell(sheet, cell) {
      if (!cell.src) return;
      const key = sheet.name + "!" + addr(cell.r, cell.c);
      if (done.has(key)) return;
      if (computing.has(key)) { cell.value = E("#REF!"); cell.circular = true; return; }
      computing.add(key);
      let v;
      if (cell.parseError) v = E("#NAME?");
      else {
        try { v = evaluate(cell.ast, { sheet, r: cell.r, c: cell.c }); }
        catch (e) { if (e instanceof XlError) v = e; else { v = E("#VALUE!"); cell.jsError = e.message; } }
      }
      if (v instanceof Range) v = rangeToValue(v);
      if (v instanceof Fn) v = CALC();
      if (v instanceof Arr) {
        if (v.h === 1 && v.w === 1) { cell.value = v.rows[0][0]; }
        else {
          // الانسكاب: هل الخلايا المجاورة فارغة؟
          let blocked = false;
          for (let i = 0; i < v.h && !blocked; i++) for (let j = 0; j < v.w; j++) {
            if (i === 0 && j === 0) continue;
            const a = addr(cell.r + i, cell.c + j), other = sheet.cells.get(a);
            if ((other && (other.src || other.value !== null && other.value !== undefined)) || spillOwner.has(sheet.name + "!" + a)) { blocked = true; break; }
          }
          if (blocked) cell.value = E("#SPILL!");
          else {
            cell.value = v.rows[0][0];
            cell.spill = v;
            for (let i = 0; i < v.h; i++) for (let j = 0; j < v.w; j++) if (i || j) spillOwner.set(sheet.name + "!" + addr(cell.r + i, cell.c + j), { cell, i, j });
            sheet.maxR = Math.max(sheet.maxR, cell.r + v.h - 1); sheet.maxC = Math.max(sheet.maxC, cell.c + v.w - 1);
          }
        }
      } else cell.value = v === undefined ? null : v;
      if (cell.value === null && !cell.spill) cell.value = 0;   // صيغة تشير لخلية فارغة تعرض 0 كما في Excel
      if (!cell.fmt) cell.fmt = fmtOf(cell.ast, { sheet });
      computing.delete(key);
      done.add(key);
    }

    function cellValue(sheet, r, c) {
      const cell = sheet.cells.get(addr(r, c));
      if (cell) { evalCell(sheet, cell); return cell.value === undefined ? null : cell.value; }
      // ربما الخلية جزء من انسكاب لم يُحسب بعد: نحسب كل الصيغ التي قبلها في الورقة
      const sk = sheet.name + "!" + addr(r, c);
      if (!spillOwner.has(sk)) for (const other of sheet.cells.values()) { if (other.src && other.r <= r && other.c <= c) { evalCell(sheet, other); if (spillOwner.has(sk)) break; } }
      const sp = spillOwner.get(sk);
      return sp ? sp.cell.spill.rows[sp.i][sp.j] : null;
    }
    function cellFmt(sheet, r, c) {
      const cell = sheet.cells.get(addr(r, c));
      if (cell) { evalCell(sheet, cell); return cell.fmt; }
      const sp = spillOwner.get(sheet.name + "!" + addr(r, c));
      return sp ? sp.cell.fmt : null;
    }

    function resolveRef(node, ctx) {
      const sheet = node.sheet ? wb.sheets[Object.keys(wb.sheets).find(k => k.toLowerCase() === node.sheet.toLowerCase())] : ctx.sheet;
      if (!sheet) throw REF();
      const parts = node.ref.split(":");
      if (/^\$?[A-Za-z]+$/.test(parts[0])) {   // A:A
        const c1 = colNum(parts[0].replace("$", "")), c2 = colNum(parts[1].replace("$", ""));
        for (const cell of [...sheet.cells.values()]) if (cell.src) evalCell(sheet, cell);
        return new Range(sheet, 1, c1, Math.max(1, sheet.maxR), c2);
      }
      const a = parseAddr(parts[0]), b = parts[1] ? parseAddr(parts[1]) : a;
      if (node.spill) {
        cellValue(sheet, a.r, a.c);
        const cell = sheet.cells.get(addr(a.r, a.c));
        if (!cell || !cell.spill) throw REF();   // # لا يصح إلا على خلية منسكبة
        return new Range(sheet, a.r, a.c, a.r + cell.spill.h - 1, a.c + cell.spill.w - 1);
      }
      return new Range(sheet, a.r, a.c, b.r, b.c);
    }
    function rangeToArr(rg) {
      const rows = [];
      for (let r = rg.r1; r <= rg.r2; r++) { const row = []; for (let c = rg.c1; c <= rg.c2; c++) row.push(cellValue(rg.sheet, r, c)); rows.push(row); }
      return new Arr(rows);
    }
    function rangeToValue(rg) { return rg.h === 1 && rg.w === 1 ? cellValue(rg.sheet, rg.r1, rg.c1) : rangeToArr(rg); }

    // قيمة عادية أو مصفوفة (للعمليات عنصراً بعنصر)
    function val(node, ctx) {
      const v = evaluate(node, ctx);
      if (v instanceof Range) return rangeToValue(v);
      return v;
    }

    function elementwise(a, b, f) {
      if (!(a instanceof Arr) && !(b instanceof Arr)) return f(a, b);
      const A = a instanceof Arr ? a : new Arr([[a]]), B = b instanceof Arr ? b : new Arr([[b]]);
      const h = Math.max(A.h, B.h), w = Math.max(A.w, B.w);
      const pick = (M, i, j) => { const ii = M.h === 1 ? 0 : i, jj = M.w === 1 ? 0 : j; return ii < M.h && jj < M.w ? M.rows[ii][jj] : NA(); };
      const rows = [];
      for (let i = 0; i < h; i++) { const row = []; for (let j = 0; j < w; j++) row.push(f(pick(A, i, j), pick(B, i, j))); rows.push(row); }
      return new Arr(rows);
    }
    const map1 = (a, f) => a instanceof Arr ? new Arr(a.rows.map(r => r.map(f))) : f(a);

    function compare(a, b) {
      // ترتيب Excel: أرقام < نصوص < منطقية، والنص بلا حساسية لحالة الأحرف
      const rank = v => v === null ? -1 : typeof v === "number" ? 0 : typeof v === "string" ? 1 : 2;
      if (a === null) a = typeof b === "string" ? "" : typeof b === "boolean" ? false : 0;
      if (b === null) b = typeof a === "string" ? "" : typeof a === "boolean" ? false : 0;
      if (rank(a) !== rank(b)) return rank(a) - rank(b);
      if (typeof a === "string") { const x = a.toLowerCase(), y = b.toLowerCase(); return x < y ? -1 : x > y ? 1 : 0; }
      return a < b ? -1 : a > b ? 1 : 0;
    }

    function binop(op, a, b) {
      if (isErr(a)) return a;
      if (isErr(b)) return b;
      if (op === "&") { return str(a) + str(b); }
      if (["=", "<>", "<", ">", "<=", ">="].includes(op)) {
        const c = compare(a, b);
        return { "=": c === 0, "<>": c !== 0, "<": c < 0, ">": c > 0, "<=": c <= 0, ">=": c >= 0 }[op];
      }
      const x = num(a), y = num(b);
      if (isErr(x)) return x;
      if (isErr(y)) return y;
      switch (op) {
        case "+": return x + y;
        case "-": return x - y;
        case "*": return x * y;
        case "/": return y === 0 ? DIV0() : x / y;
        case "^": { const r = Math.pow(x, y); return isFinite(r) ? r : NUM(); }
      }
    }

    function evaluate(node, ctx) {
      switch (node.k) {
        case "num": case "str": case "bool": return node.v;
        case "errlit": return E(node.v);
        case "missing": return null;
        case "ref": return resolveRef(node, ctx);
        case "arr": return new Arr(node.rows.map(r => r.map(e => val(e, ctx))));
        case "neg": return map1(val(node.e, ctx), v => { const n = num(v); return isErr(n) ? n : -n; });
        case "pct": return map1(val(node.e, ctx), v => { const n = num(v); return isErr(n) ? n : n / 100; });
        case "bin": return elementwise(val(node.l, ctx), val(node.r, ctx), (a, b) => binop(node.op, a, b));
        case "name": {
          const upper = node.v.toUpperCase();
          if (ctx.lets && Object.prototype.hasOwnProperty.call(ctx.lets, upper)) return ctx.lets[upper];
          if (AGG[upper]) return new Fn(upper, AGG[upper]);
          throw NAME();
        }
        case "call": {
          const f = FUNCS[node.name];
          if (!f) throw NAME();
          return f(node.args, ctx, api);
        }
      }
      throw VALUE();
    }

    // واجهة للدوال
    const api = {
      evaluate, val, num, str, bool, compare, elementwise, map1, rangeToArr, cellValue, cellFmt, wb,
      // كل القيم المسطحة من الوسائط (للمجاميع): النطاقات تتجاهل النصوص والمنطقية، والقيم المباشرة تُحوَّل
      flat(args, ctx, { keepText = false } = {}) {
        const out = [];
        for (const a of args) {
          if (a.k === "missing") continue;
          const v = evaluate(a, ctx);
          if (v instanceof Range || v instanceof Arr) {
            const arr = v instanceof Range ? rangeToArr(v) : v;
            for (const row of arr.rows) for (const x of row) {
              if (isErr(x)) throw x;
              if (typeof x === "number" || (keepText && x !== null)) out.push(x);
            }
          } else {
            if (isErr(v)) throw v;
            if (keepText) { if (v !== null) out.push(v); }
            else { const n = num(v); if (isErr(n)) throw n; out.push(n); }
          }
        }
        return out;
      },
      arr(node, ctx) { const v = evaluate(node, ctx); return v instanceof Range ? rangeToArr(v) : v instanceof Arr ? v : new Arr([[v]]); },
      range(node, ctx) { const v = evaluate(node, ctx); if (!(v instanceof Range)) throw VALUE(); return v; }
    };

    function fmtOf(node, ctx) {
      if (!node) return null;
      switch (node.k) {
        case "ref": { try { const rg = resolveRef(node, ctx); return cellFmt(rg.sheet, rg.r1, rg.c1); } catch (e) { return null; } }
        case "call": {
          if (["DATE", "TODAY", "EDATE", "EOMONTH", "WORKDAY", "DATEVALUE"].includes(node.name)) return "date";
          if (["MIN", "MAX", "IF", "IFERROR", "IFNA", "INDEX", "SORT", "SORTBY", "FILTER", "UNIQUE", "TAKE", "DROP", "MINIFS", "MAXIFS", "LARGE", "SMALL"].includes(node.name)) {
            const a = node.name === "IF" ? node.args[1] : node.args[0];
            return fmtOf(a, ctx);
          }
          if (node.name === "XLOOKUP") return fmtOf(node.args[2], ctx);
          if (node.name === "VLOOKUP" && node.args[1] && node.args[1].k === "ref" && node.args[2] && node.args[2].k === "num") {
            try { const rg = resolveRef(node.args[1], ctx); return cellFmt(rg.sheet, rg.r1, rg.c1 + node.args[2].v - 1); } catch (e) { return null; }
          }
          return null;
        }
        case "bin": {
          if (node.op === "+" || node.op === "-") {
            const l = fmtOf(node.l, ctx), r = fmtOf(node.r, ctx);
            if (l === "date" && r !== "date") return "date";
            if (node.op === "+" && r === "date" && l !== "date") return "date";
          }
          return null;
        }
        case "pct": return "percent";
        default: return null;
      }
    }

    return {
      run() {
        for (const name of wb.order) for (const cell of [...wb.sheets[name].cells.values()]) evalCell(wb.sheets[name], cell);
      },
      cellValue, cellFmt, spillOwner, evaluate, api,
      rangeToArr
    };
  }

  // ---------- الدوال ----------
  const FUNCS = {};
  const AGG = {};   // دوال تُمرر كقيم: SUM و AVERAGE... في GROUPBY و PIVOTBY
  const reg = (names, f) => names.split(" ").forEach(n => { FUNCS[n] = f; });
  const scalar = (names, f) => reg(names, (args, ctx, x) => {
    // الوسائط الاختيارية المحذوفة تصل كـ null (مثل خلية فارغة)
    const vals = args.map(a => a.k === "missing" ? null : x.val(a, ctx)).concat(Array(Math.max(0, 6 - args.length)).fill(null));
    // تطبيق الدالة على المصفوفات عنصراً بعنصر (السلوك الحديث في Excel)
    const arrIdx = vals.findIndex(v => v instanceof Arr);
    if (arrIdx < 0) return f(...vals);
    const A = vals[arrIdx];
    return new Arr(A.rows.map((row, i) => row.map((_, j) => f(...vals.map(v => v instanceof Arr ? (v.rows[v.h === 1 ? 0 : i] || [])[v.w === 1 ? 0 : j] ?? null : v)))));
  });
  const guard = f => (...a) => { const e = a.find(isErr); return e || f(...a); };
  const N = v => { const n = num(v); if (isErr(n)) throw n; return n; };

  // رياضية وإحصائية
  const aggs = {
    SUM: v => v.reduce((s, x) => s + x, 0),
    AVERAGE: v => v.length ? v.reduce((s, x) => s + x, 0) / v.length : DIV0(),
    MIN: v => v.length ? Math.min(...v) : 0,
    MAX: v => v.length ? Math.max(...v) : 0,
    COUNT: v => v.length,
    PRODUCT: v => v.reduce((s, x) => s * x, 1),
    MEDIAN: v => { if (!v.length) return NUM(); const s = [...v].sort((a, b) => a - b), m = s.length >> 1; return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2; },
    "STDEV.S": v => v.length < 2 ? DIV0() : Math.sqrt(v.reduce((s, x) => s + (x - aggs.AVERAGE(v)) ** 2, 0) / (v.length - 1)),
    "STDEV.P": v => v.length < 1 ? DIV0() : Math.sqrt(v.reduce((s, x) => s + (x - aggs.AVERAGE(v)) ** 2, 0) / v.length),
    "VAR.S": v => v.length < 2 ? DIV0() : v.reduce((s, x) => s + (x - aggs.AVERAGE(v)) ** 2, 0) / (v.length - 1),
    "VAR.P": v => v.length < 1 ? DIV0() : v.reduce((s, x) => s + (x - aggs.AVERAGE(v)) ** 2, 0) / v.length
  };
  aggs.STDEV = aggs["STDEV.S"]; aggs.VAR = aggs["VAR.S"];
  Object.entries(aggs).forEach(([name, f]) => {
    FUNCS[name] = (args, ctx, x) => f(x.flat(args, ctx));
    AGG[name] = vals => f(vals.filter(v => typeof v === "number"));
  });
  AGG.COUNTA = vals => vals.filter(v => v !== null && v !== "").length;
  FUNCS.COUNTA = (args, ctx, x) => x.flat(args, ctx, { keepText: true }).filter(v => v !== "").length;
  FUNCS.COUNTBLANK = (args, ctx, x) => x.arr(args[0], ctx).rows.flat().filter(v => v === null || v === "").length;
  FUNCS["MODE.SNGL"] = FUNCS.MODE = (args, ctx, x) => {
    const v = x.flat(args, ctx), cnt = new Map();
    v.forEach(n => cnt.set(n, (cnt.get(n) || 0) + 1));
    let best = null, bc = 1;
    for (const n of v) if (cnt.get(n) > bc) { best = n; bc = cnt.get(n); }
    return best === null ? NA() : best;
  };
  FUNCS.LARGE = (args, ctx, x) => { const v = x.flat([args[0]], ctx).sort((a, b) => b - a), k = N(x.val(args[1], ctx)); return k >= 1 && k <= v.length ? v[k - 1] : NUM(); };
  FUNCS.SMALL = (args, ctx, x) => { const v = x.flat([args[0]], ctx).sort((a, b) => a - b), k = N(x.val(args[1], ctx)); return k >= 1 && k <= v.length ? v[k - 1] : NUM(); };
  FUNCS["RANK.EQ"] = FUNCS.RANK = (args, ctx, x) => {
    const n = N(x.val(args[0], ctx)), v = x.flat([args[1]], ctx), asc = args[2] ? N(x.val(args[2], ctx)) : 0;
    if (!v.includes(n)) return NA();
    return 1 + v.filter(y => asc ? y < n : y > n).length;
  };
  FUNCS["PERCENTILE.INC"] = FUNCS.PERCENTILE = (args, ctx, x) => {
    const v = x.flat([args[0]], ctx).sort((a, b) => a - b), k = N(x.val(args[1], ctx));
    const pos = (v.length - 1) * k, lo = Math.floor(pos);
    return v[lo] + (v[Math.min(lo + 1, v.length - 1)] - v[lo]) * (pos - lo);
  };
  FUNCS.QUARTILE = FUNCS["QUARTILE.INC"] = (args, ctx, x) => FUNCS.PERCENTILE([args[0], { k: "num", v: N(x.val(args[1], ctx)) / 4 }], ctx, x);
  FUNCS.SUMPRODUCT = (args, ctx, x) => {
    const arrs = args.map(a => x.arr(a, ctx));
    const h = arrs[0].h, w = arrs[0].w;
    if (arrs.some(a => a.h !== h || a.w !== w)) return VALUE();
    let s = 0;
    for (let i = 0; i < h; i++) for (let j = 0; j < w; j++) s += arrs.reduce((p, a) => { const v = a.rows[i][j]; if (isErr(v)) throw v; return p * (typeof v === "number" ? v : typeof v === "boolean" ? +v : 0); }, 1);
    return s;
  };
  const roundTo = (n, d, mode) => { const f = Math.pow(10, d), v = n * f; const r = mode === "up" ? Math.sign(v) * Math.ceil(Math.abs(v) - 1e-9) : mode === "down" ? Math.sign(v) * Math.floor(Math.abs(v) + 1e-9) : Math.sign(v) * Math.round(Math.abs(v) + 1e-9); return r / f; };
  scalar("ROUND", guard((n, d) => roundTo(N(n), d === null ? 0 : N(d))));
  scalar("ROUNDUP", guard((n, d) => roundTo(N(n), d === null ? 0 : N(d), "up")));
  scalar("ROUNDDOWN", guard((n, d) => roundTo(N(n), d === null ? 0 : N(d), "down")));
  scalar("INT", guard(n => Math.floor(N(n))));
  scalar("TRUNC", guard(n => Math.trunc(N(n))));
  scalar("ABS", guard(n => Math.abs(N(n))));
  scalar("SQRT", guard(n => N(n) < 0 ? NUM() : Math.sqrt(N(n))));
  scalar("POWER", guard((a, b) => Math.pow(N(a), N(b))));
  scalar("MOD", guard((a, b) => N(b) === 0 ? DIV0() : N(a) - N(b) * Math.floor(N(a) / N(b))));
  scalar("SIGN", guard(n => Math.sign(N(n))));
  scalar("CEILING CEILING.MATH", guard((n, s) => { const st = s === null ? 1 : N(s); return Math.ceil(N(n) / st) * st; }));
  scalar("FLOOR FLOOR.MATH", guard((n, s) => { const st = s === null ? 1 : N(s); return Math.floor(N(n) / st) * st; }));
  FUNCS.PI = () => Math.PI;
  FUNCS.SEQUENCE = (args, ctx, x) => {
    const rows = N(x.val(args[0], ctx)), cols = args[1] && args[1].k !== "missing" ? N(x.val(args[1], ctx)) : 1;
    const start = args[2] && args[2].k !== "missing" ? N(x.val(args[2], ctx)) : 1, step = args[3] && args[3].k !== "missing" ? N(x.val(args[3], ctx)) : 1;
    const out = [];
    for (let i = 0; i < rows; i++) { const row = []; for (let j = 0; j < cols; j++) row.push(start + (i * cols + j) * step); out.push(row); }
    return new Arr(out);
  };

  // المعايير: ">=100" و "<>Riyadh" و "R*" وأرقام
  function criterion(c) {
    if (typeof c === "number" || typeof c === "boolean") return v => v === c || (typeof v === "string" && num(v) === c && v.trim() !== "");
    const s = String(c ?? "");
    const m = /^(<=|>=|<>|<|>|=)?(.*)$/.exec(s);
    const op = m[1] || "=", rhs = m[2];
    const n = rhs !== "" && /^[-+]?(\d+\.?\d*|\.\d+)%?$/.test(rhs.trim()) ? num(rhs) : (parseDate(rhs) ?? null);
    if (n !== null && !isErr(n)) {
      return v => { if (typeof v !== "number") return op === "<>"; return { "=": v === n, "<>": v !== n, "<": v < n, ">": v > n, "<=": v <= n, ">=": v >= n }[op]; };
    }
    if (op === "=" || op === "<>") {
      if (rhs === "") return v => (op === "=") === (v === null || v === "");
      const re = new RegExp("^" + rhs.replace(/[.+^${}()|[\]\\]/g, "\\$&").replace(/~\*/g, "\u0001").replace(/~\?/g, "\u0002").replace(/\*/g, ".*").replace(/\?/g, ".").replace(/\u0001/g, "\\*").replace(/\u0002/g, "\\?") + "$", "i");
      return v => (typeof v === "string" && re.test(v)) === (op === "=");
    }
    return v => { if (typeof v !== "string") return false; const c2 = v.toLowerCase() < rhs.toLowerCase() ? -1 : v.toLowerCase() > rhs.toLowerCase() ? 1 : 0; return { "<": c2 < 0, ">": c2 > 0, "<=": c2 <= 0, ">=": c2 >= 0 }[op]; };
  }
  function ifsMask(pairs, ctx, x) {
    let mask = null, shape = null;
    for (let k = 0; k < pairs.length; k += 2) {
      const a = x.arr(pairs[k], ctx), crit = criterion(x.val(pairs[k + 1], ctx));
      if (shape && (a.h !== shape.h || a.w !== shape.w)) throw VALUE();
      shape = a;
      const m = a.rows.map(r => r.map(crit));
      mask = mask ? mask.map((r, i) => r.map((b, j) => b && m[i][j])) : m;
    }
    return mask;
  }
  FUNCS.COUNTIF = (args, ctx, x) => ifsMask(args, ctx, x).flat().filter(Boolean).length;
  FUNCS.COUNTIFS = FUNCS.COUNTIF;
  const sumIfs = (target, pairs, ctx, x, f) => {
    const mask = ifsMask(pairs, ctx, x), t = x.arr(target, ctx), vals = [];
    if (t.h !== mask.length || t.w !== mask[0].length) throw VALUE();
    mask.forEach((r, i) => r.forEach((b, j) => { if (b && typeof t.rows[i][j] === "number") vals.push(t.rows[i][j]); }));
    return f(vals);
  };
  FUNCS.SUMIF = (args, ctx, x) => sumIfs(args[2] && args[2].k !== "missing" ? args[2] : args[0], [args[0], args[1]], ctx, x, aggs.SUM);
  FUNCS.AVERAGEIF = (args, ctx, x) => sumIfs(args[2] && args[2].k !== "missing" ? args[2] : args[0], [args[0], args[1]], ctx, x, aggs.AVERAGE);
  FUNCS.SUMIFS = (args, ctx, x) => sumIfs(args[0], args.slice(1), ctx, x, aggs.SUM);
  FUNCS.AVERAGEIFS = (args, ctx, x) => sumIfs(args[0], args.slice(1), ctx, x, aggs.AVERAGE);
  FUNCS.MAXIFS = (args, ctx, x) => sumIfs(args[0], args.slice(1), ctx, x, aggs.MAX);
  FUNCS.MINIFS = (args, ctx, x) => sumIfs(args[0], args.slice(1), ctx, x, aggs.MIN);

  // منطقية
  FUNCS.IF = (args, ctx, x) => {
    const c = x.val(args[0], ctx);
    const pick = b => { const e = b ? args[1] : args[2]; return e === undefined ? b : e.k === "missing" ? 0 : x.val(e, ctx); };
    if (c instanceof Arr) {
      const t = args[1] ? x.val(args[1], ctx) : true, f = args[2] && args[2].k !== "missing" ? x.val(args[2], ctx) : args[2] ? 0 : false;
      return x.elementwise(x.elementwise(c, t, (a, b) => [a, b]), f, (ab, fv) => { const b = bool(ab[0]); return isErr(b) ? b : b ? ab[1] : fv; });
    }
    const b = bool(c);
    if (isErr(b)) return b;
    return pick(b);
  };
  FUNCS.IFS = (args, ctx, x) => { for (let k = 0; k < args.length; k += 2) { const b = bool(x.val(args[k], ctx)); if (isErr(b)) return b; if (b) return x.val(args[k + 1], ctx); } return NA(); };
  FUNCS.SWITCH = (args, ctx, x) => {
    const v = x.val(args[0], ctx);
    let k = 1;
    for (; k + 1 < args.length; k += 2) if (x.compare(v, x.val(args[k], ctx)) === 0) return x.val(args[k + 1], ctx);
    return k < args.length ? x.val(args[k], ctx) : NA();
  };
  const logicalAll = (args, ctx, x) => { const out = []; for (const a of args) { const v = x.val(a, ctx); (v instanceof Arr ? v.rows.flat() : [v]).forEach(y => { if (y === null || typeof y === "string") return; const b = bool(y); if (isErr(b)) throw b; out.push(b); }); } return out; };
  FUNCS.AND = (args, ctx, x) => logicalAll(args, ctx, x).every(Boolean);
  FUNCS.OR = (args, ctx, x) => logicalAll(args, ctx, x).some(Boolean);
  FUNCS.XOR = (args, ctx, x) => logicalAll(args, ctx, x).filter(Boolean).length % 2 === 1;
  scalar("NOT", v => { const b = bool(v); return isErr(b) ? b : !b; });
  FUNCS.TRUE = () => true; FUNCS.FALSE = () => false;
  FUNCS.IFERROR = (args, ctx, x) => { let v; try { v = x.val(args[0], ctx); } catch (e) { if (isErr(e)) v = e; else throw e; } return x.map1(v, y => isErr(y) ? x.val(args[1], ctx) : y); };
  FUNCS.IFNA = (args, ctx, x) => { let v; try { v = x.val(args[0], ctx); } catch (e) { if (isErr(e)) v = e; else throw e; } return x.map1(v, y => isErr(y) && y.code === "#N/A" ? x.val(args[1], ctx) : y); };
  scalar("ISBLANK", v => v === null);
  scalar("ISNUMBER", v => typeof v === "number");
  scalar("ISTEXT", v => typeof v === "string");
  scalar("ISERROR", v => isErr(v));
  scalar("ISNA", v => isErr(v) && v.code === "#N/A");
  FUNCS.NA = () => NA();
  FUNCS.LET = (args, ctx, x) => {
    const lets = Object.assign({}, ctx.lets || {});
    const c = Object.assign({}, ctx, { lets });
    for (let k = 0; k + 1 < args.length; k += 2) {
      if (args[k].k !== "name") throw NAME();
      let v = x.evaluate(args[k + 1], c);
      lets[args[k].v.toUpperCase()] = v;
    }
    return x.evaluate(args[args.length - 1], c);
  };

  // البحث
  function findIndex(lookup, list, mode, x) {
    // mode: 0 مطابقة تامة (مع * و ? للنصوص)، -1 أصغر أقرب، 1 أكبر أقرب
    if (mode === 0) {
      if (typeof lookup === "string" && /[*?]/.test(lookup)) { const c = criterion(lookup); return list.findIndex(v => c(v)); }
      return list.findIndex(v => v !== null && x.compare(v, lookup) === 0);
    }
    let best = -1;
    list.forEach((v, i) => {
      if (v === null || typeof v !== typeof lookup) return;
      const c = x.compare(v, lookup);
      if (c === 0) { if (best < 0 || x.compare(list[best], lookup) !== 0) best = i; return; }
      if (mode < 0 && c < 0 && (best < 0 || x.compare(v, list[best]) > 0)) best = i;
      if (mode > 0 && c > 0 && (best < 0 || x.compare(v, list[best]) < 0)) best = i;
    });
    return best;
  }
  const vec = a => a.h === 1 ? a.rows[0] : a.rows.map(r => r[0]);
  FUNCS.VLOOKUP = (args, ctx, x) => {
    const tbl = x.arr(args[1], ctx), col = N(x.val(args[2], ctx)), approx = args[3] && args[3].k !== "missing" ? bool(x.val(args[3], ctx)) : true;
    if (col < 1 || col > tbl.w) return REF();
    return x.map1(x.val(args[0], ctx), lk => {
      if (isErr(lk)) return lk;
      const first = tbl.rows.map(r => r[0]);
      const i = approx ? findIndex(lk, first, -1, x) : findIndex(lk, first, 0, x);
      return i < 0 ? NA() : tbl.rows[i][col - 1];
    });
  };
  FUNCS.HLOOKUP = (args, ctx, x) => {
    const tbl = x.arr(args[1], ctx), row = N(x.val(args[2], ctx)), approx = args[3] && args[3].k !== "missing" ? bool(x.val(args[3], ctx)) : true;
    const lk = x.val(args[0], ctx);
    const i = approx ? findIndex(lk, tbl.rows[0], -1, x) : findIndex(lk, tbl.rows[0], 0, x);
    return i < 0 ? NA() : tbl.rows[row - 1][i];
  };
  FUNCS.XLOOKUP = (args, ctx, x) => {
    const look = x.arr(args[1], ctx), ret = x.arr(args[2], ctx);
    const notFound = args[3] && args[3].k !== "missing" ? args[3] : null;
    const mode = args[4] && args[4].k !== "missing" ? N(x.val(args[4], ctx)) : 0;
    const search = args[5] && args[5].k !== "missing" ? N(x.val(args[5], ctx)) : 1;
    const list = vec(look), vertical = look.h > 1 || look.w === 1;
    const one = lk => {
      if (isErr(lk)) return lk;
      let idxs = list.map((_, i) => i);
      if (search < 0) idxs = idxs.reverse();
      const ordered = idxs.map(i => list[i]);
      let k = mode === 2 ? findIndex(lk, ordered, 0, x) : findIndex(lk, ordered, mode === -1 ? -1 : mode === 1 ? 1 : 0, x);
      if (mode === 0 && typeof lk === "string" && /[*?]/.test(lk)) k = ordered.findIndex(v => v !== null && x.compare(v, lk) === 0);
      if (k < 0) return notFound ? x.val(notFound, ctx) : NA();
      const i = idxs[k];
      if (vertical) return ret.w === 1 ? ret.rows[i][0] : new Arr([ret.rows[i]]);
      return ret.h === 1 ? ret.rows[0][i] : new Arr(ret.rows.map(r => [r[i]]));
    };
    const lk = x.val(args[0], ctx);
    if (lk instanceof Arr) return new Arr(lk.rows.map(r => r.map(v => { const y = one(v); return y instanceof Arr ? y.rows[0][0] : y; })));
    return one(lk);
  };
  FUNCS.MATCH = (args, ctx, x) => {
    const list = vec(x.arr(args[1], ctx)), type = args[2] && args[2].k !== "missing" ? N(x.val(args[2], ctx)) : 1;
    return x.map1(x.val(args[0], ctx), lk => { const i = findIndex(lk, list, type === 0 ? 0 : type > 0 ? -1 : 1, x); return i < 0 ? NA() : i + 1; });
  };
  FUNCS.XMATCH = (args, ctx, x) => {
    const list = vec(x.arr(args[1], ctx)), mode = args[2] && args[2].k !== "missing" ? N(x.val(args[2], ctx)) : 0;
    return x.map1(x.val(args[0], ctx), lk => { const i = findIndex(lk, list, mode, x); return i < 0 ? NA() : i + 1; });
  };
  FUNCS.INDEX = (args, ctx, x) => {
    const a = x.arr(args[0], ctx);
    let r = args[1] && args[1].k !== "missing" ? N(x.val(args[1], ctx)) : 0, c = args[2] && args[2].k !== "missing" ? N(x.val(args[2], ctx)) : 0;
    if (a.h === 1 && !args[2]) { c = r; r = 1; }
    if (r > a.h || c > a.w || r < 0 || c < 0) return REF();
    if (r === 0) return new Arr(a.rows.map(row => [row[c - 1]]));
    if (c === 0) return a.w === 1 ? a.rows[r - 1][0] : new Arr([a.rows[r - 1]]);
    return a.rows[r - 1][c - 1];
  };
  FUNCS.CHOOSE = (args, ctx, x) => { const i = N(x.val(args[0], ctx)); return i >= 1 && i < args.length ? x.val(args[i], ctx) : VALUE(); };
  FUNCS.ROW = (args, ctx, x) => args.length && args[0].k !== "missing" ? x.range(args[0], ctx).r1 : ctx.r;
  FUNCS.COLUMN = (args, ctx, x) => args.length && args[0].k !== "missing" ? x.range(args[0], ctx).c1 : ctx.c;
  FUNCS.ROWS = (args, ctx, x) => x.arr(args[0], ctx).h;
  FUNCS.COLUMNS = (args, ctx, x) => x.arr(args[0], ctx).w;

  // النصوص
  const S = v => { const s = str(v); if (isErr(s)) throw s; return s; };
  scalar("LEFT", guard((t, n) => S(t).slice(0, n === null ? 1 : N(n))));
  scalar("RIGHT", guard((t, n) => { const s = S(t), k = n === null ? 1 : N(n); return k === 0 ? "" : s.slice(-k); }));
  scalar("MID", guard((t, a, n) => S(t).substr(N(a) - 1, N(n))));
  scalar("LEN", guard(t => S(t).length));
  scalar("TRIM", guard(t => S(t).trim().replace(/ {2,}/g, " ")));
  scalar("UPPER", guard(t => S(t).toUpperCase()));
  scalar("LOWER", guard(t => S(t).toLowerCase()));
  scalar("PROPER", guard(t => S(t).toLowerCase().replace(/(^|[^a-z\u0600-\u06ff])([a-z])/g, (m, a, b) => a + b.toUpperCase())));
  scalar("EXACT", guard((a, b) => S(a) === S(b)));
  scalar("REPT", guard((t, n) => S(t).repeat(Math.max(0, N(n)))));
  scalar("SUBSTITUTE", guard((t, a, b, n) => { const s = S(t), from = S(a), to = S(b); if (n === null) return s.split(from).join(to); let k = 0; return s.replace(new RegExp(from.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g"), m => ++k === N(n) ? to : m); }));
  scalar("REPLACE", guard((t, a, n, nw) => { const s = S(t); return s.slice(0, N(a) - 1) + S(nw) + s.slice(N(a) - 1 + N(n)); }));
  scalar("FIND", guard((f, t, st) => { const i = S(t).indexOf(S(f), (st === null ? 1 : N(st)) - 1); return i < 0 ? VALUE() : i + 1; }));
  scalar("SEARCH", guard((f, t, st) => { const i = S(t).toLowerCase().indexOf(S(f).toLowerCase(), (st === null ? 1 : N(st)) - 1); return i < 0 ? VALUE() : i + 1; }));
  scalar("VALUE", guard(t => { const n = num(t); return n; }));
  scalar("TEXTBEFORE", guard((t, d, n) => { const s = S(t), parts = s.split(S(d)), k = n === null ? 1 : N(n); return parts.length <= k ? NA() : parts.slice(0, k).join(S(d)); }));
  scalar("TEXTAFTER", guard((t, d, n) => { const s = S(t), parts = s.split(S(d)), k = n === null ? 1 : N(n); return parts.length <= k ? NA() : parts.slice(k).join(S(d)); }));
  FUNCS.TEXTSPLIT = (args, ctx, x) => {
    const s = S(x.val(args[0], ctx)), cd = args[1] && args[1].k !== "missing" ? S(x.val(args[1], ctx)) : null, rd = args[2] && args[2].k !== "missing" ? S(x.val(args[2], ctx)) : null;
    const rows = (rd ? s.split(rd) : [s]).map(r => cd ? r.split(cd) : [r]);
    const w = Math.max(...rows.map(r => r.length));
    return new Arr(rows.map(r => r.concat(Array(w - r.length).fill(NA()))));
  };
  FUNCS.CONCAT = FUNCS.CONCATENATE = (args, ctx, x) => x.flat(args, ctx, { keepText: true }).map(S).join("");
  FUNCS.TEXTJOIN = (args, ctx, x) => {
    const d = S(x.val(args[0], ctx)), ignore = bool(x.val(args[1], ctx));
    const vals = [];
    for (const a of args.slice(2)) { const v = x.val(a, ctx); (v instanceof Arr ? v.rows.flat() : [v]).forEach(y => { if (isErr(y)) throw y; if (!(ignore && (y === null || y === ""))) vals.push(y === null ? "" : S(y)); }); }
    return vals.join(d);
  };
  scalar("TEXT", guard((v, f) => formatNumber(v, S(f))));

  // التواريخ
  scalar("DATE", guard((y, m, d) => { const dt = new Date(Date.UTC(N(y), N(m) - 1, N(d))); return Math.round((dt - EPOCH) / 86400000); }));
  FUNCS.TODAY = () => TODAY;
  FUNCS.NOW = () => TODAY;
  const D = v => { const n = num(v); if (isErr(n)) throw n; return n; };
  scalar("YEAR", guard(v => fromSerial(D(v)).y));
  scalar("MONTH", guard(v => fromSerial(D(v)).m));
  scalar("DAY", guard(v => fromSerial(D(v)).d));
  scalar("WEEKDAY", guard((v, t) => { const wd = fromSerial(D(v)).wd, type = t === null ? 1 : N(t); return type === 2 ? ((wd + 6) % 7) + 1 : type === 3 ? (wd + 6) % 7 : wd + 1; }));
  scalar("EDATE", guard((v, m) => { const d = fromSerial(D(v)), dt = new Date(Date.UTC(d.y, d.m - 1 + N(m), 1)); const last = new Date(Date.UTC(dt.getUTCFullYear(), dt.getUTCMonth() + 1, 0)).getUTCDate(); return toSerial(dt.getUTCFullYear(), dt.getUTCMonth() + 1, Math.min(d.d, last)); }));
  scalar("EOMONTH", guard((v, m) => { const d = fromSerial(D(v)), dt = new Date(Date.UTC(d.y, d.m + N(m), 0)); return Math.round((dt - EPOCH) / 86400000); }));
  scalar("DAYS", guard((a, b) => D(a) - D(b)));
  scalar("DATEVALUE", guard(s => { const d = parseDate(S(s)); return d === null ? VALUE() : d; }));
  scalar("DATEDIF", guard((a, b, u) => {
    const s = fromSerial(D(a)), e = fromSerial(D(b)), unit = S(u).toUpperCase();
    if (D(a) > D(b)) return NUM();
    let months = (e.y - s.y) * 12 + (e.m - s.m) - (e.d < s.d ? 1 : 0);
    if (unit === "D") return D(b) - D(a);
    if (unit === "M") return months;
    if (unit === "Y") return Math.floor(months / 12);
    if (unit === "YM") return months % 12;
    return VALUE();
  }));
  FUNCS.NETWORKDAYS = (args, ctx, x) => {
    const a = D(x.val(args[0], ctx)), b = D(x.val(args[1], ctx));
    const hol = args[2] ? x.flat([args[2]], ctx) : [];
    // عطلة نهاية الأسبوع في Excel الافتراضية: السبت والأحد (NETWORKDAYS.INTL لغيرها)
    let n = 0;
    for (let d = Math.min(a, b); d <= Math.max(a, b); d++) { const wd = fromSerial(d).wd; if (wd !== 0 && wd !== 6 && !hol.includes(d)) n++; }
    return a <= b ? n : -n;
  };
  FUNCS["NETWORKDAYS.INTL"] = (args, ctx, x) => {
    const a = D(x.val(args[0], ctx)), b = D(x.val(args[1], ctx)), w = args[2] ? N(x.val(args[2], ctx)) : 1;
    const off = { 1: [6, 0], 2: [0, 1], 7: [5, 6] }[w] || [6, 0];   // 7 = الجمعة والسبت
    let n = 0;
    for (let d = Math.min(a, b); d <= Math.max(a, b); d++) if (!off.includes(fromSerial(d).wd)) n++;
    return n;
  };

  // المصفوفات الديناميكية
  FUNCS.UNIQUE = (args, ctx, x) => {
    const a = x.arr(args[0], ctx), seen = new Map();
    const byCol = args[1] && args[1].k !== "missing" && bool(x.val(args[1], ctx));
    const once = args[2] && args[2].k !== "missing" && bool(x.val(args[2], ctx));
    const items = byCol ? a.rows[0].map((_, j) => a.rows.map(r => r[j])) : a.rows;
    items.forEach(it => { const k = JSON.stringify(it.map(v => typeof v === "string" ? v.toLowerCase() : v)); seen.set(k, seen.has(k) ? { it: seen.get(k).it, n: seen.get(k).n + 1 } : { it, n: 1 }); });
    const out = [...seen.values()].filter(o => !once || o.n === 1).map(o => o.it);
    if (!out.length) return CALC();
    return byCol ? new Arr(out[0].map((_, i) => out.map(c => c[i]))) : new Arr(out);
  };
  FUNCS.FILTER = (args, ctx, x) => {
    const a = x.arr(args[0], ctx), inc = x.arr(args[1], ctx);
    let rows;
    if (inc.w === 1 && inc.h === a.h) rows = a.rows.filter((_, i) => { const b = bool(inc.rows[i][0]); if (isErr(b)) throw b; return b; });
    else if (inc.h === 1 && inc.w === a.w) { const keep = inc.rows[0].map(v => bool(v)); rows = a.rows.map(r => r.filter((_, j) => keep[j])); if (!rows[0].length) rows = []; }
    else return VALUE();
    if (!rows.length) return args[2] && args[2].k !== "missing" ? x.val(args[2], ctx) : CALC();
    return new Arr(rows);
  };
  const sortRows = (rows, keys, x) => rows.map((r, i) => ({ r, i })).sort((p, q) => { for (const { get, dir } of keys) { const c = x.compare(get(p), get(q)); if (c) return c * dir; } return p.i - q.i; }).map(o => o.r);
  FUNCS.SORT = (args, ctx, x) => {
    const a = x.arr(args[0], ctx), idx = args[1] && args[1].k !== "missing" ? N(x.val(args[1], ctx)) : 1, dir = args[2] && args[2].k !== "missing" ? N(x.val(args[2], ctx)) : 1;
    return new Arr(sortRows(a.rows.map((r, i) => ({ row: r, i })), [{ get: o => o.r.row[idx - 1], dir }], x).map(o => o.row));
  };
  FUNCS.SORTBY = (args, ctx, x) => {
    const a = x.arr(args[0], ctx), keys = [];
    for (let k = 1; k < args.length; k += 2) { const by = vec(x.arr(args[k], ctx)), dir = args[k + 1] && args[k + 1].k !== "missing" ? N(x.val(args[k + 1], ctx)) : 1; keys.push({ get: o => by[o.r.i], dir }); }
    return new Arr(sortRows(a.rows.map((row, i) => ({ row, i })), keys, x).map(o => o.row));
  };
  FUNCS.TAKE = (args, ctx, x) => {
    const a = x.arr(args[0], ctx), r = args[1] && args[1].k !== "missing" ? N(x.val(args[1], ctx)) : a.h, c = args[2] && args[2].k !== "missing" ? N(x.val(args[2], ctx)) : a.w;
    const rows = r >= 0 ? a.rows.slice(0, r) : a.rows.slice(r);
    return new Arr(rows.map(row => c >= 0 ? row.slice(0, c) : row.slice(c)));
  };
  FUNCS.DROP = (args, ctx, x) => {
    const a = x.arr(args[0], ctx), r = args[1] && args[1].k !== "missing" ? N(x.val(args[1], ctx)) : 0, c = args[2] && args[2].k !== "missing" ? N(x.val(args[2], ctx)) : 0;
    const rows = r >= 0 ? a.rows.slice(r) : a.rows.slice(0, r);
    if (!rows.length) return CALC();
    return new Arr(rows.map(row => c >= 0 ? row.slice(c) : row.slice(0, c)));
  };
  FUNCS.CHOOSECOLS = (args, ctx, x) => { const a = x.arr(args[0], ctx), cols = args.slice(1).map(n => N(x.val(n, ctx))); return new Arr(a.rows.map(r => cols.map(c => r[c > 0 ? c - 1 : a.w + c]))); };
  FUNCS.CHOOSEROWS = (args, ctx, x) => { const a = x.arr(args[0], ctx), rs = args.slice(1).map(n => N(x.val(n, ctx))); return new Arr(rs.map(r => a.rows[r > 0 ? r - 1 : a.h + r])); };
  FUNCS.VSTACK = (args, ctx, x) => { const arrs = args.map(a => x.arr(a, ctx)), w = Math.max(...arrs.map(a => a.w)); return new Arr(arrs.flatMap(a => a.rows.map(r => r.concat(Array(w - r.length).fill(NA()))))); };
  FUNCS.HSTACK = (args, ctx, x) => { const arrs = args.map(a => x.arr(a, ctx)), h = Math.max(...arrs.map(a => a.h)); return new Arr(Array.from({ length: h }, (_, i) => arrs.flatMap(a => a.rows[i] || Array(a.w).fill(NA())))); };
  FUNCS.TRANSPOSE = (args, ctx, x) => { const a = x.arr(args[0], ctx); return new Arr(a.rows[0].map((_, j) => a.rows.map(r => r[j]))); };

  // التجميع: GROUPBY و PIVOTBY (دوال Excel 365 الحديثة التي تعمل عمل الجدول المحوري بصيغة)
  function aggFn(node, ctx, x) {
    const f = x.evaluate(node, ctx);
    if (!(f instanceof Fn)) throw VALUE();
    return f.f;
  }
  const keyOf = v => typeof v === "string" ? v.toLowerCase() : v;
  function groupKeys(vals, x, dir) {
    const seen = new Map();
    vals.forEach(v => { const k = keyOf(v); if (!seen.has(k)) seen.set(k, v); });
    return [...seen.values()].sort((a, b) => x.compare(a, b) * dir);
  }
  FUNCS.GROUPBY = (args, ctx, x) => {
    const keys = vec(x.arr(args[0], ctx)), vals = x.arr(args[1], ctx), f = aggFn(args[2], ctx, x);
    const headers = args[3] && args[3].k !== "missing" ? N(x.val(args[3], ctx)) : 0;
    const total = args[4] && args[4].k !== "missing" ? N(x.val(args[4], ctx)) : 1;
    const sort = args[5] && args[5].k !== "missing" ? N(x.val(args[5], ctx)) : 1;
    let body = keys.slice(headers ? 1 : 0), data = vals.rows.slice(headers ? 1 : 0);
    const groups = groupKeys(body.filter(v => v !== null), x, Math.sign(sort) || 1).map(g => {
      const rows = data.filter((_, i) => body[i] !== null && keyOf(body[i]) === keyOf(g));
      return [g, ...vals.rows[0].map((_, j) => f(rows.map(r => r[j])))];
    });
    if (Math.abs(sort) === 2) groups.sort((a, b) => x.compare(a[1], b[1]) * Math.sign(sort));
    const out = [];
    if (headers >= 2) out.push(["", ...vals.rows[0]]);
    out.push(...groups);
    if (total) out.push(["Total", ...vals.rows[0].map((_, j) => f(data.filter((_, i) => body[i] !== null).map(r => r[j])))]);
    return new Arr(out);
  };
  FUNCS.PIVOTBY = (args, ctx, x) => {
    const rk = vec(x.arr(args[0], ctx)), ck = vec(x.arr(args[1], ctx)), vals = vec(x.arr(args[2], ctx)), f = aggFn(args[3], ctx, x);
    const rows = groupKeys(rk.filter(v => v !== null), x, 1), cols = groupKeys(ck.filter(v => v !== null), x, 1);
    const cell = (r, c) => { const v = vals.filter((_, i) => (r === undefined || keyOf(rk[i]) === keyOf(r)) && (c === undefined || keyOf(ck[i]) === keyOf(c))); return v.length ? f(v) : ""; };
    const out = [["", ...cols, "Total"]];
    rows.forEach(r => out.push([r, ...cols.map(c => cell(r, c)), cell(r, undefined)]));
    out.push(["Total", ...cols.map(c => cell(undefined, c)), cell(undefined, undefined)]);
    return new Arr(out);
  };
  FUNCS.PERCENTOF = (args, ctx, x) => { const a = aggs.SUM(x.flat([args[0]], ctx)), b = aggs.SUM(x.flat([args[1]], ctx)); return b === 0 ? DIV0() : a / b; };
  AGG.PERCENTOF = null;

  // ---------- التنسيق ----------
  function formatNumber(v, f) {
    if (typeof v === "string") return v;
    const n = num(v);
    if (isErr(n)) return n;
    const lf = f.toLowerCase();
    if (/[ymd]/.test(lf) && !/[#0]/.test(lf)) {
      const d = fromSerial(n), mon = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      return f.replace(/yyyy|yy|mmmm|mmm|mm|m|dddd|ddd|dd|d/gi, t => {
        const k = t.toLowerCase();
        return { yyyy: d.y, yy: String(d.y).slice(2), mmmm: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][d.m - 1], mmm: mon[d.m - 1], mm: String(d.m).padStart(2, "0"), m: d.m, dddd: days[d.wd], ddd: days[d.wd].slice(0, 3), dd: String(d.d).padStart(2, "0"), d: d.d }[k];
      });
    }
    const pct = f.includes("%"), val = pct ? n * 100 : n;
    const m = /([#0,]*)(?:\.([0#]+))?/.exec(f.replace(/[^#0,.]/g, ""));
    const dec = m && m[2] ? m[2].length : 0, comma = f.includes(",");
    let s = Math.abs(val).toFixed(dec);
    if (comma) { const [i, d] = s.split("."); s = i.replace(/\B(?=(\d{3})+(?!\d))/g, ",") + (d ? "." + d : ""); }
    const prefix = f.match(/^[^#0,.%]*/)[0].replace(/"/g, ""), suffix = f.replace(/^[^#0,.]*[#0,.]+/, "").replace(/%/, "").replace(/"/g, "");
    return (val < 0 ? "-" : "") + prefix + s + (pct ? "%" : "") + suffix;
  }
  function display(v, fmt) {
    if (v === null || v === undefined) return "";
    if (isErr(v)) return v.code;
    if (typeof v === "boolean") return v ? "TRUE" : "FALSE";
    if (typeof v === "number") {
      if (fmt === "date") return formatNumber(v, "yyyy-mm-dd");
      if (fmt === "percent") return fmtGeneral(Math.round(v * 10000) / 100) + "%";
      return fmtGeneral(v);
    }
    return String(v);
  }

  // ---------- نص الدفتر: الجداول بـ | والخلايا بـ A1: والتعبئة بـ D2:D6: ----------
  // == Sheet       ورقة جديدة
  // @B3            موضع بداية الجدول التالي
  // | a | b |      صف بيانات (يُكتب من الموضع الحالي ويتقدم صفاً)
  // D2: =B2*C2     خلية
  // D2:D6: =B2*C2  تعبئة: الصيغة تُنسخ مع تعديل المراجع النسبية كما في Excel
  // chart: column A1:B6 "العنوان"   رسم بياني (يمثل Insert ▸ Chart)
  // # تعليق
  function shiftFormula(src, dr, dc) {
    let out = "", i = 0;
    const re = /("(?:[^"]|"")*")|((?:'[^']+'|[A-Za-z_][\w.]*)!)?(\$?)([A-Za-z]{1,3})(\$?)(\d+)(?![\w(])/g;
    return src.replace(re, (m, s, sheet, ca, col, ra, row) => {
      if (s) return s;
      const c = ca ? col : colName(colNum(col) + dc), r = ra ? row : String(+row + dr);
      return (sheet || "") + ca + c + ra + r;
    });
  }
  function loadText(wb, text, defaultSheet) {
    let sheet = defaultSheet || wb.order[0] || "Sheet1", anchor = { r: 1, c: 1 }, tableRow = 0, inFile = false;
    const errors = [];
    text.split("\n").forEach((raw, ln) => {
      const line = raw.replace(/\r$/, "");
      const t = line.trim();
      // أقسام الملفات (== file: x.csv) لـ Power Query وحده، لا تُكتب في الأوراق
      if (/^==\s*(file|table|relationship)\s*:/i.test(t)) { inFile = true; return; }
      if (/^==/.test(t)) inFile = false;
      if (inFile || !t || t.startsWith("#")) return;
      let m;
      if ((m = /^==\s*(.+?)\s*$/.exec(t))) { sheet = m[1]; wb.sheet(sheet); anchor = { r: 1, c: 1 }; tableRow = 0; return; }
      if ((m = /^@\s*\$?([A-Za-z]{1,3})\$?(\d+)\s*$/.exec(t))) { anchor = { r: +m[2], c: colNum(m[1]) }; tableRow = 0; return; }
      if (t.startsWith("|")) {
        const cells = t.replace(/^\|/, "").replace(/\|\s*$/, "").split("|").map(s => s.trim());
        if (cells.every(c => /^:?-{2,}:?$/.test(c))) return;   // سطر فاصل بأسلوب Markdown
        cells.forEach((v, j) => {
          if (v === "") return;
          const cell = wb.set(sheet, anchor.r + tableRow, anchor.c + j, v);
          if (v.startsWith("=")) wb.inputs.push({ sheet, r: anchor.r + tableRow, c: anchor.c + j, cell, line: ln + 1 });
        });
        tableRow++;
        return;
      }
      if ((m = /^chart\s*:\s*(\w+)\s+((?:'[^']+'|[\w.]+)!)?(\$?[A-Za-z]{1,3}\$?\d+:\$?[A-Za-z]{1,3}\$?\d+)\s*(?:"([^"]*)")?\s*$/i.exec(t))) {
        wb.charts.push({ type: m[1].toLowerCase(), sheet: m[2] ? m[2].slice(0, -1).replace(/^'|'$/g, "") : sheet, range: m[3], title: m[4] || "" });
        return;
      }
      if ((m = /^((?:'[^']+'|[\w.]+)!)?(\$?[A-Za-z]{1,3}\$?\d+)(?::(\$?[A-Za-z]{1,3}\$?\d+))?\s*:\s?(.*)$/.exec(t))) {
        const sh = m[1] ? m[1].slice(0, -1).replace(/^'|'$/g, "") : sheet;
        const a = parseAddr(m[2]), b = m[3] ? parseAddr(m[3]) : a, input = m[4];
        for (let r = Math.min(a.r, b.r); r <= Math.max(a.r, b.r); r++) for (let c = Math.min(a.c, b.c); c <= Math.max(a.c, b.c); c++) {
          const v = input.startsWith("=") ? "=" + shiftFormula(input.slice(1), r - a.r, c - a.c) : input;
          const cell = wb.set(sh, r, c, v);
          wb.inputs.push({ sheet: sh, r, c, cell, line: ln + 1 });
        }
        return;
      }
      errors.push(`السطر ${ln + 1}: لم أفهم "${t}". اكتب الخلية هكذا: D2: =B2*C2`);
    });
    return errors;
  }

  // ---------- الواجهة العامة ----------
  function run(setupText, codeText) {
    const wb = new Workbook();
    const errs = [];
    if (setupText) errs.push(...loadText(wb, setupText));
    wb.inputs = [];
    errs.push(...loadText(wb, codeText || ""));
    if (!wb.order.length) wb.sheet("Sheet1");
    const calc = Calc(wb);
    calc.run();
    const sheetOf = name => wb.sheets[Object.keys(wb.sheets).find(k => k.toLowerCase() === String(name).toLowerCase())];
    const parseRef = (ref, fallback) => {
      const m = /^(?:(.+)!)?(.+)$/.exec(ref);
      const sh = sheetOf(m[1] ? m[1].replace(/^'|'$/g, "") : fallback || wb.order[0]);
      if (!sh) throw new Error(`لا توجد ورقة ${m[1]}`);
      const [a, b] = m[2].split(":").map(parseAddr);
      return { sh, a, b: b || a };
    };
    const book = {
      wb, calc, errors: errs,
      value(ref, sheet) { const { sh, a } = parseRef(ref, sheet); return calc.cellValue(sh, a.r, a.c); },
      text(ref, sheet) { const { sh, a } = parseRef(ref, sheet); return display(calc.cellValue(sh, a.r, a.c), calc.cellFmt(sh, a.r, a.c)); },
      values(ref, sheet) {
        const { sh, a, b } = parseRef(ref, sheet), rows = [];
        for (let r = a.r; r <= b.r; r++) { const row = []; for (let c = a.c; c <= b.c; c++) row.push(display(calc.cellValue(sh, r, c), calc.cellFmt(sh, r, c))); rows.push(row); }
        return rows;
      },
      formula(ref, sheet) { const { sh, a } = parseRef(ref, sheet); const cell = sh.cells.get(addr(a.r, a.c)); return cell && cell.src ? "=" + cell.src : cell ? String(cell.input) : ""; },
      spillRange(ref, sheet) { const { sh, a } = parseRef(ref, sheet); const cell = sh.cells.get(addr(a.r, a.c)); return cell && cell.spill ? `${ref.replace(/^.*!/, "")}:${addr(a.r + cell.spill.h - 1, a.c + cell.spill.w - 1)}` : ref.replace(/^.*!/, ""); },
      // مخرجات افتراضية: قيمة كل خلية كتبها الطالب، والانسكاب كجدول
      defaultLines() {
        const lines = [];
        errs.forEach(e => lines.push({ kind: "err", text: e }));
        const seen = new Set();
        for (const inp of wb.inputs) {
          const sh = sheetOf(inp.sheet), cell = inp.cell, ref = (inp.sheet !== wb.order[0] ? inp.sheet + "!" : "") + addr(inp.r, inp.c);
          if (seen.has(ref) || !cell.src) continue;
          seen.add(ref);
          if (cell.parseError) { lines.push({ kind: "err", text: `${ref}: ${cell.parseError}` }); continue; }
          if (cell.spill) {
            lines.push({ kind: "log", text: `${ref}# =` });
            for (let i = 0; i < cell.spill.h; i++) lines.push({ kind: "log", text: "  " + cell.spill.rows[i].map(v => display(v, cell.fmt)).join(" | ") });
          } else lines.push({ kind: isErr(cell.value) && !cell.expectErr ? "log" : "log", text: `${ref} = ${display(cell.value, cell.fmt)}` });
        }
        return lines;
      }
    };
    return book;
  }

  CW.xl = { run, parse, tokenize, display, colName, colNum, addr, parseAddr, isErr, XlError, FUNCS, toSerial, fromSerial, formatNumber, shiftFormula };
})(typeof window !== "undefined" ? window : globalThis);
