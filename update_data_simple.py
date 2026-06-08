import re

# 读取原始的data.js
with open('/workspace/js/data.js', 'r', encoding='utf-8') as f:
    data_content = f.read()

# 找到项目二开始的位置 - 使用更简单的查找方式
# 查找 id: 6, 这是项目二的开始
project_two_pattern = r',\s*\{\s*id:\s*6,'
match = re.search(project_two_pattern, data_content)

if not match:
    print("找不到项目二的位置")
    # 尝试另一种方式
    print("尝试查找\"项目二\"")
    project_two_text_idx = data_content.find('项目二')
    if project_two_text_idx == -1:
        print("也找不到\"项目二\"")
        exit(1)
    
    # 向前找到该项目的开始
    start_search = max(0, project_two_text_idx - 200)
    id_6_match = re.search(r'\{\s*id:\s*6,', data_content[start_search:project_two_text_idx + 100])
    if id_6_match:
        project_two_idx = start_search + id_6_match.start()
        print(f"在位置 {project_two_idx} 找到id:6")
    else:
        print("还是找不到，让我们打印一些内容来调试")
        print(data_content[850:900])
        exit(1)
else:
    project_two_idx = match.start()
    print(f"在位置 {project_two_idx} 找到项目二开始")

# 读取我们的新项目一的内容，但去掉开头和结尾
with open('/workspace/js/new_project_one.js', 'r', encoding='utf-8') as f:
    new_project_content = f.read()

# 提取新项目一的对象内容
# 去掉开头的 'const newProjectOne = ' 和结尾的 ';'
new_project_object = new_project_content[len('const newProjectOne = '):-1]

# 现在构建新的文件内容
# 我们需要:
# 1. 保留 'const levelsData = [' 开头
# 2. 添加我们的新项目一
# 3. 添加逗号
# 4. 添加项目二及以后的内容

# 找到 'const levelsData = [' 的结束位置
levels_data_start = data_content.find('const levelsData = [') + len('const levelsData = [')

# 构建新内容
new_data = 'const levelsData = [\n' + new_project_object + ',\n' + data_content[project_two_idx + 1:]  # +1是跳过逗号

# 写入文件
with open('/workspace/js/data.js', 'w', encoding='utf-8') as f:
    f.write(new_data)

print("data.js更新完成！")
