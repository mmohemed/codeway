// ملف مولَّد من content/typescript عبر tools/build.py، لا تعدّله يدوياً
CW.registerContent("typescript", [
 [
  {
   "body": "<h2>JavaScript مع حزام أمان</h2>\n<p><strong>TypeScript</strong> هي JavaScript مضافاً إليها <strong>نظام أنواع</strong>. كل كود JavaScript صحيح هو كود TypeScript صحيح، لكن TypeScript تسمح لك بأن تصف <strong>نوع</strong> كل قيمة: هل هي رقم؟ نص؟ كائن بخصائص معينة؟ ثم تفحص كودك <strong>قبل التشغيل</strong> وتنبهك للأخطاء.</p>\n<p>طورتها Microsoft عام 2012، واليوم تُستخدم في معظم المشاريع الاحترافية: VS Code نفسه، و Slack، و Airbnb، وأغلب مشاريع React و Angular و Node.js الحديثة.</p>\n<h2>المشكلة التي تحلها</h2>\n<p>في JavaScript هذا الكود يعمل، لكنه يعطي نتيجة خاطئة بصمت:</p>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>function total(price, qty) {\n  return price * qty;\n}\ntotal(&quot;100&quot;, 2);      // 200 بالصدفة\ntotal({ price: 100 }, 2); // NaN، ولن تعرف إلا عندما يشتكي المستخدم</code></pre></div>\n<p>في TypeScript نصف الأنواع، فيُكتشف الخطأ فوراً:</p>\n<div class=\"code-block src\"><span class=\"code-label\">TypeScript</span><pre dir=\"ltr\"><code>function total(price: number, qty: number): number {\n  return price * qty;\n}\n\nconsole.log(total(100, 2));\nconsole.log(total(&quot;100&quot;, 2));</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><div class=\"out-errs\"><div class=\"sql-err\" dir=\"ltr\">⚠️ سطر 6: Argument of type &#x27;string&#x27; is not assignable to parameter of type &#x27;number&#x27;.</div></div></div>\n<p>لاحظ أن الكود <strong>لم يُشغَّل أصلاً</strong>: TypeScript رفضته وأخبرتك بالسطر والسبب. في المحرر الحقيقي يظهر هذا الخطأ كخط أحمر <strong>أثناء الكتابة</strong>.</p>\n<h2>ماذا تكسب؟</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>الميزة</th><th>الشرح</th></tr></thead><tbody><tr><td><strong>اكتشاف الأخطاء مبكراً</strong></td><td>أخطاء كثيرة تظهر في المحرر بدل ظهورها للمستخدم</td></tr><tr><td><strong>إكمال تلقائي ذكي</strong></td><td>المحرر يعرف خصائص كل كائن فيقترحها عليك</td></tr><tr><td><strong>توثيق حي</strong></td><td>الأنواع تشرح ما تتوقعه الدالة وما تُرجعه</td></tr><tr><td><strong>إعادة هيكلة آمنة</strong></td><td>غيّر اسم خاصية فيدلك المحرر على كل مكان يجب تعديله</td></tr><tr><td><strong>عمل الفريق</strong></td><td>الكود الكبير يصبح مفهوماً لمن لم يكتبه</td></tr></tbody></table></div>\n<h2>كيف تعمل؟</h2>\n<p>المتصفحات و Node.js لا تفهم TypeScript مباشرة. لذلك هناك خطوة <strong>ترجمة (Compile)</strong>:</p>\n<ol><li>تكتب ملف <code dir=\"ltr\">app.ts</code>.</li><li>مترجم TypeScript (<code dir=\"ltr\">tsc</code>) <strong>يفحص الأنواع</strong>.</li><li>ثم <strong>يحذف الأنواع</strong> وينتج ملف <code dir=\"ltr\">app.js</code> عادياً يعمل في أي مكان.</li></ol>\n<p>الأنواع موجودة وقت الكتابة فقط، ولا أثر لها عند التشغيل.</p>\n<div class=\"callout tip\">💡 محرر CodeWay يحتوي مترجم TypeScript الرسمي نفسه: يفحص كودك بوضع <code dir=\"ltr\">strict</code> (الأكثر صرامة)، ثم يشغّل الناتج. وهو يعمل دون إنترنت.</div>\n<h2>ملخص الدرس</h2>\n<ul><li>TypeScript هي JavaScript + أنواع.</li><li>الأخطاء تُكتشف قبل التشغيل، مع إكمال تلقائي وتوثيق أفضل.</li><li>الكود يُترجم إلى JavaScript عادي، والأنواع تختفي عند التشغيل.</li></ul>",
   "exercise": {
    "prompt": "<p>الدالة <code dir=\"ltr\">greet</code> فيها خطأ أنواع يمنع تشغيلها. اقرأ رسالة الخطأ بالضغط على «تشغيل»، ثم أصلح <strong>الاستدعاء</strong> (وليس الدالة) بحيث يطبع البرنامج:</p>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>مرحباً يا علياء، عمرك 28</code></pre></div>",
    "starter": "function greet(name: string, age: number): string {\n  return `مرحباً يا ${name}، عمرك ${age}`;\n}\n\nconsole.log(greet(28, \"علياء\"));",
    "expected": "مرحباً يا علياء، عمرك 28",
    "solution": "function greet(name: string, age: number): string {\n  return `مرحباً يا ${name}، عمرك ${age}`;\n}\n\nconsole.log(greet(\"علياء\", 28));"
   },
   "quiz": [
    {
     "q": "ما العلاقة بين TypeScript و JavaScript؟",
     "o": [
      "TypeScript هي JavaScript مضافاً إليها نظام أنواع",
      "لغتان لا علاقة بينهما",
      "TypeScript نسخة أقدم من JavaScript"
     ],
     "a": 0,
     "why": "كل كود JavaScript صحيح هو كود TypeScript صحيح."
    },
    {
     "q": "متى تكتشف TypeScript أخطاء الأنواع؟",
     "o": [
      "قبل التشغيل، أثناء الكتابة والترجمة",
      "عند تشغيل البرنامج فقط",
      "بعد نشر التطبيق"
     ],
     "a": 0,
     "why": "هذا هو جوهر فائدتها."
    },
    {
     "q": "ماذا يحدث للأنواع بعد الترجمة إلى JavaScript؟",
     "o": [
      "تبقى وتبطئ البرنامج",
      "تُحذف تماماً، والناتج JavaScript عادي",
      "تتحول إلى تعليقات"
     ],
     "a": 1,
     "why": "الأنواع أداة وقت الكتابة فقط."
    }
   ]
  },
  {
   "body": "<h2>إعداد مشروع TypeScript</h2>\n<p>في هذه الدورة لا تحتاج أي تثبيت. لكن في مشروعك الحقيقي على جهازك تحتاج <strong>Node.js</strong> أولاً، ثم:</p>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>npm install --save-dev typescript\nnpx tsc --init</code></pre></div>\n<ul><li>الأمر الأول يثبت TypeScript في المشروع.</li><li>الثاني ينشئ ملف الإعدادات <code dir=\"ltr\">tsconfig.json</code>.</li></ul>\n<h2>ملف tsconfig.json</h2>\n<p>هو قلب أي مشروع TypeScript، ويحدد كيف يعمل المترجم:</p>\n<div class=\"code-block src\"><span class=\"code-label\">json</span><pre dir=\"ltr\"><code>{\n  &quot;compilerOptions&quot;: {\n    &quot;target&quot;: &quot;ES2022&quot;,\n    &quot;module&quot;: &quot;NodeNext&quot;,\n    &quot;strict&quot;: true,\n    &quot;outDir&quot;: &quot;dist&quot;,\n    &quot;rootDir&quot;: &quot;src&quot;,\n    &quot;noUncheckedIndexedAccess&quot;: true\n  },\n  &quot;include&quot;: [&quot;src&quot;]\n}</code></pre></div>\n<div class=\"table-wrap\"><table><thead><tr><th>الخيار</th><th>وظيفته</th></tr></thead><tbody><tr><td><code dir=\"ltr\">target</code></td><td>إصدار JavaScript الناتج</td></tr><tr><td><code dir=\"ltr\">module</code></td><td>نظام الوحدات (import و export)</td></tr><tr><td><code dir=\"ltr\">strict</code></td><td><strong>أهم خيار</strong>: يفعّل كل الفحوص الصارمة</td></tr><tr><td><code dir=\"ltr\">outDir</code> و <code dir=\"ltr\">rootDir</code></td><td>أين الملفات المصدرية وأين يوضع الناتج</td></tr><tr><td><code dir=\"ltr\">include</code></td><td>الملفات التي يترجمها</td></tr></tbody></table></div>\n<h2>الوضع الصارم strict</h2>\n<p><code dir=\"ltr\">strict: true</code> يفعّل مجموعة فحوص، أهمها:</p>\n<ul><li>**<code dir=\"ltr\">noImplicitAny</code>**: كل معامل يجب أن يكون له نوع معروف.</li><li>**<code dir=\"ltr\">strictNullChecks</code>**: لا يمكن استخدام قيمة قد تكون <code dir=\"ltr\">null</code> أو <code dir=\"ltr\">undefined</code> دون فحص.</li></ul>\n<div class=\"code-block src\"><span class=\"code-label\">TypeScript</span><pre dir=\"ltr\"><code>function double(n) {\n  return n * 2;\n}\nconsole.log(double(4));</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><div class=\"out-errs\"><div class=\"sql-err\" dir=\"ltr\">⚠️ سطر 1: Parameter &#x27;n&#x27; implicitly has an &#x27;any&#x27; type.</div></div></div>\n<p>بدون نوع للمعامل <code dir=\"ltr\">n</code>، لا تعرف TypeScript ما هو، فتعتبره ضمنياً <code dir=\"ltr\">any</code> (أي شيء)، والوضع الصارم يرفض ذلك. الحل كتابة النوع:</p>\n<div class=\"code-block src\"><span class=\"code-label\">TypeScript</span><pre dir=\"ltr\"><code>function double(n: number) {\n  return n * 2;\n}\nconsole.log(double(4));</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>8</code></pre></div>\n<div class=\"callout tip\">💡 ابدأ كل مشروع جديد بـ <code dir=\"ltr\">strict: true</code>. تحويله لاحقاً في مشروع كبير مؤلم جداً.</div>\n<h2>الأدوات المحيطة</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>الأداة</th><th>الاستخدام</th></tr></thead><tbody><tr><td><strong>VS Code</strong></td><td>دعم TypeScript مدمج، والأخطاء تظهر أثناء الكتابة</td></tr><tr><td><strong>tsx</strong></td><td>تشغيل ملفات <code dir=\"ltr\">.ts</code> مباشرة في التطوير: <code dir=\"ltr\">npx tsx app.ts</code></td></tr><tr><td><strong>Vite</strong></td><td>مشاريع الواجهات بـ TypeScript جاهزة: <code dir=\"ltr\">npm create vite@latest</code></td></tr><tr><td><strong>Node.js 22.6+</strong></td><td>يشغّل ملفات TypeScript البسيطة مباشرة بحذف الأنواع</td></tr></tbody></table></div>\n<h2>ملخص الدرس</h2>\n<ul><li><code dir=\"ltr\">npm install -D typescript</code> ثم <code dir=\"ltr\">npx tsc --init</code> لإنشاء المشروع.</li><li><code dir=\"ltr\">tsconfig.json</code> يحدد إعدادات المترجم.</li><li><code dir=\"ltr\">strict: true</code> أهم خيار، ويمنع <code dir=\"ltr\">any</code> الضمني ويفحص <code dir=\"ltr\">null</code>.</li></ul>",
   "exercise": {
    "prompt": "<p>الكود التالي لا يُترجم في الوضع الصارم لأن معاملات الدالة بلا أنواع. أضف الأنواع المناسبة لـ <code dir=\"ltr\">name</code> (نص) و <code dir=\"ltr\">price</code> (رقم) و <code dir=\"ltr\">onSale</code> (قيمة منطقية)، دون تغيير جسم الدالة أو الاستدعاءات.</p>",
    "starter": "function label(name, price, onSale) {\n  return onSale ? `${name}: ${price * 0.8} (تخفيض)` : `${name}: ${price}`;\n}\n\nconsole.log(label(\"قميص\", 100, true));\nconsole.log(label(\"حذاء\", 250, false));",
    "expected": "قميص: 80 (تخفيض)\nحذاء: 250",
    "solution": "function label(name: string, price: number, onSale: boolean) {\n  return onSale ? `${name}: ${price * 0.8} (تخفيض)` : `${name}: ${price}`;\n}\n\nconsole.log(label(\"قميص\", 100, true));\nconsole.log(label(\"حذاء\", 250, false));"
   },
   "quiz": [
    {
     "q": "ما اسم ملف إعدادات مشروع TypeScript؟",
     "o": [
      "<code dir=\"ltr\">tsconfig.json</code>",
      "<code dir=\"ltr\">package.json</code>",
      "<code dir=\"ltr\">typescript.config</code>"
     ],
     "a": 0,
     "why": "ينشئه الأمر <code dir=\"ltr\">npx tsc --init</code>."
    },
    {
     "q": "ماذا يفعل الخيار <code dir=\"ltr\">strict: true</code>؟",
     "o": [
      "يفعّل مجموعة الفحوص الصارمة مثل منع any الضمني وفحص null",
      "يمنع استخدام JavaScript",
      "يجعل الترجمة أسرع"
     ],
     "a": 0,
     "why": "هو الإعداد الموصى به لكل مشروع جديد."
    },
    {
     "q": "لماذا يرفض الوضع الصارم <code dir=\"ltr\">function f(x) { ... }</code>؟",
     "o": [
      "لأن المعامل x نوعه any ضمنياً",
      "لأن الدالة بلا return",
      "لأن اسم المعامل قصير"
     ],
     "a": 0,
     "why": "يجب تحديد نوع كل معامل."
    }
   ]
  },
  {
   "body": "<h2>من الكتابة إلى التشغيل</h2>\n<p>لنفهم ماذا يحدث بالضبط عندما يترجم المترجم ملفك. هذا كود TypeScript:</p>\n<div class=\"code-block src\"><span class=\"code-label\">TypeScript</span><pre dir=\"ltr\"><code>type Product = {\n  name: string;\n  price: number;\n};\n\nconst items: Product[] = [\n  { name: &quot;قلم&quot;, price: 5 },\n  { name: &quot;دفتر&quot;, price: 12 }\n];\n\nconst total: number = items.reduce((sum, item) =&gt; sum + item.price, 0);\nconsole.log(`الإجمالي: ${total}`);</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>الإجمالي: 17</code></pre></div>\n<p>وهذا ما ينتجه المترجم (JavaScript):</p>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>const items = [\n  { name: &quot;قلم&quot;, price: 5 },\n  { name: &quot;دفتر&quot;, price: 12 }\n];\n\nconst total = items.reduce((sum, item) =&gt; sum + item.price, 0);\nconsole.log(`الإجمالي: ${total}`);</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>الإجمالي: 17</code></pre></div>\n<p>النوع <code dir=\"ltr\">Product</code> اختفى تماماً، وكذلك <code dir=\"ltr\">: number</code> و <code dir=\"ltr\">: Product[]</code>. الكود الناتج هو JavaScript الذي تعرفه.</p>\n<h2>تعليقات الأنواع (Type Annotations)</h2>\n<p>الصيغة دائماً: <strong>اسم ثم نقطتان ثم النوع</strong>:</p>\n<div class=\"code-block src\"><span class=\"code-label\">TypeScript</span><pre dir=\"ltr\"><code>let city: string = &quot;الرياض&quot;;\nlet population: number = 7_000_000;\nlet isCapital: boolean = true;\n\nfunction area(width: number, height: number): number {\n  return width * height;\n}\n\nconsole.log(city, population, isCapital, area(4, 5));</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>الرياض 7000000 true 20</code></pre></div>\n<ul><li><code dir=\"ltr\">let city: string</code> نوع المتغير.</li><li><code dir=\"ltr\">(width: number, ...)</code> نوع كل معامل.</li><li><code dir=\"ltr\">): number</code> بعد الأقواس: نوع ما تُرجعه الدالة.</li><li><code dir=\"ltr\">7_000_000</code> الشرطة السفلية فاصل للقراءة فقط، والرقم هو 7000000.</li></ul>\n<h2>أخطاء شائعة يكتشفها المترجم</h2>\n<div class=\"code-block src\"><span class=\"code-label\">TypeScript</span><pre dir=\"ltr\"><code>const user = { name: &quot;فارس&quot;, email: &quot;faris@mail.com&quot; };\nconsole.log(user.emial);</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><div class=\"out-errs\"><div class=\"sql-err\" dir=\"ltr\">⚠️ سطر 2: Property &#x27;emial&#x27; does not exist on type &#x27;{ name: string; email: string; }&#x27;. Did you mean &#x27;email&#x27;?</div></div></div>\n<p>خطأ إملائي في اسم الخاصية. JavaScript تُرجع <code dir=\"ltr\">undefined</code> بصمت، أما TypeScript فتكتشفه وتقترح الاسم الصحيح.</p>\n<div class=\"code-block src\"><span class=\"code-label\">TypeScript</span><pre dir=\"ltr\"><code>function getLength(text: string) {\n  return text.length;\n}\nconsole.log(getLength(null));</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><div class=\"out-errs\"><div class=\"sql-err\" dir=\"ltr\">⚠️ سطر 4: Argument of type &#x27;null&#x27; is not assignable to parameter of type &#x27;string&#x27;.</div></div></div>\n<p>تمرير <code dir=\"ltr\">null</code> لدالة تتوقع نصاً. هذا الخطأ من أشهر أسباب انهيار التطبيقات، والوضع الصارم يمنعه.</p>\n<h2>ملخص الدرس</h2>\n<ul><li>المترجم يفحص الأنواع ثم يحذفها، فينتج JavaScript عادياً.</li><li>الصيغة: <code dir=\"ltr\">name: type</code> للمتغيرات والمعاملات، و <code dir=\"ltr\">): type</code> لنوع الإرجاع.</li><li>TypeScript تكتشف الأخطاء الإملائية في الخصائص وتمرير <code dir=\"ltr\">null</code> حيث لا يجوز.</li></ul>",
   "exercise": {
    "prompt": "<p>الكود فيه <strong>خطآن</strong> تكتشفهما TypeScript: خطأ إملائي في اسم خاصية، ونوع إرجاع خاطئ للدالة. شغّل الكود واقرأ الأخطاء، ثم أصلحهما بحيث يطبع:</p>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>سارة: 3 طلبات</code></pre></div>",
    "starter": "const customer = { name: \"سارة\", orders: 3 };\n\nfunction summary(c: { name: string; orders: number }): number {\n  return `${c.name}: ${c.ordrs} طلبات`;\n}\n\nconsole.log(summary(customer));",
    "expected": "سارة: 3 طلبات",
    "solution": "const customer = { name: \"سارة\", orders: 3 };\n\nfunction summary(c: { name: string; orders: number }): string {\n  return `${c.name}: ${c.orders} طلبات`;\n}\n\nconsole.log(summary(customer));"
   },
   "quiz": [
    {
     "q": "ما معنى <code dir=\"ltr\">): boolean</code> في تعريف دالة؟",
     "o": [
      "أن الدالة تُرجع قيمة منطقية",
      "أن المعامل الأول منطقي",
      "أن الدالة لا تُرجع شيئاً"
     ],
     "a": 0,
     "why": "نوع الإرجاع يُكتب بعد أقواس المعاملات."
    },
    {
     "q": "ماذا يبقى من <code dir=\"ltr\">type Product = {...}</code> في ملف JavaScript الناتج؟",
     "o": [
      "لا شيء، يُحذف تماماً",
      "كائن فارغ",
      "تعليق"
     ],
     "a": 0,
     "why": "الأنواع لا وجود لها وقت التشغيل."
    },
    {
     "q": "ماذا تفعل TypeScript عند كتابة <code dir=\"ltr\">user.emial</code> بدل <code dir=\"ltr\">user.email</code>؟",
     "o": [
      "تُرجع undefined",
      "تعطي خطأ وتقترح الاسم الصحيح",
      "تنشئ الخاصية"
     ],
     "a": 1,
     "why": "الأخطاء الإملائية تُكتشف قبل التشغيل."
    }
   ]
  }
 ],
 [
  {
   "body": "<h2>الأنواع البدائية</h2>\n<p>هي نفس أنواع JavaScript، لكن الآن نكتبها صراحة:</p>\n<div class=\"code-block src\"><span class=\"code-label\">TypeScript</span><pre dir=\"ltr\"><code>let title: string = &quot;دورة TypeScript&quot;;\nlet lessons: number = 28;\nlet price: number = 49.99;\nlet published: boolean = true;\nlet nothing: null = null;\nlet notSet: undefined = undefined;\nlet big: bigint = 9007199254740993n;\n\nconsole.log(title, lessons, price, published, nothing, notSet);\nconsole.log(typeof big);</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>دورة TypeScript 28 49.99 true null undefined\nbigint</code></pre></div>\n<div class=\"table-wrap\"><table><thead><tr><th>النوع</th><th>يشمل</th></tr></thead><tbody><tr><td><code dir=\"ltr\">string</code></td><td>كل النصوص</td></tr><tr><td><code dir=\"ltr\">number</code></td><td>كل الأرقام: صحيحة وعشرية وسالبة</td></tr><tr><td><code dir=\"ltr\">boolean</code></td><td><code dir=\"ltr\">true</code> و <code dir=\"ltr\">false</code></td></tr><tr><td><code dir=\"ltr\">null</code> و <code dir=\"ltr\">undefined</code></td><td>غياب القيمة</td></tr><tr><td><code dir=\"ltr\">bigint</code></td><td>أرقام صحيحة ضخمة، تنتهي بـ <code dir=\"ltr\">n</code></td></tr><tr><td><code dir=\"ltr\">symbol</code></td><td>معرّفات فريدة</td></tr></tbody></table></div>\n<div class=\"callout warn\">⚠️ اكتب الأنواع بأحرف صغيرة: <code dir=\"ltr\">string</code> وليس <code dir=\"ltr\">String</code>. الكبيرة تشير لكائنات تغليف نادراً ما تحتاجها.</div>\n<h2>الأنواع تمنع الخلط</h2>\n<div class=\"code-block src\"><span class=\"code-label\">TypeScript</span><pre dir=\"ltr\"><code>let score: number = 90;\nscore = &quot;مئة&quot;;</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><div class=\"out-errs\"><div class=\"sql-err\" dir=\"ltr\">⚠️ سطر 2: Type &#x27;string&#x27; is not assignable to type &#x27;number&#x27;.</div></div></div>\n<p>بعد تحديد النوع، لا يمكن وضع قيمة من نوع آخر في المتغير.</p>\n<h2>أنواع الدوال</h2>\n<p>نحدد نوع كل معامل ونوع الإرجاع. والدالة التي لا تُرجع شيئاً نوعها <code dir=\"ltr\">void</code>:</p>\n<div class=\"code-block src\"><span class=\"code-label\">TypeScript</span><pre dir=\"ltr\"><code>function formatPrice(amount: number, currency: string = &quot;ريال&quot;): string {\n  return `${amount.toFixed(2)} ${currency}`;\n}\n\nfunction logMessage(msg: string): void {\n  console.log(`[سجل] ${msg}`);\n}\n\nconsole.log(formatPrice(15));\nconsole.log(formatPrice(9.5, &quot;دولار&quot;));\nlogMessage(&quot;تم الحفظ&quot;);</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>15.00 ريال\n9.50 دولار\n[سجل] تم الحفظ</code></pre></div>\n<h2>المعاملات الاختيارية</h2>\n<p>العلامة <code dir=\"ltr\">?</code> تجعل المعامل اختيارياً، فيكون نوعه داخل الدالة <code dir=\"ltr\">string | undefined</code>:</p>\n<div class=\"code-block src\"><span class=\"code-label\">TypeScript</span><pre dir=\"ltr\"><code>function fullName(first: string, last?: string): string {\n  return last ? `${first} ${last}` : first;\n}\n\nconsole.log(fullName(&quot;ماجد&quot;));\nconsole.log(fullName(&quot;ماجد&quot;, &quot;السالم&quot;));</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>ماجد\nماجد السالم</code></pre></div>\n<h2>ملخص الدرس</h2>\n<ul><li>الأنواع البدائية: <code dir=\"ltr\">string</code> و <code dir=\"ltr\">number</code> و <code dir=\"ltr\">boolean</code> و <code dir=\"ltr\">null</code> و <code dir=\"ltr\">undefined</code> و <code dir=\"ltr\">bigint</code>.</li><li>بعد تحديد النوع لا يمكن تغييره.</li><li><code dir=\"ltr\">void</code> للدوال التي لا تُرجع شيئاً.</li><li><code dir=\"ltr\">param?: type</code> لمعامل اختياري، و <code dir=\"ltr\">param = value</code> لقيمة افتراضية.</li></ul>",
   "exercise": {
    "prompt": "<p>أضف الأنواع الكاملة للدالة <code dir=\"ltr\">calculateBMI</code>:</p>\n<ul><li><code dir=\"ltr\">weight</code> (الوزن بالكيلوغرام) رقم.</li><li><code dir=\"ltr\">height</code> (الطول بالمتر) رقم.</li><li><code dir=\"ltr\">label</code> اختياري من نوع نص.</li><li>تُرجع نصاً.</li></ul>\n<p>إذا وُجد <code dir=\"ltr\">label</code> تكون النتيجة <code dir=\"ltr\">label: N</code>، وإلا تكون الرقم فقط كنص. <code dir=\"ltr\">N</code> هو الوزن ÷ مربع الطول مقرباً لخانة عشرية واحدة بـ <code dir=\"ltr\">toFixed(1)</code>.</p>",
    "starter": "function calculateBMI(weight, height, label) {\n  const bmi = (weight / (height * height)).toFixed(1);\n  return label ? `${label}: ${bmi}` : bmi;\n}\n\nconsole.log(calculateBMI(70, 1.75));\nconsole.log(calculateBMI(90, 1.8, \"خالد\"));",
    "expected": "22.9\nخالد: 27.8",
    "solution": "function calculateBMI(weight: number, height: number, label?: string): string {\n  const bmi = (weight / (height * height)).toFixed(1);\n  return label ? `${label}: ${bmi}` : bmi;\n}\n\nconsole.log(calculateBMI(70, 1.75));\nconsole.log(calculateBMI(90, 1.8, \"خالد\"));"
   },
   "quiz": [
    {
     "q": "ما نوع الدالة التي لا تُرجع قيمة؟",
     "o": [
      "<code dir=\"ltr\">null</code>",
      "<code dir=\"ltr\">void</code>",
      "<code dir=\"ltr\">undefined</code> دائماً"
     ],
     "a": 1,
     "why": "void تعني أن الدالة لا تُرجع شيئاً مفيداً."
    },
    {
     "q": "كيف تجعل معاملاً اختيارياً؟",
     "o": [
      "بإضافة <code dir=\"ltr\">?</code> بعد اسمه: <code dir=\"ltr\">name?: string</code>",
      "بإضافة <code dir=\"ltr\">!</code> بعد نوعه",
      "بكتابة <code dir=\"ltr\">optional</code> قبله"
     ],
     "a": 0,
     "why": "ويصبح نوعه داخل الدالة string | undefined."
    },
    {
     "q": "أيهما الصحيح لكتابة نوع النص؟",
     "o": [
      "<code dir=\"ltr\">string</code>",
      "<code dir=\"ltr\">String</code>",
      "<code dir=\"ltr\">text</code>"
     ],
     "a": 0,
     "why": "الأنواع البدائية تُكتب بأحرف صغيرة."
    }
   ]
  },
  {
   "body": "<h2>المصفوفات</h2>\n<p>نوع المصفوفة يُكتب بطريقتين متكافئتين:</p>\n<div class=\"code-block src\"><span class=\"code-label\">TypeScript</span><pre dir=\"ltr\"><code>const scores: number[] = [90, 85, 77];\nconst names: Array&lt;string&gt; = [&quot;هدى&quot;, &quot;سعد&quot;];\n\nscores.push(100);\nconsole.log(scores, names);</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>[90,85,77,100] [&quot;هدى&quot;,&quot;سعد&quot;]</code></pre></div>\n<p>والمصفوفة محددة النوع لا تقبل عناصر من نوع آخر:</p>\n<div class=\"code-block src\"><span class=\"code-label\">TypeScript</span><pre dir=\"ltr\"><code>const prices: number[] = [10, 20];\nprices.push(&quot;ثلاثون&quot;);</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><div class=\"out-errs\"><div class=\"sql-err\" dir=\"ltr\">⚠️ سطر 2: Argument of type &#x27;string&#x27; is not assignable to parameter of type &#x27;number&#x27;.</div></div></div>\n<h2>مصفوفة من الكائنات</h2>\n<p>الشكل الأكثر شيوعاً في التطبيقات:</p>\n<div class=\"code-block src\"><span class=\"code-label\">TypeScript</span><pre dir=\"ltr\"><code>const products: { name: string; price: number }[] = [\n  { name: &quot;ساعة&quot;, price: 450 },\n  { name: &quot;حقيبة&quot;, price: 200 }\n];\n\nconst cheap = products.filter(p =&gt; p.price &lt; 300).map(p =&gt; p.name);\nconsole.log(cheap);</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>[&quot;حقيبة&quot;]</code></pre></div>\n<p>لاحظ أننا لم نكتب نوع <code dir=\"ltr\">p</code> في <code dir=\"ltr\">filter</code> و <code dir=\"ltr\">map</code>: عرفته TypeScript تلقائياً من نوع المصفوفة.</p>\n<h2>الصفوف (Tuples): مصفوفة بطول وأنواع ثابتة</h2>\n<p>عندما يكون لكل موقع معنى ونوع محدد:</p>\n<div class=\"code-block src\"><span class=\"code-label\">TypeScript</span><pre dir=\"ltr\"><code>const point: [number, number] = [24.7, 46.7];\nconst entry: [string, number] = [&quot;أحمد&quot;, 92];\n\nconst [studentName, grade] = entry;\nconsole.log(`${studentName}: ${grade}`);\nconsole.log(point[0] + point[1]);</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>أحمد: 92\n71.4</code></pre></div>\n<p>الـ Tuple مفيد لإرجاع عدة قيم من دالة. React Hook المشهور <code dir=\"ltr\">useState</code> يُرجع Tuple: <code dir=\"ltr\">[value, setValue]</code>.</p>\n<div class=\"code-block src\"><span class=\"code-label\">TypeScript</span><pre dir=\"ltr\"><code>function minMax(nums: number[]): [number, number] {\n  return [Math.min(...nums), Math.max(...nums)];\n}\n\nconst [low, high] = minMax([7, 2, 9, 4]);\nconsole.log(low, high);</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>2 9</code></pre></div>\n<h2>مصفوفات للقراءة فقط</h2>\n<div class=\"code-block src\"><span class=\"code-label\">TypeScript</span><pre dir=\"ltr\"><code>const days: readonly string[] = [&quot;السبت&quot;, &quot;الأحد&quot;];\ndays.push(&quot;الاثنين&quot;);</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><div class=\"out-errs\"><div class=\"sql-err\" dir=\"ltr\">⚠️ سطر 2: Property &#x27;push&#x27; does not exist on type &#x27;readonly string[]&#x27;.</div></div></div>\n<p><code dir=\"ltr\">readonly</code> يمنع أي تعديل على المصفوفة، وهو مفيد للبيانات الثابتة.</p>\n<h2>ملخص الدرس</h2>\n<ul><li><code dir=\"ltr\">type[]</code> أو <code dir=\"ltr\">Array&lt;type&gt;</code> لنوع المصفوفة.</li><li>مصفوفة الكائنات: <code dir=\"ltr\">{ name: string }[]</code>.</li><li>الـ Tuple <code dir=\"ltr\">[string, number]</code> طول ثابت ونوع لكل موقع.</li><li><code dir=\"ltr\">readonly type[]</code> يمنع تعديل المصفوفة.</li></ul>",
   "exercise": {
    "prompt": "<ol><li>اكتب نوعاً مناسباً للمتغير <code dir=\"ltr\">inventory</code> (مصفوفة كائنات فيها <code dir=\"ltr\">item</code> نص و <code dir=\"ltr\">qty</code> رقم).</li><li>اكتب الدالة <code dir=\"ltr\">lowStock</code> التي تستقبل هذه المصفوفة وحداً <code dir=\"ltr\">limit</code> رقمياً، وتُرجع <strong>Tuple</strong> من نوع <code dir=\"ltr\">[number, string[]]</code>: عدد العناصر الناقصة، وأسماؤها (العناصر التي <code dir=\"ltr\">qty</code> فيها أقل من <code dir=\"ltr\">limit</code>).</li></ol>",
    "starter": "const inventory = [\n  { item: \"قلم\", qty: 40 },\n  { item: \"دفتر\", qty: 3 },\n  { item: \"ممحاة\", qty: 1 }\n];\n\nfunction lowStock(list, limit) {\n  // أكمل هنا\n}\n\nconst [count, names] = lowStock(inventory, 5);\nconsole.log(count);\nconsole.log(names);",
    "expected": "2\n[\"دفتر\",\"ممحاة\"]",
    "solution": "const inventory: { item: string; qty: number }[] = [\n  { item: \"قلم\", qty: 40 },\n  { item: \"دفتر\", qty: 3 },\n  { item: \"ممحاة\", qty: 1 }\n];\n\nfunction lowStock(list: { item: string; qty: number }[], limit: number): [number, string[]] {\n  const names = list.filter(x => x.qty < limit).map(x => x.item);\n  return [names.length, names];\n}\n\nconst [count, names] = lowStock(inventory, 5);\nconsole.log(count);\nconsole.log(names);"
   },
   "quiz": [
    {
     "q": "ما الفرق بين <code dir=\"ltr\">string[]</code> و <code dir=\"ltr\">[string, number]</code>؟",
     "o": [
      "الأول مصفوفة نصوص بأي طول، والثاني Tuple بعنصرين: نص ثم رقم",
      "لا فرق",
      "الثاني مصفوفة نصوص وأرقام بأي ترتيب"
     ],
     "a": 0,
     "why": "الـ Tuple يحدد الطول ونوع كل موقع."
    },
    {
     "q": "هل <code dir=\"ltr\">number[]</code> و <code dir=\"ltr\">Array&lt;number&gt;</code> متكافئتان؟",
     "o": [
      "نعم، صيغتان لنفس النوع",
      "لا، الثانية للكائنات فقط",
      "الأولى للقراءة فقط"
     ],
     "a": 0,
     "why": "اختر الصيغة الأوضح لك، والأولى أشيع."
    },
    {
     "q": "ماذا يحدث عند <code dir=\"ltr\">push</code> على مصفوفة <code dir=\"ltr\">readonly</code>؟",
     "o": [
      "يعمل عادياً",
      "خطأ ترجمة",
      "يُحذف العنصر الأخير"
     ],
     "a": 1,
     "why": "readonly تمنع أي تعديل."
    }
   ]
  },
  {
   "body": "<h2>عندما لا نعرف النوع</h2>\n<p>أحياناً لا نعرف نوع القيمة مسبقاً: بيانات من الخادم، أو مدخلات من المستخدم. لـ TypeScript ثلاثة أنواع خاصة لهذه الحالات، ولكل منها معنى مختلف تماماً.</p>\n<h2>any: أطفئ الفحص</h2>\n<p><code dir=\"ltr\">any</code> تعني &quot;لا تفحص هذه القيمة أبداً&quot;. يمكنك فعل أي شيء بها:</p>\n<div class=\"code-block src\"><span class=\"code-label\">TypeScript</span><pre dir=\"ltr\"><code>let data: any = &quot;نص&quot;;\ndata = 42;\ndata.foo.bar();</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><div class=\"out-errs\"><div class=\"sql-err\" dir=\"ltr\">⚠️ TypeError: Cannot read properties of undefined (reading &#x27;bar&#x27;)</div></div></div>\n<p>مرّت كل الأسطر من المترجم، ثم انهار البرنامج عند التشغيل! <code dir=\"ltr\">any</code> تُعيدك إلى JavaScript بلا حماية.</p>\n<div class=\"callout warn\">⚠️ تجنّب <code dir=\"ltr\">any</code>. كل <code dir=\"ltr\">any</code> في كودك ثغرة في حزام الأمان. استخدمها فقط مؤقتاً عند تحويل مشروع قديم.</div>\n<h2>unknown: النسخة الآمنة من any</h2>\n<p><code dir=\"ltr\">unknown</code> تقبل أي قيمة أيضاً، لكنها <strong>لا تسمح باستخدامها</strong> حتى تتحقق من نوعها:</p>\n<div class=\"code-block src\"><span class=\"code-label\">TypeScript</span><pre dir=\"ltr\"><code>let input: unknown = &quot;مرحباً&quot;;\nconsole.log(input.toUpperCase());</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><div class=\"out-errs\"><div class=\"sql-err\" dir=\"ltr\">⚠️ سطر 2: &#x27;input&#x27; is of type &#x27;unknown&#x27;.</div></div></div>\n<p>يجب التحقق أولاً:</p>\n<div class=\"code-block src\"><span class=\"code-label\">TypeScript</span><pre dir=\"ltr\"><code>function describe(value: unknown): string {\n  if (typeof value === &quot;string&quot;) {\n    return `نص طوله ${value.length}`;\n  }\n  if (typeof value === &quot;number&quot;) {\n    return `رقم، ضعفه ${value * 2}`;\n  }\n  if (Array.isArray(value)) {\n    return `مصفوفة فيها ${value.length} عناصر`;\n  }\n  return &quot;نوع آخر&quot;;\n}\n\nconsole.log(describe(&quot;مرحبا&quot;));\nconsole.log(describe(21));\nconsole.log(describe([1, 2, 3]));\nconsole.log(describe(true));</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>نص طوله 5\nرقم، ضعفه 42\nمصفوفة فيها 3 عناصر\nنوع آخر</code></pre></div>\n<p>بعد <code dir=\"ltr\">typeof value === &quot;string&quot;</code> تعرف TypeScript أن <code dir=\"ltr\">value</code> نص داخل الـ if، فتسمح بـ <code dir=\"ltr\">.length</code>. هذا يسمى <strong>التضييق (Narrowing)</strong>، وسنتعمق فيه في الوحدة الرابعة.</p>\n<div class=\"callout tip\">💡 القاعدة: إذا لم تعرف النوع استخدم <code dir=\"ltr\">unknown</code> وليس <code dir=\"ltr\">any</code>. هكذا تُجبر نفسك على التحقق قبل الاستخدام.</div>\n<h2>never: ما لا يحدث أبداً</h2>\n<p><code dir=\"ltr\">never</code> نوع لا توجد له أي قيمة. يظهر في حالتين:</p>\n<p><strong>1. دالة لا تنتهي بشكل طبيعي</strong> (ترمي خطأ دائماً):</p>\n<div class=\"code-block src\"><span class=\"code-label\">TypeScript</span><pre dir=\"ltr\"><code>function fail(message: string): never {\n  throw new Error(message);\n}\n\ntry {\n  fail(&quot;حدث خطأ متوقع&quot;);\n} catch (e) {\n  console.log((e as Error).message);\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>حدث خطأ متوقع</code></pre></div>\n<p><strong>2. التحقق من تغطية كل الحالات:</strong></p>\n<div class=\"code-block src\"><span class=\"code-label\">TypeScript</span><pre dir=\"ltr\"><code>type Status = &quot;new&quot; | &quot;paid&quot; | &quot;shipped&quot;;\n\nfunction label(s: Status): string {\n  switch (s) {\n    case &quot;new&quot;: return &quot;جديد&quot;;\n    case &quot;paid&quot;: return &quot;مدفوع&quot;;\n    case &quot;shipped&quot;: return &quot;تم الشحن&quot;;\n    default:\n      const check: never = s;\n      return check;\n  }\n}\n\nconsole.log(label(&quot;paid&quot;));</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>مدفوع</code></pre></div>\n<p>إذا أضاف أحدهم حالة جديدة <code dir=\"ltr\">&quot;cancelled&quot;</code> للنوع ونسي معالجتها، يصل <code dir=\"ltr\">s</code> إلى <code dir=\"ltr\">default</code> بنوع <code dir=\"ltr\">&quot;cancelled&quot;</code> الذي لا يمكن وضعه في <code dir=\"ltr\">never</code>، فيظهر <strong>خطأ ترجمة</strong> يذكّره بالمعالجة.</p>\n<h2>مقارنة سريعة</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>النوع</th><th>يقبل أي قيمة؟</th><th>يمكن استخدامه مباشرة؟</th></tr></thead><tbody><tr><td><code dir=\"ltr\">any</code></td><td>نعم</td><td>نعم، دون أي فحص (خطير)</td></tr><tr><td><code dir=\"ltr\">unknown</code></td><td>نعم</td><td>لا، بعد التحقق من النوع فقط</td></tr><tr><td><code dir=\"ltr\">never</code></td><td>لا شيء</td><td>يمثل المستحيل</td></tr></tbody></table></div>\n<h2>ملخص الدرس</h2>\n<ul><li><code dir=\"ltr\">any</code> يلغي الفحص فتجنّبه.</li><li><code dir=\"ltr\">unknown</code> آمن: يقبل أي شيء لكن يتطلب التحقق قبل الاستخدام.</li><li><code dir=\"ltr\">never</code> لدوال لا تنتهي، وللتأكد من تغطية كل الحالات.</li></ul>",
   "exercise": {
    "prompt": "<p>اكتب الدالة <code dir=\"ltr\">safeParse</code> التي تستقبل قيمة <code dir=\"ltr\">unknown</code> وتُرجع رقماً:</p>\n<ul><li>إذا كانت رقماً تُرجعها كما هي.</li><li>إذا كانت نصاً تحوّله بـ <code dir=\"ltr\">Number()</code>، وإذا كان الناتج <code dir=\"ltr\">NaN</code> تُرجع <code dir=\"ltr\">0</code>.</li><li>أي نوع آخر تُرجع <code dir=\"ltr\">0</code>.</li></ul>\n<p>(استخدم <code dir=\"ltr\">Number.isNaN</code> للتحقق من NaN.)</p>",
    "starter": "function safeParse(value: unknown): number {\n  return value * 1;\n}\n\nconsole.log(safeParse(15));\nconsole.log(safeParse(\"42\"));\nconsole.log(safeParse(\"abc\"));\nconsole.log(safeParse(null));",
    "expected": "15\n42\n0\n0",
    "solution": "function safeParse(value: unknown): number {\n  if (typeof value === \"number\") return value;\n  if (typeof value === \"string\") {\n    const n = Number(value);\n    return Number.isNaN(n) ? 0 : n;\n  }\n  return 0;\n}\n\nconsole.log(safeParse(15));\nconsole.log(safeParse(\"42\"));\nconsole.log(safeParse(\"abc\"));\nconsole.log(safeParse(null));"
   },
   "quiz": [
    {
     "q": "ما الفرق الأساسي بين any و unknown؟",
     "o": [
      "unknown تتطلب التحقق من النوع قبل الاستخدام، و any لا تفحص شيئاً",
      "لا فرق",
      "any أكثر أماناً"
     ],
     "a": 0,
     "why": "unknown هي البديل الآمن لـ any."
    },
    {
     "q": "ما نوع إرجاع دالة ترمي خطأ دائماً ولا تنتهي بشكل طبيعي؟",
     "o": [
      "void",
      "never",
      "undefined"
     ],
     "a": 1,
     "why": "never تعني أن الدالة لا تُرجع أبداً."
    },
    {
     "q": "لماذا يُنصح بتجنب any؟",
     "o": [
      "لأنها تلغي فحص الأنواع فتختفي الحماية التي توفرها TypeScript",
      "لأنها بطيئة",
      "لأنها غير مدعومة"
     ],
     "a": 0,
     "why": "كل any ثغرة يمكن أن يتسرب منها خطأ إلى وقت التشغيل."
    }
   ]
  },
  {
   "body": "<h2>TypeScript ذكية</h2>\n<p>لا تحتاج كتابة النوع في كل مكان. في أغلب الحالات <strong>تستنتج</strong> TypeScript النوع من القيمة:</p>\n<div class=\"code-block src\"><span class=\"code-label\">TypeScript</span><pre dir=\"ltr\"><code>let city = &quot;جدة&quot;;\nlet count = 10;\nlet active = true;\nlet tags = [&quot;ts&quot;, &quot;js&quot;];\n\ncity = 5;</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><div class=\"out-errs\"><div class=\"sql-err\" dir=\"ltr\">⚠️ سطر 6: Type &#x27;number&#x27; is not assignable to type &#x27;string&#x27;.</div></div></div>\n<p>لم نكتب أي نوع، ومع ذلك عرفت TypeScript أن <code dir=\"ltr\">city</code> نص، فرفضت وضع رقم فيه. مرّر الفأرة فوق أي متغير في VS Code وسترى نوعه المستنتج.</p>\n<h2>استنتاج نوع الإرجاع</h2>\n<div class=\"code-block src\"><span class=\"code-label\">TypeScript</span><pre dir=\"ltr\"><code>function add(a: number, b: number) {\n  return a + b;\n}\n\nfunction greet(name: string) {\n  return `أهلاً ${name}`;\n}\n\nconst sum = add(2, 3);\nconst message = greet(&quot;رنا&quot;);\nconsole.log(sum.toFixed(1), message.toUpperCase());</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>5.0 أهلاً رنا</code></pre></div>\n<p>TypeScript عرفت أن <code dir=\"ltr\">add</code> تُرجع <code dir=\"ltr\">number</code> و <code dir=\"ltr\">greet</code> تُرجع <code dir=\"ltr\">string</code>، فسمحت بـ <code dir=\"ltr\">toFixed</code> و <code dir=\"ltr\">toUpperCase</code>.</p>\n<h2>const مقابل let</h2>\n<div class=\"code-block src\"><span class=\"code-label\">TypeScript</span><pre dir=\"ltr\"><code>let a = &quot;مرحبا&quot;;\nconst b = &quot;مرحبا&quot;;\n\nlet direction: &quot;يمين&quot; | &quot;يسار&quot; = &quot;يمين&quot;;\nconst fixed = &quot;يسار&quot;;\ndirection = fixed;\nconsole.log(direction);</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>يسار</code></pre></div>\n<ul><li><code dir=\"ltr\">let a = &quot;مرحبا&quot;</code> نوعه <code dir=\"ltr\">string</code>، لأن قيمته قد تتغير لأي نص.</li><li><code dir=\"ltr\">const b = &quot;مرحبا&quot;</code> نوعه الحرفي <code dir=\"ltr\">&quot;مرحبا&quot;</code> بالضبط، لأنه لن يتغير أبداً.</li></ul>\n<p>لهذا قُبل إسناد <code dir=\"ltr\">fixed</code> إلى <code dir=\"ltr\">direction</code>: نوعه الحرفي <code dir=\"ltr\">&quot;يسار&quot;</code> من القيم المسموحة. (سنتعلم الأنواع الحرفية في الوحدة الرابعة.)</p>\n<h2>الاستنتاج من السياق</h2>\n<div class=\"code-block src\"><span class=\"code-label\">TypeScript</span><pre dir=\"ltr\"><code>const prices = [100, 250, 80];\n\nprices.forEach(p =&gt; {\n  console.log(p.toFixed(2));\n});</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>100.00\n250.00\n80.00</code></pre></div>\n<p>لم نكتب نوع <code dir=\"ltr\">p</code>، لكن TypeScript تعرف أنه <code dir=\"ltr\">number</code> لأنه عنصر من <code dir=\"ltr\">number[]</code>.</p>\n<h2>متى تكتب النوع بنفسك؟</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>اكتب النوع</th><th>دع TypeScript تستنتج</th></tr></thead><tbody><tr><td>معاملات الدوال (إلزامي في strict)</td><td>المتغيرات المهيأة بقيمة واضحة</td></tr><tr><td>نوع إرجاع الدوال العامة والمهمة</td><td>المتغيرات المحلية الصغيرة</td></tr><tr><td>المتغيرات التي تبدأ فارغة: <code dir=\"ltr\">let users: User[] = []</code></td><td>معاملات الـ callbacks مثل <code dir=\"ltr\">map(x =&gt; ...)</code></td></tr><tr><td>عندما يكون الاستنتاج أوسع مما تريد</td><td></td></tr></tbody></table></div>\n<div class=\"callout tip\">💡 لا تكتب أنواعاً واضحة بلا داعٍ مثل <code dir=\"ltr\">const count: number = 5</code>. الكود الأنظف يترك الاستنتاج يعمل حيث يكفي.</div>\n<h2>المصفوفة الفارغة: الخطأ يظهر بعيداً عن سببه</h2>\n<p>المصفوفة الفارغة لا تكشف نوعها. في الوضع الصارم تراقب TypeScript ما تضيفه إليها وتبني نوعها تدريجياً:</p>\n<div class=\"code-block src\"><span class=\"code-label\">TypeScript</span><pre dir=\"ltr\"><code>const items = [];\nitems.push(&quot;قلم&quot;);\nitems.push(5);\nconst first: string = items[0];\nconsole.log(first);</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><div class=\"out-errs\"><div class=\"sql-err\" dir=\"ltr\">⚠️ سطر 4: Type &#x27;string</div><div class=\"sql-err\" dir=\"ltr\">⚠️ number&#x27; is not assignable to type &#x27;string&#x27;.   Type &#x27;number&#x27; is not assignable to type &#x27;string&#x27;.</div></div></div>\n<p>السبب الحقيقي هو <code dir=\"ltr\">push(5)</code> في السطر الثالث، لكن الخطأ ظهر في السطر الرابع، لأن TypeScript استنتجت أن المصفوفة &quot;نصوص وأرقام&quot; وقبلت الإضافة. مع مصفوفة تُملأ في أماكن كثيرة، قد يظهر الخطأ في ملف آخر تماماً! الحل أن تعلن نيتك من البداية:</p>\n<div class=\"code-block src\"><span class=\"code-label\">TypeScript</span><pre dir=\"ltr\"><code>const items: string[] = [];\nitems.push(&quot;قلم&quot;);\nitems.push(5);</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><div class=\"out-errs\"><div class=\"sql-err\" dir=\"ltr\">⚠️ سطر 3: Argument of type &#x27;number&#x27; is not assignable to parameter of type &#x27;string&#x27;.</div></div></div>\n<p>الآن يظهر الخطأ في مكان سببه بالضبط.</p>\n<h2>ملخص الدرس</h2>\n<ul><li>TypeScript تستنتج الأنواع من القيم ومن السياق.</li><li><code dir=\"ltr\">let</code> تستنتج نوعاً عاماً، و <code dir=\"ltr\">const</code> تستنتج النوع الحرفي.</li><li>اكتب أنواع معاملات الدوال، وحدد نوع المصفوفات التي تبدأ فارغة حتى يظهر الخطأ في مكان سببه، ودع الباقي للاستنتاج.</li></ul>",
   "exercise": {
    "prompt": "<p>في الكود مصفوفة فارغة بلا نوع. شغّل الكود: سيظهر خطأ عند <code dir=\"ltr\">toUpperCase</code>، لكن سببه الحقيقي في مكان آخر.</p>\n<ol><li>حدد نوع <code dir=\"ltr\">cart</code> كمصفوفة نصوص <code dir=\"ltr\">string[]</code>.</li><li>سيظهر الخطأ الآن في مكانه الصحيح: السطر الذي يضيف رقماً. أصلحه بإضافة النص <code dir=\"ltr\">&quot;قلم&quot;</code> بدل الرقم.</li></ol>",
    "starter": "const cart = [];\ncart.push(\"كتاب\");\ncart.push(500);\n\nfor (const item of cart) {\n  console.log(item.toUpperCase());\n}",
    "expected": "كتاب\nقلم",
    "solution": "const cart: string[] = [];\ncart.push(\"كتاب\");\ncart.push(\"قلم\");\n\nfor (const item of cart) {\n  console.log(item.toUpperCase());\n}"
   },
   "quiz": [
    {
     "q": "ما نوع <code dir=\"ltr\">x</code> في <code dir=\"ltr\">let x = 3.14;</code>؟",
     "o": [
      "number",
      "any",
      "3.14"
     ],
     "a": 0,
     "why": "let يستنتج النوع العام من القيمة."
    },
    {
     "q": "ما نوع <code dir=\"ltr\">y</code> في <code dir=\"ltr\">const y = &quot;أ&quot;;</code>؟",
     "o": [
      "string",
      "النوع الحرفي &quot;أ&quot;",
      "any"
     ],
     "a": 1,
     "why": "const لا تتغير، فنوعها القيمة نفسها."
    },
    {
     "q": "متى يجب كتابة النوع صراحة؟",
     "o": [
      "لمعاملات الدوال وللمصفوفات التي تبدأ فارغة",
      "لكل متغير بلا استثناء",
      "لا يجب أبداً"
     ],
     "a": 0,
     "why": "في بقية الحالات يكفي الاستنتاج غالباً."
    }
   ]
  }
 ],
 [
  {
   "body": "<h2>وصف شكل الكائن</h2>\n<p>الكائنات في كل مكان في JavaScript. الـ <strong>interface</strong> تعطي اسماً لشكل كائن: ما خصائصه وما نوع كل منها.</p>\n<div class=\"code-block src\"><span class=\"code-label\">TypeScript</span><pre dir=\"ltr\"><code>interface User {\n  id: number;\n  name: string;\n  email: string;\n}\n\nconst user: User = {\n  id: 1,\n  name: &quot;هيفاء&quot;,\n  email: &quot;haifa@mail.com&quot;\n};\n\nfunction welcome(u: User): string {\n  return `مرحباً ${u.name} (${u.email})`;\n}\n\nconsole.log(welcome(user));</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>مرحباً هيفاء (haifa@mail.com)</code></pre></div>\n<h2>TypeScript تفحص الشكل بدقة</h2>\n<div class=\"code-block src\"><span class=\"code-label\">TypeScript</span><pre dir=\"ltr\"><code>interface User {\n  id: number;\n  name: string;\n  email: string;\n}\n\nconst broken: User = {\n  id: 2,\n  name: &quot;طلال&quot;\n};</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><div class=\"out-errs\"><div class=\"sql-err\" dir=\"ltr\">⚠️ سطر 7: Property &#x27;email&#x27; is missing in type &#x27;{ id: number; name: string; }&#x27; but required in type &#x27;User&#x27;.</div></div></div>\n<p>خاصية ناقصة؟ خطأ. وخاصية زائدة غير معرّفة؟ أيضاً خطأ:</p>\n<div class=\"code-block src\"><span class=\"code-label\">TypeScript</span><pre dir=\"ltr\"><code>interface Point { x: number; y: number }\nconst p: Point = { x: 1, y: 2, z: 3 };</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><div class=\"out-errs\"><div class=\"sql-err\" dir=\"ltr\">⚠️ سطر 2: Object literal may only specify known properties, and &#x27;z&#x27; does not exist in type &#x27;Point&#x27;.</div></div></div>\n<h2>الطرق في الواجهة</h2>\n<div class=\"code-block src\"><span class=\"code-label\">TypeScript</span><pre dir=\"ltr\"><code>interface Calculator {\n  brand: string;\n  add(a: number, b: number): number;\n  reset: () =&gt; void;\n}\n\nconst calc: Calculator = {\n  brand: &quot;Casio&quot;,\n  add: (a, b) =&gt; a + b,\n  reset: () =&gt; console.log(&quot;تم التصفير&quot;)\n};\n\nconsole.log(calc.add(7, 8));\ncalc.reset();</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>15\nتم التصفير</code></pre></div>\n<h2>الواجهات المتداخلة والمصفوفات</h2>\n<div class=\"code-block src\"><span class=\"code-label\">TypeScript</span><pre dir=\"ltr\"><code>interface Address {\n  city: string;\n  street: string;\n}\n\ninterface Customer {\n  name: string;\n  address: Address;\n  orders: number[];\n}\n\nconst c: Customer = {\n  name: &quot;نايف&quot;,\n  address: { city: &quot;الدمام&quot;, street: &quot;شارع الملك فهد&quot; },\n  orders: [101, 205]\n};\n\nconsole.log(`${c.name} من ${c.address.city}، طلباته: ${c.orders.length}`);</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>نايف من الدمام، طلباته: 2</code></pre></div>\n<h2>توسيع الواجهات: extends</h2>\n<div class=\"code-block src\"><span class=\"code-label\">TypeScript</span><pre dir=\"ltr\"><code>interface Animal {\n  name: string;\n}\n\ninterface Pet extends Animal {\n  owner: string;\n}\n\nconst cat: Pet = { name: &quot;مشمش&quot;, owner: &quot;لين&quot; };\nconsole.log(`${cat.name} يملكه ${cat.owner}`);</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>مشمش يملكه لين</code></pre></div>\n<p><code dir=\"ltr\">Pet</code> تحتوي كل خصائص <code dir=\"ltr\">Animal</code> بالإضافة لخصائصها.</p>\n<h2>الكتابة الهيكلية (Structural Typing)</h2>\n<p>مبدأ مهم: TypeScript تهتم <strong>بالشكل</strong> وليس بالاسم. أي كائن له الخصائص المطلوبة يُقبل:</p>\n<div class=\"code-block src\"><span class=\"code-label\">TypeScript</span><pre dir=\"ltr\"><code>interface Named {\n  name: string;\n}\n\nfunction hello(x: Named) {\n  return `أهلاً ${x.name}`;\n}\n\nconst product = { name: &quot;ساعة&quot;, price: 300 };\nconsole.log(hello(product));</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>أهلاً ساعة</code></pre></div>\n<p><code dir=\"ltr\">product</code> لم يُعرّف كـ <code dir=\"ltr\">Named</code>، لكنه يملك <code dir=\"ltr\">name: string</code>، فقُبل. (الخصائص الزائدة ممنوعة فقط عند كتابة الكائن مباشرة في نفس المكان.)</p>\n<h2>ملخص الدرس</h2>\n<ul><li><code dir=\"ltr\">interface</code> تصف شكل كائن: خصائصه وأنواعها وطرقه.</li><li>TypeScript ترفض الخصائص الناقصة، والزائدة عند الكتابة المباشرة.</li><li><code dir=\"ltr\">extends</code> لتوسيع واجهة من أخرى.</li><li>الكتابة هيكلية: الشكل هو المهم وليس الاسم.</li></ul>",
   "exercise": {
    "prompt": "<ol><li>عرّف واجهة <code dir=\"ltr\">Book</code> فيها: <code dir=\"ltr\">title</code> نص، و <code dir=\"ltr\">author</code> نص، و <code dir=\"ltr\">pages</code> رقم.</li><li>عرّف واجهة <code dir=\"ltr\">EBook</code> توسّع <code dir=\"ltr\">Book</code> وتضيف <code dir=\"ltr\">sizeMB</code> رقماً.</li><li>اكتب دالة <code dir=\"ltr\">describe(book: Book): string</code> تُرجع <code dir=\"ltr\">X - Y (N صفحة)</code>.</li></ol>\n<p>الكود في الأسفل جاهز.</p>",
    "starter": "// الواجهات والدالة هنا\n\nconst paper: Book = { title: \"الأيام\", author: \"طه حسين\", pages: 180 };\nconst digital: EBook = { title: \"مدن الملح\", author: \"عبدالرحمن منيف\", pages: 600, sizeMB: 4 };\n\nconsole.log(describe(paper));\nconsole.log(describe(digital));\nconsole.log(`${digital.sizeMB} MB`);",
    "expected": "الأيام - طه حسين (180 صفحة)\nمدن الملح - عبدالرحمن منيف (600 صفحة)\n4 MB",
    "solution": "interface Book {\n  title: string;\n  author: string;\n  pages: number;\n}\n\ninterface EBook extends Book {\n  sizeMB: number;\n}\n\nfunction describe(book: Book): string {\n  return `${book.title} - ${book.author} (${book.pages} صفحة)`;\n}\n\nconst paper: Book = { title: \"الأيام\", author: \"طه حسين\", pages: 180 };\nconst digital: EBook = { title: \"مدن الملح\", author: \"عبدالرحمن منيف\", pages: 600, sizeMB: 4 };\n\nconsole.log(describe(paper));\nconsole.log(describe(digital));\nconsole.log(`${digital.sizeMB} MB`);"
   },
   "quiz": [
    {
     "q": "ماذا يحدث إذا نقصت خاصية مطلوبة من كائن نوعه واجهة؟",
     "o": [
      "خطأ ترجمة يذكر الخاصية الناقصة",
      "تُضاف تلقائياً بقيمة undefined",
      "لا شيء"
     ],
     "a": 0,
     "why": "TypeScript تفحص اكتمال الشكل."
    },
    {
     "q": "ماذا يعني أن الكتابة في TypeScript &quot;هيكلية&quot;؟",
     "o": [
      "يكفي أن يملك الكائن الخصائص المطلوبة بأنواعها، بغض النظر عن اسم نوعه",
      "يجب أن يُعرّف الكائن بنفس اسم الواجهة",
      "الأنواع تتبع هيكل الملفات"
     ],
     "a": 0,
     "why": "الشكل هو الذي يهم."
    },
    {
     "q": "كيف تنشئ واجهة تحتوي كل خصائص واجهة أخرى مع إضافات؟",
     "o": [
      "<code dir=\"ltr\">interface B extends A { ... }</code>",
      "<code dir=\"ltr\">interface B = A + { ... }</code>",
      "<code dir=\"ltr\">interface B implements A</code>"
     ],
     "a": 0,
     "why": "extends يوسّع الواجهة."
    }
   ]
  },
  {
   "body": "<h2>اسم لأي نوع</h2>\n<p><code dir=\"ltr\">type</code> تعطي اسماً لأي نوع، وليس الكائنات فقط:</p>\n<div class=\"code-block src\"><span class=\"code-label\">TypeScript</span><pre dir=\"ltr\"><code>type ID = number;\ntype Name = string;\ntype Coordinates = [number, number];\ntype Product = {\n  id: ID;\n  name: Name;\n  location: Coordinates;\n};\n\nconst p: Product = { id: 7, name: &quot;مكتب&quot;, location: [21.4, 39.8] };\nconsole.log(p.name, p.location[0]);</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>مكتب 21.4</code></pre></div>\n<h2>أنواع الاتحاد: أكثر من احتمال</h2>\n<p>القوة الحقيقية لـ <code dir=\"ltr\">type</code> تظهر مع <strong>الاتحاد (Union)</strong> بالعلامة <code dir=\"ltr\">|</code>:</p>\n<div class=\"code-block src\"><span class=\"code-label\">TypeScript</span><pre dir=\"ltr\"><code>type Status = &quot;loading&quot; | &quot;success&quot; | &quot;error&quot;;\ntype IdValue = number | string;\n\nlet state: Status = &quot;loading&quot;;\nstate = &quot;success&quot;;\n\nfunction show(id: IdValue) {\n  console.log(`المعرّف: ${id}`);\n}\nshow(42);\nshow(&quot;A-17&quot;);\n\nstate = &quot;done&quot;;</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><div class=\"out-errs\"><div class=\"sql-err\" dir=\"ltr\">⚠️ سطر 13: Type &#x27;&quot;done&quot;&#x27; is not assignable to type &#x27;Status&#x27;.</div></div></div>\n<p><code dir=\"ltr\">Status</code> لا يقبل إلا ثلاث قيم محددة. أي قيمة أخرى، حتى لو كانت نصاً، تُرفض. (الوحدة الرابعة كلها عن الأنواع المركبة.)</p>\n<h2>أنواع الدوال</h2>\n<div class=\"code-block src\"><span class=\"code-label\">TypeScript</span><pre dir=\"ltr\"><code>type Formatter = (value: number) =&gt; string;\ntype Callback = () =&gt; void;\n\nconst toSAR: Formatter = v =&gt; `${v} ر.س`;\nconst toPercent: Formatter = v =&gt; `${(v * 100).toFixed(0)}%`;\n\nfunction apply(values: number[], fmt: Formatter): string[] {\n  return values.map(fmt);\n}\n\nconsole.log(apply([10, 25], toSAR));\nconsole.log(apply([0.15, 0.5], toPercent));</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>[&quot;10 ر.س&quot;,&quot;25 ر.س&quot;]\n[&quot;15%&quot;,&quot;50%&quot;]</code></pre></div>\n<h2>دمج الأنواع: &amp;</h2>\n<div class=\"code-block src\"><span class=\"code-label\">TypeScript</span><pre dir=\"ltr\"><code>type HasId = { id: number };\ntype Timestamps = { createdAt: string; updatedAt: string };\ntype Post = HasId &amp; Timestamps &amp; { title: string };\n\nconst post: Post = {\n  id: 1,\n  title: &quot;مقال جديد&quot;,\n  createdAt: &quot;2025-01-01&quot;,\n  updatedAt: &quot;2025-01-05&quot;\n};\nconsole.log(post.title, post.updatedAt);</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>مقال جديد 2025-01-05</code></pre></div>\n<p><code dir=\"ltr\">&amp;</code> تجمع الأنواع: <code dir=\"ltr\">Post</code> يجب أن يحتوي <strong>كل</strong> خصائص الثلاثة. وهذا يسمى <strong>التقاطع (Intersection)</strong>.</p>\n<h2>ملخص الدرس</h2>\n<ul><li><code dir=\"ltr\">type Name = ...</code> اسم لأي نوع: بدائي، أو Tuple، أو كائن، أو دالة.</li><li><code dir=\"ltr\">A | B</code> اتحاد: القيمة من أحد الأنواع.</li><li><code dir=\"ltr\">A &amp; B</code> تقاطع: القيمة تحتوي خصائص النوعين معاً.</li><li><code dir=\"ltr\">type Fn = (x: number) =&gt; string</code> لأنواع الدوال.</li></ul>",
   "exercise": {
    "prompt": "<ol><li>عرّف <code dir=\"ltr\">type Currency</code> يقبل فقط <code dir=\"ltr\">&quot;SAR&quot;</code> أو <code dir=\"ltr\">&quot;USD&quot;</code> أو <code dir=\"ltr\">&quot;EUR&quot;</code>.</li><li>عرّف <code dir=\"ltr\">type Money</code> ككائن فيه <code dir=\"ltr\">amount</code> رقم و <code dir=\"ltr\">currency</code> من نوع <code dir=\"ltr\">Currency</code>.</li><li>عرّف <code dir=\"ltr\">type Converter</code> كنوع دالة تستقبل <code dir=\"ltr\">Money</code> وتُرجع <code dir=\"ltr\">Money</code>.</li><li>اكتب <code dir=\"ltr\">toUSD: Converter</code> تحوّل الريال إلى دولار بقسمته على <code dir=\"ltr\">3.75</code>، وتُرجع الدولار كما هو، وأي عملة أخرى ترجعها كما هي.</li></ol>",
    "starter": "// الأنواع والدالة هنا\n\nconst prices: Money[] = [\n  { amount: 375, currency: \"SAR\" },\n  { amount: 20, currency: \"USD\" }\n];\n\nfor (const p of prices) {\n  const r = toUSD(p);\n  console.log(`${r.amount} ${r.currency}`);\n}",
    "expected": "100 USD\n20 USD",
    "solution": "type Currency = \"SAR\" | \"USD\" | \"EUR\";\n\ntype Money = {\n  amount: number;\n  currency: Currency;\n};\n\ntype Converter = (m: Money) => Money;\n\nconst toUSD: Converter = m =>\n  m.currency === \"SAR\" ? { amount: m.amount / 3.75, currency: \"USD\" } : m;\n\nconst prices: Money[] = [\n  { amount: 375, currency: \"SAR\" },\n  { amount: 20, currency: \"USD\" }\n];\n\nfor (const p of prices) {\n  const r = toUSD(p);\n  console.log(`${r.amount} ${r.currency}`);\n}"
   },
   "quiz": [
    {
     "q": "ماذا يعني <code dir=\"ltr\">type Size = &quot;S&quot; | &quot;M&quot; | &quot;L&quot;</code>؟",
     "o": [
      "قيمة Size يجب أن تكون أحد هذه النصوص الثلاثة فقط",
      "أي نص",
      "مصفوفة من ثلاثة عناصر"
     ],
     "a": 0,
     "why": "هذا اتحاد أنواع حرفية."
    },
    {
     "q": "ما معنى <code dir=\"ltr\">A &amp; B</code>؟",
     "o": [
      "نوع يحتوي كل خصائص A وكل خصائص B",
      "نوع يحتوي خصائص A أو B",
      "مقارنة بين نوعين"
     ],
     "a": 0,
     "why": "التقاطع يجمع الأنواع."
    },
    {
     "q": "أي من هذه يمكن تعريفه بـ type ولا يمكن بـ interface؟",
     "o": [
      "<code dir=\"ltr\">type Id = number | string</code>",
      "كائن له خصائص",
      "كائن فيه طرق"
     ],
     "a": 0,
     "why": "interface للكائنات فقط، أما type فلأي نوع."
    }
   ]
  },
  {
   "body": "<h2>خصائص ليست دائماً موجودة</h2>\n<p>بعض الخصائص اختيارية بطبيعتها: رقم الهاتف، والصورة الشخصية، والملاحظات. نضيف <code dir=\"ltr\">?</code> بعد اسم الخاصية:</p>\n<div class=\"code-block src\"><span class=\"code-label\">TypeScript</span><pre dir=\"ltr\"><code>interface Profile {\n  name: string;\n  bio?: string;\n  website?: string;\n}\n\nconst a: Profile = { name: &quot;حمد&quot; };\nconst b: Profile = { name: &quot;شوق&quot;, bio: &quot;مطورة واجهات&quot; };\n\nfunction card(p: Profile): string {\n  return `${p.name} - ${p.bio ?? &quot;بدون نبذة&quot;}`;\n}\n\nconsole.log(card(a));\nconsole.log(card(b));</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>حمد - بدون نبذة\nشوق - مطورة واجهات</code></pre></div>\n<p>الخاصية الاختيارية نوعها الفعلي <code dir=\"ltr\">string | undefined</code>، لذلك يجب التعامل مع احتمال غيابها:</p>\n<div class=\"code-block src\"><span class=\"code-label\">TypeScript</span><pre dir=\"ltr\"><code>interface Profile {\n  name: string;\n  website?: string;\n}\n\nfunction domain(p: Profile): string {\n  return p.website.replace(&quot;https://&quot;, &quot;&quot;);\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><div class=\"out-errs\"><div class=\"sql-err\" dir=\"ltr\">⚠️ سطر 7: &#x27;p.website&#x27; is possibly &#x27;undefined&#x27;.</div></div></div>\n<h2>أدوات التعامل مع الاختياري</h2>\n<div class=\"code-block src\"><span class=\"code-label\">TypeScript</span><pre dir=\"ltr\"><code>interface Settings {\n  theme?: { color?: string };\n}\n\nconst s1: Settings = {};\nconst s2: Settings = { theme: { color: &quot;أزرق&quot; } };\n\nconsole.log(s1.theme?.color ?? &quot;افتراضي&quot;);\nconsole.log(s2.theme?.color ?? &quot;افتراضي&quot;);</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>افتراضي\nأزرق</code></pre></div>\n<ul><li><code dir=\"ltr\">?.</code> (Optional Chaining): إذا كان ما قبلها <code dir=\"ltr\">undefined</code> تتوقف وتُرجع <code dir=\"ltr\">undefined</code> بدل الانهيار.</li><li><code dir=\"ltr\">??</code> (Nullish Coalescing): قيمة بديلة إذا كان الطرف الأيسر <code dir=\"ltr\">null</code> أو <code dir=\"ltr\">undefined</code>.</li></ul>\n<h2>الخصائص للقراءة فقط: readonly</h2>\n<div class=\"code-block src\"><span class=\"code-label\">TypeScript</span><pre dir=\"ltr\"><code>interface Order {\n  readonly id: number;\n  status: string;\n}\n\nconst order: Order = { id: 501, status: &quot;جديد&quot; };\norder.status = &quot;مشحون&quot;;\nconsole.log(order.status);\norder.id = 999;</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><div class=\"out-errs\"><div class=\"sql-err\" dir=\"ltr\">⚠️ سطر 9: Cannot assign to &#x27;id&#x27; because it is a read-only property.</div></div></div>\n<p><code dir=\"ltr\">readonly</code> تمنع تعديل الخاصية بعد إنشاء الكائن. مناسبة للمعرّفات والقيم التي يجب ألا تتغير.</p>\n<div class=\"callout tip\">💡 <code dir=\"ltr\">readonly</code> فحص وقت الترجمة فقط، ولا يمنع التعديل وقت التشغيل. للمنع الكامل استخدم <code dir=\"ltr\">Object.freeze()</code>.</div>\n<h2>as const: كل شيء ثابت</h2>\n<div class=\"code-block src\"><span class=\"code-label\">TypeScript</span><pre dir=\"ltr\"><code>const config = {\n  apiUrl: &quot;https://api.example.com&quot;,\n  retries: 3\n} as const;\n\nconfig.retries = 5;</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><div class=\"out-errs\"><div class=\"sql-err\" dir=\"ltr\">⚠️ سطر 6: Cannot assign to &#x27;retries&#x27; because it is a read-only property.</div></div></div>\n<p><code dir=\"ltr\">as const</code> تجعل كل الخصائص <code dir=\"ltr\">readonly</code>، وتجعل كل قيمة نوعاً حرفياً.</p>\n<h2>ملخص الدرس</h2>\n<ul><li><code dir=\"ltr\">prop?: type</code> خاصية اختيارية، ونوعها يشمل <code dir=\"ltr\">undefined</code>.</li><li><code dir=\"ltr\">?.</code> للوصول الآمن، و <code dir=\"ltr\">??</code> للقيمة البديلة.</li><li><code dir=\"ltr\">readonly prop</code> تمنع التعديل بعد الإنشاء.</li><li><code dir=\"ltr\">as const</code> تجعل الكائن كله ثابتاً.</li></ul>",
   "exercise": {
    "prompt": "<ol><li>عرّف واجهة <code dir=\"ltr\">Product</code> فيها: <code dir=\"ltr\">readonly sku</code> نص، و <code dir=\"ltr\">name</code> نص، و <code dir=\"ltr\">discount</code> اختياري رقمي (نسبة مئوية)، و <code dir=\"ltr\">price</code> رقم.</li><li>اكتب دالة <code dir=\"ltr\">finalPrice(p: Product): number</code> تُرجع السعر بعد الخصم، وإذا لم يوجد خصم تعتبره <code dir=\"ltr\">0</code> (استخدم <code dir=\"ltr\">??</code>).</li></ol>",
    "starter": "// الواجهة والدالة هنا\n\nconst items: Product[] = [\n  { sku: \"A1\", name: \"مصباح\", price: 200, discount: 25 },\n  { sku: \"B2\", name: \"مروحة\", price: 150 }\n];\n\nfor (const p of items) {\n  console.log(`${p.sku} ${p.name}: ${finalPrice(p)}`);\n}",
    "expected": "A1 مصباح: 150\nB2 مروحة: 150",
    "solution": "interface Product {\n  readonly sku: string;\n  name: string;\n  price: number;\n  discount?: number;\n}\n\nfunction finalPrice(p: Product): number {\n  return p.price * (1 - (p.discount ?? 0) / 100);\n}\n\nconst items: Product[] = [\n  { sku: \"A1\", name: \"مصباح\", price: 200, discount: 25 },\n  { sku: \"B2\", name: \"مروحة\", price: 150 }\n];\n\nfor (const p of items) {\n  console.log(`${p.sku} ${p.name}: ${finalPrice(p)}`);\n}"
   },
   "quiz": [
    {
     "q": "ما النوع الفعلي للخاصية <code dir=\"ltr\">phone?: string</code>؟",
     "o": [
      "<code dir=\"ltr\">string | undefined</code>",
      "<code dir=\"ltr\">string</code>",
      "<code dir=\"ltr\">any</code>"
     ],
     "a": 0,
     "why": "الخاصية الاختيارية قد تكون غائبة."
    },
    {
     "q": "ماذا يُرجع <code dir=\"ltr\">user.address?.city</code> إذا كان address غير موجود؟",
     "o": [
      "<code dir=\"ltr\">undefined</code> دون خطأ",
      "خطأ وقت التشغيل",
      "نصاً فارغاً"
     ],
     "a": 0,
     "why": "?. توقف السلسلة بأمان."
    },
    {
     "q": "ماذا تمنع <code dir=\"ltr\">readonly</code>؟",
     "o": [
      "تعديل الخاصية بعد إنشاء الكائن، وقت الترجمة",
      "قراءة الخاصية",
      "حذف الكائن"
     ],
     "a": 0,
     "why": "وتبقى القراءة متاحة طبعاً."
    }
   ]
  },
  {
   "body": "<h2>سؤال يتكرر كثيراً</h2>\n<p><code dir=\"ltr\">interface</code> و <code dir=\"ltr\">type</code> يستطيعان وصف شكل كائن. فأيهما تستخدم؟ الجواب المختصر: <strong>كلاهما جيد للكائنات، والفروق قليلة</strong>. لكن لنعرف الفروق بدقة.</p>\n<h2>ما يستطيعه type فقط</h2>\n<div class=\"code-block src\"><span class=\"code-label\">TypeScript</span><pre dir=\"ltr\"><code>type Id = number | string;\ntype Pair = [string, number];\ntype Handler = (e: string) =&gt; void;\ntype Status = &quot;on&quot; | &quot;off&quot;;\n\nconst id: Id = &quot;u-1&quot;;\nconst pair: Pair = [&quot;عمر&quot;, 30];\nconst s: Status = &quot;on&quot;;\nconsole.log(id, pair, s);</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>u-1 [&quot;عمر&quot;,30] on</code></pre></div>\n<p>الاتحادات، والأنواع البدائية، والـ Tuples، والأنواع الحرفية: كلها لـ <code dir=\"ltr\">type</code> فقط. <code dir=\"ltr\">interface</code> تصف كائنات فقط.</p>\n<h2>ما تستطيعه interface فقط: الدمج</h2>\n<p>إذا عرّفت <code dir=\"ltr\">interface</code> بنفس الاسم مرتين، <strong>تندمج</strong> تلقائياً:</p>\n<div class=\"code-block src\"><span class=\"code-label\">TypeScript</span><pre dir=\"ltr\"><code>interface Window2 {\n  title: string;\n}\ninterface Window2 {\n  width: number;\n}\n\nconst w: Window2 = { title: &quot;الرئيسية&quot;, width: 800 };\nconsole.log(w.title, w.width);</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>الرئيسية 800</code></pre></div>\n<p>هذا مفيد لتوسيع أنواع مكتبات خارجية (مثل إضافة خاصية لكائن <code dir=\"ltr\">Window</code> في المتصفح). أما <code dir=\"ltr\">type</code> فلا تسمح بالتكرار:</p>\n<div class=\"code-block src\"><span class=\"code-label\">TypeScript</span><pre dir=\"ltr\"><code>type Car = { brand: string };\ntype Car = { year: number };</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><div class=\"out-errs\"><div class=\"sql-err\" dir=\"ltr\">⚠️ سطر 1: Duplicate identifier &#x27;Car&#x27;.</div><div class=\"sql-err\" dir=\"ltr\">⚠️ سطر 2: Duplicate identifier &#x27;Car&#x27;.</div></div></div>\n<h2>التوسيع: extends مقابل &amp;</h2>\n<p>النتيجة متشابهة جداً:</p>\n<div class=\"code-block src\"><span class=\"code-label\">TypeScript</span><pre dir=\"ltr\"><code>interface A1 { x: number }\ninterface B1 extends A1 { y: number }\n\ntype A2 = { x: number };\ntype B2 = A2 &amp; { y: number };\n\nconst one: B1 = { x: 1, y: 2 };\nconst two: B2 = { x: 3, y: 4 };\nconsole.log(one.x + one.y, two.x + two.y);</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>3 7</code></pre></div>\n<p>الفرق الدقيق: <code dir=\"ltr\">extends</code> تكشف التعارض فوراً برسالة خطأ واضحة، أما <code dir=\"ltr\">&amp;</code> فقد تنتج نوعاً مستحيلاً (<code dir=\"ltr\">never</code>) بصمت عند التعارض.</p>\n<h2>الملخص بالجدول</h2>\n<div class=\"table-wrap\"><table><thead><tr><th></th><th><code dir=\"ltr\">interface</code></th><th><code dir=\"ltr\">type</code></th></tr></thead><tbody><tr><td>وصف الكائنات</td><td>✅</td><td>✅</td></tr><tr><td>اتحادات وأنواع بدائية و Tuples</td><td>❌</td><td>✅</td></tr><tr><td>الدمج بتكرار الاسم</td><td>✅</td><td>❌</td></tr><tr><td>التوسيع</td><td><code dir=\"ltr\">extends</code></td><td><code dir=\"ltr\">&amp;</code></td></tr><tr><td>رسائل الخطأ</td><td>أوضح غالباً</td><td>قد تكون أطول</td></tr></tbody></table></div>\n<h2>القاعدة العملية</h2>\n<div class=\"callout tip\">💡 اختر أسلوباً واحداً والتزم به في المشروع. شائع جداً: **<code dir=\"ltr\">interface</code> لأشكال الكائنات<strong> (المستخدم، والمنتج، وخصائص المكونات)، و </strong><code dir=\"ltr\">type</code> لكل ما عداها** (الاتحادات، وأنواع الدوال، والأنواع المركبة). ووثائق TypeScript الرسمية تميل إلى <code dir=\"ltr\">interface</code> للكائنات.</div>\n<h2>ملخص الدرس</h2>\n<ul><li>كلاهما يصف الكائنات، والفرق في الحالات الخاصة.</li><li><code dir=\"ltr\">type</code> وحده للاتحادات والبدائيات والـ Tuples.</li><li><code dir=\"ltr\">interface</code> وحدها تندمج عند تكرار الاسم.</li><li>المهم الاتساق داخل المشروع.</li></ul>",
   "exercise": {
    "prompt": "<p>حوّل التعريفات بحيث يستخدم كل منها الأداة المناسبة:</p>\n<ol><li><code dir=\"ltr\">Role</code> اتحاد من <code dir=\"ltr\">&quot;admin&quot;</code> و <code dir=\"ltr\">&quot;editor&quot;</code> و <code dir=\"ltr\">&quot;viewer&quot;</code>، لذلك يجب أن يكون <code dir=\"ltr\">type</code>.</li><li><code dir=\"ltr\">Member</code> شكل كائن فيه <code dir=\"ltr\">name</code> نص و <code dir=\"ltr\">role</code> من نوع <code dir=\"ltr\">Role</code>، اجعله <code dir=\"ltr\">interface</code>.</li><li><code dir=\"ltr\">Admin</code> توسّع <code dir=\"ltr\">Member</code> بخاصية <code dir=\"ltr\">permissions</code> (مصفوفة نصوص)، استخدم <code dir=\"ltr\">interface ... extends</code>.</li></ol>\n<p>حالياً الكود معطوب لأن <code dir=\"ltr\">Role</code> معرّف كـ <code dir=\"ltr\">interface</code>.</p>",
    "starter": "interface Role = \"admin\" | \"editor\" | \"viewer\";\n\ntype Member = {\n  name: string;\n  role: Role;\n};\n\nconst admin: Admin = { name: \"لانا\", role: \"admin\", permissions: [\"حذف\", \"نشر\"] };\nconst editor: Member = { name: \"سيف\", role: \"editor\" };\nconsole.log(`${admin.name}: ${admin.permissions.join(\"، \")}`);\nconsole.log(`${editor.name}: ${editor.role}`);",
    "expected": "لانا: حذف، نشر\nسيف: editor",
    "solution": "type Role = \"admin\" | \"editor\" | \"viewer\";\n\ninterface Member {\n  name: string;\n  role: Role;\n}\n\ninterface Admin extends Member {\n  permissions: string[];\n}\n\nconst admin: Admin = { name: \"لانا\", role: \"admin\", permissions: [\"حذف\", \"نشر\"] };\nconst editor: Member = { name: \"سيف\", role: \"editor\" };\nconsole.log(`${admin.name}: ${admin.permissions.join(\"، \")}`);\nconsole.log(`${editor.name}: ${editor.role}`);"
   },
   "quiz": [
    {
     "q": "أي تعريف لا يمكن كتابته بـ interface؟",
     "o": [
      "<code dir=\"ltr\">&quot;small&quot; | &quot;large&quot;</code>",
      "كائن فيه خاصيتان",
      "كائن فيه طريقة"
     ],
     "a": 0,
     "why": "الاتحادات لـ type فقط."
    },
    {
     "q": "ماذا يحدث عند تعريف interface بنفس الاسم مرتين؟",
     "o": [
      "تندمج الخصائص في واجهة واحدة",
      "خطأ ترجمة",
      "الثانية تلغي الأولى"
     ],
     "a": 0,
     "why": "هذا يسمى Declaration Merging."
    },
    {
     "q": "ما القاعدة العملية الأهم عند الاختيار بينهما؟",
     "o": [
      "الاتساق داخل المشروع، مع interface للكائنات و type لما عداها",
      "استخدام type دائماً",
      "استخدام interface دائماً"
     ],
     "a": 0,
     "why": "الفروق قليلة، والأسلوب الموحد أهم."
    }
   ]
  }
 ],
 [
  {
   "body": "<h2>قيمة من عدة أنواع ممكنة</h2>\n<p><strong>نوع الاتحاد (Union)</strong> يعني أن القيمة واحدة من عدة أنواع. يُكتب بالعلامة <code dir=\"ltr\">|</code>:</p>\n<div class=\"code-block src\"><span class=\"code-label\">TypeScript</span><pre dir=\"ltr\"><code>function printId(id: number | string) {\n  console.log(`المعرّف: ${id}`);\n}\n\nprintId(101);\nprintId(&quot;USR-7&quot;);\nprintId(true);</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><div class=\"out-errs\"><div class=\"sql-err\" dir=\"ltr\">⚠️ سطر 7: Argument of type &#x27;boolean&#x27; is not assignable to parameter of type &#x27;string</div><div class=\"sql-err\" dir=\"ltr\">⚠️ number&#x27;.</div></div></div>\n<h2>لا يمكن استخدام ما لا يشترك فيه الجميع</h2>\n<div class=\"code-block src\"><span class=\"code-label\">TypeScript</span><pre dir=\"ltr\"><code>function format(value: number | string) {\n  return value.toUpperCase();\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><div class=\"out-errs\"><div class=\"sql-err\" dir=\"ltr\">⚠️ سطر 2: Property &#x27;toUpperCase&#x27; does not exist on type &#x27;string</div><div class=\"sql-err\" dir=\"ltr\">⚠️ number&#x27;.   Property &#x27;toUpperCase&#x27; does not exist on type &#x27;number&#x27;.</div></div></div>\n<p><code dir=\"ltr\">toUpperCase</code> موجودة في <code dir=\"ltr\">string</code> فقط، والقيمة قد تكون رقماً. لاستخدامها يجب أن <strong>نضيّق</strong> النوع أولاً، وهو موضوع الدرس الثالث. أما الخصائص المشتركة فمسموحة مباشرة:</p>\n<div class=\"code-block src\"><span class=\"code-label\">TypeScript</span><pre dir=\"ltr\"><code>function size(value: string | string[]) {\n  return value.length;\n}\n\nconsole.log(size(&quot;مرحبا&quot;));\nconsole.log(size([&quot;أ&quot;, &quot;ب&quot;, &quot;ج&quot;]));</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>5\n3</code></pre></div>\n<h2>الاتحاد مع null: البيانات التي قد تغيب</h2>\n<div class=\"code-block src\"><span class=\"code-label\">TypeScript</span><pre dir=\"ltr\"><code>interface User { name: string }\n\nfunction findUser(id: number): User | null {\n  return id === 1 ? { name: &quot;عزيز&quot; } : null;\n}\n\nconst u1 = findUser(1);\nconst u2 = findUser(9);\nconsole.log(u1?.name ?? &quot;غير موجود&quot;);\nconsole.log(u2?.name ?? &quot;غير موجود&quot;);</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>عزيز\nغير موجود</code></pre></div>\n<p>النوع <code dir=\"ltr\">User | null</code> يجبر من يستدعي الدالة على التعامل مع احتمال عدم الوجود. هذا من أهم ما يمنع انهيار التطبيقات.</p>\n<h2>مصفوفات الاتحاد</h2>\n<p>انتبه للفرق في مكان الأقواس:</p>\n<div class=\"code-block src\"><span class=\"code-label\">TypeScript</span><pre dir=\"ltr\"><code>const mixed: (number | string)[] = [1, &quot;اثنان&quot;, 3];\nconst onlyOne: number[] | string[] = [&quot;أ&quot;, &quot;ب&quot;];\n\nconsole.log(mixed.length, onlyOne.length);</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>3 2</code></pre></div>\n<ul><li><code dir=\"ltr\">(number | string)[]</code>: مصفوفة واحدة فيها أرقام ونصوص مختلطة.</li><li><code dir=\"ltr\">number[] | string[]</code>: إما مصفوفة أرقام كلها، أو مصفوفة نصوص كلها.</li></ul>\n<h2>ملخص الدرس</h2>\n<ul><li><code dir=\"ltr\">A | B</code> القيمة من النوع A أو B.</li><li>يمكن استخدام ما هو مشترك بين كل الأنواع فقط، حتى نضيّق النوع.</li><li><code dir=\"ltr\">Type | null</code> لقيم قد تغيب، ويجبر المستدعي على التحقق.</li><li><code dir=\"ltr\">(A | B)[]</code> يختلف عن <code dir=\"ltr\">A[] | B[]</code>.</li></ul>",
   "exercise": {
    "prompt": "<p>اكتب دالة <code dir=\"ltr\">toArray</code> تستقبل قيمة من نوع <code dir=\"ltr\">string | string[]</code>، وتُرجع دائماً <code dir=\"ltr\">string[]</code>:</p>\n<ul><li>إذا كانت نصاً، تُرجع مصفوفة فيها هذا النص.</li><li>إذا كانت مصفوفة، تُرجعها كما هي.</li></ul>\n<p>استخدم <code dir=\"ltr\">Array.isArray(value)</code> للتمييز.</p>",
    "starter": "function toArray(value) {\n  // أكمل هنا\n}\n\nconsole.log(toArray(\"قلم\"));\nconsole.log(toArray([\"دفتر\", \"ممحاة\"]));\nconsole.log(toArray(\"كتاب\").length + toArray([\"أ\", \"ب\"]).length);",
    "expected": "[\"قلم\"]\n[\"دفتر\",\"ممحاة\"]\n3",
    "solution": "function toArray(value: string | string[]): string[] {\n  return Array.isArray(value) ? value : [value];\n}\n\nconsole.log(toArray(\"قلم\"));\nconsole.log(toArray([\"دفتر\", \"ممحاة\"]));\nconsole.log(toArray(\"كتاب\").length + toArray([\"أ\", \"ب\"]).length);"
   },
   "quiz": [
    {
     "q": "في <code dir=\"ltr\">function f(x: number | string)</code>، هل يمكن استدعاء <code dir=\"ltr\">x.toFixed()</code> مباشرة؟",
     "o": [
      "نعم",
      "لا، لأن toFixed خاصة بالأرقام وقد يكون x نصاً",
      "فقط إذا كان x رقماً موجباً"
     ],
     "a": 1,
     "why": "يجب تضييق النوع أولاً."
    },
    {
     "q": "ما الفرق بين <code dir=\"ltr\">(A | B)[]</code> و <code dir=\"ltr\">A[] | B[]</code>؟",
     "o": [
      "الأول مصفوفة مختلطة، والثاني مصفوفة كلها من A أو كلها من B",
      "لا فرق",
      "الثاني خطأ في الصيغة"
     ],
     "a": 0,
     "why": "مكان الأقواس يغيّر المعنى."
    },
    {
     "q": "لماذا نستخدم <code dir=\"ltr\">User | null</code> كنوع إرجاع لدالة بحث؟",
     "o": [
      "لنجبر المستدعي على التعامل مع احتمال عدم وجود المستخدم",
      "لتسريع البحث",
      "لأن null أسرع من undefined"
     ],
     "a": 0,
     "why": "الأنواع توثّق الحالات الممكنة وتفرض معالجتها."
    }
   ]
  },
  {
   "body": "<h2>الجمع بدل الاختيار</h2>\n<p>الاتحاد <code dir=\"ltr\">|</code> يعني &quot;هذا <strong>أو</strong> ذاك&quot;. أما <strong>التقاطع (Intersection)</strong> بالعلامة <code dir=\"ltr\">&amp;</code> فيعني &quot;هذا <strong>و</strong> ذاك معاً&quot;: القيمة يجب أن تحقق كل الأنواع.</p>\n<div class=\"code-block src\"><span class=\"code-label\">TypeScript</span><pre dir=\"ltr\"><code>type Named = { name: string };\ntype Aged = { age: number };\ntype Person = Named &amp; Aged;\n\nconst p: Person = { name: &quot;بشاير&quot;, age: 26 };\nconsole.log(`${p.name} - ${p.age}`);\n\nconst incomplete: Person = { name: &quot;بلا عمر&quot; };</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><div class=\"out-errs\"><div class=\"sql-err\" dir=\"ltr\">⚠️ سطر 8: Type &#x27;{ name: string; }&#x27; is not assignable to type &#x27;Person&#x27;.   Property &#x27;age&#x27; is missing in type &#x27;{ name: string; }&#x27; but required in type &#x27;Aged&#x27;.</div></div></div>\n<h2>بناء الأنواع من قطع صغيرة</h2>\n<p>النمط الأشهر: أنواع صغيرة قابلة لإعادة الاستخدام، ثم تجميعها:</p>\n<div class=\"code-block src\"><span class=\"code-label\">TypeScript</span><pre dir=\"ltr\"><code>type WithId = { id: number };\ntype WithTimestamps = { createdAt: string };\ntype WithAuthor = { author: string };\n\ntype Comment = WithId &amp; WithTimestamps &amp; WithAuthor &amp; { text: string };\ntype Article = WithId &amp; WithTimestamps &amp; WithAuthor &amp; { title: string; tags: string[] };\n\nconst comment: Comment = { id: 1, createdAt: &quot;2025-05-01&quot;, author: &quot;ريان&quot;, text: &quot;مقال مفيد&quot; };\nconst article: Article = { id: 9, createdAt: &quot;2025-04-28&quot;, author: &quot;منى&quot;, title: &quot;تعلم TS&quot;, tags: [&quot;ts&quot;] };\n\nfunction byline(item: WithAuthor &amp; WithTimestamps): string {\n  return `${item.author} في ${item.createdAt}`;\n}\n\nconsole.log(byline(comment));\nconsole.log(byline(article));</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>ريان في 2025-05-01\nمنى في 2025-04-28</code></pre></div>\n<p>الدالة <code dir=\"ltr\">byline</code> تقبل أي شيء له مؤلف وتاريخ: تعليقاً أو مقالاً أو أي نوع مستقبلي.</p>\n<h2>دمج كائنات وقت التشغيل</h2>\n<p>التقاطع يصف بدقة ناتج دمج كائنين:</p>\n<div class=\"code-block src\"><span class=\"code-label\">TypeScript</span><pre dir=\"ltr\"><code>function merge&lt;A extends object, B extends object&gt;(a: A, b: B): A &amp; B {\n  return { ...a, ...b };\n}\n\nconst result = merge({ name: &quot;منتج&quot; }, { price: 99 });\nconsole.log(result.name, result.price);</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>منتج 99</code></pre></div>\n<p>(استخدمنا هنا Generics، وسنشرحها في الوحدة القادمة.)</p>\n<h2>التعارض ينتج never</h2>\n<p>إذا تعارضت الأنواع في التقاطع، يصبح النوع مستحيلاً:</p>\n<div class=\"code-block src\"><span class=\"code-label\">TypeScript</span><pre dir=\"ltr\"><code>type A = { value: string };\ntype B = { value: number };\ntype C = A &amp; B;\n\nconst c: C = { value: &quot;نص&quot; };</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><div class=\"out-errs\"><div class=\"sql-err\" dir=\"ltr\">⚠️ سطر 5: Type &#x27;string&#x27; is not assignable to type &#x27;never&#x27;.</div></div></div>\n<p>لا توجد قيمة هي نص ورقم في نفس الوقت، فنوع <code dir=\"ltr\">value</code> أصبح <code dir=\"ltr\">never</code>.</p>\n<h2>ملخص الدرس</h2>\n<ul><li><code dir=\"ltr\">A &amp; B</code> تقاطع: القيمة تحتوي كل خصائص A وكل خصائص B.</li><li>مفيد لبناء أنواع كبيرة من قطع صغيرة قابلة لإعادة الاستخدام.</li><li>يصف بدقة ناتج دمج الكائنات.</li><li>تعارض الخصائص ينتج <code dir=\"ltr\">never</code>.</li></ul>",
   "exercise": {
    "prompt": "<ol><li>عرّف <code dir=\"ltr\">type Priced = { price: number }</code> و <code dir=\"ltr\">type Rated = { rating: number }</code>.</li><li>عرّف <code dir=\"ltr\">type Listing</code> كتقاطع لهما مع <code dir=\"ltr\">{ title: string }</code>.</li><li>اكتب دالة <code dir=\"ltr\">score(item: Priced &amp; Rated): number</code> تُرجع <code dir=\"ltr\">rating * 100 / price</code>، مقرباً لعدد صحيح بـ <code dir=\"ltr\">Math.round</code>.</li><li>اطبع لكل عنصر: <code dir=\"ltr\">X: N</code>.</li></ol>",
    "starter": "// الأنواع والدالة هنا\n\nconst listings: Listing[] = [\n  { title: \"فندق الشاطئ\", price: 400, rating: 4.6 },\n  { title: \"نُزل المدينة\", price: 150, rating: 3.9 }\n];\n\nfor (const l of listings) {\n  console.log(`${l.title}: ${score(l)}`);\n}",
    "expected": "فندق الشاطئ: 1\nنُزل المدينة: 3",
    "solution": "type Priced = { price: number };\ntype Rated = { rating: number };\ntype Listing = Priced & Rated & { title: string };\n\nfunction score(item: Priced & Rated): number {\n  return Math.round((item.rating * 100) / item.price);\n}\n\nconst listings: Listing[] = [\n  { title: \"فندق الشاطئ\", price: 400, rating: 4.6 },\n  { title: \"نُزل المدينة\", price: 150, rating: 3.9 }\n];\n\nfor (const l of listings) {\n  console.log(`${l.title}: ${score(l)}`);\n}"
   },
   "quiz": [
    {
     "q": "ما معنى <code dir=\"ltr\">A &amp; B</code>؟",
     "o": [
      "القيمة يجب أن تحتوي كل خصائص A وكل خصائص B",
      "القيمة من A أو من B",
      "مقارنة منطقية"
     ],
     "a": 0,
     "why": "التقاطع يجمع المتطلبات."
    },
    {
     "q": "ما نوع الخاصية في <code dir=\"ltr\">{ x: string } &amp; { x: number }</code>؟",
     "o": [
      "string | number",
      "never",
      "any"
     ],
     "a": 1,
     "why": "لا قيمة يمكن أن تكون نصاً ورقماً معاً."
    },
    {
     "q": "ما فائدة الأنواع الصغيرة مثل <code dir=\"ltr\">WithId</code> و <code dir=\"ltr\">WithTimestamps</code>؟",
     "o": [
      "إعادة استخدامها لبناء أنواع كثيرة وكتابة دوال عامة تقبل أي نوع يحتويها",
      "تسريع البرنامج",
      "لا فائدة منها"
     ],
     "a": 0,
     "why": "هذا أسلوب تركيب الأنواع."
    }
   ]
  },
  {
   "body": "<h2>من الواسع إلى الدقيق</h2>\n<p><strong>التضييق (Narrowing)</strong> هو أن تفحص قيمة نوعها واسع (مثل <code dir=\"ltr\">string | number</code>)، فتعرف TypeScript نوعها الدقيق داخل الكتلة التي بعد الفحص. هذه أهم مهارة عملية في TypeScript.</p>\n<h2>typeof</h2>\n<div class=\"code-block src\"><span class=\"code-label\">TypeScript</span><pre dir=\"ltr\"><code>function double(value: string | number) {\n  if (typeof value === &quot;string&quot;) {\n    return value.repeat(2);\n  }\n  return value * 2;\n}\n\nconsole.log(double(&quot;ها&quot;));\nconsole.log(double(21));</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>هاها\n42</code></pre></div>\n<p>داخل الـ if تعرف TypeScript أن <code dir=\"ltr\">value</code> نص. وبعدها، لأن الـ if أرجعت، تعرف أنه لم يتبقَّ إلا <code dir=\"ltr\">number</code>.</p>\n<h2>الصدق و null</h2>\n<div class=\"code-block src\"><span class=\"code-label\">TypeScript</span><pre dir=\"ltr\"><code>function greet(name: string | null | undefined) {\n  if (!name) {\n    return &quot;مرحباً يا ضيف&quot;;\n  }\n  return `مرحباً يا ${name.trim()}`;\n}\n\nconsole.log(greet(null));\nconsole.log(greet(&quot;  دانة  &quot;));</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>مرحباً يا ضيف\nمرحباً يا دانة</code></pre></div>\n<h2>in: هل الخاصية موجودة؟</h2>\n<div class=\"code-block src\"><span class=\"code-label\">TypeScript</span><pre dir=\"ltr\"><code>type Cat = { meow: () =&gt; string };\ntype Dog = { bark: () =&gt; string };\n\nfunction speak(pet: Cat | Dog): string {\n  if (&quot;meow&quot; in pet) {\n    return pet.meow();\n  }\n  return pet.bark();\n}\n\nconsole.log(speak({ meow: () =&gt; &quot;مياو&quot; }));\nconsole.log(speak({ bark: () =&gt; &quot;هاو&quot; }));</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>مياو\nهاو</code></pre></div>\n<h2>instanceof: للأصناف</h2>\n<div class=\"code-block src\"><span class=\"code-label\">TypeScript</span><pre dir=\"ltr\"><code>function describeDate(input: Date | string): string {\n  if (input instanceof Date) {\n    return `سنة ${input.getFullYear()}`;\n  }\n  return `نص: ${input}`;\n}\n\nconsole.log(describeDate(new Date(2030, 0, 1)));\nconsole.log(describeDate(&quot;غداً&quot;));</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>سنة 2030\nنص: غداً</code></pre></div>\n<h2>الاتحاد المميَّز: النمط الأقوى</h2>\n<p>أضف لكل نوع في الاتحاد خاصية مشتركة بقيمة حرفية مختلفة (غالباً اسمها <code dir=\"ltr\">kind</code> أو <code dir=\"ltr\">type</code>)، ثم ميّز بها:</p>\n<div class=\"code-block src\"><span class=\"code-label\">TypeScript</span><pre dir=\"ltr\"><code>type Circle = { kind: &quot;circle&quot;; radius: number };\ntype Rect = { kind: &quot;rect&quot;; width: number; height: number };\ntype Shape = Circle | Rect;\n\nfunction area(s: Shape): number {\n  switch (s.kind) {\n    case &quot;circle&quot;:\n      return 3 * s.radius ** 2;\n    case &quot;rect&quot;:\n      return s.width * s.height;\n  }\n}\n\nconsole.log(area({ kind: &quot;circle&quot;, radius: 2 }));\nconsole.log(area({ kind: &quot;rect&quot;, width: 3, height: 5 }));</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>12\n15</code></pre></div>\n<p>داخل <code dir=\"ltr\">case &quot;circle&quot;</code> تعرف TypeScript أن <code dir=\"ltr\">s</code> من نوع <code dir=\"ltr\">Circle</code> بالضبط. هذا النمط يُستخدم في كل مكان: حالات الطلبات الشبكية، وأحداث Redux، ورسائل النظام.</p>\n<h2>دوال الفحص المخصصة (Type Guards)</h2>\n<div class=\"code-block src\"><span class=\"code-label\">TypeScript</span><pre dir=\"ltr\"><code>interface Admin { name: string; permissions: string[] }\ninterface Guest { name: string }\n\nfunction isAdmin(u: Admin | Guest): u is Admin {\n  return &quot;permissions&quot; in u;\n}\n\nconst people: (Admin | Guest)[] = [\n  { name: &quot;بندر&quot;, permissions: [&quot;حذف&quot;] },\n  { name: &quot;زائر&quot; }\n];\n\nfor (const p of people) {\n  console.log(isAdmin(p) ? `${p.name}: ${p.permissions.length} صلاحية` : `${p.name}: زائر`);\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>بندر: 1 صلاحية\nزائر: زائر</code></pre></div>\n<p><code dir=\"ltr\">u is Admin</code> في نوع الإرجاع تخبر TypeScript: &quot;إذا أرجعت الدالة true، فـ u من نوع Admin&quot;.</p>\n<h2>ملخص الدرس</h2>\n<ul><li>التضييق: فحص يجعل TypeScript تعرف النوع الدقيق داخل الكتلة.</li><li>الأدوات: <code dir=\"ltr\">typeof</code> و <code dir=\"ltr\">!value</code> و <code dir=\"ltr\">in</code> و <code dir=\"ltr\">instanceof</code>.</li><li>الاتحاد المميَّز بخاصية <code dir=\"ltr\">kind</code> مع <code dir=\"ltr\">switch</code> هو النمط الأقوى.</li><li><code dir=\"ltr\">x is Type</code> لكتابة دوال فحص مخصصة.</li></ul>",
   "exercise": {
    "prompt": "<p>لديك أحداث من نوع اتحاد مميَّز. أكمل الدالة <code dir=\"ltr\">handle</code> باستخدام <code dir=\"ltr\">switch</code> على <code dir=\"ltr\">event.type</code>:</p>\n<ul><li><code dir=\"ltr\">&quot;click&quot;</code>: تُرجع <code dir=\"ltr\">نقر عند (x, y)</code></li><li><code dir=\"ltr\">&quot;key&quot;</code>: تُرجع <code dir=\"ltr\">ضغط المفتاح K</code></li><li><code dir=\"ltr\">&quot;scroll&quot;</code>: تُرجع <code dir=\"ltr\">تمرير بمقدار N</code></li></ul>",
    "starter": "type ClickEvent = { type: \"click\"; x: number; y: number };\ntype KeyEvent = { type: \"key\"; key: string };\ntype ScrollEvent = { type: \"scroll\"; delta: number };\ntype AppEvent = ClickEvent | KeyEvent | ScrollEvent;\n\nfunction handle(event: AppEvent): string {\n  return event.key;\n}\n\nconst events: AppEvent[] = [\n  { type: \"click\", x: 10, y: 20 },\n  { type: \"key\", key: \"Enter\" },\n  { type: \"scroll\", delta: 120 }\n];\nevents.forEach(e => console.log(handle(e)));",
    "expected": "نقر عند (10, 20)\nضغط المفتاح Enter\nتمرير بمقدار 120",
    "solution": "type ClickEvent = { type: \"click\"; x: number; y: number };\ntype KeyEvent = { type: \"key\"; key: string };\ntype ScrollEvent = { type: \"scroll\"; delta: number };\ntype AppEvent = ClickEvent | KeyEvent | ScrollEvent;\n\nfunction handle(event: AppEvent): string {\n  switch (event.type) {\n    case \"click\":\n      return `نقر عند (${event.x}, ${event.y})`;\n    case \"key\":\n      return `ضغط المفتاح ${event.key}`;\n    case \"scroll\":\n      return `تمرير بمقدار ${event.delta}`;\n  }\n}\n\nconst events: AppEvent[] = [\n  { type: \"click\", x: 10, y: 20 },\n  { type: \"key\", key: \"Enter\" },\n  { type: \"scroll\", delta: 120 }\n];\nevents.forEach(e => console.log(handle(e)));"
   },
   "quiz": [
    {
     "q": "ما المقصود بالتضييق (Narrowing)؟",
     "o": [
      "فحص يجعل TypeScript تعرف النوع الدقيق للقيمة داخل كتلة معينة",
      "تقليل حجم الكود",
      "حذف الأنواع"
     ],
     "a": 0,
     "why": "مثل typeof داخل if."
    },
    {
     "q": "في الاتحاد المميَّز، ما وظيفة الخاصية المشتركة مثل <code dir=\"ltr\">kind</code>؟",
     "o": [
      "تمييز أي نوع من الاتحاد هي القيمة، فيضيّق switch النوع تلقائياً",
      "لا وظيفة لها",
      "تحديد ترتيب الأنواع"
     ],
     "a": 0,
     "why": "لكل نوع قيمة حرفية مختلفة فيها."
    },
    {
     "q": "ماذا يعني <code dir=\"ltr\">x is Admin</code> كنوع إرجاع لدالة؟",
     "o": [
      "إذا أرجعت الدالة true فإن x من نوع Admin",
      "الدالة تحوّل x إلى Admin",
      "الدالة تُرجع Admin دائماً"
     ],
     "a": 0,
     "why": "هذه دالة فحص مخصصة (Type Guard)."
    }
   ]
  },
  {
   "body": "<h2>القيمة نفسها نوع</h2>\n<p><strong>النوع الحرفي (Literal Type)</strong> نوع لا يقبل إلا قيمة واحدة بعينها:</p>\n<div class=\"code-block src\"><span class=\"code-label\">TypeScript</span><pre dir=\"ltr\"><code>let direction: &quot;left&quot; = &quot;left&quot;;\ndirection = &quot;right&quot;;</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><div class=\"out-errs\"><div class=\"sql-err\" dir=\"ltr\">⚠️ سطر 2: Type &#x27;&quot;right&quot;&#x27; is not assignable to type &#x27;&quot;left&quot;&#x27;.</div></div></div>\n<p>وحده لا يبدو مفيداً، لكن قوته الحقيقية في <strong>الاتحاد</strong>: مجموعة محددة من القيم المسموحة.</p>\n<h2>اتحاد الحروفيات: البديل الأنظف للنصوص الحرة</h2>\n<div class=\"code-block src\"><span class=\"code-label\">TypeScript</span><pre dir=\"ltr\"><code>type Size = &quot;S&quot; | &quot;M&quot; | &quot;L&quot; | &quot;XL&quot;;\ntype HttpMethod = &quot;GET&quot; | &quot;POST&quot; | &quot;PUT&quot; | &quot;DELETE&quot;;\n\nfunction order(item: string, size: Size) {\n  console.log(`طلب ${item} مقاس ${size}`);\n}\n\norder(&quot;قميص&quot;, &quot;M&quot;);\norder(&quot;قميص&quot;, &quot;XXL&quot;);</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><div class=\"out-errs\"><div class=\"sql-err\" dir=\"ltr\">⚠️ سطر 9: Argument of type &#x27;&quot;XXL&quot;&#x27; is not assignable to parameter of type &#x27;Size&#x27;.</div></div></div>\n<p>مع <code dir=\"ltr\">string</code> عادية كان الخطأ <code dir=\"ltr\">&quot;XXL&quot;</code> سيمر، ويُكتشف لاحقاً في قاعدة البيانات أو عند العميل. والمحرر أيضاً يقترح القيم الأربع المسموحة أثناء الكتابة.</p>\n<h2>الحروفيات الرقمية والمنطقية</h2>\n<div class=\"code-block src\"><span class=\"code-label\">TypeScript</span><pre dir=\"ltr\"><code>type Dice = 1 | 2 | 3 | 4 | 5 | 6;\ntype Answer = true;\n\nfunction roll(): Dice {\n  return 4;\n}\n\nconst r: Dice = roll();\nconsole.log(`النرد: ${r}`);</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>النرد: 4</code></pre></div>\n<h2>Template Literal Types: أنواع من قوالب النصوص</h2>\n<p>ميزة قوية: بناء أنواع حرفية من أنواع أخرى:</p>\n<div class=\"code-block src\"><span class=\"code-label\">TypeScript</span><pre dir=\"ltr\"><code>type Color = &quot;red&quot; | &quot;blue&quot;;\ntype Shade = &quot;light&quot; | &quot;dark&quot;;\ntype Theme = `${Shade}-${Color}`;\n\nconst t1: Theme = &quot;dark-blue&quot;;\nconst t2: Theme = &quot;light-red&quot;;\nconsole.log(t1, t2);\n\ntype EventName = `on${&quot;Click&quot; | &quot;Hover&quot;}`;\nconst e: EventName = &quot;onClick&quot;;\nconsole.log(e);\n\nconst bad: Theme = &quot;dark-green&quot;;</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><div class=\"out-errs\"><div class=\"sql-err\" dir=\"ltr\">⚠️ سطر 13: Type &#x27;&quot;dark-green&quot;&#x27; is not assignable to type &#x27;&quot;light-red&quot;</div><div class=\"sql-err\" dir=\"ltr\">⚠️ &quot;light-blue&quot;</div><div class=\"sql-err\" dir=\"ltr\">⚠️ &quot;dark-red&quot;</div><div class=\"sql-err\" dir=\"ltr\">⚠️ &quot;dark-blue&quot;&#x27;. Did you mean &#x27;&quot;dark-red&quot;&#x27;?</div></div></div>\n<p><code dir=\"ltr\">Theme</code> يقبل بالضبط 4 قيم: كل تركيبة من الظل واللون. هكذا تُبنى أنواع مكتبات CSS وأسماء الأحداث.</p>\n<h2>الحروفيات مع as const</h2>\n<div class=\"code-block src\"><span class=\"code-label\">TypeScript</span><pre dir=\"ltr\"><code>const ROLES = [&quot;admin&quot;, &quot;editor&quot;, &quot;viewer&quot;] as const;\ntype Role = typeof ROLES[number];\n\nfunction check(role: Role) {\n  return ROLES.includes(role) ? `دور صالح: ${role}` : &quot;غير صالح&quot;;\n}\n\nconsole.log(check(&quot;editor&quot;));</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>دور صالح: editor</code></pre></div>\n<p>نمط شائع جداً: مصفوفة ثابتة تُستخدم في الكود وقت التشغيل، ومنها <strong>نستخرج</strong> النوع بـ <code dir=\"ltr\">typeof ROLES[number]</code>، فيبقى مصدر الحقيقة واحداً.</p>\n<h2>ملخص الدرس</h2>\n<ul><li>النوع الحرفي يقبل قيمة واحدة بعينها، وقوته في الاتحاد: <code dir=\"ltr\">&quot;S&quot; | &quot;M&quot; | &quot;L&quot;</code>.</li><li>يمنع القيم الخاطئة ويعطي إكمالاً تلقائياً.</li><li>Template Literal Types تبني أنواعاً من القوالب: `<code dir=\"ltr\"> </code>${A}-${B}<code dir=\"ltr\"> </code>`.</li><li><code dir=\"ltr\">typeof ARR[number]</code> مع <code dir=\"ltr\">as const</code> تستخرج النوع من مصفوفة.</li></ul>",
   "exercise": {
    "prompt": "<ol><li>عرّف <code dir=\"ltr\">type Day</code> يقبل فقط: <code dir=\"ltr\">&quot;sat&quot;</code> و <code dir=\"ltr\">&quot;sun&quot;</code> و <code dir=\"ltr\">&quot;mon&quot;</code>.</li><li>عرّف <code dir=\"ltr\">type Slot</code> كقالب نصي: يوم ثم شرطة ثم <code dir=\"ltr\">&quot;am&quot;</code> أو <code dir=\"ltr\">&quot;pm&quot;</code>، مثل <code dir=\"ltr\">&quot;sun-am&quot;</code>.</li><li>الحجز الأخير في المصفوفة غير صالح (<code dir=\"ltr\">&quot;fri-am&quot;</code>). احذفه حتى يُترجم الكود.</li></ol>",
    "starter": "// الأنواع هنا\n\nconst bookings: Slot[] = [\"sat-am\", \"sun-pm\", \"mon-am\", \"fri-am\"];\n\nfor (const b of bookings) {\n  const [day, period] = b.split(\"-\");\n  console.log(`${day}: ${period === \"am\" ? \"صباحاً\" : \"مساءً\"}`);\n}",
    "expected": "sat: صباحاً\nsun: مساءً\nmon: صباحاً",
    "solution": "type Day = \"sat\" | \"sun\" | \"mon\";\ntype Slot = `${Day}-${\"am\" | \"pm\"}`;\n\nconst bookings: Slot[] = [\"sat-am\", \"sun-pm\", \"mon-am\"];\n\nfor (const b of bookings) {\n  const [day, period] = b.split(\"-\");\n  console.log(`${day}: ${period === \"am\" ? \"صباحاً\" : \"مساءً\"}`);\n}"
   },
   "quiz": [
    {
     "q": "ما الذي يقبله <code dir=\"ltr\">type Level = &quot;low&quot; | &quot;high&quot;</code>؟",
     "o": [
      "النصين &quot;low&quot; و &quot;high&quot; فقط",
      "أي نص",
      "أي نص يحتوي low أو high"
     ],
     "a": 0,
     "why": "اتحاد الحروفيات مجموعة محددة."
    },
    {
     "q": "كم قيمة يقبل النوع `<code dir=\"ltr\"> </code>${&quot;a&quot; | &quot;b&quot;}-${1 | 2}<code dir=\"ltr\"> </code>`؟",
     "o": [
      "2",
      "4",
      "غير محدود"
     ],
     "a": 1,
     "why": "كل تركيبة: a-1، a-2، b-1، b-2."
    },
    {
     "q": "ما فائدة <code dir=\"ltr\">typeof ROLES[number]</code> مع <code dir=\"ltr\">as const</code>؟",
     "o": [
      "استخراج نوع اتحاد من مصفوفة ثابتة، فلا نكرر القيم في مكانين",
      "تحويل المصفوفة لرقم",
      "معرفة طول المصفوفة"
     ],
     "a": 0,
     "why": "مصدر واحد للقيم وقت التشغيل والأنواع معاً."
    }
   ]
  }
 ],
 [
  {
   "body": "<h2>دالة واحدة لكل الأنواع</h2>\n<p>اكتب دالة تُرجع أول عنصر في مصفوفة. بدون Generics لديك خياران سيئان:</p>\n<div class=\"code-block src\"><span class=\"code-label\">TypeScript</span><pre dir=\"ltr\"><code>function firstAny(arr: any[]): any {\n  return arr[0];\n}\n\nconst n = firstAny([10, 20]);\nconsole.log(n.toUpperCase());</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><div class=\"out-errs\"><div class=\"sql-err\" dir=\"ltr\">⚠️ TypeError: n.toUpperCase is not a function</div></div></div>\n<p>مع <code dir=\"ltr\">any</code> ضاعت معلومة النوع، فمرّ خطأ واضح وانهار البرنامج. والخيار الآخر كتابة دالة لكل نوع: <code dir=\"ltr\">firstNumber</code> و <code dir=\"ltr\">firstString</code>... وهذا تكرار.</p>\n<h2>الحل: Generics</h2>\n<p><strong>المعامل النوعي (Type Parameter)</strong> <code dir=\"ltr\">&lt;T&gt;</code> متغير يمثل <strong>نوعاً</strong> يُحدد عند الاستدعاء:</p>\n<div class=\"code-block src\"><span class=\"code-label\">TypeScript</span><pre dir=\"ltr\"><code>function first&lt;T&gt;(arr: T[]): T | undefined {\n  return arr[0];\n}\n\nconst n = first([10, 20]);\nconst s = first([&quot;أ&quot;, &quot;ب&quot;]);\n\nconsole.log(n?.toFixed(1));\nconsole.log(s?.toUpperCase());</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>10.0\nأ</code></pre></div>\n<ul><li><code dir=\"ltr\">&lt;T&gt;</code> بعد اسم الدالة يعلن معاملاً نوعياً.</li><li>عند <code dir=\"ltr\">first([10, 20])</code> استنتجت TypeScript أن <code dir=\"ltr\">T = number</code>، فالنتيجة <code dir=\"ltr\">number | undefined</code>.</li><li>والاسم <code dir=\"ltr\">T</code> عرف متبع (من Type)، ويمكن استخدام أي اسم.</li></ul>\n<h2>الخطأ يُكتشف الآن</h2>\n<div class=\"code-block src\"><span class=\"code-label\">TypeScript</span><pre dir=\"ltr\"><code>function first&lt;T&gt;(arr: T[]): T | undefined {\n  return arr[0];\n}\n\nconst n = first([10, 20]);\nconsole.log(n?.toUpperCase());</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><div class=\"out-errs\"><div class=\"sql-err\" dir=\"ltr\">⚠️ سطر 6: Property &#x27;toUpperCase&#x27; does not exist on type &#x27;number&#x27;.</div></div></div>\n<h2>أكثر من معامل نوعي</h2>\n<div class=\"code-block src\"><span class=\"code-label\">TypeScript</span><pre dir=\"ltr\"><code>function pair&lt;K, V&gt;(key: K, value: V): [K, V] {\n  return [key, value];\n}\n\nfunction mapArray&lt;T, R&gt;(items: T[], fn: (item: T) =&gt; R): R[] {\n  const result: R[] = [];\n  for (const item of items) result.push(fn(item));\n  return result;\n}\n\nconst p = pair(&quot;العمر&quot;, 30);\nconst lengths = mapArray([&quot;قلم&quot;, &quot;حاسوب&quot;], w =&gt; w.length);\nconsole.log(p, lengths);</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>[&quot;العمر&quot;,30] [3,5]</code></pre></div>\n<p><code dir=\"ltr\">mapArray</code> هي بالضبط كيف تُعرَّف <code dir=\"ltr\">Array.prototype.map</code> في TypeScript: من مصفوفة <code dir=\"ltr\">T</code> ودالة من <code dir=\"ltr\">T</code> إلى <code dir=\"ltr\">R</code> تنتج مصفوفة <code dir=\"ltr\">R</code>.</p>\n<h2>تحديد النوع صراحة</h2>\n<p>عادة تستنتج TypeScript الأنواع، لكن يمكنك تحديدها:</p>\n<div class=\"code-block src\"><span class=\"code-label\">TypeScript</span><pre dir=\"ltr\"><code>function emptyList&lt;T&gt;(): T[] {\n  return [];\n}\n\nconst names = emptyList&lt;string&gt;();\nnames.push(&quot;نوال&quot;);\nconsole.log(names);</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>[&quot;نوال&quot;]</code></pre></div>\n<p>هنا لا يوجد وسيط تستنتج منه TypeScript، فحددنا <code dir=\"ltr\">&lt;string&gt;</code> بأنفسنا.</p>\n<h2>ملخص الدرس</h2>\n<ul><li>Generics تكتب كوداً واحداً يعمل مع أنواع مختلفة دون فقدان معلومة النوع.</li><li><code dir=\"ltr\">function f&lt;T&gt;(x: T): T</code> والنوع يُستنتج عند الاستدعاء غالباً.</li><li>يمكن استخدام عدة معاملات نوعية <code dir=\"ltr\">&lt;K, V&gt;</code>.</li><li><code dir=\"ltr\">f&lt;string&gt;()</code> لتحديد النوع صراحة عند الحاجة.</li></ul>",
   "exercise": {
    "prompt": "<p>اكتب دالة عامة <code dir=\"ltr\">last&lt;T&gt;</code> تستقبل مصفوفة من <code dir=\"ltr\">T</code> وتُرجع آخر عنصر (أو <code dir=\"ltr\">undefined</code> إذا كانت فارغة)، ودالة عامة <code dir=\"ltr\">groupBy&lt;T&gt;</code> تستقبل مصفوفة ودالة تُرجع مفتاحاً نصياً لكل عنصر، وتُرجع <code dir=\"ltr\">Record&lt;string, T[]&gt;</code> تجمع العناصر حسب المفتاح.</p>",
    "starter": "function last(arr) {\n}\n\nfunction groupBy(items, keyFn) {\n}\n\nconsole.log(last([1, 2, 3]));\nconsole.log(last<string>([]));\nconst words = [\"تفاح\", \"توت\", \"موز\", \"مانجو\"];\nconsole.log(groupBy(words, w => w[0]));",
    "expected": "3\nundefined\n{\"ت\":[\"تفاح\",\"توت\"],\"م\":[\"موز\",\"مانجو\"]}",
    "solution": "function last<T>(arr: T[]): T | undefined {\n  return arr[arr.length - 1];\n}\n\nfunction groupBy<T>(items: T[], keyFn: (item: T) => string): Record<string, T[]> {\n  const groups: Record<string, T[]> = {};\n  for (const item of items) {\n    const key = keyFn(item);\n    (groups[key] ??= []).push(item);\n  }\n  return groups;\n}\n\nconsole.log(last([1, 2, 3]));\nconsole.log(last<string>([]));\nconst words = [\"تفاح\", \"توت\", \"موز\", \"مانجو\"];\nconsole.log(groupBy(words, w => w[0]));"
   },
   "quiz": [
    {
     "q": "ما المشكلة في استخدام any بدل Generics؟",
     "o": [
      "تضيع معلومة النوع فلا تُكتشف الأخطاء",
      "any أبطأ",
      "any غير مدعومة في الدوال"
     ],
     "a": 0,
     "why": "Generics تحفظ النوع وتنقله من المدخلات إلى المخرجات."
    },
    {
     "q": "في <code dir=\"ltr\">function wrap&lt;T&gt;(x: T): T[]</code>، ما نوع <code dir=\"ltr\">wrap(&quot;a&quot;)</code>؟",
     "o": [
      "string[]",
      "T[]",
      "any[]"
     ],
     "a": 0,
     "why": "T تُستنتج string من الوسيط."
    },
    {
     "q": "متى نكتب <code dir=\"ltr\">f&lt;number&gt;()</code> صراحة؟",
     "o": [
      "عندما لا يوجد وسيط تستطيع TypeScript أن تستنتج منه النوع",
      "دائماً",
      "لا يجوز ذلك"
     ],
     "a": 0,
     "why": "في الغالب الاستنتاج يكفي."
    }
   ]
  },
  {
   "body": "<h2>أنواع تحمل أنواعاً أخرى</h2>\n<p>كما تكون الدوال عامة، يمكن للواجهات والأنواع أن تكون عامة: <strong>قوالب</strong> تُملأ بنوع عند الاستخدام. وأنت تستخدمها بالفعل: <code dir=\"ltr\">Array&lt;T&gt;</code> و <code dir=\"ltr\">Promise&lt;T&gt;</code> و <code dir=\"ltr\">Map&lt;K, V&gt;</code>.</p>\n<h2>استجابة API عامة</h2>\n<p>كل الاستجابات من الخادم لها نفس الغلاف، لكن البيانات بداخلها تختلف:</p>\n<div class=\"code-block src\"><span class=\"code-label\">TypeScript</span><pre dir=\"ltr\"><code>interface ApiResponse&lt;T&gt; {\n  success: boolean;\n  data: T;\n  error?: string;\n}\n\ninterface User { id: number; name: string }\ninterface Product { title: string; price: number }\n\nconst userRes: ApiResponse&lt;User&gt; = {\n  success: true,\n  data: { id: 1, name: &quot;رهف&quot; }\n};\n\nconst listRes: ApiResponse&lt;Product[]&gt; = {\n  success: true,\n  data: [{ title: &quot;مصباح&quot;, price: 90 }]\n};\n\nconsole.log(userRes.data.name);\nconsole.log(listRes.data[0].price);</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>رهف\n90</code></pre></div>\n<p>واجهة واحدة <code dir=\"ltr\">ApiResponse&lt;T&gt;</code> تخدم كل أنواع البيانات، والمحرر يعرف أن <code dir=\"ltr\">userRes.data</code> من نوع <code dir=\"ltr\">User</code> بالضبط.</p>\n<h2>صنف عام: مخزن بيانات</h2>\n<div class=\"code-block src\"><span class=\"code-label\">TypeScript</span><pre dir=\"ltr\"><code>class Store&lt;T&gt; {\n  private items: T[] = [];\n\n  add(item: T): void {\n    this.items.push(item);\n  }\n\n  find(predicate: (item: T) =&gt; boolean): T | undefined {\n    return this.items.find(predicate);\n  }\n\n  get count(): number {\n    return this.items.length;\n  }\n}\n\ninterface Task { title: string; done: boolean }\n\nconst tasks = new Store&lt;Task&gt;();\ntasks.add({ title: &quot;مراجعة الدرس&quot;, done: false });\ntasks.add({ title: &quot;حل التمرين&quot;, done: true });\n\nconsole.log(tasks.count);\nconsole.log(tasks.find(t =&gt; t.done)?.title);</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>2\nحل التمرين</code></pre></div>\n<h2>القيم الافتراضية للمعاملات النوعية</h2>\n<div class=\"code-block src\"><span class=\"code-label\">TypeScript</span><pre dir=\"ltr\"><code>interface Paginated&lt;T, Meta = { page: number; total: number }&gt; {\n  items: T[];\n  meta: Meta;\n}\n\nconst page: Paginated&lt;string&gt; = {\n  items: [&quot;أ&quot;, &quot;ب&quot;],\n  meta: { page: 1, total: 20 }\n};\nconsole.log(page.items.length, page.meta.total);</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>2 20</code></pre></div>\n<h2>نوع النتيجة: نجاح أو فشل</h2>\n<p>نمط احترافي يجمع Generics مع الاتحاد المميَّز:</p>\n<div class=\"code-block src\"><span class=\"code-label\">TypeScript</span><pre dir=\"ltr\"><code>type Result&lt;T, E = string&gt; =\n  | { ok: true; value: T }\n  | { ok: false; error: E };\n\nfunction parseAge(input: string): Result&lt;number&gt; {\n  const n = Number(input);\n  if (Number.isNaN(n) || n &lt; 0) return { ok: false, error: `قيمة غير صالحة: ${input}` };\n  return { ok: true, value: n };\n}\n\nfor (const input of [&quot;30&quot;, &quot;abc&quot;]) {\n  const r = parseAge(input);\n  console.log(r.ok ? `العمر ${r.value}` : r.error);\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>العمر 30\nقيمة غير صالحة: abc</code></pre></div>\n<p>بدلاً من رمي الأخطاء، تُرجع الدالة نتيجة تُجبر المستدعي على التحقق من <code dir=\"ltr\">ok</code> قبل الوصول إلى <code dir=\"ltr\">value</code>.</p>\n<h2>ملخص الدرس</h2>\n<ul><li>الواجهات والأنواع والأصناف يمكن أن تكون عامة: <code dir=\"ltr\">interface Box&lt;T&gt;</code>.</li><li><code dir=\"ltr\">ApiResponse&lt;T&gt;</code> نمط شائع لتوحيد شكل الاستجابات.</li><li>المعامل النوعي يمكن أن يكون له افتراضي: <code dir=\"ltr\">&lt;T, M = Default&gt;</code>.</li><li><code dir=\"ltr\">Result&lt;T&gt;</code> يجمع Generics مع الاتحاد المميَّز.</li></ul>",
   "exercise": {
    "prompt": "<ol><li>عرّف واجهة عامة <code dir=\"ltr\">Cache&lt;T&gt;</code> فيها: <code dir=\"ltr\">get(key: string): T | undefined</code> و <code dir=\"ltr\">set(key: string, value: T): void</code> و <code dir=\"ltr\">size: number</code>.</li><li>اكتب صنفاً <code dir=\"ltr\">MemoryCache&lt;T&gt;</code> ينفّذها باستخدام <code dir=\"ltr\">Map&lt;string, T&gt;</code> داخلياً.</li></ol>",
    "starter": "// الواجهة والصنف هنا\n\nconst prices = new MemoryCache<number>();\nprices.set(\"قهوة\", 12);\nprices.set(\"شاي\", 8);\nconsole.log(prices.get(\"قهوة\"));\nconsole.log(prices.get(\"عصير\"));\nconsole.log(prices.size);",
    "expected": "12\nundefined\n2",
    "solution": "interface Cache<T> {\n  get(key: string): T | undefined;\n  set(key: string, value: T): void;\n  size: number;\n}\n\nclass MemoryCache<T> implements Cache<T> {\n  private data = new Map<string, T>();\n\n  get(key: string): T | undefined {\n    return this.data.get(key);\n  }\n\n  set(key: string, value: T): void {\n    this.data.set(key, value);\n  }\n\n  get size(): number {\n    return this.data.size;\n  }\n}\n\nconst prices = new MemoryCache<number>();\nprices.set(\"قهوة\", 12);\nprices.set(\"شاي\", 8);\nconsole.log(prices.get(\"قهوة\"));\nconsole.log(prices.get(\"عصير\"));\nconsole.log(prices.size);"
   },
   "quiz": [
    {
     "q": "ما نوع <code dir=\"ltr\">data</code> في <code dir=\"ltr\">ApiResponse&lt;User[]&gt;</code>؟",
     "o": [
      "User[]",
      "T",
      "any"
     ],
     "a": 0,
     "why": "T يُستبدل بـ User[]."
    },
    {
     "q": "ما فائدة <code dir=\"ltr\">interface Box&lt;T&gt;</code> العامة؟",
     "o": [
      "قالب واحد يُعاد استخدامه مع أي نوع دون فقدان دقة النوع",
      "تسريع الترجمة",
      "منع الوراثة"
     ],
     "a": 0,
     "why": "مثل Array&lt;T&gt; و Promise&lt;T&gt;."
    },
    {
     "q": "ماذا يعني <code dir=\"ltr\">&lt;T, E = string&gt;</code>؟",
     "o": [
      "المعامل E قيمته الافتراضية string إذا لم يُحدد",
      "E يجب أن يكون string دائماً",
      "خطأ في الصيغة"
     ],
     "a": 0,
     "why": "المعاملات النوعية تدعم القيم الافتراضية."
    }
   ]
  },
  {
   "body": "<h2>ليس أي نوع</h2>\n<p>أحياناً تحتاج الدالة العامة أن يكون للنوع خصائص معينة. هذه الدالة تريد خاصية <code dir=\"ltr\">length</code>:</p>\n<div class=\"code-block src\"><span class=\"code-label\">TypeScript</span><pre dir=\"ltr\"><code>function longest&lt;T&gt;(a: T, b: T): T {\n  return a.length &gt;= b.length ? a : b;\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><div class=\"out-errs\"><div class=\"sql-err\" dir=\"ltr\">⚠️ سطر 2: Property &#x27;length&#x27; does not exist on type &#x27;T&#x27;.</div><div class=\"sql-err\" dir=\"ltr\">⚠️ سطر 2: Property &#x27;length&#x27; does not exist on type &#x27;T&#x27;.</div></div></div>\n<p><code dir=\"ltr\">T</code> قد يكون أي شيء، حتى رقماً ليس له <code dir=\"ltr\">length</code>. الحل: <strong>القيد (Constraint)</strong> بالكلمة <code dir=\"ltr\">extends</code>:</p>\n<div class=\"code-block src\"><span class=\"code-label\">TypeScript</span><pre dir=\"ltr\"><code>function longest&lt;T extends { length: number }&gt;(a: T, b: T): T {\n  return a.length &gt;= b.length ? a : b;\n}\n\nconsole.log(longest(&quot;قصير&quot;, &quot;أطول بكثير&quot;));\nconsole.log(longest([1, 2], [1, 2, 3]));\nconsole.log(longest(10, 20));</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><div class=\"out-errs\"><div class=\"sql-err\" dir=\"ltr\">⚠️ سطر 7: Argument of type &#x27;number&#x27; is not assignable to parameter of type &#x27;{ length: number; }&#x27;.</div></div></div>\n<ul><li><code dir=\"ltr\">T extends { length: number }</code> تعني: T أي نوع بشرط أن يملك <code dir=\"ltr\">length</code> رقمية.</li><li>النصوص والمصفوفات تُقبل، والأرقام تُرفض.</li></ul>\n<h2>keyof مع القيود: الوصول الآمن للخصائص</h2>\n<div class=\"code-block src\"><span class=\"code-label\">TypeScript</span><pre dir=\"ltr\"><code>function getProp&lt;T, K extends keyof T&gt;(obj: T, key: K): T[K] {\n  return obj[key];\n}\n\nconst book = { title: &quot;رحلة&quot;, pages: 220, available: true };\n\nconst t = getProp(book, &quot;title&quot;);\nconst p = getProp(book, &quot;pages&quot;);\nconsole.log(t.toUpperCase(), p + 1);\n\ngetProp(book, &quot;price&quot;);</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><div class=\"out-errs\"><div class=\"sql-err\" dir=\"ltr\">⚠️ سطر 11: Argument of type &#x27;&quot;price&quot;&#x27; is not assignable to parameter of type &#x27;&quot;title&quot;</div><div class=\"sql-err\" dir=\"ltr\">⚠️ &quot;pages&quot;</div><div class=\"sql-err\" dir=\"ltr\">⚠️ &quot;available&quot;&#x27;.</div></div></div>\n<ul><li><code dir=\"ltr\">keyof T</code> اتحاد أسماء خصائص T: <code dir=\"ltr\">&quot;title&quot; | &quot;pages&quot; | &quot;available&quot;</code>.</li><li><code dir=\"ltr\">K extends keyof T</code> تعني: K يجب أن يكون اسم خاصية موجودة فعلاً.</li><li><code dir=\"ltr\">T[K]</code> نوع تلك الخاصية بالضبط: <code dir=\"ltr\">title</code> تُرجع <code dir=\"ltr\">string</code> و <code dir=\"ltr\">pages</code> تُرجع <code dir=\"ltr\">number</code>.</li></ul>\n<h2>القيد بواجهة</h2>\n<div class=\"code-block src\"><span class=\"code-label\">TypeScript</span><pre dir=\"ltr\"><code>interface HasId {\n  id: number;\n}\n\nfunction findById&lt;T extends HasId&gt;(items: T[], id: number): T | undefined {\n  return items.find(item =&gt; item.id === id);\n}\n\nconst users = [{ id: 1, name: &quot;حسن&quot; }, { id: 2, name: &quot;أروى&quot; }];\nconst orders = [{ id: 7, total: 300 }];\n\nconsole.log(findById(users, 2)?.name);\nconsole.log(findById(orders, 7)?.total);</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>أروى\n300</code></pre></div>\n<p>دالة واحدة تعمل مع أي نوع له <code dir=\"ltr\">id</code>، وتُرجع النوع الكامل: <code dir=\"ltr\">findById(users, 2)</code> تُرجع كائناً فيه <code dir=\"ltr\">name</code>.</p>\n<h2>ملخص الدرس</h2>\n<ul><li><code dir=\"ltr\">T extends Shape</code> يقيّد المعامل النوعي بأنواع تملك شكلاً معيناً.</li><li><code dir=\"ltr\">keyof T</code> اتحاد أسماء خصائص T.</li><li><code dir=\"ltr\">K extends keyof T</code> و <code dir=\"ltr\">T[K]</code> للوصول الآمن والدقيق لأي خاصية.</li><li>القيود تجعل الدوال العامة مرنة وآمنة معاً.</li></ul>",
   "exercise": {
    "prompt": "<p>اكتب دالة عامة <code dir=\"ltr\">pluck</code> تستقبل مصفوفة كائنات من نوع <code dir=\"ltr\">T</code> واسم خاصية <code dir=\"ltr\">K</code> (مقيدة بـ <code dir=\"ltr\">keyof T</code>)، وتُرجع مصفوفة قيم هذه الخاصية من نوع <code dir=\"ltr\">T[K][]</code>.</p>",
    "starter": "function pluck(items, key) {\n  return items.map(item => item[key]);\n}\n\nconst products = [\n  { name: \"ساعة\", price: 450 },\n  { name: \"محفظة\", price: 120 }\n];\n\nconst names = pluck(products, \"name\");\nconst prices = pluck(products, \"price\");\nconsole.log(names.join(\"، \"));\nconsole.log(prices.reduce((a, b) => a + b, 0));",
    "expected": "ساعة، محفظة\n570",
    "solution": "function pluck<T, K extends keyof T>(items: T[], key: K): T[K][] {\n  return items.map(item => item[key]);\n}\n\nconst products = [\n  { name: \"ساعة\", price: 450 },\n  { name: \"محفظة\", price: 120 }\n];\n\nconst names = pluck(products, \"name\");\nconst prices = pluck(products, \"price\");\nconsole.log(names.join(\"، \"));\nconsole.log(prices.reduce((a, b) => a + b, 0));"
   },
   "quiz": [
    {
     "q": "ماذا يعني <code dir=\"ltr\">&lt;T extends { name: string }&gt;</code>؟",
     "o": [
      "T يمكن أن يكون أي نوع بشرط أن يملك خاصية name نصية",
      "T يرث من صنف اسمه name",
      "T يجب أن يكون نصاً"
     ],
     "a": 0,
     "why": "extends هنا تعني قيداً وليس وراثة."
    },
    {
     "q": "ما نوع <code dir=\"ltr\">keyof { a: number; b: string }</code>؟",
     "o": [
      "<code dir=\"ltr\">&quot;a&quot; | &quot;b&quot;</code>",
      "<code dir=\"ltr\">number | string</code>",
      "<code dir=\"ltr\">string</code>"
     ],
     "a": 0,
     "why": "keyof يعطي أسماء الخصائص."
    },
    {
     "q": "ما نوع <code dir=\"ltr\">T[K]</code> حيث T هو <code dir=\"ltr\">{ age: number }</code> و K هو <code dir=\"ltr\">&quot;age&quot;</code>؟",
     "o": [
      "number",
      "&quot;age&quot;",
      "T"
     ],
     "a": 0,
     "why": "T[K] نوع الخاصية K داخل T."
    }
   ]
  }
 ],
 [
  {
   "body": "<h2>أنواع جاهزة لتحويل الأنواع</h2>\n<p>توفر TypeScript <strong>أدوات أنواع (Utility Types)</strong> تصنع أنواعاً جديدة من أنواع موجودة، دون تكرار التعريف. لنأخذ هذا النوع:</p>\n<div class=\"code-block src\"><span class=\"code-label\">TypeScript</span><pre dir=\"ltr\"><code>interface User {\n  id: number;\n  name: string;\n  email: string;\n  age?: number;\n}</code></pre></div>\n<h2>Partial: كل الخصائص اختيارية</h2>\n<p>مثالي لدوال <strong>التحديث</strong>، حيث يرسل المستخدم بعض الحقول فقط:</p>\n<div class=\"code-block src\"><span class=\"code-label\">TypeScript</span><pre dir=\"ltr\"><code>interface User { id: number; name: string; email: string }\n\nfunction updateUser(user: User, changes: Partial&lt;User&gt;): User {\n  return { ...user, ...changes };\n}\n\nconst u: User = { id: 1, name: &quot;وجدان&quot;, email: &quot;w@mail.com&quot; };\nconsole.log(updateUser(u, { email: &quot;new@mail.com&quot; }));</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>{&quot;id&quot;:1,&quot;name&quot;:&quot;وجدان&quot;,&quot;email&quot;:&quot;new@mail.com&quot;}</code></pre></div>\n<h2>Required: كل الخصائص إلزامية</h2>\n<div class=\"code-block src\"><span class=\"code-label\">TypeScript</span><pre dir=\"ltr\"><code>interface Config { host?: string; port?: number }\n\nfunction start(config: Required&lt;Config&gt;) {\n  console.log(`يعمل على ${config.host}:${config.port}`);\n}\n\nstart({ host: &quot;localhost&quot;, port: 3000 });\nstart({ host: &quot;localhost&quot; });</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><div class=\"out-errs\"><div class=\"sql-err\" dir=\"ltr\">⚠️ سطر 8: Argument of type &#x27;{ host: string; }&#x27; is not assignable to parameter of type &#x27;Required&lt;Config&gt;&#x27;.   Property &#x27;port&#x27; is missing in type &#x27;{ host: string; }&#x27; but required in type &#x27;Required&lt;Config&gt;&#x27;.</div></div></div>\n<h2>Pick: اختيار بعض الخصائص</h2>\n<div class=\"code-block src\"><span class=\"code-label\">TypeScript</span><pre dir=\"ltr\"><code>interface User { id: number; name: string; email: string; password: string }\n\ntype PublicUser = Pick&lt;User, &quot;id&quot; | &quot;name&quot;&gt;;\n\nconst card: PublicUser = { id: 3, name: &quot;ثامر&quot; };\nconsole.log(card);</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>{&quot;id&quot;:3,&quot;name&quot;:&quot;ثامر&quot;}</code></pre></div>\n<h2>Omit: كل الخصائص ما عدا بعضها</h2>\n<div class=\"code-block src\"><span class=\"code-label\">TypeScript</span><pre dir=\"ltr\"><code>interface User { id: number; name: string; email: string; password: string }\n\ntype NewUser = Omit&lt;User, &quot;id&quot;&gt;;\ntype SafeUser = Omit&lt;User, &quot;password&quot;&gt;;\n\nconst signup: NewUser = { name: &quot;رزان&quot;, email: &quot;r@mail.com&quot;, password: &quot;secret&quot; };\nconst shown: SafeUser = { id: 9, name: &quot;رزان&quot;, email: &quot;r@mail.com&quot;, password: &quot;x&quot; };</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><div class=\"out-errs\"><div class=\"sql-err\" dir=\"ltr\">⚠️ سطر 7: Object literal may only specify known properties, and &#x27;password&#x27; does not exist in type &#x27;SafeUser&#x27;.</div></div></div>\n<p><code dir=\"ltr\">NewUser</code> لنموذج التسجيل (المعرّف يولّده الخادم)، و <code dir=\"ltr\">SafeUser</code> لما نرسله للواجهة دون كلمة المرور. ولاحظ الخطأ: <code dir=\"ltr\">SafeUser</code> لا تقبل <code dir=\"ltr\">password</code> أصلاً.</p>\n<h2>الجدول</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>الأداة</th><th>الناتج</th></tr></thead><tbody><tr><td><code dir=\"ltr\">Partial&lt;T&gt;</code></td><td>كل الخصائص اختيارية</td></tr><tr><td><code dir=\"ltr\">Required&lt;T&gt;</code></td><td>كل الخصائص إلزامية</td></tr><tr><td><code dir=\"ltr\">Readonly&lt;T&gt;</code></td><td>كل الخصائص للقراءة فقط</td></tr><tr><td><code dir=\"ltr\">Pick&lt;T, K&gt;</code></td><td>الخصائص K فقط</td></tr><tr><td><code dir=\"ltr\">Omit&lt;T, K&gt;</code></td><td>كل الخصائص ما عدا K</td></tr><tr><td><code dir=\"ltr\">ReturnType&lt;F&gt;</code></td><td>نوع ما تُرجعه الدالة F</td></tr><tr><td><code dir=\"ltr\">Parameters&lt;F&gt;</code></td><td>أنواع معاملات الدالة F كـ Tuple</td></tr><tr><td><code dir=\"ltr\">NonNullable&lt;T&gt;</code></td><td>T بعد حذف null و undefined</td></tr></tbody></table></div>\n<div class=\"code-block src\"><span class=\"code-label\">TypeScript</span><pre dir=\"ltr\"><code>function createOrder(item: string, qty: number) {\n  return { item, qty, createdAt: &quot;2025-07-01&quot; };\n}\n\ntype Order = ReturnType&lt;typeof createOrder&gt;;\ntype Args = Parameters&lt;typeof createOrder&gt;;\n\nconst o: Order = createOrder(&quot;قلم&quot;, 3);\nconst args: Args = [&quot;دفتر&quot;, 2];\nconsole.log(o.item, args[1]);</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>قلم 2</code></pre></div>\n<p><code dir=\"ltr\">ReturnType</code> مفيدة جداً عندما تُرجع دالة كائناً ولا تريد كتابة نوعه يدوياً مرتين.</p>\n<h2>ملخص الدرس</h2>\n<ul><li><code dir=\"ltr\">Partial</code> للتحديثات الجزئية، و <code dir=\"ltr\">Required</code> لفرض كل الحقول.</li><li><code dir=\"ltr\">Pick</code> و <code dir=\"ltr\">Omit</code> لاشتقاق أنواع أصغر من نوع كبير.</li><li><code dir=\"ltr\">ReturnType</code> و <code dir=\"ltr\">Parameters</code> لاستخراج الأنواع من الدوال.</li><li>مصدر واحد للحقيقة: عدّل <code dir=\"ltr\">User</code> فتتحدث كل الأنواع المشتقة منه.</li></ul>",
   "exercise": {
    "prompt": "<p>لديك واجهة <code dir=\"ltr\">Product</code>. اشتق منها دون تكرار الخصائص:</p>\n<ol><li><code dir=\"ltr\">ProductPreview</code>: فقط <code dir=\"ltr\">id</code> و <code dir=\"ltr\">title</code> و <code dir=\"ltr\">price</code> (استخدم <code dir=\"ltr\">Pick</code>).</li><li><code dir=\"ltr\">ProductDraft</code>: كل شيء ما عدا <code dir=\"ltr\">id</code> (استخدم <code dir=\"ltr\">Omit</code>).</li><li><code dir=\"ltr\">ProductPatch</code>: كل الخصائص اختيارية (استخدم <code dir=\"ltr\">Partial</code>).</li></ol>\n<p>ثم أكمل الدالة <code dir=\"ltr\">applyPatch</code>.</p>",
    "starter": "interface Product {\n  id: number;\n  title: string;\n  price: number;\n  description: string;\n}\n\n// الأنواع الثلاثة هنا\n\nfunction applyPatch(p: Product, patch: ProductPatch): Product {\n  // أكمل هنا\n}\n\nconst draft: ProductDraft = { title: \"كرسي\", price: 400, description: \"مريح\" };\nconst product: Product = { id: 1, ...draft };\nconst preview: ProductPreview = { id: product.id, title: product.title, price: product.price };\nconsole.log(preview);\nconsole.log(applyPatch(product, { price: 350 }).price);",
    "expected": "{\"id\":1,\"title\":\"كرسي\",\"price\":400}\n350",
    "solution": "interface Product {\n  id: number;\n  title: string;\n  price: number;\n  description: string;\n}\n\ntype ProductPreview = Pick<Product, \"id\" | \"title\" | \"price\">;\ntype ProductDraft = Omit<Product, \"id\">;\ntype ProductPatch = Partial<Product>;\n\nfunction applyPatch(p: Product, patch: ProductPatch): Product {\n  return { ...p, ...patch };\n}\n\nconst draft: ProductDraft = { title: \"كرسي\", price: 400, description: \"مريح\" };\nconst product: Product = { id: 1, ...draft };\nconst preview: ProductPreview = { id: product.id, title: product.title, price: product.price };\nconsole.log(preview);\nconsole.log(applyPatch(product, { price: 350 }).price);"
   },
   "quiz": [
    {
     "q": "أي أداة تناسب نوع دالة تحديث يُرسل فيها المستخدم بعض الحقول فقط؟",
     "o": [
      "Partial",
      "Required",
      "Pick"
     ],
     "a": 0,
     "why": "Partial تجعل كل الخصائص اختيارية."
    },
    {
     "q": "ما ناتج <code dir=\"ltr\">Omit&lt;User, &quot;password&quot;&gt;</code>؟",
     "o": [
      "نوع فيه كل خصائص User ما عدا password",
      "نوع فيه password فقط",
      "User مع password اختيارية"
     ],
     "a": 0,
     "why": "Omit تحذف الخصائص المحددة."
    },
    {
     "q": "ما فائدة <code dir=\"ltr\">ReturnType&lt;typeof fn&gt;</code>؟",
     "o": [
      "استخراج نوع ما تُرجعه الدالة دون كتابته يدوياً",
      "تشغيل الدالة",
      "معرفة عدد معاملاتها"
     ],
     "a": 0,
     "why": "مصدر واحد للحقيقة: الدالة نفسها."
    }
   ]
  },
  {
   "body": "<h2>قاموس بمفاتيح وقيم محددة</h2>\n<p><code dir=\"ltr\">Record&lt;K, V&gt;</code> نوع كائن مفاتيحه من النوع <code dir=\"ltr\">K</code> وقيمه من النوع <code dir=\"ltr\">V</code>. مثالي للقواميس وجداول البحث:</p>\n<div class=\"code-block src\"><span class=\"code-label\">TypeScript</span><pre dir=\"ltr\"><code>const stock: Record&lt;string, number&gt; = {\n  &quot;قلم&quot;: 40,\n  &quot;دفتر&quot;: 12\n};\n\nstock[&quot;ممحاة&quot;] = 5;\nconsole.log(Object.keys(stock).length, stock[&quot;قلم&quot;]);</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>3 40</code></pre></div>\n<h2>القوة الحقيقية: مفاتيح من اتحاد</h2>\n<p>عندما تكون المفاتيح اتحاد حروفيات، تتأكد TypeScript من وجود <strong>كل</strong> المفاتيح:</p>\n<div class=\"code-block src\"><span class=\"code-label\">TypeScript</span><pre dir=\"ltr\"><code>type Status = &quot;pending&quot; | &quot;shipped&quot; | &quot;delivered&quot;;\n\nconst labels: Record&lt;Status, string&gt; = {\n  pending: &quot;قيد الانتظار&quot;,\n  shipped: &quot;تم الشحن&quot;,\n  delivered: &quot;تم التسليم&quot;\n};\n\nconst colors: Record&lt;Status, string&gt; = {\n  pending: &quot;orange&quot;,\n  shipped: &quot;blue&quot;\n};\n\nconsole.log(labels.shipped);</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><div class=\"out-errs\"><div class=\"sql-err\" dir=\"ltr\">⚠️ سطر 9: Property &#x27;delivered&#x27; is missing in type &#x27;{ pending: string; shipped: string; }&#x27; but required in type &#x27;Record&lt;Status, string&gt;&#x27;.</div></div></div>\n<p>نسيت حالة <code dir=\"ltr\">delivered</code> في <code dir=\"ltr\">colors</code>؟ خطأ ترجمة! وعند إضافة حالة جديدة للنوع <code dir=\"ltr\">Status</code>، تدلك TypeScript على كل قاموس يجب تحديثه.</p>\n<h2>قيم معقدة</h2>\n<div class=\"code-block src\"><span class=\"code-label\">TypeScript</span><pre dir=\"ltr\"><code>type Role = &quot;admin&quot; | &quot;editor&quot;;\n\ninterface Permissions {\n  canDelete: boolean;\n  canPublish: boolean;\n}\n\nconst permissions: Record&lt;Role, Permissions&gt; = {\n  admin: { canDelete: true, canPublish: true },\n  editor: { canDelete: false, canPublish: true }\n};\n\nfunction can(role: Role, action: keyof Permissions): boolean {\n  return permissions[role][action];\n}\n\nconsole.log(can(&quot;editor&quot;, &quot;canDelete&quot;));\nconsole.log(can(&quot;admin&quot;, &quot;canDelete&quot;));</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>false\ntrue</code></pre></div>\n<h2>Record مقابل Map</h2>\n<div class=\"table-wrap\"><table><thead><tr><th><code dir=\"ltr\">Record&lt;K, V&gt;</code></th><th><code dir=\"ltr\">Map&lt;K, V&gt;</code></th></tr></thead><tbody><tr><td>كائن عادي <code dir=\"ltr\">{}</code></td><td>صنف مدمج</td></tr><tr><td>مفاتيح نصية أو رقمية</td><td>مفاتيح من أي نوع</td></tr><tr><td>ممتاز لقواميس ثابتة معروفة المفاتيح</td><td>ممتاز لإضافة وحذف متكرر</td></tr><tr><td>يتحول لـ JSON مباشرة</td><td>يحتاج تحويلاً</td></tr></tbody></table></div>\n<h2>ملخص الدرس</h2>\n<ul><li><code dir=\"ltr\">Record&lt;K, V&gt;</code> كائن مفاتيحه K وقيمه V.</li><li>مع اتحاد حروفيات كمفاتيح، تفرض TypeScript وجود كل المفاتيح.</li><li>مثالي لجداول الترجمة والإعدادات والصلاحيات.</li></ul>",
   "exercise": {
    "prompt": "<ol><li>عرّف <code dir=\"ltr\">type Plan = &quot;free&quot; | &quot;pro&quot; | &quot;team&quot;</code>.</li><li>عرّف <code dir=\"ltr\">prices</code> من نوع <code dir=\"ltr\">Record&lt;Plan, number&gt;</code> بالقيم: free = 0، و pro = 29، و team = 99.</li><li>عرّف <code dir=\"ltr\">features</code> من نوع <code dir=\"ltr\">Record&lt;Plan, string[]&gt;</code>: free فيه <code dir=\"ltr\">[&quot;دروس أساسية&quot;]</code>، و pro فيه <code dir=\"ltr\">[&quot;كل الدروس&quot;, &quot;شهادات&quot;]</code>، و team فيه <code dir=\"ltr\">[&quot;كل الدروس&quot;, &quot;شهادات&quot;, &quot;لوحة فريق&quot;]</code>.</li><li>اطبع لكل خطة: <code dir=\"ltr\">pro: 29$ - 2 ميزات</code> (مر على <code dir=\"ltr\">Object.keys(prices) as Plan[]</code>).</li></ol>",
    "starter": "// أكمل هنا",
    "expected": "free: 0$ - 1 ميزات\npro: 29$ - 2 ميزات\nteam: 99$ - 3 ميزات",
    "solution": "type Plan = \"free\" | \"pro\" | \"team\";\n\nconst prices: Record<Plan, number> = { free: 0, pro: 29, team: 99 };\n\nconst features: Record<Plan, string[]> = {\n  free: [\"دروس أساسية\"],\n  pro: [\"كل الدروس\", \"شهادات\"],\n  team: [\"كل الدروس\", \"شهادات\", \"لوحة فريق\"]\n};\n\nfor (const plan of Object.keys(prices) as Plan[]) {\n  console.log(`${plan}: ${prices[plan]}$ - ${features[plan].length} ميزات`);\n}"
   },
   "quiz": [
    {
     "q": "ماذا يصف <code dir=\"ltr\">Record&lt;string, boolean&gt;</code>؟",
     "o": [
      "كائناً مفاتيحه نصوص وقيمه منطقية",
      "مصفوفة من القيم المنطقية",
      "Map"
     ],
     "a": 0,
     "why": "Record قالب لكائنات القواميس."
    },
    {
     "q": "ماذا يحدث إذا نقص مفتاح في <code dir=\"ltr\">Record&lt;&quot;a&quot; | &quot;b&quot;, number&gt;</code>؟",
     "o": [
      "خطأ ترجمة",
      "يُضاف تلقائياً بقيمة 0",
      "لا شيء"
     ],
     "a": 0,
     "why": "كل مفاتيح الاتحاد مطلوبة."
    },
    {
     "q": "متى يكون Map أفضل من Record؟",
     "o": [
      "عندما تحتاج مفاتيح من أي نوع أو إضافة وحذفاً متكرراً",
      "دائماً",
      "للإعدادات الثابتة"
     ],
     "a": 0,
     "why": "Record أنسب للقواميس الثابتة."
    }
   ]
  },
  {
   "body": "<h2>مجموعة ثوابت باسم</h2>\n<p><strong>التعداد (enum)</strong> يعطي أسماء واضحة لمجموعة قيم ثابتة مرتبطة:</p>\n<div class=\"code-block src\"><span class=\"code-label\">TypeScript</span><pre dir=\"ltr\"><code>enum Direction {\n  Up,\n  Down,\n  Left,\n  Right\n}\n\nconst move: Direction = Direction.Left;\nconsole.log(move);\nconsole.log(Direction[move]);</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>2\nLeft</code></pre></div>\n<p>التعداد الرقمي يبدأ من <code dir=\"ltr\">0</code> افتراضياً، ويمكنك أيضاً قراءة الاسم من الرقم <code dir=\"ltr\">Direction[2]</code>.</p>\n<h2>التعداد النصي (الأوضح)</h2>\n<div class=\"code-block src\"><span class=\"code-label\">TypeScript</span><pre dir=\"ltr\"><code>enum OrderStatus {\n  Pending = &quot;PENDING&quot;,\n  Paid = &quot;PAID&quot;,\n  Shipped = &quot;SHIPPED&quot;\n}\n\nfunction describe(s: OrderStatus): string {\n  switch (s) {\n    case OrderStatus.Pending: return &quot;بانتظار الدفع&quot;;\n    case OrderStatus.Paid: return &quot;مدفوع&quot;;\n    case OrderStatus.Shipped: return &quot;في الطريق&quot;;\n  }\n}\n\nconst status = OrderStatus.Paid;\nconsole.log(status, describe(status));</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>PAID مدفوع</code></pre></div>\n<p>القيم النصية أسهل في التتبع: في قاعدة البيانات وسجلات الأخطاء ترى <code dir=\"ltr\">&quot;PAID&quot;</code> بدل الرقم <code dir=\"ltr\">1</code> الغامض.</p>\n<h2>enum ليس نوعاً فقط</h2>\n<p>على عكس بقية ما تعلمناه، الـ enum <strong>يبقى في JavaScript</strong> بعد الترجمة ككائن حقيقي:</p>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>var OrderStatus;\n(function (OrderStatus) {\n  OrderStatus[&quot;Pending&quot;] = &quot;PENDING&quot;;\n  OrderStatus[&quot;Paid&quot;] = &quot;PAID&quot;;\n})(OrderStatus || (OrderStatus = {}));\nconsole.log(Object.values(OrderStatus));</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>[&quot;PENDING&quot;,&quot;PAID&quot;]</code></pre></div>\n<h2>البديل الحديث: اتحاد الحروفيات</h2>\n<p>كثير من الفرق تفضّل اليوم اتحاد الحروفيات مع <code dir=\"ltr\">as const</code> بدل enum:</p>\n<div class=\"code-block src\"><span class=\"code-label\">TypeScript</span><pre dir=\"ltr\"><code>const STATUS = {\n  Pending: &quot;PENDING&quot;,\n  Paid: &quot;PAID&quot;,\n  Shipped: &quot;SHIPPED&quot;\n} as const;\n\ntype Status = typeof STATUS[keyof typeof STATUS];\n\nfunction isFinal(s: Status): boolean {\n  return s === STATUS.Shipped;\n}\n\nconsole.log(isFinal(&quot;SHIPPED&quot;), isFinal(STATUS.Pending));</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>true false</code></pre></div>\n<div class=\"table-wrap\"><table><thead><tr><th>enum</th><th>اتحاد حروفيات / as const</th></tr></thead><tbody><tr><td>صيغة خاصة بـ TypeScript</td><td>JavaScript عادية + أنواع</td></tr><tr><td>يولّد كوداً عند الترجمة</td><td>لا يولّد شيئاً إضافياً</td></tr><tr><td>يجب استخدام <code dir=\"ltr\">Status.Paid</code></td><td>يقبل النص <code dir=\"ltr\">&quot;PAID&quot;</code> مباشرة</td></tr></tbody></table></div>\n<div class=\"callout tip\">💡 كلاهما صحيح ومنتشر. ستجد enum كثيراً في Angular والمشاريع القديمة، والاتحادات أكثر في مشاريع React الحديثة.</div>\n<h2>ملخص الدرس</h2>\n<ul><li><code dir=\"ltr\">enum</code> يسمّي مجموعة ثوابت مرتبطة، والنصي أوضح من الرقمي.</li><li>الـ enum يبقى في JavaScript ككائن بعد الترجمة.</li><li>البديل الشائع: كائن <code dir=\"ltr\">as const</code> واتحاد حروفيات مستخرج منه.</li></ul>",
   "exercise": {
    "prompt": "<ol><li>عرّف <code dir=\"ltr\">enum Priority</code> نصياً بالقيم: <code dir=\"ltr\">Low = &quot;low&quot;</code> و <code dir=\"ltr\">Medium = &quot;medium&quot;</code> و <code dir=\"ltr\">High = &quot;high&quot;</code>.</li><li>اكتب دالة <code dir=\"ltr\">badge(p: Priority): string</code> تُرجع <code dir=\"ltr\">🟢 منخفضة</code> أو <code dir=\"ltr\">🟡 متوسطة</code> أو <code dir=\"ltr\">🔴 عالية</code>.</li><li>اكتب دالة <code dir=\"ltr\">sortByPriority</code> ترتب مصفوفة مهام تنازلياً حسب الأولوية (عالية أولاً).</li></ol>",
    "starter": "// enum والدالتان هنا\n\nconst tasks = [\n  { title: \"تحديث الموقع\", priority: Priority.Low },\n  { title: \"إصلاح خطأ الدفع\", priority: Priority.High },\n  { title: \"كتابة التقرير\", priority: Priority.Medium }\n];\n\nfor (const t of sortByPriority(tasks)) {\n  console.log(`${badge(t.priority)} ${t.title}`);\n}",
    "expected": "🔴 عالية إصلاح خطأ الدفع\n🟡 متوسطة كتابة التقرير\n🟢 منخفضة تحديث الموقع",
    "solution": "enum Priority {\n  Low = \"low\",\n  Medium = \"medium\",\n  High = \"high\"\n}\n\nfunction badge(p: Priority): string {\n  switch (p) {\n    case Priority.Low: return \"🟢 منخفضة\";\n    case Priority.Medium: return \"🟡 متوسطة\";\n    case Priority.High: return \"🔴 عالية\";\n  }\n}\n\nconst weight: Record<Priority, number> = { low: 1, medium: 2, high: 3 };\n\nfunction sortByPriority<T extends { priority: Priority }>(items: T[]): T[] {\n  return [...items].sort((a, b) => weight[b.priority] - weight[a.priority]);\n}\n\nconst tasks = [\n  { title: \"تحديث الموقع\", priority: Priority.Low },\n  { title: \"إصلاح خطأ الدفع\", priority: Priority.High },\n  { title: \"كتابة التقرير\", priority: Priority.Medium }\n];\n\nfor (const t of sortByPriority(tasks)) {\n  console.log(`${badge(t.priority)} ${t.title}`);\n}"
   },
   "quiz": [
    {
     "q": "ما القيمة الافتراضية لأول عنصر في enum رقمي؟",
     "o": [
      "0",
      "1",
      "undefined"
     ],
     "a": 0,
     "why": "التعداد الرقمي يبدأ من الصفر."
    },
    {
     "q": "ما ميزة enum النصي على الرقمي؟",
     "o": [
      "القيم مفهومة عند ظهورها في قاعدة البيانات والسجلات",
      "أسرع",
      "لا ميزة"
     ],
     "a": 0,
     "why": "&quot;PAID&quot; أوضح من 1."
    },
    {
     "q": "ما الفرق المهم بين enum والأنواع الأخرى في TypeScript؟",
     "o": [
      "enum يبقى ككائن حقيقي في JavaScript بعد الترجمة",
      "enum يُحذف تماماً",
      "enum لا يعمل مع switch"
     ],
     "a": 0,
     "why": "بقية الأنواع تختفي عند الترجمة."
    }
   ]
  },
  {
   "body": "<h2>الأنواع من الأنواع</h2>\n<p>في هذا الدرس نجمع أداتين تحوّلان الأنواع: <code dir=\"ltr\">keyof</code> لأسماء الخصائص، و <code dir=\"ltr\">typeof</code> لاستخراج نوع من قيمة موجودة.</p>\n<h2>keyof: أسماء الخصائص كنوع</h2>\n<div class=\"code-block src\"><span class=\"code-label\">TypeScript</span><pre dir=\"ltr\"><code>interface Settings {\n  theme: string;\n  fontSize: number;\n  notifications: boolean;\n}\n\ntype SettingKey = keyof Settings;\n\nfunction describeKey(key: SettingKey): string {\n  return `الإعداد: ${key}`;\n}\n\nconsole.log(describeKey(&quot;fontSize&quot;));\nconsole.log(describeKey(&quot;language&quot;));</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><div class=\"out-errs\"><div class=\"sql-err\" dir=\"ltr\">⚠️ سطر 14: Argument of type &#x27;&quot;language&quot;&#x27; is not assignable to parameter of type &#x27;keyof Settings&#x27;.</div></div></div>\n<p><code dir=\"ltr\">keyof Settings</code> يساوي <code dir=\"ltr\">&quot;theme&quot; | &quot;fontSize&quot; | &quot;notifications&quot;</code>، وعند إضافة خاصية للواجهة يتحدث تلقائياً.</p>\n<h2>typeof: نوع من قيمة</h2>\n<p><code dir=\"ltr\">typeof</code> في سياق الأنواع تستخرج نوع متغير موجود:</p>\n<div class=\"code-block src\"><span class=\"code-label\">TypeScript</span><pre dir=\"ltr\"><code>const defaultUser = {\n  name: &quot;ضيف&quot;,\n  language: &quot;ar&quot;,\n  points: 0\n};\n\ntype User = typeof defaultUser;\n\nconst u: User = { name: &quot;عهود&quot;, language: &quot;en&quot;, points: 120 };\nconsole.log(u.points);\n\nconst bad: User = { name: &quot;ناقص&quot; };</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><div class=\"out-errs\"><div class=\"sql-err\" dir=\"ltr\">⚠️ سطر 12: Type &#x27;{ name: string; }&#x27; is missing the following properties from type &#x27;{ name: string; language: string; points: number; }&#x27;: language, points</div></div></div>\n<p>مفيدة عندما يكون لديك كائن إعدادات أو بيانات افتراضية، وتريد نوعه دون كتابته مرتين.</p>\n<h2>الدمج: keyof typeof</h2>\n<p>النمط الأشهر: مفاتيح كائن موجود كنوع:</p>\n<div class=\"code-block src\"><span class=\"code-label\">TypeScript</span><pre dir=\"ltr\"><code>const translations = {\n  hello: &quot;مرحباً&quot;,\n  bye: &quot;مع السلامة&quot;,\n  thanks: &quot;شكراً&quot;\n};\n\ntype TranslationKey = keyof typeof translations;\n\nfunction t(key: TranslationKey): string {\n  return translations[key];\n}\n\nconsole.log(t(&quot;thanks&quot;));\nconsole.log(t(&quot;welcome&quot;));</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><div class=\"out-errs\"><div class=\"sql-err\" dir=\"ltr\">⚠️ سطر 14: Argument of type &#x27;&quot;welcome&quot;&#x27; is not assignable to parameter of type &#x27;&quot;hello&quot;</div><div class=\"sql-err\" dir=\"ltr\">⚠️ &quot;bye&quot;</div><div class=\"sql-err\" dir=\"ltr\">⚠️ &quot;thanks&quot;&#x27;.</div></div></div>\n<p>دالة الترجمة <code dir=\"ltr\">t</code> لا تقبل إلا مفاتيح موجودة فعلاً، والمحرر يقترحها عليك. هكذا تعمل مكتبات الترجمة الاحترافية.</p>\n<h2>الأنواع المعيّنة (Mapped Types)</h2>\n<p><code dir=\"ltr\">keyof</code> تفتح باباً متقدماً: إنشاء نوع بالمرور على خصائص نوع آخر. هكذا بُنيت <code dir=\"ltr\">Partial</code> نفسها:</p>\n<div class=\"code-block src\"><span class=\"code-label\">TypeScript</span><pre dir=\"ltr\"><code>type MyPartial&lt;T&gt; = { [K in keyof T]?: T[K] };\ntype Flags&lt;T&gt; = { [K in keyof T]: boolean };\n\ninterface Form { name: string; email: string }\n\nconst draft: MyPartial&lt;Form&gt; = { name: &quot;رامي&quot; };\nconst touched: Flags&lt;Form&gt; = { name: true, email: false };\nconsole.log(draft.name, touched.email);</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>رامي false</code></pre></div>\n<p><code dir=\"ltr\">[K in keyof T]</code> يعني: لكل خاصية K في T. و <code dir=\"ltr\">Flags&lt;Form&gt;</code> نوع يحدد لكل حقل في النموذج هل لمسه المستخدم، وهو نمط حقيقي في مكتبات النماذج.</p>\n<h2>ملخص الدرس</h2>\n<ul><li><code dir=\"ltr\">keyof T</code> اتحاد أسماء خصائص T.</li><li><code dir=\"ltr\">typeof value</code> (في سياق الأنواع) تستخرج نوع قيمة موجودة.</li><li><code dir=\"ltr\">keyof typeof obj</code> مفاتيح كائن حقيقي كنوع.</li><li><code dir=\"ltr\">{ [K in keyof T]: ... }</code> لإنشاء أنواع معيّنة جديدة.</li></ul>",
   "exercise": {
    "prompt": "<p>لديك كائن ألوان الموقع. المطلوب:</p>\n<ol><li>عرّف <code dir=\"ltr\">type ColorName = keyof typeof colors</code>.</li><li>اكتب دالة <code dir=\"ltr\">color(name: ColorName): string</code> تُرجع <code dir=\"ltr\">name = value</code>.</li><li>عرّف نوعاً معيّناً <code dir=\"ltr\">Usage</code> يربط كل اسم لون بعدد مرات استخدامه (<code dir=\"ltr\">number</code>)، وأنشئ متغيراً منه.</li></ol>",
    "starter": "const colors = {\n  primary: \"#1d4ed8\",\n  danger: \"#dc2626\",\n  success: \"#16a34a\"\n};\n\n// أكمل هنا\n\nconsole.log(color(\"primary\"));\nconsole.log(color(\"danger\"));\nconst usage: Usage = { primary: 12, danger: 2, success: 5 };\nconsole.log(usage.primary + usage.danger + usage.success);",
    "expected": "primary = #1d4ed8\ndanger = #dc2626\n19",
    "solution": "const colors = {\n  primary: \"#1d4ed8\",\n  danger: \"#dc2626\",\n  success: \"#16a34a\"\n};\n\ntype ColorName = keyof typeof colors;\n\nfunction color(name: ColorName): string {\n  return `${name} = ${colors[name]}`;\n}\n\ntype Usage = { [K in ColorName]: number };\n\nconsole.log(color(\"primary\"));\nconsole.log(color(\"danger\"));\nconst usage: Usage = { primary: 12, danger: 2, success: 5 };\nconsole.log(usage.primary + usage.danger + usage.success);"
   },
   "quiz": [
    {
     "q": "ما ناتج <code dir=\"ltr\">keyof { x: 1; y: 2 }</code>؟",
     "o": [
      "<code dir=\"ltr\">&quot;x&quot; | &quot;y&quot;</code>",
      "<code dir=\"ltr\">1 | 2</code>",
      "<code dir=\"ltr\">string</code>"
     ],
     "a": 0,
     "why": "keyof يعطي أسماء الخصائص."
    },
    {
     "q": "ماذا تفعل <code dir=\"ltr\">typeof config</code> في سياق الأنواع؟",
     "o": [
      "تستخرج نوع المتغير config",
      "تُرجع النص &quot;object&quot;",
      "تنسخ الكائن"
     ],
     "a": 0,
     "why": "في سياق الأنواع، typeof تعمل على مستوى الأنواع وليس وقت التشغيل."
    },
    {
     "q": "ماذا يعني <code dir=\"ltr\">{ [K in keyof T]: string }</code>؟",
     "o": [
      "نوع له نفس خصائص T لكن كل قيمها نصوص",
      "مصفوفة مفاتيح",
      "خطأ في الصيغة"
     ],
     "a": 0,
     "why": "هذا نوع معيّن (Mapped Type)."
    }
   ]
  }
 ],
 [
  {
   "body": "<h2>الأصناف بأنواع</h2>\n<p>الأصناف في TypeScript هي أصناف JavaScript نفسها، مع إضافة <strong>أنواع للخصائص</strong> و<strong>محددات الوصول</strong>:</p>\n<div class=\"code-block src\"><span class=\"code-label\">TypeScript</span><pre dir=\"ltr\"><code>class Account {\n  owner: string;\n  private balance: number;\n\n  constructor(owner: string, initial: number) {\n    this.owner = owner;\n    this.balance = initial;\n  }\n\n  deposit(amount: number): void {\n    if (amount &lt;= 0) throw new Error(&quot;مبلغ غير صالح&quot;);\n    this.balance += amount;\n  }\n\n  getBalance(): number {\n    return this.balance;\n  }\n}\n\nconst acc = new Account(&quot;ليان&quot;, 100);\nacc.deposit(50);\nconsole.log(`${acc.owner}: ${acc.getBalance()}`);\nconsole.log(acc.balance);</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><div class=\"out-errs\"><div class=\"sql-err\" dir=\"ltr\">⚠️ سطر 23: Property &#x27;balance&#x27; is private and only accessible within class &#x27;Account&#x27;.</div></div></div>\n<h2>محددات الوصول</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>المحدد</th><th>يمكن الوصول إليه من</th></tr></thead><tbody><tr><td><code dir=\"ltr\">public</code> (الافتراضي)</td><td>أي مكان</td></tr><tr><td><code dir=\"ltr\">private</code></td><td>داخل الصنف فقط</td></tr><tr><td><code dir=\"ltr\">protected</code></td><td>داخل الصنف والأصناف التي ترثه</td></tr><tr><td><code dir=\"ltr\">readonly</code></td><td>قراءة فقط بعد الإنشاء</td></tr></tbody></table></div>\n<div class=\"callout tip\">💡 <code dir=\"ltr\">private</code> في TypeScript فحص وقت الترجمة فقط. للخصوصية الحقيقية وقت التشغيل أيضاً استخدم <code dir=\"ltr\">#balance</code> الخاصة بـ JavaScript.</div>\n<h2>اختصار المُنشئ (Parameter Properties)</h2>\n<p>تكرار <code dir=\"ltr\">this.x = x</code> متعب. ضع المحدد قبل المعامل مباشرة:</p>\n<div class=\"code-block src\"><span class=\"code-label\">TypeScript</span><pre dir=\"ltr\"><code>class Product {\n  constructor(\n    public readonly id: number,\n    public name: string,\n    private cost: number\n  ) {}\n\n  priceWithMargin(margin: number): number {\n    return Math.round(this.cost * (1 + margin));\n  }\n}\n\nconst p = new Product(1, &quot;طاولة&quot;, 300);\nconsole.log(p.name, p.priceWithMargin(0.25));\np.id = 2;</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><div class=\"out-errs\"><div class=\"sql-err\" dir=\"ltr\">⚠️ سطر 15: Cannot assign to &#x27;id&#x27; because it is a read-only property.</div></div></div>\n<p><code dir=\"ltr\">public readonly id: number</code> في المُنشئ يعلن الخاصية ويهيئها في خطوة واحدة.</p>\n<h2>الوراثة و protected</h2>\n<div class=\"code-block src\"><span class=\"code-label\">TypeScript</span><pre dir=\"ltr\"><code>class Employee {\n  constructor(public name: string, protected salary: number) {}\n\n  info(): string {\n    return `${this.name}`;\n  }\n}\n\nclass Manager extends Employee {\n  constructor(name: string, salary: number, private bonus: number) {\n    super(name, salary);\n  }\n\n  totalPay(): number {\n    return this.salary + this.bonus;\n  }\n}\n\nconst m = new Manager(&quot;فهد&quot;, 15000, 3000);\nconsole.log(m.info(), m.totalPay());\nconsole.log(m.salary);</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><div class=\"out-errs\"><div class=\"sql-err\" dir=\"ltr\">⚠️ سطر 21: Property &#x27;salary&#x27; is protected and only accessible within class &#x27;Employee&#x27; and its subclasses.</div></div></div>\n<p>الصنف الابن يصل إلى <code dir=\"ltr\">salary</code> لأنها <code dir=\"ltr\">protected</code>، أما الكود الخارجي فلا.</p>\n<h2>implements: الصنف يلتزم بواجهة</h2>\n<div class=\"code-block src\"><span class=\"code-label\">TypeScript</span><pre dir=\"ltr\"><code>interface Shape {\n  area(): number;\n  name: string;\n}\n\nclass Square implements Shape {\n  name = &quot;مربع&quot;;\n  constructor(private side: number) {}\n  area() { return this.side ** 2; }\n}\n\nclass Circle implements Shape {\n  name = &quot;دائرة&quot;;\n  constructor(private r: number) {}\n  area() { return Math.round(Math.PI * this.r ** 2); }\n}\n\nconst shapes: Shape[] = [new Square(4), new Circle(3)];\nshapes.forEach(s =&gt; console.log(`${s.name}: ${s.area()}`));</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>مربع: 16\nدائرة: 28</code></pre></div>\n<p>إذا نسي صنف تنفيذ <code dir=\"ltr\">area()</code> يرفضه المترجم.</p>\n<h2>ملخص الدرس</h2>\n<ul><li>الأصناف بأنواع للخصائص والمعاملات وقيم الإرجاع.</li><li><code dir=\"ltr\">public</code> و <code dir=\"ltr\">private</code> و <code dir=\"ltr\">protected</code> و <code dir=\"ltr\">readonly</code> للتحكم بالوصول.</li><li><code dir=\"ltr\">constructor(public name: string)</code> يعلن الخاصية ويهيئها معاً.</li><li><code dir=\"ltr\">implements Interface</code> يُلزم الصنف بشكل محدد.</li></ul>",
   "exercise": {
    "prompt": "<p>أنشئ صنف <code dir=\"ltr\">Counter</code>:</p>\n<ul><li>خاصية <code dir=\"ltr\">private count</code> تبدأ من <code dir=\"ltr\">0</code>.</li><li>خاصية <code dir=\"ltr\">readonly name</code> نصية تُمرر في المُنشئ (استخدم الاختصار).</li><li>طريقة <code dir=\"ltr\">increment(by: number = 1): this</code> تزيد العدّاد وتُرجع <code dir=\"ltr\">this</code> لتسمح بالسلسلة.</li><li>طريقة <code dir=\"ltr\">value(): number</code>.</li></ul>",
    "starter": "// الصنف هنا\n\nconst visits = new Counter(\"الزيارات\");\nvisits.increment().increment(5).increment();\nconsole.log(`${visits.name}: ${visits.value()}`);",
    "expected": "الزيارات: 7",
    "solution": "class Counter {\n  private count = 0;\n\n  constructor(public readonly name: string) {}\n\n  increment(by: number = 1): this {\n    this.count += by;\n    return this;\n  }\n\n  value(): number {\n    return this.count;\n  }\n}\n\nconst visits = new Counter(\"الزيارات\");\nvisits.increment().increment(5).increment();\nconsole.log(`${visits.name}: ${visits.value()}`);"
   },
   "quiz": [
    {
     "q": "من أين يمكن الوصول إلى خاصية <code dir=\"ltr\">protected</code>؟",
     "o": [
      "من داخل الصنف ومن الأصناف التي ترثه",
      "من أي مكان",
      "من داخل الصنف فقط"
     ],
     "a": 0,
     "why": "protected تتيح الوصول للأبناء دون الكود الخارجي."
    },
    {
     "q": "ماذا يفعل <code dir=\"ltr\">constructor(private api: string) {}</code>؟",
     "o": [
      "يعلن خاصية خاصة api ويهيئها بقيمة المعامل",
      "لا شيء، المُنشئ فارغ",
      "خطأ في الصيغة"
     ],
     "a": 0,
     "why": "هذا اختصار Parameter Properties."
    },
    {
     "q": "ما وظيفة <code dir=\"ltr\">implements</code> في صنف؟",
     "o": [
      "إلزام الصنف بتنفيذ شكل الواجهة",
      "وراثة كود الواجهة",
      "إنشاء واجهة جديدة"
     ],
     "a": 0,
     "why": "الواجهة لا تحتوي كوداً لتورثه، بل عقداً للالتزام به."
    }
   ]
  },
  {
   "body": "<h2>صنف لا يُنشأ منه مباشرة</h2>\n<p><strong>الصنف المجرد (abstract)</strong> قالب ناقص عمداً: يحدد ما يجب على الأبناء تنفيذه، ويوفر كوداً مشتركاً، لكن لا يمكن إنشاء كائن منه مباشرة.</p>\n<div class=\"code-block src\"><span class=\"code-label\">TypeScript</span><pre dir=\"ltr\"><code>abstract class Notification {\n  constructor(protected recipient: string) {}\n\n  abstract channel(): string;\n  abstract format(message: string): string;\n\n  send(message: string): void {\n    console.log(`[${this.channel()}] إلى ${this.recipient}: ${this.format(message)}`);\n  }\n}\n\nclass EmailNotification extends Notification {\n  channel() { return &quot;بريد&quot;; }\n  format(message: string) { return `&lt;p&gt;${message}&lt;/p&gt;`; }\n}\n\nclass SmsNotification extends Notification {\n  channel() { return &quot;SMS&quot;; }\n  format(message: string) { return message.slice(0, 20); }\n}\n\nconst list: Notification[] = [\n  new EmailNotification(&quot;a@mail.com&quot;),\n  new SmsNotification(&quot;0500000000&quot;)\n];\nlist.forEach(n =&gt; n.send(&quot;تم تأكيد طلبك رقم 1234 بنجاح&quot;));</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>[بريد] إلى a@mail.com: &lt;p&gt;تم تأكيد طلبك رقم 1234 بنجاح&lt;/p&gt;\n[SMS] إلى 0500000000: تم تأكيد طلبك رقم 12</code></pre></div>\n<ul><li><code dir=\"ltr\">abstract channel(): string;</code> طريقة بلا جسم، <strong>يجب</strong> على كل ابن تنفيذها.</li><li><code dir=\"ltr\">send</code> كود مشترك يستخدم الطرق المجردة دون أن يعرف تفاصيلها.</li></ul>\n<h2>لا يمكن إنشاؤه مباشرة</h2>\n<div class=\"code-block src\"><span class=\"code-label\">TypeScript</span><pre dir=\"ltr\"><code>abstract class Base {\n  abstract run(): void;\n}\n\nconst b = new Base();</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><div class=\"out-errs\"><div class=\"sql-err\" dir=\"ltr\">⚠️ سطر 5: Cannot create an instance of an abstract class.</div></div></div>\n<h2>والابن يجب أن ينفّذ كل شيء</h2>\n<div class=\"code-block src\"><span class=\"code-label\">TypeScript</span><pre dir=\"ltr\"><code>abstract class Base {\n  abstract run(): void;\n  abstract stop(): void;\n}\n\nclass Task extends Base {\n  run() { console.log(&quot;يعمل&quot;); }\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><div class=\"out-errs\"><div class=\"sql-err\" dir=\"ltr\">⚠️ سطر 6: Non-abstract class &#x27;Task&#x27; does not implement inherited abstract member stop from class &#x27;Base&#x27;.</div></div></div>\n<h2>abstract class أم interface؟</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>abstract class</th><th>interface</th></tr></thead><tbody><tr><td>يمكن أن تحتوي كوداً مشتركاً</td><td>شكل فقط بلا كود</td></tr><tr><td>وراثة واحدة <code dir=\"ltr\">extends</code></td><td>تنفيذ عدة واجهات <code dir=\"ltr\">implements</code></td></tr><tr><td>موجودة وقت التشغيل</td><td>تختفي عند الترجمة</td></tr><tr><td>مناسبة لـ &quot;نوع من&quot; بسلوك مشترك</td><td>مناسبة لـ &quot;قادر على&quot;</td></tr></tbody></table></div>\n<div class=\"callout tip\">💡 هذا النمط يسمى <strong>Template Method</strong>: الأب يحدد خطوات العملية، والأبناء يملؤون التفاصيل. ستراه في أطر العمل مثل NestJS و Angular.</div>\n<h2>ملخص الدرس</h2>\n<ul><li><code dir=\"ltr\">abstract class</code> قالب لا يُنشأ منه مباشرة.</li><li><code dir=\"ltr\">abstract method()</code> طريقة يجب على كل ابن تنفيذها.</li><li>الأب يوفر كوداً مشتركاً يستخدم الطرق المجردة.</li><li>استخدم الواجهة للشكل فقط، والصنف المجرد عند وجود سلوك مشترك.</li></ul>",
   "exercise": {
    "prompt": "<ol><li>أنشئ صنفاً مجرداً <code dir=\"ltr\">Report</code> فيه: طريقة مجردة <code dir=\"ltr\">title(): string</code>، وطريقة مجردة <code dir=\"ltr\">rows(): string[]</code>، وطريقة عادية <code dir=\"ltr\">render(): string</code> تُرجع العنوان ثم كل صف في سطر جديد مسبوقاً بـ <code dir=\"ltr\">- </code>.</li><li>أنشئ <code dir=\"ltr\">SalesReport</code> ترث منه: العنوان <code dir=\"ltr\">تقرير المبيعات</code>، والصفوف <code dir=\"ltr\">[&quot;يناير: 1200&quot;, &quot;فبراير: 950&quot;]</code>.</li></ol>",
    "starter": "// الأصناف هنا\n\nconst report: Report = new SalesReport();\nconsole.log(report.render());",
    "expected": "تقرير المبيعات\n- يناير: 1200\n- فبراير: 950",
    "solution": "abstract class Report {\n  abstract title(): string;\n  abstract rows(): string[];\n\n  render(): string {\n    return [this.title(), ...this.rows().map(r => `- ${r}`)].join(\"\\n\");\n  }\n}\n\nclass SalesReport extends Report {\n  title() {\n    return \"تقرير المبيعات\";\n  }\n  rows() {\n    return [\"يناير: 1200\", \"فبراير: 950\"];\n  }\n}\n\nconst report: Report = new SalesReport();\nconsole.log(report.render());"
   },
   "quiz": [
    {
     "q": "هل يمكن كتابة <code dir=\"ltr\">new Shape()</code> إذا كان Shape صنفاً مجرداً؟",
     "o": [
      "لا، خطأ ترجمة",
      "نعم",
      "فقط إذا لم يحتوِ طرقاً مجردة"
     ],
     "a": 0,
     "why": "الصنف المجرد يُستخدم عبر أبنائه فقط."
    },
    {
     "q": "ماذا يحدث إذا لم ينفّذ الابن طريقة مجردة من الأب؟",
     "o": [
      "خطأ ترجمة يذكر الطريقة الناقصة",
      "تُنفَّذ طريقة فارغة تلقائياً",
      "خطأ وقت التشغيل فقط"
     ],
     "a": 0,
     "why": "المترجم يضمن اكتمال التنفيذ."
    },
    {
     "q": "متى تختار abstract class بدل interface؟",
     "o": [
      "عندما تريد مشاركة كود مشترك بين الأبناء",
      "دائماً",
      "عندما تريد تنفيذ عدة أشكال"
     ],
     "a": 0,
     "why": "الواجهة لا تحتوي كوداً."
    }
   ]
  },
  {
   "body": "<h2>تقسيم المشروع إلى وحدات</h2>\n<p>مثل JavaScript الحديثة، كل ملف TypeScript <strong>وحدة (Module)</strong> تُصدّر وتستورد. والإضافة الجديدة: تصدير <strong>الأنواع</strong> واستيرادها أيضاً.</p>\n<div class=\"code-block src\"><span class=\"code-label\">TypeScript</span><pre dir=\"ltr\"><code>// ملف models/user.ts\nexport interface User {\n  id: number;\n  name: string;\n}\n\nexport type Role = &quot;admin&quot; | &quot;member&quot;;\n\nexport function createUser(name: string): User {\n  return { id: Date.now(), name };\n}</code></pre></div>\n<div class=\"code-block src\"><span class=\"code-label\">TypeScript</span><pre dir=\"ltr\"><code>// ملف app.ts\nimport { createUser } from &quot;./models/user&quot;;\nimport type { User, Role } from &quot;./models/user&quot;;\n\nconst u: User = createUser(&quot;نجلاء&quot;);\nconst role: Role = &quot;admin&quot;;</code></pre></div>\n<p><code dir=\"ltr\">import type</code> يوضح أن المستورد <strong>نوع فقط</strong>، فيُحذف تماماً عند الترجمة. هذا أوضح للقارئ، ويمنع تحميل ملفات بلا داعٍ.</p>\n<h2>ملفات التعريف .d.ts</h2>\n<p>ماذا لو استخدمت مكتبة مكتوبة بـ JavaScript؟ لا توجد أنواع! الحل: <strong>ملف تعريف (Declaration File)</strong> امتداده <code dir=\"ltr\">.d.ts</code>، يصف الأنواع فقط دون أي كود تنفيذي:</p>\n<div class=\"code-block src\"><span class=\"code-label\">TypeScript</span><pre dir=\"ltr\"><code>// ملف price-utils.d.ts\nexport declare function formatPrice(value: number, currency?: string): string;\nexport declare const VERSION: string;</code></pre></div>\n<h2>مكتبات npm و DefinitelyTyped</h2>\n<ul><li>مكتبات حديثة كثيرة <strong>تتضمن</strong> ملفات <code dir=\"ltr\">.d.ts</code> بداخلها، مثل axios و zod.</li><li>لغيرها، يوجد مستودع مجتمعي ضخم اسمه <strong>DefinitelyTyped</strong>، وتثبت منه الأنواع هكذا:</li></ul>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>npm install --save-dev @types/node\nnpm install --save-dev @types/express\nnpm install --save-dev @types/lodash</code></pre></div>\n<div class=\"callout tip\">💡 إذا ظهر لك الخطأ <code dir=\"ltr\">Could not find a declaration file for module &#x27;x&#x27;</code>، جرّب أولاً <code dir=\"ltr\">npm i -D @types/x</code>.</div>\n<h2>declare: وصف ما هو موجود أصلاً</h2>\n<p>الكلمة <code dir=\"ltr\">declare</code> تخبر TypeScript: &quot;هذا الشيء موجود وقت التشغيل، ثق بي ولا تولّد له كوداً&quot;. مثلاً متغير عام يضيفه سكربت خارجي في الصفحة:</p>\n<div class=\"code-block src\"><span class=\"code-label\">TypeScript</span><pre dir=\"ltr\"><code>(globalThis as any).APP_CONFIG = { version: &quot;2.1.0&quot;, debug: false };\n\ndeclare const APP_CONFIG: { version: string; debug: boolean };\n\nconsole.log(`الإصدار ${APP_CONFIG.version}`);\nconsole.log(APP_CONFIG.debug ? &quot;وضع التطوير&quot; : &quot;وضع الإنتاج&quot;);</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>الإصدار 2.1.0\nوضع الإنتاج</code></pre></div>\n<p>بدون سطر <code dir=\"ltr\">declare</code> لكانت TypeScript لا تعرف <code dir=\"ltr\">APP_CONFIG</code> فترفض الكود.</p>\n<h2>توسيع الأنواع الموجودة</h2>\n<div class=\"code-block src\"><span class=\"code-label\">TypeScript</span><pre dir=\"ltr\"><code>interface Array&lt;T&gt; {\n  last(): T | undefined;\n}\n\nArray.prototype.last = function () {\n  return this[this.length - 1];\n};\n\nconsole.log([3, 7, 9].last());</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>9</code></pre></div>\n<p>بفضل <strong>دمج الواجهات</strong> أضفنا طريقة لنوع <code dir=\"ltr\">Array</code> المدمج. (للتوضيح فقط: تعديل النماذج المدمجة ليس ممارسة جيدة في مشاريعك.)</p>\n<h2>ملخص الدرس</h2>\n<ul><li><code dir=\"ltr\">export</code> و <code dir=\"ltr\">import</code> للأنواع كما للقيم، و <code dir=\"ltr\">import type</code> للأنواع فقط.</li><li>ملفات <code dir=\"ltr\">.d.ts</code> تصف أنواع كود JavaScript دون تنفيذ.</li><li><code dir=\"ltr\">@types/اسم-المكتبة</code> من DefinitelyTyped لأنواع المكتبات القديمة.</li><li><code dir=\"ltr\">declare</code> لوصف ما هو موجود وقت التشغيل.</li></ul>",
   "exercise": {
    "prompt": "<p>في الكود، سكربت تحليلات خارجي يضيف كائناً عاماً <code dir=\"ltr\">analytics</code>. لكن TypeScript لا تعرفه فترفض الكود.</p>\n<p>أضف سطر <code dir=\"ltr\">declare const analytics</code> بالنوع المناسب: كائن فيه طريقة <code dir=\"ltr\">track(event: string, value?: number): void</code> وخاصية <code dir=\"ltr\">userId</code> نصية. <strong>لا تعدّل</strong> باقي الأسطر.</p>",
    "starter": "// سكربت خارجي (لا تعدّل)\n(globalThis as any).analytics = {\n  userId: \"u-77\",\n  track(event: string, value?: number) {\n    console.log(`تتبع: ${event}${value !== undefined ? \" = \" + value : \"\"}`);\n  }\n};\n\n// أضف التعريف هنا\n\nanalytics.track(\"فتح الصفحة\");\nanalytics.track(\"شراء\", 250);\nconsole.log(analytics.userId);",
    "expected": "تتبع: فتح الصفحة\nتتبع: شراء = 250\nu-77",
    "solution": "// سكربت خارجي (لا تعدّل)\n(globalThis as any).analytics = {\n  userId: \"u-77\",\n  track(event: string, value?: number) {\n    console.log(`تتبع: ${event}${value !== undefined ? \" = \" + value : \"\"}`);\n  }\n};\n\ndeclare const analytics: {\n  userId: string;\n  track(event: string, value?: number): void;\n};\n\nanalytics.track(\"فتح الصفحة\");\nanalytics.track(\"شراء\", 250);\nconsole.log(analytics.userId);"
   },
   "quiz": [
    {
     "q": "ما محتوى ملف <code dir=\"ltr\">.d.ts</code>؟",
     "o": [
      "تعريفات أنواع فقط دون كود تنفيذي",
      "كود JavaScript مترجم",
      "إعدادات المشروع"
     ],
     "a": 0,
     "why": "يصف شكل كود موجود في مكان آخر."
    },
    {
     "q": "كيف تحصل على أنواع مكتبة express؟",
     "o": [
      "<code dir=\"ltr\">npm install -D @types/express</code>",
      "<code dir=\"ltr\">npm install express-types</code>",
      "تكتبها يدوياً دائماً"
     ],
     "a": 0,
     "why": "مستودع DefinitelyTyped يوفر أنواع آلاف المكتبات."
    },
    {
     "q": "ما فائدة <code dir=\"ltr\">import type</code>؟",
     "o": [
      "توضيح أن المستورد نوع فقط، فيُحذف كلياً عند الترجمة",
      "استيراد أسرع للقيم",
      "استيراد ملفات JSON"
     ],
     "a": 0,
     "why": "يميّز بين الأنواع والقيم."
    }
   ]
  }
 ],
 [
  {
   "body": "<h2>TypeScript و React: ثنائي مثالي</h2>\n<p>معظم مشاريع React الحديثة تُكتب بـ TypeScript. تنشئ مشروعاً جاهزاً هكذا:</p>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>npm create vite@latest my-app -- --template react-ts</code></pre></div>\n<p>وتصبح ملفات المكونات بامتداد <code dir=\"ltr\">.tsx</code>.</p>\n<div class=\"callout tip\">💡 محرر الدورة لا يشغّل React، لذلك الأمثلة المكتوبة بـ JSX للقراءة، والتمرين يطبّق نفس أنماط الأنواع بكود يعمل.</div>\n<h2>أنواع خصائص المكوّن (Props)</h2>\n<div class=\"code-block src\"><span class=\"code-label\">TypeScript</span><pre dir=\"ltr\"><code>interface ButtonProps {\n  label: string;\n  variant?: &quot;primary&quot; | &quot;secondary&quot;;\n  disabled?: boolean;\n  onClick: () =&gt; void;\n}\n\nfunction Button({ label, variant = &quot;primary&quot;, disabled = false, onClick }: ButtonProps) {\n  return (\n    &lt;button className={`btn btn-${variant}`} disabled={disabled} onClick={onClick}&gt;\n      {label}\n    &lt;/button&gt;\n  );\n}\n\n// الاستخدام\n&lt;Button label=&quot;حفظ&quot; onClick={() =&gt; save()} /&gt;\n&lt;Button label=&quot;حذف&quot; variant=&quot;danger&quot; onClick={remove} /&gt;  // خطأ: &quot;danger&quot; غير مسموح</code></pre></div>\n<p>المحرر يقترح الخصائص المتاحة، ويرفض القيم الخاطئة، ويذكّرك بالخصائص الإلزامية الناقصة.</p>\n<h2>الحالة (State)</h2>\n<div class=\"code-block src\"><span class=\"code-label\">TypeScript</span><pre dir=\"ltr\"><code>const [count, setCount] = useState(0);                 // يُستنتج number\nconst [user, setUser] = useState&lt;User | null&gt;(null);   // نحدد النوع عندما تبدأ بـ null\nconst [todos, setTodos] = useState&lt;Todo[]&gt;([]);        // ونحدده للمصفوفات الفارغة</code></pre></div>\n<h2>الأحداث</h2>\n<div class=\"code-block src\"><span class=\"code-label\">TypeScript</span><pre dir=\"ltr\"><code>function SearchBox() {\n  const [query, setQuery] = useState(&quot;&quot;);\n\n  const handleChange = (e: React.ChangeEvent&lt;HTMLInputElement&gt;) =&gt; {\n    setQuery(e.target.value);\n  };\n\n  const handleSubmit = (e: React.FormEvent&lt;HTMLFormElement&gt;) =&gt; {\n    e.preventDefault();\n  };\n\n  return &lt;form onSubmit={handleSubmit}&gt;&lt;input value={query} onChange={handleChange} /&gt;&lt;/form&gt;;\n}</code></pre></div>\n<h2>الـ Reducer: المكان الذي تتألق فيه الأنواع</h2>\n<p><code dir=\"ltr\">useReducer</code> مع <strong>اتحاد مميَّز</strong> للأفعال هو أقوى استخدام لـ TypeScript في React. والجميل أن الـ reducer دالة عادية يمكن تجربتها هنا:</p>\n<div class=\"code-block src\"><span class=\"code-label\">TypeScript</span><pre dir=\"ltr\"><code>interface CartState {\n  items: { id: number; qty: number }[];\n}\n\ntype CartAction =\n  | { type: &quot;add&quot;; id: number }\n  | { type: &quot;remove&quot;; id: number }\n  | { type: &quot;clear&quot; };\n\nfunction cartReducer(state: CartState, action: CartAction): CartState {\n  switch (action.type) {\n    case &quot;add&quot;: {\n      const exists = state.items.find(i =&gt; i.id === action.id);\n      return {\n        items: exists\n          ? state.items.map(i =&gt; (i.id === action.id ? { ...i, qty: i.qty + 1 } : i))\n          : [...state.items, { id: action.id, qty: 1 }]\n      };\n    }\n    case &quot;remove&quot;:\n      return { items: state.items.filter(i =&gt; i.id !== action.id) };\n    case &quot;clear&quot;:\n      return { items: [] };\n  }\n}\n\nlet state: CartState = { items: [] };\nstate = cartReducer(state, { type: &quot;add&quot;, id: 7 });\nstate = cartReducer(state, { type: &quot;add&quot;, id: 7 });\nstate = cartReducer(state, { type: &quot;add&quot;, id: 3 });\nstate = cartReducer(state, { type: &quot;remove&quot;, id: 3 });\nconsole.log(state.items);</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>[{&quot;id&quot;:7,&quot;qty&quot;:2}]</code></pre></div>\n<p>داخل <code dir=\"ltr\">case &quot;add&quot;</code> تعرف TypeScript أن <code dir=\"ltr\">action.id</code> موجود. وإذا أرسلت فعلاً بنوع غير معرّف، أو نسيت <code dir=\"ltr\">id</code>، يُرفض الكود.</p>\n<h2>ملخص الدرس</h2>\n<ul><li>مشروع React بـ TypeScript: <code dir=\"ltr\">npm create vite@latest -- --template react-ts</code>.</li><li><code dir=\"ltr\">interface Props</code> لخصائص المكونات، و <code dir=\"ltr\">useState&lt;T&gt;</code> عندما لا يكفي الاستنتاج.</li><li>أنواع الأحداث مثل <code dir=\"ltr\">React.ChangeEvent&lt;HTMLInputElement&gt;</code>.</li><li>الـ reducer مع اتحاد مميَّز للأفعال يمنع أخطاء إدارة الحالة.</li></ul>",
   "exercise": {
    "prompt": "<p>اكتب <code dir=\"ltr\">todoReducer</code> لقائمة مهام بالأفعال التالية (اتحاد مميَّز):</p>\n<ul><li><code dir=\"ltr\">{ type: &quot;add&quot;; title: string }</code>: يضيف مهمة جديدة <code dir=\"ltr\">{ id, title, done: false }</code> حيث <code dir=\"ltr\">id</code> = عدد المهام الحالي + 1.</li><li><code dir=\"ltr\">{ type: &quot;toggle&quot;; id: number }</code>: يعكس <code dir=\"ltr\">done</code> للمهمة.</li><li><code dir=\"ltr\">{ type: &quot;clearDone&quot; }</code>: يحذف المهام المنتهية.</li></ul>",
    "starter": "interface Todo { id: number; title: string; done: boolean }\n\n// عرّف TodoAction واكتب todoReducer هنا\n\nlet todos: Todo[] = [];\ntodos = todoReducer(todos, { type: \"add\", title: \"شراء الخبز\" });\ntodos = todoReducer(todos, { type: \"add\", title: \"دفع الفاتورة\" });\ntodos = todoReducer(todos, { type: \"toggle\", id: 1 });\nconsole.log(todos.map(t => `${t.done ? \"✓\" : \"○\"} ${t.title}`).join(\" | \"));\ntodos = todoReducer(todos, { type: \"clearDone\" });\nconsole.log(todos.length);",
    "expected": "✓ شراء الخبز | ○ دفع الفاتورة\n1",
    "solution": "interface Todo { id: number; title: string; done: boolean }\n\ntype TodoAction =\n  | { type: \"add\"; title: string }\n  | { type: \"toggle\"; id: number }\n  | { type: \"clearDone\" };\n\nfunction todoReducer(state: Todo[], action: TodoAction): Todo[] {\n  switch (action.type) {\n    case \"add\":\n      return [...state, { id: state.length + 1, title: action.title, done: false }];\n    case \"toggle\":\n      return state.map(t => (t.id === action.id ? { ...t, done: !t.done } : t));\n    case \"clearDone\":\n      return state.filter(t => !t.done);\n  }\n}\n\nlet todos: Todo[] = [];\ntodos = todoReducer(todos, { type: \"add\", title: \"شراء الخبز\" });\ntodos = todoReducer(todos, { type: \"add\", title: \"دفع الفاتورة\" });\ntodos = todoReducer(todos, { type: \"toggle\", id: 1 });\nconsole.log(todos.map(t => `${t.done ? \"✓\" : \"○\"} ${t.title}`).join(\" | \"));\ntodos = todoReducer(todos, { type: \"clearDone\" });\nconsole.log(todos.length);"
   },
   "quiz": [
    {
     "q": "ما امتداد ملفات مكونات React المكتوبة بـ TypeScript؟",
     "o": [
      "<code dir=\"ltr\">.tsx</code>",
      "<code dir=\"ltr\">.ts</code>",
      "<code dir=\"ltr\">.jsx</code>"
     ],
     "a": 0,
     "why": "tsx تسمح بكتابة JSX مع الأنواع."
    },
    {
     "q": "متى تحتاج كتابة <code dir=\"ltr\">useState&lt;User | null&gt;(null)</code>؟",
     "o": [
      "عندما تبدأ الحالة بـ null ولا تستطيع TypeScript استنتاج نوعها الكامل",
      "دائماً",
      "لا يجوز ذلك"
     ],
     "a": 0,
     "why": "من القيمة null وحدها لا يُعرف أن الحالة ستصبح User لاحقاً."
    },
    {
     "q": "لماذا يناسب الاتحاد المميَّز أفعال الـ reducer؟",
     "o": [
      "لأن TypeScript تعرف بيانات كل فعل داخل الـ case الخاص به وترفض الأفعال غير المعرّفة",
      "لأنه أسرع",
      "لأن React يشترطه"
     ],
     "a": 0,
     "why": "هذا يمنع فئة كاملة من أخطاء إدارة الحالة."
    }
   ]
  },
  {
   "body": "<h2>TypeScript على الخادم</h2>\n<p>Node.js و TypeScript يعملان معاً بسلاسة. إعداد مشروع خلفي:</p>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>npm init -y\nnpm install express\nnpm install -D typescript tsx @types/node @types/express\nnpx tsc --init</code></pre></div>\n<ul><li><code dir=\"ltr\">@types/node</code> أنواع Node.js المدمجة: <code dir=\"ltr\">process</code> و <code dir=\"ltr\">fs</code> و <code dir=\"ltr\">path</code>.</li><li><code dir=\"ltr\">tsx</code> يشغّل ملفات <code dir=\"ltr\">.ts</code> مباشرة أثناء التطوير: <code dir=\"ltr\">npx tsx watch src/server.ts</code>.</li><li>للإنتاج: <code dir=\"ltr\">npx tsc</code> ثم <code dir=\"ltr\">node dist/server.js</code>.</li></ul>\n<h2>خادم Express بأنواع</h2>\n<div class=\"code-block src\"><span class=\"code-label\">TypeScript</span><pre dir=\"ltr\"><code>import express, { Request, Response } from &quot;express&quot;;\n\ninterface Product { id: number; name: string; price: number }\nconst products: Product[] = [{ id: 1, name: &quot;ساعة&quot;, price: 450 }];\n\nconst app = express();\napp.use(express.json());\n\napp.get(&quot;/products/:id&quot;, (req: Request&lt;{ id: string }&gt;, res: Response&lt;Product | { error: string }&gt;) =&gt; {\n  const product = products.find(p =&gt; p.id === Number(req.params.id));\n  if (!product) return res.status(404).json({ error: &quot;غير موجود&quot; });\n  res.json(product);\n});\n\napp.listen(3000);</code></pre></div>\n<p>لاحظ أن <code dir=\"ltr\">req.params.id</code> <strong>نص دائماً</strong>، حتى لو كان الرابط <code dir=\"ltr\">/products/1</code>. الأنواع تذكّرك بتحويله.</p>\n<h2>الحقيقة المرّة: البيانات الخارجية</h2>\n<p>TypeScript تفحص كودك <strong>وقت الترجمة</strong>. لكن البيانات القادمة من الخارج (طلبات المستخدمين، و APIs، والملفات) تصل <strong>وقت التشغيل</strong>، ولا تضمن الأنواع شكلها:</p>\n<div class=\"code-block src\"><span class=\"code-label\">TypeScript</span><pre dir=\"ltr\"><code>interface Order { product: string; qty: number }\n\nconst body: string = &#x27;{&quot;product&quot;: &quot;قلم&quot;, &quot;qty&quot;: &quot;ثلاثة&quot;}&#x27;;\nconst order = JSON.parse(body) as Order;\n\nconsole.log(order.qty * 2);</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>NaN</code></pre></div>\n<p><code dir=\"ltr\">as Order</code> <strong>كذبة</strong> صدّقتها TypeScript: لا يوجد أي فحص فعلي، فوصل نص بدل رقم.</p>\n<h2>الحل: التحقق وقت التشغيل</h2>\n<p>اكتب دالة تتحقق فعلاً من الشكل:</p>\n<div class=\"code-block src\"><span class=\"code-label\">TypeScript</span><pre dir=\"ltr\"><code>interface Order { product: string; qty: number }\n\nfunction parseOrder(data: unknown): Order {\n  if (\n    typeof data === &quot;object&quot; &amp;&amp; data !== null &amp;&amp;\n    &quot;product&quot; in data &amp;&amp; typeof data.product === &quot;string&quot; &amp;&amp;\n    &quot;qty&quot; in data &amp;&amp; typeof data.qty === &quot;number&quot; &amp;&amp; data.qty &gt; 0\n  ) {\n    return { product: data.product, qty: data.qty };\n  }\n  throw new Error(&quot;بيانات الطلب غير صالحة&quot;);\n}\n\nfor (const body of [&#x27;{&quot;product&quot;:&quot;قلم&quot;,&quot;qty&quot;:3}&#x27;, &#x27;{&quot;product&quot;:&quot;قلم&quot;,&quot;qty&quot;:&quot;ثلاثة&quot;}&#x27;]) {\n  try {\n    const order = parseOrder(JSON.parse(body));\n    console.log(`طلب: ${order.qty} × ${order.product}`);\n  } catch (e) {\n    console.log((e as Error).message);\n  }\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>طلب: 3 × قلم\nبيانات الطلب غير صالحة</code></pre></div>\n<p>في المشاريع الحقيقية تُستخدم مكتبات مثل <strong>Zod</strong> تجعل هذا أقصر بكثير، وتستنتج النوع من قواعد التحقق نفسها:</p>\n<div class=\"code-block src\"><span class=\"code-label\">TypeScript</span><pre dir=\"ltr\"><code>import { z } from &quot;zod&quot;;\n\nconst OrderSchema = z.object({\n  product: z.string(),\n  qty: z.number().int().positive()\n});\ntype Order = z.infer&lt;typeof OrderSchema&gt;;\n\nconst order = OrderSchema.parse(req.body); // يرمي خطأ واضحاً إذا كان الشكل خاطئاً</code></pre></div>\n<h2>متغيرات البيئة</h2>\n<div class=\"code-block src\"><span class=\"code-label\">TypeScript</span><pre dir=\"ltr\"><code>const env: Record&lt;string, string | undefined&gt; = { PORT: &quot;8080&quot; };\n\nfunction requireEnv(name: string): string {\n  const value = env[name];\n  if (!value) throw new Error(`المتغير ${name} غير معرّف`);\n  return value;\n}\n\nconst port = Number(requireEnv(&quot;PORT&quot;));\nconsole.log(`الخادم على المنفذ ${port}`);\ntry {\n  requireEnv(&quot;DATABASE_URL&quot;);\n} catch (e) {\n  console.log((e as Error).message);\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>الخادم على المنفذ 8080\nالمتغير DATABASE_URL غير معرّف</code></pre></div>\n<p><code dir=\"ltr\">process.env.X</code> نوعها <code dir=\"ltr\">string | undefined</code> دائماً، فتحقق منها عند بدء التشغيل لتفشل مبكراً برسالة واضحة.</p>\n<h2>ملخص الدرس</h2>\n<ul><li><code dir=\"ltr\">@types/node</code> و <code dir=\"ltr\">@types/express</code> و <code dir=\"ltr\">tsx</code> لتطوير الخوادم.</li><li>TypeScript لا تتحقق من البيانات الخارجية وقت التشغيل، و <code dir=\"ltr\">as Type</code> لا يفحص شيئاً.</li><li>تحقق من المدخلات بدوال فحص أو بمكتبة مثل Zod.</li><li>تحقق من متغيرات البيئة عند بدء التشغيل.</li></ul>",
   "exercise": {
    "prompt": "<p>اكتب دالة <code dir=\"ltr\">parseUser(data: unknown): User</code> تتحقق من أن البيانات كائن فيه:</p>\n<ul><li><code dir=\"ltr\">name</code> نص غير فارغ</li><li><code dir=\"ltr\">age</code> رقم بين 0 و 120</li></ul>\n<p>وإلا ترمي <code dir=\"ltr\">Error</code> برسالة <code dir=\"ltr\">مستخدم غير صالح</code>. الحلقة في الأسفل جاهزة.</p>",
    "starter": "interface User { name: string; age: number }\n\nfunction parseUser(data: unknown): User {\n  return data as User;\n}\n\nconst inputs = ['{\"name\":\"لؤي\",\"age\":31}', '{\"name\":\"\",\"age\":20}', '{\"name\":\"سما\",\"age\":\"20\"}'];\nfor (const raw of inputs) {\n  try {\n    const u = parseUser(JSON.parse(raw));\n    console.log(`${u.name} (${u.age})`);\n  } catch (e) {\n    console.log((e as Error).message);\n  }\n}",
    "expected": "لؤي (31)\nمستخدم غير صالح\nمستخدم غير صالح",
    "solution": "interface User { name: string; age: number }\n\nfunction parseUser(data: unknown): User {\n  if (\n    typeof data === \"object\" && data !== null &&\n    \"name\" in data && typeof data.name === \"string\" && data.name.length > 0 &&\n    \"age\" in data && typeof data.age === \"number\" && data.age >= 0 && data.age <= 120\n  ) {\n    return { name: data.name, age: data.age };\n  }\n  throw new Error(\"مستخدم غير صالح\");\n}\n\nconst inputs = ['{\"name\":\"لؤي\",\"age\":31}', '{\"name\":\"\",\"age\":20}', '{\"name\":\"سما\",\"age\":\"20\"}'];\nfor (const raw of inputs) {\n  try {\n    const u = parseUser(JSON.parse(raw));\n    console.log(`${u.name} (${u.age})`);\n  } catch (e) {\n    console.log((e as Error).message);\n  }\n}"
   },
   "quiz": [
    {
     "q": "هل تضمن TypeScript شكل البيانات القادمة من طلب HTTP؟",
     "o": [
      "لا، الأنواع تُفحص وقت الترجمة والبيانات تصل وقت التشغيل",
      "نعم دائماً",
      "فقط مع Express"
     ],
     "a": 0,
     "why": "يجب التحقق منها وقت التشغيل."
    },
    {
     "q": "ماذا يفعل <code dir=\"ltr\">JSON.parse(text) as Order</code>؟",
     "o": [
      "يخبر TypeScript أن تعامل النتيجة كـ Order دون أي فحص فعلي",
      "يتحقق من أن النص يطابق Order",
      "يحوّل الأنواع تلقائياً"
     ],
     "a": 0,
     "why": "as تأكيد من المبرمج، وليس تحققاً."
    },
    {
     "q": "ما نوع <code dir=\"ltr\">process.env.PORT</code> في Node.js؟",
     "o": [
      "string | undefined",
      "number",
      "string"
     ],
     "a": 0,
     "why": "المتغير قد لا يكون معرّفاً."
    }
   ]
  },
  {
   "body": "<h2>من الكتابة إلى الاحتراف</h2>\n<p>أنهيت أدوات TypeScript الأساسية. في هذا الدرس الأخير نجمع <strong>الممارسات التي تميّز الكود الاحترافي</strong>، مع أمثلة على كل منها.</p>\n<h2>1. فعّل strict دائماً</h2>\n<p>لا تبدأ مشروعاً دون <code dir=\"ltr\">&quot;strict&quot;: true</code>، وأضف أيضاً <code dir=\"ltr\">noUncheckedIndexedAccess</code> لتجعل الوصول للمصفوفات آمناً.</p>\n<h2>2. لا any، واستخدم unknown</h2>\n<div class=\"code-block src\"><span class=\"code-label\">TypeScript</span><pre dir=\"ltr\"><code>function safeLength(x: unknown): number {\n  if (typeof x === &quot;string&quot; || Array.isArray(x)) return x.length;\n  return 0;\n}\nconsole.log(safeLength(&quot;TypeScript&quot;), safeLength(42));</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>10 0</code></pre></div>\n<h2>3. دع الاستنتاج يعمل</h2>\n<div class=\"code-block src\"><span class=\"code-label\">TypeScript</span><pre dir=\"ltr\"><code>// ❌ تكرار بلا فائدة\nconst total: number = 10;\nconst names: string[] = [&quot;a&quot;].map((x: string): string =&gt; x.toUpperCase());\n\n// ✅ أنظف، والأنواع نفسها\nconst total = 10;\nconst names = [&quot;a&quot;].map(x =&gt; x.toUpperCase());</code></pre></div>\n<p>اكتب الأنواع على <strong>حدود</strong> الكود: معاملات الدوال، وأنواع إرجاع الدوال العامة، والبيانات المشتركة بين الوحدات.</p>\n<h2>4. اجعل الحالات المستحيلة غير ممكنة التمثيل</h2>\n<div class=\"code-block src\"><span class=\"code-label\">TypeScript</span><pre dir=\"ltr\"><code>// ❌ يسمح بحالات متناقضة: isLoading و error معاً؟ data مع error؟\ninterface State { isLoading: boolean; error?: string; data?: User[] }\n\n// ✅ كل حالة واضحة ولا تتناقض\ntype State =\n  | { status: &quot;loading&quot; }\n  | { status: &quot;error&quot;; error: string }\n  | { status: &quot;success&quot;; data: User[] };</code></pre></div>\n<p>هذه من أهم أفكار التصميم بالأنواع.</p>\n<h2>5. مصدر واحد للحقيقة</h2>\n<div class=\"code-block src\"><span class=\"code-label\">TypeScript</span><pre dir=\"ltr\"><code>const SIZES = [&quot;S&quot;, &quot;M&quot;, &quot;L&quot;] as const;\ntype Size = typeof SIZES[number];\n\ninterface Shirt { name: string; size: Size; price: number }\ntype ShirtUpdate = Partial&lt;Omit&lt;Shirt, &quot;name&quot;&gt;&gt;;\n\nconst update: ShirtUpdate = { price: 99 };\nconsole.log(SIZES.length, update.price);</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>3 99</code></pre></div>\n<p>نوع <code dir=\"ltr\">Size</code> مشتق من المصفوفة، و <code dir=\"ltr\">ShirtUpdate</code> مشتق من <code dir=\"ltr\">Shirt</code>. أي تعديل في المصدر ينتشر تلقائياً.</p>\n<h2>6. تجنّب as و !</h2>\n<p><code dir=\"ltr\">value as Type</code> و <code dir=\"ltr\">value!</code> يلغيان فحص المترجم. كل استخدام لهما يحتاج سبباً مقنعاً، والأفضل دائماً <strong>التضييق</strong> بفحص حقيقي.</p>\n<h2>7. الاتحاد المميَّز مع never للتغطية الكاملة</h2>\n<div class=\"code-block src\"><span class=\"code-label\">TypeScript</span><pre dir=\"ltr\"><code>type Payment = { method: &quot;card&quot;; last4: string } | { method: &quot;cash&quot; } | { method: &quot;wallet&quot;; app: string };\n\nfunction describe(p: Payment): string {\n  switch (p.method) {\n    case &quot;card&quot;: return `بطاقة تنتهي بـ ${p.last4}`;\n    case &quot;cash&quot;: return &quot;نقداً&quot;;\n    case &quot;wallet&quot;: return `محفظة ${p.app}`;\n    default: {\n      const unreachable: never = p;\n      return unreachable;\n    }\n  }\n}\n\nconsole.log(describe({ method: &quot;wallet&quot;, app: &quot;STC Pay&quot; }));</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>محفظة STC Pay</code></pre></div>\n<h2>خاتمة الدورة</h2>\n<p>أكملت دورة TypeScript! أصبحت تعرف الأنواع الأساسية والمركبة، والواجهات، والـ Generics، وأدوات الأنواع، والأصناف، والوحدات، واستخدام TypeScript مع React و Node.js.</p>\n<div class=\"callout tip\">💡 الخطوة التالية: حوّل أحد مشاريعك في JavaScript إلى TypeScript ملفاً بعد ملف، وهو مشروع التخرج المقترح لهذه الدورة. ستندهش من عدد الأخطاء الخفية التي ستكتشفها!</div>\n<h2>ملخص الدرس</h2>\n<ul><li>strict دائماً، و unknown بدل any.</li><li>اكتب الأنواع على حدود الكود، ودع الاستنتاج يعمل داخلها.</li><li>صمّم الأنواع بحيث تكون الحالات المتناقضة مستحيلة.</li><li>اشتق الأنواع من مصدر واحد، وتجنّب as و !.</li><li>الاتحاد المميَّز مع never لضمان معالجة كل الحالات.</li></ul>",
   "exercise": {
    "prompt": "<p>أعد تصميم حالة شاشة تحميل البيانات لتكون الحالات المتناقضة مستحيلة:</p>\n<ol><li>عرّف <code dir=\"ltr\">type FetchState</code> كاتحاد مميَّز بالخاصية <code dir=\"ltr\">status</code>: <code dir=\"ltr\">&quot;idle&quot;</code> بلا بيانات، و <code dir=\"ltr\">&quot;loading&quot;</code> بلا بيانات، و <code dir=\"ltr\">&quot;error&quot;</code> فيه <code dir=\"ltr\">message</code> نص، و <code dir=\"ltr\">&quot;success&quot;</code> فيه <code dir=\"ltr\">items</code> مصفوفة نصوص.</li><li>اكتب <code dir=\"ltr\">render(s: FetchState): string</code> بـ switch يغطي كل الحالات، مع فحص <code dir=\"ltr\">never</code> في default.</li></ol>",
    "starter": "// النوع والدالة هنا\n\nconst states: FetchState[] = [\n  { status: \"idle\" },\n  { status: \"loading\" },\n  { status: \"error\", message: \"انقطع الاتصال\" },\n  { status: \"success\", items: [\"أ\", \"ب\", \"ج\"] }\n];\nstates.forEach(s => console.log(render(s)));",
    "expected": "اضغط للتحميل\nجاري التحميل...\nخطأ: انقطع الاتصال\nتم تحميل 3 عناصر",
    "solution": "type FetchState =\n  | { status: \"idle\" }\n  | { status: \"loading\" }\n  | { status: \"error\"; message: string }\n  | { status: \"success\"; items: string[] };\n\nfunction render(s: FetchState): string {\n  switch (s.status) {\n    case \"idle\":\n      return \"اضغط للتحميل\";\n    case \"loading\":\n      return \"جاري التحميل...\";\n    case \"error\":\n      return `خطأ: ${s.message}`;\n    case \"success\":\n      return `تم تحميل ${s.items.length} عناصر`;\n    default: {\n      const unreachable: never = s;\n      return unreachable;\n    }\n  }\n}\n\nconst states: FetchState[] = [\n  { status: \"idle\" },\n  { status: \"loading\" },\n  { status: \"error\", message: \"انقطع الاتصال\" },\n  { status: \"success\", items: [\"أ\", \"ب\", \"ج\"] }\n];\nstates.forEach(s => console.log(render(s)));"
   },
   "quiz": [
    {
     "q": "أين يُفضل كتابة الأنواع صراحة؟",
     "o": [
      "على حدود الكود: معاملات الدوال وأنواع الإرجاع العامة والبيانات المشتركة",
      "على كل متغير",
      "لا مكان، الاستنتاج يكفي دائماً"
     ],
     "a": 0,
     "why": "داخل الدوال يعمل الاستنتاج جيداً."
    },
    {
     "q": "ما المقصود بجعل &quot;الحالات المستحيلة غير ممكنة التمثيل&quot;؟",
     "o": [
      "تصميم الأنواع بحيث لا يمكن إنشاء قيمة متناقضة، مثل تحميل وخطأ معاً",
      "منع الأخطاء وقت التشغيل كلياً",
      "حذف الحالات النادرة"
     ],
     "a": 0,
     "why": "الاتحاد المميَّز أداته الأساسية."
    },
    {
     "q": "لماذا يُنصح بتجنب <code dir=\"ltr\">as</code> و <code dir=\"ltr\">!</code>؟",
     "o": [
      "لأنهما يلغيان فحص المترجم ويحمّلانك المسؤولية دون ضمان",
      "لأنهما بطيئان",
      "لأنهما غير مدعومين"
     ],
     "a": 0,
     "why": "التضييق بفحص حقيقي أكثر أماناً."
    }
   ]
  }
 ]
], {"runner": "ts"});
