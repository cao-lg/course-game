#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
为data.js中其他任务也添加PDF引用
- 2.2 (波特五力)、2.3 (SWOT) → 任务四 PDF
- 3.1-3.3 (市场调研) → 任务三 PDF
- 4.1-4.3 (目标市场) → 任务五 PDF
"""
import re

# 读取data.js
with open('/workspace/js/data.js', 'r', encoding='utf-8') as f:
    content = f.read()

# 补充PDF映射
pdf_extra_map = {
    "2.2": "assets/教材/《金融产品营销实务》（第三版）项目一任务四.pdf",
    "2.3": "assets/教材/《金融产品营销实务》（第三版）项目一任务四.pdf",
    "3.1": "assets/教材/《金融产品营销实务》（第三版）项目一任务三.pdf",
    "3.2": "assets/教材/《金融产品营销实务》（第三版）项目一任务三.pdf",
    "3.3": "assets/教材/《金融产品营销实务》（第三版）项目一任务三.pdf",
    "4.1": "assets/教材/《金融产品营销实务》（第三版）项目一任务五.pdf",
    "4.2": "assets/教材/《金融产品营销实务》（第三版）项目一任务五.pdf",
    "4.3": "assets/教材/《金融产品营销实务》（第三版）项目一任务五.pdf",
}

# 为每个任务添加pdf字段（仅在还没有pdf字段的任务上添加）
for task_id, pdf_path in pdf_extra_map.items():
    # 查找对应的id: X.X 块
    pattern = rf'(id: {task_id.replace(".", r"\.")},[\s\S]*?description: ")([^"]*)(",\s+)(?!pdf:)'
    match = re.search(pattern, content)
    if match:
        new_text = f'{match.group(1)}{match.group(2)}",\n                pdf: "{pdf_path}",\n                '
        content = content[:match.start()] + new_text + content[match.end():]
        print(f"已为任务 {task_id} 添加PDF引用: {pdf_path}")
    else:
        print(f"未找到任务 {task_id} 或已有pdf字段")

# 保存更新后的data.js
with open('/workspace/js/data.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("\n完成！")
