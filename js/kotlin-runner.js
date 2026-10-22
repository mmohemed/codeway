// تشغيل Kotlin: لا يوجد محرك Kotlin داخل المتصفح، لذلك نرسل الكود إلى خدمة
// Kotlin Playground الرسمية من JetBrains (نفس خدمة play.kotlinlang.org) فتترجمه
// وتشغّله على JVM وتُرجع المخرجات. يتطلب اتصالاً بالإنترنت.
(function () {
  const CW = window.CW;
  CW.KOTLIN_API = "https://api.kotlinlang.org";
  CW.KOTLIN_FALLBACK_VERSION = "2.1.0";

  // أحدث إصدار مستقر تدعمه الخدمة (مرة واحدة)
  let versionPromise = null;
  const getVersion = () => versionPromise || (versionPromise = fetch(CW.KOTLIN_API + "/versions")
    .then(r => r.json())
    .then(list => (list.find(v => v.latestStable) || list[list.length - 1]).version)
    .catch(() => CW.KOTLIN_FALLBACK_VERSION));

  // المخرجات تصل نصاً فيه <outStream>...</outStream> و <errStream>...</errStream>
  const parseText = text => {
    const lines = [];
    const re = /<(outStream|errStream)>([\s\S]*?)<\/\1>/g;
    let m;
    while ((m = re.exec(text || ""))) {
      const kind = m[1] === "errStream" ? "err" : "log";
      const body = m[2].replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&amp;/g, "&");
      body.replace(/\n$/, "").split("\n").forEach(t => lines.push({ kind, text: t }));
    }
    return lines;
  };

  CW.runKotlin = (code, done) => {
    getVersion()
      .then(version => fetch(`${CW.KOTLIN_API}/api/${version}/compiler/run`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ args: "", files: [{ name: "File.kt", text: code, publicId: "" }], confType: "java" })
      }))
      .then(r => r.json())
      .then(data => {
        const compileErrors = Object.values(data.errors || {}).flat().filter(e => e.severity === "ERROR");
        if (compileErrors.length) {
          return done([{ kind: "err", text: "خطأ في كود Kotlin:\n" + compileErrors.map(e =>
            `line ${e.interval && e.interval.start ? e.interval.start.line + 1 : "?"}: ${e.message}`).join("\n") }]);
        }
        const lines = parseText(data.text);
        if (data.exception) {
          const ex = data.exception;
          lines.push({ kind: "err", text: `Exception: ${ex.fullName || ""}${ex.message ? ": " + ex.message : ""}` });
        }
        done(lines);
      })
      .catch(() => done([{
        kind: "err",
        text: "تعذر الوصول إلى خدمة تشغيل Kotlin. تأكد من اتصالك بالإنترنت، أو انسخ الكود وجرّبه في play.kotlinlang.org"
      }]));
  };
})();
