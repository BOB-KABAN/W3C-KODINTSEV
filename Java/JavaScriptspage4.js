// Функция для генерации случайных данных
function generateRandomData(size, min, max) {
    const data = [];
    for (let i = 0; i < size; i++) {
        data.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return data;
}

// Генерация случайных данных о температуре и осадках
const temperatures = generateRandomData(30, -10, 35); // Температуры от -10 до 35°C
const precipitation = generateRandomData(30, 0, 20); // Осадки от 0 до 20 мм

// Функция для нахождения максимальной и минимальной температуры
function showTempStats() {
    const maxTemperature = Math.max(...temperatures);
    const minTemperature = Math.min(...temperatures);
    console.log(`Максимальная температура: ${maxTemperature}°C`);
    console.log(`Минимальная температура: ${minTemperature}°C`);
}

// Функция для расчета средней температуры и подсчета количества дней выше средней
function showAvgAndAboveAvg() {
    const total = temperatures.reduce((sum, temp) => sum + temp, 0);
    const average = total / temperatures.length;    
    const aboveAverageCount = temperatures.filter(temp => temp > average).length;

    console.log(`Средняя температура: ${average.toFixed(2)}°C`);
    console.log(`Количество дней с температурой выше средней: ${aboveAverageCount}`);
}

// Функция для анализа колебаний температуры (сравнение разницы между соседними значениями)
function showTemperatureFluctuation() {
    let fluctuationCount = 0;
    for (let i = 1; i < temperatures.length; i++) {
        const diff = Math.abs(temperatures[i] - temperatures[i - 1]);
        if (diff > 5) {
            fluctuationCount++;
            console.log(`Колебание: Температура изменилась с ${temperatures[i - 1]}°C до ${temperatures[i]}°C, разница: ${diff}°C`);
        }
    }
    if (fluctuationCount === 0) {
        console.log("Значительных колебаний температуры не зафиксировано.");
    }
}

// Функция для анализа погодных условий
function analyzeWeatherConditions() {
    const averageTemperature = calculateAverage(temperatures);
    const totalPrecipitation = precipitation.reduce((sum, rain) => sum + rain, 0);
    const precipitationDays = precipitation.filter(rain => rain > 0).length;

    let weatherCommentary = averageTemperature > 10 ? "Тепло температура выше 10" : "Холодно температура ниже 10";

    console.log(`Анализ погодных условий:
    Средняя температура: ${averageTemperature.toFixed(2)}°C
    Общие осадки: ${totalPrecipitation} мм
    Дней с осадками: ${precipitationDays}
    ${weatherCommentary}`);
}

// Функция для анализа температуры и проверки "холодно/тепло"
function showColdOrWarm() {
    const tempAnalysis = []; // Массив для хранения результатов анализа

    for (let i = 0; i < temperatures.length; i++) {
        if (temperatures[i] > 10) {
            tempAnalysis.push(`День ${i + 1}: Температура ${temperatures[i]}°C - Тепло (больше 10°C)`);
        } else {
            tempAnalysis.push(`День ${i + 1}: Температура ${temperatures[i]}°C - Холодно (меньше или равно 10°C)`);
        }
    }
    console.log(tempAnalysis); 

}

// Функция для расчета средней температуры
function calculateAverage(arr) {
    const sum = arr.reduce((acc, curr) => acc + curr, 0);
    return sum / arr.length;
}

// Объединенная функция для всех анализов
function analyzeTemperature() {
    console.log("Температуры:", temperatures);
    console.log("Осадки:", precipitation);

    showTempStats();
    showAvgAndAboveAvg();
    showTemperatureFluctuation();
    showColdOrWarm(); // Вызов новой функции
    analyzeWeatherConditions();
}

// Привязка функции к кнопке
document.getElementById('analyzeBtn').addEventListener('click', analyzeTemperature);
