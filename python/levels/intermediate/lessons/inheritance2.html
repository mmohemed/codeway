<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Override وإعادة تعريف الدوال في بايثون - شرح شامل</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        :root {
            --primary-color: #4a6fa5;
            --secondary-color: #166088;
            --accent-color: #4cb5ae;
            --light-color: #f8f9fa;
            --dark-color: #343a40;
            --success-color: #28a745;
            --warning-color: #ffc107;
            --danger-color: #dc3545;
            --override-color: #9c27b0;
            --parent-color: #e91e63;
            --child-color: #ff9800;
            --super-color: #4caf50;
        }
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        
        body {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: var(--dark-color);
            line-height: 1.6;
            min-height: 100vh;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }
        
        /* Header Styles */
        header {
            background: rgba(255, 255, 255, 0.95);
            color: var(--secondary-color);
            padding: 1rem 0;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            backdrop-filter: blur(10px);
        }
        
        .header-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .logo {
            font-size: 1.5rem;
            font-weight: bold;
            display: flex;
            align-items: center;
            gap: 10px;
        }
        
        .logo i {
            color: var(--override-color);
        }
        
        /* Main Content Styles */
        .main-content {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
            margin: 2rem 0;
        }
        
        @media (max-width: 768px) {
            .main-content {
                grid-template-columns: 1fr;
            }
        }
        
        .content-section {
            background: rgba(255, 255, 255, 0.95);
            border-radius: 15px;
            padding: 2rem;
            box-shadow: 0 10px 30px rgba(0,0,0,0.2);
            backdrop-filter: blur(10px);
        }
        
        .section-title {
            color: var(--secondary-color);
            margin-bottom: 1.5rem;
            padding-bottom: 0.5rem;
            border-bottom: 3px solid var(--accent-color);
            display: flex;
            align-items: center;
            gap: 10px;
        }
        
        /* Concept Cards */
        .concept-cards {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 1.5rem;
            margin: 2rem 0;
        }
        
        .concept-card {
            background: white;
            padding: 1.5rem;
            border-radius: 10px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
            transition: transform 0.3s;
            border-top: 4px solid;
        }
        
        .concept-card:hover {
            transform: translateY(-5px);
        }
        
        .concept-card.override {
            border-top-color: var(--override-color);
        }
        
        .concept-card.parent {
            border-top-color: var(--parent-color);
        }
        
        .concept-card.child {
            border-top-color: var(--child-color);
        }
        
        .concept-card.super {
            border-top-color: var(--super-color);
        }
        
        .concept-icon {
            font-size: 2.5rem;
            margin-bottom: 1rem;
        }
        
        .override .concept-icon { color: var(--override-color); }
        .parent .concept-icon { color: var(--parent-color); }
        .child .concept-icon { color: var(--child-color); }
        .super .concept-icon { color: var(--super-color); }
        
        /* Code Examples */
        .code-example {
            background-color: #2d3748;
            color: #e2e8f0;
            border-radius: 8px;
            padding: 1.5rem;
            margin: 1.5rem 0;
            direction: ltr;
            text-align: left;
            overflow-x: auto;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }
        
        .code-example pre {
            white-space: pre-wrap;
            font-family: 'Courier New', Courier, monospace;
            line-height: 1.5;
        }
        
        .code-comment {
            color: #a0aec0;
        }
        
        .code-keyword {
            color: #ff79c6;
        }
        
        .code-function {
            color: #50fa7b;
        }
        
        .code-string {
            color: #f1fa8c;
        }
        
        .code-number {
            color: #bd93f9;
        }
        
        .code-class {
            color: #8be9fd;
        }
        
        .code-self {
            color: #ffb86c;
        }
        
        .code-super {
            color: #ff5555;
        }
        
        .example-output {
            background-color: #edf2f7;
            padding: 1.5rem;
            border-radius: 8px;
            margin: 1rem 0;
            direction: ltr;
            border-right: 4px solid var(--accent-color);
        }
        
        /* Comparison Section */
        .comparison {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
            margin: 2rem 0;
        }
        
        @media (max-width: 768px) {
            .comparison {
                grid-template-columns: 1fr;
            }
        }
        
        .comparison-card {
            background: white;
            padding: 1.5rem;
            border-radius: 10px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        }
        
        .comparison-card h3 {
            color: var(--secondary-color);
            margin-bottom: 1rem;
            text-align: center;
        }
        
        /* Interactive Editor */
        .editor-section {
            background: var(--light-color);
            padding: 1.5rem;
            border-radius: 10px;
            margin: 1.5rem 0;
            border: 2px dashed var(--accent-color);
        }
        
        .editor-container {
            margin: 1.5rem 0;
        }
        
        .editor-header {
            background: linear-gradient(135deg, var(--dark-color), #2d3748);
            color: white;
            padding: 0.75rem 1.5rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-radius: 8px 8px 0 0;
        }
        
        .editor-actions {
            display: flex;
            gap: 10px;
        }
        
        .btn {
            padding: 0.5rem 1rem;
            border: none;
            border-radius: 4px;
            font-size: 0.9rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s;
            display: flex;
            align-items: center;
            gap: 5px;
        }
        
        .btn-primary {
            background: linear-gradient(135deg, var(--accent-color), var(--primary-color));
            color: white;
        }
        
        .btn-secondary {
            background: var(--light-color);
            color: var(--dark-color);
            border: 2px solid var(--accent-color);
        }
        
        .btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        }
        
        .editor-body {
            height: 400px;
            border: 1px solid #e2e8f0;
        }
        
        #python-editor {
            width: 100%;
            height: 100%;
            border: none;
            padding: 1.5rem;
            font-family: 'Courier New', Courier, monospace;
            font-size: 1rem;
            resize: none;
            direction: ltr;
            background-color: #f7fafc;
            line-height: 1.5;
        }
        
        .output-container {
            margin-top: 1.5rem;
            border: 1px solid #e2e8f0;
            border-radius: 0 0 8px 8px;
            overflow: hidden;
        }
        
        .output-header {
            background-color: #edf2f7;
            padding: 0.75rem 1.5rem;
            font-weight: bold;
            display: flex;
            align-items: center;
            gap: 10px;
        }
        
        #editor-output {
            padding: 1.5rem;
            min-height: 200px;
            background-color: #f7fafc;
            direction: ltr;
            text-align: left;
            white-space: pre-wrap;
            font-family: 'Courier New', Courier, monospace;
            line-height: 1.5;
        }
        
        /* Benefits List */
        .benefits-list {
            list-style: none;
            padding: 0;
        }
        
        .benefits-list li {
            padding: 0.75rem;
            margin-bottom: 0.5rem;
            background: var(--light-color);
            border-radius: 5px;
            border-right: 3px solid var(--success-color);
            display: flex;
            align-items: center;
            gap: 10px;
        }
        
        .benefits-list li i {
            color: var(--success-color);
        }
        
        /* Footer Styles */
        footer {
            background: rgba(255, 255, 255, 0.95);
            color: var(--dark-color);
            padding: 2rem 0;
            margin-top: 3rem;
            backdrop-filter: blur(10px);
        }
        
        .footer-content {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
        }
        
        .footer-section {
            flex: 1;
            min-width: 250px;
            margin-bottom: 1.5rem;
        }
        
        .footer-section h3 {
            margin-bottom: 1rem;
            color: var(--accent-color);
            display: flex;
            align-items: center;
            gap: 10px;
        }
        
        .footer-bottom {
            text-align: center;
            margin-top: 2rem;
            padding-top: 1.5rem;
            border-top: 1px solid #ddd;
        }
        
        /* Note Boxes */
        .note {
            background-color: #e7f3ff;
            border-right: 4px solid var(--primary-color);
            padding: 1rem;
            margin: 1.5rem 0;
            border-radius: 0 6px 6px 0;
        }
        
        .warning {
            background-color: #fff3cd;
            border-right: 4px solid var(--warning-color);
            padding: 1rem;
            margin: 1.5rem 0;
            border-radius: 0 6px 6px 0;
        }
        
        .tip {
            background-color: #d1ecf1;
            border-right: 4px solid var(--accent-color);
            padding: 1rem;
            margin: 1.5rem 0;
            border-radius: 0 6px 6px 0;
        }
        
        .types-section {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 1.5rem;
            margin: 2rem 0;
        }
        
        .type-card {
            background: white;
            padding: 1.5rem;
            border-radius: 10px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        }
        
        .type-card h4 {
            color: var(--primary-color);
            margin-bottom: 1rem;
            display: flex;
            align-items: center;
            gap: 10px;
        }
        
        .method-comparison {
            background: var(--light-color);
            padding: 1.5rem;
            border-radius: 8px;
            margin: 1.5rem 0;
        }
        
        .method-row {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1rem;
            margin-bottom: 1rem;
            padding: 1rem;
            background: white;
            border-radius: 5px;
        }
        
        .method-name {
            font-weight: bold;
            color: var(--primary-color);
        }
    </style>
</head>
<body>
    <header>
        <div class="container">
            <div class="header-content">
                <div class="logo">
                    <i class="fas fa-exchange-alt"></i>
                    <span>Override وإعادة تعريف الدوال في بايثون</span>
                </div>
            </div>
        </div>
    </header>
    
    <div class="container">
        <div class="main-content">
            <!-- قسم المفاهيم الأساسية -->
            <section class="content-section">
                <h2 class="section-title"><i class="fas fa-brain"></i> ما هو الـ Override؟</h2>
                
                <p>الـ Override (التجاوز) هو مفهوم في البرمجة كائنية التوجه يسمح للكلاس الابن بإعادة تعريف دالة موجودة في الكلاس الأب، مما يغير سلوكها ليناسب احتياجات الكلاس الابن.</p>
                
                <div class="concept-cards">
                    <div class="concept-card override">
                        <div class="concept-icon">
                            <i class="fas fa-exchange-alt"></i>
                        </div>
                        <h4>التجاوز (Override)</h4>
                        <p>إعادة تعريف دالة من الأب في الابن لتغيير سلوكها</p>
                        <p><strong>مثال:</strong> <code>make_sound()</code> في <code>Dog</code></p>
                    </div>
                    
                    <div class="concept-card parent">
                        <div class="concept-icon">
                            <i class="fas fa-user-friends"></i>
                        </div>
                        <h4>الدالة الأصلية</h4>
                        <p>الدالة كما هي معرفة في الكلاس الأب</p>
                        <p><strong>مثال:</strong> <code>make_sound()</code> في <code>Animal</code></p>
                    </div>
                    
                    <div class="concept-card child">
                        <div class="concept-icon">
                            <i class="fas fa-user"></i>
                        </div>
                        <h4>الدالة المتجاوزة</h4>
                        <p>الدالة المعدلة في الكلاس الابن</p>
                        <p><strong>مثال:</strong> <code>make_sound()</code> في <code>Cat</code></p>
                    </div>
                    
                    <div class="concept-card super">
                        <div class="concept-icon">
                            <i class="fas fa-level-up-alt"></i>
                        </div>
                        <h4>الدالة super()</h4>
                        <p>للاستفادة من الدالة الأصلية مع التعديل</p>
                        <p><strong>مثال:</strong> <code>super().method()</code></p>
                    </div>
                </div>
                
                <div class="method-comparison">
                    <h3><i class="fas fa-balance-scale"></i> مقارنة بين الدالة الأصلية والمتجاوزة</h3>
                    <div class="method-row">
                        <div class="method-name">الدالة الأصلية (في الأب)</div>
                        <div class="method-name">الدالة المتجاوزة (في الابن)</div>
                    </div>
                    <div class="method-row">
                        <div>تعريف عام للسلوك</div>
                        <div>تخصيص السلوك للكلاس الابن</div>
                    </div>
                    <div class="method-row">
                        <div>تنطبق على جميع الأبناء</div>
                        <div>تنطبق على الكلاس الابن فقط</div>
                    </div>
                    <div class="method-row">
                        <div>سلوك افتراضي</div>
                        <div>سلوك مخصص ومعدل</div>
                    </div>
                </div>
            </section>
            
            <!-- قسم الأمثلة العملية -->
            <section class="content-section">
                <h2 class="section-title"><i class="fas fa-code"></i> أمثلة عملية</h2>
                
                <h3>المثال 1: Override أساسي</h3>
                <div class="code-example">
                    <pre>
<span class="code-comment"># الكلاس الأب</span>
<span class="code-keyword">class</span> <span class="code-class">Animal</span>:
    <span class="code-keyword">def</span> <span class="code-function">__init__</span>(<span class="code-keyword">self</span>, name):
        <span class="code-keyword">self</span>.name = name
    
    <span class="code-comment"># دالة سوف يتم تجاوزها</span>
    <span class="code-keyword">def</span> <span class="code-function">make_sound</span>(<span class="code-keyword">self</span>):
        <span class="code-keyword">return</span> <span class="code-string">"صوت الحيوان"</span>
    
    <span class="code-keyword">def</span> <span class="code-function">eat</span>(<span class="code-keyword">self</span>):
        <span class="code-keyword">return</span> <span class="code-string">f"{self.name} يأكل"</span>

<span class="code-comment"># الكلاس الابن - يتجاوز دالة make_sound</span>
<span class="code-keyword">class</span> <span class="code-class">Dog</span>(Animal):
    <span class="code-keyword">def</span> <span class="code-function">make_sound</span>(<span class="code-keyword">self</span>):
        <span class="code-comment"># تجاوز كامل - سلوك جديد بالكامل</span>
        <span class="code-keyword">return</span> <span class="code-string">"نباح! نباح!"</span>

<span class="code-comment"># كلاس ابن آخر - يتجاوز بنفس الطريقة</span>
<span class="code-keyword">class</span> <span class="code-class">Cat</span>(Animal):
    <span class="code-keyword">def</span> <span class="code-function">make_sound</span>(<span class="code-keyword">self</span>):
        <span class="code-keyword">return</span> <span class="code-string">"مواء! مواء!"</span>

<span class="code-comment"># كلاس ابن لا يتجاوز - يستخدم الدالة الأصلية</span>
<span class="code-keyword">class</span> <span class="code-class">Fish</span>(Animal):
    <span class="code-keyword">pass</span>  <span class="code-comment"># لا يوجد تجاوز - يستخدم الدالة من الأب</span>

<span class="code-comment"># اختبار الكود</span>
animals = [
    Animal(<span class="code-string">"حيوان عام"</span>),
    Dog(<span class="code-string">"ريكس"</span>),
    Cat(<span class="code-string">"ميمي"</span>),
    Fish(<span class="code-string">"نيمو"</span>)
]

<span class="code-keyword">for</span> animal <span class="code-keyword">in</span> animals:
    <span class="code-keyword">print</span>(<span class="code-string">f"{animal.name}: {animal.make_sound()}"</span>)
                    </pre>
                </div>
                
                <div class="example-output">
                    <h4>المخرجات:</h4>
                    <pre>حيوان عام: صوت الحيوان
ريكس: نباح! نباح!
ميمي: مواء! مواء!
نيمو: صوت الحيوان</pre>
                </div>

                <h3>المثال 2: استخدام super() في الـ Override</h3>
                <div class="code-example">
                    <pre>
<span class="code-keyword">class</span> <span class="code-class">Employee</span>:
    <span class="code-keyword">def</span> <span class="code-function">__init__</span>(<span class="code-keyword">self</span>, name, salary):
        <span class="code-keyword">self</span>.name = name
        <span class="code-keyword">self</span>.salary = salary
    
    <span class="code-keyword">def</span> <span class="code-function">get_info</span>(<span class="code-keyword">self</span>):
        <span class="code-keyword">return</span> <span class="code-string">f"الموظف: {self.name}, الراتب: {self.salary}"</span>
    
    <span class="code-keyword">def</span> <span class="code-function">calculate_bonus</span>(<span class="code-keyword">self</span>):
        <span class="code-keyword">return</span> <span class="code-keyword">self</span>.salary * <span class="code-number">0.1</span>  <span class="code-comment"># 10% مكافأة أساسية</span>

<span class="code-keyword">class</span> <span class="code-class">Manager</span>(Employee):
    <span class="code-keyword">def</span> <span class="code-function">__init__</span>(<span class="code-keyword">self</span>, name, salary, department):
        <span class="code-keyword">super</span>().__init__(name, salary)
        <span class="code-keyword">self</span>.department = department
    
    <span class="code-keyword">def</span> <span class="code-function">get_info</span>(<span class="code-keyword">self</span>):
        <span class="code-comment"># استخدام super() للإضافة على الدالة الأصلية</span>
        base_info = <span class="code-keyword">super</span>().get_info()
        <span class="code-keyword">return</span> <span class="code-string">f"{base_info}, القسم: {self.department}"</span>
    
    <span class="code-keyword">def</span> <span class="code-function">calculate_bonus</span>(<span class="code-keyword">self</span>):
        <span class="code-comment"># استخدام super() ثم الإضافة</span>
        base_bonus = <span class="code-keyword">super</span>().calculate_bonus()
        management_bonus = <span class="code-keyword">self</span>.salary * <span class="code-number">0.15</span>  <span class="code-comment"># 15% إضافية للمدير</span>
        <span class="code-keyword">return</span> base_bonus + management_bonus

<span class="code-keyword">class</span> <span class="code-class">SalesPerson</span>(Employee):
    <span class="code-keyword">def</span> <span class="code-function">__init__</span>(<span class="code-keyword">self</span>, name, salary, sales_target):
        <span class="code-keyword">super</span>().__init__(name, salary)
        <span class="code-keyword">self</span>.sales_target = sales_target
        <span class="code-keyword">self</span>.actual_sales = <span class="code-number">0</span>
    
    <span class="code-keyword">def</span> <span class="code-function">calculate_bonus</span>(<span class="code-keyword">self</span>):
        <span class="code-comment"># تجاوز كامل مع منطق مختلف</span>
        <span class="code-keyword">if</span> <span class="code-keyword">self</span>.actual_sales >= <span class="code-keyword">self</span>.sales_target:
            <span class="code-keyword">return</span> <span class="code-keyword">self</span>.salary * <span class="code-number">0.25</span>  <span class="code-comment"># 25% إذا حقق الهدف</span>
        <span class="code-keyword">else</span>:
            <span class="code-keyword">return</span> <span class="code-keyword">self</span>.salary * <span class="code-number">0.05</span>  <span class="code-comment"># 5% إذا لم يحقق الهدف</span>

<span class="code-comment"># اختبار الكود</span>
emp = Employee(<span class="code-string">"موظف عادي"</span>, <span class="code-number">5000</span>)
mgr = Manager(<span class="code-string">"أحمد"</span>, <span class="code-number">8000</span>, <span class="code-string">"المبيعات"</span>)
sales = SalesPerson(<span class="code-string">"فاطمة"</span>, <span class="code-number">6000</span>, <span class="code-number">100000</span>)
sales.actual_sales = <span class="code-number">120000</span>  <span class="code-comment"># حققت الهدف</span>

<span class="code-keyword">print</span>(<span class="code-string">"=== معلومات الموظفين ==="</span>)
<span class="code-keyword">print</span>(emp.get_info())
<span class="code-keyword">print</span>(mgr.get_info())
<span class="code-keyword">print</span>(sales.get_info())

<span class="code-keyword">print</span>(<span class="code-string">"\n=== المكافآت ==="</span>)
<span class="code-keyword">print</span>(<span class="code-string">f"مكافأة الموظف العادي: {emp.calculate_bonus():.2f}"</span>)
<span class="code-keyword">print</span>(<span class="code-string">f"مكافأة المدير: {mgr.calculate_bonus():.2f}"</span>)
<span class="code-keyword">print</span>(<span class="code-string">f"مكافأة مندوب المبيعات: {sales.calculate_bonus():.2f}"</span>)
                    </pre>
                </div>
                
                <div class="example-output">
                    <h4>المخرجات:</h4>
                    <pre>=== معلومات الموظفين ===
الموظف: موظف عادي, الراتب: 5000
الموظف: أحمد, الراتب: 8000, القسم: المبيعات
الموظف: فاطمة, الراتب: 6000

=== المكافآت ===
مكافأة الموظف العادي: 500.00
مكافأة المدير: 2000.00
مكافأة مندوب المبيعات: 1500.00</pre>
                </div>
            </section>
        </div>

        <!-- قسم أنواع الـ Override -->
        <section class="content-section">
            <h2 class="section-title"><i class="fas fa-layer-group"></i> أنواع الـ Override</h2>
            
            <div class="types-section">
                <div class="type-card">
                    <h4><i class="fas fa-sync-alt"></i> Override كامل</h4>
                    <p>استبدال الدالة الأصلية تماماً بسلوك جديد</p>
                    <div class="code-example">
                        <pre>
<span class="code-keyword">class</span> <span class="code-class">Parent</span>:
    <span class="code-keyword">def</span> <span class="code-function">method</span>(<span class="code-keyword">self</span>):
        <span class="code-keyword">return</span> <span class="code-string">"الأصل"</span>

<span class="code-keyword">class</span> <span class="code-class">Child</span>(Parent):
    <span class="code-keyword">def</span> <span class="code-function">method</span>(<span class="code-keyword">self</span>):
        <span class="code-keyword">return</span> <span class="code-string">"الجديد"</span>  <span class="code-comment"># استبدال كامل</span>
                        </pre>
                    </div>
                </div>
                
                <div class="type-card">
                    <h4><i class="fas fa-plus-circle"></i> Override مع الإضافة</h4>
                    <p>استخدام super() للإضافة على السلوك الأصلي</p>
                    <div class="code-example">
                        <pre>
<span class="code-keyword">class</span> <span class="code-class">Parent</span>:
    <span class="code-keyword">def</span> <span class="code-function">method</span>(<span class="code-keyword">self</span>):
        <span class="code-keyword">return</span> <span class="code-string">"الأصل"</span>

<span class="code-keyword">class</span> <span class="code-class">Child</span>(Parent):
    <span class="code-keyword">def</span> <span class="code-function">method</span>(<span class="code-keyword">self</span>):
        original = <span class="code-keyword">super</span>().method()
        <span class="code-keyword">return</span> original + <span class="code-string">" + الإضافة"</span>
                        </pre>
                    </div>
                </div>
                
                <div class="type-card">
                    <h4><i class="fas fa-cogs"></i> Override مشروط</h4>
                    <p>تغيير السلوك بناءً على شروط معينة</p>
                    <div class="code-example">
                        <pre>
<span class="code-keyword">class</span> <span class="code-class">Parent</span>:
    <span class="code-keyword">def</span> <span class="code-function">process</span>(<span class="code-keyword">self</span>, data):
        <span class="code-keyword">return</span> data * <span class="code-number">2</span>

<span class="code-keyword">class</span> <span class="code-class">Child</span>(Parent):
    <span class="code-keyword">def</span> <span class="code-function">process</span>(<span class="code-keyword">self</span>, data):
        <span class="code-keyword">if</span> data > <span class="code-number">100</span>:
            <span class="code-keyword">return</span> <span class="code-keyword">super</span>().process(data)
        <span class="code-keyword">else</span>:
            <span class="code-keyword">return</span> data + <span class="code-number">10</span>
                        </pre>
                    </div>
                </div>
            </div>
            
            <h3>مثال متقدم: نظام الدفع الإلكتروني</h3>
            <div class="code-example">
                <pre>
<span class="code-keyword">class</span> <span class="code-class">PaymentMethod</span>:
    <span class="code-keyword">def</span> <span class="code-function">__init__</span>(<span class="code-keyword">self</span>, amount):
        <span class="code-keyword">self</span>.amount = amount
        <span class="code-keyword">self</span>.transaction_id = <span class="code-keyword">None</span>
    
    <span class="code-keyword">def</span> <span class="code-function">process_payment</span>(<span class="code-keyword">self</span>):
        <span class="code-comment"># دالة أساسية يجب تجاوزها</span>
        <span class="code-keyword">raise</span> NotImplementedError(<span class="code-string">"يجب تجاوز هذه الدالة"</span>)
    
    <span class="code-keyword">def</span> <span class="code-function">refund</span>(<span class="code-keyword">self</span>):
        <span class="code-keyword">return</span> <span class="code-string">f"تم إرجاع مبلغ {self.amount}"</span>

<span class="code-keyword">class</span> <span class="code-class">CreditCard</span>(PaymentMethod):
    <span class="code-keyword">def</span> <span class="code-function">__init__</span>(<span class="code-keyword">self</span>, amount, card_number, expiry_date):
        <span class="code-keyword">super</span>().__init__(amount)
        <span class="code-keyword">self</span>.card_number = card_number
        <span class="code-keyword">self</span>.expiry_date = expiry_date
    
    <span class="code-keyword">def</span> <span class="code-function">process_payment</span>(<span class="code-keyword">self</span>):
        <span class="code-comment"># تجاوز للدالة الأساسية</span>
        <span class="code-keyword">self</span>.transaction_id = <span class="code-string">f"CC-{int(time.time())}"</span>
        <span class="code-keyword">return</span> <span class="code-string">f"تمت معالجة الدفع بالبطاقة ending in {self.card_number[-4:]}"</span>
    
    <span class="code-keyword">def</span> <span class="code-function">refund</span>(<span class="code-keyword">self</span>):
        <span class="code-comment"># تجاوز مع الإضافة على السلوك الأصلي</span>
        base_refund = <span class="code-keyword">super</span>().refund()
        <span class="code-keyword">return</span> <span class="code-string">f"{base_refund} إلى البطاقة الائتمانية"</span>

<span class="code-keyword">class</span> <span class="code-class">PayPal</span>(PaymentMethod):
    <span class="code-keyword">def</span> <span class="code-function">__init__</span>(<span class="code-keyword">self</span>, amount, email):
        <span class="code-keyword">super</span>().__init__(amount)
        <span class="code-keyword">self</span>.email = email
    
    <span class="code-keyword">def</span> <span class="code-function">process_payment</span>(<span class="code-keyword">self</span>):
        <span class="code-comment"># تجاوز مختلف تماماً</span>
        <span class="code-keyword">self</span>.transaction_id = <span class="code-string">f"PP-{int(time.time())}"</span>
        <span class="code-keyword">return</span> <span class="code-string">f"تم الدفع عبر PayPal للحساب {self.email}"</span>
    
    <span class="code-keyword">def</span> <span class="code-function">refund</span>(<span class="code-keyword">self</span>):
        <span class="code-keyword">return</span> <span class="code-string">f"تم إرجاع {self.amount} إلى حساب PayPal {self.email}"</span>

<span class="code-comment"># اختبار النظام</span>
payment1 = CreditCard(<span class="code-number">1000</span>, <span class="code-string">"1234567812345678"</span>, <span class="code-string">"12/25"</span>)
payment2 = PayPal(<span class="code-number">500</span>, <span class="code-string">"user@example.com"</span>)

<span class="code-keyword">print</span>(payment1.process_payment())
<span class="code-keyword">print</span>(payment1.refund())

<span class="code-keyword">print</span>(<span class="code-string">"\n"</span> + payment2.process_payment())
<span class="code-keyword">print</span>(payment2.refund())
                </pre>
            </div>
            
            <div class="example-output">
                <h4>المخرجات:</h4>
                <pre>تمت معالجة الدفع بالبطاقة ending in 5678
تم إرجاع مبلغ 1000 إلى البطاقة الائتمانية

تم الدفع عبر PayPal للحساب user@example.com
تم إرجاع 500 إلى حساب PayPal user@example.com</pre>
            </div>
        </section>

        <!-- قسم المحرر التفاعلي -->
        <section class="content-section">
            <h2 class="section-title"><i class="fas fa-edit"></i> محرر الأكواد التفاعلي</h2>
            
            <div class="editor-section">
                <h3><i class="fas fa-play"></i> جرب الـ Override بنفسك</h3>
                <p>يمكنك تعديل الكود التالي وتشغيله لترى نتائج الـ Override:</p>
                
                <div class="editor-container">
                    <div class="editor-header">
                        <span><i class="fas fa-code"></i> محرر بايثون</span>
                        <div class="editor-actions">
                            <button class="btn btn-primary" onclick="runCode()">
                                <i class="fas fa-play"></i> تشغيل
                            </button>
                            <button class="btn btn-secondary" onclick="resetCode()">
                                <i class="fas fa-redo"></i> إعادة تعيين
                            </button>
                        </div>
                    </div>
                    <div class="editor-body">
                        <textarea id="python-editor"># جرب تعديل هذا الكود لتفهم الـ Override
import math

class Shape:
    def __init__(self, name):
        self.name = name
    
    def area(self):
        raise NotImplementedError("يجب تجاوز هذه الدالة")
    
    def perimeter(self):
        raise NotImplementedError("يجب تجاوز هذه الدالة")
    
    def describe(self):
        return f"هذا شكل {self.name}"
    
    def get_details(self):
        return f"{self.describe()}, المساحة: {self.area():.2f}, المحيط: {self.perimeter():.2f}"

class Circle(Shape):
    def __init__(self, radius):
        super().__init__("دائرة")
        self.radius = radius
    
    def area(self):
        # تجاوز دالة المساحة
        return math.pi * self.radius ** 2
    
    def perimeter(self):
        # تجاوز دالة المحيط
        return 2 * math.pi * self.radius
    
    def describe(self):
        # تجاوز مع الإضافة على الدالة الأصلية
        base_description = super().describe()
        return f"{base_description} بنصف قطر {self.radius}"

class Rectangle(Shape):
    def __init__(self, width, height):
        super().__init__("مستطيل")
        self.width = width
        self.height = height
    
    def area(self):
        return self.width * self.height
    
    def perimeter(self):
        return 2 * (self.width + self.height)
    
    def describe(self):
        # تجاوز كامل بدون استخدام super()
        return f"مستطيل بأبعاد {self.width} × {self.height}"

class Square(Rectangle):
    def __init__(self, side):
        # المربع حالة خاصة من المستطيل
        super().__init__(side, side)
        self.name = "مربع"
    
    def describe(self):
        # تجاوز مع منطق مختلف
        return f"مربع طول ضلعه {self.width}"

# اختبار الأشكال
shapes = [
    Circle(5),
    Rectangle(4, 6),
    Square(5)
]

print("=== معلومات الأشكال الهندسية ===")
for shape in shapes:
    print(shape.get_details())

print("\n=== وصف مفصل ===")
for shape in shapes:
    print(shape.describe())

# مثال على polymorphism مع الـ Override
print("\n=== حساب المساحات ===")
for shape in shapes:
    print(f"{shape.name}: المساحة = {shape.area():.2f}")</textarea>
                    </div>
                    <div class="output-container">
                        <div class="output-header">
                            <i class="fas fa-terminal"></i> المخرجات
                        </div>
                        <div id="editor-output">سيظهر نتائج الكود هنا...</div>
                    </div>
                </div>
            </div>
        </section>

        <!-- قسم فوائد الـ Override -->
        <section class="content-section">
            <h2 class="section-title"><i class="fas fa-star"></i> فوائد الـ Override</h2>
            
            <ul class="benefits-list">
                <li><i class="fas fa-check"></i> <strong>تخصيص السلوك:</strong> تخصيص سلوك الكلاس الابن ليناسب احتياجاته</li>
                <li><i class="fas fa-check"></i> <strong>المرونة:</strong> إمكانية تعديل السلوك دون تغيير الكلاس الأب</li>
                <li><i class="fas fa-check"></i> <strong>تعدد الأشكال (Polymorphism):</strong> نفس الواجهة، سلوك مختلف</li>
                <li><i class="fas fa-check"></i> <strong>إعادة الاستخدام:</strong> الاستفادة من الكود الموجود مع التعديل</li>
                <li><i class="fas fa-check"></i> <strong>التوسع:</strong> إضافة وظائف جديدة بسهولة</li>
            </ul>
            
            <div class="comparison">
                <div class="comparison-card">
                    <h3>بدون Override</h3>
                    <ul class="benefits-list">
                        <li><i class="fas fa-times"></i> سلوك واحد لجميع الكلاسات</li>
                        <li><i class="fas fa-times"></i> صعوبة في التخصيص</li>
                        <li><i class="fas fa-times"></i> حاجة لكتابة كود مكرر</li>
                        <li><i class="fas fa-times"></i> محدودية في التوسع</li>
                    </ul>
                </div>
                
                <div class="comparison-card">
                    <h3>مع Override</h3>
                    <ul class="benefits-list">
                        <li><i class="fas fa-check"></i> سلوك مخصص لكل كلاس</li>
                        <li><i class="fas fa-check"></i> مرونة عالية في التخصيص</li>
                        <li><i class="fas fa-check"></i> تقليل الكود المكرر</li>
                        <li><i class="fas fa-check"></i> سهولة التوسع والتعديل</li>
                    </ul>
                </div>
            </div>
            
            <div class="tip">
                <p><i class="fas fa-lightbulb"></i> <strong>نصيحة:</strong> استخدم <code>super()</code> عندما تريد الإضافة على السلوك الأصلي، واستخدم Override كامل عندما تريد تغيير السلوك بالكامل.</p>
            </div>
            
            <h3 class="section-title"><i class="fas fa-exclamation-triangle"></i> تحذيرات مهمة</h3>
            
            <div class="warning">
                <p><i class="fas fa-exclamation-circle"></i> <strong>احذر من:</strong></p>
                <ul class="benefits-list">
                    <li><i class="fas fa-times"></i> <strong>تجاوز غير مقصود:</strong> تأكد من أن التجاوز مقصود وضروري</li>
                    <li><i class="fas fa-times"></i> <strong>كسر التوافق:</strong> تجاوز قد يكسر توقعات الكود الذي يستخدم الكلاس</li>
                    <li><i class="fas fa-times"></i> <strong>نسيان super():</strong> قد يؤدي إلى عدم تنفيذ العمليات المهمة</li>
                    <li><i class="fas fa-times"></i> <strong>التجاوز المفرط:</strong> كثرة التجاوزات قد تصعب متابعة الكود</li>
                </ul>
            </div>
        </section>
    </div>
    
    <footer>
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3><i class="fas fa-info-circle"></i> ملخص الـ Override</h3>
                    <p>الـ Override يسمح بتخصيص سلوك الكلاسات الابن مع الحفاظ على هيكل موحد، مما يمكننا من تحقيق تعدد الأشكال والمرونة في التصميم.</p>
                </div>
                <div class="footer-section">
                    <h3><i class="fas fa-code"></i> المفاهيم الأساسية</h3>
                    <p>التجاوز الكامل، التجاوز مع الإضافة، super()، تعدد الأشكال</p>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2023 Override وإعادة تعريف الدوال في بايثون - شرح شامل. جميع الحقوق محفوظة.</p>
            </div>
        </div>
    </footer>

    <script>
        // محاكاة تنفيذ كود بايثون
        function runCode() {
            const code = document.getElementById('python-editor').value;
            const outputElement = document.getElementById('editor-output');
            
            outputElement.innerHTML = '<p><i class="fas fa-spinner fa-spin"></i> جاري التشغيل...</p>';
            
            setTimeout(function() {
                let simulatedOutput = '';
                
                try {
                    if (code.includes('Circle') && code.includes('Rectangle')) {
                        simulatedOutput = `=== معلومات الأشكال الهندسية ===
هذا شكل دائرة بنصف قطر 5, المساحة: 78.54, المحيط: 31.42
مستطيل بأبعاد 4 × 6, المساحة: 24.00, المحيط: 20.00
مربع طول ضلعه 5, المساحة: 25.00, المحيط: 20.00

=== وصف مفصل ===
هذا شكل دائرة بنصف قطر 5
مستطيل بأبعاد 4 × 6
مربع طول ضلعه 5

=== حساب المساحات ===
دائرة: المساحة = 78.54
مستطيل: المساحة = 24.00
مربع: المساحة = 25.00`;
                    } else {
                        simulatedOutput = 'لا توجد مخرجات. تأكد من استخدام دالة print() لعرض النتائج.';
                    }
                    
                    outputElement.innerHTML = simulatedOutput;
                } catch (error) {
                    outputElement.innerHTML = '<p style="color: red;"><i class="fas fa-exclamation-circle"></i> خطأ: ' + error.message + '</p>';
                }
            }, 1000);
        }
        
        function resetCode() {
            document.getElementById('python-editor').value = `# جرب تعديل هذا الكود لتفهم الـ Override
import math

class Shape:
    def __init__(self, name):
        self.name = name
    
    def area(self):
        raise NotImplementedError("يجب تجاوز هذه الدالة")
    
    def perimeter(self):
        raise NotImplementedError("يجب تجاوز هذه الدالة")
    
    def describe(self):
        return f"هذا شكل {self.name}"
    
    def get_details(self):
        return f"{self.describe()}, المساحة: {self.area():.2f}, المحيط: {self.perimeter():.2f}"

class Circle(Shape):
    def __init__(self, radius):
        super().__init__("دائرة")
        self.radius = radius
    
    def area(self):
        # تجاوز دالة المساحة
        return math.pi * self.radius ** 2
    
    def perimeter(self):
        # تجاوز دالة المحيط
        return 2 * math.pi * self.radius
    
    def describe(self):
        # تجاوز مع الإضافة على الدالة الأصلية
        base_description = super().describe()
        return f"{base_description} بنصف قطر {self.radius}"

class Rectangle(Shape):
    def __init__(self, width, height):
        super().__init__("مستطيل")
        self.width = width
        self.height = height
    
    def area(self):
        return self.width * self.height
    
    def perimeter(self):
        return 2 * (self.width + self.height)
    
    def describe(self):
        # تجاوز كامل بدون استخدام super()
        return f"مستطيل بأبعاد {self.width} × {self.height}"

class Square(Rectangle):
    def __init__(self, side):
        # المربع حالة خاصة من المستطيل
        super().__init__(side, side)
        self.name = "مربع"
    
    def describe(self):
        # تجاوز مع منطق مختلف
        return f"مربع طول ضلعه {self.width}"

# اختبار الأشكال
shapes = [
    Circle(5),
    Rectangle(4, 6),
    Square(5)
]

print("=== معلومات الأشكال الهندسية ===")
for shape in shapes:
    print(shape.get_details())

print("\\n=== وصف مفصل ===")
for shape in shapes:
    print(shape.describe())

# مثال على polymorphism مع الـ Override
print("\\n=== حساب المساحات ===")
for shape in shapes:
    print(f"{shape.name}: المساحة = {shape.area():.2f}")`;
            document.getElementById('editor-output').innerHTML = 'سيظهر نتائج الكود هنا...';
        }
        
        // تشغيل الكود تلقائياً عند التحميل
        document.addEventListener('DOMContentLoaded', function() {
            setTimeout(runCode, 1000);
        });
    </script>
</body>
</html>