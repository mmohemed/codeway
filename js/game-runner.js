// تشغيل ألعاب Phaser الحقيقية (Phaser 4) في إطار معزول، مع رسوم الدروس (js/game-assets.js)
// في المعاينة تعمل اللعبة بحلقتها العادية ويلعب الطالب بلوحة المفاتيح،
// وفي الفحص تُستبدل الحلقة بخطوات يدوية ثابتة (1/60 ثانية) ومدخلات محاكاة، فالنتائج قابلة للتكرار
(function (root) {
  const CW = root.CW = root.CW || {};
  const loaded = {};
  const load = src => loaded[src] || (loaded[src] = new Promise((res, rej) => {
    const s = document.createElement("script");
    s.src = (document.querySelector('script[src*="game-runner.js"]') || { src: "js/game-runner.js" }).src.replace(/game-runner\.js.*$/, src);
    s.onload = res; s.onerror = () => rej(new Error("تعذّر تحميل " + src));
    document.head.appendChild(s);
  }));

  // ---------- ما يعمل داخل الإطار ----------
  function runtime(CODE, TEST, ASSETS, post) {
    const out = [];
    const say = (t, kind = "log") => String(t).split("\n").forEach(l => out.push({ kind, text: l }));
    const fmt = v => typeof v === "string" ? v : v === undefined ? "undefined" : (() => { try { return JSON.stringify(v); } catch (e) { return String(v); } })();
    console.log = (...a) => say(a.map(fmt).join(" "));
    console.info = console.log;
    console.warn = (...a) => { const t = a.map(fmt).join(" "); if (!/WebGL|GL Driver|swiftshader/i.test(t)) say("⚠️ " + t, "info"); };
    console.error = (...a) => say(a.map(x => x instanceof Error ? `${x.name}: ${x.message}` : fmt(x)).join(" "), "err");
    window.onerror = (m, s, l, c, e) => { say(e ? `${e.name}: ${e.message}` : String(m), "err"); };
    const testing = !!TEST;

    // الرسوم: مسارات assets/... تُحوَّل إلى الصور المضمنة
    // دوال التحميل (image و spritesheet...) تُثبَّت على كل محمّل عبر FileTypesManager، فنغلّفها بعد التثبيت
    const mapUrl = url => {
      if (typeof url !== "string" || /^data:/.test(url)) return url;
      const k = url.replace(/^\.?\//, "");
      if (ASSETS[k]) return ASSETS[k];
      say(`⚠️ الملف ${url} غير موجود. الرسوم المتاحة: ${Object.keys(ASSETS).join(", ")}`, "err");
      return url;
    };
    const FTM = Phaser.Loader.FileTypesManager, origInstall = FTM.install;
    FTM.install = function (loader) {
      origInstall.call(this, loader);
      ["image", "spritesheet"].forEach(fn => {
        const orig = loader[fn];
        if (orig) loader[fn] = function (key, url, ...rest) { return orig.call(this, key, typeof key === "string" ? mapUrl(url) : key, ...rest); };
      });
      loader.audio = function () { return this; };   // لا صوت في المحاكاة (اللعبة تعمل بـ noAudio)
    };

    // في الفحص: لا حلقة رسوم تلقائية، نحن من يتقدم بالإطارات
    if (testing) Phaser.Core.TimeStep.prototype.start = function (cb) { this.callback = cb; this.started = true; this.running = true; };
    const G = Phaser.Game;
    let game = null;
    Phaser.Game = class extends G {
      constructor(cfg = {}) {
        super(Object.assign({}, cfg, { parent: "game", banner: false, audio: { noAudio: true } }));
        game = this;
      }
    };

    try { new Function(CODE)(); }
    catch (e) { say(`${e.name}: ${e.message}`, "err"); post({ done: true, out }); return; }
    if (!game) { say("لم تُنشأ لعبة: تأكد من وجود new Phaser.Game(config)", "err"); post({ done: true, out }); return; }

    const running = () => game.scene && game.scene.scenes.length && game.scene.scenes.some(s => s.sys.settings.status === Phaser.Scenes.RUNNING);
    let t = 0;
    const DT = 1000 / 60;
    const frame = () => { t += DT; game.step(t, DT); };
    const tick = ms => new Promise(r => setTimeout(r, ms));
    const keys = { left: [37, "ArrowLeft"], right: [39, "ArrowRight"], up: [38, "ArrowUp"], down: [40, "ArrowDown"], space: [32, " ", "Space"], enter: [13, "Enter"], shift: [16, "Shift", "ShiftLeft"], esc: [27, "Escape"] };
    const keyInfo = name => { const n = String(name).toLowerCase(); if (keys[n]) return keys[n]; if (/^[a-z0-9]$/.test(n)) return [n.toUpperCase().charCodeAt(0), n, (/\d/.test(n) ? "Digit" : "Key") + n.toUpperCase()]; throw new Error("مفتاح غير معروف: " + name); };
    const keyEvent = (type, name) => { const [keyCode, key, code] = keyInfo(name); const e = new KeyboardEvent(type, { key, code: code || key, bubbles: true }); Object.defineProperty(e, "keyCode", { get: () => keyCode }); Object.defineProperty(e, "which", { get: () => keyCode }); window.dispatchEvent(e); };
    const canvasAt = (type, x, y) => {
      const c = game.canvas, r = c.getBoundingClientRect();
      const cx = r.left + x * r.width / game.scale.width, cy = r.top + y * r.height / game.scale.height;
      c.dispatchEvent(new MouseEvent("mouse" + type, { clientX: cx, clientY: cy, bubbles: true, button: 0, buttons: type === "down" ? 1 : 0 }));
    };

    const helpers = {
      print: (...a) => say(a.map(fmt).join(" ")),
      game: () => game,
      scene: key => key ? game.scene.getScene(key) : game.scene.scenes.find(s => s.sys.settings.status === Phaser.Scenes.RUNNING),
      step: (n = 1) => { for (let i = 0; i < n; i++) frame(); },
      keyDown: name => keyEvent("keydown", name),
      keyUp: name => keyEvent("keyup", name),
      press: (name, frames = 1) => { keyEvent("keydown", name); for (let i = 0; i < frames; i++) frame(); keyEvent("keyup", name); frame(); },
      click: (x, y) => { canvasAt("move", x, y); frame(); canvasAt("down", x, y); frame(); canvasAt("up", x, y); frame(); },
      round: (v, d = 0) => { const f = Math.pow(10, d); return Math.round(v * f) / f; },
      time: () => Math.round(t)
    };

    (async () => {
      // ننتظر تحميل الرسوم وإنشاء المشهد
      for (let i = 0; i < 400 && !running(); i++) { if (testing && game.isBooted && game.renderer) frame(); await tick(testing ? 2 : 10); }
      if (!running()) say("لم يبدأ أي مشهد: هل أضفت scene إلى config؟", "err");
      if (testing && running()) {
        try { await new Function(...Object.keys(helpers), `return (async () => {\n${TEST}\n})();`)(...Object.values(helpers)); }
        catch (e) { say(`${e.name}: ${e.message}`, "err"); }
      }
      post({ done: true, out });
      if (!testing) setInterval(() => { if (out.length) post({ more: out.splice(0) }); }, 500);
    })();
  }

  // ---------- جهة الصفحة ----------
  CW.runGame = function (kind, code, setup, test, container, onDone) {
    if (kind !== "phaser") return CW.runSim(kind, code, setup, test, container, onDone);
    const token = Math.random().toString(36).slice(2);
    let finished = false;
    const frame = document.createElement("iframe");
    frame.setAttribute("sandbox", "allow-scripts");
    frame.className = "preview-frame game-frame";
    const finish = lines => { if (finished) return; finished = true; onDone && onDone(lines); };
    const onMsg = e => {
      if (e.source !== frame.contentWindow || !e.data || e.data.token !== token) return;
      if (e.data.done) finish(e.data.out);
      if (e.data.more && container && container.__log) container.__log(e.data.more);
    };
    window.addEventListener("message", onMsg);
    if (container) container.innerHTML = '<span class="hint">جاري تحميل Phaser...</span>';
    Promise.all([load("vendor/phaser-src.js"), load("game-assets.js")]).then(() => {
      const safe = v => JSON.stringify(v).replace(/<\//g, "<\\/").replace(/<!--/g, "<\\u0021--");
      const scriptSafe = t => t.replace(/<\/script/gi, "<\\/script").replace(/<!--/g, "<\\!--");
      frame.srcdoc = `<!DOCTYPE html><html><head><meta charset="utf-8">
<style>html,body{margin:0;background:#0f1626;overflow:hidden}#game{display:flex;justify-content:center}canvas{max-width:100%;height:auto!important;outline:none}</style>
<script>${scriptSafe(CW.gameLibs.phaser)}<\/script></head><body><div id="game" tabindex="0"></div><script>
(${scriptSafe(runtime.toString())})(${safe([setup, code].filter(Boolean).join("\n"))}, ${safe(test || "")}, ${safe(CW.gameAssets)}, m => parent.postMessage(Object.assign({ token: ${safe(token)} }, m), "*"));
document.addEventListener("pointerdown", () => window.focus());
<\/script></body></html>`;
      if (container) { container.innerHTML = ""; container.appendChild(frame); }
      else { frame.style.cssText = "position:absolute;left:-9999px;width:800px;height:600px"; document.body.appendChild(frame); }
    }, e => finish([{ kind: "err", text: e.message }]));
    setTimeout(() => finish([{ kind: "err", text: "انتهت مهلة التشغيل (30 ثانية)" }]), 30000);
  };

  // أمثلة الشرح: لعبة حية لكل كتلة عند اقترابها من الشاشة
  CW.renderGameDemos = rootEl => {
    const boxes = rootEl.querySelectorAll(".game-preview[data-src]");
    const start = box => { if (!box.dataset.done) { box.dataset.done = "1"; CW.runGame(box.dataset.kind, box.dataset.src, "", "", box, null); } };
    if (!("IntersectionObserver" in window)) return boxes.forEach(start);
    const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { io.unobserve(e.target); start(e.target); } }), { rootMargin: "300px" });
    boxes.forEach(b => io.observe(b));
  };
})(typeof window !== "undefined" ? window : globalThis);
