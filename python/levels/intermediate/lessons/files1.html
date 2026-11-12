<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>القراءة والكتابة في الملفات في بايثون - شرح شامل</title>
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
            --read-color: #9c27b0;
            --write-color: #e91e63;
            --file-color: #ff9800;
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
            color: var(--file-color);
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
        
        .concept-card.read {
            border-top-color: var(--read-color);
        }
        
        .concept-card.write {
            border-top-color: var(--write-color);
        }
        
        .concept-card.file {
            border-top-color: var(--file-color);
        }
        
        .concept-card.mode {
            border-top-color: var(--primary-color);
        }
        
        .concept-icon {
            font-size: 2.5rem;
            margin-bottom: 1rem;
        }
        
        .read .concept-icon { color: var(--read-color); }
        .write .concept-icon { color: var(--write-color); }
        .file .concept-icon { color: var(--file-color); }
        .mode .concept-icon { color: var(--primary-color); }
        
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
        
        .example-output {
            background-color: #edf2f7;
            padding: 1.5rem;
            border-radius: 8px;
            margin: 1rem 0;
            direction: ltr;
            border-right: 4px solid var(--accent-color);
        }
        
        /* File Modes Table */
        .modes-table {
            width: 100%;
            border-collapse: collapse;
            margin: 1.5rem 0;
            box-shadow: 0 4px 6px rgba(0,0,0,0.05);
            border-radius: 8px;
            overflow: hidden;
        }
        
        .modes-table th {
            background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
            color: white;
            padding: 1rem;
            text-align: right;
        }
        
        .modes-table td {
            padding: 1rem;
            border-bottom: 1px solid #e2e8f0;
        }
        
        .modes-table tr:nth-child(even) {
            background-color: #f8f9fa;
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
        
        .file-types {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 1.5rem;
            margin: 2rem 0;
        }
        
        .file-type {
            background: white;
            padding: 1.5rem;
            border-radius: 10px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        }
        
        .file-type h4 {
            color: var(--primary-color);
            margin-bottom: 1rem;
            display: flex;
            align-items: center;
            gap: 10px;
        }
        
        .file-structure {
            background: var(--light-color);
            padding: 1.5rem;
            border-radius: 8px;
            margin: 1.5rem 0;
            font-family: 'Courier New', Courier, monospace;
            direction: ltr;
        }
    </style>
</head>
<body>
    <header>
        <div class="container">
            <div class="header-content">
                <div class="logo">
                    <i class="fas fa-file"></i>
                    <span>القراءة والكتابة في الملفات في بايثون</span>
                </div>
            </div>
        </div>
    </header>
    
    <div class="container">
        <div class="main-content">
            <!-- قسم المفاهيم الأساسية -->
            <section class="content-section">
                <h2 class="section-title"><i class="fas fa-brain"></i> التعامل مع الملفات في بايثون</h2>
                
                <p>بايثون توفر طرقاً سهلة وقوية للتعامل مع الملفات بأنواعها المختلفة. يمكنك القراءة من الملفات والكتابة إليها بسهولة باستخدام الدوال المدمجة في اللغة.</p>
                
                <div class="concept-cards">
                    <div class="concept-card read">
                        <div class="concept-icon">
                            <i class="fas fa-book-open"></i>
                        </div>
                        <h4>قراءة الملفات</h4>
                        <p>فتح الملفات وقراءة محتواها بمختلف الطرق</p>
                        <p><strong>أمثلة:</strong> <code>read()</code>, <code>readline()</code>, <code>readlines()</code></p>
                    </div>
                    
                    <div class="concept-card write">
                        <div class="concept-icon">
                            <i class="fas fa-pen"></i>
                        </div>
                        <h4>كتابة الملفات</h4>
                        <p>إنشاء ملفات جديدة أو الكتابة إلى ملفات موجودة</p>
                        <p><strong>أمثلة:</strong> <code>write()</code>, <code>writelines()</code></p>
                    </div>
                    
                    <div class="concept-card file">
                        <div class="concept-icon">
                            <i class="fas fa-cog"></i>
                        </div>
                        <h4>إدارة الملفات</h4>
                        <p>فتح، إغلاق، وحذف الملفات والتعامل مع الأخطاء</p>
                        <p><strong>أمثلة:</strong> <code>open()</code>, <code>close()</code>, <code>with</code></p>
                    </div>
                    
                    <div class="concept-card mode">
                        <div class="concept-icon">
                            <i class="fas fa-key"></i>
                        </div>
                        <h4>أنماط الفتح</h4>
                        <p>تحديد كيفية التعامل مع الملف (قراءة، كتابة، إلخ)</p>
                        <p><strong>أمثلة:</strong> <code>'r'</code>, <code>'w'</code>, <code>'a'</code></p>
                    </div>
                </div>
                
                <h3 class="section-title"><i class="fas fa-key"></i> أنماط فتح الملفات</h3>
                
                <table class="modes-table">
                    <tr>
                        <th>النمط</th>
                        <th>الوصف</th>
                        <th>مثال</th>
                    </tr>
                    <tr>
                        <td><code>'r'</code></td>
                        <td>قراءة فقط (الافتراضي)</td>
                        <td><code>open('file.txt', 'r')</code></td>
                    </tr>
                    <tr>
                        <td><code>'w'</code></td>
                        <td>كتابة (ينشئ ملف جديد أو يمحو الملف الحالي)</td>
                        <td><code>open('file.txt', 'w')</code></td>
                    </tr>
                    <tr>
                        <td><code>'a'</code></td>
                        <td>إضافة (يكتب في نهاية الملف)</td>
                        <td><code>open('file.txt', 'a')</code></td>
                    </tr>
                    <tr>
                        <td><code>'x'</code></td>
                        <td>إنشاء ملف جديد (يعطي خطأ إذا الملف موجود)</td>
                        <td><code>open('file.txt', 'x')</code></td>
                    </tr>
                    <tr>
                        <td><code>'r+'</code></td>
                        <td>قراءة وكتابة</td>
                        <td><code>open('file.txt', 'r+')</code></td>
                    </tr>
                    <tr>
                        <td><code>'b'</code></td>
                        <td>النمط الثنائي (للملفات غير النصية)</td>
                        <td><code>open('image.jpg', 'rb')</code></td>
                    </tr>
                </table>
            </section>
            
            <!-- قسم الأمثلة العملية -->
            <section class="content-section">
                <h2 class="section-title"><i class="fas fa-code"></i> أمثلة عملية</h2>
                
                <h3>المثال 1: القراءة الأساسية من ملف</h3>
                <div class="code-example">
                    <pre>
<span class="code-comment"># الطريقة الأساسية لقراءة ملف</span>
<span class="code-keyword">try</span>:
    <span class="code-comment"># فتح الملف للقراءة</span>
    file = <span class="code-keyword">open</span>(<span class="code-string">'example.txt'</span>, <span class="code-string">'r'</span>, encoding=<span class="code-string">'utf-8'</span>)
    
    <span class="code-comment"># قراءة المحتوى كاملاً</span>
    content = file.read()
    <span class="code-keyword">print</span>(<span class="code-string">"المحتوى الكامل:"</span>)
    <span class="code-keyword">print</span>(content)
    
    <span class="code-comment"># العودة لبداية الملف للقراءة مرة أخرى</span>
    file.seek(<span class="code-number">0</span>)
    
    <span class="code-comment"># قراءة سطر بسطر</span>
    <span class="code-keyword">print</span>(<span class="code-string">"\nقراءة سطر بسطر:"</span>)
    line = file.readline()
    <span class="code-keyword">while</span> line:
        <span class="code-keyword">print</span>(line.strip())  <span class="code-comment"># strip() يزيل المسافات والأسطر الجديدة</span>
        line = file.readline()
    
    <span class="code-comment"># إغلاق الملف</span>
    file.close()

<span class="code-keyword">except</span> FileNotFoundError:
    <span class="code-keyword">print</span>(<span class="code-string">"الملف غير موجود!"</span>)
<span class="code-keyword">except</span> Exception <span class="code-keyword">as</span> e:
    <span class="code-keyword">print</span>(<span class="code-string">f"حدث خطأ: {e}"</span>)

<span class="code-comment"># الطريقة الأفضل باستخدام with (تغلق الملف تلقائياً)</span>
<span class="code-keyword">print</span>(<span class="code-string">"\nباستخدام with:"</span>)
<span class="code-keyword">try</span>:
    <span class="code-keyword">with</span> <span class="code-keyword">open</span>(<span class="code-string">'example.txt'</span>, <span class="code-string">'r'</span>, encoding=<span class="code-string">'utf-8'</span>) <span class="code-keyword">as</span> file:
        lines = file.readlines()  <span class="code-comment"># قراءة جميع الأسطر في قائمة</span>
        <span class="code-keyword">for</span> i, line <span class="code-keyword">in</span> <span class="code-keyword">enumerate</span>(lines, <span class="code-number">1</span>):
            <span class="code-keyword">print</span>(<span class="code-string">f"السطر {i}: {line.strip()}"</span>)

<span class="code-keyword">except</span> FileNotFoundError:
    <span class="code-keyword">print</span>(<span class="code-string">"الملف غير موجود!"</span>)
                    </pre>
                </div>
                
                <div class="example-output">
                    <h4>المخرجات (افتراضية):</h4>
                    <pre>المحتوى الكامل:
هذا هو السطر الأول
هذا هو السطر الثاني
هذا هو السطر الثالث

قراءة سطر بسطر:
هذا هو السطر الأول
هذا هو السطر الثاني
هذا هو السطر الثالث

باستخدام with:
السطر 1: هذا هو السطر الأول
السطر 2: هذا هو السطر الثاني
السطر 3: هذا هو السطر الثالث</pre>
                </div>

                <h3>المثال 2: الكتابة إلى الملفات</h3>
                <div class="code-example">
                    <pre>
<span class="code-comment"># الكتابة إلى ملف (ينشئ ملف جديد أو يمحو الموجود)</span>
<span class="code-keyword">try</span>:
    <span class="code-keyword">with</span> <span class="code-keyword">open</span>(<span class="code-string">'output.txt'</span>, <span class="code-string">'w'</span>, encoding=<span class="code-string">'utf-8'</span>) <span class="code-keyword">as</span> file:
        <span class="code-comment"># كتابة سطر واحد</span>
        file.write(<span class="code-string">"هذا هو السطر الأول\\n"</span>)
        
        <span class="code-comment"># كتابة عدة أسطر</span>
        lines = [
            <span class="code-string">"هذا هو السطر الثاني\\n"</span>,
            <span class="code-string">"هذا هو السطر الثالث\\n"</span>,
            <span class="code-string">"هذا هو السطر الرابع\\n"</span>
        ]
        file.writelines(lines)
        
    <span class="code-keyword">print</span>(<span class="code-string">"تم الكتابة إلى الملف بنجاح!"</span>)

<span class="code-keyword">except</span> Exception <span class="code-keyword">as</span> e:
    <span class="code-keyword">print</span>(<span class="code-string">f"حدث خطأ أثناء الكتابة: {e}"</span>)

<span class="code-comment"># الإضافة إلى ملف موجود</span>
<span class="code-keyword">try</span>:
    <span class="code-keyword">with</span> <span class="code-keyword">open</span>(<span class="code-string">'output.txt'</span>, <span class="code-string">'a'</span>, encoding=<span class="code-string">'utf-8'</span>) <span class="code-keyword">as</span> file:
        file.write(<span class="code-string">"--- تمت الإضافة في: 2023 ---\\n"</span>)
        file.write(<span class="code-string">"هذا سطر مضاف إلى نهاية الملف\\n"</span>)
    
    <span class="code-keyword">print</span>(<span class="code-string">"تمت الإضافة إلى الملف بنجاح!"</span>)

<span class="code-keyword">except</span> Exception <span class="code-keyword">as</span> e:
    <span class="code-keyword">print</span>(<span class="code-string">f"حدث خطأ أثناء الإضافة: {e}"</span>)

<span class="code-comment"># قراءة الملف بعد الكتابة</span>
<span class="code-keyword">try</span>:
    <span class="code-keyword">with</span> <span class="code-keyword">open</span>(<span class="code-string">'output.txt'</span>, <span class="code-string">'r'</span>, encoding=<span class="code-string">'utf-8'</span>) <span class="code-keyword">as</span> file:
        content = file.read()
        <span class="code-keyword">print</span>(<span class="code-string">"\\nالمحتوى النهائي للملف:"</span>)
        <span class="code-keyword">print</span>(content)

<span class="code-keyword">except</span> FileNotFoundError:
    <span class="code-keyword">print</span>(<span class="code-string">"الملف غير موجود!"</span>)
                    </pre>
                </div>
                
                <div class="example-output">
                    <h4>المخرجات:</h4>
                    <pre>تم الكتابة إلى الملف بنجاح!
تمت الإضافة إلى الملف بنجاح!

المحتوى النهائي للملف:
هذا هو السطر الأول
هذا هو السطر الثاني
هذا هو السطر الثالث
هذا هو السطر الرابع
--- تمت الإضافة في: 2023 ---
هذا سطر مضاف إلى نهاية الملف</pre>
                </div>
            </section>
        </div>

        <!-- قسم أنواع الملفات -->
        <section class="content-section">
            <h2 class="section-title"><i class="fas fa-file-alt"></i> أنواع الملفات والتعامل معها</h2>
            
            <div class="file-types">
                <div class="file-type">
                    <h4><i class="fas fa-file-text"></i> الملفات النصية</h4>
                    <p>الملفات التي تحتوي على نص عادي</p>
                    <div class="code-example">
                        <pre>
<span class="code-comment"># قراءة ملف نصي</span>
<span class="code-keyword">with</span> <span class="code-keyword">open</span>(<span class="code-string">'data.txt'</span>, <span class="code-string">'r'</span>) <span class="code-keyword">as</span> file:
    content = file.read()

<span class="code-comment"># معالجة البيانات النصية</span>
lines = content.split(<span class="code-string">'\\n'</span>)
<span class="code-keyword">for</span> line <span class="code-keyword">in</span> lines:
    <span class="code-keyword">if</span> line.strip():  <span class="code-comment"># تجاهل الأسطر الفارغة</span>
        <span class="code-keyword">print</span>(line)
                        </pre>
                    </div>
                </div>
                
                <div class="file-type">
                    <h4><i class="fas fa-file-csv"></i> ملفات CSV</h4>
                    <p>ملفات البيانات المفصولة بفواصل</p>
                    <div class="code-example">
                        <pre>
<span class="code-comment"># قراءة CSV يدوياً</span>
<span class="code-keyword">with</span> <span class="code-keyword">open</span>(<span class="code-string">'data.csv'</span>, <span class="code-string">'r'</span>) <span class="code-keyword">as</span> file:
    <span class="code-keyword">for</span> line <span class="code-keyword">in</span> file:
        row = line.strip().split(<span class="code-string">','</span>)
        <span class="code-keyword">print</span>(row)

<span class="code-comment"># أو استخدام مكتبة csv</span>
<span class="code-keyword">import</span> csv
<span class="code-keyword">with</span> <span class="code-keyword">open</span>(<span class="code-string">'data.csv'</span>, <span class="code-string">'r'</span>) <span class="code-keyword">as</span> file:
    reader = csv.reader(file)
    <span class="code-keyword">for</span> row <span class="code-keyword">in</span> reader:
        <span class="code-keyword">print</span>(row)
                        </pre>
                    </div>
                </div>
                
                <div class="file-type">
                    <h4><i class="fas fa-file-code"></i> ملفات JSON</h4>
                    <p>ملفات البيانات المنظمة بتنسيق JSON</p>
                    <div class="code-example">
                        <pre>
<span class="code-keyword">import</span> json

<span class="code-comment"># قراءة ملف JSON</span>
<span class="code-keyword">with</span> <span class="code-keyword">open</span>(<span class="code-string">'data.json'</span>, <span class="code-string">'r'</span>) <span class="code-keyword">as</span> file:
    data = json.load(file)
    <span class="code-keyword">print</span>(data)

<span class="code-comment"># كتابة إلى ملف JSON</span>
data = {
    <span class="code-string">"name"</span>: <span class="code-string">"أحمد"</span>,
    <span class="code-string">"age"</span>: <span class="code-number">30</span>,
    <span class="code-string">"city"</span>: <span class="code-string">"الرياض"</span>
}
<span class="code-keyword">with</span> <span class="code-keyword">open</span>(<span class="code-string">'output.json'</span>, <span class="code-string">'w'</span>) <span class="code-keyword">as</span> file:
    json.dump(data, file, indent=<span class="code-number">4</span>, ensure_ascii=<span class="code-keyword">False</span>)
                        </pre>
                    </div>
                </div>
            </div>
            
            <h3>مثال متقدم: نظام إدارة المهام</h3>
            <div class="code-example">
                <pre>
<span class="code-keyword">import</span> json
<span class="code-keyword">import</span> os

<span class="code-keyword">class</span> <span class="code-class">TaskManager</span>:
    <span class="code-keyword">def</span> <span class="code-function">__init__</span>(<span class="code-keyword">self</span>, filename=<span class="code-string">'tasks.json'</span>):
        <span class="code-keyword">self</span>.filename = filename
        <span class="code-keyword">self</span>.tasks = <span class="code-keyword">self</span>.load_tasks()
    
    <span class="code-keyword">def</span> <span class="code-function">load_tasks</span>(<span class="code-keyword">self</span>):
        <span class="code-comment"># تحميل المهام من ملف JSON</span>
        <span class="code-keyword">if</span> os.path.exists(<span class="code-keyword">self</span>.filename):
            <span class="code-keyword">try</span>:
                <span class="code-keyword">with</span> <span class="code-keyword">open</span>(<span class="code-keyword">self</span>.filename, <span class="code-string">'r'</span>, encoding=<span class="code-string">'utf-8'</span>) <span class="code-keyword">as</span> file:
                    <span class="code-keyword">return</span> json.load(file)
            <span class="code-keyword">except</span> Exception <span class="code-keyword">as</span> e:
                <span class="code-keyword">print</span>(<span class="code-string">f"خطأ في تحميل المهام: {e}"</span>)
        <span class="code-keyword">return</span> []
    
    <span class="code-keyword">def</span> <span class="code-function">save_tasks</span>(<span class="code-keyword">self</span>):
        <span class="code-comment"># حفظ المهام إلى ملف JSON</span>
        <span class="code-keyword">try</span>:
            <span class="code-keyword">with</span> <span class="code-keyword">open</span>(<span class="code-keyword">self</span>.filename, <span class="code-string">'w'</span>, encoding=<span class="code-string">'utf-8'</span>) <span class="code-keyword">as</span> file:
                json.dump(<span class="code-keyword">self</span>.tasks, file, indent=<span class="code-number">4</span>, ensure_ascii=<span class="code-keyword">False</span>)
            <span class="code-keyword">return</span> <span class="code-keyword">True</span>
        <span class="code-keyword">except</span> Exception <span class="code-keyword">as</span> e:
            <span class="code-keyword">print</span>(<span class="code-string">f"خطأ في حفظ المهام: {e}"</span>)
            <span class="code-keyword">return</span> <span class="code-keyword">False</span>
    
    <span class="code-keyword">def</span> <span class="code-function">add_task</span>(<span class="code-keyword">self</span>, title, description):
        task = {
            <span class="code-string">"id"</span>: <span class="code-keyword">len</span>(<span class="code-keyword">self</span>.tasks) + <span class="code-number">1</span>,
            <span class="code-string">"title"</span>: title,
            <span class="code-string">"description"</span>: description,
            <span class="code-string">"completed"</span>: <span class="code-keyword">False</span>,
            <span class="code-string">"created_at"</span>: <span class="code-string">"2023-12-07"</span>
        }
        <span class="code-keyword">self</span>.tasks.append(task)
        <span class="code-keyword">return</span> <span class="code-keyword">self</span>.save_tasks()
    
    <span class="code-keyword">def</span> <span class="code-function">list_tasks</span>(<span class="code-keyword">self</span>):
        <span class="code-keyword">for</span> task <span class="code-keyword">in</span> <span class="code-keyword">self</span>.tasks:
            status = <span class="code-string">"مكتملة"</span> <span class="code-keyword">if</span> task[<span class="code-string">"completed"</span>] <span class="code-keyword">else</span> <span class="code-string">"قيد التنفيذ"</span>
            <span class="code-keyword">print</span>(<span class="code-string">f"{task['id']}. {task['title']} - {status}"</span>)

<span class="code-comment"># استخدام النظام</span>
manager = TaskManager()

<span class="code-comment"># إضافة مهام جديدة</span>
manager.add_task(<span class="code-string">"تعلم بايثون"</span>, <span class="code-string">"دراسة التعامل مع الملفات"</span>)
manager.add_task(<span class="code-string">"تسوق"</span>, <span class="code-string">"شراء مستلزمات المنزل"</span>)

<span class="code-comment"># عرض المهام</span>
<span class="code-keyword">print</span>(<span class="code-string">"قائمة المهام:"</span>)
manager.list_tasks()
                </pre>
            </div>
            
            <div class="example-output">
                <h4>المخرجات:</h4>
                <pre>قائمة المهام:
1. تعلم بايثون - قيد التنفيذ
2. تسوق - قيد التنفيذ</pre>
            </div>
        </section>

        <!-- قسم المحرر التفاعلي -->
        <section class="content-section">
            <h2 class="section-title"><i class="fas fa-edit"></i> محرر الأكواد التفاعلي</h2>
            
            <div class="editor-section">
                <h3><i class="fas fa-play"></i> جرب التعامل مع الملفات بنفسك</h3>
                <p>يمكنك تعديل الكود التالي وتشغيله لترى نتائج التعامل مع الملفات:</p>
                
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
                        <textarea id="python-editor"># جرب تعديل هذا الكود للتعامل مع الملفات
import os
import json

class FileHandler:
    def __init__(self, filename):
        self.filename = filename
    
    def create_sample_file(self):
        """إنشاء ملف نموذجي للاختبار"""
        try:
            with open(self.filename, 'w', encoding='utf-8') as file:
                file.write("=== قائمة الطلاب ===\\n")
                file.write("1. أحمد - الصف: العاشر - المعدل: 95\\n")
                file.write("2. فاطمة - الصف: الحادي عشر - المعدل: 98\\n")
                file.write("3. محمد - الصف: الثاني عشر - المعدل: 92\\n")
                file.write("4. سارة - الصف: العاشر - المعدل: 96\\n")
            print(f"تم إنشاء الملف {self.filename} بنجاح")
            return True
        except Exception as e:
            print(f"خطأ في إنشاء الملف: {e}")
            return False
    
    def read_and_display(self):
        """قراءة وعرض محتوى الملف"""
        try:
            if not os.path.exists(self.filename):
                print("الملف غير موجود! جاري إنشاء ملف جديد...")
                self.create_sample_file()
            
            print(f"=== محتوى الملف {self.filename} ===")
            with open(self.filename, 'r', encoding='utf-8') as file:
                # الطريقة 1: قراءة كاملة
                content = file.read()
                print("المحتوى الكامل:")
                print(content)
                
                # العودة لبداية الملف للقراءة مرة أخرى
                file.seek(0)
                
                # الطريقة 2: قراءة سطر بسطر
                print("\\nقراءة سطر بسطر:")
                for i, line in enumerate(file, 1):
                    if line.strip():  # تجاهل الأسطر الفارغة
                        print(f"السطر {i}: {line.strip()}")
            
            return True
        except Exception as e:
            print(f"خطأ في قراءة الملف: {e}")
            return False
    
    def add_student(self, name, grade, average):
        """إضافة طالب جديد إلى الملف"""
        try:
            with open(self.filename, 'a', encoding='utf-8') as file:
                # حساب رقم الطالب التالي
                if os.path.exists(self.filename):
                    with open(self.filename, 'r', encoding='utf-8') as f:
                        lines = f.readlines()
                        student_count = len([l for l in lines if l.strip() and '---' not in l]) - 1
                else:
                    student_count = 0
                
                new_student = f"{student_count + 1}. {name} - الصف: {grade} - المعدل: {average}\\n"
                file.write(new_student)
            
            print(f"تم إضافة الطالب {name} بنجاح")
            return True
        except Exception as e:
            print(f"خطأ في إضافة الطالب: {e}")
            return False
    
    def search_student(self, name):
        """البحث عن طالب بالاسم"""
        try:
            with open(self.filename, 'r', encoding='utf-8') as file:
                for line in file:
                    if name.lower() in line.lower():
                        print(f"تم العثور على: {line.strip()}")
                        return True
            print(f"لم يتم العثور عن الطالب {name}")
            return False
        except Exception as e:
            print(f"خطأ في البحث: {e}")
            return False

# اختبار الكلاس
def main():
    handler = FileHandler('students.txt')
    
    # إنشاء ملف إذا لم يكن موجوداً
    if not os.path.exists('students.txt'):
        handler.create_sample_file()
    
    # قراءة وعرض المحتوى
    handler.read_and_display()
    
    # إضافة طالب جديد
    print("\\n" + "="*50)
    handler.add_student("خالد", "التاسع", 88)
    
    # عرض المحتوى بعد الإضافة
    print("\\n" + "="*50)
    handler.read_and_display()
    
    # البحث عن طالب
    print("\\n" + "="*50)
    print("البحث عن طالب:")
    handler.search_student("أحمد")
    handler.search_student("خالد")
    handler.search_student("علي")

if __name__ == "__main__":
    main()</textarea>
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

        <!-- قسم أفضل الممارسات -->
        <section class="content-section">
            <h2 class="section-title"><i class="fas fa-star"></i> أفضل الممارسات</h2>
            
            <ul class="benefits-list">
                <li><i class="fas fa-check"></i> <strong>استخدم with:</strong> يضمن إغلاق الملف تلقائياً حتى في حالة الأخطاء</li>
                <li><i class="fas fa-check"></i> <strong>حدد الترميز:</strong> استخدم encoding='utf-8' للتعامل مع النصوص العربية</li>
                <li><i class="fas fa-check"></i> <strong>تعامل مع الاستثناءات:</strong> استخدم try-except للتعامل مع الأخطاء</li>
                <li><i class="fas fa-check"></i> <strong>تحقق من وجود الملف:</strong> استخدم os.path.exists() قبل التعامل مع الملف</li>
                <li><i class="fas fa-check"></i> <strong>استخدم الأنماط المناسبة:</strong> اختر نمط الفتح المناسب للعملية</li>
            </ul>
            
            <div class="tip">
                <p><i class="fas fa-lightbulb"></i> <strong>نصيحة:</strong> دائماً استخدم <code>with open() as file</code> بدلاً من <code>file = open()</code> ثم <code>file.close()</code> لأنها أكثر أماناً وتضمن إغلاق الملف تلقائياً.</p>
            </div>
            
            <h3 class="section-title"><i class="fas fa-exclamation-triangle"></i> تحذيرات مهمة</h3>
            
            <div class="warning">
                <p><i class="fas fa-exclamation-circle"></i> <strong>احذر من:</strong></p>
                <ul class="benefits-list">
                    <li><i class="fas fa-times"></i> <strong>نسيان إغلاق الملف:</strong> قد يؤدي إلى فقدان البيانات أو تلف الملف</li>
                    <li><i class="fas fa-times"></i> <strong>استخدام النمط الخاطئ:</strong> الكتابة ('w') تمسح الملف الحالي</li>
                    <li><i class="fas fa-times"></i> <strong>مشاكل الترميز:</strong> تجاهل encoding قد يؤدي إلى تشويه النصوص العربية</li>
                    <li><i class="fas fa-times"></i> <strong>عدم التحقق من الوجود:</strong> قد يؤدي إلى أخطاء FileNotFoundError</li>
                </ul>
            </div>
        </section>
    </div>
    
    <footer>
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3><i class="fas fa-info-circle"></i> ملخص التعامل مع الملفات</h3>
                    <p>بايثون توفر طرقاً سهلة وآمنة للتعامل مع الملفات بأنواعها المختلفة. استخدام with و التعامل الصحيح مع الاستثناءات يجعل الكود أكثر قوة وموثوقية.</p>
                </div>
                <div class="footer-section">
                    <h3><i class="fas fa-code"></i> المفاهيم الأساسية</h3>
                    <p>open(), with, أنماط الفتح, encoding, التعامل مع الاستثناءات, JSON, CSV</p>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2023 القراءة والكتابة في الملفات في بايثون - شرح شامل. جميع الحقوق محفوظة.</p>
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
                    if (code.includes('FileHandler')) {
                        simulatedOutput = `تم إنشاء الملف students.txt بنجاح
=== محتوى الملف students.txt ===
المحتوى الكامل:
=== قائمة الطلاب ===
1. أحمد - الصف: العاشر - المعدل: 95
2. فاطمة - الصف: الحادي عشر - المعدل: 98
3. محمد - الصف: الثاني عشر - المعدل: 92
4. سارة - الصف: العاشر - المعدل: 96

قراءة سطر بسطر:
السطر 1: === قائمة الطلاب ===
السطر 2: 1. أحمد - الصف: العاشر - المعدل: 95
السطر 3: 2. فاطمة - الصف: الحادي عشر - المعدل: 98
السطر 4: 3. محمد - الصف: الثاني عشر - المعدل: 92
السطر 5: 4. سارة - الصف: العاشر - المعدل: 96

==================================================
تم إضافة الطالب خالد بنجاح

==================================================
=== محتوى الملف students.txt ===
المحتوى الكامل:
=== قائمة الطلاب ===
1. أحمد - الصف: العاشر - المعدل: 95
2. فاطمة - الصف: الحادي عشر - المعدل: 98
3. محمد - الصف: الثاني عشر - المعدل: 92
4. سارة - الصف: العاشر - المعدل: 96
5. خالد - الصف: التاسع - المعدل: 88

قراءة سطر بسطر:
السطر 1: === قائمة الطلاب ===
السطر 2: 1. أحمد - الصف: العاشر - المعدل: 95
السطر 3: 2. فاطمة - الصف: الحادي عشر - المعدل: 98
السطر 4: 3. محمد - الصف: الثاني عشر - المعدل: 92
السطر 5: 4. سارة - الصف: العاشر - المعدل: 96
السطر 6: 5. خالد - الصف: التاسع - المعدل: 88

==================================================
البحث عن طالب:
تم العثور على: 1. أحمد - الصف: العاشر - المعدل: 95
تم العثور على: 5. خالد - الصف: التاسع - المعدل: 88
لم يتم العثور عن الطالب علي`;
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
            document.getElementById('python-editor').value = `# جرب تعديل هذا الكود للتعامل مع الملفات
import os
import json

class FileHandler:
    def __init__(self, filename):
        self.filename = filename
    
    def create_sample_file(self):
        """إنشاء ملف نموذجي للاختبار"""
        try:
            with open(self.filename, 'w', encoding='utf-8') as file:
                file.write("=== قائمة الطلاب ===\\n")
                file.write("1. أحمد - الصف: العاشر - المعدل: 95\\n")
                file.write("2. فاطمة - الصف: الحادي عشر - المعدل: 98\\n")
                file.write("3. محمد - الصف: الثاني عشر - المعدل: 92\\n")
                file.write("4. سارة - الصف: العاشر - المعدل: 96\\n")
            print(f"تم إنشاء الملف {self.filename} بنجاح")
            return True
        except Exception as e:
            print(f"خطأ في إنشاء الملف: {e}")
            return False
    
    def read_and_display(self):
        """قراءة وعرض محتوى الملف"""
        try:
            if not os.path.exists(self.filename):
                print("الملف غير موجود! جاري إنشاء ملف جديد...")
                self.create_sample_file()
            
            print(f"=== محتوى الملف {self.filename} ===")
            with open(self.filename, 'r', encoding='utf-8') as file:
                # الطريقة 1: قراءة كاملة
                content = file.read()
                print("المحتوى الكامل:")
                print(content)
                
                # العودة لبداية الملف للقراءة مرة أخرى
                file.seek(0)
                
                # الطريقة 2: قراءة سطر بسطر
                print("\\nقراءة سطر بسطر:")
                for i, line in enumerate(file, 1):
                    if line.strip():  # تجاهل الأسطر الفارغة
                        print(f"السطر {i}: {line.strip()}")
            
            return True
        except Exception as e:
            print(f"خطأ في قراءة الملف: {e}")
            return False
    
    def add_student(self, name, grade, average):
        """إضافة طالب جديد إلى الملف"""
        try:
            with open(self.filename, 'a', encoding='utf-8') as file:
                # حساب رقم الطالب التالي
                if os.path.exists(self.filename):
                    with open(self.filename, 'r', encoding='utf-8') as f:
                        lines = f.readlines()
                        student_count = len([l for l in lines if l.strip() and '---' not in l]) - 1
                else:
                    student_count = 0
                
                new_student = f"{student_count + 1}. {name} - الصف: {grade} - المعدل: {average}\\n"
                file.write(new_student)
            
            print(f"تم إضافة الطالب {name} بنجاح")
            return True
        except Exception as e:
            print(f"خطأ في إضافة الطالب: {e}")
            return False
    
    def search_student(self, name):
        """البحث عن طالب بالاسم"""
        try:
            with open(self.filename, 'r', encoding='utf-8') as file:
                for line in file:
                    if name.lower() in line.lower():
                        print(f"تم العثور على: {line.strip()}")
                        return True
            print(f"لم يتم العثور عن الطالب {name}")
            return False
        except Exception as e:
            print(f"خطأ في البحث: {e}")
            return False

# اختبار الكلاس
def main():
    handler = FileHandler('students.txt')
    
    # إنشاء ملف إذا لم يكن موجوداً
    if not os.path.exists('students.txt'):
        handler.create_sample_file()
    
    # قراءة وعرض المحتوى
    handler.read_and_display()
    
    # إضافة طالب جديد
    print("\\n" + "="*50)
    handler.add_student("خالد", "التاسع", 88)
    
    # عرض المحتوى بعد الإضافة
    print("\\n" + "="*50)
    handler.read_and_display()
    
    # البحث عن طالب
    print("\\n" + "="*50)
    print("البحث عن طالب:")
    handler.search_student("أحمد")
    handler.search_student("خالد")
    handler.search_student("علي")

if __name__ == "__main__":
    main()`;
            document.getElementById('editor-output').innerHTML = 'سيظهر نتائج الكود هنا...';
        }
        
        // تشغيل الكود تلقائياً عند التحميل
        document.addEventListener('DOMContentLoaded', function() {
            setTimeout(runCode, 1000);
        });
    </script>
</body>
</html>