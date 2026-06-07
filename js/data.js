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
                    },
                    {
                        title: "金融机构分类",
                        content: "金融机构是专门从事金融活动的组织，包括银行类和非银行类机构。",
                        points: [
                            { title: "银行类机构", text: "中央银行、商业银行、政策性银行、信用合作社等" },
                            { title: "非银行类机构", text: "证券公司、保险公司、信托投资公司、基金管理公司等" }
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
                    },
                    {
                        type: "judge",
                        question: "证券公司属于银行类金融机构。",
                        options: ["正确", "错误"],
                        answer: 1,
                        explanation: "证券公司属于非银行类金融机构。"
                    }
                ]
            },
            {
                id: 1.2,
                title: "金融产品的层次与特征",
                description: "掌握金融产品的三个层次和七大特征",
                knowledge: [
                    {
                        title: "金融产品的三个层次",
                        content: "金融产品是指资金融通过程中的各种载体，包括三个主要层次。",
                        points: [
                            { title: "核心产品", text: "客户真正需要的基本服务或利益，即安全和收益" },
                            { title: "形式产品", text: "核心产品的载体，包括产品的质量、品牌、特点、包装等" },
                            { title: "延伸产品", text: "客户购买金融产品时获得的附加服务和利益" }
                        ]
                    },
                    {
                        title: "金融产品的特征",
                        content: "金融产品具有无形性、不可分割性、同质性、易模仿性、风险性、收益性和增值性等特征。",
                        points: [
                            { title: "无形性", text: "金融产品是无形的服务，客户只能通过体验感知" },
                            { title: "同质性", text: "不同金融机构提供的同类产品差异不大" }
                        ]
                    }
                ],
                quiz: [
                    {
                        type: "single",
                        question: "金融产品的核心产品是指：",
                        options: ["合同文本", "安全和收益", "品牌形象", "附加服务"],
                        answer: 1,
                        explanation: "核心产品是客户真正需要的基本服务或利益，对金融产品来说就是安全和收益。"
                    },
                    {
                        type: "judge",
                        question: "金融产品是有形的，客户可以看到具体的产品形态。",
                        options: ["正确", "错误"],
                        answer: 1,
                        explanation: "金融产品是无形的服务，客户只能看到合同或凭证。"
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
                        content: "PESTEL是分析宏观环境的常用工具，包括六大因素，全面分析企业所处的外部环境。",
                        points: [
                            { title: "政治(Political)", text: "政治体制、政府政策、政治稳定性、国际关系、政府管制等" },
                            { title: "经济(Economic)", text: "经济增长、利率、汇率、通货膨胀、可支配收入、经济周期等" },
                            { title: "社会(Social)", text: "人口结构、文化传统、生活方式、消费习惯、价值观念、教育水平等" },
                            { title: "技术(Technological)", text: "新技术、新材料、新工艺的发展和应用，互联网、大数据、AI等" },
                            { title: "环境(Environmental)", text: "自然环境、环保法规、可持续发展、气候变化等" },
                            { title: "法律(Legal)", text: "法律法规、监管政策、行业规范、知识产权保护等" }
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
                    },
                    {
                        type: "select-matching",
                        question: "请将PESTEL因素与对应的内容匹配：",
                        options: [
                            { left: "政治", right: "政府政策、政治稳定性" },
                            { left: "社会", right: "人口结构、文化传统" },
                            { left: "技术", right: "互联网、大数据、AI" },
                            { left: "法律", right: "法律法规、监管政策" }
                        ],
                        explanation: "PESTEL各因素的典型内容。"
                    }
                ]
            },
            {
                id: 2.2,
                title: "微观环境分析(波特五力)",
                description: "运用波特五力模型分析行业竞争环境",
                knowledge: [
                    {
                        title: "波特五力模型",
                        content: "波特五力模型由迈克尔·波特提出，用于分析行业竞争环境，包括五大竞争力量。",
                        points: [
                            { title: "同行业竞争者", text: "现有企业之间的竞争程度、市场份额、产品差异化等" },
                            { title: "潜在新进入者", text: "新企业进入行业的门槛、规模经济、品牌忠诚度等" },
                            { title: "替代品威胁", text: "替代产品的价格、性能、转换成本等" },
                            { title: "供应商议价能力", text: "供应商的集中度、重要性、转换成本等" },
                            { title: "购买者议价能力", text: "购买者的数量、集中度、价格敏感度等" }
                        ]
                    }
                ],
                quiz: [
                    {
                        type: "single",
                        question: "波特五力模型不包括以下哪一项：",
                        options: ["同行业竞争者", "政府政策", "潜在新进入者", "替代品威胁"],
                        answer: 1,
                        explanation: "政府政策属于PESTEL分析中的政治因素，不属于波特五力。"
                    },
                    {
                        type: "select-matching",
                        question: "请将五力与对应的含义匹配：",
                        options: [
                            { left: "同行业竞争者", right: "现有企业之间的竞争程度" },
                            { left: "潜在新进入者", right: "新企业进入行业的门槛" },
                            { left: "替代品威胁", right: "替代产品的价格、性能" },
                            { left: "购买者议价能力", right: "购买者的价格敏感度" }
                        ],
                        explanation: "波特五力模型的标准定义。"
                    }
                ]
            },
            {
                id: 2.3,
                title: "SWOT分析与战略选择",
                description: "运用SWOT分析进行战略规划",
                knowledge: [
                    {
                        title: "SWOT矩阵",
                        content: "SWOT分析包括优势、劣势、机会、威胁四个方面，是制定战略的重要工具。",
                        points: [
                            { title: "优势(Strengths)", text: "企业内部的优势和核心竞争力，如品牌、技术、资金等" },
                            { title: "劣势(Weaknesses)", text: "企业内部的不足和需要改进的地方" },
                            { title: "机会(Opportunities)", text: "外部环境中对企业有利的因素" },
                            { title: "威胁(Threats)", text: "外部环境中对企业不利的因素" }
                        ]
                    },
                    {
                        title: "SWOT战略选择",
                        content: "根据SWOT分析结果，可以选择四种不同的战略方向。",
                        points: [
                            { title: "SO战略", text: "利用优势，抓住机会（增长型战略）" },
                            { title: "ST战略", text: "利用优势，规避威胁（多元化战略）" },
                            { title: "WO战略", text: "克服劣势，抓住机会（扭转型战略）" },
                            { title: "WT战略", text: "克服劣势，规避威胁（防御型战略）" }
                        ]
                    }
                ],
                quiz: [
                    {
                        type: "select-matching",
                        question: "请将SWOT分析要素与对应的含义匹配：",
                        options: [
                            { left: "优势", right: "企业内部的优势和核心竞争力" },
                            { left: "劣势", right: "企业内部的不足和需要改进的地方" },
                            { left: "机会", right: "外部环境中对企业有利的因素" },
                            { left: "威胁", right: "外部环境中对企业不利的因素" }
                        ],
                        explanation: "SWOT分析的标准定义。"
                    },
                    {
                        type: "single",
                        question: "SWOT分析中的O代表：",
                        options: ["优势", "劣势", "机会", "威胁"],
                        answer: 2,
                        explanation: "SWOT中的O代表Opportunities，即机会。"
                    },
                    {
                        type: "single",
                        question: "SO战略是指：",
                        options: ["利用优势，抓住机会", "利用优势，规避威胁", "克服劣势，抓住机会", "克服劣势，规避威胁"],
                        answer: 0,
                        explanation: "SO战略是利用优势，抓住机会的增长型战略。"
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
                            { title: "竞争优势", text: "发现市场机会，建立竞争优势" },
                            { title: "资源优化", text: "合理配置企业资源，提高效率" },
                            { title: "客户满意", text: "提供更符合客户需要的产品和服务" }
                        ]
                    },
                    {
                        title: "市场细分标准",
                        content: "金融市场细分的主要标准包括人口、地理、心理和行为等四大类。",
                        points: [
                            { title: "人口细分", text: "年龄、性别、收入、职业、教育程度、家庭生命周期等" },
                            { title: "地理细分", text: "地区、城市规模、人口密度、气候等" },
                            { title: "心理细分", text: "生活方式、个性、价值观、社会阶层等" },
                            { title: "行为细分", text: "购买时机、追求利益、使用频率、品牌忠诚度等" }
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
                    },
                    {
                        type: "single",
                        question: "按年龄、收入、职业划分市场属于：",
                        options: ["人口细分", "地理细分", "心理细分", "行为细分"],
                        answer: 0,
                        explanation: "年龄、收入、职业属于人口细分标准。"
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
                        content: "企业在市场细分后选择目标市场的策略，主要有三种。",
                        points: [
                            { title: "无差异策略", text: "忽略差异，向整个市场提供单一产品，成本低但难以满足个性化需求" },
                            { title: "差异策略", text: "选择多个细分市场，为每个市场设计不同产品，满足不同需求但成本高" },
                            { title: "集中策略", text: "集中力量于一个或少数几个细分市场，深入了解需求但风险较高" }
                        ]
                    }
                ],
                quiz: [
                    {
                        type: "select-matching",
                        question: "请将目标市场策略与对应的含义匹配：",
                        options: [
                            { left: "无差异策略", right: "忽略差异，向整个市场提供单一产品" },
                            { left: "差异策略", right: "选择多个细分市场，为每个市场设计不同产品" },
                            { left: "集中策略", right: "集中力量于一个或少数几个细分市场" }
                        ],
                        explanation: "三种目标市场策略的定义。"
                    },
                    {
                        type: "single",
                        question: "以下哪种策略适合资源有限的中小企业：",
                        options: ["无差异策略", "差异策略", "集中策略", "以上都不是"],
                        answer: 2,
                        explanation: "集中策略适合资源有限的企业，可以集中力量在特定市场。"
                    }
                ]
            },
            {
                id: 3.3,
                title: "市场定位",
                description: "掌握市场定位的方法和策略",
                knowledge: [
                    {
                        title: "市场定位的意义",
                        content: "市场定位是为产品在目标顾客心目中确立独特位置的过程。",
                        points: [
                            { title: "差异化", text: "与竞争对手区别开来，形成独特形象" },
                            { title: "价值传递", text: "向目标顾客传递独特价值，明确核心利益" },
                            { title: "竞争优势", text: "建立独特的竞争优势，提高客户忠诚度" }
                        ]
                    },
                    {
                        title: "市场定位策略",
                        content: "常见的市场定位策略包括：功能定位、利益定位、质量定位、价格定位等。",
                        points: [
                            { title: "功能定位", text: "强调产品的独特功能和特性" },
                            { title: "利益定位", text: "强调产品能为客户带来的利益和价值" },
                            { title: "质量定位", text: "强调产品的高品质和可靠性" },
                            { title: "价格定位", text: "强调产品的性价比或高端价格" }
                        ]
                    }
                ],
                quiz: [
                    {
                        type: "single",
                        question: "市场定位的核心目的是：",
                        options: ["降低成本", "与竞争对手区别开来", "扩大市场份额", "提高知名度"],
                        answer: 1,
                        explanation: "市场定位的核心是与竞争对手区别开来，建立独特的市场地位。"
                    },
                    {
                        type: "judge",
                        question: "市场定位就是要在产品上做到最好，价格最低。",
                        options: ["正确", "错误"],
                        answer: 1,
                        explanation: "市场定位是建立独特的市场位置，不一定是最好或最低，关键是差异化。"
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
                        content: "金融产品也有生命周期，分为四个阶段，每个阶段有不同的特点和策略。",
                        points: [
                            { title: "导入期", text: "新产品推出，销售增长缓慢，成本高，利润低甚至亏损" },
                            { title: "成长期", text: "产品被市场接受，销售快速增长，利润上升，竞争者增多" },
                            { title: "成熟期", text: "销售达到高峰，增长放缓，利润稳定，竞争激烈" },
                            { title: "衰退期", text: "销售下降，利润减少，需要考虑产品更新或退出" }
                        ]
                    },
                    {
                        title: "产品组合策略",
                        content: "产品组合包括产品线和产品项目，需要根据市场需求进行优化。",
                        points: [
                            { title: "产品线延伸", text: "向上延伸（高端）、向下延伸（大众）或双向延伸" },
                            { title: "产品线扩充", text: "在现有产品线内增加新的产品项目" }
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
                    },
                    {
                        type: "multiple",
                        question: "在产品成长期的特征是：（多选）",
                        options: ["销售增长缓慢", "销售快速增长", "利润持续上升", "竞争激烈"],
                        answer: [1, 2],
                        explanation: "成长期的特征是销售快速增长，利润持续上升。"
                    },
                    {
                        type: "single",
                        question: "在产品成熟期，企业应该采取：",
                        options: ["快速渗透", "市场改进、产品改进", "保持或收割", "快速退出"],
                        answer: 1,
                        explanation: "成熟期应采取市场改进、产品改进或营销组合改进策略。"
                    }
                ]
            },
            {
                id: 4.2,
                title: "价格策略",
                description: "学习金融产品定价方法和策略",
                knowledge: [
                    {
                        title: "定价基础",
                        content: "金融产品定价要考虑成本、需求、竞争等多方面因素。",
                        points: [
                            { title: "成本导向", text: "以成本为基础定价，加上预期利润，简单但不够灵活" },
                            { title: "需求导向", text: "以客户需求为基础定价，根据客户感知价值定价" },
                            { title: "竞争导向", text: "以竞争对手价格为参考定价，随市场变化调整" }
                        ]
                    },
                    {
                        title: "定价策略",
                        content: "常用的定价策略包括：撇脂定价、渗透定价、满意定价、折扣定价等。",
                        points: [
                            { title: "撇脂定价", text: "新产品上市时定高价，快速回收成本" },
                            { title: "渗透定价", text: "定低价，快速扩大市场份额，阻止竞争者进入" },
                            { title: "满意定价", text: "定中等价格，兼顾各方利益" }
                        ]
                    }
                ],
                quiz: [
                    {
                        type: "single",
                        question: "以下哪种不是常见的金融产品定价方法？",
                        options: ["成本导向", "需求导向", "竞争导向", "随机定价"],
                        answer: 3,
                        explanation: "金融产品定价方法包括成本导向、需求导向、竞争导向。"
                    },
                    {
                        type: "single",
                        question: "撇脂定价适合：",
                        options: ["快速扩大市场份额", "新产品快速回收成本", "价格敏感型市场", "成熟市场"],
                        answer: 1,
                        explanation: "撇脂定价是新产品上市时定高价，快速回收成本。"
                    },
                    {
                        type: "select-matching",
                        question: "请将定价方法与对应的策略匹配：",
                        options: [
                            { left: "成本导向", right: "以成本为基础定价" },
                            { left: "需求导向", right: "根据客户感知价值定价" },
                            { left: "竞争导向", right: "以竞争对手价格为参考" }
                        ],
                        explanation: "三种定价方法的定义。"
                    }
                ]
            },
            {
                id: 4.3,
                title: "渠道策略",
                description: "掌握金融产品的分销渠道选择和管理",
                knowledge: [
                    {
                        title: "分销渠道类型",
                        content: "金融产品分销渠道包括直接渠道和间接渠道两类。",
                        points: [
                            { title: "直接渠道", text: "银行网点、客户经理、网上银行、手机银行、直销团队等" },
                            { title: "间接渠道", text: "代理机构、经纪公司、销售伙伴等第三方渠道" }
                        ]
                    },
                    {
                        title: "渠道策略选择",
                        content: "需要根据产品特点、目标客户、市场环境选择合适的渠道策略。",
                        points: [
                            { title: "密集分销", text: "尽可能多的渠道覆盖，方便客户购买" },
                            { title: "选择分销", text: "选择少数优质渠道，保证服务质量" },
                            { title: "独家分销", text: "在特定区域只选择一家渠道，增强控制力" }
                        ]
                    }
                ],
                quiz: [
                    {
                        type: "single",
                        question: "以下哪种属于直接分销渠道：",
                        options: ["代理机构", "经纪公司", "网上银行", "销售伙伴"],
                        answer: 2,
                        explanation: "网上银行属于直接分销渠道。"
                    },
                    {
                        type: "multiple",
                        question: "金融产品分销渠道包括：（多选）",
                        options: ["银行网点", "网上银行", "手机银行", "代理机构"],
                        answer: [0, 1, 2, 3],
                        explanation: "以上都是金融产品的分销渠道。"
                    }
                ]
            },
            {
                id: 4.4,
                title: "促销策略",
                description: "掌握金融产品的促销组合策略",
                knowledge: [
                    {
                        title: "促销组合",
                        content: "促销组合包括广告、人员推销、营业推广、公共关系四大工具。",
                        points: [
                            { title: "广告", text: "付费的大众传播，覆盖面广，提高知名度" },
                            { title: "人员推销", text: "面对面沟通，建立关系，促成交易" },
                            { title: "营业推广", text: "短期激励，促进快速购买" },
                            { title: "公共关系", text: "建立良好企业形象，提高美誉度" }
                        ]
                    }
                ],
                quiz: [
                    {
                        type: "multiple",
                        question: "促销组合包括哪些工具？（多选）",
                        options: ["广告", "人员推销", "营业推广", "公共关系"],
                        answer: [0, 1, 2, 3],
                        explanation: "以上都是促销组合的常用工具。"
                    },
                    {
                        type: "single",
                        question: "能够建立良好企业形象，提高美誉度的促销工具是：",
                        options: ["广告", "人员推销", "营业推广", "公共关系"],
                        answer: 3,
                        explanation: "公共关系主要用于建立良好企业形象，提高美誉度。"
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
                        content: "一份完整的金融产品营销方案包括多个关键要素，需要系统规划。",
                        points: [
                            { title: "市场分析", text: "宏观环境、市场需求、竞争分析、客户分析" },
                            { title: "目标市场", text: "目标客户定位、市场细分、市场定位" },
                            { title: "营销目标", text: "销售目标、市场份额目标、品牌目标、利润目标" },
                            { title: "营销组合", text: "产品策略、价格策略、渠道策略、促销策略" },
                            { title: "实施计划", text: "时间计划、人员分工、预算分配、监控评估" }
                        ]
                    }
                ],
                quiz: [
                    {
                        type: "ordering",
                        question: "请将营销方案策划的步骤按合理顺序排列：",
                        options: ["确定营销目标", "制定营销组合", "市场分析", "目标市场选择", "实施与控制"],
                        answer: [2, 3, 0, 1, 4],
                        explanation: "营销方案策划的合理步骤：市场分析→目标市场选择→确定营销目标→制定营销组合→实施与控制。"
                    },
                    {
                        type: "single",
                        question: "营销方案的核心是：",
                        options: ["市场分析", "营销目标", "营销组合", "实施计划"],
                        answer: 2,
                        explanation: "营销组合（4P策略）是营销方案的核心内容。"
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
                        content: "运用所学知识，完成一个完整的金融产品营销方案策划，检验学习成果。",
                        points: [
                            { title: "任务一：数字信用卡营销", text: "为一款创新型数字信用卡设计完整的营销方案" },
                            { title: "任务二：养老理财产品", text: "为一款面向中老年人的养老理财产品设计营销方案" },
                            { title: "任务三：基金产品营销", text: "为一款指数基金或混合型基金设计营销推广方案" }
                        ]
                    },
                    {
                        title: "实战任务要求",
                        content: "完成实战任务需要整合之前所学的所有知识，展示综合运用能力。",
                        points: [
                            { title: "完整性", text: "方案应包含市场分析、目标市场、营销目标、营销组合、实施计划等完整内容" },
                            { title: "创新性", text: "方案应有创新点，体现独特思考" },
                            { title: "可操作性", text: "方案应具体、可执行" }
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
                    },
                    {
                        type: "multiple",
                        question: "一份好的营销方案应该具备哪些特点？（多选）",
                        options: ["完整性", "创新性", "可操作性", "追求华丽辞藻"],
                        answer: [0, 1, 2],
                        explanation: "营销方案应具备完整性、创新性和可操作性。"
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
