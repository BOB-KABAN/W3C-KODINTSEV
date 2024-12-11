// Функция для сортировки таблицы по годам
function sortTableByYear() {
    const table = document.querySelector("table tbody");
    const rows = Array.from(table.rows);
    const isAscending = table.getAttribute("data-sort-asc") === "true";
    rows.sort((rowA, rowB) => {
        const yearA = parseInt(rowA.cells[0].innerText);
        const yearB = parseInt(rowB.cells[0].innerText);
        return isAscending ? yearA - yearB : yearB - yearA;
    });

    // Меняем направления сортировки
    table.setAttribute("data-sort-asc", !isAscending);
    table.append(...rows);
}

// Функция для добавления блока с информацией о литературе
function addliteratura() {
    const newInfoBlock = document.createElement("div");
    newInfoBlock.className = "block-S7";
    newInfoBlock.innerHTML = `
        <h2>Рекомендуемая литература</h2>
        <p>1 - «Homo Roboticus? Люди и машины в поисках взаимопонимания», Джон Маркофф</p>
        <p>2 - «Искусственный интеллект. Современный подход», Стюарт Рассел, Питер Норвиг</p>
        <p>3 - «Как создать разум: секрет человеческого мышления раскрыт», Рэй Курцвейл</p> 
        <p>4 - «Глубокое обучение в картинках. Визуальный гид по искусственному интеллекту», Джон Крон, Грант Бейлевельд, Аглаэ Бассенс</p>
        <p>5 - «Убийственные большие данные. Как математика превратилась в оружие массового поражения», Кэти О Нил</p>
        <button class="remove-button">X</button>  
    `;
    document.body.insertBefore(newInfoBlock, document.querySelector(".footer"));

// Добавляем обработчик для кнопки удаления
    const removeButton = newInfoBlock.querySelector(".remove-button");
    removeButton.addEventListener("click", function() {
        newInfoBlock.remove();  
    });
}

// Функция для изменения шрифта текста на странице - Times New Roman
function changeFont1() {
    const textElements = document.querySelectorAll('h1, h2, h3, p, li, span, td, th');
    const newFontFamily = 'Times New Roman';  

    textElements.forEach(function(element) {
        element.style.fontFamily = newFontFamily;
    });
}

// Функция для изменения шрифта текста на странице -  Bender
function changeFont2() {
    const textElements = document.querySelectorAll('h1, h2, h3, p, li, span, td, th');
    const newFontFamily = 'bender';  

    textElements.forEach(function(element) {
        element.style.fontFamily = newFontFamily;
    });
}

// Функции для изменения цвета фона
function changeBackgroundColor1() {
    document.body.style.background = 'rgb(125, 255, 255)'; //Голубой
}

function changeBackgroundColor2() {
    document.body.style.background = 'rgb(255, 125, 125)'; //Красный 
}

function changeBackgroundColor3() {
    document.body.style.background = 'rgb(244, 255, 125)'; //Жёлтый
}

// Функция для изменения изображения
function changeImage() {
    const image = document.getElementById("mainImage"); 
    const firstImage = "Image/maxresdefault.jpg"; 
    const secondImage = "Image/AI.jpg"; 
    image.src = image.src.includes(firstImage) ? secondImage : firstImage;
}

// BOM - Функция для отображения информации о браузере и платформе
function showBrowserInfo() {
    const browserInfo = `Вы используете: ${navigator.userAgent}, платформа: ${navigator.platform}`;
    alert(browserInfo);
}

// BOM - Функция для отображения вашего разрешение экрана
function showScreenResolution() {
    const resolution = `Ваше разрешение экрана: ${screen.width}x${screen.height}`;
    alert(resolution);
}