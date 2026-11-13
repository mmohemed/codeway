// يحدّث صفحات المجالات المستقلة fields/<key>/index.html من بيانات المنصة:
//  - قسم «لغات ستستخدمها»: كل لغة رابط إلى دورتها (الأكاديمية إن وُجدت)
//  - عدد اللغات في رأس الصفحة
//  - قسم «دورات كاملة على CodeWay» من CW.academies
// شغّله بعد تعديل js/data:  node tools/build-fields.js
const vm = require("vm"), fs = require("fs"), path = require("path");
const ROOT = path.join(__dirname, "..");
const ctx = {}; ctx.window = ctx; vm.createContext(ctx);
for (const f of ["languages", "fields", "paths"]) vm.runInContext(fs.readFileSync(path.join(ROOT, "js/data", f + ".js"), "utf8"), ctx);
const CW = ctx.CW;
const common = fs.readFileSync(path.join(ROOT, "js/common.js"), "utf8");
const academy = vm.runInNewContext("(" + common.match(/CW\.academy = (\{[^}]*\})/)[1] + ")");
const href = id => academy[id] || "course.html?id=" + id;

// صفحة مستقلة ← مجالات النظام الرئيسي التي تغطيها، واللغات الإضافية الخاصة بها
const MAP = {
  web:       { fields: ["frontend", "backend"], langs: ["html-css", "javascript", "typescript", "python", "php", "csharp", "sql"] },
  mobile:    { fields: ["mobile"] },
  ai:        { fields: ["ai"] },
  security:  { fields: ["security"] },
  data:      { fields: ["data"] },
  games:     { fields: ["games"] },
  cloud:     { fields: ["devops"] },
  databases: { fields: [], langs: ["sql", "python"] }
};

const esc = s => String(s).replace(/[&<>"]/g, ch => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[ch]));
const plural = n => n > 10 ? "درساً" : n > 2 ? "دروس" : "درس";
let changed = 0;

for (const [key, cfg] of Object.entries(MAP)) {
  const file = path.join(ROOT, "fields", key, "index.html");
  if (!fs.existsSync(file)) { console.warn("missing", file); continue; }
  let html = fs.readFileSync(file, "utf8");
  const before = html;
  const nl = html.includes("\r\n") ? "\r\n" : "\n";
  const accent = (html.match(/--accent:\s*(#[0-9a-fA-F]{3,6})/) || [, "#1d4ed8"])[1];

  // اللغات: قائمة الصفحة الصريحة، وإلا لغات المجالات المقابلة
  const ids = cfg.langs || [...new Set(cfg.fields.flatMap(f => CW.fields.find(x => x.id === f).languages))];
  const langs = ids.map(id => CW.languages.find(l => l.id === id)).filter(Boolean);
  const chain = `<div class="chain" style="font-size:1rem">` +
    langs.map(l => `<a href="../../${href(l.id)}" class="chain-item" style="direction:ltr">${esc(l.name)}</a>`).join("") + `</div>`;
  html = html.replace(/(<h2>لغات ستستخدمها<\/h2><\/div><\/div>\s*)<div class="chain"[^>]*>[\s\S]*?<\/div>/, (m, head) => head + chain);
  html = html.replace(/<b>\d+<\/b><small>لغات<\/small>/, `<b>${langs.length}</b><small>لغات</small>`);

  // الدورات الكاملة
  html = html.replace(/[ \t]*<!-- cw-academies -->[\s\S]*?<!-- \/cw-academies -->\r?\n?/, "");
  const acad = CW.academies.filter(a => a.fields.some(f => cfg.fields.includes(f)));
  if (acad.length) {
    const cards = acad.map(a => [
      `                <a href="../../${a.href}" class="card unit-card">`,
      `                    <div class="top"><span class="u-num" style="direction:ltr;font-size:.8rem">${esc(a.short)}</span><h3>${esc(a.name)}</h3></div>`,
      `                    <p>${esc(a.desc)}</p><div class="foot"><span>${a.soon ? "قيد الإعداد" : a.level} · ${a.lessons} ${plural(a.lessons)}</span><i class="fas fa-arrow-left" style="color:${accent}"></i></div>`,
      `                </a>`].join(nl)).join(nl);
    const block = [
      `        <!-- cw-academies -->`,
      `        <section class="section container" id="academies">`,
      `            <div class="section-head"><div><span class="eyebrow" style="color:${accent}">ابدأ الآن</span><h2>دورات كاملة على CodeWay</h2><p>أكاديميات وتخصصات بدروس جاهزة في هذا المجال</p></div></div>`,
      `            <div class="unit-grid">`,
      cards,
      `            </div>`,
      `        </section>`,
      `        <!-- /cw-academies -->`, ""].join(nl);
    // قبل قسم اللغات
    const at = html.search(/[ \t]*<section class="section container">\s*<div class="section-head"><div><span class="eyebrow"[^>]*>الأدوات<\/span><h2>لغات ستستخدمها/);
    if (at < 0) { console.warn("no languages section in", key); continue; }
    html = html.slice(0, at) + block + html.slice(at);
  }
  if (html !== before) { fs.writeFileSync(file, html); changed++; }
  console.log(key.padEnd(10), "langs:", langs.map(l => l.id).join(","), "| academies:", acad.map(a => a.id).join(","));
}
console.log("updated", changed, "pages");
