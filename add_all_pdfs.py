#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
为项目二到项目九的子任务添加PDF引用
"""
import json
import re
import os

# 读取data.js
with open('/workspace/js/data.js', 'r', encoding='utf-8') as f:
    content = f.read()

# 找到数组内容
start = content.find('[')
end = content.rfind('];') + 1
data_json = content[start:end]

# 解析JSON
data = json.loads(data_json)
print(f"项目数: {len(data)}")

# 为项目2-9的每个子任务添加PDF引用
pdf_patterns = {}  # 用于检查可用PDF
for level in data:
    major_id = level['id']
    if major_id == 1:
        continue  # 项目一已处理
    for sub in level.get('subLevels', []):
        sub_id_str = str(sub['id'])  # "2.1", "2.2", etc
        sub_num = int(sub_id_str.split('.')[1])
        # 查找PDF文件
        # 项目二子任务: 2.1 → 项目二任务一
        # 项目三子任务: 3.1 → 项目三任务一
        # 等等
        chinese_map = {
            2: "项目二", 3: "项目三", 4: "项目四", 5: "项目五",
            6: "项目六", 7: "项目七", 8: "项目八", 9: "项目九"
        }
        cn = chinese_map.get(major_id)
        if not cn:
            continue

        # PDF文件名有多种格式:
        # "《金融产品营销实务》第三版项目二任务一.pdf" (项目二-九部分)
        # "《金融产品营销实务》（第三版）项目一任务一.pdf" (项目一部分)
        pdf_candidates = [
            f"assets/教材/《金融产品营销实务》第三版{cn}任务{sub_num}.pdf",
            f"assets/教材/《金融产品营销实务》（第三版）{cn}任务{sub_num}.pdf",
        ]
        found = False
        for pdf_path in pdf_candidates:
            if os.path.exists(f"/workspace/{pdf_path}"):
                sub['pdf'] = pdf_path
                found = True
                break
        if not found:
            # 尝试其他命名格式
            for ext in ['.pdf']:
                pass

        # 如果sub已经有pdf（来自extracted_data.json），保留它
        if 'pdf' in sub and os.path.exists(f"/workspace/{sub['pdf']}"):
            continue

# 保存
new_data_js = "const levelsData = " + json.dumps(data, ensure_ascii=False, indent=4) + ";\n"
with open('/workspace/js/data.js', 'w', encoding='utf-8') as f:
    f.write(new_data_js)

# 检查结果
pdf_count = 0
total = 0
for level in data:
    for sub in level.get('subLevels', []):
        total += 1
        if 'pdf' in sub:
            pdf_count += 1
print(f"\n有PDF的子任务: {pdf_count}/{total}")
