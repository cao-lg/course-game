// 关卡数据
const levelsData = [
    {
        id: 1,
        title: "认知金融产品与金融产品营销",
        description: "了解金融产品的基本概念和营销基础",
        icon: "fa-lightbulb",
        subLevels: [
            {
                id: 1.1,
                title: "金融与金融机构认知",
                description: "学习金融的本质和金融机构分类",
                knowledge: [
                    {
                        title: "金融的含义与本质",
                        content: "金融是货币资金融通的总称，主要指与货币流通和银行信用相关的各种活动。",
                        points: [
                            { title: "核心内容", text: "货币的发行、投放、流通和回笼；各种存款的吸收和提取；各项贷款的发放和收回" },
                            { title: "本质特征", text: "金融是信用交易，是价值运动的特殊形式，以偿还为条件的借贷活动" }
                        ]
                    }
                ],
                quiz: [
                    {
                        type: "single",
                        question: "金融的核心是：",
                        options: ["货币流通", "信用交易", "银行贷款", "股票投资"],
                        answer: 1,
                        explanation: "金融的本质是信用交易，是以偿还为条件的借贷活动。"
                    }
                ]
            }
        ]
    },
    {
        id: 2,
        title: "分析金融营销环境",
        description: "学习宏观环境、微观环境和SWOT分析方法",
        icon: "fa-search",
        subLevels: [
            {
                id: 2.1,
                title: "宏观环境分析(PESTEL)",
                description: "掌握政治法律、经济、社会、技术等环境因素",
                knowledge: [
                    {
                        title: "PESTEL分析框架",
                        content: "PESTEL是分析宏观环境的常用工具，包括六大因素。",
                        points: [
                            { title: "政治(Political)", text: "政治体制、政府政策、政治稳定性等" },
                            { title: "经济(Economic)", text: "经济增长、利率、汇率、通货膨胀、可支配收入等" }
                        ]
                    }
                ],
                quiz: [
                    {
                        type: "single",
                        question: "PESTEL分析中的T代表：",
                        options: ["时间", "技术", "人才", "税收"],
                        answer: 1,
                        explanation: "PESTEL中的T代表Technological，即技术因素。"
                    },
                    {
                        type: "multiple",
                        question: "以下哪些属于PESTEL分析中的经济因素？（多选）",
                        options: ["经济增长", "政治体制", "利率", "技术进步"],
                        answer: [0, 2],
                        explanation: "经济因素包括经济增长、利率、汇率、通货膨胀等。"
                    }
                ]
            },
            {
                id: 2.2,
                title: "SWOT分析与战略选择",
                description: "运用SWOT分析进行战略规划",
                knowledge: [
                    {
                        title: "SWOT矩阵",
                        content: "SWOT分析包括优势、劣势、机会、威胁四个方面。",
                        points: [
                            { title: "优势(Strengths)", text: "企业内部的优势和核心竞争力" },
                            { title: "劣势(Weaknesses)", text: "企业内部的不足和需要改进的地方" },
                            { title: "机会(Opportunities)", text: "外部环境中对企业有利的因素" },
                            { title: "威胁(Threats)", text: "外部环境中对企业不利的因素" }
                        ]
                    }
                ],
                quiz: [
                    {
                        type: "matching",
                        question: "请将SWOT分析要素与对应的含义匹配：",
                        pairs: [
                            { left: "优势", right: "企业内部的优势和核心竞争力" },
                            { left: "劣势", right: "企业内部的不足和需要改进的地方" },
                            { left: "机会", right: "外部环境中对企业有利的因素" },
                            { left: "威胁", right: "外部环境中对企业不利的因素" }
                        ],
                        explanation: "SWOT分析的标准定义。"
                    }
                ]
            }
        ]
    },
    {
        id: 3,
        title: "金融营销目标市场策略",
        description: "学习市场细分、目标市场选择和市场定位",
        icon: "fa-bullseye",
        subLevels: [
            {
                id: 3.1,
                title: "金融市场细分",
                description: "掌握市场细分的意义和方法",
                knowledge: [
                    {
                        title: "市场细分的意义",
                        content: "市场细分是将整个市场划分为具有相似特征的消费者群体的过程。",
                        points: [
                            { title: "精准营销", text: "更好地满足不同客户群体的需求" },
                            { title: "竞争优势", text: "发现市场机会，建立竞争优势" }
                        ]
                    }
                ],
                quiz: [
                    {
                        type: "multiple",
                        question: "金融市场细分的标准包括哪些？（多选）",
                        options: ["人口细分", "地理细分", "心理细分", "行为细分"],
                        answer: [0, 1, 2, 3],
                        explanation: "以上都是金融市场细分的常用标准。"
                    }
                ]
            },
            {
                id: 3.2,
                title: "目标市场选择",
                description: "学习三种目标市场策略",
                knowledge: [
                    {
                        title: "目标市场策略",
                        content: "企业在市场细分后选择目标市场的策略。",
                        points: [
                            { title: "无差异策略", text: "忽略差异，向整个市场提供单一产品" },
                            { title: "差异策略", text: "选择多个细分市场，为每个市场设计不同产品" },
                            { title: "集中策略", text: "集中力量于一个或少数几个细分市场" }
                        ]
                    }
                ],
                quiz: [
                    {
                        type: "matching",
                        question: "请将目标市场策略与对应的含义匹配：",
                        pairs: [
                            { left: "无差异策略", right: "忽略差异，向整个市场提供单一产品" },
                            { left: "差异策略", right: "选择多个细分市场，为每个市场设计不同产品" },
                            { left: "集中策略", right: "集中力量于一个或少数几个细分市场" }
                        ],
                        explanation: "三种目标市场策略的定义。"
                    }
                ]
            }
        ]
    },
    {
        id: 4,
        title: "金融营销4P策略",
        description: "学习产品、价格、渠道、促销策略",
        icon: "fa-cubes",
        subLevels: [
            {
                id: 4.1,
                title: "产品策略",
                description: "掌握金融产品策略和品牌策略",
                knowledge: [
                    {
                        title: "产品生命周期",
                        content: "金融产品也有生命周期，分为四个阶段。",
                        points: [
                            { title: "导入期", text: "新产品推出，销售增长缓慢" },
                            { title: "成长期", text: "产品被市场接受，销售快速增长" },
                            { title: "成熟期", text: "销售达到高峰，增长放缓" },
                            { title: "衰退期", text: "销售下降，利润减少" }
                        ]
                    }
                ],
                quiz: [
                    {
                        type: "ordering",
                        question: "请将产品生命周期的四个阶段按顺序排列：",
                        options: ["成长期", "成熟期", "衰退期", "导入期"],
                        answer: [3, 0, 1, 2],
                        explanation: "产品生命周期的正确顺序是：导入期、成长期、成熟期、衰退期。"
                    }
                ]
            }
        ]
    },
    {
        id: 5,
        title: "金融营销方案策划",
        description: "综合运用所学知识进行营销方案策划",
        icon: "fa-rocket",
        subLevels: [
            {
                id: 5.1,
                title: "营销方案策划流程",
                description: "学习完整的营销方案策划步骤",
                knowledge: [
                    {
                        title: "营销方案构成",
                        content: "一份完整的金融产品营销方案包括多个关键要素。",
                        points: [
                            { title: "市场分析", text: "宏观环境、市场需求、竞争分析" },
                            { title: "目标市场", text: "目标客户定位" },
                            { title: "营销目标", text: "销售目标、市场份额目标" },
                            { title: "营销组合", text: "4P策略组合" }
                        ]
                    }
                ],
                quiz: [
                    {
                        type: "ordering",
                        question: "请将营销方案策划的步骤排序：",
                        options: ["确定营销目标", "制定营销组合", "市场分析", "目标市场选择", "实施与控制"],
                        answer: [2, 3, 0, 1, 4],
                        explanation: "营销方案策划的合理步骤顺序。"
                    }
                ]
            },
            {
                id: 5.2,
                title: "综合实战任务",
                description: "完成综合营销方案策划任务",
                isPractical: true,
                knowledge: [
                    {
                        title: "综合实战说明",
                        content: "运用所学知识，完成一个完整的金融产品营销方案策划。",
                        points: [
                            { title: "任务一", text: "数字信用卡营销策划" },
                            { title: "任务二", text: "养老理财产品策划" },
                            { title: "任务三", text: "基金产品营销策划" }
                        ]
                    }
                ],
                quiz: [
                    {
                        type: "single",
                        question: "综合实战任务主要培养什么能力？",
                        options: ["记忆力", "综合运用能力", "计算能力", "写作能力"],
                        answer: 1,
                        explanation: "综合实战任务主要培养综合运用所学知识进行营销方案策划的能力。"
                    }
                ]
            }
        ]
    }
];

// 勋章数据
const medalsData = [
    {
        id: 1,
        name: "金融入门者",
        description: "完成第一关学习",
        icon: "fa-award",
        requirement: { type: "level", level: 1 }
    },
    {
        id: 2,
        name: "环境分析师",
        description: "完成第二关学习",
        icon: "fa-certificate",
        requirement: { type: "level", level: 2 }
    },
    {
        id: 3,
        name: "市场定位专家",
        description: "完成第三关学习",
        icon: "fa-bullseye",
        requirement: { type: "level", level: 3 }
    },
    {
        id: 4,
        name: "4P策略大师",
        description: "完成第四关学习",
        icon: "fa-cubes",
        requirement: { type: "level", level: 4 }
    },
    {
        id: 5,
        name: "营销策划师",
        description: "完成第五关学习",
        icon: "fa-rocket",
        requirement: { type: "level", level: 5 }
    },
    {
        id: 6,
        name: "答题能手",
        description: "累计答对50题",
        icon: "fa-fire",
        requirement: { type: "correct", count: 50 }
    },
    {
        id: 7,
        name: "完美主义者",
        description: "任意关卡获得3星评价",
        icon: "fa-star",
        requirement: { type: "stars", count: 3 }
    },
    {
        id: 8,
        name: "全能选手",
        description: "解锁所有勋章",
        icon: "fa-trophy",
        requirement: { type: "allMedals" }
    }
];

// 等级数据
const ranksData = [
    { name: "营销实习生", minPoints: 0, icon: "fa-user" },
    { name: "营销专员", minPoints: 500, icon: "fa-user-tie" },
    { name: "营销主管", minPoints: 2000, icon: "fa-users-cog" },
    { name: "营销经理", minPoints: 5000, icon: "fa-user-graduate" },
    { name: "营销总监", minPoints: 10000, icon: "fa-crown" }
];
