#!/usr/bin/env python3

with open('/workspace/js/data.js', 'r', encoding='utf-8') as f:
    content = f.read()

# 修复多余的括号和分号
content = content.replace(']\n]\;\;', '];')

with open('/workspace/js/data.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("修复完成")
