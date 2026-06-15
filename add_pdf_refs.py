#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
为data.js中项目一每个小任务添加pdf字段，并补充PDF中的关键要点
"""
import re

# 读取data.js
with open('/workspace/js/data.js', 'r', encoding='utf-8') as f:
    content = f.read()

# PDF映射 - 任务ID到PDF路径
pdf_map = {
    "1.1": "assets/教材/《金融产品营销实务》（第三版）项目一任务一.pdf",
    "1.2": "assets/教材/《金融产品营销实务》（第三版）项目一任务二.pdf",
    "1.3": "assets/教材/《金融产品营销实务》（第三版）项目一任务三.pdf",
    "1.4": "assets/教材/《金融产品营销实务》（第三版）项目一任务四.pdf",
    "1.5": "assets/教材/《金融产品营销实务》（第三版）项目一任务五.pdf",
    "1.6": "assets/教材/《金融产品营销实务》（第三版）项目一任务六.pdf",
}

# 为每个小任务的knowledge数组添加pdf引用
# 找到每个任务的knowledge部分，在content字段后添加pdf引用
# 我们将使用一种更优雅的方式：在knowledge第一个对象的content末尾添加PDF链接

# 简单方法：对于id为1.1, 1.2等的小任务，在knowledge前添加一个pdf字段
# 由于data.js结构复杂，我们直接用字符串匹配

# 1.1任务 - 金融与金融机构认知
# 在第一个knowledge对象后添加pdf信息
# 实际策略：在description后添加pdf路径

# 修改每个小任务：在title后添加pdf字段
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
