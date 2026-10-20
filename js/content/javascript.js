// ملف مولَّد من content/javascript عبر tools/build.py، لا تعدّله يدوياً
CW.registerContent("javascript", [
 [
  {
   "body": "<h2>ما هي JavaScript؟</h2>\n<p>JavaScript هي لغة البرمجة التي تجعل صفحات الويب <strong>تتفاعل</strong>. عندما تضغط زر &quot;أعجبني&quot; فيتغير لونه، أو تكتب في خانة بحث فتظهر لك اقتراحات فورية، أو تفتح قائمة منسدلة، فهذا كله يحدث بفضل JavaScript.</p>\n<p>كل صفحة ويب تتكون من ثلاث طبقات:</p>\n<div class=\"table-wrap\"><table><thead><tr><th>الطبقة</th><th>دورها</th><th>مثال من الحياة</th></tr></thead><tbody><tr><td>HTML</td><td>الهيكل والمحتوى</td><td>جدران البيت وغرفه</td></tr><tr><td>CSS</td><td>الشكل والتنسيق</td><td>الدهان والأثاث</td></tr><tr><td>JavaScript</td><td>السلوك والتفاعل</td><td>الكهرباء والأجهزة</td></tr></tbody></table></div>\n<p>واليوم لم تعد JavaScript محصورة في المتصفح، فهي تعمل أيضاً على الخوادم عبر Node.js، وفي تطبيقات الجوال عبر React Native، وفي تطبيقات سطح المكتب مثل VS Code نفسه.</p>\n<h2>أين نكتب كود JavaScript؟</h2>\n<p>لديك ثلاثة أماكن للبدء:</p>\n<ol><li><strong>محرر CodeWay:</strong> المحرر الموجود أسفل كل درس. تكتب فيه وتضغط «تشغيل» مباشرة دون أي تثبيت.</li><li><strong>وحدة التحكم في المتصفح (Console):</strong> اضغط <code dir=\"ltr\">F12</code> في Chrome ثم افتح تبويب Console، واكتب أي كود واضغط Enter.</li><li><strong>ملف داخل صفحة HTML:</strong> وهي الطريقة المستخدمة في المشاريع الحقيقية، وسنتعلمها لاحقاً.</li></ol>\n<h2>أول سطر برمجي: console.log</h2>\n<p>الأمر <code dir=\"ltr\">console.log</code> يطبع رسالة في وحدة التحكم (المخرجات). هو أهم أداة ستستخدمها كمبتدئ، لأنه يريك ما يحدث داخل برنامجك.</p>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>console.log(&quot;مرحباً بالعالم!&quot;);</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>مرحباً بالعالم!</code></pre></div>\n<p>لاحظ ثلاثة أشياء في هذا السطر:</p>\n<ul><li>النص الذي نريد طباعته يوضع بين <strong>علامتي تنصيص</strong> <code dir=\"ltr\">&quot;...&quot;</code>، ويسمى في البرمجة <strong>نصاً (String)</strong>.</li><li>الأقواس <code dir=\"ltr\">( )</code> تحيط بما نريد طباعته.</li><li>الفاصلة المنقوطة <code dir=\"ltr\">;</code> في نهاية السطر تعني &quot;انتهى هذا الأمر&quot;. هي اختيارية غالباً في JavaScript، لكن كتابتها عادة جيدة.</li></ul>\n<h2>طباعة أكثر من سطر</h2>\n<p>يُنفَّذ البرنامج <strong>من الأعلى إلى الأسفل، سطراً بعد سطر</strong>:</p>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>console.log(&quot;السطر الأول&quot;);\nconsole.log(&quot;السطر الثاني&quot;);\nconsole.log(2026);</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>السطر الأول\nالسطر الثاني\n2026</code></pre></div>\n<p>لاحظ أن الرقم <code dir=\"ltr\">2026</code> لم نضعه بين علامتي تنصيص، لأن الأرقام تُكتب كما هي.</p>\n<p>يمكنك أيضاً طباعة عدة قيم في أمر واحد بالفصل بينها بفاصلة، فتُطبع بينها مسافة:</p>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>console.log(&quot;عمري&quot;, 25, &quot;سنة&quot;);</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>عمري 25 سنة</code></pre></div>\n<h2>التعليقات</h2>\n<p>التعليق نص يكتبه المبرمج <strong>لنفسه أو لزملائه</strong> ويتجاهله الحاسوب تماماً. يُستخدم لشرح الكود:</p>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>// هذا تعليق من سطر واحد\n\n/*\n  هذا تعليق\n  من عدة أسطر\n*/\n\nconsole.log(&quot;التعليقات لا تُطبع&quot;); // يمكن وضع تعليق بعد الكود أيضاً</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>التعليقات لا تُطبع</code></pre></div>\n<div class=\"callout tip\">💡 نصيحة: التعليق الجيد يشرح <strong>لماذا</strong> كتبت الكود بهذه الطريقة، وليس <strong>ماذا</strong> يفعل، لأن الكود الواضح يشرح نفسه.</div>\n<h2>ملخص الدرس</h2>\n<ul><li>JavaScript هي لغة التفاعل في الويب، وتعمل أيضاً على الخوادم والجوال.</li><li><code dir=\"ltr\">console.log(...)</code> يطبع القيم في المخرجات.</li><li>النصوص تُكتب بين علامتي تنصيص، والأرقام تُكتب كما هي.</li><li>الكود يُنفَّذ من الأعلى للأسفل.</li><li>التعليقات <code dir=\"ltr\">//</code> و <code dir=\"ltr\">/* */</code> يتجاهلها الحاسوب.</li></ul>",
   "exercise": {
    "prompt": "<p>اكتب برنامجاً يطبع <strong>ثلاثة أسطر بالترتيب</strong>:</p>\n<ol><li>النص <code dir=\"ltr\">أهلاً بك في CodeWay</code></li><li>الرقم <code dir=\"ltr\">100</code></li><li>النص <code dir=\"ltr\">بدأت رحلتي في البرمجة</code></li></ol>",
    "starter": "// اكتب الأسطر الثلاثة هنا",
    "expected": "أهلاً بك في CodeWay\n100\nبدأت رحلتي في البرمجة",
    "solution": "console.log(\"أهلاً بك في CodeWay\");\nconsole.log(100);\nconsole.log(\"بدأت رحلتي في البرمجة\");"
   },
   "quiz": [
    {
     "q": "ما وظيفة <code dir=\"ltr\">console.log</code>؟",
     "o": [
      "حفظ البيانات في ملف",
      "طباعة القيم في وحدة التحكم (المخرجات)",
      "إنشاء صفحة ويب جديدة"
     ],
     "a": 1,
     "why": "نستخدم <code dir=\"ltr\">console.log</code> لنرى القيم والنتائج أثناء كتابة البرنامج."
    },
    {
     "q": "أي من هذه الأسطر لن يُنفَّذ أبداً؟",
     "o": [
      "<code dir=\"ltr\">console.log(&quot;مرحبا&quot;);</code>",
      "<code dir=\"ltr\">// console.log(&quot;مرحبا&quot;);</code>",
      "<code dir=\"ltr\">console.log(5);</code>"
     ],
     "a": 1,
     "why": "السطر الذي يبدأ بـ <code dir=\"ltr\">//</code> تعليق، والحاسوب يتجاهله."
    },
    {
     "q": "بأي ترتيب تُنفَّذ أوامر البرنامج عادة؟",
     "o": [
      "من الأعلى إلى الأسفل، سطراً بعد سطر",
      "من الأسفل إلى الأعلى",
      "بترتيب عشوائي"
     ],
     "a": 0,
     "why": "ينفّذ المحرك الأوامر بالترتيب الذي كُتبت به، ما لم نستخدم أدوات تغيّر هذا الترتيب كالشروط والحلقات."
    }
   ]
  },
  {
   "body": "<h2>لماذا نحتاج المتغيرات؟</h2>\n<p>تخيّل أنك تكتب برنامج متجر، وسعر المنتج يتكرر في عشرين مكاناً. إذا تغيّر السعر، ستعدّل عشرين سطراً! الحل هو أن نخزّن السعر <strong>مرة واحدة</strong> في مكان له اسم، ثم نستخدم الاسم في كل مكان.</p>\n<p><strong>المتغير</strong> هو صندوق له اسم، نضع فيه قيمة لنستخدمها لاحقاً.</p>\n<h2>إنشاء متغير باستخدام let</h2>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>let price = 50;\nconsole.log(price);</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>50</code></pre></div>\n<p>هذا السطر يعني: أنشئ صندوقاً اسمه <code dir=\"ltr\">price</code> وضع فيه القيمة <code dir=\"ltr\">50</code>.</p>\n<ul><li><code dir=\"ltr\">let</code> كلمة محجوزة تعني &quot;أنشئ متغيراً&quot;.</li><li><code dir=\"ltr\">price</code> اسم المتغير.</li><li><code dir=\"ltr\">=</code> علامة <strong>الإسناد</strong>، وتعني &quot;ضع القيمة التي على اليمين داخل المتغير&quot;. هي ليست علامة مساواة كما في الرياضيات.</li></ul>\n<h2>تغيير قيمة المتغير</h2>\n<p>المتغير المعرّف بـ <code dir=\"ltr\">let</code> يمكن تغيير قيمته لاحقاً، دون كتابة <code dir=\"ltr\">let</code> مرة أخرى:</p>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>let score = 0;\nconsole.log(score);\n\nscore = 10;\nconsole.log(score);\n\nscore = score + 5;\nconsole.log(score);</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>0\n10\n15</code></pre></div>\n<p>السطر <code dir=\"ltr\">score = score + 5</code> يُقرأ هكذا: &quot;خذ القيمة الحالية لـ score، أضف إليها 5، ثم ضع الناتج في score&quot;.</p>\n<h2>الثوابت باستخدام const</h2>\n<p>أحياناً نريد قيمة <strong>لا تتغير أبداً</strong>، مثل عدد أيام الأسبوع أو نسبة الضريبة. هنا نستخدم <code dir=\"ltr\">const</code>:</p>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>const daysInWeek = 7;\nconst taxRate = 0.15;\nconsole.log(daysInWeek, taxRate);</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>7 0.15</code></pre></div>\n<p>إذا حاولت تغيير قيمة <code dir=\"ltr\">const</code> سيظهر خطأ:</p>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>const pi = 3.14;\npi = 3; // TypeError: Assignment to constant variable.</code></pre></div>\n<div class=\"callout tip\">💡 القاعدة الذهبية: استخدم <code dir=\"ltr\">const</code> دائماً بشكل افتراضي، ولا تنتقل إلى <code dir=\"ltr\">let</code> إلا إذا كنت تعلم أن القيمة ستتغير. هذا يجعل كودك أوضح ويمنع أخطاء التعديل غير المقصود.</div>\n<h2>ماذا عن var؟</h2>\n<p>ستجد في الأكواد القديمة كلمة <code dir=\"ltr\">var</code>. كانت الطريقة الوحيدة قبل عام 2015، لكن لها سلوكيات مربكة. في الكود الحديث <strong>لا نستخدم var</strong> ونكتفي بـ <code dir=\"ltr\">let</code> و <code dir=\"ltr\">const</code>.</p>\n<h2>قواعد تسمية المتغيرات</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>القاعدة</th><th>صحيح</th><th>خطأ</th></tr></thead><tbody><tr><td>يبدأ بحرف أو <code dir=\"ltr\">_</code> أو <code dir=\"ltr\">$</code></td><td><code dir=\"ltr\">userName</code></td><td><code dir=\"ltr\">1user</code></td></tr><tr><td>بدون مسافات</td><td><code dir=\"ltr\">firstName</code></td><td><code dir=\"ltr\">first name</code></td></tr><tr><td>ليس كلمة محجوزة</td><td><code dir=\"ltr\">myClass</code></td><td><code dir=\"ltr\">class</code></td></tr><tr><td>حساس لحالة الأحرف</td><td><code dir=\"ltr\">age</code> و <code dir=\"ltr\">Age</code> متغيران مختلفان</td><td></td></tr></tbody></table></div>\n<p>والعرف المتبع في JavaScript هو أسلوب <strong>camelCase</strong>: الكلمة الأولى بأحرف صغيرة، وكل كلمة بعدها تبدأ بحرف كبير، مثل <code dir=\"ltr\">totalPrice</code> و <code dir=\"ltr\">isLoggedIn</code> و <code dir=\"ltr\">numberOfStudents</code>.</p>\n<div class=\"callout warn\">⚠️ اختر أسماء تصف المحتوى. <code dir=\"ltr\">x</code> و <code dir=\"ltr\">data2</code> أسماء سيئة، بينما <code dir=\"ltr\">cartTotal</code> و <code dir=\"ltr\">userEmail</code> واضحة لأي شخص يقرأ الكود.</div>\n<h2>ملخص الدرس</h2>\n<ul><li>المتغير صندوق له اسم يخزّن قيمة.</li><li><code dir=\"ltr\">let</code> لقيمة قد تتغير، و <code dir=\"ltr\">const</code> لقيمة ثابتة، و <code dir=\"ltr\">var</code> قديمة لا نستخدمها.</li><li><code dir=\"ltr\">=</code> تعني الإسناد وليس المساواة.</li><li>نسمّي المتغيرات بأسلوب camelCase وبأسماء واضحة.</li></ul>",
   "exercise": {
    "prompt": "<p>لديك متغير لعدد الطلاب في فصل. المطلوب:</p>\n<ol><li>أنشئ ثابتاً اسمه <code dir=\"ltr\">schoolName</code> قيمته <code dir=\"ltr\">مدرسة النور</code>، واطبعه.</li><li>أنشئ متغيراً اسمه <code dir=\"ltr\">students</code> قيمته <code dir=\"ltr\">20</code>، واطبعه.</li><li>انضم 5 طلاب جدد: أضف 5 إلى <code dir=\"ltr\">students</code> ثم اطبعه مرة أخرى.</li></ol>",
    "starter": "// 1) الثابت schoolName\n\n// 2) المتغير students\n\n// 3) أضف 5 طلاب ثم اطبع",
    "expected": "مدرسة النور\n20\n25",
    "solution": "const schoolName = \"مدرسة النور\";\nconsole.log(schoolName);\n\nlet students = 20;\nconsole.log(students);\n\nstudents = students + 5;\nconsole.log(students);"
   },
   "quiz": [
    {
     "q": "ما الفرق الأساسي بين <code dir=\"ltr\">let</code> و <code dir=\"ltr\">const</code>؟",
     "o": [
      "<code dir=\"ltr\">const</code> أسرع في التنفيذ",
      "قيمة <code dir=\"ltr\">let</code> يمكن تغييرها، وقيمة <code dir=\"ltr\">const</code> لا يمكن إعادة إسنادها",
      "<code dir=\"ltr\">let</code> للأرقام و <code dir=\"ltr\">const</code> للنصوص"
     ],
     "a": 1,
     "why": "نستخدم <code dir=\"ltr\">const</code> للقيم الثابتة، و <code dir=\"ltr\">let</code> للقيم التي ستتغير أثناء البرنامج."
    },
    {
     "q": "أي اسم متغير صحيح ويتبع أسلوب camelCase؟",
     "o": [
      "<code dir=\"ltr\">total price</code>",
      "<code dir=\"ltr\">2ndPlace</code>",
      "<code dir=\"ltr\">totalPrice</code>"
     ],
     "a": 2,
     "why": "لا يُسمح بالمسافات، ولا يجوز أن يبدأ الاسم برقم، و camelCase يجعل أول حرف من كل كلمة لاحقة كبيراً."
    },
    {
     "q": "ما قيمة <code dir=\"ltr\">x</code> بعد تنفيذ: <code dir=\"ltr\">let x = 4; x = x * 2;</code>؟",
     "o": [
      "4",
      "6",
      "8"
     ],
     "a": 2,
     "why": "الطرف الأيمن يُحسب أولاً: 4 × 2 = 8، ثم توضع النتيجة في <code dir=\"ltr\">x</code>."
    }
   ]
  },
  {
   "body": "<h2>كل قيمة لها نوع</h2>\n<p>عندما تخزّن قيمة في متغير، فإن JavaScript تعرف <strong>نوعها</strong>: هل هي رقم؟ نص؟ صح أو خطأ؟ النوع يحدد ما يمكنك فعله بالقيمة. فالأرقام تُجمع وتُضرب، والنصوص تُدمج وتُقطّع.</p>\n<h2>الأنواع الأساسية</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>النوع</th><th>الوصف</th><th>أمثلة</th></tr></thead><tbody><tr><td><code dir=\"ltr\">number</code></td><td>الأرقام الصحيحة والعشرية</td><td><code dir=\"ltr\">42</code> و <code dir=\"ltr\">3.14</code> و <code dir=\"ltr\">-7</code></td></tr><tr><td><code dir=\"ltr\">string</code></td><td>النصوص</td><td><code dir=\"ltr\">&quot;مرحبا&quot;</code> و <code dir=\"ltr\">&#x27;JS&#x27;</code></td></tr><tr><td><code dir=\"ltr\">boolean</code></td><td>قيمة منطقية: صح أو خطأ</td><td><code dir=\"ltr\">true</code> و <code dir=\"ltr\">false</code></td></tr><tr><td><code dir=\"ltr\">undefined</code></td><td>متغير لم تُعطَ له قيمة</td><td><code dir=\"ltr\">let x;</code></td></tr><tr><td><code dir=\"ltr\">null</code></td><td>&quot;لا شيء&quot; بشكل مقصود</td><td><code dir=\"ltr\">let car = null;</code></td></tr></tbody></table></div>\n<p>وهناك أيضاً <code dir=\"ltr\">bigint</code> للأرقام الضخمة جداً و <code dir=\"ltr\">symbol</code> لمعرّفات فريدة، وهما نادرا الاستخدام للمبتدئ.</p>\n<h2>معرفة النوع باستخدام typeof</h2>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>console.log(typeof 42);\nconsole.log(typeof &quot;مرحبا&quot;);\nconsole.log(typeof true);\nconsole.log(typeof undefined);</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>number\nstring\nboolean\nundefined</code></pre></div>\n<h2>الأرقام (number)</h2>\n<p>لا تفرّق JavaScript بين الأرقام الصحيحة والعشرية، فكلها من نوع <code dir=\"ltr\">number</code>:</p>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>const age = 25;\nconst price = 19.5;\nconst temperature = -4;\nconsole.log(age + price);</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>44.5</code></pre></div>\n<p>هناك قيمتان خاصتان من نوع رقم: <code dir=\"ltr\">Infinity</code> (اللانهاية) و <code dir=\"ltr\">NaN</code>، وهي اختصار Not a Number، وتظهر عند عملية حسابية لا معنى لها:</p>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>console.log(10 / 0);\nconsole.log(&quot;تفاحة&quot; * 3);</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>Infinity\nNaN</code></pre></div>\n<h2>النصوص (string)</h2>\n<p>النص يُكتب بين علامتي تنصيص مزدوجة <code dir=\"ltr\">&quot;</code> أو مفردة <code dir=\"ltr\">&#x27;</code> أو مائلة `<code dir=\"ltr\"> </code> ``. المهم أن تفتح وتغلق بنفس العلامة:</p>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>const first = &quot;أحمد&quot;;\nconst last = &#x27;علي&#x27;;\nconsole.log(first, last);</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>أحمد علي</code></pre></div>\n<div class=\"callout warn\">⚠️ انتبه: <code dir=\"ltr\">&quot;5&quot;</code> نص، و <code dir=\"ltr\">5</code> رقم. يبدوان متشابهين لكنهما نوعان مختلفان تماماً، وسنرى في الدرس القادم كيف يسبب هذا مفاجآت.</div>\n<h2>القيم المنطقية (boolean)</h2>\n<p>لها قيمتان فقط: <code dir=\"ltr\">true</code> (صح) و <code dir=\"ltr\">false</code> (خطأ). وهي أساس اتخاذ القرارات في البرنامج:</p>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>const isLoggedIn = true;\nconst hasDiscount = false;\nconsole.log(isLoggedIn, hasDiscount);\nconsole.log(10 &gt; 3);</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>true false\ntrue</code></pre></div>\n<p>المقارنة <code dir=\"ltr\">10 &gt; 3</code> نتيجتها قيمة منطقية.</p>\n<h2>undefined و null</h2>\n<ul><li><code dir=\"ltr\">undefined</code>: يعني أن المتغير موجود لكن <strong>لم نضع فيه قيمة بعد</strong>. تضعها JavaScript تلقائياً.</li><li><code dir=\"ltr\">null</code>: يعني أننا <strong>قررنا عمداً</strong> أن المتغير فارغ.</li></ul>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>let phone;\nconsole.log(phone);\n\nlet selectedCar = null;\nconsole.log(selectedCar);</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>undefined\nnull</code></pre></div>\n<h2>التحويل بين الأنواع</h2>\n<p>كثيراً ما تحتاج تحويل نص إلى رقم، مثل ما يكتبه المستخدم في خانة إدخال، فهو يصل دائماً كنص:</p>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>const input = &quot;42&quot;;\nconst num = Number(input);\nconsole.log(typeof input, typeof num);\nconsole.log(num + 8);\n\nconsole.log(String(100) + &quot;!&quot;);\nconsole.log(Number(&quot;abc&quot;));</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>string number\n50\n100!\nNaN</code></pre></div>\n<h2>ملخص الدرس</h2>\n<ul><li>الأنواع الأساسية: <code dir=\"ltr\">number</code> و <code dir=\"ltr\">string</code> و <code dir=\"ltr\">boolean</code> و <code dir=\"ltr\">undefined</code> و <code dir=\"ltr\">null</code>.</li><li><code dir=\"ltr\">typeof</code> يخبرك بنوع القيمة.</li><li><code dir=\"ltr\">&quot;5&quot;</code> نص و <code dir=\"ltr\">5</code> رقم.</li><li><code dir=\"ltr\">Number()</code> و <code dir=\"ltr\">String()</code> يحوّلان بين الأنواع، و <code dir=\"ltr\">NaN</code> نتيجة عملية حسابية غير صالحة.</li></ul>",
   "exercise": {
    "prompt": "<p>لديك قيمة وصلت من المستخدم كنص: <code dir=\"ltr\">&quot;35&quot;</code>.</p>\n<ol><li>اطبع نوعها باستخدام <code dir=\"ltr\">typeof</code>.</li><li>حوّلها إلى رقم وخزّنها في متغير اسمه <code dir=\"ltr\">age</code>.</li><li>اطبع نوع <code dir=\"ltr\">age</code>.</li><li>اطبع <code dir=\"ltr\">age + 5</code> (يجب أن تظهر 40 وليس 355).</li></ol>",
    "starter": "const input = \"35\";\n\n// أكمل هنا",
    "expected": "string\nnumber\n40",
    "solution": "const input = \"35\";\n\nconsole.log(typeof input);\nconst age = Number(input);\nconsole.log(typeof age);\nconsole.log(age + 5);"
   },
   "quiz": [
    {
     "q": "ما نتيجة <code dir=\"ltr\">typeof &quot;10&quot;</code>؟",
     "o": [
      "<code dir=\"ltr\">number</code>",
      "<code dir=\"ltr\">string</code>",
      "<code dir=\"ltr\">boolean</code>"
     ],
     "a": 1,
     "why": "أي قيمة بين علامتي تنصيص هي نص، حتى لو كان محتواها أرقاماً."
    },
    {
     "q": "متغير عُرّف بـ <code dir=\"ltr\">let x;</code> دون قيمة. ما قيمته؟",
     "o": [
      "<code dir=\"ltr\">undefined</code>",
      "<code dir=\"ltr\">null</code>",
      "<code dir=\"ltr\">0</code>"
     ],
     "a": 0,
     "why": "تعطي JavaScript تلقائياً القيمة <code dir=\"ltr\">undefined</code> لأي متغير لم يُسند إليه شيء."
    },
    {
     "q": "ما نتيجة <code dir=\"ltr\">Number(&quot;مرحبا&quot;)</code>؟",
     "o": [
      "<code dir=\"ltr\">0</code>",
      "خطأ يوقف البرنامج",
      "<code dir=\"ltr\">NaN</code>"
     ],
     "a": 2,
     "why": "عندما يتعذر تحويل النص إلى رقم، تكون النتيجة <code dir=\"ltr\">NaN</code>، أي &quot;ليس رقماً&quot;."
    }
   ]
  },
  {
   "body": "<h2>العمليات الحسابية</h2>\n<p>تدعم JavaScript كل العمليات الحسابية المعتادة:</p>\n<div class=\"table-wrap\"><table><thead><tr><th>العامل</th><th>المعنى</th><th>مثال</th><th>النتيجة</th></tr></thead><tbody><tr><td><code dir=\"ltr\">+</code></td><td>جمع</td><td><code dir=\"ltr\">7 + 3</code></td><td><code dir=\"ltr\">10</code></td></tr><tr><td><code dir=\"ltr\">-</code></td><td>طرح</td><td><code dir=\"ltr\">7 - 3</code></td><td><code dir=\"ltr\">4</code></td></tr><tr><td><code dir=\"ltr\">*</code></td><td>ضرب</td><td><code dir=\"ltr\">7 * 3</code></td><td><code dir=\"ltr\">21</code></td></tr><tr><td><code dir=\"ltr\">/</code></td><td>قسمة</td><td><code dir=\"ltr\">7 / 2</code></td><td><code dir=\"ltr\">3.5</code></td></tr><tr><td><code dir=\"ltr\">%</code></td><td>باقي القسمة</td><td><code dir=\"ltr\">7 % 3</code></td><td><code dir=\"ltr\">1</code></td></tr><tr><td><code dir=\"ltr\">**</code></td><td>الأس</td><td><code dir=\"ltr\">2 ** 3</code></td><td><code dir=\"ltr\">8</code></td></tr></tbody></table></div>\n<p>عامل <strong>باقي القسمة</strong> <code dir=\"ltr\">%</code> مفيد جداً، مثلاً لمعرفة هل الرقم زوجي:</p>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>console.log(10 % 2);\nconsole.log(7 % 2);</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>0\n1</code></pre></div>\n<p>إذا كان الباقي 0 فالرقم زوجي.</p>\n<h2>أولوية العمليات</h2>\n<p>كما في الرياضيات: الأس أولاً، ثم الضرب والقسمة، ثم الجمع والطرح. والأقواس تغيّر الترتيب:</p>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>console.log(2 + 3 * 4);\nconsole.log((2 + 3) * 4);</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>14\n20</code></pre></div>\n<h2>اختصارات الإسناد</h2>\n<p>بدلاً من <code dir=\"ltr\">x = x + 5</code> يمكنك كتابة <code dir=\"ltr\">x += 5</code>:</p>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>let points = 10;\npoints += 5;   // points = points + 5\npoints -= 3;   // points = points - 3\npoints *= 2;   // points = points * 2\nconsole.log(points);\n\nlet count = 0;\ncount++;       // زيادة بمقدار 1\ncount++;\ncount--;       // نقص بمقدار 1\nconsole.log(count);</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>24\n1</code></pre></div>\n<h2>المفاجأة: + مع النصوص</h2>\n<p>العامل <code dir=\"ltr\">+</code> له وظيفتان: الجمع مع الأرقام، و<strong>الدمج</strong> مع النصوص. إذا كان أحد الطرفين نصاً، تحوّل JavaScript الطرف الآخر إلى نص وتدمجهما:</p>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>console.log(5 + 5);\nconsole.log(&quot;5&quot; + 5);\nconsole.log(&quot;5&quot; - 2);</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>10\n55\n3</code></pre></div>\n<p>لاحظ أن <code dir=\"ltr\">-</code> لا تعمل مع النصوص، فتحوّل JavaScript النص إلى رقم. هذا السلوك يسمى <strong>التحويل الضمني</strong>، وهو مصدر شائع للأخطاء. الحل أن تحوّل بنفسك باستخدام <code dir=\"ltr\">Number()</code> قبل الحساب.</p>\n<h2>عوامل المقارنة</h2>\n<p>نتيجة المقارنة دائماً <code dir=\"ltr\">true</code> أو <code dir=\"ltr\">false</code>:</p>\n<div class=\"table-wrap\"><table><thead><tr><th>العامل</th><th>المعنى</th></tr></thead><tbody><tr><td><code dir=\"ltr\">&gt;</code> و <code dir=\"ltr\">&lt;</code></td><td>أكبر من، أصغر من</td></tr><tr><td><code dir=\"ltr\">&gt;=</code> و <code dir=\"ltr\">&lt;=</code></td><td>أكبر من أو يساوي، أصغر من أو يساوي</td></tr><tr><td><code dir=\"ltr\">===</code></td><td>يساوي (القيمة والنوع)</td></tr><tr><td><code dir=\"ltr\">!==</code></td><td>لا يساوي (القيمة أو النوع)</td></tr></tbody></table></div>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>console.log(5 === 5);\nconsole.log(5 === &quot;5&quot;);\nconsole.log(5 == &quot;5&quot;);\nconsole.log(3 !== 4);</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>true\nfalse\ntrue\ntrue</code></pre></div>\n<div class=\"callout warn\">⚠️ استخدم دائماً <code dir=\"ltr\">===</code> و <code dir=\"ltr\">!==</code>. أما <code dir=\"ltr\">==</code> فتحوّل الأنواع قبل المقارنة، لذلك تعتبر <code dir=\"ltr\">5 == &quot;5&quot;</code> صحيحة، وهذا قد يخفي أخطاء حقيقية.</div>\n<h2>العوامل المنطقية</h2>\n<p>نستخدمها لدمج عدة شروط:</p>\n<div class=\"table-wrap\"><table><thead><tr><th>العامل</th><th>الاسم</th><th>يكون صحيحاً عندما</th></tr></thead><tbody><tr><td><code dir=\"ltr\">&amp;&amp;</code></td><td>و (AND)</td><td><strong>كلا</strong> الطرفين صحيحان</td></tr><tr><td><code dir=\"ltr\">||</code></td><td>أو (OR)</td><td><strong>أحد</strong> الطرفين على الأقل صحيح</td></tr><tr><td><code dir=\"ltr\">!</code></td><td>ليس (NOT)</td><td>يعكس القيمة</td></tr></tbody></table></div>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>const age = 20;\nconst hasTicket = true;\n\nconsole.log(age &gt;= 18 &amp;&amp; hasTicket);\nconsole.log(age &lt; 12 || age &gt; 60);\nconsole.log(!hasTicket);</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>true\nfalse\nfalse</code></pre></div>\n<h2>ملخص الدرس</h2>\n<ul><li>العمليات الحسابية: <code dir=\"ltr\">+ - * / % **</code>، والأقواس تغيّر الأولوية.</li><li><code dir=\"ltr\">+=</code> و <code dir=\"ltr\">++</code> اختصارات مفيدة.</li><li><code dir=\"ltr\">+</code> مع نص يعني الدمج وليس الجمع.</li><li>استخدم <code dir=\"ltr\">===</code> و <code dir=\"ltr\">!==</code> دائماً.</li><li><code dir=\"ltr\">&amp;&amp;</code> و <code dir=\"ltr\">||</code> و <code dir=\"ltr\">!</code> لدمج الشروط.</li></ul>",
   "exercise": {
    "prompt": "<p>لديك سعر منتج وكمية. احسب واطبع بالترتيب:</p>\n<ol><li>الإجمالي <code dir=\"ltr\">price * quantity</code>.</li><li>الإجمالي بعد إضافة ضريبة 15% (أي الإجمالي × 1.15).</li><li>هل الإجمالي بعد الضريبة أكبر من 100؟ (اطبع نتيجة المقارنة)</li><li>هل الكمية رقم زوجي؟ (استخدم <code dir=\"ltr\">%</code> و <code dir=\"ltr\">===</code>)</li></ol>",
    "starter": "const price = 40;\nconst quantity = 3;\n\n// أكمل هنا",
    "expected": "120\n138\ntrue\nfalse",
    "solution": "const price = 40;\nconst quantity = 3;\n\nconst total = price * quantity;\nconsole.log(total);\n\nconst withTax = total * 1.15;\nconsole.log(withTax);\n\nconsole.log(withTax > 100);\nconsole.log(quantity % 2 === 0);"
   },
   "quiz": [
    {
     "q": "ما نتيجة <code dir=\"ltr\">&quot;3&quot; + 4</code>؟",
     "o": [
      "<code dir=\"ltr\">7</code>",
      "<code dir=\"ltr\">&quot;34&quot;</code>",
      "<code dir=\"ltr\">NaN</code>"
     ],
     "a": 1,
     "why": "عندما يكون أحد طرفي <code dir=\"ltr\">+</code> نصاً، تدمج JavaScript القيمتين كنصين."
    },
    {
     "q": "ما نتيجة <code dir=\"ltr\">17 % 5</code>؟",
     "o": [
      "<code dir=\"ltr\">3.4</code>",
      "<code dir=\"ltr\">2</code>",
      "<code dir=\"ltr\">3</code>"
     ],
     "a": 1,
     "why": "17 ÷ 5 = 3 والباقي 2، والعامل <code dir=\"ltr\">%</code> يعيد الباقي."
    },
    {
     "q": "متى تكون <code dir=\"ltr\">a &amp;&amp; b</code> صحيحة؟",
     "o": [
      "عندما يكون أحدهما صحيحاً",
      "عندما يكون كلاهما صحيحاً",
      "عندما يكون كلاهما خاطئاً"
     ],
     "a": 1,
     "why": "العامل <code dir=\"ltr\">&amp;&amp;</code> (و) يتطلب أن يكون الطرفان صحيحين معاً."
    }
   ]
  },
  {
   "body": "<h2>النصوص في كل مكان</h2>\n<p>أسماء المستخدمين، والرسائل، والعناوين، ونتائج البحث، كلها نصوص. لذلك التعامل مع النصوص من أكثر المهارات استخداماً في البرمجة.</p>\n<h2>دمج النصوص و Template Literals</h2>\n<p>الطريقة القديمة لدمج النصوص هي <code dir=\"ltr\">+</code>:</p>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>const name = &quot;سارة&quot;;\nconst age = 22;\nconsole.log(&quot;اسمي &quot; + name + &quot; وعمري &quot; + age + &quot; سنة&quot;);</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>اسمي سارة وعمري 22 سنة</code></pre></div>\n<p>الطريقة الحديثة والأوضح هي <strong>القوالب النصية (Template Literals)</strong>: نستخدم العلامة المائلة `<code dir=\"ltr\"> </code> `<code dir=\"ltr\"> ونضع المتغيرات داخل </code>${ }`:</p>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>const name = &quot;سارة&quot;;\nconst age = 22;\nconsole.log(`اسمي ${name} وعمري ${age} سنة`);\nconsole.log(`بعد 5 سنوات سيكون عمري ${age + 5}`);</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>اسمي سارة وعمري 22 سنة\nبعد 5 سنوات سيكون عمري 27</code></pre></div>\n<p>يمكنك وضع أي تعبير داخل <code dir=\"ltr\">${ }</code>، حتى العمليات الحسابية.</p>\n<h2>طول النص والوصول إلى الأحرف</h2>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>const word = &quot;JavaScript&quot;;\nconsole.log(word.length);\nconsole.log(word[0]);\nconsole.log(word[4]);\nconsole.log(word[word.length - 1]);</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>10\nJ\nS\nt</code></pre></div>\n<ul><li><code dir=\"ltr\">length</code> يعطي عدد الأحرف.</li><li><code dir=\"ltr\">[رقم]</code> يعطي الحرف في موقع معين. <strong>الترقيم يبدأ من 0</strong> وليس من 1، لذلك آخر حرف موقعه <code dir=\"ltr\">length - 1</code>.</li></ul>\n<h2>دوال النصوص الأكثر استخداماً</h2>\n<p>النصوص لها <strong>دوال (methods)</strong> جاهزة نستدعيها بنقطة بعد النص:</p>\n<div class=\"table-wrap\"><table><thead><tr><th>الدالة</th><th>وظيفتها</th></tr></thead><tbody><tr><td><code dir=\"ltr\">toUpperCase()</code> و <code dir=\"ltr\">toLowerCase()</code></td><td>تحويل الأحرف الإنجليزية لكبيرة أو صغيرة</td></tr><tr><td><code dir=\"ltr\">trim()</code></td><td>حذف المسافات من البداية والنهاية</td></tr><tr><td><code dir=\"ltr\">includes(x)</code></td><td>هل يحتوي النص على x؟</td></tr><tr><td><code dir=\"ltr\">startsWith(x)</code> و <code dir=\"ltr\">endsWith(x)</code></td><td>هل يبدأ أو ينتهي بـ x؟</td></tr><tr><td><code dir=\"ltr\">indexOf(x)</code></td><td>موقع أول ظهور لـ x، أو -1 إن لم يوجد</td></tr><tr><td><code dir=\"ltr\">slice(a, b)</code></td><td>جزء من النص من الموقع a حتى ما قبل b</td></tr><tr><td><code dir=\"ltr\">replace(a, b)</code></td><td>استبدال أول ظهور لـ a بـ b</td></tr><tr><td><code dir=\"ltr\">split(x)</code></td><td>تقسيم النص إلى قائمة عند كل x</td></tr></tbody></table></div>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>const email = &quot;  Ahmed@Mail.com  &quot;;\nconst clean = email.trim().toLowerCase();\nconsole.log(clean);\nconsole.log(clean.includes(&quot;@&quot;));\nconsole.log(clean.endsWith(&quot;.com&quot;));\nconsole.log(clean.indexOf(&quot;@&quot;));\nconsole.log(clean.slice(0, 5));</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>ahmed@mail.com\ntrue\ntrue\n5\nahmed</code></pre></div>\n<p>لاحظ أننا <strong>سلسلنا</strong> دالتين: <code dir=\"ltr\">trim()</code> ثم <code dir=\"ltr\">toLowerCase()</code>. كل دالة تعيد نصاً جديداً، فنستدعي عليه الدالة التالية.</p>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>const sentence = &quot;أنا أتعلم JavaScript&quot;;\nconsole.log(sentence.replace(&quot;JavaScript&quot;, &quot;البرمجة&quot;));\nconsole.log(&quot;أحمر,أخضر,أزرق&quot;.split(&quot;,&quot;));</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>أنا أتعلم البرمجة\n[&quot;أحمر&quot;,&quot;أخضر&quot;,&quot;أزرق&quot;]</code></pre></div>\n<div class=\"callout tip\">💡 النصوص في JavaScript <strong>غير قابلة للتعديل</strong>: دوال مثل <code dir=\"ltr\">toUpperCase()</code> لا تغيّر النص الأصلي، بل تعيد نصاً جديداً. إذا أردت حفظ النتيجة، خزّنها في متغير.</div>\n<h2>ملخص الدرس</h2>\n<ul><li>استخدم القوالب النصية `<code dir=\"ltr\"> </code>مرحبا ${name}<code dir=\"ltr\"> </code>` للدمج.</li><li><code dir=\"ltr\">length</code> لطول النص، و <code dir=\"ltr\">[i]</code> للحرف، والترقيم يبدأ من 0.</li><li>الدوال <code dir=\"ltr\">trim</code> و <code dir=\"ltr\">includes</code> و <code dir=\"ltr\">slice</code> و <code dir=\"ltr\">replace</code> و <code dir=\"ltr\">split</code> هي الأكثر استخداماً.</li><li>دوال النصوص تعيد نصاً جديداً ولا تغيّر الأصلي.</li></ul>",
   "exercise": {
    "prompt": "<p>لديك اسم مستخدم أدخله بشكل غير مرتب. المطلوب طباعة:</p>\n<ol><li>الاسم بعد حذف المسافات وتحويله لأحرف صغيرة.</li><li>عدد أحرف الاسم بعد التنظيف.</li><li>رسالة ترحيب باستخدام قالب نصي بالشكل: <code dir=\"ltr\">مرحباً يا omar، اسمك يتكون من 4 أحرف</code></li></ol>",
    "starter": "const rawName = \"   OMAR   \";\n\n// أكمل هنا",
    "expected": "omar\n4\nمرحباً يا omar، اسمك يتكون من 4 أحرف",
    "solution": "const rawName = \"   OMAR   \";\n\nconst name = rawName.trim().toLowerCase();\nconsole.log(name);\nconsole.log(name.length);\nconsole.log(`مرحباً يا ${name}، اسمك يتكون من ${name.length} أحرف`);"
   },
   "quiz": [
    {
     "q": "ما نتيجة <code dir=\"ltr\">&quot;Hello&quot;[1]</code>؟",
     "o": [
      "<code dir=\"ltr\">H</code>",
      "<code dir=\"ltr\">e</code>",
      "<code dir=\"ltr\">l</code>"
     ],
     "a": 1,
     "why": "الترقيم يبدأ من 0، فالموقع 0 هو H والموقع 1 هو e."
    },
    {
     "q": "ما ناتج `<code dir=\"ltr\"> </code>المجموع: ${2 + 3}<code dir=\"ltr\"> </code>`؟",
     "o": [
      "<code dir=\"ltr\">المجموع: 2 + 3</code>",
      "<code dir=\"ltr\">المجموع: 5</code>",
      "<code dir=\"ltr\">المجموع: ${2 + 3}</code>"
     ],
     "a": 1,
     "why": "يتم حساب أي تعبير داخل <code dir=\"ltr\">${ }</code> ووضع نتيجته في النص."
    },
    {
     "q": "بعد تنفيذ <code dir=\"ltr\">let s = &quot;abc&quot;; s.toUpperCase();</code> ما قيمة <code dir=\"ltr\">s</code>؟",
     "o": [
      "<code dir=\"ltr\">&quot;abc&quot;</code>",
      "<code dir=\"ltr\">&quot;ABC&quot;</code>",
      "<code dir=\"ltr\">undefined</code>"
     ],
     "a": 0,
     "why": "الدالة تعيد نصاً جديداً ولا تغيّر الأصلي. لحفظ النتيجة نكتب <code dir=\"ltr\">s = s.toUpperCase();</code>."
    }
   ]
  }
 ],
 [
  {
   "body": "<h2>البرنامج يتخذ قرارات</h2>\n<p>حتى الآن كانت برامجنا تنفّذ كل الأسطر بالترتيب. لكن البرامج الحقيقية تتخذ قرارات: إذا كانت كلمة المرور صحيحة ادخل، وإلا اعرض رسالة خطأ. هذا ما تفعله <strong>الجمل الشرطية</strong>.</p>\n<h2>الجملة if</h2>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>const temperature = 35;\n\nif (temperature &gt; 30) {\n  console.log(&quot;الجو حار، اشرب ماء كثيراً&quot;);\n}\nconsole.log(&quot;انتهى البرنامج&quot;);</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>الجو حار، اشرب ماء كثيراً\nانتهى البرنامج</code></pre></div>\n<p>الصيغة: <code dir=\"ltr\">if (شرط) { كود }</code>. إذا كان الشرط <code dir=\"ltr\">true</code> يُنفَّذ الكود داخل الأقواس المعقوفة <code dir=\"ltr\">{ }</code>، وإذا كان <code dir=\"ltr\">false</code> يُتخطى.</p>\n<h2>if و else</h2>\n<p><code dir=\"ltr\">else</code> تحدد ما يحدث عندما يكون الشرط خاطئاً:</p>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>const age = 15;\n\nif (age &gt;= 18) {\n  console.log(&quot;يمكنك استخراج رخصة قيادة&quot;);\n} else {\n  console.log(`انتظر ${18 - age} سنوات أخرى`);\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>انتظر 3 سنوات أخرى</code></pre></div>\n<h2>شروط متعددة: else if</h2>\n<p>عندما يكون لدينا أكثر من احتمالين:</p>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>const score = 78;\n\nif (score &gt;= 90) {\n  console.log(&quot;ممتاز&quot;);\n} else if (score &gt;= 75) {\n  console.log(&quot;جيد جداً&quot;);\n} else if (score &gt;= 60) {\n  console.log(&quot;جيد&quot;);\n} else {\n  console.log(&quot;راسب&quot;);\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>جيد جداً</code></pre></div>\n<p>تُفحص الشروط <strong>بالترتيب من الأعلى</strong>، وعند أول شرط صحيح يُنفَّذ كوده ويُتجاهل الباقي. لذلك 78 لم تصل إلى شرط <code dir=\"ltr\">&gt;= 60</code> مع أنه صحيح أيضاً.</p>\n<div class=\"callout warn\">⚠️ الترتيب مهم: لو وضعنا <code dir=\"ltr\">score &gt;= 60</code> أولاً، لحصل كل من تجاوز 60 على &quot;جيد&quot; حتى صاحب الـ 95!</div>\n<h2>دمج الشروط</h2>\n<p>نستخدم العوامل المنطقية التي تعلمناها:</p>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>const hasAccount = true;\nconst isBanned = false;\n\nif (hasAccount &amp;&amp; !isBanned) {\n  console.log(&quot;مرحباً بعودتك&quot;);\n}\n\nconst day = &quot;الجمعة&quot;;\nif (day === &quot;الجمعة&quot; || day === &quot;السبت&quot;) {\n  console.log(&quot;عطلة نهاية الأسبوع&quot;);\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>مرحباً بعودتك\nعطلة نهاية الأسبوع</code></pre></div>\n<h2>القيم الصادقة والكاذبة (Truthy و Falsy)</h2>\n<p>الشرط لا يجب أن يكون <code dir=\"ltr\">true</code> أو <code dir=\"ltr\">false</code> حرفياً. أي قيمة تُعامل كصادقة، <strong>ما عدا</strong> هذه القيم الست الكاذبة:</p>\n<p><code dir=\"ltr\">false</code> و <code dir=\"ltr\">0</code> و <code dir=\"ltr\">&quot;&quot;</code> (نص فارغ) و <code dir=\"ltr\">null</code> و <code dir=\"ltr\">undefined</code> و <code dir=\"ltr\">NaN</code></p>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>const username = &quot;&quot;;\n\nif (username) {\n  console.log(`أهلاً ${username}`);\n} else {\n  console.log(&quot;الرجاء إدخال اسمك&quot;);\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>الرجاء إدخال اسمك</code></pre></div>\n<h2>العامل الثلاثي (Ternary)</h2>\n<p>اختصار لـ if/else البسيطة التي تختار بين قيمتين:</p>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>const stock = 0;\nconst status = stock &gt; 0 ? &quot;متوفر&quot; : &quot;نفد من المخزون&quot;;\nconsole.log(status);</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>نفد من المخزون</code></pre></div>\n<p>الصيغة: <code dir=\"ltr\">شرط ? قيمة_إذا_صح : قيمة_إذا_خطأ</code>. استخدمه للحالات القصيرة فقط، أما المنطق الطويل فـ if أوضح.</p>\n<h2>ملخص الدرس</h2>\n<ul><li><code dir=\"ltr\">if</code> تنفّذ كوداً عندما يكون الشرط صحيحاً، و <code dir=\"ltr\">else</code> عندما يكون خاطئاً.</li><li><code dir=\"ltr\">else if</code> لاحتمالات متعددة، والترتيب مهم.</li><li>القيم الكاذبة: <code dir=\"ltr\">false</code> و <code dir=\"ltr\">0</code> و <code dir=\"ltr\">&quot;&quot;</code> و <code dir=\"ltr\">null</code> و <code dir=\"ltr\">undefined</code> و <code dir=\"ltr\">NaN</code>.</li><li><code dir=\"ltr\">? :</code> اختصار لاختيار قيمة من اثنتين.</li></ul>",
   "exercise": {
    "prompt": "<p>اكتب برنامجاً يحدد تقدير الطالب حسب درجته في المتغير <code dir=\"ltr\">score</code>:</p>\n<ul><li>90 فأكثر: <code dir=\"ltr\">ممتاز</code></li><li>75 إلى 89: <code dir=\"ltr\">جيد جداً</code></li><li>60 إلى 74: <code dir=\"ltr\">مقبول</code></li><li>أقل من 60: <code dir=\"ltr\">راسب</code></li></ul>\n<p>ثم اطبع في سطر ثانٍ <code dir=\"ltr\">ناجح</code> أو <code dir=\"ltr\">راسب</code> باستخدام <strong>العامل الثلاثي</strong> (النجاح من 60).</p>",
    "starter": "const score = 64;\n\n// اطبع التقدير\n\n// اطبع ناجح أو راسب بالعامل الثلاثي",
    "expected": "مقبول\nناجح",
    "solution": "const score = 64;\n\nif (score >= 90) {\n  console.log(\"ممتاز\");\n} else if (score >= 75) {\n  console.log(\"جيد جداً\");\n} else if (score >= 60) {\n  console.log(\"مقبول\");\n} else {\n  console.log(\"راسب\");\n}\n\nconsole.log(score >= 60 ? \"ناجح\" : \"راسب\");"
   },
   "quiz": [
    {
     "q": "ما الذي يُطبع؟ <code dir=\"ltr\">if (0) { console.log(&quot;A&quot;); } else { console.log(&quot;B&quot;); }</code>",
     "o": [
      "<code dir=\"ltr\">A</code>",
      "<code dir=\"ltr\">B</code>",
      "لا شيء"
     ],
     "a": 1,
     "why": "الرقم <code dir=\"ltr\">0</code> من القيم الكاذبة، فيُنفَّذ فرع <code dir=\"ltr\">else</code>."
    },
    {
     "q": "في سلسلة <code dir=\"ltr\">if / else if</code>، إذا تحقق أكثر من شرط، ماذا يُنفَّذ؟",
     "o": [
      "أول شرط صحيح فقط",
      "كل الشروط الصحيحة",
      "آخر شرط صحيح"
     ],
     "a": 0,
     "why": "تتوقف السلسلة عند أول شرط صحيح وتتجاهل الباقي."
    },
    {
     "q": "ما قيمة <code dir=\"ltr\">x</code> في: <code dir=\"ltr\">const x = 10 &gt; 5 ? &quot;نعم&quot; : &quot;لا&quot;;</code>؟",
     "o": [
      "<code dir=\"ltr\">&quot;نعم&quot;</code>",
      "<code dir=\"ltr\">&quot;لا&quot;</code>",
      "<code dir=\"ltr\">true</code>"
     ],
     "a": 0,
     "why": "الشرط <code dir=\"ltr\">10 &gt; 5</code> صحيح، فيعيد العامل الثلاثي القيمة الأولى."
    }
   ]
  },
  {
   "body": "<h2>عندما تكثر المقارنات</h2>\n<p>تخيّل أنك تريد عرض اسم اليوم حسب رقمه من 1 إلى 7. باستخدام <code dir=\"ltr\">if</code> ستكتب سبعة شروط <code dir=\"ltr\">else if (day === ...)</code>. الجملة <code dir=\"ltr\">switch</code> تجعل هذا أنظف عندما نقارن <strong>متغيراً واحداً بقيم محددة</strong>.</p>\n<h2>صيغة switch</h2>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>const day = 3;\n\nswitch (day) {\n  case 1:\n    console.log(&quot;الأحد&quot;);\n    break;\n  case 2:\n    console.log(&quot;الاثنين&quot;);\n    break;\n  case 3:\n    console.log(&quot;الثلاثاء&quot;);\n    break;\n  default:\n    console.log(&quot;يوم غير معروف&quot;);\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>الثلاثاء</code></pre></div>\n<ul><li><code dir=\"ltr\">switch (day)</code> القيمة التي نفحصها.</li><li><code dir=\"ltr\">case 3:</code> إذا كانت القيمة تساوي 3 (بمقارنة صارمة <code dir=\"ltr\">===</code>).</li><li><code dir=\"ltr\">break</code> تخرج من الـ switch بعد تنفيذ الحالة.</li><li><code dir=\"ltr\">default</code> تُنفَّذ إذا لم تطابق أي حالة، وهي تشبه <code dir=\"ltr\">else</code>.</li></ul>\n<h2>خطورة نسيان break</h2>\n<p>بدون <code dir=\"ltr\">break</code> يستمر التنفيذ إلى الحالات التالية، حتى لو لم تطابق! وهذا يسمى <strong>السقوط (fall-through)</strong>:</p>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>const level = 1;\n\nswitch (level) {\n  case 1:\n    console.log(&quot;المستوى الأول&quot;);\n  case 2:\n    console.log(&quot;المستوى الثاني&quot;);\n  case 3:\n    console.log(&quot;المستوى الثالث&quot;);\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>المستوى الأول\nالمستوى الثاني\nالمستوى الثالث</code></pre></div>\n<div class=\"callout warn\">⚠️ نسيان <code dir=\"ltr\">break</code> من أشهر الأخطاء مع switch. اجعل كتابتها عادة بعد كل حالة.</div>\n<h2>استخدام السقوط عمداً</h2>\n<p>أحياناً نريد أن تشترك عدة قيم في نفس الكود، فنضع الحالات متتالية:</p>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>const month = &quot;فبراير&quot;;\n\nswitch (month) {\n  case &quot;ديسمبر&quot;:\n  case &quot;يناير&quot;:\n  case &quot;فبراير&quot;:\n    console.log(&quot;الشتاء&quot;);\n    break;\n  case &quot;يونيو&quot;:\n  case &quot;يوليو&quot;:\n  case &quot;أغسطس&quot;:\n    console.log(&quot;الصيف&quot;);\n    break;\n  default:\n    console.log(&quot;الربيع أو الخريف&quot;);\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>الشتاء</code></pre></div>\n<h2>switch أم if؟</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>استخدم switch عندما</th><th>استخدم if عندما</th></tr></thead><tbody><tr><td>تقارن متغيراً واحداً بقيم ثابتة محددة</td><td>تحتاج نطاقات مثل <code dir=\"ltr\">score &gt; 90</code></td></tr><tr><td>الحالات كثيرة ومتشابهة</td><td>الشروط مختلفة أو مركبة بـ <code dir=\"ltr\">&amp;&amp;</code> و <code dir=\"ltr\">||</code></td></tr></tbody></table></div>\n<h2>ملخص الدرس</h2>\n<ul><li><code dir=\"ltr\">switch</code> تقارن قيمة واحدة بعدة حالات باستخدام <code dir=\"ltr\">===</code>.</li><li><code dir=\"ltr\">break</code> ضرورية للخروج بعد كل حالة، وإلا يحدث السقوط.</li><li><code dir=\"ltr\">default</code> للحالة التي لا تطابق أي <code dir=\"ltr\">case</code>.</li><li>يمكن جمع عدة حالات لتشترك في نفس الكود.</li></ul>",
   "exercise": {
    "prompt": "<p>اكتب <code dir=\"ltr\">switch</code> يطبع سعر المشروب حسب المتغير <code dir=\"ltr\">drink</code>:</p>\n<ul><li><code dir=\"ltr\">قهوة</code> و <code dir=\"ltr\">شاي</code> سعرهما: <code dir=\"ltr\">10 ريال</code></li><li><code dir=\"ltr\">عصير</code>: <code dir=\"ltr\">15 ريال</code></li><li>أي مشروب آخر: <code dir=\"ltr\">غير متوفر</code></li></ul>\n<p>ثم غيّر قيمة <code dir=\"ltr\">drink</code> في السطر الثالث إلى <code dir=\"ltr\">ماء</code> واطبع مرة أخرى، بحيث تكون المخرجات سطرين.</p>",
    "starter": "let drink = \"شاي\";\n// اكتب switch هنا\n\ndrink = \"ماء\";\n// انسخ نفس الـ switch هنا",
    "expected": "10 ريال\nغير متوفر",
    "solution": "let drink = \"شاي\";\nswitch (drink) {\n  case \"قهوة\":\n  case \"شاي\":\n    console.log(\"10 ريال\");\n    break;\n  case \"عصير\":\n    console.log(\"15 ريال\");\n    break;\n  default:\n    console.log(\"غير متوفر\");\n}\n\ndrink = \"ماء\";\nswitch (drink) {\n  case \"قهوة\":\n  case \"شاي\":\n    console.log(\"10 ريال\");\n    break;\n  case \"عصير\":\n    console.log(\"15 ريال\");\n    break;\n  default:\n    console.log(\"غير متوفر\");\n}"
   },
   "quiz": [
    {
     "q": "ما وظيفة <code dir=\"ltr\">break</code> داخل <code dir=\"ltr\">switch</code>؟",
     "o": [
      "تعيد تشغيل الـ switch",
      "تخرج من الـ switch بعد تنفيذ الحالة",
      "تتخطى الحالة الحالية"
     ],
     "a": 1,
     "why": "بدون <code dir=\"ltr\">break</code> يستمر التنفيذ إلى الحالات التالية."
    },
    {
     "q": "متى تُنفَّذ <code dir=\"ltr\">default</code>؟",
     "o": [
      "دائماً في النهاية",
      "عندما لا تطابق القيمة أي <code dir=\"ltr\">case</code>",
      "عندما تطابق القيمة أول <code dir=\"ltr\">case</code>"
     ],
     "a": 1,
     "why": "<code dir=\"ltr\">default</code> تشبه <code dir=\"ltr\">else</code> في جملة if."
    },
    {
     "q": "أي مقارنة تستخدمها <code dir=\"ltr\">switch</code> بين القيمة والحالات؟",
     "o": [
      "<code dir=\"ltr\">==</code>",
      "<code dir=\"ltr\">===</code>",
      "<code dir=\"ltr\">&gt;=</code>"
     ],
     "a": 1,
     "why": "تستخدم switch المقارنة الصارمة، لذلك <code dir=\"ltr\">case &quot;1&quot;:</code> لا تطابق الرقم <code dir=\"ltr\">1</code>."
    }
   ]
  },
  {
   "body": "<h2>لماذا نحتاج الحلقات؟</h2>\n<p>اطبع الأرقام من 1 إلى 5... سهل، خمسة أسطر. لكن ماذا عن 1 إلى 1000؟ <strong>الحلقات (Loops)</strong> تكرر كوداً عدداً من المرات دون أن نكتبه مراراً.</p>\n<h2>حلقة for</h2>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>for (let i = 1; i &lt;= 5; i++) {\n  console.log(i);\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>1\n2\n3\n4\n5</code></pre></div>\n<p>الحلقة لها ثلاثة أجزاء داخل الأقواس، مفصولة بفاصلة منقوطة:</p>\n<div class=\"table-wrap\"><table><thead><tr><th>الجزء</th><th>الكود</th><th>معناه</th></tr></thead><tbody><tr><td>البداية</td><td><code dir=\"ltr\">let i = 1</code></td><td>يُنفَّذ مرة واحدة قبل أن تبدأ الحلقة</td></tr><tr><td>الشرط</td><td><code dir=\"ltr\">i &lt;= 5</code></td><td>يُفحص قبل كل دورة، وتتوقف الحلقة عندما يصبح خاطئاً</td></tr><tr><td>التحديث</td><td><code dir=\"ltr\">i++</code></td><td>يُنفَّذ بعد كل دورة</td></tr></tbody></table></div>\n<p>يسمى المتغير <code dir=\"ltr\">i</code> <strong>العدّاد</strong>، والاسم <code dir=\"ltr\">i</code> عرف متبع (من كلمة index).</p>\n<h2>تتبّع الحلقة خطوة بخطوة</h2>\n<p>من المفيد أن تتخيل ما يحدث:</p>\n<ol><li><code dir=\"ltr\">i = 1</code>، هل <code dir=\"ltr\">1 &lt;= 5</code>؟ نعم، اطبع 1، ثم <code dir=\"ltr\">i</code> تصبح 2.</li><li>هل <code dir=\"ltr\">2 &lt;= 5</code>؟ نعم، اطبع 2، ثم <code dir=\"ltr\">i</code> تصبح 3.</li><li>... وهكذا حتى <code dir=\"ltr\">i = 6</code>، هل <code dir=\"ltr\">6 &lt;= 5</code>؟ لا، توقف.</li></ol>\n<h2>أمثلة متنوعة</h2>\n<p>العدّ التنازلي:</p>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>for (let i = 3; i &gt;= 1; i--) {\n  console.log(`${i}...`);\n}\nconsole.log(&quot;انطلق!&quot;);</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>3...\n2...\n1...\nانطلق!</code></pre></div>\n<p>القفز بخطوات أكبر، مثلاً الأرقام الزوجية:</p>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>for (let i = 0; i &lt;= 10; i += 2) {\n  console.log(i);\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>0\n2\n4\n6\n8\n10</code></pre></div>\n<h2>التجميع داخل الحلقة</h2>\n<p>من أشهر استخدامات الحلقات <strong>تجميع</strong> نتيجة. مثلاً مجموع الأرقام من 1 إلى 100:</p>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>let sum = 0;\nfor (let i = 1; i &lt;= 100; i++) {\n  sum += i;\n}\nconsole.log(sum);</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>5050</code></pre></div>\n<p>لاحظ أن <code dir=\"ltr\">sum</code> عُرّف <strong>خارج</strong> الحلقة، لأننا نريده أن يحتفظ بقيمته بين الدورات.</p>\n<h2>الحلقة مع الشروط</h2>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>for (let i = 1; i &lt;= 6; i++) {\n  if (i % 2 === 0) {\n    console.log(`${i} زوجي`);\n  } else {\n    console.log(`${i} فردي`);\n  }\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>1 فردي\n2 زوجي\n3 فردي\n4 زوجي\n5 فردي\n6 زوجي</code></pre></div>\n<h2>المرور على أحرف نص</h2>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>const word = &quot;كود&quot;;\nfor (let i = 0; i &lt; word.length; i++) {\n  console.log(`الحرف ${i}: ${word[i]}`);\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>الحرف 0: ك\nالحرف 1: و\nالحرف 2: د</code></pre></div>\n<p>لاحظ استخدام <code dir=\"ltr\">&lt;</code> وليس <code dir=\"ltr\">&lt;=</code>، لأن آخر موقع هو <code dir=\"ltr\">length - 1</code>.</p>\n<div class=\"callout warn\">⚠️ احذر <strong>الحلقة اللانهائية</strong>: إذا لم يصبح الشرط خاطئاً أبداً (مثلاً نسيت <code dir=\"ltr\">i++</code>) ستعمل الحلقة للأبد ويتجمد البرنامج. محرر CodeWay يوقفها بعد 5 ثوانٍ.</div>\n<h2>ملخص الدرس</h2>\n<ul><li><code dir=\"ltr\">for (بداية; شرط; تحديث) { ... }</code> تكرر الكود ما دام الشرط صحيحاً.</li><li>يمكن العد تصاعدياً أو تنازلياً أو بخطوات.</li><li>لتجميع نتيجة، عرّف المتغير قبل الحلقة.</li><li><code dir=\"ltr\">i &lt; str.length</code> للمرور على كل أحرف نص.</li></ul>",
   "exercise": {
    "prompt": "<p>اكتب حلقة <code dir=\"ltr\">for</code> تمر على الأرقام من 1 إلى 15، وتطبع:</p>\n<ul><li><code dir=\"ltr\">FizzBuzz</code> إذا كان الرقم يقبل القسمة على 3 و 5 معاً</li><li><code dir=\"ltr\">Fizz</code> إذا كان يقبل القسمة على 3 فقط</li><li><code dir=\"ltr\">Buzz</code> إذا كان يقبل القسمة على 5 فقط</li><li>الرقم نفسه في غير ذلك</li></ul>\n<p>هذا تمرين مشهور جداً في مقابلات التوظيف! تلميح: افحص حالة 3 و 5 معاً <strong>أولاً</strong>.</p>",
    "starter": "for (let i = 1; i <= 15; i++) {\n  // أكمل هنا\n}",
    "expected": "1\n2\nFizz\n4\nBuzz\nFizz\n7\n8\nFizz\nBuzz\n11\nFizz\n13\n14\nFizzBuzz",
    "solution": "for (let i = 1; i <= 15; i++) {\n  if (i % 3 === 0 && i % 5 === 0) {\n    console.log(\"FizzBuzz\");\n  } else if (i % 3 === 0) {\n    console.log(\"Fizz\");\n  } else if (i % 5 === 0) {\n    console.log(\"Buzz\");\n  } else {\n    console.log(i);\n  }\n}"
   },
   "quiz": [
    {
     "q": "كم مرة تُنفَّذ هذه الحلقة؟ <code dir=\"ltr\">for (let i = 0; i &lt; 4; i++)</code>",
     "o": [
      "3 مرات",
      "4 مرات",
      "5 مرات"
     ],
     "a": 1,
     "why": "القيم هي 0 و 1 و 2 و 3، أي أربع دورات. عند 4 يصبح الشرط خاطئاً."
    },
    {
     "q": "متى يُفحص شرط حلقة for؟",
     "o": [
      "قبل كل دورة",
      "بعد كل دورة",
      "مرة واحدة في البداية"
     ],
     "a": 0,
     "why": "يُفحص الشرط قبل كل دورة، وإذا كان خاطئاً من البداية لا تُنفَّذ الحلقة أبداً."
    },
    {
     "q": "لماذا نعرّف متغير المجموع <code dir=\"ltr\">sum</code> قبل الحلقة وليس داخلها؟",
     "o": [
      "لأن JavaScript لا تسمح بتعريف متغيرات داخل الحلقات",
      "لأن تعريفه داخلها يعيده إلى الصفر في كل دورة",
      "لأن ذلك أسرع فقط"
     ],
     "a": 1,
     "why": "لو عُرّف داخل الحلقة لأُنشئ من جديد في كل دورة وفُقد ما جمعناه."
    }
   ]
  },
  {
   "body": "<h2>حلقة while</h2>\n<p>تستخدم <code dir=\"ltr\">for</code> عندما نعرف <strong>عدد التكرارات</strong> مسبقاً. أما <code dir=\"ltr\">while</code> فنستخدمها عندما نريد التكرار <strong>ما دام شرط معين صحيحاً</strong>، دون معرفة عدد المرات.</p>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>let balance = 1000;\nlet months = 0;\n\nwhile (balance &gt; 0) {\n  balance -= 300;\n  months++;\n}\nconsole.log(`نفد الرصيد بعد ${months} أشهر`);</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>نفد الرصيد بعد 4 أشهر</code></pre></div>\n<p>الصيغة: <code dir=\"ltr\">while (شرط) { كود }</code>. يُفحص الشرط قبل كل دورة تماماً مثل for.</p>\n<h2>مثال: مضاعفة حتى حد معين</h2>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>let n = 1;\nwhile (n &lt; 100) {\n  n *= 2;\n}\nconsole.log(n);</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>128</code></pre></div>\n<p>لا نعرف مسبقاً كم مرة سنضاعف، لذلك <code dir=\"ltr\">while</code> مناسبة هنا.</p>\n<h2>for و while وجهان لعملة واحدة</h2>\n<p>أي حلقة for يمكن كتابتها بـ while:</p>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>let i = 1;\nwhile (i &lt;= 3) {\n  console.log(i);\n  i++;\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>1\n2\n3</code></pre></div>\n<p>لكن لاحظ أن البداية والتحديث تفرقا في أماكن مختلفة، ولهذا <code dir=\"ltr\">for</code> أوضح عندما نعدّ.</p>\n<h2>حلقة do...while</h2>\n<p>الفرق الوحيد: <code dir=\"ltr\">do...while</code> تنفّذ الكود <strong>مرة واحدة على الأقل</strong> قبل فحص الشرط، لأن الشرط في الأسفل:</p>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>let attempts = 10;\n\ndo {\n  console.log(`المحاولة رقم ${attempts}`);\n  attempts++;\n} while (attempts &lt; 3);</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>المحاولة رقم 10</code></pre></div>\n<p>الشرط <code dir=\"ltr\">10 &lt; 3</code> خاطئ من البداية، ومع ذلك نُفّذ الكود مرة واحدة. لو استخدمنا <code dir=\"ltr\">while</code> العادية لما طُبع شيء.</p>\n<p>متى نحتاجها؟ مثلاً عند طلب إدخال من المستخدم: نسأل مرة على الأقل، ثم نكرر السؤال إذا كانت الإجابة غير صالحة.</p>\n<h2>مقارنة سريعة</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>الحلقة</th><th>متى تستخدمها</th></tr></thead><tbody><tr><td><code dir=\"ltr\">for</code></td><td>عدد التكرارات معروف (عدّ، أو المرور على نص أو قائمة)</td></tr><tr><td><code dir=\"ltr\">while</code></td><td>التكرار حتى يتغير شرط ما، وعدد المرات غير معروف</td></tr><tr><td><code dir=\"ltr\">do...while</code></td><td>مثل while لكن يجب التنفيذ مرة واحدة على الأقل</td></tr></tbody></table></div>\n<div class=\"callout warn\">⚠️ في <code dir=\"ltr\">while</code> تأكد أن شيئاً داخل الحلقة <strong>يغيّر الشرط</strong> في النهاية، وإلا ستحصل على حلقة لا نهائية.</div>\n<h2>ملخص الدرس</h2>\n<ul><li><code dir=\"ltr\">while</code> تكرر ما دام الشرط صحيحاً، وتناسب الحالات التي لا نعرف فيها عدد التكرارات.</li><li><code dir=\"ltr\">do...while</code> تنفّذ مرة واحدة على الأقل لأن الشرط يُفحص بعد التنفيذ.</li><li>تأكد دائماً من أن الشرط سيصبح خاطئاً يوماً ما.</li></ul>",
   "exercise": {
    "prompt": "<p>لديك رقم <code dir=\"ltr\">n</code>. استخدم حلقة <code dir=\"ltr\">while</code> لحساب <strong>عدد أرقامه</strong>: اقسم الرقم على 10 باستخدام <code dir=\"ltr\">Math.floor(n / 10)</code> في كل دورة، وعدّ الدورات حتى يصبح 0.</p>\n<p>مثال: 4096 ← 409 ← 40 ← 4 ← 0، أي 4 أرقام.</p>\n<p>اطبع النتيجة بالشكل: <code dir=\"ltr\">عدد الأرقام: 4</code></p>",
    "starter": "let n = 4096;\nlet digits = 0;\n\n// اكتب حلقة while هنا",
    "expected": "عدد الأرقام: 4",
    "solution": "let n = 4096;\nlet digits = 0;\n\nwhile (n > 0) {\n  n = Math.floor(n / 10);\n  digits++;\n}\nconsole.log(`عدد الأرقام: ${digits}`);"
   },
   "quiz": [
    {
     "q": "ما الفرق بين <code dir=\"ltr\">while</code> و <code dir=\"ltr\">do...while</code>؟",
     "o": [
      "لا يوجد فرق",
      "<code dir=\"ltr\">do...while</code> تنفّذ الكود مرة واحدة على الأقل حتى لو كان الشرط خاطئاً",
      "<code dir=\"ltr\">while</code> أسرع دائماً"
     ],
     "a": 1,
     "why": "في do...while يأتي الشرط بعد الكود، فيُنفَّذ الكود مرة قبل أي فحص."
    },
    {
     "q": "كم مرة يُطبع &quot;مرحبا&quot;؟ <code dir=\"ltr\">let x = 5; while (x &lt; 5) { console.log(&quot;مرحبا&quot;); x++; }</code>",
     "o": [
      "ولا مرة",
      "مرة واحدة",
      "5 مرات"
     ],
     "a": 0,
     "why": "الشرط <code dir=\"ltr\">5 &lt; 5</code> خاطئ من البداية، فلا تُنفَّذ الحلقة."
    },
    {
     "q": "أي حلقة هي الأنسب لتكرار طلب كلمة المرور حتى يدخل المستخدم كلمة صحيحة؟",
     "o": [
      "<code dir=\"ltr\">for</code> بعدد ثابت من التكرارات",
      "<code dir=\"ltr\">do...while</code> لأننا نطلب مرة واحدة على الأقل",
      "لا نحتاج حلقة"
     ],
     "a": 1,
     "why": "نطلب كلمة المرور مرة على الأقل، ثم نكرر ما دامت خاطئة."
    }
   ]
  },
  {
   "body": "<h2>التحكم في سير الحلقة</h2>\n<p>أحياناً نحتاج أن نتوقف عن الحلقة قبل نهايتها، أو نتخطى دورة معينة. هنا تأتي <code dir=\"ltr\">break</code> و <code dir=\"ltr\">continue</code>.</p>\n<h2>break: الخروج من الحلقة فوراً</h2>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>const numbers = &quot;3 8 12 7 15 4&quot;;\nconst list = numbers.split(&quot; &quot;);\n\nfor (let i = 0; i &lt; list.length; i++) {\n  const n = Number(list[i]);\n  if (n &gt; 10) {\n    console.log(`أول رقم أكبر من 10 هو ${n}`);\n    break;\n  }\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>أول رقم أكبر من 10 هو 12</code></pre></div>\n<p>بمجرد أن وجدنا ما نبحث عنه لا داعي لإكمال البحث، فـ <code dir=\"ltr\">break</code> توقف الحلقة كلياً. بدونها لكانت طبعت 15 أيضاً.</p>\n<h2>continue: تخطي الدورة الحالية</h2>\n<p><code dir=\"ltr\">continue</code> لا توقف الحلقة، بل تقفز إلى <strong>الدورة التالية</strong> مباشرة متجاهلة باقي الكود في الدورة الحالية:</p>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>for (let i = 1; i &lt;= 7; i++) {\n  if (i % 3 === 0) {\n    continue;\n  }\n  console.log(i);\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>1\n2\n4\n5\n7</code></pre></div>\n<p>تخطينا 3 و 6 لأنهما يقبلان القسمة على 3.</p>\n<h2>الفرق بالصورة</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>الأمر</th><th>ماذا يحدث</th></tr></thead><tbody><tr><td><code dir=\"ltr\">break</code></td><td>يخرج من الحلقة نهائياً ويكمل الكود الذي بعدها</td></tr><tr><td><code dir=\"ltr\">continue</code></td><td>يترك الدورة الحالية وينتقل للدورة التالية</td></tr></tbody></table></div>\n<h2>مثال واقعي: البحث مع break</h2>\n<p>لنتحقق هل الرقم أولي (لا يقبل القسمة إلا على 1 ونفسه):</p>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>const n = 29;\nlet isPrime = n &gt; 1;\n\nfor (let d = 2; d &lt; n; d++) {\n  if (n % d === 0) {\n    isPrime = false;\n    break;\n  }\n}\nconsole.log(isPrime ? `${n} عدد أولي` : `${n} ليس أولياً`);</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>29 عدد أولي</code></pre></div>\n<p>إذا وجدنا قاسماً واحداً نعرف الجواب فوراً، فلا داعي لفحص باقي الأرقام.</p>\n<h2>الحلقات المتداخلة</h2>\n<p>يمكن وضع حلقة داخل حلقة. مثلاً جدول ضرب صغير:</p>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>for (let row = 1; row &lt;= 3; row++) {\n  let line = &quot;&quot;;\n  for (let col = 1; col &lt;= 3; col++) {\n    line += `${row * col}\\t`;\n  }\n  console.log(line);\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>1\t2\t3\n2\t4\t6\n3\t6\t9</code></pre></div>\n<p>الرمز <code dir=\"ltr\">\\t</code> يضيف مسافة جدولة (Tab). لاحظ أن الحلقة الداخلية تكتمل بالكامل في كل دورة من الحلقة الخارجية.</p>\n<div class=\"callout tip\">💡 <code dir=\"ltr\">break</code> و <code dir=\"ltr\">continue</code> تؤثران على <strong>أقرب حلقة</strong> فقط. إذا استخدمت <code dir=\"ltr\">break</code> داخل الحلقة الداخلية، تخرج منها فقط وتستمر الخارجية.</div>\n<h2>ملخص الدرس</h2>\n<ul><li><code dir=\"ltr\">break</code> توقف الحلقة كلياً، وهي مفيدة عند إيجاد ما نبحث عنه.</li><li><code dir=\"ltr\">continue</code> تتخطى بقية الدورة الحالية وتنتقل للتالية.</li><li>يمكن تداخل الحلقات، و <code dir=\"ltr\">break</code> و <code dir=\"ltr\">continue</code> تؤثران على أقرب حلقة فقط.</li></ul>",
   "exercise": {
    "prompt": "<p>لديك نص يحتوي أرقاماً مفصولة بمسافات. مرّ عليها بحلقة <code dir=\"ltr\">for</code> و:</p>\n<ul><li><strong>تخطَّ</strong> الأرقام السالبة باستخدام <code dir=\"ltr\">continue</code>.</li><li><strong>توقف</strong> تماماً عند الوصول إلى الرقم <code dir=\"ltr\">0</code> باستخدام <code dir=\"ltr\">break</code>.</li><li>اجمع باقي الأرقام.</li></ul>\n<p>في النهاية اطبع: <code dir=\"ltr\">المجموع: 18</code></p>",
    "starter": "const data = \"5 -2 7 -9 6 0 10 3\".split(\" \");\nlet sum = 0;\n\nfor (let i = 0; i < data.length; i++) {\n  const n = Number(data[i]);\n  // أكمل هنا\n}",
    "expected": "المجموع: 18",
    "solution": "const data = \"5 -2 7 -9 6 0 10 3\".split(\" \");\nlet sum = 0;\n\nfor (let i = 0; i < data.length; i++) {\n  const n = Number(data[i]);\n  if (n === 0) {\n    break;\n  }\n  if (n < 0) {\n    continue;\n  }\n  sum += n;\n}\nconsole.log(`المجموع: ${sum}`);"
   },
   "quiz": [
    {
     "q": "ماذا تفعل <code dir=\"ltr\">continue</code>؟",
     "o": [
      "تنهي الحلقة",
      "تتخطى بقية الدورة الحالية وتنتقل للدورة التالية",
      "تعيد الحلقة من البداية"
     ],
     "a": 1,
     "why": "continue لا توقف الحلقة، بل تقفز للدورة التالية فقط."
    },
    {
     "q": "ما مخرجات: <code dir=\"ltr\">for (let i = 1; i &lt;= 5; i++) { if (i === 3) break; console.log(i); }</code>؟",
     "o": [
      "1 و 2",
      "1 و 2 و 4 و 5",
      "1 و 2 و 3"
     ],
     "a": 0,
     "why": "عند <code dir=\"ltr\">i === 3</code> تتوقف الحلقة تماماً قبل الطباعة."
    },
    {
     "q": "إذا استُخدمت <code dir=\"ltr\">break</code> داخل حلقة داخلية ضمن حلقة خارجية، ماذا يحدث؟",
     "o": [
      "تتوقف الحلقتان",
      "تتوقف الحلقة الداخلية فقط وتستمر الخارجية",
      "يحدث خطأ"
     ],
     "a": 1,
     "why": "break تؤثر على أقرب حلقة تحيط بها فقط."
    }
   ]
  }
 ],
 [
  {
   "body": "<h2>ما هي الدالة؟</h2>\n<p>الدالة (Function) هي <strong>مجموعة أوامر لها اسم</strong>، نكتبها مرة واحدة ونستدعيها متى شئنا. فكّر فيها كوصفة طبخ: تكتب الوصفة مرة، ثم تطبخها كلما أردت دون إعادة كتابتها.</p>\n<p>الدوال تحل ثلاث مشاكل:</p>\n<ul><li><strong>التكرار:</strong> بدلاً من نسخ نفس الكود في عشرة أماكن، تستدعي الدالة.</li><li><strong>التنظيم:</strong> تقسّم البرنامج الكبير إلى أجزاء صغيرة لكل منها اسم واضح.</li><li><strong>سهولة التعديل:</strong> إذا أردت تغيير السلوك، تعدّل الدالة في مكان واحد فقط.</li></ul>\n<p>لقد استخدمت دوالاً جاهزة بالفعل: <code dir=\"ltr\">console.log()</code> و <code dir=\"ltr\">Number()</code> و <code dir=\"ltr\">toUpperCase()</code>. الآن ستكتب دوالك الخاصة.</p>\n<h2>تعريف دالة</h2>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>function greet() {\n  console.log(&quot;مرحباً!&quot;);\n  console.log(&quot;أهلاً بك في CodeWay&quot;);\n}</code></pre></div>\n<ul><li><code dir=\"ltr\">function</code> الكلمة التي تعني &quot;سأعرّف دالة&quot;.</li><li><code dir=\"ltr\">greet</code> اسم الدالة، ويُفضل أن يكون <strong>فعلاً</strong> يصف ما تفعله.</li><li><code dir=\"ltr\">()</code> الأقواس، وسنضع فيها المدخلات في الدرس القادم.</li><li><code dir=\"ltr\">{ }</code> جسم الدالة: الأوامر التي تُنفَّذ.</li></ul>\n<div class=\"callout warn\">⚠️ تعريف الدالة <strong>لا ينفّذها</strong>. الكود السابق وحده لا يطبع شيئاً.</div>\n<h2>استدعاء الدالة</h2>\n<p>لتنفيذ الدالة نكتب اسمها متبوعاً بالأقواس:</p>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>function greet() {\n  console.log(&quot;مرحباً!&quot;);\n}\n\ngreet();\ngreet();\ngreet();</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>مرحباً!\nمرحباً!\nمرحباً!</code></pre></div>\n<p>كل استدعاء ينفّذ جسم الدالة كاملاً من جديد.</p>\n<h2>الدوال تجعل الكود أوضح</h2>\n<p>قارن بين برنامج طويل بلا دوال، وبرنامج مقسّم:</p>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>function printHeader() {\n  console.log(&quot;==========&quot;);\n  console.log(&quot;  فاتورة  &quot;);\n  console.log(&quot;==========&quot;);\n}\n\nfunction printFooter() {\n  console.log(&quot;----------&quot;);\n  console.log(&quot;شكراً لزيارتكم&quot;);\n}\n\nprintHeader();\nconsole.log(&quot;قهوة: 12 ريال&quot;);\nprintFooter();</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>==========\n  فاتورة  \n==========\nقهوة: 12 ريال\n----------\nشكراً لزيارتكم</code></pre></div>\n<p>من يقرأ آخر ثلاثة أسطر يفهم البرنامج فوراً دون الدخول في التفاصيل.</p>\n<h2>الاستدعاء قبل التعريف (Hoisting)</h2>\n<p>الدوال المعرّفة بالكلمة <code dir=\"ltr\">function</code> يمكن استدعاؤها <strong>قبل</strong> سطر تعريفها، لأن JavaScript ترفعها إلى الأعلى قبل التنفيذ:</p>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>sayHi();\n\nfunction sayHi() {\n  console.log(&quot;هاي!&quot;);\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>هاي!</code></pre></div>\n<p>ومع ذلك، الأوضح عادة أن تعرّف الدوال أولاً ثم تستدعيها.</p>\n<h2>تسمية الدوال</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>جيد</th><th>سيئ</th><th>السبب</th></tr></thead><tbody><tr><td><code dir=\"ltr\">calculateTotal</code></td><td><code dir=\"ltr\">total</code></td><td>الدالة تفعل شيئاً، فاسمها فعل</td></tr><tr><td><code dir=\"ltr\">sendEmail</code></td><td><code dir=\"ltr\">doStuff</code></td><td>الاسم يصف المهمة بدقة</td></tr><tr><td><code dir=\"ltr\">isValidEmail</code></td><td><code dir=\"ltr\">check</code></td><td>الدوال التي تجيب بنعم أو لا تبدأ غالباً بـ <code dir=\"ltr\">is</code> أو <code dir=\"ltr\">has</code></td></tr></tbody></table></div>\n<h2>ملخص الدرس</h2>\n<ul><li>الدالة مجموعة أوامر لها اسم، تُكتب مرة وتُستدعى مرات.</li><li>نعرّفها بـ <code dir=\"ltr\">function name() { ... }</code> ونستدعيها بـ <code dir=\"ltr\">name()</code>.</li><li>التعريف وحده لا ينفّذ شيئاً.</li><li>اسم الدالة فعل يصف ما تفعله.</li></ul>",
   "exercise": {
    "prompt": "<p>عرّف دالة اسمها <code dir=\"ltr\">printLine</code> تطبع السطر <code dir=\"ltr\">--------</code>، ودالة اسمها <code dir=\"ltr\">printTitle</code> تطبع <code dir=\"ltr\">قائمة الطعام</code>.</p>\n<p>ثم استدعِ الدوال بحيث تكون المخرجات:</p>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>--------\nقائمة الطعام\n--------</code></pre></div>",
    "starter": "// عرّف الدالتين هنا\n\n\n// استدعِ الدوال هنا",
    "expected": "--------\nقائمة الطعام\n--------",
    "solution": "function printLine() {\n  console.log(\"--------\");\n}\n\nfunction printTitle() {\n  console.log(\"قائمة الطعام\");\n}\n\nprintLine();\nprintTitle();\nprintLine();"
   },
   "quiz": [
    {
     "q": "ماذا يحدث عند تنفيذ هذا الكود وحده؟ <code dir=\"ltr\">function hello() { console.log(&quot;Hi&quot;); }</code>",
     "o": [
      "يُطبع Hi مرة واحدة",
      "لا يُطبع شيء",
      "يحدث خطأ"
     ],
     "a": 1,
     "why": "التعريف يجهّز الدالة فقط، ولا تُنفَّذ إلا عند استدعائها بـ <code dir=\"ltr\">hello()</code>."
    },
    {
     "q": "كيف نستدعي دالة اسمها <code dir=\"ltr\">start</code>؟",
     "o": [
      "<code dir=\"ltr\">call start</code>",
      "<code dir=\"ltr\">start;</code>",
      "<code dir=\"ltr\">start();</code>"
     ],
     "a": 2,
     "why": "الأقواس <code dir=\"ltr\">()</code> هي التي تنفّذ الدالة."
    },
    {
     "q": "أي اسم أفضل لدالة تحسب متوسط الدرجات؟",
     "o": [
      "<code dir=\"ltr\">calculateAverage</code>",
      "<code dir=\"ltr\">average2</code>",
      "<code dir=\"ltr\">x</code>"
     ],
     "a": 0,
     "why": "اسم الدالة يجب أن يكون فعلاً واضحاً يصف ما تفعله."
    }
   ]
  },
  {
   "body": "<h2>الدوال تستقبل مدخلات</h2>\n<p>دالة <code dir=\"ltr\">greet</code> في الدرس السابق تطبع نفس الرسالة دائماً. ماذا لو أردنا ترحيباً باسم مختلف كل مرة؟ نعطي الدالة <strong>معاملات (Parameters)</strong>:</p>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>function greet(name) {\n  console.log(`مرحباً يا ${name}!`);\n}\n\ngreet(&quot;سارة&quot;);\ngreet(&quot;خالد&quot;);</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>مرحباً يا سارة!\nمرحباً يا خالد!</code></pre></div>\n<ul><li><code dir=\"ltr\">name</code> في التعريف يسمى <strong>معاملاً (parameter)</strong>، وهو متغير يعيش داخل الدالة.</li><li><code dir=\"ltr\">&quot;سارة&quot;</code> عند الاستدعاء تسمى <strong>وسيطاً (argument)</strong>، وهي القيمة الفعلية التي تُعطى للمعامل.</li></ul>\n<h2>عدة معاملات</h2>\n<p>نفصل بينها بفاصلة، وترتيب الوسائط مهم:</p>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>function introduce(name, city, age) {\n  console.log(`أنا ${name} من ${city}، عمري ${age}`);\n}\n\nintroduce(&quot;ليلى&quot;, &quot;جدة&quot;, 24);</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>أنا ليلى من جدة، عمري 24</code></pre></div>\n<h2>القيم الافتراضية</h2>\n<p>إذا لم يُعطَ وسيط لمعامل، تكون قيمته <code dir=\"ltr\">undefined</code>. يمكننا تحديد <strong>قيمة افتراضية</strong>:</p>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>function orderCoffee(size = &quot;وسط&quot;) {\n  console.log(`قهوة حجم ${size}`);\n}\n\norderCoffee(&quot;كبير&quot;);\norderCoffee();</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>قهوة حجم كبير\nقهوة حجم وسط</code></pre></div>\n<h2>إرجاع قيمة باستخدام return</h2>\n<p>حتى الآن كانت دوالنا <strong>تطبع</strong> النتيجة. لكن الأهم أن تُرجع الدالة نتيجة يمكن استخدامها في بقية البرنامج. هنا تأتي <code dir=\"ltr\">return</code>:</p>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>function add(a, b) {\n  return a + b;\n}\n\nconst result = add(4, 6);\nconsole.log(result);\nconsole.log(add(10, 20) * 2);</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>10\n60</code></pre></div>\n<p><code dir=\"ltr\">return</code> تفعل أمرين: <strong>تعيد القيمة</strong> إلى مكان الاستدعاء، و<strong>تنهي الدالة فوراً</strong>.</p>\n<h2>الفرق بين console.log و return</h2>\n<p>هذا من أهم المفاهيم للمبتدئ:</p>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>function printDouble(n) {\n  console.log(n * 2);\n}\n\nfunction getDouble(n) {\n  return n * 2;\n}\n\nconst a = printDouble(5);\nconst b = getDouble(5);\nconsole.log(a, b);</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>10\nundefined 10</code></pre></div>\n<ul><li><code dir=\"ltr\">printDouble</code> <strong>تعرض</strong> النتيجة على الشاشة فقط ثم تختفي، ولذلك <code dir=\"ltr\">a</code> قيمتها <code dir=\"ltr\">undefined</code>.</li><li><code dir=\"ltr\">getDouble</code> <strong>تسلّم</strong> النتيجة لك، فتخزنها في <code dir=\"ltr\">b</code> وتستخدمها كما تشاء.</li></ul>\n<div class=\"callout tip\">💡 القاعدة: الدالة التي تحسب شيئاً يجب أن <strong>تُرجعه</strong> بـ <code dir=\"ltr\">return</code>، واترك قرار طباعته لمن يستدعيها.</div>\n<h2>return تنهي الدالة مبكراً</h2>\n<p>أي كود بعد <code dir=\"ltr\">return</code> لا يُنفَّذ، وهذا مفيد للتعامل مع الحالات الخاصة أولاً:</p>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>function divide(a, b) {\n  if (b === 0) {\n    return &quot;لا يمكن القسمة على صفر&quot;;\n  }\n  return a / b;\n}\n\nconsole.log(divide(10, 2));\nconsole.log(divide(10, 0));</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>5\nلا يمكن القسمة على صفر</code></pre></div>\n<h2>الدوال تستدعي دوالاً</h2>\n<p>يمكن بناء دوال من دوال أصغر:</p>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>function square(n) {\n  return n * n;\n}\n\nfunction sumOfSquares(a, b) {\n  return square(a) + square(b);\n}\n\nconsole.log(sumOfSquares(3, 4));</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>25</code></pre></div>\n<h2>ملخص الدرس</h2>\n<ul><li>المعاملات تجعل الدالة مرنة، ونعطيها القيم عند الاستدعاء.</li><li><code dir=\"ltr\">param = قيمة</code> تحدد قيمة افتراضية.</li><li><code dir=\"ltr\">return</code> تعيد نتيجة وتنهي الدالة فوراً.</li><li>الدالة التي لا تحتوي <code dir=\"ltr\">return</code> تعيد <code dir=\"ltr\">undefined</code>.</li><li>فضّل إرجاع النتائج على طباعتها داخل الدالة.</li></ul>",
   "exercise": {
    "prompt": "<p>اكتب دالة اسمها <code dir=\"ltr\">calculatePrice</code> تستقبل:</p>\n<ul><li><code dir=\"ltr\">price</code> سعر المنتج</li><li><code dir=\"ltr\">discount</code> نسبة الخصم بالمئة، وقيمتها الافتراضية <code dir=\"ltr\">0</code></li></ul>\n<p>وتُرجع السعر بعد الخصم. مثلاً <code dir=\"ltr\">calculatePrice(200, 25)</code> تُرجع <code dir=\"ltr\">150</code>.</p>\n<p>الكود الموجود يستدعي الدالة ويطبع النتائج، لا تعدّله.</p>",
    "starter": "// اكتب الدالة هنا\n\n\nconsole.log(calculatePrice(200, 25));\nconsole.log(calculatePrice(80));\nconsole.log(calculatePrice(50, 10) + calculatePrice(50, 10));",
    "expected": "150\n80\n90",
    "solution": "function calculatePrice(price, discount = 0) {\n  return price - (price * discount) / 100;\n}\n\nconsole.log(calculatePrice(200, 25));\nconsole.log(calculatePrice(80));\nconsole.log(calculatePrice(50, 10) + calculatePrice(50, 10));"
   },
   "quiz": [
    {
     "q": "ما الذي تُرجعه دالة لا تحتوي على <code dir=\"ltr\">return</code>؟",
     "o": [
      "<code dir=\"ltr\">0</code>",
      "<code dir=\"ltr\">null</code>",
      "<code dir=\"ltr\">undefined</code>"
     ],
     "a": 2,
     "why": "أي دالة لا تُرجع شيئاً صراحة تُرجع <code dir=\"ltr\">undefined</code>."
    },
    {
     "q": "ماذا يُطبع؟ <code dir=\"ltr\">function f() { return 1; console.log(&quot;A&quot;); } console.log(f());</code>",
     "o": [
      "<code dir=\"ltr\">1</code> فقط",
      "<code dir=\"ltr\">A</code> ثم <code dir=\"ltr\">1</code>",
      "<code dir=\"ltr\">1</code> ثم <code dir=\"ltr\">A</code>"
     ],
     "a": 0,
     "why": "<code dir=\"ltr\">return</code> تنهي الدالة فوراً، فالسطر الذي بعدها لا يُنفَّذ."
    },
    {
     "q": "في <code dir=\"ltr\">function greet(name = &quot;ضيف&quot;)</code>، ماذا يُطبع عند استدعاء <code dir=\"ltr\">greet()</code> دون وسيط إذا كانت الدالة تطبع name؟",
     "o": [
      "<code dir=\"ltr\">undefined</code>",
      "<code dir=\"ltr\">ضيف</code>",
      "خطأ"
     ],
     "a": 1,
     "why": "عند غياب الوسيط تُستخدم القيمة الافتراضية."
    }
   ]
  },
  {
   "body": "<h2>طريقة أقصر لكتابة الدوال</h2>\n<p>في JavaScript الحديثة توجد صيغة مختصرة تسمى <strong>الدوال السهمية (Arrow Functions)</strong>، وستراها في كل مكان تقريباً في الأكواد الحديثة ومكتبات مثل React.</p>\n<h2>من دالة عادية إلى سهمية</h2>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>// دالة عادية\nfunction multiply(a, b) {\n  return a * b;\n}\n\n// نفس الدالة كدالة سهمية\nconst multiplyArrow = (a, b) =&gt; {\n  return a * b;\n};\n\nconsole.log(multiply(3, 4), multiplyArrow(3, 4));</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>12 12</code></pre></div>\n<p>الخطوات: نحذف كلمة <code dir=\"ltr\">function</code>، ونخزّن الدالة في ثابت، ونضع السهم <code dir=\"ltr\">=&gt;</code> بين المعاملات والجسم.</p>\n<h2>الاختصار الأقوى: الإرجاع الضمني</h2>\n<p>إذا كان جسم الدالة <strong>تعبيراً واحداً فقط</strong> نُرجعه، نحذف الأقواس المعقوفة وكلمة <code dir=\"ltr\">return</code>:</p>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>const multiply = (a, b) =&gt; a * b;\nconst square = n =&gt; n * n;\nconst sayHello = () =&gt; &quot;مرحباً&quot;;\n\nconsole.log(multiply(5, 6));\nconsole.log(square(9));\nconsole.log(sayHello());</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>30\n81\nمرحباً</code></pre></div>\n<div class=\"table-wrap\"><table><thead><tr><th>الحالة</th><th>الصيغة</th></tr></thead><tbody><tr><td>بدون معاملات</td><td><code dir=\"ltr\">() =&gt; ...</code></td></tr><tr><td>معامل واحد</td><td><code dir=\"ltr\">n =&gt; ...</code> (الأقواس اختيارية)</td></tr><tr><td>عدة معاملات</td><td><code dir=\"ltr\">(a, b) =&gt; ...</code></td></tr><tr><td>جسم من سطر واحد</td><td><code dir=\"ltr\">x =&gt; x * 2</code> (إرجاع تلقائي)</td></tr><tr><td>جسم من عدة أسطر</td><td><code dir=\"ltr\">x =&gt; { ...; return y; }</code></td></tr></tbody></table></div>\n<div class=\"callout warn\">⚠️ إذا استخدمت الأقواس المعقوفة <code dir=\"ltr\">{ }</code> يجب أن تكتب <code dir=\"ltr\">return</code> بنفسك، وإلا ستُرجع الدالة <code dir=\"ltr\">undefined</code>.</div>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>const bad = n =&gt; { n * 2 };\nconst good = n =&gt; { return n * 2; };\nconsole.log(bad(5), good(5));</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>undefined 10</code></pre></div>\n<h2>الدوال قيم مثل غيرها</h2>\n<p>في JavaScript الدالة <strong>قيمة</strong> يمكن تخزينها في متغير، وتمريرها لدالة أخرى. وهذا أهم استخدام للدوال السهمية:</p>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>function applyTwice(fn, value) {\n  return fn(fn(value));\n}\n\nconsole.log(applyTwice(n =&gt; n + 3, 10));\nconsole.log(applyTwice(n =&gt; n * 2, 5));</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>16\n20</code></pre></div>\n<p>مررنا دالة كاملة كوسيط! الدالة الممررة بهذا الشكل تسمى <strong>دالة رد النداء (Callback)</strong>، وستراها كثيراً مع المصفوفات والأحداث في الوحدات القادمة.</p>\n<h2>تعبير الدالة (Function Expression)</h2>\n<p>يمكن أيضاً تخزين دالة عادية في متغير:</p>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>const greet = function (name) {\n  return `أهلاً ${name}`;\n};\nconsole.log(greet(&quot;نور&quot;));</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>أهلاً نور</code></pre></div>\n<p>الفرق المهم عن تعريف <code dir=\"ltr\">function</code> العادي: الدوال المخزنة في متغيرات (عادية أو سهمية) <strong>لا يمكن استدعاؤها قبل سطر تعريفها</strong>.</p>\n<h2>متى أستخدم أيهما؟</h2>\n<ul><li><strong>الدوال السهمية:</strong> للدوال القصيرة، وخاصة كـ callback.</li><li>**<code dir=\"ltr\">function</code> العادية:** للدوال الرئيسية الكبيرة في البرنامج، وعندما تحتاج <code dir=\"ltr\">this</code> (سنتعلمه في الوحدة 8).</li></ul>\n<h2>ملخص الدرس</h2>\n<ul><li>الصيغة السهمية: <code dir=\"ltr\">(a, b) =&gt; a + b</code>.</li><li>بدون <code dir=\"ltr\">{ }</code> يكون الإرجاع تلقائياً، ومع <code dir=\"ltr\">{ }</code> يجب كتابة <code dir=\"ltr\">return</code>.</li><li>الدوال قيم يمكن تخزينها وتمريرها لدوال أخرى (callbacks).</li></ul>",
   "exercise": {
    "prompt": "<p>حوّل الدوال الثلاث التالية إلى <strong>دوال سهمية مختصرة</strong> (سطر واحد بإرجاع ضمني لكل منها)، مع الحفاظ على أسمائها:</p>\n<ul><li><code dir=\"ltr\">isEven(n)</code> تُرجع <code dir=\"ltr\">true</code> إذا كان الرقم زوجياً</li><li><code dir=\"ltr\">fullName(first, last)</code> تُرجع الاسم الكامل بينهما مسافة</li><li><code dir=\"ltr\">getPi()</code> تُرجع <code dir=\"ltr\">3.14</code></li></ul>\n<p>ثم أكمل الدالة <code dir=\"ltr\">applyToFive(fn)</code> التي تُرجع ناتج استدعاء <code dir=\"ltr\">fn</code> على الرقم 5.</p>",
    "starter": "function isEven(n) {\n  return n % 2 === 0;\n}\nfunction fullName(first, last) {\n  return first + \" \" + last;\n}\nfunction getPi() {\n  return 3.14;\n}\nfunction applyToFive(fn) {\n  // أكمل هنا\n}\n\nconsole.log(isEven(4), isEven(7));\nconsole.log(fullName(\"محمد\", \"سالم\"));\nconsole.log(getPi());\nconsole.log(applyToFive(n => n * 10));",
    "expected": "true false\nمحمد سالم\n3.14\n50",
    "solution": "const isEven = n => n % 2 === 0;\nconst fullName = (first, last) => `${first} ${last}`;\nconst getPi = () => 3.14;\nconst applyToFive = fn => fn(5);\n\nconsole.log(isEven(4), isEven(7));\nconsole.log(fullName(\"محمد\", \"سالم\"));\nconsole.log(getPi());\nconsole.log(applyToFive(n => n * 10));"
   },
   "quiz": [
    {
     "q": "ما ناتج <code dir=\"ltr\">const f = x =&gt; x + 1; console.log(f(9));</code>؟",
     "o": [
      "<code dir=\"ltr\">10</code>",
      "<code dir=\"ltr\">9</code>",
      "<code dir=\"ltr\">undefined</code>"
     ],
     "a": 0,
     "why": "الدالة بلا أقواس معقوفة تُرجع ناتج التعبير تلقائياً."
    },
    {
     "q": "ما المشكلة في: <code dir=\"ltr\">const half = n =&gt; { n / 2 };</code>؟",
     "o": [
      "الصيغة خاطئة وتسبب خطأ",
      "تُرجع <code dir=\"ltr\">undefined</code> لأن الأقواس المعقوفة تتطلب <code dir=\"ltr\">return</code>",
      "لا مشكلة"
     ],
     "a": 1,
     "why": "مع <code dir=\"ltr\">{ }</code> يصبح الجسم كتلة أوامر، ولا يحدث إرجاع إلا بـ <code dir=\"ltr\">return</code>."
    },
    {
     "q": "ما الاسم الذي نطلقه على دالة تُمرَّر كوسيط لدالة أخرى؟",
     "o": [
      "دالة سهمية",
      "دالة رد نداء (Callback)",
      "دالة افتراضية"
     ],
     "a": 1,
     "why": "الـ callback دالة نعطيها لدالة أخرى لتستدعيها في الوقت المناسب."
    }
   ]
  },
  {
   "body": "<h2>أين يعيش المتغير؟</h2>\n<p><strong>النطاق (Scope)</strong> يحدد أين يمكن رؤية المتغير واستخدامه. ليست كل المتغيرات متاحة في كل مكان، وهذا أمر جيد لأنه يمنع أجزاء البرنامج من العبث ببعضها.</p>\n<h2>النطاق العام (Global Scope)</h2>\n<p>المتغير المعرّف خارج أي دالة أو كتلة يُرى في كل مكان:</p>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>const siteName = &quot;CodeWay&quot;;\n\nfunction showName() {\n  console.log(siteName);\n}\nshowName();</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>CodeWay</code></pre></div>\n<h2>نطاق الدالة (Function Scope)</h2>\n<p>المتغير المعرّف <strong>داخل</strong> دالة لا يُرى خارجها:</p>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>function calculate() {\n  const secret = 42;\n  console.log(secret); // يعمل\n}\ncalculate();\nconsole.log(secret); // ReferenceError: secret is not defined</code></pre></div>\n<p>هذا يعني أن كل دالة لها &quot;غرفتها الخاصة&quot; من المتغيرات. ولهذا يمكن لدالتين مختلفتين استخدام نفس اسم المتغير دون تعارض:</p>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>function a() {\n  const x = 1;\n  return x;\n}\nfunction b() {\n  const x = 2;\n  return x;\n}\nconsole.log(a(), b());</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>1 2</code></pre></div>\n<h2>نطاق الكتلة (Block Scope)</h2>\n<p>المتغيرات المعرّفة بـ <code dir=\"ltr\">let</code> و <code dir=\"ltr\">const</code> تعيش داخل أقرب أقواس معقوفة <code dir=\"ltr\">{ }</code>، سواء كانت <code dir=\"ltr\">if</code> أو حلقة أو غيرها:</p>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>const age = 20;\n\nif (age &gt;= 18) {\n  const message = &quot;بالغ&quot;;\n  console.log(message);\n}\n// message غير موجود هنا\nconsole.log(typeof message);</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>بالغ\nundefined</code></pre></div>\n<div class=\"callout tip\">💡 لهذا السبب عدّاد الحلقة <code dir=\"ltr\">let i</code> لا يُرى بعد انتهائها. وهذا من أسباب تفضيل <code dir=\"ltr\">let</code> و <code dir=\"ltr\">const</code> على <code dir=\"ltr\">var</code>، فـ <code dir=\"ltr\">var</code> لا تحترم نطاق الكتلة.</div>\n<h2>سلسلة النطاقات</h2>\n<p>الدالة الداخلية ترى متغيرات الدالة الخارجية، والعكس غير صحيح. تبحث JavaScript عن المتغير في النطاق الحالي، ثم في الذي يحيط به، وهكذا حتى النطاق العام:</p>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>const level1 = &quot;عام&quot;;\n\nfunction outer() {\n  const level2 = &quot;خارجي&quot;;\n\n  function inner() {\n    const level3 = &quot;داخلي&quot;;\n    console.log(level1, level2, level3);\n  }\n  inner();\n}\nouter();</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>عام خارجي داخلي</code></pre></div>\n<h2>التظليل (Shadowing)</h2>\n<p>إذا عرّفت متغيراً داخلياً بنفس اسم متغير خارجي، فالداخلي &quot;يظلل&quot; الخارجي داخل نطاقه فقط:</p>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>const color = &quot;أزرق&quot;;\n\nfunction paint() {\n  const color = &quot;أحمر&quot;;\n  console.log(`داخل الدالة: ${color}`);\n}\npaint();\nconsole.log(`خارج الدالة: ${color}`);</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>داخل الدالة: أحمر\nخارج الدالة: أزرق</code></pre></div>\n<h2>لماذا نتجنب المتغيرات العامة؟</h2>\n<p>المتغيرات العامة يمكن لأي جزء من البرنامج تعديلها، فيصعب تتبع من غيّرها ومتى. القاعدة: <strong>عرّف المتغير في أضيق نطاق يحتاجه</strong>، ومرّر القيم للدوال كمعاملات بدلاً من الاعتماد على متغيرات عامة.</p>\n<h2>ملخص الدرس</h2>\n<ul><li>النطاق العام: يُرى في كل مكان، ويجب التقليل منه.</li><li>نطاق الدالة: متغيرات الدالة لا تُرى خارجها.</li><li>نطاق الكتلة: <code dir=\"ltr\">let</code> و <code dir=\"ltr\">const</code> تعيشان داخل أقرب <code dir=\"ltr\">{ }</code>.</li><li>الداخل يرى الخارج، والخارج لا يرى الداخل.</li><li>عرّف المتغيرات في أضيق نطاق ممكن.</li></ul>",
   "exercise": {
    "prompt": "<p>الكود التالي فيه مشكلة: الدالة <code dir=\"ltr\">addPoints</code> تعدّل متغيراً عاماً، وهذا أسلوب سيئ. أعد كتابتها لتكون <strong>دالة نقية</strong>: تستقبل النقاط الحالية والنقاط المضافة كمعاملات، وتُرجع المجموع الجديد دون تعديل أي متغير خارجي.</p>\n<p>ثم استخدمها بحيث يطبع البرنامج المخرجات المطلوبة.</p>",
    "starter": "let points = 0;\n\nfunction addPoints() {\n  points = points + 10;\n}\n\naddPoints();\naddPoints();\nconsole.log(points);",
    "expected": "10\n25",
    "solution": "function addPoints(current, amount) {\n  return current + amount;\n}\n\nlet points = 0;\npoints = addPoints(points, 10);\nconsole.log(points);\npoints = addPoints(points, 15);\nconsole.log(points);"
   },
   "quiz": [
    {
     "q": "ماذا يحدث عند محاولة الوصول لمتغير معرّف داخل دالة من خارجها؟",
     "o": [
      "يُرجع آخر قيمة له",
      "يحدث خطأ ReferenceError لأنه غير معرّف في هذا النطاق",
      "يُرجع 0"
     ],
     "a": 1,
     "why": "متغيرات الدالة تعيش داخلها فقط."
    },
    {
     "q": "هل ترى الدالة الداخلية متغيرات الدالة الخارجية التي تحيط بها؟",
     "o": [
      "نعم",
      "لا",
      "فقط إذا كانت معرّفة بـ var"
     ],
     "a": 0,
     "why": "تبحث JavaScript في النطاقات المحيطة من الداخل إلى الخارج."
    },
    {
     "q": "متغير معرّف بـ <code dir=\"ltr\">let</code> داخل كتلة <code dir=\"ltr\">if</code>، أين يمكن استخدامه؟",
     "o": [
      "في كل البرنامج",
      "في كل الدالة التي تحتوي الـ if",
      "داخل أقواس الـ if فقط"
     ],
     "a": 2,
     "why": "<code dir=\"ltr\">let</code> و <code dir=\"ltr\">const</code> لهما نطاق الكتلة."
    }
   ]
  },
  {
   "body": "<h2>الدالة تتذكر</h2>\n<p><strong>الإغلاق (Closure)</strong> من المفاهيم التي تبدو صعبة في البداية، لكنه بسيط إذا فهمت النطاق جيداً. وهو من الأسئلة المفضلة في مقابلات التوظيف.</p>\n<p>الفكرة: <strong>الدالة تتذكر المتغيرات التي كانت حولها لحظة إنشائها، حتى بعد انتهاء الدالة الخارجية.</strong></p>\n<h2>مثال أول</h2>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>function createGreeter(greeting) {\n  return name =&gt; `${greeting} يا ${name}`;\n}\n\nconst sayHello = createGreeter(&quot;مرحباً&quot;);\nconst sayMorning = createGreeter(&quot;صباح الخير&quot;);\n\nconsole.log(sayHello(&quot;علي&quot;));\nconsole.log(sayMorning(&quot;هدى&quot;));</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>مرحباً يا علي\nصباح الخير يا هدى</code></pre></div>\n<p>ماذا حدث؟</p>\n<ol><li>استدعينا <code dir=\"ltr\">createGreeter(&quot;مرحباً&quot;)</code> فأرجعت دالة جديدة.</li><li>انتهت <code dir=\"ltr\">createGreeter</code> تماماً.</li><li>ومع ذلك، عندما استدعينا <code dir=\"ltr\">sayHello</code> بعدها، كانت <strong>ما زالت تتذكر</strong> أن <code dir=\"ltr\">greeting</code> قيمتها &quot;مرحباً&quot;.</li></ol>\n<p>الدالة الداخلية مع المتغيرات التي تتذكرها تسمى <strong>Closure</strong>.</p>\n<h2>العدّاد: المثال الكلاسيكي</h2>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>function createCounter() {\n  let count = 0;\n  return () =&gt; {\n    count++;\n    return count;\n  };\n}\n\nconst counter = createCounter();\nconsole.log(counter());\nconsole.log(counter());\nconsole.log(counter());</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>1\n2\n3</code></pre></div>\n<p>المتغير <code dir=\"ltr\">count</code> لا يُعاد إلى الصفر، لأن الدالة المُرجعة تحتفظ بنفس <code dir=\"ltr\">count</code> بين الاستدعاءات.</p>\n<h2>كل closure له ذاكرته الخاصة</h2>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>function createCounter() {\n  let count = 0;\n  return () =&gt; ++count;\n}\n\nconst a = createCounter();\nconst b = createCounter();\n\na();\na();\nconsole.log(a());\nconsole.log(b());</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>3\n1</code></pre></div>\n<p>كل استدعاء لـ <code dir=\"ltr\">createCounter</code> ينشئ <code dir=\"ltr\">count</code> جديداً مستقلاً، فـ <code dir=\"ltr\">a</code> و <code dir=\"ltr\">b</code> لا يتشاركان العدّ.</p>\n<h2>لماذا الإغلاق مفيد؟ إخفاء البيانات</h2>\n<p>لا يستطيع أي كود خارجي الوصول إلى <code dir=\"ltr\">count</code> مباشرة وتغييره عشوائياً. الطريقة الوحيدة هي الدوال التي نوفرها. هذا يسمى <strong>التغليف (Encapsulation)</strong>:</p>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>function createWallet(initial) {\n  let balance = initial;\n  return {\n    deposit: amount =&gt; { balance += amount; },\n    withdraw: amount =&gt; {\n      if (amount &gt; balance) return &quot;الرصيد غير كافٍ&quot;;\n      balance -= amount;\n      return &quot;تم السحب&quot;;\n    },\n    getBalance: () =&gt; balance\n  };\n}\n\nconst wallet = createWallet(100);\nwallet.deposit(50);\nconsole.log(wallet.withdraw(500));\nconsole.log(wallet.withdraw(30));\nconsole.log(wallet.getBalance());\nconsole.log(wallet.balance);</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>الرصيد غير كافٍ\nتم السحب\n120\nundefined</code></pre></div>\n<p>لاحظ السطر الأخير: لا يمكن الوصول إلى <code dir=\"ltr\">balance</code> مباشرة، فهي محمية داخل الإغلاق. (استخدمنا هنا <strong>كائناً</strong> <code dir=\"ltr\">{ }</code> لإرجاع عدة دوال معاً، وسنتعلم الكائنات بالتفصيل في الوحدة القادمة.)</p>\n<h2>أين ستقابل الإغلاق؟</h2>\n<ul><li>في معالجات الأحداث (<code dir=\"ltr\">addEventListener</code>) التي تتذكر بيانات الصفحة.</li><li>في <code dir=\"ltr\">setTimeout</code> التي تُنفَّذ لاحقاً وتتذكر المتغيرات.</li><li>في React Hooks مثل <code dir=\"ltr\">useState</code>.</li></ul>\n<p>في الحقيقة، أنت تستخدم الإغلاق في كل مرة تكتب دالة تستخدم متغيراً من خارجها.</p>\n<h2>ملخص الدرس</h2>\n<ul><li>الإغلاق: الدالة تتذكر متغيرات النطاق الذي أُنشئت فيه، حتى بعد انتهائه.</li><li>كل استدعاء للدالة الخارجية ينشئ ذاكرة مستقلة.</li><li>يُستخدم لإخفاء البيانات وحمايتها، ولإنشاء دوال مخصصة.</li></ul>",
   "exercise": {
    "prompt": "<p>اكتب دالة <code dir=\"ltr\">createMultiplier(factor)</code> تُرجع <strong>دالة</strong> تستقبل رقماً وتضربه في <code dir=\"ltr\">factor</code>.</p>\n<p>ثم اكتب دالة <code dir=\"ltr\">createIdGenerator(prefix)</code> تُرجع دالة، كل استدعاء لها يُرجع معرّفاً جديداً بالشكل <code dir=\"ltr\">prefix-1</code> ثم <code dir=\"ltr\">prefix-2</code> وهكذا.</p>",
    "starter": "function createMultiplier(factor) {\n  // أكمل هنا\n}\n\nfunction createIdGenerator(prefix) {\n  // أكمل هنا\n}\n\nconst double = createMultiplier(2);\nconst triple = createMultiplier(3);\nconsole.log(double(7), triple(7));\n\nconst nextUserId = createIdGenerator(\"user\");\nconst nextOrderId = createIdGenerator(\"order\");\nconsole.log(nextUserId());\nconsole.log(nextUserId());\nconsole.log(nextOrderId());",
    "expected": "14 21\nuser-1\nuser-2\norder-1",
    "solution": "function createMultiplier(factor) {\n  return n => n * factor;\n}\n\nfunction createIdGenerator(prefix) {\n  let id = 0;\n  return () => {\n    id++;\n    return `${prefix}-${id}`;\n  };\n}\n\nconst double = createMultiplier(2);\nconst triple = createMultiplier(3);\nconsole.log(double(7), triple(7));\n\nconst nextUserId = createIdGenerator(\"user\");\nconst nextOrderId = createIdGenerator(\"order\");\nconsole.log(nextUserId());\nconsole.log(nextUserId());\nconsole.log(nextOrderId());"
   },
   "quiz": [
    {
     "q": "ما هو الإغلاق (Closure)؟",
     "o": [
      "دالة تُغلق البرنامج",
      "دالة تتذكر متغيرات النطاق الذي أُنشئت فيه حتى بعد انتهائه",
      "طريقة لحذف المتغيرات من الذاكرة"
     ],
     "a": 1,
     "why": "الدالة الداخلية تحتفظ بالوصول لمتغيرات الدالة الخارجية."
    },
    {
     "q": "ماذا يُطبع؟ <code dir=\"ltr\">const c1 = createCounter(); const c2 = createCounter(); c1(); c1(); console.log(c2());</code> (حيث createCounter من الدرس)",
     "o": [
      "<code dir=\"ltr\">3</code>",
      "<code dir=\"ltr\">1</code>",
      "<code dir=\"ltr\">2</code>"
     ],
     "a": 1,
     "why": "كل استدعاء لـ <code dir=\"ltr\">createCounter</code> ينشئ عدّاداً مستقلاً يبدأ من الصفر."
    },
    {
     "q": "ما الفائدة الأساسية من استخدام الإغلاق مع رصيد المحفظة في الدرس؟",
     "o": [
      "تسريع البرنامج",
      "حماية المتغير من التعديل المباشر من خارج الدوال المسموح بها",
      "توفير الذاكرة"
     ],
     "a": 1,
     "why": "لا يمكن تعديل <code dir=\"ltr\">balance</code> إلا عبر الدوال التي أرجعناها."
    }
   ]
  }
 ]
]);
