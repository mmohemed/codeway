// صفحة الدرس: المحتوى، والتمرين، والتنقل بين الدروس
(function () {
  const app = document.getElementById("app");
  const c = CW.getCourse(CW.param("c"));
  const m = +CW.param("m") || 0;
  const l = +CW.param("l") || 0;
  const mod = c && c.modules[m];
  const title = mod && mod.l[l];
  if (!title) {
    app.innerHTML = `<div class="container empty"><h2>الدرس غير موجود</h2><a class="btn btn-primary" href="catalog.html">العودة إلى الكتالوج</a></div>`;
    return;
  }
  document.title = title + " | " + c.name + " | CodeWay";
  CW.applyBrand(c.color);

  // قائمة مسطحة لكل الدروس لتسهيل السابق والتالي
  const flat = [];
  c.modules.forEach((md, mi) => md.l.forEach((_, li) => flat.push([mi, li])));
  const idx = flat.findIndex(([a, b]) => a === m && b === l);
  const prev = flat[idx - 1], next = flat[idx + 1];
  const link = ([a, b]) => `lesson.html?c=${c.id}&m=${a}&l=${b}`;

  // المحرر التفاعلي متاح حالياً لدروس JavaScript فقط
  const jsCourses = ["javascript", "typescript", "react", "nodejs", "vue", "nextjs", "frontend-testing", "phaser"];
  const hasEditor = jsCourses.includes(c.id);

  app.innerHTML = `
    <div class="lesson-head"><div class="container">
      <span class="lang-badge">${CW.esc(c.short)}</span>
      <div class="crumbs"><a href="index.html">الرئيسية</a> / <a href="course.html?id=${c.id}">${CW.esc(c.name)}</a> / <span>الوحدة ${m + 1}: ${CW.esc(mod.t)}</span></div>
    </div></div>
    <div class="page-body"><div class="container">
      <div class="lesson-layout">
        <aside class="card lesson-nav" id="lesson-nav"></aside>
        <article class="card lesson-content">
          <span class="tag tag-primary">الوحدة ${m + 1}: ${CW.esc(mod.t)} · الدرس ${l + 1} من ${mod.l.length}</span>
          <h1 style="margin-top:12px">${CW.esc(title)}</h1>
          <p class="muted">${CW.esc(c.name)} · مدة الدرس التقريبية 10–15 دقيقة</p>

          <h2>🎯 أهداف الدرس</h2>
          <ul class="check-list">
            <li>فهم مفهوم «${CW.esc(title)}» وأين يُستخدم</li>
            <li>كتابة أمثلة عملية عليه بنفسك</li>
            <li>حل تمرين قصير للتأكد من الفهم</li>
          </ul>

          <h2>📖 الشرح</h2>
          <div class="placeholder">مساحة محتوى الدرس: يضاف هنا الشرح النصي، والأمثلة البرمجية، والصور أو فيديو الدرس.</div>

          <h2>⌨️ التمرين العملي</h2>
          ${hasEditor ? `
          <div class="editor">
            <div class="editor-bar">
              <span class="dot" style="background:#ff5f57"></span><span class="dot" style="background:#febc2e"></span><span class="dot" style="background:#28c840"></span>
              <span class="file">exercise.js</span>
              <button class="btn btn-success btn-sm" id="run-btn">▶ Run</button>
            </div>
            <textarea id="code" wrap="off" spellcheck="false">// اكتب حلّك هنا ثم اضغط Run (أو Ctrl+Enter)\nconsole.log("بدأت درس: ${CW.esc(title).replace(/"/g, "")}");</textarea>
            <pre class="editor-out" id="output"><span class="hint">// المخرجات تظهر هنا</span></pre>
          </div>` : `<div class="placeholder">مساحة التمرين: يضاف هنا محرر ${CW.esc(c.name)} التفاعلي مع التصحيح التلقائي.</div>`}

          <h2>📝 اختبار سريع</h2>
          <div class="placeholder">مساحة أسئلة الاختيار من متعدد الخاصة بهذا الدرس.</div>

          <div class="lesson-footer">
            ${prev ? `<a class="btn btn-ghost" href="${link(prev)}">→ الدرس السابق</a>` : `<a class="btn btn-ghost" href="course.html?id=${c.id}">→ صفحة الدورة</a>`}
            <button class="btn" id="done-btn"></button>
            ${next ? `<a class="btn btn-primary" href="${link(next)}">الدرس التالي ←</a>` : `<a class="btn btn-primary" href="course.html?id=${c.id}">إنهاء الدورة 🎉</a>`}
          </div>
        </article>
      </div>
    </div></div>`;

  if (hasEditor) CW.bindEditor(document.getElementById("code"), document.getElementById("run-btn"), document.getElementById("output"));

  function renderNav() {
    document.getElementById("lesson-nav").innerHTML = c.modules.map((md, mi) => `
      <h4>${mi + 1}. ${CW.esc(md.t)}</h4>
      ${md.l.map((ls, li) => `<a href="${link([mi, li])}" class="${mi === m && li === l ? "current" : ""}${CW.progress.isDone(c.id, mi, li) ? " is-done" : ""}"><span class="d"></span>${CW.esc(ls)}</a>`).join("")}
    `).join("");
    const btn = document.getElementById("done-btn");
    const done = CW.progress.isDone(c.id, m, l);
    btn.className = "btn " + (done ? "btn-success" : "btn-ghost");
    btn.textContent = done ? "✓ أنجزت هذا الدرس" : "علّم كمنجز";
  }
  document.getElementById("done-btn").onclick = () => { CW.progress.toggle(c.id, m, l); renderNav(); };
  renderNav();
  // تمرير القائمة الجانبية إلى الدرس الحالي دون تحريك الصفحة
  const nav = document.getElementById("lesson-nav");
  const cur = nav.querySelector("a.current");
  if (cur) nav.scrollTop = cur.offsetTop - nav.clientHeight / 2;
})();
