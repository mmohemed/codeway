<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>أساسيات Async في Python - دليل شامل للمبتدئين</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        :root {
            --primary: #2563eb;
            --primary-dark: #1d4ed8;
            --secondary: #7c3aed;
            --accent: #f59e0b;
            --light: #f8fafc;
            --dark: #1e293b;
            --success: #10b981;
            --warning: #f59e0b;
            --error: #ef4444;
            --gray: #64748b;
            --gray-light: #e2e8f0;
        }
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        
        body {
            background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
            color: var(--dark);
            line-height: 1.7;
            min-height: 100vh;
        }
        
        .container {
            width: 90%;
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
        }
        
        /* Header Styles */
        header {
            background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
            color: white;
            padding: 3rem 0;
            text-align: center;
            border-radius: 0 0 30px 30px;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
            position: relative;
            overflow: hidden;
        }
        
        header::before {
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            width: 100%;
            height: 100%;
            background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none"><path d="M0,0 L100,0 L100,100 Z" fill="rgba(255,255,255,0.1)"/></svg>');
            background-size: cover;
        }
        
        .header-content {
            position: relative;
            z-index: 1;
            max-width: 800px;
            margin: 0 auto;
        }
        
        header h1 {
            font-size: 3rem;
            margin-bottom: 1rem;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
        }
        
        header p {
            font-size: 1.3rem;
            margin-bottom: 2rem;
            opacity: 0.9;
        }
        
        .header-badges {
            display: flex;
            justify-content: center;
            gap: 15px;
            flex-wrap: wrap;
        }
        
        .badge {
            background: rgba(255, 255, 255, 0.2);
            padding: 8px 16px;
            border-radius: 50px;
            font-size: 0.9rem;
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.3);
        }
        
        /* Navigation */
        nav {
            background-color: white;
            padding: 1.2rem 0;
            position: sticky;
            top: 0;
            z-index: 100;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
        }
        
        .nav-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .logo {
            font-size: 1.5rem;
            font-weight: 700;
            color: var(--primary);
            display: flex;
            align-items: center;
            gap: 10px;
        }
        
        .logo i {
            color: var(--secondary);
        }
        
        nav ul {
            display: flex;
            list-style: none;
            gap: 25px;
        }
        
        nav a {
            text-decoration: none;
            color: var(--dark);
            font-weight: 600;
            padding: 8px 15px;
            border-radius: 8px;
            transition: all 0.3s ease;
            position: relative;
        }
        
        nav a:hover {
            color: var(--primary);
        }
        
        nav a::after {
            content: '';
            position: absolute;
            bottom: 0;
            right: 15px;
            width: 0;
            height: 2px;
            background: var(--primary);
            transition: width 0.3s ease;
        }
        
        nav a:hover::after {
            width: calc(100% - 30px);
        }
        
        /* Main Content */
        .main-content {
            display: grid;
            grid-template-columns: 1fr 350px;
            gap: 30px;
            margin: 40px 0;
        }
        
        .content-card {
            background: white;
            border-radius: 16px;
            padding: 30px;
            margin-bottom: 30px;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            border: 1px solid var(--gray-light);
        }
        
        .content-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
        }
        
        .content-card h2 {
            color: var(--primary);
            border-bottom: 2px solid var(--gray-light);
            padding-bottom: 15px;
            margin-bottom: 25px;
            font-size: 1.8rem;
            display: flex;
            align-items: center;
            gap: 12px;
        }
        
        .content-card h2 i {
            color: var(--secondary);
        }
        
        .content-card h3 {
            color: var(--secondary);
            margin: 25px 0 15px;
            font-size: 1.4rem;
        }
        
        /* Code Blocks */
        .code-block {
            background: #1e293b;
            color: #e2e8f0;
            padding: 20px;
            border-radius: 10px;
            margin: 20px 0;
            overflow-x: auto;
            font-family: 'Consolas', 'Monaco', monospace;
            direction: ltr;
            border-left: 4px solid var(--accent);
        }
        
        .code-comment {
            color: #64748b;
        }
        
        .code-keyword {
            color: #f472b6;
        }
        
        .code-function {
            color: #7dd3fc;
        }
        
        .code-string {
            color: #86efac;
        }
        
        .code-class {
            color: #fde68a;
        }
        
        .code-number {
            color: #fdba74;
        }
        
        /* Sidebar */
        .sidebar {
            position: sticky;
            top: 100px;
            height: fit-content;
        }
        
        .sidebar-widget {
            background: white;
            border-radius: 16px;
            padding: 25px;
            margin-bottom: 25px;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
            border: 1px solid var(--gray-light);
        }
        
        .sidebar-widget h3 {
            color: var(--primary);
            margin-bottom: 20px;
            padding-bottom: 15px;
            border-bottom: 1px solid var(--gray-light);
            display: flex;
            align-items: center;
            gap: 10px;
        }
        
        .sidebar-widget h3 i {
            color: var(--secondary);
        }
        
        .sidebar-widget ul {
            list-style: none;
        }
        
        .sidebar-widget li {
            margin-bottom: 12px;
            padding-right: 10px;
            border-right: 3px solid transparent;
            transition: all 0.3s ease;
        }
        
        .sidebar-widget li:hover {
            border-right-color: var(--primary);
            padding-right: 15px;
        }
        
        .sidebar-widget a {
            text-decoration: none;
            color: var(--dark);
            display: flex;
            align-items: center;
            gap: 10px;
            transition: color 0.3s ease;
        }
        
        .sidebar-widget a:hover {
            color: var(--primary);
        }
        
        .sidebar-widget a i {
            width: 20px;
            text-align: center;
        }
        
        /* Special Elements */
        .info-box {
            background: #dbeafe;
            border-right: 4px solid var(--primary);
            padding: 20px;
            margin: 20px 0;
            border-radius: 0 10px 10px 0;
        }
        
        .warning-box {
            background: #fef3c7;
            border-right: 4px solid var(--warning);
            padding: 20px;
            margin: 20px 0;
            border-radius: 0 10px 10px 0;
        }
        
        .success-box {
            background: #d1fae5;
            border-right: 4px solid var(--success);
            padding: 20px;
            margin: 20px 0;
            border-radius: 0 10px 10px 0;
        }
        
        .comparison-table {
            width: 100%;
            border-collapse: collapse;
            margin: 25px 0;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
        }
        
        .comparison-table th, .comparison-table td {
            border: 1px solid var(--gray-light);
            padding: 15px;
            text-align: right;
        }
        
        .comparison-table th {
            background: var(--primary);
            color: white;
            font-weight: 600;
        }
        
        .comparison-table tr:nth-child(even) {
            background: #f8fafc;
        }
        
        .comparison-table tr:hover {
            background: #f1f5f9;
        }
        
        /* Progress Section */
        .progress-section {
            background: white;
            border-radius: 16px;
            padding: 25px;
            margin: 30px 0;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
        }
        
        .progress-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
        }
        
        .progress-bar {
            height: 10px;
            background: var(--gray-light);
            border-radius: 10px;
            overflow: hidden;
            margin-bottom: 30px;
        }
        
        .progress-fill {
            height: 100%;
            background: linear-gradient(90deg, var(--primary), var(--secondary));
            border-radius: 10px;
            width: 0%;
            transition: width 1s ease;
        }
        
        .progress-steps {
            display: flex;
            justify-content: space-between;
            position: relative;
        }
        
        .progress-step {
            display: flex;
            flex-direction: column;
            align-items: center;
            position: relative;
            z-index: 1;
        }
        
        .step-icon {
            width: 50px;
            height: 50px;
            background: white;
            border: 3px solid var(--gray-light);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 10px;
            font-size: 1.2rem;
            color: var(--gray);
            transition: all 0.3s ease;
        }
        
        .progress-step.active .step-icon {
            background: var(--primary);
            border-color: var(--primary);
            color: white;
        }
        
        .progress-step.completed .step-icon {
            background: var(--success);
            border-color: var(--success);
            color: white;
        }
        
        .step-label {
            font-size: 0.9rem;
            font-weight: 600;
            color: var(--gray);
            text-align: center;
        }
        
        .progress-step.active .step-label {
            color: var(--primary);
        }
        
        .progress-step.completed .step-label {
            color: var(--success);
        }
        
        /* Footer */
        footer {
            background: linear-gradient(135deg, var(--dark) 0%, #0f172a 100%);
            color: white;
            padding: 3rem 0;
            margin-top: 50px;
            border-radius: 30px 30px 0 0;
        }
        
        .footer-content {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 30px;
        }
        
        .footer-column h3 {
            color: var(--accent);
            margin-bottom: 20px;
            font-size: 1.3rem;
        }
        
        .footer-column ul {
            list-style: none;
        }
        
        .footer-column li {
            margin-bottom: 12px;
        }
        
        .footer-column a {
            color: #cbd5e1;
            text-decoration: none;
            transition: color 0.3s ease;
            display: flex;
            align-items: center;
            gap: 10px;
        }
        
        .footer-column a:hover {
            color: white;
        }
        
        .footer-bottom {
            text-align: center;
            margin-top: 40px;
            padding-top: 20px;
            border-top: 1px solid #334155;
            color: #94a3b8;
        }
        
        /* Responsive */
        @media (max-width: 992px) {
            .main-content {
                grid-template-columns: 1fr;
            }
            
            .sidebar {
                position: static;
            }
        }
        
        @media (max-width: 768px) {
            header h1 {
                font-size: 2.2rem;
            }
            
            nav ul {
                display: none;
            }
            
            .nav-container {
                justify-content: center;
            }
        }
        
        /* Animation */
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        .content-card, .sidebar-widget {
            animation: fadeIn 0.6s ease forwards;
        }
        
        /* Scrollbar */
        ::-webkit-scrollbar {
            width: 8px;
        }
        
        ::-webkit-scrollbar-track {
            background: #f1f5f9;
        }
        
        ::-webkit-scrollbar-thumb {
            background: var(--primary);
            border-radius: 10px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
            background: var(--primary-dark);
        }
    </style>
</head>
<body>
    <!-- Header Section -->
    <header>
        <div class="container">
            <div class="header-content">
                <h1><i class="fas fa-bolt"></i> أساسيات Async في Python</h1>
                <p>دليل شامل للمبتدئين لفهم البرمجة غير المتزامنة وتطبيقاتها العملية</p>
                <div class="header-badges">
                    <div class="badge"><i class="fas fa-clock"></i> غير متزامن</div>
                    <div class="badge"><i class="fas fa-tachometer-alt"></i> عالي الأداء</div>
                    <div class="badge"><i class="fas fa-code"></i> Python 3.5+</div>
                </div>
            </div>
        </div>
    </header>
    
    <!-- Navigation -->
    <nav>
        <div class="container nav-container">
            <div class="logo">
                <i class="fab fa-python"></i>
                <span>Async Python</span>
            </div>
            <ul>
                <li><a href="#intro"><i class="fas fa-home"></i> مقدمة</a></li>
                <li><a href="#concepts"><i class="fas fa-lightbulb"></i> المفاهيم</a></li>
                <li><a href="#syntax"><i class="fas fa-code"></i> بناء الجملة</a></li>
                <li><a href="#examples"><i class="fas fa-laptop-code"></i> أمثلة</a></li>
                <li><a href="#advanced"><i class="fas fa-rocket"></i> متقدم</a></li>
            </ul>
        </div>
    </nav>
    
    <!-- Main Content -->
    <div class="container">
        <div class="main-content">
            <!-- Main Content Area -->
            <div class="content">
                <!-- Introduction Section -->
                <section id="intro" class="content-card">
                    <h2><i class="fas fa-home"></i> مقدمة في البرمجة غير المتزامنة</h2>
                    <p>البرمجة غير المتزامنة (Asynchronous Programming) هي نموذج برمجي يسمح بتنفيذ مهام متعددة دون الحاجة إلى انتظار انتهاء كل مهمة قبل بدء التالية. هذا النموذج يحسن أداء التطبيقات خاصة تلك التي تتعامل مع عمليات الإدخال/الإخراج (I/O).</p>
                    
                    <div class="info-box">
                        <h3><i class="fas fa-info-circle"></i> لماذا نستخدم Async؟</h3>
                        <p>في البرمجة التقليدية المتزامنة، عندما يقوم البرنامج بإجراء عملية I/O (مثل طلب شبكة)، فإنه ينتظر حتى تكتمل هذه العملية قبل المتابعة. هذا يهدر وقت المعالج حيث يمكن استخدامه في تنفيذ مهام أخرى.</p>
                    </div>
                    
                    <h3>المشكلة التي يحلها Async</h3>
                    <p>تخيل أنك في مطعم:</p>
                    <ul>
                        <li><strong>الطريقة المتزامنة:</strong> تطلب طبقًا وتنتظر حتى يصبح جاهزًا قبل أن تطلب الطبق التالي.</li>
                        <li><strong>الطريقة غير المتزامنة:</strong> تطلب جميع الأطباق مرة واحدة، ثم تنتظر حتى تصبح جاهزة، مع إمكانية القيام بأمور أخرى أثناء الانتظار.</li>
                    </ul>
                </section>
                
                <!-- Concepts Section -->
                <section id="concepts" class="content-card">
                    <h2><i class="fas fa-lightbulb"></i> المفاهيم الأساسية</h2>
                    
                    <h3>المكونات الرئيسية</h3>
                    <div class="comparison-table">
                        <table>
                            <thead>
                                <tr>
                                    <th>المكون</th>
                                    <th>الوصف</th>
                                    <th>مثال</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Coroutine</td>
                                    <td>دالة يمكن إيقافها واستئنافها</td>
                                    <td>async def my_func():</td>
                                </tr>
                                <tr>
                                    <td>Event Loop</td>
                                    <td>يدير تنفيذ Coroutines</td>
                                    <td>asyncio.run()</td>
                                </tr>
                                <tr>
                                    <td>Task</td>
                                    <td>غلاف حول Coroutine للتشغيل المتزامن</td>
                                    <td>asyncio.create_task()</td>
                                </tr>
                                <tr>
                                    <td>Awaitable</td>
                                    <td>أي كائن يمكن استخدامه مع await</td>
                                    <td>Coroutine, Task, Future</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    
                    <h3>الفرق بين الأنماط المختلفة</h3>
                    <div class="comparison-table">
                        <table>
                            <thead>
                                <tr>
                                    <th>النموذج</th>
                                    <th>كيف يعمل</th>
                                    <th>مثال من الحياة</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>متزامن (Synchronous)</td>
                                    <td>تنفيذ المهام واحدة تلو الأخرى</td>
                                    <td>انتظار في طابور</td>
                                </tr>
                                <tr>
                                    <td>غير متزامن (Asynchronous)</td>
                                    <td>بدء مهام متعددة دون انتظار اكتمالها</td>
                                    <td>طلب طعام من عدة مطاعم</td>
                                </tr>
                                <tr>
                                    <td>متوازي (Parallel)</td>
                                    <td>تنفيذ مهام متعددة في نفس الوقت</td>
                                    <td>طهي أطباق على مواقد مختلفة</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
                
                <!-- Syntax Section -->
                <section id="syntax" class="content-card">
                    <h2><i class="fas fa-code"></i> بناء الجملة الأساسي</h2>
                    
                    <h3>تعريف دالة غير متزامنة</h3>
                    <p>لتعريف دالة غير متزامنة، نستخدم الكلمة المفتاحية <code>async</code> قبل <code>def</code>:</p>
                    
                    <div class="code-block">
                        <span class="code-keyword">async</span> <span class="code-keyword">def</span> <span class="code-function">my_async_function</span>():<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">return</span> <span class="code-string">"Hello, Async World!"</span>
                    </div>
                    
                    <div class="warning-box">
                        <h3><i class="fas fa-exclamation-triangle"></i> ملاحظة مهمة</h3>
                        <p>الدالة التي تبدأ بـ <code>async def</code> تسمى Coroutine، وعند استدعائها تعيد كائن Coroutine ولا يتم تنفيذها مباشرة.</p>
                    </div>
                    
                    <h3>استخدام await</h3>
                    <p>لانتظار اكتمال Coroutine آخر، نستخدم الكلمة المفتاحية <code>await</code>:</p>
                    
                    <div class="code-block">
                        <span class="code-keyword">async</span> <span class="code-keyword">def</span> <span class="code-function">main</span>():<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;result = <span class="code-keyword">await</span> my_async_function()<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">print</span>(result)
                    </div>
                    
                    <div class="info-box">
                        <h3><i class="fas fa-info-circle"></i> قاعدة مهمة</h3>
                        <p>يمكن استخدام <code>await</code> فقط داخل دالة غير متزامنة (async function).</p>
                    </div>
                    
                    <h3>تشغيل الكود غير المتزامن</h3>
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
                
                <!-- Examples Section -->
                <section id="examples" class="content-card">
                    <h2><i class="fas fa-laptop-code"></i> أمثلة عملية</h2>
                    
                    <h3>مثال 1: المهام المتزامنة</h3>
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
                    
                    <div class="success-box">
                        <h3><i class="fas fa-check-circle"></i> النتيجة</h3>
                        <p>في المثال أعلاه، الطريقة الأولى تستغرق 3 ثوانٍ (1+2)، بينما الطريقة الثانية تستغرق 2 ثانية فقط (أطول وقت انتظار).</p>
                    </div>
                    
                    <h3>مثال 2: جمع النتائج</h3>
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
                
                <!-- Advanced Section -->
                <section id="advanced" class="content-card">
                    <h2><i class="fas fa-rocket"></i> مفاهيم متقدمة</h2>
                    
                    <h3>الفرق بين Asyncio و Threading</h3>
                    <div class="comparison-table">
                        <table>
                            <thead>
                                <tr>
                                    <th>المعيار</th>
                                    <th>Asyncio</th>
                                    <th>Threading</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>نموذج التنفيذ</td>
                                    <td>تعاوني (Cooperative)</td>
                                    <td>توقعي (Preemptive)</td>
                                </tr>
                                <tr>
                                    <td>كفاءة الذاكرة</td>
                                    <td>عالية (خيط واحد)</td>
                                    <td>منخفضة (خيوط متعددة)</td>
                                </tr>
                                <tr>
                                    <td>مناسب لـ</td>
                                    <td>مهام I/O-bound</td>
                                    <td>مهام I/O-bound و CPU-bound</td>
                                </tr>
                                <tr>
                                    <td>تعقيد البرمجة</td>
                                    <td>منخفض (مع async/await)</td>
                                    <td>مرتفع (مشاكل التزامن)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    
                    <h3>أفضل الممارسات</h3>
                    <ul>
                        <li>استخدم <code>asyncio.run()</code> لتشغيل الدالة الرئيسية</li>
                        <li>استخدم <code>asyncio.create_task()</code> لإنشاء مهام متزامنة</li>
                        <li>استخدم مكتبات غير متزامنة مثل <code>aiohttp</code> بدلاً من <code>requests</code></li>
                        <li>تجنب استخدام عمليات حجب (blocking) داخل كود غير متزامن</li>
                    </ul>
                    
                    <div class="warning-box">
                        <h3><i class="fas fa-exclamation-triangle"></i> تحذير هام</h3>
                        <p>لا تستخدم عمليات حجب (blocking) مثل <code>time.sleep()</code> داخل كود غير متزامن - استخدم <code>asyncio.sleep()</code> بدلاً منها.</p>
                    </div>
                </section>
                
                <!-- Progress Section -->
                <section class="progress-section">
                    <div class="progress-header">
                        <h2>تقدمك في تعلم Async</h2>
                        <span id="progress-percent">0%</span>
                    </div>
                    <div class="progress-bar">
                        <div class="progress-fill" id="progress-fill"></div>
                    </div>
                    <div class="progress-steps">
                        <div class="progress-step completed" id="step1">
                            <div class="step-icon"><i class="fas fa-check"></i></div>
                            <div class="step-label">المقدمة</div>
                        </div>
                        <div class="progress-step completed" id="step2">
                            <div class="step-icon"><i class="fas fa-check"></i></div>
                            <div class="step-label">المفاهيم</div>
                        </div>
                        <div class="progress-step completed" id="step3">
                            <div class="step-icon"><i class="fas fa-check"></i></div>
                            <div class="step-label">البناء</div>
                        </div>
                        <div class="progress-step active" id="step4">
                            <div class="step-icon"><i class="fas fa-code"></i></div>
                            <div class="step-label">الأمثلة</div>
                        </div>
                        <div class="progress-step" id="step5">
                            <div class="step-icon"><i class="fas fa-rocket"></i></div>
                            <div class="step-label">المتقدم</div>
                        </div>
                    </div>
                </section>
            </div>
            
            <!-- Sidebar -->
            <aside class="sidebar">
                <div class="sidebar-widget">
                    <h3><i class="fas fa-bookmark"></i> محتويات سريعة</h3>
                    <ul>
                        <li><a href="#intro"><i class="fas fa-arrow-left"></i> مقدمة في Async</a></li>
                        <li><a href="#concepts"><i class="fas fa-arrow-left"></i> المفاهيم الأساسية</a></li>
                        <li><a href="#syntax"><i class="fas fa-arrow-left"></i> بناء الجملة</a></li>
                        <li><a href="#examples"><i class="fas fa-arrow-left"></i> أمثلة عملية</a></li>
                        <li><a href="#advanced"><i class="fas fa-arrow-left"></i> مفاهيم متقدمة</a></li>
                    </ul>
                </div>
                
                <div class="sidebar-widget">
                    <h3><i class="fas fa-download"></i> مكتبات مفيدة</h3>
                    <ul>
                        <li><a href="#"><i class="fas fa-external-link-alt"></i> aiohttp - للطلبات HTTP</a></li>
                        <li><a href="#"><i class="fas fa-external-link-alt"></i> aiofiles - للملفات</a></li>
                        <li><a href="#"><i class="fas fa-external-link-alt"></i> aiomysql - لـ MySQL</a></li>
                        <li><a href="#"><i class="fas fa-external-link-alt"></i> asyncpg - لـ PostgreSQL</a></li>
                    </ul>
                </div>
                
                <div class="sidebar-widget">
                    <h3><i class="fas fa-graduation-cap"></i> مصادر تعلم</h3>
                    <ul>
                        <li><a href="#"><i class="fas fa-book"></i> الوثائق الرسمية</a></li>
                        <li><a href="#"><i class="fas fa-video"></i> دروس فيديو</a></li>
                        <li><a href="#"><i class="fas fa-laptop"></i> تمارين تفاعلية</a></li>
                        <li><a href="#"><i class="fas fa-project-diagram"></i> مشاريع عملية</a></li>
                    </ul>
                </div>
            </aside>
        </div>
    </div>
    
    <!-- Footer -->
    <footer>
        <div class="container">
            <div class="footer-content">
                <div class="footer-column">
                    <h3>عن الدليل</h3>
                    <ul>
                        <li><a href="#"><i class="fas fa-info-circle"></i> حول المشروع</a></li>
                        <li><a href="#"><i class="fas fa-history"></i> تاريخ التحديثات</a></li>
                        <li><a href="#"><i class="fas fa-bug"></i> الإبلاغ عن خطأ</a></li>
                    </ul>
                </div>
                
                <div class="footer-column">
                    <h3>مصادر إضافية</h3>
                    <ul>
                        <li><a href="#"><i class="fab fa-python"></i> Python Documentation</a></li>
                        <li><a href="#"><i class="fas fa-book"></i> Real Python Tutorials</a></li>
                        <li><a href="#"><i class="fas fa-users"></i> مجتمع Async</a></li>
                    </ul>
                </div>
                
                <div class="footer-column">
                    <h3>التواصل</h3>
                    <ul>
                        <li><a href="#"><i class="fab fa-github"></i> GitHub</a></li>
                        <li><a href="#"><i class="fab fa-twitter"></i> Twitter</a></li>
                        <li><a href="#"><i class="fab fa-discord"></i> Discord</a></li>
                    </ul>
                </div>
            </div>
            
            <div class="footer-bottom">
                <p>تم إنشاء هذا الدليل بدقة وعناية لتقديم أفضل شرح لأساسيات البرمجة غير المتزامنة في Python &copy; 2023</p>
            </div>
        </div>
    </footer>

    <script>
        // تحديث شريط التقدم
        document.addEventListener('DOMContentLoaded', function() {
            const progressFill = document.getElementById('progress-fill');
            const progressPercent = document.getElementById('progress-percent');
            
            // محاكاة تقدم التعلم
            let progress = 0;
            const interval = setInterval(() => {
                progress += 5;
                if (progress >= 80) {
                    progress = 80;
                    clearInterval(interval);
                }
                progressFill.style.width = `${progress}%`;
                progressPercent.textContent = `${progress}%`;
            }, 200);
            
            // تنعيم التمرير للروابط الداخلية
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    
                    const targetId = this.getAttribute('href');
                    if (targetId === '#') return;
                    
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop - 100,
                            behavior: 'smooth'
                        });
                    }
                });
            });
            
            // تحديث خطوات التقدم بناءً على التمرير
            window.addEventListener('scroll', function() {
                const sections = document.querySelectorAll('.content-card');
                const progressSteps = document.querySelectorAll('.progress-step');
                
                sections.forEach((section, index) => {
                    const rect = section.getBoundingClientRect();
                    if (rect.top <= 150 && rect.bottom >= 150) {
                        progressSteps.forEach(step => step.classList.remove('active'));
                        progressSteps[index].classList.add('active');
                    }
                });
            });
        });
    </script>
</body>
</html>