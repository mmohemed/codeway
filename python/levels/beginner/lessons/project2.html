<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>مدير المهام البسيط - تعلم بايثون</title>
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
            --task-color: #6f42c1;
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
            color: var(--task-color);
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
        
        .app-section, .explanation-section {
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
        
        /* App Styles */
        .app-container {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
        }
        
        .stats-cards {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 1rem;
            margin-bottom: 1rem;
        }
        
        .stat-card {
            background: white;
            padding: 1rem;
            border-radius: 10px;
            text-align: center;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            border-top: 4px solid var(--accent-color);
        }
        
        .stat-number {
            font-size: 2rem;
            font-weight: bold;
            color: var(--task-color);
        }
        
        .task-form {
            background: var(--light-color);
            padding: 1.5rem;
            border-radius: 10px;
            border: 2px dashed var(--accent-color);
        }
        
        .form-group {
            margin-bottom: 1rem;
        }
        
        .form-group label {
            display: block;
            margin-bottom: 0.5rem;
            font-weight: 600;
            color: var(--secondary-color);
        }
        
        .form-control {
            width: 100%;
            padding: 0.75rem;
            border: 2px solid #ddd;
            border-radius: 8px;
            font-size: 1rem;
            transition: border-color 0.3s;
        }
        
        .form-control:focus {
            outline: none;
            border-color: var(--accent-color);
        }
        
        .btn {
            padding: 0.75rem 1.5rem;
            border: none;
            border-radius: 8px;
            font-size: 1rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s;
            display: flex;
            align-items: center;
            gap: 8px;
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
        
        .btn-danger {
            background: var(--danger-color);
            color: white;
        }
        
        .btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        }
        
        .tasks-list {
            max-height: 400px;
            overflow-y: auto;
        }
        
        .task-item {
            background: white;
            padding: 1rem;
            margin-bottom: 1rem;
            border-radius: 10px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            border-right: 4px solid;
            transition: transform 0.3s;
        }
        
        .task-item:hover {
            transform: translateX(-5px);
        }
        
        .task-item.pending {
            border-right-color: var(--warning-color);
        }
        
        .task-item.completed {
            border-right-color: var(--success-color);
            opacity: 0.8;
        }
        
        .task-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 0.5rem;
        }
        
        .task-title {
            font-weight: 600;
            color: var(--secondary-color);
            margin-bottom: 0.25rem;
        }
        
        .task-completed .task-title {
            text-decoration: line-through;
            color: #6c757d;
        }
        
        .task-category {
            background: var(--accent-color);
            color: white;
            padding: 0.25rem 0.5rem;
            border-radius: 20px;
            font-size: 0.8rem;
        }
        
        .task-description {
            color: #6c757d;
            margin-bottom: 1rem;
            font-size: 0.9rem;
        }
        
        .task-footer {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .task-date {
            font-size: 0.8rem;
            color: #6c757d;
        }
        
        .task-actions {
            display: flex;
            gap: 0.5rem;
        }
        
        .btn-sm {
            padding: 0.4rem 0.8rem;
            font-size: 0.8rem;
        }
        
        .filter-buttons {
            display: flex;
            gap: 0.5rem;
            margin-bottom: 1rem;
        }
        
        .filter-btn {
            flex: 1;
            text-align: center;
        }
        
        .filter-btn.active {
            background: var(--accent-color);
            color: white;
        }
        
        /* Explanation Styles */
        .code-explanation {
            background-color: #2d3748;
            color: #e2e8f0;
            border-radius: 8px;
            padding: 1.5rem;
            margin: 1.5rem 0;
            direction: ltr;
            text-align: left;
            overflow-x: auto;
        }
        
        .code-explanation pre {
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
        
        .explanation-step {
            margin: 1.5rem 0;
            padding: 1rem;
            background: var(--light-color);
            border-radius: 8px;
            border-right: 4px solid var(--accent-color);
        }
        
        .step-title {
            color: var(--primary-color);
            margin-bottom: 0.5rem;
            display: flex;
            align-items: center;
            gap: 10px;
        }
        
        /* Features List */
        .features-list {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 1rem;
            margin: 1.5rem 0;
        }
        
        .feature-card {
            background: white;
            padding: 1rem;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            text-align: center;
            transition: transform 0.3s;
        }
        
        .feature-card:hover {
            transform: translateY(-5px);
        }
        
        .feature-icon {
            font-size: 2rem;
            color: var(--accent-color);
            margin-bottom: 0.5rem;
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
        
        .empty-state {
            text-align: center;
            padding: 2rem;
            color: #6c757d;
        }
        
        .empty-state i {
            font-size: 3rem;
            margin-bottom: 1rem;
            color: var(--accent-color);
        }
    </style>
</head>
<body>
    <header>
        <div class="container">
            <div class="header-content">
                <div class="logo">
                    <i class="fas fa-tasks"></i>
                    <span>مدير المهام البسيط - تعلم بايثون</span>
                </div>
            </div>
        </div>
    </header>
    
    <div class="container">
        <div class="main-content">
            <!-- قسم التطبيق -->
            <section class="app-section">
                <h2 class="section-title"><i class="fas fa-rocket"></i> مدير المهام</h2>
                
                <div class="app-container">
                    <div class="stats-cards">
                        <div class="stat-card">
                            <div class="stat-number" id="total-tasks">0</div>
                            <div>إجمالي المهام</div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-number" id="completed-tasks">0</div>
                            <div>مكتملة</div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-number" id="pending-tasks">0</div>
                            <div>قيد الانتظار</div>
                        </div>
                    </div>
                    
                    <div class="task-form">
                        <h3><i class="fas fa-plus-circle"></i> إضافة مهمة جديدة</h3>
                        <div class="form-group">
                            <label for="task-title">عنوان المهمة</label>
                            <input type="text" id="task-title" class="form-control" placeholder="أدخل عنوان المهمة">
                        </div>
                        <div class="form-group">
                            <label for="task-description">وصف المهمة</label>
                            <textarea id="task-description" class="form-control" placeholder="أدخل وصف المهمة" rows="3"></textarea>
                        </div>
                        <div class="form-group">
                            <label for="task-category">الفئة</label>
                            <select id="task-category" class="form-control">
                                <option value="عمل">عمل</option>
                                <option value="شخصي">شخصي</option>
                                <option value="دراسة">دراسة</option>
                                <option value="منزل">منزل</option>
                                <option value="أخرى">أخرى</option>
                            </select>
                        </div>
                        <button class="btn btn-primary" id="add-task-btn">
                            <i class="fas fa-plus"></i> إضافة المهمة
                        </button>
                    </div>
                    
                    <div class="filter-buttons">
                        <button class="btn btn-secondary filter-btn active" data-filter="all">
                            <i class="fas fa-list"></i> الكل
                        </button>
                        <button class="btn btn-secondary filter-btn" data-filter="pending">
                            <i class="fas fa-clock"></i> قيد الانتظار
                        </button>
                        <button class="btn btn-secondary filter-btn" data-filter="completed">
                            <i class="fas fa-check"></i> مكتملة
                        </button>
                    </div>
                    
                    <div class="tasks-list" id="tasks-container">
                        <div class="empty-state">
                            <i class="fas fa-clipboard-list"></i>
                            <h3>لا توجد مهام</h3>
                            <p>ابدأ بإضافة مهمة جديدة باستخدام النموذج أعلاه</p>
                        </div>
                    </div>
                </div>
            </section>
            
            <!-- قسم الشرح -->
            <section class="explanation-section">
                <h2 class="section-title"><i class="fas fa-book"></i> شرح الكود</h2>
                
                <div class="explanation-step">
                    <h3 class="step-title"><i class="fas fa-info-circle"></i> عن المشروع</h3>
                    <p>مدير المهام البسيط هو تطبيق يسمح للمستخدمين بإضافة، عرض، تحديث، وحذف المهام. يتم تنظيم المهام في فئات مختلفة وتتبع حالتها (مكتملة/قيد الانتظار).</p>
                </div>
                
                <div class="code-explanation">
                    <pre>
<span class="code-comment"># كود مدير المهام البسيط بلغة بايثون</span>
<span class="code-keyword">class</span> <span class="code-class">Task</span>:
    <span class="code-keyword">def</span> <span class="code-function">__init__</span>(<span class="code-keyword">self</span>, title, description, category, due_date=<span class="code-keyword">None</span>):
        <span class="code-keyword">self</span>.title = title
        <span class="code-keyword">self</span>.description = description
        <span class="code-keyword">self</span>.category = category
        <span class="code-keyword">self</span>.due_date = due_date
        <span class="code-keyword">self</span>.completed = <span class="code-keyword">False</span>
        <span class="code-keyword">self</span>.created_at = datetime.now()
    
    <span class="code-keyword">def</span> <span class="code-function">mark_completed</span>(<span class="code-keyword">self</span>):
        <span class="code-keyword">self</span>.completed = <span class="code-keyword">True</span>
    
    <span class="code-keyword">def</span> <span class="code-function">mark_pending</span>(<span class="code-keyword">self</span>):
        <span class="code-keyword">self</span>.completed = <span class="code-keyword">False</span>

<span class="code-keyword">class</span> <span class="code-class">TaskManager</span>:
    <span class="code-keyword">def</span> <span class="code-function">__init__</span>(<span class="code-keyword">self</span>):
        <span class="code-keyword">self</span>.tasks = []
    
    <span class="code-keyword">def</span> <span class="code-function">add_task</span>(<span class="code-keyword">self</span>, title, description, category, due_date=<span class="code-keyword">None</span>):
        task = Task(title, description, category, due_date)
        <span class="code-keyword">self</span>.tasks.append(task)
        <span class="code-keyword">return</span> task
    
    <span class="code-keyword">def</span> <span class="code-function">get_task</span>(<span class="code-keyword">self</span>, task_id):
        <span class="code-keyword">if</span> <span class="code-number">0</span> <= task_id < <span class="code-keyword">len</span>(<span class="code-keyword">self</span>.tasks):
            <span class="code-keyword">return</span> <span class="code-keyword">self</span>.tasks[task_id]
        <span class="code-keyword">return</span> <span class="code-keyword">None</span>
    
    <span class="code-keyword">def</span> <span class="code-function">update_task</span>(<span class="code-keyword">self</span>, task_id, title=<span class="code-keyword">None</span>, description=<span class="code-keyword">None</span>, category=<span class="code-keyword">None</span>):
        task = <span class="code-keyword">self</span>.get_task(task_id)
        <span class="code-keyword">if</span> task:
            <span class="code-keyword">if</span> title: task.title = title
            <span class="code-keyword">if</span> description: task.description = description
            <span class="code-keyword">if</span> category: task.category = category
            <span class="code-keyword">return</span> <span class="code-keyword">True</span>
        <span class="code-keyword">return</span> <span class="code-keyword">False</span>
    
    <span class="code-keyword">def</span> <span class="code-function">delete_task</span>(<span class="code-keyword">self</span>, task_id):
        <span class="code-keyword">if</span> <span class="code-number">0</span> <= task_id < <span class="code-keyword">len</span>(<span class="code-keyword">self</span>.tasks):
            <span class="code-keyword">del</span> <span class="code-keyword">self</span>.tasks[task_id]
            <span class="code-keyword">return</span> <span class="code-keyword">True</span>
        <span class="code-keyword">return</span> <span class="code-keyword">False</span>
    
    <span class="code-keyword">def</span> <span class="code-function">get_all_tasks</span>(<span class="code-keyword">self</span>):
        <span class="code-keyword">return</span> <span class="code-keyword">self</span>.tasks
    
    <span class="code-keyword">def</span> <span class="code-function">get_completed_tasks</span>(<span class="code-keyword">self</span>):
        <span class="code-keyword">return</span> [task <span class="code-keyword">for</span> task <span class="code-keyword">in</span> <span class="code-keyword">self</span>.tasks <span class="code-keyword">if</span> task.completed]
    
    <span class="code-keyword">def</span> <span class="code-function">get_pending_tasks</span>(<span class="code-keyword">self</span>):
        <span class="code-keyword">return</span> [task <span class="code-keyword">for</span> task <span class="code-keyword">in</span> <span class="code-keyword">self</span>.tasks <span class="code-keyword">if</span> <span class="code-keyword">not</span> task.completed]
    
    <span class="code-keyword">def</span> <span class="code-function">get_tasks_by_category</span>(<span class="code-keyword">self</span>, category):
        <span class="code-keyword">return</span> [task <span class="code-keyword">for</span> task <span class="code-keyword">in</span> <span class="code-keyword">self</span>.tasks <span class="code-keyword">if</span> task.category == category]

<span class="code-comment"># مثال على استخدام التطبيق</span>
<span class="code-keyword">if</span> __name__ == <span class="code-string">"__main__"</span>:
    manager = TaskManager()
    
    <span class="code-comment"># إضافة مهام</span>
    manager.add_task(<span class="code-string">"تعلم بايثون"</span>, <span class="code-string">"إنشاء مشروع مدير المهام"</span>, <span class="code-string">"دراسة"</span>)
    manager.add_task(<span class="code-string">"تسوق"</span>, <span class="code-string">"شراء مستلزمات المنزل"</span>, <span class="code-string">"منزل"</span>)
    
    <span class="code-comment"># عرض المهام</span>
    <span class="code-keyword">print</span>(<span class="code-string">"جميع المهام:"</span>)
    <span class="code-keyword">for</span> i, task <span class="code-keyword">in</span> <span class="code-keyword">enumerate</span>(manager.get_all_tasks()):
        status = <span class="code-string">"مكتملة"</span> <span class="code-keyword">if</span> task.completed <span class="code-keyword">else</span> <span class="code-string">"قيد الانتظار"</span>
        <span class="code-keyword">print</span>(<span class="code-string">f"{i+1}. {task.title} - {task.category} - {status}"</span>)
                    </pre>
                </div>
                
                <div class="features-list">
                    <div class="feature-card">
                        <div class="feature-icon">
                            <i class="fas fa-layer-group"></i>
                        </div>
                        <h4>البرمجة كائنية التوجه</h4>
                        <p>استخدام الكلاسات والكائنات لتنظيم الكود</p>
                    </div>
                    
                    <div class="feature-card">
                        <div class="feature-icon">
                            <i class="fas fa-list"></i>
                        </div>
                        <h4>إدارة القوائم</h4>
                        <p>التعامل مع القوائم وتنظيم البيانات</p>
                    </div>
                    
                    <div class="feature-card">
                        <div class="feature-icon">
                            <i class="fas fa-search"></i>
                        </div>
                        <h4>البحث والتصفية</h4>
                        <p>تصفية المهام حسب الحالة والفئة</p>
                    </div>
                    
                    <div class="feature-card">
                        <div class="feature-icon">
                            <i class="fas fa-cogs"></i>
                        </div>
                        <h4>وظائف متعددة</h4>
                        <p>إضافة، تعديل، حذف، وعرض المهام</p>
                    </div>
                </div>
                
                <div class="explanation-step">
                    <h3 class="step-title"><i class="fas fa-cogs"></i> كيفية عمل الكود</h3>
                    <ol style="padding-right: 1.5rem; line-height: 2;">
                        <li>إنشاء كلاس Task لتمثيل المهمة الواحدة</li>
                        <li>إنشاء كلاس TaskManager لإدارة جميع المهام</li>
                        <li>وظائف لإضافة وعرض وتحديث المهام</li>
                        <li>وظائف لتصفية المهام حسب الحالة والفئة</li>
                        <li>واجهة مستخدم للتفاعل مع النظام</li>
                    </ol>
                </div>
                
                <div class="explanation-step">
                    <h3 class="step-title"><i class="fas fa-graduation-cap"></i> المفاهيم المستفادة</h3>
                    <ul style="padding-right: 1.5rem; line-height: 2;">
                        <li>البرمجة كائنية التوجه (OOP)</li>
                        <li>الكلاسات والكائنات</li>
                        <li>إدارة القوائم والمصفوفات</li>
                        <li>وظائف البحث والتصفية</li>
                        <li>تنظيم الكود في وحدات</li>
                        <li>واجهة المستخدم التفاعلية</li>
                    </ul>
                </div>
            </section>
        </div>
    </div>
    
    <footer>
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3><i class="fas fa-info-circle"></i> عن المشروع</h3>
                    <p>مشروع مدير المهام البسيط يهدف إلى تعلم أساسيات البرمجة كائنية التوجه وإدارة البيانات في بايثون.</p>
                </div>
                <div class="footer-section">
                    <h3><i class="fas fa-code"></i> تقنيات مستخدمة</h3>
                    <p>HTML, CSS, JavaScript, Python OOP Concepts</p>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2023 مدير المهام البسيط - تعلم بايثون. جميع الحقوق محفوظة.</p>
            </div>
        </div>
    </footer>

    <script>
        // كود JavaScript لمحاكاة مدير المهام
        class Task {
            constructor(title, description, category) {
                this.id = Date.now();
                this.title = title;
                this.description = description;
                this.category = category;
                this.completed = false;
                this.createdAt = new Date();
            }
            
            toggleComplete() {
                this.completed = !this.completed;
            }
        }

        class TaskManager {
            constructor() {
                this.tasks = JSON.parse(localStorage.getItem('tasks')) || [];
                this.currentFilter = 'all';
            }
            
            addTask(title, description, category) {
                const task = new Task(title, description, category);
                this.tasks.push(task);
                this.saveToLocalStorage();
                return task;
            }
            
            deleteTask(taskId) {
                this.tasks = this.tasks.filter(task => task.id !== taskId);
                this.saveToLocalStorage();
            }
            
            toggleTaskComplete(taskId) {
                const task = this.tasks.find(task => task.id === taskId);
                if (task) {
                    task.toggleComplete();
                    this.saveToLocalStorage();
                }
            }
            
            getTasks() {
                switch (this.currentFilter) {
                    case 'completed':
                        return this.tasks.filter(task => task.completed);
                    case 'pending':
                        return this.tasks.filter(task => !task.completed);
                    default:
                        return this.tasks;
                }
            }
            
            getStats() {
                const total = this.tasks.length;
                const completed = this.tasks.filter(task => task.completed).length;
                const pending = total - completed;
                
                return { total, completed, pending };
            }
            
            setFilter(filter) {
                this.currentFilter = filter;
            }
            
            saveToLocalStorage() {
                localStorage.setItem('tasks', JSON.stringify(this.tasks));
            }
        }

        // واجهة المستخدم
        class TaskUI {
            constructor() {
                this.taskManager = new TaskManager();
                this.initializeEventListeners();
                this.render();
            }
            
            initializeEventListeners() {
                document.getElementById('add-task-btn').addEventListener('click', () => this.addTask());
                
                document.querySelectorAll('.filter-btn').forEach(btn => {
                    btn.addEventListener('click', (e) => {
                        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                        e.target.classList.add('active');
                        this.taskManager.setFilter(e.target.dataset.filter);
                        this.render();
                    });
                });
            }
            
            addTask() {
                const title = document.getElementById('task-title').value.trim();
                const description = document.getElementById('task-description').value.trim();
                const category = document.getElementById('task-category').value;
                
                if (!title) {
                    alert('الرجاء إدخال عنوان المهمة');
                    return;
                }
                
                this.taskManager.addTask(title, description, category);
                
                // مسح الحقول
                document.getElementById('task-title').value = '';
                document.getElementById('task-description').value = '';
                
                this.render();
            }
            
            deleteTask(taskId) {
                if (confirm('هل أنت متأكد من حذف هذه المهمة؟')) {
                    this.taskManager.deleteTask(taskId);
                    this.render();
                }
            }
            
            toggleTaskComplete(taskId) {
                this.taskManager.toggleTaskComplete(taskId);
                this.render();
            }
            
            render() {
                const tasks = this.taskManager.getTasks();
                const stats = this.taskManager.getStats();
                
                // تحديث الإحصائيات
                document.getElementById('total-tasks').textContent = stats.total;
                document.getElementById('completed-tasks').textContent = stats.completed;
                document.getElementById('pending-tasks').textContent = stats.pending;
                
                // عرض المهام
                const container = document.getElementById('tasks-container');
                
                if (tasks.length === 0) {
                    container.innerHTML = `
                        <div class="empty-state">
                            <i class="fas fa-clipboard-list"></i>
                            <h3>لا توجد مهام</h3>
                            <p>ابدأ بإضافة مهمة جديدة باستخدام النموذج أعلاه</p>
                        </div>
                    `;
                    return;
                }
                
                container.innerHTML = tasks.map(task => `
                    <div class="task-item ${task.completed ? 'completed' : 'pending'}">
                        <div class="task-header">
                            <div>
                                <div class="task-title ${task.completed ? 'task-completed' : ''}">${task.title}</div>
                                <div class="task-category">${task.category}</div>
                            </div>
                        </div>
                        <div class="task-description">${task.description || 'لا يوجد وصف'}</div>
                        <div class="task-footer">
                            <div class="task-date">
                                ${task.createdAt.toLocaleDateString('ar-EG')}
                            </div>
                            <div class="task-actions">
                                <button class="btn btn-sm ${task.completed ? 'btn-secondary' : 'btn-primary'}" 
                                        onclick="taskUI.toggleTaskComplete(${task.id})">
                                    <i class="fas fa-${task.completed ? 'undo' : 'check'}"></i>
                                    ${task.completed ? 'إلغاء' : 'إكمال'}
                                </button>
                                <button class="btn btn-sm btn-danger" onclick="taskUI.deleteTask(${task.id})">
                                    <i class="fas fa-trash"></i> حذف
                                </button>
                            </div>
                        </div>
                    </div>
                `).join('');
            }
        }

        // بدء التطبيق
        let taskUI;
        document.addEventListener('DOMContentLoaded', () => {
            taskUI = new TaskUI();
        });
    </script>
</body>
</html>