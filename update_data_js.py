#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""更新data.js文件"""

import json

# 读取提取的数据
with open('/workspace/extracted_data.json', 'r', encoding='utf-8') as f:
    new_data = json.load(f)

# 生成JavaScript代码
js_code = '''// 关卡数据 - 项目二到项目九（从PDF教材提取）
const textbookLevelsData = ''' + json.dumps(new_data, ensure_ascii=False, indent=4) + ''';
'''

# 追加到data.js
with open('/workspace/js/data.js', 'r', encoding='utf-8') as f:
    content = f.read()

# 找到第一个levelsData的位置并替换
import re

# 在文件开头添加注释和新的数据
js_header = '''// 关卡数据
const levelsData = [
'''

# 找到原levelsData定义的结束位置
match = re.search(r'const levelsData = \[', content)
if match:
    start_pos = match.start()
    # 找到levelsData数组的结束位置（通过括号匹配）
    bracket_count = 0
    started = False
    end_pos = start_pos
    
    for i, char in enumerate(content[start_pos:]):
        if char == '[':
            bracket_count += 1
            started = True
        elif char == ']':
            bracket_count -= 1
        
        if started and bracket_count == 0:
            end_pos = start_pos + i + 1
            break
    
    # 替换原levelsData
    new_content = content[:start_pos] + js_header + json.dumps(new_data, ensure_ascii=False, indent=4) + '\n];' + content[end_pos:]
    
    # 写回文件
    with open('/workspace/js/data.js', 'w', encoding='utf-8') as f:
        f.write(new_content)
    
    print("data.js 更新成功！")
else:
    print("未找到levelsData定义")
