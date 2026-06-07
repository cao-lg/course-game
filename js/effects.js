/**
 * 游戏化效果模块
 * 提供粒子、连击、倒计时、分数飘字、成就弹出等游戏化效果
 */

class GameEffects {
    constructor() {
        this.combo = 0;
        this.maxCombo = 0;
        this.timerInterval = null;
        this.timeLeft = 0;
        this.onTimeUp = null;
    }

    /**
     * 创建粒子爆炸效果
     * @param {number} x 屏幕X坐标
     * @param {number} y 屏幕Y坐标
     * @param {string} type 粒子类型: star/sparkle/heart/coin
     * @param {number} count 粒子数量
     */
    burst(x, y, type = 'star', count = 12) {
        // 创建粒子容器（如果不存在）
        let container = document.querySelector('.particle-container');
        if (!container) {
            container = document.createElement('div');
            container.className = 'particle-container';
            document.body.appendChild(container);
        }

        for (let i = 0; i < count; i++) {
            const particle = document.createElement('div');
            particle.className = `particle ${type}`;
            particle.style.left = x + 'px';
            particle.style.top = y + 'px';

            // 随机方向
            const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.5;
            const distance = 80 + Math.random() * 80;
            const tx = Math.cos(angle) * distance;
            const ty = Math.sin(angle) * distance;
            particle.style.setProperty('--tx', tx + 'px');
            particle.style.setProperty('--ty', ty + 'px');

            container.appendChild(particle);
            setTimeout(() => particle.remove(), 1300);
        }
    }

    /**
     * 从元素位置创建粒子
     */
    burstFromElement(element, type = 'star', count = 12) {
        const rect = element.getBoundingClientRect();
        const x = rect.left + rect.width / 2;
        const y = rect.top + rect.height / 2;
        this.burst(x, y, type, count);
    }

    /**
     * 显示Combo连击
     */
    showCombo() {
        if (this.combo < 2) return;

        // 移除旧combo
        const old = document.querySelector('.combo-display');
        if (old) old.remove();

        const display = document.createElement('div');
        display.className = 'combo-display';
        display.innerHTML = `
            <div class="combo-text">${this.combo} COMBO!</div>
            <div class="combo-multiplier">x${(1 + (this.combo - 1) * 0.1).toFixed(1)} 倍积分</div>
        `;
        document.body.appendChild(display);
        setTimeout(() => display.remove(), 1500);
    }

    /**
     * 增加Combo
     */
    incrementCombo() {
        this.combo++;
        if (this.combo > this.maxCombo) {
            this.maxCombo = this.combo;
        }
        this.showCombo();
    }

    /**
     * 重置Combo
     */
    resetCombo() {
        this.combo = 0;
    }

    /**
     * 获取Combo倍数
     */
    getComboMultiplier() {
        return 1 + (this.combo - 1) * 0.1;
    }

    /**
     * 飘字显示分数
     */
    floatScore(x, y, text, color = '#fbbf24') {
        const el = document.createElement('div');
        el.className = 'score-float';
        el.textContent = text;
        el.style.left = x + 'px';
        el.style.top = y + 'px';
        el.style.color = color;
        el.style.textShadow = `0 0 20px ${color}, 2px 2px 4px rgba(0,0,0,0.5)`;
        document.body.appendChild(el);
        setTimeout(() => el.remove(), 1600);
    }

    /**
     * 启动倒计时
     * @param {number} seconds 秒数
     * @param {Function} onTimeUp 时间到回调
     * @param {Function} onTick 每秒回调(剩余秒数)
     */
    startTimer(seconds, onTimeUp, onTick) {
        this.stopTimer();
        this.timeLeft = seconds;
        this.onTimeUp = onTimeUp;

        // 创建倒计时条
        let bar = document.querySelector('.timer-bar');
        if (!bar) {
            bar = document.createElement('div');
            bar.className = 'timer-bar';
            bar.innerHTML = `
                <div class="timer-text" id="timerText">${seconds}s</div>
                <div class="timer-bar-fill" id="timerFill"></div>
            `;
            // 插入到题目容器顶部
            const qc = document.getElementById('questionContainer');
            if (qc) qc.insertBefore(bar, qc.firstChild);
        }

        const fill = document.getElementById('timerFill');
        const text = document.getElementById('timerText');
        if (!fill || !text) return;

        const total = seconds;
        const startTime = Date.now();

        this.timerInterval = setInterval(() => {
            const elapsed = (Date.now() - startTime) / 1000;
            this.timeLeft = Math.max(0, total - elapsed);
            const percent = (this.timeLeft / total) * 100;
            fill.style.width = percent + '%';
            text.textContent = Math.ceil(this.timeLeft) + 's';

            // 改变颜色
            fill.classList.remove('warning', 'danger');
            text.classList.remove('warning', 'danger');
            if (this.timeLeft < 5) {
                fill.classList.add('danger');
                text.classList.add('danger');
            } else if (this.timeLeft < 10) {
                fill.classList.add('warning');
                text.classList.add('warning');
            }

            if (onTick) onTick(this.timeLeft);

            if (this.timeLeft <= 0) {
                this.stopTimer();
                if (onTimeUp) onTimeUp();
            }
        }, 100);
    }

    /**
     * 停止倒计时
     */
    stopTimer() {
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
            this.timerInterval = null;
        }
    }

    /**
     * 移除倒计时条
     */
    removeTimer() {
        this.stopTimer();
        const bar = document.querySelector('.timer-bar');
        if (bar) bar.remove();
    }

    /**
     * 正确效果 - 绿色闪烁 + 粒子
     */
    showCorrect(element) {
        if (element) {
            element.classList.add('correct-glow');
            setTimeout(() => element.classList.remove('correct-glow'), 800);
            this.burstFromElement(element, 'star', 16);
        }
        this.incrementCombo();

        // 飘字
        if (element) {
            const rect = element.getBoundingClientRect();
            const points = Math.round(10 * this.getComboMultiplier());
            this.floatScore(
                rect.left + rect.width / 2 - 30,
                rect.top,
                `+${points}分`
            );
        }
    }

    /**
     * 错误效果 - 红色摇晃
     */
    showIncorrect(element) {
        if (element) {
            element.classList.add('incorrect-shake');
            setTimeout(() => element.classList.remove('incorrect-shake'), 500);
            this.burstFromElement(element, 'heart', 8);
        }
        this.resetCombo();
    }

    /**
     * 显示成就徽章
     */
    showAchievement(icon, title, description) {
        const popup = document.createElement('div');
        popup.className = 'achievement-popup';
        popup.innerHTML = `
            <div class="achievement-icon">${icon}</div>
            <div class="achievement-title">${title}</div>
            <div class="achievement-desc">${description}</div>
        `;
        document.body.appendChild(popup);
        setTimeout(() => popup.remove(), 2600);
    }

    /**
     * 题目进入动画
     */
    slideInQuestion() {
        const container = document.getElementById('questionContainer');
        if (container) {
            container.classList.remove('question-slide-in');
            void container.offsetWidth; // 触发reflow
            container.classList.add('question-slide-in');
        }
    }

    /**
     * 选项卡片飞入
     */
    flyInOptions() {
        const items = document.querySelectorAll('.option-item, .match-item, .order-item, .select-match-row');
        items.forEach((item, index) => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(20px)';
            setTimeout(() => {
                item.style.transition = 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)';
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }, index * 80);
        });
    }

    /**
     * 屏幕震动效果（错误时）
     */
    shakeScreen() {
        const body = document.body;
        body.style.animation = 'none';
        void body.offsetWidth;
        body.style.animation = 'incorrect-shake 0.4s ease-out';
        setTimeout(() => { body.style.animation = ''; }, 400);
    }

    /**
     * 撒花效果（关卡通关）
     */
    celebrate() {
        const colors = ['star', 'sparkle', 'coin', 'heart'];
        for (let i = 0; i < 30; i++) {
            setTimeout(() => {
                const x = Math.random() * window.innerWidth;
                const y = Math.random() * window.innerHeight * 0.6;
                const type = colors[Math.floor(Math.random() * colors.length)];
                this.burst(x, y, type, 8);
            }, i * 60);
        }
    }
}

// 全局实例
window.gameEffects = new GameEffects();
