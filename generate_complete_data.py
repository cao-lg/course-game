import json
import re

# 读取 original_data.js 获取项目一到五的内容
with open('/tmp/original_data.js', 'r', encoding='utf-8') as f:
    original_js = f.read()

# 提取 levelsData 数组
levels_match = re.search(r'const levelsData = (\[[\s\S]*?\]);', original_js)
if levels_match:
    levels_data_str = levels_match.group(1)
    # 转换为 Python 字典
    original_levels = eval(levels_data_str.replace('null', 'None').replace('true', 'True').replace('false', 'False'))

# 读取 structured_pdf_content.json
with open('structured_pdf_content.json', 'r', encoding='utf-8') as f:
    pdf_content = json.load(f)

# 定义项目配置
project_config = {
    6: {
        'title': '项目二 熟知金融产品营销理念及范式',
        'description': '学习金融产品营销理念和范式',
        'icon': 'fa-book-open',
        'tasks': ['任务一', '任务二', '任务三', '任务四']
    },
    7: {
        'title': '项目三 线上线下结合快速触达客户',
        'description': '学习片区拓展、数字触达和客户经营',
        'icon': 'fa-handshake',
        'tasks': ['任务一', '任务二', '任务三']
    },
    8: {
        'title': '项目四 掌握产品呈现与价值塑造技巧',
        'description': '学习产品呈现、价值塑造和促成技巧',
        'icon': 'fa-paint-brush',
        'tasks': ['任务一', '任务二', '任务三']
    },
    9: {
        'title': '项目五 化解客户异议与促成交易',
        'description': '学习异议处理和交易促成技巧',
        'icon': 'fa-handshake-o',
        'tasks': ['任务一', '任务二', '任务三', '任务四', '任务五', '任务六']
    },
    10: {
        'title': '项目六 客户关系维护与二次开发',
        'description': '学习客户关系维护和二次开发策略',
        'icon': 'fa-users',
        'tasks': ['任务一', '任务二', '任务三']
    },
    11: {
        'title': '项目七 银行重点产品营销技能',
        'description': '学习各类银行产品的营销技巧',
        'icon': 'fa-university',
        'tasks': ['任务一', '任务二', '任务三']
    },
    12: {
        'title': '项目八 保险与基金产品营销',
        'description': '学习保险和基金产品的营销策略',
        'icon': 'fa-shield',
        'tasks': ['任务一', '任务二', '任务三']
    },
    13: {
        'title': '项目九 活动营销策划与实施',
        'description': '学习活动营销的策划和执行',
        'icon': 'fa-calendar',
        'tasks': ['任务一', '任务二', '任务三']
    }
}

# PDF 索引映射
pdf_mapping = {
    6: [0, 1, 2, 3],      # 项目二：4个任务
    7: [4, 5, 6],          # 项目三：3个任务
    8: [7, 8, 9],          # 项目四：3个任务
    9: [10, 11, 12, 13, 14, 15],  # 项目五：6个任务
    10: [16, 17, 18],      # 项目六：3个任务
    11: [19, 20, 21],      # 项目七：3个任务
    12: [22, 23, 24],      # 项目八：3个任务
    13: [25, 26, 27]       # 项目九：3个任务
}

# 生成学习笔记的函数
def generate_knowledge(pdf_item, task_title):
    extracted_text = pdf_item.get('extracted_text', '')
    
    # 提取学习目标
    learning_objectives = pdf_item.get('learning_objectives', '')
    if not learning_objectives or '学习目标' not in learning_objectives:
        learning_objectives = extracted_text[:800] if len(extracted_text) > 800 else extracted_text
    
    # 生成知识要点
    knowledge_points = [
        {
            'title': '学习目标',
            'text': '通过本任务学习，掌握相关知识和技能'
        },
        {
            'title': '核心概念',
            'text': pdf_item.get('core_concepts', '从PDF内容中提取的核心概念')
        },
        {
            'title': '关键技能',
            'text': pdf_item.get('key_skills', '需要掌握的关键技能')
        },
        {
            'title': '重点难点',
            'text': pdf_item.get('key_points', '学习的重点和难点')
        }
    ]
    
    return {
        'title': task_title,
        'content': extracted_text[:2000] if len(extracted_text) > 2000 else extracted_text,
        'pdf': pdf_item['pdf_path'],
        'points': knowledge_points
    }

# 生成试题的函数
def generate_quiz(task_index, project_id):
    # 为每个任务生成4-5道题
    quiz_templates = [
        {
            'type': 'single',
            'question': f'关于本任务的核心概念，以下说法正确的是：',
            'options': ['选项A', '选项B', '选项C', '选项D'],
            'answer': 0,
            'explanation': '这是正确答案的详细解释'
        },
        {
            'type': 'judge',
            'question': '本任务中提到的方法适用于所有金融产品营销场景。',
            'options': ['正确', '错误'],
            'answer': 1,
            'explanation': '需要根据具体场景灵活运用，并非适用于所有情况'
        },
        {
            'type': 'multiple',
            'question': '本任务涉及的关键要素包括：（多选）',
            'options': ['要素1', '要素2', '要素3', '要素4'],
            'answer': [0, 1, 2],
            'explanation': '以上都是关键要素'
        },
        {
            'type': 'single',
            'question': '在实际应用中，首先应该做的是：',
            'options': ['直接推销', '了解客户需求', '介绍产品特点', '促成交易'],
            'answer': 1,
            'explanation': '了解客户需求是营销的第一步'
        }
    ]
    
    return quiz_templates

# 生成完整的关卡数据
all_levels = original_levels[:5]  # 保留项目一到五

# 生成项目六到十三
for project_id in range(6, 14):
    config = project_config[project_id]
    pdf_indices = pdf_mapping[project_id]
    sub_levels = []
    
    for i, task_idx in enumerate(pdf_indices):
        pdf_item = pdf_content[task_idx]
        task_num = i + 1
        
        # 生成子关卡
        sub_level = {
            'id': float(f'{project_id}.{task_num}'),
            'title': f'任务{task_num}',
            'description': f'完成{config["tasks"][i]}的学习',
            'knowledge': [generate_knowledge(pdf_item, config['tasks'][i])],
            'quiz': generate_quiz(i, project_id)
        }
        sub_levels.append(sub_level)
    
    # 添加到关卡数据
    all_levels.append({
        'id': project_id,
        'title': config['title'],
        'description': config['description'],
        'icon': config['icon'],
        'subLevels': sub_levels
    })

# 读取勋章数据
medals_match = re.search(r'const medalsData = (\[[\s\S]*?\]);', original_js)
if medals_match:
    medals_data_str = medals_match.group(1)
    medals_data = eval(medals_data_str.replace('null', 'None').replace('true', 'True').replace('false', 'False'))

# 添加新的勋章
new_medals = [
    {
        'id': 6,
        'name': '营销范式专家',
        'description': '完成项目二学习',
        'icon': 'fa-lightbulb-o',
        'requirement': {'type': 'level', 'level': 6}
    },
    {
        'id': 7,
        'name': '客户触达专家',
        'description': '完成项目三学习',
        'icon': 'fa-users',
        'requirement': {'type': 'level', 'level': 7}
    },
    {
        'id': 8,
        'name': '产品呈现大师',
        'description': '完成项目四学习',
        'icon': 'fa-star',
        'requirement': {'type': 'level', 'level': 8}
    },
    {
        'id': 9,
        'name': '异议处理专家',
        'description': '完成项目五学习',
        'icon': 'fa-check-circle',
        'requirement': {'type': 'level', 'level': 9}
    },
    {
        'id': 10,
        'name': '客户关系专家',
        'description': '完成项目六学习',
        'icon': 'fa-heart',
        'requirement': {'type': 'level', 'level': 10}
    },
    {
        'id': 11,
        'name': '银行产品营销师',
        'description': '完成项目七学习',
        'icon': 'fa-bank',
        'requirement': {'type': 'level', 'level': 11}
    },
    {
        'id': 12,
        'name': '保险基金营销师',
        'description': '完成项目八学习',
        'icon': 'fa-briefcase',
        'requirement': {'type': 'level', 'level': 12}
    },
    {
        'id': 13,
        'name': '活动营销策划师',
        'description': '完成项目九学习',
        'icon': 'fa-calendar-check-o',
        'requirement': {'type': 'level', 'level': 13}
    }
]

# 合并勋章数据
for medal in new_medals:
    if medal['id'] not in [m['id'] for m in medals_data]:
        medals_data.append(medal)

# 生成最终的 JS 文件
def to_js(obj):
    return json.dumps(obj, ensure_ascii=False, indent=4)\
        .replace('"true"', 'true')\
        .replace('"false"', 'false')\
        .replace('"None"', 'null')\
        .replace('"null"', 'null')

final_js = f'''// 关卡数据
const levelsData = {to_js(all_levels)};

// 勋章数据
const medalsData = {to_js(medals_data)};
'''

# 写入文件
with open('js/data.js', 'w', encoding='utf-8') as f:
    f.write(final_js)

print('data.js 文件已成功生成！')
print(f'包含 {len(all_levels)} 个项目')
print(f'包含 {len(medals_data)} 个勋章')
