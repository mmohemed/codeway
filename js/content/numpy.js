// ملف مولَّد من content/numpy عبر tools/build.py، لا تعدّله يدوياً
CW.registerContent("numpy", [
 [
  {
   "body": "<h2>لماذا NumPy؟</h2>\n<p><strong>NumPy</strong> هي أساس الحوسبة العلمية في Python: Pandas و Matplotlib و Scikit-learn و PyTorch كلها مبنية عليها. قلبها نوع واحد: **المصفوفة <code dir=\"ltr\">ndarray</code>**.</p>\n<p>ما الفرق عن قائمة Python العادية؟</p>\n<div class=\"table-wrap\"><table><thead><tr><th></th><th>قائمة Python</th><th>مصفوفة NumPy</th></tr></thead><tbody><tr><td>الأنواع</td><td>أي خليط من الأنواع</td><td>نوع واحد لكل العناصر</td></tr><tr><td>العمليات</td><td>حلقة <code dir=\"ltr\">for</code> لكل عنصر</td><td>عملية واحدة على المصفوفة كلها</td></tr><tr><td>السرعة</td><td>بطيئة للبيانات الكبيرة</td><td>أسرع بعشرات المرات (مكتوبة بلغة C)</td></tr><tr><td>الذاكرة</td><td>كل عنصر كائن مستقل</td><td>كتلة متصلة في الذاكرة</td></tr></tbody></table></div>\n<div class=\"code-block src\"><span class=\"code-label\">الطرفية</span><pre dir=\"ltr\"><code>pip install numpy</code></pre></div>\n<p>والعرف المتبع عالمياً أن تُستورد باسم <code dir=\"ltr\">np</code>:</p>\n<div class=\"code-block src py-run\" data-src=\"import numpy as np\n\nprices = [100, 250, 80]\nprint(prices * 2)          # القائمة تتكرر\n\narr = np.array(prices)\nprint(arr * 2)             # كل عنصر يُضرب في 2\nprint(type(arr), arr.dtype)\"><span class=\"code-label\">Python</span><pre dir=\"ltr\"><code>import numpy as np\n\nprices = [100, 250, 80]\nprint(prices * 2)          # القائمة تتكرر\n\narr = np.array(prices)\nprint(arr * 2)             # كل عنصر يُضرب في 2\nprint(type(arr), arr.dtype)</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>[100, 250, 80, 100, 250, 80]\n[200 500 160]\n&lt;class &#x27;numpy.ndarray&#x27;&gt; int32</code></pre></div>\n<p>كل كتلة <strong>Python</strong> في هذه الدورة تعمل فعلاً: اضغط <strong>«شغّل المثال»</strong> لتنفيذها في متصفحك بـ Python الحقيقي.</p>\n<h2>إنشاء المصفوفات</h2>\n<div class=\"code-block src py-run\" data-src=\"import numpy as np\n\na = np.array([1, 2, 3, 4])                 # من قائمة\nb = np.array([[1, 2, 3], [4, 5, 6]])       # مصفوفة ثنائية الأبعاد (جدول)\n\nprint(a)\nprint(b)\nprint(&quot;الأبعاد:&quot;, b.ndim, &quot;| الشكل:&quot;, b.shape, &quot;| عدد العناصر:&quot;, b.size)\"><span class=\"code-label\">Python</span><pre dir=\"ltr\"><code>import numpy as np\n\na = np.array([1, 2, 3, 4])                 # من قائمة\nb = np.array([[1, 2, 3], [4, 5, 6]])       # مصفوفة ثنائية الأبعاد (جدول)\n\nprint(a)\nprint(b)\nprint(&quot;الأبعاد:&quot;, b.ndim, &quot;| الشكل:&quot;, b.shape, &quot;| عدد العناصر:&quot;, b.size)</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>[1 2 3 4]\n[[1 2 3]\n [4 5 6]]\nالأبعاد: 2 | الشكل: (2, 3) | عدد العناصر: 6</code></pre></div>\n<ul><li><code dir=\"ltr\">ndim</code> عدد الأبعاد، و <code dir=\"ltr\">shape</code> طول كل بُعد (صفوف، أعمدة)، و <code dir=\"ltr\">size</code> العدد الكلي.</li></ul>\n<h3>دوال الإنشاء الجاهزة</h3>\n<div class=\"code-block src py-run\" data-src=\"import numpy as np\n\nprint(np.zeros(4))                 # أصفار\nprint(np.ones((2, 3)))             # آحاد بشكل 2×3\nprint(np.full(3, 7))               # قيمة ثابتة\nprint(np.arange(0, 10, 2))         # مثل range: من 0 إلى 10 بخطوة 2\nprint(np.linspace(0, 1, 5))        # 5 قيم متساوية التباعد من 0 إلى 1\nprint(np.eye(3))                   # مصفوفة الوحدة\"><span class=\"code-label\">Python</span><pre dir=\"ltr\"><code>import numpy as np\n\nprint(np.zeros(4))                 # أصفار\nprint(np.ones((2, 3)))             # آحاد بشكل 2×3\nprint(np.full(3, 7))               # قيمة ثابتة\nprint(np.arange(0, 10, 2))         # مثل range: من 0 إلى 10 بخطوة 2\nprint(np.linspace(0, 1, 5))        # 5 قيم متساوية التباعد من 0 إلى 1\nprint(np.eye(3))                   # مصفوفة الوحدة</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>[0. 0. 0. 0.]\n[[1. 1. 1.]\n [1. 1. 1.]]\n[7 7 7]\n[0 2 4 6 8]\n[0.   0.25 0.5  0.75 1.  ]\n[[1. 0. 0.]\n [0. 1. 0.]\n [0. 0. 1.]]</code></pre></div>\n<div class=\"callout tip\">💡 الفرق المهم: <code dir=\"ltr\">arange</code> تحدد <strong>الخطوة</strong> (ولا تشمل النهاية)، و <code dir=\"ltr\">linspace</code> تحدد <strong>العدد</strong> (وتشمل النهاية).</div>\n<h2>أنواع البيانات dtype</h2>\n<p>كل عناصر المصفوفة من نوع واحد. NumPy يختاره تلقائياً، ويمكنك تحديده:</p>\n<div class=\"code-block src py-run\" data-src=\"import numpy as np\n\nprint(np.array([1, 2, 3]).dtype)\nprint(np.array([1.5, 2, 3]).dtype)          # عدد عشري واحد يحوّل الكل\nprint(np.array([1, 2, 3], dtype=float))\nprint(np.array([3.7, 1.2]).astype(int))     # التحويل يقطع الكسر\nprint(np.array([True, False, True]).sum())  # True تُحسب 1\"><span class=\"code-label\">Python</span><pre dir=\"ltr\"><code>import numpy as np\n\nprint(np.array([1, 2, 3]).dtype)\nprint(np.array([1.5, 2, 3]).dtype)          # عدد عشري واحد يحوّل الكل\nprint(np.array([1, 2, 3], dtype=float))\nprint(np.array([3.7, 1.2]).astype(int))     # التحويل يقطع الكسر\nprint(np.array([True, False, True]).sum())  # True تُحسب 1</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>int32\nfloat64\n[1. 2. 3.]\n[3 1]\n2</code></pre></div>\n<div class=\"callout tip\">💡 لاحظ <code dir=\"ltr\">int32</code> في المخرجات: Python هنا يعمل في المتصفح بنظام 32 بت. على جهازك (64 بت) سترى غالباً <code dir=\"ltr\">int64</code>. السلوك نفسه، والفرق فقط في أكبر رقم يمكن تخزينه.</div>\n<h2>أرقام عشوائية</h2>\n<p>لمحاكاة البيانات أو اختيار عينات، استخدم <strong>مولّد الأرقام العشوائية</strong>. وحدد <strong>البذرة (seed)</strong> لتحصل على نفس النتائج في كل تشغيل:</p>\n<div class=\"code-block src py-run\" data-src=\"import numpy as np\n\nrng = np.random.default_rng(42)\nprint(rng.integers(1, 7, size=5))            # 5 رميات نرد\nprint(rng.random(3).round(3))                # أعداد بين 0 و 1\nprint(rng.normal(loc=170, scale=10, size=4).round(1))  # أطوال بتوزيع طبيعي\nprint(rng.choice([&quot;أحمر&quot;, &quot;أزرق&quot;, &quot;أخضر&quot;], size=3))\"><span class=\"code-label\">Python</span><pre dir=\"ltr\"><code>import numpy as np\n\nrng = np.random.default_rng(42)\nprint(rng.integers(1, 7, size=5))            # 5 رميات نرد\nprint(rng.random(3).round(3))                # أعداد بين 0 و 1\nprint(rng.normal(loc=170, scale=10, size=4).round(1))  # أطوال بتوزيع طبيعي\nprint(rng.choice([&quot;أحمر&quot;, &quot;أزرق&quot;, &quot;أخضر&quot;], size=3))</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>[1 5 4 3 3]\n[0.697 0.094 0.976]\n[171.3 166.8 169.8 161.5]\n[&#x27;أخضر&#x27; &#x27;أزرق&#x27; &#x27;أزرق&#x27;]</code></pre></div>\n<div class=\"callout warn\">⚠️ ستجد في الشروحات القديمة <code dir=\"ltr\">np.random.seed(42)</code> و <code dir=\"ltr\">np.random.randint(...)</code>. الطريقة الحديثة الموصى بها هي <code dir=\"ltr\">default_rng</code>.</div>\n<h2>ملخص الدرس</h2>\n<ul><li>المصفوفة <code dir=\"ltr\">np.array</code> نوع واحد لكل العناصر، وعملياتها تنطبق على كل العناصر دون حلقات.</li><li><code dir=\"ltr\">shape</code> و <code dir=\"ltr\">ndim</code> و <code dir=\"ltr\">size</code> و <code dir=\"ltr\">dtype</code> تصف المصفوفة.</li><li><code dir=\"ltr\">zeros</code> و <code dir=\"ltr\">ones</code> و <code dir=\"ltr\">full</code> و <code dir=\"ltr\">arange</code> و <code dir=\"ltr\">linspace</code> و <code dir=\"ltr\">eye</code> لإنشاء مصفوفات جاهزة.</li><li><code dir=\"ltr\">np.random.default_rng(seed)</code> للأرقام العشوائية القابلة للتكرار.</li></ul>",
   "exercise": {
    "prompt": "<p>أنشئ المتغيرات التالية:</p>\n<ol><li><code dir=\"ltr\">temps</code>: مصفوفة من القائمة <code dir=\"ltr\">[31, 35, 38, 42, 40]</code> بنوع <code dir=\"ltr\">float</code>.</li><li><code dir=\"ltr\">days</code>: الأرقام من 1 إلى 5 باستخدام <code dir=\"ltr\">np.arange</code>.</li><li><code dir=\"ltr\">grid</code>: مصفوفة أصفار من الأعداد الصحيحة بشكل 3 صفوف و 4 أعمدة.</li><li><code dir=\"ltr\">steps</code>: خمس قيم متساوية التباعد من 0 إلى 100 باستخدام <code dir=\"ltr\">np.linspace</code>.</li></ol>",
    "starter": "import numpy as np\n\ntemps = [31, 35, 38, 42, 40]",
    "solution": "import numpy as np\n\ntemps = np.array([31, 35, 38, 42, 40], dtype=float)\ndays = np.arange(1, 6)\ngrid = np.zeros((3, 4), dtype=int)\nsteps = np.linspace(0, 100, 5)",
    "test": "print(type(temps).__name__, temps.dtype, temps)\nprint(days)\nprint(grid.shape, np.issubdtype(grid.dtype, np.integer), grid.sum())\nprint(steps)",
    "expected": "ndarray float64 [31. 35. 38. 42. 40.]\n[1 2 3 4 5]\n(3, 4) True 0\n[  0.  25.  50.  75. 100.]"
   },
   "quiz": [
    {
     "q": "ما ناتج <code dir=\"ltr\">np.array([1, 2, 3]) * 2</code>؟",
     "o": [
      "<code dir=\"ltr\">[2 4 6]</code>",
      "<code dir=\"ltr\">[1, 2, 3, 1, 2, 3]</code>",
      "خطأ"
     ],
     "a": 0,
     "why": "العملية تنطبق على كل عنصر."
    },
    {
     "q": "ما الفرق بين <code dir=\"ltr\">np.arange(0, 1, 0.25)</code> و <code dir=\"ltr\">np.linspace(0, 1, 5)</code>؟",
     "o": [
      "arange تحدد الخطوة ولا تشمل 1، و linspace تحدد عدد القيم وتشمل 1",
      "لا فرق",
      "linspace لا تقبل أعداداً عشرية"
     ],
     "a": 0,
     "why": "الأولى [0, 0.25, 0.5, 0.75] والثانية [0, 0.25, 0.5, 0.75, 1]."
    },
    {
     "q": "لماذا نحدد البذرة في <code dir=\"ltr\">default_rng(42)</code>؟",
     "o": [
      "لنحصل على نفس الأرقام العشوائية في كل تشغيل فتكون النتائج قابلة للتكرار",
      "لتسريع التوليد",
      "لجعل الأرقام أكبر من 42"
     ],
     "a": 0,
     "why": "مهم للتجارب والدروس والاختبارات."
    }
   ]
  },
  {
   "body": "<h2>الفهرسة: الوصول إلى العناصر</h2>\n<p>مثل القوائم، الفهرس يبدأ من 0، والسالب يعدّ من النهاية:</p>\n<div class=\"code-block src py-run\" data-src=\"import numpy as np\n\nsales = np.array([120, 340, 90, 410, 275])\nprint(sales[0], sales[-1])\nprint(sales[1:4])        # من 1 إلى قبل 4\nprint(sales[::2])        # كل عنصر ثانٍ\nprint(sales[::-1])       # عكس الترتيب\"><span class=\"code-label\">Python</span><pre dir=\"ltr\"><code>import numpy as np\n\nsales = np.array([120, 340, 90, 410, 275])\nprint(sales[0], sales[-1])\nprint(sales[1:4])        # من 1 إلى قبل 4\nprint(sales[::2])        # كل عنصر ثانٍ\nprint(sales[::-1])       # عكس الترتيب</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>120 275\n[340  90 410]\n[120  90 275]\n[275 410  90 340 120]</code></pre></div>\n<h2>المصفوفات ثنائية الأبعاد</h2>\n<p><code dir=\"ltr\">arr[صف, عمود]</code>، وكل جزء يقبل التقطيع:</p>\n<div class=\"code-block src py-run\" data-src=\"import numpy as np\n\n# درجات 3 طلاب في 4 اختبارات\nscores = np.array([\n    [85, 90, 78, 92],\n    [70, 65, 80, 75],\n    [95, 98, 91, 99],\n])\nprint(scores[1, 2])        # الطالب الثاني، الاختبار الثالث\nprint(scores[0])           # الصف الأول كاملاً\nprint(scores[:, -1])       # العمود الأخير (كل الصفوف)\nprint(scores[:2, 1:3])     # أول صفين، العمودان 1 و 2\"><span class=\"code-label\">Python</span><pre dir=\"ltr\"><code>import numpy as np\n\n# درجات 3 طلاب في 4 اختبارات\nscores = np.array([\n    [85, 90, 78, 92],\n    [70, 65, 80, 75],\n    [95, 98, 91, 99],\n])\nprint(scores[1, 2])        # الطالب الثاني، الاختبار الثالث\nprint(scores[0])           # الصف الأول كاملاً\nprint(scores[:, -1])       # العمود الأخير (كل الصفوف)\nprint(scores[:2, 1:3])     # أول صفين، العمودان 1 و 2</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>80\n[85 90 78 92]\n[92 75 99]\n[[90 78]\n [65 80]]</code></pre></div>\n<div class=\"callout tip\">💡 اقرأ <code dir=\"ltr\">scores[:, -1]</code> هكذا: &quot;كل الصفوف، العمود الأخير&quot;.</div>\n<h2>الفهرسة المنطقية (Boolean Indexing)</h2>\n<p>هذه أقوى ميزة في NumPy ويُبنى عليها كل الفلترة في Pandas: <strong>شرط</strong> على المصفوفة يعطي مصفوفة <code dir=\"ltr\">True/False</code>، وتستخدمها لاختيار العناصر:</p>\n<div class=\"code-block src py-run\" data-src=\"import numpy as np\n\nsales = np.array([120, 340, 90, 410, 275])\nmask = sales &gt; 200\nprint(mask)\nprint(sales[mask])\nprint(sales[(sales &gt; 100) &amp; (sales &lt; 300)])   # و: &amp;\nprint(sales[(sales &lt; 100) | (sales &gt; 400)])   # أو: |\nprint(&quot;عدد الأيام فوق 200:&quot;, (sales &gt; 200).sum())\"><span class=\"code-label\">Python</span><pre dir=\"ltr\"><code>import numpy as np\n\nsales = np.array([120, 340, 90, 410, 275])\nmask = sales &gt; 200\nprint(mask)\nprint(sales[mask])\nprint(sales[(sales &gt; 100) &amp; (sales &lt; 300)])   # و: &amp;\nprint(sales[(sales &lt; 100) | (sales &gt; 400)])   # أو: |\nprint(&quot;عدد الأيام فوق 200:&quot;, (sales &gt; 200).sum())</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>[False  True False  True  True]\n[340 410 275]\n[120 275]\n[ 90 410]\nعدد الأيام فوق 200: 3</code></pre></div>\n<ul><li>استخدم <code dir=\"ltr\">&amp;</code> و <code dir=\"ltr\">|</code> و <code dir=\"ltr\">~</code> (وليس <code dir=\"ltr\">and</code> و <code dir=\"ltr\">or</code> و <code dir=\"ltr\">not</code>)، وضع كل شرط بين <strong>أقواس</strong>.</li><li><code dir=\"ltr\">(sales &gt; 200).sum()</code> يعدّ العناصر المحققة للشرط لأن <code dir=\"ltr\">True</code> تساوي 1.</li></ul>\n<h3>الفهرسة بقائمة أرقام</h3>\n<div class=\"code-block src py-run\" data-src=\"import numpy as np\n\nsales = np.array([120, 340, 90, 410, 275])\nprint(sales[[0, 2, 4]])\nprint(np.where(sales &gt; 200, &quot;مرتفع&quot;, &quot;منخفض&quot;))\nprint(np.argmax(sales), np.argmin(sales))     # فهرس الأكبر والأصغر\"><span class=\"code-label\">Python</span><pre dir=\"ltr\"><code>import numpy as np\n\nsales = np.array([120, 340, 90, 410, 275])\nprint(sales[[0, 2, 4]])\nprint(np.where(sales &gt; 200, &quot;مرتفع&quot;, &quot;منخفض&quot;))\nprint(np.argmax(sales), np.argmin(sales))     # فهرس الأكبر والأصغر</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>[120  90 275]\n[&#x27;منخفض&#x27; &#x27;مرتفع&#x27; &#x27;منخفض&#x27; &#x27;مرتفع&#x27; &#x27;مرتفع&#x27;]\n3 2</code></pre></div>\n<p><code dir=\"ltr\">np.where(شرط, قيمة_إن_صح, قيمة_إن_خطأ)</code> يشبه <code dir=\"ltr\">IF</code> في Excel لكن على المصفوفة كلها.</p>\n<h2>التعديل عبر الفهرسة</h2>\n<div class=\"code-block src py-run\" data-src=\"import numpy as np\n\nreadings = np.array([22.5, -999, 23.1, -999, 24.0])\nreadings[readings == -999] = np.nan     # استبدال القيم المفقودة\nprint(readings)\nprint(np.nanmean(readings))             # المتوسط مع تجاهل nan\"><span class=\"code-label\">Python</span><pre dir=\"ltr\"><code>import numpy as np\n\nreadings = np.array([22.5, -999, 23.1, -999, 24.0])\nreadings[readings == -999] = np.nan     # استبدال القيم المفقودة\nprint(readings)\nprint(np.nanmean(readings))             # المتوسط مع تجاهل nan</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>[22.5  nan 23.1  nan 24. ]\n23.2</code></pre></div>\n<div class=\"callout warn\">⚠️ <strong>التقطيع يُرجع منظوراً (view) وليس نسخة</strong>: <code dir=\"ltr\">part = arr[1:3]</code> ثم <code dir=\"ltr\">part[0] = 0</code> يغيّر <code dir=\"ltr\">arr</code> الأصلية أيضاً! استخدم <code dir=\"ltr\">arr[1:3].copy()</code> إذا أردت نسخة مستقلة.</div>\n<h2>ملخص الدرس</h2>\n<ul><li><code dir=\"ltr\">arr[i]</code> و <code dir=\"ltr\">arr[a:b:step]</code> للفهرسة والتقطيع، و <code dir=\"ltr\">arr[صف, عمود]</code> في البعدين.</li><li><code dir=\"ltr\">arr[شرط]</code> يختار العناصر المحققة للشرط، مع <code dir=\"ltr\">&amp;</code> و <code dir=\"ltr\">|</code> و <code dir=\"ltr\">~</code> والأقواس.</li><li><code dir=\"ltr\">np.where</code> للاختيار الشرطي، و <code dir=\"ltr\">argmax</code> و <code dir=\"ltr\">argmin</code> لموضع الأكبر والأصغر.</li><li>التقطيع منظور على نفس البيانات، و <code dir=\"ltr\">.copy()</code> للنسخ.</li></ul>",
   "exercise": {
    "prompt": "<p>في <code dir=\"ltr\">prices</code> أسعار 8 منتجات، وفي <code dir=\"ltr\">stock</code> الكميات المتوفرة منها:</p>\n<ol><li><code dir=\"ltr\">expensive</code>: الأسعار الأكبر من 500.</li><li><code dir=\"ltr\">available_cheap</code>: أسعار المنتجات التي سعرها أقل من 300 <strong>و</strong> كميتها أكبر من 0.</li><li><code dir=\"ltr\">out_count</code>: عدد المنتجات التي نفدت كميتها (0).</li><li><code dir=\"ltr\">labels</code>: مصفوفة نصوص فيها <code dir=\"ltr\">&quot;متوفر&quot;</code> إن كانت الكمية أكبر من 0 وإلا <code dir=\"ltr\">&quot;نفد&quot;</code>.</li><li><code dir=\"ltr\">top_index</code>: فهرس أغلى منتج.</li></ol>",
    "starter": "import numpy as np\n\nprices = np.array([250, 899, 120, 640, 75, 299, 1200, 450])\nstock = np.array([10, 0, 25, 3, 0, 8, 1, 0])",
    "solution": "import numpy as np\n\nprices = np.array([250, 899, 120, 640, 75, 299, 1200, 450])\nstock = np.array([10, 0, 25, 3, 0, 8, 1, 0])\n\nexpensive = prices[prices > 500]\navailable_cheap = prices[(prices < 300) & (stock > 0)]\nout_count = (stock == 0).sum()\nlabels = np.where(stock > 0, \"متوفر\", \"نفد\")\ntop_index = np.argmax(prices)",
    "test": "print(expensive)\nprint(available_cheap)\nprint(out_count)\nprint(labels.tolist())\nprint(top_index)",
    "expected": "[ 899  640 1200]\n[250 120 299]\n3\n['متوفر', 'نفد', 'متوفر', 'متوفر', 'نفد', 'متوفر', 'متوفر', 'نفد']\n6"
   },
   "quiz": [
    {
     "q": "ماذا يُرجع <code dir=\"ltr\">scores[:, 0]</code> لمصفوفة ثنائية الأبعاد؟",
     "o": [
      "العمود الأول من كل الصفوف",
      "الصف الأول",
      "العنصر الأول فقط"
     ],
     "a": 0,
     "why": "النقطتان قبل الفاصلة تعني كل الصفوف."
    },
    {
     "q": "ما الصحيح لاختيار العناصر بين 10 و 20؟",
     "o": [
      "<code dir=\"ltr\">a[(a &gt; 10) &amp; (a &lt; 20)]</code>",
      "<code dir=\"ltr\">a[a &gt; 10 and a &lt; 20]</code>",
      "<code dir=\"ltr\">a[10 &lt; a &lt; 20]</code>"
     ],
     "a": 0,
     "why": "and لا تعمل على المصفوفات، والأقواس ضرورية مع &amp;."
    },
    {
     "q": "ماذا يحدث إذا عدّلت جزءاً مقطوعاً <code dir=\"ltr\">part = arr[0:2]</code> ثم <code dir=\"ltr\">part[0] = 99</code>؟",
     "o": [
      "تتغير arr الأصلية أيضاً لأن التقطيع منظور على نفس البيانات",
      "لا تتغير arr",
      "يظهر خطأ"
     ],
     "a": 0,
     "why": "استخدم copy() للحصول على نسخة مستقلة."
    }
   ]
  },
  {
   "body": "<h2>الشكل (shape)</h2>\n<p>البيانات الحقيقية تأتي بأشكال مختلفة: قائمة طويلة من القراءات، جدول، صور (ارتفاع × عرض × ألوان). تغيير الشكل دون تغيير البيانات من أكثر العمليات استخداماً.</p>\n<div class=\"code-block src py-run\" data-src=\"import numpy as np\n\nmonthly = np.arange(1, 13)       # مبيعات 12 شهراً\nprint(monthly.shape)\n\nquarters = monthly.reshape(4, 3)  # 4 أرباع × 3 أشهر\nprint(quarters)\nprint(quarters.shape)\"><span class=\"code-label\">Python</span><pre dir=\"ltr\"><code>import numpy as np\n\nmonthly = np.arange(1, 13)       # مبيعات 12 شهراً\nprint(monthly.shape)\n\nquarters = monthly.reshape(4, 3)  # 4 أرباع × 3 أشهر\nprint(quarters)\nprint(quarters.shape)</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>(12,)\n[[ 1  2  3]\n [ 4  5  6]\n [ 7  8  9]\n [10 11 12]]\n(4, 3)</code></pre></div>\n<p>شرط <code dir=\"ltr\">reshape</code>: <strong>عدد العناصر لا يتغير</strong> (12 = 4 × 3). و <code dir=\"ltr\">-1</code> تعني &quot;احسبه أنت&quot;:</p>\n<div class=\"code-block src py-run\" data-src=\"import numpy as np\n\nmonthly = np.arange(1, 13)\nprint(monthly.reshape(2, -1).shape)     # 2 × 6\nprint(monthly.reshape(-1, 4).shape)     # 3 × 4\ntry:\n    monthly.reshape(5, 3)\nexcept ValueError as e:\n    print(&quot;خطأ:&quot;, e)\"><span class=\"code-label\">Python</span><pre dir=\"ltr\"><code>import numpy as np\n\nmonthly = np.arange(1, 13)\nprint(monthly.reshape(2, -1).shape)     # 2 × 6\nprint(monthly.reshape(-1, 4).shape)     # 3 × 4\ntry:\n    monthly.reshape(5, 3)\nexcept ValueError as e:\n    print(&quot;خطأ:&quot;, e)</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>(2, 6)\n(3, 4)\nخطأ: cannot reshape array of size 12 into shape (5,3)</code></pre></div>\n<h2>التسطيح والتبديل</h2>\n<div class=\"code-block src py-run\" data-src=\"import numpy as np\n\nm = np.array([[1, 2, 3],\n              [4, 5, 6]])\nprint(m.flatten())     # إلى بُعد واحد\nprint(m.T)             # تبديل الصفوف والأعمدة (Transpose)\nprint(m.T.shape)\"><span class=\"code-label\">Python</span><pre dir=\"ltr\"><code>import numpy as np\n\nm = np.array([[1, 2, 3],\n              [4, 5, 6]])\nprint(m.flatten())     # إلى بُعد واحد\nprint(m.T)             # تبديل الصفوف والأعمدة (Transpose)\nprint(m.T.shape)</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>[1 2 3 4 5 6]\n[[1 4]\n [2 5]\n [3 6]]\n(3, 2)</code></pre></div>\n<h2>إضافة بُعد</h2>\n<p>بعض الدوال تطلب مصفوفة عمودية (n × 1) بدلاً من قائمة مسطحة، مثل نماذج Scikit-learn:</p>\n<div class=\"code-block src py-run\" data-src=\"import numpy as np\n\nx = np.array([10, 20, 30])\nprint(x.shape)\nprint(x.reshape(-1, 1).shape)\nprint(x[:, np.newaxis].shape)    # نفس النتيجة\"><span class=\"code-label\">Python</span><pre dir=\"ltr\"><code>import numpy as np\n\nx = np.array([10, 20, 30])\nprint(x.shape)\nprint(x.reshape(-1, 1).shape)\nprint(x[:, np.newaxis].shape)    # نفس النتيجة</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>(3,)\n(3, 1)\n(3, 1)</code></pre></div>\n<h2>الدمج والتقسيم</h2>\n<div class=\"code-block src py-run\" data-src=\"import numpy as np\n\njan = np.array([[1, 2], [3, 4]])\nfeb = np.array([[5, 6], [7, 8]])\n\nprint(np.concatenate([jan, feb]))          # فوق بعض (axis=0)\nprint(np.concatenate([jan, feb], axis=1))  # جنباً إلى جنب\nprint(np.vstack([jan[0], feb[0]]))\nprint(np.split(np.arange(6), 3))\"><span class=\"code-label\">Python</span><pre dir=\"ltr\"><code>import numpy as np\n\njan = np.array([[1, 2], [3, 4]])\nfeb = np.array([[5, 6], [7, 8]])\n\nprint(np.concatenate([jan, feb]))          # فوق بعض (axis=0)\nprint(np.concatenate([jan, feb], axis=1))  # جنباً إلى جنب\nprint(np.vstack([jan[0], feb[0]]))\nprint(np.split(np.arange(6), 3))</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>[[1 2]\n [3 4]\n [5 6]\n [7 8]]\n[[1 2 5 6]\n [3 4 7 8]]\n[[1 2]\n [5 6]]\n[array([0, 1]), array([2, 3]), array([4, 5])]</code></pre></div>\n<h2>المحور axis</h2>\n<p>مفهوم ستراه في NumPy و Pandas باستمرار: <code dir=\"ltr\">axis=0</code> يعمل <strong>على طول الصفوف</strong> (لكل عمود)، و <code dir=\"ltr\">axis=1</code> <strong>على طول الأعمدة</strong> (لكل صف):</p>\n<div class=\"code-block src py-run\" data-src=\"import numpy as np\n\n# مبيعات 3 فروع (صفوف) خلال 4 أسابيع (أعمدة)\nsales = np.array([\n    [10, 12, 9, 14],\n    [20, 18, 25, 22],\n    [5, 7, 6, 8],\n])\nprint(&quot;مجموع كل أسبوع:&quot;, sales.sum(axis=0))\nprint(&quot;مجموع كل فرع:&quot;, sales.sum(axis=1))\nprint(&quot;المجموع الكلي:&quot;, sales.sum())\"><span class=\"code-label\">Python</span><pre dir=\"ltr\"><code>import numpy as np\n\n# مبيعات 3 فروع (صفوف) خلال 4 أسابيع (أعمدة)\nsales = np.array([\n    [10, 12, 9, 14],\n    [20, 18, 25, 22],\n    [5, 7, 6, 8],\n])\nprint(&quot;مجموع كل أسبوع:&quot;, sales.sum(axis=0))\nprint(&quot;مجموع كل فرع:&quot;, sales.sum(axis=1))\nprint(&quot;المجموع الكلي:&quot;, sales.sum())</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>مجموع كل أسبوع: [35 37 40 44]\nمجموع كل فرع: [45 85 26]\nالمجموع الكلي: 156</code></pre></div>\n<div class=\"callout tip\">💡 طريقة سهلة للتذكر: المحور الذي تحدده هو الذي <strong>يختفي</strong>. الشكل (3, 4) مع <code dir=\"ltr\">axis=0</code> يصبح (4,)، ومع <code dir=\"ltr\">axis=1</code> يصبح (3,).</div>\n<h2>ملخص الدرس</h2>\n<ul><li><code dir=\"ltr\">reshape</code> يغيّر الشكل بشرط ثبات عدد العناصر، و <code dir=\"ltr\">-1</code> يحسب البُعد تلقائياً.</li><li><code dir=\"ltr\">flatten</code> للتسطيح، و <code dir=\"ltr\">.T</code> للتبديل، و <code dir=\"ltr\">reshape(-1, 1)</code> لمصفوفة عمودية.</li><li><code dir=\"ltr\">concatenate</code> و <code dir=\"ltr\">vstack</code> و <code dir=\"ltr\">hstack</code> للدمج، و <code dir=\"ltr\">split</code> للتقسيم.</li><li><code dir=\"ltr\">axis=0</code> لكل عمود، و <code dir=\"ltr\">axis=1</code> لكل صف.</li></ul>",
   "exercise": {
    "prompt": "<p>في <code dir=\"ltr\">readings</code> قراءات حساس الحرارة كل 6 ساعات لمدة 5 أيام (20 قراءة):</p>\n<ol><li><code dir=\"ltr\">by_day</code>: أعد تشكيلها إلى 5 صفوف (أيام) × 4 أعمدة (أوقات).</li><li><code dir=\"ltr\">daily_max</code>: أعلى قراءة في كل يوم.</li><li><code dir=\"ltr\">slot_mean</code>: متوسط كل وقت عبر الأيام الخمسة (قرّبه لرقم عشري واحد بـ <code dir=\"ltr\">.round(1)</code>).</li><li><code dir=\"ltr\">hottest_day</code>: رقم اليوم الأكثر حرارة (حسب أعلى قراءة) بدءاً من 1.</li></ol>",
    "starter": "import numpy as np\n\nreadings = np.array([24, 31, 38, 29, 25, 33, 41, 30, 23, 30, 36, 28,\n                     26, 34, 43, 31, 22, 29, 35, 27])",
    "solution": "import numpy as np\n\nreadings = np.array([24, 31, 38, 29, 25, 33, 41, 30, 23, 30, 36, 28,\n                     26, 34, 43, 31, 22, 29, 35, 27])\n\nby_day = readings.reshape(5, 4)\ndaily_max = by_day.max(axis=1)\nslot_mean = by_day.mean(axis=0).round(1)\nhottest_day = np.argmax(daily_max) + 1",
    "test": "print(by_day.shape)\nprint(daily_max)\nprint(slot_mean)\nprint(hottest_day)",
    "expected": "(5, 4)\n[38 41 36 43 35]\n[24.  31.4 38.6 29. ]\n4"
   },
   "quiz": [
    {
     "q": "ما شكل <code dir=\"ltr\">np.arange(24).reshape(2, 3, -1)</code>؟",
     "o": [
      "(2, 3, 4)",
      "(2, 3, 1)",
      "خطأ"
     ],
     "a": 0,
     "why": "24 ÷ (2 × 3) = 4."
    },
    {
     "q": "لمصفوفة شكلها (100, 5)، ما شكل <code dir=\"ltr\">arr.mean(axis=0)</code>؟",
     "o": [
      "(5,): متوسط لكل عمود",
      "(100,): متوسط لكل صف",
      "رقم واحد"
     ],
     "a": 0,
     "why": "المحور المحدد يختفي."
    },
    {
     "q": "متى تحتاج <code dir=\"ltr\">x.reshape(-1, 1)</code>؟",
     "o": [
      "عندما تطلب دالة مصفوفة عمودية (n × 1) بدلاً من مصفوفة مسطحة",
      "لعكس الترتيب",
      "لحذف العناصر المكررة"
     ],
     "a": 0,
     "why": "مثل مدخلات نماذج Scikit-learn."
    }
   ]
  }
 ],
 [
  {
   "body": "<h2>العمليات على المصفوفات (Vectorization)</h2>\n<p>في NumPy لا تكتب حلقات. العمليات الحسابية تنطبق <strong>عنصراً بعنصر</strong> على المصفوفة كلها، وهذا يسمى <strong>التوجيه (Vectorization)</strong>:</p>\n<div class=\"code-block src py-run\" data-src=\"import numpy as np\n\nprice = np.array([100, 250, 80, 40])\nqty = np.array([3, 1, 5, 10])\n\nprint(price * qty)             # إجمالي كل بند\nprint((price * qty).sum())     # إجمالي الفاتورة\nprint(price * 1.15)            # مع ضريبة 15%\nprint(price - price.mean())    # الفرق عن المتوسط\nprint(qty ** 2, qty % 2 == 0)\"><span class=\"code-label\">Python</span><pre dir=\"ltr\"><code>import numpy as np\n\nprice = np.array([100, 250, 80, 40])\nqty = np.array([3, 1, 5, 10])\n\nprint(price * qty)             # إجمالي كل بند\nprint((price * qty).sum())     # إجمالي الفاتورة\nprint(price * 1.15)            # مع ضريبة 15%\nprint(price - price.mean())    # الفرق عن المتوسط\nprint(qty ** 2, qty % 2 == 0)</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>[300 250 400 400]\n1350\n[115.  287.5  92.   46. ]\n[-17.5 132.5 -37.5 -77.5]\n[  9   1  25 100] [False False False  True]</code></pre></div>\n<h2>الدوال الشاملة (ufuncs)</h2>\n<p>دوال رياضية تعمل على كل عنصر:</p>\n<div class=\"code-block src py-run\" data-src=\"import numpy as np\n\nx = np.array([1, 4, 9, 16])\nprint(np.sqrt(x))\nprint(np.log10([10, 100, 1000]))\nprint(np.round(np.array([2.456, 3.789]), 1))\nprint(np.abs([-3, 5, -7]))\nprint(np.maximum([1, 8, 3], [4, 2, 6]))   # الأكبر عنصراً بعنصر\nprint(np.clip([5, 120, -3, 60], 0, 100))  # حصر القيم بين 0 و 100\"><span class=\"code-label\">Python</span><pre dir=\"ltr\"><code>import numpy as np\n\nx = np.array([1, 4, 9, 16])\nprint(np.sqrt(x))\nprint(np.log10([10, 100, 1000]))\nprint(np.round(np.array([2.456, 3.789]), 1))\nprint(np.abs([-3, 5, -7]))\nprint(np.maximum([1, 8, 3], [4, 2, 6]))   # الأكبر عنصراً بعنصر\nprint(np.clip([5, 120, -3, 60], 0, 100))  # حصر القيم بين 0 و 100</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>[1. 2. 3. 4.]\n[1. 2. 3.]\n[2.5 3.8]\n[3 5 7]\n[4 8 6]\n[  5 100   0  60]</code></pre></div>\n<h2>لماذا هي أسرع؟</h2>\n<p>نقيس الفرق بين حلقة Python وعملية NumPy على مليون رقم:</p>\n<div class=\"code-block src py-run\" data-src=\"import numpy as np\nimport time\n\ndata = list(range(1_000_000))\narr = np.arange(1_000_000, dtype=np.int64)\n\nt = time.perf_counter()\nsquares = [x * x for x in data]\nloop = time.perf_counter() - t\n\nt = time.perf_counter()\nsquares_np = arr * arr\nvec = time.perf_counter() - t\n\nprint(&quot;النتيجة متطابقة:&quot;, squares[-1] == squares_np[-1])\nprint(&quot;NumPy أسرع؟&quot;, vec &lt; loop)\"><span class=\"code-label\">Python</span><pre dir=\"ltr\"><code>import numpy as np\nimport time\n\ndata = list(range(1_000_000))\narr = np.arange(1_000_000, dtype=np.int64)\n\nt = time.perf_counter()\nsquares = [x * x for x in data]\nloop = time.perf_counter() - t\n\nt = time.perf_counter()\nsquares_np = arr * arr\nvec = time.perf_counter() - t\n\nprint(&quot;النتيجة متطابقة:&quot;, squares[-1] == squares_np[-1])\nprint(&quot;NumPy أسرع؟&quot;, vec &lt; loop)</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>النتيجة متطابقة: True\nNumPy أسرع؟ True</code></pre></div>\n<p>(الأوقات الفعلية تختلف من جهاز لآخر، لكن NumPy أسرع عادةً بعشرات المرات، لأن الحلقة تُنفَّذ بلغة C داخلياً.)</p>\n<div class=\"callout warn\">⚠️ لماذا <code dir=\"ltr\">dtype=np.int64</code>؟ مصفوفات NumPy أرقامها بحجم ثابت، فإن تجاوز الناتج أكبر رقم يتسع له النوع <strong>يفيض (overflow) بصمت</strong> وتظهر أرقام خاطئة. مربع 999999 لا يتسع في <code dir=\"ltr\">int32</code> (الافتراضي في المتصفح هنا)، بينما قائمة Python لا حد لأرقامها.</div>\n<h2>القيم الخاصة: nan و inf</h2>\n<div class=\"code-block src py-run\" data-src=\"import numpy as np\n\na = np.array([10.0, 0.0, -5.0])\nwith np.errstate(divide=&quot;ignore&quot;, invalid=&quot;ignore&quot;):\n    r = a / 0\nprint(r)\nprint(np.isnan(r), np.isinf(r))\n\nscores = np.array([80, np.nan, 95, 70])\nprint(scores.mean(), np.nanmean(scores))\"><span class=\"code-label\">Python</span><pre dir=\"ltr\"><code>import numpy as np\n\na = np.array([10.0, 0.0, -5.0])\nwith np.errstate(divide=&quot;ignore&quot;, invalid=&quot;ignore&quot;):\n    r = a / 0\nprint(r)\nprint(np.isnan(r), np.isinf(r))\n\nscores = np.array([80, np.nan, 95, 70])\nprint(scores.mean(), np.nanmean(scores))</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>[ inf  nan -inf]\n[False  True False] [ True False  True]\nnan 81.66666666666667</code></pre></div>\n<ul><li>القسمة على صفر لا توقف البرنامج كما في Python العادية، بل تعطي <code dir=\"ltr\">inf</code> أو <code dir=\"ltr\">nan</code> (ليس رقماً).</li><li>أي عملية مع <code dir=\"ltr\">nan</code> تعطي <code dir=\"ltr\">nan</code>، لذلك توجد نسخ تتجاهلها: <code dir=\"ltr\">nanmean</code> و <code dir=\"ltr\">nansum</code> و <code dir=\"ltr\">nanmax</code>.</li></ul>\n<h2>ملخص الدرس</h2>\n<ul><li>العمليات <code dir=\"ltr\">+ - * / ** %</code> والمقارنات تعمل عنصراً بعنصر دون حلقات.</li><li>الدوال الشاملة: <code dir=\"ltr\">sqrt</code> و <code dir=\"ltr\">log</code> و <code dir=\"ltr\">exp</code> و <code dir=\"ltr\">abs</code> و <code dir=\"ltr\">round</code> و <code dir=\"ltr\">maximum</code> و <code dir=\"ltr\">clip</code>.</li><li>التوجيه أسرع بكثير من الحلقات لأنه يُنفَّذ بلغة C.</li><li><code dir=\"ltr\">nan</code> و <code dir=\"ltr\">inf</code> قيم خاصة، و <code dir=\"ltr\">nanmean</code> وأخواتها تتجاهل <code dir=\"ltr\">nan</code>.</li></ul>",
   "exercise": {
    "prompt": "<p>لديك أسعار تكلفة 6 منتجات <code dir=\"ltr\">cost</code> وأسعار بيعها <code dir=\"ltr\">price</code> وعدد الوحدات المباعة <code dir=\"ltr\">sold</code>:</p>\n<ol><li><code dir=\"ltr\">profit</code>: ربح كل منتج = (سعر البيع - التكلفة) × الوحدات المباعة.</li><li><code dir=\"ltr\">margin</code>: هامش الربح كنسبة مئوية = (سعر البيع - التكلفة) ÷ سعر البيع × 100، مقرباً لخانة عشرية واحدة.</li><li><code dir=\"ltr\">total_profit</code>: مجموع الأرباح.</li><li><code dir=\"ltr\">discounted</code>: أسعار البيع بعد خصم 20%، لكن لا تقل عن التكلفة (استخدم <code dir=\"ltr\">np.maximum</code>).</li></ol>",
    "starter": "import numpy as np\n\ncost = np.array([40, 120, 15, 300, 60, 8])\nprice = np.array([75, 150, 30, 420, 70, 20])\nsold = np.array([120, 40, 300, 10, 85, 500])",
    "solution": "import numpy as np\n\ncost = np.array([40, 120, 15, 300, 60, 8])\nprice = np.array([75, 150, 30, 420, 70, 20])\nsold = np.array([120, 40, 300, 10, 85, 500])\n\nprofit = (price - cost) * sold\nmargin = ((price - cost) / price * 100).round(1)\ntotal_profit = profit.sum()\ndiscounted = np.maximum(price * 0.8, cost)",
    "test": "print(profit)\nprint(margin)\nprint(total_profit)\nprint(discounted)",
    "expected": "[4200 1200 4500 1200  850 6000]\n[46.7 20.  50.  28.6 14.3 60. ]\n17950\n[ 60. 120.  24. 336.  60.  16.]"
   },
   "quiz": [
    {
     "q": "ما ناتج <code dir=\"ltr\">np.array([1, 2, 3]) + np.array([10, 20, 30])</code>؟",
     "o": [
      "<code dir=\"ltr\">[11 22 33]</code>",
      "<code dir=\"ltr\">[1, 2, 3, 10, 20, 30]</code>",
      "66"
     ],
     "a": 0,
     "why": "الجمع عنصراً بعنصر."
    },
    {
     "q": "ما ناتج <code dir=\"ltr\">np.mean([5, np.nan, 15])</code>؟",
     "o": [
      "nan",
      "10",
      "6.67"
     ],
     "a": 0,
     "why": "أي عملية مع nan تعطي nan، استخدم np.nanmean للحصول على 10."
    },
    {
     "q": "لماذا عمليات NumPy أسرع من حلقات Python؟",
     "o": [
      "لأنها تُنفَّذ داخلياً بلغة C على كتلة ذاكرة متصلة من نوع واحد",
      "لأنها تستخدم الإنترنت",
      "لأنها تتجاهل بعض العناصر"
     ],
     "a": 0,
     "why": "هذا هو التوجيه (Vectorization)."
    }
   ]
  },
  {
   "body": "<h2>البث (Broadcasting)</h2>\n<p>ماذا يحدث عند جمع مصفوفتين <strong>بشكلين مختلفين</strong>؟ NumPy &quot;يمدّ&quot; الأصغر تلقائياً لتطابق الأكبر، دون نسخها فعلاً في الذاكرة. هذا هو <strong>البث</strong>.</p>\n<p>أبسط حالة رأيتها: رقم مع مصفوفة. الرقم يُبث على كل العناصر:</p>\n<div class=\"code-block src py-run\" data-src=\"import numpy as np\n\nprint(np.array([1, 2, 3]) * 10)\"><span class=\"code-label\">Python</span><pre dir=\"ltr\"><code>import numpy as np\n\nprint(np.array([1, 2, 3]) * 10)</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>[10 20 30]</code></pre></div>\n<h2>صف مع جدول</h2>\n<div class=\"code-block src py-run\" data-src=\"import numpy as np\n\n# درجات 3 طلاب في 3 مواد\nscores = np.array([\n    [70, 80, 90],\n    [60, 75, 85],\n    [90, 95, 100],\n])\nbonus = np.array([5, 0, 10])      # درجة إضافية لكل مادة\n\nprint(scores + bonus)              # bonus يُضاف لكل صف\"><span class=\"code-label\">Python</span><pre dir=\"ltr\"><code>import numpy as np\n\n# درجات 3 طلاب في 3 مواد\nscores = np.array([\n    [70, 80, 90],\n    [60, 75, 85],\n    [90, 95, 100],\n])\nbonus = np.array([5, 0, 10])      # درجة إضافية لكل مادة\n\nprint(scores + bonus)              # bonus يُضاف لكل صف</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>[[ 75  80 100]\n [ 65  75  95]\n [ 95  95 110]]</code></pre></div>\n<p>الشكل (3, 3) مع (3,): الصف <code dir=\"ltr\">bonus</code> يُكرر على الصفوف الثلاثة.</p>\n<h2>عمود مع جدول</h2>\n<p>لإضافة قيمة مختلفة <strong>لكل صف</strong>، اجعلها عموداً بشكل (3, 1):</p>\n<div class=\"code-block src py-run\" data-src=\"import numpy as np\n\nscores = np.array([\n    [70, 80, 90],\n    [60, 75, 85],\n    [90, 95, 100],\n])\nper_student = np.array([[2], [10], [0]])   # الشكل (3, 1)\nprint(scores + per_student)\"><span class=\"code-label\">Python</span><pre dir=\"ltr\"><code>import numpy as np\n\nscores = np.array([\n    [70, 80, 90],\n    [60, 75, 85],\n    [90, 95, 100],\n])\nper_student = np.array([[2], [10], [0]])   # الشكل (3, 1)\nprint(scores + per_student)</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>[[ 72  82  92]\n [ 70  85  95]\n [ 90  95 100]]</code></pre></div>\n<h2>قواعد البث</h2>\n<p>NumPy يقارن الأشكال <strong>من اليمين</strong>، وكل بُعدين متقابلين يجب أن يكونا:</p>\n<ol><li><strong>متساويين</strong>، أو</li><li><strong>أحدهما 1</strong> (فيُمدّ).</li></ol>\n<div class=\"table-wrap\"><table><thead><tr><th>الشكل أ</th><th>الشكل ب</th><th>النتيجة</th></tr></thead><tbody><tr><td>(3, 4)</td><td>(4,)</td><td>(3, 4) ✓</td></tr><tr><td>(3, 4)</td><td>(3, 1)</td><td>(3, 4) ✓</td></tr><tr><td>(3, 1)</td><td>(1, 4)</td><td>(3, 4) ✓</td></tr><tr><td>(3, 4)</td><td>(3,)</td><td>✗ خطأ: 4 و 3</td></tr></tbody></table></div>\n<div class=\"code-block src py-run\" data-src=\"import numpy as np\n\na = np.ones((3, 4))\ntry:\n    a + np.array([1, 2, 3])\nexcept ValueError as e:\n    print(&quot;خطأ:&quot;, e)\n\n# جدول الضرب: عمود (9, 1) × صف (9,) = جدول (9, 9)\nn = np.arange(1, 10)\ntable = n.reshape(-1, 1) * n\nprint(table[:3])\"><span class=\"code-label\">Python</span><pre dir=\"ltr\"><code>import numpy as np\n\na = np.ones((3, 4))\ntry:\n    a + np.array([1, 2, 3])\nexcept ValueError as e:\n    print(&quot;خطأ:&quot;, e)\n\n# جدول الضرب: عمود (9, 1) × صف (9,) = جدول (9, 9)\nn = np.arange(1, 10)\ntable = n.reshape(-1, 1) * n\nprint(table[:3])</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>خطأ: operands could not be broadcast together with shapes (3,4) (3,) \n[[ 1  2  3  4  5  6  7  8  9]\n [ 2  4  6  8 10 12 14 16 18]\n [ 3  6  9 12 15 18 21 24 27]]</code></pre></div>\n<h2>مثال عملي: التوحيد القياسي (Standardization)</h2>\n<p>قبل تعلم الآلة، تُحوّل كل عمود إلى متوسط 0 وانحراف معياري 1، لتتساوى الأعمدة ذات المقاييس المختلفة (العمر بالسنوات والراتب بالآلاف). بالبث سطر واحد:</p>\n<div class=\"code-block src py-run\" data-src=\"import numpy as np\n\n# العمر، الراتب، سنوات الخبرة\nX = np.array([\n    [25, 8000, 2],\n    [35, 15000, 10],\n    [45, 22000, 20],\n    [30, 11000, 5],\n])\nZ = (X - X.mean(axis=0)) / X.std(axis=0)\nprint(Z.round(2))\nprint(&quot;المتوسطات:&quot;, Z.mean(axis=0).round(2))\"><span class=\"code-label\">Python</span><pre dir=\"ltr\"><code>import numpy as np\n\n# العمر، الراتب، سنوات الخبرة\nX = np.array([\n    [25, 8000, 2],\n    [35, 15000, 10],\n    [45, 22000, 20],\n    [30, 11000, 5],\n])\nZ = (X - X.mean(axis=0)) / X.std(axis=0)\nprint(Z.round(2))\nprint(&quot;المتوسطات:&quot;, Z.mean(axis=0).round(2))</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>[[-1.18 -1.14 -1.06]\n [ 0.17  0.19  0.11]\n [ 1.52  1.53  1.57]\n [-0.51 -0.57 -0.62]]\nالمتوسطات: [0. 0. 0.]</code></pre></div>\n<p><code dir=\"ltr\">X.mean(axis=0)</code> شكله (3,): متوسط لكل عمود، يُبث على الصفوف الأربعة.</p>\n<h2>ملخص الدرس</h2>\n<ul><li>البث يسمح بالعمليات بين مصفوفات مختلفة الشكل دون حلقات ولا نسخ.</li><li>الأشكال تُقارن من اليمين: كل بُعدين متساويين أو أحدهما 1.</li><li>صف (n,) يُبث على صفوف الجدول، وعمود (m, 1) يُبث على أعمدته.</li><li>تطبيق شائع: <code dir=\"ltr\">(X - X.mean(axis=0)) / X.std(axis=0)</code>.</li></ul>",
   "exercise": {
    "prompt": "<p>في <code dir=\"ltr\">sales</code> مبيعات 4 فروع (صفوف) خلال 3 أشهر (أعمدة)، وفي <code dir=\"ltr\">targets</code> الهدف الشهري <strong>لكل فرع</strong>:</p>\n<ol><li><code dir=\"ltr\">targets_col</code>: حوّل <code dir=\"ltr\">targets</code> إلى عمود بشكل (4, 1).</li><li><code dir=\"ltr\">achievement</code>: نسبة تحقيق الهدف لكل فرع في كل شهر = المبيعات ÷ الهدف × 100، مقربة لعدد صحيح بـ <code dir=\"ltr\">.round()</code> ثم <code dir=\"ltr\">.astype(int)</code>.</li><li><code dir=\"ltr\">share</code>: حصة كل فرع من مبيعات كل شهر بالنسبة المئوية = المبيعات ÷ مجموع الشهر × 100، مقربة لخانة عشرية واحدة.</li><li><code dir=\"ltr\">hit</code>: عدد الأشهر التي حقق فيها كل فرع هدفه (100% فأكثر).</li></ol>",
    "starter": "import numpy as np\n\nsales = np.array([\n    [120, 135, 150],\n    [80, 95, 70],\n    [200, 180, 220],\n    [60, 65, 90],\n])\ntargets = np.array([130, 80, 190, 75])",
    "solution": "import numpy as np\n\nsales = np.array([\n    [120, 135, 150],\n    [80, 95, 70],\n    [200, 180, 220],\n    [60, 65, 90],\n])\ntargets = np.array([130, 80, 190, 75])\n\ntargets_col = targets.reshape(-1, 1)\nachievement = (sales / targets_col * 100).round().astype(int)\nshare = (sales / sales.sum(axis=0) * 100).round(1)\nhit = (achievement >= 100).sum(axis=1)",
    "test": "print(targets_col.shape)\nprint(achievement)\nprint(share)\nprint(hit)",
    "expected": "(4, 1)\n[[ 92 104 115]\n [100 119  88]\n [105  95 116]\n [ 80  87 120]]\n[[26.1 28.4 28.3]\n [17.4 20.  13.2]\n [43.5 37.9 41.5]\n [13.  13.7 17. ]]\n[2 2 2 1]"
   },
   "quiz": [
    {
     "q": "ما شكل ناتج جمع مصفوفة (5, 3) مع مصفوفة (3,)؟",
     "o": [
      "(5, 3)",
      "(3,)",
      "خطأ"
     ],
     "a": 0,
     "why": "الصف (3,) يُبث على الصفوف الخمسة."
    },
    {
     "q": "أي جمع ينتج خطأ؟",
     "o": [
      "(4, 3) + (4,)",
      "(4, 3) + (3,)",
      "(4, 3) + (4, 1)"
     ],
     "a": 0,
     "why": "المقارنة من اليمين: 3 و 4 غير متساويين وليس أحدهما 1."
    },
    {
     "q": "كيف تطرح متوسط كل عمود من جدول X؟",
     "o": [
      "<code dir=\"ltr\">X - X.mean(axis=0)</code>",
      "<code dir=\"ltr\">X - X.mean(axis=1)</code>",
      "<code dir=\"ltr\">X - X.mean()</code>"
     ],
     "a": 0,
     "why": "mean(axis=0) يعطي متوسطاً لكل عمود بشكل يُبث على الصفوف."
    }
   ]
  },
  {
   "body": "<h2>الإحصاء الوصفي</h2>\n<p>NumPy فيها كل الدوال الإحصائية الأساسية، وكلها تقبل <code dir=\"ltr\">axis</code>:</p>\n<div class=\"code-block src py-run\" data-src=\"import numpy as np\n\nsalaries = np.array([7500, 9200, 8800, 12000, 6900, 45000, 10100])\n\nprint(&quot;المتوسط:&quot;, salaries.mean().round(1))\nprint(&quot;الوسيط:&quot;, np.median(salaries))\nprint(&quot;الانحراف المعياري:&quot;, salaries.std().round(1))\nprint(&quot;أقل وأعلى:&quot;, salaries.min(), salaries.max())\nprint(&quot;المدى:&quot;, np.ptp(salaries))\nprint(&quot;الربيعيات:&quot;, np.percentile(salaries, [25, 50, 75]))\"><span class=\"code-label\">Python</span><pre dir=\"ltr\"><code>import numpy as np\n\nsalaries = np.array([7500, 9200, 8800, 12000, 6900, 45000, 10100])\n\nprint(&quot;المتوسط:&quot;, salaries.mean().round(1))\nprint(&quot;الوسيط:&quot;, np.median(salaries))\nprint(&quot;الانحراف المعياري:&quot;, salaries.std().round(1))\nprint(&quot;أقل وأعلى:&quot;, salaries.min(), salaries.max())\nprint(&quot;المدى:&quot;, np.ptp(salaries))\nprint(&quot;الربيعيات:&quot;, np.percentile(salaries, [25, 50, 75]))</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>المتوسط: 14214.3\nالوسيط: 9200.0\nالانحراف المعياري: 12663.9\nأقل وأعلى: 6900 45000\nالمدى: 38100\nالربيعيات: [ 8150.  9200. 11050.]</code></pre></div>\n<p>لاحظ: راتب واحد مرتفع جداً (45000) رفع المتوسط كثيراً، بينما بقي <strong>الوسيط</strong> معبّراً عن الراتب المعتاد. لهذا يُفضَّل الوسيط مع البيانات التي فيها قيم شاذة (مثل الرواتب وأسعار العقارات).</p>\n<div class=\"callout tip\">💡 <code dir=\"ltr\">std()</code> يحسب الانحراف المعياري <strong>للمجتمع</strong> افتراضياً. للعينة استخدم <code dir=\"ltr\">std(ddof=1)</code> (وهو الافتراضي في Pandas).</div>\n<h2>التراكم والترتيب</h2>\n<div class=\"code-block src py-run\" data-src=\"import numpy as np\n\ndaily = np.array([5, 3, 8, 2, 7])\nprint(np.cumsum(daily))             # المجموع التراكمي\nprint(np.sort(daily))\nprint(np.sort(daily)[::-1])         # تنازلي\nprint(np.argsort(daily))            # فهارس الترتيب\nprint(np.unique([3, 1, 3, 2, 1, 3], return_counts=True))\"><span class=\"code-label\">Python</span><pre dir=\"ltr\"><code>import numpy as np\n\ndaily = np.array([5, 3, 8, 2, 7])\nprint(np.cumsum(daily))             # المجموع التراكمي\nprint(np.sort(daily))\nprint(np.sort(daily)[::-1])         # تنازلي\nprint(np.argsort(daily))            # فهارس الترتيب\nprint(np.unique([3, 1, 3, 2, 1, 3], return_counts=True))</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>[ 5  8 16 18 25]\n[2 3 5 7 8]\n[8 7 5 3 2]\n[3 1 0 4 2]\n(array([1, 2, 3]), array([2, 1, 3]))</code></pre></div>\n<h2>الارتباط</h2>\n<p>هل ترتفع المبيعات مع زيادة الإعلانات؟ معامل الارتباط بين -1 و 1:</p>\n<div class=\"code-block src py-run\" data-src=\"import numpy as np\n\nads = np.array([10, 15, 20, 25, 30, 35])\nsales = np.array([110, 135, 160, 172, 205, 220])\nprint(np.corrcoef(ads, sales).round(3))\"><span class=\"code-label\">Python</span><pre dir=\"ltr\"><code>import numpy as np\n\nads = np.array([10, 15, 20, 25, 30, 35])\nsales = np.array([110, 135, 160, 172, 205, 220])\nprint(np.corrcoef(ads, sales).round(3))</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>[[1.    0.995]\n [0.995 1.   ]]</code></pre></div>\n<p>قيمة قريبة من 1 تعني ارتباطاً طردياً قوياً. (الارتباط لا يعني السببية! ستتعلم المزيد في دورة الإحصاء.)</p>\n<h2>الجبر الخطي</h2>\n<p>أساس تعلم الآلة كله: ضرب المصفوفات وحل المعادلات.</p>\n<div class=\"code-block src py-run\" data-src=\"import numpy as np\n\n# أسعار 3 منتجات، وكميات طلبات 2 عميلين\nprices = np.array([10, 25, 4])\norders = np.array([\n    [2, 1, 5],\n    [0, 3, 10],\n])\nprint(orders @ prices)          # ضرب مصفوفة في متجه: إجمالي كل طلب\nprint(np.dot([1, 2, 3], [4, 5, 6]))\n\nA = np.array([[2, 1], [1, 3]])\nprint(A @ A)\nprint(np.linalg.det(A).round(2))\nprint(np.linalg.inv(A).round(2))\"><span class=\"code-label\">Python</span><pre dir=\"ltr\"><code>import numpy as np\n\n# أسعار 3 منتجات، وكميات طلبات 2 عميلين\nprices = np.array([10, 25, 4])\norders = np.array([\n    [2, 1, 5],\n    [0, 3, 10],\n])\nprint(orders @ prices)          # ضرب مصفوفة في متجه: إجمالي كل طلب\nprint(np.dot([1, 2, 3], [4, 5, 6]))\n\nA = np.array([[2, 1], [1, 3]])\nprint(A @ A)\nprint(np.linalg.det(A).round(2))\nprint(np.linalg.inv(A).round(2))</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>[ 65 115]\n32\n[[ 5  5]\n [ 5 10]]\n5.0\n[[ 0.6 -0.2]\n [-0.2  0.4]]</code></pre></div>\n<ul><li><code dir=\"ltr\">@</code> هو ضرب المصفوفات (وليس <code dir=\"ltr\">*</code> الذي يضرب عنصراً بعنصر).</li><li>في <code dir=\"ltr\">orders @ prices</code>: كل صف من الطلبات يُضرب في الأسعار ويُجمع.</li></ul>\n<h3>حل نظام معادلات</h3>\n<p>اشترى أحمد 2 قهوة و 1 كعكة بـ 31 ريالاً، واشترت سارة 1 قهوة و 3 كعكات بـ 38 ريالاً. ما سعر كل منهما؟</p>\n<div class=\"code-block src py-run\" data-src=\"import numpy as np\n\nA = np.array([[2, 1],\n              [1, 3]])\nb = np.array([31, 38])\ncoffee, cake = np.linalg.solve(A, b)\nprint(f&quot;القهوة: {coffee:.0f} ريال، الكعكة: {cake:.0f} ريال&quot;)\"><span class=\"code-label\">Python</span><pre dir=\"ltr\"><code>import numpy as np\n\nA = np.array([[2, 1],\n              [1, 3]])\nb = np.array([31, 38])\ncoffee, cake = np.linalg.solve(A, b)\nprint(f&quot;القهوة: {coffee:.0f} ريال، الكعكة: {cake:.0f} ريال&quot;)</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>القهوة: 11 ريال، الكعكة: 9 ريال</code></pre></div>\n<h2>ملخص الدرس</h2>\n<ul><li><code dir=\"ltr\">mean</code> و <code dir=\"ltr\">median</code> و <code dir=\"ltr\">std</code> و <code dir=\"ltr\">percentile</code> و <code dir=\"ltr\">ptp</code> للإحصاء الوصفي، والوسيط أقوى أمام القيم الشاذة.</li><li><code dir=\"ltr\">cumsum</code> و <code dir=\"ltr\">sort</code> و <code dir=\"ltr\">argsort</code> و <code dir=\"ltr\">unique</code> للتراكم والترتيب والعدّ.</li><li><code dir=\"ltr\">np.corrcoef</code> لمعامل الارتباط.</li><li><code dir=\"ltr\">@</code> لضرب المصفوفات، و <code dir=\"ltr\">np.linalg</code> للمحدد والمعكوس وحل المعادلات.</li></ul>",
   "exercise": {
    "prompt": "<p>في <code dir=\"ltr\">scores</code> درجات 5 طلاب (صفوف) في 3 اختبارات (أعمدة)، وفي <code dir=\"ltr\">weights</code> وزن كل اختبار من الدرجة النهائية:</p>\n<ol><li><code dir=\"ltr\">final</code>: الدرجة النهائية لكل طالب = ضرب <code dir=\"ltr\">scores</code> في <code dir=\"ltr\">weights</code> بضرب المصفوفات <code dir=\"ltr\">@</code>.</li><li><code dir=\"ltr\">ranking</code>: ترتيب الطلاب من الأعلى للأدنى كفهارس (استخدم <code dir=\"ltr\">argsort</code> ثم اعكس).</li><li><code dir=\"ltr\">median_final</code>: وسيط الدرجات النهائية.</li><li><code dir=\"ltr\">test_std</code>: الانحراف المعياري لكل اختبار (عمود)، مقرباً لخانة عشرية واحدة.</li></ol>",
    "starter": "import numpy as np\n\nscores = np.array([\n    [80, 70, 90],\n    [95, 85, 88],\n    [60, 75, 70],\n    [88, 92, 95],\n    [72, 68, 80],\n])\nweights = np.array([0.3, 0.3, 0.4])",
    "solution": "import numpy as np\n\nscores = np.array([\n    [80, 70, 90],\n    [95, 85, 88],\n    [60, 75, 70],\n    [88, 92, 95],\n    [72, 68, 80],\n])\nweights = np.array([0.3, 0.3, 0.4])\n\nfinal = scores @ weights\nranking = np.argsort(final)[::-1]\nmedian_final = np.median(final)\ntest_std = scores.std(axis=0).round(1)",
    "test": "print(final.round(1))\nprint(ranking)\nprint(round(float(median_final), 1))\nprint(test_std)",
    "expected": "[81.  89.2 68.5 92.  74. ]\n[3 1 0 4 2]\n81.0\n[12.2  9.1  8.8]"
   },
   "quiz": [
    {
     "q": "رواتب فيها قيمة شاذة كبيرة جداً، أيهما يعبّر أفضل عن الراتب المعتاد؟",
     "o": [
      "الوسيط median",
      "المتوسط mean",
      "أكبر قيمة max"
     ],
     "a": 0,
     "why": "المتوسط يتأثر بالقيم الشاذة، والوسيط لا يتأثر تقريباً."
    },
    {
     "q": "ما الفرق بين <code dir=\"ltr\">A @ B</code> و <code dir=\"ltr\">A * B</code>؟",
     "o": [
      "@ ضرب مصفوفات (صفوف × أعمدة)، و * ضرب عنصراً بعنصر",
      "لا فرق",
      "@ للجمع"
     ],
     "a": 0,
     "why": "ضرب المصفوفات أساس الجبر الخطي وتعلم الآلة."
    },
    {
     "q": "ماذا تعني قيمة ارتباط -0.9؟",
     "o": [
      "ارتباط عكسي قوي: كلما زاد أحدهما نقص الآخر",
      "لا يوجد ارتباط",
      "ارتباط طردي ضعيف"
     ],
     "a": 0,
     "why": "القيمة بين -1 و 1، والإشارة تحدد الاتجاه."
    }
   ]
  }
 ]
], {"runner": "python"});
