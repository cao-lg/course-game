#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
为data.js中项目一每个小任务添加pdf字段
根据PDF文件名和任务内容对应：
- 项目一任务一.pdf → 1.1 金融与金融机构认知 (任务一)
- 项目一任务二.pdf → 1.2 金融产品的层次与特征 (任务一)
- 项目一任务三.pdf → 1.3 金融产品营销基础 (任务一)
- 项目一任务四.pdf → 2.1 PESTEL宏观分析 (任务二)
- 项目一任务五.pdf → 5.1-5.4 4P策略 (任务五)
- 项目一任务六.pdf → 6.1-6.2 营销方案策划 (任务六)
"""
import re

# 读取data.js
with open('/workspace/js/data.js', 'r', encoding='utf-8') as f:
    content = f.read()

# PDF映射 - data.js中的id → PDF路径
pdf_map = {
    "1.1": "assets/教材/《金融产品营销实务》（第三版）项目一任务一.pdf",
    "1.2": "assets/教材/《金融产品营销实务》（第三版）项目一任务二.pdf",
    "1.3": "assets/教材/《金融产品营销实务》（第三版）项目一任务三.pdf",
    "2.1": "assets/教材/《金融产品营销实务》（第三版）项目一任务四.pdf",  # PESTEL
    "5.1": "assets/教材/《金融产品营销实务》（第三版）项目一任务五.pdf",  # 4P策略
    "5.2": "assets/教材/《金融产品营销实务》（第三版）项目一任务五.pdf",
    "5.3": "assets/教材/《金融产品营销实务》（第三版）项目一任务五.pdf",
    "5.4": "assets/教材/《金融产品营销实务》（第三版）项目一任务五.pdf",
    "6.1": "assets/教材/《金融产品营销实务》（第三版）项目一任务六.pdf",  # 营销方案策划
    "6.2": "assets/教材/《金融产品营销实务》（第三版）项目一任务六.pdf",
}

# 为每个小任务添加pdf字段
for task_id, pdf_path in pdf_map.items():
    # 查找对应的id: X.X 块
    pattern = rf'(id: {task_id.replace(".", r"\.")},[\s\S]*?description: ")([^"]*)(",)'
    match = re.search(pattern, content)
    if match:
        new_text = f'{match.group(1)}{match.group(2)}",\n                pdf: "{pdf_path}",'
        content = content[:match.start()] + new_text + content[match.end():]
        print(f"已为任务 {task_id} 添加PDF引用: {pdf_path}")
    else:
        print(f"未找到任务 {task_id}")

# 保存更新后的data.js
with open('/workspace/js/data.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("\n完成！")
