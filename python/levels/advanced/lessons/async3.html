<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>سكريبتات متعددة المهام - البرمجة غير المتزامنة في Python</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;500;700;800&display=swap" rel="stylesheet">
    <style>
        :root {
            --primary: #6366f1;
            --primary-dark: #4f46e5;
            --primary-light: #8b5cf6;
            --secondary: #06d6a0;
            --accent: #f59e0b;
            --dark: #1e1b4b;
            --darker: #0f172a;
            --light: #f8fafc;
            --gray: #64748b;
            --gray-light: #e2e8f0;
            --gradient: linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #06d6a0 100%);
            --gradient-dark: linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%);
        }
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Tajawal', sans-serif;
        }
        
        html {
            scroll-behavior: smooth;
        }
        
        body {
            background: var(--darker);
            color: var(--light);
            line-height: 1.8;
            overflow-x: hidden;
        }
        
        .container {
            width: 90%;
            max-width: 1400px;
            margin: 0 auto;
            padding: 20px;
        }
        
        /* Header Styles */
        header {
            background: var(--gradient-dark);
            padding: 2rem 0;
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
            background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none"><path d="M0,0 L100,0 L100,100 Z" fill="rgba(99,102,241,0.1)"/></svg>');
            background-size: cover;
        }
        
        .header-content {
            position: relative;
            z-index: 2;
            text-align: center;
            padding: 3rem 0;
        }
        
        .logo {
            font-size: 2.5rem;
            font-weight: 800;
            background: var(--gradient);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            margin-bottom: 1rem;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 15px;
        }
        
        .logo i {
            font-size: 3rem;
        }
        
        .tagline {
            font-size: 1.3rem;
            color: var(--gray-light);
            max-width: 700px;
            margin: 0 auto 2rem;
        }
        
        .header-stats {
            display: flex;
            justify-content: center;
            gap: 3rem;
            margin-top: 2rem;
            flex-wrap: wrap;
        }
        
        .stat {
            text-align: center;
        }
        
        .stat-number {
            font-size: 2.5rem;
            font-weight: 700;
            background: var(--gradient);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        
        .stat-label {
            font-size: 1rem;
            color: var(--gray-light);
        }
        
        /* Navigation */
        nav {
            background: rgba(30, 27, 75, 0.95);
            backdrop-filter: blur(10px);
            padding: 1.2rem 0;
            position: sticky;
            top: 0;
            z-index: 1000;
            border-bottom: 1px solid rgba(99, 102, 241, 0.2);
        }
        
        .nav-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .nav-logo {
            font-size: 1.5rem;
            font-weight: 700;
            color: var(--light);
            display: flex;
            align-items: center;
            gap: 10px;
        }
        
        .nav-menu {
            display: flex;
            list-style: none;
            gap: 2rem;
        }
        
        .nav-menu a {
            text-decoration: none;
            color: var(--light);
            font-weight: 500;
            padding: 0.5rem 1rem;
            border-radius: 8px;
            transition: all 0.3s ease;
            position: relative;
        }
        
        .nav-menu a:hover {
            background: rgba(99, 102, 241, 0.2);
            color: var(--primary-light);
        }
        
        .nav-menu a::after {
            content: '';
            position: absolute;
            bottom: -5px;
            right: 1rem;
            width: 0;
            height: 2px;
            background: var(--gradient);
            transition: width 0.3s ease;
        }
        
        .nav-menu a:hover::after {
            width: calc(100% - 2rem);
        }
        
        /* Hero Section */
        .hero {
            background: var(--gradient-dark);
            padding: 5rem 0;
            position: relative;
            overflow: hidden;
        }
        
        .hero::before {
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            width: 100%;
            height: 100%;
            background: radial-gradient(circle at 30% 50%, rgba(99, 102, 241, 0.1) 0%, transparent 50%);
        }
        
        .hero-content {
            position: relative;
            z-index: 2;
            text-align: center;
            max-width: 900px;
            margin: 0 auto;
        }
        
        .hero-title {
            font-size: 3.5rem;
            font-weight: 800;
            margin-bottom: 1.5rem;
            background: linear-gradient(135deg, #fff 0%, #a5b4fc 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        
        .hero-subtitle {
            font-size: 1.3rem;
            color: var(--gray-light);
            margin-bottom: 2.5rem;
            line-height: 1.6;
        }
        
        .hero-buttons {
            display: flex;
            gap: 1.5rem;
            justify-content: center;
            flex-wrap: wrap;
        }
        
        .btn {
            padding: 1rem 2rem;
            border-radius: 12px;
            font-weight: 600;
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            gap: 10px;
            transition: all 0.3s ease;
            font-size: 1.1rem;
        }
        
        .btn-primary {
            background: var(--gradient);
            color: white;
            box-shadow: 0 10px 25px rgba(99, 102, 241, 0.3);
        }
        
        .btn-primary:hover {
            transform: translateY(-3px);
            box-shadow: 0 15px 35px rgba(99, 102, 241, 0.4);
        }
        
        .btn-secondary {
            background: rgba(255, 255, 255, 0.1);
            color: white;
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .btn-secondary:hover {
            background: rgba(255, 255, 255, 0.2);
            transform: translateY(-3px);
        }
        
        /* Main Content */
        .main-content {
            padding: 5rem 0;
        }
        
        .section-title {
            text-align: center;
            font-size: 2.5rem;
            font-weight: 700;
            margin-bottom: 3rem;
            background: linear-gradient(135deg, #fff 0%, #a5b4fc 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            position: relative;
        }
        
        .section-title::after {
            content: '';
            position: absolute;
            bottom: -10px;
            right: 50%;
            transform: translateX(50%);
            width: 100px;
            height: 4px;
            background: var(--gradient);
            border-radius: 2px;
        }
        
        .cards-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 2rem;
            margin-bottom: 4rem;
        }
        
        .card {
            background: rgba(30, 27, 75, 0.7);
            border-radius: 20px;
            padding: 2.5rem;
            backdrop-filter: blur(10px);
            border: 1px solid rgba(99, 102, 241, 0.2);
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
        }
        
        .card::before {
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, transparent 50%);
            opacity: 0;
            transition: opacity 0.3s ease;
        }
        
        .card:hover {
            transform: translateY(-10px);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
            border-color: rgba(99, 102, 241, 0.4);
        }
        
        .card:hover::before {
            opacity: 1;
        }
        
        .card-icon {
            width: 70px;
            height: 70px;
            background: var(--gradient);
            border-radius: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 1.5rem;
            font-size: 1.8rem;
        }
        
        .card-title {
            font-size: 1.5rem;
            font-weight: 700;
            margin-bottom: 1rem;
            color: white;
        }
        
        .card-description {
            color: var(--gray-light);
            margin-bottom: 1.5rem;
        }
        
        .card-features {
            list-style: none;
            margin-bottom: 2rem;
        }
        
        .card-features li {
            margin-bottom: 0.8rem;
            display: flex;
            align-items: center;
            gap: 10px;
        }
        
        .card-features li i {
            color: var(--secondary);
        }
        
        /* Code Blocks */
        .code-section {
            background: rgba(15, 23, 42, 0.9);
            border-radius: 20px;
            padding: 2.5rem;
            margin: 3rem 0;
            border: 1px solid rgba(99, 102, 241, 0.2);
            position: relative;
            overflow: hidden;
        }
        
        .code-section::before {
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            width: 100%;
            height: 100%;
            background: radial-gradient(circle at 70% 30%, rgba(99, 102, 241, 0.1) 0%, transparent 50%);
        }
        
        .code-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1.5rem;
            position: relative;
            z-index: 2;
        }
        
        .code-title {
            font-size: 1.3rem;
            font-weight: 600;
            color: white;
        }
        
        .code-actions {
            display: flex;
            gap: 10px;
        }
        
        .code-btn {
            background: rgba(255, 255, 255, 0.1);
            border: none;
            color: white;
            padding: 0.5rem 1rem;
            border-radius: 8px;
            cursor: pointer;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            gap: 5px;
        }
        
        .code-btn:hover {
            background: rgba(255, 255, 255, 0.2);
        }
        
        .code-block {
            background: #0f172a;
            border-radius: 12px;
            padding: 1.5rem;
            overflow-x: auto;
            font-family: 'Consolas', 'Monaco', monospace;
            direction: ltr;
            position: relative;
            z-index: 2;
            border: 1px solid rgba(99, 102, 241, 0.2);
        }
        
        .code-line {
            margin-bottom: 0.5rem;
            display: flex;
        }
        
        .code-line-number {
            color: var(--gray);
            min-width: 40px;
            text-align: right;
            padding-right: 1rem;
            user-select: none;
        }
        
        .code-content {
            flex: 1;
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
        
        /* Demo Section */
        .demo-section {
            background: var(--gradient-dark);
            padding: 5rem 0;
            margin: 5rem 0;
            position: relative;
            overflow: hidden;
        }
        
        .demo-section::before {
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            width: 100%;
            height: 100%;
            background: radial-gradient(circle at 70% 20%, rgba(99, 102, 241, 0.1) 0%, transparent 50%);
        }
        
        .demo-container {
            position: relative;
            z-index: 2;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 3rem;
            align-items: center;
        }
        
        .demo-content h3 {
            font-size: 2rem;
            margin-bottom: 1.5rem;
            background: linear-gradient(135deg, #fff 0%, #a5b4fc 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        
        .demo-content p {
            color: var(--gray-light);
            margin-bottom: 2rem;
        }
        
        .demo-visual {
            background: rgba(30, 27, 75, 0.7);
            border-radius: 20px;
            padding: 2rem;
            backdrop-filter: blur(10px);
            border: 1px solid rgba(99, 102, 241, 0.2);
            position: relative;
            overflow: hidden;
        }
        
        .demo-visual::before {
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, transparent 50%);
        }
        
        .task-visualization {
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }
        
        .task-bar {
            background: rgba(15, 23, 42, 0.8);
            border-radius: 10px;
            padding: 1rem;
            display: flex;
            align-items: center;
            gap: 1rem;
            border: 1px solid rgba(99, 102, 241, 0.2);
            transition: all 0.3s ease;
        }
        
        .task-bar:hover {
            transform: translateX(-10px);
            border-color: rgba(99, 102, 241, 0.5);
        }
        
        .task-icon {
            width: 40px;
            height: 40px;
            background: var(--gradient);
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .task-info {
            flex: 1;
        }
        
        .task-name {
            font-weight: 600;
            margin-bottom: 0.3rem;
        }
        
        .task-status {
            font-size: 0.9rem;
            color: var(--gray);
        }
        
        .task-progress {
            width: 100px;
            height: 6px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 3px;
            overflow: hidden;
        }
        
        .task-progress-bar {
            height: 100%;
            background: var(--gradient);
            border-radius: 3px;
            width: 0%;
            transition: width 2s ease;
        }
        
        /* Footer */
        footer {
            background: var(--darker);
            padding: 4rem 0 2rem;
            border-top: 1px solid rgba(99, 102, 241, 0.2);
        }
        
        .footer-content {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 3rem;
            margin-bottom: 3rem;
        }
        
        .footer-column h3 {
            color: white;
            margin-bottom: 1.5rem;
            font-size: 1.3rem;
            position: relative;
            display: inline-block;
        }
        
        .footer-column h3::after {
            content: '';
            position: absolute;
            bottom: -5px;
            right: 0;
            width: 50%;
            height: 2px;
            background: var(--gradient);
        }
        
        .footer-column ul {
            list-style: none;
        }
        
        .footer-column li {
            margin-bottom: 1rem;
        }
        
        .footer-column a {
            color: var(--gray-light);
            text-decoration: none;
            transition: color 0.3s ease;
            display: flex;
            align-items: center;
            gap: 10px;
        }
        
        .footer-column a:hover {
            color: var(--primary-light);
        }
        
        .footer-bottom {
            text-align: center;
            padding-top: 2rem;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            color: var(--gray);
        }
        
        /* Animations */
        @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
        }
        
        .floating {
            animation: float 5s ease-in-out infinite;
        }
        
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .fade-in-up {
            animation: fadeInUp 0.8s ease forwards;
        }
        
        /* Responsive */
        @media (max-width: 992px) {
            .demo-container {
                grid-template-columns: 1fr;
            }
            
            .hero-title {
                font-size: 2.8rem;
            }
            
            .nav-menu {
                display: none;
            }
        }
        
        @media (max-width: 768px) {
            .cards-grid {
                grid-template-columns: 1fr;
            }
            
            .hero-title {
                font-size: 2.2rem;
            }
            
            .section-title {
                font-size: 2rem;
            }
            
            .header-stats {
                gap: 1.5rem;
            }
        }
        
        /* Scrollbar */
        ::-webkit-scrollbar {
            width: 10px;
        }
        
        ::-webkit-scrollbar-track {
            background: var(--darker);
        }
        
        ::-webkit-scrollbar-thumb {
            background: var(--gradient);
            border-radius: 10px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
            background: var(--primary-dark);
        }
    </style>
</head>
<body>
    <!-- Header -->
    <header>
        <div class="container">
            <div class="header-content">
                <div class="logo">
                    <i class="fas fa-layer-group"></i>
                    <span>سكريبتات متعددة المهام</span>
                </div>
                <p class="tagline">إتقان بناء تطبيقات Python غير المتزامنة عالية الأداء باستخدام تقنيات متعددة المهام المتقدمة</p>
                
                <div class="header-stats">
                    <div class="stat">
                        <div class="stat-number">10x</div>
                        <div class="stat-label">تحسين الأداء</div>
                    </div>
                    <div class="stat">
                        <div class="stat-number">95%</div>
                        <div class="stat-label">كفاءة الموارد</div>
                    </div>
                    <div class="stat">
                        <div class="stat-number">∞</div>
                        <div class="stat-label">قابلية التوسع</div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    
    <!-- Navigation -->
    <nav>
        <div class="container nav-container">
            <div class="nav-logo">
                <i class="fas fa-bolt"></i>
                <span>MultiTaskScripts</span>
            </div>
            <ul class="nav-menu">
                <li><a href="#concepts"><i class="fas fa-lightbulb"></i> المفاهيم</a></li>
                <li><a href="#scripts"><i class="fas fa-code"></i> السكريبتات</a></li>
                <li><a href="#patterns"><i class="fas fa-shapes"></i> الأنماط</a></li>
                <li><a href="#demo"><i class="fas fa-play-circle"></i> التجربة</a></li>
                <li><a href="#resources"><i class="fas fa-download"></i> المصادر</a></li>
            </ul>
        </div>
    </nav>
    
    <!-- Hero Section -->
    <section class="hero">
        <div class="container">
            <div class="hero-content">
                <h1 class="hero-title fade-in-up">بناء سكريبتات Python متعددة المهام</h1>
                <p class="hero-subtitle fade-in-up">استكشف قوة البرمجة غير المتزامنة في Python لبناء تطبيقات عالية الأداء يمكنها معالجة مهام متعددة في وقت واحد مع الحفاظ على كفاءة الموارد.</p>
                <div class="hero-buttons fade-in-up">
                    <a href="#scripts" class="btn btn-primary">
                        <i class="fas fa-play"></i>
                        ابدأ بالتجربة
                    </a>
                    <a href="#concepts" class="btn btn-secondary">
                        <i class="fas fa-book"></i>
                        تعلم المفاهيم
                    </a>
                </div>
            </div>
        </div>
    </section>
    
    <!-- Main Content -->
    <div class="main-content">
        <div class="container">
            <!-- Concepts Section -->
            <section id="concepts" class="concepts-section">
                <h2 class="section-title">المفاهيم الأساسية</h2>
                
                <div class="cards-grid">
                    <div class="card fade-in-up">
                        <div class="card-icon">
                            <i class="fas fa-tasks"></i>
                        </div>
                        <h3 class="card-title">المهام غير المتزامنة</h3>
                        <p class="card-description">فهم كيفية إنشاء وإدارة المهام غير المتزامنة باستخدام asyncio.create_task()</p>
                        <ul class="card-features">
                            <li><i class="fas fa-check"></i> إنشاء مهام متعددة</li>
                            <li><i class="fas fa-check"></i> إدارة حالات المهام</li>
                            <li><i class="fas fa-check"></i> تتبع التقدم</li>
                        </ul>
                    </div>
                    
                    <div class="card fade-in-up">
                        <div class="card-icon">
                            <i class="fas fa-sync-alt"></i>
                        </div>
                        <h3 class="card-title">التشغيل المتزامن</h3>
                        <p class="card-description">إتقان استخدام asyncio.gather() لتنفيذ مهام متعددة بشكل متزامن</p>
                        <ul class="card-features">
                            <li><i class="fas fa-check"></i> تنفيذ متزامن للمهام</li>
                            <li><i class="fas fa-check"></i> جمع النتائج</li>
                            <li><i class="fas fa-check"></i> معالجة الأخطاء</li>
                        </ul>
                    </div>
                    
                    <div class="card fade-in-up">
                        <div class="card-icon">
                            <i class="fas fa-stream"></i>
                        </div>
                        <h3 class="card-title">أنماط متقدمة</h3>
                        <p class="card-description">استكشاف أنماط متقدمة مثل المنتجين-المستهلكين والبرمجة التفاعلية</p>
                        <ul class="card-features">
                            <li><i class="fas fa-check"></i> نمط Producer-Consumer</li>
                            <li><i class="fas fa-check"></i> البرمجة التفاعلية</li>
                            <li><i class="fas fa-check"></i> معالجة تدفقات البيانات</li>
                        </ul>
                    </div>
                </div>
            </section>
            
            <!-- Scripts Section -->
            <section id="scripts" class="scripts-section">
                <h2 class="section-title">سكريبتات متعددة المهام</h2>
                
                <div class="code-section fade-in-up">
                    <div class="code-header">
                        <h3 class="code-title">سكريبت جلب البيانات المتعدد</h3>
                        <div class="code-actions">
                            <button class="code-btn">
                                <i class="fas fa-copy"></i>
                                نسخ
                            </button>
                            <button class="code-btn">
                                <i class="fas fa-play"></i>
                                تشغيل
                            </button>
                        </div>
                    </div>
                    <div class="code-block">
                        <div class="code-line">
                            <span class="code-line-number">1</span>
                            <span class="code-content"><span class="code-keyword">import</span> asyncio</span>
                        </div>
                        <div class="code-line">
                            <span class="code-line-number">2</span>
                            <span class="code-content"><span class="code-keyword">import</span> aiohttp</span>
                        </div>
                        <div class="code-line">
                            <span class="code-line-number">3</span>
                            <span class="code-content"><span class="code-keyword">import</span> time</span>
                        </div>
                        <div class="code-line">
                            <span class="code-line-number">4</span>
                            <span class="code-content"></span>
                        </div>
                        <div class="code-line">
                            <span class="code-line-number">5</span>
                            <span class="code-content"><span class="code-keyword">async</span> <span class="code-keyword">def</span> <span class="code-function">fetch_data</span>(session, url, task_id):</span>
                        </div>
                        <div class="code-line">
                            <span class="code-line-number">6</span>
                            <span class="code-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">print</span>(<span class="code-string">f"بدء المهمة {task_id}"</span>)</span>
                        </div>
                        <div class="code-line">
                            <span class="code-line-number">7</span>
                            <span class="code-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">async with</span> session.get(url) <span class="code-keyword">as</span> response:</span>
                        </div>
                        <div class="code-line">
                            <span class="code-line-number">8</span>
                            <span class="code-content">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;data = <span class="code-keyword">await</span> response.text()</span>
                        </div>
                        <div class="code-line">
                            <span class="code-line-number">9</span>
                            <span class="code-content">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">print</span>(<span class="code-string">f"اكتمال المهمة {task_id}"</span>)</span>
                        </div>
                        <div class="code-line">
                            <span class="code-line-number">10</span>
                            <span class="code-content">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">return</span> {<span class="code-string">'task_id'</span>: task_id, <span class="code-string">'data'</span>: data[:<span class="code-number">100</span>]}</span>
                        </div>
                        <div class="code-line">
                            <span class="code-line-number">11</span>
                            <span class="code-content"></span>
                        </div>
                        <div class="code-line">
                            <span class="code-line-number">12</span>
                            <span class="code-content"><span class="code-keyword">async</span> <span class="code-keyword">def</span> <span class="code-function">main</span>():</span>
                        </div>
                        <div class="code-line">
                            <span class="code-line-number">13</span>
                            <span class="code-content">&nbsp;&nbsp;&nbsp;&nbsp;urls = [</span>
                        </div>
                        <div class="code-line">
                            <span class="code-line-number">14</span>
                            <span class="code-content">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-string">'https://httpbin.org/delay/2'</span>,</span>
                        </div>
                        <div class="code-line">
                            <span class="code-line-number">15</span>
                            <span class="code-content">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-string">'https://httpbin.org/delay/1'</span>,</span>
                        </div>
                        <div class="code-line">
                            <span class="code-line-number">16</span>
                            <span class="code-content">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-string">'https://httpbin.org/delay/3'</span>,</span>
                        </div>
                        <div class="code-line">
                            <span class="code-line-number">17</span>
                            <span class="code-content">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-string">'https://httpbin.org/delay/1'</span></span>
                        </div>
                        <div class="code-line">
                            <span class="code-line-number">18</span>
                            <span class="code-content">&nbsp;&nbsp;&nbsp;&nbsp;]</span>
                        </div>
                        <div class="code-line">
                            <span class="code-line-number">19</span>
                            <span class="code-content"></span>
                        </div>
                        <div class="code-line">
                            <span class="code-line-number">20</span>
                            <span class="code-content">&nbsp;&nbsp;&nbsp;&nbsp;start_time = time.time()</span>
                        </div>
                        <div class="code-line">
                            <span class="code-line-number">21</span>
                            <span class="code-content"></span>
                        </div>
                        <div class="code-line">
                            <span class="code-line-number">22</span>
                            <span class="code-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">async with</span> aiohttp.ClientSession() <span class="code-keyword">as</span> session:</span>
                        </div>
                        <div class="code-line">
                            <span class="code-line-number">23</span>
                            <span class="code-content">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;tasks = [fetch_data(session, url, i) <span class="code-keyword">for</span> i, url <span class="code-keyword">in</span> <span class="code-function">enumerate</span>(urls)]</span>
                        </div>
                        <div class="code-line">
                            <span class="code-line-number">24</span>
                            <span class="code-content">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;results = <span class="code-keyword">await</span> asyncio.gather(*tasks)</span>
                        </div>
                        <div class="code-line">
                            <span class="code-line-number">25</span>
                            <span class="code-content"></span>
                        </div>
                        <div class="code-line">
                            <span class="code-line-number">26</span>
                            <span class="code-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">print</span>(<span class="code-string">f"الوقت الإجمالي: {time.time() - start_time:.2f} ثانية"</span>)</span>
                        </div>
                        <div class="code-line">
                            <span class="code-line-number">27</span>
                            <span class="code-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">print</span>(<span class="code-string">f"عدد النتائج: {len(results)}"</span>)</span>
                        </div>
                        <div class="code-line">
                            <span class="code-line-number">28</span>
                            <span class="code-content"></span>
                        </div>
                        <div class="code-line">
                            <span class="code-line-number">29</span>
                            <span class="code-content"><span class="code-keyword">if</span> <span class="code-variable">__name__</span> == <span class="code-string">"__main__"</span>:</span>
                        </div>
                        <div class="code-line">
                            <span class="code-line-number">30</span>
                            <span class="code-content">&nbsp;&nbsp;&nbsp;&nbsp;asyncio.run(main())</span>
                        </div>
                    </div>
                </div>
                
                <div class="code-section fade-in-up">
                    <div class="code-header">
                        <h3 class="code-title">سكريبت معالجة الملفات المتوازية</h3>
                        <div class="code-actions">
                            <button class="code-btn">
                                <i class="fas fa-copy"></i>
                                نسخ
                            </button>
                            <button class="code-btn">
                                <i class="fas fa-play"></i>
                                تشغيل
                            </button>
                        </div>
                    </div>
                    <div class="code-block">
                        <div class="code-line">
                            <span class="code-line-number">1</span>
                            <span class="code-content"><span class="code-keyword">import</span> asyncio</span>
                        </div>
                        <div class="code-line">
                            <span class="code-line-number">2</span>
                            <span class="code-content"><span class="code-keyword">import</span> aiofiles</span>
                        </div>
                        <div class="code-line">
                            <span class="code-line-number">3</span>
                            <span class="code-content"><span class="code-keyword">import</span> os</span>
                        </div>
                        <div class="code-line">
                            <span class="code-line-number">4</span>
                            <span class="code-content"></span>
                        </div>
                        <div class="code-line">
                            <span class="code-line-number">5</span>
                            <span class="code-content"><span class="code-keyword">async</span> <span class="code-keyword">def</span> <span class="code-function">process_file</span>(filename, output_dir):</span>
                        </div>
                        <div class="code-line">
                            <span class="code-line-number">6</span>
                            <span class="code-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">print</span>(<span class="code-string">f"معالجة {filename}"</span>)</span>
                        </div>
                        <div class="code-line">
                            <span class="code-line-number">7</span>
                            <span class="code-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-comment"># محاكاة معالجة الملف</span></span>
                        </div>
                        <div class="code-line">
                            <span class="code-line-number">8</span>
                            <span class="code-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">await</span> asyncio.sleep(<span class="code-number">1</span>)</span>
                        </div>
                        <div class="code-line">
                            <span class="code-line-number">9</span>
                            <span class="code-content">&nbsp;&nbsp;&nbsp;&nbsp;output_path = os.path.join(output_dir, <span class="code-string">f"processed_<wbr>{filename}"</span>)</span>
                        </div>
                        <div class="code-line">
                            <span class="code-line-number">10</span>
                            <span class="code-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">async with</span> aiofiles.open(output_path, <span class="code-string">'w'</span>) <span class="code-keyword">as</span> f:</span>
                        </div>
                        <div class="code-line">
                            <span class="code-line-number">11</span>
                            <span class="code-content">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">await</span> f.write(<span class="code-string">f"تمت معالجة {filename}"</span>)</span>
                        </div>
                        <div class="code-line">
                            <span class="code-line-number">12</span>
                            <span class="code-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">return</span> output_path</span>
                        </div>
                        <div class="code-line">
                            <span class="code-line-number">13</span>
                            <span class="code-content"></span>
                        </div>
                        <div class="code-line">
                            <span class="code-line-number">14</span>
                            <span class="code-content"><span class="code-keyword">async</span> <span class="code-keyword">def</span> <span class="code-function">main</span>():</span>
                        </div>
                        <div class="code-line">
                            <span class="code-line-number">15</span>
                            <span class="code-content">&nbsp;&nbsp;&nbsp;&nbsp;files = [<span class="code-string">'file1.txt'</span>, <span class="code-string">'file2.txt'</span>, <span class="code-string">'file3.txt'</span>, <span class="code-string">'file4.txt'</span>]</span>
                        </div>
                        <div class="code-line">
                            <span class="code-line-number">16</span>
                            <span class="code-content">&nbsp;&nbsp;&nbsp;&nbsp;output_dir = <span class="code-string">'output'</span></span>
                        </div>
                        <div class="code-line">
                            <span class="code-line-number">17</span>
                            <span class="code-content"></span>
                        </div>
                        <div class="code-line">
                            <span class="code-line-number">18</span>
                            <span class="code-content">&nbsp;&nbsp;&nbsp;&nbsp;os.makedirs(output_dir, exist_ok=<span class="code-keyword">True</span>)</span>
                        </div>
                        <div class="code-line">
                            <span class="code-line-number">19</span>
                            <span class="code-content"></span>
                        </div>
                        <div class="code-line">
                            <span class="code-line-number">20</span>
                            <span class="code-content">&nbsp;&nbsp;&nbsp;&nbsp;tasks = [process_file(f, output_dir) <span class="code-keyword">for</span> f <span class="code-keyword">in</span> files]</span>
                        </div>
                        <div class="code-line">
                            <span class="code-line-number">21</span>
                            <span class="code-content">&nbsp;&nbsp;&nbsp;&nbsp;results = <span class="code-keyword">await</span> asyncio.gather(*tasks)</span>
                        </div>
                        <div class="code-line">
                            <span class="code-line-number">22</span>
                            <span class="code-content"></span>
                        </div>
                        <div class="code-line">
                            <span class="code-line-number">23</span>
                            <span class="code-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">print</span>(<span class="code-string">"اكتملت معالجة جميع الملفات:"</span>)</span>
                        </div>
                        <div class="code-line">
                            <span class="code-line-number">24</span>
                            <span class="code-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">for</span> result <span class="code-keyword">in</span> results:</span>
                        </div>
                        <div class="code-line">
                            <span class="code-line-number">25</span>
                            <span class="code-content">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">print</span>(<span class="code-string">f" - {result}"</span>)</span>
                        </div>
                        <div class="code-line">
                            <span class="code-line-number">26</span>
                            <span class="code-content"></span>
                        </div>
                        <div class="code-line">
                            <span class="code-line-number">27</span>
                            <span class="code-content"><span class="code-keyword">if</span> <span class="code-variable">__name__</span> == <span class="code-string">"__main__"</span>:</span>
                        </div>
                        <div class="code-line">
                            <span class="code-line-number">28</span>
                            <span class="code-content">&nbsp;&nbsp;&nbsp;&nbsp;asyncio.run(main())</span>
                        </div>
                    </div>
                </div>
            </section>
            
            <!-- Demo Section -->
            <section id="demo" class="demo-section">
                <div class="container">
                    <h2 class="section-title">تجربة حية</h2>
                    <div class="demo-container">
                        <div class="demo-content">
                            <h3>محاكاة تنفيذ المهام المتعددة</h3>
                            <p>شاهد كيف تعمل المهام غير المتزامنة في الوقت الفعلي. قم بتشغيل المحاكاة لترى كيف يمكن لـ Python تنفيذ مهام متعددة بشكل متزامن.</p>
                            <button class="btn btn-primary" id="startDemo">
                                <i class="fas fa-play"></i>
                                بدء المحاكاة
                            </button>
                        </div>
                        <div class="demo-visual">
                            <div class="task-visualization" id="taskVisualization">
                                <div class="task-bar">
                                    <div class="task-icon">
                                        <i class="fas fa-download"></i>
                                    </div>
                                    <div class="task-info">
                                        <div class="task-name">جلب البيانات من API</div>
                                        <div class="task-status">في الانتظار</div>
                                    </div>
                                    <div class="task-progress">
                                        <div class="task-progress-bar" data-task="0"></div>
                                    </div>
                                </div>
                                <div class="task-bar">
                                    <div class="task-icon">
                                        <i class="fas fa-file"></i>
                                    </div>
                                    <div class="task-info">
                                        <div class="task-name">معالجة الملفات</div>
                                        <div class="task-status">في الانتظار</div>
                                    </div>
                                    <div class="task-progress">
                                        <div class="task-progress-bar" data-task="1"></div>
                                    </div>
                                </div>
                                <div class="task-bar">
                                    <div class="task-icon">
                                        <i class="fas fa-database"></i>
                                    </div>
                                    <div class="task-info">
                                        <div class="task-name">الاستعلام عن قاعدة البيانات</div>
                                        <div class="task-status">في الانتظار</div>
                                    </div>
                                    <div class="task-progress">
                                        <div class="task-progress-bar" data-task="2"></div>
                                    </div>
                                </div>
                                <div class="task-bar">
                                    <div class="task-icon">
                                        <i class="fas fa-chart-line"></i>
                                    </div>
                                    <div class="task-info">
                                        <div class="task-name">تحليل البيانات</div>
                                        <div class="task-status">في الانتظار</div>
                                    </div>
                                    <div class="task-progress">
                                        <div class="task-progress-bar" data-task="3"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
    
    <!-- Footer -->
    <footer id="resources">
        <div class="container">
            <div class="footer-content">
                <div class="footer-column">
                    <h3>مصادر التعلم</h3>
                    <ul>
                        <li><a href="#"><i class="fas fa-book"></i> وثائق asyncio الرسمية</a></li>
                        <li><a href="#"><i class="fas fa-video"></i> دروس فيديو متقدمة</a></li>
                        <li><a href="#"><i class="fas fa-project-diagram"></i> مشاريع عملية</a></li>
                        <li><a href="#"><i class="fas fa-code"></i> أمثلة كود إضافية</a></li>
                    </ul>
                </div>
                
                <div class="footer-column">
                    <h3>أدوات مساعدة</h3>
                    <ul>
                        <li><a href="#"><i class="fab fa-python"></i> مكتبة aiohttp</a></li>
                        <li><a href="#"><i class="fas fa-database"></i> asyncpg - PostgreSQL</a></li>
                        <li><a href="#"><i class="fas fa-file"></i> aiofiles - الملفات</a></li>
                        <li><a href="#"><i class="fas fa-rocket"></i> أدوات التصحيح</a></li>
                    </ul>
                </div>
                
                <div class="footer-column">
                    <h3>المجتمع</h3>
                    <ul>
                        <li><a href="#"><i class="fab fa-github"></i> GitHub</a></li>
                        <li><a href="#"><i class="fab fa-stack-overflow"></i> Stack Overflow</a></li>
                        <li><a href="#"><i class="fab fa-discord"></i> Discord</a></li>
                        <li><a href="#"><i class="fab fa-twitter"></i> Twitter</a></li>
                    </ul>
                </div>
            </div>
            
            <div class="footer-bottom">
                <p>تم إنشاء هذا المحتوى بدقة وعناية لتقديم أفضل شرح لبناء سكريبتات متعددة المهام باستخدام البرمجة غير المتزامنة في Python &copy; 2023</p>
            </div>
        </div>
    </footer>

    <script>
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
        
        // تأثيرات الظهور عند التمرير
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in-up');
                }
            });
        }, observerOptions);
        
        document.querySelectorAll('.card, .code-section').forEach(el => {
            observer.observe(el);
        });
        
        // محاكاة المهام
        document.getElementById('startDemo').addEventListener('click', function() {
            const taskBars = document.querySelectorAll('.task-progress-bar');
            const taskStatuses = document.querySelectorAll('.task-status');
            const startBtn = document.getElementById('startDemo');
            
            startBtn.disabled = true;
            startBtn.innerHTML = '<i class="fas fa-sync-alt fa-spin"></i> جاري التشغيل...';
            
            // إعادة تعيين الحالة
            taskBars.forEach(bar => {
                bar.style.width = '0%';
            });
            
            taskStatuses.forEach(status => {
                status.textContent = 'في الانتظار';
                status.style.color = '';
            });
            
            // محاكاة تنفيذ المهام
            const delays = [2000, 3500, 1500, 4000];
            
            taskBars.forEach((bar, index) => {
                const taskId = bar.getAttribute('data-task');
                const status = taskStatuses[taskId];
                
                setTimeout(() => {
                    status.textContent = 'جاري التنفيذ';
                    status.style.color = '#f59e0b';
                    
                    let progress = 0;
                    const interval = setInterval(() => {
                        progress += 2;
                        bar.style.width = `${progress}%`;
                        
                        if (progress >= 100) {
                            clearInterval(interval);
                            status.textContent = 'مكتمل';
                            status.style.color = '#06d6a0';
                            
                            // تفعيل الزر مرة أخرى بعد اكتمال جميع المهام
                            if (index === taskBars.length - 1) {
                                setTimeout(() => {
                                    startBtn.disabled = false;
                                    startBtn.innerHTML = '<i class="fas fa-play"></i> بدء المحاكاة';
                                }, 1000);
                            }
                        }
                    }, delays[index] / 50);
                }, index * 500);
            });
        });
        
        // نسخ الكود
        document.querySelectorAll('.code-btn').forEach(btn => {
            if (btn.textContent.includes('نسخ')) {
                btn.addEventListener('click', function() {
                    const codeBlock = this.closest('.code-section').querySelector('.code-block');
                    const textToCopy = codeBlock.textContent;
                    
                    navigator.clipboard.writeText(textToCopy).then(() => {
                        const originalText = btn.innerHTML;
                        btn.innerHTML = '<i class="fas fa-check"></i> تم النسخ!';
                        
                        setTimeout(() => {
                            btn.innerHTML = originalText;
                        }, 2000);
                    });
                });
            }
        });
    </script>
</body>
</html>