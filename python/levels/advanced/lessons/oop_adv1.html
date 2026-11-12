<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>المسار الشامل للوراثة المتقدمة و MRO في Python</title>
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
            --purple: #9b59b6;
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
        
        h4 {
            color: var(--purple);
            margin: 1rem 0 0.5rem;
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
        
        .code-class {
            color: #a6e22e;
        }
        
        .code-number {
            color: #ae81ff;
        }
        
        .feature-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 20px;
            margin: 2rem 0;
        }
        
        .feature-card {
            background: var(--light);
            padding: 1.5rem;
            border-radius: 8px;
            border-left: 4px solid var(--secondary);
        }
        
        .feature-title {
            font-weight: bold;
            margin-bottom: 1rem;
            color: var(--primary);
            display: flex;
            align-items: center;
            gap: 10px;
        }
        
        .comparison-table {
            width: 100%;
            border-collapse: collapse;
            margin: 2rem 0;
            background: white;
        }
        
        .comparison-table th, .comparison-table td {
            border: 1px solid #ddd;
            padding: 1rem;
            text-align: right;
        }
        
        .comparison-table th {
            background: var(--primary);
            color: white;
        }
        
        .comparison-table tr:nth-child(even) {
            background: #f9f9f9;
        }
        
        .inheritance-diagram {
            text-align: center;
            margin: 2rem 0;
            padding: 2rem;
            background: var(--light);
            border-radius: 10px;
        }
        
        .class-box {
            display: inline-block;
            padding: 1rem 2rem;
            margin: 0.5rem;
            background: white;
            border: 2px solid var(--secondary);
            border-radius: 8px;
            font-weight: bold;
        }
        
        .arrow {
            font-size: 1.5rem;
            color: var(--primary);
            margin: 0 1rem;
        }
        
        .demo-container {
            background: white;
            border: 2px solid var(--light);
            border-radius: 10px;
            padding: 1.5rem;
            margin: 2rem 0;
        }
        
        .demo-controls {
            display: flex;
            gap: 10px;
            margin-bottom: 1rem;
            flex-wrap: wrap;
        }
        
        .demo-button {
            background: var(--secondary);
            color: white;
            border: none;
            padding: 0.8rem 1.5rem;
            border-radius: 5px;
            cursor: pointer;
            font-weight: 600;
            transition: background 0.3s ease;
        }
        
        .demo-button:hover {
            background: #2980b9;
        }
        
        .demo-output {
            background: #2d2d2d;
            color: white;
            padding: 1rem;
            border-radius: 5px;
            min-height: 200px;
            font-family: 'Consolas', 'Monaco', monospace;
            direction: ltr;
            overflow-y: auto;
            max-height: 400px;
            white-space: pre-wrap;
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
        
        .mro-visualization {
            background: white;
            padding: 2rem;
            border-radius: 10px;
            margin: 2rem 0;
            border-left: 4px solid var(--info);
        }
        
        .mro-step {
            margin: 1rem 0;
            padding: 1rem;
            background: var(--light);
            border-radius: 5px;
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
            
            .feature-grid {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <header>
        <div class="container">
            <h1>المسار الشامل للوراثة المتقدمة و MRO في Python</h1>
            <p class="subtitle">فهم عميق للوراثة المتعددة، نظام ترتيب حل الأساليب، والتطبيقات المتقدمة</p>
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
                <div class="path-item active" data-section="introduction">
                    <span class="badge badge-beginner">مقدمة</span>
                    أساسيات الوراثة
                </div>
                <div class="path-item" data-section="single-inheritance">
                    <span class="badge badge-beginner">مبتدئ</span>
                    الوراثة الأحادية
                </div>
                <div class="path-item" data-section="multiple-inheritance">
                    <span class="badge badge-intermediate">متوسط</span>
                    الوراثة المتعددة
                </div>
                <div class="path-item" data-section="mro-intro">
                    <span class="badge badge-intermediate">متوسط</span>
                    مقدمة في MRO
                </div>
                <div class="path-item" data-section="c3-linearization">
                    <span class="badge badge-advanced">متقدم</span>
                    خوارزمية C3
                </div>
                <div class="path-item" data-section="super-function">
                    <span class="badge badge-intermediate">متوسط</span>
                    دالة super()
                </div>
                <div class="path-item" data-section="method-resolution">
                    <span class="badge badge-advanced">متقدم</span>
                    عملية حل الأساليب
                </div>
                <div class="path-item" data-section="diamond-problem">
                    <span class="badge badge-advanced">متقدم</span>
                    مشكلة الماس
                </div>
                <div class="path-item" data-section="mixins">
                    <span class="badge badge-advanced">متقدم</span>
                    الـ Mixins
                </div>
                <div class="path-item" data-section="abc">
                    <span class="badge badge-advanced">متقدم</span>
                    الفئات المجردة
                </div>
                <div class="path-item" data-section="real-world">
                    <span class="badge badge-advanced">متقدم</span>
                    تطبيقات عملية
                </div>
                <div class="path-item" data-section="best-practices">
                    <span class="badge badge-advanced">متقدم</span>
                    أفضل الممارسات
                </div>
            </div>
            
            <div class="path-content">
                <!-- مقدمة -->
                <div id="introduction" class="content-section active">
                    <h2>مقدمة في الوراثة المتقدمة</h2>
                    <p>الوراثة (Inheritance) هي أحد أركان البرمجة كائنية التوجه (OOP) التي تسمح للفئة (Class) باكتساب خصائص وطرق فئة أخرى. في Python، تدعم الوراثة المتعددة مما يتطلب نظاماً متقدماً لإدارة ترتيب استدعاء الأساليب.</p>
                    
                    <h3>لماذا ندرس الوراثة المتقدمة و MRO؟</h3>
                    <div class="feature-grid">
                        <div class="feature-card">
                            <div class="feature-title">🧩 تصميم مرن</div>
                            <p>بناء هياكل فئات معقدة وقابلة لإعادة الاستخدام</p>
                        </div>
                        
                        <div class="feature-card">
                            <div class="feature-title">⚡ تجنب التكرار</div>
                            <p>إعادة استخدام الكود وتجنب التكرار غير الضروري</p>
                        </div>
                        
                        <div class="feature-card">
                            <div class="feature-title">🔍 فهم أعمق</div>
                            <p>فهم كيفية عمل Python داخلياً مع الفئات</p>
                        </div>
                        
                        <div class="feature-card">
                            <div class="feature-title">🚀 كود احترافي</div>
                            <p>كتابة كود أكثر قوة واحترافية</p>
                        </div>
                    </div>
                    
                    <h3>مفاهيم أساسية في الوراثة</h3>
                    <table class="comparison-table">
                        <thead>
                            <tr>
                                <th>المفهوم</th>
                                <th>الوصف</th>
                                <th>مثال</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>الفئة الأساسية (Parent)</td>
                                <td>الفئة التي يتم وراثة منها</td>
                                <td>class Animal</td>
                            </tr>
                            <tr>
                                <td>الفئة المشتقة (Child)</td>
                                <td>الفئة التي ترث من فئة أخرى</td>
                                <td>class Dog(Animal)</td>
                            </tr>
                            <tr>
                                <td>التغليف (Encapsulation)</td>
                                <td>إخفاء التفاصيل الداخلية</td>
                                <td>الخصائص الخاصة</td>
                            </tr>
                            <tr>
                                <td>تعدد الأشكال (Polymorphism)</td>
                                <td>أساليب بنفس الاسم تتصرف بشكل مختلف</td>
                                <td>method overriding</td>
                            </tr>
                        </tbody>
                    </table>
                    
                    <h3>البناء الأساسي للوراثة في Python</h3>
                    <div class="code-block">
                        <span class="code-comment"># فئة أساسية (Parent Class)</span><br>
                        <span class="code-keyword">class</span> <span class="code-class">Animal</span>:<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">def</span> <span class="code-function">__init__</span>(<span class="code-keyword">self</span>, name):<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">self</span>.name = name<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">def</span> <span class="code-function">speak</span>(<span class="code-keyword">self</span>):<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">return</span> <span class="code-string">"بعض الأصوات"</span><br>
                        <br>
                        <span class="code-comment"># فئة مشتقة (Child Class)</span><br>
                        <span class="code-keyword">class</span> <span class="code-class">Dog</span>(Animal):<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">def</span> <span class="code-function">speak</span>(<span class="code-keyword">self</span>):<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">return</span> <span class="code-string">"هاو هاو!"</span><br>
                        <br>
                        <span class="code-comment"># استخدام</span><br>
                        dog = Dog(<span class="code-string">"بادي"</span>)<br>
                        <span class="code-keyword">print</span>(dog.name)    <span class="code-comment"># بادي</span><br>
                        <span class="code-keyword">print</span>(dog.speak()) <span class="code-comment"># هاو هاو!</span>
                    </div>
                    
                    <div class="quiz-container">
                        <div class="quiz-question">1. ما هي الفئة الأساسية في المثال السابق؟</div>
                        <ul class="quiz-options">
                            <li class="quiz-option" data-correct="false">Dog</li>
                            <li class="quiz-option" data-correct="true">Animal</li>
                            <li class="quiz-option" data-correct="false">name</li>
                            <li class="quiz-option" data-correct="false">speak</li>
                        </ul>
                        <div class="quiz-feedback"></div>
                    </div>
                    
                    <div class="navigation-buttons">
                        <button class="nav-button" disabled>السابق</button>
                        <button class="nav-button" onclick="navigateTo('single-inheritance')">التالي</button>
                    </div>
                </div>
                
                <!-- الوراثة الأحادية -->
                <div id="single-inheritance" class="content-section">
                    <h2>الوراثة الأحادية (Single Inheritance)</h2>
                    <p>الوراثة الأحادية هي أبسط أشكال الوراثة، حيث ترث فئة واحدة من فئة أساسية واحدة فقط.</p>
                    
                    <h3>المفاهيم الأساسية</h3>
                    <div class="code-block">
                        <span class="code-keyword">class</span> <span class="code-class">Person</span>:<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">def</span> <span class="code-function">__init__</span>(<span class="code-keyword">self</span>, name, age):<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">self</span>.name = name<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">self</span>.age = age<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">def</span> <span class="code-function">introduce</span>(<span class="code-keyword">self</span>):<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">return</span> <span class="code-string">f"أنا <span class="code-keyword">{self.name}</span> وعمري <span class="code-keyword">{self.age}</span> سنة"</span><br>
                        <br>
                        <span class="code-keyword">class</span> <span class="code-class">Student</span>(Person):<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">def</span> <span class="code-function">__init__</span>(<span class="code-keyword">self</span>, name, age, student_id):<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-comment"># استدعاء منشئ الفئة الأساسية</span><br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;super().__init__(name, age)<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">self</span>.student_id = student_id<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">def</span> <span class="code-function">study</span>(<span class="code-keyword">self</span>):<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">return</span> <span class="code-string">f"<span class="code-keyword">{self.name}</span> يدرس"</span><br>
                        <br>
                        <span class="code-comment"># الاستخدام</span><br>
                        student = Student(<span class="code-string">"أحمد"</span>, <span class="code-number">20</span>, <span class="code-string">"S123"</span>)<br>
                        <span class="code-keyword">print</span>(student.introduce()) <span class="code-comment"># أنا أحمد وعمري 20 سنة</span><br>
                        <span class="code-keyword">print</span>(student.study())     <span class="code-comment"># أحمد يدرس</span><br>
                        <span class="code-keyword">print</span>(student.student_id)  <span class="code-comment"># S123</span>
                    </div>
                    
                    <h3>تجاوز الأساليب (Method Overriding)</h3>
                    <div class="code-block">
                        <span class="code-keyword">class</span> <span class="code-class">Employee</span>(Person):<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">def</span> <span class="code-function">__init__</span>(<span class="code-keyword">self</span>, name, age, salary):<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;super().__init__(name, age)<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">self</span>.salary = salary<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-comment"># تجاوز الأسلوب introduce</span><br>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">def</span> <span class="code-function">introduce</span>(<span class="code-keyword">self</span>):<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">return</span> <span class="code-string">f"أنا <span class="code-keyword">{self.name}</span>، عمري <span class="code-keyword">{self.age}</span>، وراتبي <span class="code-keyword">{self.salary}</span>"</span><br>
                        <br>
                        <span class="code-comment"># الاستخدام</span><br>
                        emp = Employee(<span class="code-string">"محمد"</span>, <span class="code-number">30</span>, <span class="code-number">5000</span>)<br>
                        <span class="code-keyword">print</span>(emp.introduce()) <span class="code-comment"># أنا محمد، عمري 30، وراتبي 5000</span>
                    </div>
                    
                    <h3>الوصول إلى الأساليب الأصلية</h3>
                    <div class="code-block">
                        <span class="code-keyword">class</span> <span class="code-class">Manager</span>(Employee):<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">def</span> <span class="code-function">__init__</span>(<span class="code-keyword">self</span>, name, age, salary, department):<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;super().__init__(name, age, salary)<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">self</span>.department = department<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">def</span> <span class="code-function">introduce</span>(<span class="code-keyword">self</span>):<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-comment"># استخدام super() للوصول إلى الأسلوب في الفئة الأساسية</span><br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;base_intro = super().introduce()<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">return</span> base_intro + <span class="code-string">f" وأنا مدير قسم <span class="code-keyword">{self.department}</span>"</span><br>
                        <br>
                        <span class="code-comment"># الاستخدام</span><br>
                        mgr = Manager(<span class="code-string">"فاطمة"</span>, <span class="code-number">35</span>, <span class="code-number">8000</span>, <span class="code-string">"التسويق"</span>)<br>
                        <span class="code-keyword">print</span>(mgr.introduce())<br>
                        <span class="code-comment"># أنا فاطمة، عمري 35، وراتبي 8000 وأنا مدير قسم التسويق</span>
                    </div>
                    
                    <div class="inheritance-diagram">
                        <h4>مخطط الوراثة الأحادية</h4>
                        <div class="class-box">Person</div><br>
                        <div class="arrow">↓</div><br>
                        <div class="class-box">Student</div>
                        <div class="class-box">Employee</div><br>
                        <div class="arrow">↓</div><br>
                        <div class="class-box">Manager</div>
                    </div>
                    
                    <div class="quiz-container">
                        <div class="quiz-question">2. ما ناتج الكود التالي؟<br>class A: pass<br>class B(A): pass<br>print(issubclass(B, A))</div>
                        <ul class="quiz-options">
                            <li class="quiz-option" data-correct="false">False</li>
                            <li class="quiz-option" data-correct="true">True</li>
                            <li class="quiz-option" data-correct="false">Error</li>
                            <li class="quiz-option" data-correct="false">None</li>
                        </ul>
                        <div class="quiz-feedback"></div>
                    </div>
                    
                    <div class="navigation-buttons">
                        <button class="nav-button" onclick="navigateTo('introduction')">السابق</button>
                        <button class="nav-button" onclick="navigateTo('multiple-inheritance')">التالي</button>
                    </div>
                </div>
                
                <!-- الوراثة المتعددة -->
                <div id="multiple-inheritance" class="content-section">
                    <h2>الوراثة المتعددة (Multiple Inheritance)</h2>
                    <p>الوراثة المتعددة تسمح لفئة واحدة بالوراثة من عدة فئات أساسية في نفس الوقت. هذه الميزة القوية تتطلب فهم نظام MRO لإدارة التعارضات.</p>
                    
                    <h3>البناء الأساسي للوراثة المتعددة</h3>
                    <div class="code-block">
                        <span class="code-keyword">class</span> <span class="code-class">Flyable</span>:<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">def</span> <span class="code-function">fly</span>(<span class="code-keyword">self</span>):<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">return</span> <span class="code-string">"يطير في السماء"</span><br>
                        <br>
                        <span class="code-keyword">class</span> <span class="code-class">Swimmable</span>:<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">def</span> <span class="code-function">swim</span>(<span class="code-keyword">self</span>):<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">return</span> <span class="code-string">"يسبح في الماء"</span><br>
                        <br>
                        <span class="code-keyword">class</span> <span class="code-class">Runnable</span>:<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">def</span> <span class="code-function">run</span>(<span class="code-keyword">self</span>):<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">return</span> <span class="code-string">"يجري على الأرض"</span><br>
                        <br>
                        <span class="code-comment"># فئة ترث من عدة فئات</span><br>
                        <span class="code-keyword">class</span> <span class="code-class">Duck</span>(Flyable, Swimmable, Runnable):<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">def</span> <span class="code-function">__init__</span>(<span class="code-keyword">self</span>, name):<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">self</span>.name = name<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">def</span> <span class="code-function">describe</span>(<span class="code-keyword">self</span>):<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">return</span> <span class="code-string">f"<span class="code-keyword">{self.name}</span> يمكنه: <span class="code-keyword">{self.fly()}</span>, <span class="code-keyword">{self.swim()}</span>, <span class="code-keyword">{self.run()}</span>"</span><br>
                        <br>
                        <span class="code-comment"># الاستخدام</span><br>
                        duck = Duck(<span class="code-string">"البطة"</span>)<br>
                        <span class="code-keyword">print</span>(duck.describe())<br>
                        <span class="code-comment"># البطة يمكنه: يطير في السماء, يسبح في الماء, يجري على الأرض</span>
                    </div>
                    
                    <h3>مشكلة التعارض في الأساليب</h3>
                    <div class="code-block">
                        <span class="code-keyword">class</span> <span class="code-class">A</span>:<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">def</span> <span class="code-function">method</span>(<span class="code-keyword">self</span>):<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">return</span> <span class="code-string">"أسلوب من A"</span><br>
                        <br>
                        <span class="code-keyword">class</span> <span class="code-class">B</span>:<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">def</span> <span class="code-function">method</span>(<span class="code-keyword">self</span>):<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">return</span> <span class="code-string">"أسلوب من B"</span><br>
                        <br>
                        <span class="code-keyword">class</span> <span class="code-class">C</span>(A, B):<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">pass</span><br>
                        <br>
                        <span class="code-keyword">class</span> <span class="code-class">D</span>(B, A):<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">pass</span><br>
                        <br>
                        <span class="code-comment"># الاختبار</span><br>
                        c = C()<br>
                        d = D()<br>
                        <br>
                        <span class="code-keyword">print</span>(<span class="code-string">"C().method():"</span>, c.method())  <span class="code-comment"># أسلوب من A</span><br>
                        <span class="code-keyword">print</span>(<span class="code-string">"D().method():"</span>, d.method())  <span class="code-comment"># أسلوب من B</span><br>
                        <br>
                        <span class="code-comment"># عرض ترتيب MRO</span><br>
                        <span class="code-keyword">print</span>(<span class="code-string">"MRO للفئة C:"</span>, [cls.__name__ <span class="code-keyword">for</span> cls <span class="code-keyword">in</span> C.__mro__])<br>
                        <span class="code-keyword">print</span>(<span class="code-string">"MRO للفئة D:"</span>, [cls.__name__ <span class="code-keyword">for</span> cls <span class="code-keyword">in</span> D.__mro__])
                    </div>
                    
                    <h3>مخطط الوراثة المتعددة</h3>
                    <div class="inheritance-diagram">
                        <h4>مخطط الوراثة المتعددة البسيط</h4>
                        <div class="class-box">A</div><span style="margin: 0 2rem;">+</span><div class="class-box">B</div><br>
                        <div class="arrow">↙</div><span style="display: inline-block; width: 100px;"></span><div class="arrow">↘</div><br>
                        <div class="class-box">C</div>
                    </div>
                    
                    <div class="demo-container">
                        <h3>تجربة الوراثة المتعددة</h3>
                        <div class="demo-controls">
                            <button class="demo-button" onclick="runMultipleInheritanceExample('basic')">الوراثة الأساسية</button>
                            <button class="demo-button" onclick="runMultipleInheritanceExample('conflict')">تعارض الأساليب</button>
                            <button class="demo-button" onclick="runMultipleInheritanceExample('mro')">عرض MRO</button>
                        </div>
                        <div id="multipleInheritanceOutput" class="demo-output">سيظهر الناتج هنا...</div>
                    </div>
                    
                    <div class="quiz-container">
                        <div class="quiz-question">3. في الوراثة المتعددة، إذا كانت الفئة C(A, B) وكان لكل من A و B أسلوب method()، فأي أسلوب سيتم استدعاؤه؟</div>
                        <ul class="quiz-options">
                            <li class="quiz-option" data-correct="false">أسلوب B دائماً</li>
                            <li class="quiz-option" data-correct="false">أسلوب A دائماً</li>
                            <li class="quiz-option" data-correct="true">أسلوب A (الأول في القائمة)</li>
                            <li class="quiz-option" data-correct="false">سيحدث خطأ</li>
                        </ul>
                        <div class="quiz-feedback"></div>
                    </div>
                    
                    <div class="navigation-buttons">
                        <button class="nav-button" onclick="navigateTo('single-inheritance')">السابق</button>
                        <button class="nav-button" onclick="navigateTo('mro-intro')">التالي</button>
                    </div>
                </div>
                
                <!-- مقدمة في MRO -->
                <div id="mro-intro" class="content-section">
                    <h2>مقدمة في MRO - Method Resolution Order</h2>
                    <p>MRO (ترتيب حل الأساليب) هو النظام الذي تستخدمه Python لتحديد أي أسلوب سيتم استدعاؤه عندما يكون هناك أسلوب بنفس الاسم في عدة فئات أساسية.</p>
                    
                    <h3>ما هو MRO ولماذا نحتاجه؟</h3>
                    <div class="feature-grid">
                        <div class="feature-card">
                            <div class="feature-title">🔍 حل التعارضات</div>
                            <p>تحديد أي أسلوب سيتم استدعاؤه عند التعارض</p>
                        </div>
                        
                        <div class="feature-card">
                            <div class="feature-title">📊 تنبؤ السلوك</div>
                            <p>التنبؤ بسلوك الكود في الوراثة المتعددة</p>
                        </div>
                        
                        <div class="feature-card">
                            <div class="feature-title">⚡ كفاءة التنفيذ</div>
                            <p>تحسين أداء البحث عن الأساليب</p>
                        </div>
                        
                        <div class="feature-card">
                            <div class="feature-title">🐍 خاصية Python</div>
                            <p>فهم كيفية عمل Python داخلياً</p>
                        </div>
                    </div>
                    
                    <h3>كيفية الوصول إلى MRO</h3>
                    <div class="code-block">
                        <span class="code-keyword">class</span> <span class="code-class">A</span>:<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">pass</span><br>
                        <br>
                        <span class="code-keyword">class</span> <span class="code-class">B</span>(A):<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">pass</span><br>
                        <br>
                        <span class="code-keyword">class</span> <span class="code-class">C</span>(A):<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">pass</span><br>
                        <br>
                        <span class="code-keyword">class</span> <span class="code-class">D</span>(B, C):<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">pass</span><br>
                        <br>
                        <span class="code-comment"># طرق مختلفة لعرض MRO</span><br>
                        <span class="code-keyword">print</span>(<span class="code-string">"طريقة 1 - __mro__:"</span>, [cls.__name__ <span class="code-keyword">for</span> cls <span class="code-keyword">in</span> D.__mro__])<br>
                        <span class="code-keyword">print</span>(<span class="code-string">"طريقة 2 - mro():"</span>, [cls.__name__ <span class="code-keyword">for</span> cls <span class="code-keyword">in</span> D.mro()])<br>
                        <span class="code-keyword">print</span>(<span class="code-string">"طريقة 3 - help():"</span>)<br>
                        <span class="code-comment"># help(D)</span><br>
                        <br>
                        <span class="code-comment"># المخرجات المتوقعة:</span><br>
                        <span class="code-comment"># طريقة 1 - __mro__: ['D', 'B', 'C', 'A', 'object']</span><br>
                        <span class="code-comment"># طريقة 2 - mro(): ['D', 'B', 'C', 'A', 'object']</span>
                    </div>
                    
                    <h3>مخطط MRO البصري</h3>
                    <div class="inheritance-diagram">
                        <h4>مخطط الماس الكلاسيكي</h4>
                        <div class="class-box">A</div><br>
                        <div class="arrow">↙</div><span style="display: inline-block; width: 80px;"></span><div class="arrow">↘</div><br>
                        <div class="class-box">B</div><span style="margin: 0 2rem;"></span><div class="class-box">C</div><br>
                        <div class="arrow">↘</div><span style="display: inline-block; width: 80px;"></span><div class="arrow">↙</div><br>
                        <div class="class-box">D</div><br>
                        <br>
                        <div class="mro-visualization">
                            <h4>ترتيب MRO: D → B → C → A → object</h4>
                            <div class="mro-step">1. ابدأ من الفئة D (الفئة الحالية)</div>
                            <div class="mro-step">2. انتقل إلى B (أول فئة أساسية)</div>
                            <div class="mro-step">3. ثم C (ثاني فئة أساسية)</div>
                            <div class="mro-step">4. ثم A (الفئة الأساسية المشتركة)</div>
                            <div class="mro-step">5. وأخيراً object (أصل جميع الفئات)</div>
                        </div>
                    </div>
                    
                    <h3>مثال عملي على MRO</h3>
                    <div class="code-block">
                        <span class="code-keyword">class</span> <span class="code-class">الأب</span>:<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">def</span> <span class="code-function">__init__</span>(<span class="code-keyword">self</span>):<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">print</span>(<span class="code-string">"منشئ الأب"</span>)<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">def</span> <span class="code-function">طريقة</span>(<span class="code-keyword">self</span>):<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">print</span>(<span class="code-string">"طريقة من الأب"</span>)<br>
                        <br>
                        <span class="code-keyword">class</span> <span class="code-class">الأم</span>:<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">def</span> <span class="code-function">__init__</span>(<span class="code-keyword">self</span>):<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">print</span>(<span class="code-string">"منشئ الأم"</span>)<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">def</span> <span class="code-function">طريقة</span>(<span class="code-keyword">self</span>):<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">print</span>(<span class="code-string">"طريقة من الأم"</span>)<br>
                        <br>
                        <span class="code-keyword">class</span> <span class="code-class">الابن</span>(الأب, الأم):<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">def</span> <span class="code-function">__init__</span>(<span class="code-keyword">self</span>):<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;super().__init__()<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">print</span>(<span class="code-string">"منشئ الابن"</span>)<br>
                        <br>
                        <span class="code-comment"># الاختبار</span><br>
                        ابن = الابن()<br>
                        ابن.طريقة()<br>
                        <span class="code-keyword">print</span>(<span class="code-string">"MRO:"</span>, [cls.__name__ <span class="code-keyword">for</span> cls <span class="code-keyword">in</span> الابن.__mro__])
                    </div>
                    
                    <div class="navigation-buttons">
                        <button class="nav-button" onclick="navigateTo('multiple-inheritance')">السابق</button>
                        <button class="nav-button" onclick="navigateTo('c3-linearization')">التالي</button>
                    </div>
                </div>
                
                <!-- باقي الأقسام بنفس النمط -->
                <div id="c3-linearization" class="content-section">
                    <h2>خوارزمية C3 Linearization</h2>
                    <p>محتويات قسم خوارزمية C3...</p>
                    <div class="navigation-buttons">
                        <button class="nav-button" onclick="navigateTo('mro-intro')">السابق</button>
                        <button class="nav-button" onclick="navigateTo('super-function')">التالي</button>
                    </div>
                </div>
                
                <div id="super-function" class="content-section">
                    <h2>دالة super() المتقدمة</h2>
                    <p>محتويات قسم دالة super...</p>
                    <div class="navigation-buttons">
                        <button class="nav-button" onclick="navigateTo('c3-linearization')">السابق</button>
                        <button class="nav-button" onclick="navigateTo('method-resolution')">التالي</button>
                    </div>
                </div>
                
                <div id="method-resolution" class="content-section">
                    <h2>عملية حل الأساليب</h2>
                    <p>محتويات قسم عملية حل الأساليب...</p>
                    <div class="navigation-buttons">
                        <button class="nav-button" onclick="navigateTo('super-function')">السابق</button>
                        <button class="nav-button" onclick="navigateTo('diamond-problem')">التالي</button>
                    </div>
                </div>
                
                <div id="diamond-problem" class="content-section">
                    <h2>مشكلة الماس (Diamond Problem)</h2>
                    <p>محتويات قسم مشكلة الماس...</p>
                    <div class="navigation-buttons">
                        <button class="nav-button" onclick="navigateTo('method-resolution')">السابق</button>
                        <button class="nav-button" onclick="navigateTo('mixins')">التالي</button>
                    </div>
                </div>
                
                <div id="mixins" class="content-section">
                    <h2>الـ Mixins وأنماط التصميم</h2>
                    <p>محتويات قسم الـ Mixins...</p>
                    <div class="navigation-buttons">
                        <button class="nav-button" onclick="navigateTo('diamond-problem')">السابق</button>
                        <button class="nav-button" onclick="navigateTo('abc')">التالي</button>
                    </div>
                </div>
                
                <div id="abc" class="content-section">
                    <h2>الفئات المجردة (Abstract Base Classes)</h2>
                    <p>محتويات قسم الفئات المجردة...</p>
                    <div class="navigation-buttons">
                        <button class="nav-button" onclick="navigateTo('mixins')">السابق</button>
                        <button class="nav-button" onclick="navigateTo('real-world')">التالي</button>
                    </div>
                </div>
                
                <div id="real-world" class="content-section">
                    <h2>تطبيقات عملية</h2>
                    <p>محتويات قسم التطبيقات العملية...</p>
                    <div class="navigation-buttons">
                        <button class="nav-button" onclick="navigateTo('abc')">السابق</button>
                        <button class="nav-button" onclick="navigateTo('best-practices')">التالي</button>
                    </div>
                </div>
                
                <div id="best-practices" class="content-section">
                    <h2>أفضل الممارسات</h2>
                    <p>محتويات قسم أفضل الممارسات...</p>
                    <div class="navigation-buttons">
                        <button class="nav-button" onclick="navigateTo('real-world')">السابق</button>
                        <button class="nav-button" disabled>التالي</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <footer>
        <div class="container">
            <p>المسار الشامل للوراثة المتقدمة و MRO في Python - فهم عميق للبرمجة كائنية التوجه</p>
            <p>يمكنك استخدام هذا المحتوى بحرية لأغراض التعليم</p>
        </div>
    </footer>

    <script>
        // بيانات التقدم
        let progress = 0;
        const totalSections = 12;
        const sections = [
            'introduction', 'single-inheritance', 'multiple-inheritance', 'mro-intro',
            'c3-linearization', 'super-function', 'method-resolution', 'diamond-problem',
            'mixins', 'abc', 'real-world', 'best-practices'
        ];
        
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
                navigateTo(sectionId);
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
        
        // أمثلة الوراثة المتعددة التفاعلية
        function runMultipleInheritanceExample(type) {
            const output = document.getElementById('multipleInheritanceOutput');
            let result = '';
            
            switch(type) {
                case 'basic':
                    result = `الوراثة المتعددة الأساسية:
                    
class Flyable:
    def fly(self):
        return "يطير في السماء"

class Swimmable:
    def swim(self):
        return "يسبح في الماء"

class Duck(Flyable, Swimmable):
    def __init__(self, name):
        self.name = name
    
    def describe(self):
        return f"{self.name} يمكنه: {self.fly()}, {self.swim()}"

# الاختبار
duck = Duck("البطة")
print(duck.describe())
# البطة يمكنه: يطير في السماء, يسبح في الماء

# عرض MRO
print("MRO:", [cls.__name__ for cls in Duck.__mro__])
# MRO: ['Duck', 'Flyable', 'Swimmable', 'object']`;
                    break;
                    
                case 'conflict':
                    result = `تعارض الأساليب في الوراثة المتعددة:
                    
class A:
    def method(self):
        return "أسلوب من A"

class B:
    def method(self):
        return "أسلوب من B"

class C(A, B):
    pass

class D(B, A):
    pass

# الاختبار
c = C()
d = D()

print("C().method():", c.method())  # أسلوب من A
print("D().method():", d.method())  # أسلوب من B

# عرض MRO
print("MRO للفئة C:", [cls.__name__ for cls in C.__mro__])
# MRO للفئة C: ['C', 'A', 'B', 'object']
print("MRO للفئة D:", [cls.__name__ for cls in D.__mro__])
# MRO للفئة D: ['D', 'B', 'A', 'object']`;
                    break;
                    
                case 'mro':
                    result = `عرض وتحليل MRO:
                    
class X: pass
class Y: pass
class Z: pass
class A(X, Y): pass
class B(Y, Z): pass
class M(A, B, Z): pass

# عرض MRO المعقد
print("MRO للفئة M:", [cls.__name__ for cls in M.__mro__])

# تفسير MRO:
# 1. M (الفئة الحالية)
# 2. A (أول فئة أساسية)
# 3. X (أول فئة أساسية لـ A)
# 4. B (ثاني فئة أساسية لـ M)
# 5. Y (مشتركة بين A و B، تظهر مرة واحدة)
# 6. Z (آخر فئة أساسية)
# 7. object (أصل جميع الفئات)

# التحقق من العلاقات
print("M هو subclass لـ A?", issubclass(M, A))
print("M هو subclass لـ B?", issubclass(M, B))
print("M هو subclass لـ Z?", issubclass(M, Z))`;
                    break;
            }
            
            output.textContent = result;
        }
        
        // تهيئة الصفحة
        document.addEventListener('DOMContentLoaded', () => {
            updateProgress();
        });
    </script>
</body>
</html>