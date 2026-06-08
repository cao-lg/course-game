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
                            {
                                title: "核心内容",
                                text: "货币的发行、投放、流通和回笼；各种存款的吸收和提取；各项贷款的发放和收回"
                            },
                            {
                                title: "本质特征",
                                text: "金融是信用交易，是价值运动的特殊形式，以偿还为条件的借贷活动"
                            },
                        ]
                    },
                    {
                        title: "金融机构分类",
                        content: "金融机构是专门从事金融活动的组织，包括银行类和非银行类机构。",
                        points: [
                            {
                                title: "银行类机构",
                                text: "中央银行、商业银行、政策性银行、信用合作社等"
                            },
                            {
                                title: "非银行类机构",
                                text: "证券公司、保险公司、信托投资公司、基金管理公司等"
                            },
                        ]
                    },
                ],
                quiz: [
                    {
                        type: "single",
                        question: "以下哪个不属于银行类金融机构？",
                        options: [
                            "商业银行",
                            "证券公司",
                            "中央银行",
                            "信用合作社",
                        ],
                        answer: 1,
                        explanation: "证券公司属于非银行类金融机构，主要从事证券发行、交易等业务。"
                    },
                    {
                        type: "single",
                        question: "金融的本质特征是什么？",
                        options: [
                            "货币交易",
                            "信用交易",
                            "商品交换",
                            "价值交换",
                        ],
                        answer: 1,
                        explanation: "金融是信用交易，是以偿还为条件的借贷活动。"
                    },
                ]
            },
            {
                id: 1.2,
                title: "金融产品概述",
                description: "了解金融产品的分类和特点",
                knowledge: [
                    {
                        title: "金融产品的定义",
                        content: "金融产品是指金融机构为满足客户需求而提供的各种金融服务和工具。",
                        points: [
                            {
                                title: "产品特性",
                                text: "收益性、风险性、流动性、期限性"
                            },
                            {
                                title: "产品形态",
                                text: "实物产品、服务产品、衍生产品"
                            },
                        ]
                    },
                    {
                        title: "金融产品分类",
                        content: "金融产品可以按照不同标准进行分类，常见的有按风险等级、收益类型、期限等分类方式。",
                        points: [
                            {
                                title: "按风险等级",
                                text: "低风险产品、中风险产品、高风险产品"
                            },
                            {
                                title: "按收益类型",
                                text: "固定收益产品、浮动收益产品、保本产品"
                            },
                        ]
                    },
                ],
                quiz: [
                    {
                        type: "single",
                        question: "金融产品的四大特性不包括以下哪项？",
                        options: [
                            "收益性",
                            "风险性",
                            "流动性",
                            "安全性",
                        ],
                        answer: 3,
                        explanation: "金融产品的四大特性是收益性、风险性、流动性和期限性。"
                    },
                ]
            },
        ]
    },
    {
        id: 6,
        title: "项目二 熟知金融产品营销理念及范式",
        description: "学习金融产品营销理念和范式",
        icon: "fa-book-open",
        subLevels: [
            {
                id: 6.1,
                title: "任务1：识别营销机会与客户顺势深挖范式",
                description: "学习识别营销机会和顺势深挖技巧",
                knowledge: [
                    {
                        title: "识别营销机会与客户顺势深挖范式",
                        content: "学习如何识别营销机会，并顺势深挖客户需求",
                        pdf: "assets/教材/《金融产品营销实务》第三版项目二任务一.pdf",
                        points: [
                            {
                                title: "识别营销",
                                text: "从人工观察到数据触发，精准时机触达客户"
                            },
                            {
                                title: "顺势深挖",
                                text: "从被动询问到主动预测，挖掘客户未满足的需求"
                            },
                            {
                                title: "学习目标",
                                text: "熟悉金融产品营销理念和八大范式"
                            },
                        ]
                    },
                ],
                quiz: [
                    {
                        type: "single",
                        question: "识别营销的核心是什么？",
                        options: [
                            "等待客户主动",
                            "精准时机触达客户",
                            "强行推销",
                            "价格优惠",
                        ],
                        answer: 1,
                        explanation: "识别营销的核心是通过精准时机触达客户，在合适的场景下主动开启营销对话。"
                    },
                    {
                        type: "single",
                        question: "顺势深挖的核心是？",
                        options: [
                            "只满足客户明确需求",
                            "挖掘客户未满足的潜在需求",
                            "推销最贵的产品",
                            "快速成交",
                        ],
                        answer: 1,
                        explanation: "顺势深挖是基于客户已有需求点，通过数据关联与话术引导，挖掘其未满足的潜在需求。"
                    },
                ]
            },
            {
                id: 6.2,
                title: "任务2：叠加营销与产品核心一句范式",
                description: "学习叠加营销和产品核心一句技巧",
                knowledge: [
                    {
                        title: "叠加营销与产品核心一句范式",
                        content: "学习如何通过叠加营销提升转化，用核心一句话打动客户",
                        pdf: "assets/教材/《金融产品营销实务》第三版项目二任务二.pdf",
                        points: [
                            {
                                title: "叠加营销",
                                text: "时机叠加、产品叠加、跨界叠加"
                            },
                            {
                                title: "核心一句",
                                text: "产品名称+核心价值+客户利益"
                            },
                            {
                                title: "学习目标",
                                text: "掌握叠加营销和核心一句话技巧"
                            },
                        ]
                    },
                ],
                quiz: [
                    {
                        type: "single",
                        question: "叠加营销不包括以下哪个方面？",
                        options: [
                            "时机叠加",
                            "产品叠加",
                            "价格叠加",
                            "跨界叠加",
                        ],
                        answer: 2,
                        explanation: "叠加营销包括时机叠加、产品叠加、跨界叠加，不包括价格叠加。"
                    },
                    {
                        type: "single",
                        question: "产品核心一句的关键要素是？",
                        options: [
                            "产品名称+价格+折扣",
                            "产品名称+核心价值+客户利益",
                            "产品特点+功能+使用方法",
                            "品牌+历史+荣誉",
                        ],
                        answer: 1,
                        explanation: "产品核心一句的关键是提炼产品最匹配客户需求的卖点，公式为：产品名称+核心价值+客户利益。"
                    },
                ]
            },
            {
                id: 6.3,
                title: "任务3：差异营销与主权在握范式",
                description: "学习差异营销和主权在握范式",
                knowledge: [
                    {
                        title: "差异营销与主权在握范式",
                        content: "学习如何通过差异化营销掌握主动权",
                        pdf: "assets/教材/《金融产品营销实务》第三版项目二任务三.pdf",
                        points: [
                            {
                                title: "差异营销",
                                text: "从同质化到差异化竞争"
                            },
                            {
                                title: "主权在握",
                                text: "主动创造营销机会，掌握主导权"
                            },
                            {
                                title: "学习目标",
                                text: "掌握差异营销和主权在握技巧"
                            },
                        ]
                    },
                ],
                quiz: [
                    {
                        type: "single",
                        question: "差异营销的核心是？",
                        options: [
                            "和竞争对手一样",
                            "突出产品和服务的独特性",
                            "降低价格",
                            "增加广告",
                        ],
                        answer: 1,
                        explanation: "差异营销的核心是从同质化竞争中脱颖而出，突出产品和服务的独特性。"
                    },
                    {
                        type: "single",
                        question: "主权在握的含义是？",
                        options: [
                            "客户主导",
                            "营销人员主动创造机会，掌握主导权",
                            "等待时机",
                            "跟随竞争对手",
                        ],
                        answer: 1,
                        explanation: "主权在握是指营销人员主动创造营销机会，掌握营销过程的主导权。"
                    },
                ]
            },
            {
                id: 6.4,
                title: "任务4：互换营销与促成结案范式",
                description: "学习互换营销和促成结案技巧",
                knowledge: [
                    {
                        title: "互换营销与促成结案范式",
                        content: "学习如何通过互换营销和促成技巧达成交易",
                        pdf: "assets/教材/《金融产品营销实务》第三版项目二任务四.pdf",
                        points: [
                            {
                                title: "互换营销",
                                text: "价值互换，双赢思维"
                            },
                            {
                                title: "促成结案",
                                text: "把握时机，快速促成"
                            },
                            {
                                title: "学习目标",
                                text: "掌握互换营销和促成结案技巧"
                            },
                        ]
                    },
                ],
                quiz: [
                    {
                        type: "single",
                        question: "互换营销的核心理念是？",
                        options: [
                            "一方得利",
                            "双赢思维，价值互换",
                            "利益最大化",
                            "快速成交",
                        ],
                        answer: 1,
                        explanation: "互换营销的核心理念是双赢思维，通过价值互换实现双方共赢。"
                    },
                    {
                        type: "single",
                        question: "促成结案的关键是？",
                        options: [
                            "持续等待",
                            "把握时机，快速促成",
                            "继续介绍产品",
                            "询问客户意见",
                        ],
                        answer: 1,
                        explanation: "促成结案的关键是把握合适的时机，快速促成交易达成。"
                    },
                ]
            },
        ]
    },
    {
        id: 7,
        title: "项目三 识别客户性格差异与心理需求",
        description: "学习客户性格差异和心理需求分析",
        icon: "fa-book-open",
        subLevels: [
            {
                id: 7.1,
                title: "任务1：客户性格差异识别",
                description: "学习识别不同类型客户的性格",
                knowledge: [
                    {
                        title: "客户性格差异识别",
                        content: "学习如何识别客户性格差异",
                        pdf: "assets/教材/《金融产品营销实务》第三版项目三任务一.pdf",
                        points: [
                            {
                                title: "性格分类",
                                text: "DISC、MBTI等性格分析工具"
                            },
                            {
                                title: "识别要点",
                                text: "语言模式、行为特征、决策风格"
                            },
                            {
                                title: "学习目标",
                                text: "掌握客户性格差异识别方法"
                            },
                        ]
                    },
                ],
                quiz: [
                    {
                        type: "single",
                        question: "以下哪个不是常用的性格分析工具？",
                        options: [
                            "DISC",
                            "MBTI",
                            "SWOT",
                            "九型人格",
                        ],
                        answer: 2,
                        explanation: "SWOT是战略分析工具，不是性格分析工具。DISC、MBTI、九型人格都是常用的性格分析工具。"
                    },
                    {
                        type: "single",
                        question: "识别客户性格差异的要点不包括？",
                        options: [
                            "语言模式",
                            "行为特征",
                            "穿着打扮",
                            "决策风格",
                        ],
                        answer: 2,
                        explanation: "识别客户性格差异的要点包括语言模式、行为特征、决策风格等，不包括穿着打扮。"
                    },
                ]
            },
            {
                id: 7.2,
                title: "任务2：客户心理需求分析",
                description: "学习分析客户心理需求",
                knowledge: [
                    {
                        title: "客户心理需求分析",
                        content: "学习如何分析和把握客户心理需求",
                        pdf: "assets/教材/《金融产品营销实务》第三版项目三任务二.pdf",
                        points: [
                            {
                                title: "需求层次",
                                text: "马斯洛需求层次理论"
                            },
                            {
                                title: "心理需求",
                                text: "安全感、成就感、归属感等"
                            },
                            {
                                title: "学习目标",
                                text: "掌握客户心理需求分析方法"
                            },
                        ]
                    },
                ],
                quiz: [
                    {
                        type: "single",
                        question: "马斯洛需求层次理论的最底层是？",
                        options: [
                            "安全需求",
                            "生理需求",
                            "社交需求",
                            "尊重需求",
                        ],
                        answer: 1,
                        explanation: "马斯洛需求层次理论从低到高依次是：生理需求、安全需求、社交需求、尊重需求、自我实现需求。"
                    },
                    {
                        type: "single",
                        question: "金融产品营销中，客户的核心心理需求通常不包括？",
                        options: [
                            "安全感",
                            "成就感",
                            "刺激感",
                            "归属感",
                        ],
                        answer: 2,
                        explanation: "金融产品营销中，客户的核心心理需求通常包括安全感、成就感、归属感等，不包括刺激感。"
                    },
                ]
            },
            {
                id: 7.3,
                title: "任务3：客户性格与营销策略匹配",
                description: "学习针对不同性格的营销策略",
                knowledge: [
                    {
                        title: "客户性格与营销策略匹配",
                        content: "学习如何针对不同性格的客户采用不同策略",
                        pdf: "assets/教材/《金融产品营销实务》第三版项目三任务三.pdf",
                        points: [
                            {
                                title: "策略匹配",
                                text: "根据性格特征调整沟通方式"
                            },
                            {
                                title: "个性化营销",
                                text: "个性化服务和产品推荐"
                            },
                            {
                                title: "学习目标",
                                text: "掌握性格与策略匹配技巧"
                            },
                        ]
                    },
                ],
                quiz: [
                    {
                        type: "single",
                        question: "针对不同性格客户，营销人员应该？",
                        options: [
                            "用同样的方式对待所有人",
                            "根据性格特征调整沟通方式",
                            "只关注结果",
                            "快速推销",
                        ],
                        answer: 1,
                        explanation: "针对不同性格的客户，营销人员应该根据性格特征调整沟通方式和营销策略。"
                    },
                    {
                        type: "single",
                        question: "个性化营销的核心是？",
                        options: [
                            "标准化服务",
                            "个性化服务和产品推荐",
                            "降低价格",
                            "增加广告",
                        ],
                        answer: 1,
                        explanation: "个性化营销的核心是提供个性化的服务和产品推荐，满足客户的独特需求。"
                    },
                ]
            },
        ]
    },
    {
        id: 8,
        title: "项目四 掌握产品呈现与价值塑造技巧",
        description: "学习产品呈现和价值塑造",
        icon: "fa-book-open",
        subLevels: [
            {
                id: 8.1,
                title: "任务1：产品呈现技巧",
                description: "学习如何有效呈现产品",
                knowledge: [
                    {
                        title: "产品呈现技巧",
                        content: "学习如何清晰、有说服力地呈现产品",
                        pdf: "assets/教材/《金融产品营销实务》第三版项目四任务一.pdf",
                        points: [
                            {
                                title: "呈现方法",
                                text: "FABE法则、SPIN销售等"
                            },
                            {
                                title: "演示技巧",
                                text: "演示、体验、案例展示"
                            },
                            {
                                title: "学习目标",
                                text: "掌握产品呈现技巧"
                            },
                        ]
                    },
                ],
                quiz: [
                    {
                        type: "single",
                        question: "FABE法则中的F代表什么？",
                        options: [
                            "Feature（特征）",
                            "Advantage（优势）",
                            "Benefit（利益）",
                            "Evidence（证据）",
                        ],
                        answer: 0,
                        explanation: "FABE法则中，F代表Feature（特征），A代表Advantage（优势），B代表Benefit（利益），E代表Evidence（证据）。"
                    },
                    {
                        type: "single",
                        question: "产品呈现最重要的是？",
                        options: [
                            "介绍所有功能",
                            "突出对客户的价值",
                            "展示专业术语",
                            "快速说完",
                        ],
                        answer: 1,
                        explanation: "产品呈现最重要的是突出产品对客户的价值和利益，而不是简单介绍功能。"
                    },
                ]
            },
            {
                id: 8.2,
                title: "任务2：价值塑造方法",
                description: "学习如何塑造产品价值",
                knowledge: [
                    {
                        title: "价值塑造方法",
                        content: "学习如何有效塑造产品和服务价值",
                        pdf: "assets/教材/《金融产品营销实务》第三版项目四任务二.pdf",
                        points: [
                            {
                                title: "价值定位",
                                text: "差异化价值定位"
                            },
                            {
                                title: "价值传递",
                                text: "清晰、有说服力的价值传递"
                            },
                            {
                                title: "学习目标",
                                text: "掌握价值塑造方法"
                            },
                        ]
                    },
                ],
                quiz: [
                    {
                        type: "single",
                        question: "价值塑造的核心是？",
                        options: [
                            "降低价格",
                            "让客户感知到产品的独特价值",
                            "增加功能",
                            "提高知名度",
                        ],
                        answer: 1,
                        explanation: "价值塑造的核心是让客户清晰感知到产品的独特价值，而不是单纯降低价格。"
                    },
                    {
                        type: "single",
                        question: "价值定位强调的是？",
                        options: [
                            "和竞争对手一样",
                            "产品的独特优势和价值",
                            "价格优势",
                            "品牌知名度",
                        ],
                        answer: 1,
                        explanation: "价值定位强调的是产品的独特优势和价值，与竞争对手形成差异化。"
                    },
                ]
            },
            {
                id: 8.3,
                title: "任务3：产品演示与体验",
                description: "学习产品演示和客户体验",
                knowledge: [
                    {
                        title: "产品演示与体验",
                        content: "学习如何通过演示和体验增强客户认知",
                        pdf: "assets/教材/《金融产品营销实务》第三版项目四任务三.pdf",
                        points: [
                            {
                                title: "演示方法",
                                text: "生动演示，互动体验"
                            },
                            {
                                title: "客户参与",
                                text: "让客户参与，增强记忆"
                            },
                            {
                                title: "学习目标",
                                text: "掌握演示和体验技巧"
                            },
                        ]
                    },
                ],
                quiz: [
                    {
                        type: "single",
                        question: "产品演示的最佳效果来自于？",
                        options: [
                            "营销人员单向讲解",
                            "让客户参与和体验",
                            "播放视频",
                            "发放宣传册",
                        ],
                        answer: 1,
                        explanation: "产品演示的最佳效果来自于让客户参与和体验，这样能增强客户的记忆和理解。"
                    },
                    {
                        type: "single",
                        question: "让客户参与产品演示的好处是？",
                        options: [
                            "节省时间",
                            "增强客户的记忆和理解",
                            "减少沟通",
                            "快速成交",
                        ],
                        answer: 1,
                        explanation: "让客户参与产品演示能够增强客户的记忆和理解，提升营销效果。"
                    },
                ]
            },
        ]
    },
    {
        id: 9,
        title: "项目五 化解客户异议与促成交易",
        description: "学习异议处理和促成技巧",
        icon: "fa-book-open",
        subLevels: [
            {
                id: 9.1,
                title: "任务1：客户异议识别与分类",
                description: "学习识别和分类客户异议",
                knowledge: [
                    {
                        title: "客户异议识别与分类",
                        content: "学习如何识别和分类客户异议",
                        pdf: "assets/教材/《金融产品营销实务》第三版项目五任务一.pdf",
                        points: [
                            {
                                title: "异议类型",
                                text: "价格、信任、需求、时机等"
                            },
                            {
                                title: "深层原因",
                                text: "理解异议背后的真实需求"
                            },
                            {
                                title: "学习目标",
                                text: "掌握异议识别和分类方法"
                            },
                        ]
                    },
                ],
                quiz: [
                    {
                        type: "single",
                        question: "客户异议的常见类型不包括？",
                        options: [
                            "价格异议",
                            "信任异议",
                            "产品异议",
                            "天气异议",
                        ],
                        answer: 3,
                        explanation: "客户异议的常见类型包括价格异议、信任异议、需求异议、时机异议等，不包括天气异议。"
                    },
                    {
                        type: "single",
                        question: "面对客户异议，首先应该？",
                        options: [
                            "反驳客户",
                            "理解异议背后的真实需求",
                            "立即降价",
                            "转移话题",
                        ],
                        answer: 1,
                        explanation: "面对客户异议，首先应该理解异议背后的真实需求，而不是急于反驳或降价。"
                    },
                ]
            },
            {
                id: 9.2,
                title: "任务2：异议处理策略",
                description: "学习处理客户异议的策略",
                knowledge: [
                    {
                        title: "异议处理策略",
                        content: "学习如何有效处理客户异议",
                        pdf: "assets/教材/《金融产品营销实务》第三版项目五任务二.pdf",
                        points: [
                            {
                                title: "处理原则",
                                text: "同理心、及时、专业"
                            },
                            {
                                title: "处理流程",
                                text: "倾听、理解、解决、跟进"
                            },
                            {
                                title: "学习目标",
                                text: "掌握异议处理策略"
                            },
                        ]
                    },
                ],
                quiz: [
                    {
                        type: "single",
                        question: "异议处理的第一步是？",
                        options: [
                            "解释",
                            "倾听",
                            "反驳",
                            "妥协",
                        ],
                        answer: 1,
                        explanation: "异议处理的第一步是倾听，充分理解客户的异议和顾虑。"
                    },
                    {
                        type: "single",
                        question: "处理客户异议时，同理心的作用是？",
                        options: [
                            "立即解决问题",
                            "让客户感受到被理解和尊重",
                            "拖延时间",
                            "转移话题",
                        ],
                        answer: 1,
                        explanation: "同理心能够让客户感受到被理解和尊重，为后续解决问题奠定良好基础。"
                    },
                ]
            },
            {
                id: 9.3,
                title: "任务3：促成交易技巧",
                description: "学习促成交易的技巧",
                knowledge: [
                    {
                        title: "促成交易技巧",
                        content: "学习如何有效促成交易",
                        pdf: "assets/教材/《金融产品营销实务》第三版项目五任务三.pdf",
                        points: [
                            {
                                title: "促成信号",
                                text: "识别客户购买信号"
                            },
                            {
                                title: "促成方法",
                                text: "假设成交、选择成交等"
                            },
                            {
                                title: "学习目标",
                                text: "掌握促成交易技巧"
                            },
                        ]
                    },
                ],
                quiz: [
                    {
                        type: "single",
                        question: "客户的购买信号不包括？",
                        options: [
                            "询问细节",
                            "讨价还价",
                            "提出异议",
                            "询问售后服务",
                        ],
                        answer: 2,
                        explanation: "客户的购买信号包括询问细节、讨价还价、询问售后服务等，提出异议不一定是购买信号。"
                    },
                    {
                        type: "single",
                        question: "假设成交法的核心是？",
                        options: [
                            "假设客户已决定购买",
                            "给客户压力",
                            "降低价格",
                            "提供更多选择",
                        ],
                        answer: 0,
                        explanation: "假设成交法的核心是假设客户已决定购买，引导客户完成交易。"
                    },
                ]
            },
            {
                id: 9.4,
                title: "任务4：促成交易时机把握",
                description: "学习把握促成交易的时机",
                knowledge: [
                    {
                        title: "促成交易时机把握",
                        content: "学习如何把握促成交易的最佳时机",
                        pdf: "assets/教材/《金融产品营销实务》第三版项目五任务四.pdf",
                        points: [
                            {
                                title: "时机识别",
                                text: "识别最佳成交时机"
                            },
                            {
                                title: "果断行动",
                                text: "时机成熟时果断促成"
                            },
                            {
                                title: "学习目标",
                                text: "掌握时机把握技巧"
                            },
                        ]
                    },
                ],
                quiz: [
                    {
                        type: "single",
                        question: "最佳的成交时机通常是？",
                        options: [
                            "客户刚有兴趣时",
                            "客户充分了解并表现出购买意向时",
                            "客户犹豫时",
                            "客户准备离开时",
                        ],
                        answer: 1,
                        explanation: "最佳的成交时机通常是客户充分了解产品并表现出明确购买意向时。"
                    },
                    {
                        type: "single",
                        question: "识别到成交信号后，营销人员应该？",
                        options: [
                            "继续介绍更多功能",
                            "等待客户主动",
                            "时机成熟时果断促成",
                            "询问客户是否考虑好",
                        ],
                        answer: 2,
                        explanation: "识别到成交信号后，营销人员应该在时机成熟时果断促成交易。"
                    },
                ]
            },
            {
                id: 9.5,
                title: "任务5：促成交易方法",
                description: "学习各种促成交易的方法",
                knowledge: [
                    {
                        title: "促成交易方法",
                        content: "学习多种促成交易的方法",
                        pdf: "assets/教材/《金融产品营销实务》第三版项目五任务五.pdf",
                        points: [
                            {
                                title: "多种方法",
                                text: "二选一、总结利益、限时优惠等"
                            },
                            {
                                title: "灵活应用",
                                text: "根据情况选择合适方法"
                            },
                            {
                                title: "学习目标",
                                text: "掌握多种促成方法"
                            },
                        ]
                    },
                ],
                quiz: [
                    {
                        type: "single",
                        question: "二选一成交法的核心是？",
                        options: [
                            "给客户两个都不买的选择",
                            "给客户两个购买选项",
                            "强迫客户选择",
                            "降低价格",
                        ],
                        answer: 1,
                        explanation: "二选一成交法的核心是给客户两个购买选项，让客户在购买范围内做选择。"
                    },
                    {
                        type: "single",
                        question: "总结利益成交法强调的是？",
                        options: [
                            "产品功能",
                            "客户获得的价值和利益",
                            "价格优惠",
                            "品牌优势",
                        ],
                        answer: 1,
                        explanation: "总结利益成交法强调的是客户能够获得的价值和利益，而不是单纯的产品功能。"
                    },
                ]
            },
            {
                id: 9.6,
                title: "任务6：促成交易话术",
                description: "学习促成交易的有效话术",
                knowledge: [
                    {
                        title: "促成交易话术",
                        content: "学习促成交易的有效话术",
                        pdf: "assets/教材/《金融产品营销实务》第三版项目五任务六.pdf",
                        points: [
                            {
                                title: "关键话术",
                                text: "专业、自信、有说服力的表达"
                            },
                            {
                                title: "案例学习",
                                text: "学习成功促成的话术案例"
                            },
                            {
                                title: "学习目标",
                                text: "掌握促成交易话术"
                            },
                        ]
                    },
                ],
                quiz: [
                    {
                        type: "single",
                        question: "促成交易的话术应该是？",
                        options: [
                            "模糊不确定",
                            "专业、自信、有说服力",
                            "催促逼迫",
                            "模糊其辞",
                        ],
                        answer: 1,
                        explanation: "促成交易的话术应该是专业、自信、有说服力的，让客户感到安心。"
                    },
                    {
                        type: "single",
                        question: "成功的促成话术重要的是？",
                        options: [
                            "用专业术语",
                            "让客户感受到被理解和尊重",
                            "快速说完",
                            "用复杂句子",
                        ],
                        answer: 1,
                        explanation: "成功的促成话术重要的是让客户感受到被理解和尊重，建立信任。"
                    },
                ]
            },
        ]
    },
    {
        id: 10,
        title: "项目六 客户关系维护与二次开发",
        description: "学习客户关系维护和二次开发",
        icon: "fa-book-open",
        subLevels: [
            {
                id: 10.1,
                title: "任务1：客户关系维护重要性",
                description: "了解客户关系维护的重要性",
                knowledge: [
                    {
                        title: "客户关系维护重要性",
                        content: "了解客户关系维护的重要性和意义",
                        pdf: "assets/教材/《金融产品营销实务》第三版项目六任务一.pdf",
                        points: [
                            {
                                title: "长期价值",
                                text: "老客户的长期价值更高"
                            },
                            {
                                title: "口碑效应",
                                text: "满意客户带来更多客户"
                            },
                            {
                                title: "学习目标",
                                text: "认识客户关系维护的重要性"
                            },
                        ]
                    },
                ],
                quiz: [
                    {
                        type: "single",
                        question: "获取新客户的成本与维护老客户相比？",
                        options: [
                            "更低",
                            "差不多",
                            "更高",
                            "不确定",
                        ],
                        answer: 2,
                        explanation: "通常获取新客户的成本比维护老客户高5倍以上，维护老客户更有价值。"
                    },
                    {
                        type: "single",
                        question: "满意的老客户带来的好处不包括？",
                        options: [
                            "重复购买",
                            "推荐新客户",
                            "更高的信任度",
                            "要求更多折扣",
                        ],
                        answer: 3,
                        explanation: "满意的老客户会重复购买、推荐新客户、有更高的信任度，不一定要求更多折扣。"
                    },
                ]
            },
            {
                id: 10.2,
                title: "任务2：客户关系维护方法",
                description: "学习客户关系维护的方法",
                knowledge: [
                    {
                        title: "客户关系维护方法",
                        content: "学习如何有效维护客户关系",
                        pdf: "assets/教材/《金融产品营销实务》第三版项目六任务二.pdf",
                        points: [
                            {
                                title: "定期沟通",
                                text: "保持定期联系"
                            },
                            {
                                title: "增值服务",
                                text: "提供增值服务和关怀"
                            },
                            {
                                title: "学习目标",
                                text: "掌握客户关系维护方法"
                            },
                        ]
                    },
                ],
                quiz: [
                    {
                        type: "single",
                        question: "客户关系维护的有效方法不包括？",
                        options: [
                            "定期沟通",
                            "提供增值服务",
                            "只在有需要时联系",
                            "节日关怀",
                        ],
                        answer: 2,
                        explanation: "客户关系维护应该定期沟通，而不是只在有需要时才联系。"
                    },
                    {
                        type: "single",
                        question: "增值服务的核心是？",
                        options: [
                            "增加收费",
                            "提供超出客户期望的价值",
                            "减少服务",
                            "提高效率",
                        ],
                        answer: 1,
                        explanation: "增值服务的核心是提供超出客户期望的价值，增强客户满意度和忠诚度。"
                    },
                ]
            },
            {
                id: 10.3,
                title: "任务3：客户二次开发策略",
                description: "学习客户二次开发策略",
                knowledge: [
                    {
                        title: "客户二次开发策略",
                        content: "学习如何对现有客户进行二次开发",
                        pdf: "assets/教材/《金融产品营销实务》第三版项目六任务三.pdf",
                        points: [
                            {
                                title: "交叉销售",
                                text: "推荐相关产品"
                            },
                            {
                                title: "升级销售",
                                text: "推荐更高级的产品"
                            },
                            {
                                title: "学习目标",
                                text: "掌握客户二次开发策略"
                            },
                        ]
                    },
                ],
                quiz: [
                    {
                        type: "single",
                        question: "交叉销售是指？",
                        options: [
                            "推销更贵的产品",
                            "推荐相关的其他产品",
                            "打折销售",
                            "捆绑销售",
                        ],
                        answer: 1,
                        explanation: "交叉销售是指向客户推荐相关的其他产品或服务。"
                    },
                    {
                        type: "single",
                        question: "升级销售的重点是？",
                        options: [
                            "降低价格",
                            "推荐更高级或更全面的产品",
                            "推销更多数量",
                            "快速成交",
                        ],
                        answer: 1,
                        explanation: "升级销售的重点是向客户推荐更高级或更全面的产品，满足客户更高层次的需求。"
                    },
                ]
            },
        ]
    },
    {
        id: 11,
        title: "项目七 特殊客群营销技巧",
        description: "学习针对特殊客群的营销",
        icon: "fa-book-open",
        subLevels: [
            {
                id: 11.1,
                title: "任务1：青少年客户营销",
                description: "学习青少年客户的营销方法",
                knowledge: [
                    {
                        title: "青少年客户营销",
                        content: "学习如何针对青少年客户进行营销",
                        pdf: "assets/教材/《金融产品营销实务》（第三版）项目七任务一.pdf",
                        points: [
                            {
                                title: "特点分析",
                                text: "青少年的消费特点和需求"
                            },
                            {
                                title: "沟通方式",
                                text: "适合青少年的沟通方式"
                            },
                            {
                                title: "学习目标",
                                text: "掌握青少年客户营销技巧"
                            },
                        ]
                    },
                ],
                quiz: [
                    {
                        type: "single",
                        question: "针对青少年客户，沟通方式应该？",
                        options: [
                            "严肃正式",
                            "轻松有趣，使用他们熟悉的语言",
                            "复杂专业",
                            "传统保守",
                        ],
                        answer: 1,
                        explanation: "针对青少年客户，沟通方式应该轻松有趣，使用他们熟悉的语言和方式。"
                    },
                    {
                        type: "single",
                        question: "青少年客户的特点通常不包括？",
                        options: [
                            "追求新鲜事物",
                            "受同伴影响大",
                            "风险承受能力强",
                            "品牌敏感度高",
                        ],
                        answer: 2,
                        explanation: "青少年客户通常追求新鲜事物、受同伴影响大、品牌敏感度高，但风险承受能力相对较弱。"
                    },
                ]
            },
            {
                id: 11.2,
                title: "任务2：中年客户营销",
                description: "学习中年客户的营销方法",
                knowledge: [
                    {
                        title: "中年客户营销",
                        content: "学习如何针对中年客户进行营销",
                        pdf: "assets/教材/《金融产品营销实务》（第三版）项目七任务二.pdf",
                        points: [
                            {
                                title: "特点分析",
                                text: "中年客户的需求和关注点"
                            },
                            {
                                title: "产品推荐",
                                text: "适合中年客户的产品推荐"
                            },
                            {
                                title: "学习目标",
                                text: "掌握中年客户营销技巧"
                            },
                        ]
                    },
                ],
                quiz: [
                    {
                        type: "single",
                        question: "中年客户通常更关注？",
                        options: [
                            "高风险高收益",
                            "稳定、安全和长期规划",
                            "新鲜刺激",
                            "短期收益",
                        ],
                        answer: 1,
                        explanation: "中年客户通常更关注稳定、安全和长期规划，有家庭责任和养老需求。"
                    },
                    {
                        type: "single",
                        question: "针对中年客户的产品推荐重点应该是？",
                        options: [
                            "高收益高风险",
                            "稳健增值、风险控制",
                            "短期投机",
                            "新奇概念",
                        ],
                        answer: 1,
                        explanation: "针对中年客户的产品推荐重点应该是稳健增值、风险控制，符合他们的需求特点。"
                    },
                ]
            },
            {
                id: 11.3,
                title: "任务3：老年客户营销",
                description: "学习老年客户的营销方法",
                knowledge: [
                    {
                        title: "老年客户营销",
                        content: "学习如何针对老年客户进行营销",
                        pdf: "assets/教材/《金融产品营销实务》（第三版）项目七任务三.pdf",
                        points: [
                            {
                                title: "特点分析",
                                text: "老年客户的需求和特点"
                            },
                            {
                                title: "服务重点",
                                text: "针对老年客户的服务重点"
                            },
                            {
                                title: "学习目标",
                                text: "掌握老年客户营销技巧"
                            },
                        ]
                    },
                ],
                quiz: [
                    {
                        type: "single",
                        question: "老年客户最看重的通常是？",
                        options: [
                            "高收益",
                            "安全、稳定、便捷",
                            "新奇产品",
                            "快速增值",
                        ],
                        answer: 1,
                        explanation: "老年客户通常最看重资金的安全、稳定和服务的便捷性。"
                    },
                    {
                        type: "single",
                        question: "针对老年客户的服务重点应该是？",
                        options: [
                            "复杂功能",
                            "耐心细致、简单易懂",
                            "快速高效",
                            "高科技",
                        ],
                        answer: 1,
                        explanation: "针对老年客户的服务重点应该是耐心细致、简单易懂，方便他们理解和操作。"
                    },
                ]
            },
        ]
    },
    {
        id: 12,
        title: "项目八 金融产品售后服务",
        description: "学习金融产品售后服务",
        icon: "fa-book-open",
        subLevels: [
            {
                id: 12.1,
                title: "任务1：售后服务的意义",
                description: "了解售后服务的重要性",
                knowledge: [
                    {
                        title: "售后服务的意义",
                        content: "了解售后服务的重要性和意义",
                        pdf: "assets/教材/《金融产品营销实务》（第三版）项目八任务一.pdf",
                        points: [
                            {
                                title: "客户满意度",
                                text: "提升客户满意度和忠诚度"
                            },
                            {
                                title: "口碑传播",
                                text: "良好售后带来口碑传播"
                            },
                            {
                                title: "学习目标",
                                text: "认识售后服务的重要性"
                            },
                        ]
                    },
                ],
                quiz: [
                    {
                        type: "single",
                        question: "良好的售后服务能够带来什么？",
                        options: [
                            "减少客户联系",
                            "提升客户满意度和忠诚度",
                            "降低成本",
                            "减少工作量",
                        ],
                        answer: 1,
                        explanation: "良好的售后服务能够提升客户满意度和忠诚度，带来长期价值。"
                    },
                    {
                        type: "single",
                        question: "售后服务对企业的价值在于？",
                        options: [
                            "结束关系",
                            "建立长期信任和口碑",
                            "减少责任",
                            "节约成本",
                        ],
                        answer: 1,
                        explanation: "售后服务的价值在于建立长期信任和口碑，为企业带来持续的业务和推荐。"
                    },
                ]
            },
            {
                id: 12.2,
                title: "任务2：售后服务内容",
                description: "学习售后服务的内容",
                knowledge: [
                    {
                        title: "售后服务内容",
                        content: "学习售后服务的具体内容和方法",
                        pdf: "assets/教材/《金融产品营销实务》（第三版）项目八任务二.pdf",
                        points: [
                            {
                                title: "服务项目",
                                text: "跟踪回访、问题解决、持续关怀"
                            },
                            {
                                title: "服务标准",
                                text: "建立服务标准和流程"
                            },
                            {
                                title: "学习目标",
                                text: "掌握售后服务内容"
                            },
                        ]
                    },
                ],
                quiz: [
                    {
                        type: "single",
                        question: "售后服务的内容不包括？",
                        options: [
                            "跟踪回访",
                            "问题解决",
                            "再次推销",
                            "持续关怀",
                        ],
                        answer: 2,
                        explanation: "售后服务的内容包括跟踪回访、问题解决、持续关怀等，不包括再次推销。"
                    },
                    {
                        type: "single",
                        question: "建立售后服务标准和流程的目的是？",
                        options: [
                            "增加工作",
                            "确保服务质量的一致性",
                            "限制员工",
                            "应付检查",
                        ],
                        answer: 1,
                        explanation: "建立售后服务标准和流程的目的是确保服务质量的一致性，提升客户体验。"
                    },
                ]
            },
            {
                id: 12.3,
                title: "任务3：客户投诉处理",
                description: "学习客户投诉处理",
                knowledge: [
                    {
                        title: "客户投诉处理",
                        content: "学习如何有效处理客户投诉",
                        pdf: "assets/教材/《金融产品营销实务》（第三版）项目八任务三.pdf",
                        points: [
                            {
                                title: "处理原则",
                                text: "同理心、及时、专业"
                            },
                            {
                                title: "处理流程",
                                text: "倾听、理解、解决、跟进"
                            },
                            {
                                title: "学习目标",
                                text: "掌握客户投诉处理技巧"
                            },
                        ]
                    },
                ],
                quiz: [
                    {
                        type: "single",
                        question: "客户投诉时，首先应该？",
                        options: [
                            "辩解",
                            "认真倾听",
                            "推卸责任",
                            "快速解决",
                        ],
                        answer: 1,
                        explanation: "客户投诉时，首先应该认真倾听，让客户充分表达不满和诉求。"
                    },
                    {
                        type: "single",
                        question: "处理客户投诉的最佳结果是？",
                        options: [
                            "客户不再投诉",
                            "解决问题，客户满意",
                            "快速打发客户",
                            "减少损失",
                        ],
                        answer: 1,
                        explanation: "处理客户投诉的最佳结果是真正解决问题，让客户满意，甚至转化为忠诚客户。"
                    },
                ]
            },
        ]
    },
    {
        id: 13,
        title: "项目九 金融产品营销综合实践",
        description: "综合实践和总结",
        icon: "fa-book-open",
        subLevels: [
            {
                id: 13.1,
                title: "任务1：综合营销案例分析",
                description: "学习综合营销案例分析",
                knowledge: [
                    {
                        title: "综合营销案例分析",
                        content: "通过案例学习综合营销方法",
                        pdf: "assets/教材/《金融产品营销实务》第三版项目九任务一.pdf",
                        points: [
                            {
                                title: "案例学习",
                                text: "学习成功和失败案例"
                            },
                            {
                                title: "经验总结",
                                text: "总结经验教训"
                            },
                            {
                                title: "学习目标",
                                text: "掌握案例分析方法"
                            },
                        ]
                    },
                ],
                quiz: [
                    {
                        type: "single",
                        question: "案例分析的价值在于？",
                        options: [
                            "复制成功",
                            "学习经验，避免失败",
                            "了解故事",
                            "消磨时间",
                        ],
                        answer: 1,
                        explanation: "案例分析的价值在于学习成功和失败的经验，指导实际工作。"
                    },
                    {
                        type: "single",
                        question: "从失败案例中，我们应该重点学习？",
                        options: [
                            "如何失败",
                            "失败的原因和教训",
                            "嘲笑他人",
                            "避免尝试",
                        ],
                        answer: 1,
                        explanation: "从失败案例中，我们应该重点学习失败的原因和教训，避免重蹈覆辙。"
                    },
                ]
            },
            {
                id: 13.2,
                title: "任务2：营销方案策划",
                description: "学习营销方案策划",
                knowledge: [
                    {
                        title: "营销方案策划",
                        content: "学习如何策划营销方案",
                        pdf: "assets/教材/《金融产品营销实务》第三版项目九任务二.pdf",
                        points: [
                            {
                                title: "方案要素",
                                text: "目标、策略、执行、评估"
                            },
                            {
                                title: "策划方法",
                                text: "系统的策划方法"
                            },
                            {
                                title: "学习目标",
                                text: "掌握营销方案策划"
                            },
                        ]
                    },
                ],
                quiz: [
                    {
                        type: "single",
                        question: "营销方案的核心要素不包括？",
                        options: [
                            "目标",
                            "策略",
                            "执行",
                            "装饰",
                        ],
                        answer: 3,
                        explanation: "营销方案的核心要素包括目标、策略、执行、评估，不包括装饰。"
                    },
                    {
                        type: "single",
                        question: "营销目标应该是？",
                        options: [
                            "模糊不清",
                            "具体、可衡量、可实现",
                            "越高越好",
                            "随意设定",
                        ],
                        answer: 1,
                        explanation: "营销目标应该是具体、可衡量、可实现的，符合SMART原则。"
                    },
                ]
            },
            {
                id: 13.3,
                title: "任务3：实战演练与总结",
                description: "实战演练和总结",
                knowledge: [
                    {
                        title: "实战演练与总结",
                        content: "进行实战演练并总结",
                        pdf: "assets/教材/《金融产品营销实务》第三版项目九任务三.pdf",
                        points: [
                            {
                                title: "实战应用",
                                text: "将所学应用到实际"
                            },
                            {
                                title: "总结提升",
                                text: "总结经验，持续提升"
                            },
                            {
                                title: "学习目标",
                                text: "完成实战演练和总结"
                            },
                        ]
                    },
                ],
                quiz: [
                    {
                        type: "single",
                        question: "实战演练最重要的是？",
                        options: [
                            "完美表现",
                            "将所学应用到实际",
                            "快速完成",
                            "得到表扬",
                        ],
                        answer: 1,
                        explanation: "实战演练最重要的是将所学知识应用到实际，提升实际操作能力。"
                    },
                    {
                        type: "single",
                        question: "总结提升的核心是？",
                        options: [
                            "完成任务",
                            "总结经验，持续改进",
                            "展示成果",
                            "结束项目",
                        ],
                        answer: 1,
                        explanation: "总结提升的核心是总结经验教训，持续改进和提升能力。"
                    },
                ]
            },
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
