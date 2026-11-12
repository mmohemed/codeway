<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>المسار الشامل للتعامل مع الأخطاء في Python</title>
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
            --info: #1abc9c;
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
        
        .learning-path {
            display: grid;
            grid-template-columns: 300px 1fr;
            gap: 2rem;
            margin-bottom: 2rem;
        }
        
        .path-nav {
            background: white;
            border-radius: 10px;
            padding: 1.5rem;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            height: fit-content;
            position: sticky;
            top: 20px;
        }
        
        .path-item {
            padding: 1rem;
            margin-bottom: 0.5rem;
            border-radius: 8px;
            cursor: pointer;
            transition: all 0.3s ease;
            border-left: 4px solid transparent;
        }
        
        .path-item:hover {
            background-color: var(--light);
        }
        
        .path-item.active {
            background-color: var(--secondary);
            color: white;
            border-left-color: var(--primary);
        }
        
        .path-item.completed {
            border-left-color: var(--success);
        }
        
        .path-item.locked {
            opacity: 0.6;
            cursor: not-allowed;
        }
        
        .path-content {
            background: white;
            border-radius: 10px;
            padding: 2rem;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
        
        .content-section {
            display: none;
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
        
        .progress-container {
            background: white;
            border-radius: 10px;
            padding: 1.5rem;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            margin-bottom: 2rem;
        }
        
        .progress-bar {
            height: 10px;
            background: var(--light);
            border-radius: 5px;
            margin: 1rem 0;
            overflow: hidden;
        }
        
        .progress-fill {
            height: 100%;
            background: linear-gradient(90deg, var(--success), var(--info));
            width: 0%;
            transition: width 0.5s ease;
        }
        
        .progress-text {
            display: flex;
            justify-content: space-between;
            font-weight: 600;
        }
        
        .quiz-container {
            background: var(--light);
            padding: 1.5rem;
            border-radius: 8px;
            margin: 2rem 0;
        }
        
        .quiz-question {
            font-weight: bold;
            margin-bottom: 1rem;
        }
        
        .quiz-options {
            list-style-type: none;
        }
        
        .quiz-option {
            padding: 0.8rem;
            margin-bottom: 0.5rem;
            background: white;
            border-radius: 5px;
            cursor: pointer;
            transition: background 0.3s ease;
        }
        
        .quiz-option:hover {
            background: #e0e0e0;
        }
        
        .quiz-option.selected {
            background: var(--secondary);
            color: white;
        }
        
        .quiz-feedback {
            margin-top: 1rem;
            padding: 1rem;
            border-radius: 5px;
            display: none;
        }
        
        .quiz-feedback.correct {
            background: var(--success);
            color: white;
            display: block;
        }
        
        .quiz-feedback.incorrect {
            background: var(--danger);
            color: white;
            display: block;
        }
        
        .badge {
            display: inline-block;
            padding: 0.3rem 0.8rem;
            border-radius: 20px;
            font-size: 0.8rem;
            font-weight: bold;
            margin-right: 0.5rem;
        }
        
        .badge-beginner {
            background: var(--success);
            color: white;
        }
        
        .badge-intermediate {
            background: var(--warning);
            color: white;
        }
        
        .badge-advanced {
            background: var(--danger);
            color: white;
        }
        
        .badge-project {
            background: var(--info);
            color: white;
        }
        
        .navigation-buttons {
            display: flex;
            justify-content: space-between;
            margin-top: 2rem;
        }
        
        .nav-button {
            background: var(--secondary);
            color: white;
            border: none;
            padding: 0.8rem 1.5rem;
            border-radius: 5px;
            cursor: pointer;
            font-weight: 600;
            transition: background 0.3s ease;
        }
        
        .nav-button:hover {
            background: #2980b9;
        }
        
        .nav-button:disabled {
            background: #bdc3c7;
            cursor: not-allowed;
        }
        
        footer {
            text-align: center;
            padding: 2rem 0;
            margin-top: 2rem;
            color: var(--dark);
            border-top: 1px solid var(--light);
        }
        
        @media (max-width: 768px) {
            .learning-path {
                grid-template-columns: 1fr;
            }
            
            .path-nav {
                position: static;
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
            <h1>المسار الشامل للتعامل مع الأخطاء في Python</h1>
            <p class="subtitle">تعلم كيفية التعامل مع جميع أنواع الأخطاء والاستثناءات في Python من المبتدئ إلى المحترف</p>
        </div>
    </header>
    
    <div class="container">
        <div class="progress-container">
            <h3>تقدمك في المسار</h3>
            <div class="progress-bar">
                <div class="progress-fill" id="progress-fill"></div>
            </div>
            <div class="progress-text">
                <span>0% مكتمل</span>
                <span id="progress-percentage">0%</span>
            </div>
        </div>
        
        <div class="learning-path">
            <div class="path-nav">
                <div class="path-item active" data-section="intro">
                    <span class="badge badge-beginner">مبتدئ</span>
                    مقدمة عن الأخطاء والاستثناءات
                </div>
                <div class="path-item" data-section="syntax">
                    <span class="badge badge-beginner">مبتدئ</span>
                    بناء الجملة الأساسي
                </div>
                <div class="path-item" data-section="common-errors">
                    <span class="badge badge-beginner">مبتدئ</span>
                    الأخطاء الشائعة
                </div>
                <div class="path-item" data-section="multiple-exceptions">
                    <span class="badge badge-intermediate">متوسط</span>
                    التعامل مع استثناءات متعددة
                </div>
                <div class="path-item" data-section="custom-exceptions">
                    <span class="badge badge-intermediate">متوسط</span>
                    استثناءات مخصصة
                </div>
                <div class="path-item" data-section="best-practices">
                    <span class="badge badge-intermediate">متوسط</span>
                    أفضل الممارسات
                </div>
                <div class="path-item" data-section="debugging">
                    <span class="badge badge-advanced">متقدم</span>
                    تقنيات التصحيح
                </div>
                <div class="path-item" data-section="logging">
                    <span class="badge badge-advanced">متقدم</span>
                    التسجيل والمراقبة
                </div>
                <div class="path-item" data-section="testing">
                    <span class="badge badge-advanced">متقدم</span>
                    اختبار الأخطاء
                </div>
                <div class="path-item" data-section="real-world">
                    <span class="badge badge-project">مشروع</span>
                    تطبيقات عملية
                </div>
            </div>
            
            <div class="path-content">
                <!-- المقدمة -->
                <div id="intro" class="content-section active">
                    <h2>مقدمة عن الأخطاء والاستثناءات في Python</h2>
                    <p>في عالم البرمجة، الأخطاء حتمية. لكن المبرمج الجيد لا يتجنب الأخطاء، بل يتعلم كيفية التعامل معها بفعالية. في Python، نستخدم نظام الاستثناءات (Exceptions) للتعامل مع الأخطاء بطريقة منظمة.</p>
                    
                    <h3>لماذا نتعلم التعامل مع الأخطاء؟</h3>
                    <ul>
                        <li>منع توقف التطبيقات المفاجئ</li>
                        <li>تحسين تجربة المستخدم</li>
                        <li>تسهيل عملية الصيانة والتطوير</li>
                        <li>زيادة موثوقية التطبيقات</li>
                    </ul>
                    
                    <h3>أنواع الأخطاء في Python</h3>
                    <div class="example-container">
                        <div class="example-box">
                            <div class="example-title">أخطاء بناء الجملة (Syntax Errors)</div>
                            <p>أخطاء في كتابة الكود تجعله غير قابل للتفسير</p>
                            <div class="code-block">
                                <span class="code-comment"># خطأ: نسيان النقطتين</span><br>
                                <span class="code-keyword">if</span> x &gt; 5<br>
                                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">print</span>(<span class="code-string">"x كبير"</span>)
                            </div>
                        </div>
                        
                        <div class="example-box">
                            <div class="example-title">استثناءات وقت التشغيل (Runtime Exceptions)</div>
                            <p>أخطاء تحدث أثناء تنفيذ البرنامج</p>
                            <div class="code-block">
                                <span class="code-comment"># خطأ: القسمة على صفر</span><br>
                                result = 10 / 0
                            </div>
                        </div>
                    </div>
                    
                    <div class="quiz-container">
                        <div class="quiz-question">1. ما هو النوع الرئيسي للأخطاء في Python؟</div>
                        <ul class="quiz-options">
                            <li class="quiz-option" data-correct="false">أخطاء الترجمة فقط</li>
                            <li class="quiz-option" data-correct="true">أخطاء بناء الجملة واستثناءات وقت التشغيل</li>
                            <li class="quiz-option" data-correct="false">أخطاء المنطق فقط</li>
                            <li class="quiz-option" data-correct="false">أخطاء الأجهزة فقط</li>
                        </ul>
                        <div class="quiz-feedback"></div>
                    </div>
                    
                    <div class="navigation-buttons">
                        <button class="nav-button" disabled>السابق</button>
                        <button class="nav-button" onclick="navigateTo('syntax')">التالي</button>
                    </div>
                </div>
                
                <!-- بناء الجملة الأساسي -->
                <div id="syntax" class="content-section">
                    <h2>بناء الجملة الأساسي للتعامل مع الاستثناءات</h2>
                    
                    <h3>الهيكل الأساسي: try-except</h3>
                    <div class="code-block">
                        <span class="code-keyword">try</span>:<br>
                        &nbsp;&nbsp;<span class="code-comment"># الكود الذي قد يسبب خطأ</span><br>
                        &nbsp;&nbsp;result = 10 / int(input(<span class="code-string">"أدخل رقمًا: "</span>))<br>
                        <span class="code-keyword">except</span> ZeroDivisionError:<br>
                        &nbsp;&nbsp;<span class="code-keyword">print</span>(<span class="code-string">"لا يمكن القسمة على صفر!"</span>)<br>
                        <span class="code-keyword">except</span> ValueError:<br>
                        &nbsp;&nbsp;<span class="code-keyword">print</span>(<span class="code-string">"يجب إدخال رقم صحيح!"</span>)
                    </div>
                    
                    <h3>الهيكل الكامل: try-except-else-finally</h3>
                    <div class="code-block">
                        <span class="code-keyword">try</span>:<br>
                        &nbsp;&nbsp;file = <span class="code-keyword">open</span>(<span class="code-string">"data.txt"</span>, <span class="code-string">"r"</span>)<br>
                        &nbsp;&nbsp;content = file.read()<br>
                        <span class="code-keyword">except</span> FileNotFoundError:<br>
                        &nbsp;&nbsp;<span class="code-keyword">print</span>(<span class="code-string">"الملف غير موجود"</span>)<br>
                        <span class="code-keyword">else</span>:<br>
                        &nbsp;&nbsp;<span class="code-keyword">print</span>(<span class="code-string">"تم قراءة الملف بنجاح"</span>)<br>
                        &nbsp;&nbsp;<span class="code-keyword">print</span>(content)<br>
                        <span class="code-keyword">finally</span>:<br>
                        &nbsp;&nbsp;<span class="code-keyword">try</span>:<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;file.close()<br>
                        &nbsp;&nbsp;<span class="code-keyword">except</span> NameError:<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-comment"># file غير معرف إذا حدث خطأ قبل فتح الملف</span><br>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">pass</span>
                    </div>
                    
                    <div class="quiz-container">
                        <div class="quiz-question">2. أي من هذه الكتل يتم تنفيذها دائمًا بغض النظر عن حدوث خطأ أم لا؟</div>
                        <ul class="quiz-options">
                            <li class="quiz-option" data-correct="false">else</li>
                            <li class="quiz-option" data-correct="true">finally</li>
                            <li class="quiz-option" data-correct="false">except</li>
                            <li class="quiz-option" data-correct="false">try</li>
                        </ul>
                        <div class="quiz-feedback"></div>
                    </div>
                    
                    <div class="navigation-buttons">
                        <button class="nav-button" onclick="navigateTo('intro')">السابق</button>
                        <button class="nav-button" onclick="navigateTo('common-errors')">التالي</button>
                    </div>
                </div>
                
                <!-- الأخطاء الشائعة -->
                <div id="common-errors" class="content-section">
                    <h2>الأخطاء الشائعة وكيفية التعامل معها</h2>
                    
                    <h3>1. ZeroDivisionError - القسمة على صفر</h3>
                    <div class="code-block">
                        <span class="code-keyword">try</span>:<br>
                        &nbsp;&nbsp;result = 10 / 0<br>
                        <span class="code-keyword">except</span> ZeroDivisionError:<br>
                        &nbsp;&nbsp;<span class="code-keyword">print</span>(<span class="code-string">"حدث خطأ: لا يمكن القسمة على صفر"</span>)<br>
                        &nbsp;&nbsp;result = <span class="code-keyword">None</span>
                    </div>
                    
                    <h3>2. ValueError - قيمة غير مناسبة</h3>
                    <div class="code-block">
                        <span class="code-keyword">try</span>:<br>
                        &nbsp;&nbsp;number = <span class="code-keyword">int</span>(<span class="code-string">"abc"</span>)<br>
                        <span class="code-keyword">except</span> ValueError:<br>
                        &nbsp;&nbsp;<span class="code-keyword">print</span>(<span class="code-string">"لا يمكن تحويل 'abc' إلى رقم"</span>)<br>
                        &nbsp;&nbsp;number = 0
                    </div>
                    
                    <h3>3. FileNotFoundError - ملف غير موجود</h3>
                    <div class="code-block">
                        <span class="code-keyword">try</span>:<br>
                        &nbsp;&nbsp;<span class="code-keyword">with</span> <span class="code-keyword">open</span>(<span class="code-string">"ملف_غير_موجود.txt"</span>, <span class="code-string">"r"</span>) <span class="code-keyword">as</span> file:<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;content = file.read()<br>
                        <span class="code-keyword">except</span> FileNotFoundError:<br>
                        &nbsp;&nbsp;<span class="code-keyword">print</span>(<span class="code-string">"الملف غير موجود. سيتم إنشاء ملف جديد."</span>)<br>
                        &nbsp;&nbsp;<span class="code-keyword">with</span> <span class="code-keyword">open</span>(<span class="code-string">"ملف_غير_موجود.txt"</span>, <span class="code-string">"w"</span>) <span class="code-keyword">as</span> file:<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;file.write(<span class="code-string">"محتوى جديد"</span>)
                    </div>
                    
                    <h3>4. IndexError - فهرس خارج النطاق</h3>
                    <div class="code-block">
                        my_list = [1, 2, 3]<br>
                        <span class="code-keyword">try</span>:<br>
                        &nbsp;&nbsp;value = my_list[5]<br>
                        <span class="code-keyword">except</span> IndexError:<br>
                        &nbsp;&nbsp;<span class="code-keyword">print</span>(<span class="code-string">"الفهرس خارج نطاق القائمة"</span>)<br>
                        &nbsp;&nbsp;value = my_list[-1]  <span class="code-comment"># آخر عنصر</span>
                    </div>
                    
                    <div class="quiz-container">
                        <div class="quiz-question">3. أي من هذه الأخطاء يحدث عند محاولة فتح ملف غير موجود؟</div>
                        <ul class="quiz-options">
                            <li class="quiz-option" data-correct="false">ValueError</li>
                            <li class="quiz-option" data-correct="false">IndexError</li>
                            <li class="quiz-option" data-correct="true">FileNotFoundError</li>
                            <li class="quiz-option" data-correct="false">ZeroDivisionError</li>
                        </ul>
                        <div class="quiz-feedback"></div>
                    </div>
                    
                    <div class="navigation-buttons">
                        <button class="nav-button" onclick="navigateTo('syntax')">السابق</button>
                        <button class="nav-button" onclick="navigateTo('multiple-exceptions')">التالي</button>
                    </div>
                </div>
                
                <!-- التعامل مع استثناءات متعددة -->
                <div id="multiple-exceptions" class="content-section">
                    <h2>التعامل مع استثناءات متعددة</h2>
                    
                    <h3>التعامل مع عدة استثناءات بشكل منفصل</h3>
                    <div class="code-block">
                        <span class="code-keyword">def</span> <span class="code-function">safe_divide</span>(a, b):<br>
                        &nbsp;&nbsp;<span class="code-keyword">try</span>:<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;result = a / b<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">return</span> result<br>
                        &nbsp;&nbsp;<span class="code-keyword">except</span> ZeroDivisionError:<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">print</span>(<span class="code-string">"خطأ: القسمة على صفر"</span>)<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">return</span> <span class="code-keyword">None</span><br>
                        &nbsp;&nbsp;<span class="code-keyword">except</span> TypeError:<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">print</span>(<span class="code-string">"خطأ: نوع البيانات غير صحيح"</span>)<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">return</span> <span class="code-keyword">None</span>
                    </div>
                    
                    <h3>التعامل مع عدة استثناءات معًا</h3>
                    <div class="code-block">
                        <span class="code-keyword">try</span>:<br>
                        &nbsp;&nbsp;<span class="code-comment"># كود قد يسبب عدة أنواع من الأخطاء</span><br>
                        &nbsp;&nbsp;number = <span class="code-keyword">int</span>(input_data)<br>
                        &nbsp;&nbsp;result = 100 / number<br>
                        &nbsp;&nbsp;element = my_list[number]<br>
                        <span class="code-keyword">except</span> (ValueError, ZeroDivisionError, IndexError) <span class="code-keyword">as</span> e:<br>
                        &nbsp;&nbsp;<span class="code-keyword">print</span>(<span class="code-string">f"حدث خطأ من نوع <span class="code-keyword">{type(e).__name__}</span>: <span class="code-keyword">{e}</span>"</span>)
                    </div>
                    
                    <h3>التعامل مع جميع الاستثناءات</h3>
                    <div class="code-block">
                        <span class="code-keyword">try</span>:<br>
                        &nbsp;&nbsp;<span class="code-comment"># كود غير موثوق</span><br>
                        &nbsp;&nbsp;result = risky_operation()<br>
                        <span class="code-keyword">except</span> Exception <span class="code-keyword">as</span> e:<br>
                        &nbsp;&nbsp;<span class="code-keyword">print</span>(<span class="code-string">f"حدث خطأ غير متوقع: <span class="code-keyword">{e}</span>"</span>)<br>
                        &nbsp;&nbsp;<span class="code-comment"># تسجيل الخطأ للمراجعة لاحقًا</span><br>
                        &nbsp;&nbsp;log_error(e)
                    </div>
                    
                    <h3>مثال متكامل: آلة حاسبة آمنة</h3>
                    <div class="code-block">
                        <span class="code-keyword">def</span> <span class="code-function">safe_calculator</span>():<br>
                        &nbsp;&nbsp;<span class="code-keyword">try</span>:<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;num1 = <span class="code-keyword">float</span>(<span class="code-keyword">input</span>(<span class="code-string">"أدخل الرقم الأول: "</span>))<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;operator = <span class="code-keyword">input</span>(<span class="code-string">"أدخل العملية (+, -, *, /): "</span>)<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;num2 = <span class="code-keyword">float</span>(<span class="code-keyword">input</span>(<span class="code-string">"أدخل الرقم الثاني: "</span>))<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">if</span> operator == <span class="code-string">'+'</span>:<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;result = num1 + num2<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">elif</span> operator == <span class="code-string">'-'</span>:<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;result = num1 - num2<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">elif</span> operator == <span class="code-string">'*'</span>:<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;result = num1 * num2<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">elif</span> operator == <span class="code-string">'/'</span>:<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">if</span> num2 == 0:<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">raise</span> ZeroDivisionError(<span class="code-string">"القسمة على صفر"</span>)<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;result = num1 / num2<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">else</span>:<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">raise</span> ValueError(<span class="code-string">"عملية غير صالحة"</span>)<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">return</span> result<br>
                        &nbsp;&nbsp;<br>
                        &nbsp;&nbsp;<span class="code-keyword">except</span> ValueError <span class="code-keyword">as</span> e:<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">print</span>(<span class="code-string">f"خطأ في القيمة: <span class="code-keyword">{e}</span>"</span>)<br>
                        &nbsp;&nbsp;<span class="code-keyword">except</span> ZeroDivisionError <span class="code-keyword">as</span> e:<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">print</span>(<span class="code-string">f"خطأ في القسمة: <span class="code-keyword">{e}</span>"</span>)<br>
                        &nbsp;&nbsp;<span class="code-keyword">except</span> Exception <span class="code-keyword">as</span> e:<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">print</span>(<span class="code-string">f"حدث خطأ غير متوقع: <span class="code-keyword">{e}</span>"</span>)<br>
                        &nbsp;&nbsp;<span class="code-keyword">finally</span>:<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">print</span>(<span class="code-string">"شكرًا لاستخدامك الآلة الحاسبة"</span>)
                    </div>
                    
                    <div class="quiz-container">
                        <div class="quiz-question">4. كيف يمكن التعامل مع عدة أنواع من الاستثناءات في كتلة except واحدة؟</div>
                        <ul class="quiz-options">
                            <li class="quiz-option" data-correct="false">باستخدام عدة كتل try</li>
                            <li class="quiz-option" data-correct="true">بوضعها في tuple داخل except</li>
                            <li class="quiz-option" data-correct="false">بكتابة except عدة مرات</li>
                            <li class="quiz-option" data-correct="false">لا يمكن التعامل مع أكثر من استثناء واحد</li>
                        </ul>
                        <div class="quiz-feedback"></div>
                    </div>
                    
                    <div class="navigation-buttons">
                        <button class="nav-button" onclick="navigateTo('common-errors')">السابق</button>
                        <button class="nav-button" onclick="navigateTo('custom-exceptions')">التالي</button>
                    </div>
                </div>
                
                <!-- باقي الأقسام سيتم إضافتها بنفس النمط -->
                <!-- لأغراض العرض، سأضيف عناوين الأقسام المتبقية -->
                
                <div id="custom-exceptions" class="content-section">
                    <h2>استثناءات مخصصة</h2>
                    <p>محتوى عن إنشاء واستخدام الاستثناءات المخصصة...</p>
                    <div class="navigation-buttons">
                        <button class="nav-button" onclick="navigateTo('multiple-exceptions')">السابق</button>
                        <button class="nav-button" onclick="navigateTo('best-practices')">التالي</button>
                    </div>
                </div>
                
                <div id="best-practices" class="content-section">
                    <h2>أفضل الممارسات</h2>
                    <p>محتوى عن أفضل الممارسات في التعامل مع الأخطاء...</p>
                    <div class="navigation-buttons">
                        <button class="nav-button" onclick="navigateTo('custom-exceptions')">السابق</button>
                        <button class="nav-button" onclick="navigateTo('debugging')">التالي</button>
                    </div>
                </div>
                
                <div id="debugging" class="content-section">
                    <h2>تقنيات التصحيح</h2>
                    <p>محتوى عن تقنيات تصحيح الأخطاء...</p>
                    <div class="navigation-buttons">
                        <button class="nav-button" onclick="navigateTo('best-practices')">السابق</button>
                        <button class="nav-button" onclick="navigateTo('logging')">التالي</button>
                    </div>
                </div>
                
                <div id="logging" class="content-section">
                    <h2>التسجيل والمراقبة</h2>
                    <p>محتوى عن تسجيل الأخطاء ومراقبة التطبيقات...</p>
                    <div class="navigation-buttons">
                        <button class="nav-button" onclick="navigateTo('debugging')">السابق</button>
                        <button class="nav-button" onclick="navigateTo('testing')">التالي</button>
                    </div>
                </div>
                
                <div id="testing" class="content-section">
                    <h2>اختبار الأخطاء</h2>
                    <p>محتوى عن كتابة اختبارات للأخطاء...</p>
                    <div class="navigation-buttons">
                        <button class="nav-button" onclick="navigateTo('logging')">السابق</button>
                        <button class="nav-button" onclick="navigateTo('real-world')">التالي</button>
                    </div>
                </div>
                
                <div id="real-world" class="content-section">
                    <h2>تطبيقات عملية</h2>
                    <p>محتوى عن تطبيقات عملية للتعامل مع الأخطاء...</p>
                    <div class="navigation-buttons">
                        <button class="nav-button" onclick="navigateTo('testing')">السابق</button>
                        <button class="nav-button" disabled>التالي</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <footer>
        <div class="container">
            <p>مسار تعليمي شامل للتعامل مع الأخطاء في Python - يمكنك استخدام هذا المحتوى لأغراض التعليم</p>
        </div>
    </footer>

    <script>
        // بيانات التقدم
        let progress = 0;
        const totalSections = 10;
        
        // تحديث شريط التقدم
        function updateProgress() {
            const progressFill = document.getElementById('progress-fill');
            const progressPercentage = document.getElementById('progress-percentage');
            const percentage = Math.round((progress / totalSections) * 100);
            
            progressFill.style.width = `${percentage}%`;
            progressPercentage.textContent = `${percentage}%`;
        }
        
        // التنقل بين الأقسام
        function navigateTo(sectionId) {
            // إخفاء جميع الأقسام
            document.querySelectorAll('.content-section').forEach(section => {
                section.classList.remove('active');
            });
            
            // إزالة النشاط من جميع عناصر المسار
            document.querySelectorAll('.path-item').forEach(item => {
                item.classList.remove('active');
            });
            
            // إظهار القسم المطلوب
            document.getElementById(sectionId).classList.add('active');
            
            // تفعيل عنصر المسار المقابل
            document.querySelector(`.path-item[data-section="${sectionId}"]`).classList.add('active');
            
            // تحديث التقدم
            const sections = ['intro', 'syntax', 'common-errors', 'multiple-exceptions', 
                             'custom-exceptions', 'best-practices', 'debugging', 
                             'logging', 'testing', 'real-world'];
            progress = sections.indexOf(sectionId) + 1;
            updateProgress();
            
            // تعليم الأقسام المكتملة
            sections.forEach((section, index) => {
                const item = document.querySelector(`.path-item[data-section="${section}"]`);
                if (index < progress) {
                    item.classList.add('completed');
                } else {
                    item.classList.remove('completed');
                }
            });
        }
        
        // التعامل مع النقر على عناصر المسار
        document.querySelectorAll('.path-item').forEach(item => {
            item.addEventListener('click', () => {
                const sectionId = item.getAttribute('data-section');
                if (!item.classList.contains('locked')) {
                    navigateTo(sectionId);
                }
            });
        });
        
        // التعامل مع الاختبارات
        document.querySelectorAll('.quiz-option').forEach(option => {
            option.addEventListener('click', () => {
                const questionContainer = option.closest('.quiz-container');
                const feedback = questionContainer.querySelector('.quiz-feedback');
                const options = questionContainer.querySelectorAll('.quiz-option');
                
                // إزالة التحديد من جميع الخيارات
                options.forEach(opt => opt.classList.remove('selected'));
                
                // تحديد الخيار الحالي
                option.classList.add('selected');
                
                // عرض التغذية الراجعة
                if (option.getAttribute('data-correct') === 'true') {
                    feedback.textContent = 'إجابة صحيحة! أحسنت!';
                    feedback.className = 'quiz-feedback correct';
                } else {
                    feedback.textContent = 'إجابة خاطئة. حاول مرة أخرى!';
                    feedback.className = 'quiz-feedback incorrect';
                }
            });
        });
        
        // تهيئة الصفحة
        document.addEventListener('DOMContentLoaded', () => {
            updateProgress();
        });
    </script>
</body>
</html>