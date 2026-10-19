// صفحة الكتالوج: بحث وتبويبات وفلترة
(function () {
  const tabs = {
    languages: { label: "اللغات", items: () => CW.languages, card: CW.courseCard },
    tools: { label: "الأدوات والمكتبات", items: () => CW.tools, card: CW.courseCard },
    fields: { label: "المجالات", items: () => CW.fields, card: CW.fieldCard },
    paths: { label: "المسارات المهنية", items: () => CW.paths, card: CW.pathCard }
  };
  let tab = tabs[CW.param("tab")] ? CW.param("tab") : "languages";
  let q = CW.param("q") || "";
  let level = "";
  // البحث من الترويسة يبحث في كل شيء
  if (q && !CW.param("tab")) tab = "all";

  document.getElementById("app").innerHTML = `
    <div class="page-hero"><div class="container">
      <div class="crumbs"><a href="index.html">الرئيسية</a> / <span>الكتالوج</span></div>
      <h1>استكشف محتوى CodeWay</h1>
      <p>كل اللغات والأدوات والمجالات والمسارات المهنية في مكان واحد. ابحث أو صفِّ حسب المستوى.</p>
    </div></div>
    <div class="page-body"><div class="container">
      <div class="toolbar">
        <div class="tabs" id="tabs"></div>
        <input type="search" id="q" placeholder="ابحث بالاسم أو الوصف..." value="${CW.esc(q)}">
        <select id="level" aria-label="المستوى">
          <option value="">كل المستويات</option><option>مبتدئ</option><option>متوسط</option><option>متقدم</option>
        </select>
      </div>
      <div id="results"></div>
    </div></div>`;

  const tabsEl = document.getElementById("tabs");
  const results = document.getElementById("results");

  function renderTabs() {
    const list = [["all", "الكل"]].concat(Object.entries(tabs).map(([k, v]) => [k, v.label]));
    tabsEl.innerHTML = list.map(([k, l]) => `<button class="tab${k === tab ? " active" : ""}" data-k="${k}">${l}</button>`).join("");
    tabsEl.querySelectorAll(".tab").forEach(b => b.onclick = () => { tab = b.dataset.k; render(); });
  }

  const matches = item => {
    const text = (item.name + " " + item.desc).toLowerCase();
    return (!q || text.includes(q.toLowerCase())) && (!level || !item.level || item.level === level);
  };

  function section(key) {
    const t = tabs[key];
    const items = t.items().filter(matches);
    if (!items.length) return "";
    return `<h2 style="margin:8px 0 14px">${t.label} <span class="muted" style="font-size:16px">(${items.length})</span></h2>
            <div class="grid grid-3" style="margin-bottom:32px">${items.map(t.card).join("")}</div>`;
  }

  function render() {
    renderTabs();
    const html = tab === "all" ? Object.keys(tabs).map(section).join("") : section(tab);
    results.innerHTML = html || `<div class="empty">لا توجد نتائج مطابقة. جرّب كلمة أخرى.</div>`;
    const url = new URL(location.href);
    url.searchParams.set("tab", tab);
    q ? url.searchParams.set("q", q) : url.searchParams.delete("q");
    history.replaceState(null, "", url);
  }

  document.getElementById("q").addEventListener("input", e => { q = e.target.value.trim(); render(); });
  document.getElementById("level").addEventListener("change", e => { level = e.target.value; render(); });
  render();
})();
