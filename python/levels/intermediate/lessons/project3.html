<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>نظام الفواتير النصي البسيط - Simple Invoice System</title>
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
            white-space: pre-wrap;
        }
        
        .invoice-form {
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
            height: 80px;
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
        
        .items-table {
            width: 100%;
            border-collapse: collapse;
            margin: 1rem 0;
            background: white;
        }
        
        .items-table th, .items-table td {
            border: 1px solid #ddd;
            padding: 0.8rem;
            text-align: center;
        }
        
        .items-table th {
            background: var(--primary);
            color: white;
        }
        
        .items-table tr:nth-child(even) {
            background: #f9f9f9;
        }
        
        .invoice-preview {
            background: white;
            border: 2px solid var(--light);
            padding: 2rem;
            margin: 1rem 0;
            border-radius: 8px;
        }
        
        .invoice-header {
            text-align: center;
            margin-bottom: 2rem;
            padding-bottom: 1rem;
            border-bottom: 2px solid var(--light);
        }
        
        .invoice-details {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
            margin-bottom: 2rem;
        }
        
        .invoice-items {
            margin: 2rem 0;
        }
        
        .invoice-totals {
            text-align: right;
            margin-top: 2rem;
        }
        
        .total-row {
            display: flex;
            justify-content: space-between;
            margin-bottom: 0.5rem;
            padding: 0.5rem 0;
        }
        
        .total-row.grand-total {
            border-top: 2px solid var(--primary);
            font-weight: bold;
            font-size: 1.2rem;
            color: var(--primary);
        }
        
        .invoice-footer {
            text-align: center;
            margin-top: 3rem;
            padding-top: 1rem;
            border-top: 1px solid var(--light);
            color: #666;
        }
        
        .invoice-list {
            margin-top: 1rem;
        }
        
        .invoice-item {
            background: white;
            padding: 1rem;
            margin-bottom: 0.5rem;
            border-radius: 5px;
            border-left: 4px solid var(--info);
            cursor: pointer;
            transition: all 0.3s ease;
        }
        
        .invoice-item:hover {
            background: var(--light);
            transform: translateX(-5px);
        }
        
        .invoice-meta {
            display: flex;
            justify-content: space-between;
            color: #666;
            font-size: 0.9rem;
            margin-top: 0.5rem;
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
            
            .form-row {
                flex-direction: column;
            }
            
            .invoice-details {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <header>
        <div class="container">
            <h1>نظام الفواتير النصي البسيط</h1>
            <p class="subtitle">مشروع بلغة Python لإنشاء وإدارة الفواتير النصية بشكل بسيط وفعال</p>
        </div>
    </header>
    
    <div class="container">
        <div class="project-tabs">
            <div class="tab active" data-tab="overview">نظرة عامة</div>
            <div class="tab" data-tab="code">الكود المصدري</div>
            <div class="tab" data-tab="demo">تجربة النظام</div>
            <div class="tab" data-tab="explanation">شرح المشروع</div>
        </div>
        
        <!-- نظرة عامة -->
        <div id="overview" class="content-section active">
            <h2>نظرة عامة على المشروع</h2>
            <p>نظام الفواتير النصي البسيط هو تطبيق يسمح للمستخدمين بإنشاء وإدارة الفواتير بشكل نصي. النظام مناسب للمحلات الصغيرة والأفراد الذين يحتاجون نظام فواتير بسيط وسهل الاستخدام.</p>
            
            <h3>الميزات الرئيسية</h3>
            <div class="feature-grid">
                <div class="feature-card">
                    <div class="feature-title">🧾 إنشاء فواتير جديدة</div>
                    <p>إنشاء فواتير مع معلومات العميل والمنتجات</p>
                </div>
                
                <div class="feature-card">
                    <div class="feature-title">📦 إدارة المنتجات</div>
                    <p>إضافة وعرض وتعديل المنتجات المتاحة</p>
                </div>
                
                <div class="feature-card">
                    <div class="feature-title">👥 إدارة العملاء</div>
                    <p>تخزين معلومات العملاء للفواتير المستقبلية</p>
                </div>
                
                <div class="feature-card">
                    <div class="feature-title">💾 حفظ البيانات</div>
                    <p>حفظ جميع البيانات في ملفات نصية و JSON</p>
                </div>
                
                <div class="feature-card">
                    <div class="feature-title">🔍 عرض الفواتير</div>
                    <p>عرض وتصفح الفواتير السابقة</p>
                </div>
                
                <div class="feature-card">
                    <div class="feature-title">📊 حسابات تلقائية</div>
                    <p>حساب المجاميع والضرائب تلقائياً</p>
                </div>
            </div>
            
            <h3>المتطلبات التقنية</h3>
            <ul>
                <li>لغة البرمجة: Python 3.x</li>
                <li>تخزين البيانات: ملفات JSON ونصية</li>
                <li>المكتبات: مكتبات Python القياسية فقط</li>
                <li>واجهة المستخدم: نصية (Terminal)</li>
            </ul>
        </div>
        
        <!-- الكود المصدري -->
        <div id="code" class="content-section">
            <h2>الكود المصدري الكامل</h2>
            
            <h3>الكلاسات الأساسية</h3>
            <div class="code-block">
                <span class="code-keyword">import</span> json<br>
                <span class="code-keyword">import</span> os<br>
                <span class="code-keyword">from</span> datetime <span class="code-keyword">import</span> datetime<br>
                <br>
                <span class="code-keyword">class</span> <span class="code-class">Product</span>:<br>
                &nbsp;&nbsp;<span class="code-keyword">def</span> <span class="code-function">__init__</span>(<span class="code-keyword">self</span>, product_id, name, price, description=<span class="code-string">""</span>):<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">self</span>.product_id = product_id<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">self</span>.name = name<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">self</span>.price = price<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">self</span>.description = description<br>
                <br>
                &nbsp;&nbsp;<span class="code-keyword">def</span> <span class="code-function">__str__</span>(<span class="code-keyword">self</span>):<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">return</span> <span class="code-string">f"<span class="code-keyword">{self.name}</span> - <span class="code-keyword">{self.price}</span> ريال"</span><br>
                <br>
                &nbsp;&nbsp;<span class="code-keyword">def</span> <span class="code-function">to_dict</span>(<span class="code-keyword">self</span>):<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">return</span> {<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-string">"product_id"</span>: <span class="code-keyword">self</span>.product_id,<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-string">"name"</span>: <span class="code-keyword">self</span>.name,<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-string">"price"</span>: <span class="code-keyword">self</span>.price,<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-string">"description"</span>: <span class="code-keyword">self</span>.description<br>
                &nbsp;&nbsp;&nbsp;&nbsp;}<br>
                <br>
                &nbsp;&nbsp;<span class="code-keyword">@classmethod</span><br>
                &nbsp;&nbsp;<span class="code-keyword">def</span> <span class="code-function">from_dict</span>(<span class="code-keyword">cls</span>, data):<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">return</span> <span class="code-keyword">cls</span>(<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;data[<span class="code-string">"product_id"</span>],<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;data[<span class="code-string">"name"</span>],<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;data[<span class="code-string">"price"</span>],<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;data.get(<span class="code-string">"description"</span>, <span class="code-string">""</span>)<br>
                &nbsp;&nbsp;&nbsp;&nbsp;)<br>
                <br>
                <span class="code-keyword">class</span> <span class="code-class">Customer</span>:<br>
                &nbsp;&nbsp;<span class="code-keyword">def</span> <span class="code-function">__init__</span>(<span class="code-keyword">self</span>, customer_id, name, phone=<span class="code-string">""</span>, address=<span class="code-string">""</span>):<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">self</span>.customer_id = customer_id<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">self</span>.name = name<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">self</span>.phone = phone<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">self</span>.address = address<br>
                <br>
                &nbsp;&nbsp;<span class="code-keyword">def</span> <span class="code-function">__str__</span>(<span class="code-keyword">self</span>):<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">return</span> <span class="code-string">f"<span class="code-keyword">{self.name}</span> - <span class="code-keyword">{self.phone}</span>"</span><br>
                <br>
                &nbsp;&nbsp;<span class="code-keyword">def</span> <span class="code-function">to_dict</span>(<span class="code-keyword">self</span>):<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">return</span> {<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-string">"customer_id"</span>: <span class="code-keyword">self</span>.customer_id,<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-string">"name"</span>: <span class="code-keyword">self</span>.name,<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-string">"phone"</span>: <span class="code-keyword">self</span>.phone,<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-string">"address"</span>: <span class="code-keyword">self</span>.address<br>
                &nbsp;&nbsp;&nbsp;&nbsp;}<br>
                <br>
                &nbsp;&nbsp;<span class="code-keyword">@classmethod</span><br>
                &nbsp;&nbsp;<span class="code-keyword">def</span> <span class="code-function">from_dict</span>(<span class="code-keyword">cls</span>, data):<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">return</span> <span class="code-keyword">cls</span>(<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;data[<span class="code-string">"customer_id"</span>],<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;data[<span class="code-string">"name"</span>],<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;data.get(<span class="code-string">"phone"</span>, <span class="code-string">""</span>),<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;data.get(<span class="code-string">"address"</span>, <span class="code-string">""</span>)<br>
                &nbsp;&nbsp;&nbsp;&nbsp;)<br>
                <br>
                <span class="code-keyword">class</span> <span class="code-class">InvoiceItem</span>:<br>
                &nbsp;&nbsp;<span class="code-keyword">def</span> <span class="code-function">__init__</span>(<span class="code-keyword">self</span>, product, quantity):<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">self</span>.product = product<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">self</span>.quantity = quantity<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">self</span>.total = product.price * quantity<br>
                <br>
                &nbsp;&nbsp;<span class="code-keyword">def</span> <span class="code-function">to_dict</span>(<span class="code-keyword">self</span>):<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">return</span> {<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-string">"product"</span>: <span class="code-keyword">self</span>.product.to_dict(),<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-string">"quantity"</span>: <span class="code-keyword">self</span>.quantity,<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-string">"total"</span>: <span class="code-keyword">self</span>.total<br>
                &nbsp;&nbsp;&nbsp;&nbsp;}<br>
                <br>
                &nbsp;&nbsp;<span class="code-keyword">@classmethod</span><br>
                &nbsp;&nbsp;<span class="code-keyword">def</span> <span class="code-function">from_dict</span>(<span class="code-keyword">cls</span>, data):<br>
                &nbsp;&nbsp;&nbsp;&nbsp;product = Product.from_dict(data[<span class="code-string">"product"</span>])<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">return</span> <span class="code-keyword">cls</span>(product, data[<span class="code-string">"quantity"</span>])<br>
            </div>
            
            <h3>كلاس الفاتورة الرئيسي</h3>
            <div class="code-block">
                <span class="code-keyword">class</span> <span class="code-class">Invoice</span>:<br>
                &nbsp;&nbsp;<span class="code-keyword">def</span> <span class="code-function">__init__</span>(<span class="code-keyword">self</span>, invoice_id, customer, date=None):<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">self</span>.invoice_id = invoice_id<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">self</span>.customer = customer<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">self</span>.date = date <span class="code-keyword">if</span> date <span class="code-keyword">else</span> datetime.now()<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">self</span>.items = []<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">self</span>.tax_rate = <span class="code-keyword">0.15</span>  <span class="code-comment"># 15% ضريبة</span><br>
                <br>
                &nbsp;&nbsp;<span class="code-keyword">def</span> <span class="code-function">add_item</span>(<span class="code-keyword">self</span>, product, quantity):<br>
                &nbsp;&nbsp;&nbsp;&nbsp;item = InvoiceItem(product, quantity)<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">self</span>.items.append(item)<br>
                <br>
                &nbsp;&nbsp;<span class="code-keyword">def</span> <span class="code-function">calculate_subtotal</span>(<span class="code-keyword">self</span>):<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">return</span> sum(item.total <span class="code-keyword">for</span> item <span class="code-keyword">in</span> <span class="code-keyword">self</span>.items)<br>
                <br>
                &nbsp;&nbsp;<span class="code-keyword">def</span> <span class="code-function">calculate_tax</span>(<span class="code-keyword">self</span>):<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">return</span> <span class="code-keyword">self</span>.calculate_subtotal() * <span class="code-keyword">self</span>.tax_rate<br>
                <br>
                &nbsp;&nbsp;<span class="code-keyword">def</span> <span class="code-function">calculate_total</span>(<span class="code-keyword">self</span>):<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">return</span> <span class="code-keyword">self</span>.calculate_subtotal() + <span class="code-keyword">self</span>.calculate_tax()<br>
                <br>
                &nbsp;&nbsp;<span class="code-keyword">def</span> <span class="code-function">generate_invoice_text</span>(<span class="code-keyword">self</span>):<br>
                &nbsp;&nbsp;&nbsp;&nbsp;invoice_text = <span class="code-string">""</span><br>
                &nbsp;&nbsp;&nbsp;&nbsp;invoice_text += <span class="code-string">"=" * 50 + "<span class="code-keyword">\n</span>"</span><br>
                &nbsp;&nbsp;&nbsp;&nbsp;invoice_text += <span class="code-string">"<span class="code-keyword">\t\t\t</span>فاتورة بيع<span class="code-keyword">\n</span>"</span><br>
                &nbsp;&nbsp;&nbsp;&nbsp;invoice_text += <span class="code-string">"=" * 50 + "<span class="code-keyword">\n</span>"</span><br>
                &nbsp;&nbsp;&nbsp;&nbsp;invoice_text += <span class="code-string">f"رقم الفاتورة: <span class="code-keyword">{self.invoice_id}</span><span class="code-keyword">\n</span>"</span><br>
                &nbsp;&nbsp;&nbsp;&nbsp;invoice_text += <span class="code-string">f"التاريخ: <span class="code-keyword">{self.date.strftime('%Y-%m-%d %H:%M')}</span><span class="code-keyword">\n</span>"</span><br>
                &nbsp;&nbsp;&nbsp;&nbsp;invoice_text += <span class="code-string">f"العميل: <span class="code-keyword">{self.customer.name}</span><span class="code-keyword">\n</span>"</span><br>
                &nbsp;&nbsp;&nbsp;&nbsp;invoice_text += <span class="code-string">f"الهاتف: <span class="code-keyword">{self.customer.phone}</span><span class="code-keyword">\n</span>"</span><br>
                &nbsp;&nbsp;&nbsp;&nbsp;invoice_text += <span class="code-string">"-" * 50 + "<span class="code-keyword">\n</span>"</span><br>
                &nbsp;&nbsp;&nbsp;&nbsp;invoice_text += <span class="code-string">"المنتجات:<span class="code-keyword">\n</span>"</span><br>
                &nbsp;&nbsp;&nbsp;&nbsp;invoice_text += <span class="code-string">"-" * 50 + "<span class="code-keyword">\n</span>"</span><br>
                &nbsp;&nbsp;&nbsp;&nbsp;<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">for</span> i, item <span class="code-keyword">in</span> enumerate(<span class="code-keyword">self</span>.items, <span class="code-keyword">1</span>):<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;invoice_text += <span class="code-string">f"<span class="code-keyword">{i}</span>. <span class="code-keyword">{item.product.name}</span><span class="code-keyword">\n</span>"</span><br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;invoice_text += <span class="code-string">f"   الكمية: <span class="code-keyword">{item.quantity}</span> - السعر: <span class="code-keyword">{item.product.price}</span> - الإجمالي: <span class="code-keyword">{item.total}</span><span class="code-keyword">\n</span>"</span><br>
                &nbsp;&nbsp;&nbsp;&nbsp;<br>
                &nbsp;&nbsp;&nbsp;&nbsp;invoice_text += <span class="code-string">"-" * 50 + "<span class="code-keyword">\n</span>"</span><br>
                &nbsp;&nbsp;&nbsp;&nbsp;invoice_text += <span class="code-string">f"المجموع: <span class="code-keyword">{self.calculate_subtotal():.2f}</span> ريال<span class="code-keyword">\n</span>"</span><br>
                &nbsp;&nbsp;&nbsp;&nbsp;invoice_text += <span class="code-string">f"الضريبة (<span class="code-keyword">{self.tax_rate*100}%</span>): <span class="code-keyword">{self.calculate_tax():.2f}</span> ريال<span class="code-keyword">\n</span>"</span><br>
                &nbsp;&nbsp;&nbsp;&nbsp;invoice_text += <span class="code-string">f"الإجمالي النهائي: <span class="code-keyword">{self.calculate_total():.2f}</span> ريال<span class="code-keyword">\n</span>"</span><br>
                &nbsp;&nbsp;&nbsp;&nbsp;invoice_text += <span class="code-string">"=" * 50 + "<span class="code-keyword">\n</span>"</span><br>
                &nbsp;&nbsp;&nbsp;&nbsp;invoice_text += <span class="code-string">"شكراً لتعاملكم معنا<span class="code-keyword">\n</span>"</span><br>
                &nbsp;&nbsp;&nbsp;&nbsp;invoice_text += <span class="code-string">"=" * 50 + "<span class="code-keyword">\n</span>"</span><br>
                &nbsp;&nbsp;&nbsp;&nbsp;<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">return</span> invoice_text<br>
                <br>
                &nbsp;&nbsp;<span class="code-keyword">def</span> <span class="code-function">to_dict</span>(<span class="code-keyword">self</span>):<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">return</span> {<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-string">"invoice_id"</span>: <span class="code-keyword">self</span>.invoice_id,<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-string">"customer"</span>: <span class="code-keyword">self</span>.customer.to_dict(),<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-string">"date"</span>: <span class="code-keyword">self</span>.date.isoformat(),<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-string">"items"</span>: [item.to_dict() <span class="code-keyword">for</span> item <span class="code-keyword">in</span> <span class="code-keyword">self</span>.items],<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-string">"tax_rate"</span>: <span class="code-keyword">self</span>.tax_rate,<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-string">"subtotal"</span>: <span class="code-keyword">self</span>.calculate_subtotal(),<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-string">"tax"</span>: <span class="code-keyword">self</span>.calculate_tax(),<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-string">"total"</span>: <span class="code-keyword">self</span>.calculate_total()<br>
                &nbsp;&nbsp;&nbsp;&nbsp;}<br>
                <br>
                &nbsp;&nbsp;<span class="code-keyword">@classmethod</span><br>
                &nbsp;&nbsp;<span class="code-keyword">def</span> <span class="code-function">from_dict</span>(<span class="code-keyword">cls</span>, data):<br>
                &nbsp;&nbsp;&nbsp;&nbsp;customer = Customer.from_dict(data[<span class="code-string">"customer"</span>])<br>
                &nbsp;&nbsp;&nbsp;&nbsp;invoice = <span class="code-keyword">cls</span>(data[<span class="code-string">"invoice_id"</span>], customer, datetime.fromisoformat(data[<span class="code-string">"date"</span>]))<br>
                &nbsp;&nbsp;&nbsp;&nbsp;invoice.items = [InvoiceItem.from_dict(item_data) <span class="code-keyword">for</span> item_data <span class="code-keyword">in</span> data[<span class="code-string">"items"</span>]]<br>
                &nbsp;&nbsp;&nbsp;&nbsp;invoice.tax_rate = data.get(<span class="code-string">"tax_rate"</span>, <span class="code-keyword">0.15</span>)<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">return</span> invoice
            </div>
            
            <h3>نظام إدارة الفواتير</h3>
            <div class="code-block">
                <span class="code-keyword">class</span> <span class="code-class">InvoiceSystem</span>:<br>
                &nbsp;&nbsp;<span class="code-keyword">def</span> <span class="code-function">__init__</span>(<span class="code-keyword">self</span>):<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">self</span>.products = []<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">self</span>.customers = []<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">self</span>.invoices = []<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">self</span>.load_data()<br>
                <br>
                &nbsp;&nbsp;<span class="code-keyword">def</span> <span class="code-function">load_data</span>(<span class="code-keyword">self</span>):<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-comment"># تحميل المنتجات</span><br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">try</span>:<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">if</span> os.path.exists(<span class="code-string">"products.json"</span>):<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">with</span> <span class="code-keyword">open</span>(<span class="code-string">"products.json"</span>, <span class="code-string">"r"</span>) <span class="code-keyword">as</span> f:<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;data = json.load(f)<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">self</span>.products = [Product.from_dict(p) <span class="code-keyword">for</span> p <span class="code-keyword">in</span> data]<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">except</span> Exception <span class="code-keyword">as</span> e:<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">print</span>(<span class="code-string">f"خطأ في تحميل المنتجات: <span class="code-keyword">{e}</span>"</span>)<br>
                <br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-comment"># تحميل العملاء</span><br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">try</span>:<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">if</span> os.path.exists(<span class="code-string">"customers.json"</span>):<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">with</span> <span class="code-keyword">open</span>(<span class="code-string">"customers.json"</span>, <span class="code-string">"r"</span>) <span class="code-keyword">as</span> f:<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;data = json.load(f)<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">self</span>.customers = [Customer.from_dict(c) <span class="code-keyword">for</span> c <span class="code-keyword">in</span> data]<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">except</span> Exception <span class="code-keyword">as</span> e:<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">print</span>(<span class="code-string">f"خطأ في تحميل العملاء: <span class="code-keyword">{e}</span>"</span>)<br>
                <br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-comment"># تحميل الفواتير</span><br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">try</span>:<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">if</span> os.path.exists(<span class="code-string">"invoices.json"</span>):<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">with</span> <span class="code-keyword">open</span>(<span class="code-string">"invoices.json"</span>, <span class="code-string">"r"</span>) <span class="code-keyword">as</span> f:<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;data = json.load(f)<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">self</span>.invoices = [Invoice.from_dict(i) <span class="code-keyword">for</span> i <span class="code-keyword">in</span> data]<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">except</span> Exception <span class="code-keyword">as</span> e:<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">print</span>(<span class="code-string">f"خطأ في تحميل الفواتير: <span class="code-keyword">{e}</span>"</span>)<br>
                <br>
                &nbsp;&nbsp;<span class="code-keyword">def</span> <span class="code-function">save_data</span>(<span class="code-keyword">self</span>):<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-comment"># حفظ المنتجات</span><br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">try</span>:<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">with</span> <span class="code-keyword">open</span>(<span class="code-string">"products.json"</span>, <span class="code-string">"w"</span>) <span class="code-keyword">as</span> f:<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;json.dump([p.to_dict() <span class="code-keyword">for</span> p <span class="code-keyword">in</span> <span class="code-keyword">self</span>.products], f, indent=2)<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">except</span> Exception <span class="code-keyword">as</span> e:<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">print</span>(<span class="code-string">f"خطأ في حفظ المنتجات: <span class="code-keyword">{e}</span>"</span>)<br>
                <br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-comment"># حفظ العملاء</span><br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">try</span>:<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">with</span> <span class="code-keyword">open</span>(<span class="code-string">"customers.json"</span>, <span class="code-string">"w"</span>) <span class="code-keyword">as</span> f:<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;json.dump([c.to_dict() <span class="code-keyword">for</span> c <span class="code-keyword">in</span> <span class="code-keyword">self</span>.customers], f, indent=2)<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">except</span> Exception <span class="code-keyword">as</span> e:<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">print</span>(<span class="code-string">f"خطأ في حفظ العملاء: <span class="code-keyword">{e}</span>"</span>)<br>
                <br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-comment"># حفظ الفواتير</span><br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">try</span>:<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">with</span> <span class="code-keyword">open</span>(<span class="code-string">"invoices.json"</span>, <span class="code-string">"w"</span>) <span class="code-keyword">as</span> f:<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;json.dump([i.to_dict() <span class="code-keyword">for</span> i <span class="code-keyword">in</span> <span class="code-keyword">self</span>.invoices], f, indent=2)<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">except</span> Exception <span class="code-keyword">as</span> e:<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">print</span>(<span class="code-string">f"خطأ في حفظ الفواتير: <span class="code-keyword">{e}</span>"</span>)<br>
                <br>
                &nbsp;&nbsp;<span class="code-keyword">def</span> <span class="code-function">add_product</span>(<span class="code-keyword">self</span>, product):<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">self</span>.products.append(product)<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">self</span>.save_data()<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">print</span>(<span class="code-string">f"تم إضافة المنتج: <span class="code-keyword">{product.name}</span>"</span>)<br>
                <br>
                &nbsp;&nbsp;<span class="code-keyword">def</span> <span class="code-function">add_customer</span>(<span class="code-keyword">self</span>, customer):<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">self</span>.customers.append(customer)<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">self</span>.save_data()<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">print</span>(<span class="code-string">f"تم إضافة العميل: <span class="code-keyword">{customer.name}</span>"</span>)<br>
                <br>
                &nbsp;&nbsp;<span class="code-keyword">def</span> <span class="code-function">create_invoice</span>(<span class="code-keyword">self</span>, customer, items):<br>
                &nbsp;&nbsp;&nbsp;&nbsp;invoice_id = <span class="code-string">f"INV-<span class="code-keyword">{datetime.now().strftime('%Y%m%d-%H%M%S')}</span>"</span><br>
                &nbsp;&nbsp;&nbsp;&nbsp;invoice = Invoice(invoice_id, customer)<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">for</span> product, quantity <span class="code-keyword">in</span> items:<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;invoice.add_item(product, quantity)<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">self</span>.invoices.append(invoice)<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">self</span>.save_data()<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-comment"># حفظ الفاتورة كملف نصي</span><br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">try</span>:<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">with</span> <span class="code-keyword">open</span>(<span class="code-string">f"<span class="code-keyword">{invoice_id}</span>.txt"</span>, <span class="code-string">"w"</span>, encoding=<span class="code-string">"utf-8"</span>) <span class="code-keyword">as</span> f:<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;f.write(invoice.generate_invoice_text())<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">print</span>(<span class="code-string">f"تم حفظ الفاتورة في ملف: <span class="code-keyword">{invoice_id}</span>.txt"</span>)<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">except</span> Exception <span class="code-keyword">as</span> e:<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">print</span>(<span class="code-string">f"خطأ في حفظ الفاتورة: <span class="code-keyword">{e}</span>"</span>)<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">return</span> invoice<br>
                <br>
                &nbsp;&nbsp;<span class="code-keyword">def</span> <span class="code-function">display_invoices</span>(<span class="code-keyword">self</span>):<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">if</span> <span class="code-keyword">not</span> <span class="code-keyword">self</span>.invoices:<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">print</span>(<span class="code-string">"لا توجد فواتير"</span>)<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">return</span><br>
                &nbsp;&nbsp;&nbsp;&nbsp;<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">print</span>(<span class="code-string">"<span class="code-keyword">\n</span>قائمة الفواتير:<span class="code-keyword">\n</span>"</span>)<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">for</span> invoice <span class="code-keyword">in</span> <span class="code-keyword">self</span>.invoices:<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">print</span>(<span class="code-string">f"رقم الفاتورة: <span class="code-keyword">{invoice.invoice_id}</span>"</span>)<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">print</span>(<span class="code-string">f"العميل: <span class="code-keyword">{invoice.customer.name}</span>"</span>)<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">print</span>(<span class="code-string">f"التاريخ: <span class="code-keyword">{invoice.date.strftime('%Y-%m-%d')}</span>"</span>)<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">print</span>(<span class="code-string">f"الإجمالي: <span class="code-keyword">{invoice.calculate_total():.2f}</span> ريال"</span>)<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">print</span>(<span class="code-string">"-" * 30)<br>
                <br>
                &nbsp;&nbsp;<span class="code-keyword">def</span> <span class="code-function">get_invoice_by_id</span>(<span class="code-keyword">self</span>, invoice_id):<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">for</span> invoice <span class="code-keyword">in</span> <span class="code-keyword">self</span>.invoices:<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">if</span> invoice.invoice_id == invoice_id:<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">return</span> invoice<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">return</span> <span class="code-keyword">None</span>
            </div>
        </div>
        
        <!-- تجربة النظام -->
        <div id="demo" class="content-section">
            <h2>تجربة النظام مباشرة</h2>
            <p>يمكنك تجربة نظام الفواتير مباشرة من خلال هذه الواجهة التفاعلية:</p>
            
            <div class="demo-container">
                <h3>إضافة منتج جديد</h3>
                <div class="invoice-form">
                    <div class="form-row">
                        <div class="form-group">
                            <label class="form-label">اسم المنتج:</label>
                            <input type="text" id="productName" class="form-input" placeholder="أدخل اسم المنتج">
                        </div>
                        <div class="form-group">
                            <label class="form-label">سعر المنتج:</label>
                            <input type="number" id="productPrice" class="form-input" placeholder="أدخل السعر">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-label">وصف المنتج:</label>
                        <input type="text" id="productDescription" class="form-input" placeholder="أدخل وصف المنتج">
                    </div>
                    <button class="form-button" onclick="addProduct()">إضافة المنتج</button>
                </div>
                
                <h3>إضافة عميل جديد</h3>
                <div class="invoice-form">
                    <div class="form-row">
                        <div class="form-group">
                            <label class="form-label">اسم العميل:</label>
                            <input type="text" id="customerName" class="form-input" placeholder="أدخل اسم العميل">
                        </div>
                        <div class="form-group">
                            <label class="form-label">هاتف العميل:</label>
                            <input type="text" id="customerPhone" class="form-input" placeholder="أدخل رقم الهاتف">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-label">عنوان العميل:</label>
                        <input type="text" id="customerAddress" class="form-input" placeholder="أدخل العنوان">
                    </div>
                    <button class="form-button" onclick="addCustomer()">إضافة العميل</button>
                </div>
                
                <h3>إنشاء فاتورة جديدة</h3>
                <div class="invoice-form">
                    <div class="form-group">
                        <label class="form-label">اختر العميل:</label>
                        <select id="invoiceCustomer" class="form-select">
                            <option value="">اختر عميل</option>
                        </select>
                    </div>
                    
                    <h4>إضافة منتجات للفاتورة</h4>
                    <div class="form-row">
                        <div class="form-group">
                            <label class="form-label">المنتج:</label>
                            <select id="invoiceProduct" class="form-select">
                                <option value="">اختر منتج</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label class="form-label">الكمية:</label>
                            <input type="number" id="productQuantity" class="form-input" value="1" min="1">
                        </div>
                    </div>
                    <button class="form-button secondary" onclick="addProductToInvoice()">إضافة للمفاتورة</button>
                    
                    <h4>المنتجات المضافة</h4>
                    <table class="items-table" id="invoiceItemsTable">
                        <thead>
                            <tr>
                                <th>المنتج</th>
                                <th>الكمية</th>
                                <th>السعر</th>
                                <th>الإجمالي</th>
                                <th>إجراءات</th>
                            </tr>
                        </thead>
                        <tbody id="invoiceItemsBody">
                        </tbody>
                    </table>
                    
                    <button class="form-button" onclick="createInvoice()">إنشاء الفاتورة</button>
                </div>
                
                <h3>معاينة الفاتورة</h3>
                <div class="demo-controls">
                    <button class="demo-button" onclick="displayInvoices()">عرض الفواتير</button>
                    <button class="demo-button" onclick="clearOutput()">مسح النتائج</button>
                </div>
                
                <div id="demoOutput" class="demo-output">
                    👈 إبدأ بإضافة منتجات وعملاء ثم إنشاء فاتورة
                </div>
                
                <div id="invoicesList" class="invoice-list">
                    <!-- سيتم عرض الفواتير هنا -->
                </div>
            </div>
        </div>
        
        <!-- شرح المشروع -->
        <div id="explanation" class="content-section">
            <h2>شرح مفصل للمشروع</h2>
            
            <h3>هيكل المشروع</h3>
            <p>يتكون المشروع من أربعة مكونات رئيسية:</p>
            <ol>
                <li><strong>كلاس Product</strong>: يمثل المنتج أو الخدمة</li>
                <li><strong>كلاس Customer</strong>: يمثل العميل</li>
                <li><strong>كلاس InvoiceItem</strong>: يمثل عنصر في الفاتورة</li>
                <li><strong>كلاس Invoice</strong>: يمثل الفاتورة الكاملة</li>
                <li><strong>كلاس InvoiceSystem</strong>: يدعم النظام بأكمله</li>
            </ol>
            
            <h3>شرح الكلاسات</h3>
            
            <h4>١. كلاس Product</h4>
            <ul>
                <li><code>product_id</code>: معرف فريد للمنتج</li>
                <li><code>name</code>: اسم المنتج</li>
                <li><code>price</code>: سعر المنتج</li>
                <li><code>description</code>: وصف المنتج</li>
            </ul>
            
            <h4>٢. كلاس Customer</h4>
            <ul>
                <li><code>customer_id</code>: معرف فريد للعميل</li>
                <li><code>name</code>: اسم العميل</li>
                <li><code>phone</code>: هاتف العميل</li>
                <li><code>address</code>: عنوان العميل</li>
            </ul>
            
            <h4>٣. كلاس Invoice</h4>
            <ul>
                <li><code>invoice_id</code>: معرف فريد للفاتورة</li>
                <li><code>customer</code>: العميل المالك للفاتورة</li>
                <li><code>date</code>: تاريخ إنشاء الفاتورة</li>
                <li><code>items</code>: قائمة العناصر في الفاتورة</li>
                <li><code>tax_rate</code>: نسبة الضريبة</li>
            </ul>
            
            <h3>وظائف النظام الرئيسية</h3>
            
            <h4>١. إدارة المنتجات</h4>
            <p>إضافة وعرض وتعديل المنتجات المتاحة للبيع</p>
            
            <h4>٢. إدارة العملاء</h4>
            <p>تخزين معلومات العملاء للفواتير المستقبلية</p>
            
            <h4>٣. إنشاء الفواتير</h4>
            <p>إنشاء فواتير جديدة مع حساب تلقائي للمجاميع والضرائب</p>
            
            <h4>٤. حفظ البيانات</h4>
            <p>حفظ جميع البيانات في ملفات JSON ونصية</p>
            
            <h3>نظام الملفات</h3>
            <ul>
                <li><code>products.json</code>: تخزين بيانات المنتجات</li>
                <li><code>customers.json</code>: تخزين بيانات العملاء</li>
                <li><code>invoices.json</code>: تخزين بيانات الفواتير</li>
                <li><code>INV-YYYYMMDD-HHMMSS.txt</code>: ملفات الفواتير النصية</li>
            </ul>
            
            <h3>مثال على استخدام النظام</h3>
            <div class="code-block">
                <span class="code-comment"># إنشاء النظام</span><br>
                system = InvoiceSystem()<br>
                <br>
                <span class="code-comment"># إضافة منتج</span><br>
                product = Product(<span class="code-string">"P001"</span>, <span class="code-string">"لابتوب"</span>, 2500, <span class="code-string">"لابتوب gaming"</span>)<br>
                system.add_product(product)<br>
                <br>
                <span class="code-comment"># إضافة عميل</span><br>
                customer = Customer(<span class="code-string">"C001"</span>, <span class="code-string">"أحمد محمد"</span>, <span class="code-string">"0551234567"</span>)<br>
                system.add_customer(customer)<br>
                <br>
                <span class="code-comment"># إنشاء فاتورة</span><br>
                items = [(product, 2)]  <span class="code-comment"># 2 لابتوب</span><br>
                invoice = system.create_invoice(customer, items)<br>
                <br>
                <span class="code-comment"># عرض الفاتورة</span><br>
                <span class="code-keyword">print</span>(invoice.generate_invoice_text())
            </div>
            
            <h3>مميزات النظام</h3>
            <ul>
                <li>✅ بسيط وسهل الاستخدام</li>
                <li>✅ لا يحتاج لقاعدة بيانات</li>
                <li>✅ يحفظ البيانات تلقائياً</li>
                <li>✅ ينشئ فواتير نصية يمكن طباعتها</li>
                <li>✅ يحسب المجاميع والضرائب تلقائياً</li>
                <li>✅ مناسب للمحلات الصغيرة</li>
            </ul>
            
            <h3>إمكانيات التطوير</h3>
            <ul>
                <li>إضافة واجهة رسومية باستخدام Tkinter</li>
                <li>دعم الفواتير متعددة اللغات</li>
                <li>إضافة نظام خصومات</li>
                <li>تقارير المبيعات والإحصائيات</li>
                <li>نسخ احتياطي للبيانات</li>
            </ul>
        </div>
    </div>
    
    <footer>
        <div class="container">
            <p>مشروع نظام الفواتير النصي البسيط - تطبيق عملي لتعلم Python</p>
            <p>يمكنك استخدام وتطوير هذا المشروع بحرية لأغراض التعليم</p>
        </div>
    </footer>

    <script>
        // محاكاة نظام الفواتير باستخدام JavaScript
        class Product {
            constructor(productId, name, price, description = "") {
                this.productId = productId;
                this.name = name;
                this.price = price;
                this.description = description;
            }
            
            toString() {
                return `${this.name} - ${this.price} ريال`;
            }
        }

        class Customer {
            constructor(customerId, name, phone = "", address = "") {
                this.customerId = customerId;
                this.name = name;
                this.phone = phone;
                this.address = address;
            }
            
            toString() {
                return `${this.name} - ${this.phone}`;
            }
        }

        class InvoiceItem {
            constructor(product, quantity) {
                this.product = product;
                this.quantity = quantity;
                this.total = product.price * quantity;
            }
        }

        class Invoice {
            constructor(invoiceId, customer, date = null) {
                this.invoiceId = invoiceId;
                this.customer = customer;
                this.date = date || new Date();
                this.items = [];
                this.taxRate = 0.15; // 15% ضريبة
            }
            
            addItem(product, quantity) {
                const item = new InvoiceItem(product, quantity);
                this.items.push(item);
            }
            
            calculateSubtotal() {
                return this.items.reduce((sum, item) => sum + item.total, 0);
            }
            
            calculateTax() {
                return this.calculateSubtotal() * this.taxRate;
            }
            
            calculateTotal() {
                return this.calculateSubtotal() + this.calculateTax();
            }
            
            generateInvoiceText() {
                let invoiceText = "";
                invoiceText += "=".repeat(50) + "\n";
                invoiceText += "\t\t\tفاتورة بيع\n";
                invoiceText += "=".repeat(50) + "\n";
                invoiceText += `رقم الفاتورة: ${this.invoiceId}\n`;
                invoiceText += `التاريخ: ${this.date.toLocaleString('ar-EG')}\n`;
                invoiceText += `العميل: ${this.customer.name}\n`;
                invoiceText += `الهاتف: ${this.customer.phone}\n`;
                invoiceText += "-".repeat(50) + "\n";
                invoiceText += "المنتجات:\n";
                invoiceText += "-".repeat(50) + "\n";
                
                for (let i = 0; i < this.items.length; i++) {
                    const item = this.items[i];
                    invoiceText += `${i + 1}. ${item.product.name}\n`;
                    invoiceText += `   الكمية: ${item.quantity} - السعر: ${item.product.price} - الإجمالي: ${item.total}\n`;
                }
                
                invoiceText += "-".repeat(50) + "\n";
                invoiceText += `المجموع: ${this.calculateSubtotal().toFixed(2)} ريال\n`;
                invoiceText += `الضريبة (${this.taxRate * 100}%): ${this.calculateTax().toFixed(2)} ريال\n`;
                invoiceText += `الإجمالي النهائي: ${this.calculateTotal().toFixed(2)} ريال\n`;
                invoiceText += "=".repeat(50) + "\n";
                invoiceText += "شكراً لتعاملكم معنا\n";
                invoiceText += "=".repeat(50) + "\n";
                
                return invoiceText;
            }
        }

        class InvoiceSystem {
            constructor() {
                this.products = JSON.parse(localStorage.getItem('products')) || [];
                this.customers = JSON.parse(localStorage.getItem('customers')) || [];
                this.invoices = JSON.parse(localStorage.getItem('invoices')) || [];
                this.currentInvoiceItems = [];
            }
            
            saveData() {
                localStorage.setItem('products', JSON.stringify(this.products));
                localStorage.setItem('customers', JSON.stringify(this.customers));
                localStorage.setItem('invoices', JSON.stringify(this.invoices));
            }
            
            addProduct(product) {
                this.products.push(product);
                this.saveData();
                return `تم إضافة المنتج: ${product.name}`;
            }
            
            addCustomer(customer) {
                this.customers.push(customer);
                this.saveData();
                return `تم إضافة العميل: ${customer.name}`;
            }
            
            createInvoice(customer, items) {
                const invoiceId = `INV-${Date.now()}`;
                const invoice = new Invoice(invoiceId, customer);
                
                items.forEach(([product, quantity]) => {
                    invoice.addItem(product, quantity);
                });
                
                this.invoices.push(invoice);
                this.saveData();
                this.currentInvoiceItems = [];
                
                return invoice;
            }
            
            displayInvoices() {
                if (this.invoices.length === 0) {
                    return "لا توجد فواتير";
                }
                
                let result = "قائمة الفواتير:\n\n";
                this.invoices.forEach(invoice => {
                    result += `رقم الفاتورة: ${invoice.invoiceId}\n`;
                    result += `العميل: ${invoice.customer.name}\n`;
                    result += `التاريخ: ${invoice.date.toLocaleDateString('ar-EG')}\n`;
                    result += `الإجمالي: ${invoice.calculateTotal().toFixed(2)} ريال\n`;
                    result += "-".repeat(30) + "\n";
                });
                
                return result;
            }
        }

        // إنشاء نظام الفواتير
        const invoiceSystem = new InvoiceSystem();

        // وظائف الواجهة
        function generateId(prefix) {
            return `${prefix}-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`;
        }

        function addProduct() {
            const name = document.getElementById('productName').value;
            const price = parseFloat(document.getElementById('productPrice').value);
            const description = document.getElementById('productDescription').value;
            
            if (!name || !price) {
                alert('يرجى إدخال اسم المنتج وسعره');
                return;
            }
            
            const productId = generateId('PROD');
            const product = new Product(productId, name, price, description);
            const result = invoiceSystem.addProduct(product);
            
            document.getElementById('demoOutput').textContent = result;
            updateProductSelect();
            clearProductForm();
        }

        function addCustomer() {
            const name = document.getElementById('customerName').value;
            const phone = document.getElementById('customerPhone').value;
            const address = document.getElementById('customerAddress').value;
            
            if (!name) {
                alert('يرجى إدخال اسم العميل');
                return;
            }
            
            const customerId = generateId('CUST');
            const customer = new Customer(customerId, name, phone, address);
            const result = invoiceSystem.addCustomer(customer);
            
            document.getElementById('demoOutput').textContent = result;
            updateCustomerSelect();
            clearCustomerForm();
        }

        function addProductToInvoice() {
            const productSelect = document.getElementById('invoiceProduct');
            const quantityInput = document.getElementById('productQuantity');
            
            const productIndex = productSelect.selectedIndex;
            const quantity = parseInt(quantityInput.value);
            
            if (productIndex === 0 || !quantity || quantity < 1) {
                alert('يرجى اختيار منتج وكمية صحيحة');
                return;
            }
            
            const product = invoiceSystem.products[productIndex - 1];
            invoiceSystem.currentInvoiceItems.push([product, quantity]);
            
            updateInvoiceItemsTable();
            quantityInput.value = 1;
        }

        function createInvoice() {
            const customerSelect = document.getElementById('invoiceCustomer');
            const customerIndex = customerSelect.selectedIndex;
            
            if (customerIndex === 0) {
                alert('يرجى اختيار عميل');
                return;
            }
            
            if (invoiceSystem.currentInvoiceItems.length === 0) {
                alert('يرجى إضافة منتجات للفاتورة');
                return;
            }
            
            const customer = invoiceSystem.customers[customerIndex - 1];
            const invoice = invoiceSystem.createInvoice(customer, invoiceSystem.currentInvoiceItems);
            
            document.getElementById('demoOutput').textContent = invoice.generateInvoiceText();
            displayInvoicesList();
        }

        function displayInvoices() {
            const result = invoiceSystem.displayInvoices();
            document.getElementById('demoOutput').textContent = result;
            displayInvoicesList();
        }

        function displayInvoicesList() {
            const invoicesList = document.getElementById('invoicesList');
            invoicesList.innerHTML = '';
            
            invoiceSystem.invoices.forEach(invoice => {
                const invoiceElement = document.createElement('div');
                invoiceElement.className = 'invoice-item';
                invoiceElement.innerHTML = `
                    <div>
                        <strong>${invoice.invoiceId}</strong>
                        <div>العميل: ${invoice.customer.name}</div>
                        <div class="invoice-meta">
                            <span>التاريخ: ${invoice.date.toLocaleDateString('ar-EG')}</span>
                            <span>الإجمالي: ${invoice.calculateTotal().toFixed(2)} ريال</span>
                        </div>
                    </div>
                `;
                invoiceElement.onclick = () => {
                    document.getElementById('demoOutput').textContent = invoice.generateInvoiceText();
                };
                invoicesList.appendChild(invoiceElement);
            });
        }

        function updateInvoiceItemsTable() {
            const tbody = document.getElementById('invoiceItemsBody');
            tbody.innerHTML = '';
            
            invoiceSystem.currentInvoiceItems.forEach(([product, quantity], index) => {
                const total = product.price * quantity;
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${product.name}</td>
                    <td>${quantity}</td>
                    <td>${product.price} ريال</td>
                    <td>${total} ريال</td>
                    <td>
                        <button class="action-button delete-button" onclick="removeInvoiceItem(${index})">حذف</button>
                    </td>
                `;
                tbody.appendChild(row);
            });
        }

        function removeInvoiceItem(index) {
            invoiceSystem.currentInvoiceItems.splice(index, 1);
            updateInvoiceItemsTable();
        }

        function updateProductSelect() {
            const select = document.getElementById('invoiceProduct');
            select.innerHTML = '<option value="">اختر منتج</option>';
            
            invoiceSystem.products.forEach(product => {
                const option = document.createElement('option');
                option.textContent = `${product.name} - ${product.price} ريال`;
                select.appendChild(option);
            });
        }

        function updateCustomerSelect() {
            const select = document.getElementById('invoiceCustomer');
            select.innerHTML = '<option value="">اختر عميل</option>';
            
            invoiceSystem.customers.forEach(customer => {
                const option = document.createElement('option');
                option.textContent = `${customer.name} - ${customer.phone}`;
                select.appendChild(option);
            });
        }

        function clearProductForm() {
            document.getElementById('productName').value = '';
            document.getElementById('productPrice').value = '';
            document.getElementById('productDescription').value = '';
        }

        function clearCustomerForm() {
            document.getElementById('customerName').value = '';
            document.getElementById('customerPhone').value = '';
            document.getElementById('customerAddress').value = '';
        }

        function clearOutput() {
            document.getElementById('demoOutput').textContent = '👈 إبدأ بإضافة منتجات وعملاء ثم إنشاء فاتورة';
        }

        // تهيئة العرض
        document.addEventListener('DOMContentLoaded', () => {
            updateProductSelect();
            updateCustomerSelect();
            displayInvoicesList();
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