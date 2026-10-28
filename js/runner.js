// تشغيل كود الطالب وإرجاع مخرجات console
// - كود JavaScript العادي: Web Worker في خيط منفصل (لا تتجمد الصفحة ويمكن إيقافه)
// - كود يتعامل مع DOM: إطار iframe معزول ظاهر للطالب
window.CW = window.CW || {};

// شيفرة مشتركة تُحقن قبل كود الطالب: تلتقط console وتنتظر انتهاء المؤقتات والوعود
// قبل إعلان انتهاء التشغيل، حتى تظهر مخرجات setTimeout و Promise
CW.runnerShim = `
  const __fmt = v => {
    if (typeof v === "string") return v;
    if (v instanceof Error) return v.name + ": " + v.message;
    if (v === undefined) return "undefined";
    if (typeof v === "number" || typeof v === "boolean" || typeof v === "bigint") return String(v);
    if (typeof v === "function") return "[Function: " + (v.name || "anonymous") + "]";
    if (v instanceof Map) return "Map(" + v.size + ") " + JSON.stringify([...v]);
    if (v instanceof Set) return "Set(" + v.size + ") " + JSON.stringify([...v]);
    try { return JSON.stringify(v); } catch (e) { return String(v); }
  };
  const __send = (kind, args) => __post({ kind, text: args.map(__fmt).join(" ") });
  console.log = console.info = console.warn = (...a) => __send("log", a);
  console.error = (...a) => __send("err", a);
  let __pending = 0, __started = false;
  const __timers = new Set();
  const __st = setTimeout, __ct = clearTimeout, __si = setInterval, __ci = clearInterval;
  const __check = () => { if (__started && __pending === 0) __st(() => { if (__pending === 0) __post({ done: true }); }, 20); };
  self.setTimeout = (fn, ms, ...a) => {
    __pending++;
    const id = __st(() => { __timers.delete(id); __pending--; try { typeof fn === "function" ? fn(...a) : 0; } catch (e) { __send("err", [e]); } __check(); }, ms);
    __timers.add(id);
    return id;
  };
  self.clearTimeout = id => { if (__timers.delete(id)) { __pending--; __check(); } __ct(id); };
  self.setInterval = (fn, ms, ...a) => {
    __pending++;
    const id = __si(() => { try { fn(...a); } catch (e) { __send("err", [e]); } }, ms);
    __timers.add(id);
    return id;
  };
  self.clearInterval = id => { if (__timers.delete(id)) { __pending--; __check(); } __ci(id); };
  self.addEventListener("unhandledrejection", e => { __send("err", ["Uncaught (in promise) " + __fmt(e.reason)]); });
  const __run = code => {
    try { (0, eval)(code); } catch (e) { __send("err", [e.name + ": " + e.message]); }
    __started = true;
    __check();
  };
`;

CW.runJS = function (code, onDone) {
  const workerSrc = `const __post = m => postMessage(m);\n${CW.runnerShim}\nonmessage = e => __run(e.data);`;
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
    lines.push({ kind: "err", text: "انتهت مهلة التشغيل (5 ثوانٍ). هل توجد حلقة لا تنتهي أو مؤقت لم يُلغَ؟" });
    finish();
  }, 5000);
  worker.postMessage(code);
};

// تشغيل كود يتعامل مع DOM داخل إطار معزول ظاهر (الـ Worker لا يملك DOM)
// ملاحظة: الحلقة اللانهائية هنا قد تجمّد الصفحة، لذلك نستخدمه لدروس DOM فقط
CW.runDOM = function (code, pageHtml, container, onDone) {
  const token = Math.random().toString(36).slice(2);
  const lines = [];
  let finished = false;
  container.innerHTML = "";
  const frame = document.createElement("iframe");
  frame.setAttribute("sandbox", "allow-scripts allow-forms");
  frame.className = "preview-frame";
  const finish = () => {
    if (finished) return;
    finished = true;
    window.removeEventListener("message", onMsg);
    onDone(lines);
  };
  const onMsg = e => {
    if (e.source !== frame.contentWindow || !e.data || e.data.token !== token) return;
    e.data.done ? finish() : lines.push({ kind: e.data.kind, text: e.data.text });
  };
  window.addEventListener("message", onMsg);
  const safe = s => JSON.stringify(s).replace(/<\//g, "<\\/");
  frame.srcdoc = `<!DOCTYPE html><html dir="rtl" lang="ar"><head><meta charset="utf-8"><style>
      body{font-family:system-ui,sans-serif;padding:12px;margin:0;color:#1a2233;line-height:1.6}
      button{padding:6px 14px;cursor:pointer;font:inherit} .hidden{display:none} .active{color:#1d4ed8;font-weight:bold}
    </style><script>
    const __T = ${safe(token)};
    const __post = m => parent.postMessage(Object.assign({ token: __T }, m), "*");
    ${CW.runnerShim}
    window.onerror = m => { __send("err", [String(m)]); };
    // الإطار المعزول يمنع localStorage، فنوفر بديلاً في الذاكرة يحاكيه
    try { localStorage.getItem("x"); } catch (e) {
      const mem = {};
      Object.defineProperty(window, "localStorage", { configurable: true, value: {
        getItem: k => (k in mem ? mem[k] : null), setItem: (k, v) => { mem[k] = String(v); },
        removeItem: k => { delete mem[k]; }, clear: () => { for (const k in mem) delete mem[k]; },
        get length() { return Object.keys(mem).length; }
      }});
    }
    // يُشغَّل الكود بعد بناء الصفحة، ومن الرأس حتى لا يظهر وسم script ضمن عناصر body
    document.addEventListener("DOMContentLoaded", () => __run(${safe(code)}));
  <\/script></head><body>${pageHtml}</body></html>`;
  container.appendChild(frame);
  setTimeout(() => {
    if (!finished) lines.push({ kind: "err", text: "انتهت مهلة التشغيل (5 ثوانٍ)" });
    finish();
  }, 5000);
};

// ربط محرر بسيط (textarea + زر + منطقة مخرجات) كما في الصفحة الرئيسية
// نتائج SQL تُعرض كجداول، وبقية المخرجات كأسطر نصية
const renderTable = t => `<table class="out-table"><thead><tr>${t.columns.map(c => `<th>${CW.esc(c)}</th>`).join("")}</tr></thead><tbody>${
  t.rows.length ? t.rows.map(r => `<tr>${r.map(v => `<td class="${v === null ? "null" : ""}">${CW.esc(v === null ? "NULL" : v)}</td>`).join("")}</tr>`).join("")
  : `<tr><td colspan="${t.columns.length}" class="null">(لا توجد صفوف)</td></tr>`}</tbody></table>`;

// html و img و plotly مخرجات غنية من Python (جداول Pandas والرسوم) تُعرض بـ CW.renderRich
const RICH = ["html", "img", "plotly"];
CW.renderOutput = (output, lines) => {
  output.innerHTML = lines.length
    ? lines.map((l, i) => l.kind === "table" ? renderTable(l.table)
      : RICH.includes(l.kind) ? `<div data-rich="${i}"></div>`
      : `<div class="${({ err: "err", info: "hint", cmd: "cmd", sep: "sep" })[l.kind] || ""}">${CW.esc(l.text)}</div>`).join("")
    : '<span class="hint">لا توجد مخرجات. استخدم console.log لطباعة النتائج.</span>';
  output.querySelectorAll("[data-rich]").forEach(el => CW.renderRich(el, lines[+el.dataset.rich]));
};

CW.editorKeys = (textarea, run) => {
  textarea.addEventListener("keydown", e => {
    if (e.key === "Tab") {
      e.preventDefault();
      textarea.setRangeText("  ", textarea.selectionStart, textarea.selectionEnd, "end");
    }
    if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) { e.preventDefault(); run(); }
  });
};

CW.bindEditor = function (textarea, button, output) {
  const run = () => {
    output.innerHTML = '<span class="hint">جاري التشغيل...</span>';
    CW.runJS(textarea.value, lines => CW.renderOutput(output, lines));
  };
  button.addEventListener("click", run);
  CW.editorKeys(textarea, run);
};
