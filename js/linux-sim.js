// طرفية Linux محاكاة (Ubuntu 24.04) لدورة Linux: نظام ملفات بصلاحيات ومالكين، ومستخدمون ومجموعات و sudo،
// و apt، والعمليات، و systemd و journalctl، وأوامر الشبكة، و SSH بين جهازين، و ufw، وأدوات النصوص والأنابيب |
// المخرجات تحاكي أدوات GNU و Ubuntu الحقيقية لكنها نموذج تعليمي حتمي، لا نظام تشغيل حقيقي
(function (root) {
  const CW = root.CW = root.CW || {};

  // ---------- الوقت (ساعة ثابتة تتقدم مع الأوامر) ----------
  const BOOT = Date.UTC(2026, 10, 8, 9, 0, 0);
  const MON = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const DAY = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const pad = (n, w = 2) => String(n).padStart(w, "0");
  const hms = t => { const d = new Date(t); return `${pad(d.getUTCHours())}:${pad(d.getUTCMinutes())}:${pad(d.getUTCSeconds())}`; };
  const lsDate = t => { const d = new Date(t); return `${MON[d.getUTCMonth()]} ${String(d.getUTCDate()).padStart(2)} ${pad(d.getUTCHours())}:${pad(d.getUTCMinutes())}`; };
  const jDate = t => { const d = new Date(t); return `${MON[d.getUTCMonth()]} ${pad(d.getUTCDate())} ${hms(t)}`; };
  const fullDate = t => { const d = new Date(t); return `${DAY[d.getUTCDay()]} ${d.getUTCFullYear()}-${pad(d.getUTCMonth() + 1)}-${pad(d.getUTCDate())} ${hms(t)} UTC`; };
  const isoDate = t => new Date(t).toISOString().replace(/\.(\d{3})Z$/, (m, ms) => `.${ms}123+00:00`);
  const ago = s => s < 60 ? `${s}s ago` : s < 3600 ? `${Math.floor(s / 60)}min ago` : `${Math.floor(s / 3600)}h ${Math.floor(s % 3600 / 60)}min ago`;

  // تجزئة بسيطة حتمية (لبصمات المفاتيح الشكلية فقط، وليست تشفيراً)
  const fakeBytes = (s, n) => { let h = 2166136261; const out = []; for (let i = 0; i < n; i++) { for (const c of s + i) h = Math.imul(h ^ c.charCodeAt(0), 16777619) >>> 0; out.push(h & 255); } return out; };
  const b64 = bytes => { const A = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"; let s = ""; for (let i = 0; i < bytes.length; i += 3) { const n = (bytes[i] << 16) | ((bytes[i + 1] || 0) << 8) | (bytes[i + 2] || 0); s += A[n >> 18 & 63] + A[n >> 12 & 63] + (i + 1 < bytes.length ? A[n >> 6 & 63] : "=") + (i + 2 < bytes.length ? A[n & 63] : "="); } return s; };
  // صورة randomart بخوارزمية "الأسقف السكران" نفسها التي يستخدمها OpenSSH
  function randomart(bytes, title) {
    const W = 17, H = 9, f = Array(W * H).fill(0);
    let x = 8, y = 4;
    for (const b of bytes) for (let k = 0; k < 4; k++) {
      const d = (b >> (k * 2)) & 3;
      x = Math.max(0, Math.min(W - 1, x + (d & 1 ? 1 : -1)));
      y = Math.max(0, Math.min(H - 1, y + (d & 2 ? 1 : -1)));
      f[y * W + x]++;
    }
    const sym = " .o+=*BOX@%&#/^SE";
    f[4 * W + 8] = 15; f[y * W + x] = 16;
    const lines = [`+${title.padStart(Math.floor((W + title.length) / 2), "-").padEnd(W, "-")}+`];
    for (let r = 0; r < H; r++) lines.push("|" + f.slice(r * W, r * W + W).map(v => sym[Math.min(v, 16)]).join("") + "|");
    lines.push("+----[SHA256]-----+");
    return lines.join("\n");
  }

  // ---------- الحزم المتاحة ----------
  const PKGS = {
    tree: { v: "2.1.1-2ubuntu3", size: "47.1 kB", disk: "111 kB", sec: "universe", bin: ["/usr/bin/tree"] },
    htop: { v: "3.3.0-4build1", size: "171 kB", disk: "434 kB", sec: "main", bin: ["/usr/bin/htop"], deps: ["libnl-3-200", "libnl-genl-3-200"] },
    nginx: { v: "1.24.0-2ubuntu7.1", size: "521 kB", disk: "1,596 kB", sec: "main", bin: ["/usr/sbin/nginx"], deps: ["nginx-common"], service: "nginx" },
    curl: { v: "8.5.0-2ubuntu10.4", size: "227 kB", disk: "534 kB", sec: "main", bin: ["/usr/bin/curl"], installed: true },
    ufw: { v: "0.36.2-6", size: "169 kB", disk: "880 kB", sec: "main", bin: ["/usr/sbin/ufw"], installed: true },
    "openssh-server": { v: "1:9.6p1-3ubuntu13.5", size: "510 kB", disk: "2,028 kB", sec: "main", bin: ["/usr/sbin/sshd"], installed: true, service: "ssh" },
    "net-tools": { v: "2.10-0.1ubuntu4", size: "204 kB", disk: "811 kB", sec: "main", bin: ["/usr/sbin/ifconfig", "/usr/bin/netstat"] },
    fail2ban: { v: "1.0.2-3ubuntu0.1", size: "409 kB", disk: "2,172 kB", sec: "universe", bin: ["/usr/bin/fail2ban-client"], deps: ["python3-pyinotify", "whois"], service: "fail2ban" },
    git: { v: "1:2.43.0-1ubuntu7.1", size: "3,679 kB", disk: "20.8 MB", sec: "main", bin: ["/usr/bin/git"] },
    "unattended-upgrades": { v: "2.9.1+nmu4ubuntu1", size: "54.7 kB", disk: "411 kB", sec: "main", installed: true },
    openssl: { v: "3.0.13-0ubuntu3.4", upgrade: "3.0.13-0ubuntu3.5", size: "1,003 kB", disk: "2,153 kB", sec: "main", installed: true }
  };
  const UPGRADABLE = ["openssl", "libssl3t64", "tzdata"];
  const SERVICES = {
    ssh: { desc: "OpenBSD Secure Shell server", unit: "/usr/lib/systemd/system/ssh.service", exec: "/usr/sbin/sshd -D", proc: "sshd: /usr/sbin/sshd -D [listener] 0 of 10-100 startups", user: "root", port: 22, docs: "man:sshd(8)" },
    cron: { desc: "Regular background program processing daemon", unit: "/usr/lib/systemd/system/cron.service", exec: "/usr/sbin/cron -f -P", proc: "/usr/sbin/cron -f -P", user: "root", docs: "man:cron(8)" },
    nginx: { desc: "A high performance web server and a reverse proxy server", unit: "/usr/lib/systemd/system/nginx.service", exec: "/usr/sbin/nginx", proc: "nginx: master process /usr/sbin/nginx -g daemon on; master_process on;", worker: "nginx: worker process", user: "root", port: 80, docs: "man:nginx(8)" },
    fail2ban: { desc: "Fail2Ban Service", unit: "/usr/lib/systemd/system/fail2ban.service", exec: "/usr/bin/fail2ban-server -xf start", proc: "/usr/bin/python3 /usr/bin/fail2ban-server -xf start", user: "root", docs: "man:fail2ban(1)" },
    rsyslog: { desc: "System Logging Service", unit: "/usr/lib/systemd/system/rsyslog.service", exec: "/usr/sbin/rsyslogd -n -iNONE", proc: "/usr/sbin/rsyslogd -n -iNONE", user: "syslog", docs: "man:rsyslogd(8)" }
  };

  // ---------- الجهاز ----------
  function node(type, mode, owner, group, content) { return { type, mode, owner, group, content: content || "", children: type === "d" ? {} : null, mtime: 0 }; }
  function Machine(hostname, ip, opts = {}) {
    const M = { hostname, ip, mac: opts.mac || "52:54:00:12:34:56", nextPid: 2300, nextUid: 1001, clock: () => M.now, now: BOOT + 3600 * 1000 };
    const root = node("d", 0o755, "root", "root");
    M.root = root;
    M.users = [
      { name: "root", uid: 0, gid: 0, gecos: "root", home: "/root", shell: "/bin/bash", pass: "*" },
      { name: "daemon", uid: 1, gid: 1, gecos: "daemon", home: "/usr/sbin", shell: "/usr/sbin/nologin", pass: "*" },
      { name: "bin", uid: 2, gid: 2, gecos: "bin", home: "/bin", shell: "/usr/sbin/nologin", pass: "*" },
      { name: "sys", uid: 3, gid: 3, gecos: "sys", home: "/dev", shell: "/usr/sbin/nologin", pass: "*" },
      { name: "www-data", uid: 33, gid: 33, gecos: "www-data", home: "/var/www", shell: "/usr/sbin/nologin", pass: "*" },
      { name: "nobody", uid: 65534, gid: 65534, gecos: "nobody", home: "/nonexistent", shell: "/usr/sbin/nologin", pass: "*" },
      { name: "syslog", uid: 102, gid: 102, gecos: "", home: "/nonexistent", shell: "/usr/sbin/nologin", pass: "*" },
      { name: "sshd", uid: 105, gid: 65534, gecos: "", home: "/run/sshd", shell: "/usr/sbin/nologin", pass: "*" },
      { name: "sara", uid: 1000, gid: 1000, gecos: "Sara", home: "/home/sara", shell: "/bin/bash", pass: "$y$j9T$Hk3pX0dQe8vRz1sW$4mJq9cN2bL7tYw5uE0aP6fK1hG3dS8iO9vX2zR7qT1C" }
    ];
    M.groups = [
      { name: "root", gid: 0, members: [] }, { name: "daemon", gid: 1, members: [] }, { name: "bin", gid: 2, members: [] }, { name: "sys", gid: 3, members: [] },
      { name: "adm", gid: 4, members: ["syslog", "sara"] }, { name: "sudo", gid: 27, members: ["sara"] }, { name: "www-data", gid: 33, members: [] },
      { name: "shadow", gid: 42, members: [] }, { name: "syslog", gid: 102, members: [] }, { name: "nogroup", gid: 65534, members: [] }, { name: "sara", gid: 1000, members: [] }
    ];
    M.packages = new Set(Object.keys(PKGS).filter(p => PKGS[p].installed));
    M.upgraded = false;
    M.services = {};
    M.procs = [];
    M.journal = [];
    M.ufw = { active: false, rules: [], defIn: "deny", defOut: "allow", logging: "low" };
    M.authorized = {};
    M.banned = new Set();
    // شجرة الملفات
    const mk = (path, type, mode, owner = "root", group = "root", content = "") => {
      const parts = path.split("/").filter(Boolean);
      let cur = root;
      for (let i = 0; i < parts.length - 1; i++) {
        if (!cur.children[parts[i]]) cur.children[parts[i]] = node("d", 0o755, "root", "root");
        cur = cur.children[parts[i]];
      }
      const n = node(type, mode, owner, group, content);
      n.mtime = BOOT;
      cur.children[parts[parts.length - 1]] = n;
      return n;
    };
    M.mk = mk;
    ["bin", "boot", "dev", "etc", "home", "lib", "media", "mnt", "opt", "proc", "root", "run", "sbin", "srv", "sys", "tmp", "usr", "var"].forEach(d => mk("/" + d, "d", d === "tmp" ? 0o1777 : d === "root" ? 0o700 : 0o755));
    ["/usr/bin", "/usr/sbin", "/usr/lib", "/usr/share", "/var/log", "/var/lib", "/var/www", "/var/mail", "/etc/ssh", "/etc/systemd/system", "/etc/apt", "/etc/skel", "/var/log/nginx", "/var/spool/cron"].forEach(d => mk(d, "d", 0o755));
    ["bash", "ls", "cat", "cp", "mv", "rm", "mkdir", "grep", "ps", "kill", "ping", "ssh", "passwd", "sudo", "su", "chmod", "chown", "find", "sort", "python3", "nano", "vim", "less", "tail", "head", "id", "mount", "umount", "chfn", "chsh", "newgrp", "gpasswd", "ip", "ss", "systemctl", "journalctl", "apt", "awk", "sed", "wc", "curl", "ssh-keygen", "ssh-copy-id"].forEach(b => {
      const suid = ["passwd", "sudo", "su", "mount", "umount", "chfn", "chsh", "newgrp", "gpasswd"].includes(b);
      mk("/usr/bin/" + b, "f", suid ? 0o4755 : 0o755, "root", "root", "\x7fELF");
    });
    ["sshd", "ufw", "useradd", "usermod", "userdel", "groupadd", "chpasswd", "cron", "rsyslogd", "visudo"].forEach(b => mk("/usr/sbin/" + b, "f", 0o755, "root", "root", "\x7fELF"));
    mk("/etc/hostname", "f", 0o644, "root", "root", hostname + "\n");
    mk("/etc/hosts", "f", 0o644, "root", "root", `127.0.0.1 localhost\n127.0.1.1 ${hostname}\n10.0.2.20 web01\n`);
    mk("/etc/os-release", "f", 0o644, "root", "root", 'PRETTY_NAME="Ubuntu 24.04.1 LTS"\nNAME="Ubuntu"\nVERSION_ID="24.04"\nVERSION="24.04.1 LTS (Noble Numbat)"\nVERSION_CODENAME=noble\nID=ubuntu\nID_LIKE=debian\nHOME_URL="https://www.ubuntu.com/"\n');
    mk("/etc/passwd", "f", 0o644).virtual = () => M.users.map(u => `${u.name}:x:${u.uid}:${u.gid}:${u.gecos}:${u.home}:${u.shell}`).join("\n") + "\n";
    mk("/etc/group", "f", 0o644).virtual = () => M.groups.map(g => `${g.name}:x:${g.gid}:${g.members.join(",")}`).join("\n") + "\n";
    mk("/etc/shadow", "f", 0o640, "root", "shadow").virtual = () => M.users.map(u => `${u.name}:${u.pass}:20400:0:99999:7:::`).join("\n") + "\n";
    mk("/etc/sudoers", "f", 0o440, "root", "root", "Defaults\tenv_reset\nroot\tALL=(ALL:ALL) ALL\n%sudo\tALL=(ALL:ALL) ALL\n");
    mk("/etc/ssh/sshd_config", "f", 0o644, "root", "root", "Include /etc/ssh/sshd_config.d/*.conf\n#Port 22\n#PermitRootLogin prohibit-password\n#PubkeyAuthentication yes\n#PasswordAuthentication yes\nKbdInteractiveAuthentication no\nUsePAM yes\nX11Forwarding yes\n#MaxAuthTries 6\nPrintMotd no\nSubsystem\tsftp\t/usr/lib/openssh/sftp-server\n");
    mk("/etc/skel/.bashrc", "f", 0o644, "root", "root", "# ~/.bashrc\nalias ll='ls -alF'\n");
    mk("/etc/skel/.profile", "f", 0o644, "root", "root", "# ~/.profile\n");
    mk("/etc/skel/.bash_logout", "f", 0o644, "root", "root", "# ~/.bash_logout\n");
    mk("/home/sara", "d", 0o750, "sara", "sara");
    ["/home/sara/.bashrc", "/home/sara/.profile", "/home/sara/.bash_logout"].forEach(f => mk(f, "f", 0o644, "sara", "sara", "# " + f.split("/").pop() + "\n"));
    mk("/root/.bashrc", "f", 0o644, "root", "root", "# ~/.bashrc\n");
    mk("/var/log/syslog", "f", 0o640, "syslog", "adm", "");
    mk("/var/log/auth.log", "f", 0o640, "syslog", "adm", "");
    mk("/var/www/html", "d", 0o755);
    M.sshd = () => {
      const cfg = (M.read("/etc/ssh/sshd_config") || "").split("\n");
      const get = (k, d) => { const l = cfg.find(x => new RegExp("^\\s*" + k + "\\s", "i").test(x)); return l ? l.trim().split(/\s+/)[1] : d; };
      return { port: +get("Port", 22), permitRootLogin: get("PermitRootLogin", "prohibit-password"), passwordAuthentication: get("PasswordAuthentication", "yes"), pubkey: get("PubkeyAuthentication", "yes"), maxAuthTries: +get("MaxAuthTries", 6) };
    };
    M.find = path => { let cur = root; for (const p of path.split("/").filter(Boolean)) { if (!cur || cur.type !== "d") return null; cur = cur.children[p]; } return cur || null; };
    M.read = path => { const n = M.find(path); return n ? (n.virtual ? n.virtual() : n.content) : null; };
    M.log = (unit, ident, pid, msg, opts = {}) => {
      const t = opts.t || M.now;
      M.journal.push({ t, unit, ident, pid, msg, prio: opts.prio ?? 6 });
      if (opts.auth) { const f = M.find("/var/log/auth.log"); f.content += `${isoDate(t)} ${M.hostname} ${ident}[${pid}]: ${msg}\n`; }
      const sl = M.find("/var/log/syslog"); if (!opts.auth) sl.content += `${isoDate(t)} ${M.hostname} ${ident}${pid ? `[${pid}]` : ""}: ${msg}\n`;
    };
    // العمليات الأساسية
    const proc = (user, cmd, opts = {}) => { const p = Object.assign({ pid: opts.pid || M.nextPid++, ppid: opts.ppid ?? 1, user, cmd, cpu: 0, mem: 0.1, vsz: 8000, rss: 4000, tty: "?", stat: "Ss", start: BOOT }, opts); M.procs.push(p); return p; };
    M.proc = proc;
    proc("root", "/sbin/init", { pid: 1, ppid: 0, mem: 0.6, vsz: 22044, rss: 12928, stat: "Ss" });
    proc("root", "[kthreadd]", { pid: 2, ppid: 0, mem: 0, vsz: 0, rss: 0, stat: "S" });
    proc("root", "/usr/lib/systemd/systemd-journald", { pid: 312, mem: 0.8, vsz: 50324, rss: 16384 });
    M.startService = (name, quiet) => {
      const s = SERVICES[name] || M.unitFile(name);
      if (!s) return false;
      const st = M.services[name] = M.services[name] || { enabled: true };
      if (st.active) return true;
      if (s.exec && s.custom) {
        const bin = s.exec.split(" ")[0];
        const f = M.find(bin);
        if (!f || !(f.mode & 0o111)) {
          st.active = false; st.failed = true; st.since = M.now;
          M.log(name + ".service", "systemd", 1, `${name}.service: Main process exited, code=exited, status=203/EXEC`, { prio: 3 });
          M.log(name + ".service", "systemd", 1, `${name}.service: Failed with result 'exit-code'.`, { prio: 4 });
          return "failed";
        }
      }
      M.log(name + ".service", "systemd", 1, `Starting ${name}.service - ${s.desc}...`);
      const p = proc(s.user || "root", s.proc || s.exec, { mem: 0.4, vsz: 12000, rss: 7800 });
      st.pid = p.pid; st.active = true; st.failed = false; st.since = M.now; st.procs = [p.pid];
      if (s.worker) { const w = proc("www-data", s.worker, { ppid: p.pid, stat: "S", mem: 0.3 }); st.procs.push(w.pid); }
      M.log(name + ".service", "systemd", 1, `Started ${name}.service - ${s.desc}.`);
      if (name === "ssh") M.log("ssh.service", "sshd", p.pid, "Server listening on 0.0.0.0 port 22.", { auth: true });
      return true;
    };
    M.stopService = name => {
      const st = M.services[name];
      if (!st || !st.active) return;
      const s = SERVICES[name] || M.unitFile(name);
      M.log(name + ".service", "systemd", 1, `Stopping ${name}.service - ${s.desc}...`);
      M.procs = M.procs.filter(p => !st.procs.includes(p.pid));
      st.active = false; st.since = M.now; st.pid = null;
      M.log(name + ".service", "systemd", 1, `${name}.service: Deactivated successfully.`);
      M.log(name + ".service", "systemd", 1, `Stopped ${name}.service - ${s.desc}.`);
    };
    // ملفات الوحدات التي يكتبها المستخدم في /etc/systemd/system
    M.unitFile = name => {
      const txt = M.read(`/etc/systemd/system/${name}.service`);
      if (txt == null || !M.reloaded.has(name)) return null;
      const get = k => { const m = new RegExp("^" + k + "=(.*)$", "m").exec(txt); return m ? m[1].trim() : ""; };
      return { desc: get("Description") || name + ".service", unit: `/etc/systemd/system/${name}.service`, exec: get("ExecStart"), proc: get("ExecStart"), user: get("User") || "root", custom: true, restart: get("Restart") };
    };
    M.reloaded = new Set();
    ["cron", "rsyslog", "ssh"].forEach(s => { M.startService(s); M.services[s].since = BOOT + 4000; });
    M.time = () => M.now;
    return M;
  }

  // سجلات تجريبية في auth.log: دخول ناجح وفاشل
  function seedAuth(M) {
    const ssh = M.services.ssh.pid;
    const at = (min, sec) => BOOT + min * 60000 + sec * 1000;
    const bad = ["203.0.113.50", "203.0.113.50", "203.0.113.50", "198.51.100.23", "203.0.113.50", "203.0.113.50", "198.51.100.23"];
    const users = ["admin", "root", "test", "oracle", "admin", "ubuntu", "root"];
    bad.forEach((ip, i) => M.log("ssh.service", "sshd", ssh + 10 + i, users[i] === "root" ? `Failed password for root from ${ip} port ${50120 + i} ssh2` : `Failed password for invalid user ${users[i]} from ${ip} port ${50120 + i} ssh2`, { auth: true, t: at(12, i * 3), prio: 5 }));
    M.log("ssh.service", "sshd", ssh + 30, "Accepted publickey for sara from 10.0.2.2 port 53110 ssh2: ED25519 SHA256:q2X8wYxXbqG1vQ0p1h9n0cXKk4u3m5Q8Zl7a6b5c4d3", { auth: true, t: at(20, 5) });
    M.log("ssh.service", "sshd", ssh + 30, "pam_unix(sshd:session): session opened for user sara(uid=1000) by sara(uid=0)", { auth: true, t: at(20, 5) });
    M.log("", "sudo", 2050, "    sara : TTY=pts/0 ; PWD=/home/sara ; USER=root ; COMMAND=/usr/bin/apt update", { auth: true, t: at(25, 0) });
  }

  // ---------- العالم: جهازان وجلسة ----------
  function createWorld() {
    const local = Machine("ubuntu", "10.0.2.15");
    const web01 = Machine("web01", "10.0.2.20", { mac: "52:54:00:ab:cd:20" });
    seedAuth(local);
    // web01: خادم يمنع الدخول بكلمة المرور
    web01.find("/etc/ssh/sshd_config").content = web01.read("/etc/ssh/sshd_config").replace("#PasswordAuthentication yes", "PasswordAuthentication no");
    const world = {
      machines: { ubuntu: local, web01, "10.0.2.20": web01, "10.0.2.15": local, localhost: local },
      stack: [],
      session: { M: local, user: "sara", cwd: "/home/sara", env: { HOME: "/home/sara", USER: "sara", SHELL: "/bin/bash", PATH: "/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin", PWD: "/home/sara", LANG: "C.UTF-8" }, status: 0, jobs: [], umask: 0o002 },
      shellPid: 2100
    };
    local.proc("sara", "-bash", { pid: 2100, ppid: 2090, tty: "pts/0", stat: "Ss", mem: 0.2, vsz: 8800, rss: 5432 });
    return world;
  }

  // ---------- المحلّل اللفظي للطرفية ----------
  function tokenize(line, env) {
    const toks = [];
    let cur = "", has = false, i = 0, quoted = false;
    const push = () => { if (has) toks.push({ t: cur, q: quoted }); cur = ""; has = false; quoted = false; };
    const vars = s => s.replace(/\$\{?(\w+|\?)\}?/g, (m, k) => k in env ? env[k] : "");
    while (i < line.length) {
      const c = line[i];
      if (c === "'") { const j = line.indexOf("'", i + 1); cur += line.slice(i + 1, j < 0 ? line.length : j); has = true; quoted = true; i = j < 0 ? line.length : j + 1; continue; }
      if (c === '"') { let j = i + 1, s = ""; while (j < line.length && line[j] !== '"') { if (line[j] === "\\" && j + 1 < line.length) { s += line[j + 1]; j += 2; } else s += line[j++]; } cur += vars(s); has = true; quoted = true; i = j + 1; continue; }
      if (c === "\\" && i + 1 < line.length) { cur += line[i + 1]; has = true; i += 2; continue; }
      if (/\s/.test(c)) { push(); i++; continue; }
      if (c === "|" || c === ";" || c === "&" || c === ">" || c === "<") {
        if (c === ">" && /^\d$/.test(cur) && has && !quoted) { const fd = cur; cur = ""; has = false; if (line[i + 1] === "&") { toks.push({ op: fd + ">&", t: line[i + 2] }); i += 3; continue; } toks.push({ op: line[i + 1] === ">" ? fd + ">>" : fd + ">" }); i += line[i + 1] === ">" ? 2 : 1; continue; }
        push();
        const two = line.slice(i, i + 2);
        if (["||", "&&", ">>", "<<"].includes(two)) { toks.push({ op: two }); i += 2; continue; }
        toks.push({ op: c }); i++; continue;
      }
      if (c === "$" && !quoted) { const m = /^\$\{?(\w+|\?)\}?/.exec(line.slice(i)); if (m) { cur += env[m[1]] ?? ""; has = true; i += m[0].length; continue; } }
      if (c === "~" && !has && (i + 1 === line.length || /[\/\s]/.test(line[i + 1]))) { cur += env.HOME; has = true; i++; continue; }
      if (c === "#" && !has) break;
      cur += c; has = true; i++;
    }
    push();
    return toks;
  }

  // ---------- التنفيذ ----------
  function run(world, script, out) {
    const say = (t, kind = "out") => { if (t === undefined || t === null) return; String(t).replace(/\n$/, "").split("\n").forEach(l => out.push({ kind, text: l })); };
    const lines = script.split("\n");
    for (let i = 0; i < lines.length; i++) {
      const raw = lines[i];
      if (!raw.trim() || raw.trim().startsWith("#")) continue;
      // أوامر إعداد مخفية للفحص والتجهيز: @user و @file و @proc و @log و @check
      if (raw.trim().startsWith("@")) { directive(world, raw.trim(), say); continue; }
      let line = raw.trim(), stdin = null;
      const hd = /<<\s*-?\s*['"]?(\w+)['"]?\s*$/.exec(line);
      out.push({ kind: "cmd", text: "$ " + line });
      if (hd) {
        const body = [];
        let j = i + 1;
        while (j < lines.length && lines[j].trim() !== hd[1]) { body.push(lines[j]); out.push({ kind: "cmd", text: "> " + lines[j] }); j++; }
        out.push({ kind: "cmd", text: "> " + hd[1] });
        i = j;
        stdin = body.join("\n") + "\n";
        line = line.slice(0, hd.index).trim();
      }
      world.session.M.now += 1000;
      try { execLine(world, line, say, stdin); }
      catch (e) { if (e && e.exit) continue; say("خطأ في المحاكي: " + e.message, "err"); }
    }
  }
  // سطر كامل: && و || و ;
  function execLine(world, line, say, stdin) {
    const env = Object.assign({}, world.session.env, { "?": String(world.session.status), PWD: world.session.cwd, USER: world.session.user });
    const toks = tokenize(line, env);
    const groups = [];
    let cur = [], sep = null;
    for (const t of toks) {
      if (t.op === "&&" || t.op === "||" || t.op === ";") { groups.push({ toks: cur, sep }); cur = []; sep = t.op; }
      else cur.push(t);
    }
    groups.push({ toks: cur, sep });
    let status = 0;
    for (const g of groups) {
      if (!g.toks.length) continue;
      if (g.sep === "&&" && status !== 0) continue;
      if (g.sep === "||" && status === 0) continue;
      status = pipeline(world, g.toks, say, stdin);
      world.session.status = status;
    }
  }
  function pipeline(world, toks, say, stdin) {
    const bg = toks.length && toks[toks.length - 1].op === "&";
    if (bg) toks = toks.slice(0, -1);
    const stages = [[]];
    for (const t of toks) { if (t.op === "|") stages.push([]); else stages[stages.length - 1].push(t); }
    let input = stdin, status = 0;
    for (let s = 0; s < stages.length; s++) {
      const last = s === stages.length - 1;
      // التحويلات > و >> و 2> و < و 2>&1
      const args = [];
      let outFile = null, append = false, errFile = null, errToOut = false, inFile = null;
      const st = stages[s];
      for (let k = 0; k < st.length; k++) {
        const t = st[k];
        if (t.op === ">" || t.op === ">>" || t.op === "1>" || t.op === "1>>") { outFile = st[++k].t; append = t.op.endsWith(">>"); }
        else if (t.op === "2>" || t.op === "2>>") errFile = st[++k].t;
        else if (t.op === "2>&") errToOut = true;
        else if (t.op === "<") inFile = st[++k].t;
        else if (!t.op) args.push(t);
      }
      const words = expandGlobs(world, args);
      if (inFile) { const c = readFile(world, inFile, "bash", say); if (c === null) return 1; input = c; }
      const buf = [];
      const sayOut = t => buf.push(String(t));
      const sayErr = t => { if (errFile === "/dev/null") return; if (errToOut) buf.push(String(t)); else say(t, "err"); };
      if (bg) {
        const p = world.session.M.proc(world.session.user, words.join(" "), { ppid: world.shellPid, tty: "pts/0", stat: "S" });
        world.session.jobs.push({ n: world.session.jobs.length + 1, pid: p.pid, cmd: words.join(" ") + " &" });
        say(`[${world.session.jobs.length}] ${p.pid}`);
        return 0;
      }
      status = command(world, words, input, sayOut, sayErr);
      let text = buf.join("\n");
      if (outFile) {
        if (outFile !== "/dev/null" && writeFile(world, outFile, text ? text + "\n" : "", append, "bash", sayErr) === false) status = 1;
        input = "";
      } else if (last) { if (buf.length) say(text); }
      else input = buf.length ? text + "\n" : "";
    }
    return status;
  }
  function expandGlobs(world, args) {
    const out = [];
    for (const a of args) {
      if (a.q || !/[*?]/.test(a.t)) { out.push(a.t); continue; }
      const abs = resolve(world, a.t);
      const dir = abs.replace(/\/[^/]*$/, "") || "/";
      const pat = abs.split("/").pop();
      const re = new RegExp("^" + pat.replace(/[.+^${}()|[\]\\]/g, "\\$&").replace(/\*/g, ".*").replace(/\?/g, ".") + "$");
      const d = world.session.M.find(dir);
      const hits = d && d.type === "d" ? Object.keys(d.children).filter(n => re.test(n) && (pat.startsWith(".") || !n.startsWith("."))).sort(cmpName) : [];
      if (!hits.length) out.push(a.t);
      else hits.forEach(h => out.push(a.t.includes("/") ? a.t.replace(/[^/]*$/, h) : h));
    }
    return out;
  }
  const cmpName = (a, b) => { const x = a.replace(/^\./, "").toLowerCase(), y = b.replace(/^\./, "").toLowerCase(); return x < y ? -1 : x > y ? 1 : a < b ? -1 : a > b ? 1 : 0; };

  // ---------- المسارات والصلاحيات ----------
  function resolve(world, p) {
    const s = world.session;
    if (p === "~" || p.startsWith("~/")) p = s.env.HOME + p.slice(1);
    const parts = (p.startsWith("/") ? p : s.cwd + "/" + p).split("/");
    const outp = [];
    for (const x of parts) { if (!x || x === ".") continue; if (x === "..") outp.pop(); else outp.push(x); }
    return "/" + outp.join("/");
  }
  const userObj = (M, name) => M.users.find(u => u.name === name);
  const groupsOf = (M, name) => { const u = userObj(M, name); if (!u) return []; const prim = M.groups.find(g => g.gid === u.gid); return [prim && prim.name, ...M.groups.filter(g => g.members.includes(name)).map(g => g.name)].filter(Boolean); };
  function can(world, n, perm) {
    const s = world.session;
    const bit = { r: 4, w: 2, x: 1 }[perm];
    if (s.user === "root") return perm !== "x" || n.type === "d" || !!(n.mode & 0o111);
    if (n.owner === s.user) return !!((n.mode >> 6) & bit);
    if (groupsOf(s.M, s.user).includes(n.group)) return !!((n.mode >> 3) & bit);
    return !!(n.mode & bit);
  }
  // الوصول لمسار يتطلب صلاحية x على كل مجلد في الطريق
  function lookup(world, path) {
    const M = world.session.M;
    const parts = path.split("/").filter(Boolean);
    let cur = M.root;
    for (let i = 0; i < parts.length; i++) {
      if (cur.type !== "d") return { err: "Not a directory" };
      if (!can(world, cur, "x")) return { err: "Permission denied" };
      const nx = cur.children[parts[i]];
      if (!nx) return { err: "No such file or directory", parent: i === parts.length - 1 ? cur : null };
      cur = nx;
    }
    return { node: cur };
  }
  const content = n => n.virtual ? n.virtual() : n.content;
  function readFile(world, p, cmd, sayErr) {
    const r = lookup(world, resolve(world, p));
    if (r.err) { sayErr(`${cmd}: ${p}: ${r.err}`); return null; }
    if (r.node.type === "d") { sayErr(`${cmd}: ${p}: Is a directory`); return null; }
    if (!can(world, r.node, "r")) { sayErr(`${cmd}: ${p}: Permission denied`); return null; }
    return content(r.node);
  }
  function newNode(world, type) {
    const s = world.session, M = s.M;
    const u = userObj(M, s.user);
    const g = M.groups.find(x => x.gid === u.gid);
    const n = { type, mode: (type === "d" ? 0o777 : 0o666) & ~s.umask, owner: s.user, group: g ? g.name : s.user, content: "", children: type === "d" ? {} : null, mtime: M.now };
    return n;
  }
  function writeFile(world, p, text, append, cmd, sayErr) {
    const abs = resolve(world, p);
    const r = lookup(world, abs);
    if (r.node) {
      if (r.node.type === "d") { sayErr(`${cmd}: ${p}: Is a directory`); return false; }
      if (!can(world, r.node, "w")) { sayErr(`${cmd}: ${p}: Permission denied`); return false; }
      r.node.content = append ? r.node.content + text : text;
      r.node.mtime = world.session.M.now;
      return true;
    }
    if (!r.parent) { sayErr(`${cmd}: ${p}: ${r.err}`); return false; }
    if (!can(world, r.parent, "w")) { sayErr(`${cmd}: ${p}: Permission denied`); return false; }
    const n = newNode(world, "f");
    n.content = text;
    r.parent.children[abs.split("/").pop()] = n;
    return true;
  }
  const modeStr = n => {
    const m = n.mode;
    const t = n.type === "d" ? "d" : n.type === "l" ? "l" : "-";
    const tri = (v, special, ch) => [(v & 4) ? "r" : "-", (v & 2) ? "w" : "-", special ? ((v & 1) ? ch : ch.toUpperCase()) : (v & 1) ? "x" : "-"].join("");
    return t + tri(m >> 6 & 7, m & 0o4000, "s") + tri(m >> 3 & 7, m & 0o2000, "s") + tri(m & 7, m & 0o1000, "t");
  };
  const sizeOf = n => n.type === "d" ? 4096 : n.type === "l" ? n.target.length : content(n).length;
  const human = b => b < 1024 ? String(b) : b < 1048576 ? (b / 1024).toFixed(b < 10240 ? 1 : 0).replace(/\.0$/, "") + "K" : (b / 1048576).toFixed(1) + "M";
  const octal = m => (m & 0o7777).toString(8);

  // ---------- الأوامر ----------
  function command(world, w, stdin, say, err) {
    const s = world.session, M = s.M;
    if (!w.length) return 0;
    let [cmd, ...a] = w;
    // VAR=value
    if (/^\w+=/.test(cmd) && !a.length) { const [k, ...v] = cmd.split("="); s.env[k] = v.join("="); return 0; }
    const flags = a.filter(x => /^-/.test(x) && x !== "-");
    const has = (...f) => f.some(x => flags.includes(x) || flags.some(g => /^-[a-zA-Z]+$/.test(g) && x.length === 2 && g.includes(x[1])));
    const pos = a.filter(x => !/^-/.test(x) || x === "-");
    const needRoot = msg => { if (s.user !== "root") { err(msg); return true; } return false; };
    const lines = t => t.replace(/\n$/, "").split("\n");
    const inputs = files => {
      if (!files.length) return stdin === null ? "" : stdin;
      let all = "";
      for (const f of files) { const c = readFile(world, f, cmd, err); if (c === null) return null; all += c; }
      return all;
    };
    switch (cmd) {
      case "sudo": {
        if (a[0] === "-l") { if (!groupsOf(M, s.user).includes("sudo") && s.user !== "root") { err(`Sorry, user ${s.user} may not run sudo on ${M.hostname}.`); return 1; } say(`Matching Defaults entries for ${s.user} on ${M.hostname}:\n    env_reset, mail_badpass, secure_path=/usr/local/sbin\\:/usr/local/bin\\:/usr/sbin\\:/usr/bin\\:/sbin\\:/bin\\:/snap/bin, use_pty\n\nUser ${s.user} may run the following commands on ${M.hostname}:\n    (ALL : ALL) ALL`); return 0; }
        if (s.user !== "root" && !groupsOf(M, s.user).includes("sudo")) { err(`${s.user} is not in the sudoers file.`); M.log("", "sudo", 2600, `    ${s.user} : user NOT in sudoers ; TTY=pts/0 ; PWD=${s.cwd} ; USER=root ; COMMAND=${a.join(" ")}`, { auth: true, prio: 3 }); return 1; }
        let target = "root", rest = a;
        if (a[0] === "-u") { target = a[1]; rest = a.slice(2); }
        if (rest[0] === "-i" || (rest[0] === "su" && rest.length <= 2)) { const who = rest[0] === "su" ? (rest[1] === "-" ? "root" : rest[1] || "root") : "root"; return su(world, who, say, err); }
        if (!userObj(M, target)) { err(`sudo: unknown user ${target}`); return 1; }
        M.log("", "sudo", 2600, `    ${s.user} : TTY=pts/0 ; PWD=${s.cwd} ; USER=${target} ; COMMAND=${whichPath(M, rest[0]) || rest[0]} ${rest.slice(1).join(" ")}`.trimEnd(), { auth: true });
        const saved = s.user;
        s.user = target;
        try { return command(world, rest, stdin, say, err); } finally { s.user = saved; }
      }
      case "su": { const who = a.filter(x => x !== "-")[0] || "root"; if (s.user !== "root") { err("Password: \nsu: Authentication failure"); return 1; } return su(world, who, say, err); }
      case "exit": case "logout": {
        if (world.stack.length) { const prev = world.stack.pop(); const host = M.hostname; world.session = prev; if (prev.M !== M) say(`logout\nConnection to ${host} closed.`); return 0; }
        return 0;
      }
      case "whoami": say(s.user); return 0;
      case "hostname": say(M.hostname); return 0;
      case "pwd": say(s.cwd); return 0;
      case "echo": say((a[0] === "-e" ? a.slice(1).join(" ").replace(/\\n/g, "\n").replace(/\\t/g, "\t") : a[0] === "-n" ? a.slice(1).join(" ") : a.join(" "))); return 0;
      case "printf": say(a[0].replace(/%s/g, () => a.splice(1, 1)[0] ?? "").replace(/\\n/g, "\n").replace(/\n$/, "")); return 0;
      case "date": say(fullDate(M.now).replace(/^(\w+) (\d+)-(\d+)-(\d+) (\S+) UTC$/, (m, d, y, mo, da, t) => `${d} ${MON[+mo - 1]} ${+da < 10 ? " " + +da : da} ${t} UTC ${y}`)); return 0;
      case "uptime": { const up = Math.floor((M.now - BOOT) / 60000); say(` ${hms(M.now)} up ${Math.floor(up / 60)}:${pad(up % 60)},  1 user,  load average: 0.08, 0.03, 0.01`); return 0; }
      case "uname": say(has("-a") ? `Linux ${M.hostname} 6.8.0-45-generic #45-Ubuntu SMP PREEMPT_DYNAMIC Fri Aug 30 12:02:04 UTC 2024 x86_64 x86_64 x86_64 GNU/Linux` : has("-r") ? "6.8.0-45-generic" : "Linux"); return 0;
      case "clear": case "true": return 0;
      case "false": return 1;
      case "sleep": return 0;
      case "export": { a.forEach(x => { const [k, ...v] = x.split("="); if (v.length) s.env[k] = v.join("="); }); return 0; }
      case "env": case "printenv": { if (pos[0]) { if (pos[0] in s.env) { say(s.env[pos[0]]); return 0; } return 1; } say(Object.entries(s.env).map(([k, v]) => `${k}=${v}`).join("\n")); return 0; }
      case "umask": { if (pos[0]) { s.umask = parseInt(pos[0], 8); return 0; } say(pad(s.umask.toString(8), 4)); return 0; }
      case "which": { let st = 0; pos.forEach(p => { const r = whichPath(M, p); if (r) say(r); else st = 1; }); return st; }
      case "type": { pos.forEach(p => { const r = whichPath(M, p); say(r ? `${p} is ${r}` : `bash: type: ${p}: not found`); }); return 0; }
      case "history": return 0;
      case "id": {
        const who = pos[0] || s.user;
        const u = userObj(M, who);
        if (!u) { err(`id: '${who}': no such user`); return 1; }
        const gs = groupsOf(M, who).map(n => M.groups.find(g => g.name === n));
        const pg = M.groups.find(g => g.gid === u.gid);
        if (has("-u")) { say(String(u.uid)); return 0; }
        if (has("-G") && has("-n")) { say(gs.map(g => g.name).join(" ")); return 0; }
        say(`uid=${u.uid}(${u.name}) gid=${u.gid}(${pg ? pg.name : u.gid}) groups=${gs.map(g => `${g.gid}(${g.name})`).join(",")}`);
        return 0;
      }
      case "groups": { const who = pos[0]; if (who && !userObj(M, who)) { err(`groups: '${who}': no such user`); return 1; } say((who ? who + " : " : "") + groupsOf(M, who || s.user).join(" ")); return 0; }
      case "cd": {
        const target = resolve(world, pos[0] || s.env.HOME);
        const r = lookup(world, target);
        const name = pos[0] || s.env.HOME;
        if (r.err) { err(`bash: cd: ${name}: ${r.err}`); return 1; }
        if (r.node.type !== "d") { err(`bash: cd: ${name}: Not a directory`); return 1; }
        if (!can(world, r.node, "x")) { err(`bash: cd: ${name}: Permission denied`); return 1; }
        s.cwd = target; s.env.PWD = target;
        return 0;
      }
      case "ls": return ls(world, a, say, err);
      case "cat": { const c = inputs(pos); if (c === null) return 1; if (c) say(has("-n") ? lines(c).map((l, i) => `${String(i + 1).padStart(6)}\t${l}`).join("\n") : c.replace(/\n$/, "")); return 0; }
      case "touch": {
        let st = 0;
        for (const p of pos) {
          const abs = resolve(world, p), r = lookup(world, abs);
          if (r.node) { if (!can(world, r.node, "w")) { err(`touch: cannot touch '${p}': Permission denied`); st = 1; } else r.node.mtime = M.now; continue; }
          if (!r.parent) { err(`touch: cannot touch '${p}': ${r.err}`); st = 1; continue; }
          if (!can(world, r.parent, "w")) { err(`touch: cannot touch '${p}': Permission denied`); st = 1; continue; }
          r.parent.children[abs.split("/").pop()] = newNode(world, "f");
        }
        return st;
      }
      case "mkdir": {
        let st = 0;
        for (const p of pos) {
          const abs = resolve(world, p);
          if (has("-p")) { let cur = ""; for (const part of abs.split("/").filter(Boolean)) { cur += "/" + part; const r = lookup(world, cur); if (r.node) continue; if (!r.parent || !can(world, r.parent, "w")) { err(`mkdir: cannot create directory ‘${p}’: Permission denied`); st = 1; break; } r.parent.children[part] = newNode(world, "d"); } continue; }
          const r = lookup(world, abs);
          if (r.node) { err(`mkdir: cannot create directory ‘${p}’: File exists`); st = 1; continue; }
          if (!r.parent) { err(`mkdir: cannot create directory ‘${p}’: No such file or directory`); st = 1; continue; }
          if (!can(world, r.parent, "w")) { err(`mkdir: cannot create directory ‘${p}’: Permission denied`); st = 1; continue; }
          r.parent.children[abs.split("/").pop()] = newNode(world, "d");
        }
        return st;
      }
      case "rmdir": { for (const p of pos) { const abs = resolve(world, p), r = lookup(world, abs); if (!r.node) { err(`rmdir: failed to remove '${p}': No such file or directory`); return 1; } if (Object.keys(r.node.children || {}).length) { err(`rmdir: failed to remove '${p}': Directory not empty`); return 1; } delete parentOf(world, abs).children[abs.split("/").pop()]; } return 0; }
      case "rm": {
        let st = 0;
        for (const p of pos) {
          const abs = resolve(world, p), r = lookup(world, abs);
          if (!r.node) { if (!has("-f")) { err(`rm: cannot remove '${p}': ${r.err}`); st = 1; } continue; }
          if (r.node.type === "d" && !has("-r", "-R")) { err(`rm: cannot remove '${p}': Is a directory`); st = 1; continue; }
          const par = parentOf(world, abs);
          if (!can(world, par, "w")) { err(`rm: cannot remove '${p}': Permission denied`); st = 1; continue; }
          if ((par.mode & 0o1000) && s.user !== "root" && r.node.owner !== s.user && par.owner !== s.user) { err(`rm: cannot remove '${p}': Operation not permitted`); st = 1; continue; }
          delete par.children[abs.split("/").pop()];
        }
        return st;
      }
      case "cp": case "mv": {
        if (pos.length < 2) { err(`${cmd}: missing destination file operand after '${pos[0] || ""}'`); return 1; }
        const dest = pos[pos.length - 1];
        for (const src of pos.slice(0, -1)) {
          const sa = resolve(world, src), r = lookup(world, sa);
          if (!r.node) { err(`${cmd}: cannot stat '${src}': No such file or directory`); return 1; }
          if (cmd === "cp" && r.node.type === "d" && !has("-r", "-R", "-a")) { err(`cp: -r not specified; omitting directory '${src}'`); return 1; }
          if (cmd === "cp" && r.node.type === "f" && !can(world, r.node, "r")) { err(`cp: cannot open '${src}' for reading: Permission denied`); return 1; }
          let da = resolve(world, dest);
          const dr = lookup(world, da);
          if (dr.node && dr.node.type === "d") da += "/" + sa.split("/").pop();
          const dpar = parentOf(world, da);
          if (!dpar) { err(`${cmd}: cannot create regular file '${dest}': No such file or directory`); return 1; }
          if (!can(world, dpar, "w")) { err(cmd === "cp" ? `cp: cannot create regular file '${dest}': Permission denied` : `mv: cannot move '${src}' to '${dest}': Permission denied`); return 1; }
          if (cmd === "mv") { const sp = parentOf(world, sa); if (!can(world, sp, "w")) { err(`mv: cannot move '${src}' to '${dest}': Permission denied`); return 1; } dpar.children[da.split("/").pop()] = r.node; delete sp.children[sa.split("/").pop()]; }
          else { const copy = JSON.parse(JSON.stringify(r.node)); const fix = n => { const nn = newNode(world, n.type); n.owner = nn.owner; n.group = nn.group; if (!has("-a", "-p")) n.mode = (n.mode & 0o777) & ~0; n.mtime = M.now; Object.values(n.children || {}).forEach(fix); }; if (!has("-a", "-p")) fix(copy); dpar.children[da.split("/").pop()] = copy; }
        }
        return 0;
      }
      case "ln": { if (!has("-s")) { err("ln: hard links are not supported in this simulator (use ln -s)"); return 1; } const [target, link] = pos; const abs = resolve(world, link); const par = parentOf(world, abs); if (!can(world, par, "w")) { err(`ln: failed to create symbolic link '${link}': Permission denied`); return 1; } const n = newNode(world, "l"); n.mode = 0o777; n.target = target; par.children[abs.split("/").pop()] = n; return 0; }
      case "head": case "tail": {
        const ni = a.indexOf("-n");
        let n = ni >= 0 ? +a[ni + 1] : 10;
        const short = a.find(x => /^-\d+$/.test(x)); if (short) n = +short.slice(1);
        const files = pos.filter((x, i) => !(ni >= 0 && a[ni + 1] === x));
        const c = inputs(files); if (c === null) return 1;
        const ls2 = c ? lines(c) : [];
        const sel = cmd === "head" ? ls2.slice(0, n) : (String(a[ni + 1] || "").startsWith("+") ? ls2.slice(+a[ni + 1].slice(1) - 1) : ls2.slice(-n));
        if (sel.length) say(sel.join("\n"));
        return 0;
      }
      case "wc": {
        const files = pos;
        const c = inputs(files); if (c === null) return 1;
        const l = (c.match(/\n/g) || []).length, wd = c.split(/\s+/).filter(Boolean).length, ch = c.length;
        const parts = has("-l") ? [l] : has("-w") ? [wd] : has("-c") ? [ch] : [l, wd, ch];
        say(files.length ? parts.join(" ") + " " + files[0] : parts.join(" "));
        return 0;
      }
      case "grep": return grep(world, a, stdin, say, err);
      case "sort": {
        const c = inputs(pos.filter(x => !/^\d+$/.test(x))); if (c === null) return 1;
        let ls2 = c ? lines(c) : [];
        const ki = a.indexOf("-k"), key = ki >= 0 ? +String(a[ki + 1]).split(",")[0] : 0;
        const tI = a.indexOf("-t"), sepc = tI >= 0 ? a[tI + 1] : null;
        const field = l => key ? (sepc ? l.split(sepc) : l.trim().split(/\s+/))[key - 1] || "" : l;
        const num = has("-n") || has("-h");
        ls2.sort((x, y) => { const p = field(x), q = field(y); const r = num ? (parseFloat(p) || 0) - (parseFloat(q) || 0) : p.localeCompare(q, "en"); return r || x.localeCompare(y, "en"); });
        if (has("-r")) ls2.reverse();
        if (has("-u")) ls2 = ls2.filter((x, i) => ls2.indexOf(x) === i);
        if (ls2.length) say(ls2.join("\n"));
        return 0;
      }
      case "uniq": {
        const c = inputs(pos); if (c === null) return 1;
        const ls2 = c ? lines(c) : [];
        const groups2 = [];
        for (const l of ls2) { if (groups2.length && groups2[groups2.length - 1].l === l) groups2[groups2.length - 1].n++; else groups2.push({ l, n: 1 }); }
        const sel = has("-d") ? groups2.filter(g => g.n > 1) : groups2;
        if (sel.length) say(sel.map(g => has("-c") ? `${String(g.n).padStart(7)} ${g.l}` : g.l).join("\n"));
        return 0;
      }
      case "cut": {
        const di = a.findIndex(x => x.startsWith("-d")), fi = a.findIndex(x => x.startsWith("-f"));
        const d = di >= 0 ? (a[di].length > 2 ? a[di].slice(2) : a[di + 1]) : "\t";
        const fs = fi >= 0 ? (a[fi].length > 2 ? a[fi].slice(2) : a[fi + 1]) : "1";
        const files = pos.filter(x => x !== d && x !== fs && !(di >= 0 && a[di + 1] === x) && !(fi >= 0 && a[fi + 1] === x));
        const c = inputs(files); if (c === null) return 1;
        const want = fs.split(",").flatMap(r => { const [x, y] = r.split("-").map(Number); return y ? Array.from({ length: y - x + 1 }, (_, i) => x + i) : [x]; });
        if (c) say(lines(c).map(l => { const p = l.split(d); return want.map(k => p[k - 1]).filter(v => v !== undefined).join(d); }).join("\n"));
        return 0;
      }
      case "tr": { const [x, y] = pos; const c = stdin || ""; const map = (s1, s2) => { let r = c; if (s1 === "a-z" && s2 === "A-Z") return c.toUpperCase(); if (s1 === "A-Z" && s2 === "a-z") return c.toLowerCase(); [...s1].forEach((ch, i) => { r = r.split(ch).join(s2[i] ?? ""); }); return r; }; say(has("-d") ? c.split(y || x).join("").replace(/\n$/, "") : map(x, y).replace(/\n$/, "")); return 0; }
      case "awk": return awk(world, a, stdin, say, err, inputs);
      case "sed": return sed(world, a, stdin, say, err, inputs);
      case "tee": {
        const files = pos;
        const c = stdin || "";
        for (const f of files) if (writeFile(world, f, c, has("-a"), "tee", err) === false) return 1;
        if (c) say(c.replace(/\n$/, ""));
        return 0;
      }
      case "find": return find(world, a, say, err);
      case "stat": {
        const fi = a.findIndex(x => x === "-c" || x.startsWith("--format"));
        const fmt = fi >= 0 ? a[fi + 1] : null;
        for (const p of pos.filter(x => x !== fmt)) {
          const r = lookup(world, resolve(world, p));
          if (!r.node) { err(`stat: cannot statx '${p}': No such file or directory`); return 1; }
          const n = r.node;
          if (fmt) { say(fmt.replace(/%a/g, octal(n.mode)).replace(/%A/g, modeStr(n)).replace(/%U/g, n.owner).replace(/%G/g, n.group).replace(/%n/g, p).replace(/%s/g, String(sizeOf(n))).replace(/%F/g, n.type === "d" ? "directory" : n.type === "l" ? "symbolic link" : sizeOf(n) ? "regular file" : "regular empty file")); continue; }
          const u = userObj(M, n.owner), g = M.groups.find(x => x.name === n.group);
          say(`  File: ${p}\n  Size: ${sizeOf(n)}\t\tBlocks: ${n.type === "d" ? 8 : sizeOf(n) ? 8 : 0}\t   IO Block: 4096   ${n.type === "d" ? "directory" : sizeOf(n) ? "regular file" : "regular empty file"}\nAccess: (${pad(octal(n.mode), 4)}/${modeStr(n)})  Uid: (${String(u ? u.uid : 0).padStart(5)}/${n.owner.padStart(8)})   Gid: (${String(g ? g.gid : 0).padStart(5)}/${n.group.padStart(8)})\nModify: ${new Date(n.mtime || BOOT).toISOString().replace("T", " ").replace(/\.\d+Z/, ".000000000 +0000")}`);
        }
        return 0;
      }
      case "chmod": return chmod(world, a, err);
      case "chown": case "chgrp": {
        const recursive = has("-R");
        const [spec, ...files] = pos;
        let [owner, group] = cmd === "chgrp" ? [null, spec] : spec.split(":");
        if (owner && !userObj(M, owner)) { err(`chown: invalid user: ‘${spec}’`); return 1; }
        if (group && !M.groups.find(g => g.name === group)) { err(`${cmd}: invalid group: ‘${spec}’`); return 1; }
        for (const f of files) {
          const r = lookup(world, resolve(world, f));
          if (!r.node) { err(`${cmd}: cannot access '${f}': No such file or directory`); return 1; }
          const okGroup = cmd === "chgrp" && r.node.owner === s.user && groupsOf(M, s.user).includes(group);
          if (s.user !== "root" && !okGroup) { err(`${cmd}: changing ${owner ? "ownership" : "group"} of '${f}': Operation not permitted`); return 1; }
          const apply = n => { if (owner) n.owner = owner; if (group) n.group = group; if (recursive) Object.values(n.children || {}).forEach(apply); };
          apply(r.node);
        }
        return 0;
      }
      case "useradd": case "adduser": {
        if (s.user !== "root") { err(`${cmd}: Permission denied.\n${cmd}: cannot lock /etc/passwd; try again later.`); return 1; }
        const name = pos[pos.length - 1];
        if (userObj(M, name)) { err(`useradd: user '${name}' already exists`); return 9; }
        const si = a.indexOf("-s"), gi = a.indexOf("-G"), ci = a.indexOf("-c");
        const uid = M.nextUid++;
        M.groups.push({ name, gid: uid, members: [] });
        M.users.push({ name, uid, gid: uid, gecos: ci >= 0 ? a[ci + 1] : "", home: "/home/" + name, shell: si >= 0 ? a[si + 1] : (cmd === "adduser" ? "/bin/bash" : "/bin/sh"), pass: "!" });
        if (gi >= 0) a[gi + 1].split(",").forEach(g => { const gr = M.groups.find(x => x.name === g); if (gr) gr.members.push(name); });
        if (has("-m") || cmd === "adduser") {
          const h = M.mk("/home/" + name, "d", 0o750, name, name);
          Object.entries(M.find("/etc/skel").children).forEach(([k, v]) => { h.children[k] = Object.assign({}, v, { owner: name, group: name }); });
        }
        M.log("", "useradd", 2700, `new user: name=${name}, UID=${uid}, GID=${uid}, home=/home/${name}, shell=${M.users[M.users.length - 1].shell}, from=/dev/pts/0`, { auth: true });
        if (cmd === "adduser") say(`info: Adding user \`${name}' ...\ninfo: Selecting UID/GID from range 1000 to 59999 ...\ninfo: Adding new group \`${name}' (${uid}) ...\ninfo: Adding new user \`${name}' (${uid}) with group \`${name} (${uid})' ...\ninfo: Creating home directory \`/home/${name}' ...\ninfo: Copying files from \`/etc/skel' ...`);
        return 0;
      }
      case "usermod": {
        if (s.user !== "root") { err("usermod: Permission denied.\nusermod: cannot lock /etc/passwd; try again later."); return 1; }
        const name = pos[pos.length - 1], u = userObj(M, name);
        if (!u) { err(`usermod: user '${name}' does not exist`); return 6; }
        const gi = a.findIndex(x => x === "-aG" || x === "-G");
        if (gi >= 0) {
          const list = a[gi + 1].split(",");
          if (a[gi] === "-G") M.groups.forEach(g => { g.members = g.members.filter(m => m !== name); });
          for (const g of list) { const gr = M.groups.find(x => x.name === g); if (!gr) { err(`usermod: group '${g}' does not exist`); return 6; } if (!gr.members.includes(name)) gr.members.push(name); }
        }
        if (has("-L")) u.pass = "!" + u.pass.replace(/^!/, "");
        if (has("-U")) u.pass = u.pass.replace(/^!/, "");
        const si = a.indexOf("-s"); if (si >= 0) u.shell = a[si + 1];
        return 0;
      }
      case "gpasswd": { if (s.user !== "root") { err("gpasswd: Permission denied."); return 1; } const di = a.indexOf("-d"); if (di >= 0) { const [user, grp] = [a[di + 1], a[di + 2]]; const g = M.groups.find(x => x.name === grp); g.members = g.members.filter(m => m !== user); say(`Removing user ${user} from group ${grp}`); return 0; } return 0; }
      case "groupadd": { if (s.user !== "root") { err("groupadd: Permission denied.\ngroupadd: cannot lock /etc/group; try again later."); return 1; } const name = pos[0]; if (M.groups.find(g => g.name === name)) { err(`groupadd: group '${name}' already exists`); return 9; } M.groups.push({ name, gid: M.nextUid++, members: [] }); return 0; }
      case "userdel": case "deluser": {
        if (s.user !== "root") { err(`${cmd}: Permission denied.\n${cmd}: cannot lock /etc/passwd; try again later.`); return 1; }
        const name = pos[0], u = userObj(M, name);
        if (!u) { err(`userdel: user '${name}' does not exist`); return 6; }
        M.users = M.users.filter(x => x !== u);
        M.groups = M.groups.filter(g => g.name !== name);
        M.groups.forEach(g => { g.members = g.members.filter(m => m !== name); });
        if (has("-r") || a.includes("--remove-home")) { delete M.find("/home").children[name]; err(`userdel: ${name} mail spool (/var/mail/${name}) not found`); }
        return 0;
      }
      case "passwd": {
        const name = pos[0] || s.user, u = userObj(M, name);
        if (name !== s.user && s.user !== "root") { err(`passwd: You may not view or modify password information for ${name}.`); return 1; }
        if (!u) { err(`passwd: user '${name}' does not exist`); return 1; }
        if (has("-l")) { u.pass = "!" + u.pass.replace(/^!/, ""); say("passwd: password changed."); return 0; }
        if (has("-S")) { say(`${name} ${u.pass.startsWith("!") ? "L" : u.pass === "*" ? "L" : "P"} 2025-11-08 0 99999 7 -1`); return 0; }
        u.pass = "$y$j9T$" + b64(fakeBytes(name + M.now, 12)).slice(0, 16) + "$" + b64(fakeBytes(name, 32)).slice(0, 43);
        say(s.user === "root" ? "New password: \nRetype new password: \npasswd: password updated successfully" : "Changing password for " + name + ".\nCurrent password: \nNew password: \nRetype new password: \npasswd: password updated successfully");
        return 0;
      }
      case "chpasswd": { if (s.user !== "root") { err("chpasswd: Permission denied."); return 1; } lines(stdin || "").forEach(l => { const [n] = l.split(":"); const u = userObj(M, n); if (u) u.pass = "$y$j9T$" + b64(fakeBytes(l, 12)).slice(0, 16) + "$" + b64(fakeBytes(n, 32)).slice(0, 43); }); return 0; }
      case "apt": case "apt-get": return apt(world, a, say, err);
      case "dpkg": { if (has("-l")) { const want = pos[0]; [...M.packages].sort().filter(p => !want || p === want).forEach(p => say(`ii  ${p.padEnd(20)} ${PKGS[p].v.padEnd(22)} amd64`)); return 0; } return 0; }
      case "ps": return ps(world, a, say);
      case "pgrep": { const pat = pos[0]; const hits = M.procs.filter(p => p.cmd.replace(/^\[|\]$/g, "").split(" ")[0].split("/").pop().includes(pat) || (has("-f") && p.cmd.includes(pat))); hits.forEach(p => say(has("-a") ? `${p.pid} ${p.cmd}` : String(p.pid))); return hits.length ? 0 : 1; }
      case "pidof": { const hits = M.procs.filter(p => p.cmd.split(" ")[0].split("/").pop() === pos[0]); if (!hits.length) return 1; say(hits.map(p => p.pid).reverse().join(" ")); return 0; }
      case "kill": case "pkill": {
        const sig = (flags.find(f => /^-(\d+|[A-Z]+)$/.test(f)) || "-15").slice(1);
        let targets;
        if (cmd === "pkill") targets = M.procs.filter(p => p.cmd.includes(pos[0])).map(p => p.pid);
        else targets = pos.map(x => x.startsWith("%") ? (s.jobs.find(j => j.n === +x.slice(1)) || {}).pid : +x);
        let st = 0;
        for (const pid of targets) {
          const p = M.procs.find(x => x.pid === pid);
          if (!p) { err(`bash: kill: (${pid}) - No such process`); st = 1; continue; }
          if (s.user !== "root" && p.user !== s.user) { err(`bash: kill: (${pid}) - Operation not permitted`); st = 1; continue; }
          if (p.ignoreTerm && sig !== "9" && sig !== "KILL") continue;
          M.procs = M.procs.filter(x => x !== p && x.ppid !== pid);
          Object.entries(M.services).forEach(([n, svc]) => { if (svc.pid === pid) { svc.active = false; svc.failed = sig === "9" || sig === "KILL"; svc.since = M.now; } });
          const job = s.jobs.find(j => j.pid === pid);
          if (job) { say(`[${job.n}]+  ${sig === "9" || sig === "KILL" ? "Killed" : "Terminated"}${" ".repeat(Math.max(1, 24 - (sig === "9" ? 6 : 10)))}${job.cmd.replace(/ &$/, "")}`); s.jobs = s.jobs.filter(j => j !== job); }
        }
        return st;
      }
      case "jobs": { s.jobs.forEach((j, i) => say(`[${j.n}]${i === s.jobs.length - 1 ? "+" : "-"}  Running                 ${j.cmd}`)); return 0; }
      case "top": return top(world, say);
      case "free": { say(`               total        used        free      shared  buff/cache   available\nMem:           3.8Gi       612Mi       2.4Gi       1.1Mi       1.0Gi       3.2Gi\nSwap:          2.0Gi          0B       2.0Gi`); return 0; }
      case "df": { say(`Filesystem      Size  Used Avail Use% Mounted on\ntmpfs           392M  1.1M  391M   1% /run\n/dev/sda2        25G  5.8G   18G  25% /\ntmpfs           2.0G     0  2.0G   0% /dev/shm\n/dev/sda1       1.1G  6.2M  1.1G   1% /boot/efi`); return 0; }
      case "du": { const p = pos[0] || "."; const r = lookup(world, resolve(world, p)); if (!r.node) { err(`du: cannot access '${p}': No such file or directory`); return 1; } const sz = n => n.type === "d" ? 4096 + Object.values(n.children).reduce((t, c) => t + sz(c), 0) : Math.max(4096, Math.ceil(sizeOf(n) / 4096) * 4096); say(`${human(sz(r.node))}\t${p}`); return 0; }
      case "systemctl": return systemctl(world, a, say, err);
      case "journalctl": return journalctl(world, a, say, err);
      case "service": return systemctl(world, [a[1], a[0]], say, err);
      case "ip": return ipCmd(world, a, say, err);
      case "ss": case "netstat": return ss(world, a, say);
      case "ping": return ping(world, a, say, err);
      case "curl": return curl(world, a, say, err);
      case "host": case "dig": case "nslookup": return dns(world, cmd, pos, say, err);
      case "ssh": return ssh(world, a, say, err);
      case "ssh-keygen": return sshKeygen(world, a, say, err);
      case "ssh-copy-id": return sshCopyId(world, a, say, err);
      case "sshd": {
        if (needRoot("sshd: no hostkeys available -- exiting.")) return 1;
        if (has("-t")) { const bad = (M.read("/etc/ssh/sshd_config") || "").split("\n").find(l => /^\s*[A-Za-z]/.test(l) && !/^\s*(Include|Port|PermitRootLogin|PubkeyAuthentication|PasswordAuthentication|KbdInteractiveAuthentication|UsePAM|X11Forwarding|MaxAuthTries|PrintMotd|Subsystem|AllowUsers|AllowGroups|ClientAliveInterval|ClientAliveCountMax|LoginGraceTime|PermitEmptyPasswords|Protocol|AuthorizedKeysFile|ChallengeResponseAuthentication)\b/i.test(l)); if (bad) { err(`/etc/ssh/sshd_config: line ${(M.read("/etc/ssh/sshd_config").split("\n").indexOf(bad)) + 1}: Bad configuration option: ${bad.trim().split(/\s+/)[0]}\n/etc/ssh/sshd_config: terminating, 1 bad configuration options`); return 255; } return 0; }
        if (has("-T")) { const c = M.sshd(); say(`port ${c.port}\npermitrootlogin ${c.permitRootLogin.toLowerCase()}\npubkeyauthentication ${c.pubkey.toLowerCase()}\npasswordauthentication ${c.passwordAuthentication.toLowerCase()}\nmaxauthtries ${c.maxAuthTries}`); return 0; }
        return 0;
      }
      case "ufw": return ufw(world, a, say, err);
      case "fail2ban-client": return fail2ban(world, a, say, err);
      case "last": { say(`sara     pts/0        10.0.2.2         ${DAY[new Date(BOOT).getUTCDay()]} ${lsDate(BOOT + 1205000)}   still logged in\nreboot   system boot  6.8.0-45-generic ${DAY[new Date(BOOT).getUTCDay()]} ${lsDate(BOOT)}   still running\n\nwtmp begins ${DAY[new Date(BOOT).getUTCDay()]} ${lsDate(BOOT)}:00 2026`); return 0; }
      case "who": case "w": say(`sara     pts/0        ${new Date(BOOT + 1205000).toISOString().slice(0, 16).replace("T", " ")} (10.0.2.2)`); return 0;
      case "tree": {
        if (!M.packages.has("tree")) break;
        const p = pos[0] || ".";
        const r = lookup(world, resolve(world, p));
        if (!r.node) { err(`${p}  [error opening dir]`); return 2; }
        let dirs = 0, files = 0;
        const walk = (n, prefix) => Object.keys(n.children).filter(k => has("-a") || !k.startsWith(".")).sort(cmpName).forEach((k, i, arr) => { const c = n.children[k], lastc = i === arr.length - 1; say(prefix + (lastc ? "└── " : "├── ") + k); if (c.type === "d") { dirs++; walk(c, prefix + (lastc ? "    " : "│   ")); } else files++; });
        say(p); walk(r.node, "");
        say(`\n${dirs} director${dirs === 1 ? "y" : "ies"}, ${files} file${files === 1 ? "" : "s"}`);
        return 0;
      }
      case "bash": case "sh": return runScript(world, pos[0], pos.slice(1), say, err, true);
      case "nano": case "vim": case "vi": err(`${cmd}: المحررات التفاعلية غير متاحة في الطرفية المحاكاة؛ استخدم cat > file <<EOF أو echo أو sed -i`); return 1;
      case "man": err(`المحاكي لا يعرض صفحات man؛ جرّب ${pos[0]} --help في جهازك الحقيقي`); return 1;
    }
    // تشغيل ملف تنفيذي بمساره: ./script.sh
    if (cmd.includes("/")) return runScript(world, cmd, a, say, err, false);
    if (cmd === "htop" && M.packages.has("htop")) { err("htop: واجهة تفاعلية لا تعمل في المحاكي؛ استخدم top -b -n 1 أو ps"); return 1; }
    if (cmd === "nginx" && M.packages.has("nginx")) { if (has("-t")) { if (s.user !== "root") { err("nginx: [alert] could not open error log file: open() \"/var/log/nginx/error.log\" failed (13: Permission denied)"); return 1; } err("nginx: the configuration file /etc/nginx/nginx.conf syntax is ok\nnginx: configuration file /etc/nginx/nginx.conf test is successful"); return 0; } if (has("-v")) { err("nginx version: nginx/1.24.0 (Ubuntu)"); return 0; } return 0; }
    // أمر غير موجود: Ubuntu يقترح الحزمة إن كانت معروفة
    const pkg = Object.entries(PKGS).find(([n, p]) => (p.bin || []).some(b => b.split("/").pop() === cmd) && !M.packages.has(n));
    if (pkg) { err(`Command '${cmd}' not found, but can be installed with:\nsudo apt install ${pkg[0]}`); return 127; }
    err(`${cmd}: command not found`);
    return 127;
  }
  function whichPath(M, name) {
    for (const d of ["/usr/local/sbin", "/usr/local/bin", "/usr/sbin", "/usr/bin"]) if (M.find(d + "/" + name)) return d + "/" + name;
    return null;
  }
  function parentOf(world, abs) { const p = abs.replace(/\/[^/]+$/, "") || "/"; const r = lookup(world, p); return r.node || null; }
  function su(world, who, say, err) {
    const M = world.session.M, u = userObj(M, who);
    if (!u) { err(`su: user ${who} does not exist or the user entry does not contain all the required fields`); return 1; }
    if (u.shell.endsWith("nologin")) { say("This account is currently not available."); return 1; }
    world.stack.push(world.session);
    world.session = Object.assign({}, world.session, { user: who, cwd: u.home, env: Object.assign({}, world.session.env, { HOME: u.home, USER: who, PWD: u.home }), jobs: [], umask: 0o022 });
    return 0;
  }
  function runScript(world, path, args, say, err, viaBash) {
    const abs = resolve(world, path);
    const r = lookup(world, abs);
    if (!r.node) { err(viaBash ? `bash: ${path}: No such file or directory` : `bash: ${path}: No such file or directory`); return 127; }
    if (!viaBash && !can(world, r.node, "x")) { err(`bash: ${path}: Permission denied`); return 126; }
    if (!can(world, r.node, "r")) { err(`bash: ${path}: Permission denied`); return 126; }
    const body = content(r.node);
    if (body.startsWith("\x7fELF")) return 0;
    const env = world.session.env;
    const saved = Object.assign({}, env);
    args.forEach((v, i) => { env[String(i + 1)] = v; });
    env["0"] = path;
    let st = 0;
    for (const l of body.split("\n")) {
      if (!l.trim() || l.trim().startsWith("#")) continue;
      execLine(world, l.trim(), say, null);
      st = world.session.status;
    }
    world.session.env = Object.assign(saved, { PWD: world.session.cwd });
    return st;
  }

  // ---------- ls ----------
  function ls(world, a, say, err) {
    const M = world.session.M;
    const opts = a.filter(x => x.startsWith("-")).join("");
    const long = opts.includes("l"), all = opts.includes("a"), almost = opts.includes("A"), hum = opts.includes("h"), dirOnly = opts.includes("d"), byTime = opts.includes("t");
    const targets = a.filter(x => !x.startsWith("-"));
    if (!targets.length) targets.push(".");
    let st = 0;
    const fmtLong = entries => {
      const rows = entries.map(([name, n]) => [modeStr(n), String(n.type === "d" ? 2 + Object.values(n.children || {}).filter(c => c.type === "d").length : 1), n.owner, n.group, hum ? human(sizeOf(n)) : String(sizeOf(n)), lsDate(n.mtime || BOOT), name + (n.type === "l" ? " -> " + n.target : "")]);
      const w = [0, 1, 2, 3, 4].map(i => Math.max(...rows.map(r => r[i].length)));
      return rows.map(r => `${r[0]} ${r[1].padStart(w[1])} ${r[2].padEnd(w[2])} ${r[3].padEnd(w[3])} ${r[4].padStart(w[4])} ${r[5]} ${r[6]}`);
    };
    targets.forEach((t, ti) => {
      const abs = resolve(world, t);
      const r = lookup(world, abs);
      if (!r.node) { err(`ls: cannot access '${t}': ${r.err}`); st = 2; return; }
      if (r.node.type !== "d" || dirOnly) { say(long ? fmtLong([[t, r.node]])[0] : t); return; }
      if (!can(world, r.node, "r")) { err(`ls: cannot open directory '${t}': Permission denied`); st = 2; return; }
      let names = Object.keys(r.node.children).filter(n => all || almost || !n.startsWith(".")).sort(cmpName);
      if (byTime) names.sort((x, y) => (r.node.children[y].mtime || 0) - (r.node.children[x].mtime || 0));
      let entries = names.map(n => [n, r.node.children[n]]);
      if (all) entries = [[".", r.node], ["..", parentOf(world, abs) || r.node], ...entries];
      if (targets.length > 1) say((ti ? "\n" : "") + t + ":");
      if (long) {
        const blocks = entries.reduce((s2, [, n]) => s2 + (n.type === "d" ? 4 : sizeOf(n) ? Math.ceil(sizeOf(n) / 4096) * 4 : 0), 0);
        say("total " + blocks);
        if (entries.length) say(fmtLong(entries).join("\n"));
      } else if (entries.length) say(entries.map(e => e[0]).join("  "));
    });
    return st;
  }

  // ---------- grep و awk و sed و find ----------
  function grep(world, a, stdin, say, err) {
    const opts = a.filter(x => /^-[a-zA-Z]+$/.test(x)).join("");
    const eI = a.indexOf("-e");
    const rest = a.filter((x, i) => !/^-[a-zA-Z]+$/.test(x) || (eI >= 0 && i === eI + 1));
    const pattern = eI >= 0 ? a[eI + 1] : rest[0];
    const files = rest.filter(x => x !== pattern);
    const flagsRe = opts.includes("i") ? "i" : "";
    let re;
    try { re = opts.includes("F") ? new RegExp(pattern.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), flagsRe) : new RegExp(pattern.replace(/\\\|/g, "|").replace(/\\\(/g, "(").replace(/\\\)/g, ")"), flagsRe + (opts.includes("o") ? "g" : "")); }
    catch (e) { err("grep: Unmatched ( or \\("); return 2; }
    const list = [];
    if (opts.includes("r") || opts.includes("R")) {
      const walk = (p, n) => { if (n.type === "d") { if (!can(world, n, "r") || !can(world, n, "x")) { err(`grep: ${p}: Permission denied`); return; } Object.keys(n.children).sort(cmpName).forEach(k => walk(p.replace(/\/$/, "") + "/" + k, n.children[k])); } else if (n.type === "f") { if (!can(world, n, "r")) { err(`grep: ${p}: Permission denied`); return; } list.push([p, content(n)]); } };
      (files.length ? files : ["."]).forEach(f => { const r = lookup(world, resolve(world, f)); if (r.node) walk(f, r.node); else err(`grep: ${f}: No such file or directory`); });
    } else if (files.length) {
      for (const f of files) { const c = readFile(world, f, "grep", err); if (c !== null) list.push([f, c]); }
    } else list.push(["(standard input)", stdin || ""]);
    const many = list.length > 1 || opts.includes("r") || opts.includes("R");
    let found = 0;
    const outl = [];
    for (const [f, c] of list) {
      let cnt = 0;
      c.replace(/\n$/, "").split("\n").forEach((l, i) => {
        if (!c) return;
        re.lastIndex = 0;
        const m = re.test(l);
        if (m === opts.includes("v")) return;
        cnt++; found++;
        if (opts.includes("c") || opts.includes("l") || opts.includes("q")) return;
        const pre = (many && !opts.includes("h") ? f + ":" : "") + (opts.includes("n") ? (i + 1) + ":" : "");
        if (opts.includes("o")) { re.lastIndex = 0; (l.match(re) || []).forEach(x => outl.push(pre + x)); }
        else outl.push(pre + l);
      });
      if (opts.includes("c")) outl.push((many ? f + ":" : "") + cnt);
      if (opts.includes("l") && cnt) outl.push(f);
    }
    if (outl.length && !opts.includes("q")) say(outl.join("\n"));
    return found ? 0 : 1;
  }
  function awk(world, a, stdin, say, err, inputs) {
    const fI = a.findIndex(x => x.startsWith("-F"));
    const fs = fI >= 0 ? (a[fI].length > 2 ? a[fI].slice(2) : a[fI + 1]) : null;
    const rest = a.filter((x, i) => i !== fI && !(fI >= 0 && a[fI].length === 2 && i === fI + 1));
    const prog = rest[0], files = rest.slice(1);
    const c = inputs(files); if (c === null) return 1;
    const m = /^\s*(?:(\$\d+|NR|NF)\s*(==|!=|>=|<=|>|<|~)\s*("[^"]*"|\/[^/]*\/|-?[\d.]+)|\/([^/]*)\/)?\s*(?:\{\s*(.*?)\s*\})?\s*$/.exec(prog);
    if (!m) { err("awk: هذا المحاكي يدعم صيغاً بسيطة مثل '{print $1}' و '/pattern/ {print $2}' و '$3 > 100 {print $1}'"); return 2; }
    const [, lhs, op, rhs, rx, action] = m;
    const out = [];
    const sums = {};
    let endBlock = null;
    const rows = c ? c.replace(/\n$/, "").split("\n") : [];
    rows.forEach((l, i) => {
      const f = fs ? l.split(fs === "\\t" ? "\t" : fs) : l.trim().split(/\s+/);
      const val = k => { const m2 = /^\$\(NF-(\d+)\)$/.exec(k); if (m2) return f[f.length - 1 - +m2[1]] ?? ""; if (k === "$NF") return f[f.length - 1]; return k === "NR" ? i + 1 : k === "NF" ? f.length : k === "$0" ? l : f[+k.slice(1) - 1] ?? ""; };
      if (rx !== undefined && !new RegExp(rx).test(l)) return;
      if (lhs) {
        const L = val(lhs); let R = rhs.replace(/^"|"$/g, "");
        let ok;
        if (op === "~") ok = new RegExp(R.replace(/^\/|\/$/g, "")).test(L);
        else { const num = !isNaN(parseFloat(R)) && !isNaN(parseFloat(L)); const x = num ? parseFloat(L) : L, y = num ? parseFloat(R) : R; ok = { "==": x == y, "!=": x != y, ">": x > y, "<": x < y, ">=": x >= y, "<=": x <= y }[op]; }
        if (!ok) return;
      }
      const act = action || "print $0";
      const pm = /^print\s*(.*)$/.exec(act);
      if (pm) {
        const expr = pm[1] || "$0";
        const parts = expr.split(/\s*,\s*/).map(p => p.split(/\s+/).map(tk => /^"/.test(tk) ? tk.replace(/^"|"$/g, "") : /^\$\d+$|^NR$|^NF$|^\$0$|^\$NF$|^\$\(NF-\d+\)$/.test(tk) ? String(val(tk)) : tk).join(""));
        out.push(parts.join(" "));
      }
    });
    if (out.length) say(out.join("\n"));
    return 0;
  }
  function sed(world, a, stdin, say, err, inputs) {
    const inplace = a.includes("-i");
    const quiet = a.includes("-n");
    const rest = a.filter(x => x !== "-i" && x !== "-n" && x !== "-E");
    const script = rest[0], files = rest.slice(1);
    const sm = /^s(.)(.*?)\1(.*?)\1([gi]*)$/.exec(script);
    const pm = /^(\d+)(?:,(\d+))?p$/.exec(script);
    const dm = /^\/(.*)\/d$/.exec(script);
    const apply = text => {
      const ls2 = text.replace(/\n$/, "").split("\n");
      if (sm) { const re = new RegExp(sm[2], sm[4].includes("g") ? "g" : "" + (sm[4].includes("i") ? "i" : "")); return ls2.map(l => l.replace(re, sm[3].replace(/\\\//g, "/").replace(/&/g, "$&"))).join("\n") + "\n"; }
      if (pm) { const x = +pm[1], y = +(pm[2] || pm[1]); return ls2.filter((l, i) => i + 1 >= x && i + 1 <= y).join("\n") + "\n"; }
      if (dm) { const re = new RegExp(dm[1]); return ls2.filter(l => !re.test(l)).join("\n") + "\n"; }
      return null;
    };
    if (!sm && !pm && !dm) { err(`sed: -e expression #1, char ${script.length}: unknown command`); return 1; }
    if (inplace) {
      for (const f of files) {
        const r = lookup(world, resolve(world, f));
        if (!r.node) { err(`sed: can't read ${f}: No such file or directory`); return 2; }
        const par = parentOf(world, resolve(world, f));
        if (!can(world, r.node, "r") || !can(world, par, "w")) { err(`sed: couldn't open temporary file ${f.replace(/[^/]*$/, "")}sedAb12Cd: Permission denied`); return 4; }
        r.node.content = apply(content(r.node));
      }
      return 0;
    }
    const c = inputs(files); if (c === null) return 2;
    const outp = apply(c);
    if (outp && outp !== "\n" && !(quiet && !pm)) say(outp.replace(/\n$/, ""));
    return 0;
  }
  function find(world, a, say, err) {
    const start = a[0] && !a[0].startsWith("-") ? a[0] : ".";
    const opt = k => { const i = a.indexOf(k); return i >= 0 ? a[i + 1] : null; };
    const name = opt("-name"), type = opt("-type"), perm = opt("-perm"), user = opt("-user"), mmin = opt("-mmin"), iname = opt("-iname");
    const reOf = g => new RegExp("^" + g.replace(/[.+^${}()|[\]\\]/g, "\\$&").replace(/\*/g, ".*").replace(/\?/g, ".") + "$", iname ? "i" : "");
    const nameRe = name ? reOf(name) : iname ? reOf(iname) : null;
    const r = lookup(world, resolve(world, start));
    if (!r.node) { err(`find: ‘${start}’: No such file or directory`); return 1; }
    let st = 0;
    const match = (p, n) => {
      if (nameRe && !nameRe.test(p.split("/").pop())) return false;
      if (type && (type === "f" ? n.type !== "f" : type === "d" ? n.type !== "d" : n.type !== "l")) return false;
      if (user && n.owner !== user) return false;
      if (perm) { const want = parseInt(perm.replace(/^[-/]/, ""), 8); if (perm.startsWith("-") ? (n.mode & want) !== want : perm.startsWith("/") ? !(n.mode & want) : (n.mode & 0o7777) !== want) return false; }
      if (mmin) { const age = (world.session.M.now - (n.mtime || BOOT)) / 60000; if (mmin.startsWith("-") ? age >= +mmin.slice(1) : age <= +mmin) return false; }
      return true;
    };
    const walk = (p, n) => {
      if (match(p, n)) say(p);
      if (n.type === "d") {
        if (!can(world, n, "r") || !can(world, n, "x")) { err(`find: ‘${p}’: Permission denied`); st = 1; return; }
        Object.keys(n.children).sort(cmpName).forEach(k => walk((p === "/" ? "" : p) + "/" + k, n.children[k]));
      }
    };
    walk(start, r.node);
    return st;
  }
  function chmod(world, a, err) {
    const recursive = a.includes("-R");
    const rest = a.filter(x => x !== "-R");
    const [spec, ...files] = rest;
    for (const f of files) {
      const r = lookup(world, resolve(world, f));
      if (!r.node) { err(`chmod: cannot access '${f}': No such file or directory`); return 1; }
      if (world.session.user !== "root" && r.node.owner !== world.session.user) { err(`chmod: changing permissions of '${f}': Operation not permitted`); return 1; }
      const apply = n => {
        if (/^[0-7]{3,4}$/.test(spec)) n.mode = parseInt(spec, 8);
        else for (const part of spec.split(",")) {
          const m = /^([ugoa]*)([+\-=])([rwxst]*)$/.exec(part);
          if (!m) { err(`chmod: invalid mode: ‘${spec}’`); return false; }
          const who = m[1] || "a";
          let bits = 0;
          for (const ch of m[3]) {
            if (ch === "s") { if (/[ua]/.test(who)) bits |= 0o4000; if (/[ga]/.test(who)) bits |= 0o2000; continue; }
            if (ch === "t") { bits |= 0o1000; continue; }
            const v = { r: 4, w: 2, x: 1 }[ch];
            if (who.includes("u") || who.includes("a")) bits |= v << 6;
            if (who.includes("g") || who.includes("a")) bits |= v << 3;
            if (who.includes("o") || who.includes("a")) bits |= v;
          }
          if (m[2] === "+") n.mode |= bits;
          else if (m[2] === "-") n.mode &= ~bits;
          else { let mask = 0; if (/[ua]/.test(who)) mask |= 0o700; if (/[ga]/.test(who)) mask |= 0o070; if (/[oa]/.test(who)) mask |= 0o007; n.mode = (n.mode & ~mask) | bits; }
        }
        if (recursive) Object.values(n.children || {}).forEach(apply);
      };
      if (apply(r.node) === false) return 1;
    }
    return 0;
  }

  // ---------- apt ----------
  function apt(world, a, say, err) {
    const s = world.session, M = s.M;
    const [sub, ...rest] = a.filter(x => !x.startsWith("-"));
    const yes = a.includes("-y");
    const lock = () => { if (s.user === "root") return false; err(sub === "update" ? "Reading package lists... Done\nE: Could not open lock file /var/lib/apt/lists/lock - open (13: Permission denied)\nE: Unable to lock directory /var/lib/apt/lists/\nW: Problem unlinking the file /var/cache/apt/pkgcache.bin - RemoveCaches (13: Permission denied)\nW: Problem unlinking the file /var/cache/apt/srcpkgcache.bin - RemoveCaches (13: Permission denied)" : "E: Could not open lock file /var/lib/dpkg/lock-frontend - open (13: Permission denied)\nE: Unable to acquire the dpkg frontend lock (/var/lib/dpkg/lock-frontend), are you root?"); return true; };
    const head = "Reading package lists... Done\nBuilding dependency tree... Done\nReading state information... Done";
    const upg = () => M.upgraded ? 0 : UPGRADABLE.length;
    switch (sub) {
      case "update":
        if (lock()) return 100;
        M.updated = true;
        say(`Hit:1 http://archive.ubuntu.com/ubuntu noble InRelease\nGet:2 http://archive.ubuntu.com/ubuntu noble-updates InRelease [126 kB]\nGet:3 http://security.ubuntu.com/ubuntu noble-security InRelease [126 kB]\nFetched 252 kB in 1s (252 kB/s)\n${head}\n${upg() ? `${upg()} packages can be upgraded. Run 'apt list --upgradable' to see them.` : "All packages are up to date."}`);
        return 0;
      case "list": {
        if (a.includes("--upgradable")) { say("Listing... Done"); if (!M.upgraded) say("libssl3t64/noble-updates,noble-security 3.0.13-0ubuntu3.5 amd64 [upgradable from: 3.0.13-0ubuntu3.4]\nopenssl/noble-updates,noble-security 3.0.13-0ubuntu3.5 amd64 [upgradable from: 3.0.13-0ubuntu3.4]\ntzdata/noble-updates 2025b-0ubuntu0.24.04 all [upgradable from: 2024a-3ubuntu1.1]"); return 0; }
        if (a.includes("--installed")) { say("Listing... Done"); say([...M.packages].sort().map(p => `${p}/noble,now ${p === "openssl" && M.upgraded ? PKGS[p].upgrade : PKGS[p].v} amd64 [installed]`).join("\n")); return 0; }
        return 0;
      }
      case "show": { const p = PKGS[rest[0]]; if (!p) { err(`N: Unable to locate package ${rest[0]}\nE: No packages found`); return 100; } say(`Package: ${rest[0]}\nVersion: ${p.v}\nPriority: optional\nSection: ${p.sec === "universe" ? "universe/" : ""}utils\nInstalled-Size: ${p.disk}\nDownload-Size: ${p.size}\nAPT-Sources: http://archive.ubuntu.com/ubuntu noble/${p.sec} amd64 Packages`); return 0; }
      case "search": { const hits = Object.keys(PKGS).filter(n => n.includes(rest[0])); say("Sorting... Done\nFull Text Search... Done"); hits.forEach(n => say(`${n}/noble ${PKGS[n].v} amd64${M.packages.has(n) ? " [installed]" : ""}\n`)); return 0; }
      case "install": {
        if (lock()) return 100;
        for (const n of rest) if (!PKGS[n]) { say(head); err(`E: Unable to locate package ${n}`); return 100; }
        const todo = rest.filter(n => !M.packages.has(n));
        const out = [head];
        rest.filter(n => M.packages.has(n)).forEach(n => out.push(`${n} is already the newest version (${PKGS[n].v}).`));
        if (!todo.length) { out.push(`0 upgraded, 0 newly installed, 0 to remove and ${upg()} not upgraded.`); say(out.join("\n")); return 0; }
        const deps = todo.flatMap(n => PKGS[n].deps || []);
        const all = [...deps, ...todo];
        if (deps.length) out.push(`The following additional packages will be installed:\n  ${deps.join(" ")}`);
        out.push(`The following NEW packages will be installed:\n  ${all.slice().sort().join(" ")}`);
        out.push(`0 upgraded, ${all.length} newly installed, 0 to remove and ${upg()} not upgraded.`);
        out.push(`Need to get ${todo.map(n => PKGS[n].size).join(" + ")} of archives.\nAfter this operation, ${todo.map(n => PKGS[n].disk).join(" + ")} of additional disk space will be used.`);
        if (deps.length && !yes) out.push("Do you want to continue? [Y/n] Y");
        todo.forEach((n, i) => out.push(`Get:${i + 1} http://archive.ubuntu.com/ubuntu noble/${PKGS[n].sec} amd64 ${n} amd64 ${PKGS[n].v} [${PKGS[n].size}]`));
        all.forEach(n => { const v = PKGS[n] ? PKGS[n].v : "1.0"; out.push(`Selecting previously unselected package ${n}.\nPreparing to unpack .../${n}_${v.replace(/^\d+:/, "")}_amd64.deb ...\nUnpacking ${n} (${v}) ...`); });
        all.forEach(n => out.push(`Setting up ${n} (${PKGS[n] ? PKGS[n].v : "1.0"}) ...`));
        say(out.join("\n"));
        for (const n of todo) {
          M.packages.add(n);
          (PKGS[n].bin || []).forEach(b => M.mk(b, "f", 0o755, "root", "root", "\x7fELF"));
          if (n === "nginx") {
            M.mk("/etc/nginx/nginx.conf", "f", 0o644, "root", "root", "user www-data;\nworker_processes auto;\npid /run/nginx.pid;\nevents {\n\tworker_connections 768;\n}\nhttp {\n\taccess_log /var/log/nginx/access.log;\n\terror_log /var/log/nginx/error.log;\n\tinclude /etc/nginx/sites-enabled/*;\n}\n");
            M.mk("/etc/nginx/sites-available/default", "f", 0o644, "root", "root", "server {\n\tlisten 80 default_server;\n\troot /var/www/html;\n\tindex index.html index.nginx-debian.html;\n\tserver_name _;\n}\n");
            M.mk("/var/www/html/index.nginx-debian.html", "f", 0o644, "root", "root", "<!DOCTYPE html>\n<html>\n<head>\n<title>Welcome to nginx!</title>\n</head>\n<body>\n<h1>Welcome to nginx!</h1>\n</body>\n</html>\n");
            M.mk("/var/log/nginx/access.log", "f", 0o640, "www-data", "adm", "");
            M.mk("/var/log/nginx/error.log", "f", 0o640, "www-data", "adm", "");
          }
          if (n === "fail2ban") M.mk("/etc/fail2ban/jail.conf", "f", 0o644, "root", "root", "[DEFAULT]\nbantime  = 10m\nfindtime  = 10m\nmaxretry = 5\n\n[sshd]\nport    = ssh\nlogpath = %(sshd_log)s\n");
          if (PKGS[n].service) { M.services[PKGS[n].service] = { enabled: true }; M.startService(PKGS[n].service); if (n === "fail2ban") { M.mk("/etc/fail2ban/jail.local", "f", 0o644, "root", "root", "[sshd]\nenabled = true\n"); } }
        }
        if (todo.some(n => PKGS[n].bin)) say("Processing triggers for man-db (2.12.0-4build2) ...");
        return 0;
      }
      case "remove": case "purge": {
        if (lock()) return 100;
        const n = rest[0];
        if (!M.packages.has(n)) { say(`${head}\nPackage '${n}' is not installed, so not removed\n0 upgraded, 0 newly installed, 0 to remove and ${upg()} not upgraded.`); return 0; }
        say(`${head}\nThe following packages will be REMOVED:\n  ${n}${sub === "purge" ? "*" : ""}\n0 upgraded, 0 newly installed, 1 to remove and ${upg()} not upgraded.\nRemoving ${n} (${PKGS[n].v}) ...`);
        M.packages.delete(n);
        if (PKGS[n].service) { M.stopService(PKGS[n].service); delete M.services[PKGS[n].service]; }
        (PKGS[n].bin || []).forEach(b => { const par = M.find(b.replace(/\/[^/]+$/, "")); if (par) delete par.children[b.split("/").pop()]; });
        return 0;
      }
      case "upgrade": {
        if (lock()) return 100;
        if (M.upgraded) { say(`${head}\nCalculating upgrade... Done\n0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.`); return 0; }
        say(`${head}\nCalculating upgrade... Done\nThe following packages will be upgraded:\n  libssl3t64 openssl tzdata\n3 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.\nNeed to get 3,252 kB of archives.\n${yes ? "" : "Do you want to continue? [Y/n] Y\n"}Unpacking openssl (3.0.13-0ubuntu3.5) over (3.0.13-0ubuntu3.4) ...\nSetting up openssl (3.0.13-0ubuntu3.5) ...`);
        M.upgraded = true;
        return 0;
      }
      case "autoremove": if (lock()) return 100; say(`${head}\n0 upgraded, 0 newly installed, 0 to remove and ${upg()} not upgraded.`); return 0;
    }
    err(`E: Invalid operation ${sub}`);
    return 100;
  }

  // ---------- العمليات ----------
  function psRows(world) {
    const M = world.session.M;
    return M.procs.slice().sort((x, y) => x.pid - y.pid);
  }
  function ps(world, a, say) {
    const M = world.session.M;
    const opt = a.join(" ");
    const me = M.proc(world.session.user, "ps " + a.join(" "), { ppid: world.shellPid, tty: "pts/0", stat: "R+", mem: 0.1, vsz: 11320, rss: 4480 });
    const rows = psRows(world);
    M.procs = M.procs.filter(p => p !== me);
    M.nextPid--;
    const cputime = p => p.cpu > 50 ? "12:41" : "0:00";
    if (/aux|-aux|-ef/.test(opt) || a.includes("aux") || a.includes("-e")) {
      let list = rows;
      const sortI = a.findIndex(x => x.startsWith("--sort"));
      if (sortI >= 0) { const key = a[sortI].split("=")[1] || a[sortI + 1]; const desc = key.startsWith("-"); const k = key.replace(/^[-+]/, "").replace("%", ""); list = list.slice().sort((x, y) => (desc ? -1 : 1) * ((x[k] || 0) - (y[k] || 0))); }
      if (opt.includes("-ef")) {
        say("UID          PID    PPID  C STIME TTY          TIME CMD");
        list.forEach(p => say(`${p.user.padEnd(8).slice(0, 8)} ${String(p.pid).padStart(7)} ${String(p.ppid).padStart(7)}  ${Math.min(99, Math.round(p.cpu))} ${hms(p.start).slice(0, 5)} ${p.tty.padEnd(8)} ${p.cpu > 50 ? "00:12:41" : "00:00:00"} ${p.cmd}`));
        return 0;
      }
      say("USER         PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND");
      list.forEach(p => say(`${p.user.padEnd(8).slice(0, 8)} ${String(p.pid).padStart(7)} ${p.cpu.toFixed(1).padStart(4)} ${p.mem.toFixed(1).padStart(4)} ${String(p.vsz).padStart(6)} ${String(p.rss).padStart(5)} ${p.tty.padEnd(8)} ${p.stat.padEnd(4)} ${hms(p.start).slice(0, 5)} ${cputime(p).padStart(6)} ${p.cmd}`));
      return 0;
    }
    say("    PID TTY          TIME CMD");
    rows.filter(p => p.tty === "pts/0" && p.user === world.session.user).concat([me]).forEach(p => say(`${String(p.pid).padStart(7)} ${p.tty.padEnd(8)} 00:00:00 ${p.cmd.replace(/^-/, "").split(" ")[0].split("/").pop()}`));
    return 0;
  }
  function top(world, say) {
    const M = world.session.M, rows = psRows(world);
    const cpu = rows.reduce((t, p) => t + p.cpu, 0);
    say(`top - ${hms(M.now)} up 1:00,  1 user,  load average: ${(cpu / 100).toFixed(2)}, 0.40, 0.21\nTasks: ${rows.length} total,   ${rows.filter(p => p.cpu > 1).length} running, ${rows.length - rows.filter(p => p.cpu > 1).length} sleeping,   0 stopped,   0 zombie\n%Cpu(s): ${Math.min(100, cpu / 2).toFixed(1)} us,  0.3 sy,  0.0 ni, ${Math.max(0, 100 - cpu / 2).toFixed(1)} id,  0.0 wa,  0.0 hi,  0.0 si,  0.0 st\nMiB Mem :   3916.2 total,   2457.6 free,    612.4 used,   1036.0 buff/cache\nMiB Swap:   2048.0 total,   2048.0 free,      0.0 used.   3303.8 avail Mem\n\n    PID USER      PR  NI    VIRT    RES    SHR S  %CPU  %MEM     TIME+ COMMAND`);
    rows.slice().sort((x, y) => y.cpu - x.cpu || x.pid - y.pid).slice(0, 8).forEach(p => say(`${String(p.pid).padStart(7)} ${p.user.padEnd(8).slice(0, 8)}  20   0 ${String(p.vsz).padStart(7)} ${String(p.rss).padStart(6)} ${String(Math.round(p.rss * 0.6)).padStart(6)} ${p.cpu > 1 ? "R" : "S"} ${p.cpu.toFixed(1).padStart(5)} ${p.mem.toFixed(1).padStart(5)} ${(p.cpu > 50 ? "761:22.15" : "0:00.12").padStart(9)} ${p.cmd.split(" ")[0].split("/").pop().replace(/^-/, "")}`));
    return 0;
  }

  // ---------- systemd ----------
  function systemctl(world, a, say, err) {
    const s = world.session, M = s.M;
    const args = a.filter(x => !x.startsWith("-"));
    const [sub, unitRaw] = args;
    const unit = (unitRaw || "").replace(/\.service$/, "");
    const def = () => SERVICES[unit] || M.unitFile(unit);
    const auth = verb => { if (s.user === "root") return false; err(`Failed to ${verb} ${unit}.service: Interactive authentication required.\nSee system logs and 'systemctl status ${unit}.service' for details.`); return true; };
    const missing = () => { if (def()) return false; const fileExists = M.read(`/etc/systemd/system/${unit}.service`) != null; err(fileExists ? `Failed to ${sub} ${unit}.service: Unit ${unit}.service not found.\n(تحتاج sudo systemctl daemon-reload بعد إنشاء ملف الوحدة)` : `Failed to ${sub} ${unit}.service: Unit ${unit}.service not found.`); return true; };
    switch (sub) {
      case "daemon-reload": if (s.user !== "root") { err("Failed to reload daemon: Interactive authentication required."); return 1; } Object.keys(M.find("/etc/systemd/system").children).filter(n => n.endsWith(".service")).forEach(n => M.reloaded.add(n.replace(/\.service$/, ""))); return 0;
      case "start": case "restart": case "reload": {
        if (missing() || auth(sub)) return sub === "start" ? 5 : 1;
        if (sub === "restart") M.stopService(unit);
        const r = M.startService(unit);
        if (r === "failed") { err(`Job for ${unit}.service failed because the control process exited with error code.\nSee "systemctl status ${unit}.service" and "journalctl -xeu ${unit}.service" for details.`); return 1; }
        return 0;
      }
      case "stop": if (missing() || auth("stop")) return 1; M.stopService(unit); return 0;
      case "enable": case "disable": {
        if (missing() || auth(sub)) return 1;
        const st = M.services[unit] = M.services[unit] || {};
        const file = def().unit;
        if (sub === "enable" && !st.enabled) { st.enabled = true; err(`Created symlink /etc/systemd/system/multi-user.target.wants/${unit}.service → ${file}.`); }
        if (sub === "disable" && st.enabled) { st.enabled = false; err(`Removed "/etc/systemd/system/multi-user.target.wants/${unit}.service".`); }
        if (a.includes("--now")) { if (sub === "enable") M.startService(unit); else M.stopService(unit); }
        return 0;
      }
      case "is-active": { const st = M.services[unit]; say(st && st.active ? "active" : st && st.failed ? "failed" : "inactive"); return st && st.active ? 0 : 3; }
      case "is-enabled": { if (!def()) { err(`Failed to get unit file state for ${unit}.service: No such file or directory`); return 1; } const st = M.services[unit]; say(st && st.enabled ? "enabled" : "disabled"); return st && st.enabled ? 0 : 1; }
      case "list-units": {
        const names = Object.keys(M.services).filter(n => M.services[n].active || a.includes("--all")).sort();
        say("  UNIT" + " ".repeat(20) + "LOAD   ACTIVE SUB     DESCRIPTION");
        names.forEach(n => { const st = M.services[n], d = SERVICES[n] || M.unitFile(n); say(`  ${(n + ".service").padEnd(23)} loaded ${st.active ? "active " : st.failed ? "failed " : "inactive"} ${st.active ? "running" : "dead   "} ${d.desc}`); });
        say(`\nLegend: LOAD   → Reflects whether the unit definition was properly loaded.\n        ACTIVE → The high-level unit activation state, i.e. generalization of SUB.\n        SUB    → The low-level unit activation state, values depend on unit type.\n\n${names.length} loaded units listed.`);
        return 0;
      }
      case "status": {
        if (!def()) { err(`Unit ${unit}.service could not be found.`); return 4; }
        const d = def(), st = M.services[unit] || {};
        const since = st.since || BOOT;
        const dot = st.active ? "●" : st.failed ? "×" : "○";
        const active = st.active ? `active (running) since ${fullDate(since)}; ${ago(Math.round((M.now - since) / 1000))}` : st.failed ? `failed (Result: exit-code) since ${fullDate(since)}; ${ago(Math.round((M.now - since) / 1000))}` : st.since ? `inactive (dead) since ${fullDate(since)}; ${ago(Math.round((M.now - since) / 1000))}` : "inactive (dead)";
        const outl = [`${dot} ${unit}.service - ${d.desc}`, `     Loaded: loaded (${d.unit}; ${st.enabled ? "enabled" : "disabled"}; preset: enabled)`, `     Active: ${active}`];
        if (d.docs) outl.push(`       Docs: ${d.docs}`);
        if (st.active) {
          const procs = M.procs.filter(p => (st.procs || []).includes(p.pid));
          outl.push(`   Main PID: ${st.pid} (${(d.proc || d.exec).split(" ")[0].split("/").pop().replace(/:$/, "")})`, `      Tasks: ${procs.length} (limit: 4558)`, `     Memory: ${(procs.length * 2.4).toFixed(1)}M (peak: ${(procs.length * 2.6).toFixed(1)}M)`, `        CPU: ${21 * procs.length}ms`, `     CGroup: /system.slice/${unit}.service`);
          procs.forEach((p, i) => outl.push(`             ${i === procs.length - 1 ? "└─" : "├─"}${p.pid} ${p.cmd.includes(" ") ? `"${p.cmd}"` : p.cmd}`));
        }
        const logs = M.journal.filter(j => j.unit === unit + ".service").slice(-5);
        if (logs.length) { outl.push(""); logs.forEach(j => outl.push(`${jDate(j.t)} ${M.hostname} ${j.ident}[${j.pid}]: ${j.msg}`)); }
        say(outl.join("\n"));
        return st.active ? 0 : 3;
      }
    }
    err(`Unknown command verb '${sub}'.`);
    return 1;
  }
  function journalctl(world, a, say, err) {
    const s = world.session, M = s.M;
    if (s.user !== "root" && !groupsOf(M, s.user).some(g => ["adm", "systemd-journal"].includes(g))) { say(`Hint: You are currently not seeing messages from other users and the system.\n      Users in groups 'adm', 'systemd-journal' can see all messages.\n      Pass -q to turn off this notice.\n-- No entries --`); return 0; }
    const opt = k => { const i = a.indexOf(k); return i >= 0 ? a[i + 1] : null; };
    let list = M.journal.slice();
    const u = opt("-u");
    if (u) list = list.filter(j => j.unit === u.replace(/\.service$/, "") + ".service");
    const p = opt("-p");
    if (p) { const lv = { emerg: 0, alert: 1, crit: 2, err: 3, warning: 4, notice: 5, info: 6, debug: 7 }[p] ?? +p; list = list.filter(j => j.prio <= lv); }
    const g = opt("-g") || opt("--grep");
    if (g) list = list.filter(j => new RegExp(g, "i").test(j.msg));
    const n = opt("-n");
    if (n) list = list.slice(-+n);
    if (!list.length) { say("-- No entries --"); return 0; }
    list.forEach(j => say(`${jDate(j.t)} ${M.hostname} ${j.ident}${j.pid ? `[${j.pid}]` : ""}: ${j.msg}`));
    return 0;
  }

  // ---------- الشبكة ----------
  const HOSTS = { "8.8.8.8": { ttl: 117, ms: 12.4 }, "1.1.1.1": { ttl: 57, ms: 9.8 }, "google.com": { ip: "142.250.74.14", ttl: 117, ms: 14.2, rdns: "fra16s56-in-f14.1e100.net" }, "ubuntu.com": { ip: "185.125.190.20", ttl: 52, ms: 31.7 }, web01: { ip: "10.0.2.20", ttl: 64, ms: 0.4 }, "10.0.2.20": { ttl: 64, ms: 0.4 }, "10.0.2.2": { ttl: 64, ms: 0.3 }, localhost: { ip: "127.0.0.1", ttl: 64, ms: 0.03 }, "127.0.0.1": { ttl: 64, ms: 0.03 } };
  function ipCmd(world, a, say, err) {
    const M = world.session.M;
    const sub = a[0] || "";
    if (/^a(ddr(ess)?)?$/.test(sub) || (sub === "-br" && a[1] === "a")) {
      if (a.includes("-br")) { say(`lo               UNKNOWN        127.0.0.1/8 ::1/128 \neth0             UP             ${M.ip}/24 fe80::5054:ff:fe12:3456/64 `); return 0; }
      say(`1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000\n    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00\n    inet 127.0.0.1/8 scope host lo\n       valid_lft forever preferred_lft forever\n    inet6 ::1/128 scope host noprefixroute \n       valid_lft forever preferred_lft forever\n2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc fq_codel state UP group default qlen 1000\n    link/ether ${M.mac} brd ff:ff:ff:ff:ff:ff\n    inet ${M.ip}/24 metric 100 brd 10.0.2.255 scope global dynamic eth0\n       valid_lft 86124sec preferred_lft 86124sec\n    inet6 fe80::5054:ff:fe12:3456/64 scope link \n       valid_lft forever preferred_lft forever`);
      return 0;
    }
    if (/^r(oute)?$/.test(sub)) { say(`default via 10.0.2.2 dev eth0 proto dhcp src ${M.ip} metric 100 \n10.0.2.0/24 dev eth0 proto kernel scope link src ${M.ip} metric 100 \n10.0.2.2 dev eth0 proto dhcp scope link src ${M.ip} metric 100 `); return 0; }
    if (/^l(ink)?$/.test(sub)) { say(`1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN mode DEFAULT group default qlen 1000\n    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00\n2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc fq_codel state UP mode DEFAULT group default qlen 1000\n    link/ether ${M.mac} brd ff:ff:ff:ff:ff:ff`); return 0; }
    err(`Object "${sub}" is unknown, try "ip help".`);
    return 1;
  }
  function listening(M) {
    const out = [];
    Object.entries(M.services).forEach(([n, st]) => {
      if (!st.active) return;
      const d = SERVICES[n];
      if (n === "ssh") { const port = M.sshd().port; out.push({ proto: "tcp", addr: "0.0.0.0", port, proc: "sshd", pid: st.pid, fd: 3 }, { proto: "tcp", addr: "[::]", port, proc: "sshd", pid: st.pid, fd: 4 }); }
      else if (d && d.port) out.push({ proto: "tcp", addr: "0.0.0.0", port: d.port, proc: n, pid: st.pid, fd: 5 }, { proto: "tcp", addr: "[::]", port: d.port, proc: n, pid: st.pid, fd: 6 });
    });
    M.procs.filter(p => p.listen).forEach(p => out.push({ proto: p.listen.proto || "tcp", addr: p.listen.addr || "0.0.0.0", port: p.listen.port, proc: p.cmd.split(" ")[0].split("/").pop(), pid: p.pid, fd: 3 }));
    out.push({ proto: "udp", addr: "127.0.0.54", port: 53, proc: "systemd-resolve", pid: 640, fd: 16 }, { proto: "tcp", addr: "127.0.0.53%lo", port: 53, proc: "systemd-resolve", pid: 640, fd: 15 });
    return out;
  }
  function ss(world, a, say) {
    const M = world.session.M;
    const showProc = a.some(x => /p/.test(x)) && world.session.user === "root";
    const rows = listening(M).sort((x, y) => (x.proto > y.proto ? -1 : x.proto < y.proto ? 1 : 0) || x.port - y.port);
    const wantTcp = a.some(x => /t/.test(x)), wantUdp = a.some(x => /u/.test(x));
    const list = rows.filter(r => (r.proto === "tcp" && wantTcp) || (r.proto === "udp" && wantUdp) || (!wantTcp && !wantUdp));
    say("Netid State  Recv-Q Send-Q Local Address:Port  Peer Address:Port Process");
    list.forEach(r => { const local = `${r.addr}:${r.port}`; say(`${r.proto.padEnd(5)} ${(r.proto === "udp" ? "UNCONN" : "LISTEN").padEnd(6)} 0      ${r.proto === "udp" ? "0     " : "4096  "} ${local.padStart(19)} ${(r.addr.startsWith("[") ? "[::]:*" : "0.0.0.0:*").padStart(18)} ${showProc ? `users:(("${r.proc}",pid=${r.pid},fd=${r.fd}))` : ""}`.trimEnd()); });
    return 0;
  }
  function ping(world, a, say, err) {
    const ci = a.indexOf("-c");
    const count = ci >= 0 ? +a[ci + 1] : 4;
    const host = a.filter((x, i) => !x.startsWith("-") && !(ci >= 0 && i === ci + 1))[0];
    const h = HOSTS[host];
    if (!h) { err(/^\d+\.\d+\.\d+\.\d+$/.test(host) ? "" : `ping: ${host}: Temporary failure in name resolution`); if (/^\d+\.\d+\.\d+\.\d+$/.test(host)) { say(`PING ${host} (${host}) 56(84) bytes of data.\n\n--- ${host} ping statistics ---\n${count} packets transmitted, 0 received, 100% packet loss, time ${(count - 1) * 1000 + 30}ms`); } return host && /^\d/.test(host) ? 1 : 2; }
    const ip = h.ip || host;
    const label = h.rdns ? `${h.rdns} (${ip})` : host === ip ? ip : `${host} (${ip})`;
    const times = Array.from({ length: count }, (_, i) => +(h.ms * (1 + ((i * 7) % 5 - 2) / 40)).toFixed(h.ms < 1 ? 3 : 1));
    say(`PING ${host} (${ip}) 56(84) bytes of data.`);
    times.forEach((t, i) => say(`64 bytes from ${label}: icmp_seq=${i + 1} ttl=${h.ttl} time=${t} ms`));
    const mn = Math.min(...times), mx = Math.max(...times), avg = times.reduce((x, y) => x + y, 0) / times.length;
    const md = Math.sqrt(times.reduce((s2, t) => s2 + (t - avg) ** 2, 0) / times.length);
    say(`\n--- ${host} ping statistics ---\n${count} packets transmitted, ${count} received, 0% packet loss, time ${(count - 1) * 1001}ms\nrtt min/avg/max/mdev = ${mn.toFixed(3)}/${avg.toFixed(3)}/${mx.toFixed(3)}/${md.toFixed(3)} ms`);
    return 0;
  }
  function curl(world, a, say, err) {
    const M = world.session.M;
    const url = a.find(x => /^(https?:\/\/)?[\w.-]+(:\d+)?(\/.*)?$/.test(x) && !x.startsWith("-"));
    const m = /^(?:(https?):\/\/)?([\w.-]+)(?::(\d+))?(\/.*)?$/.exec(url || "");
    if (!m) { err("curl: try 'curl --help' or 'curl --manual' for more information"); return 2; }
    const [, scheme = "http", hostRaw, portRaw, path = "/"] = m;
    const port = +(portRaw || (scheme === "https" ? 443 : 80));
    const target = world.machines[hostRaw] || (hostRaw === M.hostname ? M : null);
    if (!target) {
      if (HOSTS[hostRaw]) { if (a.includes("-I")) say(`HTTP/2 200 \ncontent-type: text/html; charset=UTF-8\nserver: ${hostRaw === "google.com" ? "gws" : "nginx"}`); else say(`<!doctype html><html><head><title>${hostRaw}</title></head><body>...</body></html>`); return 0; }
      err(`curl: (6) Could not resolve host: ${hostRaw}`); return 6;
    }
    // الجدار الناري على الجهاز الهدف (إلا الاتصال بالنفس)
    if (target !== M && target.ufw.active && ufwDecide(target, port, M.ip) === "deny") { err(`curl: (28) Failed to connect to ${hostRaw} port ${port} after 130003 ms: Couldn't connect to server`); return 28; }
    const up = target.services.nginx && target.services.nginx.active && port === 80;
    if (!up) { err(`curl: (7) Failed to connect to ${hostRaw} port ${port} after 0 ms: Couldn't connect to server`); return 7; }
    const file = path === "/" ? (target.read("/var/www/html/index.html") != null ? "/var/www/html/index.html" : "/var/www/html/index.nginx-debian.html") : "/var/www/html" + path;
    const body = target.read(file);
    const al = target.find("/var/log/nginx/access.log");
    if (al) al.content += `${M.ip === target.ip ? "127.0.0.1" : M.ip} - - [08/Nov/2026:${hms(target.now)} +0000] "${a.includes("-I") ? "HEAD" : "GET"} ${path} HTTP/1.1" ${body == null ? 404 : 200} ${body == null ? 162 : body.length} "-" "curl/8.5.0"\n`;
    if (a.includes("-I")) { say(`HTTP/1.1 ${body == null ? "404 Not Found" : "200 OK"}\nServer: nginx/1.24.0 (Ubuntu)\nDate: ${DAY[new Date(target.now).getUTCDay()]}, ${pad(new Date(target.now).getUTCDate())} Nov 2026 ${hms(target.now)} GMT\nContent-Type: text/html\nContent-Length: ${body == null ? 162 : body.length}\nConnection: keep-alive`); return 0; }
    if (body == null) { say(`<html>\n<head><title>404 Not Found</title></head>\n<body>\n<center><h1>404 Not Found</h1></center>\n<hr><center>nginx/1.24.0 (Ubuntu)</center>\n</body>\n</html>`); return 0; }
    say(body.replace(/\n$/, ""));
    return 0;
  }
  function dns(world, cmd, pos, say, err) {
    const name = pos.find(x => !x.startsWith("+"));
    const h = HOSTS[name];
    const ip = h && h.ip;
    if (!ip) { err(cmd === "host" ? `Host ${name} not found: 3(NXDOMAIN)` : `** server can't find ${name}: NXDOMAIN`); return 1; }
    if (cmd === "host") say(`${name} has address ${ip}`);
    else if (cmd === "dig") say(pos.includes("+short") ? ip : `;; ANSWER SECTION:\n${name}.\t\t300\tIN\tA\t${ip}`);
    else say(`Server:\t\t127.0.0.53\nAddress:\t127.0.0.53#53\n\nNon-authoritative answer:\nName:\t${name}\nAddress: ${ip}`);
    return 0;
  }

  // ---------- SSH ----------
  function sshKeygen(world, a, say, err) {
    const s = world.session, M = s.M;
    const opt = k => { const i = a.indexOf(k); return i >= 0 ? a[i + 1] : null; };
    if (a.includes("-l")) { const f = opt("-f"); const c = readFile(world, f, "ssh-keygen", err); if (c === null) return 1; const [, , comment] = c.trim().split(" "); say(`256 SHA256:${b64(fakeBytes(c, 32)).replace(/=+$/, "").slice(0, 43)} ${comment} (ED25519)`); return 0; }
    const type = opt("-t") || "ed25519";
    if (!["ed25519", "rsa", "ecdsa"].includes(type)) { err(`unknown key type ${type}`); return 1; }
    const file = opt("-f") || `${s.env.HOME}/.ssh/id_${type}`;
    const comment = opt("-C") || `${s.user}@${M.hostname}`;
    const abs = resolve(world, file);
    const sshDir = abs.replace(/\/[^/]+$/, "");
    if (!M.find(sshDir)) { const r = lookup(world, sshDir.replace(/\/[^/]+$/, "")); const n = newNode(world, "d"); n.mode = 0o700; r.node.children[sshDir.split("/").pop()] = n; }
    if (M.find(abs)) { err(`${abs} already exists.\nOverwrite (y/n)? n`); return 1; }
    const bytes = fakeBytes(abs + comment + type, 32);
    const pubkey = `ssh-${type} AAAAC3NzaC1lZDI1NTE5AAAAI${b64(bytes).replace(/=+$/, "").slice(0, 43)} ${comment}`;
    writeFile(world, abs, `-----BEGIN OPENSSH PRIVATE KEY-----\n${b64(fakeBytes(abs, 48))}\n-----END OPENSSH PRIVATE KEY-----\n`, false, "ssh-keygen", err);
    writeFile(world, abs + ".pub", pubkey + "\n", false, "ssh-keygen", err);
    M.find(abs).mode = 0o600;
    M.find(abs + ".pub").mode = 0o644;
    const fp = b64(fakeBytes(pubkey, 32)).replace(/=+$/, "").slice(0, 43);
    const bits = type === "rsa" ? 3072 : 256;
    say(`Generating public/private ${type} key pair.${a.includes("-N") ? "" : `\nEnter passphrase for "${abs}" (empty for no passphrase): \nEnter same passphrase again: `}\nYour identification has been saved in ${abs}\nYour public key has been saved in ${abs}.pub\nThe key fingerprint is:\nSHA256:${fp} ${comment}\nThe key's randomart image is:\n${randomart(fakeBytes(fp, 32), `[${type.toUpperCase()} ${bits}]`)}`);
    return 0;
  }
  function parseDest(a) {
    const pI = a.indexOf("-p"), iI = a.indexOf("-i");
    const dest = a.find((x, i) => !x.startsWith("-") && i !== pI + 1 && i !== iI + 1 && (pI < 0 || i !== pI + 1));
    const [user, host] = dest.includes("@") ? dest.split("@") : [null, dest];
    return { user, host, port: pI >= 0 ? +a[pI + 1] : 22, identity: iI >= 0 ? a[iI + 1] : null, rest: a.slice(a.indexOf(dest) + 1) };
  }
  function sshCopyId(world, a, say, err) {
    const s = world.session;
    const d = parseDest(a);
    const user = d.user || s.user;
    const target = world.machines[d.host];
    const pubPath = d.identity ? resolve(world, d.identity.replace(/(\.pub)?$/, ".pub")) : ["id_ed25519", "id_ecdsa", "id_rsa"].map(k => `${s.env.HOME}/.ssh/${k}.pub`).find(p => s.M.find(p));
    if (!pubPath || !s.M.find(pubPath)) { err("/usr/bin/ssh-copy-id: ERROR: No identities found"); return 1; }
    if (!target) { err(`ssh: Could not resolve hostname ${d.host}: Temporary failure in name resolution`); return 1; }
    const say2 = `/usr/bin/ssh-copy-id: INFO: Source of key(s) to be installed: "${pubPath}"\n/usr/bin/ssh-copy-id: INFO: attempting to log in with the new key(s), to filter out any that are already installed\n/usr/bin/ssh-copy-id: INFO: 1 key(s) remain to be installed -- if you are prompted now it is to install the new keys`;
    const cfg = target.sshd();
    if (cfg.passwordAuthentication.toLowerCase() === "no") { say(say2); err(`${user}@${d.host}: Permission denied (publickey).`); return 1; }
    const pub = content(s.M.find(pubPath));
    const tu = userObj(target, user);
    if (!tu) { say(say2 + `\n${user}@${d.host}'s password: `); err("Permission denied, please try again."); return 1; }
    const sshDir = target.find(tu.home + "/.ssh") || target.mk(tu.home + "/.ssh", "d", 0o700, user, user);
    const ak = sshDir.children.authorized_keys || (sshDir.children.authorized_keys = Object.assign(node("f", 0o600, user, user), { mtime: target.now }));
    ak.content += pub;
    say(`${say2}\n${user}@${d.host}'s password: \n\nNumber of key(s) added: 1\n\nNow try logging into the machine, with: "ssh '${user}@${d.host}'"\nand check to make sure that only the key(s) you wanted were added.`);
    return 0;
  }
  function ssh(world, a, say, err) {
    const s = world.session;
    const d = parseDest(a);
    const user = d.user || s.user;
    const target = world.machines[d.host];
    if (!target) { err(`ssh: Could not resolve hostname ${d.host}: Temporary failure in name resolution`); return 255; }
    const cfg = target.sshd();
    if (!target.services.ssh || !target.services.ssh.active || cfg.port !== d.port) { err(`ssh: connect to host ${d.host} port ${d.port}: Connection refused`); return 255; }
    if (target.ufw.active && ufwDecide(target, d.port, s.M.ip) === "deny") { err(`ssh: connect to host ${d.host} port ${d.port}: Connection timed out`); return 255; }
    if (target.banned.has(s.M.ip)) { err(`ssh: connect to host ${d.host} port ${d.port}: Connection refused`); return 255; }
    const tu = userObj(target, user);
    const sshdPid = target.services.ssh.pid + 40;
    if (user === "root" && cfg.permitRootLogin.toLowerCase() === "no") { target.log("ssh.service", "sshd", sshdPid, `Failed publickey for root from ${s.M.ip} port 53412 ssh2`, { auth: true, prio: 5 }); err(`root@${d.host}: Permission denied (publickey${cfg.passwordAuthentication === "no" ? "" : ",password"}).`); return 255; }
    // المفتاح: أي مفتاح عام في ~/.ssh محلياً موجود في authorized_keys على الهدف
    const mine = ["id_ed25519", "id_ecdsa", "id_rsa"].map(k => s.M.read(`${s.env.HOME}/.ssh/${k}.pub`)).filter(Boolean);
    const ak = tu ? target.read(tu.home + "/.ssh/authorized_keys") || "" : "";
    const keyOk = tu && mine.some(k => ak.includes(k.trim()));
    if (!keyOk && cfg.passwordAuthentication.toLowerCase() === "no") {
      target.log("ssh.service", "sshd", sshdPid, tu ? `Connection closed by authenticating user ${user} ${s.M.ip} port 53412 [preauth]` : `Invalid user ${user} from ${s.M.ip} port 53412`, { auth: true, prio: 5 });
      err(`${user}@${d.host}: Permission denied (publickey).`); return 255;
    }
    if (!tu) { say(`${user}@${d.host}'s password: `); err("Permission denied, please try again."); target.log("ssh.service", "sshd", sshdPid, `Failed password for invalid user ${user} from ${s.M.ip} port 53412 ssh2`, { auth: true, prio: 5 }); return 255; }
    target.log("ssh.service", "sshd", sshdPid, keyOk ? `Accepted publickey for ${user} from ${s.M.ip} port 53412 ssh2: ED25519 SHA256:${b64(fakeBytes(mine[0] || "", 32)).replace(/=+$/, "").slice(0, 43)}` : `Accepted password for ${user} from ${s.M.ip} port 53412 ssh2`, { auth: true });
    if (!keyOk) say(`${user}@${d.host}'s password: `);
    if (d.rest.length) { const saved = world.session; world.session = { M: target, user, cwd: tu.home, env: Object.assign({}, saved.env, { HOME: tu.home, USER: user, PWD: tu.home }), status: 0, jobs: [], umask: 0o002 }; try { return command(world, d.rest, null, say, err); } finally { world.session = saved; } }
    say(`Welcome to Ubuntu 24.04.1 LTS (GNU/Linux 6.8.0-45-generic x86_64)\n\nLast login: ${DAY[new Date(BOOT).getUTCDay()]} ${lsDate(BOOT + 1205000)}:00 2026 from 10.0.2.2`);
    world.stack.push(s);
    world.session = { M: target, user, cwd: tu.home, env: Object.assign({}, s.env, { HOME: tu.home, USER: user, PWD: tu.home }), status: 0, jobs: [], umask: 0o002 };
    return 0;
  }

  // ---------- ufw ----------
  function ufwDecide(M, port, srcIp) {
    const ipIn = (ip, net) => { if (net === "Anywhere") return true; const [base, bits = 32] = net.split("/"); const toN = x => x.split(".").reduce((n, o) => n * 256 + +o, 0); const m = bits == 0 ? 0 : (~0 << (32 - bits)) >>> 0; return ((toN(ip) & m) >>> 0) === ((toN(base) & m) >>> 0); };
    const appPorts = { OpenSSH: [22], "Nginx HTTP": [80], "Nginx Full": [80, 443], "Nginx HTTPS": [443] };
    for (const r of M.ufw.rules.filter(r => !r.v6)) {
      const ports = appPorts[r.to] || [+r.to.split("/")[0]];
      if (ports.includes(port) && ipIn(srcIp, r.from)) return r.action.toLowerCase().startsWith("allow") ? "allow" : r.action.toLowerCase().startsWith("limit") ? "allow" : "deny";
    }
    return M.ufw.defIn === "allow" ? "allow" : "deny";
  }
  function ufw(world, a, say, err) {
    const s = world.session, M = s.M;
    if (s.user !== "root") { err("ERROR: You need to be root to run this script"); return 1; }
    const U = M.ufw;
    const args = a.filter(x => x !== "--force");
    const [sub, ...rest] = args;
    const addRule = (action, spec) => {
      let to, from = "Anywhere", v6 = true;
      const fi = spec.indexOf("from");
      if (fi >= 0) {
        from = spec[fi + 1]; v6 = false;
        const pi = spec.indexOf("port");
        const proto = spec.indexOf("proto") >= 0 ? spec[spec.indexOf("proto") + 1] : null;
        to = spec[pi + 1] + (proto ? "/" + proto : "");
      } else to = spec[0];
      if (!to) { err("ERROR: Invalid syntax"); return 1; }
      const exists = U.rules.find(r => r.to === to && r.from === from && r.action === action && !r.v6);
      if (exists) { say(`Skipping adding existing rule${v6 ? "\nSkipping adding existing rule (v6)" : ""}`); return 0; }
      U.rules.push({ to, action, from });
      if (v6 && !/^\d+\.\d+\.\d+\.\d+/.test(from)) U.rules.push({ to, action, from: "Anywhere", v6: true });
      say(v6 ? "Rules updated\nRules updated (v6)" : "Rule added");
      return 0;
    };
    switch (sub) {
      case "status": {
        if (!U.active) { say("Status: inactive"); return 0; }
        const verbose = rest.includes("verbose"), numbered = rest.includes("numbered");
        const lines = [`Status: active`];
        if (verbose) lines.push(`Logging: on (${U.logging})\nDefault: ${U.defIn} (incoming), ${U.defOut} (outgoing), disabled (routed)\nNew profiles: skip`);
        const rows = U.rules.slice().sort((x, y) => (x.v6 ? 1 : 0) - (y.v6 ? 1 : 0));
        if (rows.length) {
          lines.push("", numbered ? "     To                         Action      From" : "To                         Action      From", numbered ? "     --                         ------      ----" : "--                         ------      ----");
          rows.forEach((r, i) => { const to = r.to + (r.v6 ? " (v6)" : ""); const act = (r.action + (numbered || verbose ? " IN" : "")); const from = r.from + (r.v6 ? " (v6)" : ""); lines.push(`${numbered ? `[${String(i + 1).padStart(2)}] ` : ""}${to.padEnd(27)}${act.padEnd(12)}${from}`); });
        }
        say(lines.join("\n") + (rows.length ? "\n" : ""));
        return 0;
      }
      case "enable": U.active = true; say(a.includes("--force") ? "Firewall is active and enabled on system startup" : "Command may disrupt existing ssh connections. Proceed with operation (y|n)? y\nFirewall is active and enabled on system startup"); return 0;
      case "disable": U.active = false; say("Firewall stopped and disabled on system startup"); return 0;
      case "default": { const [pol, dir] = rest; if (dir === "incoming") U.defIn = pol; else U.defOut = pol; say(`Default ${dir} policy changed to '${pol}'\n(be sure to update your rules accordingly)`); return 0; }
      case "allow": return addRule("ALLOW", rest);
      case "deny": return addRule("DENY", rest);
      case "reject": return addRule("REJECT", rest);
      case "limit": return addRule("LIMIT", rest);
      case "delete": {
        if (/^\d+$/.test(rest[0])) {
          const rows = U.rules.slice().sort((x, y) => (x.v6 ? 1 : 0) - (y.v6 ? 1 : 0));
          const r = rows[+rest[0] - 1];
          if (!r) { err("ERROR: Could not find rule '" + rest[0] + "'"); return 1; }
          say(`Deleting:\n ${r.action.toLowerCase()} ${r.from === "Anywhere" ? r.to : `from ${r.from} to any port ${r.to}`}${r.v6 ? " (v6)" : ""}\nProceed with operation (y|n)? y\nRule deleted${r.v6 ? " (v6)" : ""}`);
          U.rules = U.rules.filter(x => x !== r);
          return 0;
        }
        const [action, ...spec] = rest;
        const to = spec.indexOf("port") >= 0 ? spec[spec.indexOf("port") + 1] : spec[0];
        const before = U.rules.length;
        U.rules = U.rules.filter(r => !(r.action === action.toUpperCase() && r.to === to));
        if (U.rules.length === before) { err("Could not delete non-existent rule"); return 1; }
        say(before - U.rules.length > 1 ? "Rule deleted\nRule deleted (v6)" : "Rule deleted");
        return 0;
      }
      case "logging": U.logging = rest[0] === "on" ? "low" : rest[0]; say(`Logging ${rest[0] === "off" ? "disabled" : "enabled"}`); return 0;
      case "app": if (rest[0] === "list") { say("Available applications:\n  OpenSSH" + (M.packages.has("nginx") ? "\n  Nginx Full\n  Nginx HTTP\n  Nginx HTTPS" : "")); return 0; } break;
      case "reset": U.rules = []; U.active = false; say("Resetting all rules to installed defaults. Proceed with operation (y|n)? y"); return 0;
    }
    err(`ERROR: Invalid syntax\n\nUsage: ufw COMMAND`);
    return 1;
  }
  function fail2ban(world, a, say, err) {
    const s = world.session, M = s.M;
    if (!M.packages.has("fail2ban")) { err("fail2ban-client: command not found"); return 127; }
    if (s.user !== "root") { err("ERROR  Permission denied to socket: /var/run/fail2ban/fail2ban.sock, (you must be root)"); return 255; }
    // يحسب المحظورين من محاولات الدخول الفاشلة في auth.log
    const log = M.read("/var/log/auth.log");
    const maxretry = 5;
    const counts = {};
    (log.match(/Failed password .* from (\S+)/g) || []).forEach(l => { const ip = l.split(" from ")[1].split(" ")[0]; counts[ip] = (counts[ip] || 0) + 1; });
    const banned = Object.keys(counts).filter(ip => counts[ip] >= maxretry);
    banned.forEach(ip => M.banned.add(ip));
    if (a[0] === "status" && a[1] === "sshd") { const failed = Object.values(counts).reduce((x, y) => x + y, 0); say(`Status for the jail: sshd\n|- Filter\n|  |- Currently failed:\t${Object.keys(counts).filter(ip => counts[ip] < maxretry).length}\n|  |- Total failed:\t${failed}\n|  \`- File list:\t/var/log/auth.log\n\`- Actions\n   |- Currently banned:\t${banned.length}\n   |- Total banned:\t${banned.length}\n   \`- Banned IP list:\t${banned.join(" ")}`); return 0; }
    if (a[0] === "status") { say("Status\n|- Number of jail:\t1\n`- Jail list:\tsshd"); return 0; }
    if (a[0] === "set" && a[2] === "unbanip") { M.banned.delete(a[3]); say("1"); return 0; }
    return 0;
  }

  // ---------- تعليمات الإعداد المخفية (@) ----------
  function directive(world, line, say) {
    const M = world.session.M;
    const [d, ...r] = line.split(/\s+/);
    switch (d) {
      case "@as": { const u = r[0]; world.session.user = u; const o = userObj(M, u); world.session.cwd = o ? o.home : "/"; world.session.env.HOME = o ? o.home : "/"; world.session.env.USER = u; return; }
      case "@file": { const [path, mode, owner, ...txt] = r; const [o, g] = owner.split(":"); M.mk(path, "f", parseInt(mode, 8), o, g || o, txt.join(" ").replace(/\\n/g, "\n")); return; }
      case "@dir": { const [path, mode, owner] = r; const [o, g] = owner.split(":"); M.mk(path, "d", parseInt(mode, 8), o, g || o); return; }
      case "@proc": { const [user, cpu, mem, ...cmd] = r; const p = M.proc(user, cmd.join(" "), { cpu: +cpu, mem: +mem, stat: +cpu > 1 ? "R" : "S", vsz: 2457000, rss: Math.round(+mem * 40000) }); if (/listen=(\d+)/.test(line)) { p.listen = { port: +/listen=(\d+)/.exec(line)[1] }; p.cmd = p.cmd.replace(/\s*listen=\d+/, ""); } return; }
      case "@authfail": { const [ip, n, user = "root"] = r; for (let i = 0; i < +n; i++) M.log("ssh.service", "sshd", 3000 + i, user === "root" ? `Failed password for root from ${ip} port ${40000 + i} ssh2` : `Failed password for invalid user ${user} from ${ip} port ${40000 + i} ssh2`, { auth: true, prio: 5 }); return; }
      case "@check": {
        // @check port 22 from 1.2.3.4 ← قرار الجدار الناري
        if (r[0] === "port") { say(`port ${r[1]} from ${r[3]}: ${M.ufw.active ? ufwDecide(M, +r[1], r[3]).toUpperCase() : "ALLOW (ufw inactive)"}`); return; }
        if (r[0] === "perm") { const n = M.find(r[1]); say(n ? `${r[1]} ${octal(n.mode)} ${n.owner}:${n.group}` : `${r[1]} missing`); return; }
        if (r[0] === "user") { const u = userObj(M, r[1]); say(u ? `${u.name} uid=${u.uid} shell=${u.shell} home=${M.find(u.home) ? u.home : "none"} groups=${groupsOf(M, u.name).join(",")} locked=${u.pass.startsWith("!")}` : `${r[1]} missing`); return; }
        if (r[0] === "service") { const st = M.services[r[1]]; say(`${r[1]}: ${st && st.active ? "active" : st && st.failed ? "failed" : "inactive"} ${st && st.enabled ? "enabled" : "disabled"}`); return; }
        if (r[0] === "proc") { const hits = M.procs.filter(p => p.cmd.includes(r.slice(1).join(" "))); say(`processes matching "${r.slice(1).join(" ")}": ${hits.length}`); return; }
        if (r[0] === "pkg") { say(`${r[1]}: ${M.packages.has(r[1]) ? "installed" : "not installed"}`); return; }
        if (r[0] === "sshd") { const c = M.sshd(); say(`PermitRootLogin=${c.permitRootLogin} PasswordAuthentication=${c.passwordAuthentication} Port=${c.port}`); return; }
        if (r[0] === "file") { say(M.read(r[1]) ?? `${r[1]} missing`); return; }
        return;
      }
    }
  }

  CW.linuxSim = {
    world: createWorld,
    run: (world, script, out) => { run(world, script, out); return Promise.resolve(); },
    text: out => out.map(l => (l.kind === "err" ? "ERR: " : "") + l.text).join("\n"),
    // setup (مخفي) ثم كود الطالب ثم test (مخفي، ومخرجاته هي التي تُصحَّح)
    exec: async (code, setup, test) => {
      const world = createWorld();
      if (setup) run(world, setup, []);
      const shown = [];
      run(world, code, shown);
      const graded = [];
      if (test) {
        // الفحص يعمل دائماً من الجهاز المحلي بصلاحيات المدير
        if (world.stack.length) { world.session = world.stack[0]; world.stack = []; }
        run(world, test, graded);
      }
      return { shown, graded: graded.filter(l => l.kind !== "cmd"), world };
    }
  };
})(typeof window !== "undefined" ? window : globalThis);
