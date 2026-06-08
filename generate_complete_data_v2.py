import json
import re

# 方法1：先读取 original_data.js 的前半部分（项目一到五）
print("正在读取 original_data.js...")

with open('/tmp/original_data.js', 'r', encoding='utf-8') as f:
    lines = f.readlines()

# 找到 levelsData 结束的位置
levels_end_idx = 0
brace_count = 0
in_levels = False

for i, line in enumerate(lines):
    if 'const levelsData =' in line:
        in_levels = True
    if in_levels:
        brace_count += line.count('[')
        brace_count -= line.count(']')
        if brace_count == 0 and '];' in line:
            levels_end_idx = i + 1
            break

# 提取项目一到五的内容
original_levels_part = ''.join(lines[:levels_end_idx])

# 读取 structured_pdf_content.json
print("正在读取 PDF 内容...")
with open('structured_pdf_content.json', 'r', encoding='utf-8') as f:
    pdf_content = json.load(f)

# 定义项目配置（项目二到九对应 id 6-13）
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

# 生成单个任务的 JS 代码
def generate_task_js(project_id, task_num, pdf_item, task_title):
    extracted_text = pdf_item.get('extracted_text', '')
    pdf_path = pdf_item.get('pdf_path', '')
    
    # 清理文本
    clean_text = re.sub(r'\s+', ' ', extracted_text).strip()
    if len(clean_text) > 2000:
        clean_text = clean_text[:2000] + '...'
    
    # 生成知识要点
    knowledge_points = [
        {'title': '学习目标', 'text': '通过本任务学习，掌握相关知识和技能'},
        {'title': '核心概念', 'text': pdf_item.get('core_concepts', '从教材内容中学习核心概念')[:200]},
        {'title': '关键技能', 'text': pdf_item.get('key_skills', '需要掌握的关键技能')[:200]},
        {'title': '重点难点', 'text': pdf_item.get('key_points', '学习的重点和难点')[:200]}
    ]
    
    # 生成试题（基于任务内容）
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
    
    # 构建 JS 字符串
    task_js = f'''
    {{
        id: {project_id}.{task_num},
        title: "任务{task_num}",
        description: "{task_title}",
        knowledge: [
            {{
                title: "{task_title}",
                content: "{clean_text.replace('"', '\\"')}",
                pdf: "{pdf_path}",
                points: [
'''
    for point in knowledge_points:
        task_js += f'''
                    {{
                        title: "{point['title']}",
                        text: "{point['text'].replace('"', '\\"')}"
                    }},
'''
    
    task_js += '''
                ]
            }
        ],
        quiz: [
'''
    
    for quiz in quiz_items:
        if quiz['type'] == 'judge':
            task_js += f'''
            {{
                type: "{quiz['type']}",
                question: "{quiz['question'].replace('"', '\\"')}",
                options: {json.dumps(quiz['options'], ensure_ascii=False)},
                answer: {quiz['answer']},
                explanation: "{quiz['explanation'].replace('"', '\\"')}"
            }},
'''
        elif quiz['type'] == 'multiple':
            task_js += f'''
            {{
                type: "{quiz['type']}",
                question: "{quiz['question'].replace('"', '\\"')}",
                options: {json.dumps(quiz['options'], ensure_ascii=False)},
                answer: {json.dumps(quiz['answer'])},
                explanation: "{quiz['explanation'].replace('"', '\\"')}"
            }},
'''
        else:
            task_js += f'''
            {{
                type: "{quiz['type']}",
                question: "{quiz['question'].replace('"', '\\"')}",
                options: {json.dumps(quiz['options'], ensure_ascii=False)},
                answer: {quiz['answer']},
                explanation: "{quiz['explanation'].replace('"', '\\"')}"
            }},
'''
    
    task_js += '''
        ]
    }
'''
    return task_js

# 生成完整的新增项目 JS
additional_levels_js = ''

for project_id in range(6, 14):
    config = project_config[project_id]
    pdf_indices = pdf_mapping[project_id]
    
    additional_levels_js += f'''
    ,
    {{
        id: {project_id},
        title: "{config['title']}",
        description: "{config['description']}",
        icon: "{config['icon']}",
        subLevels: [
'''
    
    for i, task_idx in enumerate(pdf_indices):
        pdf_item = pdf_content[task_idx]
        task_num = i + 1
        task_title = config['task_titles'][i]
        task_js = generate_task_js(project_id, task_num, pdf_item, task_title)
        additional_levels_js += task_js
        if i < len(pdf_indices) - 1:
            additional_levels_js += ','
    
    additional_levels_js += '''
        ]
    }
'''

# 找到 original_levels_part 的结束位置，插入新项目
final_levels_js = original_levels_part.rstrip()[:-2] + additional_levels_js + '\n];\n'

# 现在获取 medalsData 部分
medals_start_idx = 0
for i, line in enumerate(lines):
    if 'const medalsData =' in line:
        medals_start_idx = i
        break

original_medals_part = ''.join(lines[medals_start_idx:])

# 添加新的勋章
additional_medals_js = '''
    ,
    {
        id: 6,
        name: "营销范式专家",
        description: "完成项目二学习",
        icon: "fa-lightbulb-o",
        requirement: { type: "level", level: 6 }
    },
    {
        id: 7,
        name: "客户触达专家",
        description: "完成项目三学习",
        icon: "fa-users",
        requirement: { type: "level", level: 7 }
    },
    {
        id: 8,
        name: "产品呈现大师",
        description: "完成项目四学习",
        icon: "fa-star",
        requirement: { type: "level", level: 8 }
    },
    {
        id: 9,
        name: "异议处理专家",
        description: "完成项目五学习",
        icon: "fa-check-circle",
        requirement: { type: "level", level: 9 }
    },
    {
        id: 10,
        name: "客户关系专家",
        description: "完成项目六学习",
        icon: "fa-heart",
        requirement: { type: "level", level: 10 }
    },
    {
        id: 11,
        name: "银行产品营销师",
        description: "完成项目七学习",
        icon: "fa-bank",
        requirement: { type: "level", level: 11 }
    },
    {
        id: 12,
        name: "保险基金营销师",
        description: "完成项目八学习",
        icon: "fa-briefcase",
        requirement: { type: "level", level: 12 }
    },
    {
        id: 13,
        name: "活动营销策划师",
        description: "完成项目九学习",
        icon: "fa-calendar-check-o",
        requirement: { type: "level", level: 13 }
    }
'''

# 合并勋章数据
final_medals_js = original_medals_part.rstrip()[:-2] + additional_medals_js + '\n];\n'

# 生成最终的完整 JS 文件
final_js = final_levels_js + '\n' + final_medals_js

# 写入文件
with open('js/data.js', 'w', encoding='utf-8') as f:
    f.write(final_js)

print('✅ data.js 文件已成功生成！')
print(f'📚 包含 13 个项目（项目一到九）')
print(f'🏆 包含 13 个勋章')
print(f'📝 包含 28 个任务的学习笔记和试题')
