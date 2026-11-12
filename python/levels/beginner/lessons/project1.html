<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>لعبة التخمين - تعلم بايثون</title>
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
            --game-color: #9c27b0;
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
            color: var(--game-color);
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
        
        .game-section, .explanation-section {
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
        
        /* Game Styles */
        .game-container {
            text-align: center;
        }
        
        .game-info {
            background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
            color: white;
            padding: 1.5rem;
            border-radius: 10px;
            margin-bottom: 1.5rem;
        }
        
        .game-stats {
            display: flex;
            justify-content: space-around;
            margin: 1rem 0;
        }
        
        .stat {
            text-align: center;
        }
        
        .stat-value {
            font-size: 2rem;
            font-weight: bold;
            color: var(--accent-color);
        }
        
        .game-input {
            margin: 1.5rem 0;
        }
        
        .game-input input {
            width: 100px;
            padding: 0.75rem;
            font-size: 1.2rem;
            text-align: center;
            border: 2px solid var(--accent-color);
            border-radius: 8px;
            margin: 0 0.5rem;
        }
        
        .game-buttons {
            display: flex;
            gap: 1rem;
            justify-content: center;
            margin: 1.5rem 0;
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
        
        .btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        }
        
        .game-message {
            margin: 1.5rem 0;
            padding: 1rem;
            border-radius: 8px;
            font-weight: 600;
        }
        
        .success {
            background-color: rgba(40, 167, 69, 0.2);
            color: var(--success-color);
            border: 2px solid var(--success-color);
        }
        
        .warning {
            background-color: rgba(255, 193, 7, 0.2);
            color: var(--warning-color);
            border: 2px solid var(--warning-color);
        }
        
        .error {
            background-color: rgba(220, 53, 69, 0.2);
            color: var(--danger-color);
            border: 2px solid var(--danger-color);
        }
        
        .attempts-list {
            max-height: 200px;
            overflow-y: auto;
            margin-top: 1rem;
        }
        
        .attempt-item {
            padding: 0.5rem;
            margin: 0.25rem 0;
            background: var(--light-color);
            border-radius: 5px;
            display: flex;
            justify-content: space-between;
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
        
        /* Animation */
        @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
        }
        
        .bounce {
            animation: bounce 0.5s ease infinite;
        }
        
        .hidden {
            display: none;
        }
    </style>
</head>
<body>
    <header>
        <div class="container">
            <div class="header-content">
                <div class="logo">
                    <i class="fas fa-gamepad"></i>
                    <span>لعبة التخمين - تعلم بايثون</span>
                </div>
            </div>
        </div>
    </header>
    
    <div class="container">
        <div class="main-content">
            <!-- قسم اللعبة -->
            <section class="game-section">
                <h2 class="section-title"><i class="fas fa-play-circle"></i> العب الآن</h2>
                
                <div class="game-container">
                    <div class="game-info">
                        <h3><i class="fas fa-bullseye"></i> حاول تخمين الرقم</h3>
                        <p>يجب أن تتوقع رقم بين 1 و 100. لديك 10 محاولات فقط!</p>
                    </div>
                    
                    <div class="game-stats">
                        <div class="stat">
                            <div class="stat-value" id="attempts-count">0</div>
                            <div>المحاولات</div>
                        </div>
                        <div class="stat">
                            <div class="stat-value" id="remaining-attempts">10</div>
                            <div>المتبقي</div>
                        </div>
                    </div>
                    
                    <div class="game-input">
                        <input type="number" id="guess-input" min="1" max="100" placeholder="أدخل رقم">
                    </div>
                    
                    <div class="game-buttons">
                        <button class="btn btn-primary" id="guess-btn">
                            <i class="fas fa-paper-plane"></i> تحقق
                        </button>
                        <button class="btn btn-secondary" id="hint-btn">
                            <i class="fas fa-lightbulb"></i> مساعدة
                        </button>
                        <button class="btn btn-secondary" id="restart-btn">
                            <i class="fas fa-redo"></i> إعادة
                        </button>
                    </div>
                    
                    <div class="game-message hidden" id="message"></div>
                    
                    <div class="attempts-list" id="attempts-list">
                        <h4><i class="fas fa-history"></i> محاولاتك السابقة:</h4>
                        <div id="attempts-container"></div>
                    </div>
                </div>
            </section>
            
            <!-- قسم الشرح -->
            <section class="explanation-section">
                <h2 class="section-title"><i class="fas fa-book"></i> شرح الكود</h2>
                
                <div class="explanation-step">
                    <h3 class="step-title"><i class="fas fa-info-circle"></i> عن اللعبة</h3>
                    <p>لعبة التخمين هي لعبة بسيطة تختبر مهارتك في التخمين. الكمبيوتر يختار رقم عشوائي بين 1 و 100، وعليك تخمين هذا الرقم في أقل عدد ممكن من المحاولات.</p>
                </div>
                
                <div class="code-explanation">
                    <pre>
<span class="code-comment"># كود لعبة التخمين الكامل</span>
<span class="code-keyword">import</span> random

<span class="code-keyword">def</span> <span class="code-function">guess_game</span>():
    <span class="code-comment"># توليد رقم عشوائي بين 1 و 100</span>
    secret_number = random.randint(<span class="code-number">1</span>, <span class="code-number">100</span>)
    attempts = <span class="code-number">0</span>
    max_attempts = <span class="code-number">10</span>
    
    <span class="code-keyword">print</span>(<span class="code-string">"مرحباً في لعبة التخمين!"</span>)
    <span class="code-keyword">print</span>(<span class="code-string">f"لدي رقم بين 1 و 100. حاول تخمينه في {max_attempts} محاولات."</span>)
    
    <span class="code-keyword">while</span> attempts < max_attempts:
        <span class="code-keyword">try</span>:
            <span class="code-comment"># الحصول على تخمين المستخدم</span>
            guess = int(input(<span class="code-string">"أدخل تخمينك: "</span>))
            attempts += <span class="code-number">1</span>
            
            <span class="code-comment"># التحقق من التخمين</span>
            <span class="code-keyword">if</span> guess < secret_number:
                <span class="code-keyword">print</span>(<span class="code-string">"منخفض جداً! حاول برقم أعلى."</span>)
            <span class="code-keyword">elif</span> guess > secret_number:
                <span class="code-keyword">print</span>(<span class="code-string">"مرتفع جداً! حاول برقم أقل."</span>)
            <span class="code-keyword">else</span>:
                <span class="code-keyword">print</span>(<span class="code-string">f"مبروك! لقد خمنت الرقم الصحيح {secret_number} في {attempts} محاولات!"</span>)
                <span class="code-keyword">break</span>
            
            <span class="code-comment"># عرض المحاولات المتبقية</span>
            remaining = max_attempts - attempts
            <span class="code-keyword">print</span>(<span class="code-string">f"المحاولات المتبقية: {remaining}"</span>)
            
        <span class="code-keyword">except</span> ValueError:
            <span class="code-keyword">print</span>(<span class="code-string">"خطأ! الرجاء إدخال رقم صحيح."</span>)
    
    <span class="code-keyword">else</span>:
        <span class="code-comment"># إذا انتهت جميع المحاولات دون نجاح</span>
        <span class="code-keyword">print</span>(<span class="code-string">f"انتهت محاولاتك! الرقم الصحيح كان: {secret_number}"</span>)

<span class="code-comment"># تشغيل اللعبة</span>
<span class="code-keyword">if</span> __name__ == <span class="code-string">"__main__"</span>:
    guess_game()
                    </pre>
                </div>
                
                <div class="features-list">
                    <div class="feature-card">
                        <div class="feature-icon">
                            <i class="fas fa-random"></i>
                        </div>
                        <h4>أرقام عشوائية</h4>
                        <p>استخدام مكتبة random لتوليد أرقام غير متوقعة</p>
                    </div>
                    
                    <div class="feature-card">
                        <div class="feature-icon">
                            <i class="fas fa-redo"></i>
                        </div>
                        <h4>حلقات تكرار</h4>
                        <p>استخدام while loop للاستمرار حتى انتهاء المحاولات</p>
                    </div>
                    
                    <div class="feature-card">
                        <div class="feature-icon">
                            <i class="fas fa-shield-alt"></i>
                        </div>
                        <h4>معالجة الأخطاء</h4>
                        <p>استخدام try-except للتعامل مع المدخلات الخاطئة</p>
                    </div>
                    
                    <div class="feature-card">
                        <div class="feature-icon">
                            <i class="fas fa-exchange-alt"></i>
                        </div>
                        <h4>شروط منطقية</h4>
                        <p>مقارنة التخمين مع الرقم السري باستخدام if-elif-else</p>
                    </div>
                </div>
                
                <div class="explanation-step">
                    <h3 class="step-title"><i class="fas fa-cogs"></i> كيفية عمل الكود</h3>
                    <ol style="padding-right: 1.5rem; line-height: 2;">
                        <li>استيراد مكتبة random لتوليد الأرقام العشوائية</li>
                        <li>تحديد الرقم السري بين 1 و 100</li>
                        <li>إعداد عداد للمحاولات والحد الأقصى</li>
                        <li>استخدام حلقة while للاستمرار في طلب التخمينات</li>
                        <li>مقارنة التخمين مع الرقم السري وإعطاء تلميحات</li>
                        <li>معالجة الأخطاء إذا أدخل المستخدم بيانات غير صحيحة</li>
                        <li>إنهاء اللعبة عند التخمين الصحيح أو انتهاء المحاولات</li>
                    </ol>
                </div>
                
                <div class="explanation-step">
                    <h3 class="step-title"><i class="fas fa-graduation-cap"></i> المفاهيم المستفادة</h3>
                    <ul style="padding-right: 1.5rem; line-height: 2;">
                        <li>الدوال (Functions) وتنظيم الكود</li>
                        <li>المتغيرات (Variables) وتخزين البيانات</li>
                        <li>الحلقات (Loops) والتكرار</li>
                        <li>الشروط (Conditionals) واتخاذ القرارات</li>
                        <li>معالجة الأخطاء (Error Handling)</li>
                        <li>التفاعل مع المستخدم (User Input)</li>
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
                    <p>هذا المشروع يهدف إلى تعلم أساسيات البرمجة بلغة بايثون من خلال لعبة تفاعلية ممتعة.</p>
                </div>
                <div class="footer-section">
                    <h3><i class="fas fa-code"></i> تقنيات مستخدمة</h3>
                    <p>HTML, CSS, JavaScript, Python Concepts</p>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2023 لعبة التخمين - تعلم بايثون. جميع الحقوق محفوظة.</p>
            </div>
        </div>
    </footer>

    <script>
        // كود JavaScript لمحاكاة لعبة التخمين
        class GuessGame {
            constructor() {
                this.secretNumber = this.generateSecretNumber();
                this.attempts = 0;
                this.maxAttempts = 10;
                this.gameOver = false;
                this.attemptsHistory = [];
                
                this.initializeEventListeners();
                this.updateDisplay();
            }
            
            generateSecretNumber() {
                return Math.floor(Math.random() * 100) + 1;
            }
            
            initializeEventListeners() {
                document.getElementById('guess-btn').addEventListener('click', () => this.makeGuess());
                document.getElementById('hint-btn').addEventListener('click', () => this.giveHint());
                document.getElementById('restart-btn').addEventListener('click', () => this.restartGame());
                document.getElementById('guess-input').addEventListener('keypress', (e) => {
                    if (e.key === 'Enter') this.makeGuess();
                });
            }
            
            makeGuess() {
                if (this.gameOver) return;
                
                const guessInput = document.getElementById('guess-input');
                const guess = parseInt(guessInput.value);
                
                if (isNaN(guess) || guess < 1 || guess > 100) {
                    this.showMessage('الرجاء إدخال رقم بين 1 و 100', 'error');
                    return;
                }
                
                this.attempts++;
                this.attemptsHistory.push(guess);
                
                if (guess === this.secretNumber) {
                    this.showMessage(`مبروك! لقد خمنت الرقم الصحيح ${this.secretNumber} في ${this.attempts} محاولات!`, 'success');
                    this.gameOver = true;
                } else if (guess < this.secretNumber) {
                    this.showMessage('منخفض جداً! حاول برقم أعلى.', 'warning');
                } else {
                    this.showMessage('مرتفع جداً! حاول برقم أقل.', 'warning');
                }
                
                if (this.attempts >= this.maxAttempts && !this.gameOver) {
                    this.showMessage(`انتهت محاولاتك! الرقم الصحيح كان: ${this.secretNumber}`, 'error');
                    this.gameOver = true;
                }
                
                this.updateDisplay();
                guessInput.value = '';
                guessInput.focus();
            }
            
            giveHint() {
                if (this.gameOver) return;
                
                const hints = [
                    `الرقم بين 1 و 100`,
                    `لديك ${this.maxAttempts - this.attempts} محاولات متبقية`,
                    `جرب الأرقام في النصف ${this.secretNumber > 50 ? 'الأعلى' : 'الأدنى'}`,
                    `الرقم هو ${this.secretNumber % 2 === 0 ? 'زوجي' : 'فردي'}`
                ];
                
                const randomHint = hints[Math.floor(Math.random() * hints.length)];
                this.showMessage(`تلميح: ${randomHint}`, 'warning');
            }
            
            restartGame() {
                this.secretNumber = this.generateSecretNumber();
                this.attempts = 0;
                this.gameOver = false;
                this.attemptsHistory = [];
                
                this.updateDisplay();
                this.hideMessage();
                document.getElementById('guess-input').focus();
                
                this.showMessage('بدأت لعبة جديدة! حاول تخمين الرقم بين 1 و 100', 'success');
                setTimeout(() => this.hideMessage(), 3000);
            }
            
            showMessage(text, type) {
                const messageEl = document.getElementById('message');
                messageEl.textContent = text;
                messageEl.className = `game-message ${type}`;
                messageEl.classList.remove('hidden');
            }
            
            hideMessage() {
                document.getElementById('message').classList.add('hidden');
            }
            
            updateDisplay() {
                document.getElementById('attempts-count').textContent = this.attempts;
                document.getElementById('remaining-attempts').textContent = this.maxAttempts - this.attempts;
                
                const attemptsContainer = document.getElementById('attempts-container');
                attemptsContainer.innerHTML = '';
                
                this.attemptsHistory.forEach((attempt, index) => {
                    const attemptEl = document.createElement('div');
                    attemptEl.className = 'attempt-item';
                    
                    const result = attempt === this.secretNumber ? '✅ صحيح' : 
                                  attempt < this.secretNumber ? '⬆️ منخفض' : '⬇️ مرتفع';
                    
                    attemptEl.innerHTML = `
                        <span>المحاولة ${index + 1}: ${attempt}</span>
                        <span>${result}</span>
                    `;
                    
                    attemptsContainer.appendChild(attemptEl);
                });
                
                // تحريك العناصر عند التحديث
                document.getElementById('attempts-count').classList.add('bounce');
                setTimeout(() => {
                    document.getElementById('attempts-count').classList.remove('bounce');
                }, 500);
            }
        }
        
        // بدء اللعبة عند تحميل الصفحة
        document.addEventListener('DOMContentLoaded', () => {
            const game = new GuessGame();
            game.showMessage('مرحباً! حاول تخمين الرقم بين 1 و 100', 'success');
            setTimeout(() => game.hideMessage(), 3000);
        });
    </script>
</body>
</html>