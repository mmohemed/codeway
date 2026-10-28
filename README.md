# CodeWay

منصة تعليمية عربية للغات البرمجة والمجالات التقنية والمسارات المهنية، من أول سطر برمجي حتى الوظيفة.

## التشغيل

لا يحتاج أي تثبيت: افتح `index.html` في المتصفح.

## المحتوى

| النوع | العدد |
|---|---|
| لغات برمجة | 16 |
| أدوات ومكتبات وأطر عمل | 64 |
| مجالات | 10 |
| مسارات مهنية | 13 |
| وحدات | 344 |
| دروس | 1050 |

## الصفحات

| الصفحة | الوصف |
|---|---|
| `index.html` | الرئيسية: محرر كود تفاعلي، واختبار «اكتشف مسارك»، والمسارات والمجالات واللغات، والميزات، والأسعار، والأسئلة الشائعة |
| `catalog.html` | الكتالوج: بحث فوري وتبويبات وفلترة حسب المستوى |
| `field.html?id=` | المجال: لغاته وأدواته ومساراته |
| `course.html?id=` | اللغة أو الأداة: الوحدات والدروس وتتبّع التقدّم |
| `path.html?id=` | المسار المهني: الخطوات على خط زمني ومشاريع المسار |
| `lesson.html?c=&m=&l=` | الدرس: الأهداف والشرح والتمرين والتنقل بين الدروس |

## الهيكل

```
css/styles.css        التنسيق: هوية رسمية بيضاء، وترويسة كحلية، ونقش ولون خاص لكل لغة ومجال
js/data/languages.js  اللغات ووحداتها ودروسها
js/data/fields.js     الأدوات والمكتبات، ثم المجالات التي تجمعها
js/data/paths.js      المسارات المهنية (خطوات بمعرّفات اللغات والأدوات)
js/common.js          الترويسة والتذييل والبطاقات وتتبّع التقدّم
js/runner.js          تشغيل JavaScript في Web Worker معزول مع مهلة
js/sql-runner.js      تشغيل SQL بمحرك SQLite كامل في المتصفح (sql.js في js/vendor، يعمل دون إنترنت)
js/dart-runner.js     تشغيل Dart عبر خدمة الترجمة الرسمية لـ DartPad (يحتاج إنترنت)
js/ts-runner.js       فحص أنواع TypeScript وتحويلها بالمترجم الرسمي في المتصفح (js/vendor، يعمل دون إنترنت)
js/kotlin-runner.js   تشغيل Kotlin عبر خدمة Kotlin Playground الرسمية من JetBrains (يحتاج إنترنت)
js/git-sim.js         طرفية محاكاة لـ Git و GitHub CLI وأوامر الملفات، بمخرجات مطابقة للأدوات الحقيقية
js/fw-runner.js       Vue و Angular الحقيقيان في إطار معاينة: ترجمة ملفات .vue و TypeScript في المتصفح، وواجهة وهمية وأدوات فحص
js/py-runner.js       Python الحقيقي (Pyodide) في Web Worker مع NumPy و Pandas و Matplotlib و SciPy، وعرض يشبه Jupyter، ووضع دفتر بـ IPython (يُحمَّل من الإنترنت)
js/xl-engine.js       محرك صيغ Excel: المراجع والتعبئة والمصفوفات المنسكبة ونحو 100 دالة، و js/xl-runner.js لورقة العمل والرسوم
js/m-engine.js        محرك Power Query (لغة M) مع الخطوات المطبقة، لدورتي Excel و Power BI
js/dax-engine.js      نموذج Power BI ومحرك DAX: العلاقات وسياق التصفية و CALCULATE والذكاء الزمني والمرئيات و RLS
js/test-runner.js     مشغّل اختبارات في إطار معزول: واجهة Vitest و Testing Library و Playwright ومحاكاة GitHub Actions
js/next-sim.js        محاكي Next.js (App Router): توجيه بالملفات ومكونات خادم وعميل و Server Actions و Route Handlers وتخزين مؤقت
js/tw-runner.js       معاينة Tailwind الحقيقي (js/vendor/tailwind-src.js) في إطار معزول، مع فحص للأنماط المحسوبة
js/npm-sim.js         امتداد الطرفية: npm و node و Vite، و ESLint و Prettier الحقيقيان (js/vendor، يُحمَّلان عند الحاجة)
js/content/           محتوى الدروس المولَّد لكل دورة
js/*.js               سكربت لكل صفحة
```

## إضافة محتوى

كل الصفحات تُبنى من ملفات `js/data`، فلا حاجة لتعديل الكود:

- **لغة جديدة:** أضف عنصراً إلى `CW.languages` في `languages.js`.
- **أداة أو مكتبة:** أضفها إلى `CW.tools` ثم أضف معرّفها إلى `tools` في المجال المناسب.
- **مسار مهني:** أضف عنصراً إلى `CW.paths` وضع في `steps` معرّفات اللغات والأدوات بالترتيب.

## محتوى الدروس

| الدورة | الحالة |
|---|---|
| JavaScript | ✅ مكتملة: 8 وحدات، 40 درساً، لكل درس شرح وأمثلة وتمرين مصحَّح تلقائياً واختبار |
| SQL | ✅ مكتملة: 9 وحدات، 29 درساً، على قاعدة بيانات متجر مشتركة (`content/sql/setup.sql`) |
| Dart | ✅ مكتملة: 5 وحدات، 15 درساً، تمهيداً لـ Flutter |
| TypeScript | ✅ مكتملة: 8 وحدات، 28 درساً، وأخطاء الأنواع تظهر في المحرر كما في VS Code |
| Kotlin | ✅ مكتملة: 6 وحدات، 19 درساً، تمهيداً لتطوير Android |
| Vue.js | ✅ مكتملة: 4 وحدات، 11 درساً بـ Vue 3 الحقيقي (ملفات .vue و script setup) مع Vue Router و Pinia، وكل مثال بمعاينة حية |
| Angular | ✅ مكتملة: 5 وحدات، 15 درساً بـ Angular 21 الحقيقي (JIT في المتصفح): المكونات المستقلة و Signals والخدمات و Router و HttpClient و RxJS والنماذج بنوعيها |
| اختبار الواجهات | ✅ مكتملة: 3 وحدات، 8 دروس: Vitest والمحاكاة و Testing Library و Playwright و CI، والتصحيح يشغّل اختبارات الطالب على نسخ معطوبة من الكود ليتأكد أنها تكشفها |
| Next.js | ✅ مكتملة: 5 وحدات، 15 درساً، الفحص يزور صفحات تطبيق الطالب ويتفاعل معها ويبني جدول next build |
| Tailwind CSS | ✅ مكتملة: 3 وحدات، 8 دروس، كل مثال بمعاينة حية، والتصحيح يقارن الأنماط المحسوبة فعلاً |
| Vite و npm | ✅ مكتملة: 3 وحدات، 8 دروس: package.json والحزم والسكربتات، ومشاريع Vite والبناء، و ESLint و Prettier |
| Git و GitHub | ✅ مكتملة: 4 وحدات، 14 درساً، تمارينها في طرفية محاكاة (فروع ودمج وتعارضات و Pull Requests و Issues) |
| NumPy | ✅ مكتملة: وحدتان، 6 دروس بـ Python الحقيقي في المتصفح |
| Pandas | ✅ مكتملة: 5 وحدات، 16 درساً على بيانات متجر (ملفات CSV)، من القراءة والتنظيف حتى التجميع والدمج والسلاسل الزمنية |
| الإحصاء للبيانات | ✅ مكتملة: 3 وحدات، 10 دروس بـ NumPy و SciPy و statsmodels: الوصفي والاحتمالات وبايز والاستدلال واختبارات A/B والانحدار |
| التصور البياني | ✅ مكتملة: 4 وحدات، 9 دروس: Matplotlib و Seaborn و Plotly (تفاعلي) ومبادئ التصور، والرسوم محفوظة صوراً في img/lessons |
| Jupyter | ✅ مكتملة: 3 دروس، الخلايا تُنفَّذ بـ IPython الحقيقي (الأوامر السحرية و Out[n] وخلايا Markdown) |
| Excel للتحليل | ✅ مكتملة: 3 وحدات، 8 دروس بمحاكي صيغ Excel (يحاكي ولا يشغّل Excel نفسه)، والجداول المحورية بـ GROUPBY و PIVOTBY، و Power Query |
| Power BI | ✅ مكتملة: 3 وحدات، 8 دروس بمحاكي نموذج Power BI ومحرك DAX (يحاكي ولا يشغّل Power BI نفسه) |
| بقية الدورات | الهيكل جاهز والمحتوى قيد الإعداد |

### كتابة الدروس

تُكتب الدروس في `content/<course>/m1.md` و `m2.md` ... (ملف لكل وحدة). الصيغة موثقة في أعلى `tools/build.py`. بعد الكتابة:

```bash
npm install                              # مرة واحدة: sql.js لأداة التحقق
node tools/verify.js javascript          # يشغّل كل مثال ويقارن مخرجاته، ويتحقق من حلول التمارين
node tools/verify.js sql --fill          # --fill يحسب المخرجات المكتوبة كـ "?" بالتشغيل الفعلي (راجعها بعدها)
DART=/path/to/dart node tools/verify.js dart   # Dart يتطلب Dart SDK، ويُترجم بـ dart2js كما في المتصفح
node tools/verify.js typescript          # بنفس مترجم TypeScript الذي يعمل في المتصفح
KOTLIN_LIB=/path/to/jars node tools/verify.js kotlin   # مجلد فيه kotlin-compiler-embeddable و kotlin-stdlib و kotlinx-coroutines
node tools/verify.js git --fill          # دورات الطرفية: يعيد كتابة كتل ```terminal من مخرجات المحاكي
python3 tools/reset-expected.py git      # بعد تعديل المحاكي: يعيد كل expected إلى "?" لتُحسب من جديد
node tools/verify.js tailwind --fill     # Tailwind يُتحقق منه في متصفح حقيقي (Playwright)
node tools/verify.js vue --fill          # Vue و Angular يُتحقق منهما في متصفح حقيقي بنفس مشغّل الطالب
PYODIDE_DIR=/path/to/pyodide node tools/verify.js pandas --fill   # دورات Python: توزيعة Pyodide 0.29.5 الكاملة (من إصدارات GitHub)، وتُحفظ الرسوم في img/lessons
node tools/verify.js excel --fill        # Excel و Power BI بنفس محركات المتصفح (xl-engine و m-engine و dax-engine)
python3 tools/reset-outputs.py pandas m2.md   # يعيد كتل output و expected إلى "?" لإعادة ملئها
node tools/shot.js git 1 2 out.png       # لقطة شاشة لدرس بعد تشغيل حله النموذجي (أضف mobile لعرض الجوال)
node tools/vendor-ts.js                  # عند تحديث إصدار TypeScript: يعيد توليد js/vendor/typescript.min.js و ts-libs.js
python3 tools/build.py javascript        # يولّد js/content/javascript.js
node tools/verify-browser.js javascript  # يختبر كل تمرين وأمثلة DOM في متصفح حقيقي (يتطلب Playwright)
```

ثم أضف معرّف الدورة إلى `CW.contentReady` في `js/common.js`.

## المرحلة القادمة

- محتوى بقية الدورات، بدءاً بـ HTML/CSS و Python
- خادم خلفي للتسجيل وحفظ التقدّم (حالياً يُحفظ في المتصفح فقط)
- تشغيل لغات غير JavaScript في المحرر، والمساعد الذكي، والشهادات، والدفع

## الهوية البصرية

- التصميم رسمي: صفحة بيضاء، وترويسة وتذييل باللون الكحلي.
- كل لغة وأداة ومجال ومسار له لون خاص (الحقل `color`) يظهر في رأس صفحته وأزرارها وتقدّمها، ونقش خلفية مختلف عن جيرانه.
- صفحة كل لغة تعرض مثالاً بأسلوب كتابتها، وبطاقة تعريف (سنة الإصدار، والمطوّر، والاستخدامات) من الحقول `hello` و `year` و `by` و `uses`.
