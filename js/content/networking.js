// ملف مولَّد من content/networking عبر tools/build.py، لا تعدّله يدوياً
CW.registerContent("networking", [
 [
  {
   "body": "<h2>لماذا الشبكات أولاً؟</h2>\n<p>كل هجوم وكل دفاع يمر عبر الشبكة: رسالة تصيّد تصل عبر SMTP، وموقع مخترق يُزار عبر HTTP، وجدار ناري يقرر بناءً على عناوين IP والمنافذ. لا يمكنك حماية ما لا تفهمه، لذلك هذه الدورة أساس مجال الأمن السيبراني والحوسبة السحابية معاً.</p>\n<p>في هذه الدورة نفهم كل مفهوم ثم نطبقه بـ <strong>Python</strong>: نبني الحزم بايتاً بايتاً بمكتبة <code dir=\"ltr\">struct</code>، ونحسب الشبكات الفرعية بمكتبة <code dir=\"ltr\">ipaddress</code>، ونحاكي المبدل والموجه والجدار الناري بكود بسيط.</p>\n<div class=\"callout tip\"><strong>ملاحظة:</strong> Python هنا يعمل داخل متصفحك (Pyodide) ولا يستطيع إرسال حزم حقيقية على شبكتك. لذلك نبني الحزم ونحللها في الذاكرة، ونحاكي سلوك الأجهزة بكود نكتبه بأنفسنا. المنطق هو نفسه ما تفعله الأجهزة الحقيقية.</div>\n<h2>المشكلة: كيف تتحدث أجهزة مختلفة؟</h2>\n<p>جهاز Apple في الرياض يفتح موقعاً على خادم Linux في ألمانيا عبر كابلات وألياف وموجات Wi-Fi من شركات مختلفة. الحل: تقسيم المهمة إلى <strong>طبقات</strong>، كل طبقة تؤدي وظيفة واحدة وتعتمد على التي تحتها فقط.</p>\n<h2>نموذج OSI: سبع طبقات</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>#</th><th>الطبقة</th><th>وظيفتها</th><th>أمثلة</th></tr></thead><tbody><tr><td>7</td><td>التطبيقات (Application)</td><td>الخدمة التي يستخدمها البرنامج</td><td>HTTP و DNS و SMTP</td></tr><tr><td>6</td><td>العرض (Presentation)</td><td>تنسيق البيانات وتشفيرها</td><td>TLS و JPEG و UTF-8</td></tr><tr><td>5</td><td>الجلسة (Session)</td><td>فتح الحوار وإدارته</td><td>جلسات RPC</td></tr><tr><td>4</td><td>النقل (Transport)</td><td>توصيل البيانات بين برنامجين (منافذ)</td><td>TCP و UDP</td></tr><tr><td>3</td><td>الشبكة (Network)</td><td>التوجيه بين الشبكات (عناوين IP)</td><td>IP و ICMP</td></tr><tr><td>2</td><td>ربط البيانات (Data Link)</td><td>التوصيل داخل الشبكة المحلية (عناوين MAC)</td><td>Ethernet و Wi-Fi</td></tr><tr><td>1</td><td>الطبقة المادية (Physical)</td><td>الإشارات على الوسط</td><td>الكابلات والألياف والموجات</td></tr></tbody></table></div>\n<p>حيلة للحفظ من الأسفل: <strong>P</strong>lease <strong>D</strong>o <strong>N</strong>ot <strong>T</strong>hrow <strong>S</strong>ausage <strong>P</strong>izza <strong>A</strong>way.</p>\n<h2>التغليف (Encapsulation)</h2>\n<p>عند الإرسال تضيف كل طبقة <strong>ترويسة (Header)</strong> خاصة بها حول بيانات الطبقة التي فوقها، وعند الاستقبال تنزع كل طبقة ترويستها:</p>\n<div class=\"code-block src py-run\" data-src=\"message = &quot;GET /index.html&quot;\n\nlayers = [\n    (&quot;Transport&quot;, &quot;TCP sport=51000 dport=80&quot;),\n    (&quot;Network&quot;,   &quot;IP src=192.168.1.10 dst=93.184.216.34&quot;),\n    (&quot;Data Link&quot;, &quot;ETH src=aa:aa:aa:aa:aa:aa dst=bb:bb:bb:bb:bb:bb&quot;),\n]\n\npacket = message\nfor name, header in layers:\n    packet = f&quot;[{header}] {packet}&quot;\n    print(f&quot;{name:9} -&gt; {packet}&quot;)\n\nprint()\n# الاستقبال: كل طبقة تنزع ترويستها بالعكس\nfor name, header in reversed(layers):\n    packet = packet.removeprefix(f&quot;[{header}] &quot;)\n    print(f&quot;{name:9} removed -&gt; {packet}&quot;)\"><span class=\"code-label\">Python</span><pre dir=\"ltr\"><code>message = &quot;GET /index.html&quot;\n\nlayers = [\n    (&quot;Transport&quot;, &quot;TCP sport=51000 dport=80&quot;),\n    (&quot;Network&quot;,   &quot;IP src=192.168.1.10 dst=93.184.216.34&quot;),\n    (&quot;Data Link&quot;, &quot;ETH src=aa:aa:aa:aa:aa:aa dst=bb:bb:bb:bb:bb:bb&quot;),\n]\n\npacket = message\nfor name, header in layers:\n    packet = f&quot;[{header}] {packet}&quot;\n    print(f&quot;{name:9} -&gt; {packet}&quot;)\n\nprint()\n# الاستقبال: كل طبقة تنزع ترويستها بالعكس\nfor name, header in reversed(layers):\n    packet = packet.removeprefix(f&quot;[{header}] &quot;)\n    print(f&quot;{name:9} removed -&gt; {packet}&quot;)</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>Transport -&gt; [TCP sport=51000 dport=80] GET /index.html\nNetwork   -&gt; [IP src=192.168.1.10 dst=93.184.216.34] [TCP sport=51000 dport=80] GET /index.html\nData Link -&gt; [ETH src=aa:aa:aa:aa:aa:aa dst=bb:bb:bb:bb:bb:bb] [IP src=192.168.1.10 dst=93.184.216.34] [TCP sport=51000 dport=80] GET /index.html\n\nData Link removed -&gt; [IP src=192.168.1.10 dst=93.184.216.34] [TCP sport=51000 dport=80] GET /index.html\nNetwork   removed -&gt; [TCP sport=51000 dport=80] GET /index.html\nTransport removed -&gt; GET /index.html</code></pre></div>\n<p>ولكل طبقة اسم لوحدة بياناتها: <strong>Segment</strong> في النقل، و <strong>Packet</strong> في الشبكة، و <strong>Frame</strong> في ربط البيانات، و <strong>Bits</strong> في المادية.</p>\n<h2>لماذا يهم ذلك أمنياً؟</h2>\n<p>كل طبقة لها هجماتها ودفاعاتها، ومعرفة الطبقة تحدد الأداة المناسبة:</p>\n<div class=\"code-block src py-run\" data-src=\"defenses = {\n    7: (&quot;Application&quot;, &quot;SQL Injection, XSS&quot;, &quot;WAF, input validation&quot;),\n    4: (&quot;Transport&quot;, &quot;SYN flood&quot;, &quot;SYN cookies, rate limiting&quot;),\n    3: (&quot;Network&quot;, &quot;IP spoofing&quot;, &quot;ingress filtering, firewall&quot;),\n    2: (&quot;Data Link&quot;, &quot;ARP spoofing&quot;, &quot;Dynamic ARP Inspection&quot;),\n    1: (&quot;Physical&quot;, &quot;cable tapping&quot;, &quot;locked rooms, fiber&quot;),\n}\nfor layer in sorted(defenses, reverse=True):\n    name, attack, defense = defenses[layer]\n    print(f&quot;L{layer} {name:12} attack: {attack:20} defense: {defense}&quot;)\"><span class=\"code-label\">Python</span><pre dir=\"ltr\"><code>defenses = {\n    7: (&quot;Application&quot;, &quot;SQL Injection, XSS&quot;, &quot;WAF, input validation&quot;),\n    4: (&quot;Transport&quot;, &quot;SYN flood&quot;, &quot;SYN cookies, rate limiting&quot;),\n    3: (&quot;Network&quot;, &quot;IP spoofing&quot;, &quot;ingress filtering, firewall&quot;),\n    2: (&quot;Data Link&quot;, &quot;ARP spoofing&quot;, &quot;Dynamic ARP Inspection&quot;),\n    1: (&quot;Physical&quot;, &quot;cable tapping&quot;, &quot;locked rooms, fiber&quot;),\n}\nfor layer in sorted(defenses, reverse=True):\n    name, attack, defense = defenses[layer]\n    print(f&quot;L{layer} {name:12} attack: {attack:20} defense: {defense}&quot;)</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>L7 Application  attack: SQL Injection, XSS   defense: WAF, input validation\nL4 Transport    attack: SYN flood            defense: SYN cookies, rate limiting\nL3 Network      attack: IP spoofing          defense: ingress filtering, firewall\nL2 Data Link    attack: ARP spoofing         defense: Dynamic ARP Inspection\nL1 Physical     attack: cable tapping        defense: locked rooms, fiber</code></pre></div>",
   "exercise": {
    "prompt": "<p>اكتب دالة <code dir=\"ltr\">layer_of(protocol)</code> ترجع <strong>رقم</strong> طبقة OSI للبروتوكول (أو <code dir=\"ltr\">None</code> إذا لم يكن معروفاً)، بالاعتماد على قاموس <code dir=\"ltr\">osi</code> تكتبه أنت:</p>\n<ul><li>الطبقة 7: <code dir=\"ltr\">HTTP</code> و <code dir=\"ltr\">DNS</code> و <code dir=\"ltr\">SMTP</code> و <code dir=\"ltr\">FTP</code></li><li>الطبقة 6: <code dir=\"ltr\">TLS</code></li><li>الطبقة 4: <code dir=\"ltr\">TCP</code> و <code dir=\"ltr\">UDP</code></li><li>الطبقة 3: <code dir=\"ltr\">IP</code> و <code dir=\"ltr\">ICMP</code></li><li>الطبقة 2: <code dir=\"ltr\">Ethernet</code> و <code dir=\"ltr\">ARP</code></li></ul>\n<p>ويجب ألا تتأثر الدالة بحالة الأحرف (<code dir=\"ltr\">&quot;http&quot;</code> مثل <code dir=\"ltr\">&quot;HTTP&quot;</code>).</p>\n<p>ثم اكتب دالة <code dir=\"ltr\">encapsulate(data, headers)</code> تأخذ نصاً وقائمة ترويسات (من الأعلى للأسفل) وترجع النص بعد تغليفه: كل ترويسة تُضاف بالصيغة <code dir=\"ltr\">[ترويسة] </code> قبل ما سبق.</p>",
    "starter": "osi = {}\n\ndef layer_of(protocol):\n    return None\n\ndef encapsulate(data, headers):\n    return data",
    "solution": "osi = {\n    7: [\"HTTP\", \"DNS\", \"SMTP\", \"FTP\"],\n    6: [\"TLS\"],\n    4: [\"TCP\", \"UDP\"],\n    3: [\"IP\", \"ICMP\"],\n    2: [\"Ethernet\", \"ARP\"],\n}\n\ndef layer_of(protocol):\n    for layer, names in osi.items():\n        if protocol.lower() in [n.lower() for n in names]:\n            return layer\n    return None\n\ndef encapsulate(data, headers):\n    for h in headers:\n        data = f\"[{h}] {data}\"\n    return data",
    "test": "print(layer_of(\"HTTP\"), layer_of(\"tcp\"), layer_of(\"ICMP\"), layer_of(\"arp\"), layer_of(\"TLS\"), layer_of(\"QUIC2\"))\nprint(encapsulate(\"hi\", [\"UDP\", \"IP\", \"ETH\"]))",
    "expected": "7 4 3 2 6 None\n[ETH] [IP] [UDP] hi"
   },
   "quiz": [
    {
     "q": "في أي طبقة من OSI تعمل عناوين IP؟",
     "o": [
      "الشبكة (3)",
      "النقل (4)",
      "ربط البيانات (2)"
     ],
     "a": 0,
     "why": "وعناوين MAC في الطبقة 2، والمنافذ في الطبقة 4."
    },
    {
     "q": "ماذا يحدث للبيانات عند نزولها في الطبقات عند الإرسال؟",
     "o": [
      "تضيف كل طبقة ترويستها حول بيانات الطبقة التي فوقها",
      "تُحذف الترويسات",
      "تُشفَّر دائماً في كل طبقة"
     ],
     "a": 0,
     "why": "هذا هو التغليف (Encapsulation)."
    },
    {
     "q": "هجوم SYN flood يستهدف أي طبقة؟",
     "o": [
      "النقل (4)",
      "التطبيقات (7)",
      "المادية (1)"
     ],
     "a": 0,
     "why": "SYN جزء من مصافحة TCP."
    },
    {
     "q": "ما اسم وحدة البيانات في طبقة ربط البيانات؟",
     "o": [
      "Frame",
      "Segment",
      "Packet"
     ],
     "a": 0,
     "why": "و Packet في طبقة الشبكة، و Segment في النقل."
    }
   ]
  },
  {
   "body": "<h2>نموذج TCP/IP: النموذج الذي يعمل فعلاً</h2>\n<p>OSI نموذج مرجعي للفهم، أما الإنترنت فيعمل بنموذج <strong>TCP/IP</strong> الأبسط بأربع طبقات:</p>\n<div class=\"table-wrap\"><table><thead><tr><th>TCP/IP</th><th>يقابل في OSI</th><th>البروتوكولات</th></tr></thead><tbody><tr><td>التطبيقات</td><td>7 و 6 و 5</td><td>HTTP و DNS و TLS و SSH</td></tr><tr><td>النقل</td><td>4</td><td>TCP و UDP</td></tr><tr><td>الإنترنت</td><td>3</td><td>IP و ICMP</td></tr><tr><td>الوصول للشبكة (Link)</td><td>2 و 1</td><td>Ethernet و Wi-Fi</td></tr></tbody></table></div>\n<h2>الحزمة الحقيقية بايتات</h2>\n<p>الترويسات ليست نصوصاً بل <strong>بايتات بترتيب محدد</strong>. ترويسة IPv4 مثلاً 20 بايتاً على الأقل:</p>\n<div class=\"table-wrap\"><table><thead><tr><th>البايت</th><th>الحقل</th></tr></thead><tbody><tr><td>0</td><td>الإصدار (4 بت) وطول الترويسة (4 بت)</td></tr><tr><td>1</td><td>نوع الخدمة</td></tr><tr><td>2-3</td><td>الطول الكلي</td></tr><tr><td>4-7</td><td>المعرّف والأعلام وإزاحة التجزئة</td></tr><tr><td>8</td><td>TTL: عدد القفزات المسموحة</td></tr><tr><td>9</td><td>البروتوكول: 6 = TCP و 17 = UDP و 1 = ICMP</td></tr><tr><td>10-11</td><td>مجموع التحقق (Checksum)</td></tr><tr><td>12-15</td><td>عنوان المصدر</td></tr><tr><td>16-19</td><td>عنوان الوجهة</td></tr></tbody></table></div>\n<p>نبنيها ونحللها بـ <code dir=\"ltr\">struct</code>: الصيغة <code dir=\"ltr\">!</code> تعني ترتيب الشبكة (Big-endian)، و <code dir=\"ltr\">B</code> بايت واحد، و <code dir=\"ltr\">H</code> بايتان، و <code dir=\"ltr\">4s</code> أربعة بايتات:</p>\n<div class=\"code-block src py-run\" data-src=\"import struct\nimport socket\n\ndef ipv4_header(src, dst, proto, payload_len, ttl=64):\n    version_ihl = (4 &lt;&lt; 4) | 5          # IPv4 وطول الترويسة 5 كلمات = 20 بايتاً\n    total = 20 + payload_len\n    return struct.pack(&quot;!BBHHHBBH4s4s&quot;,\n        version_ihl, 0, total, 0x1c46, 0x4000, ttl, proto, 0,\n        socket.inet_aton(src), socket.inet_aton(dst))\n\nhdr = ipv4_header(&quot;192.168.1.10&quot;, &quot;8.8.8.8&quot;, proto=17, payload_len=8)\nprint(len(hdr), &quot;bytes&quot;)\nprint(hdr.hex(&quot; &quot;))\n\nfields = struct.unpack(&quot;!BBHHHBBH4s4s&quot;, hdr)\nprint(&quot;version:&quot;, fields[0] &gt;&gt; 4, &quot;| header length:&quot;, (fields[0] &amp; 0x0F) * 4)\nprint(&quot;total:&quot;, fields[2], &quot;| ttl:&quot;, fields[5], &quot;| protocol:&quot;, fields[6])\nprint(&quot;src:&quot;, socket.inet_ntoa(fields[8]), &quot;dst:&quot;, socket.inet_ntoa(fields[9]))\"><span class=\"code-label\">Python</span><pre dir=\"ltr\"><code>import struct\nimport socket\n\ndef ipv4_header(src, dst, proto, payload_len, ttl=64):\n    version_ihl = (4 &lt;&lt; 4) | 5          # IPv4 وطول الترويسة 5 كلمات = 20 بايتاً\n    total = 20 + payload_len\n    return struct.pack(&quot;!BBHHHBBH4s4s&quot;,\n        version_ihl, 0, total, 0x1c46, 0x4000, ttl, proto, 0,\n        socket.inet_aton(src), socket.inet_aton(dst))\n\nhdr = ipv4_header(&quot;192.168.1.10&quot;, &quot;8.8.8.8&quot;, proto=17, payload_len=8)\nprint(len(hdr), &quot;bytes&quot;)\nprint(hdr.hex(&quot; &quot;))\n\nfields = struct.unpack(&quot;!BBHHHBBH4s4s&quot;, hdr)\nprint(&quot;version:&quot;, fields[0] &gt;&gt; 4, &quot;| header length:&quot;, (fields[0] &amp; 0x0F) * 4)\nprint(&quot;total:&quot;, fields[2], &quot;| ttl:&quot;, fields[5], &quot;| protocol:&quot;, fields[6])\nprint(&quot;src:&quot;, socket.inet_ntoa(fields[8]), &quot;dst:&quot;, socket.inet_ntoa(fields[9]))</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>20 bytes\n45 00 00 1c 1c 46 40 00 40 11 00 00 c0 a8 01 0a 08 08 08 08\nversion: 4 | header length: 20\ntotal: 28 | ttl: 64 | protocol: 17\nsrc: 192.168.1.10 dst: 8.8.8.8</code></pre></div>\n<p>هذا بالضبط ما تعرضه أدوات مثل <strong>Wireshark</strong> و <strong>tcpdump</strong>: تقرأ البايتات وتفسّر كل حقل.</p>\n<h2>مجموع التحقق (Checksum)</h2>\n<p>الموجّه يتحقق من سلامة ترويسة IP بمجموع تحقق: نجمع الترويسة كأعداد من 16 بت، ونطوي الفائض، ثم نعكس البتات:</p>\n<div class=\"code-block src py-run\" data-src=\"import struct, socket\n\ndef checksum(data: bytes) -&gt; int:\n    if len(data) % 2:\n        data += b&quot;\\x00&quot;\n    total = sum(struct.unpack(f&quot;!{len(data)//2}H&quot;, data))\n    while total &gt;&gt; 16:\n        total = (total &amp; 0xFFFF) + (total &gt;&gt; 16)\n    return ~total &amp; 0xFFFF\n\nhdr = bytearray(struct.pack(&quot;!BBHHHBBH4s4s&quot;, 0x45, 0, 28, 0x1c46, 0x4000, 64, 17, 0,\n                            socket.inet_aton(&quot;192.168.1.10&quot;), socket.inet_aton(&quot;8.8.8.8&quot;)))\nc = checksum(bytes(hdr))\nhdr[10:12] = struct.pack(&quot;!H&quot;, c)\nprint(&quot;checksum:&quot;, hex(c))\nprint(&quot;verify (should be 0):&quot;, checksum(bytes(hdr)))\n\nhdr[8] = 1   # غيّرنا TTL دون تحديث المجموع\nprint(&quot;after tampering:&quot;, checksum(bytes(hdr)))\"><span class=\"code-label\">Python</span><pre dir=\"ltr\"><code>import struct, socket\n\ndef checksum(data: bytes) -&gt; int:\n    if len(data) % 2:\n        data += b&quot;\\x00&quot;\n    total = sum(struct.unpack(f&quot;!{len(data)//2}H&quot;, data))\n    while total &gt;&gt; 16:\n        total = (total &amp; 0xFFFF) + (total &gt;&gt; 16)\n    return ~total &amp; 0xFFFF\n\nhdr = bytearray(struct.pack(&quot;!BBHHHBBH4s4s&quot;, 0x45, 0, 28, 0x1c46, 0x4000, 64, 17, 0,\n                            socket.inet_aton(&quot;192.168.1.10&quot;), socket.inet_aton(&quot;8.8.8.8&quot;)))\nc = checksum(bytes(hdr))\nhdr[10:12] = struct.pack(&quot;!H&quot;, c)\nprint(&quot;checksum:&quot;, hex(c))\nprint(&quot;verify (should be 0):&quot;, checksum(bytes(hdr)))\n\nhdr[8] = 1   # غيّرنا TTL دون تحديث المجموع\nprint(&quot;after tampering:&quot;, checksum(bytes(hdr)))</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>checksum: 0x4cc9\nverify (should be 0): 0\nafter tampering: 16128</code></pre></div>\n<p>إذا تغيّر أي بايت أثناء النقل لا يصبح الناتج صفراً فتُرمى الحزمة. لكن انتبه: هذا يكشف <strong>الأخطاء العرضية</strong> فقط، لا التلاعب المتعمّد، فالمهاجم يستطيع إعادة حسابه. لحماية السلامة من المهاجمين نحتاج التشفير (TLS و IPsec) كما سنرى.</p>",
   "exercise": {
    "prompt": "<p>اكتب دالة <code dir=\"ltr\">parse_ipv4(data)</code> تأخذ بايتات حزمة IPv4 (أول 20 بايتاً ترويسة) وترجع قاموساً فيه:</p>\n<ul><li><code dir=\"ltr\">&quot;version&quot;</code>: الإصدار (أعلى 4 بتات من البايت الأول).</li><li><code dir=\"ltr\">&quot;ttl&quot;</code>: البايت 8.</li><li><code dir=\"ltr\">&quot;protocol&quot;</code>: الاسم: <code dir=\"ltr\">&quot;TCP&quot;</code> للرقم 6، و <code dir=\"ltr\">&quot;UDP&quot;</code> لـ 17، و <code dir=\"ltr\">&quot;ICMP&quot;</code> لـ 1، وإلا <code dir=\"ltr\">&quot;OTHER&quot;</code>.</li><li><code dir=\"ltr\">&quot;src&quot;</code> و <code dir=\"ltr\">&quot;dst&quot;</code>: العنوانان كنص (استخدم <code dir=\"ltr\">socket.inet_ntoa</code>).</li><li><code dir=\"ltr\">&quot;payload&quot;</code>: البايتات بعد الترويسة. احسب طول الترويسة من أدنى 4 بتات في البايت الأول مضروبة في 4.</li></ul>",
    "starter": "import struct, socket\n\ndef parse_ipv4(data):\n    return {}",
    "solution": "import struct, socket\n\ndef parse_ipv4(data):\n    names = {6: \"TCP\", 17: \"UDP\", 1: \"ICMP\"}\n    ihl = (data[0] & 0x0F) * 4\n    return {\n        \"version\": data[0] >> 4,\n        \"ttl\": data[8],\n        \"protocol\": names.get(data[9], \"OTHER\"),\n        \"src\": socket.inet_ntoa(data[12:16]),\n        \"dst\": socket.inet_ntoa(data[16:20]),\n        \"payload\": data[ihl:],\n    }",
    "test": "pkt = bytes.fromhex(\"4500002400004000400600000a000005c0a80001\") + b\"HELLO\"\nr = parse_ipv4(pkt)\nprint(r[\"version\"], r[\"ttl\"], r[\"protocol\"], r[\"src\"], r[\"dst\"], r[\"payload\"])\npkt2 = bytes.fromhex(\"45000020000000008001000008080808ac100001\") + b\"ping\"\nr2 = parse_ipv4(pkt2)\nprint(r2[\"ttl\"], r2[\"protocol\"], r2[\"src\"], r2[\"dst\"], r2[\"payload\"])",
    "expected": "4 64 TCP 10.0.0.5 192.168.0.1 b'HELLO'\n128 ICMP 8.8.8.8 172.16.0.1 b'ping'"
   },
   "quiz": [
    {
     "q": "كم طبقة في نموذج TCP/IP؟",
     "o": [
      "أربع",
      "سبع",
      "خمس"
     ],
     "a": 0,
     "why": "التطبيقات والنقل والإنترنت والوصول للشبكة."
    },
    {
     "q": "رقم البروتوكول 6 في ترويسة IP يعني:",
     "o": [
      "TCP",
      "UDP",
      "ICMP"
     ],
     "a": 0,
     "why": "و 17 لـ UDP و 1 لـ ICMP."
    },
    {
     "q": "هل يحمي Checksum في ترويسة IP من مهاجم يعدّل الحزمة؟",
     "o": [
      "لا، يكشف الأخطاء العرضية فقط لأن المهاجم يستطيع إعادة حسابه",
      "نعم دائماً",
      "نعم إذا كان TTL كبيراً"
     ],
     "a": 0,
     "why": "الحماية من التلاعب تحتاج تشفيراً وتوقيعاً مثل TLS."
    },
    {
     "q": "ماذا يحدث عندما يصل TTL إلى صفر؟",
     "o": [
      "يرمي الموجّه الحزمة ويرسل غالباً رسالة ICMP Time Exceeded",
      "تعود الحزمة للمرسل كما هي",
      "تُرسل للوجهة مباشرة"
     ],
     "a": 0,
     "why": "هكذا يعمل traceroute."
    }
   ]
  }
 ],
 [
  {
   "body": "<h2>عنوان IPv4</h2>\n<p>عنوان IPv4 رقم من <strong>32 بت</strong> يُكتب أربعة أجزاء (Octets) من 0 إلى 255: <code dir=\"ltr\">192.168.1.10</code>. وكل عنوان جزآن:</p>\n<ul><li><strong>جزء الشبكة</strong>: يحدد الشبكة التي ينتمي لها الجهاز.</li><li><strong>جزء المضيف (Host)</strong>: يحدد الجهاز داخل الشبكة.</li></ul>\n<p>و <strong>قناع الشبكة</strong> أو صيغة <strong>CIDR</strong> يحدد أين ينتهي جزء الشبكة: <code dir=\"ltr\">/24</code> تعني أن أول 24 بتاً للشبكة (<code dir=\"ltr\">255.255.255.0</code>) و 8 بتات للأجهزة.</p>\n<p>مكتبة <code dir=\"ltr\">ipaddress</code> المدمجة في Python تحسب كل هذا:</p>\n<div class=\"code-block src py-run\" data-src=\"import ipaddress\n\nip = ipaddress.ip_address(&quot;192.168.1.10&quot;)\nprint(int(ip), format(int(ip), &quot;032b&quot;))\n\nnet = ipaddress.ip_network(&quot;192.168.1.0/24&quot;)\nprint(&quot;network:  &quot;, net.network_address)\nprint(&quot;netmask:  &quot;, net.netmask)\nprint(&quot;broadcast:&quot;, net.broadcast_address)\nprint(&quot;addresses:&quot;, net.num_addresses, &quot;| usable hosts:&quot;, net.num_addresses - 2)\nhosts = list(net.hosts())\nprint(&quot;first host:&quot;, hosts[0], &quot;| last host:&quot;, hosts[-1])\nprint(ip in net, ipaddress.ip_address(&quot;192.168.2.10&quot;) in net)\"><span class=\"code-label\">Python</span><pre dir=\"ltr\"><code>import ipaddress\n\nip = ipaddress.ip_address(&quot;192.168.1.10&quot;)\nprint(int(ip), format(int(ip), &quot;032b&quot;))\n\nnet = ipaddress.ip_network(&quot;192.168.1.0/24&quot;)\nprint(&quot;network:  &quot;, net.network_address)\nprint(&quot;netmask:  &quot;, net.netmask)\nprint(&quot;broadcast:&quot;, net.broadcast_address)\nprint(&quot;addresses:&quot;, net.num_addresses, &quot;| usable hosts:&quot;, net.num_addresses - 2)\nhosts = list(net.hosts())\nprint(&quot;first host:&quot;, hosts[0], &quot;| last host:&quot;, hosts[-1])\nprint(ip in net, ipaddress.ip_address(&quot;192.168.2.10&quot;) in net)</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>3232235786 11000000101010000000000100001010\nnetwork:   192.168.1.0\nnetmask:   255.255.255.0\nbroadcast: 192.168.1.255\naddresses: 256 | usable hosts: 254\nfirst host: 192.168.1.1 | last host: 192.168.1.254\nTrue False</code></pre></div>\n<p>أول عنوان (عنوان الشبكة) وآخر عنوان (البث Broadcast) لا يُعطيان لأجهزة، لذلك الأجهزة الصالحة في <code dir=\"ltr\">/24</code> هي 254.</p>\n<h2>العناوين الخاصة و NAT</h2>\n<p>بعض النطاقات <strong>خاصة</strong> (RFC 1918) تُستخدم داخل البيوت والشركات ولا تُوجَّه على الإنترنت: <code dir=\"ltr\">10.0.0.0/8</code> و <code dir=\"ltr\">172.16.0.0/12</code> و <code dir=\"ltr\">192.168.0.0/16</code>. والموجه المنزلي يترجمها لعنوان عام واحد بتقنية <strong>NAT</strong>:</p>\n<div class=\"code-block src py-run\" data-src=\"import ipaddress\n\nfor a in [&quot;10.20.30.40&quot;, &quot;172.20.1.1&quot;, &quot;172.32.0.1&quot;, &quot;192.168.100.1&quot;, &quot;8.8.8.8&quot;, &quot;127.0.0.1&quot;, &quot;169.254.10.10&quot;]:\n    ip = ipaddress.ip_address(a)\n    kind = (&quot;loopback&quot; if ip.is_loopback else\n            &quot;link-local&quot; if ip.is_link_local else\n            &quot;private&quot; if ip.is_private else &quot;public&quot;)\n    print(f&quot;{a:15} {kind}&quot;)\"><span class=\"code-label\">Python</span><pre dir=\"ltr\"><code>import ipaddress\n\nfor a in [&quot;10.20.30.40&quot;, &quot;172.20.1.1&quot;, &quot;172.32.0.1&quot;, &quot;192.168.100.1&quot;, &quot;8.8.8.8&quot;, &quot;127.0.0.1&quot;, &quot;169.254.10.10&quot;]:\n    ip = ipaddress.ip_address(a)\n    kind = (&quot;loopback&quot; if ip.is_loopback else\n            &quot;link-local&quot; if ip.is_link_local else\n            &quot;private&quot; if ip.is_private else &quot;public&quot;)\n    print(f&quot;{a:15} {kind}&quot;)</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>10.20.30.40     private\n172.20.1.1      private\n172.32.0.1      public\n192.168.100.1   private\n8.8.8.8         public\n127.0.0.1       loopback\n169.254.10.10   link-local</code></pre></div>\n<ul><li><code dir=\"ltr\">127.0.0.1</code> هو الجهاز نفسه (localhost).</li><li><code dir=\"ltr\">169.254.x.x</code> يأخذه الجهاز تلقائياً عندما لا يجد خادم DHCP: علامة على مشكلة في الشبكة.</li><li>انتبه: <code dir=\"ltr\">172.32.0.1</code> <strong>عام</strong>، فالنطاق الخاص هو <code dir=\"ltr\">172.16</code> حتى <code dir=\"ltr\">172.31</code> فقط.</li></ul>\n<h2>تقسيم الشبكات (Subnetting)</h2>\n<p>شركة لديها <code dir=\"ltr\">10.0.0.0/24</code> وتريد فصل الأقسام أمنياً (المالية عن الضيوف). نقسم الشبكة إلى شبكات فرعية أصغر:</p>\n<div class=\"code-block src py-run\" data-src=\"import ipaddress\n\ncompany = ipaddress.ip_network(&quot;10.0.0.0/24&quot;)\nfor sub in company.subnets(new_prefix=26):\n    print(sub, &quot;| hosts:&quot;, sub.num_addresses - 2, &quot;| range:&quot;, sub[1], &quot;-&quot;, sub[-2])\n\nprint()\n# كم بتاً تحتاج لـ 50 جهازاً؟\nimport math\nneeded = 50\nhost_bits = math.ceil(math.log2(needed + 2))\nprint(&quot;need /&quot;, 32 - host_bits, &quot;-&gt;&quot;, 2 ** host_bits - 2, &quot;hosts&quot;)\"><span class=\"code-label\">Python</span><pre dir=\"ltr\"><code>import ipaddress\n\ncompany = ipaddress.ip_network(&quot;10.0.0.0/24&quot;)\nfor sub in company.subnets(new_prefix=26):\n    print(sub, &quot;| hosts:&quot;, sub.num_addresses - 2, &quot;| range:&quot;, sub[1], &quot;-&quot;, sub[-2])\n\nprint()\n# كم بتاً تحتاج لـ 50 جهازاً؟\nimport math\nneeded = 50\nhost_bits = math.ceil(math.log2(needed + 2))\nprint(&quot;need /&quot;, 32 - host_bits, &quot;-&gt;&quot;, 2 ** host_bits - 2, &quot;hosts&quot;)</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>10.0.0.0/26 | hosts: 62 | range: 10.0.0.1 - 10.0.0.62\n10.0.0.64/26 | hosts: 62 | range: 10.0.0.65 - 10.0.0.126\n10.0.0.128/26 | hosts: 62 | range: 10.0.0.129 - 10.0.0.190\n10.0.0.192/26 | hosts: 62 | range: 10.0.0.193 - 10.0.0.254\n\nneed / 26 -&gt; 62 hosts</code></pre></div>\n<p>كل بت إضافي في البادئة يقسم الشبكة نصفين: <code dir=\"ltr\">/24</code> ← اثنتان <code dir=\"ltr\">/25</code> ← أربع <code dir=\"ltr\">/26</code>.</p>\n<h2>IPv6 باختصار</h2>\n<p>العناوين 32 بت انتهت تقريباً (4.3 مليار عنوان). <strong>IPv6</strong> بطول 128 بت، يُكتب بالست عشري:</p>\n<div class=\"code-block src py-run\" data-src=\"import ipaddress\n\nip6 = ipaddress.ip_address(&quot;2001:0db8:0000:0000:0000:ff00:0042:8329&quot;)\nprint(ip6.compressed)\nprint(ip6.exploded)\nprint(ipaddress.ip_network(&quot;2001:db8::/64&quot;).num_addresses)\"><span class=\"code-label\">Python</span><pre dir=\"ltr\"><code>import ipaddress\n\nip6 = ipaddress.ip_address(&quot;2001:0db8:0000:0000:0000:ff00:0042:8329&quot;)\nprint(ip6.compressed)\nprint(ip6.exploded)\nprint(ipaddress.ip_network(&quot;2001:db8::/64&quot;).num_addresses)</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>2001:db8::ff00:42:8329\n2001:0db8:0000:0000:0000:ff00:0042:8329\n18446744073709551616</code></pre></div>",
   "exercise": {
    "prompt": "<p>اكتب دالة <code dir=\"ltr\">plan(network, departments)</code> تقسّم شبكة بين أقسام:</p>\n<ul><li><code dir=\"ltr\">network</code> نص مثل <code dir=\"ltr\">&quot;10.10.0.0/24&quot;</code>، و <code dir=\"ltr\">departments</code> قائمة أزواج <code dir=\"ltr\">(اسم, عدد_الأجهزة)</code>.</li><li>لكل قسم احسب أصغر بادئة تكفي أجهزته (أضف 2 للشبكة والبث): <code dir=\"ltr\">prefix = 32 - ceil(log2(hosts + 2))</code>.</li><li>رتّب الأقسام من <strong>الأكبر للأصغر</strong> ثم خصّص لكل قسم أول شبكة فرعية بتلك البادئة <strong>لا تتداخل</strong> مع ما خُصّص قبله (استخدم <code dir=\"ltr\">network.subnets(new_prefix=...)</code> و <code dir=\"ltr\">overlaps</code>).</li><li>ارجع قاموساً <code dir=\"ltr\">{اسم: نص الشبكة}</code>. وإذا لم تتسع الشبكة لقسم ارفع <code dir=\"ltr\">ValueError</code>.</li></ul>",
    "starter": "import ipaddress, math\n\ndef plan(network, departments):\n    return {}",
    "solution": "import ipaddress, math\n\ndef plan(network, departments):\n    net = ipaddress.ip_network(network)\n    used = []\n    result = {}\n    for name, hosts in sorted(departments, key=lambda d: -d[1]):\n        prefix = 32 - math.ceil(math.log2(hosts + 2))\n        if prefix < net.prefixlen:\n            raise ValueError(name)\n        for sub in net.subnets(new_prefix=prefix):\n            if not any(sub.overlaps(u) for u in used):\n                used.append(sub)\n                result[name] = str(sub)\n                break\n        else:\n            raise ValueError(name)\n    return result",
    "test": "p = plan(\"10.10.0.0/24\", [(\"guests\", 20), (\"finance\", 60), (\"it\", 10), (\"sales\", 100)])\nfor k in sorted(p): print(k, p[k])\ntry:\n    plan(\"10.10.0.0/26\", [(\"a\", 40), (\"b\", 40)])\nexcept ValueError as e:\n    print(\"no room for\", e)",
    "expected": "finance 10.10.0.128/26\nguests 10.10.0.192/27\nit 10.10.0.224/28\nsales 10.10.0.0/25\nno room for b"
   },
   "quiz": [
    {
     "q": "كم جهازاً صالحاً في الشبكة /26؟",
     "o": [
      "62",
      "64",
      "26"
     ],
     "a": 0,
     "why": "2^6 = 64 عنواناً، ناقص عنوان الشبكة والبث."
    },
    {
     "q": "أي هذه العناوين خاص (Private)؟",
     "o": [
      "172.20.5.1",
      "172.40.5.1",
      "8.8.4.4"
     ],
     "a": 0,
     "why": "النطاق الخاص 172.16.0.0/12 يمتد من 172.16 إلى 172.31."
    },
    {
     "q": "جهاز حصل على العنوان 169.254.3.7، ماذا يعني ذلك غالباً؟",
     "o": [
      "لم يجد خادم DHCP فأعطى نفسه عنواناً تلقائياً",
      "متصل بالإنترنت مباشرة",
      "عنوانه عام"
     ],
     "a": 0,
     "why": "عناوين link-local لا تصل للإنترنت."
    },
    {
     "q": "لماذا تقسّم الشركة شبكتها إلى شبكات فرعية؟",
     "o": [
      "لفصل الأقسام وتقليل انتشار الهجوم وتنظيم حركة البيانات",
      "لزيادة سرعة الإنترنت فقط",
      "لأن IPv4 يمنع الشبكات الكبيرة"
     ],
     "a": 0,
     "why": "الفصل (Segmentation) مبدأ دفاعي أساسي."
    }
   ]
  },
  {
   "body": "<h2>طبقة النقل: المنافذ (Ports)</h2>\n<p>عنوان IP يوصل البيانات للجهاز، و <strong>المنفذ</strong> (0 إلى 65535) يوصلها للبرنامج داخل الجهاز. والاتصال يتحدد بخمسة أشياء: <strong>IP المصدر ومنفذه، و IP الوجهة ومنفذها، والبروتوكول</strong>.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>المنفذ</th><th>الخدمة</th><th></th><th>المنفذ</th><th>الخدمة</th></tr></thead><tbody><tr><td>22</td><td>SSH</td><td></td><td>443</td><td>HTTPS</td></tr><tr><td>25</td><td>SMTP</td><td></td><td>3306</td><td>MySQL</td></tr><tr><td>53</td><td>DNS</td><td></td><td>3389</td><td>RDP</td></tr><tr><td>80</td><td>HTTP</td><td></td><td>5432</td><td>PostgreSQL</td></tr></tbody></table></div>\n<p>المنافذ تحت 1024 <strong>معروفة</strong> وتحتاج صلاحيات المدير لفتحها، والعميل يأخذ منفذاً <strong>مؤقتاً</strong> عشوائياً كبيراً (مثل 51000).</p>\n<h2>TCP مقابل UDP</h2>\n<div class=\"table-wrap\"><table><thead><tr><th></th><th>TCP</th><th>UDP</th></tr></thead><tbody><tr><td>الاتصال</td><td>يبدأ بمصافحة</td><td>بلا اتصال</td></tr><tr><td>الضمان</td><td>يضمن الوصول والترتيب ويعيد المفقود</td><td>لا ضمان</td></tr><tr><td>السرعة</td><td>أبطأ قليلاً</td><td>أسرع وأخف</td></tr><tr><td>الاستخدام</td><td>الويب والبريد ونقل الملفات و SSH</td><td>DNS والبث المباشر والألعاب والاتصال الصوتي</td></tr></tbody></table></div>\n<h2>المصافحة الثلاثية (Three-way Handshake)</h2>\n<p>قبل أي بيانات في TCP:</p>\n<ol><li>العميل ← <strong>SYN</strong> (رقم تسلسل ابتدائي عشوائي).</li><li>الخادم ← <strong>SYN-ACK</strong> (رقمه، ويؤكد رقم العميل + 1).</li><li>العميل ← <strong>ACK</strong>.</li></ol>\n<div class=\"code-block src py-run\" data-src=\"import random\nrandom.seed(7)\n\ndef handshake():\n    c_isn = random.randint(1000, 9999)\n    s_isn = random.randint(1000, 9999)\n    log = [\n        (&quot;client -&gt; server&quot;, &quot;SYN&quot;, c_isn, None),\n        (&quot;server -&gt; client&quot;, &quot;SYN-ACK&quot;, s_isn, c_isn + 1),\n        (&quot;client -&gt; server&quot;, &quot;ACK&quot;, c_isn + 1, s_isn + 1),\n    ]\n    for who, flags, seq, ack in log:\n        print(f&quot;{who}  {flags:8} seq={seq}&quot; + (f&quot; ack={ack}&quot; if ack else &quot;&quot;))\n    return c_isn + 1, s_isn + 1\n\nseq, ack = handshake()\ndata = b&quot;GET / HTTP/1.1\\r\\n\\r\\n&quot;\nprint(f&quot;client -&gt; server  PSH-ACK  seq={seq} ack={ack} len={len(data)}&quot;)\nprint(f&quot;server -&gt; client  ACK      ack={seq + len(data)}  (next byte expected)&quot;)\"><span class=\"code-label\">Python</span><pre dir=\"ltr\"><code>import random\nrandom.seed(7)\n\ndef handshake():\n    c_isn = random.randint(1000, 9999)\n    s_isn = random.randint(1000, 9999)\n    log = [\n        (&quot;client -&gt; server&quot;, &quot;SYN&quot;, c_isn, None),\n        (&quot;server -&gt; client&quot;, &quot;SYN-ACK&quot;, s_isn, c_isn + 1),\n        (&quot;client -&gt; server&quot;, &quot;ACK&quot;, c_isn + 1, s_isn + 1),\n    ]\n    for who, flags, seq, ack in log:\n        print(f&quot;{who}  {flags:8} seq={seq}&quot; + (f&quot; ack={ack}&quot; if ack else &quot;&quot;))\n    return c_isn + 1, s_isn + 1\n\nseq, ack = handshake()\ndata = b&quot;GET / HTTP/1.1\\r\\n\\r\\n&quot;\nprint(f&quot;client -&gt; server  PSH-ACK  seq={seq} ack={ack} len={len(data)}&quot;)\nprint(f&quot;server -&gt; client  ACK      ack={seq + len(data)}  (next byte expected)&quot;)</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>client -&gt; server  SYN      seq=6305\nserver -&gt; client  SYN-ACK  seq=3471 ack=6306\nclient -&gt; server  ACK      seq=6306 ack=3472\nclient -&gt; server  PSH-ACK  seq=6306 ack=3472 len=18\nserver -&gt; client  ACK      ack=6324  (next byte expected)</code></pre></div>\n<p>رقم ACK يعني &quot;استلمت كل شيء حتى هذا الرقم، أرسل التالي&quot;. هكذا يكتشف TCP المفقود ويعيده.</p>\n<h2>أعلام TCP بايتاً واحداً</h2>\n<p>الأعلام بتات في بايت واحد من ترويسة TCP. قراءتها مهارة أساسية في تحليل الحزم:</p>\n<div class=\"code-block src py-run\" data-src=\"FLAGS = [&quot;FIN&quot;, &quot;SYN&quot;, &quot;RST&quot;, &quot;PSH&quot;, &quot;ACK&quot;, &quot;URG&quot;, &quot;ECE&quot;, &quot;CWR&quot;]\n\ndef flags_of(byte):\n    return [name for i, name in enumerate(FLAGS) if byte &amp; (1 &lt;&lt; i)]\n\nfor b in [0x02, 0x12, 0x10, 0x18, 0x11, 0x04]:\n    print(hex(b), flags_of(b))\"><span class=\"code-label\">Python</span><pre dir=\"ltr\"><code>FLAGS = [&quot;FIN&quot;, &quot;SYN&quot;, &quot;RST&quot;, &quot;PSH&quot;, &quot;ACK&quot;, &quot;URG&quot;, &quot;ECE&quot;, &quot;CWR&quot;]\n\ndef flags_of(byte):\n    return [name for i, name in enumerate(FLAGS) if byte &amp; (1 &lt;&lt; i)]\n\nfor b in [0x02, 0x12, 0x10, 0x18, 0x11, 0x04]:\n    print(hex(b), flags_of(b))</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>0x2 [&#x27;SYN&#x27;]\n0x12 [&#x27;SYN&#x27;, &#x27;ACK&#x27;]\n0x10 [&#x27;ACK&#x27;]\n0x18 [&#x27;PSH&#x27;, &#x27;ACK&#x27;]\n0x11 [&#x27;FIN&#x27;, &#x27;ACK&#x27;]\n0x4 [&#x27;RST&#x27;]</code></pre></div>\n<p>ونمط أمني مهم: سيل من <strong>SYN</strong> دون ACK بعدها هو هجوم <strong>SYN flood</strong> يملأ ذاكرة الخادم باتصالات نصف مفتوحة، ويُدافَع عنه بـ <strong>SYN cookies</strong> وتحديد المعدل. أما <strong>RST</strong> فيقطع الاتصال فوراً.</p>\n<h2>إغلاق الاتصال</h2>\n<p>يُغلق بأربع رسائل: FIN ← ACK ← FIN ← ACK، لأن كل طرف يغلق اتجاهه وحده.</p>",
   "exercise": {
    "prompt": "<p>لديك سجل حزم TCP وصلت للخادم، كل حزمة قاموس فيه <code dir=\"ltr\">src</code> (عنوان المصدر) و <code dir=\"ltr\">flags</code> (بايت الأعلام).</p>\n<p>اكتب دالة <code dir=\"ltr\">syn_suspects(packets, threshold)</code> ترجع قائمة مرتبة بالعناوين التي أرسلت عدد حزم <strong>SYN فقط</strong> (البايت <code dir=\"ltr\">0x02</code> بالضبط، أي SYN دون ACK) أكبر من أو يساوي <code dir=\"ltr\">threshold</code>، <strong>و</strong>لم ترسل أي حزمة فيها علم ACK منفرد (<code dir=\"ltr\">0x10</code>) يكمل المصافحة.</p>\n<p>استخدم <code dir=\"ltr\">collections.Counter</code>.</p>",
    "starter": "from collections import Counter\n\ndef syn_suspects(packets, threshold):\n    return []",
    "solution": "from collections import Counter\n\ndef syn_suspects(packets, threshold):\n    syns = Counter(p[\"src\"] for p in packets if p[\"flags\"] == 0x02)\n    completed = {p[\"src\"] for p in packets if p[\"flags\"] == 0x10}\n    return sorted(ip for ip, n in syns.items() if n >= threshold and ip not in completed)",
    "test": "log = []\nfor i in range(50): log.append({\"src\": \"203.0.113.9\", \"flags\": 0x02})\nfor i in range(30): log.append({\"src\": \"198.51.100.4\", \"flags\": 0x02})\nfor ip in [\"10.0.0.5\", \"10.0.0.6\"]:\n    log += [{\"src\": ip, \"flags\": 0x02}, {\"src\": ip, \"flags\": 0x10}, {\"src\": ip, \"flags\": 0x18}]\nfor i in range(40): log.append({\"src\": \"10.0.0.7\", \"flags\": 0x02})\nlog.append({\"src\": \"10.0.0.7\", \"flags\": 0x10})\nprint(syn_suspects(log, 20))\nprint(syn_suspects(log, 40))\nprint(syn_suspects(log, 1000))",
    "expected": "['198.51.100.4', '203.0.113.9']\n['203.0.113.9']\n[]"
   },
   "quiz": [
    {
     "q": "ما ترتيب المصافحة الثلاثية في TCP؟",
     "o": [
      "SYN ثم SYN-ACK ثم ACK",
      "ACK ثم SYN ثم FIN",
      "SYN ثم ACK ثم SYN-ACK"
     ],
     "a": 0,
     "why": "بعدها تبدأ البيانات."
    },
    {
     "q": "أي بروتوكول أنسب لمكالمة فيديو مباشرة؟",
     "o": [
      "UDP لأن السرعة أهم من إعادة إرسال المفقود",
      "TCP دائماً",
      "ICMP"
     ],
     "a": 0,
     "why": "إعادة إطار متأخر لا فائدة منها في البث المباشر."
    },
    {
     "q": "ما الخدمة المعتادة على المنفذ 22؟",
     "o": [
      "SSH",
      "HTTP",
      "DNS"
     ],
     "a": 0,
     "why": "و 443 لـ HTTPS و 53 لـ DNS."
    },
    {
     "q": "ما علامة هجوم SYN flood في السجلات؟",
     "o": [
      "عدد كبير من SYN من مصادر لا تكمل المصافحة بـ ACK",
      "عدد كبير من ACK فقط",
      "حزم FIN كثيرة"
     ],
     "a": 0,
     "why": "تبقى الاتصالات نصف مفتوحة حتى تمتلئ ذاكرة الخادم."
    }
   ]
  },
  {
   "body": "<h2>DNS: دليل هاتف الإنترنت</h2>\n<p>البشر يتذكرون <code dir=\"ltr\">example.com</code> والأجهزة تحتاج <code dir=\"ltr\">93.184.216.34</code>. <strong>DNS</strong> يترجم الأسماء إلى عناوين، وهو من أول ما يحدث عند فتح أي موقع، ويعمل غالباً على <strong>UDP منفذ 53</strong>.</p>\n<h2>أنواع السجلات</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>النوع</th><th>يربط الاسم بـ</th><th>مثال</th></tr></thead><tbody><tr><td><code dir=\"ltr\">A</code></td><td>عنوان IPv4</td><td><code dir=\"ltr\">example.com → 93.184.216.34</code></td></tr><tr><td><code dir=\"ltr\">AAAA</code></td><td>عنوان IPv6</td><td></td></tr><tr><td><code dir=\"ltr\">CNAME</code></td><td>اسم آخر (اسم مستعار)</td><td><code dir=\"ltr\">www → example.com</code></td></tr><tr><td><code dir=\"ltr\">MX</code></td><td>خادم البريد</td><td><code dir=\"ltr\">mail.example.com</code></td></tr><tr><td><code dir=\"ltr\">TXT</code></td><td>نص (التحقق و SPF و DMARC لحماية البريد)</td><td><code dir=\"ltr\">v=spf1 ...</code></td></tr><tr><td><code dir=\"ltr\">NS</code></td><td>الخوادم المسؤولة عن النطاق</td><td></td></tr></tbody></table></div>\n<h2>رحلة الاستعلام</h2>\n<p>عندما تسأل عن <code dir=\"ltr\">www.shop.example</code>:</p>\n<ol><li>جهازك يسأل <strong>المحلّل (Resolver)</strong> لدى مزود الخدمة.</li><li>المحلّل يسأل <strong>خادم الجذر (Root)</strong>: &quot;من المسؤول عن <code dir=\"ltr\">.example</code>؟&quot;</li><li>ثم خادم <strong>TLD</strong> لـ <code dir=\"ltr\">.example</code>: &quot;من المسؤول عن <code dir=\"ltr\">shop.example</code>؟&quot;</li><li>ثم <strong>الخادم الموثوق (Authoritative)</strong> فيعطيه الإجابة.</li><li>المحلّل يحفظ الإجابة في <strong>ذاكرة مؤقتة (Cache)</strong> مدة <strong>TTL</strong> ويعيدها لك.</li></ol>\n<p>نحاكي هذه الرحلة بقواميس تمثل الخوادم (المتصفح هنا لا يرسل استعلامات DNS حقيقية):</p>\n<div class=\"code-block src py-run\" data-src=\"ROOT = {&quot;example.&quot;: &quot;tld-server&quot;}\nSERVERS = {\n    &quot;tld-server&quot;: {&quot;shop.example.&quot;: &quot;ns1.shop&quot;},\n    &quot;ns1.shop&quot;: {\n        &quot;shop.example.&quot;: {&quot;A&quot;: &quot;203.0.113.10&quot;, &quot;MX&quot;: &quot;mail.shop.example.&quot;, &quot;TXT&quot;: &quot;v=spf1 ip4:203.0.113.0/24 -all&quot;},\n        &quot;www.shop.example.&quot;: {&quot;CNAME&quot;: &quot;shop.example.&quot;},\n        &quot;mail.shop.example.&quot;: {&quot;A&quot;: &quot;203.0.113.25&quot;},\n    },\n}\n\ndef resolve(name, rtype=&quot;A&quot;, trace=True):\n    name = name.rstrip(&quot;.&quot;) + &quot;.&quot;\n    labels = name.rstrip(&quot;.&quot;).split(&quot;.&quot;)\n    tld = labels[-1] + &quot;.&quot;                     # example.\n    zone = &quot;.&quot;.join(labels[-2:]) + &quot;.&quot;         # shop.example.\n    tld_server = ROOT[tld]\n    if trace: print(f&quot;  root: {tld} is served by {tld_server}&quot;)\n    auth = SERVERS[tld_server][zone]\n    if trace: print(f&quot;  {tld_server}: {zone} is served by {auth}&quot;)\n    record = SERVERS[auth].get(name)\n    if record is None:\n        return &quot;NXDOMAIN&quot;\n    if rtype in record:\n        return record[rtype]\n    if &quot;CNAME&quot; in record:\n        if trace: print(f&quot;  {auth}: {name} is an alias of {record[&#x27;CNAME&#x27;]}&quot;)\n        return resolve(record[&quot;CNAME&quot;], rtype, trace)\n    return &quot;NODATA&quot;\n\nprint(&quot;www A:&quot;, resolve(&quot;www.shop.example&quot;))\nprint(&quot;MX:&quot;, resolve(&quot;shop.example&quot;, &quot;MX&quot;, trace=False))\nprint(&quot;TXT:&quot;, resolve(&quot;shop.example&quot;, &quot;TXT&quot;, trace=False))\nprint(&quot;nope:&quot;, resolve(&quot;nope.shop.example&quot;, trace=False))\"><span class=\"code-label\">Python</span><pre dir=\"ltr\"><code>ROOT = {&quot;example.&quot;: &quot;tld-server&quot;}\nSERVERS = {\n    &quot;tld-server&quot;: {&quot;shop.example.&quot;: &quot;ns1.shop&quot;},\n    &quot;ns1.shop&quot;: {\n        &quot;shop.example.&quot;: {&quot;A&quot;: &quot;203.0.113.10&quot;, &quot;MX&quot;: &quot;mail.shop.example.&quot;, &quot;TXT&quot;: &quot;v=spf1 ip4:203.0.113.0/24 -all&quot;},\n        &quot;www.shop.example.&quot;: {&quot;CNAME&quot;: &quot;shop.example.&quot;},\n        &quot;mail.shop.example.&quot;: {&quot;A&quot;: &quot;203.0.113.25&quot;},\n    },\n}\n\ndef resolve(name, rtype=&quot;A&quot;, trace=True):\n    name = name.rstrip(&quot;.&quot;) + &quot;.&quot;\n    labels = name.rstrip(&quot;.&quot;).split(&quot;.&quot;)\n    tld = labels[-1] + &quot;.&quot;                     # example.\n    zone = &quot;.&quot;.join(labels[-2:]) + &quot;.&quot;         # shop.example.\n    tld_server = ROOT[tld]\n    if trace: print(f&quot;  root: {tld} is served by {tld_server}&quot;)\n    auth = SERVERS[tld_server][zone]\n    if trace: print(f&quot;  {tld_server}: {zone} is served by {auth}&quot;)\n    record = SERVERS[auth].get(name)\n    if record is None:\n        return &quot;NXDOMAIN&quot;\n    if rtype in record:\n        return record[rtype]\n    if &quot;CNAME&quot; in record:\n        if trace: print(f&quot;  {auth}: {name} is an alias of {record[&#x27;CNAME&#x27;]}&quot;)\n        return resolve(record[&quot;CNAME&quot;], rtype, trace)\n    return &quot;NODATA&quot;\n\nprint(&quot;www A:&quot;, resolve(&quot;www.shop.example&quot;))\nprint(&quot;MX:&quot;, resolve(&quot;shop.example&quot;, &quot;MX&quot;, trace=False))\nprint(&quot;TXT:&quot;, resolve(&quot;shop.example&quot;, &quot;TXT&quot;, trace=False))\nprint(&quot;nope:&quot;, resolve(&quot;nope.shop.example&quot;, trace=False))</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>  root: example. is served by tld-server\n  tld-server: shop.example. is served by ns1.shop\n  ns1.shop: www.shop.example. is an alias of shop.example.\n  root: example. is served by tld-server\n  tld-server: shop.example. is served by ns1.shop\nwww A: 203.0.113.10\nMX: mail.shop.example.\nTXT: v=spf1 ip4:203.0.113.0/24 -all\nnope: NXDOMAIN</code></pre></div>\n<h2>DNS والأمن</h2>\n<p>DNS أصلاً بلا تشفير ولا توثيق، لذلك هو هدف شائع:</p>\n<ul><li><strong>تسميم الذاكرة المؤقتة (Cache Poisoning)</strong>: إقناع المحلّل بإجابة مزورة فيُوجَّه المستخدمون لموقع المهاجم. الدفاع: <strong>DNSSEC</strong> الذي يوقّع السجلات رقمياً.</li><li><strong>التنصت</strong>: أي أحد على الشبكة يرى المواقع التي تزورها. الدفاع: <strong>DNS over HTTPS (DoH)</strong> أو <strong>DNS over TLS</strong>.</li><li><strong>حماية البريد من الانتحال</strong>: سجلات TXT لـ <strong>SPF</strong> (من يحق له الإرسال باسمك) و <strong>DMARC</strong>.</li><li>مراقبة استعلامات DNS في الشركة تكشف أجهزة مصابة تتصل بنطاقات خبيثة.</li></ul>\n<h2>الذاكرة المؤقتة و TTL</h2>\n<div class=\"code-block src py-run\" data-src=\"class CachingResolver:\n    def __init__(self, upstream):\n        self.upstream, self.cache, self.queries = upstream, {}, 0\n\n    def lookup(self, name, now):\n        hit = self.cache.get(name)\n        if hit and hit[&quot;expires&quot;] &gt; now:\n            return hit[&quot;ip&quot;], &quot;cache&quot;\n        self.queries += 1\n        ip, ttl = self.upstream[name]\n        self.cache[name] = {&quot;ip&quot;: ip, &quot;expires&quot;: now + ttl}\n        return ip, &quot;upstream&quot;\n\nr = CachingResolver({&quot;example.com&quot;: (&quot;93.184.216.34&quot;, 300)})\nfor t in [0, 10, 299, 300, 450]:\n    print(t, r.lookup(&quot;example.com&quot;, now=t))\nprint(&quot;upstream queries:&quot;, r.queries)\"><span class=\"code-label\">Python</span><pre dir=\"ltr\"><code>class CachingResolver:\n    def __init__(self, upstream):\n        self.upstream, self.cache, self.queries = upstream, {}, 0\n\n    def lookup(self, name, now):\n        hit = self.cache.get(name)\n        if hit and hit[&quot;expires&quot;] &gt; now:\n            return hit[&quot;ip&quot;], &quot;cache&quot;\n        self.queries += 1\n        ip, ttl = self.upstream[name]\n        self.cache[name] = {&quot;ip&quot;: ip, &quot;expires&quot;: now + ttl}\n        return ip, &quot;upstream&quot;\n\nr = CachingResolver({&quot;example.com&quot;: (&quot;93.184.216.34&quot;, 300)})\nfor t in [0, 10, 299, 300, 450]:\n    print(t, r.lookup(&quot;example.com&quot;, now=t))\nprint(&quot;upstream queries:&quot;, r.queries)</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>0 (&#x27;93.184.216.34&#x27;, &#x27;upstream&#x27;)\n10 (&#x27;93.184.216.34&#x27;, &#x27;cache&#x27;)\n299 (&#x27;93.184.216.34&#x27;, &#x27;cache&#x27;)\n300 (&#x27;93.184.216.34&#x27;, &#x27;upstream&#x27;)\n450 (&#x27;93.184.216.34&#x27;, &#x27;cache&#x27;)\nupstream queries: 2</code></pre></div>\n<p>TTL الكبير يخفف الحمل لكنه يبطئ انتشار أي تغيير. ولهذا يُخفَّض TTL قبل نقل موقع لخادم جديد.</p>",
   "exercise": {
    "prompt": "<p>اكتب صنف <code dir=\"ltr\">Resolver</code> يأخذ في البنّاء قاموس سجلات <code dir=\"ltr\">zone</code> بالشكل <code dir=\"ltr\">{الاسم: {&quot;A&quot;: ..., &quot;CNAME&quot;: ..., &quot;ttl&quot;: ...}}</code>، وفيه:</p>\n<ul><li><code dir=\"ltr\">lookup(name, now)</code>: يرجع عنوان <code dir=\"ltr\">A</code> للاسم مع اتباع <code dir=\"ltr\">CNAME</code> (قد تتسلسل)، أو <code dir=\"ltr\">&quot;NXDOMAIN&quot;</code> إن لم يوجد الاسم. ويحفظ كل إجابة <code dir=\"ltr\">A</code> نهائية في الذاكرة المؤقتة مدة <code dir=\"ltr\">ttl</code> للاسم المسؤول عنه (الاسم الأصلي)، فإن سُئل عنه قبل انتهاء المدة يرجع من الذاكرة دون زيادة <code dir=\"ltr\">self.upstream_calls</code>.</li><li><code dir=\"ltr\">self.upstream_calls</code>: عدد مرات القراءة من <code dir=\"ltr\">zone</code> (كل قراءة لاسم، ومنها أسماء CNAME، تُحسب).</li><li>لحماية من الحلقات: إذا تجاوزت السلسلة 5 أسماء ارجع <code dir=\"ltr\">&quot;SERVFAIL&quot;</code>.</li></ul>",
    "starter": "class Resolver:\n    def __init__(self, zone):\n        self.zone = zone\n        self.upstream_calls = 0\n\n    def lookup(self, name, now):\n        return \"NXDOMAIN\"",
    "solution": "class Resolver:\n    def __init__(self, zone):\n        self.zone = zone\n        self.upstream_calls = 0\n        self.cache = {}\n\n    def lookup(self, name, now):\n        hit = self.cache.get(name)\n        if hit and hit[1] > now:\n            return hit[0]\n        current = name\n        for _ in range(5):\n            self.upstream_calls += 1\n            rec = self.zone.get(current)\n            if rec is None:\n                return \"NXDOMAIN\"\n            if \"A\" in rec:\n                self.cache[name] = (rec[\"A\"], now + rec.get(\"ttl\", 0))\n                return rec[\"A\"]\n            current = rec[\"CNAME\"]\n        return \"SERVFAIL\"",
    "test": "zone = {\n    \"shop.example\": {\"A\": \"203.0.113.10\", \"ttl\": 60},\n    \"www.shop.example\": {\"CNAME\": \"shop.example\", \"ttl\": 60},\n    \"cdn.example\": {\"CNAME\": \"www.shop.example\", \"ttl\": 60},\n    \"loop1.example\": {\"CNAME\": \"loop2.example\"},\n    \"loop2.example\": {\"CNAME\": \"loop1.example\"},\n}\nr = Resolver(zone)\nprint(r.lookup(\"cdn.example\", 0), r.upstream_calls)\nprint(r.lookup(\"cdn.example\", 30), r.upstream_calls)\nprint(r.lookup(\"cdn.example\", 61), r.upstream_calls)\nprint(r.lookup(\"ghost.example\", 0), r.lookup(\"loop1.example\", 0))",
    "expected": "203.0.113.10 3\n203.0.113.10 3\n203.0.113.10 6\nNXDOMAIN SERVFAIL"
   },
   "quiz": [
    {
     "q": "أي سجل DNS يحدد خادم البريد للنطاق؟",
     "o": [
      "MX",
      "A",
      "CNAME"
     ],
     "a": 0,
     "why": "و A للعنوان، و CNAME لاسم مستعار."
    },
    {
     "q": "ما الذي يحمي من تزوير إجابات DNS؟",
     "o": [
      "DNSSEC بتوقيع السجلات رقمياً",
      "زيادة TTL",
      "استخدام TCP بدل UDP"
     ],
     "a": 0,
     "why": "و DoH يحمي من التنصت."
    },
    {
     "q": "ماذا يعني TTL لسجل DNS؟",
     "o": [
      "المدة التي يُسمح بحفظ الإجابة فيها في الذاكرة المؤقتة",
      "عدد الخوادم المسؤولة",
      "رقم المنفذ"
     ],
     "a": 0,
     "why": "بعد انتهائها يسأل المحلّل من جديد."
    },
    {
     "q": "ما فائدة سجل SPF؟",
     "o": [
      "يحدد الخوادم المسموح لها بإرسال البريد باسم نطاقك فيصعب انتحاله",
      "يسرّع تحميل الموقع",
      "يشفّر البريد"
     ],
     "a": 0,
     "why": "ويكمّله DKIM و DMARC."
    }
   ]
  },
  {
   "body": "<h2>HTTP: لغة الويب</h2>\n<p><strong>HTTP</strong> بروتوكول نصي بين المتصفح والخادم: طلب (Request) ثم استجابة (Response).</p>\n<p>الطلب: سطر البداية (الطريقة والمسار والإصدار) ثم الترويسات ثم سطر فارغ ثم الجسم:</p>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>POST /login HTTP/1.1\nHost: shop.example\nContent-Type: application/x-www-form-urlencoded\nCookie: lang=ar\n\nuser=sara&amp;pass=secret</code></pre></div>\n<div class=\"table-wrap\"><table><thead><tr><th>الطريقة</th><th>الاستخدام</th></tr></thead><tbody><tr><td><code dir=\"ltr\">GET</code></td><td>جلب مورد (بلا جسم، والمعاملات في الرابط)</td></tr><tr><td><code dir=\"ltr\">POST</code></td><td>إرسال بيانات (نموذج، إنشاء)</td></tr><tr><td><code dir=\"ltr\">PUT</code> / <code dir=\"ltr\">PATCH</code></td><td>تعديل</td></tr><tr><td><code dir=\"ltr\">DELETE</code></td><td>حذف</td></tr></tbody></table></div>\n<p>ورموز الحالة: <code dir=\"ltr\">2xx</code> نجاح (200 OK و 201 Created)، و <code dir=\"ltr\">3xx</code> تحويل (301 و 302)، و <code dir=\"ltr\">4xx</code> خطأ العميل (400 و 401 غير موثّق و 403 ممنوع و 404 غير موجود)، و <code dir=\"ltr\">5xx</code> خطأ الخادم (500).</p>\n<h2>تحليل الطلب والاستجابة</h2>\n<div class=\"code-block src py-run\" data-src=\"from urllib.parse import urlsplit, parse_qs\n\nraw = (\n    &quot;GET /search?q=laptop&amp;page=2 HTTP/1.1\\r\\n&quot;\n    &quot;Host: shop.example\\r\\n&quot;\n    &quot;User-Agent: Mozilla/5.0\\r\\n&quot;\n    &quot;Cookie: session=abc123; lang=ar\\r\\n&quot;\n    &quot;\\r\\n&quot;\n)\n\nhead, body = raw.split(&quot;\\r\\n\\r\\n&quot;, 1)\nlines = head.split(&quot;\\r\\n&quot;)\nmethod, target, version = lines[0].split(&quot; &quot;)\nheaders = dict(l.split(&quot;: &quot;, 1) for l in lines[1:])\nurl = urlsplit(target)\n\nprint(method, url.path, version)\nprint(&quot;query:&quot;, parse_qs(url.query))\nprint(&quot;host:&quot;, headers[&quot;Host&quot;])\ncookies = dict(c.split(&quot;=&quot;, 1) for c in headers[&quot;Cookie&quot;].split(&quot;; &quot;))\nprint(&quot;cookies:&quot;, cookies)\n\nresponse = &quot;HTTP/1.1 302 Found\\r\\nLocation: https://shop.example/login\\r\\nSet-Cookie: session=xyz; HttpOnly; Secure; SameSite=Lax\\r\\n\\r\\n&quot;\nstatus_line = response.split(&quot;\\r\\n&quot;)[0]\nprint(status_line.split(&quot; &quot;, 2))\"><span class=\"code-label\">Python</span><pre dir=\"ltr\"><code>from urllib.parse import urlsplit, parse_qs\n\nraw = (\n    &quot;GET /search?q=laptop&amp;page=2 HTTP/1.1\\r\\n&quot;\n    &quot;Host: shop.example\\r\\n&quot;\n    &quot;User-Agent: Mozilla/5.0\\r\\n&quot;\n    &quot;Cookie: session=abc123; lang=ar\\r\\n&quot;\n    &quot;\\r\\n&quot;\n)\n\nhead, body = raw.split(&quot;\\r\\n\\r\\n&quot;, 1)\nlines = head.split(&quot;\\r\\n&quot;)\nmethod, target, version = lines[0].split(&quot; &quot;)\nheaders = dict(l.split(&quot;: &quot;, 1) for l in lines[1:])\nurl = urlsplit(target)\n\nprint(method, url.path, version)\nprint(&quot;query:&quot;, parse_qs(url.query))\nprint(&quot;host:&quot;, headers[&quot;Host&quot;])\ncookies = dict(c.split(&quot;=&quot;, 1) for c in headers[&quot;Cookie&quot;].split(&quot;; &quot;))\nprint(&quot;cookies:&quot;, cookies)\n\nresponse = &quot;HTTP/1.1 302 Found\\r\\nLocation: https://shop.example/login\\r\\nSet-Cookie: session=xyz; HttpOnly; Secure; SameSite=Lax\\r\\n\\r\\n&quot;\nstatus_line = response.split(&quot;\\r\\n&quot;)[0]\nprint(status_line.split(&quot; &quot;, 2))</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>GET /search HTTP/1.1\nquery: {&#x27;q&#x27;: [&#x27;laptop&#x27;], &#x27;page&#x27;: [&#x27;2&#x27;]}\nhost: shop.example\ncookies: {&#x27;session&#x27;: &#x27;abc123&#x27;, &#x27;lang&#x27;: &#x27;ar&#x27;}\n[&#x27;HTTP/1.1&#x27;, &#x27;302&#x27;, &#x27;Found&#x27;]</code></pre></div>\n<h2>الكوكيز والأمان</h2>\n<p>HTTP <strong>بلا حالة</strong>: كل طلب مستقل، لذلك يحفظ الموقع جلستك في <strong>كوكي</strong>. ومن يسرق كوكي الجلسة يدخل حسابك، لذلك خصائصه الأمنية مهمة:</p>\n<div class=\"table-wrap\"><table><thead><tr><th>الخاصية</th><th>الحماية</th></tr></thead><tbody><tr><td><code dir=\"ltr\">HttpOnly</code></td><td>JavaScript لا يقرؤه (يحد من سرقته بـ XSS)</td></tr><tr><td><code dir=\"ltr\">Secure</code></td><td>يُرسل عبر HTTPS فقط</td></tr><tr><td><code dir=\"ltr\">SameSite=Lax</code> أو <code dir=\"ltr\">Strict</code></td><td>لا يُرسل مع طلبات المواقع الأخرى (يحد من CSRF)</td></tr></tbody></table></div>\n<h2>HTTPS = HTTP فوق TLS</h2>\n<p>HTTP عادي نص مكشوف: أي أحد في شبكة المقهى يقرأ كلمة مرورك. <strong>HTTPS</strong> يمرر نفس HTTP داخل نفق <strong>TLS</strong> يوفر:</p>\n<ol><li><strong>السرية</strong>: التشفير.</li><li><strong>السلامة</strong>: أي تعديل يُكتشف.</li><li><strong>التوثيق</strong>: الشهادة تثبت أنك تحادث <code dir=\"ltr\">shop.example</code> الحقيقي.</li></ol>\n<div class=\"code-block src py-run\" data-src=\"steps = [\n    &quot;TCP handshake (SYN, SYN-ACK, ACK) to port 443&quot;,\n    &quot;ClientHello: supported TLS versions + cipher suites + key share&quot;,\n    &quot;ServerHello: chosen cipher + key share + certificate&quot;,\n    &quot;Client verifies certificate chain up to a trusted CA&quot;,\n    &quot;Both derive the same session keys (ECDHE)&quot;,\n    &quot;Encrypted HTTP request and response&quot;,\n]\nfor i, s in enumerate(steps, 1):\n    print(i, s)\"><span class=\"code-label\">Python</span><pre dir=\"ltr\"><code>steps = [\n    &quot;TCP handshake (SYN, SYN-ACK, ACK) to port 443&quot;,\n    &quot;ClientHello: supported TLS versions + cipher suites + key share&quot;,\n    &quot;ServerHello: chosen cipher + key share + certificate&quot;,\n    &quot;Client verifies certificate chain up to a trusted CA&quot;,\n    &quot;Both derive the same session keys (ECDHE)&quot;,\n    &quot;Encrypted HTTP request and response&quot;,\n]\nfor i, s in enumerate(steps, 1):\n    print(i, s)</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>1 TCP handshake (SYN, SYN-ACK, ACK) to port 443\n2 ClientHello: supported TLS versions + cipher suites + key share\n3 ServerHello: chosen cipher + key share + certificate\n4 Client verifies certificate chain up to a trusted CA\n5 Both derive the same session keys (ECDHE)\n6 Encrypted HTTP request and response</code></pre></div>\n<p>وترويسة <strong>HSTS</strong> (<code dir=\"ltr\">Strict-Transport-Security</code>) تُلزم المتصفح بـ HTTPS دائماً لذلك الموقع، فتمنع هجمات تخفيض الاتصال إلى HTTP. وتفاصيل التشفير والشهادات في دورة أساسيات الأمن.</p>",
   "exercise": {
    "prompt": "<p>اكتب دالة <code dir=\"ltr\">audit_cookie(header)</code> تأخذ قيمة ترويسة <code dir=\"ltr\">Set-Cookie</code> كاملة (مثل <code dir=\"ltr\">&quot;session=xyz; HttpOnly; Secure&quot;</code>) وترجع قائمة بالمشاكل الأمنية مرتبة أبجدياً:</p>\n<ul><li><code dir=\"ltr\">&quot;missing HttpOnly&quot;</code> إن لم توجد الخاصية.</li><li><code dir=\"ltr\">&quot;missing Secure&quot;</code> إن لم توجد.</li><li><code dir=\"ltr\">&quot;missing SameSite&quot;</code> إن لم توجد <code dir=\"ltr\">SameSite</code>، و <code dir=\"ltr\">&quot;weak SameSite&quot;</code> إن كانت قيمتها <code dir=\"ltr\">None</code>.</li></ul>\n<p>الخصائص لا تتأثر بحالة الأحرف (<code dir=\"ltr\">httponly</code> مثل <code dir=\"ltr\">HttpOnly</code>). وإذا لم تكن هناك مشاكل ارجع قائمة فارغة.</p>\n<p>ثم اكتب <code dir=\"ltr\">parse_status(response)</code> ترجع رمز الحالة <strong>كعدد</strong> من أول سطر في استجابة HTTP.</p>",
    "starter": "def audit_cookie(header):\n    return []\n\ndef parse_status(response):\n    return 0",
    "solution": "def audit_cookie(header):\n    parts = [p.strip() for p in header.split(\";\")][1:]\n    attrs = {}\n    for p in parts:\n        k, _, v = p.partition(\"=\")\n        attrs[k.lower()] = v\n    problems = []\n    if \"httponly\" not in attrs:\n        problems.append(\"missing HttpOnly\")\n    if \"secure\" not in attrs:\n        problems.append(\"missing Secure\")\n    if \"samesite\" not in attrs:\n        problems.append(\"missing SameSite\")\n    elif attrs[\"samesite\"].lower() == \"none\":\n        problems.append(\"weak SameSite\")\n    return sorted(problems)\n\ndef parse_status(response):\n    return int(response.split(\"\\r\\n\")[0].split(\" \")[1])",
    "test": "print(audit_cookie(\"session=xyz; HttpOnly; Secure; SameSite=Lax\"))\nprint(audit_cookie(\"session=xyz\"))\nprint(audit_cookie(\"id=1; secure; httponly; samesite=None\"))\nprint(audit_cookie(\"theme=dark; Path=/; SameSite=Strict\"))\nprint(parse_status(\"HTTP/1.1 404 Not Found\\r\\nContent-Length: 0\\r\\n\\r\\n\"), parse_status(\"HTTP/2 201 Created\\r\\n\\r\\n\") + 1)",
    "expected": "[]\n['missing HttpOnly', 'missing SameSite', 'missing Secure']\n['weak SameSite']\n['missing HttpOnly', 'missing Secure']\n404 202"
   },
   "quiz": [
    {
     "q": "ماذا يعني رمز الحالة 403؟",
     "o": [
      "ممنوع: الخادم عرفك لكن لا تملك صلاحية",
      "غير موجود",
      "خطأ في الخادم"
     ],
     "a": 0,
     "why": "و 401 يعني أنك لم توثّق هويتك بعد."
    },
    {
     "q": "ما فائدة خاصية HttpOnly في الكوكي؟",
     "o": [
      "تمنع JavaScript من قراءة الكوكي فتصعّب سرقته عبر XSS",
      "تجعل الكوكي يعمل على HTTP فقط",
      "تشفّر الكوكي"
     ],
     "a": 0,
     "why": "و Secure هي التي تقصره على HTTPS."
    },
    {
     "q": "ماذا يضيف HTTPS على HTTP؟",
     "o": [
      "التشفير والسلامة والتوثيق عبر TLS",
      "سرعة أكبر فقط",
      "ضغط الصور"
     ],
     "a": 0,
     "why": "نفس HTTP لكن داخل نفق TLS."
    },
    {
     "q": "ما فائدة ترويسة HSTS؟",
     "o": [
      "تُلزم المتصفح باستخدام HTTPS دائماً لذلك الموقع",
      "تخفي عنوان الخادم",
      "تمنع الكوكيز"
     ],
     "a": 0,
     "why": "فتمنع تخفيض الاتصال إلى HTTP المكشوف."
    }
   ]
  }
 ],
 [
  {
   "body": "<h2>المبدّل (Switch): داخل الشبكة المحلية</h2>\n<p><strong>المبدّل</strong> يربط الأجهزة في نفس الشبكة المحلية (LAN) ويعمل في الطبقة 2 بعناوين <strong>MAC</strong> (عنوان فريد لكل بطاقة شبكة مثل <code dir=\"ltr\">aa:bb:cc:00:11:22</code>). يتعلم مكان كل جهاز تلقائياً:</p>\n<ol><li>تصله إطار من منفذ ← يسجّل: &quot;عنوان المصدر هذا خلف هذا المنفذ&quot; (جدول MAC).</li><li>يبحث عن عنوان الوجهة في الجدول: إن وجده أرسل الإطار لذلك المنفذ فقط، وإلا <strong>أغرقه (Flood)</strong> لكل المنافذ عدا مصدره.</li></ol>\n<div class=\"code-block src py-run\" data-src=\"class Switch:\n    def __init__(self, ports):\n        self.ports = ports\n        self.table = {}\n\n    def receive(self, port, src, dst):\n        self.table[src] = port\n        if dst in self.table:\n            out = [self.table[dst]]\n        else:\n            out = [p for p in range(1, self.ports + 1) if p != port]\n        print(f&quot;frame {src[-2:]}-&gt;{dst[-2:]} on port {port}: forward to {out}&quot;)\n\nsw = Switch(4)\nsw.receive(1, &quot;aa:aa:aa:aa:aa:01&quot;, &quot;aa:aa:aa:aa:aa:03&quot;)   # لا يعرف 03 بعد\nsw.receive(3, &quot;aa:aa:aa:aa:aa:03&quot;, &quot;aa:aa:aa:aa:aa:01&quot;)   # يعرف 01 الآن\nsw.receive(1, &quot;aa:aa:aa:aa:aa:01&quot;, &quot;aa:aa:aa:aa:aa:03&quot;)\nprint(sw.table)\"><span class=\"code-label\">Python</span><pre dir=\"ltr\"><code>class Switch:\n    def __init__(self, ports):\n        self.ports = ports\n        self.table = {}\n\n    def receive(self, port, src, dst):\n        self.table[src] = port\n        if dst in self.table:\n            out = [self.table[dst]]\n        else:\n            out = [p for p in range(1, self.ports + 1) if p != port]\n        print(f&quot;frame {src[-2:]}-&gt;{dst[-2:]} on port {port}: forward to {out}&quot;)\n\nsw = Switch(4)\nsw.receive(1, &quot;aa:aa:aa:aa:aa:01&quot;, &quot;aa:aa:aa:aa:aa:03&quot;)   # لا يعرف 03 بعد\nsw.receive(3, &quot;aa:aa:aa:aa:aa:03&quot;, &quot;aa:aa:aa:aa:aa:01&quot;)   # يعرف 01 الآن\nsw.receive(1, &quot;aa:aa:aa:aa:aa:01&quot;, &quot;aa:aa:aa:aa:aa:03&quot;)\nprint(sw.table)</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>frame 01-&gt;03 on port 1: forward to [2, 3, 4]\nframe 03-&gt;01 on port 3: forward to [1]\nframe 01-&gt;03 on port 1: forward to [3]\n{&#x27;aa:aa:aa:aa:aa:01&#x27;: 1, &#x27;aa:aa:aa:aa:aa:03&#x27;: 3}</code></pre></div>\n<p>ومن هنا تأتي هجمات الطبقة 2: إغراق الجدول بعناوين مزيفة حتى يمتلئ فيبدأ المبدّل بإرسال كل شيء لكل المنافذ (MAC flooding)، وتزوير <strong>ARP</strong> (البروتوكول الذي يربط IP بـ MAC). الدفاعات: <strong>Port Security</strong> لتحديد عدد العناوين لكل منفذ، و <strong>Dynamic ARP Inspection</strong>، و <strong>VLANs</strong> لفصل الأقسام منطقياً على نفس المبدّل.</p>\n<h2>الموجّه (Router): بين الشبكات</h2>\n<p><strong>الموجّه</strong> يعمل في الطبقة 3 ويقرر إلى أين ترسل الحزمة بحسب <strong>جدول التوجيه</strong>. والقاعدة الذهبية: <strong>أطول بادئة مطابقة (Longest Prefix Match)</strong>، أي المسار الأكثر تحديداً يفوز. و <code dir=\"ltr\">0.0.0.0/0</code> هو <strong>المسار الافتراضي</strong> (Default Route) لكل ما لا يطابق غيره، عادة نحو الإنترنت:</p>\n<div class=\"code-block src py-run\" data-src=\"import ipaddress\n\nroutes = [\n    (&quot;0.0.0.0/0&quot;, &quot;isp-gateway&quot;),\n    (&quot;10.0.0.0/8&quot;, &quot;core-router&quot;),\n    (&quot;10.1.0.0/16&quot;, &quot;branch-riyadh&quot;),\n    (&quot;10.1.5.0/24&quot;, &quot;finance-firewall&quot;),\n]\ntable = [(ipaddress.ip_network(n), hop) for n, hop in routes]\n\ndef route(dst):\n    ip = ipaddress.ip_address(dst)\n    matches = [(net, hop) for net, hop in table if ip in net]\n    net, hop = max(matches, key=lambda m: m[0].prefixlen)\n    return f&quot;{dst:12} -&gt; {hop:16} (via {net})&quot;\n\nfor d in [&quot;10.1.5.20&quot;, &quot;10.1.9.9&quot;, &quot;10.200.0.1&quot;, &quot;8.8.8.8&quot;]:\n    print(route(d))\"><span class=\"code-label\">Python</span><pre dir=\"ltr\"><code>import ipaddress\n\nroutes = [\n    (&quot;0.0.0.0/0&quot;, &quot;isp-gateway&quot;),\n    (&quot;10.0.0.0/8&quot;, &quot;core-router&quot;),\n    (&quot;10.1.0.0/16&quot;, &quot;branch-riyadh&quot;),\n    (&quot;10.1.5.0/24&quot;, &quot;finance-firewall&quot;),\n]\ntable = [(ipaddress.ip_network(n), hop) for n, hop in routes]\n\ndef route(dst):\n    ip = ipaddress.ip_address(dst)\n    matches = [(net, hop) for net, hop in table if ip in net]\n    net, hop = max(matches, key=lambda m: m[0].prefixlen)\n    return f&quot;{dst:12} -&gt; {hop:16} (via {net})&quot;\n\nfor d in [&quot;10.1.5.20&quot;, &quot;10.1.9.9&quot;, &quot;10.200.0.1&quot;, &quot;8.8.8.8&quot;]:\n    print(route(d))</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>10.1.5.20    -&gt; finance-firewall (via 10.1.5.0/24)\n10.1.9.9     -&gt; branch-riyadh    (via 10.1.0.0/16)\n10.200.0.1   -&gt; core-router      (via 10.0.0.0/8)\n8.8.8.8      -&gt; isp-gateway      (via 0.0.0.0/0)</code></pre></div>\n<p><code dir=\"ltr\">10.1.5.20</code> يطابق أربعة مسارات، لكن <code dir=\"ltr\">/24</code> هو الأطول فيفوز.</p>\n<h2>traceroute و TTL</h2>\n<p>كل موجّه ينقص TTL بواحد، وعند الصفر يرمي الحزمة ويرسل للمصدر رسالة ICMP &quot;Time Exceeded&quot;. أداة <strong>traceroute</strong> تستغل ذلك: ترسل حزماً بـ TTL = 1 ثم 2 ثم 3... فيكشف كل موجّه نفسه:</p>\n<div class=\"code-block src py-run\" data-src=\"path = [&quot;192.168.1.1&quot;, &quot;10.20.0.1&quot;, &quot;62.149.32.1&quot;, &quot;93.184.216.34&quot;]\n\ndef send(ttl):\n    for hop_ip in path:\n        ttl -= 1\n        if hop_ip == path[-1]:\n            return hop_ip, &quot;reply&quot;\n        if ttl == 0:\n            return hop_ip, &quot;time exceeded&quot;\n\nfor ttl in range(1, 6):\n    hop, kind = send(ttl)\n    print(ttl, hop, kind)\n    if kind == &quot;reply&quot;:\n        break\"><span class=\"code-label\">Python</span><pre dir=\"ltr\"><code>path = [&quot;192.168.1.1&quot;, &quot;10.20.0.1&quot;, &quot;62.149.32.1&quot;, &quot;93.184.216.34&quot;]\n\ndef send(ttl):\n    for hop_ip in path:\n        ttl -= 1\n        if hop_ip == path[-1]:\n            return hop_ip, &quot;reply&quot;\n        if ttl == 0:\n            return hop_ip, &quot;time exceeded&quot;\n\nfor ttl in range(1, 6):\n    hop, kind = send(ttl)\n    print(ttl, hop, kind)\n    if kind == &quot;reply&quot;:\n        break</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>1 192.168.1.1 time exceeded\n2 10.20.0.1 time exceeded\n3 62.149.32.1 time exceeded\n4 93.184.216.34 reply</code></pre></div>",
   "exercise": {
    "prompt": "<p>اكتب صنف <code dir=\"ltr\">Router</code> فيه:</p>\n<ul><li><code dir=\"ltr\">add(network, hop)</code>: يضيف مساراً إلى الجدول (<code dir=\"ltr\">network</code> نص مثل <code dir=\"ltr\">&quot;10.0.0.0/8&quot;</code>).</li><li><code dir=\"ltr\">lookup(dst)</code>: يرجع <code dir=\"ltr\">hop</code> للمسار ذي <strong>أطول بادئة</strong> يطابق العنوان، أو <code dir=\"ltr\">None</code> إن لم يطابق شيء.</li><li><code dir=\"ltr\">remove(network)</code>: يحذف المسار.</li></ul>",
    "starter": "import ipaddress\n\nclass Router:\n    def __init__(self):\n        self.routes = {}\n\n    def add(self, network, hop):\n        pass\n\n    def lookup(self, dst):\n        return None\n\n    def remove(self, network):\n        pass",
    "solution": "import ipaddress\n\nclass Router:\n    def __init__(self):\n        self.routes = {}\n\n    def add(self, network, hop):\n        self.routes[ipaddress.ip_network(network)] = hop\n\n    def lookup(self, dst):\n        ip = ipaddress.ip_address(dst)\n        best = None\n        for net, hop in self.routes.items():\n            if ip in net and (best is None or net.prefixlen > best[0].prefixlen):\n                best = (net, hop)\n        return best[1] if best else None\n\n    def remove(self, network):\n        self.routes.pop(ipaddress.ip_network(network), None)",
    "test": "r = Router()\nr.add(\"10.0.0.0/8\", \"A\"); r.add(\"10.20.0.0/16\", \"B\"); r.add(\"10.20.30.0/24\", \"C\")\nprint(r.lookup(\"10.20.30.40\"), r.lookup(\"10.20.99.1\"), r.lookup(\"10.99.0.1\"), r.lookup(\"172.16.0.1\"))\nr.remove(\"10.20.30.0/24\"); r.add(\"0.0.0.0/0\", \"ISP\")\nprint(r.lookup(\"10.20.30.40\"), r.lookup(\"172.16.0.1\"))",
    "expected": "C B A None\nB ISP"
   },
   "quiz": [
    {
     "q": "على أي عنوان يعتمد المبدّل (Switch) لإرسال الإطارات؟",
     "o": [
      "MAC",
      "IP",
      "المنفذ (Port)"
     ],
     "a": 0,
     "why": "المبدّل في الطبقة 2، والموجّه في الطبقة 3."
    },
    {
     "q": "ماذا يفعل المبدّل بإطار وجهته غير موجودة في جدوله؟",
     "o": [
      "يرسله لكل المنافذ عدا منفذ المصدر",
      "يرميه",
      "يرجعه للمرسل"
     ],
     "a": 0,
     "why": "ثم يتعلم مكان الجهاز عندما يرد."
    },
    {
     "q": "أي مسار يختار الموجّه للعنوان 10.1.5.20؟",
     "o": [
      "10.1.5.0/24 لأنه أطول بادئة مطابقة",
      "0.0.0.0/0 لأنه الأول",
      "10.0.0.0/8 لأنه الأعم"
     ],
     "a": 0,
     "why": "المسار الأكثر تحديداً يفوز."
    },
    {
     "q": "ما الذي تحمي منه VLANs؟",
     "o": [
      "تفصل الأقسام منطقياً على نفس المبدّل فلا يصل جهاز الضيوف لأجهزة المالية مباشرة",
      "تسرّع الإنترنت",
      "تشفّر البيانات"
     ],
     "a": 0,
     "why": "الفصل يحد من انتشار أي اختراق."
    }
   ]
  },
  {
   "body": "<h2>الجدار الناري (Firewall)</h2>\n<p><strong>الجدار الناري</strong> يقرر أي حركة مسموحة بين الشبكات بحسب <strong>قواعد</strong> تُفحص <strong>بالترتيب</strong>، وأول قاعدة تطابق تُطبَّق. وأهم مبدأ: <strong>الرفض الافتراضي (Default Deny)</strong>: كل ما لم يُسمح به صراحة ممنوع.</p>\n<p>كل قاعدة تحدد: الاتجاه، والمصدر، والوجهة، والبروتوكول، والمنفذ، والقرار.</p>\n<div class=\"code-block src py-run\" data-src=\"import ipaddress\n\nrules = [\n    {&quot;src&quot;: &quot;0.0.0.0/0&quot;,   &quot;dst&quot;: &quot;10.0.1.10/32&quot;, &quot;proto&quot;: &quot;tcp&quot;, &quot;port&quot;: 443, &quot;action&quot;: &quot;allow&quot;},  # الموقع للجميع\n    {&quot;src&quot;: &quot;10.0.9.0/24&quot;, &quot;dst&quot;: &quot;10.0.1.0/24&quot;,  &quot;proto&quot;: &quot;tcp&quot;, &quot;port&quot;: 22,  &quot;action&quot;: &quot;allow&quot;},  # SSH من شبكة الإدارة فقط\n    {&quot;src&quot;: &quot;0.0.0.0/0&quot;,   &quot;dst&quot;: &quot;10.0.1.0/24&quot;,  &quot;proto&quot;: &quot;tcp&quot;, &quot;port&quot;: 22,  &quot;action&quot;: &quot;deny&quot;},\n    {&quot;src&quot;: &quot;0.0.0.0/0&quot;,   &quot;dst&quot;: &quot;0.0.0.0/0&quot;,    &quot;proto&quot;: &quot;any&quot;, &quot;port&quot;: None, &quot;action&quot;: &quot;deny&quot;},   # الرفض الافتراضي\n]\n\ndef check(src, dst, proto, port):\n    for i, r in enumerate(rules):\n        if (ipaddress.ip_address(src) in ipaddress.ip_network(r[&quot;src&quot;])\n                and ipaddress.ip_address(dst) in ipaddress.ip_network(r[&quot;dst&quot;])\n                and r[&quot;proto&quot;] in (proto, &quot;any&quot;)\n                and r[&quot;port&quot;] in (port, None)):\n            return f&quot;{r[&#x27;action&#x27;]:5} (rule {i})&quot;\n\nprint(check(&quot;203.0.113.5&quot;, &quot;10.0.1.10&quot;, &quot;tcp&quot;, 443))\nprint(check(&quot;10.0.9.7&quot;, &quot;10.0.1.20&quot;, &quot;tcp&quot;, 22))\nprint(check(&quot;203.0.113.5&quot;, &quot;10.0.1.20&quot;, &quot;tcp&quot;, 22))\nprint(check(&quot;203.0.113.5&quot;, &quot;10.0.1.10&quot;, &quot;tcp&quot;, 3306))\"><span class=\"code-label\">Python</span><pre dir=\"ltr\"><code>import ipaddress\n\nrules = [\n    {&quot;src&quot;: &quot;0.0.0.0/0&quot;,   &quot;dst&quot;: &quot;10.0.1.10/32&quot;, &quot;proto&quot;: &quot;tcp&quot;, &quot;port&quot;: 443, &quot;action&quot;: &quot;allow&quot;},  # الموقع للجميع\n    {&quot;src&quot;: &quot;10.0.9.0/24&quot;, &quot;dst&quot;: &quot;10.0.1.0/24&quot;,  &quot;proto&quot;: &quot;tcp&quot;, &quot;port&quot;: 22,  &quot;action&quot;: &quot;allow&quot;},  # SSH من شبكة الإدارة فقط\n    {&quot;src&quot;: &quot;0.0.0.0/0&quot;,   &quot;dst&quot;: &quot;10.0.1.0/24&quot;,  &quot;proto&quot;: &quot;tcp&quot;, &quot;port&quot;: 22,  &quot;action&quot;: &quot;deny&quot;},\n    {&quot;src&quot;: &quot;0.0.0.0/0&quot;,   &quot;dst&quot;: &quot;0.0.0.0/0&quot;,    &quot;proto&quot;: &quot;any&quot;, &quot;port&quot;: None, &quot;action&quot;: &quot;deny&quot;},   # الرفض الافتراضي\n]\n\ndef check(src, dst, proto, port):\n    for i, r in enumerate(rules):\n        if (ipaddress.ip_address(src) in ipaddress.ip_network(r[&quot;src&quot;])\n                and ipaddress.ip_address(dst) in ipaddress.ip_network(r[&quot;dst&quot;])\n                and r[&quot;proto&quot;] in (proto, &quot;any&quot;)\n                and r[&quot;port&quot;] in (port, None)):\n            return f&quot;{r[&#x27;action&#x27;]:5} (rule {i})&quot;\n\nprint(check(&quot;203.0.113.5&quot;, &quot;10.0.1.10&quot;, &quot;tcp&quot;, 443))\nprint(check(&quot;10.0.9.7&quot;, &quot;10.0.1.20&quot;, &quot;tcp&quot;, 22))\nprint(check(&quot;203.0.113.5&quot;, &quot;10.0.1.20&quot;, &quot;tcp&quot;, 22))\nprint(check(&quot;203.0.113.5&quot;, &quot;10.0.1.10&quot;, &quot;tcp&quot;, 3306))</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>allow (rule 0)\nallow (rule 1)\ndeny  (rule 2)\ndeny  (rule 3)</code></pre></div>\n<p>ترتيب القواعد حاسم: لو وضعنا قاعدة رفض SSH للجميع قبل قاعدة السماح لشبكة الإدارة، لمُنع المدير أيضاً.</p>\n<h2>عديم الحالة مقابل ذي الحالة</h2>\n<ul><li><strong>عديم الحالة (Stateless)</strong>: يفحص كل حزمة وحدها، فيجب أن تسمح صراحة بحركة الرد أيضاً.</li><li><strong>ذو الحالة (Stateful)</strong>: يتذكر الاتصالات التي بدأت من الداخل ويسمح بردودها تلقائياً، ويرفض أي &quot;رد&quot; لم يُطلب. هذا هو الأشيع اليوم.</li></ul>\n<div class=\"code-block src py-run\" data-src=\"class StatefulFirewall:\n    def __init__(self):\n        self.connections = set()\n\n    def outbound(self, src, sport, dst, dport):\n        self.connections.add((src, sport, dst, dport))\n        return &quot;allow (new outbound)&quot;\n\n    def inbound(self, src, sport, dst, dport):\n        if (dst, dport, src, sport) in self.connections:\n            return &quot;allow (reply to known connection)&quot;\n        return &quot;deny (unsolicited)&quot;\n\nfw = StatefulFirewall()\nprint(fw.outbound(&quot;192.168.1.10&quot;, 51000, &quot;93.184.216.34&quot;, 443))\nprint(fw.inbound(&quot;93.184.216.34&quot;, 443, &quot;192.168.1.10&quot;, 51000))\nprint(fw.inbound(&quot;203.0.113.66&quot;, 443, &quot;192.168.1.10&quot;, 51000))\nprint(fw.inbound(&quot;93.184.216.34&quot;, 443, &quot;192.168.1.10&quot;, 51001))\"><span class=\"code-label\">Python</span><pre dir=\"ltr\"><code>class StatefulFirewall:\n    def __init__(self):\n        self.connections = set()\n\n    def outbound(self, src, sport, dst, dport):\n        self.connections.add((src, sport, dst, dport))\n        return &quot;allow (new outbound)&quot;\n\n    def inbound(self, src, sport, dst, dport):\n        if (dst, dport, src, sport) in self.connections:\n            return &quot;allow (reply to known connection)&quot;\n        return &quot;deny (unsolicited)&quot;\n\nfw = StatefulFirewall()\nprint(fw.outbound(&quot;192.168.1.10&quot;, 51000, &quot;93.184.216.34&quot;, 443))\nprint(fw.inbound(&quot;93.184.216.34&quot;, 443, &quot;192.168.1.10&quot;, 51000))\nprint(fw.inbound(&quot;203.0.113.66&quot;, 443, &quot;192.168.1.10&quot;, 51000))\nprint(fw.inbound(&quot;93.184.216.34&quot;, 443, &quot;192.168.1.10&quot;, 51001))</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>allow (new outbound)\nallow (reply to known connection)\ndeny (unsolicited)\ndeny (unsolicited)</code></pre></div>\n<h2>أنواع أخرى</h2>\n<ul><li><strong>جدار التطبيقات للويب (WAF)</strong>: يفحص محتوى طلبات HTTP نفسها في الطبقة 7 بحثاً عن أنماط هجمات.</li><li><strong>الجدار الناري للمضيف</strong>: على الجهاز نفسه، مثل <code dir=\"ltr\">ufw</code> في Linux (في دورة Linux) و Windows Defender Firewall.</li><li><strong>IDS و IPS</strong>: أنظمة كشف التسلل ومنعه، تراقب الحركة بحثاً عن أنماط هجمات معروفة (في دورة الفريق الأزرق).</li></ul>",
   "exercise": {
    "prompt": "<p>اكتب دالة <code dir=\"ltr\">evaluate(rules, packet)</code> لجدار ناري بالرفض الافتراضي:</p>\n<ul><li><code dir=\"ltr\">rules</code> قائمة قواعد، كل قاعدة قاموس فيه <code dir=\"ltr\">action</code> (<code dir=\"ltr\">&quot;allow&quot;</code> أو <code dir=\"ltr\">&quot;deny&quot;</code>) و <code dir=\"ltr\">src</code> (شبكة CIDR) و <code dir=\"ltr\">ports</code> (قائمة منافذ، أو <code dir=\"ltr\">&quot;any&quot;</code>).</li><li><code dir=\"ltr\">packet</code> قاموس فيه <code dir=\"ltr\">src</code> و <code dir=\"ltr\">port</code>.</li><li>القواعد تُفحص بالترتيب، وأول قاعدة تطابق تحدد النتيجة. وإن لم تطابق أي قاعدة فالنتيجة <code dir=\"ltr\">&quot;deny&quot;</code>.</li><li>ارجع زوجاً <code dir=\"ltr\">(القرار, رقم القاعدة)</code>، ورقم القاعدة <code dir=\"ltr\">None</code> عند الرفض الافتراضي.</li></ul>\n<p>ثم اكتب دالة <code dir=\"ltr\">shadowed(rules)</code> ترجع أرقام القواعد التي <strong>لن تطابق أبداً</strong> لأن قاعدة قبلها تغطيها كلياً: شبكتها جزء من شبكة القاعدة السابقة (<code dir=\"ltr\">subnet_of</code>)، ومنافذها كلها مغطاة (القاعدة السابقة <code dir=\"ltr\">&quot;any&quot;</code> أو تحوي كل منافذها).</p>",
    "starter": "import ipaddress\n\ndef evaluate(rules, packet):\n    return (\"allow\", None)\n\ndef shadowed(rules):\n    return []",
    "solution": "import ipaddress\n\ndef _ports_cover(a, b):\n    if a == \"any\":\n        return True\n    if b == \"any\":\n        return False\n    return set(b) <= set(a)\n\ndef evaluate(rules, packet):\n    ip = ipaddress.ip_address(packet[\"src\"])\n    for i, r in enumerate(rules):\n        if ip in ipaddress.ip_network(r[\"src\"]) and (r[\"ports\"] == \"any\" or packet[\"port\"] in r[\"ports\"]):\n            return (r[\"action\"], i)\n    return (\"deny\", None)\n\ndef shadowed(rules):\n    result = []\n    for j, later in enumerate(rules):\n        for earlier in rules[:j]:\n            if (ipaddress.ip_network(later[\"src\"]).subnet_of(ipaddress.ip_network(earlier[\"src\"]))\n                    and _ports_cover(earlier[\"ports\"], later[\"ports\"])):\n                result.append(j)\n                break\n    return result",
    "test": "rules = [\n    {\"action\": \"allow\", \"src\": \"10.0.0.0/8\", \"ports\": [80, 443]},\n    {\"action\": \"deny\", \"src\": \"10.5.0.0/16\", \"ports\": [443]},\n    {\"action\": \"allow\", \"src\": \"192.168.1.0/24\", \"ports\": \"any\"},\n    {\"action\": \"deny\", \"src\": \"192.168.1.128/25\", \"ports\": [22]},\n    {\"action\": \"allow\", \"src\": \"0.0.0.0/0\", \"ports\": [443]},\n]\nprint(evaluate(rules, {\"src\": \"10.5.1.1\", \"port\": 443}))\nprint(evaluate(rules, {\"src\": \"192.168.1.200\", \"port\": 22}))\nprint(evaluate(rules, {\"src\": \"8.8.8.8\", \"port\": 443}))\nprint(evaluate(rules, {\"src\": \"8.8.8.8\", \"port\": 22}))\nprint(shadowed(rules))",
    "expected": "('allow', 0)\n('allow', 2)\n('allow', 4)\n('deny', None)\n[1, 3]"
   },
   "quiz": [
    {
     "q": "ما مبدأ &quot;الرفض الافتراضي&quot; (Default Deny)؟",
     "o": [
      "كل حركة ممنوعة إلا ما سُمح به صراحة",
      "كل حركة مسموحة إلا ما مُنع صراحة",
      "رفض كل الحركة دائماً"
     ],
     "a": 0,
     "why": "أكثر أماناً لأن الخدمات المنسية لا تُفتح بالخطأ."
    },
    {
     "q": "لماذا ترتيب قواعد الجدار الناري مهم؟",
     "o": [
      "لأن أول قاعدة تطابق تُطبَّق وما بعدها يُتجاهل",
      "لأن القواعد تُطبَّق كلها بالتساوي",
      "لا أهمية له"
     ],
     "a": 0,
     "why": "قاعدة عامة مبكرة قد &quot;تحجب&quot; قاعدة محددة بعدها."
    },
    {
     "q": "ما ميزة الجدار الناري ذي الحالة (Stateful)؟",
     "o": [
      "يسمح تلقائياً بردود الاتصالات التي بدأت من الداخل ويرفض الردود غير المطلوبة",
      "لا يحتاج قواعد",
      "يفحص محتوى صفحات الويب"
     ],
     "a": 0,
     "why": "الفحص في الطبقة 7 هو عمل الـ WAF."
    },
    {
     "q": "أين يعمل جدار تطبيقات الويب (WAF)؟",
     "o": [
      "الطبقة 7: يفحص محتوى طلبات HTTP",
      "الطبقة 2",
      "الطبقة 1"
     ],
     "a": 0,
     "why": "ويكمّل الجدار الناري الشبكي ولا يغني عن كتابة كود آمن."
    }
   ]
  },
  {
   "body": "<h2>VPN: شبكة خاصة فوق شبكة عامة</h2>\n<p><strong>VPN</strong> (الشبكة الافتراضية الخاصة) تبني <strong>نفقاً مشفراً</strong> عبر الإنترنت، فيبدو جهازك كأنه داخل شبكة الشركة، ولا يرى من في الطريق (شبكة المقهى أو مزود الخدمة) إلا بيانات مشفرة.</p>\n<p>استخداماتها:</p>\n<ul><li><strong>وصول عن بعد</strong>: موظف يصل لخوادم الشركة الداخلية من بيته.</li><li><strong>موقع لموقع (Site-to-Site)</strong>: ربط فرعين للشركة دائماً عبر الإنترنت.</li></ul>\n<p>وأشهر تقنياتها: <strong>IPsec</strong> و <strong>WireGuard</strong> و <strong>OpenVPN</strong> و SSL VPN.</p>\n<h2>كيف يعمل النفق</h2>\n<p>الحزمة الأصلية (بعناوينها الداخلية) <strong>تُشفَّر كاملة</strong> وتُوضع داخل حزمة جديدة بعناوين عامة بين طرفي النفق. نحاكي ذلك بتشفير <strong>AES-GCM</strong> الحقيقي من مكتبة <code dir=\"ltr\">cryptography</code>:</p>\n<div class=\"code-block src py-run\" data-src=\"import os, json\nfrom cryptography.hazmat.primitives.ciphers.aead import AESGCM\n\nkey = AESGCM.generate_key(bit_length=256)    # مفتاح مشترك يُتفق عليه عند إنشاء النفق\ntunnel = AESGCM(key)\n\ninner = {&quot;src&quot;: &quot;10.8.0.2&quot;, &quot;dst&quot;: &quot;10.0.5.20&quot;, &quot;data&quot;: &quot;GET /payroll&quot;}\nnonce = os.urandom(12)\nencrypted = tunnel.encrypt(nonce, json.dumps(inner).encode(), None)\n\nouter = {&quot;src&quot;: &quot;198.51.100.7&quot;, &quot;dst&quot;: &quot;203.0.113.1&quot;, &quot;proto&quot;: &quot;UDP 51820&quot;, &quot;payload&quot;: encrypted}\nprint(&quot;on the internet:&quot;, outer[&quot;src&quot;], &quot;-&gt;&quot;, outer[&quot;dst&quot;], outer[&quot;proto&quot;])\nprint(&quot;payload readable?&quot;, b&quot;payroll&quot; in outer[&quot;payload&quot;], &quot;| size:&quot;, len(outer[&quot;payload&quot;]))\n\n# الطرف الآخر من النفق يفك التشفير ويمرر الحزمة الداخلية\ndecrypted = json.loads(tunnel.decrypt(nonce, outer[&quot;payload&quot;], None))\nprint(&quot;inside the company:&quot;, decrypted)\n\n# أي تعديل في الطريق يُكتشف\ntampered = bytearray(encrypted); tampered[0] ^= 1\ntry:\n    tunnel.decrypt(nonce, bytes(tampered), None)\nexcept Exception as e:\n    print(&quot;tampered packet rejected:&quot;, type(e).__name__)\"><span class=\"code-label\">Python</span><pre dir=\"ltr\"><code>import os, json\nfrom cryptography.hazmat.primitives.ciphers.aead import AESGCM\n\nkey = AESGCM.generate_key(bit_length=256)    # مفتاح مشترك يُتفق عليه عند إنشاء النفق\ntunnel = AESGCM(key)\n\ninner = {&quot;src&quot;: &quot;10.8.0.2&quot;, &quot;dst&quot;: &quot;10.0.5.20&quot;, &quot;data&quot;: &quot;GET /payroll&quot;}\nnonce = os.urandom(12)\nencrypted = tunnel.encrypt(nonce, json.dumps(inner).encode(), None)\n\nouter = {&quot;src&quot;: &quot;198.51.100.7&quot;, &quot;dst&quot;: &quot;203.0.113.1&quot;, &quot;proto&quot;: &quot;UDP 51820&quot;, &quot;payload&quot;: encrypted}\nprint(&quot;on the internet:&quot;, outer[&quot;src&quot;], &quot;-&gt;&quot;, outer[&quot;dst&quot;], outer[&quot;proto&quot;])\nprint(&quot;payload readable?&quot;, b&quot;payroll&quot; in outer[&quot;payload&quot;], &quot;| size:&quot;, len(outer[&quot;payload&quot;]))\n\n# الطرف الآخر من النفق يفك التشفير ويمرر الحزمة الداخلية\ndecrypted = json.loads(tunnel.decrypt(nonce, outer[&quot;payload&quot;], None))\nprint(&quot;inside the company:&quot;, decrypted)\n\n# أي تعديل في الطريق يُكتشف\ntampered = bytearray(encrypted); tampered[0] ^= 1\ntry:\n    tunnel.decrypt(nonce, bytes(tampered), None)\nexcept Exception as e:\n    print(&quot;tampered packet rejected:&quot;, type(e).__name__)</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>on the internet: 198.51.100.7 -&gt; 203.0.113.1 UDP 51820\npayload readable? False | size: 79\ninside the company: {&#x27;src&#x27;: &#x27;10.8.0.2&#x27;, &#x27;dst&#x27;: &#x27;10.0.5.20&#x27;, &#x27;data&#x27;: &#x27;GET /payroll&#x27;}\ntampered packet rejected: InvalidTag</code></pre></div>\n<ul><li>المراقب في الطريق يرى فقط أن جهازك يتحدث مع بوابة VPN، لا ما بداخل الحزمة.</li><li><strong>AES-GCM</strong> يوفر السرية والسلامة معاً: الحزمة المعدّلة تُرفض.</li><li>WireGuard يعمل على UDP 51820 افتراضياً، و IPsec على UDP 500 و 4500.</li></ul>\n<h2>النفق الكامل والنفق المقسوم</h2>\n<ul><li><strong>النفق الكامل (Full Tunnel)</strong>: كل حركتك تمر عبر الشركة، فتراقبها وتحميها، لكنه أبطأ.</li><li><strong>النفق المقسوم (Split Tunnel)</strong>: فقط حركة شبكات الشركة تدخل النفق، والباقي يذهب للإنترنت مباشرة. أسرع، لكن الجهاز يبقى معرضاً للإنترنت دون حماية الشركة.</li></ul>\n<div class=\"code-block src py-run\" data-src=\"import ipaddress\n\ncompany_routes = [ipaddress.ip_network(n) for n in [&quot;10.0.0.0/16&quot;, &quot;172.20.0.0/16&quot;]]\n\ndef via(dst, split=True):\n    ip = ipaddress.ip_address(dst)\n    if not split or any(ip in n for n in company_routes):\n        return &quot;tunnel&quot;\n    return &quot;direct&quot;\n\nfor d in [&quot;10.0.5.20&quot;, &quot;172.20.3.3&quot;, &quot;142.250.74.14&quot;]:\n    print(f&quot;{d:15} split={via(d):7} full={via(d, split=False)}&quot;)\"><span class=\"code-label\">Python</span><pre dir=\"ltr\"><code>import ipaddress\n\ncompany_routes = [ipaddress.ip_network(n) for n in [&quot;10.0.0.0/16&quot;, &quot;172.20.0.0/16&quot;]]\n\ndef via(dst, split=True):\n    ip = ipaddress.ip_address(dst)\n    if not split or any(ip in n for n in company_routes):\n        return &quot;tunnel&quot;\n    return &quot;direct&quot;\n\nfor d in [&quot;10.0.5.20&quot;, &quot;172.20.3.3&quot;, &quot;142.250.74.14&quot;]:\n    print(f&quot;{d:15} split={via(d):7} full={via(d, split=False)}&quot;)</code></pre></div>\n<div class=\"code-block out\"><span class=\"code-label\">المخرجات</span><pre dir=\"ltr\"><code>10.0.5.20       split=tunnel  full=tunnel\n172.20.3.3      split=tunnel  full=tunnel\n142.250.74.14   split=direct  full=tunnel</code></pre></div>\n<h2>ما لا تفعله VPN</h2>\n<p>VPN تحمي الطريق فقط: لا تحميك من موقع خبيث تزوره، ولا من برمجية خبيثة على جهازك، وخدمات VPN التجارية ترى حركتك هي بدلاً من مزود الإنترنت. والاتجاه الحديث في الشركات: <strong>Zero Trust</strong>، أي لا ثقة تلقائية حتى داخل الشبكة، وكل طلب يُتحقق منه.</p>",
   "exercise": {
    "prompt": "<p>اكتب دالتين لنفق مبسّط بمكتبة <code dir=\"ltr\">cryptography</code>:</p>\n<ul><li><code dir=\"ltr\">seal(key, packet)</code>: تأخذ مفتاح AES-GCM وقاموس حزمة، وترجع بايتات: <strong>12 بايتاً nonce عشوائية</strong> (<code dir=\"ltr\">os.urandom(12)</code>) متبوعة بالحزمة مشفرة (JSON مرمّز بـ UTF-8).</li><li><code dir=\"ltr\">open_sealed(key, blob)</code>: تفصل أول 12 بايتاً كـ nonce، وتفك تشفير الباقي وترجع القاموس. وإذا فشل فك التشفير (حزمة معدّلة أو مفتاح خاطئ) ترجع <code dir=\"ltr\">None</code>.</li></ul>",
    "starter": "import os, json\nfrom cryptography.hazmat.primitives.ciphers.aead import AESGCM\n\ndef seal(key, packet):\n    return b\"\"\n\ndef open_sealed(key, blob):\n    return None",
    "solution": "import os, json\nfrom cryptography.hazmat.primitives.ciphers.aead import AESGCM\nfrom cryptography.exceptions import InvalidTag\n\ndef seal(key, packet):\n    nonce = os.urandom(12)\n    return nonce + AESGCM(key).encrypt(nonce, json.dumps(packet).encode(\"utf-8\"), None)\n\ndef open_sealed(key, blob):\n    nonce, data = blob[:12], blob[12:]\n    try:\n        return json.loads(AESGCM(key).decrypt(nonce, data, None))\n    except InvalidTag:\n        return None",
    "test": "k = AESGCM.generate_key(bit_length=128)\npkt = {\"dst\": \"10.0.0.5\", \"msg\": \"hello\"}\nb1, b2 = seal(k, pkt), seal(k, pkt)\nprint(open_sealed(k, b1) == pkt, b1 != b2, b\"hello\" in b1, len(b1) > 12)\nbad = bytearray(b1); bad[-1] ^= 0xFF\nprint(open_sealed(k, bytes(bad)), open_sealed(AESGCM.generate_key(bit_length=128), b1))",
    "expected": "True True False True\nNone None"
   },
   "quiz": [
    {
     "q": "ماذا يرى مراقب على شبكة المقهى عندما تستخدم VPN؟",
     "o": [
      "أنك تتصل ببوابة VPN فقط، والمحتوى مشفر",
      "كل المواقع التي تزورها",
      "كلمات مرورك"
     ],
     "a": 0,
     "why": "وجهات الحزم الداخلية مشفرة داخل النفق."
    },
    {
     "q": "ما الفرق بين النفق الكامل والمقسوم؟",
     "o": [
      "الكامل يمرر كل الحركة عبر الشركة، والمقسوم يمرر حركة شبكاتها فقط",
      "لا فرق",
      "المقسوم بلا تشفير"
     ],
     "a": 0,
     "why": "المقسوم أسرع لكنه أقل حماية."
    },
    {
     "q": "لماذا رُفضت الحزمة المعدّلة في مثال AES-GCM؟",
     "o": [
      "لأن AES-GCM يتحقق من سلامة البيانات فيكتشف أي تعديل",
      "لأن حجمها تغيّر",
      "لأن المفتاح انتهى"
     ],
     "a": 0,
     "why": "التشفير الموثّق (AEAD) يجمع السرية والسلامة."
    },
    {
     "q": "هل تحميك VPN من موقع تصيّد تفتحه بنفسك؟",
     "o": [
      "لا، تحمي الطريق فقط لا ما تزوره",
      "نعم دائماً",
      "نعم إذا كانت مدفوعة"
     ],
     "a": 0,
     "why": "الحماية من التصيد تحتاج وعياً وأدوات أخرى."
    }
   ]
  }
 ]
], {"runner": "python"});
