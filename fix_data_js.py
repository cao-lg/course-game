#!/usr/bin/env python3
# 修复data.js格式问题

with open('/workspace/js/data.js', 'r', encoding='utf-8') as f:
    content = f.read()

# 修复重复的注释
content = content.replace('// 关卡数据\n// 关卡数据', '// 关卡数据')

# 修复多余的开头括号
content = content.replace('const levelsData = [\n[', 'const levelsData = [')

# 写回文件
with open('/workspace/js/data.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("data.js 修复完成！")
