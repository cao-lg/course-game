const newProjectOne = {
    id: 1,
    title: "项目一 认知金融与金融产品营销",
    description: "从基础到进阶，全面了解金融产品与营销知识",
    icon: "fa-lightbulb",
    subLevels: [
        {
            id: 1.1,
            title: "任务1.1 金融与金融机构认知",
            description: "了解金融的本质和金融机构分类",
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
                    title: "金融机构分类",
                    content: "金融机构是专门从事金融活动的组织，包括银行类和非银行类机构。",
                    points: [
                        { title: "银行类机构", text: "中央银行、商业银行、政策性银行、信用合作社等" },
                        { title: "非银行类机构", text: "证券公司、保险公司、信托投资公司、基金管理公司、期货公司等" },
                        { title: "监管机构", text: "中国人民银行、银保监会、证监会等" }
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
                },
                {
                    type: "single",
                    question: "在金融活动中，最基本的功能是：",
                    options: ["融通资金", "风险分散", "信息提供", "流动性转换"],
                    answer: 0,
                    explanation: "融通资金是金融活动最基本的功能，连接资金盈余方和资金短缺方。"
                },
                {
                    type: "multiple",
                    question: "以下属于非银行类金融机构的有：（多选）",
                    options: ["保险公司", "商业银行", "证券公司", "基金管理公司"],
                    answer: [0, 2, 3],
                    explanation: "保险公司、证券公司、基金管理公司都属于非银行类金融机构，商业银行是银行类机构。"
                },
                {
                    type: "judge",
                    question: "中央银行是商业银行的一种特殊形式。",
                    options: ["正确", "错误"],
                    answer: 1,
                    explanation: "中央银行不是商业银行，是国家管理机构，发行的银行、银行的银行、政府的银行。"
                }
            ]
        },
        {
            id: 1.2,
            title: "任务1.2 金融产品的层次与特征",
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
                        { title: "同质性", text: "不同金融机构提供的同类产品差异不大" },
                        { title: "风险性", text: "金融产品存在各种风险，如市场风险、信用风险等" },
                        { title: "收益性", text: "金融产品能为客户带来收益" }
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
                    question: "金融产品的形式产品主要包括：",
                    options: ["核心利益", "品牌、特点和包装", "附加服务", "客户体验"],
                    answer: 1,
                    explanation: "形式产品是核心产品的载体，包括品牌、特点、包装、质量等。"
                },
                {
                    type: "multiple",
                    question: "金融产品的主要特征包括：（多选）",
                    options: ["无形性", "同质性", "风险性", "易模仿性"],
                    answer: [0, 1, 2, 3],
                    explanation: "金融产品具有无形性、不可分割性、同质性、易模仿性、风险性、收益性、增值性等特征。"
                },
                {
                    type: "judge",
                    question: "金融产品由于具有同质性，所以各机构的产品完全无差异。",
                    options: ["正确", "错误"],
                    answer: 1,
                    explanation: "金融产品具有同质性但仍有差异，各机构在服务、品牌、利率等方面有所区别。"
                }
            ]
        },
        {
            id: 1.3,
            title: "任务1.3 常见金融产品类型",
            description: "认识银行、证券、保险等各类金融产品",
            knowledge: [
                {
                    title: "银行类产品",
                    content: "银行类金融产品包括存款、贷款、理财产品、银行卡等。",
                    points: [
                        { title: "存款产品", text: "活期存款、定期存款、通知存款、大额存单等" },
                        { title: "贷款产品", text: "个人贷款、企业贷款、住房贷款、消费贷款等" },
                        { title: "理财产品", text: "保本型、非保本型、结构性理财产品等" },
                        { title: "银行卡", text: "借记卡、信用卡、准贷记卡等" }
                    ]
                },
                {
                    title: "证券类产品",
                    content: "证券类金融产品包括股票、债券、基金、期货、期权等。",
                    points: [
                        { title: "股票", text: "普通股、优先股，代表公司所有权" },
                        { title: "债券", text: "国债、企业债、金融债，代表债权债务关系" },
                        { title: "基金", text: "股票型、债券型、混合型、货币市场基金等" },
                        { title: "衍生品", text: "期货、期权、互换、远期等" }
                    ]
                },
                {
                    title: "保险类产品",
                    content: "保险类产品包括人寿保险、财产保险、健康保险、意外险等。",
                    points: [
                        { title: "人寿保险", text: "定期寿险、终身寿险、年金保险、两全保险等" },
                        { title: "财产保险", text: "车险、家财险、企业财产险等" },
                        { title: "健康保险", text: "重疾险、医疗险、护理险等" },
                        { title: "意外险", text: "综合意外险、特定意外险等" }
                    ]
                }
            ],
            quiz: [
                {
                    type: "single",
                    question: "以下不属于银行类产品的是：",
                    options: ["定期存款", "股票", "理财产品", "信用卡"],
                    answer: 1,
                    explanation: "股票属于证券类产品，不属于银行类产品。"
                },
                {
                    type: "multiple",
                    question: "以下属于保险类产品的有：（多选）",
                    options: ["重疾险", "股票型基金", "车险", "国债"],
                    answer: [0, 2],
                    explanation: "重疾险和车险属于保险类产品，股票型基金属于证券类产品，国债属于债券类产品。"
                },
                {
                    type: "judge",
                    question: "股票代表的是对公司的债权。",
                    options: ["正确", "错误"],
                    answer: 1,
                    explanation: "股票代表的是公司所有权，债券代表的是债权债务关系。"
                },
                {
                    type: "single",
                    question: "以下哪种基金风险最低：",
                    options: ["股票型基金", "债券型基金", "混合型基金", "货币市场基金"],
                    answer: 3,
                    explanation: "货币市场基金主要投资于短期货币工具，风险相对最低。"
                },
                {
                    type: "multiple",
                    question: "常见的金融产品类型包括：（多选）",
                    options: ["银行类", "证券类", "保险类", "房地产类"],
                    answer: [0, 1, 2],
                    explanation: "常见的金融产品类型包括银行类、证券类、保险类等，房地产属于实物资产而非金融产品。"
                }
            ]
        },
        {
            id: 2.1,
            title: "任务2.1 营销与金融营销概述",
            description: "了解营销的基本概念和金融营销的特点",
            knowledge: [
                {
                    title: "营销的基本概念",
                    content: "营销是指企业发现或挖掘消费者需求，从整体营造以及自身产品形态的营造去推广和销售产品。",
                    points: [
                        { title: "核心概念", text: "需要、欲望和需求；产品；价值和满意；交换和交易；市场" },
                        { title: "营销观念演进", text: "生产观念、产品观念、推销观念、营销观念、社会营销观念" },
                        { title: "营销4P", text: "产品（Product）、价格（Price）、渠道（Place）、促销（Promotion）" }
                    ]
                },
                {
                    title: "金融营销的特点",
                    content: "金融营销是指金融企业以金融市场为导向，利用自身资源优势，通过各种营销手段，向客户提供金融产品和服务。",
                    points: [
                        { title: "专业性强", text: "金融产品复杂，需要专业知识" },
                        { title: "风险性高", text: "涉及资金安全，风险控制重要" },
                        { title: "监管严格", text: "受法律法规严格监管" },
                        { title: "关系营销重要", text: "客户关系维护至关重要" }
                    ]
                }
            ],
            quiz: [
                {
                    type: "single",
                    question: "营销4P不包括：",
                    options: ["产品", "价格", "计划", "促销"],
                    answer: 2,
                    explanation: "营销4P包括产品（Product）、价格（Price）、渠道（Place）、促销（Promotion）。"
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
                    question: "以下哪项不是金融营销的特点：",
                    options: ["专业性强", "风险性高", "监管宽松", "关系营销重要"],
                    answer: 2,
                    explanation: "金融营销受法律法规严格监管，而非监管宽松。"
                },
                {
                    type: "multiple",
                    question: "营销观念的演进包括：（多选）",
                    options: ["生产观念", "产品观念", "推销观念", "营销观念"],
                    answer: [0, 1, 2, 3],
                    explanation: "营销观念演进包括生产观念、产品观念、推销观念、营销观念、社会营销观念。"
                },
                {
                    type: "judge",
                    question: "金融营销的核心是销售产品。",
                    options: ["正确", "错误"],
                    answer: 1,
                    explanation: "金融营销的核心是满足客户需求，而非单纯销售产品。"
                }
            ]
        },
        {
            id: 2.2,
            title: "任务2.2 金融营销的核心理念",
            description: "掌握以客户为中心的金融营销理念",
            knowledge: [
                {
                    title: "以客户为中心",
                    content: "现代金融营销强调以客户为中心，从客户需求出发，提供满足客户需求的产品和服务。",
                    points: [
                        { title: "客户导向", text: "从客户需求出发，而非从产品出发" },
                        { title: "客户价值", text: "为客户创造价值，提高客户满意度" },
                        { title: "客户忠诚", text: "通过优质服务培养客户忠诚度" },
                        { title: "客户终身价值", text: "关注客户长期价值而非短期利益" }
                    ]
                },
                {
                    title: "金融营销的重要原则",
                    content: "金融营销需要遵循诚信、合规、专业、创新等重要原则。",
                    points: [
                        { title: "诚信原则", text: "诚实守信，不误导客户" },
                        { title: "合规原则", text: "遵守法律法规和监管要求" },
                        { title: "专业原则", text: "提供专业的金融服务" },
                        { title: "创新原则", text: "不断创新产品和服务" }
                    ]
                }
            ],
            quiz: [
                {
                    type: "single",
                    question: "现代金融营销的核心理念是：",
                    options: ["以产品为中心", "以客户为中心", "以销售为中心", "以利润为中心"],
                    answer: 1,
                    explanation: "现代金融营销强调以客户为中心。"
                },
                {
                    type: "judge",
                    question: "金融营销中，为了提高业绩，可以适当夸大产品收益。",
                    options: ["正确", "错误"],
                    answer: 1,
                    explanation: "金融营销必须遵循诚信原则，不能夸大收益或隐瞒风险。"
                },
                {
                    type: "single",
                    question: "以下哪项不属于金融营销的重要原则：",
                    options: ["诚信原则", "合规原则", "利益最大化原则", "专业原则"],
                    answer: 2,
                    explanation: "金融营销的重要原则包括诚信、合规、专业、创新等，不包括单纯的利益最大化原则。"
                },
                {
                    type: "multiple",
                    question: "以客户为中心的理念包括：（多选）",
                    options: ["客户导向", "客户价值", "客户忠诚", "客户终身价值"],
                    answer: [0, 1, 2, 3],
                    explanation: "以客户为中心的理念包括客户导向、客户价值、客户忠诚、客户终身价值等。"
                },
                {
                    type: "judge",
                    question: "关注客户终身价值意味着要重视短期销售业绩。",
                    options: ["正确", "错误"],
                    answer: 1,
                    explanation: "关注客户终身价值意味着要重视长期客户关系，而非短期销售业绩。"
                }
            ]
        },
        {
            id: 2.3,
            title: "任务2.3 金融营销人员的职业素养",
            description: "了解金融营销人员应具备的职业素养",
            knowledge: [
                {
                    title: "职业道德",
                    content: "金融营销人员应具备良好的职业道德，包括诚实守信、廉洁自律、客户至上等。",
                    points: [
                        { title: "诚实守信", text: "如实告知产品信息，不隐瞒风险" },
                        { title: "廉洁自律", text: "不接受贿赂，不谋取不正当利益" },
                        { title: "客户至上", text: "客户利益优先，保护客户权益" },
                        { title: "保守秘密", text: "保护客户信息和商业机密" }
                    ]
                },
                {
                    title: "专业能力",
                    content: "金融营销人员应具备扎实的专业知识和业务能力。",
                    points: [
                        { title: "金融知识", text: "熟悉各类金融产品和市场" },
                        { title: "法律知识", text: "了解相关法律法规和监管要求" },
                        { title: "沟通能力", text: "良好的沟通表达和倾听能力" },
                        { title: "服务能力", text: "提供优质客户服务的能力" }
                    ]
                },
                {
                    title: "心理素质",
                    content: "金融营销人员应具备良好的心理素质，包括抗压能力、自信心、同理心等。",
                    points: [
                        { title: "抗压能力", text: "能够承受工作压力和挫折" },
                        { title: "自信心", text: "对自己和产品有信心" },
                        { title: "同理心", text: "能够理解客户的感受和需求" },
                        { title: "积极心态", text: "保持积极乐观的工作态度" }
                    ]
                }
            ],
            quiz: [
                {
                    type: "single",
                    question: "金融营销人员的职业道德不包括：",
                    options: ["诚实守信", "夸大收益", "廉洁自律", "保守秘密"],
                    answer: 1,
                    explanation: "金融营销人员应诚实守信，不能夸大收益。"
                },
                {
                    type: "judge",
                    question: "金融营销人员可以将客户信息出售给第三方以获取利益。",
                    options: ["正确", "错误"],
                    answer: 1,
                    explanation: "金融营销人员必须保守客户秘密，保护客户信息安全。"
                },
                {
                    type: "single",
                    question: "金融营销人员最重要的专业能力是：",
                    options: ["销售技巧", "金融知识", "外表形象", "酒量"],
                    answer: 1,
                    explanation: "金融营销人员最重要的专业能力是扎实的金融知识。"
                },
                {
                    type: "multiple",
                    question: "金融营销人员应具备的心理素质包括：（多选）",
                    options: ["抗压能力", "自信心", "同理心", "积极心态"],
                    answer: [0, 1, 2, 3],
                    explanation: "金融营销人员应具备抗压能力、自信心、同理心、积极心态等心理素质。"
                },
                {
                    type: "judge",
                    question: "客户至上意味着客户的所有要求都要满足。",
                    options: ["正确", "错误"],
                    answer: 1,
                    explanation: "客户至上意味着要在合规的前提下满足客户的合理需求，而非所有要求。"
                }
            ]
        },
        {
            id: 3.1,
            title: "任务3.1 宏观环境分析（PESTEL）",
            description: "掌握政治、经济、社会、技术等环境因素",
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
                    type: "select-matching",
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
                    type: "single",
                    question: "以下哪项属于社会因素：",
                    options: ["利率变化", "人口老龄化", "人工智能", "新的监管法规"],
                    answer: 1,
                    explanation: "人口老龄化属于社会因素。"
                }
            ]
        },
        {
            id: 3.2,
            title: "任务3.2 微观环境分析（波特五力）",
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
                    type: "select-matching",
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
            id: 3.3,
            title: "任务3.3 SWOT分析与战略选择",
            description: "运用SWOT分析进行战略规划",
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
                },
                {
                    type: "multiple",
                    question: "SWOT分析可以用于：（多选）",
                    options: ["企业战略规划", "竞争对手分析", "产品定位", "个人职业规划"],
                    answer: [0, 1, 2, 3],
                    explanation: "SWOT分析可以用于企业战略规划、竞争对手分析、产品定位，也可以用于个人职业规划。"
                },
                {
                    type: "judge",
                    question: "SWOT分析只关注内部因素。",
                    options: ["正确", "错误"],
                    answer: 1,
                    explanation: "SWOT分析既关注内部因素（优势、劣势），也关注外部因素（机会、威胁）。"
                }
            ]
        },
        {
            id: 4.1,
            title: "任务4.1 金融客户需求分析",
            description: "了解金融客户的需求层次和特点",
            knowledge: [
                {
                    title: "客户需求层次",
                    content: "根据马斯洛需求层次理论，金融客户需求也有不同层次。",
                    points: [
                        { title: "安全需求", text: "资金安全、风险控制是基本需求" },
                        { title: "收益需求", text: "资产增值、获得投资收益" },
                        { title: "便利需求", text: "便捷的服务渠道和操作方式" },
                        { title: "尊重需求", text: "受到尊重和重视，获得优质服务" },
                        { title: "自我实现", text: "财富管理、财务规划、实现人生目标" }
                    ]
                },
                {
                    title: "金融客户需求特点",
                    content: "金融客户需求有其自身特点。",
                    points: [
                        { title: "复杂性", text: "金融需求往往比较复杂" },
                        { title: "层次性", text: "不同客户有不同层次的需求" },
                        { title: "发展性", text: "客户需求随时间和情况变化" },
                        { title: "差异性", text: "不同客户需求差异较大" }
                    ]
                }
            ],
            quiz: [
                {
                    type: "single",
                    question: "金融客户最基本的需求是：",
                    options: ["收益需求", "安全需求", "便利需求", "尊重需求"],
                    answer: 1,
                    explanation: "资金安全、风险控制是金融客户最基本的需求。"
                },
                {
                    type: "multiple",
                    question: "金融客户需求特点包括：（多选）",
                    options: ["复杂性", "层次性", "发展性", "差异性"],
                    answer: [0, 1, 2, 3],
                    explanation: "金融客户需求特点包括复杂性、层次性、发展性、差异性等。"
                },
                {
                    type: "judge",
                    question: "所有客户的金融需求都是一样的。",
                    options: ["正确", "错误"],
                    answer: 1,
                    explanation: "不同客户的金融需求差异较大。"
                },
                {
                    type: "single",
                    question: "客户需要财富管理和财务规划，属于哪个需求层次：",
                    options: ["安全需求", "收益需求", "尊重需求", "自我实现"],
                    answer: 3,
                    explanation: "财富管理、财务规划属于自我实现层次的需求。"
                },
                {
                    type: "multiple",
                    question: "以下属于金融客户需求的有：（多选）",
                    options: ["资金安全", "资产增值", "便捷服务", "受到尊重"],
                    answer: [0, 1, 2, 3],
                    explanation: "资金安全、资产增值、便捷服务、受到尊重都是金融客户的需求。"
                }
            ]
        },
        {
            id: 4.2,
            title: "任务4.2 客户分层与客户画像",
            description: "学习客户分层方法和客户画像技术",
            knowledge: [
                {
                    title: "客户分层",
                    content: "客户分层是根据客户特征将客户划分为不同群体的过程。",
                    points: [
                        { title: "分层标准", text: "资产规模、年龄、职业、风险偏好、需求特点等" },
                        { title: "常见分层", text: "普通客户、中端客户、高端客户、私人银行客户" },
                        { title: "分层意义", text: "精准营销、优化资源配置、提高服务效率" }
                    ]
                },
                {
                    title: "客户画像",
                    content: "客户画像是通过数据采集和分析，构建客户全方位特征画像。",
                    points: [
                        { title: "基本信息", text: "年龄、性别、职业、收入、教育背景等" },
                        { title: "金融信息", text: "资产状况、投资偏好、风险承受能力、交易习惯等" },
                        { title: "行为信息", text: "消费习惯、生活方式、兴趣爱好等" },
                        { title: "应用价值", text: "精准营销、个性化服务、风险控制" }
                    ]
                }
            ],
            quiz: [
                {
                    type: "single",
                    question: "客户分层的目的是：",
                    options: ["歧视客户", "精准营销和优化资源配置", "增加客户数量", "提高产品价格"],
                    answer: 1,
                    explanation: "客户分层的目的是精准营销、优化资源配置、提高服务效率。"
                },
                {
                    type: "multiple",
                    question: "客户画像通常包括：（多选）",
                    options: ["基本信息", "金融信息", "行为信息", "医疗记录"],
                    answer: [0, 1, 2],
                    explanation: "客户画像通常包括基本信息、金融信息、行为信息等，不包括医疗记录。"
                },
                {
                    type: "judge",
                    question: "客户分层是按资产规模将客户分为三六九等，是对客户的歧视。",
                    options: ["正确", "错误"],
                    answer: 1,
                    explanation: "客户分层是为了更好地满足不同客户的需求，提供更精准的服务，不是歧视。"
                },
                {
                    type: "single",
                    question: "以下哪项不是常见的客户分层标准：",
                    options: ["资产规模", "风险偏好", "身高体重", "职业"],
                    answer: 2,
                    explanation: "身高体重通常不是客户分层的标准。"
                },
                {
                    type: "multiple",
                    question: "客户画像的应用价值包括：（多选）",
                    options: ["精准营销", "个性化服务", "风险控制", "侵犯隐私"],
                    answer: [0, 1, 2],
                    explanation: "客户画像的应用价值包括精准营销、个性化服务、风险控制等，必须在合规前提下进行，不能侵犯隐私。"
                }
            ]
        },
        {
            id: 4.3,
            title: "任务4.3 客户沟通与信任建立",
            description: "掌握有效沟通技巧和建立客户信任的方法",
            knowledge: [
                {
                    title: "有效沟通技巧",
                    content: "有效的客户沟通是金融营销的基础。",
                    points: [
                        { title: "倾听", text: "认真倾听客户需求，不打断客户" },
                        { title: "表达", text: "清晰、简洁、专业地表达" },
                        { title: "提问", text: "通过提问了解客户真实需求" },
                        { title: "反馈", text: "及时给予客户反馈" },
                        { title: "非语言沟通", text: "注意肢体语言、表情、语气等" }
                    ]
                },
                {
                    title: "建立客户信任",
                    content: "信任是金融营销的基石。",
                    points: [
                        { title: "专业能力", text: "用专业知识赢得客户信任" },
                        { title: "诚实守信", text: "说到做到，不欺骗客户" },
                        { title: "客户利益优先", text: "站在客户角度考虑问题" },
                        { title: "持续服务", text: "保持长期稳定的服务" }
                    ]
                }
            ],
            quiz: [
                {
                    type: "single",
                    question: "有效沟通的第一步是：",
                    options: ["表达自己的观点", "倾听客户", "展示专业知识", "推销产品"],
                    answer: 1,
                    explanation: "有效沟通的第一步是认真倾听客户需求。"
                },
                {
                    type: "multiple",
                    question: "建立客户信任的方法包括：（多选）",
                    options: ["专业能力", "诚实守信", "客户利益优先", "持续服务"],
                    answer: [0, 1, 2, 3],
                    explanation: "建立客户信任的方法包括专业能力、诚实守信、客户利益优先、持续服务等。"
                },
                {
                    type: "judge",
                    question: "在沟通中，应该多说话少倾听，这样才能展示专业能力。",
                    options: ["正确", "错误"],
                    answer: 1,
                    explanation: "在沟通中，应该多倾听少说话，认真了解客户需求。"
                },
                {
                    type: "single",
                    question: "以下哪项不利于建立客户信任：",
                    options: ["诚实守信", "夸大收益", "专业能力", "持续服务"],
                    answer: 1,
                    explanation: "夸大收益会失去客户信任。"
                },
                {
                    type: "multiple",
                    question: "非语言沟通包括：（多选）",
                    options: ["肢体语言", "表情", "语气", "书面报告"],
                    answer: [0, 1, 2],
                    explanation: "非语言沟通包括肢体语言、表情、语气等。"
                }
            ]
        },
        {
            id: 5.1,
            title: "任务5.1 金融营销目标设定",
            description: "学习如何设定合理的金融营销目标",
            knowledge: [
                {
                    title: "SMART原则",
                    content: "设定营销目标应遵循SMART原则。",
                    points: [
                        { title: "具体的（Specific）", text: "目标要具体明确" },
                        { title: "可衡量的（Measurable）", text: "目标要可以量化衡量" },
                        { title: "可实现的（Attainable）", text: "目标要具有挑战性但可实现" },
                        { title: "相关的（Relevant）", text: "目标要与企业战略相关" },
                        { title: "有时限的（Time-bound）", text: "目标要有明确的时间限制" }
                    ]
                },
                {
                    title: "常见营销目标类型",
                    content: "金融营销目标包括销售目标、客户目标、品牌目标等。",
                    points: [
                        { title: "销售目标", text: "销售额、销售量、市场份额等" },
                        { title: "客户目标", text: "新客户数量、客户满意度、客户忠诚度等" },
                        { title: "品牌目标", text: "品牌知名度、美誉度、认知度等" },
                        { title: "利润目标", text: "利润、利润率、投资回报率等" }
                    ]
                }
            ],
            quiz: [
                {
                    type: "single",
                    question: "SMART原则中的M代表：",
                    options: ["具体的", "可衡量的", "可实现的", "有时限的"],
                    answer: 1,
                    explanation: "SMART原则中的M代表Measurable，即可衡量的。"
                },
                {
                    type: "multiple",
                    question: "SMART原则包括：（多选）",
                    options: ["具体的", "可衡量的", "可实现的", "相关的", "有时限的"],
                    answer: [0, 1, 2, 3, 4],
                    explanation: "SMART原则包括具体的、可衡量的、可实现的、相关的、有时限的。"
                },
                {
                    type: "judge",
                    question: "设定营销目标越高越好，这样才能有动力。",
                    options: ["正确", "错误"],
                    answer: 1,
                    explanation: "营销目标应具有挑战性但可实现，过高的不切实际的目标会打击士气。"
                },
                {
                    type: "single",
                    question: "以下哪项属于客户目标：",
                    options: ["销售额增长10%", "新客户增长20%", "品牌知名度提升", "利润增长5%"],
                    answer: 1,
                    explanation: "新客户增长属于客户目标。"
                },
                {
                    type: "select-matching",
                    question: "请将SMART原则要素与对应的含义匹配：",
                    options: [
                        { left: "S", right: "具体的" },
                        { left: "M", right: "可衡量的" },
                        { left: "A", right: "可实现的" },
                        { left: "R", right: "相关的" },
                        { left: "T", right: "有时限的" }
                    ],
                    explanation: "SMART原则各要素的含义。"
                }
            ]
        },
        {
            id: 5.2,
            title: "任务5.2 目标市场选择与定位",
            description: "掌握市场细分、目标市场选择和市场定位方法",
            knowledge: [
                {
                    title: "市场细分",
                    content: "市场细分是将整个市场划分为具有相似特征的消费者群体的过程。",
                    points: [
                        { title: "细分标准", text: "人口、地理、心理、行为等" },
                        { title: "人口细分", text: "年龄、性别、收入、职业、教育程度、家庭生命周期等" },
                        { title: "地理细分", text: "地区、城市规模、人口密度、气候等" },
                        { title: "心理细分", text: "生活方式、个性、价值观、社会阶层等" },
                        { title: "行为细分", text: "购买时机、追求利益、使用频率、品牌忠诚度等" }
                    ]
                },
                {
                    title: "目标市场选择",
                    content: "在市场细分基础上选择目标市场的策略。",
                    points: [
                        { title: "无差异策略", text: "忽略差异，向整个市场提供单一产品" },
                        { title: "差异策略", text: "选择多个细分市场，为每个市场设计不同产品" },
                        { title: "集中策略", text: "集中力量于一个或少数几个细分市场" }
                    ]
                },
                {
                    title: "市场定位",
                    content: "为产品在目标顾客心目中确立独特位置的过程。",
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
                    question: "按年龄、收入、职业划分市场属于：",
                    options: ["人口细分", "地理细分", "心理细分", "行为细分"],
                    answer: 0,
                    explanation: "年龄、收入、职业属于人口细分标准。"
                },
                {
                    type: "multiple",
                    question: "市场细分标准包括：（多选）",
                    options: ["人口细分", "地理细分", "心理细分", "行为细分"],
                    answer: [0, 1, 2, 3],
                    explanation: "市场细分标准包括人口、地理、心理、行为等。"
                },
                {
                    type: "judge",
                    question: "集中策略适合资源有限的中小企业。",
                    options: ["正确", "错误"],
                    answer: 0,
                    explanation: "集中策略将资源集中在少数细分市场，适合资源有限的中小企业。"
                },
                {
                    type: "single",
                    question: "市场定位的核心是：",
                    options: ["降低价格", "与竞争对手区别开来", "扩大市场份额", "提高知名度"],
                    answer: 1,
                    explanation: "市场定位的核心是与竞争对手区别开来，建立独特的市场地位。"
                },
                {
                    type: "select-matching",
                    question: "请将目标市场策略与对应的含义匹配：",
                    options: [
                        { left: "无差异策略", right: "忽略差异，向整个市场提供单一产品" },
                        { left: "差异策略", right: "选择多个细分市场，为每个市场设计不同产品" },
                        { left: "集中策略", right: "集中力量于一个或少数几个细分市场" }
                    ],
                    explanation: "三种目标市场策略的定义。"
                }
            ]
        },
        {
            id: 5.3,
            title: "任务5.3 金融营销组合策略（4P）",
            description: "掌握产品、价格、渠道、促销策略",
            knowledge: [
                {
                    title: "产品策略",
                    content: "产品策略是营销组合的基础。",
                    points: [
                        { title: "产品生命周期", text: "导入期、成长期、成熟期、衰退期" },
                        { title: "产品组合", text: "产品线延伸、产品线扩充" },
                        { title: "品牌策略", text: "品牌建设、品牌维护、品牌延伸" },
                        { title: "创新策略", text: "产品创新、服务创新" }
                    ]
                },
                {
                    title: "价格策略",
                    content: "价格策略直接影响销售和利润。",
                    points: [
                        { title: "定价方法", text: "成本导向、需求导向、竞争导向" },
                        { title: "撇脂定价", text: "新产品上市时定高价，快速回收成本" },
                        { title: "渗透定价", text: "定低价，快速扩大市场份额" },
                        { title: "满意定价", text: "定中等价格，兼顾各方利益" }
                    ]
                },
                {
                    title: "渠道策略",
                    content: "渠道策略决定产品如何到达客户。",
                    points: [
                        { title: "直接渠道", text: "银行网点、客户经理、网上银行、手机银行等" },
                        { title: "间接渠道", text: "代理机构、经纪公司、销售伙伴等" },
                        { title: "渠道选择", text: "密集分销、选择分销、独家分销" },
                        { title: "渠道管理", text: "渠道评估、渠道优化、渠道创新" }
                    ]
                },
                {
                    title: "促销策略",
                    content: "促销策略促进产品销售和品牌建设。",
                    points: [
                        { title: "广告", text: "付费的大众传播，覆盖面广" },
                        { title: "人员推销", text: "面对面沟通，建立关系" },
                        { title: "营业推广", text: "短期激励，促进快速购买" },
                        { title: "公共关系", text: "建立良好企业形象，提高美誉度" }
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
                    type: "single",
                    question: "撇脂定价适合：",
                    options: ["快速扩大市场份额", "新产品快速回收成本", "价格敏感型市场", "成熟市场"],
                    answer: 1,
                    explanation: "撇脂定价是新产品上市时定高价，快速回收成本。"
                },
                {
                    type: "multiple",
                    question: "促销组合包括：（多选）",
                    options: ["广告", "人员推销", "营业推广", "公共关系"],
                    answer: [0, 1, 2, 3],
                    explanation: "促销组合包括广告、人员推销、营业推广、公共关系。"
                },
                {
                    type: "single",
                    question: "以下哪种属于直接分销渠道：",
                    options: ["代理机构", "经纪公司", "网上银行", "销售伙伴"],
                    answer: 2,
                    explanation: "网上银行属于直接分销渠道。"
                },
                {
                    type: "judge",
                    question: "营销4P中，产品策略最重要，其他策略不重要。",
                    options: ["正确", "错误"],
                    answer: 1,
                    explanation: "营销4P中的四个策略都很重要，需要协同配合。"
                }
            ]
        },
        {
            id: 5.4,
            title: "任务5.4 营销方案策划与执行",
            description: "学习完整的营销方案策划和执行流程",
            knowledge: [
                {
                    title: "营销方案构成",
                    content: "一份完整的金融产品营销方案包括多个关键要素。",
                    points: [
                        { title: "市场分析", text: "宏观环境、市场需求、竞争分析、客户分析" },
                        { title: "目标市场", text: "目标客户定位、市场细分、市场定位" },
                        { title: "营销目标", text: "销售目标、市场份额目标、品牌目标、利润目标" },
                        { title: "营销组合", text: "产品策略、价格策略、渠道策略、促销策略" },
                        { title: "实施计划", text: "时间计划、人员分工、预算分配、监控评估" }
                    ]
                },
                {
                    title: "营销方案执行",
                    content: "营销方案的有效执行同样重要。",
                    points: [
                        { title: "组织保障", text: "明确责任分工，建立执行团队" },
                        { title: "资源配置", text: "合理配置人力、物力、财力资源" },
                        { title: "沟通协调", text: "加强内部沟通，协调各方资源" },
                        { title: "监控评估", text: "跟踪执行进度，评估执行效果" },
                        { title: "优化调整", text: "根据执行情况及时优化调整" }
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
                    type: "single",
                    question: "营销方案执行的第一步是：",
                    options: ["监控评估", "组织保障", "资源配置", "优化调整"],
                    answer: 1,
                    explanation: "营销方案执行首先需要组织保障，明确责任分工。"
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
            id: 6.1,
            title: "任务6.1 金融营销风险识别与防范",
            description: "了解金融营销中的各类风险及防范措施",
            knowledge: [
                {
                    title: "常见营销风险类型",
                    content: "金融营销中存在多种风险，需要识别和防范。",
                    points: [
                        { title: "合规风险", text: "违反法律法规和监管要求的风险" },
                        { title: "声誉风险", text: "损害企业声誉和品牌形象的风险" },
                        { title: "操作风险", text: "操作不当或系统问题导致的风险" },
                        { title: "信用风险", text: "客户违约导致的风险" },
                        { title: "市场风险", text: "市场变化导致的风险" }
                    ]
                },
                {
                    title: "风险防范措施",
                    content: "采取有效措施防范营销风险。",
                    points: [
                        { title: "合规培训", text: "加强合规教育，提高合规意识" },
                        { title: "制度建设", text: "建立健全风险管理制度" },
                        { title: "流程优化", text: "优化业务流程，减少操作风险" },
                        { title: "监督检查", text: "加强监督检查，及时发现问题" },
                        { title: "应急处理", text: "制定应急预案，及时处理风险事件" }
                    ]
                }
            ],
            quiz: [
                {
                    type: "single",
                    question: "违反法律法规和监管要求的风险属于：",
                    options: ["合规风险", "声誉风险", "操作风险", "市场风险"],
                    answer: 0,
                    explanation: "违反法律法规和监管要求的风险属于合规风险。"
                },
                {
                    type: "multiple",
                    question: "常见的金融营销风险包括：（多选）",
                    options: ["合规风险", "声誉风险", "操作风险", "信用风险"],
                    answer: [0, 1, 2, 3],
                    explanation: "常见的金融营销风险包括合规风险、声誉风险、操作风险、信用风险、市场风险等。"
                },
                {
                    type: "judge",
                    question: "只要业绩好，有点违规没关系。",
                    options: ["正确", "错误"],
                    answer: 1,
                    explanation: "合规是底线，不能以业绩为借口违反规定。"
                },
                {
                    type: "single",
                    question: "风险防范的第一道防线是：",
                    options: ["监督检查", "制度建设", "合规培训", "应急处理"],
                    answer: 2,
                    explanation: "合规培训提高员工合规意识，是风险防范的第一道防线。"
                },
                {
                    type: "multiple",
                    question: "风险防范措施包括：（多选）",
                    options: ["合规培训", "制度建设", "流程优化", "监督检查"],
                    answer: [0, 1, 2, 3],
                    explanation: "风险防范措施包括合规培训、制度建设、流程优化、监督检查、应急处理等。"
                }
            ]
        },
        {
            id: 6.2,
            title: "任务6.2 金融营销合规与职业道德",
            description: "掌握金融营销中的合规要求和职业道德规范",
            knowledge: [
                {
                    title: "合规基本要求",
                    content: "金融营销必须严格遵守法律法规和监管要求。",
                    points: [
                        { title: "依法经营", text: "遵守法律法规，依法开展业务" },
                        { title: "合规销售", text: "合规销售产品，不误导客户" },
                        { title: "信息披露", text: "充分披露产品信息，不隐瞒风险" },
                        { title: "客户权益保护", text: "保护客户合法权益" },
                        { title: "反洗钱", text: "履行反洗钱义务，防范洗钱风险" }
                    ]
                },
                {
                    title: "职业道德规范",
                    content: "金融营销人员应遵守职业道德规范。",
                    points: [
                        { title: "爱岗敬业", text: "热爱本职工作，认真履行职责" },
                        { title: "诚实守信", text: "诚实守信，言行一致" },
                        { title: "办事公道", text: "公平公正，不偏不倚" },
                        { title: "服务群众", text: "全心全意为客户服务" },
                        { title: "奉献社会", text: "积极承担社会责任" }
                    ]
                },
                {
                    title: "常见违规行为",
                    content: "了解常见违规行为，避免触碰红线。",
                    points: [
                        { title: "虚假宣传", text: "夸大收益，隐瞒风险" },
                        { title: "误导销售", text: "误导客户购买不适合的产品" },
                        { title: "飞单", text: "销售未经批准的第三方产品" },
                        { title: "商业贿赂", text: "收受或给予不正当利益" },
                        { title: "泄露客户信息", text: "泄露、出售客户信息" }
                    ]
                }
            ],
            quiz: [
                {
                    type: "single",
                    question: "以下哪项不属于合规基本要求：",
                    options: ["依法经营", "合规销售", "追求高收益", "客户权益保护"],
                    answer: 2,
                    explanation: "追求高收益不是合规基本要求，必须在合规前提下追求合理收益。"
                },
                {
                    type: "multiple",
                    question: "职业道德规范包括：（多选）",
                    options: ["爱岗敬业", "诚实守信", "办事公道", "服务群众"],
                    answer: [0, 1, 2, 3],
                    explanation: "职业道德规范包括爱岗敬业、诚实守信、办事公道、服务群众、奉献社会。"
                },
                {
                    type: "judge",
                    question: "为了完成业绩，可以适当夸大产品收益。",
                    options: ["正确", "错误"],
                    answer: 1,
                    explanation: "夸大产品收益属于虚假宣传，是违规行为。"
                },
                {
                    type: "single",
                    question: "销售未经批准的第三方产品属于：",
                    options: ["虚假宣传", "误导销售", "飞单", "商业贿赂"],
                    answer: 2,
                    explanation: "销售未经批准的第三方产品属于飞单，是严重违规行为。"
                },
                {
                    type: "multiple",
                    question: "常见违规行为包括：（多选）",
                    options: ["虚假宣传", "误导销售", "飞单", "泄露客户信息"],
                    answer: [0, 1, 2, 3],
                    explanation: "常见违规行为包括虚假宣传、误导销售、飞单、商业贿赂、泄露客户信息等。"
                }
            ]
        }
    ]
};
