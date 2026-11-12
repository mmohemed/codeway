<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>البرمجة غير المتزامنة في Python - دليل شامل</title>
    <style>
        :root {
            --primary-color: #2c3e50;
            --secondary-color: #3498db;
            --accent-color: #e74c3c;
            --light-color: #ecf0f1;
            --dark-color: #2c3e50;
            --success-color: #2ecc71;
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
            width: 90%;
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
        }
        
        header {
            background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
            color: white;
            padding: 2rem 0;
            text-align: center;
            border-radius: 0 0 20px 20px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
        
        header h1 {
            font-size: 2.5rem;
            margin-bottom: 1rem;
        }
        
        header p {
            font-size: 1.2rem;
            max-width: 800px;
            margin: 0 auto;
        }
        
        nav {
            background-color: white;
            padding: 1rem 0;
            position: sticky;
            top: 0;
            z-index: 100;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
        
        nav ul {
            display: flex;
            justify-content: center;
            list-style: none;
            flex-wrap: wrap;
        }
        
        nav li {
            margin: 0 15px;
        }
        
        nav a {
            text-decoration: none;
            color: var(--dark-color);
            font-weight: 600;
            padding: 5px 10px;
            border-radius: 5px;
            transition: all 0.3s ease;
        }
        
        nav a:hover {
            background-color: var(--secondary-color);
            color: white;
        }
        
        .main-content {
            display: grid;
            grid-template-columns: 1fr 300px;
            gap: 30px;
            margin: 30px 0;
        }
        
        .content-section {
            background-color: white;
            border-radius: 10px;
            padding: 25px;
            margin-bottom: 30px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
            transition: transform 0.3s ease;
        }
        
        .content-section:hover {
            transform: translateY(-5px);
        }
        
        .content-section h2 {
            color: var(--primary-color);
            border-bottom: 2px solid var(--secondary-color);
            padding-bottom: 10px;
            margin-bottom: 20px;
            font-size: 1.8rem;
        }
        
        .content-section h3 {
            color: var(--secondary-color);
            margin: 20px 0 10px;
        }
        
        .code-block {
            background-color: #2d2d2d;
            color: #f8f8f2;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            overflow-x: auto;
            font-family: 'Courier New', monospace;
            direction: ltr;
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
        
        .sidebar {
            background-color: white;
            border-radius: 10px;
            padding: 20px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
            height: fit-content;
            position: sticky;
            top: 80px;
        }
        
        .sidebar h3 {
            color: var(--primary-color);
            margin-bottom: 15px;
            padding-bottom: 10px;
            border-bottom: 1px solid #eee;
        }
        
        .sidebar ul {
            list-style: none;
        }
        
        .sidebar li {
            margin-bottom: 10px;
        }
        
        .sidebar a {
            text-decoration: none;
            color: var(--dark-color);
            display: block;
            padding: 8px 10px;
            border-radius: 5px;
            transition: all 0.3s ease;
        }
        
        .sidebar a:hover {
            background-color: var(--light-color);
            color: var(--secondary-color);
        }
        
        .example-box {
            background-color: var(--light-color);
            border-left: 4px solid var(--secondary-color);
            padding: 15px;
            margin: 15px 0;
            border-radius: 0 5px 5px 0;
        }
        
        .note {
            background-color: #fff9e6;
            border-left: 4px solid #ffcc00;
            padding: 15px;
            margin: 15px 0;
            border-radius: 0 5px 5px 0;
        }
        
        .warning {
            background-color: #ffe6e6;
            border-left: 4px solid var(--accent-color);
            padding: 15px;
            margin: 15px 0;
            border-radius: 0 5px 5px 0;
        }
        
        .comparison-table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
        }
        
        .comparison-table th, .comparison-table td {
            border: 1px solid #ddd;
            padding: 12px;
            text-align: right;
        }
        
        .comparison-table th {
            background-color: var(--secondary-color);
            color: white;
        }
        
        .comparison-table tr:nth-child(even) {
            background-color: #f2f2f2;
        }
        
        footer {
            background-color: var(--primary-color);
            color: white;
            text-align: center;
            padding: 2rem 0;
            margin-top: 50px;
            border-radius: 20px 20px 0 0;
        }
        
        .progress-bar {
            height: 5px;
            background-color: var(--secondary-color);
            width: 0%;
            position: fixed;
            top: 0;
            right: 0;
            z-index: 1000;
            transition: width 0.3s ease;
        }
        
        @media (max-width: 768px) {
            .main-content {
                grid-template-columns: 1fr;
            }
            
            .sidebar {
                position: static;
            }
            
            nav ul {
                flex-direction: column;
                align-items: center;
            }
            
            nav li {
                margin: 5px 0;
            }
        }
    </style>
</head>
<body>
    <div class="progress-bar" id="progressBar"></div>
    
    <header>
        <div class="container">
            <h1>البرمجة غير المتزامنة في Python</h1>
            <p>دليل شامل لفهم وتطبيق البرمجة غير المتزامنة باستخدام Python - من الأساسيات إلى المستوى المتقدم</p>
        </div>
    </header>
    
    <nav>
        <div class="container">
            <ul>
                <li><a href="#intro">مقدمة</a></li>
                <li><a href="#concepts">المفاهيم الأساسية</a></li>
                <li><a href="#async-await">Async/Await</a></li>
                <li><a href="#tasks">المهام والتشغيل</a></li>
                <li><a href="#examples">أمثلة عملية</a></li>
                <li><a href="#best-practices">أفضل الممارسات</a></li>
            </ul>
        </div>
    </nav>
    
    <div class="container">
        <div class="main-content">
            <div class="content">
                <section id="intro" class="content-section">
                    <h2>مقدمة في البرمجة غير المتزامنة</h2>
                    <p>البرمجة غير المتزامنة (Asynchronous Programming) هي نموذج برمجي يسمح بتنفيذ مهام متعددة دون الحاجة إلى انتظار انتهاء كل مهمة قبل بدء التالية. هذا النموذج يحسن أداء التطبيقات خاصة تلك التي تتعامل مع عمليات الإدخال/الإخراج (I/O) مثل طلبات الشبكة، والوصول إلى قواعد البيانات، والملفات.</p>
                    
                    <h3>لماذا نستخدم البرمجة غير المتزامنة؟</h3>
                    <p>في البرمجة التقليدية المتزامنة، عندما يقوم البرنامج بإجراء عملية I/O (مثل طلب شبكة)، فإنه ينتظر حتى تكتمل هذه العملية قبل المتابعة. هذا يهدر وقت المعالج حيث يمكن استخدامه في تنفيذ مهام أخرى.</p>
                    
                    <p>مع البرمجة غير المتزامنة، يمكن للبرنامج بدء عملية I/O ثم الانتقال إلى تنفيذ مهام أخرى أثناء انتظار اكتمال العملية الأولى. عندما تكتمل عملية I/O، يعود البرنامج لمعالجة النتيجة.</p>
                    
                    <div class="example-box">
                        <h4>مثال توضيحي:</h4>
                        <p>تخيل أنك في مطعم:</p>
                        <ul>
                            <li><strong>الطريقة المتزامنة:</strong> تطلب طبقًا وتنتظر حتى يصبح جاهزًا قبل أن تطلب الطبق التالي.</li>
                            <li><strong>الطريقة غير المتزامنة:</strong> تطلب جميع الأطباق مرة واحدة، ثم تنتظر حتى تصبح جاهزة، مع إمكانية القيام بأمور أخرى أثناء الانتظار.</li>
                        </ul>
                    </div>
                </section>
                
                <section id="concepts" class="content-section">
                    <h2>المفاهيم الأساسية</h2>
                    
                    <h3>الفرق بين المتوازي وغير المتزامن</h3>
                    <table class="comparison-table">
                        <tr>
                            <th>النموذج</th>
                            <th>التعريف</th>
                            <th>مثال</th>
                        </tr>
                        <tr>
                            <td>متزامن (Synchronous)</td>
                            <td>تنفيذ المهام واحدة تلو الأخرى، حيث تنتظر كل مهمة اكتمال التي قبلها</td>
                            <td>انتظار في طابور</td>
                        </tr>
                        <tr>
                            <td>غير متزامن (Asynchronous)</td>
                            <td>بدء مهام متعددة دون انتظار اكتمالها، ثم معالجة النتائج عند اكتمالها</td>
                            <td>طلب طعام من عدة مطاعم في نفس الوقت</td>
                        </tr>
                        <tr>
                            <td>متوازي (Parallel)</td>
                            <td>تنفيذ مهام متعددة في نفس الوقت باستخدام معالجات متعددة</td>
                            <td>طهي عدة أطباق في نفس الوقت على مواقد مختلفة</td>
                        </tr>
                    </table>
                    
                    <h3>مكونات البرمجة غير المتزامنة في Python</h3>
                    <ul>
                        <li><strong>Coroutine (الروتين التشاركي):</strong> دالة يمكن إيقافها واستئنافها، تشبه الدوال العادية لكن مع إمكانية التوقف عند نقطة معينة والعودة لاحقًا.</li>
                        <li><strong>Event Loop (حلقة الأحداث):</strong> المسؤول عن تنفيذ وتنسيق Coroutines المختلفة.</li>
                        <li><strong>Awaitable:</strong> أي كائن يمكن استخدامه مع تعبير <code>await</code>، مثل Coroutine أو Task أو Future.</li>
                        <li><strong>Task (المهمة):</strong> غلاف حول Coroutine يتم إدارته بواسطة Event Loop.</li>
                        <li><strong>Future:</strong> كائن يمثل نتيجة عملية غير متزامنة قد لا تكون متاحة بعد.</li>
                    </ul>
                </section>
                
                <section id="async-await" class="content-section">
                    <h2>الكلمات المفتاحية Async و Await</h2>
                    
                    <h3>تعريف دالة غير متزامنة</h3>
                    <p>لتعريف دالة غير متزامنة، نستخدم الكلمة المفتاحية <code>async</code> قبل <code>def</code>:</p>
                    
                    <div class="code-block">
                        <span class="code-keyword">async</span> <span class="code-keyword">def</span> <span class="code-function">my_async_function</span>():<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">return</span> <span class="code-string">"Hello, Async World!"</span>
                    </div>
                    
                    <p>الدالة التي تبدأ بـ <code>async def</code> تسمى Coroutine، وعند استدعائها تعيد كائن Coroutine ولا يتم تنفيذها مباشرة.</p>
                    
                    <h3>استخدام Await</h3>
                    <p>لانتظار اكتمال Coroutine آخر، نستخدم الكلمة المفتاحية <code>await</code>:</p>
                    
                    <div class="code-block">
                        <span class="code-keyword">async</span> <span class="code-keyword">def</span> <span class="code-function">main</span>():<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;result = <span class="code-keyword">await</span> my_async_function()<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">print</span>(result)
                    </div>
                    
                    <div class="note">
                        <strong>ملاحظة:</strong> يمكن استخدام <code>await</code> فقط داخل دالة غير متزامنة (async function).
                    </div>
                    
                    <h3>تنفيذ Coroutine</h3>
                    <p>لتشغيل دالة غير متزامنة، يجب استخدام Event Loop. أسهل طريقة هي استخدام <code>asyncio.run()</code>:</p>
                    
                    <div class="code-block">
                        <span class="code-keyword">import</span> asyncio<br><br>
                        
                        <span class="code-keyword">async</span> <span class="code-keyword">def</span> <span class="code-function">my_async_function</span>():<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">return</span> <span class="code-string">"Hello, Async World!"</span><br><br>
                        
                        <span class="code-keyword">async</span> <span class="code-keyword">def</span> <span class="code-function">main</span>():<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;result = <span class="code-keyword">await</span> my_async_function()<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">print</span>(result)<br><br>
                        
                        <span class="code-comment"># تشغيل الدالة الرئيسية</span><br>
                        asyncio.run(main())
                    </div>
                </section>
                
                <section id="tasks" class="content-section">
                    <h2>المهام والتشغيل المتزامن</h2>
                    
                    <h3>إنشاء وتشغيل المهام</h3>
                    <p>لتنفيذ عدة Coroutines بشكل متزامن (في نفس الوقت)، نستخدم Tasks:</p>
                    
                    <div class="code-block">
                        <span class="code-keyword">import</span> asyncio<br>
                        <span class="code-keyword">import</span> time<br><br>
                        
                        <span class="code-keyword">async</span> <span class="code-keyword">def</span> <span class="code-function">say_after</span>(delay, message):<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">await</span> asyncio.sleep(delay)<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">print</span>(message)<br><br>
                        
                        <span class="code-keyword">async</span> <span class="code-keyword">def</span> <span class="code-function">main</span>():<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-comment"># الطريقة المتسلسلة</span><br>
                        &nbsp;&nbsp;&nbsp;&nbsp;start_time = time.time()<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">await</span> say_after(1, <span class="code-string">'مرحبًا'</span>)<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">await</span> say_after(2, <span class="code-string">'بالعالم'</span>)<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">print</span>(<span class="code-string">f"الوقت المستغرق: {time.time() - start_time:.2f} ثانية"</span>)<br><br>
                        
                        &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-comment"># الطريقة المتزامنة باستخدام Tasks</span><br>
                        &nbsp;&nbsp;&nbsp;&nbsp;start_time = time.time()<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;task1 = asyncio.create_task(say_after(1, <span class="code-string">'مرحبًا'</span>))<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;task2 = asyncio.create_task(say_after(2, <span class="code-string">'بالعالم'</span>))<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">await</span> task1<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">await</span> task2<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">print</span>(<span class="code-string">f"الوقت المستغرق: {time.time() - start_time:.2f} ثانية"</span>)<br><br>
                        
                        asyncio.run(main())
                    </div>
                    
                    <p>في المثال أعلاه، الطريقة الأولى تستغرق 3 ثوانٍ (1+2)، بينما الطريقة الثانية تستغرق 2 ثانية فقط (أطول وقت انتظار).</p>
                    
                    <h3>جمع نتائج متعددة</h3>
                    <p>يمكن استخدام <code>asyncio.gather()</code> لتنفيذ عدة Coroutines بشكل متزامن وجمع نتائجها:</p>
                    
                    <div class="code-block">
                        <span class="code-keyword">import</span> asyncio<br><br>
                        
                        <span class="code-keyword">async</span> <span class="code-keyword">def</span> <span class="code-function">fetch_data</span>(task_name, delay):<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">print</span>(<span class="code-string">f"بدء {task_name}"</span>)<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">await</span> asyncio.sleep(delay)<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">print</span>(<span class="code-string">f"اكتمال {task_name}"</span>)<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">return</span> <span class="code-string">f"نتيجة {task_name}"</span><br><br>
                        
                        <span class="code-keyword">async</span> <span class="code-keyword">def</span> <span class="code-function">main</span>():<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;results = <span class="code-keyword">await</span> asyncio.gather(<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;fetch_data(<span class="code-string">"المهمة 1"</span>, 2),<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;fetch_data(<span class="code-string">"المهمة 2"</span>, 1),<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;fetch_data(<span class="code-string">"المهمة 3"</span>, 3)<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;)<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">print</span>(<span class="code-string">f"النتائج: {results}"</span>)<br><br>
                        
                        asyncio.run(main())
                    </div>
                </section>
                
                <section id="examples" class="content-section">
                    <h2>أمثلة عملية</h2>
                    
                    <h3>مثال 1: جلب بيانات من عدة URLs</h3>
                    <div class="code-block">
                        <span class="code-keyword">import</span> asyncio<br>
                        <span class="code-keyword">import</span> aiohttp<br>
                        <span class="code-keyword">import</span> time<br><br>
                        
                        <span class="code-keyword">async</span> <span class="code-keyword">def</span> <span class="code-function">fetch_url</span>(session, url):<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">async with</span> session.get(url) <span class="code-keyword">as</span> response:<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">return</span> <span class="code-keyword">await</span> response.text()<br><br>
                        
                        <span class="code-keyword">async</span> <span class="code-keyword">def</span> <span class="code-function">main</span>():<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;urls = [<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-string">'https://httpbin.org/delay/1'</span>,<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-string">'https://httpbin.org/delay/2'</span>,<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-string">'https://httpbin.org/delay/3'</span><br>
                        &nbsp;&nbsp;&nbsp;&nbsp;]<br><br>
                        
                        &nbsp;&nbsp;&nbsp;&nbsp;start_time = time.time()<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">async with</span> aiohttp.ClientSession() <span class="code-keyword">as</span> session:<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;tasks = [fetch_url(session, url) <span class="code-keyword">for</span> url <span class="code-keyword">in</span> urls]<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;results = <span class="code-keyword">await</span> asyncio.gather(*tasks)<br><br>
                        
                        &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">print</span>(<span class="code-string">f"تم جلب {len(results)} صفحات في {time.time() - start_time:.2f} ثانية"</span>)<br><br>
                        
                        asyncio.run(main())
                    </div>
                    
                    <h3>مثال 2: قراءة وكتابة ملفات بشكل غير متزامن</h3>
                    <div class="code-block">
                        <span class="code-keyword">import</span> asyncio<br>
                        <span class="code-keyword">import</span> aiofiles<br><br>
                        
                        <span class="code-keyword">async</span> <span class="code-keyword">def</span> <span class="code-function">write_file</span>(filename, content):<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">async with</span> aiofiles.<span class="code-keyword">open</span>(filename, <span class="code-string">'w'</span>) <span class="code-keyword">as</span> f:<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">await</span> f.write(content)<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">print</span>(<span class="code-string">f"تم كتابة {filename}"</span>)<br><br>
                        
                        <span class="code-keyword">async</span> <span class="code-keyword">def</span> <span class="code-function">read_file</span>(filename):<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">async with</span> aiofiles.<span class="code-keyword">open</span>(filename, <span class="code-string">'r'</span>) <span class="code-keyword">as</span> f:<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;content = <span class="code-keyword">await</span> f.read()<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">print</span>(<span class="code-string">f"محتويات {filename}: {content[:50]}..."</span>)<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">return</span> content<br><br>
                        
                        <span class="code-keyword">async</span> <span class="code-keyword">def</span> <span class="code-function">main</span>():<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-comment"># كتابة عدة ملفات بشكل متزامن</span><br>
                        &nbsp;&nbsp;&nbsp;&nbsp;tasks = [<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;write_file(<span class="code-string">"file1.txt"</span>, <span class="code-string">"محتويات الملف الأول"</span>),<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;write_file(<span class="code-string">"file2.txt"</span>, <span class="code-string">"محتويات الملف الثاني"</span>),<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;write_file(<span class="code-string">"file3.txt"</span>, <span class="code-string">"محتويات الملف الثالث"</span>)<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;]<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">await</span> asyncio.gather(*tasks)<br><br>
                        
                        &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-comment"># قراءة الملفات بشكل متزامن</span><br>
                        &nbsp;&nbsp;&nbsp;&nbsp;read_tasks = [<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;read_file(<span class="code-string">"file1.txt"</span>),<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;read_file(<span class="code-string">"file2.txt"</span>),<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;read_file(<span class="code-string">"file3.txt"</span>)<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;]<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">await</span> asyncio.gather(*read_tasks)<br><br>
                        
                        asyncio.run(main())
                    </div>
                </section>
                
                <section id="best-practices" class="content-section">
                    <h2>أفضل الممارسات والأخطاء الشائعة</h2>
                    
                    <h3>أفضل الممارسات</h3>
                    <ul>
                        <li>استخدم <code>asyncio.run()</code> لتشغيل الدالة الرئيسية بدلاً من إدارة Event Loop يدويًا.</li>
                        <li>استخدم <code>asyncio.create_task()</code> لإنشاء مهام عندما تريد تشغيلها بشكل متزامن.</li>
                        <li>استخدم <code>asyncio.gather()</code> عندما تريد تشغيل عدة Coroutines وجمع نتائجها.</li>
                        <li>استخدم مكتبات غير متزامنة مثل <code>aiohttp</code> بدلاً من <code>requests</code> لطلبات HTTP.</li>
                        <li>استخدم <code>async with</code> للموارد التي تحتاج إلى فتح وإغلاق.</li>
                    </ul>
                    
                    <h3>الأخطاء الشائعة</h3>
                    <div class="warning">
                        <strong>تحذير:</strong> لا تستدع دالة غير متزامنة بدون <code>await</code> - هذا سينشئ كائن Coroutine لكنه لن ينفذه.
                    </div>
                    
                    <div class="code-block">
                        <span class="code-comment"># خطأ - لن ينفذ</span><br>
                        <span class="code-keyword">async</span> <span class="code-keyword">def</span> <span class="code-function">my_function</span>():<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">print</span>(<span class="code-string">"Hello"</span>)<br><br>
                        
                        my_function()  <span class="code-comment"># لن يطبع anything</span><br><br>
                        
                        <span class="code-comment"># الصحيح</span><br>
                        <span class="code-keyword">await</span> my_function()  <span class="code-comment"># داخل دالة async أخرى</span><br>
                        <span class="code-comment"># أو</span><br>
                        asyncio.run(my_function())
                    </div>
                    
                    <div class="warning">
                        <strong>تحذير:</strong> لا تستخدم عمليات حجب (blocking) داخل كود غير متزامن - هذا سيوقف Event Loop بالكامل.
                    </div>
                    
                    <div class="code-block">
                        <span class="code-comment"># خطأ - يستخدم time.sleep الحابطة</span><br>
                        <span class="code-keyword">async</span> <span class="code-keyword">def</span> <span class="code-function">bad_example</span>():<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">print</span>(<span class="code-string">"بدء"</span>)<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;time.sleep(5)  <span class="code-comment"># يحجب Event Loop</span><br>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">print</span>(<span class="code-string">"نهاية"</span>)<br><br>
                        
                        <span class="code-comment"># الصحيح - استخدم asyncio.sleep غير الحابطة</span><br>
                        <span class="code-keyword">async</span> <span class="code-keyword">def</span> <span class="code-function">good_example</span>():<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">print</span>(<span class="code-string">"بدء"</span>)<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">await</span> asyncio.sleep(5)  <span class="code-comment"># لا يحجب</span><br>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">print</span>(<span class="code-string">"نهاية"</span>)
                    </div>
                    
                    <h3>متى لا نستخدم البرمجة غير المتزامنة؟</h3>
                    <ul>
                        <li>عندما تكون المهام معتمدة على المعالج (CPU-bound) وليست معتمدة على I/O.</li>
                        <li>عندما يكون الكود بسيطًا ولا يحتاج إلى تحسين الأداء.</li>
                        <li>عند العمل مع مكتبات لا تدعم البرمجة غير المتزامنة.</li>
                    </ul>
                </section>
            </div>
            
            <aside class="sidebar">
                <h3>محتويات الدليل</h3>
                <ul>
                    <li><a href="#intro">مقدمة في البرمجة غير المتزامنة</a></li>
                    <li><a href="#concepts">المفاهيم الأساسية</a></li>
                    <li><a href="#async-await">الكلمات المفتاحية Async و Await</a></li>
                    <li><a href="#tasks">المهام والتشغيل المتزامن</a></li>
                    <li><a href="#examples">أمثلة عملية</a>
                        <ul>
                            <li><a href="#examples">جلب بيانات من عدة URLs</a></li>
                            <li><a href="#examples">قراءة وكتابة ملفات</a></li>
                        </ul>
                    </li>
                    <li><a href="#best-practices">أفضل الممارسات</a></li>
                </ul>
                
                <h3>مكتبات مفيدة</h3>
                <ul>
                    <li><a href="https://docs.aiohttp.org/" target="_blank">aiohttp</a> - للطلبات HTTP غير المتزامنة</li>
                    <li><a href="https://github.com/Tinche/aiofiles" target="_blank">aiofiles</a> - للتعامل مع الملفات</li>
                    <li><a href="https://aiomysql.readthedocs.io/" target="_blank">aiomysql</a> - لـ MySQL غير المتزامن</li>
                    <li><a href="https://magicstack.github.io/asyncpg/" target="_blank">asyncpg</a> - لـ PostgreSQL غير المتزامن</li>
                </ul>
                
                <h3>موارد إضافية</h3>
                <ul>
                    <li><a href="https://docs.python.org/3/library/asyncio.html" target="_blank">الوثائق الرسمية</a></li>
                    <li><a href="https://realpython.com/async-io-python/" target="_blank">Real Python Tutorial</a></li>
                    <li><a href="https://www.youtube.com/watch?v=t5Bo1Je9EmE" target="_blank">فيديو تعليمي</a></li>
                </ul>
            </aside>
        </div>
    </div>
    
    <footer>
        <div class="container">
            <p>دليل البرمجة غير المتزامنة في Python &copy; 2023</p>
            <p>تم تصميم هذه الصفحة لتقديم شرح شامل ومفصل عن البرمجة غير المتزامنة في Python</p>
        </div>
    </footer>

    <script>
        // شريط التقدم
        window.onscroll = function() {updateProgressBar()};
        
        function updateProgressBar() {
            var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            var scrolled = (winScroll / height) * 100;
            document.getElementById("progressBar").style.width = scrolled + "%";
        }
        
        // تنعيم التمرير للروابط الداخلية
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });
    </script>
</body>
</html>