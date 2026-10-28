#!/usr/bin/env python3
"""يعيد كل كتل ```output و ~~~expected في ملفات دورة إلى "?" لإعادة ملئها بـ verify.js --fill
الاستخدام: python3 tools/reset-outputs.py <course> [m1.md ...]"""
import re, sys, pathlib
course, files = sys.argv[1], sys.argv[2:]
d = pathlib.Path(__file__).resolve().parent.parent / "content" / course
for p in sorted(d.glob("m*.md")):
    if files and p.name not in files:
        continue
    s = p.read_text(encoding="utf-8")
    s = re.sub(r"^```output\n.*?^```[ \t]*$", "```output\n?\n```", s, flags=re.S | re.M)
    s = re.sub(r"^~~~expected\n.*?^~~~[ \t]*$", "~~~expected\n?\n~~~", s, flags=re.S | re.M)
    p.write_text(s, encoding="utf-8")
