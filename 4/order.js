// Скрипт для обработки заказа

// Объект для хранения выбранных блюд
const selectedDishes = {
    soup: null,
    main: null,
    drink: null
};

// Функция обновления блока заказа
function updateOrderDisplay() {
    const orderSoupElement = document.getElementById('order-soup');
    const orderMainElement = document.getElementById('order-main');
    const orderDrinkElement = document.getElementById('order-drink');
    const orderNothingElement = document.getElementById('order-nothing');
    const orderCostElement = document.getElementById('order-cost');

    // Проверяем, выбрано ли хоть что-то
    const hasAnySelection = selectedDishes.soup || selectedDishes.main || selectedDishes.drink;

    if (!hasAnySelection) {
        // Ничего не выбрано
        orderNothingElement.style.display = 'block';
        orderSoupElement.style.display = 'none';
        orderMainElement.style.display = 'none';
        orderDrinkElement.style.display = 'none';
        orderCostElement.style.display = 'none';
    } else {
        // Что-то выбрано
        orderNothingElement.style.display = 'none';
        orderSoupElement.style.display = 'block';
        orderMainElement.style.display = 'block';
        orderDrinkElement.style.display = 'block';
        orderCostElement.style.display = 'block';

        // Обновляем суп
        if (selectedDishes.soup) {
            orderSoupElement.innerHTML = `
                <h4>Суп</h4>
                <p>${selectedDishes.soup.name} ${selectedDishes.soup.price}₽</p>
            `;
        } else {
            orderSoupElement.innerHTML = `
                <h4>Суп</h4>
                <p>Блюдо не выбрано</p>
            `;
        }

        // Обновляем главное блюдо
        if (selectedDishes.main) {
            orderMainElement.innerHTML = `
                <h4>Главное блюдо</h4>
                <p>${selectedDishes.main.name} ${selectedDishes.main.price}₽</p>
            `;
        } else {
            orderMainElement.innerHTML = `
                <h4>Главное блюдо</h4>
                <p>Блюдо не выбрано</p>
            `;
        }

        // Обновляем напиток
        if (selectedDishes.drink) {
            orderDrinkElement.innerHTML = `
                <h4>Напиток</h4>
                <p>${selectedDishes.drink.name} ${selectedDishes.drink.price}₽</p>
            `;
        } else {
            orderDrinkElement.innerHTML = `
                <h4>Напиток</h4>
                <p>Напиток не выбран</p>
            `;
        }

        // Считаем итоговую стоимость
        let totalCost = 0;
        if (selectedDishes.soup) totalCost += selectedDishes.soup.price;
        if (selectedDishes.main) totalCost += selectedDishes.main.price;
        if (selectedDishes.drink) totalCost += selectedDishes.drink.price;

        orderCostElement.innerHTML = `
            <h4>Стоимость заказа</h4>
            <p>${totalCost}₽</p>
        `;
    }
}

// Обработчик клика на карточку блюда
function handleDishClick(event) {
    // Находим ближайшую карточку блюда
    const dishCard = event.target.closest('.dish-card');
    if (!dishCard) return;

    // Получаем keyword из data-атрибута
    const keyword = dishCard.getAttribute('data-dish');

    // Находим блюдо в массиве
    const dish = dishes.find(d => d.keyword === keyword);
    if (!dish) return;

    // Добавляем блюдо в выбранные (заменяет предыдущее из той же категории)
    selectedDishes[dish.category] = dish;

    // Обновляем отображение
    updateOrderDisplay();
}

// Добавляем обработчики событий после загрузки страницы
document.addEventListener('DOMContentLoaded', () => {
    // Добавляем обработчик клика на все секции с блюдами
    const menuSections = document.querySelectorAll('.menu-section');
    menuSections.forEach(section => {
        section.addEventListener('click', handleDishClick);
    });

    // Инициализируем отображение заказа
    updateOrderDisplay();
});
