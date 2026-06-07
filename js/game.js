class Game {
    constructor() {
        this.data = this.loadData();
        this.initData();
        this.audioContext = null;
        this.soundsEnabled = true;
        this.initAudio();
    }

    initAudio() {
        try {
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
        } catch (e) {
            console.log('Audio not supported');
        }
    }

    playTone(frequency, duration, type = 'sine', volume = 0.3) {
        if (!this.audioContext || !this.isSoundEnabled()) return;
        
        const oscillator = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(this.audioContext.destination);
        
        oscillator.frequency.value = frequency;
        oscillator.type = type;
        gainNode.gain.setValueAtTime(volume, this.audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + duration);
        
        oscillator.start(this.audioContext.currentTime);
        oscillator.stop(this.audioContext.currentTime + duration);
    }

    playSound(type) {
        if (!this.audioContext || !this.isSoundEnabled()) return;
        
        const now = this.audioContext.currentTime;
        
        switch (type) {
            case 'click':
                this.playTone(800, 0.1, 'sine', 0.2);
                break;
            case 'correct':
                this.playTone(523, 0.1, 'sine', 0.3);
                setTimeout(() => this.playTone(659, 0.1, 'sine', 0.3), 100);
                setTimeout(() => this.playTone(784, 0.2, 'sine', 0.3), 200);
                break;
            case 'incorrect':
                this.playTone(200, 0.2, 'sawtooth', 0.2);
                setTimeout(() => this.playTone(150, 0.3, 'sawtooth', 0.2), 150);
                break;
            case 'levelUp':
                const notes = [523, 587, 659, 698, 784, 880, 988, 1047];
                notes.forEach((note, i) => {
                    setTimeout(() => this.playTone(note, 0.2, 'triangle', 0.2), i * 80);
                });
                break;
            case 'medal':
                const medalNotes = [784, 988, 1175, 1319];
                medalNotes.forEach((note, i) => {
                    setTimeout(() => this.playTone(note, 0.3, 'triangle', 0.25), i * 100);
                });
                break;
            case 'points':
                this.playTone(880, 0.1, 'sine', 0.2);
                setTimeout(() => this.playTone(1100, 0.1, 'sine', 0.2), 50);
                break;
            case 'star':
                this.playTone(1200, 0.2, 'sine', 0.3);
                break;
        }
    }

    createConfetti() {
        const colors = ['#f59e0b', '#10b981', '#3b82f6', '#ef4444', '#8b5cf6', '#ec4899'];
        const container = document.createElement('div');
        container.className = 'confetti-container';
        document.body.appendChild(container);
        
        for (let i = 0; i < 50; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDelay = Math.random() * 2 + 's';
            confetti.style.width = (Math.random() * 10 + 5) + 'px';
            confetti.style.height = (Math.random() * 10 + 5) + 'px';
            container.appendChild(confetti);
        }
        
        setTimeout(() => container.remove(), 3000);
    }

    showFloatingPoints(points, x, y) {
        const el = document.createElement('div');
        el.className = 'floating-points';
        el.textContent = `+${points}`;
        el.style.left = x + 'px';
        el.style.top = y + 'px';
        document.body.appendChild(el);
        
        setTimeout(() => el.remove(), 1000);
    }

    // 初始化默认数据
    initData() {
        if (!this.data) {
            this.data = {
                nickname: '学习者',
                points: 0,
                totalCorrect: 0,
                totalAnswered: 0,
                studyTime: 0,
                lastLogin: null,
                currentLevel: 0,
                currentSubLevel: 0,
                completedSubLevels: {},
                subLevelStars: {},
                unlockedMedals: [],
                soundEnabled: true,
                theme: 'blue',
                wrongAnswers: []
            };
        }
        if (!this.data.wrongAnswers) {
            this.data.wrongAnswers = [];
        }
        this.saveData();
    }
    
    // 昵称管理
    setNickname(nickname) {
        this.data.nickname = nickname || '学习者';
        this.saveData();
    }

    // 从 localStorage 加载数据
    loadData() {
        try {
            const saved = localStorage.getItem('financialMarketingGame');
            if (saved) {
                const data = JSON.parse(saved);
                // 确保昵称存在
                if (!data.nickname) {
                    data.nickname = '学习者';
                }
                return data;
            }
            return null;
        } catch (e) {
            return null;
        }
    }
    
    // 获取昵称，确保不会返回undefined
    getNickname() {
        return this.data.nickname || '学习者';
    }

    // 保存数据到 localStorage
    saveData() {
        try {
            localStorage.setItem('financialMarketingGame', JSON.stringify(this.data));
        } catch (e) {
            console.error('Failed to save data:', e);
        }
    }

    // 重置数据
    resetData() {
        this.data = null;
        this.initData();
    }

    // 获取积分
    getPoints() {
        return this.data.points;
    }

    // 增加积分
    addPoints(points) {
        this.data.points += points;
        this.saveData();
        this.playSound('points');
        this.checkLevelUp();
        const medal = this.checkMedals();
        return medal;
    }

    // 获取当前等级信息
    getRank() {
        let rank = ranksData[0];
        for (let i = ranksData.length - 1; i >= 0; i--) {
            if (this.data.points >= ranksData[i].minPoints) {
                rank = ranksData[i];
                break;
            }
        }
        return rank;
    }

    // 检查是否升级
    checkLevelUp() {
        const currentRank = this.getRank();
        const prevPoints = this.getPoints() - (this.data.lastAddedPoints || 0);
        
        for (let i = ranksData.length - 1; i >= 0; i--) {
            if (prevPoints < ranksData[i].minPoints && this.getPoints() >= ranksData[i].minPoints) {
                this.playSound('levelUp');
                this.createConfetti();
                return ranksData[i];
            }
        }
        return null;
    }

    // 记录答题
    recordAnswer(correct, question = null) {
        this.data.totalAnswered++;
        if (correct) {
            this.data.totalCorrect++;
            this.playSound('correct');
            // 如果这道题之前在错题本里，移除它
            if (question) {
                this.removeWrongAnswer(question);
            }
        } else {
            this.playSound('incorrect');
            // 添加到错题本
            if (question) {
                this.addWrongAnswer(question);
            }
        }
        this.saveData();
        const medal = this.checkMedals();
        return medal;
    }

    // 添加到错题本
    addWrongAnswer(question) {
        if (!this.data.wrongAnswers) {
            this.data.wrongAnswers = [];
        }
        const exists = this.data.wrongAnswers.some(wa => 
            wa.question === question.question && wa.type === question.type
        );
        if (!exists) {
            this.data.wrongAnswers.push({
                ...question,
                addedAt: Date.now()
            });
        }
    }

    // 从错题本移除
    removeWrongAnswer(question) {
        if (!this.data.wrongAnswers) return;
        this.data.wrongAnswers = this.data.wrongAnswers.filter(wa => 
            !(wa.question === question.question && wa.type === question.type)
        );
    }

    // 获取错题本
    getWrongAnswers() {
        return this.data.wrongAnswers || [];
    }

    // 清空错题本
    clearWrongAnswers() {
        this.data.wrongAnswers = [];
        this.saveData();
    }

    // 记录学习时间
    recordStudyTime(minutes) {
        this.data.studyTime += minutes;
        this.saveData();
        this.checkMedals();
    }

    // 完成子关卡
    completeSubLevel(levelId, subLevelId, stars) {
        const key = `${levelId}-${subLevelId}`;
        const isFirstComplete = !this.data.completedSubLevels[key];
        this.data.completedSubLevels[key] = true;
        if (!this.data.subLevelStars[key] || this.data.subLevelStars[key] < stars) {
            this.data.subLevelStars[key] = stars;
        }
        this.saveData();
        
        if (stars === 3) {
            this.playSound('star');
            this.createConfetti();
        }
        
        const medal = this.checkMedals();
        return { isFirstComplete, medal };
    }

    // 检查子关卡是否完成
    isSubLevelCompleted(levelId, subLevelId) {
        const key = `${levelId}-${subLevelId}`;
        return this.data.completedSubLevels[key] === true;
    }

    // 获取子关卡星星数
    getSubLevelStars(levelId, subLevelId) {
        const key = `${levelId}-${subLevelId}`;
        return this.data.subLevelStars[key] || 0;
    }

    // 检查关卡是否解锁
    isLevelUnlocked(levelId) {
        if (levelId === 1) return true;
        const prevLevel = levelsData.find(l => l.id === levelId - 1);
        if (!prevLevel) return true;
        const prevLevelSubLevels = prevLevel.subLevels;
        return prevLevelSubLevels.every(sl => 
            this.isSubLevelCompleted(levelId - 1, sl.id)
        );
    }

    // 检查子关卡是否解锁
    isSubLevelUnlocked(levelId, subLevelId) {
        const level = levelsData.find(l => l.id === levelId);
        if (!level) return false;
        const subLevelIndex = level.subLevels.findIndex(sl => sl.id === subLevelId);
        if (subLevelIndex === 0) return true;
        const prevSubLevel = level.subLevels[subLevelIndex - 1];
        return this.isSubLevelCompleted(levelId, prevSubLevel.id);
    }

    // 计算总体进度
    getProgress() {
        let total = 0;
        let completed = 0;
        levelsData.forEach(level => {
            level.subLevels.forEach(subLevel => {
                total++;
                if (this.isSubLevelCompleted(level.id, subLevel.id)) {
                    completed++;
                }
            });
        });
        return total > 0 ? (completed / total) * 100 : 0;
    }

    // 获取已解锁勋章
    getUnlockedMedals() {
        return this.data.unlockedMedals || [];
    }

    // 检查勋章条件
    checkMedals() {
        const unlockedBefore = this.getUnlockedMedals().length;
        medalsData.forEach(medal => {
            if (this.getUnlockedMedals().includes(medal.id)) return;
            let unlocked = false;
            switch (medal.requirement.type) {
                case 'level':
                    const level = levelsData.find(l => l.id === medal.requirement.level);
                    if (level) {
                        unlocked = level.subLevels.every(sl => 
                            this.isSubLevelCompleted(level.id, sl.id)
                        );
                    }
                    break;
                case 'correct':
                    unlocked = this.data.totalCorrect >= medal.requirement.count;
                    break;
                case 'stars':
                    const hasThreeStars = Object.values(this.data.subLevelStars).some(s => s >= 3);
                    unlocked = hasThreeStars;
                    break;
                case 'studyTime':
                    unlocked = this.data.studyTime >= medal.requirement.minutes;
                    break;
            }
            if (unlocked) {
                this.data.unlockedMedals.push(medal.id);
            }
        });
        this.saveData();
        if (this.getUnlockedMedals().length > unlockedBefore) {
            const newMedals = medalsData.filter(m => 
                this.getUnlockedMedals().includes(m.id) && 
                !medalsData.slice(0, medalsData.indexOf(m)).some(pm => 
                    this.getUnlockedMedals().includes(pm.id)
                )
            );
            if (newMedals.length > 0) {
                this.playSound('medal');
                this.createConfetti();
                return newMedals[newMedals.length - 1];
            }
        }
        return null;
    }

    // 计算答题星级
    calculateStars(correct, total) {
        const accuracy = correct / total;
        if (accuracy >= 0.9) return 3;
        if (accuracy >= 0.7) return 2;
        if (accuracy >= 0.6) return 1;
        return 0;
    }

    // 计算答题积分
    calculateQuizPoints(correct, total, stars) {
        let points = correct * 20; // 每题20分
        if (stars === 3) points += 100; // 3星额外100分
        this.data.lastAddedPoints = points;
        return points;
    }

    // 音效控制
    isSoundEnabled() {
        return this.data.soundEnabled;
    }

    setSoundEnabled(enabled) {
        this.data.soundEnabled = enabled;
        this.saveData();
        if (enabled && this.audioContext) {
            this.audioContext.resume();
        }
    }

    // 主题
    getTheme() {
        return this.data.theme;
    }

    setTheme(theme) {
        this.data.theme = theme;
        this.saveData();
    }
}
