<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>مقدمة في الـ Exceptions في Python</title>
    <style>
        :root {
            --primary: #2c3e50;
            --secondary: #3498db;
            --accent: #e74c3c;
            --light: #ecf0f1;
            --dark: #2c3e50;
            --success: #2ecc71;
            --warning: #f39c12;
            --danger: #e74c3c;
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
            padding: 20px;
        }
        
        header {
            background: linear-gradient(135deg, var(--primary), var(--secondary));
            color: white;
            padding: 2rem 0;
            text-align: center;
            border-radius: 0 0 20px 20px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            margin-bottom: 2rem;
        }
        
        h1 {
            font-size: 2.5rem;
            margin-bottom: 1rem;
        }
        
        .subtitle {
            font-size: 1.2rem;
            opacity: 0.9;
            max-width: 800px;
            margin: 0 auto;
        }
        
        .nav-tabs {
            display: flex;
            background: white;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            margin-bottom: 2rem;
        }
        
        .tab {
            flex: 1;
            padding: 1rem;
            text-align: center;
            cursor: pointer;
            transition: all 0.3s ease;
            font-weight: 600;
        }
        
        .tab:hover {
            background-color: var(--light);
        }
        
        .tab.active {
            background-color: var(--secondary);
            color: white;
        }
        
        .content-section {
            display: none;
            background: white;
            padding: 2rem;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            margin-bottom: 2rem;
        }
        
        .content-section.active {
            display: block;
            animation: fadeIn 0.5s ease;
        }
        
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        h2 {
            color: var(--primary);
            margin-bottom: 1.5rem;
            padding-bottom: 0.5rem;
            border-bottom: 2px solid var(--light);
        }
        
        h3 {
            color: var(--secondary);
            margin: 1.5rem 0 1rem;
        }
        
        p {
            margin-bottom: 1rem;
        }
        
        .code-block {
            background: #2d2d2d;
            color: #f8f8f2;
            padding: 1.5rem;
            border-radius: 8px;
            overflow-x: auto;
            margin: 1.5rem 0;
            font-family: 'Consolas', 'Monaco', monospace;
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
        
        .example-container {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            margin: 2rem 0;
        }
        
        .example-box {
            flex: 1;
            min-width: 300px;
            background: var(--light);
            padding: 1.5rem;
            border-radius: 8px;
            border-left: 4px solid var(--secondary);
        }
        
        .example-title {
            font-weight: bold;
            margin-bottom: 1rem;
            color: var(--primary);
        }
        
        .try-button {
            background: var(--secondary);
            color: white;
            border: none;
            padding: 0.8rem 1.5rem;
            border-radius: 5px;
            cursor: pointer;
            font-weight: 600;
            transition: background 0.3s ease;
            margin-top: 1rem;
        }
        
        .try-button:hover {
            background: #2980b9;
        }
        
        .output {
            background: #2d2d2d;
            color: white;
            padding: 1rem;
            border-radius: 5px;
            margin-top: 1rem;
            min-height: 50px;
            font-family: 'Consolas', 'Monaco', monospace;
            direction: ltr;
        }
        
        .exception-list {
            list-style-type: none;
        }
        
        .exception-item {
            background: white;
            padding: 1rem;
            margin-bottom: 1rem;
            border-radius: 8px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            border-left: 4px solid var(--warning);
        }
        
        .exception-name {
            font-weight: bold;
            color: var(--danger);
        }
        
        footer {
            text-align: center;
            padding: 2rem 0;
            margin-top: 2rem;
            color: var(--dark);
            border-top: 1px solid var(--light);
        }
        
        @media (max-width: 768px) {
            .nav-tabs {
                flex-direction: column;
            }
            
            .example-container {
                flex-direction: column;
            }
        }
    </style>
</head>
<body>
    <header>
        <div class="container">
            <h1>الاستثناءات (Exceptions) في لغة Python</h1>
            <p class="subtitle">تعلم كيفية التعامل مع الأخطاء والاستثناءات في برامج Python لإنشاء تطبيقات أكثر قوة وموثوقية</p>
        </div>
    </header>
    
    <div class="container">
        <div class="nav-tabs">
            <div class="tab active" data-tab="intro">مقدمة</div>
            <div class="tab" data-tab="syntax">بناء الجملة</div>
            <div class="tab" data-tab="types">أنواع الاستثناءات</div>
            <div class="tab" data-tab="examples">أمثلة عملية</div>
            <div class="tab" data-tab="advanced">مفاهيم متقدمة</div>
        </div>
        
        <div id="intro" class="content-section active">
            <h2>ما هي الاستثناءات (Exceptions)؟</h2>
            <p>الاستثناءات (Exceptions) هي أحداث غير طبيعية تحدث أثناء تنفيذ البرنامج وتعطل التدفق الطبيعي للتعليمات. في Python، يتم استخدام آلية الاستثناءات للتعامل مع هذه الأخطاء بطريقة منظمة.</p>
            
            <h3>لماذا نستخدم الاستثناءات؟</h3>
            <p>بدون معالجة الاستثناءات، سيتوقف البرنامج فجأة عند مواجهة خطأ. باستخدام الاستثناءات، يمكننا:</p>
            <ul>
                <li>منع توقف البرنامج المفاجئ</li>
                <li>تقديم رسائل خطأ مفيدة للمستخدم</li>
                <li>تنظيف الموارد (مثل إغلاق الملفات) حتى في حالة حدوث خطأ</li>
                <li>محاولة استعادة البرنامج من الخطأ</li>
            </ul>
            
            <div class="example-container">
                <div class="example-box">
                    <div class="example-title">بدون معالجة الاستثناءات</div>
                    <div class="code-block">
                        <span class="code-keyword">print</span>(<span class="code-string">"بداية البرنامج"</span>)<br>
                        num = <span class="code-keyword">int</span>(<span class="code-string">"abc"</span>)  <span class="code-comment"># سيسبب خطأ ValueError</span><br>
                        <span class="code-keyword">print</span>(<span class="code-string">"نهاية البرنامج"</span>)  <span class="code-comment"># لن يتم تنفيذ هذا السطر</span>
                    </div>
                </div>
                
                <div class="example-box">
                    <div class="example-title">باستخدام معالجة الاستثناءات</div>
                    <div class="code-block">
                        <span class="code-keyword">print</span>(<span class="code-string">"بداية البرنامج"</span>)<br>
                        <span class="code-keyword">try</span>:<br>
                        &nbsp;&nbsp;num = <span class="code-keyword">int</span>(<span class="code-string">"abc"</span>)<br>
                        <span class="code-keyword">except</span> ValueError:<br>
                        &nbsp;&nbsp;<span class="code-keyword">print</span>(<span class="code-string">"حدث خطأ في تحويل القيمة إلى عدد"</span>)<br>
                        <span class="code-keyword">print</span>(<span class="code-string">"نهاية البرنامج"</span>)  <span class="code-comment"># سيتم تنفيذ هذا السطر</span>
                    </div>
                </div>
            </div>
        </div>
        
        <div id="syntax" class="content-section">
            <h2>بناء جملة معالجة الاستثناءات</h2>
            
            <h3>الهيكل الأساسي: try-except</h3>
            <div class="code-block">
                <span class="code-keyword">try</span>:<br>
                &nbsp;&nbsp;<span class="code-comment"># الكود الذي قد يسبب استثناء</span><br>
                &nbsp;&nbsp;x = <span class="code-keyword">int</span>(<span class="code-string">"10"</span>)<br>
                <span class="code-keyword">except</span> ValueError:<br>
                &nbsp;&nbsp;<span class="code-comment"># الكود الذي يتم تنفيذه في حالة حدوث ValueError</span><br>
                &nbsp;&nbsp;<span class="code-keyword">print</span>(<span class="code-string">"لا يمكن تحويل هذه القيمة إلى عدد"</span>)
            </div>
            
            <h3>الهيكل الكامل: try-except-else-finally</h3>
            <div class="code-block">
                <span class="code-keyword">try</span>:<br>
                &nbsp;&nbsp;<span class="code-comment"># الكود الذي قد يسبب استثناء</span><br>
                &nbsp;&nbsp;x = <span class="code-keyword">int</span>(input_data)<br>
                <span class="code-keyword">except</span> ValueError:<br>
                &nbsp;&nbsp;<span class="code-comment"># يتم تنفيذه في حالة حدوث ValueError</span><br>
                &nbsp;&nbsp;<span class="code-keyword">print</span>(<span class="code-string">"خطأ في تحويل البيانات"</span>)<br>
                <span class="code-keyword">else</span>:<br>
                &nbsp;&nbsp;<span class="code-comment">// يتم تنفيذه إذا لم يحدث أي استثناء</span><br>
                &nbsp;&nbsp;<span class="code-keyword">print</span>(<span class="code-string">"التحويل تم بنجاح، القيمة هي:"</span>, x)<br>
                <span class="code-keyword">finally</span>:<br>
                &nbsp;&nbsp;<span class="code-comment">// يتم تنفيذه دائماً، بغض النظر عما إذا حدث استثناء أم لا</span><br>
                &nbsp;&nbsp;<span class="code-keyword">print</span>(<span class="code-string">"تم الانتهاء من معالجة البيانات"</span>)
            </div>
            
            <h3>التعامل مع عدة استثناءات</h3>
            <div class="code-block">
                <span class="code-keyword">try</span>:<br>
                &nbsp;&nbsp;<span class="code-comment"># كود قد يسبب عدة أنواع من الاستثناءات</span><br>
                &nbsp;&nbsp;result = 10 / int_value<br>
                &nbsp;&nbsp;index = my_list[int_value]<br>
                <span class="code-keyword">except</span> ZeroDivisionError:<br>
                &nbsp;&nbsp;<span class="code-keyword">print</span>(<span class="code-string">"لا يمكن القسمة على صفر"</span>)<br>
                <span class="code-keyword">except</span> (ValueError, IndexError):<br>
                &nbsp;&nbsp;<span class="code-keyword">print</span>(<span class="code-string">"خطأ في القيمة أو الفهرس"</span>)<br>
                <span class="code-keyword">except</span> Exception <span class="code-keyword">as</span> e:<br>
                &nbsp;&nbsp;<span class="code-keyword">print</span>(<span class="code-string">"حدث خطأ غير متوقع:"</span>, e)
            </div>
        </div>
        
        <div id="types" class="content-section">
            <h2>أنواع الاستثناءات الشائعة في Python</h2>
            
            <ul class="exception-list">
                <li class="exception-item">
                    <div class="exception-name">SyntaxError</div>
                    <p>يحدث عندما يكون هناك خطأ في بناء الجملة (Syntax) في الكود.</p>
                </li>
                
                <li class="exception-item">
                    <div class="exception-name">IndentationError</div>
                    <p>يحدث عندما يكون هناك خطأ في المسافات البادئة (Indentation) في الكود.</p>
                </li>
                
                <li class="exception-item">
                    <div class="exception-name">NameError</div>
                    <p>يحدث عند محاولة استخدام متغير غير معرف.</p>
                </li>
                
                <li class="exception-item">
                    <div class="exception-name">TypeError</div>
                    <p>يحدث عند إجراء عملية على نوع بيانات غير مناسب.</p>
                </li>
                
                <li class="exception-item">
                    <div class="exception-name">ValueError</div>
                    <p>يحدث عندما تكون قيمة المتغير صحيحة من حيث النوع ولكنها غير مناسبة.</p>
                </li>
                
                <li class="exception-item">
                    <div class="exception-name">IndexError</div>
                    <p>يحدث عند محاولة الوصول إلى عنصر في قائمة باستخدام فهرس غير موجود.</p>
                </li>
                
                <li class="exception-item">
                    <div class="exception-name">KeyError</div>
                    <p>يحدث عند محاولة الوصول إلى مفتاح غير موجود في القاموس.</p>
                </li>
                
                <li class="exception-item">
                    <div class="exception-name">ZeroDivisionError</div>
                    <p>يحدث عند محاولة القسمة على صفر.</p>
                </li>
                
                <li class="exception-item">
                    <div class="exception-name">FileNotFoundError</div>
                    <p>يحدث عند محاولة فتح ملف غير موجود.</p>
                </li>
            </ul>
            
            <h3>تسلسل وراثة الاستثناءات</h3>
            <p>جميع الاستثناءات في Python ترث من الكلاس BaseException. فيما يلي التسلسل الهرمي لبعض الاستثناءات الشائعة:</p>
            
            <div class="code-block">
                BaseException<br>
                ├── SystemExit<br>
                ├── KeyboardInterrupt<br>
                ├── GeneratorExit<br>
                └── Exception<br>
                &nbsp;&nbsp;&nbsp;&nbsp;├── ArithmeticError<br>
                &nbsp;&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;├── ZeroDivisionError<br>
                &nbsp;&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;└── FloatingPointError<br>
                &nbsp;&nbsp;&nbsp;&nbsp;├── AssertionError<br>
                &nbsp;&nbsp;&nbsp;&nbsp;├── AttributeError<br>
                &nbsp;&nbsp;&nbsp;&nbsp;├── EOFError<br>
                &nbsp;&nbsp;&nbsp;&nbsp;├── ImportError<br>
                &nbsp;&nbsp;&nbsp;&nbsp;├── LookupError<br>
                &nbsp;&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;├── IndexError<br>
                &nbsp;&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;└── KeyError<br>
                &nbsp;&nbsp;&nbsp;&nbsp;├── NameError<br>
                &nbsp;&nbsp;&nbsp;&nbsp;├── OSError<br>
                &nbsp;&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;├── FileNotFoundError<br>
                &nbsp;&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;└── PermissionError<br>
                &nbsp;&nbsp;&nbsp;&nbsp;├── RuntimeError<br>
                &nbsp;&nbsp;&nbsp;&nbsp;├── SyntaxError<br>
                &nbsp;&nbsp;&nbsp;&nbsp;├── TypeError<br>
                &nbsp;&nbsp;&nbsp;&nbsp;└── ValueError
            </div>
        </div>
        
        <div id="examples" class="content-section">
            <h2>أمثلة عملية على معالجة الاستثناءات</h2>
            
            <div class="example-container">
                <div class="example-box">
                    <div class="example-title">مثال 1: معالجة القسمة على صفر</div>
                    <div class="code-block">
                        <span class="code-keyword">def</span> <span class="code-function">divide_numbers</span>(a, b):<br>
                        &nbsp;&nbsp;<span class="code-keyword">try</span>:<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;result = a / b<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">return</span> result<br>
                        &nbsp;&nbsp;<span class="code-keyword">except</span> ZeroDivisionError:<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">return</span> <span class="code-string">"لا يمكن القسمة على صفر!"</span><br>
                        <br>
                        <span class="code-comment"># اختبار الدالة</span><br>
                        <span class="code-keyword">print</span>(divide_numbers(10, 2))  <span class="code-comment"># 5.0</span><br>
                        <span class="code-keyword">print</span>(divide_numbers(10, 0))  <span class="code-comment"># لا يمكن القسمة على صفر!</span>
                    </div>
                    <button class="try-button" onclick="runExample('example1')">تشغيل المثال</button>
                    <div id="example1-output" class="output"></div>
                </div>
                
                <div class="example-box">
                    <div class="example-title">مثال 2: معالجة إدخال المستخدم</div>
                    <div class="code-block">
                        <span class="code-keyword">def</span> <span class="code-function">get_user_age</span>():<br>
                        &nbsp;&nbsp;<span class="code-keyword">while</span> <span class="code-keyword">True</span>:<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">try</span>:<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;age = <span class="code-keyword">int</span>(<span class="code-keyword">input</span>(<span class="code-string">"أدخل عمرك: "</span>))<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">if</span> age &lt; 0 <span class="code-keyword">or</span> age &gt; 150:<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">raise</span> ValueError(<span class="code-string">"العمر يجب أن يكون بين 0 و 150"</span>)<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">return</span> age<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">except</span> ValueError <span class="code-keyword">as</span> e:<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">print</span>(<span class="code-string">"قيمة غير صالحة:"</span>, e)<br>
                        <br>
                        <span class="code-comment"># اختبار الدالة</span><br>
                        age = get_user_age()<br>
                        <span class="code-keyword">print</span>(<span class="code-string">"عمرك هو:"</span>, age)
                    </div>
                    <button class="try-button" onclick="runExample('example2')">تشغيل المثال</button>
                    <div id="example2-output" class="output"></div>
                </div>
            </div>
            
            <div class="example-container">
                <div class="example-box">
                    <div class="example-title">مثال 3: فتح ملف ومعالجة الأخطاء</div>
                    <div class="code-block">
                        <span class="code-keyword">def</span> <span class="code-function">read_file_content</span>(filename):<br>
                        &nbsp;&nbsp;<span class="code-keyword">try</span>:<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;file = <span class="code-keyword">open</span>(filename, <span class="code-string">'r'</span>)<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;content = file.read()<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">return</span> content<br>
                        &nbsp;&nbsp;<span class="code-keyword">except</span> FileNotFoundError:<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">return</span> <span class="code-string">"الملف غير موجود!"</span><br>
                        &nbsp;&nbsp;<span class="code-keyword">except</span> PermissionError:<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">return</span> <span class="code-string">"ليس لديك صلاحية لقراءة هذا الملف!"</span><br>
                        &nbsp;&nbsp;<span class="code-keyword">finally</span>:<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">try</span>:<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;file.close()<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">except</span> NameError:<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-comment"># file لم يتم تعريفه إذا حدث خطأ قبل فتح الملف</span><br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">pass</span><br>
                        <br>
                        <span class="code-comment"># اختبار الدالة</span><br>
                        <span class="code-keyword">print</span>(read_file_content(<span class="code-string">"existing_file.txt"</span>))<br>
                        <span class="code-keyword">print</span>(read_file_content(<span class="code-string">"non_existing_file.txt"</span>))
                    </div>
                    <button class="try-button" onclick="runExample('example3')">تشغيل المثال</button>
                    <div id="example3-output" class="output"></div>
                </div>
                
                <div class="example-box">
                    <div class="example-title">مثال 4: استخدام else مع try-except</div>
                    <div class="code-block">
                        <span class="code-keyword">def</span> <span class="code-function">process_data</span>(data):<br>
                        &nbsp;&nbsp;<span class="code-keyword">try</span>:<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;number = <span class="code-keyword">int</span>(data)<br>
                        &nbsp;&nbsp;<span class="code-keyword">except</span> ValueError:<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">print</span>(<span class="code-string">"لا يمكن تحويل البيانات إلى عدد"</span>)<br>
                        &nbsp;&nbsp;<span class="code-keyword">else</span>:<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-comment"># يتم تنفيذ هذا الكود فقط إذا لم يحدث استثناء</span><br>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">print</span>(<span class="code-string">"تم تحويل البيانات بنجاح، العدد هو:"</span>, number)<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">return</span> number * 2<br>
                        &nbsp;&nbsp;<span class="code-keyword">finally</span>:<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">print</span>(<span class="code-string">"انتهت معالجة البيانات"</span>)<br>
                        <br>
                        <span class="code-comment"># اختبار الدالة</span><br>
                        result1 = process_data(<span class="code-string">"123"</span>)<br>
                        result2 = process_data(<span class="code-string">"abc"</span>)
                    </div>
                    <button class="try-button" onclick="runExample('example4')">تشغيل المثال</button>
                    <div id="example4-output" class="output"></div>
                </div>
            </div>
        </div>
        
        <div id="advanced" class="content-section">
            <h2>مفاهيم متقدمة في معالجة الاستثناءات</h2>
            
            <h3>رفع استثناء مخصص (Raising Exceptions)</h3>
            <p>يمكنك رفع استثناء باستخدام الكلمة المفتاحية <code>raise</code>:</p>
            <div class="code-block">
                <span class="code-keyword">def</span> <span class="code-function">check_age</span>(age):<br>
                &nbsp;&nbsp;<span class="code-keyword">if</span> age &lt; 0:<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">raise</span> ValueError(<span class="code-string">"العمر لا يمكن أن يكون سالباً"</span>)<br>
                &nbsp;&nbsp;<span class="code-keyword">elif</span> age &lt; 18:<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">raise</span> ValueError(<span class="code-string">"يجب أن يكون عمرك 18 سنة أو أكثر"</span>)<br>
                &nbsp;&nbsp;<span class="code-keyword">else</span>:<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">print</span>(<span class="code-string">"العمر مقبول"</span>)<br>
                <br>
                <span class="code-comment"># اختبار الدالة</span><br>
                <span class="code-keyword">try</span>:<br>
                &nbsp;&nbsp;check_age(-5)<br>
                <span class="code-keyword">except</span> ValueError <span class="code-keyword">as</span> e:<br>
                &nbsp;&nbsp;<span class="code-keyword">print</span>(<span class="code-string">"حدث خطأ:"</span>, e)
            </div>
            
            <h3>إنشاء استثناءات مخصصة (Custom Exceptions)</h3>
            <p>يمكنك إنشاء استثناءات مخصصة عن طريق وراثة من الكلاس Exception:</p>
            <div class="code-block">
                <span class="code-keyword">class</span> <span class="code-function">InvalidEmailError</span>(Exception):<br>
                &nbsp;&nbsp;<span class="code-keyword">def</span> <span class="code-function">__init__</span>(<span class="code-keyword">self</span>, email, message=<span class="code-string">"البريد الإلكتروني غير صالح"</span>):<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">self</span>.email = email<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">self</span>.message = message<br>
                &nbsp;&nbsp;&nbsp;&nbsp;super().__init__(<span class="code-keyword">self</span>.message)<br>
                &nbsp;&nbsp;<br>
                &nbsp;&nbsp;<span class="code-keyword">def</span> <span class="code-function">__str__</span>(<span class="code-keyword">self</span>):<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">return</span> <span class="code-string">f'<span class="code-keyword">{self.email}</span> - <span class="code-keyword">{self.message}</span>'</span><br>
                <br>
                <span class="code-keyword">def</span> <span class="code-function">validate_email</span>(email):<br>
                &nbsp;&nbsp;<span class="code-keyword">if</span> <span class="code-string">"@"</span> <span class="code-keyword">not</span> <span class="code-keyword">in</span> email:<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">raise</span> InvalidEmailError(email)<br>
                &nbsp;&nbsp;<span class="code-keyword">print</span>(<span class="code-string">"البريد الإلكتروني صالح"</span>)<br>
                <br>
                <span class="code-comment"># اختبار الدالة</span><br>
                <span class="code-keyword">try</span>:<br>
                &nbsp;&nbsp;validate_email(<span class="code-string">"user.example.com"</span>)<br>
                <span class="code-keyword">except</span> InvalidEmailError <span class="code-keyword">as</span> e:<br>
                &nbsp;&nbsp;<span class="code-keyword">print</span>(<span class="code-string">"حدث خطأ:"</span>, e)
            </div>
            
            <h3>استخدام السياق (Context Managers) مع الاستثناءات</h3>
            <p>يمكن استخدام العبارة <code>with</code> للتعامل مع الموارد تلقائياً:</p>
            <div class="code-block">
                <span class="code-comment"># فتح ملف باستخدام with - سيتم إغلاقه تلقائياً</span><br>
                <span class="code-keyword">try</span>:<br>
                &nbsp;&nbsp;<span class="code-keyword">with</span> <span class="code-keyword">open</span>(<span class="code-string">"file.txt"</span>, <span class="code-string">"r"</span>) <span class="code-keyword">as</span> file:<br>
                &nbsp;&nbsp;&nbsp;&nbsp;content = file.read()<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">print</span>(content)<br>
                <span class="code-keyword">except</span> FileNotFoundError:<br>
                &nbsp;&nbsp;<span class="code-keyword">print</span>(<span class="code-string">"الملف غير موجود"</span>)<br>
                <span class="code-keyword">except</span> IOError:<br>
                &nbsp;&nbsp;<span class="code-keyword">print</span>(<span class="code-string">"حدث خطأ في قراءة الملف"</span>)
            </div>
            
            <h3>أفضل الممارسات في معالجة الاستثناءات</h3>
            <ul>
                <li>تجنب استخدام <code>except:</code> بدون تحديد نوع الاستثناء</li>
                <li>استخدم استثناءات محددة بدلاً من <code>Exception</code> العام عندما يكون ذلك ممكناً</li>
                <li>سجل الاستثناءات بدلاً من طباعتها فقط في التطبيقات الحقيقية</li>
                <li>لا تستخدم الاستثناءات للتحكم في التدفق العادي للبرنامج</li>
                <li>استخدم <code>finally</code> لتنظيف الموارد مثل الملفات أو اتصالات الشبكة</li>
            </ul>
        </div>
    </div>
    
    <footer>
        <div class="container">
            <p>تم إنشاء هذه الصفحة كمرجع تعليمي عن الاستثناءات في لغة Python</p>
            <p>يمكنك استخدام وتعديل هذا الكود بحرية لأغراض التعليم</p>
        </div>
    </footer>

    <script>
        // تبديل علامات التبويب
        document.querySelectorAll('.tab').forEach(tab => {
            tab.addEventListener('click', () => {
                // إزالة النشاط من جميع علامات التبويب
                document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
                // إخفاء جميع أقسام المحتوى
                document.querySelectorAll('.content-section').forEach(section => section.classList.remove('active'));
                
                // تفعيل علامة التبويب المحددة
                tab.classList.add('active');
                // إظهار قسم المحتوى المقابل
                const tabId = tab.getAttribute('data-tab');
                document.getElementById(tabId).classList.add('active');
            });
        });
        
        // تشغيل الأمثلة
        function runExample(exampleId) {
            const outputElement = document.getElementById(exampleId + '-output');
            outputElement.innerHTML = '<em>جاري التشغيل...</em>';
            
            // محاكاة تنفيذ الكود (في بيئة حقيقية، سيكون هذا تنفيذاً فعلياً للكود)
            setTimeout(() => {
                let output = '';
                
                switch(exampleId) {
                    case 'example1':
                        output = '5.0\nلا يمكن القسمة على صفر!';
                        break;
                    case 'example2':
                        output = 'قيمة غير صالحة: العمر يجب أن يكون بين 0 و 150\nعمرك هو: 25';
                        break;
                    case 'example3':
                        output = 'هذا محتوى الملف\nالملف غير موجود!';
                        break;
                    case 'example4':
                        output = 'تم تحويل البيانات بنجاح، العدد هو: 123\nانتهت معالجة البيانات\nلا يمكن تحويل البيانات إلى عدد\nانتهت معالجة البيانات';
                        break;
                    default:
                        output = 'نتيجة تنفيذ الكود ستظهر هنا';
                }
                
                outputElement.innerHTML = output;
            }, 1000);
        }
    </script>
</body>
</html>