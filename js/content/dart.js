// ملف مولَّد من content/dart عبر tools/build.py، لا تعدّله يدوياً
CW.registerContent("dart", [
 [
  {
   "body": "<h2>لماذا Dart؟</h2>\n<p><strong>Dart</strong> لغة برمجة طورتها Google، وهي اللغة التي يُكتب بها <strong>Flutter</strong>: الإطار الذي يبني تطبيقات Android و iOS والويب وسطح المكتب <strong>من كود واحد</strong>. تطبيقات مثل Google Pay و BMW وغيرها مبنية به.</p>\n<p>مزايا Dart:</p>\n<ul><li><strong>سهلة التعلم:</strong> صيغتها مألوفة لمن يعرف JavaScript أو Java أو C#.</li><li><strong>آمنة:</strong> نظام أنواع قوي وحماية من أخطاء <code dir=\"ltr\">null</code>.</li><li><strong>سريعة:</strong> تُترجم إلى كود أصلي للجوال، وإلى JavaScript للويب.</li><li><strong>إعادة تحميل فورية (Hot Reload):</strong> ترى تعديلك في التطبيق خلال لحظة.</li></ul>\n<h2>أول برنامج</h2>\n<p>كل برنامج Dart يبدأ من الدالة <code dir=\"ltr\">main</code>:</p>\n<div class=\"code-block src\"><span class=\"code-label\">Dart</span><pre dir=\"ltr\"><code>void main() {\n  print(&#x27;مرحباً بالعالم!&#x27;);\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>مرحباً بالعالم!</code></pre></div>\n<ul><li><code dir=\"ltr\">void main()</code> نقطة البداية التي ينفّذها البرنامج أولاً. <code dir=\"ltr\">void</code> تعني أنها لا تُرجع قيمة.</li><li><code dir=\"ltr\">print(...)</code> تطبع في المخرجات.</li><li>النصوص بين علامتي تنصيص مفردة <code dir=\"ltr\">&#x27;...&#x27;</code> (أو مزدوجة <code dir=\"ltr\">&quot;...&quot;</code>).</li><li>**الفاصلة المنقوطة <code dir=\"ltr\">;</code> إلزامية** في نهاية كل أمر. نسيانها خطأ شائع في البداية.</li></ul>\n<h2>أكثر من أمر</h2>\n<div class=\"code-block src\"><span class=\"code-label\">Dart</span><pre dir=\"ltr\"><code>void main() {\n  print(&#x27;أتعلم Dart&#x27;);\n  print(2026);\n  print(7 + 3);\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>أتعلم Dart\n2026\n10</code></pre></div>\n<h2>التعليقات</h2>\n<div class=\"code-block src\"><span class=\"code-label\">Dart</span><pre dir=\"ltr\"><code>void main() {\n  // تعليق من سطر واحد\n\n  /* تعليق\n     من عدة أسطر */\n\n  /// تعليق توثيق: يظهر في المحرر عند تمرير الفأرة\n  print(&#x27;التعليقات لا تُطبع&#x27;);\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>التعليقات لا تُطبع</code></pre></div>\n<h2>أين تكتب Dart؟</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>الأداة</th><th>الاستخدام</th></tr></thead><tbody><tr><td><strong>محرر CodeWay</strong></td><td>تمارين هذه الدورة مباشرة</td></tr><tr><td><strong>dartpad.dev</strong></td><td>محرر Dart الرسمي في المتصفح</td></tr><tr><td><strong>VS Code + إضافة Dart</strong></td><td>المشاريع الحقيقية على جهازك</td></tr><tr><td><strong>Android Studio</strong></td><td>تطوير تطبيقات Flutter</td></tr></tbody></table></div>\n<div class=\"callout tip\">💡 محرر CodeWay يرسل كودك إلى خدمة الترجمة الرسمية لـ DartPad فيحوّله إلى JavaScript ويشغّله في متصفحك، لذلك يحتاج اتصالاً بالإنترنت. على الويب تُعرض بعض الأرقام بشكل مختلف قليلاً، مثلاً <code dir=\"ltr\">print(10.0)</code> تطبع <code dir=\"ltr\">10</code> بينما على الجوال تطبع <code dir=\"ltr\">10.0</code>.</div>\n<h2>ملخص الدرس</h2>\n<ul><li>Dart لغة Flutter لبناء تطبيقات متعددة المنصات.</li><li>كل برنامج يبدأ من <code dir=\"ltr\">void main() { ... }</code>.</li><li><code dir=\"ltr\">print()</code> للطباعة، والفاصلة المنقوطة إلزامية.</li><li>التعليقات <code dir=\"ltr\">//</code> و <code dir=\"ltr\">/* */</code> و <code dir=\"ltr\">///</code> للتوثيق.</li></ul>",
   "exercise": {
    "prompt": "<p>اكتب برنامجاً يطبع <strong>ثلاثة أسطر</strong>:</p>\n<ol><li><code dir=\"ltr\">أهلاً بك في Dart</code></li><li>ناتج <code dir=\"ltr\">12 * 4</code></li><li><code dir=\"ltr\">Flutter قادم!</code></li></ol>",
    "starter": "void main() {\n  // اكتب هنا\n\n}",
    "expected": "أهلاً بك في Dart\n48\nFlutter قادم!",
    "solution": "void main() {\n  print('أهلاً بك في Dart');\n  print(12 * 4);\n  print('Flutter قادم!');\n}"
   },
   "quiz": [
    {
     "q": "من أين يبدأ تنفيذ أي برنامج Dart؟",
     "o": [
      "من الدالة <code dir=\"ltr\">main</code>",
      "من أول سطر في الملف",
      "من أي دالة اسمها start"
     ],
     "a": 0,
     "why": "main هي نقطة الدخول الإلزامية."
    },
    {
     "q": "ما حكم الفاصلة المنقوطة في Dart؟",
     "o": [
      "إلزامية في نهاية كل أمر",
      "اختيارية كما في JavaScript",
      "ممنوعة"
     ],
     "a": 0,
     "why": "نسيانها يسبب خطأ ترجمة."
    },
    {
     "q": "ما الإطار الشهير المبني بلغة Dart؟",
     "o": [
      "React",
      "Flutter",
      "Django"
     ],
     "a": 1,
     "why": "Flutter يبني تطبيقات الجوال والويب وسطح المكتب من كود واحد."
    }
   ]
  },
  {
   "body": "<h2>المتغيرات</h2>\n<p>في Dart يمكنك تعريف المتغير بنوعه صراحة، أو تترك اللغة تستنتجه بـ <code dir=\"ltr\">var</code>:</p>\n<div class=\"code-block src\"><span class=\"code-label\">Dart</span><pre dir=\"ltr\"><code>void main() {\n  String name = &#x27;ريم&#x27;;\n  int age = 24;\n  double height = 1.65;\n  bool isStudent = true;\n\n  var city = &#x27;جدة&#x27;;\n\n  print(name);\n  print(age);\n  print(height);\n  print(isStudent);\n  print(city);\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>ريم\n24\n1.65\ntrue\nجدة</code></pre></div>\n<p>مع <code dir=\"ltr\">var</code> تستنتج Dart أن <code dir=\"ltr\">city</code> من نوع <code dir=\"ltr\">String</code>، <strong>ويبقى نوعه ثابتاً</strong>: لا يمكنك لاحقاً وضع رقم فيه.</p>\n<div class=\"code-block src\"><span class=\"code-label\">Dart</span><pre dir=\"ltr\"><code>void main() {\n  var count = 5;\n  count = &#x27;خمسة&#x27;; // خطأ: A value of type &#x27;String&#x27; can&#x27;t be assigned to a variable of type &#x27;int&#x27;\n}</code></pre></div>\n<p>هذا هو <strong>نظام الأنواع القوي</strong>: الأخطاء تُكتشف قبل التشغيل، وليس عند المستخدم.</p>\n<h2>الأنواع الأساسية</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>النوع</th><th>يخزّن</th><th>مثال</th></tr></thead><tbody><tr><td><code dir=\"ltr\">int</code></td><td>أرقام صحيحة</td><td><code dir=\"ltr\">42</code></td></tr><tr><td><code dir=\"ltr\">double</code></td><td>أرقام عشرية</td><td><code dir=\"ltr\">3.14</code></td></tr><tr><td><code dir=\"ltr\">num</code></td><td>أي رقم (int أو double)</td><td><code dir=\"ltr\">7</code> أو <code dir=\"ltr\">7.5</code></td></tr><tr><td><code dir=\"ltr\">String</code></td><td>نصوص</td><td><code dir=\"ltr\">&#x27;مرحبا&#x27;</code></td></tr><tr><td><code dir=\"ltr\">bool</code></td><td>صح أو خطأ</td><td><code dir=\"ltr\">true</code></td></tr><tr><td><code dir=\"ltr\">dynamic</code></td><td>أي نوع ويمكن تغييره (تجنّبه)</td><td></td></tr></tbody></table></div>\n<h2>final و const: قيم لا تتغير</h2>\n<div class=\"code-block src\"><span class=\"code-label\">Dart</span><pre dir=\"ltr\"><code>void main() {\n  final today = &#x27;الأحد&#x27;;\n  const pi = 3.14159;\n  const maxUsers = 100;\n\n  print(&#x27;$today $pi $maxUsers&#x27;);\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>الأحد 3.14159 100</code></pre></div>\n<div class=\"table-wrap\"><table><thead><tr><th>الكلمة</th><th>متى تُحدد القيمة</th><th>مثال</th></tr></thead><tbody><tr><td><code dir=\"ltr\">final</code></td><td>مرة واحدة، <strong>أثناء التشغيل</strong></td><td>الوقت الحالي، بيانات من الخادم</td></tr><tr><td><code dir=\"ltr\">const</code></td><td><strong>عند الترجمة</strong> وقبل التشغيل</td><td>ثوابت معروفة مسبقاً كـ pi</td></tr></tbody></table></div>\n<div class=\"callout tip\">💡 في Flutter ستستخدم <code dir=\"ltr\">final</code> و <code dir=\"ltr\">const</code> كثيراً جداً. القاعدة: استخدم <code dir=\"ltr\">final</code> افتراضياً، و <code dir=\"ltr\">const</code> للقيم المعروفة مسبقاً، و <code dir=\"ltr\">var</code> فقط لما سيتغير.</div>\n<h2>النصوص وإدراج المتغيرات</h2>\n<p>ندرج المتغيرات في النص بالعلامة <code dir=\"ltr\">$</code>، والتعبيرات بـ <code dir=\"ltr\">${}</code>:</p>\n<div class=\"code-block src\"><span class=\"code-label\">Dart</span><pre dir=\"ltr\"><code>void main() {\n  var product = &#x27;لابتوب&#x27;;\n  var price = 3500;\n  var qty = 2;\n\n  print(&#x27;المنتج: $product&#x27;);\n  print(&#x27;الإجمالي: ${price * qty} ريال&#x27;);\n  print(&#x27;عدد الأحرف: ${product.length}&#x27;);\n  print(&#x27;أحرف كبيرة: ${&#x27;dart&#x27;.toUpperCase()}&#x27;);\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>المنتج: لابتوب\nالإجمالي: 7000 ريال\nعدد الأحرف: 6\nأحرف كبيرة: DART</code></pre></div>\n<p>النصوص متعددة الأسطر بثلاث علامات تنصيص:</p>\n<div class=\"code-block src\"><span class=\"code-label\">Dart</span><pre dir=\"ltr\"><code>void main() {\n  var message = &#x27;&#x27;&#x27;\nالسطر الأول\nالسطر الثاني&#x27;&#x27;&#x27;;\n  print(message);\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>السطر الأول\nالسطر الثاني</code></pre></div>\n<h2>العمليات والتحويل بين الأنواع</h2>\n<div class=\"code-block src\"><span class=\"code-label\">Dart</span><pre dir=\"ltr\"><code>void main() {\n  print(17 ~/ 5);\n  print(17 % 5);\n  print(17 / 4);\n\n  var input = &#x27;42&#x27;;\n  var number = int.parse(input);\n  print(number + 8);\n\n  print(double.parse(&#x27;2.5&#x27;) * 2);\n  print(99.toString() + &#x27;!&#x27;);\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>3\n2\n4.25\n50\n5\n99!</code></pre></div>\n<ul><li><code dir=\"ltr\">~/</code> قسمة صحيحة (تحذف الكسور)، و <code dir=\"ltr\">/</code> قسمة عادية تُرجع <code dir=\"ltr\">double</code>.</li><li><code dir=\"ltr\">int.parse()</code> و <code dir=\"ltr\">double.parse()</code> تحويل النص إلى رقم.</li><li><code dir=\"ltr\">toString()</code> تحويل أي قيمة إلى نص.</li><li>لاحظ أن <code dir=\"ltr\">double.parse(&#x27;2.5&#x27;) * 2</code> طُبعت <code dir=\"ltr\">5</code> لأن التمرين يعمل على الويب، أما على الجوال فتظهر <code dir=\"ltr\">5.0</code>. القيمة نفسها من نوع <code dir=\"ltr\">double</code> في الحالتين.</li></ul>\n<h2>ملخص الدرس</h2>\n<ul><li>نعرّف المتغير بنوعه (<code dir=\"ltr\">int</code> و <code dir=\"ltr\">String</code> ...) أو بـ <code dir=\"ltr\">var</code> فتستنتج Dart النوع.</li><li>النوع ثابت بعد التعريف: Dart لغة أنواع قوية.</li><li><code dir=\"ltr\">final</code> لقيمة تُحدد مرة أثناء التشغيل، و <code dir=\"ltr\">const</code> لقيمة معروفة عند الترجمة.</li><li><code dir=\"ltr\">$name</code> و <code dir=\"ltr\">${expr}</code> لإدراج القيم في النصوص.</li></ul>",
   "exercise": {
    "prompt": "<p>لديك سعر منتج كنص <code dir=\"ltr\">&#x27;250&#x27;</code> وكمية <code dir=\"ltr\">3</code>:</p>\n<ol><li>حوّل السعر إلى <code dir=\"ltr\">int</code> وخزّنه في متغير <code dir=\"ltr\">final</code> اسمه <code dir=\"ltr\">price</code>.</li><li>احسب الإجمالي في متغير <code dir=\"ltr\">final</code> اسمه <code dir=\"ltr\">total</code>.</li><li>اطبع بالضبط: <code dir=\"ltr\">3 × 250 = 750 ريال</code> باستخدام إدراج المتغيرات <code dir=\"ltr\">$</code>.</li><li>اطبع عدد الأوراق النقدية من فئة 100 التي تكفي بالقسمة الصحيحة <code dir=\"ltr\">~/</code>، بالشكل: <code dir=\"ltr\">أوراق المئة: 7</code></li></ol>",
    "starter": "void main() {\n  const priceText = '250';\n  const quantity = 3;\n\n  // أكمل هنا\n}",
    "expected": "3 × 250 = 750 ريال\nأوراق المئة: 7",
    "solution": "void main() {\n  const priceText = '250';\n  const quantity = 3;\n\n  final price = int.parse(priceText);\n  final total = price * quantity;\n  print('$quantity × $price = $total ريال');\n  print('أوراق المئة: ${total ~/ 100}');\n}"
   },
   "quiz": [
    {
     "q": "ماذا يحدث عند تنفيذ <code dir=\"ltr\">var x = 5; x = &#x27;نص&#x27;;</code>؟",
     "o": [
      "يصبح x نصاً",
      "خطأ، لأن نوع x استُنتج int ولا يمكن تغييره",
      "يصبح x قيمة null"
     ],
     "a": 1,
     "why": "var تستنتج النوع مرة واحدة، ثم يبقى ثابتاً."
    },
    {
     "q": "ما الفرق بين final و const؟",
     "o": [
      "final تُحدد قيمتها أثناء التشغيل، و const يجب أن تكون معروفة عند الترجمة",
      "لا فرق",
      "const للنصوص فقط"
     ],
     "a": 0,
     "why": "كلاهما لا يتغير بعد التعيين."
    },
    {
     "q": "ما ناتج <code dir=\"ltr\">17 ~/ 5</code>؟",
     "o": [
      "3.4",
      "3",
      "2"
     ],
     "a": 1,
     "why": "~/ قسمة صحيحة تحذف الجزء العشري."
    }
   ]
  },
  {
   "body": "<h2>خطأ المليار دولار</h2>\n<p>مخترع مفهوم <code dir=\"ltr\">null</code> نفسه، توني هور، وصفه بأنه &quot;خطأ المليار دولار&quot;، لكثرة ما سببه من انهيارات في البرامج: تحاول استخدام قيمة فتكتشف أنها غير موجودة. Dart تحل هذه المشكلة جذرياً بنظام <strong>الأمان من null (Null Safety)</strong>.</p>\n<h2>المتغيرات لا تقبل null افتراضياً</h2>\n<div class=\"code-block src\"><span class=\"code-label\">Dart</span><pre dir=\"ltr\"><code>void main() {\n  String name = null; // خطأ: لا يمكن وضع null في String\n}</code></pre></div>\n<p>في Dart، <code dir=\"ltr\">String</code> تعني &quot;نص موجود دائماً&quot;. هذا يضمن أنك عندما تستخدم <code dir=\"ltr\">name.length</code> لن ينهار البرنامج أبداً.</p>\n<h2>الأنواع القابلة لـ null: ?</h2>\n<p>إذا كانت القيمة قد تكون غير موجودة فعلاً، أضف <code dir=\"ltr\">?</code> بعد النوع:</p>\n<div class=\"code-block src\"><span class=\"code-label\">Dart</span><pre dir=\"ltr\"><code>void main() {\n  String? nickname;\n  print(nickname);\n\n  nickname = &#x27;أبو فهد&#x27;;\n  print(nickname);\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>null\nأبو فهد</code></pre></div>\n<p><code dir=\"ltr\">String?</code> تعني &quot;نص أو null&quot;. والمتغير القابل لـ null قيمته الابتدائية <code dir=\"ltr\">null</code> تلقائياً.</p>\n<h2>Dart تمنعك من الخطأ قبل وقوعه</h2>\n<div class=\"code-block src\"><span class=\"code-label\">Dart</span><pre dir=\"ltr\"><code>void main() {\n  String? email;\n  print(email.length); // خطأ ترجمة: email قد يكون null\n}</code></pre></div>\n<p>يجب أن تتعامل مع احتمال null أولاً. ولديك أدوات لذلك:</p>\n<h2>1. الفحص بـ if</h2>\n<div class=\"code-block src\"><span class=\"code-label\">Dart</span><pre dir=\"ltr\"><code>void main() {\n  String? email = &#x27;reem@mail.com&#x27;;\n\n  if (email != null) {\n    print(email.length);\n  }\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>13</code></pre></div>\n<p>بعد <code dir=\"ltr\">if (email != null)</code> تعرف Dart أن <code dir=\"ltr\">email</code> ليس null داخل الكتلة، فتسمح باستخدامه. هذا يسمى <strong>الترقية التلقائية للنوع (Type Promotion)</strong>.</p>\n<h2>2. عامل الوصول الآمن ?.</h2>\n<div class=\"code-block src\"><span class=\"code-label\">Dart</span><pre dir=\"ltr\"><code>void main() {\n  String? city;\n  print(city?.length);\n\n  city = &#x27;الرياض&#x27;;\n  print(city?.length);\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>null\n6</code></pre></div>\n<p><code dir=\"ltr\">city?.length</code> تعني: إذا كان <code dir=\"ltr\">city</code> موجوداً أعطني طوله، وإلا أعطني <code dir=\"ltr\">null</code> بدلاً من الانهيار.</p>\n<h2>3. القيمة البديلة ??</h2>\n<div class=\"code-block src\"><span class=\"code-label\">Dart</span><pre dir=\"ltr\"><code>void main() {\n  String? username;\n  var display = username ?? &#x27;زائر&#x27;;\n  print(&#x27;مرحباً $display&#x27;);\n\n  int? savedScore;\n  savedScore ??= 0;\n  print(savedScore);\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>مرحباً زائر\n0</code></pre></div>\n<ul><li><code dir=\"ltr\">a ?? b</code> تُرجع <code dir=\"ltr\">a</code> إن لم يكن null، وإلا <code dir=\"ltr\">b</code>.</li><li><code dir=\"ltr\">a ??= b</code> تضع <code dir=\"ltr\">b</code> في <code dir=\"ltr\">a</code> فقط إذا كان <code dir=\"ltr\">a</code> يساوي null.</li></ul>\n<h2>4. عامل التأكيد ! (بحذر)</h2>\n<div class=\"code-block src\"><span class=\"code-label\">Dart</span><pre dir=\"ltr\"><code>void main() {\n  String? token = &#x27;abc123&#x27;;\n  String sure = token!;\n  print(sure.length);\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>6</code></pre></div>\n<p><code dir=\"ltr\">!</code> تقول للمترجم: &quot;أنا متأكد أن القيمة ليست null&quot;. لكن إذا كنت مخطئاً، <strong>ينهار البرنامج</strong> وقت التشغيل.</p>\n<div class=\"callout warn\">⚠️ استخدم <code dir=\"ltr\">!</code> نادراً جداً، وفقط عندما تكون متأكداً 100%. الأدوات <code dir=\"ltr\">?.</code> و <code dir=\"ltr\">??</code> و <code dir=\"ltr\">if</code> أكثر أماناً دائماً.</div>\n<h2>late: تهيئة متأخرة</h2>\n<div class=\"code-block src\"><span class=\"code-label\">Dart</span><pre dir=\"ltr\"><code>late String config;\n\nvoid main() {\n  config = &#x27;إعدادات جاهزة&#x27;;\n  print(config);\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>إعدادات جاهزة</code></pre></div>\n<p><code dir=\"ltr\">late</code> تعني: &quot;هذا المتغير ليس null، لكني سأعطيه قيمته لاحقاً قبل استخدامه&quot;. شائعة في Flutter مع المتغيرات التي تُهيأ في <code dir=\"ltr\">initState</code>.</p>\n<h2>ملخص الدرس</h2>\n<ul><li>المتغيرات في Dart لا تقبل null إلا إذا أضفت <code dir=\"ltr\">?</code> للنوع.</li><li>المترجم يمنعك من استخدام قيمة قد تكون null دون فحص.</li><li><code dir=\"ltr\">?.</code> وصول آمن، و <code dir=\"ltr\">??</code> قيمة بديلة، و <code dir=\"ltr\">??=</code> تعيين عند null.</li><li><code dir=\"ltr\">!</code> تأكيد خطير، و <code dir=\"ltr\">late</code> لتهيئة متأخرة.</li></ul>",
   "exercise": {
    "prompt": "<p>اكتب دالة <code dir=\"ltr\">describe</code> تستقبل اسماً <strong>قد يكون null</strong> (<code dir=\"ltr\">String? name</code>) وتطبع:</p>\n<ul><li><code dir=\"ltr\">الاسم: X (عدد الأحرف: N)</code> إذا كان الاسم موجوداً.</li><li><code dir=\"ltr\">الاسم: غير معروف</code> إذا كان null.</li></ul>\n<p>استخدم <code dir=\"ltr\">??</code> لعرض الاسم، و <code dir=\"ltr\">?.</code> مع <code dir=\"ltr\">??</code> لعدد الأحرف، أو <code dir=\"ltr\">if</code>. الاستدعاءات جاهزة في <code dir=\"ltr\">main</code>.</p>",
    "starter": "void describe(String? name) {\n  // أكمل هنا\n}\n\nvoid main() {\n  describe('سلمان');\n  describe(null);\n}",
    "expected": "الاسم: سلمان (عدد الأحرف: 5)\nالاسم: غير معروف",
    "solution": "void describe(String? name) {\n  if (name != null) {\n    print('الاسم: $name (عدد الأحرف: ${name.length})');\n  } else {\n    print('الاسم: غير معروف');\n  }\n}\n\nvoid main() {\n  describe('سلمان');\n  describe(null);\n}"
   },
   "quiz": [
    {
     "q": "ما معنى <code dir=\"ltr\">int? score</code>؟",
     "o": [
      "متغير يمكن أن يكون رقماً صحيحاً أو null",
      "متغير رقمي إلزامي",
      "متغير سؤال"
     ],
     "a": 0,
     "why": "علامة ? بعد النوع تسمح بقيمة null."
    },
    {
     "q": "ما ناتج <code dir=\"ltr\">print(null ?? &#x27;افتراضي&#x27;)</code>؟",
     "o": [
      "<code dir=\"ltr\">افتراضي</code>",
      "<code dir=\"ltr\">null</code>",
      "خطأ"
     ],
     "a": 0,
     "why": "?? تُرجع القيمة اليمنى عندما تكون اليسرى null."
    },
    {
     "q": "لماذا يُعد عامل <code dir=\"ltr\">!</code> خطيراً؟",
     "o": [
      "لأنه إذا كانت القيمة null فعلاً ينهار البرنامج وقت التشغيل",
      "لأنه بطيء",
      "لأنه يحذف المتغير"
     ],
     "a": 0,
     "why": "! يلغي حماية المترجم ويحمّلك المسؤولية."
    }
   ]
  },
  {
   "body": "<h2>الشروط</h2>\n<p>صيغة <code dir=\"ltr\">if</code> في Dart مألوفة، **والشرط يجب أن يكون <code dir=\"ltr\">bool</code> حقيقياً**: لا توجد قيم &quot;صادقة&quot; و&quot;كاذبة&quot; كما في JavaScript، فلا يمكنك كتابة <code dir=\"ltr\">if (0)</code> أو <code dir=\"ltr\">if (name)</code>.</p>\n<div class=\"code-block src\"><span class=\"code-label\">Dart</span><pre dir=\"ltr\"><code>void main() {\n  var temperature = 34;\n\n  if (temperature &gt; 40) {\n    print(&#x27;حار جداً&#x27;);\n  } else if (temperature &gt; 30) {\n    print(&#x27;حار&#x27;);\n  } else {\n    print(&#x27;معتدل&#x27;);\n  }\n\n  var isMember = true;\n  var price = isMember ? 80 : 100;\n  print(&#x27;السعر: $price&#x27;);\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>حار\nالسعر: 80</code></pre></div>\n<h2>switch الحديثة</h2>\n<p>منذ Dart 3 أصبحت <code dir=\"ltr\">switch</code> أقوى بكثير، ويمكن استخدامها <strong>كتعبير يُرجع قيمة</strong>:</p>\n<div class=\"code-block src\"><span class=\"code-label\">Dart</span><pre dir=\"ltr\"><code>void main() {\n  var day = 5;\n\n  var name = switch (day) {\n    1 =&gt; &#x27;الأحد&#x27;,\n    2 =&gt; &#x27;الاثنين&#x27;,\n    5 =&gt; &#x27;الخميس&#x27;,\n    6 || 7 =&gt; &#x27;عطلة نهاية الأسبوع&#x27;,\n    _ =&gt; &#x27;يوم آخر&#x27;,\n  };\n  print(name);\n\n  var score = 82;\n  var grade = switch (score) {\n    &gt;= 90 =&gt; &#x27;ممتاز&#x27;,\n    &gt;= 80 =&gt; &#x27;جيد جداً&#x27;,\n    &gt;= 60 =&gt; &#x27;جيد&#x27;,\n    _ =&gt; &#x27;راسب&#x27;,\n  };\n  print(grade);\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>الخميس\nجيد جداً</code></pre></div>\n<ul><li><code dir=\"ltr\">=&gt;</code> تعني &quot;النتيجة هي&quot;.</li><li><code dir=\"ltr\">_</code> الحالة الافتراضية (أي شيء آخر).</li><li><code dir=\"ltr\">6 || 7</code> أكثر من قيمة لنفس النتيجة.</li><li><code dir=\"ltr\">&gt;= 90</code> أنماط مقارنة مباشرة!</li></ul>\n<h2>حلقة for</h2>\n<div class=\"code-block src\"><span class=\"code-label\">Dart</span><pre dir=\"ltr\"><code>void main() {\n  for (var i = 1; i &lt;= 3; i++) {\n    print(&#x27;الدورة $i&#x27;);\n  }\n\n  var fruits = [&#x27;تفاح&#x27;, &#x27;موز&#x27;, &#x27;عنب&#x27;];\n  for (var fruit in fruits) {\n    print(fruit);\n  }\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>الدورة 1\nالدورة 2\nالدورة 3\nتفاح\nموز\nعنب</code></pre></div>\n<ul><li><code dir=\"ltr\">for</code> التقليدية بعدّاد.</li><li><code dir=\"ltr\">for (var x in list)</code> للمرور على عناصر قائمة مباشرة، وهي الأكثر استخداماً.</li></ul>\n<h2>while و do-while</h2>\n<div class=\"code-block src\"><span class=\"code-label\">Dart</span><pre dir=\"ltr\"><code>void main() {\n  var balance = 100;\n  var months = 0;\n  while (balance &gt; 0) {\n    balance -= 30;\n    months++;\n  }\n  print(&#x27;نفد الرصيد بعد $months أشهر&#x27;);\n\n  var tries = 5;\n  do {\n    print(&#x27;محاولة $tries&#x27;);\n    tries++;\n  } while (tries &lt; 3);\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>نفد الرصيد بعد 4 أشهر\nمحاولة 5</code></pre></div>\n<h2>break و continue</h2>\n<div class=\"code-block src\"><span class=\"code-label\">Dart</span><pre dir=\"ltr\"><code>void main() {\n  for (var i = 1; i &lt;= 10; i++) {\n    if (i % 2 == 0) continue;\n    if (i &gt; 7) break;\n    print(i);\n  }\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>1\n3\n5\n7</code></pre></div>\n<ul><li><code dir=\"ltr\">continue</code> تتخطى بقية الدورة الحالية.</li><li><code dir=\"ltr\">break</code> تخرج من الحلقة كلياً.</li><li>لاحظ أن المقارنة في Dart بـ <code dir=\"ltr\">==</code> (علامتين)، فلا يوجد <code dir=\"ltr\">===</code> كما في JavaScript.</li></ul>\n<h2>ملخص الدرس</h2>\n<ul><li>شروط <code dir=\"ltr\">if</code> يجب أن تكون <code dir=\"ltr\">bool</code> حقيقية.</li><li><code dir=\"ltr\">switch</code> الحديثة تعبير يُرجع قيمة، وتدعم الأنماط مثل <code dir=\"ltr\">&gt;= 90</code> و <code dir=\"ltr\">_</code>.</li><li><code dir=\"ltr\">for</code> بعدّاد، و <code dir=\"ltr\">for-in</code> للقوائم، و <code dir=\"ltr\">while</code> و <code dir=\"ltr\">do-while</code>.</li><li><code dir=\"ltr\">break</code> و <code dir=\"ltr\">continue</code> للتحكم في الحلقات، والمقارنة بـ <code dir=\"ltr\">==</code>.</li></ul>",
   "exercise": {
    "prompt": "<p>اكتب حلقة من 1 إلى 15 تطبع لكل رقم تصنيفه باستخدام <strong>تعبير switch</strong>:</p>\n<ul><li>يقبل القسمة على 15: <code dir=\"ltr\">FizzBuzz</code></li><li>على 3: <code dir=\"ltr\">Fizz</code></li><li>على 5: <code dir=\"ltr\">Buzz</code></li><li>غير ذلك: الرقم نفسه</li></ul>\n<p>تلميح: داخل الحلقة اكتب <code dir=\"ltr\">final result = switch (i) { _ when i % 15 == 0 =&gt; &#x27;FizzBuzz&#x27;, ... };</code> حيث <code dir=\"ltr\">when</code> تضيف شرطاً للنمط.</p>",
    "starter": "void main() {\n  for (var i = 1; i <= 15; i++) {\n    // أكمل هنا\n  }\n}",
    "expected": "1\n2\nFizz\n4\nBuzz\nFizz\n7\n8\nFizz\nBuzz\n11\nFizz\n13\n14\nFizzBuzz",
    "solution": "void main() {\n  for (var i = 1; i <= 15; i++) {\n    final result = switch (i) {\n      _ when i % 15 == 0 => 'FizzBuzz',\n      _ when i % 3 == 0 => 'Fizz',\n      _ when i % 5 == 0 => 'Buzz',\n      _ => '$i',\n    };\n    print(result);\n  }\n}"
   },
   "quiz": [
    {
     "q": "هل يمكن كتابة <code dir=\"ltr\">if (count)</code> حيث count من نوع int في Dart؟",
     "o": [
      "نعم، 0 تعني false",
      "لا، الشرط يجب أن يكون bool حقيقياً",
      "نعم في Flutter فقط"
     ],
     "a": 1,
     "why": "Dart لا تحوّل الأرقام أو النصوص إلى bool تلقائياً."
    },
    {
     "q": "ماذا يعني الرمز <code dir=\"ltr\">_</code> في تعبير switch؟",
     "o": [
      "الحالة الافتراضية لأي قيمة لم تطابق ما قبلها",
      "خطأ",
      "القيمة صفر"
     ],
     "a": 0,
     "why": "_ نمط يطابق أي شيء."
    },
    {
     "q": "أي حلقة هي الأنسب للمرور على كل عناصر قائمة؟",
     "o": [
      "<code dir=\"ltr\">for (var item in list)</code>",
      "<code dir=\"ltr\">while (true)</code>",
      "<code dir=\"ltr\">do-while</code>"
     ],
     "a": 0,
     "why": "for-in تعطيك كل عنصر مباشرة دون عدّاد."
    }
   ]
  }
 ],
 [
  {
   "body": "<h2>تعريف الدوال</h2>\n<p>في Dart نحدد <strong>نوع ما تُرجعه الدالة</strong> قبل اسمها، و<strong>نوع كل معامل</strong>:</p>\n<div class=\"code-block src\"><span class=\"code-label\">Dart</span><pre dir=\"ltr\"><code>int add(int a, int b) {\n  return a + b;\n}\n\nString greet(String name) {\n  return &#x27;أهلاً يا $name&#x27;;\n}\n\nvoid printLine() {\n  print(&#x27;----------&#x27;);\n}\n\nvoid main() {\n  print(add(3, 4));\n  print(greet(&#x27;هيا&#x27;));\n  printLine();\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>7\nأهلاً يا هيا\n----------</code></pre></div>\n<ul><li><code dir=\"ltr\">int add(...)</code> الدالة تُرجع <code dir=\"ltr\">int</code>.</li><li><code dir=\"ltr\">void</code> الدالة لا تُرجع شيئاً.</li><li>كتابة الأنواع تجعل المترجم يكتشف الأخطاء: لو استدعيت <code dir=\"ltr\">add(&#x27;3&#x27;, 4)</code> لظهر خطأ قبل التشغيل.</li></ul>\n<h2>الصيغة المختصرة =&gt;</h2>\n<p>للدوال المكوّنة من تعبير واحد:</p>\n<div class=\"code-block src\"><span class=\"code-label\">Dart</span><pre dir=\"ltr\"><code>int square(int n) =&gt; n * n;\nbool isEven(int n) =&gt; n % 2 == 0;\nString fullName(String first, String last) =&gt; &#x27;$first $last&#x27;;\n\nvoid main() {\n  print(square(9));\n  print(isEven(7));\n  print(fullName(&#x27;محمد&#x27;, &#x27;العلي&#x27;));\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>81\nfalse\nمحمد العلي</code></pre></div>\n<p><code dir=\"ltr\">=&gt; تعبير</code> تعني <code dir=\"ltr\">{ return تعبير; }</code>، وستراها في كل مكان في Flutter.</p>\n<h2>المعاملات المسماة: أسلوب Flutter</h2>\n<p>عندما تكثر المعاملات، يصعب تذكر ترتيبها. <strong>المعاملات المسماة</strong> توضع بين <code dir=\"ltr\">{ }</code> وتُمرر باسمها:</p>\n<div class=\"code-block src\"><span class=\"code-label\">Dart</span><pre dir=\"ltr\"><code>void createUser({required String name, int age = 18, String? city}) {\n  print(&#x27;$name، $age سنة، ${city ?? &#x27;مدينة غير محددة&#x27;}&#x27;);\n}\n\nvoid main() {\n  createUser(name: &#x27;فيصل&#x27;, age: 30, city: &#x27;أبها&#x27;);\n  createUser(city: &#x27;جدة&#x27;, name: &#x27;منيرة&#x27;);\n  createUser(name: &#x27;زياد&#x27;);\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>فيصل، 30 سنة، أبها\nمنيرة، 18 سنة، جدة\nزياد، 18 سنة، مدينة غير محددة</code></pre></div>\n<ul><li>الترتيب لا يهم عند الاستدعاء، وكل قيمة واضحة المعنى.</li><li><code dir=\"ltr\">required</code> تجعل المعامل إلزامياً.</li><li><code dir=\"ltr\">age = 18</code> قيمة افتراضية.</li><li><code dir=\"ltr\">String? city</code> اختياري قد يكون null.</li></ul>\n<div class=\"callout tip\">💡 هذا هو الأسلوب المستخدم في كل Widgets في Flutter: <code dir=\"ltr\">Text(&#x27;مرحبا&#x27;, style: ..., textAlign: ...)</code> و <code dir=\"ltr\">Container(width: 100, color: ...)</code>.</div>\n<h2>المعاملات الموضعية الاختيارية</h2>\n<p>بين <code dir=\"ltr\">[ ]</code>، وتُمرر بالترتيب لكنها اختيارية:</p>\n<div class=\"code-block src\"><span class=\"code-label\">Dart</span><pre dir=\"ltr\"><code>String introduce(String name, [String? title, int years = 0]) {\n  var text = name;\n  if (title != null) text = &#x27;$title $text&#x27;;\n  if (years &gt; 0) text += &#x27; (خبرة $years سنوات)&#x27;;\n  return text;\n}\n\nvoid main() {\n  print(introduce(&#x27;سعاد&#x27;));\n  print(introduce(&#x27;سعاد&#x27;, &#x27;د.&#x27;));\n  print(introduce(&#x27;سعاد&#x27;, &#x27;د.&#x27;, 12));\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>سعاد\nد. سعاد\nد. سعاد (خبرة 12 سنوات)</code></pre></div>\n<div class=\"table-wrap\"><table><thead><tr><th>النوع</th><th>الصيغة</th><th>الاستدعاء</th></tr></thead><tbody><tr><td>موضعية إلزامية</td><td><code dir=\"ltr\">f(int a)</code></td><td><code dir=\"ltr\">f(5)</code></td></tr><tr><td>موضعية اختيارية</td><td><code dir=\"ltr\">f([int a = 0])</code></td><td><code dir=\"ltr\">f()</code> أو <code dir=\"ltr\">f(5)</code></td></tr><tr><td>مسماة</td><td><code dir=\"ltr\">f({int a = 0})</code></td><td><code dir=\"ltr\">f(a: 5)</code></td></tr><tr><td>مسماة إلزامية</td><td><code dir=\"ltr\">f({required int a})</code></td><td><code dir=\"ltr\">f(a: 5)</code></td></tr></tbody></table></div>\n<h2>ملخص الدرس</h2>\n<ul><li>نوع الإرجاع قبل اسم الدالة، ونوع كل معامل قبل اسمه.</li><li><code dir=\"ltr\">=&gt;</code> اختصار لدالة من تعبير واحد.</li><li>المعاملات المسماة <code dir=\"ltr\">{ }</code> تُمرر بالاسم، وتدعم <code dir=\"ltr\">required</code> والقيم الافتراضية.</li><li>المعاملات الموضعية الاختيارية بين <code dir=\"ltr\">[ ]</code>.</li></ul>",
   "exercise": {
    "prompt": "<p>اكتب دالة <code dir=\"ltr\">calculatePrice</code> تُرجع <code dir=\"ltr\">double</code> وتستقبل <strong>معاملات مسماة</strong>:</p>\n<ul><li><code dir=\"ltr\">price</code> من نوع <code dir=\"ltr\">double</code> <strong>إلزامي</strong></li><li><code dir=\"ltr\">discount</code> نسبة الخصم بالمئة، <code dir=\"ltr\">int</code>، افتراضيها <code dir=\"ltr\">0</code></li><li><code dir=\"ltr\">tax</code> نسبة الضريبة بالمئة، <code dir=\"ltr\">int</code>، افتراضيها <code dir=\"ltr\">15</code></li></ul>\n<p>النتيجة: السعر بعد الخصم، ثم تُضاف الضريبة على الناتج. الاستدعاءات جاهزة.</p>",
    "starter": "// اكتب الدالة هنا\n\nvoid main() {\n  print(calculatePrice(price: 100));\n  print(calculatePrice(price: 200, discount: 50));\n  print(calculatePrice(tax: 0, price: 80, discount: 25));\n}",
    "expected": "115\n115\n60",
    "solution": "double calculatePrice({required double price, int discount = 0, int tax = 15}) {\n  final afterDiscount = price * (100 - discount) / 100;\n  return afterDiscount * (100 + tax) / 100;\n}\n\nvoid main() {\n  print(calculatePrice(price: 100));\n  print(calculatePrice(price: 200, discount: 50));\n  print(calculatePrice(tax: 0, price: 80, discount: 25));\n}"
   },
   "quiz": [
    {
     "q": "ماذا يعني <code dir=\"ltr\">void</code> قبل اسم الدالة؟",
     "o": [
      "أن الدالة لا تُرجع قيمة",
      "أن الدالة فارغة",
      "أن الدالة خاصة"
     ],
     "a": 0,
     "why": "void تعني لا يوجد نوع إرجاع."
    },
    {
     "q": "كيف تجعل معاملاً مسمى إلزامياً؟",
     "o": [
      "بوضعه أولاً",
      "بكتابة <code dir=\"ltr\">required</code> قبله",
      "بوضع <code dir=\"ltr\">!</code> بعده"
     ],
     "a": 1,
     "why": "المعاملات المسماة اختيارية إلا مع required."
    },
    {
     "q": "ما الذي يعادل <code dir=\"ltr\">int double(int n) =&gt; n * 2;</code>؟",
     "o": [
      "<code dir=\"ltr\">int double(int n) { return n * 2; }</code>",
      "<code dir=\"ltr\">int double(int n) { n * 2; }</code>",
      "<code dir=\"ltr\">void double(int n) =&gt; n * 2;</code>"
     ],
     "a": 0,
     "why": "=&gt; اختصار لـ return تعبير واحد."
    }
   ]
  },
  {
   "body": "<h2>الدوال قيم</h2>\n<p>في Dart الدالة <strong>كائن</strong> يمكن تخزينه في متغير وتمريره لدالة أخرى. والدالة بلا اسم تسمى <strong>دالة مجهولة (Anonymous Function)</strong> أو <strong>Lambda</strong>:</p>\n<div class=\"code-block src\"><span class=\"code-label\">Dart</span><pre dir=\"ltr\"><code>void main() {\n  var multiply = (int a, int b) =&gt; a * b;\n  print(multiply(6, 7));\n\n  var shout = (String text) {\n    final upper = text.toUpperCase();\n    return &#x27;$upper!&#x27;;\n  };\n  print(shout(&#x27;flutter&#x27;));\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>42\nFLUTTER!</code></pre></div>\n<h2>تمرير دالة لدالة أخرى</h2>\n<p>الدالة التي تستقبل دالة أو تُرجعها تسمى <strong>دالة من رتبة عليا (Higher-Order Function)</strong>:</p>\n<div class=\"code-block src\"><span class=\"code-label\">Dart</span><pre dir=\"ltr\"><code>int applyTwice(int Function(int) fn, int value) {\n  return fn(fn(value));\n}\n\nvoid main() {\n  print(applyTwice((n) =&gt; n + 10, 1));\n  print(applyTwice((n) =&gt; n * 3, 2));\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>21\n18</code></pre></div>\n<p><code dir=\"ltr\">int Function(int)</code> هو <strong>نوع الدالة</strong>: &quot;دالة تستقبل int وتُرجع int&quot;.</p>\n<h2>الاستخدام الأشهر: مع القوائم</h2>\n<div class=\"code-block src\"><span class=\"code-label\">Dart</span><pre dir=\"ltr\"><code>void main() {\n  var prices = [120, 45, 300, 80];\n\n  prices.forEach((p) =&gt; print(&#x27;السعر: $p&#x27;));\n\n  var cheap = prices.where((p) =&gt; p &lt; 100).toList();\n  print(cheap);\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>السعر: 120\nالسعر: 45\nالسعر: 300\nالسعر: 80\n[45, 80]</code></pre></div>\n<p>سنتعمق في دوال القوائم في الوحدة الرابعة.</p>\n<h2>الدوال في Flutter: الأحداث</h2>\n<p>هكذا تبدو الدوال المجهولة في تطبيق حقيقي، كمعالج للضغط على زر:</p>\n<div class=\"code-block src\"><span class=\"code-label\">Dart</span><pre dir=\"ltr\"><code>ElevatedButton(\n  onPressed: () {\n    setState(() =&gt; counter++);\n  },\n  child: Text(&#x27;اضغط&#x27;),\n)</code></pre></div>\n<p><code dir=\"ltr\">onPressed</code> معامل مسمى يستقبل دالة، و <code dir=\"ltr\">() { ... }</code> دالة مجهولة تُنفَّذ عند الضغط.</p>\n<h2>الإغلاق (Closures)</h2>\n<p>الدالة تتذكر المتغيرات المحيطة بها لحظة إنشائها:</p>\n<div class=\"code-block src\"><span class=\"code-label\">Dart</span><pre dir=\"ltr\"><code>Function makeCounter() {\n  var count = 0;\n  return () {\n    count++;\n    return count;\n  };\n}\n\nvoid main() {\n  var counterA = makeCounter();\n  var counterB = makeCounter();\n  counterA();\n  counterA();\n  print(counterA());\n  print(counterB());\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>3\n1</code></pre></div>\n<p>كل عدّاد يحتفظ بمتغير <code dir=\"ltr\">count</code> خاص به، حتى بعد انتهاء <code dir=\"ltr\">makeCounter</code>.</p>\n<h2>typedef: اسم لنوع الدالة</h2>\n<p>عندما يتكرر نوع دالة طويل، نعطيه اسماً:</p>\n<div class=\"code-block src\"><span class=\"code-label\">Dart</span><pre dir=\"ltr\"><code>typedef Validator = String? Function(String value);\n\nString? notEmpty(String value) =&gt; value.isEmpty ? &#x27;الحقل مطلوب&#x27; : null;\nString? minLength(String value) =&gt; value.length &lt; 6 ? &#x27;قصير جداً&#x27; : null;\n\nvoid main() {\n  List&lt;Validator&gt; rules = [notEmpty, minLength];\n  for (final rule in rules) {\n    print(rule(&#x27;abc&#x27;) ?? &#x27;صالح&#x27;);\n  }\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>صالح\nقصير جداً</code></pre></div>\n<p>هذا نفس نمط التحقق من الحقول في نماذج Flutter (<code dir=\"ltr\">validator:</code>).</p>\n<h2>ملخص الدرس</h2>\n<ul><li>الدوال قيم: تُخزن في متغيرات وتُمرر لدوال أخرى.</li><li>الدالة المجهولة <code dir=\"ltr\">(params) =&gt; expr</code> أو <code dir=\"ltr\">(params) { ... }</code>.</li><li><code dir=\"ltr\">int Function(int)</code> نوع دالة، و <code dir=\"ltr\">typedef</code> يعطيه اسماً.</li><li>الإغلاق: الدالة تتذكر متغيرات محيطها.</li></ul>",
   "exercise": {
    "prompt": "<ol><li>اكتب دالة <code dir=\"ltr\">transform</code> تستقبل قائمة أرقام <code dir=\"ltr\">List&lt;int&gt; numbers</code> ودالة <code dir=\"ltr\">int Function(int) fn</code>، وتُرجع قائمة جديدة بعد تطبيق <code dir=\"ltr\">fn</code> على كل عنصر (استخدم حلقة <code dir=\"ltr\">for-in</code> و <code dir=\"ltr\">add</code>).</li><li>استدعها في <code dir=\"ltr\">main</code> مرتين بدالتين مجهولتين: مرة لمضاعفة الأرقام، ومرة لتربيعها.</li></ol>",
    "starter": "List<int> transform(List<int> numbers, int Function(int) fn) {\n  // أكمل هنا\n}\n\nvoid main() {\n  var nums = [1, 2, 3, 4];\n  // اطبع النتيجتين\n}",
    "expected": "[2, 4, 6, 8]\n[1, 4, 9, 16]",
    "solution": "List<int> transform(List<int> numbers, int Function(int) fn) {\n  final result = <int>[];\n  for (final n in numbers) {\n    result.add(fn(n));\n  }\n  return result;\n}\n\nvoid main() {\n  var nums = [1, 2, 3, 4];\n  print(transform(nums, (n) => n * 2));\n  print(transform(nums, (n) => n * n));\n}"
   },
   "quiz": [
    {
     "q": "ما معنى النوع <code dir=\"ltr\">bool Function(String)</code>؟",
     "o": [
      "دالة تستقبل String وتُرجع bool",
      "متغير من نوع bool",
      "دالة لا تستقبل شيئاً"
     ],
     "a": 0,
     "why": "هذا وصف لتوقيع الدالة."
    },
    {
     "q": "ماذا يُسمى تمرير دالة كوسيط لدالة أخرى؟",
     "o": [
      "دالة من رتبة عليا (Higher-Order)",
      "دالة متداخلة",
      "دالة ثابتة"
     ],
     "a": 0,
     "why": "مثل where و map التي تستقبل دوالاً."
    },
    {
     "q": "في <code dir=\"ltr\">onPressed: () { ... }</code> في Flutter، ما نوع <code dir=\"ltr\">() { ... }</code>؟",
     "o": [
      "دالة مجهولة تُنفَّذ عند الضغط",
      "كائن Widget",
      "قائمة"
     ],
     "a": 0,
     "why": "نمرر دالة لتُستدعى عند وقوع الحدث."
    }
   ]
  }
 ],
 [
  {
   "body": "<h2>كل شيء كائن</h2>\n<p>في Dart <strong>كل قيمة كائن</strong>، حتى الأرقام والنصوص والدوال. وفي Flutter <strong>كل شيء Widget</strong>، وكل Widget صنف. لذلك البرمجة الكائنية أساس لا غنى عنه.</p>\n<h2>تعريف صنف</h2>\n<div class=\"code-block src\"><span class=\"code-label\">Dart</span><pre dir=\"ltr\"><code>class Product {\n  String name;\n  double price;\n  int stock;\n\n  Product(this.name, this.price, this.stock);\n\n  bool get isAvailable =&gt; stock &gt; 0;\n\n  void sell(int qty) {\n    if (qty &gt; stock) {\n      print(&#x27;الكمية غير متوفرة من $name&#x27;);\n      return;\n    }\n    stock -= qty;\n    print(&#x27;بيع $qty من $name، المتبقي $stock&#x27;);\n  }\n}\n\nvoid main() {\n  var phone = Product(&#x27;هاتف&#x27;, 2200, 3);\n  phone.sell(2);\n  phone.sell(5);\n  print(phone.isAvailable);\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>بيع 2 من هاتف، المتبقي 1\nالكمية غير متوفرة من هاتف\ntrue</code></pre></div>\n<ul><li><strong>الخصائص (Fields):</strong> <code dir=\"ltr\">name</code> و <code dir=\"ltr\">price</code> و <code dir=\"ltr\">stock</code>.</li><li><strong>المُنشئ (Constructor):</strong> <code dir=\"ltr\">Product(this.name, this.price, this.stock);</code> صيغة مختصرة رائعة في Dart تعني &quot;خذ الوسائط وضعها مباشرة في الخصائص&quot;.</li><li><strong>getter:</strong> <code dir=\"ltr\">isAvailable</code> تُقرأ كخاصية دون أقواس، لكنها تُحسب في كل مرة.</li><li><strong>الطرق (Methods):</strong> دوال تعمل على بيانات الكائن.</li><li>لا نحتاج كلمة <code dir=\"ltr\">new</code> لإنشاء كائن.</li></ul>\n<h2>المُنشئ بمعاملات مسماة</h2>\n<p>الأسلوب الأكثر شيوعاً في Flutter:</p>\n<div class=\"code-block src\"><span class=\"code-label\">Dart</span><pre dir=\"ltr\"><code>class User {\n  final String name;\n  final String email;\n  final bool isAdmin;\n\n  const User({required this.name, required this.email, this.isAdmin = false});\n\n  @override\n  String toString() =&gt; &#x27;User($name, $email, admin: $isAdmin)&#x27;;\n}\n\nvoid main() {\n  const u = User(name: &#x27;نوف&#x27;, email: &#x27;nouf@mail.com&#x27;);\n  print(u);\n  print(u.isAdmin);\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>User(نوف, nouf@mail.com, admin: false)\nfalse</code></pre></div>\n<ul><li>خصائص <code dir=\"ltr\">final</code> تجعل الكائن <strong>غير قابل للتعديل (Immutable)</strong>، وهذا أسلوب مفضل في Flutter.</li><li><code dir=\"ltr\">const</code> قبل المُنشئ يسمح بإنشاء كائنات ثابتة عند الترجمة، فيوفر الذاكرة.</li><li><code dir=\"ltr\">@override toString()</code> يحدد كيف يُطبع الكائن.</li></ul>\n<h2>المُنشئات المسماة</h2>\n<p>يمكن أن يكون للصنف أكثر من طريقة إنشاء:</p>\n<div class=\"code-block src\"><span class=\"code-label\">Dart</span><pre dir=\"ltr\"><code>class Temperature {\n  final double celsius;\n\n  Temperature(this.celsius);\n  Temperature.fromFahrenheit(double f) : celsius = (f - 32) * 5 / 9;\n  Temperature.freezing() : celsius = 0;\n\n  String describe() =&gt; &#x27;${celsius.toStringAsFixed(1)}°C&#x27;;\n}\n\nvoid main() {\n  print(Temperature(25).describe());\n  print(Temperature.fromFahrenheit(212).describe());\n  print(Temperature.freezing().describe());\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>25.0°C\n100.0°C\n0.0°C</code></pre></div>\n<p><code dir=\"ltr\">Temperature.fromFahrenheit</code> مُنشئ مسمى، و <code dir=\"ltr\">: celsius = ...</code> تسمى <strong>قائمة التهيئة (Initializer List)</strong>. ستقابل في Flutter مُنشئات مسماة كثيرة مثل <code dir=\"ltr\">ListView.builder</code> و <code dir=\"ltr\">Image.network</code>.</p>\n<h2>الخصوصية بـ _</h2>\n<p>لا توجد كلمة <code dir=\"ltr\">private</code> في Dart. أي اسم يبدأ بشرطة سفلية <code dir=\"ltr\">_</code> يكون <strong>خاصاً بالملف</strong>:</p>\n<div class=\"code-block src\"><span class=\"code-label\">Dart</span><pre dir=\"ltr\"><code>class Wallet {\n  double _balance = 0;\n\n  double get balance =&gt; _balance;\n\n  void deposit(double amount) {\n    if (amount &lt;= 0) return;\n    _balance += amount;\n  }\n}\n\nvoid main() {\n  var w = Wallet();\n  w.deposit(150);\n  w.deposit(-20);\n  print(w.balance);\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>150</code></pre></div>\n<h2>ملخص الدرس</h2>\n<ul><li>الصنف قالب: خصائص + مُنشئ + طرق.</li><li><code dir=\"ltr\">ClassName(this.a, this.b)</code> مُنشئ مختصر، و <code dir=\"ltr\">{required this.a}</code> بمعاملات مسماة.</li><li><code dir=\"ltr\">get</code> لخاصية محسوبة، و <code dir=\"ltr\">final</code> للخصائص الثابتة، و <code dir=\"ltr\">const</code> للمُنشئ الثابت.</li><li>المُنشئات المسماة <code dir=\"ltr\">ClassName.named()</code>، و <code dir=\"ltr\">_</code> للخصوصية.</li></ul>",
   "exercise": {
    "prompt": "<p>أنشئ صنف <code dir=\"ltr\">BankAccount</code>:</p>\n<ul><li>خاصية <code dir=\"ltr\">owner</code> من نوع <code dir=\"ltr\">String</code> و <code dir=\"ltr\">final</code>.</li><li>رصيد خاص <code dir=\"ltr\">_balance</code> يبدأ من <code dir=\"ltr\">0</code>.</li><li>مُنشئ بمعامل مسمى إلزامي <code dir=\"ltr\">owner</code>.</li><li>getter اسمه <code dir=\"ltr\">balance</code>.</li><li>طريقة <code dir=\"ltr\">deposit(double amount)</code> تضيف المبلغ.</li><li>طريقة <code dir=\"ltr\">withdraw(double amount)</code> تُرجع <code dir=\"ltr\">bool</code>: إذا كان المبلغ أكبر من الرصيد تُرجع <code dir=\"ltr\">false</code> دون خصم، وإلا تخصم وتُرجع <code dir=\"ltr\">true</code>.</li></ul>",
    "starter": "// اكتب الصنف هنا\n\nvoid main() {\n  final acc = BankAccount(owner: 'عبدالله');\n  acc.deposit(500);\n  print(acc.withdraw(800));\n  print(acc.withdraw(200));\n  print('${acc.owner}: ${acc.balance}');\n}",
    "expected": "false\ntrue\nعبدالله: 300",
    "solution": "class BankAccount {\n  final String owner;\n  double _balance = 0;\n\n  BankAccount({required this.owner});\n\n  double get balance => _balance;\n\n  void deposit(double amount) {\n    _balance += amount;\n  }\n\n  bool withdraw(double amount) {\n    if (amount > _balance) return false;\n    _balance -= amount;\n    return true;\n  }\n}\n\nvoid main() {\n  final acc = BankAccount(owner: 'عبدالله');\n  acc.deposit(500);\n  print(acc.withdraw(800));\n  print(acc.withdraw(200));\n  print('${acc.owner}: ${acc.balance}');\n}"
   },
   "quiz": [
    {
     "q": "ماذا يفعل المُنشئ <code dir=\"ltr\">Point(this.x, this.y);</code>؟",
     "o": [
      "يضع الوسيطين مباشرة في الخاصيتين x و y",
      "ينشئ متغيرين محليين فقط",
      "خطأ في الصيغة"
     ],
     "a": 0,
     "why": "هذه صيغة Dart المختصرة للتهيئة."
    },
    {
     "q": "كيف تجعل خاصية خاصة في Dart؟",
     "o": [
      "بكلمة private",
      "ببدء اسمها بشرطة سفلية <code dir=\"ltr\">_</code>",
      "بكلمة hidden"
     ],
     "a": 1,
     "why": "الشرطة السفلية تجعل الاسم خاصاً بالملف."
    },
    {
     "q": "ما فائدة الخصائص final في كائنات Flutter؟",
     "o": [
      "تجعل الكائن غير قابل للتعديل، فيصبح السلوك أوضح وأقل أخطاء",
      "تسرّع الطباعة",
      "تسمح بقيمة null"
     ],
     "a": 0,
     "why": "الكائنات الثابتة أسهل في التتبع، وهي أساس Widgets."
    }
   ]
  },
  {
   "body": "<h2>البناء على صنف موجود</h2>\n<p><strong>الوراثة</strong> تتيح لصنف أن يأخذ كل ما في صنف آخر ويضيف عليه أو يعدّل:</p>\n<div class=\"code-block src\"><span class=\"code-label\">Dart</span><pre dir=\"ltr\"><code>class Animal {\n  final String name;\n  Animal(this.name);\n\n  String speak() =&gt; &#x27;$name يصدر صوتاً&#x27;;\n  String describe() =&gt; &#x27;أنا $name&#x27;;\n}\n\nclass Cat extends Animal {\n  final bool indoor;\n  Cat(super.name, {this.indoor = true});\n\n  @override\n  String speak() =&gt; &#x27;$name يقول مياو&#x27;;\n}\n\nvoid main() {\n  final cat = Cat(&#x27;مشمش&#x27;);\n  print(cat.speak());\n  print(cat.describe());\n  print(cat.indoor);\n  print(cat is Animal);\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>مشمش يقول مياو\nأنا مشمش\ntrue\ntrue</code></pre></div>\n<ul><li><code dir=\"ltr\">extends Animal</code> يرث كل الخصائص والطرق.</li><li><code dir=\"ltr\">super.name</code> يمرر المعامل مباشرة لمُنشئ الأب (صيغة Dart 3 المختصرة).</li><li><code dir=\"ltr\">@override</code> يعيد تعريف طريقة الأب، وكتابته توضح النية ويحميك من الأخطاء الإملائية.</li><li><code dir=\"ltr\">is</code> للتحقق من النوع.</li></ul>\n<h2>استدعاء نسخة الأب بـ super</h2>\n<div class=\"code-block src\"><span class=\"code-label\">Dart</span><pre dir=\"ltr\"><code>class Employee {\n  final String name;\n  final double salary;\n  Employee(this.name, this.salary);\n\n  String info() =&gt; &#x27;$name - راتب $salary&#x27;;\n}\n\nclass Manager extends Employee {\n  final int teamSize;\n  Manager(super.name, super.salary, this.teamSize);\n\n  @override\n  String info() =&gt; &#x27;${super.info()} - يدير $teamSize موظفين&#x27;;\n}\n\nvoid main() {\n  print(Employee(&#x27;هالة&#x27;, 9000).info());\n  print(Manager(&#x27;ماجد&#x27;, 15000, 6).info());\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>هالة - راتب 9000\nماجد - راتب 15000 - يدير 6 موظفين</code></pre></div>\n<h2>تعدد الأشكال (Polymorphism)</h2>\n<p>قائمة من النوع الأب يمكن أن تحتوي كائنات من الأبناء، وكل منها يتصرف بطريقته:</p>\n<div class=\"code-block src\"><span class=\"code-label\">Dart</span><pre dir=\"ltr\"><code>class Shape {\n  double area() =&gt; 0;\n}\n\nclass Square extends Shape {\n  final double side;\n  Square(this.side);\n  @override\n  double area() =&gt; side * side;\n}\n\nclass Circle extends Shape {\n  final double r;\n  Circle(this.r);\n  @override\n  double area() =&gt; 3 * r * r;\n}\n\nvoid main() {\n  final List&lt;Shape&gt; shapes = [Square(4), Circle(2), Square(1.5)];\n  for (final s in shapes) {\n    print(&#x27;${s.runtimeType}: ${s.area()}&#x27;);\n  }\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>Square: 16\nCircle: 12\nSquare: 2.25</code></pre></div>\n<p>حلقة واحدة تتعامل مع كل الأشكال دون أن تعرف نوع كل منها. و <code dir=\"ltr\">runtimeType</code> يعطيك النوع الفعلي للكائن.</p>\n<h2>الوراثة في Flutter</h2>\n<p>كل Widget تكتبه في Flutter يرث من صنف أساسي:</p>\n<div class=\"code-block src\"><span class=\"code-label\">Dart</span><pre dir=\"ltr\"><code>class WelcomeCard extends StatelessWidget {\n  final String name;\n  const WelcomeCard({super.key, required this.name});\n\n  @override\n  Widget build(BuildContext context) {\n    return Text(&#x27;أهلاً $name&#x27;);\n  }\n}</code></pre></div>\n<p>الآن تفهم كل كلمة في هذا الكود: وراثة من <code dir=\"ltr\">StatelessWidget</code>، ومُنشئ ثابت بمعاملات مسماة، و <code dir=\"ltr\">super.key</code>، وإعادة تعريف <code dir=\"ltr\">build</code> بـ <code dir=\"ltr\">@override</code>.</p>\n<h2>ملخص الدرس</h2>\n<ul><li><code dir=\"ltr\">extends</code> للوراثة، والابن يأخذ كل ما في الأب.</li><li><code dir=\"ltr\">super.param</code> يمرر المعاملات لمُنشئ الأب، و <code dir=\"ltr\">super.method()</code> يستدعي نسخة الأب.</li><li><code dir=\"ltr\">@override</code> لإعادة تعريف طريقة.</li><li>تعدد الأشكال: كائنات مختلفة بنفس الواجهة تتصرف كل منها بطريقتها.</li></ul>",
   "exercise": {
    "prompt": "<ol><li>أنشئ صنف <code dir=\"ltr\">Vehicle</code> بخاصية <code dir=\"ltr\">final String brand</code>، وطريقة <code dir=\"ltr\">String move()</code> تُرجع <code dir=\"ltr\">X تتحرك</code>.</li><li>أنشئ <code dir=\"ltr\">Car</code> يرث من <code dir=\"ltr\">Vehicle</code> ويعيد تعريف <code dir=\"ltr\">move()</code> لتُرجع <code dir=\"ltr\">X تسير على الطريق</code>.</li><li>أنشئ <code dir=\"ltr\">Plane</code> يرث من <code dir=\"ltr\">Vehicle</code> ويضيف خاصية <code dir=\"ltr\">final int altitude</code>، ويعيد تعريف <code dir=\"ltr\">move()</code> لتُرجع نتيجة الأب متبوعة بـ <code dir=\"ltr\"> على ارتفاع N متر</code> (استخدم <code dir=\"ltr\">super.move()</code>).</li></ol>\n<p>الحلقة في <code dir=\"ltr\">main</code> جاهزة.</p>",
    "starter": "// اكتب الأصناف هنا\n\nvoid main() {\n  final List<Vehicle> list = [Vehicle('دراجة'), Car('تويوتا'), Plane('بوينغ', 10000)];\n  for (final v in list) {\n    print(v.move());\n  }\n}",
    "expected": "دراجة تتحرك\nتويوتا تسير على الطريق\nبوينغ تتحرك على ارتفاع 10000 متر",
    "solution": "class Vehicle {\n  final String brand;\n  Vehicle(this.brand);\n  String move() => '$brand تتحرك';\n}\n\nclass Car extends Vehicle {\n  Car(super.brand);\n  @override\n  String move() => '$brand تسير على الطريق';\n}\n\nclass Plane extends Vehicle {\n  final int altitude;\n  Plane(super.brand, this.altitude);\n  @override\n  String move() => '${super.move()} على ارتفاع $altitude متر';\n}\n\nvoid main() {\n  final List<Vehicle> list = [Vehicle('دراجة'), Car('تويوتا'), Plane('بوينغ', 10000)];\n  for (final v in list) {\n    print(v.move());\n  }\n}"
   },
   "quiz": [
    {
     "q": "ما وظيفة <code dir=\"ltr\">@override</code>؟",
     "o": [
      "توضيح أن الطريقة تعيد تعريف طريقة موجودة في الأب",
      "إنشاء طريقة جديدة",
      "حذف طريقة الأب"
     ],
     "a": 0,
     "why": "المترجم يتحقق من وجود الطريقة في الأب فعلاً."
    },
    {
     "q": "كيف تستدعي نسخة الأب من طريقة أعدت تعريفها؟",
     "o": [
      "<code dir=\"ltr\">super.methodName()</code>",
      "<code dir=\"ltr\">parent.methodName()</code>",
      "<code dir=\"ltr\">this.methodName()</code>"
     ],
     "a": 0,
     "why": "super تشير إلى الصنف الأب."
    },
    {
     "q": "في Flutter، من أي صنف يرث Widget لا يتغير؟",
     "o": [
      "StatelessWidget",
      "Object فقط",
      "Future"
     ],
     "a": 0,
     "why": "و StatefulWidget للـ Widgets التي لها حالة متغيرة."
    }
   ]
  },
  {
   "body": "<h2>مشاركة السلوك دون وراثة</h2>\n<p>Dart تسمح بالوراثة من <strong>صنف واحد فقط</strong>. فماذا لو أردت أن يمتلك <code dir=\"ltr\">Duck</code> قدرة السباحة <strong>و</strong> الطيران، وأن يمتلك <code dir=\"ltr\">Fish</code> السباحة فقط؟ الحل: <strong>Mixins</strong>، وهي حزم من السلوك &quot;تخلطها&quot; في أي صنف.</p>\n<h2>تعريف واستخدام Mixin</h2>\n<div class=\"code-block src\"><span class=\"code-label\">Dart</span><pre dir=\"ltr\"><code>mixin Swimmer {\n  String swim() =&gt; &#x27;يسبح في الماء&#x27;;\n}\n\nmixin Flyer {\n  String fly() =&gt; &#x27;يطير في السماء&#x27;;\n}\n\nclass Animal {\n  final String name;\n  Animal(this.name);\n}\n\nclass Duck extends Animal with Swimmer, Flyer {\n  Duck(super.name);\n}\n\nclass Fish extends Animal with Swimmer {\n  Fish(super.name);\n}\n\nvoid main() {\n  final duck = Duck(&#x27;بطة&#x27;);\n  final fish = Fish(&#x27;سمكة&#x27;);\n  print(&#x27;${duck.name}: ${duck.swim()} و ${duck.fly()}&#x27;);\n  print(&#x27;${fish.name}: ${fish.swim()}&#x27;);\n  print(duck is Flyer);\n  print(fish is Flyer);\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>بطة: يسبح في الماء و يطير في السماء\nسمكة: يسبح في الماء\ntrue\nfalse</code></pre></div>\n<ul><li><code dir=\"ltr\">mixin</code> يعرّف حزمة سلوك.</li><li><code dir=\"ltr\">with A, B</code> تضيف المزيج إلى الصنف.</li><li>الصنف يستطيع أن يرث من صنف واحد ويضيف عدة mixins.</li></ul>\n<h2>Mixins مع حالة</h2>\n<p>يمكن للمزيج أن يحتوي متغيرات أيضاً:</p>\n<div class=\"code-block src\"><span class=\"code-label\">Dart</span><pre dir=\"ltr\"><code>mixin Logger {\n  final List&lt;String&gt; _logs = [];\n\n  void log(String msg) =&gt; _logs.add(msg);\n  List&lt;String&gt; get history =&gt; List.unmodifiable(_logs);\n}\n\nclass Cart with Logger {\n  int items = 0;\n\n  void add() {\n    items++;\n    log(&#x27;أضيف منتج، المجموع $items&#x27;);\n  }\n}\n\nvoid main() {\n  final cart = Cart();\n  cart.add();\n  cart.add();\n  for (final line in cart.history) {\n    print(line);\n  }\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>أضيف منتج، المجموع 1\nأضيف منتج، المجموع 2</code></pre></div>\n<h2>تقييد المزيج بـ on</h2>\n<p>أحياناً يحتاج المزيج أن يعمل فقط مع أصناف معينة:</p>\n<div class=\"code-block src\"><span class=\"code-label\">Dart</span><pre dir=\"ltr\"><code>class Account {\n  double balance = 0;\n}\n\nmixin Interest on Account {\n  void addInterest(double rate) =&gt; balance += balance * rate / 100;\n}\n\nclass SavingsAccount extends Account with Interest {}\n\nvoid main() {\n  final s = SavingsAccount();\n  s.balance = 1000;\n  s.addInterest(5);\n  print(s.balance);\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>1050</code></pre></div>\n<p><code dir=\"ltr\">on Account</code> تعني أن <code dir=\"ltr\">Interest</code> لا يُستخدم إلا مع أصناف ترث من <code dir=\"ltr\">Account</code>، فيستطيع استخدام <code dir=\"ltr\">balance</code> بأمان.</p>\n<h2>Mixins في Flutter</h2>\n<p>أشهر مثال تراه في الرسوم المتحركة:</p>\n<div class=\"code-block src\"><span class=\"code-label\">Dart</span><pre dir=\"ltr\"><code>class _MyScreenState extends State&lt;MyScreen&gt;\n    with SingleTickerProviderStateMixin {\n  late final AnimationController controller =\n      AnimationController(vsync: this, duration: Duration(seconds: 1));\n}</code></pre></div>\n<p><code dir=\"ltr\">SingleTickerProviderStateMixin</code> يضيف لصفحتك قدرة توفير &quot;نبضات&quot; الحركة، دون أن ترث من صنف آخر.</p>\n<h2>ملخص الدرس</h2>\n<ul><li>Dart تسمح بوراثة صنف واحد، و Mixins تضيف سلوكاً من مصادر متعددة.</li><li><code dir=\"ltr\">mixin Name { ... }</code> للتعريف، و <code dir=\"ltr\">class C with A, B</code> للاستخدام.</li><li>المزيج يمكن أن يحتوي طرقاً ومتغيرات.</li><li><code dir=\"ltr\">mixin M on BaseClass</code> لتقييد استخدامه.</li></ul>",
   "exercise": {
    "prompt": "<ol><li>أنشئ mixin اسمه <code dir=\"ltr\">Rateable</code> فيه قائمة خاصة <code dir=\"ltr\">_ratings</code> من <code dir=\"ltr\">int</code>، وطريقة <code dir=\"ltr\">rate(int stars)</code> تضيف التقييم، و getter اسمه <code dir=\"ltr\">average</code> يُرجع متوسط التقييمات كـ <code dir=\"ltr\">double</code> (أو <code dir=\"ltr\">0</code> إذا لم توجد تقييمات).</li><li>أنشئ صنف <code dir=\"ltr\">Restaurant</code> بخاصية <code dir=\"ltr\">final String name</code> ويستخدم <code dir=\"ltr\">Rateable</code>.</li></ol>",
    "starter": "// اكتب المزيج والصنف هنا\n\nvoid main() {\n  final r = Restaurant('مطعم البحر');\n  print(r.average);\n  r.rate(5);\n  r.rate(4);\n  r.rate(3);\n  print('${r.name}: ${r.average}');\n}",
    "expected": "0\nمطعم البحر: 4",
    "solution": "mixin Rateable {\n  final List<int> _ratings = [];\n\n  void rate(int stars) => _ratings.add(stars);\n\n  double get average {\n    if (_ratings.isEmpty) return 0;\n    return _ratings.reduce((a, b) => a + b) / _ratings.length;\n  }\n}\n\nclass Restaurant with Rateable {\n  final String name;\n  Restaurant(this.name);\n}\n\nvoid main() {\n  final r = Restaurant('مطعم البحر');\n  print(r.average);\n  r.rate(5);\n  r.rate(4);\n  r.rate(3);\n  print('${r.name}: ${r.average}');\n}"
   },
   "quiz": [
    {
     "q": "كم صنفاً يمكن أن يرث منه صنف واحد بـ extends في Dart؟",
     "o": [
      "صنف واحد فقط",
      "اثنان",
      "بلا حد"
     ],
     "a": 0,
     "why": "لكن يمكنه إضافة عدة mixins بـ with."
    },
    {
     "q": "ما الكلمة المستخدمة لإضافة mixin إلى صنف؟",
     "o": [
      "extends",
      "with",
      "implements"
     ],
     "a": 1,
     "why": "class C extends B with M1, M2."
    },
    {
     "q": "ماذا تعني <code dir=\"ltr\">mixin Interest on Account</code>؟",
     "o": [
      "المزيج لا يُستخدم إلا مع أصناف ترث من Account",
      "المزيج يرث من Account",
      "المزيج يعمل فقط عندما يكون Account فارغاً"
     ],
     "a": 0,
     "why": "on تقيّد أين يمكن استخدام المزيج."
    }
   ]
  },
  {
   "body": "<h2>عقود بلا تفاصيل</h2>\n<p>أحياناً نريد تحديد <strong>ماذا</strong> يجب أن يفعل الصنف، دون <strong>كيف</strong>. مثلاً: كل وسيلة دفع يجب أن تمتلك <code dir=\"ltr\">pay()</code>، لكن الدفع ببطاقة يختلف عن المحفظة الرقمية.</p>\n<h2>الأصناف المجردة (abstract)</h2>\n<div class=\"code-block src\"><span class=\"code-label\">Dart</span><pre dir=\"ltr\"><code>abstract class PaymentMethod {\n  String get name;\n  bool pay(double amount);\n\n  void checkout(double amount) {\n    final ok = pay(amount);\n    print(ok ? &#x27;تم الدفع بـ $name&#x27; : &#x27;فشل الدفع بـ $name&#x27;);\n  }\n}\n\nclass CreditCard extends PaymentMethod {\n  @override\n  String get name =&gt; &#x27;البطاقة&#x27;;\n\n  @override\n  bool pay(double amount) =&gt; amount &lt;= 5000;\n}\n\nclass Wallet extends PaymentMethod {\n  double balance;\n  Wallet(this.balance);\n\n  @override\n  String get name =&gt; &#x27;المحفظة&#x27;;\n\n  @override\n  bool pay(double amount) {\n    if (amount &gt; balance) return false;\n    balance -= amount;\n    return true;\n  }\n}\n\nvoid main() {\n  final methods = &lt;PaymentMethod&gt;[CreditCard(), Wallet(100)];\n  for (final m in methods) {\n    m.checkout(250);\n  }\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>تم الدفع بـ البطاقة\nفشل الدفع بـ المحفظة</code></pre></div>\n<ul><li><code dir=\"ltr\">abstract class</code> لا يمكن إنشاء كائن منه مباشرة: <code dir=\"ltr\">PaymentMethod()</code> خطأ.</li><li>الطرق بلا جسم (<code dir=\"ltr\">bool pay(double amount);</code>) <strong>يجب</strong> على كل ابن تعريفها، وإلا يرفض المترجم.</li><li>الصنف المجرد يمكن أن يحتوي طرقاً كاملة أيضاً مثل <code dir=\"ltr\">checkout</code>.</li></ul>\n<h2>الواجهات: implements</h2>\n<p>في Dart <strong>كل صنف هو واجهة ضمنياً</strong>. بـ <code dir=\"ltr\">implements</code> تتعهد بتنفيذ <strong>كل</strong> ما في الصنف، دون أن ترث أي كود:</p>\n<div class=\"code-block src\"><span class=\"code-label\">Dart</span><pre dir=\"ltr\"><code>abstract class Printable {\n  String printOut();\n}\n\nabstract class Exportable {\n  String export();\n}\n\nclass Invoice implements Printable, Exportable {\n  final int number;\n  Invoice(this.number);\n\n  @override\n  String printOut() =&gt; &#x27;فاتورة رقم $number&#x27;;\n\n  @override\n  String export() =&gt; &#x27;{&quot;invoice&quot;: $number}&#x27;;\n}\n\nvoid main() {\n  final inv = Invoice(77);\n  print(inv.printOut());\n  print(inv.export());\n  print(inv is Printable &amp;&amp; inv is Exportable);\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>فاتورة رقم 77\n{&quot;invoice&quot;: 77}\ntrue</code></pre></div>\n<h2>الفرق بين extends و implements و with</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>الكلمة</th><th>ماذا تأخذ</th><th>العدد</th></tr></thead><tbody><tr><td><code dir=\"ltr\">extends</code></td><td>الكود والواجهة، ويمكن إعادة تعريف بعضها</td><td>صنف واحد</td></tr><tr><td><code dir=\"ltr\">implements</code></td><td>الواجهة فقط، ويجب تنفيذ كل شيء</td><td>عدة أصناف</td></tr><tr><td><code dir=\"ltr\">with</code></td><td>كود جاهز من mixins</td><td>عدة mixins</td></tr></tbody></table></div>\n<h2>الأصناف المختومة (sealed): أقوى مع switch</h2>\n<p>منذ Dart 3، <code dir=\"ltr\">sealed class</code> تحدد مجموعة <strong>مغلقة</strong> من الأبناء، فيعرف المترجم كل الاحتمالات ويتأكد أن <code dir=\"ltr\">switch</code> تغطيها جميعاً:</p>\n<div class=\"code-block src\"><span class=\"code-label\">Dart</span><pre dir=\"ltr\"><code>sealed class Result {}\n\nclass Success extends Result {\n  final String data;\n  Success(this.data);\n}\n\nclass Failure extends Result {\n  final String error;\n  Failure(this.error);\n}\n\nclass Loading extends Result {}\n\nString render(Result r) =&gt; switch (r) {\n  Success(data: final d) =&gt; &#x27;البيانات: $d&#x27;,\n  Failure(error: final e) =&gt; &#x27;خطأ: $e&#x27;,\n  Loading() =&gt; &#x27;جاري التحميل...&#x27;,\n};\n\nvoid main() {\n  print(render(Loading()));\n  print(render(Success(&#x27;3 منتجات&#x27;)));\n  print(render(Failure(&#x27;لا يوجد اتصال&#x27;)));\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>جاري التحميل...\nالبيانات: 3 منتجات\nخطأ: لا يوجد اتصال</code></pre></div>\n<p>لو أضفت حالة رابعة ونسيت معالجتها في <code dir=\"ltr\">switch</code>، <strong>يرفض المترجم</strong> البرنامج. هذا النمط شائع جداً في Flutter لإدارة حالات الشاشة: تحميل ونجاح وخطأ.</p>\n<h2>ملخص الدرس</h2>\n<ul><li><code dir=\"ltr\">abstract class</code> تحدد ما يجب تنفيذه، ولا يُنشأ منها كائن مباشرة.</li><li><code dir=\"ltr\">implements</code> لتنفيذ واجهة أو أكثر دون وراثة الكود.</li><li><code dir=\"ltr\">extends</code> لصنف واحد مع الكود، و <code dir=\"ltr\">implements</code> لعدة واجهات، و <code dir=\"ltr\">with</code> للـ mixins.</li><li><code dir=\"ltr\">sealed class</code> مع <code dir=\"ltr\">switch</code> تضمن معالجة كل الحالات.</li></ul>",
   "exercise": {
    "prompt": "<ol><li>أنشئ صنفاً مجرداً <code dir=\"ltr\">Notifier</code> فيه طريقة مجردة <code dir=\"ltr\">String send(String message)</code>.</li><li>أنشئ <code dir=\"ltr\">EmailNotifier</code> و <code dir=\"ltr\">SmsNotifier</code> يرثان منه:</li></ol>\n<p>   - البريد يُرجع <code dir=\"ltr\">📧 بريد: X</code>    - الرسائل القصيرة تُرجع <code dir=\"ltr\">📱 SMS: X</code> لكن تقطع الرسالة لأول <strong>10 أحرف</strong> فقط إذا كانت أطول (استخدم <code dir=\"ltr\">substring(0, 10)</code>).</p>\n<p>الكود في <code dir=\"ltr\">main</code> جاهز.</p>",
    "starter": "// اكتب الأصناف هنا\n\nvoid main() {\n  final List<Notifier> channels = [EmailNotifier(), SmsNotifier()];\n  for (final c in channels) {\n    print(c.send('تم شحن طلبك بنجاح'));\n  }\n}",
    "expected": "📧 بريد: تم شحن طلبك بنجاح\n📱 SMS: تم شحن طلب",
    "solution": "abstract class Notifier {\n  String send(String message);\n}\n\nclass EmailNotifier extends Notifier {\n  @override\n  String send(String message) => '📧 بريد: $message';\n}\n\nclass SmsNotifier extends Notifier {\n  @override\n  String send(String message) {\n    final text = message.length > 10 ? message.substring(0, 10) : message;\n    return '📱 SMS: $text';\n  }\n}\n\nvoid main() {\n  final List<Notifier> channels = [EmailNotifier(), SmsNotifier()];\n  for (final c in channels) {\n    print(c.send('تم شحن طلبك بنجاح'));\n  }\n}"
   },
   "quiz": [
    {
     "q": "هل يمكن إنشاء كائن من صنف مجرد مباشرة؟",
     "o": [
      "نعم",
      "لا، يجب إنشاؤه من صنف ابن ينفّذ الطرق المجردة",
      "فقط بـ const"
     ],
     "a": 1,
     "why": "الصنف المجرد قالب ناقص عمداً."
    },
    {
     "q": "ما الفرق الأساسي بين extends و implements؟",
     "o": [
      "extends يرث الكود، و implements يأخذ الواجهة فقط ويجب تنفيذ كل شيء",
      "لا فرق",
      "implements أسرع"
     ],
     "a": 0,
     "why": "ويمكن implements لعدة أصناف."
    },
    {
     "q": "ما فائدة sealed class مع switch؟",
     "o": [
      "المترجم يتأكد أن كل الحالات الممكنة معالجة",
      "تجعل الصنف أسرع",
      "تمنع الوراثة كلياً"
     ],
     "a": 0,
     "why": "نسيان حالة يصبح خطأ ترجمة لا خطأ تشغيل."
    }
   ]
  }
 ],
 [
  {
   "body": "<h2>ثلاث مجموعات أساسية</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>المجموعة</th><th>الوصف</th><th>مثال</th></tr></thead><tbody><tr><td><code dir=\"ltr\">List</code></td><td>قائمة مرتبة، تسمح بالتكرار</td><td><code dir=\"ltr\">[1, 2, 2, 3]</code></td></tr><tr><td><code dir=\"ltr\">Set</code></td><td>مجموعة بلا تكرار</td><td><code dir=\"ltr\">{1, 2, 3}</code></td></tr><tr><td><code dir=\"ltr\">Map</code></td><td>أزواج مفتاح وقيمة</td><td><code dir=\"ltr\">{&#x27;name&#x27;: &#x27;علي&#x27;}</code></td></tr></tbody></table></div>\n<p>وكلها <strong>محددة النوع</strong>: <code dir=\"ltr\">List&lt;String&gt;</code> قائمة نصوص فقط، و <code dir=\"ltr\">Map&lt;String, int&gt;</code> مفاتيح نصية وقيم رقمية.</p>\n<h2>List</h2>\n<div class=\"code-block src\"><span class=\"code-label\">Dart</span><pre dir=\"ltr\"><code>void main() {\n  List&lt;String&gt; tasks = [&#x27;الدراسة&#x27;, &#x27;الرياضة&#x27;];\n  tasks.add(&#x27;القراءة&#x27;);\n  tasks.insert(0, &#x27;الاستيقاظ&#x27;);\n  tasks.remove(&#x27;الرياضة&#x27;);\n\n  print(tasks);\n  print(tasks.length);\n  print(tasks.first);\n  print(tasks.last);\n  print(tasks[1]);\n  print(tasks.contains(&#x27;القراءة&#x27;));\n  print(tasks.indexOf(&#x27;القراءة&#x27;));\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>[الاستيقاظ, الدراسة, القراءة]\n3\nالاستيقاظ\nالقراءة\nالدراسة\ntrue\n2</code></pre></div>\n<div class=\"table-wrap\"><table><thead><tr><th>الطريقة</th><th>الوظيفة</th></tr></thead><tbody><tr><td><code dir=\"ltr\">add(x)</code> و <code dir=\"ltr\">addAll(list)</code></td><td>إضافة في النهاية</td></tr><tr><td><code dir=\"ltr\">insert(i, x)</code></td><td>إضافة في موقع محدد</td></tr><tr><td><code dir=\"ltr\">remove(x)</code> و <code dir=\"ltr\">removeAt(i)</code></td><td>حذف</td></tr><tr><td><code dir=\"ltr\">contains(x)</code> و <code dir=\"ltr\">indexOf(x)</code></td><td>بحث</td></tr><tr><td><code dir=\"ltr\">isEmpty</code> و <code dir=\"ltr\">isNotEmpty</code></td><td>هل القائمة فارغة؟</td></tr><tr><td><code dir=\"ltr\">sort()</code> و <code dir=\"ltr\">reversed</code></td><td>ترتيب وعكس</td></tr></tbody></table></div>\n<h2>Map</h2>\n<div class=\"code-block src\"><span class=\"code-label\">Dart</span><pre dir=\"ltr\"><code>void main() {\n  Map&lt;String, int&gt; stock = {\n    &#x27;قلم&#x27;: 40,\n    &#x27;دفتر&#x27;: 15,\n  };\n\n  stock[&#x27;مسطرة&#x27;] = 8;\n  stock[&#x27;قلم&#x27;] = stock[&#x27;قلم&#x27;]! - 5;\n\n  print(stock);\n  print(stock[&#x27;دفتر&#x27;]);\n  print(stock[&#x27;ممحاة&#x27;]);\n  print(stock.containsKey(&#x27;مسطرة&#x27;));\n  print(stock.keys.toList());\n\n  stock.forEach((item, qty) =&gt; print(&#x27;$item: $qty&#x27;));\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>{قلم: 35, دفتر: 15, مسطرة: 8}\n15\nnull\ntrue\n[قلم, دفتر, مسطرة]\nقلم: 35\nدفتر: 15\nمسطرة: 8</code></pre></div>\n<div class=\"callout warn\">⚠️ <code dir=\"ltr\">stock[&#x27;قلم&#x27;]</code> نوعها <code dir=\"ltr\">int?</code> وليس <code dir=\"ltr\">int</code>، لأن المفتاح قد لا يكون موجوداً فتُرجع <code dir=\"ltr\">null</code>. لذلك استخدمنا <code dir=\"ltr\">!</code> هنا لأننا متأكدون من وجوده. والأسلم: <code dir=\"ltr\">stock[&#x27;قلم&#x27;] ?? 0</code>.</div>\n<h2>Set</h2>\n<div class=\"code-block src\"><span class=\"code-label\">Dart</span><pre dir=\"ltr\"><code>void main() {\n  final tags = &lt;String&gt;{&#x27;dart&#x27;, &#x27;flutter&#x27;};\n  tags.add(&#x27;dart&#x27;);\n  tags.add(&#x27;mobile&#x27;);\n  print(tags);\n  print(tags.length);\n\n  final a = {1, 2, 3, 4};\n  final b = {3, 4, 5};\n  print(a.union(b));\n  print(a.intersection(b));\n  print(a.difference(b));\n\n  final unique = [1, 1, 2, 3, 3].toSet().toList();\n  print(unique);\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>{dart, flutter, mobile}\n3\n{1, 2, 3, 4, 5}\n{3, 4}\n{1, 2}\n[1, 2, 3]</code></pre></div>\n<h2>ميزات خاصة بـ Dart</h2>\n<h3>المجموعات الشرطية والحلقية</h3>\n<p>يمكن كتابة <code dir=\"ltr\">if</code> و <code dir=\"ltr\">for</code> <strong>داخل</strong> القائمة نفسها، وهذا شائع جداً في Flutter لبناء قوائم Widgets:</p>\n<div class=\"code-block src\"><span class=\"code-label\">Dart</span><pre dir=\"ltr\"><code>void main() {\n  final isLoggedIn = true;\n  final items = [&#x27;الرئيسية&#x27;, &#x27;المنتجات&#x27;, if (isLoggedIn) &#x27;حسابي&#x27; else &#x27;دخول&#x27;];\n  print(items);\n\n  final squares = [for (var i = 1; i &lt;= 4; i++) i * i];\n  print(squares);\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>[الرئيسية, المنتجات, حسابي]\n[1, 4, 9, 16]</code></pre></div>\n<h3>عامل الانتشار ...</h3>\n<div class=\"code-block src\"><span class=\"code-label\">Dart</span><pre dir=\"ltr\"><code>void main() {\n  final basic = [&#x27;أ&#x27;, &#x27;ب&#x27;];\n  final extra = [&#x27;ج&#x27;];\n  List&lt;String&gt;? optional;\n\n  final all = [...basic, ...extra, ...?optional];\n  print(all);\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>[أ, ب, ج]</code></pre></div>\n<p><code dir=\"ltr\">...?</code> تنشر القائمة فقط إذا لم تكن null.</p>\n<h2>ملخص الدرس</h2>\n<ul><li><code dir=\"ltr\">List&lt;T&gt;</code> مرتبة، و <code dir=\"ltr\">Set&lt;T&gt;</code> بلا تكرار، و <code dir=\"ltr\">Map&lt;K, V&gt;</code> أزواج مفتاح وقيمة.</li><li>قراءة Map تُرجع نوعاً قابلاً لـ null، فاستخدم <code dir=\"ltr\">??</code>.</li><li><code dir=\"ltr\">if</code> و <code dir=\"ltr\">for</code> داخل القوائم مباشرة، و <code dir=\"ltr\">...</code> لنشر قائمة داخل أخرى.</li></ul>",
   "exercise": {
    "prompt": "<p>لديك قائمة أسماء طلاب حضروا دروساً مختلفة (مع تكرار). المطلوب:</p>\n<ol><li>اطبع عدد الطلاب <strong>المختلفين</strong> باستخدام <code dir=\"ltr\">toSet()</code>.</li><li>أنشئ <code dir=\"ltr\">Map&lt;String, int&gt;</code> اسمها <code dir=\"ltr\">attendance</code> تعدّ مرات حضور كل طالب، واطبعها.</li><li>اطبع اسم من حضر <strong>أكثر</strong> بالشكل: <code dir=\"ltr\">الأكثر حضوراً: X</code>.</li></ol>",
    "starter": "void main() {\n  final visits = ['رغد', 'تركي', 'رغد', 'سما', 'تركي', 'رغد'];\n\n  // أكمل هنا\n}",
    "expected": "3\n{رغد: 3, تركي: 2, سما: 1}\nالأكثر حضوراً: رغد",
    "solution": "void main() {\n  final visits = ['رغد', 'تركي', 'رغد', 'سما', 'تركي', 'رغد'];\n\n  print(visits.toSet().length);\n\n  final attendance = <String, int>{};\n  for (final name in visits) {\n    attendance[name] = (attendance[name] ?? 0) + 1;\n  }\n  print(attendance);\n\n  var top = attendance.keys.first;\n  attendance.forEach((name, count) {\n    if (count > attendance[top]!) top = name;\n  });\n  print('الأكثر حضوراً: $top');\n}"
   },
   "quiz": [
    {
     "q": "ما نوع القيمة التي يُرجعها <code dir=\"ltr\">map[&#x27;key&#x27;]</code> في <code dir=\"ltr\">Map&lt;String, int&gt;</code>؟",
     "o": [
      "int",
      "int? لأن المفتاح قد لا يكون موجوداً",
      "String"
     ],
     "a": 1,
     "why": "القراءة من Map قد تُرجع null."
    },
    {
     "q": "ماذا يحدث عند إضافة عنصر موجود مسبقاً إلى Set؟",
     "o": [
      "يُتجاهل لأن Set لا تسمح بالتكرار",
      "يُضاف مرة ثانية",
      "خطأ"
     ],
     "a": 0,
     "why": "كل عنصر في Set فريد."
    },
    {
     "q": "ما ناتج <code dir=\"ltr\">[for (var i = 0; i &lt; 3; i++) i * 10]</code>؟",
     "o": [
      "<code dir=\"ltr\">[0, 10, 20]</code>",
      "<code dir=\"ltr\">[10, 20, 30]</code>",
      "خطأ في الصيغة"
     ],
     "a": 0,
     "why": "for داخل القائمة تولّد عناصرها مباشرة."
    }
   ]
  },
  {
   "body": "<h2>دوال المجموعات: الأسلوب الوظيفي</h2>\n<p>بدلاً من الحلقات اليدوية، توفر Dart دوالاً قوية لمعالجة المجموعات. ستستخدمها يومياً، خاصة لتحويل البيانات إلى Widgets في Flutter.</p>\n<h2>map: تحويل كل عنصر</h2>\n<div class=\"code-block src\"><span class=\"code-label\">Dart</span><pre dir=\"ltr\"><code>void main() {\n  final prices = [100, 250, 80];\n  final withTax = prices.map((p) =&gt; p * 1.15).toList();\n  print(withTax);\n\n  final names = [&#x27;dart&#x27;, &#x27;flutter&#x27;];\n  print(names.map((n) =&gt; n.toUpperCase()).toList());\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>[114.99999999999999, 287.5, 92]\n[DART, FLUTTER]</code></pre></div>\n<div class=\"callout warn\">⚠️ <code dir=\"ltr\">map</code> و <code dir=\"ltr\">where</code> تُرجعان <code dir=\"ltr\">Iterable</code> كسولة (Lazy) لا تُحسب إلا عند الحاجة. أضف <code dir=\"ltr\">.toList()</code> في النهاية عندما تحتاج قائمة حقيقية.</div>\n<p>لاحظ أن <code dir=\"ltr\">100 * 1.15</code> طُبعت <code dir=\"ltr\">114.99999999999999</code>: هذه طبيعة الأرقام العشرية في كل لغات البرمجة. لعرض الأسعار استخدم <code dir=\"ltr\">toStringAsFixed(2)</code>.</p>\n<h2>where: التصفية</h2>\n<div class=\"code-block src\"><span class=\"code-label\">Dart</span><pre dir=\"ltr\"><code>void main() {\n  final ages = [12, 25, 17, 30, 15];\n  print(ages.where((a) =&gt; a &gt;= 18).toList());\n\n  final words = [&#x27;قلم&#x27;, &#x27;حاسوب&#x27;, &#x27;كتاب&#x27;];\n  print(words.where((w) =&gt; w.length &gt; 3).toList());\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>[25, 30]\n[حاسوب, كتاب]</code></pre></div>\n<h2>reduce و fold: التجميع</h2>\n<div class=\"code-block src\"><span class=\"code-label\">Dart</span><pre dir=\"ltr\"><code>void main() {\n  final cart = [30, 45, 25];\n\n  final total = cart.reduce((sum, p) =&gt; sum + p);\n  print(total);\n\n  final totalWithShipping = cart.fold(15, (sum, p) =&gt; sum + p);\n  print(totalWithShipping);\n\n  final longest = [&#x27;أ&#x27;, &#x27;أبجد&#x27;, &#x27;أب&#x27;].reduce((a, b) =&gt; a.length &gt;= b.length ? a : b);\n  print(longest);\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>100\n115\nأبجد</code></pre></div>\n<ul><li><code dir=\"ltr\">reduce</code> تبدأ من أول عنصر، ولا تعمل مع قائمة فارغة.</li><li><code dir=\"ltr\">fold</code> تبدأ من قيمة ابتدائية تحددها، فهي أكثر أماناً.</li></ul>\n<h2>دوال البحث والتحقق</h2>\n<div class=\"code-block src\"><span class=\"code-label\">Dart</span><pre dir=\"ltr\"><code>void main() {\n  final temps = [22, 35, 28, 41];\n\n  print(temps.any((t) =&gt; t &gt; 40));\n  print(temps.every((t) =&gt; t &gt; 20));\n  print(temps.firstWhere((t) =&gt; t &gt; 30));\n  print(temps.firstWhere((t) =&gt; t &gt; 50, orElse: () =&gt; -1));\n  print(temps.skip(1).take(2).toList());\n\n  final sorted = [...temps]..sort((a, b) =&gt; b.compareTo(a));\n  print(sorted);\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>true\ntrue\n35\n-1\n[35, 28]\n[41, 35, 28, 22]</code></pre></div>\n<ul><li><code dir=\"ltr\">any</code> و <code dir=\"ltr\">every</code> للتحقق.</li><li><code dir=\"ltr\">firstWhere</code> أول عنصر يحقق الشرط، و <code dir=\"ltr\">orElse</code> بديل إن لم يوجد.</li><li><code dir=\"ltr\">skip</code> و <code dir=\"ltr\">take</code> للتخطي والأخذ.</li><li><code dir=\"ltr\">..</code> <strong>عامل التتابع (Cascade)</strong>: ينفّذ <code dir=\"ltr\">sort</code> على القائمة ثم يُرجع القائمة نفسها.</li></ul>\n<h2>السلسلة مع الكائنات</h2>\n<p>النمط الحقيقي في التطبيقات:</p>\n<div class=\"code-block src\"><span class=\"code-label\">Dart</span><pre dir=\"ltr\"><code>class Product {\n  final String name;\n  final double price;\n  final bool inStock;\n  Product(this.name, this.price, this.inStock);\n}\n\nvoid main() {\n  final products = [\n    Product(&#x27;ساعة&#x27;, 900, true),\n    Product(&#x27;حقيبة&#x27;, 180, false),\n    Product(&#x27;نظارة&#x27;, 350, true),\n    Product(&#x27;سماعة&#x27;, 250, true),\n  ];\n\n  final available = products\n      .where((p) =&gt; p.inStock)\n      .map((p) =&gt; &#x27;${p.name} (${p.price.toInt()})&#x27;)\n      .toList();\n  print(available);\n\n  final total = products\n      .where((p) =&gt; p.inStock)\n      .fold&lt;double&gt;(0, (sum, p) =&gt; sum + p.price);\n  print(&#x27;الإجمالي: ${total.toInt()}&#x27;);\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>[ساعة (900), نظارة (350), سماعة (250)]\nالإجمالي: 1500</code></pre></div>\n<p>وفي Flutter يصبح نفس النمط: <code dir=\"ltr\">products.map((p) =&gt; ProductCard(product: p)).toList()</code> لعرض قائمة بطاقات.</p>\n<h2>ملخص الدرس</h2>\n<ul><li><code dir=\"ltr\">map</code> للتحويل، و <code dir=\"ltr\">where</code> للتصفية، و <code dir=\"ltr\">fold</code> و <code dir=\"ltr\">reduce</code> للتجميع.</li><li><code dir=\"ltr\">map</code> و <code dir=\"ltr\">where</code> كسولتان، فأضف <code dir=\"ltr\">.toList()</code>.</li><li><code dir=\"ltr\">any</code> و <code dir=\"ltr\">every</code> و <code dir=\"ltr\">firstWhere</code> للبحث، و <code dir=\"ltr\">skip</code> و <code dir=\"ltr\">take</code> للتقطيع.</li><li><code dir=\"ltr\">..</code> يسلسل العمليات على نفس الكائن.</li></ul>",
   "exercise": {
    "prompt": "<p>لديك قائمة طلبات <code dir=\"ltr\">Map</code>. باستخدام دوال المجموعات <strong>دون حلقات</strong>:</p>\n<ol><li>اطبع قائمة أسماء العملاء للطلبات المكتملة (<code dir=\"ltr\">done</code> قيمتها true).</li><li>اطبع مجموع مبالغ الطلبات المكتملة باستخدام <code dir=\"ltr\">fold</code>.</li><li>اطبع هل يوجد طلب مبلغه أكبر من 1000 (<code dir=\"ltr\">any</code>).</li></ol>",
    "starter": "void main() {\n  final orders = [\n    {'customer': 'رنا', 'amount': 450, 'done': true},\n    {'customer': 'وليد', 'amount': 1200, 'done': false},\n    {'customer': 'أسيل', 'amount': 300, 'done': true},\n  ];\n\n  // أكمل هنا\n}",
    "expected": "[رنا, أسيل]\n750\ntrue",
    "solution": "void main() {\n  final orders = [\n    {'customer': 'رنا', 'amount': 450, 'done': true},\n    {'customer': 'وليد', 'amount': 1200, 'done': false},\n    {'customer': 'أسيل', 'amount': 300, 'done': true},\n  ];\n\n  final done = orders.where((o) => o['done'] == true);\n  print(done.map((o) => o['customer']).toList());\n  print(done.fold<int>(0, (sum, o) => sum + (o['amount'] as int)));\n  print(orders.any((o) => (o['amount'] as int) > 1000));\n}"
   },
   "quiz": [
    {
     "q": "لماذا نضيف <code dir=\"ltr\">.toList()</code> بعد <code dir=\"ltr\">map</code>؟",
     "o": [
      "لأن map تُرجع Iterable كسولة، و toList تحوّلها لقائمة حقيقية",
      "لأن map لا تعمل بدونها",
      "لترتيب العناصر"
     ],
     "a": 0,
     "why": "Iterable تُحسب عند الحاجة فقط."
    },
    {
     "q": "ما الفرق بين reduce و fold؟",
     "o": [
      "fold تبدأ من قيمة ابتدائية تحددها، و reduce تبدأ من أول عنصر وتفشل مع القائمة الفارغة",
      "لا فرق",
      "reduce للأرقام فقط"
     ],
     "a": 0,
     "why": "fold أكثر أماناً ومرونة."
    },
    {
     "q": "ماذا يفعل <code dir=\"ltr\">list..sort()..add(5)</code>؟",
     "o": [
      "يرتب القائمة ثم يضيف 5 عليها، ويُرجع القائمة نفسها",
      "يُرجع نتيجة sort فقط",
      "خطأ"
     ],
     "a": 0,
     "why": "عامل التتابع .. ينفّذ عمليات متتالية على نفس الكائن."
    }
   ]
  }
 ],
 [
  {
   "body": "<h2>العمليات التي تأخذ وقتاً</h2>\n<p>تطبيقات Flutter تجلب البيانات من الإنترنت، وتقرأ الملفات، وتنتظر استجابة قواعد البيانات. لو انتظر التطبيق كل عملية وهو متجمد، لتوقفت الواجهة. لذلك تستخدم Dart <strong>البرمجة غير المتزامنة</strong>، وأساسها <code dir=\"ltr\">Future</code>.</p>\n<h2>ما هو Future؟</h2>\n<p><code dir=\"ltr\">Future&lt;T&gt;</code> يمثل <strong>قيمة من نوع T ستتوفر في المستقبل</strong>، مثل إيصال طلب في مطعم: ليس الوجبة، لكنه وعد بها.</p>\n<div class=\"code-block src\"><span class=\"code-label\">Dart</span><pre dir=\"ltr\"><code>Future&lt;String&gt; fetchUsername() {\n  return Future.delayed(Duration(milliseconds: 300), () =&gt; &#x27;غادة&#x27;);\n}\n\nvoid main() {\n  print(&#x27;1. أرسلت الطلب&#x27;);\n  fetchUsername().then((name) =&gt; print(&#x27;3. وصل الاسم: $name&#x27;));\n  print(&#x27;2. التطبيق مستمر ولا ينتظر&#x27;);\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>1. أرسلت الطلب\n2. التطبيق مستمر ولا ينتظر\n3. وصل الاسم: غادة</code></pre></div>\n<ul><li><code dir=\"ltr\">Future.delayed</code> تحاكي عملية تأخذ وقتاً، كطلب شبكة.</li><li><code dir=\"ltr\">then</code> تسجّل دالة تُنفَّذ عندما يكتمل الـ Future.</li><li>لاحظ الترتيب: السطر 2 طُبع قبل 3، لأن البرنامج لم ينتظر.</li></ul>\n<h2>حالات Future</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>الحالة</th><th>المعنى</th></tr></thead><tbody><tr><td>غير مكتمل</td><td>العملية ما زالت تعمل</td></tr><tr><td>مكتمل بقيمة</td><td>نجحت، والقيمة متاحة</td></tr><tr><td>مكتمل بخطأ</td><td>فشلت</td></tr></tbody></table></div>\n<h2>معالجة الأخطاء</h2>\n<div class=\"code-block src\"><span class=\"code-label\">Dart</span><pre dir=\"ltr\"><code>Future&lt;double&gt; getPrice(String item) {\n  return Future.delayed(Duration(milliseconds: 100), () {\n    if (item == &#x27;ذهب&#x27;) return 250.5;\n    throw Exception(&#x27;المنتج غير موجود&#x27;);\n  });\n}\n\nvoid main() {\n  getPrice(&#x27;ذهب&#x27;)\n      .then((p) =&gt; print(&#x27;السعر: $p&#x27;))\n      .catchError((e) =&gt; print(&#x27;خطأ: $e&#x27;));\n\n  getPrice(&#x27;ألماس&#x27;)\n      .then((p) =&gt; print(&#x27;السعر: $p&#x27;))\n      .catchError((e) =&gt; print(&#x27;خطأ: $e&#x27;))\n      .whenComplete(() =&gt; print(&#x27;انتهى البحث&#x27;));\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>السعر: 250.5\nخطأ: Exception: المنتج غير موجود\nانتهى البحث</code></pre></div>\n<ul><li><code dir=\"ltr\">throw Exception(...)</code> داخل الـ Future يجعله يكتمل بخطأ.</li><li><code dir=\"ltr\">catchError</code> تلتقط الخطأ، و <code dir=\"ltr\">whenComplete</code> تُنفَّذ دائماً.</li></ul>\n<h2>تشغيل عدة Futures معاً</h2>\n<div class=\"code-block src\"><span class=\"code-label\">Dart</span><pre dir=\"ltr\"><code>Future&lt;String&gt; load(String name, int ms) =&gt;\n    Future.delayed(Duration(milliseconds: ms), () =&gt; name);\n\nvoid main() {\n  Future.wait([\n    load(&#x27;الملف الشخصي&#x27;, 300),\n    load(&#x27;الإشعارات&#x27;, 100),\n    load(&#x27;الرسائل&#x27;, 200),\n  ]).then((results) =&gt; print(results));\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>[الملف الشخصي, الإشعارات, الرسائل]</code></pre></div>\n<p><code dir=\"ltr\">Future.wait</code> تنتظر <strong>كلها</strong> معاً بالتوازي، وتُرجع النتائج بنفس الترتيب، فاستغرقت 300 ملي ثانية بدلاً من 600.</p>\n<h2>ملخص الدرس</h2>\n<ul><li><code dir=\"ltr\">Future&lt;T&gt;</code> قيمة ستتوفر لاحقاً، والبرنامج لا يتوقف لانتظارها.</li><li><code dir=\"ltr\">then</code> للنتيجة، و <code dir=\"ltr\">catchError</code> للخطأ، و <code dir=\"ltr\">whenComplete</code> تُنفَّذ دائماً.</li><li><code dir=\"ltr\">Future.delayed</code> لمحاكاة التأخير، و <code dir=\"ltr\">Future.wait</code> لتشغيل عدة عمليات بالتوازي.</li></ul>",
   "exercise": {
    "prompt": "<p>اكتب دالة <code dir=\"ltr\">checkStock(String item)</code> تُرجع <code dir=\"ltr\">Future&lt;int&gt;</code>:</p>\n<ul><li>بعد 100 ملي ثانية، تُرجع الكمية من الخريطة <code dir=\"ltr\">stock</code> إذا كان المنتج موجوداً.</li><li>وإلا ترمي <code dir=\"ltr\">Exception(&#x27;$item غير متوفر&#x27;)</code>.</li></ul>\n<p>ثم في <code dir=\"ltr\">main</code> استخدم <code dir=\"ltr\">then</code> و <code dir=\"ltr\">catchError</code> لطباعة النتائج كما هو مطلوب. (لتجنب تداخل الترتيب، الاستدعاء الثاني يبدأ داخل <code dir=\"ltr\">whenComplete</code> للأول.)</p>",
    "starter": "const stock = {'قلم': 12, 'دفتر': 3};\n\nFuture<int> checkStock(String item) {\n  // أكمل هنا\n}\n\nvoid main() {\n  checkStock('قلم')\n      .then((qty) => print('قلم: $qty'))\n      .whenComplete(() {\n    checkStock('حقيبة')\n        .then((qty) => print('حقيبة: $qty'))\n        .catchError((e) => print('خطأ: $e'));\n  });\n}",
    "expected": "قلم: 12\nخطأ: Exception: حقيبة غير متوفر",
    "solution": "const stock = {'قلم': 12, 'دفتر': 3};\n\nFuture<int> checkStock(String item) {\n  return Future.delayed(Duration(milliseconds: 100), () {\n    final qty = stock[item];\n    if (qty == null) throw Exception('$item غير متوفر');\n    return qty;\n  });\n}\n\nvoid main() {\n  checkStock('قلم')\n      .then((qty) => print('قلم: $qty'))\n      .whenComplete(() {\n    checkStock('حقيبة')\n        .then((qty) => print('حقيبة: $qty'))\n        .catchError((e) => print('خطأ: $e'));\n  });\n}"
   },
   "quiz": [
    {
     "q": "ماذا يمثل <code dir=\"ltr\">Future&lt;String&gt;</code>؟",
     "o": [
      "نصاً سيتوفر في المستقبل",
      "نصاً قديماً",
      "قائمة نصوص"
     ],
     "a": 0,
     "why": "Future وعد بقيمة لاحقة."
    },
    {
     "q": "متى تُنفَّذ الدالة الممررة إلى <code dir=\"ltr\">whenComplete</code>؟",
     "o": [
      "عند النجاح فقط",
      "عند الخطأ فقط",
      "دائماً عند اكتمال الـ Future"
     ],
     "a": 2,
     "why": "مثل finally."
    },
    {
     "q": "ما فائدة <code dir=\"ltr\">Future.wait</code>؟",
     "o": [
      "تشغيل عدة عمليات بالتوازي وانتظارها كلها",
      "إيقاف البرنامج",
      "تأخير عملية واحدة"
     ],
     "a": 0,
     "why": "أسرع من انتظار كل عملية بعد الأخرى."
    }
   ]
  },
  {
   "body": "<h2>كتابة الكود غير المتزامن بشكل طبيعي</h2>\n<p>سلاسل <code dir=\"ltr\">then</code> تصبح معقدة مع كثرة الخطوات. <code dir=\"ltr\">async</code> و <code dir=\"ltr\">await</code> تجعل الكود <strong>يُقرأ من الأعلى للأسفل</strong> كأنه متزامن، وهي الطريقة المستخدمة في كل تطبيقات Flutter الحديثة.</p>\n<div class=\"code-block src\"><span class=\"code-label\">Dart</span><pre dir=\"ltr\"><code>Future&lt;String&gt; getUser() =&gt; Future.delayed(Duration(milliseconds: 100), () =&gt; &#x27;ماجد&#x27;);\nFuture&lt;int&gt; getOrders(String user) =&gt; Future.delayed(Duration(milliseconds: 100), () =&gt; 4);\n\nFuture&lt;void&gt; showProfile() async {\n  print(&#x27;جاري التحميل...&#x27;);\n  final user = await getUser();\n  final orders = await getOrders(user);\n  print(&#x27;$user لديه $orders طلبات&#x27;);\n}\n\nvoid main() async {\n  await showProfile();\n  print(&#x27;تم&#x27;);\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>جاري التحميل...\nماجد لديه 4 طلبات\nتم</code></pre></div>\n<h2>القواعد</h2>\n<ol><li><code dir=\"ltr\">async</code> بعد أقواس الدالة تجعلها غير متزامنة، <strong>وتُرجع Future دائماً</strong>.</li><li><code dir=\"ltr\">await</code> تنتظر الـ Future وتعطيك قيمته مباشرة.</li><li><code dir=\"ltr\">await</code> لا تُستخدم إلا داخل دالة <code dir=\"ltr\">async</code>.</li><li>الدالة التي لا تُرجع قيمة نوعها <code dir=\"ltr\">Future&lt;void&gt;</code>.</li></ol>\n<h2>الأخطاء بـ try و catch</h2>\n<div class=\"code-block src\"><span class=\"code-label\">Dart</span><pre dir=\"ltr\"><code>Future&lt;String&gt; login(String password) async {\n  await Future.delayed(Duration(milliseconds: 100));\n  if (password != &#x27;1234&#x27;) {\n    throw Exception(&#x27;كلمة المرور خاطئة&#x27;);\n  }\n  return &#x27;مرحباً بك&#x27;;\n}\n\nFuture&lt;void&gt; attempt(String pass) async {\n  try {\n    final msg = await login(pass);\n    print(msg);\n  } on Exception catch (e) {\n    print(&#x27;فشل: $e&#x27;);\n  } finally {\n    print(&#x27;--&#x27;);\n  }\n}\n\nvoid main() async {\n  await attempt(&#x27;0000&#x27;);\n  await attempt(&#x27;1234&#x27;);\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>فشل: Exception: كلمة المرور خاطئة\n--\nمرحباً بك\n--</code></pre></div>\n<ul><li><code dir=\"ltr\">on Exception catch (e)</code> يلتقط نوعاً محدداً من الأخطاء.</li><li><code dir=\"ltr\">finally</code> تُنفَّذ دائماً، وهي مكان إخفاء مؤشر التحميل.</li></ul>\n<h2>التوازي مع async</h2>\n<div class=\"code-block src\"><span class=\"code-label\">Dart</span><pre dir=\"ltr\"><code>Future&lt;int&gt; task(int ms) =&gt; Future.delayed(Duration(milliseconds: ms), () =&gt; ms);\n\nvoid main() async {\n  final watch = Stopwatch()..start();\n  final results = await Future.wait([task(200), task(200), task(200)]);\n  final fast = watch.elapsedMilliseconds &lt; 500;\n  print(&#x27;$results ${fast ? &#x27;بالتوازي&#x27; : &#x27;بالتتابع&#x27;}&#x27;);\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>[200, 200, 200] بالتوازي</code></pre></div>\n<div class=\"callout tip\">💡 لا تكتب <code dir=\"ltr\">await</code> متتالية لعمليات <strong>مستقلة</strong> عن بعضها. استخدم <code dir=\"ltr\">Future.wait</code> لتعمل معاً.</div>\n<h2>في Flutter</h2>\n<p>هكذا يبدو جلب البيانات عند فتح الشاشة:</p>\n<div class=\"code-block src\"><span class=\"code-label\">Dart</span><pre dir=\"ltr\"><code>Future&lt;void&gt; loadProducts() async {\n  setState(() =&gt; isLoading = true);\n  try {\n    final response = await http.get(Uri.parse(&#x27;https://api.example.com/products&#x27;));\n    products = jsonDecode(response.body);\n  } catch (e) {\n    error = &#x27;تعذر التحميل&#x27;;\n  } finally {\n    setState(() =&gt; isLoading = false);\n  }\n}</code></pre></div>\n<h2>ملخص الدرس</h2>\n<ul><li><code dir=\"ltr\">async</code> تجعل الدالة تُرجع Future، و <code dir=\"ltr\">await</code> تنتظر القيمة.</li><li><code dir=\"ltr\">try</code> و <code dir=\"ltr\">catch</code> و <code dir=\"ltr\">finally</code> لمعالجة الأخطاء بأسلوب مألوف.</li><li><code dir=\"ltr\">on نوع catch (e)</code> لالتقاط أخطاء محددة.</li><li><code dir=\"ltr\">Future.wait</code> مع <code dir=\"ltr\">await</code> للعمليات المستقلة.</li></ul>",
   "exercise": {
    "prompt": "<p>لديك دوال جاهزة تحاكي خادماً. اكتب دالة <code dir=\"ltr\">Future&lt;void&gt; placeOrder(int productId)</code> تنفّذ بالترتيب:</p>\n<ol><li>تجلب السعر بـ <code dir=\"ltr\">await getPrice(productId)</code> وتطبع <code dir=\"ltr\">السعر: N</code>.</li><li>تنشئ الطلب بـ <code dir=\"ltr\">await createOrder(price)</code> وتطبع <code dir=\"ltr\">رقم الطلب: N</code>.</li><li>إذا فشلت أي خطوة تطبع <code dir=\"ltr\">تعذر الطلب: </code> متبوعة برسالة الخطأ، باستخدام <code dir=\"ltr\">e.toString()</code>.</li></ol>",
    "starter": "Future<int> getPrice(int id) async {\n  await Future.delayed(Duration(milliseconds: 50));\n  if (id != 1) throw Exception('منتج غير موجود');\n  return 350;\n}\n\nFuture<int> createOrder(int price) async {\n  await Future.delayed(Duration(milliseconds: 50));\n  return 9001;\n}\n\nFuture<void> placeOrder(int productId) async {\n  // أكمل هنا\n}\n\nvoid main() async {\n  await placeOrder(1);\n  await placeOrder(7);\n}",
    "expected": "السعر: 350\nرقم الطلب: 9001\nتعذر الطلب: Exception: منتج غير موجود",
    "solution": "Future<int> getPrice(int id) async {\n  await Future.delayed(Duration(milliseconds: 50));\n  if (id != 1) throw Exception('منتج غير موجود');\n  return 350;\n}\n\nFuture<int> createOrder(int price) async {\n  await Future.delayed(Duration(milliseconds: 50));\n  return 9001;\n}\n\nFuture<void> placeOrder(int productId) async {\n  try {\n    final price = await getPrice(productId);\n    print('السعر: $price');\n    final orderId = await createOrder(price);\n    print('رقم الطلب: $orderId');\n  } catch (e) {\n    print('تعذر الطلب: ${e.toString()}');\n  }\n}\n\nvoid main() async {\n  await placeOrder(1);\n  await placeOrder(7);\n}"
   },
   "quiz": [
    {
     "q": "ما نوع إرجاع دالة <code dir=\"ltr\">async</code> لا تُرجع قيمة؟",
     "o": [
      "void",
      "Future&lt;void&gt;",
      "null"
     ],
     "a": 1,
     "why": "كل دالة async تُرجع Future."
    },
    {
     "q": "ماذا تفعل <code dir=\"ltr\">await</code>؟",
     "o": [
      "تنتظر اكتمال Future وتعطيك قيمته، دون تجميد التطبيق",
      "توقف البرنامج كاملاً",
      "تلغي الـ Future"
     ],
     "a": 0,
     "why": "الانتظار يخص الدالة الحالية فقط."
    },
    {
     "q": "كيف تلتقط الأخطاء مع await؟",
     "o": [
      "بـ try و catch",
      "بـ then فقط",
      "لا يمكن ذلك"
     ],
     "a": 0,
     "why": "وهذا من أكبر مزايا async/await."
    }
   ]
  },
  {
   "body": "<h2>تدفق من القيم</h2>\n<p><code dir=\"ltr\">Future</code> يعطيك <strong>قيمة واحدة</strong> في المستقبل. لكن ماذا عن بيانات تصل <strong>باستمرار</strong>: رسائل الدردشة، وموقع GPS، ونتائج البحث أثناء الكتابة، وتحديثات الأسعار؟ هنا نستخدم <strong>Stream</strong>: تدفق من القيم عبر الزمن.</p>\n<div class=\"table-wrap\"><table><thead><tr><th></th><th>Future</th><th>Stream</th></tr></thead><tbody><tr><td>عدد القيم</td><td>واحدة</td><td>عدة قيم متتالية</td></tr><tr><td>مثال</td><td>جلب ملف المستخدم</td><td>رسائل دردشة واردة</td></tr><tr><td>الاستماع</td><td><code dir=\"ltr\">await</code> أو <code dir=\"ltr\">then</code></td><td><code dir=\"ltr\">await for</code> أو <code dir=\"ltr\">listen</code></td></tr></tbody></table></div>\n<h2>إنشاء Stream والاستماع له</h2>\n<div class=\"code-block src\"><span class=\"code-label\">Dart</span><pre dir=\"ltr\"><code>Stream&lt;int&gt; countdown(int from) async* {\n  for (var i = from; i &gt;= 1; i--) {\n    await Future.delayed(Duration(milliseconds: 100));\n    yield i;\n  }\n}\n\nvoid main() async {\n  await for (final n in countdown(3)) {\n    print(&#x27;$n...&#x27;);\n  }\n  print(&#x27;انطلق! 🚀&#x27;);\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>3...\n2...\n1...\nانطلق! 🚀</code></pre></div>\n<ul><li><code dir=\"ltr\">async*</code> تجعل الدالة <strong>مولّدة لتدفق</strong>.</li><li><code dir=\"ltr\">yield</code> ترسل قيمة إلى التدفق دون إنهاء الدالة.</li><li><code dir=\"ltr\">await for</code> تستمع لكل قيمة عند وصولها، حتى ينتهي التدفق.</li></ul>\n<h2>listen</h2>\n<p>طريقة أخرى للاستماع، دون إيقاف الدالة الحالية:</p>\n<div class=\"code-block src\"><span class=\"code-label\">Dart</span><pre dir=\"ltr\"><code>void main() {\n  final stream = Stream.fromIterable([&#x27;أهلاً&#x27;, &#x27;كيف حالك؟&#x27;, &#x27;إلى اللقاء&#x27;]);\n  stream.listen(\n    (msg) =&gt; print(&#x27;رسالة: $msg&#x27;),\n    onDone: () =&gt; print(&#x27;انتهت المحادثة&#x27;),\n  );\n  print(&#x27;أستمع للرسائل...&#x27;);\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>أستمع للرسائل...\nرسالة: أهلاً\nرسالة: كيف حالك؟\nرسالة: إلى اللقاء\nانتهت المحادثة</code></pre></div>\n<h2>تحويل التدفقات</h2>\n<p>التدفقات تدعم نفس دوال المجموعات تقريباً:</p>\n<div class=\"code-block src\"><span class=\"code-label\">Dart</span><pre dir=\"ltr\"><code>Stream&lt;int&gt; numbers() async* {\n  for (var i = 1; i &lt;= 6; i++) {\n    yield i;\n  }\n}\n\nvoid main() async {\n  final evens = numbers().where((n) =&gt; n.isEven).map((n) =&gt; n * 10);\n  await for (final v in evens) {\n    print(v);\n  }\n\n  final total = await numbers().reduce((a, b) =&gt; a + b);\n  print(&#x27;المجموع: $total&#x27;);\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>20\n40\n60\nالمجموع: 21</code></pre></div>\n<h2>StreamController: تدفق تتحكم به</h2>\n<p>في التطبيقات كثيراً ما تصنع تدفقاً وتضيف له القيم يدوياً عند وقوع أحداث:</p>\n<div class=\"code-block src\"><span class=\"code-label\">Dart</span><pre dir=\"ltr\"><code>import &#x27;dart:async&#x27;;\n\nvoid main() async {\n  final controller = StreamController&lt;String&gt;();\n\n  controller.stream.listen((event) =&gt; print(&#x27;حدث: $event&#x27;));\n\n  controller.add(&#x27;تسجيل دخول&#x27;);\n  controller.add(&#x27;إضافة للسلة&#x27;);\n  controller.add(&#x27;دفع&#x27;);\n  await controller.close();\n}</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>حدث: تسجيل دخول\nحدث: إضافة للسلة\nحدث: دفع</code></pre></div>\n<div class=\"callout tip\">💡 في Flutter يعرض <code dir=\"ltr\">StreamBuilder</code> آخر قيمة من تدفق ويعيد بناء الواجهة مع كل قيمة جديدة، وهو أساس تطبيقات الدردشة مع Firebase.</div>\n<h2>خاتمة الدورة</h2>\n<p>أكملت دورة Dart! أصبحت تعرف:</p>\n<ul><li>الأساسيات والأنواع والأمان من null.</li><li>الدوال بمعاملاتها المسماة والدوال المجهولة.</li><li>البرمجة الكائنية: الأصناف والوراثة والـ mixins والأصناف المجردة والمختومة.</li><li>المجموعات ودوالها.</li><li>البرمجة غير المتزامنة: Future و async/await و Stream.</li></ul>\n<p>هذا بالضبط ما تحتاجه لتبدأ <strong>Flutter</strong> بثقة.</p>\n<h2>ملخص الدرس</h2>\n<ul><li><code dir=\"ltr\">Stream</code> تدفق من عدة قيم عبر الزمن.</li><li><code dir=\"ltr\">async*</code> و <code dir=\"ltr\">yield</code> لإنشاء تدفق، و <code dir=\"ltr\">await for</code> أو <code dir=\"ltr\">listen</code> للاستماع.</li><li>التدفقات تدعم <code dir=\"ltr\">where</code> و <code dir=\"ltr\">map</code> و <code dir=\"ltr\">reduce</code>.</li><li><code dir=\"ltr\">StreamController</code> لإنشاء تدفق تضيف إليه القيم يدوياً.</li></ul>",
   "exercise": {
    "prompt": "<ol><li>اكتب دالة <code dir=\"ltr\">Stream&lt;String&gt; ticker(List&lt;String&gt; items)</code> بـ <code dir=\"ltr\">async*</code>، ترسل كل عنصر بعد انتظار 50 ملي ثانية.</li><li>في <code dir=\"ltr\">main</code> استمع للتدفق بـ <code dir=\"ltr\">await for</code> واطبع كل عنصر بترقيمه: <code dir=\"ltr\">1. X</code> ثم <code dir=\"ltr\">2. Y</code> ...</li><li>بعد انتهاء التدفق اطبع <code dir=\"ltr\">تم استلام N عناصر</code>.</li></ol>",
    "starter": "Stream<String> ticker(List<String> items) async* {\n  // أكمل هنا\n}\n\nvoid main() async {\n  final items = ['طلب جديد', 'تم الدفع', 'تم الشحن'];\n  // أكمل هنا\n}",
    "expected": "1. طلب جديد\n2. تم الدفع\n3. تم الشحن\nتم استلام 3 عناصر",
    "solution": "Stream<String> ticker(List<String> items) async* {\n  for (final item in items) {\n    await Future.delayed(Duration(milliseconds: 50));\n    yield item;\n  }\n}\n\nvoid main() async {\n  final items = ['طلب جديد', 'تم الدفع', 'تم الشحن'];\n  var count = 0;\n  await for (final item in ticker(items)) {\n    count++;\n    print('$count. $item');\n  }\n  print('تم استلام $count عناصر');\n}"
   },
   "quiz": [
    {
     "q": "ما الفرق الأساسي بين Future و Stream؟",
     "o": [
      "Future يعطي قيمة واحدة، و Stream يعطي عدة قيم عبر الزمن",
      "Stream أسرع",
      "لا فرق"
     ],
     "a": 0,
     "why": "الدردشة والموقع والتحديثات الحية أمثلة على Stream."
    },
    {
     "q": "ما وظيفة <code dir=\"ltr\">yield</code> داخل دالة <code dir=\"ltr\">async*</code>؟",
     "o": [
      "إرسال قيمة إلى التدفق دون إنهاء الدالة",
      "إنهاء الدالة",
      "انتظار Future"
     ],
     "a": 0,
     "why": "yield تشبه return لكنها تسمح بإرسال قيم متعددة."
    },
    {
     "q": "أي Widget في Flutter يعيد بناء الواجهة مع كل قيمة جديدة من تدفق؟",
     "o": [
      "FutureBuilder",
      "StreamBuilder",
      "ListView"
     ],
     "a": 1,
     "why": "FutureBuilder للقيمة الواحدة، و StreamBuilder للتدفقات."
    }
   ]
  }
 ]
], {"runner": "dart"});
