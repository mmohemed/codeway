// صفحة المجال: لغاته وأدواته ومساراته
(function () {
  const app = document.getElementById("app");
  const f = CW.getField(CW.param("id"));
  if (!f) {
    app.innerHTML = `<div class="container empty"><h2>المجال غير موجود</h2><a class="btn btn-primary" href="catalog.html?tab=fields">كل المجالات</a></div>`;
    return;
  }
  document.title = f.name + " | CodeWay";
  const langs = f.languages.map(CW.getCourse);
  const tools = f.tools.map(CW.getCourse);
  const paths = CW.paths.filter(p => p.field === f.id || p.steps.some(s => f.tools.includes(s)));
  CW.applyBrand(f.color);
  const lessons = langs.concat(tools).reduce((n, c) => n + CW.lessonCount(c), 0);

  app.innerHTML = `
    <div class="brand-hero ${CW.patternClass(f.id)}">
      <span class="watermark">${f.icon}</span>
      <div class="container brand-grid">
        <div>
          <div class="crumbs"><a href="index.html">الرئيسية</a> / <a href="catalog.html?tab=fields">المجالات</a> / <span>${CW.esc(f.name)}</span></div>
          <div class="card-top" style="margin-top:14px"><span class="field-icon">${f.icon}</span><div><h1>${CW.esc(f.name)}</h1><span class="tag">مجال برمجي</span></div></div>
          <p style="margin-top:14px">${CW.esc(f.desc)}</p>
          <div class="hero-meta">
            <div><b>${langs.length}</b><span>لغات</span></div>
            <div><b>${tools.length}</b><span>أدوات ومكتبات</span></div>
            <div><b>${lessons}</b><span>درساً</span></div>
            <div><b>${paths.length}</b><span>مسارات مهنية</span></div>
          </div>
        </div>
        <div class="hello-card" style="direction:rtl;padding:18px 20px">
          <b style="font-size:16px">💼 الوظائف في هذا المجال</b>
          <span style="display:grid;gap:6px;margin-top:10px">${(paths.length ? paths : CW.paths.slice(0, 3)).map(p => `<a href="path.html?id=${p.id}">${p.icon} ${p.name} · ${p.months} أشهر</a>`).join("")}</span>
          <b style="font-size:16px;display:block;margin-top:14px">⌨️ اللغات</b>
          <span style="display:flex;flex-wrap:wrap;gap:6px;margin-top:8px;direction:ltr;justify-content:flex-end">${langs.map(l => `<span class="lang-badge" style="background:${l.color};color:#fff;width:40px;height:40px;font-size:12px">${CW.esc(l.short)}</span>`).join("")}</span>
        </div>
      </div>
    </div>
    <div class="page-body"><div class="container">
      <h2>اللغات المستخدمة في هذا المجال</h2>
      <div class="grid grid-3">${langs.map(CW.courseCard).join("")}</div>
      <h2 style="margin-top:40px">الأدوات والمكتبات وأطر العمل</h2>
      <div class="grid grid-3">${tools.map(CW.courseCard).join("")}</div>
      ${paths.length ? `<h2 style="margin-top:40px">المسارات المهنية المرتبطة</h2>
      <div class="grid grid-3">${paths.map(CW.pathCard).join("")}</div>` : ""}
    </div></div>`;
})();
