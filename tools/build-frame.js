// يولّد js/site-frame.js: ترويسة وتذييل موحّدان للصفحات المستقلة (الأكاديميات والمجالات والمسارات والصفحات التعريفية)
// بنفس روابط ترويسة وتذييل النظام الرئيسي في js/common.js. شغّله بعد تعديل js/data:  node tools/build-frame.js
const vm = require("vm"), fs = require("fs"), path = require("path");
const ROOT = path.join(__dirname, "..");
const ctx = {}; ctx.window = ctx; vm.createContext(ctx);
for (const f of ["languages", "fields", "paths"]) vm.runInContext(fs.readFileSync(path.join(ROOT, "js/data", f + ".js"), "utf8"), ctx);
const common = fs.readFileSync(path.join(ROOT, "js/common.js"), "utf8");
const academy = vm.runInNewContext("(" + common.match(/CW\.academy = (\{[^}]*\})/)[1] + ")");
const href = id => academy[id] || "course.html?id=" + id;
const DATA = {
  langs: ctx.CW.languages.slice(0, 5).map(c => [href(c.id), c.name]),
  fields: ["ai", "security", "frontend", "backend", "data"].map(id => ctx.CW.fields.find(f => f.id === id)).map(f => ["field.html?id=" + f.id, f.name]),
  paths: ctx.CW.paths.slice(0, 5).map(p => ["path.html?id=" + p.id, p.name]),
  platform: [["index.html#pricing", "الأسعار"], ["faq.html", "الأسئلة الشائعة"], ["contact.html", "تواصل معنا"], ["terms.html", "الشروط والأحكام"], ["privacy.html", "سياسة الخصوصية"]]
};
const out = `// CodeWay — ترويسة وتذييل موحّدان للصفحات المستقلة
// مولَّد بالأمر: node tools/build-frame.js (لا تعدّله يدويًا). يُستدعى في بداية <body>:
// <script src="ROOT/js/site-frame.js" data-root="ROOT/"></script>
(function () {
  const script = document.currentScript;
  const root = script.getAttribute("data-root") || "";
  const DATA = ${JSON.stringify(DATA)};
  const u = h => root + h;
  const esc = s => String(s).replace(/[&<>"]/g, ch => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[ch]));
  const NAV = [["index.html", "الرئيسية"], ["catalog.html?tab=languages", "اللغات"], ["catalog.html?tab=fields", "المجالات"],
               ["catalog.html?tab=paths", "المسارات المهنية"], ["catalog.html?tab=tools", "الأدوات والمكتبات"]];
  const logo = \`<a class="cwf-logo" href="\${u("index.html")}"><span class="cwf-logo-mark">&lt;/&gt;</span><span class="cwf-ltr">Code<b>Way</b></span></a>\`;
  document.body.insertAdjacentHTML("afterbegin", \`
    <header id="cwf-header"><div class="cwf-container cwf-nav">
      <button class="cwf-menu" type="button" aria-label="القائمة" aria-expanded="false">☰</button>
      \${logo}
      <nav class="cwf-links">\${NAV.map(([h, t]) => \`<a href="\${u(h)}">\${t}</a>\`).join("")}</nav>
      <div class="cwf-actions">
        <form class="cwf-search" action="\${u("catalog.html")}"><input type="search" name="q" placeholder="ابحث عن لغة أو أداة..." aria-label="بحث"></form>
        <a class="cwf-btn cwf-btn-ghost" href="\${u("start.html")}">من أين أبدأ؟</a>
        <a class="cwf-btn cwf-btn-primary" href="\${u("catalog.html")}">ابدأ مجاناً</a>
      </div>
    </div></header>\`);
  const menu = document.querySelector("#cwf-header .cwf-menu");
  menu.addEventListener("click", () => {
    const open = document.getElementById("cwf-header").classList.toggle("cwf-open");
    menu.setAttribute("aria-expanded", open);
  });
  const col = (title, items) => \`<div><h4>\${title}</h4><ul>\${items.map(([h, t]) => \`<li><a href="\${u(h)}">\${esc(t)}</a></li>\`).join("")}</ul></div>\`;
  function addFooter() {
    document.body.insertAdjacentHTML("beforeend", \`
      <footer id="cwf-footer"><div class="cwf-container">
        <div class="cwf-footer-grid">
          <div>\${logo}<p>طريقك من أول سطر برمجي إلى أول وظيفة. لغات ومجالات ومسارات مهنية كاملة باللغة العربية.</p></div>
          \${col("اللغات", DATA.langs)}\${col("المجالات", DATA.fields)}\${col("المسارات", DATA.paths)}\${col("المنصة", DATA.platform)}
        </div>
        <div class="cwf-footer-bottom"><span>© \${new Date().getFullYear()} CodeWay. جميع الحقوق محفوظة.</span><span>صُنع بحب للمبرمجين العرب</span></div>
      </div></footer>\`);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", addFooter); else addFooter();
})();
`;
fs.writeFileSync(path.join(ROOT, "js/site-frame.js"), out);
console.log("wrote js/site-frame.js");
