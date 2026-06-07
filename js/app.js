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
        
        const savedNickname = this.game.getNickname();
        const nicknameInput = document.getElementById('nickname');
        const settingsNickname = document.getElementById('settingsNickname');
        
        if (nicknameInput) {
            nicknameInput.value = savedNickname === '学习者' ? '' : savedNickname;
        }
        
        if (settingsNickname) {
            settingsNickname.value = savedNickname === '学习者' ? '' : savedNickname;
            settingsNickname.addEventListener('input', () => {
                if (settingsNickname.value.trim()) {
                    this.game.setNickname(settingsNickname.value.trim());
                    this.updateHeader();
                }
            });
        }
        
        this.showPage('welcome');
    }

    bindEvents() {
        document.getElementById('startBtn').addEventListener('click', () => {
            this.game.playSound('click');
            
            const nicknameInput = document.getElementById('nickname');
            if (nicknameInput && nicknameInput.value.trim()) {
                this.game.setNickname(nicknameInput.value.trim());
            } else {
                this.game.setNickname('学习者');
            }
            
            this.showPage('level');
            this.renderLevel(levelsData[0]);
        });

        document.getElementById('settingsBtn').addEventListener('click', () => {
            this.game.playSound('click');
            const settingsNickname = document.getElementById('settingsNickname');
            const currentNickname = this.game.getNickname();
            if (settingsNickname) {
                settingsNickname.value = currentNickname === '学习者' ? '' : currentNickname;
            }
            this.showPage('settings');
        });

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
                questionHtml = this.renderMatchingQuestion(question);
                break;
            case 'ordering':
                questionHtml = this.renderOrderingQuestion(question);
                break;
            default:
                questionHtml = this.renderSingleChoiceQuestion(question);
        }

        questionContainer.innerHTML = questionHtml;

        if (!this.isAnswerSubmitted) {
            this.bindQuestionEvents(question);
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

    renderMatchingQuestion(question) {
        if (!this.selectedPairs[this.currentQuestionIndex]) {
            this.selectedPairs[this.currentQuestionIndex] = {};
        }
        const pairs = this.selectedPairs[this.currentQuestionIndex];
        const colors = ['#2563eb', '#10b981', '#f59e0b', '#8b5cf6', '#ec4899', '#06b6d4'];
        
        const leftItems = question.pairs.map((p, i) => {
            const isMatched = pairs[i] !== undefined;
            let isCorrect = false;
            let isWrong = false;
            
            if (this.isAnswerSubmitted && isMatched) {
                const selectedRightIndex = pairs[i];
                const selectedRightContent = question.pairs[selectedRightIndex].right;
                const correctRightContent = question.pairs[i].right;
                isCorrect = selectedRightContent === correctRightContent;
                isWrong = !isCorrect;
            }
            
            return `
                <div class="match-item left ${isMatched ? 'matched' : ''} ${isCorrect ? 'correct' : ''} ${isWrong ? 'incorrect' : ''}" data-left="${i}" style="--match-color: ${colors[i % colors.length]}">
                    <span class="match-label">${String.fromCharCode(65 + i)}</span>
                    <span class="match-text">${p.left}</span>
                    <span class="match-dot" style="background-color: ${colors[i % colors.length]}"></span>
                </div>
            `;
        }).join('');

        const shuffledRight = [...question.pairs].map((p, i) => i).sort(() => Math.random() - 0.5);
        const rightItems = shuffledRight.map(i => {
            const matchedLeft = Object.keys(pairs).find(k => pairs[k] === i);
            const isMatched = matchedLeft !== undefined;
            
            let isCorrect = false;
            let isWrong = false;
            
            if (this.isAnswerSubmitted && isMatched) {
                const leftIndex = parseInt(matchedLeft);
                const selectedRightContent = question.pairs[i].right;
                const correctRightContent = question.pairs[leftIndex].right;
                isCorrect = selectedRightContent === correctRightContent;
                isWrong = !isCorrect;
            }
            
            const colorIndex = isMatched ? parseInt(matchedLeft) : (this.isAnswerSubmitted ? i : shuffledRight.indexOf(i));
            return `
                <div class="match-item right ${isMatched ? 'matched' : ''} ${isCorrect ? 'correct' : ''} ${isWrong ? 'incorrect' : ''}" data-right="${i}" style="--match-color: ${colors[colorIndex % colors.length]}">
                    <span class="match-dot" style="background-color: ${colors[colorIndex % colors.length]}"></span>
                    <span class="match-text">${question.pairs[i].right}</span>
                    <span class="match-label">${i + 1}</span>
                </div>
            `;
        }).join('');

        let connectionLines = '';
        if (Object.keys(pairs).length > 0) {
            connectionLines = '<svg class="connection-lines" style="position:absolute; top:0; left:0; width:100%; height:100%; pointer-events:none;">';
            Object.keys(pairs).forEach(leftIndex => {
                const rightIndex = pairs[leftIndex];
                let lineColor = colors[parseInt(leftIndex) % colors.length];
                
                if (this.isAnswerSubmitted) {
                    const selectedRightContent = question.pairs[rightIndex].right;
                    const correctRightContent = question.pairs[parseInt(leftIndex)].right;
                    lineColor = selectedRightContent === correctRightContent ? '#10b981' : '#ef4444';
                }
                
                connectionLines += `<path data-left="${leftIndex}" data-right="${rightIndex}" stroke="${lineColor}" stroke-width="3" fill="none" stroke-linecap="round" style="opacity:0.7"/>`;
            });
            connectionLines += '</svg>';
        }

        const confirmButtonHtml = (!this.isAnswerSubmitted && Object.keys(pairs).length > 0) ? `
            <div style="margin-top: 20px; text-align: center;">
                <button class="btn btn-primary" id="confirmMatchingBtn">确认答案</button>
            </div>
        ` : '';

        return `
            <div class="question-text">
                <span class="question-number">${this.currentQuestionIndex + 1}.</span>
                ${question.question}
            </div>
            <div class="matching-wrapper" style="position:relative;">
                ${connectionLines}
                <div class="matching-container">
                    <div class="match-column">
                        <h4>左侧选项</h4>
                        ${leftItems}
                    </div>
                    <div class="match-divider" style="width:100px; flex:none;"></div>
                    <div class="match-column">
                        <h4>右侧选项</h4>
                        ${rightItems}
                    </div>
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
            return `
                <div class="order-item" data-index="${originalIndex}" data-pos="${currentIndex}" draggable="true">
                    <span class="order-number">${currentIndex + 1}</span>
                    <span class="order-text">${question.options[originalIndex]}</span>
                    <span class="order-handle"><i class="fas fa-grip-vertical"></i></span>
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

    bindQuestionEvents(question) {
        const container = document.getElementById('questionContainer');

        switch(question.type) {
            case 'single':
            case 'judge':
                container.querySelectorAll('.option-item').forEach(item => {
                    item.addEventListener('click', () => {
                        const index = parseInt(item.dataset.index);
                        this.userAnswers[this.currentQuestionIndex] = index;
                        
                        if (index === question.answer) {
                            this.game.playSound('correct');
                        } else {
                            this.game.playSound('incorrect');
                            this.showInstantExplanation(question, index);
                            return;
                        }
                        
                        this.renderQuestion();
                    });
                });
                break;
                
            case 'multiple':
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
                        this.renderQuestion();
                    });
                });

                // 确认按钮事件
                const confirmBtn = document.getElementById('confirmMultipleBtn');
                if (confirmBtn) {
                    confirmBtn.addEventListener('click', () => {
                        const selected = this.selectedOptions[this.currentQuestionIndex] || [];
                        const answer = question.answer || [];
                        
                        // 检查是否正确
                        const isCorrect = selected.length === answer.length && 
                            selected.every(s => answer.includes(s));
                        
                        if (isCorrect) {
                            this.game.playSound('correct');
                            this.isAnswerSubmitted = true;
                            this.renderQuestion();
                        } else {
                            this.game.playSound('incorrect');
                            this.isAnswerSubmitted = true;
                            this.renderQuestion();
                            
                            // 这里直接显示解析，不再有继续按钮了
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
                
            case 'matching':
                let selectedLeft = null;
                
                container.querySelectorAll('.match-item.left').forEach(item => {
                    item.addEventListener('click', () => {
                        const leftIndex = parseInt(item.dataset.left);
                        this.game.playSound('click');
                        
                        container.querySelectorAll('.match-item.left').forEach(i => i.classList.remove('selected'));
                        item.classList.add('selected');
                        selectedLeft = leftIndex;
                    });
                });
                
                container.querySelectorAll('.match-item.right').forEach(item => {
                    item.addEventListener('click', () => {
                        if (selectedLeft === null) return;
                        
                        const rightIndex = parseInt(item.dataset.right);
                        this.game.playSound('click');
                        
                        if (!this.selectedPairs[this.currentQuestionIndex]) {
                            this.selectedPairs[this.currentQuestionIndex] = {};
                        }
                        this.selectedPairs[this.currentQuestionIndex][selectedLeft] = rightIndex;
                        
                        selectedLeft = null;
                        this.renderQuestion();
                        
                        // 延迟绘制连接线
                        setTimeout(() => {
                            this.drawConnectionLines();
                        }, 50);
                    });
                });
                
                // 首次渲染后绘制连接线
                setTimeout(() => {
                    this.drawConnectionLines();
                }, 50);

                // 确认按钮事件
                const confirmBtn = document.getElementById('confirmMatchingBtn');
                if (confirmBtn) {
                    confirmBtn.addEventListener('click', () => {
                        const pairs = this.selectedPairs[this.currentQuestionIndex] || {};
                        
                        // 检查是否全部匹配
                        if (Object.keys(pairs).length !== question.pairs.length) {
                            // 还没全部匹配，提示一下
                            alert('请完成所有匹配再确认！');
                            return;
                        }

                        // 检查是否全部正确
                        const isCorrect = Object.keys(pairs).every(k => {
                            const leftIndex = parseInt(k);
                            const rightIndex = parseInt(pairs[k]);
                            const selectedRightContent = question.pairs[rightIndex].right;
                            const correctRightContent = question.pairs[leftIndex].right;
                            return selectedRightContent === correctRightContent;
                        });

                        if (isCorrect) {
                            this.game.playSound('correct');
                            this.isAnswerSubmitted = true;
                            this.renderQuestion();
                        } else {
                            this.game.playSound('incorrect');
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
                
            case 'ordering':
                this.setupDragDrop(container);

                // 确认按钮事件
                const confirmBtn = document.getElementById('confirmOrderingBtn');
                if (confirmBtn) {
                    confirmBtn.addEventListener('click', () => {
                        const order = this.orderedItems[this.currentQuestionIndex] || [];
                        
                        // 检查是否全部正确
                        const isCorrect = order.every((val, i) => val === question.answer[i]);

                        if (isCorrect) {
                            this.game.playSound('correct');
                            this.isAnswerSubmitted = true;
                            this.renderQuestion();
                        } else {
                            this.game.playSound('incorrect');
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
                const leftRect = leftItem.getBoundingClientRect();
                const rightRect = rightItem.getBoundingClientRect();
                const svgRect = svg.getBoundingClientRect();
                
                const x1 = leftRect.right - svgRect.left;
                const y1 = leftRect.top + leftRect.height / 2 - svgRect.top;
                const x2 = rightRect.left - svgRect.left;
                const y2 = rightRect.top + rightRect.height / 2 - svgRect.top;
                
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
        
        container.querySelectorAll('.order-item').forEach(item => {
            item.addEventListener('dragstart', (e) => {
                draggedItem = item;
                item.classList.add('dragging');
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
            this.renderQuestion();
        } else {
            this.submitQuiz();
        }
    }

    prevQuestion() {
        if (this.currentQuestionIndex > 0) {
            this.currentQuestionIndex--;
            this.renderQuestion();
        }
    }

    nextQuestion() {
        if (this.currentQuestionIndex < this.currentSubLevel.quiz.length - 1) {
            this.currentQuestionIndex++;
            this.renderQuestion();
        }
    }

    submitQuiz() {
        if (!this.isAnswerSubmitted) {
            let correctCount = 0;
            
            this.currentSubLevel.quiz.forEach((q, index) => {
                let isCorrect = false;
                
                switch(q.type) {
                    case 'single':
                    case 'judge':
                        isCorrect = this.userAnswers[index] === q.answer;
                        break;
                    case 'multiple':
                        const selected = this.selectedOptions[index] || [];
                        const answer = q.answer || [];
                        isCorrect = selected.length === answer.length && 
                            selected.every(s => answer.includes(s));
                        break;
                    case 'matching':
                        const pairs = this.selectedPairs[index] || {};
                        isCorrect = Object.keys(pairs).length === q.pairs.length &&
                            Object.keys(pairs).every(k => {
                                // 检查配对是否正确：左侧 k 对应的内容是否匹配到右侧对应的内容
                                const leftIndex = parseInt(k);
                                const rightIndex = parseInt(pairs[k]);
                                
                                // 获取左侧的内容
                                const leftContent = q.pairs[leftIndex].left;
                                // 获取用户选择的右侧内容
                                const selectedRightContent = q.pairs[rightIndex].right;
                                // 获取这个左侧内容应该匹配的正确右侧内容
                                const correctRightContent = q.pairs[leftIndex].right;
                                
                                // 检查用户选择的右侧内容是否等于正确内容
                                return selectedRightContent === correctRightContent;
                            });
                        break;
                    case 'ordering':
                        const order = this.orderedItems[index] || [];
                        isCorrect = order.every((val, i) => val === q.answer[i]);
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

            // 添加查看结果按钮
            const addButton = () => {
                const container = document.getElementById('questionContainer');
                if (container && !document.getElementById('viewResultBtn')) {
                    const buttonHtml = `
                        <div style="margin-top: 20px; text-align: center;">
                            <button class="btn btn-primary" id="viewResultBtn">查看结果</button>
                        </div>
                    `;
                    container.insertAdjacentHTML('beforeend', buttonHtml);
                    
                    document.getElementById('viewResultBtn').addEventListener('click', () => {
                        this.game.playSound('click');
                        const result = this._pendingResult;
                        this._pendingResult = null;
                        this.showResult(result.correct, result.total, result.stars, result.points);
                    });
                }
            };

            // 延迟一下添加按钮，保证DOM已渲染
            setTimeout(addButton, 100);
        }
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
}

document.addEventListener('DOMContentLoaded', () => {
    new App();
});
