#!/usr/bin/env python3
import json
import re

# 定义精简版本的项目数据
projects = [
    {
        "id": 6,
        "title": "项目二 熟知金融产品营销理念及范式",
        "description": "学习金融产品营销理念和范式",
        "icon": "fa-book-open",
        "subLevels": [
            {
                "id": 6.1,
                "title": "任务1：识别营销机会与客户顺势深挖范式",
                "description": "学习识别营销机会和顺势深挖技巧",
                "knowledge": [
                    {
                        "title": "识别营销机会与客户顺势深挖范式",
                        "content": "学习如何识别营销机会，并顺势深挖客户需求",
                        "pdf": "assets/教材/《金融产品营销实务》第三版项目二任务一.pdf",
                        "points": [
                            { "title": "识别营销", "text": "从人工观察到数据触发，精准时机触达客户" },
                            { "title": "顺势深挖", "text": "从被动询问到主动预测，挖掘客户未满足的需求" },
                            { "title": "学习目标", "text": "熟悉金融产品营销理念和八大范式" }
                        ]
                    }
                ],
                "quiz": [
                    {
                        "type": "judge",
                        "question": "我已完成本任务的学习内容",
                        "options": ["已完成", "继续学习"],
                        "answer": 0,
                        "explanation": "请认真学习教材内容并完成练习"
                    }
                ]
            },
            {
                "id": 6.2,
                "title": "任务2：叠加营销与产品核心一句范式",
                "description": "学习叠加营销和产品核心一句技巧",
                "knowledge": [
                    {
                        "title": "叠加营销与产品核心一句范式",
                        "content": "学习如何通过叠加营销提升转化，用核心一句话打动客户",
                        "pdf": "assets/教材/《金融产品营销实务》第三版项目二任务二.pdf",
                        "points": [
                            { "title": "叠加营销", "text": "时机叠加、产品叠加、跨界叠加" },
                            { "title": "核心一句", "text": "产品名称+核心价值+客户利益" },
                            { "title": "学习目标", "text": "掌握叠加营销和核心一句话技巧" }
                        ]
                    }
                ],
                "quiz": [
                    {
                        "type": "judge",
                        "question": "我已完成本任务的学习内容",
                        "options": ["已完成", "继续学习"],
                        "answer": 0,
                        "explanation": "请认真学习教材内容并完成练习"
                    }
                ]
            },
            {
                "id": 6.3,
                "title": "任务3：差异营销与主权在握范式",
                "description": "学习差异营销和主权在握范式",
                "knowledge": [
                    {
                        "title": "差异营销与主权在握范式",
                        "content": "学习如何通过差异化营销掌握主动权",
                        "pdf": "assets/教材/《金融产品营销实务》第三版项目二任务三.pdf",
                        "points": [
                            { "title": "差异营销", "text": "从同质化到差异化竞争" },
                            { "title": "主权在握", "text": "主动创造营销机会，掌握主导权" },
                            { "title": "学习目标", "text": "掌握差异营销和主权在握技巧" }
                        ]
                    }
                ],
                "quiz": [
                    {
                        "type": "judge",
                        "question": "我已完成本任务的学习内容",
                        "options": ["已完成", "继续学习"],
                        "answer": 0,
                        "explanation": "请认真学习教材内容并完成练习"
                    }
                ]
            },
            {
                "id": 6.4,
                "title": "任务4：互换营销与促成结案范式",
                "description": "学习互换营销和促成结案技巧",
                "knowledge": [
                    {
                        "title": "互换营销与促成结案范式",
                        "content": "学习如何通过互换营销和促成技巧达成交易",
                        "pdf": "assets/教材/《金融产品营销实务》第三版项目二任务四.pdf",
                        "points": [
                            { "title": "互换营销", "text": "价值互换，双赢思维" },
                            { "title": "促成结案", "text": "把握时机，快速促成" },
                            { "title": "学习目标", "text": "掌握互换营销和促成结案技巧" }
                        ]
                    }
                ],
                "quiz": [
                    {
                        "type": "judge",
                        "question": "我已完成本任务的学习内容",
                        "options": ["已完成", "继续学习"],
                        "answer": 0,
                        "explanation": "请认真学习教材内容并完成练习"
                    }
                ]
            }
        ]
    },
    {
        "id": 7,
        "title": "项目三 识别客户性格差异与心理需求",
        "description": "学习客户性格差异和心理需求分析",
        "icon": "fa-book-open",
        "subLevels": [
            {
                "id": 7.1,
                "title": "任务1：客户性格差异识别",
                "description": "学习识别不同类型客户的性格",
                "knowledge": [
                    {
                        "title": "客户性格差异识别",
                        "content": "学习如何识别客户性格差异",
                        "pdf": "assets/教材/《金融产品营销实务》第三版项目三任务一.pdf",
                        "points": [
                            { "title": "性格分类", "text": "DISC、MBTI等性格分析工具" },
                            { "title": "识别要点", "text": "语言模式、行为特征、决策风格" },
                            { "title": "学习目标", "text": "掌握客户性格差异识别方法" }
                        ]
                    }
                ],
                "quiz": [
                    {
                        "type": "judge",
                        "question": "我已完成本任务的学习内容",
                        "options": ["已完成", "继续学习"],
                        "answer": 0,
                        "explanation": "请认真学习教材内容并完成练习"
                    }
                ]
            },
            {
                "id": 7.2,
                "title": "任务2：客户心理需求分析",
                "description": "学习分析客户心理需求",
                "knowledge": [
                    {
                        "title": "客户心理需求分析",
                        "content": "学习如何分析和把握客户心理需求",
                        "pdf": "assets/教材/《金融产品营销实务》第三版项目三任务二.pdf",
                        "points": [
                            { "title": "需求层次", "text": "马斯洛需求层次理论" },
                            { "title": "心理需求", "text": "安全感、成就感、归属感等" },
                            { "title": "学习目标", "text": "掌握客户心理需求分析方法" }
                        ]
                    }
                ],
                "quiz": [
                    {
                        "type": "judge",
                        "question": "我已完成本任务的学习内容",
                        "options": ["已完成", "继续学习"],
                        "answer": 0,
                        "explanation": "请认真学习教材内容并完成练习"
                    }
                ]
            },
            {
                "id": 7.3,
                "title": "任务3：客户性格与营销策略匹配",
                "description": "学习针对不同性格的营销策略",
                "knowledge": [
                    {
                        "title": "客户性格与营销策略匹配",
                        "content": "学习如何针对不同性格的客户采用不同策略",
                        "pdf": "assets/教材/《金融产品营销实务》第三版项目三任务三.pdf",
                        "points": [
                            { "title": "策略匹配", "text": "根据性格特征调整沟通方式" },
                            { "title": "个性化营销", "text": "个性化服务和产品推荐" },
                            { "title": "学习目标", "text": "掌握性格与策略匹配技巧" }
                        ]
                    }
                ],
                "quiz": [
                    {
                        "type": "judge",
                        "question": "我已完成本任务的学习内容",
                        "options": ["已完成", "继续学习"],
                        "answer": 0,
                        "explanation": "请认真学习教材内容并完成练习"
                    }
                ]
            }
        ]
    },
    {
        "id": 8,
        "title": "项目四 掌握产品呈现与价值塑造技巧",
        "description": "学习产品呈现和价值塑造",
        "icon": "fa-book-open",
        "subLevels": [
            {
                "id": 8.1,
                "title": "任务1：产品呈现技巧",
                "description": "学习如何有效呈现产品",
                "knowledge": [
                    {
                        "title": "产品呈现技巧",
                        "content": "学习如何清晰、有说服力地呈现产品",
                        "pdf": "assets/教材/《金融产品营销实务》第三版项目四任务一.pdf",
                        "points": [
                            { "title": "呈现方法", "text": "FABE法则、SPIN销售等" },
                            { "title": "演示技巧", "text": "演示、体验、案例展示" },
                            { "title": "学习目标", "text": "掌握产品呈现技巧" }
                        ]
                    }
                ],
                "quiz": [
                    {
                        "type": "judge",
                        "question": "我已完成本任务的学习内容",
                        "options": ["已完成", "继续学习"],
                        "answer": 0,
                        "explanation": "请认真学习教材内容并完成练习"
                    }
                ]
            },
            {
                "id": 8.2,
                "title": "任务2：价值塑造方法",
                "description": "学习如何塑造产品价值",
                "knowledge": [
                    {
                        "title": "价值塑造方法",
                        "content": "学习如何有效塑造产品和服务价值",
                        "pdf": "assets/教材/《金融产品营销实务》第三版项目四任务二.pdf",
                        "points": [
                            { "title": "价值定位", "text": "差异化价值定位" },
                            { "title": "价值传递", "text": "清晰、有说服力的价值传递" },
                            { "title": "学习目标", "text": "掌握价值塑造方法" }
                        ]
                    }
                ],
                "quiz": [
                    {
                        "type": "judge",
                        "question": "我已完成本任务的学习内容",
                        "options": ["已完成", "继续学习"],
                        "answer": 0,
                        "explanation": "请认真学习教材内容并完成练习"
                    }
                ]
            },
            {
                "id": 8.3,
                "title": "任务3：产品演示与体验",
                "description": "学习产品演示和客户体验",
                "knowledge": [
                    {
                        "title": "产品演示与体验",
                        "content": "学习如何通过演示和体验增强客户认知",
                        "pdf": "assets/教材/《金融产品营销实务》第三版项目四任务三.pdf",
                        "points": [
                            { "title": "演示方法", "text": "生动演示，互动体验" },
                            { "title": "客户参与", "text": "让客户参与，增强记忆" },
                            { "title": "学习目标", "text": "掌握演示和体验技巧" }
                        ]
                    }
                ],
                "quiz": [
                    {
                        "type": "judge",
                        "question": "我已完成本任务的学习内容",
                        "options": ["已完成", "继续学习"],
                        "answer": 0,
                        "explanation": "请认真学习教材内容并完成练习"
                    }
                ]
            }
        ]
    },
    {
        "id": 9,
        "title": "项目五 化解客户异议与促成交易",
        "description": "学习异议处理和促成技巧",
        "icon": "fa-book-open",
        "subLevels": [
            {
                "id": 9.1,
                "title": "任务1：客户异议识别与分类",
                "description": "学习识别和分类客户异议",
                "knowledge": [
                    {
                        "title": "客户异议识别与分类",
                        "content": "学习如何识别和分类客户异议",
                        "pdf": "assets/教材/《金融产品营销实务》第三版项目五任务一.pdf",
                        "points": [
                            { "title": "异议类型", "text": "价格、信任、需求、时机等" },
                            { "title": "深层原因", "text": "理解异议背后的真实需求" },
                            { "title": "学习目标", "text": "掌握异议识别和分类方法" }
                        ]
                    }
                ],
                "quiz": [
                    {
                        "type": "judge",
                        "question": "我已完成本任务的学习内容",
                        "options": ["已完成", "继续学习"],
                        "answer": 0,
                        "explanation": "请认真学习教材内容并完成练习"
                    }
                ]
            },
            {
                "id": 9.2,
                "title": "任务2：异议处理策略",
                "description": "学习处理客户异议的策略",
                "knowledge": [
                    {
                        "title": "异议处理策略",
                        "content": "学习如何有效处理客户异议",
                        "pdf": "assets/教材/《金融产品营销实务》第三版项目五任务二.pdf",
                        "points": [
                            { "title": "处理方法", "text": "同理心、重新定义、提供方案" },
                            { "title": "转化技巧", "text": "将异议转化为机会" },
                            { "title": "学习目标", "text": "掌握异议处理策略" }
                        ]
                    }
                ],
                "quiz": [
                    {
                        "type": "judge",
                        "question": "我已完成本任务的学习内容",
                        "options": ["已完成", "继续学习"],
                        "answer": 0,
                        "explanation": "请认真学习教材内容并完成练习"
                    }
                ]
            },
            {
                "id": 9.3,
                "title": "任务3：促成交易技巧",
                "description": "学习促成交易的技巧",
                "knowledge": [
                    {
                        "title": "促成交易技巧",
                        "content": "学习如何有效促成交易",
                        "pdf": "assets/教材/《金融产品营销实务》第三版项目五任务三.pdf",
                        "points": [
                            { "title": "促成信号", "text": "识别客户购买信号" },
                            { "title": "促成方法", "text": "假设成交、选择成交等" },
                            { "title": "学习目标", "text": "掌握促成交易技巧" }
                        ]
                    }
                ],
                "quiz": [
                    {
                        "type": "judge",
                        "question": "我已完成本任务的学习内容",
                        "options": ["已完成", "继续学习"],
                        "answer": 0,
                        "explanation": "请认真学习教材内容并完成练习"
                    }
                ]
            },
            {
                "id": 9.4,
                "title": "任务4：促成交易时机把握",
                "description": "学习把握促成交易的时机",
                "knowledge": [
                    {
                        "title": "促成交易时机把握",
                        "content": "学习如何把握促成交易的最佳时机",
                        "pdf": "assets/教材/《金融产品营销实务》第三版项目五任务四.pdf",
                        "points": [
                            { "title": "时机识别", "text": "识别最佳成交时机" },
                            { "title": "果断行动", "text": "时机成熟时果断促成" },
                            { "title": "学习目标", "text": "掌握时机把握技巧" }
                        ]
                    }
                ],
                "quiz": [
                    {
                        "type": "judge",
                        "question": "我已完成本任务的学习内容",
                        "options": ["已完成", "继续学习"],
                        "answer": 0,
                        "explanation": "请认真学习教材内容并完成练习"
                    }
                ]
            },
            {
                "id": 9.5,
                "title": "任务5：促成交易方法",
                "description": "学习各种促成交易的方法",
                "knowledge": [
                    {
                        "title": "促成交易方法",
                        "content": "学习多种促成交易的方法",
                        "pdf": "assets/教材/《金融产品营销实务》第三版项目五任务五.pdf",
                        "points": [
                            { "title": "多种方法", "text": "二选一、总结利益、限时优惠等" },
                            { "title": "灵活应用", "text": "根据情况选择合适方法" },
                            { "title": "学习目标", "text": "掌握多种促成方法" }
                        ]
                    }
                ],
                "quiz": [
                    {
                        "type": "judge",
                        "question": "我已完成本任务的学习内容",
                        "options": ["已完成", "继续学习"],
                        "answer": 0,
                        "explanation": "请认真学习教材内容并完成练习"
                    }
                ]
            },
            {
                "id": 9.6,
                "title": "任务6：促成交易话术",
                "description": "学习促成交易的有效话术",
                "knowledge": [
                    {
                        "title": "促成交易话术",
                        "content": "学习促成交易的有效话术",
                        "pdf": "assets/教材/《金融产品营销实务》第三版项目五任务六.pdf",
                        "points": [
                            { "title": "关键话术", "text": "专业、自信、有说服力的表达" },
                            { "title": "案例学习", "text": "学习成功促成的话术案例" },
                            { "title": "学习目标", "text": "掌握促成交易话术" }
                        ]
                    }
                ],
                "quiz": [
                    {
                        "type": "judge",
                        "question": "我已完成本任务的学习内容",
                        "options": ["已完成", "继续学习"],
                        "answer": 0,
                        "explanation": "请认真学习教材内容并完成练习"
                    }
                ]
            }
        ]
    },
    {
        "id": 10,
        "title": "项目六 客户关系维护与二次开发",
        "description": "学习客户关系维护和二次开发",
        "icon": "fa-book-open",
        "subLevels": [
            {
                "id": 10.1,
                "title": "任务1：客户关系维护重要性",
                "description": "了解客户关系维护的重要性",
                "knowledge": [
                    {
                        "title": "客户关系维护重要性",
                        "content": "了解客户关系维护的重要性和意义",
                        "pdf": "assets/教材/《金融产品营销实务》第三版项目六任务一.pdf",
                        "points": [
                            { "title": "长期价值", "text": "老客户的长期价值更高" },
                            { "title": "口碑效应", "text": "满意客户带来更多客户" },
                            { "title": "学习目标", "text": "认识客户关系维护的重要性" }
                        ]
                    }
                ],
                "quiz": [
                    {
                        "type": "judge",
                        "question": "我已完成本任务的学习内容",
                        "options": ["已完成", "继续学习"],
                        "answer": 0,
                        "explanation": "请认真学习教材内容并完成练习"
                    }
                ]
            },
            {
                "id": 10.2,
                "title": "任务2：客户关系维护方法",
                "description": "学习客户关系维护的方法",
                "knowledge": [
                    {
                        "title": "客户关系维护方法",
                        "content": "学习如何有效维护客户关系",
                        "pdf": "assets/教材/《金融产品营销实务》第三版项目六任务二.pdf",
                        "points": [
                            { "title": "定期沟通", "text": "保持定期联系" },
                            { "title": "增值服务", "text": "提供增值服务和关怀" },
                            { "title": "学习目标", "text": "掌握客户关系维护方法" }
                        ]
                    }
                ],
                "quiz": [
                    {
                        "type": "judge",
                        "question": "我已完成本任务的学习内容",
                        "options": ["已完成", "继续学习"],
                        "answer": 0,
                        "explanation": "请认真学习教材内容并完成练习"
                    }
                ]
            },
            {
                "id": 10.3,
                "title": "任务3：客户二次开发策略",
                "description": "学习客户二次开发策略",
                "knowledge": [
                    {
                        "title": "客户二次开发策略",
                        "content": "学习如何对现有客户进行二次开发",
                        "pdf": "assets/教材/《金融产品营销实务》第三版项目六任务三.pdf",
                        "points": [
                            { "title": "交叉销售", "text": "推荐相关产品" },
                            { "title": "升级销售", "text": "推荐更高级的产品" },
                            { "title": "学习目标", "text": "掌握客户二次开发策略" }
                        ]
                    }
                ],
                "quiz": [
                    {
                        "type": "judge",
                        "question": "我已完成本任务的学习内容",
                        "options": ["已完成", "继续学习"],
                        "answer": 0,
                        "explanation": "请认真学习教材内容并完成练习"
                    }
                ]
            }
        ]
    },
    {
        "id": 11,
        "title": "项目七 特殊客群营销技巧",
        "description": "学习针对特殊客群的营销",
        "icon": "fa-book-open",
        "subLevels": [
            {
                "id": 11.1,
                "title": "任务1：青少年客户营销",
                "description": "学习青少年客户的营销方法",
                "knowledge": [
                    {
                        "title": "青少年客户营销",
                        "content": "学习如何针对青少年客户进行营销",
                        "pdf": "assets/教材/《金融产品营销实务》（第三版）项目七任务一.pdf",
                        "points": [
                            { "title": "特点分析", "text": "青少年的消费特点和需求" },
                            { "title": "沟通方式", "text": "适合青少年的沟通方式" },
                            { "title": "学习目标", "text": "掌握青少年客户营销技巧" }
                        ]
                    }
                ],
                "quiz": [
                    {
                        "type": "judge",
                        "question": "我已完成本任务的学习内容",
                        "options": ["已完成", "继续学习"],
                        "answer": 0,
                        "explanation": "请认真学习教材内容并完成练习"
                    }
                ]
            },
            {
                "id": 11.2,
                "title": "任务2：中年客户营销",
                "description": "学习中年客户的营销方法",
                "knowledge": [
                    {
                        "title": "中年客户营销",
                        "content": "学习如何针对中年客户进行营销",
                        "pdf": "assets/教材/《金融产品营销实务》（第三版）项目七任务二.pdf",
                        "points": [
                            { "title": "特点分析", "text": "中年客户的需求和关注点" },
                            { "title": "产品推荐", "text": "适合中年客户的产品推荐" },
                            { "title": "学习目标", "text": "掌握中年客户营销技巧" }
                        ]
                    }
                ],
                "quiz": [
                    {
                        "type": "judge",
                        "question": "我已完成本任务的学习内容",
                        "options": ["已完成", "继续学习"],
                        "answer": 0,
                        "explanation": "请认真学习教材内容并完成练习"
                    }
                ]
            },
            {
                "id": 11.3,
                "title": "任务3：老年客户营销",
                "description": "学习老年客户的营销方法",
                "knowledge": [
                    {
                        "title": "老年客户营销",
                        "content": "学习如何针对老年客户进行营销",
                        "pdf": "assets/教材/《金融产品营销实务》（第三版）项目七任务三.pdf",
                        "points": [
                            { "title": "特点分析", "text": "老年客户的需求和特点" },
                            { "title": "服务重点", "text": "针对老年客户的服务重点" },
                            { "title": "学习目标", "text": "掌握老年客户营销技巧" }
                        ]
                    }
                ],
                "quiz": [
                    {
                        "type": "judge",
                        "question": "我已完成本任务的学习内容",
                        "options": ["已完成", "继续学习"],
                        "answer": 0,
                        "explanation": "请认真学习教材内容并完成练习"
                    }
                ]
            }
        ]
    },
    {
        "id": 12,
        "title": "项目八 金融产品售后服务",
        "description": "学习金融产品售后服务",
        "icon": "fa-book-open",
        "subLevels": [
            {
                "id": 12.1,
                "title": "任务1：售后服务的意义",
                "description": "了解售后服务的重要性",
                "knowledge": [
                    {
                        "title": "售后服务的意义",
                        "content": "了解售后服务的重要性和意义",
                        "pdf": "assets/教材/《金融产品营销实务》（第三版）项目八任务一.pdf",
                        "points": [
                            { "title": "客户满意度", "text": "提升客户满意度和忠诚度" },
                            { "title": "口碑传播", "text": "良好售后带来口碑传播" },
                            { "title": "学习目标", "text": "认识售后服务的重要性" }
                        ]
                    }
                ],
                "quiz": [
                    {
                        "type": "judge",
                        "question": "我已完成本任务的学习内容",
                        "options": ["已完成", "继续学习"],
                        "answer": 0,
                        "explanation": "请认真学习教材内容并完成练习"
                    }
                ]
            },
            {
                "id": 12.2,
                "title": "任务2：售后服务内容",
                "description": "学习售后服务的内容",
                "knowledge": [
                    {
                        "title": "售后服务内容",
                        "content": "学习售后服务的具体内容和方法",
                        "pdf": "assets/教材/《金融产品营销实务》（第三版）项目八任务二.pdf",
                        "points": [
                            { "title": "服务项目", "text": "跟踪回访、问题解决、持续关怀" },
                            { "title": "服务标准", "text": "建立服务标准和流程" },
                            { "title": "学习目标", "text": "掌握售后服务内容" }
                        ]
                    }
                ],
                "quiz": [
                    {
                        "type": "judge",
                        "question": "我已完成本任务的学习内容",
                        "options": ["已完成", "继续学习"],
                        "answer": 0,
                        "explanation": "请认真学习教材内容并完成练习"
                    }
                ]
            },
            {
                "id": 12.3,
                "title": "任务3：客户投诉处理",
                "description": "学习客户投诉处理",
                "knowledge": [
                    {
                        "title": "客户投诉处理",
                        "content": "学习如何有效处理客户投诉",
                        "pdf": "assets/教材/《金融产品营销实务》（第三版）项目八任务三.pdf",
                        "points": [
                            { "title": "处理原则", "text": "同理心、及时、专业" },
                            { "title": "处理流程", "text": "倾听、理解、解决、跟进" },
                            { "title": "学习目标", "text": "掌握客户投诉处理技巧" }
                        ]
                    }
                ],
                "quiz": [
                    {
                        "type": "judge",
                        "question": "我已完成本任务的学习内容",
                        "options": ["已完成", "继续学习"],
                        "answer": 0,
                        "explanation": "请认真学习教材内容并完成练习"
                    }
                ]
            }
        ]
    },
    {
        "id": 13,
        "title": "项目九 金融产品营销综合实践",
        "description": "综合实践和总结",
        "icon": "fa-book-open",
        "subLevels": [
            {
                "id": 13.1,
                "title": "任务1：综合营销案例分析",
                "description": "学习综合营销案例分析",
                "knowledge": [
                    {
                        "title": "综合营销案例分析",
                        "content": "通过案例学习综合营销方法",
                        "pdf": "assets/教材/《金融产品营销实务》第三版项目九任务一.pdf",
                        "points": [
                            { "title": "案例学习", "text": "学习成功和失败案例" },
                            { "title": "经验总结", "text": "总结经验教训" },
                            { "title": "学习目标", "text": "掌握案例分析方法" }
                        ]
                    }
                ],
                "quiz": [
                    {
                        "type": "judge",
                        "question": "我已完成本任务的学习内容",
                        "options": ["已完成", "继续学习"],
                        "answer": 0,
                        "explanation": "请认真学习教材内容并完成练习"
                    }
                ]
            },
            {
                "id": 13.2,
                "title": "任务2：营销方案策划",
                "description": "学习营销方案策划",
                "knowledge": [
                    {
                        "title": "营销方案策划",
                        "content": "学习如何策划营销方案",
                        "pdf": "assets/教材/《金融产品营销实务》第三版项目九任务二.pdf",
                        "points": [
                            { "title": "方案要素", "text": "目标、策略、执行、评估" },
                            { "title": "策划方法", "text": "系统的策划方法" },
                            { "title": "学习目标", "text": "掌握营销方案策划" }
                        ]
                    }
                ],
                "quiz": [
                    {
                        "type": "judge",
                        "question": "我已完成本任务的学习内容",
                        "options": ["已完成", "继续学习"],
                        "answer": 0,
                        "explanation": "请认真学习教材内容并完成练习"
                    }
                ]
            },
            {
                "id": 13.3,
                "title": "任务3：实战演练与总结",
                "description": "实战演练和总结",
                "knowledge": [
                    {
                        "title": "实战演练与总结",
                        "content": "进行实战演练并总结",
                        "pdf": "assets/教材/《金融产品营销实务》第三版项目九任务三.pdf",
                        "points": [
                            { "title": "实战应用", "text": "将所学应用到实际" },
                            { "title": "总结提升", "text": "总结经验，持续提升" },
                            { "title": "学习目标", "text": "完成实战演练和总结" }
                        ]
                    }
                ],
                "quiz": [
                    {
                        "type": "judge",
                        "question": "恭喜！你已完成所有项目学习！",
                        "options": ["已完成", "继续学习"],
                        "answer": 0,
                        "explanation": "恭喜你完成了所有教材内容的学习！"
                    }
                ]
            }
        ]
    }
]

# 读取原始data.js中的项目一和后缀
with open('/tmp/original_data.js', 'r', encoding='utf-8') as f:
    original_full = f.read()

# 提取后缀（勋章数据等）
medals_start = original_full.find('// 勋章数据')
medals_content = original_full[medals_start:]

# 重新构建完整的data.js
result = '// 关卡数据\nconst levelsData = [\n'

# 添加项目一（保留原样）
result += '    {\n        id: 1,\n        title: "认知金融产品与金融产品营销",\n        description: "了解金融产品的基本概念和营销基础",\n        icon: "fa-lightbulb",\n        subLevels: [\n            {\n                id: 1.1,\n                title: "金融与金融机构认知",\n                description: "学习金融的本质和金融机构分类",\n                knowledge: [\n                    {\n                        title: "金融的含义与本质",\n                        content: "金融是货币资金融通的总称，主要指与货币流通和银行信用相关的各种活动。",\n                        points: [\n                            { title: "核心内容", text: "货币的发行、投放、流通和回笼；各种存款的吸收和提取；各项贷款的发放和收回" },\n                            { title: "本质特征", text: "金融是信用交易，是价值运动的特殊形式，以偿还为条件的借贷活动" }\n                        ]\n                    },\n                    {\n                        title: "金融机构分类",\n                        content: "金融机构是专门从事金融活动的组织，包括银行类和非银行类机构。",\n                        points: [\n                            { title: "银行类机构", text: "中央银行、商业银行、政策性银行、信用合作社等" },\n                            { title: "非银行类机构", text: "证券公司、保险公司、信托投资公司、基金管理公司等" }\n                        ]\n                    }\n                ],\n                quiz: [\n                    {\n                        type: "single",\n                        question: "以下哪个不属于银行类金融机构？",\n                        options: ["商业银行", "证券公司", "中央银行", "信用合作社"],\n                        answer: 1,\n                        explanation: "证券公司属于非银行类金融机构，主要从事证券发行、交易等业务。"\n                    },\n                    {\n                        type: "single",\n                        question: "金融的本质特征是什么？",\n                        options: ["货币交易", "信用交易", "商品交换", "价值交换"],\n                        answer: 1,\n                        explanation: "金融是信用交易，是以偿还为条件的借贷活动。"\n                    }\n                ]\n            },\n            {\n                id: 1.2,\n                title: "金融产品概述",\n                description: "了解金融产品的分类和特点",\n                knowledge: [\n                    {\n                        title: "金融产品的定义",\n                        content: "金融产品是指金融机构为满足客户需求而提供的各种金融服务和工具。",\n                        points: [\n                            { title: "产品特性", text: "收益性、风险性、流动性、期限性" },\n                            { title: "产品形态", text: "实物产品、服务产品、衍生产品" }\n                        ]\n                    },\n                    {\n                        title: "金融产品分类",\n                        content: "金融产品可以按照不同标准进行分类，常见的有按风险等级、收益类型、期限等分类方式。",\n                        points: [\n                            { title: "按风险等级", text: "低风险产品、中风险产品、高风险产品" },\n                            { title: "按收益类型", text: "固定收益产品、浮动收益产品、保本产品" }\n                        ]\n                    }\n                ],\n                quiz: [\n                    {\n                        type: "single",\n                        question: "金融产品的四大特性不包括以下哪项？",\n                        options: ["收益性", "风险性", "流动性", "安全性"],\n                        answer: 3,\n                        explanation: "金融产品的四大特性是收益性、风险性、流动性和期限性。"\n                    }\n                ]\n            }\n        ]\n    },'

# 添加精简后的项目二到项目九
for project in projects:
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
            result += f'                        content: "{knowledge["content"]}",\n'
            result += f'                        pdf: "{knowledge["pdf"]}",\n'
            result += '                        points: [\n'
            
            for point in knowledge['points']:
                result += '                            {\n'
                result += f'                                title: "{point["title"]}",\n'
                result += f'                                text: "{point["text"]}"\n'
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

# 移除最后一个逗号并闭合
result = result.rstrip(',') + '\n];\n'

# 添加后缀
result += medals_content

# 写回文件
with open('/workspace/js/data.js', 'w', encoding='utf-8') as f:
    f.write(result)

print("内容精简完成！")
