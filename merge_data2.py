#!/usr/bin/env python3

# 读取原始数据
with open('/tmp/original_data.js', 'r', encoding='utf-8') as f:
    original_content = f.read()

# 读取新提取的数据
with open('/workspace/extracted_data.json', 'r', encoding='utf-8') as f:
    import json
    new_data = json.load(f)

# 提取原始数据中的项目一
start = original_content.find('const levelsData = [')
end = original_content.find('];', start) + 2

# 提取勋章数据等
start_medals = original_content.find('// 勋章数据')
medals_content = original_content[start_medals:]

# 生成新的levelsData
new_levels_str = 'const levelsData = [\n'
new_levels_str += '    {\n        id: 1,\n        title: "认知金融产品与金融产品营销",\n        description: "了解金融产品的基本概念和营销基础",\n        icon: "fa-lightbulb",\n        subLevels: [\n            {\n                id: 1.1,\n                title: "金融与金融机构认知",\n                description: "学习金融的本质和金融机构分类",\n                knowledge: [\n                    {\n                        title: "金融的含义与本质",\n                        content: "金融是货币资金融通的总称，主要指与货币流通和银行信用相关的各种活动。",\n                        points: [\n                            { title: "核心内容", text: "货币的发行、投放、流通和回笼；各种存款的吸收和提取；各项贷款的发放和收回" },\n                            { title: "本质特征", text: "金融是信用交易，是价值运动的特殊形式，以偿还为条件的借贷活动" }\n                        ]\n                    },\n                    {\n                        title: "金融机构分类",\n                        content: "金融机构是专门从事金融活动的组织，包括银行类和非银行类机构。",\n                        points: [\n                            { title: "银行类机构", text: "中央银行、商业银行、政策性银行、信用合作社等" },\n                            { title: "非银行类机构", text: "证券公司、保险公司、信托投资公司、基金管理公司等" }\n                        ]\n                    }\n                ],\n                quiz: [\n                    {\n                        type: "single",\n                        question: "以下哪个不属于银行类金融机构？",\n                        options: ["商业银行", "证券公司", "中央银行", "信用合作社"],\n                        answer: 1,\n                        explanation: "证券公司属于非银行类金融机构，主要从事证券发行、交易等业务。"\n                    },\n                    {\n                        type: "single",\n                        question: "金融的本质特征是什么？",\n                        options: ["货币交易", "信用交易", "商品交换", "价值交换"],\n                        answer: 1,\n                        explanation: "金融是信用交易，是以偿还为条件的借贷活动。"\n                    }\n                ]\n            },\n            {\n                id: 1.2,\n                title: "金融产品概述",\n                description: "了解金融产品的分类和特点",\n                knowledge: [\n                    {\n                        title: "金融产品的定义",\n                        content: "金融产品是指金融机构为满足客户需求而提供的各种金融服务和工具。",\n                        points: [\n                            { title: "产品特性", text: "收益性、风险性、流动性、期限性" },\n                            { title: "产品形态", text: "实物产品、服务产品、衍生产品" }\n                        ]\n                    },\n                    {\n                        title: "金融产品分类",\n                        content: "金融产品可以按照不同标准进行分类，常见的有按风险等级、收益类型、期限等分类方式。",\n                        points: [\n                            { title: "按风险等级", text: "低风险产品、中风险产品、高风险产品" },\n                            { title: "按收益类型", text: "固定收益产品、浮动收益产品、保本产品" }\n                        ]\n                    }\n                ],\n                quiz: [\n                    {\n                        type: "single",\n                        question: "金融产品的四大特性不包括以下哪项？",\n                        options: ["收益性", "风险性", "流动性", "安全性"],\n                        answer: 3,\n                        explanation: "金融产品的四大特性是收益性、风险性、流动性和期限性。"\n                    }\n                ]\n            }\n        ]\n    },'

# 添加新提取的项目二到项目九
for project in new_data:
    if 6 <= project['id'] <= 13:
        new_levels_str += '\n' + json.dumps(project, ensure_ascii=False, indent=4) + ','

# 移除最后一个逗号并闭合数组
new_levels_str = new_levels_str.rstrip(',') + '\n];\n'

# 添加勋章数据等
new_levels_str += medals_content

# 写回文件
with open('/workspace/js/data.js', 'w', encoding='utf-8') as f:
    f.write(new_levels_str)

print("合并完成！")
