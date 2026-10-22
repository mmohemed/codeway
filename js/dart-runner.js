// تشغيل Dart: لا يوجد محرك Dart داخل المتصفح، لذلك نرسل الكود إلى خدمة الترجمة
// الرسمية التي يستخدمها DartPad، فتُرجعه JavaScript، ثم نشغّله في Web Worker
// عبر CW.runJS، فتُلتقط مخرجات print كأنها console.log.
// يتطلب اتصالاً بالإنترنت.
(function () {
  const CW = window.CW;
  CW.DART_COMPILE_URL = "https://stable.api.dartpad.dev/api/v3/compile";

  CW.runDart = (code, done) => {
    fetch(CW.DART_COMPILE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source: code })
    })
      .then(async response => {
        const data = await response.json().catch(() => ({}));
        if (!response.ok || !data.result) {
          // أخطاء الترجمة تصل في error بصيغة: path:line:col: Error: message
          const msg = (data.error || data.message || `HTTP ${response.status}`)
            .split("\n").filter(Boolean).slice(0, 6).join("\n");
          return done([{ kind: "err", text: "خطأ في كود Dart:\n" + msg }]);
        }
        CW.runJS(data.result, done);
      })
      .catch(() => done([{
        kind: "err",
        text: "تعذر الوصول إلى خدمة تشغيل Dart. تأكد من اتصالك بالإنترنت، أو انسخ الكود وجرّبه في dartpad.dev"
      }]));
  };
})();
