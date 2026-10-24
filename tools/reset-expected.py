#!/usr/bin/env python3
"""يعيد كل ~~~expected في دورة إلى "?" لتُحسب من جديد بـ verify.js --fill (بعد تعديل المحاكي مثلاً)"""
import re, sys
from pathlib import Path
for f in sorted((Path(__file__).resolve().parent.parent / "content" / sys.argv[1]).glob("m*.md")):
    t = f.read_text(encoding="utf-8")
    n = re.sub(r"^~~~expected\n[\s\S]*?^~~~[ \t]*$", "~~~expected\n?\n~~~", t, flags=re.M)
    if n != t:
        f.write_text(n, encoding="utf-8")
        print("reset", f.name)
