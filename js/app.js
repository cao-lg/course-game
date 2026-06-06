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
        this.init();
    }

    init() {
        this.renderSidebar();
        this.updateHeader();
        this.updateProgress();
        this.bindEvents();
        
        // 初始化昵称
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
            
            // 保存昵称
            const nicknameInput = document.getElementById('nickname');
            if (nicknameInput && nicknameInput.value.trim()) {
                this.game.setNickname(nicknameInput.value.trim());
            } else {
                // 如果没有输入，使用默认名称
                this.game.setNickname('学习者');
            }
            
            this.showPage('level');
            this.renderLevel(levelsData[0]);
        });

        document.getElementById('settingsBtn').addEventListener('click', () => {
            this.game.playSound('click');
            // 加载当前昵称到设置页面
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

            return `
                <div class="sub-level-card ${completed ? 'completed' : ''} ${!unlocked ? 'locked' : ''}"
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

        questionContainer.innerHTML = `
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

        if (!this.isAnswerSubmitted) {
            questionContainer.querySelectorAll('.option-item').forEach(item => {
                item.addEventListener('click', () => {
                    const index = parseInt(item.dataset.index);
                    this.userAnswers[this.currentQuestionIndex] = index;
                    
                    // 即时检查答案并显示
                    if (index === question.answer) {
                        this.game.playSound('correct');
                    } else {
                        this.game.playSound('incorrect');
                        // 显示即时解析
                        this.showInstantExplanation(question, index);
                        return;
                    }
                    
                    this.renderQuestion();
                });
            });
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
    
    // 显示即时解析
    showInstantExplanation(question, selectedIndex) {
        const questionContainer = document.getElementById('questionContainer');
        const isCorrect = selectedIndex === question.answer;
        
        const optionsHtml = question.options.map((option, index) => {
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

        questionContainer.innerHTML = `
            <div class="question-text">
                <span class="question-number">${this.currentQuestionIndex + 1}.</span>
                ${question.question}
            </div>
            <div class="options-list">
                ${optionsHtml}
            </div>
            <div class="explanation">
                <h4><i class="fas fa-lightbulb"></i> 提示与解析</h4>
                <p>${question.explanation}</p>
            </div>
            <div style="margin-top: 20px; text-align: center;">
                <button class="btn btn-primary" id="continueBtn">继续</button>
            </div>
        `;
        
        // 用户可以查看解析后继续
        document.getElementById('continueBtn').addEventListener('click', () => {
            this.game.playSound('click');
            this.isAnswerSubmitted = false;
            this.nextQuestionOrFinish();
        });
    }
    
    // 检查是否继续还是完成
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
            if (this.userAnswers.some(a => a === null)) {
                alert('请先回答所有问题！');
                return;
            }
            this.isAnswerSubmitted = true;
            
            let correctCount = 0;
            this.currentSubLevel.quiz.forEach((q, index) => {
                const isCorrect = this.userAnswers[index] === q.answer;
                if (isCorrect) correctCount++;
                this.game.recordAnswer(isCorrect);
            });
            
            this.renderQuestion();

            setTimeout(() => {
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

                setTimeout(() => {
                    this.showResult(correctCount, this.currentSubLevel.quiz.length, stars, points);
                }, 500);
            }, 800);
        }
    }

    showResult(correct, total, stars, points) {
        const accuracy = Math.round((correct / total) * 100);
        const nickname = this.game.getNickname();
        
        document.getElementById('resultTitle').textContent = accuracy >= 60 ? '太棒了！' : '继续加油！';
        
        // 显示任务完成消息
        const resultMessage = document.getElementById('resultMessage');
        if (accuracy >= 60) {
            resultMessage.textContent = `恭喜 ${nickname} 完成「${this.currentSubLevel.title}」任务！`;
        } else {
            resultMessage.textContent = `${nickname}，别灰心，再试一次吧！`;
        }
        
        document.getElementById('resultStars').innerHTML = [1, 2, 3].map((i, index) => 
            `<i class="fas fa-star" style="animation-delay: ${index * 0.2}s; color: ${i <= stars ? '#f59e0b' : '#cbd5e1'}"></i>`
        ).join('');
        
        document.getElementById('accuracy').textContent = accuracy; // 移除多余的%
        document.getElementById('earnedPoints').textContent = points;

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
