<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>نظام إدارة الطلاب - Student Management System</title>
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
        
        .project-tabs {
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
        
        .code-class {
            color: #a6e22e;
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
        }
        
        .student-form {
            background: var(--light);
            padding: 1.5rem;
            border-radius: 8px;
            margin: 1rem 0;
        }
        
        .form-group {
            margin-bottom: 1rem;
        }
        
        .form-label {
            display: block;
            margin-bottom: 0.5rem;
            font-weight: 600;
        }
        
        .form-input {
            width: 100%;
            padding: 0.8rem;
            border: 1px solid #ddd;
            border-radius: 5px;
            font-size: 1rem;
        }
        
        .form-button {
            background: var(--success);
            color: white;
            border: none;
            padding: 0.8rem 1.5rem;
            border-radius: 5px;
            cursor: pointer;
            font-weight: 600;
            transition: background 0.3s ease;
        }
        
        .form-button:hover {
            background: #27ae60;
        }
        
        .student-list {
            margin-top: 1rem;
        }
        
        .student-item {
            background: white;
            padding: 1rem;
            margin-bottom: 0.5rem;
            border-radius: 5px;
            border-left: 4px solid var(--info);
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .student-info {
            flex: 1;
        }
        
        .student-actions {
            display: flex;
            gap: 10px;
        }
        
        .action-button {
            padding: 0.5rem 1rem;
            border: none;
            border-radius: 3px;
            cursor: pointer;
            font-weight: 600;
        }
        
        .edit-button {
            background: var(--warning);
            color: white;
        }
        
        .delete-button {
            background: var(--danger);
            color: white;
        }
        
        .architecture-diagram {
            text-align: center;
            margin: 2rem 0;
        }
        
        .diagram {
            background: white;
            padding: 2rem;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
        
        footer {
            text-align: center;
            padding: 2rem 0;
            margin-top: 2rem;
            color: var(--dark);
            border-top: 1px solid var(--light);
        }
        
        @media (max-width: 768px) {
            .project-tabs {
                flex-direction: column;
            }
            
            .feature-grid {
                grid-template-columns: 1fr;
            }
            
            .student-item {
                flex-direction: column;
                align-items: flex-start;
                gap: 10px;
            }
            
            .student-actions {
                align-self: flex-end;
            }
        }
    </style>
</head>
<body>
    <header>
        <div class="container">
            <h1>نظام إدارة الطلاب - Student Management System</h1>
            <p class="subtitle">مشروع متكامل بلغة Python لإدارة بيانات الطلاب مع واجهة ويب تفاعلية</p>
        </div>
    </header>
    
    <div class="container">
        <div class="project-tabs">
            <div class="tab active" data-tab="overview">نظرة عامة</div>
            <div class="tab" data-tab="code">الكود المصدري</div>
            <div class="tab" data-tab="demo">تجربة المشروع</div>
            <div class="tab" data-tab="explanation">شرح المشروع</div>
        </div>
        
        <!-- نظرة عامة -->
        <div id="overview" class="content-section active">
            <h2>نظرة عامة على المشروع</h2>
            <p>نظام إدارة الطلاب هو تطبيق ويب يسمح للمدارس والجامعات بإدارة بيانات الطلاب بشكل منظم وفعال. يتضمن النظام ميزات متعددة لإضافة، عرض، تعديل، وحذف بيانات الطلاب.</p>
            
            <div class="architecture-diagram">
                <h3>هيكل النظام</h3>
                <div class="diagram">
                    <p>🎯 <strong>واجهة المستخدم</strong> ← 🐍 <strong>Python Backend</strong> ← 💾 <strong>تخزين البيانات</strong></p>
                </div>
            </div>
            
            <h3>الميزات الرئيسية</h3>
            <div class="feature-grid">
                <div class="feature-card">
                    <div class="feature-title">📝 إضافة طالب جديد</div>
                    <p>إضافة طالب جديد مع جميع المعلومات الأساسية مثل الاسم، العمر، والمعدل التراكمي</p>
                </div>
                
                <div class="feature-card">
                    <div class="feature-title">👀 عرض قائمة الطلاب</div>
                    <p>عرض جميع الطلاب المسجلين في النظام مع إمكانية التصفية والبحث</p>
                </div>
                
                <div class="feature-card">
                    <div class="feature-title">✏️ تعديل بيانات الطالب</div>
                    <p>تحديث معلومات الطالب مثل المعدل التراكمي أو الصف الدراسي</p>
                </div>
                
                <div class="feature-card">
                    <div class="feature-title">🗑️ حذف طالب</div>
                    <p>إزالة طالب من النظام مع تأكيد العملية</p>
                </div>
                
                <div class="feature-card">
                    <div class="feature-title">📊 إحصائيات الطلاب</div>
                    <p>عرض إحصائيات حول أداء الطلاب والمعدلات التراكمية</p>
                </div>
                
                <div class="feature-card">
                    <div class="feature-title">💾 حفظ البيانات</div>
                    <p>حفظ بيانات الطلاب في ملف لتجنب فقدانها عند إغلاق التطبيق</p>
                </div>
            </div>
            
            <h3>المتطلبات التقنية</h3>
            <ul>
                <li>لغة البرمجة: Python 3.x</li>
                <li>واجهة المستخدم: HTML, CSS, JavaScript</li>
                <li>تخزين البيانات: JSON Files</li>
                <li>المكتبات: لا حاجة لمكتبات خارجية</li>
            </ul>
        </div>
        
        <!-- الكود المصدري -->
        <div id="code" class="content-section">
            <h2>الكود المصدري الكامل</h2>
            
            <h3>الكلاس الرئيسي: Student</h3>
            <div class="code-block">
                <span class="code-keyword">class</span> <span class="code-class">Student</span>:<br>
                &nbsp;&nbsp;<span class="code-keyword">def</span> <span class="code-function">__init__</span>(<span class="code-keyword">self</span>, student_id, name, age, grade, gpa):<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">self</span>.student_id = student_id<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">self</span>.name = name<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">self</span>.age = age<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">self</span>.grade = grade<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">self</span>.gpa = gpa<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">self</span>.courses = []<br>
                <br>
                &nbsp;&nbsp;<span class="code-keyword">def</span> <span class="code-function">__str__</span>(<span class="code-keyword">self</span>):<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">return</span> <span class="code-string">f"الطالب: <span class="code-keyword">{self.name}</span> (رقم: <span class="code-keyword">{self.student_id}</span>) - الصف: <span class="code-keyword">{self.grade}</span> - المعدل: <span class="code-keyword">{self.gpa}</span>"</span><br>
                <br>
                &nbsp;&nbsp;<span class="code-keyword">def</span> <span class="code-function">add_course</span>(<span class="code-keyword">self</span>, course_name):<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">self</span>.courses.append(course_name)<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">return</span> <span class="code-string">f"تم إضافة المادة <span class="code-keyword">{course_name}</span> للطالب <span class="code-keyword">{self.name}</span>"</span><br>
                <br>
                &nbsp;&nbsp;<span class="code-keyword">def</span> <span class="code-function">to_dict</span>(<span class="code-keyword">self</span>):<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">return</span> {<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-string">"student_id"</span>: <span class="code-keyword">self</span>.student_id,<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-string">"name"</span>: <span class="code-keyword">self</span>.name,<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-string">"age"</span>: <span class="code-keyword">self</span>.age,<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-string">"grade"</span>: <span class="code-keyword">self</span>.grade,<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-string">"gpa"</span>: <span class="code-keyword">self</span>.gpa,<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-string">"courses"</span>: <span class="code-keyword">self</span>.courses<br>
                &nbsp;&nbsp;&nbsp;&nbsp;}<br>
                <br>
                &nbsp;&nbsp;<span class="code-keyword">@classmethod</span><br>
                &nbsp;&nbsp;<span class="code-keyword">def</span> <span class="code-function">from_dict</span>(<span class="code-keyword">cls</span>, data):<br>
                &nbsp;&nbsp;&nbsp;&nbsp;student = <span class="code-keyword">cls</span>(<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;data[<span class="code-string">"student_id"</span>],<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;data[<span class="code-string">"name"</span>],<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;data[<span class="code-string">"age"</span>],<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;data[<span class="code-string">"grade"</span>],<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;data[<span class="code-string">"gpa"</span>]<br>
                &nbsp;&nbsp;&nbsp;&nbsp;)<br>
                &nbsp;&nbsp;&nbsp;&nbsp;student.courses = data.get(<span class="code-string">"courses"</span>, [])<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">return</span> student
            </div>
            
            <h3>نظام إدارة الطلاب: StudentManager</h3>
            <div class="code-block">
                <span class="code-keyword">import</span> json<br>
                <span class="code-keyword">import</span> os<br>
                <br>
                <span class="code-keyword">class</span> <span class="code-class">StudentManager</span>:<br>
                &nbsp;&nbsp;<span class="code-keyword">def</span> <span class="code-function">__init__</span>(<span class="code-keyword">self</span>, filename=<span class="code-string">"students.json"</span>):<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">self</span>.filename = filename<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">self</span>.students = []<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">self</span>.load_students()<br>
                <br>
                &nbsp;&nbsp;<span class="code-keyword">def</span> <span class="code-function">load_students</span>(<span class="code-keyword">self</span>):<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">try</span>:<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">if</span> os.path.exists(<span class="code-keyword">self</span>.filename):<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">with</span> <span class="code-keyword">open</span>(<span class="code-keyword">self</span>.filename, <span class="code-string">'r'</span>, encoding=<span class="code-string">'utf-8'</span>) <span class="code-keyword">as</span> f:<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;data = json.load(f)<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">self</span>.students = [Student.from_dict(student_data) <span class="code-keyword">for</span> student_data <span class="code-keyword">in</span> data]<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">print</span>(<span class="code-string">f"تم تحميل <span class="code-keyword">{len(self.students)}</span> طالب من الملف"</span>)<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">else</span>:<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">self</span>.students = []<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">except</span> Exception <span class="code-keyword">as</span> e:<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">print</span>(<span class="code-string">f"خطأ في تحميل البيانات: <span class="code-keyword">{e}</span>"</span>)<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">self</span>.students = []<br>
                <br>
                &nbsp;&nbsp;<span class="code-keyword">def</span> <span class="code-function">save_students</span>(<span class="code-keyword">self</span>):<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">try</span>:<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">with</span> <span class="code-keyword">open</span>(<span class="code-keyword">self</span>.filename, <span class="code-string">'w'</span>, encoding=<span class="code-string">'utf-8'</span>) <span class="code-keyword">as</span> f:<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;json.dump([student.to_dict() <span class="code-keyword">for</span> student <span class="code-keyword">in</span> <span class="code-keyword">self</span>.students], f, ensure_ascii=<span class="code-keyword">False</span>, indent=2)<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">print</span>(<span class="code-string">f"تم حفظ <span class="code-keyword">{len(self.students)}</span> طالب في الملف"</span>)<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">except</span> Exception <span class="code-keyword">as</span> e:<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">print</span>(<span class="code-string">f"خطأ في حفظ البيانات: <span class="code-keyword">{e}</span>"</span>)<br>
                <br>
                &nbsp;&nbsp;<span class="code-keyword">def</span> <span class="code-function">add_student</span>(<span class="code-keyword">self</span>, student):<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">if</span> <span class="code-keyword">any</span>(s.student_id == student.student_id <span class="code-keyword">for</span> s <span class="code-keyword">in</span> <span class="code-keyword">self</span>.students):<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">raise</span> ValueError(<span class="code-string">f"رقم الطالب <span class="code-keyword">{student.student_id}</span> موجود مسبقاً"</span>)<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">self</span>.students.append(student)<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">self</span>.save_students()<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">return</span> <span class="code-string">f"تم إضافة الطالب <span class="code-keyword">{student.name}</span> بنجاح"</span><br>
                <br>
                &nbsp;&nbsp;<span class="code-keyword">def</span> <span class="code-function">get_student</span>(<span class="code-keyword">self</span>, student_id):<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">for</span> student <span class="code-keyword">in</span> <span class="code-keyword">self</span>.students:<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">if</span> student.student_id == student_id:<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">return</span> student<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">return</span> <span class="code-keyword">None</span><br>
                <br>
                &nbsp;&nbsp;<span class="code-keyword">def</span> <span class="code-function">update_student</span>(<span class="code-keyword">self</span>, student_id, **kwargs):<br>
                &nbsp;&nbsp;&nbsp;&nbsp;student = <span class="code-keyword">self</span>.get_student(student_id)<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">if</span> <span class="code-keyword">not</span> student:<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">raise</span> ValueError(<span class="code-string">f"الطالب برقم <span class="code-keyword">{student_id}</span> غير موجود"</span>)<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">for</span> key, value <span class="code-keyword">in</span> kwargs.items():<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">if</span> hasattr(student, key):<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;setattr(student, key, value)<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">self</span>.save_students()<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">return</span> <span class="code-string">f"تم تحديث بيانات الطالب <span class="code-keyword">{student.name}</span>"</span><br>
                <br>
                &nbsp;&nbsp;<span class="code-keyword">def</span> <span class="code-function">delete_student</span>(<span class="code-keyword">self</span>, student_id):<br>
                &nbsp;&nbsp;&nbsp;&nbsp;student = <span class="code-keyword">self</span>.get_student(student_id)<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">if</span> <span class="code-keyword">not</span> student:<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">raise</span> ValueError(<span class="code-string">f"الطالب برقم <span class="code-keyword">{student_id}</span> غير موجود"</span>)<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">self</span>.students = [s <span class="code-keyword">for</span> s <span class="code-keyword">in</span> <span class="code-keyword">self</span>.students <span class="code-keyword">if</span> s.student_id != student_id]<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">self</span>.save_students()<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">return</span> <span class="code-string">f"تم حذف الطالب <span class="code-keyword">{student.name}</span>"</span><br>
                <br>
                &nbsp;&nbsp;<span class="code-keyword">def</span> <span class="code-function">list_students</span>(<span class="code-keyword">self</span>):<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">return</span> <span class="code-keyword">self</span>.students<br>
                <br>
                &nbsp;&nbsp;<span class="code-keyword">def</span> <span class="code-function">get_statistics</span>(<span class="code-keyword">self</span>):<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">if</span> <span class="code-keyword">not</span> <span class="code-keyword">self</span>.students:<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">return</span> {<span class="code-string">"message"</span>: <span class="code-string">"لا يوجد طلاب في النظام"</span>}<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<br>
                &nbsp;&nbsp;&nbsp;&nbsp;total_students = len(<span class="code-keyword">self</span>.students)<br>
                &nbsp;&nbsp;&nbsp;&nbsp;average_gpa = sum(student.gpa <span class="code-keyword">for</span> student <span class="code-keyword">in</span> <span class="code-keyword">self</span>.students) / total_students<br>
                &nbsp;&nbsp;&nbsp;&nbsp;max_gpa = max(student.gpa <span class="code-keyword">for</span> student <span class="code-keyword">in</span> <span class="code-keyword">self</span>.students)<br>
                &nbsp;&nbsp;&nbsp;&nbsp;min_gpa = min(student.gpa <span class="code-keyword">for</span> student <span class="code-keyword">in</span> <span class="code-keyword">self</span>.students)<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">return</span> {<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-string">"total_students"</span>: total_students,<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-string">"average_gpa"</span>: round(average_gpa, 2),<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-string">"max_gpa"</span>: max_gpa,<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-string">"min_gpa"</span>: min_gpa<br>
                &nbsp;&nbsp;&nbsp;&nbsp;}
            </div>
        </div>
        
        <!-- تجربة المشروع -->
        <div id="demo" class="content-section">
            <h2>تجربة النظام مباشرة</h2>
            <p>يمكنك تجربة نظام إدارة الطلاب مباشرة من خلال هذه الواجهة التفاعلية:</p>
            
            <div class="demo-container">
                <h3>إضافة طالب جديد</h3>
                <div class="student-form">
                    <div class="form-group">
                        <label class="form-label">رقم الطالب:</label>
                        <input type="text" id="studentId" class="form-input" placeholder="أدخل رقم الطالب">
                    </div>
                    <div class="form-group">
                        <label class="form-label">اسم الطالب:</label>
                        <input type="text" id="studentName" class="form-input" placeholder="أدخل اسم الطالب">
                    </div>
                    <div class="form-group">
                        <label class="form-label">العمر:</label>
                        <input type="number" id="studentAge" class="form-input" placeholder="أدخل عمر الطالب">
                    </div>
                    <div class="form-group">
                        <label class="form-label">الصف الدراسي:</label>
                        <input type="text" id="studentGrade" class="form-input" placeholder="أدخل الصف الدراسي">
                    </div>
                    <div class="form-group">
                        <label class="form-label">المعدل التراكمي:</label>
                        <input type="number" step="0.01" id="studentGPA" class="form-input" placeholder="أدخل المعدل التراكمي">
                    </div>
                    <button class="form-button" onclick="addStudent()">إضافة طالب</button>
                </div>
                
                <h3>قائمة الطلاب</h3>
                <div class="demo-controls">
                    <button class="demo-button" onclick="listStudents()">عرض جميع الطلاب</button>
                    <button class="demo-button" onclick="showStatistics()">عرض الإحصائيات</button>
                    <button class="demo-button" onclick="clearOutput()">مسح النتائج</button>
                </div>
                
                <div id="demoOutput" class="demo-output">
                    👈 إبدأ بإضافة طالب جديد أو عرض قائمة الطلاب
                </div>
                
                <div id="studentsList" class="student-list">
                    <!-- سيتم عرض الطلاب هنا -->
                </div>
            </div>
        </div>
        
        <!-- شرح المشروع -->
        <div id="explanation" class="content-section">
            <h2>شرح مفصل للمشروع</h2>
            
            <h3>هيكل المشروع</h3>
            <p>يتكون المشروع من مكونين رئيسيين:</p>
            <ol>
                <li><strong>كلاس Student</strong>: يمثل كائن الطالب ويحتوي على جميع خصائصه</li>
                <li><strong>كلاس StudentManager</strong>: يدير عمليات CRUD (إنشاء، قراءة، تحديث، حذف) للطلاب</li>
            </ol>
            
            <h3>شرح كلاس Student</h3>
            <p>هذا الكلاس يمثل الطالب ويحتوي على:</p>
            <ul>
                <li><code>__init__</code>: مُنشئ الكلاس لتهيئة خصائص الطالب</li>
                <li><code>__str__</code>: طريقة لعرض معلومات الطالب بشكل مقروء</li>
                <li><code>add_course</code>: إضافة مادة دراسية للطالب</li>
                <li><code>to_dict</code>: تحويل كائن الطالب إلى قاموس للتخزين</li>
                <li><code>from_dict</code>: طريقة صنف لإنشاء كائن طالب من قاموس</li>
            </ul>
            
            <h3>شرح كلاس StudentManager</h3>
            <p>هذا الكلاس يدير جميع العمليات على الطلاب:</p>
            <ul>
                <li><code>load_students</code>: تحميل بيانات الطلاب من ملف JSON</li>
                <li><code>save_students</code>: حفظ بيانات الطلاب إلى ملف JSON</li>
                <li><code>add_student</code>: إضافة طالب جديد مع التحقق من التكرار</li>
                <li><code>get_student</code>: البحث عن طالب برقمه</li>
                <li><code>update_student</code>: تحديث بيانات الطالب</li>
                <li><code>delete_student</code>: حذف طالب من النظام</li>
                <li><code>list_students</code>: عرض جميع الطلاب</li>
                <li><code>get_statistics</code>: إحصائيات عن أداء الطلاب</li>
            </ul>
            
            <h3>مثال على استخدام النظام</h3>
            <div class="code-block">
                <span class="code-comment"># إنشاء مدير الطلاب</span><br>
                manager = StudentManager()<br>
                <br>
                <span class="code-comment"># إضافة طالب جديد</span><br>
                student1 = Student(<span class="code-string">"2024001"</span>, <span class="code-string">"أحمد محمد"</span>, 17, <span class="code-string">"الصف الحادي عشر"</span>, 3.8)<br>
                manager.add_student(student1)<br>
                <br>
                <span class="code-comment"># إضافة مادة للطالب</span><br>
                student1.add_course(<span class="code-string">"الرياضيات"</span>)<br>
                <br>
                <span class="code-comment"># عرض جميع الطلاب</span><br>
                <span class="code-keyword">for</span> student <span class="code-keyword">in</span> manager.list_students():<br>
                &nbsp;&nbsp;<span class="code-keyword">print</span>(student)<br>
                <br>
                <span class="code-comment"># تحديث معدل الطالب</span><br>
                manager.update_student(<span class="code-string">"2024001"</span>, gpa=3.9)<br>
                <br>
                <span class="code-comment"># عرض الإحصائيات</span><br>
                stats = manager.get_statistics()<br>
                <span class="code-keyword">print</span>(stats)
            </div>
            
            <h3>معالجة الأخطاء في المشروع</h3>
            <p>يحتوي المشروع على معالجة شاملة للأخطاء:</p>
            <ul>
                <li>التحقق من وجود الملف قبل التحميل</li>
                <li>معالجة استثناءات JSON</li>
                <li>التحقق من تكرار أرقام الطلاب</li>
                <li>التحقق من وجود الطالب قبل التحديث أو الحذف</li>
            </ul>
            
            <h3>تطوير المستقبلي</h3>
            <p>يمكن تطوير النظام بإضافة الميزات التالية:</p>
            <ul>
                <li>واجهة مستخدم رسومية باستخدام Tkinter أو PyQt</li>
                <li>نظام تسجيل دخول للمستخدمين</li>
                <li>تقارير متقدمة وإحصائيات</li>
                <li>ربط بقاعدة بيانات حقيقية مثل MySQL أو PostgreSQL</li>
                <li>واجهة ويب باستخدام Flask أو Django</li>
            </ul>
        </div>
    </div>
    
    <footer>
        <div class="container">
            <p>مشروع نظام إدارة الطلاب - تطبيق عملي لتعلم Python وبرمجة الأنظمة</p>
            <p>يمكنك استخدام وتطوير هذا المشروع بحرية لأغراض التعليم</p>
        </div>
    </footer>

    <script>
        // محاكاة نظام إدارة الطلاب باستخدام JavaScript
        class Student {
            constructor(studentId, name, age, grade, gpa) {
                this.studentId = studentId;
                this.name = name;
                this.age = age;
                this.grade = grade;
                this.gpa = gpa;
                this.courses = [];
            }
            
            toString() {
                return `الطالب: ${this.name} (رقم: ${this.studentId}) - الصف: ${this.grade} - المعدل: ${this.gpa}`;
            }
            
            addCourse(courseName) {
                this.courses.push(courseName);
                return `تم إضافة المادة ${courseName} للطالب ${this.name}`;
            }
        }

        class StudentManager {
            constructor() {
                this.students = JSON.parse(localStorage.getItem('students')) || [];
            }
            
            saveStudents() {
                localStorage.setItem('students', JSON.stringify(this.students));
            }
            
            addStudent(student) {
                if (this.students.some(s => s.studentId === student.studentId)) {
                    throw new Error(`رقم الطالب ${student.studentId} موجود مسبقاً`);
                }
                this.students.push(student);
                this.saveStudents();
                return `تم إضافة الطالب ${student.name} بنجاح`;
            }
            
            getStudent(studentId) {
                return this.students.find(student => student.studentId === studentId);
            }
            
            listStudents() {
                return this.students;
            }
            
            getStatistics() {
                if (!this.students.length) {
                    return {"message": "لا يوجد طلاب في النظام"};
                }
                
                const totalStudents = this.students.length;
                const averageGpa = this.students.reduce((sum, student) => sum + student.gpa, 0) / totalStudents;
                const maxGpa = Math.max(...this.students.map(student => student.gpa));
                const minGpa = Math.min(...this.students.map(student => student.gpa));
                
                return {
                    "total_students": totalStudents,
                    "average_gpa": averageGpa.toFixed(2),
                    "max_gpa": maxGpa,
                    "min_gpa": minGpa
                };
            }
            
            deleteStudent(studentId) {
                const student = this.getStudent(studentId);
                if (!student) {
                    throw new Error(`الطالب برقم ${studentId} غير موجود`);
                }
                
                this.students = this.students.filter(s => s.studentId !== studentId);
                this.saveStudents();
                return `تم حذف الطالب ${student.name}`;
            }
        }

        // إنشاء مدير الطلاب
        const manager = new StudentManager();

        // وظائف الواجهة
        function addStudent() {
            const studentId = document.getElementById('studentId').value;
            const name = document.getElementById('studentName').value;
            const age = parseInt(document.getElementById('studentAge').value);
            const grade = document.getElementById('studentGrade').value;
            const gpa = parseFloat(document.getElementById('studentGPA').value);
            
            if (!studentId || !name || !age || !grade || !gpa) {
                alert('يرجى ملء جميع الحقول');
                return;
            }
            
            try {
                const student = new Student(studentId, name, age, grade, gpa);
                const result = manager.addStudent(student);
                document.getElementById('demoOutput').textContent = result;
                clearForm();
                displayStudents();
            } catch (error) {
                document.getElementById('demoOutput').textContent = `خطأ: ${error.message}`;
            }
        }

        function listStudents() {
            const students = manager.listStudents();
            const output = document.getElementById('demoOutput');
            
            if (students.length === 0) {
                output.textContent = 'لا يوجد طلاب في النظام';
                return;
            }
            
            let result = 'قائمة الطلاب:\n\n';
            students.forEach(student => {
                result += `📚 ${student.toString()}\n`;
                if (student.courses.length > 0) {
                    result += `   المواد: ${student.courses.join(', ')}\n`;
                }
                result += '\n';
            });
            
            output.textContent = result;
        }

        function showStatistics() {
            const stats = manager.getStatistics();
            const output = document.getElementById('demoOutput');
            
            if (stats.message) {
                output.textContent = stats.message;
                return;
            }
            
            output.textContent = `📊 إحصائيات الطلاب:
            
عدد الطلاب: ${stats.total_students}
المعدل التراكمي المتوسط: ${stats.average_gpa}
أعلى معدل تراكمي: ${stats.max_gpa}
أقل معدل تراكمي: ${stats.min_gpa}`;
        }

        function clearOutput() {
            document.getElementById('demoOutput').textContent = '👈 إبدأ بإضافة طالب جديد أو عرض قائمة الطلاب';
        }

        function clearForm() {
            document.getElementById('studentId').value = '';
            document.getElementById('studentName').value = '';
            document.getElementById('studentAge').value = '';
            document.getElementById('studentGrade').value = '';
            document.getElementById('studentGPA').value = '';
        }

        function displayStudents() {
            const studentsList = document.getElementById('studentsList');
            const students = manager.listStudents();
            
            studentsList.innerHTML = '';
            
            students.forEach(student => {
                const studentElement = document.createElement('div');
                studentElement.className = 'student-item';
                studentElement.innerHTML = `
                    <div class="student-info">
                        <strong>${student.name}</strong> (${student.studentId})<br>
                        العمر: ${student.age} | الصف: ${student.grade} | المعدل: ${student.gpa}
                    </div>
                    <div class="student-actions">
                        <button class="action-button delete-button" onclick="deleteStudent('${student.studentId}')">حذف</button>
                    </div>
                `;
                studentsList.appendChild(studentElement);
            });
        }

        function deleteStudent(studentId) {
            if (confirm('هل أنت متأكد من حذف هذا الطالب؟')) {
                try {
                    const result = manager.deleteStudent(studentId);
                    document.getElementById('demoOutput').textContent = result;
                    displayStudents();
                } catch (error) {
                    document.getElementById('demoOutput').textContent = `خطأ: ${error.message}`;
                }
            }
        }

        // تهيئة العرض
        document.addEventListener('DOMContentLoaded', () => {
            displayStudents();
        });

        // تبديل علامات التبويب
        document.querySelectorAll('.tab').forEach(tab => {
            tab.addEventListener('click', () => {
                document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
                document.querySelectorAll('.content-section').forEach(section => section.classList.remove('active'));
                
                tab.classList.add('active');
                const tabId = tab.getAttribute('data-tab');
                document.getElementById(tabId).classList.add('active');
            });
        });
    </script>
</body>
</html>