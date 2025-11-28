// Скрипт для показа уведомлений

// Функция для создания и показа уведомления
function showNotification(message) {
    // Проверяем, нет ли уже уведомления
    if (document.querySelector('.notification-overlay')) {
        return; // Если есть - не создаём новое
    }
    
    // Создаём затемнённый фон (overlay)
    const overlay = document.createElement('div');
    overlay.className = 'notification-overlay';
    
    // Создаём контейнер уведомления
    const notification = document.createElement('div');
    notification.className = 'notification';
    
    // Создаём текст уведомления
    const messageText = document.createElement('p');
    messageText.className = 'notification-message';
    messageText.textContent = message;
    
    // Создаём кнопку "Окей"
    const button = document.createElement('button');
    button.className = 'notification-button';
    button.textContent = 'Окей 👌';
    
    // Обработчик клика на кнопку
    button.addEventListener('click', () => {
        closeNotification();
    });
    
    // Собираем уведомление
    notification.appendChild(messageText);
    notification.appendChild(button);
    overlay.appendChild(notification);
    
    // Добавляем на страницу
    document.body.appendChild(overlay);
    
    // Добавляем класс для анимации появления
    setTimeout(() => {
        overlay.classList.add('show');
    }, 10);
}

// Функция для закрытия уведомления
function closeNotification() {
    const overlay = document.querySelector('.notification-overlay');
    if (overlay) {
        // Убираем класс show для анимации исчезновения
        overlay.classList.remove('show');
        
        // Удаляем элемент после анимации
        setTimeout(() => {
            overlay.remove();
        }, 300);
    }
}
