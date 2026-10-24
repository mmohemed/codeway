// محاكي Next.js (App Router) لتمارين الدورة: يترجم ملفات الطالب (TSX) بمترجم TypeScript المضمّن،
// ويعرضها بمحرك React مصغّر يطبّق قواعد Next الحقيقية: التوجيه بالملفات، و layouts و loading و error و not-found،
// ومكونات الخادم والعميل وقيودهما، و Server Actions، و Route Handlers، و proxy، و metadata،
// و fetch بالتخزين المؤقت وإعادة التحقق، و next/image و next/font، وقاعدة بيانات بواجهة Prisma.
// الفحص (~~~test) يزور الصفحات ويتفاعل معها ويطبع النتائج. نفس الملف يعمل في المتصفح و tools/verify.js.
(function (root) {
  const CW = root.CW = root.CW || {};
  const isNode = typeof document === "undefined";
  const getTS = async () => (isNode ? require("typescript") : CW.loadTS());
  const NEXT_VERSION = "16.0.1";
  const API = "https://api.codeway.dev";

  // ---------- تقسيم الكود إلى ملفات: // file: app/page.tsx ----------
  CW.nextFiles = code => {
    const files = {};
    let cur = null;
    code.split("\n").forEach(line => {
      const m = line.match(/^\s*\/\/\s*file:\s*(\S+)\s*$/);
      if (m) { cur = m[1].replace(/^\.\//, ""); files[cur] = []; }
      else if (cur) files[cur].push(line);
      else if (line.trim()) { cur = "app/page.tsx"; files[cur] = [line]; }
    });
    Object.keys(files).forEach(f => { files[f] = files[f].join("\n").replace(/\s+$/, "") + "\n"; });
    return files;
  };

  // ---------- أخطاء Next الخاصة ----------
  class NextSignal extends Error {}
  const notFoundError = () => Object.assign(new NextSignal("NEXT_HTTP_ERROR_FALLBACK;404"), { digest: "NEXT_HTTP_ERROR_FALLBACK;404" });
  const redirectError = (url, status) => Object.assign(new NextSignal("NEXT_REDIRECT"), { digest: `NEXT_REDIRECT;replace;${url};${status}`, url, status });
  const SUSPEND = { suspend: true };

  const Fragment = Symbol.for("react.fragment"), SuspenseT = Symbol.for("react.suspense");
  const VOID = new Set(["area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "source", "track", "wbr"]);
  const BLOCK = new Set(["div", "p", "h1", "h2", "h3", "h4", "h5", "h6", "li", "ul", "ol", "section", "header", "footer", "main", "nav", "article", "aside", "form", "table", "tr", "br", "hr", "pre", "blockquote", "label", "button", "dl", "dt", "dd", "figure", "figcaption", "select", "option", "textarea", "input", "img", "summary", "details", "body", "html", "title"]);
  const esc = s => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const escAttr = s => esc(s).replace(/"/g, "&quot;");
  const kebab = k => k.replace(/[A-Z]/g, c => "-" + c.toLowerCase());
  const shortHash = s => { let h = 5381; for (let i = 0; i < s.length; i++) h = (h * 33 + s.charCodeAt(i)) >>> 0; return h.toString(36).slice(0, 6); };
  const fmt = v => (typeof v === "string" ? v : v === undefined ? "undefined" : typeof v === "function" ? `[Function ${v.name}]` : JSON.stringify(v));

  // ---------- واجهة خارجية وهمية: https://api.codeway.dev ----------
  function makeApi() {
    const data = {
      products: [
        { id: 1, name: "لوحة مفاتيح ميكانيكية", price: 250, stock: 12, category: "إكسسوارات" },
        { id: 2, name: "فأرة لاسلكية", price: 120, stock: 0, category: "إكسسوارات" },
        { id: 3, name: "شاشة 27 بوصة", price: 1100, stock: 5, category: "شاشات" },
        { id: 4, name: "سماعة رأس", price: 340, stock: 8, category: "صوتيات" }
      ],
      posts: [
        { slug: "hello-nextjs", title: "مرحباً Next.js", author: "سارة", body: "Next.js إطار React للإنتاج." },
        { slug: "server-components", title: "مكونات الخادم", author: "خالد", body: "تعمل على الخادم فقط وتقلل JavaScript في المتصفح." },
        { slug: "caching", title: "التخزين المؤقت", author: "سارة", body: "إعادة استخدام النتائج تسرّع الموقع." }
      ],
      users: [{ id: 1, name: "ليان", email: "layan@codeway.dev" }, { id: 2, name: "عمر", email: "omar@codeway.dev" }]
    };
    const api = { data, calls: 0, log: [], visits: 0 };
    api.handle = (path, method, body) => {
      api.calls++;
      api.log.push(`${method} ${path}`);
      const [p] = path.split("?");
      const seg = p.split("/").filter(Boolean);
      const json = (v, status = 200) => ({ status, body: JSON.stringify(v) });
      if (seg[0] === "stats") return json({ visits: ++api.visits });
      if (seg[0] === "time") return json({ now: api.clock() });
      const coll = data[seg[0]];
      if (!coll) return json({ error: "Not Found" }, 404);
      if (seg.length === 1) {
        if (method === "POST") { const item = Object.assign({ id: coll.length + 1 }, body); coll.push(item); return json(item, 201); }
        const q = new URLSearchParams(path.split("?")[1] || "");
        let list = coll;
        if (q.get("category")) list = list.filter(x => x.category === q.get("category"));
        return json(list);
      }
      const item = coll.find(x => String(x.id) === seg[1] || x.slug === seg[1]);
      return item ? json(item) : json({ error: "Not Found" }, 404);
    };
    api.update = (collection, key, patch) => { const it = data[collection].find(x => x.id === key || x.slug === key); Object.assign(it, patch); };
    api.add = (collection, item) => data[collection].push(item);
    return api;
  }

  // ---------- قاعدة بيانات بواجهة Prisma ----------
  function makeDb() {
    const tables = {
      product: [
        { id: 1, name: "لوحة مفاتيح ميكانيكية", price: 250, stock: 12 },
        { id: 2, name: "فأرة لاسلكية", price: 120, stock: 0 },
        { id: 3, name: "شاشة 27 بوصة", price: 1100, stock: 5 }
      ],
      post: [
        { id: 1, title: "مرحباً Next.js", published: true, authorId: 1 },
        { id: 2, title: "مسودة عن الأداء", published: false, authorId: 1 }
      ],
      user: [{ id: 1, name: "ليان", email: "layan@codeway.dev", password: "hashed:123456", role: "admin" }, { id: 2, name: "عمر", email: "omar@codeway.dev", password: "hashed:secret", role: "user" }],
      todo: [{ id: 1, title: "تعلّم Server Actions", done: false }]
    };
    const match = (row, where = {}) => Object.keys(where).every(k => {
      const c = where[k], v = row[k];
      if (c && typeof c === "object") {
        if ("contains" in c) return String(v).includes(c.contains);
        if ("gt" in c || "gte" in c || "lt" in c || "lte" in c) return (!("gt" in c) || v > c.gt) && (!("gte" in c) || v >= c.gte) && (!("lt" in c) || v < c.lt) && (!("lte" in c) || v <= c.lte);
        if ("in" in c) return c.in.includes(v);
        if ("not" in c) return v !== c.not;
      }
      return v === c;
    });
    const pick = (row, select) => (select ? Object.keys(select).filter(k => select[k]).reduce((o, k) => (o[k] = row[k], o), {}) : Object.assign({}, row));
    const model = name => ({
      findMany: async (a = {}) => {
        let rows = tables[name].filter(r => match(r, a.where));
        if (a.orderBy) { const [k, dir] = Object.entries(a.orderBy)[0]; rows = rows.slice().sort((x, y) => (x[k] < y[k] ? -1 : x[k] > y[k] ? 1 : 0) * (dir === "desc" ? -1 : 1)); }
        if (a.skip) rows = rows.slice(a.skip);
        if (a.take) rows = rows.slice(0, a.take);
        return rows.map(r => pick(r, a.select));
      },
      findUnique: async a => { const r = tables[name].find(x => match(x, a.where)); return r ? pick(r, a.select) : null; },
      findFirst: async (a = {}) => { const r = tables[name].find(x => match(x, a.where)); return r ? pick(r, a.select) : null; },
      count: async (a = {}) => tables[name].filter(r => match(r, a.where)).length,
      create: async a => { const id = Math.max(0, ...tables[name].map(r => r.id)) + 1; const row = Object.assign({ id }, a.data); tables[name].push(row); return Object.assign({}, row); },
      update: async a => { const r = tables[name].find(x => match(x, a.where)); if (!r) throw new Error(`An operation failed because it depends on one or more records that were required but not found. Record to update not found.`); Object.assign(r, a.data); return Object.assign({}, r); },
      delete: async a => { const i = tables[name].findIndex(x => match(x, a.where)); if (i < 0) throw new Error("Record to delete does not exist."); return tables[name].splice(i, 1)[0]; }
    });
    const db = { tables };
    Object.keys(tables).forEach(t => { db[t] = model(t); });
    return db;
  }

  // ---------- التطبيق ----------
  function createApp(files, opts = {}) {
    const app = {
      files, compiled: {}, modules: {}, ts: null,
      clientFns: new WeakSet(), actionFns: new WeakSet(),
      api: makeApi(), db: makeDb(), clock: 0, cookies: {}, cache: {}, logs: opts.logs || [],
      env: {}
    };
    app.api.clock = () => app.clock;
    // متغيرات البيئة من .env و .env.local
    [".env", ".env.local"].forEach(f => {
      if (files[f] === undefined) return;
      files[f].split("\n").forEach(l => { const m = l.match(/^\s*([\w.]+)\s*=\s*(.*)$/); if (m && !l.trim().startsWith("#")) app.env[m[1]] = m[2].replace(/^(['"])(.*)\1$/, "$2"); });
    });
    const log = (kind, text) => app.logs.push({ kind, text });

    // ----- الترجمة والوحدات -----
    const exts = ["", ".tsx", ".ts", ".jsx", ".js", "/page.tsx", "/index.tsx", "/index.ts", "/index.js"];
    const resolvePath = (from, spec) => {
      let base;
      if (spec.startsWith("@/")) base = spec.slice(2);
      else if (spec.startsWith(".")) {
        const parts = from.split("/").slice(0, -1);
        spec.split("/").forEach(s => { if (s === "..") parts.pop(); else if (s !== ".") parts.push(s); });
        base = parts.join("/");
      } else return null;
      for (const e of exts) if (files[base + e] !== undefined) return base + e;
      if (spec.startsWith("@/") && files["src/" + base] !== undefined) return "src/" + base;
      return false;
    };
    const directive = src => { const m = src.match(/^\s*(?:\/\/[^\n]*\n\s*|\/\*[\s\S]*?\*\/\s*)*(['"])use (client|server)\1/); return m ? m[2] : null; };
    const compile = path => {
      if (app.compiled[path]) return app.compiled[path];
      const ts = app.ts;
      const out = ts.transpileModule(files[path], {
        fileName: path,
        reportDiagnostics: true,
        compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.React, jsxFactory: "__h", jsxFragmentFactory: "__Fragment", esModuleInterop: true }
      });
      const diag = (out.diagnostics || []).find(d => d.category === ts.DiagnosticCategory.Error);
      if (diag) {
        const { line } = diag.file.getLineAndCharacterOfPosition(diag.start);
        throw new Error(`./${path}:${line + 1}\nError: ${ts.flattenDiagnosticMessageText(diag.messageText, "\n")}`);
      }
      return (app.compiled[path] = out.outputText);
    };

    // كل وحدة تُحمَّل في بيئة server أو client، كما يفعل Next عندما يستوردها مكون عميل
    const load = (path, env) => {
      const dir = directive(files[path]);
      if (dir === "client") env = "client";
      if (dir === "server") env = "server"; // إجراءات الخادم تعمل دائماً على الخادم ولو استوردها مكون عميل
      const key = env + ":" + path;
      if (app.modules[key]) return app.modules[key].exports;
      const mod = app.modules[key] = { exports: {}, env, path, dir };
      const code = compile(path);
      const req = spec => requireFrom(path, spec, env);
      const react = makeReact(env);
      const proc = { env: env === "client" ? Object.keys(app.env).filter(k => k.startsWith("NEXT_PUBLIC_")).reduce((o, k) => (o[k] = app.env[k], o), { NODE_ENV: "production" }) : Object.assign({ NODE_ENV: "production" }, app.env) };
      const consoleObj = { log: (...a) => log("log", a.map(fmt).join(" ")), error: (...a) => log("log", a.map(fmt).join(" ")), warn: (...a) => log("log", a.map(fmt).join(" ")), info: (...a) => log("log", a.map(fmt).join(" ")) };
      try {
        new Function("require", "module", "exports", "__h", "__Fragment", "process", "console", "fetch", code)(req, mod, mod.exports, react.createElement, Fragment, proc, consoleObj, simFetch);
      } catch (e) { delete app.modules[key]; throw e; }
      // الدوال المصدَّرة من وحدة عميل مكونات عميل، ومن وحدة "use server" إجراءات خادم
      Object.values(mod.exports).forEach(v => {
        if (typeof v !== "function") return;
        if (env === "client") app.clientFns.add(v);
        if (dir === "server") app.actionFns.add(v);
      });
      return mod.exports;
    };
    const requireFrom = (from, spec, env) => {
      if (BUILTINS[spec]) return BUILTINS[spec](env, from);
      const p = resolvePath(from, spec);
      if (p === null) throw new Error(`Module not found: Can't resolve '${spec}'`);
      if (p === false) throw new Error(`Module not found: Can't resolve '${spec}'\n./${from}`);
      return load(p, env);
    };

    // ----- React مصغّر -----
    let current = null; // المكون الجاري عرضه: { client, hooks, i, page }
    const makeReact = env => {
      const createElement = (type, props, ...children) => {
        props = Object.assign({}, props);
        const key = props.key;
        delete props.key;
        if (children.length === 1) props.children = children[0];
        else if (children.length > 1) props.children = children;
        if (typeof type === "function" && env === "client") app.clientFns.add(type);
        return { $el: true, type, props, key, client: env === "client" };
      };
      return { createElement };
    };
    const hookGuard = name => {
      if (!current || !current.client) throw new Error(`You're importing a component that needs \`${name}\`. This React Hook only works in a Client Component. To fix, mark the file (or its parent) with the \`"use client"\` directive.`);
      return current;
    };
    const nextHook = () => { const c = current; const i = c.i++; return { c, i, slot: c.hooks[i] }; };
    const React = env => {
      const r = makeReact(env);
      const lib = {
        createElement: r.createElement, Fragment, Suspense: SuspenseT,
        useState: init => {
          hookGuard("useState");
          const { c, i, slot } = nextHook();
          if (!slot) c.hooks[i] = { v: typeof init === "function" ? init() : init };
          const h = c.hooks[i];
          const page = c.page;
          return [h.v, nv => { const v = typeof nv === "function" ? nv(h.v) : nv; if (v !== h.v) { h.v = v; if (page) page.dirty = true; } }];
        },
        useReducer: (reducer, init) => {
          hookGuard("useReducer");
          const { c, i, slot } = nextHook();
          if (!slot) c.hooks[i] = { v: init };
          const h = c.hooks[i], page = c.page;
          return [h.v, action => { h.v = reducer(h.v, action); if (page) page.dirty = true; }];
        },
        useEffect: (fn, deps) => {
          hookGuard("useEffect");
          const { c, i, slot } = nextHook();
          const changed = !slot || !deps || deps.some((d, k) => d !== slot.deps[k]);
          c.hooks[i] = { deps: deps || [] };
          if (changed && c.page) c.page.effects.push(fn);
        },
        useRef: init => { hookGuard("useRef"); const { c, i, slot } = nextHook(); if (!slot) c.hooks[i] = { current: init }; return c.hooks[i]; },
        useMemo: (fn, deps) => { hookGuard("useMemo"); const { c, i, slot } = nextHook(); if (!slot || deps.some((d, k) => d !== slot.deps[k])) c.hooks[i] = { v: fn(), deps }; return c.hooks[i].v; },
        useCallback: (fn, deps) => lib.useMemo(() => fn, deps),
        useTransition: () => { hookGuard("useTransition"); return [false, fn => fn()]; },
        useActionState: (action, init) => {
          hookGuard("useActionState");
          const { c, i, slot } = nextHook();
          if (!slot) c.hooks[i] = { v: init, pending: false };
          const h = c.hooks[i], page = c.page;
          const dispatch = async fd => { h.pending = true; const v = await action(h.v, fd); h.v = v; h.pending = false; if (page) page.dirty = true; };
          app.actionFns.add(dispatch);
          dispatch.__fromState = true;
          return [h.v, dispatch, h.pending];
        },
        useContext: ctx => { const stack = current && current.contexts; const hit = stack && stack.slice().reverse().find(x => x.ctx === ctx); return hit ? hit.value : ctx.defaultValue; },
        createContext: dv => { const ctx = { defaultValue: dv }; ctx.Provider = { $provider: ctx }; return ctx; },
        use: v => v
      };
      lib.default = lib;
      return lib;
    };

    // ----- الحزم المدمجة -----
    const navCtx = { pathname: "/", search: "", params: {}, page: null };
    const BUILTINS = {
      react: env => React(env),
      "react-dom": () => ({ useFormStatus: () => ({ pending: false }) }),
      "server-only": env => { if (env === "client") throw new Error(`You're importing a component that imports server-only. It only works in a Server Component but one of its parents is marked with "use client", so it's a Client Component.`); return {}; },
      "client-only": () => ({}),
      "next/link": () => {
        const Link = props => {
          const { href, children, prefetch, replace, scroll, ...rest } = props;
          const url = typeof href === "string" ? href : href.pathname + (href.query ? "?" + new URLSearchParams(href.query) : "");
          return { $el: true, type: "a", props: Object.assign({}, rest, { href: url, children, "data-link": true }), client: true };
        };
        return { default: Link, __esModule: true };
      },
      "next/navigation": env => {
        const clientOnly = name => { if (!current || !current.client) throw new Error(`${name} only works in Client Components. Add the "use client" directive at the top of the file to use it.`); };
        return {
          notFound: () => { throw notFoundError(); },
          redirect: (url, type) => { throw redirectError(url, 307); },
          permanentRedirect: url => { throw redirectError(url, 308); },
          usePathname: () => { clientOnly("usePathname"); return navCtx.pathname; },
          useSearchParams: () => { clientOnly("useSearchParams"); return new URLSearchParams(navCtx.search); },
          useParams: () => { clientOnly("useParams"); return navCtx.params; },
          useRouter: () => {
            clientOnly("useRouter");
            const page = navCtx.page;
            return { push: url => page && page.queue.push(() => page.navigate(url)), replace: url => page && page.queue.push(() => page.navigate(url)), refresh: () => page && page.queue.push(() => page.refresh()), back: () => {} };
          }
        };
      },
      "next/headers": env => {
        if (env === "client") throw new Error(`You're importing a component that needs "next/headers". That only works in a Server Component but one of its parents is marked with "use client", so it's a Client Component.`);
        return {
          cookies: async () => cookieStore(),
          headers: async () => new Headers(Object.assign({ "user-agent": "CodeWay/1.0", host: "localhost:3000" }, reqHeaders))
        };
      },
      "next/server": () => NextServer,
      "next/cache": () => ({
        revalidatePath: p => { Object.keys(app.cache).forEach(k => { if (app.cache[k].paths.has(p) || p === "/" && app.cache[k].paths.size) delete app.cache[k]; }); revalidated.push(p); },
        revalidateTag: tag => { Object.keys(app.cache).forEach(k => { if (app.cache[k].tags.includes(tag)) app.cache[k].stale = true; }); },
        updateTag: tag => { Object.keys(app.cache).forEach(k => { if (app.cache[k].tags.includes(tag)) delete app.cache[k]; }); }
      }),
      "next/image": () => ({ default: Image, __esModule: true }),
      "next/font/google": () => new Proxy({}, { get: (_, name) => (typeof name === "string" ? googleFont(name) : undefined) }),
      "next/font/local": () => ({ default: o => fontResult("local-" + shortHash(JSON.stringify(o.src)), o) }),
      "@prisma/client": () => ({ PrismaClient: function PrismaClient() { return app.db; } }),
      "bcryptjs": () => ({ hash: async p => "hashed:" + p, compare: async (p, h) => h === "hashed:" + p, default: { hash: async p => "hashed:" + p, compare: async (p, h) => h === "hashed:" + p } }),
      zod: () => ZOD
    };
    BUILTINS["next/router"] = BUILTINS["next/navigation"];

    // ----- cookies -----
    let reqHeaders = {};
    let cookieWritable = false;
    const cookieStore = () => ({
      get: name => (app.cookies[name] !== undefined ? { name, value: app.cookies[name] } : undefined),
      getAll: () => Object.keys(app.cookies).map(n => ({ name: n, value: app.cookies[n] })),
      has: name => app.cookies[name] !== undefined,
      set: (name, value) => {
        if (!cookieWritable) throw new Error("Cookies can only be modified in a Server Action or Route Handler. Read more: https://nextjs.org/docs/app/api-reference/functions/cookies#options");
        if (typeof name === "object") { value = name.value; name = name.name; }
        app.cookies[name] = String(value);
      },
      delete: name => { if (!cookieWritable) throw new Error("Cookies can only be modified in a Server Action or Route Handler."); delete app.cookies[name]; }
    });

    // ----- NextRequest / NextResponse -----
    class NextResponse extends Response {
      static json(data, init = {}) { const r = new NextResponse(JSON.stringify(data), Object.assign({}, init, { headers: Object.assign({ "content-type": "application/json" }, init.headers || {}) })); return r; }
      static redirect(url, status = 307) { const r = new NextResponse(null, { status, headers: { location: String(url) } }); return r; }
      static next() { const r = new NextResponse(null, { status: 200 }); r.__next = true; return r; }
      static rewrite(url) { const r = new NextResponse(null, { status: 200 }); r.__rewrite = String(url); return r; }
    }
    const makeRequest = (method, url, o = {}) => {
      const full = new URL(url, "http://localhost:3000");
      const init = { method, headers: Object.assign({}, o.headers || {}) };
      if (o.json !== undefined) { init.body = JSON.stringify(o.json); init.headers["content-type"] = "application/json"; }
      else if (o.body !== undefined) init.body = o.body;
      const req = new Request(full, init);
      req.nextUrl = full;
      req.cookies = { get: n => (app.cookies[n] !== undefined ? { name: n, value: app.cookies[n] } : undefined), has: n => app.cookies[n] !== undefined };
      return req;
    };
    const NextServer = { NextResponse, NextRequest: Request };

    // ----- fetch بالتخزين المؤقت -----
    let renderPath = null, pageRevalidate = null;
    const revalidated = [];
    async function simFetch(input, init = {}) {
      const url = String(input && input.url || input);
      const method = (init.method || "GET").toUpperCase();
      if (url.startsWith("/")) throw new TypeError(`Failed to parse URL from ${url}`);
      if (!url.startsWith(API)) throw new TypeError("fetch failed");
      const upstream = () => { const r = app.api.handle(url.slice(API.length), method, init.body ? JSON.parse(init.body) : undefined); return r; };
      const opts = init.next || {};
      const revalidate = opts.revalidate !== undefined ? opts.revalidate : init.cache === "force-cache" ? false : init.cache === "no-store" ? 0 : pageRevalidate !== null ? pageRevalidate : 0;
      const respond = r => new Response(r.body, { status: r.status, headers: { "content-type": "application/json" } });
      if (method !== "GET" || revalidate === 0) return respond(upstream());
      const key = url;
      let e = app.cache[key];
      if (e && renderPath) e.paths.add(renderPath);
      // stale-while-revalidate: بعد انتهاء المدة يُرجع القديم مرة ويجدّد في الخلفية
      if (e && (e.stale || (revalidate && app.clock - e.time >= revalidate))) {
        const old = e.res;
        app.cache[key] = { res: upstream(), time: app.clock, tags: opts.tags || [], paths: new Set(renderPath ? [renderPath] : []) };
        return respond(old);
      }
      if (e) return respond(e.res);
      e = app.cache[key] = { res: upstream(), time: app.clock, tags: opts.tags || [], paths: new Set(renderPath ? [renderPath] : []) };
      return respond(e.res);
    }

    // ----- next/image و next/font -----
    const SIZES = [16, 32, 48, 64, 96, 128, 256, 384, 640, 750, 828, 1080, 1200, 1920, 2048, 3840];
    let nextConfig = null;
    function Image(props) {
      const { src, alt, width, height, fill, sizes, quality = 75, priority, preload, className, style } = props;
      const s = typeof src === "object" ? src.src : src;
      if (alt === undefined) throw new Error(`Image is missing required "alt" property. Please add Alternative Text to describe the image for screen readers and search engines.`);
      if (!fill && width === undefined) throw new Error(`Image with src "${s}" is missing required "width" property.`);
      if (!fill && height === undefined) throw new Error(`Image with src "${s}" is missing required "height" property.`);
      if (/^https?:/.test(s)) {
        const host = new URL(s).hostname;
        const pats = (nextConfig && nextConfig.images && nextConfig.images.remotePatterns) || [];
        if (!pats.some(p => p.hostname === host || (p.hostname || "").startsWith("**.") && host.endsWith(p.hostname.slice(2)))) throw new Error(`Invalid src prop (${s}) on \`next/image\`, hostname "${host}" is not configured under images in your \`next.config.js\`\nSee more info: https://nextjs.org/docs/messages/next-image-unconfigured-host`);
      }
      const u = w => `/_next/image?url=${encodeURIComponent(s)}&w=${w}&q=${quality}`;
      const attrs = { alt };
      const eager = priority || preload;
      if (!eager) attrs.loading = "lazy";
      if (!fill) { attrs.width = String(width); attrs.height = String(height); }
      attrs.decoding = "async";
      if (eager) attrs.fetchpriority = "high";
      attrs["data-nimg"] = fill ? "fill" : "1";
      if (className) attrs.className = className;
      attrs.style = Object.assign(fill ? { position: "absolute", height: "100%", width: "100%", left: 0, top: 0, right: 0, bottom: 0, color: "transparent" } : { color: "transparent" }, style || {});
      if (fill || sizes) {
        if (sizes) attrs.sizes = sizes;
        const list = SIZES.filter(w => w >= 640);
        attrs.srcSet = list.map(w => `${u(w)} ${w}w`).join(", ");
        attrs.src = u(3840);
      } else {
        const w1 = SIZES.find(w => w >= width) || 3840, w2 = SIZES.find(w => w >= 2 * width) || 3840;
        attrs.srcSet = `${u(w1)} 1x, ${u(w2)} 2x`;
        attrs.src = u(w2);
      }
      return { $el: true, type: "img", props: attrs, client: false };
    }
    const fontResult = (family, o) => ({
      className: `__className_${shortHash(family + JSON.stringify(o))}`,
      variable: o.variable ? `__variable_${shortHash(family + o.variable)}` : undefined,
      style: { fontFamily: `'${family}', '${family} Fallback'`, fontStyle: "normal" }
    });
    const googleFont = name => o => {
      o = o || {};
      const family = name.replace(/_/g, " ");
      if (o.preload !== false && !o.subsets) throw new Error(`Preload is enabled but no subsets were specified for font \`${family}\`. Please specify subsets or disable preloading if your intended subset can't be preloaded.`);
      return fontResult(family, o);
    };

    // ----- zod مصغّر للتحقق من المدخلات -----
    const ZOD = (() => {
      const make = (check, msgDefault) => {
        const s = {
          _checks: [check],
          safeParse(v) { for (const c of s._checks) { const e = c(v); if (e) return { success: false, error: { issues: [{ message: e }], flatten: () => ({ fieldErrors: { _: [e] } }) } }; } return { success: true, data: s._map ? s._map(v) : v }; },
          parse(v) { const r = s.safeParse(v); if (!r.success) throw new Error(r.error.issues[0].message); return r.data; },
          min(n, m) { s._checks.push(v => ((typeof v === "string" ? v.length : v) < n ? (m && (m.message || m)) || `Too small: expected ${typeof v === "string" ? "string to have >=" + n + " characters" : "number to be >=" + n}` : null)); return s; },
          max(n, m) { s._checks.push(v => ((typeof v === "string" ? v.length : v) > n ? (m && (m.message || m)) || `Too big: expected <=${n}` : null)); return s; },
          email(m) { s._checks.push(v => (/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v) ? null : (m && (m.message || m)) || "Invalid email address")); return s; },
          positive(m) { s._checks.push(v => (v > 0 ? null : (m && (m.message || m)) || "Too small: expected number to be >0")); return s; },
          int(m) { s._checks.push(v => (Number.isInteger(v) ? null : (m && (m.message || m)) || "Invalid input: expected int")); return s; }
        };
        return s;
      };
      const obj = shape => {
        const s = make(() => null);
        s.safeParse = v => {
          const data = {}, fieldErrors = {};
          for (const k of Object.keys(shape)) { const r = shape[k].safeParse(v ? v[k] : undefined); if (r.success) data[k] = r.data; else fieldErrors[k] = [r.error.issues[0].message]; }
          const keys = Object.keys(fieldErrors);
          return keys.length ? { success: false, error: { issues: keys.map(k => ({ path: [k], message: fieldErrors[k][0] })), flatten: () => ({ fieldErrors }) } } : { success: true, data };
        };
        return s;
      };
      const z = {
        string: () => make(v => (typeof v === "string" ? null : "Invalid input: expected string")),
        number: () => make(v => (typeof v === "number" && !isNaN(v) ? null : "Invalid input: expected number")),
        object: obj,
        coerce: { number: () => { const s = make(v => (isNaN(Number(v)) || v === "" || v === null ? "Invalid input: expected number" : null)); const orig = s.safeParse; s._map = Number; s.safeParse = v => { const r = orig(v); return r.success ? { success: true, data: Number(v) } : r; }; s._checks = [v => (isNaN(Number(v)) || v === "" ? "Invalid input: expected number" : null)]; s.min = (n, m) => { s._checks.push(v => (Number(v) < n ? (m && (m.message || m)) || `Too small: expected number to be >=${n}` : null)); return s; }; s.positive = m => { s._checks.push(v => (Number(v) > 0 ? null : (m && (m.message || m)) || "Too small: expected number to be >0")); return s; }; return s; } }
      };
      return { z, default: z };
    })();

    // ----- التوجيه بالملفات -----
    const appFiles = Object.keys(files).filter(f => /^(src\/)?app\//.test(f));
    const appRoot = appFiles.some(f => f.startsWith("src/app/")) ? "src/app" : "app";
    const special = (dir, name) => ["tsx", "ts", "jsx", "js"].map(e => `${dir}/${name}.${e}`).find(f => files[f] !== undefined);
    const dirs = new Set();
    appFiles.forEach(f => { const parts = f.split("/").slice(0, -1); for (let i = appRoot.split("/").length; i <= parts.length; i++) dirs.add(parts.slice(0, i).join("/")); });
    const childrenOf = dir => [...dirs].filter(d => d.startsWith(dir + "/") && d.slice(dir.length + 1).split("/").length === 1);
    // يبحث عن مجلد يطابق أجزاء الرابط، مع المجموعات (x) والمقاطع الديناميكية [x] و [...x] و [[...x]]
    const match = (dir, segs, params, want) => {
      if (!segs.length) {
        if (special(dir, want)) return { dir, params };
        for (const c of childrenOf(dir)) {
          const name = c.split("/").pop();
          if (/^\(.*\)$/.test(name)) { const r = match(c, segs, params, want); if (r) return r; }
          const opt = name.match(/^\[\[\.\.\.(\w+)\]\]$/);
          if (opt && special(c, want)) return { dir: c, params: Object.assign({}, params, { [opt[1]]: undefined }) };
        }
        return null;
      }
      const [s, ...rest] = segs;
      const kids = childrenOf(dir).sort((a, b) => rank(a) - rank(b));
      for (const c of kids) {
        const name = c.split("/").pop();
        let r = null;
        if (/^\(.*\)$/.test(name)) r = match(c, segs, params, want);
        else if (name === s) r = match(c, rest, params, want);
        else if (/^\[\w+\]$/.test(name)) r = match(c, rest, Object.assign({}, params, { [name.slice(1, -1)]: decodeURIComponent(s) }), want);
        else if (/^\[{1,2}\.\.\.(\w+)\]{1,2}$/.test(name) && special(c, want)) r = { dir: c, params: Object.assign({}, params, { [name.match(/\.\.\.(\w+)/)[1]]: segs.map(decodeURIComponent) }) };
        if (r) return r;
      }
      return null;
    };
    const rank = d => { const n = d.split("/").pop(); return /^\(/.test(n) ? 1 : /^\[\[/.test(n) ? 4 : /^\[\.\.\./.test(n) ? 3 : /^\[/.test(n) ? 2 : 0; };
    const chainOf = dir => { const out = []; const parts = dir.split("/"); for (let i = appRoot.split("/").length; i <= parts.length; i++) out.push(parts.slice(0, i).join("/")); return out; };

    // ----- العرض -----
    const isActionFn = fn => app.actionFns.has(fn) || /^[^{]*\{\s*(['"])use server\1/.test(Function.prototype.toString.call(fn));
    async function resolve(node, ctx) {
      if (node === null || node === undefined || node === false || node === true) return [];
      if (typeof node === "string" || typeof node === "number" || typeof node === "bigint") return [{ text: String(node) }];
      if (Array.isArray(node)) { const out = []; for (let i = 0; i < node.length; i++) out.push(...await resolve(node[i], Object.assign({}, ctx, { path: ctx.path + "." + (node[i] && node[i].key != null ? "k" + node[i].key : i) }))); return out; }
      if (node instanceof Promise) throw new Error("Objects are not valid as a React child (found: [object Promise]). If you meant to render a collection of children, use an array instead.");
      if (!node.$el) {
        if (typeof node === "object") throw new Error(`Objects are not valid as a React child (found: object with keys {${Object.keys(node).join(", ")}}). If you meant to render a collection of children, use an array instead.`);
        return [];
      }
      const { type, props } = node;
      if (type === Fragment) return resolve(props.children, ctx);
      if (type === SuspenseT) {
        if (ctx.initial) {
          try { return await resolve(props.children, Object.assign({}, ctx, { inSuspense: true })); }
          catch (e) { if (e === SUSPEND) return resolve(props.fallback, ctx); throw e; }
        }
        return resolve(props.children, ctx);
      }
      if (type && type.$provider) return resolve(props.children, Object.assign({}, ctx, { contexts: [...(ctx.contexts || []), { ctx: type.$provider, value: props.value }] }));
      if (typeof type === "function") {
        const client = app.clientFns.has(type);
        if (client && !ctx.client) {
          for (const k of Object.keys(props)) {
            if (k !== "children" && typeof props[k] === "function" && !isActionFn(props[k]))
              throw new Error(`Functions cannot be passed directly to Client Components unless you explicitly expose it by marking it with "use server". Or maybe you meant to call this function rather than return it.\n  <${type.name || "..."} ${k}={function ${props[k].name || k}} ...>`);
          }
        }
        const path = ctx.path + "/" + (type.name || "C");
        if (!client && ctx.memo && ctx.memo.has(path)) return resolve(ctx.memo.get(path), Object.assign({}, ctx, { path }));
        const hooks = (ctx.hooks && ctx.hooks.get(path)) || [];
        const prev = current;
        current = { client, hooks, i: 0, page: ctx.page, contexts: ctx.contexts };
        let out;
        // مكون بدأ في العرض الأولي (Streaming) يُكمل نفس الوعد ولا يُستدعى مرتين
        try { out = !client && ctx.pending && ctx.pending.has(path) ? ctx.pending.get(path) : type(props); }
        finally { current = prev; }
        if (ctx.hooks) ctx.hooks.set(path, hooks);
        if (out instanceof Promise) {
          if (client) { out.catch(() => {}); throw new Error(`async/await is not yet supported in Client Components, only Server Components. This error is often caused by accidentally adding \`'use client'\` to a module that was originally written for the server.`); }
          if (ctx.initial && ctx.inSuspense) { out.catch(() => {}); if (ctx.pending) ctx.pending.set(path, out); throw SUSPEND; }
          out = await out;
        }
        if (!client && ctx.memo) ctx.memo.set(path, out);
        return resolve(out, Object.assign({}, ctx, { client, path }));
      }
      if (typeof type === "string") {
        for (const k of Object.keys(props)) {
          if (/^on[A-Z]/.test(k) && typeof props[k] === "function" && !node.client)
            throw new Error(`Event handlers cannot be passed to Client Component props.\n  <${type} ${k}={function ${props[k].name || k}} children=...>\nIf you need interactivity, consider converting part of this to a Client Component.`);
        }
        if ((type === "form" && typeof props.action === "function" || type === "button" && typeof props.formAction === "function") && !node.client && !isActionFn(props.action || props.formAction))
          throw new Error(`Functions cannot be passed directly to Client Components unless you explicitly expose it by marking it with "use server".`);
        const kids = props.dangerouslySetInnerHTML ? [{ raw: props.dangerouslySetInnerHTML.__html }] : type === "textarea" && (props.value !== undefined || props.defaultValue !== undefined) ? [{ text: String(props.value !== undefined ? props.value : props.defaultValue) }] : await resolve(props.children, Object.assign({}, ctx, { path: ctx.path + "/" + type }));
        return [{ tag: type, props, children: kids, path: ctx.path + "/" + type + (props.name ? ":" + props.name : "") }];
      }
      return [];
    }

    // ----- تحويل الشجرة إلى HTML ونص -----
    const attrsHtml = (tag, props, values) => {
      let s = "";
      for (let k of Object.keys(props)) {
        let v = props[k];
        if (k === "children" || k === "dangerouslySetInnerHTML" || k === "data-link" || /^on[A-Z]/.test(k) || typeof v === "function" || v === null || v === undefined || v === false) continue;
        if (k === "className") k = "class";
        else if (k === "htmlFor") k = "for";
        else if (k === "defaultValue") k = "value";
        else if (k === "defaultChecked") k = "checked";
        else if (k === "srcSet") k = "srcset";
        if (k === "style" && typeof v === "object") v = Object.keys(v).map(p => `${kebab(p)}:${v[p]}`).join(";");
        if (tag === "textarea" && k === "value") continue;
        s += v === true ? ` ${k.toLowerCase()}=""` : ` ${k}="${escAttr(v)}"`;
      }
      return s;
    };
    const toHtml = nodes => nodes.map(n => {
      if (n.raw !== undefined) return n.raw;
      if (n.text !== undefined) return esc(n.text);
      const open = `<${n.tag}${attrsHtml(n.tag, n.props)}>`;
      return VOID.has(n.tag) ? open : open + toHtml(n.children) + `</${n.tag}>`;
    }).join("");
    const toText = nodes => {
      const walk = ns => ns.map(n => {
        if (n.text !== undefined) return n.text;
        if (n.raw !== undefined) return n.raw.replace(/<[^>]+>/g, "");
        if (n.tag === "head" || n.tag === "script" || n.tag === "style" || n.tag === "title") return "";
        if (n.tag === "br") return "\n";
        if (n.tag === "img") return n.props.alt ? `\n[صورة: ${n.props.alt}]\n` : "";
        if (n.tag === "input" || n.tag === "select") return "\n" + ((n.props.type === "submit" || n.props.type === "button") && n.props.value ? n.props.value : "") + "\n";
        const inner = walk(n.children);
        return BLOCK.has(n.tag) ? "\n" + inner + "\n" : inner;
      }).join("");
      return walk(nodes).split("\n").map(l => l.replace(/\s+/g, " ").trim()).filter(Boolean).join("\n");
    };
    // محدد CSS مبسط: tag و .class و #id و [attr=value] مع المسافة للأحفاد
    const parseSel = sel => sel.trim().split(/\s+/).map(part => {
      const m = { tag: null, classes: [], id: null, attrs: [] };
      part.replace(/^[a-z][\w-]*/i, t => { m.tag = t.toLowerCase(); return ""; })
        .replace(/\.([\w-]+)/g, (_, c) => { m.classes.push(c); return ""; })
        .replace(/#([\w-]+)/g, (_, i) => { m.id = i; return ""; })
        .replace(/\[([\w-]+)(?:=["']?([^\]"']*)["']?)?\]/g, (_, a, v) => { m.attrs.push([a, v]); return ""; });
      return m;
    });
    const nodeMatches = (n, m) => n.tag && (!m.tag || n.tag === m.tag) &&
      (!m.id || n.props.id === m.id) &&
      m.classes.every(c => String(n.props.className || "").split(/\s+/).includes(c)) &&
      m.attrs.every(([a, v]) => { const pv = a === "class" ? n.props.className : a === "for" ? n.props.htmlFor : n.props[a]; return v === undefined ? pv !== undefined && pv !== false : String(pv) === v; });
    const findAll = (nodes, sel) => {
      const chain = parseSel(sel);
      const out = [];
      const walk = (ns, ancestors) => ns.forEach(n => {
        if (!n.tag) return;
        n.parent = ancestors[ancestors.length - 1];
        const last = chain[chain.length - 1];
        if (nodeMatches(n, last)) {
          let ci = chain.length - 2;
          for (let a = ancestors.length - 1; a >= 0 && ci >= 0; a--) if (nodeMatches(ancestors[a], chain[ci])) ci--;
          if (ci < 0) out.push(n);
        }
        walk(n.children, [...ancestors, n]);
      });
      walk(nodes, []);
      return out;
    };
    const wrapNode = n => n && {
      tag: n.tag, text: toText([n]), html: toHtml([n]), attr: k => { const v = k === "class" ? n.props.className : n.props[k]; return v === undefined ? null : String(v); }
    };

    // ----- metadata -----
    async function collectMetadata(chain, pageMod, props) {
      let meta = {}, template = null;
      for (const mod of chain) {
        let m = mod.metadata;
        if (mod.generateMetadata) m = await mod.generateMetadata(props);
        if (!m) continue;
        let title = m.title;
        if (title && typeof title === "object") { if (title.template) template = title.template; title = title.absolute || title.default; }
        else if (title && template && mod !== chain[0]) title = template.replace("%s", title);
        meta = Object.assign({}, meta, m, title !== undefined ? { title } : {});
        if (m.openGraph) meta.openGraph = Object.assign({}, meta.openGraph, m.openGraph);
      }
      return meta;
    }
    const metaNodes = meta => {
      const out = [{ tag: "meta", props: { charSet: "utf-8" }, children: [] }, { tag: "meta", props: { name: "viewport", content: "width=device-width, initial-scale=1" }, children: [] }];
      if (meta.title) out.push({ tag: "title", props: {}, children: [{ text: meta.title }] });
      if (meta.description) out.push({ tag: "meta", props: { name: "description", content: meta.description }, children: [] });
      if (meta.keywords) out.push({ tag: "meta", props: { name: "keywords", content: [].concat(meta.keywords).join(",") }, children: [] });
      if (meta.robots) out.push({ tag: "meta", props: { name: "robots", content: typeof meta.robots === "string" ? meta.robots : `${meta.robots.index === false ? "noindex" : "index"}, ${meta.robots.follow === false ? "nofollow" : "follow"}` }, children: [] });
      const og = meta.openGraph;
      if (og) {
        if (og.title || meta.title) out.push({ tag: "meta", props: { property: "og:title", content: og.title || meta.title }, children: [] });
        if (og.description) out.push({ tag: "meta", props: { property: "og:description", content: og.description }, children: [] });
        [].concat(og.images || []).forEach(im => out.push({ tag: "meta", props: { property: "og:image", content: typeof im === "string" ? im : im.url }, children: [] }));
        if (og.type) out.push({ tag: "meta", props: { property: "og:type", content: og.type }, children: [] });
      }
      return out;
    };

    // ----- تنفيذ طلب صفحة -----
    async function renderRoute(url, ctx) {
      const u = new URL(url, "http://localhost:3000");
      const segs = u.pathname.split("/").filter(Boolean);
      navCtx.pathname = u.pathname; navCtx.search = u.search;
      const m = match(appRoot, segs, {}, "page");
      const result = { status: 200, headers: {} };
      const chainDirs = m ? chainOf(m.dir) : [appRoot];
      if (!special(appRoot, "layout")) throw new Error(`page.tsx doesn't have a root layout. To fix this error, make sure every page has a root layout.`);
      const layouts = chainDirs.filter(d => special(d, "layout")).map(d => ({ dir: d, mod: load(special(d, "layout"), "server") }));
      const params = m ? m.params : {};
      navCtx.params = params;
      const props = { params: Promise.resolve(params), searchParams: Promise.resolve(Object.fromEntries(u.searchParams)) };
      // بناء الشجرة: layouts خارجية ثم loading (Suspense) ثم الصفحة، مع error و not-found لكل مستوى
      const build = (leaf, stopDir) => {
        let el = leaf;
        for (let i = chainDirs.length - 1; i >= 0; i--) {
          const d = chainDirs[i];
          if (stopDir && d.length > stopDir.length) continue;
          const loading = special(d, "loading");
          if (loading && i === chainDirs.length - 1 && !stopDir) el = { $el: true, type: SuspenseT, props: { fallback: h(load(loading, "server").default, {}), children: el } };
          const lay = layouts.find(l => l.dir === d);
          if (lay) el = h(lay.mod.default, { params: props.params, children: el });
        }
        return el;
      };
      const h = (type, props) => ({ $el: true, type, props, client: false });
      let pageMod = null;
      if (m) pageMod = load(special(m.dir, "page"), "server");
      pageRevalidate = pageMod && typeof pageMod.revalidate === "number" ? pageMod.revalidate : null;
      renderPath = u.pathname;
      const meta = await collectMetadata(layouts.map(l => l.mod).concat(pageMod ? [pageMod] : []), pageMod, props).catch(() => ({}));
      const findUp = (name, from) => { for (const d of chainOf(from).reverse()) { const f = special(d, name); if (f) return { dir: d, file: f }; } return null; };
      const notFoundTree = from => {
        result.status = 404;
        const nf = findUp("not-found", from);
        const body = nf ? h(load(nf.file, "server").default, {}) : h(DefaultNotFound, {});
        return build(body, appRoot);
      };
      const shared = ctx.wantInitial ? { memo: new Map(), pending: new Map() } : {};
      const run = async tree => resolve(tree, Object.assign({ path: "", client: false }, shared, ctx));
      let nodes, initial = null;
      try {
        if (!m) nodes = await run(notFoundTree(appRoot));
        else {
          const tree = build(h(pageMod.default, props));
          if (ctx.wantInitial) { try { initial = await resolve(tree, Object.assign({ path: "", client: false, initial: true }, shared)); } catch (e) { if (e === SUSPEND) initial = null; else throw e; } }
          nodes = await run(tree);
        }
      } catch (e) {
        if (e && e.digest && e.digest.startsWith("NEXT_REDIRECT")) return Object.assign(result, { status: e.status, headers: { location: e.url }, nodes: [], meta });
        if (e && e.digest && e.digest.startsWith("NEXT_HTTP_ERROR_FALLBACK")) nodes = await run(notFoundTree(m ? m.dir : appRoot));
        else {
          const eb = findUp("error", m ? m.dir : appRoot);
          result.status = 500;
          result.error = e;
          if (!eb) return Object.assign(result, { nodes: [{ tag: "html", props: {}, children: [{ tag: "body", props: {}, children: [{ text: "Internal Server Error" }] }] }], meta });
          const errMod = load(eb.file, "server");
          if (!app.clientFns.has(errMod.default)) throw new Error(`./${eb.file}\nerror.tsx must be a Client Component. Add the "use client" directive at the top of the file.`);
          const reset = () => {};
          app.actionFns.add(reset); // تمرره Next نفسه لمكون الخطأ
          nodes = await run(build(h(errMod.default, { error: e, reset }), eb.dir));
        }
      }
      // إدراج head (العنوان و meta) داخل html
      const html = nodes.find(n => n.tag === "html");
      if (!html) throw new Error(`Missing <html> and <body> tags in the root layout.\nRead more at https://nextjs.org/docs/messages/missing-root-layout-tags`);
      html.children = [{ tag: "head", props: {}, children: metaNodes(meta) }, ...html.children.filter(c => c.tag !== "head")];
      return Object.assign(result, { nodes, meta, initial });
    }
    const DefaultNotFound = () => ({ $el: true, type: "div", props: { children: [{ $el: true, type: "h1", props: { children: "404" } }, { $el: true, type: "h2", props: { children: "This page could not be found." } }] }, client: false });

    // ----- proxy (middleware) -----
    async function runProxy(url, method = "GET") {
      const file = ["proxy.ts", "proxy.js", "middleware.ts", "middleware.js", "src/proxy.ts", "src/middleware.ts"].find(f => files[f] !== undefined);
      if (!file) return null;
      const mod = load(file, "server");
      const fn = mod.proxy || mod.middleware || mod.default;
      const u = new URL(url, "http://localhost:3000");
      const matchers = mod.config && mod.config.matcher ? [].concat(mod.config.matcher) : null;
      if (matchers && !matchers.some(p => new RegExp("^" + p.replace(/\/:\w+\*/g, "(?:/.*)?").replace(/\/:\w+\+/g, "/.+").replace(/:\w+/g, "[^/]+") + "$").test(u.pathname))) return null;
      const res = await fn(makeRequest(method, u.href));
      if (!res || res.__next) return null;
      if (res.__rewrite) return { rewrite: new URL(res.__rewrite, "http://localhost:3000").pathname };
      return { response: res };
    }

    // ----- Route Handlers -----
    async function handleRoute(method, url, o = {}) {
      const u = new URL(url, "http://localhost:3000");
      const segs = u.pathname.split("/").filter(Boolean);
      // ملفات metadata الخاصة
      if (u.pathname === "/sitemap.xml" && special(appRoot, "sitemap")) {
        const list = await load(special(appRoot, "sitemap"), "server").default();
        const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` + list.map(e => `<url>\n<loc>${e.url}</loc>\n${e.lastModified ? `<lastmod>${new Date(e.lastModified).toISOString()}</lastmod>\n` : ""}${e.changeFrequency ? `<changefreq>${e.changeFrequency}</changefreq>\n` : ""}${e.priority !== undefined ? `<priority>${e.priority}</priority>\n` : ""}</url>`).join("\n") + "\n</urlset>";
        return { status: 200, headers: { "content-type": "application/xml" }, body };
      }
      if (u.pathname === "/robots.txt" && special(appRoot, "robots")) {
        const r = await load(special(appRoot, "robots"), "server").default();
        const lines = [];
        [].concat(r.rules || []).forEach(rule => {
          [].concat(rule.userAgent || "*").forEach(a => lines.push(`User-Agent: ${a}`));
          [].concat(rule.allow || []).forEach(a => lines.push(`Allow: ${a}`));
          [].concat(rule.disallow || []).forEach(a => lines.push(`Disallow: ${a}`));
          lines.push("");
        });
        if (r.sitemap) lines.push(`Sitemap: ${r.sitemap}`);
        return { status: 200, headers: { "content-type": "text/plain" }, body: lines.join("\n") + "\n" };
      }
      const m = match(appRoot, segs, {}, "route");
      if (!m) return null;
      const mod = load(special(m.dir, "route"), "server");
      const fn = mod[method];
      if (!fn) return { status: 405, headers: {}, body: "" };
      cookieWritable = true;
      renderPath = u.pathname;
      try {
        const res = await fn(makeRequest(method, u.href, o), { params: Promise.resolve(m.params) });
        if (!(res instanceof Response)) throw new Error(`No response is returned from route handler '${special(m.dir, "route")}'. Ensure you return a \`Response\` or a \`NextResponse\` in all branches of your handler.`);
        const headers = {};
        res.headers.forEach((v, k) => { headers[k] = v; });
        return { status: res.status, headers, body: await res.text() };
      } finally { cookieWritable = false; }
    }

    // ----- الواجهة المستخدمة في الفحص -----
    const wrapResult = r => {
      const body = r.nodes.length ? findAll(r.nodes, "body")[0] : null;
      return {
        status: r.status, headers: r.headers, location: r.headers && r.headers.location || null,
        title: r.meta && r.meta.title || null,
        meta: name => { const n = r.nodes.length && findAll(r.nodes, "head")[0]; if (!n) return null; const hit = n.children.find(c => c.tag === "meta" && (c.props.name === name || c.props.property === name)); return hit ? hit.props.content : null; },
        html: toHtml(r.nodes), body: body ? toHtml(body.children) : "",
        text: body ? toText(body.children) : toText(r.nodes),
        initialText: r.initial ? toText(findAll(r.initial, "body").length ? findAll(r.initial, "body")[0].children : r.initial) : null,
        error: r.error ? r.error.message : null,
        find: sel => wrapNode(findAll(r.nodes, sel)[0]), findAll: sel => findAll(r.nodes, sel).map(wrapNode), count: sel => findAll(r.nodes, sel).length
      };
    };

    app.visit = async (url, o = {}) => {
      app.ts = app.ts || await getTS();
      if (o.cookies) Object.assign(app.cookies, o.cookies);
      reqHeaders = o.headers || {};
      const px = await runProxy(url);
      if (px && px.response) {
        const res = px.response, headers = {};
        res.headers.forEach((v, k) => { headers[k] = v; });
        return { status: res.status, headers, location: headers.location ? new URL(headers.location, "http://localhost:3000").pathname : null, text: await res.text(), html: "", title: null, meta: () => null, find: () => null, findAll: () => [], count: () => 0 };
      }
      const target = px && px.rewrite ? px.rewrite : url;
      const rh = await handleRoute("GET", target);
      if (rh) return { status: rh.status, headers: rh.headers, text: rh.body, html: rh.body, title: null, meta: () => null, find: () => null, findAll: () => [], count: () => 0, json: () => JSON.parse(rh.body) };
      const r = await renderRoute(target, { wantInitial: !!o.stream });
      return wrapResult(r);
    };
    app.request = async (method, url, o = {}) => {
      app.ts = app.ts || await getTS();
      if (o.cookies) Object.assign(app.cookies, o.cookies);
      const px = await runProxy(url, method);
      if (px && px.response) { const t = await px.response.text(); return { status: px.response.status, headers: {}, text: t, json: () => JSON.parse(t) }; }
      const r = await handleRoute(method, px && px.rewrite || url, o);
      if (!r) return { status: 404, headers: {}, text: "", json: () => null };
      return { status: r.status, headers: r.headers, text: r.body, json: () => JSON.parse(r.body) };
    };
    app.loadConfig = async () => {
      app.ts = app.ts || await getTS();
      const f = ["next.config.ts", "next.config.js", "next.config.mjs"].find(x => files[x] !== undefined);
      nextConfig = f ? (load(f, "server").default || {}) : {};
    };

    // ----- صفحة تفاعلية: نقر وكتابة وإرسال نماذج وتنقل -----
    app.mount = async url => {
      app.ts = app.ts || await getTS();
      const page = { url, hooks: new Map(), memo: new Map(), values: new Map(), effects: [], queue: [], dirty: false, nodes: [], status: 200, history: [url] };
      const render = async () => {
        navCtx.page = page;
        page.effects = [];
        const px = await runProxy(page.url);
        if (px && px.response && px.response.headers.get("location")) { page.url = new URL(px.response.headers.get("location"), "http://localhost:3000").pathname; page.history.push(page.url); return render(); }
        const r = await renderRoute(page.url, { hooks: page.hooks, memo: page.memo, page });
        if (r.status === 307 || r.status === 308) { page.url = r.headers.location; page.history.push(page.url); page.memo.clear(); return render(); }
        page.nodes = r.nodes; page.status = r.status; page.title = r.meta && r.meta.title;
        const fx = page.effects; page.effects = [];
        for (const f of fx) { const prev = current; current = { client: true, hooks: [], i: 0, page }; try { f(); } finally { current = prev; } }
      };
      const settle = async () => {
        for (let i = 0; i < 30; i++) {
          await new Promise(r => setTimeout(r, 0));
          while (page.queue.length) await page.queue.shift()();
          if (!page.dirty) break;
          page.dirty = false;
          await render();
        }
      };
      page.navigate = async to => { page.url = to; page.history.push(to); page.memo.clear(); await render(); };
      page.refresh = async () => { page.memo.clear(); await render(); };
      const target = sel => {
        let n = null;
        if (sel.startsWith("text=")) {
          const t = sel.slice(5);
          const all = []; const walk = ns => ns.forEach(x => { if (x.tag) { all.push(x); walk(x.children); } });
          walk(page.nodes);
          n = all.filter(x => toText([x]) === t).pop() || all.filter(x => toText([x]).includes(t)).pop();
        } else n = findAll(page.nodes, sel)[0];
        if (!n) throw new Error(`لم يُعثر على عنصر يطابق: ${sel}`);
        return n;
      };
      const valueOf = n => (page.values.has(n.path) ? page.values.get(n.path) : n.props.value !== undefined ? n.props.value : n.props.defaultValue !== undefined ? n.props.defaultValue : n.tag === "textarea" ? toText(n.children) : "");
      const ev = (n, extra) => Object.assign({ target: { value: valueOf(n), name: n.props.name, checked: !!page.values.get(n.path + ":checked") }, currentTarget: {}, defaultPrevented: false, preventDefault() { this.defaultPrevented = true; }, stopPropagation() {} }, extra);
      const call = async (fn, arg) => {
        const prev = navCtx.page; navCtx.page = page;
        cookieWritable = isActionFn(fn);
        try { await fn(arg); }
        catch (e) {
          if (e && e.digest && e.digest.startsWith("NEXT_REDIRECT")) { page.queue.push(() => page.navigate(e.url)); return; }
          throw e;
        } finally { cookieWritable = false; navCtx.page = prev; }
        if (isActionFn(fn)) page.memo.clear(), page.dirty = true;
      };
      const formData = form => {
        const fd = new FormData();
        const walk = ns => ns.forEach(x => {
          if (!x.tag) return;
          if (["input", "textarea", "select"].includes(x.tag) && x.props.name) {
            if (x.props.type === "checkbox") { if (page.values.get(x.path + ":checked") ?? x.props.defaultChecked) fd.append(x.props.name, x.props.value || "on"); }
            else fd.append(x.props.name, String(valueOf(x)));
          }
          walk(x.children);
        });
        walk(form.children);
        return fd;
      };
      const submit = async form => {
        if (form.props.onSubmit) { const e = ev(form); await call(form.props.onSubmit, e); if (e.defaultPrevented) return settle(); }
        if (typeof form.props.action === "function") await call(form.props.action, formData(form));
        await settle();
      };
      const api = {
        get url() { return page.url; }, get status() { return page.status; }, get title() { return page.title; },
        get text() { const b = findAll(page.nodes, "body")[0]; return b ? toText(b.children) : ""; },
        get html() { const b = findAll(page.nodes, "body")[0]; return b ? toHtml(b.children) : ""; },
        find: sel => wrapNode(findAll(page.nodes, sel)[0]), count: sel => findAll(page.nodes, sel).length,
        value: sel => valueOf(target(sel)),
        click: async sel => {
          const n = target(sel);
          if (n.props.disabled) return;
          if (n.tag === "input" && n.props.type === "checkbox") { page.values.set(n.path + ":checked", !(page.values.get(n.path + ":checked") ?? n.props.defaultChecked ?? n.props.checked)); if (n.props.onChange) await call(n.props.onChange, ev(n)); }
          const e = ev(n);
          if (n.props.onClick) await call(n.props.onClick, e);
          let form = null;
          for (let p = n.parent; p; p = p.parent) if (p.tag === "form") { form = p; break; }
          if (!e.defaultPrevented && (n.tag === "button" && (n.props.type || "submit") === "submit" || n.tag === "input" && n.props.type === "submit") && form) {
            if (typeof n.props.formAction === "function") { await call(n.props.formAction, formData(form)); await settle(); }
            else await submit(form);
            return;
          }
          if (!e.defaultPrevented && n.tag === "a" && n.props.href && n.props["data-link"]) { await page.navigate(n.props.href); }
          await settle();
        },
        fill: async (sel, value) => {
          const n = target(sel);
          page.values.set(n.path, value);
          if (n.props.onChange) await call(n.props.onChange, ev(n, { target: { value, name: n.props.name } }));
          await settle();
        },
        submit: async sel => { await submit(target(sel || "form")); }
      };
      await render();
      await settle();
      return api;
    };

    // ----- محاكاة next build -----
    app.build = async () => {
      app.ts = app.ts || await getTS();
      const lines = [];
      const say = t => lines.push(t);
      const pageDirs = [...dirs].filter(d => special(d, "page"));
      const routeDirs = [...dirs].filter(d => special(d, "route"));
      const toUrl = d => "/" + d.split("/").slice(appRoot.split("/").length).filter(s => !/^\(.*\)$/.test(s)).join("/");
      const srcOf = d => chainOf(d).map(x => special(x, "layout")).filter(Boolean).concat(special(d, "page") || special(d, "route")).map(f => files[f]).join("\n");
      const dynamicApi = s => /\bcookies\(|\bheaders\(|searchParams|["']no-store["']|force-dynamic|\bconnection\(/.test(s);
      const entries = [];
      for (const d of pageDirs) {
        const url = toUrl(d);
        const src = srcOf(d);
        const isDynSeg = /\[/.test(url);
        let kind = dynamicApi(src) ? "ƒ" : "○", subs = [];
        if (isDynSeg && kind === "○") {
          const mod = load(special(d, "page"), "server");
          if (mod.generateStaticParams) {
            kind = "●";
            const list = await mod.generateStaticParams();
            subs = list.map(p => url.replace(/\[(\.\.\.)?(\w+)\]/g, (_, dots, k) => [].concat(p[k]).join("/")));
          } else kind = "ƒ";
        }
        entries.push([url, kind, subs]);
      }
      routeDirs.forEach(d => { const mod = files[special(d, "route")]; entries.push([toUrl(d), /force-static/.test(mod) ? "○" : "ƒ", []]); });
      if (special(appRoot, "sitemap")) entries.push(["/sitemap.xml", "○", []]);
      if (special(appRoot, "robots")) entries.push(["/robots.txt", "○", []]);
      entries.push(["/_not-found", "○", []]);
      entries.sort((a, b) => a[0].localeCompare(b[0]));
      // ترجمة كل الملفات تكشف الأخطاء قبل النشر كما يفعل next build
      for (const f of Object.keys(files).filter(x => /\.(tsx?|jsx?)$/.test(x))) compile(f);
      const staticCount = entries.filter(e => e[1] !== "ƒ").reduce((a, e) => a + 1 + e[2].length, 0);
      say(`   ▲ Next.js ${NEXT_VERSION} (Turbopack)`);
      if (Object.keys(app.env).length) say(`   - Environments: ${[".env.local", ".env"].filter(f => files[f] !== undefined).join(", ")}`);
      say("");
      say("   Creating an optimized production build ...");
      say(" ✓ Compiled successfully in 2.4s");
      say(" ✓ Finished TypeScript in 1.1s");
      say(` ✓ Generating static pages (${staticCount}/${staticCount})`);
      say("");
      say("Route (app)");
      entries.forEach(([url, kind, subs], i) => {
        const last = i === entries.length - 1;
        say(`${i === 0 ? "┌" : last ? "└" : "├"} ${kind} ${url}`);
        subs.forEach((s, j) => say(`${last ? " " : "│"} ${j === subs.length - 1 ? "└" : "├"} ${s}`));
      });
      say("");
      const kinds = new Set(entries.map(e => e[1]));
      say("○  (Static)   prerendered as static content");
      if (kinds.has("●")) say("●  (SSG)      prerendered as static HTML (uses generateStaticParams)");
      if (kinds.has("ƒ")) say("ƒ  (Dynamic)  server-rendered on demand");
      return lines.join("\n");
    };

    app.advance = sec => { app.clock += sec; };
    return app;
  }

  // ---------- التشغيل من الدرس ----------
  // code: ملفات الطالب، setup: ملفات مخفية تُضاف للمشروع، test: كود الفحص (يُكتب بـ await)
  CW.nextRun = async (code, setup, test) => {
    const files = Object.assign({}, setup ? CW.nextFiles(setup) : {}, CW.nextFiles(code));
    const logs = [];
    const app = createApp(files, { logs });
    const print = (...a) => logs.push({ kind: "log", text: a.map(fmt).join(" ") });
    const helpers = {
      print, visit: app.visit, mount: app.mount, request: app.request, advance: app.advance, api: app.api, db: app.db,
      build: async () => { const out = await app.build(); out.split("\n").forEach(l => logs.push({ kind: "log", text: l })); },
      cookies: app.cookies, files,
      // نسخة من التطبيق مع تعديل بعض الملفات، لاختبار سيناريوهات مثل خطأ في الصفحة
      variant: changes => createApp(Object.assign({}, files, changes), { logs })
    };
    try {
      await app.loadConfig();
      const fn = new Function(...Object.keys(helpers), `return (async () => {\n${test || 'const r = await visit("/");\nprint(r.text);'}\n})();`);
      await fn(...Object.values(helpers));
    } catch (e) {
      logs.push({ kind: "err", text: (e && e.message) || String(e) });
    }
    return logs;
  };
  CW.nextCreateApp = createApp;
})(typeof window !== "undefined" ? window : globalThis);
