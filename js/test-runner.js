// مشغّل دورة «اختبار الواجهات»: ملفات الطالب (كود + اختبارات) تعمل في إطار معزول فيه:
//  - واجهة Vitest (describe و it و expect و vi.fn و vi.mock و المؤقتات الوهمية) مع مطابقات jest-dom
//  - Testing Library (screen و getByRole ... و fireEvent و userEvent و waitFor)
//  - واجهة Playwright (page و locators و expect بإعادة المحاولة) على صفحات site/*.html في إطار داخلي
//  - محاكاة GitHub Actions لملفات .github/workflows/*.yml
// ومخرجاتها بصيغة مراسلي Vitest و Playwright. الفحص المخفي (~~~test) يستدعي run و mutate و ci.
(function () {
  // ======== الإطار: يُحقن نصه داخل الإطار المعزول ========
  function framework(FILES, TEST, post) {
    const out = [];
    const say = (t, kind = "log") => String(t).split("\n").forEach(l => out.push({ kind, text: l }));
    const print = (...a) => say(a.map(x => (typeof x === "string" ? x : fmt(x))).join(" "));

    // ---------- تنسيق القيم كما تعرضها Vitest ----------
    function fmt(v, d = 0) {
      if (typeof v === "string") return d ? `'${v}'` : `'${v}'`;
      if (typeof v === "number" || typeof v === "boolean" || v === null || v === undefined) return Object.is(v, -0) ? "-0" : String(v);
      if (typeof v === "function") return v.__isMock ? `[MockFunction ${v.getMockName()}]` : `[Function ${v.name || "anonymous"}]`;
      if (v instanceof Error) return `[${v.name}: ${v.message}]`;
      if (typeof Element !== "undefined" && v instanceof Element) return `<${v.tagName.toLowerCase()}${v.id ? ` id="${v.id}"` : ""}${v.className ? ` class="${v.className}"` : ""}>`;
      if (d > 2) return Array.isArray(v) ? "[Array]" : "[Object]";
      if (Array.isArray(v)) return v.length ? `[ ${v.map(x => fmt(x, d + 1)).join(", ")} ]` : "[]";
      if (v instanceof Map) return `Map{ ${[...v].map(([k, x]) => `${fmt(k, d + 1)} => ${fmt(x, d + 1)}`).join(", ")} }`;
      if (v instanceof Set) return `Set{ ${[...v].map(x => fmt(x, d + 1)).join(", ")} }`;
      const keys = Object.keys(v);
      return keys.length ? `{ ${keys.map(k => `${/^[A-Za-z_$][\w$]*$/.test(k) ? k : `'${k}'`}: ${fmt(v[k], d + 1)}`).join(", ")} }` : "{}";
    }
    function equals(a, b, strict) {
      if (Object.is(a, b)) return true;
      if (typeof a !== "object" || typeof b !== "object" || !a || !b) return false;
      if (Array.isArray(a) !== Array.isArray(b)) return false;
      if (a instanceof Date && b instanceof Date) return a.getTime() === b.getTime();
      if (a instanceof Map && b instanceof Map) return a.size === b.size && [...a].every(([k, v]) => b.has(k) && equals(v, b.get(k), strict));
      if (a instanceof Set && b instanceof Set) return a.size === b.size && [...a].every(v => [...b].some(w => equals(v, w, strict)));
      if (strict && Object.getPrototypeOf(a) !== Object.getPrototypeOf(b)) return false;
      const ka = Object.keys(a).filter(k => strict || a[k] !== undefined), kb = Object.keys(b).filter(k => strict || b[k] !== undefined);
      return ka.length === kb.length && ka.every(k => equals(a[k], b[k], strict));
    }
    const matchObject = (a, b) => typeof b !== "object" || b === null ? Object.is(a, b) : a && typeof a === "object" && Object.keys(b).every(k => matchObject(a[k], b[k]));
    class AssertionError extends Error { constructor(m) { super(m); this.name = "AssertionError"; } }

    // ---------- المحاكاة: vi ----------
    const allMocks = [];
    function fn(impl) {
      let implementation = impl, once = [], name = "spy";
      const mock = function (...args) {
        mock.mock.calls.push(args);
        mock.mock.lastCall = args;
        let result;
        try {
          const f = once.length ? once.shift() : implementation;
          result = f ? f.apply(this, args) : undefined;
          mock.mock.results.push({ type: "return", value: result });
        } catch (e) { mock.mock.results.push({ type: "throw", value: e }); throw e; }
        return result;
      };
      mock.__isMock = true;
      mock.mock = { calls: [], results: [], lastCall: undefined };
      mock.getMockName = () => name;
      mock.mockName = n => { name = n; return mock; };
      mock.mockImplementation = f => { implementation = f; return mock; };
      mock.mockImplementationOnce = f => { once.push(f); return mock; };
      mock.mockReturnValue = v => { implementation = () => v; return mock; };
      mock.mockReturnValueOnce = v => { once.push(() => v); return mock; };
      mock.mockResolvedValue = v => { implementation = () => Promise.resolve(v); return mock; };
      mock.mockResolvedValueOnce = v => { once.push(() => Promise.resolve(v)); return mock; };
      mock.mockRejectedValue = v => { implementation = () => Promise.reject(v); return mock; };
      mock.mockClear = () => { mock.mock.calls = []; mock.mock.results = []; mock.mock.lastCall = undefined; return mock; };
      mock.mockReset = () => { mock.mockClear(); implementation = undefined; once = []; return mock; };
      allMocks.push(mock);
      return mock;
    }
    const realTimers = { setTimeout: window.setTimeout.bind(window), clearTimeout: window.clearTimeout.bind(window), setInterval: window.setInterval.bind(window), clearInterval: window.clearInterval.bind(window), now: Date.now };
    let fake = null;
    const vi = {
      fn,
      spyOn(obj, key) {
        const orig = obj[key];
        const m = fn(function (...a) { return orig.apply(this, a); }).mockName(key);
        m.mockRestore = () => { obj[key] = orig; };
        obj[key] = m;
        return m;
      },
      mock(path, factory) { mocked[resolveSpec(path, current.file)] = factory; },
      stubGlobal(name, value) { window[name] = value; },
      clearAllMocks() { allMocks.forEach(m => m.mockClear()); },
      resetAllMocks() { allMocks.forEach(m => m.mockReset()); },
      useFakeTimers() {
        fake = { now: 0, timers: [], id: 0 };
        window.setTimeout = (f, ms = 0, ...a) => { const id = ++fake.id; fake.timers.push({ id, at: fake.now + ms, f, a }); return id; };
        window.setInterval = (f, ms = 0, ...a) => { const id = ++fake.id; fake.timers.push({ id, at: fake.now + ms, f, a, every: ms }); return id; };
        window.clearTimeout = window.clearInterval = id => { fake.timers = fake.timers.filter(t => t.id !== id); };
        Date.now = () => fake.base + fake.now;
        fake.base = Date.UTC(2025, 0, 6, 10, 0, 0);
        return vi;
      },
      advanceTimersByTime(ms) {
        const end = fake.now + ms;
        for (;;) {
          fake.timers.sort((a, b) => a.at - b.at || a.id - b.id);
          const t = fake.timers[0];
          if (!t || t.at > end) break;
          fake.now = t.at;
          if (t.every) t.at += t.every || 1; else fake.timers.shift();
          t.f(...t.a);
        }
        fake.now = end;
        return vi;
      },
      runAllTimers() { for (let i = 0; i < 1000 && fake.timers.length; i++) { fake.timers.sort((a, b) => a.at - b.at); vi.advanceTimersByTime(fake.timers[0].at - fake.now); } return vi; },
      setSystemTime(d) { if (fake) fake.base = new Date(d).getTime() - fake.now; return vi; },
      useRealTimers() { Object.assign(window, { setTimeout: realTimers.setTimeout, clearTimeout: realTimers.clearTimeout, setInterval: realTimers.setInterval, clearInterval: realTimers.clearInterval }); Date.now = realTimers.now; fake = null; return vi; }
    };

    // ---------- expect ----------
    const nameOf = m => `"${m.getMockName()}"`;
    function makeExpect(isPw) {
      function expect(actual, label) {
        const build = (negate, mode) => {
          const api = {};
          const check = (pass, msg, notMsg) => {
            if (negate ? pass : !pass) throw new AssertionError(negate ? notMsg || msg.replace(" to ", " not to ") : msg);
          };
          const M = {
            toBe: e => check(Object.is(actual, e), `expected ${fmt(actual)} to be ${fmt(e)} // Object.is equality`, `expected ${fmt(actual)} not to be ${fmt(e)} // Object.is equality`),
            toEqual: e => check(equals(actual, e), `expected ${fmt(actual)} to deeply equal ${fmt(e)}`),
            toStrictEqual: e => check(equals(actual, e, true), `expected ${fmt(actual)} to strictly equal ${fmt(e)}`),
            toMatchObject: e => check(matchObject(actual, e), `expected ${fmt(actual)} to match object ${fmt(e)}`),
            toBeTruthy: () => check(!!actual, `expected ${fmt(actual)} to be truthy`),
            toBeFalsy: () => check(!actual, `expected ${fmt(actual)} to be falsy`),
            toBeNull: () => check(actual === null, `expected ${fmt(actual)} to be null`),
            toBeUndefined: () => check(actual === undefined, `expected ${fmt(actual)} to be undefined`),
            toBeDefined: () => check(actual !== undefined, `expected ${fmt(actual)} to be defined`),
            toBeNaN: () => check(Number.isNaN(actual), `expected ${fmt(actual)} to be NaN`),
            toContain: e => check(actual != null && (typeof actual === "string" ? actual.includes(e) : [...actual].includes(e)), `expected ${fmt(actual)} to include ${fmt(e)}`),
            toContainEqual: e => check([...actual].some(x => equals(x, e)), `expected ${fmt(actual)} to deep include ${fmt(e)}`),
            toHaveLength: n => check(actual != null && actual.length === n, `expected ${fmt(actual)} to have a length of ${n} but got ${actual && actual.length}`),
            toHaveProperty: (k, v) => { const has = String(k).split(".").reduce((o, p) => (o != null && p in Object(o) ? o[p] : undefined), actual); check(v === undefined ? has !== undefined : equals(has, v), `expected ${fmt(actual)} to have property "${k}"${v === undefined ? "" : ` with value ${fmt(v)}`}`); },
            toBeGreaterThan: n => check(actual > n, `expected ${fmt(actual)} to be greater than ${n}`),
            toBeGreaterThanOrEqual: n => check(actual >= n, `expected ${fmt(actual)} to be greater than or equal to ${n}`),
            toBeLessThan: n => check(actual < n, `expected ${fmt(actual)} to be less than ${n}`),
            toBeLessThanOrEqual: n => check(actual <= n, `expected ${fmt(actual)} to be less than or equal to ${n}`),
            toBeCloseTo: (n, digits = 2) => check(Math.abs(actual - n) < Math.pow(10, -digits) / 2, `expected ${fmt(actual)} to be close to ${n}, received difference is ${Math.abs(actual - n)}, but expected ${Math.pow(10, -digits) / 2}`),
            toMatch: re => check(typeof re === "string" ? String(actual).includes(re) : re.test(actual), `expected ${fmt(actual)} to match ${typeof re === "string" ? `'${re}'` : re}`),
            toBeInstanceOf: C => check(actual instanceof C, `expected ${fmt(actual)} to be an instance of ${C.name}`),
            toThrow: e => {
              let err = null;
              if (typeof actual === "function") { try { actual(); } catch (x) { err = x; } }
              else err = actual; // مع rejects تصل قيمة الرفض نفسها
              if (!err) return check(false, "expected [Function] to throw an error", "expected [Function] to not throw an error but it did");
              if (e === undefined) return check(true, "", `expected [Function] to not throw an error but '${err.message}' was thrown`);
              const ok = typeof e === "string" ? err.message.includes(e) : e instanceof RegExp ? e.test(err.message) : typeof e === "function" ? err instanceof e : err.message === e.message;
              check(ok, `expected error to have message ${typeof e === "string" ? `'${e}'` : e}, received '${err.message}'`);
            },
            toHaveBeenCalled: () => check(actual.mock.calls.length > 0, `expected ${nameOf(actual)} to be called at least once`, `expected ${nameOf(actual)} to not be called at all, but actually been called ${actual.mock.calls.length} times`),
            toHaveBeenCalledTimes: n => check(actual.mock.calls.length === n, `expected ${nameOf(actual)} to be called ${n} times, but got ${actual.mock.calls.length} times`),
            toHaveBeenCalledWith: (...args) => check(actual.mock.calls.some(c => equals(c, args)), `expected ${nameOf(actual)} to be called with arguments: ${fmt(args)}\n\nReceived: ${actual.mock.calls.length ? actual.mock.calls.map(c => fmt(c)).join(", ") : "(no calls)"}`),
            toHaveBeenLastCalledWith: (...args) => check(equals(actual.mock.lastCall, args), `expected last call of ${nameOf(actual)} to be ${fmt(args)}`),
            toHaveReturnedWith: v => check(actual.mock.results.some(r => equals(r.value, v)), `expected ${nameOf(actual)} to return ${fmt(v)}`),
            // jest-dom
            toBeInTheDocument: () => check(actual instanceof Element && actual.ownerDocument.contains(actual), `expected element to be in the document`, `expected element not to be in the document, but it was found`),
            toHaveTextContent: t => { const tc = actual ? actual.textContent.replace(/\s+/g, " ").trim() : ""; check(t instanceof RegExp ? t.test(tc) : tc.includes(t), `Expected element to have text content:\n  ${t}\nReceived:\n  ${tc}`); },
            toBeVisible: () => check(isVisible(actual), "expected element to be visible", "expected element not to be visible"),
            toBeDisabled: () => check(actual.disabled === true, "expected element to be disabled", "expected element not to be disabled"),
            toBeEnabled: () => check(!actual.disabled, "expected element to be enabled", "expected element not to be enabled"),
            toHaveValue: v => check(String(actual.value) === String(v), `expected element to have value ${fmt(v)}, received ${fmt(actual.value)}`),
            toHaveAttribute: (k, v) => check(actual.hasAttribute(k) && (v === undefined || actual.getAttribute(k) === String(v)), `expected element to have attribute ${k}${v === undefined ? "" : `="${v}"`}`),
            toHaveClass: (...c) => check(c.every(x => actual.classList.contains(x)), `expected element to have class "${c.join(" ")}", received "${actual.className}"`),
            toBeChecked: () => check(!!actual.checked, "expected element to be checked", "expected element not to be checked"),
            toHaveFocus: () => check(actual.ownerDocument.activeElement === actual, "expected element to have focus")
          };
          Object.keys(M).forEach(k => {
            api[k] = (...a) => {
              if (mode) return (mode === "resolves" ? Promise.resolve(actual).then(v => expect(v)[negate ? "not" : "self"][k](...a)) : Promise.resolve(actual).then(() => { throw new AssertionError(`promise resolved "${fmt(actual)}" instead of rejecting`); }, e => expect(e)[negate ? "not" : "self"][k](...a)));
              return M[k](...a);
            };
          });
          return api;
        };
        const api = build(false);
        api.not = build(true);
        api.self = api;
        api.resolves = build(false, "resolves");
        api.rejects = build(false, "rejects");
        api.resolves.not = build(true, "resolves");
        api.rejects.not = build(true, "rejects");
        if (isPw && actual && actual.__locator) return pwExpect(actual);
        if (isPw && actual && actual.__page) return pwPageExpect(actual);
        return api;
      }
      expect.assertions = () => {};
      expect.any = C => ({ asymmetricMatch: v => v instanceof C || typeof v === C.name.toLowerCase() });
      return expect;
    }
    const expect = makeExpect(false);

    // ---------- Testing Library ----------
    function isVisible(el) {
      if (!el || !el.ownerDocument || !el.ownerDocument.contains(el)) return false;
      for (let e = el; e && e.nodeType === 1; e = e.parentElement) {
        const s = e.ownerDocument.defaultView.getComputedStyle(e);
        if (s.display === "none" || s.visibility === "hidden" || e.hidden) return false;
      }
      return true;
    }
    const implicitRole = el => {
      const t = el.tagName.toLowerCase(), type = (el.getAttribute("type") || "text").toLowerCase();
      if (el.getAttribute("role")) return el.getAttribute("role");
      if (t === "button" || t === "input" && ["button", "submit", "reset"].includes(type)) return "button";
      if (t === "a" && el.hasAttribute("href")) return "link";
      if (/^h[1-6]$/.test(t)) return "heading";
      if (t === "textarea" || t === "input" && ["text", "email", "tel", "url", "search", "password"].includes(type)) return type === "search" ? "searchbox" : type === "password" ? null : "textbox";
      if (t === "input" && type === "checkbox") return "checkbox";
      if (t === "input" && type === "radio") return "radio";
      if (t === "input" && type === "number") return "spinbutton";
      if (t === "select") return "combobox";
      if (t === "ul" || t === "ol") return "list";
      if (t === "li") return "listitem";
      if (t === "img" && el.getAttribute("alt") !== "") return "img";
      if (t === "nav") return "navigation";
      if (t === "main") return "main";
      if (t === "header") return "banner";
      if (t === "footer") return "contentinfo";
      if (t === "form") return "form";
      if (t === "table") return "table";
      if (t === "dialog") return "dialog";
      return null;
    };
    const labelText = el => {
      const doc = el.ownerDocument;
      if (el.getAttribute("aria-label")) return el.getAttribute("aria-label");
      if (el.getAttribute("aria-labelledby")) return el.getAttribute("aria-labelledby").split(" ").map(id => (doc.getElementById(id) || {}).textContent || "").join(" ").trim();
      if (el.id) { const l = doc.querySelector(`label[for="${el.id}"]`); if (l) return l.textContent.trim(); }
      const wrap = el.closest("label");
      if (wrap) return [...wrap.childNodes].filter(n => n !== el).map(n => n.textContent).join("").trim();
      return null;
    };
    const accName = el => {
      const l = labelText(el);
      if (l !== null) return l;
      const t = el.tagName.toLowerCase();
      if (t === "img") return el.getAttribute("alt") || "";
      if (t === "input" && ["button", "submit"].includes(el.type)) return el.value || "";
      if (["button", "a", "h1", "h2", "h3", "h4", "h5", "h6", "li", "option"].includes(t) || el.getAttribute("role")) return el.textContent.replace(/\s+/g, " ").trim();
      return el.getAttribute("title") || "";
    };
    const textMatch = (text, m, exact = true) => m instanceof RegExp ? m.test(text) : exact ? text === m : text.toLowerCase().includes(String(m).toLowerCase());
    const describeMatcher = m => (m instanceof RegExp ? String(m) : `"${m}"`);
    function queriesFor(root) {
      const doc = root.ownerDocument || root;
      const all = () => [...root.querySelectorAll("*")];
      const finders = {
        Role: (role, o = {}) => all().filter(el => implicitRole(el) === role && (o.hidden || isVisible(el)) && (o.name === undefined || textMatch(accName(el), o.name)) && (o.level === undefined || Number(el.tagName[1]) === o.level || Number(el.getAttribute("aria-level")) === o.level) && (o.checked === undefined || el.checked === o.checked)),
        Text: (t, o = {}) => all().filter(el => !["SCRIPT", "STYLE"].includes(el.tagName) && [...el.childNodes].some(n => n.nodeType === 3 && n.textContent.trim()) && textMatch(el.textContent.replace(/\s+/g, " ").trim(), t, o.exact !== false)),
        LabelText: (t, o = {}) => all().filter(el => ["INPUT", "TEXTAREA", "SELECT", "BUTTON"].includes(el.tagName) && labelText(el) !== null && textMatch(labelText(el), t, o.exact !== false)),
        PlaceholderText: (t, o = {}) => all().filter(el => el.hasAttribute("placeholder") && textMatch(el.getAttribute("placeholder"), t, o.exact !== false)),
        TestId: t => all().filter(el => textMatch(el.getAttribute("data-testid") || "", t)),
        AltText: t => all().filter(el => el.hasAttribute("alt") && textMatch(el.getAttribute("alt"), t)),
        DisplayValue: t => all().filter(el => "value" in el && ["INPUT", "TEXTAREA", "SELECT"].includes(el.tagName) && textMatch(String(el.value), t))
      };
      const miss = (kind, a, o) => kind === "Role" ? `Unable to find an accessible element with the role "${a}"${o && o.name !== undefined ? ` and name ${describeMatcher(o.name)}` : ""}` : kind === "Text" ? `Unable to find an element with the text: ${a}. This could be because the text is broken up by multiple elements. In this case, you can provide a function for your text matcher to make your matcher more flexible.` : `Unable to find an element by: [${kind === "TestId" ? "data-testid" : kind}="${a}"]`;
      const q = {};
      Object.keys(finders).forEach(kind => {
        q["getAllBy" + kind] = (a, o) => { const r = finders[kind](a, o); if (!r.length) throw Object.assign(new Error(miss(kind, a, o)), { name: "TestingLibraryElementError" }); return r; };
        q["getBy" + kind] = (a, o) => { const r = q["getAllBy" + kind](a, o); if (r.length > 1) throw Object.assign(new Error(`Found multiple elements with the ${kind === "Role" ? `role "${a}"` : `text: ${a}`}`), { name: "TestingLibraryElementError" }); return r[0]; };
        q["queryAllBy" + kind] = (a, o) => finders[kind](a, o);
        q["queryBy" + kind] = (a, o) => { const r = finders[kind](a, o); if (r.length > 1) throw new Error(`Found multiple elements with the ${kind.toLowerCase()}: ${a}`); return r[0] || null; };
        q["findBy" + kind] = (a, o) => waitFor(() => q["getBy" + kind](a, o));
        q["findAllBy" + kind] = (a, o) => waitFor(() => q["getAllBy" + kind](a, o));
      });
      q.debug = () => print(root.body ? root.body.innerHTML : root.innerHTML);
      return q;
    }
    const sleep = ms => new Promise(r => realTimers.setTimeout(r, ms));
    async function waitFor(cb, o = {}) {
      const end = realTimers.now() + (o.timeout || 1000);
      for (;;) {
        try { return await cb(); }
        catch (e) { if (realTimers.now() > end) throw e; await sleep(20); }
      }
    }
    const screen = queriesFor(document.body);
    const within = el => queriesFor(el);
    const setValue = (el, v) => { const proto = Object.getPrototypeOf(el); const d = Object.getOwnPropertyDescriptor(proto, "value"); d && d.set ? d.set.call(el, v) : (el.value = v); };
    const fireEvent = {
      click: el => el.dispatchEvent(new MouseEvent("click", { bubbles: true, cancelable: true })),
      input: (el, o = {}) => { if (o.target && "value" in o.target) setValue(el, o.target.value); return el.dispatchEvent(new Event("input", { bubbles: true })); },
      change: (el, o = {}) => { if (o.target && "value" in o.target) setValue(el, o.target.value); if (o.target && "checked" in o.target) el.checked = o.target.checked; return el.dispatchEvent(new Event("change", { bubbles: true })); },
      submit: el => el.dispatchEvent(new Event("submit", { bubbles: true, cancelable: true })),
      keyDown: (el, o = {}) => el.dispatchEvent(new KeyboardEvent("keydown", Object.assign({ bubbles: true }, o))),
      focus: el => { el.focus(); },
      blur: el => { el.blur(); }
    };
    const userEvent = {
      setup: () => userEvent,
      async click(el) {
        if (el.disabled) return;
        el.dispatchEvent(new PointerEvent("pointerdown", { bubbles: true }));
        el.dispatchEvent(new MouseEvent("mousedown", { bubbles: true }));
        if (el.focus) el.focus();
        el.dispatchEvent(new PointerEvent("pointerup", { bubbles: true }));
        el.dispatchEvent(new MouseEvent("mouseup", { bubbles: true }));
        el.click();
        await sleep(0);
      },
      async type(el, text) {
        await userEvent.click(el);
        for (const part of text.match(/\{[^}]+\}|[\s\S]/gu) || []) {
          if (part === "{enter}" || part === "{Enter}") {
            el.dispatchEvent(new KeyboardEvent("keydown", { key: "Enter", bubbles: true }));
            if (el.form && el.tagName === "INPUT") el.form.requestSubmit();
            continue;
          }
          if (part === "{backspace}" || part === "{Backspace}") { setValue(el, String(el.value).slice(0, -1)); el.dispatchEvent(new Event("input", { bubbles: true })); continue; }
          el.dispatchEvent(new KeyboardEvent("keydown", { key: part, bubbles: true }));
          setValue(el, String(el.value) + part);
          el.dispatchEvent(new InputEvent("input", { bubbles: true, data: part }));
          el.dispatchEvent(new KeyboardEvent("keyup", { key: part, bubbles: true }));
        }
        el.dispatchEvent(new Event("change", { bubbles: true }));
        await sleep(0);
      },
      async clear(el) { el.focus(); setValue(el, ""); el.dispatchEvent(new Event("input", { bubbles: true })); await sleep(0); },
      async selectOptions(el, v) { setValue(el, Array.isArray(v) ? v[0] : v); el.dispatchEvent(new Event("input", { bubbles: true })); el.dispatchEvent(new Event("change", { bubbles: true })); await sleep(0); },
      async keyboard(text) { const el = document.activeElement; if (el) await userEvent.type(el, text); }
    };

    // ---------- Playwright ----------
    let pwFrame = null, pwRoutes = [], pwPath = "/";
    const sitePath = url => {
      const p = String(url).replace(/^https?:\/\/[^/]+/, "").split(/[?#]/)[0] || "/";
      const base = p === "/" ? "index" : p.replace(/^\//, "").replace(/\.html$/, "").replace(/\/$/, "/index");
      return ["site/" + base + ".html", "site/" + base + "/index.html"].find(f => FILES[f] !== undefined);
    };
    async function pwGoto(url) {
      const file = sitePath(url);
      pwPath = String(url).replace(/^https?:\/\/[^/]+/, "") || "/";
      // إطار about:blank جديد لكل صفحة: يرث أصل الإطار الحالي فنستطيع التحكم فيه، والكتابة فيه تشغّل سكربتات الصفحة
      if (pwFrame) pwFrame.remove();
      pwFrame = document.createElement("iframe");
      pwFrame.style.cssText = "width:800px;height:600px;border:0;position:absolute;left:-9999px;top:0";
      document.documentElement.append(pwFrame);
      let html = file ? FILES[file] : "<!doctype html><title>404</title><h1>404 Not Found</h1>";
      html = html.replace(/<script([^>]*)\ssrc=["']\/?([^"']+)["']([^>]*)><\/script>/g, (m, a, src, b) => (FILES["site/" + src] !== undefined ? `<script${a}${b}>${FILES["site/" + src].replace(/<\/script/g, "<\\/script")}<\/script>` : m));
      const w = pwFrame.contentWindow;
      const fakeFetch = async (u, init) => {
        const href = new URL(String(u), "http://localhost:3000").href;
        const r = pwRoutes.find(rt => rt.re.test(href));
        if (!r) throw new TypeError("Failed to fetch");
        let resp = null;
        await r.handler({ fulfill: o => { resp = new Response(o.json !== undefined ? JSON.stringify(o.json) : o.body || "", { status: o.status || 200, headers: { "content-type": o.json !== undefined ? "application/json" : o.contentType || "text/plain" } }); }, abort: () => { resp = "abort"; }, request: () => ({ url: () => href, method: () => (init && init.method) || "GET", postDataJSON: () => JSON.parse(init.body) }) });
        if (resp === "abort" || !resp) throw new TypeError("Failed to fetch");
        return resp;
      };
      w.fetch = fakeFetch;
      const d = pwFrame.contentDocument;
      d.open();
      w.fetch = fakeFetch;
      d.write(html);
      d.close();
      w.fetch = fakeFetch;
      d.addEventListener("click", e => {
        const a = e.target.closest && e.target.closest("a[href]");
        if (a && !e.defaultPrevented && !/^(https?:|#|mailto:)/.test(a.getAttribute("href"))) { e.preventDefault(); pwGoto(a.getAttribute("href")); }
      });
      w.addEventListener("pw-navigate", e => pwGoto(e.detail));
      await sleep(10);
    }
    const pwDoc = () => pwFrame.contentDocument;
    function locator(desc, resolver) {
      const L = {
        __locator: true, desc,
        all: () => resolver(),
        el: () => resolver()[0],
        async waitEl() {
          let el;
          await waitFor(() => {
            const r = resolver();
            if (r.length > 1 && !L.__nth) throw new Error(`strict mode violation: ${desc} resolved to ${r.length} elements`);
            el = r[0];
            if (!el || !isVisible(el)) throw new Error(`Timeout 1000ms exceeded.\nwaiting for ${desc}`);
          }, { timeout: 1000 });
          return el;
        },
        async click() { const el = await L.waitEl(); el.focus && el.focus(); el.click(); await sleep(15); },
        async fill(v) { const el = await L.waitEl(); el.focus(); setValue(el, v); el.dispatchEvent(new Event("input", { bubbles: true })); el.dispatchEvent(new Event("change", { bubbles: true })); await sleep(5); },
        async press(key) { const el = await L.waitEl(); el.dispatchEvent(new KeyboardEvent("keydown", { key, bubbles: true, cancelable: true })); if (key === "Enter" && el.form) el.form.requestSubmit(); await sleep(15); },
        async check() { const el = await L.waitEl(); if (!el.checked) el.click(); await sleep(5); },
        async uncheck() { const el = await L.waitEl(); if (el.checked) el.click(); await sleep(5); },
        async selectOption(v) { const el = await L.waitEl(); setValue(el, v); el.dispatchEvent(new Event("change", { bubbles: true })); await sleep(5); },
        async textContent() { return (await L.waitEl()).textContent; },
        async innerText() { return (await L.waitEl()).textContent.replace(/\s+/g, " ").trim(); },
        async inputValue() { return (await L.waitEl()).value; },
        async isVisible() { const el = resolver()[0]; return !!el && isVisible(el); },
        async count() { return resolver().length; },
        first: () => Object.assign(locator(desc + ".first()", () => resolver().slice(0, 1)), { __nth: true }),
        last: () => Object.assign(locator(desc + ".last()", () => resolver().slice(-1)), { __nth: true }),
        nth: i => Object.assign(locator(`${desc}.nth(${i})`, () => resolver().slice(i, i + 1)), { __nth: true }),
        filter: o => locator(`${desc}.filter(...)`, () => resolver().filter(el => o.hasText === undefined || textMatch(el.textContent.replace(/\s+/g, " ").trim(), o.hasText, false)))
      };
      Object.assign(L, scopedLocators(() => resolver(), desc + "."));
      return L;
    }
    const q = s => JSON.stringify(s).replace(/"/g, "'");
    function scopedLocators(roots, prefix = "") {
      const from = fnq => () => roots().flatMap(r => fnq(queriesFor(r)));
      const opt = o => (o && o.name !== undefined ? `, { name: ${o.name instanceof RegExp ? o.name : q(o.name)} }` : "");
      return {
        getByRole: (role, o) => locator(`${prefix}getByRole(${q(role)}${opt(o)})`, from(Q => Q.queryAllByRole(role, Object.assign({ exact: true }, o)))),
        getByText: (t, o) => locator(`${prefix}getByText(${t instanceof RegExp ? t : q(t)})`, from(Q => Q.queryAllByText(t, { exact: o && o.exact }).filter((el, i, arr) => !arr.some(x => x !== el && el.contains(x))))),
        getByLabel: (t, o) => locator(`${prefix}getByLabel(${q(t)})`, from(Q => Q.queryAllByLabelText(t, o))),
        getByPlaceholder: t => locator(`${prefix}getByPlaceholder(${q(t)})`, from(Q => Q.queryAllByPlaceholderText(t))),
        getByTestId: t => locator(`${prefix}getByTestId(${q(t)})`, from(Q => Q.queryAllByTestId(t))),
        locator: sel => locator(`${prefix}locator(${q(sel)})`, () => roots().flatMap(r => [...r.querySelectorAll(sel)]))
      };
    }
    const page = Object.assign({
      __page: true,
      goto: async url => { await pwGoto(url); return { status: () => (sitePath(url) ? 200 : 404) }; },
      url: () => "http://localhost:3000" + pwPath,
      title: async () => pwDoc().title,
      route: async (pattern, handler) => { const re = pattern instanceof RegExp ? pattern : new RegExp("^" + String(pattern).replace(/[.+?^${}()|[\]\\]/g, "\\$&").replace(/\*\*/g, "\u0000").replace(/\*/g, "[^/]*").replace(/\u0000/g, ".*") + "$"); pwRoutes.unshift({ re, handler }); },
      waitForTimeout: ms => sleep(ms),
      reload: async () => pwGoto(pwPath)
    }, scopedLocators(() => [pwDoc().body]));
    const pwFail = (name, loc, expected, received, negate) => {
      const e = new AssertionError(`expect(${loc ? "locator" : "page"}).${negate ? "not." : ""}${name}(${expected === undefined ? "" : "expected"}) failed\n\n${loc ? `Locator:  ${loc}\n` : ""}${expected === undefined ? "" : `Expected: ${typeof expected === "string" ? `"${expected}"` : expected}\n`}Received: ${received}`);
      e.name = "Error";
      return e;
    };
    function pwExpect(L) {
      const make = negate => {
        const retry = async (name, expected, getReceived, pass) => {
          let received;
          try { await waitFor(() => { received = getReceived(); if (!!pass(received) === negate) throw new Error("retry"); }, { timeout: 1000 }); }
          catch (e) { throw pwFail(name, L.desc, expected, typeof received === "string" ? `"${received}"` : received === undefined ? "<element(s) not found>" : received, negate); }
        };
        const text = () => { const el = L.el(); return el ? el.textContent.replace(/\s+/g, " ").trim() : undefined; };
        return {
          toBeVisible: () => retry("toBeVisible", undefined, () => (L.el() ? (isVisible(L.el()) ? "visible" : "hidden") : undefined), r => r === "visible"),
          toBeHidden: () => retry("toBeHidden", undefined, () => (L.el() ? (isVisible(L.el()) ? "visible" : "hidden") : "hidden"), r => r === "hidden"),
          toHaveText: t => retry("toHaveText", t, text, r => r !== undefined && textMatch(r, t)),
          toContainText: t => retry("toContainText", t, text, r => r !== undefined && (t instanceof RegExp ? t.test(r) : r.includes(t))),
          toHaveCount: n => retry("toHaveCount", n, () => L.all().length, r => r === n),
          toHaveValue: v => retry("toHaveValue", v, () => (L.el() ? L.el().value : undefined), r => r === v),
          toBeChecked: () => retry("toBeChecked", undefined, () => (L.el() ? (L.el().checked ? "checked" : "unchecked") : undefined), r => r === "checked"),
          toBeDisabled: () => retry("toBeDisabled", undefined, () => (L.el() ? (L.el().disabled ? "disabled" : "enabled") : undefined), r => r === "disabled"),
          toBeEnabled: () => retry("toBeEnabled", undefined, () => (L.el() ? (L.el().disabled ? "disabled" : "enabled") : undefined), r => r === "enabled"),
          toHaveAttribute: (k, v) => retry("toHaveAttribute", v, () => (L.el() ? L.el().getAttribute(k) : undefined), r => r !== null && r !== undefined && (v === undefined || r === v))
        };
      };
      const api = make(false);
      api.not = make(true);
      return api;
    }
    function pwPageExpect() {
      const make = negate => ({
        toHaveURL: async u => { let r; try { await waitFor(() => { r = page.url(); const ok = u instanceof RegExp ? u.test(r) : r === u || r === "http://localhost:3000" + u; if (ok === negate) throw new Error(); }); } catch (e) { throw pwFail("toHaveURL", null, u, `"${r}"`, negate); } },
        toHaveTitle: async t => { let r; try { await waitFor(() => { r = pwDoc().title; const ok = t instanceof RegExp ? t.test(r) : r === t; if (ok === negate) throw new Error(); }); } catch (e) { throw pwFail("toHaveTitle", null, t, `"${r}"`, negate); } }
      });
      const api = make(false); api.not = make(true); return api;
    }

    // ---------- تسجيل الاختبارات ----------
    let current = null;
    const newSuite = (name, parent) => ({ name, parent, children: [], tests: [], hooks: { beforeEach: [], afterEach: [], beforeAll: [], afterAll: [] } });
    const reg = kind => (name, f, timeout) => { const t = { name, fn: f, suite: current.suite, skip: kind === "skip", only: kind === "only", todo: kind === "todo" }; current.suite.tests.push(t); current.suite.children.push(t); };
    const mkTest = () => {
      const t = reg("normal");
      t.skip = reg("skip"); t.only = reg("only"); t.todo = n => reg("todo")(n, () => {});
      t.each = rows => (name, f) => rows.forEach((row, i) => {
        let k = 0;
        const n = name.replace(/%[sdio]/g, () => fmtArg((Array.isArray(row) ? row : [row])[k++])).replace(/\$(\w+)/g, (_, key) => (row && typeof row === "object" ? String(row[key]) : ""));
        reg("normal")(n, () => (Array.isArray(row) ? f(...row) : f(row)));
      });
      return t;
    };
    const fmtArg = v => (typeof v === "string" ? v : fmt(v));
    const describe = (name, f) => { const s = newSuite(name, current.suite); current.suite.children.push(s); const prev = current.suite; current.suite = s; f(); current.suite = prev; };
    describe.skip = (name, f) => describe(name, () => {});
    describe.each = rows => (name, f) => rows.forEach(row => describe(name.replace(/%s/, fmtArg(Array.isArray(row) ? row[0] : row)), () => (Array.isArray(row) ? f(...row) : f(row))));
    const hook = k => f => current.suite.hooks[k].push(f);
    const it = mkTest();
    const vitestApi = { describe, it, test: it, expect, vi, beforeEach: hook("beforeEach"), afterEach: hook("afterEach"), beforeAll: hook("beforeAll"), afterAll: hook("afterAll") };
    const pwTest = mkTest();
    pwTest.describe = describe;
    pwTest.beforeEach = f => hook("beforeEach")(() => f({ page }));
    pwTest.afterEach = f => hook("afterEach")(() => f({ page }));
    const pwApi = { test: pwTest, expect: makeExpect(true), devices: {}, defineConfig: c => c };

    // ---------- الوحدات ----------
    let mocked = {}, cache = {};
    function esmToCjs(code) {
      const tail = [];
      // vi.mock يُرفع لأعلى الملف كما في Vitest
      const mocks = [];
      code = code.replace(/^\s*(?:vi|jest)\.mock\(([\s\S]*?)\);?\s*$/gm, m => { mocks.push(m.trim()); return ""; });
      code = code.replace(/^\s*import\s+([\w$]+)\s*,\s*\{([^}]*)\}\s*from\s*(['"])(.+?)\3;?/gm, (_, d, n, q, m) => `const ${d} = __def(require(${JSON.stringify(m)})); const {${n.replace(/\s+as\s+/g, ": ")}} = require(${JSON.stringify(m)});`)
        .replace(/^\s*import\s+\*\s+as\s+([\w$]+)\s+from\s*(['"])(.+?)\2;?/gm, (_, n, q, m) => `const ${n} = require(${JSON.stringify(m)});`)
        .replace(/^\s*import\s+\{([^}]*)\}\s*from\s*(['"])(.+?)\2;?/gm, (_, n, q, m) => `const {${n.replace(/\s+as\s+/g, ": ")}} = require(${JSON.stringify(m)});`)
        .replace(/^\s*import\s+([\w$]+)\s+from\s*(['"])(.+?)\2;?/gm, (_, n, q, m) => `const ${n} = __def(require(${JSON.stringify(m)}));`)
        .replace(/^\s*import\s*(['"])(.+?)\1;?/gm, (_, q, m) => `require(${JSON.stringify(m)});`)
        .replace(/^export\s+default\s+(async\s+)?function\s*([\w$]*)/gm, (_, a, n) => { const name = n || "__default"; tail.push(`module.exports.default = ${name};`); return `${a || ""}function ${name}`; })
        .replace(/^export\s+default\s+class\s+([\w$]+)/gm, (_, n) => { tail.push(`module.exports.default = ${n};`); return `class ${n}`; })
        .replace(/^export\s+default\s+/gm, "module.exports.default = ")
        .replace(/^export\s+(async\s+)?(const|let|var|function\*?|class)\s+([\w$]+)/gm, (_, a, kw, n) => { tail.push(`module.exports.${n} = ${n};`); return `${a || ""}${kw} ${n}`; })
        .replace(/^export\s*\{([^}]*)\};?/gm, (_, names) => { names.split(",").map(x => x.trim()).filter(Boolean).forEach(x => { const [a, b] = x.split(/\s+as\s+/); tail.push(`module.exports.${b || a} = ${a};`); }); return ""; });
      // المحاكاة خارج الكتلة حتى تستخدم vi المتاحة قبل أي استيراد
      return mocks.join("\n") + "\n{\n" + code + "\n" + tail.join("\n") + "\n}";
    }
    const resolveSpec = (spec, from) => {
      if (!/^\.{1,2}\//.test(spec) && !spec.startsWith("/")) return spec;
      const parts = spec.startsWith("/") ? [] : from.split("/").slice(0, -1);
      spec.replace(/^\//, "").split("/").forEach(s => { if (s === "..") parts.pop(); else if (s !== ".") parts.push(s); });
      const base = parts.join("/");
      return [base, base + ".js", base + ".mjs", base + "/index.js"].find(f => FILES[f] !== undefined) || base;
    };
    const BUILTIN = {
      vitest: () => vitestApi, "@jest/globals": () => Object.assign({ jest: vi }, vitestApi),
      "@testing-library/dom": () => Object.assign({ screen, within, fireEvent, waitFor }, queriesFor(document.body)),
      "@testing-library/user-event": () => ({ default: userEvent, userEvent, __esModule: true }),
      "@testing-library/jest-dom": () => ({}), "@testing-library/jest-dom/vitest": () => ({}),
      "@playwright/test": () => pwApi
    };
    function requireFrom(from) {
      return spec => {
        const key = resolveSpec(spec, from);
        if (mocked[key]) { if (!cache["mock:" + key]) cache["mock:" + key] = { exports: mocked[key]() }; return cache["mock:" + key].exports; }
        if (BUILTIN[spec]) return BUILTIN[spec]();
        if (FILES[key] === undefined) throw new Error(`Failed to load url ${spec} (resolved id: ${spec}) in /project/${from}. Does the file exist?`);
        if (cache[key]) return cache[key].exports;
        const mod = cache[key] = { exports: {} };
        if (/\.json$/.test(key)) { mod.exports = JSON.parse(FILES[key]); return mod.exports; }
        const g = Object.assign({ jest: vi }, vitestApi);
        new Function("require", "module", "exports", "__def", ...Object.keys(g), esmToCjs(FILES[key]))(requireFrom(key), mod, mod.exports, m => (m && m.default !== undefined ? m.default : m), ...Object.values(g));
        return mod.exports;
      };
    }

    // ---------- تشغيل ملف ومراسلات النتائج ----------
    const withTimeout = (p, ms, name) => Promise.race([p, new Promise((_, rej) => realTimers.setTimeout(() => rej(new Error(`Test timed out in ${ms}ms.`)), ms))]);
    async function runFile(file, overrides) {
      const saved = {};
      Object.keys(overrides || {}).forEach(k => { saved[k] = FILES[k]; FILES[k] = overrides[k]; });
      mocked = {}; cache = {};
      const root = newSuite("", null);
      current = { suite: root, file };
      const results = [];
      try {
        try { requireFrom(file)("./" + file.split("/").pop()); }
        catch (e) { results.push({ path: [], name: "", state: "fail", error: e, collect: true }); return results; }
        const hasOnly = (function scan(s) { return s.tests.some(t => t.only) || s.children.some(c => c.children && scan(c)); })(root);
        const runSuite = async (s, path, before, after) => {
          for (const h of s.hooks.beforeAll) await h();
          for (const c of s.children) {
            if (c.children) { await runSuite(c, [...path, c.name], [...before, ...c.hooks.beforeEach], [...c.hooks.afterEach, ...after]); continue; }
            const t = c;
            if (t.todo || t.skip || (hasOnly && !t.only)) { results.push({ path, name: t.name, state: t.todo ? "todo" : "skip" }); continue; }
            document.body.innerHTML = "";
            pwRoutes = []; // كل اختبار Playwright يبدأ بصفحة ومسارات شبكة نظيفة
            try { sessionStorage.clear(); localStorage.clear(); } catch (e) {}
            let error = null;
            try {
              for (const h of before) await h();
              await withTimeout(Promise.resolve().then(() => (file.endsWith(".spec.js") ? t.fn({ page }) : t.fn())), file.endsWith(".spec.js") ? 5000 : 2000, t.name);
            } catch (e) { error = e; }
            try { for (const h of after) await h(); } catch (e) { error = error || e; }
            if (fake) vi.useRealTimers();
            results.push({ path, name: t.name, state: error ? "fail" : "pass", error });
          }
          for (const h of s.hooks.afterAll) await h();
        };
        await runSuite(root, [], root.hooks.beforeEach, root.hooks.afterEach);
      } finally {
        Object.keys(saved).forEach(k => { if (saved[k] === undefined) delete FILES[k]; else FILES[k] = saved[k]; });
        document.body.innerHTML = "";
      }
      return results;
    }
    const unitFiles = () => Object.keys(FILES).filter(f => /\.(test|spec)\.m?js$/.test(f) && !/(^|\/)e2e\//.test(f) && !f.endsWith(".spec.js")).sort();
    const e2eFiles = () => Object.keys(FILES).filter(f => f.endsWith(".spec.js")).sort();
    const errText = e => `${e && e.name || "Error"}: ${e && e.message || e}`;

    async function vitestRun(files, quiet, overrides, kind) {
      const lines = [];
      const per = [];
      for (const f of files) per.push([f, await runFile(f, overrides)]);
      if (quiet) return per;
      lines.push("", " RUN  v3.2.4 /project", "");
      const fails = [];
      per.forEach(([f, rs]) => rs.forEach(r => {
        const title = [f, ...r.path, r.name].filter(Boolean).join(" > ");
        if (r.collect) { lines.push(` ❯ ${f} (0 test)`); fails.push([` FAIL  ${f} [ ${f} ]`, r.error]); return; }
        if (r.state === "pass") lines.push(` ✓ ${title}`);
        else if (r.state === "skip") lines.push(` ↓ ${title} [skipped]`);
        else if (r.state === "todo") lines.push(` ↓ ${title} [todo]`);
        else { lines.push(` × ${title}`, `   → ${String(r.error && r.error.message).split("\n")[0]}`); fails.push([` FAIL  ${title}`, r.error]); }
      }));
      if (fails.length) {
        lines.push("", `⎯⎯⎯⎯⎯⎯⎯ Failed Tests ${fails.length} ⎯⎯⎯⎯⎯⎯⎯`);
        fails.forEach(([t, e], i) => { lines.push("", t, errText(e)); lines.push(`⎯⎯⎯[${i + 1}/${fails.length}]⎯`); });
      }
      const all = per.flatMap(p => p[1]);
      const tf = per.filter(([, rs]) => rs.some(r => r.state === "fail")).length, tp = per.length - tf;
      const n = s => all.filter(r => r.state === s).length;
      const part = (label, items) => items.filter(([c]) => c).map(([c, w]) => `${c} ${w}`).join(" | ") + ` (${label})`;
      lines.push("", ` Test Files  ${part(per.length, [[tf, "failed"], [tp, "passed"]])}`);
      lines.push(`      Tests  ${part(all.length, [[n("fail"), "failed"], [n("pass"), "passed"], [n("skip") + n("todo"), "skipped"]])}`);
      lines.forEach(l => say(l, kind));
      return per;
    }
    async function playwrightRun(files, kind) {
      const sayK = (t) => say(t, kind);
      const per = [];
      for (const f of files) per.push([f, await runFile(f)]);
      const all = per.flatMap(([f, rs]) => rs.map(r => Object.assign({ file: f }, r)));
      sayK("");
      sayK(`Running ${all.length} test${all.length === 1 ? "" : "s"} using 1 worker`);
      sayK("");
      all.forEach((r, i) => sayK(`  ${r.state === "pass" ? "✓" : r.state === "skip" ? "-" : "✘"}  ${i + 1} [chromium] › ${[r.file, ...r.path, r.name].join(" › ")}`));
      const failed = all.filter(r => r.state === "fail");
      failed.forEach((r, i) => {
        sayK("");
        sayK(`  ${i + 1}) [chromium] › ${[r.file, ...r.path, r.name].join(" › ")} `);
        sayK("");
        String(errText(r.error)).replace(/^AssertionError: /, "Error: ").split("\n").forEach(l => sayK("    " + l));
      });
      sayK("");
      if (failed.length) { sayK(`  ${failed.length} failed`); failed.forEach(r => sayK(`    [chromium] › ${[r.file, ...r.path, r.name].join(" › ")} `)); }
      const passed = all.filter(r => r.state === "pass").length;
      if (passed) sayK(`  ${passed} passed`);
      return all;
    }

    // ---------- YAML مبسّط و GitHub Actions ----------
    function parseYaml(src) {
      const lines = src.split("\n").map(l => l.replace(/\s+#.*$/, "").replace(/^\s*#.*$/, "")).map(l => l.replace(/\s+$/, ""));
      let i = 0;
      const indentOf = l => l.match(/^ */)[0].length;
      const scalar = v => {
        v = v.trim();
        if (/^".*"$|^'.*'$/.test(v)) return v.slice(1, -1);
        if (/^\[.*\]$/.test(v)) return v.slice(1, -1).split(",").map(x => scalar(x)).filter(x => x !== "");
        if (/^-?\d+(\.\d+)?$/.test(v)) return Number(v);
        if (v === "true" || v === "false") return v === "true";
        if (v === "null" || v === "~") return null;
        return v;
      };
      function block(ind) {
        while (i < lines.length && !lines[i].trim()) i++;
        if (i >= lines.length) return null;
        if (lines[i].trim().startsWith("- ") || lines[i].trim() === "-") {
          const arr = [];
          while (i < lines.length) {
            while (i < lines.length && !lines[i].trim()) i++;
            if (i >= lines.length || indentOf(lines[i]) !== ind || !lines[i].trim().startsWith("-")) break;
            const rest = lines[i].trim().replace(/^-\s?/, "");
            if (!rest) { i++; arr.push(block(ind + 2)); continue; }
            if (/^[\w.-]+\s*:(\s|$)/.test(rest)) { lines[i] = " ".repeat(ind + 2) + rest; arr.push(block(ind + 2)); }
            else { arr.push(scalar(rest)); i++; }
          }
          return arr;
        }
        const obj = {};
        while (i < lines.length) {
          while (i < lines.length && !lines[i].trim()) i++;
          if (i >= lines.length || indentOf(lines[i]) !== ind) break;
          const m = lines[i].trim().match(/^([^:]+?)\s*:(?:\s+(.*))?$/);
          if (!m) throw new Error(`YAML غير صالح في السطر ${i + 1}: ${lines[i].trim()}`);
          const key = m[1].replace(/^["']|["']$/g, "");
          i++;
          if (m[2] === "|" || m[2] === ">") {
            const buf = [];
            while (i < lines.length && (!lines[i].trim() || indentOf(lines[i]) > ind)) buf.push(lines[i++].trim());
            obj[key] = buf.join(m[2] === "|" ? "\n" : " ").trim();
          } else if (m[2] !== undefined && m[2] !== "") obj[key] = scalar(m[2]);
          else {
            while (i < lines.length && !lines[i].trim()) i++;
            obj[key] = i < lines.length && indentOf(lines[i]) > ind ? block(indentOf(lines[i])) : i < lines.length && indentOf(lines[i]) === ind && lines[i].trim().startsWith("-") ? block(ind) : null;
          }
        }
        return obj;
      }
      return block(0) || {};
    }
    async function ciRun(event = "push") {
      const wf = Object.keys(FILES).filter(f => /^\.github\/workflows\/.+\.ya?ml$/.test(f));
      if (!wf.length) { say("✗ لا يوجد ملف في ‎.github/workflows"); return; }
      for (const f of wf) {
        let y;
        try { y = parseYaml(FILES[f]); } catch (e) { say("✗ " + e.message); continue; }
        const on = y.on === undefined ? y.true : y.on;
        const events = typeof on === "string" ? [on] : Array.isArray(on) ? on : Object.keys(on || {});
        say(`📄 ${f}: ${y.name || f}`);
        say(`   الأحداث: ${events.join(", ") || "(لا شيء)"}`);
        if (!events.includes(event)) { say(`   ⊘ لن يعمل عند ${event}`); continue; }
        for (const [jobId, job] of Object.entries(y.jobs || {})) {
          say(`▶ ${jobId} (${job["runs-on"] || "؟"})`);
          if (!job["runs-on"]) { say("   ✗ يجب تحديد runs-on"); continue; }
          let failed = false, node = null;
          say("   ✓ Set up job");
          for (const step of job.steps || []) {
            const label = step.name || (step.uses ? `Run ${step.uses}` : `Run ${String(step.run).split("\n")[0]}`);
            const always = /always\(\)/.test(String(step.if || ""));
            if (failed && !always) { say(`   ⊘ ${label}`); continue; }
            if (step.uses) {
              if (/^actions\/setup-node@/.test(step.uses)) { node = step.with && step.with["node-version"]; say(`   ✓ ${label}${node ? `  (Node.js ${node})` : ""}`); }
              else say(`   ✓ ${label}`);
              continue;
            }
            const cmds = String(step.run || "").split("\n").map(s => s.trim()).filter(Boolean);
            let ok = true;
            const sub = [];
            for (const c of cmds) {
              const pkg = (() => { try { return JSON.parse(FILES["package.json"] || "{}"); } catch (e) { return {}; } })();
              const script = c.match(/^npm (?:run )?(test|[\w:-]+)$/);
              const cmd = script && pkg.scripts && pkg.scripts[script[1]] ? pkg.scripts[script[1]] : c;
              if (/^npm (ci|install|i)\b/.test(c)) { if (c.startsWith("npm ci") && FILES["package-lock.json"] === undefined) { ok = false; sub.push("npm error The `npm ci` command can only install with an existing package-lock.json"); } else sub.push("added 248 packages in 6s"); }
              else if (/^npx playwright install/.test(c)) sub.push("Downloading Chromium 140.0 ... done");
              else if (/vitest|jest/.test(cmd)) { const per = await vitestRun(unitFiles(), true); const all = per.flatMap(p => p[1]); const nf = all.filter(r => r.state === "fail").length; sub.push(`Tests  ${nf ? nf + " failed | " : ""}${all.filter(r => r.state === "pass").length} passed (${all.length})`); if (nf || !all.length) ok = false; if (!all.length) sub.push("No test files found, exiting with code 1"); }
              else if (/playwright test/.test(cmd)) { const before = out.length; const all = await playwrightRun(e2eFiles()); out.length = before; const nf = all.filter(r => r.state === "fail").length; sub.push(`${nf ? nf + " failed, " : ""}${all.filter(r => r.state === "pass").length} passed`); if (nf || !all.length) ok = false; }
              else if (/^npm run (lint|build)/.test(c)) sub.push("✓ done");
              else if (/^echo /.test(c)) sub.push(c.slice(5).replace(/^["']|["']$/g, ""));
              else if (script && !(pkg.scripts && pkg.scripts[script[1]])) { ok = false; sub.push(`npm error Missing script: "${script[1]}"`); }
              else sub.push("✓ done");
              if (!ok) break;
            }
            say(`   ${ok ? "✓" : "✗"} ${label}`);
            sub.forEach(s => say(`       ${s}`));
            if (!ok) failed = true;
          }
          say(`   ${failed ? "✗ فشلت المهمة" : "✓ نجحت المهمة"}`);
        }
      }
    }

    // ---------- تنفيذ الفحص ----------
    const helpers = {
      print, FILES,
      // تقرير كامل يراه الطالب لكنه لا يدخل في التصحيح
      show: async () => {
        if (unitFiles().length) await vitestRun(unitFiles(), false, undefined, "info");
        if (e2eFiles().length) await playwrightRun(e2eFiles(), "info");
        say("────────────", "info");
      },
      run: async (o = {}) => {
        if (o.only !== "e2e" && unitFiles().length) await vitestRun(unitFiles(), false, o.files);
        if (o.only !== "unit" && e2eFiles().length) await playwrightRun(e2eFiles());
      },
      // يشغّل اختبارات الطالب على نسخة معطوبة من الكود: يجب أن يفشل اختبار واحد على الأقل
      mutate: async (changes, label) => {
        const per = await vitestRun(unitFiles(), true, changes);
        const caught = per.flatMap(p => p[1]).some(r => r.state === "fail");
        say(`${caught ? "✓ الاختبارات تكشف" : "✗ الاختبارات لم تكشف"}: ${label}`);
      },
      mutateE2E: async (changes, label) => {
        const saved = {};
        Object.keys(changes).forEach(k => { saved[k] = FILES[k]; FILES[k] = changes[k]; });
        const before = out.length;
        const all = await playwrightRun(e2eFiles());
        out.length = before;
        Object.keys(saved).forEach(k => { FILES[k] = saved[k]; });
        say(`${all.some(r => r.state === "fail") ? "✓ الاختبارات تكشف" : "✗ الاختبارات لم تكشف"}: ${label}`);
      },
      ci: ciRun, parseYaml,
      check: (label, cond) => say(`${cond ? "✓" : "✗"} ${label}`),
      e2eResults: async () => { const before = out.length; const all = await playwrightRun(e2eFiles()); out.length = before; return all; },
      results: async () => (await vitestRun(unitFiles(), true)).flatMap(p => p[1])
    };
    (async () => {
      try { await new Function(...Object.keys(helpers), `return (async () => {\n${TEST || "await run();"}\n})();`)(...Object.values(helpers)); }
      catch (e) { say(errText(e), "err"); }
      post(out);
    })();
  }

  // ======== جهة الصفحة ========
  CW.runTests = function (code, setup, test, container, onDone) {
    const files = Object.assign({}, setup ? splitFiles(setup) : {}, splitFiles(code));
    const token = Math.random().toString(36).slice(2);
    const frame = document.createElement("iframe");
    // allow-same-origin حتى تتحكم واجهة Playwright في إطار الصفحة الداخلي (الكود كود الطالب نفسه في متصفحه)
    frame.setAttribute("sandbox", "allow-scripts allow-forms allow-same-origin");
    frame.style.cssText = "width:1px;height:1px;border:0;position:absolute;left:-9999px";
    let finished = false;
    const finish = lines => {
      if (finished) return;
      finished = true;
      window.removeEventListener("message", onMsg);
      frame.remove();
      onDone(lines);
    };
    const onMsg = e => { if (e.source === frame.contentWindow && e.data && e.data.token === token) finish(e.data.out); };
    window.addEventListener("message", onMsg);
    const safe = v => JSON.stringify(v).replace(/<\//g, "<\\/");
    frame.srcdoc = `<!DOCTYPE html><html dir="rtl" lang="ar"><head><meta charset="utf-8"></head><body><script>
(${framework.toString().replace(/<\/script/gi, "<\\/script")})(${safe(files)}, ${safe(test || "")}, out => parent.postMessage({ token: ${safe(token)}, out }, "*"));
<\/script></body></html>`;
    (container || document.body).appendChild(frame);
    setTimeout(() => finish([{ kind: "err", text: "انتهت مهلة تشغيل الاختبارات (40 ثانية). هل توجد حلقة لا تنتهي؟" }]), 40000);
  };
  function splitFiles(code) {
    const files = {};
    let cur = null;
    code.split("\n").forEach(line => {
      const m = line.match(/^\s*(?:\/\/|<!--|#)\s*file:\s*(\S+?)\s*(?:-->)?\s*$/);
      if (m) { cur = m[1].replace(/^\.\//, ""); files[cur] = []; }
      else if (cur) files[cur].push(line);
    });
    Object.keys(files).forEach(f => { files[f] = files[f].join("\n").replace(/\s+$/, "") + "\n"; });
    return files;
  }
  CW.splitTestFiles = splitFiles;
})();
