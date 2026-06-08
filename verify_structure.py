import re

with open('/workspace/js/data.js', 'r', encoding='utf-8') as f:
    content = f.read()

# 找到项目一的结束位置
# 查找 id: 2 或者 id: 6 的位置
# 我们知道项目二是 id: 6
project_one_end = content.find('    {\n        id: 6,')
project_one_content = content[:project_one_end]

# 查找项目一中的大任务
main_task_pattern = r'id:\s*(\d+\.?\d*),'
matches = re.findall(main_task_pattern, project_one_content)

print(f"找到的ID列表: {matches}")
print()

# 统计
main_tasks = [m for m in matches if '.' not in m]
sub_tasks = [m for m in matches if '.' in m]

print(f"项目一中有 {len(main_tasks)} 个大任务: {main_tasks}")
print(f"项目一中有 {len(sub_tasks)} 个小任务")

# 检查大任务编号是否从1到6
expected_main = ['1', '2', '3', '4', '5', '6']
print(f"期望的大任务: {expected_main}")
print(f"实际的大任务: {main_tasks}")
print(f"大任务是否完整: {set(main_tasks) == set(expected_main)}")

# 检查小任务数量
print(f"\n小任务详情:")
for task_id in sorted(sub_tasks, key=lambda x: float(x)):
    print(f"  {task_id}")
