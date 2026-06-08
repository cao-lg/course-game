#!/usr/bin/env python3
import json

# 读取原始数据（包含项目一到项目五）
with open('/tmp/original_data.js', 'r', encoding='utf-8') as f:
    content = f.read()
    # 提取levelsData数组
    start = content.find('const levelsData = [') + len('const levelsData = [')
    end = content.find('];', start)
    original_data = json.loads(content[start:end] + ']')

# 读取新提取的数据（项目二到项目九，详细内容）
with open('/workspace/extracted_data.json', 'r', encoding='utf-8') as f:
    new_data = json.load(f)

# 创建合并后的数据
# 保留原始的项目一到项目五，用新数据替换项目二到项目九（因为新数据更详细）
merged_data = []

# 找到项目一（id=1）
for item in original_data:
    if item['id'] == 1:
        merged_data.append(item)
        break

# 添加新数据中的项目二到项目九（id=6到13）
for item in new_data:
    if 6 <= item['id'] <= 13:
        merged_data.append(item)

# 输出结果
result = '// 关卡数据\nconst levelsData = ' + json.dumps(merged_data, ensure_ascii=False, indent=4) + ';\n'

# 添加文件剩余部分（勋章数据等）
start_medals = content.find('// 勋章数据')
result += content[start_medals:]

# 写回文件
with open('/workspace/js/data.js', 'w', encoding='utf-8') as f:
    f.write(result)

print("合并完成！关卡数:", len(merged_data))
