// محاكي Unity تعليمي: يشغّل سكربتات C# (js/cs-interp.js) على عالم ثنائي الأبعاد (js/game-sim.js)
// GameObjects ومكوّنات (Transform و Rigidbody2D و BoxCollider2D و SpriteRenderer و Animator و Text و AudioSource و Camera)،
// ودورة حياة MonoBehaviour (Awake و OnEnable و Start و FixedUpdate كل 0.02 ث و Update و LateUpdate و OnDestroy)،
// والتصادمات والمحفزات، و Raycast، و Input، و Coroutines، و Instantiate، و SceneManager، و PlayerPrefs، والمنصات
// ليس Unity الحقيقي: الفيزياء صناديق محاذية للمحاور بلا دوران ولا انتقال زخم، ولا 3D، ولا محرر
(function (root) {
  const CW = root.CW = root.CW || {};
  const cs = CW.cs;
  const { Num, F, D, EnumVal, Obj, CList, CArr, Callable, TypeRef, toStr, fail, raise, isNum, nv, Enumerator } = cs;
  const fr = Math.fround;
  const PPU = 32;   // بكسل لكل وحدة في صور الدورة (Pixels Per Unit)
  const SPRITES = { player: [32, 48], platform: [400, 32], star: [24, 22], coin: [16, 16], enemy: [28, 28], bomb: [14, 14], bullet: [8, 8], ship: [32, 32], sky: [480, 320] };
  const ANIM = { idle: [4], run: [5, 6, 7, 8], walk: [5, 6, 7, 8], jump: [6], fall: [7], hurt: [4], die: [4], attack: [6] };
  const f2 = x => (Math.round(x * 100) / 100).toFixed(2).replace(/^-0\.00$/, "0.00");

  // ---------- أنواع القيم ----------
  class Vec {
    constructor(x = 0, y = 0, z = 0, dim = 3) { this.x = fr(x); this.y = fr(y); this.z = fr(z); this.dim = dim; this.__struct = true; this.__type = dim === 2 ? "Vector2" : "Vector3"; this.__types = [this.__type]; }
    get mag() { return Math.hypot(this.x, this.y, this.z); }
    __get(n) {
      switch (n) {
        case "x": return F(this.x); case "y": return F(this.y); case "z": return F(this.z);
        case "magnitude": return F(this.mag);
        case "sqrMagnitude": return F(this.x * this.x + this.y * this.y + this.z * this.z);
        case "normalized": { const m = this.mag; return m > 1e-5 ? new Vec(this.x / m, this.y / m, this.z / m, this.dim) : new Vec(0, 0, 0, this.dim); }
      }
    }
    __with(n, v, line) {
      if (!["x", "y", "z"].includes(n)) fail(`error CS1061: '${this.__type}' does not contain a definition for '${n}'`, line);
      if (v instanceof Num && v.t === "d") fail(`error CS0266: Cannot implicitly convert type 'double' to 'float'. An explicit conversion exists (are you missing a cast?)`, line);
      if (!isNum(v)) fail(`error CS0029: Cannot implicitly convert type '${typeof v}' to 'float'`, line);
      const c = new Vec(this.x, this.y, this.z, this.dim); c[n] = fr(nv(v)); return c;
    }
    __binop(op, b) {
      if (b instanceof Vec) {
        const dim = Math.max(this.dim, b.dim);
        if (op === "+") return new Vec(this.x + b.x, this.y + b.y, this.z + b.z, dim);
        if (op === "-") return new Vec(this.x - b.x, this.y - b.y, this.z - b.z, dim);
        if (op === "*" && this.dim === 2 && b.dim === 2) return new Vec(this.x * b.x, this.y * b.y, 0, 2);
      }
      if (isNum(b)) {
        if (op === "*") return new Vec(this.x * nv(b), this.y * nv(b), this.z * nv(b), this.dim);
        if (op === "/") return new Vec(this.x / nv(b), this.y / nv(b), this.z / nv(b), this.dim);
      }
    }
    __rbinop(op, a) { if (isNum(a) && op === "*") return this.__binop("*", a); }
    __neg() { return new Vec(-this.x, -this.y, -this.z, this.dim); }
    __eq(b) { return b instanceof Vec && (this.x - b.x) ** 2 + (this.y - b.y) ** 2 + (this.z - b.z) ** 2 < 9.99999944e-11; }
    __str(fmt) { const f = fmt ? (x => cs.formatNum(F(x), fmt)) : f2; return this.dim === 2 ? `(${f(this.x)}, ${f(this.y)})` : `(${f(this.x)}, ${f(this.y)}, ${f(this.z)})`; }
    __toString(fmt) { return this.__str(fmt); }
    __call(n, A) {
      if (n === "Set") { /* struct على متغير: غير مدعوم كتعديل مباشر */ fail("استخدم v = new Vector2(x, y) بدلاً من Set() في هذا المحاكي"); }
      if (n === "Normalize") fail("استخدم v = v.normalized بدلاً من Normalize() في هذا المحاكي");
    }
  }
  const V2 = (x, y) => new Vec(x, y, 0, 2), V3 = (x, y, z = 0) => new Vec(x, y, z, 3);
  class Color {
    constructor(r, g, b, a = 1) { Object.assign(this, { r: fr(r), g: fr(g), b: fr(b), a: fr(a) }); this.__struct = true; this.__type = "Color"; }
    __get(n) { if ("rgba".includes(n) && n.length === 1) return F(this[n]); }
    __with(n, v) { const c = new Color(this.r, this.g, this.b, this.a); c[n] = fr(nv(v)); return c; }
    __eq(b) { return b instanceof Color && ["r", "g", "b", "a"].every(k => Math.abs(this[k] - b[k]) < 1e-5); }
    __binop(op, b) { if (op === "*" && isNum(b)) return new Color(this.r * nv(b), this.g * nv(b), this.b * nv(b), this.a * nv(b)); }
    __str() { return `RGBA(${[this.r, this.g, this.b, this.a].map(x => x.toFixed(3)).join(", ")})`; }
    css() { const c = x => Math.round(Math.max(0, Math.min(1, x)) * 255); return `rgba(${c(this.r)},${c(this.g)},${c(this.b)},${this.a})`; }
  }
  const COLORS = { red: [1, 0, 0], green: [0, 1, 0], blue: [0, 0, 1], white: [1, 1, 1], black: [0, 0, 0], yellow: [1, 0.92156863, 0.015686275], cyan: [0, 1, 1], magenta: [1, 0, 1], gray: [0.5, 0.5, 0.5], grey: [0.5, 0.5, 0.5], clear: [0, 0, 0, 0] };
  const hexColor = h => { const m = /^#?([0-9a-f]{6})$/i.exec(h); if (!m) return null; const n = parseInt(m[1], 16); return new Color((n >> 16 & 255) / 255, (n >> 8 & 255) / 255, (n & 255) / 255, 1); };
  class Quat {
    constructor(z = 0) { this.z = z; this.__struct = true; this.__type = "Quaternion"; }
    __get(n) { if (n === "eulerAngles") return V3(0, 0, ((this.z % 360) + 360) % 360); }
    __binop(op, b) { if (op === "*" && b instanceof Quat) return new Quat(this.z + b.z); }
    __eq(b) { return b instanceof Quat && Math.abs(this.z - b.z) < 1e-4; }
    __str() { const r = this.z * Math.PI / 360; return `(0.00000, 0.00000, ${Math.sin(r).toFixed(5)}, ${Math.cos(r).toFixed(5)})`; }
  }
  const mkEnum = (type, names, start = 0) => { const o = {}; names.forEach((n, i) => { o[n] = new EnumVal(type, n, Array.isArray(start) ? start[i] : start + i); }); return o; };
  const enumRef = (type, vals) => new TypeRef(type, null, { __get: n => vals[n] });
  const ENUMS = {
    ForceMode2D: mkEnum("ForceMode2D", ["Force", "Impulse"]),
    RigidbodyType2D: mkEnum("RigidbodyType2D", ["Dynamic", "Kinematic", "Static"]),
    Space: mkEnum("Space", ["World", "Self"]),
    TouchPhase: mkEnum("TouchPhase", ["Began", "Moved", "Stationary", "Ended", "Canceled"]),
    RuntimePlatform: mkEnum("RuntimePlatform", ["WindowsEditor", "WindowsPlayer", "OSXPlayer", "LinuxPlayer", "Android", "IPhonePlayer", "WebGLPlayer"], [7, 2, 1, 13, 11, 8, 17]),
    ScreenOrientation: mkEnum("ScreenOrientation", ["Portrait", "PortraitUpsideDown", "LandscapeLeft", "LandscapeRight", "AutoRotation"], [1, 2, 3, 4, 5]),
    FindObjectsSortMode: mkEnum("FindObjectsSortMode", ["None", "InstanceID"]),
    FullScreenMode: mkEnum("FullScreenMode", ["ExclusiveFullScreen", "FullScreenWindow", "MaximizedWindow", "Windowed"]),
    LoadSceneMode: mkEnum("LoadSceneMode", ["Single", "Additive"])
  };
  const KEYS = { Space: "space", LeftArrow: "left", RightArrow: "right", UpArrow: "up", DownArrow: "down", Return: "enter", KeypadEnter: "enter", Escape: "escape", LeftShift: "shift", RightShift: "shift", LeftControl: "ctrl", RightControl: "ctrl", Mouse0: "mouse0", Mouse1: "mouse1", Tab: "tab" };
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").forEach(c => { KEYS[c] = c.toLowerCase(); });
  for (let d = 0; d <= 9; d++) KEYS["Alpha" + d] = String(d);
  const KeyCode = mkEnum("KeyCode", Object.keys(KEYS));
  const COMP_TYPES = {
    Transform: ["Transform", "Component", "Object"],
    Rigidbody2D: ["Rigidbody2D", "Component", "Object"],
    BoxCollider2D: ["BoxCollider2D", "Collider2D", "Behaviour", "Component", "Object"],
    CircleCollider2D: ["CircleCollider2D", "Collider2D", "Behaviour", "Component", "Object"],
    SpriteRenderer: ["SpriteRenderer", "Renderer", "Component", "Object"],
    Animator: ["Animator", "Behaviour", "Component", "Object"],
    Text: ["Text", "TMP_Text", "TextMeshProUGUI", "Graphic", "Behaviour", "Component", "Object"],   // نص الواجهة يخدم النوعين في المحاكي
    TextMeshProUGUI: ["TextMeshProUGUI", "TMP_Text", "Graphic", "Behaviour", "Component", "Object"],
    AudioSource: ["AudioSource", "Behaviour", "Component", "Object"],
    Camera: ["Camera", "Behaviour", "Component", "Object"],
    Image: ["Image", "Graphic", "Behaviour", "Component", "Object"],
    Button: ["Button", "Selectable", "Behaviour", "Component", "Object"]
  };
  const UNITY_OBJ_TYPES = new Set(["GameObject", "Transform", "Sprite", "AudioClip", "Collider2D", "Behaviour", "Component", "MonoBehaviour", ...Object.keys(COMP_TYPES), "TMP_Text"]);

  function Game(say) {
    const world = new CW.Sim.World({ yUp: true, gravity: new CW.Sim.V(0, -9.81), ppu: PPU, view: { w: 480, h: 320, ox: 240, oy: 160 } });
    world.bg = "#314d79";
    const U = { world, gos: [], scripts: [], time: 0, unscaled: 0, frameCount: 0, timeScale: 1, inFixed: false, fixedAcc: 0, fixedTime: 0, coroutines: [], invokes: [], pendingStart: [], pendingDestroy: [], timedDestroy: [], sounds: [], prefs: new Map(), axes: { Horizontal: 0, Vertical: 0 }, layers: ["Default", "TransparentFX", "Ignore Raycast", "", "Water", "UI"], scenes: [], prefabs: {}, animators: {}, errors: new Set(), platform: "WindowsEditor", defines: new Set(["UNITY_EDITOR", "UNITY_STANDALONE", "UNITY_STANDALONE_WIN", "UNITY_2022_3_OR_NEWER", "UNITY_6000_0_OR_NEWER"]), screen: { w: 480, h: 320, full: true }, quality: 3, rng: 1234567, sceneName: "SampleScene", record: [] };
    let rt = null;
    const info = t => say(t, "info");
    const rand = () => { U.rng = (Math.imul(U.rng, 1103515245) + 12345) >>> 0; return (U.rng >>> 8) / 16777216; };
    const layerIndex = name => { let i = U.layers.indexOf(name); if (i < 0) { i = Math.max(6, U.layers.length); U.layers[i] = name; } return i; };

    // ---------- GameObject ----------
    class GO {
      constructor(e) { this.e = e; this.comps = []; this.tag = "Untagged"; this.layer = 0; this.destroyed = false; e.data.go = this; this.__type = "GameObject"; this.__types = ["GameObject", "Object"]; }
      get name() { return this.e.name; }
      get tr() { return this._tr || (this._tr = new Transform(this)); }
      get activeInHierarchy() { return this.e.isActive(); }
      __str() { return `${this.name} (UnityEngine.GameObject)`; }
      __get(n) {
        switch (n) {
          case "name": return this.name;
          case "tag": return this.tag;
          case "layer": return this.layer;
          case "transform": return this.tr;
          case "gameObject": return this;
          case "activeSelf": return this.e.active;
          case "activeInHierarchy": return this.activeInHierarchy;
        }
      }
      __set(n, v) {
        if (n === "name") { this.e.name = toStr(v); return; }
        if (n === "tag") { this.tag = toStr(v); return; }
        if (n === "layer") { this.layer = nv(v); return; }
        return false;
      }
      __call(n, A, targs) { return goCall(this, n, A, targs); }
    }
    function goCall(go, n, A, targs) {
      const tname = () => targs && targs[0] ? targs[0].name : A[0] instanceof TypeRef ? A[0].name : typeof A[0] === "string" ? A[0] : null;
      switch (n) {
        case "SetActive": setActive(go, !!A[0]); return { v: null };
        case "GetComponent": return { v: getComponent(go, tname()) };
        case "TryGetComponent": { const c = getComponent(go, tname()); const ok = !isFake(c); A[A.length - 1].set(ok ? c : null); return { v: ok }; }
        case "GetComponents": return { v: new CArr(go.comps.filter(c => compIs(c, tname())), { name: tname(), args: [] }) };
        case "GetComponentInChildren": { const t = tname(); for (const g of subtree(go)) { if (!g.e.isActive() && g !== go) continue; const c = g.comps.find(c => compIs(c, t)); if (c) return { v: c }; } return { v: null }; }
        case "GetComponentsInChildren": { const t = tname(); return { v: new CArr(subtree(go).flatMap(g => g.comps.filter(c => compIs(c, t))), { name: t, args: [] }) }; }
        case "GetComponentInParent": { const t = tname(); for (let g = go; g; g = g.e.parent && g.e.parent.data.go) { const c = g.comps.find(c => compIs(c, t)); if (c) return { v: c }; } return { v: null }; }
        case "AddComponent": return { v: addComponent(go, tname(), {}, true) };
        case "CompareTag": return { v: go.tag === A[0] };
        case "SendMessage": { scriptsOf(go).forEach(o => message(o, A[0], A.slice(1))); return { v: null }; }
        case "BroadcastMessage": { subtree(go).forEach(g => scriptsOf(g).forEach(o => message(o, A[0], A.slice(1)))); return { v: null }; }
      }
    }
    const subtree = go => { const out = [go]; for (const c of go.e.children) if (c.data.go && !c.data.go.destroyed) out.push(...subtree(c.data.go)); return out; };
    const scriptsOf = go => go.comps.filter(c => c instanceof Obj);
    const compIs = (c, t) => !t || (c instanceof Obj ? c.cls.allBases.has(t) || ["MonoBehaviour", "Behaviour", "Component", "Object"].includes(t) : c.__types.includes(t));
    function getComponent(go, t) {
      const c = go.comps.find(c => compIs(c, t));
      if (c) return c;
      // في المحرر يرجع Unity كائناً "فارغاً" يرمي MissingComponentException عند استخدامه
      return { __missing: true, __type: t, go, __str: () => "null" };
    }
    const isFake = v => !!v && (v.__missing || v.__unassigned || v.destroyed || (v.go && v.go.destroyed && !(v instanceof GO)));
    const typeLabel = v => v instanceof Obj ? v.cls.name : v.__type;
    function checkAlive(v) {
      if (!v || typeof v !== "object") return;
      if (v.__unassigned) raise("UnassignedReferenceException", `The variable ${v.field} of ${v.cls} has not been assigned.\nYou probably need to assign the ${v.field} variable of the ${v.cls} script in the inspector.`);
      if (v.__missing) raise("MissingComponentException", `There is no '${v.__type}' attached to the "${v.go.name}" game object, but a script is trying to access it.\nYou probably need to add a ${v.__type} to the game object "${v.go.name}". Or your script needs to check if the component is attached before using it.`);
      if (v instanceof GO && v.destroyed || (v.go && v.go.destroyed && (v instanceof Obj || v.__types)) || v.destroyed) raise("MissingReferenceException", `The object of type '${typeLabel(v)}' has been destroyed but you are still trying to access it.\nYour script should either check if it is null or you should not destroy the object.`);
    }

    // ---------- المكونات ----------
    class Comp {
      constructor(go, type) { this.go = go; this.enabled = true; this.__type = type; this.__types = COMP_TYPES[type] || [type, "Component", "Object"]; }
      __str() { return `${this.go.name} (UnityEngine.${this.__type === "Text" ? "UI.Text" : this.__type})`; }
      get e() { return this.go.e; }
      __get(n) {
        if (n === "gameObject") return this.go;
        if (n === "transform") return this.go.tr;
        if (n === "name") return this.go.name;
        if (n === "tag") return this.go.tag;
        if (n === "enabled") return this.enabled;
        return this.get(n);
      }
      __set(n, v, line) { if (n === "enabled") { this.enabled = !!v; this.onEnabled && this.onEnabled(); return; } return this.set(n, v, line); }
      __call(n, A, targs, line) { const r = goCall(this.go, n, A, targs); return r !== undefined ? r : this.call(n, A, targs, line); }
      get() {} set() { return false; } call() {}
    }
    class Transform extends Comp {
      constructor(go) { super(go, "Transform"); }
      __str() { return `${this.go.name} (UnityEngine.Transform)`; }
      get(n) {
        const e = this.e, g = e.global();
        switch (n) {
          case "position": return V3(g.x, g.y, g.z);
          case "localPosition": return V3(e.pos.x, e.pos.y, e.pos.z);
          case "localScale": return V3(e.scale.x, e.scale.y, e.scale.z);
          case "lossyScale": return V3(e.scale.x, e.scale.y, e.scale.z);
          case "rotation": case "localRotation": return new Quat(e.rot);
          case "eulerAngles": case "localEulerAngles": return V3(0, 0, ((e.rot % 360) + 360) % 360);
          case "right": { const r = e.rot * Math.PI / 180; return V3(Math.cos(r), Math.sin(r), 0); }
          case "up": { const r = e.rot * Math.PI / 180; return V3(-Math.sin(r), Math.cos(r), 0); }
          case "forward": return V3(0, 0, 1);
          case "parent": return e.parent && e.parent.data.go ? e.parent.data.go.tr : null;
          case "childCount": return e.children.filter(c => !c.destroyed).length;
          case "root": { let x = e; while (x.parent && x.parent.data.go) x = x.parent; return x.data.go.tr; }
        }
      }
      set(n, v, line) {
        const e = this.e;
        const need = t => { if (!(v instanceof (t === "q" ? Quat : Vec))) fail(`error CS0029: Cannot implicitly convert type '${rt.typeLabel(v)}' to '${t === "q" ? "Quaternion" : "Vector3"}'`, line); };
        switch (n) {
          case "position": { need("v"); const g = e.global(); e.pos.x += v.x - g.x; e.pos.y += v.y - g.y; if (v.dim === 3) e.pos.z += v.z - g.z; return; }
          case "localPosition": need("v"); e.pos.x = v.x; e.pos.y = v.y; e.pos.z = v.dim === 3 ? v.z : 0; return;
          case "localScale": need("v"); e.scale.x = v.x; e.scale.y = v.y; e.scale.z = v.z; return;
          case "rotation": case "localRotation": need("q"); e.rot = v.z; return;
          case "eulerAngles": case "localEulerAngles": need("v"); e.rot = v.z; return;
          case "right": { need("v"); e.rot = Math.atan2(v.y, v.x) * 180 / Math.PI; return; }
          case "up": { need("v"); e.rot = Math.atan2(v.y, v.x) * 180 / Math.PI - 90; return; }
          case "parent": setParent(this.go, v ? v.go : null, true); return;
        }
        return false;
      }
      call(n, A) {
        const e = this.e;
        switch (n) {
          case "Translate": {
            let v = A[0] instanceof Vec ? A[0] : V3(nv(A[0]), nv(A[1]), nv(A[2] || 0));
            const space = A.find(a => a instanceof EnumVal);
            if (!space || space.name === "Self") { const r = e.rot * Math.PI / 180, c = Math.cos(r), s = Math.sin(r); v = V3(v.x * c - v.y * s, v.x * s + v.y * c, v.z); }
            e.pos.x = fr(e.pos.x + v.x); e.pos.y = fr(e.pos.y + v.y); e.pos.z = fr(e.pos.z + v.z); return { v: null };
          }
          case "Rotate": { const z = A[0] instanceof Vec ? A[0].z : nv(A[2] ?? A[0]); e.rot = fr(e.rot + z); return { v: null }; }
          case "SetParent": setParent(this.go, A[0] ? A[0].go : null, A.length > 1 ? !!A[1] : true); return { v: null };
          case "GetChild": { const ch = e.children.filter(c => !c.destroyed); if (A[0] < 0 || A[0] >= ch.length) raise("UnityException", "Transform child out of bounds"); return { v: ch[A[0]].data.go.tr }; }
          case "Find": { const c = e.find(A[0]); return { v: c && c.data.go ? c.data.go.tr : null }; }
          case "SetPositionAndRotation": this.set("position", A[0]); this.set("rotation", A[1]); return { v: null };
          case "LookAt": { const g = e.global(), t = A[0] instanceof Vec ? A[0] : A[0].get("position"); e.rot = Math.atan2(t.y - g.y, t.x - g.x) * 180 / Math.PI; return { v: null }; }
          case "DetachChildren": e.children.slice().forEach(c => c.data.go && setParent(c.data.go, null, true)); return { v: null };
        }
      }
      *__iter() { for (const c of this.e.children.filter(c => !c.destroyed)) yield c.data.go.tr; }
    }
    function setParent(go, parentGo, keepWorld) {
      const e = go.e, g = e.global();
      e.parent.children = e.parent.children.filter(c => c !== e);
      const p = parentGo ? parentGo.e : world.root;
      e.parent = p; p.children.push(e);
      if (keepWorld) { const pg = p === world.root ? new CW.Sim.V() : p.global(); e.pos.x = g.x - pg.x; e.pos.y = g.y - pg.y; }
    }
    class Rigidbody2D extends Comp {
      constructor(go, pr) {
        super(go, "Rigidbody2D");
        this.mass = pr.mass ? +pr.mass : 1;
        this.bodyType = ENUMS.RigidbodyType2D[pr.bodyType || "Dynamic"] || ENUMS.RigidbodyType2D.Dynamic;
        if (pr.isKinematic === "true") this.bodyType = ENUMS.RigidbodyType2D.Kinematic;
        go.e.gravityScale = pr.gravityScale !== undefined ? +pr.gravityScale : 1;
        this.damping = pr.linearDamping ? +pr.linearDamping : 0;
        this.angularVelocity = 0;
        applyPhysics(go);
      }
      get(n) {
        const e = this.e;
        switch (n) {
          case "linearVelocity": case "velocity": return V2(e.vel.x, e.vel.y);
          case "gravityScale": return F(e.gravityScale);
          case "mass": return F(this.mass);
          case "bodyType": return this.bodyType;
          case "isKinematic": return this.bodyType.name === "Kinematic";
          case "position": { const g = e.global(); return V2(g.x, g.y); }
          case "angularVelocity": return F(this.angularVelocity);
          case "linearDamping": case "drag": return F(this.damping);
          case "simulated": return true;
          case "linearVelocityX": return F(e.vel.x);
          case "linearVelocityY": return F(e.vel.y);
        }
      }
      set(n, v, line) {
        const e = this.e;
        switch (n) {
          case "linearVelocity": case "velocity": if (!(v instanceof Vec)) fail(`error CS0029: Cannot implicitly convert type '${rt.typeLabel(v)}' to 'Vector2'`, line); e.vel.x = v.x; e.vel.y = v.y; return;
          case "linearVelocityX": e.vel.x = fr(nv(v)); return;
          case "linearVelocityY": e.vel.y = fr(nv(v)); return;
          case "gravityScale": e.gravityScale = nv(v); return;
          case "mass": this.mass = nv(v); return;
          case "bodyType": this.bodyType = v; applyPhysics(this.go); return;
          case "isKinematic": this.bodyType = v ? ENUMS.RigidbodyType2D.Kinematic : ENUMS.RigidbodyType2D.Dynamic; applyPhysics(this.go); return;
          case "position": e.pos.x += v.x - e.global().x; e.pos.y += v.y - e.global().y; return;
          case "angularVelocity": this.angularVelocity = nv(v); return;
          case "linearDamping": case "drag": this.damping = nv(v); return;
          case "constraints": case "freezeRotation": case "interpolation": case "collisionDetectionMode": case "sleepMode": return;
        }
        return false;
      }
      call(n, A) {
        const e = this.e;
        switch (n) {
          case "AddForce": {
            const f = A[0], mode = A[1];
            if (this.bodyType.name !== "Dynamic") return { v: null };
            const k = mode && mode.name === "Impulse" ? 1 / this.mass : 0.02 / this.mass;   // Force: لمدة خطوة فيزياء واحدة
            e.vel.x = fr(e.vel.x + f.x * k); e.vel.y = fr(e.vel.y + f.y * k); return { v: null };
          }
          case "MovePosition": { const g = e.global(); e.pos.x += A[0].x - g.x; e.pos.y += A[0].y - g.y; return { v: null }; }
          case "AddTorque": case "MoveRotation": case "WakeUp": case "Sleep": return { v: null };
        }
      }
    }
    class Collider extends Comp {
      constructor(go, type, pr) {
        super(go, type);
        const sp = go.e.visual && go.e.visual.sprite && SPRITES[go.e.visual.sprite];
        const def = sp ? [sp[0] / PPU, sp[1] / PPU] : go.e.visual && go.e.visual.w ? [go.e.visual.w, go.e.visual.h] : [1, 1];
        if (type === "CircleCollider2D") this.radius = pr.radius ? +pr.radius : Math.max(...def) / 2;
        else this.size = pr.size ? tuple(pr.size) : def;
        this.offset = pr.offset ? tuple(pr.offset) : [0, 0];
        this.isTrigger = pr.isTrigger === "true";
        if (pr.bounciness) go.e.bounce = +pr.bounciness;
        this.onEnabled = () => applyPhysics(go);
        applyPhysics(go);
      }
      get(n) {
        switch (n) {
          case "isTrigger": return this.isTrigger;
          case "size": return V2(...this.size);
          case "radius": return F(this.radius);
          case "offset": return V2(...this.offset);
          case "attachedRigidbody": return this.go.comps.find(c => c instanceof Rigidbody2D) || null;
          case "bounds": { const b = world.aabb(this.e); return { __type: "Bounds", __get: k => ({ center: V3((b.x1 + b.x2) / 2, (b.y1 + b.y2) / 2), size: V3(b.x2 - b.x1, b.y2 - b.y1), min: V3(b.x1, b.y1), max: V3(b.x2, b.y2), extents: V3((b.x2 - b.x1) / 2, (b.y2 - b.y1) / 2) })[k] }; }
        }
      }
      set(n, v) {
        switch (n) {
          case "isTrigger": this.isTrigger = !!v; applyPhysics(this.go); return;
          case "size": this.size = [v.x, v.y]; applyPhysics(this.go); return;
          case "radius": this.radius = nv(v); applyPhysics(this.go); return;
          case "offset": this.offset = [v.x, v.y]; return;
        }
        return false;
      }
    }
    // جسم الكيان في العالم المحاكى من مكوّناته
    function applyPhysics(go) {
      const e = go.e;
      const rb = go.comps.find(c => c instanceof Rigidbody2D);
      const col = go.comps.find(c => c instanceof Collider && c.enabled);
      e.shape = col ? (col.radius !== undefined ? { kind: "circle", r: col.radius } : { kind: "rect", w: col.size[0], h: col.size[1] }) : null;
      e.trigger = !!(col && col.isTrigger);
      e.body = rb ? ({ Dynamic: "rigid", Kinematic: "kinematic", Static: "static" })[rb.bodyType.name] : col ? "static" : null;
    }
    class SpriteRenderer extends Comp {
      constructor(go, pr) {
        super(go, "SpriteRenderer");
        this.color = pr.color && hexColor(pr.color) ? hexColor(pr.color) : new Color(1, 1, 1, 1);
        this.sortingOrder = 0;
      }
      get v() { return this.e.visual || (this.e.visual = {}); }
      get(n) {
        switch (n) {
          case "flipX": return !!this.v.flip;
          case "flipY": return false;
          case "color": return this.color;
          case "sprite": return this.v.sprite ? { __type: "Sprite", name: this.v.sprite, __get: k => k === "name" ? this.v.sprite : undefined, __str: () => `${this.v.sprite} (UnityEngine.Sprite)` } : null;
          case "sortingOrder": return this.sortingOrder;
        }
      }
      set(n, v) {
        switch (n) {
          case "flipX": this.v.flip = !!v; return;
          case "flipY": return;
          case "color": this.color = v; this.v.color = v.css(); this.v.tint = !(v.r === 1 && v.g === 1 && v.b === 1); this.v.alpha = v.a; return;
          case "sprite": this.v.sprite = v ? v.name : null; return;
          case "sortingOrder": this.sortingOrder = nv(v); return;
        }
        return false;
      }
      onEnabled() { this.v.hidden = !this.enabled; }
    }
    class TextComp extends Comp {
      constructor(go, type, pr) { super(go, type); go.e.visual = Object.assign(go.e.visual || {}, { text: pr.text ?? "", color: pr.color || "#ffffff", size: pr.fontSize ? +pr.fontSize : 18, screen: go.e.data.ui || [10, 10] }); }
      get(n) { if (n === "text") return String(this.e.visual.text); if (n === "fontSize") return this.e.visual.size; if (n === "color") return hexColor(this.e.visual.color) || new Color(1, 1, 1); }
      set(n, v, line) {
        if (n === "text") { if (v !== null && typeof v !== "string") fail(`error CS0029: Cannot implicitly convert type '${rt.typeLabel(v)}' to 'string'`, line); this.e.visual.text = v ?? ""; return; }
        if (n === "fontSize") { this.e.visual.size = nv(v); return; }
        if (n === "color") { this.e.visual.color = v.css(); return; }
        return false;
      }
      call(n, A) { if (n === "SetText") { this.e.visual.text = toStr(A[0]); return { v: null }; } }
    }
    // واجهة: Image (لون ونسبة تعبئة لشريط الصحة) و Button (نص ومستمعو onClick)
    class ImageComp extends Comp {
      constructor(go, pr) {
        super(go, "Image");
        const [w, h] = pr.size ? tuple(pr.size) : [120, 16];
        go.e.visual = Object.assign(go.e.visual || {}, { screen: go.e.data.ui || [10, 10], uiW: w, uiH: h, color: pr.color || "#4caf50", fill: pr.fillAmount !== undefined ? +pr.fillAmount : 1, back: pr.back || "rgba(0,0,0,.45)" });
        this.colorV = hexColor(go.e.visual.color) || new Color(1, 1, 1);
      }
      get(n) { if (n === "fillAmount") return F(this.e.visual.fill); if (n === "color") return this.colorV; }
      set(n, v) {
        if (n === "fillAmount") { this.e.visual.fill = Math.max(0, Math.min(1, nv(v))); return; }
        if (n === "color") { this.colorV = v; this.e.visual.color = v.css(); return; }
        return false;
      }
      onEnabled() { this.e.visual.hidden = !this.enabled; }
    }
    class UnityEvent {
      constructor() { this.list = []; this.__type = "UnityEvent"; }
      __call(n, A) {
        if (n === "AddListener") { this.list.push(A[0]); return { v: null }; }
        if (n === "RemoveListener") { this.list = this.list.filter(x => x !== A[0] && x.name !== A[0].name); return { v: null }; }
        if (n === "RemoveAllListeners") { this.list = []; return { v: null }; }
        if (n === "Invoke") { this.fire(); return { v: null }; }
      }
      fire() { for (const f of this.list.slice()) { try { rt.callValue(f, []); } catch (e) { report(e, "onClick"); } } }
    }
    class Button extends Comp {
      constructor(go, pr) {
        super(go, "Button");
        const [w, h] = pr.size ? tuple(pr.size) : [140, 36];
        go.e.visual = Object.assign(go.e.visual || {}, { screen: go.e.data.ui || [10, 10], uiW: w, uiH: h, color: pr.color || "#3d5afe", fill: 1, label: pr.text ?? go.name });
        this.onClick = new UnityEvent();
        this.interactable = true;
        // onClick=@Manager.StartGame: مثل ربط الدالة في Inspector
        if (pr.onClick) this.pending = pr.onClick;
      }
      get(n) { if (n === "onClick") return this.onClick; if (n === "interactable") return this.interactable; }
      set(n, v) { if (n === "interactable") { this.interactable = !!v; this.e.visual.color = v ? "#3d5afe" : "#666"; return; } return false; }
      hit(x, y) { const v = this.e.visual; return x >= v.screen[0] && x <= v.screen[0] + v.uiW && y >= v.screen[1] && y <= v.screen[1] + v.uiH; }
    }
    class AudioSource extends Comp {
      constructor(go, pr) { super(go, "AudioSource"); this.clip = pr.clip ? clipOf(pr.clip) : null; this.loop = pr.loop === "true"; this.volume = pr.volume ? +pr.volume : 1; this.playOnAwake = pr.playOnAwake === "true"; this.until = -1; }
      get(n) { switch (n) { case "clip": return this.clip; case "isPlaying": return this.loop ? this.until !== -1 : U.time < this.until; case "loop": return this.loop; case "volume": return F(this.volume); case "mute": return false; case "pitch": return F(1); } }
      set(n, v) { switch (n) { case "clip": this.clip = v; return; case "loop": this.loop = !!v; return; case "volume": this.volume = nv(v); return; case "mute": case "pitch": return; } return false; }
      play(clip) { if (!clip || clip.__unassigned) { if (clip && clip.__unassigned) raise("UnassignedReferenceException", `The variable ${clip.field} of ${clip.cls} has not been assigned.`); return; } U.sounds.push(clip.name); info(`🔊 ${clip.name}`); }
      call(n, A) {
        switch (n) {
          case "Play": if (this.enabled) { this.play(this.clip); this.until = U.time + 0.5; } return { v: null };
          case "PlayOneShot": if (this.enabled) this.play(A[0]); return { v: null };
          case "Stop": case "Pause": this.until = -1; return { v: null };
          case "UnPause": return { v: null };
        }
      }
    }
    const clipOf = name => ({ __type: "AudioClip", __types: ["AudioClip", "Object"], name: String(name).replace(/^clip:/, ""), __get(k) { return k === "name" ? this.name : k === "length" ? F(0.5) : undefined; }, __str() { return `${this.name} (UnityEngine.AudioClip)`; } });
    class CameraComp extends Comp {
      constructor(go, pr) { super(go, "Camera"); this.size = pr.orthographicSize ? +pr.orthographicSize : 5; if (pr.background) world.bg = pr.background; go.tag = go.tag === "Untagged" ? "MainCamera" : go.tag; }
      get(n) { switch (n) { case "orthographicSize": return F(this.size); case "orthographic": return true; case "backgroundColor": return hexColor(world.bg) || new Color(0, 0, 0); case "pixelWidth": return 480; case "pixelHeight": return 320; case "aspect": return F(1.5); } }
      set(n, v) { switch (n) { case "orthographicSize": this.size = nv(v); return; case "backgroundColor": world.bg = v.css(); return; case "orthographic": return; } return false; }
      call(n, A) {
        const ppu = 160 / this.size, g = this.e.global();
        if (n === "ScreenToWorldPoint") return { v: V3((A[0].x - 240) / ppu + g.x, (A[0].y - 160) / ppu + g.y, 0) };
        if (n === "WorldToScreenPoint") return { v: V3((A[0].x - g.x) * ppu + 240, (A[0].y - g.y) * ppu + 160, 0) };
      }
    }
    class Animator extends Comp {
      constructor(go, pr) {
        super(go, "Animator");
        const ctl = U.animators[pr.controller];
        if (pr.controller && !ctl) fail(`لا يوجد Animator Controller باسم ${pr.controller} (عرّفه بـ [animator ${pr.controller}])`);
        this.ctl = ctl || { states: ["Idle"], transitions: [], def: "Idle" };
        this.state = this.ctl.def; this.t = 0; this.params = new Map(); this.triggers = new Set(); this.speed = 1;
      }
      get(n) { if (n === "speed") return F(this.speed); }
      set(n, v) { if (n === "speed") { this.speed = nv(v); return; } return false; }
      call(n, A) {
        const p = A[0];
        switch (n) {
          case "SetBool": case "SetFloat": case "SetInteger": this.params.set(p, A[1]); return { v: null };
          case "SetTrigger": this.triggers.add(p); return { v: null };
          case "ResetTrigger": this.triggers.delete(p); return { v: null };
          case "GetBool": return { v: !!this.params.get(p) };
          case "GetFloat": return { v: this.params.has(p) ? this.params.get(p) : F(0) };
          case "GetInteger": return { v: this.params.has(p) ? this.params.get(p) : 0 };
          case "Play": if (!this.ctl.states.includes(p)) { say(`Animator.GotoState: State could not be found`, "err"); return { v: null }; } this.state = p; this.t = 0; return { v: null };
          case "GetCurrentAnimatorStateInfo": { const st = this.state, t = this.t; return { v: { __type: "AnimatorStateInfo", __get: k => k === "normalizedTime" ? F(t / 0.5) : k === "length" ? F(0.5) : undefined, __call: (k, B) => k === "IsName" ? { v: B[0] === st } : undefined } }; }
        }
      }
      cond(c) {
        const m = /^(!?)(\w+)\s*(?:(>|<|==|!=)\s*(-?[\d.]+))?$/.exec(c.trim());
        if (!m) return false;
        const [, not, name, op, num] = m;
        if (op) { const v = nv(this.params.get(name) ?? 0), x = +num; return op === ">" ? v > x : op === "<" ? v < x : op === "==" ? v === x : v !== x; }
        if (this.triggers.has(name)) return !not;
        return not ? !this.params.get(name) : !!this.params.get(name);
      }
      update(dt) {
        if (!this.enabled) return;
        this.t += dt * this.speed;
        for (const tr of this.ctl.transitions) {
          if ((tr.from !== this.state && tr.from !== "Any") || tr.to === this.state) continue;
          if (tr.conds.every(c => this.cond(c))) { tr.conds.forEach(c => this.triggers.delete(c.trim().replace(/^!/, ""))); this.state = tr.to; this.t = 0; break; }
        }
        const v = this.e.visual;
        if (v && v.sprite === "player") { const fr2 = ANIM[this.state.toLowerCase()] || ANIM.idle; v.frame = fr2[Math.floor(this.t * 8) % fr2.length]; }
      }
    }
    const tuple = s => String(s).replace(/[()]/g, "").split(",").map(x => parseFloat(x));

    function addComponent(go, type, pr, live) {
      let c;
      switch (type) {
        case "Rigidbody2D": c = new Rigidbody2D(go, pr); break;
        case "BoxCollider2D": case "CircleCollider2D": c = new Collider(go, type, pr); break;
        case "SpriteRenderer": c = new SpriteRenderer(go, pr); break;
        case "Text": case "TextMeshProUGUI": case "TMP_Text": c = new TextComp(go, type === "TMP_Text" ? "TextMeshProUGUI" : type, pr); break;
        case "AudioSource": c = new AudioSource(go, pr); break;
        case "Camera": c = new CameraComp(go, pr); break;
        case "Animator": c = new Animator(go, pr); break;
        case "Image": c = new ImageComp(go, pr); break;
        case "Button": c = new Button(go, pr); break;
        default: {
          const cls = rt.classes.get(type);
          if (!cls) fail(`المكوّن ${type} غير موجود (لا يوجد صنف بهذا الاسم في السكربتات)`);
          if (!cls.allBases.has("MonoBehaviour")) fail(`${type} لا يرث MonoBehaviour فلا يمكن إضافته لكائن`);
          c = new Obj(cls);
          c.go = go; c.enabled = true;
          U.creating = c;
          rt.initFields(c);
          U.creating = null;
          go.comps.push(c);
          U.scripts.push(c);
          c.props = pr;
          if (live) { assignFields(c, pr, go); awake(c); }
          return c;
        }
      }
      go.comps.push(c);
      if (c instanceof Rigidbody2D || c instanceof Collider) applyPhysics(go);
      return c;
    }

    // ---------- بناء المشهد ----------
    function parseProps(s) {
      const props = {};
      const re = /(\w+)=("([^"]*)"|\([^)]*\)|\[[^\]]*\]|\S+)/g;
      let m;
      while ((m = re.exec(s))) props[m[1]] = m[3] !== undefined ? { str: m[3] } : m[2];
      return props;
    }
    const plain = v => v && typeof v === "object" ? v.str : v;
    function buildTree(lines, parentE) {
      const stack = [{ ind: -1, go: null, e: parentE }];
      const made = [];
      let last = null;
      for (const raw of lines) {
        if (!raw.trim() || raw.trim().startsWith("#")) continue;
        const ind = raw.match(/^ */)[0].length;
        const cm = /^\s*\+\s*(\w+)\s*(.*)$/.exec(raw);
        if (cm) {
          if (!last) fail(`المكوّن ${cm[1]} يجب أن يكون تحت كائن`);
          const cp = parseProps(cm[2]);
          Object.keys(cp).forEach(k => { if (typeof cp[k] === "object") cp[k] = cp[k].str; });
          last.specs.push({ type: cm[1], props: cp });
          continue;
        }
        const m = /^\s*([^:+]+?)\s*:\s*(\w+)\s*(.*)$/.exec(raw);
        if (!m) fail(`صيغة المشهد: "Name: GameObject key=value" أو "+ Component" ووُجد "${raw.trim()}"`);
        const [, name, type, rest] = m;
        const pr = parseProps(rest);
        Object.keys(pr).forEach(k => { if (typeof pr[k] === "object") pr[k] = pr[k].str; });
        while (stack.length > 1 && stack[stack.length - 1].ind >= ind) stack.pop();
        const parent = stack[stack.length - 1].e;
        const e = world.add({ name, type: "GameObject", pos: pr.pos ? tuple(pr.pos) : [0, 0, 0] }, parent);
        const go = new GO(e);
        U.gos.push(go);
        if (pr.scale) { const [x, y] = tuple(pr.scale); e.scale.x = x; e.scale.y = y ?? x; }
        if (pr.rot) e.rot = +pr.rot;
        if (pr.tag) go.tag = pr.tag;
        if (pr.layer) go.layer = layerIndex(pr.layer);
        if (pr.active === "false") e.active = false;
        if (pr.ui) e.data.ui = tuple(pr.ui);
        const specs = [];
        if (pr.sprite) { e.visual = { sprite: pr.sprite, frame: pr.sprite === "player" ? 4 : 0, frameW: pr.sprite === "player" ? 32 : null, frameH: pr.sprite === "player" ? 48 : null }; specs.push({ type: "SpriteRenderer", props: { color: pr.color } }); }
        else if (pr.color && pr.size) { const [w, h] = tuple(pr.size); e.visual = { color: pr.color, w, h }; specs.push({ type: "SpriteRenderer", props: {} }); }
        else if (pr.color && pr.circle) { const r = +pr.circle; e.visual = { color: pr.color, w: r * 2, h: r * 2, circle: true }; specs.push({ type: "SpriteRenderer", props: {} }); }
        if (type === "Camera") specs.push({ type: "Camera", props: pr });
        if (type === "Image") specs.push({ type: "Image", props: pr });
        if (type === "Button") specs.push({ type: "Button", props: pr });
        if (type === "Text" || type === "TextMeshPro") specs.push({ type: type === "Text" ? "Text" : "TextMeshProUGUI", props: { text: pr.text, color: pr.color, fontSize: pr.fontSize } });
        last = { go, specs, line: raw };
        made.push(last);
        stack.push({ ind, go, e });
      }
      return made;
    }
    // قيم الحقول من المشهد (ما يُضبط في Inspector)
    function resolveRef(name, scope) {
      const inScope = scope && scope.find(x => x.go.name === name);
      if (inScope) return inScope.go;
      const g = U.gos.find(x => x.name === name && !x.destroyed);
      if (g) return g;
      if (U.prefabs[name]) return prefabRef(name);
      fail(`المرجع @${name} غير موجود في المشهد ولا في الـ prefabs`);
    }
    function sceneValue(raw, type, scope, field) {
      const t = type ? type.name : null;
      if (type && type.array || t === "List") {
        const items = String(raw).replace(/^\[|\]$/g, "").split(",").map(x => x.trim()).filter(Boolean);
        const et = type.array ? { name: t, args: [] } : type.args[0];
        const arr = items.map(x => sceneValue(x, et, scope));
        return type.array ? new CArr(arr, et) : new CList(arr, et);
      }
      if (/^@/.test(raw)) {
        const target = resolveRef(raw.slice(1), scope);
        if (target.__prefab) { if (t && t !== "GameObject") target.compType = t; return target; }
        if (!t || t === "GameObject") return target;
        if (t === "Transform") return target.tr;
        const c = getComponent(target, t);
        if (c.__missing) fail(`الكائن ${target.name} ليس فيه ${t} (الحقل ${field})`);
        return c;
      }
      if (t === "AudioClip" || /^clip:/.test(raw)) return clipOf(raw);
      if (t === "LayerMask") return layerMask(String(raw).split("|").reduce((m, n) => m | (1 << layerIndex(n.trim())), 0));
      if (t === "Color") return hexColor(raw) || new Color(1, 1, 1);
      if (t === "Vector2" || t === "Vector3") { const [x, y, z] = tuple(raw); return t === "Vector2" ? V2(x, y) : V3(x, y, z || 0); }
      if (t && rt.enums.has(t)) { const e = rt.enums.get(t); if (!e.members.has(raw)) fail(`${t} ليس فيه ${raw}`); return new EnumVal(t, raw, e.members.get(raw)); }
      if (t === "string") return String(raw);
      if (t === "bool") return raw === "true";
      if (/^-?\d+$/.test(raw)) return t === "float" ? F(+raw) : t === "double" ? D(+raw) : +raw;
      if (/^-?\d*\.\d+$/.test(raw)) { if (t === "int") fail(`القيمة ${raw} ليست عدداً صحيحاً للحقل ${field}`); return t === "double" ? D(+raw) : F(+raw); }
      if (raw === "true" || raw === "false") return raw === "true";
      return String(raw);
    }
    function assignFields(obj, pr, go, scope) {
      for (const [k, raw] of Object.entries(pr || {})) {
        const fd = rt.findField(obj.cls, k);
        if (!fd) { say(`⚠️ ${obj.cls.name} ليس فيه حقل ${k} (القيمة في المشهد تُتجاهل)`, "info"); continue; }
        const serialized = fd.f.mods.has("public") || fd.f.attrs.includes("SerializeField");
        if (!serialized || fd.f.isStatic) { say(`⚠️ الحقل ${k} في ${obj.cls.name} ليس public ولا [SerializeField] فلا يظهر في Inspector`, "info"); continue; }
        obj.f.set(k, rt.coerce(sceneValue(raw, fd.f.type, scope, k), fd.f.type));
      }
    }
    function prefabRef(name) {
      return { __prefab: true, __type: "GameObject", __types: ["GameObject", "Object"], name, __get(k) { return k === "name" ? name : undefined; }, __str() { return `${name} (UnityEngine.GameObject)`; } };
    }
    // إنشاء شجرة كائنات من أسطر (مشهد أو prefab) ثم المكونات والحقول و Awake
    function spawn(lines, parentE, live, rename) {
      const made = buildTree(lines, parentE);
      if (rename && made[0]) made[0].go.e.name = rename;
      for (const m of made) for (const sp of m.specs) { const c = addComponent(m.go, sp.type, sp.props, false); if (c instanceof Obj) c.scope = made; }
      for (const m of made) for (const c of m.go.comps) if (c instanceof Obj) assignFields(c, c.props, m.go, made);
      for (const m of made) for (const c of m.go.comps) if (c instanceof Button && c.pending) {
        const [target, method] = c.pending.replace(/^@/, "").split(".");
        const tgo = resolveRef(target, made);
        const obj = scriptsOf(tgo).find(o => rt.findMethod(o.cls, method, 0));
        if (!obj) fail(`onClick: لا توجد دالة public اسمها ${method} على ${target}`);
        c.onClick.list.push(new Callable(() => rt.callMethod(obj, method, []), method));
      }
      for (const m of made) m.go.spec = lines;
      if (live) for (const m of made) for (const c of m.go.comps) if (c instanceof Obj) awake(c);
      return made;
    }
    function awake(obj) {
      if (obj.awoken || !obj.go.e.isActive()) return;
      obj.awoken = true;
      message(obj, "Awake", []);
      if (obj.enabled) message(obj, "OnEnable", []);
      U.pendingStart.push(obj);
    }
    function setActive(go, on) {
      if (go.e.active === on) return;
      const before = subtree(go).filter(g => g.e.isActive());
      go.e.active = on;
      if (!on) before.forEach(g => { scriptsOf(g).forEach(o => { if (o.awoken && o.enabled) message(o, "OnDisable", []); }); stopCoroutinesOf(g); });
      else subtree(go).filter(g => g.e.isActive()).forEach(g => scriptsOf(g).forEach(o => { if (!o.awoken) awake(o); else if (o.enabled) message(o, "OnEnable", []); }));
    }

    // ---------- الرسائل والاستثناءات ----------
    function report(e, where) {
      if (e instanceof cs.CSException) {
        const loc = rt.curLine ? ` (${rt.curFn || where}، السطر ${rt.curLine})` : "";
        const key = e.type + e.message + loc;
        if (U.errors.has(key)) return;
        U.errors.add(key);
        say(`${e.type}: ${e.message}${loc}`, "err");
        return;
      }
      throw e;   // خطأ ترجمة: يوقف اللعبة
    }
    function message(obj, name, args) {
      if (!(obj instanceof Obj)) return;
      const m = rt.findMethod(obj.cls, name, args.length) || (args.length ? rt.findMethod(obj.cls, name, 0) : null);
      if (!m) return;
      try {
        const r = rt.invoke(m.m, m.cls, obj, m.m.params.length ? args : [], m.m.line);
        if (r instanceof Enumerator && name !== "Awake") startCoroutine(obj, r);   // Start يمكن أن يكون IEnumerator
      } catch (e) { report(e, `${obj.cls.name}.${name}`); }
    }
    const live = o => !o.destroyed && !o.go.destroyed && o.go.e.isActive();
    function broadcast(name) {
      for (const o of U.scripts.slice()) if (live(o) && o.enabled && o.started && rt.hasMethod(o.cls, name)) message(o, name, []);
    }

    // ---------- Coroutines و Invoke ----------
    function startCoroutine(owner, en) {
      if (!(en instanceof Enumerator)) fail("StartCoroutine تحتاج IEnumerator: استدعِ الدالة StartCoroutine(Name()) وليس StartCoroutine(Name)");
      const c = { owner, en, done: false, wait: null, __type: "Coroutine" };
      U.coroutines.push(c);
      stepCo(c);
      return c;
    }
    function stepCo(c) {
      let ok;
      try { ok = c.en.MoveNext(); } catch (e) { c.done = true; report(e, "Coroutine"); return; }
      if (!ok) { c.done = true; return; }
      const v = c.en.Current;
      if (v === null || isNum(v)) c.wait = { frame: U.frameCount };
      else if (v.__wait === "seconds") c.wait = { until: U.time + v.t };
      else if (v.__wait === "realtime") c.wait = { real: U.unscaled + v.t };
      else if (v.__wait === "fixed") c.wait = { fixed: true };
      else if (v.__wait === "end") c.wait = { frame: U.frameCount - 1 };
      else if (v.__wait === "until") c.wait = { pred: v.fn, want: true };
      else if (v.__wait === "while") c.wait = { pred: v.fn, want: false };
      else if (v instanceof Enumerator) c.wait = { co: startCoroutine(c.owner, v) };
      else if (v.__type === "Coroutine") c.wait = { co: v };
      else c.wait = { frame: U.frameCount };
    }
    function resumeCoroutines(fixed) {
      for (const c of U.coroutines.slice()) {
        if (c.done || !c.wait) continue;
        if (c.owner && (c.owner.destroyed || c.owner.go.destroyed || !c.owner.go.e.isActive())) { c.done = true; continue; }
        const w = c.wait;
        let go = false;
        if (fixed) go = !!w.fixed;
        else if (w.frame !== undefined) go = U.frameCount > w.frame;
        else if (w.until !== undefined) go = U.time >= w.until - 1e-6;
        else if (w.real !== undefined) go = U.unscaled >= w.real - 1e-6;
        else if (w.co) go = w.co.done;
        else if (w.pred) { try { go = rt.truthy(rt.callValue(w.pred, [])) === w.want; } catch (e) { report(e, "WaitUntil"); c.done = true; } }
        if (go) { c.wait = null; stepCo(c); }
      }
      U.coroutines = U.coroutines.filter(c => !c.done);
    }
    function stopCoroutinesOf(go) { U.coroutines.forEach(c => { if (c.owner && c.owner.go === go) c.done = true; }); U.invokes = U.invokes.filter(i => i.obj.go !== go); }
    function runInvokes() {
      for (const iv of U.invokes.slice()) {
        if (iv.dead) continue;
        if (iv.obj.destroyed || iv.obj.go.destroyed) { iv.dead = true; continue; }
        if (U.time >= iv.at - 1e-6) {
          if (iv.rate > 0) iv.at += iv.rate; else iv.dead = true;
          if (iv.obj.go.e.isActive()) message(iv.obj, iv.name, []);
        }
      }
      U.invokes = U.invokes.filter(i => !i.dead);
    }

    // ---------- الإنشاء والحذف ----------
    function instantiate(orig, pos, rot, parent) {
      let lines, name, compType = null;
      if (orig && orig.__prefab) { lines = U.prefabs[orig.name]; name = orig.name + "(Clone)"; compType = orig.compType; }
      else if (orig instanceof GO) { lines = orig.spec; name = orig.name + "(Clone)"; }
      else if (orig && orig.go) { lines = orig.go.spec; name = orig.go.name + "(Clone)"; compType = orig instanceof Obj ? orig.cls.name : orig.__type; }
      else if (orig && orig.__unassigned) checkAlive(orig);
      else raise("ArgumentException", "The Object you want to instantiate is null.");
      if (!lines) fail("لا يمكن نسخ هذا الكائن");
      // نبني الشجرة بلا Awake ثم نضبط الموضع ثم Awake (كما في Unity: الموضع جاهز في Awake)
      const made = spawn(lines, parent ? parent.go.e : world.root, false, name);
      const go = made[0].go;
      if (pos) { go.e.pos.x = pos.x; go.e.pos.y = pos.y; if (parent) { const pg = parent.go.e.global(); go.e.pos.x -= pg.x; go.e.pos.y -= pg.y; } }
      if (rot) go.e.rot = rot.z;
      for (const m of made) for (const c of m.go.comps) if (c instanceof Obj) awake(c);
      return compType ? getComponent(go, compType) : go;
    }
    function destroy(obj, t) {
      if (obj === null || obj === undefined) return;
      checkAlive(obj);
      if (t && nv(t) > 0) { U.timedDestroy.push({ obj, at: U.time + nv(t) }); return; }
      U.pendingDestroy.push(obj);
    }
    function processDestroy() {
      for (const td of U.timedDestroy.slice()) if (U.time >= td.at - 1e-6) { U.pendingDestroy.push(td.obj); td.done = true; }
      U.timedDestroy = U.timedDestroy.filter(t => !t.done);
      for (const obj of U.pendingDestroy.splice(0)) {
        if (obj instanceof GO) {
          if (obj.destroyed) continue;
          for (const g of subtree(obj).reverse()) {
            scriptsOf(g).forEach(o => { if (o.awoken && o.enabled && g.e.isActive()) message(o, "OnDisable", []); if (o.awoken) message(o, "OnDestroy", []); o.destroyed = true; });
            g.destroyed = true;
            stopCoroutinesOf(g);
          }
          world.destroy(obj.e);
          U.scripts = U.scripts.filter(o => !o.destroyed);
        } else if (obj.go) {
          const go = obj.go;
          go.comps = go.comps.filter(c => c !== obj);
          obj.destroyed = true;
          if (obj instanceof Obj) { if (obj.awoken && obj.enabled) message(obj, "OnDisable", []); message(obj, "OnDestroy", []); U.scripts = U.scripts.filter(o => o !== obj); U.coroutines.forEach(c => { if (c.owner === obj) c.done = true; }); }
          if (obj instanceof Rigidbody2D || obj instanceof Collider) applyPhysics(go);
          if (obj instanceof SpriteRenderer && go.e.visual) go.e.visual.hidden = true;
        }
      }
    }

    // ---------- الفيزياء: أحداث ← رسائل ----------
    const colliderOf = go => go.comps.find(c => c instanceof Collider) || null;
    function contactNormal(a, b) {
      const p = world.aabb(a.e), q = world.aabb(b.e);
      const ox = Math.min(p.x2, q.x2) - Math.max(p.x1, q.x1), oy = Math.min(p.y2, q.y2) - Math.max(p.y1, q.y1);
      const dx = (p.x1 + p.x2) / 2 - (q.x1 + q.x2) / 2, dy = (p.y1 + p.y2) / 2 - (q.y1 + q.y2) / 2;
      return ox < oy ? V2(Math.sign(dx) || 1, 0) : V2(0, Math.sign(dy) || 1);
    }
    function collision2D(self, other) {
      const n = contactNormal(self, other);
      const rb = other.comps.find(c => c instanceof Rigidbody2D) || null;
      const contact = { __type: "ContactPoint2D", __get: k => k === "normal" ? n : k === "point" ? V2(self.e.global().x, self.e.global().y) : undefined };
      return {
        __type: "Collision2D",
        __get: k => ({ gameObject: other, collider: colliderOf(other), transform: other.tr, rigidbody: rb, otherCollider: colliderOf(self), relativeVelocity: V2(self.e.vel.x - other.e.vel.x, self.e.vel.y - other.e.vel.y), contactCount: 1 })[k],
        __call: (k, A) => k === "GetContact" ? { v: contact } : undefined,
        __str: () => "UnityEngine.Collision2D"
      };
    }
    world.on((type, a, b) => {
      const ga = a.data.go, gb = b.data.go;
      if (!ga || !gb || ga.destroyed || gb.destroyed) return;
      const dyn = g => g.e.body === "rigid", hasRb = g => g.comps.some(c => c instanceof Rigidbody2D);
      const [kind, phase] = type.split("-");
      if (kind === "collision" && !(dyn(ga) || dyn(gb))) return;
      if (kind === "trigger" && !(hasRb(ga) || hasRb(gb))) return;
      const msg = (kind === "collision" ? "OnCollision" : "OnTrigger") + (phase === "enter" ? "Enter" : "Exit") + "2D";
      for (const [s, o] of [[ga, gb], [gb, ga]]) {
        const arg = kind === "collision" ? collision2D(s, o) : colliderOf(o);
        scriptsOf(s).forEach(obj => { if (live(obj)) message(obj, msg, [arg]); });
      }
    });
    function raycast(origin, dir, dist = Infinity, mask = ~4) {
      const len = Math.hypot(dir.x, dir.y) || 1, dx = dir.x / len, dy = dir.y / len;
      let best = null;
      for (const go of U.gos) {
        if (go.destroyed || !go.e.isActive() || !go.e.shape || !((1 << go.layer) & mask)) continue;
        const col = colliderOf(go);
        if (!col || !col.enabled) continue;
        const b = world.aabb(go.e);
        let t1 = -Infinity, t2 = Infinity, nx = 0, ny = 0;
        const inside = origin.x >= b.x1 && origin.x <= b.x2 && origin.y >= b.y1 && origin.y <= b.y2;
        if (inside) { t1 = 0; nx = -dx; ny = -dy; }   // Queries Start In Colliders: الشعاع من داخل جسم يصيبه فوراً
        else {
          let ok = true;
          for (const [o, d, lo, hi, ax] of [[origin.x, dx, b.x1, b.x2, "x"], [origin.y, dy, b.y1, b.y2, "y"]]) {
            if (Math.abs(d) < 1e-12) { if (o < lo || o > hi) ok = false; continue; }
            let ta = (lo - o) / d, tb = (hi - o) / d;
            const sgn = ta > tb ? 1 : -1;
            if (ta > tb) [ta, tb] = [tb, ta];
            if (ta > t1) { t1 = ta; nx = ax === "x" ? sgn : 0; ny = ax === "y" ? sgn : 0; }
            t2 = Math.min(t2, tb);
          }
          if (!ok || t1 > t2 || t1 < 0) continue;
        }
        if (t1 <= dist && (!best || t1 < best.d)) best = { go, d: t1, nx, ny };
      }
      const hit = best;
      return {
        __type: "RaycastHit2D", __struct: false,
        __bool: () => !!hit,
        __get: k => ({ collider: hit ? colliderOf(hit.go) : null, distance: F(hit ? hit.d : 0), point: hit ? V2(origin.x + dx * hit.d, origin.y + dy * hit.d) : V2(0, 0), normal: hit ? V2(hit.nx, hit.ny) : V2(0, 0), transform: hit ? hit.go.tr : null, rigidbody: hit ? hit.go.comps.find(c => c instanceof Rigidbody2D) || null : null })[k],
        __str: () => "UnityEngine.RaycastHit2D"
      };
    }
    function overlapCircle(p, r, mask = -1) {
      for (const go of U.gos) {
        if (go.destroyed || !go.e.isActive() || !go.e.shape || !((1 << go.layer) & mask)) continue;
        const b = world.aabb(go.e);
        const cx = Math.max(b.x1, Math.min(p.x, b.x2)), cy = Math.max(b.y1, Math.min(p.y, b.y2));
        if ((cx - p.x) ** 2 + (cy - p.y) ** 2 <= r * r) return colliderOf(go);
      }
      return null;
    }
    const layerMask = v => ({ __type: "LayerMask", value: v, __get(k) { return k === "value" ? this.value : undefined; }, __str() { return String(this.value); } });
    const maskVal = m => m && m.__type === "LayerMask" ? m.value : m === undefined ? undefined : nv(m);

    // ---------- الإدخال ----------
    const AXES = { Horizontal: [["left", "a"], ["right", "d"]], Vertical: [["down", "s"], ["up", "w"]] };
    const BUTTONS = { Jump: ["space"], Fire1: ["ctrl", "mouse0"], Fire2: ["alt", "mouse1"], Submit: ["enter"], Cancel: ["escape"] };
    const down = k => k === "mouse0" ? world.input.mouse.down : world.input.down.has(k);
    const pressed = k => k === "mouse0" ? world.input.mouse.pressed : world.input.pressed.has(k);
    const released = k => k === "mouse0" ? world.input.mouse.released : world.input.released.has(k);
    const keyName = (k, line) => {
      if (k instanceof EnumVal) return KEYS[k.name];
      if (typeof k === "string") return ({ space: "space", left: "left", right: "right", up: "up", down: "down", enter: "enter", "return": "enter", escape: "escape" })[k] || k.toLowerCase();
      fail("GetKey تحتاج KeyCode مثل KeyCode.Space", line);
    };
    function updateAxes(dt) {
      for (const [ax, [neg, pos]] of Object.entries(AXES)) {
        const target = (pos.some(down) ? 1 : 0) - (neg.some(down) ? 1 : 0);
        let v = U.axes[ax];
        if (target && Math.sign(target) !== Math.sign(v) && v !== 0) v = 0;   // snap
        const step = 3 * dt;
        v = target ? (Math.abs(target - v) <= step ? target : v + Math.sign(target - v) * step) : (Math.abs(v) <= step ? 0 : v - Math.sign(v) * step);
        U.axes[ax] = v;
      }
    }
    const isMobile = () => ["Android", "IPhonePlayer"].includes(U.platform);
    const mouseScreen = () => V3(world.input.mouse.x, 320 - world.input.mouse.y, 0);
    function touches() {
      const m = world.input.mouse;
      if (!isMobile() || !(m.down || m.released)) return [];
      const phase = m.pressed ? "Began" : m.released ? "Ended" : "Stationary";
      return [{ __type: "Touch", __struct: true, __get: k => ({ position: V2(m.x, 320 - m.y), phase: ENUMS.TouchPhase[phase], fingerId: 0, deltaPosition: V2(0, 0), tapCount: 1 })[k] }];
    }

    // ---------- المتغيرات العامة (الأصناف الثابتة) ----------
    const st = (name, get, call) => new TypeRef(name, null, { __get: get || (() => undefined), __call: call || (() => undefined) });
    const vecStatics = dim => st(dim === 2 ? "Vector2" : "Vector3", n => {
      const mk = (x, y, z = 0) => new Vec(x, y, z, dim);
      return ({ zero: mk(0, 0), one: mk(1, 1, dim === 3 ? 1 : 0), up: mk(0, 1), down: mk(0, -1), left: mk(-1, 0), right: mk(1, 0), forward: mk(0, 0, 1), back: mk(0, 0, -1), positiveInfinity: mk(Infinity, Infinity, Infinity) })[n];
    }, (n, A) => {
      const [a, b, c] = A;
      switch (n) {
        case "Distance": return { v: F(Math.hypot(a.x - b.x, a.y - b.y, a.z - b.z)) };
        case "Lerp": { const t = Math.max(0, Math.min(1, nv(c))); return { v: new Vec(a.x + (b.x - a.x) * t, a.y + (b.y - a.y) * t, a.z + (b.z - a.z) * t, dim) }; }
        case "LerpUnclamped": { const t = nv(c); return { v: new Vec(a.x + (b.x - a.x) * t, a.y + (b.y - a.y) * t, a.z + (b.z - a.z) * t, dim) }; }
        case "MoveTowards": { const dx = b.x - a.x, dy = b.y - a.y, dz = b.z - a.z, l = Math.hypot(dx, dy, dz), m = nv(c); return { v: l <= m || l === 0 ? new Vec(b.x, b.y, b.z, dim) : new Vec(a.x + dx / l * m, a.y + dy / l * m, a.z + dz / l * m, dim) }; }
        case "Dot": return { v: F(a.x * b.x + a.y * b.y + a.z * b.z) };
        case "Angle": { const d = (a.x * b.x + a.y * b.y + a.z * b.z) / ((a.mag * b.mag) || 1); return { v: F(Math.acos(Math.max(-1, Math.min(1, d))) * 180 / Math.PI) }; }
        case "SignedAngle": { const ang = Math.atan2(a.x * b.y - a.y * b.x, a.x * b.x + a.y * b.y) * 180 / Math.PI; return { v: F(ang) }; }
        case "ClampMagnitude": { const m = nv(b), l = a.mag; return { v: l > m ? new Vec(a.x / l * m, a.y / l * m, a.z / l * m, dim) : a }; }
        case "Scale": return { v: new Vec(a.x * b.x, a.y * b.y, a.z * b.z, dim) };
        case "Max": return { v: new Vec(Math.max(a.x, b.x), Math.max(a.y, b.y), Math.max(a.z, b.z), dim) };
        case "Min": return { v: new Vec(Math.min(a.x, b.x), Math.min(a.y, b.y), Math.min(a.z, b.z), dim) };
        case "Perpendicular": return { v: V2(-a.y, a.x) };
        case "Reflect": { const d = 2 * (a.x * b.x + a.y * b.y + a.z * b.z); return { v: new Vec(a.x - d * b.x, a.y - d * b.y, a.z - d * b.z, dim) }; }
      }
    });
    const bankers = x => { const r = Math.round(x); return Math.abs(x % 1) === 0.5 ? 2 * Math.round(x / 2) : r; };
    const mathf = st("Mathf", n => ({ PI: F(Math.PI), Infinity: F(Infinity), NegativeInfinity: F(-Infinity), Deg2Rad: F(Math.PI / 180), Rad2Deg: F(180 / Math.PI), Epsilon: F(1.401298e-45) })[n], (n, A) => {
      const x = A.map(nv);
      const f = v => ({ v: F(v) });
      switch (n) {
        case "Abs": return { v: typeof A[0] === "number" ? Math.abs(A[0]) : F(Math.abs(x[0])) };
        case "Clamp": { const r = Math.min(Math.max(x[0], x[1]), x[2]); return { v: A.every(a => typeof a === "number") ? r : F(r) }; }
        case "Clamp01": return f(Math.min(Math.max(x[0], 0), 1));
        case "Lerp": return f(x[0] + (x[1] - x[0]) * Math.min(Math.max(x[2], 0), 1));
        case "LerpUnclamped": return f(x[0] + (x[1] - x[0]) * x[2]);
        case "InverseLerp": return f(x[0] === x[1] ? 0 : Math.min(Math.max((x[2] - x[0]) / (x[1] - x[0]), 0), 1));
        case "MoveTowards": return f(Math.abs(x[1] - x[0]) <= x[2] ? x[1] : x[0] + Math.sign(x[1] - x[0]) * x[2]);
        case "Max": { const arr = A.length === 1 && A[0] instanceof CArr ? A[0].a.map(nv) : x; const r = Math.max(...arr); return { v: A.every(a => typeof a === "number") ? r : F(r) }; }
        case "Min": { const arr = A.length === 1 && A[0] instanceof CArr ? A[0].a.map(nv) : x; const r = Math.min(...arr); return { v: A.every(a => typeof a === "number") ? r : F(r) }; }
        case "Sqrt": return f(Math.sqrt(x[0]));
        case "Pow": return f(Math.pow(x[0], x[1]));
        case "Sin": return f(Math.sin(x[0])); case "Cos": return f(Math.cos(x[0])); case "Tan": return f(Math.tan(x[0]));
        case "Atan2": return f(Math.atan2(x[0], x[1])); case "Atan": return f(Math.atan(x[0]));
        case "Round": return f(bankers(x[0]));
        case "RoundToInt": return { v: bankers(x[0]) };
        case "Floor": return f(Math.floor(x[0])); case "Ceil": return f(Math.ceil(x[0]));
        case "FloorToInt": return { v: Math.floor(x[0]) }; case "CeilToInt": return { v: Math.ceil(x[0]) };
        case "Sign": return f(x[0] >= 0 ? 1 : -1);
        case "Approximately": return { v: Math.abs(x[1] - x[0]) < Math.max(1e-6 * Math.max(Math.abs(x[0]), Math.abs(x[1])), 1.121039e-44) };
        case "PingPong": { const t = x[0] % (2 * x[1]); return f(x[1] - Math.abs(t - x[1])); }
        case "Repeat": return f(x[0] - Math.floor(x[0] / x[1]) * x[1]);
        case "Exp": return f(Math.exp(x[0])); case "Log": return f(A.length > 1 ? Math.log(x[0]) / Math.log(x[1]) : Math.log(x[0]));
        case "DeltaAngle": { let d = (x[1] - x[0]) % 360; if (d > 180) d -= 360; if (d < -180) d += 360; return f(d); }
        case "SmoothStep": { const t = Math.min(Math.max(x[2], 0), 1); const s = t * t * (3 - 2 * t); return f(x[0] + (x[1] - x[0]) * s); }
        case "IsPowerOfTwo": return { v: x[0] > 0 && (x[0] & (x[0] - 1)) === 0 };
      }
    });
    const sysMath = st("Math", n => ({ PI: D(Math.PI), E: D(Math.E) })[n], (n, A) => {
      const x = A.map(nv), allInt = A.every(a => typeof a === "number");
      const d = v => ({ v: D(v) });
      switch (n) {
        case "Abs": return { v: allInt ? Math.abs(x[0]) : new Num(Math.abs(x[0]), A[0].t) };
        case "Max": return { v: allInt ? Math.max(...x) : D(Math.max(...x)) };
        case "Min": return { v: allInt ? Math.min(...x) : D(Math.min(...x)) };
        case "Sqrt": return d(Math.sqrt(x[0])); case "Pow": return d(Math.pow(x[0], x[1]));
        case "Round": return d(A.length > 1 ? Math.round(x[0] * 10 ** x[1]) / 10 ** x[1] : bankers(x[0]));
        case "Floor": return d(Math.floor(x[0])); case "Ceiling": return d(Math.ceil(x[0]));
        case "Clamp": return { v: allInt ? Math.min(Math.max(x[0], x[1]), x[2]) : D(Math.min(Math.max(x[0], x[1]), x[2])) };
      }
    });
    const timeRef = st("Time", n => ({
      deltaTime: F(U.inFixed ? 0.02 * U.timeScale : U.dt * U.timeScale), time: F(U.inFixed ? U.fixedTime : U.time), fixedDeltaTime: F(0.02), timeScale: F(U.timeScale),
      unscaledDeltaTime: F(U.dt), unscaledTime: F(U.unscaled), frameCount: U.frameCount, fixedTime: F(U.fixedTime), realtimeSinceStartup: F(U.unscaled), timeSinceLevelLoad: F(U.time - (U.levelStart || 0))
    })[n]);
    timeRef.native.__set = (n, v) => { if (n === "timeScale") { U.timeScale = Math.max(0, nv(v)); return; } if (n === "fixedDeltaTime") return; return false; };
    const inputRef = st("Input", n => {
      switch (n) {
        case "mousePosition": return mouseScreen();
        case "anyKey": return world.input.down.size > 0 || world.input.mouse.down;
        case "anyKeyDown": return world.input.pressed.size > 0 || world.input.mouse.pressed;
        case "touchCount": return touches().length;
        case "touches": return new CArr(touches(), { name: "Touch", args: [] });
        case "touchSupported": return isMobile();
        case "inputString": return "";
      }
    }, (n, A, targs, line) => {
      switch (n) {
        case "GetAxis": if (!AXES[A[0]]) raise("ArgumentException", `Input Axis ${A[0]} is not setup.\n To change the input settings use: Edit -> Settings -> Input`); return { v: F(U.axes[A[0]]) };
        case "GetAxisRaw": { if (!AXES[A[0]]) raise("ArgumentException", `Input Axis ${A[0]} is not setup.`); const [neg, pos] = AXES[A[0]]; return { v: F((pos.some(down) ? 1 : 0) - (neg.some(down) ? 1 : 0)) }; }
        case "GetKey": return { v: down(keyName(A[0], line)) };
        case "GetKeyDown": return { v: pressed(keyName(A[0], line)) };
        case "GetKeyUp": return { v: released(keyName(A[0], line)) };
        case "GetButton": case "GetButtonDown": case "GetButtonUp": {
          const keys = BUTTONS[A[0]];
          if (!keys) raise("ArgumentException", `Input Button ${A[0]} is not setup.\n To change the input settings use: Edit -> Settings -> Input`);
          const fn = n === "GetButton" ? down : n === "GetButtonDown" ? pressed : released;
          return { v: keys.some(fn) };
        }
        case "GetMouseButton": return { v: nv(A[0]) === 0 ? world.input.mouse.down : false };
        case "GetMouseButtonDown": return { v: nv(A[0]) === 0 ? world.input.mouse.pressed : false };
        case "GetMouseButtonUp": return { v: nv(A[0]) === 0 ? world.input.mouse.released : false };
        case "GetTouch": { const t = touches(); if (A[0] >= t.length) raise("ArgumentException", "Index out of bounds."); return { v: t[A[0]] }; }
      }
    });
    const randomRef = st("Random", n => n === "value" ? F(rand()) : n === "insideUnitCircle" ? (() => { const a = rand() * Math.PI * 2, r = Math.sqrt(rand()); return V2(Math.cos(a) * r, Math.sin(a) * r); })() : n === "rotation" ? new Quat(rand() * 360) : undefined, (n, A) => {
      if (n === "Range") { if (A.every(a => typeof a === "number")) return { v: A[1] <= A[0] ? A[0] : A[0] + Math.floor(rand() * (A[1] - A[0])) }; return { v: F(nv(A[0]) + rand() * (nv(A[1]) - nv(A[0]))) }; }
      if (n === "InitState") { U.rng = nv(A[0]) >>> 0 || 1; return { v: null }; }
    });
    const findAll = t => U.gos.filter(g => !g.destroyed && g.e.isActive()).flatMap(g => g.comps.filter(c => compIs(c, t) && (!(c instanceof Obj) || !c.destroyed)));
    const objStatics = (n, A, targs) => {
      const tname = () => targs && targs[0] ? targs[0].name : A[0] instanceof TypeRef ? A[0].name : null;
      switch (n) {
        case "Instantiate": {
          const [o, a, b, c] = A;
          if (a && a.__type === "Transform") return { v: instantiate(o, null, null, a) };
          return { v: instantiate(o, a || null, b || null, c || null) };
        }
        case "Destroy": destroy(A[0], A[1]); return { v: null };
        case "DestroyImmediate": destroy(A[0]); processDestroy(); return { v: null };
        case "DontDestroyOnLoad": { const g = A[0] instanceof GO ? A[0] : A[0].go; g.dontDestroy = true; return { v: null }; }
        case "FindObjectOfType": case "FindFirstObjectByType": case "FindAnyObjectByType": return { v: findAll(tname())[0] || null };
        case "FindObjectsOfType": case "FindObjectsByType": return { v: new CArr(findAll(tname()), { name: tname(), args: [] }) };
      }
    };
    const gameObjectRef = st("GameObject", () => undefined, (n, A) => {
      const act = U.gos.filter(g => !g.destroyed && g.e.isActive());
      switch (n) {
        case "Find": return { v: act.find(g => g.name === A[0] || g.e.path() === A[0]) || null };
        case "FindWithTag": case "FindGameObjectWithTag": return { v: act.find(g => g.tag === A[0]) || null };
        case "FindGameObjectsWithTag": return { v: new CArr(act.filter(g => g.tag === A[0]), { name: "GameObject", args: [] }) };
      }
      return objStatics(n, A);
    });
    const mainCam = () => U.gos.find(g => !g.destroyed && g.e.isActive() && g.tag === "MainCamera" && g.comps.some(c => c instanceof CameraComp));
    const sceneInfo = () => ({ __type: "Scene", __get: k => k === "name" ? U.sceneName : k === "buildIndex" ? Math.max(0, U.scenes.findIndex(s => s.name === U.sceneName)) : k === "isLoaded" ? true : undefined, __str: () => U.sceneName });
    const prefsRef = st("PlayerPrefs", () => undefined, (n, A) => {
      const k = A[0];
      switch (n) {
        case "SetInt": U.prefs.set(k, A[1] | 0); return { v: null };
        case "SetFloat": U.prefs.set(k, F(nv(A[1]))); return { v: null };
        case "SetString": U.prefs.set(k, String(A[1])); return { v: null };
        case "GetInt": { const v = U.prefs.get(k); return { v: typeof v === "number" ? v : A.length > 1 ? A[1] : 0 }; }
        case "GetFloat": { const v = U.prefs.get(k); return { v: v instanceof Num ? v : A.length > 1 ? F(nv(A[1])) : F(0) }; }
        case "GetString": { const v = U.prefs.get(k); return { v: typeof v === "string" ? v : A.length > 1 ? A[1] : "" }; }
        case "HasKey": return { v: U.prefs.has(k) };
        case "DeleteKey": U.prefs.delete(k); return { v: null };
        case "DeleteAll": U.prefs.clear(); return { v: null };
        case "Save": return { v: null };
      }
    });
    const GLOBALS = {
      Debug: st("Debug", () => undefined, (n, A) => {
        const s = A.length ? (A[0] === null ? "Null" : toStr(A[0])) : "";
        if (n === "Log") { say(s); return { v: null }; }
        if (n === "LogWarning") { say("⚠️ " + s); return { v: null }; }
        if (n === "LogError") { say(s, "err"); return { v: null }; }
        if (n === "LogFormat") { say(fmtString(A[0], A.slice(1))); return { v: null }; }
        if (["DrawLine", "DrawRay", "Break"].includes(n)) return { v: null };
      }),
      Mathf: mathf, Math: sysMath, Time: timeRef, Input: inputRef, Random: randomRef,
      Vector2: vecStatics(2), Vector3: vecStatics(3),
      Quaternion: st("Quaternion", n => n === "identity" ? new Quat(0) : undefined, (n, A) => {
        if (n === "Euler") return { v: new Quat(A[0] instanceof Vec ? A[0].z : nv(A[2])) };
        if (n === "AngleAxis") return { v: new Quat(nv(A[0]) * (A[1].z < 0 ? -1 : 1)) };
        if (n === "Lerp" || n === "Slerp") return { v: new Quat(A[0].z + (A[1].z - A[0].z) * Math.min(1, Math.max(0, nv(A[2])))) };
        if (n === "LookRotation") return { v: new Quat(0) };
      }),
      Color: st("Color", n => COLORS[n] ? new Color(...COLORS[n]) : undefined, (n, A) => n === "Lerp" ? { v: new Color(...["r", "g", "b", "a"].map(k => A[0][k] + (A[1][k] - A[0][k]) * Math.min(1, Math.max(0, nv(A[2]))))) } : undefined),
      KeyCode: enumRef("KeyCode", KeyCode),
      Physics2D: st("Physics2D", n => n === "gravity" ? V2(world.gravity.x, world.gravity.y) : n === "queriesStartInColliders" ? true : n === "DefaultRaycastLayers" ? ~4 : undefined, (n, A) => {
        if (n === "Raycast") return { v: raycast(A[0], A[1], A.length > 2 ? nv(A[2]) : Infinity, A.length > 3 ? maskVal(A[3]) : ~4) };
        if (n === "OverlapCircle") return { v: overlapCircle(A[0], nv(A[1]), A.length > 2 ? maskVal(A[2]) : -1) };
        if (n === "OverlapPoint") return { v: overlapCircle(A[0], 0, A.length > 1 ? maskVal(A[1]) : -1) };
        if (n === "IgnoreCollision" || n === "IgnoreLayerCollision") return { v: null };
      }),
      LayerMask: st("LayerMask", () => undefined, (n, A) => {
        if (n === "GetMask") return { v: A.reduce((m, x) => m | (1 << layerIndex(x)), 0) };
        if (n === "NameToLayer") return { v: U.layers.indexOf(A[0]) };
        if (n === "LayerToName") return { v: U.layers[nv(A[0])] || "" };
      }),
      GameObject: gameObjectRef,
      Object: st("Object", () => undefined, objStatics),
      Camera: st("Camera", n => n === "main" ? (mainCam() ? mainCam().comps.find(c => c instanceof CameraComp) : null) : undefined),
      SceneManager: st("SceneManager", n => n === "sceneCountInBuildSettings" ? U.scenes.length : n === "sceneCount" ? 1 : undefined, (n, A) => {
        if (n === "LoadScene" || n === "LoadSceneAsync") {
          const target = typeof A[0] === "string" ? U.scenes.find(s => s.name === A[0]) : U.scenes[nv(A[0])];
          if (!target) { say(`Scene '${toStr(A[0])}' couldn't be loaded because it has not been added to the build settings or the AssetBundle has not been loaded.\nTo add a scene to the build settings use the menu File->Build Settings...`, "err"); return { v: null }; }
          U.loadScene = target; return { v: null };
        }
        if (n === "GetActiveScene") return { v: sceneInfo() };
      }),
      PlayerPrefs: prefsRef,
      Application: st("Application", n => ({
        platform: ENUMS.RuntimePlatform[U.platform], isEditor: U.platform === "WindowsEditor", isMobilePlatform: isMobile(), targetFrameRate: U.fps ?? -1,
        version: "1.0", productName: "CodeWay Game", companyName: "DefaultCompany", persistentDataPath: isMobile() ? "/storage/emulated/0/Android/data/com.codeway.game/files" : "C:/Users/Player/AppData/LocalLow/DefaultCompany/CodeWay Game",
        isPlaying: true, systemLanguage: new EnumVal("SystemLanguage", "Arabic", 1)
      })[n], (n, A) => {
        if (n === "Quit") { U.record.push("Quit"); info(U.platform === "WindowsEditor" ? "Application.Quit() يُتجاهل داخل المحرر" : "Application.Quit()"); return { v: null }; }
        if (n === "OpenURL") { U.record.push("OpenURL " + A[0]); info("OpenURL: " + A[0]); return { v: null }; }
      }),
      Screen: st("Screen", n => ({ width: U.screen.w, height: U.screen.h, fullScreen: U.screen.full, dpi: F(isMobile() ? 440 : 96), orientation: U.orientation || ENUMS.ScreenOrientation.LandscapeLeft, sleepTimeout: -1,
        currentResolution: { __type: "Resolution", __get: k => k === "width" ? U.screen.w : k === "height" ? U.screen.h : undefined, __str: () => `${U.screen.w} x ${U.screen.h} @ 60Hz` } })[n], (n, A) => {
        if (n === "SetResolution") { U.screen.w = A[0]; U.screen.h = A[1]; U.screen.full = typeof A[2] === "boolean" ? A[2] : A[2] && A[2].name !== "Windowed"; U.record.push(`SetResolution ${A[0]}x${A[1]} ${U.screen.full}`); return { v: null }; }
      }),
      QualitySettings: st("QualitySettings", n => n === "names" ? new CArr(["Very Low", "Low", "Medium", "High", "Very High", "Ultra"], { name: "string", args: [] }) : n === "vSyncCount" ? (U.vsync ?? 1) : undefined, (n, A) => {
        if (n === "SetQualityLevel") { U.quality = A[0]; U.record.push("Quality " + A[0]); return { v: null }; }
        if (n === "GetQualityLevel") return { v: U.quality };
      }),
      Handheld: st("Handheld", () => undefined, n => { if (n === "Vibrate") { U.record.push("Vibrate"); info("📳 Vibrate"); return { v: null }; } }),
      AudioSource: st("AudioSource", () => undefined, (n, A) => { if (n === "PlayClipAtPoint") { U.sounds.push(A[0].name); info(`🔊 ${A[0].name}`); return { v: null }; } }),
      int: st("int", n => ({ MaxValue: 2147483647, MinValue: -2147483648 })[n], (n, A) => {
        if (n === "Parse") { const s = String(A[0]).trim(); if (!/^[-+]?\d+$/.test(s)) raise("FormatException", "Input string was not in a correct format."); return { v: parseInt(s, 10) | 0 }; }
        if (n === "TryParse") { const s = String(A[0]).trim(); const ok = /^[-+]?\d+$/.test(s); A[1].set(ok ? parseInt(s, 10) | 0 : 0); return { v: ok }; }
      }),
      float: st("float", n => ({ MaxValue: F(3.4028235e38), MinValue: F(-3.4028235e38), Epsilon: F(1.401298e-45), PositiveInfinity: F(Infinity), NegativeInfinity: F(-Infinity), NaN: F(NaN) })[n], (n, A) => {
        if (n === "Parse") { const s = String(A[0]).trim(); if (!/^[-+]?\d*\.?\d+$/.test(s)) raise("FormatException", "Input string was not in a correct format."); return { v: F(+s) }; }
        if (n === "TryParse") { const s = String(A[0]).trim(); const ok = /^[-+]?\d*\.?\d+$/.test(s); A[1].set(F(ok ? +s : 0)); return { v: ok }; }
        if (n === "IsNaN") return { v: isNaN(nv(A[0])) };
      }),
      double: st("double", n => ({ MaxValue: D(Number.MAX_VALUE) })[n], (n, A) => n === "Parse" ? { v: D(+A[0]) } : undefined),
      string: st("string", n => n === "Empty" ? "" : undefined, (n, A) => {
        if (n === "Format") return { v: fmtString(A[0], A.slice(1)) };
        if (n === "Join") { const items = A[1] instanceof CList || A[1] instanceof CArr ? A[1].a : A.slice(1); return { v: items.map(toStr).join(toStr(A[0])) }; }
        if (n === "IsNullOrEmpty") return { v: A[0] === null || A[0] === "" };
        if (n === "IsNullOrWhiteSpace") return { v: A[0] === null || !String(A[0]).trim() };
        if (n === "Concat") return { v: A.map(toStr).join("") };
      }),
      Convert: st("Convert", () => undefined, (n, A) => n === "ToInt32" ? { v: Math.round(nv(A[0])) } : n === "ToString" ? { v: toStr(A[0]) } : undefined)
    };
    Object.entries(ENUMS).forEach(([k, v]) => { GLOBALS[k] = enumRef(k, v); });
    GLOBALS.SleepTimeout = st("SleepTimeout", n => ({ NeverSleep: -1, SystemSetting: -2 })[n]);
    GLOBALS.Application.native.__set = (n, v) => { if (n === "targetFrameRate") { U.fps = nv(v); U.record.push("targetFrameRate " + U.fps); return; } return false; };
    GLOBALS.Screen.native.__set = (n, v) => {
      if (n === "fullScreen") { U.screen.full = !!v; U.record.push("fullScreen " + U.screen.full); return; }
      if (n === "orientation") { U.orientation = v; U.record.push("orientation " + v.name); return; }
      if (n === "sleepTimeout" || n === "fullScreenMode") return;
      return false;
    };
    GLOBALS.QualitySettings.native.__set = (n, v) => { if (n === "vSyncCount") { U.vsync = nv(v); return; } return false; };
    GLOBALS.bool = st("bool", () => undefined, (n, A) => n === "Parse" ? { v: String(A[0]).toLowerCase() === "true" } : undefined);
    Object.keys(COMP_TYPES).forEach(k => { if (!GLOBALS[k]) GLOBALS[k] = new TypeRef(k, null, { __get: () => undefined }); });
    Object.assign(GLOBALS.AudioSource, {});
    function fmtString(fmt, args) {
      return String(fmt).replace(/\{(\d+)(?::([^}]+))?\}/g, (m, i, f) => { const v = args[+i]; return f ? cs.formatNum(v, f) : v === null ? "" : toStr(v); });
    }
    const WAITS = {
      WaitForSeconds: A => ({ __wait: "seconds", t: nv(A[0]), __type: "WaitForSeconds" }),
      WaitForSecondsRealtime: A => ({ __wait: "realtime", t: nv(A[0]), __type: "WaitForSecondsRealtime" }),
      WaitForFixedUpdate: () => ({ __wait: "fixed", __type: "WaitForFixedUpdate" }),
      WaitForEndOfFrame: () => ({ __wait: "end", __type: "WaitForEndOfFrame" }),
      WaitUntil: A => ({ __wait: "until", fn: A[0], __type: "WaitUntil" }),
      WaitWhile: A => ({ __wait: "while", fn: A[0], __type: "WaitWhile" })
    };

    // ---------- المضيف لمفسّر C# ----------
    const mbMember = (obj, n) => {
      switch (n) {
        case "gameObject": return obj.go;
        case "transform": return obj.go.tr;
        case "name": return obj.go.name;
        case "tag": return obj.go.tag;
        case "enabled": return obj.enabled;
        case "isActiveAndEnabled": return obj.enabled && obj.go.e.isActive();
      }
    };
    const isMB = obj => obj instanceof Obj && !!obj.go;
    const mbCall = (obj, n, A, targs, line) => {
      switch (n) {
        case "StartCoroutine": {
          if (typeof A[0] === "string") { const m = rt.findMethod(obj.cls, A[0], A.length - 1); if (!m) { say(`Coroutine '${A[0]}' couldn't be started!`, "err"); return { v: null }; } return { v: startCoroutine(obj, rt.invoke(m.m, m.cls, obj, A.slice(1))) }; }
          if (!obj.go.e.isActive()) { say(`Coroutine couldn't be started because the the game object '${obj.go.name}' is inactive!`, "err"); return { v: null }; }
          return { v: startCoroutine(obj, A[0]) };
        }
        case "StopCoroutine": U.coroutines.forEach(c => { if (c === A[0] || c.en === A[0] || (typeof A[0] === "string" && c.owner === obj && c.en.name === A[0])) c.done = true; }); return { v: null };
        case "StopAllCoroutines": U.coroutines.forEach(c => { if (c.owner === obj) c.done = true; }); return { v: null };
        case "Invoke": U.invokes.push({ obj, name: A[0], at: U.time + nv(A[1]), rate: 0 }); return { v: null };
        case "InvokeRepeating": U.invokes.push({ obj, name: A[0], at: U.time + nv(A[1]), rate: nv(A[2]) }); return { v: null };
        case "CancelInvoke": U.invokes = U.invokes.filter(i => i.obj !== obj || (A.length && i.name !== A[0])); return { v: null };
        case "IsInvoking": return { v: U.invokes.some(i => i.obj === obj && (!A.length || i.name === A[0])) };
        case "print": say(A[0] === null ? "Null" : toStr(A[0])); return { v: null };
      }
      const r = goCall(obj.go, n, A, targs);
      if (r !== undefined) return r;
      return objStatics(n, A, targs);
    };
    const host = {
      global: (name, line, targs) => GLOBALS[name],
      selfMember: (obj, n) => isMB(obj) ? mbMember(obj, n) : undefined,
      objGet: (obj, n) => isMB(obj) ? mbMember(obj, n) : undefined,
      selfSet: (obj, n, v) => { if (!isMB(obj)) return false; if (n === "enabled") { setEnabled(obj, !!v); return true; } if (n === "name") { obj.go.e.name = v; return true; } if (n === "tag") { obj.go.tag = v; return true; } return false; },
      objSet: (obj, n, v) => host.selfSet(obj, n, v),
      selfCall: (obj, n, A, targs, line) => isMB(obj) ? mbCall(obj, n, A, targs, line) : undefined,
      objCall: (obj, n, A, targs, line) => isMB(obj) ? mbCall(obj, n, A, targs, line) : undefined,
      globalCall: (n, A, targs) => objStatics(n, A, targs) || (n === "print" ? (say(toStr(A[0])), { v: null }) : undefined),
      newNative: (n, A, type, line) => {
        if (n === "Vector2") return V2(nv(A[0] ?? 0), nv(A[1] ?? 0));
        if (n === "Vector3") return V3(nv(A[0] ?? 0), nv(A[1] ?? 0), nv(A[2] ?? 0));
        if (n === "Color") return new Color(nv(A[0]), nv(A[1]), nv(A[2]), A.length > 3 ? nv(A[3]) : 1);
        if (n === "GameObject") { const e = world.add({ name: A[0] || "New Game Object", type: "GameObject" }); const go = new GO(e); U.gos.push(go); return go; }
        if (WAITS[n]) return WAITS[n](A);
        if (n === "Random") { let s = A.length ? nv(A[0]) >>> 0 : 42; const r = () => { s = (Math.imul(s, 1103515245) + 12345) >>> 0; return (s >>> 8) / 16777216; }; return { __type: "System.Random", __call: (k, B) => k === "Next" ? { v: B.length === 2 ? B[0] + Math.floor(r() * (B[1] - B[0])) : B.length === 1 ? Math.floor(r() * B[0]) : Math.floor(r() * 2147483647) } : k === "NextDouble" ? { v: D(r()) } : undefined }; }
        if (n === "LayerMask") return layerMask(0);
      },
      defaultFor: (type, field) => {
        const n = type.name;
        if (n === "Vector2") return V2(0, 0);
        if (n === "Vector3") return V3(0, 0, 0);
        if (n === "Color") return new Color(0, 0, 0, 0);
        if (n === "Quaternion") return new Quat(0);
        if (n === "LayerMask") return layerMask(0);
        if (field && U.creating) {
          const serialized = (field.mods.has("public") || field.attrs.includes("SerializeField")) && !field.isStatic && !field.attrs.includes("NonSerialized");
          if (serialized && (UNITY_OBJ_TYPES.has(n) || (rt.classes.has(n) && rt.classes.get(n).allBases.has("MonoBehaviour")))) return { __unassigned: true, __type: n, field: field.name, cls: U.creating.cls.name, __str: () => "null" };
          if (serialized && (n === "List" || type.array)) return n === "List" ? new CList([], type.args[0]) : new CArr([], { name: n, args: [] });
        }
        return undefined;
      },
      coerce: (v, type, line) => {
        const n = type.name;
        if (v instanceof Vec) { if (n === "Vector2" && v.dim === 3) return V2(v.x, v.y); if (n === "Vector3" && v.dim === 2) return V3(v.x, v.y, 0); if (n === "Vector2" || n === "Vector3") return v; if (["float", "int", "string", "bool"].includes(n)) fail(`error CS0029: Cannot implicitly convert type '${v.__type}' to '${n}'`, line); }
        if (n === "LayerMask" && typeof v === "number") return layerMask(v);
        if (typeof v === "number" && n === "LayerMask") return layerMask(v);
        if (v && v.__type === "LayerMask" && (n === "int")) return v.value;
        if (["Vector2", "Vector3", "Color", "Quaternion"].includes(n) && (isNum(v) || typeof v === "string" || typeof v === "boolean")) fail(`error CS0029: Cannot implicitly convert type '${rt.typeLabel(v)}' to '${n}'`, line);
        if (n === "Transform" && v instanceof GO) fail(`error CS0029: Cannot implicitly convert type 'UnityEngine.GameObject' to 'UnityEngine.Transform'`, line);
        if (n === "GameObject" && v && v.__type === "Transform") fail(`error CS0029: Cannot implicitly convert type 'UnityEngine.Transform' to 'UnityEngine.GameObject'`, line);
        return undefined;
      },
      cast: (v, type) => { if (v instanceof Vec && (type.name === "Vector2" || type.name === "Vector3")) return host.coerce(v, type) || v; if (v && v.__type === "LayerMask" && type.name === "int") return v.value; },
      isFakeNull: v => isFake(v),
      checkAlive,
      truth: v => {
        if (v === null || v === undefined) return false;
        if (v instanceof GO || (v && v.__types && v.__types.includes("Object")) || isMB(v) || isFake(v) || (v && (v.__prefab || v.__type === "AudioClip"))) return !isFake(v);
      },
      nullTruth: true,
      sameObj: (a, b) => (a instanceof GO || isMB(a) || (a && a.go)) ? a === b : undefined,
      strOf: v => isMB(v) ? `${v.go.name} (${v.cls.name})` : v && v.__str ? v.__str() : null,
      objIs: (obj, n) => isMB(obj) && ["MonoBehaviour", "Behaviour", "Component", "Object"].includes(n)
    };
    function setEnabled(obj, on) {
      if (obj.enabled === on) return;
      obj.enabled = on;
      if (obj.awoken && obj.go.e.isActive()) message(obj, on ? "OnEnable" : "OnDisable", []);
    }

    // ---------- الإطار ----------
    function cameraView() {
      const cam = mainCam();
      const cc = cam && cam.comps.find(c => c instanceof CameraComp);
      const size = cc ? cc.size : 5;
      world.ppu = 160 / size;
      world.spriteScale = world.ppu / PPU;
      const g = cam ? cam.e.global() : { x: 0, y: 0 };
      world.view.ox = 240 - g.x * world.ppu;
      world.view.oy = 160 + g.y * world.ppu;
    }
    function frame(dt) {
      U.dt = dt;
      rt.steps = 0;
      updateAxes(dt);
      // الأزرار تأخذ النقرة أولاً (الواجهة فوق العالم)
      let uiTaken = false;
      if (world.input.mouse.released) {
        for (const go of U.gos) { const b = !go.destroyed && go.e.isActive() && go.comps.find(c => c instanceof Button); if (b && b.enabled && b.interactable && b.hit(world.input.mouse.x, world.input.mouse.y)) { b.onClick.fire(); uiTaken = true; break; } }
      }
      // OnMouseDown على الكائن تحت المؤشر
      if (world.input.mouse.pressed && !uiTaken) {
        const cam = mainCam(), g = cam ? cam.e.global() : { x: 0, y: 0 };
        const p = { x: (world.input.mouse.x - 240) / world.ppu + g.x, y: (160 - world.input.mouse.y) / world.ppu + g.y };
        const hit = U.gos.find(go => !go.destroyed && go.e.isActive() && go.e.shape && (() => { const b = world.aabb(go.e); return p.x >= b.x1 && p.x <= b.x2 && p.y >= b.y1 && p.y <= b.y2; })());
        if (hit) scriptsOf(hit).forEach(o => { if (live(o) && o.enabled) message(o, "OnMouseDown", []); });
      }
      const starting = U.pendingStart.splice(0);
      for (const o of starting) { if (o.destroyed) continue; if (!live(o) || !o.enabled) { U.pendingStart.push(o); continue; } o.started = true; message(o, "Start", []); }
      U.fixedAcc += dt * U.timeScale;
      while (U.fixedAcc >= 0.02 - 1e-9) {
        U.fixedAcc -= 0.02;
        U.inFixed = true;
        broadcast("FixedUpdate");
        world.step(0.02);
        for (const go of U.gos) { const rb = !go.destroyed && go.comps.find(c => c instanceof Rigidbody2D); if (rb && rb.damping) { const k = 1 / (1 + 0.02 * rb.damping); go.e.vel.x *= k; go.e.vel.y *= k; } }
        U.fixedTime = (U.fixedTime || 0) + 0.02;
        resumeCoroutines(true);
        U.inFixed = false;
      }
      broadcast("Update");
      resumeCoroutines(false);
      runInvokes();
      for (const go of U.gos) if (!go.destroyed && go.e.isActive()) go.comps.forEach(c => { if (c instanceof Animator) c.update(dt * U.timeScale); });
      broadcast("LateUpdate");
      processDestroy();
      if (U.loadScene) { const s = U.loadScene; U.loadScene = null; loadScene(s); processDestroy(); }
      cameraView();
      U.time += dt * U.timeScale;
      U.unscaled += dt;
      U.frameCount++;
      world.endFrameInput();
    }
    function loadScene(s) {
      for (const go of U.gos.filter(g => !g.destroyed && !g.dontDestroy && g.e.parent === world.root)) U.pendingDestroy.push(go);
      processDestroy();
      U.gos = U.gos.filter(g => !g.destroyed);
      U.sceneName = s.name;
      U.levelStart = U.time;
      info(`→ LoadScene("${s.name}")`);
      spawn(s.lines, world.root, true);
      cameraView();
    }

    U.load = (code, setup) => {
      const sections = { scene: [], prefab: {}, animator: {}, prefs: [], files: [] };
      let cur = null, curName = null, sceneBuf = null;
      const lines = (setup || "").split("\n").concat(["\u0000"], (code || "").split("\n"));
      const codeLines = [];
      for (const raw of lines) {
        if (raw === "\u0000") { cur = null; continue; }
        const m = /^\[(scene|prefab|animator|prefs|platform|screen)\s*([^\]]*)\]\s*$/.exec(raw.trim());
        if (m) {
          cur = m[1]; curName = m[2].trim();
          if (cur === "scene") { sceneBuf = { name: curName || "SampleScene", lines: [] }; U.scenes.push(sceneBuf); }
          if (cur === "prefab") U.prefabs[curName] = [];
          if (cur === "animator") U.animators[curName] = { lines: [] };
          if (cur === "platform") { setPlatform(curName); cur = null; }
          if (cur === "screen") { const [w, h] = curName.split(/x/i).map(Number); U.screen.w = w; U.screen.h = h; cur = null; }
          continue;
        }
        if (/^\s*\/\/\s*file:/.test(raw)) { cur = null; codeLines.push(raw); continue; }
        if (cur === "scene") sceneBuf.lines.push(raw);
        else if (cur === "prefab") U.prefabs[curName].push(raw);
        else if (cur === "animator") U.animators[curName].lines.push(raw);
        else if (cur === "prefs") { const pm = /^\s*(\w+)\s*=\s*(.+)$/.exec(raw); if (pm) { const v = pm[2].trim(); U.prefs.set(pm[1], /^".*"$/.test(v) ? v.slice(1, -1) : /^-?\d+$/.test(v) ? +v : F(+v)); } }
        else codeLines.push(raw);
      }
      // متحكمات الرسوم المتحركة: "Idle -> Run: Speed > 0.1"
      for (const a of Object.values(U.animators)) {
        a.transitions = [];
        const states = [];
        for (const l of a.lines) {
          const dm = /^\s*default\s*:\s*(\w+)/.exec(l);
          if (dm) { a.def = dm[1]; continue; }
          const tm = /^\s*(\w+)\s*->\s*(\w+)\s*:\s*(.+)$/.exec(l);
          if (!tm) continue;
          a.transitions.push({ from: tm[1], to: tm[2], conds: tm[3].split(/&&|\band\b/) });
          [tm[1], tm[2]].forEach(s => { if (s !== "Any" && !states.includes(s)) states.push(s); });
        }
        a.states = states;
        a.def = a.def || states[0];
      }
      const src = codeLines.join("\n");
      const prog = cs.parse(src, { defines: U.defines });
      rt = new cs.Runtime(prog.types, host);
      U.rt = rt;
      rt.initStatics();
      if (!U.scenes.length) U.scenes.push({ name: "SampleScene", lines: [] });
    };
    function setPlatform(p) {
      const map = { Android: ["Android", ["UNITY_ANDROID"]], iOS: ["IPhonePlayer", ["UNITY_IOS"]], Windows: ["WindowsPlayer", ["UNITY_STANDALONE", "UNITY_STANDALONE_WIN"]], Mac: ["OSXPlayer", ["UNITY_STANDALONE", "UNITY_STANDALONE_OSX"]], Linux: ["LinuxPlayer", ["UNITY_STANDALONE", "UNITY_STANDALONE_LINUX"]], WebGL: ["WebGLPlayer", ["UNITY_WEBGL"]], Editor: ["WindowsEditor", ["UNITY_EDITOR", "UNITY_STANDALONE", "UNITY_STANDALONE_WIN"]] };
      const [plat, defs] = map[p] || map.Editor;
      U.platform = plat;
      U.defines = new Set([...defs, "UNITY_2022_3_OR_NEWER", "UNITY_6000_0_OR_NEWER"]);
      if (plat === "Android" || plat === "IPhonePlayer") U.defines.add("UNITY_MOBILE");
    }
    U.start = () => {
      const s = U.scenes[0];
      // سكربت بلا مشهد: كاميرا وكائن واحد عليه كل سكربتات MonoBehaviour
      if (!s.lines.some(l => l.trim())) {
        const mbs = [...rt.classes.values()].filter(c => c.kind === "class" && c.allBases.has("MonoBehaviour") && !(c.mods && c.mods.has && c.mods.has("abstract")));
        s.lines = ["Main Camera: Camera pos=(0,0)", "GameObject: GameObject", ...mbs.map(c => "  + " + c.name)];
      }
      U.sceneName = s.name;
      spawn(s.lines, world.root, true);
      processDestroy();
      U.gos.forEach(g => g.comps.forEach(c => { if (c instanceof AudioSource && c.playOnAwake) c.call("Play", []); }));
      cameraView();
    };
    U.frame = frame;
    U.findGo = name => U.gos.find(g => !g.destroyed && (g.name === name || g.e.path() === name));
    return U;
  }

  CW.simKinds = CW.simKinds || {};
  CW.simKinds.unity = {
    label: "Unity (محاكي)",
    previewFrames: 1,   // Start تُستدعى قبل أول إطار
    build(code, setup, say) {
      const U = Game(say);
      U.load(code, setup);
      const go = name => { const g = U.findGo(name); if (!g) throw new Error(`الكائن ${name} غير موجود`); return g; };
      const ctx = name => {
        const g = go(name);
        let obj = g.comps.find(c => c instanceof Obj);
        if (!obj) { obj = new Obj({ name: "Inspector", chain: [], allBases: new Set(["MonoBehaviour"]), fields: [], methods: new Map(), props: new Map(), nested: [], bases: [] }); obj.go = g; obj.enabled = true; }
        return obj;
      };
      return {
        world: U.world,
        start: U.start,
        frame: U.frame,
        get crashed() { return this._c; }, set crashed(v) { this._c = v; },
        helpers: {
          // get("Player", "score") أو get("Player", "transform.position") ← قيمة تعبير C# كما يطبعها Debug.Log
          get: (name, expr) => {
            const e = cs.parse(expr, { expression: true });
            const obj = ctx(name);
            const v = U.rt.eval(e, { self: obj, cls: obj.cls, scopes: [new Map()], fn: "test" });
            return v === null ? "Null" : toStr(v);
          },
          pos: name => { const p = go(name).e.global(); return [Math.round(p.x * 100) / 100, Math.round(p.y * 100) / 100]; },
          exists: name => !!U.findGo(name),
          active: name => go(name).e.isActive(),
          count: tag => U.gos.filter(g => !g.destroyed && g.e.isActive() && g.tag === tag).length,
          named: prefix => U.gos.filter(g => !g.destroyed && g.name.startsWith(prefix)).length,
          state: name => { const a = go(name).comps.find(c => c.__type === "Animator"); return a ? a.state : null; },
          call: (name, method, ...args) => {
            const g = go(name);
            const conv = v => typeof v === "number" ? (Number.isInteger(v) ? v : F(v)) : v;
            for (const o of g.comps.filter(c => c instanceof Obj)) {
              const m = U.rt.findMethod(o.cls, method, args.length);
              if (m) { const r = U.rt.invoke(m.m, m.cls, o, args.map(conv)); return r === null ? "Null" : toStr(r); }
            }
            throw new Error(`لا توجد دالة ${method} على ${name}`);
          },
          sounds: () => U.sounds.slice(),
          scene: () => U.sceneName,
          prefs: key => U.prefs.has(key) ? toStr(U.prefs.get(key)) : null,
          record: () => U.record.slice(),
          setPos: (name, x, y) => { const e = go(name).e; e.pos.x = x; e.pos.y = y; },
          touch: (x, y, frames = 1) => { U.world.mouseDown(x, y); for (let i = 0; i < frames; i++) U.frame(1 / 60); U.world.mouseUp(); U.frame(1 / 60); }
        }
      };
    }
  };
})(typeof window !== "undefined" ? window : globalThis);
