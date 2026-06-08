#!/usr/bin/env python3

with open('/workspace/js/data.js', 'r', encoding='utf-8') as f:
    lines = f.readlines()

# 找到第908行并修复
for i, line in enumerate(lines):
    if i == 907:  # 第908行
        lines[i] = '];\n'

# 找到第907行并修复 (如果是双行问题)
if len(lines) > 906 and lines[906].strip() == ']':
    lines[906] = ''

with open('/workspace/js/data.js', 'w', encoding='utf-8') as f:
    f.writelines(lines)

print("修复完成")
