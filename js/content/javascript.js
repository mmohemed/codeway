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
 ]
]);
