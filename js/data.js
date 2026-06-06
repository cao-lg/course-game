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
                        content: "金融机构是专门从事金融活动的组织，包括银行、证券公司、保险公司等。",
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
                        type: "single",
                        question: "以下哪项属于银行类金融机构？",
                        options: ["证券公司", "保险公司", "政策性银行", "基金公司"],
                        answer: 2,
                        explanation: "银行类金融机构包括中央银行、商业银行、政策性银行等，其他选项属于非银行类金融机构。"
                    },
                    {
                        type: "judge",
                        question: "金融活动只涉及货币资金的借贷。",
                        options: ["正确", "错误"],
                        answer: 1,
                        explanation: "金融活动不仅包括借贷，还包括货币发行、流通、存款、贷款、投资、保险等多种活动。"
                    },
                    {
                        type: "single",
                        question: "金融机构的基本功能是：",
                        options: ["创造货币", "信用中介", "发行股票", "销售保险"],
                        answer: 1,
                        explanation: "金融机构最基本的功能是作为信用中介，实现资金从盈余者向需求者的转移。"
                    },
                    {
                        type: "judge",
                        question: "中央银行也是商业银行的一种。",
                        options: ["正确", "错误"],
                        answer: 1,
                        explanation: "中央银行是特殊的金融机构，它是发行的银行、银行的银行、政府的银行，不是商业银行。"
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
                        content: "金融产品是指资金融通过程中的各种载体，包括货币、黄金、外汇、有价证券等。",
                        points: [
                            { title: "核心产品", text: "客户真正需要的基本服务或利益，即安全和收益" },
                            { title: "形式产品", text: "核心产品的载体，包括产品的质量、品牌、特点、包装等" },
                            { title: "延伸产品", text: "客户购买金融产品时获得的附加服务和利益" }
                        ]
                    },
                    {
                        title: "金融产品的七大特征",
                        content: "金融产品具有与一般产品不同的特点，这些特点决定了金融营销的特殊性。",
                        points: [
                            { title: "无形性", text: "金融产品是无形的服务，客户只能看到合同或凭证" },
                            { title: "不可分性", text: "金融产品的生产和消费往往同时进行" },
                            { title: "异质性", text: "同一金融产品不同提供者提供的服务质量可能差异很大" },
                            { title: "易模仿性", text: "金融产品容易被竞争对手模仿" }
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
                        explanation: "金融产品是无形的服务，客户只能看到合同或凭证，而不是产品本身的物质形态。"
                    },
                    {
                        type: "single",
                        question: "金融产品的易模仿性意味着：",
                        options: ["金融产品容易生产", "竞争对手容易复制产品", "金融产品容易理解", "金融产品容易销售"],
                        answer: 1,
                        explanation: "金融产品的易模仿性是指竞争对手容易复制和模仿产品设计和功能，这要求金融机构不断创新。"
                    },
                    {
                        type: "judge",
                        question: "金融产品的生产和消费可以分开进行。",
                        options: ["正确", "错误"],
                        answer: 1,
                        explanation: "金融产品具有不可分性，其生产和消费往往同时进行，客户参与服务过程。"
                    },
                    {
                        type: "single",
                        question: "以下哪项属于金融产品的延伸产品层次？",
                        options: ["利息收入", "银行卡", "理财咨询服务", "资金安全"],
                        answer: 2,
                        explanation: "延伸产品是客户购买金融产品时获得的附加服务和利益，如咨询服务、售后服务等。"
                    }
                ]
            },
            {
                id: 1.3,
                title: "金融产品营销基础",
                description: "学习营销理念的演变和营销人员职业素养",
                knowledge: [
                    {
                        title: "营销理念的演变",
                        content: "营销理念从生产导向、产品导向、推销导向发展到营销导向和社会营销导向。",
                        points: [
                            { title: "4P理论", text: "产品(Product)、价格(Price)、渠道(Place)、促销(Promotion)" },
                            { title: "4C理论", text: "消费者(Consumer)、成本(Cost)、便利(Convenience)、沟通(Communication)" },
                            { title: "7P理论", text: "在4P基础上增加人员(People)、过程(Process)、有形展示(Physical Evidence)" },
                            { title: "4E理论", text: "体验(Experience)、花费(Expense)、电铺(E-shop)、展现(Exhibition)" }
                        ]
                    },
                    {
                        title: "金融产品营销特征",
                        content: "金融产品营销具有与一般产品营销不同的特征。",
                        points: [
                            { title: "专业性强", text: "金融产品复杂，需要营销人员具备专业知识" },
                            { title: "风险性大", text: "金融产品涉及资金安全，营销时需充分揭示风险" },
                            { title: "注重关系", text: "金融营销注重建立长期客户关系" },
                            { title: "合规性强", text: "受严格监管，营销活动必须合规" }
                        ]
                    },
                    {
                        title: "营销人员职业素养",
                        content: "金融营销人员需要具备多方面的职业素养。",
                        points: [
                            { title: "品德修养", text: "诚实守信、廉洁自律、保密意识" },
                            { title: "专业素养", text: "金融知识、产品知识、营销知识" },
                            { title: "服务意识", text: "客户至上、主动服务、细节服务" },
                            { title: "心理素质", text: "抗压能力、沟通能力、学习能力" }
                        ]
                    }
                ],
                quiz: [
                    {
                        type: "single",
                        question: "4P理论中的四个P不包括：",
                        options: ["产品", "价格", "顾客", "促销"],
                        answer: 2,
                        explanation: "4P理论包括产品(Product)、价格(Price)、渠道(Place)、促销(Promotion)，顾客是4C理论中的内容。"
                    },
                    {
                        type: "single",
                        question: "金融产品营销的突出特征是：",
                        options: ["成本低廉", "专业性强", "利润丰厚", "销售简单"],
                        answer: 1,
                        explanation: "金融产品复杂，涉及专业知识，因此营销的专业性强是突出特征。"
                    },
                    {
                        type: "judge",
                        question: "金融营销人员最重要的是销售技巧，专业知识是次要的。",
                        options: ["正确", "错误"],
                        answer: 1,
                        explanation: "金融营销人员需要具备专业素养，包括金融知识、产品知识和营销知识，专业知识是基础。"
                    },
                    {
                        type: "single",
                        question: "在营销理念中，强调以消费者需求为中心的是：",
                        options: ["生产导向", "产品导向", "推销导向", "营销导向"],
                        answer: 3,
                        explanation: "营销导向强调以消费者需求为中心，通过满足消费者需求来实现企业目标。"
                    },
                    {
                        type: "judge",
                        question: "7P理论是在4P基础上增加了人员、过程和有形展示。",
                        options: ["正确", "错误"],
                        answer: 0,
                        explanation: "7P理论在传统4P基础上，针对服务营销增加了人员(People)、过程(Process)和有形展示(Physical Evidence)。"
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
                            { title: "经济(Economic)", text: "经济增长、利率、汇率、通货膨胀、可支配收入等" },
                            { title: "社会(Social)", text: "人口结构、文化传统、生活方式、消费习惯等" },
                            { title: "技术(Technological)", text: "新技术、新材料、新工艺的发展和应用" }
                        ]
                    },
                    {
                        title: "环境与法律因素",
                        content: "PESTEL还包括环境和法律因素。",
                        points: [
                            { title: "环境(Environmental)", text: "环保要求、可持续发展、气候变化等" },
                            { title: "法律(Legal)", text: "法律法规、监管政策、行业规范等" }
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
                        type: "judge",
                        question: "经济环境因素只包括GDP增长率。",
                        options: ["正确", "错误"],
                        answer: 1,
                        explanation: "经济环境因素包括经济增长、利率、汇率、通货膨胀、可支配收入等多个方面。"
                    },
                    {
                        type: "single",
                        question: "人口老龄化属于哪类环境因素？",
                        options: ["政治", "经济", "社会", "技术"],
                        answer: 2,
                        explanation: "人口结构变化属于社会(Social)环境因素。"
                    },
                    {
                        type: "judge",
                        question: "监管政策变化属于法律环境因素。",
                        options: ["正确", "错误"],
                        answer: 0,
                        explanation: "法律法规、监管政策、行业规范等都属于法律(Legal)环境因素。"
                    },
                    {
                        type: "single",
                        question: "互联网金融的发展主要受到哪类环境因素影响？",
                        options: ["政治", "经济", "技术", "环境"],
                        answer: 2,
                        explanation: "互联网技术的发展属于技术(Technological)环境因素。"
                    }
                ]
            },
            {
                id: 2.2,
                title: "微观环境分析(波特五力)",
                description: "学习行业竞争环境分析的五种力量",
                knowledge: [
                    {
                        title: "波特五力模型",
                        content: "波特五力是分析行业竞争环境的经典框架。",
                        points: [
                            { title: "现有竞争者", text: "行业内现有企业的数量、规模、竞争程度" },
                            { title: "潜在进入者", text: "新进入者的威胁，取决于进入壁垒" },
                            { title: "替代品威胁", text: "其他行业产品可能替代本行业产品" },
                            { title: "供应商议价能力", text: "供应商提高价格或降低质量的能力" },
                            { title: "购买者议价能力", text: "购买者压价或要求更高质量的能力" }
                        ]
                    }
                ],
                quiz: [
                    {
                        type: "single",
                        question: "波特五力模型不包括：",
                        options: ["现有竞争者", "政策制定者", "潜在进入者", "替代品"],
                        answer: 1,
                        explanation: "波特五力包括现有竞争者、潜在进入者、替代品威胁、供应商议价能力和购买者议价能力。"
                    },
                    {
                        type: "judge",
                        question: "进入壁垒越高，潜在进入者的威胁越大。",
                        options: ["正确", "错误"],
                        answer: 1,
                        explanation: "进入壁垒越高，潜在进入者越难进入，威胁越小。"
                    },
                    {
                        type: "single",
                        question: "如果购买者数量少但购买量大，购买者议价能力会：",
                        options: ["更强", "更弱", "不变", "不确定"],
                        answer: 0,
                        explanation: "购买者集中且购买量大时，议价能力更强。"
                    },
                    {
                        type: "judge",
                        question: "替代品越多，行业竞争程度越低。",
                        options: ["正确", "错误"],
                        answer: 1,
                        explanation: "替代品越多，客户选择越多，行业竞争程度越高。"
                    },
                    {
                        type: "single",
                        question: "供应商的产品差异化程度高，其议价能力会：",
                        options: ["增强", "减弱", "不变", "先强后弱"],
                        answer: 0,
                        explanation: "供应商产品差异化高，难以替代，议价能力增强。"
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
                        content: "SWOT分析包括优势、劣势、机会、威胁四个方面。",
                        points: [
                            { title: "优势(Strengths)", text: "企业内部的优势和核心竞争力" },
                            { title: "劣势(Weaknesses)", text: "企业内部的不足和需要改进的地方" },
                            { title: "机会(Opportunities)", text: "外部环境中对企业有利的因素" },
                            { title: "威胁(Threats)", text: "外部环境中对企业不利的因素" }
                        ]
                    },
                    {
                        title: "SWOT战略选择",
                        content: "根据SWOT分析可以制定四种战略。",
                        points: [
                            { title: "SO战略", text: "发挥优势，抓住机会（增长型战略）" },
                            { title: "ST战略", text: "发挥优势，规避威胁（多种经营战略）" },
                            { title: "WO战略", text: "克服劣势，利用机会（扭转型战略）" },
                            { title: "WT战略", text: "减少劣势，回避威胁（防御型战略）" }
                        ]
                    }
                ],
                quiz: [
                    {
                        type: "single",
                        question: "SWOT分析中的O代表：",
                        options: ["优势", "劣势", "机会", "威胁"],
                        answer: 2,
                        explanation: "SWOT中的O代表Opportunities，即机会。"
                    },
                    {
                        type: "judge",
                        question: "SWOT分析中的优势和劣势是外部环境因素。",
                        options: ["正确", "错误"],
                        answer: 1,
                        explanation: "优势和劣势是内部因素，机会和威胁是外部因素。"
                    },
                    {
                        type: "single",
                        question: "SO战略是指：",
                        options: ["发挥优势，抓住机会", "发挥优势，规避威胁", "克服劣势，利用机会", "减少劣势，回避威胁"],
                        answer: 0,
                        explanation: "SO战略是发挥内部优势，抓住外部机会的增长型战略。"
                    },
                    {
                        type: "judge",
                        question: "WT战略是一种防御型战略。",
                        options: ["正确", "错误"],
                        answer: 0,
                        explanation: "WT战略是减少劣势，回避威胁的防御型战略。"
                    },
                    {
                        type: "single",
                        question: "如果企业有明显劣势但外部有机会，应采取：",
                        options: ["SO战略", "ST战略", "WO战略", "WT战略"],
                        answer: 2,
                        explanation: "WO战略是克服劣势，利用机会的扭转型战略。"
                    }
                ]
            }
        ]
    },
    {
        id: 3,
        title: "开展金融营销的市场调研",
        description: "学习市场调研方案设计、问卷设计和调研报告撰写",
        icon: "fa-chart-bar",
        subLevels: [
            {
                id: 3.1,
                title: "市场调研方案设计",
                description: "学习调研方案的主要内容和调研流程",
                knowledge: [
                    {
                        title: "市场调研的重要性",
                        content: "市场调研是金融营销决策的基础，通过系统收集和分析市场信息，为决策提供依据。",
                        points: [
                            { title: "了解市场", text: "了解市场需求、竞争状况、客户偏好" },
                            { title: "发现机会", text: "发现市场机会和新的业务增长点" },
                            { title: "规避风险", text: "识别市场风险，避免决策失误" },
                            { title: "改善营销", text: "优化产品设计、定价、渠道和促销策略" }
                        ]
                    },
                    {
                        title: "调研方案主要内容",
                        content: "一份完整的市场调研方案应包括以下内容。",
                        points: [
                            { title: "调研目的", text: "明确调研要解决的问题和目标" },
                            { title: "调研内容", text: "确定需要收集的具体信息" },
                            { title: "调研对象", text: "确定调查的人群或单位" },
                            { title: "调研方法", text: "选择合适的调研方式：文案调研、实地调研等" },
                            { title: "调研进度", text: "安排调研的时间节点和进度" },
                            { title: "经费预算", text: "估算调研所需的各项费用" }
                        ]
                    },
                    {
                        title: "市场调研流程",
                        content: "市场调研一般分为五个阶段。",
                        points: [
                            { title: "准备阶段", text: "确定调研问题，制定调研方案" },
                            { title: "设计阶段", text: "设计问卷、抽样方案" },
                            { title: "收集阶段", text: "实施调研，收集数据" },
                            { title: "分析阶段", text: "整理和分析数据" },
                            { title: "报告阶段", text: "撰写调研报告，汇报结果" }
                        ]
                    }
                ],
                quiz: [
                    {
                        type: "single",
                        question: "市场调研的第一步是：",
                        options: ["设计问卷", "确定调研问题", "收集数据", "分析数据"],
                        answer: 1,
                        explanation: "市场调研的第一步是准备阶段，需要确定调研问题，制定调研方案。"
                    },
                    {
                        type: "judge",
                        question: "市场调研只需要收集数据，不需要事先明确目的。",
                        options: ["正确", "错误"],
                        answer: 1,
                        explanation: "明确调研目的是调研方案的首要内容，所有调研活动都应围绕目的展开。"
                    },
                    {
                        type: "single",
                        question: "以下哪项不属于调研方案的主要内容？",
                        options: ["调研目的", "调研内容", "调研结果", "经费预算"],
                        answer: 2,
                        explanation: "调研结果是调研后获得的，不是调研方案的内容。"
                    },
                    {
                        type: "judge",
                        question: "调研对象是指需要调查的人群或单位。",
                        options: ["正确", "错误"],
                        answer: 0,
                        explanation: "调研对象就是确定要向谁调查，即调查的人群或单位。"
                    },
                    {
                        type: "single",
                        question: "调研的最后一个阶段是：",
                        options: ["收集阶段", "分析阶段", "报告阶段", "设计阶段"],
                        answer: 2,
                        explanation: "调研的最后阶段是报告阶段，需要撰写调研报告，汇报结果。"
                    }
                ]
            },
            {
                id: 3.2,
                title: "调查问卷设计",
                description: "掌握问卷设计原则、结构和问题类型",
                knowledge: [
                    {
                        title: "问卷设计原则",
                        content: "好的问卷是调研成功的关键，设计时应遵循以下原则。",
                        points: [
                            { title: "明确性", text: "问题清晰易懂，避免歧义" },
                            { title: "简洁性", text: "问题简洁，避免冗长" },
                            { title: "客观性", text: "避免引导性问题" },
                            { title: "逻辑性", text: "问题排列有逻辑顺序" },
                            { title: "完整性", text: "覆盖所有需要了解的内容" },
                            { title: "可接受性", text: "问题不涉及隐私，易于回答" }
                        ]
                    },
                    {
                        title: "问卷结构",
                        content: "问卷一般包括开头、主体和结尾三个部分。",
                        points: [
                            { title: "开头部分", text: "问候语、调研说明、填写说明" },
                            { title: "主体部分", text: "问题和选项，是问卷的核心" },
                            { title: "结尾部分", text: "感谢语、被访者信息等" }
                        ]
                    },
                    {
                        title: "问题类型",
                        content: "问卷问题有多种类型，各有优缺点。",
                        points: [
                            { title: "开放式问题", text: "自由回答，获取深层次信息，但难量化" },
                            { title: "封闭式问题", text: "固定选项，易回答和统计，但限制表达" },
                            { title: "量表问题", text: "用量表衡量态度，如满意度、同意程度" }
                        ]
                    }
                ],
                quiz: [
                    {
                        type: "single",
                        question: "问卷设计的首要原则是：",
                        options: ["美观", "明确性", "字数多", "复杂"],
                        answer: 1,
                        explanation: "问卷问题首先要清晰易懂，避免歧义，明确性是首要原则。"
                    },
                    {
                        type: "judge",
                        question: "引导性问题可以帮助被访者理解问题，应该多用。",
                        options: ["正确", "错误"],
                        answer: 1,
                        explanation: "引导性问题会影响被访者的真实回答，应避免使用。"
                    },
                    {
                        type: "single",
                        question: "问卷的核心部分是：",
                        options: ["开头部分", "主体部分", "结尾部分", "封面"],
                        answer: 1,
                        explanation: "主体部分包含问题和选项，是问卷的核心。"
                    },
                    {
                        type: "judge",
                        question: "封闭式问题的优点是易于回答和统计分析。",
                        options: ["正确", "错误"],
                        answer: 0,
                        explanation: "封闭式问题有固定选项，易于回答，也便于统计分析。"
                    },
                    {
                        type: "single",
                        question: "适合获取深层次信息的问题类型是：",
                        options: ["开放式问题", "封闭式问题", "量表问题", "是非题"],
                        answer: 0,
                        explanation: "开放式问题让被访者自由回答，可以获取更多深层次的信息。"
                    }
                ]
            },
            {
                id: 3.3,
                title: "调研报告撰写",
                description: "学习调研报告的特点、内容和写作要求",
                knowledge: [
                    {
                        title: "调研报告特点",
                        content: "好的调研报告具有以下特点。",
                        points: [
                            { title: "客观性", text: "基于数据和事实，不偏不倚" },
                            { title: "针对性", text: "针对调研目的，回答问题" },
                            { title: "逻辑性", text: "结构清晰，逻辑严密" },
                            { title: "简洁性", text: "语言简洁，重点突出" },
                            { title: "可读性", text: "图文并茂，易于理解" }
                        ]
                    },
                    {
                        title: "调研报告基本内容",
                        content: "一份完整的调研报告一般包括以下部分。",
                        points: [
                            { title: "封面", text: "标题、调研机构、日期" },
                            { title: "目录", text: "主要章节和页码" },
                            { title: "摘要", text: "调研的核心发现和建议" },
                            { title: "引言", text: "调研背景、目的、方法" },
                            { title: "调研发现", text: "数据展示和分析" },
                            { title: "结论与建议", text: "总结和 actionable 建议" },
                            { title: "附录", text: "问卷、原始数据等" }
                        ]
                    },
                    {
                        title: "写作要求",
                        content: "撰写调研报告时应注意以下方面。",
                        points: [
                            { title: "结构完整", text: "涵盖所有必要部分" },
                            { title: "数据准确", text: "确保数据来源可靠、计算正确" },
                            { title: "分析深入", text: "不仅描述现象，更要分析原因" },
                            { title: "建议可行", text: "建议要具体，具有可操作性" },
                            { title: "语言规范", text: "表达准确，避免口语化" }
                        ]
                    }
                ],
                quiz: [
                    {
                        type: "single",
                        question: "调研报告最重要的特点是：",
                        options: ["页数多", "客观性", "花哨", "语言华丽"],
                        answer: 1,
                        explanation: "调研报告必须基于数据和事实，客观公正，客观性是最重要的。"
                    },
                    {
                        type: "judge",
                        question: "调研报告的摘要应该在报告最后写。",
                        options: ["正确", "错误"],
                        answer: 1,
                        explanation: "摘要虽然放在报告前面，但通常是在完成整个报告后撰写的。"
                    },
                    {
                        type: "single",
                        question: "调研报告的核心部分是：",
                        options: ["封面", "摘要", "调研发现", "附录"],
                        answer: 2,
                        explanation: "调研发现是报告的核心，展示数据和分析结果。"
                    },
                    {
                        type: "judge",
                        question: "调研报告的建议应该尽可能宏观、原则性。",
                        options: ["正确", "错误"],
                        answer: 1,
                        explanation: "建议应该具体、具有可操作性，能够指导实际工作。"
                    },
                    {
                        type: "single",
                        question: "调研报告附录中通常不包括：",
                        options: ["调查问卷", "原始数据", "结论与建议", "详细计算过程"],
                        answer: 2,
                        explanation: "结论与建议是报告正文的重要部分，不是附录内容。"
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
        name: "调研达人",
        description: "完成第三关学习",
        icon: "fa-trophy",
        requirement: { type: "level", level: 3 }
    },
    {
        id: 4,
        name: "答题能手",
        description: "累计答对50题",
        icon: "fa-fire",
        requirement: { type: "correct", count: 50 }
    },
    {
        id: 5,
        name: "完美主义者",
        description: "任意关卡获得3星评价",
        icon: "fa-star",
        requirement: { type: "stars", count: 3 }
    },
    {
        id: 6,
        name: "学习达人",
        description: "累计学习时长超过2小时",
        icon: "fa-clock",
        requirement: { type: "studyTime", minutes: 120 }
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