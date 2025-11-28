// Массив с блюдами
const dishes = [
    // ========== СУПЫ (6 блюд: 2 fish, 2 meat, 2 veg) ==========
    {
        keyword: 'gaspacho',
        name: 'Гаспачо',
        price: 195,
        category: 'soup',
        count: '350 г',
        image: 'https://cdn1.ozonusercontent.com/s3/club-storage/images/article_image_1632x1000/458/67ac93bb-bf0b-4687-8f44-1eaea9a63199.jpeg',
        kind: 'veg'
    },
    {
        keyword: 'mushroom-soup',
        name: 'Грибной суп-пюре',
        price: 185,
        category: 'soup',
        count: '330 г',
        image: 'https://img.povar.ru/mobile/6d/75/7b/6f/gribnoi_sup-piure-773618.jpg',
        kind: 'veg'
    },
    {
        keyword: 'norwegian-soup',
        name: 'Норвежский суп',
        price: 270,
        category: 'soup',
        count: '330 г',
        image: 'https://telegraf.com.ua/static/storage/thumbs/428x240/4/c4/8204b85f-078c3bee8d594c8065533ebc3238bc44.jpg?v=9288_1',
        kind: 'fish'
    },
    {
        keyword: 'ramen',
        name: 'Рамен',
        price: 375,
        category: 'soup',
        count: '425 г',
        image: 'https://recipeday.ru/wp-content/uploads/2025/06/file_1078-680x680.jpg',
        kind: 'meat'
    },
    {
        keyword: 'tom-yum',
        name: 'Том ям с креветками',
        price: 650,
        category: 'soup',
        count: '500 г',
        image: 'https://hi-food.ru/wp-content/uploads/2024/10/frame-13.png',
        kind: 'fish'
    },
    {
        keyword: 'chicken-soup',
        name: 'Куриный суп',
        price: 330,
        category: 'soup',
        count: '350 г',
        image: 'https://www.vsegdavkusno.ru/assets/images/recipes/2801/prostoy-kurinyi-sup-s-vermishelu.jpg',
        kind: 'meat'
    },

    // ========== ГЛАВНЫЕ БЛЮДА (6 блюд: 2 fish, 2 meat, 2 veg) ==========
    {
        keyword: 'fried-potatoes',
        name: 'Жареная картошка с грибами',
        price: 150,
        category: 'main',
        count: '250 г',
        image: 'https://www.koolinar.ru/all_image/recipes/154/154589/recipe_273d57ab-f72c-4cf0-bde6-0cbe37448b5e.jpg',
        kind: 'veg'
    },
    {
        keyword: 'lasagna',
        name: 'Лазанья',
        price: 385,
        category: 'main',
        count: '310 г',
        image: 'https://ferma-m2.ru/images/shop/recipe_image/crop__2_2.jpg',
        kind: 'meat'
    },
    {
        keyword: 'chicken-cutlets',
        name: 'Котлеты из курицы с картофельным пюре',
        price: 225,
        category: 'main',
        count: '280 г',
        image: 'https://menunedeli.ru/wp-content/uploads/2022/09/75D55D77-3649-4FB8-9892-B3607504E593-933x700.jpeg',
        kind: 'meat'
    },
    {
        keyword: 'fish-rice',
        name: 'Рыбная котлета с рисом и спаржей',
        price: 320,
        category: 'main',
        count: '270 г',
        image: 'https://img.povar.ru/mobile/9a/02/33/65/kotleti_iz_gorbushi_s_limonom_i_risom-798530.jpeg',
        kind: 'fish'
    },
    {
        keyword: 'pizza',
        name: 'Пицца Маргарита',
        price: 450,
        category: 'main',
        count: '470 г',
        image: 'https://lh3.googleusercontent.com/-F7-f2RyixFJ_0-MIGehlz7lp08CkWuy7Y64qDx8zcSrAyHA_uWVnJx1XOVAHg_qoFD7fW34aWScKlOz7tlHx8LeBxDoB64vaZ6LCKKMAPPnr8-QTpPpQVVK-xGPWFZomSVkVZXW',
        kind: 'veg'
    },
    {
        keyword: 'shrimp-pasta',
        name: 'Паста с креветками',
        price: 340,
        category: 'main',
        count: '280 г',
        image: 'https://s1.eda.ru/StaticContent/Photos/Upscaled/120131085214/151126164630/p_O.jpg',
        kind: 'fish'
    },

    // ========== САЛАТЫ И СТАРТЕРЫ (6 блюд: 1 fish, 1 meat, 4 veg) ==========
    {
        keyword: 'korean-salad',
        name: 'Корейский салат с овощами и яйцом',
        price: 330,
        category: 'salad',
        count: '250 г',
        image: 'https://www.russianfood.com/dycontent/images_upl/653/big_652820.jpg',
        kind: 'veg'
    },
    {
        keyword: 'caesar',
        name: 'Цезарь с цыпленком',
        price: 370,
        category: 'salad',
        count: '220 г',
        image: 'https://images.gastronom.ru/LoVJjeEYXJQ3vR2Yn8WtlivB0eZ78Rtu417zEnX1mZs/pr:recipe-cover-image/g:ce/rs:auto:0:0:0/L2Ntcy9hbGwtaW1hZ2VzL2IxMzU5MzRkLWI1OTAtNDQ4Zi05MjA3LWQ5YzEzM2M2ODZlNy5qcGc.webp',
        kind: 'meat'
    },
    {
        keyword: 'caprese',
        name: 'Капрезе с моцареллой',
        price: 350,
        category: 'salad',
        count: '235 г',
        image: 'https://img.iamcook.ru/old/upl/recipes/cat/u6009-cc14699a120e3b9fd9ac4a5c5ce79524.jpg',
        kind: 'veg'
    },
    {
        keyword: 'tuna-salad',
        name: 'Салат с тунцом',
        price: 480,
        category: 'salad',
        count: '250 г',
        image: 'https://dikoed.ru/upload/iblock/1ce/15545-ovoshchnoy-salat-s-tuntsom.jpg',
        kind: 'fish'
    },
    {
        keyword: 'fries-caesar',
        name: 'Картофель фри с соусом Цезарь',
        price: 280,
        category: 'salad',
        count: '235 г',
        image: 'https://grandkulinar.ru/uploads/posts/2023-02/1676035337_pryanyj-kartofel-fri-s-syrnym-sousom.jpg',
        kind: 'veg'
    },
    {
        keyword: 'fries-ketchup',
        name: 'Картофель фри с кетчупом',
        price: 260,
        category: 'salad',
        count: '235 г',
        image: 'https://img.freepik.com/premium-photo/homemade-baked-french-fries-with-ketchup-rosemary-black-slate-board_652240-948.jpg',
        kind: 'veg'
    },

    // ========== НАПИТКИ (6 напитков: 3 cold, 3 hot) ==========
    {
        keyword: 'orange-juice',
        name: 'Апельсиновый сок',
        price: 120,
        category: 'drink',
        count: '300 мл',
        image: 'https://s0.rbk.ru/v6_top_pics/media/img/2/24/346831927706242.webp',
        kind: 'cold'
    },
    {
        keyword: 'apple-juice',
        name: 'Яблочный сок',
        price: 90,
        category: 'drink',
        count: '300 мл',
        image: 'https://s1.eda.ru/StaticContent/Photos/1/0a/10a37be413e24b34ac6afb3866cd08a8.jpg',
        kind: 'cold'
    },
    {
        keyword: 'carrot-juice',
        name: 'Морковный сок',
        price: 110,
        category: 'drink',
        count: '300 мл',
        image: 'https://foto.vsesoki.ru/files/1/7543/16530807/original/morkov.jpg',
        kind: 'cold'
    },
    {
        keyword: 'cappuccino',
        name: 'Капучино',
        price: 180,
        category: 'drink',
        count: '300 мл',
        image: 'https://static.tildacdn.com/tild6333-3739-4834-a663-303339653030/photo.png',
        kind: 'hot'
    },
    {
        keyword: 'green-tea',
        name: 'Зеленый чай',
        price: 100,
        category: 'drink',
        count: '300 мл',
        image: 'https://aumishop.ru/image/catalog/-%D0%BD%D0%BE%D0%B2%D1%8B%D0%B5-2020/polza-zelenogo-chaya.jpg',
        kind: 'hot'
    },
    {
        keyword: 'black-tea',
        name: 'Черный чай',
        price: 90,
        category: 'drink',
        count: '300 мл',
        image: 'https://cdn.shopify.com/s/files/1/0022/1393/7252/articles/1_b8a561d5-2c75-4c83-889c-31ee95a084a8.jpg?v=1712144436&width=1060&height=596&crop=center',
        kind: 'hot'
    },

    // ========== ДЕСЕРТЫ (6 десертов: 3 small, 2 medium, 1 large) ==========
    {
        keyword: 'baklava',
        name: 'Пахлава',
        price: 220,
        category: 'dessert',
        count: '300 гр',
        image: 'https://kyxarka.ru/wp-content/uploads/2018/02/1595.jpg',
        kind: 'small'
    },
    {
        keyword: 'cheesecake',
        name: 'Чизкейк',
        price: 240,
        category: 'dessert',
        count: '125 гр',
        image: 'https://pteat.ru/wp-content/uploads/2025/03/itogovoe-2.jpg.webp',
        kind: 'small'
    },
    {
        keyword: 'chocolate-cheesecake',
        name: 'Шоколадный чизкейк',
        price: 260,
        category: 'dessert',
        count: '125 гр',
        image: 'https://menunedeli.ru/wp-content/uploads/2020/02/DSC09438-1200x799.jpg',
        kind: 'small'
    },
    {
        keyword: 'chocolate-cake',
        name: 'Шоколадный торт',
        price: 270,
        category: 'dessert',
        count: '140 гр',
        image: 'https://aif-s3.aif.ru/images/009/987/002d5e930aab5f9ba840f374a3e142aa.jpg',
        kind: 'medium'
    },
    {
        keyword: 'donuts3',
        name: 'Пончики (3 штуки)',
        price: 410,
        category: 'dessert',
        count: '350 гр',
        image: 'https://images-ru.starterapp.ru/w:1024/aHR0cHM6Ly9jZG4uc2FuaXR5LmlvL2ltYWdlcy9hdHFhNGg1My9wcm9kdWN0aW9uLzczMGJhYzQyOTZiZWQ5MTMwMjliYTNmOTJhY2E4YTE2NjhmOGJmY2MtMTEyMHgxMTIwLnBuZw==',
        kind: 'medium'
    },
    {
        keyword: 'donuts6',
        name: 'Пончики (6 штук)',
        price: 650,
        category: 'dessert',
        count: '700 гр',
        image: 'https://cheese-cake.ru/DesertImg/ponchiki-assorti-0-2-1.jpg',
        kind: 'large'
    }
];
