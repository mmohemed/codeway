// ملف مولَّد من content/kotlin عبر tools/build.py، لا تعدّله يدوياً
CW.registerContent("kotlin", [
 [
  {
   "body": "<h2>لغة Android الرسمية</h2>\n<p><strong>Kotlin</strong> لغة حديثة طورتها شركة JetBrains عام 2011، وأعلنتها Google عام 2019 <strong>اللغة المفضلة لتطوير Android</strong>. اليوم أكثر من 95% من أفضل تطبيقات Android تستخدمها، وتُستخدم أيضاً في الخوادم (مع Spring Boot) وفي التطبيقات متعددة المنصات (Kotlin Multiplatform).</p>\n<p>لماذا يحبها المطورون؟</p>\n<ul><li><strong>مختصرة:</strong> تكتب أقل بكثير مما تكتبه في Java لنفس النتيجة.</li><li><strong>آمنة:</strong> نظام يحميك من أخطاء <code dir=\"ltr\">null</code> الشهيرة.</li><li><strong>متوافقة مع Java:</strong> تستخدم أي مكتبة Java مباشرة.</li><li><strong>حديثة:</strong> دوال مجهولة، و Coroutines للبرمجة غير المتزامنة، ودوال امتداد.</li></ul>\n<h2>أول برنامج</h2>\n<div class=\"code-block src\"><span class=\"code-label\">Kotlin</span><pre dir=\"ltr\"><code>fun main() {\n    println(&quot;مرحباً بالعالم!&quot;)\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>مرحباً بالعالم!</code></pre></div>\n<ul><li><code dir=\"ltr\">fun</code> تعريف دالة، و <code dir=\"ltr\">main</code> نقطة بداية البرنامج.</li><li><code dir=\"ltr\">println</code> تطبع ثم تنتقل لسطر جديد، و <code dir=\"ltr\">print</code> تطبع دون سطر جديد.</li><li><strong>لا حاجة للفاصلة المنقوطة</strong> في نهاية الأسطر.</li></ul>\n<h2>الطباعة والقوالب النصية</h2>\n<div class=\"code-block src\"><span class=\"code-label\">Kotlin</span><pre dir=\"ltr\"><code>fun main() {\n    val language = &quot;Kotlin&quot;\n    val year = 2011\n    println(&quot;أتعلم $language&quot;)\n    println(&quot;عمرها ${2026 - year} سنة&quot;)\n    print(&quot;بدون &quot;)\n    print(&quot;سطر جديد&quot;)\n    println()\n    println(&quot;عدد الأحرف: ${language.length}&quot;)\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>أتعلم Kotlin\nعمرها 15 سنة\nبدون سطر جديد\nعدد الأحرف: 6</code></pre></div>\n<p><code dir=\"ltr\">$name</code> لإدراج متغير في النص، و <code dir=\"ltr\">${...}</code> لأي تعبير.</p>\n<h2>التعليقات</h2>\n<div class=\"code-block src\"><span class=\"code-label\">Kotlin</span><pre dir=\"ltr\"><code>fun main() {\n    // تعليق من سطر واحد\n    /* تعليق\n       من عدة أسطر */\n    println(&quot;التعليقات لا تُطبع&quot;) // تعليق بعد الكود\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>التعليقات لا تُطبع</code></pre></div>\n<h2>أين تكتب Kotlin؟</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>الأداة</th><th>الاستخدام</th></tr></thead><tbody><tr><td><strong>محرر CodeWay</strong></td><td>تمارين هذه الدورة</td></tr><tr><td><strong>play.kotlinlang.org</strong></td><td>محرر Kotlin الرسمي في المتصفح</td></tr><tr><td><strong>IntelliJ IDEA</strong></td><td>مشاريع Kotlin والخوادم (من JetBrains نفسها)</td></tr><tr><td><strong>Android Studio</strong></td><td>تطبيقات Android</td></tr></tbody></table></div>\n<div class=\"callout tip\">💡 محرر CodeWay يرسل كودك إلى خدمة Kotlin Playground الرسمية فتترجمه وتشغّله على خوادم JetBrains، لذلك يحتاج اتصالاً بالإنترنت، وقد تستغرق كل عملية تشغيل ثانيتين أو ثلاثاً.</div>\n<h2>ملخص الدرس</h2>\n<ul><li>Kotlin لغة Android الرسمية، وتُستخدم في الخوادم أيضاً.</li><li>كل برنامج يبدأ من <code dir=\"ltr\">fun main()</code>.</li><li><code dir=\"ltr\">println</code> للطباعة، والفاصلة المنقوطة غير مطلوبة.</li><li><code dir=\"ltr\">$name</code> و <code dir=\"ltr\">${expr}</code> لإدراج القيم في النصوص.</li></ul>",
   "exercise": {
    "prompt": "<p>اكتب برنامجاً يطبع ثلاثة أسطر:</p>\n<ol><li><code dir=\"ltr\">أهلاً بك في Kotlin</code></li><li>ناتج <code dir=\"ltr\">15 * 4</code> داخل نص بالشكل: <code dir=\"ltr\">الناتج: 60</code></li><li><code dir=\"ltr\">جاهز لتطوير Android!</code></li></ol>",
    "starter": "fun main() {\n    // اكتب هنا\n}",
    "expected": "أهلاً بك في Kotlin\nالناتج: 60\nجاهز لتطوير Android!",
    "solution": "fun main() {\n    println(\"أهلاً بك في Kotlin\")\n    println(\"الناتج: ${15 * 4}\")\n    println(\"جاهز لتطوير Android!\")\n}"
   },
   "quiz": [
    {
     "q": "من أين يبدأ تنفيذ برنامج Kotlin؟",
     "o": [
      "من الدالة <code dir=\"ltr\">main</code>",
      "من أول سطر في الملف",
      "من الصنف الأول"
     ],
     "a": 0,
     "why": "fun main() نقطة الدخول."
    },
    {
     "q": "هل الفاصلة المنقوطة مطلوبة في نهاية الأسطر في Kotlin؟",
     "o": [
      "نعم دائماً",
      "لا، هي اختيارية",
      "فقط في الدوال"
     ],
     "a": 1,
     "why": "Kotlin لا تحتاجها في الغالب."
    },
    {
     "q": "كيف تُدرج قيمة تعبير <code dir=\"ltr\">a + b</code> داخل نص؟",
     "o": [
      "<code dir=\"ltr\">&quot;${a + b}&quot;</code>",
      "<code dir=\"ltr\">&quot;$a + b&quot;</code>",
      "<code dir=\"ltr\">&quot;{a + b}&quot;</code>"
     ],
     "a": 0,
     "why": "${} لأي تعبير، و $ وحدها لاسم متغير بسيط."
    }
   ]
  },
  {
   "body": "<h2>val و var</h2>\n<p>في Kotlin نوعان من المتغيرات:</p>\n<div class=\"code-block src\"><span class=\"code-label\">Kotlin</span><pre dir=\"ltr\"><code>fun main() {\n    val name = &quot;ريم&quot;\n    var score = 10\n    score += 5\n    println(&quot;$name: $score&quot;)\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>ريم: 15</code></pre></div>\n<div class=\"table-wrap\"><table><thead><tr><th>الكلمة</th><th>المعنى</th></tr></thead><tbody><tr><td><code dir=\"ltr\">val</code></td><td>قيمة <strong>لا يمكن إعادة إسنادها</strong> (من value)</td></tr><tr><td><code dir=\"ltr\">var</code></td><td>متغير <strong>يمكن تغييره</strong> (من variable)</td></tr></tbody></table></div>\n<div class=\"code-block src\"><span class=\"code-label\">Kotlin</span><pre dir=\"ltr\"><code>fun main() {\n    val pi = 3.14\n    pi = 3.0\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><div class=\"out-errs\"><div class=\"sql-err\" dir=\"ltr\">⚠️ line 3: &#x27;val&#x27; cannot be reassigned.</div></div></div>\n<div class=\"callout tip\">💡 القاعدة في Kotlin: استخدم <code dir=\"ltr\">val</code> دائماً، وانتقل إلى <code dir=\"ltr\">var</code> فقط عندما تحتاج التغيير فعلاً. هذا يجعل الكود أوضح وأكثر أماناً.</div>\n<h2>الأنواع</h2>\n<p>Kotlin تستنتج النوع تلقائياً، ويمكنك كتابته صراحة بعد نقطتين:</p>\n<div class=\"code-block src\"><span class=\"code-label\">Kotlin</span><pre dir=\"ltr\"><code>fun main() {\n    val age: Int = 25\n    val price: Double = 19.99\n    val initial: Char = &#x27;K&#x27;\n    val isActive: Boolean = true\n    val city: String = &quot;جدة&quot;\n    val bigNumber: Long = 8_000_000_000\n\n    println(&quot;$age $price $initial $isActive $city $bigNumber&quot;)\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>25 19.99 K true جدة 8000000000</code></pre></div>\n<div class=\"table-wrap\"><table><thead><tr><th>النوع</th><th>يخزّن</th></tr></thead><tbody><tr><td><code dir=\"ltr\">Int</code></td><td>أعداد صحيحة (حتى حوالي 2 مليار)</td></tr><tr><td><code dir=\"ltr\">Long</code></td><td>أعداد صحيحة كبيرة</td></tr><tr><td><code dir=\"ltr\">Double</code></td><td>أعداد عشرية</td></tr><tr><td><code dir=\"ltr\">Float</code></td><td>أعداد عشرية بدقة أقل، تنتهي بـ <code dir=\"ltr\">f</code></td></tr><tr><td><code dir=\"ltr\">Boolean</code></td><td><code dir=\"ltr\">true</code> أو <code dir=\"ltr\">false</code></td></tr><tr><td><code dir=\"ltr\">Char</code></td><td>حرف واحد بين <code dir=\"ltr\">&#x27; &#x27;</code></td></tr><tr><td><code dir=\"ltr\">String</code></td><td>نص بين <code dir=\"ltr\">&quot; &quot;</code></td></tr></tbody></table></div>\n<p>النوع ثابت بعد التعريف:</p>\n<div class=\"code-block src\"><span class=\"code-label\">Kotlin</span><pre dir=\"ltr\"><code>fun main() {\n    var count = 5\n    count = &quot;خمسة&quot;\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><div class=\"out-errs\"><div class=\"sql-err\" dir=\"ltr\">⚠️ line 3: assignment type mismatch: actual type is &#x27;String&#x27;, but &#x27;Int&#x27; was expected.</div></div></div>\n<h2>العمليات والتحويل</h2>\n<div class=\"code-block src\"><span class=\"code-label\">Kotlin</span><pre dir=\"ltr\"><code>fun main() {\n    println(17 / 5)\n    println(17 % 5)\n    println(17.0 / 5)\n    println(17 / 5.0)\n\n    val text = &quot;42&quot;\n    val number = text.toInt()\n    println(number + 8)\n    println(&quot;3.5&quot;.toDouble() * 2)\n    println(100.toString() + &quot;!&quot;)\n    println(&quot;abc&quot;.toIntOrNull())\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>3\n2\n3.4\n3.4\n50\n7.0\n100!\nnull</code></pre></div>\n<ul><li>قسمة عددين صحيحين <code dir=\"ltr\">17 / 5</code> تعطي عدداً صحيحاً <code dir=\"ltr\">3</code>. لنتيجة عشرية اجعل أحدهما <code dir=\"ltr\">Double</code>.</li><li><code dir=\"ltr\">toInt()</code> و <code dir=\"ltr\">toDouble()</code> و <code dir=\"ltr\">toString()</code> للتحويل.</li><li><code dir=\"ltr\">toIntOrNull()</code> تُرجع <code dir=\"ltr\">null</code> بدل الانهيار إذا لم يكن النص رقماً.</li></ul>\n<h2>النصوص متعددة الأسطر</h2>\n<div class=\"code-block src\"><span class=\"code-label\">Kotlin</span><pre dir=\"ltr\"><code>fun main() {\n    val poem = &quot;&quot;&quot;\n        السطر الأول\n        السطر الثاني\n    &quot;&quot;&quot;.trimIndent()\n    println(poem)\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>السطر الأول\nالسطر الثاني</code></pre></div>\n<h2>ملخص الدرس</h2>\n<ul><li><code dir=\"ltr\">val</code> للثوابت (المفضلة)، و <code dir=\"ltr\">var</code> للمتغيرات.</li><li>الأنواع: <code dir=\"ltr\">Int</code> و <code dir=\"ltr\">Long</code> و <code dir=\"ltr\">Double</code> و <code dir=\"ltr\">Boolean</code> و <code dir=\"ltr\">Char</code> و <code dir=\"ltr\">String</code>، وتُستنتج تلقائياً.</li><li>قسمة الأعداد الصحيحة تُرجع عدداً صحيحاً.</li><li><code dir=\"ltr\">toInt()</code> و <code dir=\"ltr\">toIntOrNull()</code> و <code dir=\"ltr\">toString()</code> للتحويل.</li></ul>",
   "exercise": {
    "prompt": "<p>لديك نص يحتوي سعراً <code dir=\"ltr\">&quot;250&quot;</code> وكمية <code dir=\"ltr\">3</code>:</p>\n<ol><li>حوّل السعر إلى <code dir=\"ltr\">Int</code> في <code dir=\"ltr\">val</code> اسمه <code dir=\"ltr\">price</code>.</li><li>احسب الإجمالي في <code dir=\"ltr\">val</code> اسمه <code dir=\"ltr\">total</code>.</li><li>استخدم <code dir=\"ltr\">var</code> اسمه <code dir=\"ltr\">budget</code> قيمته <code dir=\"ltr\">1000</code>، واطرح منه الإجمالي.</li><li>اطبع: <code dir=\"ltr\">الإجمالي: 750، المتبقي: 250</code></li></ol>",
    "starter": "fun main() {\n    val priceText = \"250\"\n    val quantity = 3\n    // أكمل هنا\n}",
    "expected": "الإجمالي: 750، المتبقي: 250",
    "solution": "fun main() {\n    val priceText = \"250\"\n    val quantity = 3\n    val price = priceText.toInt()\n    val total = price * quantity\n    var budget = 1000\n    budget -= total\n    println(\"الإجمالي: $total، المتبقي: $budget\")\n}"
   },
   "quiz": [
    {
     "q": "ما الفرق بين val و var؟",
     "o": [
      "val لا يمكن إعادة إسنادها، و var يمكن تغييرها",
      "val للأرقام و var للنصوص",
      "لا فرق"
     ],
     "a": 0,
     "why": "استخدم val افتراضياً."
    },
    {
     "q": "ما ناتج <code dir=\"ltr\">7 / 2</code> في Kotlin؟",
     "o": [
      "3",
      "3.5",
      "4"
     ],
     "a": 0,
     "why": "قسمة عددين صحيحين تُرجع عدداً صحيحاً."
    },
    {
     "q": "ماذا تُرجع <code dir=\"ltr\">&quot;xyz&quot;.toIntOrNull()</code>؟",
     "o": [
      "0",
      "null",
      "خطأ"
     ],
     "a": 1,
     "why": "بدل الانهيار تُرجع null."
    }
   ]
  },
  {
   "body": "<h2>وداعاً لـ NullPointerException</h2>\n<p>أشهر خطأ في عالم Java هو <code dir=\"ltr\">NullPointerException</code>: محاولة استخدام شيء غير موجود. Kotlin تحل هذه المشكلة في <strong>نظام الأنواع نفسه</strong>.</p>\n<h2>الأنواع لا تقبل null افتراضياً</h2>\n<div class=\"code-block src\"><span class=\"code-label\">Kotlin</span><pre dir=\"ltr\"><code>fun main() {\n    var name: String = &quot;سلمى&quot;\n    name = null\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><div class=\"out-errs\"><div class=\"sql-err\" dir=\"ltr\">⚠️ line 3: null cannot be a value of a non-null type &#x27;String&#x27;.</div></div></div>\n<p><code dir=\"ltr\">String</code> في Kotlin تعني &quot;نص موجود دائماً&quot;. لذلك <code dir=\"ltr\">name.length</code> آمن تماماً ولن ينهار أبداً.</p>\n<h2>الأنواع القابلة لـ null: ?</h2>\n<div class=\"code-block src\"><span class=\"code-label\">Kotlin</span><pre dir=\"ltr\"><code>fun main() {\n    var nickname: String? = null\n    println(nickname)\n    nickname = &quot;أبو خالد&quot;\n    println(nickname)\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>null\nأبو خالد</code></pre></div>\n<h2>المترجم يمنعك من الخطأ</h2>\n<div class=\"code-block src\"><span class=\"code-label\">Kotlin</span><pre dir=\"ltr\"><code>fun main() {\n    val email: String? = null\n    println(email.length)\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><div class=\"out-errs\"><div class=\"sql-err\" dir=\"ltr\">⚠️ line 3: only safe (?.) or non-null asserted (!!.) calls are allowed on a nullable receiver of type &#x27;String?&#x27;.</div></div></div>\n<p>يجب التعامل مع احتمال null أولاً. ولديك أدوات أنيقة:</p>\n<h2>الاستدعاء الآمن ?.</h2>\n<div class=\"code-block src\"><span class=\"code-label\">Kotlin</span><pre dir=\"ltr\"><code>fun main() {\n    val city: String? = null\n    println(city?.length)\n\n    val country: String? = &quot;السعودية&quot;\n    println(country?.length)\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>null\n8</code></pre></div>\n<p><code dir=\"ltr\">?.</code> تعني: إذا كانت القيمة null أرجع null، وإلا نفّذ.</p>\n<h2>عامل إلفيس ?:</h2>\n<div class=\"code-block src\"><span class=\"code-label\">Kotlin</span><pre dir=\"ltr\"><code>fun main() {\n    val username: String? = null\n    val display = username ?: &quot;زائر&quot;\n    println(&quot;مرحباً $display&quot;)\n\n    val input: String? = &quot;abc&quot;\n    val age = input?.toIntOrNull() ?: 0\n    println(age)\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>مرحباً زائر\n0</code></pre></div>\n<p><code dir=\"ltr\">a ?: b</code> تُرجع <code dir=\"ltr\">a</code> إن لم تكن null، وإلا <code dir=\"ltr\">b</code>. اسمه من شكله الذي يشبه تسريحة شعر إلفيس بريسلي <code dir=\"ltr\">?:</code></p>\n<h2>الفحص بـ if: التحويل الذكي</h2>\n<div class=\"code-block src\"><span class=\"code-label\">Kotlin</span><pre dir=\"ltr\"><code>fun main() {\n    val text: String? = &quot;Kotlin&quot;\n    if (text != null) {\n        println(text.uppercase())\n    }\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>KOTLIN</code></pre></div>\n<p>بعد <code dir=\"ltr\">if (text != null)</code>، يعرف المترجم أن <code dir=\"ltr\">text</code> ليس null داخل الكتلة، فيحوّل نوعه تلقائياً إلى <code dir=\"ltr\">String</code>. هذا يسمى <strong>Smart Cast</strong>.</p>\n<h2>let مع ?.</h2>\n<div class=\"code-block src\"><span class=\"code-label\">Kotlin</span><pre dir=\"ltr\"><code>fun main() {\n    val phone: String? = &quot;0500000000&quot;\n    phone?.let { println(&quot;سنرسل رسالة إلى $it&quot;) }\n\n    val missing: String? = null\n    missing?.let { println(&quot;لن يُطبع هذا&quot;) }\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>سنرسل رسالة إلى 0500000000</code></pre></div>\n<p><code dir=\"ltr\">?.let { }</code> تنفّذ الكتلة فقط إذا لم تكن القيمة null، و <code dir=\"ltr\">it</code> هي القيمة داخل الكتلة.</p>\n<h2>عامل التأكيد !! (احذره)</h2>\n<div class=\"code-block src\"><span class=\"code-label\">Kotlin</span><pre dir=\"ltr\"><code>fun main() {\n    val token: String? = null\n    println(token!!.length)\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><div class=\"out-errs\"><div class=\"sql-err\" dir=\"ltr\">⚠️ Exception: java.lang.NullPointerException</div></div></div>\n<p><code dir=\"ltr\">!!</code> تقول: &quot;أنا متأكد أنها ليست null&quot;. وإذا كنت مخطئاً، ينهار البرنامج بـ <code dir=\"ltr\">NullPointerException</code>.</p>\n<div class=\"callout warn\">⚠️ وجود <code dir=\"ltr\">!!</code> في الكود علامة تحذير. في الغالب يوجد حل أفضل بـ <code dir=\"ltr\">?.</code> أو <code dir=\"ltr\">?:</code> أو <code dir=\"ltr\">if</code>.</div>\n<h2>ملخص الدرس</h2>\n<ul><li>الأنواع لا تقبل null إلا مع <code dir=\"ltr\">?</code>: <code dir=\"ltr\">String?</code>.</li><li><code dir=\"ltr\">?.</code> استدعاء آمن، و <code dir=\"ltr\">?:</code> قيمة بديلة (إلفيس).</li><li><code dir=\"ltr\">if (x != null)</code> يحوّل النوع تلقائياً (Smart Cast).</li><li><code dir=\"ltr\">?.let { }</code> لتنفيذ كود عند وجود القيمة فقط، و <code dir=\"ltr\">!!</code> خطيرة.</li></ul>",
   "exercise": {
    "prompt": "<p>اكتب دالة <code dir=\"ltr\">greeting</code> تستقبل اسماً قد يكون <code dir=\"ltr\">null</code> (<code dir=\"ltr\">String?</code>) وتُرجع نصاً:</p>\n<ul><li>إذا كان الاسم موجوداً: <code dir=\"ltr\">مرحباً يا X (N أحرف)</code></li><li>إذا كان null: <code dir=\"ltr\">مرحباً يا ضيف</code></li></ul>\n<p>استخدم <code dir=\"ltr\">?.</code> و <code dir=\"ltr\">?:</code> أو <code dir=\"ltr\">if</code>.</p>",
    "starter": "fun greeting(name: String?): String {\n    return \"مرحباً يا \" + name.length\n}\n\nfun main() {\n    println(greeting(\"سلطان\"))\n    println(greeting(null))\n}",
    "expected": "مرحباً يا سلطان (5 أحرف)\nمرحباً يا ضيف",
    "solution": "fun greeting(name: String?): String {\n    return if (name != null) \"مرحباً يا $name (${name.length} أحرف)\" else \"مرحباً يا ضيف\"\n}\n\nfun main() {\n    println(greeting(\"سلطان\"))\n    println(greeting(null))\n}"
   },
   "quiz": [
    {
     "q": "ما معنى <code dir=\"ltr\">Int?</code>؟",
     "o": [
      "رقم صحيح أو null",
      "رقم صحيح إلزامي",
      "سؤال عن النوع"
     ],
     "a": 0,
     "why": "علامة ? تسمح بقيمة null."
    },
    {
     "q": "ما ناتج <code dir=\"ltr\">val x: String? = null; println(x?.length ?: -1)</code>؟",
     "o": [
      "-1",
      "null",
      "خطأ"
     ],
     "a": 0,
     "why": "x?.length تُرجع null، فيُستخدم البديل -1."
    },
    {
     "q": "ماذا يحدث عند <code dir=\"ltr\">!!</code> على قيمة null؟",
     "o": [
      "ينهار البرنامج بـ NullPointerException",
      "تُرجع 0",
      "تُتجاهل"
     ],
     "a": 0,
     "why": "لذلك تُستخدم بحذر شديد."
    }
   ]
  },
  {
   "body": "<h2>if كتعبير</h2>\n<p>في Kotlin، <code dir=\"ltr\">if</code> <strong>تُرجع قيمة</strong>، لذلك لا يوجد عامل ثلاثي <code dir=\"ltr\">? :</code>:</p>\n<div class=\"code-block src\"><span class=\"code-label\">Kotlin</span><pre dir=\"ltr\"><code>fun main() {\n    val temperature = 34\n    val feeling = if (temperature &gt; 30) &quot;حار&quot; else &quot;معتدل&quot;\n    println(feeling)\n\n    val max = if (10 &gt; 7) 10 else 7\n    println(max)\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>حار\n10</code></pre></div>\n<h2>when: switch المحسّنة</h2>\n<p><code dir=\"ltr\">when</code> من أجمل ميزات Kotlin، وهي أقوى بكثير من switch:</p>\n<div class=\"code-block src\"><span class=\"code-label\">Kotlin</span><pre dir=\"ltr\"><code>fun main() {\n    val day = 5\n    val name = when (day) {\n        1 -&gt; &quot;الأحد&quot;\n        2 -&gt; &quot;الاثنين&quot;\n        5 -&gt; &quot;الخميس&quot;\n        6, 7 -&gt; &quot;عطلة نهاية الأسبوع&quot;\n        else -&gt; &quot;يوم آخر&quot;\n    }\n    println(name)\n\n    val score = 82\n    val grade = when {\n        score &gt;= 90 -&gt; &quot;ممتاز&quot;\n        score &gt;= 80 -&gt; &quot;جيد جداً&quot;\n        score &gt;= 60 -&gt; &quot;جيد&quot;\n        else -&gt; &quot;راسب&quot;\n    }\n    println(grade)\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>الخميس\nجيد جداً</code></pre></div>\n<ul><li><code dir=\"ltr\">when (value)</code> تقارن قيمة بحالات، و <code dir=\"ltr\">6, 7</code> حالتان لنفس النتيجة.</li><li><code dir=\"ltr\">when { }</code> بدون قيمة: كل فرع شرط مستقل.</li><li><code dir=\"ltr\">else</code> الحالة الافتراضية، وهي إلزامية عندما تُستخدم when كتعبير.</li></ul>\n<h2>when مع النطاقات والأنواع</h2>\n<div class=\"code-block src\"><span class=\"code-label\">Kotlin</span><pre dir=\"ltr\"><code>fun describe(x: Any): String = when (x) {\n    in 1..9 -&gt; &quot;رقم من خانة واحدة&quot;\n    is Int -&gt; &quot;عدد صحيح كبير&quot;\n    is String -&gt; &quot;نص طوله ${x.length}&quot;\n    else -&gt; &quot;شيء آخر&quot;\n}\n\nfun main() {\n    println(describe(7))\n    println(describe(150))\n    println(describe(&quot;مرحبا&quot;))\n    println(describe(true))\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>رقم من خانة واحدة\nعدد صحيح كبير\nنص طوله 5\nشيء آخر</code></pre></div>\n<ul><li><code dir=\"ltr\">in 1..9</code> هل القيمة ضمن النطاق.</li><li><code dir=\"ltr\">is String</code> هل القيمة من هذا النوع، وبعدها يتحول النوع تلقائياً فنستخدم <code dir=\"ltr\">x.length</code>.</li></ul>\n<h2>الحلقات والنطاقات</h2>\n<div class=\"code-block src\"><span class=\"code-label\">Kotlin</span><pre dir=\"ltr\"><code>fun main() {\n    for (i in 1..3) print(&quot;$i &quot;)\n    println()\n\n    for (i in 1 until 4) print(&quot;$i &quot;)\n    println()\n\n    for (i in 10 downTo 0 step 5) print(&quot;$i &quot;)\n    println()\n\n    val fruits = listOf(&quot;تفاح&quot;, &quot;موز&quot;)\n    for (fruit in fruits) println(fruit)\n\n    for ((index, fruit) in fruits.withIndex()) {\n        println(&quot;$index: $fruit&quot;)\n    }\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>1 2 3 \n1 2 3 \n10 5 0 \nتفاح\nموز\n0: تفاح\n1: موز</code></pre></div>\n<div class=\"table-wrap\"><table><thead><tr><th>النطاق</th><th>يشمل</th></tr></thead><tbody><tr><td><code dir=\"ltr\">1..5</code></td><td>من 1 إلى 5 (يشمل الطرفين)</td></tr><tr><td><code dir=\"ltr\">1 until 5</code></td><td>من 1 إلى 4</td></tr><tr><td><code dir=\"ltr\">5 downTo 1</code></td><td>تنازلي</td></tr><tr><td><code dir=\"ltr\">step 2</code></td><td>القفز بخطوة</td></tr></tbody></table></div>\n<h2>while</h2>\n<div class=\"code-block src\"><span class=\"code-label\">Kotlin</span><pre dir=\"ltr\"><code>fun main() {\n    var balance = 100\n    var months = 0\n    while (balance &gt; 0) {\n        balance -= 30\n        months++\n    }\n    println(&quot;نفد الرصيد بعد $months أشهر&quot;)\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>نفد الرصيد بعد 4 أشهر</code></pre></div>\n<h2>ملخص الدرس</h2>\n<ul><li><code dir=\"ltr\">if</code> و <code dir=\"ltr\">when</code> تعبيرات تُرجع قيمة.</li><li><code dir=\"ltr\">when</code> تدعم القيم المتعددة، والنطاقات <code dir=\"ltr\">in</code>، والأنواع <code dir=\"ltr\">is</code>، والشروط.</li><li>النطاقات <code dir=\"ltr\">1..5</code> و <code dir=\"ltr\">until</code> و <code dir=\"ltr\">downTo</code> و <code dir=\"ltr\">step</code>.</li><li><code dir=\"ltr\">for (x in list)</code> و <code dir=\"ltr\">withIndex()</code> للمرور مع الفهرس.</li></ul>",
   "exercise": {
    "prompt": "<p>اكتب حلقة من 1 إلى 15 تطبع لكل رقم تصنيفه باستخدام **<code dir=\"ltr\">when</code>** دون قيمة:</p>\n<ul><li>يقبل القسمة على 15: <code dir=\"ltr\">FizzBuzz</code></li><li>على 3: <code dir=\"ltr\">Fizz</code></li><li>على 5: <code dir=\"ltr\">Buzz</code></li><li>غير ذلك: الرقم نفسه</li></ul>",
    "starter": "fun main() {\n    for (i in 1..15) {\n        // أكمل هنا\n    }\n}",
    "expected": "1\n2\nFizz\n4\nBuzz\nFizz\n7\n8\nFizz\nBuzz\n11\nFizz\n13\n14\nFizzBuzz",
    "solution": "fun main() {\n    for (i in 1..15) {\n        val result = when {\n            i % 15 == 0 -> \"FizzBuzz\"\n            i % 3 == 0 -> \"Fizz\"\n            i % 5 == 0 -> \"Buzz\"\n            else -> i.toString()\n        }\n        println(result)\n    }\n}"
   },
   "quiz": [
    {
     "q": "كيف تكتب &quot;إذا كان x أكبر من 5 فالنتيجة نعم وإلا لا&quot; في Kotlin؟",
     "o": [
      "<code dir=\"ltr\">val r = if (x &gt; 5) &quot;نعم&quot; else &quot;لا&quot;</code>",
      "<code dir=\"ltr\">val r = x &gt; 5 ? &quot;نعم&quot; : &quot;لا&quot;</code>",
      "<code dir=\"ltr\">val r = when x &gt; 5 &quot;نعم&quot;</code>"
     ],
     "a": 0,
     "why": "if تعبير يُرجع قيمة، ولا يوجد عامل ثلاثي."
    },
    {
     "q": "كم رقماً يشمل النطاق <code dir=\"ltr\">1 until 5</code>؟",
     "o": [
      "5",
      "4",
      "6"
     ],
     "a": 1,
     "why": "until تستثني الحد الأعلى."
    },
    {
     "q": "ماذا يفعل الفرع <code dir=\"ltr\">is String -&gt;</code> داخل when؟",
     "o": [
      "يتحقق أن القيمة نص، ويحوّل نوعها تلقائياً داخل الفرع",
      "يحوّل القيمة إلى نص",
      "يقارنها بالنص &quot;String&quot;"
     ],
     "a": 0,
     "why": "هذا Smart Cast."
    }
   ]
  }
 ],
 [
  {
   "body": "<h2>تعريف الدوال</h2>\n<div class=\"code-block src\"><span class=\"code-label\">Kotlin</span><pre dir=\"ltr\"><code>fun add(a: Int, b: Int): Int {\n    return a + b\n}\n\nfun greet(name: String): String {\n    return &quot;أهلاً يا $name&quot;\n}\n\nfun printLine() {\n    println(&quot;----------&quot;)\n}\n\nfun main() {\n    println(add(3, 4))\n    println(greet(&quot;هيا&quot;))\n    printLine()\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>7\nأهلاً يا هيا\n----------</code></pre></div>\n<ul><li><code dir=\"ltr\">fun name(param: Type): ReturnType</code> الصيغة الكاملة.</li><li>الدالة التي لا تُرجع قيمة نوعها <code dir=\"ltr\">Unit</code>، ويمكن حذفه كما في <code dir=\"ltr\">printLine</code>.</li></ul>\n<h2>دوال التعبير الواحد</h2>\n<div class=\"code-block src\"><span class=\"code-label\">Kotlin</span><pre dir=\"ltr\"><code>fun square(n: Int) = n * n\nfun isEven(n: Int) = n % 2 == 0\nfun max(a: Int, b: Int) = if (a &gt; b) a else b\n\nfun main() {\n    println(square(9))\n    println(isEven(7))\n    println(max(12, 30))\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>81\nfalse\n30</code></pre></div>\n<p><code dir=\"ltr\">= تعبير</code> بدل الأقواس و <code dir=\"ltr\">return</code>، والنوع يُستنتج تلقائياً.</p>\n<h2>القيم الافتراضية والمعاملات المسماة</h2>\n<div class=\"code-block src\"><span class=\"code-label\">Kotlin</span><pre dir=\"ltr\"><code>fun createUser(name: String, age: Int = 18, city: String = &quot;غير محددة&quot;) =\n    &quot;$name، $age سنة، $city&quot;\n\nfun main() {\n    println(createUser(&quot;فيصل&quot;, 30, &quot;أبها&quot;))\n    println(createUser(&quot;منيرة&quot;))\n    println(createUser(&quot;زياد&quot;, city = &quot;جدة&quot;))\n    println(createUser(city = &quot;مكة&quot;, name = &quot;رنا&quot;))\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>فيصل، 30 سنة، أبها\nمنيرة، 18 سنة، غير محددة\nزياد، 18 سنة، جدة\nرنا، 18 سنة، مكة</code></pre></div>\n<ul><li>القيم الافتراضية تجعل المعاملات اختيارية.</li><li><strong>المعاملات المسماة</strong> <code dir=\"ltr\">city = &quot;جدة&quot;</code> تسمح بتخطي بعض المعاملات، وبأي ترتيب. وهي تجعل الاستدعاء واضحاً جداً.</li></ul>\n<div class=\"callout tip\">💡 في Jetpack Compose (واجهات Android الحديثة) ستستخدم المعاملات المسماة في كل مكان: <code dir=\"ltr\">Text(text = &quot;مرحبا&quot;, fontSize = 20.sp, color = Color.Blue)</code>.</div>\n<h2>عدد متغير من المعاملات: vararg</h2>\n<div class=\"code-block src\"><span class=\"code-label\">Kotlin</span><pre dir=\"ltr\"><code>fun sum(vararg numbers: Int): Int {\n    var total = 0\n    for (n in numbers) total += n\n    return total\n}\n\nfun main() {\n    println(sum(1, 2))\n    println(sum(5, 10, 15, 20))\n    println(sum())\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>3\n50\n0</code></pre></div>\n<h2>ملخص الدرس</h2>\n<ul><li><code dir=\"ltr\">fun name(p: Type): Return { }</code> والدالة بلا قيمة إرجاع نوعها <code dir=\"ltr\">Unit</code>.</li><li><code dir=\"ltr\">fun f(x: Int) = x * 2</code> لدالة من تعبير واحد.</li><li>القيم الافتراضية والمعاملات المسماة تغني عن تعريف دوال كثيرة متشابهة.</li><li><code dir=\"ltr\">vararg</code> لعدد متغير من المعاملات.</li></ul>",
   "exercise": {
    "prompt": "<p>اكتب دالة <code dir=\"ltr\">calculatePrice</code> تُرجع <code dir=\"ltr\">Double</code> وتستقبل:</p>\n<ul><li><code dir=\"ltr\">price: Double</code> (إلزامي)</li><li><code dir=\"ltr\">discount: Int = 0</code> نسبة الخصم بالمئة</li><li><code dir=\"ltr\">tax: Int = 15</code> نسبة الضريبة بالمئة</li></ul>\n<p>النتيجة: السعر بعد الخصم، ثم تُضاف الضريبة. الاستدعاءات جاهزة وتستخدم المعاملات المسماة.</p>",
    "starter": "// اكتب الدالة هنا\n\nfun main() {\n    println(calculatePrice(100.0))\n    println(calculatePrice(200.0, discount = 50))\n    println(calculatePrice(tax = 0, price = 80.0, discount = 25))\n}",
    "expected": "115.0\n115.0\n60.0",
    "solution": "fun calculatePrice(price: Double, discount: Int = 0, tax: Int = 15): Double {\n    val afterDiscount = price * (100 - discount) / 100\n    return afterDiscount * (100 + tax) / 100\n}\n\nfun main() {\n    println(calculatePrice(100.0))\n    println(calculatePrice(200.0, discount = 50))\n    println(calculatePrice(tax = 0, price = 80.0, discount = 25))\n}"
   },
   "quiz": [
    {
     "q": "ما نوع إرجاع دالة لا تُرجع قيمة في Kotlin؟",
     "o": [
      "Unit",
      "void",
      "null"
     ],
     "a": 0,
     "why": "ويمكن حذفه من التعريف."
    },
    {
     "q": "ما فائدة المعاملات المسماة؟",
     "o": [
      "وضوح الاستدعاء وإمكانية تمرير المعاملات بأي ترتيب وتخطي بعضها",
      "تسريع التنفيذ",
      "منع القيم الافتراضية"
     ],
     "a": 0,
     "why": "مثل createUser(name = &quot;علي&quot;, city = &quot;جدة&quot;)."
    },
    {
     "q": "ماذا يعادل <code dir=\"ltr\">fun double(x: Int) = x * 2</code>؟",
     "o": [
      "<code dir=\"ltr\">fun double(x: Int): Int { return x * 2 }</code>",
      "<code dir=\"ltr\">fun double(x: Int) { x * 2 }</code>",
      "لا شيء، خطأ في الصيغة"
     ],
     "a": 0,
     "why": "دالة التعبير الواحد تستنتج نوع الإرجاع."
    }
   ]
  },
  {
   "body": "<h2>الدوال كقيم</h2>\n<p><strong>Lambda</strong> دالة بلا اسم تُكتب بين أقواس معقوفة، ويمكن تخزينها في متغير:</p>\n<div class=\"code-block src\"><span class=\"code-label\">Kotlin</span><pre dir=\"ltr\"><code>fun main() {\n    val multiply = { a: Int, b: Int -&gt; a * b }\n    println(multiply(6, 7))\n\n    val greet: (String) -&gt; String = { name -&gt; &quot;أهلاً $name&quot; }\n    println(greet(&quot;لمى&quot;))\n\n    val shout: (String) -&gt; String = { it.uppercase() + &quot;!&quot; }\n    println(shout(&quot;kotlin&quot;))\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>42\nأهلاً لمى\nKOTLIN!</code></pre></div>\n<ul><li>الصيغة: <code dir=\"ltr\">{ المعاملات -&gt; الجسم }</code>، وآخر سطر هو القيمة المُرجعة تلقائياً.</li><li><code dir=\"ltr\">(String) -&gt; String</code> <strong>نوع الدالة</strong>: تستقبل نصاً وتُرجع نصاً.</li><li>إذا كان للـ lambda معامل واحد، يمكن حذفه واستخدام الاسم الضمني **<code dir=\"ltr\">it</code>**.</li></ul>\n<h2>lambda متعددة الأسطر</h2>\n<div class=\"code-block src\"><span class=\"code-label\">Kotlin</span><pre dir=\"ltr\"><code>fun main() {\n    val describe = { score: Int -&gt;\n        val level = if (score &gt;= 50) &quot;ناجح&quot; else &quot;راسب&quot;\n        &quot;الدرجة $score: $level&quot;\n    }\n    println(describe(72))\n    println(describe(40))\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>الدرجة 72: ناجح\nالدرجة 40: راسب</code></pre></div>\n<h2>مع المجموعات: الاستخدام الأشهر</h2>\n<div class=\"code-block src\"><span class=\"code-label\">Kotlin</span><pre dir=\"ltr\"><code>fun main() {\n    val prices = listOf(120, 45, 300, 80)\n\n    val cheap = prices.filter { it &lt; 100 }\n    val doubled = prices.map { it * 2 }\n    val total = prices.sum()\n\n    println(cheap)\n    println(doubled)\n    println(total)\n    prices.forEach { println(&quot;السعر: $it&quot;) }\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>[45, 80]\n[240, 90, 600, 160]\n545\nالسعر: 120\nالسعر: 45\nالسعر: 300\nالسعر: 80</code></pre></div>\n<p>لاحظ أننا كتبنا <code dir=\"ltr\">filter { ... }</code> دون أقواس عادية. هذه ميزة <strong>Trailing Lambda</strong>: إذا كانت الـ lambda آخر معامل، تُكتب خارج الأقواس.</p>\n<h2>ملخص الدرس</h2>\n<ul><li>Lambda: <code dir=\"ltr\">{ a: Int, b: Int -&gt; a + b }</code> وآخر تعبير فيها هو القيمة المُرجعة.</li><li>نوع الدالة: <code dir=\"ltr\">(Int, Int) -&gt; Int</code>.</li><li><code dir=\"ltr\">it</code> اسم ضمني للمعامل الوحيد.</li><li>الـ lambda الأخيرة تُكتب خارج الأقواس: <code dir=\"ltr\">list.filter { it &gt; 0 }</code>.</li></ul>",
   "exercise": {
    "prompt": "<ol><li>عرّف lambda اسمها <code dir=\"ltr\">isAdult</code> من نوع <code dir=\"ltr\">(Int) -&gt; Boolean</code> تُرجع <code dir=\"ltr\">true</code> إذا كان العمر 18 فأكثر.</li><li>عرّف lambda اسمها <code dir=\"ltr\">format</code> تستقبل اسماً (String) وعمراً (Int) وتُرجع <code dir=\"ltr\">X (N سنة)</code>.</li><li>صفِّ قائمة الأشخاص لتبقي البالغين فقط، واطبع كل منهم باستخدام <code dir=\"ltr\">format</code>.</li></ol>",
    "starter": "fun main() {\n    val people = listOf(\"علي\" to 25, \"سما\" to 15, \"ماجد\" to 40)\n    // أكمل هنا\n}",
    "expected": "علي (25 سنة)\nماجد (40 سنة)",
    "solution": "fun main() {\n    val people = listOf(\"علي\" to 25, \"سما\" to 15, \"ماجد\" to 40)\n    val isAdult: (Int) -> Boolean = { it >= 18 }\n    val format = { name: String, age: Int -> \"$name ($age سنة)\" }\n    people.filter { isAdult(it.second) }\n        .forEach { println(format(it.first, it.second)) }\n}"
   },
   "quiz": [
    {
     "q": "ما نوع <code dir=\"ltr\">{ x: Int -&gt; x * 2 }</code>؟",
     "o": [
      "<code dir=\"ltr\">(Int) -&gt; Int</code>",
      "<code dir=\"ltr\">Int</code>",
      "<code dir=\"ltr\">Unit</code>"
     ],
     "a": 0,
     "why": "lambda تستقبل Int وتُرجع Int."
    },
    {
     "q": "ماذا يمثل <code dir=\"ltr\">it</code> داخل lambda؟",
     "o": [
      "المعامل الوحيد للـ lambda عندما لا نسميه",
      "آخر قيمة مُرجعة",
      "الكائن الحالي"
     ],
     "a": 0,
     "why": "اسم ضمني يوفر الكتابة."
    },
    {
     "q": "لماذا نكتب <code dir=\"ltr\">list.map { it * 2 }</code> دون أقواس عادية؟",
     "o": [
      "لأن الـ lambda آخر معامل فتُكتب خارج الأقواس (Trailing Lambda)",
      "لأن map لا تقبل معاملات",
      "خطأ، يجب كتابة الأقواس"
     ],
     "a": 0,
     "why": "ميزة تجعل الكود يُقرأ بطبيعية."
    }
   ]
  },
  {
   "body": "<h2>دوال تستقبل دوالاً</h2>\n<p><strong>الدالة من الرتبة العليا (Higher-Order Function)</strong> دالة تستقبل دالة أخرى كمعامل، أو تُرجع دالة:</p>\n<div class=\"code-block src\"><span class=\"code-label\">Kotlin</span><pre dir=\"ltr\"><code>fun applyTwice(value: Int, operation: (Int) -&gt; Int): Int {\n    return operation(operation(value))\n}\n\nfun main() {\n    println(applyTwice(3) { it + 10 })\n    println(applyTwice(2) { it * it })\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>23\n16</code></pre></div>\n<h2>بناء أدواتك الخاصة</h2>\n<div class=\"code-block src\"><span class=\"code-label\">Kotlin</span><pre dir=\"ltr\"><code>fun repeatAction(times: Int, action: (Int) -&gt; Unit) {\n    for (i in 1..times) action(i)\n}\n\nfun measure(label: String, block: () -&gt; Int): Int {\n    val result = block()\n    println(&quot;$label = $result&quot;)\n    return result\n}\n\nfun main() {\n    repeatAction(3) { println(&quot;المحاولة $it&quot;) }\n    measure(&quot;المجموع&quot;) { (1..100).sum() }\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>المحاولة 1\nالمحاولة 2\nالمحاولة 3\nالمجموع = 5050</code></pre></div>\n<p>هكذا بُنيت دوال Kotlin القياسية نفسها، مثل <code dir=\"ltr\">repeat(3) { }</code>.</p>\n<h2>دوال تُرجع دوالاً</h2>\n<div class=\"code-block src\"><span class=\"code-label\">Kotlin</span><pre dir=\"ltr\"><code>fun multiplier(factor: Int): (Int) -&gt; Int = { it * factor }\n\nfun counter(): () -&gt; Int {\n    var count = 0\n    return { ++count }\n}\n\nfun main() {\n    val double = multiplier(2)\n    val triple = multiplier(3)\n    println(double(7))\n    println(triple(7))\n\n    val next = counter()\n    next()\n    next()\n    println(next())\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>14\n21\n3</code></pre></div>\n<p>الـ lambda المُرجعة <strong>تتذكر</strong> المتغيرات المحيطة بها (<code dir=\"ltr\">factor</code> و <code dir=\"ltr\">count</code>)، وهذا يسمى <strong>الإغلاق (Closure)</strong>.</p>\n<h2>مراجع الدوال ::</h2>\n<p>يمكن تمرير دالة موجودة باسمها مسبوقاً بـ <code dir=\"ltr\">::</code>:</p>\n<div class=\"code-block src\"><span class=\"code-label\">Kotlin</span><pre dir=\"ltr\"><code>fun isPositive(n: Int) = n &gt; 0\nfun square(n: Int) = n * n\n\nfun main() {\n    val numbers = listOf(-2, 3, -1, 4)\n    println(numbers.filter(::isPositive))\n    println(numbers.map(::square))\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>[3, 4]\n[4, 9, 1, 16]</code></pre></div>\n<h2>في Android</h2>\n<p>ستمرر الدوال في كل مكان، مثلاً عند الضغط على زر في Jetpack Compose:</p>\n<div class=\"code-block src\"><span class=\"code-label\">Kotlin</span><pre dir=\"ltr\"><code>Button(onClick = { counter++ }) {\n    Text(&quot;اضغط&quot;)\n}</code></pre></div>\n<p><code dir=\"ltr\">onClick</code> معامل من نوع <code dir=\"ltr\">() -&gt; Unit</code>، والمحتوى نفسه lambda أخيرة تُكتب خارج الأقواس.</p>\n<h2>ملخص الدرس</h2>\n<ul><li>الدالة من الرتبة العليا تستقبل دالة <code dir=\"ltr\">(Int) -&gt; Int</code> أو تُرجعها.</li><li>الـ lambda الأخيرة تُكتب خارج الأقواس.</li><li>الإغلاق: الدالة تتذكر متغيراتها المحيطة.</li><li><code dir=\"ltr\">::functionName</code> لتمرير دالة موجودة.</li></ul>",
   "exercise": {
    "prompt": "<p>اكتب دالة <code dir=\"ltr\">transform</code> تستقبل <code dir=\"ltr\">List&lt;Int&gt;</code> ودالة <code dir=\"ltr\">(Int) -&gt; Int</code>، وتُرجع قائمة جديدة بعد تطبيق الدالة على كل عنصر، <strong>باستخدام حلقة for</strong> وقائمة قابلة للتعديل <code dir=\"ltr\">mutableListOf&lt;Int&gt;()</code>.</p>\n<p>ثم استدعها مرتين بـ lambda: مرة للمضاعفة، ومرة للتربيع.</p>",
    "starter": "fun transform(numbers: List<Int>, fn: (Int) -> Int): List<Int> {\n    // أكمل هنا\n}\n\nfun main() {\n    val nums = listOf(1, 2, 3, 4)\n    // اطبع النتيجتين\n}",
    "expected": "[2, 4, 6, 8]\n[1, 4, 9, 16]",
    "solution": "fun transform(numbers: List<Int>, fn: (Int) -> Int): List<Int> {\n    val result = mutableListOf<Int>()\n    for (n in numbers) result.add(fn(n))\n    return result\n}\n\nfun main() {\n    val nums = listOf(1, 2, 3, 4)\n    println(transform(nums) { it * 2 })\n    println(transform(nums) { it * it })\n}"
   },
   "quiz": [
    {
     "q": "ماذا يعني النوع <code dir=\"ltr\">(String) -&gt; Unit</code>؟",
     "o": [
      "دالة تستقبل String ولا تُرجع قيمة",
      "نص",
      "دالة بلا معاملات"
     ],
     "a": 0,
     "why": "Unit تعني عدم وجود قيمة إرجاع مفيدة."
    },
    {
     "q": "ما المقصود بالإغلاق (Closure)؟",
     "o": [
      "دالة تتذكر المتغيرات المحيطة بها لحظة إنشائها",
      "دالة مغلقة لا يمكن استدعاؤها",
      "نهاية الدالة"
     ],
     "a": 0,
     "why": "مثل counter التي تحتفظ بـ count."
    },
    {
     "q": "ماذا يعني <code dir=\"ltr\">list.filter(::isValid)</code>؟",
     "o": [
      "تمرير الدالة الموجودة isValid كمعامل",
      "استدعاء isValid مرتين",
      "خطأ في الصيغة"
     ],
     "a": 0,
     "why": ":: مرجع لدالة."
    }
   ]
  }
 ],
 [
  {
   "body": "<h2>أصناف مختصرة جداً</h2>\n<p>في Kotlin يمكن تعريف صنف بخصائصه في سطر واحد:</p>\n<div class=\"code-block src\"><span class=\"code-label\">Kotlin</span><pre dir=\"ltr\"><code>class Product(val name: String, var price: Double, var stock: Int) {\n    val isAvailable: Boolean\n        get() = stock &gt; 0\n\n    fun sell(qty: Int) {\n        if (qty &gt; stock) {\n            println(&quot;الكمية غير متوفرة من $name&quot;)\n            return\n        }\n        stock -= qty\n        println(&quot;بيع $qty من $name، المتبقي $stock&quot;)\n    }\n}\n\nfun main() {\n    val phone = Product(&quot;هاتف&quot;, 2200.0, 3)\n    phone.sell(2)\n    phone.sell(5)\n    println(phone.isAvailable)\n    phone.price = 1999.0\n    println(phone.price)\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>بيع 2 من هاتف، المتبقي 1\nالكمية غير متوفرة من هاتف\ntrue\n1999.0</code></pre></div>\n<ul><li><code dir=\"ltr\">class Product(val name: String, ...)</code> المُنشئ الأساسي يعرّف الخصائص مباشرة.</li><li><code dir=\"ltr\">val</code> خاصية للقراءة فقط، و <code dir=\"ltr\">var</code> قابلة للتعديل.</li><li><code dir=\"ltr\">get() = ...</code> خاصية محسوبة.</li><li>لا نحتاج <code dir=\"ltr\">new</code> لإنشاء كائن.</li></ul>\n<h2>كتلة init والتحقق</h2>\n<div class=\"code-block src\"><span class=\"code-label\">Kotlin</span><pre dir=\"ltr\"><code>class Account(val owner: String, initialBalance: Double) {\n    var balance = initialBalance\n        private set\n\n    init {\n        require(initialBalance &gt;= 0) { &quot;الرصيد لا يمكن أن يكون سالباً&quot; }\n    }\n\n    fun deposit(amount: Double) {\n        if (amount &gt; 0) balance += amount\n    }\n}\n\nfun main() {\n    val acc = Account(&quot;سعود&quot;, 100.0)\n    acc.deposit(50.0)\n    println(&quot;${acc.owner}: ${acc.balance}&quot;)\n    try {\n        Account(&quot;خطأ&quot;, -10.0)\n    } catch (e: IllegalArgumentException) {\n        println(e.message)\n    }\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>سعود: 150.0\nالرصيد لا يمكن أن يكون سالباً</code></pre></div>\n<ul><li><code dir=\"ltr\">init { }</code> تُنفَّذ عند إنشاء الكائن، ومناسبة للتحقق.</li><li><code dir=\"ltr\">require(condition) { message }</code> ترمي خطأ إذا لم يتحقق الشرط.</li><li><code dir=\"ltr\">private set</code> تجعل القراءة متاحة للجميع والتعديل من داخل الصنف فقط.</li></ul>\n<h2>الوراثة: open</h2>\n<p>الأصناف في Kotlin <strong>مغلقة افتراضياً</strong>، فلا يمكن الوراثة منها إلا إذا أضفت <code dir=\"ltr\">open</code>:</p>\n<div class=\"code-block src\"><span class=\"code-label\">Kotlin</span><pre dir=\"ltr\"><code>open class Animal(val name: String) {\n    open fun speak() = &quot;$name يصدر صوتاً&quot;\n}\n\nclass Cat(name: String) : Animal(name) {\n    override fun speak() = &quot;$name يقول مياو&quot;\n}\n\nfun main() {\n    val animals = listOf(Animal(&quot;حيوان&quot;), Cat(&quot;مشمش&quot;))\n    animals.forEach { println(it.speak()) }\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>حيوان يصدر صوتاً\nمشمش يقول مياو</code></pre></div>\n<ul><li><code dir=\"ltr\">open class</code> تسمح بالوراثة، و <code dir=\"ltr\">open fun</code> تسمح بإعادة التعريف.</li><li><code dir=\"ltr\">: Animal(name)</code> الوراثة مع تمرير المعامل لمُنشئ الأب.</li><li><code dir=\"ltr\">override</code> إلزامية عند إعادة التعريف.</li></ul>\n<h2>الواجهات</h2>\n<div class=\"code-block src\"><span class=\"code-label\">Kotlin</span><pre dir=\"ltr\"><code>interface Payable {\n    fun pay(amount: Double): Boolean\n    fun receipt(amount: Double) = &quot;تم دفع $amount&quot;\n}\n\nclass Card(private val limit: Double) : Payable {\n    override fun pay(amount: Double) = amount &lt;= limit\n}\n\nfun main() {\n    val card = Card(500.0)\n    if (card.pay(200.0)) println(card.receipt(200.0))\n    println(card.pay(900.0))\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>تم دفع 200.0\nfalse</code></pre></div>\n<p>الواجهة في Kotlin يمكن أن تحتوي تنفيذاً افتراضياً لبعض الطرق، مثل <code dir=\"ltr\">receipt</code>.</p>\n<h2>ملخص الدرس</h2>\n<ul><li><code dir=\"ltr\">class Name(val a: Type, var b: Type)</code> يعرّف الصنف وخصائصه معاً.</li><li><code dir=\"ltr\">init</code> للتحقق عند الإنشاء، و <code dir=\"ltr\">private set</code> لحماية التعديل.</li><li>الأصناف مغلقة افتراضياً، و <code dir=\"ltr\">open</code> للسماح بالوراثة، و <code dir=\"ltr\">override</code> لإعادة التعريف.</li><li>الواجهات <code dir=\"ltr\">interface</code> يمكن أن تحتوي تنفيذاً افتراضياً.</li></ul>",
   "exercise": {
    "prompt": "<p>أنشئ صنف <code dir=\"ltr\">BankAccount</code>:</p>\n<ul><li>خاصية <code dir=\"ltr\">owner</code> (val نصية) في المُنشئ.</li><li>خاصية <code dir=\"ltr\">balance</code> (var من نوع Double) تبدأ من <code dir=\"ltr\">0.0</code> مع <code dir=\"ltr\">private set</code>.</li><li>طريقة <code dir=\"ltr\">deposit(amount: Double)</code> تضيف المبلغ.</li><li>طريقة <code dir=\"ltr\">withdraw(amount: Double): Boolean</code>: إذا كان المبلغ أكبر من الرصيد تُرجع <code dir=\"ltr\">false</code>، وإلا تخصم وتُرجع <code dir=\"ltr\">true</code>.</li></ul>",
    "starter": "// اكتب الصنف هنا\n\nfun main() {\n    val acc = BankAccount(\"عبدالله\")\n    acc.deposit(500.0)\n    println(acc.withdraw(800.0))\n    println(acc.withdraw(200.0))\n    println(\"${acc.owner}: ${acc.balance}\")\n}",
    "expected": "false\ntrue\nعبدالله: 300.0",
    "solution": "class BankAccount(val owner: String) {\n    var balance = 0.0\n        private set\n\n    fun deposit(amount: Double) {\n        balance += amount\n    }\n\n    fun withdraw(amount: Double): Boolean {\n        if (amount > balance) return false\n        balance -= amount\n        return true\n    }\n}\n\nfun main() {\n    val acc = BankAccount(\"عبدالله\")\n    acc.deposit(500.0)\n    println(acc.withdraw(800.0))\n    println(acc.withdraw(200.0))\n    println(\"${acc.owner}: ${acc.balance}\")\n}"
   },
   "quiz": [
    {
     "q": "لماذا لا يمكن الوراثة من صنف عادي في Kotlin؟",
     "o": [
      "لأن الأصناف مغلقة افتراضياً، وتحتاج open للسماح بالوراثة",
      "لأن Kotlin لا تدعم الوراثة",
      "يمكن دائماً"
     ],
     "a": 0,
     "why": "قرار تصميم يمنع الوراثة غير المقصودة."
    },
    {
     "q": "ماذا يفعل <code dir=\"ltr\">class User(val name: String)</code>؟",
     "o": [
      "يعرّف صنفاً بمُنشئ ينشئ خاصية name للقراءة فقط",
      "يعرّف دالة",
      "يعرّف متغيراً عاماً"
     ],
     "a": 0,
     "why": "المُنشئ الأساسي يعرّف الخصائص مباشرة."
    },
    {
     "q": "متى تُنفَّذ كتلة init؟",
     "o": [
      "عند إنشاء كل كائن من الصنف",
      "عند أول استدعاء لطريقة",
      "مرة واحدة عند تشغيل البرنامج"
     ],
     "a": 0,
     "why": "مناسبة للتحقق من القيم الابتدائية."
    }
   ]
  },
  {
   "body": "<h2>أصناف للبيانات</h2>\n<p>كثير من الأصناف وظيفتها <strong>حمل بيانات</strong> فقط: مستخدم، ومنتج، ورد من خادم. Kotlin توفر لها <strong>data class</strong> التي تولّد تلقائياً كل ما تحتاجه:</p>\n<div class=\"code-block src\"><span class=\"code-label\">Kotlin</span><pre dir=\"ltr\"><code>data class User(val name: String, val age: Int, val city: String = &quot;الرياض&quot;)\n\nfun main() {\n    val u1 = User(&quot;نوف&quot;, 28)\n    val u2 = User(&quot;نوف&quot;, 28)\n    println(u1)\n    println(u1 == u2)\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>User(name=نوف, age=28, city=الرياض)\ntrue</code></pre></div>\n<p>بكلمة واحدة <code dir=\"ltr\">data</code> حصلنا على:</p>\n<ul><li>**<code dir=\"ltr\">toString()</code>** مقروء: <code dir=\"ltr\">User(name=نوف, age=28, city=الرياض)</code>.</li><li>**<code dir=\"ltr\">equals()</code>** يقارن المحتوى: <code dir=\"ltr\">u1 == u2</code> صحيحة لأن البيانات متطابقة.</li><li>**<code dir=\"ltr\">hashCode()</code>** متوافق، فيعمل الكائن في <code dir=\"ltr\">Set</code> و <code dir=\"ltr\">Map</code> بشكل صحيح.</li><li>**<code dir=\"ltr\">copy()</code><strong> و </strong>التفكيك**.</li></ul>\n<h2>مقارنة بالصنف العادي</h2>\n<div class=\"code-block src\"><span class=\"code-label\">Kotlin</span><pre dir=\"ltr\"><code>class PlainUser(val name: String)\ndata class DataUser(val name: String)\n\nfun main() {\n    println(PlainUser(&quot;علي&quot;) == PlainUser(&quot;علي&quot;))\n    println(DataUser(&quot;علي&quot;) == DataUser(&quot;علي&quot;))\n    println(DataUser(&quot;علي&quot;))\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>false\ntrue\nDataUser(name=علي)</code></pre></div>\n<p>الصنف العادي يقارن <strong>الهوية</strong> (هل هما نفس الكائن في الذاكرة؟)، و data class تقارن <strong>المحتوى</strong>.</p>\n<h2>copy: نسخة مع تعديل</h2>\n<div class=\"code-block src\"><span class=\"code-label\">Kotlin</span><pre dir=\"ltr\"><code>data class Order(val id: Int, val status: String, val total: Double)\n\nfun main() {\n    val order = Order(101, &quot;جديد&quot;, 250.0)\n    val shipped = order.copy(status = &quot;مشحون&quot;)\n    println(order)\n    println(shipped)\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>Order(id=101, status=جديد, total=250.0)\nOrder(id=101, status=مشحون, total=250.0)</code></pre></div>\n<p>لم نعدّل الكائن الأصلي، بل أنشأنا نسخة جديدة. هذا أسلوب <strong>البيانات غير القابلة للتعديل (Immutable)</strong>، وهو أساس إدارة الحالة في Jetpack Compose: <code dir=\"ltr\">state = state.copy(isLoading = false)</code>.</p>\n<h2>التفكيك (Destructuring)</h2>\n<div class=\"code-block src\"><span class=\"code-label\">Kotlin</span><pre dir=\"ltr\"><code>data class Point(val x: Int, val y: Int)\n\nfun main() {\n    val (x, y) = Point(3, 7)\n    println(&quot;x = $x، y = $y&quot;)\n\n    val points = listOf(Point(1, 2), Point(5, 6))\n    for ((a, b) in points) println(a + b)\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>x = 3، y = 7\n3\n11</code></pre></div>\n<h2>ملخص الدرس</h2>\n<ul><li><code dir=\"ltr\">data class</code> لأصناف البيانات، وتولّد <code dir=\"ltr\">toString</code> و <code dir=\"ltr\">equals</code> و <code dir=\"ltr\">hashCode</code> و <code dir=\"ltr\">copy</code> تلقائياً.</li><li><code dir=\"ltr\">==</code> تقارن المحتوى في data class.</li><li><code dir=\"ltr\">copy(prop = value)</code> تنشئ نسخة معدّلة دون تغيير الأصل.</li><li><code dir=\"ltr\">val (a, b) = obj</code> لتفكيك الكائن.</li></ul>",
   "exercise": {
    "prompt": "<ol><li>عرّف <code dir=\"ltr\">data class Product</code> بالخصائص: <code dir=\"ltr\">name</code> (String) و <code dir=\"ltr\">price</code> (Double) و <code dir=\"ltr\">inStock</code> (Boolean، افتراضيها true).</li><li>أنشئ منتجاً <code dir=\"ltr\">Product(&quot;سماعة&quot;, 250.0)</code> واطبعه.</li><li>أنشئ نسخة منه بسعر <code dir=\"ltr\">199.0</code> باستخدام <code dir=\"ltr\">copy</code> واطبعها.</li><li>اطبع هل المنتج الأصلي يساوي <code dir=\"ltr\">Product(&quot;سماعة&quot;, 250.0)</code>.</li><li>فكّك النسخة إلى <code dir=\"ltr\">name</code> و <code dir=\"ltr\">price</code> و <code dir=\"ltr\">inStock</code> واطبع: <code dir=\"ltr\">سماعة: 199.0</code>.</li></ol>",
    "starter": "// عرّف الصنف هنا\n\nfun main() {\n    // أكمل هنا\n}",
    "expected": "Product(name=سماعة, price=250.0, inStock=true)\nProduct(name=سماعة, price=199.0, inStock=true)\ntrue\nسماعة: 199.0",
    "solution": "data class Product(val name: String, val price: Double, val inStock: Boolean = true)\n\nfun main() {\n    val original = Product(\"سماعة\", 250.0)\n    println(original)\n    val discounted = original.copy(price = 199.0)\n    println(discounted)\n    println(original == Product(\"سماعة\", 250.0))\n    val (name, price, inStock) = discounted\n    println(\"$name: $price\")\n}"
   },
   "quiz": [
    {
     "q": "ماذا تقارن <code dir=\"ltr\">==</code> بين كائنين من data class؟",
     "o": [
      "المحتوى (قيم الخصائص)",
      "الموقع في الذاكرة",
      "اسم الصنف فقط"
     ],
     "a": 0,
     "why": "لذلك كائنان بنفس البيانات متساويان."
    },
    {
     "q": "ماذا تفعل <code dir=\"ltr\">user.copy(age = 30)</code>؟",
     "o": [
      "تنشئ كائناً جديداً بنفس البيانات مع age = 30، والأصل لا يتغير",
      "تعدّل age في الكائن الأصلي",
      "تنسخ الكائن دون تغيير"
     ],
     "a": 0,
     "why": "أسلوب البيانات غير القابلة للتعديل."
    },
    {
     "q": "أي من هذه لا يولّده data class تلقائياً؟",
     "o": [
      "toString",
      "copy",
      "طريقة save لقاعدة البيانات"
     ],
     "a": 2,
     "why": "data class تولّد أدوات البيانات الأساسية فقط."
    }
   ]
  },
  {
   "body": "<h2>مجموعة مغلقة من الأنواع</h2>\n<p><strong>sealed class</strong> (أو <code dir=\"ltr\">sealed interface</code>) تحدد مجموعة <strong>محدودة ومعروفة</strong> من الأنواع الفرعية. المترجم يعرف كل الاحتمالات، فيتأكد أن <code dir=\"ltr\">when</code> تعالجها جميعاً.</p>\n<p>النمط الأشهر في تطبيقات Android: حالات الشاشة.</p>\n<div class=\"code-block src\"><span class=\"code-label\">Kotlin</span><pre dir=\"ltr\"><code>sealed class UiState {\n    object Loading : UiState()\n    data class Success(val items: List&lt;String&gt;) : UiState()\n    data class Error(val message: String) : UiState()\n}\n\nfun render(state: UiState): String = when (state) {\n    is UiState.Loading -&gt; &quot;⏳ جاري التحميل...&quot;\n    is UiState.Success -&gt; &quot;✅ ${state.items.size} عناصر: ${state.items.joinToString(&quot;، &quot;)}&quot;\n    is UiState.Error -&gt; &quot;❌ ${state.message}&quot;\n}\n\nfun main() {\n    println(render(UiState.Loading))\n    println(render(UiState.Success(listOf(&quot;أ&quot;, &quot;ب&quot;))))\n    println(render(UiState.Error(&quot;لا يوجد اتصال&quot;)))\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>⏳ جاري التحميل...\n✅ 2 عناصر: أ، ب\n❌ لا يوجد اتصال</code></pre></div>\n<ul><li>لا حاجة لفرع <code dir=\"ltr\">else</code> في <code dir=\"ltr\">when</code>، لأن المترجم يعرف أن هذه كل الحالات.</li><li>داخل <code dir=\"ltr\">is UiState.Success -&gt;</code> يتحول النوع تلقائياً، فنصل إلى <code dir=\"ltr\">state.items</code>.</li><li><code dir=\"ltr\">object Loading</code> حالة بلا بيانات، فنكتفي بنسخة واحدة منها.</li></ul>\n<h2>إذا نسيت حالة</h2>\n<div class=\"code-block src\"><span class=\"code-label\">Kotlin</span><pre dir=\"ltr\"><code>sealed interface Payment\ndata class Card(val last4: String) : Payment\nobject Cash : Payment\ndata class Wallet(val app: String) : Payment\n\nfun describe(p: Payment): String = when (p) {\n    is Card -&gt; &quot;بطاقة ${p.last4}&quot;\n    Cash -&gt; &quot;نقداً&quot;\n}\n\nfun main() {\n    println(describe(Cash))\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><div class=\"out-errs\"><div class=\"sql-err\" dir=\"ltr\">⚠️ line 6: &#x27;when&#x27; expression must be exhaustive. Add the &#x27;is Wallet&#x27; branch or an &#x27;else&#x27; branch.</div></div></div>\n<p>نسيت <code dir=\"ltr\">Wallet</code>؟ <strong>المترجم يرفض الكود</strong>. وعند إضافة طريقة دفع جديدة لاحقاً، يدلك المترجم على كل <code dir=\"ltr\">when</code> تحتاج تحديثاً.</p>\n<h2>sealed مقابل enum</h2>\n<div class=\"code-block src\"><span class=\"code-label\">Kotlin</span><pre dir=\"ltr\"><code>enum class Level { LOW, MEDIUM, HIGH }\n\nfun main() {\n    val level = Level.MEDIUM\n    println(level)\n    println(level.ordinal)\n    println(Level.values().joinToString())\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>MEDIUM\n1\nLOW, MEDIUM, HIGH</code></pre></div>\n<div class=\"table-wrap\"><table><thead><tr><th><code dir=\"ltr\">enum class</code></th><th><code dir=\"ltr\">sealed class</code></th></tr></thead><tbody><tr><td>قيم ثابتة بلا بيانات مختلفة</td><td>كل نوع يحمل بيانات مختلفة</td></tr><tr><td><code dir=\"ltr\">Level.LOW</code> نسخة واحدة</td><td><code dir=\"ltr\">Error(&quot;رسالة&quot;)</code> نسخ كثيرة ببيانات مختلفة</td></tr><tr><td>مناسب للأولويات والاتجاهات</td><td>مناسب للحالات والنتائج والأحداث</td></tr></tbody></table></div>\n<h2>ملخص الدرس</h2>\n<ul><li><code dir=\"ltr\">sealed class</code> أو <code dir=\"ltr\">sealed interface</code> تحدد مجموعة مغلقة من الأنواع الفرعية.</li><li><code dir=\"ltr\">when</code> عليها لا تحتاج <code dir=\"ltr\">else</code>، والمترجم يضمن تغطية كل الحالات.</li><li>نمط حالات الشاشة: Loading و Success و Error.</li><li><code dir=\"ltr\">enum</code> للقيم الثابتة البسيطة، و <code dir=\"ltr\">sealed</code> عندما تحمل الحالات بيانات مختلفة.</li></ul>",
   "exercise": {
    "prompt": "<p>عرّف <code dir=\"ltr\">sealed interface Result</code> فيها ثلاث حالات:</p>\n<ul><li><code dir=\"ltr\">data class Ok(val value: Int)</code></li><li><code dir=\"ltr\">data class Fail(val reason: String)</code></li><li><code dir=\"ltr\">object Empty</code></li></ul>\n<p>ثم اكتب دالة <code dir=\"ltr\">parse(input: String): Result</code>:</p>\n<ul><li>نص فارغ (<code dir=\"ltr\">isBlank()</code>) يُرجع <code dir=\"ltr\">Empty</code>.</li><li>نص يتحول لرقم (<code dir=\"ltr\">toIntOrNull()</code>) يُرجع <code dir=\"ltr\">Ok</code>.</li><li>غير ذلك يُرجع <code dir=\"ltr\">Fail(&quot;ليس رقماً: X&quot;)</code>.</li></ul>\n<p>ودالة <code dir=\"ltr\">show(r: Result): String</code> بـ <code dir=\"ltr\">when</code> دون <code dir=\"ltr\">else</code>.</p>",
    "starter": "// الأنواع والدالتان هنا\n\nfun main() {\n    for (input in listOf(\"42\", \"\", \"abc\")) {\n        println(show(parse(input)))\n    }\n}",
    "expected": "رقم: 42\nفارغ\nخطأ: ليس رقماً: abc",
    "solution": "sealed interface Result\ndata class Ok(val value: Int) : Result\ndata class Fail(val reason: String) : Result\nobject Empty : Result\n\nfun parse(input: String): Result {\n    if (input.isBlank()) return Empty\n    val n = input.toIntOrNull() ?: return Fail(\"ليس رقماً: $input\")\n    return Ok(n)\n}\n\nfun show(r: Result): String = when (r) {\n    is Ok -> \"رقم: ${r.value}\"\n    is Fail -> \"خطأ: ${r.reason}\"\n    Empty -> \"فارغ\"\n}\n\nfun main() {\n    for (input in listOf(\"42\", \"\", \"abc\")) {\n        println(show(parse(input)))\n    }\n}"
   },
   "quiz": [
    {
     "q": "ما الميزة الأساسية لـ sealed class مع when؟",
     "o": [
      "المترجم يعرف كل الحالات فيتأكد أنها معالجة دون حاجة لـ else",
      "تجعل when أسرع",
      "تمنع الوراثة كلياً"
     ],
     "a": 0,
     "why": "نسيان حالة يصبح خطأ ترجمة."
    },
    {
     "q": "متى تختار sealed class بدل enum؟",
     "o": [
      "عندما تحمل كل حالة بيانات مختلفة، مثل Error فيها رسالة",
      "دائماً",
      "للقيم الثابتة البسيطة"
     ],
     "a": 0,
     "why": "enum للقيم البسيطة، و sealed للحالات الغنية."
    },
    {
     "q": "لماذا تُعرَّف حالة Loading كـ object؟",
     "o": [
      "لأنها لا تحمل بيانات، فتكفي نسخة واحدة منها",
      "لأن object أسرع",
      "لأن data class لا تعمل مع sealed"
     ],
     "a": 0,
     "why": "لا داعي لإنشاء نسخ متعددة متطابقة."
    }
   ]
  },
  {
   "body": "<h2>كائن واحد فقط</h2>\n<p>أحياناً تحتاج <strong>نسخة واحدة فقط</strong> من شيء في كل التطبيق: إعدادات التطبيق، أو مدير قاعدة البيانات، أو سجل الأحداث. في Kotlin تكتب <code dir=\"ltr\">object</code> بدل <code dir=\"ltr\">class</code>:</p>\n<div class=\"code-block src\"><span class=\"code-label\">Kotlin</span><pre dir=\"ltr\"><code>object AppConfig {\n    const val VERSION = &quot;2.1.0&quot;\n    var darkMode = false\n    private val visits = mutableListOf&lt;String&gt;()\n\n    fun log(page: String) {\n        visits.add(page)\n    }\n\n    fun summary() = &quot;زيارات: ${visits.size}، الوضع الليلي: $darkMode&quot;\n}\n\nfun main() {\n    AppConfig.log(&quot;الرئيسية&quot;)\n    AppConfig.log(&quot;المنتجات&quot;)\n    AppConfig.darkMode = true\n    println(AppConfig.VERSION)\n    println(AppConfig.summary())\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>2.1.0\nزيارات: 2، الوضع الليلي: true</code></pre></div>\n<ul><li><code dir=\"ltr\">object</code> ينشئ الصنف <strong>ونسخته الوحيدة</strong> معاً، وهو نمط التصميم المسمى <strong>Singleton</strong>.</li><li>نصل إليه باسمه مباشرة: <code dir=\"ltr\">AppConfig.log(...)</code>.</li><li><code dir=\"ltr\">const val</code> ثابت يُعرف وقت الترجمة.</li></ul>\n<h2>companion object: أعضاء الصنف نفسه</h2>\n<p>ما يقابل <code dir=\"ltr\">static</code> في Java. أعضاء تنتمي للصنف وليس لكل نسخة:</p>\n<div class=\"code-block src\"><span class=\"code-label\">Kotlin</span><pre dir=\"ltr\"><code>class User private constructor(val name: String, val role: String) {\n    companion object {\n        private var created = 0\n\n        fun admin(name: String): User {\n            created++\n            return User(name, &quot;مدير&quot;)\n        }\n\n        fun guest(): User {\n            created++\n            return User(&quot;زائر&quot;, &quot;ضيف&quot;)\n        }\n\n        fun count() = created\n    }\n\n    override fun toString() = &quot;$name ($role)&quot;\n}\n\nfun main() {\n    val a = User.admin(&quot;هند&quot;)\n    val g = User.guest()\n    println(a)\n    println(g)\n    println(&quot;أُنشئ ${User.count()} مستخدمين&quot;)\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>هند (مدير)\nزائر (ضيف)\nأُنشئ 2 مستخدمين</code></pre></div>\n<p><code dir=\"ltr\">private constructor</code> يمنع إنشاء المستخدم مباشرة، فالطريقة الوحيدة هي <strong>الدوال المصنعية (Factory Functions)</strong> في الـ companion. هذا النمط شائع جداً: <code dir=\"ltr\">newInstance()</code> في Fragments بـ Android.</p>\n<h2>الكائنات المجهولة</h2>\n<p>لإنشاء كائن ينفّذ واجهة لمرة واحدة:</p>\n<div class=\"code-block src\"><span class=\"code-label\">Kotlin</span><pre dir=\"ltr\"><code>interface ClickListener {\n    fun onClick(id: Int)\n}\n\nfun setListener(listener: ClickListener) {\n    listener.onClick(7)\n}\n\nfun main() {\n    setListener(object : ClickListener {\n        override fun onClick(id: Int) {\n            println(&quot;ضُغط العنصر $id&quot;)\n        }\n    })\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>ضُغط العنصر 7</code></pre></div>\n<h2>ملخص الدرس</h2>\n<ul><li><code dir=\"ltr\">object</code> ينشئ صنفاً ونسخته الوحيدة (Singleton).</li><li><code dir=\"ltr\">companion object</code> لأعضاء الصنف نفسه، مثل الدوال المصنعية والعدّادات.</li><li><code dir=\"ltr\">const val</code> للثوابت المعروفة وقت الترجمة.</li><li><code dir=\"ltr\">object : Interface { }</code> لكائن مجهول ينفّذ واجهة.</li></ul>",
   "exercise": {
    "prompt": "<ol><li>أنشئ <code dir=\"ltr\">object Cart</code> فيه قائمة خاصة <code dir=\"ltr\">items</code> من نوع <code dir=\"ltr\">MutableList&lt;Pair&lt;String, Double&gt;&gt;</code>، وطريقة <code dir=\"ltr\">add(name: String, price: Double)</code>، وطريقة <code dir=\"ltr\">total(): Double</code>، وطريقة <code dir=\"ltr\">count(): Int</code>.</li><li>أنشئ <code dir=\"ltr\">class Coupon</code> بمُنشئ خاص فيه <code dir=\"ltr\">code</code> و <code dir=\"ltr\">percent</code>، و companion object فيه دالة <code dir=\"ltr\">of(code: String): Coupon?</code> تُرجع كوبون خصم 10% للرمز <code dir=\"ltr\">&quot;SAVE10&quot;</code> و <code dir=\"ltr\">null</code> لغيره.</li></ol>",
    "starter": "// أكمل هنا\n\nfun main() {\n    Cart.add(\"كتاب\", 60.0)\n    Cart.add(\"قلم\", 15.0)\n    println(\"${Cart.count()} منتجات بإجمالي ${Cart.total()}\")\n    val coupon = Coupon.of(\"SAVE10\")\n    val total = Cart.total() * (100 - (coupon?.percent ?: 0)) / 100\n    println(\"بعد الخصم: $total\")\n    println(Coupon.of(\"WRONG\"))\n}",
    "expected": "2 منتجات بإجمالي 75.0\nبعد الخصم: 67.5\nnull",
    "solution": "object Cart {\n    private val items: MutableList<Pair<String, Double>> = mutableListOf()\n\n    fun add(name: String, price: Double) {\n        items.add(name to price)\n    }\n\n    fun total(): Double = items.sumOf { it.second }\n\n    fun count(): Int = items.size\n}\n\nclass Coupon private constructor(val code: String, val percent: Int) {\n    companion object {\n        fun of(code: String): Coupon? = if (code == \"SAVE10\") Coupon(code, 10) else null\n    }\n}\n\nfun main() {\n    Cart.add(\"كتاب\", 60.0)\n    Cart.add(\"قلم\", 15.0)\n    println(\"${Cart.count()} منتجات بإجمالي ${Cart.total()}\")\n    val coupon = Coupon.of(\"SAVE10\")\n    val total = Cart.total() * (100 - (coupon?.percent ?: 0)) / 100\n    println(\"بعد الخصم: $total\")\n    println(Coupon.of(\"WRONG\"))\n}"
   },
   "quiz": [
    {
     "q": "كم نسخة توجد من <code dir=\"ltr\">object Settings</code> في البرنامج؟",
     "o": [
      "نسخة واحدة فقط",
      "نسخة لكل استخدام",
      "لا توجد نسخ"
     ],
     "a": 0,
     "why": "object نمط Singleton مدمج في اللغة."
    },
    {
     "q": "ما الذي يقابل static في Java داخل أصناف Kotlin؟",
     "o": [
      "companion object",
      "object",
      "const"
     ],
     "a": 0,
     "why": "أعضاء الـ companion تنتمي للصنف نفسه."
    },
    {
     "q": "ما فائدة <code dir=\"ltr\">private constructor</code> مع دوال مصنعية في الـ companion؟",
     "o": [
      "التحكم في طريقة إنشاء الكائنات، مثل التحقق أو إرجاع null",
      "تسريع الإنشاء",
      "منع استخدام الصنف كلياً"
     ],
     "a": 0,
     "why": "الدوال المصنعية واجهة إنشاء واضحة وآمنة."
    }
   ]
  }
 ],
 [
  {
   "body": "<h2>للقراءة فقط أو قابلة للتعديل</h2>\n<p>Kotlin تفرّق بوضوح بين المجموعات <strong>للقراءة فقط</strong> والمجموعات <strong>القابلة للتعديل</strong>:</p>\n<div class=\"table-wrap\"><table><thead><tr><th>للقراءة فقط</th><th>قابلة للتعديل</th></tr></thead><tbody><tr><td><code dir=\"ltr\">listOf(...)</code></td><td><code dir=\"ltr\">mutableListOf(...)</code></td></tr><tr><td><code dir=\"ltr\">setOf(...)</code></td><td><code dir=\"ltr\">mutableSetOf(...)</code></td></tr><tr><td><code dir=\"ltr\">mapOf(...)</code></td><td><code dir=\"ltr\">mutableMapOf(...)</code></td></tr></tbody></table></div>\n<div class=\"code-block src\"><span class=\"code-label\">Kotlin</span><pre dir=\"ltr\"><code>fun main() {\n    val fixed = listOf(&quot;أ&quot;, &quot;ب&quot;)\n    val tasks = mutableListOf(&quot;الدراسة&quot;)\n    tasks.add(&quot;الرياضة&quot;)\n    tasks.add(0, &quot;الاستيقاظ&quot;)\n    tasks.remove(&quot;الرياضة&quot;)\n    println(fixed)\n    println(tasks)\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>[أ, ب]\n[الاستيقاظ, الدراسة]</code></pre></div>\n<div class=\"callout tip\">💡 ابدأ بالمجموعة للقراءة فقط، واستخدم <code dir=\"ltr\">mutable</code> عندما تحتاج التعديل فعلاً، تماماً كقاعدة <code dir=\"ltr\">val</code> و <code dir=\"ltr\">var</code>.</div>\n<h2>List</h2>\n<div class=\"code-block src\"><span class=\"code-label\">Kotlin</span><pre dir=\"ltr\"><code>fun main() {\n    val scores = listOf(90, 75, 88, 62)\n    println(scores.size)\n    println(scores[0])\n    println(scores.first())\n    println(scores.last())\n    println(scores.getOrNull(10))\n    println(scores.contains(88))\n    println(88 in scores)\n    println(scores.indexOf(75))\n    println(scores.sorted())\n    println(scores.reversed())\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>4\n90\n90\n62\nnull\ntrue\ntrue\n1\n[62, 75, 88, 90]\n[62, 88, 75, 90]</code></pre></div>\n<p><code dir=\"ltr\">getOrNull</code> آمنة: تُرجع <code dir=\"ltr\">null</code> بدل الانهيار عند فهرس غير موجود.</p>\n<h2>Map</h2>\n<div class=\"code-block src\"><span class=\"code-label\">Kotlin</span><pre dir=\"ltr\"><code>fun main() {\n    val stock = mutableMapOf(&quot;قلم&quot; to 40, &quot;دفتر&quot; to 15)\n    stock[&quot;مسطرة&quot;] = 8\n    stock[&quot;قلم&quot;] = (stock[&quot;قلم&quot;] ?: 0) - 5\n\n    println(stock)\n    println(stock[&quot;دفتر&quot;])\n    println(stock[&quot;ممحاة&quot;])\n    println(stock.getOrDefault(&quot;ممحاة&quot;, 0))\n    println(stock.keys)\n    println(stock.values)\n\n    for ((item, qty) in stock) {\n        println(&quot;$item: $qty&quot;)\n    }\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>{قلم=35, دفتر=15, مسطرة=8}\n15\nnull\n0\n[قلم, دفتر, مسطرة]\n[35, 15, 8]\nقلم: 35\nدفتر: 15\nمسطرة: 8</code></pre></div>\n<ul><li><code dir=\"ltr\">&quot;قلم&quot; to 40</code> تنشئ زوجاً (Pair).</li><li><code dir=\"ltr\">map[key]</code> تُرجع نوعاً يقبل null، لأن المفتاح قد لا يوجد.</li></ul>\n<h2>Set</h2>\n<div class=\"code-block src\"><span class=\"code-label\">Kotlin</span><pre dir=\"ltr\"><code>fun main() {\n    val tags = mutableSetOf(&quot;kotlin&quot;, &quot;android&quot;)\n    tags.add(&quot;kotlin&quot;)\n    tags.add(&quot;mobile&quot;)\n    println(tags)\n    println(tags.size)\n\n    val a = setOf(1, 2, 3, 4)\n    val b = setOf(3, 4, 5)\n    println(a union b)\n    println(a intersect b)\n    println(a subtract b)\n\n    println(listOf(1, 1, 2, 3, 3).toSet())\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>[kotlin, android, mobile]\n3\n[1, 2, 3, 4, 5]\n[3, 4]\n[1, 2]\n[1, 2, 3]</code></pre></div>\n<h2>ملخص الدرس</h2>\n<ul><li><code dir=\"ltr\">listOf</code> و <code dir=\"ltr\">setOf</code> و <code dir=\"ltr\">mapOf</code> للقراءة فقط، و <code dir=\"ltr\">mutable...</code> للتعديل.</li><li><code dir=\"ltr\">getOrNull</code> و <code dir=\"ltr\">getOrDefault</code> للوصول الآمن.</li><li><code dir=\"ltr\">&quot;key&quot; to value</code> تنشئ زوجاً في Map.</li><li>Set لا تقبل التكرار، وتدعم <code dir=\"ltr\">union</code> و <code dir=\"ltr\">intersect</code> و <code dir=\"ltr\">subtract</code>.</li></ul>",
   "exercise": {
    "prompt": "<p>لديك قائمة حضور فيها تكرار:</p>\n<ol><li>اطبع عدد الطلاب المختلفين باستخدام <code dir=\"ltr\">toSet()</code>.</li><li>أنشئ <code dir=\"ltr\">mutableMapOf&lt;String, Int&gt;()</code> اسمها <code dir=\"ltr\">attendance</code> تعدّ مرات حضور كل طالب، واطبعها.</li><li>اطبع: <code dir=\"ltr\">الأكثر حضوراً: X</code> (استخدم <code dir=\"ltr\">maxByOrNull { it.value }</code> على الـ map).</li></ol>",
    "starter": "fun main() {\n    val visits = listOf(\"رغد\", \"تركي\", \"رغد\", \"سما\", \"تركي\", \"رغد\")\n    // أكمل هنا\n}",
    "expected": "3\n{رغد=3, تركي=2, سما=1}\nالأكثر حضوراً: رغد",
    "solution": "fun main() {\n    val visits = listOf(\"رغد\", \"تركي\", \"رغد\", \"سما\", \"تركي\", \"رغد\")\n    println(visits.toSet().size)\n\n    val attendance = mutableMapOf<String, Int>()\n    for (name in visits) {\n        attendance[name] = (attendance[name] ?: 0) + 1\n    }\n    println(attendance)\n\n    val top = attendance.maxByOrNull { it.value }\n    println(\"الأكثر حضوراً: ${top?.key}\")\n}"
   },
   "quiz": [
    {
     "q": "هل يمكن استدعاء <code dir=\"ltr\">add</code> على قائمة أُنشئت بـ <code dir=\"ltr\">listOf</code>؟",
     "o": [
      "نعم",
      "لا، لأنها للقراءة فقط، ويجب استخدام mutableListOf",
      "فقط للعناصر النصية"
     ],
     "a": 1,
     "why": "Kotlin تفرّق بين النوعين."
    },
    {
     "q": "ماذا يُرجع <code dir=\"ltr\">map[&quot;غير موجود&quot;]</code>؟",
     "o": [
      "null",
      "خطأ",
      "0"
     ],
     "a": 0,
     "why": "لذلك نوع القيمة المُرجعة يقبل null."
    },
    {
     "q": "ماذا تنشئ <code dir=\"ltr\">&quot;أ&quot; to 1</code>؟",
     "o": [
      "زوجاً Pair من &quot;أ&quot; و 1",
      "Map",
      "قائمة"
     ],
     "a": 0,
     "why": "وتُستخدم لإنشاء عناصر mapOf."
    }
   ]
  },
  {
   "body": "<h2>قوة الأسلوب الوظيفي</h2>\n<p>مجموعات Kotlin تأتي بعشرات الدوال الجاهزة التي تغنيك عن كتابة الحلقات يدوياً.</p>\n<h2>map و filter</h2>\n<div class=\"code-block src\"><span class=\"code-label\">Kotlin</span><pre dir=\"ltr\"><code>fun main() {\n    val prices = listOf(100, 250, 80, 40)\n    println(prices.map { it * 2 })\n    println(prices.filter { it &gt;= 80 })\n    println(prices.filterNot { it &gt;= 80 })\n    println(prices.mapIndexed { i, p -&gt; &quot;${i + 1}: $p&quot; })\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>[200, 500, 160, 80]\n[100, 250, 80]\n[40]\n[1: 100, 2: 250, 3: 80, 4: 40]</code></pre></div>\n<h2>التجميع</h2>\n<div class=\"code-block src\"><span class=\"code-label\">Kotlin</span><pre dir=\"ltr\"><code>fun main() {\n    val cart = listOf(30, 45, 25)\n    println(cart.sum())\n    println(cart.average())\n    println(cart.maxOrNull())\n    println(cart.count { it &gt; 28 })\n    println(cart.reduce { acc, p -&gt; acc + p })\n    println(cart.fold(15) { acc, p -&gt; acc + p })\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>100\n33.333333333333336\n45\n2\n100\n115</code></pre></div>\n<h2>البحث والتحقق</h2>\n<div class=\"code-block src\"><span class=\"code-label\">Kotlin</span><pre dir=\"ltr\"><code>fun main() {\n    val temps = listOf(22, 35, 28, 41)\n    println(temps.any { it &gt; 40 })\n    println(temps.all { it &gt; 20 })\n    println(temps.none { it &lt; 0 })\n    println(temps.find { it &gt; 30 })\n    println(temps.firstOrNull { it &gt; 50 })\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>true\ntrue\ntrue\n35\nnull</code></pre></div>\n<h2>مع الكائنات: الاستخدام الحقيقي</h2>\n<div class=\"code-block src\"><span class=\"code-label\">Kotlin</span><pre dir=\"ltr\"><code>data class Product(val name: String, val category: String, val price: Double)\n\nfun main() {\n    val products = listOf(\n        Product(&quot;ساعة&quot;, &quot;إلكترونيات&quot;, 900.0),\n        Product(&quot;قميص&quot;, &quot;ملابس&quot;, 120.0),\n        Product(&quot;سماعة&quot;, &quot;إلكترونيات&quot;, 250.0),\n        Product(&quot;حذاء&quot;, &quot;ملابس&quot;, 300.0)\n    )\n\n    println(products.sortedByDescending { it.price }.map { it.name })\n    println(products.maxByOrNull { it.price }?.name)\n    println(products.sumOf { it.price })\n\n    val byCategory = products.groupBy { it.category }\n    for ((category, items) in byCategory) {\n        println(&quot;$category: ${items.map { it.name }}&quot;)\n    }\n\n    val (cheap, expensive) = products.partition { it.price &lt; 200 }\n    println(&quot;رخيص: ${cheap.size}، غالٍ: ${expensive.size}&quot;)\n\n    println(products.associate { it.name to it.price })\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>[ساعة, حذاء, سماعة, قميص]\nساعة\n1570.0\nإلكترونيات: [ساعة, سماعة]\nملابس: [قميص, حذاء]\nرخيص: 1، غالٍ: 3\n{ساعة=900.0, قميص=120.0, سماعة=250.0, حذاء=300.0}</code></pre></div>\n<div class=\"table-wrap\"><table><thead><tr><th>الدالة</th><th>الناتج</th></tr></thead><tbody><tr><td><code dir=\"ltr\">sortedBy</code> و <code dir=\"ltr\">sortedByDescending</code></td><td>قائمة مرتبة حسب خاصية</td></tr><tr><td><code dir=\"ltr\">maxByOrNull</code> و <code dir=\"ltr\">minByOrNull</code></td><td>العنصر الأعلى أو الأدنى</td></tr><tr><td><code dir=\"ltr\">sumOf { }</code></td><td>مجموع قيمة محسوبة</td></tr><tr><td><code dir=\"ltr\">groupBy { }</code></td><td><code dir=\"ltr\">Map</code> من المجموعات</td></tr><tr><td><code dir=\"ltr\">partition { }</code></td><td>قائمتان: ما يحقق الشرط وما لا يحققه</td></tr><tr><td><code dir=\"ltr\">associate { }</code></td><td><code dir=\"ltr\">Map</code> من العناصر</td></tr><tr><td><code dir=\"ltr\">distinctBy { }</code></td><td>حذف التكرار حسب خاصية</td></tr><tr><td><code dir=\"ltr\">take(n)</code> و <code dir=\"ltr\">drop(n)</code></td><td>أول n أو تخطي n</td></tr></tbody></table></div>\n<h2>السلسلة</h2>\n<div class=\"code-block src\"><span class=\"code-label\">Kotlin</span><pre dir=\"ltr\"><code>fun main() {\n    val orders = listOf(120, 40, 300, 75, 500)\n    val result = orders\n        .filter { it &gt;= 100 }\n        .map { it * 0.9 }\n        .sum()\n    println(result)\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>828.0</code></pre></div>\n<h2>ملخص الدرس</h2>\n<ul><li><code dir=\"ltr\">map</code> و <code dir=\"ltr\">filter</code> للتحويل والتصفية، و <code dir=\"ltr\">sum</code> و <code dir=\"ltr\">average</code> و <code dir=\"ltr\">count</code> و <code dir=\"ltr\">fold</code> للتجميع.</li><li><code dir=\"ltr\">any</code> و <code dir=\"ltr\">all</code> و <code dir=\"ltr\">none</code> و <code dir=\"ltr\">find</code> للبحث.</li><li><code dir=\"ltr\">sortedBy</code> و <code dir=\"ltr\">groupBy</code> و <code dir=\"ltr\">partition</code> و <code dir=\"ltr\">associate</code> للكائنات.</li><li>السلسلة تجعل معالجة البيانات تُقرأ كجملة.</li></ul>",
   "exercise": {
    "prompt": "<p>لديك قائمة طلاب بدرجاتهم. باستخدام دوال المجموعات <strong>دون حلقات for</strong>:</p>\n<ol><li>اطبع أسماء الناجحين (60 فأكثر) مرتبين تنازلياً حسب الدرجة.</li><li>اطبع متوسط الدرجات مقرباً لعدد صحيح بـ <code dir=\"ltr\">toInt()</code>.</li><li>اطبع اسم صاحب أعلى درجة.</li><li>قسّم الطلاب بـ <code dir=\"ltr\">groupBy</code> حسب التقدير (<code dir=\"ltr\">A</code> لـ 90 فأكثر، و <code dir=\"ltr\">B</code> لـ 75 فأكثر، و <code dir=\"ltr\">C</code> لغير ذلك)، واطبع الـ Map بأسماء الطلاب فقط باستخدام <code dir=\"ltr\">mapValues</code>.</li></ol>",
    "starter": "data class Student(val name: String, val grade: Int)\n\nfun main() {\n    val students = listOf(\n        Student(\"ريم\", 95), Student(\"فهد\", 58),\n        Student(\"هند\", 82), Student(\"سعد\", 77), Student(\"لين\", 91)\n    )\n    // أكمل هنا\n}",
    "expected": "[ريم, لين, هند, سعد]\n80\nريم\n{A=[ريم, لين], C=[فهد], B=[هند, سعد]}",
    "solution": "data class Student(val name: String, val grade: Int)\n\nfun main() {\n    val students = listOf(\n        Student(\"ريم\", 95), Student(\"فهد\", 58),\n        Student(\"هند\", 82), Student(\"سعد\", 77), Student(\"لين\", 91)\n    )\n    println(students.filter { it.grade >= 60 }.sortedByDescending { it.grade }.map { it.name })\n    println(students.map { it.grade }.average().toInt())\n    println(students.maxByOrNull { it.grade }?.name)\n    val levels = students.groupBy {\n        when {\n            it.grade >= 90 -> \"A\"\n            it.grade >= 75 -> \"B\"\n            else -> \"C\"\n        }\n    }\n    println(levels.mapValues { entry -> entry.value.map { it.name } })\n}"
   },
   "quiz": [
    {
     "q": "ما ناتج <code dir=\"ltr\">listOf(1, 2, 3).map { it * 10 }</code>؟",
     "o": [
      "<code dir=\"ltr\">[10, 20, 30]</code>",
      "<code dir=\"ltr\">60</code>",
      "<code dir=\"ltr\">[1, 2, 3]</code>"
     ],
     "a": 0,
     "why": "map تحوّل كل عنصر."
    },
    {
     "q": "ماذا تُرجع <code dir=\"ltr\">partition { it &gt; 5 }</code>؟",
     "o": [
      "زوجاً من قائمتين: ما يحقق الشرط وما لا يحققه",
      "القائمة مرتبة",
      "عدد العناصر"
     ],
     "a": 0,
     "why": "ويمكن تفكيكه مباشرة: val (a, b) = ..."
    },
    {
     "q": "ما نوع ناتج <code dir=\"ltr\">groupBy { it.category }</code>؟",
     "o": [
      "Map مفاتيحها التصنيفات وقيمها قوائم العناصر",
      "List",
      "Set"
     ],
     "a": 0,
     "why": "كل تصنيف مع عناصره."
    }
   ]
  },
  {
   "body": "<h2>التقييم الكسول</h2>\n<p>دوال المجموعات العادية <strong>حريصة (Eager)</strong>: كل خطوة تنشئ قائمة جديدة كاملة. مع <code dir=\"ltr\">filter</code> ثم <code dir=\"ltr\">map</code> ثم <code dir=\"ltr\">take</code>، تُعالج كل العناصر في كل مرحلة حتى لو احتجت عنصرين فقط!</p>\n<p><strong>Sequence</strong> تعمل <strong>بكسل (Lazy)</strong>: تمرر كل عنصر عبر كل الخطوات واحداً بعد الآخر، وتتوقف عندما تحصل على ما تحتاجه.</p>\n<h2>رؤية الفرق</h2>\n<div class=\"code-block src\"><span class=\"code-label\">Kotlin</span><pre dir=\"ltr\"><code>fun main() {\n    val numbers = listOf(1, 2, 3, 4, 5, 6)\n\n    println(&quot;--- List ---&quot;)\n    val a = numbers\n        .map { println(&quot;map $it&quot;); it * 2 }\n        .filter { println(&quot;filter $it&quot;); it &gt; 4 }\n        .first()\n    println(&quot;النتيجة $a&quot;)\n\n    println(&quot;--- Sequence ---&quot;)\n    val b = numbers.asSequence()\n        .map { println(&quot;map $it&quot;); it * 2 }\n        .filter { println(&quot;filter $it&quot;); it &gt; 4 }\n        .first()\n    println(&quot;النتيجة $b&quot;)\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>--- List ---\nmap 1\nmap 2\nmap 3\nmap 4\nmap 5\nmap 6\nfilter 2\nfilter 4\nfilter 6\nfilter 8\nfilter 10\nfilter 12\nالنتيجة 6\n--- Sequence ---\nmap 1\nfilter 2\nmap 2\nfilter 4\nmap 3\nfilter 6\nالنتيجة 6</code></pre></div>\n<ul><li>مع <strong>List</strong>: نُفّذت <code dir=\"ltr\">map</code> على العناصر الستة كلها، ثم <code dir=\"ltr\">filter</code> على الستة، ثم أُخذ الأول.</li><li>مع <strong>Sequence</strong>: عنصر 1 مر بـ map ثم filter فرُفض، وعنصر 2 كذلك، وعنصر 3 نجح فتوقف كل شيء. <strong>6 عمليات بدل 12</strong>.</li></ul>\n<h2>سلاسل لا نهائية</h2>\n<p>لأنها كسولة، يمكن للـ Sequence أن تكون <strong>بلا نهاية</strong>:</p>\n<div class=\"code-block src\"><span class=\"code-label\">Kotlin</span><pre dir=\"ltr\"><code>fun main() {\n    val evens = generateSequence(2) { it + 2 }\n    println(evens.take(5).toList())\n\n    val powers = generateSequence(1) { it * 2 }\n        .takeWhile { it &lt; 100 }\n        .toList()\n    println(powers)\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>[2, 4, 6, 8, 10]\n[1, 2, 4, 8, 16, 32, 64]</code></pre></div>\n<p><code dir=\"ltr\">generateSequence(بداية) { التالي }</code> تولّد عناصر عند الطلب فقط.</p>\n<h2>متى أستخدم Sequence؟</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>استخدم List</th><th>استخدم Sequence</th></tr></thead><tbody><tr><td>مجموعات صغيرة إلى متوسطة</td><td>مجموعات ضخمة جداً</td></tr><tr><td>خطوة أو خطوتان</td><td>سلاسل طويلة من العمليات</td></tr><tr><td>تحتاج كل النتائج</td><td>تحتاج جزءاً منها (<code dir=\"ltr\">first</code> و <code dir=\"ltr\">take</code>)</td></tr><tr><td></td><td>بيانات لا نهائية أو مولّدة</td></tr></tbody></table></div>\n<div class=\"callout tip\">💡 للمجموعات الصغيرة، List أسرع فعلياً بسبب تكلفة إدارة الكسل. لا تحوّل كل شيء إلى Sequence تلقائياً.</div>\n<h2>العمليات الوسيطة والنهائية</h2>\n<div class=\"code-block src\"><span class=\"code-label\">Kotlin</span><pre dir=\"ltr\"><code>fun main() {\n    val seq = sequenceOf(5, 3, 8, 1).map { it * 10 }\n    println(&quot;لم يُحسب شيء بعد&quot;)\n    println(seq.sorted().toList())\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>لم يُحسب شيء بعد\n[10, 30, 50, 80]</code></pre></div>\n<ul><li>العمليات <strong>الوسيطة</strong> (<code dir=\"ltr\">map</code> و <code dir=\"ltr\">filter</code>) لا تنفّذ شيئاً، بل تبني الخطة.</li><li>العمليات <strong>النهائية</strong> (<code dir=\"ltr\">toList</code> و <code dir=\"ltr\">first</code> و <code dir=\"ltr\">sum</code> و <code dir=\"ltr\">count</code>) هي التي تشغّل الحساب.</li></ul>\n<h2>ملخص الدرس</h2>\n<ul><li>Sequence كسولة: كل عنصر يمر بكل الخطوات، وتتوقف عند الحاجة.</li><li><code dir=\"ltr\">asSequence()</code> للتحويل، و <code dir=\"ltr\">generateSequence</code> للتوليد.</li><li>مفيدة للبيانات الضخمة واللانهائية، و List أفضل للصغيرة.</li><li>لا يحدث حساب حتى تُستدعى عملية نهائية.</li></ul>",
   "exercise": {
    "prompt": "<p>باستخدام <code dir=\"ltr\">generateSequence</code> ابدأ من الرقم <code dir=\"ltr\">1</code> وكل عنصر هو السابق <code dir=\"ltr\">+ 1</code>، ثم:</p>\n<ol><li>صفِّ الأعداد التي تقبل القسمة على 7 <strong>وعلى</strong> 3 معاً.</li><li>خذ أول <strong>4</strong> منها.</li><li>اطبعها كقائمة.</li><li>اطبع مجموعها.</li></ol>",
    "starter": "fun main() {\n    // أكمل هنا\n}",
    "expected": "[21, 42, 63, 84]\n210",
    "solution": "fun main() {\n    val result = generateSequence(1) { it + 1 }\n        .filter { it % 7 == 0 && it % 3 == 0 }\n        .take(4)\n        .toList()\n    println(result)\n    println(result.sum())\n}"
   },
   "quiz": [
    {
     "q": "ما الفرق الأساسي بين List و Sequence في المعالجة؟",
     "o": [
      "List تعالج كل العناصر في كل خطوة، و Sequence تمرر كل عنصر عبر كل الخطوات وتتوقف عند الحاجة",
      "Sequence أسرع دائماً",
      "لا فرق"
     ],
     "a": 0,
     "why": "الكسل يوفر العمل عندما تحتاج جزءاً من النتائج."
    },
    {
     "q": "متى تُنفَّذ العمليات في Sequence؟",
     "o": [
      "عند استدعاء عملية نهائية مثل toList أو first",
      "فور كتابة map",
      "عند إنشاء الـ Sequence"
     ],
     "a": 0,
     "why": "العمليات الوسيطة تبني الخطة فقط."
    },
    {
     "q": "كيف تتعامل مع سلسلة لا نهائية دون أن يتجمد البرنامج؟",
     "o": [
      "بعملية تحدّ النتائج مثل take أو takeWhile أو first",
      "لا يمكن ذلك",
      "بتحويلها إلى List مباشرة"
     ],
     "a": 0,
     "why": "toList على سلسلة لا نهائية لا تنتهي أبداً."
    }
   ]
  }
 ],
 [
  {
   "body": "<h2>أضف دوالاً لأصناف لا تملكها</h2>\n<p><strong>دوال الامتداد (Extension Functions)</strong> تتيح لك إضافة دوال جديدة لأي صنف، حتى أصناف Kotlin المدمجة مثل <code dir=\"ltr\">String</code> و <code dir=\"ltr\">Int</code>، دون تعديلها أو الوراثة منها:</p>\n<div class=\"code-block src\"><span class=\"code-label\">Kotlin</span><pre dir=\"ltr\"><code>fun String.isValidEmail(): Boolean = contains(&quot;@&quot;) &amp;&amp; contains(&quot;.&quot;)\n\nfun Int.isEven(): Boolean = this % 2 == 0\n\nfun Double.toRiyal(): String = &quot;%.2f ر.س&quot;.format(this)\n\nfun main() {\n    println(&quot;ali@mail.com&quot;.isValidEmail())\n    println(&quot;ali-mail&quot;.isValidEmail())\n    println(7.isEven())\n    println(149.5.toRiyal())\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>true\nfalse\nfalse\n149.50 ر.س</code></pre></div>\n<ul><li><code dir=\"ltr\">fun String.name()</code> تعني: دالة جديدة لكل النصوص.</li><li>داخل الدالة، <code dir=\"ltr\">this</code> هي القيمة التي استُدعيت عليها الدالة، ويمكن حذفها: <code dir=\"ltr\">contains(&quot;@&quot;)</code> تعني <code dir=\"ltr\">this.contains(&quot;@&quot;)</code>.</li></ul>\n<h2>دوال امتداد مع معاملات</h2>\n<div class=\"code-block src\"><span class=\"code-label\">Kotlin</span><pre dir=\"ltr\"><code>fun String.truncate(max: Int, suffix: String = &quot;...&quot;): String =\n    if (length &lt;= max) this else take(max) + suffix\n\nfun List&lt;Int&gt;.secondLargest(): Int? = sortedDescending().drop(1).firstOrNull()\n\nfun main() {\n    println(&quot;تعلم البرمجة بلغة Kotlin&quot;.truncate(10))\n    println(&quot;قصير&quot;.truncate(10))\n    println(listOf(4, 9, 2, 7).secondLargest())\n    println(listOf(5).secondLargest())\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>تعلم البرم...\nقصير\n7\nnull</code></pre></div>\n<h2>خصائص الامتداد</h2>\n<div class=\"code-block src\"><span class=\"code-label\">Kotlin</span><pre dir=\"ltr\"><code>val String.wordCount: Int\n    get() = trim().split(&quot; &quot;).filter { it.isNotEmpty() }.size\n\nval Int.minutes: Int\n    get() = this * 60\n\nfun main() {\n    println(&quot;Kotlin لغة رائعة جداً&quot;.wordCount)\n    println(5.minutes)\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>4\n300</code></pre></div>\n<h2>امتداد الأنواع القابلة لـ null</h2>\n<div class=\"code-block src\"><span class=\"code-label\">Kotlin</span><pre dir=\"ltr\"><code>fun String?.orDash(): String = if (this.isNullOrBlank()) &quot;—&quot; else this\n\nfun main() {\n    val phone: String? = null\n    val name: String? = &quot;رهف&quot;\n    println(phone.orDash())\n    println(name.orDash())\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>—\nرهف</code></pre></div>\n<p>يمكن استدعاء هذه الدالة حتى على <code dir=\"ltr\">null</code> بأمان، لأنها معرّفة على <code dir=\"ltr\">String?</code>.</p>\n<h2>لماذا هي مهمة؟</h2>\n<p>مكتبات Android الحديثة (Android KTX) مبنية على الامتدادات، فتجعل الكود أقصر وأوضح:</p>\n<div class=\"code-block src\"><span class=\"code-label\">Kotlin</span><pre dir=\"ltr\"><code>// بدون امتدادات\nview.setVisibility(View.GONE)\n// مع Android KTX\nview.isVisible = false</code></pre></div>\n<div class=\"callout tip\">💡 الامتداد لا يعدّل الصنف فعلاً ولا يصل إلى خصائصه الخاصة (private). هو دالة عادية بصيغة أجمل.</div>\n<h2>ملخص الدرس</h2>\n<ul><li><code dir=\"ltr\">fun Type.name()</code> يضيف دالة لأي نوع، و <code dir=\"ltr\">this</code> هي القيمة المستدعى عليها.</li><li>يمكن إضافة خصائص امتداد بـ <code dir=\"ltr\">get()</code>.</li><li>الامتداد على <code dir=\"ltr\">Type?</code> يمكن استدعاؤه على null.</li><li>لا يصل للأعضاء الخاصة، وهو تجميل للاستدعاء.</li></ul>",
   "exercise": {
    "prompt": "<p>اكتب ثلاث دوال امتداد:</p>\n<ol><li><code dir=\"ltr\">String.initials(): String</code> تُرجع الحرف الأول من كل كلمة مفصولة بنقطة. مثلاً <code dir=\"ltr\">&quot;محمد أحمد سالم&quot;</code> تُرجع <code dir=\"ltr\">م.أ.س</code>.</li><li><code dir=\"ltr\">Int.toArabicOrdinal(): String</code> تُرجع <code dir=\"ltr\">الأول</code> لـ 1 و <code dir=\"ltr\">الثاني</code> لـ 2 و <code dir=\"ltr\">الثالث</code> لـ 3 و <code dir=\"ltr\">رقم N</code> لغير ذلك.</li><li><code dir=\"ltr\">List&lt;Double&gt;.average2(): String</code> تُرجع المتوسط بخانتين عشريتين مستخدمة <code dir=\"ltr\">&quot;%.2f&quot;.format(...)</code>.</li></ol>",
    "starter": "// الامتدادات هنا\n\nfun main() {\n    println(\"محمد أحمد سالم\".initials())\n    println(2.toArabicOrdinal())\n    println(7.toArabicOrdinal())\n    println(listOf(4.0, 5.5, 6.0).average2())\n}",
    "expected": "م.أ.س\nالثاني\nرقم 7\n5.17",
    "solution": "fun String.initials(): String = split(\" \").filter { it.isNotEmpty() }.joinToString(\".\") { it.first().toString() }\n\nfun Int.toArabicOrdinal(): String = when (this) {\n    1 -> \"الأول\"\n    2 -> \"الثاني\"\n    3 -> \"الثالث\"\n    else -> \"رقم $this\"\n}\n\nfun List<Double>.average2(): String = \"%.2f\".format(average())\n\nfun main() {\n    println(\"محمد أحمد سالم\".initials())\n    println(2.toArabicOrdinal())\n    println(7.toArabicOrdinal())\n    println(listOf(4.0, 5.5, 6.0).average2())\n}"
   },
   "quiz": [
    {
     "q": "ماذا يعني <code dir=\"ltr\">fun Int.double() = this * 2</code>؟",
     "o": [
      "إضافة دالة double لكل الأعداد الصحيحة، و this هي العدد نفسه",
      "تعريف صنف جديد اسمه Int",
      "تعديل الصنف Int"
     ],
     "a": 0,
     "why": "الامتداد يضيف دالة دون تعديل الصنف."
    },
    {
     "q": "هل تستطيع دالة الامتداد الوصول إلى الخصائص private في الصنف؟",
     "o": [
      "نعم",
      "لا، لأنها دالة خارجية بصيغة أجمل",
      "فقط في Android"
     ],
     "a": 1,
     "why": "لا تكسر التغليف."
    },
    {
     "q": "كيف تكتب امتداداً يمكن استدعاؤه على قيمة null؟",
     "o": [
      "بتعريفه على النوع القابل لـ null مثل <code dir=\"ltr\">fun String?.x()</code>",
      "لا يمكن ذلك",
      "بإضافة !! عند الاستدعاء"
     ],
     "a": 0,
     "why": "وداخله تتعامل مع this كـ String?."
    }
   ]
  },
  {
   "body": "<h2>دوال النطاق</h2>\n<p>Kotlin توفر خمس دوال صغيرة تسمى <strong>دوال النطاق (Scope Functions)</strong>: <code dir=\"ltr\">let</code> و <code dir=\"ltr\">run</code> و <code dir=\"ltr\">with</code> و <code dir=\"ltr\">apply</code> و <code dir=\"ltr\">also</code>. كلها تنفّذ كتلة كود على كائن، والفرق في <strong>كيف تشير للكائن</strong> و<strong>ماذا تُرجع</strong>.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>الدالة</th><th>الإشارة للكائن</th><th>تُرجع</th><th>الاستخدام الأشهر</th></tr></thead><tbody><tr><td><code dir=\"ltr\">let</code></td><td><code dir=\"ltr\">it</code></td><td>نتيجة الكتلة</td><td>التعامل مع null، وتحويل قيمة</td></tr><tr><td><code dir=\"ltr\">apply</code></td><td><code dir=\"ltr\">this</code></td><td>الكائن نفسه</td><td>تهيئة الكائنات</td></tr><tr><td><code dir=\"ltr\">also</code></td><td><code dir=\"ltr\">it</code></td><td>الكائن نفسه</td><td>إجراء جانبي كالطباعة والتسجيل</td></tr><tr><td><code dir=\"ltr\">run</code></td><td><code dir=\"ltr\">this</code></td><td>نتيجة الكتلة</td><td>حساب نتيجة من كائن</td></tr><tr><td><code dir=\"ltr\">with</code></td><td><code dir=\"ltr\">this</code></td><td>نتيجة الكتلة</td><td>استدعاء طرق كثيرة على كائن</td></tr></tbody></table></div>\n<h2>let: مع null والتحويل</h2>\n<div class=\"code-block src\"><span class=\"code-label\">Kotlin</span><pre dir=\"ltr\"><code>fun main() {\n    val email: String? = &quot;LAYAN@MAIL.COM&quot;\n    email?.let {\n        println(&quot;سنرسل إلى ${it.lowercase()}&quot;)\n    }\n\n    val missing: String? = null\n    val length = missing?.let { it.length } ?: 0\n    println(length)\n\n    val result = &quot;  kotlin  &quot;.let { it.trim().uppercase() }\n    println(result)\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>سنرسل إلى layan@mail.com\n0\nKOTLIN</code></pre></div>\n<h2>apply: تهيئة الكائنات</h2>\n<div class=\"code-block src\"><span class=\"code-label\">Kotlin</span><pre dir=\"ltr\"><code>class Request {\n    var url = &quot;&quot;\n    var method = &quot;GET&quot;\n    var timeout = 30\n    override fun toString() = &quot;$method $url (${timeout}s)&quot;\n}\n\nfun main() {\n    val request = Request().apply {\n        url = &quot;https://api.example.com/users&quot;\n        method = &quot;POST&quot;\n        timeout = 10\n    }\n    println(request)\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>POST https://api.example.com/users (10s)</code></pre></div>\n<p>داخل <code dir=\"ltr\">apply</code> تكتب <code dir=\"ltr\">url</code> مباشرة بدل <code dir=\"ltr\">request.url</code>، والنتيجة هي الكائن نفسه بعد التهيئة. نمط شائع جداً في Android لتهيئة الكائنات والإعدادات.</p>\n<h2>also: إجراء جانبي</h2>\n<div class=\"code-block src\"><span class=\"code-label\">Kotlin</span><pre dir=\"ltr\"><code>fun main() {\n    val numbers = mutableListOf(3, 1, 2)\n        .also { println(&quot;قبل الترتيب: $it&quot;) }\n        .apply { sort() }\n        .also { println(&quot;بعد الترتيب: $it&quot;) }\n    println(numbers.size)\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>قبل الترتيب: [3, 1, 2]\nبعد الترتيب: [1, 2, 3]\n3</code></pre></div>\n<p><code dir=\"ltr\">also</code> لا تغيّر شيئاً في السلسلة، بل تضيف إجراءً جانبياً مثل التسجيل.</p>\n<h2>run و with: حساب نتيجة</h2>\n<div class=\"code-block src\"><span class=\"code-label\">Kotlin</span><pre dir=\"ltr\"><code>data class Rect(val width: Int, val height: Int)\n\nfun main() {\n    val rect = Rect(4, 6)\n\n    val area = rect.run { width * height }\n    println(area)\n\n    val description = with(rect) {\n        val perimeter = 2 * (width + height)\n        &quot;مستطيل ${width}×${height}، محيطه $perimeter&quot;\n    }\n    println(description)\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>24\nمستطيل 4×6، محيطه 20</code></pre></div>\n<h2>كيف تختار؟</h2>\n<ul><li>قيمة قد تكون null؟ **<code dir=\"ltr\">?.let</code>**</li><li>تهيئة كائن جديد؟ **<code dir=\"ltr\">apply</code>**</li><li>طباعة أو تسجيل في منتصف سلسلة؟ **<code dir=\"ltr\">also</code>**</li><li>حساب نتيجة من خصائص كائن؟ **<code dir=\"ltr\">run</code><strong> أو </strong><code dir=\"ltr\">with</code>**</li></ul>\n<div class=\"callout warn\">⚠️ لا تبالغ فيها. التداخل العميق بين دوال النطاق يجعل الكود صعب القراءة، وأحياناً يكون المتغير العادي أوضح.</div>\n<h2>ملخص الدرس</h2>\n<ul><li>دوال النطاق تنفّذ كتلة على كائن، وتختلف في <code dir=\"ltr\">it</code> أو <code dir=\"ltr\">this</code> وفي القيمة المُرجعة.</li><li><code dir=\"ltr\">let</code> لـ null والتحويل، و <code dir=\"ltr\">apply</code> للتهيئة، و <code dir=\"ltr\">also</code> للإجراءات الجانبية.</li><li><code dir=\"ltr\">run</code> و <code dir=\"ltr\">with</code> لحساب نتيجة من كائن.</li></ul>",
   "exercise": {
    "prompt": "<ol><li>أنشئ كائناً من الصنف <code dir=\"ltr\">Profile</code> باستخدام <code dir=\"ltr\">apply</code>: الاسم <code dir=\"ltr\">عزيز</code>، والمدينة <code dir=\"ltr\">تبوك</code>، والعمر <code dir=\"ltr\">29</code>.</li><li>استخدم <code dir=\"ltr\">also</code> لطباعة: <code dir=\"ltr\">تم إنشاء: X</code>.</li><li>استخدم <code dir=\"ltr\">let</code> على البريد الذي قد يكون null: إذا وُجد اطبع <code dir=\"ltr\">البريد: X</code>، وإلا اطبع <code dir=\"ltr\">لا يوجد بريد</code> (استخدم <code dir=\"ltr\">?: println(...)</code>).</li><li>استخدم <code dir=\"ltr\">run</code> لحساب واطباعة: <code dir=\"ltr\">عزيز من تبوك، 29 سنة</code>.</li></ol>",
    "starter": "class Profile {\n    var name = \"\"\n    var city = \"\"\n    var age = 0\n    var email: String? = null\n}\n\nfun main() {\n    // أكمل هنا\n}",
    "expected": "تم إنشاء: عزيز\nلا يوجد بريد\nعزيز من تبوك، 29 سنة",
    "solution": "class Profile {\n    var name = \"\"\n    var city = \"\"\n    var age = 0\n    var email: String? = null\n}\n\nfun main() {\n    val profile = Profile().apply {\n        name = \"عزيز\"\n        city = \"تبوك\"\n        age = 29\n    }.also { println(\"تم إنشاء: ${it.name}\") }\n\n    profile.email?.let { println(\"البريد: $it\") } ?: println(\"لا يوجد بريد\")\n\n    val summary = profile.run { \"$name من $city، $age سنة\" }\n    println(summary)\n}"
   },
   "quiz": [
    {
     "q": "ماذا تُرجع apply؟",
     "o": [
      "الكائن نفسه بعد تنفيذ الكتلة",
      "نتيجة آخر سطر في الكتلة",
      "Unit"
     ],
     "a": 0,
     "why": "لذلك تُستخدم للتهيئة."
    },
    {
     "q": "أي دالة نطاق تناسب تنفيذ كود فقط إذا لم تكن القيمة null؟",
     "o": [
      "<code dir=\"ltr\">?.let</code>",
      "apply",
      "with"
     ],
     "a": 0,
     "why": "?.let لا تُنفّذ إذا كانت القيمة null."
    },
    {
     "q": "ما الفرق بين let و run؟",
     "o": [
      "let تشير للكائن بـ it، و run تشير إليه بـ this، وكلاهما يُرجع نتيجة الكتلة",
      "لا فرق",
      "run تُرجع الكائن نفسه"
     ],
     "a": 0,
     "why": "الاختيار يعتمد على الأوضح في السياق."
    }
   ]
  }
 ],
 [
  {
   "body": "<h2>المشكلة: العمليات الطويلة</h2>\n<p>التطبيقات تجلب البيانات من الإنترنت وتقرأ قواعد البيانات. في Android، إذا نفّذت عملية طويلة على <strong>الخيط الرئيسي (Main Thread)</strong> تتجمد الواجهة، وبعد 5 ثوانٍ يعرض النظام رسالة &quot;التطبيق لا يستجيب&quot;.</p>\n<p>الحل التقليدي كان <strong>الخيوط (Threads)</strong> والـ callbacks، وهي ثقيلة ومعقدة. Kotlin تقدم حلاً أنيقاً: <strong>Coroutines</strong>، وهي &quot;مهام خفيفة&quot; يمكن إيقافها مؤقتاً واستئنافها دون حجز خيط.</p>\n<h2>أول coroutine</h2>\n<div class=\"code-block src\"><span class=\"code-label\">Kotlin</span><pre dir=\"ltr\"><code>import kotlinx.coroutines.*\n\nfun main() = runBlocking {\n    launch {\n        delay(300)\n        println(&quot;3. انتهت المهمة الطويلة&quot;)\n    }\n    println(&quot;1. بدأت المهمة&quot;)\n    println(&quot;2. البرنامج لا ينتظر&quot;)\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>1. بدأت المهمة\n2. البرنامج لا ينتظر\n3. انتهت المهمة الطويلة</code></pre></div>\n<ul><li><code dir=\"ltr\">runBlocking { }</code> تشغّل coroutines في <code dir=\"ltr\">main</code> وتنتظر انتهاءها (للأمثلة والاختبارات فقط، لا تستخدمها في التطبيقات).</li><li><code dir=\"ltr\">launch { }</code> تبدأ coroutine جديدة تعمل بالتوازي.</li><li><code dir=\"ltr\">delay(300)</code> توقف <strong>هذه الـ coroutine فقط</strong> 300 ملي ثانية، دون حجز الخيط.</li></ul>\n<h2>coroutines خفيفة جداً</h2>\n<div class=\"code-block src\"><span class=\"code-label\">Kotlin</span><pre dir=\"ltr\"><code>import kotlinx.coroutines.*\n\nfun main() = runBlocking {\n    val jobs = List(10_000) {\n        launch {\n            delay(100)\n        }\n    }\n    jobs.forEach { it.join() }\n    println(&quot;انتهت ${jobs.size} مهمة&quot;)\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>انتهت 10000 مهمة</code></pre></div>\n<p>عشرة آلاف coroutine تعمل في جزء من الثانية. لو أنشأت 10,000 خيط حقيقي لنفدت ذاكرة الجهاز.</p>\n<h2>انتظار النتيجة: async و await</h2>\n<p><code dir=\"ltr\">launch</code> لا تُرجع نتيجة. عندما تحتاج نتيجة، استخدم <code dir=\"ltr\">async</code>:</p>\n<div class=\"code-block src\"><span class=\"code-label\">Kotlin</span><pre dir=\"ltr\"><code>import kotlinx.coroutines.*\n\nfun main() = runBlocking {\n    val start = System.currentTimeMillis()\n\n    val user = async { delay(300); &quot;لينا&quot; }\n    val orders = async { delay(300); 4 }\n\n    println(&quot;${user.await()} لديها ${orders.await()} طلبات&quot;)\n    val elapsed = System.currentTimeMillis() - start\n    println(if (elapsed &lt; 500) &quot;بالتوازي&quot; else &quot;بالتتابع&quot;)\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>لينا لديها 4 طلبات\nبالتوازي</code></pre></div>\n<p>العمليتان عملتا <strong>بالتوازي</strong>، فاستغرقتا 300 ملي ثانية تقريباً بدلاً من 600.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>الأداة</th><th>تُرجع</th><th>الاستخدام</th></tr></thead><tbody><tr><td><code dir=\"ltr\">launch</code></td><td><code dir=\"ltr\">Job</code> بلا نتيجة</td><td>&quot;افعل هذا&quot;</td></tr><tr><td><code dir=\"ltr\">async</code></td><td><code dir=\"ltr\">Deferred&lt;T&gt;</code> مع <code dir=\"ltr\">await()</code></td><td>&quot;احسب هذا وأعطني النتيجة&quot;</td></tr></tbody></table></div>\n<h2>Coroutines في Android</h2>\n<div class=\"code-block src\"><span class=\"code-label\">Kotlin</span><pre dir=\"ltr\"><code>class ProductsViewModel : ViewModel() {\n    fun load() {\n        viewModelScope.launch {\n            val products = repository.fetchProducts() // لا تجمّد الواجهة\n            _state.value = UiState.Success(products)\n        }\n    }\n}</code></pre></div>\n<p><code dir=\"ltr\">viewModelScope</code> نطاق يُلغي كل الـ coroutines تلقائياً عند إغلاق الشاشة، فلا تتسرب الذاكرة.</p>\n<h2>ملخص الدرس</h2>\n<ul><li>Coroutines مهام خفيفة غير متزامنة لا تجمّد الواجهة.</li><li><code dir=\"ltr\">launch</code> تبدأ مهمة بلا نتيجة، و <code dir=\"ltr\">async</code> و <code dir=\"ltr\">await</code> لمهمة بنتيجة.</li><li><code dir=\"ltr\">delay</code> توقف الـ coroutine مؤقتاً دون حجز الخيط.</li><li><code dir=\"ltr\">runBlocking</code> للأمثلة فقط، وفي Android يُستخدم <code dir=\"ltr\">viewModelScope</code>.</li></ul>",
   "exercise": {
    "prompt": "<p>اكتب برنامجاً بـ <code dir=\"ltr\">runBlocking</code> يشغّل ثلاث مهام بـ <code dir=\"ltr\">async</code> <strong>بالتوازي</strong>:</p>\n<ul><li><code dir=\"ltr\">price</code> بعد <code dir=\"ltr\">delay(200)</code> تُرجع <code dir=\"ltr\">120</code></li><li><code dir=\"ltr\">shipping</code> بعد <code dir=\"ltr\">delay(100)</code> تُرجع <code dir=\"ltr\">25</code></li><li><code dir=\"ltr\">discount</code> بعد <code dir=\"ltr\">delay(150)</code> تُرجع <code dir=\"ltr\">20</code></li></ul>\n<p>ثم اطبع: <code dir=\"ltr\">الإجمالي: 125</code> (السعر + الشحن - الخصم).</p>",
    "starter": "import kotlinx.coroutines.*\n\nfun main() = runBlocking {\n    // أكمل هنا\n}",
    "expected": "الإجمالي: 125",
    "solution": "import kotlinx.coroutines.*\n\nfun main() = runBlocking {\n    val price = async { delay(200); 120 }\n    val shipping = async { delay(100); 25 }\n    val discount = async { delay(150); 20 }\n    println(\"الإجمالي: ${price.await() + shipping.await() - discount.await()}\")\n}"
   },
   "quiz": [
    {
     "q": "لماذا لا يجوز تنفيذ عملية شبكة طويلة على الخيط الرئيسي في Android؟",
     "o": [
      "لأن الواجهة تتجمد ولا تستجيب للمستخدم",
      "لأن الشبكة لا تعمل عليه",
      "لأنه أبطأ"
     ],
     "a": 0,
     "why": "الخيط الرئيسي مسؤول عن رسم الواجهة والاستجابة."
    },
    {
     "q": "ما الفرق بين launch و async؟",
     "o": [
      "launch لا تُرجع نتيجة، و async تُرجع Deferred نحصل منه على النتيجة بـ await",
      "لا فرق",
      "async أسرع دائماً"
     ],
     "a": 0,
     "why": "اختر حسب حاجتك للنتيجة."
    },
    {
     "q": "ماذا تفعل <code dir=\"ltr\">delay(1000)</code>؟",
     "o": [
      "توقف الـ coroutine الحالية ثانية دون حجز الخيط",
      "توقف البرنامج كله ثانية",
      "تؤخر بدء البرنامج"
     ],
     "a": 0,
     "why": "بخلاف Thread.sleep التي تحجز الخيط."
    }
   ]
  },
  {
   "body": "<h2>دوال قابلة للإيقاف</h2>\n<p><code dir=\"ltr\">suspend</code> كلمة تجعل الدالة <strong>قابلة للإيقاف</strong>: يمكنها استدعاء <code dir=\"ltr\">delay</code> ودوال suspend أخرى، وتنتظر النتائج دون أن تحجز الخيط:</p>\n<div class=\"code-block src\"><span class=\"code-label\">Kotlin</span><pre dir=\"ltr\"><code>import kotlinx.coroutines.*\n\nsuspend fun fetchUser(id: Int): String {\n    delay(200)\n    return &quot;مستخدم $id&quot;\n}\n\nsuspend fun fetchOrders(user: String): List&lt;String&gt; {\n    delay(200)\n    return listOf(&quot;طلب 1&quot;, &quot;طلب 2&quot;)\n}\n\nfun main() = runBlocking {\n    val user = fetchUser(7)\n    val orders = fetchOrders(user)\n    println(&quot;$user: ${orders.size} طلبات&quot;)\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>مستخدم 7: 2 طلبات</code></pre></div>\n<p>لاحظ أن الكود <strong>يُقرأ كأنه متزامن</strong> من الأعلى للأسفل، بلا callbacks ولا تداخل. هذه أكبر ميزة للـ coroutines.</p>\n<h2>القواعد</h2>\n<ol><li>دالة <code dir=\"ltr\">suspend</code> لا تُستدعى إلا من coroutine أو من دالة <code dir=\"ltr\">suspend</code> أخرى.</li><li>الاستدعاء يبدو عادياً تماماً، دون <code dir=\"ltr\">await</code>.</li></ol>\n<div class=\"code-block src\"><span class=\"code-label\">Kotlin</span><pre dir=\"ltr\"><code>import kotlinx.coroutines.*\n\nsuspend fun load(): String {\n    delay(100)\n    return &quot;بيانات&quot;\n}\n\nfun main() {\n    println(load())\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><div class=\"out-errs\"><div class=\"sql-err\" dir=\"ltr\">⚠️ line 9: suspend function &#x27;suspend fun load(): String&#x27; can only be called from a coroutine or another suspend function.</div></div></div>\n<h2>معالجة الأخطاء</h2>\n<p><code dir=\"ltr\">try</code> و <code dir=\"ltr\">catch</code> العادية تعمل بشكل طبيعي:</p>\n<div class=\"code-block src\"><span class=\"code-label\">Kotlin</span><pre dir=\"ltr\"><code>import kotlinx.coroutines.*\n\nsuspend fun login(password: String): String {\n    delay(100)\n    if (password != &quot;1234&quot;) throw IllegalStateException(&quot;كلمة المرور خاطئة&quot;)\n    return &quot;مرحباً بك&quot;\n}\n\nfun main() = runBlocking {\n    for (p in listOf(&quot;0000&quot;, &quot;1234&quot;)) {\n        try {\n            println(login(p))\n        } catch (e: IllegalStateException) {\n            println(&quot;فشل: ${e.message}&quot;)\n        }\n    }\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>فشل: كلمة المرور خاطئة\nمرحباً بك</code></pre></div>\n<h2>تبديل الخيط: withContext</h2>\n<div class=\"code-block src\"><span class=\"code-label\">Kotlin</span><pre dir=\"ltr\"><code>import kotlinx.coroutines.*\n\nsuspend fun heavyCalculation(): Long = withContext(Dispatchers.Default) {\n    (1..1_000_000L).sum()\n}\n\nfun main() = runBlocking {\n    println(&quot;المجموع: ${heavyCalculation()}&quot;)\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>المجموع: 500000500000</code></pre></div>\n<div class=\"table-wrap\"><table><thead><tr><th>Dispatcher</th><th>الاستخدام</th></tr></thead><tbody><tr><td><code dir=\"ltr\">Dispatchers.Main</code></td><td>تحديث الواجهة في Android</td></tr><tr><td><code dir=\"ltr\">Dispatchers.IO</code></td><td>الشبكة وقواعد البيانات والملفات</td></tr><tr><td><code dir=\"ltr\">Dispatchers.Default</code></td><td>الحسابات الثقيلة على المعالج</td></tr></tbody></table></div>\n<p>النمط في Android: الـ ViewModel يعمل على Main، و Repository يستخدم <code dir=\"ltr\">withContext(Dispatchers.IO)</code> للشبكة، فلا تتجمد الواجهة أبداً.</p>\n<h2>المهلة الزمنية</h2>\n<div class=\"code-block src\"><span class=\"code-label\">Kotlin</span><pre dir=\"ltr\"><code>import kotlinx.coroutines.*\n\nsuspend fun slowServer(): String {\n    delay(2000)\n    return &quot;رد&quot;\n}\n\nfun main() = runBlocking {\n    val result = withTimeoutOrNull(500) { slowServer() }\n    println(result ?: &quot;انتهت المهلة، حاول لاحقاً&quot;)\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>انتهت المهلة، حاول لاحقاً</code></pre></div>\n<h2>ملخص الدرس</h2>\n<ul><li><code dir=\"ltr\">suspend fun</code> دالة قابلة للإيقاف، تُستدعى من coroutine أو دالة suspend.</li><li>الكود غير المتزامن يُقرأ كالمتزامن، دون callbacks.</li><li><code dir=\"ltr\">try</code> و <code dir=\"ltr\">catch</code> لمعالجة الأخطاء.</li><li><code dir=\"ltr\">withContext(Dispatchers.IO)</code> لتبديل الخيط، و <code dir=\"ltr\">withTimeoutOrNull</code> للمهلة.</li></ul>",
   "exercise": {
    "prompt": "<p>اكتب دالتين <code dir=\"ltr\">suspend</code> تحاكيان خادماً:</p>\n<ul><li><code dir=\"ltr\">getPrice(productId: Int): Int</code> بعد <code dir=\"ltr\">delay(100)</code> تُرجع <code dir=\"ltr\">350</code> للمنتج 1، وترمي <code dir=\"ltr\">IllegalArgumentException(&quot;منتج غير موجود&quot;)</code> لغيره.</li><li><code dir=\"ltr\">createOrder(price: Int): Int</code> بعد <code dir=\"ltr\">delay(100)</code> تُرجع <code dir=\"ltr\">9001</code>.</li></ul>\n<p>ثم دالة <code dir=\"ltr\">suspend fun placeOrder(productId: Int)</code> تطبع السعر ثم رقم الطلب، أو <code dir=\"ltr\">تعذر الطلب: </code> مع رسالة الخطأ.</p>",
    "starter": "import kotlinx.coroutines.*\n\n// الدوال هنا\n\nfun main() = runBlocking {\n    placeOrder(1)\n    placeOrder(7)\n}",
    "expected": "السعر: 350\nرقم الطلب: 9001\nتعذر الطلب: منتج غير موجود",
    "solution": "import kotlinx.coroutines.*\n\nsuspend fun getPrice(productId: Int): Int {\n    delay(100)\n    if (productId != 1) throw IllegalArgumentException(\"منتج غير موجود\")\n    return 350\n}\n\nsuspend fun createOrder(price: Int): Int {\n    delay(100)\n    return 9001\n}\n\nsuspend fun placeOrder(productId: Int) {\n    try {\n        val price = getPrice(productId)\n        println(\"السعر: $price\")\n        println(\"رقم الطلب: ${createOrder(price)}\")\n    } catch (e: IllegalArgumentException) {\n        println(\"تعذر الطلب: ${e.message}\")\n    }\n}\n\nfun main() = runBlocking {\n    placeOrder(1)\n    placeOrder(7)\n}"
   },
   "quiz": [
    {
     "q": "من أين يمكن استدعاء دالة suspend؟",
     "o": [
      "من coroutine أو من دالة suspend أخرى",
      "من أي مكان",
      "من main العادية فقط"
     ],
     "a": 0,
     "why": "المترجم يرفض غير ذلك."
    },
    {
     "q": "أي Dispatcher يناسب طلبات الشبكة؟",
     "o": [
      "Dispatchers.Main",
      "Dispatchers.IO",
      "Dispatchers.Default"
     ],
     "a": 1,
     "why": "IO مخصص للعمليات التي تنتظر الإدخال والإخراج."
    },
    {
     "q": "ماذا تُرجع <code dir=\"ltr\">withTimeoutOrNull(500) { ... }</code> إذا تجاوزت العملية المهلة؟",
     "o": [
      "null",
      "خطأ يوقف البرنامج",
      "آخر نتيجة"
     ],
     "a": 0,
     "why": "ويمكن معالجتها بـ ?:."
    }
   ]
  },
  {
   "body": "<h2>تدفق من القيم</h2>\n<p><code dir=\"ltr\">suspend fun</code> تُرجع <strong>قيمة واحدة</strong>. لكن ماذا عن بيانات تصل <strong>باستمرار</strong>: رسائل الدردشة، وموقع GPS، وتحديثات قاعدة البيانات؟ هنا نستخدم <strong>Flow</strong>: تدفق غير متزامن من القيم.</p>\n<h2>إنشاء Flow والاستماع له</h2>\n<div class=\"code-block src\"><span class=\"code-label\">Kotlin</span><pre dir=\"ltr\"><code>import kotlinx.coroutines.*\nimport kotlinx.coroutines.flow.*\n\nfun countdown(from: Int): Flow&lt;Int&gt; = flow {\n    for (i in from downTo 1) {\n        delay(100)\n        emit(i)\n    }\n}\n\nfun main() = runBlocking {\n    countdown(3).collect { println(&quot;$it...&quot;) }\n    println(&quot;انطلق! 🚀&quot;)\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>3...\n2...\n1...\nانطلق! 🚀</code></pre></div>\n<ul><li><code dir=\"ltr\">flow { }</code> يبني التدفق، و <code dir=\"ltr\">emit(value)</code> ترسل قيمة.</li><li><code dir=\"ltr\">collect { }</code> تستمع وتستقبل كل قيمة عند وصولها.</li><li>التدفق <strong>بارد (Cold)</strong>: لا يبدأ إلا عند <code dir=\"ltr\">collect</code>.</li></ul>\n<h2>تحويل التدفقات</h2>\n<p>نفس دوال المجموعات تقريباً:</p>\n<div class=\"code-block src\"><span class=\"code-label\">Kotlin</span><pre dir=\"ltr\"><code>import kotlinx.coroutines.*\nimport kotlinx.coroutines.flow.*\n\nfun main() = runBlocking {\n    (1..6).asFlow()\n        .filter { it % 2 == 0 }\n        .map { it * 10 }\n        .collect { println(it) }\n\n    val total = (1..6).asFlow().reduce { a, b -&gt; a + b }\n    println(&quot;المجموع: $total&quot;)\n\n    val first = flowOf(&quot;أ&quot;, &quot;ب&quot;, &quot;ج&quot;).take(2).toList()\n    println(first)\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>20\n40\n60\nالمجموع: 21\n[أ, ب]</code></pre></div>\n<h2>مثال واقعي: البحث أثناء الكتابة</h2>\n<div class=\"code-block src\"><span class=\"code-label\">Kotlin</span><pre dir=\"ltr\"><code>import kotlinx.coroutines.*\nimport kotlinx.coroutines.flow.*\n\nfun main() = runBlocking {\n    val typed = flowOf(&quot;ك&quot;, &quot;كو&quot;, &quot;كوت&quot;, &quot;كوتل&quot;, &quot;كوتلن&quot;)\n    typed\n        .filter { it.length &gt;= 3 }\n        .map { query -&gt; &quot;نتائج البحث عن «$query»&quot; }\n        .collect { println(it) }\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>نتائج البحث عن «كوت»\nنتائج البحث عن «كوتل»\nنتائج البحث عن «كوتلن»</code></pre></div>\n<p>في التطبيقات الحقيقية يُضاف <code dir=\"ltr\">debounce(300)</code> لانتظار توقف المستخدم عن الكتابة قبل إرسال الطلب.</p>\n<h2>StateFlow: الحالة المشتركة</h2>\n<p>في تطبيقات Android الحديثة، الـ ViewModel يحمل حالة الشاشة في <code dir=\"ltr\">StateFlow</code>، والواجهة تستمع لها وتعيد الرسم مع كل تغيير:</p>\n<div class=\"code-block src\"><span class=\"code-label\">Kotlin</span><pre dir=\"ltr\"><code>import kotlinx.coroutines.*\nimport kotlinx.coroutines.flow.*\n\nclass CounterViewModel {\n    private val _count = MutableStateFlow(0)\n    val count: StateFlow&lt;Int&gt; = _count\n\n    fun increment() {\n        _count.value++\n    }\n}\n\nfun main() = runBlocking {\n    val vm = CounterViewModel()\n    vm.increment()\n    vm.increment()\n    println(&quot;القيمة الحالية: ${vm.count.value}&quot;)\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>القيمة الحالية: 2</code></pre></div>\n<ul><li><code dir=\"ltr\">MutableStateFlow</code> قابلة للتعديل داخل الـ ViewModel، و <code dir=\"ltr\">StateFlow</code> للقراءة فقط من الخارج.</li><li>في Compose تستمع الواجهة بـ <code dir=\"ltr\">val count by vm.count.collectAsState()</code>.</li></ul>\n<h2>خاتمة الدورة</h2>\n<p>أكملت دورة Kotlin! أصبحت تعرف الأساسيات والأمان من null، والدوال و lambda، والأصناف و data و sealed و object، والمجموعات و Sequences، والامتدادات ودوال النطاق، و Coroutines و Flow.</p>\n<p>هذا الأساس الكامل الذي تحتاجه لتبدأ <strong>تطوير Android بـ Jetpack Compose</strong>.</p>\n<h2>ملخص الدرس</h2>\n<ul><li><code dir=\"ltr\">Flow</code> تدفق غير متزامن من قيم متعددة، يُبنى بـ <code dir=\"ltr\">flow { emit() }</code>.</li><li><code dir=\"ltr\">collect</code> تستمع للقيم، والتدفق لا يبدأ إلا عندها.</li><li><code dir=\"ltr\">map</code> و <code dir=\"ltr\">filter</code> و <code dir=\"ltr\">take</code> و <code dir=\"ltr\">reduce</code> لتحويل التدفقات.</li><li><code dir=\"ltr\">StateFlow</code> لحالة الشاشة في Android.</li></ul>",
   "exercise": {
    "prompt": "<ol><li>اكتب دالة <code dir=\"ltr\">orderUpdates(): Flow&lt;String&gt;</code> ترسل بـ <code dir=\"ltr\">emit</code> ثلاث حالات مع <code dir=\"ltr\">delay(50)</code> قبل كل منها: <code dir=\"ltr\">تم الطلب</code> ثم <code dir=\"ltr\">تم الشحن</code> ثم <code dir=\"ltr\">تم التسليم</code>.</li><li>في <code dir=\"ltr\">main</code>، استمع للتدفق مع ترقيم كل حالة: <code dir=\"ltr\">1. تم الطلب</code> ... (استخدم متغيراً <code dir=\"ltr\">var</code> للعد داخل <code dir=\"ltr\">collect</code>).</li><li>بعد الانتهاء اطبع <code dir=\"ltr\">وصلت 3 تحديثات</code>.</li></ol>",
    "starter": "import kotlinx.coroutines.*\nimport kotlinx.coroutines.flow.*\n\n// الدالة هنا\n\nfun main() = runBlocking {\n    // أكمل هنا\n}",
    "expected": "1. تم الطلب\n2. تم الشحن\n3. تم التسليم\nوصلت 3 تحديثات",
    "solution": "import kotlinx.coroutines.*\nimport kotlinx.coroutines.flow.*\n\nfun orderUpdates(): Flow<String> = flow {\n    for (status in listOf(\"تم الطلب\", \"تم الشحن\", \"تم التسليم\")) {\n        delay(50)\n        emit(status)\n    }\n}\n\nfun main() = runBlocking {\n    var count = 0\n    orderUpdates().collect { status ->\n        count++\n        println(\"$count. $status\")\n    }\n    println(\"وصلت $count تحديثات\")\n}"
   },
   "quiz": [
    {
     "q": "ما الفرق بين suspend fun و Flow؟",
     "o": [
      "suspend fun تُرجع قيمة واحدة، و Flow تُرسل قيماً متعددة عبر الزمن",
      "لا فرق",
      "Flow أسرع"
     ],
     "a": 0,
     "why": "مثل الفرق بين طلب واحد وبث مستمر."
    },
    {
     "q": "متى يبدأ تنفيذ كود داخل <code dir=\"ltr\">flow { }</code>؟",
     "o": [
      "عند استدعاء collect",
      "فور تعريف التدفق",
      "عند أول emit"
     ],
     "a": 0,
     "why": "التدفق بارد ولا يعمل حتى يستمع له أحد."
    },
    {
     "q": "لماذا يُعرض <code dir=\"ltr\">StateFlow</code> للخارج و <code dir=\"ltr\">MutableStateFlow</code> يبقى خاصاً؟",
     "o": [
      "حتى تستطيع الواجهة القراءة فقط، والتعديل يبقى داخل الـ ViewModel",
      "لأن StateFlow أسرع",
      "لا سبب"
     ],
     "a": 0,
     "why": "تغليف الحالة يمنع تعديلها من أماكن عشوائية."
    }
   ]
  }
 ]
], {"runner": "kotlin"});
