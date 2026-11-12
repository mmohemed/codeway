// ملف مولَّد من content/linux عبر tools/build.py، لا تعدّله يدوياً
CW.registerContent("linux", [
 [
  {
   "body": "<h2>لماذا Linux؟</h2>\n<p><strong>Linux</strong> نظام تشغيل مفتوح المصدر يشغّل معظم خوادم الإنترنت، وكل السحابة تقريباً، والحاويات (Docker)، وأجهزة Android، والموجهات والأجهزة المدمجة. ومختص الأمن أو مهندس السحابة يقضي يومه في طرفية Linux، لذلك إتقانها مهارة أساسية لا غنى عنها.</p>\n<div class=\"callout tip\"><strong>عن الطرفية في هذه الدورة:</strong> الأوامر تعمل في <strong>طرفية محاكاة</strong> داخل المتصفح تمثّل خادم Ubuntu 24.04، فيه المستخدمة <code dir=\"ltr\">sara</code> (عضو في مجموعة <code dir=\"ltr\">sudo</code>) وخادم ثانٍ اسمه <code dir=\"ltr\">web01</code> في الشبكة. المخرجات مكتوبة لتطابق الأدوات الحقيقية، لكنها نموذج تعليمي وليست نظاماً حقيقياً. للتجربة الحقيقية: ثبّت Ubuntu في VirtualBox، أو استخدم WSL على Windows، أو خادماً سحابياً صغيراً.</div>\n<h2>النواة والتوزيعات</h2>\n<p><strong>Linux</strong> نفسه هو <strong>النواة (Kernel)</strong>: الجزء الذي يدير المعالج والذاكرة والأجهزة. و <strong>التوزيعة</strong> نواة Linux مع أدوات ومدير حزم وإعدادات جاهزة:</p>\n<div class=\"table-wrap\"><table><thead><tr><th>العائلة</th><th>أمثلة</th><th>مدير الحزم</th><th>الاستخدام الشائع</th></tr></thead><tbody><tr><td>Debian</td><td><strong>Ubuntu</strong> و Debian و Kali</td><td><code dir=\"ltr\">apt</code></td><td>الخوادم والسحابة والأمن (Kali)</td></tr><tr><td>Red Hat</td><td>RHEL و Rocky و Fedora</td><td><code dir=\"ltr\">dnf</code></td><td>الشركات الكبيرة</td></tr><tr><td>Alpine</td><td>Alpine</td><td><code dir=\"ltr\">apk</code></td><td>حاويات Docker صغيرة جداً</td></tr><tr><td>Arch</td><td>Arch و Manjaro</td><td><code dir=\"ltr\">pacman</code></td><td>المستخدمون المتقدمون</td></tr></tbody></table></div>\n<p>ولكل إصدار من Ubuntu اسم ورقم: <code dir=\"ltr\">24.04</code> يعني أبريل 2024، و <strong>LTS</strong> (Long Term Support) يعني دعماً بتحديثات أمنية لسنوات، وهو ما تختاره للخوادم دائماً.</p>\n<h2>أول أوامر: من أنا وأين أنا؟</h2>\n<div class=\"code-block term\"><span class=\"code-label\">الطرفية</span><pre dir=\"ltr\"><code><span class=\"t-cmd\"><span class=\"t-ps\">$</span> whoami</span>\nsara\n<span class=\"t-cmd\"><span class=\"t-ps\">$</span> hostname</span>\nubuntu\n<span class=\"t-cmd\"><span class=\"t-ps\">$</span> pwd</span>\n/home/sara\n<span class=\"t-cmd\"><span class=\"t-ps\">$</span> cat /etc/os-release</span>\nPRETTY_NAME=&quot;Ubuntu 24.04.1 LTS&quot;\nNAME=&quot;Ubuntu&quot;\nVERSION_ID=&quot;24.04&quot;\nVERSION=&quot;24.04.1 LTS (Noble Numbat)&quot;\nVERSION_CODENAME=noble\nID=ubuntu\nID_LIKE=debian\nHOME_URL=&quot;https://www.ubuntu.com/&quot;\n<span class=\"t-cmd\"><span class=\"t-ps\">$</span> uname -r</span>\n6.8.0-45-generic\n<span class=\"t-cmd\"><span class=\"t-ps\">$</span> uptime</span>\n 10:00:06 up 1:00,  1 user,  load average: 0.08, 0.03, 0.01</code></pre></div>\n<ul><li><code dir=\"ltr\">whoami</code>: المستخدم الحالي، و <code dir=\"ltr\">hostname</code>: اسم الجهاز.</li><li><code dir=\"ltr\">pwd</code> (Print Working Directory): المجلد الحالي.</li><li><code dir=\"ltr\">/etc/os-release</code> ملف يصف التوزيعة وإصدارها، و <code dir=\"ltr\">uname -r</code> إصدار النواة.</li></ul>\n<h2>شكل الأمر</h2>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>الأمر   الخيارات   الوسائط\nls      -l -a      /home</code></pre></div>\n<p>الخيارات تبدأ بـ <code dir=\"ltr\">-</code> ويمكن دمجها: <code dir=\"ltr\">ls -l -a</code> مثل <code dir=\"ltr\">ls -la</code>. وكل أمر يرجع <strong>رمز خروج</strong>: <code dir=\"ltr\">0</code> نجاح، وغيره فشل، ويُقرأ بـ <code dir=\"ltr\">$?</code>:</p>\n<div class=\"code-block term\"><span class=\"code-label\">الطرفية</span><pre dir=\"ltr\"><code><span class=\"t-cmd\"><span class=\"t-ps\">$</span> ls /nothing</span>\n<span class=\"t-err\">ls: cannot access &#x27;/nothing&#x27;: No such file or directory</span>\n<span class=\"t-cmd\"><span class=\"t-ps\">$</span> echo $?</span>\n2\n<span class=\"t-cmd\"><span class=\"t-ps\">$</span> ls / &gt; /dev/null &amp;&amp; echo &quot;worked&quot;</span>\nworked\n<span class=\"t-cmd\"><span class=\"t-ps\">$</span> ls /nothing 2&gt; /dev/null || echo &quot;failed quietly&quot;</span>\nfailed quietly</code></pre></div>\n<ul><li><code dir=\"ltr\">&amp;&amp;</code>: نفّذ التالي فقط إذا نجح السابق، و <code dir=\"ltr\">||</code>: فقط إذا فشل.</li><li><code dir=\"ltr\">&gt; /dev/null</code> يرمي المخرجات، و <code dir=\"ltr\">2&gt;</code> يحوّل رسائل <strong>الخطأ</strong> وحدها.</li></ul>",
   "exercise": {
    "prompt": "<p>اكتب أوامر تعرض معلومات النظام، ثم تحفظها في ملف تقرير:</p>\n<ol><li>احفظ اسم المستخدم الحالي في الملف <code dir=\"ltr\">report.txt</code> (استخدم <code dir=\"ltr\">&gt;</code>).</li><li>أضف اسم الجهاز إلى نفس الملف (استخدم <code dir=\"ltr\">&gt;&gt;</code> لكي لا تمسح السطر الأول).</li><li>أضف إصدار النواة (<code dir=\"ltr\">uname -r</code>).</li><li>اعرض الملف بـ <code dir=\"ltr\">cat</code>.</li></ol>",
    "starter": "# اكتب الأوامر هنا، كل أمر في سطر",
    "solution": "whoami > report.txt\nhostname >> report.txt\nuname -r >> report.txt\ncat report.txt",
    "test": "@check file /home/sara/report.txt",
    "expected": "sara\nubuntu\n6.8.0-45-generic"
   },
   "quiz": [
    {
     "q": "ما الفرق بين Linux و Ubuntu؟",
     "o": [
      "Linux هو النواة، و Ubuntu توزيعة تضم النواة مع أدوات ومدير حزم",
      "لا فرق",
      "Ubuntu أقدم من Linux"
     ],
     "a": 0,
     "why": "مثل Debian و Fedora: توزيعات مختلفة على نفس النواة."
    },
    {
     "q": "أي إصدار من Ubuntu تختار لخادم إنتاج؟",
     "o": [
      "إصدار LTS لأنه يحصل على تحديثات أمنية لسنوات",
      "آخر إصدار تجريبي",
      "أي إصدار"
     ],
     "a": 0,
     "why": "مثل 24.04 LTS."
    },
    {
     "q": "ماذا يعني رمز الخروج 0؟",
     "o": [
      "نجح الأمر",
      "فشل الأمر",
      "لم يُنفَّذ"
     ],
     "a": 0,
     "why": "أي رقم غير الصفر يعني نوعاً من الفشل."
    },
    {
     "q": "ما الفرق بين &gt; و &gt;&gt;؟",
     "o": [
      "&gt; يستبدل محتوى الملف، و &gt;&gt; يضيف في نهايته",
      "لا فرق",
      "&gt;&gt; يحذف الملف"
     ],
     "a": 0,
     "why": "خطأ شائع: استخدام &gt; فيضيع المحتوى القديم."
    }
   ]
  },
  {
   "body": "<h2>شجرة واحدة تبدأ من /</h2>\n<p>لا توجد أقراص C و D في Linux: كل شيء شجرة واحدة جذرها **<code dir=\"ltr\">/</code>**، والأقراص تُركَّب (Mount) كمجلدات داخلها.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>المجلد</th><th>ما فيه</th></tr></thead><tbody><tr><td><code dir=\"ltr\">/home</code></td><td>مجلدات المستخدمين (<code dir=\"ltr\">/home/sara</code>)</td></tr><tr><td><code dir=\"ltr\">/root</code></td><td>مجلد المدير root</td></tr><tr><td><code dir=\"ltr\">/etc</code></td><td><strong>ملفات الإعدادات</strong> للنظام والبرامج</td></tr><tr><td><code dir=\"ltr\">/var</code></td><td>بيانات متغيرة: <strong>السجلات</strong> في <code dir=\"ltr\">/var/log</code>، ومواقع الويب في <code dir=\"ltr\">/var/www</code></td></tr><tr><td><code dir=\"ltr\">/usr</code></td><td>البرامج والمكتبات (<code dir=\"ltr\">/usr/bin</code>)</td></tr><tr><td><code dir=\"ltr\">/tmp</code></td><td>ملفات مؤقتة يكتب فيها الجميع</td></tr><tr><td><code dir=\"ltr\">/bin</code> و <code dir=\"ltr\">/sbin</code></td><td>الأوامر الأساسية (اختصارات لـ <code dir=\"ltr\">/usr/bin</code>)</td></tr><tr><td><code dir=\"ltr\">/dev</code> و <code dir=\"ltr\">/proc</code></td><td>الأجهزة والعمليات كملفات</td></tr></tbody></table></div>\n<p>ومن الناحية الأمنية: <code dir=\"ltr\">/etc</code> و <code dir=\"ltr\">/var/log</code> أول ما يفحصه المحقق، و <code dir=\"ltr\">/tmp</code> مكان يحبه المهاجمون لأن الجميع يكتب فيه.</p>\n<h2>التنقل</h2>\n<div class=\"code-block term\"><span class=\"code-label\">الطرفية</span><pre dir=\"ltr\"><code><span class=\"t-cmd\"><span class=\"t-ps\">$</span> cd /etc</span>\n<span class=\"t-cmd\"><span class=\"t-ps\">$</span> pwd</span>\n/etc\n<span class=\"t-cmd\"><span class=\"t-ps\">$</span> ls ssh</span>\nsshd_config\n<span class=\"t-cmd\"><span class=\"t-ps\">$</span> cd ..</span>\n<span class=\"t-cmd\"><span class=\"t-ps\">$</span> pwd</span>\n/\n<span class=\"t-cmd\"><span class=\"t-ps\">$</span> cd ~</span>\n<span class=\"t-cmd\"><span class=\"t-ps\">$</span> pwd</span>\n/home/sara\n<span class=\"t-cmd\"><span class=\"t-ps\">$</span> cd /var/log &amp;&amp; ls</span>\nauth.log  nginx  syslog</code></pre></div>\n<div class=\"table-wrap\"><table><thead><tr><th>المسار</th><th>معناه</th></tr></thead><tbody><tr><td><code dir=\"ltr\">/etc/ssh</code></td><td><strong>مطلق</strong>: يبدأ من الجذر</td></tr><tr><td><code dir=\"ltr\">ssh</code></td><td><strong>نسبي</strong>: من المجلد الحالي</td></tr><tr><td><code dir=\"ltr\">.</code> و <code dir=\"ltr\">..</code></td><td>المجلد الحالي، والمجلد الأب</td></tr><tr><td><code dir=\"ltr\">~</code></td><td>مجلد المستخدم الرئيسي</td></tr></tbody></table></div>\n<h2>ls وتفاصيل الملفات</h2>\n<div class=\"code-block term\"><span class=\"code-label\">الطرفية</span><pre dir=\"ltr\"><code><span class=\"t-cmd\"><span class=\"t-ps\">$</span> ls -la</span>\ntotal 20\ndrwxr-xr-x 3 root   root 4096 Nov  8 09:00 .\ndrwxr-xr-x 7 root   root 4096 Nov  8 09:00 ..\n-rw-r----- 1 syslog adm  1371 Nov  8 09:00 auth.log\ndrwxr-xr-x 2 root   root 4096 Nov  8 09:00 nginx\n-rw-r----- 1 syslog adm   661 Nov  8 09:00 syslog\n<span class=\"t-cmd\"><span class=\"t-ps\">$</span> ls -l /etc/passwd /etc/shadow</span>\n-rw-r--r-- 1 root root 404 Nov  8 09:00 /etc/passwd\n-rw-r----- 1 root shadow 308 Nov  8 09:00 /etc/shadow</code></pre></div>\n<p>قراءة السطر: <code dir=\"ltr\">-rw-r--r-- 1 root root 535 Nov 8 09:00 /etc/passwd</code></p>\n<ol><li>النوع والصلاحيات: <code dir=\"ltr\">-</code> ملف عادي، و <code dir=\"ltr\">d</code> مجلد، و <code dir=\"ltr\">l</code> رابط (التفاصيل في درس الصلاحيات).</li><li>عدد الروابط، ثم <strong>المالك</strong> ثم <strong>المجموعة</strong>.</li><li>الحجم بالبايت، ووقت آخر تعديل، والاسم.</li></ol>\n<ul><li><code dir=\"ltr\">-a</code> يُظهر الملفات <strong>المخفية</strong> (التي تبدأ بنقطة مثل <code dir=\"ltr\">.bashrc</code>).</li><li>لاحظ أن <code dir=\"ltr\">/etc/shadow</code> (فيه بصمات كلمات المرور) لا يقرؤه إلا root ومجموعة shadow.</li></ul>\n<h2>البحث عن الملفات: find</h2>\n<div class=\"code-block term\"><span class=\"code-label\">الطرفية</span><pre dir=\"ltr\"><code><span class=\"t-cmd\"><span class=\"t-ps\">$</span> find /etc -name &quot;*.conf&quot; 2&gt; /dev/null</span>\n<span class=\"t-cmd\"><span class=\"t-ps\">$</span> find /home -type d</span>\n/home\n/home/sara\n<span class=\"t-cmd\"><span class=\"t-ps\">$</span> find /usr/bin -name &quot;pass*&quot;</span>\n/usr/bin/passwd</code></pre></div>\n<p><code dir=\"ltr\">find</code> يبحث بالاسم (<code dir=\"ltr\">-name</code>) أو النوع (<code dir=\"ltr\">-type f</code> ملف و <code dir=\"ltr\">-type d</code> مجلد) أو المالك (<code dir=\"ltr\">-user</code>) أو الصلاحيات (<code dir=\"ltr\">-perm</code>)، وسنستخدمه في التدقيق الأمني.</p>",
   "exercise": {
    "prompt": "<p>نظّم مجلد مشروع ويب في مجلدك الرئيسي:</p>\n<ol><li>أنشئ المسار <code dir=\"ltr\">site/assets/css</code> دفعة واحدة (<code dir=\"ltr\">mkdir -p</code>).</li><li>أنشئ المجلد <code dir=\"ltr\">site/logs</code>.</li><li>أنشئ ملفاً فارغاً <code dir=\"ltr\">site/index.html</code> وملفاً <code dir=\"ltr\">site/assets/css/style.css</code> (بـ <code dir=\"ltr\">touch</code>).</li><li>انتقل إلى <code dir=\"ltr\">site</code> واعرض محتواه بـ <code dir=\"ltr\">ls</code>.</li></ol>",
    "starter": "# اكتب الأوامر هنا",
    "solution": "mkdir -p site/assets/css\nmkdir site/logs\ntouch site/index.html site/assets/css/style.css\ncd site\nls",
    "test": "find /home/sara/site",
    "expected": "/home/sara/site\n/home/sara/site/assets\n/home/sara/site/assets/css\n/home/sara/site/assets/css/style.css\n/home/sara/site/index.html\n/home/sara/site/logs"
   },
   "quiz": [
    {
     "q": "أين تُحفظ ملفات الإعدادات عادة في Linux؟",
     "o": [
      "/etc",
      "/home",
      "/tmp"
     ],
     "a": 0,
     "why": "مثل /etc/ssh/sshd_config."
    },
    {
     "q": "أين تجد السجلات (Logs)؟",
     "o": [
      "/var/log",
      "/usr/bin",
      "/root"
     ],
     "a": 0,
     "why": "مثل auth.log لمحاولات الدخول."
    },
    {
     "q": "ما الفرق بين المسار المطلق والنسبي؟",
     "o": [
      "المطلق يبدأ من / الجذر، والنسبي يبدأ من المجلد الحالي",
      "لا فرق",
      "النسبي يبدأ دائماً من ~"
     ],
     "a": 0,
     "why": "/etc/ssh مطلق، و ssh نسبي."
    },
    {
     "q": "كيف تعرض الملفات المخفية مع ls؟",
     "o": [
      "ls -a",
      "ls -h",
      "ls --hidden"
     ],
     "a": 0,
     "why": "الملفات المخفية تبدأ بنقطة."
    }
   ]
  },
  {
   "body": "<h2>إنشاء الملفات وقراءتها</h2>\n<div class=\"code-block term\"><span class=\"code-label\">الطرفية</span><pre dir=\"ltr\"><code><span class=\"t-cmd\"><span class=\"t-ps\">$</span> echo &quot;first line&quot; &gt; notes.txt</span>\n<span class=\"t-cmd\"><span class=\"t-ps\">$</span> echo &quot;second line&quot; &gt;&gt; notes.txt</span>\n<span class=\"t-cmd\"><span class=\"t-ps\">$</span> cat notes.txt</span>\nfirst line\nsecond line\n<span class=\"t-cmd\"><span class=\"t-ps\">$</span> cat &gt; todo.txt &lt;&lt;EOF</span>\n<span class=\"t-cmd\"><span class=\"t-ps\">&gt;</span> backup database</span>\n<span class=\"t-cmd\"><span class=\"t-ps\">&gt;</span> update packages</span>\n<span class=\"t-cmd\"><span class=\"t-ps\">&gt;</span> review logs</span>\n<span class=\"t-cmd\"><span class=\"t-ps\">&gt;</span> EOF</span>\n<span class=\"t-cmd\"><span class=\"t-ps\">$</span> wc -l todo.txt</span>\n3 todo.txt\n<span class=\"t-cmd\"><span class=\"t-ps\">$</span> head -n 1 todo.txt</span>\nbackup database\n<span class=\"t-cmd\"><span class=\"t-ps\">$</span> tail -n 2 todo.txt</span>\nupdate packages\nreview logs</code></pre></div>\n<ul><li><code dir=\"ltr\">cat</code> يعرض الملف كاملاً، و <code dir=\"ltr\">head</code> و <code dir=\"ltr\">tail</code> البداية والنهاية (<code dir=\"ltr\">tail</code> مفيد جداً للسجلات).</li><li><code dir=\"ltr\">cat &gt; file &lt;&lt;EOF ... EOF</code> يكتب عدة أسطر في ملف (Here Document).</li><li><code dir=\"ltr\">wc -l</code> يعدّ الأسطر.</li></ul>\n<h2>النسخ والنقل والحذف</h2>\n<div class=\"code-block term\"><span class=\"code-label\">الطرفية</span><pre dir=\"ltr\"><code><span class=\"t-cmd\"><span class=\"t-ps\">$</span> mkdir backup</span>\n<span class=\"t-cmd\"><span class=\"t-ps\">$</span> cp notes.txt backup/</span>\n<span class=\"t-cmd\"><span class=\"t-ps\">$</span> mv todo.txt tasks.txt</span>\n<span class=\"t-cmd\"><span class=\"t-ps\">$</span> ls</span>\nbackup  notes.txt  tasks.txt\n<span class=\"t-cmd\"><span class=\"t-ps\">$</span> rm notes.txt</span>\n<span class=\"t-cmd\"><span class=\"t-ps\">$</span> rm backup</span>\n<span class=\"t-err\">rm: cannot remove &#x27;backup&#x27;: Is a directory</span>\n<span class=\"t-cmd\"><span class=\"t-ps\">$</span> rm -r backup</span>\n<span class=\"t-cmd\"><span class=\"t-ps\">$</span> ls</span>\ntasks.txt</code></pre></div>\n<div class=\"callout warn\">⚠️ لا سلة محذوفات في الطرفية: <code dir=\"ltr\">rm</code> يحذف نهائياً. و <code dir=\"ltr\">rm -rf</code> بصلاحيات المدير على مسار خاطئ قد يدمر النظام كله، فاقرأ الأمر مرتين قبل تنفيذه.</div>\n<h2>الأنابيب |: قوة الطرفية</h2>\n<p>الأنبوب <code dir=\"ltr\">|</code> يمرر <strong>مخرجات</strong> أمر إلى <strong>مدخلات</strong> الأمر التالي، فتبني من أدوات صغيرة أداة تحليل كاملة. مثلاً: من حاول الدخول بكلمة مرور خاطئة إلى هذا الخادم؟</p>\n<div class=\"code-block term\"><span class=\"code-label\">الطرفية</span><pre dir=\"ltr\"><code><span class=\"t-cmd\"><span class=\"t-ps\">$</span> grep &quot;Failed password&quot; /var/log/auth.log | head -n 3</span>\n2026-11-08T09:12:00.000123+00:00 ubuntu sshd[2312]: Failed password for invalid user admin from 203.0.113.50 port 50120 ssh2\n2026-11-08T09:12:03.000123+00:00 ubuntu sshd[2313]: Failed password for root from 203.0.113.50 port 50121 ssh2\n2026-11-08T09:12:06.000123+00:00 ubuntu sshd[2314]: Failed password for invalid user test from 203.0.113.50 port 50122 ssh2\n<span class=\"t-cmd\"><span class=\"t-ps\">$</span> grep -c &quot;Failed password&quot; /var/log/auth.log</span>\n7\n<span class=\"t-cmd\"><span class=\"t-ps\">$</span> grep &quot;Failed password&quot; /var/log/auth.log | awk &#x27;{print $(NF-3)}&#x27; | sort | uniq -c | sort -rn</span>\n      5 203.0.113.50\n      2 198.51.100.23</code></pre></div>\n<div class=\"table-wrap\"><table><thead><tr><th>الأداة</th><th>وظيفتها</th></tr></thead><tbody><tr><td><code dir=\"ltr\">grep نص</code></td><td>الأسطر التي فيها النص (<code dir=\"ltr\">-c</code> العدد، و <code dir=\"ltr\">-i</code> بلا حالة أحرف، و <code dir=\"ltr\">-v</code> العكس)</td></tr><tr><td><code dir=\"ltr\">awk &#x27;{print $1}&#x27;</code></td><td>حقل معين من كل سطر (<code dir=\"ltr\">$NF</code> آخر حقل)</td></tr><tr><td><code dir=\"ltr\">cut -d: -f1</code></td><td>حقل بفاصل محدد</td></tr><tr><td><code dir=\"ltr\">sort</code></td><td>ترتيب (<code dir=\"ltr\">-n</code> رقمي، و <code dir=\"ltr\">-r</code> عكسي)</td></tr><tr><td><code dir=\"ltr\">uniq -c</code></td><td>عدّ الأسطر المتكررة المتتالية (لذلك نرتب قبله)</td></tr></tbody></table></div>\n<p>هذا السطر الأخير مهارة حقيقية يستخدمها محللو الأمن يومياً: عنوان واحد حاول 5 مرات خلال ثوانٍ، أي هجوم تخمين كلمات مرور (Brute Force).</p>\n<div class=\"code-block term\"><span class=\"code-label\">الطرفية</span><pre dir=\"ltr\"><code><span class=\"t-cmd\"><span class=\"t-ps\">$</span> cut -d: -f1 /etc/passwd | head -n 3</span>\n<span class=\"t-cmd\"><span class=\"t-ps\">$</span> grep &quot;/bin/bash&quot; /etc/passwd | cut -d: -f1</span>\nroot\nsara</code></pre></div>\n<p>السطر الأخير يعرض المستخدمين الذين يملكون طرفية دخول: مراجعة أمنية بسيطة.</p>",
   "exercise": {
    "prompt": "<p>الملف <code dir=\"ltr\">access.log</code> في مجلدك فيه سجل طلبات لخادم ويب (كل سطر: العنوان ثم المسار ثم رمز الحالة).</p>\n<p>اكتب أنبوباً واحداً يعرض <strong>العناوين التي حصلت على رمز 404</strong> مع عدد مرات كل عنوان، مرتبة تنازلياً بالعدد:</p>\n<ul><li><code dir=\"ltr\">grep &quot; 404&quot;</code> لأسطر 404.</li><li><code dir=\"ltr\">awk &#x27;{print $1}&#x27;</code> للعنوان.</li><li><code dir=\"ltr\">sort</code> ثم <code dir=\"ltr\">uniq -c</code> ثم <code dir=\"ltr\">sort -rn</code>.</li><li>واحفظ النتيجة في الملف <code dir=\"ltr\">suspects.txt</code> بـ <code dir=\"ltr\">&gt;</code>.</li></ul>",
    "setup": "@file /home/sara/access.log 644 sara 10.0.0.5 /index.html 200\\n203.0.113.7 /admin 404\\n10.0.0.5 /about.html 200\\n203.0.113.7 /wp-login.php 404\\n198.51.100.2 /old 404\\n203.0.113.7 /.env 404\\n10.0.0.8 /index.html 200\\n",
    "starter": "# اكتب الأنبوب هنا",
    "solution": "grep \" 404\" access.log | awk '{print $1}' | sort | uniq -c | sort -rn > suspects.txt",
    "test": "@check file /home/sara/suspects.txt",
    "expected": "      3 203.0.113.7\n      1 198.51.100.2"
   },
   "quiz": [
    {
     "q": "ماذا يفعل الأنبوب | ؟",
     "o": [
      "يمرر مخرجات الأمر الأول كمدخلات للأمر الثاني",
      "يحفظ المخرجات في ملف",
      "ينفذ الأمرين بالتوازي دون علاقة"
     ],
     "a": 0,
     "why": "هكذا تُبنى أدوات تحليل من أوامر صغيرة."
    },
    {
     "q": "لماذا نستخدم sort قبل uniq -c؟",
     "o": [
      "لأن uniq يدمج الأسطر المتكررة المتتالية فقط",
      "لأن uniq لا يعمل بدونه",
      "لترتيب النتيجة النهائية فقط"
     ],
     "a": 0,
     "why": "الترتيب يجعل المتكرر متجاوراً."
    },
    {
     "q": "ما خطورة rm -rf؟",
     "o": [
      "يحذف المجلدات بمحتواها نهائياً دون سؤال",
      "يحذف الملفات المخفية فقط",
      "لا يحذف شيئاً"
     ],
     "a": 0,
     "why": "لا توجد سلة محذوفات."
    },
    {
     "q": "عنوان IP ظهر 5 مرات بـ &quot;Failed password&quot; خلال ثوانٍ، ماذا يعني غالباً؟",
     "o": [
      "محاولة تخمين كلمات مرور (Brute Force)",
      "مستخدم نسي كلمة مروره مرة واحدة",
      "تحديث تلقائي"
     ],
     "a": 0,
     "why": "والحل: مفاتيح SSH و fail2ban (في درس SSH)."
    }
   ]
  }
 ],
 [
  {
   "body": "<h2>المستخدمون: من يملك ماذا</h2>\n<p>Linux نظام متعدد المستخدمين: لكل مستخدم رقم <strong>UID</strong>، ومجموعة رئيسية <strong>GID</strong>، ومجلد رئيسي، وطرفية. و <strong>root</strong> (UID 0) هو المدير الذي يستطيع كل شيء.</p>\n<div class=\"code-block term\"><span class=\"code-label\">الطرفية</span><pre dir=\"ltr\"><code><span class=\"t-cmd\"><span class=\"t-ps\">$</span> id</span>\nuid=1000(sara) gid=1000(sara) groups=1000(sara),4(adm),27(sudo)\n<span class=\"t-cmd\"><span class=\"t-ps\">$</span> grep sara /etc/passwd</span>\nsara:x:1000:1000:Sara:/home/sara:/bin/bash\n<span class=\"t-cmd\"><span class=\"t-ps\">$</span> tail -n 4 /etc/passwd</span>\nnobody:x:65534:65534:nobody:/nonexistent:/usr/sbin/nologin\nsyslog:x:102:102::/nonexistent:/usr/sbin/nologin\nsshd:x:105:65534::/run/sshd:/usr/sbin/nologin\nsara:x:1000:1000:Sara:/home/sara:/bin/bash</code></pre></div>\n<p>سطر <code dir=\"ltr\">/etc/passwd</code>: <code dir=\"ltr\">الاسم:x:UID:GID:الوصف:المجلد:الطرفية</code>.</p>\n<ul><li><code dir=\"ltr\">x</code> يعني أن بصمة كلمة المرور في <code dir=\"ltr\">/etc/shadow</code> المحمي، لا هنا.</li><li><strong>حسابات الخدمات</strong> مثل <code dir=\"ltr\">www-data</code> طرفيتها <code dir=\"ltr\">/usr/sbin/nologin</code>: لا يمكن الدخول بها، فلو اختُرق خادم الويب لا يحصل المهاجم على طرفية بسهولة.</li></ul>\n<h2>sudo: صلاحيات المدير عند الحاجة فقط</h2>\n<p>لا تعمل كـ root دائماً. أعضاء مجموعة <code dir=\"ltr\">sudo</code> ينفذون أمراً واحداً بصلاحيات المدير بكتابة <code dir=\"ltr\">sudo</code> قبله، وكل استخدام يُسجَّل:</p>\n<div class=\"code-block term\"><span class=\"code-label\">الطرفية</span><pre dir=\"ltr\"><code><span class=\"t-cmd\"><span class=\"t-ps\">$</span> cat /etc/shadow</span>\n<span class=\"t-err\">cat: /etc/shadow: Permission denied</span>\n<span class=\"t-cmd\"><span class=\"t-ps\">$</span> sudo head -n 2 /etc/shadow</span>\nroot:*:20400:0:99999:7:::\ndaemon:*:20400:0:99999:7:::\n<span class=\"t-cmd\"><span class=\"t-ps\">$</span> sudo -l</span>\nMatching Defaults entries for sara on ubuntu:\n    env_reset, mail_badpass, secure_path=/usr/local/sbin\\:/usr/local/bin\\:/usr/sbin\\:/usr/bin\\:/sbin\\:/bin\\:/snap/bin, use_pty\n\nUser sara may run the following commands on ubuntu:\n    (ALL : ALL) ALL\n<span class=\"t-cmd\"><span class=\"t-ps\">$</span> grep &quot;COMMAND&quot; /var/log/auth.log | tail -n 1</span>\n2026-11-08T10:00:05.000123+00:00 ubuntu sudo[2600]:     sara : TTY=pts/0 ; PWD=/home/sara ; USER=root ; COMMAND=/usr/bin/head -n 2 /etc/shadow</code></pre></div>\n<p>في الطرفية الحقيقية يطلب <code dir=\"ltr\">sudo</code> كلمة مرورك أول مرة. و <code dir=\"ltr\">*</code> في <code dir=\"ltr\">/etc/shadow</code> يعني حساباً بلا كلمة مرور صالحة للدخول.</p>\n<h2>إنشاء المستخدمين وإدارتهم</h2>\n<div class=\"code-block term\"><span class=\"code-label\">الطرفية</span><pre dir=\"ltr\"><code><span class=\"t-cmd\"><span class=\"t-ps\">$</span> sudo useradd -m -s /bin/bash -c &quot;Ali Hassan&quot; ali</span>\n<span class=\"t-cmd\"><span class=\"t-ps\">$</span> id ali</span>\nuid=1001(ali) gid=1001(ali) groups=1001(ali)\n<span class=\"t-cmd\"><span class=\"t-ps\">$</span> sudo ls -la /home/ali</span>\ntotal 20\ndrwxr-x--- 2 ali  ali  4096 Nov  8 09:00 .\ndrwxr-xr-x 4 root root 4096 Nov  8 09:00 ..\n-rw-r--r-- 1 ali  ali    17 Nov  8 09:00 .bash_logout\n-rw-r--r-- 1 ali  ali    31 Nov  8 09:00 .bashrc\n-rw-r--r-- 1 ali  ali    13 Nov  8 09:00 .profile\n<span class=\"t-cmd\"><span class=\"t-ps\">$</span> sudo groupadd developers</span>\n<span class=\"t-cmd\"><span class=\"t-ps\">$</span> sudo usermod -aG developers ali</span>\n<span class=\"t-cmd\"><span class=\"t-ps\">$</span> groups ali</span>\nali : ali developers\n<span class=\"t-cmd\"><span class=\"t-ps\">$</span> sudo passwd -S ali</span>\nali L 2025-11-08 0 99999 7 -1\n<span class=\"t-cmd\"><span class=\"t-ps\">$</span> sudo passwd ali</span>\nNew password: \nRetype new password: \npasswd: password updated successfully</code></pre></div>\n<div class=\"table-wrap\"><table><thead><tr><th>الأمر</th><th>الوظيفة</th></tr></thead><tbody><tr><td><code dir=\"ltr\">useradd -m -s /bin/bash اسم</code></td><td>مستخدم جديد بمجلد (<code dir=\"ltr\">-m</code>) وطرفية (<code dir=\"ltr\">-s</code>)</td></tr><tr><td><code dir=\"ltr\">usermod -aG مجموعة اسم</code></td><td><strong>إضافة</strong> لمجموعة (بدون <code dir=\"ltr\">-a</code> تُستبدل كل مجموعاته!)</td></tr><tr><td><code dir=\"ltr\">passwd اسم</code></td><td>تعيين كلمة المرور</td></tr><tr><td><code dir=\"ltr\">passwd -l اسم</code> أو <code dir=\"ltr\">usermod -L</code></td><td><strong>قفل</strong> الحساب (لموظف غادر)</td></tr><tr><td><code dir=\"ltr\">userdel -r اسم</code></td><td>حذف المستخدم ومجلده</td></tr><tr><td><code dir=\"ltr\">groupadd</code> و <code dir=\"ltr\">gpasswd -d</code></td><td>إنشاء مجموعة، وإزالة عضو منها</td></tr></tbody></table></div>\n<p><code dir=\"ltr\">L</code> في <code dir=\"ltr\">passwd -S</code> يعني أن الحساب مقفل (لا كلمة مرور بعد)، وبعد تعيينها تصبح <code dir=\"ltr\">P</code>.</p>\n<h2>مبدأ الصلاحيات الدنيا</h2>\n<p>القاعدة الذهبية في الأمن: <strong>كل مستخدم وكل خدمة تحصل على أقل صلاحيات تكفي عملها فقط</strong> (Least Privilege). المطور لا يحتاج sudo على خادم الإنتاج، وخادم الويب لا يحتاج الكتابة على ملفات الإعدادات.</p>\n<div class=\"code-block term\"><span class=\"code-label\">الطرفية</span><pre dir=\"ltr\"><code><span class=\"t-cmd\"><span class=\"t-ps\">$</span> sudo useradd -m -s /bin/bash guest</span>\n<span class=\"t-cmd\"><span class=\"t-ps\">$</span> sudo -u guest cat /etc/shadow</span>\n<span class=\"t-err\">cat: /etc/shadow: Permission denied</span>\n<span class=\"t-cmd\"><span class=\"t-ps\">$</span> sudo -u guest sudo ls /root</span>\n<span class=\"t-err\">guest is not in the sudoers file.</span></code></pre></div>\n<p>ومحاولة الحساب <code dir=\"ltr\">guest</code> استخدام sudo فشلت <strong>وسُجّلت</strong> في <code dir=\"ltr\">/var/log/auth.log</code>: إشارة يراقبها الفريق الأمني.</p>",
   "exercise": {
    "prompt": "<p>موظف جديد اسمه <code dir=\"ltr\">omar</code> في فريق التطوير، وموظف آخر <code dir=\"ltr\">khalid</code> غادر الشركة:</p>\n<ol><li>أنشئ المستخدم <code dir=\"ltr\">omar</code> بمجلد رئيسي وطرفية <code dir=\"ltr\">/bin/bash</code>.</li><li>أنشئ المجموعة <code dir=\"ltr\">devteam</code> وأضف <code dir=\"ltr\">omar</code> لها (دون إزالته من مجموعاته الأخرى).</li><li>أقفل حساب <code dir=\"ltr\">khalid</code> (الموجود مسبقاً) بـ <code dir=\"ltr\">passwd -l</code>.</li></ol>\n<p>تذكّر: هذه الأوامر تحتاج <code dir=\"ltr\">sudo</code>.</p>",
    "setup": "sudo useradd -m -s /bin/bash khalid\nsudo passwd khalid",
    "starter": "# اكتب الأوامر هنا",
    "solution": "sudo useradd -m -s /bin/bash omar\nsudo groupadd devteam\nsudo usermod -aG devteam omar\nsudo passwd -l khalid",
    "test": "@check user omar\n@check user khalid",
    "expected": "omar uid=1002 shell=/bin/bash home=/home/omar groups=omar,devteam locked=true\nkhalid uid=1001 shell=/bin/bash home=/home/khalid groups=khalid locked=true"
   },
   "quiz": [
    {
     "q": "ما UID المستخدم root؟",
     "o": [
      "0",
      "1000",
      "1"
     ],
     "a": 0,
     "why": "وأول مستخدم عادي في Ubuntu يأخذ 1000."
    },
    {
     "q": "لماذا طرفية www-data هي /usr/sbin/nologin؟",
     "o": [
      "لكي لا يستطيع أحد الدخول بهذا الحساب حتى لو اختُرقت الخدمة",
      "لأنه حساب معطل بالخطأ",
      "لتسريع خادم الويب"
     ],
     "a": 0,
     "why": "حسابات الخدمات لا تحتاج دخولاً تفاعلياً."
    },
    {
     "q": "ماذا يحدث لو كتبت usermod -G devteam ali بدون -a؟",
     "o": [
      "تُستبدل كل مجموعات ali الإضافية بـ devteam فقط",
      "يُضاف ali إلى devteam فقط",
      "يُحذف ali"
     ],
     "a": 0,
     "why": "لذلك استخدم -aG دائماً للإضافة."
    },
    {
     "q": "ما مبدأ الصلاحيات الدنيا (Least Privilege)؟",
     "o": [
      "إعطاء كل مستخدم وخدمة أقل صلاحيات تكفي عملها فقط",
      "إعطاء الجميع صلاحيات المدير لتسهيل العمل",
      "منع الجميع من كل شيء"
     ],
     "a": 0,
     "why": "يقلل الضرر إذا اختُرق حساب."
    }
   ]
  },
  {
   "body": "<h2>قراءة الصلاحيات</h2>\n<p>كل ملف له ثلاث فئات: <strong>المالك (u)</strong> و <strong>المجموعة (g)</strong> و <strong>الآخرون (o)</strong>، ولكل فئة ثلاث صلاحيات:</p>\n<div class=\"table-wrap\"><table><thead><tr><th></th><th>على الملف</th><th>على المجلد</th></tr></thead><tbody><tr><td><code dir=\"ltr\">r</code> (4)</td><td>قراءة المحتوى</td><td>عرض الأسماء بـ <code dir=\"ltr\">ls</code></td></tr><tr><td><code dir=\"ltr\">w</code> (2)</td><td>تعديل المحتوى</td><td>إنشاء الملفات وحذفها فيه</td></tr><tr><td><code dir=\"ltr\">x</code> (1)</td><td>تنفيذه كبرنامج</td><td>الدخول إليه بـ <code dir=\"ltr\">cd</code> والوصول لما فيه</td></tr></tbody></table></div>\n<p><code dir=\"ltr\">-rwxr-x---</code> تُقرأ: ملف، المالك <code dir=\"ltr\">rwx</code>، والمجموعة <code dir=\"ltr\">r-x</code>، والآخرون لا شيء. وبالأرقام: نجمع القيم لكل فئة: <code dir=\"ltr\">rwx = 7</code> و <code dir=\"ltr\">r-x = 5</code> و <code dir=\"ltr\">--- = 0</code>، أي <strong>750</strong>.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>الرقم</th><th>الصلاحيات</th><th>الاستخدام الشائع</th></tr></thead><tbody><tr><td><code dir=\"ltr\">644</code></td><td><code dir=\"ltr\">rw-r--r--</code></td><td>ملف عادي يقرؤه الجميع</td></tr><tr><td><code dir=\"ltr\">600</code></td><td><code dir=\"ltr\">rw-------</code></td><td>ملف سري (مفتاح SSH خاص، ملف <code dir=\"ltr\">.env</code>)</td></tr><tr><td><code dir=\"ltr\">755</code></td><td><code dir=\"ltr\">rwxr-xr-x</code></td><td>سكربت أو مجلد عام</td></tr><tr><td><code dir=\"ltr\">700</code></td><td><code dir=\"ltr\">rwx------</code></td><td>مجلد خاص (<code dir=\"ltr\">~/.ssh</code>)</td></tr><tr><td><code dir=\"ltr\">777</code></td><td><code dir=\"ltr\">rwxrwxrwx</code></td><td>⚠️ الجميع يكتب: خطر أمني، تجنبه</td></tr></tbody></table></div>\n<h2>chmod و chown</h2>\n<div class=\"code-block term\"><span class=\"code-label\">الطرفية</span><pre dir=\"ltr\"><code><span class=\"t-cmd\"><span class=\"t-ps\">$</span> echo &quot;DB_PASSWORD=s3cret&quot; &gt; app.env</span>\n<span class=\"t-cmd\"><span class=\"t-ps\">$</span> ls -l app.env</span>\n-rw-rw-r-- 1 sara sara 19 Nov  8 10:00 app.env\n<span class=\"t-cmd\"><span class=\"t-ps\">$</span> chmod 600 app.env</span>\n<span class=\"t-cmd\"><span class=\"t-ps\">$</span> ls -l app.env</span>\n-rw------- 1 sara sara 19 Nov  8 10:00 app.env\n<span class=\"t-cmd\"><span class=\"t-ps\">$</span> cat &gt; deploy.sh &lt;&lt;EOF</span>\n<span class=\"t-cmd\"><span class=\"t-ps\">&gt;</span> echo &quot;deploying as $USER&quot;</span>\n<span class=\"t-cmd\"><span class=\"t-ps\">&gt;</span> EOF</span>\n<span class=\"t-cmd\"><span class=\"t-ps\">$</span> ./deploy.sh</span>\n<span class=\"t-err\">bash: ./deploy.sh: Permission denied</span>\n<span class=\"t-cmd\"><span class=\"t-ps\">$</span> chmod u+x deploy.sh</span>\n<span class=\"t-cmd\"><span class=\"t-ps\">$</span> ./deploy.sh</span>\ndeploying as sara\n<span class=\"t-cmd\"><span class=\"t-ps\">$</span> chmod go-r deploy.sh</span>\n<span class=\"t-cmd\"><span class=\"t-ps\">$</span> stat -c &quot;%a %A %U:%G %n&quot; app.env deploy.sh</span>\n600 -rw------- sara:sara app.env\n720 -rwx-w---- sara:sara deploy.sh\n<span class=\"t-cmd\"><span class=\"t-ps\">$</span> chown root app.env</span>\n<span class=\"t-err\">chown: changing ownership of &#x27;app.env&#x27;: Operation not permitted</span>\n<span class=\"t-cmd\"><span class=\"t-ps\">$</span> sudo chown root:root app.env</span>\n<span class=\"t-cmd\"><span class=\"t-ps\">$</span> cat app.env</span>\n<span class=\"t-err\">cat: app.env: Permission denied</span></code></pre></div>\n<ul><li>الصيغة الرمزية: <code dir=\"ltr\">u+x</code> أضف التنفيذ للمالك، و <code dir=\"ltr\">go-r</code> أزل القراءة من المجموعة والآخرين، و <code dir=\"ltr\">a=r</code> للجميع قراءة فقط.</li><li><code dir=\"ltr\">chown مالك:مجموعة ملف</code> يغيّر الملكية ويحتاج root.</li><li>الملفات الجديدة تأخذ <code dir=\"ltr\">664</code> والمجلدات <code dir=\"ltr\">775</code> بسبب <strong>umask</strong> (<code dir=\"ltr\">0002</code>) الذي يحذف صلاحية الكتابة من الآخرين.</li></ul>\n<h2>الصلاحيات الخاصة: SUID</h2>\n<p>إذا كان على البرنامج بت <strong>SUID</strong> (يظهر <code dir=\"ltr\">s</code> مكان <code dir=\"ltr\">x</code>) فإنه يعمل بصلاحيات <strong>مالكه</strong> لا من شغّله. <code dir=\"ltr\">passwd</code> مثلاً يحتاجه ليكتب في <code dir=\"ltr\">/etc/shadow</code>:</p>\n<div class=\"code-block term\"><span class=\"code-label\">الطرفية</span><pre dir=\"ltr\"><code><span class=\"t-cmd\"><span class=\"t-ps\">$</span> ls -l /usr/bin/passwd</span>\n-rwsr-xr-x 1 root root 4 Nov  8 09:00 /usr/bin/passwd\n<span class=\"t-cmd\"><span class=\"t-ps\">$</span> find /usr/bin -perm -4000 -type f</span>\n/usr/bin/chfn\n/usr/bin/chsh\n/usr/bin/gpasswd\n/usr/bin/mount\n/usr/bin/newgrp\n/usr/bin/passwd\n/usr/bin/su\n/usr/bin/sudo\n/usr/bin/umount</code></pre></div>\n<p>برنامج SUID مملوك لـ root فيه ثغرة يعني صلاحيات root للمهاجم، لذلك يراجع المدافعون قائمة ملفات SUID دورياً ويحققون في أي ملف غير متوقع فيها. وكذلك الملفات التي يكتب فيها الجميع:</p>\n<div class=\"code-block term\"><span class=\"code-label\">الطرفية</span><pre dir=\"ltr\"><code><span class=\"t-cmd\"><span class=\"t-ps\">$</span> ls -ld /tmp</span>\ndrwxrwxrwt 2 root root 4096 Nov  8 09:00 /tmp</code></pre></div>\n<p><code dir=\"ltr\">t</code> في نهاية <code dir=\"ltr\">/tmp</code> هو <strong>Sticky Bit</strong>: الجميع يكتب فيه، لكن لا يحذف أحد ملفات غيره.</p>",
   "exercise": {
    "prompt": "<p>مجلد تطبيق في <code dir=\"ltr\">/home/sara/app</code> صلاحياته خاطئة. أصلحها:</p>\n<ol><li>الملف <code dir=\"ltr\">app/config.env</code> (فيه أسرار): للمالك قراءة وكتابة فقط (<code dir=\"ltr\">600</code>).</li><li>السكربت <code dir=\"ltr\">app/start.sh</code>: للمالك كل الصلاحيات، وللمجموعة قراءة وتنفيذ، ولا شيء للآخرين (<code dir=\"ltr\">750</code>).</li><li>المجلد <code dir=\"ltr\">app/uploads</code> حالياً <code dir=\"ltr\">777</code>: اجعله <code dir=\"ltr\">755</code> (المالك فقط يكتب).</li><li>الملف <code dir=\"ltr\">app/README.md</code>: قراءة للجميع وكتابة للمالك (<code dir=\"ltr\">644</code>).</li></ol>",
    "setup": "@dir /home/sara/app 775 sara:sara\n@file /home/sara/app/config.env 666 sara:sara API_KEY=abc123\n@file /home/sara/app/start.sh 777 sara:sara echo start\n@dir /home/sara/app/uploads 777 sara:sara\n@file /home/sara/app/README.md 600 sara:sara # App",
    "starter": "# اكتب الأوامر هنا\nls -l app",
    "solution": "chmod 600 app/config.env\nchmod 750 app/start.sh\nchmod 755 app/uploads\nchmod 644 app/README.md\nls -l app",
    "test": "@check perm /home/sara/app/config.env\n@check perm /home/sara/app/start.sh\n@check perm /home/sara/app/uploads\n@check perm /home/sara/app/README.md",
    "expected": "/home/sara/app/config.env 600 sara:sara\n/home/sara/app/start.sh 750 sara:sara\n/home/sara/app/uploads 755 sara:sara\n/home/sara/app/README.md 644 sara:sara"
   },
   "quiz": [
    {
     "q": "ما الصلاحيات الرقمية لـ rwxr-x---؟",
     "o": [
      "750",
      "755",
      "640"
     ],
     "a": 0,
     "why": "7 = rwx و 5 = r-x و 0 = لا شيء."
    },
    {
     "q": "ما الصلاحيات المناسبة لمفتاح SSH الخاص؟",
     "o": [
      "600",
      "644",
      "777"
     ],
     "a": 0,
     "why": "لا يقرؤه أحد غير مالكه، و ssh يرفض المفتاح إن كان مكشوفاً."
    },
    {
     "q": "ماذا تعني صلاحية x على مجلد؟",
     "o": [
      "القدرة على الدخول إليه والوصول للملفات داخله",
      "تنفيذ المجلد كبرنامج",
      "حذف المجلد"
     ],
     "a": 0,
     "why": "و r على المجلد لعرض أسماء ما فيه."
    },
    {
     "q": "لماذا يراجع المدافعون ملفات SUID؟",
     "o": [
      "لأنها تعمل بصلاحيات مالكها (غالباً root)، فأي ثغرة فيها تعطي المهاجم صلاحيات root",
      "لأنها كبيرة الحجم",
      "لأنها ملفات مؤقتة"
     ],
     "a": 0,
     "why": "الملفات غير المتوقعة في القائمة علامة اختراق محتملة."
    }
   ]
  },
  {
   "body": "<h2>مدير الحزم apt</h2>\n<p>في Ubuntu لا تنزّل البرامج من مواقع عشوائية: <strong>apt</strong> يثبتها من <strong>مستودعات</strong> رسمية موقّعة رقمياً، ويحل الاعتماديات، ويحدّثها كلها بأمر واحد.</p>\n<div class=\"code-block term\"><span class=\"code-label\">الطرفية</span><pre dir=\"ltr\"><code><span class=\"t-cmd\"><span class=\"t-ps\">$</span> apt install tree</span>\n<span class=\"t-err\">E: Could not open lock file /var/lib/dpkg/lock-frontend - open (13: Permission denied)</span>\n<span class=\"t-err\">E: Unable to acquire the dpkg frontend lock (/var/lib/dpkg/lock-frontend), are you root?</span>\n<span class=\"t-cmd\"><span class=\"t-ps\">$</span> sudo apt update</span>\nHit:1 http://archive.ubuntu.com/ubuntu noble InRelease\nGet:2 http://archive.ubuntu.com/ubuntu noble-updates InRelease [126 kB]\nGet:3 http://security.ubuntu.com/ubuntu noble-security InRelease [126 kB]\nFetched 252 kB in 1s (252 kB/s)\nReading package lists... Done\nBuilding dependency tree... Done\nReading state information... Done\n3 packages can be upgraded. Run &#x27;apt list --upgradable&#x27; to see them.\n<span class=\"t-cmd\"><span class=\"t-ps\">$</span> sudo apt install -y tree</span>\nReading package lists... Done\nBuilding dependency tree... Done\nReading state information... Done\nThe following NEW packages will be installed:\n  tree\n0 upgraded, 1 newly installed, 0 to remove and 3 not upgraded.\nNeed to get 47.1 kB of archives.\nAfter this operation, 111 kB of additional disk space will be used.\nGet:1 http://archive.ubuntu.com/ubuntu noble/universe amd64 tree amd64 2.1.1-2ubuntu3 [47.1 kB]\nSelecting previously unselected package tree.\nPreparing to unpack .../tree_2.1.1-2ubuntu3_amd64.deb ...\nUnpacking tree (2.1.1-2ubuntu3) ...\nSetting up tree (2.1.1-2ubuntu3) ...\nProcessing triggers for man-db (2.12.0-4build2) ...\n<span class=\"t-cmd\"><span class=\"t-ps\">$</span> tree /etc/ssh</span>\n/etc/ssh\n└── sshd_config\n\n0 directories, 1 file</code></pre></div>\n<div class=\"table-wrap\"><table><thead><tr><th>الأمر</th><th>الوظيفة</th></tr></thead><tbody><tr><td><code dir=\"ltr\">apt update</code></td><td>يحدّث <strong>قائمة</strong> الحزم المتاحة (لا يثبت شيئاً)</td></tr><tr><td><code dir=\"ltr\">apt upgrade</code></td><td>يرقّي الحزم المثبتة لآخر إصدار</td></tr><tr><td><code dir=\"ltr\">apt install اسم</code></td><td>يثبت (و <code dir=\"ltr\">-y</code> للموافقة التلقائية)</td></tr><tr><td><code dir=\"ltr\">apt remove اسم</code></td><td>يزيل (و <code dir=\"ltr\">purge</code> يزيل الإعدادات أيضاً)</td></tr><tr><td><code dir=\"ltr\">apt search</code> و <code dir=\"ltr\">apt show</code></td><td>البحث والتفاصيل</td></tr><tr><td><code dir=\"ltr\">apt list --installed</code></td><td>المثبت</td></tr></tbody></table></div>\n<h2>التحديثات الأمنية أولاً</h2>\n<p>أغلب الاختراقات تستغل ثغرات <strong>معروفة لها تحديث</strong> لم يُثبَّت. أول ما تفعله على أي خادم جديد:</p>\n<div class=\"code-block term\"><span class=\"code-label\">الطرفية</span><pre dir=\"ltr\"><code><span class=\"t-cmd\"><span class=\"t-ps\">$</span> apt list --upgradable</span>\nListing... Done\nlibssl3t64/noble-updates,noble-security 3.0.13-0ubuntu3.5 amd64 [upgradable from: 3.0.13-0ubuntu3.4]\nopenssl/noble-updates,noble-security 3.0.13-0ubuntu3.5 amd64 [upgradable from: 3.0.13-0ubuntu3.4]\ntzdata/noble-updates 2025b-0ubuntu0.24.04 all [upgradable from: 2024a-3ubuntu1.1]\n<span class=\"t-cmd\"><span class=\"t-ps\">$</span> sudo apt upgrade -y</span>\nReading package lists... Done\nBuilding dependency tree... Done\nReading state information... Done\nCalculating upgrade... Done\nThe following packages will be upgraded:\n  libssl3t64 openssl tzdata\n3 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.\nNeed to get 3,252 kB of archives.\nUnpacking openssl (3.0.13-0ubuntu3.5) over (3.0.13-0ubuntu3.4) ...\nSetting up openssl (3.0.13-0ubuntu3.5) ...\n<span class=\"t-cmd\"><span class=\"t-ps\">$</span> apt list --installed | grep openssl</span>\nopenssl/noble,now 3.0.13-0ubuntu3.5 amd64 [installed]</code></pre></div>\n<p><code dir=\"ltr\">noble-security</code> يعني تحديثاً أمنياً. وحزمة <strong>unattended-upgrades</strong> (مثبتة افتراضياً) تثبّت التحديثات الأمنية تلقائياً كل يوم.</p>\n<h2>عندما لا يوجد الأمر</h2>\n<div class=\"code-block term\"><span class=\"code-label\">الطرفية</span><pre dir=\"ltr\"><code><span class=\"t-cmd\"><span class=\"t-ps\">$</span> htop</span>\n<span class=\"t-err\">Command &#x27;htop&#x27; not found, but can be installed with:</span>\n<span class=\"t-err\">sudo apt install htop</span>\n<span class=\"t-cmd\"><span class=\"t-ps\">$</span> sudo apt install -y htop</span>\nReading package lists... Done\nBuilding dependency tree... Done\nReading state information... Done\nThe following additional packages will be installed:\n  libnl-3-200 libnl-genl-3-200\nThe following NEW packages will be installed:\n  htop libnl-3-200 libnl-genl-3-200\n0 upgraded, 3 newly installed, 0 to remove and 0 not upgraded.\nNeed to get 171 kB of archives.\nAfter this operation, 434 kB of additional disk space will be used.\nGet:1 http://archive.ubuntu.com/ubuntu noble/main amd64 htop amd64 3.3.0-4build1 [171 kB]\nSelecting previously unselected package libnl-3-200.\nPreparing to unpack .../libnl-3-200_1.0_amd64.deb ...\nUnpacking libnl-3-200 (1.0) ...\nSelecting previously unselected package libnl-genl-3-200.\nPreparing to unpack .../libnl-genl-3-200_1.0_amd64.deb ...\nUnpacking libnl-genl-3-200 (1.0) ...\nSelecting previously unselected package htop.\nPreparing to unpack .../htop_3.3.0-4build1_amd64.deb ...\nUnpacking htop (3.3.0-4build1) ...\nSetting up libnl-3-200 (1.0) ...\nSetting up libnl-genl-3-200 (1.0) ...\nSetting up htop (3.3.0-4build1) ...\nProcessing triggers for man-db (2.12.0-4build2) ...\n<span class=\"t-cmd\"><span class=\"t-ps\">$</span> which htop</span>\n/usr/bin/htop</code></pre></div>\n<p>apt ثبّت <strong>الاعتماديات</strong> (المكتبات التي يحتاجها htop) تلقائياً.</p>\n<div class=\"callout warn\">⚠️ لا تشغّل سكربتات تثبيت من الإنترنت بـ <code dir=\"ltr\">curl ... | sudo bash</code> دون قراءتها: أنت تعطي سكربتاً لا تعرفه صلاحيات root كاملة.</div>",
   "exercise": {
    "prompt": "<p>جهّز خادماً جديداً:</p>\n<ol><li>حدّث قائمة الحزم.</li><li>ثبّت كل التحديثات المتاحة (<code dir=\"ltr\">upgrade -y</code>).</li><li>ثبّت خادم الويب <code dir=\"ltr\">nginx</code> وأداة <code dir=\"ltr\">net-tools</code>.</li><li>أزل الحزمة <code dir=\"ltr\">tree</code> (المثبتة مسبقاً) لأنها لا لزوم لها على الخادم: كل برنامج زائد مساحة هجوم إضافية.</li></ol>",
    "setup": "sudo apt install -y tree",
    "starter": "# اكتب الأوامر هنا",
    "solution": "sudo apt update\nsudo apt upgrade -y\nsudo apt install -y nginx net-tools\nsudo apt remove -y tree",
    "test": "apt list --upgradable\n@check pkg nginx\n@check pkg net-tools\n@check pkg tree\n@check service nginx",
    "expected": "Listing... Done\nnginx: installed\nnet-tools: installed\ntree: not installed\nnginx: active enabled"
   },
   "quiz": [
    {
     "q": "ما الفرق بين apt update و apt upgrade؟",
     "o": [
      "update يحدّث قائمة الحزم المتاحة، و upgrade يثبّت الإصدارات الأحدث فعلاً",
      "لا فرق",
      "upgrade يحدّث القائمة فقط"
     ],
     "a": 0,
     "why": "لذلك تشغّل update أولاً."
    },
    {
     "q": "لماذا يجب تثبيت التحديثات الأمنية بسرعة؟",
     "o": [
      "لأن أغلب الاختراقات تستغل ثغرات معروفة لها تحديثات لم تُثبَّت",
      "لأنها تسرّع الجهاز",
      "لأنها إلزامية قانونياً فقط"
     ],
     "a": 0,
     "why": "الثغرة المعلنة يعرفها المهاجمون أيضاً."
    },
    {
     "q": "ما خطورة curl رابط | sudo bash؟",
     "o": [
      "تنفّذ سكربتاً لم تقرأه بصلاحيات root كاملة",
      "لا خطورة",
      "يبطئ الإنترنت"
     ],
     "a": 0,
     "why": "اقرأ السكربت أولاً أو ثبّت من المستودع الرسمي."
    },
    {
     "q": "لماذا تزيل البرامج التي لا تحتاجها من الخادم؟",
     "o": [
      "لأن كل برنامج إضافي قد تكون فيه ثغرة، فتقل مساحة الهجوم",
      "لتوفير الكهرباء",
      "لا داعي لذلك"
     ],
     "a": 0,
     "why": "تقليل مساحة الهجوم (Attack Surface) مبدأ أساسي."
    }
   ]
  }
 ]
], {"runner": "terminal", "sim": "linux"});
