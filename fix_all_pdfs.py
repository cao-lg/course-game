#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
为项目二到项目九的子任务添加正确的PDF引用
PDF文件名使用中文数字（一、二、三...）
"""
import json
import os

# 读取data.js
with open('/workspace/js/data.js', 'r', encoding='utf-8') as f:
    content = f.read()

start = content.find('[')
end = content.rfind('];') + 1
data = json.loads(content[start:end])

# 中数字映射
cn_num = {
    1: "一", 2: "二", 3: "三", 4: "四", 5: "五",
    6: "六", 7: "七", 8: "八", 9: "九"
}

# 中项目名
chinese_project = {
    2: "项目二", 3: "项目三", 4: "项目四", 5: "项目五",
    6: "项目六", 7: "项目七", 8: "项目八", 9: "项目九"
}

# 为项目2-9的子任务添加PDF引用
for level in data:
    major_id = level['id']
    if major_id == 1:
        continue

    for sub in level.get('subLevels', []):
        sub_id_str = str(sub['id'])
        sub_num = int(sub_id_str.split('.')[1])
        cn_major = chinese_project.get(major_id)
        if not cn_major:
            continue

        # PDF文件名格式: 《金融产品营销实务》第三版{cn_major}任务{cn_sub}.pdf
        cn_sub = cn_num.get(sub_num, str(sub_num))

        # 尝试不同的PDF路径
        pdf_candidates = [
            f"assets/教材/《金融产品营销实务》第三版{cn_major}任务{cn_sub}.pdf",
            f"assets/教材/《金融产品营销实务》（第三版）{cn_major}任务{cn_sub}.pdf",
        ]

        found_pdf = None
        for pdf_path in pdf_candidates:
            full_path = f"/workspace/{pdf_path}"
            if os.path.exists(full_path):
                found_pdf = pdf_path
                break

        if found_pdf:
            sub['pdf'] = found_pdf
        else:
            print(f"未找到PDF: 项目{major_id} 子任务{sub_num}")

# 保存
new_data_js = "const levelsData = " + json.dumps(data, ensure_ascii=False, indent=4) + ";\n"
with open('/workspace/js/data.js', 'w', encoding='utf-8') as f:
    f.write(new_data_js)

# 统计
pdf_count = 0
total = 0
missing = []
for level in data:
    for sub in level.get('subLevels', []):
        total += 1
        if 'pdf' in sub and os.path.exists(f"/workspace/{sub['pdf']}"):
            pdf_count += 1
        else:
            missing.append(f"项目{level['id']} 子任务{sub['id']}")

print(f"\n有PDF的子任务: {pdf_count}/{total}")
if missing:
    print(f"缺少PDF的任务: {missing}")
