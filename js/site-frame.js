// CodeWay — ترويسة وتذييل موحّدان للصفحات المستقلة
// مولَّد بالأمر: node tools/build-frame.js (لا تعدّله يدويًا). يُستدعى في بداية <body>:
// <script src="ROOT/js/site-frame.js" data-root="ROOT/"></script>
(function () {
  const script = document.currentScript;
  const root = script.getAttribute("data-root") || "";
  const DATA = {"langs":[["course.html?id=html-css","HTML و CSS"],["course.html?id=javascript","JavaScript"],["course.html?id=typescript","TypeScript"],["python/index.html","Python"],["course.html?id=java","Java"]],"fields":[["field.html?id=frontend","تطوير الواجهات الأمامية"],["field.html?id=backend","تطوير الواجهات الخلفية"],["field.html?id=mobile","تطوير تطبيقات الجوال"],["field.html?id=data","علم البيانات وتحليلها"],["field.html?id=ai","الذكاء الاصطناعي وتعلم الآلة"]],"paths":[["path.html?id=frontend-dev","مطوّر واجهات أمامية"],["path.html?id=backend-dev","مطوّر واجهات خلفية"],["path.html?id=fullstack-dev","مطوّر شامل Full Stack"],["path.html?id=mobile-dev","مطوّر تطبيقات جوال"],["path.html?id=data-analyst","محلل بيانات"]],"platform":[["index.html#pricing","الأسعار"],["faq.html","الأسئلة الشائعة"],["contact.html","تواصل معنا"],["terms.html","الشروط والأحكام"],["privacy.html","سياسة الخصوصية"]]};
  const u = h => root + h;
  const esc = s => String(s).replace(/[&<>"]/g, ch => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[ch]));
  const NAV = [["index.html", "الرئيسية"], ["catalog.html?tab=languages", "اللغات"], ["catalog.html?tab=fields", "المجالات"],
               ["catalog.html?tab=paths", "المسارات المهنية"], ["catalog.html?tab=tools", "الأدوات والمكتبات"]];
  const logo = `<a class="cwf-logo" href="${u("index.html")}"><span class="cwf-logo-mark">&lt;/&gt;</span><span class="cwf-ltr">Code<b>Way</b></span></a>`;
  document.body.insertAdjacentHTML("afterbegin", `
    <header id="cwf-header"><div class="cwf-container cwf-nav">
      <button class="cwf-menu" type="button" aria-label="القائمة" aria-expanded="false">☰</button>
      ${logo}
      <nav class="cwf-links">${NAV.map(([h, t]) => `<a href="${u(h)}">${t}</a>`).join("")}</nav>
      <div class="cwf-actions">
        <form class="cwf-search" action="${u("catalog.html")}"><input type="search" name="q" placeholder="ابحث عن لغة أو أداة..." aria-label="بحث"></form>
        <a class="cwf-btn cwf-btn-ghost" href="${u("start.html")}">من أين أبدأ؟</a>
        <a class="cwf-btn cwf-btn-primary" href="${u("catalog.html")}">ابدأ مجاناً</a>
      </div>
    </div></header>`);
  const menu = document.querySelector("#cwf-header .cwf-menu");
  menu.addEventListener("click", () => {
    const open = document.getElementById("cwf-header").classList.toggle("cwf-open");
    menu.setAttribute("aria-expanded", open);
  });
  const col = (title, items) => `<div><h4>${title}</h4><ul>${items.map(([h, t]) => `<li><a href="${u(h)}">${esc(t)}</a></li>`).join("")}</ul></div>`;
  function addFooter() {
    document.body.insertAdjacentHTML("beforeend", `
      <footer id="cwf-footer"><div class="cwf-container">
        <div class="cwf-footer-grid">
          <div>${logo}<p>طريقك من أول سطر برمجي إلى أول وظيفة. لغات ومجالات ومسارات مهنية كاملة باللغة العربية.</p></div>
          ${col("اللغات", DATA.langs)}${col("المجالات", DATA.fields)}${col("المسارات", DATA.paths)}${col("المنصة", DATA.platform)}
        </div>
        <div class="cwf-footer-bottom"><span>© ${new Date().getFullYear()} CodeWay. جميع الحقوق محفوظة.</span><span>صُنع بحب للمبرمجين العرب</span></div>
      </div></footer>`);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", addFooter); else addFooter();
})();
