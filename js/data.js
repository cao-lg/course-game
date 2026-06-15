const levelsData = [
    {
        id: 1,
        title: "项目一 认知金融产品与金融产品营销",
        description: "从基础到进阶，全面了解金融产品与营销知识",
        icon: "fa-lightbulb",
        subLevels: [
            {
                id: 1.1,
                title: "任务一 1.1 金融与金融机构认知",
                description: "学习金融的含义与本质、金融机构的分类、政策性银行与商业银行的区别",
                pdf: "assets/教材/《金融产品营销实务》（第三版）项目一任务一.pdf",
                pdf: "assets/教材/《金融产品营销实务》（第三版）项目一任务一.pdf",
                knowledge: [
                    {
                        title: "金融的含义与本质",
                        content: "金融是货币资金融通的总称，主要指与货币流通和银行信用相关的各种活动。金融的本质是价值流通，是信用交易，是以偿还为条件的借贷活动。",
                        points: [
                            { title: "核心内容", text: "货币的发行、投放、流通和回笼；各种存款的吸收和提取；各项贷款的发放和收回" },
                            { title: "本质特征", text: "金融是信用交易，是价值运动的特殊形式，以偿还为条件的借贷活动" },
                            { title: "金融功能", text: "融通资金、风险分散、信息提供、流动性转换" }
                        ]
                    },
                    {
                        title: "金融机构的分类",
                        content: "金融机构是专门从事金融活动的组织，包括银行类和非银行类机构。",
                        points: [
                            { title: "银行类机构", text: "中央银行、商业银行、政策性银行、信用合作社等" },
                            { title: "非银行类机构", text: "证券公司、保险公司、信托投资公司、基金管理公司、期货公司等" },
                            { title: "监管机构", text: "中国人民银行、银保监会、证监会等" }
                        ]
                    },
                    {
                        title: "政策性银行与商业银行的区别",
                        content: "政策性银行和商业银行在性质、目标、资金来源、业务范围等方面存在显著区别。",
                        points: [
                            { title: "性质不同", text: "政策性银行是政府设立的非营利性金融机构；商业银行是以盈利为目的的金融企业" },
                            { title: "目标不同", text: "政策性银行贯彻国家产业政策；商业银行追求利润最大化" },
                            { title: "资金来源不同", text: "政策性银行主要靠财政拨款和发行金融债券；商业银行主要靠吸收存款" },
                            { title: "业务范围不同", text: "政策性银行业务范围特定；商业银行经营全面金融业务" }
                        ]
                    }
                ],
                quiz: [
                    {
                        type: "single",
                        question: "金融的本质是：",
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
                    },
                    {
                        type: "single",
                        question: "以下哪项是政策性银行的特征：",
                        options: ["以盈利为目的", "贯彻国家产业政策", "主要靠吸收存款", "经营全面金融业务"],
                        answer: 1,
                        explanation: "政策性银行的主要目标是贯彻国家产业政策，不以盈利为主要目的。"
                    },
                    {
                        type: "multiple",
                        question: "以下属于非银行类金融机构的有：（多选）",
                        options: ["保险公司", "商业银行", "证券公司", "基金管理公司"],
                        answer: [0, 2, 3],
                        explanation: "保险公司、证券公司、基金管理公司都属于非银行类金融机构，商业银行是银行类机构。"
                    },
                    {
                        type: "matching",
                        question: "请将金融机构与其对应的类型进行匹配：",
                        options: [
                            { left: "中国人民银行", right: "中央银行" },
                            { left: "工商银行", right: "商业银行" },
                            { left: "国家开发银行", right: "政策性银行" },
                            { left: "中国人寿", right: "保险公司" }
                        ],
                        explanation: "不同类型的金融机构有不同的职能和定位。"
                    }
                ]
            },
            {
                id: 1.2,
                title: "任务一 1.2 金融产品的层次与特征",
                description: "学习金融产品的三个层次、七大特征、金融产品分类",
                pdf: "assets/教材/《金融产品营销实务》（第三版）项目一任务二.pdf",
                pdf: "assets/教材/《金融产品营销实务》（第三版）项目一任务二.pdf",
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
                        title: "金融产品的七大特征",
                        content: "金融产品具有无形性、不可分割性、同质性、易模仿性、风险性、收益性和增值性等特征。",
                        points: [
                            { title: "无形性", text: "金融产品是无形的服务，客户只能通过体验感知" },
                            { title: "不可分割性", text: "金融产品的生产与消费同时进行" },
                            { title: "同质性", text: "不同金融机构提供的同类产品差异不大" },
                            { title: "易模仿性", text: "金融产品容易被竞争对手模仿" },
                            { title: "风险性", text: "金融产品存在各种风险，如市场风险、信用风险等" },
                            { title: "收益性", text: "金融产品能为客户带来收益" },
                            { title: "增值性", text: "金融产品能实现价值增值" }
                        ]
                    },
                    {
                        title: "金融产品分类",
                        content: "金融产品可以按照不同的标准进行分类。",
                        points: [
                            { title: "按期限分类", text: "货币市场产品（1年以内）、资本市场产品（1年以上）" },
                            { title: "按风险收益分类", text: "保守型产品、稳健型产品、进取型产品" },
                            { title: "按发行主体分类", text: "政府产品、金融机构产品、企业产品" },
                            { title: "按产品形态分类", text: "银行产品、证券产品、保险产品、信托产品等" }
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
                    },
                    {
                        type: "single",
                        question: "以下哪项不属于金融产品的七大特征：",
                        options: ["无形性", "同质性", "实物性", "风险性"],
                        answer: 2,
                        explanation: "金融产品是无形的，不具有实物性特征。"
                    },
                    {
                        type: "multiple",
                        question: "金融产品的层次包括：（多选）",
                        options: ["核心产品", "形式产品", "延伸产品", "附加产品"],
                        answer: [0, 1, 2],
                        explanation: "金融产品包括核心产品、形式产品、延伸产品三个层次。"
                    },
                    {
                        type: "case",
                        question: "案例分析：某银行推出一款理财产品，承诺高收益但风险较低。请从金融产品的特征角度分析这款产品可能存在的问题。",
                        options: [],
                        answer: "金融产品具有收益性与风险性并存的特征，高收益通常伴随着高风险。如果一款产品承诺高收益但声称风险较低，可能存在信息披露不充分或误导销售的问题。投资者应仔细了解产品的投资方向、风险等级等信息。",
                        explanation: "需要结合金融产品的特征进行分析。"
                    }
                ]
            },
            {
                id: 1.3,
                title: "任务一 1.3 金融产品营销基础",
                description: "学习营销理念演变（4P→4C→7P→4E）、金融产品营销特征、营销人员职业素养",
                pdf: "assets/教材/《金融产品营销实务》（第三版）项目一任务三.pdf",
                pdf: "assets/教材/《金融产品营销实务》（第三版）项目一任务三.pdf",
                knowledge: [
                    {
                        title: "营销理念演变：4P→4C→7P→4E",
                        content: "营销理念随着市场环境的变化不断发展演进。",
                        points: [
                            { title: "4P理论", text: "产品（Product）、价格（Price）、渠道（Place）、促销（Promotion）" },
                            { title: "4C理论", text: "顾客（Customer）、成本（Cost）、便利（Convenience）、沟通（Communication）" },
                            { title: "7P理论", text: "在4P基础上增加人员（People）、过程（Process）、有形展示（Physical Evidence）" },
                            { title: "4E理论", text: "体验（Experience）、花费（Expense）、电铺（E-shop）、展现（Exhibition）" }
                        ]
                    },
                    {
                        title: "金融产品营销特征",
                        content: "金融产品营销具有与一般产品营销不同的特征。",
                        points: [
                            { title: "专业性强", text: "金融产品复杂，需要专业知识" },
                            { title: "风险性高", text: "涉及资金安全，风险控制重要" },
                            { title: "监管严格", text: "受法律法规严格监管" },
                            { title: "关系营销重要", text: "客户关系维护至关重要" },
                            { title: "信任是基础", text: "客户信任是金融营销的前提" }
                        ]
                    },
                    {
                        title: "营销人员职业素养",
                        content: "金融营销人员需要具备良好的职业素养。",
                        points: [
                            { title: "职业道德", text: "诚实守信、廉洁自律、客户至上、保守秘密" },
                            { title: "专业能力", text: "金融知识、法律知识、沟通能力、服务能力" },
                            { title: "心理素质", text: "抗压能力、自信心、同理心、积极心态" },
                            { title: "合规意识", text: "遵守法律法规，合规开展业务" }
                        ]
                    }
                ],
                quiz: [
                    {
                        type: "single",
                        question: "4P理论不包括：",
                        options: ["产品", "价格", "顾客", "促销"],
                        answer: 2,
                        explanation: "4P包括产品、价格、渠道、促销，顾客属于4C理论。"
                    },
                    {
                        type: "judge",
                        question: "金融营销由于专业性强，所以不需要考虑客户体验。",
                        options: ["正确", "错误"],
                        answer: 1,
                        explanation: "金融营销虽然专业性强，但客户体验同样重要。"
                    },
                    {
                        type: "single",
                        question: "金融营销人员最重要的职业素养是：",
                        options: ["销售技巧", "专业知识", "外表形象", "酒量"],
                        answer: 1,
                        explanation: "金融营销人员最重要的是扎实的专业知识和良好的职业道德。"
                    },
                    {
                        type: "multiple",
                        question: "金融产品营销的特征包括：（多选）",
                        options: ["专业性强", "风险性高", "监管严格", "关系营销重要"],
                        answer: [0, 1, 2, 3],
                        explanation: "金融产品营销具有专业性强、风险性高、监管严格、关系营销重要等特征。"
                    },
                    {
                        type: "matching",
                        question: "请将营销理论与其对应的核心理念匹配：",
                        options: [
                            { left: "4P", right: "以产品为中心" },
                            { left: "4C", right: "以客户为中心" },
                            { left: "7P", right: "服务营销" },
                            { left: "4E", right: "互联网营销" }
                        ],
                        explanation: "不同的营销理论有不同的侧重点。"
                    }
                ]
            },
            {
                id: 2.1,
                title: "任务二 2.1 宏观环境分析（PESTEL）",
                description: "学习政治法律、经济、社会、技术、环境、法律因素",
                pdf: "assets/教材/《金融产品营销实务》（第三版）项目一任务四.pdf",
                knowledge: [
                    {
                        title: "PESTEL分析框架",
                        content: "PESTEL是分析宏观环境的常用工具，包括六大因素，全面分析企业所处的外部环境。",
                        points: [
                            { title: "政治（Political）", text: "政治体制、政府政策、政治稳定性、国际关系、政府管制等" },
                            { title: "经济（Economic）", text: "经济增长、利率、汇率、通货膨胀、可支配收入、经济周期等" },
                            { title: "社会（Social）", text: "人口结构、文化传统、生活方式、消费习惯、价值观念、教育水平等" },
                            { title: "技术（Technological）", text: "新技术、新材料、新工艺的发展和应用，互联网、大数据、AI等" },
                            { title: "环境（Environmental）", text: "自然环境、环保法规、可持续发展、气候变化等" },
                            { title: "法律（Legal）", text: "法律法规、监管政策、行业规范、知识产权保护等" }
                        ]
                    },
                    {
                        title: "宏观环境对金融营销的影响",
                        content: "宏观环境对金融营销有着重要影响，需要密切关注环境变化。",
                        points: [
                            { title: "政策影响", text: "货币政策、财政政策、监管政策等直接影响金融业务" },
                            { title: "经济影响", text: "经济周期影响客户风险偏好和需求" },
                            { title: "技术影响", text: "金融科技改变营销方式和客户体验" },
                            { title: "社会影响", text: "人口老龄化、消费观念变化影响产品需求" }
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
                        type: "matching",
                        question: "请将PESTEL因素与对应的内容匹配：",
                        options: [
                            { left: "政治", right: "政府政策、政治稳定性" },
                            { left: "社会", right: "人口结构、文化传统" },
                            { left: "技术", right: "互联网、大数据、AI" },
                            { left: "法律", right: "法律法规、监管政策" }
                        ],
                        explanation: "PESTEL各因素的典型内容。"
                    },
                    {
                        type: "judge",
                        question: "宏观环境分析对金融营销不重要。",
                        options: ["正确", "错误"],
                        answer: 1,
                        explanation: "宏观环境对金融营销有着重要影响，需要密切关注。"
                    },
                    {
                        type: "case",
                        question: "案例分析：随着人口老龄化加剧，请分析这一趋势对金融营销可能产生的影响。",
                        options: [],
                        answer: "人口老龄化属于社会因素，可能带来以下影响：1. 养老金融需求增加，如养老保险、养老理财等；2. 风险偏好趋于保守，更倾向于稳健型产品；3. 对服务便捷性要求提高，需要适老化服务；4. 财富传承需求增加。金融机构应针对这些变化调整产品和服务策略。",
                        explanation: "需要结合PESTEL分析框架进行分析。"
                    }
                ]
            },
            {
                id: 2.2,
                title: "任务二 2.2 微观环境分析（波特五力）",
                description: "学习同行业竞争者、潜在新进入者、替代品威胁、供应商议价能力、购买者议价能力",
                pdf: "assets/教材/《金融产品营销实务》（第三版）项目一任务四.pdf",
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
                    },
                    {
                        title: "金融行业竞争特点",
                        content: "金融行业竞争有其自身特点，需要结合行业实际进行分析。",
                        points: [
                            { title: "产品同质化", text: "金融产品同质化程度高，差异化难度大" },
                            { title: "监管壁垒", text: "金融行业有较高的监管壁垒" },
                            { title: "品牌重要", text: "品牌和信誉对金融机构非常重要" },
                            { title: "技术驱动", text: "金融科技改变竞争格局" }
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
                        type: "matching",
                        question: "请将五力与对应的含义匹配：",
                        options: [
                            { left: "同行业竞争者", right: "现有企业之间的竞争程度" },
                            { left: "潜在新进入者", right: "新企业进入行业的门槛" },
                            { left: "替代品威胁", right: "替代产品的价格、性能" },
                            { left: "购买者议价能力", right: "购买者的价格敏感度" }
                        ],
                        explanation: "波特五力模型的标准定义。"
                    },
                    {
                        type: "single",
                        question: "波特五力模型主要用于分析：",
                        options: ["宏观经济环境", "行业竞争环境", "企业内部资源", "客户需求"],
                        answer: 1,
                        explanation: "波特五力模型主要用于分析行业内的竞争环境。"
                    },
                    {
                        type: "multiple",
                        question: "金融行业竞争特点包括：（多选）",
                        options: ["产品同质化", "监管壁垒", "品牌重要", "技术驱动"],
                        answer: [0, 1, 2, 3],
                        explanation: "金融行业竞争特点包括产品同质化、监管壁垒、品牌重要、技术驱动等。"
                    },
                    {
                        type: "judge",
                        question: "供应商议价能力强对企业来说总是坏事。",
                        options: ["正确", "错误"],
                        answer: 1,
                        explanation: "不一定。供应商议价能力是一把双刃剑，需要具体情况具体分析。"
                    }
                ]
            },
            {
                id: 2.3,
                title: "任务二 2.3 SWOT分析与战略选择",
                description: "学习SWOT矩阵、SO/ST/WO/WT战略",
                pdf: "assets/教材/《金融产品营销实务》（第三版）项目一任务四.pdf",
                knowledge: [
                    {
                        title: "SWOT矩阵",
                        content: "SWOT分析包括优势、劣势、机会、威胁四个方面，是制定战略的重要工具。",
                        points: [
                            { title: "优势（Strengths）", text: "企业内部的优势和核心竞争力，如品牌、技术、资金等" },
                            { title: "劣势（Weaknesses）", text: "企业内部的不足和需要改进的地方" },
                            { title: "机会（Opportunities）", text: "外部环境中对企业有利的因素" },
                            { title: "威胁（Threats）", text: "外部环境中对企业不利的因素" }
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
                        type: "matching",
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
                    },
                    {
                        type: "multiple",
                        question: "SWOT分析可以用于：（多选）",
                        options: ["企业战略规划", "竞争对手分析", "产品定位", "个人职业规划"],
                        answer: [0, 1, 2, 3],
                        explanation: "SWOT分析可以用于企业战略规划、竞争对手分析、产品定位，也可以用于个人职业规划。"
                    },
                    {
                        type: "case",
                        question: "案例分析：某银行在金融科技方面有较强优势，但面临监管趋严的威胁，请选择适合的战略并说明理由。",
                        options: [],
                        answer: "适合选择ST战略（利用优势，规避威胁）。该银行可以利用金融科技优势，在合规的前提下创新产品和服务，同时通过科技手段提升合规管理能力，将监管要求转化为竞争优势。",
                        explanation: "需要结合SWOT战略选择进行分析。"
                    }
                ]
            },
            {
                id: 3.1,
                title: "任务三 3.1 市场调研方案设计",
                description: "学习调研方案的主要内容、调研流程",
                pdf: "assets/教材/《金融产品营销实务》（第三版）项目一任务三.pdf",
                knowledge: [
                    {
                        title: "调研方案的主要内容",
                        content: "一份完整的市场调研方案包括多个关键要素。",
                        points: [
                            { title: "调研目的", text: "明确调研要解决的问题和目标" },
                            { title: "调研内容", text: "确定需要收集的具体信息" },
                            { title: "调研方法", text: "选择合适的数据收集方法，如问卷、访谈、观察等" },
                            { title: "调研对象", text: "确定调研的目标人群和样本量" },
                            { title: "时间安排", text: "制定调研的时间进度表" },
                            { title: "预算安排", text: "估算调研所需的费用" },
                            { title: "组织实施", text: "明确调研的组织方式和人员分工" }
                        ]
                    },
                    {
                        title: "调研流程",
                        content: "市场调研通常遵循一定的流程进行。",
                        points: [
                            { title: "确定问题", text: "明确调研要解决的问题" },
                            { title: "制定方案", text: "设计详细的调研方案" },
                            { title: "收集数据", text: "按照方案收集数据" },
                            { title: "整理分析", text: "对数据进行整理和分析" },
                            { title: "撰写报告", text: "撰写调研报告并提出建议" }
                        ]
                    }
                ],
                quiz: [
                    {
                        type: "single",
                        question: "市场调研的第一步是：",
                        options: ["制定方案", "确定问题", "收集数据", "撰写报告"],
                        answer: 1,
                        explanation: "市场调研首先要明确要解决的问题。"
                    },
                    {
                        type: "multiple",
                        question: "调研方案的主要内容包括：（多选）",
                        options: ["调研目的", "调研内容", "调研方法", "时间安排"],
                        answer: [0, 1, 2, 3],
                        explanation: "调研方案包括调研目的、内容、方法、对象、时间安排、预算等。"
                    },
                    {
                        type: "ordering",
                        question: "请将市场调研的流程按正确顺序排列：",
                        options: ["制定方案", "确定问题", "收集数据", "撰写报告", "整理分析"],
                        answer: [1, 0, 2, 4, 3],
                        explanation: "市场调研的正确流程是：确定问题→制定方案→收集数据→整理分析→撰写报告。"
                    },
                    {
                        type: "judge",
                        question: "市场调研只需要收集数据，不需要明确目的。",
                        options: ["正确", "错误"],
                        answer: 1,
                        explanation: "明确调研目的是市场调研的重要环节。"
                    },
                    {
                        type: "single",
                        question: "以下哪项不属于调研方案的内容：",
                        options: ["调研目的", "调研内容", "调研结论", "预算安排"],
                        answer: 2,
                        explanation: "调研结论是调研完成后得出的，不属于调研方案内容。"
                    }
                ]
            },
            {
                id: 3.2,
                title: "任务三 3.2 调查问卷设计",
                description: "学习问卷设计原则、问卷结构、问题类型",
                pdf: "assets/教材/《金融产品营销实务》（第三版）项目一任务三.pdf",
                knowledge: [
                    {
                        title: "问卷设计原则",
                        content: "设计调查问卷需要遵循一些基本原则。",
                        points: [
                            { title: "明确性", text: "问题要清晰明确，避免歧义" },
                            { title: "简洁性", text: "问题要简洁明了，避免冗长" },
                            { title: "客观性", text: "问题要客观中立，避免引导性" },
                            { title: "完整性", text: "问卷要覆盖需要了解的全部内容" },
                            { title: "逻辑性", text: "问题排列要有逻辑顺序" },
                            { title: "可操作性", text: "问题要便于回答和统计分析" }
                        ]
                    },
                    {
                        title: "问卷结构",
                        content: "一份完整的问卷通常包括以下部分。",
                        points: [
                            { title: "标题", text: "简明扼要地说明调查主题" },
                            { title: "说明信", text: "向受访者说明调查目的、意义、保密承诺等" },
                            { title: "指导语", text: "说明填写问卷的要求和方法" },
                            { title: "问题与选项", text: "问卷的核心部分" },
                            { title: "背景信息", text: "收集受访者的基本信息" },
                            { title: "结束语", text: "感谢受访者的配合" }
                        ]
                    },
                    {
                        title: "问题类型",
                        content: "问卷中的问题可以分为多种类型。",
                        points: [
                            { title: "开放式问题", text: "让受访者自由回答，收集深入信息" },
                            { title: "封闭式问题", text: "提供选项供受访者选择，便于统计" },
                            { title: "量表题", text: "用量表测量态度、满意度等" },
                            { title: "排序题", text: "让受访者对选项进行排序" },
                            { title: "矩阵题", text: "将多个相关问题组合在一起" }
                        ]
                    }
                ],
                quiz: [
                    {
                        type: "single",
                        question: "以下哪项不属于问卷设计原则：",
                        options: ["明确性", "引导性", "简洁性", "客观性"],
                        answer: 1,
                        explanation: "问卷设计应避免引导性问题，保持客观中立。"
                    },
                    {
                        type: "multiple",
                        question: "问卷的结构通常包括：（多选）",
                        options: ["标题", "说明信", "问题与选项", "结束语"],
                        answer: [0, 1, 2, 3],
                        explanation: "问卷结构包括标题、说明信、指导语、问题与选项、背景信息、结束语等。"
                    },
                    {
                        type: "single",
                        question: "适合收集深入信息的问题类型是：",
                        options: ["开放式问题", "封闭式问题", "量表题", "排序题"],
                        answer: 0,
                        explanation: "开放式问题让受访者自由回答，适合收集深入信息。"
                    },
                    {
                        type: "judge",
                        question: "问题设计得越长越好，这样能收集更多信息。",
                        options: ["正确", "错误"],
                        answer: 1,
                        explanation: "问题要简洁明了，过于冗长会增加受访者负担。"
                    },
                    {
                        type: "case",
                        question: "案例分析：请指出以下问题存在的问题并修改：\"你不认为我们的产品很好吗？\"",
                        options: [],
                        answer: "这是一个引导性问题，带有明显的倾向性。应修改为中立的问题，如：\"你认为我们的产品怎么样？\"或者\"请评价我们的产品（1-5分）\"。",
                        explanation: "需要结合问卷设计原则进行分析。"
                    }
                ]
            },
            {
                id: 3.3,
                title: "任务三 3.3 调研报告撰写",
                description: "学习调研报告的特点、基本内容、写作要求",
                pdf: "assets/教材/《金融产品营销实务》（第三版）项目一任务三.pdf",
                knowledge: [
                    {
                        title: "调研报告的特点",
                        content: "调研报告具有以下特点。",
                        points: [
                            { title: "真实性", text: "内容要真实客观，基于实际数据" },
                            { title: "针对性", text: "要针对调研目的回答问题" },
                            { title: "逻辑性", text: "结构清晰，逻辑严密" },
                            { title: "时效性", text: "要及时反映市场情况" },
                            { title: "实用性", text: "要能为决策提供参考" }
                        ]
                    },
                    {
                        title: "调研报告的基本内容",
                        content: "一份完整的调研报告通常包括以下部分。",
                        points: [
                            { title: "封面", text: "报告标题、调研单位、日期等" },
                            { title: "摘要", text: "报告的核心内容概要" },
                            { title: "目录", text: "报告的结构索引" },
                            { title: "引言", text: "调研背景、目的、方法等" },
                            { title: "调研结果", text: "数据展示和分析" },
                            { title: "结论与建议", text: "调研结论和 actionable 建议" },
                            { title: "附录", text: "问卷、数据等补充材料" }
                        ]
                    },
                    {
                        title: "写作要求",
                        content: "撰写调研报告需要注意以下要求。",
                        points: [
                            { title: "语言简洁", text: "表达要简洁明了" },
                            { title: "数据准确", text: "引用的数据要准确可靠" },
                            { title: "图表规范", text: "图表要清晰规范，便于理解" },
                            { title: "结论明确", text: "结论要明确具体" },
                            { title: "建议可行", text: "建议要切实可行" }
                        ]
                    }
                ],
                quiz: [
                    {
                        type: "single",
                        question: "调研报告的核心是：",
                        options: ["封面美观", "内容真实", "字数多", "图表多"],
                        answer: 1,
                        explanation: "真实性是调研报告最重要的特点。"
                    },
                    {
                        type: "multiple",
                        question: "调研报告的基本内容包括：（多选）",
                        options: ["摘要", "调研结果", "结论与建议", "附录"],
                        answer: [0, 1, 2, 3],
                        explanation: "调研报告包括封面、摘要、目录、引言、调研结果、结论与建议、附录等。"
                    },
                    {
                        type: "judge",
                        question: "调研报告越长越好。",
                        options: ["正确", "错误"],
                        answer: 1,
                        explanation: "调研报告应简洁明了，关键是内容质量。"
                    },
                    {
                        type: "single",
                        question: "调研报告的建议应该：",
                        options: ["模糊笼统", "切实可行", "天马行空", "不可操作"],
                        answer: 1,
                        explanation: "建议要切实可行，能够指导实际工作。"
                    },
                    {
                        type: "multiple",
                        question: "调研报告的特点包括：（多选）",
                        options: ["真实性", "针对性", "逻辑性", "时效性"],
                        answer: [0, 1, 2, 3],
                        explanation: "调研报告具有真实性、针对性、逻辑性、时效性、实用性等特点。"
                    }
                ]
            },
            {
                id: 4.1,
                title: "任务四 4.1 金融市场细分",
                description: "学习市场细分的意义、要求、步骤、细分标准",
                pdf: "assets/教材/《金融产品营销实务》（第三版）项目一任务五.pdf",
                knowledge: [
                    {
                        title: "市场细分的意义",
                        content: "市场细分对金融营销具有重要意义。",
                        points: [
                            { title: "发现市场机会", text: "通过细分发现未被满足的需求" },
                            { title: "制定营销策略", text: "针对细分市场制定差异化策略" },
                            { title: "提高竞争力", text: "集中资源服务目标客户" },
                            { title: "提升客户满意度", text: "更好地满足客户需求" }
                        ]
                    },
                    {
                        title: "市场细分的要求",
                        content: "有效的市场细分需要满足以下要求。",
                        points: [
                            { title: "可衡量性", text: "细分市场的规模和购买力可以衡量" },
                            { title: "可进入性", text: "企业能够进入该细分市场" },
                            { title: "可盈利性", text: "细分市场有足够的盈利潜力" },
                            { title: "可区分性", text: "细分市场之间有明显差异" },
                            { title: "可操作性", text: "能够为细分市场制定营销策略" }
                        ]
                    },
                    {
                        title: "市场细分的步骤",
                        content: "市场细分通常遵循以下步骤。",
                        points: [
                            { title: "确定范围", text: "确定要细分的市场范围" },
                            { title: "选择标准", text: "选择合适的细分标准" },
                            { title: "进行细分", text: "按照标准进行市场细分" },
                            { title: "评估市场", text: "评估各细分市场的吸引力" },
                            { title: "选择目标", text: "选择要进入的目标市场" }
                        ]
                    },
                    {
                        title: "市场细分标准",
                        content: "金融市场细分可以采用多种标准。",
                        points: [
                            { title: "人口标准", text: "年龄、性别、收入、职业、教育程度等" },
                            { title: "地理标准", text: "地区、城市规模、人口密度等" },
                            { title: "心理标准", text: "生活方式、个性、价值观念等" },
                            { title: "行为标准", text: "购买时机、追求利益、使用频率、品牌忠诚度等" },
                            { title: "利益标准", text: "客户追求的核心利益" }
                        ]
                    }
                ],
                quiz: [
                    {
                        type: "single",
                        question: "以下哪项不属于市场细分的要求：",
                        options: ["可衡量性", "可进入性", "可复制性", "可盈利性"],
                        answer: 2,
                        explanation: "市场细分要求包括可衡量性、可进入性、可盈利性、可区分性、可操作性。"
                    },
                    {
                        type: "multiple",
                        question: "市场细分的意义包括：（多选）",
                        options: ["发现市场机会", "制定营销策略", "提高竞争力", "提升客户满意度"],
                        answer: [0, 1, 2, 3],
                        explanation: "市场细分的意义包括发现机会、制定策略、提高竞争力、提升满意度等。"
                    },
                    {
                        type: "single",
                        question: "按年龄、收入、职业划分市场属于：",
                        options: ["人口细分", "地理细分", "心理细分", "行为细分"],
                        answer: 0,
                        explanation: "年龄、收入、职业属于人口细分标准。"
                    },
                    {
                        type: "ordering",
                        question: "请将市场细分的步骤按正确顺序排列：",
                        options: ["进行细分", "确定范围", "选择标准", "选择目标", "评估市场"],
                        answer: [1, 2, 0, 4, 3],
                        explanation: "市场细分的正确步骤是：确定范围→选择标准→进行细分→评估市场→选择目标。"
                    },
                    {
                        type: "case",
                        question: "案例分析：某银行想要针对年轻客户群体设计一款信用卡产品，请提出合适的市场细分标准。",
                        options: [],
                        answer: "可以采用以下细分标准：1. 人口标准：年龄（18-35岁）、收入、职业、教育程度；2. 心理标准：生活方式、消费观念；3. 行为标准：消费习惯、用卡频率、追求的利益（如积分、优惠、便捷等）；4. 利益标准：追求时尚、注重实惠、看重服务等。",
                        explanation: "需要结合市场细分标准进行分析。"
                    }
                ]
            },
            {
                id: 4.2,
                title: "任务四 4.2 目标市场选择",
                description: "学习目标市场评估、三种目标市场策略（无差异/差异化/集中化）",
                pdf: "assets/教材/《金融产品营销实务》（第三版）项目一任务五.pdf",
                knowledge: [
                    {
                        title: "目标市场评估",
                        content: "选择目标市场前需要对细分市场进行评估。",
                        points: [
                            { title: "市场规模与增长", text: "评估市场的当前规模和未来增长潜力" },
                            { title: "市场吸引力", text: "竞争状况、进入壁垒、盈利能力等" },
                            { title: "企业目标与资源", text: "是否符合企业目标，是否有足够资源" },
                            { title: "风险评估", text: "评估市场风险和不确定性" }
                        ]
                    },
                    {
                        title: "无差异营销策略",
                        content: "无差异策略是忽略市场差异，向整个市场提供单一产品。",
                        points: [
                            { title: "特点", text: "不考虑细分市场差异，采用统一营销组合" },
                            { title: "优点", text: "成本低，规模经济效应明显" },
                            { title: "缺点", text: "无法满足不同客户需求，竞争力弱" },
                            { title: "适用条件", text: "产品同质性高、市场需求相似" }
                        ]
                    },
                    {
                        title: "差异化营销策略",
                        content: "差异化策略是选择多个细分市场，为每个市场设计不同产品。",
                        points: [
                            { title: "特点", text: "针对不同细分市场采用不同营销组合" },
                            { title: "优点", text: "更好满足客户需求，提高竞争力" },
                            { title: "缺点", text: "成本高，管理复杂" },
                            { title: "适用条件", text: "企业资源充足，产品差异性大" }
                        ]
                    },
                    {
                        title: "集中化营销策略",
                        content: "集中化策略是集中力量于一个或少数几个细分市场。",
                        points: [
                            { title: "特点", text: "专注于一个或少数几个细分市场" },
                            { title: "优点", text: "资源集中，专业化程度高，能深入了解客户" },
                            { title: "缺点", text: "风险集中，市场变化影响大" },
                            { title: "适用条件", text: "资源有限的中小企业，细分市场有足够潜力" }
                        ]
                    }
                ],
                quiz: [
                    {
                        type: "single",
                        question: "忽略市场差异，向整个市场提供单一产品的策略是：",
                        options: ["无差异策略", "差异化策略", "集中化策略", "多元化策略"],
                        answer: 0,
                        explanation: "无差异策略忽略市场差异，采用统一营销组合。"
                    },
                    {
                        type: "multiple",
                        question: "目标市场策略包括：（多选）",
                        options: ["无差异策略", "差异化策略", "集中化策略", "全球化策略"],
                        answer: [0, 1, 2],
                        explanation: "目标市场策略包括无差异、差异化、集中化三种。"
                    },
                    {
                        type: "single",
                        question: "适合资源有限的中小企业的策略是：",
                        options: ["无差异策略", "差异化策略", "集中化策略", "多元化策略"],
                        answer: 2,
                        explanation: "集中化策略适合资源有限的中小企业。"
                    },
                    {
                        type: "matching",
                        question: "请将目标市场策略与对应的特点匹配：",
                        options: [
                            { left: "无差异策略", right: "忽略差异，向整个市场提供单一产品" },
                            { left: "差异化策略", right: "选择多个细分市场，为每个市场设计不同产品" },
                            { left: "集中化策略", right: "集中力量于一个或少数几个细分市场" }
                        ],
                        explanation: "三种目标市场策略的定义。"
                    },
                    {
                        type: "judge",
                        question: "差异化策略的优点是成本低。",
                        options: ["正确", "错误"],
                        answer: 1,
                        explanation: "差异化策略的缺点是成本高，管理复杂。"
                    }
                ]
            },
            {
                id: 4.3,
                title: "任务四 4.3 市场定位",
                description: "学习市场定位的意义、步骤、差异化策略",
                pdf: "assets/教材/《金融产品营销实务》（第三版）项目一任务五.pdf",
                knowledge: [
                    {
                        title: "市场定位的意义",
                        content: "市场定位对企业具有重要意义。",
                        points: [
                            { title: "建立竞争优势", text: "在客户心中建立独特地位" },
                            { title: "指导营销组合", text: "为产品、价格、渠道、促销策略提供依据" },
                            { title: "塑造品牌形象", text: "形成清晰的品牌认知" },
                            { title: "吸引目标客户", text: "吸引目标客户群体" }
                        ]
                    },
                    {
                        title: "市场定位的步骤",
                        content: "市场定位通常遵循以下步骤。",
                        points: [
                            { title: "识别竞争优势", text: "发现企业相对于竞争对手的优势" },
                            { title: "选择竞争优势", text: "选择要突出的核心优势" },
                            { title: "制定定位策略", text: "制定具体的定位策略" },
                            { title: "传播定位", text: "通过营销传播定位信息" },
                            { title: "监控调整", text: "监控效果并及时调整" }
                        ]
                    },
                    {
                        title: "差异化策略",
                        content: "市场定位可以通过多种差异化途径实现。",
                        points: [
                            { title: "产品差异化", text: "产品功能、质量、特性等方面的差异" },
                            { title: "服务差异化", text: "服务质量、方式、效率等方面的差异" },
                            { title: "人员差异化", text: "员工素质、能力等方面的差异" },
                            { title: "渠道差异化", text: "渠道覆盖面、便利性等方面的差异" },
                            { title: "形象差异化", text: "品牌形象、企业形象等方面的差异" }
                        ]
                    }
                ],
                quiz: [
                    {
                        type: "single",
                        question: "市场定位的核心是：",
                        options: ["降低价格", "与竞争对手区别开来", "扩大市场份额", "提高知名度"],
                        answer: 1,
                        explanation: "市场定位的核心是与竞争对手区别开来，建立独特的市场地位。"
                    },
                    {
                        type: "multiple",
                        question: "市场定位的差异化策略包括：（多选）",
                        options: ["产品差异化", "服务差异化", "人员差异化", "形象差异化"],
                        answer: [0, 1, 2, 3],
                        explanation: "差异化策略包括产品、服务、人员、渠道、形象等方面。"
                    },
                    {
                        type: "ordering",
                        question: "请将市场定位的步骤按正确顺序排列：",
                        options: ["传播定位", "识别竞争优势", "监控调整", "制定定位策略", "选择竞争优势"],
                        answer: [1, 4, 3, 0, 2],
                        explanation: "市场定位的正确步骤是：识别竞争优势→选择竞争优势→制定定位策略→传播定位→监控调整。"
                    },
                    {
                        type: "judge",
                        question: "市场定位一旦确定就不需要调整。",
                        options: ["正确", "错误"],
                        answer: 1,
                        explanation: "市场定位需要根据市场变化及时调整。"
                    },
                    {
                        type: "single",
                        question: "以下哪项不属于市场定位的意义：",
                        options: ["建立竞争优势", "指导营销组合", "增加成本", "塑造品牌形象"],
                        answer: 2,
                        explanation: "增加成本不是市场定位的意义。"
                    }
                ]
            },
            {
                id: 5.1,
                title: "任务五 5.1 产品策略",
                description: "学习产品层次、产品组合策略、品牌策略、新产品开发、产品生命周期",
                pdf: "assets/教材/《金融产品营销实务》（第三版）项目一任务五.pdf",
                knowledge: [
                    {
                        title: "产品层次",
                        content: "金融产品也具有多个层次。",
                        points: [
                            { title: "核心产品", text: "客户真正需要的基本利益" },
                            { title: "形式产品", text: "产品的具体形态，如合同、凭证等" },
                            { title: "期望产品", text: "客户期望的一整套属性和条件" },
                            { title: "延伸产品", text: "附加的服务和利益" },
                            { title: "潜在产品", text: "产品未来可能的发展" }
                        ]
                    },
                    {
                        title: "产品组合策略",
                        content: "产品组合包括宽度、长度、深度和关联度。",
                        points: [
                            { title: "产品组合宽度", text: "产品线的数量" },
                            { title: "产品组合长度", text: "所有产品项目的总数" },
                            { title: "产品组合深度", text: "每条产品线的品种数" },
                            { title: "产品组合关联度", text: "各产品线之间的关联程度" },
                            { title: "策略类型", text: "扩大组合、缩减组合、延伸产品线等" }
                        ]
                    },
                    {
                        title: "品牌策略",
                        content: "品牌策略是产品策略的重要组成部分。",
                        points: [
                            { title: "品牌建设", text: "建立品牌知名度、美誉度、忠诚度" },
                            { title: "品牌定位", text: "在客户心中建立独特的品牌形象" },
                            { title: "品牌延伸", text: "利用现有品牌推出新产品" },
                            { title: "多品牌策略", text: "同一产品类别使用多个品牌" }
                        ]
                    },
                    {
                        title: "新产品开发",
                        content: "新产品开发是企业持续发展的关键。",
                        points: [
                            { title: "创意产生", text: "收集新产品创意" },
                            { title: "创意筛选", text: "评估和筛选创意" },
                            { title: "概念发展", text: "将创意发展为产品概念" },
                            { title: "营销策略制定", text: "制定营销战略" },
                            { title: "商业分析", text: "分析商业可行性" },
                            { title: "产品开发", text: "开发产品原型" },
                            { title: "市场测试", text: "在小范围内测试" },
                            { title: "正式上市", text: "正式推向市场" }
                        ]
                    },
                    {
                        title: "产品生命周期",
                        content: "产品通常经历导入期、成长期、成熟期、衰退期。",
                        points: [
                            { title: "导入期", text: "销量低，成本高，亏损或微利" },
                            { title: "成长期", text: "销量快速增长，利润上升" },
                            { title: "成熟期", text: "销量达到顶峰，竞争激烈" },
                            { title: "衰退期", text: "销量下降，利润减少" }
                        ]
                    }
                ],
                quiz: [
                    {
                        type: "ordering",
                        question: "请将产品生命周期的四个阶段按顺序排列：",
                        options: ["成长期", "成熟期", "衰退期", "导入期"],
                        answer: [3, 0, 1, 2],
                        explanation: "产品生命周期的正确顺序是：导入期→成长期→成熟期→衰退期。"
                    },
                    {
                        type: "single",
                        question: "产品组合的宽度是指：",
                        options: ["产品项目总数", "产品线的数量", "每条产品线的品种数", "产品线之间的关联程度"],
                        answer: 1,
                        explanation: "产品组合宽度是指产品线的数量。"
                    },
                    {
                        type: "multiple",
                        question: "产品层次包括：（多选）",
                        options: ["核心产品", "形式产品", "期望产品", "延伸产品"],
                        answer: [0, 1, 2, 3],
                        explanation: "产品层次包括核心产品、形式产品、期望产品、延伸产品、潜在产品。"
                    },
                    {
                        type: "matching",
                        question: "请将产品生命周期阶段与对应的特征匹配：",
                        options: [
                            { left: "导入期", right: "销量低，成本高" },
                            { left: "成长期", right: "销量快速增长，利润上升" },
                            { left: "成熟期", right: "销量达到顶峰，竞争激烈" },
                            { left: "衰退期", right: "销量下降，利润减少" }
                        ],
                        explanation: "产品生命周期各阶段的特征。"
                    },
                    {
                        type: "judge",
                        question: "品牌延伸总是有利的。",
                        options: ["正确", "错误"],
                        answer: 1,
                        explanation: "品牌延伸如果不当，可能损害原有品牌形象。"
                    }
                ]
            },
            {
                id: 5.2,
                title: "任务五 5.2 价格策略",
                description: "学习定价基础、定价方法、定价策略",
                pdf: "assets/教材/《金融产品营销实务》（第三版）项目一任务五.pdf",
                knowledge: [
                    {
                        title: "定价基础",
                        content: "定价需要考虑多方面因素。",
                        points: [
                            { title: "成本因素", text: "产品成本是定价的基础" },
                            { title: "需求因素", text: "客户需求和价格弹性" },
                            { title: "竞争因素", text: "竞争对手的价格和策略" },
                            { title: "政策因素", text: "法律法规和监管要求" },
                            { title: "目标因素", text: "企业的定价目标" }
                        ]
                    },
                    {
                        title: "定价方法",
                        content: "常用的定价方法有三类。",
                        points: [
                            { title: "成本导向定价", text: "以成本为基础，加上一定利润" },
                            { title: "需求导向定价", text: "以客户需求和价值认知为基础" },
                            { title: "竞争导向定价", text: "以竞争对手的价格为参考" }
                        ]
                    },
                    {
                        title: "定价策略",
                        content: "企业可以采用多种定价策略。",
                        points: [
                            { title: "撇脂定价", text: "新产品上市时定高价，快速回收成本" },
                            { title: "渗透定价", text: "定低价，快速扩大市场份额" },
                            { title: "满意定价", text: "定中等价格，兼顾各方利益" },
                            { title: "折扣定价", text: "通过折扣促进销售" },
                            { title: "差别定价", text: "对不同客户或场景定不同价格" },
                            { title: "组合定价", text: "相关产品组合定价" }
                        ]
                    }
                ],
                quiz: [
                    {
                        type: "single",
                        question: "撇脂定价适合：",
                        options: ["快速扩大市场份额", "新产品快速回收成本", "价格敏感型市场", "成熟市场"],
                        answer: 1,
                        explanation: "撇脂定价是新产品上市时定高价，快速回收成本。"
                    },
                    {
                        type: "multiple",
                        question: "定价方法包括：（多选）",
                        options: ["成本导向定价", "需求导向定价", "竞争导向定价", "利润导向定价"],
                        answer: [0, 1, 2],
                        explanation: "定价方法包括成本导向、需求导向、竞争导向三类。"
                    },
                    {
                        type: "single",
                        question: "以下哪项不属于定价基础因素：",
                        options: ["成本因素", "需求因素", "天气因素", "竞争因素"],
                        answer: 2,
                        explanation: "定价基础因素包括成本、需求、竞争、政策、目标等，不包括天气。"
                    },
                    {
                        type: "matching",
                        question: "请将定价策略与对应的特点匹配：",
                        options: [
                            { left: "撇脂定价", right: "新产品上市时定高价，快速回收成本" },
                            { left: "渗透定价", right: "定低价，快速扩大市场份额" },
                            { left: "满意定价", right: "定中等价格，兼顾各方利益" }
                        ],
                        explanation: "不同定价策略的特点。"
                    },
                    {
                        type: "case",
                        question: "案例分析：某银行推出一款新的理财产品，请分析适合采用什么定价策略。",
                        options: [],
                        answer: "需要考虑多方面因素：1. 如果产品创新性强、竞争对手少，可以考虑撇脂定价；2. 如果想快速占领市场，可以考虑渗透定价；3. 如果想稳健经营，可以考虑满意定价；4. 还需要结合产品定位、目标客户、市场环境等因素综合考虑。",
                        explanation: "需要结合定价策略进行分析。"
                    }
                ]
            },
            {
                id: 5.3,
                title: "任务五 5.3 促销策略",
                description: "学习促销组合、广告策略、人员推销、营业推广、公共关系",
                pdf: "assets/教材/《金融产品营销实务》（第三版）项目一任务五.pdf",
                knowledge: [
                    {
                        title: "促销组合",
                        content: "促销组合包括多种促销方式。",
                        points: [
                            { title: "广告", text: "付费的大众传播，覆盖面广" },
                            { title: "人员推销", text: "面对面沟通，建立关系" },
                            { title: "营业推广", text: "短期激励，促进快速购买" },
                            { title: "公共关系", text: "建立良好企业形象，提高美誉度" },
                            { title: "直效营销", text: "直接向目标客户传递信息" }
                        ]
                    },
                    {
                        title: "广告策略",
                        content: "广告是重要的促销方式。",
                        points: [
                            { title: "广告目标", text: "告知、说服、提醒" },
                            { title: "广告预算", text: "确定广告投入" },
                            { title: "广告创意", text: "设计广告内容和形式" },
                            { title: "媒体选择", text: "选择合适的广告媒体" },
                            { title: "效果评估", text: "评估广告效果" }
                        ]
                    },
                    {
                        title: "人员推销",
                        content: "人员推销是金融营销的重要方式。",
                        points: [
                            { title: "人员推销特点", text: "面对面、双向沟通、建立关系" },
                            { title: "推销过程", text: "寻找客户→准备→接近→介绍→处理异议→成交→跟进" },
                            { title: "推销技巧", text: "倾听、提问、演示、说服等" },
                            { title: "销售队伍管理", text: "招聘、培训、激励、评估" }
                        ]
                    },
                    {
                        title: "营业推广",
                        content: "营业推广是短期的促销激励。",
                        points: [
                            { title: "对客户的推广", text: "赠品、优惠、积分、抽奖等" },
                            { title: "对渠道的推广", text: "销售竞赛、折扣、返利等" },
                            { title: "对销售人员的推广", text: "奖金、竞赛、表彰等" }
                        ]
                    },
                    {
                        title: "公共关系",
                        content: "公共关系旨在建立良好的企业形象。",
                        points: [
                            { title: "新闻宣传", text: "通过媒体报道传播信息" },
                            { title: "公益活动", text: "参与公益事业，提升形象" },
                            { title: "关系维护", text: "与利益相关者建立良好关系" },
                            { title: "危机管理", text: "处理危机事件，维护声誉" }
                        ]
                    }
                ],
                quiz: [
                    {
                        type: "single",
                        question: "以下哪项不属于促销组合：",
                        options: ["广告", "人员推销", "产品设计", "公共关系"],
                        answer: 2,
                        explanation: "促销组合包括广告、人员推销、营业推广、公共关系、直效营销。"
                    },
                    {
                        type: "multiple",
                        question: "促销组合包括：（多选）",
                        options: ["广告", "人员推销", "营业推广", "公共关系"],
                        answer: [0, 1, 2, 3],
                        explanation: "促销组合包括广告、人员推销、营业推广、公共关系、直效营销。"
                    },
                    {
                        type: "single",
                        question: "面对面沟通，建立关系的促销方式是：",
                        options: ["广告", "人员推销", "营业推广", "公共关系"],
                        answer: 1,
                        explanation: "人员推销是面对面沟通的促销方式。"
                    },
                    {
                        type: "matching",
                        question: "请将促销方式与对应的特点匹配：",
                        options: [
                            { left: "广告", right: "付费的大众传播，覆盖面广" },
                            { left: "人员推销", right: "面对面沟通，建立关系" },
                            { left: "营业推广", right: "短期激励，促进快速购买" },
                            { left: "公共关系", right: "建立良好企业形象，提高美誉度" }
                        ],
                        explanation: "不同促销方式的特点。"
                    },
                    {
                        type: "judge",
                        question: "公共关系就是做广告。",
                        options: ["正确", "错误"],
                        answer: 1,
                        explanation: "公共关系不仅包括广告，还包括新闻宣传、公益活动、关系维护等。"
                    }
                ]
            },
            {
                id: 5.4,
                title: "任务五 5.4 分销策略",
                description: "学习分销渠道类型、直接/间接分销、分销策略选择",
                pdf: "assets/教材/《金融产品营销实务》（第三版）项目一任务五.pdf",
                knowledge: [
                    {
                        title: "分销渠道类型",
                        content: "金融产品可以通过多种渠道分销。",
                        points: [
                            { title: "按渠道长度分类", text: "直接渠道、间接渠道" },
                            { title: "按渠道宽度分类", text: "密集分销、选择分销、独家分销" },
                            { title: "按渠道类型分类", text: "实体渠道、电子渠道、移动渠道等" }
                        ]
                    },
                    {
                        title: "直接分销",
                        content: "直接分销是企业直接向客户销售。",
                        points: [
                            { title: "形式", text: "银行网点、客户经理、网上银行、手机银行等" },
                            { title: "优点", text: "控制强、服务好、信息反馈及时" },
                            { title: "缺点", text: "成本高、覆盖面有限" }
                        ]
                    },
                    {
                        title: "间接分销",
                        content: "间接分销是通过中间商销售。",
                        points: [
                            { title: "形式", text: "代理机构、经纪公司、销售伙伴等" },
                            { title: "优点", text: "覆盖面广、成本低、利用中间商资源" },
                            { title: "缺点", text: "控制弱、服务质量难以保证" }
                        ]
                    },
                    {
                        title: "分销策略选择",
                        content: "选择分销策略需要考虑多方面因素。",
                        points: [
                            { title: "产品因素", text: "产品特性、复杂程度" },
                            { title: "市场因素", text: "市场规模、客户分布" },
                            { title: "企业因素", text: "企业实力、管理能力" },
                            { title: "环境因素", text: "法律法规、技术发展" },
                            { title: "渠道策略", text: "密集分销、选择分销、独家分销" }
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
                        question: "分销渠道类型包括：（多选）",
                        options: ["直接渠道", "间接渠道", "密集分销", "选择分销"],
                        answer: [0, 1, 2, 3],
                        explanation: "分销渠道包括直接/间接渠道，以及密集/选择/独家分销等。"
                    },
                    {
                        type: "single",
                        question: "直接分销的优点是：",
                        options: ["成本低", "覆盖面广", "控制强", "利用中间商资源"],
                        answer: 2,
                        explanation: "直接分销的优点是控制力强、服务好、信息反馈及时。"
                    },
                    {
                        type: "judge",
                        question: "分销渠道越长越好。",
                        options: ["正确", "错误"],
                        answer: 1,
                        explanation: "渠道长度需要根据实际情况选择，不是越长越好。"
                    },
                    {
                        type: "matching",
                        question: "请将分销策略与对应的特点匹配：",
                        options: [
                            { left: "密集分销", right: "通过尽可能多的渠道销售" },
                            { left: "选择分销", right: "选择少数几家中间商" },
                            { left: "独家分销", right: "只选择一家中间商" }
                        ],
                        explanation: "不同分销策略的特点。"
                    }
                ]
            },
            {
                id: 6.1,
                title: "任务六 6.1 营销方案策划流程",
                description: "学习营销策划的步骤、策划书的构成要素",
                pdf: "assets/教材/《金融产品营销实务》（第三版）项目一任务六.pdf",
                knowledge: [
                    {
                        title: "营销策划的步骤",
                        content: "营销策划通常遵循以下步骤。",
                        points: [
                            { title: "市场分析", text: "分析宏观环境、市场需求、竞争状况、客户分析" },
                            { title: "目标市场选择", text: "进行市场细分，选择目标市场" },
                            { title: "确定营销目标", text: "制定具体的营销目标" },
                            { title: "制定营销组合", text: "设计产品、价格、渠道、促销策略" },
                            { title: "实施计划", text: "制定时间计划、人员分工、预算安排" },
                            { title: "监控评估", text: "跟踪执行情况，评估效果" }
                        ]
                    },
                    {
                        title: "策划书的构成要素",
                        content: "一份完整的营销策划书包括以下要素。",
                        points: [
                            { title: "执行摘要", text: "策划书的核心概要" },
                            { title: "背景分析", text: "市场、竞争、客户分析" },
                            { title: "营销目标", text: "具体的目标设定" },
                            { title: "目标市场", text: "目标市场定位" },
                            { title: "营销组合", text: "4P策略" },
                            { title: "实施计划", text: "时间、人员、预算" },
                            { title: "控制评估", text: "监控和评估方法" },
                            { title: "风险应对", text: "风险识别和应对措施" }
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
                    },
                    {
                        type: "multiple",
                        question: "完整的营销方案包括：（多选）",
                        options: ["市场分析", "目标市场", "营销组合", "实施计划"],
                        answer: [0, 1, 2, 3],
                        explanation: "完整的营销方案包括市场分析、目标市场、营销组合、实施计划等。"
                    },
                    {
                        type: "judge",
                        question: "营销方案一旦制定就不需要调整。",
                        options: ["正确", "错误"],
                        answer: 1,
                        explanation: "营销方案在执行过程中需要根据实际情况及时优化调整。"
                    }
                ]
            },
            {
                id: 6.2,
                title: "任务六 6.2 综合实战训练",
                description: "学习数字信用卡营销方案设计、养老理财产品营销方案设计",
                pdf: "assets/教材/《金融产品营销实务》（第三版）项目一任务六.pdf",
                knowledge: [
                    {
                        title: "数字信用卡营销方案设计",
                        content: "设计数字信用卡营销方案需要考虑多方面因素。",
                        points: [
                            { title: "目标客户定位", text: "年轻群体、职场新人、网购达人等" },
                            { title: "产品卖点设计", text: "权益设计、优惠活动、积分体系等" },
                            { title: "渠道策略", text: "线上渠道、社交媒体、KOL合作等" },
                            { title: "促销策略", text: "开卡礼、首刷礼、推荐奖励等" },
                            { title: "风险控制", text: "授信管理、反欺诈等" }
                        ]
                    },
                    {
                        title: "养老理财产品营销方案设计",
                        content: "设计养老理财产品营销方案需要针对老年客户特点。",
                        points: [
                            { title: "目标客户定位", text: "中老年群体、退休人士、有养老规划需求者" },
                            { title: "产品卖点设计", text: "稳健收益、风险可控、期限灵活等" },
                            { title: "渠道策略", text: "线下网点、社区营销、子女推荐等" },
                            { title: "服务策略", text: "便捷服务、专属顾问、适老化设计等" },
                            { title: "信任建立", text: "品牌信誉、合规透明、口碑传播等" }
                        ]
                    },
                    {
                        title: "综合营销方案设计要点",
                        content: "一个好的营销方案需要具备以下要素。",
                        points: [
                            { title: "目标明确", text: "具体、可衡量的营销目标" },
                            { title: "客户导向", text: "以客户需求为中心" },
                            { title: "差异化", text: "与竞争对手形成差异" },
                            { title: "可执行", text: "有具体的实施计划" },
                            { title: "可评估", text: "有明确的评估指标" }
                        ]
                    }
                ],
                quiz: [
                    {
                        type: "case",
                        question: "案例分析：请为某银行设计一款针对年轻客户的数字信用卡营销方案，包括目标客户、产品卖点、渠道策略、促销策略等。",
                        options: [],
                        answer: "1. 目标客户：18-35岁的年轻群体，包括大学生、职场新人、网购达人等。2. 产品卖点：年轻化卡面设计、网购优惠、积分兑换、消费分期、新户礼等。3. 渠道策略：线上渠道（手机银行、微信、支付宝）、社交媒体（抖音、小红书）、校园推广、KOL合作等。4. 促销策略：开卡礼、首刷礼、推荐奖励、消费满减、生日特权等。5. 服务策略：便捷的线上申请、快速审批、良好的客户服务。",
                        explanation: "需要结合数字信用卡的特点进行设计。"
                    },
                    {
                        type: "single",
                        question: "养老理财产品营销的关键是：",
                        options: ["高收益", "建立信任", "复杂设计", "快速销售"],
                        answer: 1,
                        explanation: "养老理财产品营销的关键是建立客户信任。"
                    },
                    {
                        type: "multiple",
                        question: "数字信用卡的目标客户通常包括：（多选）",
                        options: ["年轻群体", "职场新人", "网购达人", "退休人士"],
                        answer: [0, 1, 2],
                        explanation: "数字信用卡的目标客户通常是年轻群体、职场新人、网购达人等。"
                    },
                    {
                        type: "judge",
                        question: "养老理财产品应该强调高收益，淡化风险。",
                        options: ["正确", "错误"],
                        answer: 1,
                        explanation: "养老理财产品应该稳健为主，充分披露风险。"
                    },
                    {
                        type: "case",
                        question: "案例分析：请为某银行设计一款针对中老年客户的养老理财产品营销方案。",
                        options: [],
                        answer: "1. 目标客户：50岁以上的中老年群体，有养老规划需求，风险偏好稳健。2. 产品卖点：稳健收益、风险可控、期限灵活、操作便捷、专属服务。3. 渠道策略：线下网点（专人服务）、社区营销、子女推荐、老年大学合作等。4. 服务策略：适老化设计（大字体、语音提示）、专属理财顾问、便捷的办理流程、家属协助服务。5. 信任建立：品牌信誉、合规透明、老客户口碑、社区活动等。",
                        explanation: "需要结合养老理财的特点进行设计。"
                    }
                ]
            }
        ]
    }
];
