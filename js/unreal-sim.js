// محاكي Unreal Engine تعليمي: Blueprints نصية (js/bp-interp.js) و C++ بأسلوب Unreal (js/cs-interp.js بوضع cpp)
// على عالم جانبي (المحوران X و Z، والوحدة سنتيمتر، والجاذبية -980 سم/ث²) من js/game-sim.js
// Actors ومكوّنات (StaticMesh و BoxCollision و TextRender و ProjectileMovement و RotatingMovement ومكوّنات C++ مخصصة)،
// و BeginPlay و Tick و Overlap و Hit، والـ Character بحركة وقفز، و Delay و Timers، و SpawnActor، و UE_LOG و Print String
// ليس Unreal الحقيقي: لا 3D ولا رسوميات ولا محرر، والفيزياء صناديق محاذية للمحاور
(function (root) {
  const CW = root.CW = root.CW || {};
  const cs = CW.cs;
  const { Num, F, D, EnumVal, Obj, CList, CArr, Callable, TypeRef, toStr, fail, raise, isNum, nv, Enumerator } = cs;
  const PX = 0.4;   // بكسل لكل سنتيمتر في العرض
  const MESHES = { Cube: [100, 100], Floor: [2000, 100], Sphere: [100, 100, true], Cylinder: [100, 100], Cone: [100, 100], Plane: [100, 10], Wall: [100, 400] };
  const sanitize = x => { if (!isFinite(x)) return x > 0 ? "inf" : x < 0 ? "-inf" : "nan"; let s = (Math.abs(x) < 1e-7 ? 0 : x).toFixed(6).replace(/0+$/, ""); if (s.endsWith(".")) s += "0"; return s === "-0.0" ? "0.0" : s; };

  // ---------- FVector و FRotator ----------
  class FVec {
    constructor(x = 0, y = 0, z = 0) { this.X = +x; this.Y = +y; this.Z = +z; this.__struct = true; this.__type = "FVector"; this.__types = ["FVector"]; }
    __get(n) {
      if (n === "X" || n === "Y" || n === "Z") return D(this[n]);
      if (n === "x" || n === "y" || n === "z") fail(`'FVector' has no member named '${n}' (الأحرف كبيرة في Unreal: ${n.toUpperCase()})`);
    }
    __with(n, v, line) { if (!["X", "Y", "Z"].includes(n)) fail(`'FVector' has no member named '${n}'`, line); const c = new FVec(this.X, this.Y, this.Z); c[n] = nv(v); return c; }
    __binop(op, b) {
      if (b instanceof FVec) { if (op === "+") return new FVec(this.X + b.X, this.Y + b.Y, this.Z + b.Z); if (op === "-") return new FVec(this.X - b.X, this.Y - b.Y, this.Z - b.Z); if (op === "*") return new FVec(this.X * b.X, this.Y * b.Y, this.Z * b.Z); }
      if (isNum(b)) { if (op === "*") return new FVec(this.X * nv(b), this.Y * nv(b), this.Z * nv(b)); if (op === "/") return new FVec(this.X / nv(b), this.Y / nv(b), this.Z / nv(b)); }
    }
    __rbinop(op, a) { if (op === "*" && isNum(a)) return this.__binop("*", a); }
    __neg() { return new FVec(-this.X, -this.Y, -this.Z); }
    __eq(b) { return b instanceof FVec && Math.abs(this.X - b.X) < 1e-4 && Math.abs(this.Y - b.Y) < 1e-4 && Math.abs(this.Z - b.Z) < 1e-4; }
    size() { return Math.hypot(this.X, this.Y, this.Z); }
    __call(n, A) {
      switch (n) {
        case "Size": case "Length": return { v: D(this.size()) };
        case "SizeSquared": return { v: D(this.X ** 2 + this.Y ** 2 + this.Z ** 2) };
        case "GetSafeNormal": { const s = this.size(); return { v: s > 1e-8 ? new FVec(this.X / s, this.Y / s, this.Z / s) : new FVec() }; }
        case "ToString": return { v: this.__str() };
        case "IsZero": case "IsNearlyZero": return { v: this.size() < 1e-4 };
        case "Equals": return { v: this.__eq(A[0]) };
      }
    }
    __str() { return `X=${this.X.toFixed(3)} Y=${this.Y.toFixed(3)} Z=${this.Z.toFixed(3)}`; }
  }
  class FRot {
    constructor(p = 0, y = 0, r = 0) { this.Pitch = +p; this.Yaw = +y; this.Roll = +r; this.__struct = true; this.__type = "FRotator"; }
    __get(n) { if (["Pitch", "Yaw", "Roll"].includes(n)) return D(this[n]); }
    __with(n, v) { const c = new FRot(this.Pitch, this.Yaw, this.Roll); c[n] = nv(v); return c; }
    __binop(op, b) { if (b instanceof FRot && op === "+") return new FRot(this.Pitch + b.Pitch, this.Yaw + b.Yaw, this.Roll + b.Roll); }
    __eq(b) { return b instanceof FRot && this.Pitch === b.Pitch && this.Yaw === b.Yaw && this.Roll === b.Roll; }
    __str() { return `P=${this.Pitch.toFixed(6)} Y=${this.Yaw.toFixed(6)} R=${this.Roll.toFixed(6)}`; }
  }
  const asVec = v => v instanceof FVec ? v : new FVec();

  // printf بأسلوب FString::Printf و UE_LOG
  function printf(fmt, args) {
    let i = 0;
    return String(fmt).replace(/%([-+0 #]*)(\d*)(?:\.(\d+))?([diufFsSceExX%])/g, (m, flags, w, prec, c) => {
      if (c === "%") return "%";
      const v = args[i++];
      let s;
      if ("diu".includes(c)) s = String(Math.trunc(nv(v)));
      else if (c === "f" || c === "F") s = (+nv(v)).toFixed(prec !== undefined ? +prec : 6);
      else if (c === "e" || c === "E") s = (+nv(v)).toExponential(prec !== undefined ? +prec : 6);
      else if (c === "x" || c === "X") s = (nv(v) >>> 0).toString(16);
      else if (c === "c") s = String(v);
      else s = typeof v === "string" ? v : toStr(v);
      if (w) s = flags.includes("-") ? s.padEnd(+w) : s.padStart(+w, flags.includes("0") ? "0" : " ");
      return s;
    });
  }

  // أصناف المحرك الأساسية (بلا كود): تُضاف لشجرة الوراثة
  const NATIVE = [["UObject", []], ["AActor", ["UObject"]], ["APawn", ["AActor"]], ["ACharacter", ["APawn"]], ["AStaticMeshActor", ["AActor"]], ["ATriggerBox", ["AActor"]], ["AGameModeBase", ["AActor"]], ["UActorComponent", ["UObject"]], ["USceneComponent", ["UActorComponent"]]];
  const nativeCls = (name, bases) => ({ kind: "class", name, bases, fields: [], methods: new Map(), props: new Map(), ctors: [], nested: [], attrs: ["native"], native: true });
  const LEVEL_TYPES = { Actor: "AActor", Character: "ACharacter", StaticMeshActor: "AStaticMeshActor", TriggerBox: "ATriggerBox", Pawn: "APawn" };

  function Game(say) {
    const world = new CW.Sim.World({ yUp: true, axes: ["x", "z"], gravity: new CW.Sim.V(0, 0, -980), ppu: PX, view: { w: 480, h: 320, ox: 240, oy: 280 } });
    world.bg = "#2b2f3a";
    const G = { world, actors: [], time: 0, frame: 0, latent: [], timers: [], counters: {}, screen: [], spawnQueue: [], sounds: [], prints: [] };
    let rt = null;
    const info = t => say(t, "info");
    const isA = (o, n) => o instanceof Obj && o.cls.allBases.has(n);
    const isActor = o => isA(o, "AActor");
    const alive = o => o && !o.destroyed && !(o.actor && o.actor.destroyed);

    // ---------- المكونات ----------
    class Comp {
      constructor(owner, name, type) { this.owner = owner; this.name = name; this.__type = type; this.__types = [type, "USceneComponent", "UActorComponent", "UObject"]; this.visible = true; }
      get e() { return this.owner.e; }
      __str() { return this.name; }
      __get(n) {
        if (n === "bHiddenInGame") return !this.visible;
        return this.get ? this.get(n) : undefined;
      }
      __set(n, v) { return this.set ? this.set(n, v) : false; }
      __call(n, A, targs, line) {
        switch (n) {
          case "SetVisibility": case "SetHiddenInGame": this.visible = n === "SetVisibility" ? !!A[0] : !A[0]; refreshVisual(this.owner); return { v: null };
          case "SetupAttachment": case "AttachToComponent": case "RegisterComponent": return { v: null };
          case "GetOwner": return { v: this.owner };
          case "GetComponentLocation": return { v: actorLoc(this.owner) };
          case "GetName": return { v: this.name };
        }
        return this.call ? this.call(n, A, targs, line) : undefined;
      }
    }
    class MeshComp extends Comp {
      constructor(owner, name, mesh) {
        super(owner, name, "UStaticMeshComponent");
        this.mesh = mesh || null;
        this.collision = "BlockAll";
        this.simulate = false;
      }
      get(n) { if (n === "StaticMesh") return this.mesh; }
      call(n, A) {
        const e = this.e;
        switch (n) {
          case "SetSimulatePhysics": this.simulate = !!A[0]; applyBody(this.owner); return { v: null };
          case "SetCollisionEnabled": this.collision = A[0] && A[0].name === "NoCollision" ? "NoCollision" : A[0] && A[0].name === "QueryOnly" ? "Overlap" : "BlockAll"; applyBody(this.owner); return { v: null };
          case "SetCollisionProfileName": this.collision = /Overlap/.test(A[0]) ? "Overlap" : /NoCollision/.test(A[0]) ? "NoCollision" : "BlockAll"; applyBody(this.owner); return { v: null };
          case "AddImpulse": { const v = asVec(A[0]); const mass = 100; e.vel.x += v.X / mass; e.vel.z += v.Z / mass; return { v: null }; }
          case "SetPhysicsLinearVelocity": { const v = asVec(A[0]); e.vel.x = v.X; e.vel.z = v.Z; return { v: null }; }
          case "GetPhysicsLinearVelocity": return { v: new FVec(e.vel.x, 0, e.vel.z) };
          case "SetStaticMesh": this.mesh = A[0] && A[0].mesh ? A[0].mesh : String(A[0]); refreshVisual(this.owner); applyBody(this.owner); return { v: null };
          case "IsSimulatingPhysics": return { v: this.simulate };
        }
      }
    }
    class ShapeComp extends Comp {
      constructor(owner, name, type, size) { super(owner, name, type); this.size = size; this.collision = "Overlap"; }
      call(n, A) {
        if (n === "SetBoxExtent") { const v = asVec(A[0]); this.size = [v.X * 2, v.Z * 2]; applyBody(this.owner); return { v: null }; }
        if (n === "SetSphereRadius") { this.size = [nv(A[0]) * 2, nv(A[0]) * 2]; this.circle = true; applyBody(this.owner); return { v: null }; }
        if (n === "GetScaledBoxExtent") return { v: new FVec(this.size[0] / 2, 0, this.size[1] / 2) };
        if (n === "SetCollisionEnabled") { this.collision = A[0] && A[0].name === "NoCollision" ? "NoCollision" : "Overlap"; applyBody(this.owner); return { v: null }; }
        if (n === "GetOverlappingActors") { const out = A[0]; overlapping(this.owner).forEach(a => out.a.push(a)); return { v: null }; }
      }
    }
    class TextComp extends Comp {
      constructor(owner, name, text) { super(owner, name, "UTextRenderComponent"); this.text = text || ""; }
      get(n) { if (n === "Text") return this.text; }
      call(n, A) { if (n === "SetText") { this.text = toStr(A[0]); refreshVisual(this.owner); return { v: null }; } }
    }
    class ProjectileComp extends Comp {
      constructor(owner, name, speed) { super(owner, name, "UProjectileMovementComponent"); this.InitialSpeed = speed || 1000; this.MaxSpeed = 0; this.ProjectileGravityScale = 1; this.Velocity = new FVec(1, 0, 0); this.active = false; this.bShouldBounce = false; }
      get(n) { if (["InitialSpeed", "MaxSpeed", "ProjectileGravityScale"].includes(n)) return F(this[n]); if (n === "Velocity") return new FVec(this.e.vel.x, 0, this.e.vel.z); if (n === "bShouldBounce") return this.bShouldBounce; }
      set(n, v) { if (["InitialSpeed", "MaxSpeed", "ProjectileGravityScale"].includes(n)) { this[n] = nv(v); return; } if (n === "Velocity") { this.Velocity = v; return; } if (n === "bShouldBounce") { this.bShouldBounce = !!v; return; } return false; }
      begin() { const d = this.Velocity.size() > 0 ? this.Velocity.__call("GetSafeNormal").v : new FVec(1, 0, 0); const r = (this.owner.e.rot || 0) * Math.PI / 180; const dx = d.X * Math.cos(r) - d.Z * Math.sin(r), dz = d.X * Math.sin(r) + d.Z * Math.cos(r); this.e.vel.x = dx * this.InitialSpeed; this.e.vel.z = dz * this.InitialSpeed; this.active = true; }
      call(n) { if (n === "StopMovementImmediately") { this.active = false; this.e.vel.x = this.e.vel.z = 0; return { v: null }; } }
    }
    class RotatingComp extends Comp {
      constructor(owner, name, rate) { super(owner, name, "URotatingMovementComponent"); this.RotationRate = new FRot(rate || 90, 0, 0); }
      get(n) { if (n === "RotationRate") return this.RotationRate; }
      set(n, v) { if (n === "RotationRate") { this.RotationRate = v; return; } return false; }
    }
    class MovementComp {
      constructor(ch) { this.ch = ch; this.MaxWalkSpeed = 600; this.JumpZVelocity = 420; this.GravityScale = 1; this.__type = "UCharacterMovementComponent"; this.MaxAcceleration = 2048; this.BrakingDecelerationWalking = 2048; this.AirControl = 0.35; }
      __get(n) { if (["MaxWalkSpeed", "JumpZVelocity", "GravityScale", "MaxAcceleration", "AirControl", "BrakingDecelerationWalking"].includes(n)) return F(this[n]); if (n === "Velocity") return new FVec(this.ch.e.vel.x, 0, this.ch.e.vel.z); }
      __set(n, v) { if (["MaxWalkSpeed", "JumpZVelocity", "GravityScale", "MaxAcceleration", "AirControl", "BrakingDecelerationWalking"].includes(n)) { this[n] = nv(v); return; } return false; }
      __call(n) { if (n === "IsFalling") return { v: !this.ch.e.flags.floor }; if (n === "IsMovingOnGround") return { v: !!this.ch.e.flags.floor }; if (n === "StopMovementImmediately") { this.ch.e.vel.x = this.ch.e.vel.z = 0; return { v: null }; } }
    }

    // ---------- الممثلون (Actors) ----------
    const actorLoc = a => { const g = a.e.global(); return new FVec(g.x, g.y, g.z); };
    function refreshVisual(a) {
      const e = a.e;
      if (a.hidden) { e.visual = null; return; }
      const mesh = a.comps.find(c => c instanceof MeshComp && c.visible && c.mesh);
      const txt = a.comps.find(c => c instanceof TextComp && c.visible);
      const shape = a.comps.find(c => c instanceof ShapeComp);
      if (isA(a, "ACharacter")) e.visual = { sprite: "player", frame: 4, frameW: 32, frameH: 48, w: 128, h: 192, flip: a.facing < 0, label: null };
      else if (mesh) { const m = MESHES[mesh.mesh] || [100, 100]; e.visual = { color: a.color || (mesh.mesh === "Floor" ? "#5b6170" : "#c8ccd4"), w: (mesh.size || m)[0] * Math.abs(e.scale.x), h: (mesh.size || m)[1] * Math.abs(e.scale.z), circle: !!m[2] }; }
      else if (shape && a.showShape) e.visual = { color: "rgba(255,170,0,.25)", w: shape.size[0], h: shape.size[1] };
      else e.visual = null;
      if (e.visual && a.label) e.visual.label = a.label;
      if (txt) { a.textEnt = a.textEnt || world.add({ name: "__text", type: "Text" }, e); a.textEnt.visual = { text: txt.text, color: "#ffd84d", size: 16 }; a.textEnt.pos.z = (e.visual && e.visual.h ? e.visual.h / 2 : 50) + 60; a.textEnt.pos.x = -String(txt.text).length * 9 / PX / 2; }
    }
    // شكل التصادم ونوع الجسم من المكونات
    function applyBody(a) {
      const e = a.e;
      if (a.noCollision) { e.shape = null; e.body = null; return; }
      if (isA(a, "ACharacter")) { e.shape = { kind: "rect", w: 84, h: 192 }; e.body = "character"; e.trigger = false; return; }
      const mesh = a.comps.find(c => c instanceof MeshComp && c.mesh && c.collision !== "NoCollision");
      const shape = a.comps.find(c => c instanceof ShapeComp && c.collision !== "NoCollision");
      const proj = a.comps.find(c => c instanceof ProjectileComp);
      const src = mesh || shape;
      if (!src) { e.shape = null; e.body = null; return; }
      const size = src instanceof MeshComp ? (src.size || MESHES[src.mesh] || [100, 100]) : src.size;
      e.shape = (src.circle || (src instanceof MeshComp && (MESHES[src.mesh] || [])[2])) ? { kind: "circle", r: size[0] / 2 * Math.abs(e.scale.x) } : { kind: "rect", w: size[0], h: size[1] };
      e.trigger = src.collision === "Overlap";
      e.body = proj ? "projectile" : mesh && mesh.simulate ? "rigid" : a.movable ? "kinematic" : "static";
      if (e.body === "kinematic" && !proj) e.body = "kinematic";
    }
    function addComp(a, type, name, args, cls) {
      let c;
      const num = s => { const m = /(-?[\d.]+)\s*,\s*(-?[\d.]+)/.exec(s || ""); return m ? [+m[1], +m[2]] : null; };
      switch (type) {
        case "StaticMesh": case "UStaticMeshComponent": c = new MeshComp(a, name, args && /^\w+$/.test(args) ? args : null); break;
        case "BoxCollision": case "UBoxComponent": c = new ShapeComp(a, name, "UBoxComponent", num(args) || [64, 64]); break;
        case "SphereCollision": case "USphereComponent": { const r = parseFloat(args) || 32; c = new ShapeComp(a, name, "USphereComponent", [r * 2, r * 2]); c.circle = true; break; }
        case "TextRender": case "UTextRenderComponent": c = new TextComp(a, name, (args || "").replace(/^"|"$/g, "")); break;
        case "ProjectileMovement": case "UProjectileMovementComponent": c = new ProjectileComp(a, name, parseFloat(args) || 0); break;
        case "RotatingMovement": case "URotatingMovementComponent": c = new RotatingComp(a, name, parseFloat(args) || 90); break;
        case "SceneComponent": case "USceneComponent": c = new Comp(a, name, "USceneComponent"); break;
        default: {
          const uc = rt.classes.get(type) || rt.classes.get("U" + type);
          if (!uc || !uc.allBases.has("UActorComponent")) fail(`مكوّن غير معروف: ${type}`);
          c = new Obj(uc);
          c.ownerActor = a; c.compName = name;
          G.creating = c;
          rt.initFields(c);
          rt.runCtor(c, uc, [], 0);
          G.creating = null;
        }
      }
      a.comps.push(c);
      return c;
    }
    function nameFor(cls) {
      const base = cls.isBP ? cls.name + "_C" : cls.name.replace(/^[AU](?=[A-Z])/, "");
      const n = G.counters[base] = (G.counters[base] ?? -1) + 1;
      return `${base}_${n}`;
    }
    // إنشاء Actor من صنف (Blueprint أو C++ أو أصلي) في موقع، مع خصائص المستوى
    function spawn(cls, loc, props = {}, label) {
      const e = world.add({ name: label || cls.name, type: "Actor", pos: [loc.X, loc.Y, loc.Z] });
      const a = new Obj(cls);
      a.e = e; e.data.actor = a; a.actor = a;
      a.comps = []; a.tags = new CList([], { name: "FName", args: [] }); a.delegates = {}; a.facing = 1;
      a.internalName = nameFor(cls);
      a.label = label || a.internalName;
      a.tickEnabled = false;
      G.creating = a;
      if (isA(a, "ACharacter")) a.move = new MovementComp(a);
      rt.initFields(a);
      rt.runCtor(a, cls, [], 0);
      // مكونات الـ Blueprint (لوحة Components)
      for (const k of cls.chain.slice().reverse()) for (const c of k.components || []) a.f.set(c.name, addComp(a, c.type, c.name, c.args));
      G.creating = null;
      // قيم المستوى (Details) للخصائص القابلة للتعديل
      // المراجع لـ Actors أخرى (@Name) تُطبَّق بعد إنشاء كل المستوى
      for (const [k, raw] of Object.entries(props)) if (/^@/.test(raw)) (a.deferred = a.deferred || []).push([k, raw]); else applyProp(a, k, raw);
      if (props.tags) String(props.tags).split(",").forEach(t => a.tags.a.push(t.trim()));
      refreshVisual(a);
      applyBody(a);
      G.actors.push(a);
      return a;
    }
    const SPECIAL = new Set(["pos", "tags", "mesh", "size", "color", "scale", "simulate", "collision", "rot", "label", "movable"]);
    function applyProp(a, k, raw) {
      const e = a.e;
      if (k === "mesh") { let m = a.comps.find(c => c instanceof MeshComp); if (!m) m = addComp(a, "StaticMesh", "StaticMeshComponent", raw); m.mesh = raw; return; }
      if (k === "size") { const [w, h] = raw.replace(/[()]/g, "").split(",").map(Number); const m = a.comps.find(c => c instanceof MeshComp) || a.comps.find(c => c instanceof ShapeComp); if (m) m.size = [w, h]; return; }
      if (k === "color") { a.color = raw; return; }
      if (k === "scale") { const [x, z] = raw.replace(/[()]/g, "").split(",").map(Number); e.scale.x = x; e.scale.z = z ?? x; return; }
      if (k === "simulate") { const m = a.comps.find(c => c instanceof MeshComp); if (m) m.simulate = raw === "true"; return; }
      if (k === "collision") { a.comps.filter(c => c instanceof MeshComp || c instanceof ShapeComp).forEach(c => { c.collision = raw; }); return; }
      if (k === "rot") { e.rot = +raw; return; }
      if (k === "movable") { a.movable = raw === "true"; return; }
      if (SPECIAL.has(k)) return;
      const fd = rt.findField(a.cls, k);
      if (!fd) { info(`⚠️ ${a.cls.name} ليس فيه متغير ${k} (القيمة في المستوى تُتجاهل)`); return; }
      const editable = fd.f.attrs.some(x => /^UPROPERTY:(EditAnywhere|EditInstanceOnly)$/.test(x));
      if (!editable) { info(`⚠️ ${k} في ${a.cls.name} ليس Instance Editable (EditAnywhere) فلا يظهر في Details`); return; }
      a.f.set(k, rt.coerce(levelValue(raw, fd.f.type), fd.f.type));
    }
    function levelValue(raw, type) {
      const t = type ? type.name : null;
      if (t === "TSubclassOf" || t === "UClass") { const c = rt.classes.get(raw); if (!c) fail(`الصنف ${raw} غير موجود`); return new TypeRef(raw, c); }
      if (/^@/.test(raw)) { const a = G.actors.find(x => x.label === raw.slice(1)); if (!a) fail(`المرجع ${raw} غير موجود في المستوى`); return a; }
      if (t === "FVector") { const [x, y, z] = raw.replace(/[()]/g, "").split(",").map(Number); return new FVec(x, y, z); }
      if (t === "bool") return raw === "true";
      if (t === "FString" || t === "FName" || t === "FText") return raw.replace(/^"|"$/g, "");
      if (/^-?\d+$/.test(raw)) return +raw;
      if (/^-?\d*\.\d+$/.test(raw)) return D(+raw);
      return raw.replace(/^"|"$/g, "");
    }

    // ---------- دورة الحياة ----------
    function begin(a) {
      if (a.begun) return;
      a.begun = true;
      a.routed = false;
      const m = rt.findMethod(a.cls, "BeginPlay", 0);
      if (m) {
        guard(() => rt.invoke(m.m, m.cls, a, []), a, "BeginPlay");
        if (!a.routed) say(`Actor ${a.internalName} failed to route BeginPlay. Please make sure that any override of BeginPlay calls Super::BeginPlay().`, "err");
      } else nativeBegin(a);
      a.tickEnabled = a.tickEnabled || hasTick(a);
    }
    const hasTick = a => !!rt.findMethod(a.cls, "ReceiveTick", 1) || (!!rt.findMethod(a.cls, "Tick", 1) && a.canTick);
    function nativeBegin(a) {
      a.routed = true;
      for (const c of a.comps) {
        if (c instanceof ProjectileComp) c.begin();
        if (c instanceof Obj) { const m = rt.findMethod(c.cls, "BeginPlay", 0); if (m) guard(() => rt.invoke(m.m, m.cls, c, []), a, "BeginPlay"); }
      }
      event(a, "ReceiveBeginPlay", []);
    }
    function event(a, name, args) {
      const m = rt.findMethod(a.cls, name, args.length);
      if (!m) return;
      guard(() => rt.invoke(m.m, m.cls, a, args), a, name);
    }
    function guard(fn, a, where) {
      try { return fn(); }
      catch (e) {
        if (e instanceof cs.CSException) { const key = e.type + e.message; if (!G.errs) G.errs = new Set(); if (G.errs.has(key)) return; G.errs.add(key); say(`${e.type === "NullReferenceException" ? "Accessed None" : e.type}: ${e.message} (${rt.curFn || where}، السطر ${rt.curLine || "?"})`, "err"); return; }
        throw e;
      }
    }
    // الأحداث كـ coroutines: Delay يوقفها ثم تستأنف، و Delay المنتظر لا يُعاد تشغيله (كما في Unreal)
    function runEvent(en, self) {
      const co = { en, self, until: null, node: null };
      stepLatent(co);
      return null;
    }
    function stepLatent(co) {
      let r;
      try { r = co.en.MoveNext(); } catch (e) { guard(() => { throw e; }, co.self, "Event"); return; }
      if (!r) return;
      const w = co.en.Current;
      if (w && w.__delay) {
        const key = w.node;
        co.self.activeDelays = co.self.activeDelays || new Set();
        if (co.self.activeDelays.has(key)) return;   // Delay يعمل بالفعل: هذا التنفيذ يتوقف هنا
        co.self.activeDelays.add(key);
        co.until = G.time + w.t; co.node = key;
        G.latent.push(co);
      }
    }
    function tickLatent() {
      for (const co of G.latent.slice()) {
        if (!alive(co.self)) { co.done = true; continue; }
        if (G.time >= co.until - 1e-6) { co.done = true; co.self.activeDelays.delete(co.node); stepLatent(co); }
      }
      G.latent = G.latent.filter(c => !c.done);
      for (const t of G.timers.slice()) {
        if (t.dead) continue;
        if (!alive(t.obj)) { t.dead = true; continue; }
        if (t.paused) continue;
        if (G.time >= t.at - 1e-6) {
          if (t.loop) t.at += t.rate; else t.dead = true;
          guard(() => rt.callMethod(t.obj, t.method, []), t.obj, t.method);
        }
      }
      G.timers = G.timers.filter(t => !t.dead);
    }
    function destroyActor(a) {
      if (!alive(a)) return;
      a.destroyed = true;
      event(a, "ReceiveDestroyed", []);
      const m = rt.findMethod(a.cls, "EndPlay", 1);
      if (m) guard(() => rt.invoke(m.m, m.cls, a, [new EnumVal("EEndPlayReason", "Destroyed", 0)]), a, "EndPlay");
      world.destroy(a.e);
    }
    function overlapping(a) {
      const box = world.aabb(a.e);
      return G.actors.filter(o => o !== a && alive(o) && o.e.shape && CW.Sim.World.overlap(box, world.aabb(o.e)));
    }

    // ---------- أحداث الفيزياء ----------
    world.on((type, x, y) => {
      const A = x.data.actor, B = y.data.actor;
      if (!A || !B || !alive(A) || !alive(B)) return;
      if (type === "trigger-enter" || type === "trigger-exit") {
        const begin = type === "trigger-enter";
        for (const [s, o] of [[A, B], [B, A]]) {
          const m = rt.findMethod(s.cls, begin ? "NotifyActorBeginOverlap" : "NotifyActorEndOverlap", 1);
          if (m) guard(() => rt.invoke(m.m, m.cls, s, [o]), s, m.m.name);
          else event(s, begin ? "ReceiveActorBeginOverlap" : "ReceiveActorEndOverlap", [o]);
          for (const d of (s.delegates[begin ? "OnActorBeginOverlap" : "OnActorEndOverlap"] || [])) if (alive(d.obj)) guard(() => rt.callMethod(d.obj, d.method, [s, o]), s, d.method);
        }
      }
      if (type === "collision-enter") {
        for (const [s, o] of [[A, B], [B, A]]) {
          event(s, "ReceiveHit", [o]);
          for (const d of (s.delegates.OnActorHit || [])) if (alive(d.obj)) guard(() => rt.callMethod(d.obj, d.method, [s, o, new FVec(), null]), s, d.method);
        }
      }
    });
    // الأجسام المقذوفة: سرعة وجاذبية وتتوقف عند أول عائق (Event Hit)
    function moveProjectiles(dt) {
      for (const a of G.actors) {
        if (!alive(a)) continue;
        const pc = a.comps.find(c => c instanceof ProjectileComp);
        if (pc && pc.active) {
          const e = a.e;
          e.vel.z += world.gravity.z * pc.ProjectileGravityScale * dt;
          const before = { x: e.vel.x, z: e.vel.z };
          const hits = world.moveAndSlide(e, dt);
          if (hits.length) {
            if (pc.bShouldBounce) { if (e.vel.x === 0) e.vel.x = -before.x * 0.6; if (e.vel.z === 0) e.vel.z = -before.z * 0.6; }
            else { pc.active = false; e.vel.x = e.vel.z = 0; }
            hits.forEach(h => { const o = h.data.actor; if (o) { event(a, "ReceiveHit", [o]); event(o, "ReceiveHit", [a]); } });
          }
        }
        const rc = a.comps.find(c => c instanceof RotatingComp);
        if (rc) a.e.rot += rc.RotationRate.Pitch * dt;
      }
    }
    // حركة الشخصية: تسارع وكبح وجاذبية وقفز
    function moveCharacters(dt) {
      for (const a of G.actors) {
        if (!alive(a) || !a.move) continue;
        const e = a.e, mv = a.move;
        let input = a.pendingInput || 0;
        if (a === playerChar() && !a.noAutoInput) input += (world.input.down.has("right") || world.input.down.has("d") ? 1 : 0) - (world.input.down.has("left") || world.input.down.has("a") ? 1 : 0);
        input = Math.max(-1, Math.min(1, input));
        a.pendingInput = 0;
        const grounded = e.flags.floor;
        const acc = mv.MaxAcceleration * (grounded ? 1 : mv.AirControl);
        if (input) { e.vel.x += input * acc * dt; if (Math.abs(e.vel.x) > mv.MaxWalkSpeed) e.vel.x = Math.sign(e.vel.x) * mv.MaxWalkSpeed; a.facing = Math.sign(input); }
        else if (grounded) { const b = mv.BrakingDecelerationWalking * dt; e.vel.x = Math.abs(e.vel.x) <= b ? 0 : e.vel.x - Math.sign(e.vel.x) * b; }
        if (a === playerChar() && !a.noAutoInput && world.input.pressed.has("space")) a.wantJump = true;
        if (a.wantJump && grounded) { e.vel.z = mv.JumpZVelocity; event(a, "OnJumped", []); }
        a.wantJump = false;
        e.vel.z += world.gravity.z * mv.GravityScale * dt;
        world.moveAndSlide(e, dt);
        if (e.visual && e.visual.sprite) { e.visual.flip = a.facing < 0; e.visual.frame = !e.flags.floor ? 6 : Math.abs(e.vel.x) > 10 ? 5 + Math.floor(G.time * 8) % 4 : 4; }
      }
    }
    const playerChar = () => G.actors.find(a => alive(a) && isA(a, "ACharacter") && !a.notPlayer);

    // ---------- واجهات المحرك ----------
    const st = (name, get, call) => new TypeRef(name, null, { __get: get || (() => undefined), __call: call || (() => undefined) });
    const PRINT = s => { say(s); G.prints.push(s); G.screen.push({ text: s, until: G.time + 2 }); };
    const timerMgr = { __type: "FTimerManager", __call: (n, A) => {
      switch (n) {
        case "SetTimer": {
          // SetTimer(Handle, this, &AClass::Func, Rate, bLoop, FirstDelay)
          const [h, obj, fn, rate, loop, first] = A;
          const t = { obj, method: fn.method || fn.name, rate: nv(rate), loop: !!loop, at: G.time + (first !== undefined && nv(first) >= 0 ? nv(first) : nv(rate)) };
          if (h && h.__handle) { G.timers.forEach(x => { if (x.handle === h) x.dead = true; }); t.handle = h; h.set(t); }
          G.timers.push(t);
          return { v: null };
        }
        case "ClearTimer": { const h = A[0]; G.timers.forEach(x => { if (x.handle === h) x.dead = true; }); return { v: null }; }
        case "IsTimerActive": return { v: G.timers.some(x => x.handle === A[0] && !x.dead) };
        case "PauseTimer": G.timers.forEach(x => { if (x.handle === A[0]) x.paused = true; }); return { v: null };
        case "UnPauseTimer": G.timers.forEach(x => { if (x.handle === A[0]) x.paused = false; }); return { v: null };
        case "GetTimerRemaining": { const t = G.timers.find(x => x.handle === A[0] && !x.dead); return { v: F(t ? t.at - G.time : -1) }; }
      }
    } };
    const timerHandle = () => { const h = { __type: "FTimerHandle", __struct: false, __handle: true, t: null, set(t) { this.t = t; }, __call: n => n === "IsValid" ? { v: G.timers.some(x => x.handle === h && !x.dead) } : n === "Invalidate" ? { v: null } : undefined }; return h; };
    function spawnFrom(clsRef, loc, rot) {
      const cls = clsRef instanceof TypeRef ? clsRef.cls : null;
      if (!cls) { if (clsRef === null || clsRef === undefined) { say("SpawnActor failed because no class was specified", "err"); return null; } fail("SpawnActor يحتاج صنفاً"); }
      const l = loc instanceof FVec ? loc : loc && loc.__type === "FTransform" ? loc.loc : new FVec();
      const a = spawn(cls, l, {});
      if (rot instanceof FRot) a.e.rot = rot.Pitch;
      begin(a);
      return a;
    }
    const worldObj = { __type: "UWorld", __call: (n, A, targs) => {
      switch (n) {
        case "SpawnActor": return { v: spawnFrom(A[0] instanceof TypeRef ? A[0] : targs && targs[0] ? new TypeRef(targs[0].name, rt.classes.get(targs[0].name)) : null, A[1], A[2]) };
        case "GetTimeSeconds": return { v: F(G.time) };
        case "GetDeltaSeconds": return { v: F(1 / 60) };
        case "GetTimerManager": return { v: timerMgr };
        case "GetFirstPlayerController": return { v: { __type: "APlayerController", __call: k => k === "GetPawn" ? { v: playerChar() || null } : undefined } };
      }
    }, __get: n => undefined };
    const getAll = (clsRef) => G.actors.filter(a => alive(a) && clsRef && clsRef.cls && a.cls.allBases.has(clsRef.cls.name));
    const random = () => { G.rng = ((G.rng || 7) * 1103515245 + 12345) >>> 0; return (G.rng >>> 8) / 16777216; };
    const fmath = st("FMath", n => ({ PI: D(Math.PI) })[n], (n, A) => {
      const x = A.map(nv), allInt = A.every(a => typeof a === "number");
      const r = v => ({ v: allInt ? v : D(v) });
      switch (n) {
        case "Abs": return r(Math.abs(x[0]));
        case "Max": return r(Math.max(x[0], x[1]));
        case "Min": return r(Math.min(x[0], x[1]));
        case "Clamp": return r(Math.min(Math.max(x[0], x[1]), x[2]));
        case "Sqrt": return { v: D(Math.sqrt(x[0])) }; case "Sin": return { v: D(Math.sin(x[0])) }; case "Cos": return { v: D(Math.cos(x[0])) };
        case "Pow": return { v: D(Math.pow(x[0], x[1])) };
        case "RandRange": return allInt ? { v: x[0] + Math.floor(random() * (x[1] - x[0] + 1)) } : { v: D(x[0] + random() * (x[1] - x[0])) };
        case "FRandRange": return { v: D(x[0] + random() * (x[1] - x[0])) };
        case "RoundToInt": return { v: Math.round(x[0]) };
        case "FloorToInt": return { v: Math.floor(x[0]) };
        case "CeilToInt": return { v: Math.ceil(x[0]) };
        case "Lerp": return { v: D(x[0] + (x[1] - x[0]) * x[2]) };
        case "FInterpTo": { const d = x[1] - x[0]; if (x[3] <= 0) return { v: D(x[1]) }; const step = d * Math.min(1, Math.max(0, x[2] * x[3])); return { v: D(Math.abs(d) < 1e-4 ? x[1] : x[0] + step) }; }
        case "IsNearlyEqual": return { v: Math.abs(x[0] - x[1]) <= (A.length > 2 ? x[2] : 1e-8) };
        case "IsNearlyZero": return { v: Math.abs(x[0]) <= 1e-8 };
        case "Sign": return r(Math.sign(x[0]));
      }
    });
    const FVectorRef = st("FVector", n => ({ ZeroVector: new FVec(), UpVector: new FVec(0, 0, 1), ForwardVector: new FVec(1, 0, 0), RightVector: new FVec(0, 1, 0), OneVector: new FVec(1, 1, 1) })[n], (n, A) => {
      if (n === "Dist" || n === "Distance") return { v: D(A[0].__binop("-", A[1]).size()) };
      if (n === "DotProduct") return { v: D(A[0].X * A[1].X + A[0].Y * A[1].Y + A[0].Z * A[1].Z) };
    });
    const FStringRef = st("FString", () => undefined, (n, A) => {
      if (n === "Printf") return { v: printf(A[0], A.slice(1)) };
      if (n === "FromInt") return { v: String(Math.trunc(nv(A[0]))) };
      if (n === "SanitizeFloat") return { v: sanitize(nv(A[0])) };
      if (n === "Join") return { v: A[0].a.map(toStr).join(A[1]) };
    });
    const ue = n => ({ __type: "Enum", __get: k => new EnumVal(n, k, 0) });
    // دوال مكتبة Blueprint (Kismet) المتاحة مباشرة بالاسم
    const LIB = {
      PrintString: A => { PRINT(A.length ? toStr(A[0]) : "Hello"); return null; },
      PrintText: A => { PRINT(toStr(A[0])); return null; },
      ToString: A => toStr(A[0]),
      Conv_IntToString: A => toStr(A[0]), Conv_FloatToString: A => toStr(A[0]), Conv_BoolToString: A => toStr(A[0]), Conv_VectorToString: A => toStr(A[0]),
      Append: A => A.map(toStr).join(""),
      IsValid: A => alive(A[0]) && A[0] !== null,
      Vector: A => new FVec(nv(A[0] || 0), nv(A[1] || 0), nv(A[2] || 0)),
      MakeVector: A => new FVec(nv(A[0] || 0), nv(A[1] || 0), nv(A[2] || 0)),
      MakeRotator: A => new FRot(nv(A[0] || 0), nv(A[1] || 0), nv(A[2] || 0)),
      VectorLength: A => D(A[0].size()),
      Normalize: A => A[0].__call("GetSafeNormal").v,
      GetDistanceBetween: A => D(actorLoc(A[0]).__binop("-", actorLoc(A[1])).size()),
      GetPlayerCharacter: () => playerChar() || null,
      GetPlayerPawn: () => playerChar() || null,
      GetAllActorsOfClass: A => new CList(getAll(A[0]), { name: "AActor", args: [] }),
      GetAllActorsWithTag: A => new CList(G.actors.filter(a => alive(a) && a.tags.a.includes(toStr(A[0]))), { name: "AActor", args: [] }),
      SpawnActorFromClass: A => spawnFrom(A[0], A[1], A[2]),
      RandomIntegerInRange: A => nv(A[0]) + Math.floor(random() * (nv(A[1]) - nv(A[0]) + 1)),
      RandomFloatInRange: A => D(nv(A[0]) + random() * (nv(A[1]) - nv(A[0]))),
      RandomBool: () => random() < 0.5,
      Clamp: A => A.every(a => typeof a === "number") ? Math.min(Math.max(A[0], A[1]), A[2]) : D(Math.min(Math.max(nv(A[0]), nv(A[1])), nv(A[2]))),
      FClamp: A => D(Math.min(Math.max(nv(A[0]), nv(A[1])), nv(A[2]))),
      Abs: A => typeof A[0] === "number" ? Math.abs(A[0]) : D(Math.abs(nv(A[0]))),
      Max: A => A.every(a => typeof a === "number") ? Math.max(...A) : D(Math.max(...A.map(nv))),
      Min: A => A.every(a => typeof a === "number") ? Math.min(...A) : D(Math.min(...A.map(nv))),
      Lerp: A => D(nv(A[0]) + (nv(A[1]) - nv(A[0])) * nv(A[2])),
      FInterpTo: A => fmath.native.__call("FInterpTo", A).v,
      Sin: A => D(Math.sin(nv(A[0]))), Cos: A => D(Math.cos(nv(A[0]))), Sqrt: A => D(Math.sqrt(nv(A[0]))),
      Round: A => Math.round(nv(A[0])), Truncate: A => Math.trunc(nv(A[0])), Floor: A => Math.floor(nv(A[0])),
      GetWorldDeltaSeconds: () => D(1 / 60),
      GetGameTimeInSeconds: () => D(G.time),
      SetTimerByFunctionName: (A, self) => { const h = timerHandle(); const t = { obj: self, method: toStr(A[0]), rate: nv(A[1]), loop: !!A[2], at: G.time + nv(A[1]), handle: h }; h.set(t); G.timers.push(t); return h; },
      ClearTimerByFunctionName: (A, self) => { G.timers.forEach(t => { if (t.obj === self && t.method === toStr(A[0])) t.dead = true; }); return null; },
      ClearAndInvalidateTimerByHandle: A => { G.timers.forEach(t => { if (t.handle === A[0]) t.dead = true; }); return null; },
      ApplyDamage: A => { const t = A[0]; if (alive(t)) event(t, "ReceiveAnyDamage", [D(nv(A[1]))]); return D(nv(A[1])); },
      PlaySoundAtLocation: A => { G.sounds.push(toStr(A[0])); info("🔊 " + toStr(A[0])); return null; },
      PlaySound2D: A => { G.sounds.push(toStr(A[0])); info("🔊 " + toStr(A[0])); return null; },
      QuitGame: () => { info("QuitGame"); return null; },
      __Delay: A => ({ __delay: true, t: nv(A[0]), node: A[1] })
    };
    const GLOBALS = {
      FMath: fmath, FVector: FVectorRef, FString: FStringRef,
      FRotator: st("FRotator", n => n === "ZeroRotator" ? new FRot() : undefined),
      ECollisionEnabled: st("ECollisionEnabled", n => new EnumVal("ECollisionEnabled", n, 0)),
      FColor: st("FColor", n => n), FLinearColor: st("FLinearColor", n => n),
      UGameplayStatics: st("UGameplayStatics", () => undefined, (n, A) => {
        if (n === "GetPlayerCharacter" || n === "GetPlayerPawn") return { v: playerChar() || null };
        if (n === "GetAllActorsOfClass") { const out = A[2]; getAll(A[1]).forEach(a => out.a.push(a)); return { v: null }; }
        if (n === "GetTimeSeconds") return { v: F(G.time) };
        if (n === "ApplyDamage") return { v: LIB.ApplyDamage([A[0], A[1]]) };
        if (n === "PlaySoundAtLocation" || n === "PlaySound2D") return { v: LIB.PlaySound2D([A[1]]) };
      }),
      UKismetSystemLibrary: st("UKismetSystemLibrary", () => undefined, (n, A) => n === "PrintString" ? { v: LIB.PrintString([A[1]]) } : undefined),
      UKismetMathLibrary: st("UKismetMathLibrary", () => undefined, (n, A) => LIB[n] ? { v: LIB[n](A) } : undefined),
      GEngine: { __type: "UEngine", __call: (n, A) => { if (n === "AddOnScreenDebugMessage") { PRINT(toStr(A[3])); return { v: null }; } } },
      EEndPlayReason: st("EEndPlayReason", n => new EnumVal("EEndPlayReason", n, 0))
    };
    GLOBALS.GEngine.__bool = () => true;

    // ---------- المضيف ----------
    const actorMember = (a, n) => {
      switch (n) {
        case "Tags": return a.tags;
        case "RootComponent": return a.root || a.comps[0] || null;
        case "PrimaryActorTick": return { __type: "FActorTickFunction", __get: k => k === "bCanEverTick" ? !!a.canTick : k === "TickInterval" ? F(0) : undefined, __set: (k, v) => { if (k === "bCanEverTick" || k === "bStartWithTickEnabled") { a.canTick = !!v; return; } if (k === "TickInterval") return; return false; } };
        case "OnActorBeginOverlap": case "OnActorEndOverlap": case "OnActorHit": return delegate(a, n);
        case "Self": return a;
      }
    };
    const delegate = (a, n) => ({ __type: "FDelegate", __call: (k, A) => {
      if (k === "AddDynamic" || k === "AddUniqueDynamic") { (a.delegates[n] = a.delegates[n] || []).push({ obj: A[0], method: A[1].method || A[1].name }); return { v: null }; }
      if (k === "RemoveDynamic" || k === "RemoveAll") { a.delegates[n] = []; return { v: null }; }
    } });
    function actorCall(a, n, A, targs) {
      const e = a.e;
      switch (n) {
        case "GetActorLocation": case "K2_GetActorLocation": return { v: actorLoc(a) };
        case "SetActorLocation": case "K2_SetActorLocation": { const v = asVec(A[0]); const g = e.global(); e.pos.x += v.X - g.x; e.pos.y += v.Y - g.y; e.pos.z += v.Z - g.z; return { v: true }; }
        case "AddActorWorldOffset": case "AddActorLocalOffset": case "K2_AddActorWorldOffset": { const v = asVec(A[0]); e.pos.x += v.X; e.pos.y += v.Y; e.pos.z += v.Z; return { v: null }; }
        case "GetActorForwardVector": { const r = e.rot * Math.PI / 180; return { v: new FVec(Math.cos(r), 0, Math.sin(r)) }; }
        case "GetActorUpVector": return { v: new FVec(0, 0, 1) };
        case "GetActorRightVector": return { v: new FVec(0, 1, 0) };
        case "GetActorRotation": return { v: new FRot(e.rot, 0, 0) };
        case "SetActorRotation": case "K2_SetActorRotation": e.rot = A[0].Pitch; return { v: true };
        case "AddActorLocalRotation": case "AddActorWorldRotation": e.rot += A[0].Pitch; return { v: null };
        case "GetActorScale3D": return { v: new FVec(e.scale.x, e.scale.y, e.scale.z) };
        case "SetActorScale3D": { const v = asVec(A[0]); e.scale.x = v.X; e.scale.y = v.Y; e.scale.z = v.Z; refreshVisual(a); applyBody(a); return { v: null }; }
        case "Destroy": case "K2_DestroyActor": case "DestroyActor": destroyActor(a); return { v: true };
        case "SetLifeSpan": G.timers.push({ obj: a, method: "__destroy", rate: nv(A[0]), at: G.time + nv(A[0]), loop: false }); return { v: null };
        case "__destroy": destroyActor(a); return { v: null };
        case "SetActorHiddenInGame": a.hidden = !!A[0]; refreshVisual(a); return { v: null };
        case "SetActorEnableCollision": a.noCollision = !A[0]; applyBody(a); return { v: null };
        case "SetActorTickEnabled": a.tickEnabled = !!A[0]; return { v: null };
        case "GetDistanceTo": return { v: D(actorLoc(a).__binop("-", actorLoc(A[0])).size()) };
        case "ActorHasTag": return { v: a.tags.a.includes(toStr(A[0])) };
        case "GetName": return { v: a.internalName };
        case "GetActorNameOrLabel": case "GetActorLabel": return { v: a.label };
        case "GetWorld": return { v: worldObj };
        case "GetWorldTimerManager": return { v: timerMgr };
        case "GetOwner": return { v: null };
        case "GetGameTimeSinceCreation": return { v: F(G.time) };
        case "GetVelocity": return { v: new FVec(e.vel.x, 0, e.vel.z) };
        case "FindComponentByClass": case "GetComponentByClass": { const t = targs && targs[0] ? targs[0].name : A[0] && A[0].name; return { v: a.comps.find(c => c instanceof Obj ? c.cls.allBases.has(t) : c.__types.includes(t)) || null }; }
        case "GetComponents": return { v: new CList(a.comps.slice(), null) };
        case "CreateDefaultSubobject": { const t = targs[0].name; const c = addComp(a, t, toStr(A[0]), ""); if (c instanceof Obj) return { v: c }; if (!a.root) a.root = c; return { v: c }; }
        case "GetOverlappingActors": { overlapping(a).forEach(o => A[0].a.push(o)); return { v: null }; }
        case "IsOverlappingActor": return { v: overlapping(a).includes(A[0]) };
        case "EnableInput": case "DisableInput": return { v: null };
        // Character
        case "Jump": a.wantJump = true; return { v: null };
        case "StopJumping": return { v: null };
        case "AddMovementInput": { const d = asVec(A[0]); a.pendingInput = (a.pendingInput || 0) + d.X * (A.length > 1 ? nv(A[1]) : 1); return { v: null }; }
        case "LaunchCharacter": { const v = asVec(A[0]); if (A[1]) e.vel.x = v.X; else e.vel.x += v.X; if (A[2]) e.vel.z = v.Z; else e.vel.z += v.Z; return { v: null }; }
        case "GetCharacterMovement": return { v: a.move || null };
        case "CanJump": return { v: !!e.flags.floor };
        case "IsFalling": return { v: !e.flags.floor };
      }
      if (n === "IsA") return { v: A[0] && a.cls.allBases.has(A[0].name) };
      if (LIB[n]) return { v: LIB[n](A, a) };
    }
    function compCall(c, n, A, targs) {
      switch (n) {
        case "GetOwner": return { v: c.ownerActor };
        case "GetWorld": return { v: worldObj };
        case "GetName": return { v: c.compName };
        case "DestroyComponent": c.ownerActor.comps = c.ownerActor.comps.filter(x => x !== c); c.destroyed = true; return { v: null };
        case "SetComponentTickEnabled": c.canTick = !!A[0]; return { v: null };
      }
      if (LIB[n]) return { v: LIB[n](A, c.ownerActor) };
    }
    const host = {
      global: (name, line, targs) => {
        if (GLOBALS[name]) return GLOBALS[name];
        if (LEVEL_TYPES[name] && rt.classes.has(LEVEL_TYPES[name])) return new TypeRef(LEVEL_TYPES[name], rt.classes.get(LEVEL_TYPES[name]));
        if (name === "Self") return undefined;
      },
      selfMember: (obj, n) => obj.e ? actorMember(obj, n) : obj.ownerActor ? (n === "PrimaryComponentTick" ? { __type: "FTick", __get: () => !!obj.canTick, __set: (k, v) => { obj.canTick = !!v; } } : undefined) : undefined,
      objGet: (obj, n) => obj.e ? actorMember(obj, n) : undefined,
      selfSet: (obj, n, v) => { if (obj.e && n === "RootComponent") { obj.root = v; return true; } return false; },
      objSet: () => false,
      selfCall: (obj, n, A, targs) => obj.e ? actorCall(obj, n, A, targs) : obj.ownerActor ? compCall(obj, n, A, targs) : undefined,
      objCall: (obj, n, A, targs) => obj.e ? actorCall(obj, n, A, targs) : obj.ownerActor ? compCall(obj, n, A, targs) : undefined,
      globalCall: (n, A, targs, line, env) => {
        if (n === "UE_LOG") {
          const verb = A[1] && A[1].__verb ? A[1].__verb : "Log";
          const msg = printf(A[2], A.slice(3));
          say(`${A[0] && A[0].__cat ? A[0].__cat : "LogTemp"}: ${verb === "Warning" || verb === "Error" ? verb + ": " : ""}${msg}`);
          return { v: null };
        }
        if (n === "TEXT") return { v: A[0] };
        if (n === "FVector") return { v: new FVec(nv(A[0] ?? 0), nv(A[1] ?? A[0] ?? 0) * (A.length === 1 ? 1 : 1), nv(A[2] ?? (A.length === 1 ? A[0] : 0))) };
        if (n === "FRotator") return { v: new FRot(nv(A[0] ?? 0), nv(A[1] ?? 0), nv(A[2] ?? 0)) };
        if (n === "FString" || n === "FName" || n === "FText") return { v: A.length ? toStr(A[0]) : "" };
        if (n === "Cast") { const t = targs[0].name; return { v: A[0] instanceof Obj && A[0].cls.allBases.has(t) && alive(A[0]) ? A[0] : null }; }
        if (n === "static_cast") return { v: rt.cast(A[0], targs[0]) };
        if (n === "IsValid") return { v: !!A[0] && alive(A[0]) };
        if (n === "check" || n === "ensure" || n === "checkf") return { v: true };
        if (n === "DrawDebugLine" || n === "DrawDebugSphere" || n === "DrawDebugBox") return { v: null };
        const self = env && env.self;
        if (LIB[n]) return { v: LIB[n](A, self && (self.e ? self : self.ownerActor)) };
      },
      baseCall: (self, n, A) => {
        if (n === "BeginPlay") { if (self.e) nativeBegin(self); return { v: null }; }
        if (n === "Tick") { if (self.e) event(self, "ReceiveTick", A); return { v: null }; }
        if (n === "NotifyActorBeginOverlap") { event(self, "ReceiveActorBeginOverlap", A); return { v: null }; }
        if (n === "NotifyActorEndOverlap") { event(self, "ReceiveActorEndOverlap", A); return { v: null }; }
        if (n === "EndPlay" || n === "TickComponent") return { v: null };
        return { v: null };
      },
      typeCall: () => undefined,
      newNative: (n, A) => {
        if (n === "FVector") return new FVec(nv(A[0] ?? 0), nv(A[1] ?? 0), nv(A[2] ?? 0));
        if (n === "FRotator") return new FRot(nv(A[0] ?? 0), nv(A[1] ?? 0), nv(A[2] ?? 0));
        if (n === "FString" || n === "FName" || n === "FText") return A.length ? toStr(A[0]) : "";
        if (n === "FTimerHandle") return timerHandle();
      },
      defaultFor: type => {
        const n = type.name;
        if (n === "FVector") return new FVec();
        if (n === "FRotator") return new FRot();
        if (n === "FString" || n === "FName" || n === "FText") return "";
        if (n === "FTimerHandle") return timerHandle();
        if (n === "TArray") return new CList([], type.args[0]);
        return undefined;
      },
      coerce: (v, type, line) => {
        const n = type.name;
        if (n === "FString" && isNum(v)) fail(`no viable conversion from '${rt.typeLabel(v)}' to 'FString' (استخدم FString::FromInt أو FString::SanitizeFloat)`, line);
        if ((n === "TSubclassOf" || n === "UClass") && (v === null || v instanceof TypeRef)) return v;
        return undefined;
      },
      cast: (v, type) => { if (type.name === "FString" && isNum(v)) return toStr(v); },
      runEvent: (en, self) => runEvent(en, self),
      truth: v => { if (v instanceof Obj) return alive(v); if (v && (v.__type || v.__types)) return true; },
      nullTruth: true,
      isFakeNull: v => v instanceof Obj && !!v.e && !alive(v),
      strOf: v => v instanceof Obj && v.e ? v.internalName : v instanceof Obj && v.ownerActor ? v.compName : v && v.__str ? v.__str() : null
    };
    // UE_LOG(LogTemp, Warning, ...): الفئة والمستوى كمعرفات
    ["LogTemp", "LogGame"].forEach(c => { GLOBALS[c] = { __type: "LogCategory", __cat: c }; });
    ["Log", "Display", "Warning", "Error", "Verbose"].forEach(v => { GLOBALS[v] = { __type: "Verbosity", __verb: v }; });
    cs.setPrimHook(v => {
      if (v === null || v === undefined) return "None";
      if (typeof v === "boolean") return v ? "true" : "false";
      if (v instanceof Num) return sanitize(v.v);
      if (v instanceof Obj && v.e) return v.label === v.internalName ? v.internalName : v.label;
      return undefined;
    });

    G.load = (code, setup) => {
      let level = [], cpp = [], bp = [], cur = null;
      const lines = (setup || "").split("\n").concat(["\u0000"], (code || "").split("\n"));
      for (const raw of lines) {
        if (raw === "\u0000") { cur = null; continue; }
        if (/^\[level\]\s*$/.test(raw.trim())) { cur = "level"; continue; }
        const fm = /^\s*\/\/\s*file:\s*(\S+)/.exec(raw);
        if (fm) { cur = /\.(h|cpp)$/.test(fm[1]) ? "cpp" : "bp"; continue; }
        if (/^Blueprint\s+\w+/.test(raw)) cur = "bp";
        if (cur === "level") level.push(raw);
        else if (cur === "bp") bp.push(raw);
        else if (cur === "cpp") cpp.push(raw);
        else if (raw.trim()) (/^\s*(#include|class|UCLASS|void|struct|USTRUCT)/.test(raw) || cpp.length ? cpp : bp).push(raw);
      }
      const types = NATIVE.map(([n, b]) => nativeCls(n, b));
      if (cpp.some(l => l.trim())) types.push(...cs.parse(cpp.join("\n"), { cpp: true }).types);
      if (bp.some(l => l.trim())) types.push(...CW.bp.compile(bp.join("\n")).types);
      rt = new cs.Runtime(types, host, { cpp: true });
      G.rt = rt;
      rt.initStatics();
      G.levelLines = level;
    };
    G.start = () => {
      const made = [];
      for (const raw of G.levelLines) {
        if (!raw.trim() || raw.trim().startsWith("#")) continue;
        const m = /^\s*([\w ]+?)\s*:\s*(\w+)\s*(.*)$/.exec(raw);
        if (!m) fail(`صيغة المستوى: "Name: Class key=value" ووُجد "${raw.trim()}"`);
        const [, label, type, rest] = m;
        const cname = LEVEL_TYPES[type] || type;
        const cls = rt.classes.get(cname);
        if (!cls) fail(`الصنف ${type} غير موجود`);
        const props = {};
        rest.replace(/(\w+)=("[^"]*"|\([^)]*\)|\S+)/g, (x, k, v) => { props[k] = v.replace(/^"|"$/g, ""); return x; });
        const pos = props.pos ? props.pos.replace(/[()]/g, "").split(",").map(Number) : [0, 0, 0];
        const loc = pos.length === 2 ? new FVec(pos[0], 0, pos[1]) : new FVec(...pos);
        made.push(spawn(cls, loc, props, label));
      }
      made.forEach(a => (a.deferred || []).forEach(([k, raw]) => applyProp(a, k, raw)));
      made.forEach(begin);
    };
    G.frame = dt => {
      rt.steps = 0;
      // مفاتيح Event Key
      for (const k of world.input.pressed) for (const a of G.actors.slice()) if (alive(a)) event(a, "InputKey_" + (k === "space" ? "SPACEBAR" : k === "enter" ? "ENTER" : k.toUpperCase()), []);
      tickLatent();
      for (const a of G.actors.slice()) {
        if (!alive(a) || !a.begun || !a.tickEnabled) continue;
        const m = rt.findMethod(a.cls, "Tick", 1);
        if (m && !m.cls.isBP) guard(() => rt.invoke(m.m, m.cls, a, [F(dt)]), a, "Tick");
        else event(a, "ReceiveTick", [D(dt)]);
        for (const c of a.comps) if (c instanceof Obj && c.canTick) { const tm = rt.findMethod(c.cls, "TickComponent", 3); if (tm) guard(() => rt.invoke(tm.m, tm.cls, c, [F(dt), null, null]), a, "TickComponent"); }
      }
      moveCharacters(dt);
      moveProjectiles(dt);
      world.step(dt);
      G.time += dt;
      G.frame++;
      world.endFrameInput();
      // نصوص Print String على الشاشة
      G.screen = G.screen.filter(s => s.until > G.time).slice(-6);
      if (!G.hud) G.hud = world.add({ name: "__hud", type: "HUD" });
      G.hud.visual = { text: G.screen.map(s => s.text).join("   ·   "), color: "#4fc3f7", size: 13, screen: [8, 8] };
    };
    return G;
  }

  CW.simKinds = CW.simKinds || {};
  CW.simKinds.unreal = {
    label: "Unreal (محاكي)",
    build(code, setup, say) {
      const G = Game(say);
      G.load(code, setup);
      const actor = name => { const a = G.actors.find(x => !x.destroyed && (x.label === name || x.internalName === name)); if (!a) throw new Error(`الـ Actor ${name} غير موجود`); return a; };
      return {
        world: G.world,
        start: G.start,
        frame: G.frame,
        helpers: {
          // get("Door", "IsOpen") ← قيمة تعبير بصيغة Unreal (true و 3.5 و X=... Y=... Z=...)
          get: (name, expr) => { const e = cs.parse(expr, { expression: true, cpp: true }); const a = actor(name); return toStr(G.rt.eval(e, { self: a, cls: a.cls, scopes: [new Map()], fn: "test" })); },
          pos: name => { const g = actor(name).e.global(); return [Math.round(g.x * 10) / 10, Math.round(g.z * 10) / 10]; },
          exists: name => G.actors.some(x => !x.destroyed && (x.label === name || x.internalName === name)),
          count: cls => G.actors.filter(a => !a.destroyed && a.cls.allBases.has(cls)).length,
          tagged: tag => G.actors.filter(a => !a.destroyed && a.tags.a.includes(tag)).length,
          call: (name, method, ...args) => { const a = actor(name); const conv = v => typeof v === "number" ? (Number.isInteger(v) ? v : D(v)) : v; let r = null;
            // "Health.TakeDamage" ← مسار لمكوّن ثم دالة
            const fn = /[.>]/.test(method) ? () => { const lit = v => typeof v === "string" ? JSON.stringify(v) : String(v); r = G.rt.eval(cs.parse(`${method}(${args.map(lit).join(", ")})`, { expression: true, cpp: true }), { self: a, cls: a.cls, scopes: [new Map()], fn: "test" }); } : () => { r = G.rt.callMethod(a, method, args.map(conv)); }; try { fn(); } catch (e) { if (e instanceof cs.CSException) { say(`${e.type}: ${e.message}`, "err"); return null; } throw e; } return r === null ? "None" : toStr(r); },
          setPos: (name, x, z) => { const e = actor(name).e; e.pos.x = x; e.pos.z = z; },
          sounds: () => G.sounds.slice(),
          time: () => Math.round(G.time * 1000) / 1000
        }
      };
    }
  };
})(typeof window !== "undefined" ? window : globalThis);
