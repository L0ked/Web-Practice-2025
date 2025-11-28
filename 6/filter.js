// Скрипт для фильтрации блюд

// Объект для хранения активных фильтров каждой категории
const activeFilters = {
    soup: null,
    main: null,
    salad: null,
    drink: null,
    dessert: null
};

// Функция для фильтрации и отображения блюд
function filterDishes(category, kind) {
    // Получаем контейнер для блюд данной категории
    const grid = document.querySelector(`[data-category="${category}"] .dishes-grid`);
    
    // Очищаем контейнер
    grid.innerHTML = '';
    
    // Фильтруем блюда
    let filteredDishes;
    if (kind) {
        // Если выбран фильтр - показываем только блюда с таким kind
        filteredDishes = sortedDishes.filter(dish => 
            dish.category === category && dish.kind === kind
        );
    } else {
        // Если фильтр не выбран - показываем все блюда категории
        filteredDishes = sortedDishes.filter(dish => 
            dish.category === category
        );
    }
    
    // Отображаем отфильтрованные блюда
    filteredDishes.forEach(dish => {
        const dishCard = createDishCard(dish);
        grid.appendChild(dishCard);
    });
}

// Обработчик клика на кнопку фильтра
function handleFilterClick(event) {
    const button = event.target;
    
    // Проверяем, что кликнули именно на кнопку фильтра
    if (!button.classList.contains('filter-btn')) return;
    
    // Получаем категорию и тип фильтра
    const section = button.closest('.menu-section');
    const category = section.getAttribute('data-category');
    const kind = button.getAttribute('data-kind');
    
    // Если кнопка уже активна - снимаем фильтр
    if (button.classList.contains('active')) {
        button.classList.remove('active');
        activeFilters[category] = null;
        filterDishes(category, null);
    } else {
        // Убираем активный класс у всех кнопок в этой секции
        const allButtons = section.querySelectorAll('.filter-btn');
        allButtons.forEach(btn => btn.classList.remove('active'));
        
        // Добавляем активный класс текущей кнопке
        button.classList.add('active');
        activeFilters[category] = kind;
        filterDishes(category, kind);
    }
}

// Добавляем обработчики событий после загрузки страницы
document.addEventListener('DOMContentLoaded', () => {
    // Добавляем обработчик клика на все блоки фильтров
    const filterContainers = document.querySelectorAll('.filter-buttons');
    filterContainers.forEach(container => {
        container.addEventListener('click', handleFilterClick);
    });
});
