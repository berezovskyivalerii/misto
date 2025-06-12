export const recommendations = Array.from({ length: 20 }, (_, i) => ({
    id: `rec-${i + 1}`,
    image: './test_img.png',
    title: `Іграшка сюрприз Pop Mart Плюшевый брелок Mart Big...`,
    rating: Math.floor(Math.random() * 5) + 1,
    reviews: Math.floor(Math.random() * 100) + 1,
    oldPrice: 2000,
    price: 1000,
}))

export const offers = Array.from({ length: 20 }, (_, i) => ({
    id: `rec-${i + 1}`,
    hoverImage: './popmart_card.png',
    image: './test_img.png',
    description: 'М`яка іграшка-сюрприз Big into Energy Art The Monsters - стильний аксесуар для рюкзака, сумки або як подарунок!  Ця іграшка стане чудовим...',
    title: `Іграшка-сюрприз Pop Mart Плюшевый брелок Mart Big...`,
    rating: Math.floor(Math.random() * 5) + 1,
    reviews: Math.floor(Math.random() * 100) + 1,
    oldPrice: 999,
    price: 799,
}))

export const categories = [
    {
        label: 'Ноутбуки і комп’ютери',
        path: './laptop_icon.png',
    },  
    {
        label: 'Смартфони, ТВ і електроніка',
        path: './smartphone_icon.png',
    },
    {
        label: 'Товари для геймерів',
        path: './game-controller_icon.png',
    },
    {
        label: 'Побутова техніка',
        path: './washing-machine_icon.png',
    },
    {
        label: 'Товари для дому',
        path: './armchair_icon.png',
    },
    {
        label: 'Інструменти та автотовари',
        path: './drill_icon.png',
    },
    {
        label: 'Сантехніка та ремонт',
        path: './bath_icon.png',
    },
    {
        label: 'Дача, сад і город',
        path: './spade_icon.png',
    },
    {
        label: 'Спорт і захоплення',
        path: './sports_icon.png',
    },
    {
        label: 'Одяг, взуття та прикраси',
        path: './clothes_icon.png',
    },
    {
        label: 'Краса та здоров’я',
        path: './perfume_icon.png',
    },
    {
        label: 'Дитячі товари',
        path: './bear_icon.png',
    },
    {
        label: 'Зоотовари',
        path: './cat-footprint_icon.png',
    },
    {
        label: 'Офіс, школа, книги',
        path: './attach_icon.png',
    },
    {
        label: 'Алкогольні напої та продукти',
        path: './cocktail_icon.png',
    },
    {
        label: 'Побутова хімія',
        path: './insecticide_icon.png',
    },
    {
        label: 'Енергонезалежність',
        path: './warning-battery_icon.png',
    },
    {
        label: 'Розігрів зникажми до -45%',
        path: './discount_icon.png',
    },
]
