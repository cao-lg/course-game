import json
import re

print("正在读取 original_data.js...")

with open('/tmp/original_data.js', 'r', encoding='utf-8') as f:
    content = f.read()

# 分离不同的数据段
# 1. levelsData
levels_match = re.search(r'(const levelsData = \[[\s\S]*?\];)', content)
levels_data = levels_match.group(1) if levels_match else ''

# 2. medalsData
medals_match = re.search(r'(const medalsData = \[[\s\S]*?\];)', content)
medals_data = medals_match.group(1) if medals_match else ''

# 3. ranksData
ranks_match = re.search(r'(const ranksData = \[[\s\S]*?\];)', content)
ranks_data = ranks_match.group(1) if ranks_match else ''

# 读取 structured_pdf_content.json
print("正在读取 PDF 内容...")
with open('structured_pdf_content.json', 'r', encoding='utf-8') as f:
    pdf_content = json.load(f)

# 定义项目配置
project_config = {
    6: {
        'title': '项目二 熟知金融产品营销理念及范式',
        'description': '学习金融产品营销理念和范式',
        'icon': 'fa-book-open',
        'task_titles': ['识别营销机会与客户顺势深挖范式', '叠加营销与产品核心一句范式', 
                        '差异营销与主权在握范式', '互换营销与促成结案范式']
    },
    7: {
        'title': '项目三 线上线下结合快速触达客户',
        'description': '学习片区拓展、数字触达和客户经营',
        'icon': 'fa-handshake',
        'task_titles': ['熟悉线下触达的流程、方法和技巧', '数字触达渠道运营', 
                        '建立客户经营体系']
    },
    8: {
        'title': '项目四 掌握产品呈现与价值塑造技巧',
        'description': '学习产品呈现、价值塑造和促成技巧',
        'icon': 'fa-paint-brush',
        'task_titles': ['产品呈现技巧', '价值塑造方法', '产品演示与体验']
    },
    9: {
        'title': '项目五 化解客户异议与促成交易',
        'description': '学习异议处理和交易促成技巧',
        'icon': 'fa-handshake-o',
        'task_titles': ['客户异议识别与分类', '异议处理策略', '促成交易技巧', 
                        '促成交易时机把握', '促成交易方法', '促成交易话术']
    },
    10: {
        'title': '项目六 客户关系维护与二次开发',
        'description': '学习客户关系维护和二次开发策略',
        'icon': 'fa-users',
        'task_titles': ['客户关系维护重要性', '客户关系维护方法', '客户二次开发策略']
    },
    11: {
        'title': '项目七 银行重点产品营销技能',
        'description': '学习各类银行产品的营销技巧',
        'icon': 'fa-university',
        'task_titles': ['储蓄与理财产品营销', '贷款产品营销', '信用卡与电子银行产品营销']
    },
    12: {
        'title': '项目八 保险与基金产品营销',
        'description': '学习保险和基金产品的营销策略',
        'icon': 'fa-shield',
        'task_titles': ['保险产品营销', '基金产品营销', '综合资产配置方案']
    },
    13: {
        'title': '项目九 活动营销策划与实施',
        'description': '学习活动营销的策划和执行',
        'icon': 'fa-calendar',
        'task_titles': ['活动营销策划', '活动营销组织与实施', '活动效果评估与优化']
    }
}

pdf_mapping = {
    6: [0, 1, 2, 3],
    7: [4, 5, 6],
    8: [7, 8, 9],
    9: [10, 11, 12, 13, 14, 15],
    10: [16, 17, 18],
    11: [19, 20, 21],
    12: [22, 23, 24],
    13: [25, 26, 27]
}

def escape_js_str(s):
    return s.replace('\\', '\\\\').replace('"', '\\"').replace('\n', ' ').replace('\r', '')

def generate_task_content(pdf_item):
    extracted_text = pdf_item.get('extracted_text', '')
    clean_text = re.sub(r'\s+', ' ', extracted_text).strip()
    if len(clean_text) > 2000:
        clean_text = clean_text[:2000] + '...'
    return escape_js_str(clean_text)

def generate_task(project_id, task_num, pdf_item, task_title):
    pdf_path = pdf_item.get('pdf_path', '')
    content = generate_task_content(pdf_item)
    
    knowledge_points = [
        {'title': '学习目标', 'text': '通过本任务学习，掌握相关知识和技能'},
        {'title': '核心概念', 'text': escape_js_str(pdf_item.get('core_concepts', '从教材内容中学习核心概念')[:200])},
        {'title': '关键技能', 'text': escape_js_str(pdf_item.get('key_skills', '需要掌握的关键技能')[:200])},
        {'title': '重点难点', 'text': escape_js_str(pdf_item.get('key_points', '学习的重点和难点')[:200])}
    ]
    
    quiz_items = [
        {
            'type': 'single',
            'question': f'关于{task_title}，以下说法正确的是：',
            'options': ['需要结合实际场景灵活运用', '可以直接套用所有情况', '不需要考虑客户需求', '只关注产品本身'],
            'answer': 0,
            'explanation': '营销方法需要结合具体场景和客户需求灵活运用'
        },
        {
            'type': 'judge',
            'question': '在金融产品营销中，了解客户需求是最重要的第一步。',
            'options': ['正确', '错误'],
            'answer': 0,
            'explanation': '了解客户需求是开展有效营销的基础'
        },
        {
            'type': 'multiple',
            'question': '本任务涉及的关键要素包括：（多选）',
            'options': ['客户需求分析', '产品特点介绍', '沟通技巧', '异议处理'],
            'answer': [0, 1, 2, 3],
            'explanation': '以上都是金融产品营销中的关键要素'
        },
        {
            'type': 'single',
            'question': '在实际营销过程中，营销人员应该：',
            'options': ['只推销高收益产品', '根据客户需求推荐合适产品', '强迫客户购买', '隐瞒产品风险'],
            'answer': 1,
            'explanation': '应该根据客户的实际需求和风险偏好推荐合适的产品'
        }
    ]
    
    task_str = f'''
    {{
        id: {project_id}.{task_num},
        title: "任务{task_num}",
        description: "{escape_js_str(task_title)}",
        knowledge: [
            {{
                title: "{escape_js_str(task_title)}",
                content: "{content}",
                pdf: "{escape_js_str(pdf_path)}",
                points: [
'''
    for point in knowledge_points:
        task_str += f'''
                    {{
                        title: "{point['title']}",
                        text: "{point['text']}"
                    }},
'''
    
    task_str += '''
                ]
            }
        ],
        quiz: [
'''
    
    for quiz in quiz_items:
        if quiz['type'] == 'multiple':
            task_str += f'''
            {{
                type: "{quiz['type']}",
                question: "{escape_js_str(quiz['question'])}",
                options: {json.dumps(quiz['options'], ensure_ascii=False)},
                answer: {json.dumps(quiz['answer'])},
                explanation: "{escape_js_str(quiz['explanation'])}"
            }},
'''
        else:
            task_str += f'''
            {{
                type: "{quiz['type']}",
                question: "{escape_js_str(quiz['question'])}",
                options: {json.dumps(quiz['options'], ensure_ascii=False)},
                answer: {quiz['answer']},
                explanation: "{escape_js_str(quiz['explanation'])}"
            }},
'''
    
    task_str += '''
        ]
    }
'''
    return task_str

# 生成新增项目
additional_projects = ''
for project_id in range(6, 14):
    config = project_config[project_id]
    pdf_indices = pdf_mapping[project_id]
    
    additional_projects += f'''
    ,
    {{
        id: {project_id},
        title: "{escape_js_str(config['title'])}",
        description: "{escape_js_str(config['description'])}",
        icon: "{config['icon']}",
        subLevels: [
'''
    
    for i, task_idx in enumerate(pdf_indices):
        pdf_item = pdf_content[task_idx]
        task_num = i + 1
        task_title = config['task_titles'][i]
        task_content = generate_task(project_id, task_num, pdf_item, task_title)
        additional_projects += task_content
        if i < len(pdf_indices) - 1:
            additional_projects += ','
    
    additional_projects += '''
        ]
    }
'''

# 更新 levelsData：在最后一个 ] 之前插入新项目
if levels_data:
    levels_data = levels_data.rstrip()
    levels_data = levels_data[:-2] + additional_projects + '\n];\n'

# 新增勋章（使用不重复的ID）
additional_medals = '''
    ,
    {
        id: 9,
        name: "营销范式专家",
        description: "完成项目二学习",
        icon: "fa-lightbulb-o",
        requirement: { type: "level", level: 6 }
    },
    {
        id: 10,
        name: "客户触达专家",
        description: "完成项目三学习",
        icon: "fa-users",
        requirement: { type: "level", level: 7 }
    },
    {
        id: 11,
        name: "产品呈现大师",
        description: "完成项目四学习",
        icon: "fa-star",
        requirement: { type: "level", level: 8 }
    },
    {
        id: 12,
        name: "异议处理专家",
        description: "完成项目五学习",
        icon: "fa-check-circle",
        requirement: { type: "level", level: 9 }
    },
    {
        id: 13,
        name: "客户关系专家",
        description: "完成项目六学习",
        icon: "fa-heart",
        requirement: { type: "level", level: 10 }
    },
    {
        id: 14,
        name: "银行产品营销师",
        description: "完成项目七学习",
        icon: "fa-bank",
        requirement: { type: "level", level: 11 }
    },
    {
        id: 15,
        name: "保险基金营销师",
        description: "完成项目八学习",
        icon: "fa-briefcase",
        requirement: { type: "level", level: 12 }
    },
    {
        id: 16,
        name: "活动营销策划师",
        description: "完成项目九学习",
        icon: "fa-calendar-check-o",
        requirement: { type: "level", level: 13 }
    }
'''

# 更新 medalsData
if medals_data:
    medals_data = medals_data.rstrip()
    medals_data = medals_data[:-2] + additional_medals + '\n];\n'

# 合并成最终文件
final_content = levels_data + '\n' + medals_data + '\n' + ranks_data

with open('js/data.js', 'w', encoding='utf-8') as f:
    f.write(final_content)

print('✅ data.js 文件已成功生成！')
print(f'📚 包含 13 个项目（项目一到九）')
print(f'🏆 包含 16 个勋章')
print(f'📝 包含 28 个任务的学习笔记和试题')
