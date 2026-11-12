<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>الديكورات (Decorators) في بايثون - دليل شامل</title>
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
        
        .code-decorator {
            color: #fd971f;
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
        
        .concept-box {
            background-color: var(--light-color);
            border-radius: 8px;
            padding: 1.5rem;
            margin: 1.5rem 0;
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
        }
    </style>
</head>
<body>
    <header>
        <div class="container">
            <h1>الديكورات (Decorators) في بايثون</h1>
            <p>دليل شامل لفهم وتطبيق الديكورات في لغة البرمجة بايثون</p>
        </div>
    </header>
    
    <nav>
        <div class="container">
            <ul>
                <li><a href="#introduction" class="active">مقدمة</a></li>
                <li><a href="#what-are-decorators">ما هي الديكورات؟</a></li>
                <li><a href="#first-class-functions">الدوال من الدرجة الأولى</a></li>
                <li><a href="#creating-decorators">إنشاء الديكورات</a></li>
                <li><a href="#practical-examples">أمثلة عملية</a></li>
                <li><a href="#advanced-decorators">ديكورات متقدمة</a></li>
                <li><a href="#quiz">اختبار المعلومات</a></li>
            </ul>
        </div>
    </nav>
    
    <div class="container">
        <div class="main-content">
            <aside class="sidebar">
                <h3>محتويات الدليل</h3>
                <ul>
                    <li><a href="#introduction">مقدمة عن الديكورات</a></li>
                    <li><a href="#what-are-decorators">ما هي الديكورات؟</a></li>
                    <li><a href="#why-use-decorators">لماذا نستخدم الديكورات؟</a></li>
                    <li><a href="#first-class-functions">الدوال من الدرجة الأولى</a></li>
                    <li><a href="#functions-as-arguments">الدوال كمعاملات</a></li>
                    <li><a href="#functions-returning-functions">دوال تُرجع دوال</a></li>
                    <li><a href="#creating-decorators">إنشاء الديكورات</a></li>
                    <li><a href="#syntax-sugar">السكر النحوي (@)</a></li>
                    <li><a href="#multiple-decorators">ديكورات متعددة</a></li>
                    <li><a href="#practical-examples">أمثلة عملية</a></li>
                    <li><a href="#timer-decorator">ديكورات التوقيت</a></li>
                    <li><a href="#cache-decorator">ديكورات التخزين المؤقت</a></li>
                    <li><a href="#validation-decorator">ديكورات التحقق</a></li>
                    <li><a href="#advanced-decorators">ديكورات متقدمة</a></li>
                    <li><a href="#class-decorators">ديكورات الكلاسات</a></li>
                    <li><a href="#decorators-with-parameters">ديكورات بمعاملات</a></li>
                    <li><a href="#builtin-decorators">الديكورات المدمجة</a></li>
                    <li><a href="#quiz">اختبار المعلومات</a></li>
                </ul>
            </aside>
            
            <main class="content">
                <section id="introduction" class="section">
                    <h2>مقدمة عن الديكورات</h2>
                    <p>الديكورات (Decorators) في بايثون هي إحدى الميزات القوية والمرنة التي تسمح لك بتعديل أو تحسين سلوك الدوال أو الكلاسات دون تغيير الكود الأصلي لها. تعتبر الديكورات من المفاهيم المتقدمة في بايثون ولكنها أساسية لفهم البرمجة فيها.</p>
                    
                    <div class="note">
                        <p><strong>ملاحظة:</strong> الديكورات تعتمد على مفهوم أن "الدوال هي كائنات من الدرجة الأولى" في بايثون، مما يعني أنه يمكن تمريرها كمعاملات وإرجاعها كقيم من دوال أخرى.</p>
                    </div>
                    
                    <h3 id="why-use-decorators">لماذا نستخدم الديكورات؟</h3>
                    <ul>
                        <li>إضافة وظائف للدوال دون تعديل الكود الأصلي</li>
                        <li>إعادة استخدام الكود وتجنب التكرار</li>
                        <li>فصل الاهتمامات (Separation of Concerns)</li>
                        <li>تنفيذ أنماط التصميم مثل Decorator Pattern</li>
                        <li>تطبيق مفاهيم البرمجة الوظيفية</li>
                    </ul>
                </section>
                
                <section id="what-are-decorators" class="section">
                    <h2>ما هي الديكورات؟</h2>
                    <p>الديكورات هي دوال تأخذ دالة كمدخل وتُعيد دالة كمخرج، مع إضافة بعض الوظائف الإضافية للدالة الأصلية.</p>
                    
                    <div class="concept-box">
                        <h4>التعريف البسيط:</h4>
                        <p>الديكور هو دالة تأخذ دالة أخرى وتوسع من سلوكها دون تعديل الكود الداخلي لها.</p>
                    </div>
                    
                    <h3>الصورة العامة للديكور</h3>
                    <div class="code-block">
                        <pre><code><span class="code-keyword">def</span> <span class="code-function">my_decorator</span>(func):
    <span class="code-keyword">def</span> <span class="code-function">wrapper</span>():
        <span class="code-comment"># كود يتم تنفيذه قبل الدالة الأصلية</span>
        <span class="code-keyword">print</span>(<span class="code-string">"شيء يحدث قبل استدعاء الدالة."</span>)
        
        <span class="code-comment"># استدعاء الدالة الأصلية</span>
        func()
        
        <span class="code-comment"># كود يتم تنفيذه بعد الدالة الأصلية</span>
        <span class="code-keyword">print</span>(<span class="code-string">"شيء يحدث بعد استدعاء الدالة."</span>)
    
    <span class="code-keyword">return</span> wrapper

<span class="code-keyword">def</span> <span class="code-function">say_hello</span>():
    <span class="code-keyword">print</span>(<span class="code-string">"مرحباً!"</span>)

<span class="code-comment"># تطبيق الديكور</span>
decorated_hello = my_decorator(say_hello)
decorated_hello()</code></pre>
                    </div>
                    
                    <div class="output-block">
                        شيء يحدث قبل استدعاء الدالة.<br>
                        مرحباً!<br>
                        شيء يحدث بعد استدعاء الدالة.
                    </div>
                </section>
                
                <section id="first-class-functions" class="section">
                    <h2>الدوال من الدرجة الأولى</h2>
                    <p>لفهم الديكورات، يجب أولاً فهم مفهوم "الدوال من الدرجة الأولى" (First-Class Functions). في بايثون، تعامل الدوال كأي كائن آخر، مما يعني أنه يمكن:</p>
                    
                    <h3 id="functions-as-arguments">1. تمرير الدوال كمعاملات</h3>
                    <div class="code-block">
                        <pre><code><span class="code-keyword">def</span> <span class="code-function">greet</span>(name):
    <span class="code-keyword">return</span> <span class="code-string">f"مرحباً </span><span class="code-keyword">{name}</span><span class="code-string">!"</span>

<span class="code-keyword">def</span> <span class="code-function">shout</span>(func, name):
    <span class="code-comment"># نستقبل دالة كمعامل وننفذها</span>
    message = func(name)
    <span class="code-keyword">return</span> message.upper()

<span class="code-comment"># نمرر دالة greet كمعامل لدالة shout</span>
result = shout(greet, <span class="code-string">"أحمد"</span>)
<span class="code-keyword">print</span>(result)  <span class="code-comment"># الناتج: مرحباً أحمد!</span></code></pre>
                    </div>
                    
                    <h3 id="functions-returning-functions">2. إرجاع دوال من دوال أخرى</h3>
                    <div class="code-block">
                        <pre><code><span class="code-keyword">def</span> <span class="code-function">create_multiplier</span>(factor):
    <span class="code-comment"># نعيد دالة جديدة</span>
    <span class="code-keyword">def</span> <span class="code-function">multiplier</span>(x):
        <span class="code-keyword">return</span> x * factor
    <span class="code-keyword">return</span> multiplier

<span class="code-comment"># إنشاء دوال مضاعفة</span>
double = create_multiplier(<span class="code-number">2</span>)
triple = create_multiplier(<span class="code-number">3</span>)

<span class="code-keyword">print</span>(double(<span class="code-number">5</span>))  <span class="code-comment"># الناتج: 10</span>
<span class="code-keyword">print</span>(triple(<span class="code-number">5</span>))  <span class="code-comment"># الناتج: 15</span></code></pre>
                    </div>
                    
                    <h3>3. تخزين الدوال في متغيرات</h3>
                    <div class="code-block">
                        <pre><code><span class="code-keyword">def</span> <span class="code-function">square</span>(x):
    <span class="code-keyword">return</span> x * x

<span class="code-comment"># تخزين الدالة في متغير</span>
my_func = square
<span class="code-keyword">print</span>(my_func(<span class="code-number">4</span>))  <span class="code-comment"># الناتج: 16</span>

<span class="code-comment"># تخزين الدوال في قائمة</span>
operations = [square, <span class="code-keyword">lambda</span> x: x + <span class="code-number">1</span>, <span class="code-keyword">lambda</span> x: x * <span class="code-number">2</span>]
<span class="code-keyword">for</span> op <span class="code-keyword">in</span> operations:
    <span class="code-keyword">print</span>(op(<span class="code-number">3</span>))  <span class="code-comment"># الناتج: 9, 4, 6</span></code></pre>
                    </div>
                </section>
                
                <section id="creating-decorators" class="section">
                    <h2>إنشاء الديكورات</h2>
                    <p>الآن بعد أن فهمنا الدوال من الدرجة الأولى، لننشئ ديكورات حقيقية.</p>
                    
                    <h3>ديكور بسيط</h3>
                    <div class="code-block">
                        <pre><code><span class="code-keyword">def</span> <span class="code-function">my_decorator</span>(func):
    <span class="code-keyword">def</span> <span class="code-function">wrapper</span>():
        <span class="code-keyword">print</span>(<span class="code-string">"قبل تنفيذ الدالة"</span>)
        func()
        <span class="code-keyword">print</span>(<span class="code-string">"بعد تنفيذ الدالة"</span>)
    <span class="code-keyword">return</span> wrapper

<span class="code-keyword">def</span> <span class="code-function">say_hello</span>():
    <span class="code-keyword">print</span>(<span class="code-string">"مرحباً!"</span>)

<span class="code-comment"># التطبيق اليدوي للديكور</span>
decorated_function = my_decorator(say_hello)
decorated_function()</code></pre>
                    </div>
                    
                    <div class="output-block">
                        قبل تنفيذ الدالة<br>
                        مرحباً!<br>
                        بعد تنفيذ الدالة
                    </div>
                    
                    <h3 id="syntax-sugar">السكر النحوي (@) للديكورات</h3>
                    <p>بايثون توفر صيغة مختصرة لتطبيق الديكورات باستخدام الرمز <code>@</code></p>
                    
                    <div class="code-block">
                        <pre><code><span class="code-keyword">def</span> <span class="code-function">my_decorator</span>(func):
    <span class="code-keyword">def</span> <span class="code-function">wrapper</span>():
        <span class="code-keyword">print</span>(<span class="code-string">"قبل تنفيذ الدالة"</span>)
        func()
        <span class="code-keyword">print</span>(<span class="code-string">"بعد تنفيذ الدالة"</span>)
    <span class="code-keyword">return</span> wrapper

<span class="code-comment"># تطبيق الديكور باستخدام @</span>
@my_decorator
<span class="code-keyword">def</span> <span class="code-function">say_hello</span>():
    <span class="code-keyword">print</span>(<span class="code-string">"مرحباً!"</span>)

<span class="code-comment"># الآن say_hello هي الدالة المزخرفة</span>
say_hello()</code></pre>
                    </div>
                    
                    <div class="note">
                        <p><strong>ملاحظة:</strong> <code>@my_decorator</code> تعادل تماماً <code>say_hello = my_decorator(say_hello)</code></p>
                    </div>
                    
                    <h3>ديكورات للدوال ذات المعاملات</h3>
                    <div class="code-block">
                        <pre><code><span class="code-keyword">def</span> <span class="code-function">smart_divide</span>(func):
    <span class="code-keyword">def</span> <span class="code-function">wrapper</span>(a, b):
        <span class="code-keyword">print</span>(<span class="code-string">f"جاري قسمة </span><span class="code-keyword">{a}</span><span class="code-string"> على </span><span class="code-keyword">{b}</span><span class="code-string">"</span>)
        <span class="code-keyword">if</span> b == <span class="code-number">0</span>:
            <span class="code-keyword">print</span>(<span class="code-string">"لا يمكن القسمة على صفر!"</span>)
            <span class="code-keyword">return</span>
        <span class="code-keyword">return</span> func(a, b)
    <span class="code-keyword">return</span> wrapper

@smart_divide
<span class="code-keyword">def</span> <span class="code-function">divide</span>(a, b):
    <span class="code-keyword">return</span> a / b

<span class="code-keyword">print</span>(divide(<span class="code-number">10</span>, <span class="code-number">2</span>))  <span class="code-comment"># يعمل بشكل طبيعي</span>
<span class="code-keyword">print</span>(divide(<span class="code-number">10</span>, <span class="code-number">0</span>))  <span class="code-comment"># يتعامل مع الخطأ</span></code></pre>
                    </div>
                    
                    <div class="output-block">
                        جاري قسمة 10 على 2<br>
                        5.0<br>
                        جاري قسمة 10 على 0<br>
                        لا يمكن القسمة على صفر!<br>
                        None
                    </div>
                    
                    <h3 id="multiple-decorators">ديكورات متعددة</h3>
                    <p>يمكن تطبيق أكثر من ديكور على نفس الدالة:</p>
                    
                    <div class="code-block">
                        <pre><code><span class="code-keyword">def</span> <span class="code-function">decorator1</span>(func):
    <span class="code-keyword">def</span> <span class="code-function">wrapper</span>():
        <span class="code-keyword">print</span>(<span class="code-string">"ديكور 1 - قبل"</span>)
        func()
        <span class="code-keyword">print</span>(<span class="code-string">"ديكور 1 - بعد"</span>)
    <span class="code-keyword">return</span> wrapper

<span class="code-keyword">def</span> <span class="code-function">decorator2</span>(func):
    <span class="code-keyword">def</span> <span class="code-function">wrapper</span>():
        <span class="code-keyword">print</span>(<span class="code-string">"ديكور 2 - قبل"</span>)
        func()
        <span class="code-keyword">print</span>(<span class="code-string">"ديكور 2 - بعد"</span>)
    <span class="code-keyword">return</span> wrapper

@decorator1
@decorator2
<span class="code-keyword">def</span> <span class="code-function">say_hello</span>():
    <span class="code-keyword">print</span>(<span class="code-string">"مرحباً!"</span>)

say_hello()</code></pre>
                    </div>
                    
                    <div class="output-block">
                        ديكور 1 - قبل<br>
                        ديكور 2 - قبل<br>
                        مرحباً!<br>
                        ديكور 2 - بعد<br>
                        ديكور 1 - بعد
                    </div>
                    
                    <div class="note">
                        <p><strong>ملاحظة:</strong> الديكورات تُطبق من الأسفل إلى الأعلى. في المثال أعلاه، <code>@decorator2</code> يُطبق أولاً ثم <code>@decorator1</code>.</p>
                    </div>
                </section>
                
                <section id="practical-examples" class="section">
                    <h2>أمثلة عملية للديكورات</h2>
                    
                    <h3 id="timer-decorator">1. ديكور قياس الوقت</h3>
                    <div class="code-block">
                        <pre><code><span class="code-keyword">import</span> time

<span class="code-keyword">def</span> <span class="code-function">timer</span>(func):
    <span class="code-keyword">def</span> <span class="code-function">wrapper</span>(*args, **kwargs):
        start_time = time.time()
        result = func(*args, **kwargs)
        end_time = time.time()
        <span class="code-keyword">print</span>(<span class="code-string">f"الوقت المستغرق: </span><span class="code-keyword">{end_time - start_time:.4f}</span><span class="code-string"> ثانية"</span>)
        <span class="code-keyword">return</span> result
    <span class="code-keyword">return</span> wrapper

@timer
<span class="code-keyword">def</span> <span class="code-function">slow_function</span>():
    <span class="code-comment"># محاكاة دالة تستغرق وقتاً</span>
    time.sleep(<span class="code-number">2</span>)
    <span class="code-keyword">return</span> <span class="code-string">"تم الانتهاء!"</span>

result = slow_function()
<span class="code-keyword">print</span>(result)</code></pre>
                    </div>
                    
                    <div class="output-block">
                        الوقت المستغرق: 2.0023 ثانية<br>
                        تم الانتهاء!
                    </div>
                    
                    <h3 id="cache-decorator">2. ديكور التخزين المؤقت</h3>
                    <div class="code-block">
                        <pre><code><span class="code-keyword">def</span> <span class="code-function">cache</span>(func):
    cached_results = {}
    
    <span class="code-keyword">def</span> <span class="code-function">wrapper</span>(*args):
        <span class="code-keyword">if</span> args <span class="code-keyword">in</span> cached_results:
            <span class="code-keyword">print</span>(<span class="code-string">f"جلب النتيجة من الذاكرة المؤقتة للقيمة </span><span class="code-keyword">{args}</span><span class="code-string">"</span>)
            <span class="code-keyword">return</span> cached_results[args]
        
        result = func(*args)
        cached_results[args] = result
        <span class="code-keyword">print</span>(<span class="code-string">f"حساب النتيجة وتخزينها للقيمة </span><span class="code-keyword">{args}</span><span class="code-string">"</span>)
        <span class="code-keyword">return</span> result
    
    <span class="code-keyword">return</span> wrapper

@cache
<span class="code-keyword">def</span> <span class="code-function">fibonacci</span>(n):
    <span class="code-keyword">if</span> n <= <span class="code-number">1</span>:
        <span class="code-keyword">return</span> n
    <span class="code-keyword">return</span> fibonacci(n-<span class="code-number">1</span>) + fibonacci(n-<span class="code-number">2</span>)

<span class="code-keyword">print</span>(<span class="code-string">"نتيجة فيبوناتشي للرقم 10:"</span>, fibonacci(<span class="code-number">10</span>))</code></pre>
                    </div>
                    
                    <h3 id="validation-decorator">3. ديكور التحقق من المدخلات</h3>
                    <div class="code-block">
                        <pre><code><span class="code-keyword">def</span> <span class="code-function">validate_positive</span>(func):
    <span class="code-keyword">def</span> <span class="code-function">wrapper</span>(*args, **kwargs):
        <span class="code-comment"># التحقق من أن جميع المعاملات موجبة</span>
        <span class="code-keyword">for</span> arg <span class="code-keyword">in</span> args:
            <span class="code-keyword">if</span> <span class="code-keyword">isinstance</span>(arg, (<span class="code-keyword">int</span>, <span class="code-keyword">float</span>)) <span class="code-keyword">and</span> arg < <span class="code-number">0</span>:
                <span class="code-keyword">raise</span> ValueError(<span class="code-string">"جميع المعاملات يجب أن تكون أعداداً موجبة"</span>)
        
        <span class="code-keyword">for</span> key, value <span class="code-keyword">in</span> kwargs.items():
            <span class="code-keyword">if</span> <span class="code-keyword">isinstance</span>(value, (<span class="code-keyword">int</span>, <span class="code-keyword">float</span>)) <span class="code-keyword">and</span> value < <span class="code-number">0</span>:
                <span class="code-keyword">raise</span> ValueError(<span class="code-string">f"المعامل </span><span class="code-keyword">{key}</span><span class="code-string"> يجب أن يكون موجباً"</span>)
        
        <span class="code-keyword">return</span> func(*args, **kwargs)
    <span class="code-keyword">return</span> wrapper

@validate_positive
<span class="code-keyword">def</span> <span class="code-function">calculate_area</span>(length, width):
    <span class="code-keyword">return</span> length * width

<span class="code-comment"># هذا سيعمل</span>
<span class="code-keyword">print</span>(<span class="code-string">"مساحة المستطيل:"</span>, calculate_area(<span class="code-number">5</span>, <span class="code-number">3</span>))

<span class="code-comment"># هذا سيرمي خطأ</span>
<span class="code-keyword">try</span>:
    calculate_area(-<span class="code-number">5</span>, <span class="code-number">3</span>)
<span class="code-keyword">except</span> ValueError <span class="code-keyword">as</span> e:
    <span class="code-keyword">print</span>(<span class="code-string">"خطأ:"</span>, e)</code></pre>
                    </div>
                    
                    <div class="output-block">
                        مساحة المستطيل: 15<br>
                        خطأ: جميع المعاملات يجب أن تكون أعداداً موجبة
                    </div>
                    
                    <h3>4. ديكور تسجيل الأحداث (Logging)</h3>
                    <div class="code-block">
                        <pre><code><span class="code-keyword">def</span> <span class="code-function">logger</span>(func):
    <span class="code-keyword">def</span> <span class="code-function">wrapper</span>(*args, **kwargs):
        <span class="code-keyword">print</span>(<span class="code-string">f"[LOG] استدعاء الدالة </span><span class="code-keyword">{func.__name__}</span><span class="code-string">"</span>)
        <span class="code-keyword">print</span>(<span class="code-string">f"[LOG] المعاملات: </span><span class="code-keyword">{args}</span><span class="code-string">, </span><span class="code-keyword">{kwargs}</span><span class="code-string">"</span>)
        result = func(*args, **kwargs)
        <span class="code-keyword">print</span>(<span class="code-string">f"[LOG] النتيجة: </span><span class="code-keyword">{result}</span><span class="code-string">"</span>)
        <span class="code-keyword">return</span> result
    <span class="code-keyword">return</span> wrapper

@logger
<span class="code-keyword">def</span> <span class="code-function">add</span>(a, b):
    <span class="code-keyword">return</span> a + b

@logger
<span class="code-keyword">def</span> <span class="code-function">multiply</span>(a, b):
    <span class="code-keyword">return</span> a * b

add(<span class="code-number">5</span>, <span class="code-number">3</span>)
multiply(<span class="code-number">4</span>, <span class="code-number">7</span>)</code></pre>
                    </div>
                    
                    <div class="output-block">
                        [LOG] استدعاء الدالة add<br>
                        [LOG] المعاملات: (5, 3), {}<br>
                        [LOG] النتيجة: 8<br>
                        [LOG] استدعاء الدالة multiply<br>
                        [LOG] المعاملات: (4, 7), {}<br>
                        [LOG] النتيجة: 28
                    </div>
                </section>
                
                <section id="advanced-decorators" class="section">
                    <h2>ديكورات متقدمة</h2>
                    
                    <h3 id="class-decorators">1. ديكورات الكلاسات</h3>
                    <p>يمكن استخدام الديكورات مع الكلاسات أيضاً:</p>
                    
                    <div class="code-block">
                        <pre><code><span class="code-keyword">def</span> <span class="code-function">add_method</span>(cls):
    <span class="code-comment"># إضافة دالة جديدة للكلاس</span>
    <span class="code-keyword">def</span> <span class="code-function">greet</span>(<span class="code-keyword">self</span>):
        <span class="code-keyword">return</span> <span class="code-string">f"مرحباً، أنا </span><span class="code-keyword">{self.name}</span><span class="code-string">!"</span>
    
    cls.greet = greet
    <span class="code-keyword">return</span> cls

@add_method
<span class="code-keyword">class</span> <span class="code-class">Person</span>:
    <span class="code-keyword">def</span> <span class="code-function">__init__</span>(<span class="code-keyword">self</span>, name):
        <span class="code-keyword">self</span>.name = name

<span class="code-comment"># الآن كل كائن من Person لديه دالة greet</span>
person = Person(<span class="code-string">"أحمد"</span>)
<span class="code-keyword">print</span>(person.greet())</code></pre>
                    </div>
                    
                    <div class="output-block">
                        مرحباً، أنا أحمد!
                    </div>
                    
                    <h3>2. ديكورات الـSingleton</h3>
                    <div class="code-block">
                        <pre><code><span class="code-keyword">def</span> <span class="code-function">singleton</span>(cls):
    instances = {}
    
    <span class="code-keyword">def</span> <span class="code-function">get_instance</span>(*args, **kwargs):
        <span class="code-keyword">if</span> cls <span class="code-keyword">not</span> <span class="code-keyword">in</span> instances:
            instances[cls] = cls(*args, **kwargs)
        <span class="code-keyword">return</span> instances[cls]
    
    <span class="code-keyword">return</span> get_instance

@singleton
<span class="code-keyword">class</span> <span class="code-class">Database</span>:
    <span class="code-keyword">def</span> <span class="code-function">__init__</span>(<span class="code-keyword">self</span>):
        <span class="code-keyword">print</span>(<span class="code-string">"تهيئة اتصال قاعدة البيانات"</span>)

<span class="code-comment"># سيتم إنشاء كائن واحد فقط</span>
db1 = Database()
db2 = Database()

<span class="code-keyword">print</span>(<span class="code-string">"هل db1 و db2 نفس الكائن؟"</span>, db1 <span class="code-keyword">is</span> db2)</code></pre>
                    </div>
                    
                    <div class="output-block">
                        تهيئة اتصال قاعدة البيانات<br>
                        هل db1 و db2 نفس الكائن؟ True
                    </div>
                    
                    <h3 id="decorators-with-parameters">3. ديكورات بمعاملات</h3>
                    <p>يمكن إنشاء ديكورات تقبل معاملات خاصة بها:</p>
                    
                    <div class="code-block">
                        <pre><code><span class="code-keyword">def</span> <span class="code-function">repeat</span>(num_times):
    <span class="code-comment"># هذا الديكور يقبل معاملات</span>
    <span class="code-keyword">def</span> <span class="code-function">decorator_repeat</span>(func):
        <span class="code-keyword">def</span> <span class="code-function">wrapper</span>(*args, **kwargs):
            <span class="code-keyword">for</span> _ <span class="code-keyword">in</span> <span class="code-keyword">range</span>(num_times):
                result = func(*args, **kwargs)
            <span class="code-keyword">return</span> result
        <span class="code-keyword">return</span> wrapper
    <span class="code-keyword">return</span> decorator_repeat

@repeat(num_times=<span class="code-number">3</span>)
<span class="code-keyword">def</span> <span class="code-function">greet</span>(name):
    <span class="code-keyword">print</span>(<span class="code-string">f"مرحباً </span><span class="code-keyword">{name}</span><span class="code-string">!"</span>)

greet(<span class="code-string">"علي"</span>)</code></pre>
                    </div>
                    
                    <div class="output-block">
                        مرحباً علي!<br>
                        مرحباً علي!<br>
                        مرحباً علي!
                    </div>
                    
                    <h3>4. ديكورات مرنة بمعاملات اختيارية</h3>
                    <div class="code-block">
                        <pre><code><span class="code-keyword">def</span> <span class="code-function">flexible_decorator</span>(func=<span class="code-keyword">None</span>, *, prefix=<span class="code-string">"INFO"</span>):
    <span class="code-comment"># ديكور مرن يمكن استخدامه مع أو بدون معاملات</span>
    <span class="code-keyword">def</span> <span class="code-function">decorator</span>(actual_func):
        <span class="code-keyword">def</span> <span class="code-function">wrapper</span>(*args, **kwargs):
            <span class="code-keyword">print</span>(<span class="code-string">f"[</span><span class="code-keyword">{prefix}</span><span class="code-string">] استدعاء </span><span class="code-keyword">{actual_func.__name__}</span><span class="code-string">"</span>)
            <span class="code-keyword">return</span> actual_func(*args, **kwargs)
        <span class="code-keyword">return</span> wrapper
    
    <span class="code-keyword">if</span> func <span class="code-keyword">is</span> <span class="code-keyword">None</span>:
        <span class="code-keyword">return</span> decorator
    <span class="code-keyword">else</span>:
        <span class="code-keyword">return</span> decorator(func)

<span class="code-comment"># استخدام بدون معاملات</span>
@flexible_decorator
<span class="code-keyword">def</span> <span class="code-function">function1</span>():
    <span class="code-keyword">print</span>(<span class="code-string">"الدالة 1"</span>)

<span class="code-comment"># استخدام مع معاملات</span>
@flexible_decorator(prefix=<span class="code-string">"DEBUG"</span>)
<span class="code-keyword">def</span> <span class="code-function">function2</span>():
    <span class="code-keyword">print</span>(<span class="code-string">"الدالة 2"</span>)

function1()
function2()</code></pre>
                    </div>
                    
                    <div class="output-block">
                        [INFO] استدعاء function1<br>
                        الدالة 1<br>
                        [DEBUG] استدعاء function2<br>
                        الدالة 2
                    </div>
                    
                    <h3 id="builtin-decorators">5. الديكورات المدمجة في بايثون</h3>
                    <p>بايثون توفر بعض الديكورات المدمجة المفيدة:</p>
                    
                    <div class="code-block">
                        <pre><code><span class="code-keyword">class</span> <span class="code-class">MathOperations</span>:
    <span class="code-keyword">def</span> <span class="code-function">__init__</span>(<span class="code-keyword">self</span>):
        <span class="code-keyword">self</span>._value = <span class="code-number">0</span>
    
    @property
    <span class="code-keyword">def</span> <span class="code-function">value</span>(<span class="code-keyword">self</span>):
        <span class="code-comment"># تحويل الدالة إلى خاصية للقراءة فقط</span>
        <span class="code-keyword">return</span> <span class="code-keyword">self</span>._value
    
    @value.setter
    <span class="code-keyword">def</span> <span class="code-function">value</span>(<span class="code-keyword">self</span>, new_value):
        <span class="code-comment"># setter للخاصية</span>
        <span class="code-keyword">if</span> new_value < <span class="code-number">0</span>:
            <span class="code-keyword">raise</span> ValueError(<span class="code-string">"القيمة لا يمكن أن تكون سالبة"</span>)
        <span class="code-keyword">self</span>._value = new_value
    
    @classmethod
    <span class="code-keyword">def</span> <span class="code-function">from_string</span>(cls, string_value):
        <span class="code-comment"># دالة كلاس - تُستدعى على الكلاس وليس الكائن</span>
        <span class="code-keyword">return</span> cls(<span class="code-keyword">int</span>(string_value))
    
    @staticmethod
    <span class="code-keyword">def</span> <span class="code-function">add</span>(a, b):
        <span class="code-comment"># دالة ثابتة - لا تحتاج إلى self أو cls</span>
        <span class="code-keyword">return</span> a + b

<span class="code-comment"># استخدام الخاصيات</span>
math_ops = MathOperations()
math_ops.value = <span class="code-number">10</span>
<span class="code-keyword">print</span>(<span class="code-string">"القيمة:"</span>, math_ops.value)

<span class="code-comment"># استخدام classmethod</span>
new_math = MathOperations.from_string(<span class="code-string">"25"</span>)
<span class="code-keyword">print</span>(<span class="code-string">"القيمة من نص:"</span>, new_math.value)

<span class="code-comment"># استخدام staticmethod</span>
<span class="code-keyword">print</span>(<span class="code-string">"الجمع:"</span>, MathOperations.add(<span class="code-number">5</span>, <span class="code-number">3</span>))</code></pre>
                    </div>
                    
                    <div class="output-block">
                        القيمة: 10<br>
                        القيمة من نص: 25<br>
                        الجمع: 8
                    </div>
                </section>
                
                <section id="quiz" class="section">
                    <h2>اختبار المعلومات</h2>
                    
                    <div class="quiz">
                        <div class="quiz-question">1. ما هي الديكورات في بايثون؟</div>
                        <ul class="quiz-options">
                            <li><label><input type="radio" name="q1"> دوال لتزيين النصوص</label></li>
                            <li><label><input type="radio" name="q1"> دوال تأخذ دوالاً كمعاملات وتعيد دوالاً</label></li>
                            <li><label><input type="radio" name="q1"> كائنات خاصة بالتنسيق</label></li>
                            <li><label><input type="radio" name="q1"> مكتبات للرسومات</label></li>
                        </ul>
                    </div>
                    
                    <div class="quiz">
                        <div class="quiz-question">2. ماذا يطبع الكود التالي؟</div>
                        <div class="code-block">
                            <pre><code><span class="code-keyword">def</span> <span class="code-function">decorator</span>(func):
    <span class="code-keyword">def</span> <span class="code-function">wrapper</span>():
        <span class="code-keyword">print</span>(<span class="code-string">"START"</span>)
        func()
        <span class="code-keyword">print</span>(<span class="code-string">"END"</span>)
    <span class="code-keyword">return</span> wrapper

@decorator
<span class="code-keyword">def</span> <span class="code-function">hello</span>():
    <span class="code-keyword">print</span>(<span class="code-string">"HELLO"</span>)

hello()</code></pre>
                        </div>
                        <ul class="quiz-options">
                            <li><label><input type="radio" name="q2"> START HELLO END</label></li>
                            <li><label><input type="radio" name="q2"> HELLO START END</label></li>
                            <li><label><input type="radio" name="q2"> START END HELLO</label></li>
                            <li><label><input type="radio" name="q2"> HELLO فقط</label></li>
                        </ul>
                    </div>
                    
                    <div class="quiz">
                        <div class="quiz-question">3. أي من الديكورات التالية مدمجة في بايثون؟</div>
                        <ul class="quiz-options">
                            <li><label><input type="radio" name="q3"> @timer</label></li>
                            <li><label><input type="radio" name="q3"> @cache</label></li>
                            <li><label><input type="radio" name="q3"> @property</label></li>
                            <li><label><input type="radio" name="q3"> @validate</label></li>
                        </ul>
                    </div>
                    
                    <button class="btn" onclick="checkAnswers()">تحقق من الإجابات</button>
                </section>
            </main>
        </div>
    </div>
    
    <footer>
        <div class="container">
            <p>الديكورات (Decorators) في بايثون - دليل شامل &copy; 2023</p>
            <p>تم تصميم هذه الصفحة لتكون موردًا تعليميًا شاملاً لفهم وتطبيق الديكورات في بايثون</p>
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
                q1: 1, // الإجابة الثانية
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