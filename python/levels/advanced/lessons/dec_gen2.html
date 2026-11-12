<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>المولدات (Generators) والبيان yield في بايثون - دليل شامل</title>
    <style>
        :root {
            --primary-color: #2c3e50;
            --secondary-color: #3498db;
            --accent-color: #e74c3c;
            --success-color: #27ae60;
            --warning-color: #f39c12;
            --light-color: #ecf0f1;
            --dark-color: #2c3e50;
            --code-bg: #2d2d2d;
        }
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        
        body {
            background-color: #f5f7fa;
            color: #333;
            line-height: 1.6;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }
        
        header {
            background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
            color: white;
            padding: 2rem 0;
            text-align: center;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        
        header h1 {
            font-size: 2.5rem;
            margin-bottom: 0.5rem;
        }
        
        header p {
            font-size: 1.2rem;
            opacity: 0.9;
        }
        
        nav {
            background-color: var(--dark-color);
            position: sticky;
            top: 0;
            z-index: 100;
        }
        
        nav ul {
            display: flex;
            list-style: none;
            justify-content: center;
            flex-wrap: wrap;
        }
        
        nav li {
            margin: 0;
        }
        
        nav a {
            display: block;
            color: white;
            text-decoration: none;
            padding: 1rem 1.5rem;
            transition: background-color 0.3s;
        }
        
        nav a:hover, nav a.active {
            background-color: var(--secondary-color);
        }
        
        .main-content {
            display: flex;
            margin: 2rem 0;
            gap: 2rem;
        }
        
        .sidebar {
            flex: 0 0 280px;
            background-color: white;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            padding: 1.5rem;
            height: fit-content;
            position: sticky;
            top: 100px;
        }
        
        .sidebar h3 {
            color: var(--primary-color);
            margin-bottom: 1rem;
            padding-bottom: 0.5rem;
            border-bottom: 2px solid var(--light-color);
        }
        
        .sidebar ul {
            list-style: none;
        }
        
        .sidebar li {
            margin-bottom: 0.5rem;
        }
        
        .sidebar a {
            color: var(--dark-color);
            text-decoration: none;
            display: block;
            padding: 0.5rem;
            border-radius: 4px;
            transition: all 0.3s;
        }
        
        .sidebar a:hover {
            background-color: var(--light-color);
            color: var(--secondary-color);
        }
        
        .content {
            flex: 1;
            background-color: white;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            padding: 2rem;
        }
        
        .section {
            margin-bottom: 3rem;
            scroll-margin-top: 80px;
        }
        
        .section h2 {
            color: var(--primary-color);
            margin-bottom: 1rem;
            padding-bottom: 0.5rem;
            border-bottom: 2px solid var(--light-color);
        }
        
        .section h3 {
            color: var(--secondary-color);
            margin: 1.5rem 0 1rem;
        }
        
        .section h4 {
            color: var(--accent-color);
            margin: 1rem 0 0.5rem;
        }
        
        .code-block {
            background-color: var(--code-bg);
            color: #f8f8f2;
            padding: 1.5rem;
            border-radius: 8px;
            margin: 1.5rem 0;
            overflow-x: auto;
            font-family: 'Courier New', monospace;
            line-height: 1.4;
            position: relative;
        }
        
        .code-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1rem;
            padding-bottom: 0.5rem;
            border-bottom: 1px solid #444;
        }
        
        .code-title {
            font-weight: bold;
            color: #fff;
        }
        
        .copy-btn {
            background-color: var(--secondary-color);
            color: white;
            border: none;
            padding: 0.3rem 0.7rem;
            border-radius: 4px;
            cursor: pointer;
            font-size: 0.8rem;
        }
        
        .code-comment {
            color: #75715e;
        }
        
        .code-keyword {
            color: #f92672;
        }
        
        .code-function {
            color: #66d9ef;
        }
        
        .code-string {
            color: #e6db74;
        }
        
        .code-class {
            color: #a6e22e;
        }
        
        .code-number {
            color: #ae81ff;
        }
        
        .code-yield {
            color: #fd971f;
            font-weight: bold;
        }
        
        .note {
            background-color: #e8f4fd;
            border-right: 4px solid var(--secondary-color);
            padding: 1rem;
            margin: 1.5rem 0;
            border-radius: 4px;
        }
        
        .warning {
            background-color: #fdf2e8;
            border-right: 4px solid var(--warning-color);
            padding: 1rem;
            margin: 1.5rem 0;
            border-radius: 4px;
        }
        
        .example {
            background-color: #f0f7f0;
            border-right: 4px solid var(--success-color);
            padding: 1rem;
            margin: 1.5rem 0;
            border-radius: 4px;
        }
        
        footer {
            background-color: var(--dark-color);
            color: white;
            text-align: center;
            padding: 2rem 0;
            margin-top: 3rem;
        }
        
        .btn {
            display: inline-block;
            background-color: var(--secondary-color);
            color: white;
            padding: 0.7rem 1.5rem;
            border-radius: 4px;
            text-decoration: none;
            font-weight: bold;
            transition: background-color 0.3s;
            border: none;
            cursor: pointer;
        }
        
        .btn:hover {
            background-color: #2980b9;
        }
        
        .comparison-table {
            width: 100%;
            border-collapse: collapse;
            margin: 1.5rem 0;
        }
        
        .comparison-table th,
        .comparison-table td {
            border: 1px solid #ddd;
            padding: 12px;
            text-align: right;
        }
        
        .comparison-table th {
            background-color: var(--light-color);
            color: var(--dark-color);
        }
        
        .comparison-table tr:nth-child(even) {
            background-color: #f9f9f9;
        }
        
        .output-block {
            background-color: #2d2d2d;
            color: #f8f8f2;
            padding: 1rem;
            border-radius: 8px;
            margin: 1rem 0;
            font-family: 'Courier New', monospace;
        }
        
        .quiz {
            background-color: #f8f9fa;
            border: 1px solid #dee2e6;
            border-radius: 8px;
            padding: 1.5rem;
            margin: 1.5rem 0;
        }
        
        .quiz-question {
            font-weight: bold;
            margin-bottom: 1rem;
        }
        
        .quiz-options {
            list-style: none;
        }
        
        .quiz-options li {
            margin-bottom: 0.5rem;
        }
        
        .quiz-options label {
            cursor: pointer;
            display: flex;
            align-items: center;
        }
        
        .quiz-options input {
            margin-left: 0.5rem;
        }
        
        @media (max-width: 768px) {
            .main-content {
                flex-direction: column;
            }
            
            .sidebar {
                flex: 1;
                margin-bottom: 2rem;
                position: static;
            }
            
            .comparison-table {
                font-size: 0.9rem;
            }
        }
    </style>
</head>
<body>
    <header>
        <div class="container">
            <h1>المولدات (Generators) والبيان yield في بايثون</h1>
            <p>دليل شامل لفهم وتطبيق المولدات والتقييم الكسول في بايثون</p>
        </div>
    </header>
    
    <nav>
        <div class="container">
            <ul>
                <li><a href="#introduction" class="active">مقدمة</a></li>
                <li><a href="#what-are-generators">ما هي المولدات؟</a></li>
                <li><a href="#yield-keyword">بيان yield</a></li>
                <li><a href="#generator-expressions">تعابير المولدات</a></li>
                <li><a href="#practical-examples">أمثلة عملية</a></li>
                <li><a href="#advanced-concepts">مفاهيم متقدمة</a></li>
                <li><a href="#quiz">اختبار المعلومات</a></li>
            </ul>
        </div>
    </nav>
    
    <div class="container">
        <div class="main-content">
            <aside class="sidebar">
                <h3>محتويات الدليل</h3>
                <ul>
                    <li><a href="#introduction">مقدمة عن المولدات</a></li>
                    <li><a href="#what-are-generators">ما هي المولدات؟</a></li>
                    <li><a href="#why-use-generators">لماذا نستخدم المولدات؟</a></li>
                    <li><a href="#yield-keyword">بيان yield</a></li>
                    <li><a href="#generator-functions">دوال المولدات</a></li>
                    <li><a href="#generator-vs-list">مقارنة: المولدات vs القوائم</a></li>
                    <li><a href="#generator-expressions">تعابير المولدات</a></li>
                    <li><a href="#practical-examples">أمثلة عملية</a></li>
                    <li><a href="#fibonacci-generator">مولد فيبوناتشي</a></li>
                    <li><a href="#file-reading">قراءة الملفات</a></li>
                    <li><a href="#data-processing">معالجة البيانات</a></li>
                    <li><a href="#advanced-concepts">مفاهيم متقدمة</a></li>
                    <li><a href="#send-method">طريقة send()</a></li>
                    <li><a href="#throw-close">throw() و close()</a></li>
                    <li><a href="#coroutines">الروتينات التشاركية</a></li>
                    <li><a href="#quiz">اختبار المعلومات</a></li>
                </ul>
            </aside>
            
            <main class="content">
                <section id="introduction" class="section">
                    <h2>مقدمة عن المولدات</h2>
                    <p>المولدات (Generators) في بايثون هي نوع خاص من الدوال التي تسمح لك بتكرار على سلسلة من القيم دون الحاجة إلى تخزينها جميعاً في الذاكرة في نفس الوقت. تعتبر المولدات أداة قوية للتعامل مع التدفقات الكبيرة من البيانات والتقييم الكسول (Lazy Evaluation).</p>
                    
                    <div class="note">
                        <p><strong>التقييم الكسول (Lazy Evaluation):</strong> هو أسلوب في البرمجة حيث لا يتم حساب القيم إلا عند الحاجة إليها، مما يحسن من أداء البرنامج ويقلل استخدام الذاكرة.</p>
                    </div>
                    
                    <h3 id="why-use-generators">لماذا نستخدم المولدات؟</h3>
                    <ul>
                        <li><strong>توفير الذاكرة:</strong> لا تحتفظ بجميع القيم في الذاكرة مرة واحدة</li>
                        <li><strong>تحسين الأداء:</strong> تبدأ في إنتاج القيم فوراً دون انتظار إنشاء المجموعة كاملة</li>
                        <li><strong>التعامل مع تدفقات لا نهائية:</strong> يمكن إنشاء تدفقات لا نهائية من البيانات</li>
                        <li><strong>سهولة القراءة:</strong> كود أنظف وأكثر تعبيراً</li>
                        <li><strong>التكامل مع البنية:</strong> تعمل بشكل طبيعي مع حلقات for والدوال المدمجة</li>
                    </ul>
                </section>
                
                <section id="what-are-generators" class="section">
                    <h2>ما هي المولدات؟</h2>
                    <p>المولدات هي دوال تستخدم بيان <code class="code-yield">yield</code> بدلاً من <code>return</code>. عندما تستدعي دالة مولد، فإنها لا تنفذ الكود فوراً، ولكنها تُرجع كائن مولد يمكن التكرار عليه.</p>
                    
                    <div class="code-block">
                        <div class="code-header">
                            <span class="code-title">مثال بسيط على المولد</span>
                            <button class="copy-btn" onclick="copyCode(this)">نسخ الكود</button>
                        </div>
                        <pre><code><span class="code-keyword">def</span> <span class="code-function">simple_generator</span>():
    <span class="code-yield">yield</span> <span class="code-number">1</span>
    <span class="code-yield">yield</span> <span class="code-number">2</span>
    <span class="code-yield">yield</span> <span class="code-number">3</span>

<span class="code-comment"># إنشاء المولد</span>
gen = simple_generator()

<span class="code-comment"># التكرار على القيم</span>
<span class="code-keyword">for</span> value <span class="code-keyword">in</span> gen:
    <span class="code-keyword">print</span>(value)</code></pre>
                    </div>
                    
                    <div class="output-block">
                        1<br>
                        2<br>
                        3
                    </div>
                    
                    <h3>كيف تعمل المولدات؟</h3>
                    <ol>
                        <li>عند استدعاء دالة المولد، تُرجع كائن مولد دون تنفيذ أي كود</li>
                        <li>عند طلب القيمة التالية (باستخدام next() أو في حلقة for)، ينفذ الكود حتى يصل إلى yield</li>
                        <li>تُرجع القيمة وتتوقف مؤقتاً، محتفظة بحالتها</li>
                        <li>عند طلب القيمة التالية، تستأنف التنفيذ من حيث توقفت</li>
                        <li>تستمر هذه العملية حتى تنتهي الدالة أو تواجه return</li>
                    </ol>
                </section>
                
                <section id="yield-keyword" class="section">
                    <h2>بيان yield</h2>
                    <p>بيان <code class="code-yield">yield</code> هو القلب النابض للمولدات. عندما تواجه الدالة هذا البيان، فإنها:</p>
                    
                    <ul>
                        <li>تُرجع القيمة المحددة</li>
                        <li>تتوقف مؤقتاً عن التنفيذ</li>
                        <li>تحتفظ بحالتها الداخلية (قيم المتغيرات، موقع التنفيذ)</li>
                        <li>تستأنف من نفس النقطة عند الطلب التالي</li>
                    </ul>
                    
                    <h3 id="generator-functions">دوال المولدات</h3>
                    <div class="code-block">
                        <div class="code-header">
                            <span class="code-title">مقارنة بين return و yield</span>
                            <button class="copy-btn" onclick="copyCode(this)">نسخ الكود</button>
                        </div>
                        <pre><code><span class="code-comment"># دالة عادية باستخدام return</span>
<span class="code-keyword">def</span> <span class="code-function">normal_function</span>():
    result = []
    <span class="code-keyword">for</span> i <span class="code-keyword">in</span> <span class="code-keyword">range</span>(<span class="code-number">3</span>):
        result.append(i)
    <span class="code-keyword">return</span> result  <span class="code-comment"># تُرجع جميع القيم مرة واحدة</span>

<span class="code-comment"># دالة مولد باستخدام yield</span>
<span class="code-keyword">def</span> <span class="code-function">generator_function</span>():
    <span class="code-keyword">for</span> i <span class="code-keyword">in</span> <span class="code-keyword">range</span>(<span class="code-number">3</span>):
        <span class="code-yield">yield</span> i  <span class="code-comment"># تُرجع قيمة واحدة في كل مرة</span>

<span class="code-comment"># الاستخدام</span>
<span class="code-keyword">print</span>(<span class="code-string">"الدالة العادية:"</span>, normal_function())
<span class="code-keyword">print</span>(<span class="code-string">"المولد:"</span>, <span class="code-keyword">list</span>(generator_function()))</code></pre>
                    </div>
                    
                    <div class="output-block">
                        الدالة العادية: [0, 1, 2]<br>
                        المولد: [0, 1, 2]
                    </div>
                    
                    <h3>استخدام next() مع المولدات</h3>
                    <div class="code-block">
                        <div class="code-header">
                            <span class="code-title">التفاعل المباشر مع المولد</span>
                            <button class="copy-btn" onclick="copyCode(this)">نسخ الكود</button>
                        </div>
                        <pre><code><span class="code-keyword">def</span> <span class="code-function">countdown</span>(n):
    <span class="code-keyword">while</span> n > <span class="code-number">0</span>:
        <span class="code-yield">yield</span> n
        n -= <span class="code-number">1</span>

<span class="code-comment"># إنشاء المولد</span>
counter = countdown(<span class="code-number">3</span>)

<span class="code-comment"># الحصول على القيم واحدة تلو الأخرى</span>
<span class="code-keyword">print</span>(<span class="code-keyword">next</span>(counter))  <span class="code-comment"># 3</span>
<span class="code-keyword">print</span>(<span class="code-keyword">next</span>(counter))  <span class="code-comment"># 2</span>
<span class="code-keyword">print</span>(<span class="code-keyword">next</span>(counter))  <span class="code-comment"># 1</span>

<span class="code-comment"># المحاولة بعد الانتهاء تسبب StopIteration</span>
<span class="code-keyword">try</span>:
    <span class="code-keyword">print</span>(<span class="code-keyword">next</span>(counter))
<span class="code-keyword">except</span> StopIteration:
    <span class="code-keyword">print</span>(<span class="code-string">"انتهى المولد!"</span>)</code></pre>
                    </div>
                    
                    <div class="output-block">
                        3<br>
                        2<br>
                        1<br>
                        انتهى المولد!
                    </div>
                </section>
                
                <section id="generator-vs-list" class="section">
                    <h2>مقارنة: المولدات vs القوائم</h2>
                    
                    <table class="comparison-table">
                        <thead>
                            <tr>
                                <th>المعيار</th>
                                <th>القوائم (Lists)</th>
                                <th>المولدات (Generators)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>استخدام الذاكرة</strong></td>
                                <td>تخزن جميع العناصر في الذاكرة مرة واحدة</td>
                                <td>تولد عنصراً واحداً في كل مرة</td>
                            </tr>
                            <tr>
                                <td><strong>السرعة</strong></td>
                                <td>أسرع في الوصول العشوائي</td>
                                <td>أسرع في التكرار المتسلسل</td>
                            </tr>
                            <tr>
                                <td><strong>التقييم</strong></td>
                                <td>تقييم جشع (Eager Evaluation)</td>
                                <td>تقييم كسول (Lazy Evaluation)</td>
                            </tr>
                            <tr>
                                <td><strong>إعادة الاستخدام</strong></td>
                                <td>يمكن إعادة استخدامها عدة مرات</td>
                                <td>يمكن استخدامها مرة واحدة فقط</td>
                            </tr>
                            <tr>
                                <td><strong>البيانات اللانهائية</strong></td>
                                <td>لا تدعم</td>
                                <td>تدعم</td>
                            </tr>
                        </tbody>
                    </table>
                    
                    <div class="code-block">
                        <div class="code-header">
                            <span class="code-title">مثال عملي للمقارنة</span>
                            <button class="copy-btn" onclick="copyCode(this)">نسخ الكود</button>
                        </div>
                        <pre><code><span class="code-keyword">import</span> sys

<span class="code-comment"># استخدام القوائم - يستهلك ذاكرة كبيرة</span>
<span class="code-keyword">def</span> <span class="code-function">create_list</span>(n):
    numbers = []
    <span class="code-keyword">for</span> i <span class="code-keyword">in</span> <span class="code-keyword">range</span>(n):
        numbers.append(i)
    <span class="code-keyword">return</span> numbers

<span class="code-comment"># استخدام المولدات - يستهلك ذاكرة قليلة</span>
<span class="code-keyword">def</span> <span class="code-function">create_generator</span>(n):
    <span class="code-keyword">for</span> i <span class="code-keyword">in</span> <span class="code-keyword">range</span>(n):
        <span class="code-yield">yield</span> i

<span class="code-comment"># مقارنة استخدام الذاكرة</span>
n = <span class="code-number">1000000</span>
list_memory = sys.getsizeof(create_list(n))
generator_memory = sys.getsizeof(create_generator(n))

<span class="code-keyword">print</span>(<span class="code-string">f"ذاكرة القائمة: </span><span class="code-keyword">{list_memory}</span><span class="code-string"> بايت"</span>)
<span class="code-keyword">print</span>(<span class="code-string">f"ذاكرة المولد: </span><span class="code-keyword">{generator_memory}</span><span class="code-string"> بايت"</span>)
<span class="code-keyword">print</span>(<span class="code-string">f"المولد يستخدم </span><span class="code-keyword">{list_memory // generator_memory}</span><span class="code-string"> مرة أقل ذاكرة!"</span>)</code></pre>
                    </div>
                    
                    <div class="output-block">
                        ذاكرة القائمة: 8448728 بايت<br>
                        ذاكرة المولد: 112 بايت<br>
                        المولد يستخدم 75435 مرة أقل ذاكرة!
                    </div>
                </section>
                
                <section id="generator-expressions" class="section">
                    <h2>تعابير المولدات (Generator Expressions)</h2>
                    <p>تعابير المولدات تشبه قوائم الاستيعاب (List Comprehensions) ولكنها تُرجع مولداً بدلاً من قائمة.</p>
                    
                    <div class="code-block">
                        <div class="code-header">
                            <span class="code-title">مقارنة بين أنواع التعابير</span>
                            <button class="copy-btn" onclick="copyCode(this)">نسخ الكود</button>
                        </div>
                        <pre><code><span class="code-comment"># قائمة استيعاب (تقييم جشع)</span>
list_comp = [x * x <span class="code-keyword">for</span> x <span class="code-keyword">in</span> <span class="code-keyword">range</span>(<span class="code-number">5</span>)]
<span class="code-keyword">print</span>(<span class="code-string">"قائمة الاستيعاب:"</span>, list_comp)
<span class="code-keyword">print</span>(<span class="code-string">"النوع:"</span>, <span class="code-keyword">type</span>(list_comp))

<span class="code-comment"># تعبير مولد (تقييم كسول)</span>
gen_exp = (x * x <span class="code-keyword">for</span> x <span class="code-keyword">in</span> <span class="code-keyword">range</span>(<span class="code-number">5</span>))
<span class="code-keyword">print</span>(<span class="code-string">"تعبير المولد:"</span>, gen_exp)
<span class="code-keyword">print</span>(<span class="code-string">"النوع:"</span>, <span class="code-keyword">type</span>(gen_exp))
<span class="code-keyword">print</span>(<span class="code-string">"القيم:"</span>, <span class="code-keyword">list</span>(gen_exp))</code></pre>
                    </div>
                    
                    <div class="output-block">
                        قائمة الاستيعاب: [0, 1, 4, 9, 16]<br>
                        النوع: &lt;class 'list'&gt;<br>
                        تعبير المولد: &lt;generator object &lt;genexpr&gt; at 0x...&gt;<br>
                        النوع: &lt;class 'generator'&gt;<br>
                        القيم: [0, 1, 4, 9, 16]
                    </div>
                    
                    <h3>استخدامات تعابير المولدات</h3>
                    <div class="code-block">
                        <div class="code-header">
                            <span class="code-title">أمثلة عملية</span>
                            <button class="copy-btn" onclick="copyCode(this)">نسخ الكود</button>
                        </div>
                        <pre><code><span class="code-comment"># جمع أعداد كبيرة بدون استهلاك ذاكرة</span>
sum_of_squares = <span class="code-keyword">sum</span>(x * x <span class="code-keyword">for</span> x <span class="code-keyword">in</span> <span class="code-keyword">range</span>(<span class="code-number">1000000</span>))
<span class="code-keyword">print</span>(<span class="code-string">"مجموع المربعات:"</span>, sum_of_squares)

<span class="code-comment"># تصفية البيانات</span>
numbers = (<span class="code-keyword">x</span> <span class="code-keyword">for</span> x <span class="code-keyword">in</span> <span class="code-keyword">range</span>(<span class="code-number">10</span>) <span class="code-keyword">if</span> x % <span class="code-number">2</span> == <span class="code-number">0</span>)
<span class="code-keyword">print</span>(<span class="code-string">"الأعداد الزوجية:"</span>, <span class="code-keyword">list</span>(numbers))

<span class="code-comment"># تحويل البيانات</span>
names = [<span class="code-string">"ahmed"</span>, <span class="code-string">"mohammed"</span>, <span class="code-string">"fatima"</span>]
capitalized = (name.title() <span class="code-keyword">for</span> name <span class="code-keyword">in</span> names)
<span class="code-keyword">print</span>(<span class="code-string">"الأسماء بحروف كبيرة:"</span>, <span class="code-keyword">list</span>(capitalized))</code></pre>
                    </div>
                    
                    <div class="output-block">
                        مجموع المربعات: 333332833333500000<br>
                        الأعداد الزوجية: [0, 2, 4, 6, 8]<br>
                        الأسماء بحروف كبيرة: ['Ahmed', 'Mohammed', 'Fatima']
                    </div>
                </section>
                
                <section id="practical-examples" class="section">
                    <h2>أمثلة عملية</h2>
                    
                    <h3 id="fibonacci-generator">1. مولد متتالية فيبوناتشي</h3>
                    <div class="code-block">
                        <div class="code-header">
                            <span class="code-title">مولد لسلسلة فيبوناتشي اللانهائية</span>
                            <button class="copy-btn" onclick="copyCode(this)">نسخ الكود</button>
                        </div>
                        <pre><code><span class="code-keyword">def</span> <span class="code-function">fibonacci</span>():
    <span class="code-comment">"""مولد لسلسلة فيبوناتشي اللانهائية"""</span>
    a, b = <span class="code-number">0</span>, <span class="code-number">1</span>
    <span class="code-keyword">while</span> <span class="code-keyword">True</span>:
        <span class="code-yield">yield</span> a
        a, b = b, a + b

<span class="code-comment"># إنشاء المولد</span>
fib_gen = fibonacci()

<span class="code-comment"># الحصول على أول 10 أعداد</span>
<span class="code-keyword">print</span>(<span class="code-string">"أول 10 أعداد في متتالية فيبوناتشي:"</span>)
<span class="code-keyword">for</span> i <span class="code-keyword">in</span> <span class="code-keyword">range</span>(<span class="code-number">10</span>):
    <span class="code-keyword">print</span>(<span class="code-keyword">next</span>(fib_gen), end=<span class="code-string">" "</span>)</code></pre>
                    </div>
                    
                    <div class="output-block">
                        أول 10 أعداد في متتالية فيبوناتشي:<br>
                        0 1 1 2 3 5 8 13 21 34
                    </div>
                    
                    <h3 id="file-reading">2. قراءة الملفات بكفاءة</h3>
                    <div class="code-block">
                        <div class="code-header">
                            <span class="code-title">مولد لقراءة الملفات سطراً سطراً</span>
                            <button class="copy-btn" onclick="copyCode(this)">نسخ الكود</button>
                        </div>
                        <pre><code><span class="code-keyword">def</span> <span class="code-function">read_large_file</span>(file_path):
    <span class="code-comment">"""مولد لقراءة ملف كبير سطراً سطراً"""</span>
    <span class="code-keyword">with</span> <span class="code-keyword">open</span>(file_path, <span class="code-string">'r'</span>, encoding=<span class="code-string">'utf-8'</span>) <span class="code-keyword">as</span> file:
        <span class="code-keyword">for</span> line <span class="code-keyword">in</span> file:
            <span class="code-yield">yield</span> line.strip()

<span class="code-comment"># محاكاة استخدام المولد مع ملف كبير</span>
<span class="code-keyword">def</span> <span class="code-function">process_data</span>(lines):
    <span class="code-comment">"""معالجة البيانات من المولد"""</span>
    processed_count = <span class="code-number">0</span>
    <span class="code-keyword">for</span> line <span class="code-keyword">in</span> lines:
        <span class="code-comment"># محاكاة معالجة السطر</span>
        processed_count += <span class="code-number">1</span>
        <span class="code-keyword">if</span> processed_count <= <span class="code-number">5</span>:  <span class="code-comment"># عرض أول 5 أسطر فقط</span>
            <span class="code-keyword">print</span>(<span class="code-string">f"معالجة السطر </span><span class="code-keyword">{processed_count}</span><span class="code-string">: </span><span class="code-keyword">{line[:50]}</span><span class="code-string">..."</span>)
    <span class="code-keyword">return</span> processed_count

<span class="code-comment"># محاكاة ملف ببيانات</span>
sample_data = [<span class="code-string">f"سطر بيانات رقم </span><span class="code-keyword">{i}</span><span class="code-string">"</span> * <span class="code-number">10</span> <span class="code-keyword">for</span> i <span class="code-keyword">in</span> <span class="code-keyword">range</span>(<span class="code-number">1000</span>)]

<span class="code-comment"># حفظ البيانات في ملف مؤقت (في التطبيق الحقيقي سيكون ملف حقيقي)</span>
<span class="code-keyword">with</span> <span class="code-keyword">open</span>(<span class="code-string">'sample_file.txt'</span>, <span class="code-string">'w'</span>, encoding=<span class="code-string">'utf-8'</span>) <span class="code-keyword">as</span> f:
    <span class="code-keyword">for</span> line <span class="code-keyword">in</span> sample_data:
        f.write(line + <span class="code-string">'\n'</span>)

<span class="code-comment"># استخدام المولد لمعالجة الملف</span>
lines_gen = read_large_file(<span class="code-string">'sample_file.txt'</span>)
total_processed = process_data(lines_gen)
<span class="code-keyword">print</span>(<span class="code-string">f"تم معالجة </span><span class="code-keyword">{total_processed}</span><span class="code-string"> سطر بإستخدام المولد"</span>)</code></pre>
                    </div>
                    
                    <div class="output-block">
                        معالجة السطر 1: سطر بيانات رقم 0سطر بيانات رقم 0سطر بيانات رقم 0سطر بيانا...<br>
                        معالجة السطر 2: سطر بيانات رقم 1سطر بيانات رقم 1سطر بيانات رقم 1سطر بيانا...<br>
                        معالجة السطر 3: سطر بيانات رقم 2سطر بيانات رقم 2سطر بيانات رقم 2سطر بيانا...<br>
                        معالجة السطر 4: سطر بيانات رقم 3سطر بيانات رقم 3سطر بيانات رقم 3سطر بيانا...<br>
                        معالجة السطر 5: سطر بيانات رقم 4سطر بيانات رقم 4سطر بيانات رقم 4سطر بيانا...<br>
                        تم معالجة 1000 سطر بإستخدام المولد
                    </div>
                    
                    <h3 id="data-processing">3. معالجة البيانات بالأنابيب (Pipelines)</h3>
                    <div class="code-block">
                        <div class="code-header">
                            <span class="code-title">سلسلة مولدات لمعالجة البيانات</span>
                            <button class="copy-btn" onclick="copyCode(this)">نسخ الكود</button>
                        </div>
                        <pre><code><span class="code-keyword">def</span> <span class="code-function">number_generator</span>(n):
    <span class="code-comment">"""مولد للأعداد من 0 إلى n-1"""</span>
    <span class="code-keyword">for</span> i <span class="code-keyword">in</span> <span class="code-keyword">range</span>(n):
        <span class="code-yield">yield</span> i

<span class="code-keyword">def</span> <span class="code-function">square_numbers</span>(numbers):
    <span class="code-comment">"""مولد لتربيع الأعداد"""</span>
    <span class="code-keyword">for</span> num <span class="code-keyword">in</span> numbers:
        <span class="code-yield">yield</span> num * num

<span class="code-keyword">def</span> <span class="code-function">filter_even</span>(numbers):
    <span class="code-comment">"""مولد لتصفية الأعداد الزوجية"""</span>
    <span class="code-keyword">for</span> num <span class="code-keyword">in</span> numbers:
        <span class="code-keyword">if</span> num % <span class="code-number">2</span> == <span class="code-number">0</span>:
            <span class="code-yield">yield</span> num

<span class="code-comment"># إنشاء pipeline معالجة البيانات</span>
<span class="code-keyword">def</span> <span class="code-function">data_pipeline</span>(n):
    numbers = number_generator(n)
    squared = square_numbers(numbers)
    even_squares = filter_even(squared)
    <span class="code-keyword">return</span> even_squares

<span class="code-comment"># استخدام الـpipeline</span>
<span class="code-keyword">print</span>(<span class="code-string">"مربعات الأعداد الزوجية من 0 إلى 9:"</span>)
result = data_pipeline(<span class="code-number">10</span>)
<span class="code-keyword">print</span>(<span class="code-keyword">list</span>(result))

<span class="code-comment"># استخدام أكثر كفاءة مع تعابير المولدات</span>
efficient_result = (x * x <span class="code-keyword">for</span> x <span class="code-keyword">in</span> <span class="code-keyword">range</span>(<span class="code-number">10</span>) <span class="code-keyword">if</span> (x * x) % <span class="code-number">2</span> == <span class="code-number">0</span>)
<span class="code-keyword">print</span>(<span class="code-string">"النتيجة بكفاءة:"</span>, <span class="code-keyword">list</span>(efficient_result))</code></pre>
                    </div>
                    
                    <div class="output-block">
                        مربعات الأعداد الزوجية من 0 إلى 9:<br>
                        [0, 4, 16, 36, 64]<br>
                        النتيجة بكفاءة: [0, 4, 16, 36, 64]
                    </div>
                    
                    <h3>4. مولد للبيانات اللانهائية</h3>
                    <div class="code-block">
                        <div class="code-header">
                            <span class="code-title">مولد للبيانات اللانهائية مع شرط توقف</span>
                            <button class="copy-btn" onclick="copyCode(this)">نسخ الكود</button>
                        </div>
                        <pre><code><span class="code-keyword">def</span> <span class="code-function">infinite_counter</span>(start=<span class="code-number">0</span>, step=<span class="code-number">1</span>):
    <span class="code-comment">"""مولد عداد لا نهائي"""</span>
    current = start
    <span class="code-keyword">while</span> <span class="code-keyword">True</span>:
        <span class="code-yield">yield</span> current
        current += step

<span class="code-keyword">def</span> <span class="code-function">take</span>(n, generator):
    <span class="code-comment">"""أخذ n عنصر من المولد"""</span>
    <span class="code-keyword">for</span> _ <span class="code-keyword">in</span> <span class="code-keyword">range</span>(n):
        <span class="code-yield">yield</span> <span class="code-keyword">next</span>(generator)

<span class="code-comment"># استخدام المولد اللانهائي</span>
counter = infinite_counter(<span class="code-number">10</span>, <span class="code-number">2</span>)
<span class="code-keyword">print</span>(<span class="code-string">"أول 5 قيم من العداد:"</span>, <span class="code-keyword">list</span>(take(<span class="code-number">5</span>, counter)))

<span class="code-comment"># مولد للأعداد الأولية</span>
<span class="code-keyword">def</span> <span class="code-function">primes</span>():
    <span class="code-comment">"""مولد لسلسلة الأعداد الأولية اللانهائية"""</span>
    <span class="code-keyword">def</span> <span class="code-function">is_prime</span>(n):
        <span class="code-keyword">if</span> n < <span class="code-number">2</span>:
            <span class="code-keyword">return</span> <span class="code-keyword">False</span>
        <span class="code-keyword">for</span> i <span class="code-keyword">in</span> <span class="code-keyword">range</span>(<span class="code-number">2</span>, int(n ** <span class="code-number">0.5</span>) + <span class="code-number">1</span>):
            <span class="code-keyword">if</span> n % i == <span class="code-number">0</span>:
                <span class="code-keyword">return</span> <span class="code-keyword">False</span>
        <span class="code-keyword">return</span> <span class="code-keyword">True</span>
    
    n = <span class="code-number">2</span>
    <span class="code-keyword">while</span> <span class="code-keyword">True</span>:
        <span class="code-keyword">if</span> is_prime(n):
            <span class="code-yield">yield</span> n
        n += <span class="code-number">1</span>

<span class="code-comment"># الحصول على أول 10 أعداد أولية</span>
prime_gen = primes()
<span class="code-keyword">print</span>(<span class="code-string">"أول 10 أعداد أولية:"</span>, <span class="code-keyword">list</span>(take(<span class="code-number">10</span>, prime_gen)))</code></pre>
                    </div>
                    
                    <div class="output-block">
                        أول 5 قيم من العداد: [10, 12, 14, 16, 18]<br>
                        أول 10 أعداد أولية: [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
                    </div>
                </section>
                
                <section id="advanced-concepts" class="section">
                    <h2>مفاهيم متقدمة</h2>
                    
                    <h3 id="send-method">1. طريقة send()</h3>
                    <p>تسمح طريقة <code>send()</code> بإرسال قيم إلى المولد واستخدامها داخل الدالة.</p>
                    
                    <div class="code-block">
                        <div class="code-header">
                            <span class="code-title">استخدام send() مع المولدات</span>
                            <button class="copy-btn" onclick="copyCode(this)">نسخ الكود</button>
                        </div>
                        <pre><code><span class="code-keyword">def</span> <span class="code-function">accumulator</span>():
    <span class="code-comment">"""مولد يaccumulate القيم مع إمكانية إعادة التعيين"""</span>
    total = <span class="code-number">0</span>
    <span class="code-keyword">while</span> <span class="code-keyword">True</span>:
        value = <span class="code-yield">yield</span> total
        <span class="code-keyword">if</span> value <span class="code-keyword">is</span> <span class="code-keyword">None</span>:
            total += <span class="code-number">1</span>  <span class="code-comment"># زيادة默认ية</span>
        <span class="code-keyword">else</span>:
            total = value  <span class="code-comment"># إعادة تعيين القيمة</span>

<span class="code-comment"># استخدام المولد</span>
acc = accumulator()
<span class="code-keyword">next</span>(acc)  <span class="code-comment"># بدء المولد</span>

<span class="code-keyword">print</span>(acc.send(<span class="code-keyword">None</span>))  <span class="code-comment"># 1 (زيادة默认ية)</span>
<span class="code-keyword">print</span>(acc.send(<span class="code-keyword">None</span>))  <span class="code-comment"># 2</span>
<span class="code-keyword">print</span>(acc.send(<span class="code-number">10</span>))   <span class="code-comment"># 10 (إعادة التعيين)</span>
<span class="code-keyword">print</span>(acc.send(<span class="code-keyword">None</span>))  <span class="code-comment"># 11</span></code></pre>
                    </div>
                    
                    <div class="output-block">
                        1<br>
                        2<br>
                        10<br>
                        11
                    </div>
                    
                    <h3 id="throw-close">2. طرق throw() و close()</h3>
                    <div class="code-block">
                        <div class="code-header">
                            <span class="code-title">التحكم في المولدات</span>
                            <button class="copy-btn" onclick="copyCode(this)">نسخ الكود</button>
                        </div>
                        <pre><code><span class="code-keyword">def</span> <span class="code-function">sensitive_generator</span>():
    <span class="code-keyword">try</span>:
        <span class="code-keyword">for</span> i <span class="code-keyword">in</span> <span class="code-keyword">range</span>(<span class="code-number">5</span>):
            <span class="code-yield">yield</span> i
    <span class="code-keyword">except</span> ValueError <span class="code-keyword">as</span> e:
        <span class="code-keyword">print</span>(<span class="code-string">f"تم اعتراض خطأ: </span><span class="code-keyword">{e}</span><span class="code-string">"</span>)
        <span class="code-yield">yield</span> <span class="code-string">"استمرار بعد الخطأ"</span>
    <span class="code-keyword">finally</span>:
        <span class="code-keyword">print</span>(<span class="code-string">"تنظيف المولد"</span>)

<span class="code-comment"># استخدام throw() لرمي استثناء داخل المولد</span>
gen = sensitive_generator()
<span class="code-keyword">print</span>(<span class="code-keyword">next</span>(gen))  <span class="code-comment"># 0</span>
<span class="code-keyword">print</span>(gen.throw(ValueError(<span class="code-string">"خطأ مخصص"</span>)))  <span class="code-comment"># استمرار بعد الخطأ</span>

<span class="code-comment"># استخدام close() لإغلاق المولد</span>
gen2 = sensitive_generator()
<span class="code-keyword">print</span>(<span class="code-keyword">next</span>(gen2))  <span class="code-comment"># 0</span>
gen2.close()
<span class="code-keyword">print</span>(<span class="code-string">"تم إغلاق المولد"</span>)</code></pre>
                    </div>
                    
                    <div class="output-block">
                        0<br>
                        تم اعتراض خطأ: خطأ مخصص<br>
                        استمرار بعد الخطأ<br>
                        0<br>
                        تنظيف المولد<br>
                        تم إغلاق المولد
                    </div>
                    
                    <h3 id="coroutines">3. الروتينات التشاركية (Coroutines)</h3>
                    <p>المولدات يمكن استخدامها كروتينات تشاركية للبرمجة غير المتزامنة.</p>
                    
                    <div class="code-block">
                        <div class="code-header">
                            <span class="code-title">مثال على الروتينات التشاركية</span>
                            <button class="copy-btn" onclick="copyCode(this)">نسخ الكود</button>
                        </div>
                        <pre><code><span class="code-keyword">def</span> <span class="code-function">player</span>(name):
    <span class="code-comment">"""روتين تشاركي لمحاكاة لاعب"""</span>
    <span class="code-keyword">print</span>(<span class="code-string">f"</span><span class="code-keyword">{name}</span><span class="code-string"> جاهز للعب!"</span>)
    <span class="code-keyword">while</span> <span class="code-keyword">True</span>:
        command = <span class="code-yield">yield</span>
        <span class="code-keyword">if</span> command == <span class="code-string">"هجوم"</span>:
            <span class="code-keyword">print</span>(<span class="code-string">f"</span><span class="code-keyword">{name}</span><span class="code-string"> يهاجم!"</span>)
        <span class="code-keyword">elif</span> command == <span class="code-string">"دفاع"</span>:
            <span class="code-keyword">print</span>(<span class="code-string">f"</span><span class="code-keyword">{name}</span><span class="code-string"> يدافع!"</span>)
        <span class="code-keyword">elif</span> command == <span class="code-string">"توقف"</span>:
            <span class="code-keyword">print</span>(<span class="code-string">f"</span><span class="code-keyword">{name}</span><span class="code-string"> يتوقف عن اللعب"</span>)
            <span class="code-keyword">break</span>
        <span class="code-keyword">else</span>:
            <span class="code-keyword">print</span>(<span class="code-string">f"</span><span class="code-keyword">{name}</span><span class="code-string">: لا أفهم الأمر '</span><span class="code-keyword">{command}</span><span class="code-string">'"</span>)

<span class="code-comment"># إنشاء اللاعبين</span>
player1 = player(<span class="code-string">"أحمد"</span>)
player2 = player(<span class="code-string">"محمد"</span>)

<span class="code-comment"># بدء الروتينات</span>
<span class="code-keyword">next</span>(player1)
<span class="code-keyword">next</span>(player2)

<span class="code-comment"># إرسال الأوامر</span>
commands = [<span class="code-string">"هجوم"</span>, <span class="code-string">"دفاع"</span>, <span class="code-string">"هجوم"</span>, <span class="code-string">"غير معروف"</span>, <span class="code-string">"توقف"</span>]

<span class="code-keyword">for</span> cmd <span class="code-keyword">in</span> commands:
    player1.send(cmd)
    player2.send(cmd)</code></pre>
                    </div>
                    
                    <div class="output-block">
                        أحمد جاهز للعب!<br>
                        محمد جاهز للعب!<br>
                        أحمد يهاجم!<br>
                        محمد يهاجم!<br>
                        أحمد يدافع!<br>
                        محمد يدافع!<br>
                        أحمد يهاجم!<br>
                        محمد يهاجم!<br>
                        أحمد: لا أفهم الأمر 'غير معروف'<br>
                        محمد: لا أفهم الأمر 'غير معروف'<br>
                        أحمد يتوقف عن اللعب<br>
                        محمد يتوقف عن اللعب
                    </div>
                </section>
                
                <section id="quiz" class="section">
                    <h2>اختبار المعلومات</h2>
                    
                    <div class="quiz">
                        <div class="quiz-question">1. ما هو الفرق الرئيسي بين return و yield؟</div>
                        <ul class="quiz-options">
                            <li><label><input type="radio" name="q1"> yield يُرجع قيمة ويتوقف، بينما return يُنهي الدالة</label></li>
                            <li><label><input type="radio" name="q1"> return يُرجع قيمة ويتوقف، بينما yield يُنهي الدالة</label></li>
                            <li><label><input type="radio" name="q1"> لا فرق بينهما</label></li>
                            <li><label><input type="radio" name="q1"> yield أسرع من return</label></li>
                        </ul>
                    </div>
                    
                    <div class="quiz">
                        <div class="quiz-question">2. ما ميزة استخدام المولدات على القوائم؟</div>
                        <ul class="quiz-options">
                            <li><label><input type="radio" name="q2"> توفير الذاكرة</label></li>
                            <li><label><input type="radio" name="q2"> إمكانية إعادة الاستخدام</label></li>
                            <li><label><input type="radio" name="q2"> الوصول العشوائي</label></li>
                            <li><label><input type="radio" name="q2"> جميع ما سبق</label></li>
                        </ul>
                    </div>
                    
                    <div class="quiz">
                        <div class="quiz-question">3. ماذا يحدث عندما نستدعي next() على مولد منتهي؟</div>
                        <ul class="quiz-options">
                            <li><label><input type="radio" name="q3"> يُرجع None</label></li>
                            <li><label><input type="radio" name="q3"> يُعيد تشغيل المولد</label></li>
                            <li><label><input type="radio" name="q3"> يرمي استثناء StopIteration</label></li>
                            <li><label><input type="radio" name="q3"> يتوقف البرنامج</label></li>
                        </ul>
                    </div>
                    
                    <button class="btn" onclick="checkAnswers()">تحقق من الإجابات</button>
                </section>
            </main>
        </div>
    </div>
    
    <footer>
        <div class="container">
            <p>المولدات (Generators) والبيان yield في بايثون - دليل شامل &copy; 2023</p>
            <p>تم تصميم هذه الصفحة لتكون موردًا تعليميًا شاملاً لفهم وتطبيق المولدات في بايثون</p>
        </div>
    </footer>
    
    <script>
        // نسخ الكود
        function copyCode(button) {
            const codeBlock = button.closest('.code-block');
            const code = codeBlock.querySelector('pre').textContent;
            navigator.clipboard.writeText(code).then(() => {
                const originalText = button.textContent;
                button.textContent = 'تم النسخ!';
                setTimeout(() => {
                    button.textContent = originalText;
                }, 2000);
            });
        }
        
        // التحقق من الإجابات
        function checkAnswers() {
            const answers = {
                q1: 0, // الإجابة الأولى
                q2: 0, // الإجابة الأولى  
                q3: 2  // الإجابة الثالثة
            };
            
            let score = 0;
            const totalQuestions = Object.keys(answers).length;
            
            for (const question in answers) {
                const selectedOption = document.querySelector(`input[name="${question}"]:checked`);
                if (selectedOption) {
                    const options = document.querySelectorAll(`input[name="${question}"]`);
                    const selectedIndex = Array.from(options).indexOf(selectedOption);
                    
                    if (selectedIndex === answers[question]) {
                        score++;
                        selectedOption.parentElement.style.color = "green";
                    } else {
                        selectedOption.parentElement.style.color = "red";
                        options[answers[question]].parentElement.style.color = "green";
                        options[answers[question]].parentElement.style.fontWeight = "bold";
                    }
                }
            }
            
            alert(`درجتك: ${score} من ${totalQuestions}`);
        }
        
        // التنقل السلس
        document.querySelectorAll('nav a, .sidebar a').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                    
                    document.querySelectorAll('nav a').forEach(link => {
                        link.classList.remove('active');
                    });
                    this.classList.add('active');
                }
            });
        });
        
        // تحديث التنشيط في القائمة أثناء التمرير
        window.addEventListener('scroll', function() {
            const sections = document.querySelectorAll('.section');
            const navLinks = document.querySelectorAll('nav a');
            
            let currentSection = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop - 100;
                if (window.scrollY >= sectionTop) {
                    currentSection = section.getAttribute('id');
                }
            });
            
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${currentSection}`) {
                    link.classList.add('active');
                }
            });
        });
    </script>
</body>
</html>