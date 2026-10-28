// مفسّر C# تعليمي (مجموعة فرعية) لمحاكي Unity، ومحلله النحوي يخدم أيضاً C++ في Unreal (الوضع cpp)
// يدعم: الأصناف والوراثة والواجهات والتعدادات، والحقول والخصائص والدوال والبنّاءات، والأنواع int و float (32 بت) و double،
// و if/for/foreach/while/do/switch، و yield return (المكررات والـ Coroutines)، والدوال المجهولة،
// و List و Dictionary والمصفوفات، والنصوص المحرفة $"..."، والتوجيهات #if
(function (root) {
  const CW = root.CW = root.CW || {};

  // خطأ "ترجمة" يوقف التشغيل كله، واستثناء C# يُطبع ويكمل (كما في Unity)
  class CSError extends Error {}
  class CSException extends Error { constructor(type, msg) { super(msg); this.type = type; } }
  const fail = (m, line) => { throw new CSError(line ? `${m} (السطر ${line})` : m); };
  const raise = (type, msg) => { throw new CSException(type, msg); };

  // ---------- التحليل اللفظي ----------
  const OPS = [">>=", "<<=", "??=", "...", "=>", "==", "!=", "<=", ">=", "&&", "||", "++", "--", "+=", "-=", "*=", "/=", "%=", "&=", "|=", "^=", "<<", "->", "::", "??", "?.",
    "+", "-", "*", "/", "%", "=", "<", ">", "!", "~", "&", "|", "^", "?", ":", ";", ",", ".", "(", ")", "[", "]", "{", "}", "#"];
  function preprocess(src, defines) {
    const stack = [];
    const evalCond = c => {
      const e = c.replace(/\/\/.*$/, "").replace(/[A-Za-z_]\w*/g, s => s === "true" || s === "false" ? s : defines.has(s) ? "true" : "false");
      if (!/^[\s()!&|truefals]*$/.test(e)) return false;
      try { return !!new Function("return (" + e + ")")(); } catch (x) { return false; }
    };
    return src.split("\n").map(l => {
      const m = /^\s*#\s*(if|elif|else|endif|region|endregion|define|undef|pragma|include|pragma)\b(.*)$/.exec(l);
      const active = stack.every(s => s.active);
      if (!m) return active ? l : "";
      const [, d, rest] = m;
      if (d === "if") { const v = active && evalCond(rest); stack.push({ active: v, taken: v, parent: active }); }
      else if (d === "elif") { const s = stack[stack.length - 1]; const v = !!s && !s.taken && s.parent && evalCond(rest); s.active = v; s.taken = s.taken || v; }
      else if (d === "else") { const s = stack[stack.length - 1]; s.active = !s.taken && s.parent; s.taken = true; }
      else if (d === "endif") stack.pop();
      else if (d === "define" && active) defines.add(rest.trim());
      return "";
    }).join("\n");
  }
  function lex(src, opts = {}) {
    src = preprocess(src, opts.defines || new Set());
    const toks = [];
    let i = 0, line = 1;
    const push = (k, v, extra) => toks.push(Object.assign({ k, v, line }, extra));
    const esc = c => ({ n: "\n", t: "\t", r: "\r", "0": "\0", "\\": "\\", '"': '"', "'": "'" })[c] ?? c;
    while (i < src.length) {
      const c = src[i];
      if (c === "\n") { line++; i++; continue; }
      if (/\s/.test(c)) { i++; continue; }
      if (src.startsWith("//", i)) { while (i < src.length && src[i] !== "\n") i++; continue; }
      if (src.startsWith("/*", i)) { const j = src.indexOf("*/", i + 2); const end = j < 0 ? src.length : j + 2; line += (src.slice(i, end).match(/\n/g) || []).length; i = end; continue; }
      // نص محرف $"... {expr:fmt} ..."
      if (src.startsWith('$"', i) || src.startsWith('$@"', i) || src.startsWith('@$"', i)) {
        i += src[i + 1] === '"' ? 2 : 3;
        const parts = [];
        let buf = "";
        while (i < src.length && src[i] !== '"') {
          if (src[i] === "\\") { buf += esc(src[i + 1]); i += 2; continue; }
          if (src.startsWith("{{", i)) { buf += "{"; i += 2; continue; }
          if (src.startsWith("}}", i)) { buf += "}"; i += 2; continue; }
          if (src[i] === "{") {
            if (buf) parts.push(buf); buf = "";
            let depth = 1, j = i + 1, inStr = false;
            while (j < src.length && depth) { const ch = src[j]; if (ch === '"') inStr = !inStr; else if (!inStr && ch === "{") depth++; else if (!inStr && ch === "}") depth--; j++; }
            const inner = src.slice(i + 1, j - 1);
            // التنسيق بعد ":" خارج الأقواس والنصوص والعامل الثلاثي (نكتفي بآخر ":" بعد آخر ")")
            const m = /^(.*?[^:?\s]?)\s*:\s*([A-Za-z0-9.#,%]+)$/.exec(inner);
            if (m && !/\?/.test(inner)) parts.push({ src: m[1], fmt: m[2] }); else parts.push({ src: inner, fmt: null });
            i = j; continue;
          }
          if (src[i] === "\n") line++;
          buf += src[i++];
        }
        if (buf) parts.push(buf);
        i++;
        push("istr", parts); continue;
      }
      if (src.startsWith('@"', i)) {
        let j = i + 2, s = "";
        while (j < src.length) { if (src[j] === '"') { if (src[j + 1] === '"') { s += '"'; j += 2; continue; } break; } if (src[j] === "\n") line++; s += src[j++]; }
        push("str", s); i = j + 1; continue;
      }
      if (c === '"') {
        let j = i + 1, s = "";
        while (j < src.length && src[j] !== '"') { if (src[j] === "\\") { s += esc(src[j + 1]); j += 2; } else if (src[j] === "\n") fail("error CS1010: Newline in constant", line); else s += src[j++]; }
        push("str", s); i = j + 1; continue;
      }
      if (c === "'") {
        let j = i + 1, s = "";
        if (src[j] === "\\") { s = esc(src[j + 1]); j += 2; } else s = src[j++];
        if (src[j] !== "'") fail("error CS1012: Too many characters in character literal", line);
        push("char", s); i = j + 1; continue;
      }
      let m;
      const rest = src.slice(i, i + 64);
      if ((m = /^(0[xX][0-9a-fA-F_]+|(?:\d[\d_]*)?\.\d[\d_]*(?:[eE][-+]?\d+)?|\d+\.(?=[fF])|\d[\d_]*(?:[eE][-+]?\d+)?)([fFdDmMuUlL]{0,2})/.exec(rest))) {
        const body = m[1].replace(/_/g, ""), suf = m[2].toLowerCase();
        let kind;
        if (suf.includes("f")) kind = "f";
        else if (suf.includes("d") || suf.includes("m")) kind = "d";
        else if (/[.eE]/.test(body) && !/^0x/i.test(body)) kind = "d";
        else kind = "i";
        const v = /^0x/i.test(body) ? parseInt(body, 16) : parseFloat(body);
        push("num", v, { nk: kind }); i += m[0].length; continue;
      }
      if ((m = /^@?[A-Za-z_]\w*/.exec(rest))) { push("id", m[0].replace(/^@/, "")); i += m[0].length; continue; }
      const op = OPS.find(o => src.startsWith(o, i));
      if (op) { push("op", op); i += op.length; continue; }
      fail(`error CS1056: Unexpected character '${c}'`, line);
    }
    push("eof", null);
    return toks;
  }

  // ---------- التحليل النحوي ----------
  const MODS = new Set(["public", "private", "protected", "internal", "static", "readonly", "const", "virtual", "override", "abstract", "sealed", "new", "partial", "async", "extern", "unsafe", "volatile", "event", "explicit", "implicit", "inline", "constexpr", "mutable", "FORCEINLINE"]);
  const PREDEF = new Set(["int", "float", "double", "bool", "string", "long", "byte", "short", "char", "uint", "object", "decimal", "void", "int32", "int64", "uint8", "uint32", "FString", "FName", "FText"]);
  const KEYWORDS = new Set(["if", "else", "for", "foreach", "while", "do", "switch", "case", "default", "return", "break", "continue", "new", "this", "base", "true", "false", "null", "class", "struct", "interface", "enum", "using", "namespace", "yield", "in", "is", "as", "out", "ref", "throw", "try", "catch", "finally", "typeof", "var", "nullptr", "Super", "operator"]);

  function parse(src, opts = {}) {
    const cpp = !!opts.cpp;
    const t = lex(src, opts);
    let p = 0;
    const at = (k, v) => t[p].k === k && (v === undefined || t[p].v === v);
    const isOp = v => t[p].k === "op" && t[p].v === v;
    const isId = v => t[p].k === "id" && t[p].v === v;
    const peek = (o = 1) => t[p + o] || t[t.length - 1];
    const next = () => t[p++];
    const line = () => t[p].line;
    const show = tk => tk.k === "eof" ? "end of file" : tk.k === "str" ? `"${tk.v}"` : String(tk.v);
    const expect = (v, code = "CS1002") => {
      if (!isOp(v)) fail(`error ${v === ";" ? "CS1002" : code}: ${v} expected (وُجد ${show(t[p])})`, t[p > 0 && v === ";" ? p - 1 : p].line);
      return next();
    };
    const ident = () => { if (!at("id")) fail(`error CS1001: Identifier expected (وُجد ${show(t[p])})`, line()); return next().v; };
    const sep = () => (isOp(".") || (cpp && (isOp("::") || isOp("->"))));

    // النوع: Name.Name<Args>[]? و * و & في C++
    function tryType() {
      const save = p;
      if (cpp) while (isId("const") || isId("class") || isId("struct") || isId("typename")) p++;
      if (!at("id") || (KEYWORDS.has(t[p].v) && t[p].v !== "var")) { p = save; return null; }
      let name = next().v;
      while (sep() && peek().k === "id") { p++; name += "." + next().v; }
      let args = [];
      if (isOp("<")) {
        const s2 = p;
        p++;
        const ok = (() => { for (;;) { const a = tryType(); if (!a) return false; args.push(a); if (isOp(",")) { p++; continue; } if (isOp(">")) { p++; return true; } return false; } })();
        if (!ok) { p = s2; args = []; if (true) { p = save; return null; } }
      }
      let nullable = false, array = 0;
      if (isOp("?") && !(peek().k === "id" && peek(2).k === "op" && [":", "."].includes(peek(2).v))) { /* T? */ if (peek().k === "id" || (peek().k === "op" && [")", ",", ">"].includes(peek().v))) { nullable = true; p++; } }
      while (isOp("[") && (peek().k === "op" && (peek().v === "]" || peek().v === ","))) { p++; while (isOp(",")) p++; expect("]"); array++; }
      if (cpp) while (isOp("*") || isOp("&") || isId("const")) p++;
      return { name: name.replace(/^(std|UnityEngine|System|System\.Collections\.Generic|System\.Collections|UnityEngine\.UI|TMPro)\./, ""), args, array, nullable };
    }
    // نظرة أمامية: هل < هنا بداية وسائط عامة (List<int>) وليست "أصغر من"؟
    function genericAhead() {
      if (!isOp("<")) return false;
      let depth = 0, j = p;
      for (; j < t.length; j++) {
        const tk = t[j];
        if (tk.k === "op" && tk.v === "<") depth++;
        else if (tk.k === "op" && tk.v === ">") { depth--; if (!depth) break; }
        else if (tk.k === "id" || (tk.k === "op" && [",", ".", "[", "]", "?", "*", "::"].includes(tk.v))) continue;
        else return false;
      }
      const after = t[j + 1];
      return !!after && after.k === "op" && ["(", ")", ";", ",", ".", "]", "{", ">", "::", "->"].includes(after.v);
    }

    // ----- التعبيرات -----
    const ASSIGN = new Set(["=", "+=", "-=", "*=", "/=", "%=", "&=", "|=", "^=", "??=", "<<=", ">>="]);
    function expr() { return assignE(); }
    function lambdaAhead() {
      if (at("id") && peek().k === "op" && peek().v === "=>") return true;
      if (!isOp("(")) return false;
      let depth = 0, j = p;
      for (; j < t.length; j++) { const tk = t[j]; if (tk.k === "op" && tk.v === "(") depth++; else if (tk.k === "op" && tk.v === ")") { depth--; if (!depth) break; } }
      return !!t[j + 1] && t[j + 1].k === "op" && t[j + 1].v === "=>";
    }
    function lambda() {
      const ln = line(), params = [];
      if (at("id")) params.push(next().v);
      else {
        expect("(");
        while (!isOp(")")) { const save = p; const ty = tryType(); if (ty && at("id")) params.push(next().v); else { p = save; params.push(ident()); } if (isOp(",")) p++; }
        expect(")");
      }
      expect("=>");
      if (isOp("{")) return { k: "lambda", params, body: block(), line: ln };
      return { k: "lambda", params, e: expr(), line: ln };
    }
    function assignE() {
      if (lambdaAhead()) return lambda();
      const l = ternE();
      if (t[p].k === "op" && ASSIGN.has(t[p].v)) {
        const ln = line();
        const op = next().v;
        if (!["id", "member", "index"].includes(l.k)) fail("error CS0131: The left-hand side of an assignment must be a variable, property or indexer", ln);
        return { k: "assign", op, target: l, e: assignE(), line: ln };
      }
      return l;
    }
    function ternE() {
      const c = coalE();
      if (isOp("?")) { const ln = line(); p++; const a = assignE(); expect(":"); const b = assignE(); return { k: "tern", c, a, b, line: ln }; }
      return c;
    }
    function coalE() { const l = binLevel(0); if (isOp("??")) { p++; return { k: "coalesce", l, r: coalE() }; } return l; }
    const LEVELS = [["||"], ["&&"], ["|"], ["^"], ["&"], ["==", "!="], ["<", ">", "<=", ">=", "is", "as"], ["<<"], ["+", "-"], ["*", "/", "%"]];
    function binLevel(i) {
      if (i >= LEVELS.length) return unary();
      let l = binLevel(i + 1);
      for (;;) {
        const tk = t[p];
        const op = tk.k === "op" ? tk.v : tk.k === "id" && (tk.v === "is" || tk.v === "as") ? tk.v : null;
        if (!op || !LEVELS[i].includes(op)) return l;
        const ln = tk.line;
        p++;
        if (op === "is") {
          let not = false;
          if (isId("not")) { p++; not = true; }
          if (isId("null")) { p++; l = { k: "isnull", e: l, not, line: ln }; continue; }
          const ty = tryType();
          const bind = at("id") ? next().v : null;
          l = { k: "is", e: l, type: ty, bind, not, line: ln };
          continue;
        }
        if (op === "as") { l = { k: "as", e: l, type: tryType(), line: ln }; continue; }
        const r = binLevel(i + 1);
        l = op === "||" ? { k: "or", l, r } : op === "&&" ? { k: "and", l, r } : { k: "bin", op, l, r, line: ln };
      }
    }
    function unary() {
      const ln = line();
      if (isOp("-") || isOp("+") || isOp("!") || isOp("~")) { const op = next().v; return { k: "unary", op, e: unary(), line: ln }; }
      if (isOp("++") || isOp("--")) { const op = next().v; return { k: "pre", op, target: unary(), line: ln }; }
      if (cpp && (isOp("*") || isOp("&"))) { p++; return unary(); }   // المؤشرات في C++: نتجاهل * و &
      if (isOp("(")) {
        // تحويل صريح: (int)x
        const save = p;
        p++;
        const ty = tryType();
        if (ty && isOp(")")) {
          const nx = peek();
          const startsOperand = nx.k === "id" || nx.k === "num" || nx.k === "str" || nx.k === "char" || nx.k === "istr" || (nx.k === "op" && ["(", "!", "~"].includes(nx.v));
          if ((PREDEF.has(ty.name) && !ty.args.length) || startsOperand) { p++; return { k: "cast", type: ty, e: unary(), line: ln }; }
        }
        p = save;
      }
      if (isId("await")) { p++; return unary(); }
      return postfix(primary());
    }
    function args() {
      const a = [];
      expect("(");
      while (!isOp(")")) {
        if (isId("out") || isId("ref") || isId("in")) {
          const kind = next().v;
          const save = p;
          const ty = tryType();
          if (ty && at("id") && kind === "out") a.push({ k: "outdecl", name: next().v, type: ty });
          else { p = save; a.push({ k: "out", target: expr() }); }
        } else {
          if (at("id") && peek().k === "op" && peek().v === ":" ) { p += 2; }   // وسيط مسمى name: value (نقبله بالترتيب)
          a.push(expr());
        }
        if (isOp(",")) p++; else break;
      }
      expect(")");
      return a;
    }
    function targsOpt() {
      if (!genericAhead()) return null;
      p++;
      const list = [];
      while (!isOp(">")) { list.push(tryType()); if (isOp(",")) p++; else break; }
      expect(">");
      return list;
    }
    function postfix(e) {
      for (;;) {
        const ln = line();
        if (sep() || isOp("?.")) {
          const cond = next().v === "?.";
          const name = ident();
          const targs = targsOpt();
          e = { k: "member", obj: e, name, cond, targs, line: ln };
        } else if (isOp("(")) e = { k: "call", f: e, args: args(), line: ln };
        else if (isOp("[")) { p++; const i = expr(); expect("]"); e = { k: "index", obj: e, i, line: ln }; }
        else if (isOp("++") || isOp("--")) { e = { k: "post", op: next().v, target: e, line: ln }; }
        else if (isOp("!") && peek().k === "op" && [".", ")", ";"].includes(peek().v)) p++;   // null-forgiving
        else return e;
      }
    }
    function initializer() {
      // { a, b } أو { Name = v, ... } أو { {k, v}, ... }
      expect("{");
      const items = [];
      while (!isOp("}")) {
        if (at("id") && peek().k === "op" && peek().v === "=") { const name = next().v; p++; items.push({ name, e: expr() }); }
        else if (isOp("{")) { p++; const k = expr(); expect(","); const v = expr(); expect("}"); items.push({ pair: [k, v] }); }
        else if (isOp("[")) { p++; const k = expr(); expect("]"); expect("="); items.push({ pair: [k, expr()] }); }
        else items.push({ e: expr() });
        if (isOp(",")) p++; else break;
      }
      expect("}");
      return items;
    }
    function primary() {
      const tk = t[p], ln = tk.line;
      if (tk.k === "num") { p++; return { k: "lit", v: tk.nk === "i" ? tk.v : tk.nk === "f" ? new Num(Math.fround(tk.v), "f") : new Num(tk.v, "d") }; }
      if (tk.k === "str") { p++; return { k: "lit", v: tk.v }; }
      if (tk.k === "char") { p++; return { k: "lit", v: new Chr(tk.v) }; }
      if (tk.k === "istr") { p++; return { k: "istr", parts: tk.v.map(x => typeof x === "string" ? x : { e: parse(x.src, Object.assign({}, opts, { expression: true })), fmt: x.fmt }), line: ln }; }
      if (tk.k === "op" && tk.v === "(") { p++; const e = expr(); expect(")"); return e; }
      if (tk.k === "op" && tk.v === "{") return { k: "arrlit", items: initializer().map(x => x.e), line: ln };
      if (tk.k === "op" && tk.v === "[" ) { // تعبير مجموعة C# 12: [1, 2, 3]
        p++; const items = []; while (!isOp("]")) { items.push(expr()); if (isOp(",")) p++; else break; } expect("]"); return { k: "arrlit", items, line: ln };
      }
      if (tk.k !== "id") fail(`error CS1525: Invalid expression term '${show(tk)}'`, ln);
      switch (tk.v) {
        case "true": p++; return { k: "lit", v: true };
        case "false": p++; return { k: "lit", v: false };
        case "null": case "nullptr": p++; return { k: "lit", v: null };
        case "this": p++; return { k: "this" };
        case "base": case "Super": p++; return { k: "base" };
        case "typeof": { p++; expect("("); const ty = tryType(); expect(")"); return { k: "typeof", type: ty }; }
        case "default": { p++; if (isOp("(")) { p++; const ty = tryType(); expect(")"); return { k: "default", type: ty }; } return { k: "lit", v: null }; }
        case "new": {
          p++;
          if (isOp("[")) { p++; expect("]"); return { k: "arrlit", items: initializer().map(x => x.e), line: ln }; }
          if (isOp("(")) { const a = args(); return { k: "new", type: null, args: a, init: isOp("{") ? initializer() : null, line: ln }; }
          const ty = tryType();
          if (!ty) fail("error CS1526: A new expression requires (), [], or {} after type", ln);
          if (ty.array) return { k: "arrlit", type: ty, items: initializer().map(x => x.e), line: ln };
          if (isOp("[")) {
            p++; const size = expr(); expect("]");
            if (isOp("{")) return { k: "arrlit", type: ty, items: initializer().map(x => x.e), line: ln };
            return { k: "newarr", type: ty, size, line: ln };
          }
          const a = isOp("(") ? args() : [];
          return { k: "new", type: ty, args: a, init: isOp("{") ? initializer() : null, line: ln };
        }
      }
      p++;
      const targs = targsOpt();
      return { k: "id", name: tk.v, targs, line: ln };
    }

    // ----- التعليمات -----
    let inIterator = false;
    function block() {
      expect("{");
      const body = [];
      while (!isOp("}")) { if (at("eof")) fail("error CS1513: } expected", line()); body.push(statement()); }
      p++;
      return { k: "block", body };
    }
    function declAhead() {
      const save = p;
      const ty = tryType();
      const ok = ty && at("id") && !KEYWORDS.has(t[p].v) && peek().k === "op" && ["=", ";", ",", "{", "("].includes(peek().v) && !(peek().v === "(" && !cpp);
      p = save;
      return !!ok;
    }
    function localDecl(konst) {
      const ln = line();
      const type = tryType();
      const decls = [];
      do {
        if (isOp(",")) p++;
        const name = ident();
        let init = null;
        if (isOp("=")) { p++; init = isOp("{") ? { k: "arrlit", type, items: initializer().map(x => x.e), line: ln } : expr(); }
        else if (cpp && isOp("{") ) { const it = initializer().map(x => x.e); init = { k: "new", type, args: it, line: ln }; }
        else if (cpp && isOp("(")) { init = { k: "new", type, args: args(), line: ln }; }
        decls.push({ name, init });
      } while (isOp(","));
      return { k: "local", type, decls, konst, line: ln };
    }
    function statement() {
      const ln = line();
      if (isOp("{")) return block();
      if (isOp(";")) { p++; return { k: "empty" }; }
      if (at("id")) {
        switch (t[p].v) {
          case "if": {
            p++; expect("("); const c = expr(); expect(")");
            const a = statement();
            let b = null;
            if (isId("else")) { p++; b = statement(); }
            return { k: "if", c, a, b, line: ln };
          }
          case "while": { p++; expect("("); const c = expr(); expect(")"); return { k: "while", c, body: statement(), line: ln }; }
          case "do": { p++; const body = statement(); if (!isId("while")) fail("error CS1003: Syntax error, 'while' expected", line()); p++; expect("("); const c = expr(); expect(")"); expect(";"); return { k: "do", c, body, line: ln }; }
          case "for": {
            p++; expect("(");
            if (cpp) {
              // for (AActor* A : Actors)
              const save = p;
              const ty = tryType();
              if (ty && at("id") && peek().k === "op" && peek().v === ":") {
                const name = next().v; p++;
                const iter = expr(); expect(")");
                return { k: "foreach", type: ty, name, iter, body: statement(), line: ln };
              }
              p = save;
            }
            let init = [];
            if (!isOp(";")) { if (isId("var") || declAhead()) init = [localDecl(false)]; else { do { if (isOp(",")) p++; init.push({ k: "expr", e: expr() }); } while (isOp(",")); } }
            expect(";");
            const c = isOp(";") ? null : expr();
            expect(";");
            const iter = [];
            while (!isOp(")")) { iter.push(expr()); if (isOp(",")) p++; else break; }
            expect(")");
            return { k: "for", init, c, iter, body: statement(), line: ln };
          }
          case "foreach": {
            p++; expect("(");
            const type = tryType();
            const name = ident();
            if (!isId("in")) fail("error CS1515: 'in' expected", line());
            p++;
            const iter = expr(); expect(")");
            return { k: "foreach", type, name, iter, body: statement(), line: ln };
          }
          case "switch": {
            p++; expect("("); const subject = expr(); expect(")"); expect("{");
            const sections = [];
            while (!isOp("}")) {
              const labels = [];
              while (isId("case") || isId("default")) {
                if (next().v === "default") labels.push(null);
                else labels.push(expr());
                expect(":");
              }
              if (!labels.length) fail("error CS1525: case expected", line());
              const body = [];
              while (!isOp("}") && !isId("case") && !isId("default")) body.push(statement());
              sections.push({ labels, body });
            }
            p++;
            return { k: "switch", subject, sections, line: ln };
          }
          case "return": { p++; const e = isOp(";") ? null : expr(); expect(";"); return { k: "return", e, line: ln }; }
          case "break": p++; expect(";"); return { k: "break" };
          case "continue": p++; expect(";"); return { k: "continue" };
          case "yield": {
            p++;
            inIterator = true;
            if (isId("break")) { p++; expect(";"); return { k: "yieldbreak" }; }
            if (!isId("return")) fail("error CS1003: Syntax error, 'return' expected", line());
            p++;
            const e = isOp(";") ? { k: "lit", v: null } : expr();
            expect(";");
            return { k: "yield", e, line: ln };
          }
          case "throw": { p++; const e = isOp(";") ? null : expr(); expect(";"); return { k: "throw", e, line: ln }; }
          case "try": {
            p++;
            const body = block();
            const catches = [];
            let fin = null;
            while (isId("catch")) {
              p++;
              let type = null, name = null;
              if (isOp("(")) { p++; type = tryType(); if (at("id")) name = next().v; expect(")"); }
              catches.push({ type, name, body: block() });
            }
            if (isId("finally")) { p++; fin = block(); }
            return { k: "try", body, catches, fin, line: ln };
          }
          case "const": { p++; const d = localDecl(true); expect(";"); return d; }
          case "var": case "auto": { if (peek().k === "id") { const d = localDecl(false); expect(";"); return d; } break; }
        }
        if (declAhead()) { const d = localDecl(false); expect(";"); return d; }
      }
      const e = expr();
      if (!["assign", "call", "pre", "post", "new"].includes(e.k)) fail("error CS0201: Only assignment, call, increment, decrement, await, and new object expressions can be used as a statement", ln);
      expect(";");
      return { k: "expr", e, line: ln };
    }

    if (opts.expression) { const e = expr(); return e; }

    // ----- الأصناف -----
    const types = [];
    function attributes() {
      const list = [];
      while (isOp("[")) {
        p++;
        let depth = 1;
        while (depth && !at("eof")) { if (isOp("[")) depth++; else if (isOp("]")) depth--; else if (at("id") && depth === 1 && (t[p - 1].v === "[" || t[p - 1].v === ",")) list.push(t[p].v); if (depth) p++; }
        p++;
      }
      // ماكروهات Unreal: UPROPERTY(...) و UFUNCTION(...) و UCLASS() و GENERATED_BODY()
      while (cpp && at("id") && /^(UPROPERTY|UFUNCTION|UCLASS|USTRUCT|UENUM|GENERATED_BODY|GENERATED_UCLASS_BODY|UMETA)$/.test(t[p].v)) {
        const name = next().v;
        const spec = [];
        if (isOp("(")) { let depth = 0; do { if (isOp("(")) depth++; else if (isOp(")")) depth--; else if (at("id")) spec.push(t[p].v); p++; } while (depth && !at("eof")); }
        if (isOp(";")) p++;
        list.push(name, ...spec.map(s => name + ":" + s));
      }
      return list;
    }
    function modifiers() { const m = new Set(); while (at("id") && MODS.has(t[p].v) && !(peek().k === "op" && ["(", "=", ";"].includes(peek().v))) m.add(next().v); return m; }
    function params() {
      const list = [];
      expect("(");
      while (!isOp(")")) {
        attributes();
        let mod = null;
        if (isId("out") || isId("ref") || isId("params") || isId("in") || isId("this")) mod = next().v;
        const type = tryType();
        if (!type) fail(`error CS1001: Identifier expected (وُجد ${show(t[p])})`, line());
        if (cpp && isOp(")") && type.name === "void") break;
        const name = at("id") ? next().v : "_";
        let def = null;
        if (isOp("=")) { p++; def = expr(); }
        list.push({ type, name, def, mod });
        if (isOp(",")) p++; else break;
      }
      expect(")");
      return list;
    }
    function methodBody() {
      inIterator = false;
      let body;
      if (isOp("{")) body = block();
      else if (isOp("=>")) { p++; const ln = line(); const e = expr(); expect(";"); body = { k: "block", body: [{ k: "return", e, line: ln, exprBody: true }] }; }
      else { expect(";"); body = null; }
      const iter = inIterator;
      inIterator = false;
      return { body, iter };
    }
    function enumDecl(name) {
      expect("{");
      const members = new Map();
      let v = 0;
      while (!isOp("}")) { attributes(); const n = ident(); if (isOp("=")) { p++; const e = expr(); v = e.v !== undefined ? +e.v : v; } members.set(n, v++); if (isOp(",")) p++; else break; }
      expect("}");
      if (isOp(";")) p++;
      return { kind: "enum", name, members };
    }
    function typeDecl(kind, outer, attrs) {
      const name = ident().replace(/^\w+_API$/, () => ident());
      if (cpp && at("id") && /_API$/.test(name) === false && /_API$/.test(t[p - 1].v)) {}
      if (kind === "enum") { if (isOp(":")) { p++; tryType(); } return enumDecl(name); }
      if (isOp("<")) { while (!isOp(">")) p++; p++; }
      const cls = { kind, name, bases: [], fields: [], methods: new Map(), props: new Map(), ctors: [], nested: [], attrs, line: line() };
      if (isOp(":")) {
        p++;
        do { if (isOp(",")) p++; if (cpp) while (isId("public") || isId("private") || isId("protected") || isId("virtual")) p++; const b = tryType(); if (b) cls.bases.push(b.name); } while (isOp(","));
      }
      while (isId("where")) { while (!isOp("{")) p++; }
      if (cpp && isOp(";")) { p++; return cls; }   // تصريح مسبق
      expect("{");
      while (!isOp("}")) {
        if (at("eof")) fail("error CS1513: } expected", line());
        if (cpp && at("id") && ["public", "private", "protected"].includes(t[p].v) && peek().k === "op" && peek().v === ":") { p += 2; continue; }
        member(cls);
      }
      p++;
      if (isOp(";")) p++;
      return cls;
    }
    function addMethod(cls, m) { if (!cls.methods.has(m.name)) cls.methods.set(m.name, []); cls.methods.get(m.name).push(m); }
    function member(cls) {
      const attrs = attributes();
      if (isOp(";")) { p++; return; }
      if (isOp("}") || (cpp && at("id") && ["public", "private", "protected"].includes(t[p].v) && peek().k === "op" && peek().v === ":")) return;
      const mods = modifiers();
      const ln = line();
      if (isId("class") || isId("struct") || isId("interface") || isId("enum")) { const kind = next().v; const d = typeDecl(kind, cls, attrs); d.outer = cls.name; cls.nested.push(d); types.push(d); return; }
      // البنّاء
      if (at("id") && t[p].v === cls.name && peek().k === "op" && peek().v === "(") {
        p++;
        const ps = params();
        let chain = null;
        if (isOp(":")) { p++; const kind = next().v; if (kind === "base" || kind === "this") chain = { kind, args: args() }; else { /* قائمة تهيئة C++ */ while (!isOp("{")) p++; } }
        const { body } = methodBody();
        cls.ctors.push({ params: ps, body, chain, line: ln });
        return;
      }
      if (isOp("~")) { p++; ident(); params(); methodBody(); return; }
      if (cpp && isId("virtual")) p++;
      const type = tryType();
      if (!type) fail(`error CS1519: Invalid token '${show(t[p])}' in class, record, struct, or interface member declaration`, line());
      // دالة C++ معرفة خارج الصنف لها اسم مركب (نتعامل معها في المستوى الأعلى)
      if (isId("operator")) { while (!isOp("{") && !isOp(";")) p++; methodBody(); return; }
      const name = ident();
      if (isOp("<") && genericAhead()) { while (!isOp(">")) p++; p++; }
      if (isOp("(")) {
        const ps = params();
        if (cpp) while (isId("const") || isId("override") || isId("final")) p++;
        while (isId("where")) { while (!isOp("{") && !isOp(";") && !isOp("=>")) p++; }
        const { body, iter } = methodBody();
        addMethod(cls, { name, params: ps, body, iter, ret: type, mods, attrs, line: ln, owner: cls.name });
        return;
      }
      if (isOp("{") && !cpp) {
        // خاصية { get; set; }
        p++;
        const prop = { name, type, mods, attrs, auto: true, line: ln };
        while (!isOp("}")) {
          modifiers();
          const acc = ident();
          if (isOp(";")) { p++; continue; }
          prop.auto = false;
          if (isOp("=>")) { p++; const l2 = line(); const e = expr(); expect(";"); prop[acc] = { k: "block", body: [acc === "get" ? { k: "return", e, line: l2 } : { k: "expr", e, line: l2 }] }; }
          else prop[acc] = block();
        }
        p++;
        if (isOp("=")) { p++; prop.init = expr(); expect(";"); }
        if (prop.auto) prop.get = prop.set = null;
        cls.props.set(name, prop);
        return;
      }
      if (isOp("=>")) { p++; const l2 = line(); const e = expr(); expect(";"); cls.props.set(name, { name, type, mods, attrs, auto: false, get: { k: "block", body: [{ k: "return", e, line: l2 }] }, line: ln }); return; }
      // حقول
      let fname = name;
      for (;;) {
        let init = null;
        if (isOp("=")) { p++; init = isOp("{") ? { k: "arrlit", type, items: initializer().map(x => x.e), line: ln } : expr(); }
        else if (cpp && isOp("{")) { const it = initializer().map(x => x.e); init = it.length ? (it.length === 1 ? it[0] : { k: "new", type, args: it, line: ln }) : null; }
        cls.fields.push({ name: fname, type, init, mods, attrs, line: ln, isStatic: mods.has("static") || mods.has("const"), konst: mods.has("const"), event: mods.has("event") });
        if (isOp(",")) { p++; fname = ident(); continue; }
        break;
      }
      expect(";");
    }
    const byName = n => types.find(x => x.name === n);
    while (!at("eof")) {
      if (isId("using")) { while (!isOp(";")) p++; p++; continue; }
      if (isId("namespace")) { p++; tryType(); if (isOp(";")) p++; else { expect("{"); } continue; }
      if (isOp("}")) { p++; continue; }
      const attrs = attributes();
      if (at("eof")) break;
      const mods = modifiers();
      if (isId("class") || isId("struct") || isId("interface") || isId("enum")) {
        const kind = next().v;
        if (cpp && at("id") && /_API$/.test(t[p].v)) p++;
        const d = typeDecl(kind, null, attrs);
        const prev = byName(d.name);
        if (prev && cpp) Object.assign(prev, { bases: prev.bases.length ? prev.bases : d.bases }), d.fields.forEach(f => prev.fields.push(f)), d.methods.forEach((v, k) => v.forEach(m => addMethod(prev, m))), d.ctors.forEach(c => prev.ctors.push(c));
        else types.push(d);
        continue;
      }
      if (cpp) {
        // تعريف دالة خارج الصنف: void AMyActor::BeginPlay() { ... } أو البنّاء AMyActor::AMyActor()
        const ln = line();
        const save = p;
        let ret = tryType();
        let full = null;
        if (ret && isOp("(") && ret.name.includes(".")) { full = ret.name; ret = { name: "void", args: [] }; }
        else if (ret && at("id")) { let n = next().v; while (isOp("::")) { p++; n += "." + ident(); } full = n; }
        if (full && isOp("(")) {
          const parts = full.split(".");
          const mname = parts.pop(), cname = parts.pop();
          let cls = byName(cname);
          if (!cls) { cls = { kind: "class", name: cname, bases: [], fields: [], methods: new Map(), props: new Map(), ctors: [], nested: [], attrs: [] }; types.push(cls); }
          const ps = params();
          while (isId("const") || isId("override")) p++;
          if (mname === cname) {
            if (isOp(":")) { p++; while (!isOp("{")) p++; }
            const { body } = methodBody();
            const decl = cls.ctors.find(c => !c.body && c.params.length === ps.length);
            if (decl) Object.assign(decl, { params: ps, body, line: ln }); else cls.ctors.push({ params: ps, body, line: ln });
          } else {
            const { body, iter } = methodBody();
            const list = cls.methods.get(mname) || [];
            const decl = list.find(m => m.params.length === ps.length && !m.body);
            if (decl) Object.assign(decl, { body, iter, params: ps, line: ln });
            else addMethod(cls, { name: mname, params: ps, body, iter, ret, mods: new Set(), attrs: [], line: ln, owner: cname });
          }
          continue;
        }
        p = save;
        // تعريف متغير عام أو ماكرو: نتجاوز السطر
        while (!isOp(";") && !at("eof")) p++;
        p++;
        continue;
      }
      fail(`error CS0116: A namespace cannot directly contain members such as fields, methods or statements (وُجد ${show(t[p])})`, line());
    }
    return { types };
  }

  // ---------- القيم ----------
  class Num { constructor(v, t) { this.v = v; this.t = t; } valueOf() { return this.v; } }
  class Chr { constructor(c) { this.c = c; } toString() { return this.c; } }
  const F = v => new Num(Math.fround(v), "f");
  const D = v => new Num(v, "d");
  const isNum = v => typeof v === "number" || v instanceof Num;
  const nv = v => v instanceof Num ? v.v : v instanceof Chr ? v.c.charCodeAt(0) : v;
  const numKind = v => typeof v === "number" ? "int" : v.t === "f" ? "float" : "double";

  // تمثيل الأعداد كما يطبعها C#
  function fstr(x) {
    if (!isFinite(x)) return isNaN(x) ? "NaN" : x > 0 ? "Infinity" : "-Infinity";
    if (x === 0) return Object.is(x, -0) ? "-0" : "0";
    for (let p = 1; p <= 9; p++) { const s = x.toPrecision(p); if (Math.fround(+s) === x) return fixExp(String(+s)); }
    return fixExp(String(x));
  }
  const dstr = x => !isFinite(x) ? (isNaN(x) ? "NaN" : x > 0 ? "Infinity" : "-Infinity") : fixExp(String(x));
  const fixExp = s => s.replace(/e([-+])(\d+)$/, (m, sg, d) => "E" + sg + d.padStart(2, "0"));
  // التنسيقات: F2 و N0 و D3 و 0.00 و P0
  function formatNum(v, fmt) {
    const x = nv(v);
    if (!fmt) return toStr(v);
    const m = /^([FfNnDdPpEeGg])(\d*)$/.exec(fmt);
    if (m) {
      const c = m[1].toUpperCase(), d = m[2] === "" ? null : +m[2];
      if (c === "F") return roundFixed(x, d ?? 2);
      if (c === "N") { const s = roundFixed(Math.abs(x), d ?? 2); const [i, f] = s.split("."); return (x < 0 ? "-" : "") + i.replace(/\B(?=(\d{3})+(?!\d))/g, ",") + (f ? "." + f : ""); }
      if (c === "D") return (x < 0 ? "-" : "") + String(Math.abs(Math.trunc(x))).padStart(d || 0, "0");
      if (c === "P") return roundFixed(x * 100, d ?? 2) + " %";
      if (c === "G") return toStr(v);
      if (c === "E") return x.toExponential(d ?? 6).toUpperCase().replace(/E([-+])(\d)$/, "E$1" + "00$2").replace(/E([-+])(\d\d)$/, "E$10$2");
    }
    // أنماط مخصصة: 0.00 و #.## و 000
    const pm = /^([0#,]*)(?:\.([0#]+))?$/.exec(fmt);
    if (pm) {
      const dec = pm[2] || "", min = (dec.match(/0/g) || []).length, max = dec.length;
      let s = roundFixed(Math.abs(x), max);
      if (max > min) s = s.replace(new RegExp(`(\\.\\d{${min}}\\d*?)0+$`), "$1").replace(/\.$/, "");
      const intMin = (pm[1].match(/0/g) || []).length;
      let [i, f] = s.split(".");
      i = i.padStart(intMin, "0");
      if (i === "0" && intMin === 0 && pm[1]) i = "";
      if (pm[1].includes(",")) i = i.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      return (x < 0 && +s !== 0 ? "-" : "") + i + (f ? "." + f : "");
    }
    return toStr(v);
  }
  // تقريب عشري بطريقة .NET (نصف بعيداً عن الصفر على التمثيل العشري)
  function roundFixed(x, d) {
    const s = x.toFixed(Math.min(d + 3, 20));
    const neg = x < 0;
    const r = (Math.round(Math.abs(+s) * Math.pow(10, d) + 1e-9) / Math.pow(10, d));
    return (neg && r !== 0 ? "-" : "") + r.toFixed(d);
  }

  let toStrHook = null, primHook = null;
  function toStr(v) {
    if (primHook) { const r = primHook(v); if (r !== undefined) return r; }
    if (v === null || v === undefined) return "";
    if (typeof v === "string") return v;
    if (typeof v === "boolean") return v ? "True" : "False";
    if (typeof v === "number") return String(v);
    if (v instanceof Num) return v.t === "f" ? fstr(v.v) : dstr(v.v);
    if (v instanceof Chr) return v.c;
    if (v instanceof EnumVal) return v.name;
    if (v instanceof CList) return `System.Collections.Generic.List\`1[${netType(v.elem)}]`;
    if (v instanceof CArr) return `${netType(v.elem)}[]`;
    if (v instanceof CDict) return `System.Collections.Generic.Dictionary\`2[${netType(v.kt)},${netType(v.vt)}]`;
    if (v && v.__str) return v.__str();
    if (toStrHook) { const s = toStrHook(v); if (s != null) return s; }
    if (v instanceof Obj) return v.cls.name;
    return String(v);
  }
  const netType = t => !t ? "System.Object" : ({ int: "System.Int32", float: "System.Single", double: "System.Double", string: "System.String", bool: "System.Boolean" })[t.name] || t.name;

  class EnumVal { constructor(type, name, v) { this.type = type; this.name = name; this.v = v; } }
  class Obj { constructor(cls) { this.cls = cls; this.f = new Map(); } }
  class CList {
    constructor(a = [], elem = null) { this.a = a; this.elem = elem; }
  }
  class CArr { constructor(a = [], elem = null) { this.a = a; this.elem = elem; } }
  class CDict { constructor(elem) { this.m = new Map(); this.kt = elem && elem[0]; this.vt = elem && elem[1]; } }
  // المفاتيح: الأعداد والنصوص بقيمتها
  const keyOf = k => k instanceof Num ? "n:" + k.v : typeof k === "number" ? "n:" + k : k instanceof EnumVal ? "e:" + k.type + "." + k.name : k;
  class Callable {
    constructor(fn, name = "lambda") { this.fn = fn; this.name = name; }
  }
  class Multicast { constructor(list) { this.list = list; } }
  class TypeRef { constructor(name, cls, native) { this.name = name; this.cls = cls; this.native = native; } __str() { return this.name; } }

  CW.cs = { lex, parse, CSError, CSException, Num, Chr, F, D, EnumVal, Obj, CList, CArr, CDict, Callable, Multicast, TypeRef, fstr, toStr, formatNum, fail, raise, isNum, nv, numKind, keyOf,
    setToStrHook: h => { toStrHook = h; }, setPrimHook: h => { primHook = h; } };
})(typeof window !== "undefined" ? window : globalThis);

// ---------- التنفيذ ----------
(function (root) {
  const CW = root.CW;
  const { CSError, CSException, Num, Chr, F, D, EnumVal, Obj, CList, CArr, CDict, Callable, Multicast, TypeRef, toStr, formatNum, fail, raise, isNum, nv, numKind, keyOf } = CW.cs;
  class Ret { constructor(v) { this.v = v; } }
  const BRK = { brk: 1 }, CNT = { cnt: 1 }, YBRK = { ybrk: 1 };
  const INTS = new Set(["int", "long", "short", "byte", "uint", "ulong", "ushort", "sbyte", "int32", "int64", "uint8", "uint32", "int8", "int16", "uint16"]);
  const NUMS = new Set([...INTS, "float", "double", "decimal"]);

  // المكرر (IEnumerator): ينفذ جسم الدالة حتى أول yield return
  class Enumerator {
    constructor(factory, name) { this.factory = factory; this.gen = null; this.done = false; this.Current = null; this.name = name; }
    MoveNext() {
      if (this.done) return false;
      if (!this.gen) this.gen = this.factory();
      const r = this.gen.next();
      if (r.done) { this.done = true; return false; }
      this.Current = r.value;
      return true;
    }
  }

  class Runtime {
    constructor(types, host, opts = {}) {
      this.host = host;
      this.cpp = !!opts.cpp;
      this.classes = new Map();
      this.enums = new Map();
      this.steps = 0;
      for (const t of types) (t.kind === "enum" ? this.enums : this.classes).set(t.name, t);
      for (const c of this.classes.values()) {
        c.baseCls = c.bases.map(b => this.classes.get(b)).find(b => b && b.kind !== "interface") || null;
        c.statics = new Map();
      }
      for (const c of this.classes.values()) {
        c.chain = [];
        for (let k = c; k; k = k.baseCls) c.chain.push(k);
        c.allBases = new Set();
        const addB = k => { if (!k) return; c.allBases.add(k.name); k.bases.forEach(b => { c.allBases.add(b); addB(this.classes.get(b)); }); };
        addB(c);
        c.rootBase = c.chain[c.chain.length - 1].bases[0] || null;   // مثل MonoBehaviour
      }
      CW.cs.setToStrHook(v => this.strOf(v));
      // فحص "ترجمة" مسبق لأشهر خطأ: 5.5 بلا f في float (يمنع التشغيل كله كما في Unity)
      const walk = n => {
        if (!n || typeof n !== "object") return;
        if (Array.isArray(n)) return n.forEach(walk);
        if (n.k === "local") n.decls.forEach(d => this.litCheck(d.init, n.type, n.line));
        for (const k in n) if (k !== "line" && typeof n[k] === "object") walk(n[k]);
      };
      for (const c of this.classes.values()) {
        c.fields.forEach(f => this.litCheck(f.init, f.type, f.line));
        for (const list of c.methods.values()) list.forEach(m => walk(m.body));
      }
    }
    initStatics() {
      for (const c of this.classes.values()) {
        const env = { self: null, cls: c, scopes: [new Map()] };
        for (const f of c.fields) if (f.isStatic) c.statics.set(f.name, f.init ? this.coerce(this.eval(f.init, env), f.type, f.line) : this.defaultFor(f.type));
        for (const [n, pr] of c.props) if (pr.mods.has("static") && pr.auto) c.statics.set("<p>" + n, pr.init ? this.eval(pr.init, env) : this.defaultFor(pr.type));
      }
    }
    strOf(v) {
      if (v instanceof Obj) {
        const m = this.findMethod(v.cls, "ToString", 0);
        if (m && m.owner !== "object") return toStr(this.invoke(m.m, m.cls, v, []));
        return this.host.strOf ? this.host.strOf(v) : v.cls.name;
      }
      return this.host.strOf ? this.host.strOf(v) : null;
    }

    // ----- الأنواع -----
    defaultFor(type, field) {
      if (!type) return null;
      if (type.array) return null;
      const n = type.name;
      if (INTS.has(n)) return 0;
      if (n === "float") return F(0);
      if (n === "double" || n === "decimal") return D(0);
      if (n === "bool") return false;
      if (n === "char") return new Chr("\0");
      if (this.enums.has(n)) { const e = this.enums.get(n); const [k, v] = [...e.members][0]; return new EnumVal(n, k, v); }
      const h = this.host.defaultFor && this.host.defaultFor(type, field);
      return h === undefined ? null : h;
    }
    typeOfValue(v) {
      if (typeof v === "number") return { name: "int", args: [] };
      if (v instanceof Num) return { name: v.t === "f" ? "float" : "double", args: [] };
      if (typeof v === "string") return { name: "string", args: [] };
      if (typeof v === "boolean") return { name: "bool", args: [] };
      if (v && v.__struct) return { name: v.__type, args: [] };
      return null;
    }
    typeLabel(v) {
      if (v === null || v === undefined) return "null";
      if (typeof v === "number") return "int";
      if (v instanceof Num) return v.t === "f" ? "float" : "double";
      if (typeof v === "string") return "string";
      if (typeof v === "boolean") return "bool";
      if (v instanceof Chr) return "char";
      if (v instanceof EnumVal) return v.type;
      if (v instanceof Obj) return v.cls.name;
      if (v instanceof CList) return `System.Collections.Generic.List<${v.elem ? v.elem.name : "object"}>`;
      if (v instanceof CArr) return (v.elem ? v.elem.name : "object") + "[]";
      if (v instanceof Callable) return "lambda expression";
      return v.__type || "object";
    }
    // 5.5 بلا f في متغير float: رسالة C# الخاصة بالقيم الحرفية
    litCheck(e, type, line) {
      if (this.cpp) return;
      if (e && e.k === "lit" && e.v instanceof Num && e.v.t === "d" && type && type.name === "float") fail("error CS0664: Literal of type double cannot be implicitly converted to type 'float'; use an 'F' suffix to create a literal of this type", line);
      if (e && e.k === "unary" && e.op === "-") this.litCheck(e.e, type, line);
    }
    coerce(v, type, line) {
      if (!type || type.name === "var" || type.name === "object" || type.name === "auto" || type.name === "dynamic") return v;
      const n = type.name, conv = (from, to) => fail(`error CS0266: Cannot implicitly convert type '${from}' to '${to}'. An explicit conversion exists (are you missing a cast?)`, line);
      const bad = () => fail(`error CS0029: Cannot implicitly convert type '${this.typeLabel(v)}' to '${n}${type.array ? "[]" : ""}'`, line);
      if (type.array) {
        if (v === null) return v;
        if (v instanceof CArr) { if (!v.elem) { v.elem = { name: n, args: [] }; v.a = v.a.map(x => this.coerce(x, { name: n, args: type.args }, line)); } return v; }
        bad();
      }
      if (v === null || v === undefined) { if (NUMS.has(n) || n === "bool") fail(`error CS0037: Cannot convert null to '${n}' because it is a non-nullable value type`, line); return null; }
      if (INTS.has(n)) {
        if (typeof v === "number") return v;
        if (this.cpp && v instanceof Num) return Math.trunc(v.v) | 0;   // C++ يحوّل ضمنياً (مع تحذير)
        if (this.cpp && typeof v === "boolean") return v ? 1 : 0;
        if (v instanceof Chr) return v.c.charCodeAt(0);
        if (v instanceof Num) conv(numKind(v), n);
        if (v instanceof EnumVal) conv(v.type, n);
        bad();
      }
      if (n === "float") { if (typeof v === "number") return F(v); if (v instanceof Num) { if (v.t === "f") return v; if (this.cpp) return F(v.v); conv("double", "float"); } if (v instanceof Chr) return F(v.c.charCodeAt(0)); bad(); }
      if (n === "double" || n === "decimal") { if (isNum(v)) return D(nv(v)); bad(); }
      if (n === "bool") { if (typeof v === "boolean") return v; if (v && v.__bool) return v.__bool(); bad(); }
      if (n === "string" || n === "FString") { if (typeof v === "string") return v; if (n === "FString" && v && v.__type === "FText") return v.s; bad(); }
      if (n === "char") { if (v instanceof Chr) return v; bad(); }
      if (this.enums.has(n)) { if (v instanceof EnumVal && v.type === n) return v; if (v instanceof EnumVal) conv(v.type, n); bad(); }
      if ((n === "List" || n === "TArray") && v instanceof CArr) return new CList(v.a.map(x => this.coerce(x, type.args[0], line)), type.args[0]);
      if ((n === "List" || n === "TArray") && v instanceof CList && !v.elem) { v.elem = type.args[0]; return v; }
      if (this.classes.has(n) && !this.isNullish(v)) {
        if (v instanceof Obj) { if (!v.cls.allBases.has(n)) fail(`error CS0029: Cannot implicitly convert type '${v.cls.name}' to '${n}'`, line); return v; }
      }
      if (typeof v === "number" || v instanceof Num || typeof v === "string" || typeof v === "boolean") {
        const h = this.host.coerce && this.host.coerce(v, type, line);
        if (h !== undefined) return h;
        if (["Vector2", "Vector3", "FVector", "GameObject", "Transform", "Color"].includes(n)) bad();
        return v;
      }
      const h = this.host.coerce && this.host.coerce(v, type, line);
      return h === undefined ? v : h;
    }
    isNullish(v) { return v === null || v === undefined || (this.host.isFakeNull && this.host.isFakeNull(v)); }
    typeMatches(v, type) {
      if (v === null || v === undefined || !type) return false;
      const n = type.name;
      if (INTS.has(n)) return typeof v === "number";
      if (n === "float") return v instanceof Num && v.t === "f";
      if (n === "double") return v instanceof Num && v.t === "d";
      if (n === "string") return typeof v === "string";
      if (n === "bool") return typeof v === "boolean";
      if (n === "object") return true;
      if (v instanceof EnumVal) return v.type === n;
      if (v instanceof Obj) return v.cls.allBases.has(n) || (this.host.objIs && this.host.objIs(v, n));
      if (v instanceof CList) return n === "List" || n === "IList" || n === "IEnumerable";
      if (v.__types) return v.__types.includes(n);
      return v.__type === n;
    }

    // ----- البحث عن الأعضاء -----
    findField(cls, name) { for (const c of cls.chain) { const f = c.fields.find(x => x.name === name); if (f) return { f, cls: c }; } return null; }
    findProp(cls, name) { for (const c of cls.chain) if (c.props.has(name)) return { p: c.props.get(name), cls: c }; return null; }
    findMethod(cls, name, argc, args) {
      for (const c of cls.chain) {
        const list = c.methods.get(name);
        if (!list) continue;
        const ok = list.filter(m => m.body !== null || c.kind === "interface").filter(m => argc <= m.params.length && argc >= m.params.filter(p => !p.def && p.mod !== "params").length);
        if (!ok.length) continue;
        if (ok.length === 1 || !args) return { m: ok[0], cls: c };
        // تفضيل التطابق في الأنواع
        const score = m => m.params.reduce((s, p, i) => {
          if (i >= args.length) return s;
          const a = args[i], tn = p.type.name;
          if (INTS.has(tn)) return s + (typeof a === "number" ? 3 : -50);
          if (tn === "float") return s + (a instanceof Num && a.t === "f" ? 3 : typeof a === "number" ? 1 : -50);
          if (tn === "double") return s + (isNum(a) ? 1 : -50);
          if (tn === "string") return s + (typeof a === "string" ? 3 : -50);
          if (tn === "bool") return s + (typeof a === "boolean" ? 3 : -50);
          return s + (this.typeMatches(a, p.type) ? 2 : 0);
        }, m.params.length === argc ? 1 : 0);
        return { m: ok.sort((x, y) => score(y) - score(x))[0], cls: c };
      }
      return null;
    }
    hasMethod(cls, name) { return cls.chain.some(c => c.methods.has(name)); }

    // ----- الإنشاء والاستدعاء -----
    instantiate(cls, args = [], line, init) {
      if (cls.kind === "interface" || (cls.mods && cls.mods.has && cls.mods.has("abstract"))) fail(`error CS0144: Cannot create an instance of the abstract type or interface '${cls.name}'`, line);
      const obj = new Obj(cls);
      if (this.host.onNewObj) this.host.onNewObj(obj);
      this.initFields(obj);
      this.runCtor(obj, cls, args, line);
      return obj;
    }
    initFields(obj) {
      for (const c of [...obj.cls.chain].reverse()) {
        const env = { self: obj, cls: c, scopes: [new Map()] };
        for (const f of c.fields) if (!f.isStatic) this.litCheck(f.init, f.type, f.line);
        for (const f of c.fields) if (!f.isStatic) obj.f.set(f.name, f.init ? this.coerce(this.eval(f.init, env), f.type, f.line) : this.defaultFor(f.type, f));
        for (const [n, pr] of c.props) if (pr.auto && !pr.mods.has("static")) obj.f.set("<p>" + n, pr.init ? this.coerce(this.eval(pr.init, env), pr.type, pr.line) : this.defaultFor(pr.type));
      }
    }
    runCtor(obj, cls, args, line) {
      const ctors = cls.ctors;
      if (!ctors.length) { if (args.length && !(this.host.nativeCtor && this.host.nativeCtor(obj, cls, args))) fail(`error CS1729: '${cls.name}' does not contain a constructor that takes ${args.length} arguments`, line); if (cls.baseCls) this.runCtor(obj, cls.baseCls, [], line); return; }
      const c = ctors.find(k => args.length <= k.params.length && args.length >= k.params.filter(p => !p.def).length);
      if (!c) fail(`error CS1729: '${cls.name}' does not contain a constructor that takes ${args.length} arguments`, line);
      const scope = new Map();
      const env = { self: obj, cls, scopes: [scope], fn: cls.name + ".ctor" };
      c.params.forEach((p, i) => scope.set(p.name, { v: this.coerce(i < args.length ? args[i] : this.eval(p.def, env), p.type, line), type: p.type }));
      if (c.chain && c.chain.kind === "base" && cls.baseCls) this.runCtor(obj, cls.baseCls, c.chain.args.map(a => this.eval(a, env)), line);
      else if (c.chain && c.chain.kind === "this") this.runCtor(obj, cls, c.chain.args.map(a => this.eval(a, env)), line);
      else if (cls.baseCls) this.runCtor(obj, cls.baseCls, [], line);
      if (c.body) this.runBlock(c.body, env);
    }
    invoke(m, cls, self, args, line) {
      const scope = new Map();
      const env = { self, cls, scopes: [scope], fn: `${cls.name}.${m.name}` };
      m.params.forEach((p, i) => {
        if (p.mod === "params") { scope.set(p.name, { v: new CArr(args.slice(i).map(x => this.coerce(x, { name: p.type.name, args: [] }, line)), { name: p.type.name, args: [] }), type: p.type }); return; }
        let v = i < args.length ? args[i] : p.def ? this.eval(p.def, env) : this.defaultFor(p.type);
        if (p.mod === "out" || p.mod === "ref") { scope.set(p.name, { ref: args[i], type: p.type }); return; }
        scope.set(p.name, { v: this.coerce(v, p.type, line || m.line), type: p.type });
      });
      if (!m.body) return null;
      if (m.iter) { const en = new Enumerator(() => this.execBlock(m.body.body, env), m.name); return m.event && this.host.runEvent ? this.host.runEvent(en, self, m) : en; }
      const r = this.runBlock(m.body, env);
      if (m.ret && m.ret.name !== "void" && r !== undefined) return this.coerce(r, m.ret, m.line);
      return r === undefined ? null : r;
    }
    // تشغيل كتلة حتى النهاية (دالة عادية): لا يُسمح بـ yield
    runBlock(block, env) {
      const g = this.execBlock(block.body, env);
      const r = g.next();
      if (!r.done) fail("error CS1624: The body cannot be an iterator block because 'void' is not an iterator interface type");
      return r.value instanceof Ret ? r.value.v : undefined;
    }
    callValue(f, args, line) {
      if (f === null || f === undefined) raise("NullReferenceException", "Object reference not set to an instance of an object");
      if (f instanceof Callable) return f.fn(...args);
      if (f instanceof Multicast) { let r = null; for (const c of f.list.slice()) r = c.fn(...args); return r; }
      fail(`error CS1955: Non-invocable member cannot be used like a method`, line);
    }

    // ----- التعليمات -----
    *execBlock(stmts, env) {
      env.scopes.push(new Map());
      try {
        for (const s of stmts) {
          const r = yield* this.exec(s, env);
          if (r !== undefined) return r;
        }
      } finally { env.scopes.pop(); }
    }
    tick(line) { if (++this.steps > 3e6) fail("توقف التنفيذ: حلقة لا تنتهي؟ (في Unity الحقيقي يتجمد المحرر)", line); }
    *exec(s, env) {
      this.tick(s.line);
      if (s.line) { this.curLine = s.line; this.curFn = env.fn; }
      switch (s.k) {
        case "block": return yield* this.execBlock(s.body, env);
        case "empty": return;
        case "expr": this.eval(s.e, env); return;
        case "local": {
          const sc = env.scopes[env.scopes.length - 1];
          for (const d of s.decls) {
            if (this.lookupLocal(env, d.name)) fail(`error CS0128: A local variable named '${d.name}' is already defined in this scope`, s.line);
            this.litCheck(d.init, s.type, s.line);
            let v = d.init ? this.eval(d.init, env, s.type) : (s.type.name === "var" ? fail("error CS0818: Implicitly-typed variables must be initialized", s.line) : this.cpp ? this.defaultFor(s.type) : undefined);
            const type = s.type.name === "var" || s.type.name === "auto" ? this.typeOfValue(v) : s.type;
            if (v !== undefined) v = this.coerce(v, type, s.line);
            sc.set(d.name, { v, type, konst: s.konst, unassigned: v === undefined });
          }
          return;
        }
        case "if": {
          if (this.truthy(this.eval(s.c, env), s.line)) return yield* this.execBlock([s.a], env);
          if (s.b) return yield* this.execBlock([s.b], env);
          return;
        }
        case "while": {
          while (this.truthy(this.eval(s.c, env), s.line)) {
            this.tick(s.line);
            const r = yield* this.execBlock([s.body], env);
            if (r === BRK) break;
            if (r === CNT) continue;
            if (r !== undefined) return r;
          }
          return;
        }
        case "do": {
          do {
            this.tick(s.line);
            const r = yield* this.execBlock([s.body], env);
            if (r === BRK) break;
            if (r === CNT) continue;
            if (r !== undefined) return r;
          } while (this.truthy(this.eval(s.c, env), s.line));
          return;
        }
        case "for": {
          env.scopes.push(new Map());
          try {
            for (const i of s.init) yield* this.exec(i, env);
            while (!s.c || this.truthy(this.eval(s.c, env), s.line)) {
              this.tick(s.line);
              const r = yield* this.execBlock([s.body], env);
              if (r === BRK) break;
              if (r !== undefined && r !== CNT) return r;
              s.iter.forEach(e => this.eval(e, env));
            }
          } finally { env.scopes.pop(); }
          return;
        }
        case "foreach": {
          const src = this.eval(s.iter, env);
          const it = this.iterate(src, s.line);
          for (const x of it) {
            this.tick(s.line);
            const type = s.type.name === "var" ? this.typeOfValue(x) : s.type;
            env.scopes.push(new Map([[s.name, { v: type ? this.coerce(x, type, s.line) : x, type, readonly: true }]]));
            let r;
            try { r = yield* this.execBlock([s.body], env); } finally { env.scopes.pop(); }
            if (r === BRK) break;
            if (r !== undefined && r !== CNT) return r;
          }
          return;
        }
        case "switch": {
          const v = this.eval(s.subject, env);
          let sec = s.sections.find(sc => sc.labels.some(l => l && this.equals(this.eval(l, env), v)));
          if (!sec) sec = s.sections.find(sc => sc.labels.includes(null));
          if (!sec) return;
          const r = yield* this.execBlock(sec.body, env);
          if (r === BRK) return;
          return r;
        }
        case "return": return new Ret(s.e ? this.eval(s.e, env) : null);
        case "break": return BRK;
        case "continue": return CNT;
        case "yield": yield this.eval(s.e, env); return;
        case "yieldbreak": return YBRK;
        case "throw": {
          const e = s.e ? this.eval(s.e, env) : null;
          if (e && e.__exception) throw new CSException(e.type, e.message);
          raise("Exception", toStr(e));
        }
        case "try": {
          try { return yield* this.execBlock(s.body.body, env); }
          catch (e) {
            if (!(e instanceof CSException)) throw e;
            const c = s.catches.find(c => !c.type || c.type.name === "Exception" || c.type.name === e.type);
            if (!c) throw e;
            const scope = new Map();
            if (c.name) scope.set(c.name, { v: { __exception: true, __type: e.type, type: e.type, message: e.message, __get: n => n === "Message" ? e.message : undefined, __str: () => `${e.type}: ${e.message}` } });
            env.scopes.push(scope);
            try { return yield* this.execBlock(c.body.body, env); } finally { env.scopes.pop(); }
          } finally { if (s.fin) yield* this.execBlock(s.fin.body, env); }
        }
      }
      fail("تعليمة غير مدعومة: " + s.k, s.line);
    }
    *iterate(src, line) {
      if (src === null || src === undefined) raise("NullReferenceException", "Object reference not set to an instance of an object");
      if (src instanceof CList) {
        const ver = src.ver || 0;
        for (let i = 0; i < src.a.length; i++) { yield src.a[i]; if ((src.ver || 0) !== ver) raise("InvalidOperationException", "Collection was modified; enumeration operation may not execute."); }
        return;
      }
      if (src instanceof CArr) { yield* src.a.slice(); return; }
      if (src instanceof CDict) { for (const [, [k, v]] of [...src.m]) yield this.kvp(k, v); return; }
      if (typeof src === "string") { for (const c of src) yield new Chr(c); return; }
      if (src instanceof Enumerator) { while (src.MoveNext()) yield src.Current; return; }
      if (src.__iter) { yield* src.__iter(); return; }
      fail(`error CS1579: foreach statement cannot operate on variables of type '${this.typeLabel(src)}'`, line);
    }
    kvp(k, v) { return { __type: "KeyValuePair", __get: n => n === "Key" ? k : n === "Value" ? v : undefined, __str: () => `[${toStr(k)}, ${toStr(v)}]` }; }

    // ----- المتغيرات -----
    lookupLocal(env, name) { for (let i = env.scopes.length - 1; i >= 0; i--) if (env.scopes[i].has(name)) return env.scopes[i].get(name); return null; }
    staticOwner(cls, name) {
      for (let c = cls; c; c = c.outer ? this.classes.get(c.outer) : null) for (const k of c.chain) if (k.statics.has(name) || k.statics.has("<p>" + name) || (k.props.has(name) && k.props.get(name).mods.has("static"))) return k;
      return null;
    }
    getVar(name, env, line) {
      const loc = this.lookupLocal(env, name);
      if (loc) {
        if (loc.ref) return loc.ref.get();
        if (loc.unassigned) fail(`error CS0165: Use of unassigned local variable '${name}'`, line);
        return loc.v;
      }
      const self = env.self;
      if (self instanceof Obj) {
        if (self.f.has(name)) return self.f.get(name);
        const pr = this.findProp(self.cls, name);
        if (pr && !pr.p.mods.has("static")) return this.getProp(self, pr, line);
      }
      if (env.cls) {
        const so = this.staticOwner(env.cls, name);
        if (so) return so.statics.has(name) ? so.statics.get(name) : this.getProp(null, { p: so.props.get(name), cls: so }, line);
        for (let c = env.cls; c; c = c.outer ? this.classes.get(c.outer) : null) for (const k of c.chain) { const nst = k.nested.find(x => x.name === name); if (nst) return new TypeRef(name, nst.kind === "enum" ? null : this.classes.get(name), null); }
      }
      if (this.classes.has(name)) return new TypeRef(name, this.classes.get(name));
      if (this.enums.has(name)) return new TypeRef(name, null, null);
      if (self instanceof Obj && this.host.selfMember) { const v = this.host.selfMember(self, name, line); if (v !== undefined) return v; }
      if (self instanceof Obj && this.hasMethod(self.cls, name)) return new Callable((...a) => this.callMethod(self, name, a, null, line), name);
      const g = this.host.global(name, line);
      if (g !== undefined) return g;
      fail(`error CS0103: The name '${name}' does not exist in the current context`, line);
    }
    getProp(self, pr, line) {
      const { p, cls } = pr;
      if (p.auto || (!p.get && !p.set)) return self ? self.f.get("<p>" + p.name) : cls.statics.get("<p>" + p.name);
      if (!p.get) fail(`error CS0154: The property or indexer '${p.name}' cannot be used in this context because it lacks the get accessor`, line);
      return this.coerce(this.runBlock(p.get, { self, cls, scopes: [new Map()], fn: `${cls.name}.${p.name}` }) ?? null, p.type, line);
    }
    setProp(self, pr, v, line) {
      const { p, cls } = pr;
      v = this.coerce(v, p.type, line);
      if (p.auto || (!p.get && !p.set)) { if (self) self.f.set("<p>" + p.name, v); else cls.statics.set("<p>" + p.name, v); return; }
      if (!p.set) fail(`error CS0200: Property or indexer '${cls.name}.${p.name}' cannot be assigned to -- it is read only`, line);
      this.runBlock(p.set, { self, cls, scopes: [new Map([["value", { v, type: p.type }]])], fn: `${cls.name}.${p.name}` });
    }
    setVar(name, v, env, line) {
      const loc = this.lookupLocal(env, name);
      if (loc) {
        if (loc.readonly) fail(`error CS1656: Cannot assign to '${name}' because it is a 'foreach iteration variable'`, line);
        if (loc.konst) fail(`error CS0131: The left-hand side of an assignment must be a variable, property or indexer`, line);
        if (loc.ref) return loc.ref.set(this.coerce(v, loc.type, line));
        loc.v = this.coerce(v, loc.type, line); loc.unassigned = false; return;
      }
      const self = env.self;
      if (self instanceof Obj) {
        const fd = this.findField(self.cls, name);
        if (fd && !fd.f.isStatic) { if (fd.f.konst) fail(`error CS0131: The left-hand side of an assignment must be a variable, property or indexer`, line); self.f.set(name, this.coerce(v, fd.f.type, line)); return; }
        const pr = this.findProp(self.cls, name);
        if (pr && !pr.p.mods.has("static")) return this.setProp(self, pr, v, line);
      }
      if (env.cls) {
        const so = this.staticOwner(env.cls, name);
        if (so) {
          if (so.statics.has(name)) { const fd = so.fields.find(f => f.name === name); if (fd && fd.konst) fail(`error CS0131: The left-hand side of an assignment must be a variable, property or indexer`, line); so.statics.set(name, this.coerce(v, fd && fd.type, line)); return; }
          return this.setProp(null, { p: so.props.get(name), cls: so }, v, line);
        }
      }
      if (self instanceof Obj && this.host.selfSet && this.host.selfSet(self, name, v, line)) return;
      fail(`error CS0103: The name '${name}' does not exist in the current context`, line);
    }

    // ----- التعبيرات -----
    truthy(v, line) {
      if (typeof v === "boolean") return v;
      if (this.cpp && isNum(v)) return nv(v) !== 0;
      if (this.cpp && (v === null || v === undefined)) return false;
      if (v && v.__bool) return v.__bool();
      if (v === null || v === undefined) { if (this.host.nullTruth) return false; }
      if (this.host.truth) { const t = this.host.truth(v); if (t !== undefined) return t; }
      fail(`error CS0029: Cannot implicitly convert type '${this.typeLabel(v)}' to 'bool'`, line);
    }
    equals(a, b) {
      if (isNum(a) && isNum(b)) return nv(a) === nv(b);
      if (a instanceof Chr && b instanceof Chr) return a.c === b.c;
      if (a instanceof EnumVal && b instanceof EnumVal) return a.type === b.type && a.v === b.v;
      if ((a === null || a === undefined) && (b === null || b === undefined)) return true;
      if (a === null || a === undefined) return this.isNullish(b);
      if (b === null || b === undefined) return this.isNullish(a);
      if (a && a.__eq) return a.__eq(b);
      if (this.host.sameObj) { const r = this.host.sameObj(a, b); if (r !== undefined) return r; }
      return a === b;
    }
    binop(op, a, b, line) {
      if (op === "==") return this.equals(a, b);
      if (op === "!=") return !this.equals(a, b);
      if (op === "+" && (typeof a === "string" || typeof b === "string")) return toStr(a) + toStr(b);
      if (op === "+" && (a instanceof Chr && typeof b === "string" || typeof a === "string" && b instanceof Chr)) return toStr(a) + toStr(b);
      if ((op === "+" || op === "-") && (a instanceof Callable || a instanceof Multicast || a === null) && (b instanceof Callable)) {
        const list = a === null ? [] : a instanceof Multicast ? a.list.slice() : [a];
        if (op === "+") list.push(b); else { const i = list.map(x => x.key || x).lastIndexOf(b.key || b); if (i >= 0) list.splice(i, 1); }
        return list.length ? new Multicast(list) : null;
      }
      if (a && a.__binop) { const r = a.__binop(op, b, line); if (r !== undefined) return r; }
      if (b && b.__rbinop) { const r = b.__rbinop(op, a, line); if (r !== undefined) return r; }
      if (typeof a === "boolean" && typeof b === "boolean" && ["&", "|", "^"].includes(op)) return op === "&" ? a && b : op === "|" ? a || b : a !== b;
      if (a instanceof EnumVal && b instanceof EnumVal && ["<", ">", "<=", ">="].includes(op)) { a = a.v; b = b.v; }
      if (a instanceof Chr) a = a.c.charCodeAt(0);
      if (b instanceof Chr) b = b.c.charCodeAt(0);
      if (!isNum(a) || !isNum(b)) {
        if (a === null || b === null) { if (["<", ">", "<=", ">="].includes(op)) return false; }
        fail(`error CS0019: Operator '${op}' cannot be applied to operands of type '${this.typeLabel(a)}' and '${this.typeLabel(b)}'`, line);
      }
      const x = nv(a), y = nv(b);
      switch (op) {
        case "<": return x < y;
        case ">": return x > y;
        case "<=": return x <= y;
        case ">=": return x >= y;
      }
      if (typeof a === "number" && typeof b === "number") {
        switch (op) {
          case "+": return (x + y) | 0;
          case "-": return (x - y) | 0;
          case "*": return Math.imul(x, y);
          case "/": if (y === 0) raise("DivideByZeroException", "Attempted to divide by zero."); return Math.trunc(x / y) | 0;
          case "%": if (y === 0) raise("DivideByZeroException", "Attempted to divide by zero."); return x % y;
          case "&": return x & y;
          case "|": return x | y;
          case "^": return x ^ y;
          case "<<": return x << y;
        }
      }
      const dbl = (a instanceof Num && a.t === "d") || (b instanceof Num && b.t === "d");
      const mk = dbl ? D : F;
      switch (op) {
        case "+": return mk(x + y);
        case "-": return mk(x - y);
        case "*": return mk(x * y);
        case "/": return mk(x / y);
        case "%": return mk(x % y);
      }
      fail(`error CS0019: Operator '${op}' cannot be applied to operands of type '${this.typeLabel(a)}' and '${this.typeLabel(b)}'`, line);
    }
    // أهداف الإسناد: متغير أو حقل أو خاصية أو فهرس
    isVariable(e, env) {
      if (e.k === "id") return true;
      if (e.k === "this") return false;
      if (e.k === "index") { return true; }
      if (e.k === "member") {
        const o = e.obj.k === "this" ? env.self : null;
        if (o instanceof Obj) return !!this.findField(o.cls, e.name);
        try { const ov = this.eval(e.obj, env); return ov instanceof Obj && !!this.findField(ov.cls, e.name); } catch (x) { return false; }
      }
      return false;
    }
    assign(target, v, env, line) {
      if (target.k === "id") return this.setVar(target.name, v, env, line);
      if (target.k === "member") {
        if (target.obj.k === "base") return this.assign({ k: "id", name: target.name, line }, v, env, line);
        const obj = this.eval(target.obj, env);
        if (obj && obj.__struct) {
          // تعديل عضو في struct (Vector3): مسموح للمتغيرات والحقول فقط
          if (!this.isVariable(target.obj, env)) {
            const owner = target.obj.k === "member" ? `${this.typeLabel(this.eval(target.obj.obj, env))}.${target.obj.name}` : target.obj.k === "call" ? `${target.obj.f.name || (target.obj.f.name)}()` : "expression";
            fail(`error CS1612: Cannot modify the return value of '${owner}' because it is not a variable`, line);
          }
          return this.assign(target.obj, obj.__with(target.name, v, line), env, line);
        }
        return this.setMember(obj, target.name, v, line, env);
      }
      if (target.k === "index") {
        const obj = this.eval(target.obj, env), i = this.eval(target.i, env);
        if (obj instanceof CList) { const k = nv(i); if (k < 0 || k >= obj.a.length) raise("ArgumentOutOfRangeException", "Index was out of range. Must be non-negative and less than the size of the collection."); obj.a[k] = this.coerce(v, obj.elem, line); return; }
        if (obj instanceof CArr) { const k = nv(i); if (k < 0 || k >= obj.a.length) raise("IndexOutOfRangeException", "Index was outside the bounds of the array."); obj.a[k] = this.coerce(v, obj.elem, line); return; }
        if (obj instanceof CDict) { obj.m.set(keyOf(i), [i, this.coerce(v, obj.vt, line)]); return; }
        if (obj && obj.__setIndex) return obj.__setIndex(i, v, line);
        if (obj === null) raise("NullReferenceException", "Object reference not set to an instance of an object");
        fail(`error CS0021: Cannot apply indexing with [] to an expression of type '${this.typeLabel(obj)}'`, line);
      }
    }
    setMember(obj, name, v, line, env) {
      if (obj === null || obj === undefined) raise("NullReferenceException", "Object reference not set to an instance of an object");
      if (this.host.checkAlive) this.host.checkAlive(obj, line);
      if (obj instanceof TypeRef && !obj.cls && obj.native && obj.native.__set) { if (obj.native.__set(name, v, line) !== false) return; fail(`error CS0200: Property or indexer '${obj.name}.${name}' cannot be assigned to -- it is read only`, line); }
      if (obj instanceof TypeRef && obj.cls) {
        const c = obj.cls;
        if (c.statics.has(name)) { const fd = c.fields.find(f => f.name === name); c.statics.set(name, this.coerce(v, fd && fd.type, line)); return; }
        const pr = this.findProp(c, name);
        if (pr) return this.setProp(null, pr, v, line);
        fail(`error CS0117: '${c.name}' does not contain a definition for '${name}'`, line);
      }
      if (obj instanceof Obj) {
        const fd = this.findField(obj.cls, name);
        if (fd && !fd.f.isStatic) {
          if (fd.f.mods.has("private") && env && env.cls && !env.self?.cls?.allBases?.has(fd.cls.name) && env.cls !== fd.cls) fail(`error CS0122: '${obj.cls.name}.${name}' is inaccessible due to its protection level`, line);
          obj.f.set(name, this.coerce(v, fd.f.type, line)); return;
        }
        const pr = this.findProp(obj.cls, name);
        if (pr) return this.setProp(obj, pr, v, line);
        if (this.host.objSet && this.host.objSet(obj, name, v, line)) return;
        fail(`error CS1061: '${obj.cls.name}' does not contain a definition for '${name}'`, line);
      }
      if (obj.__set) { if (obj.__set(name, v, line) !== false) return; }
      fail(`error CS1061: '${this.typeLabel(obj)}' does not contain a definition for '${name}'`, line);
    }
    getMember(obj, name, line, env, targs) {
      if (obj === null || obj === undefined) raise("NullReferenceException", "Object reference not set to an instance of an object");
      if (this.host.checkAlive) this.host.checkAlive(obj, line);
      if (obj instanceof TypeRef) {
        if (obj.cls) {
          const so = obj.cls.chain.find(k => k.statics.has(name) || k.statics.has("<p>" + name));
          if (so) return so.statics.has(name) ? so.statics.get(name) : so.statics.get("<p>" + name);
          const pr = this.findProp(obj.cls, name);
          if (pr) return this.getProp(null, pr, line);
          const nst = obj.cls.nested.find(x => x.name === name);
          if (nst) return new TypeRef(name, this.classes.get(name));
          if (this.hasMethod(obj.cls, name)) { const c = new Callable((...a) => this.callStatic(obj.cls, name, a, line), name); c.method = name; c.cls = obj.cls; return c; }
          fail(`error CS0117: '${obj.name}' does not contain a definition for '${name}'`, line);
        }
        if (this.enums.has(obj.name)) {
          const e = this.enums.get(obj.name);
          if (!e.members.has(name)) fail(`error CS0117: '${obj.name}' does not contain a definition for '${name}'`, line);
          return new EnumVal(obj.name, name, e.members.get(name));
        }
        if (obj.native && obj.native.__get) { const v = obj.native.__get(name, line); if (v !== undefined) return v; }
        fail(`error CS0117: '${obj.name}' does not contain a definition for '${name}'`, line);
      }
      if (obj instanceof Obj) {
        if (obj.f.has(name)) {
          const fd = this.findField(obj.cls, name);
          if (fd && fd.f.mods.has("private") && env && env.self !== obj && env.cls && !obj.cls.chain.includes(env.cls)) fail(`error CS0122: '${obj.cls.name}.${name}' is inaccessible due to its protection level`, line);
          return obj.f.get(name);
        }
        const pr = this.findProp(obj.cls, name);
        if (pr) return this.getProp(obj, pr, line);
        const so = this.staticOwner(obj.cls, name);
        if (so) fail(`error CS0176: Member '${obj.cls.name}.${name}' cannot be accessed with an instance reference; qualify it with a type name instead`, line);
        if (this.host.objGet) { const v = this.host.objGet(obj, name, line); if (v !== undefined) return v; }
        if (this.hasMethod(obj.cls, name)) return new Callable((...a) => this.callMethod(obj, name, a, null, line), name);
        fail(`error CS1061: '${obj.cls.name}' does not contain a definition for '${name}' and no accessible extension method '${name}' accepting a first argument of type '${obj.cls.name}' could be found`, line);
      }
      if (typeof obj === "string") { if (name === "Length") return obj.length; }
      if (obj instanceof CList) { if (name === "Count") return obj.a.length; if (name === "Capacity") return Math.max(4, obj.a.length); }
      if (obj instanceof CArr) { if (name === "Length") return obj.a.length; }
      if (obj instanceof CDict) { if (name === "Count") return obj.m.size; if (name === "Keys") return new CList([...obj.m.values()].map(x => x[0]), obj.kt); if (name === "Values") return new CList([...obj.m.values()].map(x => x[1]), obj.vt); }
      if (obj instanceof Enumerator) { if (name === "Current") return obj.Current; }
      if (obj.__get) { const v = obj.__get(name, line); if (v !== undefined) return v; }
      fail(`error CS1061: '${this.typeLabel(obj)}' does not contain a definition for '${name}'`, line);
    }
    callStatic(cls, name, args, line, targs) {
      const f = this.findMethod(cls, name, args.length, args);
      if (!f) fail(`error CS0117: '${cls.name}' does not contain a definition for '${name}'`, line);
      return this.invoke(f.m, f.cls, null, args, line);
    }
    callMethod(obj, name, args, targs, line, env, fromBase) {
      if (obj instanceof Obj) {
        const startCls = fromBase || obj.cls;
        const f = this.findMethod(startCls, name, args.length, args);
        if (f) {
          if (f.m.mods.has("private") && env && env.self !== obj && env.cls && !obj.cls.chain.includes(env.cls)) fail(`error CS0122: '${obj.cls.name}.${name}(${f.m.params.map(p => p.type.name).join(", ")})' is inaccessible due to its protection level`, line);
          return this.invoke(f.m, f.cls, obj, args, line);
        }
        if (obj.f.has(name) || this.findProp(obj.cls, name)) return this.callValue(this.getMember(obj, name, line, env), args, line);
        if (this.host.objCall) { const r = this.host.objCall(obj, name, args, targs, line); if (r !== undefined) return r.v; }
        if (name === "ToString") return toStr(obj);
        if (name === "GetType") return new TypeRef(obj.cls.name, obj.cls);
        if (name === "Equals") return obj === args[0];
        fail(`error CS1061: '${obj.cls.name}' does not contain a definition for '${name}' and no accessible extension method '${name}' accepting a first argument of type '${obj.cls.name}' could be found`, line);
      }
      return this.builtinCall(obj, name, args, targs, line);
    }
    builtinCall(obj, name, args, targs, line) {
      const A = args;
      if (obj instanceof TypeRef) {
        if (obj.cls && name === "StaticClass") return obj;   // ACoin::StaticClass() في Unreal
        if (obj.cls && !this.hasMethod(obj.cls, name) && this.host.typeCall) { const r = this.host.typeCall(obj, name, args, targs, line); if (r !== undefined) return r.v; }
        if (obj.cls) return this.callStatic(obj.cls, name, args, line, targs);
        if (this.enums.has(obj.name)) fail(`error CS0117: '${obj.name}' does not contain a definition for '${name}'`, line);
        if (obj.native && obj.native.__call) { const r = obj.native.__call(name, args, targs, line); if (r !== undefined) return r.v; }
        fail(`error CS0117: '${obj.name}' does not contain a definition for '${name}'`, line);
      }
      if (obj instanceof Callable || obj instanceof Multicast) { if (name === "Invoke") return this.callValue(obj, args, line); }
      if (name === "ToString") {
        if (isNum(obj)) return A.length ? formatNum(obj, A[0]) : toStr(obj);
        return obj && obj.__toString ? obj.__toString(A[0]) : toStr(obj);
      }
      if (name === "Equals" && A.length === 1) return this.equals(obj, A[0]);
      if (name === "CompareTo" && isNum(obj)) return Math.sign(nv(obj) - nv(A[0]));
      if (name === "GetHashCode") return 0;
      if (typeof obj === "string") return this.strCall(obj, name, A, line);
      if (obj instanceof CList || obj instanceof CArr) { const r = this.listCall(obj, name, A, line); if (r !== undefined) return r.v; }
      if (obj instanceof CDict) {
        switch (name) {
          case "Add": { const k = keyOf(A[0]); if (obj.m.has(k)) raise("ArgumentException", `An item with the same key has already been added. Key: ${toStr(A[0])}`); obj.m.set(k, [A[0], this.coerce(A[1], obj.vt, line)]); return null; }
          case "ContainsKey": return obj.m.has(keyOf(A[0]));
          case "ContainsValue": return [...obj.m.values()].some(x => this.equals(x[1], A[0]));
          case "Remove": return obj.m.delete(keyOf(A[0]));
          case "Clear": obj.m.clear(); return null;
          case "TryGetValue": { const e = obj.m.get(keyOf(A[0])); A[1].set(e ? e[1] : this.defaultFor(obj.vt)); return !!e; }
          case "TryAdd": { const k = keyOf(A[0]); if (obj.m.has(k)) return false; obj.m.set(k, [A[0], A[1]]); return true; }
          case "GetValueOrDefault": { const e = obj.m.get(keyOf(A[0])); return e ? e[1] : (A.length > 1 ? A[1] : this.defaultFor(obj.vt)); }
        }
      }
      if (obj instanceof Enumerator) { if (name === "MoveNext") return obj.MoveNext(); if (name === "Reset") { obj.gen = null; obj.done = false; return null; } }
      if (obj && obj.__call) { const r = obj.__call(name, A, targs, line); if (r !== undefined) return r.v; }
      if (obj === null || obj === undefined) raise("NullReferenceException", "Object reference not set to an instance of an object");
      fail(`error CS1061: '${this.typeLabel(obj)}' does not contain a definition for '${name}'`, line);
    }
    strCall(s, name, A, line) {
      const range = (a, l) => { if (a < 0 || a > s.length || (l !== undefined && (l < 0 || a + l > s.length))) raise("ArgumentOutOfRangeException", "Index and length must refer to a location within the string."); };
      switch (name) {
        case "ToUpper": case "ToUpperInvariant": return s.toUpperCase();
        case "Len": return s.length;
        case "IsEmpty": return s.length === 0;
        case "ToLower": case "ToLowerInvariant": return s.toLowerCase();
        case "Contains": return s.includes(toStr(A[0]));
        case "StartsWith": return s.startsWith(toStr(A[0]));
        case "EndsWith": return s.endsWith(toStr(A[0]));
        case "IndexOf": return s.indexOf(toStr(A[0]));
        case "LastIndexOf": return s.lastIndexOf(toStr(A[0]));
        case "Substring": range(A[0], A[1]); return A.length > 1 ? s.substr(A[0], A[1]) : s.slice(A[0]);
        case "Replace": return s.split(toStr(A[0])).join(toStr(A[1]));
        case "Split": return new CArr(s.split(toStr(A[0])), { name: "string", args: [] });
        case "Trim": return s.trim();
        case "TrimStart": return s.trimStart();
        case "TrimEnd": return s.trimEnd();
        case "PadLeft": return s.padStart(A[0], A[1] ? toStr(A[1]) : " ");
        case "PadRight": return s.padEnd(A[0], A[1] ? toStr(A[1]) : " ");
        case "Insert": return s.slice(0, A[0]) + A[1] + s.slice(A[0]);
        case "Remove": return A.length > 1 ? s.slice(0, A[0]) + s.slice(A[0] + A[1]) : s.slice(0, A[0]);
        case "ToCharArray": return new CArr([...s].map(c => new Chr(c)), { name: "char", args: [] });
        case "Equals": return s === A[0];
      }
      fail(`error CS1061: 'string' does not contain a definition for '${name}'`, line);
    }
    listCall(L, name, A, line) {
      const a = L.a, isList = L instanceof CList;
      const fn = f => (...x) => this.callValue(f, x, line);
      const bump = () => { L.ver = (L.ver || 0) + 1; };
      const mk = (arr, elem = L.elem) => new CList(arr, elem);
      const one = (arr, what) => { if (!arr.length) raise("InvalidOperationException", "Sequence contains no elements"); return arr[0]; };
      const numSum = arr => arr.reduce((s, x) => this.binop("+", s, x, line), 0);
      if (isList) switch (name) {
        case "Add": a.push(this.coerce(A[0], L.elem, line)); bump(); return { v: null };
        case "AddRange": for (const x of this.iterate(A[0], line)) a.push(x); bump(); return { v: null };
        case "Insert": if (A[0] < 0 || A[0] > a.length) raise("ArgumentOutOfRangeException", "Index must be within the bounds of the List."); a.splice(A[0], 0, A[1]); bump(); return { v: null };
        case "Remove": { const i = a.findIndex(x => this.equals(x, A[0])); if (i >= 0) { a.splice(i, 1); bump(); } return { v: i >= 0 }; }
        case "RemoveAt": if (A[0] < 0 || A[0] >= a.length) raise("ArgumentOutOfRangeException", "Index was out of range. Must be non-negative and less than the size of the collection."); a.splice(A[0], 1); bump(); return { v: null };
        case "RemoveAll": { const f = fn(A[0]); const before = a.length; L.a = a.filter(x => !this.truthy(f(x))); bump(); return { v: before - L.a.length }; }
        case "Clear": a.length = 0; bump(); return { v: null };
        case "Sort": if (A.length) a.sort((x, y) => nv(fn(A[0])(x, y))); else a.sort((x, y) => isNum(x) ? nv(x) - nv(y) : toStr(x) < toStr(y) ? -1 : toStr(x) > toStr(y) ? 1 : 0); bump(); return { v: null };
        case "Reverse": a.reverse(); bump(); return { v: null };
        case "ToArray": return { v: new CArr(a.slice(), L.elem) };
        case "Find": { if (!(A[0] instanceof Callable)) return { v: a.findIndex(x => this.equals(x, A[0])) }; const f = fn(A[0]); const x = a.find(y => this.truthy(f(y))); return { v: x === undefined ? this.defaultFor(L.elem) : x }; }
        case "FindIndex": { const f = fn(A[0]); return { v: a.findIndex(y => this.truthy(f(y))) }; }
        case "FindAll": { const f = fn(A[0]); return { v: mk(a.filter(y => this.truthy(f(y)))) }; }
        case "Exists": { const f = fn(A[0]); return { v: a.some(y => this.truthy(f(y))) }; }
        case "ForEach": { const f = fn(A[0]); a.slice().forEach(x => f(x)); return { v: null }; }
      }
      switch (name) {
        case "Num": case "Length": return { v: a.length };
        case "Get": { const k = nv(A[0]); if (k < 0 || k >= a.length) raise("ArgumentOutOfRangeException", `Attempted to access index ${k} from array of length ${a.length}`); return { v: a[k] }; }
        case "IsValidIndex": return { v: nv(A[0]) >= 0 && nv(A[0]) < a.length };
        case "IsEmpty": return { v: a.length === 0 };
        case "Empty": a.length = 0; bump(); return { v: null };
        case "Find": if (!isList || !(A[0] instanceof Callable)) return { v: a.findIndex(x => this.equals(x, A[0])) }; break;
        case "AddUnique": if (!a.some(x => this.equals(x, A[0]))) { a.push(A[0]); bump(); return { v: a.length - 1 }; } return { v: a.findIndex(x => this.equals(x, A[0])) };
        case "Contains": return { v: a.some(x => this.equals(x, A[0])) };
        case "IndexOf": return { v: a.findIndex(x => this.equals(x, A[0])) };
        // LINQ (using System.Linq)
        case "Count": return { v: A.length ? a.filter(x => this.truthy(fn(A[0])(x))).length : a.length };
        case "Sum": return { v: numSum(A.length ? a.map(fn(A[0])) : a) };
        case "Max": { const arr = A.length ? a.map(fn(A[0])) : a; one(arr); return { v: arr.reduce((m, x) => nv(x) > nv(m) ? x : m) }; }
        case "Min": { const arr = A.length ? a.map(fn(A[0])) : a; one(arr); return { v: arr.reduce((m, x) => nv(x) < nv(m) ? x : m) }; }
        case "Average": { const arr = A.length ? a.map(fn(A[0])) : a; one(arr); const s = arr.reduce((t, x) => t + nv(x), 0) / arr.length; return { v: arr.every(x => x instanceof Num && x.t === "f") ? F(s) : D(s) }; }
        case "Any": return { v: A.length ? a.some(x => this.truthy(fn(A[0])(x))) : a.length > 0 };
        case "All": return { v: a.every(x => this.truthy(fn(A[0])(x))) };
        case "Where": return { v: mk(a.filter(x => this.truthy(fn(A[0])(x)))) };
        case "Select": return { v: mk(a.map(fn(A[0])), null) };
        case "OrderBy": { const f = fn(A[0]); return { v: mk(a.slice().sort((x, y) => { const p = f(x), q = f(y); return isNum(p) ? nv(p) - nv(q) : toStr(p) < toStr(q) ? -1 : toStr(p) > toStr(q) ? 1 : 0; })) }; }
        case "OrderByDescending": { const f = fn(A[0]); return { v: mk(a.slice().sort((x, y) => { const p = f(x), q = f(y); return isNum(p) ? nv(q) - nv(p) : toStr(q) < toStr(p) ? -1 : toStr(q) > toStr(p) ? 1 : 0; })) }; }
        case "First": { const arr = A.length ? a.filter(x => this.truthy(fn(A[0])(x))) : a; return { v: one(arr) }; }
        case "FirstOrDefault": { const arr = A.length ? a.filter(x => this.truthy(fn(A[0])(x))) : a; return { v: arr.length ? arr[0] : this.defaultFor(L.elem) }; }
        case "Last": { const arr = A.length ? a.filter(x => this.truthy(fn(A[0])(x))) : a; one(arr); return { v: arr[arr.length - 1] }; }
        case "ToList": return { v: mk(a.slice()) };
        case "Distinct": return { v: mk(a.filter((x, i) => a.findIndex(y => this.equals(x, y)) === i)) };
        case "Take": return { v: mk(a.slice(0, A[0])) };
        case "Skip": return { v: mk(a.slice(A[0])) };
      }
      return undefined;
    }
    eval(e, env, expected) {
      switch (e.k) {
        case "lit": return e.v;
        case "istr": return e.parts.map(p => typeof p === "string" ? p : p.fmt ? formatNum(this.eval(p.e, env), p.fmt) : toStr(this.eval(p.e, env))).join("");
        case "id": {
          if (e.targs) return this.host.global(e.name, e.line, e.targs);
          return this.getVar(e.name, env, e.line);
        }
        case "this": return env.self;
        case "base": return env.self;
        case "member": {
          if (e.obj.k === "base") {
            const bc = env.cls && env.cls.baseCls;
            if (bc) { const pr = this.findProp(bc, e.name); if (pr) return this.getProp(env.self, pr, e.line); }
            return this.getMember(env.self, e.name, e.line, env);
          }
          const obj = this.eval(e.obj, env);
          if (e.cond && this.isNullish(obj)) return null;
          return this.getMember(obj, e.name, e.line, env, e.targs);
        }
        case "call": return this.evalCall(e, env);
        case "index": {
          const obj = this.eval(e.obj, env), i = this.eval(e.i, env);
          if (obj instanceof CList) { const k = nv(i); if (k < 0 || k >= obj.a.length) raise("ArgumentOutOfRangeException", "Index was out of range. Must be non-negative and less than the size of the collection."); return obj.a[k]; }
          if (obj instanceof CArr) { const k = nv(i); if (k < 0 || k >= obj.a.length) raise("IndexOutOfRangeException", "Index was outside the bounds of the array."); return obj.a[k]; }
          if (obj instanceof CDict) { const x = obj.m.get(keyOf(i)); if (!x) raise("KeyNotFoundException", `The given key '${toStr(i)}' was not present in the dictionary.`); return x[1]; }
          if (typeof obj === "string") { const k = nv(i); if (k < 0 || k >= obj.length) raise("IndexOutOfRangeException", "Index was outside the bounds of the array."); return new Chr(obj[k]); }
          if (obj && obj.__index) return obj.__index(i, e.line);
          if (obj === null) raise("NullReferenceException", "Object reference not set to an instance of an object");
          fail(`error CS0021: Cannot apply indexing with [] to an expression of type '${this.typeLabel(obj)}'`, e.line);
        }
        case "assign": {
          let v = this.eval(e.e, env);
          if (e.op !== "=") {
            const cur = this.eval(e.target, env);
            if (e.op === "??=") { if (!this.isNullish(cur)) return cur; }
            else {
              v = this.binop(e.op.slice(0, -1), cur, v, e.line);
              // x += 1.5f حيث x من نوع int: التحويل ضمني في العمليات المركبة
              if (typeof cur === "number" && v instanceof Num) v = Math.trunc(v.v) | 0;
              if (cur instanceof Num && cur.t === "f" && v instanceof Num) v = F(v.v);
            }
          }
          this.assign(e.target, v, env, e.line);
          return v;
        }
        case "pre": case "post": {
          const cur = this.eval(e.target, env);
          if (!isNum(cur)) fail(`error CS0023: Operator '${e.op}' cannot be applied to operand of type '${this.typeLabel(cur)}'`, e.line);
          const nx = this.binop(e.op === "++" ? "+" : "-", cur, 1, e.line);
          this.assign(e.target, nx, env, e.line);
          return e.k === "pre" ? nx : cur;
        }
        case "unary": {
          const v = this.eval(e.e, env);
          if (e.op === "!" && v && v.__bool) return !v.__bool();
          if (e.op === "!") { if (typeof v !== "boolean") fail(`error CS0023: Operator '!' cannot be applied to operand of type '${this.typeLabel(v)}'`, e.line); return !v; }
          if (v && v.__neg && e.op === "-") return v.__neg();
          if (!isNum(v)) fail(`error CS0023: Operator '${e.op}' cannot be applied to operand of type '${this.typeLabel(v)}'`, e.line);
          if (e.op === "+") return v;
          if (e.op === "~") return ~nv(v);
          return typeof v === "number" ? -v | 0 : new Num(-v.v, v.t);
        }
        case "and": return this.truthy(this.eval(e.l, env), e.line) && this.truthy(this.eval(e.r, env), e.line);
        case "or": return this.truthy(this.eval(e.l, env), e.line) || this.truthy(this.eval(e.r, env), e.line);
        case "bin": return this.binop(e.op, this.eval(e.l, env), this.eval(e.r, env), e.line);
        case "tern": return this.truthy(this.eval(e.c, env), e.line) ? this.eval(e.a, env) : this.eval(e.b, env);
        case "coalesce": { const l = this.eval(e.l, env); return l === null || l === undefined ? this.eval(e.r, env) : l; }
        case "cast": return this.cast(this.eval(e.e, env), e.type, e.line);
        case "is": { const v = this.eval(e.e, env); const ok = this.typeMatches(v, e.type); if (ok && e.bind) env.scopes[env.scopes.length - 1].set(e.bind, { v, type: e.type }); return e.not ? !ok : ok; }
        case "isnull": { const v = this.eval(e.e, env); const r = v === null || v === undefined; return e.not ? !r : r; }
        case "as": { const v = this.eval(e.e, env); return this.typeMatches(v, e.type) ? v : null; }
        case "typeof": return new TypeRef(e.type.name, this.classes.get(e.type.name));
        case "default": return this.defaultFor(e.type);
        case "lambda": {
          const captured = env.scopes.slice();
          return new Callable((...a) => {
            const scope = new Map(e.params.map((p, i) => [p, { v: a[i] === undefined ? null : a[i] }]));
            const env2 = { self: env.self, cls: env.cls, scopes: [...captured, scope], fn: env.fn };
            if (e.e) return this.eval(e.e, env2);
            return this.runBlock(e.body, env2) ?? null;
          });
        }
        case "arrlit": {
          const items = e.items.map(x => this.eval(x, env));
          const elemName = e.type ? e.type.name : null;
          if (e.type && !e.type.array && (e.type.name === "List" || e.type.name === "TArray")) return new CList(items.map(x => this.coerce(x, e.type.args[0], e.line)), e.type.args[0]);
          const elem = elemName ? { name: elemName, args: e.type.args || [] } : null;
          return new CArr(elem ? items.map(x => this.coerce(x, elem, e.line)) : items, elem);
        }
        case "newarr": {
          const n = nv(this.eval(e.size, env));
          if (n < 0) raise("OverflowException", "Arithmetic operation resulted in an overflow.");
          const elem = { name: e.type.name, args: e.type.args };
          return new CArr(Array.from({ length: n }, () => this.defaultFor(elem)), elem);
        }
        case "new": return this.evalNew(e, env, expected);
      }
      fail("تعبير غير مدعوم: " + e.k, e.line);
    }
    cast(v, type, line) {
      const n = type.name;
      if (INTS.has(n)) {
        if (v instanceof EnumVal) return v.v;
        if (v instanceof Chr) return v.c.charCodeAt(0);
        if (isNum(v)) { const x = nv(v); if (!isFinite(x)) return -2147483648; return Math.trunc(x) | 0; }
        fail(`error CS0030: Cannot convert type '${this.typeLabel(v)}' to '${n}'`, line);
      }
      if (n === "float") { if (isNum(v) || v instanceof Chr) return F(nv(v)); fail(`error CS0030: Cannot convert type '${this.typeLabel(v)}' to 'float'`, line); }
      if (n === "double") { if (isNum(v)) return D(nv(v)); fail(`error CS0030: Cannot convert type '${this.typeLabel(v)}' to 'double'`, line); }
      if (n === "char") return new Chr(String.fromCharCode(nv(v)));
      if (n === "string") { if (typeof v === "string" || v === null) return v; fail(`error CS0030: Cannot convert type '${this.typeLabel(v)}' to 'string'`, line); }
      if (this.enums.has(n)) { if (typeof v === "number") { const e = this.enums.get(n); const k = [...e.members].find(([, x]) => x === v); return new EnumVal(n, k ? k[0] : String(v), v); } return v; }
      if (this.classes.has(n) && v instanceof Obj) { if (!this.typeMatches(v, type)) raise("InvalidCastException", `Specified cast is not valid.`); return v; }
      const h = this.host.cast && this.host.cast(v, type, line);
      if (h !== undefined) return h;
      return v;
    }
    evalNew(e, env, expected) {
      const type = e.type || expected;
      if (!type) fail("error CS8754: There is no target type for 'new()'", e.line);
      const n = type.name;
      const args = e.args.map(a => this.eval(a, env));
      let obj;
      if (this.classes.has(n)) obj = this.instantiate(this.classes.get(n), args, e.line);
      else if (n === "List" || n === "TArray" || n === "HashSet" || n === "Queue" || n === "Stack" || n === "LinkedList") { obj = new CList(args.length && (args[0] instanceof CList || args[0] instanceof CArr) ? args[0].a.slice() : [], type.args[0] || null); obj.kind = n; }
      else if (n === "Dictionary" || n === "TMap") obj = new CDict(type.args);
      else if (n === "Exception" || /Exception$/.test(n)) obj = { __exception: true, __type: n, type: n, message: args.length ? toStr(args[0]) : `Exception of type 'System.${n}' was thrown.` };
      else {
        const h = this.host.newNative && this.host.newNative(n, args, type, e.line);
        if (h === undefined) fail(`error CS0246: The type or namespace name '${n}' could not be found (are you missing a using directive or an assembly reference?)`, e.line);
        obj = h;
      }
      if (e.init) {
        for (const it of e.init) {
          if (it.name) this.setMember(obj, it.name, this.eval(it.e, env), e.line, env);
          else if (it.pair) { const k = this.eval(it.pair[0], env), v = this.eval(it.pair[1], env); if (obj instanceof CDict) obj.m.set(keyOf(k), [k, this.coerce(v, obj.vt, e.line)]); }
          else if (obj instanceof CList) obj.a.push(this.coerce(this.eval(it.e, env), obj.elem, e.line));
        }
      }
      return obj;
    }
    outRef(a, env) {
      if (a.k === "outdecl") {
        const sc = env.scopes[env.scopes.length - 1];
        const slot = { v: this.defaultFor(a.type), type: a.type.name === "var" ? null : a.type };
        sc.set(a.name, slot);
        return { set: v => { slot.v = slot.type ? this.coerce(v, slot.type) : v; if (!slot.type) slot.type = this.typeOfValue(v); }, get: () => slot.v };
      }
      return { set: v => this.assign(a.target, v, env, a.target.line), get: () => this.eval(a.target, env) };
    }
    evalCall(e, env) {
      const args = e.args.map(a => a.k === "outdecl" || a.k === "out" ? this.outRef(a, env) : this.eval(a, env));
      const f = e.f;
      if (f.k === "id") {
        if (f.name === "nameof") return e.args[0].name || (e.args[0].k === "member" ? e.args[0].name : "");
        const loc = this.lookupLocal(env, f.name);
        if (loc) return this.callValue(loc.ref ? loc.ref.get() : loc.v, args, e.line);
        const self = env.self;
        if (self instanceof Obj) {
          const m = this.findMethod(self.cls, f.name, args.length, args);
          if (m) return this.invoke(m.m, m.cls, m.m.mods.has("static") ? null : self, args, e.line);
          if (self.f.has(f.name)) return this.callValue(self.f.get(f.name), args, e.line);
        }
        if (env.cls) {
          for (let c = env.cls; c; c = c.outer ? this.classes.get(c.outer) : null) {
            const m = this.findMethod(c, f.name, args.length, args);
            if (m && (m.m.mods.has("static") || !(self instanceof Obj))) return this.invoke(m.m, m.cls, null, args, e.line);
            if (m && self instanceof Obj && !self.cls.chain.includes(c)) fail(`error CS0120: An object reference is required for the non-static field, method, or property '${c.name}.${f.name}'`, e.line);
          }
          const so = this.staticOwner(env.cls, f.name);
          if (so) return this.callValue(so.statics.get(f.name), args, e.line);
        }
        if (self instanceof Obj && this.host.selfCall) { const r = this.host.selfCall(self, f.name, args, f.targs, e.line); if (r !== undefined) return r.v; }
        if (this.host.globalCall) { const r = this.host.globalCall(f.name, args, f.targs, e.line, env); if (r !== undefined) return r.v; }
        fail(`error CS0103: The name '${f.name}' does not exist in the current context`, e.line);
      }
      if (f.k === "member") {
        if (f.obj.k === "base") {
          const bc = env.cls && env.cls.baseCls;
          if (bc) { const m = this.findMethod(bc, f.name, args.length, args); if (m) return this.invoke(m.m, m.cls, env.self, args, e.line); }
          if (this.host.baseCall) { const r = this.host.baseCall(env.self, f.name, args, e.line); if (r !== undefined) return r.v; }
          return null;
        }
        // Base::Method() في C++: استدعاء نسخة صنف أب على this نفسه
        if (this.cpp && f.obj.k === "id" && this.classes.has(f.obj.name) && env.self instanceof Obj && env.self.cls.allBases.has(f.obj.name) && !this.lookupLocal(env, f.obj.name)) {
          const m = this.findMethod(this.classes.get(f.obj.name), f.name, args.length, args);
          if (m && !m.m.mods.has("static")) return this.invoke(m.m, m.cls, env.self, args, e.line);
        }
        const obj = this.eval(f.obj, env);
        if (f.cond && this.isNullish(obj)) return null;
        if (obj === null || obj === undefined) raise("NullReferenceException", "Object reference not set to an instance of an object");
        if (this.host.checkAlive) this.host.checkAlive(obj, e.line);
        return this.callMethod(obj, f.name, args, f.targs, e.line, env);
      }
      return this.callValue(this.eval(f, env), args, e.line);
    }
  }

  Object.assign(CW.cs, { Runtime, Enumerator, Ret });
})(typeof window !== "undefined" ? window : globalThis);
