import json
import re

# 读取新的项目一数据
with open('/workspace/js/new_project_one.js', 'r', encoding='utf-8') as f:
    new_project_one_content = f.read()

# 提取新的项目一对象
match = re.search(r'const newProjectOne = (.*?);', new_project_one_content, re.DOTALL)
if match:
    new_project_one_str = match.group(1)
    # 使用eval解析，但要小心安全
    new_project_one = eval(new_project_one_str)

# 读取原始的data.js
with open('/workspace/js/data.js', 'r', encoding='utf-8') as f:
    data_content = f.read()

# 找到第一个项目开始和项目二开始的位置
# 我们需要替换从第一个项目开始到id:6之前的所有内容
start_marker = 'const levelsData = ['
project_two_marker = '    {\n        id: 6,'

# 找到开始位置
start_idx = data_content.find(start_marker)
if start_idx == -1:
    print("找不到开始标记")
    exit(1)

# 找到项目二开始的位置
project_two_idx = data_content.find(project_two_marker)
if project_two_idx == -1:
    print("找不到项目二标记")
    exit(1)

# 构建新的内容
new_content = data_content[:start_idx + len(start_marker)] + '\n'

# 添加新的项目一
# 我们需要将新的项目一格式化为JS数组元素
# 首先将新的项目一转换为JSON，然后做一些微调使其符合JS语法
import json
new_project_json = json.dumps(new_project_one, ensure_ascii=False, indent=4)
# 修复JSON到JS的小差异
new_project_js = new_project_json
# 移除最后一个字符（闭合的}），然后添加逗号
# 不对，我们需要直接使用我们定义的对象格式
# 让我们重新格式化

# 手动构建JS对象字符串
def format_js(obj, indent=4):
    if isinstance(obj, dict):
        items = []
        for k, v in obj.items():
            items.append(f'{" " * (indent + 4)}{k}: {format_js(v, indent + 4)}')
        return f'{{\n{",\n".join(items)}\n{" " * indent}}}'
    elif isinstance(obj, list):
        items = []
        for item in obj:
            items.append(f'{" " * (indent + 4)}{format_js(item, indent + 4)}')
        return f'[\n{",\n".join(items)}\n{" " * indent}]'
    elif isinstance(obj, str):
        return f'"{obj}"'
    elif isinstance(obj, bool):
        return str(obj).lower()
    elif obj is None:
        return 'null'
    else:
        return str(obj)

new_project_one_js = format_js(new_project_one)

# 添加新的项目一和逗号
new_content += new_project_one_js + ',\n'

# 添加项目二及以后的内容
new_content += data_content[project_two_idx:]

# 写入新的data.js
with open('/workspace/js/data.js', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("data.js已成功更新！")
