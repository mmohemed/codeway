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
 ],
 [
  {
   "body": "<h2>قائمة من القيم</h2>\n<p>لو أردت تخزين درجات 30 طالباً، هل ستنشئ 30 متغيراً؟ بالطبع لا. <strong>المصفوفة (Array)</strong> قائمة مرتبة تخزّن عدة قيم في متغير واحد.</p>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>const fruits = [&quot;تفاح&quot;, &quot;موز&quot;, &quot;برتقال&quot;];\nconsole.log(fruits);\nconsole.log(fruits.length);</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>[&quot;تفاح&quot;,&quot;موز&quot;,&quot;برتقال&quot;]\n3</code></pre></div>\n<ul><li>المصفوفة تُكتب بين قوسين مربعين <code dir=\"ltr\">[ ]</code>، والعناصر مفصولة بفواصل.</li><li><code dir=\"ltr\">length</code> يعطي عدد العناصر.</li><li>يمكن أن تحتوي أي نوع: أرقاماً ونصوصاً، وحتى مصفوفات أخرى.</li></ul>\n<div class=\"callout tip\">💡 يعرض محرر CodeWay المصفوفات والكائنات بصيغة JSON المختصرة. وحدة التحكم في المتصفح تعرضها بشكل تفاعلي مختلف قليلاً، لكن المحتوى واحد.</div>\n<h2>الوصول إلى العناصر</h2>\n<p>كل عنصر له <strong>فهرس (index)</strong> يبدأ من 0، تماماً مثل أحرف النص:</p>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>const colors = [&quot;أحمر&quot;, &quot;أخضر&quot;, &quot;أزرق&quot;];\nconsole.log(colors[0]);\nconsole.log(colors[2]);\nconsole.log(colors[colors.length - 1]);\nconsole.log(colors[10]);</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>أحمر\nأزرق\nأزرق\nundefined</code></pre></div>\n<p>الوصول لفهرس غير موجود يُرجع <code dir=\"ltr\">undefined</code> ولا يسبب خطأ.</p>\n<h2>تعديل العناصر</h2>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>const scores = [70, 85, 90];\nscores[0] = 75;\nconsole.log(scores);</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>[75,85,90]</code></pre></div>\n<p>لاحظ أن <code dir=\"ltr\">scores</code> معرّفة بـ <code dir=\"ltr\">const</code> ومع ذلك عدّلنا محتواها. <code dir=\"ltr\">const</code> تمنع <strong>إعادة إسناد</strong> المتغير إلى مصفوفة أخرى، لكنها لا تمنع تعديل محتوى المصفوفة نفسها.</p>\n<h2>الإضافة والحذف</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>الدالة</th><th>ماذا تفعل</th></tr></thead><tbody><tr><td><code dir=\"ltr\">push(x)</code></td><td>تضيف x في <strong>النهاية</strong></td></tr><tr><td><code dir=\"ltr\">pop()</code></td><td>تحذف آخر عنصر وتُرجعه</td></tr><tr><td><code dir=\"ltr\">unshift(x)</code></td><td>تضيف x في <strong>البداية</strong></td></tr><tr><td><code dir=\"ltr\">shift()</code></td><td>تحذف أول عنصر وتُرجعه</td></tr></tbody></table></div>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>const cart = [&quot;قلم&quot;];\ncart.push(&quot;دفتر&quot;);\ncart.push(&quot;مسطرة&quot;);\ncart.unshift(&quot;حقيبة&quot;);\nconsole.log(cart);\n\nconst removed = cart.pop();\nconsole.log(removed);\nconsole.log(cart);</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>[&quot;حقيبة&quot;,&quot;قلم&quot;,&quot;دفتر&quot;,&quot;مسطرة&quot;]\nمسطرة\n[&quot;حقيبة&quot;,&quot;قلم&quot;,&quot;دفتر&quot;]</code></pre></div>\n<h2>البحث في المصفوفة</h2>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>const users = [&quot;أحمد&quot;, &quot;سارة&quot;, &quot;خالد&quot;];\nconsole.log(users.includes(&quot;سارة&quot;));\nconsole.log(users.indexOf(&quot;خالد&quot;));\nconsole.log(users.indexOf(&quot;منى&quot;));</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>true\n2\n-1</code></pre></div>\n<h2>المرور على كل العناصر</h2>\n<p>الطريقة الأوضح هي حلقة <code dir=\"ltr\">for...of</code> التي تعطيك كل عنصر مباشرة:</p>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>const prices = [10, 25, 40];\nlet total = 0;\n\nfor (const price of prices) {\n  total += price;\n}\nconsole.log(`الإجمالي: ${total}`);</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>الإجمالي: 75</code></pre></div>\n<p>وإذا احتجت الفهرس أيضاً، استخدم حلقة <code dir=\"ltr\">for</code> العادية:</p>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>const tasks = [&quot;الدراسة&quot;, &quot;الرياضة&quot;];\nfor (let i = 0; i &lt; tasks.length; i++) {\n  console.log(`${i + 1}. ${tasks[i]}`);\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>1. الدراسة\n2. الرياضة</code></pre></div>\n<h2>دوال مفيدة أخرى</h2>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>const nums = [3, 1, 4, 1, 5];\nconsole.log(nums.slice(1, 3));\nconsole.log(nums.join(&quot; - &quot;));\nconsole.log([...nums].reverse());\nconsole.log(nums.concat([9, 2]));</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>[1,4]\n3 - 1 - 4 - 1 - 5\n[5,1,4,1,3]\n[3,1,4,1,5,9,2]</code></pre></div>\n<ul><li><code dir=\"ltr\">slice(a, b)</code> نسخة من جزء المصفوفة دون تعديل الأصلية.</li><li><code dir=\"ltr\">join(x)</code> تحويل المصفوفة إلى نص مع فاصل.</li><li><code dir=\"ltr\">reverse()</code> تعكس المصفوفة <strong>وتعدّل الأصلية</strong>، لذلك نسخناها أولاً بـ <code dir=\"ltr\">[...nums]</code> (سنشرح <code dir=\"ltr\">...</code> في الوحدة 7).</li><li><code dir=\"ltr\">concat</code> دمج مصفوفتين في مصفوفة جديدة.</li></ul>\n<h2>ملخص الدرس</h2>\n<ul><li>المصفوفة قائمة مرتبة <code dir=\"ltr\">[ ]</code> والفهرس يبدأ من 0.</li><li><code dir=\"ltr\">push</code> و <code dir=\"ltr\">pop</code> للنهاية، و <code dir=\"ltr\">unshift</code> و <code dir=\"ltr\">shift</code> للبداية.</li><li><code dir=\"ltr\">includes</code> و <code dir=\"ltr\">indexOf</code> للبحث.</li><li><code dir=\"ltr\">for...of</code> أسهل طريقة للمرور على العناصر.</li></ul>",
   "exercise": {
    "prompt": "<p>لديك مصفوفة درجات. المطلوب طباعة:</p>\n<ol><li>عدد الدرجات.</li><li>أعلى درجة (استخدم حلقة <code dir=\"ltr\">for...of</code> ومتغيراً يحتفظ بأكبر قيمة).</li><li>المتوسط (مجموع الدرجات ÷ عددها).</li><li>بعد إضافة الدرجة <code dir=\"ltr\">100</code> في نهاية المصفوفة بـ <code dir=\"ltr\">push</code>، اطبع المصفوفة كاملة.</li></ol>",
    "starter": "const grades = [78, 92, 65, 88, 77];\n\n// أكمل هنا",
    "expected": "5\n92\n80\n[78,92,65,88,77,100]",
    "solution": "const grades = [78, 92, 65, 88, 77];\n\nconsole.log(grades.length);\n\nlet max = grades[0];\nlet sum = 0;\nfor (const g of grades) {\n  if (g > max) max = g;\n  sum += g;\n}\nconsole.log(max);\nconsole.log(sum / grades.length);\n\ngrades.push(100);\nconsole.log(grades);"
   },
   "quiz": [
    {
     "q": "ما قيمة <code dir=\"ltr\">[&quot;أ&quot;, &quot;ب&quot;, &quot;ج&quot;][1]</code>؟",
     "o": [
      "<code dir=\"ltr\">&quot;أ&quot;</code>",
      "<code dir=\"ltr\">&quot;ب&quot;</code>",
      "<code dir=\"ltr\">&quot;ج&quot;</code>"
     ],
     "a": 1,
     "why": "الفهرس يبدأ من 0، فالفهرس 1 هو العنصر الثاني."
    },
    {
     "q": "ماذا تفعل <code dir=\"ltr\">push</code>؟",
     "o": [
      "تضيف عنصراً في نهاية المصفوفة",
      "تضيف عنصراً في بدايتها",
      "تحذف آخر عنصر"
     ],
     "a": 0,
     "why": "<code dir=\"ltr\">push</code> للنهاية و <code dir=\"ltr\">unshift</code> للبداية."
    },
    {
     "q": "هل يمكن تعديل عناصر مصفوفة معرّفة بـ <code dir=\"ltr\">const</code>؟",
     "o": [
      "نعم، <code dir=\"ltr\">const</code> تمنع إعادة الإسناد فقط وليس تعديل المحتوى",
      "لا، أبداً",
      "فقط إذا كانت فارغة"
     ],
     "a": 0,
     "why": "يمكن تعديل العناصر أو إضافتها، لكن لا يمكن كتابة <code dir=\"ltr\">arr = [...]</code> من جديد."
    }
   ]
  },
  {
   "body": "<h2>البرمجة الوظيفية مع المصفوفات</h2>\n<p>في الدرس السابق استخدمنا الحلقات لمعالجة المصفوفات. لكن JavaScript الحديثة توفر دوالاً أقوى وأوضح تأخذ <strong>دالة callback</strong> وتطبقها على كل عنصر. أهمها ثلاث: <code dir=\"ltr\">map</code> و <code dir=\"ltr\">filter</code> و <code dir=\"ltr\">reduce</code>. ستراها في كل مشروع حقيقي، خاصة في React.</p>\n<h2>map: تحويل كل عنصر</h2>\n<p>تُنشئ مصفوفة <strong>جديدة</strong> بنفس الطول، كل عنصر فيها هو نتيجة تطبيق الدالة على العنصر الأصلي:</p>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>const prices = [100, 250, 80];\nconst withTax = prices.map(p =&gt; p * 1.5);\nconsole.log(withTax);\nconsole.log(prices);</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>[150,375,120]\n[100,250,80]</code></pre></div>\n<p>المصفوفة الأصلية لم تتغير. <code dir=\"ltr\">map</code> تُرجع مصفوفة جديدة دائماً.</p>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>const names = [&quot;sara&quot;, &quot;ali&quot;];\nconst greetings = names.map((name, index) =&gt; `${index + 1}. مرحباً ${name}`);\nconsole.log(greetings);</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>[&quot;1. مرحباً sara&quot;,&quot;2. مرحباً ali&quot;]</code></pre></div>\n<p>الـ callback يستقبل العنصر، ويمكنه أيضاً استقبال الفهرس كمعامل ثانٍ.</p>\n<h2>filter: الاختيار حسب شرط</h2>\n<p>تُنشئ مصفوفة جديدة فيها فقط العناصر التي أرجعت الدالة لها <code dir=\"ltr\">true</code>:</p>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>const ages = [12, 25, 17, 30, 15];\nconst adults = ages.filter(age =&gt; age &gt;= 18);\nconsole.log(adults);\n\nconst words = [&quot;قلم&quot;, &quot;حاسوب&quot;, &quot;كتاب&quot;, &quot;هاتف ذكي&quot;];\nconsole.log(words.filter(w =&gt; w.length &gt; 4));</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>[25,30]\n[&quot;حاسوب&quot;,&quot;هاتف ذكي&quot;]</code></pre></div>\n<h2>reduce: اختزال المصفوفة إلى قيمة واحدة</h2>\n<p><code dir=\"ltr\">reduce</code> تمر على العناصر وتجمعها في قيمة واحدة: مجموع، أو أكبر قيمة، أو حتى كائن:</p>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>const cart = [30, 45, 25];\nconst total = cart.reduce((sum, price) =&gt; sum + price, 0);\nconsole.log(total);</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>100</code></pre></div>\n<p>الـ callback يستقبل:</p>\n<ul><li><code dir=\"ltr\">sum</code> <strong>المُجمِّع</strong>: النتيجة حتى الآن.</li><li><code dir=\"ltr\">price</code> العنصر الحالي.</li><li>و <code dir=\"ltr\">0</code> في النهاية هي <strong>القيمة الابتدائية</strong> للمُجمِّع.</li></ul>\n<p>خطوة بخطوة: <code dir=\"ltr\">0 + 30 = 30</code>، ثم <code dir=\"ltr\">30 + 45 = 75</code>، ثم <code dir=\"ltr\">75 + 25 = 100</code>.</p>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>const nums = [4, 9, 2, 7];\nconst max = nums.reduce((best, n) =&gt; (n &gt; best ? n : best), nums[0]);\nconsole.log(max);</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>9</code></pre></div>\n<h2>السلسلة: قوة الدمج</h2>\n<p>لأن <code dir=\"ltr\">map</code> و <code dir=\"ltr\">filter</code> تُرجعان مصفوفات، يمكن ربطها معاً في سلسلة:</p>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>const orders = [120, 40, 300, 75, 500];\n\nconst bigOrdersTotal = orders\n  .filter(o =&gt; o &gt;= 100)\n  .map(o =&gt; o * 0.9)\n  .reduce((sum, o) =&gt; sum + o, 0);\n\nconsole.log(bigOrdersTotal);</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>828</code></pre></div>\n<p>اقرأها كجملة: &quot;من الطلبات، اختر ما يساوي 100 أو أكثر، ثم طبّق خصم 10%، ثم اجمعها&quot;.</p>\n<h2>دوال أخرى مهمة</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>الدالة</th><th>تُرجع</th></tr></thead><tbody><tr><td><code dir=\"ltr\">find(fn)</code></td><td><strong>أول</strong> عنصر يحقق الشرط، أو <code dir=\"ltr\">undefined</code></td></tr><tr><td><code dir=\"ltr\">findIndex(fn)</code></td><td>فهرس أول عنصر يحقق الشرط، أو -1</td></tr><tr><td><code dir=\"ltr\">some(fn)</code></td><td><code dir=\"ltr\">true</code> إذا حقق عنصر <strong>واحد على الأقل</strong> الشرط</td></tr><tr><td><code dir=\"ltr\">every(fn)</code></td><td><code dir=\"ltr\">true</code> إذا حققت <strong>كل</strong> العناصر الشرط</td></tr><tr><td><code dir=\"ltr\">forEach(fn)</code></td><td>لا شيء، تنفّذ الدالة على كل عنصر فقط</td></tr><tr><td><code dir=\"ltr\">sort(fn)</code></td><td>ترتب المصفوفة <strong>وتعدّل الأصلية</strong></td></tr></tbody></table></div>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>const temps = [22, 35, 28, 41];\nconsole.log(temps.find(t =&gt; t &gt; 30));\nconsole.log(temps.some(t =&gt; t &gt; 40));\nconsole.log(temps.every(t =&gt; t &gt; 20));\nconsole.log([...temps].sort((a, b) =&gt; a - b));</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>35\ntrue\ntrue\n[22,28,35,41]</code></pre></div>\n<div class=\"callout warn\">⚠️ <code dir=\"ltr\">sort()</code> بدون دالة مقارنة ترتب العناصر كنصوص، فيصبح <code dir=\"ltr\">[10, 9, 100]</code> مرتباً <code dir=\"ltr\">[10, 100, 9]</code>! استخدم دائماً <code dir=\"ltr\">(a, b) =&gt; a - b</code> للأرقام تصاعدياً، و <code dir=\"ltr\">(a, b) =&gt; b - a</code> تنازلياً.</div>\n<h2>ملخص الدرس</h2>\n<ul><li><code dir=\"ltr\">map</code> تحوّل كل عنصر، و <code dir=\"ltr\">filter</code> تختار، و <code dir=\"ltr\">reduce</code> تجمع في قيمة واحدة.</li><li>كلها تُرجع نتيجة جديدة ولا تعدّل الأصلية، ويمكن ربطها في سلسلة.</li><li><code dir=\"ltr\">find</code> و <code dir=\"ltr\">some</code> و <code dir=\"ltr\">every</code> للبحث والتحقق.</li><li><code dir=\"ltr\">sort</code> تحتاج دالة مقارنة للأرقام.</li></ul>",
   "exercise": {
    "prompt": "<p>لديك أسعار منتجات في متجر. استخدم <code dir=\"ltr\">filter</code> و <code dir=\"ltr\">map</code> و <code dir=\"ltr\">reduce</code> (بدون حلقات for) لطباعة:</p>\n<ol><li>مصفوفة المنتجات التي سعرها أقل من 50.</li><li>مصفوفة كل الأسعار بعد خصم 20% (أي السعر × 0.8).</li><li>مجموع كل الأسعار الأصلية.</li><li>هل يوجد منتج سعره أكثر من 100؟ (استخدم <code dir=\"ltr\">some</code>)</li></ol>",
    "starter": "const prices = [20, 75, 40, 150, 35];\n\n// أكمل هنا",
    "expected": "[20,40,35]\n[16,60,32,120,28]\n320\ntrue",
    "solution": "const prices = [20, 75, 40, 150, 35];\n\nconsole.log(prices.filter(p => p < 50));\nconsole.log(prices.map(p => p * 0.8));\nconsole.log(prices.reduce((sum, p) => sum + p, 0));\nconsole.log(prices.some(p => p > 100));"
   },
   "quiz": [
    {
     "q": "ما الفرق بين <code dir=\"ltr\">map</code> و <code dir=\"ltr\">filter</code>؟",
     "o": [
      "<code dir=\"ltr\">map</code> تحوّل كل العناصر وتُرجع مصفوفة بنفس الطول، و <code dir=\"ltr\">filter</code> تختار بعضها حسب شرط",
      "لا فرق",
      "<code dir=\"ltr\">filter</code> تعدّل المصفوفة الأصلية"
     ],
     "a": 0,
     "why": "map للتحويل، و filter للاختيار."
    },
    {
     "q": "ما ناتج <code dir=\"ltr\">[1, 2, 3].reduce((acc, n) =&gt; acc + n, 10)</code>؟",
     "o": [
      "<code dir=\"ltr\">6</code>",
      "<code dir=\"ltr\">16</code>",
      "<code dir=\"ltr\">10</code>"
     ],
     "a": 1,
     "why": "القيمة الابتدائية 10، ثم نضيف 1 و 2 و 3."
    },
    {
     "q": "ما ناتج <code dir=\"ltr\">[5, 12, 8].find(n =&gt; n &gt; 6)</code>؟",
     "o": [
      "<code dir=\"ltr\">[12, 8]</code>",
      "<code dir=\"ltr\">12</code>",
      "<code dir=\"ltr\">true</code>"
     ],
     "a": 1,
     "why": "<code dir=\"ltr\">find</code> تُرجع أول عنصر يحقق الشرط فقط."
    }
   ]
  },
  {
   "body": "<h2>وصف شيء بخصائصه</h2>\n<p>المصفوفة ممتازة لقائمة عناصر متشابهة. لكن كيف نخزّن بيانات <strong>طالب</strong>: اسمه وعمره ومدينته ودرجاته؟ هنا نستخدم <strong>الكائن (Object)</strong>: مجموعة أزواج من <strong>مفتاح وقيمة</strong>.</p>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>const student = {\n  name: &quot;ريم&quot;,\n  age: 21,\n  city: &quot;الرياض&quot;,\n  isActive: true\n};\nconsole.log(student);</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>{&quot;name&quot;:&quot;ريم&quot;,&quot;age&quot;:21,&quot;city&quot;:&quot;الرياض&quot;,&quot;isActive&quot;:true}</code></pre></div>\n<ul><li>الكائن يُكتب بين أقواس معقوفة <code dir=\"ltr\">{ }</code>.</li><li>كل خاصية: <code dir=\"ltr\">مفتاح: قيمة</code>، والخصائص مفصولة بفواصل.</li></ul>\n<h2>الوصول للخصائص</h2>\n<p>هناك طريقتان:</p>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>const car = { brand: &quot;تويوتا&quot;, year: 2022 };\n\nconsole.log(car.brand);\nconsole.log(car[&quot;year&quot;]);\n\nconst key = &quot;brand&quot;;\nconsole.log(car[key]);\nconsole.log(car.color);</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>تويوتا\n2022\nتويوتا\nundefined</code></pre></div>\n<ul><li><strong>النقطة</strong> <code dir=\"ltr\">car.brand</code> هي الطريقة المعتادة.</li><li><strong>الأقواس</strong> <code dir=\"ltr\">car[&quot;year&quot;]</code> ضرورية عندما يكون اسم الخاصية في متغير، أو يحتوي مسافات.</li><li>الخاصية غير الموجودة تُرجع <code dir=\"ltr\">undefined</code>.</li></ul>\n<h2>الإضافة والتعديل والحذف</h2>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>const user = { name: &quot;سامي&quot; };\n\nuser.email = &quot;sami@mail.com&quot;;\nuser.name = &quot;سامي أحمد&quot;;\ndelete user.email;\nuser.age = 30;\n\nconsole.log(user);\nconsole.log(&quot;age&quot; in user);</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>{&quot;name&quot;:&quot;سامي أحمد&quot;,&quot;age&quot;:30}\ntrue</code></pre></div>\n<h2>الدوال داخل الكائنات (Methods)</h2>\n<p>يمكن أن تكون قيمة الخاصية دالة، وتسمى عندها <strong>طريقة (method)</strong>:</p>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>const calculator = {\n  brand: &quot;Casio&quot;,\n  add(a, b) {\n    return a + b;\n  },\n  multiply(a, b) {\n    return a * b;\n  }\n};\n\nconsole.log(calculator.add(2, 3));\nconsole.log(calculator.multiply(4, 5));</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>5\n20</code></pre></div>\n<p>هذا ما كنت تفعله طوال الوقت: <code dir=\"ltr\">console</code> كائن، و <code dir=\"ltr\">log</code> طريقة فيه!</p>\n<h2>المرور على خصائص الكائن</h2>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>const product = { name: &quot;سماعة&quot;, price: 199, stock: 12 };\n\nfor (const key in product) {\n  console.log(`${key}: ${product[key]}`);\n}\n\nconsole.log(Object.keys(product));\nconsole.log(Object.values(product));</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>name: سماعة\nprice: 199\nstock: 12\n[&quot;name&quot;,&quot;price&quot;,&quot;stock&quot;]\n[&quot;سماعة&quot;,199,12]</code></pre></div>\n<p><code dir=\"ltr\">Object.entries(obj)</code> تعطيك مصفوفة من أزواج <code dir=\"ltr\">[مفتاح, قيمة]</code>، وهي مفيدة جداً مع <code dir=\"ltr\">for...of</code>.</p>\n<h2>مصفوفة من الكائنات</h2>\n<p>هذا الشكل هو أكثر ما ستتعامل معه في الحياة الحقيقية، فهكذا تصل البيانات من الخوادم:</p>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>const products = [\n  { name: &quot;قميص&quot;, price: 80, inStock: true },\n  { name: &quot;حذاء&quot;, price: 250, inStock: false },\n  { name: &quot;قبعة&quot;, price: 45, inStock: true }\n];\n\nconst available = products\n  .filter(p =&gt; p.inStock)\n  .map(p =&gt; p.name);\nconsole.log(available);\n\nconst total = products.reduce((sum, p) =&gt; sum + p.price, 0);\nconsole.log(total);</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>[&quot;قميص&quot;,&quot;قبعة&quot;]\n375</code></pre></div>\n<h2>الكائنات المتداخلة</h2>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>const order = {\n  id: 1024,\n  customer: { name: &quot;هند&quot;, phone: &quot;0500000000&quot; },\n  items: [&quot;كتاب&quot;, &quot;قلم&quot;]\n};\n\nconsole.log(order.customer.name);\nconsole.log(order.items[1]);\nconsole.log(order.items.length);</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>هند\nقلم\n2</code></pre></div>\n<div class=\"callout warn\">⚠️ الكائنات والمصفوفات تُنسخ <strong>بالمرجع</strong>: <code dir=\"ltr\">const b = a;</code> لا ينشئ نسخة جديدة، بل اسماً آخر لنفس الكائن، فتعديل <code dir=\"ltr\">b</code> يغيّر <code dir=\"ltr\">a</code> أيضاً. لإنشاء نسخة حقيقية استخدم <code dir=\"ltr\">{ ...a }</code>، وسنفصّل ذلك في الوحدة 7.</div>\n<h2>ملخص الدرس</h2>\n<ul><li>الكائن أزواج <code dir=\"ltr\">مفتاح: قيمة</code> داخل <code dir=\"ltr\">{ }</code>.</li><li>الوصول بـ <code dir=\"ltr\">obj.key</code> أو <code dir=\"ltr\">obj[&quot;key&quot;]</code>.</li><li>الخصائص يمكن إضافتها وتعديلها وحذفها بـ <code dir=\"ltr\">delete</code>.</li><li><code dir=\"ltr\">Object.keys</code> و <code dir=\"ltr\">Object.values</code> و <code dir=\"ltr\">Object.entries</code> للمرور على الخصائص.</li><li>مصفوفة الكائنات هي الشكل الأكثر شيوعاً للبيانات.</li></ul>",
   "exercise": {
    "prompt": "<p>لديك قائمة موظفين. المطلوب:</p>\n<ol><li>اطبع اسم أول موظف.</li><li>أضف خاصية <code dir=\"ltr\">salary</code> قيمتها <code dir=\"ltr\">9000</code> للموظف الثاني، ثم اطبع الكائن.</li><li>اطبع مصفوفة أسماء موظفي قسم <code dir=\"ltr\">IT</code> فقط.</li><li>اطبع مجموع أعمار كل الموظفين.</li></ol>",
    "starter": "const employees = [\n  { name: \"فهد\", age: 30, department: \"IT\" },\n  { name: \"نوف\", age: 26, department: \"HR\" },\n  { name: \"ماجد\", age: 35, department: \"IT\" }\n];\n\n// أكمل هنا",
    "expected": "فهد\n{\"name\":\"نوف\",\"age\":26,\"department\":\"HR\",\"salary\":9000}\n[\"فهد\",\"ماجد\"]\n91",
    "solution": "const employees = [\n  { name: \"فهد\", age: 30, department: \"IT\" },\n  { name: \"نوف\", age: 26, department: \"HR\" },\n  { name: \"ماجد\", age: 35, department: \"IT\" }\n];\n\nconsole.log(employees[0].name);\n\nemployees[1].salary = 9000;\nconsole.log(employees[1]);\n\nconsole.log(employees.filter(e => e.department === \"IT\").map(e => e.name));\nconsole.log(employees.reduce((sum, e) => sum + e.age, 0));"
   },
   "quiz": [
    {
     "q": "كيف نصل لخاصية اسمها مخزن في المتغير <code dir=\"ltr\">key</code>؟",
     "o": [
      "<code dir=\"ltr\">obj.key</code>",
      "<code dir=\"ltr\">obj[key]</code>",
      "<code dir=\"ltr\">obj-&gt;key</code>"
     ],
     "a": 1,
     "why": "<code dir=\"ltr\">obj.key</code> تبحث عن خاصية اسمها حرفياً &quot;key&quot;، أما <code dir=\"ltr\">obj[key]</code> فتستخدم قيمة المتغير."
    },
    {
     "q": "ما ناتج <code dir=\"ltr\">Object.keys({ a: 1, b: 2 })</code>؟",
     "o": [
      "<code dir=\"ltr\">[&quot;a&quot;,&quot;b&quot;]</code>",
      "<code dir=\"ltr\">[1,2]</code>",
      "<code dir=\"ltr\">2</code>"
     ],
     "a": 0,
     "why": "<code dir=\"ltr\">Object.keys</code> تُرجع مصفوفة أسماء الخصائص."
    },
    {
     "q": "ماذا يُرجع <code dir=\"ltr\">user.phone</code> إذا لم تكن الخاصية موجودة؟",
     "o": [
      "خطأ",
      "<code dir=\"ltr\">undefined</code>",
      "<code dir=\"ltr\">null</code>"
     ],
     "a": 1,
     "why": "الوصول لخاصية غير موجودة يُرجع <code dir=\"ltr\">undefined</code> دون خطأ."
    }
   ]
  },
  {
   "body": "<h2>هياكل بيانات إضافية</h2>\n<p>المصفوفات والكائنات تغطي معظم الحالات، لكن JavaScript توفر هيكلين متخصصين يحلان مشاكل معينة بشكل أفضل: <code dir=\"ltr\">Set</code> و <code dir=\"ltr\">Map</code>.</p>\n<h2>Set: مجموعة بلا تكرار</h2>\n<p><code dir=\"ltr\">Set</code> مجموعة من القيم <strong>الفريدة</strong>: لا يمكن أن تتكرر فيها قيمة.</p>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>const tags = new Set();\ntags.add(&quot;js&quot;);\ntags.add(&quot;css&quot;);\ntags.add(&quot;js&quot;);\n\nconsole.log(tags.size);\nconsole.log(tags.has(&quot;css&quot;));\nconsole.log(tags.has(&quot;python&quot;));\ntags.delete(&quot;css&quot;);\nconsole.log(tags);</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>2\ntrue\nfalse\nSet(1) [&quot;js&quot;]</code></pre></div>\n<p>أضفنا <code dir=\"ltr\">&quot;js&quot;</code> مرتين، لكنها خُزنت مرة واحدة.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>الدالة</th><th>وظيفتها</th></tr></thead><tbody><tr><td><code dir=\"ltr\">add(x)</code></td><td>إضافة قيمة (تُتجاهل إن كانت موجودة)</td></tr><tr><td><code dir=\"ltr\">has(x)</code></td><td>هل القيمة موجودة؟</td></tr><tr><td><code dir=\"ltr\">delete(x)</code></td><td>حذف قيمة</td></tr><tr><td><code dir=\"ltr\">size</code></td><td>عدد القيم</td></tr></tbody></table></div>\n<h2>أشهر استخدام: إزالة التكرار</h2>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>const visits = [&quot;أحمد&quot;, &quot;سارة&quot;, &quot;أحمد&quot;, &quot;علي&quot;, &quot;سارة&quot;];\nconst uniqueVisitors = [...new Set(visits)];\nconsole.log(uniqueVisitors);\nconsole.log(uniqueVisitors.length);</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>[&quot;أحمد&quot;,&quot;سارة&quot;,&quot;علي&quot;]\n3</code></pre></div>\n<p>حوّلنا المصفوفة إلى Set فزال التكرار، ثم أعدناها مصفوفة بـ <code dir=\"ltr\">[...]</code>.</p>\n<h2>Map: قاموس أكثر مرونة</h2>\n<p><code dir=\"ltr\">Map</code> تخزّن أزواج مفتاح وقيمة مثل الكائن، لكن بمزايا إضافية:</p>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>const prices = new Map();\nprices.set(&quot;قهوة&quot;, 12);\nprices.set(&quot;شاي&quot;, 8);\n\nconsole.log(prices.get(&quot;قهوة&quot;));\nconsole.log(prices.has(&quot;عصير&quot;));\nconsole.log(prices.size);\n\nfor (const [item, price] of prices) {\n  console.log(`${item}: ${price} ريال`);\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>12\nfalse\n2\nقهوة: 12 ريال\nشاي: 8 ريال</code></pre></div>\n<h2>متى أستخدم Map بدل الكائن؟</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Map</th><th>الكائن العادي</th></tr></thead><tbody><tr><td>المفاتيح يمكن أن تكون <strong>أي نوع</strong>: أرقام، كائنات، دوال</td><td>المفاتيح نصوص فقط</td></tr><tr><td>تحفظ ترتيب الإضافة دائماً</td><td>الترتيب قد يختلف مع المفاتيح الرقمية</td></tr><tr><td><code dir=\"ltr\">size</code> مباشرة</td><td>تحتاج <code dir=\"ltr\">Object.keys(obj).length</code></td></tr><tr><td>أسرع عند الإضافة والحذف المتكرر</td><td>أنسب لوصف شيء بخصائص ثابتة</td></tr></tbody></table></div>\n<p>القاعدة البسيطة: استخدم <strong>الكائن</strong> لوصف شيء (مستخدم، منتج)، واستخدم <strong>Map</strong> كقاموس بيانات يتغير كثيراً.</p>\n<h2>مثال عملي: عدّ التكرارات</h2>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>const text = &quot;تفاح موز تفاح برتقال موز تفاح&quot;;\nconst counts = new Map();\n\nfor (const word of text.split(&quot; &quot;)) {\n  counts.set(word, (counts.get(word) || 0) + 1);\n}\n\nconsole.log(counts.get(&quot;تفاح&quot;));\nconsole.log([...counts]);</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>3\n[[&quot;تفاح&quot;,3],[&quot;موز&quot;,2],[&quot;برتقال&quot;,1]]</code></pre></div>\n<p>لاحظ <code dir=\"ltr\">(counts.get(word) || 0)</code>: إذا لم تكن الكلمة موجودة بعد، ترجع <code dir=\"ltr\">get</code> القيمة <code dir=\"ltr\">undefined</code>، فنستخدم <code dir=\"ltr\">0</code> بدلاً منها.</p>\n<h2>ملخص الدرس</h2>\n<ul><li><code dir=\"ltr\">Set</code> تخزّن قيماً فريدة، وأشهر استخدام لها إزالة التكرار: <code dir=\"ltr\">[...new Set(arr)]</code>.</li><li><code dir=\"ltr\">Map</code> قاموس بمفاتيح من أي نوع، مع <code dir=\"ltr\">set</code> و <code dir=\"ltr\">get</code> و <code dir=\"ltr\">has</code> و <code dir=\"ltr\">size</code>.</li><li>الكائن لوصف شيء، و Map لقاموس بيانات متغير.</li></ul>",
   "exercise": {
    "prompt": "<p>لديك قائمة بأسماء طلاب سجلوا في دورات (بعضهم سجل أكثر من مرة).</p>\n<ol><li>اطبع عدد الطلاب <strong>الفريدين</strong> باستخدام <code dir=\"ltr\">Set</code>.</li><li>استخدم <code dir=\"ltr\">Map</code> لعدّ مرات تسجيل كل طالب، ثم اطبع عدد مرات تسجيل <code dir=\"ltr\">ريم</code>.</li><li>اطبع مصفوفة الطلاب الذين سجلوا <strong>أكثر من مرة</strong>، بترتيب ظهورهم الأول.</li></ol>",
    "starter": "const registrations = [\"ريم\", \"عمر\", \"ريم\", \"دانة\", \"عمر\", \"ريم\", \"زياد\"];\n\n// أكمل هنا",
    "expected": "4\n3\n[\"ريم\",\"عمر\"]",
    "solution": "const registrations = [\"ريم\", \"عمر\", \"ريم\", \"دانة\", \"عمر\", \"ريم\", \"زياد\"];\n\nconsole.log(new Set(registrations).size);\n\nconst counts = new Map();\nfor (const name of registrations) {\n  counts.set(name, (counts.get(name) || 0) + 1);\n}\nconsole.log(counts.get(\"ريم\"));\n\nconst repeated = [...counts].filter(([name, n]) => n > 1).map(([name]) => name);\nconsole.log(repeated);"
   },
   "quiz": [
    {
     "q": "ما ناتج <code dir=\"ltr\">new Set([1, 2, 2, 3, 3, 3]).size</code>؟",
     "o": [
      "<code dir=\"ltr\">6</code>",
      "<code dir=\"ltr\">3</code>",
      "<code dir=\"ltr\">1</code>"
     ],
     "a": 1,
     "why": "Set تحتفظ بالقيم الفريدة فقط: 1 و 2 و 3."
    },
    {
     "q": "كيف نقرأ قيمة من Map؟",
     "o": [
      "<code dir=\"ltr\">map[key]</code>",
      "<code dir=\"ltr\">map.get(key)</code>",
      "<code dir=\"ltr\">map.key</code>"
     ],
     "a": 1,
     "why": "نستخدم <code dir=\"ltr\">set</code> للكتابة و <code dir=\"ltr\">get</code> للقراءة."
    },
    {
     "q": "متى يكون Map أفضل من الكائن العادي؟",
     "o": [
      "لوصف بيانات مستخدم بخصائص ثابتة",
      "عندما نحتاج مفاتيح من أي نوع أو قاموساً يتغير كثيراً",
      "لا يوجد فرق أبداً"
     ],
     "a": 1,
     "why": "Map مصممة كقاموس بيانات مرن وسريع."
    }
   ]
  },
  {
   "body": "<h2>لغة تبادل البيانات</h2>\n<p>عندما يرسل تطبيقك بيانات إلى خادم، أو يستقبل منه قائمة منتجات، يجب أن تكون البيانات بصيغة <strong>نصية</strong> يفهمها الطرفان. الصيغة الأشهر عالمياً هي <strong>JSON</strong> (اختصار JavaScript Object Notation).</p>\n<p>JSON تشبه كائنات JavaScript جداً، لكنها <strong>نص</strong> وليست كائناً:</p>\n<div class=\"code-block src\"><span class=\"code-label\">JSON</span><pre dir=\"ltr\"><code>{\n  &quot;name&quot;: &quot;منى&quot;,\n  &quot;age&quot;: 28,\n  &quot;skills&quot;: [&quot;JavaScript&quot;, &quot;SQL&quot;],\n  &quot;isAdmin&quot;: false,\n  &quot;manager&quot;: null\n}</code></pre></div>\n<h2>قواعد JSON الصارمة</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>مسموح في JavaScript</th><th>في JSON</th></tr></thead><tbody><tr><td>مفاتيح بدون علامات تنصيص <code dir=\"ltr\">name: &quot;x&quot;</code></td><td>يجب <code dir=\"ltr\">&quot;name&quot;: &quot;x&quot;</code></td></tr><tr><td>علامات تنصيص مفردة <code dir=\"ltr\">&#x27;x&#x27;</code></td><td>مزدوجة فقط <code dir=\"ltr\">&quot;x&quot;</code></td></tr><tr><td>فاصلة بعد آخر عنصر</td><td>ممنوعة</td></tr><tr><td>دوال و <code dir=\"ltr\">undefined</code></td><td>غير مدعومة</td></tr><tr><td>التعليقات</td><td>غير مدعومة</td></tr></tbody></table></div>\n<p>القيم المسموحة في JSON: نصوص، أرقام، <code dir=\"ltr\">true</code> و <code dir=\"ltr\">false</code>، <code dir=\"ltr\">null</code>، مصفوفات، وكائنات.</p>\n<h2>من كائن إلى نص: JSON.stringify</h2>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>const user = { name: &quot;منى&quot;, age: 28, skills: [&quot;JS&quot;, &quot;SQL&quot;] };\nconst json = JSON.stringify(user);\n\nconsole.log(json);\nconsole.log(typeof json);</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>{&quot;name&quot;:&quot;منى&quot;,&quot;age&quot;:28,&quot;skills&quot;:[&quot;JS&quot;,&quot;SQL&quot;]}\nstring</code></pre></div>\n<p>لجعل النص منسقاً وسهل القراءة، نمرر عدد المسافات كوسيط ثالث:</p>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>const settings = { theme: &quot;light&quot;, fontSize: 16 };\nconsole.log(JSON.stringify(settings, null, 2));</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>{\n  &quot;theme&quot;: &quot;light&quot;,\n  &quot;fontSize&quot;: 16\n}</code></pre></div>\n<h2>من نص إلى كائن: JSON.parse</h2>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>const response = &#x27;{&quot;product&quot;:&quot;لابتوب&quot;,&quot;price&quot;:3500,&quot;tags&quot;:[&quot;جديد&quot;,&quot;عرض&quot;]}&#x27;;\nconst data = JSON.parse(response);\n\nconsole.log(typeof data);\nconsole.log(data.product);\nconsole.log(data.price * 2);\nconsole.log(data.tags[1]);</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>object\nلابتوب\n7000\nعرض</code></pre></div>\n<p>بعد <code dir=\"ltr\">JSON.parse</code> أصبح لدينا كائن حقيقي نتعامل معه بشكل طبيعي.</p>\n<h2>التعامل مع JSON غير الصالح</h2>\n<p>إذا كان النص بصيغة خاطئة، يرمي <code dir=\"ltr\">JSON.parse</code> خطأ يوقف البرنامج. لذلك نحميه بـ <code dir=\"ltr\">try...catch</code> (سنتعلمها بالتفصيل في الوحدة 8):</p>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>const badJson = &quot;{name: &#x27;خطأ&#x27;}&quot;;\n\ntry {\n  JSON.parse(badJson);\n} catch (error) {\n  console.log(&quot;صيغة JSON غير صالحة&quot;);\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>صيغة JSON غير صالحة</code></pre></div>\n<h2>أين ستستخدم JSON؟</h2>\n<ul><li><strong>APIs:</strong> تقريباً كل خادم يرسل ويستقبل JSON (الوحدة 6).</li><li><strong>التخزين المحلي:</strong> <code dir=\"ltr\">localStorage</code> يخزّن نصوصاً فقط، فنحوّل الكائنات بـ <code dir=\"ltr\">stringify</code> (الوحدة 8).</li><li><strong>ملفات الإعدادات:</strong> مثل <code dir=\"ltr\">package.json</code> في كل مشروع JavaScript.</li></ul>\n<div class=\"callout tip\">💡 حيلة شائعة: <code dir=\"ltr\">JSON.parse(JSON.stringify(obj))</code> تنشئ نسخة عميقة مستقلة من كائن بسيط. لكن الطريقة الحديثة هي <code dir=\"ltr\">structuredClone(obj)</code>.</div>\n<h2>ملخص الدرس</h2>\n<ul><li>JSON صيغة نصية لتبادل البيانات، وقواعدها أصرم من كائنات JavaScript.</li><li><code dir=\"ltr\">JSON.stringify(obj)</code> يحوّل الكائن إلى نص.</li><li><code dir=\"ltr\">JSON.parse(text)</code> يحوّل النص إلى كائن.</li><li>احمِ <code dir=\"ltr\">JSON.parse</code> بـ <code dir=\"ltr\">try...catch</code> عند التعامل مع بيانات خارجية.</li></ul>",
   "exercise": {
    "prompt": "<p>وصلتك استجابة من خادم كنص JSON فيها طلب شراء.</p>\n<ol><li>حوّل النص إلى كائن.</li><li>اطبع اسم العميل.</li><li>اطبع إجمالي الطلب (مجموع <code dir=\"ltr\">price * qty</code> لكل عنصر).</li><li>أضف للكائن خاصية <code dir=\"ltr\">status</code> قيمتها <code dir=\"ltr\">&quot;تم الشحن&quot;</code>، ثم حوّله إلى نص JSON واطبعه.</li></ol>",
    "starter": "const response = '{\"customer\":\"سلمان\",\"items\":[{\"name\":\"كتاب\",\"price\":40,\"qty\":2},{\"name\":\"قلم\",\"price\":5,\"qty\":4}]}';\n\n// أكمل هنا",
    "expected": "سلمان\n100\n{\"customer\":\"سلمان\",\"items\":[{\"name\":\"كتاب\",\"price\":40,\"qty\":2},{\"name\":\"قلم\",\"price\":5,\"qty\":4}],\"status\":\"تم الشحن\"}",
    "solution": "const response = '{\"customer\":\"سلمان\",\"items\":[{\"name\":\"كتاب\",\"price\":40,\"qty\":2},{\"name\":\"قلم\",\"price\":5,\"qty\":4}]}';\n\nconst order = JSON.parse(response);\nconsole.log(order.customer);\n\nconst total = order.items.reduce((sum, item) => sum + item.price * item.qty, 0);\nconsole.log(total);\n\norder.status = \"تم الشحن\";\nconsole.log(JSON.stringify(order));"
   },
   "quiz": [
    {
     "q": "ما نوع القيمة التي يُرجعها <code dir=\"ltr\">JSON.stringify</code>؟",
     "o": [
      "نص (string)",
      "كائن (object)",
      "مصفوفة"
     ],
     "a": 0,
     "why": "stringify تحوّل الكائن إلى نص يمكن إرساله أو تخزينه."
    },
    {
     "q": "أي من هذه صيغة JSON صحيحة؟",
     "o": [
      "<code dir=\"ltr\">{name: &quot;علي&quot;}</code>",
      "<code dir=\"ltr\">{&#x27;name&#x27;: &#x27;علي&#x27;}</code>",
      "<code dir=\"ltr\">{&quot;name&quot;: &quot;علي&quot;}</code>"
     ],
     "a": 2,
     "why": "JSON تتطلب علامات تنصيص مزدوجة حول المفاتيح والنصوص."
    },
    {
     "q": "ماذا يحدث عند <code dir=\"ltr\">JSON.parse</code> لنص بصيغة خاطئة؟",
     "o": [
      "يُرجع <code dir=\"ltr\">null</code>",
      "يرمي خطأ (SyntaxError)",
      "يُرجع النص كما هو"
     ],
     "a": 1,
     "why": "لذلك نحميه بـ try...catch عند التعامل مع بيانات غير مضمونة."
    }
   ]
  }
 ],
 [
  {
   "body": "<h2>الجسر بين JavaScript والصفحة</h2>\n<p>كل ما تعلمناه حتى الآن كان يعمل في المخرجات فقط. الآن سنجعل JavaScript تتحكم في <strong>صفحة الويب نفسها</strong>: تغيّر النصوص، وتخفي العناصر، وتستجيب للضغطات.</p>\n<p>عندما يقرأ المتصفح ملف HTML، يحوّله إلى <strong>شجرة من الكائنات</strong> في الذاكرة تسمى <strong>DOM</strong> (اختصار Document Object Model). كل وسم في الصفحة يصبح كائناً يمكن لـ JavaScript قراءته وتعديله.</p>\n<h2>الصفحة كشجرة</h2>\n<p>خذ هذا الـ HTML:</p>\n<div class=\"code-block src\"><span class=\"code-label\">HTML</span><pre dir=\"ltr\"><code>&lt;body&gt;\n  &lt;h1&gt;متجري&lt;/h1&gt;\n  &lt;ul&gt;\n    &lt;li&gt;قميص&lt;/li&gt;\n    &lt;li&gt;حذاء&lt;/li&gt;\n  &lt;/ul&gt;\n&lt;/body&gt;</code></pre></div>\n<p>يراه المتصفح كشجرة:</p>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>document\n └─ body\n     ├─ h1  ← &quot;متجري&quot;\n     └─ ul\n         ├─ li ← &quot;قميص&quot;\n         └─ li ← &quot;حذاء&quot;</code></pre></div>\n<ul><li><strong>العقدة (Node):</strong> كل عنصر أو نص في الشجرة.</li><li><strong>الأب (parent):</strong> العنصر الذي يحتوي غيره، مثل <code dir=\"ltr\">ul</code> بالنسبة لـ <code dir=\"ltr\">li</code>.</li><li><strong>الأبناء (children):</strong> العناصر داخل عنصر آخر.</li><li><strong>الإخوة (siblings):</strong> العناصر التي تشترك في نفس الأب.</li></ul>\n<h2>الكائن document</h2>\n<p>نقطة الدخول إلى كل شيء هي الكائن <code dir=\"ltr\">document</code>، وهو يمثل الصفحة كاملة:</p>\n<div class=\"code-block src\"><span class=\"code-label\">HTML</span><pre dir=\"ltr\"><code>&lt;h1&gt;مرحباً&lt;/h1&gt;\n&lt;p&gt;هذه فقرة&lt;/p&gt;</code></pre></div>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>console.log(document.title === &quot;&quot;);\nconsole.log(document.body.children.length);\nconsole.log(document.body.children[0].textContent);</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>true\n2\nمرحباً</code></pre></div>\n<ul><li><code dir=\"ltr\">document.body</code> عنصر <code dir=\"ltr\">&lt;body&gt;</code>.</li><li><code dir=\"ltr\">children</code> أبناء العنصر (عناصر HTML فقط).</li><li><code dir=\"ltr\">textContent</code> النص الموجود داخل العنصر.</li></ul>\n<h2>كيف تربط JavaScript بصفحتك؟</h2>\n<p>في المشاريع الحقيقية تكتب الكود في ملف منفصل وتربطه في نهاية HTML:</p>\n<div class=\"code-block src\"><span class=\"code-label\">HTML</span><pre dir=\"ltr\"><code>&lt;!DOCTYPE html&gt;\n&lt;html lang=&quot;ar&quot; dir=&quot;rtl&quot;&gt;\n&lt;head&gt;\n  &lt;title&gt;موقعي&lt;/title&gt;\n&lt;/head&gt;\n&lt;body&gt;\n  &lt;h1 id=&quot;title&quot;&gt;مرحباً&lt;/h1&gt;\n\n  &lt;script src=&quot;app.js&quot;&gt;&lt;/script&gt;\n&lt;/body&gt;\n&lt;/html&gt;</code></pre></div>\n<div class=\"callout tip\">💡 نضع وسم <code dir=\"ltr\">&lt;script&gt;</code> في <strong>نهاية</strong> <code dir=\"ltr\">body</code> حتى تكون كل العناصر قد أُنشئت قبل أن يحاول الكود الوصول إليها. وبديله الحديث: وضعه في <code dir=\"ltr\">head</code> مع الخاصية <code dir=\"ltr\">defer</code>.</div>\n<h2>ماذا نستطيع أن نفعل بـ DOM؟</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>الإمكانية</th><th>مثال</th></tr></thead><tbody><tr><td>تحديد العناصر</td><td>الوصول لزر أو حقل إدخال</td></tr><tr><td>تغيير المحتوى</td><td>تحديث عدد المنتجات في السلة</td></tr><tr><td>تغيير الأنماط</td><td>تفعيل الوضع الليلي</td></tr><tr><td>إنشاء وحذف العناصر</td><td>إضافة تعليق جديد</td></tr><tr><td>الاستجابة للأحداث</td><td>تنفيذ كود عند الضغط على زر</td></tr></tbody></table></div>\n<p>وهذا ما سنتعلمه في بقية هذه الوحدة. في تمارين هذه الوحدة سترى <strong>معاينة الصفحة</strong> فوق المخرجات، وتتغير مباشرة حسب كودك.</p>\n<h2>ملخص الدرس</h2>\n<ul><li>DOM شجرة كائنات يبنيها المتصفح من HTML.</li><li>كل وسم عقدة لها أب وأبناء وإخوة.</li><li><code dir=\"ltr\">document</code> نقطة الدخول للصفحة كاملة.</li><li>نربط ملف JavaScript في نهاية <code dir=\"ltr\">body</code> أو بـ <code dir=\"ltr\">defer</code>.</li></ul>",
   "exercise": {
    "prompt": "<p>الصفحة في المعاينة تحتوي عنواناً وقائمة. استخدم <code dir=\"ltr\">document.body.children</code> لطباعة:</p>\n<ol><li>عدد العناصر المباشرة داخل <code dir=\"ltr\">body</code>.</li><li>النص داخل أول عنصر (العنوان).</li><li>عدد عناصر القائمة (أبناء العنصر الثاني).</li></ol>",
    "html": "<h1>قائمة المهام</h1>\n<ul>\n  <li>الدراسة</li>\n  <li>الرياضة</li>\n  <li>القراءة</li>\n</ul>",
    "starter": "// استخدم document.body.children",
    "expected": "2\nقائمة المهام\n3",
    "solution": "const items = document.body.children;\nconsole.log(items.length);\nconsole.log(items[0].textContent);\nconsole.log(items[1].children.length);"
   },
   "quiz": [
    {
     "q": "ما هو DOM؟",
     "o": [
      "لغة برمجة جديدة",
      "تمثيل الصفحة كشجرة كائنات يمكن لـ JavaScript التعامل معها",
      "ملف CSS خاص"
     ],
     "a": 1,
     "why": "يبني المتصفح DOM من HTML، و JavaScript تقرأه وتعدّله."
    },
    {
     "q": "في <code dir=\"ltr\">&lt;ul&gt;&lt;li&gt;أ&lt;/li&gt;&lt;/ul&gt;</code>، ما علاقة <code dir=\"ltr\">ul</code> بـ <code dir=\"ltr\">li</code>؟",
     "o": [
      "<code dir=\"ltr\">ul</code> هو الأب و <code dir=\"ltr\">li</code> الابن",
      "<code dir=\"ltr\">li</code> هو الأب",
      "هما إخوة"
     ],
     "a": 0,
     "why": "العنصر الذي يحتوي غيره هو الأب."
    },
    {
     "q": "لماذا يوضع وسم <code dir=\"ltr\">&lt;script&gt;</code> عادة في نهاية <code dir=\"ltr\">body</code>؟",
     "o": [
      "لأنه يعمل أسرع هناك",
      "حتى تكون عناصر الصفحة قد أُنشئت قبل أن يصل إليها الكود",
      "لأنه إلزامي في HTML"
     ],
     "a": 1,
     "why": "إذا نُفّذ الكود قبل إنشاء العناصر لن يجدها."
    }
   ]
  },
  {
   "body": "<h2>الوصول إلى العنصر الذي تريده</h2>\n<p>قبل أن تغيّر أي شيء في الصفحة، يجب أن <strong>تحدد</strong> العنصر. الطريقة الحديثة والأقوى هي استخدام <strong>محددات CSS</strong> نفسها التي تعرفها.</p>\n<h2>querySelector: أول عنصر مطابق</h2>\n<div class=\"code-block src\"><span class=\"code-label\">HTML</span><pre dir=\"ltr\"><code>&lt;h1 id=&quot;main-title&quot;&gt;المتجر&lt;/h1&gt;\n&lt;p class=&quot;note&quot;&gt;ملاحظة أولى&lt;/p&gt;\n&lt;p class=&quot;note&quot;&gt;ملاحظة ثانية&lt;/p&gt;\n&lt;button&gt;اشترِ الآن&lt;/button&gt;</code></pre></div>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>const title = document.querySelector(&quot;#main-title&quot;);\nconst firstNote = document.querySelector(&quot;.note&quot;);\nconst button = document.querySelector(&quot;button&quot;);\n\nconsole.log(title.textContent);\nconsole.log(firstNote.textContent);\nconsole.log(button.textContent);</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>المتجر\nملاحظة أولى\nاشترِ الآن</code></pre></div>\n<div class=\"table-wrap\"><table><thead><tr><th>المحدد</th><th>يختار</th></tr></thead><tbody><tr><td><code dir=\"ltr\">&quot;#id&quot;</code></td><td>العنصر الذي له هذا المعرّف</td></tr><tr><td><code dir=\"ltr\">&quot;.class&quot;</code></td><td>العناصر التي لها هذا الصنف</td></tr><tr><td><code dir=\"ltr\">&quot;tag&quot;</code></td><td>العناصر من هذا الوسم</td></tr><tr><td><code dir=\"ltr\">&quot;ul li&quot;</code></td><td>كل <code dir=\"ltr\">li</code> داخل <code dir=\"ltr\">ul</code></td></tr><tr><td><code dir=\"ltr\">&quot;input[type=email]&quot;</code></td><td>حسب خاصية معينة</td></tr></tbody></table></div>\n<h2>querySelectorAll: كل العناصر المطابقة</h2>\n<div class=\"code-block src\"><span class=\"code-label\">HTML</span><pre dir=\"ltr\"><code>&lt;ul&gt;\n  &lt;li class=&quot;item&quot;&gt;خبز&lt;/li&gt;\n  &lt;li class=&quot;item&quot;&gt;حليب&lt;/li&gt;\n  &lt;li class=&quot;item&quot;&gt;بيض&lt;/li&gt;\n&lt;/ul&gt;</code></pre></div>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>const items = document.querySelectorAll(&quot;.item&quot;);\nconsole.log(items.length);\n\nitems.forEach(item =&gt; console.log(item.textContent));\n\nconst names = [...items].map(li =&gt; li.textContent);\nconsole.log(names);</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>3\nخبز\nحليب\nبيض\n[&quot;خبز&quot;,&quot;حليب&quot;,&quot;بيض&quot;]</code></pre></div>\n<p><code dir=\"ltr\">querySelectorAll</code> تُرجع <strong>NodeList</strong>: تشبه المصفوفة وتدعم <code dir=\"ltr\">forEach</code> و <code dir=\"ltr\">length</code>، لكنها لا تدعم <code dir=\"ltr\">map</code> و <code dir=\"ltr\">filter</code>. لذلك نحولها لمصفوفة حقيقية بـ <code dir=\"ltr\">[...items]</code>.</p>\n<h2>الطرق الأقدم</h2>\n<p>ستراها في أكواد كثيرة:</p>\n<div class=\"table-wrap\"><table><thead><tr><th>الطريقة</th><th>تعادل</th></tr></thead><tbody><tr><td><code dir=\"ltr\">getElementById(&quot;x&quot;)</code></td><td><code dir=\"ltr\">querySelector(&quot;#x&quot;)</code></td></tr><tr><td><code dir=\"ltr\">getElementsByClassName(&quot;x&quot;)</code></td><td><code dir=\"ltr\">querySelectorAll(&quot;.x&quot;)</code> تقريباً</td></tr><tr><td><code dir=\"ltr\">getElementsByTagName(&quot;p&quot;)</code></td><td><code dir=\"ltr\">querySelectorAll(&quot;p&quot;)</code> تقريباً</td></tr></tbody></table></div>\n<p><code dir=\"ltr\">getElementById</code> أسرع قليلاً، لكن <code dir=\"ltr\">querySelector</code> أكثر مرونة وتكفيك في كل الحالات.</p>\n<h2>إذا لم يُعثر على العنصر</h2>\n<div class=\"code-block src\"><span class=\"code-label\">HTML</span><pre dir=\"ltr\"><code>&lt;p&gt;فقرة&lt;/p&gt;</code></pre></div>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>const missing = document.querySelector(&quot;#not-here&quot;);\nconsole.log(missing);\nconsole.log(document.querySelectorAll(&quot;.nothing&quot;).length);</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>null\n0</code></pre></div>\n<div class=\"callout warn\">⚠️ أشهر خطأ للمبتدئين: <code dir=\"ltr\">Cannot read properties of null</code>. يعني أن <code dir=\"ltr\">querySelector</code> لم تجد العنصر (اسم خاطئ، أو الكود نُفّذ قبل إنشاء العنصر)، ثم حاولت استخدام النتيجة <code dir=\"ltr\">null</code>.</div>\n<h2>التنقل في الشجرة</h2>\n<p>بعد تحديد عنصر، يمكنك الانتقال إلى أقاربه:</p>\n<div class=\"code-block src\"><span class=\"code-label\">HTML</span><pre dir=\"ltr\"><code>&lt;div class=&quot;card&quot;&gt;\n  &lt;h3&gt;العنوان&lt;/h3&gt;\n  &lt;p&gt;الوصف&lt;/p&gt;\n&lt;/div&gt;</code></pre></div>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>const heading = document.querySelector(&quot;.card h3&quot;);\nconsole.log(heading.parentElement.className);\nconsole.log(heading.nextElementSibling.textContent);\nconsole.log(heading.closest(&quot;.card&quot;) !== null);</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>card\nالوصف\ntrue</code></pre></div>\n<p><code dir=\"ltr\">closest(selector)</code> تبحث صعوداً عن أقرب أب يطابق المحدد، وهي مفيدة جداً مع الأحداث.</p>\n<h2>ملخص الدرس</h2>\n<ul><li><code dir=\"ltr\">querySelector</code> تُرجع أول عنصر مطابق أو <code dir=\"ltr\">null</code>.</li><li><code dir=\"ltr\">querySelectorAll</code> تُرجع كل العناصر كـ NodeList.</li><li>المحددات نفسها التي في CSS: <code dir=\"ltr\">#id</code> و <code dir=\"ltr\">.class</code> و <code dir=\"ltr\">tag</code>.</li><li><code dir=\"ltr\">parentElement</code> و <code dir=\"ltr\">children</code> و <code dir=\"ltr\">nextElementSibling</code> و <code dir=\"ltr\">closest</code> للتنقل.</li></ul>",
   "exercise": {
    "prompt": "<p>في الصفحة قائمة منتجات. استخدم المحددات المناسبة لطباعة:</p>\n<ol><li>نص العنصر الذي معرّفه <code dir=\"ltr\">shop-name</code>.</li><li>عدد المنتجات (العناصر التي لها الصنف <code dir=\"ltr\">product</code>).</li><li>مصفوفة أسماء المنتجات التي لها أيضاً الصنف <code dir=\"ltr\">sale</code> (محدد: <code dir=\"ltr\">.product.sale</code>).</li></ol>",
    "html": "<h2 id=\"shop-name\">متجر الأناقة</h2>\n<ul>\n  <li class=\"product\">قميص</li>\n  <li class=\"product sale\">بنطال</li>\n  <li class=\"product\">حزام</li>\n  <li class=\"product sale\">حذاء</li>\n</ul>",
    "starter": "// أكمل هنا",
    "expected": "متجر الأناقة\n4\n[\"بنطال\",\"حذاء\"]",
    "solution": "console.log(document.querySelector(\"#shop-name\").textContent);\nconsole.log(document.querySelectorAll(\".product\").length);\nconst onSale = [...document.querySelectorAll(\".product.sale\")].map(li => li.textContent);\nconsole.log(onSale);"
   },
   "quiz": [
    {
     "q": "ماذا تُرجع <code dir=\"ltr\">document.querySelector(&quot;.btn&quot;)</code> إذا كان هناك 3 عناصر بالصنف btn؟",
     "o": [
      "أول عنصر فقط",
      "كل العناصر الثلاثة",
      "آخر عنصر"
     ],
     "a": 0,
     "why": "querySelector تُرجع أول تطابق، و querySelectorAll تُرجع الكل."
    },
    {
     "q": "ماذا تُرجع <code dir=\"ltr\">querySelector</code> إذا لم تجد أي عنصر؟",
     "o": [
      "مصفوفة فارغة",
      "<code dir=\"ltr\">null</code>",
      "<code dir=\"ltr\">undefined</code>"
     ],
     "a": 1,
     "why": "لذلك يجب التأكد من وجود العنصر قبل استخدامه."
    },
    {
     "q": "لماذا نكتب <code dir=\"ltr\">[...document.querySelectorAll(&quot;li&quot;)]</code> قبل استخدام <code dir=\"ltr\">map</code>؟",
     "o": [
      "لتسريع الكود",
      "لأن NodeList لا تدعم <code dir=\"ltr\">map</code>، فنحوّلها لمصفوفة حقيقية",
      "لأن querySelectorAll تُرجع null"
     ],
     "a": 1,
     "why": "NodeList تدعم forEach لكن ليس map و filter."
    }
   ]
  },
  {
   "body": "<h2>تغيير ما يراه المستخدم</h2>\n<p>بعد تحديد العنصر، يمكننا تعديل نصه ومحتواه وأنماطه وخصائصه. هنا تبدأ الصفحة بالحياة.</p>\n<h2>تغيير النص</h2>\n<div class=\"code-block src\"><span class=\"code-label\">HTML</span><pre dir=\"ltr\"><code>&lt;p id=&quot;msg&quot;&gt;جاري التحميل...&lt;/p&gt;</code></pre></div>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>const msg = document.querySelector(&quot;#msg&quot;);\nmsg.textContent = &quot;تم التحميل بنجاح ✓&quot;;\nconsole.log(msg.textContent);</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>تم التحميل بنجاح ✓</code></pre></div>\n<h2>textContent أم innerHTML؟</h2>\n<div class=\"code-block src\"><span class=\"code-label\">HTML</span><pre dir=\"ltr\"><code>&lt;div id=&quot;box&quot;&gt;&lt;/div&gt;</code></pre></div>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>const box = document.querySelector(&quot;#box&quot;);\n\nbox.textContent = &quot;&lt;b&gt;نص عريض؟&lt;/b&gt;&quot;;\nconsole.log(box.children.length);\n\nbox.innerHTML = &quot;&lt;b&gt;نص عريض!&lt;/b&gt;&quot;;\nconsole.log(box.children.length);</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>0\n1</code></pre></div>\n<ul><li><code dir=\"ltr\">textContent</code> يضع النص <strong>كما هو</strong>، حتى لو احتوى وسوماً.</li><li><code dir=\"ltr\">innerHTML</code> يفسّر النص كـ HTML وينشئ عناصر.</li></ul>\n<div class=\"callout warn\">⚠️ لا تضع أبداً نصاً أدخله المستخدم في <code dir=\"ltr\">innerHTML</code>! قد يكتب كوداً خبيثاً يُنفَّذ في صفحتك، وهذه ثغرة أمنية مشهورة اسمها <strong>XSS</strong>. استخدم <code dir=\"ltr\">textContent</code> لأي نص من المستخدم.</div>\n<h2>تغيير الأنماط</h2>\n<p>الطريقة المباشرة عبر <code dir=\"ltr\">style</code>:</p>\n<div class=\"code-block src\"><span class=\"code-label\">HTML</span><pre dir=\"ltr\"><code>&lt;p id=&quot;note&quot;&gt;ملاحظة مهمة&lt;/p&gt;</code></pre></div>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>const note = document.querySelector(&quot;#note&quot;);\nnote.style.color = &quot;crimson&quot;;\nnote.style.fontSize = &quot;20px&quot;;\nnote.style.backgroundColor = &quot;#fff3cd&quot;;\nconsole.log(note.style.fontSize);</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>20px</code></pre></div>\n<p>لاحظ أن خصائص CSS ذات الشرطة مثل <code dir=\"ltr\">font-size</code> تُكتب بأسلوب camelCase: <code dir=\"ltr\">fontSize</code>.</p>\n<h2>الطريقة الأفضل: classList</h2>\n<p>بدلاً من كتابة الأنماط في JavaScript، نعرّفها في CSS كصنف، ثم نضيف الصنف أو نزيله:</p>\n<div class=\"code-block src\"><span class=\"code-label\">HTML</span><pre dir=\"ltr\"><code>&lt;button id=&quot;btn&quot;&gt;زر&lt;/button&gt;</code></pre></div>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>const btn = document.querySelector(&quot;#btn&quot;);\n\nbtn.classList.add(&quot;active&quot;);\nbtn.classList.add(&quot;big&quot;);\nbtn.classList.remove(&quot;big&quot;);\nconsole.log(btn.className);\n\nbtn.classList.toggle(&quot;active&quot;);\nconsole.log(btn.classList.contains(&quot;active&quot;));</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>active\nfalse</code></pre></div>\n<div class=\"table-wrap\"><table><thead><tr><th>الدالة</th><th>وظيفتها</th></tr></thead><tbody><tr><td><code dir=\"ltr\">add(&quot;x&quot;)</code></td><td>إضافة صنف</td></tr><tr><td><code dir=\"ltr\">remove(&quot;x&quot;)</code></td><td>إزالة صنف</td></tr><tr><td><code dir=\"ltr\">toggle(&quot;x&quot;)</code></td><td>إضافة إن لم يكن موجوداً، وإزالة إن كان موجوداً</td></tr><tr><td><code dir=\"ltr\">contains(&quot;x&quot;)</code></td><td>هل الصنف موجود؟</td></tr></tbody></table></div>\n<div class=\"callout tip\">💡 <code dir=\"ltr\">toggle</code> مثالية للأشياء التي تُفتح وتُغلق: القوائم، والوضع الليلي، وزر الإعجاب.</div>\n<h2>الخصائص (Attributes)</h2>\n<div class=\"code-block src\"><span class=\"code-label\">HTML</span><pre dir=\"ltr\"><code>&lt;img id=&quot;photo&quot; src=&quot;cat.jpg&quot; alt=&quot;قطة&quot;&gt;\n&lt;input id=&quot;email&quot; type=&quot;email&quot;&gt;</code></pre></div>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>const photo = document.querySelector(&quot;#photo&quot;);\nconsole.log(photo.getAttribute(&quot;alt&quot;));\nphoto.setAttribute(&quot;alt&quot;, &quot;قطة لطيفة&quot;);\nconsole.log(photo.alt);\n\nconst email = document.querySelector(&quot;#email&quot;);\nemail.value = &quot;user@mail.com&quot;;\nemail.disabled = true;\nconsole.log(email.value, email.disabled);</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>قطة\nقطة لطيفة\nuser@mail.com true</code></pre></div>\n<h2>إنشاء العناصر وحذفها</h2>\n<div class=\"code-block src\"><span class=\"code-label\">HTML</span><pre dir=\"ltr\"><code>&lt;ul id=&quot;list&quot;&gt;&lt;li&gt;أول&lt;/li&gt;&lt;/ul&gt;</code></pre></div>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>const list = document.querySelector(&quot;#list&quot;);\n\nconst li = document.createElement(&quot;li&quot;);\nli.textContent = &quot;عنصر جديد&quot;;\nlist.append(li);\n\nconsole.log(list.children.length);\n\nlist.children[0].remove();\nconsole.log(list.children[0].textContent);</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>2\nعنصر جديد</code></pre></div>\n<p>الخطوات دائماً: <strong>أنشئ</strong> العنصر بـ <code dir=\"ltr\">createElement</code>، ثم <strong>املأه</strong> بالنص والأصناف، ثم <strong>أضفه</strong> للصفحة بـ <code dir=\"ltr\">append</code> (في النهاية) أو <code dir=\"ltr\">prepend</code> (في البداية).</p>\n<h2>ملخص الدرس</h2>\n<ul><li><code dir=\"ltr\">textContent</code> للنص الآمن، و <code dir=\"ltr\">innerHTML</code> للـ HTML (لا تستخدمه مع مدخلات المستخدم).</li><li><code dir=\"ltr\">style.prop</code> لتعديل نمط مباشرة، و <code dir=\"ltr\">classList</code> هي الطريقة المفضلة.</li><li><code dir=\"ltr\">getAttribute</code> و <code dir=\"ltr\">setAttribute</code> والخصائص المباشرة مثل <code dir=\"ltr\">value</code>.</li><li><code dir=\"ltr\">createElement</code> ثم <code dir=\"ltr\">append</code> لإضافة عنصر، و <code dir=\"ltr\">remove()</code> لحذفه.</li></ul>",
   "exercise": {
    "prompt": "<p>في الصفحة قائمة مهام فارغة وعنوان. المطلوب:</p>\n<ol><li>غيّر نص العنوان <code dir=\"ltr\">#title</code> إلى <code dir=\"ltr\">مهامي اليوم</code>.</li><li>باستخدام حلقة على المصفوفة <code dir=\"ltr\">tasks</code>، أنشئ عنصر <code dir=\"ltr\">li</code> لكل مهمة وأضفه للقائمة <code dir=\"ltr\">#todo</code>.</li><li>أضف الصنف <code dir=\"ltr\">done</code> لأول مهمة.</li><li>اطبع عدد عناصر القائمة، ثم نص العنوان.</li></ol>",
    "html": "<h2 id=\"title\">بدون عنوان</h2>\n<ul id=\"todo\"></ul>\n<style>.done { text-decoration: line-through; color: gray; }</style>",
    "starter": "const tasks = [\"مراجعة الدرس\", \"حل التمرين\", \"كتابة ملخص\"];\n\n// أكمل هنا",
    "expected": "3\nمهامي اليوم",
    "solution": "const tasks = [\"مراجعة الدرس\", \"حل التمرين\", \"كتابة ملخص\"];\n\ndocument.querySelector(\"#title\").textContent = \"مهامي اليوم\";\n\nconst list = document.querySelector(\"#todo\");\nfor (const task of tasks) {\n  const li = document.createElement(\"li\");\n  li.textContent = task;\n  list.append(li);\n}\n\nlist.children[0].classList.add(\"done\");\n\nconsole.log(list.children.length);\nconsole.log(document.querySelector(\"#title\").textContent);"
   },
   "quiz": [
    {
     "q": "أيهما آمن لعرض نص كتبه المستخدم؟",
     "o": [
      "<code dir=\"ltr\">textContent</code>",
      "<code dir=\"ltr\">innerHTML</code>",
      "كلاهما آمن"
     ],
     "a": 0,
     "why": "innerHTML يفسّر الوسوم وقد يُنفّذ كوداً خبيثاً (XSS)."
    },
    {
     "q": "ماذا تفعل <code dir=\"ltr\">classList.toggle(&quot;open&quot;)</code>؟",
     "o": [
      "تضيف الصنف دائماً",
      "تضيفه إن لم يكن موجوداً وتزيله إن كان موجوداً",
      "تحذف كل الأصناف"
     ],
     "a": 1,
     "why": "toggle تبدّل الحالة بين وجود الصنف وغيابه."
    },
    {
     "q": "كيف نكتب خاصية CSS <code dir=\"ltr\">background-color</code> في JavaScript؟",
     "o": [
      "<code dir=\"ltr\">style.background-color</code>",
      "<code dir=\"ltr\">style.backgroundColor</code>",
      "<code dir=\"ltr\">style[&quot;background color&quot;]</code>"
     ],
     "a": 1,
     "why": "الخصائص ذات الشرطة تُكتب بأسلوب camelCase."
    }
   ]
  },
  {
   "body": "<h2>الصفحة تستجيب</h2>\n<p><strong>الحدث (Event)</strong> هو شيء يحدث في الصفحة: ضغطة زر، كتابة في حقل، تحريك الفأرة، إرسال نموذج. ونحن نكتب كوداً <strong>يستمع</strong> للحدث وينفّذ دالة عندما يقع.</p>\n<h2>addEventListener</h2>\n<div class=\"code-block src\"><span class=\"code-label\">HTML</span><pre dir=\"ltr\"><code>&lt;button id=&quot;like&quot;&gt;أعجبني 👍&lt;/button&gt;\n&lt;p id=&quot;count&quot;&gt;0&lt;/p&gt;</code></pre></div>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>const button = document.querySelector(&quot;#like&quot;);\nconst countEl = document.querySelector(&quot;#count&quot;);\nlet likes = 0;\n\nbutton.addEventListener(&quot;click&quot;, () =&gt; {\n  likes++;\n  countEl.textContent = likes;\n});\n\n// محاكاة ثلاث ضغطات للتجربة\nbutton.click();\nbutton.click();\nbutton.click();\nconsole.log(countEl.textContent);</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>3</code></pre></div>\n<p>الصيغة: <code dir=\"ltr\">element.addEventListener(&quot;نوع الحدث&quot;, دالة)</code>. الدالة لا تُنفَّذ الآن، بل <strong>كلما</strong> وقع الحدث، ولهذا تسمى <strong>معالج الحدث (event handler)</strong>.</p>\n<div class=\"callout tip\">💡 في الصفحات الحقيقية المستخدم هو من يضغط. استخدمنا <code dir=\"ltr\">button.click()</code> هنا فقط لمحاكاة الضغط في التمرين. جرّب أيضاً الضغط بنفسك على الزر في المعاينة!</div>\n<h2>أشهر الأحداث</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>الحدث</th><th>يقع عندما</th></tr></thead><tbody><tr><td><code dir=\"ltr\">click</code></td><td>الضغط على العنصر</td></tr><tr><td><code dir=\"ltr\">input</code></td><td>تتغير قيمة حقل الإدخال (مع كل حرف)</td></tr><tr><td><code dir=\"ltr\">change</code></td><td>تتغير القيمة ويغادر المستخدم الحقل</td></tr><tr><td><code dir=\"ltr\">submit</code></td><td>إرسال نموذج</td></tr><tr><td><code dir=\"ltr\">keydown</code></td><td>الضغط على مفتاح في لوحة المفاتيح</td></tr><tr><td><code dir=\"ltr\">mouseenter</code> و <code dir=\"ltr\">mouseleave</code></td><td>دخول الفأرة للعنصر وخروجها</td></tr></tbody></table></div>\n<h2>كائن الحدث (event)</h2>\n<p>دالة المعالج تستقبل كائناً فيه تفاصيل ما حدث:</p>\n<div class=\"code-block src\"><span class=\"code-label\">HTML</span><pre dir=\"ltr\"><code>&lt;input id=&quot;search&quot; placeholder=&quot;ابحث...&quot;&gt;\n&lt;p id=&quot;preview&quot;&gt;&lt;/p&gt;</code></pre></div>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>const search = document.querySelector(&quot;#search&quot;);\nconst preview = document.querySelector(&quot;#preview&quot;);\n\nsearch.addEventListener(&quot;input&quot;, event =&gt; {\n  preview.textContent = `تبحث عن: ${event.target.value}`;\n});\n\nsearch.value = &quot;لابتوب&quot;;\nsearch.dispatchEvent(new Event(&quot;input&quot;));\nconsole.log(preview.textContent);</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>تبحث عن: لابتوب</code></pre></div>\n<ul><li><code dir=\"ltr\">event.target</code> العنصر الذي وقع عليه الحدث.</li><li><code dir=\"ltr\">event.target.value</code> قيمة الحقل.</li><li><code dir=\"ltr\">event.key</code> المفتاح المضغوط في أحداث لوحة المفاتيح.</li></ul>\n<h2>منع السلوك الافتراضي</h2>\n<p>بعض العناصر لها سلوك تلقائي: النموذج يعيد تحميل الصفحة عند إرساله، والرابط ينقلك لصفحة أخرى. <code dir=\"ltr\">preventDefault()</code> توقف ذلك:</p>\n<div class=\"code-block src\"><span class=\"code-label\">HTML</span><pre dir=\"ltr\"><code>&lt;form id=&quot;login&quot;&gt;\n  &lt;input name=&quot;user&quot; value=&quot;ali&quot;&gt;\n  &lt;button&gt;دخول&lt;/button&gt;\n&lt;/form&gt;</code></pre></div>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>const form = document.querySelector(&quot;#login&quot;);\n\nform.addEventListener(&quot;submit&quot;, event =&gt; {\n  event.preventDefault();\n  const user = form.elements.user.value;\n  console.log(`محاولة دخول: ${user}`);\n});\n\nform.requestSubmit();</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>محاولة دخول: ali</code></pre></div>\n<p>بدون <code dir=\"ltr\">preventDefault()</code> كانت الصفحة ستُعاد تحميلها وتضيع البيانات. هذا السطر موجود في كل نموذج تتعامل معه JavaScript تقريباً.</p>\n<h2>إزالة المستمع</h2>\n<div class=\"code-block src\"><span class=\"code-label\">HTML</span><pre dir=\"ltr\"><code>&lt;button id=&quot;once&quot;&gt;اضغط مرة واحدة&lt;/button&gt;</code></pre></div>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>const btn = document.querySelector(&quot;#once&quot;);\nlet clicks = 0;\n\nfunction handleClick() {\n  clicks++;\n  btn.removeEventListener(&quot;click&quot;, handleClick);\n}\nbtn.addEventListener(&quot;click&quot;, handleClick);\n\nbtn.click();\nbtn.click();\nconsole.log(clicks);</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>1</code></pre></div>\n<p>لإزالة مستمع يجب أن تمرر <strong>نفس الدالة</strong>، لذلك عرّفناها باسم بدلاً من دالة سهمية مجهولة. وهناك اختصار: <code dir=\"ltr\">addEventListener(&quot;click&quot;, fn, { once: true })</code>.</p>\n<h2>ملخص الدرس</h2>\n<ul><li><code dir=\"ltr\">addEventListener(type, handler)</code> ينفّذ الدالة عند وقوع الحدث.</li><li>أشهر الأحداث: <code dir=\"ltr\">click</code> و <code dir=\"ltr\">input</code> و <code dir=\"ltr\">submit</code> و <code dir=\"ltr\">keydown</code>.</li><li><code dir=\"ltr\">event.target</code> العنصر الذي وقع عليه الحدث.</li><li><code dir=\"ltr\">event.preventDefault()</code> يمنع السلوك التلقائي مثل إعادة تحميل الصفحة عند الإرسال.</li></ul>",
   "exercise": {
    "prompt": "<p>ابنِ عدّاداً بثلاثة أزرار: <code dir=\"ltr\">+</code> يزيد، و <code dir=\"ltr\">-</code> ينقص، و <code dir=\"ltr\">تصفير</code> يعيد إلى 0. والعدد يظهر في <code dir=\"ltr\">#value</code>.</p>\n<p>شرط إضافي: العدد <strong>لا ينزل تحت الصفر</strong>.</p>\n<p>أسطر المحاكاة في نهاية الكود تضغط الأزرار، لا تعدّلها. وبعد نجاحك جرّب الأزرار بنفسك في المعاينة.</p>",
    "html": "<h2 id=\"value\">0</h2>\n<button id=\"plus\">+</button>\n<button id=\"minus\">-</button>\n<button id=\"reset\">تصفير</button>",
    "starter": "const valueEl = document.querySelector(\"#value\");\nlet count = 0;\n\n// أضف المستمعين للأزرار الثلاثة هنا\n\n\n// --- محاكاة الضغطات (لا تعدّل) ---\nconst press = id => document.querySelector(id).click();\npress(\"#plus\"); press(\"#plus\"); press(\"#plus\");\nconsole.log(valueEl.textContent);\npress(\"#minus\");\nconsole.log(valueEl.textContent);\npress(\"#reset\"); press(\"#minus\");\nconsole.log(valueEl.textContent);",
    "expected": "3\n2\n0",
    "solution": "const valueEl = document.querySelector(\"#value\");\nlet count = 0;\n\nconst render = () => { valueEl.textContent = count; };\n\ndocument.querySelector(\"#plus\").addEventListener(\"click\", () => {\n  count++;\n  render();\n});\ndocument.querySelector(\"#minus\").addEventListener(\"click\", () => {\n  if (count > 0) count--;\n  render();\n});\ndocument.querySelector(\"#reset\").addEventListener(\"click\", () => {\n  count = 0;\n  render();\n});\n\n// --- محاكاة الضغطات (لا تعدّل) ---\nconst press = id => document.querySelector(id).click();\npress(\"#plus\"); press(\"#plus\"); press(\"#plus\");\nconsole.log(valueEl.textContent);\npress(\"#minus\");\nconsole.log(valueEl.textContent);\npress(\"#reset\"); press(\"#minus\");\nconsole.log(valueEl.textContent);"
   },
   "quiz": [
    {
     "q": "متى تُنفَّذ الدالة الممررة إلى <code dir=\"ltr\">addEventListener(&quot;click&quot;, fn)</code>؟",
     "o": [
      "فوراً عند كتابة السطر",
      "كلما ضُغط على العنصر",
      "مرة واحدة فقط بعد تحميل الصفحة"
     ],
     "a": 1,
     "why": "المعالج ينتظر وقوع الحدث، ويُنفَّذ في كل مرة يقع فيها."
    },
    {
     "q": "ما فائدة <code dir=\"ltr\">event.preventDefault()</code> في حدث <code dir=\"ltr\">submit</code>؟",
     "o": [
      "تمنع إعادة تحميل الصفحة عند إرسال النموذج",
      "تحذف النموذج",
      "تمنع الكتابة في الحقول"
     ],
     "a": 0,
     "why": "السلوك الافتراضي للنموذج هو إرسال البيانات وإعادة تحميل الصفحة."
    },
    {
     "q": "أي حدث يقع مع كل حرف يكتبه المستخدم في حقل الإدخال؟",
     "o": [
      "<code dir=\"ltr\">change</code>",
      "<code dir=\"ltr\">input</code>",
      "<code dir=\"ltr\">submit</code>"
     ],
     "a": 1,
     "why": "<code dir=\"ltr\">input</code> يقع فوراً مع كل تغيير، و <code dir=\"ltr\">change</code> عند مغادرة الحقل."
    }
   ]
  },
  {
   "body": "<h2>مشكلة: مئات المستمعين</h2>\n<p>تخيّل قائمة فيها 500 منتج، ولكل منتج زر حذف. هل نضيف 500 مستمع؟ وماذا عن المنتجات التي تُضاف لاحقاً، ولم تكن موجودة عندما أضفنا المستمعين؟</p>\n<p>الحل الذكي اسمه <strong>تفويض الأحداث (Event Delegation)</strong>، وهو يعتمد على ظاهرة تسمى <strong>الفقاعة (Bubbling)</strong>.</p>\n<h2>فقاعة الأحداث (Bubbling)</h2>\n<p>عندما تضغط على عنصر، لا يقع الحدث عليه وحده. بل <strong>يصعد</strong> الحدث كالفقاعة إلى أبيه، ثم أب أبيه، وهكذا حتى <code dir=\"ltr\">document</code>:</p>\n<div class=\"code-block src\"><span class=\"code-label\">HTML</span><pre dir=\"ltr\"><code>&lt;div id=&quot;outer&quot;&gt;\n  &lt;button id=&quot;inner&quot;&gt;اضغطني&lt;/button&gt;\n&lt;/div&gt;</code></pre></div>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>document.querySelector(&quot;#outer&quot;).addEventListener(&quot;click&quot;, () =&gt; {\n  console.log(&quot;وصل الحدث إلى div&quot;);\n});\ndocument.querySelector(&quot;#inner&quot;).addEventListener(&quot;click&quot;, () =&gt; {\n  console.log(&quot;ضُغط الزر&quot;);\n});\n\ndocument.querySelector(&quot;#inner&quot;).click();</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>ضُغط الزر\nوصل الحدث إلى div</code></pre></div>\n<p>ضغطنا الزر فقط، لكن مستمع الـ <code dir=\"ltr\">div</code> نُفّذ أيضاً لأن الحدث صعد إليه.</p>\n<h2>الفكرة: مستمع واحد على الأب</h2>\n<p>بدلاً من مستمع لكل عنصر، نضع <strong>مستمعاً واحداً على الأب</strong>، ونعرف من <code dir=\"ltr\">event.target</code> أي ابن ضُغط بالضبط:</p>\n<div class=\"code-block src\"><span class=\"code-label\">HTML</span><pre dir=\"ltr\"><code>&lt;ul id=&quot;menu&quot;&gt;\n  &lt;li&gt;الرئيسية&lt;/li&gt;\n  &lt;li&gt;المنتجات&lt;/li&gt;\n  &lt;li&gt;تواصل معنا&lt;/li&gt;\n&lt;/ul&gt;</code></pre></div>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>const menu = document.querySelector(&quot;#menu&quot;);\n\nmenu.addEventListener(&quot;click&quot;, event =&gt; {\n  if (event.target.tagName === &quot;LI&quot;) {\n    console.log(`اخترت: ${event.target.textContent}`);\n  }\n});\n\nmenu.children[1].click();\nmenu.children[2].click();</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>اخترت: المنتجات\nاخترت: تواصل معنا</code></pre></div>\n<h2>الميزة الكبرى: العناصر الجديدة تعمل تلقائياً</h2>\n<div class=\"code-block src\"><span class=\"code-label\">HTML</span><pre dir=\"ltr\"><code>&lt;ul id=&quot;list&quot;&gt;&lt;li&gt;عنصر 1&lt;/li&gt;&lt;/ul&gt;</code></pre></div>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>const list = document.querySelector(&quot;#list&quot;);\nlist.addEventListener(&quot;click&quot;, e =&gt; {\n  if (e.target.tagName === &quot;LI&quot;) console.log(`ضغطت ${e.target.textContent}`);\n});\n\nconst li = document.createElement(&quot;li&quot;);\nli.textContent = &quot;عنصر جديد&quot;;\nlist.append(li);\n\nli.click();</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>ضغطت عنصر جديد</code></pre></div>\n<p>العنصر الجديد لم يكن موجوداً عند إضافة المستمع، ومع ذلك يعمل، لأن المستمع على الأب.</p>\n<h2>closest و data-attributes: الأسلوب الاحترافي</h2>\n<p>في الواقع، العنصر المضغوط قد يكون أيقونة داخل الزر وليس الزر نفسه. لذلك نستخدم <code dir=\"ltr\">closest</code>، ونخزّن بيانات العنصر في خصائص <code dir=\"ltr\">data-*</code>:</p>\n<div class=\"code-block src\"><span class=\"code-label\">HTML</span><pre dir=\"ltr\"><code>&lt;div id=&quot;products&quot;&gt;\n  &lt;div class=&quot;card&quot; data-id=&quot;7&quot;&gt;\n    &lt;span&gt;سماعة&lt;/span&gt;\n    &lt;button class=&quot;delete&quot; data-id=&quot;7&quot;&gt;&lt;b&gt;✕&lt;/b&gt; حذف&lt;/button&gt;\n  &lt;/div&gt;\n&lt;/div&gt;</code></pre></div>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>document.querySelector(&quot;#products&quot;).addEventListener(&quot;click&quot;, event =&gt; {\n  const btn = event.target.closest(&quot;.delete&quot;);\n  if (!btn) return;\n  console.log(`حذف المنتج رقم ${btn.dataset.id}`);\n  btn.closest(&quot;.card&quot;).remove();\n});\n\ndocument.querySelector(&quot;.delete b&quot;).click();\nconsole.log(document.querySelectorAll(&quot;.card&quot;).length);</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>حذف المنتج رقم 7\n0</code></pre></div>\n<ul><li><code dir=\"ltr\">closest(&quot;.delete&quot;)</code> تجد الزر حتى لو ضُغط على <code dir=\"ltr\">&lt;b&gt;</code> داخله.</li><li><code dir=\"ltr\">data-id=&quot;7&quot;</code> في HTML تُقرأ في JavaScript عبر <code dir=\"ltr\">element.dataset.id</code>.</li><li><code dir=\"ltr\">if (!btn) return;</code> تتجاهل الضغطات على أي مكان آخر داخل الأب.</li></ul>\n<h2>إيقاف الفقاعة</h2>\n<p>في حالات نادرة تريد منع الحدث من الصعود: <code dir=\"ltr\">event.stopPropagation()</code>. لكن استخدمها بحذر، لأنها قد تعطّل مستمعين آخرين يعتمدون على الفقاعة.</p>\n<h2>ملخص الدرس</h2>\n<ul><li>الأحداث تصعد من العنصر إلى آبائه (Bubbling).</li><li>التفويض: مستمع واحد على الأب بدلاً من مستمع لكل ابن.</li><li>يعمل تلقائياً مع العناصر المضافة لاحقاً.</li><li><code dir=\"ltr\">event.target.closest(selector)</code> و <code dir=\"ltr\">dataset</code> هما الأسلوب الاحترافي.</li></ul>",
   "exercise": {
    "prompt": "<p>لديك قائمة مهام، لكل مهمة زر <code dir=\"ltr\">✓</code> لإنهائها وزر <code dir=\"ltr\">✕</code> لحذفها. باستخدام <strong>مستمع واحد فقط</strong> على <code dir=\"ltr\">#tasks</code>:</p>\n<ul><li>الضغط على زر له الصنف <code dir=\"ltr\">toggle</code> يضيف/يزيل الصنف <code dir=\"ltr\">done</code> للعنصر <code dir=\"ltr\">li</code> الذي يحتويه.</li><li>الضغط على زر له الصنف <code dir=\"ltr\">remove</code> يحذف العنصر <code dir=\"ltr\">li</code> الذي يحتويه.</li></ul>\n<p>أسطر المحاكاة في النهاية تختبر الحل، لا تعدّلها.</p>",
    "html": "<ul id=\"tasks\">\n  <li>شراء الخبز <button class=\"toggle\">✓</button><button class=\"remove\">✕</button></li>\n  <li>دفع الفاتورة <button class=\"toggle\">✓</button><button class=\"remove\">✕</button></li>\n  <li>الاتصال بالطبيب <button class=\"toggle\">✓</button><button class=\"remove\">✕</button></li>\n</ul>\n<style>.done { text-decoration: line-through; color: gray; }</style>",
    "starter": "const tasks = document.querySelector(\"#tasks\");\n\n// أضف مستمعاً واحداً هنا\n\n\n// --- اختبار (لا تعدّل) ---\nconst items = () => [...tasks.querySelectorAll(\"li\")];\nitems()[0].querySelector(\".toggle\").click();\nconsole.log(items()[0].classList.contains(\"done\"));\nitems()[1].querySelector(\".remove\").click();\nconsole.log(items().length);\nitems()[0].querySelector(\".toggle\").click();\nconsole.log(items()[0].classList.contains(\"done\"));",
    "expected": "true\n2\nfalse",
    "solution": "const tasks = document.querySelector(\"#tasks\");\n\ntasks.addEventListener(\"click\", event => {\n  const li = event.target.closest(\"li\");\n  if (!li) return;\n  if (event.target.closest(\".toggle\")) {\n    li.classList.toggle(\"done\");\n  } else if (event.target.closest(\".remove\")) {\n    li.remove();\n  }\n});\n\n// --- اختبار (لا تعدّل) ---\nconst items = () => [...tasks.querySelectorAll(\"li\")];\nitems()[0].querySelector(\".toggle\").click();\nconsole.log(items()[0].classList.contains(\"done\"));\nitems()[1].querySelector(\".remove\").click();\nconsole.log(items().length);\nitems()[0].querySelector(\".toggle\").click();\nconsole.log(items()[0].classList.contains(\"done\"));"
   },
   "quiz": [
    {
     "q": "ما هي فقاعة الأحداث (Bubbling)؟",
     "o": [
      "صعود الحدث من العنصر المضغوط إلى آبائه",
      "تكرار الحدث مرتين",
      "حذف الحدث بعد وقوعه"
     ],
     "a": 0,
     "why": "يقع الحدث على العنصر ثم يصعد إلى كل آبائه."
    },
    {
     "q": "ما الميزة الأساسية لتفويض الأحداث؟",
     "o": [
      "يجعل الأحداث أسرع",
      "مستمع واحد يكفي لكل الأبناء، بما فيهم العناصر المضافة لاحقاً",
      "يمنع الأحداث من الصعود"
     ],
     "a": 1,
     "why": "المستمع على الأب يلتقط أحداث كل أبنائه الحاليين والمستقبليين."
    },
    {
     "q": "كيف نقرأ <code dir=\"ltr\">data-price=&quot;50&quot;</code> من عنصر في JavaScript؟",
     "o": [
      "<code dir=\"ltr\">el.data.price</code>",
      "<code dir=\"ltr\">el.dataset.price</code>",
      "<code dir=\"ltr\">el.price</code>"
     ],
     "a": 1,
     "why": "خصائص <code dir=\"ltr\">data-*</code> تُقرأ عبر <code dir=\"ltr\">dataset</code>."
    }
   ]
  }
 ],
 [
  {
   "body": "<h2>البرنامج لا ينتظر</h2>\n<p>بعض العمليات تأخذ وقتاً: جلب بيانات من خادم، قراءة ملف، أو انتظار مؤقت. لو انتظرت JavaScript انتهاء كل عملية قبل الانتقال للتالية، <strong>لتجمدت الصفحة</strong> كلها ولم يستطع المستخدم الضغط على أي شيء.</p>\n<p>لذلك تعمل JavaScript بأسلوب <strong>غير متزامن (Asynchronous)</strong>: تبدأ العملية الطويلة، وتكمل باقي الكود، ثم تعود لنتيجة العملية عندما تجهز.</p>\n<h2>setTimeout: أول تجربة</h2>\n<p><code dir=\"ltr\">setTimeout</code> تنفّذ دالة بعد مدة محددة بالملي ثانية (1000 = ثانية واحدة):</p>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>console.log(&quot;1. طلبت قهوة&quot;);\n\nsetTimeout(() =&gt; {\n  console.log(&quot;3. القهوة جاهزة ☕&quot;);\n}, 1000);\n\nconsole.log(&quot;2. أتصفح هاتفي أثناء الانتظار&quot;);</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>1. طلبت قهوة\n2. أتصفح هاتفي أثناء الانتظار\n3. القهوة جاهزة ☕</code></pre></div>\n<p>لاحظ الترتيب! السطر الثالث في الكود طُبع <strong>قبل</strong> الثاني، لأن JavaScript لم تنتظر انتهاء المؤقت. حتى <code dir=\"ltr\">setTimeout(fn, 0)</code> تُنفَّذ بعد انتهاء الكود الحالي كله.</p>\n<h2>Callbacks: &quot;اتصل بي عندما تنتهي&quot;</h2>\n<p>الطريقة التقليدية للتعامل مع العمليات غير المتزامنة هي تمرير <strong>دالة callback</strong> تُستدعى عند انتهاء العملية:</p>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>function downloadFile(name, callback) {\n  console.log(`بدأ تحميل ${name}...`);\n  setTimeout(() =&gt; {\n    callback(`محتوى ${name}`);\n  }, 500);\n}\n\ndownloadFile(&quot;report.pdf&quot;, content =&gt; {\n  console.log(`انتهى التحميل: ${content}`);\n});\nconsole.log(&quot;يمكنك متابعة العمل&quot;);</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>بدأ تحميل report.pdf...\nيمكنك متابعة العمل\nانتهى التحميل: محتوى report.pdf</code></pre></div>\n<h2>التعامل مع الأخطاء في Callbacks</h2>\n<p>العرف المتبع (خاصة في Node.js) أن يكون أول معامل للـ callback هو الخطأ:</p>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>function getUser(id, callback) {\n  setTimeout(() =&gt; {\n    if (id &lt;= 0) {\n      callback(&quot;معرّف غير صالح&quot;, null);\n    } else {\n      callback(null, { id, name: &quot;مستخدم &quot; + id });\n    }\n  }, 300);\n}\n\ngetUser(5, (error, user) =&gt; {\n  if (error) return console.log(`خطأ: ${error}`);\n  console.log(user.name);\n});\ngetUser(-1, (error, user) =&gt; {\n  if (error) return console.log(`خطأ: ${error}`);\n  console.log(user.name);\n});</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>مستخدم 5\nخطأ: معرّف غير صالح</code></pre></div>\n<h2>جحيم الـ Callbacks</h2>\n<p>المشكلة تظهر عندما تعتمد العمليات على بعضها: اجلب المستخدم، ثم طلباته، ثم تفاصيل أول طلب...</p>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>getUser(1, (err, user) =&gt; {\n  getOrders(user.id, (err, orders) =&gt; {\n    getOrderDetails(orders[0], (err, details) =&gt; {\n      getShipping(details.id, (err, shipping) =&gt; {\n        // ... وهكذا إلى ما لا نهاية\n      });\n    });\n  });\n});</code></pre></div>\n<p>هذا الشكل الهرمي يسمى <strong>Callback Hell</strong> أو &quot;هرم الهلاك&quot;. صعب القراءة، وصعب التعامل مع أخطائه. ولحله جاءت <strong>Promises</strong> التي سنتعلمها في الدرس القادم.</p>\n<h2>ملخص الدرس</h2>\n<ul><li>العمليات الطويلة في JavaScript غير متزامنة حتى لا تتجمد الصفحة.</li><li><code dir=\"ltr\">setTimeout(fn, ms)</code> تنفّذ الدالة بعد مدة، والكود الذي بعدها لا ينتظر.</li><li>الـ callback دالة نمررها لتُستدعى عند انتهاء العملية.</li><li>تداخل الـ callbacks يصنع &quot;Callback Hell&quot;، والحل هو Promises.</li></ul>",
   "exercise": {
    "prompt": "<p>اكتب دالة <code dir=\"ltr\">cook(dish, minutes, callback)</code> تطبع <code dir=\"ltr\">بدأ تحضير X</code>، ثم بعد <code dir=\"ltr\">minutes * 100</code> ملي ثانية تستدعي <code dir=\"ltr\">callback</code> وتمرر لها النص <code dir=\"ltr\">X جاهز</code>.</p>\n<p>استخدمها لتحضير الطبقين في الكود. لاحظ أن ترتيب الجاهزية يعتمد على المدة وليس على ترتيب البدء.</p>",
    "starter": "function cook(dish, minutes, callback) {\n  // أكمل هنا\n}\n\ncook(\"أرز\", 5, message => console.log(message));\ncook(\"سلطة\", 2, message => console.log(message));\nconsole.log(\"المطبخ يعمل...\");",
    "expected": "بدأ تحضير أرز\nبدأ تحضير سلطة\nالمطبخ يعمل...\nسلطة جاهز\nأرز جاهز",
    "solution": "function cook(dish, minutes, callback) {\n  console.log(`بدأ تحضير ${dish}`);\n  setTimeout(() => {\n    callback(`${dish} جاهز`);\n  }, minutes * 100);\n}\n\ncook(\"أرز\", 5, message => console.log(message));\ncook(\"سلطة\", 2, message => console.log(message));\nconsole.log(\"المطبخ يعمل...\");"
   },
   "quiz": [
    {
     "q": "ما ترتيب المخرجات؟ <code dir=\"ltr\">console.log(&quot;A&quot;); setTimeout(() =&gt; console.log(&quot;B&quot;), 0); console.log(&quot;C&quot;);</code>",
     "o": [
      "A ثم B ثم C",
      "A ثم C ثم B",
      "B ثم A ثم C"
     ],
     "a": 1,
     "why": "حتى مع مهلة 0، تُنفَّذ دالة setTimeout بعد انتهاء الكود الحالي."
    },
    {
     "q": "لماذا تعمل JavaScript بشكل غير متزامن مع العمليات الطويلة؟",
     "o": [
      "حتى لا تتجمد الصفحة أثناء الانتظار",
      "لأنها أبطأ من اللغات الأخرى",
      "لتوفير الذاكرة فقط"
     ],
     "a": 0,
     "why": "الانتظار المتزامن يوقف كل شيء، بما فيه تفاعل المستخدم."
    },
    {
     "q": "ما المقصود بـ Callback Hell؟",
     "o": [
      "خطأ في دالة callback",
      "تداخل callbacks كثيرة داخل بعضها بشكل يصعب قراءته",
      "دالة callback لا تُستدعى أبداً"
     ],
     "a": 1,
     "why": "كل عملية معتمدة على السابقة تضيف مستوى تداخل جديداً."
    }
   ]
  },
  {
   "body": "<h2>وعد بنتيجة مستقبلية</h2>\n<p><strong>الوعد (Promise)</strong> كائن يمثل نتيجة ستأتي في المستقبل. تخيّل أنك طلبت وجبة فأعطوك <strong>إيصالاً</strong>: الإيصال ليس الوجبة، لكنه وعد بأنك ستحصل عليها، أو ستُخبر بأنها نفدت.</p>\n<p>للوعد ثلاث حالات:</p>\n<div class=\"table-wrap\"><table><thead><tr><th>الحالة</th><th>المعنى</th></tr></thead><tbody><tr><td><code dir=\"ltr\">pending</code> (معلّق)</td><td>العملية ما زالت تعمل</td></tr><tr><td><code dir=\"ltr\">fulfilled</code> (تحقق)</td><td>انتهت بنجاح ومعها النتيجة</td></tr><tr><td><code dir=\"ltr\">rejected</code> (رُفض)</td><td>فشلت ومعها سبب الخطأ</td></tr></tbody></table></div>\n<h2>استخدام وعد: then و catch</h2>\n<p>معظم الوقت ستستخدم وعوداً جاهزة (مثل <code dir=\"ltr\">fetch</code>). نتعامل معها بـ <code dir=\"ltr\">then</code> للنجاح و <code dir=\"ltr\">catch</code> للفشل:</p>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>function getPrice(product) {\n  return new Promise((resolve, reject) =&gt; {\n    setTimeout(() =&gt; {\n      if (product === &quot;ذهب&quot;) resolve(250);\n      else reject(&quot;المنتج غير موجود&quot;);\n    }, 300);\n  });\n}\n\ngetPrice(&quot;ذهب&quot;)\n  .then(price =&gt; console.log(`السعر: ${price}`))\n  .catch(error =&gt; console.log(`خطأ: ${error}`));\n\ngetPrice(&quot;فضة&quot;)\n  .then(price =&gt; console.log(`السعر: ${price}`))\n  .catch(error =&gt; console.log(`خطأ: ${error}`));</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>السعر: 250\nخطأ: المنتج غير موجود</code></pre></div>\n<h2>إنشاء وعد</h2>\n<p>داخل <code dir=\"ltr\">new Promise</code> نكتب دالة تستقبل دالتين:</p>\n<ul><li><code dir=\"ltr\">resolve(value)</code>: نستدعيها عند النجاح ونمرر النتيجة.</li><li><code dir=\"ltr\">reject(error)</code>: نستدعيها عند الفشل ونمرر السبب.</li></ul>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>const wait = ms =&gt; new Promise(resolve =&gt; setTimeout(resolve, ms));\n\nwait(500).then(() =&gt; console.log(&quot;مرت نصف ثانية&quot;));</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>مرت نصف ثانية</code></pre></div>\n<p>دالة <code dir=\"ltr\">wait</code> هذه مفيدة جداً، وسنستخدمها كثيراً.</p>\n<h2>السلسلة: نهاية هرم الهلاك</h2>\n<p>قيمة <code dir=\"ltr\">then</code> الكبرى أنها تُرجع <strong>وعداً جديداً</strong>، فنستطيع ربط العمليات بشكل مسطح بدلاً من التداخل:</p>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>const wait = (ms, value) =&gt; new Promise(resolve =&gt; setTimeout(() =&gt; resolve(value), ms));\n\nwait(100, 5)\n  .then(n =&gt; {\n    console.log(`البداية: ${n}`);\n    return n * 2;\n  })\n  .then(n =&gt; {\n    console.log(`بعد المضاعفة: ${n}`);\n    return wait(100, n + 1);\n  })\n  .then(n =&gt; console.log(`النتيجة النهائية: ${n}`))\n  .catch(err =&gt; console.log(err))\n  .finally(() =&gt; console.log(&quot;انتهت العملية&quot;));</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>البداية: 5\nبعد المضاعفة: 10\nالنتيجة النهائية: 11\nانتهت العملية</code></pre></div>\n<ul><li>ما تُرجعه <code dir=\"ltr\">then</code> يصل للـ <code dir=\"ltr\">then</code> التالية.</li><li>إذا أرجعت وعداً، تنتظره السلسلة قبل المتابعة.</li><li><code dir=\"ltr\">catch</code> واحدة في النهاية تلتقط خطأ <strong>أي</strong> خطوة.</li><li><code dir=\"ltr\">finally</code> تُنفَّذ دائماً، نجاحاً أو فشلاً، وهي مناسبة لإخفاء مؤشر التحميل مثلاً.</li></ul>\n<h2>تشغيل عدة وعود معاً</h2>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>const task = (name, ms) =&gt; new Promise(r =&gt; setTimeout(() =&gt; r(name), ms));\n\nPromise.all([task(&quot;المستخدم&quot;, 300), task(&quot;الطلبات&quot;, 100), task(&quot;الإشعارات&quot;, 200)])\n  .then(results =&gt; console.log(results));\n\nPromise.race([task(&quot;خادم 1&quot;, 250), task(&quot;خادم 2&quot;, 150)])\n  .then(winner =&gt; console.log(`الأسرع: ${winner}`));</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>الأسرع: خادم 2\n[&quot;المستخدم&quot;,&quot;الطلبات&quot;,&quot;الإشعارات&quot;]</code></pre></div>\n<div class=\"table-wrap\"><table><thead><tr><th>الدالة</th><th>تتحقق عندما</th></tr></thead><tbody><tr><td><code dir=\"ltr\">Promise.all</code></td><td><strong>تنجح كل</strong> الوعود، وتُرجع النتائج بنفس الترتيب. تفشل إذا فشل أي وعد</td></tr><tr><td><code dir=\"ltr\">Promise.allSettled</code></td><td>تنتهي كل الوعود، نجاحاً أو فشلاً، وتعطيك حالة كل واحد</td></tr><tr><td><code dir=\"ltr\">Promise.race</code></td><td>ينتهي <strong>أول</strong> وعد</td></tr><tr><td><code dir=\"ltr\">Promise.any</code></td><td>ينجح أول وعد</td></tr></tbody></table></div>\n<div class=\"callout tip\">💡 <code dir=\"ltr\">Promise.all</code> أسرع بكثير من تنفيذ العمليات واحدة بعد الأخرى، لأنها تعمل بالتوازي. في المثال انتهت الثلاثة خلال 300 ملي ثانية بدلاً من 600.</div>\n<h2>ملخص الدرس</h2>\n<ul><li>الوعد يمثل نتيجة مستقبلية بحالة pending أو fulfilled أو rejected.</li><li><code dir=\"ltr\">then</code> للنتيجة، و <code dir=\"ltr\">catch</code> للخطأ، و <code dir=\"ltr\">finally</code> تُنفَّذ دائماً.</li><li>السلسلة تجعل العمليات المتتابعة مسطحة وواضحة.</li><li><code dir=\"ltr\">Promise.all</code> لتشغيل عدة عمليات بالتوازي.</li></ul>",
   "exercise": {
    "prompt": "<p>اكتب دالة <code dir=\"ltr\">checkStock(item)</code> تُرجع <strong>وعداً</strong> يتحقق بعد 200 ملي ثانية:</p>\n<ul><li>إذا كان <code dir=\"ltr\">item</code> موجوداً في الكائن <code dir=\"ltr\">stock</code> وكميته أكبر من 0، يتحقق بالنص <code dir=\"ltr\">X متوفر (الكمية: N)</code>.</li><li>غير ذلك يُرفض بالنص <code dir=\"ltr\">X غير متوفر</code>.</li></ul>\n<p>الكود في الأسفل يستخدم الدالة، لا تعدّله.</p>",
    "starter": "const stock = { \"قلم\": 12, \"دفتر\": 0, \"مسطرة\": 5 };\n\nfunction checkStock(item) {\n  // أعد وعداً هنا\n}\n\ncheckStock(\"قلم\")\n  .then(msg => console.log(msg))\n  .then(() => checkStock(\"دفتر\"))\n  .then(msg => console.log(msg))\n  .catch(err => console.log(err))\n  .finally(() => console.log(\"انتهى الفحص\"));",
    "expected": "قلم متوفر (الكمية: 12)\nدفتر غير متوفر\nانتهى الفحص",
    "solution": "const stock = { \"قلم\": 12, \"دفتر\": 0, \"مسطرة\": 5 };\n\nfunction checkStock(item) {\n  return new Promise((resolve, reject) => {\n    setTimeout(() => {\n      if (stock[item] > 0) {\n        resolve(`${item} متوفر (الكمية: ${stock[item]})`);\n      } else {\n        reject(`${item} غير متوفر`);\n      }\n    }, 200);\n  });\n}\n\ncheckStock(\"قلم\")\n  .then(msg => console.log(msg))\n  .then(() => checkStock(\"دفتر\"))\n  .then(msg => console.log(msg))\n  .catch(err => console.log(err))\n  .finally(() => console.log(\"انتهى الفحص\"));"
   },
   "quiz": [
    {
     "q": "ما الحالات الثلاث للوعد؟",
     "o": [
      "pending و fulfilled و rejected",
      "start و running و end",
      "true و false و null"
     ],
     "a": 0,
     "why": "الوعد يبدأ معلقاً، ثم إما يتحقق أو يُرفض."
    },
    {
     "q": "ماذا يحدث إذا فشلت الخطوة الثانية في سلسلة then ثلاثية، وفي نهايتها catch واحدة؟",
     "o": [
      "تستمر الخطوة الثالثة",
      "تُتخطى بقية الـ then وينتقل التنفيذ إلى catch",
      "يتوقف البرنامج بخطأ"
     ],
     "a": 1,
     "why": "catch في نهاية السلسلة تلتقط خطأ أي خطوة قبلها."
    },
    {
     "q": "متى يفشل <code dir=\"ltr\">Promise.all</code>؟",
     "o": [
      "عندما تفشل كل الوعود",
      "عندما يفشل أي وعد واحد",
      "لا يفشل أبداً"
     ],
     "a": 1,
     "why": "Promise.all تتطلب نجاح الجميع. استخدم allSettled إذا أردت كل النتائج مهما حدث."
    }
   ]
  },
  {
   "body": "<h2>كتابة الكود غير المتزامن كأنه متزامن</h2>\n<p><code dir=\"ltr\">async</code> و <code dir=\"ltr\">await</code> صيغة أحدث مبنية على الوعود، تجعل الكود غير المتزامن <strong>يُقرأ من الأعلى للأسفل</strong> كالكود العادي تماماً. وهي الطريقة الأكثر استخداماً اليوم.</p>\n<h2>المقارنة</h2>\n<p>نفس العملية بالطريقتين:</p>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>const wait = (ms, v) =&gt; new Promise(r =&gt; setTimeout(() =&gt; r(v), ms));\n\n// باستخدام then\nfunction withThen() {\n  return wait(100, &quot;علي&quot;).then(name =&gt; {\n    return wait(100, `${name} - 3 طلبات`);\n  });\n}\n\n// باستخدام async/await\nasync function withAwait() {\n  const name = await wait(100, &quot;علي&quot;);\n  const summary = await wait(100, `${name} - 3 طلبات`);\n  return summary;\n}\n\nwithThen().then(r =&gt; console.log(r));\nwithAwait().then(r =&gt; console.log(r));</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>علي - 3 طلبات\nعلي - 3 طلبات</code></pre></div>\n<p>النسخة الثانية أوضح بكثير، خاصة عندما تكثر الخطوات.</p>\n<h2>القواعد</h2>\n<ol><li><code dir=\"ltr\">async</code> قبل الدالة تجعلها <strong>تُرجع وعداً دائماً</strong>.</li><li><code dir=\"ltr\">await</code> توقف تنفيذ <strong>هذه الدالة فقط</strong> حتى يتحقق الوعد، ثم تعطيك قيمته مباشرة.</li><li><code dir=\"ltr\">await</code> لا تُستخدم إلا داخل دالة <code dir=\"ltr\">async</code>.</li></ol>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>async function getNumber() {\n  return 42;\n}\n\nconst result = getNumber();\nconsole.log(result instanceof Promise);\nresult.then(n =&gt; console.log(n));</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>true\n42</code></pre></div>\n<p>حتى لو أرجعت رقماً عادياً، الدالة <code dir=\"ltr\">async</code> تغلّفه في وعد.</p>\n<h2>await لا تجمّد البرنامج</h2>\n<p><code dir=\"ltr\">await</code> توقف الدالة الحالية فقط، أما باقي البرنامج فيستمر:</p>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>const wait = ms =&gt; new Promise(r =&gt; setTimeout(r, ms));\n\nasync function task() {\n  console.log(&quot;بدأت المهمة&quot;);\n  await wait(200);\n  console.log(&quot;انتهت المهمة&quot;);\n}\n\ntask();\nconsole.log(&quot;البرنامج مستمر&quot;);</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>بدأت المهمة\nالبرنامج مستمر\nانتهت المهمة</code></pre></div>\n<h2>الأخطاء مع try...catch</h2>\n<p>بدلاً من <code dir=\"ltr\">.catch()</code>، نستخدم <code dir=\"ltr\">try...catch</code> المألوفة:</p>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>function login(password) {\n  return new Promise((resolve, reject) =&gt; {\n    setTimeout(() =&gt; {\n      password === &quot;1234&quot; ? resolve(&quot;تم الدخول&quot;) : reject(new Error(&quot;كلمة المرور خاطئة&quot;));\n    }, 100);\n  });\n}\n\nasync function attempt(pass) {\n  try {\n    const msg = await login(pass);\n    console.log(msg);\n  } catch (error) {\n    console.log(`فشل: ${error.message}`);\n  } finally {\n    console.log(&quot;--&quot;);\n  }\n}\n\nattempt(&quot;0000&quot;).then(() =&gt; attempt(&quot;1234&quot;));</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>فشل: كلمة المرور خاطئة\n--\nتم الدخول\n--</code></pre></div>\n<h2>خطأ شائع: الانتظار المتتابع دون داعٍ</h2>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>const wait = (ms, v) =&gt; new Promise(r =&gt; setTimeout(() =&gt; r(v), ms));\n\nasync function slow() {\n  const a = await wait(300, &quot;أ&quot;);\n  const b = await wait(300, &quot;ب&quot;);\n  return a + b;\n}\n\nasync function fast() {\n  const [a, b] = await Promise.all([wait(300, &quot;أ&quot;), wait(300, &quot;ب&quot;)]);\n  return a + b;\n}\n\nconst t = Date.now();\nfast().then(r =&gt; console.log(r, Date.now() - t &lt; 450 ? &quot;سريع&quot; : &quot;بطيء&quot;));</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>أب سريع</code></pre></div>\n<p>إذا كانت العمليتان <strong>مستقلتين</strong> عن بعضهما، لا تنتظر الأولى قبل بدء الثانية. <code dir=\"ltr\">slow</code> تأخذ 600 ملي ثانية، و <code dir=\"ltr\">fast</code> تأخذ 300 فقط.</p>\n<div class=\"callout tip\">💡 القاعدة: <code dir=\"ltr\">await</code> متتابعة عندما تحتاج نتيجة الخطوة السابقة، و <code dir=\"ltr\">Promise.all</code> عندما تكون العمليات مستقلة.</div>\n<h2>ملخص الدرس</h2>\n<ul><li><code dir=\"ltr\">async</code> تجعل الدالة تُرجع وعداً، و <code dir=\"ltr\">await</code> تنتظر الوعد وتعطيك قيمته.</li><li><code dir=\"ltr\">await</code> توقف الدالة الحالية فقط وليس البرنامج كله.</li><li>استخدم <code dir=\"ltr\">try...catch</code> لالتقاط الأخطاء.</li><li>استخدم <code dir=\"ltr\">Promise.all</code> مع <code dir=\"ltr\">await</code> للعمليات المستقلة.</li></ul>",
   "exercise": {
    "prompt": "<p>لديك دوال جاهزة تحاكي قاعدة بيانات. اكتب دالة <code dir=\"ltr\">async</code> اسمها <code dir=\"ltr\">showProfile(id)</code> تنفّذ بالترتيب:</p>\n<ol><li>تجلب المستخدم بـ <code dir=\"ltr\">getUser(id)</code> وتطبع اسمه.</li><li>تجلب طلباته بـ <code dir=\"ltr\">getOrders(user.name)</code> وتطبع <code dir=\"ltr\">عدد الطلبات: N</code>.</li><li>إذا فشلت أي خطوة، تطبع <code dir=\"ltr\">خطأ: </code> متبوعة برسالة الخطأ.</li></ol>",
    "starter": "const wait = ms => new Promise(r => setTimeout(r, ms));\nconst getUser = async id => {\n  await wait(100);\n  if (id !== 7) throw new Error(\"المستخدم غير موجود\");\n  return { id, name: \"جود\" };\n};\nconst getOrders = async name => {\n  await wait(100);\n  return [\"طلب 1\", \"طلب 2\", \"طلب 3\"];\n};\n\nasync function showProfile(id) {\n  // أكمل هنا\n}\n\nshowProfile(7).then(() => showProfile(99));",
    "expected": "جود\nعدد الطلبات: 3\nخطأ: المستخدم غير موجود",
    "solution": "const wait = ms => new Promise(r => setTimeout(r, ms));\nconst getUser = async id => {\n  await wait(100);\n  if (id !== 7) throw new Error(\"المستخدم غير موجود\");\n  return { id, name: \"جود\" };\n};\nconst getOrders = async name => {\n  await wait(100);\n  return [\"طلب 1\", \"طلب 2\", \"طلب 3\"];\n};\n\nasync function showProfile(id) {\n  try {\n    const user = await getUser(id);\n    console.log(user.name);\n    const orders = await getOrders(user.name);\n    console.log(`عدد الطلبات: ${orders.length}`);\n  } catch (error) {\n    console.log(`خطأ: ${error.message}`);\n  }\n}\n\nshowProfile(7).then(() => showProfile(99));"
   },
   "quiz": [
    {
     "q": "ماذا تُرجع أي دالة معرّفة بـ <code dir=\"ltr\">async</code>؟",
     "o": [
      "القيمة كما هي",
      "وعداً (Promise) دائماً",
      "undefined"
     ],
     "a": 1,
     "why": "async تغلّف قيمة الإرجاع في وعد تلقائياً."
    },
    {
     "q": "أين يمكن استخدام <code dir=\"ltr\">await</code>؟",
     "o": [
      "في أي مكان في الكود",
      "داخل دالة <code dir=\"ltr\">async</code> (أو في المستوى الأعلى للوحدات modules)",
      "داخل الحلقات فقط"
     ],
     "a": 1,
     "why": "await تحتاج سياقاً غير متزامن."
    },
    {
     "q": "لديك ثلاث عمليات مستقلة كل منها تأخذ ثانية. ما أسرع طريقة لانتظارها؟",
     "o": [
      "ثلاث <code dir=\"ltr\">await</code> متتالية",
      "<code dir=\"ltr\">await Promise.all([...])</code>",
      "setTimeout لكل واحدة"
     ],
     "a": 1,
     "why": "Promise.all تشغلها بالتوازي، فتنتهي خلال ثانية واحدة بدلاً من ثلاث."
    }
   ]
  },
  {
   "body": "<h2>التحدث مع الخوادم</h2>\n<p>معظم التطبيقات الحديثة تجلب بياناتها من <strong>خادم</strong> عبر الإنترنت: المنتجات، والأخبار، والطقس، والتعليقات. الواجهة البرمجية التي يوفرها الخادم تسمى <strong>API</strong>، والدالة المدمجة في المتصفح للتواصل معها هي <code dir=\"ltr\">fetch</code>.</p>\n<h2>طلب GET: جلب البيانات</h2>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>async function loadUsers() {\n  const response = await fetch(&quot;https://jsonplaceholder.typicode.com/users&quot;);\n  const users = await response.json();\n  console.log(users.length);\n  console.log(users[0].name);\n}\nloadUsers();</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>10\nLeanne Graham</code></pre></div>\n<p>خطوتان دائماً، وكل منهما تحتاج <code dir=\"ltr\">await</code>:</p>\n<ol><li><code dir=\"ltr\">fetch(url)</code> ترسل الطلب وتُرجع وعداً بكائن <strong>Response</strong> (الاستجابة).</li><li><code dir=\"ltr\">response.json()</code> تقرأ جسم الاستجابة وتحوّله من JSON إلى كائن، وهي أيضاً غير متزامنة.</li></ol>\n<div class=\"callout tip\">💡 <code dir=\"ltr\">jsonplaceholder.typicode.com</code> خادم تجريبي مجاني ممتاز للتدرب. جرّب المثال في وحدة التحكم في متصفحك (F12). أما تمارين هذا الدرس فتستخدم <strong>خادماً محاكياً</strong> حتى تعمل دون إنترنت.</div>\n<h2>كائن Response</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>الخاصية</th><th>معناها</th></tr></thead><tbody><tr><td><code dir=\"ltr\">response.ok</code></td><td><code dir=\"ltr\">true</code> إذا كان رمز الحالة بين 200 و 299</td></tr><tr><td><code dir=\"ltr\">response.status</code></td><td>رمز الحالة: 200 نجاح، 404 غير موجود، 500 خطأ في الخادم</td></tr><tr><td><code dir=\"ltr\">response.json()</code></td><td>قراءة الجسم كـ JSON</td></tr><tr><td><code dir=\"ltr\">response.text()</code></td><td>قراءة الجسم كنص</td></tr></tbody></table></div>\n<h2>طلب POST: إرسال البيانات</h2>\n<p>لإنشاء شيء جديد على الخادم (تسجيل مستخدم، إضافة تعليق)، نمرر خيارات إضافية:</p>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>async function createPost() {\n  const response = await fetch(&quot;https://jsonplaceholder.typicode.com/posts&quot;, {\n    method: &quot;POST&quot;,\n    headers: { &quot;Content-Type&quot;: &quot;application/json&quot; },\n    body: JSON.stringify({ title: &quot;أول منشور&quot;, body: &quot;مرحباً&quot;, userId: 1 })\n  });\n  const created = await response.json();\n  console.log(created.id);\n}\ncreatePost();</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>101</code></pre></div>\n<ul><li><code dir=\"ltr\">method</code>: نوع الطلب.</li><li><code dir=\"ltr\">headers</code>: معلومات إضافية، وهنا نخبر الخادم أن الجسم بصيغة JSON.</li><li><code dir=\"ltr\">body</code>: البيانات المرسلة، ويجب تحويلها لنص بـ <code dir=\"ltr\">JSON.stringify</code>.</li></ul>\n<h2>أنواع الطلبات (HTTP Methods)</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>النوع</th><th>الاستخدام</th><th>مثال</th></tr></thead><tbody><tr><td><code dir=\"ltr\">GET</code></td><td>قراءة بيانات</td><td>عرض المنتجات</td></tr><tr><td><code dir=\"ltr\">POST</code></td><td>إنشاء جديد</td><td>تسجيل حساب</td></tr><tr><td><code dir=\"ltr\">PUT</code> و <code dir=\"ltr\">PATCH</code></td><td>تعديل موجود</td><td>تعديل الملف الشخصي</td></tr><tr><td><code dir=\"ltr\">DELETE</code></td><td>حذف</td><td>حذف تعليق</td></tr></tbody></table></div>\n<h2>عرض البيانات في الصفحة</h2>\n<p>هكذا يبدو النمط الكامل في مشروع حقيقي: نجلب البيانات، ثم نبني عناصر DOM منها:</p>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>async function showProducts() {\n  const list = document.querySelector(&quot;#products&quot;);\n  list.textContent = &quot;جاري التحميل...&quot;;\n\n  const response = await fetch(&quot;https://fakestoreapi.com/products?limit=5&quot;);\n  const products = await response.json();\n\n  list.textContent = &quot;&quot;;\n  for (const p of products) {\n    const li = document.createElement(&quot;li&quot;);\n    li.textContent = `${p.title} - $${p.price}`;\n    list.append(li);\n  }\n}</code></pre></div>\n<h2>ملخص الدرس</h2>\n<ul><li><code dir=\"ltr\">fetch(url)</code> ترسل طلباً وتُرجع وعداً بالاستجابة.</li><li><code dir=\"ltr\">await response.json()</code> لتحويل الجسم إلى كائن.</li><li><code dir=\"ltr\">response.ok</code> و <code dir=\"ltr\">response.status</code> لمعرفة نجاح الطلب.</li><li>لطلب POST نمرر <code dir=\"ltr\">method</code> و <code dir=\"ltr\">headers</code> و <code dir=\"ltr\">body</code> بصيغة JSON.</li></ul>",
   "exercise": {
    "prompt": "<p>في هذا التمرين <code dir=\"ltr\">fetch</code> <strong>محاكاة</strong> لخادم متجر (معرّفة في أعلى الكود، لا تعدّلها). اكتب دالة <code dir=\"ltr\">async</code> اسمها <code dir=\"ltr\">loadCatalog</code> تنفّذ:</p>\n<ol><li>تجلب <code dir=\"ltr\">/api/products</code> وتحوّل الاستجابة بـ <code dir=\"ltr\">json()</code>.</li><li>تطبع عدد المنتجات.</li><li>تطبع أسماء المنتجات المتوفرة (<code dir=\"ltr\">inStock</code> قيمتها true) مفصولة بـ <code dir=\"ltr\">، </code> باستخدام <code dir=\"ltr\">join</code>.</li><li>ترسل طلب <code dir=\"ltr\">POST</code> إلى <code dir=\"ltr\">/api/cart</code> بجسم JSON فيه <code dir=\"ltr\">{ productId: 2 }</code>، ثم تطبع الخاصية <code dir=\"ltr\">message</code> من الاستجابة.</li></ol>",
    "starter": "// --- خادم محاكي (لا تعدّل) ---\nglobalThis.fetch = (url, options = {}) => new Promise(resolve => setTimeout(() => {\n  const reply = data => ({ ok: true, status: 200, json: async () => data });\n  if (url === \"/api/products\") resolve(reply([\n    { id: 1, name: \"ساعة\", inStock: true },\n    { id: 2, name: \"نظارة\", inStock: true },\n    { id: 3, name: \"محفظة\", inStock: false }\n  ]));\n  else if (url === \"/api/cart\" && options.method === \"POST\")\n    resolve(reply({ message: `أضيف المنتج ${JSON.parse(options.body).productId} إلى السلة` }));\n  else resolve({ ok: false, status: 404, json: async () => ({}) });\n}, 100));\n// --------------------------------\n\nasync function loadCatalog() {\n  // أكمل هنا\n}\n\nloadCatalog();",
    "expected": "3\nساعة، نظارة\nأضيف المنتج 2 إلى السلة",
    "solution": "// --- خادم محاكي (لا تعدّل) ---\nglobalThis.fetch = (url, options = {}) => new Promise(resolve => setTimeout(() => {\n  const reply = data => ({ ok: true, status: 200, json: async () => data });\n  if (url === \"/api/products\") resolve(reply([\n    { id: 1, name: \"ساعة\", inStock: true },\n    { id: 2, name: \"نظارة\", inStock: true },\n    { id: 3, name: \"محفظة\", inStock: false }\n  ]));\n  else if (url === \"/api/cart\" && options.method === \"POST\")\n    resolve(reply({ message: `أضيف المنتج ${JSON.parse(options.body).productId} إلى السلة` }));\n  else resolve({ ok: false, status: 404, json: async () => ({}) });\n}, 100));\n// --------------------------------\n\nasync function loadCatalog() {\n  const response = await fetch(\"/api/products\");\n  const products = await response.json();\n  console.log(products.length);\n\n  const available = products.filter(p => p.inStock).map(p => p.name);\n  console.log(available.join(\"، \"));\n\n  const cartResponse = await fetch(\"/api/cart\", {\n    method: \"POST\",\n    headers: { \"Content-Type\": \"application/json\" },\n    body: JSON.stringify({ productId: 2 })\n  });\n  const result = await cartResponse.json();\n  console.log(result.message);\n}\n\nloadCatalog();"
   },
   "quiz": [
    {
     "q": "لماذا نكتب <code dir=\"ltr\">await</code> مرتين: مع <code dir=\"ltr\">fetch</code> ومع <code dir=\"ltr\">response.json()</code>؟",
     "o": [
      "لأن كلتيهما عمليتان غير متزامنتين تُرجعان وعداً",
      "لأن الأولى لا تعمل دون الثانية",
      "خطأ، await واحدة تكفي"
     ],
     "a": 0,
     "why": "fetch تنتظر وصول الاستجابة، و json() تنتظر قراءة الجسم وتحويله."
    },
    {
     "q": "أي نوع طلب نستخدم لإنشاء حساب جديد على الخادم؟",
     "o": [
      "GET",
      "POST",
      "DELETE"
     ],
     "a": 1,
     "why": "POST لإنشاء موارد جديدة، و GET للقراءة فقط."
    },
    {
     "q": "لماذا نستخدم <code dir=\"ltr\">JSON.stringify</code> مع <code dir=\"ltr\">body</code> في طلب POST؟",
     "o": [
      "لتشفير البيانات",
      "لأن جسم الطلب يجب أن يكون نصاً",
      "لتسريع الإرسال"
     ],
     "a": 1,
     "why": "fetch ترسل الجسم كنص، فنحوّل الكائن إلى JSON."
    }
   ]
  },
  {
   "body": "<h2>الشبكة لا تُعتمد عليها دائماً</h2>\n<p>الإنترنت ينقطع، والخوادم تتعطل، والروابط تتغير. التطبيق الاحترافي <strong>يتوقع الفشل</strong> ويتعامل معه بلطف، بدلاً من أن يتجمد أو يعرض شاشة فارغة.</p>\n<h2>نوعان من الفشل</h2>\n<p>هذه نقطة يخطئ فيها كثير من المطورين:</p>\n<div class=\"table-wrap\"><table><thead><tr><th>الحالة</th><th>ماذا تفعل <code dir=\"ltr\">fetch</code></th></tr></thead><tbody><tr><td>انقطاع الإنترنت أو الخادم لا يرد</td><td><strong>ترفض</strong> الوعد، فينتقل التنفيذ إلى <code dir=\"ltr\">catch</code></td></tr><tr><td>الخادم رد بخطأ (404 أو 500)</td><td><strong>لا ترفض!</strong> يتحقق الوعد عادياً لكن <code dir=\"ltr\">response.ok</code> تكون <code dir=\"ltr\">false</code></td></tr></tbody></table></div>\n<div class=\"callout warn\">⚠️ <code dir=\"ltr\">fetch</code> لا تعتبر رمز 404 أو 500 خطأ، لأن الخادم ردّ فعلاً. يجب أن تفحص <code dir=\"ltr\">response.ok</code> بنفسك.</div>\n<h2>النمط الصحيح</h2>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>// خادم محاكي للتجربة\nconst fetch = url =&gt; new Promise((resolve, reject) =&gt; setTimeout(() =&gt; {\n  if (url === &quot;/offline&quot;) reject(new TypeError(&quot;Failed to fetch&quot;));\n  else if (url === &quot;/missing&quot;) resolve({ ok: false, status: 404 });\n  else resolve({ ok: true, status: 200, json: async () =&gt; ({ name: &quot;بيانات&quot; }) });\n}, 50));\n\nasync function getData(url) {\n  try {\n    const response = await fetch(url);\n    if (!response.ok) {\n      throw new Error(`خطأ من الخادم: ${response.status}`);\n    }\n    const data = await response.json();\n    console.log(`نجاح: ${data.name}`);\n  } catch (error) {\n    console.log(`تعذر التحميل (${error.message})`);\n  }\n}\n\ngetData(&quot;/ok&quot;)\n  .then(() =&gt; getData(&quot;/missing&quot;))\n  .then(() =&gt; getData(&quot;/offline&quot;));</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>نجاح: بيانات\nتعذر التحميل (خطأ من الخادم: 404)\nتعذر التحميل (Failed to fetch)</code></pre></div>\n<p>نرمي خطأ بأنفسنا بـ <code dir=\"ltr\">throw</code> عندما يكون <code dir=\"ltr\">response.ok</code> خاطئاً، فيصل إلى نفس <code dir=\"ltr\">catch</code> التي تعالج انقطاع الشبكة. هكذا نتعامل مع كل أنواع الفشل في مكان واحد.</p>\n<h2>إعادة المحاولة</h2>\n<p>بعض الأخطاء مؤقتة. يمكننا إعادة المحاولة عدة مرات قبل الاستسلام:</p>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>let calls = 0;\nconst unstableServer = () =&gt; new Promise((resolve, reject) =&gt; {\n  calls++;\n  setTimeout(() =&gt; (calls &lt; 3 ? reject(new Error(&quot;timeout&quot;)) : resolve(&quot;البيانات&quot;)), 50);\n});\n\nasync function withRetry(fn, attempts = 3) {\n  for (let i = 1; i &lt;= attempts; i++) {\n    try {\n      return await fn();\n    } catch (error) {\n      console.log(`المحاولة ${i} فشلت`);\n      if (i === attempts) throw error;\n    }\n  }\n}\n\nwithRetry(unstableServer).then(data =&gt; console.log(`نجحت: ${data}`));</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>المحاولة 1 فشلت\nالمحاولة 2 فشلت\nنجحت: البيانات</code></pre></div>\n<h2>تجربة المستخدم أثناء التحميل والخطأ</h2>\n<p>التعامل مع الأخطاء ليس تقنياً فقط، بل هو تجربة مستخدم:</p>\n<ul><li><strong>أثناء التحميل:</strong> اعرض مؤشراً مثل &quot;جاري التحميل...&quot; وعطّل زر الإرسال حتى لا يُضغط مرتين.</li><li><strong>عند الخطأ:</strong> رسالة واضحة بلغة المستخدم، وليس <code dir=\"ltr\">TypeError: Failed to fetch</code>، مع زر &quot;إعادة المحاولة&quot;.</li><li><strong>عند النجاح بلا بيانات:</strong> رسالة مثل &quot;لا توجد منتجات بعد&quot; بدلاً من صفحة فارغة.</li></ul>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>async function loadComments() {\n  const status = document.querySelector(&quot;#status&quot;);\n  const button = document.querySelector(&quot;#reload&quot;);\n  status.textContent = &quot;جاري التحميل...&quot;;\n  button.disabled = true;\n  try {\n    const response = await fetch(&quot;/api/comments&quot;);\n    if (!response.ok) throw new Error(response.status);\n    const comments = await response.json();\n    status.textContent = comments.length ? &quot;&quot; : &quot;لا توجد تعليقات بعد&quot;;\n    // ... عرض التعليقات\n  } catch {\n    status.textContent = &quot;تعذر تحميل التعليقات. تحقق من اتصالك وحاول مجدداً.&quot;;\n  } finally {\n    button.disabled = false;\n  }\n}</code></pre></div>\n<h2>إلغاء الطلبات البطيئة</h2>\n<p>بـ <code dir=\"ltr\">AbortController</code> يمكنك إلغاء طلب أخذ وقتاً أطول من اللازم:</p>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>const controller = new AbortController();\nsetTimeout(() =&gt; controller.abort(), 5000);\nconst response = await fetch(url, { signal: controller.signal });</code></pre></div>\n<h2>ملخص الدرس</h2>\n<ul><li><code dir=\"ltr\">fetch</code> ترفض عند فشل الشبكة فقط، أما 404 و 500 فيجب فحصها بـ <code dir=\"ltr\">response.ok</code>.</li><li>ارمِ خطأ بـ <code dir=\"ltr\">throw</code> عند <code dir=\"ltr\">!response.ok</code> لتعالج كل الأخطاء في <code dir=\"ltr\">catch</code> واحدة.</li><li>أعد المحاولة للأخطاء المؤقتة.</li><li>اهتم بتجربة المستخدم: مؤشر تحميل، ورسائل واضحة، و <code dir=\"ltr\">finally</code> لإعادة الواجهة لحالتها.</li></ul>",
   "exercise": {
    "prompt": "<p>اكتب دالة <code dir=\"ltr\">async</code> اسمها <code dir=\"ltr\">getWeather(city)</code> تستخدم الخادم المحاكي:</p>\n<ul><li>إذا نجح الطلب، تطبع <code dir=\"ltr\">الطقس في X: N°</code>.</li><li>إذا رد الخادم بـ <code dir=\"ltr\">ok: false</code>، تطبع <code dir=\"ltr\">المدينة غير موجودة (404)</code> مستخدمة <code dir=\"ltr\">status</code> من الاستجابة.</li><li>إذا فشل الاتصال كلياً، تطبع <code dir=\"ltr\">لا يوجد اتصال بالإنترنت</code>.</li></ul>\n<p>تلميح: فرّق بين الحالتين الأخيرتين برمي خطأ بنفسك وفحص <code dir=\"ltr\">error.message</code>، أو بمعالجة <code dir=\"ltr\">!response.ok</code> قبل <code dir=\"ltr\">catch</code>.</p>",
    "starter": "// --- خادم محاكي (لا تعدّل) ---\nconst weatherApi = city => new Promise((resolve, reject) => setTimeout(() => {\n  const data = { \"الرياض\": 38, \"أبها\": 22 };\n  if (city === \"offline\") return reject(new TypeError(\"Failed to fetch\"));\n  if (city in data) resolve({ ok: true, status: 200, json: async () => ({ temp: data[city] }) });\n  else resolve({ ok: false, status: 404, json: async () => ({}) });\n}, 50));\n// --------------------------------\n\nasync function getWeather(city) {\n  // استخدم: const response = await weatherApi(city);\n}\n\ngetWeather(\"الرياض\")\n  .then(() => getWeather(\"لندن\"))\n  .then(() => getWeather(\"offline\"));",
    "expected": "الطقس في الرياض: 38°\nالمدينة غير موجودة (404)\nلا يوجد اتصال بالإنترنت",
    "solution": "// --- خادم محاكي (لا تعدّل) ---\nconst weatherApi = city => new Promise((resolve, reject) => setTimeout(() => {\n  const data = { \"الرياض\": 38, \"أبها\": 22 };\n  if (city === \"offline\") return reject(new TypeError(\"Failed to fetch\"));\n  if (city in data) resolve({ ok: true, status: 200, json: async () => ({ temp: data[city] }) });\n  else resolve({ ok: false, status: 404, json: async () => ({}) });\n}, 50));\n// --------------------------------\n\nasync function getWeather(city) {\n  try {\n    const response = await weatherApi(city);\n    if (!response.ok) {\n      console.log(`المدينة غير موجودة (${response.status})`);\n      return;\n    }\n    const data = await response.json();\n    console.log(`الطقس في ${city}: ${data.temp}°`);\n  } catch (error) {\n    console.log(\"لا يوجد اتصال بالإنترنت\");\n  }\n}\n\ngetWeather(\"الرياض\")\n  .then(() => getWeather(\"لندن\"))\n  .then(() => getWeather(\"offline\"));"
   },
   "quiz": [
    {
     "q": "ماذا تفعل <code dir=\"ltr\">fetch</code> عندما يرد الخادم برمز 404؟",
     "o": [
      "ترفض الوعد وتنتقل إلى catch",
      "يتحقق الوعد عادياً لكن <code dir=\"ltr\">response.ok</code> تكون false",
      "تعيد المحاولة تلقائياً"
     ],
     "a": 1,
     "why": "fetch لا ترفض إلا عند فشل الاتصال نفسه."
    },
    {
     "q": "أين نضع الكود الذي يعيد تفعيل زر الإرسال سواء نجح الطلب أو فشل؟",
     "o": [
      "في try",
      "في catch",
      "في finally"
     ],
     "a": 2,
     "why": "finally تُنفَّذ في كل الحالات."
    },
    {
     "q": "أي رسالة خطأ أفضل للمستخدم العادي؟",
     "o": [
      "<code dir=\"ltr\">TypeError: Failed to fetch</code>",
      "<code dir=\"ltr\">تعذر تحميل البيانات. تحقق من اتصالك وحاول مجدداً.</code>",
      "<code dir=\"ltr\">Error 500</code>"
     ],
     "a": 1,
     "why": "الرسالة الجيدة واضحة بلغة المستخدم وتخبره بما يمكنه فعله."
    }
   ]
  }
 ],
 [
  {
   "body": "<h2>استخراج القيم بسطر واحد</h2>\n<p><strong>التفكيك (Destructuring)</strong> صيغة تتيح لك استخراج قيم من مصفوفة أو كائن وتخزينها في متغيرات مباشرة. ستراها في كل كود حديث، خاصة في React.</p>\n<h2>تفكيك الكائنات</h2>\n<p>بدلاً من:</p>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>const user = { name: &quot;ياسر&quot;, age: 27, city: &quot;الدمام&quot; };\nconst name1 = user.name;\nconst age1 = user.age;\nconsole.log(name1, age1);</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>ياسر 27</code></pre></div>\n<p>نكتب:</p>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>const user = { name: &quot;ياسر&quot;, age: 27, city: &quot;الدمام&quot; };\nconst { name, age } = user;\nconsole.log(name, age);</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>ياسر 27</code></pre></div>\n<p>أسماء المتغيرات بين <code dir=\"ltr\">{ }</code> يجب أن تطابق أسماء الخصائص، والترتيب لا يهم.</p>\n<h3>إعادة التسمية والقيم الافتراضية</h3>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>const product = { title: &quot;حقيبة&quot;, price: 120 };\n\nconst { title: productName, price, discount = 0 } = product;\nconsole.log(productName, price, discount);</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>حقيبة 120 0</code></pre></div>\n<ul><li><code dir=\"ltr\">title: productName</code> يعني: خذ الخاصية <code dir=\"ltr\">title</code> وخزّنها في متغير اسمه <code dir=\"ltr\">productName</code>.</li><li><code dir=\"ltr\">discount = 0</code> قيمة افتراضية إذا لم تكن الخاصية موجودة.</li></ul>\n<h3>التفكيك المتداخل</h3>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>const order = { id: 5, customer: { name: &quot;رنا&quot;, address: { city: &quot;مكة&quot; } } };\nconst { customer: { name, address: { city } } } = order;\nconsole.log(name, city);</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>رنا مكة</code></pre></div>\n<h2>تفكيك المصفوفات</h2>\n<p>هنا يعتمد التفكيك على <strong>الترتيب</strong> وليس الأسماء:</p>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>const rgb = [255, 128, 0];\nconst [red, green, blue] = rgb;\nconsole.log(red, green, blue);\n\nconst [first, , third] = [&quot;أ&quot;, &quot;ب&quot;, &quot;ج&quot;];\nconsole.log(first, third);</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>255 128 0\nأ ج</code></pre></div>\n<p>الفاصلة الفارغة تتخطى عنصراً.</p>\n<h3>حيلة: تبديل متغيرين</h3>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>let a = 1;\nlet b = 2;\n[a, b] = [b, a];\nconsole.log(a, b);</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>2 1</code></pre></div>\n<h2>التفكيك في معاملات الدوال</h2>\n<p>هذا هو الاستخدام الأكثر شيوعاً على الإطلاق:</p>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>function createCard({ name, role = &quot;عضو&quot;, skills }) {\n  return `${name} (${role}) - ${skills.length} مهارات`;\n}\n\nconsole.log(createCard({ name: &quot;دانة&quot;, skills: [&quot;JS&quot;, &quot;CSS&quot;] }));\nconsole.log(createCard({ name: &quot;فارس&quot;, role: &quot;مدير&quot;, skills: [&quot;قيادة&quot;] }));</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>دانة (عضو) - 2 مهارات\nفارس (مدير) - 1 مهارات</code></pre></div>\n<p>مزايا تمرير كائن بدلاً من معاملات متعددة: الترتيب لا يهم، والخيارات الاختيارية واضحة، ومن يقرأ الاستدعاء يعرف معنى كل قيمة.</p>\n<h2>مع الحلقات</h2>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>const scores = { &quot;علي&quot;: 90, &quot;منى&quot;: 85 };\nfor (const [student, score] of Object.entries(scores)) {\n  console.log(`${student}: ${score}`);\n}\n\nconst users = [{ id: 1, name: &quot;هيا&quot; }, { id: 2, name: &quot;بدر&quot; }];\nconsole.log(users.map(({ name }) =&gt; name));</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>علي: 90\nمنى: 85\n[&quot;هيا&quot;,&quot;بدر&quot;]</code></pre></div>\n<h2>ملخص الدرس</h2>\n<ul><li>تفكيك الكائن <code dir=\"ltr\">const { a, b } = obj</code> يعتمد على الأسماء.</li><li>تفكيك المصفوفة <code dir=\"ltr\">const [x, y] = arr</code> يعتمد على الترتيب.</li><li>يمكن إعادة التسمية <code dir=\"ltr\">{ a: newName }</code> ووضع قيم افتراضية <code dir=\"ltr\">{ a = 5 }</code>.</li><li>التفكيك في معاملات الدوال يجعلها أوضح وأكثر مرونة.</li></ul>",
   "exercise": {
    "prompt": "<p>أكمل الكود باستخدام التفكيك فقط (بدون <code dir=\"ltr\">obj.prop</code>):</p>\n<ol><li>استخرج <code dir=\"ltr\">title</code> و <code dir=\"ltr\">year</code> من الكائن <code dir=\"ltr\">movie</code>، واستخرج <code dir=\"ltr\">director</code> باسم جديد <code dir=\"ltr\">directorName</code>، واطبع الثلاثة في سطر واحد.</li><li>استخرج أول تقييمين من المصفوفة <code dir=\"ltr\">movie.ratings</code> في متغيرين <code dir=\"ltr\">best</code> و <code dir=\"ltr\">second</code> واطبعهما.</li><li>أكمل الدالة <code dir=\"ltr\">describe</code> لتستقبل كائناً وتفككه في المعاملات، مع قيمة افتراضية <code dir=\"ltr\">&quot;غير مصنف&quot;</code> للخاصية <code dir=\"ltr\">genre</code>.</li></ol>",
    "starter": "const movie = { title: \"الرحلة\", year: 2021, director: \"سعد\", ratings: [9, 8, 7] };\n\n// 1)\n\n// 2)\n\n// 3)\nfunction describe(/* فكّك هنا */) {\n  return `${title} - ${genre}`;\n}\nconsole.log(describe({ title: \"المدينة\", genre: \"دراما\" }));\nconsole.log(describe({ title: \"البحر\" }));",
    "expected": "الرحلة 2021 سعد\n9 8\nالمدينة - دراما\nالبحر - غير مصنف",
    "solution": "const movie = { title: \"الرحلة\", year: 2021, director: \"سعد\", ratings: [9, 8, 7] };\n\nconst { title, year, director: directorName } = movie;\nconsole.log(title, year, directorName);\n\nconst [best, second] = movie.ratings;\nconsole.log(best, second);\n\nfunction describe({ title, genre = \"غير مصنف\" }) {\n  return `${title} - ${genre}`;\n}\nconsole.log(describe({ title: \"المدينة\", genre: \"دراما\" }));\nconsole.log(describe({ title: \"البحر\" }));"
   },
   "quiz": [
    {
     "q": "ما قيمة <code dir=\"ltr\">x</code> بعد <code dir=\"ltr\">const { x = 10 } = { y: 5 };</code>؟",
     "o": [
      "<code dir=\"ltr\">5</code>",
      "<code dir=\"ltr\">10</code>",
      "<code dir=\"ltr\">undefined</code>"
     ],
     "a": 1,
     "why": "الخاصية <code dir=\"ltr\">x</code> غير موجودة، فتُستخدم القيمة الافتراضية."
    },
    {
     "q": "على ماذا يعتمد تفكيك المصفوفات؟",
     "o": [
      "ترتيب العناصر",
      "أسماء العناصر",
      "أنواع العناصر"
     ],
     "a": 0,
     "why": "المتغير الأول يأخذ العنصر الأول، والثاني يأخذ الثاني، وهكذا."
    },
    {
     "q": "ماذا يعني <code dir=\"ltr\">const { name: fullName } = user;</code>؟",
     "o": [
      "ينشئ متغيرين: name و fullName",
      "يأخذ الخاصية name ويخزّنها في متغير اسمه fullName",
      "يغيّر اسم الخاصية داخل user"
     ],
     "a": 1,
     "why": "هذه صيغة إعادة التسمية أثناء التفكيك."
    }
   ]
  },
  {
   "body": "<h2>ثلاث نقاط بوظيفتين</h2>\n<p>العلامة <code dir=\"ltr\">...</code> لها وظيفتان متعاكستان حسب مكانها:</p>\n<ul><li><strong>الانتشار (Spread):</strong> تفرد عناصر المصفوفة أو خصائص الكائن.</li><li><strong>التجميع (Rest):</strong> تجمع عدة عناصر في مصفوفة أو كائن واحد.</li></ul>\n<h2>Spread مع المصفوفات</h2>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>const fruits = [&quot;تفاح&quot;, &quot;موز&quot;];\nconst veggies = [&quot;جزر&quot;, &quot;خس&quot;];\n\nconst all = [...fruits, ...veggies, &quot;ليمون&quot;];\nconsole.log(all);\n\nconst copy = [...fruits];\ncopy.push(&quot;عنب&quot;);\nconsole.log(fruits.length, copy.length);\n\nconsole.log(Math.max(...[4, 18, 7]));</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>[&quot;تفاح&quot;,&quot;موز&quot;,&quot;جزر&quot;,&quot;خس&quot;,&quot;ليمون&quot;]\n2 3\n18</code></pre></div>\n<ul><li>دمج المصفوفات بسهولة.</li><li>إنشاء <strong>نسخة</strong> مستقلة، فتعديل <code dir=\"ltr\">copy</code> لا يغيّر <code dir=\"ltr\">fruits</code>.</li><li>تمرير عناصر مصفوفة كوسائط منفصلة لدالة.</li></ul>\n<h2>Spread مع الكائنات</h2>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>const defaults = { theme: &quot;light&quot;, fontSize: 14, lang: &quot;ar&quot; };\nconst userSettings = { fontSize: 18 };\n\nconst settings = { ...defaults, ...userSettings };\nconsole.log(settings);</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>{&quot;theme&quot;:&quot;light&quot;,&quot;fontSize&quot;:18,&quot;lang&quot;:&quot;ar&quot;}</code></pre></div>\n<p>عند تكرار خاصية، <strong>الأخيرة تفوز</strong>. وهذا نمط شائع لدمج الإعدادات الافتراضية مع إعدادات المستخدم.</p>\n<h2>التحديث دون تعديل الأصل</h2>\n<p>في React والتطبيقات الحديثة نفضّل <strong>عدم تعديل</strong> البيانات الأصلية، بل إنشاء نسخة جديدة معدّلة:</p>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>const user = { name: &quot;لمى&quot;, age: 24, city: &quot;جدة&quot; };\nconst updated = { ...user, age: 25 };\n\nconsole.log(user.age, updated.age);\n\nconst todos = [&quot;أ&quot;, &quot;ب&quot;];\nconst withNew = [...todos, &quot;ج&quot;];\nconst withoutFirst = todos.filter((_, i) =&gt; i !== 0);\nconsole.log(todos, withNew, withoutFirst);</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>24 25\n[&quot;أ&quot;,&quot;ب&quot;] [&quot;أ&quot;,&quot;ب&quot;,&quot;ج&quot;] [&quot;ب&quot;]</code></pre></div>\n<h2>تذكير: النسخ بالمرجع</h2>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>const original = { tags: [&quot;js&quot;] };\n\nconst sameRef = original;\nsameRef.tags = [&quot;css&quot;];\nconsole.log(original.tags);\n\nconst shallow = { ...original };\nshallow.tags.push(&quot;html&quot;);\nconsole.log(original.tags);\n\nconst deep = structuredClone(original);\ndeep.tags.push(&quot;node&quot;);\nconsole.log(original.tags.length, deep.tags.length);</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>[&quot;css&quot;]\n[&quot;css&quot;,&quot;html&quot;]\n2 3</code></pre></div>\n<div class=\"callout warn\">⚠️ <code dir=\"ltr\">...</code> تنشئ <strong>نسخة سطحية</strong>: المستوى الأول جديد، لكن الكائنات والمصفوفات المتداخلة ما زالت مشتركة. للنسخ العميق استخدم <code dir=\"ltr\">structuredClone</code>.</div>\n<h2>Rest في الدوال: عدد غير محدود من الوسائط</h2>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>function sum(...numbers) {\n  return numbers.reduce((total, n) =&gt; total + n, 0);\n}\n\nconsole.log(sum(1, 2));\nconsole.log(sum(5, 10, 15, 20));\n\nfunction log(level, ...messages) {\n  console.log(`[${level}] ${messages.join(&quot; | &quot;)}`);\n}\nlog(&quot;خطأ&quot;, &quot;فشل الاتصال&quot;, &quot;إعادة المحاولة&quot;);</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>3\n50\n[خطأ] فشل الاتصال | إعادة المحاولة</code></pre></div>\n<p>معامل الـ rest يجب أن يكون <strong>الأخير</strong> دائماً.</p>\n<h2>Rest مع التفكيك</h2>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>const [winner, ...others] = [&quot;سلمى&quot;, &quot;حمد&quot;, &quot;ريان&quot;];\nconsole.log(winner, others);\n\nconst { password, ...publicData } = { id: 1, name: &quot;زيد&quot;, password: &quot;123&quot; };\nconsole.log(publicData);</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>سلمى [&quot;حمد&quot;,&quot;ريان&quot;]\n{&quot;id&quot;:1,&quot;name&quot;:&quot;زيد&quot;}</code></pre></div>\n<p>المثال الثاني نمط مفيد جداً: إزالة خاصية حساسة قبل إرسال البيانات.</p>\n<h2>ملخص الدرس</h2>\n<ul><li><code dir=\"ltr\">...</code> في مكان <strong>القيم</strong> = انتشار: تفرد العناصر (دمج، نسخ، تمرير).</li><li><code dir=\"ltr\">...</code> في مكان <strong>المتغيرات أو المعاملات</strong> = تجميع: تجمع الباقي.</li><li><code dir=\"ltr\">{ ...obj, key: newValue }</code> لتحديث كائن دون تعديل الأصل.</li><li>النسخ بـ <code dir=\"ltr\">...</code> سطحي، و <code dir=\"ltr\">structuredClone</code> للنسخ العميق.</li></ul>",
   "exercise": {
    "prompt": "<ol><li>اكتب دالة <code dir=\"ltr\">average(...nums)</code> تُرجع متوسط أي عدد من الأرقام.</li><li>ادمج <code dir=\"ltr\">baseConfig</code> مع <code dir=\"ltr\">override</code> في كائن جديد <code dir=\"ltr\">config</code> بحيث تفوز قيم <code dir=\"ltr\">override</code>، واطبعه.</li><li>من الكائن <code dir=\"ltr\">account</code> أنشئ <code dir=\"ltr\">safeAccount</code> يحتوي كل الخصائص <strong>ما عدا</strong> <code dir=\"ltr\">pin</code> باستخدام rest، واطبعه.</li><li>تأكد أن <code dir=\"ltr\">baseConfig</code> لم يتغير: اطبع <code dir=\"ltr\">baseConfig.debug</code>.</li></ol>",
    "starter": "const baseConfig = { debug: false, retries: 3, lang: \"ar\" };\nconst override = { debug: true, retries: 5 };\nconst account = { id: 7, owner: \"مشاري\", pin: \"9876\", balance: 500 };\n\nfunction average(/* ... */) {\n  // أكمل\n}\n\nconsole.log(average(10, 20, 30));\nconsole.log(average(5, 7));\n// أكمل 2 و 3 و 4",
    "expected": "20\n6\n{\"debug\":true,\"retries\":5,\"lang\":\"ar\"}\n{\"id\":7,\"owner\":\"مشاري\",\"balance\":500}\nfalse",
    "solution": "const baseConfig = { debug: false, retries: 3, lang: \"ar\" };\nconst override = { debug: true, retries: 5 };\nconst account = { id: 7, owner: \"مشاري\", pin: \"9876\", balance: 500 };\n\nfunction average(...nums) {\n  return nums.reduce((sum, n) => sum + n, 0) / nums.length;\n}\n\nconsole.log(average(10, 20, 30));\nconsole.log(average(5, 7));\n\nconst config = { ...baseConfig, ...override };\nconsole.log(config);\n\nconst { pin, ...safeAccount } = account;\nconsole.log(safeAccount);\n\nconsole.log(baseConfig.debug);"
   },
   "quiz": [
    {
     "q": "ما ناتج <code dir=\"ltr\">[...[1, 2], ...[3]]</code>؟",
     "o": [
      "<code dir=\"ltr\">[1, 2, 3]</code>",
      "<code dir=\"ltr\">[[1, 2], [3]]</code>",
      "<code dir=\"ltr\">[1, 2, [3]]</code>"
     ],
     "a": 0,
     "why": "الانتشار يفرد عناصر كل مصفوفة داخل المصفوفة الجديدة."
    },
    {
     "q": "في <code dir=\"ltr\">{ ...a, ...b }</code> إذا كانت الخاصية <code dir=\"ltr\">x</code> موجودة في الاثنين، أي قيمة تبقى؟",
     "o": [
      "قيمة a",
      "قيمة b",
      "خطأ"
     ],
     "a": 1,
     "why": "الخاصية الأخيرة تفوز."
    },
    {
     "q": "أين يجب أن يكون معامل الـ rest في الدالة؟",
     "o": [
      "الأول",
      "الأخير",
      "في أي مكان"
     ],
     "a": 1,
     "why": "rest يجمع &quot;الباقي&quot;، لذلك يجب أن يأتي في النهاية."
    }
   ]
  },
  {
   "body": "<h2>تقسيم المشروع إلى ملفات</h2>\n<p>المشاريع الحقيقية فيها آلاف الأسطر. وضعها في ملف واحد كارثة. <strong>الوحدات (Modules)</strong> تتيح تقسيم الكود إلى ملفات صغيرة، كل ملف مسؤول عن شيء واحد، ويختار ما يشاركه مع الملفات الأخرى.</p>\n<h2>export: ما يشاركه الملف</h2>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>// ملف math.js\nexport const PI = 3.14159;\n\nexport function circleArea(r) {\n  return PI * r * r;\n}\n\nfunction secretHelper() {\n  // غير مُصدَّرة، فلا يراها أي ملف آخر\n}</code></pre></div>\n<h2>import: استخدام ما شاركه ملف آخر</h2>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>// ملف app.js\nimport { PI, circleArea } from &quot;./math.js&quot;;\n\nconsole.log(circleArea(2));</code></pre></div>\n<ul><li><code dir=\"ltr\">export</code> قبل التعريف يجعله متاحاً للخارج.</li><li><code dir=\"ltr\">import { ... } from &quot;مسار&quot;</code> يستورد بالاسم، وصيغتها تشبه التفكيك.</li><li>كل ما لم يُصدَّر يبقى <strong>خاصاً</strong> بالملف.</li></ul>\n<h2>التصدير الافتراضي (default)</h2>\n<p>كل ملف يمكن أن يكون له تصدير <strong>افتراضي واحد</strong>، عادة الشيء الرئيسي فيه:</p>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>// ملف User.js\nexport default class User {\n  constructor(name) { this.name = name; }\n}\n\n// ملف app.js\nimport User from &quot;./User.js&quot;;       // بدون { }، وبأي اسم تختاره\nimport { PI as pi } from &quot;./math.js&quot;; // إعادة تسمية الاستيراد المسمى\nimport * as math from &quot;./math.js&quot;;    // استيراد كل شيء في كائن واحد</code></pre></div>\n<div class=\"table-wrap\"><table><thead><tr><th>النوع</th><th>التصدير</th><th>الاستيراد</th></tr></thead><tbody><tr><td>مسمّى</td><td><code dir=\"ltr\">export const x</code></td><td><code dir=\"ltr\">import { x } from</code></td></tr><tr><td>افتراضي</td><td><code dir=\"ltr\">export default ...</code></td><td><code dir=\"ltr\">import anyName from</code></td></tr></tbody></table></div>\n<h2>استخدام الوحدات في المتصفح</h2>\n<p>نضيف <code dir=\"ltr\">type=&quot;module&quot;</code> لوسم script:</p>\n<div class=\"code-block src\"><span class=\"code-label\">HTML</span><pre dir=\"ltr\"><code>&lt;script type=&quot;module&quot; src=&quot;app.js&quot;&gt;&lt;/script&gt;</code></pre></div>\n<p>مزايا هذا النوع: يعمل تلقائياً بعد تحميل الصفحة مثل <code dir=\"ltr\">defer</code>، ويعمل بالوضع الصارم، ومتغيراته لا تتسرب للنطاق العام.</p>\n<div class=\"callout warn\">⚠️ الوحدات لا تعمل عند فتح الملف مباشرة بـ <code dir=\"ltr\">file://</code> بسبب قيود الأمان. تحتاج خادماً محلياً مثل إضافة Live Server في VS Code، أو أداة مثل Vite.</div>\n<h2>مكتبات npm</h2>\n<p>نفس الصيغة تستخدم لاستيراد المكتبات المثبتة بـ npm:</p>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>import { format } from &quot;date-fns&quot;;\nimport React, { useState } from &quot;react&quot;;</code></pre></div>\n<h2>قبل الوحدات: نمط الوحدة (Module Pattern)</h2>\n<p>قبل وجود <code dir=\"ltr\">import</code> و <code dir=\"ltr\">export</code>، كان المطورون يحققون نفس الفكرة بالإغلاق (Closures) الذي تعلمناه: دالة تُستدعى فوراً، تخفي ما بداخلها، وتُرجع فقط ما تريد مشاركته:</p>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>const counterModule = (() =&gt; {\n  let count = 0;\n  const log = msg =&gt; `[عدّاد] ${msg}`;\n\n  return {\n    increment() { count++; return log(count); },\n    reset() { count = 0; return log(&quot;تم التصفير&quot;); }\n  };\n})();\n\nconsole.log(counterModule.increment());\nconsole.log(counterModule.increment());\nconsole.log(counterModule.reset());\nconsole.log(typeof count, typeof counterModule.log);</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>[عدّاد] 1\n[عدّاد] 2\n[عدّاد] تم التصفير\nundefined undefined</code></pre></div>\n<p><code dir=\"ltr\">count</code> و <code dir=\"ltr\">log</code> خاصّان تماماً، كما في الوحدة التي لم تُصدّرهما. ستقابل هذا النمط في الأكواد القديمة، وفهمه يعمّق فهمك للإغلاق والوحدات معاً.</p>\n<h2>ملخص الدرس</h2>\n<ul><li>الوحدات تقسّم المشروع إلى ملفات، وكل ملف يختار ما يُصدّره.</li><li><code dir=\"ltr\">export</code> و <code dir=\"ltr\">import { x }</code> للتصدير المسمّى، و <code dir=\"ltr\">export default</code> لتصدير رئيسي واحد.</li><li>في المتصفح: <code dir=\"ltr\">&lt;script type=&quot;module&quot;&gt;</code> وتحتاج خادماً محلياً.</li><li>نمط الوحدة القديم يعتمد على الإغلاق لإخفاء التفاصيل.</li></ul>",
   "exercise": {
    "prompt": "<p>بما أن محرر التمارين ملف واحد، سنطبّق فكرة الوحدات بـ <strong>نمط الوحدة</strong>.</p>\n<p>أنشئ <code dir=\"ltr\">cartModule</code> كدالة تُستدعى فوراً، فيها مصفوفة خاصة <code dir=\"ltr\">items</code>، وتُرجع ثلاث دوال فقط:</p>\n<ul><li><code dir=\"ltr\">add(name, price)</code> تضيف منتجاً <code dir=\"ltr\">{ name, price }</code>.</li><li><code dir=\"ltr\">total()</code> تُرجع مجموع الأسعار.</li><li><code dir=\"ltr\">count()</code> تُرجع عدد المنتجات.</li></ul>\n<p>ثم &quot;استورد&quot; الدوال بالتفكيك كما في <code dir=\"ltr\">import</code>، واستخدمها. الكود في الأسفل جاهز.</p>",
    "starter": "const cartModule = (() => {\n  // مصفوفة خاصة + الدوال\n})();\n\n// \"استيراد\" بالتفكيك:\nconst { add, total, count } = cartModule;\n\nadd(\"كتاب\", 45);\nadd(\"قلم\", 5);\nconsole.log(count());\nconsole.log(total());\nconsole.log(cartModule.items);",
    "expected": "2\n50\nundefined",
    "solution": "const cartModule = (() => {\n  const items = [];\n  return {\n    add(name, price) {\n      items.push({ name, price });\n    },\n    total() {\n      return items.reduce((sum, item) => sum + item.price, 0);\n    },\n    count() {\n      return items.length;\n    }\n  };\n})();\n\n// \"استيراد\" بالتفكيك:\nconst { add, total, count } = cartModule;\n\nadd(\"كتاب\", 45);\nadd(\"قلم\", 5);\nconsole.log(count());\nconsole.log(total());\nconsole.log(cartModule.items);"
   },
   "quiz": [
    {
     "q": "كيف نستورد دالة صُدّرت بـ <code dir=\"ltr\">export function save()</code> من الملف <code dir=\"ltr\">db.js</code>؟",
     "o": [
      "<code dir=\"ltr\">import { save } from &quot;./db.js&quot;;</code>",
      "<code dir=\"ltr\">import save from &quot;./db.js&quot;;</code>",
      "<code dir=\"ltr\">require save from db</code>"
     ],
     "a": 0,
     "why": "التصدير المسمّى يُستورد بين أقواس معقوفة وبنفس الاسم."
    },
    {
     "q": "كم تصديراً افتراضياً (default) يمكن أن يحتوي ملف واحد؟",
     "o": [
      "واحد فقط",
      "اثنان",
      "بلا حد"
     ],
     "a": 0,
     "why": "كل ملف له تصدير افتراضي واحد كحد أقصى، وما شاء من التصديرات المسمّاة."
    },
    {
     "q": "ما الذي يجب إضافته لوسم script لاستخدام import و export في المتصفح؟",
     "o": [
      "<code dir=\"ltr\">defer</code>",
      "<code dir=\"ltr\">type=&quot;module&quot;</code>",
      "<code dir=\"ltr\">async</code>"
     ],
     "a": 1,
     "why": "بدون type=&quot;module&quot; يعامل المتصفح الملف كسكربت عادي ويرفض import."
    }
   ]
  },
  {
   "body": "<h2>قالب لإنشاء كائنات متشابهة</h2>\n<p>تخيّل أنك تبني لعبة فيها 100 لاعب، لكل منهم اسم ونقاط ومستوى، وكلهم يستطيعون <code dir=\"ltr\">attack()</code> و <code dir=\"ltr\">levelUp()</code>. كتابة 100 كائن يدوياً مستحيل. <strong>الصنف (Class)</strong> هو <strong>قالب</strong> نصنع منه كائنات بنفس البنية والسلوك.</p>\n<h2>تعريف صنف وإنشاء كائنات</h2>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>class Player {\n  constructor(name) {\n    this.name = name;\n    this.score = 0;\n    this.level = 1;\n  }\n\n  addPoints(points) {\n    this.score += points;\n    if (this.score &gt;= 100) {\n      this.level++;\n      this.score -= 100;\n    }\n  }\n\n  describe() {\n    return `${this.name} - المستوى ${this.level} (${this.score} نقطة)`;\n  }\n}\n\nconst p1 = new Player(&quot;صقر&quot;);\nconst p2 = new Player(&quot;غيمة&quot;);\np1.addPoints(130);\np2.addPoints(40);\nconsole.log(p1.describe());\nconsole.log(p2.describe());</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>صقر - المستوى 2 (30 نقطة)\nغيمة - المستوى 1 (40 نقطة)</code></pre></div>\n<ul><li><code dir=\"ltr\">class Player</code> تعريف القالب، واسم الصنف يبدأ بحرف كبير عرفاً.</li><li><code dir=\"ltr\">constructor</code> دالة خاصة تُنفَّذ تلقائياً عند الإنشاء بـ <code dir=\"ltr\">new</code>، ومهمتها تجهيز الخصائص.</li><li><code dir=\"ltr\">this</code> تشير إلى <strong>الكائن الحالي</strong> نفسه، فـ <code dir=\"ltr\">this.name</code> هي خاصية هذا اللاعب تحديداً.</li><li><code dir=\"ltr\">new Player(&quot;صقر&quot;)</code> تنشئ كائناً جديداً من القالب، ويسمى <strong>نسخة (instance)</strong>.</li></ul>\n<h2>الوراثة: extends</h2>\n<p>يمكن لصنف أن <strong>يرث</strong> كل ما في صنف آخر ويضيف عليه:</p>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>class Animal {\n  constructor(name) {\n    this.name = name;\n  }\n  speak() {\n    return `${this.name} يصدر صوتاً`;\n  }\n}\n\nclass Cat extends Animal {\n  constructor(name, color) {\n    super(name);\n    this.color = color;\n  }\n  speak() {\n    return `${this.name} يقول مياو`;\n  }\n}\n\nconst generic = new Animal(&quot;حيوان&quot;);\nconst cat = new Cat(&quot;مشمش&quot;, &quot;برتقالي&quot;);\nconsole.log(generic.speak());\nconsole.log(cat.speak());\nconsole.log(cat.color, cat instanceof Animal);</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>حيوان يصدر صوتاً\nمشمش يقول مياو\nبرتقالي true</code></pre></div>\n<ul><li><code dir=\"ltr\">extends Animal</code> تعني أن <code dir=\"ltr\">Cat</code> يرث من <code dir=\"ltr\">Animal</code>.</li><li><code dir=\"ltr\">super(name)</code> تستدعي constructor الأب، ويجب استدعاؤها قبل استخدام <code dir=\"ltr\">this</code>.</li><li>تعريف <code dir=\"ltr\">speak</code> في الابن <strong>يتجاوز (override)</strong> نسخة الأب.</li></ul>\n<h2>الخصائص الخاصة (#)</h2>\n<p>بإضافة <code dir=\"ltr\">#</code> قبل اسم الخاصية تصبح <strong>خاصة</strong>، فلا يمكن الوصول إليها من خارج الصنف:</p>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>class BankAccount {\n  #balance = 0;\n\n  deposit(amount) {\n    if (amount &lt;= 0) return &quot;مبلغ غير صالح&quot;;\n    this.#balance += amount;\n    return `تم الإيداع، الرصيد: ${this.#balance}`;\n  }\n\n  get balance() {\n    return this.#balance;\n  }\n}\n\nconst acc = new BankAccount();\nconsole.log(acc.deposit(200));\nconsole.log(acc.deposit(-50));\nconsole.log(acc.balance);\nconsole.log(acc[&quot;#balance&quot;]);</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>تم الإيداع، الرصيد: 200\nمبلغ غير صالح\n200\nundefined</code></pre></div>\n<p><code dir=\"ltr\">get balance()</code> تسمى <strong>getter</strong>: تُقرأ كخاصية <code dir=\"ltr\">acc.balance</code> دون أقواس، لكنها دالة لا تسمح إلا بالقراءة. هكذا لا يمكن تعديل الرصيد إلا عبر <code dir=\"ltr\">deposit</code> التي تتحقق من المبلغ.</p>\n<h2>الدوال الثابتة (static)</h2>\n<p>تنتمي للصنف نفسه وليس للنسخ:</p>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>class Temperature {\n  static toFahrenheit(c) {\n    return c * 9 / 5 + 32;\n  }\n}\nconsole.log(Temperature.toFahrenheit(30));</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>86</code></pre></div>\n<h2>ملخص الدرس</h2>\n<ul><li>الصنف قالب، و <code dir=\"ltr\">new</code> تنشئ نسخاً منه.</li><li><code dir=\"ltr\">constructor</code> يجهّز الخصائص، و <code dir=\"ltr\">this</code> تشير للكائن الحالي.</li><li><code dir=\"ltr\">extends</code> للوراثة، و <code dir=\"ltr\">super()</code> لاستدعاء الأب.</li><li><code dir=\"ltr\">#prop</code> للخصائص الخاصة، و <code dir=\"ltr\">get</code> للقراءة المحمية، و <code dir=\"ltr\">static</code> لدوال الصنف نفسه.</li></ul>",
   "exercise": {
    "prompt": "<ol><li>أنشئ صنف <code dir=\"ltr\">Shape</code> له constructor يستقبل <code dir=\"ltr\">name</code>، ودالة <code dir=\"ltr\">describe()</code> تُرجع <code dir=\"ltr\">X مساحته N</code> حيث N ناتج <code dir=\"ltr\">this.area()</code>.</li><li>أنشئ صنف <code dir=\"ltr\">Rectangle</code> يرث من <code dir=\"ltr\">Shape</code>، يستقبل <code dir=\"ltr\">width</code> و <code dir=\"ltr\">height</code>، ويعرّف <code dir=\"ltr\">area()</code>.</li><li>أنشئ صنف <code dir=\"ltr\">Circle</code> يرث من <code dir=\"ltr\">Shape</code>، يستقبل <code dir=\"ltr\">radius</code>، ويعرّف <code dir=\"ltr\">area()</code> = <code dir=\"ltr\">3 * r * r</code> (نستخدم 3 للتبسيط).</li></ol>\n<p>الكود في الأسفل يستخدم الأصناف، لا تعدّله.</p>",
    "starter": "// اكتب الأصناف الثلاثة هنا\n\n\nconst shapes = [new Rectangle(4, 5), new Circle(2)];\nfor (const s of shapes) {\n  console.log(s.describe());\n}\nconsole.log(shapes[1] instanceof Shape);",
    "expected": "مستطيل مساحته 20\nدائرة مساحته 12\ntrue",
    "solution": "class Shape {\n  constructor(name) {\n    this.name = name;\n  }\n  describe() {\n    return `${this.name} مساحته ${this.area()}`;\n  }\n}\n\nclass Rectangle extends Shape {\n  constructor(width, height) {\n    super(\"مستطيل\");\n    this.width = width;\n    this.height = height;\n  }\n  area() {\n    return this.width * this.height;\n  }\n}\n\nclass Circle extends Shape {\n  constructor(radius) {\n    super(\"دائرة\");\n    this.radius = radius;\n  }\n  area() {\n    return 3 * this.radius * this.radius;\n  }\n}\n\nconst shapes = [new Rectangle(4, 5), new Circle(2)];\nfor (const s of shapes) {\n  console.log(s.describe());\n}\nconsole.log(shapes[1] instanceof Shape);"
   },
   "quiz": [
    {
     "q": "متى تُنفَّذ دالة <code dir=\"ltr\">constructor</code>؟",
     "o": [
      "عند تعريف الصنف",
      "تلقائياً عند إنشاء نسخة جديدة بـ <code dir=\"ltr\">new</code>",
      "عند استدعائها يدوياً فقط"
     ],
     "a": 1,
     "why": "constructor تجهّز كل نسخة جديدة لحظة إنشائها."
    },
    {
     "q": "ما وظيفة <code dir=\"ltr\">super(name)</code> داخل constructor الصنف الابن؟",
     "o": [
      "تستدعي constructor الصنف الأب",
      "تحذف خصائص الأب",
      "تنشئ نسخة جديدة من الأب"
     ],
     "a": 0,
     "why": "يجب استدعاؤها قبل استخدام this في الصنف الابن."
    },
    {
     "q": "ماذا يعني <code dir=\"ltr\">#</code> قبل اسم خاصية في الصنف؟",
     "o": [
      "أنها ثابتة لا تتغير",
      "أنها خاصة لا يمكن الوصول إليها من خارج الصنف",
      "أنها رقمية"
     ],
     "a": 1,
     "why": "الخصائص الخاصة تحمي البيانات من التعديل الخارجي."
    }
   ]
  },
  {
   "body": "<h2>أكثر من مجرد دمج نصوص</h2>\n<p>تعرّفت على <strong>القوالب النصية (Template Literals)</strong> في الوحدة الأولى. في هذا الدرس سنرى إمكانياتها الكاملة، فهي من أكثر ميزات JavaScript الحديثة استخداماً.</p>\n<h2>نصوص متعددة الأسطر</h2>\n<p>مع علامات التنصيص العادية تحتاج <code dir=\"ltr\">\\n</code> لكل سطر جديد. أما مع `<code dir=\"ltr\"> </code> `` فالأسطر تُكتب كما هي:</p>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>const oldWay = &quot;السطر الأول\\nالسطر الثاني&quot;;\nconst newWay = `السطر الأول\nالسطر الثاني`;\nconsole.log(oldWay === newWay);\nconsole.log(newWay);</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>true\nالسطر الأول\nالسطر الثاني</code></pre></div>\n<h2>أي تعبير داخل ${ }</h2>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>const items = [{ name: &quot;قهوة&quot;, price: 12 }, { name: &quot;كعك&quot;, price: 8 }];\nconst vip = true;\n\nconsole.log(`عدد الأصناف: ${items.length}`);\nconsole.log(`الإجمالي: ${items.reduce((s, i) =&gt; s + i.price, 0)} ريال`);\nconsole.log(`العميل: ${vip ? &quot;مميز ⭐&quot; : &quot;عادي&quot;}`);\nconsole.log(`بأحرف كبيرة: ${&quot;codeway&quot;.toUpperCase()}`);</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>عدد الأصناف: 2\nالإجمالي: 20 ريال\nالعميل: مميز ⭐\nبأحرف كبيرة: CODEWAY</code></pre></div>\n<h2>بناء HTML بالقوالب</h2>\n<p>هذا من أشهر الاستخدامات: توليد عناصر الصفحة من البيانات بـ <code dir=\"ltr\">map</code> ثم <code dir=\"ltr\">join</code>:</p>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>const products = [\n  { name: &quot;ساعة&quot;, price: 300 },\n  { name: &quot;حقيبة&quot;, price: 150 }\n];\n\nconst html = `\n&lt;ul class=&quot;products&quot;&gt;\n  ${products.map(p =&gt; `&lt;li&gt;${p.name}: ${p.price} ريال&lt;/li&gt;`).join(&quot;\\n  &quot;)}\n&lt;/ul&gt;`;\nconsole.log(html.trim());</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>&lt;ul class=&quot;products&quot;&gt;\n  &lt;li&gt;ساعة: 300 ريال&lt;/li&gt;\n  &lt;li&gt;حقيبة: 150 ريال&lt;/li&gt;\n&lt;/ul&gt;</code></pre></div>\n<p>لاحظ القالب <strong>داخل</strong> قالب، وهذا مسموح تماماً.</p>\n<div class=\"callout warn\">⚠️ تذكّر درس DOM: إذا كانت البيانات من المستخدم، لا تضعها في <code dir=\"ltr\">innerHTML</code> مباشرة دون تنظيفها، حتى لو بنيتها بقالب نصي.</div>\n<h2>القوالب الموسومة (Tagged Templates)</h2>\n<p>ميزة متقدمة: يمكن وضع <strong>دالة</strong> قبل القالب لتعالجه بطريقتها. الدالة تستقبل الأجزاء النصية الثابتة، ثم القيم:</p>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>function highlight(strings, ...values) {\n  return strings.reduce((result, str, i) =&gt; {\n    const value = i &lt; values.length ? `[${values[i]}]` : &quot;&quot;;\n    return result + str + value;\n  }, &quot;&quot;);\n}\n\nconst user = &quot;ماهر&quot;;\nconst points = 350;\nconsole.log(highlight`المستخدم ${user} جمع ${points} نقطة`);</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>المستخدم [ماهر] جمع [350] نقطة</code></pre></div>\n<ul><li><code dir=\"ltr\">strings</code> = <code dir=\"ltr\">[&quot;المستخدم &quot;, &quot; جمع &quot;, &quot; نقطة&quot;]</code> الأجزاء الثابتة.</li><li><code dir=\"ltr\">values</code> = <code dir=\"ltr\">[&quot;ماهر&quot;, 350]</code> القيم.</li></ul>\n<p>قد لا تكتبها كثيراً بنفسك، لكنك ستراها في مكتبات مشهورة مثل styled-components و GraphQL.</p>\n<h2>String.raw: النص كما هو</h2>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>console.log(String.raw`C:\\new\\table`);\nconsole.log(`C:\\\\new\\\\table`);</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>C:\\new\\table\nC:\\new\\table</code></pre></div>\n<p><code dir=\"ltr\">String.raw</code> يتجاهل معنى <code dir=\"ltr\">\\</code> الخاص، وهو مفيد لمسارات الملفات والتعابير النمطية.</p>\n<h2>ملخص الدرس</h2>\n<ul><li>القوالب تدعم الأسطر المتعددة مباشرة.</li><li>أي تعبير JavaScript يمكن وضعه داخل <code dir=\"ltr\">${ }</code>: عمليات، ودوال، وعامل ثلاثي.</li><li><code dir=\"ltr\">map</code> مع <code dir=\"ltr\">join</code> داخل قالب لتوليد HTML من البيانات.</li><li>القوالب الموسومة تمرر القالب لدالة تعالجه.</li></ul>",
   "exercise": {
    "prompt": "<p>اكتب دالة <code dir=\"ltr\">receipt(customer, items)</code> تُرجع إيصالاً نصياً <strong>متعدد الأسطر</strong> بقالب واحد، بهذا الشكل بالضبط:</p>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>العميل: نورة\n- شاي × 2 = 10\n- كيك × 1 = 15\nالإجمالي: 25</code></pre></div>\n<p>استخدم <code dir=\"ltr\">map</code> و <code dir=\"ltr\">join(&quot;\\n&quot;)</code> لأسطر العناصر، و <code dir=\"ltr\">reduce</code> للإجمالي.</p>",
    "starter": "function receipt(customer, items) {\n  // أكمل هنا\n}\n\nconsole.log(receipt(\"نورة\", [\n  { name: \"شاي\", price: 5, qty: 2 },\n  { name: \"كيك\", price: 15, qty: 1 }\n]));",
    "expected": "العميل: نورة\n- شاي × 2 = 10\n- كيك × 1 = 15\nالإجمالي: 25",
    "solution": "function receipt(customer, items) {\n  const lines = items.map(i => `- ${i.name} × ${i.qty} = ${i.price * i.qty}`).join(\"\\n\");\n  const total = items.reduce((sum, i) => sum + i.price * i.qty, 0);\n  return `العميل: ${customer}\n${lines}\nالإجمالي: ${total}`;\n}\n\nconsole.log(receipt(\"نورة\", [\n  { name: \"شاي\", price: 5, qty: 2 },\n  { name: \"كيك\", price: 15, qty: 1 }\n]));"
   },
   "quiz": [
    {
     "q": "ما ناتج `<code dir=\"ltr\"> </code>${2 &gt; 1 ? &quot;نعم&quot; : &quot;لا&quot;}<code dir=\"ltr\"> </code>`؟",
     "o": [
      "<code dir=\"ltr\">نعم</code>",
      "<code dir=\"ltr\">لا</code>",
      "<code dir=\"ltr\">true</code>"
     ],
     "a": 0,
     "why": "يُحسب العامل الثلاثي داخل <code dir=\"ltr\">${ }</code> وتوضع نتيجته في النص."
    },
    {
     "q": "ما ميزة القوالب على علامات التنصيص العادية في النصوص الطويلة؟",
     "o": [
      "أنها أسرع",
      "تسمح بالأسطر المتعددة مباشرة دون <code dir=\"ltr\">\\n</code>",
      "تشفّر النص"
     ],
     "a": 1,
     "why": "يمكنك الضغط على Enter داخل القالب."
    },
    {
     "q": "في القالب الموسوم `<code dir=\"ltr\"> tag</code>أ ${x} ب<code dir=\"ltr\"> </code><code dir=\"ltr\">، ماذا تستقبل الدالة </code>tag` أولاً؟",
     "o": [
      "مصفوفة الأجزاء النصية الثابتة",
      "قيمة x",
      "النص كاملاً"
     ],
     "a": 0,
     "why": "المعامل الأول مصفوفة الأجزاء الثابتة، والقيم تأتي بعدها."
    }
   ]
  }
 ],
 [
  {
   "body": "<h2>من يستدعيني؟</h2>\n<p>الكلمة <code dir=\"ltr\">this</code> من أكثر ما يربك مبرمجي JavaScript، لأن قيمتها <strong>لا تُحدد عند كتابة الدالة، بل عند استدعائها</strong>. القاعدة الذهبية: انظر إلى ما <strong>قبل النقطة</strong> لحظة الاستدعاء.</p>\n<h2>this داخل طرق الكائن</h2>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>const user = {\n  name: &quot;عبير&quot;,\n  greet() {\n    return `مرحباً، أنا ${this.name}`;\n  }\n};\n\nconsole.log(user.greet());</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>مرحباً، أنا عبير</code></pre></div>\n<p>استدعينا <code dir=\"ltr\">user.greet()</code>، وما قبل النقطة هو <code dir=\"ltr\">user</code>، إذن <code dir=\"ltr\">this</code> هي <code dir=\"ltr\">user</code>.</p>\n<h2>نفس الدالة، this مختلفة</h2>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>function introduce() {\n  return `أنا ${this.name}`;\n}\n\nconst a = { name: &quot;أحمد&quot;, introduce };\nconst b = { name: &quot;بشرى&quot;, introduce };\n\nconsole.log(a.introduce());\nconsole.log(b.introduce());</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>أنا أحمد\nأنا بشرى</code></pre></div>\n<p>دالة واحدة، لكن <code dir=\"ltr\">this</code> تتغير حسب الكائن الذي استُدعيت منه.</p>\n<h2>المشكلة: فقدان this</h2>\n<p>عندما تأخذ الطريقة <strong>بعيداً</strong> عن كائنها، تفقد <code dir=\"ltr\">this</code>:</p>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>const timer = {\n  seconds: 10,\n  show() {\n    console.log(this.seconds);\n  }\n};\n\ntimer.show();            // 10\nconst detached = timer.show;\ndetached();              // undefined، لا يوجد شيء قبل النقطة!</code></pre></div>\n<p>هذا يحدث كثيراً عند تمرير الطريقة كـ callback، مثلاً <code dir=\"ltr\">setTimeout(timer.show, 1000)</code> أو <code dir=\"ltr\">button.addEventListener(&quot;click&quot;, obj.handle)</code>.</p>\n<h2>الحل 1: bind</h2>\n<p><code dir=\"ltr\">bind</code> تنشئ نسخة من الدالة مربوطة بـ <code dir=\"ltr\">this</code> محددة <strong>للأبد</strong>:</p>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>const timer = {\n  seconds: 10,\n  show() {\n    return this.seconds;\n  }\n};\n\nconst bound = timer.show.bind(timer);\nconsole.log(bound());</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>10</code></pre></div>\n<h2>الحل 2: الدوال السهمية</h2>\n<p>الدوال السهمية **ليس لها <code dir=\"ltr\">this</code> خاص بها**، بل تأخذه من المكان الذي كُتبت فيه. وهذا يجعلها مثالية داخل الطرق:</p>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>const team = {\n  name: &quot;الصقور&quot;,\n  members: [&quot;علي&quot;, &quot;سعد&quot;],\n  list() {\n    return this.members.map(m =&gt; `${m} من فريق ${this.name}`);\n  }\n};\n\nconsole.log(team.list());</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>[&quot;علي من فريق الصقور&quot;,&quot;سعد من فريق الصقور&quot;]</code></pre></div>\n<p>الدالة السهمية داخل <code dir=\"ltr\">map</code> أخذت <code dir=\"ltr\">this</code> من <code dir=\"ltr\">list</code>، أي <code dir=\"ltr\">team</code>.</p>\n<div class=\"callout warn\">⚠️ لهذا السبب <strong>لا تستخدم دالة سهمية كطريقة في كائن</strong>: <code dir=\"ltr\">{ greet: () =&gt; this.name }</code> لن تعمل، لأن السهمية ستأخذ <code dir=\"ltr\">this</code> من خارج الكائن.</div>\n<h2>call و apply: تحديد this لاستدعاء واحد</h2>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>function describe(city, country) {\n  return `${this.name} من ${city}، ${country}`;\n}\n\nconst person = { name: &quot;هالة&quot; };\nconsole.log(describe.call(person, &quot;أبها&quot;, &quot;السعودية&quot;));\nconsole.log(describe.apply(person, [&quot;الدوحة&quot;, &quot;قطر&quot;]));</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>هالة من أبها، السعودية\nهالة من الدوحة، قطر</code></pre></div>\n<p>الفرق الوحيد: <code dir=\"ltr\">call</code> تأخذ الوسائط منفصلة، و <code dir=\"ltr\">apply</code> تأخذها في مصفوفة.</p>\n<h2>ملخص قواعد this</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>طريقة الاستدعاء</th><th>قيمة this</th></tr></thead><tbody><tr><td><code dir=\"ltr\">obj.method()</code></td><td><code dir=\"ltr\">obj</code></td></tr><tr><td><code dir=\"ltr\">new Class()</code></td><td>الكائن الجديد</td></tr><tr><td><code dir=\"ltr\">fn.call(x)</code> أو <code dir=\"ltr\">fn.bind(x)()</code></td><td><code dir=\"ltr\">x</code></td></tr><tr><td>دالة سهمية</td><td><code dir=\"ltr\">this</code> من المكان المحيط بها</td></tr><tr><td><code dir=\"ltr\">fn()</code> منفردة</td><td><code dir=\"ltr\">undefined</code> في الوضع الصارم</td></tr><tr><td>معالج حدث بدالة عادية</td><td>العنصر الذي وقع عليه الحدث</td></tr></tbody></table></div>\n<h2>ملخص الدرس</h2>\n<ul><li><code dir=\"ltr\">this</code> تُحدد لحظة الاستدعاء: انظر لما قبل النقطة.</li><li>فصل الطريقة عن كائنها يُفقدها <code dir=\"ltr\">this</code>.</li><li><code dir=\"ltr\">bind</code> تربط <code dir=\"ltr\">this</code> بشكل دائم، و <code dir=\"ltr\">call</code> و <code dir=\"ltr\">apply</code> لاستدعاء واحد.</li><li>الدوال السهمية ترث <code dir=\"ltr\">this</code> من محيطها، فهي ممتازة داخل الطرق وسيئة كطرق.</li></ul>",
   "exercise": {
    "prompt": "<p>الكائن <code dir=\"ltr\">shop</code> به مشكلتان مع <code dir=\"ltr\">this</code>. أصلحهما دون تغيير أسطر الاختبار في الأسفل:</p>\n<ol><li>الطريقة <code dir=\"ltr\">printAll</code> تستخدم دالة عادية داخل <code dir=\"ltr\">map</code>، فتفقد <code dir=\"ltr\">this</code>. حوّلها لدالة سهمية.</li><li>السطر <code dir=\"ltr\">const later = shop.getName;</code> يفصل الطريقة عن كائنها. استخدم <code dir=\"ltr\">bind</code> في نفس السطر ليعمل.</li></ol>",
    "starter": "const shop = {\n  name: \"متجر الورد\",\n  products: [\"جوري\", \"توليب\"],\n  getName() {\n    return this.name;\n  },\n  printAll() {\n    return this.products.map(function (p) {\n      return `${p} - ${this.name}`;\n    });\n  }\n};\n\nconsole.log(shop.printAll());\nconst later = shop.getName;\nconsole.log(later());",
    "expected": "[\"جوري - متجر الورد\",\"توليب - متجر الورد\"]\nمتجر الورد",
    "solution": "const shop = {\n  name: \"متجر الورد\",\n  products: [\"جوري\", \"توليب\"],\n  getName() {\n    return this.name;\n  },\n  printAll() {\n    return this.products.map(p => `${p} - ${this.name}`);\n  }\n};\n\nconsole.log(shop.printAll());\nconst later = shop.getName.bind(shop);\nconsole.log(later());"
   },
   "quiz": [
    {
     "q": "في <code dir=\"ltr\">car.start()</code>، ما قيمة <code dir=\"ltr\">this</code> داخل start؟",
     "o": [
      "<code dir=\"ltr\">car</code>",
      "<code dir=\"ltr\">start</code>",
      "الكائن العام دائماً"
     ],
     "a": 0,
     "why": "ما قبل النقطة لحظة الاستدعاء هو this."
    },
    {
     "q": "لماذا تعمل الدالة السهمية داخل <code dir=\"ltr\">map</code> في طريقة كائن؟",
     "o": [
      "لأنها أسرع",
      "لأنها تأخذ <code dir=\"ltr\">this</code> من الطريقة المحيطة بها",
      "لأن map تحدد this تلقائياً"
     ],
     "a": 1,
     "why": "الدوال السهمية لا تملك this خاصاً بها."
    },
    {
     "q": "ما الفرق بين <code dir=\"ltr\">bind</code> و <code dir=\"ltr\">call</code>؟",
     "o": [
      "<code dir=\"ltr\">bind</code> تُرجع دالة جديدة مربوطة، و <code dir=\"ltr\">call</code> تستدعي الدالة فوراً",
      "لا فرق",
      "<code dir=\"ltr\">call</code> للكائنات و <code dir=\"ltr\">bind</code> للمصفوفات"
     ],
     "a": 0,
     "why": "bind للاستخدام لاحقاً، و call للاستدعاء الآن."
    }
   ]
  },
  {
   "body": "<h2>من أين جاءت هذه الدوال؟</h2>\n<p>أنشأت مصفوفة فارغة <code dir=\"ltr\">[]</code>، ومع ذلك تستطيع استدعاء <code dir=\"ltr\">push</code> و <code dir=\"ltr\">map</code> و <code dir=\"ltr\">filter</code> عليها. أين عُرّفت هذه الدوال؟ الإجابة: في <strong>النموذج الأولي (Prototype)</strong>.</p>\n<h2>سلسلة النماذج الأولية</h2>\n<p>كل كائن في JavaScript له رابط خفي إلى كائن آخر اسمه <strong>prototype</strong>. عندما تطلب خاصية غير موجودة في الكائن، تبحث JavaScript في الـ prototype، ثم في prototype الـ prototype، وهكذا. هذا يسمى <strong>سلسلة النماذج (Prototype Chain)</strong>:</p>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>const arr = [1, 2, 3];\n\nconsole.log(Object.getPrototypeOf(arr) === Array.prototype);\nconsole.log(arr.hasOwnProperty(&quot;map&quot;));\nconsole.log(&quot;map&quot; in arr);\nconsole.log(Object.getPrototypeOf(Array.prototype) === Object.prototype);</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>true\nfalse\ntrue\ntrue</code></pre></div>\n<p>السلسلة هنا: <code dir=\"ltr\">arr</code> ← <code dir=\"ltr\">Array.prototype</code> (فيه map و push) ← <code dir=\"ltr\">Object.prototype</code> (فيه hasOwnProperty) ← <code dir=\"ltr\">null</code>.</p>\n<h2>إنشاء كائن يرث من آخر</h2>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>const animal = {\n  eat() {\n    return `${this.name} يأكل`;\n  }\n};\n\nconst dog = Object.create(animal);\ndog.name = &quot;ريكس&quot;;\ndog.bark = function () {\n  return &quot;هاو!&quot;;\n};\n\nconsole.log(dog.bark());\nconsole.log(dog.eat());\nconsole.log(Object.keys(dog));</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>هاو!\nريكس يأكل\n[&quot;name&quot;,&quot;bark&quot;]</code></pre></div>\n<p><code dir=\"ltr\">dog</code> لا يملك <code dir=\"ltr\">eat</code>، لكنه وجدها في نموذجه الأولي <code dir=\"ltr\">animal</code>. و <code dir=\"ltr\">Object.keys</code> تعرض فقط الخصائص <strong>الخاصة</strong> بالكائن.</p>\n<h2>الأصناف مبنية على النماذج الأولية</h2>\n<p>الأصناف التي تعلمناها في الوحدة السابقة هي <strong>صيغة أجمل</strong> فوق نفس النظام:</p>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>class User {\n  constructor(name) {\n    this.name = name;\n  }\n  hello() {\n    return `أهلاً ${this.name}`;\n  }\n}\n\nconst u1 = new User(&quot;وعد&quot;);\nconst u2 = new User(&quot;جاسم&quot;);\n\nconsole.log(typeof User);\nconsole.log(u1.hello === u2.hello);\nconsole.log(Object.getPrototypeOf(u1) === User.prototype);</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>function\ntrue\ntrue</code></pre></div>\n<p>الصنف في الحقيقة دالة، والطريقة <code dir=\"ltr\">hello</code> محفوظة <strong>مرة واحدة</strong> في <code dir=\"ltr\">User.prototype</code> وتتشاركها كل النسخ، بدلاً من نسخة لكل كائن. وهذا يوفر الذاكرة.</p>\n<h2>الطريقة القديمة: دوال البناء</h2>\n<p>قبل الأصناف (2015) كان يُكتب الكود هكذا، وستراه في المشاريع القديمة:</p>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>function Car(brand) {\n  this.brand = brand;\n}\nCar.prototype.drive = function () {\n  return `${this.brand} تسير`;\n};\n\nconst car = new Car(&quot;نيسان&quot;);\nconsole.log(car.drive());</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>نيسان تسير</code></pre></div>\n<h2>تظليل خصائص النموذج</h2>\n<p>إذا أضفت خاصية للكائن بنفس اسم خاصية في نموذجه، فالكائن يفوز:</p>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>const base = { greet() { return &quot;مرحباً من النموذج&quot;; } };\nconst obj = Object.create(base);\nobj.greet = () =&gt; &quot;مرحباً من الكائن نفسه&quot;;\nconsole.log(obj.greet());\nconsole.log(base.greet());</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>مرحباً من الكائن نفسه\nمرحباً من النموذج</code></pre></div>\n<div class=\"callout warn\">⚠️ لا تعدّل أبداً النماذج المدمجة مثل <code dir=\"ltr\">Array.prototype.myFunc = ...</code> في مشاريعك، لأن ذلك قد يتعارض مع مكتبات أخرى أو إصدارات مستقبلية من اللغة.</div>\n<h2>ملخص الدرس</h2>\n<ul><li>كل كائن مرتبط بنموذج أولي، والبحث عن الخصائص يمر عبر السلسلة.</li><li><code dir=\"ltr\">Object.create(proto)</code> تنشئ كائناً يرث من proto.</li><li>الأصناف صيغة فوق النماذج الأولية، والطرق تُخزن مرة واحدة في <code dir=\"ltr\">Class.prototype</code>.</li><li><code dir=\"ltr\">hasOwnProperty</code> و <code dir=\"ltr\">Object.keys</code> تعرضان الخصائص الخاصة فقط.</li></ul>",
   "exercise": {
    "prompt": "<ol><li>أنشئ كائناً <code dir=\"ltr\">vehicle</code> فيه طريقة <code dir=\"ltr\">info()</code> تُرجع <code dir=\"ltr\">X بسرعة N كم/س</code> مستخدمة <code dir=\"ltr\">this.name</code> و <code dir=\"ltr\">this.speed</code>.</li><li>أنشئ <code dir=\"ltr\">bike</code> بـ <code dir=\"ltr\">Object.create(vehicle)</code>، وأعطه <code dir=\"ltr\">name</code> = <code dir=\"ltr\">دراجة</code> و <code dir=\"ltr\">speed</code> = <code dir=\"ltr\">25</code>.</li><li>اطبع <code dir=\"ltr\">bike.info()</code>.</li><li>اطبع هل <code dir=\"ltr\">info</code> خاصية خاصة بـ <code dir=\"ltr\">bike</code> (<code dir=\"ltr\">hasOwnProperty</code>).</li><li>اطبع هل <code dir=\"ltr\">vehicle</code> هو النموذج الأولي لـ <code dir=\"ltr\">bike</code>.</li></ol>",
    "starter": "// أكمل هنا",
    "expected": "دراجة بسرعة 25 كم/س\nfalse\ntrue",
    "solution": "const vehicle = {\n  info() {\n    return `${this.name} بسرعة ${this.speed} كم/س`;\n  }\n};\n\nconst bike = Object.create(vehicle);\nbike.name = \"دراجة\";\nbike.speed = 25;\n\nconsole.log(bike.info());\nconsole.log(bike.hasOwnProperty(\"info\"));\nconsole.log(Object.getPrototypeOf(bike) === vehicle);"
   },
   "quiz": [
    {
     "q": "أين توجد الدالة <code dir=\"ltr\">map</code> التي تستدعيها على أي مصفوفة؟",
     "o": [
      "داخل كل مصفوفة على حدة",
      "في <code dir=\"ltr\">Array.prototype</code>، وتصل إليها المصفوفات عبر سلسلة النماذج",
      "في <code dir=\"ltr\">console</code>"
     ],
     "a": 1,
     "why": "كل المصفوفات تتشارك نفس الطرق من نموذجها الأولي."
    },
    {
     "q": "ماذا يحدث عند طلب خاصية غير موجودة في الكائن ولا في أي نموذج في سلسلته؟",
     "o": [
      "خطأ",
      "يُرجع <code dir=\"ltr\">undefined</code>",
      "يُرجع <code dir=\"ltr\">null</code>"
     ],
     "a": 1,
     "why": "تنتهي السلسلة عند null، وإذا لم تُوجد الخاصية تكون النتيجة undefined."
    },
    {
     "q": "ما نتيجة <code dir=\"ltr\">typeof</code> لصنف معرّف بـ <code dir=\"ltr\">class</code>؟",
     "o": [
      "<code dir=\"ltr\">&quot;class&quot;</code>",
      "<code dir=\"ltr\">&quot;object&quot;</code>",
      "<code dir=\"ltr\">&quot;function&quot;</code>"
     ],
     "a": 2,
     "why": "الأصناف في JavaScript دوال بناء بصيغة أجمل."
    }
   ]
  },
  {
   "body": "<h2>خيط واحد، مهام كثيرة</h2>\n<p>JavaScript تعمل على <strong>خيط واحد (Single Thread)</strong>: تنفّذ شيئاً واحداً فقط في كل لحظة. فكيف تتعامل مع المؤقتات والطلبات والضغطات في نفس الوقت؟ الإجابة هي <strong>حلقة الأحداث (Event Loop)</strong>، وهي من أشهر أسئلة المقابلات المتقدمة.</p>\n<h2>المكونات الأربعة</h2>\n<ol><li><strong>مكدس الاستدعاءات (Call Stack):</strong> الكود الذي يُنفَّذ الآن. الدالة تدخل المكدس عند استدعائها، وتخرج عند انتهائها.</li><li><strong>واجهات المتصفح (Web APIs):</strong> المؤقتات و fetch والأحداث تعمل هنا <strong>خارج</strong> JavaScript، في المتصفح نفسه.</li><li><strong>طابور المهام (Task Queue):</strong> عندما ينتهي مؤقت أو يقع حدث، توضع دالته هنا تنتظر دورها.</li><li><strong>طابور المهام الدقيقة (Microtask Queue):</strong> خاص بالوعود (<code dir=\"ltr\">then</code> و <code dir=\"ltr\">await</code>)، وله <strong>أولوية أعلى</strong>.</li></ol>\n<p><strong>حلقة الأحداث</strong> وظيفتها بسيطة: عندما يفرغ المكدس، تنفّذ <strong>كل</strong> المهام الدقيقة أولاً، ثم تأخذ مهمة <strong>واحدة</strong> من طابور المهام، وتكرر.</p>\n<h2>اختبر نفسك: ما الترتيب؟</h2>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>console.log(&quot;1&quot;);\n\nsetTimeout(() =&gt; console.log(&quot;2&quot;), 0);\n\nPromise.resolve().then(() =&gt; console.log(&quot;3&quot;));\n\nconsole.log(&quot;4&quot;);</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>1\n4\n3\n2</code></pre></div>\n<p>لماذا؟</p>\n<ol><li><code dir=\"ltr\">1</code> و <code dir=\"ltr\">4</code> كود متزامن يُنفَّذ فوراً في المكدس.</li><li><code dir=\"ltr\">setTimeout</code> وضعت دالتها في <strong>طابور المهام</strong>.</li><li><code dir=\"ltr\">then</code> وضعت دالتها في <strong>طابور المهام الدقيقة</strong>.</li><li>فرغ المكدس، فنُفّذت المهام الدقيقة أولاً: <code dir=\"ltr\">3</code>.</li><li>ثم مهمة من طابور المهام: <code dir=\"ltr\">2</code>.</li></ol>\n<div class=\"callout tip\">💡 حتى <code dir=\"ltr\">setTimeout(fn, 0)</code> لا تُنفَّذ فوراً. الصفر يعني &quot;في أقرب فرصة بعد انتهاء كل شيء آخر&quot;، والوعود تسبقها دائماً.</div>\n<h2>مثال أعمق</h2>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>console.log(&quot;بداية&quot;);\n\nsetTimeout(() =&gt; console.log(&quot;مؤقت 1&quot;), 0);\n\nPromise.resolve()\n  .then(() =&gt; console.log(&quot;وعد 1&quot;))\n  .then(() =&gt; console.log(&quot;وعد 2&quot;));\n\nqueueMicrotask(() =&gt; console.log(&quot;مهمة دقيقة&quot;));\n\nsetTimeout(() =&gt; console.log(&quot;مؤقت 2&quot;), 0);\n\nconsole.log(&quot;نهاية&quot;);</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>بداية\nنهاية\nوعد 1\nمهمة دقيقة\nوعد 2\nمؤقت 1\nمؤقت 2</code></pre></div>\n<p><code dir=\"ltr\">وعد 2</code> لم تُضف إلى الطابور إلا بعد انتهاء <code dir=\"ltr\">وعد 1</code>، فجاءت بعد <code dir=\"ltr\">مهمة دقيقة</code>. لكنها ما زالت قبل كل المؤقتات، لأن حلقة الأحداث تفرغ طابور المهام الدقيقة <strong>بالكامل</strong> قبل أي مؤقت.</p>\n<h2>async و await في حلقة الأحداث</h2>\n<p>ما بعد <code dir=\"ltr\">await</code> يُعامل كمهمة دقيقة:</p>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>async function run() {\n  console.log(&quot;أ&quot;);\n  await null;\n  console.log(&quot;ج&quot;);\n}\n\nrun();\nconsole.log(&quot;ب&quot;);</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>أ\nب\nج</code></pre></div>\n<h2>لماذا يهمك هذا عملياً؟</h2>\n<p><strong>لا تحجب المكدس:</strong> أي كود متزامن طويل (حلقة على مليون عنصر مثلاً) يجمّد الصفحة كاملة، فلا ضغطات ولا رسوم ولا مؤقتات، لأن حلقة الأحداث لا تستطيع العمل حتى يفرغ المكدس.</p>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>button.addEventListener(&quot;click&quot;, () =&gt; {\n  // ❌ يجمّد الصفحة عدة ثوانٍ\n  for (let i = 0; i &lt; 5_000_000_000; i++) {}\n});</code></pre></div>\n<p>الحلول: تقسيم العمل إلى أجزاء صغيرة بـ <code dir=\"ltr\">setTimeout</code>، أو نقله إلى <strong>Web Worker</strong> يعمل في خيط منفصل. (محرر CodeWay نفسه يشغّل كودك في Web Worker حتى لا تتجمد الصفحة!)</p>\n<h2>ملخص الدرس</h2>\n<ul><li>JavaScript تنفّذ شيئاً واحداً في كل لحظة على مكدس الاستدعاءات.</li><li>المؤقتات والأحداث تذهب لطابور المهام، والوعود لطابور المهام الدقيقة.</li><li>الترتيب: الكود المتزامن ← كل المهام الدقيقة (الوعود) ← مهمة واحدة (مؤقت) ← وتكرار.</li><li>الكود المتزامن الطويل يجمّد الصفحة.</li></ul>",
   "exercise": {
    "prompt": "<p>اكتب <strong>نفس</strong> الأسطر الخمسة الموجودة، لكن رتبها وغيّر أنواعها (متزامن أو <code dir=\"ltr\">Promise.resolve().then</code> أو <code dir=\"ltr\">setTimeout</code>) بحيث تُطبع الأرقام بالترتيب 1 ثم 2 ثم 3 ثم 4 ثم 5، مع الالتزام بالشروط:</p>\n<ul><li><code dir=\"ltr\">1</code> و <code dir=\"ltr\">2</code> تُطبعان بـ <code dir=\"ltr\">console.log</code> مباشرة.</li><li><code dir=\"ltr\">3</code> تُطبع داخل <code dir=\"ltr\">Promise.resolve().then(...)</code>.</li><li><code dir=\"ltr\">4</code> و <code dir=\"ltr\">5</code> تُطبعان داخل <code dir=\"ltr\">setTimeout(..., 0)</code>.</li><li>السطر الأول في الكود يجب أن يكون الـ setTimeout الخاص بالرقم 4.</li></ul>",
    "starter": "setTimeout(() => console.log(5), 0);\nconsole.log(2);\nPromise.resolve().then(() => console.log(4));\nsetTimeout(() => console.log(3), 0);\nconsole.log(1);",
    "expected": "1\n2\n3\n4\n5",
    "solution": "setTimeout(() => console.log(4), 0);\nconsole.log(1);\nPromise.resolve().then(() => console.log(3));\nsetTimeout(() => console.log(5), 0);\nconsole.log(2);"
   },
   "quiz": [
    {
     "q": "أيهما يُنفَّذ أولاً: <code dir=\"ltr\">setTimeout(fn, 0)</code> أم <code dir=\"ltr\">Promise.resolve().then(fn)</code>؟",
     "o": [
      "setTimeout لأنها كُتبت أولاً",
      "then، لأن طابور المهام الدقيقة له أولوية",
      "عشوائياً"
     ],
     "a": 1,
     "why": "حلقة الأحداث تفرغ كل المهام الدقيقة قبل أي مؤقت."
    },
    {
     "q": "لماذا تتجمد الصفحة عند تنفيذ حلقة متزامنة طويلة جداً؟",
     "o": [
      "لأن المكدس مشغول، فلا تستطيع حلقة الأحداث معالجة الضغطات أو الرسم",
      "لأن الذاكرة تمتلئ",
      "لأن المتصفح يوقف JavaScript"
     ],
     "a": 0,
     "why": "JavaScript تعمل على خيط واحد، وحلقة الأحداث تنتظر فراغ المكدس."
    },
    {
     "q": "ما الذي يحدث للكود بعد <code dir=\"ltr\">await</code> داخل دالة async؟",
     "o": [
      "يُنفَّذ فوراً",
      "يُجدول كمهمة دقيقة بعد انتهاء الكود المتزامن الحالي",
      "يُجدول كمؤقت"
     ],
     "a": 1,
     "why": "ما بعد await يُستأنف عبر طابور المهام الدقيقة."
    }
   ]
  },
  {
   "body": "<h2>الأخطاء جزء من البرمجة</h2>\n<p>لا يوجد برنامج بلا أخطاء. المهم ألا <strong>ينهار</strong> البرنامج كله بسبب خطأ واحد، وأن يُعرض للمستخدم ما يفهمه. لهذا نستخدم <code dir=\"ltr\">try...catch</code>.</p>\n<h2>بدون معالجة: البرنامج يتوقف</h2>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>console.log(&quot;قبل&quot;);\nconst data = JSON.parse(&quot;{خطأ}&quot;); // SyntaxError يوقف كل شيء\nconsole.log(&quot;بعد&quot;);               // لن يُطبع أبداً</code></pre></div>\n<h2>مع try...catch</h2>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>console.log(&quot;قبل&quot;);\ntry {\n  const data = JSON.parse(&quot;{خطأ}&quot;);\n  console.log(&quot;لن يُنفّذ هذا السطر&quot;);\n} catch (error) {\n  console.log(`حدث خطأ: ${error.name}`);\n}\nconsole.log(&quot;بعد، والبرنامج مستمر&quot;);</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>قبل\nحدث خطأ: SyntaxError\nبعد، والبرنامج مستمر</code></pre></div>\n<ul><li><code dir=\"ltr\">try</code>: الكود الذي قد يفشل. عند أول خطأ يتوقف ويقفز إلى <code dir=\"ltr\">catch</code>.</li><li><code dir=\"ltr\">catch (error)</code>: يُنفَّذ فقط عند حدوث خطأ، ويستقبل كائن الخطأ.</li><li><code dir=\"ltr\">finally</code> (اختياري): يُنفَّذ دائماً في الحالتين.</li></ul>\n<h2>كائن الخطأ</h2>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>try {\n  const user = null;\n  user.name;\n} catch (error) {\n  console.log(error.name);\n  console.log(error.message);\n  console.log(error instanceof TypeError);\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>TypeError\nCannot read properties of null (reading &#x27;name&#x27;)\ntrue</code></pre></div>\n<p>أشهر أنواع الأخطاء:</p>\n<div class=\"table-wrap\"><table><thead><tr><th>النوع</th><th>السبب الشائع</th></tr></thead><tbody><tr><td><code dir=\"ltr\">ReferenceError</code></td><td>استخدام متغير غير معرّف</td></tr><tr><td><code dir=\"ltr\">TypeError</code></td><td>استخدام قيمة بطريقة خاطئة، مثل استدعاء خاصية على <code dir=\"ltr\">null</code></td></tr><tr><td><code dir=\"ltr\">SyntaxError</code></td><td>كود أو JSON مكتوب بشكل خاطئ</td></tr><tr><td><code dir=\"ltr\">RangeError</code></td><td>قيمة خارج النطاق المسموح</td></tr></tbody></table></div>\n<h2>رمي الأخطاء بنفسك: throw</h2>\n<p>عندما تكتشف دالتك وضعاً غير صالح، ترمي خطأ بنفسها:</p>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>function withdraw(balance, amount) {\n  if (typeof amount !== &quot;number&quot; || amount &lt;= 0) {\n    throw new Error(&quot;المبلغ يجب أن يكون رقماً موجباً&quot;);\n  }\n  if (amount &gt; balance) {\n    throw new RangeError(`الرصيد غير كافٍ (المتاح ${balance})`);\n  }\n  return balance - amount;\n}\n\nfor (const amount of [50, -5, 900]) {\n  try {\n    console.log(`الرصيد الجديد: ${withdraw(200, amount)}`);\n  } catch (error) {\n    console.log(`${error.name}: ${error.message}`);\n  }\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>الرصيد الجديد: 150\nError: المبلغ يجب أن يكون رقماً موجباً\nRangeError: الرصيد غير كافٍ (المتاح 200)</code></pre></div>\n<h2>أخطاء مخصصة</h2>\n<p>بالوراثة من <code dir=\"ltr\">Error</code> يمكنك إنشاء أنواع أخطاء خاصة بتطبيقك، وتمييزها بـ <code dir=\"ltr\">instanceof</code>:</p>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>class ValidationError extends Error {\n  constructor(field, message) {\n    super(message);\n    this.name = &quot;ValidationError&quot;;\n    this.field = field;\n  }\n}\n\nfunction register(email) {\n  if (!email.includes(&quot;@&quot;)) {\n    throw new ValidationError(&quot;email&quot;, &quot;البريد الإلكتروني غير صالح&quot;);\n  }\n  return &quot;تم التسجيل&quot;;\n}\n\ntry {\n  register(&quot;ali.mail.com&quot;);\n} catch (error) {\n  if (error instanceof ValidationError) {\n    console.log(`خطأ في الحقل ${error.field}: ${error.message}`);\n  } else {\n    throw error;\n  }\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>خطأ في الحقل email: البريد الإلكتروني غير صالح</code></pre></div>\n<p>لاحظ <code dir=\"ltr\">else { throw error; }</code>: نعالج الأخطاء التي <strong>نتوقعها</strong> فقط، ونعيد رمي غيرها، حتى لا نخفي أخطاء برمجية حقيقية.</p>\n<h2>نصائح احترافية</h2>\n<ul><li>لا تكتب <code dir=\"ltr\">catch</code> فارغة تبتلع الخطأ بصمت. على الأقل سجّله بـ <code dir=\"ltr\">console.error</code>.</li><li>لا تغلّف كل الكود بـ <code dir=\"ltr\">try</code>. استخدمها حول العمليات التي <strong>قد تفشل فعلاً</strong>: تحليل JSON، والطلبات، ومدخلات المستخدم.</li><li>رسالة الخطأ للمطور يجب أن تكون دقيقة، ورسالة المستخدم يجب أن تكون بسيطة ومفيدة.</li></ul>\n<h2>ملخص الدرس</h2>\n<ul><li><code dir=\"ltr\">try...catch</code> يمنع انهيار البرنامج ويعالج الخطأ.</li><li>كائن الخطأ فيه <code dir=\"ltr\">name</code> و <code dir=\"ltr\">message</code>.</li><li><code dir=\"ltr\">throw new Error(&quot;...&quot;)</code> لرمي خطأ عند وضع غير صالح.</li><li>الأخطاء المخصصة بـ <code dir=\"ltr\">extends Error</code> و <code dir=\"ltr\">instanceof</code> لتمييزها.</li></ul>",
   "exercise": {
    "prompt": "<p>اكتب دالة <code dir=\"ltr\">parseAge(input)</code>:</p>\n<ul><li>إذا لم يكن <code dir=\"ltr\">input</code> رقماً صالحاً (<code dir=\"ltr\">Number(input)</code> تعطي <code dir=\"ltr\">NaN</code>)، ترمي <code dir=\"ltr\">TypeError</code> برسالة <code dir=\"ltr\">القيمة ليست رقماً</code>.</li><li>إذا كان الرقم أقل من 0 أو أكبر من 120، ترمي <code dir=\"ltr\">RangeError</code> برسالة <code dir=\"ltr\">العمر خارج النطاق</code>.</li><li>غير ذلك تُرجع الرقم.</li></ul>\n<p>الحلقة في الأسفل تستدعي الدالة داخل <code dir=\"ltr\">try...catch</code> وتطبع النتيجة، لا تعدّلها.</p>",
    "starter": "function parseAge(input) {\n  // أكمل هنا\n}\n\nfor (const value of [\"30\", \"abc\", \"150\"]) {\n  try {\n    console.log(`العمر: ${parseAge(value)}`);\n  } catch (error) {\n    console.log(`${error.name}: ${error.message}`);\n  }\n}",
    "expected": "العمر: 30\nTypeError: القيمة ليست رقماً\nRangeError: العمر خارج النطاق",
    "solution": "function parseAge(input) {\n  const age = Number(input);\n  if (Number.isNaN(age)) {\n    throw new TypeError(\"القيمة ليست رقماً\");\n  }\n  if (age < 0 || age > 120) {\n    throw new RangeError(\"العمر خارج النطاق\");\n  }\n  return age;\n}\n\nfor (const value of [\"30\", \"abc\", \"150\"]) {\n  try {\n    console.log(`العمر: ${parseAge(value)}`);\n  } catch (error) {\n    console.log(`${error.name}: ${error.message}`);\n  }\n}"
   },
   "quiz": [
    {
     "q": "متى يُنفَّذ كود <code dir=\"ltr\">finally</code>؟",
     "o": [
      "عند النجاح فقط",
      "عند الخطأ فقط",
      "دائماً، سواء حدث خطأ أم لا"
     ],
     "a": 2,
     "why": "finally مناسبة لأعمال التنظيف مثل إخفاء مؤشر التحميل."
    },
    {
     "q": "ما نوع الخطأ عند كتابة <code dir=\"ltr\">null.length</code>؟",
     "o": [
      "ReferenceError",
      "TypeError",
      "SyntaxError"
     ],
     "a": 1,
     "why": "استخدام قيمة null أو undefined كأنها كائن يسبب TypeError."
    },
    {
     "q": "لماذا نعيد رمي الخطأ <code dir=\"ltr\">throw error</code> في catch إذا لم يكن من النوع المتوقع؟",
     "o": [
      "حتى لا نخفي أخطاء برمجية حقيقية لم نخطط لمعالجتها",
      "لتسريع البرنامج",
      "لأن catch لا تقبل إلا نوعاً واحداً"
     ],
     "a": 0,
     "why": "معالجة كل الأخطاء بنفس الطريقة قد تخفي مشاكل خطيرة."
    }
   ]
  },
  {
   "body": "<h2>تذكّر بيانات المستخدم</h2>\n<p>عندما يحدّث المستخدم الصفحة، تختفي كل المتغيرات. فكيف يتذكر الموقع أن المستخدم اختار الوضع الليلي، أو ما في سلة مشترياته؟ أحد الحلول: <strong>التخزين المحلي (localStorage)</strong>، وهو مساحة تخزين صغيرة في متصفح المستخدم تبقى حتى بعد إغلاق المتصفح.</p>\n<h2>الأساسيات</h2>\n<div class=\"code-block src\"><span class=\"code-label\">HTML</span><pre dir=\"ltr\"><code>&lt;p id=&quot;out&quot;&gt;&lt;/p&gt;</code></pre></div>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>localStorage.setItem(&quot;theme&quot;, &quot;dark&quot;);\nlocalStorage.setItem(&quot;lang&quot;, &quot;ar&quot;);\n\nconsole.log(localStorage.getItem(&quot;theme&quot;));\nconsole.log(localStorage.getItem(&quot;missing&quot;));\nconsole.log(localStorage.length);\n\nlocalStorage.removeItem(&quot;lang&quot;);\nconsole.log(localStorage.length);</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>dark\nnull\n2\n1</code></pre></div>\n<div class=\"table-wrap\"><table><thead><tr><th>الدالة</th><th>وظيفتها</th></tr></thead><tbody><tr><td><code dir=\"ltr\">setItem(key, value)</code></td><td>حفظ قيمة</td></tr><tr><td><code dir=\"ltr\">getItem(key)</code></td><td>قراءة قيمة، أو <code dir=\"ltr\">null</code> إن لم توجد</td></tr><tr><td><code dir=\"ltr\">removeItem(key)</code></td><td>حذف قيمة</td></tr><tr><td><code dir=\"ltr\">clear()</code></td><td>حذف كل شيء</td></tr></tbody></table></div>\n<h2>localStorage يخزّن نصوصاً فقط</h2>\n<div class=\"code-block src\"><span class=\"code-label\">HTML</span><pre dir=\"ltr\"><code>&lt;p&gt;&lt;/p&gt;</code></pre></div>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>localStorage.setItem(&quot;count&quot;, 5);\nconsole.log(typeof localStorage.getItem(&quot;count&quot;));\n\nlocalStorage.setItem(&quot;user&quot;, { name: &quot;علي&quot; });\nconsole.log(localStorage.getItem(&quot;user&quot;));</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>string\n[object Object]</code></pre></div>\n<p>الرقم أصبح نصاً، والكائن ضاع تماماً! الحل هو JSON الذي تعلمناه:</p>\n<div class=\"code-block src\"><span class=\"code-label\">HTML</span><pre dir=\"ltr\"><code>&lt;p&gt;&lt;/p&gt;</code></pre></div>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>const cart = [{ id: 1, name: &quot;قلم&quot;, qty: 2 }];\nlocalStorage.setItem(&quot;cart&quot;, JSON.stringify(cart));\n\nconst saved = JSON.parse(localStorage.getItem(&quot;cart&quot;));\nconsole.log(saved[0].name, saved[0].qty);</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>قلم 2</code></pre></div>\n<h2>النمط الآمن للقراءة</h2>\n<p>قد تكون القيمة غير موجودة، أو تالفة، أو قد يكون التخزين معطلاً في التصفح الخاص. لذلك نكتب دالة قراءة آمنة:</p>\n<div class=\"code-block src\"><span class=\"code-label\">HTML</span><pre dir=\"ltr\"><code>&lt;p&gt;&lt;/p&gt;</code></pre></div>\n<div class=\"code-block src\"><span class=\"code-label\">JavaScript</span><pre dir=\"ltr\"><code>function load(key, fallback) {\n  try {\n    const raw = localStorage.getItem(key);\n    return raw === null ? fallback : JSON.parse(raw);\n  } catch {\n    return fallback;\n  }\n}\n\nfunction save(key, value) {\n  try {\n    localStorage.setItem(key, JSON.stringify(value));\n  } catch {\n    // التخزين ممتلئ أو معطّل، نتجاهل بهدوء\n  }\n}\n\nlocalStorage.setItem(&quot;broken&quot;, &quot;{not json&quot;);\nconsole.log(load(&quot;settings&quot;, { theme: &quot;light&quot; }).theme);\nconsole.log(load(&quot;broken&quot;, &quot;قيمة احتياطية&quot;));\nsave(&quot;score&quot;, 42);\nconsole.log(load(&quot;score&quot;, 0) + 8);</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>light\nقيمة احتياطية\n50</code></pre></div>\n<div class=\"callout tip\">💡 منصة CodeWay نفسها تستخدم هذا النمط بالضبط لحفظ تقدّمك في الدروس وكودك في التمارين!</div>\n<h2>sessionStorage</h2>\n<p>نفس الدوال تماماً، لكن البيانات تُحذف عند <strong>إغلاق التبويب</strong>. مناسبة لبيانات مؤقتة مثل خطوات نموذج طويل.</p>\n<h2>ما لا يجب تخزينه</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>مناسب</th><th>غير مناسب</th></tr></thead><tbody><tr><td>تفضيلات الواجهة (الوضع، اللغة)</td><td>كلمات المرور</td></tr><tr><td>مسودة نص لم يُرسل</td><td>بيانات بطاقات الدفع</td></tr><tr><td>سلة مشتريات زائر</td><td>رموز الدخول الحساسة إن أمكن تجنبها</td></tr><tr><td>تقدّم في درس</td><td>البيانات التي يجب أن تُشارك بين الأجهزة</td></tr></tbody></table></div>\n<div class=\"callout warn\">⚠️ أي كود JavaScript في الصفحة يستطيع قراءة localStorage، والمساحة محدودة بحوالي 5 ميجابايت، والبيانات موجودة على جهاز واحد فقط. البيانات المهمة مكانها الخادم.</div>\n<h2>ملخص الدرس</h2>\n<ul><li><code dir=\"ltr\">localStorage</code> تخزين دائم في المتصفح، و <code dir=\"ltr\">sessionStorage</code> حتى إغلاق التبويب.</li><li>يخزّن نصوصاً فقط، فاستخدم <code dir=\"ltr\">JSON.stringify</code> و <code dir=\"ltr\">JSON.parse</code> للكائنات.</li><li>احمِ القراءة بـ <code dir=\"ltr\">try...catch</code> وقيمة احتياطية.</li><li>لا تخزّن بيانات حساسة.</li></ul>",
   "exercise": {
    "prompt": "<p>ابنِ قائمة مفضلات تُحفظ في <code dir=\"ltr\">localStorage</code> تحت المفتاح <code dir=\"ltr\">favorites</code>:</p>\n<ol><li>اكتب دالة <code dir=\"ltr\">getFavorites()</code> تُرجع المصفوفة المحفوظة، أو مصفوفة فارغة إذا لم يوجد شيء.</li><li>اكتب دالة <code dir=\"ltr\">addFavorite(item)</code> تقرأ القائمة، وتضيف العنصر <strong>إذا لم يكن موجوداً</strong>، ثم تحفظها.</li><li>أسطر الاختبار في الأسفل تضيف عناصر (أحدها مكرر) وتطبع النتيجة، لا تعدّلها.</li></ol>",
    "html": "<p>⭐ مفضلاتي محفوظة في التخزين المحلي</p>",
    "starter": "function getFavorites() {\n  // أكمل هنا\n}\n\nfunction addFavorite(item) {\n  // أكمل هنا\n}\n\n// --- اختبار (لا تعدّل) ---\nlocalStorage.clear();\nconsole.log(getFavorites().length);\naddFavorite(\"JavaScript\");\naddFavorite(\"CSS\");\naddFavorite(\"JavaScript\");\nconsole.log(getFavorites());\nconsole.log(localStorage.getItem(\"favorites\"));",
    "expected": "0\n[\"JavaScript\",\"CSS\"]\n[\"JavaScript\",\"CSS\"]",
    "solution": "function getFavorites() {\n  try {\n    return JSON.parse(localStorage.getItem(\"favorites\")) || [];\n  } catch {\n    return [];\n  }\n}\n\nfunction addFavorite(item) {\n  const list = getFavorites();\n  if (!list.includes(item)) {\n    list.push(item);\n    localStorage.setItem(\"favorites\", JSON.stringify(list));\n  }\n}\n\n// --- اختبار (لا تعدّل) ---\nlocalStorage.clear();\nconsole.log(getFavorites().length);\naddFavorite(\"JavaScript\");\naddFavorite(\"CSS\");\naddFavorite(\"JavaScript\");\nconsole.log(getFavorites());\nconsole.log(localStorage.getItem(\"favorites\"));"
   },
   "quiz": [
    {
     "q": "ماذا يُرجع <code dir=\"ltr\">localStorage.getItem(&quot;x&quot;)</code> إذا لم يكن المفتاح موجوداً؟",
     "o": [
      "<code dir=\"ltr\">undefined</code>",
      "<code dir=\"ltr\">null</code>",
      "<code dir=\"ltr\">&quot;&quot;</code>"
     ],
     "a": 1,
     "why": "getItem تُرجع null للمفاتيح غير الموجودة."
    },
    {
     "q": "كيف تحفظ مصفوفة في localStorage بشكل صحيح؟",
     "o": [
      "<code dir=\"ltr\">setItem(&quot;list&quot;, arr)</code>",
      "<code dir=\"ltr\">setItem(&quot;list&quot;, JSON.stringify(arr))</code>",
      "<code dir=\"ltr\">setItem(arr)</code>"
     ],
     "a": 1,
     "why": "localStorage يخزّن نصوصاً فقط، فنحوّل المصفوفة لنص JSON."
    },
    {
     "q": "ما الفرق بين localStorage و sessionStorage؟",
     "o": [
      "بيانات sessionStorage تُحذف عند إغلاق التبويب، و localStorage تبقى",
      "sessionStorage أكبر حجماً",
      "localStorage للأرقام فقط"
     ],
     "a": 0,
     "why": "كلاهما بنفس الدوال، والفرق في مدة بقاء البيانات."
    }
   ]
  }
 ]
], {"runner": "js"});
