<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>نظام إدارة المهام المتقدم - Advanced Task Manager</title>
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
        
        .project-tabs {
            display: flex;
            background: white;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            margin-bottom: 2rem;
            flex-wrap: wrap;
        }
        
        .tab {
            flex: 1;
            padding: 1rem;
            text-align: center;
            cursor: pointer;
            transition: all 0.3s ease;
            font-weight: 600;
            min-width: 150px;
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
        
        .task-form {
            background: var(--light);
            padding: 1.5rem;
            border-radius: 8px;
            margin: 1rem 0;
        }
        
        .form-group {
            margin-bottom: 1rem;
        }
        
        .form-row {
            display: flex;
            gap: 15px;
            flex-wrap: wrap;
        }
        
        .form-row .form-group {
            flex: 1;
            min-width: 200px;
        }
        
        .form-label {
            display: block;
            margin-bottom: 0.5rem;
            font-weight: 600;
        }
        
        .form-input, .form-select, .form-textarea {
            width: 100%;
            padding: 0.8rem;
            border: 1px solid #ddd;
            border-radius: 5px;
            font-size: 1rem;
        }
        
        .form-textarea {
            height: 100px;
            resize: vertical;
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
            margin-right: 10px;
        }
        
        .form-button:hover {
            background: #27ae60;
        }
        
        .form-button.secondary {
            background: var(--secondary);
        }
        
        .form-button.secondary:hover {
            background: #2980b9;
        }
        
        .task-list {
            margin-top: 1rem;
        }
        
        .task-item {
            background: white;
            padding: 1rem;
            margin-bottom: 0.5rem;
            border-radius: 5px;
            border-left: 4px solid var(--info);
            transition: all 0.3s ease;
        }
        
        .task-item.high-priority {
            border-left-color: var(--danger);
            background: #ffeaea;
        }
        
        .task-item.medium-priority {
            border-left-color: var(--warning);
            background: #fff4e6;
        }
        
        .task-item.completed {
            border-left-color: var(--success);
            background: #eaffea;
            opacity: 0.8;
        }
        
        .task-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 0.5rem;
        }
        
        .task-title {
            font-weight: bold;
            font-size: 1.1rem;
            margin-bottom: 0.3rem;
        }
        
        .task-meta {
            display: flex;
            gap: 15px;
            font-size: 0.9rem;
            color: #666;
            flex-wrap: wrap;
        }
        
        .task-description {
            margin: 0.5rem 0;
            color: #555;
        }
        
        .task-tags {
            display: flex;
            gap: 5px;
            flex-wrap: wrap;
            margin: 0.5rem 0;
        }
        
        .task-tag {
            background: var(--info);
            color: white;
            padding: 0.2rem 0.5rem;
            border-radius: 3px;
            font-size: 0.8rem;
        }
        
        .task-actions {
            display: flex;
            gap: 10px;
            margin-top: 0.5rem;
        }
        
        .action-button {
            padding: 0.4rem 0.8rem;
            border: none;
            border-radius: 3px;
            cursor: pointer;
            font-weight: 600;
            font-size: 0.9rem;
        }
        
        .complete-button {
            background: var(--success);
            color: white;
        }
        
        .edit-button {
            background: var(--warning);
            color: white;
        }
        
        .delete-button {
            background: var(--danger);
            color: white;
        }
        
        .filters {
            background: var(--light);
            padding: 1rem;
            border-radius: 8px;
            margin: 1rem 0;
        }
        
        .filter-group {
            display: flex;
            gap: 15px;
            flex-wrap: wrap;
            align-items: center;
        }
        
        .statistics {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 15px;
            margin: 1rem 0;
        }
        
        .stat-card {
            background: white;
            padding: 1rem;
            border-radius: 8px;
            text-align: center;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        
        .stat-number {
            font-size: 2rem;
            font-weight: bold;
            color: var(--secondary);
        }
        
        .stat-label {
            color: #666;
            font-size: 0.9rem;
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
            
            .task-header {
                flex-direction: column;
                gap: 10px;
            }
            
            .form-row {
                flex-direction: column;
            }
        }
    </style>
</head>
<body>
    <header>
        <div class="container">
            <h1>نظام إدارة المهام المتقدم - Advanced Task Manager</h1>
            <p class="subtitle">مشروع متكامل بلغة Python لإدارة المهام باستخدام الملفات مع واجهة ويب تفاعلية</p>
        </div>
    </header>
    
    <div class="container">
        <div class="project-tabs">
            <div class="tab active" data-tab="overview">نظرة عامة</div>
            <div class="tab" data-tab="code">الكود المصدري</div>
            <div class="tab" data-tab="demo">تجربة المشروع</div>
            <div class="tab" data-tab="explanation">شرح المشروع</div>
            <div class="tab" data-tab="features">الميزات المتقدمة</div>
        </div>
        
        <!-- نظرة عامة -->
        <div id="overview" class="content-section active">
            <h2>نظرة عامة على المشروع</h2>
            <p>نظام إدارة المهام المتقدم هو تطبيق متكامل يسمح للمستخدمين بتنظيم وإدارة مهامهم اليومية بكفاءة عالية. يدعم النظام ميزات متقدمة مثل الأولويات، الفئات، التواريخ، والإحصائيات.</p>
            
            <div class="architecture-diagram">
                <h3>هيكل النظام</h3>
                <div class="diagram">
                    <p>🎯 <strong>واجهة المستخدم</strong> ← 🐍 <strong>Python Backend</strong> ← 💾 <strong>تخزين البيانات (JSON)</strong></p>
                </div>
            </div>
            
            <h3>الميزات الرئيسية</h3>
            <div class="feature-grid">
                <div class="feature-card">
                    <div class="feature-title">📝 إضافة مهام متقدمة</div>
                    <p>إضافة مهام مع وصف مفصل، أولوية، فئة، وتواريخ بدء وانتهاء</p>
                </div>
                
                <div class="feature-card">
                    <div class="feature-title">🏷️ نظام الفئات والوسوم</div>
                    <p>تنظيم المهام باستخدام فئات ووسوم متعددة</p>
                </div>
                
                <div class="feature-card">
                    <div class="feature-title">⚡ إدارة الأولويات</div>
                    <p>تحديد أولويات المهام (عالي، متوسط، منخفض)</p>
                </div>
                
                <div class="feature-card">
                    <div class="feature-title">📊 إحصائيات متقدمة</div>
                    <p>عرض إحصائيات عن أداء المهام والإنتاجية</p>
                </div>
                
                <div class="feature-card">
                    <div class="feature-title">🔍 البحث والتصفية</div>
                    <p>بحث في المهام وتصفيتها حسب الحالة، الأولوية، والفئة</p>
                </div>
                
                <div class="feature-card">
                    <div class="feature-title">💾 حفظ البيانات</div>
                    <p>حفظ جميع البيانات في ملفات JSON مع نسخ احتياطي</p>
                </div>
            </div>
            
            <h3>المتطلبات التقنية</h3>
            <ul>
                <li>لغة البرمجة: Python 3.x</li>
                <li>تخزين البيانات: JSON Files</li>
                <li>المكتبات: datetime, json, os (مكتبات قياسية)</li>
                <li>واجهة المستخدم: HTML, CSS, JavaScript (للتجربة التفاعلية)</li>
            </ul>
        </div>
        
        <!-- الكود المصدري -->
        <div id="code" class="content-section">
            <h2>الكود المصدري الكامل</h2>
            
            <h3>الكلاس الرئيسي: Task</h3>
            <div class="code-block">
                <span class="code-keyword">import</span> json<br>
                <span class="code-keyword">import</span> os<br>
                <span class="code-keyword">from</span> datetime <span class="code-keyword">import</span> datetime, timedelta<br>
                <span class="code-keyword">from</span> enum <span class="code-keyword">import</span> Enum<br>
                <br>
                <span class="code-keyword">class</span> <span class="code-class">Priority</span>(Enum):<br>
                &nbsp;&nbsp;LOW = <span class="code-string">"منخفض"</span><br>
                &nbsp;&nbsp;MEDIUM = <span class="code-string">"متوسط"</span><br>
                &nbsp;&nbsp;HIGH = <span class="code-string">"عالي"</span><br>
                <br>
                <span class="code-keyword">class</span> <span class="code-class">Status</span>(Enum):<br>
                &nbsp;&nbsp;PENDING = <span class="code-string">"قيد الانتظار"</span><br>
                &nbsp;&nbsp;IN_PROGRESS = <span class="code-string">"قيد التنفيذ"</span><br>
                &nbsp;&nbsp;COMPLETED = <span class="code-string">"مكتمل"</span><br>
                &nbsp;&nbsp;CANCELLED = <span class="code-string">"ملغي"</span><br>
                <br>
                <span class="code-keyword">class</span> <span class="code-class">Task</span>:<br>
                &nbsp;&nbsp;<span class="code-keyword">def</span> <span class="code-function">__init__</span>(<span class="code-keyword">self</span>, task_id, title, description=<span class="code-string">""</span>, priority=Priority.MEDIUM, <br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;category=<span class="code-string">"عام"</span>, tags=None, due_date=None, status=Status.PENDING):<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">self</span>.task_id = task_id<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">self</span>.title = title<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">self</span>.description = description<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">self</span>.priority = priority<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">self</span>.category = category<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">self</span>.tags = tags <span class="code-keyword">if</span> tags <span class="code-keyword">is</span> <span class="code-keyword">not</span> <span class="code-keyword">None</span> <span class="code-keyword">else</span> []<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">self</span>.due_date = due_date<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">self</span>.status = status<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">self</span>.created_date = datetime.now()<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">self</span>.completed_date = <span class="code-keyword">None</span><br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">self</span>.updated_date = datetime.now()<br>
                <br>
                &nbsp;&nbsp;<span class="code-keyword">def</span> <span class="code-function">__str__</span>(<span class="code-keyword">self</span>):<br>
                &nbsp;&nbsp;&nbsp;&nbsp;due_info = <span class="code-string">f" - مستحق: <span class="code-keyword">{self.due_date.strftime('%Y-%m-%d')}</span>"</span> <span class="code-keyword">if</span> <span class="code-keyword">self</span>.due_date <span class="code-keyword">else</span> <span class="code-string">""</span><br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">return</span> <span class="code-string">f"[<span class="code-keyword">{self.status.value}</span>] <span class="code-keyword">{self.title}</span> (<span class="code-keyword">{self.priority.value}</span>)<span class="code-keyword">{due_info}</span>"</span><br>
                <br>
                &nbsp;&nbsp;<span class="code-keyword">def</span> <span class="code-function">mark_completed</span>(<span class="code-keyword">self</span>):<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">self</span>.status = Status.COMPLETED<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">self</span>.completed_date = datetime.now()<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">self</span>.updated_date = datetime.now()<br>
                <br>
                &nbsp;&nbsp;<span class="code-keyword">def</span> <span class="code-function">is_overdue</span>(<span class="code-keyword">self</span>):<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">if</span> <span class="code-keyword">self</span>.due_date <span class="code-keyword">and</span> <span class="code-keyword">self</span>.status <span class="code-keyword">not</span> <span class="code-keyword">in</span> [Status.COMPLETED, Status.CANCELLED]:<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">return</span> datetime.now() > <span class="code-keyword">self</span>.due_date<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">return</span> <span class="code-keyword">False</span><br>
                <br>
                &nbsp;&nbsp;<span class="code-keyword">def</span> <span class="code-function">to_dict</span>(<span class="code-keyword">self</span>):<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">return</span> {<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-string">"task_id"</span>: <span class="code-keyword">self</span>.task_id,<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-string">"title"</span>: <span class="code-keyword">self</span>.title,<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-string">"description"</span>: <span class="code-keyword">self</span>.description,<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-string">"priority"</span>: <span class="code-keyword">self</span>.priority.value,<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-string">"category"</span>: <span class="code-keyword">self</span>.category,<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-string">"tags"</span>: <span class="code-keyword">self</span>.tags,<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-string">"due_date"</span>: <span class="code-keyword">self</span>.due_date.isoformat() <span class="code-keyword">if</span> <span class="code-keyword">self</span>.due_date <span class="code-keyword">else</span> <span class="code-keyword">None</span>,<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-string">"status"</span>: <span class="code-keyword">self</span>.status.value,<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-string">"created_date"</span>: <span class="code-keyword">self</span>.created_date.isoformat(),<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-string">"completed_date"</span>: <span class="code-keyword">self</span>.completed_date.isoformat() <span class="code-keyword">if</span> <span class="code-keyword">self</span>.completed_date <span class="code-keyword">else</span> <span class="code-keyword">None</span>,<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-string">"updated_date"</span>: <span class="code-keyword">self</span>.updated_date.isoformat()<br>
                &nbsp;&nbsp;&nbsp;&nbsp;}<br>
                <br>
                &nbsp;&nbsp;<span class="code-keyword">@classmethod</span><br>
                &nbsp;&nbsp;<span class="code-keyword">def</span> <span class="code-function">from_dict</span>(<span class="code-keyword">cls</span>, data):<br>
                &nbsp;&nbsp;&nbsp;&nbsp;task = <span class="code-keyword">cls</span>(<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;data[<span class="code-string">"task_id"</span>],<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;data[<span class="code-string">"title"</span>],<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;data.get(<span class="code-string">"description"</span>, <span class="code-string">""</span>),<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Priority(data[<span class="code-string">"priority"</span>]),<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;data.get(<span class="code-string">"category"</span>, <span class="code-string">"عام"</span>),<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;data.get(<span class="code-string">"tags"</span>, []),<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;datetime.fromisoformat(data[<span class="code-string">"due_date"</span>]) <span class="code-keyword">if</span> data.get(<span class="code-string">"due_date"</span>) <span class="code-keyword">else</span> <span class="code-keyword">None</span>,<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Status(data[<span class="code-string">"status"</span>])<br>
                &nbsp;&nbsp;&nbsp;&nbsp;)<br>
                &nbsp;&nbsp;&nbsp;&nbsp;task.created_date = datetime.fromisoformat(data[<span class="code-string">"created_date"</span>])<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">if</span> data.get(<span class="code-string">"completed_date"</span>):<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;task.completed_date = datetime.fromisoformat(data[<span class="code-string">"completed_date"</span>])<br>
                &nbsp;&nbsp;&nbsp;&nbsp;task.updated_date = datetime.fromisoformat(data[<span class="code-string">"updated_date"</span>])<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">return</span> task
            </div>
            
            <h3>نظام إدارة المهام: TaskManager</h3>
            <div class="code-block">
                <span class="code-keyword">class</span> <span class="code-class">TaskManager</span>:<br>
                &nbsp;&nbsp;<span class="code-keyword">def</span> <span class="code-function">__init__</span>(<span class="code-keyword">self</span>, data_file=<span class="code-string">"tasks.json"</span>, backup_file=<span class="code-string">"tasks_backup.json"</span>):<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">self</span>.data_file = data_file<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">self</span>.backup_file = backup_file<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">self</span>.tasks = []<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">self</span>.load_tasks()<br>
                <br>
                &nbsp;&nbsp;<span class="code-keyword">def</span> <span class="code-function">load_tasks</span>(<span class="code-keyword">self</span>):<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">try</span>:<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">if</span> os.path.exists(<span class="code-keyword">self</span>.data_file):<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">with</span> <span class="code-keyword">open</span>(<span class="code-keyword">self</span>.data_file, <span class="code-string">'r'</span>, encoding=<span class="code-string">'utf-8'</span>) <span class="code-keyword">as</span> f:<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;data = json.load(f)<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">self</span>.tasks = [Task.from_dict(task_data) <span class="code-keyword">for</span> task_data <span class="code-keyword">in</span> data]<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">print</span>(<span class="code-string">f"تم تحميل <span class="code-keyword">{len(self.tasks)}</span> مهمة من الملف"</span>)<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">else</span>:<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">self</span>.tasks = []<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">except</span> Exception <span class="code-keyword">as</span> e:<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">print</span>(<span class="code-string">f"خطأ في تحميل المهام: <span class="code-keyword">{e}</span>"</span>)<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">self</span>.restore_from_backup()<br>
                <br>
                &nbsp;&nbsp;<span class="code-keyword">def</span> <span class="code-function">save_tasks</span>(<span class="code-keyword">self</span>):<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">try</span>:<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-comment"># حفظ نسخة احتياطية أولاً</span><br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">if</span> os.path.exists(<span class="code-keyword">self</span>.data_file):<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;os.replace(<span class="code-keyword">self</span>.data_file, <span class="code-keyword">self</span>.backup_file)<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">with</span> <span class="code-keyword">open</span>(<span class="code-keyword">self</span>.data_file, <span class="code-string">'w'</span>, encoding=<span class="code-string">'utf-8'</span>) <span class="code-keyword">as</span> f:<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;json.dump([task.to_dict() <span class="code-keyword">for</span> task <span class="code-keyword">in</span> <span class="code-keyword">self</span>.tasks], f, ensure_ascii=<span class="code-keyword">False</span>, indent=2)<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">print</span>(<span class="code-string">f"تم حفظ <span class="code-keyword">{len(self.tasks)}</span> مهمة في الملف"</span>)<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">except</span> Exception <span class="code-keyword">as</span> e:<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">print</span>(<span class="code-string">f"خطأ في حفظ المهام: <span class="code-keyword">{e}</span>"</span>)<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">self</span>.restore_from_backup()<br>
                <br>
                &nbsp;&nbsp;<span class="code-keyword">def</span> <span class="code-function">restore_from_backup</span>(<span class="code-keyword">self</span>):<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">try</span>:<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">if</span> os.path.exists(<span class="code-keyword">self</span>.backup_file):<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;os.replace(<span class="code-keyword">self</span>.backup_file, <span class="code-keyword">self</span>.data_file)<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">self</span>.load_tasks()<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">print</span>(<span class="code-string">"تم استعادة البيانات من النسخة الاحتياطية"</span>)<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">except</span> Exception <span class="code-keyword">as</span> e:<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">print</span>(<span class="code-string">f"خطأ في استعادة النسخة الاحتياطية: <span class="code-keyword">{e}</span>"</span>)<br>
                <br>
                &nbsp;&nbsp;<span class="code-keyword">def</span> <span class="code-function">add_task</span>(<span class="code-keyword">self</span>, task):<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">if</span> <span class="code-keyword">any</span>(t.task_id == task.task_id <span class="code-keyword">for</span> t <span class="code-keyword">in</span> <span class="code-keyword">self</span>.tasks):<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">raise</span> ValueError(<span class="code-string">f"رقم المهمة <span class="code-keyword">{task.task_id}</span> موجود مسبقاً"</span>)<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">self</span>.tasks.append(task)<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">self</span>.save_tasks()<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">return</span> <span class="code-string">f"تم إضافة المهمة '<span class="code-keyword">{task.title}</span>' بنجاح"</span><br>
                <br>
                &nbsp;&nbsp;<span class="code-keyword">def</span> <span class="code-function">get_task</span>(<span class="code-keyword">self</span>, task_id):<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">for</span> task <span class="code-keyword">in</span> <span class="code-keyword">self</span>.tasks:<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">if</span> task.task_id == task_id:<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">return</span> task<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">return</span> <span class="code-keyword">None</span><br>
                <br>
                &nbsp;&nbsp;<span class="code-keyword">def</span> <span class="code-function">update_task</span>(<span class="code-keyword">self</span>, task_id, **kwargs):<br>
                &nbsp;&nbsp;&nbsp;&nbsp;task = <span class="code-keyword">self</span>.get_task(task_id)<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">if</span> <span class="code-keyword">not</span> task:<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">raise</span> ValueError(<span class="code-string">f"المهمة برقم <span class="code-keyword">{task_id}</span> غير موجودة"</span>)<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">for</span> key, value <span class="code-keyword">in</span> kwargs.items():<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">if</span> hasattr(task, key):<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;setattr(task, key, value)<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<br>
                &nbsp;&nbsp;&nbsp;&nbsp;task.updated_date = datetime.now()<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">self</span>.save_tasks()<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">return</span> <span class="code-string">f"تم تحديث المهمة '<span class="code-keyword">{task.title}</span>'"</span><br>
                <br>
                &nbsp;&nbsp;<span class="code-keyword">def</span> <span class="code-function">delete_task</span>(<span class="code-keyword">self</span>, task_id):<br>
                &nbsp;&nbsp;&nbsp;&nbsp;task = <span class="code-keyword">self</span>.get_task(task_id)<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">if</span> <span class="code-keyword">not</span> task:<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">raise</span> ValueError(<span class="code-string">f"المهمة برقم <span class="code-keyword">{task_id}</span> غير موجودة"</span>)<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">self</span>.tasks = [t <span class="code-keyword">for</span> t <span class="code-keyword">in</span> <span class="code-keyword">self</span>.tasks <span class="code-keyword">if</span> t.task_id != task_id]<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">self</span>.save_tasks()<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">return</span> <span class="code-string">f"تم حذف المهمة '<span class="code-keyword">{task.title}</span>'"</span><br>
                <br>
                &nbsp;&nbsp;<span class="code-keyword">def</span> <span class="code-function">complete_task</span>(<span class="code-keyword">self</span>, task_id):<br>
                &nbsp;&nbsp;&nbsp;&nbsp;task = <span class="code-keyword">self</span>.get_task(task_id)<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">if</span> <span class="code-keyword">not</span> task:<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">raise</span> ValueError(<span class="code-string">f"المهمة برقم <span class="code-keyword">{task_id}</span> غير موجودة"</span>)<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<br>
                &nbsp;&nbsp;&nbsp;&nbsp;task.mark_completed()<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">self</span>.save_tasks()<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">return</span> <span class="code-string">f"تم إكمال المهمة '<span class="code-keyword">{task.title}</span>'"</span><br>
                <br>
                &nbsp;&nbsp;<span class="code-keyword">def</span> <span class="code-function">list_tasks</span>(<span class="code-keyword">self</span>, status=None, priority=None, category=None):<br>
                &nbsp;&nbsp;&nbsp;&nbsp;filtered_tasks = <span class="code-keyword">self</span>.tasks<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">if</span> status:<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;filtered_tasks = [t <span class="code-keyword">for</span> t <span class="code-keyword">in</span> filtered_tasks <span class="code-keyword">if</span> t.status == status]<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">if</span> priority:<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;filtered_tasks = [t <span class="code-keyword">for</span> t <span class="code-keyword">in</span> filtered_tasks <span class="code-keyword">if</span> t.priority == priority]<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">if</span> category:<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;filtered_tasks = [t <span class="code-keyword">for</span> t <span class="code-keyword">in</span> filtered_tasks <span class="code-keyword">if</span> t.category == category]<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">return</span> sorted(filtered_tasks, key=<span class="code-keyword">lambda</span> x: x.updated_date, reverse=<span class="code-keyword">True</span>)<br>
                <br>
                &nbsp;&nbsp;<span class="code-keyword">def</span> <span class="code-function">search_tasks</span>(<span class="code-keyword">self</span>, query):<br>
                &nbsp;&nbsp;&nbsp;&nbsp;query = query.lower()<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">return</span> [<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;task <span class="code-keyword">for</span> task <span class="code-keyword">in</span> <span class="code-keyword">self</span>.tasks<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">if</span> query <span class="code-keyword">in</span> task.title.lower() <span class="code-keyword">or</span> query <span class="code-keyword">in</span> task.description.lower()<br>
                &nbsp;&nbsp;&nbsp;&nbsp;]<br>
                <br>
                &nbsp;&nbsp;<span class="code-keyword">def</span> <span class="code-function">get_statistics</span>(<span class="code-keyword">self</span>):<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">if</span> <span class="code-keyword">not</span> <span class="code-keyword">self</span>.tasks:<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">return</span> {<span class="code-string">"message"</span>: <span class="code-string">"لا توجد مهام في النظام"</span>}<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<br>
                &nbsp;&nbsp;&nbsp;&nbsp;total_tasks = len(<span class="code-keyword">self</span>.tasks)<br>
                &nbsp;&nbsp;&nbsp;&nbsp;completed_tasks = len([t <span class="code-keyword">for</span> t <span class="code-keyword">in</span> <span class="code-keyword">self</span>.tasks <span class="code-keyword">if</span> t.status == Status.COMPLETED])<br>
                &nbsp;&nbsp;&nbsp;&nbsp;overdue_tasks = len([t <span class="code-keyword">for</span> t <span class="code-keyword">in</span> <span class="code-keyword">self</span>.tasks <span class="code-keyword">if</span> t.is_overdue()])<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<br>
                &nbsp;&nbsp;&nbsp;&nbsp;completion_rate = (completed_tasks / total_tasks) * <span class="code-keyword">100</span> <span class="code-keyword">if</span> total_tasks > <span class="code-keyword">0</span> <span class="code-keyword">else</span> <span class="code-keyword">0</span><br>
                &nbsp;&nbsp;&nbsp;&nbsp;<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-comment"># إحصائيات حسب الأولوية</span><br>
                &nbsp;&nbsp;&nbsp;&nbsp;priority_stats = {}<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">for</span> priority <span class="code-keyword">in</span> Priority:<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;priority_tasks = len([t <span class="code-keyword">for</span> t <span class="code-keyword">in</span> <span class="code-keyword">self</span>.tasks <span class="code-keyword">if</span> t.priority == priority])<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;priority_stats[priority.value] = priority_tasks<br>
                <br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-comment"># إحصائيات حسب الفئة</span><br>
                &nbsp;&nbsp;&nbsp;&nbsp;category_stats = {}<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">for</span> task <span class="code-keyword">in</span> <span class="code-keyword">self</span>.tasks:<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;category_stats[task.category] = category_stats.get(task.category, <span class="code-keyword">0</span>) + <span class="code-keyword">1</span><br>
                <br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">return</span> {<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-string">"total_tasks"</span>: total_tasks,<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-string">"completed_tasks"</span>: completed_tasks,<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-string">"overdue_tasks"</span>: overdue_tasks,<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-string">"completion_rate"</span>: round(completion_rate, <span class="code-keyword">2</span>),<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-string">"priority_stats"</span>: priority_stats,<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-string">"category_stats"</span>: category_stats<br>
                &nbsp;&nbsp;&nbsp;&nbsp;}
            </div>
        </div>
        
        <!-- باقي الأقسام - سيتم إضافتها بنفس النمط -->
        <div id="demo" class="content-section">
            <h2>تجربة النظام مباشرة</h2>
            <p>يمكنك تجربة نظام إدارة المهام مباشرة من خلال هذه الواجهة التفاعلية:</p>
            
            <div class="demo-container">
                <h3>إضافة مهمة جديدة</h3>
                <div class="task-form">
                    <div class="form-group">
                        <label class="form-label">عنوان المهمة:</label>
                        <input type="text" id="taskTitle" class="form-input" placeholder="أدخل عنوان المهمة">
                    </div>
                    <div class="form-group">
                        <label class="form-label">وصف المهمة:</label>
                        <textarea id="taskDescription" class="form-textarea" placeholder="أدخل وصف المهمة"></textarea>
                    </div>
                    <div class="form-row">
                        <div class="form-group">
                            <label class="form-label">الأولوية:</label>
                            <select id="taskPriority" class="form-select">
                                <option value="منخفض">منخفض</option>
                                <option value="متوسط" selected>متوسط</option>
                                <option value="عالي">عالي</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label class="form-label">الفئة:</label>
                            <input type="text" id="taskCategory" class="form-input" placeholder="أدخل الفئة">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-label">الوسوم (مفصولة بفاصلة):</label>
                        <input type="text" id="taskTags" class="form-input" placeholder="وسم1, وسم2, وسم3">
                    </div>
                    <div class="form-group">
                        <label class="form-label">تاريخ الاستحقاق:</label>
                        <input type="date" id="taskDueDate" class="form-input">
                    </div>
                    <button class="form-button" onclick="addTask()">إضافة المهمة</button>
                    <button class="form-button secondary" onclick="clearTaskForm()">مسح النموذج</button>
                </div>
                
                <h3>الفلاتر والبحث</h3>
                <div class="filters">
                    <div class="filter-group">
                        <select id="filterStatus" class="form-select" onchange="filterTasks()">
                            <option value="">جميع الحالات</option>
                            <option value="قيد الانتظار">قيد الانتظار</option>
                            <option value="قيد التنفيذ">قيد التنفيذ</option>
                            <option value="مكتمل">مكتمل</option>
                        </select>
                        <select id="filterPriority" class="form-select" onchange="filterTasks()">
                            <option value="">جميع الأولويات</option>
                            <option value="منخفض">منخفض</option>
                            <option value="متوسط">متوسط</option>
                            <option value="عالي">عالي</option>
                        </select>
                        <input type="text" id="searchQuery" class="form-input" placeholder="بحث في المهام..." oninput="searchTasks()">
                    </div>
                </div>
                
                <h3>الإحصائيات</h3>
                <div class="statistics" id="statisticsContainer">
                    <!-- سيتم عرض الإحصائيات هنا -->
                </div>
                
                <h3>قائمة المهام</h3>
                <div class="demo-controls">
                    <button class="demo-button" onclick="loadAllTasks()">عرض جميع المهام</button>
                    <button class="demo-button" onclick="showOverdueTasks()">المهام المتأخرة</button>
                    <button class="demo-button" onclick="generateReport()">تقرير الإنتاجية</button>
                </div>
                
                <div id="demoOutput" class="demo-output">
                    👈 إبدأ بإضافة مهمة جديدة أو عرض قائمة المهام
                </div>
                
                <div id="tasksList" class="task-list">
                    <!-- سيتم عرض المهام هنا -->
                </div>
            </div>
        </div>
        
        <div id="explanation" class="content-section">
            <h2>شرح مفصل للمشروع</h2>
            
            <h3>هيكل المشروع</h3>
            <p>يتكون المشروع من مكونين رئيسيين:</p>
            <ol>
                <li><strong>كلاس Task</strong>: يمثل كائن المهمة ويحتوي على جميع خصائصها</li>
                <li><strong>كلاس TaskManager</strong>: يدير عمليات CRUD (إنشاء، قراءة، تحديث، حذف) للمهام</li>
            </ol>
            
            <h3>شرح كلاس Task</h3>
            <p>هذا الكلاس يمثل المهمة ويحتوي على:</p>
            <ul>
                <li><strong>الخصائص الأساسية</strong>: العنوان، الوصف، الأولوية، الفئة</li>
                <li><strong>الوسوم</strong>: لتجميع المهام المتشابهة</li>
                <li><strong>التواريخ</strong>: تاريخ الإنشاء، التحديث، الاستحقاق، الإكمال</li>
                <li><strong>الحالة</strong>: قيد الانتظار، قيد التنفيذ، مكتمل، ملغي</li>
                <li><strong>الوظائف المساعدة</strong>: التحقق من التأخر، التحديث، التحويل للتخزين</li>
            </ul>
            
            <h3>شرح كلاس TaskManager</h3>
            <p>هذا الكلاس يدير جميع العمليات على المهام:</p>
            <ul>
                <li><strong>التخزين</strong>: حفظ واسترجاع البيانات من ملفات JSON</li>
                <li><strong>النسخ الاحتياطي</strong>: نظام نسخ احتياطي تلقائي</li>
                <li><strong>الإدارة</strong>: إضافة، تعديل، حذف، وإكمال المهام</li>
                <li><strong>البحث والتصفية</strong>: بحث نصي وتصفية حسب المعايير</li>
                <li><strong>الإحصائيات</strong>: تقارير أداء وإنتاجية</li>
            </ul>
            
            <h3>نظام الملفات المستخدم</h3>
            <p>يستخدم النظام ملفين رئيسيين:</p>
            <ul>
                <li><code>tasks.json</code>: الملف الرئيسي لتخزين البيانات</li>
                <li><code>tasks_backup.json</code>: نسخة احتياطية تلقائية</li>
            </ul>
            
            <h3>معالجة الأخطاء</h3>
            <p>يحتوي المشروع على نظام متكامل لمعالجة الأخطاء:</p>
            <ul>
                <li>التحقق من صحة البيانات المدخلة</li>
                <li>معالجة أخطاء القراءة/الكتابة في الملفات</li>
                <li>استعادة تلقائية من النسخ الاحتياطي</li>
                <li>رسائل خطأ واضحة للمستخدم</li>
            </ul>
        </div>
        
        <div id="features" class="content-section">
            <h2>الميزات المتقدمة</h2>
            
            <h3>١. نظام الأولويات المتقدم</h3>
            <p>يدعم النظام ثلاث مستويات للأولوية:</p>
            <ul>
                <li>🔴 <strong>عالي</strong>: مهام عاجلة تتطلب انتباه فوري</li>
                <li>🟡 <strong>متوسط</strong>: مهام مهمة ولكن ليست عاجلة</li>
                <li>🟢 <strong>منخفض</strong>: مهام يمكن تأجيلها</li>
            </ul>
            
            <h3>٢. نظام الفئات والوسوم</h3>
            <p>تنظيم المهام باستخدام فئات رئيسية ووسوم فرعية:</p>
            <div class="code-block">
                <span class="code-comment"># أمثلة على الفئات</span><br>
                - العمل<br>
                - الدراسة<br>
                - المنزل<br>
                - الشخصي<br>
                <br>
                <span class="code-comment"># أمثلة على الوسوم</span><br>
                - عاجل، مهم، اجتماع، مشروع، تسوق
            </div>
            
            <h3>٣. التقارير والإحصائيات</h3>
            <p>يولد النظام تقارير متقدمة تشمل:</p>
            <ul>
                <li>معدل إنجاز المهام</li>
                <li>توزيع المهام حسب الأولوية</li>
                <li>المهام المتأخرة</li>
                <li>إحصائيات حسب الفئات</li>
            </ul>
            
            <h3>٤. البحث والتصفية المتقدم</h3>
            <p>إمكانيات بحث متقدمة تشمل:</p>
            <ul>
                <li>بحث نصي في العنوان والوصف</li>
                <li>تصفية حسب الحالة والأولوية والفئة</li>
                <li>عرض المهام المتأخرة فقط</li>
                <li>ترتيب حسب تاريخ التحديث</li>
            </ul>
            
            <h3>٥. نظام النسخ الاحتياطي</h3>
            <p>حماية البيانات من الضياع:</p>
            <ul>
                <li>نسخ احتياطي تلقائي قبل كل حفظ</li>
                <li>استعادة تلقائية عند حدوث أخطاء</li>
                <li>حفظ البيانات بشكل آمن</li>
            </ul>
            
            <h3>٦. إمكانيات التطوير المستقبلية</h3>
            <p>يمكن إضافة الميزات التالية:</p>
            <ul>
                <li>واجهة ويب باستخدام Flask أو Django</li>
                <li>تطبيق جوال باستخدام Kivy</li>
                <li>مزامنة مع الخدمات السحابية</li>
                <li>إشعارات تذكير</li>
                <li>مشاركة المهام مع فريق العمل</li>
            </ul>
        </div>
    </div>
    
    <footer>
        <div class="container">
            <p>مشروع نظام إدارة المهام المتقدم - تطبيق عملي لتعلم Python وبرمجة الأنظمة</p>
            <p>يمكنك استخدام وتطوير هذا المشروع بحرية لأغراض التعليم</p>
        </div>
    </footer>

    <script>
        // محاكاة نظام إدارة المهام باستخدام JavaScript
        class Task {
            constructor(taskId, title, description = "", priority = "متوسط", category = "عام", tags = [], dueDate = null, status = "قيد الانتظار") {
                this.taskId = taskId;
                this.title = title;
                this.description = description;
                this.priority = priority;
                this.category = category;
                this.tags = Array.isArray(tags) ? tags : tags.split(',').map(tag => tag.trim());
                this.dueDate = dueDate;
                this.status = status;
                this.createdDate = new Date();
                this.completedDate = null;
                this.updatedDate = new Date();
            }
            
            markCompleted() {
                this.status = "مكتمل";
                this.completedDate = new Date();
                this.updatedDate = new Date();
            }
            
            isOverdue() {
                if (this.dueDate && this.status !== "مكتمل" && this.status !== "ملغي") {
                    return new Date() > new Date(this.dueDate);
                }
                return false;
            }
            
            toString() {
                const dueInfo = this.dueDate ? ` - مستحق: ${new Date(this.dueDate).toLocaleDateString('ar-EG')}` : '';
                return `[${this.status}] ${this.title} (${this.priority})${dueInfo}`;
            }
        }

        class TaskManager {
            constructor() {
                this.tasks = JSON.parse(localStorage.getItem('tasks')) || [];
            }
            
            saveTasks() {
                localStorage.setItem('tasks', JSON.stringify(this.tasks));
            }
            
            addTask(task) {
                if (this.tasks.some(t => t.taskId === task.taskId)) {
                    throw new Error(`رقم المهمة ${task.taskId} موجود مسبقاً`);
                }
                this.tasks.push(task);
                this.saveTasks();
                return `تم إضافة المهمة '${task.title}' بنجاح`;
            }
            
            getTask(taskId) {
                return this.tasks.find(task => task.taskId === taskId);
            }
            
            completeTask(taskId) {
                const task = this.getTask(taskId);
                if (!task) {
                    throw new Error(`المهمة برقم ${taskId} غير موجودة`);
                }
                
                task.markCompleted();
                this.saveTasks();
                return `تم إكمال المهمة '${task.title}'`;
            }
            
            deleteTask(taskId) {
                const task = this.getTask(taskId);
                if (!task) {
                    throw new Error(`المهمة برقم ${taskId} غير موجودة`);
                }
                
                this.tasks = this.tasks.filter(t => t.taskId !== taskId);
                this.saveTasks();
                return `تم حذف المهمة '${task.title}'`;
            }
            
            listTasks(status = null, priority = null, category = null) {
                let filteredTasks = this.tasks;
                
                if (status) {
                    filteredTasks = filteredTasks.filter(t => t.status === status);
                }
                
                if (priority) {
                    filteredTasks = filteredTasks.filter(t => t.priority === priority);
                }
                
                if (category) {
                    filteredTasks = filteredTasks.filter(t => t.category === category);
                }
                
                return filteredTasks.sort((a, b) => new Date(b.updatedDate) - new Date(a.updatedDate));
            }
            
            searchTasks(query) {
                query = query.toLowerCase();
                return this.tasks.filter(task => 
                    task.title.toLowerCase().includes(query) || 
                    task.description.toLowerCase().includes(query)
                );
            }
            
            getStatistics() {
                if (!this.tasks.length) {
                    return {"message": "لا توجد مهام في النظام"};
                }
                
                const totalTasks = this.tasks.length;
                const completedTasks = this.tasks.filter(t => t.status === "مكتمل").length;
                const overdueTasks = this.tasks.filter(t => t.isOverdue()).length;
                
                const completionRate = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;
                
                // إحصائيات حسب الأولوية
                const priorityStats = {
                    "منخفض": this.tasks.filter(t => t.priority === "منخفض").length,
                    "متوسط": this.tasks.filter(t => t.priority === "متوسط").length,
                    "عالي": this.tasks.filter(t => t.priority === "عالي").length
                };
                
                // إحصائيات حسب الفئة
                const categoryStats = {};
                this.tasks.forEach(task => {
                    categoryStats[task.category] = (categoryStats[task.category] || 0) + 1;
                });
                
                return {
                    "total_tasks": totalTasks,
                    "completed_tasks": completedTasks,
                    "overdue_tasks": overdueTasks,
                    "completion_rate": completionRate.toFixed(2),
                    "priority_stats": priorityStats,
                    "category_stats": categoryStats
                };
            }
        }

        // إنشاء مدير المهام
        const taskManager = new TaskManager();

        // وظائف الواجهة
        function generateTaskId() {
            return 'T' + Date.now() + Math.random().toString(36).substr(2, 5);
        }

        function addTask() {
            const title = document.getElementById('taskTitle').value;
            const description = document.getElementById('taskDescription').value;
            const priority = document.getElementById('taskPriority').value;
            const category = document.getElementById('taskCategory').value || 'عام';
            const tags = document.getElementById('taskTags').value;
            const dueDate = document.getElementById('taskDueDate').value;
            
            if (!title) {
                alert('يرجى إدخال عنوان المهمة');
                return;
            }
            
            try {
                const taskId = generateTaskId();
                const task = new Task(taskId, title, description, priority, category, tags, dueDate);
                const result = taskManager.addTask(task);
                document.getElementById('demoOutput').textContent = result;
                clearTaskForm();
                displayTasks();
                updateStatistics();
            } catch (error) {
                document.getElementById('demoOutput').textContent = `خطأ: ${error.message}`;
            }
        }

        function clearTaskForm() {
            document.getElementById('taskTitle').value = '';
            document.getElementById('taskDescription').value = '';
            document.getElementById('taskPriority').value = 'متوسط';
            document.getElementById('taskCategory').value = '';
            document.getElementById('taskTags').value = '';
            document.getElementById('taskDueDate').value = '';
        }

        function displayTasks(tasks = null) {
            const tasksToDisplay = tasks || taskManager.listTasks();
            const tasksList = document.getElementById('tasksList');
            
            tasksList.innerHTML = '';
            
            if (tasksToDisplay.length === 0) {
                tasksList.innerHTML = '<div class="task-item">لا توجد مهام لعرضها</div>';
                return;
            }
            
            tasksToDisplay.forEach(task => {
                const taskElement = document.createElement('div');
                taskElement.className = `task-item ${task.priority === 'عالي' ? 'high-priority' : task.priority === 'متوسط' ? 'medium-priority' : ''} ${task.status === 'مكتمل' ? 'completed' : ''}`;
                
                const dueDate = task.dueDate ? new Date(task.dueDate).toLocaleDateString('ar-EG') : 'لا يوجد';
                const isOverdue = task.isOverdue();
                
                taskElement.innerHTML = `
                    <div class="task-header">
                        <div>
                            <div class="task-title">${task.title}</div>
                            <div class="task-meta">
                                <span>الأولوية: ${task.priority}</span>
                                <span>الفئة: ${task.category}</span>
                                <span>الحالة: ${task.status}</span>
                                <span style="color: ${isOverdue ? 'red' : 'inherit'}">الاستحقاق: ${dueDate}</span>
                            </div>
                        </div>
                    </div>
                    ${task.description ? `<div class="task-description">${task.description}</div>` : ''}
                    ${task.tags.length > 0 ? `
                        <div class="task-tags">
                            ${task.tags.map(tag => `<span class="task-tag">${tag}</span>`).join('')}
                        </div>
                    ` : ''}
                    <div class="task-actions">
                        ${task.status !== 'مكتمل' ? `<button class="action-button complete-button" onclick="completeTask('${task.taskId}')">إكمال</button>` : ''}
                        <button class="action-button delete-button" onclick="deleteTask('${task.taskId}')">حذف</button>
                    </div>
                `;
                
                tasksList.appendChild(taskElement);
            });
        }

        function completeTask(taskId) {
            try {
                const result = taskManager.completeTask(taskId);
                document.getElementById('demoOutput').textContent = result;
                displayTasks();
                updateStatistics();
            } catch (error) {
                document.getElementById('demoOutput').textContent = `خطأ: ${error.message}`;
            }
        }

        function deleteTask(taskId) {
            if (confirm('هل أنت متأكد من حذف هذه المهمة؟')) {
                try {
                    const result = taskManager.deleteTask(taskId);
                    document.getElementById('demoOutput').textContent = result;
                    displayTasks();
                    updateStatistics();
                } catch (error) {
                    document.getElementById('demoOutput').textContent = `خطأ: ${error.message}`;
                }
            }
        }

        function loadAllTasks() {
            const tasks = taskManager.listTasks();
            displayTasks(tasks);
            document.getElementById('demoOutput').textContent = `عرض ${tasks.length} مهمة`;
        }

        function filterTasks() {
            const status = document.getElementById('filterStatus').value;
            const priority = document.getElementById('filterPriority').value;
            
            const tasks = taskManager.listTasks(status || null, priority || null);
            displayTasks(tasks);
            document.getElementById('demoOutput').textContent = `عرض ${tasks.length} مهمة بعد التصفية`;
        }

        function searchTasks() {
            const query = document.getElementById('searchQuery').value;
            if (query.trim() === '') {
                loadAllTasks();
                return;
            }
            
            const tasks = taskManager.searchTasks(query);
            displayTasks(tasks);
            document.getElementById('demoOutput').textContent = `عرض ${tasks.length} نتيجة للبحث عن "${query}"`;
        }

        function showOverdueTasks() {
            const tasks = taskManager.listTasks().filter(task => task.isOverdue());
            displayTasks(tasks);
            document.getElementById('demoOutput').textContent = `عرض ${tasks.length} مهمة متأخرة`;
        }

        function generateReport() {
            const stats = taskManager.getStatistics();
            const output = document.getElementById('demoOutput');
            
            if (stats.message) {
                output.textContent = stats.message;
                return;
            }
            
            output.textContent = `📊 تقرير الإنتاجية:
            
إجمالي المهام: ${stats.total_tasks}
المهام المكتملة: ${stats.completed_tasks}
المهام المتأخرة: ${stats.overdue_tasks}
معدل الإنجاز: ${stats.completion_rate}%

الإحصائيات حسب الأولوية:
• عالي: ${stats.priority_stats.عالي}
• متوسط: ${stats.priority_stats.متوسط}
• منخفض: ${stats.priority_stats.منخفض}`;
        }

        function updateStatistics() {
            const stats = taskManager.getStatistics();
            const container = document.getElementById('statisticsContainer');
            
            if (stats.message) {
                container.innerHTML = '<div class="stat-card"><div class="stat-label">لا توجد إحصائيات</div></div>';
                return;
            }
            
            container.innerHTML = `
                <div class="stat-card">
                    <div class="stat-number">${stats.total_tasks}</div>
                    <div class="stat-label">إجمالي المهام</div>
                </div>
                <div class="stat-card">
                    <div class="stat-number">${stats.completed_tasks}</div>
                    <div class="stat-label">مكتملة</div>
                </div>
                <div class="stat-card">
                    <div class="stat-number">${stats.overdue_tasks}</div>
                    <div class="stat-label">متأخرة</div>
                </div>
                <div class="stat-card">
                    <div class="stat-number">${stats.completion_rate}%</div>
                    <div class="stat-label">معدل الإنجاز</div>
                </div>
            `;
        }

        // تهيئة العرض
        document.addEventListener('DOMContentLoaded', () => {
            displayTasks();
            updateStatistics();
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