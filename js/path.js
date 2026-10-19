// صفحة المسار المهني: خطوات مرتبة على خط زمني
(function () {
  const app = document.getElementById("app");
  const p = CW.getPath(CW.param("id"));
  if (!p) {
    app.innerHTML = `<div class="container empty"><h2>المسار غير موجود</h2><a class="btn btn-primary" href="catalog.html?tab=paths">كل المسارات</a></div>`;
    return;
  }
  document.title = p.name + " | CodeWay";
  const steps = p.steps.map(CW.getCourse);
  const lessons = steps.reduce((n, c) => n + CW.lessonCount(c), 0);
  const hours = steps.reduce((n, c) => n + c.hours, 0);
  const done = steps.reduce((n, c) => n + CW.progress.list(c.id).length, 0);
  const pct = Math.round((done / lessons) * 100);
  const field = CW.getField(p.field);

  app.innerHTML = `
    <div class="page-hero"><div class="container">
      <div class="crumbs"><a href="index.html">الرئيسية</a> / <a href="catalog.html?tab=paths">المسارات المهنية</a> / <span>${CW.esc(p.name)}</span></div>
      <div class="card-top" style="margin-top:12px"><span class="field-icon" style="width:72px;height:72px;font-size:38px">${p.icon}</span>
        <div><h1>${CW.esc(p.name)}</h1><span class="tag tag-primary">مسار مهني · ${p.level}</span></div></div>
      <p style="margin-top:12px">${CW.esc(p.desc)}</p>
      <div class="hero-meta">
        <div><b>${p.months}</b><span>أشهر تقريباً</span></div>
        <div><b>${steps.length}</b><span>خطوات</span></div>
        <div><b>${lessons}</b><span>درساً</span></div>
        <div><b>${hours}</b><span>ساعة</span></div>
        <div><b>${p.projects.length + 1}</b><span>مشاريع</span></div>
      </div>
    </div></div>

    <div class="page-body"><div class="container layout-side">
      <div>
        <h2 style="margin-top:0">خطة المسار خطوة بخطوة</h2>
        <div class="timeline">
          ${steps.map((c, i) => {
            const cp = CW.progress.percent(c.id);
            return `<div class="t-item${cp === 100 ? " done" : ""}" data-n="${i + 1}">
              <a class="card" href="course.html?id=${c.id}">
                <div class="card-top"><span class="lang-badge" style="background:${c.color}">${CW.esc(c.short)}</span>
                  <div><span class="muted" style="font-size:13px">الخطوة ${i + 1} · ${c.kind || "لغة برمجة"}</span><h3>${CW.esc(c.name)}</h3></div></div>
                <p>${CW.esc(c.desc)}</p>
                ${cp ? `<div class="progress"><i style="width:${cp}%"></i></div>` : ""}
                <div class="meta"><span class="tag">${c.modules.length} وحدات</span><span class="tag">${CW.lessonCount(c)} درساً</span><span class="tag">${c.hours} ساعة</span>${cp ? `<span class="tag tag-green">${cp}%</span>` : ""}</div>
              </a>
            </div>`;
          }).join("")}
          <div class="t-item" data-n="${steps.length + 1}">
            <div class="card">
              <span class="muted" style="font-size:13px">الخطوة ${steps.length + 1}</span>
              <h3>💼 الاستعداد للوظيفة</h3>
              <ul class="check-list">${CW.careerReady.map(x => `<li>${x}</li>`).join("")}</ul>
            </div>
          </div>
        </div>
      </div>
      <aside class="card side-card">
        <h3>تقدّمك في المسار</h3>
        <div class="progress"><i style="width:${pct}%"></i></div>
        <span class="muted">أنجزت ${done} من ${lessons} درساً (${pct}%)</span>
        <a class="btn btn-primary" href="course.html?id=${(steps.find(c => CW.progress.percent(c.id) < 100) || steps[0]).id}">${done ? "تابع المسار" : "ابدأ المسار"}</a>
        <h4 style="margin:10px 0 0">🛠️ مشاريع المسار</h4>
        <ul class="check-list" style="margin:0">${p.projects.map(x => `<li>${x}</li>`).join("")}</ul>
        <h4 style="margin:6px 0 0">🎓 مشروع التخرج</h4>
        <p style="margin:0">${CW.esc(p.capstone)}</p>
        ${field ? `<h4 style="margin:6px 0 0">المجال</h4><div class="meta"><a class="tag" href="field.html?id=${field.id}">${field.icon} ${field.name}</a></div>` : ""}
        <p class="muted" style="font-size:13px;margin:6px 0 0">🏅 تحصل على شهادة المسار عند إكمال كل الخطوات ومشروع التخرج.</p>
      </aside>
    </div></div>`;
})();
