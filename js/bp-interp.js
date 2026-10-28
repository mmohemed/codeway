// Blueprints نصية: كل سطر عقدة (Node) بنفس اسمها في محرر Unreal، والمسافة البادئة تعني "متصل بمخرج التنفيذ"
// تُترجم إلى نفس شجرة التنفيذ التي يشغّلها مفسّر C# و C++ (js/cs-interp.js)، والأحداث تعمل كـ coroutines (لعقدة Delay)
(function (root) {
  const CW = root.CW = root.CW || {};
  const fail = (m, line) => { throw new CW.cs.CSError(line ? `${m} (السطر ${line})` : m); };

  // أنواع متغيرات Blueprint ← أنواع C++ في Unreal (Float في UE5 دقته مزدوجة double)
  const TYPES = { Boolean: "bool", Integer: "int32", Integer64: "int64", Byte: "uint8", Float: "double", String: "FString", Name: "FName", Text: "FText", Vector: "FVector", Rotator: "FRotator", Transform: "FTransform", Actor: "AActor", Object: "UObject", Class: "UClass", Character: "ACharacter", Pawn: "APawn" };
  const typeOf = (s, line) => {
    s = s.trim();
    const arr = /^(.+?)\s*\[\]$/.exec(s) || /^Array\s*<\s*(.+)\s*>$/.exec(s);
    if (arr) return { name: "TArray", args: [typeOf(arr[1], line)], array: 0 };
    const name = TYPES[s] || s;
    if (!/^\w+$/.test(name)) fail(`نوع غير معروف: ${s}`, line);
    return { name, args: [], array: 0 };
  };
  // الأحداث الجاهزة ← الدوال التي يستدعيها المحرك (ومعاملاتها الافتراضية)
  const EVENTS = {
    BeginPlay: ["ReceiveBeginPlay", []],
    Tick: ["ReceiveTick", [["DeltaSeconds", "double"]]],
    ActorBeginOverlap: ["ReceiveActorBeginOverlap", [["OtherActor", "AActor"]]],
    ActorEndOverlap: ["ReceiveActorEndOverlap", [["OtherActor", "AActor"]]],
    Hit: ["ReceiveHit", [["OtherActor", "AActor"]]],
    AnyDamage: ["ReceiveAnyDamage", [["Damage", "double"]]],
    Destroyed: ["ReceiveDestroyed", []]
  };

  function compile(src) {
    const expr = (text, line) => {
      try { return CW.cs.parse(text, { expression: true, cpp: false }); }
      catch (e) { fail(`تعبير غير صحيح "${text.trim()}": ${e.message.replace(/ \(السطر \d+\)$/, "")}`, line); }
    };
    // الأسطر مع مستوى المسافة البادئة
    const lines = [];
    src.replace(/\t/g, "    ").split("\n").forEach((raw, i) => {
      const t = raw.replace(/\/\/.*$/, "").trimEnd();
      if (!t.trim()) return;
      lines.push({ ind: t.match(/^ */)[0].length, text: t.trim(), line: i + 1 });
    });
    const types = [];
    let cls = null, uid = 0;
    let i = 0;
    // كتلة: كل الأسطر الأعمق من ind
    function block(ind, ctx) {
      const out = [];
      while (i < lines.length && lines[i].ind > ind) out.push(...stmt(lines[i].ind, ctx));
      return out;
    }
    function pins(ind, names, ctx) {
      // مخارج مسماة تحت العقدة: True: / False: / Then 0: / Succeeded: / Failed: / Loop Body: / Completed:
      const got = {};
      const childInd = i < lines.length && lines[i].ind > ind ? lines[i].ind : null;
      while (childInd !== null && i < lines.length && lines[i].ind === childInd) {
        const m = /^([\w ]+):$/.exec(lines[i].text);
        if (!m || !names.some(n => n.test(m[1].trim()))) break;
        const key = m[1].trim();
        i++;
        got[key] = block(childInd, ctx);
      }
      return got;
    }
    function stmt(ind, ctx) {
      const L = lines[i], t = L.text, line = L.line;
      i++;
      let m;
      if ((m = /^Set\s+([\w.\[\]]+)\s*=\s*(.+)$/.exec(t))) return [{ k: "expr", e: { k: "assign", op: "=", target: expr(m[1], line), e: expr(m[2], line), line }, line }];
      if ((m = /^Local\s+(\w+)\s*:\s*([^=]+?)(?:\s*=\s*(.+))?$/.exec(t))) {
        const type = typeOf(m[2], line);
        return [{ k: "local", type, decls: [{ name: m[1], init: m[3] ? expr(m[3], line) : null }], line }];
      }
      if ((m = /^Branch\s+(.+)$/.exec(t))) {
        const p = pins(ind, [/^True$/, /^False$/], ctx);
        if (!p.True && !p.False) fail("عقدة Branch تحتاج مخرج True: أو False: تحتها", line);
        return [{ k: "if", c: expr(m[1], line), a: { k: "block", body: p.True || [] }, b: { k: "block", body: p.False || [] }, line }];
      }
      if (t === "Sequence") {
        const p = pins(ind, [/^Then \d+$/], ctx);
        return Object.keys(p).sort((a, b) => +a.split(" ")[1] - +b.split(" ")[1]).map(k => ({ k: "block", body: p[k] }));
      }
      if ((m = /^ForLoop\s+(\w+)\s+from\s+(.+?)\s+to\s+(.+)$/.exec(t))) {
        const v = m[1];
        return [{ k: "for", init: [{ k: "local", type: { name: "int32", args: [] }, decls: [{ name: v, init: expr(m[2], line) }], line }], c: { k: "bin", op: "<=", l: { k: "id", name: v, line }, r: expr(m[3], line), line }, iter: [{ k: "post", op: "++", target: { k: "id", name: v, line }, line }], body: { k: "block", body: block(ind, ctx) }, line }];
      }
      if ((m = /^ForEachLoop\s+(\w+)(?:\s*,\s*(\w+))?\s+in\s+(.+)$/.exec(t))) {
        const body = block(ind, ctx);
        if (!m[2]) return [{ k: "foreach", type: { name: "var", args: [] }, name: m[1], iter: expr(m[3], line), body: { k: "block", body }, line }];
        const idx = m[2];
        return [{ k: "block", body: [
          { k: "local", type: { name: "int32", args: [] }, decls: [{ name: idx, init: { k: "lit", v: -1 } }], line },
          { k: "foreach", type: { name: "var", args: [] }, name: m[1], iter: expr(m[3], line), body: { k: "block", body: [{ k: "expr", e: { k: "post", op: "++", target: { k: "id", name: idx, line }, line }, line }, ...body] }, line }
        ] }];
      }
      if ((m = /^WhileLoop\s+(.+)$/.exec(t))) return [{ k: "while", c: expr(m[1], line), body: { k: "block", body: block(ind, ctx) }, line }];
      if ((m = /^Delay\s+(.+)$/.exec(t))) {
        if (!ctx.event) fail("عقدة Delay (عقدة كامنة Latent) لا تُستخدم داخل Function، بل في Event Graph فقط", line);
        return [{ k: "yield", e: { k: "call", f: { k: "id", name: "__Delay", line }, args: [expr(m[1], line), { k: "lit", v: ++uid }], line }, line }];
      }
      if (t === "DoOnce") {
        const flag = "__DoOnce" + (++uid);
        cls.fields.push({ name: flag, type: { name: "bool", args: [] }, init: null, mods: new Set(["private"]), attrs: [], line, isStatic: false });
        const body = block(ind, ctx);
        return [{ k: "if", c: { k: "unary", op: "!", e: { k: "id", name: flag, line }, line }, a: { k: "block", body: [{ k: "expr", e: { k: "assign", op: "=", target: { k: "id", name: flag, line }, e: { k: "lit", v: true }, line }, line }, ...body] }, b: null, line }];
      }
      if ((m = /^Return(?:\s+(.+))?$/.exec(t))) return [{ k: "return", e: m[1] ? expr(m[1], line) : null, line }];
      if ((m = /^CastTo\s+(\w+)\s*\((.+)\)\s+as\s+(\w+)$/.exec(t))) {
        const p = pins(ind, [/^Succeeded$/, /^Cast Failed$/, /^Failed$/], ctx);
        const type = { name: m[1], args: [] };
        return [{ k: "block", body: [
          { k: "local", type: { name: "var", args: [] }, decls: [{ name: m[3], init: { k: "as", e: expr(m[2], line), type, line } }], line },
          { k: "if", c: { k: "bin", op: "!=", l: { k: "id", name: m[3], line }, r: { k: "lit", v: null }, line }, a: { k: "block", body: p.Succeeded || [] }, b: { k: "block", body: p["Cast Failed"] || p.Failed || [] }, line }
        ] }];
      }
      // عقدة استدعاء: PrintString("Hi") أو Door.Open()
      const e = expr(t, line);
      if (!["call", "assign"].includes(e.k)) fail(`سطر لا يمثل عقدة تنفيذ: "${t}" (استخدم Set للمتغيرات أو استدعِ دالة)`, line);
      return [{ k: "expr", e, line }];
    }
    const params = (s, line) => !s ? [] : s.split(",").map(x => x.trim()).filter(Boolean).map(x => { const m = /^(\w+)\s*(?::\s*(.+))?$/.exec(x); if (!m) fail(`معامل غير صحيح: ${x}`, line); return { name: m[1], type: m[2] ? typeOf(m[2], line) : null }; });
    const addMethod = (name, ps, body, opts) => {
      if (!cls) fail("ابدأ بسطر Blueprint اسم : الأب");
      if (cls.methods.has(name)) fail(`الحدث أو الدالة ${name} معرّفة مرتين في ${cls.name}`, opts.line);
      cls.methods.set(name, [Object.assign({ name, params: ps.map(p => ({ type: p.type || { name: "var", args: [] }, name: p.name, def: null, mod: null })), body: { k: "block", body }, ret: opts.ret || { name: "void", args: [] }, mods: new Set(["public"]), attrs: ["BlueprintCallable"], owner: cls.name }, opts)]);
    };
    while (i < lines.length) {
      const L = lines[i], t = L.text, line = L.line;
      let m;
      if (L.ind === 0 && (m = /^Blueprint\s+(\w+)\s*(?::\s*(\w+))?$/.exec(t))) {
        cls = { kind: "class", name: m[1], bases: [m[2] || "Actor"].map(b => ({ Actor: "AActor", Character: "ACharacter", Pawn: "APawn", ActorComponent: "UActorComponent" })[b] || b), fields: [], methods: new Map(), props: new Map(), ctors: [], nested: [], attrs: ["Blueprint"], isBP: true, line };
        types.push(cls); i++; continue;
      }
      if (!cls) fail("ابدأ بسطر: Blueprint BP_Name : Actor", line);
      if (L.ind === 0 && t === "Variables") {
        i++;
        while (i < lines.length && lines[i].ind > 0) {
          const v = lines[i]; i++;
          const vm = /^(\w+)\s*:\s*([^=(]+?)\s*(?:=\s*(.+?))?\s*(\(Instance Editable\))?$/.exec(v.text);
          if (!vm) fail(`صيغة المتغير: Name: Type = Default`, v.line);
          const type = typeOf(vm[2], v.line);
          cls.fields.push({ name: vm[1], type, init: vm[3] ? expr(vm[3], v.line) : null, mods: new Set(["public"]), attrs: vm[4] ? ["UPROPERTY:EditAnywhere", "UPROPERTY:BlueprintReadWrite"] : ["UPROPERTY:BlueprintReadWrite"], line: v.line, isStatic: false });
        }
        continue;
      }
      if (L.ind === 0 && t === "Components") {
        // لوحة Components: Name: Type args (StaticMesh Cube أو BoxCollision (200, 100) أو TextRender "Hi")
        i++;
        cls.components = cls.components || [];
        while (i < lines.length && lines[i].ind > 0) {
          const c = lines[i]; i++;
          const cm = /^(\w+)\s*:\s*(\w+)\s*(.*)$/.exec(c.text);
          if (!cm) fail("صيغة المكوّن: Name: Type", c.line);
          cls.components.push({ name: cm[1], type: cm[2], args: cm[3].trim(), line: c.line });
          cls.fields.push({ name: cm[1], type: { name: "var", args: [] }, init: null, mods: new Set(["public"]), attrs: ["Component"], line: c.line, isStatic: false });
        }
        continue;
      }
      if (L.ind === 0 && (m = /^Event\s+Key\s+(\w+)$/.exec(t))) {
        i++;
        addMethod("InputKey_" + m[1].toUpperCase(), [], block(0, { event: true }), { iter: true, event: true, line });
        continue;
      }
      if (L.ind === 0 && (m = /^Event\s+(\w+)\s*(?:\((.*)\))?$/.exec(t))) {
        const ev = EVENTS[m[1]];
        if (!ev) fail(`حدث غير معروف: Event ${m[1]} (المتاح: ${Object.keys(EVENTS).join(", ")})، أو استخدم Custom Event`, line);
        i++;
        const given = params(m[2], line);
        const ps = ev[1].map((p, k) => ({ name: given[k] ? given[k].name : p[0], type: { name: p[1], args: [] } }));
        addMethod(ev[0], ps, block(0, { event: true }), { iter: true, event: true, line });
        continue;
      }
      if (L.ind === 0 && (m = /^Custom Event\s+(\w+)\s*(?:\((.*)\))?$/.exec(t))) {
        i++;
        addMethod(m[1], params(m[2], line), block(0, { event: true }), { iter: true, event: true, line });
        continue;
      }
      if (L.ind === 0 && (m = /^Function\s+(\w+)\s*(?:\((.*)\))?\s*(?:->\s*(.+))?$/.exec(t))) {
        i++;
        addMethod(m[1], params(m[2], line), block(0, { event: false }), { iter: false, ret: m[3] ? typeOf(m[3], line) : null, line });
        continue;
      }
      fail(`سطر غير متوقع في المستوى الأعلى: "${t}" (المتاح: Blueprint و Variables و Event و Custom Event و Function)`, line);
    }
    return { types };
  }

  CW.bp = { compile };
})(typeof window !== "undefined" ? window : globalThis);
