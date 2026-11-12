<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>إنشاء الكلاس والكائن في بايثون - شرح شامل</title>
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
            --class-color: #9c27b0;
            --object-color: #e91e63;
            --method-color: #ff9800;
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
            color: var(--class-color);
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
        
        .concept-card.class {
            border-top-color: var(--class-color);
        }
        
        .concept-card.object {
            border-top-color: var(--object-color);
        }
        
        .concept-card.method {
            border-top-color: var(--method-color);
        }
        
        .concept-card.constructor {
            border-top-color: var(--primary-color);
        }
        
        .concept-icon {
            font-size: 2.5rem;
            margin-bottom: 1rem;
        }
        
        .class .concept-icon { color: var(--class-color); }
        .object .concept-icon { color: var(--object-color); }
        .method .concept-icon { color: var(--method-color); }
        .constructor .concept-icon { color: var(--primary-color); }
        
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
        
        .example-output {
            background-color: #edf2f7;
            padding: 1.5rem;
            border-radius: 8px;
            margin: 1rem 0;
            direction: ltr;
            border-right: 4px solid var(--accent-color);
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
            height: 300px;
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
            min-height: 150px;
            background-color: #f7fafc;
            direction: ltr;
            text-align: left;
            white-space: pre-wrap;
            font-family: 'Courier New', Courier, monospace;
            line-height: 1.5;
        }
        
        /* Anatomy Section */
        .anatomy-section {
            background: linear-gradient(135deg, var(--class-color), #6a1b9a);
            color: white;
            border-radius: 10px;
            padding: 2rem;
            margin: 2rem 0;
        }
        
        .anatomy-section pre {
            font-family: 'Courier New', Courier, monospace;
            font-size: 1.1rem;
            line-height: 1.6;
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
        
        /* Real World Examples */
        .real-world-examples {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 1.5rem;
            margin: 2rem 0;
        }
        
        .example-card {
            background: white;
            padding: 1.5rem;
            border-radius: 10px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        }
        
        .example-card h4 {
            color: var(--primary-color);
            margin-bottom: 1rem;
            display: flex;
            align-items: center;
            gap: 10px;
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
        
        .step-by-step {
            background: var(--light-color);
            padding: 1.5rem;
            border-radius: 8px;
            margin: 1.5rem 0;
            border-right: 4px solid var(--class-color);
        }
        
        .step {
            margin-bottom: 1rem;
            padding-bottom: 1rem;
            border-bottom: 1px dashed #ddd;
        }
        
        .step:last-child {
            margin-bottom: 0;
            padding-bottom: 0;
            border-bottom: none;
        }
        
        .step-number {
            display: inline-block;
            width: 30px;
            height: 30px;
            background: var(--class-color);
            color: white;
            border-radius: 50%;
            text-align: center;
            line-height: 30px;
            margin-left: 10px;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <header>
        <div class="container">
            <div class="header-content">
                <div class="logo">
                    <i class="fas fa-cube"></i>
                    <span>إنشاء الكلاس والكائن في بايثون</span>
                </div>
            </div>
        </div>
    </header>
    
    <div class="container">
        <div class="main-content">
            <!-- قسم المفاهيم الأساسية -->
            <section class="content-section">
                <h2 class="section-title"><i class="fas fa-brain"></i> المفاهيم الأساسية</h2>
                
                <div class="concept-cards">
                    <div class="concept-card class">
                        <div class="concept-icon">
                            <i class="fas fa-blueprint"></i>
                        </div>
                        <h4>الكلاس (Class)</h4>
                        <p>قالب أو مخطط لإنشاء الكائنات. يحدد الخصائص والسلوكيات التي ستمتلكها الكائنات.</p>
                        <p><strong>مثال:</strong> مخطط "سيارة"</p>
                    </div>
                    
                    <div class="concept-card object">
                        <div class="concept-icon">
                            <i class="fas fa-cube"></i>
                        </div>
                        <h4>الكائن (Object)</h4>
                        <p>نسخة ملموسة من الكلاس تحتوي على بيانات حقيقية.</p>
                        <p><strong>مثال:</strong> سيارة Toyota ذات اللون الأحمر</p>
                    </div>
                    
                    <div class="concept-card constructor">
                        <div class="concept-icon">
                            <i class="fas fa-hammer"></i>
                        </div>
                        <h4>المنشئ (Constructor)</h4>
                        <p>دالة خاصة <code>__init__</code> تُنفذ تلقائياً عند إنشاء كائن جديد.</p>
                        <p><strong>مثال:</strong> إعداد الخصائص الأولية للكائن</p>
                    </div>
                    
                    <div class="concept-card method">
                        <div class="concept-icon">
                            <i class="fas fa-cogs"></i>
                        </div>
                        <h4>الدوال (Methods)</h4>
                        <p>وظائف داخل الكلاس تحدد سلوك الكائنات.</p>
                        <p><strong>مثال:</strong> <code>drive()</code>, <code>stop()</code> في كلاس السيارة</p>
                    </div>
                </div>
                
                <div class="anatomy-section">
                    <h3 style="color: white; margin-bottom: 1rem;"><i class="fas fa-puzzle-piece"></i> تركيب الكلاس الأساسي</h3>
                    <pre>
class ClassName:
    def __init__(self, parameters):
        # تهيئة الخصائص
        self.attribute = value
    
    def method_name(self):
        # كود الدالة
        return result
                    </pre>
                </div>
                
                <h3 class="section-title"><i class="fas fa-sitemap"></i> العلاقة بين الكلاس والكائن</h3>
                <div class="step-by-step">
                    <div class="step">
                        <span class="step-number">1</span>
                        <strong>تحديد الكلاس:</strong> ننشئ مخططاً عاماً
                    </div>
                    <div class="step">
                        <span class="step-number">2</span>
                        <strong>إنشاء الكائنات:</strong> ننشئ نسخاً من الكلاس
                    </div>
                    <div class="step">
                        <span class="step-number">3</span>
                        <strong>تخصيص الخصائص:</strong> كل كائن له قيمه الخاصة
                    </div>
                    <div class="step">
                        <span class="step-number">4</span>
                        <strong>استخدام الدوال:</strong> نتفاعل مع الكائنات
                    </div>
                </div>
            </section>
            
            <!-- قسم الأمثلة العملية -->
            <section class="content-section">
                <h2 class="section-title"><i class="fas fa-code"></i> أمثلة عملية</h2>
                
                <h3>المثال 1: كلاس طالب بسيط</h3>
                <div class="code-example">
                    <pre>
<span class="code-comment"># تعريف الكلاس</span>
<span class="code-keyword">class</span> <span class="code-class">Student</span>:
    <span class="code-comment"># المنشئ - يُستدعى تلقائياً عند إنشاء كائن</span>
    <span class="code-keyword">def</span> <span class="code-function">__init__</span>(<span class="code-keyword">self</span>, name, age, grade):
        <span class="code-comment"># self تشير إلى الكائن الحالي</span>
        <span class="code-keyword">self</span>.name = name      <span class="code-comment"># خاصية الاسم</span>
        <span class="code-keyword">self</span>.age = age        <span class="code-comment"># خاصية العمر</span>
        <span class="code-keyword">self</span>.grade = grade    <span class="code-comment"># خاصية الصف</span>
        <span class="code-keyword">self</span>.courses = []     <span class="code-comment"># خاصية قائمة المواد (قيمة افتراضية)</span>
    
    <span class="code-comment"># دالة لإضافة مادة</span>
    <span class="code-keyword">def</span> <span class="code-function">add_course</span>(<span class="code-keyword">self</span>, course_name):
        <span class="code-keyword">self</span>.courses.append(course_name)
        <span class="code-keyword">return</span> <span class="code-string">f"تمت إضافة مادة {course_name}"</span>
    
    <span class="code-comment"># دالة لعرض المعلومات</span>
    <span class="code-keyword">def</span> <span class="code-function">display_info</span>(<span class="code-keyword">self</span>):
        info = <span class="code-string">f"الاسم: {self.name}, العمر: {self.age}, الصف: {self.grade}"</span>
        <span class="code-keyword">if</span> <span class="code-keyword">self</span>.courses:
            info += <span class="code-string">f", المواد: {', '.join(self.courses)}"</span>
        <span class="code-keyword">return</span> info

<span class="code-comment"># إنشاء كائنات من الكلاس</span>
student1 = Student(<span class="code-string">"أحمد"</span>, <span class="code-number">15</span>, <span class="code-string">"العاشر"</span>)
student2 = Student(<span class="code-string">"فاطمة"</span>, <span class="code-number">16</span>, <span class="code-string">"الحادي عشر"</span>)

<span class="code-comment"># استخدام الكائنات</span>
student1.add_course(<span class="code-string">"الرياضيات"</span>)
student1.add_course(<span class="code-string">"العلوم"</span>)
student2.add_course(<span class="code-string">"الأدب"</span>)

<span class="code-comment"># عرض المعلومات</span>
<span class="code-keyword">print</span>(<span class="code-string">"=== معلومات الطلاب ==="</span>)
<span class="code-keyword">print</span>(student1.display_info())
<span class="code-keyword">print</span>(student2.display_info())

<span class="code-comment"># الوصول المباشر للخصائص</span>
<span class="code-keyword">print</span>(<span class="code-string">f"اسم الطالب الأول: {student1.name}"</span>)
<span class="code-keyword">print</span>(<span class="code-string">f"مواد الطالب الثاني: {student2.courses}"</span>)
                    </pre>
                </div>
                
                <div class="example-output">
                    <h4>المخرجات:</h4>
                    <pre>=== معلومات الطلاب ===
الاسم: أحمد, العمر: 15, الصف: العاشر, المواد: الرياضيات, العلوم
الاسم: فاطمة, العمر: 16, الصف: الحادي عشر, المواد: الأدب
اسم الطالب الأول: أحمد
مواد الطالب الثاني: ['الأدب']</pre>
                </div>

                <h3>المثال 2: كلاس سيارة متقدم</h3>
                <div class="code-example">
                    <pre>
<span class="code-keyword">class</span> <span class="code-class">Car</span>:
    <span class="code-comment"># متغير كلاس (يشاركه جميع الكائنات)</span>
    wheels = <span class="code-number">4</span>
    
    <span class="code-keyword">def</span> <span class="code-function">__init__</span>(<span class="code-keyword">self</span>, brand, model, color, year):
        <span class="code-comment"># متغيرات كائن (خاصة بكل كائن)</span>
        <span class="code-keyword">self</span>.brand = brand
        <span class="code-keyword">self</span>.model = model
        <span class="code-keyword">self</span>.color = color
        <span class="code-keyword">self</span>.year = year
        <span class="code-keyword">self</span>.speed = <span class="code-number">0</span>
        <span class="code-keyword">self</span>.is_running = <span class="code-keyword">False</span>
    
    <span class="code-keyword">def</span> <span class="code-function">start_engine</span>(<span class="code-keyword">self</span>):
        <span class="code-keyword">if</span> <span class="code-keyword">not</span> <span class="code-keyword">self</span>.is_running:
            <span class="code-keyword">self</span>.is_running = <span class="code-keyword">True</span>
            <span class="code-keyword">return</span> <span class="code-string">f"محرك {self.brand} {self.model} يعمل الآن"</span>
        <span class="code-keyword">return</span> <span class="code-string">"المحرك يعمل بالفعل!"</span>
    
    <span class="code-keyword">def</span> <span class="code-function">accelerate</span>(<span class="code-keyword">self</span>, increment):
        <span class="code-keyword">if</span> <span class="code-keyword">self</span>.is_running:
            <span class="code-keyword">self</span>.speed += increment
            <span class="code-keyword">return</span> <span class="code-string">f"السرعة الآن: {self.speed} km/h"</span>
        <span class="code-keyword">return</span> <span class="code-string">"يجب تشغيل المحرك أولاً!"</span>
    
    <span class="code-keyword">def</span> <span class="code-function">display_info</span>(<span class="code-keyword">self</span>):
        status = <span class="code-string">"شغالة"</span> <span class="code-keyword">if</span> <span class="code-keyword">self</span>.is_running <span class="code-keyword">else</span> <span class="code-string">"مطفأة"</span>
        <span class="code-keyword">return</span> <span class="code-string">f"{self.year} {self.brand} {self.model} - {self.color} - {status} - السرعة: {self.speed} km/h"</span>

<span class="code-comment"># إنشاء كائنات سيارة</span>
car1 = Car(<span class="code-string">"Toyota"</span>, <span class="code-string">"Camry"</span>, <span class="code-string">"أبيض"</span>, <span class="code-number">2022</span>)
car2 = Car(<span class="code-string">"Hyundai"</span>, <span class="code-string">"Elantra"</span>, <span class="code-string">"أسود"</span>, <span class="code-number">2023</span>)

<span class="code-comment"># التفاعل مع الكائنات</span>
<span class="code-keyword">print</span>(car1.start_engine())
<span class="code-keyword">print</span>(car1.accelerate(<span class="code-number">30</span>))
<span class="code-keyword">print</span>(car1.accelerate(<span class="code-number">20</span>))
<span class="code-keyword">print</span>(car1.display_info())

<span class="code-keyword">print</span>(<span class="code-string">"\n"</span> + car2.display_info())

<span class="code-comment"># الوصول إلى متغير الكلاس</span>
<span class="code-keyword">print</span>(<span class="code-string">f"\nجميع السيارات لها {Car.wheels} عجلات"</span>)
                    </pre>
                </div>
                
                <div class="example-output">
                    <h4>المخرجات:</h4>
                    <pre>محرك Toyota Camry يعمل الآن
السرعة الآن: 30 km/h
السرعة الآن: 50 km/h
2022 Toyota Camry - أبيض - شغالة - السرعة: 50 km/h

2023 Hyundai Elantra - أسود - مطفأة - السرعة: 0 km/h

جميع السيارات لها 4 عجلات</pre>
                </div>
            </section>
        </div>

        <!-- قسم المحرر التفاعلي -->
        <section class="content-section">
            <h2 class="section-title"><i class="fas fa-edit"></i> محرر الأكواد التفاعلي</h2>
            
            <div class="editor-section">
                <h3><i class="fas fa-play"></i> جرب الكود بنفسك</h3>
                <p>يمكنك تعديل الكود التالي وتشغيله لترى النتائج مباشرة:</p>
                
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
                        <textarea id="python-editor"># جرب تعديل هذا الكود
class Book:
    def __init__(self, title, author, pages):
        self.title = title
        self.author = author
        self.pages = pages
        self.is_borrowed = False
    
    def borrow(self):
        if not self.is_borrowed:
            self.is_borrowed = True
            return f"تم استعارة كتاب '{self.title}'"
        return f"كتاب '{self.title}' معار بالفعل"
    
    def return_book(self):
        if self.is_borrowed:
            self.is_borrowed = False
            return f"تم إرجاع كتاب '{self.title}'"
        return f"كتاب '{self.title}' غير معار"
    
    def display_info(self):
        status = "معار" if self.is_borrowed else "متاح"
        return f"الكتاب: {self.title} - المؤلف: {self.author} - الصفحات: {self.pages} - الحالة: {status}"

# إنشاء كائنات كتاب
book1 = Book("الأيام", "طه حسين", 250)
book2 = Book("قصة مدينتين", "تشارلز ديكنز", 450)

print("=== مكتبة الكتب ===")
print(book1.display_info())
print(book2.display_info())

print("\n" + book1.borrow())
print(book1.borrow())  # محاولة استعارة نفس الكتاب مرة أخرى

print("\n" + book1.display_info())
print(book2.display_info())</textarea>
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

        <!-- قسم النصائح والأخطاء الشائعة -->
        <section class="content-section">
            <h2 class="section-title"><i class="fas fa-lightbulb"></i> نصائح وأخطاء شائعة</h2>
            
            <div class="real-world-examples">
                <div class="example-card">
                    <h4><i class="fas fa-check-circle"></i> نصائح مهمة</h4>
                    <ul class="benefits-list">
                        <li><i class="fas fa-check"></i> استخدم <code>self</code> للإشارة إلى الكائن الحالي</li>
                        <li><i class="fas fa-check"></i> ابدأ أسماء الكلاسات بحرف كبير (PascalCase)</li>
                        <li><i class="fas fa-check"></i> استخدم <code>__init__</code> لتهيئة الخصائص</li>
                        <li><i class="fas fa-check"></i> اختر أسماء واضحة للكلاسات والخصائص</li>
                    </ul>
                </div>
                
                <div class="example-card">
                    <h4><i class="fas fa-exclamation-triangle"></i> أخطاء شائعة</h4>
                    <ul class="benefits-list">
                        <li><i class="fas fa-times"></i> نسيان <code>self</code> في تعريف الدوال</li>
                        <li><i class="fas fa-times"></i> الخلط بين متغيرات الكلاس والكائن</li>
                        <li><i class="fas fa-times"></i> كتابة <code>_init_</code> بدلاً من <code>__init__</code></li>
                        <li><i class="fas fa-times"></i> نسيان الأقواس عند إنشاء الكائن</li>
                    </ul>
                </div>
            </div>
            
            <div class="note">
                <p><i class="fas fa-info-circle"></i> <strong>ملاحظة:</strong> الكلمة المفتاحية <code>self</code> هي مجرد اصطلاح، يمكنك استخدام أي اسم آخر لكن <code>self</code> هو الأكثر شيوعاً.</p>
            </div>
        </section>

        <!-- قسم التطبيقات الواقعية -->
        <section class="content-section">
            <h2 class="section-title"><i class="fas fa-rocket"></i> تطبيقات عملية</h2>
            
            <div class="real-world-examples">
                <div class="example-card">
                    <h4><i class="fas fa-user"></i> نظام المستخدمين</h4>
                    <div class="code-example">
                        <pre>
<span class="code-keyword">class</span> <span class="code-class">User</span>:
    <span class="code-keyword">def</span> <span class="code-function">__init__</span>(<span class="code-keyword">self</span>, username, email):
        <span class="code-keyword">self</span>.username = username
        <span class="code-keyword">self</span>.email = email
        <span class="code-keyword">self</span>.is_active = <span class="code-keyword">True</span>
    
    <span class="code-keyword">def</span> <span class="code-function">deactivate</span>(<span class="code-keyword">self</span>):
        <span class="code-keyword">self</span>.is_active = <span class="code-keyword">False</span>
    
    <span class="code-keyword">def</span> <span class="code-function">display</span>(<span class="code-keyword">self</span>):
        status = <span class="code-string">"نشط"</span> <span class="code-keyword">if</span> <span class="code-keyword">self</span>.is_active <span class="code-keyword">else</span> <span class="code-string">"غير نشط"</span>
        <span class="code-keyword">return</span> <span class="code-string">f"المستخدم: {self.username} - البريد: {self.email} - الحالة: {status}"</span>
                        </pre>
                    </div>
                </div>
                
                <div class="example-card">
                    <h4><i class="fas fa-shopping-cart"></i> نظام المنتجات</h4>
                    <div class="code-example">
                        <pre>
<span class="code-keyword">class</span> <span class="code-class">Product</span>:
    <span class="code-keyword">def</span> <span class="code-function">__init__</span>(<span class="code-keyword">self</span>, name, price, quantity):
        <span class="code-keyword">self</span>.name = name
        <span class="code-keyword">self</span