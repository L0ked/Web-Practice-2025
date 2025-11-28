// Скрипт для валидации заказа

// Валидные комбинации блюд
const validCombos = [
    ['drink', 'main', 'salad', 'soup'],  // Комбо 1
    ['drink', 'main', 'soup'],            // Комбо 2
    ['drink', 'salad', 'soup'],           // Комбо 3
    ['drink', 'main', 'salad'],           // Комбо 4
    ['drink' ,'main']                     // Комбо 5
];

// Функция для проверки валидности заказа
function validateOrder() {
    // Получаем выбранные категории (кроме десерта)
    const selectedCategories = [];
    
    if (selectedDishes.soup) selectedCategories.push('soup');
    if (selectedDishes.main) selectedCategories.push('main');
    if (selectedDishes.salad) selectedCategories.push('salad');
    if (selectedDishes.drink) selectedCategories.push('drink');
    
    // Сортируем для корректного сравнения
    selectedCategories.sort();
    
    // Проверяем, соответствует ли выбор одному из валидных комбо
    const isValid = validCombos.some(combo => {
        if (combo.length !== selectedCategories.length) return false;
        return combo.every((cat, index) => cat === selectedCategories[index]);
    });
    
    return { isValid, selectedCategories };
}

// Функция для определения какое уведомление показать
function getNotificationMessage(selectedCategories) {
    const hasSoup = selectedCategories.includes('soup');
    const hasMain = selectedCategories.includes('main');
    const hasSalad = selectedCategories.includes('salad');
    const hasDrink = selectedCategories.includes('drink');
    
    // Ничего не выбрано
    if (selectedCategories.length === 0) {
        return 'Ничего не выбрано. Выберите блюда для заказа';
    }
    
    // Выбрано всё кроме напитка
    if ((hasSoup || hasMain || hasSalad) && !hasDrink) {
        return 'Выберите напиток';
    }
    
    // Выбран только суп (без главного и салата)
    if (hasSoup && !hasMain && !hasSalad) {
        return 'Выберите главное блюдо/салат/стартер';
    }
    
    // Выбран только салат (без супа и главного)
    if (hasSalad && !hasSoup && !hasMain) {
        return 'Выберите суп или главное блюдо';
    }
    
    // Выбран только напиток или десерт
    if ((hasDrink && !hasSoup && !hasMain && !hasSalad) || 
        (selectedDishes.dessert && selectedCategories.length === 0)) {
        return 'Выберите главное блюдо';
    }
    
    // Суп выбран, но нет главного/салата
    if (hasSoup && hasDrink && !hasMain && !hasSalad) {
        return 'Выберите главное блюдо/салат/стартер';
    }
    
    // По умолчанию
    return 'Выберите блюда для заказа';
}

// Обработчик отправки формы
function handleFormSubmit(event) {
    // Предотвращаем отправку формы
    event.preventDefault();
    
    console.log('Попытка отправить форму');
    console.log('Выбранные блюда:', selectedDishes);
    
    // Валидируем заказ
    const { isValid, selectedCategories } = validateOrder();
    
    console.log('Выбранные категории:', selectedCategories);
    console.log('Валидный заказ?', isValid);
    
    if (!isValid) {
        // Определяем текст уведомления
        const message = getNotificationMessage(selectedCategories);
        console.log('Показываем уведомление:', message);
        
        // Показываем уведомление
        showNotification(message);
    } else {
        // Если валидно - отправляем форму
        console.log('Заказ валидный, отправляем форму');
        event.target.submit();
    }
}

// Добавляем обработчик после загрузки страницы
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.order-form');
    if (form) {
        form.addEventListener('submit', handleFormSubmit);
        console.log('Обработчик формы добавлен');
    }
});
