import { useState } from 'react';
import { Link } from 'react-router-dom'

function ProductDetails({ product, quantity, onIncrement, onDecrement }) {
    const [size, setSize] = useState(product.sizes[2]);
    const [color, setColor] = useState(product.colors[0]);

    return (
        <section className="max-w-[1175px] flex flex-col lg:flex-row gap-5 p-5 rounded-3xl border-[3px] border-orange-300 lg:h-[460px]">
            {/* Image */}
            <div className="w-full max-w-[400px] mx-auto relative rounded-3xl border-[3px] border-purple-400 p-4">
                <img
                    src={product.images[0]}
                    alt={product.title}
                    className="mx-auto aspect-square w-full max-h-[300px] sm:max-h-[400px] object-contain select-none"
                />
                {product.discount && (
                    <div className="absolute right-4 top-4 flex h-20 w-20 -rotate-12 items-center justify-center rounded-full bg-rose-500 text-lg font-bold text-white">
                        -{product.discount}%
                    </div>
                )}
            </div>

            {/* Info */}
            <div className="w-full p-0 lg:p-4 flex flex-col gap-5">
                {/* Title */}
                <h2 className="text-base md:text-lg">{product.title}</h2>

                {/* Size selector */}
                <div>
                    <p className="mb-2 font-medium">
                        Розмір: {size}
                    </p>
                    <div className="flex gap-2">
                        {product.sizes.map((s) => (
                            <button
                                key={s}
                                onClick={() => setSize(s)}
                                className={`px-4 rounded border py-1 text-sm ${size === s
                                    ? 'border-purple-500 bg-purple-100 text-purple-900'
                                    : 'border-gray-300 hover:bg-gray-100'
                                    }`}
                            >
                                {s}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Color selector */}
                <div>
                    <p className="mb-2 font-medium">
                        Колір: <span className="font-semibold">{color.name}</span>
                    </p>
                    <div className="flex gap-2">
                        {product.colors.map((c) => (
                            <div
                                key={c.name}
                                onClick={() => setColor(c)}
                                className={`cursor-pointer p-1 rounded-lg ${color.name === c.name ? 'border-2 border-purple-500' : 'border'
                                    }`}
                            >
                                <img
                                    src={c.img}
                                    alt={c.name}
                                    className="h-14 w-14 object-cover rounded-md"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex items-center gap-2 sm:gap-4 ml-auto mt-auto">
                    <p className="text-xl font-medium">Кількість:</p>
                    <div className="flex h-[40px] lg:h-[50px] items-stretch border border-[--color-purple] rounded-lg overflow-hidden">
                        <button
                            onClick={onDecrement}
                            className="flex items-center justify-center w-10 text-xl text-purple-500"
                        >
                            −
                        </button>
                        <span className="flex items-center justify-center px-4 text-[#FFFDF9] bg-[--color-purple] text-lg font-medium">
                            {quantity}
                        </span>
                        <button
                            onClick={onIncrement}
                            className="flex items-center justify-center w-10 text-xl text-purple-500"
                        >
                            +
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

function CheckoutSummary({ quantity, price }) {
    const total = price * quantity;

    return (
        <section className="lg:h-[460px] max-w-[560px] w-full flex flex-col gap-5 p-6 lg:p-8 rounded-3xl border-[3px] border-orange-300">
            <h2 className="text-2xl lg:text-[40px] font-bold text-[#2D1B10]">До сплати</h2>

            <div className="flex justify-between text-sm lg:text-lg text-[#2D1B10]">
                <span>{quantity} товар{quantity > 1 ? 'и' : ''} на суму</span>
                <span className="font-medium">{total}₴</span>
            </div>

            <div className="flex justify-between text-sm lg:text-lg text-[#2D1B10]">
                <span>Вартість доставки</span>
                <span className="text-right">за тарифами<br />перевізника</span>
            </div>

            <hr className="border-t border-[#2D1B10] opacity-30" />

            <div className="flex justify-between items-center text-xl lg:text-2xl font-bold text-[#2D1B10]">
                <span>Разом</span>
                <span>{total}₴</span>
            </div>

            <hr className="border-t border-[#2D1B10] opacity-30" />

            <div className="flex justify-between items-center text-[#2D1B10]">
                <span className="text-sm lg:text-lg">Промокоди</span>
                <button className="flex items-center gap-1 text-sm lg:text-lg font-medium hover:underline">
                    <span className="text-3xl">+</span> Додати
                </button>
            </div>

            <Link to="/">
                <button className="w-full bg-[--color-purple] hover:bg-purple-600 text-white text-xl lg:text-2xl font-medium py-3 rounded-xl transition">
                    Замовити
                </button>
            </Link>
        </section>
    );
}

export default function ShoppingCart() {
    const [quantity, setQuantity] = useState(1);

    const increment = () => setQuantity((q) => q + 1);
    const decrement = () => setQuantity((q) => (q > 1 ? q - 1 : 1));


    const product = {
        title:
            'М’яч баскетбольний Nike Everyday Playground 8P Deflated Size 7 Amber/Black (N.100.4498.814.07) (88779140793)',
        images: [
            './ball.png',
        ],
        discount: 17,
        rating: 4,
        reviews: 4,
        sizes: ['№5', '№6', '№7'],
        colors: [
            { name: 'Amber', img: '/ball.png' },
            { name: 'Red', img: '/ball1.png' },
            { name: 'Green', img: '/ball2.png' },
            { name: 'Blue', img: '/ball3.png' },
        ],
        oldPrice: 1052,
        price: 877,
        text: "Цей м'яч прийшов на зміну легендарному Nike Dominate. Баскетбольний м'яч Nike Everyday Playground 8P виготовлений із переробленої гуми – це результат роботи програми Nike Move To Zero. М'яч призначений для гри на вулиці. Він має глибокі канавки, призначені для кращого зчеплення руки із поверхнею м'яча.",
        features: [
            'виготовленo на 60% з перероблених матеріалів',
            'міцний зовнішній матеріал для використання поза приміщеннями',
            'глибокі канавки для точного розміщення рук та контролю м\'яча',
            'текстурована поверхня для максимального контролю та відчуття м\'яча',
            'матеріал: 100% гума',
        ],
        specs: [
            { label: 'Розмір', value: '№7' },
            { label: 'Вид', value: 'Баскетбольні' },
            { label: 'Тип ігрового покриття', value: 'Штучне покриття' },
            { label: 'Вага, г', value: '600' },
            { label: 'Тип', value: 'М’яч' },
            { label: 'Колір', value: 'Amber' },
            { label: 'Материіл', value: 'Гумма' },
            { label: 'Габарити упаковки', value: '30 х 15 х 15 см' },
            { label: 'Країна-виробник', value: 'В’єтнам' },

        ],
        notes: [
            'Зверніть увагу, товар поставляється здутим.',
            'Характеристики та комплектація товару можуть змінюватися виробником без повідомлення.',
        ],
        comments: [
            {
                author: 'Валентин Шулягін',
                date: '13 травня 2025',
                rating: 5,
                text:
                    'Взяв найменший розмір, бо дитині 7 років, щоб було легше. На вигляд дійсно менше за звичайні. Стрибає добре, поверхня цупка, здається доволі витривалою. Накачав, вже понад місяць часу пройшло - досі все добре.Порада - змочуйте голку водою, коли вставляєте її.',
                likes: 1,
                dislikes: 0,
            },
            {
                author: 'Сергій Михайлів',
                date: '27 травня 2025',
                rating: 4,
                text:
                    'Гарний м`яч. Протримався аж два тижні, поки до нього не дістався наш песик - французький бульдог. З`явилися відразу кілька маленьких дірочок, що пропускають повітря. Шкода, що всередину не вдається залити герметик, що клеїть, для велосипедних камер.',
                likes: 0,
                dislikes: 0,
            },
            {
                author: 'Олег Дубина',
                date: '25 лютого 2025',
                rating: 4,
                text:
                    'Хороший м`яч. Ціна якість відповідна. Підійде для занять баскетболом дітям шкільного віку.',
                likes: 0,
                dislikes: 0,
            },
            {
                author: 'Радченко Стас',
                date: '1 жовтня 2024',
                rating: 3,
                text:
                    'За 4 місяці інтенсивної гри щодня по 3 години мінімум на асфальтному покриття стерся в нуль. Ще м`яч прийшов у дивному розмірі більше 5 і менше 6. Я б радив придивитися до чогось дорожчого наприклад Nike Dominate. І якщо ви новачок беріть шістку. Дуже зручний та добре лягає у руці.',
                likes: 1,
                dislikes: 0,
            },
        ],
    };

    return (
        <div className="mt-6 mb-10 lg:px-0 px-4">
            <h1 className="text-[28px] max-w-[550px] w-full  lg:text-[44px] font-extrabold text-[#1E1E1E] mb-4">
                Кошик
            </h1>
            <div className="flex flex-row items-center flex-wrap justify-between gap-5">
                <ProductDetails
                    product={product}
                    quantity={quantity}
                    onIncrement={increment}
                    onDecrement={decrement}
                />
                <CheckoutSummary
                    quantity={quantity}
                    price={product.price}
                />
            </div>
        </div>
    )
}
