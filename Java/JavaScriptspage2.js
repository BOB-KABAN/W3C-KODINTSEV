// Показать уведомление при загрузке страницы
window.onload = function() {
    alert("Добро пожаловать на сайт подбора книг по искусственному интеллекту!");
    localStorage.setItem("welcomeMessageDisplayed", "true");
};

// Функция для фильтрации списка книг и выделения совпадающего текста
function filterBooks() {
    // Ввод пользователем значения 
    let input = document.getElementById('search').value.toLowerCase();
    
    // Получаем все элементы с классом "book-item" (каждая книга)
    let bookItems = document.querySelectorAll('.book-item');

    // Проходим по каждому элементу списка книг
    bookItems.forEach(function(book) {
        // Получаем элемент заголовка (название книги)
        let titleElement = book.querySelector('h3');
        let title = titleElement.textContent.toLowerCase();
        
        // Проверяем, содержит ли название книги введенный текст
        if (title.includes(input)) {
            // Если содержит, показываем элемент книги
            book.style.display = "block";

            // Подсвечиваем введённый текст
            let highlightedTitle = title.replace(new RegExp(input, 'gi'), match => `<mark>${match}</mark>`);
            titleElement.innerHTML = highlightedTitle;
        } else {
            // Если не содержит, скрываем элемент книги
            book.style.display = "none";
            // Убираем подсветку, если ничего не введено
            titleElement.innerHTML = titleElement.textContent;
        }
    });
}