// عالم ألعاب محاكى مشترك لدورات Godot و Unity و Unreal: كيانات بمواقع وأبناء، وأجسام فيزيائية
// (ثابت، ديناميكي، حركي، شخصية، منطقة)، وتصادم وتداخل بصناديق محاذية للمحاور، ومدخلات، ورسم على Canvas
// المحركات الحقيقية أعقد بكثير؛ هذا نموذج تعليمي حتمي يكفي لتعلم البرمجة فيها
(function (root) {
  const CW = root.CW = root.CW || {};

  class V {
    constructor(x = 0, y = 0, z = 0) { this.x = x; this.y = y; this.z = z; }
    clone() { return new V(this.x, this.y, this.z); }
  }

  let nextId = 1;
  class Entity {
    constructor(spec) {
      this.id = nextId++;
      this.name = spec.name || "Entity" + this.id;
      this.type = spec.type || "Node";
      this.pos = new V(...(spec.pos || [0, 0, 0]));
      this.rot = spec.rot || 0;
      this.scale = new V(...(spec.scale || [1, 1, 1]));
      this.vel = new V();
      this.children = [];
      this.parent = null;
      this.body = spec.body || null;            // static | rigid | kinematic | character | area
      this.shape = spec.shape || null;          // { kind: "rect", w, h, d } أو { kind: "circle", r }
      this.trigger = !!spec.trigger;
      this.gravityScale = spec.gravityScale ?? 1;
      this.bounce = spec.bounce || 0;
      this.visual = spec.visual || null;        // { color, sprite, frame, text, w, h, circle }
      this.tags = new Set(spec.tags || []);
      this.active = true;
      this.destroyed = false;
      this.flags = { floor: false, wall: false, ceiling: false };
      this.data = {};
    }
    global() {
      let p = this.pos.clone(), e = this.parent;
      while (e) { p.x += e.pos.x; p.y += e.pos.y; p.z += e.pos.z; e = e.parent; }
      return p;
    }
    path() { const parts = []; let e = this; while (e && e.parent) { parts.unshift(e.name); e = e.parent; } return parts.join("/"); }
    find(path) {
      if (!path) return this;
      let cur = this;
      for (const part of String(path).split("/")) {
        if (part === "" || part === ".") continue;
        if (part === "..") { cur = cur.parent; continue; }
        cur = cur && cur.children.find(c => c.name === part && !c.destroyed);
        if (!cur) return null;
      }
      return cur;
    }
    isActive() { let e = this; while (e) { if (!e.active || e.destroyed) return false; e = e.parent; } return true; }
  }

  class World {
    constructor(opts = {}) {
      this.yUp = !!opts.yUp;
      this.gravity = opts.gravity || new V(0, opts.yUp ? -9.81 : 980, 0);
      this.ppu = opts.ppu || 1;              // بكسل لكل وحدة عند الرسم
      this.view = opts.view || { w: 480, h: 320, ox: 0, oy: 0 };   // الإزاحة: موضع أصل العالم على الشاشة
      this.axes = opts.axes || ["x", "y"];   // المحوران المرسومان (Unreal: x و z)
      this.root = new Entity({ name: "root", type: "Root" });
      this.time = 0;
      this.frame = 0;
      this.listeners = [];
      this.contacts = new Map();             // أزواج متلامسة من الإطار السابق
      this.input = { down: new Set(), pressed: new Set(), released: new Set(), queue: [], mouse: { x: 0, y: 0, down: false, pressed: false, released: false } };
      this.logs = [];
      this.assets = opts.assets || {};
    }
    add(spec, parent) {
      const e = spec instanceof Entity ? spec : new Entity(spec);
      e.parent = parent || this.root;
      e.parent.children.push(e);
      e.world = this;
      return e;
    }
    destroy(e) { e.destroyed = true; e.children.forEach(c => this.destroy(c)); }
    all(from = this.root, out = []) { for (const c of from.children) { if (!c.destroyed) { out.push(c); this.all(c, out); } } return out; }
    byName(name) { return this.all().find(e => e.name === name); }
    on(fn) { this.listeners.push(fn); }
    emit(type, a, b, info) { this.listeners.forEach(fn => fn(type, a, b, info)); }

    // ---------- الأشكال ----------
    // شكل الجسم: شكله هو أو شكل أول ابن تصادم (CollisionShape2D في Godot)
    shapesOf(e) {
      const out = [];
      if (e.shape) out.push({ s: e.shape, off: new V(), trigger: e.trigger });
      for (const c of e.children) if (c.shape && !c.body && !c.destroyed && c.active) out.push({ s: c.shape, off: c.pos.clone(), trigger: c.trigger || e.trigger });
      return out;
    }
    aabb(e, at) {
      const g = at || e.global();
      const sh = this.shapesOf(e)[0];
      if (!sh) return null;
      const [a, b] = this.axes;
      const sx = Math.abs(e.scale[a]), sy = Math.abs(e.scale[b]);
      const hw = sh.s.kind === "circle" ? sh.s.r * sx : sh.s.w / 2 * sx;
      const hh = sh.s.kind === "circle" ? sh.s.r * sy : sh.s.h / 2 * sy;
      const cx = g[a] + sh.off[a], cy = g[b] + sh.off[b];
      return { x1: cx - hw, x2: cx + hw, y1: cy - hh, y2: cy + hh, circle: sh.s.kind === "circle", cx, cy, r: sh.s.kind === "circle" ? sh.s.r * sx : 0, trigger: sh.trigger };
    }
    static overlap(p, q, eps = 0) {
      if (!p || !q) return false;
      if (p.circle && q.circle) { const dx = p.cx - q.cx, dy = p.cy - q.cy, rr = p.r + q.r; return dx * dx + dy * dy < rr * rr - eps; }
      return p.x1 < q.x2 - eps && p.x2 > q.x1 + eps && p.y1 < q.y2 - eps && p.y2 > q.y1 + eps;
    }
    solids(except) { return this.all().filter(e => e !== except && e.isActive() && e.body && e.body !== "area" && !e.trigger && this.shapesOf(e).length && !this.shapesOf(e)[0].trigger); }

    // ---------- الحركة مع الانزلاق (move_and_slide) ----------
    // يحرك الكيان بسرعته vel خلال dt، ويوقفه عند الأجسام الصلبة، ويضبط floor و wall و ceiling
    moveAndSlide(e, dt) {
      const [a, b] = this.axes;
      e.flags = { floor: false, wall: false, ceiling: false };
      const hits = [];
      const down = this.gravity[b] === 0 ? (this.yUp ? -1 : 1) : Math.sign(this.gravity[b]);   // اتجاه "الأسفل" على المحور الرأسي
      const solids = this.solids(e);
      for (const axis of [a, b]) {
        const d = e.vel[axis] * dt;
        if (!d) continue;
        e.pos[axis] += d;
        const box = this.aabb(e);
        if (!box) continue;   // جسم بلا شكل تصادم: يتحرك دون أن يصطدم
        for (const s of solids) {
          const sb = this.aabb(s);
          if (!World.overlap(box, sb, 1e-9)) continue;
          // نعيده لحافة الجسم الصلب
          const isA = axis === a;
          const push = d > 0 ? (isA ? sb.x1 - box.x2 : sb.y1 - box.y2) : (isA ? sb.x2 - box.x1 : sb.y2 - box.y1);
          e.pos[axis] += push;
          if (isA) e.flags.wall = true;
          else if (Math.sign(d) === down) e.flags.floor = true;
          else e.flags.ceiling = true;
          e.vel[axis] = 0;
          hits.push(s);
          break;
        }
      }
      // ملامسة الأرض حتى دون حركة رأسية (الوقوف)
      if (!e.flags.floor && this.aabb(e)) {
        const box = this.aabb(e);
        const probe = Object.assign({}, box, down > 0 ? { y1: box.y2, y2: box.y2 + 0.5 / this.ppu } : { y1: box.y1 - 0.5 / this.ppu, y2: box.y1 });
        if (solids.some(s => World.overlap(probe, this.aabb(s), 1e-9))) e.flags.floor = true;
      }
      return hits;
    }

    // ---------- خطوة الفيزياء ----------
    step(dt) {
      const [a, b] = this.axes;
      // الأجسام الديناميكية: جاذبية + حركة + تصادم
      for (const e of this.all()) {
        if (!e.isActive()) continue;
        if (e.body === "rigid") {
          e.vel[a] += this.gravity[a] * e.gravityScale * dt;
          e.vel[b] += this.gravity[b] * e.gravityScale * dt;
          const before = e.vel.clone();
          const hits = this.moveAndSlide(e, dt);
          if (e.bounce && hits.length) { if (e.vel[b] === 0 && before[b]) e.vel[b] = -before[b] * e.bounce; if (e.vel[a] === 0 && before[a]) e.vel[a] = -before[a] * e.bounce; }
          hits.forEach(h => this.touch(e, h, "collision"));
        } else if (e.body === "kinematic" && (e.vel[a] || e.vel[b])) {
          e.pos[a] += e.vel[a] * dt; e.pos[b] += e.vel[b] * dt;
        }
      }
      // التداخل: المناطق والمحفزات مع أي جسم
      const all = this.all().filter(e => e.isActive() && e.body && this.shapesOf(e).length);
      for (let i = 0; i < all.length; i++) for (let j = i + 1; j < all.length; j++) {
        const p = all[i], q = all[j];
        const trig = p.body === "area" || q.body === "area" || p.trigger || q.trigger || this.shapesOf(p)[0].trigger || this.shapesOf(q)[0].trigger;
        if (!trig) {
          // تلامس صلب بين شخصية/جسم وآخر (يكفي أن يتلامسا)
          const pb = this.aabb(p), qb = this.aabb(q);
          const grow = 0.6 / this.ppu;
          if (World.overlap({ x1: pb.x1 - grow, x2: pb.x2 + grow, y1: pb.y1 - grow, y2: pb.y2 + grow }, qb, 1e-9) && (p.body !== "static" || q.body !== "static")) this.touch(p, q, "collision");
          continue;
        }
        if (p.body === "static" && q.body === "static") continue;
        if (World.overlap(this.aabb(p), this.aabb(q))) this.touch(p, q, "trigger");
      }
      // أحداث البداية والنهاية
      const now = this.touching || new Map();
      for (const [k, v] of now) if (!this.contacts.has(k)) this.emit(v.kind + "-enter", v.a, v.b);
      for (const [k, v] of this.contacts) if (!now.has(k) && !v.a.destroyed && !v.b.destroyed) this.emit(v.kind + "-exit", v.a, v.b);
      this.contacts = now;
      this.touching = new Map();
      this.time += dt;
      this.frame++;
    }
    touch(p, q, kind) {
      this.touching = this.touching || new Map();
      const [a, b] = p.id < q.id ? [p, q] : [q, p];
      const k = a.id + ":" + b.id;
      if (!this.touching.has(k)) this.touching.set(k, { a, b, kind });
    }

    // ---------- الشعاع ----------
    raycast(origin, dir, maxDist = Infinity, except) {
      const [a, b] = this.axes;
      const len = Math.hypot(dir[a], dir[b]) || 1;
      const dx = dir[a] / len, dy = dir[b] / len;
      let best = null;
      for (const e of this.all()) {
        if (e === except || !e.isActive() || !e.body || e.body === "area") continue;
        const box = this.aabb(e);
        if (!box) continue;
        // تقاطع شعاع مع صندوق (طريقة الألواح)
        let t1 = -Infinity, t2 = Infinity;
        for (const [o, d, lo, hi] of [[origin[a], dx, box.x1, box.x2], [origin[b], dy, box.y1, box.y2]]) {
          if (Math.abs(d) < 1e-12) { if (o < lo || o > hi) { t1 = Infinity; break; } continue; }
          let ta = (lo - o) / d, tb = (hi - o) / d;
          if (ta > tb) [ta, tb] = [tb, ta];
          t1 = Math.max(t1, ta); t2 = Math.min(t2, tb);
        }
        if (t1 <= t2 && t1 >= 0 && t1 <= maxDist && (!best || t1 < best.distance)) {
          const pt = new V(); pt[a] = origin[a] + dx * t1; pt[b] = origin[b] + dy * t1;
          best = { entity: e, distance: t1, point: pt };
        }
      }
      return best;
    }

    // ---------- المدخلات ----------
    keyDown(k) { if (!this.input.down.has(k)) { this.input.down.add(k); this.input.pressed.add(k); } }
    keyUp(k) { if (this.input.down.has(k)) { this.input.down.delete(k); this.input.released.add(k); } }
    endFrameInput() { this.input.pressed.clear(); this.input.released.clear(); this.input.mouse.pressed = this.input.mouse.released = false; }
    // الفأرة (أو اللمس) بإحداثيات الشاشة بالبكسل
    mouseMove(x, y) { this.input.mouse.x = x; this.input.mouse.y = y; }
    mouseDown(x, y) { const m = this.input.mouse; if (x != null) this.mouseMove(x, y); if (!m.down) { m.down = true; m.pressed = true; } }
    mouseUp() { const m = this.input.mouse; if (m.down) { m.down = false; m.released = true; } }

    // ---------- الرسم ----------
    draw(ctx) {
      const W = ctx.canvas.width, H = ctx.canvas.height;
      const [a, b] = this.axes;
      ctx.direction = "ltr"; ctx.textAlign = "left";   // الصفحة عربية، والنص داخل اللعبة يبدأ من x
      ctx.fillStyle = this.bg || "#1d2b53";
      ctx.fillRect(0, 0, W, H);
      const sx = v => this.view.ox + v * this.ppu;
      const sy = v => this.yUp ? this.view.oy - v * this.ppu : this.view.oy + v * this.ppu;
      for (const e of this.all()) {
        if (!e.isActive() || !e.visual || e.visual.hidden) continue;
        const g = e.global(), v = e.visual;
        const box = this.aabb(e);
        const img = v.sprite && this.images && this.images[v.sprite];
        const ready = img && img.complete && img.naturalWidth;
        // الصورة بحجمها الطبيعي (مضروباً في scale)، والشكل الملون بحجم صندوق التصادم
        let w, h;
        if (v.w != null) { w = v.w * this.ppu; h = v.h * this.ppu; }
        else if (ready) { const k = this.spriteScale || 1; w = (v.frameW || img.naturalWidth) * Math.abs(e.scale[a]) * k; h = (v.frameH || img.naturalHeight) * Math.abs(e.scale[b]) * k; }
        else { w = (box ? box.x2 - box.x1 : 20 / this.ppu) * this.ppu; h = (box ? box.y2 - box.y1 : 20 / this.ppu) * this.ppu; }
        const cx = v.screen ? v.screen[0] : sx(g[a]), cy = v.screen ? v.screen[1] : sy(g[b]);   // عناصر الواجهة بإحداثيات الشاشة
        if (v.uiW) {
          // عنصر واجهة: مستطيل بالبكسل (شريط بنسبة تعبئة أو زر بنص)
          const [x, y] = v.screen;
          if (v.fill < 1) { ctx.fillStyle = v.back || "rgba(0,0,0,.45)"; ctx.fillRect(x, y, v.uiW, v.uiH); }
          ctx.fillStyle = v.color || "#3d5afe"; ctx.fillRect(x, y, v.uiW * (v.fill ?? 1), v.uiH);
          if (v.label != null) { ctx.fillStyle = "#fff"; ctx.font = "15px sans-serif"; ctx.textBaseline = "middle"; ctx.textAlign = "center"; ctx.fillText(String(v.label), x + v.uiW / 2, y + v.uiH / 2); ctx.textAlign = "left"; }
          continue;
        }
        if (v.text != null) {
          ctx.fillStyle = v.color || "#fff"; ctx.font = (v.size || 16) + "px sans-serif"; ctx.textBaseline = "top";
          ctx.fillText(String(v.text), cx, cy);
          continue;
        }
        ctx.save();
        ctx.translate(cx, cy);
        if (e.rot) ctx.rotate((this.yUp ? -1 : 1) * e.rot * Math.PI / 180);
        if (ready) {
          const fw = v.frameW || img.naturalWidth, fh = v.frameH || img.naturalHeight;
          ctx.scale(v.flip ? -1 : 1, 1);
          ctx.drawImage(img, (v.frame || 0) * fw, 0, fw, fh, -w / 2, -h / 2, w, h);
        } else {
          ctx.fillStyle = v.color || "#ffd84d";
          if (v.circle) { ctx.beginPath(); ctx.arc(0, 0, Math.min(w, h) / 2, 0, Math.PI * 2); ctx.fill(); }
          else ctx.fillRect(-w / 2, -h / 2, w, h);
        }
        ctx.restore();
        if (v.label) { ctx.fillStyle = "rgba(255,255,255,.75)"; ctx.font = "10px sans-serif"; ctx.textBaseline = "bottom"; ctx.textAlign = "center"; ctx.fillText(v.label, cx, cy - h / 2 - 2); ctx.textAlign = "left"; }
      }
    }
  }

  CW.Sim = { V, Entity, World };

  // ---------- مشغّل المحاكيات (Godot و Unity و Unreal) ----------
  // كل لغة تسجّل محوّلاً: CW.simKinds[kind] = { build(code, setup) → { world, start(), update(dt), ... } }
  CW.simKinds = CW.simKinds || {};
  const KEYMAP = { ArrowLeft: "left", ArrowRight: "right", ArrowUp: "up", ArrowDown: "down", " ": "space", Enter: "enter", Shift: "shift", Escape: "escape", Control: "ctrl" };
  CW.runSim = function (kind, code, setup, test, container, onDone) {
    const K = CW.simKinds[kind];
    if (!K) return onDone && onDone([{ kind: "err", text: "المحاكي غير متوفر: " + kind }]);
    const out = [];
    const say = (t, k = "log") => String(t).split("\n").forEach(l => out.push({ kind: k, text: l }));
    let game;
    try { game = K.build(code, setup || "", say); }
    catch (e) { say(e.message, "err"); return onDone && onDone(out); }
    const DT = 1 / 60;
    const frame = () => {
      try { game.frame(DT); }
      catch (e) { if (!game.crashed) { game.crashed = true; say(e.message, "err"); } }
    };
    try { game.start(); } catch (e) { say(e.message, "err"); game.crashed = true; }
    if (test) {
      const w = game.world;
      const helpers = Object.assign({
        print: (...a) => say(a.map(v => typeof v === "string" ? v : JSON.stringify(v)).join(" ")),
        step: (n = 1) => { for (let i = 0; i < n && !game.crashed; i++) frame(); },
        keyDown: k => w.keyDown(k), keyUp: k => w.keyUp(k),
        press: (k, frames = 1) => { w.keyDown(k); for (let i = 0; i < frames && !game.crashed; i++) frame(); w.keyUp(k); frame(); },
        click: (x, y, frames = 1) => { w.mouseDown(x, y); for (let i = 0; i < frames && !game.crashed; i++) frame(); w.mouseUp(); frame(); },
        round: (v, d = 0) => { const f = Math.pow(10, d); return Math.round(v * f) / f; },
        time: () => Math.round(w.time * 1000) / 1000
      }, game.helpers || {});
      try { new Function(...Object.keys(helpers), test)(...Object.values(helpers)); }
      catch (e) { say(e.message, "err"); }
      return onDone && onDone(out);
    }
    if (!container || typeof document === "undefined") { for (let i = 0; i < (K.previewFrames || 0) && !game.crashed; i++) frame(); return onDone && onDone(out); }
    // المعاينة: حلقة حية ولوحة مفاتيح
    container.innerHTML = "";
    const canvas = document.createElement("canvas");
    canvas.width = game.world.view.w; canvas.height = game.world.view.h;
    canvas.className = "sim-canvas"; canvas.tabIndex = 0; canvas.dir = "ltr";
    const bar = document.createElement("div");
    bar.className = "sim-bar";
    bar.innerHTML = `<span>${K.label || kind}</span><button type="button" class="sim-restart">↺ إعادة</button><span class="sim-hint">انقر على المشهد ثم استخدم الأسهم والمسافة</span>`;
    const log = document.createElement("pre");
    log.className = "sim-log"; log.dir = "ltr";
    container.append(bar, canvas, log);
    // سكربت بلا أي رسوم (أمثلة اللغة): السجل وحده يكفي
    if (!game.world.all().some(e => e.visual)) { canvas.hidden = true; bar.querySelector(".sim-hint").hidden = true; }
    let shown = -1;
    const showLog = () => {
      if (out.length === shown) return;
      shown = out.length;
      log.hidden = !out.length;
      log.innerHTML = "";
      out.slice(-200).forEach(l => { const d = document.createElement("div"); d.textContent = l.text; if (l.kind === "err") d.className = "err"; log.appendChild(d); });
      log.scrollTop = log.scrollHeight;
    };
    // رسوم الدروس (js/game-assets.js) تُحمَّل عند أول معاينة
    const useAssets = () => {
      const images = {};
      Object.entries(CW.gameAssets || {}).forEach(([k, src]) => { const im = new Image(); im.src = src; images[k.replace(/^assets\//, "").replace(/\.png$/, "")] = im; });
      game.world.images = images;
    };
    if (CW.gameAssets) useAssets();
    else {
      CW.loadingAssets = CW.loadingAssets || new Promise(res => {
        const sc = document.createElement("script");
        sc.src = (document.querySelector('script[src*="game-sim.js"]') || { src: "js/game-sim.js" }).src.replace(/game-sim\.js.*$/, "game-assets.js");
        sc.onload = sc.onerror = res;
        document.head.appendChild(sc);
      });
      CW.loadingAssets.then(useAssets);
    }
    canvas.addEventListener("keydown", e => { const k = KEYMAP[e.key] || e.key.toLowerCase(); game.world.keyDown(k); e.preventDefault(); });
    const at = e => { const r = canvas.getBoundingClientRect(); return [(e.clientX - r.left) * canvas.width / r.width, (e.clientY - r.top) * canvas.height / r.height]; };
    canvas.addEventListener("pointerdown", e => { canvas.focus(); game.world.mouseDown(...at(e)); });
    canvas.addEventListener("pointermove", e => game.world.mouseMove(...at(e)));
    window.addEventListener("pointerup", () => game.world.mouseUp());
    canvas.addEventListener("keyup", e => { const k = KEYMAP[e.key] || e.key.toLowerCase(); game.world.keyUp(k); e.preventDefault(); });
    bar.querySelector(".sim-restart").onclick = () => CW.runSim(kind, code, setup, "", container, null);
    const ctx = canvas.getContext("2d");
    let last = null, acc = 0, frames = 0;
    const loop = ts => {
      if (!canvas.isConnected) return;
      if (last !== null) acc += Math.min(0.1, (ts - last) / 1000);
      last = ts;
      while (acc >= DT && !game.crashed && frames < 60 * 600) { frame(); acc -= DT; frames++; }
      game.world.draw(ctx);
      showLog();
      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);
    onDone && onDone(out);
  };
})(typeof window !== "undefined" ? window : globalThis);
