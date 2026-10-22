#!/usr/bin/env python3
"""يحوّل ملفات الدروس المكتوبة في content/<course>/*.md إلى js/content/<course>.js

صيغة ملف الوحدة (ملف لكل وحدة، مرتبة بالاسم m1.md, m2.md ...):

    === lesson
    شرح الدرس بصيغة Markdown (عناوين ## و ###، فقرات، قوائم، جداول،
    كتل كود ```js، وتنبيهات تبدأ بـ > 💡 أو > ⚠️)

    --- exercise
    نص التمرين
    ~~~starter        الكود الذي يبدأ به الطالب
    ~~~expected       المخرجات المتوقعة من console.log (سطراً بسطر)
    ~~~solution       الحل النموذجي
    ~~~html           (اختياري) صفحة HTML يعمل عليها الكود في دروس DOM
    ~~~setup          (اختياري، SQL) جداول خاصة بهذا التمرين بدل قاعدة الدورة المشتركة

إعدادات الدورة في content/<course>/course.json، مثلاً:
    {"runner": "sql", "setup": "setup.sql"}   أو   {"runner": "dart"}

    --- quiz
    ? السؤال
    - خيار خاطئ
    + خيار صحيح
    > شرح الإجابة

الاستخدام:  python3 tools/build.py javascript
"""
import html
import json
import re
import sqlite3
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent


# ---------- Markdown مبسّط ----------
def inline(text):
    parts = re.split(r"(`[^`]+`)", text)
    out = []
    for p in parts:
        if p.startswith("`") and p.endswith("`") and len(p) > 1:
            out.append('<code dir="ltr">' + html.escape(p[1:-1]) + "</code>")
        else:
            p = html.escape(p)
            p = re.sub(r"\*\*(.+?)\*\*", r"<strong>\1</strong>", p)
            out.append(p)
    return "".join(out)


def sql_result_html(text):
    """نتيجة استعلام SQL (أعمدة مفصولة بـ " | " ونتائج يفصلها سطر فارغ) كجداول HTML"""
    tables = []
    # رسائل الخطأ المقصودة في الأمثلة تُعرض كتنبيه وليس كجدول
    errors = [l[5:] for l in text.strip().split("\n") if l.startswith("ERR: ")]
    text = "\n".join(l for l in text.strip().split("\n") if not l.startswith("ERR: "))
    for chunk in re.split(r"\n\s*\n", text.strip()) if text.strip() else []:
        rows = [r.split(" | ") for r in chunk.split("\n")]
        head = "".join(f"<th>{html.escape(c)}</th>" for c in rows[0])
        body = "".join("<tr>" + "".join(f'<td class="{"null" if c == "NULL" else ""}">{html.escape(c)}</td>' for c in r) + "</tr>" for r in rows[1:])
        if not rows[1:]:
            body = f'<tr><td colspan="{len(rows[0])}" class="null">(لا توجد صفوف)</td></tr>'
        tables.append(f'<table class="res-table"><thead><tr>{head}</tr></thead><tbody>{body}</tbody></table>')
    return "".join(tables) + "".join(f'<div class="sql-err" dir="ltr">⚠️ {html.escape(e)}</div>' for e in errors)


def markdown(src):
    lines = src.strip("\n").split("\n")
    out, i = [], 0
    prev_lang = None
    while i < len(lines):
        line = lines[i]
        if line.startswith("```"):
            lang = line[3:].strip() or "text"
            i += 1
            code = []
            while i < len(lines) and not lines[i].startswith("```"):
                code.append(lines[i])
                i += 1
            i += 1
            label = {"js": "JavaScript", "html": "HTML", "css": "CSS", "text": "المخرجات", "output": "المخرجات", "js-error": "JavaScript",
                     "sql": "SQL", "sql-error": "SQL", "dart": "Dart", "dart-error": "Dart",
                     "ts": "TypeScript", "ts-error": "TypeScript", "kotlin": "Kotlin", "kotlin-error": "Kotlin"}.get(lang, lang)
            cls = "out" if lang in ("text", "output") else "src"
            if lang == "output" and prev_lang == "sql":
                out.append(f'<div class="code-block out sql-out"><span class="code-label">النتيجة</span><div class="table-wrap">{sql_result_html(chr(10).join(code))}</div></div>')
                prev_lang = lang
                continue
            # أخطاء مقصودة في المخرجات (مثل أخطاء الأنواع) تُعرض كتنبيه تحت الكود
            if lang == "output" and any(l.startswith("ERR: ") for l in code):
                ok = [l for l in code if not l.startswith("ERR: ")]
                errs = [e.strip() for l in code if l.startswith("ERR: ") for e in l[5:].split(" | ")]
                body = f'<pre dir="ltr"><code>{html.escape(chr(10).join(ok))}</code></pre>' if ok else ""
                err_html = "".join(f'<div class="sql-err" dir="ltr">⚠️ {html.escape(e)}</div>' for e in errs)
                out.append(f'<div class="code-block out"><span class="code-label">{label}</span>{body}<div class="out-errs">{err_html}</div></div>')
                prev_lang = lang
                continue
            prev_lang = lang
            out.append(f'<div class="code-block {cls}"><span class="code-label">{label}</span><pre dir="ltr"><code>{html.escape(chr(10).join(code))}</code></pre></div>')
        elif line.startswith("### "):
            out.append(f"<h3>{inline(line[4:])}</h3>")
            i += 1
        elif line.startswith("## "):
            out.append(f"<h2>{inline(line[3:])}</h2>")
            i += 1
        elif line.startswith(">"):
            block = []
            while i < len(lines) and lines[i].startswith(">"):
                block.append(lines[i][1:].strip())
                i += 1
            text = " ".join(block)
            kind = "warn" if text.startswith("⚠️") else "tip"
            out.append(f'<div class="callout {kind}">{inline(text)}</div>')
        elif line.startswith("|"):
            rows = []
            while i < len(lines) and lines[i].startswith("|"):
                row = lines[i].strip().strip("|").replace("\\|", "\x00")
                cells = [c.strip().replace("\x00", "|") for c in row.split("|")]
                if not all(re.fullmatch(r":?-+:?", c) for c in cells):
                    rows.append(cells)
                i += 1
            head = "".join(f"<th>{inline(c)}</th>" for c in rows[0])
            body = "".join("<tr>" + "".join(f"<td>{inline(c)}</td>" for c in r) + "</tr>" for r in rows[1:])
            out.append(f'<div class="table-wrap"><table><thead><tr>{head}</tr></thead><tbody>{body}</tbody></table></div>')
        elif re.match(r"^(- |\d+\. )", line):
            ordered = bool(re.match(r"^\d+\. ", line))
            items = []
            while i < len(lines) and re.match(r"^(- |\d+\. )", lines[i]):
                items.append(re.sub(r"^(- |\d+\. )", "", lines[i]))
                i += 1
            tag = "ol" if ordered else "ul"
            out.append(f"<{tag}>" + "".join(f"<li>{inline(x)}</li>" for x in items) + f"</{tag}>")
        elif not line.strip():
            i += 1
        else:
            para = []
            while i < len(lines) and lines[i].strip() and not re.match(r"^(```|#|>|\||- |\d+\. )", lines[i]):
                para.append(lines[i])
                i += 1
            out.append(f"<p>{inline(' '.join(para))}</p>")
    return "\n".join(out)


# ---------- تحليل الدروس ----------
def parse_blocks(text):
    blocks, rest = {}, []
    lines = text.split("\n")
    i = 0
    while i < len(lines):
        m = re.match(r"^~~~(\w+)\s*$", lines[i])
        if m:
            name, buf = m.group(1), []
            i += 1
            while i < len(lines) and lines[i].strip() != "~~~":
                buf.append(lines[i])
                i += 1
            blocks[name] = "\n".join(buf).strip("\n")
        else:
            rest.append(lines[i])
        i += 1
    return blocks, "\n".join(rest)


def parse_quiz(text):
    qs = []
    for line in text.strip().split("\n"):
        line = line.rstrip()
        if line.startswith("? "):
            qs.append({"q": inline(line[2:]), "o": [], "a": -1, "why": ""})
        elif line.startswith(("- ", "+ ")):
            if line.startswith("+ "):
                qs[-1]["a"] = len(qs[-1]["o"])
            qs[-1]["o"].append(inline(line[2:]))
        elif line.startswith("> "):
            qs[-1]["why"] = inline(line[2:])
    for q in qs:
        assert q["a"] >= 0 and len(q["o"]) >= 2, f"سؤال بلا إجابة صحيحة: {q['q']}"
    return qs


def schema_html(setup):
    """وصف جداول قاعدة البيانات (الأعمدة وعدد الصفوف) ليراه الطالب في تمارين SQL"""
    db = sqlite3.connect(":memory:")
    db.executescript(setup)
    parts = []
    tables = [r[0] for r in db.execute("SELECT name FROM sqlite_master WHERE type='table' ORDER BY rowid")]
    for t in tables:
        cols = db.execute(f'PRAGMA table_info("{t}")').fetchall()
        count = db.execute(f'SELECT COUNT(*) FROM "{t}"').fetchone()[0]
        cols_txt = ", ".join(html.escape(c[1]) + (" 🔑" if c[5] else "") for c in cols)
        parts.append(f'<div class="schema-table"><code dir="ltr"><b>{html.escape(t)}</b> ({cols_txt})</code> <span class="muted">· {count} صفوف</span></div>')
    db.close()
    return "".join(parts)


def parse_lesson(src):
    parts = re.split(r"^--- (exercise|quiz)\s*$", src, flags=re.M)
    lesson = {"body": markdown(parts[0])}
    for kind, text in zip(parts[1::2], parts[2::2]):
        if kind == "exercise":
            blocks, prompt = parse_blocks(text)
            for key in ("starter", "expected", "solution"):
                assert key in blocks, f"التمرين ينقصه ~~~{key}"
            lesson["exercise"] = {"prompt": markdown(prompt), **blocks}
            if "setup" in blocks:
                lesson["exercise"]["schema"] = schema_html(blocks["setup"])
        else:
            lesson["quiz"] = parse_quiz(text)
    return lesson


def build(course):
    src_dir = ROOT / "content" / course
    files = sorted(src_dir.glob("m*.md"), key=lambda p: int(re.findall(r"\d+", p.stem)[0]))
    modules = []
    for f in files:
        text = f.read_text(encoding="utf-8")
        lessons = [parse_lesson(chunk) for chunk in re.split(r"^=== lesson\s*$", text, flags=re.M)[1:]]
        modules.append(lessons)
    out = ROOT / "js" / "content" / f"{course}.js"
    out.parent.mkdir(parents=True, exist_ok=True)
    payload = json.dumps(modules, ensure_ascii=False, indent=1)
    # إعدادات الدورة: نوع المشغّل (js أو sql أو dart) وقاعدة البيانات المشتركة لتمارين SQL
    meta = {"runner": "js"}
    cfg = src_dir / "course.json"
    if cfg.exists():
        meta.update(json.loads(cfg.read_text(encoding="utf-8")))
    if "setup" in meta:
        meta["setup"] = (src_dir / meta["setup"]).read_text(encoding="utf-8")
        meta["schema"] = schema_html(meta["setup"])
    meta_json = json.dumps(meta, ensure_ascii=False)
    out.write_text(f"// ملف مولَّد من content/{course} عبر tools/build.py، لا تعدّله يدوياً\nCW.registerContent({json.dumps(course)}, {payload}, {meta_json});\n", encoding="utf-8")
    total = sum(len(m) for m in modules)
    print(f"{course}: {len(modules)} وحدات، {total} درساً → {out.relative_to(ROOT)}")


if __name__ == "__main__":
    for c in sys.argv[1:] or ["javascript"]:
        build(c)
