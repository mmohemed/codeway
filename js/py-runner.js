// تشغيل Python الحقيقي في المتصفح عبر Pyodide (CPython مترجم إلى WebAssembly) داخل Web Worker
// مع NumPy و Pandas و Matplotlib و SciPy، وعرض يشبه Jupyter: قيمة آخر سطر والجداول والرسوم
// Pyodide يُحمَّل من jsDelivr عند أول تشغيل (يحتاج إنترنت)، ويمكن تغيير مصدره بـ window.CW_PYODIDE_BASE
(function (root) {
  const CW = root.CW = root.CW || {};
  CW.pyodideVersion = "0.29.5";

  // ---------- الغلاف (Python): يُستخدم في المتصفح وفي أداة التحقق tools/verify-py.js ----------
  CW.pyHarness = String.raw`
import sys, ast, io, base64, traceback, json, os

_cw_events = []

class _CWOut(io.TextIOBase):
    def __init__(self, kind):
        self.kind, self.buf = kind, ""
    def write(self, s):
        self.buf += s
        while "\n" in self.buf:
            line, self.buf = self.buf.split("\n", 1)
            _cw_events.append({"kind": self.kind, "text": line})
        return len(s)
    def flush(self):
        if self.buf:
            _cw_events.append({"kind": self.kind, "text": self.buf})
            self.buf = ""

_cw_stdout, _cw_stderr = _CWOut("log"), _CWOut("info")
_cw_counter = [0]

def _cw_flush():
    _cw_stdout.flush(); _cw_stderr.flush()

def display(*objs):
    for v in objs:
        _cw_display(v)

def _cw_display(v, prefix=""):
    _cw_flush()
    mod = type(v).__module__ or ""
    if mod.startswith("matplotlib"):
        return
    if mod.startswith("plotly"):
        _cw_events.append({"kind": "plotly", "json": v.to_json(), "text": "[Plotly: رسم تفاعلي]"})
        return
    text = prefix + repr(v)
    html = None
    if mod.startswith("pandas") and hasattr(v, "_repr_html_"):
        try: html = v._repr_html_()
        except Exception: html = None
    if html:
        _cw_events.append({"kind": "html", "html": html, "text": text})
    else:
        for line in text.split("\n"):
            _cw_events.append({"kind": "log", "text": line})

def _cw_exec(src, ns, show_last, filename):
    tree = ast.parse(src, filename)
    last = None
    if show_last and tree.body and isinstance(tree.body[-1], ast.Expr):
        last = ast.Expression(tree.body.pop().value)
    exec(compile(tree, filename, "exec"), ns)
    if last is not None:
        v = eval(compile(last, filename, "eval"), ns)
        if v is not None:
            _cw_display(v)

def _cw_error(e, filename):
    _cw_flush()
    tb = traceback.extract_tb(e.__traceback__)
    line = None
    for fr in tb:
        if fr.filename == filename:
            line = fr.lineno
    if isinstance(e, SyntaxError) and e.filename == filename:
        line = e.lineno
    msg = traceback.format_exception_only(type(e), e)[-1].strip()
    _cw_events.append({"kind": "err", "text": msg + (f" (line {line})" if line else "")})

_cw_figs = []

def _cw_figures():
    """يعرض الرسوم المفتوحة صوراً ثم يغلقها (مثل Jupyter)، ويحتفظ بها في _cw_figs ليفحصها التمرين"""
    if "matplotlib.pyplot" not in sys.modules:
        return
    _cw_flush()
    plt = sys.modules["matplotlib.pyplot"]
    for n in plt.get_fignums():
        fig = plt.figure(n)
        buf = io.BytesIO()
        fig.savefig(buf, format="png", dpi=80, bbox_inches="tight")
        _cw_events.append({"kind": "img", "src": "data:image/png;base64," + base64.b64encode(buf.getvalue()).decode(), "text": "[شكل]"})
        _cw_figs.append(fig)
    plt.close("all")

def cw_figures():
    """كل رسوم Matplotlib في التشغيل: المعروضة بـ plt.show() والمفتوحة"""
    plt = sys.modules.get("matplotlib.pyplot")
    return _cw_figs + ([plt.figure(n) for n in plt.get_fignums()] if plt else [])

def _cw_patch():
    plt = sys.modules.get("matplotlib.pyplot")
    if plt is not None and getattr(plt.show, "__name__", "") != "_cw_show":
        def _cw_show(*a, **k):
            _cw_figures()
        plt.show = _cw_show
    bd = sys.modules.get("plotly.basedatatypes")
    if bd is not None and getattr(bd.BaseFigure.show, "__name__", "") != "_cw_pshow":
        def _cw_pshow(self, *a, **k):
            _cw_display(self)
        bd.BaseFigure.show = _cw_pshow

def _cw_prepare(src=""):
    os.environ["MPLBACKEND"] = "agg"
    if "pandas" in src and "pandas" not in sys.modules:
        import pandas
    if ("matplotlib" in src or "seaborn" in src) and "matplotlib.pyplot" not in sys.modules:
        import matplotlib.pyplot
    if "plotly" in src and "plotly.basedatatypes" not in sys.modules:
        import plotly.basedatatypes
    if "matplotlib.pyplot" in sys.modules:
        # كل تشغيل يبدأ بالنمط الافتراضي، فلا يتسرب sns.set_theme أو plt.style.use من تشغيل سابق
        import matplotlib
        matplotlib.style.use("default")
    _cw_patch()
    if "pandas" in sys.modules:
        pd = sys.modules["pandas"]
        pd.set_option("display.width", 100)
        pd.set_option("display.max_columns", 20)
    if "numpy" in sys.modules:
        sys.modules["numpy"].set_printoptions(linewidth=100)

def _cw_md_html(md):
    """محوّل Markdown مبسط لخلايا الدفتر: عناوين وقوائم وغامق ومائل وكود"""
    import html as _h, re as _re
    def inline(t):
        t = _h.escape(t)
        bt = chr(96)
        t = _re.sub(bt + "([^" + bt + "]+)" + bt, r"<code>\1</code>", t)
        t = _re.sub(r"\*\*([^*]+)\*\*", r"<b>\1</b>", t)
        t = _re.sub(r"\*([^*]+)\*", r"<i>\1</i>", t)
        return t
    out, lst = [], None
    for line in md.split("\n"):
        m = _re.match(r"^(#{1,6})\s+(.*)$", line)
        li = _re.match(r"^\s*(?:[-*]|\d+\.)\s+(.*)$", line)
        if lst and not li:
            out.append(f"</{lst}>"); lst = None
        if m:
            n = len(m.group(1)); out.append(f"<h{n}>{inline(m.group(2))}</h{n}>")
        elif li:
            tag = "ol" if _re.match(r"^\s*\d+\.", line) else "ul"
            if not lst:
                lst = tag; out.append(f"<{tag}>")
            out.append(f"<li>{inline(li.group(1))}</li>")
        elif line.strip():
            out.append(f"<p>{inline(line)}</p>")
    if lst:
        out.append(f"</{lst}>")
    return "".join(out)

def _cw_notebook(code, ns_extra):
    """وضع الدفتر: خلايا مفصولة بـ # %% تُنفَّذ بـ IPython الحقيقي (الأوامر السحرية و Out[n])"""
    import re as _re
    from IPython.core.interactiveshell import InteractiveShell
    sh = InteractiveShell.instance()
    sh.reset(new_session=True)
    sh.execution_count = 1
    sh.colors = "NoColor"
    sh.user_ns.update(ns_extra)
    sh.user_ns_hidden.update({k: v for k, v in ns_extra.items()})   # لا تظهر في %who
    errors = []
    def tb(*a, **k):
        et, ev, _ = sys.exc_info()
        if ev is not None:
            errors.append(ev)
    sh.showtraceback = tb
    sh.showsyntaxerror = lambda *a, **k: tb()
    parts = _re.split(r"^# %%(.*)$", code, flags=_re.M)
    cells = [("code", parts[0])] + [("markdown" if "[markdown]" in parts[i] else "code", parts[i + 1]) for i in range(1, len(parts), 2)]
    def _md(src):
        return "\n".join(l[2:] if l.startswith("# ") else l.lstrip("#") for l in src.strip().split("\n"))
    # خلايا الدفتر متاحة للفحص: [(النوع، المحتوى)] ونص Markdown دون علامات التعليق
    sh.user_ns["cw_cells"] = [(k, _md(c) if k == "markdown" else c.strip()) for k, c in cells if c.strip()]
    sh.user_ns_hidden["cw_cells"] = sh.user_ns["cw_cells"]
    for kind, src in cells:
        if not src.strip():
            continue
        if kind == "markdown":
            md = _md(src)
            _cw_flush()
            _cw_events.append({"kind": "html", "html": '<div class="nb-md" dir="auto">' + _cw_md_html(md) + "</div>", "text": md})
            continue
        n = sh.execution_count
        _cw_flush()
        _cw_events.append({"kind": "cmd", "text": f"In [{n}]:"})
        errors.clear()
        sh.run_cell(src.strip("\n"), store_history=True)
        _cw_flush()
        for e in errors:
            msg = traceback.format_exception_only(type(e), e)[-1].strip()
            _cw_events.append({"kind": "err", "text": f"{msg} (In [{n}])"})
        if errors:
            break
    return sh.user_ns

def _cw_run(code, setup="", test="", notebook=False):
    """يشغّل كود الطالب ثم الفحص في نفس فضاء الأسماء، ويُرجع (المعروض، المصحَّح)"""
    global _cw_events
    ns = {"__name__": "__main__", "display": display, "cw_figures": cw_figures}
    _cw_figs.clear()
    old = sys.stdout, sys.stderr
    sys.stdout, sys.stderr = _cw_stdout, _cw_stderr
    shown, graded = [], None
    try:
        _cw_prepare("\n".join([setup, code, test]))
        _cw_events = []
        if setup:
            try:
                exec(compile(setup, "<setup>", "exec"), ns)
                ns.pop("__builtins__", None)
            except BaseException as e:
                _cw_error(e, "<setup>")
            _cw_flush()
            _cw_events = [x for x in _cw_events if x["kind"] == "err"]
        _cw_prepare()
        if notebook:
            ns = _cw_notebook(code, ns)
        else:
            try:
                _cw_exec(code, ns, True, "<cell>")
            except BaseException as e:
                _cw_error(e, "<cell>")
        _cw_flush()
        if test:
            shown, _cw_events = _cw_events, []
            try:
                _cw_exec(test, ns, False, "<test>")
            except BaseException as e:
                _cw_error(e, "<test>")
            _cw_flush()
            graded = [x for x in _cw_events if x["kind"] != "img"] + [x for x in shown if x["kind"] == "err"]
            _cw_events = []
        _cw_figures()
        _cw_flush()
        shown = (shown if test else []) + _cw_events
    finally:
        sys.stdout, sys.stderr = old
        _cw_events = []
    return json.dumps({"shown": shown, "graded": graded}, ensure_ascii=False)
`;

  // الحزم التي ليست ضمن توزيعة Pyodide تُثبَّت من PyPI بـ micropip
  // (مثبّتة الإصدار لتبقى المخرجات مطابقة لما تحقّقنا منه)
  CW.pyExtraPackages = { seaborn: "seaborn==0.13.2", plotly: "plotly==7.1.0", arabic_reshaper: "arabic-reshaper==3.0.1", bidi: "python-bidi==0.4.2" };
  // حزم تحتاجها Pandas دون أن تُستورد صراحةً في الكود
  CW.pyImplicitPackages = [[/\b(read_excel|to_excel|ExcelWriter)\b/, "openpyxl"]];
  CW.pyNeeded = (imports, code) => [...new Set([...imports.filter(m => CW.pyExtraPackages[m]).map(m => CW.pyExtraPackages[m]),
    ...CW.pyImplicitPackages.filter(([re]) => re.test(code)).map(([, pkg]) => pkg)])];

  if (typeof window === "undefined") return;

  // ---------- العامل (Worker) ----------
  const workerSrc = base => `
importScripts(${JSON.stringify(base)} + "pyodide.js");
let ready = null;
const needed = ${CW.pyNeeded.toString().replace(/CW\./g, "")};
const pyExtraPackages = ${JSON.stringify(CW.pyExtraPackages)};
const pyImplicitPackages = [${CW.pyImplicitPackages.map(([re, p]) => `[${re}, ${JSON.stringify(p)}]`).join(", ")}];
const installed = new Set();
async function boot() {
  const py = await loadPyodide({ indexURL: ${JSON.stringify(base)} });
  return py;
}
self.onmessage = async ({ data }) => {
  const { id, code, setup, test, harness, notebook } = data;
  try {
    if (!ready) ready = boot();
    const py = await ready;
    if (!py.__cwHarness) { py.runPython(harness); py.__cwHarness = true; }
    // نبحث عن الاستيرادات خلية خلية: الأوامر السحرية (%timeit و !pip) وخلايا %% ليست Python صالحة
    const parts = [setup, test, ...code.split(/^# %%.*$/m)].filter(p => p && !/^[ \\t]*%%/m.test(p)).map(p => p.replace(/^[ \\t]*[%!].*$/gm, ""));
    const all = parts.join("\\n");
    postMessage({ id, status: "packages" });
    for (const part of parts) { try { await py.loadPackagesFromImports(part); } catch (e) {} }
    if (notebook) await py.loadPackage("ipython");
    const imports = [];
    for (const part of parts) { try { imports.push(...py.pyimport("pyodide.code").find_imports(part).toJs()); } catch (e) {} }
    // Plotly Express يحتاج Pandas دون أن يستوردها الكود
    if (imports.includes("plotly")) await py.loadPackage("pandas");
    const need = needed(imports, all).filter(p => !installed.has(p));
    if (need.length) {
      await py.loadPackage("micropip");
      const micropip = py.pyimport("micropip");
      for (const p of need) { await micropip.install(p); installed.add(p); }
    }
    postMessage({ id, status: "running" });
    const run = py.globals.get("_cw_run");
    const res = JSON.parse(run(code, setup || "", test || "", !!notebook));
    run.destroy();
    postMessage({ id, result: res });
  } catch (e) {
    postMessage({ id, result: { shown: [{ kind: "err", text: String(e && e.message || e).split("\\n").filter(Boolean).slice(-1)[0] }], graded: null } });
  }
};`;

  let worker = null, seq = 0;
  const pending = new Map();
  const base = () => root.CW_PYODIDE_BASE || `https://cdn.jsdelivr.net/pyodide/v${CW.pyodideVersion}/full/`;
  function getWorker() {
    if (worker) return worker;
    const url = URL.createObjectURL(new Blob([workerSrc(base())], { type: "text/javascript" }));
    worker = new Worker(url);
    worker.onmessage = ({ data }) => {
      const p = pending.get(data.id);
      if (!p) return;
      if (data.status) return p.onStatus && p.onStatus(data.status);
      pending.delete(data.id);
      clearTimeout(p.timer);
      p.resolve(data.result);
    };
    worker.onerror = e => {
      const msg = e.message || "تعذّر تحميل Python. تأكد من اتصالك بالإنترنت.";
      pending.forEach(p => p.resolve({ shown: [{ kind: "err", text: msg }], graded: null }));
      pending.clear();
      worker = null;
    };
    return worker;
  }

  // يُرجع { shown, graded }: graded فقط عند وجود فحص (test)
  CW.pyExec = function (code, setup, test, onStatus, notebook) {
    return new Promise(resolve => {
      const id = ++seq, w = getWorker();
      const p = { resolve, onStatus: s => {
        if (s === "running") p.timer = setTimeout(() => {
          // حلقة لا تنتهي: نوقف العامل ونبدأ عاملاً جديداً في التشغيل التالي
          w.terminate(); if (worker === w) worker = null;
          pending.delete(id);
          resolve({ shown: [{ kind: "err", text: "TimeoutError: استغرق التشغيل أكثر من 30 ثانية (هل توجد حلقة لا تنتهي؟)" }], graded: null });
        }, 30000);
        onStatus && onStatus(s);
      } };
      pending.set(id, p);
      w.postMessage({ id, code, setup: setup || "", test: test || "", harness: CW.pyHarness, notebook: !!notebook });
    });
  };

  const statusText = { packages: "جارٍ تحميل Python والمكتبات (أول مرة فقط، قد يستغرق ثوانيَ)...", running: "جاري التشغيل..." };
  CW.runPython = function (code, setup, test, onDone, out, notebook) {
    CW.pyExec(code, setup, test, s => { if (out) out.innerHTML = `<span class="hint">${statusText[s] || ""}</span>`; }, notebook)
      .then(r => onDone(r.shown, r.graded || undefined));
  };

  // ---------- عرض الجداول والرسوم ----------
  let plotlyLoading = null;
  const loadPlotly = () => plotlyLoading || (plotlyLoading = new Promise((res, rej) => {
    const s = document.createElement("script");
    s.src = "https://cdn.jsdelivr.net/npm/plotly.js-dist-min@4.1.1/plotly.min.js";
    s.onload = () => res(root.Plotly); s.onerror = rej;
    document.head.appendChild(s);
  }));
  CW.renderRich = function (el, line) {
    if (line.kind === "html") {
      const d = document.createElement("div");
      d.className = "py-html table-wrap"; d.dir = "ltr"; d.innerHTML = line.html;
      el.appendChild(d);
    } else if (line.kind === "img") {
      const img = document.createElement("img");
      img.className = "py-fig"; img.src = line.src; img.alt = "شكل";
      el.appendChild(img);
    } else if (line.kind === "plotly") {
      const d = document.createElement("div");
      d.className = "py-plotly"; d.dir = "ltr";
      el.appendChild(d);
      loadPlotly().then(P => { const f = JSON.parse(line.json); P.newPlot(d, f.data, Object.assign({ autosize: true }, f.layout), { responsive: true, displaylogo: false }); })
        .catch(() => { d.textContent = "تعذّر تحميل Plotly (يحتاج اتصالاً بالإنترنت)"; });
    }
  };

  // أزرار «جرّب الكود» على أمثلة الدروس
  CW.renderPyDemos = function (rootEl, setup, notebook) {
    rootEl.querySelectorAll(".py-run[data-src]").forEach(block => {
      const btn = document.createElement("button");
      btn.className = "btn btn-sm btn-dark py-run-btn";
      btn.textContent = "▶ شغّل المثال";
      block.appendChild(btn);
      btn.onclick = () => {
        let out = block.nextElementSibling;
        if (!out || !out.classList.contains("py-live")) {
          out = document.createElement("pre");
          out.className = "editor-out py-live";
          block.after(out);
        }
        out.innerHTML = '<span class="hint">جاري التشغيل...</span>';
        CW.runPython(block.dataset.src, setup || "", "", lines => CW.renderOutput(out, lines), out, notebook);
      };
    });
  };
})(typeof window !== "undefined" ? window : globalThis);
