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
 ],
 [
  {
   "body": "<h2>البيانات موزعة على جداول</h2>\n<p>جدول <code dir=\"ltr\">orders</code> لا يحتوي اسم العميل، بل رقمه <code dir=\"ltr\">customer_id</code> فقط:</p>\n<div class=\"code-block src\"><span class=\"code-label\">SQL</span><pre dir=\"ltr\"><code>SELECT id, customer_id, order_date FROM orders LIMIT 3;</code></pre></div>\n<div class=\"code-block out sql-out\"><span class=\"code-label\">النتيجة</span><div class=\"table-wrap\"><table class=\"res-table\"><thead><tr><th>id</th><th>customer_id</th><th>order_date</th></tr></thead><tbody><tr><td class=\"\">101</td><td class=\"\">1</td><td class=\"\">2025-01-05</td></tr><tr><td class=\"\">102</td><td class=\"\">2</td><td class=\"\">2025-01-09</td></tr><tr><td class=\"\">103</td><td class=\"\">1</td><td class=\"\">2025-02-14</td></tr></tbody></table></div></div>\n<p>هذا تصميم صحيح، فاسم العميل محفوظ مرة واحدة في <code dir=\"ltr\">customers</code>. لكن كيف نعرض <strong>اسم العميل بجانب طلبه</strong>؟ نحتاج <strong>ربط (JOIN)</strong> الجدولين.</p>\n<h2>INNER JOIN</h2>\n<div class=\"code-block src\"><span class=\"code-label\">SQL</span><pre dir=\"ltr\"><code>SELECT orders.id, customers.name, orders.order_date\nFROM orders\nINNER JOIN customers ON orders.customer_id = customers.id\nLIMIT 4;</code></pre></div>\n<div class=\"code-block out sql-out\"><span class=\"code-label\">النتيجة</span><div class=\"table-wrap\"><table class=\"res-table\"><thead><tr><th>id</th><th>name</th><th>order_date</th></tr></thead><tbody><tr><td class=\"\">101</td><td class=\"\">أحمد</td><td class=\"\">2025-01-05</td></tr><tr><td class=\"\">102</td><td class=\"\">سارة</td><td class=\"\">2025-01-09</td></tr><tr><td class=\"\">103</td><td class=\"\">أحمد</td><td class=\"\">2025-02-14</td></tr><tr><td class=\"\">104</td><td class=\"\">خالد</td><td class=\"\">2025-02-20</td></tr></tbody></table></div></div>\n<ul><li><code dir=\"ltr\">JOIN customers</code> الجدول الثاني الذي نربط به.</li><li><code dir=\"ltr\">ON orders.customer_id = customers.id</code> <strong>شرط الربط</strong>: كيف يتطابق صف من الأول مع صف من الثاني.</li><li><code dir=\"ltr\">orders.id</code> تحديد اسم الجدول قبل العمود ضروري عندما يوجد نفس اسم العمود في الجدولين (كلاهما فيه <code dir=\"ltr\">id</code>).</li></ul>\n<div class=\"callout tip\">💡 كلمة <code dir=\"ltr\">INNER</code> اختيارية: <code dir=\"ltr\">JOIN</code> وحدها تعني <code dir=\"ltr\">INNER JOIN</code>.</div>\n<h2>الأسماء المختصرة للجداول</h2>\n<p>كتابة أسماء الجداول كاملة متعب، فنعطيها أسماء مستعارة قصيرة:</p>\n<div class=\"code-block src\"><span class=\"code-label\">SQL</span><pre dir=\"ltr\"><code>SELECT o.id, c.name, c.city, o.status\nFROM orders o\nJOIN customers c ON o.customer_id = c.id\nWHERE c.city = &#x27;الرياض&#x27;\nORDER BY o.id;</code></pre></div>\n<div class=\"code-block out sql-out\"><span class=\"code-label\">النتيجة</span><div class=\"table-wrap\"><table class=\"res-table\"><thead><tr><th>id</th><th>name</th><th>city</th><th>status</th></tr></thead><tbody><tr><td class=\"\">101</td><td class=\"\">أحمد</td><td class=\"\">الرياض</td><td class=\"\">مكتمل</td></tr><tr><td class=\"\">103</td><td class=\"\">أحمد</td><td class=\"\">الرياض</td><td class=\"\">مكتمل</td></tr><tr><td class=\"\">104</td><td class=\"\">خالد</td><td class=\"\">الرياض</td><td class=\"\">ملغي</td></tr><tr><td class=\"\">108</td><td class=\"\">عمر</td><td class=\"\">الرياض</td><td class=\"\">قيد التنفيذ</td></tr><tr><td class=\"\">109</td><td class=\"\">أحمد</td><td class=\"\">الرياض</td><td class=\"\">مكتمل</td></tr></tbody></table></div></div>\n<h2>ماذا يُرجع INNER JOIN بالضبط؟</h2>\n<p>يُرجع <strong>فقط</strong> الصفوف التي لها تطابق في الجدولين. العملاء الذين ليس لهم أي طلب لا يظهرون:</p>\n<div class=\"code-block src\"><span class=\"code-label\">SQL</span><pre dir=\"ltr\"><code>SELECT COUNT(DISTINCT c.id) AS customers_with_orders\nFROM customers c\nJOIN orders o ON o.customer_id = c.id;</code></pre></div>\n<div class=\"code-block out sql-out\"><span class=\"code-label\">النتيجة</span><div class=\"table-wrap\"><table class=\"res-table\"><thead><tr><th>customers_with_orders</th></tr></thead><tbody><tr><td class=\"\">6</td></tr></tbody></table></div></div>\n<p>لدينا 8 عملاء، لكن 6 فقط لهم طلبات. في الدرس القادم سنرى كيف نُظهر الجميع.</p>\n<h2>ربط أكثر من جدولين</h2>\n<p>لنعرف <strong>ماذا اشترى كل عميل</strong>، نحتاج أربعة جداول: العملاء ← الطلبات ← تفاصيل الطلب ← المنتجات:</p>\n<div class=\"code-block src\"><span class=\"code-label\">SQL</span><pre dir=\"ltr\"><code>SELECT c.name AS customer,\n       p.name AS product,\n       oi.quantity\nFROM customers c\nJOIN orders o       ON o.customer_id = c.id\nJOIN order_items oi ON oi.order_id = o.id\nJOIN products p     ON p.id = oi.product_id\nWHERE c.name = &#x27;أحمد&#x27;\nORDER BY o.id;</code></pre></div>\n<div class=\"code-block out sql-out\"><span class=\"code-label\">النتيجة</span><div class=\"table-wrap\"><table class=\"res-table\"><thead><tr><th>customer</th><th>product</th><th>quantity</th></tr></thead><tbody><tr><td class=\"\">أحمد</td><td class=\"\">لابتوب</td><td class=\"\">1</td></tr><tr><td class=\"\">أحمد</td><td class=\"\">سماعة</td><td class=\"\">2</td></tr><tr><td class=\"\">أحمد</td><td class=\"\">ساعة ذكية</td><td class=\"\">1</td></tr><tr><td class=\"\">أحمد</td><td class=\"\">رواية</td><td class=\"\">4</td></tr></tbody></table></div></div>\n<p>كل <code dir=\"ltr\">JOIN</code> يضيف جدولاً بشرط ربطه. وهذا النمط هو قلب SQL في التطبيقات الحقيقية.</p>\n<h2>JOIN مع التجميع</h2>\n<div class=\"code-block src\"><span class=\"code-label\">SQL</span><pre dir=\"ltr\"><code>SELECT c.name, SUM(oi.quantity * oi.unit_price) AS spent\nFROM customers c\nJOIN orders o       ON o.customer_id = c.id\nJOIN order_items oi ON oi.order_id = o.id\nWHERE o.status = &#x27;مكتمل&#x27;\nGROUP BY c.id, c.name\nORDER BY spent DESC;</code></pre></div>\n<div class=\"code-block out sql-out\"><span class=\"code-label\">النتيجة</span><div class=\"table-wrap\"><table class=\"res-table\"><thead><tr><th>name</th><th>spent</th></tr></thead><tbody><tr><td class=\"\">أحمد</td><td class=\"\">5080</td></tr><tr><td class=\"\">ليلى</td><td class=\"\">3500</td></tr><tr><td class=\"\">نورة</td><td class=\"\">1245</td></tr><tr><td class=\"\">سارة</td><td class=\"\">450</td></tr></tbody></table></div></div>\n<p>سؤال عمل حقيقي: &quot;من هم أكثر العملاء إنفاقاً؟&quot; أجبنا عنه بـ JOIN و WHERE و GROUP BY و ORDER BY معاً.</p>\n<h2>ملخص الدرس</h2>\n<ul><li>JOIN يدمج صفوفاً من جدولين حسب شرط <code dir=\"ltr\">ON</code>.</li><li><code dir=\"ltr\">INNER JOIN</code> (أو <code dir=\"ltr\">JOIN</code>) يُرجع الصفوف المتطابقة في الجدولين فقط.</li><li>استخدم أسماء مختصرة للجداول، وحدد الجدول قبل الأعمدة المشتركة.</li><li>يمكن ربط عدة جداول متتالية، ودمج JOIN مع التجميع.</li></ul>",
   "exercise": {
    "prompt": "<p>اعرض لكل سطر في <code dir=\"ltr\">order_items</code> الخاصة بالطلب رقم <code dir=\"ltr\">102</code>:</p>\n<ul><li>اسم المنتج باسم <code dir=\"ltr\">product</code></li><li>الكمية <code dir=\"ltr\">quantity</code></li><li>قيمة السطر (<code dir=\"ltr\">quantity * unit_price</code>) باسم <code dir=\"ltr\">line_total</code></li></ul>\n<p>رتّب حسب <code dir=\"ltr\">line_total</code> تنازلياً.</p>",
    "starter": "SELECT\nFROM order_items oi\nJOIN products p ON\nWHERE",
    "expected": "product | quantity | line_total\nقميص | 3 | 360\nرواية | 2 | 90",
    "solution": "SELECT p.name AS product,\n       oi.quantity,\n       oi.quantity * oi.unit_price AS line_total\nFROM order_items oi\nJOIN products p ON p.id = oi.product_id\nWHERE oi.order_id = 102\nORDER BY line_total DESC;"
   },
   "quiz": [
    {
     "q": "ما وظيفة <code dir=\"ltr\">ON</code> في عبارة JOIN؟",
     "o": [
      "تحدد شرط تطابق الصفوف بين الجدولين",
      "تحدد الأعمدة المعروضة",
      "تصفّي النتائج بعد الربط"
     ],
     "a": 0,
     "why": "ON تخبر قاعدة البيانات كيف يرتبط كل صف بصف من الجدول الآخر."
    },
    {
     "q": "عميل ليس له أي طلب، هل يظهر في <code dir=\"ltr\">customers JOIN orders</code>؟",
     "o": [
      "نعم دائماً",
      "لا، INNER JOIN يُرجع المتطابق في الجدولين فقط",
      "يظهر بقيم NULL"
     ],
     "a": 1,
     "why": "لإظهاره نحتاج LEFT JOIN."
    },
    {
     "q": "لماذا نكتب <code dir=\"ltr\">o.id</code> بدلاً من <code dir=\"ltr\">id</code> في استعلام يربط orders و customers؟",
     "o": [
      "لأن العمود id موجود في الجدولين، فيجب تحديد أي جدول نقصد",
      "لأن id كلمة محجوزة",
      "لتسريع الاستعلام"
     ],
     "a": 0,
     "why": "بدون التحديد يظهر خطأ &quot;ambiguous column name&quot;."
    }
   ]
  },
  {
   "body": "<h2>إظهار كل الصفوف من جهة واحدة</h2>\n<p>في الدرس السابق رأينا أن <code dir=\"ltr\">INNER JOIN</code> يُخفي العملاء الذين ليس لهم طلبات. لكن ماذا لو كان السؤال: &quot;اعرض <strong>كل</strong> العملاء وعدد طلباتهم، حتى من لم يطلب شيئاً&quot;؟</p>\n<h2>LEFT JOIN</h2>\n<p><code dir=\"ltr\">LEFT JOIN</code> يُرجع <strong>كل</strong> صفوف الجدول الأيسر (الأول)، ومعها المتطابق من الأيمن. وإذا لم يوجد تطابق، تكون أعمدة الأيمن <code dir=\"ltr\">NULL</code>:</p>\n<div class=\"code-block src\"><span class=\"code-label\">SQL</span><pre dir=\"ltr\"><code>SELECT c.name, o.id AS order_id\nFROM customers c\nLEFT JOIN orders o ON o.customer_id = c.id\nORDER BY c.id, o.id;</code></pre></div>\n<div class=\"code-block out sql-out\"><span class=\"code-label\">النتيجة</span><div class=\"table-wrap\"><table class=\"res-table\"><thead><tr><th>name</th><th>order_id</th></tr></thead><tbody><tr><td class=\"\">أحمد</td><td class=\"\">101</td></tr><tr><td class=\"\">أحمد</td><td class=\"\">103</td></tr><tr><td class=\"\">أحمد</td><td class=\"\">109</td></tr><tr><td class=\"\">سارة</td><td class=\"\">102</td></tr><tr><td class=\"\">سارة</td><td class=\"\">106</td></tr><tr><td class=\"\">خالد</td><td class=\"\">104</td></tr><tr><td class=\"\">نورة</td><td class=\"\">105</td></tr><tr><td class=\"\">نورة</td><td class=\"\">110</td></tr><tr><td class=\"\">فهد</td><td class=\"null\">NULL</td></tr><tr><td class=\"\">ليلى</td><td class=\"\">107</td></tr><tr><td class=\"\">عمر</td><td class=\"\">108</td></tr><tr><td class=\"\">هند</td><td class=\"null\">NULL</td></tr></tbody></table></div></div>\n<p>فهد وهند ظهرا بطلب <code dir=\"ltr\">NULL</code>، لأنهما لم يطلبا شيئاً.</p>\n<h2>عدّ الطلبات لكل عميل</h2>\n<div class=\"code-block src\"><span class=\"code-label\">SQL</span><pre dir=\"ltr\"><code>SELECT c.name, COUNT(o.id) AS orders\nFROM customers c\nLEFT JOIN orders o ON o.customer_id = c.id\nGROUP BY c.id, c.name\nORDER BY orders DESC, c.id;</code></pre></div>\n<div class=\"code-block out sql-out\"><span class=\"code-label\">النتيجة</span><div class=\"table-wrap\"><table class=\"res-table\"><thead><tr><th>name</th><th>orders</th></tr></thead><tbody><tr><td class=\"\">أحمد</td><td class=\"\">3</td></tr><tr><td class=\"\">سارة</td><td class=\"\">2</td></tr><tr><td class=\"\">نورة</td><td class=\"\">2</td></tr><tr><td class=\"\">خالد</td><td class=\"\">1</td></tr><tr><td class=\"\">ليلى</td><td class=\"\">1</td></tr><tr><td class=\"\">عمر</td><td class=\"\">1</td></tr><tr><td class=\"\">فهد</td><td class=\"\">0</td></tr><tr><td class=\"\">هند</td><td class=\"\">0</td></tr></tbody></table></div></div>\n<div class=\"callout warn\">⚠️ لاحظ <code dir=\"ltr\">COUNT(o.id)</code> وليس <code dir=\"ltr\">COUNT(*)</code>. لو استخدمنا <code dir=\"ltr\">COUNT(*)</code> لحصل فهد على 1 بدلاً من 0، لأن صفه موجود (بقيم NULL). أما <code dir=\"ltr\">COUNT(o.id)</code> فتتجاهل NULL.</div>\n<h2>إيجاد ما ليس له مقابل</h2>\n<p>من أقوى استخدامات LEFT JOIN: إيجاد الصفوف <strong>التي ليس لها تطابق</strong>. مثلاً: المنتجات التي لم يطلبها أحد أبداً:</p>\n<div class=\"code-block src\"><span class=\"code-label\">SQL</span><pre dir=\"ltr\"><code>SELECT p.name\nFROM products p\nLEFT JOIN order_items oi ON oi.product_id = p.id\nWHERE oi.product_id IS NULL;</code></pre></div>\n<div class=\"code-block out sql-out\"><span class=\"code-label\">النتيجة</span><div class=\"table-wrap\"><table class=\"res-table\"><thead><tr><th>name</th></tr></thead><tbody><tr><td class=\"\">حقيبة</td></tr></tbody></table></div></div>\n<p>النمط: <code dir=\"ltr\">LEFT JOIN</code> ثم <code dir=\"ltr\">WHERE الجدول_الأيمن.عمود IS NULL</code>. ستستخدمه كثيراً: عملاء بلا طلبات، وطلاب بلا درجات، وموظفون بلا مهام.</p>\n<h2>RIGHT JOIN</h2>\n<p>عكس LEFT تماماً: كل صفوف الجدول <strong>الأيمن</strong>، والمتطابق من الأيسر:</p>\n<div class=\"code-block src\"><span class=\"code-label\">SQL</span><pre dir=\"ltr\"><code>SELECT c.name, o.id AS order_id\nFROM orders o\nRIGHT JOIN customers c ON o.customer_id = c.id\nWHERE o.id IS NULL;</code></pre></div>\n<div class=\"code-block out sql-out\"><span class=\"code-label\">النتيجة</span><div class=\"table-wrap\"><table class=\"res-table\"><thead><tr><th>name</th><th>order_id</th></tr></thead><tbody><tr><td class=\"\">فهد</td><td class=\"null\">NULL</td></tr><tr><td class=\"\">هند</td><td class=\"null\">NULL</td></tr></tbody></table></div></div>\n<p>أي <code dir=\"ltr\">RIGHT JOIN</code> يمكن كتابته كـ <code dir=\"ltr\">LEFT JOIN</code> بتبديل ترتيب الجدولين. لذلك معظم المطورين يستخدمون LEFT دائماً لأنه أسهل في القراءة.</p>\n<h2>الشرط في ON أم في WHERE؟</h2>\n<p>مع LEFT JOIN، مكان الشرط يغيّر النتيجة:</p>\n<div class=\"code-block src\"><span class=\"code-label\">SQL</span><pre dir=\"ltr\"><code>SELECT c.name, COUNT(o.id) AS completed\nFROM customers c\nLEFT JOIN orders o ON o.customer_id = c.id AND o.status = &#x27;مكتمل&#x27;\nGROUP BY c.id, c.name\nORDER BY c.id;</code></pre></div>\n<div class=\"code-block out sql-out\"><span class=\"code-label\">النتيجة</span><div class=\"table-wrap\"><table class=\"res-table\"><thead><tr><th>name</th><th>completed</th></tr></thead><tbody><tr><td class=\"\">أحمد</td><td class=\"\">3</td></tr><tr><td class=\"\">سارة</td><td class=\"\">1</td></tr><tr><td class=\"\">خالد</td><td class=\"\">0</td></tr><tr><td class=\"\">نورة</td><td class=\"\">2</td></tr><tr><td class=\"\">فهد</td><td class=\"\">0</td></tr><tr><td class=\"\">ليلى</td><td class=\"\">1</td></tr><tr><td class=\"\">عمر</td><td class=\"\">0</td></tr><tr><td class=\"\">هند</td><td class=\"\">0</td></tr></tbody></table></div></div>\n<p>وضعنا شرط الحالة في <code dir=\"ltr\">ON</code>، فبقي كل العملاء وعُدّت الطلبات المكتملة فقط. لو وضعناه في <code dir=\"ltr\">WHERE</code> لاختفى العملاء الذين ليس لهم طلب مكتمل (مثل خالد وفهد)، لأن WHERE تُطبَّق بعد الربط على الصفوف التي فيها NULL.</p>\n<h2>ملخص الدرس</h2>\n<ul><li><code dir=\"ltr\">LEFT JOIN</code> كل صفوف الأيسر، وأعمدة الأيمن NULL عند عدم التطابق.</li><li><code dir=\"ltr\">RIGHT JOIN</code> العكس، ويمكن استبداله بـ LEFT بتبديل الجدولين.</li><li><code dir=\"ltr\">LEFT JOIN ... WHERE right.col IS NULL</code> لإيجاد ما ليس له مقابل.</li><li>مع LEFT JOIN استخدم <code dir=\"ltr\">COUNT(عمود)</code> وليس <code dir=\"ltr\">COUNT(*)</code>، وانتبه لمكان الشرط.</li></ul>",
   "exercise": {
    "prompt": "<p>اعرض <strong>كل المنتجات</strong> مع مجموع الكميات المباعة من كل منها باسم <code dir=\"ltr\">sold</code>، حتى المنتجات التي لم تُبع (يجب أن يظهر لها <code dir=\"ltr\">0</code> وليس NULL).</p>\n<ul><li>استخدم <code dir=\"ltr\">LEFT JOIN</code> و <code dir=\"ltr\">GROUP BY</code>.</li><li>لتحويل NULL إلى 0 استخدم <code dir=\"ltr\">COALESCE(SUM(oi.quantity), 0)</code>.</li><li>رتّب حسب <code dir=\"ltr\">sold</code> تنازلياً ثم اسم المنتج تصاعدياً.</li></ul>",
    "starter": "SELECT p.name\nFROM products p",
    "expected": "name | sold\nرواية | 7\nقميص | 5\nسماعة | 3\nحذاء رياضي | 2\nساعة ذكية | 2\nشاحن | 2\nكتاب طبخ | 2\nلابتوب | 2\nنظارة | 1\nحقيبة | 0",
    "solution": "SELECT p.name,\n       COALESCE(SUM(oi.quantity), 0) AS sold\nFROM products p\nLEFT JOIN order_items oi ON oi.product_id = p.id\nGROUP BY p.id, p.name\nORDER BY sold DESC, p.name;"
   },
   "quiz": [
    {
     "q": "ماذا يُرجع <code dir=\"ltr\">customers LEFT JOIN orders</code>؟",
     "o": [
      "كل العملاء، ومعهم طلباتهم إن وُجدت، و NULL لمن ليس له طلب",
      "العملاء الذين لهم طلبات فقط",
      "كل الطلبات فقط"
     ],
     "a": 0,
     "why": "LEFT يحتفظ بكل صفوف الجدول الأول."
    },
    {
     "q": "كيف تجد العملاء الذين لم يطلبوا أبداً؟",
     "o": [
      "<code dir=\"ltr\">INNER JOIN</code> مع <code dir=\"ltr\">WHERE o.id = 0</code>",
      "<code dir=\"ltr\">LEFT JOIN orders</code> مع <code dir=\"ltr\">WHERE o.id IS NULL</code>",
      "<code dir=\"ltr\">RIGHT JOIN</code> فقط"
     ],
     "a": 1,
     "why": "بعد LEFT JOIN، من ليس له تطابق تكون أعمدة الطلب فيه NULL."
    },
    {
     "q": "لماذا نستخدم <code dir=\"ltr\">COUNT(o.id)</code> بدلاً من <code dir=\"ltr\">COUNT(*)</code> بعد LEFT JOIN؟",
     "o": [
      "لأن COUNT(*) تعدّ صف العميل الذي ليس له طلب كـ 1",
      "لأن COUNT(*) لا تعمل مع JOIN",
      "لا فرق بينهما"
     ],
     "a": 0,
     "why": "COUNT على عمود تتجاهل NULL فتعطي 0 بشكل صحيح."
    }
   ]
  },
  {
   "body": "<h2>FULL OUTER JOIN: كل شيء من الجهتين</h2>\n<p><code dir=\"ltr\">FULL JOIN</code> يجمع LEFT و RIGHT معاً: كل صفوف الجدولين، متطابقة أو لا. ولنرى أثره بوضوح، سنستخدم جدولين صغيرين: موظفون ومكاتب:</p>\n<div class=\"code-block src\"><span class=\"code-label\">SQL</span><pre dir=\"ltr\"><code>CREATE TABLE staff (name TEXT, office_id INTEGER);\nCREATE TABLE offices (id INTEGER, city TEXT);\nINSERT INTO staff VALUES (&#x27;أمل&#x27;, 1), (&#x27;زياد&#x27;, 2), (&#x27;حلا&#x27;, NULL);\nINSERT INTO offices VALUES (1, &#x27;الرياض&#x27;), (2, &#x27;جدة&#x27;), (3, &#x27;أبها&#x27;);\n\nSELECT s.name, o.city\nFROM staff s\nFULL JOIN offices o ON s.office_id = o.id;</code></pre></div>\n<div class=\"code-block out sql-out\"><span class=\"code-label\">النتيجة</span><div class=\"table-wrap\"><table class=\"res-table\"><thead><tr><th>name</th><th>city</th></tr></thead><tbody><tr><td class=\"\">أمل</td><td class=\"\">الرياض</td></tr><tr><td class=\"\">زياد</td><td class=\"\">جدة</td></tr><tr><td class=\"\">حلا</td><td class=\"null\">NULL</td></tr><tr><td class=\"null\">NULL</td><td class=\"\">أبها</td></tr></tbody></table></div></div>\n<ul><li>حلا ظهرت بلا مكتب (<code dir=\"ltr\">NULL</code>)، كما في LEFT JOIN.</li><li>مكتب أبها ظهر بلا موظف (<code dir=\"ltr\">NULL</code>)، كما في RIGHT JOIN.</li></ul>\n<div class=\"table-wrap\"><table><thead><tr><th>نوع الربط</th><th>يُرجع</th></tr></thead><tbody><tr><td><code dir=\"ltr\">INNER JOIN</code></td><td>المتطابق فقط</td></tr><tr><td><code dir=\"ltr\">LEFT JOIN</code></td><td>كل الأيسر + المتطابق من الأيمن</td></tr><tr><td><code dir=\"ltr\">RIGHT JOIN</code></td><td>كل الأيمن + المتطابق من الأيسر</td></tr><tr><td><code dir=\"ltr\">FULL JOIN</code></td><td>كل شيء من الجهتين</td></tr></tbody></table></div>\n<div class=\"callout tip\">💡 <code dir=\"ltr\">FULL JOIN</code> مدعوم في PostgreSQL و SQL Server و SQLite الحديثة، لكنه <strong>غير مدعوم في MySQL</strong>، وهناك يُحاكى بـ <code dir=\"ltr\">LEFT JOIN ... UNION ... RIGHT JOIN</code>.</div>\n<h2>SELF JOIN: ربط الجدول بنفسه</h2>\n<p>في جدول <code dir=\"ltr\">employees</code>، العمود <code dir=\"ltr\">manager_id</code> يشير إلى <code dir=\"ltr\">id</code> موظف آخر <strong>في نفس الجدول</strong>. كيف نعرض اسم كل موظف واسم مديره؟ نربط الجدول بنفسه، مع اسمين مستعارين مختلفين:</p>\n<div class=\"code-block src\"><span class=\"code-label\">SQL</span><pre dir=\"ltr\"><code>SELECT e.name AS employee,\n       m.name AS manager\nFROM employees e\nLEFT JOIN employees m ON e.manager_id = m.id\nORDER BY e.id;</code></pre></div>\n<div class=\"code-block out sql-out\"><span class=\"code-label\">النتيجة</span><div class=\"table-wrap\"><table class=\"res-table\"><thead><tr><th>employee</th><th>manager</th></tr></thead><tbody><tr><td class=\"\">منصور</td><td class=\"null\">NULL</td></tr><tr><td class=\"\">ريم</td><td class=\"\">منصور</td></tr><tr><td class=\"\">ياسر</td><td class=\"\">ريم</td></tr><tr><td class=\"\">دانة</td><td class=\"\">ريم</td></tr><tr><td class=\"\">سلطان</td><td class=\"\">منصور</td></tr><tr><td class=\"\">لمى</td><td class=\"\">سلطان</td></tr><tr><td class=\"\">بدر</td><td class=\"\">سلطان</td></tr><tr><td class=\"\">جود</td><td class=\"\">منصور</td></tr></tbody></table></div></div>\n<ul><li><code dir=\"ltr\">e</code> نسخة الجدول التي تمثل الموظف.</li><li><code dir=\"ltr\">m</code> نسخة الجدول نفسه التي تمثل المدير.</li><li>استخدمنا <code dir=\"ltr\">LEFT JOIN</code> حتى يظهر منصور رغم أنه بلا مدير.</li></ul>\n<h2>عدد المرؤوسين لكل مدير</h2>\n<div class=\"code-block src\"><span class=\"code-label\">SQL</span><pre dir=\"ltr\"><code>SELECT m.name AS manager, COUNT(e.id) AS team_size\nFROM employees m\nJOIN employees e ON e.manager_id = m.id\nGROUP BY m.id, m.name\nORDER BY team_size DESC;</code></pre></div>\n<div class=\"code-block out sql-out\"><span class=\"code-label\">النتيجة</span><div class=\"table-wrap\"><table class=\"res-table\"><thead><tr><th>manager</th><th>team_size</th></tr></thead><tbody><tr><td class=\"\">منصور</td><td class=\"\">3</td></tr><tr><td class=\"\">ريم</td><td class=\"\">2</td></tr><tr><td class=\"\">سلطان</td><td class=\"\">2</td></tr></tbody></table></div></div>\n<h2>CROSS JOIN: كل التركيبات</h2>\n<p>نادر الاستخدام، يُرجع كل تركيبة ممكنة بين صفوف الجدولين. مثلاً توليد كل خيارات منتج من المقاسات والألوان (2 × 3 = 6 صفوف). استخدمنا هنا <code dir=\"ltr\">VALUES</code> داخل CTE لإنشاء جدولين صغيرين مؤقتين، وسنتعلم CTE في الوحدة القادمة:</p>\n<div class=\"code-block src\"><span class=\"code-label\">SQL</span><pre dir=\"ltr\"><code>WITH sizes(size) AS (VALUES (&#x27;S&#x27;), (&#x27;M&#x27;)),\n     colors(color) AS (VALUES (&#x27;أحمر&#x27;), (&#x27;أسود&#x27;), (&#x27;أبيض&#x27;))\nSELECT size, color\nFROM sizes\nCROSS JOIN colors\nORDER BY size, color;</code></pre></div>\n<div class=\"code-block out sql-out\"><span class=\"code-label\">النتيجة</span><div class=\"table-wrap\"><table class=\"res-table\"><thead><tr><th>size</th><th>color</th></tr></thead><tbody><tr><td class=\"\">M</td><td class=\"\">أبيض</td></tr><tr><td class=\"\">M</td><td class=\"\">أحمر</td></tr><tr><td class=\"\">M</td><td class=\"\">أسود</td></tr><tr><td class=\"\">S</td><td class=\"\">أبيض</td></tr><tr><td class=\"\">S</td><td class=\"\">أحمر</td></tr><tr><td class=\"\">S</td><td class=\"\">أسود</td></tr></tbody></table></div></div>\n<h2>ملخص الدرس</h2>\n<ul><li><code dir=\"ltr\">FULL JOIN</code> كل الصفوف من الجدولين، و NULL حيث لا تطابق.</li><li><code dir=\"ltr\">SELF JOIN</code> ربط الجدول بنفسه باسمين مستعارين، ويُستخدم للبيانات الهرمية مثل الموظف ومديره.</li><li><code dir=\"ltr\">CROSS JOIN</code> كل التركيبات الممكنة.</li></ul>",
   "exercise": {
    "prompt": "<p>اعرض الموظفين الذين <strong>راتبهم أعلى من راتب مديرهم المباشر أو يساويه</strong>، أو الذين يعملون في <strong>قسم مختلف</strong> عن قسم مديرهم.</p>\n<p>لكل منهم اعرض: اسم الموظف <code dir=\"ltr\">employee</code>، وقسمه <code dir=\"ltr\">department</code>، واسم المدير <code dir=\"ltr\">manager</code>، وقسم المدير <code dir=\"ltr\">manager_department</code>. رتّب حسب <code dir=\"ltr\">e.id</code>.</p>",
    "starter": "SELECT\nFROM employees e\nJOIN employees m ON\nWHERE",
    "expected": "employee | department | manager | manager_department\nريم | التقنية | منصور | الإدارة\nسلطان | المبيعات | منصور | الإدارة\nجود | الدعم | منصور | الإدارة",
    "solution": "SELECT e.name AS employee,\n       e.department,\n       m.name AS manager,\n       m.department AS manager_department\nFROM employees e\nJOIN employees m ON e.manager_id = m.id\nWHERE e.salary >= m.salary\n   OR e.department <> m.department\nORDER BY e.id;"
   },
   "quiz": [
    {
     "q": "ما الذي يميز FULL JOIN عن LEFT JOIN؟",
     "o": [
      "يُرجع أيضاً صفوف الجدول الأيمن التي ليس لها تطابق",
      "أسرع منه",
      "يُرجع المتطابق فقط"
     ],
     "a": 0,
     "why": "FULL = LEFT + RIGHT معاً."
    },
    {
     "q": "متى نحتاج SELF JOIN؟",
     "o": [
      "عند ربط جدولين مختلفين",
      "عندما يشير عمود في الجدول إلى صف آخر في نفس الجدول، مثل الموظف ومديره",
      "عند حذف التكرار"
     ],
     "a": 1,
     "why": "نربط الجدول بنفسه باسمين مستعارين."
    },
    {
     "q": "كم صفاً يُرجع CROSS JOIN بين جدول فيه 4 صفوف وآخر فيه 5؟",
     "o": [
      "9",
      "20",
      "5"
     ],
     "a": 1,
     "why": "كل صف من الأول مع كل صف من الثاني: 4 × 5."
    }
   ]
  }
 ],
 [
  {
   "body": "<h2>استعلام داخل استعلام</h2>\n<p><strong>الاستعلام الفرعي (Subquery)</strong> استعلام كامل نضعه داخل استعلام آخر بين قوسين. نستخدمه عندما نحتاج نتيجة استعلام لنبني عليها استعلاماً آخر.</p>\n<p>سؤال: &quot;ما المنتجات التي سعرها أعلى من متوسط الأسعار؟&quot; نحتاج أولاً معرفة المتوسط، ثم المقارنة به:</p>\n<div class=\"code-block src\"><span class=\"code-label\">SQL</span><pre dir=\"ltr\"><code>SELECT name, price\nFROM products\nWHERE price &gt; (SELECT AVG(price) FROM products)\nORDER BY price DESC;</code></pre></div>\n<div class=\"code-block out sql-out\"><span class=\"code-label\">النتيجة</span><div class=\"table-wrap\"><table class=\"res-table\"><thead><tr><th>name</th><th>price</th></tr></thead><tbody><tr><td class=\"\">لابتوب</td><td class=\"\">3500</td></tr><tr><td class=\"\">ساعة ذكية</td><td class=\"\">900</td></tr></tbody></table></div></div>\n<p>يُنفَّذ الاستعلام الداخلي أولاً فيُرجع <code dir=\"ltr\">579.5</code>، ثم يكمل الخارجي كأننا كتبنا <code dir=\"ltr\">WHERE price &gt; 579.5</code>. الميزة أن الاستعلام يبقى صحيحاً حتى لو تغيّرت الأسعار.</p>\n<h2>استعلام فرعي يُرجع قائمة: IN</h2>\n<div class=\"code-block src\"><span class=\"code-label\">SQL</span><pre dir=\"ltr\"><code>SELECT name, city\nFROM customers\nWHERE id IN (\n  SELECT customer_id FROM orders WHERE status = &#x27;قيد التنفيذ&#x27;\n);</code></pre></div>\n<div class=\"code-block out sql-out\"><span class=\"code-label\">النتيجة</span><div class=\"table-wrap\"><table class=\"res-table\"><thead><tr><th>name</th><th>city</th></tr></thead><tbody><tr><td class=\"\">سارة</td><td class=\"\">جدة</td></tr><tr><td class=\"\">عمر</td><td class=\"\">الرياض</td></tr></tbody></table></div></div>\n<p>الاستعلام الداخلي أرجع قائمة أرقام العملاء، والخارجي اختار من هم ضمنها. و <code dir=\"ltr\">NOT IN</code> تعطي العكس.</p>\n<div class=\"callout warn\">⚠️ احذر <code dir=\"ltr\">NOT IN</code> إذا كانت القائمة قد تحتوي <code dir=\"ltr\">NULL</code>: النتيجة تصبح فارغة دائماً! في هذه الحالة استخدم <code dir=\"ltr\">NOT EXISTS</code>.</div>\n<h2>EXISTS: هل يوجد صف واحد على الأقل؟</h2>\n<div class=\"code-block src\"><span class=\"code-label\">SQL</span><pre dir=\"ltr\"><code>SELECT p.name\nFROM products p\nWHERE NOT EXISTS (\n  SELECT 1 FROM order_items oi WHERE oi.product_id = p.id\n);</code></pre></div>\n<div class=\"code-block out sql-out\"><span class=\"code-label\">النتيجة</span><div class=\"table-wrap\"><table class=\"res-table\"><thead><tr><th>name</th></tr></thead><tbody><tr><td class=\"\">حقيبة</td></tr></tbody></table></div></div>\n<p>هذا <strong>استعلام فرعي مترابط (Correlated)</strong>: يستخدم <code dir=\"ltr\">p.id</code> من الاستعلام الخارجي، فيُنفَّذ ذهنياً لكل منتج على حدة. <code dir=\"ltr\">EXISTS</code> تتوقف عند أول صف تجده، فهي سريعة.</p>\n<h2>استعلام فرعي في SELECT</h2>\n<p>يمكن وضع استعلام يُرجع قيمة واحدة كعمود:</p>\n<div class=\"code-block src\"><span class=\"code-label\">SQL</span><pre dir=\"ltr\"><code>SELECT c.name,\n       (SELECT COUNT(*) FROM orders o WHERE o.customer_id = c.id) AS orders\nFROM customers c\nORDER BY orders DESC, c.id\nLIMIT 4;</code></pre></div>\n<div class=\"code-block out sql-out\"><span class=\"code-label\">النتيجة</span><div class=\"table-wrap\"><table class=\"res-table\"><thead><tr><th>name</th><th>orders</th></tr></thead><tbody><tr><td class=\"\">أحمد</td><td class=\"\">3</td></tr><tr><td class=\"\">سارة</td><td class=\"\">2</td></tr><tr><td class=\"\">نورة</td><td class=\"\">2</td></tr><tr><td class=\"\">خالد</td><td class=\"\">1</td></tr></tbody></table></div></div>\n<h2>استعلام فرعي في FROM</h2>\n<p>نتيجة أي استعلام هي جدول، فيمكن الاستعلام منها:</p>\n<div class=\"code-block src\"><span class=\"code-label\">SQL</span><pre dir=\"ltr\"><code>SELECT AVG(order_total) AS avg_order\nFROM (\n  SELECT order_id, SUM(quantity * unit_price) AS order_total\n  FROM order_items\n  GROUP BY order_id\n) AS totals;</code></pre></div>\n<div class=\"code-block out sql-out\"><span class=\"code-label\">النتيجة</span><div class=\"table-wrap\"><table class=\"res-table\"><thead><tr><th>avg_order</th></tr></thead><tbody><tr><td class=\"\">1171.5</td></tr></tbody></table></div></div>\n<p>حسبنا إجمالي كل طلب في الداخل، ثم متوسط الإجماليات في الخارج. هذا مستحيل باستعلام واحد بسيط لأنه &quot;تجميع فوق تجميع&quot;.</p>\n<h2>ملخص الدرس</h2>\n<ul><li>الاستعلام الفرعي استعلام بين قوسين داخل آخر.</li><li>يُرجع قيمة واحدة للمقارنة، أو قائمة مع <code dir=\"ltr\">IN</code>، أو جدولاً في <code dir=\"ltr\">FROM</code>.</li><li><code dir=\"ltr\">EXISTS</code> و <code dir=\"ltr\">NOT EXISTS</code> لفحص وجود صفوف مرتبطة.</li><li>احذر <code dir=\"ltr\">NOT IN</code> مع القوائم التي قد تحتوي NULL.</li></ul>",
   "exercise": {
    "prompt": "<p>اعرض <code dir=\"ltr\">name</code> و <code dir=\"ltr\">salary</code> للموظفين الذين راتبهم <strong>أعلى من متوسط رواتب قسمهم</strong>.</p>\n<ul><li>استخدم استعلاماً فرعياً مترابطاً: <code dir=\"ltr\">(SELECT AVG(salary) FROM employees e2 WHERE e2.department = e.department)</code>.</li><li>رتّب حسب الراتب تنازلياً.</li></ul>",
    "starter": "SELECT e.name, e.salary\nFROM employees e\nWHERE",
    "expected": "name | salary\nريم | 18000\nسلطان | 12000",
    "solution": "SELECT e.name, e.salary\nFROM employees e\nWHERE e.salary > (\n  SELECT AVG(salary) FROM employees e2 WHERE e2.department = e.department\n)\nORDER BY e.salary DESC;"
   },
   "quiz": [
    {
     "q": "في <code dir=\"ltr\">WHERE price &gt; (SELECT AVG(price) FROM products)</code>، أي جزء يُنفَّذ أولاً؟",
     "o": [
      "الاستعلام الفرعي داخل الأقواس",
      "الاستعلام الخارجي",
      "يُنفَّذان معاً"
     ],
     "a": 0,
     "why": "نحتاج المتوسط أولاً قبل المقارنة."
    },
    {
     "q": "ما المقصود بالاستعلام الفرعي المترابط (Correlated)؟",
     "o": [
      "استعلام فرعي يستخدم قيمة من الاستعلام الخارجي",
      "استعلام فرعي بلا WHERE",
      "استعلام يربط جدولين بـ JOIN"
     ],
     "a": 0,
     "why": "يُقيَّم لكل صف من الخارجي لأنه يعتمد عليه."
    },
    {
     "q": "لماذا قد يكون <code dir=\"ltr\">NOT IN</code> خطيراً؟",
     "o": [
      "لأنه بطيء دائماً",
      "لأنه يُرجع نتيجة فارغة إذا احتوت القائمة على NULL",
      "لأنه غير مدعوم"
     ],
     "a": 1,
     "why": "المقارنة مع NULL غير معروفة، فيفشل الشرط لكل الصفوف."
    }
   ]
  },
  {
   "body": "<h2>الاستعلامات الفرعية تصبح معقدة</h2>\n<p>عندما تتداخل الاستعلامات الفرعية، يصعب قراءة الاستعلام من الداخل للخارج. <strong>تعبير الجدول المشترك (CTE)</strong> يحل هذا: تعطي الاستعلام الفرعي <strong>اسماً</strong> في البداية، ثم تستخدمه كجدول عادي.</p>\n<h2>صيغة WITH</h2>\n<div class=\"code-block src\"><span class=\"code-label\">SQL</span><pre dir=\"ltr\"><code>WITH order_totals AS (\n  SELECT order_id, SUM(quantity * unit_price) AS total\n  FROM order_items\n  GROUP BY order_id\n)\nSELECT order_id, total\nFROM order_totals\nWHERE total &gt; 1000\nORDER BY total DESC;</code></pre></div>\n<div class=\"code-block out sql-out\"><span class=\"code-label\">النتيجة</span><div class=\"table-wrap\"><table class=\"res-table\"><thead><tr><th>order_id</th><th>total</th></tr></thead><tbody><tr><td class=\"\">101</td><td class=\"\">4000</td></tr><tr><td class=\"\">107</td><td class=\"\">3500</td></tr><tr><td class=\"\">110</td><td class=\"\">1060</td></tr></tbody></table></div></div>\n<p>يُقرأ من الأعلى للأسفل كقصة: &quot;أولاً احسب إجماليات الطلبات، ثم اختر الكبيرة منها&quot;.</p>\n<h2>عدة CTEs متتالية</h2>\n<p>نفصل بينها بفاصلة، وكل واحد يستطيع استخدام ما قبله:</p>\n<div class=\"code-block src\"><span class=\"code-label\">SQL</span><pre dir=\"ltr\"><code>WITH order_totals AS (\n  SELECT o.customer_id, SUM(oi.quantity * oi.unit_price) AS total\n  FROM orders o\n  JOIN order_items oi ON oi.order_id = o.id\n  WHERE o.status = &#x27;مكتمل&#x27;\n  GROUP BY o.id\n),\ncustomer_spending AS (\n  SELECT customer_id,\n         COUNT(*) AS orders,\n         SUM(total) AS spent\n  FROM order_totals\n  GROUP BY customer_id\n)\nSELECT c.name, cs.orders, cs.spent\nFROM customer_spending cs\nJOIN customers c ON c.id = cs.customer_id\nORDER BY cs.spent DESC;</code></pre></div>\n<div class=\"code-block out sql-out\"><span class=\"code-label\">النتيجة</span><div class=\"table-wrap\"><table class=\"res-table\"><thead><tr><th>name</th><th>orders</th><th>spent</th></tr></thead><tbody><tr><td class=\"\">أحمد</td><td class=\"\">3</td><td class=\"\">5080</td></tr><tr><td class=\"\">ليلى</td><td class=\"\">1</td><td class=\"\">3500</td></tr><tr><td class=\"\">نورة</td><td class=\"\">2</td><td class=\"\">1245</td></tr><tr><td class=\"\">سارة</td><td class=\"\">1</td><td class=\"\">450</td></tr></tbody></table></div></div>\n<p>ثلاث خطوات واضحة، كل منها باسم يشرح نفسه. هذا أسلوب محللي البيانات المحترفين: تقسيم المشكلة الكبيرة إلى خطوات صغيرة مسماة.</p>\n<h2>CTE أم استعلام فرعي؟</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>CTE</th><th>استعلام فرعي</th></tr></thead><tbody><tr><td>يُقرأ من الأعلى للأسفل</td><td>يُقرأ من الداخل للخارج</td></tr><tr><td>يمكن استخدامه أكثر من مرة في نفس الاستعلام</td><td>يجب تكراره</td></tr><tr><td>اسم يوثّق الهدف</td><td>بلا اسم</td></tr><tr><td>أفضل للاستعلامات الطويلة</td><td>مناسب للحالات القصيرة</td></tr></tbody></table></div>\n<h2>CTE العودي (Recursive)</h2>\n<p>ميزة متقدمة وقوية: CTE يستدعي نفسه. مثالي للبيانات الهرمية مثل شجرة الموظفين:</p>\n<div class=\"code-block src\"><span class=\"code-label\">SQL</span><pre dir=\"ltr\"><code>WITH RECURSIVE chain AS (\n  SELECT id, name, manager_id, 0 AS level\n  FROM employees\n  WHERE manager_id IS NULL\n\n  UNION ALL\n\n  SELECT e.id, e.name, e.manager_id, chain.level + 1\n  FROM employees e\n  JOIN chain ON e.manager_id = chain.id\n)\nSELECT level, name\nFROM chain\nORDER BY level, id;</code></pre></div>\n<div class=\"code-block out sql-out\"><span class=\"code-label\">النتيجة</span><div class=\"table-wrap\"><table class=\"res-table\"><thead><tr><th>level</th><th>name</th></tr></thead><tbody><tr><td class=\"\">0</td><td class=\"\">منصور</td></tr><tr><td class=\"\">1</td><td class=\"\">ريم</td></tr><tr><td class=\"\">1</td><td class=\"\">سلطان</td></tr><tr><td class=\"\">1</td><td class=\"\">جود</td></tr><tr><td class=\"\">2</td><td class=\"\">ياسر</td></tr><tr><td class=\"\">2</td><td class=\"\">دانة</td></tr><tr><td class=\"\">2</td><td class=\"\">لمى</td></tr><tr><td class=\"\">2</td><td class=\"\">بدر</td></tr></tbody></table></div></div>\n<ol><li><strong>الجزء الأساسي:</strong> المدير الأعلى (مستوى 0).</li><li><strong>الجزء العودي:</strong> من مديرهم في النتيجة السابقة، فيصبحون المستوى التالي.</li><li>يتكرر حتى لا يوجد صفوف جديدة.</li></ol>\n<p>ويُستخدم أيضاً لتوليد سلاسل أرقام وتواريخ:</p>\n<div class=\"code-block src\"><span class=\"code-label\">SQL</span><pre dir=\"ltr\"><code>WITH RECURSIVE nums(n) AS (\n  SELECT 1\n  UNION ALL\n  SELECT n + 1 FROM nums WHERE n &lt; 5\n)\nSELECT n, n * n AS square FROM nums;</code></pre></div>\n<div class=\"code-block out sql-out\"><span class=\"code-label\">النتيجة</span><div class=\"table-wrap\"><table class=\"res-table\"><thead><tr><th>n</th><th>square</th></tr></thead><tbody><tr><td class=\"\">1</td><td class=\"\">1</td></tr><tr><td class=\"\">2</td><td class=\"\">4</td></tr><tr><td class=\"\">3</td><td class=\"\">9</td></tr><tr><td class=\"\">4</td><td class=\"\">16</td></tr><tr><td class=\"\">5</td><td class=\"\">25</td></tr></tbody></table></div></div>\n<h2>ملخص الدرس</h2>\n<ul><li><code dir=\"ltr\">WITH اسم AS (استعلام)</code> يعطي استعلاماً فرعياً اسماً نستخدمه كجدول.</li><li>يمكن تعريف عدة CTEs مفصولة بفواصل، وكل واحد يستخدم ما قبله.</li><li><code dir=\"ltr\">WITH RECURSIVE</code> للبيانات الهرمية وتوليد السلاسل.</li></ul>",
   "exercise": {
    "prompt": "<p>باستخدام <strong>CTE</strong> اسمه <code dir=\"ltr\">category_stats</code> يحسب لكل تصنيف عدد المنتجات <code dir=\"ltr\">products</code> ومتوسط السعر <code dir=\"ltr\">avg_price</code>، اعرض التصنيفات التي متوسط سعرها <strong>أعلى من 200</strong>، مرتبة حسب <code dir=\"ltr\">avg_price</code> تنازلياً.</p>",
    "starter": "WITH category_stats AS (\n\n)\nSELECT",
    "expected": "category | products | avg_price\nإلكترونيات | 4 | 1182.5\nإكسسوارات | 2 | 265\nملابس | 2 | 210",
    "solution": "WITH category_stats AS (\n  SELECT category,\n         COUNT(*) AS products,\n         AVG(price) AS avg_price\n  FROM products\n  GROUP BY category\n)\nSELECT category, products, avg_price\nFROM category_stats\nWHERE avg_price > 200\nORDER BY avg_price DESC;"
   },
   "quiz": [
    {
     "q": "ما الميزة الأساسية للـ CTE على الاستعلام الفرعي؟",
     "o": [
      "يجعل الاستعلام مقروءاً من الأعلى للأسفل بأسماء واضحة للخطوات",
      "أسرع دائماً",
      "يعدّل الجداول"
     ],
     "a": 0,
     "why": "الـ CTE تنظيم وتوضيح للاستعلام."
    },
    {
     "q": "كيف تفصل بين عدة CTEs؟",
     "o": [
      "بفاصلة بعد كل واحد",
      "بفاصلة منقوطة",
      "بكلمة WITH قبل كل واحد"
     ],
     "a": 0,
     "why": "نكتب WITH مرة واحدة، ثم CTEs مفصولة بفواصل."
    },
    {
     "q": "متى نستخدم WITH RECURSIVE؟",
     "o": [
      "لترتيب النتائج",
      "للبيانات الهرمية مثل شجرة الموظفين، أو لتوليد سلاسل",
      "لحذف التكرار"
     ],
     "a": 1,
     "why": "CTE العودي يبني النتيجة مستوى بعد مستوى."
    }
   ]
  },
  {
   "body": "<h2>الشروط داخل الاستعلام</h2>\n<p><code dir=\"ltr\">CASE</code> هي &quot;if/else&quot; في SQL: تُرجع قيمة حسب شروط، وتُستخدم داخل <code dir=\"ltr\">SELECT</code> أو <code dir=\"ltr\">ORDER BY</code> أو حتى داخل دوال التجميع.</p>\n<h2>الصيغة</h2>\n<div class=\"code-block src\"><span class=\"code-label\">SQL</span><pre dir=\"ltr\"><code>SELECT name, price,\n       CASE\n         WHEN price &gt;= 1000 THEN &#x27;فاخر&#x27;\n         WHEN price &gt;= 200 THEN &#x27;متوسط&#x27;\n         ELSE &#x27;اقتصادي&#x27;\n       END AS segment\nFROM products\nORDER BY price DESC;</code></pre></div>\n<div class=\"code-block out sql-out\"><span class=\"code-label\">النتيجة</span><div class=\"table-wrap\"><table class=\"res-table\"><thead><tr><th>name</th><th>price</th><th>segment</th></tr></thead><tbody><tr><td class=\"\">لابتوب</td><td class=\"\">3500</td><td class=\"\">فاخر</td></tr><tr><td class=\"\">ساعة ذكية</td><td class=\"\">900</td><td class=\"\">متوسط</td></tr><tr><td class=\"\">نظارة</td><td class=\"\">350</td><td class=\"\">متوسط</td></tr><tr><td class=\"\">حذاء رياضي</td><td class=\"\">300</td><td class=\"\">متوسط</td></tr><tr><td class=\"\">سماعة</td><td class=\"\">250</td><td class=\"\">متوسط</td></tr><tr><td class=\"\">حقيبة</td><td class=\"\">180</td><td class=\"\">اقتصادي</td></tr><tr><td class=\"\">قميص</td><td class=\"\">120</td><td class=\"\">اقتصادي</td></tr><tr><td class=\"\">شاحن</td><td class=\"\">80</td><td class=\"\">اقتصادي</td></tr><tr><td class=\"\">كتاب طبخ</td><td class=\"\">70</td><td class=\"\">اقتصادي</td></tr><tr><td class=\"\">رواية</td><td class=\"\">45</td><td class=\"\">اقتصادي</td></tr></tbody></table></div></div>\n<ul><li>تُفحص الشروط <strong>بالترتيب</strong>، وأول شرط صحيح يُستخدم.</li><li><code dir=\"ltr\">ELSE</code> للحالة الافتراضية. بدونها تكون النتيجة <code dir=\"ltr\">NULL</code> إذا لم يتحقق أي شرط.</li><li><code dir=\"ltr\">END</code> تغلق التعبير، ثم نعطيه اسماً بـ <code dir=\"ltr\">AS</code>.</li></ul>\n<h2>الصيغة المختصرة</h2>\n<p>عند مقارنة عمود واحد بقيم محددة:</p>\n<div class=\"code-block src\"><span class=\"code-label\">SQL</span><pre dir=\"ltr\"><code>SELECT id,\n       CASE status\n         WHEN &#x27;مكتمل&#x27; THEN &#x27;✅&#x27;\n         WHEN &#x27;ملغي&#x27; THEN &#x27;❌&#x27;\n         ELSE &#x27;⏳&#x27;\n       END AS icon\nFROM orders\nWHERE id &lt;= 106;</code></pre></div>\n<div class=\"code-block out sql-out\"><span class=\"code-label\">النتيجة</span><div class=\"table-wrap\"><table class=\"res-table\"><thead><tr><th>id</th><th>icon</th></tr></thead><tbody><tr><td class=\"\">101</td><td class=\"\">✅</td></tr><tr><td class=\"\">102</td><td class=\"\">✅</td></tr><tr><td class=\"\">103</td><td class=\"\">✅</td></tr><tr><td class=\"\">104</td><td class=\"\">❌</td></tr><tr><td class=\"\">105</td><td class=\"\">✅</td></tr><tr><td class=\"\">106</td><td class=\"\">⏳</td></tr></tbody></table></div></div>\n<h2>CASE مع التجميع: الجداول المحورية</h2>\n<p>من أقوى الاستخدامات: عدّ أو جمع حسب فئات في صف واحد:</p>\n<div class=\"code-block src\"><span class=\"code-label\">SQL</span><pre dir=\"ltr\"><code>SELECT\n  COUNT(*) AS total,\n  SUM(CASE WHEN status = &#x27;مكتمل&#x27; THEN 1 ELSE 0 END) AS completed,\n  SUM(CASE WHEN status = &#x27;ملغي&#x27; THEN 1 ELSE 0 END) AS cancelled,\n  SUM(CASE WHEN status = &#x27;قيد التنفيذ&#x27; THEN 1 ELSE 0 END) AS pending\nFROM orders;</code></pre></div>\n<div class=\"code-block out sql-out\"><span class=\"code-label\">النتيجة</span><div class=\"table-wrap\"><table class=\"res-table\"><thead><tr><th>total</th><th>completed</th><th>cancelled</th><th>pending</th></tr></thead><tbody><tr><td class=\"\">10</td><td class=\"\">7</td><td class=\"\">1</td><td class=\"\">2</td></tr></tbody></table></div></div>\n<p>ومع GROUP BY نحصل على جدول محوري كامل:</p>\n<div class=\"code-block src\"><span class=\"code-label\">SQL</span><pre dir=\"ltr\"><code>SELECT department,\n       SUM(CASE WHEN salary &gt;= 12000 THEN 1 ELSE 0 END) AS senior,\n       SUM(CASE WHEN salary &lt; 12000 THEN 1 ELSE 0 END) AS junior\nFROM employees\nGROUP BY department\nORDER BY department;</code></pre></div>\n<div class=\"code-block out sql-out\"><span class=\"code-label\">النتيجة</span><div class=\"table-wrap\"><table class=\"res-table\"><thead><tr><th>department</th><th>senior</th><th>junior</th></tr></thead><tbody><tr><td class=\"\">الإدارة</td><td class=\"\">1</td><td class=\"\">0</td></tr><tr><td class=\"\">التقنية</td><td class=\"\">3</td><td class=\"\">0</td></tr><tr><td class=\"\">الدعم</td><td class=\"\">0</td><td class=\"\">1</td></tr><tr><td class=\"\">المبيعات</td><td class=\"\">1</td><td class=\"\">2</td></tr></tbody></table></div></div>\n<h2>CASE في الترتيب المخصص</h2>\n<p>ترتيب الحالات حسب أهميتها وليس أبجدياً:</p>\n<div class=\"code-block src\"><span class=\"code-label\">SQL</span><pre dir=\"ltr\"><code>SELECT id, status\nFROM orders\nORDER BY CASE status\n           WHEN &#x27;قيد التنفيذ&#x27; THEN 1\n           WHEN &#x27;مكتمل&#x27; THEN 2\n           ELSE 3\n         END, id\nLIMIT 4;</code></pre></div>\n<div class=\"code-block out sql-out\"><span class=\"code-label\">النتيجة</span><div class=\"table-wrap\"><table class=\"res-table\"><thead><tr><th>id</th><th>status</th></tr></thead><tbody><tr><td class=\"\">106</td><td class=\"\">قيد التنفيذ</td></tr><tr><td class=\"\">108</td><td class=\"\">قيد التنفيذ</td></tr><tr><td class=\"\">101</td><td class=\"\">مكتمل</td></tr><tr><td class=\"\">102</td><td class=\"\">مكتمل</td></tr></tbody></table></div></div>\n<h2>دوال مختصرة مرتبطة</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>الدالة</th><th>تعادل</th></tr></thead><tbody><tr><td><code dir=\"ltr\">COALESCE(a, b)</code></td><td>أول قيمة ليست NULL</td></tr><tr><td><code dir=\"ltr\">NULLIF(a, b)</code></td><td>NULL إذا تساوتا، وإلا a</td></tr><tr><td><code dir=\"ltr\">IIF(cond, a, b)</code> في SQLite و SQL Server</td><td>CASE بشرط واحد</td></tr></tbody></table></div>\n<div class=\"code-block src\"><span class=\"code-label\">SQL</span><pre dir=\"ltr\"><code>SELECT name, COALESCE(city, &#x27;غير محدد&#x27;) AS city\nFROM customers\nWHERE id &gt;= 7;</code></pre></div>\n<div class=\"code-block out sql-out\"><span class=\"code-label\">النتيجة</span><div class=\"table-wrap\"><table class=\"res-table\"><thead><tr><th>name</th><th>city</th></tr></thead><tbody><tr><td class=\"\">عمر</td><td class=\"\">الرياض</td></tr><tr><td class=\"\">هند</td><td class=\"\">غير محدد</td></tr></tbody></table></div></div>\n<h2>ملخص الدرس</h2>\n<ul><li><code dir=\"ltr\">CASE WHEN شرط THEN قيمة ... ELSE قيمة END</code> تُرجع قيمة حسب الشروط بالترتيب.</li><li><code dir=\"ltr\">SUM(CASE WHEN ... THEN 1 ELSE 0 END)</code> لعدّ الفئات في أعمدة (جدول محوري).</li><li>يمكن استخدام CASE في ORDER BY لترتيب مخصص.</li><li><code dir=\"ltr\">COALESCE</code> لاستبدال NULL بقيمة افتراضية.</li></ul>",
   "exercise": {
    "prompt": "<p>صنّف الموظفين حسب <strong>سنوات الخبرة</strong> في الشركة اعتماداً على <code dir=\"ltr\">hire_date</code>:</p>\n<ul><li>قبل <code dir=\"ltr\">2021-01-01</code>: <code dir=\"ltr\">خبير</code></li><li>من <code dir=\"ltr\">2021-01-01</code> حتى قبل <code dir=\"ltr\">2023-01-01</code>: <code dir=\"ltr\">متوسط</code></li><li>غير ذلك: <code dir=\"ltr\">جديد</code></li></ul>\n<p>اعرض <code dir=\"ltr\">name</code> و <code dir=\"ltr\">hire_date</code> والتصنيف باسم <code dir=\"ltr\">level</code>، مرتبين حسب <code dir=\"ltr\">hire_date</code>.</p>\n<p>(التواريخ نصوص بصيغة YYYY-MM-DD، فالمقارنة <code dir=\"ltr\">hire_date &lt; &#x27;2021-01-01&#x27;</code> تعمل بشكل صحيح.)</p>",
    "starter": "SELECT name, hire_date\nFROM employees\nORDER BY hire_date;",
    "expected": "name | hire_date | level\nمنصور | 2019-01-10 | خبير\nريم | 2020-03-01 | خبير\nسلطان | 2020-09-05 | خبير\nياسر | 2021-06-15 | متوسط\nدانة | 2022-01-20 | متوسط\nلمى | 2023-02-11 | جديد\nبدر | 2023-08-01 | جديد\nجود | 2024-04-14 | جديد",
    "solution": "SELECT name, hire_date,\n       CASE\n         WHEN hire_date < '2021-01-01' THEN 'خبير'\n         WHEN hire_date < '2023-01-01' THEN 'متوسط'\n         ELSE 'جديد'\n       END AS level\nFROM employees\nORDER BY hire_date;"
   },
   "quiz": [
    {
     "q": "ماذا تُرجع CASE إذا لم يتحقق أي شرط ولم يوجد ELSE؟",
     "o": [
      "0",
      "NULL",
      "خطأ"
     ],
     "a": 1,
     "why": "بدون ELSE تكون النتيجة الافتراضية NULL."
    },
    {
     "q": "ما ناتج <code dir=\"ltr\">SUM(CASE WHEN x &gt; 5 THEN 1 ELSE 0 END)</code>؟",
     "o": [
      "عدد الصفوف التي فيها x أكبر من 5",
      "مجموع قيم x",
      "أكبر قيمة لـ x"
     ],
     "a": 0,
     "why": "كل صف يحقق الشرط يضيف 1."
    },
    {
     "q": "ما وظيفة <code dir=\"ltr\">COALESCE(phone, &#x27;لا يوجد&#x27;)</code>؟",
     "o": [
      "تُرجع phone، أو &#x27;لا يوجد&#x27; إذا كان NULL",
      "تحذف الصفوف التي phone فيها NULL",
      "تدمج النصين"
     ],
     "a": 0,
     "why": "COALESCE تُرجع أول قيمة ليست NULL."
    }
   ]
  }
 ],
 [
  {
   "body": "<h2>إضافة بيانات جديدة</h2>\n<p>حتى الآن كنا نقرأ البيانات فقط. الآن نتعلم تعديلها، بدءاً بإضافة صفوف جديدة بـ <code dir=\"ltr\">INSERT</code>.</p>\n<div class=\"callout tip\">💡 تذكير: قاعدة بيانات التمرين تبدأ من جديد في كل تشغيل، فجرّب بحرية.</div>\n<h2>إدخال صف واحد</h2>\n<div class=\"code-block src\"><span class=\"code-label\">SQL</span><pre dir=\"ltr\"><code>INSERT INTO products (name, category, price, stock)\nVALUES (&#x27;ماوس&#x27;, &#x27;إلكترونيات&#x27;, 95, 30);\n\nSELECT id, name, price, stock FROM products WHERE name = &#x27;ماوس&#x27;;</code></pre></div>\n<div class=\"code-block out sql-out\"><span class=\"code-label\">النتيجة</span><div class=\"table-wrap\"><table class=\"res-table\"><thead><tr><th>id</th><th>name</th><th>price</th><th>stock</th></tr></thead><tbody><tr><td class=\"\">11</td><td class=\"\">ماوس</td><td class=\"\">95</td><td class=\"\">30</td></tr></tbody></table></div></div>\n<ul><li><code dir=\"ltr\">INSERT INTO الجدول (الأعمدة)</code> تحدد أين نُدخل.</li><li><code dir=\"ltr\">VALUES (...)</code> القيم بنفس ترتيب الأعمدة.</li><li>لم نحدد <code dir=\"ltr\">id</code>، فأعطته قاعدة البيانات تلقائياً الرقم التالي <code dir=\"ltr\">11</code> لأنه مفتاح أساسي رقمي.</li></ul>\n<h2>دائماً حدد الأعمدة</h2>\n<p>يمكن حذف قائمة الأعمدة وإعطاء قيم لكل الأعمدة بالترتيب:</p>\n<div class=\"code-block src\"><span class=\"code-label\">SQL</span><pre dir=\"ltr\"><code>INSERT INTO customers VALUES (9, &#x27;رياض&#x27;, &#x27;تبوك&#x27;, &#x27;riyad@mail.com&#x27;, &#x27;2025-01-01&#x27;);</code></pre></div>\n<p>لكن هذا هش: إذا أُضيف عمود جديد للجدول يوماً ما، سيفشل الاستعلام. <strong>حدد الأعمدة دائماً</strong>.</p>\n<h2>الأعمدة غير المذكورة</h2>\n<p>تأخذ قيمتها <strong>الافتراضية</strong> (<code dir=\"ltr\">DEFAULT</code>) إن وُجدت، وإلا <code dir=\"ltr\">NULL</code>:</p>\n<div class=\"code-block src\"><span class=\"code-label\">SQL</span><pre dir=\"ltr\"><code>INSERT INTO products (name, price) VALUES (&#x27;ملصقات&#x27;, 10);\n\nSELECT name, category, price, stock FROM products WHERE id = 11;</code></pre></div>\n<div class=\"code-block out sql-out\"><span class=\"code-label\">النتيجة</span><div class=\"table-wrap\"><table class=\"res-table\"><thead><tr><th>name</th><th>category</th><th>price</th><th>stock</th></tr></thead><tbody><tr><td class=\"\">ملصقات</td><td class=\"null\">NULL</td><td class=\"\">10</td><td class=\"\">0</td></tr></tbody></table></div></div>\n<p><code dir=\"ltr\">category</code> أصبحت NULL، و <code dir=\"ltr\">stock</code> أخذت الافتراضي <code dir=\"ltr\">0</code> المعرّف في تصميم الجدول.</p>\n<h2>إدخال عدة صفوف</h2>\n<div class=\"code-block src\"><span class=\"code-label\">SQL</span><pre dir=\"ltr\"><code>INSERT INTO customers (name, city, email, joined) VALUES\n  (&#x27;رياض&#x27;, &#x27;تبوك&#x27;, &#x27;riyad@mail.com&#x27;, &#x27;2025-07-01&#x27;),\n  (&#x27;شهد&#x27;, &#x27;أبها&#x27;, &#x27;shahd@mail.com&#x27;, &#x27;2025-07-02&#x27;);\n\nSELECT id, name, city FROM customers WHERE id &gt; 7;</code></pre></div>\n<div class=\"code-block out sql-out\"><span class=\"code-label\">النتيجة</span><div class=\"table-wrap\"><table class=\"res-table\"><thead><tr><th>id</th><th>name</th><th>city</th></tr></thead><tbody><tr><td class=\"\">8</td><td class=\"\">هند</td><td class=\"null\">NULL</td></tr><tr><td class=\"\">9</td><td class=\"\">رياض</td><td class=\"\">تبوك</td></tr><tr><td class=\"\">10</td><td class=\"\">شهد</td><td class=\"\">أبها</td></tr></tbody></table></div></div>\n<p>إدخال عدة صفوف في عبارة واحدة أسرع بكثير من عبارات منفصلة.</p>\n<h2>القيود تحمي البيانات</h2>\n<div class=\"code-block src\"><span class=\"code-label\">SQL</span><pre dir=\"ltr\"><code>INSERT INTO customers (name, email) VALUES (&#x27;مكرر&#x27;, &#x27;sara@mail.com&#x27;);</code></pre></div>\n<div class=\"code-block out sql-out\"><span class=\"code-label\">النتيجة</span><div class=\"table-wrap\"><div class=\"sql-err\" dir=\"ltr\">⚠️ UNIQUE constraint failed: customers.email</div></div></div>\n<p>العمود <code dir=\"ltr\">email</code> معرّف بـ <code dir=\"ltr\">UNIQUE</code>، فرفضت قاعدة البيانات البريد المكرر. وكذلك <code dir=\"ltr\">NOT NULL</code> يمنع إدخال صف بلا اسم. هذه <strong>القيود</strong> خط الدفاع الأول ضد البيانات الخاطئة، وسنتعلم تعريفها في الوحدة 7.</p>\n<h2>الإدخال من استعلام</h2>\n<p>يمكن إدخال نتيجة SELECT مباشرة:</p>\n<div class=\"code-block src\"><span class=\"code-label\">SQL</span><pre dir=\"ltr\"><code>CREATE TABLE vip_customers (customer_id INTEGER, name TEXT);\n\nINSERT INTO vip_customers (customer_id, name)\nSELECT c.id, c.name\nFROM customers c\nWHERE (SELECT COUNT(*) FROM orders o WHERE o.customer_id = c.id) &gt;= 2;\n\nSELECT * FROM vip_customers;</code></pre></div>\n<div class=\"code-block out sql-out\"><span class=\"code-label\">النتيجة</span><div class=\"table-wrap\"><table class=\"res-table\"><thead><tr><th>customer_id</th><th>name</th></tr></thead><tbody><tr><td class=\"\">1</td><td class=\"\">أحمد</td></tr><tr><td class=\"\">2</td><td class=\"\">سارة</td></tr><tr><td class=\"\">4</td><td class=\"\">نورة</td></tr></tbody></table></div></div>\n<h2>ملخص الدرس</h2>\n<ul><li><code dir=\"ltr\">INSERT INTO جدول (أعمدة) VALUES (قيم)</code> لإضافة صف.</li><li>حدد الأعمدة دائماً، والأعمدة المحذوفة تأخذ DEFAULT أو NULL.</li><li>يمكن إدخال عدة صفوف في عبارة واحدة، أو إدخال نتيجة SELECT.</li><li>القيود مثل UNIQUE و NOT NULL ترفض البيانات المخالفة.</li></ul>",
   "exercise": {
    "prompt": "<p>أضف طلباً جديداً للعميلة <strong>ليلى</strong> (رقمها 6):</p>\n<ol><li>أدخل في <code dir=\"ltr\">orders</code> صفاً: <code dir=\"ltr\">id</code> = <code dir=\"ltr\">111</code>، <code dir=\"ltr\">customer_id</code> = <code dir=\"ltr\">6</code>، <code dir=\"ltr\">order_date</code> = <code dir=\"ltr\">2025-07-10</code>، <code dir=\"ltr\">status</code> = <code dir=\"ltr\">قيد التنفيذ</code>.</li><li>أدخل في <code dir=\"ltr\">order_items</code> سطرين للطلب 111 <strong>في عبارة واحدة</strong>: المنتج <code dir=\"ltr\">2</code> بكمية <code dir=\"ltr\">1</code> وسعر <code dir=\"ltr\">250</code>، والمنتج <code dir=\"ltr\">6</code> بكمية <code dir=\"ltr\">3</code> وسعر <code dir=\"ltr\">45</code>.</li><li>اعرض <code dir=\"ltr\">order_id</code> و <code dir=\"ltr\">product_id</code> و <code dir=\"ltr\">quantity</code> لأسطر الطلب 111 مرتبة حسب <code dir=\"ltr\">product_id</code>.</li></ol>",
    "starter": "-- 1) الطلب\n\n-- 2) الأسطر\n\n-- 3) التحقق",
    "expected": "order_id | product_id | quantity\n111 | 2 | 1\n111 | 6 | 3",
    "solution": "INSERT INTO orders (id, customer_id, order_date, status)\nVALUES (111, 6, '2025-07-10', 'قيد التنفيذ');\n\nINSERT INTO order_items (order_id, product_id, quantity, unit_price) VALUES\n  (111, 2, 1, 250),\n  (111, 6, 3, 45);\n\nSELECT order_id, product_id, quantity\nFROM order_items\nWHERE order_id = 111\nORDER BY product_id;"
   },
   "quiz": [
    {
     "q": "لماذا يُفضّل تحديد أسماء الأعمدة في INSERT؟",
     "o": [
      "حتى لا يفشل الاستعلام أو يُدخل قيماً خاطئة إذا تغيّرت بنية الجدول",
      "لأنه إلزامي دائماً",
      "لتسريع الإدخال"
     ],
     "a": 0,
     "why": "بدون الأعمدة يعتمد الإدخال على ترتيبها الحالي في الجدول."
    },
    {
     "q": "ما قيمة عمود لم يُذكر في INSERT وليس له DEFAULT؟",
     "o": [
      "0",
      "NULL",
      "خطأ دائماً"
     ],
     "a": 1,
     "why": "يأخذ NULL، إلا إذا كان NOT NULL فيُرفض الإدخال."
    },
    {
     "q": "ماذا يحدث عند إدخال قيمة مكررة في عمود UNIQUE؟",
     "o": [
      "ترفض قاعدة البيانات الإدخال بخطأ",
      "تستبدل القيمة القديمة",
      "تُدخل الصف وتتجاهل القيد"
     ],
     "a": 0,
     "why": "القيود تحمي سلامة البيانات."
    }
   ]
  },
  {
   "body": "<h2>تعديل البيانات الموجودة</h2>\n<p><code dir=\"ltr\">UPDATE</code> تغيّر قيم أعمدة في صفوف موجودة:</p>\n<div class=\"code-block src\"><span class=\"code-label\">SQL</span><pre dir=\"ltr\"><code>UPDATE products\nSET price = 270\nWHERE id = 2;\n\nSELECT name, price FROM products WHERE id = 2;</code></pre></div>\n<div class=\"code-block out sql-out\"><span class=\"code-label\">النتيجة</span><div class=\"table-wrap\"><table class=\"res-table\"><thead><tr><th>name</th><th>price</th></tr></thead><tbody><tr><td class=\"\">سماعة</td><td class=\"\">270</td></tr></tbody></table></div></div>\n<ul><li><code dir=\"ltr\">UPDATE الجدول</code> أي جدول نعدّل.</li><li><code dir=\"ltr\">SET عمود = قيمة</code> ماذا نغيّر.</li><li><code dir=\"ltr\">WHERE</code> <strong>أي الصفوف</strong> نعدّل.</li></ul>\n<h2>أخطر خطأ في SQL</h2>\n<div class=\"callout warn\">⚠️ **<code dir=\"ltr\">UPDATE</code> بدون <code dir=\"ltr\">WHERE</code> يعدّل كل صفوف الجدول!** كتابة <code dir=\"ltr\">UPDATE products SET price = 0;</code> تجعل كل المنتجات مجانية في لحظة. قبل تشغيل أي UPDATE على بيانات حقيقية، شغّل <code dir=\"ltr\">SELECT</code> بنفس الـ WHERE أولاً لترى أي صفوف ستتأثر.</div>\n<div class=\"code-block src\"><span class=\"code-label\">SQL</span><pre dir=\"ltr\"><code>SELECT COUNT(*) AS will_change FROM products WHERE category = &#x27;كتب&#x27;;</code></pre></div>\n<div class=\"code-block out sql-out\"><span class=\"code-label\">النتيجة</span><div class=\"table-wrap\"><table class=\"res-table\"><thead><tr><th>will_change</th></tr></thead><tbody><tr><td class=\"\">2</td></tr></tbody></table></div></div>\n<h2>تعديل عدة أعمدة وبقيم محسوبة</h2>\n<div class=\"code-block src\"><span class=\"code-label\">SQL</span><pre dir=\"ltr\"><code>UPDATE products\nSET price = price * 0.8,\n    stock = stock + 10\nWHERE category = &#x27;كتب&#x27;;\n\nSELECT name, price, stock FROM products WHERE category = &#x27;كتب&#x27;;</code></pre></div>\n<div class=\"code-block out sql-out\"><span class=\"code-label\">النتيجة</span><div class=\"table-wrap\"><table class=\"res-table\"><thead><tr><th>name</th><th>price</th><th>stock</th></tr></thead><tbody><tr><td class=\"\">رواية</td><td class=\"\">36</td><td class=\"\">70</td></tr><tr><td class=\"\">كتاب طبخ</td><td class=\"\">56</td><td class=\"\">25</td></tr></tbody></table></div></div>\n<p>القيمة الجديدة يمكن أن تعتمد على القديمة: خصم 20% وزيادة المخزون 10 قطع.</p>\n<h2>التعديل بشروط مركبة</h2>\n<div class=\"code-block src\"><span class=\"code-label\">SQL</span><pre dir=\"ltr\"><code>UPDATE orders\nSET status = &#x27;متأخر&#x27;\nWHERE status = &#x27;قيد التنفيذ&#x27;\n  AND order_date &lt; &#x27;2025-04-01&#x27;;\n\nSELECT id, order_date, status FROM orders WHERE status IN (&#x27;متأخر&#x27;, &#x27;قيد التنفيذ&#x27;);</code></pre></div>\n<div class=\"code-block out sql-out\"><span class=\"code-label\">النتيجة</span><div class=\"table-wrap\"><table class=\"res-table\"><thead><tr><th>id</th><th>order_date</th><th>status</th></tr></thead><tbody><tr><td class=\"\">106</td><td class=\"\">2025-03-15</td><td class=\"\">متأخر</td></tr><tr><td class=\"\">108</td><td class=\"\">2025-04-11</td><td class=\"\">قيد التنفيذ</td></tr></tbody></table></div></div>\n<h2>التعديل باستعلام فرعي</h2>\n<div class=\"code-block src\"><span class=\"code-label\">SQL</span><pre dir=\"ltr\"><code>UPDATE products\nSET stock = stock - (\n  SELECT quantity FROM order_items oi\n  WHERE oi.product_id = products.id AND oi.order_id = 108\n)\nWHERE id IN (SELECT product_id FROM order_items WHERE order_id = 108);\n\nSELECT id, name, stock FROM products WHERE id IN (4, 5);</code></pre></div>\n<div class=\"code-block out sql-out\"><span class=\"code-label\">النتيجة</span><div class=\"table-wrap\"><table class=\"res-table\"><thead><tr><th>id</th><th>name</th><th>stock</th></tr></thead><tbody><tr><td class=\"\">4</td><td class=\"\">قميص</td><td class=\"\">23</td></tr><tr><td class=\"\">5</td><td class=\"\">حذاء رياضي</td><td class=\"\">7</td></tr></tbody></table></div></div>\n<p>خصمنا من مخزون كل منتج في الطلب 108 الكمية المطلوبة منه في هذا الطلب: القميص كان 25 والحذاء 8.</p>\n<h2>ملخص الدرس</h2>\n<ul><li><code dir=\"ltr\">UPDATE جدول SET عمود = قيمة WHERE شرط</code> لتعديل صفوف موجودة.</li><li>بدون WHERE يتعدّل كل الجدول، فاختبر الشرط بـ SELECT أولاً.</li><li>يمكن تعديل عدة أعمدة، وبقيم محسوبة من القيم الحالية أو من استعلام فرعي.</li></ul>",
   "exercise": {
    "prompt": "<p>المتجر يقدّم عرضاً على <strong>الإلكترونيات</strong> التي في المخزون أكثر من 10 قطع:</p>\n<ol><li>خفّض سعرها بنسبة <strong>10%</strong> (أي <code dir=\"ltr\">price * 0.9</code>).</li><li>اعرض <code dir=\"ltr\">name</code> و <code dir=\"ltr\">price</code> و <code dir=\"ltr\">stock</code> لكل منتجات الإلكترونيات، مرتبة حسب <code dir=\"ltr\">id</code>، لترى الفرق بين ما شمله العرض وما لم يشمله.</li></ol>",
    "starter": "-- 1) التعديل\n\n-- 2) التحقق",
    "expected": "name | price | stock\nلابتوب | 3150 | 12\nسماعة | 225 | 40\nشاحن | 80 | 0\nساعة ذكية | 900 | 5",
    "solution": "UPDATE products\nSET price = price * 0.9\nWHERE category = 'إلكترونيات'\n  AND stock > 10;\n\nSELECT name, price, stock\nFROM products\nWHERE category = 'إلكترونيات'\nORDER BY id;"
   },
   "quiz": [
    {
     "q": "ماذا يحدث عند تنفيذ <code dir=\"ltr\">UPDATE users SET active = 0;</code>؟",
     "o": [
      "خطأ لعدم وجود WHERE",
      "تتعدّل كل صفوف الجدول",
      "لا يحدث شيء"
     ],
     "a": 1,
     "why": "بدون WHERE يُطبَّق التعديل على كل الصفوف."
    },
    {
     "q": "ما الطريقة الآمنة قبل تشغيل UPDATE على بيانات حقيقية؟",
     "o": [
      "تشغيل SELECT بنفس شرط WHERE لرؤية الصفوف التي ستتأثر",
      "حذف الجدول أولاً",
      "تشغيل UPDATE مرتين"
     ],
     "a": 0,
     "why": "هكذا تتأكد أن الشرط يختار الصفوف الصحيحة فقط."
    },
    {
     "q": "ماذا يفعل <code dir=\"ltr\">SET stock = stock - 1</code>؟",
     "o": [
      "ينقص المخزون الحالي بمقدار 1",
      "يجعل المخزون -1",
      "خطأ"
     ],
     "a": 0,
     "why": "القيمة الجديدة تُحسب من القيمة الحالية."
    }
   ]
  },
  {
   "body": "<h2>حذف الصفوف</h2>\n<p><code dir=\"ltr\">DELETE</code> تحذف صفوفاً من الجدول:</p>\n<div class=\"code-block src\"><span class=\"code-label\">SQL</span><pre dir=\"ltr\"><code>DELETE FROM order_items\nWHERE order_id = 104;\n\nSELECT COUNT(*) AS items_left FROM order_items;</code></pre></div>\n<div class=\"code-block out sql-out\"><span class=\"code-label\">النتيجة</span><div class=\"table-wrap\"><table class=\"res-table\"><thead><tr><th>items_left</th></tr></thead><tbody><tr><td class=\"\">15</td></tr></tbody></table></div></div>\n<p>كان هناك 16 سطراً، وحذفنا سطر الطلب الملغي.</p>\n<div class=\"callout warn\">⚠️ مثل UPDATE تماماً: **<code dir=\"ltr\">DELETE FROM جدول;</code> بدون WHERE يحذف كل الصفوف!** والحذف في قواعد البيانات الحقيقية غالباً لا يمكن التراجع عنه إلا من نسخة احتياطية.</div>\n<h2>الحذف بشروط واستعلامات فرعية</h2>\n<p>حذف كل الطلبات الملغاة مع أسطرها:</p>\n<div class=\"code-block src\"><span class=\"code-label\">SQL</span><pre dir=\"ltr\"><code>DELETE FROM order_items\nWHERE order_id IN (SELECT id FROM orders WHERE status = &#x27;ملغي&#x27;);\n\nDELETE FROM orders\nWHERE status = &#x27;ملغي&#x27;;\n\nSELECT status, COUNT(*) AS orders FROM orders GROUP BY status ORDER BY orders DESC;</code></pre></div>\n<div class=\"code-block out sql-out\"><span class=\"code-label\">النتيجة</span><div class=\"table-wrap\"><table class=\"res-table\"><thead><tr><th>status</th><th>orders</th></tr></thead><tbody><tr><td class=\"\">مكتمل</td><td class=\"\">7</td></tr><tr><td class=\"\">قيد التنفيذ</td><td class=\"\">2</td></tr></tbody></table></div></div>\n<p>لاحظ الترتيب: حذفنا <strong>الأسطر أولاً</strong> ثم <strong>الطلبات</strong>. لو حذفنا الطلب أولاً لبقيت أسطره &quot;يتيمة&quot; تشير لطلب غير موجود. وسنرى في الوحدة القادمة كيف تمنع <strong>المفاتيح الأجنبية</strong> هذا تلقائياً.</p>\n<h2>DELETE مقابل TRUNCATE مقابل DROP</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>الأمر</th><th>ماذا يحذف</th><th>ملاحظة</th></tr></thead><tbody><tr><td><code dir=\"ltr\">DELETE FROM t WHERE ...</code></td><td>صفوفاً محددة</td><td>يمكن التحكم بالشرط</td></tr><tr><td><code dir=\"ltr\">DELETE FROM t</code></td><td>كل الصفوف، والجدول يبقى</td><td>بطيء مع الجداول الضخمة</td></tr><tr><td><code dir=\"ltr\">TRUNCATE TABLE t</code></td><td>كل الصفوف بسرعة</td><td>غير موجود في SQLite</td></tr><tr><td><code dir=\"ltr\">DROP TABLE t</code></td><td>الجدول كاملاً مع بنيته</td><td>لا يبقى شيء</td></tr></tbody></table></div>\n<div class=\"code-block src\"><span class=\"code-label\">SQL</span><pre dir=\"ltr\"><code>CREATE TABLE logs (msg TEXT);\nINSERT INTO logs VALUES (&#x27;a&#x27;), (&#x27;b&#x27;);\nDELETE FROM logs;\nSELECT COUNT(*) AS rows_after_delete FROM logs;\nDROP TABLE logs;\nSELECT COUNT(*) AS tables_named_logs FROM sqlite_master WHERE name = &#x27;logs&#x27;;</code></pre></div>\n<div class=\"code-block out sql-out\"><span class=\"code-label\">النتيجة</span><div class=\"table-wrap\"><table class=\"res-table\"><thead><tr><th>rows_after_delete</th></tr></thead><tbody><tr><td class=\"\">0</td></tr></tbody></table><table class=\"res-table\"><thead><tr><th>tables_named_logs</th></tr></thead><tbody><tr><td class=\"\">0</td></tr></tbody></table></div></div>\n<h2>الحذف الناعم (Soft Delete)</h2>\n<p>في التطبيقات الحقيقية كثيراً ما <strong>لا نحذف</strong> البيانات فعلياً، بل نضع علامة:</p>\n<div class=\"code-block src\"><span class=\"code-label\">SQL</span><pre dir=\"ltr\"><code>ALTER TABLE customers ADD COLUMN deleted_at TEXT;\n\nUPDATE customers SET deleted_at = &#x27;2025-07-15&#x27; WHERE id = 8;\n\nSELECT COUNT(*) AS active_customers FROM customers WHERE deleted_at IS NULL;</code></pre></div>\n<div class=\"code-block out sql-out\"><span class=\"code-label\">النتيجة</span><div class=\"table-wrap\"><table class=\"res-table\"><thead><tr><th>active_customers</th></tr></thead><tbody><tr><td class=\"\">7</td></tr></tbody></table></div></div>\n<p>المزايا: يمكن استعادة البيانات، وتبقى السجلات القديمة (مثل الفواتير) سليمة، ونحتفظ بتاريخ الحذف. والثمن: تذكّر إضافة <code dir=\"ltr\">WHERE deleted_at IS NULL</code> في الاستعلامات.</p>\n<h2>ملخص الدرس</h2>\n<ul><li><code dir=\"ltr\">DELETE FROM جدول WHERE شرط</code> لحذف صفوف محددة.</li><li>بدون WHERE يُحذف كل شيء، فاختبر بـ SELECT أولاً.</li><li>احذف الصفوف التابعة قبل الأساسية.</li><li><code dir=\"ltr\">DROP TABLE</code> يحذف الجدول نفسه، والحذف الناعم بديل آمن في التطبيقات.</li></ul>",
   "exercise": {
    "prompt": "<p>نظّف قاعدة البيانات من <strong>العملاء الذين لم يطلبوا أبداً</strong>:</p>\n<ol><li>احذف من <code dir=\"ltr\">customers</code> كل عميل ليس له أي طلب في <code dir=\"ltr\">orders</code> (استخدم <code dir=\"ltr\">NOT IN</code> أو <code dir=\"ltr\">NOT EXISTS</code>).</li><li>اعرض <code dir=\"ltr\">id</code> و <code dir=\"ltr\">name</code> للعملاء المتبقين مرتبين حسب <code dir=\"ltr\">id</code>.</li></ol>",
    "starter": "-- 1) الحذف\n\n-- 2) التحقق\nSELECT id, name FROM customers ORDER BY id;",
    "expected": "id | name\n1 | أحمد\n2 | سارة\n3 | خالد\n4 | نورة\n6 | ليلى\n7 | عمر",
    "solution": "DELETE FROM customers\nWHERE NOT EXISTS (\n  SELECT 1 FROM orders o WHERE o.customer_id = customers.id\n);\n\nSELECT id, name FROM customers ORDER BY id;"
   },
   "quiz": [
    {
     "q": "ماذا يفعل <code dir=\"ltr\">DELETE FROM products;</code>؟",
     "o": [
      "يحذف كل صفوف الجدول ويبقى الجدول فارغاً",
      "يحذف الجدول كاملاً",
      "خطأ لعدم وجود WHERE"
     ],
     "a": 0,
     "why": "لحذف الجدول نفسه نستخدم DROP TABLE."
    },
    {
     "q": "لماذا نحذف أسطر الطلب قبل الطلب نفسه؟",
     "o": [
      "حتى لا تبقى أسطر تشير إلى طلب غير موجود",
      "لأن SQL تشترط ذلك دائماً",
      "لتسريع الحذف"
     ],
     "a": 0,
     "why": "الصفوف التابعة يجب أن تُحذف قبل الصف الذي تعتمد عليه."
    },
    {
     "q": "ما الحذف الناعم (Soft Delete)؟",
     "o": [
      "حذف بطيء",
      "وضع علامة مثل deleted_at بدلاً من حذف الصف فعلياً",
      "حذف الجدول مؤقتاً"
     ],
     "a": 1,
     "why": "يتيح استعادة البيانات والحفاظ على السجلات القديمة."
    }
   ]
  }
 ],
 [
  {
   "body": "<h2>بناء الجداول بنفسك</h2>\n<p>حتى الآن استخدمنا جداول جاهزة. في هذه الوحدة نتعلم <strong>تصميم</strong> قاعدة البيانات وإنشاءها، وهي مهارة تفرّق بين من يكتب استعلامات ومن يبني أنظمة.</p>\n<h2>CREATE TABLE</h2>\n<div class=\"code-block src\"><span class=\"code-label\">SQL</span><pre dir=\"ltr\"><code>CREATE TABLE courses (\n  id INTEGER PRIMARY KEY,\n  title TEXT NOT NULL,\n  level TEXT DEFAULT &#x27;مبتدئ&#x27;,\n  hours INTEGER\n);\n\nINSERT INTO courses (title, hours) VALUES (&#x27;SQL للمبتدئين&#x27;, 30);\nSELECT * FROM courses;</code></pre></div>\n<div class=\"code-block out sql-out\"><span class=\"code-label\">النتيجة</span><div class=\"table-wrap\"><table class=\"res-table\"><thead><tr><th>id</th><th>title</th><th>level</th><th>hours</th></tr></thead><tbody><tr><td class=\"\">1</td><td class=\"\">SQL للمبتدئين</td><td class=\"\">مبتدئ</td><td class=\"\">30</td></tr></tbody></table></div></div>\n<p>لكل عمود: <strong>اسم</strong>، ثم <strong>نوع</strong>، ثم <strong>قيود</strong> اختيارية.</p>\n<h2>القيود (Constraints)</h2>\n<p>القيود قواعد تفرضها قاعدة البيانات نفسها، فلا يمكن لأي تطبيق أو مستخدم كسرها:</p>\n<div class=\"table-wrap\"><table><thead><tr><th>القيد</th><th>يضمن</th></tr></thead><tbody><tr><td><code dir=\"ltr\">PRIMARY KEY</code></td><td>قيمة فريدة وغير فارغة تميّز كل صف</td></tr><tr><td><code dir=\"ltr\">NOT NULL</code></td><td>العمود لا يكون فارغاً</td></tr><tr><td><code dir=\"ltr\">UNIQUE</code></td><td>لا تتكرر القيمة في العمود</td></tr><tr><td><code dir=\"ltr\">DEFAULT قيمة</code></td><td>قيمة تلقائية إذا لم تُعطَ قيمة</td></tr><tr><td><code dir=\"ltr\">CHECK (شرط)</code></td><td>القيمة تحقق شرطاً معيناً</td></tr><tr><td><code dir=\"ltr\">REFERENCES</code></td><td>القيمة موجودة في جدول آخر (الدرس القادم)</td></tr></tbody></table></div>\n<h2>CHECK: قواعد العمل في قاعدة البيانات</h2>\n<div class=\"code-block src\"><span class=\"code-label\">SQL</span><pre dir=\"ltr\"><code>CREATE TABLE accounts (\n  id INTEGER PRIMARY KEY,\n  owner TEXT NOT NULL,\n  balance REAL NOT NULL CHECK (balance &gt;= 0),\n  type TEXT CHECK (type IN (&#x27;جاري&#x27;, &#x27;توفير&#x27;))\n);\n\nINSERT INTO accounts (owner, balance, type) VALUES (&#x27;سعاد&#x27;, 500, &#x27;جاري&#x27;);\nINSERT INTO accounts (owner, balance, type) VALUES (&#x27;مازن&#x27;, -100, &#x27;جاري&#x27;);</code></pre></div>\n<div class=\"code-block out sql-out\"><span class=\"code-label\">النتيجة</span><div class=\"table-wrap\"><div class=\"sql-err\" dir=\"ltr\">⚠️ CHECK constraint failed: balance &gt;= 0</div></div></div>\n<p>الصف الثاني رُفض لأن الرصيد سالب. لو اعتمدنا على كود التطبيق وحده للتحقق، قد ينسى مطور يوماً ما، أما القيد في قاعدة البيانات فلا ينسى أبداً.</p>\n<h2>تعديل بنية الجدول: ALTER TABLE</h2>\n<div class=\"code-block src\"><span class=\"code-label\">SQL</span><pre dir=\"ltr\"><code>CREATE TABLE notes (id INTEGER PRIMARY KEY, body TEXT);\nALTER TABLE notes ADD COLUMN created_at TEXT DEFAULT &#x27;2025-01-01&#x27;;\nALTER TABLE notes RENAME COLUMN body TO content;\nINSERT INTO notes (content) VALUES (&#x27;أول ملاحظة&#x27;);\nSELECT * FROM notes;</code></pre></div>\n<div class=\"code-block out sql-out\"><span class=\"code-label\">النتيجة</span><div class=\"table-wrap\"><table class=\"res-table\"><thead><tr><th>id</th><th>content</th><th>created_at</th></tr></thead><tbody><tr><td class=\"\">1</td><td class=\"\">أول ملاحظة</td><td class=\"\">2025-01-01</td></tr></tbody></table></div></div>\n<div class=\"table-wrap\"><table><thead><tr><th>الأمر</th><th>الوظيفة</th></tr></thead><tbody><tr><td><code dir=\"ltr\">ALTER TABLE t ADD COLUMN ...</code></td><td>إضافة عمود</td></tr><tr><td><code dir=\"ltr\">ALTER TABLE t RENAME COLUMN a TO b</code></td><td>إعادة تسمية عمود</td></tr><tr><td><code dir=\"ltr\">ALTER TABLE t RENAME TO new_name</code></td><td>إعادة تسمية الجدول</td></tr><tr><td><code dir=\"ltr\">ALTER TABLE t DROP COLUMN c</code></td><td>حذف عمود</td></tr><tr><td><code dir=\"ltr\">DROP TABLE t</code></td><td>حذف الجدول كاملاً</td></tr></tbody></table></div>\n<h2>اختيار الأنواع المناسبة</h2>\n<ul><li><strong>المال:</strong> في PostgreSQL و MySQL استخدم <code dir=\"ltr\">DECIMAL(10, 2)</code> وليس <code dir=\"ltr\">FLOAT</code>، لأن الأرقام العشرية العائمة تسبب أخطاء تقريب مثل <code dir=\"ltr\">0.1 + 0.2 = 0.30000000000000004</code>.</li><li><strong>التواريخ:</strong> استخدم <code dir=\"ltr\">DATE</code> أو <code dir=\"ltr\">TIMESTAMP</code> وليس نصاً حراً (SQLite تخزنها كنص بصيغة <code dir=\"ltr\">YYYY-MM-DD</code>).</li><li><strong>النصوص القصيرة:</strong> <code dir=\"ltr\">VARCHAR(100)</code> يحدد حداً أقصى للطول.</li></ul>\n<div class=\"callout tip\">💡 SQLite مرنة في الأنواع، لكن PostgreSQL صارمة جداً. صمّم دائماً كأنك تعمل على النظام الصارم.</div>\n<h2>ملخص الدرس</h2>\n<ul><li><code dir=\"ltr\">CREATE TABLE</code> بأعمدة لكل منها اسم ونوع وقيود.</li><li>القيود (<code dir=\"ltr\">NOT NULL</code> و <code dir=\"ltr\">UNIQUE</code> و <code dir=\"ltr\">CHECK</code> و <code dir=\"ltr\">DEFAULT</code>) تحمي البيانات على مستوى قاعدة البيانات.</li><li><code dir=\"ltr\">ALTER TABLE</code> لتعديل البنية، و <code dir=\"ltr\">DROP TABLE</code> للحذف.</li><li>اختر النوع المناسب، خاصة للمال والتواريخ.</li></ul>",
   "exercise": {
    "prompt": "<p>أنشئ جدول <code dir=\"ltr\">students</code> بهذه المواصفات:</p>\n<ul><li><code dir=\"ltr\">id</code> مفتاح أساسي رقمي</li><li><code dir=\"ltr\">name</code> نص <strong>غير فارغ</strong></li><li><code dir=\"ltr\">email</code> نص <strong>فريد</strong></li><li><code dir=\"ltr\">grade</code> رقم صحيح بين <strong>0 و 100</strong> (استخدم <code dir=\"ltr\">CHECK</code>)</li></ul>\n<p>ثم أدخل طالبين: (<code dir=\"ltr\">مريم</code>، <code dir=\"ltr\">maryam@mail.com</code>، <code dir=\"ltr\">95</code>) و (<code dir=\"ltr\">علي</code>، <code dir=\"ltr\">ali@mail.com</code>، <code dir=\"ltr\">78</code>)، واعرض كل الجدول.</p>",
    "starter": "CREATE TABLE students (\n\n);",
    "expected": "id | name | email | grade\n1 | مريم | maryam@mail.com | 95\n2 | علي | ali@mail.com | 78",
    "solution": "CREATE TABLE students (\n  id INTEGER PRIMARY KEY,\n  name TEXT NOT NULL,\n  email TEXT UNIQUE,\n  grade INTEGER CHECK (grade BETWEEN 0 AND 100)\n);\n\nINSERT INTO students (name, email, grade) VALUES\n  ('مريم', 'maryam@mail.com', 95),\n  ('علي', 'ali@mail.com', 78);\n\nSELECT * FROM students;"
   },
   "quiz": [
    {
     "q": "ما فائدة وضع قيد CHECK في قاعدة البيانات بدلاً من التحقق في كود التطبيق فقط؟",
     "o": [
      "يُطبَّق دائماً على كل من يكتب في قاعدة البيانات، فلا يمكن تجاوزه بالخطأ",
      "يجعل الاستعلامات أسرع",
      "لا فائدة منه"
     ],
     "a": 0,
     "why": "قاعدة البيانات هي آخر خط دفاع عن صحة البيانات."
    },
    {
     "q": "أي نوع أفضل لتخزين الأسعار في PostgreSQL؟",
     "o": [
      "FLOAT",
      "DECIMAL(10, 2)",
      "TEXT"
     ],
     "a": 1,
     "why": "DECIMAL يخزن الأرقام العشرية بدقة دون أخطاء تقريب."
    },
    {
     "q": "ما الأمر لإضافة عمود لجدول موجود؟",
     "o": [
      "<code dir=\"ltr\">UPDATE TABLE ADD</code>",
      "<code dir=\"ltr\">ALTER TABLE t ADD COLUMN c</code>",
      "<code dir=\"ltr\">INSERT COLUMN</code>"
     ],
     "a": 1,
     "why": "ALTER TABLE يعدّل بنية الجدول."
    }
   ]
  },
  {
   "body": "<h2>ربط الجداول بأمان</h2>\n<p>في متجرنا، <code dir=\"ltr\">orders.customer_id</code> يشير إلى <code dir=\"ltr\">customers.id</code>. لكن ماذا يمنع إدخال طلب لعميل رقمه 999 غير موجود؟ أو حذف عميل له طلبات فتبقى طلباته &quot;يتيمة&quot;؟ الجواب: <strong>المفتاح الأجنبي (Foreign Key)</strong>.</p>\n<h2>المفتاح الأساسي والأجنبي</h2>\n<div class=\"table-wrap\"><table><thead><tr><th></th><th>المفتاح الأساسي (PK)</th><th>المفتاح الأجنبي (FK)</th></tr></thead><tbody><tr><td>الوظيفة</td><td>يميّز كل صف في جدوله</td><td>يشير إلى مفتاح أساسي في جدول آخر</td></tr><tr><td>التكرار</td><td>لا يتكرر</td><td>يمكن أن يتكرر (عميل له طلبات كثيرة)</td></tr><tr><td>مثال</td><td><code dir=\"ltr\">customers.id</code></td><td><code dir=\"ltr\">orders.customer_id</code></td></tr></tbody></table></div>\n<h2>تعريف المفتاح الأجنبي</h2>\n<div class=\"code-block src\"><span class=\"code-label\">SQL</span><pre dir=\"ltr\"><code>PRAGMA foreign_keys = ON;\n\nCREATE TABLE authors (\n  id INTEGER PRIMARY KEY,\n  name TEXT NOT NULL\n);\n\nCREATE TABLE books (\n  id INTEGER PRIMARY KEY,\n  title TEXT NOT NULL,\n  author_id INTEGER NOT NULL REFERENCES authors(id)\n);\n\nINSERT INTO authors (id, name) VALUES (1, &#x27;نجيب محفوظ&#x27;);\nINSERT INTO books (title, author_id) VALUES (&#x27;الثلاثية&#x27;, 1);\nINSERT INTO books (title, author_id) VALUES (&#x27;كتاب مجهول&#x27;, 99);</code></pre></div>\n<div class=\"code-block out sql-out\"><span class=\"code-label\">النتيجة</span><div class=\"table-wrap\"><div class=\"sql-err\" dir=\"ltr\">⚠️ FOREIGN KEY constraint failed</div></div></div>\n<p>رُفض الكتاب الثاني لأن المؤلف رقم 99 غير موجود. هذا يسمى <strong>سلامة المرجعية (Referential Integrity)</strong>.</p>\n<div class=\"callout warn\">⚠️ في SQLite يجب تفعيل المفاتيح الأجنبية بـ <code dir=\"ltr\">PRAGMA foreign_keys = ON;</code> في كل اتصال، أما PostgreSQL و MySQL فتفرضها دائماً.</div>\n<h2>ماذا يحدث عند حذف الأب؟</h2>\n<div class=\"code-block src\"><span class=\"code-label\">SQL</span><pre dir=\"ltr\"><code>PRAGMA foreign_keys = ON;\nCREATE TABLE authors (id INTEGER PRIMARY KEY, name TEXT);\nCREATE TABLE books (id INTEGER PRIMARY KEY, title TEXT,\n                    author_id INTEGER REFERENCES authors(id));\nINSERT INTO authors VALUES (1, &#x27;طه حسين&#x27;);\nINSERT INTO books (title, author_id) VALUES (&#x27;الأيام&#x27;, 1);\n\nDELETE FROM authors WHERE id = 1;</code></pre></div>\n<div class=\"code-block out sql-out\"><span class=\"code-label\">النتيجة</span><div class=\"table-wrap\"><div class=\"sql-err\" dir=\"ltr\">⚠️ FOREIGN KEY constraint failed</div></div></div>\n<p>لا يمكن حذف مؤلف له كتب. يمكنك تغيير هذا السلوك بخيار <code dir=\"ltr\">ON DELETE</code>:</p>\n<div class=\"table-wrap\"><table><thead><tr><th>الخيار</th><th>عند حذف الأب</th></tr></thead><tbody><tr><td>(الافتراضي) <code dir=\"ltr\">RESTRICT</code> أو <code dir=\"ltr\">NO ACTION</code></td><td>يُرفض الحذف</td></tr><tr><td><code dir=\"ltr\">CASCADE</code></td><td>تُحذف الصفوف التابعة تلقائياً</td></tr><tr><td><code dir=\"ltr\">SET NULL</code></td><td>تصبح قيمة المفتاح الأجنبي NULL</td></tr></tbody></table></div>\n<div class=\"code-block src\"><span class=\"code-label\">SQL</span><pre dir=\"ltr\"><code>PRAGMA foreign_keys = ON;\nCREATE TABLE posts (id INTEGER PRIMARY KEY, title TEXT);\nCREATE TABLE comments (\n  id INTEGER PRIMARY KEY,\n  body TEXT,\n  post_id INTEGER REFERENCES posts(id) ON DELETE CASCADE\n);\nINSERT INTO posts VALUES (1, &#x27;منشور&#x27;);\nINSERT INTO comments (body, post_id) VALUES (&#x27;رائع&#x27;, 1), (&#x27;شكراً&#x27;, 1);\n\nDELETE FROM posts WHERE id = 1;\nSELECT COUNT(*) AS comments_left FROM comments;</code></pre></div>\n<div class=\"code-block out sql-out\"><span class=\"code-label\">النتيجة</span><div class=\"table-wrap\"><table class=\"res-table\"><thead><tr><th>comments_left</th></tr></thead><tbody><tr><td class=\"\">0</td></tr></tbody></table></div></div>\n<p>حذف المنشور حذف تعليقاته تلقائياً. مناسب للتعليقات، لكن <strong>خطير</strong> للطلبات والفواتير، فلا تستخدم CASCADE إلا حيث يكون منطقياً فعلاً.</p>\n<h2>المفتاح الأساسي المركب</h2>\n<p>جدول <code dir=\"ltr\">order_items</code> لا يحتاج <code dir=\"ltr\">id</code>، فكل سطر يتميز بتركيبة (الطلب، المنتج):</p>\n<div class=\"code-block src\"><span class=\"code-label\">SQL</span><pre dir=\"ltr\"><code>CREATE TABLE order_items (\n  order_id INTEGER REFERENCES orders(id),\n  product_id INTEGER REFERENCES products(id),\n  quantity INTEGER NOT NULL CHECK (quantity &gt; 0),\n  PRIMARY KEY (order_id, product_id)\n);</code></pre></div>\n<h2>ملخص الدرس</h2>\n<ul><li>المفتاح الأجنبي <code dir=\"ltr\">REFERENCES جدول(عمود)</code> يضمن أن القيمة موجودة في الجدول الآخر.</li><li>يمنع إدخال مراجع غير موجودة، ويمنع حذف صف له صفوف تابعة.</li><li><code dir=\"ltr\">ON DELETE CASCADE</code> أو <code dir=\"ltr\">SET NULL</code> لتغيير سلوك الحذف.</li><li>في SQLite فعّل المفاتيح الأجنبية بـ <code dir=\"ltr\">PRAGMA foreign_keys = ON</code>.</li></ul>",
   "exercise": {
    "prompt": "<p>صمّم جدولين لنظام مكتبة:</p>\n<ol><li>فعّل المفاتيح الأجنبية.</li><li><code dir=\"ltr\">members</code> (<code dir=\"ltr\">id</code> مفتاح أساسي، <code dir=\"ltr\">name</code> نص غير فارغ).</li><li><code dir=\"ltr\">loans</code> (<code dir=\"ltr\">id</code> مفتاح أساسي، <code dir=\"ltr\">member_id</code> مفتاح أجنبي إلى <code dir=\"ltr\">members(id)</code> مع <strong>حذف تتابعي</strong> <code dir=\"ltr\">ON DELETE CASCADE</code>، <code dir=\"ltr\">book</code> نص).</li><li>أدخل عضوين: (1، <code dir=\"ltr\">سلمى</code>) و (2، <code dir=\"ltr\">يوسف</code>)، وثلاث استعارات: لسلمى <code dir=\"ltr\">الأيام</code> و <code dir=\"ltr\">قنديل أم هاشم</code>، وليوسف <code dir=\"ltr\">موسم الهجرة إلى الشمال</code>.</li><li>احذف العضو رقم 1، ثم اعرض <code dir=\"ltr\">member_id</code> و <code dir=\"ltr\">book</code> من <code dir=\"ltr\">loans</code>.</li></ol>",
    "starter": "PRAGMA foreign_keys = ON;",
    "expected": "member_id | book\n2 | موسم الهجرة إلى الشمال",
    "solution": "PRAGMA foreign_keys = ON;\n\nCREATE TABLE members (\n  id INTEGER PRIMARY KEY,\n  name TEXT NOT NULL\n);\n\nCREATE TABLE loans (\n  id INTEGER PRIMARY KEY,\n  member_id INTEGER REFERENCES members(id) ON DELETE CASCADE,\n  book TEXT\n);\n\nINSERT INTO members (id, name) VALUES (1, 'سلمى'), (2, 'يوسف');\nINSERT INTO loans (member_id, book) VALUES\n  (1, 'الأيام'),\n  (1, 'قنديل أم هاشم'),\n  (2, 'موسم الهجرة إلى الشمال');\n\nDELETE FROM members WHERE id = 1;\n\nSELECT member_id, book FROM loans;"
   },
   "quiz": [
    {
     "q": "ما وظيفة المفتاح الأجنبي؟",
     "o": [
      "يضمن أن القيمة تشير إلى صف موجود فعلاً في جدول آخر",
      "يجعل العمود فريداً",
      "يسرّع البحث فقط"
     ],
     "a": 0,
     "why": "هذا ما يسمى سلامة المرجعية."
    },
    {
     "q": "عميل له طلبات، والمفتاح الأجنبي بالإعداد الافتراضي. ماذا يحدث عند محاولة حذفه؟",
     "o": [
      "يُرفض الحذف",
      "يُحذف مع طلباته",
      "يُحذف وتبقى الطلبات"
     ],
     "a": 0,
     "why": "الإعداد الافتراضي يمنع حذف صف له صفوف تابعة."
    },
    {
     "q": "متى يناسب <code dir=\"ltr\">ON DELETE CASCADE</code>؟",
     "o": [
      "عندما لا معنى للصفوف التابعة دون الأب، مثل تعليقات منشور محذوف",
      "دائماً",
      "مع الفواتير والطلبات المالية"
     ],
     "a": 0,
     "why": "البيانات المالية يجب أن تبقى حتى لو حُذف شيء مرتبط بها."
    }
   ]
  },
  {
   "body": "<h2>التكرار عدو البيانات</h2>\n<p>انظر إلى هذا الجدول &quot;السهل&quot;:</p>\n<div class=\"table-wrap\"><table><thead><tr><th>order_id</th><th>customer</th><th>customer_phone</th><th>products</th></tr></thead><tbody><tr><td>1</td><td>أحمد</td><td>0501111111</td><td>لابتوب، سماعة</td></tr><tr><td>2</td><td>أحمد</td><td>0501111111</td><td>رواية</td></tr><tr><td>3</td><td>سارة</td><td>0502222222</td><td>قميص</td></tr></tbody></table></div>\n<p>يبدو مريحاً، لكنه مليء بالمشاكل:</p>\n<ul><li><strong>مشكلة التعديل:</strong> إذا غيّر أحمد رقمه، يجب تعديل كل طلباته، وإن نسيت واحداً أصبحت البيانات متناقضة.</li><li><strong>مشكلة الإدخال:</strong> لا يمكن تسجيل عميل جديد قبل أن يطلب شيئاً.</li><li><strong>مشكلة الحذف:</strong> حذف طلب سارة الوحيد يمحو معلوماتها كعميلة.</li><li><strong>مشكلة البحث:</strong> كيف تجد كل من اشترى &quot;سماعة&quot; وهي مدفونة داخل نص؟</li></ul>\n<p><strong>التطبيع (Normalization)</strong> عملية تنظيم الجداول لإزالة هذا التكرار، عبر قواعد تسمى <strong>الصيغ الطبيعية</strong>.</p>\n<h2>الصيغة الأولى (1NF): قيمة واحدة في كل خلية</h2>\n<p>العمود <code dir=\"ltr\">products</code> فيه عدة قيم مفصولة بفواصل. هذا يخالف 1NF. الحل: كل منتج في صف مستقل:</p>\n<div class=\"table-wrap\"><table><thead><tr><th>order_id</th><th>product</th></tr></thead><tbody><tr><td>1</td><td>لابتوب</td></tr><tr><td>1</td><td>سماعة</td></tr><tr><td>2</td><td>رواية</td></tr></tbody></table></div>\n<h2>الصيغة الثانية (2NF): كل عمود يعتمد على المفتاح كاملاً</h2>\n<p>في جدول مفتاحه مركب <code dir=\"ltr\">(order_id, product_id)</code>، العمود <code dir=\"ltr\">product_name</code> يعتمد على <code dir=\"ltr\">product_id</code> فقط وليس على المفتاح كاملاً. الحل: نقله لجدول المنتجات.</p>\n<h2>الصيغة الثالثة (3NF): لا شيء يعتمد على غير المفتاح</h2>\n<p>في جدول الطلبات، <code dir=\"ltr\">customer_phone</code> يعتمد على <code dir=\"ltr\">customer</code> وليس على <code dir=\"ltr\">order_id</code>. الحل: جدول مستقل للعملاء، والطلب يحفظ رقم العميل فقط.</p>\n<div class=\"callout tip\">💡 الملخص الشهير: كل عمود يجب أن يعتمد على <strong>المفتاح، والمفتاح كاملاً، ولا شيء غير المفتاح</strong>.</div>\n<h2>النتيجة: تصميم متجرنا</h2>\n<p>هكذا وصلنا للتصميم الذي نستخدمه طوال الدورة: <code dir=\"ltr\">customers</code> و <code dir=\"ltr\">products</code> و <code dir=\"ltr\">orders</code> و <code dir=\"ltr\">order_items</code>. كل معلومة محفوظة في <strong>مكان واحد فقط</strong>، والجداول مرتبطة بالمفاتيح. ولإعادة تجميع البيانات نستخدم JOIN:</p>\n<div class=\"code-block src\"><span class=\"code-label\">SQL</span><pre dir=\"ltr\"><code>SELECT o.id AS order_id, c.name AS customer, p.name AS product\nFROM orders o\nJOIN customers c ON c.id = o.customer_id\nJOIN order_items oi ON oi.order_id = o.id\nJOIN products p ON p.id = oi.product_id\nWHERE o.id IN (101, 102)\nORDER BY o.id, p.id;</code></pre></div>\n<div class=\"code-block out sql-out\"><span class=\"code-label\">النتيجة</span><div class=\"table-wrap\"><table class=\"res-table\"><thead><tr><th>order_id</th><th>customer</th><th>product</th></tr></thead><tbody><tr><td class=\"\">101</td><td class=\"\">أحمد</td><td class=\"\">لابتوب</td></tr><tr><td class=\"\">101</td><td class=\"\">أحمد</td><td class=\"\">سماعة</td></tr><tr><td class=\"\">102</td><td class=\"\">سارة</td><td class=\"\">قميص</td></tr><tr><td class=\"\">102</td><td class=\"\">سارة</td><td class=\"\">رواية</td></tr></tbody></table></div></div>\n<h2>متى نكسر التطبيع؟</h2>\n<p>أحياناً نكرر بيانات <strong>عمداً</strong> (Denormalization) لسببين مقبولين:</p>\n<ul><li><strong>الأداء:</strong> في التقارير الضخمة، تجنب JOINs كثيرة قد يستحق التكرار.</li><li><strong>التاريخ:</strong> لاحظ أن <code dir=\"ltr\">order_items</code> فيه <code dir=\"ltr\">unit_price</code> رغم وجود السعر في <code dir=\"ltr\">products</code>. لماذا؟ لأن سعر المنتج قد يتغير غداً، لكن الفاتورة يجب أن تحفظ السعر <strong>وقت الشراء</strong>. هذا ليس تكراراً خاطئاً بل معلومة مختلفة.</li></ul>\n<h2>ملخص الدرس</h2>\n<ul><li>التكرار يسبب تناقض البيانات ومشاكل في الإدخال والتعديل والحذف.</li><li>1NF: قيمة واحدة في كل خلية. 2NF: الاعتماد على المفتاح كاملاً. 3NF: لا اعتماد على غير المفتاح.</li><li>كل معلومة في مكان واحد، و JOIN يعيد تجميعها.</li><li>كسر التطبيع مقبول أحياناً للأداء أو لحفظ قيم تاريخية.</li></ul>",
   "exercise": {
    "prompt": "<p>لديك جدول غير مطبّع <code dir=\"ltr\">raw_sales</code> فيه اسم المدينة ومنطقتها مكررين في كل عملية بيع. طبّعه:</p>\n<ol><li>أنشئ جدول <code dir=\"ltr\">cities</code> (<code dir=\"ltr\">id</code> مفتاح أساسي، <code dir=\"ltr\">name</code> فريد، <code dir=\"ltr\">region</code>).</li><li>املأه من <code dir=\"ltr\">raw_sales</code> بـ <code dir=\"ltr\">INSERT INTO cities (name, region) SELECT DISTINCT city, region FROM raw_sales;</code></li><li>اعرض كل <code dir=\"ltr\">cities</code> مرتبة حسب <code dir=\"ltr\">id</code>.</li><li>اعرض عدد المبيعات لكل منطقة بربط <code dir=\"ltr\">raw_sales</code> مع <code dir=\"ltr\">cities</code> بالاسم، مرتبة حسب المنطقة.</li></ol>",
    "setup": "CREATE TABLE raw_sales (id INTEGER PRIMARY KEY, city TEXT, region TEXT, amount INTEGER);\nINSERT INTO raw_sales (city, region, amount) VALUES\n  ('الرياض', 'الوسطى', 100), ('جدة', 'الغربية', 250), ('الرياض', 'الوسطى', 75),\n  ('الدمام', 'الشرقية', 300), ('جدة', 'الغربية', 120), ('مكة', 'الغربية', 90);",
    "starter": "-- 1)\n\n-- 2)\n\n-- 3)\n\n-- 4)",
    "expected": "id | name | region\n1 | الرياض | الوسطى\n2 | جدة | الغربية\n3 | الدمام | الشرقية\n4 | مكة | الغربية\n\nregion | sales\nالشرقية | 1\nالغربية | 3\nالوسطى | 2",
    "solution": "CREATE TABLE cities (\n  id INTEGER PRIMARY KEY,\n  name TEXT UNIQUE,\n  region TEXT\n);\n\nINSERT INTO cities (name, region)\nSELECT DISTINCT city, region FROM raw_sales;\n\nSELECT * FROM cities ORDER BY id;\n\nSELECT c.region, COUNT(*) AS sales\nFROM raw_sales s\nJOIN cities c ON c.name = s.city\nGROUP BY c.region\nORDER BY c.region;",
    "schema": "<div class=\"schema-table\"><code dir=\"ltr\"><b>raw_sales</b> (id 🔑, city, region, amount)</code> <span class=\"muted\">· 6 صفوف</span></div>"
   },
   "quiz": [
    {
     "q": "ما المشكلة في عمود فيه قيم مثل &quot;لابتوب، سماعة&quot;؟",
     "o": [
      "يخالف الصيغة الأولى (1NF) ويصعّب البحث والعدّ",
      "لا مشكلة",
      "يأخذ مساحة كبيرة فقط"
     ],
     "a": 0,
     "why": "كل خلية يجب أن تحتوي قيمة واحدة."
    },
    {
     "q": "لماذا يُعد حفظ رقم هاتف العميل في كل طلب تصميماً سيئاً؟",
     "o": [
      "لأن تغيير الرقم يتطلب تعديل كل الطلبات، وقد تتناقض البيانات",
      "لأن الأرقام لا تُخزّن في الطلبات",
      "لأنه يبطئ الإدخال"
     ],
     "a": 0,
     "why": "المعلومة يجب أن تكون في مكان واحد."
    },
    {
     "q": "لماذا يحتوي order_items على unit_price رغم وجود السعر في products؟",
     "o": [
      "خطأ في التصميم",
      "لحفظ السعر وقت الشراء، لأن سعر المنتج قد يتغير لاحقاً",
      "لتسريع الاستعلامات فقط"
     ],
     "a": 1,
     "why": "هذه معلومة تاريخية مختلفة عن السعر الحالي."
    }
   ]
  },
  {
   "body": "<h2>الرسم قبل البناء</h2>\n<p>قبل كتابة <code dir=\"ltr\">CREATE TABLE</code>، يرسم المصممون <strong>مخطط الكيانات والعلاقات (ER Diagram)</strong>: صورة توضح الجداول وأعمدتها وكيف ترتبط. هو لغة مشتركة بين المطورين ومديري المنتجات، ويكشف أخطاء التصميم قبل أن تصبح مكلفة.</p>\n<h2>المكونات الثلاثة</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>المكوّن</th><th>المعنى</th><th>في متجرنا</th></tr></thead><tbody><tr><td><strong>الكيان (Entity)</strong></td><td>شيء نحفظ عنه بيانات، ويصبح جدولاً</td><td>عميل، منتج، طلب</td></tr><tr><td><strong>الخاصية (Attribute)</strong></td><td>معلومة عن الكيان، وتصبح عموداً</td><td>الاسم، السعر</td></tr><tr><td><strong>العلاقة (Relationship)</strong></td><td>كيف يرتبط كيانان</td><td>العميل <strong>يقدّم</strong> طلبات</td></tr></tbody></table></div>\n<h2>أنواع العلاقات</h2>\n<h3>واحد لواحد (1:1)</h3>\n<p>مستخدم له ملف شخصي واحد. نضع المفتاح الأجنبي في أحد الجدولين مع قيد <code dir=\"ltr\">UNIQUE</code>.</p>\n<h3>واحد لمتعدد (1:N)</h3>\n<p>الأكثر شيوعاً: عميل واحد له <strong>طلبات كثيرة</strong>، وكل طلب لعميل واحد. القاعدة: <strong>المفتاح الأجنبي يوضع في جهة &quot;المتعدد&quot;</strong>، أي <code dir=\"ltr\">orders.customer_id</code>.</p>\n<h3>متعدد لمتعدد (N:M)</h3>\n<p>طلب فيه <strong>منتجات كثيرة</strong>، ومنتج يظهر في <strong>طلبات كثيرة</strong>. لا يمكن تمثيلها بمفتاح أجنبي واحد، فنحتاج <strong>جدولاً وسيطاً (Junction Table)</strong> فيه مفتاحان أجنبيان. وهذا بالضبط دور <code dir=\"ltr\">order_items</code>.</p>\n<h2>مخطط متجرنا</h2>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>customers 1 ──────&lt; N orders 1 ──────&lt; N order_items N &gt;────── 1 products\n   id 🔑               id 🔑                order_id  →               id 🔑\n   name                customer_id →        product_id →              name\n   city                order_date           quantity                  price\n   email               status               unit_price                stock\n\nemployees ─┐\n   id 🔑    │ manager_id → employees.id  (علاقة 1:N مع نفس الجدول)\n   manager_id ←┘</code></pre></div>\n<ul><li>العلامة <code dir=\"ltr\">&lt;</code> تشير لجهة &quot;المتعدد&quot;، و <code dir=\"ltr\">1</code> لجهة &quot;الواحد&quot;.</li><li>السهم <code dir=\"ltr\">→</code> يعني مفتاحاً أجنبياً.</li></ul>\n<h2>من المتطلبات إلى المخطط</h2>\n<p>عندما يقول لك العميل: &quot;أريد نظاماً لمدرسة: كل <strong>طالب</strong> يسجّل في <strong>مقررات</strong> كثيرة، وكل مقرر يدرّسه <strong>معلم</strong> واحد، والمعلم يدرّس مقررات عدة&quot;، اتبع هذه الخطوات:</p>\n<ol><li><strong>الأسماء</strong> في الوصف كيانات: طالب، مقرر، معلم.</li><li><strong>الأفعال</strong> علاقات: يسجّل، يدرّس.</li><li><strong>حدد نوع كل علاقة:</strong> طالب ↔ مقرر (N:M، تحتاج جدولاً وسيطاً <code dir=\"ltr\">enrollments</code>)، معلم ↔ مقرر (1:N، المفتاح في <code dir=\"ltr\">courses.teacher_id</code>).</li><li><strong>أضف الخصائص</strong>، وما يخص العلاقة نفسها (مثل الدرجة) يوضع في الجدول الوسيط.</li></ol>\n<h2>أدوات الرسم</h2>\n<ul><li><strong>dbdiagram.io:</strong> تكتب الجداول نصاً فيرسمها تلقائياً.</li><li><strong>draw.io:</strong> رسم حر مجاني.</li><li><strong>pgAdmin و MySQL Workbench:</strong> يولّدان المخطط من قاعدة بيانات موجودة.</li></ul>\n<h2>ملخص الدرس</h2>\n<ul><li>مخطط ER يرسم الكيانات (جداول) والخصائص (أعمدة) والعلاقات.</li><li>1:N: المفتاح الأجنبي في جهة المتعدد.</li><li>N:M: جدول وسيط بمفتاحين أجنبيين، وخصائص العلاقة توضع فيه.</li><li>ابدأ من المتطلبات: الأسماء كيانات، والأفعال علاقات.</li></ul>",
   "exercise": {
    "prompt": "<p>حوّل تصميم المدرسة من الدرس إلى جداول:</p>\n<ol><li><code dir=\"ltr\">teachers</code> (<code dir=\"ltr\">id</code>، <code dir=\"ltr\">name</code>).</li><li><code dir=\"ltr\">courses</code> (<code dir=\"ltr\">id</code>، <code dir=\"ltr\">title</code>، <code dir=\"ltr\">teacher_id</code> يشير إلى <code dir=\"ltr\">teachers</code>).</li><li><code dir=\"ltr\">students</code> (<code dir=\"ltr\">id</code>، <code dir=\"ltr\">name</code>).</li><li>الجدول الوسيط <code dir=\"ltr\">enrollments</code> (<code dir=\"ltr\">student_id</code> و <code dir=\"ltr\">course_id</code> كمفتاح أساسي مركب، و <code dir=\"ltr\">grade</code>).</li></ol>\n<p>البيانات: المعلم 1 <code dir=\"ltr\">أ. نوال</code>، المقرران 1 <code dir=\"ltr\">رياضيات</code> و 2 <code dir=\"ltr\">فيزياء</code> يدرّسهما المعلم 1، الطالبان 1 <code dir=\"ltr\">رغد</code> و 2 <code dir=\"ltr\">حمزة</code>. رغد سجلت في المقررين بدرجتي 90 و 85، وحمزة في الرياضيات بدرجة 70.</p>\n<p>أخيراً اعرض اسم الطالب <code dir=\"ltr\">student</code> وعنوان المقرر <code dir=\"ltr\">course</code> والدرجة <code dir=\"ltr\">grade</code> مرتبة حسب اسم الطالب ثم المقرر.</p>",
    "starter": "-- الجداول\n\n-- البيانات\n\n-- الاستعلام النهائي",
    "expected": "student | course | grade\nحمزة | رياضيات | 70\nرغد | رياضيات | 90\nرغد | فيزياء | 85",
    "solution": "CREATE TABLE teachers (id INTEGER PRIMARY KEY, name TEXT NOT NULL);\nCREATE TABLE courses (\n  id INTEGER PRIMARY KEY,\n  title TEXT NOT NULL,\n  teacher_id INTEGER REFERENCES teachers(id)\n);\nCREATE TABLE students (id INTEGER PRIMARY KEY, name TEXT NOT NULL);\nCREATE TABLE enrollments (\n  student_id INTEGER REFERENCES students(id),\n  course_id INTEGER REFERENCES courses(id),\n  grade INTEGER,\n  PRIMARY KEY (student_id, course_id)\n);\n\nINSERT INTO teachers VALUES (1, 'أ. نوال');\nINSERT INTO courses VALUES (1, 'رياضيات', 1), (2, 'فيزياء', 1);\nINSERT INTO students VALUES (1, 'رغد'), (2, 'حمزة');\nINSERT INTO enrollments VALUES (1, 1, 90), (1, 2, 85), (2, 1, 70);\n\nSELECT s.name AS student, c.title AS course, e.grade\nFROM enrollments e\nJOIN students s ON s.id = e.student_id\nJOIN courses c ON c.id = e.course_id\nORDER BY s.name, c.title;"
   },
   "quiz": [
    {
     "q": "في علاقة واحد لمتعدد بين العملاء والطلبات، أين يوضع المفتاح الأجنبي؟",
     "o": [
      "في جدول الطلبات (جهة المتعدد)",
      "في جدول العملاء",
      "في جدول ثالث"
     ],
     "a": 0,
     "why": "كل طلب يحفظ رقم عميله الواحد."
    },
    {
     "q": "كيف تُمثَّل علاقة متعدد لمتعدد بين الطلاب والمقررات؟",
     "o": [
      "مفتاح أجنبي في جدول الطلاب",
      "جدول وسيط فيه student_id و course_id",
      "عمود فيه قائمة المقررات"
     ],
     "a": 1,
     "why": "الجدول الوسيط يحوّل N:M إلى علاقتين 1:N."
    },
    {
     "q": "أين تُحفظ درجة الطالب في مقرر معين؟",
     "o": [
      "في جدول الطلاب",
      "في جدول المقررات",
      "في الجدول الوسيط enrollments"
     ],
     "a": 2,
     "why": "الدرجة خاصية للعلاقة نفسها، لا للطالب وحده ولا للمقرر وحده."
    }
   ]
  }
 ],
 [
  {
   "body": "<h2>لماذا يبطئ الاستعلام؟</h2>\n<p>تخيّل كتاباً من ألف صفحة بلا فهرس، وتبحث عن كلمة &quot;قاعدة&quot;. ستقرأ كل الصفحات! هذا ما تفعله قاعدة البيانات عند البحث في عمود بلا فهرس: <strong>تمسح الجدول كاملاً (Full Table Scan)</strong>. مع 10 صفوف لا فرق، لكن مع 10 ملايين صف يصبح الاستعلام بطيئاً جداً.</p>\n<p><strong>الفهرس (Index)</strong> بنية بيانات إضافية مرتبة (غالباً شجرة B-Tree) تشبه فهرس الكتاب: تخبر قاعدة البيانات مباشرة أين توجد الصفوف المطلوبة.</p>\n<h2>رؤية الفرق بـ EXPLAIN QUERY PLAN</h2>\n<div class=\"code-block src\"><span class=\"code-label\">SQL</span><pre dir=\"ltr\"><code>EXPLAIN QUERY PLAN\nSELECT * FROM orders WHERE customer_id = 1;</code></pre></div>\n<div class=\"code-block out sql-out\"><span class=\"code-label\">النتيجة</span><div class=\"table-wrap\"><table class=\"res-table\"><thead><tr><th>id</th><th>parent</th><th>notused</th><th>detail</th></tr></thead><tbody><tr><td class=\"\">2</td><td class=\"\">0</td><td class=\"\">216</td><td class=\"\">SCAN orders</td></tr></tbody></table></div></div>\n<p>ركّز على العمود الأخير <code dir=\"ltr\">detail</code>، فهو الذي يصف الخطة (الأعمدة الأخرى أرقام داخلية). <code dir=\"ltr\">SCAN orders</code> تعني: سأقرأ كل الصفوف. الآن ننشئ فهرساً:</p>\n<div class=\"code-block src\"><span class=\"code-label\">SQL</span><pre dir=\"ltr\"><code>CREATE INDEX idx_orders_customer ON orders(customer_id);\n\nEXPLAIN QUERY PLAN\nSELECT * FROM orders WHERE customer_id = 1;</code></pre></div>\n<div class=\"code-block out sql-out\"><span class=\"code-label\">النتيجة</span><div class=\"table-wrap\"><table class=\"res-table\"><thead><tr><th>id</th><th>parent</th><th>notused</th><th>detail</th></tr></thead><tbody><tr><td class=\"\">3</td><td class=\"\">0</td><td class=\"\">61</td><td class=\"\">SEARCH orders USING INDEX idx_orders_customer (customer_id=?)</td></tr></tbody></table></div></div>\n<p>أصبحت <code dir=\"ltr\">SEARCH ... USING INDEX</code>: قفزة مباشرة إلى الصفوف المطلوبة.</p>\n<h2>ماذا نفهرس؟</h2>\n<p>الأعمدة التي تظهر كثيراً في:</p>\n<ul><li><code dir=\"ltr\">WHERE</code> (البحث والتصفية)</li><li><code dir=\"ltr\">JOIN ... ON</code> (خاصة المفاتيح الأجنبية)</li><li><code dir=\"ltr\">ORDER BY</code> (الترتيب)</li></ul>\n<div class=\"callout tip\">💡 المفتاح الأساسي مفهرس تلقائياً، وكذلك الأعمدة ذات القيد <code dir=\"ltr\">UNIQUE</code>. لكن <strong>المفاتيح الأجنبية لا تُفهرس تلقائياً</strong> في PostgreSQL و SQLite، وفهرستها من أهم تحسينات الأداء.</div>\n<h2>الفهرس المركب</h2>\n<p>فهرس على أكثر من عمود، مفيد عندما تبحث بها معاً:</p>\n<div class=\"code-block src\"><span class=\"code-label\">SQL</span><pre dir=\"ltr\"><code>CREATE INDEX idx_orders_status_date ON orders(status, order_date);\n\nEXPLAIN QUERY PLAN\nSELECT id FROM orders WHERE status = &#x27;مكتمل&#x27; AND order_date &gt;= &#x27;2025-03-01&#x27;;</code></pre></div>\n<div class=\"code-block out sql-out\"><span class=\"code-label\">النتيجة</span><div class=\"table-wrap\"><table class=\"res-table\"><thead><tr><th>id</th><th>parent</th><th>notused</th><th>detail</th></tr></thead><tbody><tr><td class=\"\">2</td><td class=\"\">0</td><td class=\"\">47</td><td class=\"\">SEARCH orders USING COVERING INDEX idx_orders_status_date (status=? AND order_date&gt;?)</td></tr></tbody></table></div></div>\n<div class=\"callout warn\">⚠️ <strong>ترتيب الأعمدة مهم:</strong> فهرس <code dir=\"ltr\">(status, order_date)</code> يفيد البحث بـ <code dir=\"ltr\">status</code> وحده، أو بـ <code dir=\"ltr\">status</code> و <code dir=\"ltr\">order_date</code> معاً، لكنه <strong>لا يفيد</strong> البحث بـ <code dir=\"ltr\">order_date</code> وحده. مثل دليل الهاتف المرتب بالعائلة ثم الاسم: لا يساعدك في إيجاد كل من اسمه &quot;محمد&quot;.</div>\n<h2>الفهارس ليست مجانية</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>الفائدة</th><th>الثمن</th></tr></thead><tbody><tr><td>قراءة وبحث أسرع بكثير</td><td>مساحة تخزين إضافية</td></tr><tr><td>ترتيب أسرع</td><td>كل INSERT و UPDATE و DELETE يجب أن يحدّث الفهارس أيضاً</td></tr></tbody></table></div>\n<p>لذلك لا تفهرس كل عمود. فهرس ما <strong>تبحث به فعلاً</strong>، خاصة في الجداول الكبيرة التي يكثر فيها القراءة.</p>\n<h2>الفهرس الفريد</h2>\n<div class=\"code-block src\"><span class=\"code-label\">SQL</span><pre dir=\"ltr\"><code>CREATE UNIQUE INDEX idx_products_name ON products(name);\nINSERT INTO products (name, price) VALUES (&#x27;لابتوب&#x27;, 999);</code></pre></div>\n<div class=\"code-block out sql-out\"><span class=\"code-label\">النتيجة</span><div class=\"table-wrap\"><div class=\"sql-err\" dir=\"ltr\">⚠️ UNIQUE constraint failed: products.name</div></div></div>\n<p>يجمع بين تسريع البحث ومنع التكرار.</p>\n<h2>ملخص الدرس</h2>\n<ul><li>بدون فهرس تمسح قاعدة البيانات الجدول كاملاً (SCAN).</li><li><code dir=\"ltr\">CREATE INDEX اسم ON جدول(أعمدة)</code> ينشئ فهرساً فيصبح البحث SEARCH.</li><li>فهرس الأعمدة المستخدمة في WHERE و JOIN و ORDER BY، خاصة المفاتيح الأجنبية.</li><li>ترتيب أعمدة الفهرس المركب مهم، والفهارس تبطئ الكتابة قليلاً.</li></ul>",
   "exercise": {
    "prompt": "<p>الاستعلام التالي يبحث في <code dir=\"ltr\">order_items</code> عن منتج معين، وهو حالياً يمسح الجدول كاملاً.</p>\n<ol><li>أنشئ فهرساً اسمه <code dir=\"ltr\">idx_items_product</code> على العمود <code dir=\"ltr\">product_id</code> في <code dir=\"ltr\">order_items</code>.</li><li>شغّل <code dir=\"ltr\">EXPLAIN QUERY PLAN</code> للاستعلام المعطى وتأكد أنه أصبح يستخدم الفهرس.</li></ol>",
    "starter": "-- 1) أنشئ الفهرس هنا\n\n-- 2)\nEXPLAIN QUERY PLAN\nSELECT order_id, quantity FROM order_items WHERE product_id = 6;",
    "expected": "id | parent | notused | detail\n3 | 0 | 62 | SEARCH order_items USING INDEX idx_items_product (product_id=?)",
    "solution": "CREATE INDEX idx_items_product ON order_items(product_id);\n\nEXPLAIN QUERY PLAN\nSELECT order_id, quantity FROM order_items WHERE product_id = 6;"
   },
   "quiz": [
    {
     "q": "ماذا تعني <code dir=\"ltr\">SCAN</code> في خطة التنفيذ؟",
     "o": [
      "قراءة كل صفوف الجدول",
      "استخدام فهرس",
      "خطأ في الاستعلام"
     ],
     "a": 0,
     "why": "SCAN مسح كامل، و SEARCH استخدام فهرس."
    },
    {
     "q": "أي عمود من الأهم فهرسته غالباً؟",
     "o": [
      "المفاتيح الأجنبية المستخدمة في JOIN",
      "كل الأعمدة النصية",
      "الأعمدة التي لا يُبحث بها"
     ],
     "a": 0,
     "why": "JOIN على مفتاح أجنبي بلا فهرس من أشهر أسباب البطء."
    },
    {
     "q": "فهرس مركب على <code dir=\"ltr\">(city, name)</code>. أي بحث لا يستفيد منه؟",
     "o": [
      "<code dir=\"ltr\">WHERE city = &#x27;جدة&#x27;</code>",
      "<code dir=\"ltr\">WHERE city = &#x27;جدة&#x27; AND name = &#x27;علي&#x27;</code>",
      "<code dir=\"ltr\">WHERE name = &#x27;علي&#x27;</code>"
     ],
     "a": 2,
     "why": "الفهرس المركب يُستخدم من أول عمود فيه."
    }
   ]
  },
  {
   "body": "<h2>كل شيء أو لا شيء</h2>\n<p>تحويل 500 ريال من حساب سعاد إلى حساب مازن يتطلب خطوتين:</p>\n<ol><li>خصم 500 من سعاد.</li><li>إضافة 500 لمازن.</li></ol>\n<p>ماذا لو انقطعت الكهرباء بعد الخطوة الأولى؟ خُصم المال ولم يصل لأحد! <strong>المعاملة (Transaction)</strong> تجمع عدة عمليات في وحدة واحدة: <strong>إما أن تنجح كلها، أو لا يحدث أي منها</strong>.</p>\n<h2>BEGIN و COMMIT</h2>\n<div class=\"code-block src\"><span class=\"code-label\">SQL</span><pre dir=\"ltr\"><code>CREATE TABLE accounts (id INTEGER PRIMARY KEY, owner TEXT, balance INTEGER CHECK (balance &gt;= 0));\nINSERT INTO accounts VALUES (1, &#x27;سعاد&#x27;, 1000), (2, &#x27;مازن&#x27;, 200);\n\nBEGIN;\nUPDATE accounts SET balance = balance - 500 WHERE id = 1;\nUPDATE accounts SET balance = balance + 500 WHERE id = 2;\nCOMMIT;\n\nSELECT owner, balance FROM accounts;</code></pre></div>\n<div class=\"code-block out sql-out\"><span class=\"code-label\">النتيجة</span><div class=\"table-wrap\"><table class=\"res-table\"><thead><tr><th>owner</th><th>balance</th></tr></thead><tbody><tr><td class=\"\">سعاد</td><td class=\"\">500</td></tr><tr><td class=\"\">مازن</td><td class=\"\">700</td></tr></tbody></table></div></div>\n<ul><li><code dir=\"ltr\">BEGIN</code> يبدأ المعاملة.</li><li><code dir=\"ltr\">COMMIT</code> يثبّت كل التغييرات نهائياً.</li></ul>\n<h2>ROLLBACK: التراجع</h2>\n<div class=\"code-block src\"><span class=\"code-label\">SQL</span><pre dir=\"ltr\"><code>CREATE TABLE accounts (id INTEGER PRIMARY KEY, owner TEXT, balance INTEGER);\nINSERT INTO accounts VALUES (1, &#x27;سعاد&#x27;, 1000), (2, &#x27;مازن&#x27;, 200);\n\nBEGIN;\nUPDATE accounts SET balance = balance - 500 WHERE id = 1;\nDELETE FROM accounts WHERE id = 2;\nROLLBACK;\n\nSELECT owner, balance FROM accounts;</code></pre></div>\n<div class=\"code-block out sql-out\"><span class=\"code-label\">النتيجة</span><div class=\"table-wrap\"><table class=\"res-table\"><thead><tr><th>owner</th><th>balance</th></tr></thead><tbody><tr><td class=\"\">سعاد</td><td class=\"\">1000</td></tr><tr><td class=\"\">مازن</td><td class=\"\">200</td></tr></tbody></table></div></div>\n<p><code dir=\"ltr\">ROLLBACK</code> ألغى كل ما حدث منذ <code dir=\"ltr\">BEGIN</code>، وعادت البيانات كما كانت تماماً. في التطبيقات، يستدعي الكود ROLLBACK تلقائياً عند حدوث أي خطأ أثناء المعاملة.</p>\n<h2>خصائص ACID</h2>\n<p>المعاملات في قواعد البيانات العلائقية تضمن أربع خصائص:</p>\n<div class=\"table-wrap\"><table><thead><tr><th>الخاصية</th><th>المعنى</th></tr></thead><tbody><tr><td><strong>A</strong>tomicity (الذرية)</td><td>كل العمليات تنجح، أو لا تنجح أي منها</td></tr><tr><td><strong>C</strong>onsistency (الاتساق)</td><td>البيانات تنتقل من حالة صحيحة إلى حالة صحيحة، والقيود محترمة دائماً</td></tr><tr><td><strong>I</strong>solation (العزل)</td><td>المعاملات المتزامنة لا ترى تغييرات بعضها غير المكتملة</td></tr><tr><td><strong>D</strong>urability (الديمومة)</td><td>بعد COMMIT تبقى البيانات حتى لو تعطل الخادم</td></tr></tbody></table></div>\n<p>هذه الخصائص هي سبب اعتماد البنوك والمتاجر على قواعد البيانات العلائقية.</p>\n<h2>القيود والمعاملات معاً</h2>\n<div class=\"code-block src\"><span class=\"code-label\">SQL</span><pre dir=\"ltr\"><code>CREATE TABLE accounts (id INTEGER PRIMARY KEY, owner TEXT, balance INTEGER CHECK (balance &gt;= 0));\nINSERT INTO accounts VALUES (1, &#x27;سعاد&#x27;, 300), (2, &#x27;مازن&#x27;, 200);\n\nBEGIN;\nUPDATE accounts SET balance = balance + 500 WHERE id = 2;\nUPDATE accounts SET balance = balance - 500 WHERE id = 1;</code></pre></div>\n<div class=\"code-block out sql-out\"><span class=\"code-label\">النتيجة</span><div class=\"table-wrap\"><div class=\"sql-err\" dir=\"ltr\">⚠️ CHECK constraint failed: balance &gt;= 0</div></div></div>\n<p>الخصم الثاني فشل لأنه يخالف <code dir=\"ltr\">CHECK (balance &gt;= 0)</code>، وفي هذه الحالة يجب على التطبيق تنفيذ <code dir=\"ltr\">ROLLBACK</code> فيُلغى الإيداع الأول أيضاً، فلا يُخلق مال من العدم.</p>\n<h2>نقاط الحفظ (SAVEPOINT)</h2>\n<p>للتراجع عن جزء من المعاملة فقط:</p>\n<div class=\"code-block src\"><span class=\"code-label\">SQL</span><pre dir=\"ltr\"><code>CREATE TABLE log (msg TEXT);\nBEGIN;\nINSERT INTO log VALUES (&#x27;خطوة 1&#x27;);\nSAVEPOINT before_step2;\nINSERT INTO log VALUES (&#x27;خطوة 2&#x27;);\nROLLBACK TO before_step2;\nINSERT INTO log VALUES (&#x27;خطوة 3&#x27;);\nCOMMIT;\nSELECT * FROM log;</code></pre></div>\n<div class=\"code-block out sql-out\"><span class=\"code-label\">النتيجة</span><div class=\"table-wrap\"><table class=\"res-table\"><thead><tr><th>msg</th></tr></thead><tbody><tr><td class=\"\">خطوة 1</td></tr><tr><td class=\"\">خطوة 3</td></tr></tbody></table></div></div>\n<h2>ملخص الدرس</h2>\n<ul><li>المعاملة تجمع عمليات تنجح كلها أو تُلغى كلها.</li><li><code dir=\"ltr\">BEGIN</code> للبدء، و <code dir=\"ltr\">COMMIT</code> للتثبيت، و <code dir=\"ltr\">ROLLBACK</code> للتراجع.</li><li>ACID: الذرية والاتساق والعزل والديمومة.</li><li><code dir=\"ltr\">SAVEPOINT</code> و <code dir=\"ltr\">ROLLBACK TO</code> للتراجع عن جزء من المعاملة.</li></ul>",
   "exercise": {
    "prompt": "<p>نفّذ عملية شراء داخل <strong>معاملة واحدة</strong>: العميل رقم 3 (خالد) يشتري منتجين من المنتج رقم 2 (سماعة):</p>\n<ol><li>ابدأ معاملة.</li><li>أدخل طلباً في <code dir=\"ltr\">orders</code>: <code dir=\"ltr\">id</code> = <code dir=\"ltr\">200</code>، <code dir=\"ltr\">customer_id</code> = <code dir=\"ltr\">3</code>، <code dir=\"ltr\">order_date</code> = <code dir=\"ltr\">2025-07-20</code>، <code dir=\"ltr\">status</code> = <code dir=\"ltr\">مكتمل</code>.</li><li>أدخل سطراً في <code dir=\"ltr\">order_items</code>: الطلب <code dir=\"ltr\">200</code>، المنتج <code dir=\"ltr\">2</code>، الكمية <code dir=\"ltr\">2</code>، السعر <code dir=\"ltr\">250</code>.</li><li>أنقص مخزون المنتج 2 بمقدار 2.</li><li>ثبّت المعاملة.</li><li>اعرض <code dir=\"ltr\">name</code> و <code dir=\"ltr\">stock</code> للمنتج 2، ثم في استعلام ثانٍ عدد طلبات العميل 3 باسم <code dir=\"ltr\">orders</code>.</li></ol>",
    "starter": "-- 1) ابدأ\n\n-- 2) 3) 4)\n\n-- 5) ثبّت\n\n-- 6) تحقق",
    "expected": "name | stock\nسماعة | 38\n\norders\n2",
    "solution": "BEGIN;\n\nINSERT INTO orders (id, customer_id, order_date, status)\nVALUES (200, 3, '2025-07-20', 'مكتمل');\n\nINSERT INTO order_items (order_id, product_id, quantity, unit_price)\nVALUES (200, 2, 2, 250);\n\nUPDATE products SET stock = stock - 2 WHERE id = 2;\n\nCOMMIT;\n\nSELECT name, stock FROM products WHERE id = 2;\nSELECT COUNT(*) AS orders FROM orders WHERE customer_id = 3;"
   },
   "quiz": [
    {
     "q": "ماذا يحدث للتغييرات عند تنفيذ ROLLBACK؟",
     "o": [
      "تُلغى كل التغييرات منذ BEGIN",
      "تُثبَّت",
      "يُلغى آخر تغيير فقط"
     ],
     "a": 0,
     "why": "ROLLBACK يعيد البيانات لحالتها قبل بدء المعاملة."
    },
    {
     "q": "ماذا تعني الذرية (Atomicity)؟",
     "o": [
      "العمليات في المعاملة تنجح كلها أو لا ينجح أي منها",
      "المعاملة سريعة جداً",
      "كل عملية مستقلة عن غيرها"
     ],
     "a": 0,
     "why": "المعاملة وحدة واحدة لا تتجزأ."
    },
    {
     "q": "لماذا نحتاج معاملة لتحويل مالي بين حسابين؟",
     "o": [
      "حتى لا يُخصم المال من حساب دون أن يُضاف للآخر إذا حدث خطأ في المنتصف",
      "لأن UPDATE لا تعمل بدونها",
      "لتسريع التحويل"
     ],
     "a": 0,
     "why": "بدون معاملة، الفشل بين الخطوتين يترك البيانات في حالة خاطئة."
    }
   ]
  },
  {
   "body": "<h2>كيف تفكر قاعدة البيانات؟</h2>\n<p>عندما تكتب استعلاماً، لا تنفّذه قاعدة البيانات مباشرة. بل يقوم <strong>مخطِّط الاستعلامات (Query Planner)</strong> بدراسة طرق التنفيذ الممكنة ويختار الأسرع حسب تقديره. <strong>EXPLAIN</strong> يكشف لك هذه الخطة، وهو الأداة الأولى لأي مطور يبحث عن سبب بطء استعلام.</p>\n<h2>EXPLAIN في الأنظمة المختلفة</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>النظام</th><th>الأمر</th></tr></thead><tbody><tr><td>SQLite</td><td><code dir=\"ltr\">EXPLAIN QUERY PLAN SELECT ...</code></td></tr><tr><td>PostgreSQL</td><td><code dir=\"ltr\">EXPLAIN SELECT ...</code> أو <code dir=\"ltr\">EXPLAIN ANALYZE SELECT ...</code></td></tr><tr><td>MySQL</td><td><code dir=\"ltr\">EXPLAIN SELECT ...</code></td></tr></tbody></table></div>\n<div class=\"callout tip\">💡 <code dir=\"ltr\">EXPLAIN ANALYZE</code> في PostgreSQL <strong>ينفّذ الاستعلام فعلاً</strong> ويعرض الوقت الحقيقي لكل خطوة، وهو الأدق.</div>\n<h2>قراءة خطة JOIN</h2>\n<div class=\"code-block src\"><span class=\"code-label\">SQL</span><pre dir=\"ltr\"><code>EXPLAIN QUERY PLAN\nSELECT c.name, o.id\nFROM customers c\nJOIN orders o ON o.customer_id = c.id;</code></pre></div>\n<div class=\"code-block out sql-out\"><span class=\"code-label\">النتيجة</span><div class=\"table-wrap\"><table class=\"res-table\"><thead><tr><th>id</th><th>parent</th><th>notused</th><th>detail</th></tr></thead><tbody><tr><td class=\"\">3</td><td class=\"\">0</td><td class=\"\">216</td><td class=\"\">SCAN o</td></tr><tr><td class=\"\">5</td><td class=\"\">0</td><td class=\"\">45</td><td class=\"\">SEARCH c USING INTEGER PRIMARY KEY (rowid=?)</td></tr></tbody></table></div></div>\n<p>مسح <code dir=\"ltr\">orders</code> كاملاً، ولكل طلب بحث عن العميل بالمفتاح الأساسي <code dir=\"ltr\">id</code> (سريع). مع ملايين الطلبات، هذا مقبول لأننا نريدها كلها أصلاً.</p>\n<h2>خطة مع شرط على الجدول الأيسر</h2>\n<div class=\"code-block src\"><span class=\"code-label\">SQL</span><pre dir=\"ltr\"><code>EXPLAIN QUERY PLAN\nSELECT o.id\nFROM customers c\nJOIN orders o ON o.customer_id = c.id\nWHERE c.city = &#x27;جدة&#x27;;</code></pre></div>\n<div class=\"code-block out sql-out\"><span class=\"code-label\">النتيجة</span><div class=\"table-wrap\"><table class=\"res-table\"><thead><tr><th>id</th><th>parent</th><th>notused</th><th>detail</th></tr></thead><tbody><tr><td class=\"\">3</td><td class=\"\">0</td><td class=\"\">216</td><td class=\"\">SCAN o</td></tr><tr><td class=\"\">5</td><td class=\"\">0</td><td class=\"\">45</td><td class=\"\">SEARCH c USING INTEGER PRIMARY KEY (rowid=?)</td></tr></tbody></table></div></div>\n<p>بدون فهرس على <code dir=\"ltr\">orders.customer_id</code>، لا تستطيع قاعدة البيانات القفز من العميل لطلباته. أضف الفهرس وقارن:</p>\n<div class=\"code-block src\"><span class=\"code-label\">SQL</span><pre dir=\"ltr\"><code>CREATE INDEX idx_orders_customer ON orders(customer_id);\n\nEXPLAIN QUERY PLAN\nSELECT o.id\nFROM customers c\nJOIN orders o ON o.customer_id = c.id\nWHERE c.city = &#x27;جدة&#x27;;</code></pre></div>\n<div class=\"code-block out sql-out\"><span class=\"code-label\">النتيجة</span><div class=\"table-wrap\"><table class=\"res-table\"><thead><tr><th>id</th><th>parent</th><th>notused</th><th>detail</th></tr></thead><tbody><tr><td class=\"\">3</td><td class=\"\">0</td><td class=\"\">216</td><td class=\"\">SCAN c</td></tr><tr><td class=\"\">7</td><td class=\"\">0</td><td class=\"\">53</td><td class=\"\">SEARCH o USING COVERING INDEX idx_orders_customer (customer_id=?)</td></tr></tbody></table></div></div>\n<h2>أخطاء شائعة تمنع استخدام الفهرس</h2>\n<p>حتى مع وجود الفهرس، بعض الكتابات تمنع استخدامه:</p>\n<div class=\"code-block src\"><span class=\"code-label\">SQL</span><pre dir=\"ltr\"><code>CREATE INDEX idx_customers_name ON customers(name);\n\nEXPLAIN QUERY PLAN SELECT city FROM customers WHERE name = &#x27;سارة&#x27;;\nEXPLAIN QUERY PLAN SELECT city FROM customers WHERE trim(name) = &#x27;سارة&#x27;;\nEXPLAIN QUERY PLAN SELECT city FROM customers WHERE name LIKE &#x27;%رة&#x27;;</code></pre></div>\n<div class=\"code-block out sql-out\"><span class=\"code-label\">النتيجة</span><div class=\"table-wrap\"><table class=\"res-table\"><thead><tr><th>id</th><th>parent</th><th>notused</th><th>detail</th></tr></thead><tbody><tr><td class=\"\">3</td><td class=\"\">0</td><td class=\"\">62</td><td class=\"\">SEARCH customers USING INDEX idx_customers_name (name=?)</td></tr></tbody></table><table class=\"res-table\"><thead><tr><th>id</th><th>parent</th><th>notused</th><th>detail</th></tr></thead><tbody><tr><td class=\"\">2</td><td class=\"\">0</td><td class=\"\">216</td><td class=\"\">SCAN customers</td></tr></tbody></table><table class=\"res-table\"><thead><tr><th>id</th><th>parent</th><th>notused</th><th>detail</th></tr></thead><tbody><tr><td class=\"\">2</td><td class=\"\">0</td><td class=\"\">216</td><td class=\"\">SCAN customers</td></tr></tbody></table></div></div>\n<p>الاستعلام الأول <code dir=\"ltr\">SEARCH</code> بالفهرس. أما الآخران فـ <code dir=\"ltr\">SCAN</code>: مرّت قاعدة البيانات على كل الصفوف رغم وجود الفهرس.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>الكتابة</th><th>لماذا لا يُستخدم الفهرس</th></tr></thead><tbody><tr><td><code dir=\"ltr\">WHERE trim(name) = ...</code> أو <code dir=\"ltr\">UPPER(email)</code></td><td>تطبيق دالة على العمود يغيّر القيم المفهرسة</td></tr><tr><td><code dir=\"ltr\">LIKE &#x27;%...&#x27;</code></td><td>البداية غير معروفة، والفهرس مرتب من البداية</td></tr><tr><td><code dir=\"ltr\">WHERE price * 1.15 &gt; 100</code></td><td>عملية حسابية على العمود</td></tr></tbody></table></div>\n<p>الحل: اكتب الشرط على العمود &quot;نظيفاً&quot;، مثل <code dir=\"ltr\">price &gt; 100 / 1.15</code>، أو أنشئ فهرساً على التعبير نفسه.</p>\n<h2>قائمة فحص الأداء</h2>\n<ol><li><strong>اختر الأعمدة المطلوبة</strong> وتجنب <code dir=\"ltr\">SELECT *</code>.</li><li><strong>فهرس</strong> الأعمدة في WHERE و JOIN و ORDER BY.</li><li><strong>راجع الخطة</strong> بـ EXPLAIN قبل وبعد التعديل.</li><li><strong>تجنب الدوال على الأعمدة المفهرسة</strong> في الشروط.</li><li><strong>استخدم LIMIT</strong> عندما لا تحتاج كل النتائج.</li><li><strong>قِس دائماً</strong> ولا تخمّن: التحسين المبني على القياس فقط هو ما يُعتمد عليه.</li></ol>\n<h2>ملخص الدرس</h2>\n<ul><li>مخطِّط الاستعلامات يختار طريقة التنفيذ، و EXPLAIN يكشفها.</li><li>SCAN مسح كامل، و SEARCH بحث مباشر عبر فهرس أو مفتاح.</li><li>الدوال والعمليات على العمود، و <code dir=\"ltr\">LIKE &#x27;%...&#x27;</code>، تمنع استخدام الفهرس.</li><li>قِس بـ EXPLAIN قبل التحسين وبعده.</li></ul>",
   "exercise": {
    "prompt": "<p>الاستعلام التالي يبحث عن الطلبات المكتملة في <strong>شهر مارس 2025</strong> باستخدام <code dir=\"ltr\">substr</code> على العمود، فلا يستخدم الفهرس الموجود:</p>\n<ol><li>أبقِ الفهرس كما هو.</li><li>أعد كتابة شرط WHERE ليكون على العمود نظيفاً باستخدام <code dir=\"ltr\">order_date BETWEEN &#x27;2025-03-01&#x27; AND &#x27;2025-03-31&#x27;</code>.</li><li>شغّل <code dir=\"ltr\">EXPLAIN QUERY PLAN</code> للاستعلام الجديد، ثم شغّل الاستعلام نفسه.</li></ol>",
    "starter": "CREATE INDEX idx_orders_date ON orders(order_date);\n\nEXPLAIN QUERY PLAN\nSELECT id, order_date FROM orders\nWHERE substr(order_date, 1, 7) = '2025-03';\n\nSELECT id, order_date FROM orders\nWHERE substr(order_date, 1, 7) = '2025-03';",
    "expected": "id | parent | notused | detail\n2 | 0 | 153 | SEARCH orders USING COVERING INDEX idx_orders_date (order_date>? AND order_date<?)\n\nid | order_date\n105 | 2025-03-02\n106 | 2025-03-15",
    "solution": "CREATE INDEX idx_orders_date ON orders(order_date);\n\nEXPLAIN QUERY PLAN\nSELECT id, order_date FROM orders\nWHERE order_date BETWEEN '2025-03-01' AND '2025-03-31';\n\nSELECT id, order_date FROM orders\nWHERE order_date BETWEEN '2025-03-01' AND '2025-03-31';"
   },
   "quiz": [
    {
     "q": "ما وظيفة EXPLAIN؟",
     "o": [
      "عرض الخطة التي ستنفّذ بها قاعدة البيانات الاستعلام",
      "شرح أخطاء الاستعلام",
      "تسريع الاستعلام تلقائياً"
     ],
     "a": 0,
     "why": "EXPLAIN أداة تشخيص الأداء الأولى."
    },
    {
     "q": "لماذا لا يُستخدم الفهرس على email في <code dir=\"ltr\">WHERE UPPER(email) = &#x27;X&#x27;</code>؟",
     "o": [
      "لأن الدالة تُطبَّق على العمود فتتغير القيم عن المفهرسة",
      "لأن UPPER لا تعمل مع الفهارس أبداً في أي نظام",
      "لأن email نص"
     ],
     "a": 0,
     "why": "الشرط يجب أن يكون على العمود نفسه، أو يُنشأ فهرس على التعبير."
    },
    {
     "q": "أيها يستطيع استخدام فهرس على name؟",
     "o": [
      "<code dir=\"ltr\">WHERE name LIKE &#x27;أحم%&#x27;</code>",
      "<code dir=\"ltr\">WHERE name LIKE &#x27;%مد&#x27;</code>",
      "<code dir=\"ltr\">WHERE name LIKE &#x27;%حم%&#x27;</code>"
     ],
     "a": 0,
     "why": "عندما تكون البداية معروفة، يستطيع الفهرس المرتب القفز إليها."
    }
   ]
  }
 ],
 [
  {
   "body": "<h2>التجميع دون فقدان الصفوف</h2>\n<p><code dir=\"ltr\">GROUP BY</code> تلخّص الصفوف فتختفي التفاصيل: صف واحد لكل مجموعة. لكن ماذا لو أردنا <strong>رقم ترتيب</strong> لكل منتج حسب السعر، مع الإبقاء على كل صف؟ هنا تأتي <strong>دوال النوافذ (Window Functions)</strong>: تحسب قيمة لكل صف بالنظر إلى &quot;نافذة&quot; من الصفوف حوله.</p>\n<h2>ROW_NUMBER</h2>\n<div class=\"code-block src\"><span class=\"code-label\">SQL</span><pre dir=\"ltr\"><code>SELECT name, price,\n       ROW_NUMBER() OVER (ORDER BY price DESC) AS rank\nFROM products\nLIMIT 5;</code></pre></div>\n<div class=\"code-block out sql-out\"><span class=\"code-label\">النتيجة</span><div class=\"table-wrap\"><table class=\"res-table\"><thead><tr><th>name</th><th>price</th><th>rank</th></tr></thead><tbody><tr><td class=\"\">لابتوب</td><td class=\"\">3500</td><td class=\"\">1</td></tr><tr><td class=\"\">ساعة ذكية</td><td class=\"\">900</td><td class=\"\">2</td></tr><tr><td class=\"\">نظارة</td><td class=\"\">350</td><td class=\"\">3</td></tr><tr><td class=\"\">حذاء رياضي</td><td class=\"\">300</td><td class=\"\">4</td></tr><tr><td class=\"\">سماعة</td><td class=\"\">250</td><td class=\"\">5</td></tr></tbody></table></div></div>\n<ul><li><code dir=\"ltr\">OVER (...)</code> هي ما يجعل الدالة &quot;دالة نافذة&quot;.</li><li><code dir=\"ltr\">ORDER BY price DESC</code> داخل OVER تحدد الترتيب المستخدم للترقيم.</li><li>كل الصفوف بقيت، وأُضيف لها عمود جديد.</li></ul>\n<h2>RANK و DENSE_RANK: التعامل مع التعادل</h2>\n<p>عندما تتساوى القيم، تختلف الدوال الثلاث:</p>\n<div class=\"code-block src\"><span class=\"code-label\">SQL</span><pre dir=\"ltr\"><code>SELECT name, salary,\n       ROW_NUMBER() OVER (ORDER BY salary DESC) AS row_num,\n       RANK()       OVER (ORDER BY salary DESC) AS rank,\n       DENSE_RANK() OVER (ORDER BY salary DESC) AS dense\nFROM employees\nWHERE salary &lt; 13000;</code></pre></div>\n<div class=\"code-block out sql-out\"><span class=\"code-label\">النتيجة</span><div class=\"table-wrap\"><table class=\"res-table\"><thead><tr><th>name</th><th>salary</th><th>row_num</th><th>rank</th><th>dense</th></tr></thead><tbody><tr><td class=\"\">سلطان</td><td class=\"\">12000</td><td class=\"\">1</td><td class=\"\">1</td><td class=\"\">1</td></tr><tr><td class=\"\">لمى</td><td class=\"\">9500</td><td class=\"\">2</td><td class=\"\">2</td><td class=\"\">2</td></tr><tr><td class=\"\">بدر</td><td class=\"\">9500</td><td class=\"\">3</td><td class=\"\">2</td><td class=\"\">2</td></tr><tr><td class=\"\">جود</td><td class=\"\">8000</td><td class=\"\">4</td><td class=\"\">4</td><td class=\"\">3</td></tr></tbody></table></div></div>\n<div class=\"table-wrap\"><table><thead><tr><th>الدالة</th><th>عند التعادل</th><th>ما بعد التعادل</th></tr></thead><tbody><tr><td><code dir=\"ltr\">ROW_NUMBER</code></td><td>أرقام مختلفة دائماً</td><td>تسلسل عادي</td></tr><tr><td><code dir=\"ltr\">RANK</code></td><td>نفس الرقم</td><td>تقفز (1، 2، 2، 4)</td></tr><tr><td><code dir=\"ltr\">DENSE_RANK</code></td><td>نفس الرقم</td><td>بلا قفز (1، 2، 2، 3)</td></tr></tbody></table></div>\n<p>لمى وبدر راتبهما متساوٍ، فحصلا على نفس الترتيب في RANK و DENSE_RANK، والفرق في جود: 4 مع RANK و 3 مع DENSE_RANK.</p>\n<h2>أشهر استخدام: أفضل N</h2>\n<p>دوال النوافذ لا يمكن استخدامها في <code dir=\"ltr\">WHERE</code> مباشرة (لأنها تُحسب بعدها)، فنضعها في CTE ثم نصفّي:</p>\n<div class=\"code-block src\"><span class=\"code-label\">SQL</span><pre dir=\"ltr\"><code>WITH ranked AS (\n  SELECT name, price,\n         DENSE_RANK() OVER (ORDER BY price DESC) AS r\n  FROM products\n)\nSELECT name, price FROM ranked WHERE r &lt;= 3;</code></pre></div>\n<div class=\"code-block out sql-out\"><span class=\"code-label\">النتيجة</span><div class=\"table-wrap\"><table class=\"res-table\"><thead><tr><th>name</th><th>price</th></tr></thead><tbody><tr><td class=\"\">لابتوب</td><td class=\"\">3500</td></tr><tr><td class=\"\">ساعة ذكية</td><td class=\"\">900</td></tr><tr><td class=\"\">نظارة</td><td class=\"\">350</td></tr></tbody></table></div></div>\n<h2>مقارنة الصف بالمجموع</h2>\n<p>دوال التجميع نفسها تعمل كدوال نوافذ مع <code dir=\"ltr\">OVER()</code>:</p>\n<div class=\"code-block src\"><span class=\"code-label\">SQL</span><pre dir=\"ltr\"><code>SELECT name, salary,\n       SUM(salary) OVER () AS total_payroll,\n       ROUND(100.0 * salary / SUM(salary) OVER (), 1) AS percent\nFROM employees\nORDER BY salary DESC\nLIMIT 4;</code></pre></div>\n<div class=\"code-block out sql-out\"><span class=\"code-label\">النتيجة</span><div class=\"table-wrap\"><table class=\"res-table\"><thead><tr><th>name</th><th>salary</th><th>total_payroll</th><th>percent</th></tr></thead><tbody><tr><td class=\"\">منصور</td><td class=\"\">25000</td><td class=\"\">111500</td><td class=\"\">22.4</td></tr><tr><td class=\"\">ريم</td><td class=\"\">18000</td><td class=\"\">111500</td><td class=\"\">16.1</td></tr><tr><td class=\"\">دانة</td><td class=\"\">15500</td><td class=\"\">111500</td><td class=\"\">13.9</td></tr><tr><td class=\"\">ياسر</td><td class=\"\">14000</td><td class=\"\">111500</td><td class=\"\">12.6</td></tr></tbody></table></div></div>\n<p><code dir=\"ltr\">OVER ()</code> الفارغة تعني &quot;النافذة هي كل الصفوف&quot;. هكذا حسبنا نسبة كل راتب من الإجمالي دون GROUP BY ودون استعلام فرعي.</p>\n<h2>ملخص الدرس</h2>\n<ul><li>دوال النوافذ تحسب قيمة لكل صف مع الإبقاء على كل الصفوف.</li><li><code dir=\"ltr\">ROW_NUMBER</code> ترقيم فريد، و <code dir=\"ltr\">RANK</code> تعادل مع قفز، و <code dir=\"ltr\">DENSE_RANK</code> تعادل بلا قفز.</li><li>لتصفية نتيجة دالة نافذة ضعها في CTE ثم استخدم WHERE.</li><li><code dir=\"ltr\">SUM(...) OVER ()</code> لمقارنة الصف بالإجمالي.</li></ul>",
   "exercise": {
    "prompt": "<p>رتّب <strong>العملاء حسب إجمالي إنفاقهم</strong> على الطلبات المكتملة:</p>\n<ol><li>في CTE اسمه <code dir=\"ltr\">spending</code>، احسب لكل عميل (<code dir=\"ltr\">customer_id</code>) مجموع <code dir=\"ltr\">quantity * unit_price</code> للطلبات المكتملة باسم <code dir=\"ltr\">spent</code>.</li><li>اعرض اسم العميل <code dir=\"ltr\">name</code> و <code dir=\"ltr\">spent</code> وترتيبه <code dir=\"ltr\">RANK() OVER (ORDER BY spent DESC)</code> باسم <code dir=\"ltr\">position</code>، مرتبين حسب <code dir=\"ltr\">position</code>.</li></ol>",
    "starter": "WITH spending AS (\n\n)\nSELECT",
    "expected": "name | spent | position\nأحمد | 5080 | 1\nليلى | 3500 | 2\nنورة | 1245 | 3\nسارة | 450 | 4",
    "solution": "WITH spending AS (\n  SELECT o.customer_id, SUM(oi.quantity * oi.unit_price) AS spent\n  FROM orders o\n  JOIN order_items oi ON oi.order_id = o.id\n  WHERE o.status = 'مكتمل'\n  GROUP BY o.customer_id\n)\nSELECT c.name, s.spent,\n       RANK() OVER (ORDER BY s.spent DESC) AS position\nFROM spending s\nJOIN customers c ON c.id = s.customer_id\nORDER BY position;"
   },
   "quiz": [
    {
     "q": "ما الفرق الأساسي بين GROUP BY ودوال النوافذ؟",
     "o": [
      "GROUP BY تختصر الصفوف إلى صف لكل مجموعة، ودوال النوافذ تبقي كل الصفوف وتضيف عموداً محسوباً",
      "لا فرق",
      "دوال النوافذ أبطأ دائماً"
     ],
     "a": 0,
     "why": "هذه هي الميزة الكبرى لدوال النوافذ."
    },
    {
     "q": "القيم 100، 90، 90، 80 مرتبة تنازلياً. ما قيمة RANK للرقم 80؟",
     "o": [
      "3",
      "4",
      "2"
     ],
     "a": 1,
     "why": "RANK تقفز بعد التعادل: 1، 2، 2، 4."
    },
    {
     "q": "لماذا لا نكتب <code dir=\"ltr\">WHERE ROW_NUMBER() OVER (...) &lt;= 3</code> مباشرة؟",
     "o": [
      "لأن دوال النوافذ تُحسب بعد WHERE، فنضعها في CTE أو استعلام فرعي أولاً",
      "لأن ROW_NUMBER لا تقبل المقارنة",
      "يمكن كتابتها هكذا مباشرة"
     ],
     "a": 0,
     "why": "ترتيب التنفيذ يجعل WHERE تسبق حساب دوال النوافذ."
    }
   ]
  },
  {
   "body": "<h2>نافذة لكل مجموعة</h2>\n<p>في الدرس السابق كانت النافذة كل الجدول. <code dir=\"ltr\">PARTITION BY</code> تقسم الصفوف إلى مجموعات، <strong>وتُحسب الدالة داخل كل مجموعة على حدة</strong>، مثل GROUP BY لكن دون اختصار الصفوف.</p>\n<h2>الترتيب داخل كل قسم</h2>\n<div class=\"code-block src\"><span class=\"code-label\">SQL</span><pre dir=\"ltr\"><code>SELECT department, name, salary,\n       RANK() OVER (PARTITION BY department ORDER BY salary DESC) AS dept_rank\nFROM employees\nORDER BY department, dept_rank;</code></pre></div>\n<div class=\"code-block out sql-out\"><span class=\"code-label\">النتيجة</span><div class=\"table-wrap\"><table class=\"res-table\"><thead><tr><th>department</th><th>name</th><th>salary</th><th>dept_rank</th></tr></thead><tbody><tr><td class=\"\">الإدارة</td><td class=\"\">منصور</td><td class=\"\">25000</td><td class=\"\">1</td></tr><tr><td class=\"\">التقنية</td><td class=\"\">ريم</td><td class=\"\">18000</td><td class=\"\">1</td></tr><tr><td class=\"\">التقنية</td><td class=\"\">دانة</td><td class=\"\">15500</td><td class=\"\">2</td></tr><tr><td class=\"\">التقنية</td><td class=\"\">ياسر</td><td class=\"\">14000</td><td class=\"\">3</td></tr><tr><td class=\"\">الدعم</td><td class=\"\">جود</td><td class=\"\">8000</td><td class=\"\">1</td></tr><tr><td class=\"\">المبيعات</td><td class=\"\">سلطان</td><td class=\"\">12000</td><td class=\"\">1</td></tr><tr><td class=\"\">المبيعات</td><td class=\"\">لمى</td><td class=\"\">9500</td><td class=\"\">2</td></tr><tr><td class=\"\">المبيعات</td><td class=\"\">بدر</td><td class=\"\">9500</td><td class=\"\">2</td></tr></tbody></table></div></div>\n<p>الترتيب يبدأ من 1 من جديد في كل قسم.</p>\n<h2>أفضل عنصر في كل مجموعة</h2>\n<p>من أشهر الأسئلة في مقابلات SQL: &quot;أعلى راتب في كل قسم مع اسم صاحبه&quot;:</p>\n<div class=\"code-block src\"><span class=\"code-label\">SQL</span><pre dir=\"ltr\"><code>WITH ranked AS (\n  SELECT department, name, salary,\n         ROW_NUMBER() OVER (PARTITION BY department ORDER BY salary DESC) AS rn\n  FROM employees\n)\nSELECT department, name, salary\nFROM ranked\nWHERE rn = 1\nORDER BY salary DESC;</code></pre></div>\n<div class=\"code-block out sql-out\"><span class=\"code-label\">النتيجة</span><div class=\"table-wrap\"><table class=\"res-table\"><thead><tr><th>department</th><th>name</th><th>salary</th></tr></thead><tbody><tr><td class=\"\">الإدارة</td><td class=\"\">منصور</td><td class=\"\">25000</td></tr><tr><td class=\"\">التقنية</td><td class=\"\">ريم</td><td class=\"\">18000</td></tr><tr><td class=\"\">المبيعات</td><td class=\"\">سلطان</td><td class=\"\">12000</td></tr><tr><td class=\"\">الدعم</td><td class=\"\">جود</td><td class=\"\">8000</td></tr></tbody></table></div></div>\n<p>مع GROUP BY وحدها نستطيع معرفة أعلى راتب <code dir=\"ltr\">MAX(salary)</code>، لكن ليس <strong>اسم</strong> صاحبه بسهولة. دوال النوافذ تحل هذا بأناقة.</p>\n<h2>المقارنة بمتوسط المجموعة</h2>\n<div class=\"code-block src\"><span class=\"code-label\">SQL</span><pre dir=\"ltr\"><code>SELECT name, department, salary,\n       ROUND(AVG(salary) OVER (PARTITION BY department)) AS dept_avg,\n       salary - ROUND(AVG(salary) OVER (PARTITION BY department)) AS diff\nFROM employees\nWHERE department IN (&#x27;التقنية&#x27;, &#x27;المبيعات&#x27;)\nORDER BY department, salary DESC;</code></pre></div>\n<div class=\"code-block out sql-out\"><span class=\"code-label\">النتيجة</span><div class=\"table-wrap\"><table class=\"res-table\"><thead><tr><th>name</th><th>department</th><th>salary</th><th>dept_avg</th><th>diff</th></tr></thead><tbody><tr><td class=\"\">ريم</td><td class=\"\">التقنية</td><td class=\"\">18000</td><td class=\"\">15833</td><td class=\"\">2167</td></tr><tr><td class=\"\">دانة</td><td class=\"\">التقنية</td><td class=\"\">15500</td><td class=\"\">15833</td><td class=\"\">-333</td></tr><tr><td class=\"\">ياسر</td><td class=\"\">التقنية</td><td class=\"\">14000</td><td class=\"\">15833</td><td class=\"\">-1833</td></tr><tr><td class=\"\">سلطان</td><td class=\"\">المبيعات</td><td class=\"\">12000</td><td class=\"\">10333</td><td class=\"\">1667</td></tr><tr><td class=\"\">لمى</td><td class=\"\">المبيعات</td><td class=\"\">9500</td><td class=\"\">10333</td><td class=\"\">-833</td></tr><tr><td class=\"\">بدر</td><td class=\"\">المبيعات</td><td class=\"\">9500</td><td class=\"\">10333</td><td class=\"\">-833</td></tr></tbody></table></div></div>\n<p>كل موظف بجانبه متوسط قسمه والفرق عنه، في استعلام واحد.</p>\n<h2>المجموع التراكمي (Running Total)</h2>\n<p>عندما نضيف <code dir=\"ltr\">ORDER BY</code> داخل نافذة تجميع، يصبح المجموع <strong>تراكمياً</strong> حتى الصف الحالي:</p>\n<div class=\"code-block src\"><span class=\"code-label\">SQL</span><pre dir=\"ltr\"><code>WITH daily AS (\n  SELECT o.order_date, SUM(oi.quantity * oi.unit_price) AS revenue\n  FROM orders o\n  JOIN order_items oi ON oi.order_id = o.id\n  WHERE o.status = &#x27;مكتمل&#x27;\n  GROUP BY o.order_date\n)\nSELECT order_date, revenue,\n       SUM(revenue) OVER (ORDER BY order_date) AS running_total\nFROM daily;</code></pre></div>\n<div class=\"code-block out sql-out\"><span class=\"code-label\">النتيجة</span><div class=\"table-wrap\"><table class=\"res-table\"><thead><tr><th>order_date</th><th>revenue</th><th>running_total</th></tr></thead><tbody><tr><td class=\"\">2025-01-05</td><td class=\"\">4000</td><td class=\"\">4000</td></tr><tr><td class=\"\">2025-01-09</td><td class=\"\">450</td><td class=\"\">4450</td></tr><tr><td class=\"\">2025-02-14</td><td class=\"\">900</td><td class=\"\">5350</td></tr><tr><td class=\"\">2025-03-02</td><td class=\"\">185</td><td class=\"\">5535</td></tr><tr><td class=\"\">2025-04-01</td><td class=\"\">3500</td><td class=\"\">9035</td></tr><tr><td class=\"\">2025-05-20</td><td class=\"\">180</td><td class=\"\">9215</td></tr><tr><td class=\"\">2025-06-03</td><td class=\"\">1060</td><td class=\"\">10275</td></tr></tbody></table></div></div>\n<p>هذا الرسم الكلاسيكي في لوحات المبيعات: &quot;الإيرادات منذ بداية السنة حتى اليوم&quot;.</p>\n<h2>ملخص الدرس</h2>\n<ul><li><code dir=\"ltr\">PARTITION BY</code> تقسم الصفوف لمجموعات، والدالة تُحسب داخل كل مجموعة.</li><li><code dir=\"ltr\">ROW_NUMBER() OVER (PARTITION BY ... ORDER BY ...)</code> ثم <code dir=\"ltr\">WHERE rn = 1</code> لأفضل عنصر في كل مجموعة.</li><li><code dir=\"ltr\">AVG(...) OVER (PARTITION BY ...)</code> لمقارنة الصف بمجموعته.</li><li><code dir=\"ltr\">SUM(...) OVER (ORDER BY ...)</code> لمجموع تراكمي.</li></ul>",
   "exercise": {
    "prompt": "<p>اعرض <strong>أغلى منتج في كل تصنيف</strong>:</p>\n<ul><li>استخدم CTE فيه <code dir=\"ltr\">ROW_NUMBER() OVER (PARTITION BY category ORDER BY price DESC)</code> باسم <code dir=\"ltr\">rn</code>.</li><li>اعرض <code dir=\"ltr\">category</code> و <code dir=\"ltr\">name</code> و <code dir=\"ltr\">price</code> للصفوف التي <code dir=\"ltr\">rn = 1</code>، مرتبة حسب <code dir=\"ltr\">price</code> تنازلياً.</li></ul>",
    "starter": "WITH ranked AS (\n\n)\nSELECT category, name, price\nFROM ranked",
    "expected": "category | name | price\nإلكترونيات | لابتوب | 3500\nإكسسوارات | نظارة | 350\nملابس | حذاء رياضي | 300\nكتب | كتاب طبخ | 70",
    "solution": "WITH ranked AS (\n  SELECT category, name, price,\n         ROW_NUMBER() OVER (PARTITION BY category ORDER BY price DESC) AS rn\n  FROM products\n)\nSELECT category, name, price\nFROM ranked\nWHERE rn = 1\nORDER BY price DESC;"
   },
   "quiz": [
    {
     "q": "ما وظيفة PARTITION BY داخل OVER؟",
     "o": [
      "تقسيم الصفوف إلى مجموعات تُحسب الدالة داخل كل منها",
      "ترتيب النتيجة النهائية",
      "حذف التكرار"
     ],
     "a": 0,
     "why": "مثل GROUP BY لكن دون اختصار الصفوف."
    },
    {
     "q": "ماذا يحسب <code dir=\"ltr\">SUM(x) OVER (ORDER BY date)</code>؟",
     "o": [
      "مجموعاً تراكمياً حتى الصف الحالي",
      "المجموع الكلي فقط",
      "مجموع كل يوم منفصلاً"
     ],
     "a": 0,
     "why": "وجود ORDER BY في النافذة يجعل الحساب تراكمياً."
    },
    {
     "q": "كيف تجد اسم صاحب أعلى راتب في كل قسم؟",
     "o": [
      "<code dir=\"ltr\">SELECT department, name, MAX(salary) GROUP BY department</code>",
      "<code dir=\"ltr\">ROW_NUMBER() OVER (PARTITION BY department ORDER BY salary DESC)</code> ثم تصفية rn = 1",
      "لا يمكن ذلك في SQL"
     ],
     "a": 1,
     "why": "الطريقة الأولى تعطي اسماً غير مضمون في أغلب الأنظمة."
    }
   ]
  },
  {
   "body": "<h2>النظر إلى الصف السابق والتالي</h2>\n<p>بعض الأسئلة تتطلب مقارنة الصف بجيرانه: &quot;كم زادت المبيعات عن الشهر الماضي؟&quot; أو &quot;كم يوماً مرّ بين طلبين للعميل؟&quot;. الدالتان <code dir=\"ltr\">LAG</code> و <code dir=\"ltr\">LEAD</code> تعطيانك قيمة من صف سابق أو لاحق.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>الدالة</th><th>تُرجع</th></tr></thead><tbody><tr><td><code dir=\"ltr\">LAG(عمود)</code></td><td>القيمة من <strong>الصف السابق</strong></td></tr><tr><td><code dir=\"ltr\">LEAD(عمود)</code></td><td>القيمة من <strong>الصف التالي</strong></td></tr><tr><td><code dir=\"ltr\">LAG(عمود, n)</code></td><td>من n صفوف قبل</td></tr><tr><td><code dir=\"ltr\">LAG(عمود, 1, قيمة)</code></td><td>مع قيمة افتراضية بدلاً من NULL</td></tr></tbody></table></div>\n<h2>المقارنة بالفترة السابقة</h2>\n<div class=\"code-block src\"><span class=\"code-label\">SQL</span><pre dir=\"ltr\"><code>WITH monthly AS (\n  SELECT substr(o.order_date, 1, 7) AS month,\n         SUM(oi.quantity * oi.unit_price) AS revenue\n  FROM orders o\n  JOIN order_items oi ON oi.order_id = o.id\n  GROUP BY month\n)\nSELECT month, revenue,\n       LAG(revenue) OVER (ORDER BY month) AS prev_month,\n       revenue - LAG(revenue) OVER (ORDER BY month) AS change\nFROM monthly;</code></pre></div>\n<div class=\"code-block out sql-out\"><span class=\"code-label\">النتيجة</span><div class=\"table-wrap\"><table class=\"res-table\"><thead><tr><th>month</th><th>revenue</th><th>prev_month</th><th>change</th></tr></thead><tbody><tr><td class=\"\">2025-01</td><td class=\"\">4450</td><td class=\"null\">NULL</td><td class=\"null\">NULL</td></tr><tr><td class=\"\">2025-02</td><td class=\"\">1200</td><td class=\"\">4450</td><td class=\"\">-3250</td></tr><tr><td class=\"\">2025-03</td><td class=\"\">785</td><td class=\"\">1200</td><td class=\"\">-415</td></tr><tr><td class=\"\">2025-04</td><td class=\"\">4040</td><td class=\"\">785</td><td class=\"\">3255</td></tr><tr><td class=\"\">2025-05</td><td class=\"\">180</td><td class=\"\">4040</td><td class=\"\">-3860</td></tr><tr><td class=\"\">2025-06</td><td class=\"\">1060</td><td class=\"\">180</td><td class=\"\">880</td></tr></tbody></table></div></div>\n<p>أول شهر ليس له سابق، فالقيمة <code dir=\"ltr\">NULL</code>. وهذا التقرير &quot;نمو المبيعات شهرياً&quot; مطلوب في كل شركة تقريباً.</p>\n<h2>LEAD: الصف التالي</h2>\n<div class=\"code-block src\"><span class=\"code-label\">SQL</span><pre dir=\"ltr\"><code>SELECT id, order_date,\n       LEAD(order_date) OVER (ORDER BY order_date) AS next_order\nFROM orders\nWHERE customer_id = 1;</code></pre></div>\n<div class=\"code-block out sql-out\"><span class=\"code-label\">النتيجة</span><div class=\"table-wrap\"><table class=\"res-table\"><thead><tr><th>id</th><th>order_date</th><th>next_order</th></tr></thead><tbody><tr><td class=\"\">101</td><td class=\"\">2025-01-05</td><td class=\"\">2025-02-14</td></tr><tr><td class=\"\">103</td><td class=\"\">2025-02-14</td><td class=\"\">2025-05-20</td></tr><tr><td class=\"\">109</td><td class=\"\">2025-05-20</td><td class=\"null\">NULL</td></tr></tbody></table></div></div>\n<h2>مع PARTITION BY: لكل عميل على حدة</h2>\n<div class=\"code-block src\"><span class=\"code-label\">SQL</span><pre dir=\"ltr\"><code>SELECT customer_id, id, order_date,\n       LAG(order_date) OVER (PARTITION BY customer_id ORDER BY order_date) AS previous,\n       julianday(order_date)\n         - julianday(LAG(order_date) OVER (PARTITION BY customer_id ORDER BY order_date)) AS days_between\nFROM orders\nWHERE customer_id IN (1, 4)\nORDER BY customer_id, order_date;</code></pre></div>\n<div class=\"code-block out sql-out\"><span class=\"code-label\">النتيجة</span><div class=\"table-wrap\"><table class=\"res-table\"><thead><tr><th>customer_id</th><th>id</th><th>order_date</th><th>previous</th><th>days_between</th></tr></thead><tbody><tr><td class=\"\">1</td><td class=\"\">101</td><td class=\"\">2025-01-05</td><td class=\"null\">NULL</td><td class=\"null\">NULL</td></tr><tr><td class=\"\">1</td><td class=\"\">103</td><td class=\"\">2025-02-14</td><td class=\"\">2025-01-05</td><td class=\"\">40</td></tr><tr><td class=\"\">1</td><td class=\"\">109</td><td class=\"\">2025-05-20</td><td class=\"\">2025-02-14</td><td class=\"\">95</td></tr><tr><td class=\"\">4</td><td class=\"\">105</td><td class=\"\">2025-03-02</td><td class=\"null\">NULL</td><td class=\"null\">NULL</td></tr><tr><td class=\"\">4</td><td class=\"\">110</td><td class=\"\">2025-06-03</td><td class=\"\">2025-03-02</td><td class=\"\">93</td></tr></tbody></table></div></div>\n<p><code dir=\"ltr\">julianday</code> تحوّل التاريخ لرقم أيام في SQLite، فالفرق بينهما عدد الأيام. (في PostgreSQL يكفي طرح التاريخين مباشرة.) هكذا نقيس مثلاً <strong>معدل تكرار الشراء</strong> لكل عميل.</p>\n<h2>دوال نوافذ أخرى مفيدة</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>الدالة</th><th>تُرجع</th></tr></thead><tbody><tr><td><code dir=\"ltr\">FIRST_VALUE(عمود)</code></td><td>أول قيمة في النافذة</td></tr><tr><td><code dir=\"ltr\">LAST_VALUE(عمود)</code></td><td>آخر قيمة في النافذة</td></tr><tr><td><code dir=\"ltr\">NTILE(n)</code></td><td>تقسيم الصفوف إلى n مجموعات متساوية (مثل الأرباع)</td></tr><tr><td><code dir=\"ltr\">PERCENT_RANK()</code></td><td>الترتيب كنسبة من 0 إلى 1</td></tr></tbody></table></div>\n<div class=\"code-block src\"><span class=\"code-label\">SQL</span><pre dir=\"ltr\"><code>SELECT name, price,\n       NTILE(3) OVER (ORDER BY price DESC) AS price_tier\nFROM products;</code></pre></div>\n<div class=\"code-block out sql-out\"><span class=\"code-label\">النتيجة</span><div class=\"table-wrap\"><table class=\"res-table\"><thead><tr><th>name</th><th>price</th><th>price_tier</th></tr></thead><tbody><tr><td class=\"\">لابتوب</td><td class=\"\">3500</td><td class=\"\">1</td></tr><tr><td class=\"\">ساعة ذكية</td><td class=\"\">900</td><td class=\"\">1</td></tr><tr><td class=\"\">نظارة</td><td class=\"\">350</td><td class=\"\">1</td></tr><tr><td class=\"\">حذاء رياضي</td><td class=\"\">300</td><td class=\"\">1</td></tr><tr><td class=\"\">سماعة</td><td class=\"\">250</td><td class=\"\">2</td></tr><tr><td class=\"\">حقيبة</td><td class=\"\">180</td><td class=\"\">2</td></tr><tr><td class=\"\">قميص</td><td class=\"\">120</td><td class=\"\">2</td></tr><tr><td class=\"\">شاحن</td><td class=\"\">80</td><td class=\"\">3</td></tr><tr><td class=\"\">كتاب طبخ</td><td class=\"\">70</td><td class=\"\">3</td></tr><tr><td class=\"\">رواية</td><td class=\"\">45</td><td class=\"\">3</td></tr></tbody></table></div></div>\n<p>قسّمنا المنتجات إلى ثلاث فئات سعرية متقاربة العدد.</p>\n<h2>خاتمة الدورة</h2>\n<p>بهذا الدرس أكملت دورة SQL! أصبحت قادراً على:</p>\n<ul><li>الاستعلام والتصفية والترتيب والتجميع.</li><li>ربط الجداول بكل أنواع JOIN.</li><li>كتابة استعلامات متقدمة بالاستعلامات الفرعية و CTE و CASE.</li><li>إضافة البيانات وتعديلها وحذفها بأمان.</li><li>تصميم قواعد بيانات مطبّعة بالقيود والمفاتيح.</li><li>تحسين الأداء بالفهارس والمعاملات و EXPLAIN.</li><li>التحليل المتقدم بدوال النوافذ.</li></ul>\n<div class=\"callout tip\">💡 الخطوة التالية: طبّق على بيانات حقيقية. مشروع التخرج المقترح: صمّم قاعدة بيانات متجر كاملة، واكتب 10 تقارير مبيعات تجيب عن أسئلة عمل حقيقية.</div>\n<h2>ملخص الدرس</h2>\n<ul><li><code dir=\"ltr\">LAG</code> للصف السابق و <code dir=\"ltr\">LEAD</code> للتالي، و NULL حيث لا يوجد جار.</li><li>مع <code dir=\"ltr\">PARTITION BY</code> تُحسب المقارنة داخل كل مجموعة.</li><li><code dir=\"ltr\">NTILE(n)</code> لتقسيم الصفوف إلى فئات.</li></ul>",
   "exercise": {
    "prompt": "<p>احسب لكل موظف <strong>الفرق بين راتبه وراتب الموظف الذي يليه</strong> في الترتيب التنازلي للرواتب:</p>\n<ul><li>اعرض <code dir=\"ltr\">name</code> و <code dir=\"ltr\">salary</code>.</li><li><code dir=\"ltr\">LEAD(salary) OVER (ORDER BY salary DESC, id)</code> باسم <code dir=\"ltr\">next_salary</code>.</li><li>الفرق <code dir=\"ltr\">salary - next_salary</code> باسم <code dir=\"ltr\">gap</code>.</li><li>رتّب حسب <code dir=\"ltr\">salary</code> تنازلياً ثم <code dir=\"ltr\">id</code>.</li></ul>",
    "starter": "SELECT name, salary\nFROM employees\nORDER BY salary DESC, id;",
    "expected": "name | salary | next_salary | gap\nمنصور | 25000 | 18000 | 7000\nريم | 18000 | 15500 | 2500\nدانة | 15500 | 14000 | 1500\nياسر | 14000 | 12000 | 2000\nسلطان | 12000 | 9500 | 2500\nلمى | 9500 | 9500 | 0\nبدر | 9500 | 8000 | 1500\nجود | 8000 | NULL | NULL",
    "solution": "SELECT name, salary,\n       LEAD(salary) OVER (ORDER BY salary DESC, id) AS next_salary,\n       salary - LEAD(salary) OVER (ORDER BY salary DESC, id) AS gap\nFROM employees\nORDER BY salary DESC, id;"
   },
   "quiz": [
    {
     "q": "ماذا تُرجع <code dir=\"ltr\">LAG(revenue)</code> لأول صف في النافذة؟",
     "o": [
      "NULL، لأنه لا يوجد صف سابق",
      "0",
      "قيمة الصف نفسه"
     ],
     "a": 0,
     "why": "يمكن تحديد قيمة افتراضية بالمعامل الثالث."
    },
    {
     "q": "أي دالة تعطيك قيمة الصف التالي؟",
     "o": [
      "LAG",
      "LEAD",
      "NEXT"
     ],
     "a": 1,
     "why": "LEAD تنظر للأمام، و LAG للخلف."
    },
    {
     "q": "ما وظيفة <code dir=\"ltr\">NTILE(4) OVER (ORDER BY price)</code>؟",
     "o": [
      "تقسيم الصفوف إلى أربع مجموعات متقاربة العدد حسب السعر",
      "إرجاع أول 4 صفوف",
      "حساب ربع السعر"
     ],
     "a": 0,
     "why": "مفيدة لتقسيم العملاء أو المنتجات إلى شرائح."
    }
   ]
  }
 ]
], {"runner": "sql", "setup": "-- قاعدة بيانات متجر إلكتروني تستخدمها كل دروس SQL في CodeWay\n\nCREATE TABLE customers (\n  id INTEGER PRIMARY KEY,\n  name TEXT NOT NULL,\n  city TEXT,\n  email TEXT UNIQUE,\n  joined TEXT\n);\n\nCREATE TABLE products (\n  id INTEGER PRIMARY KEY,\n  name TEXT NOT NULL,\n  category TEXT,\n  price REAL NOT NULL,\n  stock INTEGER DEFAULT 0\n);\n\nCREATE TABLE orders (\n  id INTEGER PRIMARY KEY,\n  customer_id INTEGER REFERENCES customers(id),\n  order_date TEXT,\n  status TEXT\n);\n\nCREATE TABLE order_items (\n  order_id INTEGER REFERENCES orders(id),\n  product_id INTEGER REFERENCES products(id),\n  quantity INTEGER,\n  unit_price REAL\n);\n\nCREATE TABLE employees (\n  id INTEGER PRIMARY KEY,\n  name TEXT NOT NULL,\n  department TEXT,\n  salary INTEGER,\n  manager_id INTEGER REFERENCES employees(id),\n  hire_date TEXT\n);\n\nINSERT INTO customers VALUES\n  (1, 'أحمد', 'الرياض', 'ahmed@mail.com', '2024-01-15'),\n  (2, 'سارة', 'جدة', 'sara@mail.com', '2024-02-20'),\n  (3, 'خالد', 'الرياض', 'khaled@mail.com', '2024-03-05'),\n  (4, 'نورة', 'الدمام', 'noura@mail.com', '2024-03-18'),\n  (5, 'فهد', 'جدة', NULL, '2024-05-01'),\n  (6, 'ليلى', 'مكة', 'layla@mail.com', '2024-06-12'),\n  (7, 'عمر', 'الرياض', 'omar@mail.com', '2024-07-30'),\n  (8, 'هند', NULL, 'hind@mail.com', '2024-09-09');\n\nINSERT INTO products VALUES\n  (1, 'لابتوب', 'إلكترونيات', 3500, 12),\n  (2, 'سماعة', 'إلكترونيات', 250, 40),\n  (3, 'شاحن', 'إلكترونيات', 80, 0),\n  (4, 'قميص', 'ملابس', 120, 25),\n  (5, 'حذاء رياضي', 'ملابس', 300, 8),\n  (6, 'رواية', 'كتب', 45, 60),\n  (7, 'كتاب طبخ', 'كتب', 70, 15),\n  (8, 'ساعة ذكية', 'إلكترونيات', 900, 5),\n  (9, 'حقيبة', 'إكسسوارات', 180, 0),\n  (10, 'نظارة', 'إكسسوارات', 350, 10);\n\nINSERT INTO orders VALUES\n  (101, 1, '2025-01-05', 'مكتمل'),\n  (102, 2, '2025-01-09', 'مكتمل'),\n  (103, 1, '2025-02-14', 'مكتمل'),\n  (104, 3, '2025-02-20', 'ملغي'),\n  (105, 4, '2025-03-02', 'مكتمل'),\n  (106, 2, '2025-03-15', 'قيد التنفيذ'),\n  (107, 6, '2025-04-01', 'مكتمل'),\n  (108, 7, '2025-04-11', 'قيد التنفيذ'),\n  (109, 1, '2025-05-20', 'مكتمل'),\n  (110, 4, '2025-06-03', 'مكتمل');\n\nINSERT INTO order_items VALUES\n  (101, 1, 1, 3500),\n  (101, 2, 2, 250),\n  (102, 4, 3, 120),\n  (102, 6, 2, 45),\n  (103, 8, 1, 900),\n  (104, 5, 1, 300),\n  (105, 7, 2, 70),\n  (105, 6, 1, 45),\n  (106, 10, 1, 350),\n  (106, 2, 1, 250),\n  (107, 1, 1, 3500),\n  (108, 4, 2, 120),\n  (108, 5, 1, 300),\n  (109, 6, 4, 45),\n  (110, 8, 1, 900),\n  (110, 3, 2, 80);\n\nINSERT INTO employees VALUES\n  (1, 'منصور', 'الإدارة', 25000, NULL, '2019-01-10'),\n  (2, 'ريم', 'التقنية', 18000, 1, '2020-03-01'),\n  (3, 'ياسر', 'التقنية', 14000, 2, '2021-06-15'),\n  (4, 'دانة', 'التقنية', 15500, 2, '2022-01-20'),\n  (5, 'سلطان', 'المبيعات', 12000, 1, '2020-09-05'),\n  (6, 'لمى', 'المبيعات', 9500, 5, '2023-02-11'),\n  (7, 'بدر', 'المبيعات', 9500, 5, '2023-08-01'),\n  (8, 'جود', 'الدعم', 8000, 1, '2024-04-14');\n", "schema": "<div class=\"schema-table\"><code dir=\"ltr\"><b>customers</b> (id 🔑, name, city, email, joined)</code> <span class=\"muted\">· 8 صفوف</span></div><div class=\"schema-table\"><code dir=\"ltr\"><b>products</b> (id 🔑, name, category, price, stock)</code> <span class=\"muted\">· 10 صفوف</span></div><div class=\"schema-table\"><code dir=\"ltr\"><b>orders</b> (id 🔑, customer_id, order_date, status)</code> <span class=\"muted\">· 10 صفوف</span></div><div class=\"schema-table\"><code dir=\"ltr\"><b>order_items</b> (order_id, product_id, quantity, unit_price)</code> <span class=\"muted\">· 16 صفوف</span></div><div class=\"schema-table\"><code dir=\"ltr\"><b>employees</b> (id 🔑, name, department, salary, manager_id, hire_date)</code> <span class=\"muted\">· 8 صفوف</span></div>"});
