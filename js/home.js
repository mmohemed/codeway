// الصفحة الرئيسية
(function () {
  const $ = id => document.getElementById(id);

  // المحرر التفاعلي
  CW.bindEditor($("code"), $("run-btn"), $("output"));

  // أرقام المحتوى محسوبة من البيانات الفعلية
  const courses = CW.allCourses();
  const totalLessons = courses.reduce((n, c) => n + CW.lessonCount(c), 0);
  $("stats").innerHTML = [
    [CW.languages.length, "لغة برمجة"],
    [CW.tools.length, "أداة ومكتبة وإطار عمل"],
    [CW.paths.length, "مساراً مهنياً"],
    [totalLessons + "+", "درساً تفاعلياً"]
  ].map(([n, t]) => `<div class="stat"><b>${n}</b><span>${t}</span></div>`).join("");

  $("home-paths").innerHTML = CW.paths.slice(0, 6).map(CW.pathCard).join("");
  $("home-fields").innerHTML = CW.fields.slice(0, 8).map(CW.fieldCard).join("");
  $("home-langs").innerHTML = CW.languages.map(c => `
    <a class="card" href="course.html?id=${c.id}">
      <div class="card-top"><span class="lang-badge" style="background:${c.color}">${CW.esc(c.short)}</span>
      <div><h3>${CW.esc(c.name)}</h3><span class="muted" style="font-size:13px">${CW.lessonCount(c)} درساً · ${c.level}</span></div></div>
    </a>`).join("");

  // الميزات
  const features = [
    ["⌨️", "محرر كود في المتصفح", "اكتب الكود وشغّله فوراً دون تثبيت أي برنامج."],
    ["🤖", "مساعد ذكي", "يشرح لك أخطاءك ويوجّهك للحل دون أن يحلّه عنك."],
    ["✅", "تصحيح تلقائي", "تمارين تُصحَّح فوراً مع ملاحظات واضحة."],
    ["🛠️", "مشاريع حقيقية", "مشروع تخرج لكل لغة ومسار تضيفه لملف أعمالك."],
    ["🏆", "تحديات ومسابقات", "تحدٍّ يومي ومسابقات أسبوعية ولوحة متصدرين."],
    ["🔥", "تحفيز مستمر", "نقاط خبرة وشارات وسلسلة أيام تحافظ على حماسك."],
    ["📈", "تتبّع التقدّم", "لوحة شخصية تعرض إنجازك وخطة دراستك الأسبوعية."],
    ["🏅", "شهادات قابلة للتحقق", "شهادة لكل لغة ومسار تضيفها إلى LinkedIn."],
    ["💼", "تجهيز للوظيفة", "سيرة ذاتية، ومحاكاة مقابلات، ولوحة وظائف."]
  ];
  $("features").innerHTML = features.map(([i, t, d]) =>
    `<div class="card feature"><span class="ficon">${i}</span><h3>${t}</h3><p>${d}</p></div>`).join("");

  // الأسئلة الشائعة
  const faq = [
    ["هل أحتاج خبرة سابقة؟", "لا. كل المسارات المبتدئة تبدأ من الصفر تماماً، ونشرح كل مفهوم خطوة بخطوة."],
    ["هل أحتاج تثبيت برامج؟", "لا في البداية. المحرر يعمل داخل المتصفح، وعندما تتقدّم نعلّمك إعداد بيئة التطوير على جهازك."],
    ["ما الفرق بين اللغة والمجال والمسار؟", "اللغة أداة تكتب بها الكود مثل Python. المجال هو نوع العمل مثل تطوير الويب أو الذكاء الاصطناعي. المسار المهني خطة مرتبة تجمع لغات وأدوات من مجال ما حتى تصبح جاهزاً لوظيفة محددة."],
    ["كم يستغرق إكمال مسار مهني؟", "بين 4 و10 أشهر حسب المسار، بمعدل ساعة إلى ساعتين يومياً."],
    ["هل الشهادات معتمدة؟", "كل شهادة لها رابط تحقق فريد يمكن لأي جهة توظيف التأكد منه."],
    ["هل يُحفظ تقدّمي؟", "نعم. علّم الدروس كمنجزة وسيظهر تقدّمك في كل لغة ومسار."]
  ];
  $("faq-list").innerHTML = faq.map(([q, a]) =>
    `<details class="acc"><summary>${q}</summary><div class="acc-body">${a}</div></details>`).join("");

  // ===== اختبار "اكتشف مسارك" =====
  // كل خيار يضيف نقاطاً لمسار أو أكثر
  const questions = [
    { q: "ما الذي يثير اهتمامك أكثر؟", o: [
      ["تصميم ما يراه الناس على الشاشة", { "frontend-dev": 3, "fullstack-dev": 1, "mobile-dev": 1 }],
      ["بناء الأنظمة التي تعمل خلف الكواليس", { "backend-dev": 3, "fullstack-dev": 1, "devops-engineer": 1 }],
      ["اكتشاف الأنماط في البيانات", { "data-analyst": 2, "data-scientist": 2, "ml-engineer": 1 }],
      ["حماية الأنظمة واكتشاف الثغرات", { "security-analyst": 2, "pentester": 3 }]] },
    { q: "أي منتج تحب أن تبنيه؟", o: [
      ["موقع ويب أو متجر إلكتروني", { "frontend-dev": 2, "fullstack-dev": 2 }],
      ["تطبيق جوال", { "mobile-dev": 3 }],
      ["لعبة", { "game-dev": 4 }],
      ["نموذج ذكاء اصطناعي", { "ml-engineer": 3, "data-scientist": 1 }]] },
    { q: "كيف تحب أن تعمل؟", o: [
      ["أبتكر وأصمم بصرياً", { "frontend-dev": 2, "game-dev": 1, "mobile-dev": 1 }],
      ["أحلّل وأستنتج", { "data-analyst": 2, "data-scientist": 1, "security-analyst": 1 }],
      ["أؤتمت وأنظّم الأنظمة", { "devops-engineer": 2, "cloud-engineer": 2 }],
      ["أبحث عن الأخطاء والتفاصيل", { "qa-engineer": 3, "pentester": 1 }]] },
    { q: "ما علاقتك بالرياضيات؟", o: [
      ["أحبها كثيراً", { "data-scientist": 2, "ml-engineer": 2, "game-dev": 1 }],
      ["عادية", { "backend-dev": 1, "data-analyst": 1, "devops-engineer": 1 }],
      ["لا أفضّلها", { "frontend-dev": 1, "qa-engineer": 1, "mobile-dev": 1 }],
      ["لا مانع إن احتجتها", { "fullstack-dev": 1, "cloud-engineer": 1 }]] },
    { q: "كم وقتاً تستطيع أن تخصص للتعلّم؟", o: [
      ["أقل من 5 أشهر", { "qa-engineer": 2, "data-analyst": 2 }],
      ["حوالي 6 أشهر", { "frontend-dev": 1, "mobile-dev": 1, "cloud-engineer": 1 }],
      ["7 إلى 9 أشهر", { "backend-dev": 1, "fullstack-dev": 1, "devops-engineer": 1, "pentester": 1 }],
      ["لا يهم، أريد الأعمق", { "ml-engineer": 2, "pentester": 1 }]] }
  ];
  const box = $("quiz-box");
  let step = 0, scores = {};

  function showQuestion() {
    const item = questions[step];
    box.innerHTML = `
      <div class="quiz-step">السؤال ${step + 1} من ${questions.length}</div>
      <div class="progress" style="margin:8px 0 4px"><i style="width:${(step / questions.length) * 100}%"></i></div>
      <h3>${item.q}</h3>
      <div class="quiz-options">${item.o.map((o, i) => `<button class="quiz-opt" data-i="${i}">${o[0]}</button>`).join("")}</div>`;
    box.querySelectorAll(".quiz-opt").forEach(btn => btn.onclick = () => {
      const add = item.o[+btn.dataset.i][1];
      Object.entries(add).forEach(([k, v]) => { scores[k] = (scores[k] || 0) + v; });
      step++;
      step < questions.length ? showQuestion() : showResult();
    });
  }

  function showResult() {
    const ranked = Object.entries(scores).sort((a, b) => b[1] - a[1]).map(([id]) => CW.getPath(id));
    const best = ranked[0];
    const others = ranked.slice(1, 3);
    box.innerHTML = `
      <div class="quiz-result">
        <div class="big-icon">${best.icon}</div>
        <div class="quiz-step">المسار الأنسب لك</div>
        <h3 style="font-size:28px">${best.name}</h3>
        <p class="muted">${best.desc}<br>المدة: ${best.months} أشهر · المستوى: ${best.level}</p>
        <div class="hero-cta" style="justify-content:center">
          <a class="btn btn-primary" href="path.html?id=${best.id}">ابدأ هذا المسار</a>
          <button class="btn btn-ghost" id="quiz-again">أعد الاختبار</button>
        </div>
        ${others.length ? `<p class="muted" style="margin-top:18px">قد يناسبك أيضاً: ${others.map(p => `<a style="color:var(--primary);font-weight:700" href="path.html?id=${p.id}">${p.name}</a>`).join(" و ")}</p>` : ""}
      </div>`;
    $("quiz-again").onclick = () => { step = 0; scores = {}; showQuestion(); };
  }
  showQuestion();
})();
