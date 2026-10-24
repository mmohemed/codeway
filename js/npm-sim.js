// امتداد الطرفية المحاكاة (js/git-sim.js) بأوامر npm و npx و node و Vite و ESLint و Prettier.
// npm يعمل على سجل حزم محلي صغير، و node يشغّل ملفات JavaScript فعلاً،
// و Vite يبني المشروع فعلاً (يتتبّع الاستيرادات ويستبدل متغيرات البيئة ويولّد dist)،
// و ESLint و Prettier هما الأداتان الحقيقيتان (js/vendor) تُحمَّلان عند أول استخدام.
// نفس الملف يعمل في المتصفح وفي tools/verify.js.
(function (root) {
  const CW = root.CW = root.CW || {};
  CW.termExt = CW.termExt || {};
  const isNode = typeof document === "undefined";

  const NODE_VERSION = "v22.12.0", NPM_VERSION = "10.9.0", VITE_VERSION = "6.0.7";

  // ---------- تحميل المكتبات الحقيقية عند الحاجة ----------
  const loaded = {};
  const loadScript = file => {
    if (loaded[file]) return loaded[file];
    if (isNode) {
      const path = require("path");
      loaded[file] = Promise.resolve(require(path.join(__dirname, "vendor", file)));
    } else {
      const base = (document.querySelector('script[src$="npm-sim.js"]') || { src: "js/npm-sim.js" }).src.replace(/npm-sim\.js.*$/, "");
      loaded[file] = new Promise((resolve, reject) => {
        const s = document.createElement("script");
        s.src = base + "vendor/" + file;
        s.onload = () => resolve();
        s.onerror = () => reject(new Error("تعذّر تحميل " + file));
        document.head.append(s);
      });
    }
    return loaded[file];
  };
  const getESLint = async () => {
    if (isNode) { await loadScript("eslint-extras.js"); return loadScript("eslint-linter.min.js"); }
    await loadScript("eslint-extras.js");
    await loadScript("eslint-linter.min.js");
    return root.eslint;
  };
  const getPrettier = async () => {
    const files = ["standalone.js", "babel.js", "estree.js", "postcss.js", "html.js", "markdown.js"];
    if (isNode) {
      const mods = await Promise.all(files.map(f => loadScript("prettier/" + f)));
      return { prettier: mods[0], plugins: mods.slice(1) };
    }
    for (const f of files) await loadScript("prettier/" + f);
    const p = root.prettierPlugins;
    return { prettier: root.prettier, plugins: [p.babel, p.estree, p.postcss, p.html, p.markdown] };
  };

  // ---------- أدوات ----------
  const hashOf = s => {
    let h1 = 0x811c9dc5, h2 = 0x1234567;
    for (let i = 0; i < s.length; i++) { h1 = Math.imul(h1 ^ s.charCodeAt(i), 0x01000193) >>> 0; h2 = Math.imul(h2 ^ s.charCodeAt(i), 0x5bd1e995) >>> 0; }
    const abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-";
    let out = "", n = h1, m = h2;
    for (let i = 0; i < 8; i++) { out += abc[(i < 4 ? n : m) & 63]; if (i < 4) n >>>= 6; else m >>>= 6; }
    return out;
  };
  const byteLen = s => (typeof TextEncoder !== "undefined" ? new TextEncoder().encode(s).length : Buffer.byteLength(s));
  const kb = n => (n / 1000).toFixed(2);
  const sortObj = o => Object.keys(o).sort().reduce((a, k) => (a[k] = o[k], a), {});
  const json = o => JSON.stringify(o, null, 2) + "\n";
  const plural = (n, one, many) => `${n} ${n === 1 ? one : many}`;

  // ---------- سجل الحزم المحلي ----------
  // versions مرتبة تصاعدياً، والأخير هو latest. deps أسماء الحزم التي تُثبَّت معها.
  const REG = {
    lodash: { versions: ["4.17.19", "4.17.20", "4.17.21"], desc: "Lodash modular utilities." },
    dayjs: { versions: ["1.11.10", "1.11.13"], desc: "2KB immutable date time library alternative to Moment.js" },
    slugify: { versions: ["1.6.6"], desc: "Slugifies a String" },
    axios: { versions: ["1.7.7", "1.7.9"], desc: "Promise based HTTP client for the browser and node.js", deps: ["follow-redirects", "form-data", "proxy-from-env"] },
    "follow-redirects": { versions: ["1.15.9"] }, "form-data": { versions: ["4.0.1"], deps: ["asynckit", "combined-stream", "mime-types"] },
    "proxy-from-env": { versions: ["1.1.0"] }, asynckit: { versions: ["0.4.0"] }, "combined-stream": { versions: ["1.0.8"], deps: ["delayed-stream"] },
    "delayed-stream": { versions: ["1.0.0"] }, "mime-types": { versions: ["2.1.35"], deps: ["mime-db"] }, "mime-db": { versions: ["1.52.0"] },
    react: { versions: ["18.3.1", "19.0.0"], desc: "React is a JavaScript library for building user interfaces.", deps: ["loose-envify"] },
    "react-dom": { versions: ["18.3.1", "19.0.0"], deps: ["scheduler", "loose-envify"] },
    scheduler: { versions: ["0.23.2"] }, "loose-envify": { versions: ["1.4.0"], deps: ["js-tokens"] }, "js-tokens": { versions: ["4.0.0"] },
    vite: { versions: ["5.4.11", "6.0.7"], desc: "Native-ESM powered web dev build tool", bin: ["vite"], deps: ["esbuild", "postcss", "rollup"] },
    esbuild: { versions: ["0.24.2"] }, rollup: { versions: ["4.30.1"], deps: ["@types/estree"] }, "@types/estree": { versions: ["1.0.6"] },
    postcss: { versions: ["8.4.49"], deps: ["nanoid", "picocolors", "source-map-js"] }, nanoid: { versions: ["3.3.8"] }, picocolors: { versions: ["1.1.1"] }, "source-map-js": { versions: ["1.2.1"] },
    "@vitejs/plugin-react": { versions: ["4.3.4"], deps: ["@babel/core", "react-refresh"] }, "@babel/core": { versions: ["7.26.0"] }, "react-refresh": { versions: ["0.14.2"] },
    eslint: { versions: ["10.13.0"], desc: "An AST-based pattern checker for JavaScript.", bin: ["eslint"], deps: ["@eslint/js", "espree", "esquery", "ajv", "chalk", "debug", "minimatch"] },
    "@eslint/js": { versions: ["10.0.1"] }, espree: { versions: ["10.3.0"] }, esquery: { versions: ["1.6.0"] }, ajv: { versions: ["6.12.6"] },
    chalk: { versions: ["4.1.2", "5.4.1"] }, debug: { versions: ["4.4.0"], deps: ["ms"] }, ms: { versions: ["2.1.3"] }, minimatch: { versions: ["3.1.2"] },
    globals: { versions: ["16.4.0"] },
    prettier: { versions: ["3.9.10"], desc: "Prettier is an opinionated code formatter", bin: ["prettier"] },
    "eslint-config-prettier": { versions: ["10.1.1"] },
    typescript: { versions: ["5.9.3"], bin: ["tsc"] },
    nodemon: { versions: ["3.1.9"], bin: ["nodemon"], deps: ["chokidar", "debug", "semver"] }, chokidar: { versions: ["3.6.0"] }, semver: { versions: ["7.6.3"] },
    express: { versions: ["4.21.2"], desc: "Fast, unopinionated, minimalist web framework", deps: ["body-parser", "cookie", "debug", "path-to-regexp", "qs", "send", "serve-static"] },
    "body-parser": { versions: ["1.20.3"] }, cookie: { versions: ["0.7.1"] }, "path-to-regexp": { versions: ["0.1.12"] }, qs: { versions: ["6.13.0"] }, send: { versions: ["0.19.0"] }, "serve-static": { versions: ["1.16.2"] }
  };
  const latest = name => REG[name].versions[REG[name].versions.length - 1];
  const cmpVer = (a, b) => { const x = a.split(".").map(Number), y = b.split(".").map(Number); for (let i = 0; i < 3; i++) if (x[i] !== y[i]) return x[i] - y[i]; return 0; };
  // ^1.2.3 تقبل حتى ما قبل 2.0.0، و ~1.2.3 حتى ما قبل 1.3.0
  const satisfies = (v, range) => {
    if (range === "*" || range === "latest") return true;
    const m = range.match(/^([~^]?)(\d+\.\d+\.\d+)$/);
    if (!m) return v === range;
    const [maj, min] = m[2].split(".").map(Number), [a, b] = v.split(".").map(Number);
    if (cmpVer(v, m[2]) < 0) return false;
    if (m[1] === "^") return maj === 0 ? a === 0 && b === min : a === maj;
    if (m[1] === "~") return a === maj && b === min;
    return v === m[2];
  };
  const maxSatisfying = (name, range) => REG[name].versions.filter(v => satisfies(v, range)).pop();
  const closure = names => {
    const seen = new Set(), stack = [...names];
    while (stack.length) { const n = stack.pop(); if (seen.has(n)) continue; seen.add(n); (REG[n].deps || []).forEach(d => stack.push(d)); }
    return seen;
  };

  // ---------- وحدات مبسطة لبعض الحزم حتى يعمل require في node ----------
  const pad2 = n => String(n).padStart(2, "0");
  const MODULES = {
    lodash: () => {
      const words = s => String(s).replace(/([a-z])([A-Z])/g, "$1 $2").split(/[^A-Za-z0-9؀-ۿ]+/).filter(Boolean);
      return {
        capitalize: s => String(s).charAt(0).toUpperCase() + String(s).slice(1).toLowerCase(),
        camelCase: s => words(s).map((w, i) => i ? w[0].toUpperCase() + w.slice(1).toLowerCase() : w.toLowerCase()).join(""),
        kebabCase: s => words(s).map(w => w.toLowerCase()).join("-"),
        chunk: (a, n = 1) => { const o = []; for (let i = 0; i < a.length; i += n) o.push(a.slice(i, i + n)); return o; },
        sum: a => a.reduce((x, y) => x + y, 0),
        mean: a => a.reduce((x, y) => x + y, 0) / a.length,
        max: a => (a.length ? Math.max(...a) : undefined), min: a => (a.length ? Math.min(...a) : undefined),
        uniq: a => [...new Set(a)],
        range: (a, b, s = 1) => { if (b === undefined) { b = a; a = 0; } const o = []; for (let i = a; i < b; i += s) o.push(i); return o; },
        groupBy: (a, f) => a.reduce((o, x) => { const k = typeof f === "function" ? f(x) : x[f]; (o[k] = o[k] || []).push(x); return o; }, {}),
        sortBy: (a, f) => [...a].sort((x, y) => { const p = typeof f === "function" ? f(x) : x[f], q = typeof f === "function" ? f(y) : y[f]; return p < q ? -1 : p > q ? 1 : 0; }),
        pick: (o, keys) => keys.reduce((r, k) => (k in o ? (r[k] = o[k], r) : r), {}),
        omit: (o, keys) => Object.keys(o).filter(k => !keys.includes(k)).reduce((r, k) => (r[k] = o[k], r), {}),
        isEmpty: v => v == null || (typeof v === "object" ? Object.keys(v).length === 0 : typeof v === "string" ? !v.length : true),
        cloneDeep: v => JSON.parse(JSON.stringify(v)),
        get: (o, p, d) => { const v = String(p).split(".").reduce((x, k) => (x == null ? x : x[k]), o); return v === undefined ? d : v; }
      };
    },
    dayjs: () => {
      const make = d => {
        const D = new Date(d.getTime());
        const api = {
          $d: D,
          format: (f = "YYYY-MM-DDTHH:mm:ssZ") => f.replace(/YYYY|MM|DD|HH|mm|ss|Z/g, t => ({ YYYY: D.getUTCFullYear(), MM: pad2(D.getUTCMonth() + 1), DD: pad2(D.getUTCDate()), HH: pad2(D.getUTCHours()), mm: pad2(D.getUTCMinutes()), ss: pad2(D.getUTCSeconds()), Z: "+00:00" })[t]),
          add: (n, u) => { const x = new Date(D); if (/^d/.test(u)) x.setUTCDate(x.getUTCDate() + n); else if (/^M|^mo/.test(u)) x.setUTCMonth(x.getUTCMonth() + n); else if (/^y/.test(u)) x.setUTCFullYear(x.getUTCFullYear() + n); else if (/^w/.test(u)) x.setUTCDate(x.getUTCDate() + 7 * n); return make(x); },
          subtract: (n, u) => api.add(-n, u),
          diff: (o, u = "ms") => { const ms = D - toDate(o); return /^d/.test(u) ? Math.trunc(ms / 864e5) : /^h/.test(u) ? Math.trunc(ms / 36e5) : ms; },
          isBefore: o => D < toDate(o), isAfter: o => D > toDate(o),
          year: () => D.getUTCFullYear(), month: () => D.getUTCMonth(), date: () => D.getUTCDate(), day: () => D.getUTCDay(),
          toISOString: () => D.toISOString(), valueOf: () => D.getTime(), toString: () => D.toUTCString()
        };
        return api;
      };
      const toDate = v => (v && v.$d ? v.$d : v === undefined ? new Date(Date.UTC(2025, 0, 6, 10, 0)) : new Date(typeof v === "string" && /^\d{4}-\d{2}-\d{2}$/.test(v) ? v + "T00:00:00Z" : v));
      return v => make(toDate(v));
    },
    slugify: () => (s, o = {}) => {
      const sep = typeof o === "string" ? o : o.replacement || "-";
      let r = String(s).trim().replace(/[^\w\s؀-ۿ-]/g, "").replace(/[\s_-]+/g, sep);
      return o.lower ? r.toLowerCase() : r;
    }
  };

  // ---------- تنسيق console.log كما يفعل Node (util.inspect مبسّط) ----------
  const ident = /^[A-Za-z_$][\w$]*$/;
  const quote = s => (s.includes("'") && !s.includes('"') ? `"${s}"` : `'${s.replace(/'/g, "\\'")}'`);
  function inspect(v, depth = 0, seen = []) {
    if (typeof v === "string") return depth ? quote(v) : v;
    if (typeof v === "number") return Object.is(v, -0) ? "-0" : String(v);
    if (typeof v === "bigint") return v + "n";
    if (v === undefined || v === null || typeof v === "boolean") return String(v);
    if (typeof v === "symbol") return v.toString();
    if (typeof v === "function") return /^class\s/.test(Function.prototype.toString.call(v)) ? `[class ${v.name}]` : `[Function: ${v.name || "(anonymous)"}]`;
    if (v instanceof Error) return depth ? `[${v.name}: ${v.message}]` : `${v.name}: ${v.message}`;
    if (v instanceof Date) return v.toISOString();
    if (v instanceof RegExp) return String(v);
    if (seen.includes(v)) return "[Circular *1]";
    if (v instanceof Promise) return "Promise { <pending> }";
    if (depth > 2) return Array.isArray(v) ? "[Array]" : "[Object]";
    const s2 = [...seen, v];
    let parts, open, close, prefix = "";
    if (Array.isArray(v)) { parts = v.map(x => inspect(x, depth + 1, s2)); open = "["; close = "]"; }
    else if (v instanceof Map) { parts = [...v].map(([k, x]) => `${inspect(k, depth + 1, s2)} => ${inspect(x, depth + 1, s2)}`); prefix = `Map(${v.size}) `; open = "{"; close = "}"; }
    else if (v instanceof Set) { parts = [...v].map(x => inspect(x, depth + 1, s2)); prefix = `Set(${v.size}) `; open = "{"; close = "}"; }
    else {
      parts = Object.keys(v).map(k => `${ident.test(k) ? k : quote(k)}: ${inspect(v[k], depth + 1, s2)}`);
      const cn = v.constructor && v.constructor !== Object && v.constructor.name;
      if (cn) prefix = cn + " ";
      if (Object.getPrototypeOf(v) === null) prefix = "[Object: null prototype] ";
      open = "{"; close = "}";
    }
    if (!parts.length) return prefix + open + close;
    const one = `${prefix}${open} ${parts.join(", ")} ${close}`;
    if (one.length + depth * 2 <= 72 && !parts.some(p => p.includes("\n"))) return one;
    const pad = "  ".repeat(depth + 1);
    return `${prefix}${open}\n${parts.map(p => pad + p).join(",\n")}\n${"  ".repeat(depth)}${close}`;
  }
  const format = args => {
    if (typeof args[0] === "string" && /%[sdioj]/.test(args[0]) && args.length > 1) {
      let i = 1;
      const first = args[0].replace(/%[sdioj]/g, m => (i < args.length ? (m === "%d" || m === "%i" ? String(parseInt(args[i++])) : m === "%s" ? String(args[i++]) : inspect(args[i++], 1)) : m));
      return [first, ...args.slice(i).map(a => inspect(a))].join(" ");
    }
    return args.map(a => inspect(a)).join(" ");
  };

  // ---------- تحويل ESM إلى CommonJS (يكفي لكود الدروس) ----------
  function esmToCjs(code) {
    const tail = [];
    code = code.replace(/^\s*import\s+([\w$]+)\s*,\s*\{([^}]*)\}\s*from\s*(['"])(.+?)\3;?/gm, (_, d, names, q, m) => `const ${d} = __def(require(${JSON.stringify(m)})); const {${names.replace(/\s+as\s+/g, ": ")}} = require(${JSON.stringify(m)});`)
      .replace(/^\s*import\s+\*\s+as\s+([\w$]+)\s+from\s*(['"])(.+?)\2;?/gm, (_, n, q, m) => `const ${n} = require(${JSON.stringify(m)});`)
      .replace(/^\s*import\s+\{([^}]*)\}\s*from\s*(['"])(.+?)\2;?/gm, (_, names, q, m) => `const {${names.replace(/\s+as\s+/g, ": ")}} = require(${JSON.stringify(m)});`)
      .replace(/^\s*import\s+([\w$]+)\s+from\s*(['"])(.+?)\2;?/gm, (_, n, q, m) => `const ${n} = __def(require(${JSON.stringify(m)}));`)
      .replace(/^\s*import\s*(['"])(.+?)\1;?/gm, (_, q, m) => `require(${JSON.stringify(m)});`)
      .replace(/^export\s+default\s+(async\s+)?function\s*([\w$]*)/gm, (_, a, n) => { const name = n || "__default"; tail.push(`module.exports.default = ${name};`); return `${a || ""}function ${name}`; })
      .replace(/^export\s+default\s+class\s+([\w$]+)/gm, (_, n) => { tail.push(`module.exports.default = ${n};`); return `class ${n}`; })
      .replace(/^export\s+default\s+/gm, "module.exports.default = ")
      .replace(/^export\s+(async\s+)?(const|let|var|function\*?|class)\s+([\w$]+)/gm, (_, a, kw, n) => { tail.push(`module.exports.${n} = ${n};`); return `${a || ""}${kw} ${n}`; })
      .replace(/^export\s*\{([^}]*)\};?/gm, (_, names) => { names.split(",").map(x => x.trim()).filter(Boolean).forEach(x => { const [a, b] = x.split(/\s+as\s+/); tail.push(`module.exports.${b || a} = ${a};`); }); return ""; });
    return code + "\n" + tail.join("\n");
  }

  // ---------- تشغيل node ----------
  async function runNode(api, file, argv, envExtra = {}) {
    const { world, repo, say, err } = api;
    const r = repo();
    const cwdPath = "/project" + (world.cwd === "." ? "" : "/" + world.cwd);
    const timers = [];
    let clock = 0;
    const pkg = (() => { try { return JSON.parse(r.files["package.json"] || "{}"); } catch (e) { return {}; } })();
    const cache = {};
    const out = (...a) => say(format(a));
    // stderr لا يُفشل الأمر، فقط الاستثناءات ورمز الخروج
    const errOut = (...a) => format(a).split("\n").forEach(t => api.out.push({ kind: "err", text: t, soft: true }));
    const consoleObj = { log: out, info: out, debug: out, warn: errOut, error: errOut, table: d => out(d) };
    const process = {
      argv: ["/usr/local/bin/node", `${cwdPath}/${file}`, ...argv], env: Object.assign({ NODE_ENV: undefined }, envExtra),
      version: NODE_VERSION, platform: "linux", cwd: () => cwdPath, exit: code => { throw { __exit: code || 0 }; },
      exitCode: 0
    };
    const resolvePath = (from, spec) => {
      const base = from.includes("/") ? from.split("/").slice(0, -1) : [];
      spec.split("/").forEach(seg => { if (seg === "..") base.pop(); else if (seg !== ".") base.push(seg); });
      const p = base.join("/");
      for (const c of [p, p + ".js", p + ".mjs", p + ".cjs", p + ".json", p + "/index.js"]) if (r.files[c] !== undefined) return c;
      return null;
    };
    const builtins = {
      fs: {
        readFileSync: (f, enc) => { const p = String(f).replace(/^\.\//, "").replace(cwdPath + "/", ""); if (r.files[p] === undefined) { const e = new Error(`ENOENT: no such file or directory, open '${f}'`); e.code = "ENOENT"; throw e; } return r.files[p]; },
        writeFileSync: (f, data) => { r.files[String(f).replace(/^\.\//, "").replace(cwdPath + "/", "")] = String(data); },
        existsSync: f => r.files[String(f).replace(/^\.\//, "")] !== undefined,
        readdirSync: d => { const pre = String(d).replace(/^\.\/?/, ""); const set = new Set(); Object.keys(r.files).forEach(p => { if (!pre || p.startsWith(pre + "/")) set.add(p.slice(pre ? pre.length + 1 : 0).split("/")[0]); }); return [...set].sort(); }
      },
      path: {
        join: (...a) => a.join("/").replace(/\/+/g, "/").replace(/\/\.\//g, "/").replace(/^\.\//, ""),
        basename: (p, ext) => { const b = p.split("/").pop(); return ext && b.endsWith(ext) ? b.slice(0, -ext.length) : b; },
        extname: p => { const b = p.split("/").pop(); const i = b.lastIndexOf("."); return i > 0 ? b.slice(i) : ""; },
        dirname: p => p.split("/").slice(0, -1).join("/") || ".",
        resolve: (...a) => cwdPath + "/" + a.join("/").replace(/^\.\//, ""), sep: "/"
      },
      os: { platform: () => "linux", EOL: "\n", cpus: () => new Array(4).fill({ model: "CPU" }), homedir: () => "/home/student" },
      url: { fileURLToPath: u => String(u).replace(/^file:\/\//, "") }
    };
    builtins["node:fs"] = builtins.fs; builtins["node:path"] = builtins.path; builtins["node:os"] = builtins.os; builtins["node:url"] = builtins.url;
    const loadModule = (spec, from) => {
      if (builtins[spec]) return builtins[spec];
      if (/^\.{1,2}\//.test(spec)) {
        const p = resolvePath(from, spec);
        if (!p) throw Object.assign(new Error(`Cannot find module '${spec}'\nRequire stack:\n- ${cwdPath}/${from}`), { code: "MODULE_NOT_FOUND" });
        if (cache[p]) return cache[p].exports;
        if (p.endsWith(".json")) return (cache[p] = { exports: JSON.parse(r.files[p]) }).exports;
        const mod = cache[p] = { exports: {} };
        exec(p, mod);
        return mod.exports;
      }
      const name = spec.startsWith("@") ? spec.split("/").slice(0, 2).join("/") : spec.split("/")[0];
      if (r.files[`node_modules/${name}/package.json`] === undefined) throw Object.assign(new Error(`Cannot find module '${spec}'\nRequire stack:\n- ${cwdPath}/${from}`), { code: "MODULE_NOT_FOUND" });
      if (!MODULES[name]) throw new Error(`هذه الحزمة لا تعمل داخل المحاكي: ${name}`);
      return MODULES[name]();
    };
    const exec = (p, mod) => {
      const isEsm = p.endsWith(".mjs") || (pkg.type === "module" && !p.endsWith(".cjs"));
      let code = r.files[p];
      if (isEsm) code = esmToCjs(code.replace(/import\.meta\.url/g, JSON.stringify(`file://${cwdPath}/${p}`)).replace(/import\.meta\.dirname/g, JSON.stringify(cwdPath)));
      else if (/^\s*(import|export)\s/m.test(code)) {
        throw new SyntaxError("Cannot use import statement outside a module");
      }
      const req = s => loadModule(s, p);
      const fn = new Function("require", "module", "exports", "console", "process", "setTimeout", "setInterval", "clearTimeout", "clearInterval", "__filename", "__dirname", "__def",
        `"use strict";\n${code}`);
      fn(req, mod, mod.exports, consoleObj, process, setT, setT, clearT, clearT, `${cwdPath}/${p}`, cwdPath, m => (m && m.default !== undefined ? m.default : m));
    };
    // مؤقتات افتراضية: تُنفَّذ بترتيب أوقاتها بعد انتهاء الكود المتزامن
    let tid = 0;
    function setT(fn, ms = 0, ...args) { const t = { id: ++tid, at: clock + ms, fn, args }; timers.push(t); return t.id; }
    function clearT(id) { const i = timers.findIndex(t => t.id === id); if (i >= 0) timers.splice(i, 1); }
    const fail = e => {
      if (e && e.__exit !== undefined) { if (e.__exit) world.failed = true; return true; }
      err(`${cwdPath}/${file}`);
      err(e instanceof Error ? `${e.name}: ${e.message}` : `Uncaught ${inspect(e, 1)}`);
      err("");
      err(`Node.js ${NODE_VERSION}`);
      world.failed = true;
      return true;
    };
    if (r.files[file] === undefined) {
      err(`node:internal/modules/cjs/loader:1228\n  throw err;\n  ^\n\nError: Cannot find module '${cwdPath}/${file}'\n\nNode.js ${NODE_VERSION}`);
      world.failed = true;
      return;
    }
    let unhandled = null;
    try {
      exec(file, cache[file] = { exports: {} });
      for (let guard = 0; guard < 10000; guard++) {
        await new Promise(res => (typeof setImmediate === "function" ? setImmediate(res) : setTimeout(res, 0)));
        if (!timers.length) break;
        timers.sort((a, b) => a.at - b.at || a.id - b.id);
        const t = timers.shift();
        clock = t.at;
        t.fn(...t.args);
      }
    } catch (e) { fail(e); return; }
    if (unhandled) fail(unhandled);
  }

  // ---------- package.json ----------
  const readPkg = r => { try { return JSON.parse(r.files["package.json"]); } catch (e) { return null; } };
  const writePkg = (r, p) => {
    ["dependencies", "devDependencies"].forEach(k => { if (p[k]) { if (Object.keys(p[k]).length) p[k] = sortObj(p[k]); else delete p[k]; } });
    r.files["package.json"] = json(p);
  };
  const installed = r => Object.keys(r.files).filter(f => /^node_modules\/(@[^/]+\/)?[^/@]+\/package\.json$/.test(f)).map(f => f.slice(13, -13));
  const installedVersion = (r, n) => { try { return JSON.parse(r.files[`node_modules/${n}/package.json`]).version; } catch (e) { return null; } };
  const writeLock = (r, p) => {
    const lock = { name: p.name, version: p.version, lockfileVersion: 3, requires: true, packages: { "": sortObj({ name: p.name, version: p.version, ...(p.dependencies ? { dependencies: p.dependencies } : {}), ...(p.devDependencies ? { devDependencies: p.devDependencies } : {}) }) } };
    const dev = new Set(closure(Object.keys(p.devDependencies || {}).filter(n => REG[n])));
    const prod = closure(Object.keys(p.dependencies || {}).filter(n => REG[n]));
    installed(r).sort().forEach(n => {
      const v = installedVersion(r, n);
      const e = { version: v, resolved: `https://registry.npmjs.org/${n}/-/${n.split("/").pop()}-${v}.tgz`, license: "MIT" };
      if (dev.has(n) && !prod.has(n)) e.dev = true;
      lock.packages["node_modules/" + n] = e;
    });
    r.files["package-lock.json"] = json(lock);
  };
  const setInstalled = (r, n, v) => { r.files[`node_modules/${n}/package.json`] = json({ name: n, version: v, description: REG[n].desc || "", license: "MIT" }); };
  const removePkgDir = (r, n) => Object.keys(r.files).forEach(f => { if (f.startsWith(`node_modules/${n}/`)) delete r.files[f]; });
  // يُبقي node_modules مطابقاً لـ package.json ويُرجع عدد المضاف والمحذوف والمتغيّر
  // forced: إصدارات طلبها المستخدم صراحة (npm install pkg@1.2.3) أو حدّثها npm update
  const sync = (r, forced = {}) => {
    const p = readPkg(r);
    const before = {};
    installed(r).forEach(n => { before[n] = installedVersion(r, n); });
    const wanted = {};
    const all = Object.assign({}, p.dependencies || {}, p.devDependencies || {});
    Object.keys(all).forEach(n => {
      if (!REG[n]) return;
      const cur = before[n];
      wanted[n] = forced[n] || (cur && satisfies(cur, all[n]) ? cur : maxSatisfying(n, all[n]) || latest(n));
    });
    closure(Object.keys(wanted)).forEach(n => { if (!wanted[n]) wanted[n] = before[n] || latest(n); });
    let added = 0, removed = 0, changed = 0;
    Object.keys(before).forEach(n => { if (!wanted[n]) { removePkgDir(r, n); removed++; } });
    Object.keys(wanted).forEach(n => {
      if (!before[n]) { setInstalled(r, n, wanted[n]); added++; }
      else if (before[n] !== wanted[n]) { setInstalled(r, n, wanted[n]); changed++; }
    });
    writeLock(r, p);
    return { added, removed, changed, total: Object.keys(wanted).length };
  };
  const report = (say, { added, removed, changed, total }) => {
    const parts = [];
    if (added) parts.push(`added ${plural(added, "package", "packages")}`);
    if (removed) parts.push(`removed ${plural(removed, "package", "packages")}`);
    if (changed) parts.push(`changed ${plural(changed, "package", "packages")}`);
    say("");
    say(parts.length ? `${parts.join(", ")}, and audited ${plural(total + 1, "package", "packages")} in 1s` : `up to date, audited ${plural(total + 1, "package", "packages")} in 1s`);
    say("");
    say("found 0 vulnerabilities");
  };

  // ---------- قوالب Vite ----------
  const TEMPLATES = {
    vanilla: name => ({
      ".gitignore": "# Logs\nlogs\n*.log\nnpm-debug.log*\n\nnode_modules\ndist\ndist-ssr\n*.local\n\n# Editor directories and files\n.vscode/*\n!.vscode/extensions.json\n.idea\n.DS_Store\n",
      "index.html": `<!doctype html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8" />\n    <link rel="icon" type="image/svg+xml" href="/vite.svg" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <title>Vite App</title>\n  </head>\n  <body>\n    <div id="app"></div>\n    <script type="module" src="/src/main.js"></script>\n  </body>\n</html>\n`,
      "package.json": json({ name, private: true, version: "0.0.0", type: "module", scripts: { dev: "vite", build: "vite build", preview: "vite preview" }, devDependencies: { vite: "^6.0.5" } }),
      "public/vite.svg": `<svg xmlns="http://www.w3.org/2000/svg" width="31.88" height="32" viewBox="0 0 256 257"><path fill="#646cff" d="M255 37L134 254a7 7 0 0 1-12 0L2 37a7 7 0 0 1 7-10l121 22a7 7 0 0 0 2 0l117-22a7 7 0 0 1 6 10Z"/></svg>\n`,
      "src/main.js": `import './style.css'\nimport { setupCounter } from './counter.js'\n\ndocument.querySelector('#app').innerHTML = \`\n  <div>\n    <h1>Hello Vite!</h1>\n    <div class="card">\n      <button id="counter" type="button"></button>\n    </div>\n  </div>\n\`\n\nsetupCounter(document.querySelector('#counter'))\n`,
      "src/counter.js": `export function setupCounter(element) {\n  let counter = 0\n  const setCounter = (count) => {\n    counter = count\n    element.innerHTML = \`count is \${counter}\`\n  }\n  element.addEventListener('click', () => setCounter(counter + 1))\n  setCounter(0)\n}\n`,
      "src/style.css": `:root {\n  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;\n  line-height: 1.5;\n  color-scheme: light dark;\n}\n\nbody {\n  margin: 0;\n  display: flex;\n  place-items: center;\n  min-height: 100vh;\n}\n\nbutton {\n  border-radius: 8px;\n  padding: 0.6em 1.2em;\n  cursor: pointer;\n}\n`
    }),
    react: name => ({
      ".gitignore": TEMPLATES.vanilla(name)[".gitignore"],
      "index.html": TEMPLATES.vanilla(name)["index.html"].replace("Vite App", "Vite + React").replace('id="app"', 'id="root"').replace("/src/main.js", "/src/main.jsx"),
      "package.json": json({ name, private: true, version: "0.0.0", type: "module", scripts: { dev: "vite", build: "vite build", lint: "eslint .", preview: "vite preview" }, dependencies: { react: "^18.3.1", "react-dom": "^18.3.1" }, devDependencies: { "@vitejs/plugin-react": "^4.3.4", eslint: "^10.13.0", "@eslint/js": "^10.0.1", globals: "^16.4.0", vite: "^6.0.5" } }),
      "public/vite.svg": TEMPLATES.vanilla(name)["public/vite.svg"],
      "vite.config.js": `import { defineConfig } from 'vite'\nimport react from '@vitejs/plugin-react'\n\n// https://vite.dev/config/\nexport default defineConfig({\n  plugins: [react()],\n})\n`,
      "src/main.jsx": `import { StrictMode } from 'react'\nimport { createRoot } from 'react-dom/client'\nimport './index.css'\nimport App from './App.jsx'\n\ncreateRoot(document.getElementById('root')).render(\n  <StrictMode>\n    <App />\n  </StrictMode>,\n)\n`,
      "src/App.jsx": `import { useState } from 'react'\nimport './App.css'\n\nfunction App() {\n  const [count, setCount] = useState(0)\n\n  return (\n    <>\n      <h1>Vite + React</h1>\n      <button onClick={() => setCount((count) => count + 1)}>\n        count is {count}\n      </button>\n    </>\n  )\n}\n\nexport default App\n`,
      "src/index.css": TEMPLATES.vanilla(name)["src/style.css"],
      "src/App.css": "#root {\n  max-width: 1280px;\n  margin: 0 auto;\n  text-align: center;\n}\n"
    })
  };
  // أحجام تقريبية لمكتبات تُضمَّن في الحزمة النهائية
  const VENDOR = { react: [142300, 11], "react-dom": [0, 20], lodash: [71400, 1], dayjs: [7100, 1], axios: [36800, 30], slugify: [2100, 1] };

  // ---------- قراءة ملفات الإعدادات المكتوبة بـ JavaScript ----------
  async function loadConfigFile(api, file, mods, ctx) {
    const r = api.repo();
    const code = esmToCjs(r.files[file].replace(/import\.meta\.url/g, JSON.stringify("file:///project/" + file)).replace(/import\.meta\.dirname/g, '"/project"'));
    const mod = { exports: {} };
    const req = s => {
      if (mods[s] !== undefined) return mods[s];
      const name = s.startsWith("@") ? s.split("/").slice(0, 2).join("/") : s.split("/")[0];
      if (r.files[`node_modules/${name}/package.json`] === undefined && !["path", "node:path", "url", "node:url"].includes(s)) throw new Error(`Cannot find package '${s}' imported from /project/${file}`);
      if (mods[s] === undefined) throw new Error(`Cannot find package '${s}'`);
      return mods[s];
    };
    new Function("require", "module", "exports", "__dirname", "__def", "process", code)(req, mod, mod.exports, "/project", m => (m && m.default !== undefined ? m.default : m), { env: {} });
    let cfg = mod.exports.default !== undefined ? mod.exports.default : mod.exports;
    if (typeof cfg === "function") cfg = await cfg(ctx || {});
    return cfg;
  }
  const pathMod = { resolve: (...a) => a.join("/").replace(/\/+/g, "/").replace(/\/\.\//g, "/"), join: (...a) => a.join("/").replace(/\/+/g, "/"), dirname: p => p.split("/").slice(0, -1).join("/") };
  const urlMod = { fileURLToPath: u => String(u && u.href || u).replace(/^file:\/\//, "") };

  async function viteConfig(api, mode, command) {
    const r = api.repo();
    const file = ["vite.config.js", "vite.config.mjs", "vite.config.ts"].find(f => r.files[f] !== undefined);
    if (!file) return {};
    const mods = {
      vite: { defineConfig: c => c, loadEnv: m => loadEnv(r, m, "VITE_") },
      "@vitejs/plugin-react": () => [{ name: "vite:react-babel" }, { name: "vite:react-refresh" }],
      path: pathMod, "node:path": pathMod, url: urlMod, "node:url": urlMod
    };
    return loadConfigFile(api, file, mods, { mode, command });
  }
  // ملفات البيئة بترتيب أولوية Vite: .env ثم .env.local ثم .env.[mode] ثم .env.[mode].local
  function loadEnv(r, mode, prefix = "VITE_") {
    const env = {};
    [".env", ".env.local", `.env.${mode}`, `.env.${mode}.local`].forEach(f => {
      if (r.files[f] === undefined) return;
      r.files[f].split("\n").forEach(l => {
        const m = l.match(/^\s*([\w.]+)\s*=\s*(.*)\s*$/);
        if (m && !l.trim().startsWith("#")) env[m[1]] = m[2].replace(/^(['"])(.*)\1$/, "$2");
      });
    });
    const out = {};
    Object.keys(env).forEach(k => { if (k.startsWith(prefix)) out[k] = env[k]; });
    return out;
  }

  async function vite(args, api) {
    const { repo, say, err, world } = api;
    const r = repo();
    const sub = ["build", "preview", "dev", "serve"].includes(args[0]) ? args[0] : "dev";
    const opt = n => { const i = args.indexOf(n); return i >= 0 ? args[i + 1] : undefined; };
    const mode = opt("--mode") || (sub === "build" ? "production" : "development");
    let cfg;
    try { cfg = await viteConfig(api, mode, sub === "build" ? "build" : "serve"); }
    catch (e) { err(`failed to load config from /project/vite.config.js\nerror when starting dev server:\n${e.name}: ${e.message}`); world.failed = true; return; }
    const server = cfg.server || {}, preview = cfg.preview || {};
    const hostLine = (port, host) => {
      say(`  ➜  Local:   http://localhost:${port}${cfg.base && cfg.base !== "/" ? cfg.base : "/"}`);
      say(host ? `  ➜  Network: http://192.168.1.10:${port}${cfg.base && cfg.base !== "/" ? cfg.base : "/"}` : "  ➜  Network: use --host to expose");
      say("  ➜  press h + enter to show help");
    };
    if (sub === "dev" || sub === "serve") {
      if (r.files["index.html"] === undefined) say("");
      const port = +(opt("--port") || server.port || 5173);
      say("");
      say(`  VITE v${VITE_VERSION}  ready in ${120 + Object.keys(r.files).filter(f => f.startsWith("src/")).length * 17} ms`);
      say("");
      hostLine(port, args.includes("--host") || server.host);
      return;
    }
    if (sub === "preview") {
      const outDir = (cfg.build && cfg.build.outDir) || "dist";
      if (!Object.keys(r.files).some(f => f.startsWith(outDir + "/"))) { err(`The directory "${outDir}" does not exist. Did you build your project?`); world.failed = true; return; }
      hostLine(+(opt("--port") || preview.port || 4173), args.includes("--host"));
      return;
    }
    // ---------- البناء ----------
    const build = cfg.build || {};
    const outDir = opt("--outDir") || build.outDir || "dist";
    const base = (opt("--base") || cfg.base || "/").replace(/\/?$/, "/");
    const env = Object.assign(loadEnv(r, mode, cfg.envPrefix || "VITE_"), { MODE: mode, BASE_URL: base });
    const alias = (cfg.resolve && cfg.resolve.alias) || {};
    say(`vite v${VITE_VERSION} building for ${mode}...`);
    const html = r.files["index.html"];
    if (html === undefined) { err(`Could not resolve entry module "index.html".`); world.failed = true; return; }
    const entry = (html.match(/<script[^>]*type="module"[^>]*src="([^"]+)"/) || [])[1];
    const order = [], css = [], vendors = new Set();
    const visit = (p, from) => {
      if (order.includes(p)) return;
      if (r.files[p] === undefined) throw new Error(`[vite]: Rollup failed to resolve import "${p}" from "/project/${from}".`);
      order.push(p);
      const src = r.files[p];
      [...src.matchAll(/^\s*import\s+(?:[^'"]*?\s+from\s+)?['"]([^'"]+)['"]/gm)].forEach(m => {
        let spec = m[1];
        Object.keys(alias).forEach(a => { if (spec === a || spec.startsWith(a + "/")) spec = String(alias[a]).replace(/^\/project\//, "").replace(/^\.?\//, "") + spec.slice(a.length); });
        if (/^[./]/.test(spec) || order.length && !/^[@\w]/.test(spec) || spec.startsWith("src/")) {
          const dir = p.split("/").slice(0, -1);
          let target = spec.startsWith("/") ? spec.slice(1) : spec.startsWith("src/") ? spec : [...dir, ...spec.split("/")].reduce((a, s) => (s === ".." ? a.slice(0, -1) : s === "." ? a : [...a, s]), []).join("/");
          if (r.files[target] === undefined) target = [".js", ".jsx", ".ts", "/index.js"].map(e => target + e).find(t => r.files[t] !== undefined) || target;
          if (target.endsWith(".css")) { if (r.files[target] === undefined) throw new Error(`[vite]: Rollup failed to resolve import "${m[1]}" from "/project/${p}".`); if (!css.includes(target)) css.push(target); }
          else if (/\.(svg|png|jpg)$/.test(target)) { /* أصول صغيرة تُضمَّن داخل الحزمة */ }
          else visit(target, p);
        } else {
          const name = spec.startsWith("@") ? spec.split("/").slice(0, 2).join("/") : spec.split("/")[0];
          if (r.files[`node_modules/${name}/package.json`] === undefined) throw new Error(`[vite]: Rollup failed to resolve import "${spec}" from "/project/${p}".\nThis is most likely unintended because it can break your application at runtime.`);
          vendors.add(name);
        }
      });
    };
    try {
      if (!entry) throw new Error("لم يُعثر على <script type=\"module\" src=\"...\"> في index.html");
      visit(entry.replace(/^\//, ""), "index.html");
      (html.match(/<link[^>]+rel="stylesheet"[^>]+href="([^"]+)"/g) || []).forEach(l => { const h = l.match(/href="([^"]+)"/)[1]; if (!/^https?:/.test(h)) css.push(h.replace(/^\//, "")); });
    } catch (e) {
      say(`✓ ${order.length} modules transformed.`);
      err(`x Build failed in 52ms\nerror during build:\n${e.message}`);
      world.failed = true;
      return;
    }
    // تحويل كل وحدة: حذف الاستيراد والتصدير والتعليقات، واستبدال متغيرات البيئة
    const envReplace = code => code.replace(/import\.meta\.env\.(\w+)/g, (_, k) => (k === "DEV" ? "!1" : k === "PROD" ? "!0" : k === "SSR" ? "!1" : env[k] !== undefined ? JSON.stringify(env[k]) : "void 0"));
    const strip = code => code
      .replace(/^\s*import\s+(?:[^'"]*?\s+from\s+)?['"][^'"]+['"];?[ \t]*$/gm, "")
      .replace(/^export\s+default\s+/gm, "").replace(/^export\s+(?=(async\s+)?(const|let|var|function|class)\b)/gm, "").replace(/^export\s*\{[^}]*\};?/gm, "")
      .replace(/\/\*[\s\S]*?\*\//g, "").replace(/^\s*\/\/.*$/gm, "")
      .split("\n").map(l => l.trim()).filter(Boolean).join("\n");
    const modules = order.slice().reverse();
    const vendorBytes = [...vendors].reduce((a, v) => a + (VENDOR[v] ? VENDOR[v][0] : 4000), 0);
    const jsBody = modules.map(m => strip(envReplace(r.files[m]))).join("\n");
    const jsCode = (vendors.size ? `/* ${[...vendors].join(", ")} */\n` : "") + `(function(){\n${jsBody}\n})();\n`;
    const cssCode = css.map(c => r.files[c].replace(/\/\*[\s\S]*?\*\//g, "").replace(/\s*([{}:;,])\s*/g, "$1").replace(/\s+/g, " ").replace(/;}/g, "}").trim()).join("");
    const emptyOut = build.emptyOutDir !== false;
    if (emptyOut) Object.keys(r.files).forEach(f => { if (f.startsWith(outDir + "/")) delete r.files[f]; });
    const assets = build.assetsDir || "assets";
    const files = [];
    const jsName = `${outDir}/${assets}/index-${hashOf(jsCode)}.js`;
    const cssName = cssCode ? `${outDir}/${assets}/index-${hashOf(cssCode)}.css` : null;
    let outHtml = html.replace(/href="\/(?!\/)/g, `href="${base}`).replace(/\s*<script[^>]*type="module"[^>]*src="[^"]+"[^>]*><\/script>/, "")
      .replace(/\s*<link[^>]+rel="stylesheet"[^>]+href="(?!https?:)[^"]+"[^>]*>/g, "")
      .replace(/(\s*)<\/head>/, `$1  <script type="module" crossorigin src="${base}${assets}/${jsName.split("/").pop()}"></script>${cssName ? `$1  <link rel="stylesheet" crossorigin href="${base}${assets}/${cssName.split("/").pop()}">` : ""}$1</head>`);
    r.files[`${outDir}/index.html`] = outHtml;
    files.push([`${outDir}/index.html`, byteLen(outHtml)]);
    Object.keys(r.files).filter(f => f.startsWith("public/")).forEach(f => { r.files[`${outDir}/${f.slice(7)}`] = r.files[f]; });
    if (cssName) { r.files[cssName] = cssCode + "\n"; files.push([cssName, byteLen(cssCode)]); }
    r.files[jsName] = jsCode;
    files.push([jsName, byteLen(jsCode) + vendorBytes]);
    const transformed = order.length + css.length + 1 + [...vendors].reduce((a, v) => a + (VENDOR[v] ? VENDOR[v][1] : 1), 0);
    say(`✓ ${plural(transformed, "module", "modules")} transformed.`);
    const w = Math.max(...files.map(f => f[0].length)) + 2, sw = Math.max(...files.map(f => kb(f[1]).length));
    const gz = n => kb(Math.round(Math.min(n, 120 + n * 0.42)));
    const gw = Math.max(...files.map(f => gz(f[1]).length));
    files.forEach(([f, n]) => say(`${f.padEnd(w)}${kb(n).padStart(sw)} kB │ gzip: ${gz(n).padStart(gw)} kB`));
    say(`✓ built in ${40 + transformed * 9}ms`);
  }

  // ---------- ESLint ----------
  async function eslint(args, api) {
    const { repo, say, err, world } = api;
    const r = repo();
    const fix = args.includes("--fix");
    const targets = args.filter(a => !a.startsWith("-"));
    const file = ["eslint.config.js", "eslint.config.mjs", "eslint.config.cjs"].find(f => r.files[f] !== undefined);
    if (!file) {
      err(`Oops! Something went wrong! :(\n\nESLint: 10.13.0\n\nESLint couldn't find an eslint.config.(js|mjs|cjs) file.\n\nFrom ESLint v9.0.0, the default configuration file is now eslint.config.js.`);
      world.failed = true;
      return;
    }
    const E = await getESLint();
    const X = CW.eslintExtras;
    const toObj = (list, v) => list.reduce((o, k) => (o[k] = v, o), {});
    const prettierOff = ["semi", "quotes", "indent", "comma-dangle", "max-len", "no-extra-semi", "no-mixed-spaces-and-tabs", "arrow-parens", "brace-style", "comma-spacing", "key-spacing", "keyword-spacing", "object-curly-spacing", "space-before-function-paren", "space-infix-ops", "eol-last", "no-trailing-spaces", "no-multiple-empty-lines", "jsx-quotes", "quote-props"];
    const flat = c => (Array.isArray(c) ? c.flatMap(flat) : [c]);
    const mods = {
      "@eslint/js": { configs: { recommended: { rules: Object.assign({}, X.recommended) }, all: { rules: {} } } },
      globals: { browser: toObj(X.browser, "readonly"), node: toObj(X.node, "readonly"), es2021: {}, builtin: {} },
      "eslint/config": { defineConfig: (...a) => flat(a), globalIgnores: (a) => ({ ignores: a }) },
      "eslint-config-prettier": { rules: toObj(prettierOff, "off") },
      "eslint-config-prettier/flat": { rules: toObj(prettierOff, "off") }
    };
    let config;
    try { config = flat(await loadConfigFile(api, file, mods)); }
    catch (e) { err(`Oops! Something went wrong! :(\n\nESLint: 10.13.0\n\n${e.name}: ${e.message}`); world.failed = true; return; }
    // التجاهل: node_modules و .git دائماً، ثم ignores العامة في الإعدادات
    const globalIgnores = config.filter(c => c.ignores && Object.keys(c).length === 1).flatMap(c => c.ignores);
    const glob = p => new RegExp("^" + p.replace(/\/$/, "/**").replace(/[.+^${}()|[\]\\]/g, "\\$&").replace(/\*\*\/?/g, "\u0000").replace(/\*/g, "[^/]*").replace(/\u0000/g, ".*") + "$");
    const isIgnored = f => /(^|\/)node_modules\//.test(f) || globalIgnores.some(p => glob(p).test(f) || glob(p.replace(/\/?$/, "/**")).test(f));
    const exts = /\.(js|mjs|cjs|jsx)$/;
    const all = Object.keys(r.files).sort();
    let files = (targets.length ? targets : ["."]).flatMap(t => {
      t = t.replace(/^\.\//, "").replace(/\/$/, "");
      if (t === "." || t === "") return all.filter(f => exts.test(f));
      if (r.files[t] !== undefined) return [t];
      return all.filter(f => f.startsWith(t + "/") && exts.test(f));
    }).filter(f => !isIgnored(f));
    files = [...new Set(files)];
    const linter = new E.Linter();
    // بيئة افتراضية: ES حديثة ووحدات، كما في ESLint الحقيقي
    const base = { languageOptions: { ecmaVersion: "latest", sourceType: "module" } };
    const results = [];
    for (const f of files) {
      const appliesTo = c => !c.files || c.files.some(p => glob(p).test(f) || glob("**/" + p).test(f));
      const cfgs = [base, ...config.filter(c => !(c.ignores && Object.keys(c).length === 1)).filter(c => appliesTo(c) && !(c.ignores && c.ignores.some(p => glob(p).test(f))))]
        .map(c => { const o = Object.assign({}, c); delete o.files; delete o.ignores; delete o.name; delete o.plugins; return o; });
      if (f.endsWith(".cjs")) cfgs.push({ languageOptions: { sourceType: "commonjs" } });
      if (f.endsWith(".jsx")) cfgs.push({ languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } } });
      if (fix) {
        const res = linter.verifyAndFix(r.files[f], cfgs, { filename: f });
        if (res.fixed) r.files[f] = res.output;
        results.push([f, res.messages]);
      } else results.push([f, linter.verify(r.files[f], cfgs, { filename: f })]);
    }
    // تنسيق stylish الافتراضي
    let errors = 0, warnings = 0, fixE = 0, fixW = 0;
    results.forEach(([f, msgs]) => {
      if (!msgs.length) return;
      say("");
      say(`/project/${f}`);
      const rows = msgs.map(m => {
        if (m.severity === 2) { errors++; if (m.fix) fixE++; } else { warnings++; if (m.fix) fixW++; }
        return [`${m.line || 0}:${m.column || 0}`, m.severity === 2 ? "error" : "warning", m.message.replace(/\.$/, ".").replace(/\s+/g, " "), m.ruleId || ""];
      });
      const w = [0, 1, 2].map(i => Math.max(...rows.map(x => x[i].length)));
      rows.forEach(x => say(`  ${x[0].padEnd(w[0])}  ${x[1].padEnd(w[1])}  ${x[2].padEnd(w[2])}  ${x[3]}`.replace(/\s+$/, "")));
    });
    const total = errors + warnings;
    if (total) {
      say("");
      say(`✖ ${plural(total, "problem", "problems")} (${plural(errors, "error", "errors")}, ${plural(warnings, "warning", "warnings")})`);
      if (fixE || fixW) say(`  ${plural(fixE, "error", "errors")} and ${plural(fixW, "warning", "warnings")} potentially fixable with the \`--fix\` option.`);
      say("");
    }
    if (errors || (args.includes("--max-warnings") && warnings > +args[args.indexOf("--max-warnings") + 1])) world.failed = true;
  }

  // ---------- Prettier ----------
  async function prettier(args, api) {
    const { repo, say, err, world, ignored } = api;
    const r = repo();
    const { prettier: P, plugins } = await getPrettier();
    const check = args.includes("--check") || args.includes("-c"), write = args.includes("--write") || args.includes("-w");
    const targets = args.filter(a => !a.startsWith("-"));
    let options = {};
    const rc = [".prettierrc", ".prettierrc.json"].find(f => r.files[f] !== undefined);
    if (rc) {
      try { options = JSON.parse(r.files[rc]); }
      catch (e) { err(`[error] Invalid configuration for file "${rc}":\n[error] ${e.message}`); world.failed = true; return; }
    }
    const parserFor = f => (/\.(js|mjs|cjs|jsx)$/.test(f) ? "babel" : /\.json$|(^|\/)\.prettierrc$/.test(f) ? "json" : /\.css$/.test(f) ? "css" : /\.html$/.test(f) ? "html" : /\.md$/.test(f) ? "markdown" : null);
    const ignoreFile = r.files[".prettierignore"];
    const ignoredByPrettier = f => {
      if (/(^|\/)node_modules\//.test(f) || /^package-lock\.json$/.test(f)) return true;
      if (ignored(r, f)) return true; // Prettier 3 يحترم .gitignore
      if (ignoreFile === undefined) return false;
      return ignoreFile.split("\n").map(x => x.trim()).filter(x => x && !x.startsWith("#")).some(p => {
        const rx = new RegExp("^" + p.replace(/\/$/, "").replace(/^\//, "").replace(/[.+^${}()|[\]\\]/g, "\\$&").replace(/\*/g, "[^/]*") + "(/.*)?$");
        return rx.test(f) || rx.test(f.split("/").pop());
      });
    };
    const all = Object.keys(r.files).sort();
    let files = (targets.length ? targets : []).flatMap(t => {
      t = t.replace(/^\.\//, "").replace(/\/$/, "");
      if (t === "." || t === "") return all.filter(f => parserFor(f));
      if (r.files[t] !== undefined) return [t];
      if (t.includes("*")) { const rx = new RegExp("^" + t.replace(/[.+^${}()|[\]\\]/g, "\\$&").replace(/\*\*\//g, "(?:.*/)?").replace(/\*/g, "[^/]*") + "$"); return all.filter(f => rx.test(f) && parserFor(f)); }
      return all.filter(f => f.startsWith(t + "/") && parserFor(f));
    }).filter(f => !ignoredByPrettier(f));
    files = [...new Set(files)];
    if (!targets.length) { err("Usage: prettier [options] [file/dir/glob ...]"); world.failed = true; return; }
    if (check) say("Checking formatting...");
    const bad = [];
    for (const f of files) {
      let formatted;
      try { formatted = await P.format(r.files[f], Object.assign({}, options, { parser: parserFor(f), plugins, filepath: f })); }
      catch (e) { err(`[error] ${f}: ${e.message.split("\n")[0]}`); world.failed = true; continue; }
      const changed = formatted !== r.files[f];
      if (check) { if (changed) { bad.push(f); say(`[warn] ${f}`); } }
      else if (write) {
        const ms = Math.max(1, Math.round(r.files[f].length / 45));
        if (changed) r.files[f] = formatted;
        say(`${f} ${ms}ms${changed ? "" : " (unchanged)"}`);
      } else say(formatted.replace(/\n$/, ""));
    }
    if (check) {
      if (bad.length) { say(`[warn] Code style issues found in ${bad.length === 1 ? "the above file" : bad.length + " files"}. Run Prettier with --write to fix.`); world.failed = true; }
      else if (!world.failed) say("All matched files use Prettier code style!");
    }
  }

  // ---------- تنفيذ سطر أوامر داخل سكربت npm ----------
  const BINS = { vite, eslint, prettier };
  async function runBin(cmdLine, api, viaNpx) {
    const { repo, say, err, world } = api;
    const r = repo();
    const t = api.tokenize(cmdLine);
    const [bin, ...rest] = t;
    const owner = { vite: "vite", eslint: "eslint", prettier: "prettier", tsc: "typescript", nodemon: "nodemon" }[bin];
    if (bin === "node") return CW.termExt.node(rest, api);
    if (owner) {
      if (r.files[`node_modules/${owner}/package.json`] === undefined) {
        if (viaNpx) say(`npm warn exec The following package was not found and will be installed: ${owner}@${latest(owner)}`);
        else { err(`sh: 1: ${bin}: not found`); world.failed = true; return; }
      }
      if (BINS[bin]) return BINS[bin](rest, api);
      if (bin === "nodemon") { say(`[nodemon] ${REG.nodemon.versions[0]}\n[nodemon] to restart at any time, enter \`rs\`\n[nodemon] watching path(s): *.*\n[nodemon] watching extensions: js,mjs,cjs,json\n[nodemon] starting \`node ${rest[0] || "index.js"}\``); return CW.termExt.node(rest, api); }
      if (bin === "tsc") { if (rest.includes("--version") || rest.includes("-v")) return say(`Version ${latest("typescript")}`); return; }
    }
    return api.exec(cmdLine);
  }

  // ---------- الأوامر ----------
  CW.termExt.node = async (args, api) => {
    if (args[0] === "-v" || args[0] === "--version") return api.say(NODE_VERSION);
    const envFile = args.find(a => a.startsWith("--env-file="));
    const env = {};
    if (envFile) {
      const f = envFile.slice(11);
      const src = api.repo().files[f];
      if (src === undefined) { api.err(`node: ${f}: not found`); api.world.failed = true; return; }
      src.split("\n").forEach(l => { const m = l.match(/^\s*([\w.]+)\s*=\s*(.*)$/); if (m && !l.trim().startsWith("#")) env[m[1]] = m[2].replace(/^(['"])(.*)\1$/, "$2"); });
    }
    const rest = args.filter(a => !a.startsWith("--"));
    if (!rest.length) return api.say(`Welcome to Node.js ${NODE_VERSION}.`);
    return runNode(api, rest[0].replace(/^\.\//, ""), rest.slice(1), env);
  };

  CW.termExt.npx = async (args, api) => {
    if (args[0] === "create-vite" || /^create-vite@/.test(args[0])) return createVite(args.slice(1), api, false);
    return runBin(args.join(" "), api, true);
  };

  function createVite(args, api, viaNpm) {
    const { world, say, err } = api;
    const name = args.find(a => !a.startsWith("-") && a !== "--") || "vite-project";
    const ti = args.indexOf("--template");
    const template = ti >= 0 ? args[ti + 1] : "vanilla";
    if (!TEMPLATES[template]) { err(`Unknown template: ${template}. Available: vanilla, react`); world.failed = true; return; }
    if (world.repos[name] && Object.keys(world.repos[name].files).length) { err(`Target directory "${name}" is not empty.`); world.failed = true; return; }
    if (viaNpm) { say(""); say("> npx"); say(`> create-vite ${name} --template ${template}`); say(""); }
    const dir = world.repos[name] = api.newDir();
    dir.files = TEMPLATES[template](name);
    say("");
    say(`Scaffolding project in /project/${name}...`);
    say("");
    say("Done. Now run:");
    say("");
    say(`  cd ${name}`);
    say("  npm install");
    say("  npm run dev");
  }

  CW.termExt.npm = async (args, api) => {
    const { repo, say, err, world } = api;
    const r = repo();
    const cmd = args[0];
    const flags = args.filter(a => a.startsWith("-"));
    const rest = args.slice(1).filter(a => !a.startsWith("-"));
    const cwdName = world.cwd === "." ? "project" : world.cwd;
    const needPkg = () => {
      const p = readPkg(r);
      if (!p) {
        err(`npm error code ENOENT\nnpm error syscall open\nnpm error path /project${world.cwd === "." ? "" : "/" + world.cwd}/package.json\nnpm error errno -2\nnpm error enoent Could not read package.json: Error: ENOENT: no such file or directory, open '/project${world.cwd === "." ? "" : "/" + world.cwd}/package.json'`);
        world.failed = true;
      }
      return p;
    };
    if (cmd === "-v" || cmd === "--version") return say(NPM_VERSION);
    switch (cmd) {
      case "init": {
        if (rest[0] && /^vite/.test(rest[0])) return createVite(args.slice(2), api, true);
        if (!flags.includes("-y") && !flags.includes("--yes")) return err("هذا المحاكي لا يدعم الأسئلة التفاعلية، استخدم npm init -y");
        if (r.files["package.json"] !== undefined) return say("package.json موجود مسبقاً");
        const p = { name: cwdName, version: "1.0.0", main: "index.js", scripts: { test: 'echo "Error: no test specified" && exit 1' }, keywords: [], author: "", license: "ISC", description: "" };
        r.files["package.json"] = json(p);
        say(`Wrote to /project${world.cwd === "." ? "" : "/" + world.cwd}/package.json:`);
        say("");
        say(json(p).replace(/\n$/, ""));
        say("");
        return;
      }
      case "create": {
        if (/^vite(@|$)/.test(rest[0] || "")) return createVite(args.slice(2), api, true);
        return err(`npm error could not determine executable to run`);
      }
      case "install": case "i": case "add": case "ci": {
        const p = needPkg();
        if (!p) return;
        const dev = flags.includes("-D") || flags.includes("--save-dev");
        const forced = {};
        const exact = flags.includes("-E") || flags.includes("--save-exact");
        for (const spec of rest) {
          const at = spec.lastIndexOf("@");
          const name = at > 0 ? spec.slice(0, at) : spec;
          const range = at > 0 ? spec.slice(at + 1) : "latest";
          if (!REG[name]) {
            err(`npm error code E404\nnpm error 404 Not Found - GET https://registry.npmjs.org/${name} - Not found\nnpm error 404\nnpm error 404  '${name}@*' is not in this registry.`);
            world.failed = true;
            return;
          }
          const v = range === "latest" ? latest(name) : maxSatisfying(name, range);
          if (!v) { err(`npm error code ETARGET\nnpm error notarget No matching version found for ${name}@${range}.`); world.failed = true; return; }
          const key = dev ? "devDependencies" : "dependencies", other = dev ? "dependencies" : "devDependencies";
          p[key] = p[key] || {};
          p[key][name] = exact ? v : "^" + v;
          if (p[other]) delete p[other][name];
          forced[name] = v;
        }
        writePkg(r, p);
        return report(say, sync(r, forced));
      }
      case "uninstall": case "remove": case "rm": case "un": {
        const p = needPkg();
        if (!p) return;
        rest.forEach(n => { ["dependencies", "devDependencies"].forEach(k => { if (p[k]) delete p[k][n]; }); });
        writePkg(r, p);
        return report(say, sync(r));
      }
      case "update": case "up": {
        const p = needPkg();
        if (!p) return;
        const all = Object.assign({}, p.dependencies, p.devDependencies);
        const forced = {};
        Object.keys(all).forEach(n => { if (REG[n]) forced[n] = maxSatisfying(n, all[n]) || latest(n); });
        return report(say, sync(r, forced));
      }
      case "outdated": {
        const p = needPkg();
        if (!p) return;
        const rows = [];
        const all = Object.assign({}, p.dependencies, p.devDependencies);
        Object.keys(all).sort().forEach(n => {
          if (!REG[n]) return;
          const cur = installedVersion(r, n) || "MISSING", wanted = maxSatisfying(n, all[n]) || latest(n), lat = latest(n);
          if (cur !== lat) rows.push([n, cur, wanted, lat, cur === "MISSING" ? "-" : `node_modules/${n}`, p.name]);
        });
        if (!rows.length) return;
        rows.unshift(["Package", "Current", "Wanted", "Latest", "Location", "Depended by"]);
        const w = [0, 1, 2, 3, 4].map(i => Math.max(...rows.map(x => x[i].length)));
        rows.forEach(x => say(x.map((c, i) => (i < 5 ? c.padEnd(w[i]) : c)).join("  ")));
        world.failed = true;
        return;
      }
      case "ls": case "list": {
        const p = needPkg();
        if (!p) return;
        say(`${p.name}@${p.version} /project${world.cwd === "." ? "" : "/" + world.cwd}`);
        const top = Object.keys(Object.assign({}, p.dependencies, p.devDependencies)).sort();
        if (!top.length) return say("└── (empty)");
        top.forEach((n, i) => say(`${i === top.length - 1 ? "└──" : "├──"} ${n}@${installedVersion(r, n) || "UNMET DEPENDENCY"}`));
        return;
      }
      case "view": case "info": case "show": {
        const n = rest[0], f = rest[1];
        if (!REG[n]) { err(`npm error 404 Not Found - GET https://registry.npmjs.org/${n} - Not found`); world.failed = true; return; }
        if (f === "version") return say(latest(n));
        if (f === "versions") return say(`[ ${REG[n].versions.map(v => `'${v}'`).join(", ")} ]`);
        say("");
        say(`${n}@${latest(n)} | MIT | deps: ${(REG[n].deps || []).length || "none"} | versions: ${REG[n].versions.length}`);
        if (REG[n].desc) say(REG[n].desc);
        say(`https://www.npmjs.com/package/${n}`);
        return;
      }
      case "start": case "test": case "t": case "stop": case "restart":
        return runScript(cmd === "t" ? "test" : cmd, api, args.slice(1).filter((a, i) => !(i === 0 && a === "--")));
      case "run": case "run-script": {
        const p = needPkg();
        if (!p) return;
        if (!rest[0]) {
          const s = p.scripts || {};
          const life = ["start", "test", "stop", "restart"];
          const L = Object.keys(s).filter(k => life.includes(k)), O = Object.keys(s).filter(k => !life.includes(k));
          if (L.length) { say(`Lifecycle scripts included in ${p.name}@${p.version}:`); L.forEach(k => say(`  ${k}\n    ${s[k]}`)); }
          if (O.length) { if (L.length) say(""); say("available via `npm run-script`:"); O.forEach(k => say(`  ${k}\n    ${s[k]}`)); }
          return;
        }
        const dd = args.indexOf("--");
        return runScript(rest[0], api, dd >= 0 ? args.slice(dd + 1) : []);
      }
      case "pkg": {
        const p = needPkg();
        if (!p) return;
        const sub = args[1], items = args.slice(2);
        const getPath = (o, k) => k.split(".").reduce((x, key) => (x == null ? undefined : x[key]), o);
        if (sub === "get") {
          if (!items.length) return say(json(p).replace(/\n$/, ""));
          if (items.length === 1) { const v = getPath(p, items[0]); return v === undefined ? undefined : say(JSON.stringify(v, null, 2)); }
          const o = {};
          items.forEach(k => { const v = getPath(p, k); if (v !== undefined) o[k] = v; });
          return say(JSON.stringify(o, null, 2));
        }
        if (sub === "set") {
          items.forEach(it => {
            const eq = it.indexOf("=");
            const keys = it.slice(0, eq).split("."), raw = it.slice(eq + 1);
            let v = raw;
            if (args.includes("--json")) { try { v = JSON.parse(raw); } catch (e) { v = raw; } }
            let o = p;
            keys.slice(0, -1).forEach(k => { o = o[k] = o[k] && typeof o[k] === "object" ? o[k] : {}; });
            o[keys[keys.length - 1]] = v;
          });
          return writePkg(r, p);
        }
        if (sub === "delete") {
          items.forEach(k => { const keys = k.split("."); const o = (keys.length === 1 ? p : getPath(p, keys.slice(0, -1).join("."))); if (o) delete o[keys[keys.length - 1]]; });
          return writePkg(r, p);
        }
        return err(`npm error Usage: npm pkg set|get|delete`);
      }
      case "audit": { const p = needPkg(); if (p) say("found 0 vulnerabilities"); return; }
      default:
        err(`Unknown command: "${cmd}"\n\nTo see a list of supported npm commands, run:\n  npm help`);
        world.failed = true;
    }
  };

  async function runScript(name, api, extra) {
    const { repo, say, err, world } = api;
    const p = readPkg(repo());
    if (!p) { err("npm error code ENOENT"); world.failed = true; return; }
    const s = p.scripts || {};
    if (s[name] === undefined) {
      err(`npm error Missing script: "${name}"\nnpm error\nnpm error To see a list of scripts, run:\nnpm error   npm run`);
      world.failed = true;
      return;
    }
    // السكربتات pre و post تعمل تلقائياً قبل السكربت وبعده
    for (const step of [`pre${name}`, name, `post${name}`]) {
      if (s[step] === undefined) continue;
      const line = s[step] + (step === name && extra.length ? " " + extra.join(" ") : "");
      say("");
      say(`> ${p.name}@${p.version} ${step}`);
      say(`> ${line}`);
      say("");
      for (const part of api.splitAnd(line)) {
        world.failed = false;
        const mark = api.out.length;
        await runBin(part, api, false);
        if (world.failed || api.out.slice(mark).some(l => l.kind === "err" && !l.soft)) { world.failed = true; return; }
      }
    }
  }
})(typeof window !== "undefined" ? window : globalThis);
