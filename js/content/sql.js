// ملف مولَّد من content/sql عبر tools/build.py، لا تعدّله يدوياً
CW.registerContent("sql", [
 [
  {
   "body": "<h2>البيانات في كل مكان</h2>\n<p>كل تطبيق تستخدمه يخزّن بيانات: حسابات المستخدمين في تويتر، والمنتجات في أمازون، والرسائل في واتساب، والحجوزات في تطبيقات الطيران. أين تُحفظ كل هذه البيانات؟ في <strong>قاعدة بيانات (Database)</strong>.</p>\n<p>قاعدة البيانات نظام منظّم لتخزين البيانات، يتيح لك <strong>إضافتها، والبحث فيها، وتعديلها، وحذفها</strong> بسرعة وأمان، حتى لو كانت ملايين السجلات.</p>\n<h2>لماذا لا نستخدم ملف Excel؟</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>ملف Excel</th><th>قاعدة البيانات</th></tr></thead><tbody><tr><td>يبطئ مع عشرات الآلاف من الصفوف</td><td>تتعامل مع الملايين بسرعة</td></tr><tr><td>شخص واحد يعدّل في نفس الوقت غالباً</td><td>آلاف المستخدمين معاً</td></tr><tr><td>لا شيء يمنع إدخال بيانات خاطئة</td><td>قيود تمنع الأخطاء (مثل بريد مكرر)</td></tr><tr><td>البيانات المترابطة تتكرر في أوراق متعددة</td><td>جداول مترابطة دون تكرار</td></tr></tbody></table></div>\n<h2>قاعدة البيانات العلائقية</h2>\n<p>أشهر نوع هو <strong>قاعدة البيانات العلائقية (Relational Database)</strong>، وفيها تُنظّم البيانات في <strong>جداول</strong> ترتبط ببعضها. مثلاً في متجر إلكتروني:</p>\n<ul><li>جدول <strong>العملاء</strong>: من اشترى؟</li><li>جدول <strong>المنتجات</strong>: ماذا نبيع؟</li><li>جدول <strong>الطلبات</strong>: من طلب ماذا ومتى؟</li></ul>\n<p>جدول الطلبات لا يكرر اسم العميل وعنوانه في كل طلب، بل يحفظ <strong>رقم العميل</strong> فقط، وهذا الرقم يربطه بجدول العملاء. هذه &quot;العلاقة&quot; هي سبب التسمية.</p>\n<p>أشهر أنظمة إدارة قواعد البيانات العلائقية:</p>\n<div class=\"table-wrap\"><table><thead><tr><th>النظام</th><th>يُستخدم في</th></tr></thead><tbody><tr><td>PostgreSQL</td><td>الشركات الناشئة والكبرى، قوي ومجاني</td></tr><tr><td>MySQL</td><td>مواقع الويب و WordPress</td></tr><tr><td>SQLite</td><td>التطبيقات والجوال، قاعدة بيانات في ملف واحد</td></tr><tr><td>SQL Server</td><td>أنظمة شركات Microsoft</td></tr><tr><td>Oracle</td><td>البنوك والمؤسسات الضخمة</td></tr></tbody></table></div>\n<h2>ما هي SQL؟</h2>\n<p><strong>SQL</strong> (تُنطق &quot;إس كيو إل&quot; أو &quot;سيكول&quot;) هي اختصار Structured Query Language، أي <strong>لغة الاستعلام المنظّمة</strong>. هي اللغة التي نتحدث بها مع كل هذه الأنظمة. والجميل أن أساسياتها <strong>واحدة تقريباً</strong> في كلها، فما تتعلمه هنا ستستخدمه في أي نظام.</p>\n<p>SQL لغة <strong>تصريحية</strong>: أنت تصف <strong>ماذا تريد</strong>، وقاعدة البيانات تقرر <strong>كيف</strong> تجلبه:</p>\n<div class=\"code-block src\"><span class=\"code-label\">SQL</span><pre dir=\"ltr\"><code>SELECT name, price\nFROM products\nWHERE price &lt; 100;</code></pre></div>\n<div class=\"code-block out sql-out\"><span class=\"code-label\">النتيجة</span><div class=\"table-wrap\"><table class=\"res-table\"><thead><tr><th>name</th><th>price</th></tr></thead><tbody><tr><td class=\"\">شاحن</td><td class=\"\">80</td></tr><tr><td class=\"\">رواية</td><td class=\"\">45</td></tr><tr><td class=\"\">كتاب طبخ</td><td class=\"\">70</td></tr></tbody></table></div></div>\n<p>اقرأها كجملة إنجليزية: &quot;اختر الاسم والسعر من المنتجات حيث السعر أقل من 100&quot;. لم نكتب حلقات ولا شروطاً معقدة.</p>\n<h2>من يستخدم SQL؟</h2>\n<ul><li><strong>مطورو الواجهات الخلفية:</strong> لبناء التطبيقات.</li><li><strong>محللو البيانات:</strong> لاستخراج التقارير والإحصاءات.</li><li><strong>علماء البيانات:</strong> لتجهيز البيانات قبل التحليل.</li><li><strong>مديرو المنتجات والتسويق:</strong> للإجابة عن أسئلة العمل بأنفسهم.</li></ul>\n<p>ولهذا تُعد SQL من أكثر المهارات طلباً في سوق العمل التقني.</p>\n<h2>ملخص الدرس</h2>\n<ul><li>قاعدة البيانات نظام لتخزين البيانات وإدارتها بسرعة وأمان.</li><li>القاعدة العلائقية تنظّم البيانات في جداول مترابطة.</li><li>SQL لغة التعامل مع قواعد البيانات العلائقية، وأساسياتها واحدة في كل الأنظمة.</li><li>SQL تصريحية: تصف ماذا تريد، لا كيف تجلبه.</li></ul>",
   "exercise": {
    "prompt": "<p>جرّب أول استعلام لك! الاستعلام في المحرر يعرض أسماء المنتجات وأسعارها. عدّله ليعرض <strong>أسماء المنتجات وأسعارها التي سعرها أقل من 60</strong> فقط، بتغيير الرقم في الشرط.</p>\n<p>اضغط «تشغيل» لترى النتيجة كجدول.</p>",
    "starter": "SELECT name, price\nFROM products\nWHERE price < 100;",
    "expected": "name | price\nرواية | 45",
    "solution": "SELECT name, price\nFROM products\nWHERE price < 60;"
   },
   "quiz": [
    {
     "q": "ما معنى SQL؟",
     "o": [
      "لغة الاستعلام المنظّمة للتعامل مع قواعد البيانات",
      "نظام تشغيل للخوادم",
      "لغة لتصميم صفحات الويب"
     ],
     "a": 0,
     "why": "SQL هي اللغة التي نتواصل بها مع قواعد البيانات العلائقية."
    },
    {
     "q": "لماذا تسمى قاعدة البيانات &quot;علائقية&quot;؟",
     "o": [
      "لأنها سريعة",
      "لأن البيانات منظمة في جداول ترتبط ببعضها",
      "لأنها تُستخدم في العلاقات العامة"
     ],
     "a": 1,
     "why": "الجداول ترتبط ببعضها عبر أرقام مشتركة مثل رقم العميل."
    },
    {
     "q": "ماذا يعني أن SQL لغة &quot;تصريحية&quot;؟",
     "o": [
      "تصف النتيجة التي تريدها، وقاعدة البيانات تقرر طريقة جلبها",
      "يجب أن تصرّح بنوع كل متغير",
      "لا يمكن استخدامها إلا بتصريح من المدير"
     ],
     "a": 0,
     "why": "أنت تكتب &quot;ماذا&quot;، والنظام يتولى &quot;كيف&quot;."
    }
   ]
  },
  {
   "body": "<h2>تشريح الجدول</h2>\n<p>الجدول في قاعدة البيانات يشبه جدول Excel، لكن بقواعد أصرم. لنأخذ جدول المنتجات في متجرنا:</p>\n<div class=\"code-block src\"><span class=\"code-label\">SQL</span><pre dir=\"ltr\"><code>SELECT * FROM products LIMIT 4;</code></pre></div>\n<div class=\"code-block out sql-out\"><span class=\"code-label\">النتيجة</span><div class=\"table-wrap\"><table class=\"res-table\"><thead><tr><th>id</th><th>name</th><th>category</th><th>price</th><th>stock</th></tr></thead><tbody><tr><td class=\"\">1</td><td class=\"\">لابتوب</td><td class=\"\">إلكترونيات</td><td class=\"\">3500</td><td class=\"\">12</td></tr><tr><td class=\"\">2</td><td class=\"\">سماعة</td><td class=\"\">إلكترونيات</td><td class=\"\">250</td><td class=\"\">40</td></tr><tr><td class=\"\">3</td><td class=\"\">شاحن</td><td class=\"\">إلكترونيات</td><td class=\"\">80</td><td class=\"\">0</td></tr><tr><td class=\"\">4</td><td class=\"\">قميص</td><td class=\"\">ملابس</td><td class=\"\">120</td><td class=\"\">25</td></tr></tbody></table></div></div>\n<div class=\"table-wrap\"><table><thead><tr><th>المصطلح</th><th>المعنى</th><th>في المثال</th></tr></thead><tbody><tr><td><strong>الجدول (Table)</strong></td><td>مجموعة بيانات عن نوع واحد من الأشياء</td><td><code dir=\"ltr\">products</code></td></tr><tr><td><strong>العمود (Column)</strong></td><td>خاصية واحدة لكل عنصر، وله <strong>نوع</strong> محدد</td><td><code dir=\"ltr\">name</code> و <code dir=\"ltr\">price</code></td></tr><tr><td><strong>الصف (Row)</strong> أو <strong>السجل (Record)</strong></td><td>عنصر واحد كامل</td><td>لابتوب بكل بياناته</td></tr><tr><td><strong>الخلية (Cell)</strong></td><td>قيمة واحدة: تقاطع صف وعمود</td><td><code dir=\"ltr\">3500</code> سعر اللابتوب</td></tr></tbody></table></div>\n<h2>كل عمود له نوع</h2>\n<p>على عكس Excel، لا يمكنك وضع نص في عمود أرقام (في معظم الأنظمة). أشهر الأنواع:</p>\n<div class=\"table-wrap\"><table><thead><tr><th>النوع</th><th>يخزّن</th><th>مثال</th></tr></thead><tbody><tr><td><code dir=\"ltr\">INTEGER</code> أو <code dir=\"ltr\">INT</code></td><td>أرقام صحيحة</td><td>42</td></tr><tr><td><code dir=\"ltr\">REAL</code> أو <code dir=\"ltr\">DECIMAL</code></td><td>أرقام عشرية</td><td>19.99</td></tr><tr><td><code dir=\"ltr\">TEXT</code> أو <code dir=\"ltr\">VARCHAR(n)</code></td><td>نصوص</td><td>&#x27;أحمد&#x27;</td></tr><tr><td><code dir=\"ltr\">DATE</code> و <code dir=\"ltr\">TIMESTAMP</code></td><td>تواريخ وأوقات</td><td>&#x27;2025-01-05&#x27;</td></tr><tr><td><code dir=\"ltr\">BOOLEAN</code></td><td>صح أو خطأ</td><td>TRUE</td></tr></tbody></table></div>\n<div class=\"callout tip\">💡 في SQL تُكتب النصوص بين علامتي تنصيص <strong>مفردة</strong> <code dir=\"ltr\">&#x27;أحمد&#x27;</code>. العلامة المزدوجة <code dir=\"ltr\">&quot;...&quot;</code> مخصصة لأسماء الأعمدة والجداول في المعيار.</div>\n<h2>المفتاح الأساسي (Primary Key)</h2>\n<p>لاحظ عمود <code dir=\"ltr\">id</code> في كل جدول. هو <strong>المفتاح الأساسي</strong>: رقم فريد لكل صف لا يتكرر أبداً ولا يكون فارغاً. حتى لو وُجد عميلان باسم &quot;أحمد&quot;، فلكل منهما رقم مختلف يميّزه.</p>\n<h2>القيمة الفارغة NULL</h2>\n<p><code dir=\"ltr\">NULL</code> تعني &quot;لا توجد قيمة&quot; أو &quot;غير معروف&quot;. وهي <strong>ليست صفراً ولا نصاً فارغاً</strong>:</p>\n<div class=\"code-block src\"><span class=\"code-label\">SQL</span><pre dir=\"ltr\"><code>SELECT name, email FROM customers WHERE id IN (4, 5);</code></pre></div>\n<div class=\"code-block out sql-out\"><span class=\"code-label\">النتيجة</span><div class=\"table-wrap\"><table class=\"res-table\"><thead><tr><th>name</th><th>email</th></tr></thead><tbody><tr><td class=\"\">نورة</td><td class=\"\">noura@mail.com</td></tr><tr><td class=\"\">فهد</td><td class=\"null\">NULL</td></tr></tbody></table></div></div>\n<p>العميل فهد ليس له بريد مسجّل، فقيمته <code dir=\"ltr\">NULL</code>. سنرى لاحقاً أن التعامل مع NULL يحتاج انتباهاً خاصاً.</p>\n<h2>قاعدة بيانات متجرنا</h2>\n<p>في كل دروس هذه الدورة سنعمل على قاعدة بيانات متجر إلكتروني فيها خمسة جداول:</p>\n<div class=\"table-wrap\"><table><thead><tr><th>الجدول</th><th>يحتوي</th></tr></thead><tbody><tr><td><code dir=\"ltr\">customers</code></td><td>العملاء: الاسم والمدينة والبريد وتاريخ التسجيل</td></tr><tr><td><code dir=\"ltr\">products</code></td><td>المنتجات: الاسم والتصنيف والسعر والكمية في المخزون</td></tr><tr><td><code dir=\"ltr\">orders</code></td><td>الطلبات: رقم العميل والتاريخ والحالة</td></tr><tr><td><code dir=\"ltr\">order_items</code></td><td>تفاصيل كل طلب: أي منتج، وكم قطعة، وبأي سعر</td></tr><tr><td><code dir=\"ltr\">employees</code></td><td>موظفو المتجر: القسم والراتب والمدير المباشر</td></tr></tbody></table></div>\n<p>ستجد في كل تمرين زر <strong>«📋 جداول قاعدة البيانات»</strong> يعرض أعمدة كل جدول.</p>\n<h2>ملخص الدرس</h2>\n<ul><li>الجدول = أعمدة (خصائص لها أنواع) + صفوف (سجلات).</li><li>المفتاح الأساسي يميّز كل صف ولا يتكرر.</li><li>النصوص بين علامتي تنصيص مفردة <code dir=\"ltr\">&#x27;...&#x27;</code>.</li><li><code dir=\"ltr\">NULL</code> تعني غياب القيمة، وليست صفراً.</li></ul>",
   "exercise": {
    "prompt": "<p>اعرض <strong>كل أعمدة</strong> جدول الموظفين <code dir=\"ltr\">employees</code> باستخدام <code dir=\"ltr\">SELECT *</code>، لكن أول <strong>3 صفوف</strong> فقط باستخدام <code dir=\"ltr\">LIMIT 3</code>.</p>",
    "starter": "-- اكتب الاستعلام هنا",
    "expected": "id | name | department | salary | manager_id | hire_date\n1 | منصور | الإدارة | 25000 | NULL | 2019-01-10\n2 | ريم | التقنية | 18000 | 1 | 2020-03-01\n3 | ياسر | التقنية | 14000 | 2 | 2021-06-15",
    "solution": "SELECT * FROM employees LIMIT 3;"
   },
   "quiz": [
    {
     "q": "ما الذي يمثله الصف (Row) في الجدول؟",
     "o": [
      "عنصراً واحداً كاملاً بكل خصائصه، مثل منتج واحد",
      "خاصية واحدة لكل العناصر",
      "نوع البيانات"
     ],
     "a": 0,
     "why": "كل صف سجل كامل، وكل عمود خاصية."
    },
    {
     "q": "ما المفتاح الأساسي (Primary Key)؟",
     "o": [
      "أول عمود في الجدول دائماً",
      "قيمة فريدة تميّز كل صف ولا تتكرر ولا تكون فارغة",
      "كلمة مرور قاعدة البيانات"
     ],
     "a": 1,
     "why": "يضمن المفتاح الأساسي أن لكل صف هوية مستقلة."
    },
    {
     "q": "ماذا تعني القيمة NULL؟",
     "o": [
      "الرقم صفر",
      "نص فارغ",
      "غياب القيمة أو أنها غير معروفة"
     ],
     "a": 2,
     "why": "NULL ليست صفراً ولا نصاً فارغاً، بل &quot;لا شيء&quot;."
    }
   ]
  },
  {
   "body": "<h2>أين ستكتب SQL؟</h2>\n<p><strong>في هذه الدورة:</strong> لا تحتاج تثبيت أي شيء. كل تمرين فيه محرر SQL حقيقي يعمل داخل متصفحك بمحرك <strong>SQLite</strong> كامل، ومعه قاعدة بيانات المتجر جاهزة. وكل مرة تضغط «تشغيل» تبدأ قاعدة البيانات من جديد، فلا تخشَ تجربة أي شيء، حتى الحذف!</p>\n<p>أما في العمل الحقيقي فلديك خيارات:</p>\n<div class=\"table-wrap\"><table><thead><tr><th>الأداة</th><th>مناسبة لـ</th></tr></thead><tbody><tr><td><strong>DB Browser for SQLite</strong></td><td>برنامج مجاني بسيط لملفات SQLite</td></tr><tr><td><strong>pgAdmin</strong></td><td>واجهة رسمية لـ PostgreSQL</td></tr><tr><td><strong>MySQL Workbench</strong></td><td>واجهة رسمية لـ MySQL</td></tr><tr><td><strong>DBeaver</strong></td><td>أداة واحدة تتصل بكل الأنظمة</td></tr><tr><td><strong>سطر الأوامر</strong></td><td><code dir=\"ltr\">psql</code> و <code dir=\"ltr\">mysql</code> و <code dir=\"ltr\">sqlite3</code></td></tr></tbody></table></div>\n<h2>قواعد كتابة SQL</h2>\n<div class=\"code-block src\"><span class=\"code-label\">SQL</span><pre dir=\"ltr\"><code>-- هذا تعليق من سطر واحد\n/* وهذا تعليق\n   من عدة أسطر */\n\nSELECT name, city\nFROM customers\nWHERE city = &#x27;جدة&#x27;;</code></pre></div>\n<div class=\"code-block out sql-out\"><span class=\"code-label\">النتيجة</span><div class=\"table-wrap\"><table class=\"res-table\"><thead><tr><th>name</th><th>city</th></tr></thead><tbody><tr><td class=\"\">سارة</td><td class=\"\">جدة</td></tr><tr><td class=\"\">فهد</td><td class=\"\">جدة</td></tr></tbody></table></div></div>\n<ol><li>**الفاصلة المنقوطة <code dir=\"ltr\">;</code>** تنهي العبارة. ضرورية عند كتابة أكثر من عبارة.</li><li><strong>الكلمات المحجوزة</strong> مثل <code dir=\"ltr\">SELECT</code> و <code dir=\"ltr\">FROM</code> لا تتأثر بحالة الأحرف، فـ <code dir=\"ltr\">select</code> تعمل أيضاً. لكن العرف كتابتها بأحرف كبيرة لتمييزها.</li><li><strong>المسافات والأسطر الجديدة</strong> لا تهم، فاكتب كل جزء في سطر لتسهيل القراءة.</li><li><strong>التعليقات</strong> تبدأ بـ <code dir=\"ltr\">--</code> لسطر واحد، أو بين <code dir=\"ltr\">/* */</code>.</li></ol>\n<h2>أكثر من استعلام في مرة واحدة</h2>\n<p>يمكنك كتابة عدة عبارات، وكل <code dir=\"ltr\">SELECT</code> تظهر نتيجته كجدول مستقل:</p>\n<div class=\"code-block src\"><span class=\"code-label\">SQL</span><pre dir=\"ltr\"><code>SELECT COUNT(*) AS customers_count FROM customers;\nSELECT COUNT(*) AS products_count FROM products;</code></pre></div>\n<div class=\"code-block out sql-out\"><span class=\"code-label\">النتيجة</span><div class=\"table-wrap\"><table class=\"res-table\"><thead><tr><th>customers_count</th></tr></thead><tbody><tr><td class=\"\">8</td></tr></tbody></table><table class=\"res-table\"><thead><tr><th>products_count</th></tr></thead><tbody><tr><td class=\"\">10</td></tr></tbody></table></div></div>\n<h2>أنواع عبارات SQL</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>المجموعة</th><th>العبارات</th><th>الوظيفة</th><th>الوحدة</th></tr></thead><tbody><tr><td>الاستعلام (DQL)</td><td><code dir=\"ltr\">SELECT</code></td><td>قراءة البيانات</td><td>2 إلى 5</td></tr><tr><td>التعديل (DML)</td><td><code dir=\"ltr\">INSERT</code> و <code dir=\"ltr\">UPDATE</code> و <code dir=\"ltr\">DELETE</code></td><td>إضافة وتعديل وحذف الصفوف</td><td>6</td></tr><tr><td>التعريف (DDL)</td><td><code dir=\"ltr\">CREATE</code> و <code dir=\"ltr\">ALTER</code> و <code dir=\"ltr\">DROP</code></td><td>إنشاء الجداول وتعديل بنيتها</td><td>7</td></tr><tr><td>التحكم (TCL)</td><td><code dir=\"ltr\">BEGIN</code> و <code dir=\"ltr\">COMMIT</code> و <code dir=\"ltr\">ROLLBACK</code></td><td>المعاملات</td><td>8</td></tr></tbody></table></div>\n<div class=\"callout tip\">💡 معظم عمل محللي البيانات هو <code dir=\"ltr\">SELECT</code>، أما المطورون فيستخدمون كل الأنواع.</div>\n<h2>قراءة رسائل الخطأ</h2>\n<p>عندما تخطئ، يخبرك المحرك بالسبب. جرّب في التمرين كتابة اسم جدول خاطئ، وستظهر رسالة مثل <code dir=\"ltr\">no such table: product</code>. اقرأ الرسالة دائماً، فهي تدلك على المشكلة بالضبط.</p>\n<h2>ملخص الدرس</h2>\n<ul><li>محرر CodeWay فيه SQLite حقيقي، وقاعدة البيانات تبدأ من جديد في كل تشغيل.</li><li>الكلمات المحجوزة بأحرف كبيرة عرفاً، والفاصلة المنقوطة تفصل العبارات.</li><li>التعليقات <code dir=\"ltr\">--</code> و <code dir=\"ltr\">/* */</code>.</li><li>عبارات SQL أربع مجموعات: استعلام وتعديل وتعريف وتحكم.</li></ul>",
   "exercise": {
    "prompt": "<p>اكتب <strong>استعلامين</strong> في نفس المحرر، كل منهما ينتهي بفاصلة منقوطة:</p>\n<ol><li>عدد الطلبات في جدول <code dir=\"ltr\">orders</code>، وسمِّ العمود <code dir=\"ltr\">total_orders</code> باستخدام <code dir=\"ltr\">AS</code>.</li><li>عدد الموظفين في جدول <code dir=\"ltr\">employees</code>، وسمِّ العمود <code dir=\"ltr\">total_employees</code>.</li></ol>",
    "starter": "-- الاستعلام الأول\n\n-- الاستعلام الثاني",
    "expected": "total_orders\n10\n\ntotal_employees\n8",
    "solution": "SELECT COUNT(*) AS total_orders FROM orders;\nSELECT COUNT(*) AS total_employees FROM employees;"
   },
   "quiz": [
    {
     "q": "هل <code dir=\"ltr\">select * from products</code> صحيحة رغم أنها بأحرف صغيرة؟",
     "o": [
      "نعم، الكلمات المحجوزة لا تتأثر بحالة الأحرف",
      "لا، يجب أن تكون بأحرف كبيرة",
      "تعمل في SQLite فقط"
     ],
     "a": 0,
     "why": "الأحرف الكبيرة عرف لتسهيل القراءة، وليست شرطاً."
    },
    {
     "q": "كيف تكتب تعليقاً من سطر واحد في SQL؟",
     "o": [
      "<code dir=\"ltr\">// تعليق</code>",
      "<code dir=\"ltr\">-- تعليق</code>",
      "<code dir=\"ltr\"># تعليق</code>"
     ],
     "a": 1,
     "why": "في SQL يبدأ التعليق بشرطتين."
    },
    {
     "q": "إلى أي مجموعة تنتمي العبارة <code dir=\"ltr\">UPDATE</code>؟",
     "o": [
      "الاستعلام (DQL)",
      "التعديل (DML)",
      "التعريف (DDL)"
     ],
     "a": 1,
     "why": "INSERT و UPDATE و DELETE تعدّل الصفوف."
    }
   ]
  }
 ],
 [
  {
   "body": "<h2>SELECT: اختر ما تريد رؤيته</h2>\n<p><code dir=\"ltr\">SELECT</code> هي أهم عبارة في SQL، وأكثرها استخداماً. صيغتها الأساسية:</p>\n<div class=\"code-block src\"><span class=\"code-label\">SQL</span><pre dir=\"ltr\"><code>SELECT الأعمدة\nFROM الجدول;</code></pre></div>\n<h2>كل الأعمدة بـ *</h2>\n<div class=\"code-block src\"><span class=\"code-label\">SQL</span><pre dir=\"ltr\"><code>SELECT * FROM customers;</code></pre></div>\n<div class=\"code-block out sql-out\"><span class=\"code-label\">النتيجة</span><div class=\"table-wrap\"><table class=\"res-table\"><thead><tr><th>id</th><th>name</th><th>city</th><th>email</th><th>joined</th></tr></thead><tbody><tr><td class=\"\">1</td><td class=\"\">أحمد</td><td class=\"\">الرياض</td><td class=\"\">ahmed@mail.com</td><td class=\"\">2024-01-15</td></tr><tr><td class=\"\">2</td><td class=\"\">سارة</td><td class=\"\">جدة</td><td class=\"\">sara@mail.com</td><td class=\"\">2024-02-20</td></tr><tr><td class=\"\">3</td><td class=\"\">خالد</td><td class=\"\">الرياض</td><td class=\"\">khaled@mail.com</td><td class=\"\">2024-03-05</td></tr><tr><td class=\"\">4</td><td class=\"\">نورة</td><td class=\"\">الدمام</td><td class=\"\">noura@mail.com</td><td class=\"\">2024-03-18</td></tr><tr><td class=\"\">5</td><td class=\"\">فهد</td><td class=\"\">جدة</td><td class=\"null\">NULL</td><td class=\"\">2024-05-01</td></tr><tr><td class=\"\">6</td><td class=\"\">ليلى</td><td class=\"\">مكة</td><td class=\"\">layla@mail.com</td><td class=\"\">2024-06-12</td></tr><tr><td class=\"\">7</td><td class=\"\">عمر</td><td class=\"\">الرياض</td><td class=\"\">omar@mail.com</td><td class=\"\">2024-07-30</td></tr><tr><td class=\"\">8</td><td class=\"\">هند</td><td class=\"null\">NULL</td><td class=\"\">hind@mail.com</td><td class=\"\">2024-09-09</td></tr></tbody></table></div></div>\n<p>النجمة <code dir=\"ltr\">*</code> تعني &quot;كل الأعمدة&quot;. مفيدة للاستكشاف السريع، لكن في الكود الحقيقي <strong>حدد الأعمدة التي تحتاجها فقط</strong>، فهذا أسرع وأوضح.</p>\n<h2>أعمدة محددة</h2>\n<div class=\"code-block src\"><span class=\"code-label\">SQL</span><pre dir=\"ltr\"><code>SELECT name, city FROM customers;</code></pre></div>\n<div class=\"code-block out sql-out\"><span class=\"code-label\">النتيجة</span><div class=\"table-wrap\"><table class=\"res-table\"><thead><tr><th>name</th><th>city</th></tr></thead><tbody><tr><td class=\"\">أحمد</td><td class=\"\">الرياض</td></tr><tr><td class=\"\">سارة</td><td class=\"\">جدة</td></tr><tr><td class=\"\">خالد</td><td class=\"\">الرياض</td></tr><tr><td class=\"\">نورة</td><td class=\"\">الدمام</td></tr><tr><td class=\"\">فهد</td><td class=\"\">جدة</td></tr><tr><td class=\"\">ليلى</td><td class=\"\">مكة</td></tr><tr><td class=\"\">عمر</td><td class=\"\">الرياض</td></tr><tr><td class=\"\">هند</td><td class=\"null\">NULL</td></tr></tbody></table></div></div>\n<p>ترتيب الأعمدة في النتيجة هو ترتيبك في الاستعلام، وليس ترتيبها في الجدول.</p>\n<h2>تسمية الأعمدة بـ AS</h2>\n<p><code dir=\"ltr\">AS</code> تعطي العمود اسماً مستعاراً (Alias) في النتيجة:</p>\n<div class=\"code-block src\"><span class=\"code-label\">SQL</span><pre dir=\"ltr\"><code>SELECT name AS product, price AS price_sar\nFROM products\nLIMIT 3;</code></pre></div>\n<div class=\"code-block out sql-out\"><span class=\"code-label\">النتيجة</span><div class=\"table-wrap\"><table class=\"res-table\"><thead><tr><th>product</th><th>price_sar</th></tr></thead><tbody><tr><td class=\"\">لابتوب</td><td class=\"\">3500</td></tr><tr><td class=\"\">سماعة</td><td class=\"\">250</td></tr><tr><td class=\"\">شاحن</td><td class=\"\">80</td></tr></tbody></table></div></div>\n<h2>الحسابات داخل SELECT</h2>\n<p>يمكنك إجراء عمليات حسابية على الأعمدة، وإنشاء أعمدة جديدة في النتيجة دون تغيير الجدول:</p>\n<div class=\"code-block src\"><span class=\"code-label\">SQL</span><pre dir=\"ltr\"><code>SELECT name,\n       price,\n       ROUND(price * 1.15, 2) AS price_with_tax,\n       stock * price AS stock_value\nFROM products\nLIMIT 3;</code></pre></div>\n<div class=\"code-block out sql-out\"><span class=\"code-label\">النتيجة</span><div class=\"table-wrap\"><table class=\"res-table\"><thead><tr><th>name</th><th>price</th><th>price_with_tax</th><th>stock_value</th></tr></thead><tbody><tr><td class=\"\">لابتوب</td><td class=\"\">3500</td><td class=\"\">4025</td><td class=\"\">42000</td></tr><tr><td class=\"\">سماعة</td><td class=\"\">250</td><td class=\"\">287.5</td><td class=\"\">10000</td></tr><tr><td class=\"\">شاحن</td><td class=\"\">80</td><td class=\"\">92</td><td class=\"\">0</td></tr></tbody></table></div></div>\n<p>العمليات المتاحة: <code dir=\"ltr\">+</code> و <code dir=\"ltr\">-</code> و <code dir=\"ltr\">*</code> و <code dir=\"ltr\">/</code> و <code dir=\"ltr\">%</code>.</p>\n<h2>دمج النصوص</h2>\n<p>في SQLite و PostgreSQL ندمج النصوص بـ <code dir=\"ltr\">||</code>:</p>\n<div class=\"code-block src\"><span class=\"code-label\">SQL</span><pre dir=\"ltr\"><code>SELECT name || &#x27; من &#x27; || city AS info\nFROM customers\nLIMIT 3;</code></pre></div>\n<div class=\"code-block out sql-out\"><span class=\"code-label\">النتيجة</span><div class=\"table-wrap\"><table class=\"res-table\"><thead><tr><th>info</th></tr></thead><tbody><tr><td class=\"\">أحمد من الرياض</td></tr><tr><td class=\"\">سارة من جدة</td></tr><tr><td class=\"\">خالد من الرياض</td></tr></tbody></table></div></div>\n<div class=\"callout tip\">💡 في MySQL تستخدم الدالة <code dir=\"ltr\">CONCAT(name, &#x27; من &#x27;, city)</code> بدلاً من <code dir=\"ltr\">||</code>. هذا من الفروق القليلة بين الأنظمة.</div>\n<h2>دوال مفيدة</h2>\n<div class=\"code-block src\"><span class=\"code-label\">SQL</span><pre dir=\"ltr\"><code>SELECT UPPER(&#x27;sql&#x27;) AS upper_text,\n       LENGTH(&#x27;مرحبا&#x27;) AS len,\n       ROUND(19.567, 1) AS rounded,\n       ABS(-7) AS absolute;</code></pre></div>\n<div class=\"code-block out sql-out\"><span class=\"code-label\">النتيجة</span><div class=\"table-wrap\"><table class=\"res-table\"><thead><tr><th>upper_text</th><th>len</th><th>rounded</th><th>absolute</th></tr></thead><tbody><tr><td class=\"\">SQL</td><td class=\"\">5</td><td class=\"\">19.6</td><td class=\"\">7</td></tr></tbody></table></div></div>\n<p>لاحظ أن <code dir=\"ltr\">SELECT</code> يمكن استخدامها دون جدول أصلاً، كآلة حاسبة.</p>\n<h2>ملخص الدرس</h2>\n<ul><li><code dir=\"ltr\">SELECT أعمدة FROM جدول</code> الصيغة الأساسية.</li><li><code dir=\"ltr\">*</code> لكل الأعمدة، والأفضل تحديد الأعمدة المطلوبة.</li><li><code dir=\"ltr\">AS</code> لتسمية الأعمدة في النتيجة.</li><li>يمكن الحساب والدمج <code dir=\"ltr\">||</code> واستخدام الدوال داخل SELECT.</li></ul>",
   "exercise": {
    "prompt": "<p>اعرض من جدول <code dir=\"ltr\">products</code> ثلاثة أعمدة:</p>\n<ol><li><code dir=\"ltr\">name</code> باسم <code dir=\"ltr\">product</code></li><li><code dir=\"ltr\">price</code></li><li>السعر بعد خصم 10% (أي <code dir=\"ltr\">price * 0.9</code>) باسم <code dir=\"ltr\">sale_price</code></li></ol>",
    "starter": "SELECT\nFROM products;",
    "expected": "product | price | sale_price\nلابتوب | 3500 | 3150\nسماعة | 250 | 225\nشاحن | 80 | 72\nقميص | 120 | 108\nحذاء رياضي | 300 | 270\nرواية | 45 | 40.5\nكتاب طبخ | 70 | 63\nساعة ذكية | 900 | 810\nحقيبة | 180 | 162\nنظارة | 350 | 315",
    "solution": "SELECT name AS product,\n       price,\n       price * 0.9 AS sale_price\nFROM products;"
   },
   "quiz": [
    {
     "q": "ماذا تعني <code dir=\"ltr\">*</code> في <code dir=\"ltr\">SELECT * FROM users</code>؟",
     "o": [
      "أول عمود فقط",
      "كل الأعمدة",
      "كل الجداول"
     ],
     "a": 1,
     "why": "النجمة تختصر كتابة كل أسماء الأعمدة."
    },
    {
     "q": "هل تغيّر <code dir=\"ltr\">SELECT price * 2 FROM products</code> الأسعار في الجدول؟",
     "o": [
      "نعم، تضاعفها",
      "لا، تعرض النتيجة المحسوبة فقط دون تعديل الجدول",
      "تعطي خطأ"
     ],
     "a": 1,
     "why": "SELECT للقراءة فقط، والتعديل يكون بـ UPDATE."
    },
    {
     "q": "ما وظيفة <code dir=\"ltr\">AS</code>؟",
     "o": [
      "إعطاء اسم مستعار للعمود في النتيجة",
      "إنشاء عمود جديد في الجدول",
      "ترتيب النتائج"
     ],
     "a": 0,
     "why": "الاسم المستعار يظهر في النتيجة فقط."
    }
   ]
  },
  {
   "body": "<h2>تصفية الصفوف</h2>\n<p><code dir=\"ltr\">SELECT</code> تحدد <strong>الأعمدة</strong>، و <code dir=\"ltr\">WHERE</code> تحدد <strong>الصفوف</strong>: تعرض فقط الصفوف التي تحقق شرطاً.</p>\n<div class=\"code-block src\"><span class=\"code-label\">SQL</span><pre dir=\"ltr\"><code>SELECT name, price\nFROM products\nWHERE category = &#x27;كتب&#x27;;</code></pre></div>\n<div class=\"code-block out sql-out\"><span class=\"code-label\">النتيجة</span><div class=\"table-wrap\"><table class=\"res-table\"><thead><tr><th>name</th><th>price</th></tr></thead><tbody><tr><td class=\"\">رواية</td><td class=\"\">45</td></tr><tr><td class=\"\">كتاب طبخ</td><td class=\"\">70</td></tr></tbody></table></div></div>\n<h2>عوامل المقارنة</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>العامل</th><th>المعنى</th></tr></thead><tbody><tr><td><code dir=\"ltr\">=</code></td><td>يساوي (علامة واحدة، وليس <code dir=\"ltr\">==</code>)</td></tr><tr><td><code dir=\"ltr\">&lt;&gt;</code> أو <code dir=\"ltr\">!=</code></td><td>لا يساوي</td></tr><tr><td><code dir=\"ltr\">&gt;</code> و <code dir=\"ltr\">&lt;</code> و <code dir=\"ltr\">&gt;=</code> و <code dir=\"ltr\">&lt;=</code></td><td>أكبر وأصغر</td></tr></tbody></table></div>\n<div class=\"code-block src\"><span class=\"code-label\">SQL</span><pre dir=\"ltr\"><code>SELECT name, stock\nFROM products\nWHERE stock = 0;</code></pre></div>\n<div class=\"code-block out sql-out\"><span class=\"code-label\">النتيجة</span><div class=\"table-wrap\"><table class=\"res-table\"><thead><tr><th>name</th><th>stock</th></tr></thead><tbody><tr><td class=\"\">شاحن</td><td class=\"\">0</td></tr><tr><td class=\"\">حقيبة</td><td class=\"\">0</td></tr></tbody></table></div></div>\n<h2>دمج الشروط: AND و OR و NOT</h2>\n<div class=\"code-block src\"><span class=\"code-label\">SQL</span><pre dir=\"ltr\"><code>SELECT name, category, price\nFROM products\nWHERE category = &#x27;إلكترونيات&#x27; AND price &lt; 1000;</code></pre></div>\n<div class=\"code-block out sql-out\"><span class=\"code-label\">النتيجة</span><div class=\"table-wrap\"><table class=\"res-table\"><thead><tr><th>name</th><th>category</th><th>price</th></tr></thead><tbody><tr><td class=\"\">سماعة</td><td class=\"\">إلكترونيات</td><td class=\"\">250</td></tr><tr><td class=\"\">شاحن</td><td class=\"\">إلكترونيات</td><td class=\"\">80</td></tr><tr><td class=\"\">ساعة ذكية</td><td class=\"\">إلكترونيات</td><td class=\"\">900</td></tr></tbody></table></div></div>\n<div class=\"code-block src\"><span class=\"code-label\">SQL</span><pre dir=\"ltr\"><code>SELECT name, city\nFROM customers\nWHERE city = &#x27;جدة&#x27; OR city = &#x27;الدمام&#x27;;</code></pre></div>\n<div class=\"code-block out sql-out\"><span class=\"code-label\">النتيجة</span><div class=\"table-wrap\"><table class=\"res-table\"><thead><tr><th>name</th><th>city</th></tr></thead><tbody><tr><td class=\"\">سارة</td><td class=\"\">جدة</td></tr><tr><td class=\"\">نورة</td><td class=\"\">الدمام</td></tr><tr><td class=\"\">فهد</td><td class=\"\">جدة</td></tr></tbody></table></div></div>\n<div class=\"callout warn\">⚠️ <code dir=\"ltr\">AND</code> تُنفَّذ قبل <code dir=\"ltr\">OR</code>. عند الدمج بينهما استخدم الأقواس دائماً: <code dir=\"ltr\">WHERE (a OR b) AND c</code>.</div>\n<h2>BETWEEN: نطاق من القيم</h2>\n<div class=\"code-block src\"><span class=\"code-label\">SQL</span><pre dir=\"ltr\"><code>SELECT name, price\nFROM products\nWHERE price BETWEEN 100 AND 300;</code></pre></div>\n<div class=\"code-block out sql-out\"><span class=\"code-label\">النتيجة</span><div class=\"table-wrap\"><table class=\"res-table\"><thead><tr><th>name</th><th>price</th></tr></thead><tbody><tr><td class=\"\">سماعة</td><td class=\"\">250</td></tr><tr><td class=\"\">قميص</td><td class=\"\">120</td></tr><tr><td class=\"\">حذاء رياضي</td><td class=\"\">300</td></tr><tr><td class=\"\">حقيبة</td><td class=\"\">180</td></tr></tbody></table></div></div>\n<p><code dir=\"ltr\">BETWEEN</code> تشمل الحدين، فهي تعادل <code dir=\"ltr\">price &gt;= 100 AND price &lt;= 300</code>.</p>\n<h2>IN: قائمة من القيم</h2>\n<div class=\"code-block src\"><span class=\"code-label\">SQL</span><pre dir=\"ltr\"><code>SELECT id, status\nFROM orders\nWHERE id IN (101, 104, 108);</code></pre></div>\n<div class=\"code-block out sql-out\"><span class=\"code-label\">النتيجة</span><div class=\"table-wrap\"><table class=\"res-table\"><thead><tr><th>id</th><th>status</th></tr></thead><tbody><tr><td class=\"\">101</td><td class=\"\">مكتمل</td></tr><tr><td class=\"\">104</td><td class=\"\">ملغي</td></tr><tr><td class=\"\">108</td><td class=\"\">قيد التنفيذ</td></tr></tbody></table></div></div>\n<p>أوضح بكثير من كتابة <code dir=\"ltr\">id = 101 OR id = 104 OR id = 108</code>. ونقيضها <code dir=\"ltr\">NOT IN</code>.</p>\n<h2>LIKE: البحث بنمط</h2>\n<p>للبحث في النصوص بنمط جزئي:</p>\n<ul><li><code dir=\"ltr\">%</code> تعني &quot;أي عدد من الأحرف&quot; (حتى صفر).</li><li><code dir=\"ltr\">_</code> تعني &quot;حرفاً واحداً بالضبط&quot;.</li></ul>\n<div class=\"code-block src\"><span class=\"code-label\">SQL</span><pre dir=\"ltr\"><code>SELECT name, email\nFROM customers\nWHERE email LIKE &#x27;s%&#x27;;</code></pre></div>\n<div class=\"code-block out sql-out\"><span class=\"code-label\">النتيجة</span><div class=\"table-wrap\"><table class=\"res-table\"><thead><tr><th>name</th><th>email</th></tr></thead><tbody><tr><td class=\"\">سارة</td><td class=\"\">sara@mail.com</td></tr></tbody></table></div></div>\n<div class=\"code-block src\"><span class=\"code-label\">SQL</span><pre dir=\"ltr\"><code>SELECT name FROM products WHERE name LIKE &#x27;%ة%&#x27;;</code></pre></div>\n<div class=\"code-block out sql-out\"><span class=\"code-label\">النتيجة</span><div class=\"table-wrap\"><table class=\"res-table\"><thead><tr><th>name</th></tr></thead><tbody><tr><td class=\"\">سماعة</td></tr><tr><td class=\"\">رواية</td></tr><tr><td class=\"\">ساعة ذكية</td></tr><tr><td class=\"\">حقيبة</td></tr><tr><td class=\"\">نظارة</td></tr></tbody></table></div></div>\n<h2>التعامل مع NULL</h2>\n<p>لا يمكن مقارنة NULL بـ <code dir=\"ltr\">=</code>، لأن NULL &quot;غير معروف&quot;، وأي مقارنة معه نتيجتها غير معروفة أيضاً. نستخدم <code dir=\"ltr\">IS NULL</code> و <code dir=\"ltr\">IS NOT NULL</code>:</p>\n<div class=\"code-block src\"><span class=\"code-label\">SQL</span><pre dir=\"ltr\"><code>SELECT name FROM customers WHERE email IS NULL;\nSELECT name FROM customers WHERE email = NULL;</code></pre></div>\n<div class=\"code-block out sql-out\"><span class=\"code-label\">النتيجة</span><div class=\"table-wrap\"><table class=\"res-table\"><thead><tr><th>name</th></tr></thead><tbody><tr><td class=\"\">فهد</td></tr></tbody></table><table class=\"res-table\"><thead><tr><th>name</th></tr></thead><tbody><tr><td colspan=\"1\" class=\"null\">(لا توجد صفوف)</td></tr></tbody></table></div></div>\n<p>الاستعلام الثاني لم يُرجع أي صف، رغم وجود عميل بلا بريد! هذا خطأ شائع جداً.</p>\n<h2>ملخص الدرس</h2>\n<ul><li><code dir=\"ltr\">WHERE</code> تصفّي الصفوف حسب شرط.</li><li><code dir=\"ltr\">=</code> للمساواة، و <code dir=\"ltr\">&lt;&gt;</code> لعدم المساواة.</li><li><code dir=\"ltr\">AND</code> و <code dir=\"ltr\">OR</code> و <code dir=\"ltr\">NOT</code> لدمج الشروط، والأقواس لتوضيح الأولوية.</li><li><code dir=\"ltr\">BETWEEN</code> للنطاقات، و <code dir=\"ltr\">IN</code> للقوائم، و <code dir=\"ltr\">LIKE</code> مع <code dir=\"ltr\">%</code> و <code dir=\"ltr\">_</code> للأنماط.</li><li><code dir=\"ltr\">IS NULL</code> وليس <code dir=\"ltr\">= NULL</code>.</li></ul>",
   "exercise": {
    "prompt": "<p>اعرض <code dir=\"ltr\">name</code> و <code dir=\"ltr\">category</code> و <code dir=\"ltr\">price</code> للمنتجات التي تحقق <strong>كل</strong> هذه الشروط:</p>\n<ul><li>التصنيف <code dir=\"ltr\">إلكترونيات</code> <strong>أو</strong> <code dir=\"ltr\">إكسسوارات</code> (استخدم <code dir=\"ltr\">IN</code>)</li><li>السعر <strong>بين</strong> 200 و 1000</li><li>الكمية في المخزون <code dir=\"ltr\">stock</code> <strong>أكبر من</strong> 0</li></ul>",
    "starter": "SELECT name, category, price\nFROM products\nWHERE",
    "expected": "name | category | price\nسماعة | إلكترونيات | 250\nساعة ذكية | إلكترونيات | 900\nنظارة | إكسسوارات | 350",
    "solution": "SELECT name, category, price\nFROM products\nWHERE category IN ('إلكترونيات', 'إكسسوارات')\n  AND price BETWEEN 200 AND 1000\n  AND stock > 0;"
   },
   "quiz": [
    {
     "q": "كيف تجد العملاء الذين ليس لهم بريد إلكتروني؟",
     "o": [
      "<code dir=\"ltr\">WHERE email = NULL</code>",
      "<code dir=\"ltr\">WHERE email IS NULL</code>",
      "<code dir=\"ltr\">WHERE email = &#x27;&#x27;</code>"
     ],
     "a": 1,
     "why": "المقارنة بـ = مع NULL لا تُرجع أي صف."
    },
    {
     "q": "ماذا يطابق النمط <code dir=\"ltr\">LIKE &#x27;a%&#x27;</code>؟",
     "o": [
      "كل نص يبدأ بالحرف a",
      "كل نص ينتهي بالحرف a",
      "النص &#x27;a%&#x27; حرفياً"
     ],
     "a": 0,
     "why": "% تعني أي عدد من الأحرف بعد a."
    },
    {
     "q": "هل <code dir=\"ltr\">BETWEEN 10 AND 20</code> تشمل القيمتين 10 و 20؟",
     "o": [
      "نعم، تشمل الحدين",
      "لا، تستثنيهما",
      "تشمل 10 فقط"
     ],
     "a": 0,
     "why": "BETWEEN تعادل &gt;= و &lt;=."
    }
   ]
  },
  {
   "body": "<h2>ترتيب النتائج</h2>\n<p>بدون ترتيب صريح، <strong>لا تضمن</strong> قاعدة البيانات أي ترتيب للصفوف. إذا كان الترتيب مهماً، استخدم <code dir=\"ltr\">ORDER BY</code>:</p>\n<div class=\"code-block src\"><span class=\"code-label\">SQL</span><pre dir=\"ltr\"><code>SELECT name, price\nFROM products\nORDER BY price;</code></pre></div>\n<div class=\"code-block out sql-out\"><span class=\"code-label\">النتيجة</span><div class=\"table-wrap\"><table class=\"res-table\"><thead><tr><th>name</th><th>price</th></tr></thead><tbody><tr><td class=\"\">رواية</td><td class=\"\">45</td></tr><tr><td class=\"\">كتاب طبخ</td><td class=\"\">70</td></tr><tr><td class=\"\">شاحن</td><td class=\"\">80</td></tr><tr><td class=\"\">قميص</td><td class=\"\">120</td></tr><tr><td class=\"\">حقيبة</td><td class=\"\">180</td></tr><tr><td class=\"\">سماعة</td><td class=\"\">250</td></tr><tr><td class=\"\">حذاء رياضي</td><td class=\"\">300</td></tr><tr><td class=\"\">نظارة</td><td class=\"\">350</td></tr><tr><td class=\"\">ساعة ذكية</td><td class=\"\">900</td></tr><tr><td class=\"\">لابتوب</td><td class=\"\">3500</td></tr></tbody></table></div></div>\n<h2>تصاعدي وتنازلي</h2>\n<ul><li><code dir=\"ltr\">ASC</code> تصاعدي (الافتراضي): من الأصغر للأكبر، ومن أ إلى ي.</li><li><code dir=\"ltr\">DESC</code> تنازلي: من الأكبر للأصغر.</li></ul>\n<div class=\"code-block src\"><span class=\"code-label\">SQL</span><pre dir=\"ltr\"><code>SELECT name, salary\nFROM employees\nORDER BY salary DESC;</code></pre></div>\n<div class=\"code-block out sql-out\"><span class=\"code-label\">النتيجة</span><div class=\"table-wrap\"><table class=\"res-table\"><thead><tr><th>name</th><th>salary</th></tr></thead><tbody><tr><td class=\"\">منصور</td><td class=\"\">25000</td></tr><tr><td class=\"\">ريم</td><td class=\"\">18000</td></tr><tr><td class=\"\">دانة</td><td class=\"\">15500</td></tr><tr><td class=\"\">ياسر</td><td class=\"\">14000</td></tr><tr><td class=\"\">سلطان</td><td class=\"\">12000</td></tr><tr><td class=\"\">لمى</td><td class=\"\">9500</td></tr><tr><td class=\"\">بدر</td><td class=\"\">9500</td></tr><tr><td class=\"\">جود</td><td class=\"\">8000</td></tr></tbody></table></div></div>\n<h2>الترتيب بأكثر من عمود</h2>\n<p>عندما تتساوى القيم في العمود الأول، يُستخدم الثاني للحسم:</p>\n<div class=\"code-block src\"><span class=\"code-label\">SQL</span><pre dir=\"ltr\"><code>SELECT name, category, price\nFROM products\nORDER BY category, price DESC;</code></pre></div>\n<div class=\"code-block out sql-out\"><span class=\"code-label\">النتيجة</span><div class=\"table-wrap\"><table class=\"res-table\"><thead><tr><th>name</th><th>category</th><th>price</th></tr></thead><tbody><tr><td class=\"\">نظارة</td><td class=\"\">إكسسوارات</td><td class=\"\">350</td></tr><tr><td class=\"\">حقيبة</td><td class=\"\">إكسسوارات</td><td class=\"\">180</td></tr><tr><td class=\"\">لابتوب</td><td class=\"\">إلكترونيات</td><td class=\"\">3500</td></tr><tr><td class=\"\">ساعة ذكية</td><td class=\"\">إلكترونيات</td><td class=\"\">900</td></tr><tr><td class=\"\">سماعة</td><td class=\"\">إلكترونيات</td><td class=\"\">250</td></tr><tr><td class=\"\">شاحن</td><td class=\"\">إلكترونيات</td><td class=\"\">80</td></tr><tr><td class=\"\">كتاب طبخ</td><td class=\"\">كتب</td><td class=\"\">70</td></tr><tr><td class=\"\">رواية</td><td class=\"\">كتب</td><td class=\"\">45</td></tr><tr><td class=\"\">حذاء رياضي</td><td class=\"\">ملابس</td><td class=\"\">300</td></tr><tr><td class=\"\">قميص</td><td class=\"\">ملابس</td><td class=\"\">120</td></tr></tbody></table></div></div>\n<p>رُتبت التصنيفات أبجدياً، وداخل كل تصنيف رُتبت الأسعار تنازلياً.</p>\n<h2>الترتيب بعمود محسوب</h2>\n<p>يمكن الترتيب بالاسم المستعار أو بأي تعبير:</p>\n<div class=\"code-block src\"><span class=\"code-label\">SQL</span><pre dir=\"ltr\"><code>SELECT name, price * stock AS stock_value\nFROM products\nORDER BY stock_value DESC;</code></pre></div>\n<div class=\"code-block out sql-out\"><span class=\"code-label\">النتيجة</span><div class=\"table-wrap\"><table class=\"res-table\"><thead><tr><th>name</th><th>stock_value</th></tr></thead><tbody><tr><td class=\"\">لابتوب</td><td class=\"\">42000</td></tr><tr><td class=\"\">سماعة</td><td class=\"\">10000</td></tr><tr><td class=\"\">ساعة ذكية</td><td class=\"\">4500</td></tr><tr><td class=\"\">نظارة</td><td class=\"\">3500</td></tr><tr><td class=\"\">قميص</td><td class=\"\">3000</td></tr><tr><td class=\"\">رواية</td><td class=\"\">2700</td></tr><tr><td class=\"\">حذاء رياضي</td><td class=\"\">2400</td></tr><tr><td class=\"\">كتاب طبخ</td><td class=\"\">1050</td></tr><tr><td class=\"\">شاحن</td><td class=\"\">0</td></tr><tr><td class=\"\">حقيبة</td><td class=\"\">0</td></tr></tbody></table></div></div>\n<h2>LIMIT: عدد محدود من الصفوف</h2>\n<div class=\"code-block src\"><span class=\"code-label\">SQL</span><pre dir=\"ltr\"><code>SELECT name, price\nFROM products\nORDER BY price DESC\nLIMIT 3;</code></pre></div>\n<div class=\"code-block out sql-out\"><span class=\"code-label\">النتيجة</span><div class=\"table-wrap\"><table class=\"res-table\"><thead><tr><th>name</th><th>price</th></tr></thead><tbody><tr><td class=\"\">لابتوب</td><td class=\"\">3500</td></tr><tr><td class=\"\">ساعة ذكية</td><td class=\"\">900</td></tr><tr><td class=\"\">نظارة</td><td class=\"\">350</td></tr></tbody></table></div></div>\n<p><code dir=\"ltr\">ORDER BY</code> مع <code dir=\"ltr\">LIMIT</code> هما معاً طريقة الإجابة عن أسئلة مثل &quot;أغلى 3 منتجات&quot; أو &quot;أحدث 10 طلبات&quot;.</p>\n<h2>OFFSET: تخطي صفوف (الصفحات)</h2>\n<div class=\"code-block src\"><span class=\"code-label\">SQL</span><pre dir=\"ltr\"><code>SELECT id, order_date\nFROM orders\nORDER BY order_date\nLIMIT 3 OFFSET 3;</code></pre></div>\n<div class=\"code-block out sql-out\"><span class=\"code-label\">النتيجة</span><div class=\"table-wrap\"><table class=\"res-table\"><thead><tr><th>id</th><th>order_date</th></tr></thead><tbody><tr><td class=\"\">104</td><td class=\"\">2025-02-20</td></tr><tr><td class=\"\">105</td><td class=\"\">2025-03-02</td></tr><tr><td class=\"\">106</td><td class=\"\">2025-03-15</td></tr></tbody></table></div></div>\n<p>تخطينا أول 3 طلبات وأخذنا الثلاثة التالية. هكذا تُبنى <strong>الصفحات (Pagination)</strong> في المواقع: الصفحة رقم n تعني <code dir=\"ltr\">LIMIT size OFFSET (n - 1) * size</code>.</p>\n<div class=\"callout tip\">💡 في SQL Server تُكتب <code dir=\"ltr\">SELECT TOP 3 ...</code> بدلاً من <code dir=\"ltr\">LIMIT</code>، وفي المعيار الحديث <code dir=\"ltr\">FETCH FIRST 3 ROWS ONLY</code>. لكن <code dir=\"ltr\">LIMIT</code> تعمل في PostgreSQL و MySQL و SQLite.</div>\n<h2>ترتيب تنفيذ الاستعلام</h2>\n<p>نكتب الاستعلام بترتيب، لكن قاعدة البيانات تنفّذه بترتيب آخر:</p>\n<ol><li><code dir=\"ltr\">FROM</code> اختيار الجدول</li><li><code dir=\"ltr\">WHERE</code> تصفية الصفوف</li><li><code dir=\"ltr\">SELECT</code> اختيار الأعمدة وحسابها</li><li><code dir=\"ltr\">ORDER BY</code> الترتيب</li><li><code dir=\"ltr\">LIMIT</code> القص</li></ol>\n<p>لهذا يمكن استخدام الاسم المستعار في <code dir=\"ltr\">ORDER BY</code>، لكن ليس في <code dir=\"ltr\">WHERE</code> (في معظم الأنظمة)، لأن <code dir=\"ltr\">WHERE</code> تُنفَّذ قبل أن يُنشأ الاسم.</p>\n<h2>ملخص الدرس</h2>\n<ul><li><code dir=\"ltr\">ORDER BY عمود</code> للترتيب، و <code dir=\"ltr\">DESC</code> للتنازلي.</li><li>يمكن الترتيب بعدة أعمدة وبأعمدة محسوبة.</li><li><code dir=\"ltr\">LIMIT n</code> لعدد محدود، و <code dir=\"ltr\">OFFSET</code> للتخطي وبناء الصفحات.</li><li>بدون ORDER BY لا يوجد ترتيب مضمون.</li></ul>",
   "exercise": {
    "prompt": "<p>اعرض <code dir=\"ltr\">name</code> و <code dir=\"ltr\">hire_date</code> لـ <strong>أقدم 3 موظفين</strong> تعييناً في الشركة، مرتبين من الأقدم إلى الأحدث.</p>",
    "starter": "SELECT name, hire_date\nFROM employees",
    "expected": "name | hire_date\nمنصور | 2019-01-10\nريم | 2020-03-01\nسلطان | 2020-09-05",
    "solution": "SELECT name, hire_date\nFROM employees\nORDER BY hire_date\nLIMIT 3;"
   },
   "quiz": [
    {
     "q": "ما الترتيب الافتراضي لـ <code dir=\"ltr\">ORDER BY</code>؟",
     "o": [
      "تصاعدي (ASC)",
      "تنازلي (DESC)",
      "عشوائي"
     ],
     "a": 0,
     "why": "ASC هو الافتراضي إذا لم تحدد."
    },
    {
     "q": "كيف تجلب الصفحة الثالثة من نتائج حجم كل صفحة 10؟",
     "o": [
      "<code dir=\"ltr\">LIMIT 10 OFFSET 30</code>",
      "<code dir=\"ltr\">LIMIT 10 OFFSET 20</code>",
      "<code dir=\"ltr\">LIMIT 30</code>"
     ],
     "a": 1,
     "why": "نتخطى أول صفحتين، أي 20 صفاً."
    },
    {
     "q": "هل ترتيب الصفوف مضمون بدون ORDER BY؟",
     "o": [
      "نعم، بترتيب الإدخال دائماً",
      "لا، قاعدة البيانات لا تضمن أي ترتيب",
      "نعم، بالمفتاح الأساسي"
     ],
     "a": 1,
     "why": "قد يظهر ترتيب معين، لكنه غير مضمون وقد يتغير."
    }
   ]
  },
  {
   "body": "<h2>إزالة التكرار</h2>\n<p>أحياناً تريد معرفة <strong>القيم المختلفة</strong> في عمود، وليس كل الصفوف. مثلاً: من أي مدن عملاؤنا؟</p>\n<div class=\"code-block src\"><span class=\"code-label\">SQL</span><pre dir=\"ltr\"><code>SELECT city FROM customers;</code></pre></div>\n<div class=\"code-block out sql-out\"><span class=\"code-label\">النتيجة</span><div class=\"table-wrap\"><table class=\"res-table\"><thead><tr><th>city</th></tr></thead><tbody><tr><td class=\"\">الرياض</td></tr><tr><td class=\"\">جدة</td></tr><tr><td class=\"\">الرياض</td></tr><tr><td class=\"\">الدمام</td></tr><tr><td class=\"\">جدة</td></tr><tr><td class=\"\">مكة</td></tr><tr><td class=\"\">الرياض</td></tr><tr><td class=\"null\">NULL</td></tr></tbody></table></div></div>\n<p>المدن مكررة. <code dir=\"ltr\">DISTINCT</code> تعرض كل قيمة <strong>مرة واحدة</strong>:</p>\n<div class=\"code-block src\"><span class=\"code-label\">SQL</span><pre dir=\"ltr\"><code>SELECT DISTINCT city FROM customers;</code></pre></div>\n<div class=\"code-block out sql-out\"><span class=\"code-label\">النتيجة</span><div class=\"table-wrap\"><table class=\"res-table\"><thead><tr><th>city</th></tr></thead><tbody><tr><td class=\"\">الرياض</td></tr><tr><td class=\"\">جدة</td></tr><tr><td class=\"\">الدمام</td></tr><tr><td class=\"\">مكة</td></tr><tr><td class=\"null\">NULL</td></tr></tbody></table></div></div>\n<p>لاحظ أن <code dir=\"ltr\">NULL</code> ظهرت كقيمة مستقلة، فـ DISTINCT تعاملها كقيمة واحدة.</p>\n<h2>DISTINCT مع عدة أعمدة</h2>\n<p>عندها تكون <strong>التركيبة</strong> هي الفريدة، وليس كل عمود وحده:</p>\n<div class=\"code-block src\"><span class=\"code-label\">SQL</span><pre dir=\"ltr\"><code>SELECT DISTINCT category, stock &gt; 0 AS in_stock\nFROM products\nORDER BY category;</code></pre></div>\n<div class=\"code-block out sql-out\"><span class=\"code-label\">النتيجة</span><div class=\"table-wrap\"><table class=\"res-table\"><thead><tr><th>category</th><th>in_stock</th></tr></thead><tbody><tr><td class=\"\">إكسسوارات</td><td class=\"\">0</td></tr><tr><td class=\"\">إكسسوارات</td><td class=\"\">1</td></tr><tr><td class=\"\">إلكترونيات</td><td class=\"\">1</td></tr><tr><td class=\"\">إلكترونيات</td><td class=\"\">0</td></tr><tr><td class=\"\">كتب</td><td class=\"\">1</td></tr><tr><td class=\"\">ملابس</td><td class=\"\">1</td></tr></tbody></table></div></div>\n<p>تظهر &quot;إلكترونيات&quot; مرتين لأن فيها منتجات متوفرة (1) وأخرى نفدت (0)، فهما تركيبتان مختلفتان. وفي SQLite نتيجة المقارنة رقم: <code dir=\"ltr\">1</code> للصحيح و <code dir=\"ltr\">0</code> للخطأ.</p>\n<h2>عدّ القيم الفريدة</h2>\n<div class=\"code-block src\"><span class=\"code-label\">SQL</span><pre dir=\"ltr\"><code>SELECT COUNT(DISTINCT city) AS cities,\n       COUNT(DISTINCT category) AS categories\nFROM customers, products;</code></pre></div>\n<div class=\"code-block out sql-out\"><span class=\"code-label\">النتيجة</span><div class=\"table-wrap\"><table class=\"res-table\"><thead><tr><th>cities</th><th>categories</th></tr></thead><tbody><tr><td class=\"\">4</td><td class=\"\">4</td></tr></tbody></table></div></div>\n<p><code dir=\"ltr\">COUNT(DISTINCT عمود)</code> تعدّ القيم المختلفة، وتتجاهل <code dir=\"ltr\">NULL</code>. (استخدمنا جدولين في <code dir=\"ltr\">FROM</code> هنا فقط لإظهار النتيجتين معاً، وسنتعلم الطريقة الصحيحة لدمج الجداول في وحدة الربط.)</p>\n<h2>أمثلة على أسئلة عمل</h2>\n<div class=\"code-block src\"><span class=\"code-label\">SQL</span><pre dir=\"ltr\"><code>SELECT DISTINCT status FROM orders;\nSELECT DISTINCT department FROM employees ORDER BY department;</code></pre></div>\n<div class=\"code-block out sql-out\"><span class=\"code-label\">النتيجة</span><div class=\"table-wrap\"><table class=\"res-table\"><thead><tr><th>status</th></tr></thead><tbody><tr><td class=\"\">مكتمل</td></tr><tr><td class=\"\">ملغي</td></tr><tr><td class=\"\">قيد التنفيذ</td></tr></tbody></table><table class=\"res-table\"><thead><tr><th>department</th></tr></thead><tbody><tr><td class=\"\">الإدارة</td></tr><tr><td class=\"\">التقنية</td></tr><tr><td class=\"\">الدعم</td></tr><tr><td class=\"\">المبيعات</td></tr></tbody></table></div></div>\n<p>&quot;ما حالات الطلبات الممكنة في نظامنا؟&quot; و&quot;ما الأقسام الموجودة؟&quot; أسئلة تجيب عنها DISTINCT مباشرة.</p>\n<div class=\"callout tip\">💡 DISTINCT تحتاج من قاعدة البيانات مقارنة كل الصفوف، فهي مكلفة مع الجداول الضخمة. لا تضفها &quot;احتياطاً&quot;، بل عندما تحتاجها فعلاً.</div>\n<h2>ملخص الدرس</h2>\n<ul><li><code dir=\"ltr\">SELECT DISTINCT عمود</code> تعرض كل قيمة مرة واحدة.</li><li>مع عدة أعمدة تكون التركيبة هي الفريدة.</li><li><code dir=\"ltr\">COUNT(DISTINCT عمود)</code> تعدّ القيم المختلفة وتتجاهل NULL.</li></ul>",
   "exercise": {
    "prompt": "<ol><li>اعرض <strong>أرقام العملاء المختلفين</strong> (<code dir=\"ltr\">customer_id</code>) الذين لديهم طلبات في جدول <code dir=\"ltr\">orders</code>، مرتبة تصاعدياً.</li><li>في استعلام ثانٍ، اعرض <strong>عدد</strong> هؤلاء العملاء المختلفين باسم <code dir=\"ltr\">buyers</code>.</li></ol>",
    "starter": "-- 1)\n\n-- 2)",
    "expected": "customer_id\n1\n2\n3\n4\n6\n7\n\nbuyers\n6",
    "solution": "SELECT DISTINCT customer_id\nFROM orders\nORDER BY customer_id;\n\nSELECT COUNT(DISTINCT customer_id) AS buyers\nFROM orders;"
   },
   "quiz": [
    {
     "q": "ما وظيفة <code dir=\"ltr\">DISTINCT</code>؟",
     "o": [
      "عرض كل قيمة مختلفة مرة واحدة فقط",
      "ترتيب النتائج",
      "حذف الصفوف المكررة من الجدول"
     ],
     "a": 0,
     "why": "DISTINCT تؤثر على النتيجة فقط، ولا تحذف شيئاً من الجدول."
    },
    {
     "q": "في <code dir=\"ltr\">SELECT DISTINCT a, b</code>، ما الذي يجب أن يكون فريداً؟",
     "o": [
      "العمود a فقط",
      "التركيبة (a, b) معاً",
      "كل عمود على حدة"
     ],
     "a": 1,
     "why": "صفان متطابقان في a ومختلفان في b يظهران كلاهما."
    },
    {
     "q": "هل يعدّ <code dir=\"ltr\">COUNT(DISTINCT email)</code> القيم الفارغة NULL؟",
     "o": [
      "نعم",
      "لا، يتجاهلها",
      "يعدّها مرتين"
     ],
     "a": 1,
     "why": "دوال التجميع على عمود محدد تتجاهل NULL."
    }
   ]
  }
 ],
 [
  {
   "body": "<h2>من صفوف كثيرة إلى رقم واحد</h2>\n<p>حتى الآن كانت نتائجنا صفوفاً. لكن أسئلة العمل غالباً تحتاج <strong>ملخصاً</strong>: كم عدد العملاء؟ ما مجموع المبيعات؟ ما متوسط السعر؟ هنا تأتي <strong>دوال التجميع (Aggregate Functions)</strong>.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>الدالة</th><th>تُرجع</th></tr></thead><tbody><tr><td><code dir=\"ltr\">COUNT()</code></td><td>العدد</td></tr><tr><td><code dir=\"ltr\">SUM()</code></td><td>المجموع</td></tr><tr><td><code dir=\"ltr\">AVG()</code></td><td>المتوسط</td></tr><tr><td><code dir=\"ltr\">MIN()</code></td><td>أصغر قيمة</td></tr><tr><td><code dir=\"ltr\">MAX()</code></td><td>أكبر قيمة</td></tr></tbody></table></div>\n<div class=\"code-block src\"><span class=\"code-label\">SQL</span><pre dir=\"ltr\"><code>SELECT COUNT(*) AS products,\n       SUM(stock) AS total_stock,\n       AVG(price) AS avg_price,\n       MIN(price) AS cheapest,\n       MAX(price) AS most_expensive\nFROM products;</code></pre></div>\n<div class=\"code-block out sql-out\"><span class=\"code-label\">النتيجة</span><div class=\"table-wrap\"><table class=\"res-table\"><thead><tr><th>products</th><th>total_stock</th><th>avg_price</th><th>cheapest</th><th>most_expensive</th></tr></thead><tbody><tr><td class=\"\">10</td><td class=\"\">175</td><td class=\"\">579.5</td><td class=\"\">45</td><td class=\"\">3500</td></tr></tbody></table></div></div>\n<p>كل الجدول تلخّص في <strong>صف واحد</strong>.</p>\n<h2>COUNT بأشكالها</h2>\n<div class=\"code-block src\"><span class=\"code-label\">SQL</span><pre dir=\"ltr\"><code>SELECT COUNT(*) AS all_rows,\n       COUNT(email) AS with_email,\n       COUNT(city) AS with_city,\n       COUNT(DISTINCT city) AS cities\nFROM customers;</code></pre></div>\n<div class=\"code-block out sql-out\"><span class=\"code-label\">النتيجة</span><div class=\"table-wrap\"><table class=\"res-table\"><thead><tr><th>all_rows</th><th>with_email</th><th>with_city</th><th>cities</th></tr></thead><tbody><tr><td class=\"\">8</td><td class=\"\">7</td><td class=\"\">7</td><td class=\"\">4</td></tr></tbody></table></div></div>\n<ul><li><code dir=\"ltr\">COUNT(*)</code> تعدّ <strong>كل الصفوف</strong>.</li><li><code dir=\"ltr\">COUNT(عمود)</code> تعدّ الصفوف التي قيمة العمود فيها <strong>ليست NULL</strong>.</li><li><code dir=\"ltr\">COUNT(DISTINCT عمود)</code> تعدّ القيم المختلفة.</li></ul>\n<h2>التجميع مع WHERE</h2>\n<p><code dir=\"ltr\">WHERE</code> تُنفَّذ أولاً، ثم يجري التجميع على الصفوف المتبقية:</p>\n<div class=\"code-block src\"><span class=\"code-label\">SQL</span><pre dir=\"ltr\"><code>SELECT COUNT(*) AS completed_orders\nFROM orders\nWHERE status = &#x27;مكتمل&#x27;;</code></pre></div>\n<div class=\"code-block out sql-out\"><span class=\"code-label\">النتيجة</span><div class=\"table-wrap\"><table class=\"res-table\"><thead><tr><th>completed_orders</th></tr></thead><tbody><tr><td class=\"\">7</td></tr></tbody></table></div></div>\n<h2>التجميع على تعبير</h2>\n<div class=\"code-block src\"><span class=\"code-label\">SQL</span><pre dir=\"ltr\"><code>SELECT SUM(quantity * unit_price) AS total_revenue,\n       ROUND(AVG(quantity * unit_price), 2) AS avg_line\nFROM order_items;</code></pre></div>\n<div class=\"code-block out sql-out\"><span class=\"code-label\">النتيجة</span><div class=\"table-wrap\"><table class=\"res-table\"><thead><tr><th>total_revenue</th><th>avg_line</th></tr></thead><tbody><tr><td class=\"\">11715</td><td class=\"\">732.19</td></tr></tbody></table></div></div>\n<p>حسبنا قيمة كل سطر (الكمية × السعر) ثم جمعناها. و <code dir=\"ltr\">ROUND(x, 2)</code> تقرّب لخانتين عشريتين.</p>\n<h2>NULL ودوال التجميع</h2>\n<p>كل دوال التجميع (عدا <code dir=\"ltr\">COUNT(*)</code>) <strong>تتجاهل NULL</strong>. وهذا مهم مع <code dir=\"ltr\">AVG</code>: المتوسط يُحسب على القيم الموجودة فقط، وليس على كل الصفوف.</p>\n<div class=\"callout warn\">⚠️ لا يمكنك وضع عمود عادي بجانب دالة تجميع دون <code dir=\"ltr\">GROUP BY</code>. مثلاً <code dir=\"ltr\">SELECT name, MAX(price) FROM products</code> غير صحيحة في PostgreSQL، لأن النتيجة صف واحد فأي <code dir=\"ltr\">name</code> نعرض؟ (SQLite تسمح بها لكن بنتائج قد تكون مضللة.) الحل الصحيح في الدرس القادم.</div>\n<h2>ملخص الدرس</h2>\n<ul><li><code dir=\"ltr\">COUNT</code> و <code dir=\"ltr\">SUM</code> و <code dir=\"ltr\">AVG</code> و <code dir=\"ltr\">MIN</code> و <code dir=\"ltr\">MAX</code> تلخّص صفوفاً كثيرة في قيمة واحدة.</li><li><code dir=\"ltr\">COUNT(*)</code> لكل الصفوف، و <code dir=\"ltr\">COUNT(عمود)</code> تتجاهل NULL.</li><li><code dir=\"ltr\">WHERE</code> تصفّي قبل التجميع.</li><li>يمكن التجميع على تعبيرات مثل <code dir=\"ltr\">quantity * unit_price</code>.</li></ul>",
   "exercise": {
    "prompt": "<p>من جدول <code dir=\"ltr\">employees</code> في قسم <code dir=\"ltr\">التقنية</code> فقط، احسب في استعلام واحد:</p>\n<ul><li>عدد الموظفين باسم <code dir=\"ltr\">count</code></li><li>مجموع الرواتب باسم <code dir=\"ltr\">total_salary</code></li><li>متوسط الراتب <strong>مقرّباً لأقرب عدد صحيح</strong> باسم <code dir=\"ltr\">avg_salary</code> (استخدم <code dir=\"ltr\">ROUND(AVG(salary))</code>)</li><li>أعلى راتب باسم <code dir=\"ltr\">max_salary</code></li></ul>",
    "starter": "SELECT\nFROM employees\nWHERE department = 'التقنية';",
    "expected": "count | total_salary | avg_salary | max_salary\n3 | 47500 | 15833 | 18000",
    "solution": "SELECT COUNT(*) AS count,\n       SUM(salary) AS total_salary,\n       ROUND(AVG(salary)) AS avg_salary,\n       MAX(salary) AS max_salary\nFROM employees\nWHERE department = 'التقنية';"
   },
   "quiz": [
    {
     "q": "ما الفرق بين <code dir=\"ltr\">COUNT(*)</code> و <code dir=\"ltr\">COUNT(email)</code>؟",
     "o": [
      "الأولى تعدّ كل الصفوف، والثانية تعدّ الصفوف التي فيها email ليست NULL",
      "لا فرق",
      "الثانية أسرع فقط"
     ],
     "a": 0,
     "why": "COUNT على عمود تتجاهل القيم الفارغة."
    },
    {
     "q": "متى تُنفَّذ WHERE بالنسبة لدوال التجميع؟",
     "o": [
      "قبلها، فالتجميع يجري على الصفوف التي اجتازت الشرط",
      "بعدها",
      "في نفس الوقت"
     ],
     "a": 0,
     "why": "WHERE تصفّي الصفوف أولاً، ثم يُحسب التجميع."
    },
    {
     "q": "لديك القيم 10 و 20 و NULL في عمود. كم يكون AVG؟",
     "o": [
      "10",
      "15",
      "NULL"
     ],
     "a": 1,
     "why": "المتوسط يُحسب على القيم الموجودة فقط: (10 + 20) ÷ 2."
    }
   ]
  },
  {
   "body": "<h2>تلخيص لكل مجموعة</h2>\n<p>في الدرس السابق لخّصنا الجدول كله في صف واحد. لكن ماذا لو أردنا متوسط السعر <strong>لكل تصنيف</strong>؟ أو عدد الطلبات <strong>لكل عميل</strong>؟ هنا نستخدم <code dir=\"ltr\">GROUP BY</code>:</p>\n<div class=\"code-block src\"><span class=\"code-label\">SQL</span><pre dir=\"ltr\"><code>SELECT category,\n       COUNT(*) AS products,\n       AVG(price) AS avg_price\nFROM products\nGROUP BY category;</code></pre></div>\n<div class=\"code-block out sql-out\"><span class=\"code-label\">النتيجة</span><div class=\"table-wrap\"><table class=\"res-table\"><thead><tr><th>category</th><th>products</th><th>avg_price</th></tr></thead><tbody><tr><td class=\"\">إكسسوارات</td><td class=\"\">2</td><td class=\"\">265</td></tr><tr><td class=\"\">إلكترونيات</td><td class=\"\">4</td><td class=\"\">1182.5</td></tr><tr><td class=\"\">كتب</td><td class=\"\">2</td><td class=\"\">57.5</td></tr><tr><td class=\"\">ملابس</td><td class=\"\">2</td><td class=\"\">210</td></tr></tbody></table></div></div>\n<p><code dir=\"ltr\">GROUP BY category</code> تقسّم الصفوف إلى <strong>مجموعات</strong> حسب التصنيف، ثم تُطبَّق دوال التجميع على كل مجموعة على حدة.</p>\n<h2>كيف تعمل؟</h2>\n<p>تخيّل أن قاعدة البيانات:</p>\n<ol><li>ترتب الصفوف في أكوام: كومة لكل تصنيف.</li><li>تحسب COUNT و AVG لكل كومة.</li><li>تُرجع صفاً واحداً لكل كومة.</li></ol>\n<h2>القاعدة الذهبية</h2>\n<div class=\"callout warn\">⚠️ كل عمود في <code dir=\"ltr\">SELECT</code> يجب أن يكون <strong>إما</strong> في <code dir=\"ltr\">GROUP BY</code> <strong>أو</strong> داخل دالة تجميع. لأن كل مجموعة تصبح صفاً واحداً، فلا معنى لعرض عمود له قيم كثيرة مختلفة داخل المجموعة.</div>\n<h2>أمثلة على أسئلة العمل</h2>\n<p>عدد الطلبات لكل حالة:</p>\n<div class=\"code-block src\"><span class=\"code-label\">SQL</span><pre dir=\"ltr\"><code>SELECT status, COUNT(*) AS orders\nFROM orders\nGROUP BY status\nORDER BY orders DESC;</code></pre></div>\n<div class=\"code-block out sql-out\"><span class=\"code-label\">النتيجة</span><div class=\"table-wrap\"><table class=\"res-table\"><thead><tr><th>status</th><th>orders</th></tr></thead><tbody><tr><td class=\"\">مكتمل</td><td class=\"\">7</td></tr><tr><td class=\"\">قيد التنفيذ</td><td class=\"\">2</td></tr><tr><td class=\"\">ملغي</td><td class=\"\">1</td></tr></tbody></table></div></div>\n<p>الإنفاق في كل طلب:</p>\n<div class=\"code-block src\"><span class=\"code-label\">SQL</span><pre dir=\"ltr\"><code>SELECT order_id,\n       SUM(quantity * unit_price) AS order_total\nFROM order_items\nGROUP BY order_id\nORDER BY order_total DESC\nLIMIT 3;</code></pre></div>\n<div class=\"code-block out sql-out\"><span class=\"code-label\">النتيجة</span><div class=\"table-wrap\"><table class=\"res-table\"><thead><tr><th>order_id</th><th>order_total</th></tr></thead><tbody><tr><td class=\"\">101</td><td class=\"\">4000</td></tr><tr><td class=\"\">107</td><td class=\"\">3500</td></tr><tr><td class=\"\">110</td><td class=\"\">1060</td></tr></tbody></table></div></div>\n<h2>التجميع بأكثر من عمود</h2>\n<p>كل تركيبة مختلفة تصبح مجموعة:</p>\n<div class=\"code-block src\"><span class=\"code-label\">SQL</span><pre dir=\"ltr\"><code>SELECT city, COUNT(*) AS customers\nFROM customers\nWHERE city IS NOT NULL\nGROUP BY city\nORDER BY customers DESC, city;</code></pre></div>\n<div class=\"code-block out sql-out\"><span class=\"code-label\">النتيجة</span><div class=\"table-wrap\"><table class=\"res-table\"><thead><tr><th>city</th><th>customers</th></tr></thead><tbody><tr><td class=\"\">الرياض</td><td class=\"\">3</td></tr><tr><td class=\"\">جدة</td><td class=\"\">2</td></tr><tr><td class=\"\">الدمام</td><td class=\"\">1</td></tr><tr><td class=\"\">مكة</td><td class=\"\">1</td></tr></tbody></table></div></div>\n<h2>التجميع بتعبير</h2>\n<p>يمكن التجميع بقيمة محسوبة، مثلاً سنة الطلب أو شهره:</p>\n<div class=\"code-block src\"><span class=\"code-label\">SQL</span><pre dir=\"ltr\"><code>SELECT substr(order_date, 1, 7) AS month,\n       COUNT(*) AS orders\nFROM orders\nGROUP BY month\nORDER BY month;</code></pre></div>\n<div class=\"code-block out sql-out\"><span class=\"code-label\">النتيجة</span><div class=\"table-wrap\"><table class=\"res-table\"><thead><tr><th>month</th><th>orders</th></tr></thead><tbody><tr><td class=\"\">2025-01</td><td class=\"\">2</td></tr><tr><td class=\"\">2025-02</td><td class=\"\">2</td></tr><tr><td class=\"\">2025-03</td><td class=\"\">2</td></tr><tr><td class=\"\">2025-04</td><td class=\"\">2</td></tr><tr><td class=\"\">2025-05</td><td class=\"\">1</td></tr><tr><td class=\"\">2025-06</td><td class=\"\">1</td></tr></tbody></table></div></div>\n<p><code dir=\"ltr\">substr(order_date, 1, 7)</code> تأخذ أول 7 أحرف من التاريخ، أي السنة والشهر. (في PostgreSQL تُستخدم عادة <code dir=\"ltr\">DATE_TRUNC(&#x27;month&#x27;, order_date)</code>.)</p>\n<h2>ملخص الدرس</h2>\n<ul><li><code dir=\"ltr\">GROUP BY عمود</code> تقسم الصفوف إلى مجموعات، ودوال التجميع تعمل على كل مجموعة.</li><li>كل عمود في SELECT إما في GROUP BY أو داخل دالة تجميع.</li><li>يمكن التجميع بعدة أعمدة أو بتعبير محسوب.</li></ul>",
   "exercise": {
    "prompt": "<p>احسب لكل <strong>قسم</strong> (<code dir=\"ltr\">department</code>) في جدول <code dir=\"ltr\">employees</code>:</p>\n<ul><li>عدد الموظفين باسم <code dir=\"ltr\">employees</code></li><li>مجموع الرواتب باسم <code dir=\"ltr\">payroll</code></li></ul>\n<p>ورتّب النتيجة حسب مجموع الرواتب <strong>تنازلياً</strong>.</p>",
    "starter": "SELECT department\nFROM employees",
    "expected": "department | employees | payroll\nالتقنية | 3 | 47500\nالمبيعات | 3 | 31000\nالإدارة | 1 | 25000\nالدعم | 1 | 8000",
    "solution": "SELECT department,\n       COUNT(*) AS employees,\n       SUM(salary) AS payroll\nFROM employees\nGROUP BY department\nORDER BY payroll DESC;"
   },
   "quiz": [
    {
     "q": "ماذا يفعل <code dir=\"ltr\">GROUP BY category</code>؟",
     "o": [
      "يقسم الصفوف إلى مجموعات حسب التصنيف، لتُحسب دوال التجميع لكل مجموعة",
      "يرتب النتائج حسب التصنيف",
      "يحذف التصنيفات المكررة من الجدول"
     ],
     "a": 0,
     "why": "كل مجموعة تصبح صفاً واحداً في النتيجة."
    },
    {
     "q": "لماذا يُعد <code dir=\"ltr\">SELECT category, name, COUNT(*) FROM products GROUP BY category</code> خطأ؟",
     "o": [
      "لأن COUNT لا تعمل مع GROUP BY",
      "لأن name ليس في GROUP BY ولا داخل دالة تجميع",
      "لأن category يجب أن يكون آخر عمود"
     ],
     "a": 1,
     "why": "كل تصنيف فيه أسماء كثيرة، فأيها نعرض في صف المجموعة الواحد؟"
    },
    {
     "q": "كم صفاً يُرجع <code dir=\"ltr\">GROUP BY</code> على عمود فيه 4 قيم مختلفة؟",
     "o": [
      "4 صفوف",
      "صفاً واحداً",
      "بعدد صفوف الجدول"
     ],
     "a": 0,
     "why": "صف واحد لكل مجموعة."
    }
   ]
  },
  {
   "body": "<h2>تصفية المجموعات</h2>\n<p><code dir=\"ltr\">WHERE</code> تصفّي <strong>الصفوف</strong> قبل التجميع. لكن ماذا لو أردنا تصفية <strong>المجموعات</strong> نفسها بعد التجميع؟ مثلاً: &quot;التصنيفات التي فيها أكثر من منتجين&quot;. هنا نستخدم <code dir=\"ltr\">HAVING</code>:</p>\n<div class=\"code-block src\"><span class=\"code-label\">SQL</span><pre dir=\"ltr\"><code>SELECT category, COUNT(*) AS products\nFROM products\nGROUP BY category\nHAVING COUNT(*) &gt; 2;</code></pre></div>\n<div class=\"code-block out sql-out\"><span class=\"code-label\">النتيجة</span><div class=\"table-wrap\"><table class=\"res-table\"><thead><tr><th>category</th><th>products</th></tr></thead><tbody><tr><td class=\"\">إلكترونيات</td><td class=\"\">4</td></tr></tbody></table></div></div>\n<h2>لماذا لا تعمل WHERE هنا؟</h2>\n<div class=\"code-block src\"><span class=\"code-label\">SQL</span><pre dir=\"ltr\"><code>SELECT category, COUNT(*)\nFROM products\nWHERE COUNT(*) &gt; 2   -- خطأ: misuse of aggregate\nGROUP BY category;</code></pre></div>\n<p>لأن <code dir=\"ltr\">WHERE</code> تُنفَّذ <strong>قبل</strong> التجميع، فلحظة تنفيذها لم تُحسب COUNT بعد.</p>\n<h2>الفرق بالجدول</h2>\n<div class=\"table-wrap\"><table><thead><tr><th></th><th><code dir=\"ltr\">WHERE</code></th><th><code dir=\"ltr\">HAVING</code></th></tr></thead><tbody><tr><td>تصفّي</td><td>الصفوف الفردية</td><td>المجموعات</td></tr><tr><td>تُنفَّذ</td><td>قبل GROUP BY</td><td>بعد GROUP BY</td></tr><tr><td>تقبل دوال التجميع</td><td>لا</td><td>نعم</td></tr></tbody></table></div>\n<h2>استخدامهما معاً</h2>\n<div class=\"code-block src\"><span class=\"code-label\">SQL</span><pre dir=\"ltr\"><code>SELECT customer_id, COUNT(*) AS orders\nFROM orders\nWHERE status = &#x27;مكتمل&#x27;\nGROUP BY customer_id\nHAVING COUNT(*) &gt;= 2;</code></pre></div>\n<div class=\"code-block out sql-out\"><span class=\"code-label\">النتيجة</span><div class=\"table-wrap\"><table class=\"res-table\"><thead><tr><th>customer_id</th><th>orders</th></tr></thead><tbody><tr><td class=\"\">1</td><td class=\"\">3</td></tr><tr><td class=\"\">4</td><td class=\"\">2</td></tr></tbody></table></div></div>\n<p>اقرأها بترتيب التنفيذ:</p>\n<ol><li><code dir=\"ltr\">FROM orders</code>: كل الطلبات.</li><li><code dir=\"ltr\">WHERE status = &#x27;مكتمل&#x27;</code>: المكتملة فقط.</li><li><code dir=\"ltr\">GROUP BY customer_id</code>: جمّعها لكل عميل.</li><li><code dir=\"ltr\">HAVING COUNT(*) &gt;= 2</code>: أبقِ العملاء الذين لهم طلبان مكتملان على الأقل.</li></ol>\n<h2>الترتيب الكامل للتنفيذ</h2>\n<ol><li><code dir=\"ltr\">FROM</code></li><li><code dir=\"ltr\">WHERE</code></li><li><code dir=\"ltr\">GROUP BY</code></li><li><code dir=\"ltr\">HAVING</code></li><li><code dir=\"ltr\">SELECT</code></li><li><code dir=\"ltr\">ORDER BY</code></li><li><code dir=\"ltr\">LIMIT</code></li></ol>\n<div class=\"callout tip\">💡 احفظ هذا الترتيب جيداً، فهو يفسّر أغلب أخطاء SQL: لماذا لا تقبل WHERE دوال التجميع، ولماذا لا تستطيع استخدام اسم مستعار من SELECT في WHERE.</div>\n<h2>مثال: العملاء الأعلى إنفاقاً</h2>\n<div class=\"code-block src\"><span class=\"code-label\">SQL</span><pre dir=\"ltr\"><code>SELECT order_id,\n       SUM(quantity * unit_price) AS total\nFROM order_items\nGROUP BY order_id\nHAVING total &gt; 500\nORDER BY total DESC;</code></pre></div>\n<div class=\"code-block out sql-out\"><span class=\"code-label\">النتيجة</span><div class=\"table-wrap\"><table class=\"res-table\"><thead><tr><th>order_id</th><th>total</th></tr></thead><tbody><tr><td class=\"\">101</td><td class=\"\">4000</td></tr><tr><td class=\"\">107</td><td class=\"\">3500</td></tr><tr><td class=\"\">110</td><td class=\"\">1060</td></tr><tr><td class=\"\">103</td><td class=\"\">900</td></tr><tr><td class=\"\">106</td><td class=\"\">600</td></tr><tr><td class=\"\">108</td><td class=\"\">540</td></tr></tbody></table></div></div>\n<h2>ملخص الدرس</h2>\n<ul><li><code dir=\"ltr\">HAVING</code> تصفّي المجموعات بعد التجميع، و <code dir=\"ltr\">WHERE</code> تصفّي الصفوف قبله.</li><li><code dir=\"ltr\">HAVING</code> تقبل دوال التجميع، و <code dir=\"ltr\">WHERE</code> لا تقبلها.</li><li>ترتيب التنفيذ: FROM ← WHERE ← GROUP BY ← HAVING ← SELECT ← ORDER BY ← LIMIT.</li></ul>",
   "exercise": {
    "prompt": "<p>اعرض <strong>المنتجات</strong> (<code dir=\"ltr\">product_id</code>) التي بيعت منها <strong>3 قطع أو أكثر</strong> إجمالاً في جدول <code dir=\"ltr\">order_items</code>.</p>\n<ul><li>اعرض <code dir=\"ltr\">product_id</code> ومجموع الكميات باسم <code dir=\"ltr\">sold</code>.</li><li>رتّب حسب <code dir=\"ltr\">sold</code> تنازلياً، ثم <code dir=\"ltr\">product_id</code> تصاعدياً.</li></ul>",
    "starter": "SELECT product_id\nFROM order_items",
    "expected": "product_id | sold\n6 | 7\n4 | 5\n2 | 3",
    "solution": "SELECT product_id,\n       SUM(quantity) AS sold\nFROM order_items\nGROUP BY product_id\nHAVING SUM(quantity) >= 3\nORDER BY sold DESC, product_id;"
   },
   "quiz": [
    {
     "q": "متى نستخدم HAVING بدلاً من WHERE؟",
     "o": [
      "عندما يكون الشرط على نتيجة دالة تجميع مثل COUNT أو SUM",
      "عندما يكون الشرط على نص",
      "دائماً، فهي أحدث"
     ],
     "a": 0,
     "why": "HAVING للمجموعات، و WHERE للصفوف."
    },
    {
     "q": "أيهما يُنفَّذ أولاً؟",
     "o": [
      "WHERE",
      "HAVING",
      "لا ترتيب"
     ],
     "a": 0,
     "why": "WHERE قبل GROUP BY، و HAVING بعده."
    },
    {
     "q": "ما نتيجة: <code dir=\"ltr\">SELECT city, COUNT(*) FROM customers GROUP BY city HAVING COUNT(*) &gt; 5</code>؟ (لا توجد مدينة فيها أكثر من 3 عملاء)",
     "o": [
      "خطأ",
      "لا توجد صفوف",
      "كل المدن"
     ],
     "a": 1,
     "why": "لا توجد مجموعة تحقق الشرط، فالنتيجة فارغة."
    }
   ]
  }
 ]
], {"runner": "sql", "setup": "-- قاعدة بيانات متجر إلكتروني تستخدمها كل دروس SQL في CodeWay\n\nCREATE TABLE customers (\n  id INTEGER PRIMARY KEY,\n  name TEXT NOT NULL,\n  city TEXT,\n  email TEXT UNIQUE,\n  joined TEXT\n);\n\nCREATE TABLE products (\n  id INTEGER PRIMARY KEY,\n  name TEXT NOT NULL,\n  category TEXT,\n  price REAL NOT NULL,\n  stock INTEGER DEFAULT 0\n);\n\nCREATE TABLE orders (\n  id INTEGER PRIMARY KEY,\n  customer_id INTEGER REFERENCES customers(id),\n  order_date TEXT,\n  status TEXT\n);\n\nCREATE TABLE order_items (\n  order_id INTEGER REFERENCES orders(id),\n  product_id INTEGER REFERENCES products(id),\n  quantity INTEGER,\n  unit_price REAL\n);\n\nCREATE TABLE employees (\n  id INTEGER PRIMARY KEY,\n  name TEXT NOT NULL,\n  department TEXT,\n  salary INTEGER,\n  manager_id INTEGER REFERENCES employees(id),\n  hire_date TEXT\n);\n\nINSERT INTO customers VALUES\n  (1, 'أحمد', 'الرياض', 'ahmed@mail.com', '2024-01-15'),\n  (2, 'سارة', 'جدة', 'sara@mail.com', '2024-02-20'),\n  (3, 'خالد', 'الرياض', 'khaled@mail.com', '2024-03-05'),\n  (4, 'نورة', 'الدمام', 'noura@mail.com', '2024-03-18'),\n  (5, 'فهد', 'جدة', NULL, '2024-05-01'),\n  (6, 'ليلى', 'مكة', 'layla@mail.com', '2024-06-12'),\n  (7, 'عمر', 'الرياض', 'omar@mail.com', '2024-07-30'),\n  (8, 'هند', NULL, 'hind@mail.com', '2024-09-09');\n\nINSERT INTO products VALUES\n  (1, 'لابتوب', 'إلكترونيات', 3500, 12),\n  (2, 'سماعة', 'إلكترونيات', 250, 40),\n  (3, 'شاحن', 'إلكترونيات', 80, 0),\n  (4, 'قميص', 'ملابس', 120, 25),\n  (5, 'حذاء رياضي', 'ملابس', 300, 8),\n  (6, 'رواية', 'كتب', 45, 60),\n  (7, 'كتاب طبخ', 'كتب', 70, 15),\n  (8, 'ساعة ذكية', 'إلكترونيات', 900, 5),\n  (9, 'حقيبة', 'إكسسوارات', 180, 0),\n  (10, 'نظارة', 'إكسسوارات', 350, 10);\n\nINSERT INTO orders VALUES\n  (101, 1, '2025-01-05', 'مكتمل'),\n  (102, 2, '2025-01-09', 'مكتمل'),\n  (103, 1, '2025-02-14', 'مكتمل'),\n  (104, 3, '2025-02-20', 'ملغي'),\n  (105, 4, '2025-03-02', 'مكتمل'),\n  (106, 2, '2025-03-15', 'قيد التنفيذ'),\n  (107, 6, '2025-04-01', 'مكتمل'),\n  (108, 7, '2025-04-11', 'قيد التنفيذ'),\n  (109, 1, '2025-05-20', 'مكتمل'),\n  (110, 4, '2025-06-03', 'مكتمل');\n\nINSERT INTO order_items VALUES\n  (101, 1, 1, 3500),\n  (101, 2, 2, 250),\n  (102, 4, 3, 120),\n  (102, 6, 2, 45),\n  (103, 8, 1, 900),\n  (104, 5, 1, 300),\n  (105, 7, 2, 70),\n  (105, 6, 1, 45),\n  (106, 10, 1, 350),\n  (106, 2, 1, 250),\n  (107, 1, 1, 3500),\n  (108, 4, 2, 120),\n  (108, 5, 1, 300),\n  (109, 6, 4, 45),\n  (110, 8, 1, 900),\n  (110, 3, 2, 80);\n\nINSERT INTO employees VALUES\n  (1, 'منصور', 'الإدارة', 25000, NULL, '2019-01-10'),\n  (2, 'ريم', 'التقنية', 18000, 1, '2020-03-01'),\n  (3, 'ياسر', 'التقنية', 14000, 2, '2021-06-15'),\n  (4, 'دانة', 'التقنية', 15500, 2, '2022-01-20'),\n  (5, 'سلطان', 'المبيعات', 12000, 1, '2020-09-05'),\n  (6, 'لمى', 'المبيعات', 9500, 5, '2023-02-11'),\n  (7, 'بدر', 'المبيعات', 9500, 5, '2023-08-01'),\n  (8, 'جود', 'الدعم', 8000, 1, '2024-04-14');\n", "schema": "<div class=\"schema-table\"><code dir=\"ltr\"><b>customers</b> (id 🔑, name, city, email, joined)</code> <span class=\"muted\">· 8 صفوف</span></div><div class=\"schema-table\"><code dir=\"ltr\"><b>products</b> (id 🔑, name, category, price, stock)</code> <span class=\"muted\">· 10 صفوف</span></div><div class=\"schema-table\"><code dir=\"ltr\"><b>orders</b> (id 🔑, customer_id, order_date, status)</code> <span class=\"muted\">· 10 صفوف</span></div><div class=\"schema-table\"><code dir=\"ltr\"><b>order_items</b> (order_id, product_id, quantity, unit_price)</code> <span class=\"muted\">· 16 صفوف</span></div><div class=\"schema-table\"><code dir=\"ltr\"><b>employees</b> (id 🔑, name, department, salary, manager_id, hire_date)</code> <span class=\"muted\">· 8 صفوف</span></div>"});
