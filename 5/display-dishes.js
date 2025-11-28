// Скрипт для отображения блюд на странице

// Сортируем блюда по алфавиту
const sortedDishes = dishes.sort((a, b) => a.name.localeCompare(b.name));

// Функция для создания карточки блюда
function createDishCard(dish) {
    const dishCard = document.createElement('div');
    dishCard.classList.add('dish-card');
    dishCard.setAttribute('data-dish', dish.keyword);

    dishCard.innerHTML = `
        <img src="${dish.image}" alt="${dish.name}">
        <p class="dish-price">${dish.price}₽</p>
        <p class="dish-name">${dish.name}</p>
        <p class="dish-weight">${dish.count}</p>
        <button>Добавить</button>
    `;

    return dishCard;
}

// Функция для отображения блюд
function displayDishes() {
    // Список всех категорий
    const categories = ['soup', 'main', 'salad', 'drink', 'dessert'];
    
    // Для каждой категории находим контейнер и добавляем блюда
    categories.forEach(category => {
        const grid = document.querySelector(`[data-category="${category}"] .dishes-grid`);
        
        // Если контейнер найден
        if (grid) {
            // Фильтруем блюда этой категории и добавляем
            sortedDishes
                .filter(dish => dish.category === category)
                .forEach(dish => {
                    const dishCard = createDishCard(dish);
                    grid.appendChild(dishCard);
                });
        }
    });
}

// Вызываем функцию после загрузки страницы
document.addEventListener('DOMContentLoaded', displayDishes);
