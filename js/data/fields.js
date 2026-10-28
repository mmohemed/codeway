// الأدوات والمكتبات وأطر العمل، ثم المجالات التي تجمعها
window.CW = window.CW || {};

CW.tools = [
  // ===== الواجهات الأمامية =====
  { id: "react", name: "React", short: "⚛", color: "#61dafb", kind: "مكتبة", level: "متوسط", hours: 40,
    desc: "المكتبة الأشهر لبناء واجهات المستخدم بالمكونات.",
    modules: [
      { t: "الأساسيات", l: ["ما هي React ولماذا", "إنشاء مشروع بـ Vite", "JSX", "المكونات Components"] },
      { t: "البيانات", l: ["Props", "State و useState", "الأحداث", "عرض القوائم والشروط"] },
      { t: "Hooks", l: ["useEffect", "useContext", "useReducer", "useRef و useMemo", "Hooks مخصصة"] },
      { t: "التوجيه", l: ["React Router", "المسارات الديناميكية", "المسارات المحمية"] },
      { t: "جلب البيانات", l: ["fetch داخل المكونات", "TanStack Query", "حالات التحميل والخطأ"] },
      { t: "إدارة الحالة", l: ["متى نحتاج إدارة حالة عامة", "Redux Toolkit", "Zustand"] },
      { t: "الجودة والأداء", l: ["تحسين الأداء memo", "اختبار المكونات", "هيكلة المشروع"] }
    ], project: "لوحة تحكم متجر بـ React" },
  { id: "nextjs", name: "Next.js", short: "N", color: "#888888", kind: "إطار عمل", level: "متقدم", hours: 30,
    desc: "إطار React الاحترافي للمواقع السريعة المتوافقة مع محركات البحث.",
    modules: [
      { t: "البداية", l: ["لماذا Next.js", "إنشاء مشروع", "App Router والتوجيه بالملفات"] },
      { t: "المكونات", l: ["Server Components", "Client Components", "Layouts و Loading"] },
      { t: "البيانات", l: ["جلب البيانات على الخادم", "التخزين المؤقت وإعادة التحقق", "Server Actions"] },
      { t: "الواجهة الخلفية", l: ["Route Handlers", "المصادقة", "الاتصال بقاعدة بيانات"] },
      { t: "الإطلاق", l: ["SEO و Metadata", "تحسين الصور والخطوط", "النشر على Vercel"] }
    ], project: "مدونة كاملة بـ Next.js" },
  { id: "vue", name: "Vue.js", short: "V", color: "#42b883", kind: "إطار عمل", level: "متوسط", hours: 30,
    desc: "إطار تقدمي سهل التعلم لبناء واجهات تفاعلية.",
    modules: [
      { t: "الأساسيات", l: ["إنشاء مشروع", "القوالب Templates", "التوجيهات Directives"] },
      { t: "المكونات", l: ["المكونات و Props", "الأحداث emit", "Slots"] },
      { t: "Composition API", l: ["ref و reactive", "computed و watch", "Composables"] },
      { t: "التوجيه والحالة", l: ["Vue Router", "Pinia"] }
    ], project: "تطبيق إدارة مهام بـ Vue" },
  { id: "angular", name: "Angular", short: "A", color: "#dd0031", kind: "إطار عمل", level: "متقدم", hours: 40,
    desc: "إطار Google المتكامل لتطبيقات الشركات الكبيرة.",
    modules: [
      { t: "الأساسيات", l: ["Angular CLI والمكونات", "المدخلات والمخرجات", "ربط البيانات و Signals"] },
      { t: "الخدمات", l: ["Services وحقن الاعتماديات DI", "دورة الحياة و effect", "الأنابيب Pipes"] },
      { t: "التوجيه", l: ["Router", "معاملات المسار والمسارات المتداخلة", "Guards و Lazy Loading"] },
      { t: "HttpClient و RxJS", l: ["HttpClient", "Observables والعمليات Operators", "الأخطاء و toSignal والمعترضات"] },
      { t: "النماذج", l: ["Template Forms", "Reactive Forms", "المدققات المخصصة و FormArray"] }
    ], project: "نظام إدارة موظفين" },
  { id: "tailwind", name: "Tailwind CSS", short: "TW", color: "#38bdf8", kind: "مكتبة", level: "مبتدئ", hours: 10,
    desc: "تنسيق سريع بالأصناف الجاهزة دون كتابة CSS منفصل.",
    modules: [
      { t: "الأساسيات", l: ["التثبيت", "فلسفة Utility First", "الألوان والمسافات والخطوط"] },
      { t: "التخطيط", l: ["Flex و Grid", "التصميم المتجاوب", "الوضع الليلي"] },
      { t: "التخصيص", l: ["ملف الإعدادات", "بناء مكونات قابلة لإعادة الاستخدام"] }
    ], project: "إعادة تصميم صفحة هبوط بـ Tailwind" },
  { id: "git", name: "Git و GitHub", short: "Git", color: "#f05032", kind: "أداة", level: "مبتدئ", hours: 10,
    desc: "نظام إدارة الإصدارات الذي يستخدمه كل مطوّر في العالم.",
    modules: [
      { t: "أساسيات Git", l: ["ما هو التحكم بالإصدارات", "init و add و commit", "سجل التغييرات log و diff"] },
      { t: "الفروع", l: ["إنشاء الفروع", "الدمج merge", "حل التعارضات", "rebase"] },
      { t: "GitHub", l: ["المستودعات البعيدة push و pull", "Pull Requests", "مراجعة الكود", "Issues"] },
      { t: "سير العمل", l: ["Git Flow", "رسائل commit الاحترافية", "gitignore"] }
    ], project: "المساهمة في مشروع مفتوح المصدر" },
  { id: "vite", name: "Vite و npm", short: "⚡", color: "#646cff", kind: "أداة", level: "مبتدئ", hours: 6,
    desc: "أدوات البناء وإدارة الحزم لمشاريع JavaScript الحديثة.",
    modules: [
      { t: "npm", l: ["package.json", "تثبيت الحزم", "السكربتات"] },
      { t: "Vite", l: ["إنشاء مشروع", "خادم التطوير", "البناء للإنتاج"] },
      { t: "جودة الكود", l: ["ESLint", "Prettier"] }
    ], project: "قالب مشروع جاهز بإعدادات احترافية" },
  { id: "frontend-testing", name: "اختبار الواجهات", short: "✓", color: "#15c213", kind: "أداة", level: "متوسط", hours: 12,
    desc: "Vitest و Jest و Testing Library و Playwright لضمان جودة التطبيق.",
    modules: [
      { t: "اختبارات الوحدات", l: ["مفهوم الاختبار", "Vitest و Jest", "المحاكاة Mocking"] },
      { t: "اختبار المكونات", l: ["Testing Library", "اختبار التفاعل"] },
      { t: "الاختبار الشامل", l: ["Playwright", "اختبار السيناريوهات", "التشغيل في CI"] }
    ], project: "تغطية تطبيق React بالاختبارات" },

  // ===== الواجهات الخلفية =====
  { id: "nodejs", name: "Node.js و Express", short: "Nd", color: "#5fa04e", kind: "بيئة تشغيل", level: "متوسط", hours: 40,
    desc: "JavaScript على الخادم لبناء واجهات برمجية سريعة.",
    modules: [
      { t: "Node.js", l: ["ما هو Node.js", "الوحدات CommonJS و ESM", "نظام الملفات fs", "الأحداث والتدفقات"] },
      { t: "Express", l: ["إنشاء خادم", "التوجيه Routing", "الوسطاء Middleware", "معالجة الأخطاء"] },
      { t: "REST API", l: ["مبادئ REST", "عمليات CRUD", "التحقق من المدخلات", "الترقيم Pagination"] },
      { t: "قواعد البيانات", l: ["الاتصال بـ PostgreSQL", "Prisma ORM", "MongoDB و Mongoose"] },
      { t: "المصادقة والأمان", l: ["تشفير كلمات المرور", "JWT", "OAuth", "Helmet و CORS و Rate Limit"] },
      { t: "متقدم", l: ["رفع الملفات", "WebSockets", "الاختبار بـ Supertest", "النشر"] }
    ], project: "واجهة برمجية لمنصة حجوزات" },
  { id: "nestjs", name: "NestJS", short: "Ns", color: "#e0234e", kind: "إطار عمل", level: "متقدم", hours: 25,
    desc: "إطار Node.js منظم بمعمارية احترافية مكتوب بـ TypeScript.",
    modules: [
      { t: "الأساسيات", l: ["المعمارية", "Modules", "Controllers", "Providers"] },
      { t: "البيانات", l: ["TypeORM أو Prisma", "DTOs والتحقق"] },
      { t: "الأمان", l: ["Guards", "Passport و JWT", "Interceptors"] },
      { t: "متقدم", l: ["Microservices", "الاختبار"] }
    ], project: "واجهة برمجية لنظام متجر" },
  { id: "django", name: "Django", short: "Dj", color: "#0c4b33", kind: "إطار عمل", level: "متوسط", hours: 40,
    desc: "إطار Python المتكامل الذي يأتي بكل ما تحتاجه.",
    modules: [
      { t: "البداية", l: ["المشروع والتطبيقات", "معمارية MVT", "الإعدادات"] },
      { t: "النماذج", l: ["Models", "ORM والاستعلامات", "Migrations", "العلاقات"] },
      { t: "العرض", l: ["Views", "Templates", "Forms"] },
      { t: "لوحة الإدارة", l: ["Django Admin", "تخصيص لوحة الإدارة"] },
      { t: "المستخدمون", l: ["المصادقة", "الصلاحيات"] },
      { t: "Django REST Framework", l: ["Serializers", "ViewSets", "المصادقة بالرموز"] }
    ], project: "منصة إعلانات مبوبة" },
  { id: "fastapi", name: "FastAPI", short: "FA", color: "#009688", kind: "إطار عمل", level: "متوسط", hours: 20,
    desc: "إطار Python سريع جداً لبناء واجهات برمجية حديثة.",
    modules: [
      { t: "الأساسيات", l: ["أول API", "معاملات المسار والاستعلام", "Pydantic"] },
      { t: "الاعتماديات", l: ["Dependency Injection", "تنظيم المشروع"] },
      { t: "قواعد البيانات", l: ["SQLAlchemy", "Alembic"] },
      { t: "الأمان والنشر", l: ["OAuth2 و JWT", "async", "النشر بـ Docker"] }
    ], project: "واجهة برمجية لتطبيق ملاحظات" },
  { id: "spring-boot", name: "Spring Boot", short: "Sp", color: "#6db33f", kind: "إطار عمل", level: "متقدم", hours: 45,
    desc: "المعيار في عالم Java لبناء الأنظمة الخلفية للشركات.",
    modules: [
      { t: "الأساسيات", l: ["Spring و IoC", "إنشاء مشروع", "الإعدادات"] },
      { t: "الويب", l: ["REST Controllers", "التحقق", "معالجة الأخطاء"] },
      { t: "البيانات", l: ["Spring Data JPA", "العلاقات", "Flyway"] },
      { t: "الأمان", l: ["Spring Security", "JWT"] },
      { t: "الجودة", l: ["الاختبار", "Actuator"] }
    ], project: "نظام بنكي مبسط" },
  { id: "aspnet", name: "ASP.NET Core", short: ".N", color: "#512bd4", kind: "إطار عمل", level: "متقدم", hours: 40,
    desc: "إطار مايكروسوفت عالي الأداء للويب والواجهات البرمجية.",
    modules: [
      { t: "الأساسيات", l: ["Minimal APIs", "Middleware", "حقن الاعتماديات"] },
      { t: "MVC", l: ["Controllers", "Razor Views"] },
      { t: "البيانات", l: ["Entity Framework Core", "Migrations"] },
      { t: "الأمان", l: ["Identity", "JWT"] }
    ], project: "نظام إدارة مخزون" },
  { id: "laravel", name: "Laravel", short: "Lv", color: "#ff2d20", kind: "إطار عمل", level: "متوسط", hours: 35,
    desc: "أشهر إطار PHP لبناء تطبيقات ويب أنيقة بسرعة.",
    modules: [
      { t: "الأساسيات", l: ["التثبيت والهيكل", "Routing", "Controllers"] },
      { t: "العرض", l: ["Blade", "المكونات"] },
      { t: "البيانات", l: ["Eloquent ORM", "Migrations", "العلاقات"] },
      { t: "متقدم", l: ["المصادقة", "Queues", "بناء API"] }
    ], project: "متجر إلكتروني" },
  { id: "postgresql", name: "PostgreSQL", short: "PG", color: "#336791", kind: "قاعدة بيانات", level: "متوسط", hours: 15,
    desc: "قاعدة البيانات العلائقية الأقوى والأكثر تقدماً.",
    modules: [
      { t: "الأساسيات", l: ["التثبيت و psql", "أنواع البيانات", "القيود"] },
      { t: "متقدم", l: ["JSONB", "الفهارس المتقدمة", "Views و Functions"] },
      { t: "الإدارة", l: ["النسخ الاحتياطي", "الصلاحيات", "ضبط الأداء"] }
    ], project: "تصميم قاعدة بيانات منصة تعليمية" },
  { id: "mongodb", name: "MongoDB", short: "Mg", color: "#47a248", kind: "قاعدة بيانات", level: "متوسط", hours: 12,
    desc: "قاعدة بيانات NoSQL مرنة قائمة على المستندات.",
    modules: [
      { t: "الأساسيات", l: ["المستندات والمجموعات", "CRUD"] },
      { t: "الاستعلامات", l: ["الفلترة والإسقاط", "الفهارس"] },
      { t: "متقدم", l: ["Aggregation Pipeline", "تصميم المخطط"] }
    ], project: "قاعدة بيانات لتطبيق تواصل اجتماعي" },
  { id: "redis", name: "Redis", short: "Rd", color: "#dc382d", kind: "قاعدة بيانات", level: "متوسط", hours: 8,
    desc: "تخزين في الذاكرة للتخزين المؤقت والطوابير والبيانات الفورية.",
    modules: [
      { t: "الأساسيات", l: ["أنواع البيانات", "الأوامر الأساسية"] },
      { t: "الاستخدامات", l: ["التخزين المؤقت Caching", "الجلسات", "الطوابير و Pub/Sub"] }
    ], project: "تسريع API بالتخزين المؤقت" },
  { id: "graphql", name: "GraphQL", short: "GQ", color: "#e10098", kind: "تقنية", level: "متقدم", hours: 12,
    desc: "لغة استعلام للواجهات البرمجية تجلب بها ما تحتاجه فقط.",
    modules: [
      { t: "الأساسيات", l: ["مقارنة مع REST", "Schema والأنواع", "Queries و Mutations"] },
      { t: "التطبيق", l: ["Apollo Server", "Resolvers", "Apollo Client"] }
    ], project: "واجهة GraphQL لمدونة" },
  { id: "system-design", name: "تصميم الأنظمة", short: "SD", color: "#8e44ad", kind: "مفاهيم", level: "متقدم", hours: 25,
    desc: "كيف تُبنى الأنظمة الكبيرة القابلة للتوسع، وأساسي في مقابلات الشركات.",
    modules: [
      { t: "الأساسيات", l: ["التوسع الأفقي والعمودي", "موازنة الأحمال", "التخزين المؤقت و CDN"] },
      { t: "البيانات", l: ["SQL مقابل NoSQL", "التكرار والتقسيم Sharding", "نظرية CAP"] },
      { t: "المعمارية", l: ["Microservices", "طوابير الرسائل", "تصميم APIs"] },
      { t: "دراسات حالة", l: ["تصميم مختصر روابط", "تصميم نظام دردشة", "تصميم موجز أخبار"] }
    ], project: "وثيقة تصميم لنظام حقيقي" },

  // ===== الموبايل =====
  { id: "flutter", name: "Flutter", short: "Fl", color: "#02569b", kind: "إطار عمل", level: "متوسط", hours: 45,
    desc: "تطبيقات Android و iOS بكود واحد وأداء عالٍ.",
    modules: [
      { t: "الأساسيات", l: ["التثبيت وأول تطبيق", "Widgets", "Stateless و Stateful"] },
      { t: "التخطيط", l: ["Row و Column و Stack", "القوائم ListView", "التصميم المتجاوب"] },
      { t: "إدارة الحالة", l: ["setState", "Provider", "Riverpod", "Bloc"] },
      { t: "التنقل", l: ["Navigator", "go_router"] },
      { t: "البيانات", l: ["HTTP و JSON", "التخزين المحلي", "Firebase"] },
      { t: "النشر", l: ["الأيقونات والشاشة الافتتاحية", "النشر على Google Play", "النشر على App Store"] }
    ], project: "تطبيق توصيل طعام" },
  { id: "android-compose", name: "Android و Jetpack Compose", short: "An", color: "#3ddc84", kind: "إطار عمل", level: "متوسط", hours: 40,
    desc: "تطوير تطبيقات Android الأصلية بأحدث أدوات Google.",
    modules: [
      { t: "الأساسيات", l: ["Android Studio", "Composables", "Modifiers"] },
      { t: "الحالة", l: ["State", "ViewModel"] },
      { t: "التنقل", l: ["Navigation Compose"] },
      { t: "البيانات", l: ["Room", "Retrofit", "DataStore"] }
    ], project: "تطبيق ملاحظات أصلي" },
  { id: "swiftui", name: "iOS و SwiftUI", short: "iOS", color: "#147efb", kind: "إطار عمل", level: "متوسط", hours: 40,
    desc: "تطوير تطبيقات iPhone الأصلية بواجهات تصريحية.",
    modules: [
      { t: "الأساسيات", l: ["Views", "المُعدِّلات Modifiers", "Stacks"] },
      { t: "الحالة", l: ["@State و @Binding", "Observable"] },
      { t: "التنقل", l: ["NavigationStack", "Sheets"] },
      { t: "البيانات", l: ["SwiftData", "الشبكات URLSession"] }
    ], project: "تطبيق متتبع عادات" },
  { id: "react-native", name: "React Native", short: "RN", color: "#61dafb", kind: "إطار عمل", level: "متوسط", hours: 30,
    desc: "تطبيقات جوال أصلية باستخدام React و JavaScript.",
    modules: [
      { t: "الأساسيات", l: ["Expo", "المكونات الأساسية", "التنسيق"] },
      { t: "التنقل", l: ["React Navigation"] },
      { t: "الجهاز", l: ["الكاميرا والموقع", "الإشعارات"] },
      { t: "النشر", l: ["EAS Build", "النشر على المتاجر"] }
    ], project: "تطبيق تواصل اجتماعي مصغر" },
  { id: "firebase", name: "Firebase", short: "Fb", color: "#ffca28", kind: "منصة", level: "مبتدئ", hours: 10,
    desc: "خلفية جاهزة: مصادقة وقاعدة بيانات وتخزين وإشعارات.",
    modules: [
      { t: "الأساسيات", l: ["إنشاء مشروع", "Authentication"] },
      { t: "البيانات", l: ["Firestore", "Storage", "قواعد الأمان"] },
      { t: "متقدم", l: ["Cloud Functions", "الإشعارات FCM"] }
    ], project: "تطبيق دردشة فوري" },

  // ===== البيانات =====
  { id: "excel", name: "Excel للتحليل", short: "XL", color: "#217346", kind: "أداة", level: "مبتدئ", hours: 12,
    desc: "نقطة البداية لكل محلل بيانات.",
    modules: [
      { t: "الأساسيات", l: ["الجداول والتنسيق", "الصيغ الأساسية"] },
      { t: "الدوال", l: ["IF و الدوال المنطقية", "XLOOKUP و VLOOKUP", "دوال النصوص والتواريخ"] },
      { t: "التحليل", l: ["الجداول المحورية Pivot", "الرسوم البيانية", "Power Query"] }
    ], project: "تقرير مبيعات شهري" },
  { id: "numpy", name: "NumPy", short: "Np", color: "#4dabcf", kind: "مكتبة", level: "متوسط", hours: 10,
    desc: "أساس الحوسبة العلمية في Python.",
    modules: [
      { t: "المصفوفات", l: ["إنشاء المصفوفات", "الفهرسة والتقطيع", "الأشكال وإعادة التشكيل"] },
      { t: "العمليات", l: ["العمليات الرياضية", "البث Broadcasting", "الإحصاء والجبر الخطي"] }
    ], project: "محاكاة بيانات عشوائية وتحليلها" },
  { id: "pandas", name: "Pandas", short: "Pd", color: "#150458", kind: "مكتبة", level: "متوسط", hours: 25,
    desc: "المكتبة الأهم لمعالجة البيانات الجدولية وتحليلها.",
    modules: [
      { t: "الأساسيات", l: ["Series و DataFrame", "قراءة CSV و Excel", "الاستكشاف السريع"] },
      { t: "الاختيار والتصفية", l: ["loc و iloc", "التصفية بالشروط", "الترتيب"] },
      { t: "التنظيف", l: ["القيم المفقودة", "التكرارات", "تحويل الأنواع", "تنظيف النصوص"] },
      { t: "التجميع والدمج", l: ["groupby", "pivot_table", "merge و join", "concat"] },
      { t: "السلاسل الزمنية", l: ["التواريخ", "إعادة التشكيل الزمني resample"] }
    ], project: "تحليل بيانات متجر إلكتروني" },
  { id: "dataviz", name: "التصور البياني", short: "📊", color: "#ff7f0e", kind: "مكتبة", level: "متوسط", hours: 15,
    desc: "Matplotlib و Seaborn و Plotly لتحويل البيانات إلى قصص مرئية.",
    modules: [
      { t: "Matplotlib", l: ["الرسوم الأساسية", "التخصيص", "الرسوم المتعددة"] },
      { t: "Seaborn", l: ["الرسوم الإحصائية", "خرائط الحرارة"] },
      { t: "Plotly", l: ["الرسوم التفاعلية", "لوحات Dash"] },
      { t: "مبادئ التصور", l: ["اختيار الرسم المناسب", "سرد القصص بالبيانات"] }
    ], project: "تقرير مرئي تفاعلي" },
  { id: "jupyter", name: "Jupyter", short: "Jp", color: "#f37626", kind: "أداة", level: "مبتدئ", hours: 4,
    desc: "دفاتر تفاعلية لكتابة الكود والتحليل والتوثيق معاً.",
    modules: [
      { t: "الأساسيات", l: ["التثبيت و JupyterLab", "الخلايا و Markdown", "Google Colab"] }
    ], project: "دفتر تحليل موثق" },
  { id: "powerbi", name: "Power BI", short: "BI", color: "#f2c811", kind: "أداة", level: "مبتدئ", hours: 15,
    desc: "لوحات معلومات احترافية لصنّاع القرار.",
    modules: [
      { t: "الأساسيات", l: ["استيراد البيانات", "Power Query"] },
      { t: "النمذجة", l: ["العلاقات", "DAX: المقاييس والأعمدة", "DAX: CALCULATE والذكاء الزمني"] },
      { t: "اللوحات", l: ["المرئيات", "التفاعل والفلاتر", "النشر والمشاركة"] }
    ], project: "لوحة مؤشرات أداء مبيعات" },
  { id: "statistics", name: "الإحصاء للبيانات", short: "Σ", color: "#2c7be5", kind: "مفاهيم", level: "متوسط", hours: 20,
    desc: "الأساس الرياضي لتحليل البيانات وتعلم الآلة.",
    modules: [
      { t: "الإحصاء الوصفي", l: ["المتوسط والوسيط والمنوال", "التباين والانحراف المعياري", "التوزيعات"] },
      { t: "الاحتمالات", l: ["أساسيات الاحتمال", "التوزيع الطبيعي", "نظرية بايز"] },
      { t: "الاستدلال", l: ["العينات", "اختبار الفرضيات", "اختبارات A/B", "الارتباط والانحدار"] }
    ], project: "تحليل تجربة A/B" },

  // ===== الذكاء الاصطناعي =====
  { id: "sklearn", name: "Scikit-learn", short: "SK", color: "#f7931e", kind: "مكتبة", level: "متوسط", hours: 30,
    desc: "المكتبة الأساسية لتعلم الآلة الكلاسيكي.",
    modules: [
      { t: "مقدمة تعلم الآلة", l: ["ما هو تعلم الآلة", "أنواع التعلم", "تقسيم البيانات"] },
      { t: "الانحدار", l: ["الانحدار الخطي", "الانحدار متعدد الحدود", "التنظيم Regularization"] },
      { t: "التصنيف", l: ["الانحدار اللوجستي", "أشجار القرار", "Random Forest", "SVM"] },
      { t: "التجميع", l: ["K-Means", "DBSCAN", "تقليل الأبعاد PCA"] },
      { t: "التقييم", l: ["مقاييس الأداء", "التحقق المتقاطع", "ضبط المعاملات", "Pipelines"] }
    ], project: "نموذج تنبؤ بأسعار العقارات" },
  { id: "pytorch", name: "PyTorch", short: "PT", color: "#ee4c2c", kind: "مكتبة", level: "متقدم", hours: 40,
    desc: "إطار التعلم العميق الأكثر استخداماً في البحث والصناعة.",
    modules: [
      { t: "الأساسيات", l: ["Tensors", "Autograd", "استخدام GPU"] },
      { t: "الشبكات العصبية", l: ["nn.Module", "دوال الخسارة والمحسنات", "حلقة التدريب"] },
      { t: "الرؤية", l: ["الشبكات الالتفافية CNN", "نقل التعلم Transfer Learning"] },
      { t: "التسلسلات", l: ["RNN و LSTM", "Transformers"] }
    ], project: "مصنف صور" },
  { id: "tensorflow", name: "TensorFlow و Keras", short: "TF", color: "#ff6f00", kind: "مكتبة", level: "متقدم", hours: 30,
    desc: "إطار Google للتعلم العميق ونشر النماذج.",
    modules: [
      { t: "Keras", l: ["Sequential API", "Functional API", "التدريب والتقييم"] },
      { t: "التطبيقات", l: ["CNN", "NLP"] },
      { t: "النشر", l: ["TensorFlow Lite", "TF Serving"] }
    ], project: "نموذج تعرف على الأرقام المكتوبة" },
  { id: "huggingface", name: "Hugging Face و NLP", short: "🤗", color: "#ffbd45", kind: "مكتبة", level: "متقدم", hours: 25,
    desc: "معالجة اللغة الطبيعية بالنماذج الجاهزة.",
    modules: [
      { t: "أساسيات NLP", l: ["تجهيز النصوص", "Tokenization", "Embeddings"] },
      { t: "Transformers", l: ["Pipelines", "النماذج المدربة مسبقاً", "الضبط الدقيق Fine-tuning"] },
      { t: "التطبيقات", l: ["تحليل المشاعر", "التلخيص", "الترجمة"] }
    ], project: "محلل مشاعر للتغريدات العربية" },
  { id: "genai", name: "الذكاء الاصطناعي التوليدي", short: "AI", color: "#d97757", kind: "تقنية", level: "متقدم", hours: 30,
    desc: "بناء تطبيقات بنماذج اللغة الكبيرة: من الأوامر إلى الوكلاء.",
    modules: [
      { t: "نماذج اللغة الكبيرة", l: ["كيف تعمل LLMs", "استخدام APIs", "هندسة الأوامر Prompt Engineering"] },
      { t: "RAG", l: ["Embeddings", "قواعد البيانات المتجهية", "بناء نظام RAG"] },
      { t: "الأدوات والوكلاء", l: ["استدعاء الأدوات Tool Use", "بناء الوكلاء Agents", "LangChain"] },
      { t: "الإنتاج", l: ["التقييم Evals", "الأمان والتكلفة"] }
    ], project: "مساعد ذكي يجيب من مستنداتك" },
  { id: "opencv", name: "OpenCV والرؤية الحاسوبية", short: "CV", color: "#5c3ee8", kind: "مكتبة", level: "متقدم", hours: 20,
    desc: "معالجة الصور والفيديو واكتشاف الأجسام.",
    modules: [
      { t: "الأساسيات", l: ["قراءة الصور والفيديو", "التحويلات والفلاتر", "كشف الحواف"] },
      { t: "الاكتشاف", l: ["كشف الوجوه", "YOLO لاكتشاف الأجسام", "التتبع"] }
    ], project: "نظام عد السيارات من فيديو" },
  { id: "mlops", name: "MLOps", short: "Ops", color: "#0194e2", kind: "تقنية", level: "متقدم", hours: 20,
    desc: "نقل النماذج من الدفتر إلى الإنتاج.",
    modules: [
      { t: "التجارب", l: ["تتبع التجارب MLflow", "إدارة البيانات DVC"] },
      { t: "النشر", l: ["تقديم النموذج بـ FastAPI", "الحاويات Docker", "المراقبة وانحراف البيانات"] }
    ], project: "نشر نموذج كخدمة" },

  // ===== DevOps والسحابة =====
  { id: "linux", name: "Linux", short: "🐧", color: "#fcc624", kind: "نظام تشغيل", level: "مبتدئ", hours: 20,
    desc: "النظام الذي يشغّل معظم خوادم العالم.",
    modules: [
      { t: "الأساسيات", l: ["التوزيعات", "نظام الملفات", "الأوامر الأساسية"] },
      { t: "الإدارة", l: ["المستخدمون والمجموعات", "الصلاحيات", "إدارة الحزم"] },
      { t: "العمليات والخدمات", l: ["العمليات ps و top", "systemd", "السجلات"] },
      { t: "الشبكات", l: ["أوامر الشبكة", "SSH", "الجدار الناري"] }
    ], project: "إعداد خادم ويب من الصفر" },
  { id: "docker", name: "Docker", short: "🐳", color: "#2496ed", kind: "أداة", level: "متوسط", hours: 15,
    desc: "الحاويات: شغّل تطبيقك في أي مكان بنفس الطريقة.",
    modules: [
      { t: "الأساسيات", l: ["ما هي الحاويات", "الصور والحاويات", "الأوامر الأساسية"] },
      { t: "Dockerfile", l: ["كتابة Dockerfile", "البناء متعدد المراحل", "أفضل الممارسات"] },
      { t: "البيانات والشبكات", l: ["Volumes", "الشبكات"] },
      { t: "Docker Compose", l: ["تشغيل تطبيقات متعددة", "بيئة تطوير كاملة"] }
    ], project: "تشغيل تطبيق كامل بالحاويات" },
  { id: "kubernetes", name: "Kubernetes", short: "K8s", color: "#326ce5", kind: "أداة", level: "متقدم", hours: 30,
    desc: "إدارة الحاويات على نطاق واسع.",
    modules: [
      { t: "الأساسيات", l: ["المعمارية", "Pods", "kubectl"] },
      { t: "الموارد", l: ["Deployments", "Services", "ConfigMaps و Secrets"] },
      { t: "الشبكات والتخزين", l: ["Ingress", "Persistent Volumes"] },
      { t: "متقدم", l: ["Helm", "التوسع التلقائي", "المراقبة"] }
    ], project: "نشر تطبيق على عنقود Kubernetes" },
  { id: "cicd", name: "CI/CD و GitHub Actions", short: "CI", color: "#2088ff", kind: "أداة", level: "متوسط", hours: 12,
    desc: "أتمتة الاختبار والبناء والنشر.",
    modules: [
      { t: "المفاهيم", l: ["ما هو CI/CD", "مراحل خط النشر"] },
      { t: "GitHub Actions", l: ["Workflows", "Jobs و Steps", "الأسرار والبيئات"] },
      { t: "أدوات أخرى", l: ["GitLab CI", "Jenkins"] }
    ], project: "خط نشر آلي لتطبيق ويب" },
  { id: "terraform", name: "Terraform", short: "Tf", color: "#7b42bc", kind: "أداة", level: "متقدم", hours: 15,
    desc: "البنية التحتية ككود.",
    modules: [
      { t: "الأساسيات", l: ["مفهوم IaC", "Providers و Resources", "plan و apply"] },
      { t: "متقدم", l: ["المتغيرات والمخرجات", "Modules", "إدارة الحالة State"] }
    ], project: "بناء بنية سحابية بالكود" },
  { id: "ansible", name: "Ansible", short: "As", color: "#ee0000", kind: "أداة", level: "متوسط", hours: 10,
    desc: "أتمتة إعداد الخوادم.",
    modules: [
      { t: "الأساسيات", l: ["Inventory", "الأوامر المباشرة", "Playbooks"] },
      { t: "متقدم", l: ["Roles", "المتغيرات والقوالب"] }
    ], project: "إعداد عدة خوادم تلقائياً" },
  { id: "aws", name: "AWS", short: "AWS", color: "#ff9900", kind: "منصة سحابية", level: "متوسط", hours: 35,
    desc: "أكبر منصة سحابية في العالم.",
    modules: [
      { t: "الأساسيات", l: ["مفاهيم السحابة", "الحساب و IAM", "المناطق Regions"] },
      { t: "الحوسبة", l: ["EC2", "Lambda", "ECS"] },
      { t: "التخزين وقواعد البيانات", l: ["S3", "RDS", "DynamoDB"] },
      { t: "الشبكات", l: ["VPC", "Load Balancer", "Route 53"] },
      { t: "الشهادات", l: ["التحضير لشهادة Cloud Practitioner", "التحضير لشهادة Solutions Architect"] }
    ], project: "استضافة تطبيق عالي الإتاحة" },
  { id: "monitoring", name: "المراقبة", short: "📈", color: "#e6522c", kind: "أداة", level: "متقدم", hours: 12,
    desc: "Prometheus و Grafana و ELK لمعرفة ما يحدث في أنظمتك.",
    modules: [
      { t: "المقاييس", l: ["Prometheus", "Grafana", "التنبيهات"] },
      { t: "السجلات", l: ["ELK Stack", "السجلات المركزية"] }
    ], project: "لوحة مراقبة لخادم إنتاج" },

  // ===== الأمن السيبراني =====
  { id: "networking", name: "أساسيات الشبكات", short: "Net", color: "#0e7c86", kind: "مفاهيم", level: "مبتدئ", hours: 20,
    desc: "كيف تتواصل الأجهزة: الأساس لكل مختص أمن ومهندس سحابة.",
    modules: [
      { t: "النماذج", l: ["نموذج OSI", "نموذج TCP/IP"] },
      { t: "البروتوكولات", l: ["IP والعناوين والشبكات الفرعية", "TCP و UDP", "DNS", "HTTP و HTTPS"] },
      { t: "الأجهزة", l: ["الموجهات والمبدلات", "الجدران النارية", "VPN"] }
    ], project: "تصميم شبكة شركة صغيرة" },
  { id: "security-basics", name: "أساسيات الأمن", short: "🔒", color: "#c0392b", kind: "مفاهيم", level: "مبتدئ", hours: 20,
    desc: "المفاهيم الأساسية لحماية الأنظمة والبيانات.",
    modules: [
      { t: "المبادئ", l: ["مثلث CIA", "التهديدات والثغرات", "أنواع المهاجمين"] },
      { t: "التشفير", l: ["التشفير المتماثل وغير المتماثل", "التجزئة Hashing", "الشهادات و TLS"] },
      { t: "الهجمات الشائعة", l: ["التصيد", "البرمجيات الخبيثة", "الهندسة الاجتماعية"] }
    ], project: "تقييم أمني لمؤسسة صغيرة" },
  { id: "web-security", name: "أمن الويب و Burp Suite", short: "WS", color: "#ff6633", kind: "أداة", level: "متوسط", hours: 25,
    desc: "ثغرات OWASP Top 10 وكيف تكتشفها وتمنعها.",
    modules: [
      { t: "الأدوات", l: ["إعداد Burp Suite", "Proxy و Repeater", "Intruder"] },
      { t: "ثغرات الحقن", l: ["SQL Injection", "Command Injection"] },
      { t: "ثغرات العميل", l: ["XSS", "CSRF"] },
      { t: "ثغرات التحكم", l: ["IDOR", "تجاوز المصادقة", "SSRF"] }
    ], project: "اختبار تطبيق ويب في مختبر" },
  { id: "pentest", name: "اختبار الاختراق", short: "PT", color: "#2d2d2d", kind: "تقنية", level: "متقدم", hours: 35,
    desc: "Nmap و Wireshark و Metasploit ومنهجية الاختراق الأخلاقي.",
    modules: [
      { t: "الاستطلاع", l: ["جمع المعلومات OSINT", "الفحص بـ Nmap", "تحليل الحزم بـ Wireshark"] },
      { t: "الاستغلال", l: ["Metasploit", "استغلال الخدمات", "كلمات المرور"] },
      { t: "ما بعد الاستغلال", l: ["رفع الصلاحيات في Linux", "رفع الصلاحيات في Windows"] },
      { t: "التقارير", l: ["كتابة تقرير احترافي", "تحديات CTF"] }
    ], project: "تقرير اختبار اختراق كامل" },
  { id: "blue-team", name: "الفريق الأزرق و SIEM", short: "BT", color: "#1f6feb", kind: "تقنية", level: "متوسط", hours: 25,
    desc: "المراقبة واكتشاف الهجمات والاستجابة للحوادث.",
    modules: [
      { t: "المراقبة", l: ["مركز العمليات الأمنية SOC", "أنظمة SIEM", "تحليل السجلات"] },
      { t: "الاستجابة", l: ["خطة الاستجابة للحوادث", "التحليل الجنائي الرقمي", "Threat Hunting"] }
    ], project: "التحقيق في حادثة اختراق" },

  // ===== الألعاب =====
  { id: "unity", name: "Unity", short: "U", color: "#555555", kind: "محرك ألعاب", level: "متوسط", hours: 45,
    desc: "المحرك الأشهر لألعاب الجوال والكمبيوتر بلغة C#.",
    modules: [
      { t: "الأساسيات", l: ["واجهة المحرر", "GameObjects و Components", "المشاهد Scenes"] },
      { t: "البرمجة", l: ["سكربتات C#", "الإدخال", "دورة حياة MonoBehaviour"] },
      { t: "الفيزياء", l: ["Rigidbody", "التصادمات", "Raycasting"] },
      { t: "الواجهة والصوت", l: ["UI", "الصوت", "الرسوم المتحركة"] },
      { t: "النشر", l: ["البناء للجوال", "البناء للكمبيوتر"] }
    ], project: "لعبة منصات ثنائية الأبعاد" },
  { id: "unreal", name: "Unreal Engine", short: "UE", color: "#313131", kind: "محرك ألعاب", level: "متقدم", hours: 45,
    desc: "محرك الرسوميات الواقعية والألعاب الكبرى.",
    modules: [
      { t: "الأساسيات", l: ["المحرر", "Actors"] },
      { t: "Blueprints", l: ["البرمجة المرئية", "الأحداث والمتغيرات"] },
      { t: "C++", l: ["أساسيات C++ في Unreal", "الأصناف المخصصة"] }
    ], project: "لعبة ثلاثية الأبعاد بسيطة" },
  { id: "godot", name: "Godot", short: "Gd", color: "#478cbf", kind: "محرك ألعاب", level: "مبتدئ", hours: 25,
    desc: "محرك مجاني ومفتوح المصدر ممتاز للبداية.",
    modules: [
      { t: "الأساسيات", l: ["Nodes و Scenes", "GDScript"] },
      { t: "الألعاب ثنائية الأبعاد", l: ["الحركة", "التصادم", "الرسوم المتحركة"] }
    ], project: "لعبة ألغاز" },
  { id: "phaser", name: "Phaser.js", short: "Ph", color: "#8f3fd1", kind: "مكتبة", level: "مبتدئ", hours: 15,
    desc: "ألعاب متصفح بلغة JavaScript.",
    modules: [
      { t: "الأساسيات", l: ["المشاهد", "الرسوم Sprites", "الإدخال"] },
      { t: "اللعب", l: ["الفيزياء", "النقاط والمستويات"] }
    ], project: "لعبة متصفح كاملة" },

  // ===== الأنظمة المدمجة =====
  { id: "arduino", name: "Arduino", short: "Ar", color: "#00979d", kind: "منصة", level: "مبتدئ", hours: 20,
    desc: "البداية في عالم الإلكترونيات والبرمجة المدمجة.",
    modules: [
      { t: "الأساسيات", l: ["اللوحة وبيئة التطوير", "أساسيات الدارات", "أول برنامج"] },
      { t: "المدخلات والمخرجات", l: ["الإشارات الرقمية", "الإشارات التناظرية", "PWM"] },
      { t: "الحساسات والمحركات", l: ["الحساسات", "المحركات", "الشاشات"] }
    ], project: "نظام ري ذكي" },
  { id: "esp32", name: "ESP32 وإنترنت الأشياء", short: "IoT", color: "#e7352c", kind: "منصة", level: "متوسط", hours: 20,
    desc: "أجهزة متصلة بالإنترنت.",
    modules: [
      { t: "الأساسيات", l: ["ESP32 وبيئة التطوير", "WiFi"] },
      { t: "الاتصال", l: ["MQTT", "خوادم الويب المدمجة", "منصات IoT السحابية"] }
    ], project: "محطة طقس متصلة" },
  { id: "raspberry-pi", name: "Raspberry Pi", short: "Pi", color: "#c51a4a", kind: "منصة", level: "مبتدئ", hours: 15,
    desc: "حاسوب صغير لمشاريع Linux والأتمتة.",
    modules: [
      { t: "الأساسيات", l: ["الإعداد", "Linux على Pi"] },
      { t: "GPIO", l: ["التحكم بالمنافذ بـ Python", "الكاميرا والحساسات"] }
    ], project: "كاميرا مراقبة ذكية" },
  { id: "rtos", name: "أنظمة الزمن الحقيقي RTOS", short: "RT", color: "#6a1b9a", kind: "مفاهيم", level: "متقدم", hours: 15,
    desc: "برمجة الأنظمة الحرجة زمنياً.",
    modules: [
      { t: "FreeRTOS", l: ["المهام Tasks", "الجدولة", "الطوابير والإشارات"] }
    ], project: "متحكم متعدد المهام" },

  // ===== علوم الحاسب =====
  { id: "dsa", name: "هياكل البيانات والخوارزميات", short: "DSA", color: "#16a085", kind: "مفاهيم", level: "متوسط", hours: 50,
    desc: "أساس التفكير البرمجي ومفتاح مقابلات الشركات الكبرى.",
    modules: [
      { t: "التعقيد", l: ["تحليل Big O", "تعقيد الزمن والمساحة"] },
      { t: "الهياكل الخطية", l: ["المصفوفات", "القوائم المترابطة", "المكدس Stack", "الطابور Queue"] },
      { t: "التجزئة", l: ["جداول التجزئة", "حل التصادمات"] },
      { t: "الأشجار", l: ["الأشجار الثنائية", "أشجار البحث BST", "الكومة Heap", "Trie"] },
      { t: "الرسوم البيانية", l: ["التمثيل", "BFS و DFS", "أقصر مسار Dijkstra"] },
      { t: "الخوارزميات", l: ["البحث الثنائي", "خوارزميات الترتيب", "العودية والتراجع", "البرمجة الديناميكية", "الخوارزميات الجشعة"] },
      { t: "المقابلات", l: ["أنماط حل المسائل", "تدريب على مسائل حقيقية"] }
    ], project: "حل 100 مسألة متدرجة" },
  { id: "clean-code", name: "الكود النظيف وأنماط التصميم", short: "CC", color: "#7f8c8d", kind: "مفاهيم", level: "متقدم", hours: 20,
    desc: "كيف تكتب كوداً يفهمه غيرك ويسهل تطويره.",
    modules: [
      { t: "الكود النظيف", l: ["التسمية", "الدوال الصغيرة", "التعليقات المفيدة"] },
      { t: "مبادئ SOLID", l: ["المسؤولية الواحدة", "المفتوح والمغلق", "بقية المبادئ"] },
      { t: "أنماط التصميم", l: ["أنماط الإنشاء", "أنماط الهيكلة", "أنماط السلوك"] },
      { t: "إعادة الهيكلة", l: ["رائحة الكود", "تقنيات Refactoring"] }
    ], project: "إعادة هيكلة مشروع قديم" },
  { id: "os-basics", name: "أساسيات أنظمة التشغيل", short: "OS", color: "#34495e", kind: "مفاهيم", level: "متوسط", hours: 15,
    desc: "كيف يدير الحاسوب العمليات والذاكرة والملفات.",
    modules: [
      { t: "العمليات", l: ["العمليات والخيوط", "الجدولة", "التزامن والأقفال"] },
      { t: "الذاكرة والملفات", l: ["الذاكرة الافتراضية", "أنظمة الملفات"] }
    ], project: "محاكي جدولة عمليات" },
  { id: "qa-automation", name: "أتمتة الاختبار", short: "QA", color: "#43b02a", kind: "أداة", level: "متوسط", hours: 25,
    desc: "Selenium و Playwright و Postman لضمان جودة البرمجيات.",
    modules: [
      { t: "أساسيات الجودة", l: ["أنواع الاختبار", "كتابة حالات الاختبار", "تقارير الأخطاء"] },
      { t: "أتمتة الواجهات", l: ["Selenium", "Playwright", "نمط Page Object"] },
      { t: "اختبار APIs", l: ["Postman", "الاختبار الآلي للـ API"] },
      { t: "الأداء", l: ["اختبار الحمل بـ k6"] }
    ], project: "إطار اختبارات آلي لموقع" }
];

CW.fields = [
  { id: "frontend", name: "تطوير الواجهات الأمامية", icon: "🎨", color: "#e34c26",
    desc: "كل ما يراه المستخدم ويتفاعل معه في المتصفح.",
    languages: ["html-css", "javascript", "typescript"],
    tools: ["react", "nextjs", "vue", "angular", "tailwind", "git", "vite", "frontend-testing"] },
  { id: "backend", name: "تطوير الواجهات الخلفية", icon: "🖥️", color: "#5fa04e",
    desc: "الخوادم وقواعد البيانات والواجهات البرمجية خلف كل تطبيق.",
    languages: ["javascript", "python", "java", "csharp", "go", "php", "sql"],
    tools: ["nodejs", "nestjs", "django", "fastapi", "spring-boot", "aspnet", "laravel", "postgresql", "mongodb", "redis", "graphql", "system-design"] },
  { id: "mobile", name: "تطوير تطبيقات الجوال", icon: "📱", color: "#02569b",
    desc: "تطبيقات Android و iOS الأصلية والمتعددة المنصات.",
    languages: ["dart", "kotlin", "swift", "javascript"],
    tools: ["flutter", "android-compose", "swiftui", "react-native", "firebase"] },
  { id: "data", name: "علم البيانات وتحليلها", icon: "📊", color: "#150458",
    desc: "استخراج القيمة والقرارات من البيانات.",
    languages: ["python", "sql"],
    tools: ["excel", "numpy", "pandas", "dataviz", "jupyter", "powerbi", "statistics"] },
  { id: "ai", name: "الذكاء الاصطناعي وتعلم الآلة", icon: "🤖", color: "#d97757",
    desc: "أنظمة تتعلم وتفهم اللغة والصور وتولّد المحتوى.",
    languages: ["python"],
    tools: ["sklearn", "pytorch", "tensorflow", "huggingface", "genai", "opencv", "mlops"] },
  { id: "devops", name: "DevOps والحوسبة السحابية", icon: "☁️", color: "#2496ed",
    desc: "أتمتة النشر وإدارة البنية التحتية والخوادم السحابية.",
    languages: ["bash", "python", "go"],
    tools: ["linux", "git", "docker", "kubernetes", "cicd", "terraform", "ansible", "aws", "monitoring"] },
  { id: "security", name: "الأمن السيبراني", icon: "🛡️", color: "#c0392b",
    desc: "حماية الأنظمة واكتشاف الثغرات والاستجابة للهجمات.",
    languages: ["python", "bash", "c"],
    tools: ["networking", "linux", "security-basics", "web-security", "pentest", "blue-team"] },
  { id: "games", name: "تطوير الألعاب", icon: "🎮", color: "#8f3fd1",
    desc: "ألعاب الجوال والكمبيوتر والمتصفح.",
    languages: ["csharp", "cpp", "javascript"],
    tools: ["unity", "unreal", "godot", "phaser"] },
  { id: "embedded", name: "الأنظمة المدمجة وإنترنت الأشياء", icon: "🔌", color: "#00979d",
    desc: "برمجة الأجهزة الإلكترونية والحساسات والأجهزة الذكية.",
    languages: ["c", "cpp", "python"],
    tools: ["arduino", "esp32", "raspberry-pi", "rtos"] },
  { id: "cs", name: "علوم الحاسب الأساسية", icon: "🧠", color: "#16a085",
    desc: "الأساس النظري المشترك الذي يميّز المبرمج المحترف.",
    languages: ["c", "python", "java"],
    tools: ["dsa", "clean-code", "os-basics", "git", "qa-automation"] }
];
