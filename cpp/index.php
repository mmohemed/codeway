<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>أكاديمية C++ | مسار الاحتراف المتكامل</title>
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <!-- Google Fonts - Cairo Plus Tajawal للفخامة -->
    <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700;900&family=Tajawal:wght@300;400;500;700;900&display=swap" rel="stylesheet">
    <!-- AOS Library للتأثيرات -->
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Tajawal', 'Cairo', sans-serif;
            background: #0a0f1f;
            color: #fff;
            line-height: 1.6;
            position: relative;
            overflow-x: hidden;
        }

        /* خلفية متحركة فاخرة */
        body::before {
            content: '';
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: radial-gradient(circle at 20% 50%, rgba(102, 126, 234, 0.15) 0%, transparent 50%),
                        radial-gradient(circle at 80% 80%, rgba(118, 75, 162, 0.15) 0%, transparent 50%);
            z-index: -1;
        }

        /* جسيمات متحركة (تأثير فخم) */
        .particle {
            position: fixed;
            width: 4px;
            height: 4px;
            background: rgba(255, 255, 255, 0.5);
            border-radius: 50%;
            pointer-events: none;
            z-index: -1;
            animation: float 20s infinite linear;
        }

        @keyframes float {
            0% {
                transform: translateY(0) translateX(0);
                opacity: 0;
            }
            10% {
                opacity: 1;
            }
            90% {
                opacity: 1;
            }
            100% {
                transform: translateY(-100vh) translateX(100px);
                opacity: 0;
            }
        }

        .container {
            max-width: 1400px;
            margin: 0 auto;
            padding: 20px;
            position: relative;
            z-index: 2;
        }

        /* شريط التنقل الفاخر */
        .navbar {
            background: rgba(255, 255, 255, 0.03);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.05);
            border-radius: 20px;
            padding: 15px 40px;
            margin-bottom: 40px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
            transition: all 0.3s ease;
        }

        .navbar:hover {
            border-color: rgba(102, 126, 234, 0.3);
            box-shadow: 0 20px 60px rgba(102, 126, 234, 0.2);
        }

        .logo {
            font-size: 1.8em;
            font-weight: 900;
            background: linear-gradient(135deg, #fff 0%, #a5b4fc 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            text-decoration: none;
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .logo i {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            font-size: 1.5em;
        }

        .nav-links {
            display: flex;
            gap: 40px;
        }

        .nav-links a {
            text-decoration: none;
            color: rgba(255, 255, 255, 0.7);
            font-weight: 500;
            font-size: 1.1em;
            transition: all 0.3s ease;
            position: relative;
        }

        .nav-links a::after {
            content: '';
            position: absolute;
            bottom: -5px;
            left: 0;
            width: 0;
            height: 2px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            transition: width 0.3s ease;
        }

        .nav-links a:hover {
            color: #fff;
        }

        .nav-links a:hover::after {
            width: 100%;
        }

        /* الهيدر الرئيسي - تصميم فخم */
        .hero {
            background: rgba(255, 255, 255, 0.02);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.05);
            border-radius: 40px;
            padding: 80px 60px;
            margin-bottom: 60px;
            text-align: center;
            position: relative;
            overflow: hidden;
            box-shadow: 0 40px 80px rgba(0, 0, 0, 0.5);
        }

        .hero::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: radial-gradient(circle, rgba(102, 126, 234, 0.1) 0%, transparent 50%);
            animation: rotate 30s linear infinite;
        }

        @keyframes rotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }

        .hero h1 {
            font-size: 4.5em;
            font-weight: 900;
            background: linear-gradient(135deg, #fff 0%, #a5b4fc 50%, #c084fc 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            margin-bottom: 20px;
            position: relative;
            letter-spacing: -1px;
        }

        .hero p {
            font-size: 1.4em;
            color: rgba(255, 255, 255, 0.7);
            max-width: 800px;
            margin: 0 auto 40px;
        }

        .hero-stats {
            display: flex;
            justify-content: center;
            gap: 60px;
            flex-wrap: wrap;
        }

        .stat-item {
            text-align: center;
            position: relative;
        }

        .stat-item:not(:last-child)::after {
            content: '';
            position: absolute;
            right: -30px;
            top: 50%;
            transform: translateY(-50%);
            width: 2px;
            height: 40px;
            background: linear-gradient(to bottom, transparent, rgba(255,255,255,0.3), transparent);
        }

        .stat-number {
            font-size: 3em;
            font-weight: 900;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            display: block;
            line-height: 1;
        }

        .stat-label {
            color: rgba(255, 255, 255, 0.6);
            font-size: 1.1em;
            font-weight: 500;
        }

        /* قسم المسار */
        .path-section {
            margin-bottom: 60px;
        }

        .section-header {
            text-align: center;
            margin-bottom: 50px;
        }

        .section-header h2 {
            font-size: 3em;
            font-weight: 800;
            background: linear-gradient(135deg, #fff 0%, #a5b4fc 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            display: inline-block;
            position: relative;
            padding-bottom: 15px;
        }

        .section-header h2::before {
            content: '';
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 100px;
            height: 4px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            border-radius: 4px;
        }

        .section-header h2::after {
            content: '●';
            position: absolute;
            bottom: -12px;
            left: 50%;
            transform: translateX(-50%);
            color: #764ba2;
            font-size: 20px;
        }

        .path-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
            gap: 30px;
        }

        /* بطاقات المستويات - تصميم فخم */
        .level-card {
            background: rgba(255, 255, 255, 0.02);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.05);
            border-radius: 30px;
            padding: 30px;
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            position: relative;
            overflow: hidden;
        }

        .level-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 5px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            transform: translateX(-100%);
            transition: transform 0.6s ease;
        }

        .level-card:hover::before {
            transform: translateX(0);
        }

        .level-card:hover {
            transform: translateY(-10px) scale(1.02);
            border-color: rgba(102, 126, 234, 0.3);
            box-shadow: 0 40px 80px rgba(102, 126, 234, 0.2);
        }

        .level-header {
            display: flex;
            align-items: center;
            gap: 20px;
            margin-bottom: 30px;
        }

        .level-icon {
            width: 70px;
            height: 70px;
            background: linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1));
            border: 1px solid rgba(102, 126, 234, 0.3);
            border-radius: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2em;
            color: #fff;
            position: relative;
            overflow: hidden;
        }

        .level-icon::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%);
            opacity: 0;
            transition: opacity 0.3s ease;
        }

        .level-card:hover .level-icon::before {
            opacity: 1;
        }

        .level-title {
            font-size: 1.8em;
            font-weight: 700;
            color: #fff;
        }

        .level-lessons {
            display: flex;
            flex-direction: column;
            gap: 15px;
        }

        /* أزرار الدروس - تصميم فخم */
        .lesson-btn {
            display: flex;
            align-items: center;
            padding: 18px 25px;
            background: rgba(255, 255, 255, 0.03);
            border: 1px solid rgba(255, 255, 255, 0.05);
            border-radius: 15px;
            text-decoration: none;
            color: #fff;
            font-size: 1.1em;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
        }

        .lesson-btn::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
            transition: left 0.5s ease;
        }

        .lesson-btn:hover {
            background: linear-gradient(135deg, rgba(102, 126, 234, 0.2), rgba(118, 75, 162, 0.2));
            border-color: rgba(102, 126, 234, 0.5);
            transform: translateX(10px);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
        }

        .lesson-btn:hover::before {
            left: 100%;
        }

        .lesson-btn i {
            margin-left: 15px;
            color: #667eea;
            font-size: 1.2em;
            transition: transform 0.3s ease;
        }

        .lesson-btn:hover i {
            transform: scale(1.2);
        }

        .lesson-text {
            flex: 1;
        }

        /* تمت إزالة شريط التقدم والعلامات الخضراء تماماً */

        /* قسم المهارات - تصميم ثلاثي الأبعاد */
        .skills-section {
            background: rgba(255, 255, 255, 0.02);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.05);
            border-radius: 40px;
            padding: 60px;
            margin-bottom: 60px;
        }

        .skills-cloud {
            display: flex;
            flex-wrap: wrap;
            gap: 15px;
            justify-content: center;
            margin-top: 40px;
        }

        .skill-tag {
            padding: 15px 30px;
            background: rgba(255, 255, 255, 0.03);
            border: 1px solid rgba(102, 126, 234, 0.2);
            border-radius: 50px;
            color: rgba(255, 255, 255, 0.8);
            font-size: 1.1em;
            font-weight: 500;
            transition: all 0.3s ease;
            cursor: default;
            position: relative;
            overflow: hidden;
        }

        .skill-tag::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            opacity: 0;
            transition: opacity 0.3s ease;
            z-index: -1;
        }

        .skill-tag:hover {
            color: #fff;
            border-color: transparent;
            transform: scale(1.1);
            box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
        }

        .skill-tag:hover::before {
            opacity: 1;
        }

        /* الموارد الإضافية - تصميم كروت زجاجية */
        .resources-section {
            margin-bottom: 60px;
        }

        .resources-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 30px;
        }

        .resource-card {
            background: rgba(255, 255, 255, 0.02);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.05);
            border-radius: 30px;
            padding: 40px 30px;
            text-align: center;
            transition: all 0.4s ease;
            text-decoration: none;
            color: #fff;
            position: relative;
            overflow: hidden;
        }

        .resource-card::after {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
            opacity: 0;
            transition: opacity 0.4s ease;
        }

        .resource-card:hover {
            transform: translateY(-15px);
            border-color: rgba(102, 126, 234, 0.5);
            box-shadow: 0 30px 60px rgba(102, 126, 234, 0.2);
        }

        .resource-card:hover::after {
            opacity: 1;
        }

        .resource-card i {
            font-size: 3.5em;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            margin-bottom: 20px;
        }

        .resource-card h4 {
            font-size: 1.5em;
            margin-bottom: 10px;
        }

        .resource-card p {
            color: rgba(255, 255, 255, 0.6);
        }

        /* زر العودة - تصميم فاخر */
        .back-home {
            position: fixed;
            bottom: 30px;
            left: 30px;
            background: rgba(255, 255, 255, 0.03);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            padding: 15px 30px;
            border-radius: 60px;
            text-decoration: none;
            color: #fff;
            font-weight: 600;
            display: flex;
            align-items: center;
            gap: 12px;
            transition: all 0.3s ease;
            z-index: 1000;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        .back-home:hover {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            transform: translateX(-10px) scale(1.05);
            box-shadow: 0 20px 40px rgba(102, 126, 234, 0.4);
        }

        .back-home i {
            font-size: 1.2em;
            transition: transform 0.3s ease;
        }

        .back-home:hover i {
            transform: translateX(-5px);
        }

        /* تذييل الصفحة */
        .footer {
            text-align: center;
            padding: 40px;
            color: rgba(255, 255, 255, 0.5);
            font-size: 1.1em;
            border-top: 1px solid rgba(255, 255, 255, 0.05);
            margin-top: 40px;
        }

        .footer a {
            color: #a5b4fc;
            text-decoration: none;
            transition: color 0.3s ease;
        }

        .footer a:hover {
            color: #667eea;
        }

        /* تصميم متجاوب */
        @media (max-width: 1200px) {
            .hero h1 {
                font-size: 3.5em;
            }
            
            .path-grid {
                grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            }
        }

        @media (max-width: 768px) {
            .navbar {
                flex-direction: column;
                gap: 20px;
                padding: 20px;
            }
            
            .nav-links {
                gap: 20px;
                flex-wrap: wrap;
                justify-content: center;
            }
            
            .hero {
                padding: 40px 20px;
            }
            
            .hero h1 {
                font-size: 2.5em;
            }
            
            .hero p {
                font-size: 1.2em;
            }
            
            .hero-stats {
                gap: 30px;
            }
            
            .stat-item:not(:last-child)::after {
                display: none;
            }
            
            .stat-number {
                font-size: 2em;
            }
            
            .section-header h2 {
                font-size: 2.2em;
            }
            
            .path-grid {
                grid-template-columns: 1fr;
            }
            
            .skills-section {
                padding: 30px 20px;
            }
        }

        @media (max-width: 480px) {
            .hero h1 {
                font-size: 1.8em;
            }
            
            .lesson-btn {
                padding: 15px;
            }
        }

        /* تأثيرات إضافية للفخامة */
        .glow {
            position: absolute;
            width: 200px;
            height: 200px;
            background: radial-gradient(circle, rgba(102, 126, 234, 0.3) 0%, transparent 70%);
            border-radius: 50%;
            filter: blur(60px);
            z-index: -1;
        }
    </style>
</head>
<body>
    <!-- جسيمات متحركة للفخامة -->
    <div id="particles"></div>

    <!-- شريط التنقل -->
    <div class="container">
        <nav class="navbar" data-aos="fade-down">
            <a href="../index.html" class="logo">
                <i class="fas fa-crown"></i> C++ Academy
            </a>
            <div class="nav-links">
                <a href="../index.html">الرئيسية</a>
                <a href="#path">المسار</a>
                <a href="#resources">الموارد</a>
                <a href="#skills">المهارات</a>
            </div>
        </nav>
    </div>

    <div class="container">
        <!-- الهيدر الرئيسي -->
        <header class="hero" data-aos="fade-up">
            <h1><i class="fas fa-code"></i> مسار C++ الاحترافي</h1>
            <p>من الصفر إلى الخبرة في أقوى لغة برمجة على الإطلاق<br>تصميم فاخر وتجربة تعلم استثنائية</p>
            <div class="hero-stats">
                <div class="stat-item">
                    <span class="stat-number">28</span>
                    <span class="stat-label">درس متكامل</span>
                </div>
                <div class="stat-item">
                    <span class="stat-number">4</span>
                    <span class="stat-label">مستويات</span>
                </div>
                <div class="stat-item">
                    <span class="stat-number">50+</span>
                    <span class="stat-label">ساعة تعلم</span>
                </div>
                <div class="stat-item">
                    <span class="stat-number">15</span>
                    <span class="stat-label">مشروع عملي</span>
                </div>
            </div>
        </header>

        <!-- مسار التعلم -->
        <section class="path-section" id="path">
            <div class="section-header" data-aos="fade-up">
                <h2>مسار التعلم المتكامل</h2>
            </div>
            <div class="path-grid" id="pathGrid">
                <!-- سيتم إضافة المحتوى عبر JavaScript -->
            </div>
        </section>

        <!-- المهارات -->
        <section class="skills-section" id="skills" data-aos="fade-up">
            <div class="section-header">
                <h2>المهارات المتقدمة</h2>
            </div>
            <div class="skills-cloud">
                <span class="skill-tag">المتغيرات والبيانات</span>
                <span class="skill-tag">التحكم في التدفق</span>
                <span class="skill-tag">الدوال</span>
                <span class="skill-tag">المصفوفات</span>
                <span class="skill-tag">المؤشرات</span>
                <span class="skill-tag">البرمجة الكائنية</span>
                <span class="skill-tag">الوراثة</span>
                <span class="skill-tag">تعدد الأشكال</span>
                <span class="skill-tag">القالبات</span>
                <span class="skill-tag">STL</span>
                <span class="skill-tag">إدارة الذاكرة</span>
                <span class="skill-tag">الملفات</span>
                <span class="skill-tag">معالجة الأخطاء</span>
                <span class="skill-tag">التزامن</span>
                <span class="skill-tag">C++20</span>
            </div>
        </section>

        <!-- الموارد -->
        <section class="resources-section" id="resources">
            <div class="section-header" data-aos="fade-up">
                <h2>موارد حصرية</h2>
            </div>
            <div class="resources-grid">
                <a href="#" class="resource-card" data-aos="fade-up" data-aos-delay="100">
                    <i class="fas fa-file-pdf"></i>
                    <h4>كتب PDF</h4>
                    <p>أفضل المراجع العالمية</p>
                </a>
                <a href="#" class="resource-card" data-aos="fade-up" data-aos-delay="200">
                    <i class="fas fa-laptop-code"></i>
                    <h4>مشاريع عملية</h4>
                    <p>تطبيقات واقعية</p>
                </a>
                <a href="#" class="resource-card" data-aos="fade-up" data-aos-delay="300">
                    <i class="fas fa-question-circle"></i>
                    <h4>اختبارات</h4>
                    <p>قياس المستوى</p>
                </a>
                <a href="#" class="resource-card" data-aos="fade-up" data-aos-delay="400">
                    <i class="fas fa-users"></i>
                    <h4>مجتمع</h4>
                    <p>نقاشات وحلول</p>
                </a>
            </div>
        </section>

        <!-- تذييل -->
        <footer class="footer">
            <p>© 2024 أكاديمية C++ | جميع الحقوق محفوظة | تصميم فاخر ✦</p>
        </footer>
    </div>

    <!-- زر العودة -->
    <a href="../index.html" class="back-home">
        <i class="fas fa-arrow-right"></i>
        العودة للرئيسية
    </a>

    <!-- AOS Library -->
    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    
    <script>
        // بيانات المسار التعليمي
        const learningModules = [
            {
                title: 'المستوى المبتدئ',
                icon: 'fa-seedling',
                basePath: 'beginner',
                lessons: [
                    { name: 'مقدمة عن لغة C++ وتاريخها', page: 'lesson1.html' },
                    { name: 'إعداد بيئة التطوير (IDE)', page: 'lesson2.html' },
                    { name: 'المتغيرات وأنواع البيانات', page: 'lesson3.html' },
                    { name: 'المدخلات والمخرجات', page: 'lesson4.html' },
                    { name: 'العوامل الحسابية والمنطقية', page: 'lesson5.html' },
                    { name: 'الجمل الشرطية if-else', page: 'lesson6.html' },
                    { name: 'الحلقات التكرارية', page: 'lesson7.html' }
                ]
            },
            {
                title: 'المستوى المتوسط',
                icon: 'fa-tree',
                basePath: 'intermediate',
                lessons: [
                    { name: 'الدوال (Functions)', page: 'lesson8.html' },
                    { name: 'المصفوفات (Arrays)', page: 'lesson9.html' },
                    { name: 'المؤشرات (Pointers)', page: 'lesson10.html' },
                    { name: 'المراجع (References)', page: 'lesson11.html' },
                    { name: 'السلاسل النصية', page: 'lesson12.html' },
                    { name: 'الهياكل (Structures)', page: 'lesson13.html' },
                    { name: 'إدارة الذاكرة الديناميكية', page: 'lesson14.html' }
                ]
            },
            {
                title: 'البرمجة كائنية التوجه',
                icon: 'fa-cube',
                basePath: 'oop',
                lessons: [
                    { name: 'مفاهيم OOP الأساسية', page: 'lesson15.html' },
                    { name: 'الفئات والكائنات', page: 'lesson16.html' },
                    { name: 'الوراثة (Inheritance)', page: 'lesson17.html' },
                    { name: 'تعدد الأشكال (Polymorphism)', page: 'lesson18.html' },
                    { name: 'التغليف (Encapsulation)', page: 'lesson19.html' },
                    { name: 'الصديقات (Friend Functions)', page: 'lesson20.html' },
                    { name: 'نظام إدارة طلاب', page: 'project1.html', soon: true }   // صفحة المشروع لم تُنشأ بعد
                ]
            },
            {
                title: 'مستوى متقدم',
                icon: 'fa-rocket',
                basePath: 'advanced',
                lessons: [
                    { name: 'القالبات (Templates)', page: 'lesson21.html' },
                    { name: 'STL - الحاويات', page: 'lesson22.html' },
                    { name: 'STL - الخوارزميات', page: 'lesson23.html' },
                    { name: 'معالجة الأخطاء', page: 'lesson24.html' },
                    { name: 'ملفات الإدخال/الإخراج', page: 'lesson25.html' },
                    { name: 'البرمجة المتزامنة', page: 'lesson26.html' },
                    { name: 'C++11/14/17/20', page: 'lesson27.html' }
                ]
            }
        ];

        // عرض المسار التعليمي
        function renderLearningPath() {
            const pathGrid = document.getElementById('pathGrid');
            
            pathGrid.innerHTML = learningModules.map(module => `
                <div class="level-card" data-aos="fade-up">
                    <div class="level-header">
                        <div class="level-icon">
                            <i class="fas ${module.icon}"></i>
                        </div>
                        <h3 class="level-title">${module.title}</h3>
                    </div>
                    <div class="level-lessons">
                        ${module.lessons.map(lesson => lesson.soon ? `
                            <span class="lesson-btn" style="opacity:.55; cursor:default;" title="قريبًا">
                                <i class="fas fa-hourglass-half"></i>
                                <span class="lesson-text">${lesson.name} (قريبًا)</span>
                            </span>
                        ` : `
                            <a href="lessons/${module.basePath}/${lesson.page}" class="lesson-btn">
                                <i class="fas fa-play-circle"></i>
                                <span class="lesson-text">${lesson.name}</span>
                            </a>
                        `).join('')}
                    </div>
                </div>
            `).join('');
        }

        // إنشاء جسيمات متحركة
        function createParticles() {
            const particlesContainer = document.getElementById('particles');
            for (let i = 0; i < 50; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
                particle.style.animationDelay = Math.random() * 10 + 's';
                particle.style.width = (Math.random() * 6 + 2) + 'px';
                particle.style.height = particle.style.width;
                particlesContainer.appendChild(particle);
            }
        }

        // تهيئة الصفحة
        window.onload = function() {
            // تشغيل AOS
            AOS.init({
                duration: 1000,
                once: true,
                offset: 100
            });
            
            // عرض المسار
            renderLearningPath();
            
            // إنشاء الجسيمات
            createParticles();
        };
    </script>
</body>
</html>