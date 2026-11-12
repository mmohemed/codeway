<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>الوراثة في البرمجة كائنية التوجه - شرح شامل</title>
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
            --inheritance-color: #9c27b0;
            --parent-color: #e91e63;
            --child-color: #ff9800;
            --override-color: #4caf50;
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
            color: var(--inheritance-color);
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
        
        .concept-card.inheritance {
            border-top-color: var(--inheritance-color);
        }
        
        .concept-card.parent {
            border-top-color: var(--parent-color);
        }
        
        .concept-card.child {
            border-top-color: var(--child-color);
        }
        
        .concept-card.override {
            border-top-color: var(--override-color);
        }
        
        .concept-icon {
            font-size: 2.5rem;
            margin-bottom: 1rem;
        }
        
        .inheritance .concept-icon { color: var(--inheritance-color); }
        .parent .concept-icon { color: var(--parent-color); }
        .child .concept-icon { color: var(--child-color); }
        .override .concept-icon { color: var(--override-color); }
        
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
        
        /* Inheritance Tree */
        .inheritance-tree {
            background: var(--light-color);
            padding: 2rem;
            border-radius: 10px;
            margin: 2rem 0;
            text-align: center;
            border: 2px dashed var(--accent-color);
        }
        
        .tree-level {
            display: flex;
            justify-content: center;
            gap: 2rem;
            margin: 1rem 0;
        }
        
        .tree-node {
            background: white;
            padding: 1rem;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            min-width: 150px;
            border: 2px solid;
        }
        
        .tree-node.parent {
            border-color: var(--parent-color);
        }
        
        .tree-node.child {
            border-color: var(--child-color);
        }
        
        .tree-connector {
            height: 40px;
            width: 2px;
            background: var(--dark-color);
            margin: 0 auto;
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
            height: 350px;
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
        
        /* Comparison Tables */
        .comparison-table {
            width: 100%;
            border-collapse: collapse;
            margin: 1.5rem 0;
            box-shadow: 0 4px 6px rgba(0,0,0,0.05);
            border-radius: 8px;
            overflow: hidden;
        }
        
        .comparison-table th {
            background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
            color: white;
            padding: 1rem;
            text-align: right;
        }
        
        .comparison-table td {
            padding: 1rem;
            border-bottom: 1px solid #e2e8f0;
        }
        
        .comparison-table tr:nth-child(even) {
            background-color: #f8f9fa;
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
    </style>
</head>
<body>
    <header>
        <div class="container">
            <div class="header-content">
                <div class="logo">
                    <i class="fas fa-sitemap"></i>
                    <span>الوراثة في البرمجة كائنية التوجه</span>
                </div>
            </div>
        </div>
    </header>
    
    <div class="container">
        <div class="main-content">
            <!-- قسم المفاهيم الأساسية -->
            <section class="content-section">
                <h2 class="section-title"><i class="fas fa-brain"></i> ما هي الوراثة؟</h2>
                
                <p>الوراثة (Inheritance) هي أحد أركان البرمجة كائنية التوجه التي تسمح بإنشاء كلاس جديد (ابن) بناءً على كلاس موجود (أب)، حيث يرث الكلاس الابن جميع خصائص ودوال الكلاس الأب.</p>
                
                <div class="concept-cards">
                    <div class="concept-card inheritance">
                        <div class="concept-icon">
                            <i class="fas fa-sitemap"></i>
                        </div>
                        <h4>الوراثة</h4>
                        <p>آلية تسمح لكلاس بوراثة خصائص ودوال كلاس آخر</p>
                        <p><strong>الصيغة:</strong> <code>class Child(Parent):</code></p>
                    </div>
                    
                    <div class="concept-card parent">
                        <div class="concept-icon">
                            <i class="fas fa-user-friends"></i>
                        </div>
                        <h4>الكلاس الأب</h4>
                        <p>الكلاس الأساسي الذي يتم الوراثة منه (Superclass)</p>
                        <p><strong>مثال:</strong> <code>Animal</code>, <code>Vehicle</code></p>
                    </div>
                    
                    <div class="concept-card child">
                        <div class="concept-icon">
                            <i class="fas fa-user"></i>
                        </div>
                        <h4>الكلاس الابن</h4>
                        <p>الكلاس الذي يرث من الأب (Subclass)</p>
                        <p><strong>مثال:</strong> <code>Dog</code>, <code>Car</code></p>
                    </div>
                    
                    <div class="concept-card override">
                        <div class="concept-icon">
                            <i class="fas fa-exchange-alt"></i>
                        </div>
                        <h4>تجاوز الدوال</h4>
                        <p>إعادة تعريف دوال الأب في الابن لتعديل السلوك</p>
                        <p><strong>مثال:</strong> <code>def make_sound(self):</code></p>
                    </div>
                </div>
                
                <div class="inheritance-tree">
                    <h3><i class="fas fa-project-diagram"></i> شجرة الوراثة</h3>
                    <div class="tree-level">
                        <div class="tree-node parent">
                            <strong>الكلاس الأب</strong><br>
                            Animal
                        </div>
                    </div>
                    <div class="tree-connector"></div>
                    <div class="tree-level">
                        <div class="tree-node child">
                            <strong>الكلاس الابن</strong><br>
                            Dog
                        </div>
                        <div class="tree-node child">
                            <strong>الكلاس الابن</strong><br>
                            Cat
                        </div>
                        <div class="tree-node child">
                            <strong>الكلاس الابن</strong><br>
                            Bird
                        </div>
                    </div>
                </div>
            </section>
            
            <!-- قسم الأمثلة العملية -->
            <section class="content-section">
                <h2 class="section-title"><i class="fas fa-code"></i> أمثلة عملية</h2>
                
                <h3>المثال 1: وراثة أساسية</h3>
                <div class="code-example">
                    <pre>
<span class="code-comment"># الكلاس الأب (الأساسي)</span>
<span class="code-keyword">class</span> <span class="code-class">Animal</span>:
    <span class="code-keyword">def</span> <span class="code-function">__init__</span>(<span class="code-keyword">self</span>, name, age):
        <span class="code-keyword">self</span>.name = name
        <span class="code-keyword">self</span>.age = age
        <span class="code-keyword">self</span>.is_alive = <span class="code-keyword">True</span>
    
    <span class="code-keyword">def</span> <span class="code-function">eat</span>(<span class="code-keyword">self</span>):
        <span class="code-keyword">return</span> <span class="code-string">f"{self.name} يأكل"</span>
    
    <span class="code-keyword">def</span> <span class="code-function">sleep</span>(<span class="code-keyword">self</span>):
        <span class="code-keyword">return</span> <span class="code-string">f"{self.name} ينام"</span>
    
    <span class="code-keyword">def</span> <span class="code-function">make_sound</span>(<span class="code-keyword">self</span>):
        <span class="code-keyword">return</span> <span class="code-string">"صوت الحيوان"</span>

<span class="code-comment"># الكلاس الابن - يرث من Animal</span>
<span class="code-keyword">class</span> <span class="code-class">Dog</span>(Animal):
    <span class="code-keyword">def</span> <span class="code-function">__init__</span>(<span class="code-keyword">self</span>, name, age, breed):
        <span class="code-comment"># استدعاء منشئ الأب</span>
        <span class="code-keyword">super</span>().__init__(name, age)
        <span class="code-keyword">self</span>.breed = breed
    
    <span class="code-comment"># تجاوز دالة الأب</span>
    <span class="code-keyword">def</span> <span class="code-function">make_sound</span>(<span class="code-keyword">self</span>):
        <span class="code-keyword">return</span> <span class="code-string">"نباح! نباح!"</span>
    
    <span class="code-comment"># دالة جديدة في الابن</span>
    <span class="code-keyword">def</span> <span class="code-function">fetch</span>(<span class="code-keyword">self</span>):
        <span class="code-keyword">return</span> <span class="code-string">f"{self.name} يجلب العصا"</span>

<span class="code-comment"># كلاس ابن آخر</span>
<span class="code-keyword">class</span> <span class="code-class">Cat</span>(Animal):
    <span class="code-keyword">def</span> <span class="code-function">__init__</span>(<span class="code-keyword">self</span>, name, age, color):
        <span class="code-keyword">super</span>().__init__(name, age)
        <span class="code-keyword">self</span>.color = color
    
    <span class="code-keyword">def</span> <span class="code-function">make_sound</span>(<span class="code-keyword">self</span>):
        <span class="code-keyword">return</span> <span class="code-string">"مواء! مواء!"</span>
    
    <span class="code-keyword">def</span> <span class="code-function">climb</span>(<span class="code-keyword">self</span>):
        <span class="code-keyword">return</span> <span class="code-string">f"{self.name} يتسلق الشجرة"</span>

<span class="code-comment"># استخدام الكلاسات</span>
animal = Animal(<span class="code-string">"حيوان عام"</span>, <span class="code-number">2</span>)
dog = Dog(<span class="code-string">"ريكس"</span>, <span class="code-number">3</span>, <span class="code-string">"جيرمن شيبرد"</span>)
cat = Cat(<span class="code-string">"ميمي"</span>, <span class="code-number">2</span>, <span class="code-string">"أسود"</span>)

<span class="code-keyword">print</span>(<span class="code-string">"=== الحيوان العام ==="</span>)
<span class="code-keyword">print</span>(animal.eat())
<span class="code-keyword">print</span>(animal.make_sound())

<span class="code-keyword">print</span>(<span class="code-string">"\n=== الكلب ==="</span>)
<span class="code-keyword">print</span>(dog.eat())          <span class="code-comment"># ورثت من الأب</span>
<span class="code-keyword">print</span>(dog.make_sound())   <span class="code-comment"># تجاوزت دالة الأب</span>
<span class="code-keyword">print</span>(dog.fetch())        <span class="code-comment"># دالة جديدة في الابن</span>
<span class="code-keyword">print</span>(<span class="code-string">f"السلالة: {dog.breed}"</span>)

<span class="code-keyword">print</span>(<span class="code-string">"\n=== القط ==="</span>)
<span class="code-keyword">print</span>(cat.sleep())        <span class="code-comment"># ورثت من الأب</span>
<span class="code-keyword">print</span>(cat.make_sound())   <span class="code-comment"># تجاوزت دالة الأب</span>
<span class="code-keyword">print</span>(cat.climb())        <span class="code-comment"># دالة جديدة في الابن</span>
                    </pre>
                </div>
                
                <div class="example-output">
                    <h4>المخرجات:</h4>
                    <pre>=== الحيوان العام ===
حيوان عام يأكل
صوت الحيوان

=== الكلب ===
ريكس يأكل
نباح! نباح!
ريكس يجلب العصا
السلالة: جيرمن شيبرد

=== القط ===
ميمي ينام
مواء! مواء!
ميمي يتسلق الشجرة</pre>
                </div>
            </section>
        </div>

        <!-- قسم أنواع الوراثة -->
        <section class="content-section">
            <h2 class="section-title"><i class="fas fa-layer-group"></i> أنواع الوراثة</h2>
            
            <div class="types-section">
                <div class="type-card">
                    <h4><i class="fas fa-arrow-down"></i> وراثة وحيدة</h4>
                    <p>كلاس يرث من كلاس أب واحد فقط</p>
                    <div class="code-example">
                        <pre>
<span class="code-keyword">class</span> <span class="code-class">Parent</span>:
    <span class="code-keyword">pass</span>

<span class="code-keyword">class</span> <span class="code-class">Child</span>(Parent):
    <span class="code-keyword">pass</span>
                        </pre>
                    </div>
                </div>
                
                <div class="type-card">
                    <h4><i class="fas fa-sitemap"></i> وراثة متعددة المستويات</h4>
                    <p>سلسلة من الوراثة (أب ← ابن ← حفيد)</p>
                    <div class="code-example">
                        <pre>
<span class="code-keyword">class</span> <span class="code-class">GrandParent</span>:
    <span class="code-keyword">pass</span>

<span class="code-keyword">class</span> <span class="code-class">Parent</span>(GrandParent):
    <span class="code-keyword">pass</span>

<span class="code-keyword">class</span> <span class="code-class">Child</span>(Parent):
    <span class="code-keyword">pass</span>
                        </pre>
                    </div>
                </div>
                
                <div class="type-card">
                    <h4><i class="fas fa-code-branch"></i> وراثة متعددة</h4>
                    <p>كلاس يرث من أكثر من كلاس أب</p>
                    <div class="code-example">
                        <pre>
<span class="code-keyword">class</span> <span class="code-class">Father</span>:
    <span class="code-keyword">pass</span>

<span class="code-keyword">class</span> <span class="code-class">Mother</span>:
    <span class="code-keyword">pass</span>

<span class="code-keyword">class</span> <span class="code-class">Child</span>(Father, Mother):
    <span class="code-keyword">pass</span>
                        </pre>
                    </div>
                </div>
            </div>
            
            <h3>مثال متقدم: وراثة متعددة المستويات</h3>
            <div class="code-example">
                <pre>
<span class="code-keyword">class</span> <span class="code-class">Vehicle</span>:
    <span class="code-keyword">def</span> <span class="code-function">__init__</span>(<span class="code-keyword">self</span>, brand, model):
        <span class="code-keyword">self</span>.brand = brand
        <span class="code-keyword">self</span>.model = model
        <span class="code-keyword">self</span>.speed = <span class="code-number">0</span>
    
    <span class="code-keyword">def</span> <span class="code-function">start_engine</span>(<span class="code-keyword">self</span>):
        <span class="code-keyword">return</span> <span class="code-string">f"محرك {self.brand} {self.model} يعمل"</span>
    
    <span class="code-keyword">def</span> <span class="code-function">stop_engine</span>(<span class="code-keyword">self</span>):
        <span class="code-keyword">self</span>.speed = <span class="code-number">0</span>
        <span class="code-keyword">return</span> <span class="code-string">"تم إيقاف المحرك"</span>

<span class="code-keyword">class</span> <span class="code-class">Car</span>(Vehicle):
    <span class="code-keyword">def</span> <span class="code-function">__init__</span>(<span class="code-keyword">self</span>, brand, model, doors):
        <span class="code-keyword">super</span>().__init__(brand, model)
        <span class="code-keyword">self</span>.doors = doors
    
    <span class="code-keyword">def</span> <span class="code-function">open_trunk</span>(<span class="code-keyword">self</span>):
        <span class="code-keyword">return</span> <span class="code-string">"فتح صندوق السيارة"</span>

<span class="code-keyword">class</span> <span class="code-class">ElectricCar</span>(Car):
    <span class="code-keyword">def</span> <span class="code-function">__init__</span>(<span class="code-keyword">self</span>, brand, model, doors, battery_capacity):
        <span class="code-keyword">super</span>().__init__(brand, model, doors)
        <span class="code-keyword">self</span>.battery_capacity = battery_capacity
        <span class="code-keyword">self</span>.battery_level = <span class="code-number">100</span>
    
    <span class="code-keyword">def</span> <span class="code-function">charge_battery</span>(<span class="code-keyword">self</span>):
        <span class="code-keyword">self</span>.battery_level = <span class="code-number">100</span>
        <span class="code-keyword">return</span> <span class="code-string">"تم شحن البطارية بالكامل"</span>
    
    <span class="code-keyword">def</span> <span class="code-function">start_engine</span>(<span class="code-keyword">self</span>):
        <span class="code-keyword">return</span> <span class="code-string">f"المحرك الكهربائي لـ {self.brand} {self.model} يعمل بصمت"</span>

<span class="code-comment"># الاستخدام</span>
tesla = ElectricCar(<span class="code-string">"Tesla"</span>, <span class="code-string">"Model S"</span>, <span class="code-number">4</span>, <span class="code-number">100</span>)

<span class="code-keyword">print</span>(tesla.start_engine())      <span class="code-comment"># من ElectricCar</span>
<span class="code-keyword">print</span>(tesla.open_trunk())        <span class="code-comment"># من Car</span>
<span class="code-keyword">print</span>(tesla.stop_engine())       <span class="code-comment"># من Vehicle</span>
<span class="code-keyword">print</span>(<span class="code-string">f"الأبواب: {tesla.doors}"</span>)  <span class="code-comment"># من Car</span>
<span class="code-keyword">print</span>(<span class="code-string">f"سعة البطارية: {tesla.battery_capacity}kWh"</span>)  <span class="code-comment"># من ElectricCar</span>
                </pre>
            </div>
            
            <div class="example-output">
                <h4>المخرجات:</h4>
                <pre>المحرك الكهربائي لـ Tesla Model S يعمل بصمت
فتح صندوق السيارة
تم إيقاف المحرك
الأبواب: 4
سعة البطارية: 100kWh</pre>
            </div>
        </section>

        <!-- قسم المحرر التفاعلي -->
        <section class="content-section">
            <h2 class="section-title"><i class="fas fa-edit"></i> محرر الأكواد التفاعلي</h2>
            
            <div class="editor-section">
                <h3><i class="fas fa-play"></i> جرب الوراثة بنفسك</h3>
                <p>يمكنك تعديل الكود التالي وتشغيله لترى نتائج الوراثة:</p>
                
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
                        <textarea id="python-editor"># جرب تعديل هذا الكود لتفهم الوراثة
class Employee:
    company = "شركة التقنية"
    
    def __init__(self, name, salary):
        self.name = name
        self.salary = salary
        self.department = "غير محدد"
    
    def work(self):
        return f"{self.name} يؤدي مهامه الوظيفية"
    
    def get_annual_salary(self):
        return self.salary * 12
    
    def apply_raise(self, percentage):
        self.salary += self.salary * (percentage / 100)
        return f"تم زيادة راتب {self.name} إلى {self.salary:.2f}"

class Manager(Employee):
    def __init__(self, name, salary, department, team_size):
        super().__init__(name, salary)
        self.department = department
        self.team_size = team_size
        self.employees = []
    
    def work(self):  # تجاوز دالة الأب
        return f"{self.name} يدير قسم {self.department}"
    
    def hire_employee(self, employee_name):
        self.employees.append(employee_name)
        return f"تم توظيف {employee_name} في قسم {self.department}"
    
    def conduct_meeting(self):
        return f"{self.name} يعقد اجتماعاً مع فريقه المكون من {self.team_size} أشخاص"

class Developer(Employee):
    def __init__(self, name, salary, programming_language):
        super().__init__(name, salary)
        self.programming_language = programming_language
        self.projects = []
    
    def work(self):  # تجاوز دالة الأب
        return f"{self.name} يبرمج بلغة {self.programming_language}"
    
    def add_project(self, project_name):
        self.projects.append(project_name)
        return f"تم إضافة مشروع {project_name}"
    
    def debug_code(self):
        return f"{self.name} يصلح الأخطاء في الكود"

# إنشاء كائنات من الكلاسات المختلفة
manager = Manager("أحمد", 8000, "التطوير", 5)
developer = Developer("فاطمة", 6000, "Python")

print("=== المدير ===")
print(manager.work())
print(manager.hire_employee("محمد"))
print(manager.conduct_meeting())
print(manager.apply_raise(15))
print(f"الراتب السنوي: {manager.get_annual_salary()}")

print("\n=== المطور ===")
print(developer.work())
print(developer.add_project("نظام إدارة المهام"))
print(developer.debug_code())
print(developer.apply_raise(10))
print(f"الراتب السنوي: {developer.get_annual_salary()}")

print(f"\nجميع الموظفين يعملون في: {Employee.company}")</textarea>
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

        <!-- قسم فوائد الوراثة -->
        <section class="content-section">
            <h2 class="section-title"><i class="fas fa-star"></i> فوائد الوراثة</h2>
            
            <ul class="benefits-list">
                <li><i class="fas fa-check"></i> <strong>إعادة استخدام الكود:</strong> لا حاجة لإعادة كتابة الكود الموجود</li>
                <li><i class="fas fa-check"></i> <strong>تنظيم الكود:</strong> هيكل هرمي واضح وسهل الفهم</li>
                <li><i class="fas fa-check"></i> <strong>سهولة الصيانة:</strong> التغييرات في الأب تؤثر تلقائياً في الأبناء</li>
                <li><i class="fas fa-check"></i> <strong>التوسع:</strong> إضافة وظائف جديدة بسهولة</li>
                <li><i class="fas fa-check"></i> <strong>النمذجة الواقعية:</strong> تمثيل العلاقات الطبيعية بين الكيانات</li>
            </ul>
            
            <div class="tip">
                <p><i class="fas fa-lightbulb"></i> <strong>نصيحة:</strong> استخدم الوراثة عندما تكون العلاقة بين الكلاسات "is-a" (هو). مثلاً: الكلب هو حيوان، المدير هو موظف.</p>
            </div>
            
            <h3 class="section-title"><i class="fas fa-exclamation-triangle"></i> تحذيرات مهمة</h3>
            
            <div class="warning">
                <p><i class="fas fa-exclamation-circle"></i> <strong>احذر من:</strong></p>
                <ul class="benefits-list">
                    <li><i class="fas fa-times"></i> <strong>الوراثة العميقة:</strong> تجنب سلاسل الوراثة الطويلة جداً</li>
                    <li><i class="fas fa-times"></i> <strong>وراثة غير منطقية:</strong> لا ترث من كلاس لا تربطك به علاقة حقيقية</li>
                    <li><i class="fas fa-times"></i> <strong>تجاوز الدوال بكثرة:</strong> قد يؤدي إلى صعوبة تتبع الكود</li>
                    <li><i class="fas fa-times"></i> <strong>نسيان super():</strong> قد يؤدي إلى عدم تهيئة الخصائص بشكل صحيح</li>
                </ul>
            </div>
        </section>
    </div>
    
    <footer>
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3><i class="fas fa-info-circle"></i> ملخص الوراثة</h3>
                    <p>الوراثة تمكننا من إنشاء علاقات هرمية بين الكلاسات، وإعادة استخدام الكود، وبناء أنظمة معقدة بطريقة منظمة.</p>
                </div>
                <div class="footer-section">
                    <h3><i class="fas fa-code"></i> المفاهيم الأساسية</h3>
                    <p>الكلاس الأب، الكلاس الابن، الوراثة، التجاوز، super()</p>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2023 الوراثة في البرمجة كائنية التوجه - شرح شامل. جميع الحقوق محفوظة.</p>
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
                    if (code.includes('Manager') && code.includes('Developer')) {
                        simulatedOutput = `=== المدير ===
أحمد يدير قسم التطوير
تم توظيف محمد في قسم التطوير
أحمد يعقد اجتماعاً مع فريقه المكون من 5 أشخاص
تم زيادة راتب أحمد إلى 9200.00
الراتب السنوي: 110400

=== المطور ===
فاطمة يبرمج بلغة Python
تم إضافة مشروع نظام إدارة المهام
فاطمة يصلح الأخطاء في الكود
تم زيادة راتب فاطمة إلى 6600.00
الراتب السنوي: 79200

جميع الموظفين يعملون في: شركة التقنية`;
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
            document.getElementById('python-editor').value = `# جرب تعديل هذا الكود لتفهم الوراثة
class Employee:
    company = "شركة التقنية"
    
    def __init__(self, name, salary):
        self.name = name
        self.salary = salary
        self.department = "غير محدد"
    
    def work(self):
        return f"{self.name} يؤدي مهامه الوظيفية"
    
    def get_annual_salary(self):
        return self.salary * 12
    
    def apply_raise(self, percentage):
        self.salary += self.salary * (percentage / 100)
        return f"تم زيادة راتب {self.name} إلى {self.salary:.2f}"

class Manager(Employee):
    def __init__(self, name, salary, department, team_size):
        super().__init__(name, salary)
        self.department = department
        self.team_size = team_size
        self.employees = []
    
    def work(self):  # تجاوز دالة الأب
        return f"{self.name} يدير قسم {self.department}"
    
    def hire_employee(self, employee_name):
        self.employees.append(employee_name)
        return f"تم توظيف {employee_name} في قسم {self.department}"
    
    def conduct_meeting(self):
        return f"{self.name} يعقد اجتماعاً مع فريقه المكون من {self.team_size} أشخاص"

class Developer(Employee):
    def __init__(self, name, salary, programming_language):
        super().__init__(name, salary)
        self.programming_language = programming_language
        self.projects = []
    
    def work(self):  # تجاوز دالة الأب
        return f"{self.name} يبرمج بلغة {self.programming_language}"
    
    def add_project(self, project_name):
        self.projects.append(project_name)
        return f"تم إضافة مشروع {project_name}"
    
    def debug_code(self):
        return f"{self.name} يصلح الأخطاء في الكود"

# إنشاء كائنات من الكلاسات المختلفة
manager = Manager("أحمد", 8000, "التطوير", 5)
developer = Developer("فاطمة", 6000, "Python")

print("=== المدير ===")
print(manager.work())
print(manager.hire_employee("محمد"))
print(manager.conduct_meeting())
print(manager.apply_raise(15))
print(f"الراتب السنوي: {manager.get_annual_salary()}")

print("\\n=== المطور ===")
print(developer.work())
print(developer.add_project("نظام إدارة المهام"))
print(developer.debug_code())
print(developer.apply_raise(10))
print(f"الراتب السنوي: {developer.get_annual_salary()}")

print(f"\\nجميع الموظفين يعملون في: {Employee.company}")`;
            document.getElementById('editor-output').innerHTML = 'سيظهر نتائج الكود هنا...';
        }
        
        // تشغيل الكود تلقائياً عند التحميل
        document.addEventListener('DOMContentLoaded', function() {
            setTimeout(runCode, 1000);
        });
    </script>
</body>
</html>