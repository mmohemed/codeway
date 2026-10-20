// صفحة اللغة أو الأداة: الوحدات والدروس وتتبّع التقدّم
(function () {
  const app = document.getElementById("app");
  const c = CW.getCourse(CW.param("id"));
  if (!c) {
    app.innerHTML = `<div class="container empty"><h2>الدورة غير موجودة</h2><a class="btn btn-primary" href="catalog.html">العودة إلى الكتالوج</a></div>`;
    return;
  }
  document.title = c.name + " | CodeWay";
  const fields = CW.fieldsUsing(c.id);
  const paths = CW.pathsUsing(c.id);
  const total = CW.lessonCount(c);

  // أول درس لم يُنجز بعد
  function nextLesson() {
    for (let m = 0; m < c.modules.length; m++)
      for (let l = 0; l < c.modules[m].l.length; l++)
        if (!CW.progress.isDone(c.id, m, l)) return [m, l];
    return [0, 0];
  }

  CW.applyBrand(c.color);
  const side = c.hello
    ? `<div class="hello-card">
         <div class="editor-bar"><span class="dot" style="background:#ff5f57"></span><span class="dot" style="background:#febc2e"></span><span class="dot" style="background:#28c840"></span><span class="file">${CW.esc(c.ext)}</span></div>
         <pre>${CW.esc(c.hello)}</pre>
       </div>`
    : `<div class="hello-card"><pre style="direction:rtl;font-family:var(--font);font-size:15px">🛠️ ستبني في هذه الدورة:\n${CW.esc(c.project)}</pre></div>`;

  app.innerHTML = `
    <div class="brand-hero ${CW.patternClass(c.id)}">
      <span class="watermark">${CW.esc(c.short)}</span>
      <div class="container brand-grid">
        <div>
          <div class="crumbs"><a href="index.html">الرئيسية</a> / <a href="catalog.html?tab=${c.type === "lang" ? "languages" : "tools"}">${c.type === "lang" ? "اللغات" : "الأدوات والمكتبات"}</a> / <span>${CW.esc(c.name)}</span></div>
          <div class="card-top" style="margin-top:14px">
            <span class="lang-badge">${CW.esc(c.short)}</span>
            <div><h1>${CW.esc(c.name)}</h1><span class="tag">${c.kind || "لغة برمجة"} · ${c.level}</span></div>
          </div>
          <p style="margin-top:14px">${CW.esc(c.desc)}</p>
          <div class="hero-meta">
            <div><b>${c.modules.length}</b><span>وحدات</span></div>
            <div><b>${total}</b><span>درساً</span></div>
            <div><b>${c.hours}</b><span>ساعة تقريباً</span></div>
            <div><b>${c.level}</b><span>المستوى</span></div>
          </div>
        </div>
        ${side}
      </div>
    </div>

    <div class="page-body"><div class="container layout-side">
      <div>
        <h2 style="margin-top:0">محتوى الدورة</h2>
        <div class="modules" id="modules"></div>
        <div class="card id-card" style="margin-top:20px">
          <h3>🛠️ مشروع التخرج</h3>
          <p>${CW.esc(c.project)}</p>
        </div>
      </div>
      <aside class="side-stack">
        <div class="card side-card">
          <h3>تقدّمك</h3>
          <div class="progress"><i id="pbar"></i></div>
          <span class="muted" id="ptext"></span>
          <a class="btn btn-primary" id="continue">ابدأ التعلّم</a>
        </div>
        <div class="card side-card id-card">
          <h3>بطاقة ${CW.esc(c.name)}</h3>
          <div>
            ${c.year ? `<div class="id-row"><span>سنة الإصدار</span><b>${c.year}</b></div>` : ""}
            ${c.by ? `<div class="id-row"><span>المطوّر</span><b>${c.by}</b></div>` : ""}
            ${c.uses ? `<div class="id-row"><span>تُستخدم في</span><b>${c.uses}</b></div>` : ""}
            <div class="id-row"><span>النوع</span><b>${c.kind || "لغة برمجة"}</b></div>
            <div class="id-row"><span>المستوى</span><b>${c.level}</b></div>
          </div>
          ${fields.length ? `<h4 style="margin:6px 0 0">ضمن المجالات</h4><div class="meta">${fields.map(f => `<a class="tag" href="field.html?id=${f.id}">${f.icon} ${f.name}</a>`).join("")}</div>` : ""}
          ${paths.length ? `<h4 style="margin:6px 0 0">ضمن المسارات المهنية</h4><div class="meta">${paths.map(p => `<a class="tag tag-primary" href="path.html?id=${p.id}">${p.name}</a>`).join("")}</div>` : ""}
        </div>
      </aside>
    </div></div>`;

  const modulesEl = document.getElementById("modules");

  function renderModules() {
    const openSet = new Set([...modulesEl.querySelectorAll("details[open]")].map(d => d.dataset.m));
    if (!modulesEl.children.length) openSet.add("0");
    modulesEl.innerHTML = c.modules.map((mod, m) => {
      const done = mod.l.filter((_, l) => CW.progress.isDone(c.id, m, l)).length;
      return `
        <details class="acc module${done === mod.l.length ? " done" : ""}" data-m="${m}"${openSet.has(String(m)) ? " open" : ""}>
          <summary><span class="m-title"><span class="m-num">${done === mod.l.length ? "✓" : m + 1}</span>الوحدة ${m + 1}: ${CW.esc(mod.t)}</span>
            <span class="m-count">${done}/${mod.l.length} دروس</span></summary>
          <ul class="lessons">
            ${mod.l.map((lesson, l) => {
              const on = CW.progress.isDone(c.id, m, l);
              return `<li>
                <button class="chk${on ? " on" : ""}" data-m="${m}" data-l="${l}" aria-label="تعليم كمنجز">${on ? "✓" : ""}</button>
                <a href="lesson.html?c=${c.id}&m=${m}&l=${l}">${m + 1}.${l + 1} ${CW.esc(lesson)}</a>
                <span class="lesson-type">درس + تمرين</span>
              </li>`;
            }).join("")}
            <li><span class="chk" style="border-style:dashed"></span><span style="flex:1;font-weight:600">📝 اختبار الوحدة</span></li>
          </ul>
        </details>`;
    }).join("");
    modulesEl.querySelectorAll(".chk[data-m]").forEach(b => b.onclick = () => {
      CW.progress.toggle(c.id, +b.dataset.m, +b.dataset.l);
      renderModules();
    });
    const pct = CW.progress.percent(c.id);
    document.getElementById("pbar").style.width = pct + "%";
    document.getElementById("ptext").textContent = `أنجزت ${CW.progress.list(c.id).length} من ${total} درساً (${pct}%)`;
    const [nm, nl] = nextLesson();
    const btn = document.getElementById("continue");
    btn.href = `lesson.html?c=${c.id}&m=${nm}&l=${nl}`;
    btn.textContent = pct === 100 ? "🎉 أكملت الدورة، راجع الدروس" : pct ? "تابع التعلّم" : "ابدأ التعلّم";
  }
  renderModules();
})();
