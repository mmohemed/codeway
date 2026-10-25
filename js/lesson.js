// صفحة الدرس: الشرح، والتمرين المصحَّح تلقائياً، والاختبار، والتنقل بين الدروس
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
          <p class="muted" id="lesson-meta">${CW.esc(c.name)}</p>
          <div id="lesson-body"><div class="placeholder">جاري تحميل الدرس...</div></div>
          <div class="lesson-footer">
            ${prev ? `<a class="btn btn-ghost" href="${link(prev)}">→ الدرس السابق</a>` : `<a class="btn btn-ghost" href="course.html?id=${c.id}">→ صفحة الدورة</a>`}
            <button class="btn" id="done-btn"></button>
            ${next ? `<a class="btn btn-primary" href="${link(next)}">الدرس التالي ←</a>` : `<a class="btn btn-primary" href="course.html?id=${c.id}">إنهاء الدورة 🎉</a>`}
          </div>
        </article>
      </div>
    </div></div>`;

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
  const markDone = () => { if (!CW.progress.isDone(c.id, m, l)) CW.progress.toggle(c.id, m, l); renderNav(); };
  document.getElementById("done-btn").onclick = () => { CW.progress.toggle(c.id, m, l); renderNav(); };
  renderNav();
  const nav = document.getElementById("lesson-nav");
  const cur = nav.querySelector("a.current");
  if (cur) nav.scrollTop = cur.offsetTop - nav.clientHeight / 2;

  // ---------- المحتوى ----------
  const body = document.getElementById("lesson-body");
  CW.loadContent(c.id, modules => {
    const lesson = modules && modules[m] && modules[m][l];
    if (!lesson) {
      body.innerHTML = `
        <div class="placeholder">📝 محتوى هذا الدرس قيد الإعداد وسيُضاف قريباً.<br>
        المحتوى الكامل متاح حالياً في دورة <a style="color:var(--brand-ink);font-weight:600" href="course.html?id=javascript">JavaScript</a>.</div>`;
      return;
    }
    const words = lesson.body.replace(/<[^>]+>/g, " ").split(/\s+/).length;
    document.getElementById("lesson-meta").textContent = `${c.name} · وقت القراءة ${Math.max(3, Math.round(words / 130))} دقائق تقريباً`;
    body.innerHTML = `
      <div class="prose">${lesson.body}</div>
      ${lesson.exercise ? `<h2 class="sec-title">⌨️ التمرين العملي</h2><div id="exercise"></div>` : ""}
      ${lesson.quiz ? `<h2 class="sec-title">📝 اختبر فهمك</h2><div id="quiz"></div>` : ""}`;
    if (CW.renderTwDemos) CW.renderTwDemos(document.querySelector(".prose"));
    if (CW.renderFwDemos) CW.renderFwDemos(document.querySelector(".prose"));
    if (lesson.exercise) renderExercise(lesson.exercise);
    if (lesson.quiz) renderQuiz(lesson.quiz);
  });

  // ---------- التمرين ----------
  function renderExercise(ex) {
    const box = document.getElementById("exercise");
    const meta = CW.contentMeta[c.id] || {};
    const runner = meta.runner || "js";
    const isDom = runner === "js" && !!ex.html;
    const isTw = runner === "tailwind";
    const isFw = runner === "vue" || runner === "angular";
    const setup = ex.setup || meta.setup || "";
    const fileName = { sql: "query.sql", dart: "main.dart", ts: "main.ts", kotlin: "Main.kt", terminal: "Terminal", tailwind: "index.html", next: "Next.js", tests: "Vitest / Playwright", vue: "Vue", angular: "Angular" }[runner] || (isDom ? "script.js" : "exercise.js");
    const key = `cw-code-${c.id}-${m}-${l}`;
    const saved = CW.store.get(key, null);
    box.innerHTML = `
      <div class="exercise">
        <div class="prose">${ex.prompt}</div>
        ${runner === "sql" && meta.schema ? `<details class="acc schema-box"><summary>📋 جداول قاعدة البيانات في هذا التمرين</summary><div class="acc-body">${ex.schema || meta.schema}</div></details>` : ""}
        ${runner === "dart" ? `<p class="muted net-note">🌐 تشغيل Dart يتم عبر خدمة الترجمة الرسمية لـ DartPad، لذلك يحتاج اتصالاً بالإنترنت.</p>` : ""}
        ${isFw ? `<p class="muted net-note">${runner === "vue" ? "💚 Vue 3 الحقيقي مع Vue Router و Pinia" : "🅰️ Angular الحقيقي (يُترجم في المتصفح)"} يعمل في المعاينة. اكتب ملفات المشروع وابدأ كل ملف بسطر <code dir="ltr">// file: المسار</code> (أو <code dir="ltr">&lt;!-- file: المسار --&gt;</code> لملفات ${runner === "vue" ? ".vue" : "HTML"}). أول تحميل قد يستغرق ثوانيَ.</p>` : ""}
        ${runner === "tests" ? `<p class="muted net-note">🧪 اكتب ملفات المشروع والاختبارات في المحرر، وابدأ كل ملف بسطر <code dir="ltr">// file: اسم-الملف</code>. التشغيل ينفّذ الاختبارات ويعرض النتيجة كما تعرضها Vitest و Playwright.</p>` : ""}
        ${runner === "next" ? `<p class="muted net-note">▲ اكتب ملفات المشروع في المحرر، وابدأ كل ملف بسطر مثل <code dir="ltr">// file: app/page.tsx</code>. التشغيل يبني التطبيق ويزور صفحاته ويطبع النتيجة، كما يفعل الفحص.</p>` : ""}
        ${isTw ? `<p class="muted net-note">🎨 اكتب HTML بأصناف Tailwind، وستظهر المعاينة تحت المحرر. الفحص يقارن الأنماط المحسوبة فعلاً، فأي أصناف تعطي نفس النتيجة مقبولة.</p>` : ""}
        ${runner === "terminal" ? `<p class="muted net-note">💻 هذه طرفية محاكاة داخل المتصفح: اكتب كل أمر في سطر، وستُنفَّذ بالترتيب على مستودع جديد في كل تشغيل. تدعم أوامر Git و gh و npm و node و Vite و ESLint و Prettier، وأوامر الملفات مثل echo و cat و ls، وكتابة ملف من عدة أسطر بـ cat > file &lt;&lt;EOF.</p>` : ""}
        ${runner === "kotlin" ? `<p class="muted net-note">🌐 تشغيل Kotlin يتم عبر خدمة Kotlin Playground الرسمية من JetBrains، لذلك يحتاج اتصالاً بالإنترنت، وقد يستغرق ثوانيَ قليلة.</p>` : ""}
        <div class="editor">
          <div class="editor-bar">
            <span class="dot" style="background:#ff5f57"></span><span class="dot" style="background:#febc2e"></span><span class="dot" style="background:#28c840"></span>
            <span class="file">${fileName}</span>
            <span class="editor-actions">
              <button class="btn btn-sm btn-dark" id="ex-reset" title="إرجاع الكود الأصلي">↺</button>
              <button class="btn btn-sm btn-dark" id="ex-run">▶ تشغيل</button>
              <button class="btn btn-sm btn-success" id="ex-check">✓ تحقق من الحل</button>
            </span>
          </div>
          <textarea id="ex-code" wrap="off" spellcheck="false" aria-label="محرر التمرين"></textarea>
          ${isDom || isTw || isFw ? `<div class="preview${isTw || isFw ? " tw" : ""}"><span class="preview-label">معاينة الصفحة</span><div id="ex-preview"></div></div>` : ""}
          <pre class="editor-out" id="ex-out"><span class="hint">// اضغط «تشغيل» لرؤية المخرجات، أو «تحقق من الحل» لتصحيح التمرين (Ctrl+Enter للتشغيل)</span></pre>
        </div>
        <div id="ex-result"></div>
        <details class="acc hint-box"><summary>💡 عرض الحل النموذجي</summary><div class="acc-body">
          <p>حاول أولاً بنفسك، ثم قارن حلك بهذا الحل:</p>
          <div class="code-block src"><pre dir="ltr"><code>${CW.esc(ex.solution)}</code></pre></div>
        </div></details>
      </div>`;
    const ta = document.getElementById("ex-code");
    const out = document.getElementById("ex-out");
    const result = document.getElementById("ex-result");
    ta.value = saved != null ? saved : ex.starter;
    ta.style.minHeight = Math.min(420, Math.max(160, ex.starter.split("\n").length * 24 + 40)) + "px";
    ta.addEventListener("input", () => CW.store.set(key, ta.value));

    // بعض المشغّلات تُرجع مخرجات للعرض (shown) ومخرجات فحص مخفي (graded) هي التي تُصحَّح
    const execute = (done, grading) => {
      out.innerHTML = '<span class="hint">جاري التشغيل...</span>';
      const finish = (lines, graded) => {
        const view = graded && grading ? [...lines, { kind: "sep", text: "🔎 نتيجة الفحص:" }, ...graded] : lines;
        CW.renderOutput(out, view);
        done && done(graded || lines, !!graded);
      };
      if (isFw) CW.runFramework(runner, ta.value, ex.setup || "", grading ? ex.test || "" : "", document.getElementById("ex-preview"), lines => {
        const errs = lines.filter(l => l.kind === "err" || l.kind === "info");
        finish(grading ? errs : [...errs, { kind: "info", text: "✓ تم تشغيل التطبيق في المعاينة. اضغط «تحقق من الحل» لفحصه." }], grading ? lines.filter(l => l.kind !== "info") : undefined);
      });
      else if (runner === "tests") CW.runTests(ta.value, ex.setup || "", ex.test || "", null, lines => finish(lines));
      else if (runner === "next") CW.loadTS().then(() => CW.nextRun(ta.value, ex.setup || "", ex.test || "")).then(lines => finish(lines), e => finish([{ kind: "err", text: e.message }]));
      else if (runner === "terminal") CW.gitRun(ta.value, ex.setup || "", ex.test || "").then(r => finish(r.shown, ex.test ? r.graded : undefined));
      else if (runner === "sql") CW.runSQL(ta.value, setup, finish);
      else if (runner === "dart") CW.runDart(ta.value, finish);
      else if (runner === "ts") CW.runTS(ta.value, finish);
      else if (runner === "kotlin") CW.runKotlin(ta.value, finish);
      else if (isTw) CW.runTailwind(ta.value, grading ? ex.test || "" : "", document.getElementById("ex-preview"), lines => {
        const errs = lines.filter(l => l.kind === "err");
        finish(grading ? errs : [...errs, { kind: "info", text: "✓ تم تحديث المعاينة. اضغط «تحقق من الحل» لفحص التصميم." }], grading ? lines : undefined);
      });
      else if (isDom) CW.runDOM(ta.value, ex.html, document.getElementById("ex-preview"), finish);
      else CW.runJS(ta.value, finish);
    };
    const norm = s => s.split("\n").map(x => x.trim()).join("\n").trim();
    const check = () => execute((lines, isGraded) => {
      const errors = lines.filter(x => x.kind === "err" && !isGraded);
      const got = norm(lines.filter(x => !["err", "info", "cmd", "sep"].includes(x.kind)).map(x => x.text).join(runner === "sql" ? "\n\n" : "\n"));
      const want = norm(ex.expected);
      if (!errors.length && got === want) {
        result.innerHTML = `<div class="result ok">🎉 أحسنت! حلّك صحيح، وتم تسجيل الدرس كمنجز.</div>`;
        markDone();
      } else {
        result.innerHTML = `<div class="result bad">
          <b>${errors.length ? "⚠️ يوجد خطأ في الكود، اقرأ رسالة الخطأ في المخرجات." : "✗ ليس بعد، المخرجات لا تطابق المطلوب."}</b>
          <div class="compare">
            <div><span>المطلوب</span><pre dir="ltr">${CW.esc(want)}</pre></div>
            <div><span>مخرجاتك</span><pre dir="ltr">${CW.esc(got) || "(لا شيء)"}</pre></div>
          </div></div>`;
      }
    }, true);
    document.getElementById("ex-run").onclick = () => { result.innerHTML = ""; execute(); };
    document.getElementById("ex-check").onclick = check;
    document.getElementById("ex-reset").onclick = () => { ta.value = ex.starter; CW.store.set(key, null); result.innerHTML = ""; };
    CW.editorKeys(ta, () => execute());
    if (isDom || isTw || isFw) execute();
  }

  // ---------- الاختبار ----------
  function renderQuiz(qs) {
    const box = document.getElementById("quiz");
    box.innerHTML = qs.map((q, qi) => `
      <div class="q-card" data-q="${qi}">
        <p class="q-text">${qi + 1}. ${q.q}</p>
        <div class="q-opts">${q.o.map((o, oi) => `<button class="q-opt" data-o="${oi}">${o}</button>`).join("")}</div>
        <div class="q-why"></div>
      </div>`).join("") + `<div id="quiz-score"></div>`;
    let answered = 0, correct = 0;
    box.querySelectorAll(".q-card").forEach(card => {
      const q = qs[+card.dataset.q];
      card.querySelectorAll(".q-opt").forEach(btn => btn.onclick = () => {
        if (card.classList.contains("answered")) return;
        card.classList.add("answered");
        const pick = +btn.dataset.o;
        card.querySelectorAll(".q-opt")[q.a].classList.add("right");
        if (pick !== q.a) btn.classList.add("wrong");
        else correct++;
        answered++;
        card.querySelector(".q-why").innerHTML = `${pick === q.a ? "✓ إجابة صحيحة. " : "✗ الإجابة الصحيحة مظللة بالأخضر. "}${q.why}`;
        if (answered === qs.length)
          document.getElementById("quiz-score").innerHTML = `<div class="result ${correct === qs.length ? "ok" : "info"}">نتيجتك: ${correct} من ${qs.length}${correct === qs.length ? " 🌟 ممتاز!" : ". راجع الشرح للنقاط التي أخطأت فيها."}</div>`;
      });
    });
  }
})();
