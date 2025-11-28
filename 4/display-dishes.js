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
    // Находим контейнеры для каждой категории
    const soupGrid = document.querySelector('[data-category="soup"] .dishes-grid');
    const mainGrid = document.querySelector('[data-category="main"] .dishes-grid');
    const drinkGrid = document.querySelector('[data-category="drink"] .dishes-grid');

    // Перебираем отсортированные блюда
    sortedDishes.forEach(dish => {
        const dishCard = createDishCard(dish);

        // Добавляем в нужную секцию
        if (dish.category === 'soup') {
            soupGrid.appendChild(dishCard);
        } else if (dish.category === 'main') {
            mainGrid.appendChild(dishCard);
        } else if (dish.category === 'drink') {
            drinkGrid.appendChild(dishCard);
        }
    });
}

// Вызываем функцию после загрузки страницы
document.addEventListener('DOMContentLoaded', displayDishes);
