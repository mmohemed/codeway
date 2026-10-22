// تشغيل SQL في المتصفح عبر sql.js (محرك SQLite كامل مترجم إلى JavaScript، في js/vendor)
// نفس الملف يستخدمه tools/verify.js في Node حتى تتطابق صيغة النتائج تماماً
(function (root) {
  const CW = root.CW = root.CW || {};

  // قيمة الخلية كنص: NULL صريحة، والأرقام كما يعرضها JavaScript
  const cell = v => (v === null ? "NULL" : String(v));

  // كل نتيجة تُكتب: سطر بأسماء الأعمدة ثم سطر لكل صف، والأعمدة مفصولة بـ " | "
  // والنتائج المتعددة يفصلها سطر فارغ
  CW.sqlFormat = tables => tables.map(t =>
    [t.columns.join(" | ")].concat(t.rows.map(r => r.map(cell).join(" | "))).join("\n")
  ).join("\n\n");

  // ينفّذ عبارات setup ثم كود الطالب عبارة بعبارة، ويجمع نتائج عبارات SELECT
  CW.sqlExecute = (SQL, setup, code) => {
    const db = new SQL.Database();
    const tables = [];
    let error = null, statements = 0;
    try {
      if (setup) db.exec(setup);
    } catch (e) {
      db.close();
      return { tables, error: "خطأ في تجهيز قاعدة البيانات: " + e.message, statements };
    }
    try {
      for (const stmt of db.iterateStatements(code)) {
        statements++;
        const columns = stmt.getColumnNames();
        const rows = [];
        while (stmt.step()) rows.push(stmt.get());
        if (columns.length) tables.push({ columns, rows });
        stmt.free();
      }
    } catch (e) {
      error = e.message;
    }
    db.close();
    return { tables, error, statements };
  };

  if (typeof document === "undefined") return; // في Node نكتفي بالدوال السابقة

  // تحميل المحرك مرة واحدة عند أول حاجة إليه
  let enginePromise = null;
  CW.loadSQL = () => {
    if (enginePromise) return enginePromise;
    enginePromise = new Promise((resolve, reject) => {
      const s = document.createElement("script");
      s.src = "js/vendor/sql-asm.js";
      s.onload = () => root.initSqlJs().then(resolve, reject);
      s.onerror = () => reject(new Error("تعذر تحميل محرك SQL"));
      document.head.appendChild(s);
    });
    return enginePromise;
  };

  // يُرجع للمحرر نفس شكل المخرجات المستخدم مع JavaScript، مع جداول للعرض
  CW.runSQL = (code, setup, done) => {
    CW.loadSQL().then(SQL => {
      const { tables, error, statements } = CW.sqlExecute(SQL, setup, code);
      const lines = tables.map(t => ({ kind: "table", table: t, text: CW.sqlFormat([t]) }));
      if (error) lines.push({ kind: "err", text: "خطأ SQL: " + error });
      else if (!tables.length && statements) lines.push({ kind: "info", text: `تم تنفيذ ${statements} عبارة بنجاح (لا توجد نتائج لعرضها)` });
      done(lines);
    }, e => done([{ kind: "err", text: e.message }]));
  };
})(typeof window !== "undefined" ? window : globalThis);
