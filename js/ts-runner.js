// تشغيل TypeScript في المتصفح: المترجم الرسمي (js/vendor) يفحص الأنواع ثم يحوّل الكود إلى
// JavaScript، فإن وُجدت أخطاء أنواع تُعرض كما يعرضها المحرر، وإلا يُشغَّل الناتج عبر CW.runJS.
// نفس الملف يستخدمه tools/verify.js في Node حتى تتطابق النتائج.
(function (root) {
  const CW = root.CW = root.CW || {};

  // تعريفات بسيطة لما يوفره المحرر (بدل تعريفات DOM الضخمة)
  const AMBIENT = `
declare var console: { log(...data: any[]): void; error(...data: any[]): void; warn(...data: any[]): void; info(...data: any[]): void };
declare function setTimeout(handler: (...args: any[]) => void, timeout?: number, ...args: any[]): number;
declare function clearTimeout(id: number | undefined): void;
declare function setInterval(handler: (...args: any[]) => void, timeout?: number, ...args: any[]): number;
declare function clearInterval(id: number | undefined): void;
declare function structuredClone<T>(value: T): T;
`;

  CW.tsOptions = ts => ({
    target: ts.ScriptTarget.ES2022,
    module: ts.ModuleKind.None,
    strict: true,
    noEmitOnError: false,
    lib: ["lib.es2022.d.ts"],
    types: []
  });

  // يُرجع { js, errors: [{ line, message }] }
  CW.tsCompile = (ts, libs, code) => {
    const files = Object.assign({}, libs, { "ambient.d.ts": AMBIENT, "main.ts": code });
    const options = CW.tsOptions(ts);
    // ملفات التعريفات ثابتة، فنحللها مرة واحدة ونعيد استخدامها في كل تشغيل
    const cache = CW._tsLibCache || (CW._tsLibCache = {});
    let js = "";
    const host = {
      getSourceFile: (name, version) => {
        if (!(name in files)) return undefined;
        if (name === "main.ts") return ts.createSourceFile(name, files[name], version);
        return cache[name] || (cache[name] = ts.createSourceFile(name, files[name], version));
      },
      getDefaultLibFileName: () => "lib.es2022.d.ts",
      writeFile: (name, text) => { if (name.endsWith(".js")) js = text; },
      getCurrentDirectory: () => "",
      getDirectories: () => [],
      fileExists: name => name in files,
      readFile: name => files[name],
      getCanonicalFileName: name => name,
      useCaseSensitiveFileNames: () => true,
      getNewLine: () => "\n"
    };
    const program = ts.createProgram(["main.ts", "ambient.d.ts"], options, host);
    const main = program.getSourceFile("main.ts");
    const diags = program.getSyntacticDiagnostics(main).concat(program.getSemanticDiagnostics(main));
    program.emit(main);
    const errors = diags.map(d => ({
      line: d.file && d.start !== undefined ? d.file.getLineAndCharacterOfPosition(d.start).line + 1 : 0,
      message: ts.flattenDiagnosticMessageText(d.messageText, " ")
    }));
    return { js, errors };
  };

  CW.tsErrorText = errors => errors.map(e => `سطر ${e.line}: ${e.message}`).join("\n");

  if (typeof document === "undefined") return;

  let loading = null;
  const loadScript = src => new Promise((resolve, reject) => {
    const s = document.createElement("script");
    s.src = src;
    s.onload = resolve;
    s.onerror = () => reject(new Error("تعذر تحميل " + src));
    document.head.appendChild(s);
  });
  CW.loadTS = () => loading || (loading = Promise.all([
    loadScript("js/vendor/typescript.min.js"),
    loadScript("js/vendor/ts-libs.js")
  ]).then(() => root.ts));

  CW.runTS = (code, done) => {
    CW.loadTS().then(ts => {
      const { js, errors } = CW.tsCompile(ts, CW.tsLibs, code);
      if (errors.length) return done([{ kind: "err", text: "خطأ في الأنواع (TypeScript):\n" + CW.tsErrorText(errors) }]);
      CW.runJS(js, done);
    }, e => done([{ kind: "err", text: e.message }]));
  };
})(typeof window !== "undefined" ? window : globalThis);
