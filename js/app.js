class App {
    constructor() {
        this.game = new Game();
        this.currentPage = 'welcome';
        this.currentLevel = null;
        this.currentSubLevel = null;
        this.currentKnowledgeIndex = 0;
        this.currentQuestionIndex = 0;
        this.userAnswers = [];
        this.isAnswerSubmitted = false;
        this.hasStarted = false;
        this.selectedPairs = {}; // 用于匹配题
        this.orderedItems = []; // 用于排序题
        this.selectedOptions = {}; // 用于多选题
        this.init();
    }

    init() {
        this.renderSidebar();
        this.updateHeader();
        this.updateProgress();
        this.bindEvents();
        
        this.showPage('welcome');
    }

    bindEvents() {
        document.getElementById('startBtn').addEventListener('click', () => {
            try {
                this.game.playSound('click');

                this.showPage('level');
                this.renderLevel(levelsData[0]);
            } catch (e) {
                console.error('Start button error:', e);
                alert('启动失败，请刷新页面重试');
            }
        });

        // 移动端菜单切换
        const menuToggle = document.getElementById('menuToggle');
        const sidebar = document.getElementById('sidebar');
        const sidebarOverlay = document.getElementById('sidebarOverlay');

        if (menuToggle && sidebar) {
            menuToggle.addEventListener('click', () => {
                sidebar.classList.toggle('open');
                if (sidebarOverlay) {
                    sidebarOverlay.classList.toggle('show');
                }
            });
        }

        if (sidebarOverlay) {
            sidebarOverlay.addEventListener('click', () => {
                sidebar.classList.remove('open');
                sidebarOverlay.classList.remove('show');
            });
        }

        document.getElementById('settingsBtn').addEventListener('click', () => {
            this.game.playSound('click');
            const settingsNickname = document.getElementById('settingsNickname');
            const currentNickname = this.game.getNickname();
            if (settingsNickname) {
                settingsNickname.value = currentNickname;
            }
            this.showPage('settings');
        });
        
        const settingsNickname = document.getElementById('settingsNickname');
        if (settingsNickname) {
            settingsNickname.addEventListener('input', () => {
                if (settingsNickname.value.trim()) {
                    this.game.setNickname(settingsNickname.value.trim());
                    this.updateHeader();
                }
            });
        }

        document.getElementById('backToLevel').addEventListener('click', () => {
            this.game.playSound('click');
            this.showPage('level');
        });

        document.getElementById('backToStudy').addEventListener('click', () => {
            this.game.playSound('click');
            this.showPage('study');
        });

        document.getElementById('prevKnowledge').addEventListener('click', () => {
            this.game.playSound('click');
            this.prevKnowledge();
        });

        document.getElementById('nextKnowledge').addEventListener('click', () => {
            this.game.playSound('click');
            this.nextKnowledge();
        });

        document.getElementById('startQuiz').addEventListener('click', () => {
            this.game.playSound('click');
            this.startQuiz();
        });

        document.getElementById('prevQuestion').addEventListener('click', () => {
            this.game.playSound('click');
            this.prevQuestion();
        });

        document.getElementById('nextQuestion').addEventListener('click', () => {
            this.game.playSound('click');
            this.nextQuestion();
        });

        document.getElementById('submitQuiz').addEventListener('click', () => {
            this.game.playSound('click');
            this.submitQuiz();
        });

        document.getElementById('replayQuiz').addEventListener('click', () => {
            this.game.playSound('click');
            this.startQuiz();
        });

        document.getElementById('nextLevel').addEventListener('click', () => {
            this.game.playSound('click');
            this.goToNextSubLevel();
        });

        document.getElementById('soundToggle').addEventListener('click', (e) => {
            const toggle = e.currentTarget;
            const isEnabled = !toggle.classList.contains('active');
            toggle.classList.toggle('active', isEnabled);
            this.game.setSoundEnabled(isEnabled);
            if (isEnabled) {
                this.game.playSound('click');
            }
        });

        document.getElementById('themeSelect').addEventListener('change', (e) => {
            this.game.setTheme(e.target.value);
        });

        document.getElementById('resetData').addEventListener('click', () => {
            if (confirm('确定要重置所有学习数据吗？这将清除所有进度、积分和勋章。')) {
                this.game.resetData();
                location.reload();
            }
        });

        document.getElementById('closeSettings').addEventListener('click', () => {
            this.game.playSound('click');
            this.showPage('level');
        });

        document.getElementById('showWrongAnswers').addEventListener('click', () => {
            this.game.playSound('click');
            this.renderWrongAnswers();
            this.showPage('wrongAnswers');
        });

        document.getElementById('backFromWrongAnswers').addEventListener('click', () => {
            this.game.playSound('click');
            this.showPage('level');
        });

        document.getElementById('clearWrongAnswers').addEventListener('click', () => {
            if (confirm('确定要清空错题本吗？')) {
                this.game.clearWrongAnswers();
                this.renderWrongAnswers();
            }
        });

        const soundToggle = document.getElementById('soundToggle');
        if (this.game.isSoundEnabled()) {
            soundToggle.classList.add('active');
        } else {
            soundToggle.classList.remove('active');
        }
    }

    renderSidebar() {
        const nav = document.getElementById('levelNav');
        nav.innerHTML = levelsData.map(level => {
            const unlocked = this.game.isLevelUnlocked(level.id);
            const completed = level.subLevels.every(sl => 
                this.game.isSubLevelCompleted(level.id, sl.id)
            );
            const completedCount = level.subLevels.filter(sl => 
                this.game.isSubLevelCompleted(level.id, sl.id)
            ).length;

            return `
                <div class="level-item ${completed ? 'completed' : ''} ${!unlocked ? 'locked' : ''}" 
                     data-level-id="${level.id}">
                    <div class="level-icon">
                        <i class="fas ${level.icon}"></i>
                    </div>
                    <div class="level-info">
                        <div class="level-title">${level.title}</div>
                        <div class="level-progress">
                            ${completedCount}/${level.subLevels.length} 已完成
                        </div>
                    </div>
                </div>
            `;
        }).join('');

        nav.querySelectorAll('.level-item:not(.locked)').forEach(item => {
            item.addEventListener('click', () => {
                this.game.playSound('click');
                const levelId = parseInt(item.dataset.levelId);
                const level = levelsData.find(l => l.id === levelId);
                if (level) {
                    this.showPage('level');
                    this.renderLevel(level);
                }
            });
        });
    }

    renderLevel(level) {
        this.currentLevel = level;
        
        document.getElementById('levelTitle').textContent = level.title;
        document.getElementById('levelDescription').textContent = level.description;

        const knowledgeMap = document.getElementById('knowledgeMap');
        const knowledgeNodes = level.subLevels.map(sl => 
            `<div class="map-node">${sl.title}</div>`
        ).join('');
        knowledgeMap.innerHTML = `
            <h3><i class="fas fa-sitemap"></i> 知识导图</h3>
            <div class="map-nodes">${knowledgeNodes}</div>
        `;

        const subLevelsContainer = document.getElementById('subLevels');
        subLevelsContainer.innerHTML = level.subLevels.map(subLevel => {
            const unlocked = this.game.isSubLevelUnlocked(level.id, subLevel.id);
            const completed = this.game.isSubLevelCompleted(level.id, subLevel.id);
            const stars = this.game.getSubLevelStars(level.id, subLevel.id);
            const isPractical = subLevel.isPractical;

            return `
                <div class="sub-level-card ${completed ? 'completed' : ''} ${!unlocked ? 'locked' : ''} ${isPractical ? 'practical' : ''}"
                     data-level-id="${level.id}" 
                     data-sub-level-id="${subLevel.id}">
                    <div class="sub-level-header">
                        <div class="sub-level-number">
                            <i class="fas ${completed ? 'fa-check' : unlocked ? 'fa-play' : 'fa-lock'}"></i>
                        </div>
                        <div class="sub-level-stars">
                            ${[1, 2, 3].map(i => 
                                `<i class="fas ${i <= stars ? 'fa-star' : 'fa-star'}" 
                                 style="color: ${i <= stars ? '#f59e0b' : '#cbd5e1'}"></i>`
                            ).join('')}
                        </div>
                    </div>
                    <div class="sub-level-title">${subLevel.title}</div>
                    <div class="sub-level-desc">${subLevel.description}</div>
                    ${isPractical ? '<div class="practical-badge"><i class="fas fa-tasks"></i> 实战任务</div>' : ''}
                </div>
            `;
        }).join('');

        subLevelsContainer.querySelectorAll('.sub-level-card:not(.locked)').forEach(card => {
            card.addEventListener('click', () => {
                this.game.playSound('click');
                const levelId = parseInt(card.dataset.levelId);
                const subLevelId = parseFloat(card.dataset.subLevelId);
                const level = levelsData.find(l => l.id === levelId);
                const subLevel = level.subLevels.find(sl => sl.id === subLevelId);
                if (subLevel) {
                    this.startSubLevel(level, subLevel);
                }
            });
        });

        document.querySelectorAll('.level-item').forEach(item => {
            item.classList.remove('active');
            if (parseInt(item.dataset.levelId) === level.id) {
                item.classList.add('active');
            }
        });
    }

    startSubLevel(level, subLevel) {
        this.currentLevel = level;
        this.currentSubLevel = subLevel;
        this.currentKnowledgeIndex = 0;
        this.showPage('study');
        this.renderKnowledge();
    }

    renderKnowledge() {
        const knowledge = this.currentSubLevel.knowledge[this.currentKnowledgeIndex];
        const studyContent = document.getElementById('studyContent');
        const prevBtn = document.getElementById('prevKnowledge');
        const nextBtn = document.getElementById('nextKnowledge');
        const startQuizBtn = document.getElementById('startQuiz');

        document.getElementById('studyTitle').textContent = knowledge.title;

        // 只渲染思维导图笔记，不显示PDF
        studyContent.innerHTML = `
            <div class="knowledge-card">
                <h3>${knowledge.title}</h3>
                <p class="knowledge-text">${knowledge.content}</p>
                ${knowledge.points.map(point => `
                    <div class="knowledge-point">
                        <h4><i class="fas fa-lightbulb"></i> ${point.title}</h4>
                        <p>${point.text}</p>
                    </div>
                `).join('')}
            </div>
        `;

        prevBtn.disabled = this.currentKnowledgeIndex === 0;
        
        const isLastKnowledge = this.currentKnowledgeIndex === this.currentSubLevel.knowledge.length - 1;
        if (isLastKnowledge) {
            nextBtn.style.display = 'none';
            startQuizBtn.style.display = 'inline-flex';
        } else {
            nextBtn.style.display = 'inline-flex';
            startQuizBtn.style.display = 'none';
        }
    }

    prevKnowledge() {
        if (this.currentKnowledgeIndex > 0) {
            this.currentKnowledgeIndex--;
            this.renderKnowledge();
        }
    }

    nextKnowledge() {
        if (this.currentKnowledgeIndex < this.currentSubLevel.knowledge.length - 1) {
            this.currentKnowledgeIndex++;
            this.renderKnowledge();
        }
    }

    startQuiz() {
        this.currentQuestionIndex = 0;
        this.userAnswers = new Array(this.currentSubLevel.quiz.length).fill(null);
        this.selectedPairs = {};
        this.orderedItems = [];
        this.selectedOptions = {};
        this.isAnswerSubmitted = false;
        if (window.gameEffects) window.gameEffects.resetCombo();
        this.showPage('quiz');
        this.renderQuestion();
    }

    renderQuestion() {
        const question = this.currentSubLevel.quiz[this.currentQuestionIndex];
        const questionContainer = document.getElementById('questionContainer');
        const currentQuestionEl = document.getElementById('currentQuestion');
        const totalQuestionsEl = document.getElementById('totalQuestions');
        const prevBtn = document.getElementById('prevQuestion');
        const nextBtn = document.getElementById('nextQuestion');
        const submitBtn = document.getElementById('submitQuiz');

        currentQuestionEl.textContent = this.currentQuestionIndex + 1;
        totalQuestionsEl.textContent = this.currentSubLevel.quiz.length;

        let questionHtml = '';

        switch(question.type) {
            case 'single':
            case 'judge':
                questionHtml = this.renderSingleChoiceQuestion(question);
                break;
            case 'multiple':
                questionHtml = this.renderMultipleChoiceQuestion(question);
                break;
            case 'matching':
            case 'select-matching':
                // 统一走连连看模式（已去掉下拉框模式）
                questionHtml = this.renderMatchingQuestion(question);
                break;
            case 'ordering':
                questionHtml = this.renderOrderingQuestion(question);
                break;
            case 'case':
                questionHtml = this.renderCaseQuestion(question);
                break;
            default:
                questionHtml = this.renderSingleChoiceQuestion(question);
        }

        // 追加"用游戏玩"切换按钮（让题目能用小游戏呈现）
        questionHtml += this.renderGameModeToggle(question);

        questionContainer.innerHTML = questionHtml;

        if (!this.isAnswerSubmitted) {
            this.bindQuestionEvents(question);
            this.bindGameModeToggle(question);
        }

        // 触发游戏化动画
        if (window.gameEffects) {
            window.gameEffects.slideInQuestion();
            setTimeout(() => window.gameEffects.flyInOptions(), 100);
        }

        // 如果是匹配题，初始化Canvas并绘制连线
        if (question.type === 'matching') {
            setTimeout(() => {
                this.initMatchingCanvas(question);
                this.drawMatchingLines(question);
            }, 50);
        }

        prevBtn.disabled = this.currentQuestionIndex === 0;
        
        if (this.currentQuestionIndex < this.currentSubLevel.quiz.length - 1) {
            nextBtn.style.display = 'inline-flex';
            submitBtn.style.display = 'none';
        } else {
            nextBtn.style.display = 'none';
            submitBtn.style.display = 'inline-flex';
        }
    }
    
    initMatchingCanvas(question) {
        const canvas = document.getElementById('matchingCanvas');
        if (!canvas) return;
        
        const container = document.getElementById('matchingContainer');
        if (!container) return;
        
        // 设置Canvas尺寸
        const rect = container.getBoundingClientRect();
        canvas.width = rect.width;
        canvas.height = rect.height;
        canvas.style.position = 'absolute';
        canvas.style.top = '0';
        canvas.style.left = '0';
        canvas.style.pointerEvents = 'none';
        canvas.style.zIndex = '1';
    }
    
    drawMatchingLines(question) {
        const canvas = document.getElementById('matchingCanvas');
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        const container = document.getElementById('matchingContainer');
        if (!ctx || !container) return;
        
        // 清空Canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // 设置线条样式
        ctx.lineWidth = 4;
        ctx.lineCap = 'round';
        
        const pairs = this.selectedPairs[this.currentQuestionIndex] || {};
        const colors = ['#2563eb', '#10b981', '#f59e0b', '#8b5cf6', '#ec4899', '#06b6d4'];
        const containerRect = container.getBoundingClientRect();
        
        Object.keys(pairs).forEach(leftIndexStr => {
            const leftIndex = parseInt(leftIndexStr);
            const rightIndex = pairs[leftIndex];
            
            const leftItem = document.getElementById(`match-left-${leftIndex}`);
            const rightItem = document.getElementById(`match-right-${rightIndex}`);
            
            if (leftItem && rightItem) {
                const leftRect = leftItem.getBoundingClientRect();
                const rightRect = rightItem.getBoundingClientRect();
                
                // 计算相对于Canvas的坐标
                const x1 = leftRect.right - containerRect.left;
                const y1 = leftRect.top + leftRect.height / 2 - containerRect.top;
                const x2 = rightRect.left - containerRect.left;
                const y2 = rightRect.top + rightRect.height / 2 - containerRect.top;
                
                // 绘制连线
                ctx.beginPath();
                ctx.strokeStyle = colors[leftIndex % colors.length];
                ctx.moveTo(x1, y1);
                ctx.lineTo(x2, y2);
                ctx.stroke();
            }
        });
    }

    renderSingleChoiceQuestion(question) {
        const optionsHtml = question.options.map((option, index) => {
            let classes = 'option-item';
            if (this.isAnswerSubmitted) {
                if (index === question.answer) {
                    classes += ' correct';
                } else if (this.userAnswers[this.currentQuestionIndex] === index) {
                    classes += ' incorrect';
                }
            } else if (this.userAnswers[this.currentQuestionIndex] === index) {
                classes += ' selected';
            }
            return `
                <div class="${classes}" data-index="${index}">
                    <div class="option-letter">${String.fromCharCode(65 + index)}</div>
                    <div class="option-text">${option}</div>
                </div>
            `;
        }).join('');

        return `
            <div class="question-text">
                <span class="question-number">${this.currentQuestionIndex + 1}.</span>
                ${question.question}
            </div>
            <div class="options-list">
                ${optionsHtml}
            </div>
            ${this.isAnswerSubmitted && question.explanation ? `
                <div class="explanation">
                    <h4><i class="fas fa-info-circle"></i> 解析</h4>
                    <p>${question.explanation}</p>
                </div>
            ` : ''}
        `;
    }

    renderMultipleChoiceQuestion(question) {
        const selected = this.selectedOptions[this.currentQuestionIndex] || [];
        const optionsHtml = question.options.map((option, index) => {
            let classes = 'option-item checkbox-option';
            if (this.isAnswerSubmitted) {
                if (question.answer.includes(index)) {
                    classes += ' correct';
                } else if (selected.includes(index)) {
                    classes += ' incorrect';
                }
            } else if (selected.includes(index)) {
                classes += ' selected';
            }
            return `
                <div class="${classes}" data-index="${index}">
                    <div class="option-checkbox">
                        <i class="fas ${selected.includes(index) ? 'fa-check-square' : 'fa-square'}"></i>
                    </div>
                    <div class="option-text">${option}</div>
                </div>
            `;
        }).join('');

        const confirmButtonHtml = (!this.isAnswerSubmitted && selected.length > 0) ? `
            <div style="margin-top: 20px; text-align: center;">
                <button class="btn btn-primary" id="confirmMultipleBtn">确认答案</button>
            </div>
        ` : '';

        return `
            <div class="question-text">
                <span class="question-number">${this.currentQuestionIndex + 1}.</span>
                ${question.question}
                <span style="color: #2563eb; font-size: 0.9rem; margin-left: 10px;">（多选）</span>
            </div>
            <div class="options-list">
                ${optionsHtml}
            </div>
            ${confirmButtonHtml}
            ${this.isAnswerSubmitted && question.explanation ? `
                <div class="explanation">
                    <h4><i class="fas fa-info-circle"></i> 解析</h4>
                    <p>${question.explanation}</p>
                </div>
            ` : ''}
        `;
    }

    renderSelectMatchingQuestion(question) {
        if (!this.selectedPairs[this.currentQuestionIndex]) {
            this.selectedPairs[this.currentQuestionIndex] = {};
        }
        const pairs = this.selectedPairs[this.currentQuestionIndex];

        // 把 right 列表打乱（仅显示顺序）
        if (!this.shuffledRightIndices) this.shuffledRightIndices = {};
        if (!this.shuffledRightIndices[this.currentQuestionIndex]) {
            this.shuffledRightIndices[this.currentQuestionIndex] = question.options.map((_, i) => i).sort(() => Math.random() - 0.5);
        }
        const shuffledRight = this.shuffledRightIndices[this.currentQuestionIndex];

        // 左侧列表：每行一个下拉框
        const leftItems = question.options.map((p, i) => {
            const selectedRightIdx = pairs[i];
            const selectedRightText = selectedRightIdx !== undefined ? question.options[selectedRightIdx].right : '';

            // 判断已提交时的对错
            let rowClass = '';
            if (this.isAnswerSubmitted && selectedRightIdx !== undefined) {
                const correct = question.options[selectedRightIdx].right === p.right;
                rowClass = correct ? 'select-match-correct' : 'select-match-incorrect';
            }

            // 构造下拉框选项
            const optionTags = ['<option value="">-- 请选择 --</option>']
                .concat(shuffledRight.map(ri => {
                    const sel = ri === selectedRightIdx ? 'selected' : '';
                    return `<option value="${ri}" ${sel}>${question.options[ri].right}</option>`;
                }))
                .join('');

            return `
                <div class="select-match-row ${rowClass}" data-left="${i}">
                    <span class="select-match-label">${String.fromCharCode(65 + i)}.</span>
                    <span class="select-match-left">${p.left}</span>
                    <span class="select-match-arrow">→</span>
                    <select class="select-match-select" data-left-index="${i}" ${this.isAnswerSubmitted ? 'disabled' : ''}>
                        ${optionTags}
                    </select>
                    ${this.isAnswerSubmitted && selectedRightIdx !== undefined ?
                        `<span class="select-match-feedback">${question.options[selectedRightIdx] && question.options[selectedRightIdx].right === p.right ? '✓' : '✗ 正确: ' + p.right}</span>`
                        : (this.isAnswerSubmitted ? `<span class="select-match-feedback" style="color:#94a3b8;">未匹配 (正确: ${p.right})</span>` : '')}
                </div>
            `;
        }).join('');

        let confirmButtonHtml = '';
        if (!this.isAnswerSubmitted) {
            const answered = Object.keys(this.selectedPairs[this.currentQuestionIndex] || {}).length;
            const total = (question.options || question.pairs || []).length;
            const remaining = total - answered;
            const tip = remaining > 0
                ? `<p style="text-align:center;margin-top:10px;color:#f59e0b;font-size:0.85rem;">⚠️ 还有 ${remaining} 项未匹配，提交后未答项将判错</p>`
                : `<p style="text-align:center;margin-top:10px;color:#10b981;font-size:0.85rem;">✓ 全部已匹配，请提交答案</p>`;
            confirmButtonHtml = `
                <div style="margin-top: 20px; text-align: center;">
                    ${tip}
                    <button class="btn btn-primary" id="confirmMatchingBtn">${remaining > 0 ? '提交答案（未完）' : '提交答案'}</button>
                </div>
            `;
        }

        return `
            <div class="question-text">
                <span class="question-number">${this.currentQuestionIndex + 1}.</span>
                ${question.question}
            </div>
            <p style="color: #64748b; margin-bottom: 15px; font-size: 0.9rem;">
                <strong>配对说明：</strong>在每个左侧项的下拉框中选择对应的右侧内容
            </p>
            <div class="select-matching-container">
                ${leftItems}
            </div>
            ${confirmButtonHtml}
            ${this.isAnswerSubmitted && question.explanation ? `
                <div class="explanation">
                    <h4><i class="fas fa-info-circle"></i> 解析</h4>
                    <p>${question.explanation}</p>
                </div>
            ` : ''}
        `;
    }

    renderMatchingQuestion(question) {
        if (!this.selectedPairs[this.currentQuestionIndex]) {
            this.selectedPairs[this.currentQuestionIndex] = {};
        }
        const pairs = this.selectedPairs[this.currentQuestionIndex];
        const colors = ['#2563eb', '#10b981', '#f59e0b', '#8b5cf6', '#ec4899', '#06b6d4'];
        // 兼容 options/pairs 两种字段
        const items = question.options || question.pairs || [];

        // 保持右侧顺序稳定，避免每次渲染打乱
        if (!this.shuffledRightIndices) {
            this.shuffledRightIndices = {};
        }
        if (!this.shuffledRightIndices[this.currentQuestionIndex]) {
            this.shuffledRightIndices[this.currentQuestionIndex] = [...items].map((p, i) => i).sort(() => Math.random() - 0.5);
        }
        const shuffledRight = this.shuffledRightIndices[this.currentQuestionIndex];

        const leftItems = items.map((p, i) => {
            const isMatched = pairs[i] !== undefined;
            let isCorrect = false;
            let isWrong = false;

            if (this.isAnswerSubmitted && isMatched) {
                const selectedRightIndex = pairs[i];
                const selectedRightContent = items[selectedRightIndex] && items[selectedRightIndex].right;
                const correctRightContent = items[i] && items[i].right;
                isCorrect = selectedRightContent === correctRightContent;
                isWrong = !isCorrect;
            }

            return `
                <div class="match-item left ${isMatched ? 'matched' : ''} ${isCorrect ? 'correct' : ''} ${isWrong ? 'incorrect' : ''}"
                     data-left="${i}"
                     id="match-left-${i}">
                    <span class="match-label" style="background-color: ${colors[i % colors.length]}">${String.fromCharCode(65 + i)}</span>
                    <span class="match-text">${p.left}</span>
                </div>
            `;
        }).join('');

        const rightItems = shuffledRight.map(i => {
            const matchedLeft = Object.keys(pairs).find(k => pairs[k] === i);
            const isMatched = matchedLeft !== undefined;

            let isCorrect = false;
            let isWrong = false;

            if (this.isAnswerSubmitted && isMatched) {
                const leftIndex = parseInt(matchedLeft);
                const selectedRightContent = items[i] && items[i].right;
                const correctRightContent = items[leftIndex] && items[leftIndex].right;
                isCorrect = selectedRightContent === correctRightContent;
                isWrong = !isCorrect;
            }

            const colorIndex = isMatched ? parseInt(matchedLeft) : shuffledRight.indexOf(i);
            return `
                <div class="match-item right ${isMatched ? 'matched' : ''} ${isCorrect ? 'correct' : ''} ${isWrong ? 'incorrect' : ''}"
                     data-right="${i}"
                     id="match-right-${i}">
                    <span class="match-label" style="background-color: ${colors[colorIndex % colors.length]}">${i + 1}</span>
                    <span class="match-text">${items[i].right}</span>
                </div>
            `;
        }).join('');

        let confirmButtonHtml = '';
        if (!this.isAnswerSubmitted) {
            const answered = Object.keys(pairs).length;
            const total = items.length;
            const remaining = total - answered;
            const tip = remaining > 0
                ? `⚠️ 还有 ${remaining} 项未连接，提交后未连项将判错`
                : `✓ 全部已连接，请提交答案`;
            confirmButtonHtml = `
                <div style="margin-top: 20px; text-align: center;">
                    <p id="matchingTip" style="margin-top:10px;color:${remaining > 0 ? '#f59e0b' : '#10b981'};font-size:0.85rem;">${tip}</p>
                    <button class="btn btn-primary" id="confirmMatchingBtn">${remaining > 0 ? '提交答案（未完）' : '提交答案'}</button>
                </div>
            `;
        }

        return `
            <div class="question-text">
                <span class="question-number">${this.currentQuestionIndex + 1}.</span>
                ${question.question}
            </div>
            <p style="color: #64748b; margin-bottom: 10px; font-size: 0.9rem;">
                🎮 <strong>连连看模式</strong>：先点左侧项，再点右侧项，用彩色线连接配对
            </p>
            <div class="matching-container" id="matchingContainer">
                <canvas id="matchingCanvas" class="matching-canvas"></canvas>
                <div class="match-column left-column">
                    <h4>左侧选项</h4>
                    ${leftItems}
                </div>
                <div class="match-column right-column">
                    <h4>右侧选项</h4>
                    ${rightItems}
                </div>
            </div>
            ${confirmButtonHtml}
            ${this.isAnswerSubmitted && question.explanation ? `
                <div class="explanation">
                    <h4><i class="fas fa-info-circle"></i> 解析</h4>
                    <p>${question.explanation}</p>
                </div>
            ` : ''}
        `;
    }

    renderOrderingQuestion(question) {
        if (!this.orderedItems[this.currentQuestionIndex]) {
            this.orderedItems[this.currentQuestionIndex] = [...question.options].map((_, i) => i);
        }
        const order = this.orderedItems[this.currentQuestionIndex];
        
        const itemsHtml = order.map((originalIndex, currentIndex) => {
            const isFirst = currentIndex === 0;
            const isLast = currentIndex === order.length - 1;
            return `
                <div class="order-item" data-index="${originalIndex}" data-pos="${currentIndex}" draggable="true">
                    <span class="order-number">${currentIndex + 1}</span>
                    <span class="order-text">${question.options[originalIndex]}</span>
                    <div class="order-controls">
                        <button class="order-up" ${isFirst ? 'disabled' : ''} title="上移"><i class="fas fa-arrow-up"></i></button>
                        <button class="order-down" ${isLast ? 'disabled' : ''} title="下移"><i class="fas fa-arrow-down"></i></button>
                        <span class="order-handle"><i class="fas fa-grip-vertical"></i></span>
                    </div>
                </div>
            `;
        }).join('');

        if (this.isAnswerSubmitted) {
            const isCorrect = order.every((val, i) => val === question.answer[i]);
            return `
                <div class="question-text">
                    <span class="question-number">${this.currentQuestionIndex + 1}.</span>
                    ${question.question}
                </div>
                <div class="ordering-container ${isCorrect ? 'correct' : 'incorrect'}">
                    ${itemsHtml}
                </div>
                ${question.explanation ? `
                    <div class="explanation">
                        <h4><i class="fas fa-info-circle"></i> 解析</h4>
                        <p>${question.explanation}</p>
                    </div>
                ` : ''}
            `;
        }

        const confirmButtonHtml = `
            <div style="margin-top: 20px; text-align: center;">
                <button class="btn btn-primary" id="confirmOrderingBtn">确认答案</button>
            </div>
        `;

        return `
            <div class="question-text">
                <span class="question-number">${this.currentQuestionIndex + 1}.</span>
                ${question.question}
                <span style="color: #64748b; font-size: 0.9rem; margin-left: 10px;">（拖拽排列）</span>
            </div>
            <div class="ordering-container">
                ${itemsHtml}
            </div>
            ${confirmButtonHtml}
        `;
    }

    renderCaseQuestion(question) {
        const caseContent = question.case || question.answer || '';
        const reference = question.answer || '';
        const mastered = this.userAnswers[this.currentQuestionIndex] !== undefined &&
                         this.userAnswers[this.currentQuestionIndex] !== null;
        const hasOptions = Array.isArray(question.options) && question.options.length > 0;
        const correctIdx = typeof question.correctOption === 'number' ? question.correctOption : -1;
        const showFeedback = this.isAnswerSubmitted || mastered;

        // 构造选项HTML
        const optionsHtml = hasOptions ? question.options.map((opt, idx) => {
            const userIdx = this.userAnswers[this.currentQuestionIndex];
            let optClass = 'option-item';
            if (showFeedback) {
                if (idx === correctIdx) optClass += ' correct';
                else if (userIdx === idx) optClass += ' incorrect';
            } else if (userIdx === idx) {
                optClass += ' selected';
            }
            return `
                <div class="${optClass}" data-index="${idx}">
                    <span class="option-letter">${String.fromCharCode(65 + idx)}</span>
                    <span class="option-text">${opt}</span>
                    ${showFeedback && idx === correctIdx ? '<span class="option-mark correct-mark">✓</span>' : ''}
                    ${showFeedback && userIdx === idx && idx !== correctIdx ? '<span class="option-mark incorrect-mark">✗</span>' : ''}
                </div>
            `;
        }).join('') : '';

        return `
            <div class="question-text">
                <span class="question-number">${this.currentQuestionIndex + 1}.</span>
                ${question.question}
            </div>
            <div class="case-analysis-box" style="background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%); border-left: 4px solid #2563eb; padding: 18px 20px; border-radius: 8px; margin: 18px 0; line-height: 1.8; color: #1e293b; font-size: 0.95rem;">
                <h4 style="margin: 0 0 10px; color: #1e40af; display: flex; align-items: center; gap: 6px;">
                    <i class="fas fa-briefcase"></i> 案例背景
                </h4>
                <div style="white-space: pre-wrap;">${caseContent}</div>
            </div>
            ${hasOptions ? `
                <div class="case-options-container" style="margin-top: 16px;">
                    <p style="color: #1e40af; font-weight: 600; margin-bottom: 10px; display: flex; align-items: center; gap: 6px;">
                        <i class="fas fa-question-circle"></i> 请选择你认为最合适的分析方向：
                    </p>
                    <div class="options-list">${optionsHtml}</div>
                </div>
            ` : ''}
            ${showFeedback ? `
                <div class="explanation" style="background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%); border-left: 4px solid #10b981; padding: 18px 20px; border-radius: 8px; margin: 18px 0; line-height: 1.8;">
                    <h4 style="margin: 0 0 10px; color: #047857; display: flex; align-items: center; gap: 6px;">
                        <i class="fas fa-lightbulb"></i> 参考分析思路
                    </h4>
                    <p style="margin: 0; color: #1e293b; white-space: pre-wrap;">${reference}</p>
                    ${question.explanation ? `<p style="margin: 10px 0 0; color: #475569; font-size: 0.9rem;"><strong>解析：</strong>${question.explanation}</p>` : ''}
                </div>
                <div style="text-align: center; margin-top: 12px; color: ${this.userAnswers[this.currentQuestionIndex] === correctIdx ? '#10b981' : '#ef4444'}; font-weight: 600;">
                    <i class="fas ${this.userAnswers[this.currentQuestionIndex] === correctIdx ? 'fa-check-circle' : 'fa-times-circle'}"></i>
                    ${this.userAnswers[this.currentQuestionIndex] === correctIdx ? '回答正确！' : '正确答案是 ' + String.fromCharCode(65 + correctIdx) + '，你的选择是 ' + String.fromCharCode(65 + (this.userAnswers[this.currentQuestionIndex] || 0))}
                </div>
            ` : `
                <div style="margin-top: 20px; text-align: center;">
                    <button class="btn btn-primary" id="caseMasteredBtn" disabled style="opacity:0.5;cursor:not-allowed;">
                        <i class="fas fa-paper-plane"></i> 请先选择答案
                    </button>
                </div>
                <p style="text-align: center; margin-top: 12px; color: #64748b; font-size: 0.85rem;">
                    💡 选择你认为最合适的分析方向后，提交查看参考思路
                </p>
            `}
        `;
    }

    bindQuestionEvents(question) {
        const container = document.getElementById('questionContainer');
        const self = this;

        switch(question.type) {
            case 'single':
            case 'judge': {
                container.querySelectorAll('.option-item').forEach(item => {
                    item.addEventListener('click', () => {
                        const index = parseInt(item.dataset.index);
                        this.userAnswers[this.currentQuestionIndex] = index;
                        
                        if (index === question.answer) {
                            this.game.playSound('correct');
                            if (window.gameEffects) window.gameEffects.showCorrect(item);
                        } else {
                            this.game.playSound('incorrect');
                            if (window.gameEffects) window.gameEffects.showIncorrect(item);
                            this.showInstantExplanation(question, index);
                            return;
                        }
                        
                        this.renderQuestion();
                    });
                });
                break;
            }
                
            case 'multiple': {
                container.querySelectorAll('.option-item').forEach(item => {
                    item.addEventListener('click', () => {
                        const index = parseInt(item.dataset.index);
                        if (!this.selectedOptions[this.currentQuestionIndex]) {
                            this.selectedOptions[this.currentQuestionIndex] = [];
                        }
                        const selected = this.selectedOptions[this.currentQuestionIndex];
                        
                        if (selected.includes(index)) {
                            selected.splice(selected.indexOf(index), 1);
                        } else {
                            selected.push(index);
                        }
                        
                        this.game.playSound('click');
                        if (window.gameEffects) window.gameEffects.burstFromElement(item, 'sparkle', 6);
                        this.renderQuestion();
                    });
                });

                // 确认按钮事件
                const multipleConfirmBtn = document.getElementById('confirmMultipleBtn');
                if (multipleConfirmBtn) {
                    multipleConfirmBtn.addEventListener('click', () => {
                        const selected = this.selectedOptions[this.currentQuestionIndex] || [];
                        const answer = question.answer || [];
                        
                        // 检查是否正确
                        const isCorrect = selected.length === answer.length && 
                            selected.every(s => answer.includes(s));
                        
                        if (isCorrect) {
                            this.game.playSound('correct');
                        } else {
                            this.game.playSound('incorrect');
                        }
                        
                        // 检查是否是最后一题
                        if (this.currentQuestionIndex === this.currentSubLevel.quiz.length - 1) {
                            // 如果是最后一题，直接提交整个测验
                            this.isAnswerSubmitted = true;
                            this.submitQuiz();
                        } else {
                            // 否则，显示解析和继续按钮
                            this.isAnswerSubmitted = true;
                            this.renderQuestion();
                            
                            // 添加继续按钮
                            const addContinueBtn = () => {
                                const btnContainer = document.getElementById('questionContainer');
                                if (btnContainer && !document.getElementById('continueBtn')) {
                                    const btnHtml = `
                                        <div style="margin-top: 20px; text-align: center;">
                                            <button class="btn btn-primary" id="continueBtn">继续</button>
                                        </div>
                                    `;
                                    btnContainer.insertAdjacentHTML('beforeend', btnHtml);
                                    
                                    document.getElementById('continueBtn').addEventListener('click', () => {
                                        this.game.playSound('click');
                                        this.isAnswerSubmitted = false;
                                        this.nextQuestionOrFinish();
                                    });
                                }
                            };
                            setTimeout(addContinueBtn, 100);
                        }
                    });
                }
                break;
            }
                
            case 'matching': {
                // 连连看模式：点左→点右→连线
                let selectedLeft = null;
                const self = this;
                const items = question.options || question.pairs || [];

                // 左侧点击
                container.querySelectorAll('.match-item.left').forEach(item => {
                    item.addEventListener('click', () => {
                        if (self.isAnswerSubmitted) return;

                        const leftIndex = parseInt(item.dataset.left);
                        self.game.playSound('click');

                        container.querySelectorAll('.match-item.left').forEach(i => i.classList.remove('selected'));
                        item.classList.add('selected');
                        selectedLeft = leftIndex;
                    });
                });

                // 右侧点击
                container.querySelectorAll('.match-item.right').forEach(item => {
                    item.addEventListener('click', () => {
                        if (self.isAnswerSubmitted) return;
                        if (selectedLeft === null) return;

                        const rightIndex = parseInt(item.dataset.right);
                        self.game.playSound('click');

                        if (!self.selectedPairs[self.currentQuestionIndex]) {
                            self.selectedPairs[self.currentQuestionIndex] = {};
                        }
                        self.selectedPairs[self.currentQuestionIndex][selectedLeft] = rightIndex;

                        // 不重新渲染，只更新选中状态和绘制连线
                        const leftItem = document.getElementById(`match-left-${selectedLeft}`);
                        const rightItem = document.getElementById(`match-right-${rightIndex}`);
                        if (leftItem) leftItem.classList.add('matched');
                        if (rightItem) rightItem.classList.add('matched');

                        // 绘制连线
                        self.drawMatchingLines(question);

                        selectedLeft = null;
                        container.querySelectorAll('.match-item.left').forEach(i => i.classList.remove('selected'));

                        // 更新提示
                        const total = items.length;
                        const answered = Object.keys(self.selectedPairs[self.currentQuestionIndex] || {}).length;
                        const tipEl = document.getElementById('matchingTip');
                        const btn = document.getElementById('confirmMatchingBtn');
                        if (tipEl) {
                            const remaining = total - answered;
                            tipEl.innerHTML = remaining > 0
                                ? `⚠️ 还有 ${remaining} 项未连接，提交后未连项将判错`
                                : `✓ 全部已连接，请提交答案`;
                            tipEl.style.color = remaining > 0 ? '#f59e0b' : '#10b981';
                        }
                        if (btn) {
                            btn.textContent = answered < total ? `提交答案（未完）` : `提交答案`;
                        }
                    });
                });

                // 确认按钮事件
                const confirmBtn = document.getElementById('confirmMatchingBtn');
                if (confirmBtn) {
                    confirmBtn.addEventListener('click', () => {
                        if (!self.currentSubLevel || !Array.isArray(self.currentSubLevel.quiz)) {
                            console.warn('currentSubLevel 异常，跳过');
                            return;
                        }
                        const pairs = self.selectedPairs[self.currentQuestionIndex] || {};

                        const isCorrect = Object.keys(pairs).length === items.length &&
                            Object.keys(pairs).every(k => {
                                const leftIndex = parseInt(k);
                                const rightIndex = parseInt(pairs[k]);
                                const sel = items[rightIndex];
                                const cor = items[leftIndex];
                                return sel && cor && sel.right && cor.right && sel.right === cor.right;
                            });

                        if (isCorrect) {
                            self.game.playSound('correct');
                        } else {
                            self.game.playSound('incorrect');
                        }

                        if (self.currentQuestionIndex === self.currentSubLevel.quiz.length - 1) {
                            self.isAnswerSubmitted = true;
                            self.submitQuiz();
                        } else {
                            self.isAnswerSubmitted = true;
                            self.renderQuestion();

                            const addContinueBtn = () => {
                                const btnContainer = document.getElementById('questionContainer');
                                if (btnContainer && !document.getElementById('continueBtn')) {
                                    const btnHtml = `
                                        <div style="margin-top: 20px; text-align: center;">
                                            <button class="btn btn-primary" id="continueBtn">继续</button>
                                        </div>
                                    `;
                                    btnContainer.insertAdjacentHTML('beforeend', btnHtml);
                                    document.getElementById('continueBtn').addEventListener('click', () => {
                                        self.game.playSound('click');
                                        self.isAnswerSubmitted = false;
                                        self.nextQuestionOrFinish();
                                    });
                                }
                            };
                            setTimeout(addContinueBtn, 100);
                        }
                    });
                }
                break;
            }

            case 'ordering': {
                this.setupDragDrop(container);

                // 确认按钮事件
                const orderingConfirmBtn = document.getElementById('confirmOrderingBtn');
                if (orderingConfirmBtn) {
                    orderingConfirmBtn.addEventListener('click', () => {
                        // 防御：未进入quiz时不应触发
                        if (!this.currentSubLevel || !Array.isArray(this.currentSubLevel.quiz)) {
                            console.warn('currentSubLevel 异常，跳过');
                            return;
                        }
                        const order = this.orderedItems[this.currentQuestionIndex] || [];
                        const ans = Array.isArray(question.answer) ? question.answer : [];

                        // 检查是否全部正确
                        const isCorrect = order.length === ans.length && order.every((val, i) => val === ans[i]);

                        if (isCorrect) {
                            this.game.playSound('correct');
                        } else {
                            this.game.playSound('incorrect');
                        }

                        // 检查是否是最后一题
                        if (this.currentQuestionIndex === this.currentSubLevel.quiz.length - 1) {
                            // 如果是最后一题，直接提交整个测验
                            this.isAnswerSubmitted = true;
                            this.submitQuiz();
                        } else {
                            // 否则，显示解析和继续按钮
                            this.isAnswerSubmitted = true;
                            this.renderQuestion();

                            // 添加继续按钮
                            const addContinueBtn = () => {
                                const btnContainer = document.getElementById('questionContainer');
                                if (btnContainer && !document.getElementById('continueBtn')) {
                                    const btnHtml = `
                                        <div style="margin-top: 20px; text-align: center;">
                                            <button class="btn btn-primary" id="continueBtn">继续</button>
                                        </div>
                                    `;
                                    btnContainer.insertAdjacentHTML('beforeend', btnHtml);

                                    document.getElementById('continueBtn').addEventListener('click', () => {
                                        this.game.playSound('click');
                                        this.isAnswerSubmitted = false;
                                        this.nextQuestionOrFinish();
                                    });
                                }
                            };
                            setTimeout(addContinueBtn, 100);
                        }
                    });
                }
                break;
            }

            case 'case': {
                // 案例分析题：单选交互
                const hasOptions = Array.isArray(question.options) && question.options.length > 0;

                if (hasOptions && !this.isAnswerSubmitted) {
                    // 选项点击事件
                    container.querySelectorAll('.case-options-container .option-item').forEach(item => {
                        item.addEventListener('click', () => {
                            if (this.isAnswerSubmitted) return;
                            const idx = parseInt(item.dataset.index);
                            this.userAnswers[this.currentQuestionIndex] = idx;
                            this.game.playSound('click');
                            // 启用提交按钮
                            const btn = document.getElementById('caseMasteredBtn');
                            if (btn) {
                                btn.disabled = false;
                                btn.style.opacity = '1';
                                btn.style.cursor = 'pointer';
                                btn.innerHTML = '<i class="fas fa-paper-plane"></i> 提交答案';
                            }
                            // 标记选中
                            container.querySelectorAll('.case-options-container .option-item').forEach(i => {
                                i.classList.remove('selected');
                            });
                            item.classList.add('selected');
                        });
                    });
                }

                // 提交按钮事件
                const masteredBtn = document.getElementById('caseMasteredBtn');
                if (masteredBtn && !this.isAnswerSubmitted) {
                    masteredBtn.addEventListener('click', () => {
                        // 必须先选答案
                        if (!hasOptions) {
                            this.userAnswers[this.currentQuestionIndex] = 'mastered';
                        } else if (this.userAnswers[this.currentQuestionIndex] === undefined ||
                                   this.userAnswers[this.currentQuestionIndex] === null) {
                            // 未选答案，提示
                            this.game.playSound('incorrect');
                            if (window.gameEffects) window.gameEffects.shakeElement(masteredBtn);
                            return;
                        }

                        // 判断对错
                        const userAns = this.userAnswers[this.currentQuestionIndex];
                        const correctIdx = typeof question.correctOption === 'number' ? question.correctOption : -1;
                        const isCorrect = hasOptions ? (userAns === correctIdx) : true;
                        this.game.playSound(isCorrect ? 'correct' : 'incorrect');
                        this.game.recordAnswer(isCorrect, question);
                        this.isAnswerSubmitted = true;
                        this.renderQuestion();

                        // 添加继续按钮
                        setTimeout(() => {
                            const btnContainer = document.getElementById('questionContainer');
                            if (btnContainer && !document.getElementById('continueBtn')) {
                                const btnHtml = `
                                    <div style="margin-top: 20px; text-align: center;">
                                        <button class="btn btn-primary" id="continueBtn">继续</button>
                                    </div>
                                `;
                                btnContainer.insertAdjacentHTML('beforeend', btnHtml);
                                document.getElementById('continueBtn').addEventListener('click', () => {
                                    this.game.playSound('click');
                                    this.isAnswerSubmitted = false;
                                    this.nextQuestionOrFinish();
                                });
                            }
                        }, 100);
                    });
                }
                break;
            }
        }
    }
    
    initCanvasMatching(question) {
        const self = this;
        const colors = ['#2563eb', '#10b981', '#f59e0b', '#8b5cf6', '#ec4899', '#06b6d4'];
        
        // 获取Canvas元素
        const canvas = document.getElementById("canvas");
        const backCanvas = document.getElementById("backCanvas");
        if (!canvas || !backCanvas) return;
        
        // 设置Canvas尺寸
        const container = document.getElementById("matchingContainer");
        if (!container) return;
        
        const containerRect = container.getBoundingClientRect();
        canvas.width = backCanvas.width = containerRect.width;
        canvas.height = backCanvas.height = containerRect.height;
        
        // 获取Canvas上下文
        const ctx = canvas.getContext("2d");
        const backCtx = backCanvas.getContext("2d");
        
        // 设置画笔样式
        ctx.strokeStyle = '#2563eb';
        ctx.lineWidth = 3;
        ctx.lineCap = 'round';
        
        backCtx.strokeStyle = '#2563eb';
        backCtx.lineWidth = 3;
        backCtx.lineCap = 'round';
        
        // 获取所有匹配项
        const options = document.querySelectorAll('.match-item');
        const tag = 'matching_' + Math.random().toString(36).slice(2);
        
        // 为每个选项计算锚点
        options.forEach(item => {
            const rect = item.getBoundingClientRect();
            const containerRect = container.getBoundingClientRect();
            const ownership = item.dataset.ownership;
            
            // 计算锚点坐标（相对于Canvas）
            let anchorX, anchorY;
            if (ownership === 'L') {
                anchorX = rect.right - containerRect.left;
            } else {
                anchorX = rect.left - containerRect.left;
            }
            anchorY = rect.top + rect.height / 2 - containerRect.top;
            
            item.dataset.anchorX = anchorX;
            item.dataset.anchorY = anchorY;
            item.dataset.checked = '0';
            item.dataset.tag = tag;
        });
        
        // 初始化数据
        let trigger = false;
        let startPoint = { x: 0, y: 0 };
        let endPoint = { x: 0, y: 0 };
        let startElement = null;
        let endElement = null;
        let backLines = [];
        
        // 绑定mousedown事件
        options.forEach(item => {
            item.addEventListener('mousedown', function(event) {
                if (self.isAnswerSubmitted) return;
                
                self.game.playSound('click');
                this.classList.add('active');
                startElement = this;
                startPoint.x = +this.dataset.anchorX;
                startPoint.y = +this.dataset.anchorY;
                trigger = true;
                
                event.stopPropagation();
                event.preventDefault();
            });
        });
        
        // 绑定mousemove事件
        document.addEventListener('mousemove', function(event) {
            if (!trigger) return;
            
            // 计算鼠标在Canvas中的位置
            const canvasRect = canvas.getBoundingClientRect();
            const currentX = event.clientX - canvasRect.left;
            const currentY = event.clientY - canvasRect.top;
            
            // 清除Canvas并绘制当前连线
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.beginPath();
            ctx.moveTo(startPoint.x, startPoint.y);
            ctx.lineTo(currentX, currentY);
            ctx.stroke();
            
            // 检查鼠标是否悬停在目标元素上
            const overElement = document.elementFromPoint(event.clientX, event.clientY);
            const ownership = startElement.dataset.ownership;
            
            if (overElement === endElement) return;
            
            // 检查是否是有效目标
            const condition1 = overElement && overElement.dataset && overElement.dataset.tag === tag;
            const condition2 = overElement && overElement.dataset && overElement.dataset.ownership !== ownership;
            const condition3 = overElement && overElement.dataset && overElement.dataset.checked !== '1';
            
            if (condition1 && condition2 && condition3) {
                if (endElement) {
                    endElement.classList.remove('active');
                }
                endElement = overElement;
                endElement.classList.add('active');
                endElement.dataset.checked = '1';
                startElement.dataset.checked = '1';
            } else if (endElement) {
                endElement.classList.remove('active');
                endElement.dataset.checked = startElement.dataset.checked = '0';
                endElement = null;
            }
            
            event.stopPropagation();
            event.preventDefault();
        });
        
        // 绑定mouseup事件
        document.addEventListener('mouseup', function(event) {
            if (!trigger) return;
            
            // 恢复开始元素状态
            if (startElement && startElement.dataset.checked !== '1') {
                startElement.classList.remove('active');
            }
            
            // 完成连线
            if (startElement && endElement && startElement.dataset.checked === '1' && endElement.dataset.checked === '1') {
                const x1 = +startElement.dataset.anchorX;
                const y1 = +startElement.dataset.anchorY;
                const x2 = +endElement.dataset.anchorX;
                const y2 = +endElement.dataset.anchorY;
                const ownership = startElement.dataset.ownership;
                
                const startValue = startElement.dataset.value;
                const endValue = endElement.dataset.value;
                
                // 检查是否已经连线，如果是则删除旧连线
                const pairs = self.selectedPairs[self.currentQuestionIndex] || {};
                const keys = Object.keys(pairs);
                const values = Object.values(pairs);
                
                if (keys.includes(startValue) || values.includes(startValue)) {
                    // 找到旧连线
                    let key = '';
                    let value = '';
                    for (let i = 0; i < keys.length; i++) {
                        const k = keys[i];
                        const v = values[i];
                        if ([k, v].includes(startValue)) {
                            key = k;
                            value = k === startValue ? v : k;
                            break;
                        }
                    }
                    
                    // 恢复旧连线元素状态
                    const sel = `[data-value="${value}"]`;
                    const tarElement = document.querySelector(sel);
                    if (tarElement) {
                        tarElement.dataset.checked = '0';
                        tarElement.classList.remove('active');
                    }
                    
                    // 删除旧连线数据
                    delete pairs[key];
                    const index = backLines.findIndex(item => item.key === key);
                    if (index >= 0) {
                        backLines.splice(index, 1);
                    }
                }
                
                // 保存新连线
                const k = ownership === 'L' ? startValue : endValue;
                const v = ownership === 'L' ? endValue : startValue;
                
                if (!self.selectedPairs[self.currentQuestionIndex]) {
                    self.selectedPairs[self.currentQuestionIndex] = {};
                }
                self.selectedPairs[self.currentQuestionIndex][k] = v;
                
                const colorIndex = parseInt(k);
                backLines.push({
                    key: k,
                    point: { x1, y1, x2, y2 },
                    color: colors[colorIndex % colors.length]
                });
                
                // 绘制已完成的连线
                drawLines();
                self.game.playSound('correct');
            }
            
            // 清理状态
            trigger = false;
            startElement = null;
            endElement = null;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            event.stopPropagation();
            event.preventDefault();
        });
        
        // 绘制已完成的连线
        function drawLines() {
            backCtx.clearRect(0, 0, backCanvas.width, backCanvas.height);
            backLines.forEach(({ point: { x1, y1, x2, y2 }, color }) => {
                backCtx.beginPath();
                backCtx.strokeStyle = color || '#2563eb';
                backCtx.moveTo(x1, y1);
                backCtx.lineTo(x2, y2);
                backCtx.stroke();
            });
            backCtx.strokeStyle = '#2563eb'; // 恢复默认颜色
        }
        
        // 确认按钮事件
        const confirmBtn = document.getElementById('confirmMatchingBtn');
        if (confirmBtn) {
            confirmBtn.addEventListener('click', function() {
                const pairs = self.selectedPairs[self.currentQuestionIndex] || {};
                
                // 检查是否全部匹配
                // 检查是否全部正确（未答题视为错误）
                const isCorrect = Object.keys(pairs).length === question.pairs.length &&
                    Object.keys(pairs).every(k => {
                        const leftIndex = parseInt(k);
                        const rightIndex = parseInt(pairs[k]);
                        const selectedRightContent = question.pairs[rightIndex].right;
                        const correctRightContent = question.pairs[leftIndex].right;
                        return selectedRightContent === correctRightContent;
                    });
                
                if (isCorrect) {
                    self.game.playSound('correct');
                } else {
                    self.game.playSound('incorrect');
                }
                
                // 检查是否是最后一题
                if (self.currentQuestionIndex === self.currentSubLevel.quiz.length - 1) {
                    self.isAnswerSubmitted = true;
                    self.submitQuiz();
                } else {
                    self.isAnswerSubmitted = true;
                    self.renderQuestion();
                    
                    const addContinueBtn = () => {
                        const btnContainer = document.getElementById('questionContainer');
                        if (btnContainer && !document.getElementById('continueBtn')) {
                            const btnHtml = `
                                <div style="margin-top: 20px; text-align: center;">
                                    <button class="btn btn-primary" id="continueBtn">继续</button>
                                </div>
                            `;
                            btnContainer.insertAdjacentHTML('beforeend', btnHtml);
                            
                            document.getElementById('continueBtn').addEventListener('click', () => {
                                self.game.playSound('click');
                                self.isAnswerSubmitted = false;
                                self.nextQuestionOrFinish();
                            });
                        }
                    };
                    setTimeout(addContinueBtn, 100);
                }
            });
        }
        
        // 如果已有连线，重新绘制
        const existingPairs = this.selectedPairs[this.currentQuestionIndex] || {};
        if (Object.keys(existingPairs).length > 0) {
            setTimeout(() => {
                Object.keys(existingPairs).forEach(k => {
                    const v = existingPairs[k];
                    const leftElement = document.querySelector(`.match-item.left[data-value="${k}"]`);
                    const rightElement = document.querySelector(`.match-item.right[data-value="${v}"]`);
                    
                    if (leftElement && rightElement) {
                        leftElement.dataset.checked = '1';
                        rightElement.dataset.checked = '1';
                        leftElement.classList.add('active');
                        rightElement.classList.add('active');
                        
                        const x1 = +leftElement.dataset.anchorX;
                        const y1 = +leftElement.dataset.anchorY;
                        const x2 = +rightElement.dataset.anchorX;
                        const y2 = +rightElement.dataset.anchorY;
                        const colorIndex = parseInt(k);
                        
                        backLines.push({
                            key: k,
                            point: { x1, y1, x2, y2 },
                            color: colors[colorIndex % colors.length]
                        });
                    }
                });
                drawLines();
            }, 50);
        }
    }
    
    drawConnectionLines() {
        const svg = document.querySelector('.connection-lines');
        if (!svg) return;
        
        const paths = svg.querySelectorAll('path');
        paths.forEach(path => {
            const leftIndex = path.dataset.left;
            const rightIndex = path.dataset.right;
            
            const leftItem = document.querySelector(`.match-item.left[data-left="${leftIndex}"]`);
            const rightItem = document.querySelector(`.match-item.right[data-right="${rightIndex}"]`);
            
            if (leftItem && rightItem) {
                const container = svg.parentElement;
                const containerRect = container.getBoundingClientRect();
                const leftRect = leftItem.getBoundingClientRect();
                const rightRect = rightItem.getBoundingClientRect();
                
                // 计算相对于容器的坐标
                const x1 = leftRect.right - containerRect.left;
                const y1 = leftRect.top + leftRect.height / 2 - containerRect.top;
                const x2 = rightRect.left - containerRect.left;
                const y2 = rightRect.top + rightRect.height / 2 - containerRect.top;
                
                // 计算贝塞尔曲线控制点
                const midX = (x1 + x2) / 2;
                const cpOffset = Math.min(100, (x2 - x1) / 3);
                
                const d = `M ${x1} ${y1} C ${midX - cpOffset} ${y1}, ${midX + cpOffset} ${y2}, ${x2} ${y2}`;
                path.setAttribute('d', d);
            }
        });
    }

    setupDragDrop(container) {
        let draggedItem = null;
        const self = this;

        // HTML5 拖拽
        container.querySelectorAll('.order-item').forEach(item => {
            item.addEventListener('dragstart', (e) => {
                draggedItem = item;
                item.classList.add('dragging');
                if (window.gameEffects) window.gameEffects.burstFromElement(item, 'sparkle', 6);
            });

            item.addEventListener('dragend', () => {
                item.classList.remove('dragging');
                draggedItem = null;
            });

            item.addEventListener('dragover', (e) => {
                e.preventDefault();
                item.classList.add('drag-over');
            });

            item.addEventListener('dragleave', () => {
                item.classList.remove('drag-over');
            });

            item.addEventListener('drop', (e) => {
                e.preventDefault();
                item.classList.remove('drag-over');

                if (draggedItem && draggedItem !== item) {
                    const draggedIndex = parseInt(draggedItem.dataset.pos);
                    const targetIndex = parseInt(item.dataset.pos);
                    const order = this.orderedItems[this.currentQuestionIndex];

                    [order[draggedIndex], order[targetIndex]] = [order[targetIndex], order[draggedIndex]];

                    this.game.playSound('click');
                    this.renderQuestion();
                }
            });
        });

        // 上下移动按钮（移动端友好）
        container.querySelectorAll('.order-up, .order-down').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                const item = btn.closest('.order-item');
                const pos = parseInt(item.dataset.pos);
                const order = self.orderedItems[self.currentQuestionIndex];
                const isUp = btn.classList.contains('order-up');
                const newPos = isUp ? pos - 1 : pos + 1;

                if (newPos < 0 || newPos >= order.length) return;

                [order[pos], order[newPos]] = [order[newPos], order[pos]];
                self.game.playSound('click');
                if (window.gameEffects) window.gameEffects.burstFromElement(btn, 'sparkle', 5);
                self.renderQuestion();
            });
        });
    }

    showInstantExplanation(question, selectedIndex) {
        const questionContainer = document.getElementById('questionContainer');
        
        let optionsHtml = '';
        if (question.type === 'single' || question.type === 'judge') {
            optionsHtml = question.options.map((option, index) => {
                let classes = 'option-item';
                if (index === question.answer) {
                    classes += ' correct';
                } else if (index === selectedIndex) {
                    classes += ' incorrect';
                }
                return `
                    <div class="${classes}" data-index="${index}">
                        <div class="option-letter">${String.fromCharCode(65 + index)}</div>
                        <div class="option-text">${option}</div>
                    </div>
                `;
            }).join('');
        }

        questionContainer.innerHTML = `
            <div class="question-text">
                <span class="question-number">${this.currentQuestionIndex + 1}.</span>
                ${question.question}
            </div>
            ${optionsHtml ? `<div class="options-list">${optionsHtml}</div>` : ''}
            <div class="explanation">
                <h4><i class="fas fa-lightbulb"></i> 提示与解析</h4>
                <p>${question.explanation}</p>
            </div>
            <div style="margin-top: 20px; text-align: center;">
                <button class="btn btn-primary" id="continueBtn">继续</button>
            </div>
        `;
        
        document.getElementById('continueBtn').addEventListener('click', () => {
            this.game.playSound('click');
            this.isAnswerSubmitted = false;
            this.nextQuestionOrFinish();
        });
    }

    nextQuestionOrFinish() {
        if (this.currentQuestionIndex < this.currentSubLevel.quiz.length - 1) {
            this.currentQuestionIndex++;
            this.isAnswerSubmitted = false;
            if (window.gameEffects) {
                window.gameEffects.removeTimer();
                window.gameEffects.slideInQuestion();
                setTimeout(() => window.gameEffects.flyInOptions(), 100);
            }
            this.renderQuestion();
        } else {
            this.submitQuiz();
        }
    }

    prevQuestion() {
        if (this.currentQuestionIndex > 0) {
            this.currentQuestionIndex--;
            this.isAnswerSubmitted = false;
            this.renderQuestion();
        }
    }

    nextQuestion() {
        if (this.currentQuestionIndex < this.currentSubLevel.quiz.length - 1) {
            this.currentQuestionIndex++;
            this.isAnswerSubmitted = false;
            this.renderQuestion();
        } else {
            // 已经是最后一题，直接提交
            this.submitQuiz();
        }
    }

    submitQuiz() {
        let correctCount = 0;
        
        this.currentSubLevel.quiz.forEach((q, index) => {
            let isCorrect = false;
            
            switch(q.type) {
                case 'single':
                case 'judge':
                    if (typeof this.userAnswers[index] === 'string' &&
                        (this.userAnswers[index] === 'shooter-correct' ||
                         this.userAnswers[index] === 'flip-correct' ||
                         this.userAnswers[index] === 'collect-correct' ||
                         this.userAnswers[index] === 'lianliankan-correct')) {
                        isCorrect = true;
                    } else {
                        isCorrect = this.userAnswers[index] === q.answer;
                    }
                    break;
                case 'multiple':
                    if (typeof this.userAnswers[index] === 'string' &&
                        (this.userAnswers[index] === 'shooter-correct' ||
                         this.userAnswers[index] === 'flip-correct' ||
                         this.userAnswers[index] === 'collect-correct' ||
                         this.userAnswers[index] === 'lianliankan-correct')) {
                        isCorrect = true;
                    } else {
                        const selected = this.selectedOptions[index] || [];
                        const answer = q.answer || [];
                        isCorrect = selected.length === answer.length &&
                            selected.every(s => answer.includes(s));
                    }
                    break;
                case 'select-matching':
                case 'matching':
                    if (typeof this.userAnswers[index] === 'string' &&
                        (this.userAnswers[index] === 'shooter-correct' ||
                         this.userAnswers[index] === 'flip-correct' ||
                         this.userAnswers[index] === 'collect-correct' ||
                         this.userAnswers[index] === 'lianliankan-correct')) {
                        isCorrect = true;
                    } else {
                        const pairs = this.selectedPairs[index] || {};
                        const pairList = (q.options || q.pairs || []);
                        isCorrect = Object.keys(pairs).length === pairList.length &&
                            Object.keys(pairs).every(k => {
                                const leftIndex = parseInt(k);
                                const rightIndex = parseInt(pairs[k]);
                                const sel = pairList[rightIndex];
                                const cor = pairList[leftIndex];
                                return sel && cor && sel.right && cor.right && sel.right === cor.right;
                            });
                    }
                    break;
                case 'ordering':
                    if (typeof this.userAnswers[index] === 'string' &&
                        (this.userAnswers[index] === 'shooter-correct' ||
                         this.userAnswers[index] === 'flip-correct' ||
                         this.userAnswers[index] === 'collect-correct' ||
                         this.userAnswers[index] === 'lianliankan-correct')) {
                        isCorrect = true;
                    } else {
                        const order = this.orderedItems[index] || [];
                        isCorrect = order.every((val, i) => val === q.answer[i]);
                    }
                    break;
                case 'case':
                    if (typeof this.userAnswers[index] === 'string' &&
                        (this.userAnswers[index] === 'shooter-correct' ||
                         this.userAnswers[index] === 'flip-correct' ||
                         this.userAnswers[index] === 'collect-correct' ||
                         this.userAnswers[index] === 'lianliankan-correct')) {
                        isCorrect = true;
                    } else if (Array.isArray(q.options) && q.options.length > 0) {
                        isCorrect = this.userAnswers[index] === q.correctOption;
                    } else {
                        isCorrect = this.userAnswers[index] === 'mastered';
                    }
                    break;
            }
            
            if (isCorrect) {
                correctCount++;
            }
            
            this.game.recordAnswer(isCorrect, q);
        });
        
        this.isAnswerSubmitted = true;
        this.renderQuestion();

        // 先更新用户数据
        const stars = this.game.calculateStars(correctCount, this.currentSubLevel.quiz.length);
        const points = this.game.calculateQuizPoints(correctCount, this.currentSubLevel.quiz.length, stars);
        
        const result = this.game.completeSubLevel(this.currentLevel.id, this.currentSubLevel.id, stars);
        
        const pointsEl = document.querySelector('.user-points');
        if (pointsEl) {
            pointsEl.classList.add('points-updated');
            setTimeout(() => pointsEl.classList.remove('points-updated'), 500);
        }
        
        this.game.addPoints(points);
        
        this.updateHeader();
        this.updateProgress();
        this.renderSidebar();

        // 保存结果数据，供按钮点击时使用
        this._pendingResult = {
            correct: correctCount,
            total: this.currentSubLevel.quiz.length,
            stars,
            points
        };

        // 撒花庆祝
        if (window.gameEffects) {
            window.gameEffects.celebrate();
        }

        // 显示成就徽章
        if (window.gameEffects && correctCount === this.currentSubLevel.quiz.length) {
            setTimeout(() => {
                window.gameEffects.showAchievement('🏆', '完美通关！', '全部答对，获得满分！');
            }, 800);
        } else if (window.gameEffects && stars >= 2) {
            setTimeout(() => {
                window.gameEffects.showAchievement('⭐', '表现出色！', `获得 ${stars} 星评价！`);
            }, 800);
        }

        // 直接显示结果，不需要再等待用户点击按钮
        setTimeout(() => {
            const result = this._pendingResult;
            this._pendingResult = null;
            this.showResult(result.correct, result.total, result.stars, result.points);
        }, 1500);
    }

    showResult(correct, total, stars, points) {
        const accuracy = Math.round((correct / total) * 100);
        const nickname = this.game.getNickname();
        
        document.getElementById('resultTitle').textContent = accuracy >= 60 ? '太棒了！' : '继续加油！';
        
        const resultMessage = document.getElementById('resultMessage');
        if (accuracy >= 60) {
            resultMessage.textContent = `恭喜 ${nickname} 完成「${this.currentSubLevel.title}」任务！`;
        } else {
            resultMessage.textContent = `${nickname}，别灰心，再试一次吧！`;
        }
        
        // 设置奖杯颜色
        const trophyIcon = document.querySelector('#resultIcon i');
        let trophyColor;
        switch(stars) {
            case 3: trophyColor = '#f59e0b'; break; // 金色
            case 2: trophyColor = '#94a3b8'; break; // 银色
            case 1: trophyColor = '#cd7f32'; break; // 铜色
            default: trophyColor = '#cbd5e1'; // 灰色
        }
        trophyIcon.style.color = trophyColor;
        trophyIcon.style.fontSize = '4rem';
        trophyIcon.style.textShadow = `0 0 20px ${trophyColor}`;
        
        document.getElementById('resultStars').innerHTML = [1, 2, 3].map((i, index) => 
            `<i class="fas fa-star" style="animation-delay: ${index * 0.2}s; color: ${i <= stars ? '#f59e0b' : '#cbd5e1'}"></i>`
        ).join('');
        
        document.getElementById('accuracy').textContent = accuracy;
        document.getElementById('earnedPoints').textContent = points;

        // 清除上次的评定标准，避免重复
        const existingStandards = document.querySelector('.star-standards');
        if (existingStandards) {
            existingStandards.remove();
        }

        // 显示星星评定标准
        const standardsHtml = `
            <div style="margin-top: 20px; padding: 15px; background: #f8fafc; border-radius: 10px; text-align: left;">
                <h4 style="color: #2563eb; margin-bottom: 10px;"><i class="fas fa-info-circle"></i> 星星评定标准</h4>
                <p style="margin: 5px 0;">⭐⭐⭐ <strong>3星</strong>：正确率 ≥ 90%</p>
                <p style="margin: 5px 0;">⭐⭐ <strong>2星</strong>：正确率 ≥ 70% 且 &lt; 90%</p>
                <p style="margin: 5px 0;">⭐ <strong>1星</strong>：正确率 ≥ 60% 且 &lt; 70%</p>
                <p style="margin: 5px 0; color: #94a3b8;">（正确率 &lt; 60% 无星星）</p>
            </div>
        `;
        
        let statsDiv = document.querySelector('.result-stats');
        if (statsDiv) {
            const standardsDiv = document.createElement('div');
            standardsDiv.className = 'star-standards';
            standardsDiv.innerHTML = standardsHtml;
            statsDiv.parentNode.insertBefore(standardsDiv, statsDiv.nextSibling);
        }

        this.showPage('result');
    }

    goToNextSubLevel() {
        const level = this.currentLevel;
        const subLevelIndex = level.subLevels.findIndex(sl => sl.id === this.currentSubLevel.id);
        
        if (subLevelIndex < level.subLevels.length - 1) {
            const nextSubLevel = level.subLevels[subLevelIndex + 1];
            this.startSubLevel(level, nextSubLevel);
        } else {
            const nextLevelIndex = levelsData.findIndex(l => l.id === level.id);
            if (nextLevelIndex < levelsData.length - 1) {
                const nextLevel = levelsData[nextLevelIndex + 1];
                if (this.game.isLevelUnlocked(nextLevel.id)) {
                    this.showPage('level');
                    this.renderLevel(nextLevel);
                } else {
                    this.showPage('level');
                    this.renderLevel(level);
                }
            } else {
                this.showPage('level');
                this.renderLevel(level);
            }
        }
    }

    renderWrongAnswers() {
        const wrongAnswers = this.game.getWrongAnswers();
        const container = document.getElementById('wrongAnswersContent');
        
        if (wrongAnswers.length === 0) {
            container.innerHTML = `
                <div class="empty-state">
                    <i class="fas fa-check-circle"></i>
                    <h3>太棒了！</h3>
                    <p>错题本是空的，继续保持！</p>
                </div>
            `;
            return;
        }
        
        container.innerHTML = wrongAnswers.map((q, qIndex) => {
            let questionPreview = '';
            if (q.options) {
                questionPreview = q.options.slice(0, 2).map(opt => `<span class="preview-option">${opt}</span>`).join('');
            }
            
            return `
                <div class="wrong-answer-card">
                    <div class="wrong-answer-header">
                        <h4><i class="fas fa-times-circle"></i> 错题 ${qIndex + 1}</h4>
                        <span class="wrong-answer-type">${this.getQuestionTypeText(q.type)}</span>
                    </div>
                    <div class="wrong-answer-question">${q.question}</div>
                    ${questionPreview ? `<div class="wrong-answer-preview">${questionPreview}</div>` : ''}
                    ${q.explanation ? `
                        <div class="wrong-answer-explanation">
                            <i class="fas fa-lightbulb"></i> ${q.explanation}
                        </div>
                    ` : ''}
                </div>
            `;
        }).join('');
    }

    getQuestionTypeText(type) {
        const types = {
            'single': '单选题',
            'multiple': '多选题',
            'judge': '判断题',
            'matching': '匹配题',
            'ordering': '排序题'
        };
        return types[type] || '题目';
    }

    showPage(page) {
        document.querySelectorAll('#content > div').forEach(p => {
            p.style.display = 'none';
        });

        const pageEl = document.getElementById(`${page}Page`);
        if (pageEl) {
            pageEl.style.display = 'block';
        }

        // 切换页面时关闭移动端侧边栏
        const sidebar = document.getElementById('sidebar');
        const sidebarOverlay = document.getElementById('sidebarOverlay');
        if (sidebar && window.innerWidth <= 768) {
            sidebar.classList.remove('open');
            if (sidebarOverlay) {
                sidebarOverlay.classList.remove('show');
            }
        }

        this.currentPage = page;
    }

    updateHeader() {
        const rank = this.game.getRank();
        const nickname = this.game.getNickname();
        document.getElementById('userNickname').textContent = nickname;
        document.getElementById('userLevel').textContent = rank.name;
        document.getElementById('userPoints').textContent = this.game.getPoints();
        document.getElementById('userMedals').textContent = this.game.getUnlockedMedals().length;
    }

    updateProgress() {
        const progress = this.game.getProgress();
        document.getElementById('progressFill').style.width = `${progress}%`;
        document.getElementById('progressText').textContent = `${Math.round(progress)}%`;
    }

    // ========== 游戏壳路由：用小游戏呈现题目 ==========
    // 每种题型默认匹配一个最有趣的游戏壳
    pickGameModeForType(type) {
        const map = {
            'single': 'shooter',         // 单选 → 击靶
            'multiple': 'collect',       // 多选 → 收集箱
            'judge': 'flip',             // 判断 → 翻牌
            'case': 'shooter',           // 案例 → 击靶
            'matching': 'matching',      // 匹配 → 连连看
            'ordering': 'collect',       // 排序 → 收集箱
            'select-matching': 'matching'  // 兼容旧数据
        };
        return map[type] || 'shooter';
    }

    // 在题目下方追加一个"用游戏来玩"的切换按钮
    renderGameModeToggle(question) {
        const mode = this.pickGameModeForType(question.type);
        const labels = {
            'shooter': '🎯 击靶答题',
            'flip': '🃏 翻牌答题',
            'collect': '🛒 收集箱答题',
            'matching': '🔗 连连看答题'
        };
        const label = labels[mode] || '🎮 用游戏玩这题';
        return `
            <div style="margin-top:20px;padding-top:16px;border-top:1px dashed #cbd5e1;text-align:center;">
                <button id="playAsGameBtn" class="btn" style="background:linear-gradient(135deg,#f59e0b 0%,#d97706 100%);color:#fff;border:none;padding:12px 28px;border-radius:10px;font-size:1rem;font-weight:600;cursor:pointer;box-shadow:0 4px 6px rgba(0,0,0,0.1);">
                    ${label}
                </button>
                <p style="margin:8px 0 0;color:#94a3b8;font-size:0.85rem;">点击进入游戏模式来回答这道题</p>
            </div>
        `;
    }

    bindGameModeToggle(question) {
        const btn = document.getElementById('playAsGameBtn');
        if (!btn) return;
        const mode = this.pickGameModeForType(question.type);
        const self = this;
        btn.addEventListener('click', () => {
            self.game.playSound && self.game.playSound('click');
            if (mode === 'matching') {
                self.launchLianliankanForCurrent();
            } else if (mode === 'flip') {
                self.launchFlipCardForCurrent();
            } else if (mode === 'collect') {
                self.launchCollectForCurrent();
            } else {
                self.launchShooterForCurrent();
            }
        });
    }

    // 用连连看小游戏呈现当前题
    launchLianliankanForCurrent() {
        const question = this.currentSubLevel.quiz[this.currentQuestionIndex];
        if (!question) return;
        const container = document.getElementById('questionContainer');
        const items = question.options || question.pairs || [];
        if (items.length === 0) {
            alert('此匹配题数据异常');
            return;
        }
        // 渲染连连看游戏壳
        const gameHtml = `
            <div id="lianliankanShell" data-question-index="${this.currentQuestionIndex}" style="background:#fff;border-radius:12px;padding:20px;box-shadow:0 4px 12px rgba(0,0,0,0.08);">
                <h3 style="margin:0 0 6px;color:#1e293b;font-size:1.15rem;">🔗 连连看 - 找出匹配对</h3>
                <p style="margin:0 0 14px;color:#64748b;font-size:0.9rem;">依次点击左侧 → 右侧建立连线，全部连完提交</p>
                <div class="matching-container" id="matchingContainer" style="position:relative;display:grid;grid-template-columns:1fr 1fr;gap:24px;">
                    <div class="match-column" id="leftCol">
                        ${items.map((p, i) => `<div class="match-item left" data-left="${i}" id="match-left-${i}" style="padding:12px 14px;margin:8px 0;background:#fef3c7;border:2px solid #f59e0b;border-radius:8px;cursor:pointer;font-size:0.95rem;transition:all 0.2s;text-align:center;"><b style="color:#b45309;margin-right:6px;">${String.fromCharCode(65 + i)}.</b>${p.left}</div>`).join('')}
                    </div>
                    <div class="match-column" id="rightCol" style="position:relative;">
                        ${this.shuffledIndicesForMatching(question, items).map((origIdx, displayIdx) => `<div class="match-item right" data-right="${origIdx}" id="match-right-${origIdx}" style="padding:12px 14px;margin:8px 0;background:#dbeafe;border:2px solid #2563eb;border-radius:8px;cursor:pointer;font-size:0.95rem;transition:all 0.2s;text-align:center;"><b style="color:#1e40af;margin-right:6px;">${String.fromCharCode(65 + displayIdx)}.</b>${items[origIdx].right}</div>`).join('')}
                        <canvas id="matchingCanvas" style="position:absolute;top:0;left:0;pointer-events:none;z-index:1;"></canvas>
                    </div>
                </div>
                <div id="matchingTip" style="margin-top:14px;text-align:center;color:#f59e0b;font-weight:600;">⚠️ 还有 ${items.length} 项未连接</div>
                <div style="margin-top:14px;text-align:center;">
                    <button id="confirmMatchingBtn" class="btn btn-primary" style="padding:12px 32px;background:linear-gradient(135deg,#10b981 0%,#059669 100%);color:#fff;border:none;border-radius:8px;font-size:1rem;font-weight:600;cursor:pointer;">提交答案（未完）</button>
                </div>
            </div>
        `;
        container.innerHTML = gameHtml;
        this.initLianliankanCanvas();
        this.bindLianliankanEvents(question);
    }

    shuffledIndicesForMatching(question, items) {
        if (!this._lianliankanShuffle) this._lianliankanShuffle = {};
        const key = String(this.currentQuestionIndex);
        if (!this._lianliankanShuffle[key]) {
            const arr = items.map((_, i) => i);
            for (let i = arr.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
            this._lianliankanShuffle[key] = arr;
        }
        return this._lianliankanShuffle[key];
    }

    initLianliankanCanvas() {
        const canvas = document.getElementById('matchingCanvas');
        const container = document.getElementById('matchingContainer');
        if (!canvas || !container) return;
        const rect = container.getBoundingClientRect();
        canvas.width = rect.width;
        canvas.height = rect.height;
    }

    drawLianliankanLines() {
        const canvas = document.getElementById('matchingCanvas');
        if (!canvas) return;
        const ctx2d = canvas.getContext('2d');
        if (!ctx2d) return;
        ctx2d.clearRect(0, 0, canvas.width, canvas.height);
        const pairs = this.selectedPairs[this.currentQuestionIndex] || {};
        const colors = ['#ef4444', '#f59e0b', '#10b981', '#3b82f6', '#8b5cf6', '#ec4899'];
        let colorIdx = 0;
        const container = document.getElementById('matchingContainer');
        const rect = container.getBoundingClientRect();
        Object.keys(pairs).forEach((k) => {
            const leftEl = document.getElementById(`match-left-${k}`);
            const rightEl = document.getElementById(`match-right-${pairs[k]}`);
            if (!leftEl || !rightEl) return;
            const lr = leftEl.getBoundingClientRect();
            const rr = rightEl.getBoundingClientRect();
            const x1 = lr.right - rect.left;
            const y1 = lr.top + lr.height / 2 - rect.top;
            const x2 = rr.left - rect.left;
            const y2 = rr.top + rr.height / 2 - rect.top;
            ctx2d.strokeStyle = colors[colorIdx % colors.length];
            ctx2d.lineWidth = 3;
            ctx2d.beginPath();
            ctx2d.moveTo(x1, y1);
            // 贝塞尔曲线
            const mx = (x1 + x2) / 2;
            ctx2d.bezierCurveTo(mx, y1, mx, y2, x2, y2);
            ctx2d.stroke();
            colorIdx++;
        });
    }

    bindLianliankanEvents(question) {
        const self = this;
        if (!this.selectedPairs[this.currentQuestionIndex]) this.selectedPairs[this.currentQuestionIndex] = {};
        let selectedLeft = null;
        const items = question.options || question.pairs || [];
        const total = items.length;

        document.querySelectorAll('.match-item.left').forEach(item => {
            item.addEventListener('click', () => {
                if (self.isAnswerSubmitted) return;
                const li = parseInt(item.dataset.left);
                self.game.playSound && self.game.playSound('click');
                document.querySelectorAll('.match-item.left').forEach(i => i.classList.remove('selected'));
                item.classList.add('selected');
                selectedLeft = li;
            });
        });

        document.querySelectorAll('.match-item.right').forEach(item => {
            item.addEventListener('click', () => {
                if (self.isAnswerSubmitted) return;
                if (selectedLeft === null) return;
                const ri = parseInt(item.dataset.right);
                self.game.playSound && self.game.playSound('click');
                self.selectedPairs[self.currentQuestionIndex][selectedLeft] = ri;
                const le = document.getElementById(`match-left-${selectedLeft}`);
                const re = document.getElementById(`match-right-${ri}`);
                if (le) le.classList.add('matched');
                if (re) re.classList.add('matched');
                self.drawLianliankanLines();
                selectedLeft = null;
                document.querySelectorAll('.match-item.left').forEach(i => i.classList.remove('selected'));
                const answered = Object.keys(self.selectedPairs[self.currentQuestionIndex] || {}).length;
                const tip = document.getElementById('matchingTip');
                const btn = document.getElementById('confirmMatchingBtn');
                if (tip) {
                    const remain = total - answered;
                    tip.innerHTML = remain > 0
                        ? `⚠️ 还有 ${remain} 项未连接，提交后未连项将判错`
                        : '✓ 全部已连接，请提交答案';
                    tip.style.color = remain > 0 ? '#f59e0b' : '#10b981';
                }
                if (btn) btn.textContent = answered < total ? '提交答案（未完）' : '提交答案';
            });
        });

        const confirmBtn = document.getElementById('confirmMatchingBtn');
        if (confirmBtn) {
            confirmBtn.addEventListener('click', () => {
                if (!self.currentSubLevel || !Array.isArray(self.currentSubLevel.quiz)) return;
                const pairs = self.selectedPairs[self.currentQuestionIndex] || {};
                const isCorrect = Object.keys(pairs).length === items.length &&
                    Object.keys(pairs).every(k => {
                        const li = parseInt(k);
                        const ri = parseInt(pairs[k]);
                        const sel = items[ri];
                        const cor = items[li];
                        return sel && cor && sel.right && cor.right && sel.right === cor.right;
                    });
                self.userAnswers[self.currentQuestionIndex] = isCorrect ? 'lianliankan-correct' : 'lianliankan-wrong';
                self.game.playSound && self.game.playSound(isCorrect ? 'correct' : 'incorrect');
                self.isAnswerSubmitted = true;
                self.renderQuestion();
                setTimeout(() => self.addContinueButton(), 100);
            });
        }
    }

    // ========== 击靶 (Shooter) - 用于 single / case ==========
    launchShooterForCurrent() {
        const self = this;
        const question = self.currentSubLevel.quiz[self.currentQuestionIndex];
        if (!question) return;
        const container = document.getElementById('questionContainer');
        const opts = question.options || [];
        if (!opts.length) {
            container.innerHTML = `<div style="padding:30px;background:#fff;border-radius:10px;text-align:center;color:#64748b;">此题无选项</div>`;
            return;
        }
        // 正确答案索引
        const correctIdx = (() => {
            if (typeof question.correctOption === 'number') return question.correctOption;
            if (typeof question.answer === 'number') return question.answer;
            return 0;
        })();
        // 击靶：4 个靶子从下方飞过，鼠标点中命中
        container.innerHTML = `
            <div id="shooterShell" style="background:linear-gradient(180deg,#0f172a 0%,#1e293b 100%);border-radius:12px;padding:20px;color:#fff;position:relative;overflow:hidden;">
                <h3 style="margin:0 0 4px;font-size:1.1rem;">🎯 击靶挑战 - 命中正确答案</h3>
                <p style="margin:0 0 12px;color:#94a3b8;font-size:0.85rem;">靶子从右向左飞过，看准点击（${question.type === 'case' ? '💼 案例' : '🎯 单选'}）</p>
                <div style="background:rgba(255,255,255,0.05);border-radius:8px;padding:10px 14px;margin-bottom:12px;">
                    <div style="font-size:0.95rem;color:#fde68a;font-weight:600;">${question.question}</div>
                </div>
                <div id="shooterStage" style="position:relative;height:280px;background:radial-gradient(ellipse at center,#1e40af 0%,#0f172a 100%);border-radius:8px;overflow:hidden;border:2px solid #334155;">
                    <div style="position:absolute;left:8px;top:50%;transform:translateY(-50%);font-size:2rem;">🏹</div>
                </div>
                <div style="margin-top:10px;text-align:center;">
                    <span id="shooterScore" style="background:#10b981;color:#fff;padding:4px 10px;border-radius:6px;font-weight:600;margin-right:8px;">命中 0</span>
                    <span id="shooterMiss" style="background:#ef4444;color:#fff;padding:4px 10px;border-radius:6px;font-weight:600;">错失 0</span>
                </div>
            </div>
        `;
        const stage = container.querySelector('#shooterStage');
        const scoreEl = container.querySelector('#shooterScore');
        const missEl = container.querySelector('#shooterMiss');
        let hit = 0, miss = 0, answered = false;
        // 4 个靶子从右向左飞
        const colors = ['#ef4444', '#f59e0b', '#10b981', '#3b82f6', '#8b5cf6'];
        const targets = opts.map((opt, idx) => ({
            idx,
            text: opt,
            color: colors[idx % colors.length],
            x: 100, // 百分比
            y: 10 + idx * 24, // 错位
            dom: null
        }));
        // 创建靶子
        targets.forEach(t => {
            const el = document.createElement('div');
            el.className = 'shooter-target';
            el.dataset.idx = t.idx;
            el.style.cssText = `position:absolute;top:${t.y}%;right:-30%;transform:translateY(-50%);padding:10px 16px;background:${t.color};color:#fff;border:3px solid #fff;border-radius:30px;cursor:pointer;font-size:0.9rem;font-weight:600;box-shadow:0 4px 10px rgba(0,0,0,0.3);user-select:none;white-space:nowrap;z-index:2;`;
            el.textContent = `${String.fromCharCode(65 + t.idx)}. ${t.text.substring(0, 12)}${t.text.length > 12 ? '...' : ''}`;
            el.addEventListener('click', (e) => {
                e.stopPropagation();
                if (answered) return;
                answered = true;
                const isCorrect = t.idx === correctIdx;
                if (isCorrect) {
                    hit++;
                    el.style.background = '#10b981';
                    el.style.transform = 'translateY(-50%) scale(1.3)';
                    el.style.boxShadow = '0 0 30px #10b981';
                } else {
                    miss++;
                    el.style.background = '#ef4444';
                    el.style.transform = 'translateY(-50%) scale(0.8) rotate(20deg)';
                    el.style.opacity = '0.5';
                }
                scoreEl.textContent = `命中 ${hit}`;
                missEl.textContent = `错失 ${miss}`;
                self.game.playSound && self.game.playSound(isCorrect ? 'correct' : 'incorrect');
                // 标记答案
                self.userAnswers[self.currentQuestionIndex] = isCorrect ? 'shooter-correct' : 'shooter-wrong';
                self.isAnswerSubmitted = true;
                // 反馈 + 进入下一题
                setTimeout(() => {
                    self.renderQuestion();
                    setTimeout(() => self.addContinueButton(), 100);
                }, 800);
            });
            stage.appendChild(el);
            t.dom = el;
        });
        // 动画循环：靶子从右向左
        let frame = 0;
        const totalFrames = 120; // 4 秒 @30fps
        const animInterval = setInterval(() => {
            if (answered) {
                clearInterval(animInterval);
                return;
            }
            frame++;
            const progress = frame / totalFrames;
            targets.forEach(t => {
                if (!t.dom) return;
                t.dom.style.right = `${-30 + progress * 130}%`;
            });
            if (frame >= totalFrames) {
                clearInterval(animInterval);
                if (!answered) {
                    answered = true;
                    miss++;
                    missEl.textContent = `错失 ${miss}`;
                    self.userAnswers[self.currentQuestionIndex] = 'shooter-wrong';
                    self.isAnswerSubmitted = true;
                    self.game.playSound && self.game.playSound('incorrect');
                    setTimeout(() => {
                        self.renderQuestion();
                        setTimeout(() => self.addContinueButton(), 100);
                    }, 500);
                }
            }
        }, 30);
    }

    // ========== 翻牌 (Flip Card) - 用于 judge ==========
    launchFlipCardForCurrent() {
        const self = this;
        const question = self.currentSubLevel.quiz[self.currentQuestionIndex];
        if (!question) return;
        const container = document.getElementById('questionContainer');
        // 判断题 answer 转布尔
        const ans = question.answer;
        let truthVal = true;
        if (typeof ans === 'boolean') truthVal = ans;
        else if (typeof ans === 'string') {
            const lower = ans.toLowerCase();
            truthVal = lower === 'true' || lower === '✓' || lower === '对' || lower === '正确' || lower === 'yes';
        } else if (typeof ans === 'number') truthVal = ans === 0;

        container.innerHTML = `
            <div id="flipCardShell" style="background:linear-gradient(135deg,#7c3aed 0%,#5b21b6 100%);border-radius:12px;padding:24px;color:#fff;">
                <h3 style="margin:0 0 4px;font-size:1.1rem;">🃏 翻牌挑战 - 判定对错</h3>
                <p style="margin:0 0 16px;color:#ddd6fe;font-size:0.85rem;">点击牌面翻开，看完题干后选 ✓ 正确 / ✗ 错误</p>
                <div style="background:rgba(255,255,255,0.1);border-radius:8px;padding:14px;margin-bottom:16px;text-align:center;">
                    <div style="font-size:0.85rem;color:#ddd6fe;margin-bottom:6px;">题干：</div>
                    <div style="font-size:1.05rem;font-weight:600;">${question.question}</div>
                </div>
                <div id="flipCardGrid" style="display:grid;grid-template-columns:1fr 1fr;gap:14px;perspective:1000px;">
                    <div class="flip-card" data-val="true" style="position:relative;height:160px;cursor:pointer;transform-style:preserve-3d;transition:transform 0.6s;">
                        <div class="flip-card-front" style="position:absolute;inset:0;background:linear-gradient(135deg,#10b981 0%,#059669 100%);border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:3rem;backface-visibility:hidden;box-shadow:0 6px 16px rgba(0,0,0,0.3);">✓</div>
                        <div class="flip-card-back" style="position:absolute;inset:0;background:#fff;color:#10b981;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:1.4rem;font-weight:700;backface-visibility:hidden;transform:rotateY(180deg);box-shadow:0 6px 16px rgba(0,0,0,0.3);">正确</div>
                    </div>
                    <div class="flip-card" data-val="false" style="position:relative;height:160px;cursor:pointer;transform-style:preserve-3d;transition:transform 0.6s;">
                        <div class="flip-card-front" style="position:absolute;inset:0;background:linear-gradient(135deg,#ef4444 0%,#b91c1c 100%);border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:3rem;backface-visibility:hidden;box-shadow:0 6px 16px rgba(0,0,0,0.3);">✗</div>
                        <div class="flip-card-back" style="position:absolute;inset:0;background:#fff;color:#ef4444;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:1.4rem;font-weight:700;backface-visibility:hidden;transform:rotateY(180deg);box-shadow:0 6px 16px rgba(0,0,0,0.3);">错误</div>
                    </div>
                </div>
                <p style="margin:14px 0 0;text-align:center;color:#ddd6fe;font-size:0.8rem;">翻牌后立即判分</p>
            </div>
        `;
        const cards = container.querySelectorAll('.flip-card');
        cards.forEach(card => {
            card.addEventListener('click', () => {
                const chosen = card.dataset.val === 'true';
                card.style.transform = 'rotateY(180deg)';
                // 同时翻另一张
                const other = Array.from(cards).find(c => c !== card);
                if (other) other.style.transform = 'rotateY(180deg)';
                const isCorrect = chosen === truthVal;
                self.game.playSound && self.game.playSound(isCorrect ? 'correct' : 'incorrect');
                self.userAnswers[self.currentQuestionIndex] = isCorrect ? 'flip-correct' : 'flip-wrong';
                self.isAnswerSubmitted = true;
                // 显示判定结果
                const grid = container.querySelector('#flipCardGrid');
                const verdict = document.createElement('div');
                verdict.style.cssText = 'margin-top:14px;padding:12px;border-radius:8px;text-align:center;font-weight:700;font-size:1.05rem;color:#fff;background:' + (isCorrect ? 'rgba(16,185,129,0.95)' : 'rgba(239,68,68,0.95)') + ';';
                verdict.textContent = isCorrect ? '✓ 判定正确！' : `✗ 正确答案：${truthVal ? '✓ 正确' : '✗ 错误'}`;
                grid.insertAdjacentElement('afterend', verdict);
                setTimeout(() => {
                    self.renderQuestion();
                    setTimeout(() => self.addContinueButton(), 100);
                }, 1200);
            });
        });
    }

    // ========== 收集箱 (Collect) - 用于 multiple / ordering ==========
    launchCollectForCurrent() {
        const self = this;
        const question = self.currentSubLevel.quiz[self.currentQuestionIndex];
        if (!question) return;
        const container = document.getElementById('questionContainer');
        const opts = question.options || [];
        if (!opts.length) {
            container.innerHTML = `<div style="padding:30px;background:#fff;border-radius:10px;text-align:center;color:#64748b;">此题无选项</div>`;
            return;
        }
        const correctIdx = (() => {
            if (Array.isArray(question.correctOption)) return question.correctOption;
            if (Array.isArray(question.answer)) return question.answer;
            return [];
        })();
        // 收集箱：4 张卡牌在"货架"上，点一下收入"购物车"，再点退货回货架
        container.innerHTML = `
            <div id="collectShell" style="background:linear-gradient(135deg,#0891b2 0%,#0e7490 100%);border-radius:12px;padding:20px;color:#fff;">
                <h3 style="margin:0 0 4px;font-size:1.1rem;">🛒 收集箱 - 把对的物品全收进来</h3>
                <p style="margin:0 0 14px;color:#cffafe;font-size:0.85rem;">点卡牌收入购物车，再次点击退回货架（${question.type === 'multiple' ? '☑️ 多选' : '🚂 排序'}）</p>
                <div style="background:rgba(255,255,255,0.1);border-radius:8px;padding:12px 14px;margin-bottom:14px;">
                    <div style="font-size:0.95rem;color:#fef3c7;font-weight:600;">${question.question}</div>
                </div>
                <div style="margin-bottom:14px;">
                    <div style="font-size:0.85rem;color:#cffafe;margin-bottom:6px;">📦 货架：</div>
                    <div id="collectShelf" style="display:flex;flex-wrap:wrap;gap:8px;min-height:60px;background:rgba(255,255,255,0.05);border-radius:8px;padding:10px;">
                        ${opts.map((opt, idx) => `<div class="collect-item" data-idx="${idx}" style="padding:10px 14px;background:#fff;color:#0e7490;border-radius:8px;cursor:pointer;font-size:0.9rem;font-weight:600;box-shadow:0 2px 4px rgba(0,0,0,0.2);user-select:none;border:2px solid #cffafe;transition:all 0.2s;">${String.fromCharCode(65 + idx)}. ${opt.substring(0, 18)}${opt.length > 18 ? '...' : ''}</div>`).join('')}
                    </div>
                </div>
                <div>
                    <div style="font-size:0.85rem;color:#cffafe;margin-bottom:6px;">🛒 购物车（已选 <span id="collectCount">0</span>）：</div>
                    <div id="collectCart" style="display:flex;flex-wrap:wrap;gap:8px;min-height:60px;background:rgba(255,255,255,0.15);border-radius:8px;padding:10px;border:2px dashed #fff;">
                        <span style="color:#cffafe;font-size:0.85rem;">把对的选项拖进来</span>
                    </div>
                </div>
                <button id="collectSubmitBtn" style="display:block;width:100%;padding:14px;margin-top:14px;background:linear-gradient(135deg,#fbbf24 0%,#f59e0b 100%);color:#1e293b;border:none;border-radius:8px;cursor:pointer;font-size:1rem;font-weight:700;">✅ 提交答案（已选 0 项）</button>
            </div>
        `;
        const cart = [];
        const shelf = container.querySelector('#collectShelf');
        const cartEl = container.querySelector('#collectCart');
        const countEl = container.querySelector('#collectCount');
        const submitBtn = container.querySelector('#collectSubmitBtn');
        const updateSubmitText = () => {
            submitBtn.textContent = `✅ 提交答案（已选 ${cart.length} 项）`;
        };
        const renderCart = () => {
            if (cart.length === 0) {
                cartEl.innerHTML = '<span style="color:#cffafe;font-size:0.85rem;">把对的选项拖进来</span>';
            } else {
                cartEl.innerHTML = cart.map(idx => {
                    return `<div class="collect-item cart-item" data-idx="${idx}" style="padding:10px 14px;background:#fbbf24;color:#1e293b;border-radius:8px;cursor:pointer;font-size:0.9rem;font-weight:600;box-shadow:0 2px 4px rgba(0,0,0,0.2);user-select:none;border:2px solid #fff;">${String.fromCharCode(65 + idx)}. ${opts[idx].substring(0, 18)}${opts[idx].length > 18 ? '...' : ''}</div>`;
                }).join('');
                // 绑定购物车内点击 = 退回
                cartEl.querySelectorAll('.collect-item').forEach(el => {
                    el.addEventListener('click', () => {
                        const idx = parseInt(el.dataset.idx);
                        const pos = cart.indexOf(idx);
                        if (pos !== -1) cart.splice(pos, 1);
                        self.game.playSound && self.game.playSound('click');
                        renderCart();
                        countEl.textContent = cart.length;
                        updateSubmitText();
                    });
                });
            }
        };
        // 货架点击 = 收入购物车
        shelf.querySelectorAll('.collect-item').forEach(el => {
            el.addEventListener('click', () => {
                const idx = parseInt(el.dataset.idx);
                if (cart.indexOf(idx) === -1) cart.push(idx);
                self.game.playSound && self.game.playSound('click');
                renderCart();
                countEl.textContent = cart.length;
                updateSubmitText();
            });
        });
        submitBtn.addEventListener('click', () => {
            // 对比
            const chosen = cart.slice().sort();
            const right = correctIdx.slice().sort();
            const isCorrect = chosen.length === right.length && chosen.every((v, i) => v === right[i]);
            self.game.playSound && self.game.playSound(isCorrect ? 'correct' : 'incorrect');
            self.userAnswers[self.currentQuestionIndex] = isCorrect ? 'collect-correct' : 'collect-wrong';
            self.isAnswerSubmitted = true;
            // 反馈
            const verdict = document.createElement('div');
            verdict.style.cssText = 'margin-top:12px;padding:12px;border-radius:8px;text-align:center;font-weight:700;color:#fff;background:' + (isCorrect ? 'rgba(16,185,129,0.95)' : 'rgba(239,68,68,0.95)') + ';';
            verdict.textContent = isCorrect ? '✓ 收集正确！' : `✗ 正确选项：${right.map(i => String.fromCharCode(65 + i)).join('、')}`;
            submitBtn.insertAdjacentElement('afterend', verdict);
            submitBtn.disabled = true;
            setTimeout(() => {
                self.renderQuestion();
                setTimeout(() => self.addContinueButton(), 100);
            }, 1200);
        });
    }

    addContinueButton() {
        const btnContainer = document.getElementById('questionContainer');
        if (btnContainer && !document.getElementById('continueBtn')) {
            const html = `
                <div style="margin-top: 20px; text-align: center;">
                    <button class="btn btn-primary" id="continueBtn" style="padding:12px 32px;background:linear-gradient(135deg,#3b82f6 0%,#1e40af 100%);color:#fff;border:none;border-radius:8px;font-size:1rem;font-weight:600;cursor:pointer;">▶️ 继续下一题</button>
                </div>
            `;
            btnContainer.insertAdjacentHTML('beforeend', html);
            const self = this;
            document.getElementById('continueBtn').addEventListener('click', () => {
                self.game.playSound && self.game.playSound('click');
                self.isAnswerSubmitted = false;
                self.nextQuestionOrFinish();
            });
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new App();
});
