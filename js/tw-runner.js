// معاينة Tailwind CSS: كود الطالب (HTML) يُعرض في إطار معزول فيه مكتبة Tailwind الرسمية للمتصفح (js/vendor)،
// ثم يعمل فحص مخفي داخل الإطار يقارن الأنماط المحسوبة فعلاً، فيُقبل أي حل يعطي نفس النتيجة البصرية.
(function () {
  let loading = null;
  const loadTw = () => loading || (loading = new Promise((resolve, reject) => {
    if (CW.twSource) return resolve();
    const s = document.createElement("script");
    s.src = (document.querySelector('script[src$="tw-runner.js"]') || { src: "js/tw-runner.js" }).src.replace(/tw-runner\.js.*$/, "") + "vendor/tailwind-src.js";
    s.onload = resolve;
    s.onerror = () => reject(new Error("تعذّر تحميل Tailwind"));
    document.head.append(s);
  }));

  // أدوات الفحص المتاحة داخل ~~~test:
  //   check(label, cond)          يطبع ✓ أو ✗ مع الوصف
  //   css(sel, prop)              القيمة المحسوبة لخاصية
  //   await same(sel, classes, props)   هل يطابق العنصر عنصراً مرجعياً بهذه الأصناف في الخصائص المذكورة؟
  //   await width(px)             يغيّر عرض المعاينة لاختبار التصميم المتجاوب
  //   cols(sel)                   عدد أعمدة الشبكة
  //   await dark(on)              يضيف الصنف dark إلى html أو يزيله
  //   await variant(sel, "hover", classes, props)   يقارن أصناف hover: في العنصر بالأصناف المطلوبة
  //   $(sel) و $$(sel)
  const helpers = `
    const $ = s => document.querySelector(s), $$ = s => [...document.querySelectorAll(s)];
    // مؤقتات عادية بدل requestAnimationFrame، لأن المتصفح يوقف الرسم في الإطارات خارج الشاشة
    const __tick = () => new Promise(r => setTimeout(r, 16));
    async function settle() {
      let last = null, same = 0;
      for (let i = 0; i < 160 && same < 3; i++) {
        await __tick();
        const now = (window.__twStyle && window.__twStyle.textContent.length) || 0;
        same = now && now === last ? same + 1 : 0;
        last = now;
      }
    }
    function check(label, cond) { console.log((cond ? "✓ " : "✗ ") + label); }
    function css(sel, prop) { const el = typeof sel === "string" ? $(sel) : sel; return el ? getComputedStyle(el).getPropertyValue(prop) : null; }
    async function same(sel, classes, props) {
      const el = typeof sel === "string" ? $(sel) : sel;
      if (!el) return false;
      const probe = document.createElement(el.tagName);
      probe.className = classes;
      probe.setAttribute("aria-hidden", "true");
      el.parentNode.insertBefore(probe, el.nextSibling);
      await settle();
      const a = getComputedStyle(el), b = getComputedStyle(probe);
      const ok = props.every(p => a.getPropertyValue(p) === b.getPropertyValue(p));
      probe.remove();
      return ok;
    }
    // متغيرات الحالة مثل hover و focus لا يمكن تفعيلها من JavaScript، فنقارن أصنافها بعد حذف البادئة
    async function variant(sel, v, classes, props) {
      const el = typeof sel === "string" ? $(sel) : sel;
      if (!el) return false;
      const all = [...el.classList];
      const base = all.filter(c => !c.includes(":"));
      const mine = all.filter(c => c.startsWith(v + ":")).map(c => c.slice(v.length + 1));
      if (!mine.length) return false;
      const mk = cls => { const p = document.createElement(el.tagName); p.className = cls.join(" "); p.setAttribute("aria-hidden", "true"); el.parentNode.insertBefore(p, el.nextSibling); return p; };
      const a = mk([...base, ...mine]), b = mk([...base, ...classes.split(" ")]);
      await settle();
      const ca = getComputedStyle(a), cb = getComputedStyle(b);
      const ok = props.every(p => ca.getPropertyValue(p) === cb.getPropertyValue(p));
      a.remove(); b.remove();
      return ok;
    }
    // عدد أعمدة الشبكة كما رسمها المتصفح فعلاً
    function cols(sel) { const v = css(sel, "grid-template-columns"); return !v || v === "none" ? 0 : v.trim().split(/\\s+/).length; }
    function width(px) {
      return new Promise(res => {
        const id = Math.random();
        const on = e => { if (e.data && e.data.resized === id) { removeEventListener("message", on); settle().then(res); } };
        addEventListener("message", on);
        __post({ resize: px, id });
      });
    }
    async function dark(on) { document.documentElement.classList.toggle("dark", on !== false); await settle(); }
  `;

  CW.runTailwind = function (code, test, container, onDone) {
    const token = Math.random().toString(36).slice(2);
    const lines = [];
    let finished = false;
    const frame = document.createElement("iframe");
    frame.setAttribute("sandbox", "allow-scripts");
    frame.className = "preview-frame tw-frame";
    const finish = () => {
      if (finished) return;
      finished = true;
      window.removeEventListener("message", onMsg);
      frame.style.width = "";
      onDone && onDone(lines);
    };
    const onMsg = e => {
      if (e.source !== frame.contentWindow || !e.data || e.data.token !== token) return;
      const d = e.data;
      if (d.height) frame.style.height = Math.min(640, Math.max(48, d.height + 2)) + "px";
      else if (d.resize) {
        frame.style.width = d.resize + "px";
        frame.style.maxWidth = "none";
        setTimeout(() => frame.contentWindow.postMessage({ resized: d.id }, "*"), 30);
      } else if (d.done) finish();
      else lines.push({ kind: d.kind, text: d.text });
    };
    window.addEventListener("message", onMsg);
    container.innerHTML = '<span class="hint">جاري تحميل Tailwind...</span>';
    loadTw().then(() => {
      // أوسمة <style type="text/tailwindcss"> تُنقل إلى الرأس، وبقية الكود هو جسم الصفحة
      const styles = [];
      const body = code.replace(/<style[^>]*type=["']text\/tailwindcss["'][^>]*>[\s\S]*?<\/style>/gi, m => { styles.push(m); return ""; });
      const safe = s => JSON.stringify(s).replace(/<\//g, "<\\/");
      const tw = CW.twSource.replace(/<\/script/gi, "<\\/script");
      frame.srcdoc = `<!DOCTYPE html><html dir="rtl" lang="ar"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<script>${tw}<\/script><script>window.__twStyle = document.head.lastElementChild;<\/script>
${styles.join("\n")}
<script>
  const __T = ${safe(token)};
  const __post = m => parent.postMessage(Object.assign({ token: __T }, m), "*");
  const __fmt = v => typeof v === "string" ? v : JSON.stringify(v);
  console.log = (...a) => __post({ kind: "log", text: a.map(__fmt).join(" ") });
  console.error = (...a) => __post({ kind: "err", text: a.map(__fmt).join(" ") });
  window.onerror = m => { __post({ kind: "err", text: String(m) }); };
  ${helpers}
  const __height = () => __post({ height: Math.ceil(document.body.getBoundingClientRect().height) });
  addEventListener("load", async () => {
    await settle();
    __height();
    new ResizeObserver(__height).observe(document.body);
    try { await (async () => { ${test || ""} })(); }
    catch (e) { console.error(e.name + ": " + e.message); }
    __post({ done: true });
  });
<\/script></head><body>${body}</body></html>`;
      container.innerHTML = "";
      container.appendChild(frame);
    }, e => { lines.push({ kind: "err", text: e.message }); finish(); });
    setTimeout(() => {
      if (!finished) lines.push({ kind: "err", text: "انتهت مهلة المعاينة (12 ثانية)" });
      finish();
    }, 12000);
  };

  // أمثلة الشرح: كل كتلة ```tw لها معاينة حية تحتها
  // تُنشأ المعاينة عند اقترابها من الشاشة فقط، حتى لا تُحمَّل كل الأمثلة دفعة واحدة
  CW.renderTwDemos = root => {
    const boxes = root.querySelectorAll(".tw-preview[data-src]:not(.fw-preview)");
    const start = box => { if (!box.dataset.done) { box.dataset.done = "1"; CW.runTailwind(box.dataset.src, "", box, null); } };
    if (!("IntersectionObserver" in window)) return boxes.forEach(start);
    const io = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) { io.unobserve(e.target); start(e.target); } }), { rootMargin: "400px" });
    boxes.forEach(b => io.observe(b));
  };
})();
