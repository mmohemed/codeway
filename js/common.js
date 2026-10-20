// CodeWay — أدوات مشتركة بين كل الصفحات
(function () {
  const CW = window.CW;

  // ---------- التخزين الآمن ----------
  CW.store = {
    get(key, fallback) {
      try { const v = localStorage.getItem(key); return v === null ? fallback : JSON.parse(v); }
      catch (e) { return fallback; }
    },
    set(key, value) {
      try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) { /* التخزين غير متاح */ }
    }
  };

  // ---------- البحث في البيانات ----------
  CW.allCourses = () => CW.languages.map(c => ({ ...c, type: "lang" })).concat(CW.tools.map(c => ({ ...c, type: "tool" })));
  CW.getCourse = id => CW.allCourses().find(c => c.id === id);
  CW.getField = id => CW.fields.find(f => f.id === id);
  CW.getPath = id => CW.paths.find(p => p.id === id);
  CW.lessonCount = c => c.modules.reduce((n, m) => n + m.l.length, 0);
  CW.param = name => new URLSearchParams(location.search).get(name);
  CW.esc = s => String(s).replace(/[&<>"']/g, ch => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch]));
  CW.pathsUsing = id => CW.paths.filter(p => p.steps.includes(id));
  CW.fieldsUsing = id => CW.fields.filter(f => f.languages.includes(id) || f.tools.includes(id));

  // ---------- هوية اللون ----------
  // يحوّل لون اللغة أو المجال إلى متغيرات CSS: خلفية الرأس، ولون مقروء على الأبيض، ولون النص فوقه
  const rgb = hex => { const n = parseInt(hex.slice(1), 16); return [n >> 16, (n >> 8) & 255, n & 255]; };
  const toHex = c => "#" + c.map(v => Math.round(v).toString(16).padStart(2, "0")).join("");
  const mix = (a, b, t) => a.map((v, i) => v + (b[i] - v) * t);
  const lum = c => {
    const [r, g, b] = c.map(v => { v /= 255; return v <= .03928 ? v / 12.92 : Math.pow((v + .055) / 1.055, 2.4); });
    return .2126 * r + .7152 * g + .0722 * b;
  };
  CW.applyBrand = hex => {
    const c = rgb(hex);
    let ink = c;
    // نغمّق اللون حتى يصبح مقروءاً كنص أو زر على خلفية بيضاء
    while (lum(ink) > .18) ink = mix(ink, [0, 0, 0], .12);
    const st = document.documentElement.style;
    st.setProperty("--brand", hex);
    st.setProperty("--brand-ink", toHex(ink));
    st.setProperty("--brand-soft", toHex(mix(c, [255, 255, 255], .88)));
    st.setProperty("--on-brand", lum(c) > .45 ? "#141a26" : "#ffffff");
  };
  // نقش ثابت لكل عنصر حسب ترتيبه في قائمته، حتى لا تتشابه الصفحات المتجاورة
  CW.patternClass = id => {
    const lists = [CW.languages, CW.tools, CW.fields, CW.paths];
    for (const list of lists) {
      const i = list.findIndex(x => x.id === id);
      if (i >= 0) return "pat-" + (i % 5);
    }
    return "pat-0";
  };

  // ---------- تتبّع التقدّم ----------
  // يُحفظ كقائمة مفاتيح "رقم الوحدة-رقم الدرس" لكل دورة
  CW.progress = {
    all() { return CW.store.get("cw-progress", {}); },
    list(courseId) { return this.all()[courseId] || []; },
    isDone(courseId, m, l) { return this.list(courseId).includes(m + "-" + l); },
    toggle(courseId, m, l) {
      const all = this.all();
      const key = m + "-" + l;
      const list = all[courseId] || [];
      all[courseId] = list.includes(key) ? list.filter(k => k !== key) : list.concat(key);
      CW.store.set("cw-progress", all);
      return all[courseId].includes(key);
    },
    percent(courseId) {
      const c = CW.getCourse(courseId);
      if (!c) return 0;
      return Math.round((this.list(courseId).length / CW.lessonCount(c)) * 100);
    }
  };

  // ---------- مكونات البطاقات ----------
  CW.courseCard = c => {
    const pct = CW.progress.percent(c.id);
    return `
      <a class="card tinted" style="--c:${c.color}" href="course.html?id=${c.id}">
        <div class="card-top">
          <span class="lang-badge" style="background:${c.color}">${CW.esc(c.short)}</span>
          <div><h3>${CW.esc(c.name)}</h3><span class="muted" style="font-size:13px">${c.kind || "لغة برمجة"}</span></div>
        </div>
        <p>${CW.esc(c.desc)}</p>
        ${pct ? `<div class="progress"><i style="width:${pct}%"></i></div><span class="mini-progress">أنجزت ${pct}%</span>` : ""}
        <div class="meta">
          <span class="tag tag-primary">${c.level}</span>
          <span class="tag">${c.modules.length} وحدات</span>
          <span class="tag">${CW.lessonCount(c)} درساً</span>
          <span class="tag">${c.hours} ساعة</span>
        </div>
      </a>`;
  };

  CW.fieldCard = f => `
    <a class="card tinted" style="--c:${f.color}" href="field.html?id=${f.id}">
      <div class="card-top"><span class="field-icon" style="background:${f.color}1f">${f.icon}</span><h3>${CW.esc(f.name)}</h3></div>
      <p>${CW.esc(f.desc)}</p>
      <div class="meta">
        <span class="tag">${f.languages.length} لغات</span>
        <span class="tag">${f.tools.length} أدوات ومكتبات</span>
      </div>
    </a>`;

  CW.pathCard = p => `
    <a class="card tinted" style="--c:${CW.getField(p.field).color}" href="path.html?id=${p.id}">
      <div class="card-top"><span class="field-icon" style="background:${CW.getField(p.field).color}1f">${p.icon}</span>
        <div><h3>${CW.esc(p.name)}</h3><span class="muted" style="font-size:13px">مسار مهني</span></div></div>
      <p>${CW.esc(p.desc)}</p>
      <div class="meta">
        <span class="tag tag-primary">${p.level}</span>
        <span class="tag">${p.months} أشهر</span>
        <span class="tag">${p.steps.length} خطوات</span>
        <span class="tag tag-green">${p.projects.length + 1} مشاريع</span>
      </div>
    </a>`;

  // ---------- الترويسة والتذييل ----------
  const page = location.pathname.split("/").pop() || "index.html";
  const navItems = [
    ["index.html", "الرئيسية"],
    ["catalog.html?tab=languages", "اللغات"],
    ["catalog.html?tab=fields", "المجالات"],
    ["catalog.html?tab=paths", "المسارات المهنية"],
    ["catalog.html?tab=tools", "الأدوات والمكتبات"]
  ];
  const currentTab = CW.param("tab");

  function renderHeader() {
    const el = document.getElementById("site-header");
    if (!el) return;
    el.className = "site-header";
    el.innerHTML = `
      <div class="container nav">
        <button class="icon-btn menu-toggle" id="menu-toggle" aria-label="القائمة">☰</button>
        <a class="logo" href="index.html"><span class="logo-mark">&lt;/&gt;</span><span class="ltr">Code<b>Way</b></span></a>
        <nav class="nav-links" id="nav-links">
          ${navItems.map(([href, label]) => {
            const [file, q] = href.split("?");
            const active = file === page && (!q || q === "tab=" + currentTab) ? " active" : "";
            return `<a class="${active}" href="${href}">${label}</a>`;
          }).join("")}
        </nav>
        <div class="nav-actions">
          <form class="nav-search" action="catalog.html">
            <input type="search" name="q" placeholder="ابحث عن لغة أو أداة..." aria-label="بحث">
          </form>
          <a class="btn btn-ghost" href="#">دخول</a>
          <a class="btn btn-primary" href="catalog.html">ابدأ مجاناً</a>
        </div>
      </div>`;
    document.getElementById("menu-toggle").onclick = () => document.getElementById("nav-links").classList.toggle("open");
  }

  function renderFooter() {
    const el = document.getElementById("site-footer");
    if (!el) return;
    el.className = "site-footer";
    const col = (title, items) => `<div><h4>${title}</h4><ul>${items.map(([h, t]) => `<li><a href="${h}">${t}</a></li>`).join("")}</ul></div>`;
    el.innerHTML = `
      <div class="container">
        <div class="footer-grid">
          <div>
            <a class="logo" href="index.html"><span class="logo-mark">&lt;/&gt;</span><span class="ltr">Code<b>Way</b></span></a>
            <p class="muted">طريقك من أول سطر برمجي إلى أول وظيفة. لغات ومجالات ومسارات مهنية كاملة باللغة العربية.</p>
          </div>
          ${col("اللغات", CW.languages.slice(0, 5).map(c => ["course.html?id=" + c.id, c.name]))}
          ${col("المجالات", CW.fields.slice(0, 5).map(f => ["field.html?id=" + f.id, f.name]))}
          ${col("المسارات", CW.paths.slice(0, 5).map(p => ["path.html?id=" + p.id, p.name]))}
          ${col("المنصة", [["index.html#pricing", "الأسعار"], ["index.html#faq", "الأسئلة الشائعة"], ["#", "المدونة"], ["#", "تواصل معنا"], ["#", "الشروط والخصوصية"]])}
        </div>
        <div class="footer-bottom">
          <span>© ${new Date().getFullYear()} CodeWay. جميع الحقوق محفوظة.</span>
          <span>صُنع بحب للمبرمجين العرب</span>
        </div>
      </div>`;
  }

  document.addEventListener("DOMContentLoaded", () => { renderHeader(); renderFooter(); });
})();
