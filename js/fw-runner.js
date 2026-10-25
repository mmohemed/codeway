// مشغّل أطر الواجهات (Vue و Angular): ملفات الطالب تُترجم في الصفحة بالمترجمات الرسمية
// (مترجم ملفات .vue من Vue، و TypeScript مع تحويل Angular لمدخلات الإشارات)، ثم يعمل الإطار الحقيقي
// في إطار معاينة معزول، مع واجهة برمجية وهمية على https://api.codeway.dev و /api،
// وفحص مخفي (~~~test) ينقر ويكتب ويتنقل ويطبع النتائج.
(function (root) {
  const CW = root.CW = root.CW || {};
  const base = () => ((document.querySelector('script[src$="fw-runner.js"]') || { src: "js/fw-runner.js" }).src.replace(/fw-runner\.js.*$/, ""));
  const loaded = {};
  const load = file => loaded[file] || (loaded[file] = new Promise((resolve, reject) => {
    const s = document.createElement("script");
    s.src = base() + file;
    s.onload = resolve;
    s.onerror = () => reject(new Error("تعذّر تحميل " + file));
    document.head.append(s);
  }));

  // ---------- تقسيم الملفات: // file: أو <!-- file: --> ----------
  CW.fwFiles = code => {
    const files = {};
    let cur = null;
    code.split("\n").forEach(line => {
      const m = line.match(/^\s*(?:\/\/|<!--|\/\*)\s*file:\s*(\S+?)\s*(?:-->|\*\/)?\s*$/);
      if (m) { cur = m[1].replace(/^\.\//, ""); files[cur] = []; }
      else if (cur) files[cur].push(line);
    });
    Object.keys(files).forEach(f => { files[f] = files[f].join("\n").replace(/\s+$/, "") + "\n"; });
    return files;
  };
  const hash = s => { let h = 5381; for (let i = 0; i < s.length; i++) h = (h * 33 + s.charCodeAt(i)) >>> 0; return h.toString(16).slice(0, 8); };
  const dirOf = p => p.split("/").slice(0, -1).join("/");
  const join = (dir, rel) => { const parts = dir ? dir.split("/") : []; rel.split("/").forEach(s => { if (s === "..") parts.pop(); else if (s !== ".") parts.push(s); }); return parts.join("/"); };

  // ---------- ترجمة ملف .vue ----------
  function compileVue(path, src) {
    const S = root.VueSFC;
    const { descriptor, errors } = S.parse(src, { filename: path });
    if (errors.length) throw new Error(`${path}: ${errors[0].message}`);
    const id = hash(path);
    const scoped = descriptor.styles.some(s => s.scoped);
    let code, lang = "js";
    if (descriptor.script || descriptor.scriptSetup) {
      const s = S.compileScript(descriptor, { id, inlineTemplate: !!descriptor.scriptSetup, isProd: false, templateOptions: { compilerOptions: { scopeId: scoped ? `data-v-${id}` : undefined } } });
      code = s.content;
      lang = (descriptor.scriptSetup || descriptor.script).lang || "js";
    } else code = "export default {}";
    code = code.replace(/export\s+default\s+/, "const __sfc__ = ");
    if (!descriptor.scriptSetup && descriptor.template) {
      const t = S.compileTemplate({ source: descriptor.template.content, filename: path, id, scoped, compilerOptions: { scopeId: scoped ? `data-v-${id}` : undefined } });
      if (t.errors.length) throw new Error(`${path}: ${t.errors[0].message || t.errors[0]}`);
      code += "\n" + t.code.replace(/export function render/, "function render") + "\n__sfc__.render = render;";
    }
    if (scoped) code += `\n__sfc__.__scopeId = "data-v-${id}";`;
    code += `\n__sfc__.__file = ${JSON.stringify(path)};\nexport default __sfc__;`;
    const css = descriptor.styles.map(st => S.compileStyle({ source: st.content, filename: path, id: `data-v-${id}`, scoped: st.scoped }).code).join("\n");
    return { code, css, lang };
  }

  // ---------- تحويل Angular: مدخلات الإشارات وقوالب الملفات ----------
  // المترجم وقت التشغيل (JIT) لا يرى input() و output() و model() و viewChild()،
  // فنضيف لها المزخرفات المكافئة كما تفعل أداة Angular CLI
  function angularTransform(ts, path, src, files) {
    const sf = ts.createSourceFile(path, src, ts.ScriptTarget.Latest, true);
    const edits = [];
    const str = t => (/^['"`]/.test(t) ? t : null);
    const aliasOf = (arg, name) => {
      if (arg && ts.isObjectLiteralExpression(arg)) {
        const p = arg.properties.find(x => x.name && x.name.getText(sf) === "alias");
        if (p && str(p.initializer.getText(sf))) return p.initializer.getText(sf);
      }
      return JSON.stringify(name);
    };
    const visit = node => {
      const decos = ts.canHaveDecorators && ts.canHaveDecorators(node) ? (ts.getDecorators(node) || []) : [];
      if (ts.isClassDeclaration(node) && decos.some(d => /^(Component|Directive)\b/.test(d.expression.getText(sf)))) {
        // templateUrl و styleUrl(s) تصبح template و styles
        decos.forEach(d => {
          const call = d.expression;
          if (!ts.isCallExpression(call) || !call.arguments[0] || !ts.isObjectLiteralExpression(call.arguments[0])) return;
          call.arguments[0].properties.forEach(p => {
            const key = p.name && p.name.getText(sf);
            const read = rel => { const f = join(dirOf(path), rel.replace(/^['"`]|['"`]$/g, "")); if (files[f] === undefined) throw new Error(`${path}: Could not find ${f}`); return files[f]; };
            if (key === "templateUrl") edits.push([p.getStart(sf), p.getEnd(), `template: ${JSON.stringify(read(p.initializer.getText(sf)))}`]);
            if (key === "styleUrl") edits.push([p.getStart(sf), p.getEnd(), `styles: [${JSON.stringify(read(p.initializer.getText(sf)))}]`]);
            if (key === "styleUrls" && ts.isArrayLiteralExpression(p.initializer)) edits.push([p.getStart(sf), p.getEnd(), `styles: [${p.initializer.elements.map(e => JSON.stringify(read(e.getText(sf)))).join(", ")}]`]);
          });
        });
        node.members.forEach(m => {
          if (!ts.isPropertyDeclaration(m) || !m.initializer || !ts.isCallExpression(m.initializer)) return;
          const callee = m.initializer.expression.getText(sf).replace(/<.*$/s, "");
          const name = m.name.getText(sf), a = m.initializer.arguments;
          let deco = "";
          if (callee === "input") deco = `@__ngInput({ isSignal: true, alias: ${aliasOf(a[1], name)}, required: false, transform: undefined }) `;
          else if (callee === "input.required") deco = `@__ngInput({ isSignal: true, alias: ${aliasOf(a[0], name)}, required: true, transform: undefined }) `;
          else if (callee === "model" || callee === "model.required") {
            const al = callee === "model" ? aliasOf(a[1], name) : aliasOf(a[0], name);
            deco = `@__ngInput({ isSignal: true, alias: ${al}, required: ${callee !== "model"}, transform: undefined }) @__ngOutput(${al} + "Change") `;
          } else if (callee === "output") deco = `@__ngOutput(${aliasOf(a[0], name)}) `;
          else if (/^(viewChild|viewChildren|contentChild|contentChildren)(\.required)?$/.test(callee)) {
            const kind = { viewChild: "ViewChild", viewChildren: "ViewChildren", contentChild: "ContentChild", contentChildren: "ContentChildren" }[callee.split(".")[0]];
            deco = `@__ng${kind}(${a[0] ? a[0].getText(sf) : "undefined"}, { isSignal: true }) `;
          }
          if (deco) edits.push([m.getStart(sf), m.getStart(sf), deco]);
        });
      }
      ts.forEachChild(node, visit);
    };
    visit(sf);
    edits.sort((x, y) => y[0] - x[0]).forEach(([s, e, t]) => { src = src.slice(0, s) + t + src.slice(e); });
    return src;
  }

  function compileAll(kind, files, ts) {
    const modules = {}, css = [];
    const tsc = (path, code) => {
      const out = ts.transpileModule(code, {
        fileName: path.replace(/\.vue$/, ".ts"), reportDiagnostics: true,
        compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.CommonJS, experimentalDecorators: true, useDefineForClassFields: false, esModuleInterop: true, allowJs: true }
      });
      const d = (out.diagnostics || []).find(x => x.category === ts.DiagnosticCategory.Error);
      if (d) { const { line } = d.file.getLineAndCharacterOfPosition(d.start); throw new Error(`${path}:${line + 1} - error TS${d.code}: ${ts.flattenDiagnosticMessageText(d.messageText, "\n")}`); }
      return out.outputText;
    };
    Object.keys(files).forEach(path => {
      const src = files[path];
      if (path.endsWith(".vue")) { const r = compileVue(path, src); modules[path] = tsc(path, r.code); if (r.css) css.push(r.css); }
      else if (/\.(ts|js|mjs)$/.test(path) && !/\.(spec|test)\.ts$/.test(path)) modules[path] = tsc(path, kind === "angular" ? angularTransform(ts, path, src, files) : src);
      else if (path.endsWith(".json")) modules[path] = "module.exports = " + src;
      else if (path.endsWith(".css") && !(kind === "angular" && path.includes("/app"))) css.push(src);
    });
    return { modules, css: css.join("\n") };
  }

  // ---------- ما يعمل داخل إطار المعاينة ----------
  function runtime(KIND, MODULES, TEST, post) {
    const out = [];
    const say = (t, kind = "log") => String(t).split("\n").forEach(l => out.push({ kind, text: l }));
    const fmt = v => (typeof v === "string" ? v : v === undefined ? "undefined" : (() => { try { return JSON.stringify(v); } catch (e) { return String(v); } })());
    console.log = (...a) => { const t = a.map(fmt).join(" "); if (!/running in development mode|Download the Vue Devtools|You are running a development build/.test(t)) say(t, "info"); };
    console.info = console.log;
    console.warn = (...a) => say("⚠️ " + a.map(fmt).join(" ").split("\n")[0], "info");
    console.error = (...a) => say(a.map(x => (x instanceof Error ? `${x.name}: ${x.message}` : fmt(x))).join(" ").split("\n")[0].replace(/^ERROR /, ""), "err");
    window.onerror = (m, s, l, c, e) => { say(e ? `${e.name}: ${e.message}` : String(m), "err"); };
    window.onunhandledrejection = e => say(`Uncaught (in promise) ${e.reason && e.reason.message || e.reason}`, "err");

    // ----- واجهة وهمية -----
    const data = {
      products: [
        { id: 1, name: "لوحة مفاتيح", price: 250, stock: 12, category: "إكسسوارات" },
        { id: 2, name: "فأرة لاسلكية", price: 120, stock: 0, category: "إكسسوارات" },
        { id: 3, name: "شاشة 27 بوصة", price: 1100, stock: 5, category: "شاشات" },
        { id: 4, name: "سماعة رأس", price: 340, stock: 8, category: "صوتيات" }
      ],
      users: [{ id: 1, name: "ليان", email: "layan@codeway.dev", role: "admin" }, { id: 2, name: "عمر", email: "omar@codeway.dev", role: "user" }, { id: 3, name: "هدى", email: "huda@codeway.dev", role: "user" }],
      todos: [{ id: 1, title: "تعلّم Vue", done: true }, { id: 2, title: "تعلّم Angular", done: false }],
      employees: [{ id: 1, name: "سارة", department: "التطوير", salary: 12000 }, { id: 2, name: "خالد", department: "التسويق", salary: 9000 }, { id: 3, name: "نورة", department: "التطوير", salary: 15000 }]
    };
    const api = { data, calls: 0, log: [], pending: 0, failNext: false, delay: 20 };
    const realFetch = window.fetch;
    const handle = (method, url, body) => {
      const u = new URL(url, "http://localhost:4200");
      const seg = u.pathname.replace(/^\/api/, "").split("/").filter(Boolean);
      const json = (v, status = 200) => new Response(v === null ? null : JSON.stringify(v), { status, headers: { "content-type": "application/json" } });
      if (api.failNext) { api.failNext = false; return json({ error: "Server Error" }, 500); }
      const coll = data[seg[0]];
      if (!coll) return json({ error: "Not Found" }, 404);
      if (seg.length === 1) {
        if (method === "POST") { const item = Object.assign({ id: Math.max(0, ...coll.map(x => x.id)) + 1 }, body); coll.push(item); return json(item, 201); }
        let list = coll;
        u.searchParams.forEach((v, k) => { if (k === "q") list = list.filter(x => JSON.stringify(x).includes(v)); else list = list.filter(x => String(x[k]) === v); });
        return json(list);
      }
      const i = coll.findIndex(x => String(x.id) === seg[1]);
      if (i < 0) return json({ error: "Not Found" }, 404);
      if (method === "PUT" || method === "PATCH") { Object.assign(coll[i], body); return json(coll[i]); }
      if (method === "DELETE") { coll.splice(i, 1); return json(null, 204); }
      return json(coll[i]);
    };
    window.fetch = async (input, init = {}) => {
      const url = String(input && input.url || input);
      const method = String(init.method || (input && input.method) || "GET").toUpperCase();
      if (!/^(https:\/\/api\.codeway\.dev|\/api\/|http:\/\/localhost:4200\/api\/)/.test(url)) return realFetch ? Promise.reject(new TypeError("Failed to fetch")) : null;
      api.calls++; api.log.push(`${method} ${url.replace(/^https?:\/\/[^/]+/, "")}`);
      api.pending++;
      try {
        await new Promise(r => setTimeout(r, api.delay));
        let body = init.body;
        if (input && input.body !== undefined && body === undefined) body = await input.text();
        return handle(method, url.replace("https://api.codeway.dev", ""), body ? JSON.parse(body) : undefined);
      } finally { api.pending--; }
    };

    // ----- الوحدات -----
    const cache = {};
    let libs;
    if (KIND === "vue") {
      // المعاينة تعمل في إطار بلا رابط حقيقي، فتاريخ التنقل يُحفظ في الذاكرة
      const VR = Object.assign({}, VueRouter, { createWebHistory: b => VueRouter.createMemoryHistory(b), createWebHashHistory: b => VueRouter.createMemoryHistory(b) });
      const createApp = (...a) => { const app = Vue.createApp(...a); window.__app = app; return app; };
      libs = { vue: Object.assign({}, Vue, { createApp }), "vue-router": VR, pinia: Pinia };
    } else {
      const c = NG.core;
      const bootstrapApplication = async (comp, config = {}) => {
        const sel = (c.reflectComponentType(comp) || {}).selector || "app-root";
        if (!document.querySelector(sel)) document.body.prepend(document.createElement(sel));
        const providers = [c.provideZonelessChangeDetection(), ...(config.providers || []), NG.commonTesting.provideLocationMocks(), NG.http.FetchBackend, { provide: NG.http.HttpBackend, useExisting: NG.http.FetchBackend }];
        const ref = await NG.platformBrowser.bootstrapApplication(comp, Object.assign({}, config, { providers }));
        window.__ngApp = ref;
        return ref;
      };
      libs = {
        "@angular/core": c, "@angular/common": NG.common, "@angular/common/http": NG.http, "@angular/router": NG.router, "@angular/forms": NG.forms,
        "@angular/platform-browser": Object.assign({}, NG.platformBrowser, { bootstrapApplication }), rxjs: NG.rxjs, "rxjs/operators": NG.operators
      };
    }
    const resolve = (spec, from) => {
      let p = spec.startsWith("@/") ? "src/" + spec.slice(2) : /^\.{1,2}\//.test(spec) ? (() => { const parts = from.split("/").slice(0, -1); spec.split("/").forEach(s => { if (s === "..") parts.pop(); else if (s !== ".") parts.push(s); }); return parts.join("/"); })() : null;
      if (p === null) return null;
      return [p, p + ".ts", p + ".js", p + ".vue", p + "/index.ts", p + "/index.js"].find(x => MODULES[x] !== undefined) || p;
    };
    const ng = KIND === "angular" ? { __ngInput: NG.core.Input, __ngOutput: NG.core.Output, __ngViewChild: NG.core.ViewChild, __ngViewChildren: NG.core.ViewChildren, __ngContentChild: NG.core.ContentChild, __ngContentChildren: NG.core.ContentChildren } : {};
    const requireFrom = from => spec => {
      if (libs[spec]) return libs[spec];
      if (/\.css$/.test(spec)) return {};
      const p = resolve(spec, from);
      if (!p) throw new Error(`Failed to resolve import "${spec}" from "${from}". Does the file exist?`);
      if (MODULES[p] === undefined) throw new Error(`Failed to resolve import "${spec}" from "${from}". Does the file exist?`);
      if (cache[p]) return cache[p].exports;
      const mod = cache[p] = { exports: {} };
      new Function("require", "module", "exports", ...Object.keys(ng), MODULES[p])(requireFrom(p), mod, mod.exports, ...Object.values(ng));
      return mod.exports;
    };

    // ----- أدوات الفحص -----
    const $ = s => document.querySelector(s), $$ = s => [...document.querySelectorAll(s)];
    const tick = ms => new Promise(r => setTimeout(r, ms));
    async function settle() {
      for (let i = 0; i < 100; i++) {
        if (KIND === "vue") await Vue.nextTick();
        else if (window.__ngApp) await window.__ngApp.whenStable();
        await tick(5);
        if (!api.pending) { await tick(5); if (KIND === "vue") await Vue.nextTick(); else if (window.__ngApp) await window.__ngApp.whenStable(); if (!api.pending) return; }
      }
    }
    const norm = t => t.replace(/\s+/g, " ").trim();
    const el = s => { const e = typeof s === "string" ? $(s) : s; if (!e) throw new Error(`لم يُعثر على عنصر يطابق: ${s}`); return e; };
    const byText = (t, tag = "*") => $$(tag).filter(e => norm(e.textContent) === t || ([...e.childNodes].some(n => n.nodeType === 3 && norm(n.textContent) === t))).pop();
    const helpers = {
      print: (...a) => say(a.map(fmt).join(" ")),
      check: (label, cond) => say(`${cond ? "✓" : "✗"} ${label}`),
      $, $$, api, settle,
      // innerText يحترم العناصر الكتلية، فتُفصل الأسطر بمسافة بدل أن تلتصق الكلمات
      text: s => { const e = typeof s === "string" ? $(s) : s; return e ? norm(e.innerText !== undefined ? e.innerText : e.textContent) : null; },
      texts: s => $$(s).map(e => norm(e.innerText !== undefined ? e.innerText : e.textContent)),
      count: s => $$(s).length,
      exists: s => !!$(s),
      attr: (s, a) => el(s).getAttribute(a),
      value: s => el(s).value,
      click: async s => { const e = s.startsWith && s.startsWith("text=") ? byText(s.slice(5)) : el(s); if (!e) throw new Error(`لم يُعثر على: ${s}`); e.click(); await settle(); },
      type: async (s, v) => { const e = el(s); e.value = v; e.dispatchEvent(new Event("input", { bubbles: true })); e.dispatchEvent(new Event("change", { bubbles: true })); await settle(); },
      select: async (s, v) => { const e = el(s); e.value = v; e.dispatchEvent(new Event("change", { bubbles: true })); await settle(); },
      check2: async s => { const e = el(s); e.click(); await settle(); },
      submit: async (s = "form") => { const f = el(s); f.dispatchEvent(new Event("submit", { bubbles: true, cancelable: true })); await settle(); },
      navigate: async url => {
        if (KIND === "vue") { const r = window.__app && window.__app.config.globalProperties.$router; if (!r) throw new Error("لا يوجد Vue Router في التطبيق"); await r.push(url); }
        else { const r = window.__ngApp.injector.get(NG.router.Router); await r.navigateByUrl(url); }
        await settle();
      },
      path: () => {
        if (KIND === "vue") { const r = window.__app && window.__app.config.globalProperties.$router; return r ? r.currentRoute.value.fullPath : null; }
        const r = window.__ngApp && window.__ngApp.injector.get(NG.router.Router, null); return r ? r.url : null;
      },
      inject: token => window.__ngApp.injector.get(token),
      store: id => { const p = window.__app && window.__app.config.globalProperties.$pinia; return p ? p._s.get(id) : null; },
      html: s => el(s).innerHTML.replace(/<!--[\s\S]*?-->/g, "").replace(/ (data-v-[\w-]+|_ngcontent-[\w-]+|_nghost-[\w-]+|ng-reflect-[\w-]+="[^"]*"|ng-version="[^"]*")(="")?/g, "")
    };
    const height = () => post({ height: Math.ceil(document.body.getBoundingClientRect().height) });

    (async () => {
      try {
        const entry = ["src/main.ts", "src/main.js"].find(f => MODULES[f] !== undefined);
        if (entry) requireFrom("")("./" + entry);
        else if (KIND === "vue" && MODULES["src/App.vue"] !== undefined) libs.vue.createApp(requireFrom("")("./src/App.vue").default).mount("#app");
        else if (KIND === "angular") {
          const m = ["src/app/app.ts", "src/app/app.component.ts"].find(f => MODULES[f] !== undefined);
          if (!m) throw new Error("لا يوجد src/main.ts ولا src/app/app.ts");
          const exp = requireFrom("")("./" + m);
          const cfgFile = MODULES["src/app/app.config.ts"] !== undefined ? requireFrom("")("./src/app/app.config.ts") : {};
          await libs["@angular/platform-browser"].bootstrapApplication(exp.App || exp.AppComponent || Object.values(exp)[0], cfgFile.appConfig || {});
        }
        await settle();
        await tick(30);
        await settle();
      } catch (e) { say(`${e.name}: ${e.message}`.split("\n").slice(0, 3).join("\n"), "err"); }
      height();
      try { new ResizeObserver(height).observe(document.body); } catch (e) {}
      if (TEST) {
        try { await new Function(...Object.keys(helpers), `return (async () => {\n${TEST}\n})();`)(...Object.values(helpers)); }
        catch (e) { say(`${e.name}: ${e.message}`, "err"); }
      }
      height();
      post({ done: true, out });
    })();
  }

  // ---------- جهة الصفحة ----------
  CW.runFramework = function (kind, code, setup, test, container, onDone) {
    const token = Math.random().toString(36).slice(2);
    let finished = false;
    const frame = document.createElement("iframe");
    frame.setAttribute("sandbox", "allow-scripts allow-forms");
    frame.className = "preview-frame fw-frame";
    const finish = lines => {
      if (finished) return;
      finished = true;
      window.removeEventListener("message", onMsg);
      onDone && onDone(lines);
    };
    const onMsg = e => {
      if (e.source !== frame.contentWindow || !e.data || e.data.token !== token) return;
      if (e.data.height) frame.style.height = Math.min(560, Math.max(60, e.data.height + 2)) + "px";
      if (e.data.done) finish(e.data.out);
    };
    window.addEventListener("message", onMsg);
    if (container) container.innerHTML = `<span class="hint">جاري تحميل ${kind === "vue" ? "Vue" : "Angular"}...</span>`;
    const deps = [CW.loadTS(), load(kind === "vue" ? "vendor/vue-src.js" : "vendor/angular-src.js")];
    if (kind === "vue") deps.push(load("vendor/vue-sfc.js"));
    Promise.all(deps).then(([ts]) => {
      const files = Object.assign({}, setup ? CW.fwFiles(setup) : {}, CW.fwFiles(code));
      let compiled;
      try { compiled = compileAll(kind, files, ts); }
      catch (e) { if (container) container.innerHTML = ""; return finish([{ kind: "err", text: e.message }]); }
      // داخل وسم script يجب ألا يظهر </script ولا <!-- حتى لا يقطع محلل HTML الكود
      const safe = v => JSON.stringify(v).replace(/<\//g, "<\\/").replace(/<!--/g, "<\\u0021--");
      const scriptSafe = t => t.replace(/<\/script/gi, "<\\/script").replace(/<!--/g, "<\\!--");
      const html = files["index.html"] && kind === "vue" ? files["index.html"].replace(/<script[^>]*src=[^>]*><\/script>/g, "").replace(/^[\s\S]*<body[^>]*>|<\/body>[\s\S]*$/g, "") : kind === "vue" ? '<div id="app"></div>' : "";
      frame.srcdoc = `<!DOCTYPE html><html dir="rtl" lang="ar"><head><meta charset="utf-8">
<style>body{font-family:system-ui,"Segoe UI",Tahoma,sans-serif;margin:0;padding:12px;color:#1a2233;line-height:1.6}button{font:inherit;padding:4px 12px;cursor:pointer}input,select{font:inherit;padding:3px 6px}.active,.router-link-active{font-weight:bold}${compiled.css.replace(/<\/style/gi, "")}</style>
<script>${scriptSafe(CW.fwLibs[kind])}<\/script>
</head><body>${html}<script>
(${scriptSafe(runtime.toString())})(${safe(kind)}, ${safe(compiled.modules)}, ${safe(test || "")}, m => parent.postMessage(Object.assign({ token: ${safe(token)} }, m), "*"));
<\/script></body></html>`;
      if (container) { container.innerHTML = ""; container.appendChild(frame); }
      else { frame.style.cssText = "position:absolute;left:-9999px;width:800px;height:600px"; document.body.appendChild(frame); }
    }, e => finish([{ kind: "err", text: e.message }]));
    setTimeout(() => finish([{ kind: "err", text: "انتهت مهلة التشغيل (25 ثانية)" }]), 25000);
  };

  // أمثلة الشرح: معاينة حية لكل كتلة ```vue و ```angular عند اقترابها من الشاشة
  CW.renderFwDemos = rootEl => {
    const boxes = rootEl.querySelectorAll(".fw-preview[data-src]");
    const start = box => { if (!box.dataset.done) { box.dataset.done = "1"; CW.runFramework(box.dataset.kind, box.dataset.src, "", "", box, null); } };
    if (!("IntersectionObserver" in window)) return boxes.forEach(start);
    const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { io.unobserve(e.target); start(e.target); } }), { rootMargin: "300px" });
    boxes.forEach(b => io.observe(b));
  };
})(typeof window !== "undefined" ? window : globalThis);
