#!/usr/bin/env python3
import json
import re

# 读取当前的data.js
with open('/workspace/js/data.js', 'r', encoding='utf-8') as f:
    content = f.read()

# 提取levelsData数组
start = content.find('const levelsData = [') + len('const levelsData = [')
end = content.find('];', start) + 1

# 提取levelsData数组内容
levels_str = content[content.find('const levelsData = [') + len('const levelsData = ['):content.find('];', content.find('const levelsData = [')) + 1]

# 我们需要用一个更巧妙的方式来解析JavaScript对象
# 使用简单的字符串替换和正则匹配
import ast

# 尝试使用ast来解析，但首先需要一些转换
# 将JavaScript对象转换为Python字典格式
# 这个比较复杂，让我们用一个更简单的方法：直接处理字符串内容

# 找到所有content字段并简化它们
new_content = content

# 简化规则：
# 1. 对于content字段，超过100字的内容，只保留开头和要点
# 2. 对于points字段，确保只保留核心要点

# 使用正则表达式找到并简化
# 这里我们使用一个更简单的方法：直接重新生成精简的data.js

# 先读取提取的原始数据
with open('/workspace/extracted_data.json', 'r', encoding='utf-8') as f:
    new_data = json.load(f)

# 精简每个任务的内容
for project in new_data:
    for sub_level in project['subLevels']:
        for knowledge in sub_level['knowledge']:
            # 简化content
            if len(knowledge['content']) > 200:
                # 只保留开头部分，去掉冗余
                knowledge['content'] = knowledge['content'][:180] + '...（详见下方PDF）'
            
            # 简化points
            for point in knowledge['points']:
                if len(point['text']) > 200:
                    point['text'] = point['text'][:180] + '...'

# 现在重新生成完整的data.js
# 先读取原始完整data.js作为模板
with open('/tmp/original_data.js', 'r', encoding='utf-8') as f:
    original_full = f.read()

# 找到项目一的内容
project1_end = original_full.find('    {', original_full.find('id: 1,') + 100)

# 提取项目一的内容
project1_start = original_full.find('const levelsData = [')
project1_content = original_full[project1_start:original_full.find('    {', original_full.find('id: 1,') + 200) + 1]

# 提取文件后缀（勋章数据等）
medals_start = original_full.find('// 勋章数据')
medals_content = original_full[medals_start:]

# 重新构建整个levelsData
result = '// 关卡数据\nconst levelsData = [\n'

# 添加项目一（保留原样）
result += '    {\n        id: 1,\n        title: "认知金融产品与金融产品营销",\n        description: "了解金融产品的基本概念和营销基础",\n        icon: "fa-lightbulb",\n        subLevels: [\n            {\n                id: 1.1,\n                title: "金融与金融机构认知",\n                description: "学习金融的本质和金融机构分类",\n                knowledge: [\n                    {\n                        title: "金融的含义与本质",\n                        content: "金融是货币资金融通的总称，主要指与货币流通和银行信用相关的各种活动。",\n                        points: [\n                            { title: "核心内容", text: "货币的发行、投放、流通和回笼；各种存款的吸收和提取；各项贷款的发放和收回" },\n                            { title: "本质特征", text: "金融是信用交易，是价值运动的特殊形式，以偿还为条件的借贷活动" }\n                        ]\n                    },\n                    {\n                        title: "金融机构分类",\n                        content: "金融机构是专门从事金融活动的组织，包括银行类和非银行类机构。",\n                        points: [\n                            { title: "银行类机构", text: "中央银行、商业银行、政策性银行、信用合作社等" },\n                            { title: "非银行类机构", text: "证券公司、保险公司、信托投资公司、基金管理公司等" }\n                        ]\n                    }\n                ],\n                quiz: [\n                    {\n                        type: "single",\n                        question: "以下哪个不属于银行类金融机构？",\n                        options: ["商业银行", "证券公司", "中央银行", "信用合作社"],\n                        answer: 1,\n                        explanation: "证券公司属于非银行类金融机构，主要从事证券发行、交易等业务。"\n                    },\n                    {\n                        type: "single",\n                        question: "金融的本质特征是什么？",\n                        options: ["货币交易", "信用交易", "商品交换", "价值交换"],\n                        answer: 1,\n                        explanation: "金融是信用交易，是以偿还为条件的借贷活动。"\n                    }\n                ]\n            },\n            {\n                id: 1.2,\n                title: "金融产品概述",\n                description: "了解金融产品的分类和特点",\n                knowledge: [\n                    {\n                        title: "金融产品的定义",\n                        content: "金融产品是指金融机构为满足客户需求而提供的各种金融服务和工具。",\n                        points: [\n                            { title: "产品特性", text: "收益性、风险性、流动性、期限性" },\n                            { title: "产品形态", text: "实物产品、服务产品、衍生产品" }\n                        ]\n                    },\n                    {\n                        title: "金融产品分类",\n                        content: "金融产品可以按照不同标准进行分类，常见的有按风险等级、收益类型、期限等分类方式。",\n                        points: [\n                            { title: "按风险等级", text: "低风险产品、中风险产品、高风险产品" },\n                            { title: "按收益类型", text: "固定收益产品、浮动收益产品、保本产品" }\n                        ]\n                    }\n                ],\n                quiz: [\n                    {\n                        type: "single",\n                        question: "金融产品的四大特性不包括以下哪项？",\n                        options: ["收益性", "风险性", "流动性", "安全性"],\n                        answer: 3,\n                        explanation: "金融产品的四大特性是收益性、风险性、流动性和期限性。"\n                    }\n                ]\n            }\n        ]\n    },'

# 添加精简后的项目二到项目九
for project in new_data:
    if 6 <= project['id'] <= 13:
        result += '\n    {\n'
        result += f'        id: {project["id"]},\n'
        result += f'        title: "{project["title"]}",\n'
        result += f'        description: "{project["description"]}",\n'
        result += f'        icon: "{project["icon"]}",\n'
        result += '        subLevels: [\n'
        
        for sub_level in project['subLevels']:
            result += '            {\n'
            result += f'                id: {sub_level["id"]},\n'
            result += f'                title: "{sub_level["title"]}",\n'
            result += f'                description: "{sub_level["description"]}",\n'
            result += '                knowledge: [\n'
            
            for knowledge in sub_level['knowledge']:
                result += '                    {\n'
                result += f'                        title: "{knowledge["title"]}",\n'
                result += f'                        content: "{knowledge["content"][:150] if len(knowledge["content"]) > 150 else knowledge["content"]}",\n'
                result += f'                        pdf: "{knowledge["pdf"]}",\n'
                result += '                        points: [\n'
                
                for point in knowledge['points']:
                    point_text = point['text'][:150] if len(point['text']) > 150 else point['text']
                    result += '                            {\n'
                    result += f'                                title: "{point["title"]}",\n'
                    result += f'                                text: "{point_text}"\n'
                    result += '                            },'
                
                result += '\n                        ]\n'
                result += '                    },'
            
            result += '\n                ],\n'
            result += '                quiz: [\n'
            
            for quiz in sub_level['quiz']:
                result += '                    {\n'
                result += f'                        type: "{quiz["type"]}",\n'
                result += f'                        question: "{quiz["question"]}",\n'
                result += '                        options: [\n'
                
                for option in quiz['options']:
                    result += f'                            "{option}",\n'
                
                result += '                        ],\n'
                result += f'                        answer: {quiz["answer"]},\n'
                result += f'                        explanation: "{quiz["explanation"]}"\n'
                result += '                    },'
            
            result += '\n                ]\n'
            result += '            },'
        
        result += '\n        ]\n'
        result += '    },'

# 移除最后一个逗号
result = result.rstrip(',') + '\n];\n'

# 添加勋章数据等
result += medals_content

# 写回文件
with open('/workspace/js/data.js', 'w', encoding='utf-8') as f:
    f.write(result)

print("内容精简完成！")
