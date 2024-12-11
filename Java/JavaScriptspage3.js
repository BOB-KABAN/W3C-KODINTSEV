// Показать уведомление при загрузке страницы
window.onload = function() {
    alert("Добро пожаловать на сайт подбора книг по искусственному интеллекту!");
    localStorage.setItem("welcomeMessageDisplayed", "true");
};

// Массив с вопросами, на которые ИИ может ответить
const вопросы = [
    "Что такое ИИ?",
    "Расскажи о машинном обучении.",
    "Что такое глубокое обучение?",
    "Как работает обработка естественного языка?",
    "Объясни компьютерное зрение."
];

// Массив с ответами на вопросы
const ответы = [
    "ИИ, или Искусственный Интеллект, — это симуляция человеческого интеллекта в машинах.",
    "Машинное обучение — это подразделение ИИ, которое позволяет системам учиться и улучшаться на основе опыта.",
    "Глубокое обучение — это ветвь машинного обучения, использующая нейронные сети с многими слоями.",
    "Обработка естественного языка позволяет машинам понимать и реагировать на человеческий язык.",
    "Компьютерное зрение позволяет машинам интерпретировать и принимать решения на основе визуальных данных."
];

// Функция для поиска ответа на вопрос пользователя
function askQuestion() {
    const пользовательскийВопрос = document.getElementById("user-question").value.toLowerCase();
    let ответ = "Извините, у меня нет ответа на этот вопрос.";

    // Поиск частичного совпадения в вопросах
    for (let i = 0; i < вопросы.length; i++) {
        if (вопросы[i].toLowerCase().includes(пользовательскийВопрос)) {
            ответ = ответы[i];
            break;
        }
    }

    document.getElementById("ai-response").innerText = ответ;
}

// Функция для показа примеров вопросов
function showExamples() {
    let block = document.getElementById('blockS');
    block.style.display = 'block';
}

// Функция для закрытия блока с примерами вопросов
function closeExamples() {
    let block = document.getElementById('blockS');
    block.style.display = 'none';
}