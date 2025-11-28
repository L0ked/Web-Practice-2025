// ===== ПЕРЕМЕННЫЕ =====

// Уровни игры
const levels = [
    { name: 'Начальный', type: 'arithmetic' },
    { name: 'Средний', type: 'comparison' },
    { name: 'Продвинутый', type: 'logical' }
];

// Текущее состояние игры
let currentLevel = 0;           // Номер текущего уровня (0, 1, 2)
let correctAnswers = 0;         // Количество правильных ответов
let wrongAnswers = 0;           // Количество неправильных ответов
let questionNumber = 1;         // Номер текущего вопроса (1-10)
let currentQuestion = {};       // Текущий вопрос
let askedQuestions = [];        // Массив уже заданных вопросов
let startTime;                  // Время начала игры
let timerInterval;              // Интервал таймера

// ===== ЭЛЕМЕНТЫ HTML =====
const gameScreen = document.getElementById('game-screen');
const levelCompleteScreen = document.getElementById('level-complete-screen');
const failScreen = document.getElementById('fail-screen');
const victoryScreen = document.getElementById('victory-screen');

const levelNameEl = document.getElementById('level-name');
const timerEl = document.getElementById('timer');
const correctCountEl = document.getElementById('correct-count');
const wrongCountEl = document.getElementById('wrong-count');
const questionNumberEl = document.getElementById('question-number');
const questionEl = document.getElementById('question');
const answerInput = document.getElementById('answer-input');
const submitBtn = document.getElementById('submit-btn');
const feedbackEl = document.getElementById('feedback');

// ===== ФУНКЦИИ ГЕНЕРАЦИИ ВОПРОСОВ =====

// Генерация случайного числа от min до max
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Генерация вопроса для начального уровня (арифметика)
function generateArithmeticQuestion() {
    const operators = ['+', '-', '*', '/'];
    const operator = operators[getRandomNumber(0, 3)];
    
    let num1 = getRandomNumber(1, 20);
    let num2 = getRandomNumber(1, 20);
    
    // Для деления делаем так, чтобы делилось нацело
    if (operator === '/') {
        num2 = getRandomNumber(1, 10);
        num1 = num2 * getRandomNumber(1, 10);
    }
    
    let answer;
    switch (operator) {
        case '+': answer = num1 + num2; break;
        case '-': answer = num1 - num2; break;
        case '*': answer = num1 * num2; break;
        case '/': answer = num1 / num2; break;
    }
    
    return {
        text: `${num1} ${operator} ${num2}`,
        answer: answer
    };
}

// Генерация вопроса для среднего уровня (сравнение)
function generateComparisonQuestion() {
    const expressions = [
        // Простые сравнения
        () => {
            const num1 = getRandomNumber(1, 50);
            const num2 = getRandomNumber(1, 50);
            const operators = ['>', '<', '=='];
            const op = operators[getRandomNumber(0, 2)];
            
            let answer;
            if (op === '>') answer = num1 > num2 ? 1 : 0;
            else if (op === '<') answer = num1 < num2 ? 1 : 0;
            else answer = num1 === num2 ? 1 : 0;
            
            return {
                text: `${num1} ${op} ${num2} (1 если true, 0 если false)`,
                answer: answer
            };
        },
        // Арифметика + сравнение
        () => {
            const a = getRandomNumber(1, 10);
            const b = getRandomNumber(1, 10);
            const c = getRandomNumber(1, 20);
            const result = a + b;
            const isGreater = result > c;
            
            return {
                text: `${a} + ${b} > ${c} (1 если true, 0 если false)`,
                answer: isGreater ? 1 : 0
            };
        }
    ];
    
    const questionFunc = expressions[getRandomNumber(0, expressions.length - 1)];
    return questionFunc();
}

// Генерация вопроса для продвинутого уровня (логика и двоичные числа)
function generateLogicalQuestion() {
    const types = ['logical', 'binary'];
    const type = types[getRandomNumber(0, 1)];
    
    if (type === 'logical') {
        // Логические операторы
        const operations = [
            () => {
                const a = getRandomNumber(0, 1);
                const b = getRandomNumber(0, 1);
                return {
                    text: `${a} && ${b} (логическое И)`,
                    answer: a && b
                };
            },
            () => {
                const a = getRandomNumber(0, 1);
                const b = getRandomNumber(0, 1);
                return {
                    text: `${a} || ${b} (логическое ИЛИ)`,
                    answer: a || b
                };
            },
            () => {
                const a = getRandomNumber(0, 1);
                return {
                    text: `!${a} (логическое НЕ)`,
                    answer: a === 0 ? 1 : 0
                };
            }
        ];
        
        return operations[getRandomNumber(0, operations.length - 1)]();
    } else {
        // Двоичные операции
        const a = getRandomNumber(1, 15);
        const b = getRandomNumber(1, 15);
        const operations = [
            {
                text: `${a} & ${b} (побитовое И)`,
                answer: a & b
            },
            {
                text: `${a} | ${b} (побитовое ИЛИ)`,
                answer: a | b
            },
            {
                text: `${a} ^ ${b} (побитовое XOR)`,
                answer: a ^ b
            }
        ];
        
        return operations[getRandomNumber(0, operations.length - 1)];
    }
}

// Генерация нового вопроса в зависимости от уровня
function generateQuestion() {
    let question;
    const levelType = levels[currentLevel].type;
    
    // Генерируем вопрос, пока не получим уникальный
    let attempts = 0;
    do {
        if (levelType === 'arithmetic') {
            question = generateArithmeticQuestion();
        } else if (levelType === 'comparison') {
            question = generateComparisonQuestion();
        } else {
            question = generateLogicalQuestion();
        }
        attempts++;
    } while (askedQuestions.includes(question.text) && attempts < 100);
    
    askedQuestions.push(question.text);
    return question;
}

// ===== ФУНКЦИИ УПРАВЛЕНИЯ ИГРОЙ =====

// Запуск таймера
function startTimer() {
    startTime = Date.now();
    timerInterval = setInterval(() => {
        const elapsed = Math.floor((Date.now() - startTime) / 1000);
        const minutes = Math.floor(elapsed / 60);
        const seconds = elapsed % 60;
        timerEl.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    }, 1000);
}

// Остановка таймера
function stopTimer() {
    clearInterval(timerInterval);
}

// Показать новый вопрос
function showQuestion() {
    currentQuestion = generateQuestion();
    questionEl.textContent = currentQuestion.text;
    answerInput.value = '';
    feedbackEl.textContent = '';
    feedbackEl.className = 'feedback';
    answerInput.focus();
}

// Обновление статистики на экране
function updateStats() {
    levelNameEl.textContent = levels[currentLevel].name;
    correctCountEl.textContent = correctAnswers;
    wrongCountEl.textContent = wrongAnswers;
    questionNumberEl.textContent = questionNumber;
}

// Проверка ответа
function checkAnswer() {
    const userAnswer = parseFloat(answerInput.value);
    
    if (isNaN(userAnswer)) {
        feedbackEl.textContent = 'Пожалуйста, введите число!';
        feedbackEl.className = 'feedback wrong';
        return;
    }
    
    if (userAnswer === currentQuestion.answer) {
        correctAnswers++;
        feedbackEl.textContent = 'Правильно! ✓';
        feedbackEl.className = 'feedback correct';
    } else {
        wrongAnswers++;
        feedbackEl.textContent = `Неправильно! Правильный ответ: ${currentQuestion.answer}`;
        feedbackEl.className = 'feedback wrong';
    }
    
    updateStats();
    
    // Переход к следующему вопросу или завершение уровня
    setTimeout(() => {
        if (questionNumber >= 10) {
            finishLevel();
        } else {
            questionNumber++;
            showQuestion();
        }
    }, 1500);
}

// Завершение уровня
function finishLevel() {
    stopTimer();
    
    const successRate = (correctAnswers / 10) * 100;
    
    if (successRate >= 80) {
        // Уровень пройден
        if (currentLevel < levels.length - 1) {
            // Есть следующий уровень
            showScreen(levelCompleteScreen);
            document.getElementById('level-result').textContent = 
                `Вы ответили правильно на ${correctAnswers} из 10 вопросов (${successRate}%)!`;
        } else {
            // Это был последний уровень - победа!
            showScreen(victoryScreen);
            document.getElementById('final-stats').textContent = 
                `Вы прошли все три уровня! Финальный счёт: ${correctAnswers} правильных ответов из 10 на последнем уровне.`;
        }
    } else {
        // Уровень не пройден
        showScreen(failScreen);
        document.getElementById('fail-message').textContent = 
            `Вы ответили правильно на ${correctAnswers} из 10 вопросов (${successRate}%). Для перехода нужно 80%.`;
    }
}

// Показать определённый экран
function showScreen(screen) {
    gameScreen.classList.add('hidden');
    levelCompleteScreen.classList.add('hidden');
    failScreen.classList.add('hidden');
    victoryScreen.classList.add('hidden');
    
    screen.classList.remove('hidden');
}

// Начало нового уровня
function startLevel() {
    correctAnswers = 0;
    wrongAnswers = 0;
    questionNumber = 1;
    askedQuestions = [];
    
    updateStats();
    showScreen(gameScreen);
    startTimer();
    showQuestion();
}

// Переход на следующий уровень
function nextLevel() {
    currentLevel++;
    startLevel();
}

// Перезапуск игры с первого уровня
function restartGame() {
    currentLevel = 0;
    startLevel();
}

// Выход из игры
function exitGame() {
    showScreen(gameScreen);
    stopTimer();
    questionEl.textContent = 'Игра завершена. Обновите страницу для начала новой игры.';
    submitBtn.disabled = true;
    answerInput.disabled = true;
}

// ===== ОБРАБОТЧИКИ СОБЫТИЙ =====

// Кнопка "Отправить"
submitBtn.addEventListener('click', checkAnswer);

// Нажатие Enter в поле ввода
answerInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        checkAnswer();
    }
});

// Кнопка "Следующий уровень"
document.getElementById('next-level-btn').addEventListener('click', nextLevel);

// Кнопка "Начать заново" на экране провала
document.getElementById('restart-btn').addEventListener('click', restartGame);

// Кнопка "Начать заново" на экране завершения уровня
document.getElementById('restart-from-level-btn').addEventListener('click', restartGame);

// Кнопка "Играть снова" на экране победы
document.getElementById('play-again-btn').addEventListener('click', restartGame);

// Кнопка "Выйти"
document.getElementById('exit-btn').addEventListener('click', exitGame);

// ===== ЗАПУСК ИГРЫ =====
startLevel();
