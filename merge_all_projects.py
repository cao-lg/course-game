#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
合并项目二到项目九到data.js
"""
import json
import re

# 读取当前data.js（只有项目一）
with open('/workspace/js/data.js', 'r', encoding='utf-8') as f:
    current_content = f.read()

# 提取项目一 - 找到 const levelsData = [...] 的内容
start = current_content.find('[')
end = current_content.rfind('];') + 1
project_one_json = current_content[start:end]

# 解析为JSON对象
import re
project_one_json = re.sub(r'([{,])\s*([a-zA-Z_][a-zA-Z0-9_]*)\s*:', r'\1"\2":', project_one_json)
try:
    project_one = json.loads(project_one_json)
    print(f"✓ 项目一解析成功，包含 {len(project_one[0].get('subLevels', []))} 个子任务")
except Exception as e:
    print(f"项目一解析错误: {e}")
    project_one = []

# 读取extracted_data.json中的项目二到项目九
with open('/workspace/extracted_data.json', 'r', encoding='utf-8') as f:
    other_projects = json.load(f)
print(f"✓ 项目二到项目九: {len(other_projects)} 个项目")

# 重新编号：让项目二是id 2，项目三是id 3... 项目九是id 9
id_map = {
    6: 2,   # 项目二
    7: 3,   # 项目三
    8: 4,   # 项目四
    9: 5,   # 项目五
    10: 6,  # 项目六
    11: 7,  # 项目七
    12: 8,  # 项目八
    13: 9,  # 项目九
}

# 重新映射项目ID
for project in other_projects:
    old_id = project['id']
    if old_id in id_map:
        project['id'] = id_map[old_id]

# 重新映射子任务ID：6.x -> 2.x, 7.x -> 3.x, ...
for project in other_projects:
    major_id = project['id']
    # 找到对应的主id (e.g., 6 -> 2)
    # 子任务ID格式: old_major * 10 + sub
    old_major = None
    for old, new in id_map.items():
        if new == major_id:
            old_major = old
            break
    if old_major is None:
        continue
    # 重新映射子任务ID
    for sub in project.get('subLevels', []):
        old_sub_id = sub['id']
        # 6.1 -> 2.1, 6.2 -> 2.2, etc.
        sub_num = int(str(old_sub_id).split('.')[1])
        sub['id'] = float(f"{major_id}.{sub_num}")

# 合并所有项目
all_projects = project_one + other_projects

# 更新项目一的title中id (从1改为"项目一")
for level in all_projects:
    if level['id'] == 1:
        level['title'] = "项目一 认知金融产品与金融产品营销"
        # 更新子任务ID的命名
        for sub in level.get('subLevels', []):
            sub_id = sub['id']
            major = int(str(sub_id).split('.')[0])
            minor = str(sub_id).split('.')[1]
            # 1.1, 1.2, 1.3 -> 任务一
            # 2.1, 2.2, 2.3 -> 任务二
            # 等等
            task_names = {
                1: "任务一",
                2: "任务二",
                3: "任务三",
                4: "任务四",
                5: "任务五",
                6: "任务六"
            }
            # 简化子任务标题
            if '任务一' in sub.get('title', '') and major == 1:
                pass  # 已经是任务一
            # 重新整理标题为 "任务X 1.Y 描述"
            if not sub.get('title', '').startswith('任务'):
                sub['title'] = f"{task_names.get(major, '')} {sub_id} {sub.get('title', '')}"

# 写入新的data.js
new_data_js = "const levelsData = " + json.dumps(all_projects, ensure_ascii=False, indent=4) + ";\n"
with open('/workspace/js/data.js', 'w', encoding='utf-8') as f:
    f.write(new_data_js)

print(f"\n✓ 合并完成！")
print(f"总项目数: {len(all_projects)}")
for level in all_projects:
    print(f"  项目 {level['id']}: {level['title']} - {len(level.get('subLevels', []))} 个子任务")
