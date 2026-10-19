// تشغيل كود JavaScript في Web Worker معزول وإرجاع مخرجات console
// الـ Worker يعمل في خيط منفصل، فلا تتجمد الصفحة ويمكن إيقافه عند الحلقات اللانهائية
window.CW = window.CW || {};

CW.runJS = function (code, onDone) {
  const workerSrc = `
    const fmt = v => typeof v === "string" ? v : (() => { try { return JSON.stringify(v); } catch (e) { return String(v); } })();
    const send = (kind, args) => postMessage({ kind, text: args.map(fmt).join(" ") });
    console.log = console.info = console.warn = (...a) => send("log", a);
    console.error = (...a) => send("err", a);
    onmessage = e => {
      try { (0, eval)(e.data); }
      catch (err) { send("err", [err.name + ": " + err.message]); }
      postMessage({ done: true });
    };`;
  const lines = [];
  let worker, timer, finished = false;
  const finish = () => {
    if (finished) return;
    finished = true;
    clearTimeout(timer);
    if (worker) worker.terminate();
    onDone(lines);
  };
  try {
    worker = new Worker(URL.createObjectURL(new Blob([workerSrc], { type: "text/javascript" })));
  } catch (e) {
    lines.push({ kind: "err", text: "المتصفح لا يدعم تشغيل الكود هنا" });
    return finish();
  }
  worker.onmessage = e => { e.data.done ? finish() : lines.push(e.data); };
  worker.onerror = e => { lines.push({ kind: "err", text: e.message }); finish(); };
  timer = setTimeout(() => {
    lines.push({ kind: "err", text: "انتهت مهلة التشغيل (3 ثوانٍ). هل توجد حلقة لا تنتهي؟" });
    finish();
  }, 3000);
  worker.postMessage(code);
};

// ربط محرر (textarea + زر + منطقة مخرجات)
CW.bindEditor = function (textarea, button, output) {
  const run = () => {
    output.innerHTML = '<span class="hint">جاري التشغيل...</span>';
    CW.runJS(textarea.value, lines => {
      output.innerHTML = lines.length
        ? lines.map(l => `<div class="${l.kind === "err" ? "err" : ""}">${CW.esc(l.text)}</div>`).join("")
        : '<span class="hint">لا توجد مخرجات. استخدم console.log لطباعة النتائج.</span>';
    });
  };
  button.addEventListener("click", run);
  textarea.addEventListener("keydown", e => {
    if (e.key === "Tab") {
      e.preventDefault();
      textarea.setRangeText("  ", textarea.selectionStart, textarea.selectionEnd, "end");
    }
    if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) run();
  });
};
