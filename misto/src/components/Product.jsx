import { useState } from 'react';
import { Link } from 'react-router-dom'
import { useMemo } from 'react';
import Comment from './Comment';
import CardSmall from './CardSmall';

function ProductPreview({ stars, product }) {
    const [size, setSize] = useState(product.sizes[2]);
    const [color, setColor] = useState(product.colors[0]);

    return (
        <section className="flex flex-col lg:flex-row gap-5 lg:gap-8 mt-0 lg:mt-8 px-4 lg:px-0">
            {/* ======== LEFT: IMAGE ======== */}
            <div className="w-full lg:max-w-[750px] relative rounded-3xl border-[3px] border-purple-400 p-6">
                <img
                    src={product.images[0]}
                    alt={product.title}
                    className="mx-auto aspect-square max-h-[650px] w-auto object-contain select-none"
                />

                {/* discount badge */}
                {product.discount && (
                    <div className="absolute right-6 top-6 flex h-36 w-36 -rotate-12 items-center justify-center rounded-full bg-rose-500 text-4xl font-bold text-white">
                        -{product.discount}%
                    </div>
                )}
            </div>

            {/* ======== RIGHT: DETAILS ======== */}
            <div className="w-full flex flex-col gap-5 lg:max-w-[980px]">
                {/* Title */}
                <div className="flex flex-col rounded-3xl border-[3px] border-orange-400 gap-4 lg:gap-10 p-6 lg:p-6">
                    <h1 className="text-lg font-semibold leading-snug lg:text-xl">{product.title}</h1>

                    {/* Rating + reviews */}
                    <div className="flex items-center gap-2">
                        {stars}
                        <div className="flex items-center ml-5">
                            <img src="./chat_icon.png" alt="chat" className="h-7 w-7" />
                            <span className="text-[14px] sm:text-sm text-gray-500 ml-1 sm:ml-2">
                                {product.reviews} відгук
                            </span>
                        </div>                    </div>

                    {/* Size selector */}
                    <div>
                        <p className="mb-2 font-medium">
                            Розмір: <span className="font-semibold">{size}</span>
                        </p>
                        <div className="flex gap-2">
                            {product.sizes.map((s) => (
                                <button
                                    key={s}
                                    onClick={() => setSize(s)}
                                    className={`px-6 rounded border py-1 text-sm ${size === s
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
                        <div className="flex gap-3">
                            {product.colors.map((c) => (
                                <div
                                    key={c.name}
                                    onClick={() => setColor(c)}
                                    className={`relative cursor-pointer rounded-lg p-1 ${color.name === c.name ? 'border-2 border-purple-500' : 'border'
                                        }`}
                                >
                                    <img
                                        src={c.img}
                                        alt={c.name}
                                        className="h-16 w-16 rounded-md object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ====== PRICE / ACTIONS ====== */}
                <div className="flex flex-row justify-between rounded-3xl border-[3px] border-orange-300 p-6 lg:p-6">
                    {/* Price */}
                    <div>
                        <p className="mt-1 text-sm text-emerald-600">Є в наявності</p>
                        <p className="text-sm text-gray-600 line-through">
                            {product.oldPrice}₴
                        </p>
                        <p className="text-2xl font-bold text-rose-600">{product.price}₴</p>
                    </div>

                    {/* Buttons */}
                    <div className="flex lg:w-full max-w-[530px] gap-4 justify-between sm:flex-row">
                        <button className="flex flex-1 px-4 max-w-[250px] items-center justify-center gap-2 rounded-xl border-2 border-purple-500 max-h-[70px]  text-purple-600 transition hover:bg-purple-50">
                            <img src="./like_icon.png" alt="like" className="lg:h-7 lg:w-7 flex-shrink-0" />
                            <span className="hidden lg:block">Бажане</span>
                        </button>

                        <Link to='/shopping-cart' className="flex flex-1 px-4 max-w-[250px] items-center justify-center gap-2 rounded-xl bg-purple-500 max-h-[70px] text-white transition hover:bg-purple-600">
                            <img src="./shopping-w.png" alt="cart" className="lg:h-7 lg:w-7 flex-shrink-0" />
                            <span className="hidden lg:block">Купити</span>
                        </Link>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row lg:gap-32 lg:justify-between lg:items-center rounded-3xl border-[3px] border-orange-300 px-6 py-5 ">
                    <p className="mb-4 text-lg font-medium lg:mb-0">Доставка:</p>

                    <div className="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        <button className="flex items-center gap-3 border-2 border-[#5F5F5F] rounded-[10px] justify-center">
                            <img src="transit.png" alt="Delivery" className="h-10 object-contain" />
                            <p>Кур'єр</p>
                        </button>

                        <button className="delivery-card">
                            <img src="novaposhta.png" alt="Нова Пошта" className="h-8 object-contain" />
                        </button>

                        <button className="delivery-card">
                            <img src="ukrposhta.png" alt="Укрпошта" className="h-8 object-contain" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

function ProductPath({ path }) {
    return (
        <div className="hidden lg:flex flex-row items-center">
            <Link to="/">
                <img src="./home_icon.png" alt="home" className="w-auto h-9" />
            </Link>
            {
                Array.from({ length: path.length }).map((_, i) => (
                    <p className="text-lg"> <span className="mx-2 text-xl">/</span>{path[i]}</p>
                ))
            }
        </div>
    )
}

function ProductNav({ reviews }) {
    return (
        <div className="hidden lg:flex flex-row gap-10 bg-[--color-yellow] py-[13px] px-8 rounded-2xl">
            <p className="tracking-wide cursor-pointer">Усе про товар</p>
            <p className="tracking-wide cursor-pointer">Характеристики</p>
            <p className="tracking-wide cursor-pointer">Відгуки ({reviews})</p>
            <p className="tracking-wide cursor-pointer">Може зацікавити</p>
        </div>
    )
}

function ProductDescription({
    title = 'Опис',
    text,
    features = [],
}) {
    return (
        <section className="px-4 lg:px-0">
            <div className="
                w-full
                rounded-2xl border-[3px] border-[--color-yellow]
                px-5 lg:px-12 py-8 box-border
            ">
                <div className="flex flex-col lg:flex-row gap-8">
                    <h2 className="text-[28px] lg:text-[44px] max-w-[550px] w-full font-extrabold text-[#1E1E1E]">{title}</h2>
                    <div className="space-y-4 max-w-[900px] text-sm lg:text-base md:text-base leading-relaxed">
                        {text && <p>{text}</p>}

                        {features.length > 0 && (
                            <>
                                <h3 className="text-base font-semibold">Характеристики:</h3>
                                <ul className="list-disc list-inside space-y-1">
                                    {features.map((f, i) => (
                                        <li key={i}>{f}</li>
                                    ))}
                                </ul>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

function ProductSpecs({
    title = 'Характеристики',
    specs = [],
    notes = [],
    previewRows = 5
}) {
    const [open, setOpen] = useState(false);
    const visible = open ? specs : specs.slice(0, previewRows);

    return (
        <section className="px-4 lg:px-0">
            <div className="
                w-full
                rounded-2xl border-[3px] border-[--color-yellow]
                px-5 lg:px-12 py-8 box-border space-y-3 lg:flex lg:flex-row gap-8
            ">
                <h2 className="text-[28px] lg:text-[44px] max-w-[550px] w-full font-extrabold text-[#1E1E1E]">
                    {title}
                </h2>

                <div className="space-y-2 text-[14px] lg:text-lg md:text-base">
                    {visible.map(({ label, value }, i) => (
                        <div key={i} className="flex">
                            <span className="whitespace-nowrap">{label}</span>

                            <span className="flex-1 border-b border-dotted border-transparent lg:border-gray-400  mx-2" />

                            <span className="whitespace-nowrap">{value}</span>
                        </div>
                    ))}

                    {/* кнопка "Читати повністю" */}
                    {specs.length > previewRows && !open && (
                        <button
                            onClick={() => setOpen(true)}
                            className="text-[--color-purple] text-base mt-2 inline-flex items-center gap-1"
                        >
                            Читати повністю <span className="translate-y-[-1px]">↓</span>
                        </button>
                    )}

                    {/* дополнительные заметки */}
                    {notes.length > 0 && (
                        <div className="pt-3 space-y-1 text-base text-gray-600">
                            {notes.map((n, i) => (
                                <p key={i}>* {n}</p>
                            ))}
                        </div>
                    )}
                </div>
            </div>

        </section>
    );
}

function ProductReviews({ reviews = [], visibleCount = 2 }) {
    const [showAll, setShowAll] = useState(false);

    const { total, average, buckets } = useMemo(() => {
        const b = [0, 0, 0, 0, 0];
        reviews.forEach(r => { b[r.rating - 1] += 1; });
        const total = reviews.length;
        const avg =
            total === 0 ? 0 : reviews.reduce((s, r) => s + r.rating, 0) / total;
        return { total, average: avg.toFixed(1), buckets: b };
    }, [reviews]);

    const visibleReviews = showAll ? reviews : reviews.slice(0, visibleCount);
    const maxBucket = Math.max(...buckets, 1);

    return (
        <section className="px-4 lg:px-0">
            <div className="
                w-full
                rounded-2xl border-[3px] border-[--color-yellow]
                px-5 lg:px-12 py-8 box-border space-y-3 lg:flex lg:flex-row gap-8
            ">
                <div className="flex flex-col max-w-[550px] w-full mb-6 lg:mb-0">
                    <h2 className="text-[28px] lg:text-[44px] font-extrabold text-[#1E1E1E] mb-4">
                        Відгуки
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-8">
                        <div className="space-y-4">
                            <div className="flex items-center gap-2">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <img
                                        key={i}
                                        alt=""
                                        src={i < Math.round(average) ? './yellow-star_icon.png' : './gray-star_icon.png'}
                                        className="h-6 w-6 lg:h-7 lg:w-7"
                                    />
                                ))}
                            </div>
                            <p className="text-sm lg:text-lg">
                                Рейтинг оцінок: <br />
                                <span className="text-[10px] lg:text-xs"> на основі {total} відгук{total === 1 ? '' : total < 5 ? 'и' : 'ів'}</span>
                            </p>

                            <div className="space-y-1">
                                {[5, 4, 3, 2, 1].map((stars) => {
                                    const count = buckets[stars - 1];
                                    const width = (count / maxBucket) * 100;
                                    return (
                                        <div key={stars} className="flex items-center gap-2 text-sm pr-10">
                                            <span className="w-4">{stars}</span>
                                            <img src="./yellow-star_icon.png" alt="star" className="h-4 w-4" />
                                            <div className="flex-1 h-[6px] bg-gray-300">
                                                <div
                                                    style={{ width: `${width}%` }}
                                                    className="h-full bg-[--color-yellow]"
                                                />
                                            </div>
                                            <span className="w-4 text-right">{count}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="space-y-6 max-w-[900px] w-full">
                    {visibleReviews.map((r, i) => (
                        <Comment key={i} {...r} />
                    ))}

                    {!showAll && reviews.length > visibleCount && (
                        <button
                            onClick={() => setShowAll(true)}
                            className="text-[--color-purple] text-base inline-flex items-center gap-1"
                        >
                            Читати всі <span className="text-2xl">↓</span>
                        </button>
                    )}
                </div>
            </div>
        </section>
    );
}

function MayInterestSection({
    title = 'Може зацікавити',
    items = [],
}) {
    return (
        <section className="px-4 lg:px-0">
            <div className="
                w-full
                rounded-2xl border-[3px] border-[--color-yellow]
                px-5 lg:px-12 py-8 box-border space-y-3
            ">
                <div className="flex flex-col lg:flex-row  w-full gap-8">
                    <h2 className="text-[28px] max-w-[550px] w-full  lg:text-[44px] font-extrabold text-[#1E1E1E] mb-4">
                        {title}
                    </h2>

                    <div
                        className="
                    flex gap-6
                    overflow-x-auto scroll-smooth hide-scrollbar
                    overflow-y-hidden
                "
                    >
                        {items.map((p) => (
                            <div key={p.id} className="shrink-0">
                                <CardSmall {...p} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </section>
    );
}

export default function Product() {
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

    const stars = (
        <>
            {Array.from({ length: product.rating }).map((_, i) => (
                <img
                    key={`y-${i}`}
                    src="./yellow-star_icon.png"
                    alt="star"
                    className="h-7 w-7 sm:h-6 sm:w-6"
                />
            ))}
            {Array.from({ length: 5 - product.rating }).map((_, i) => (
                <img
                    key={`g-${i}`}
                    src="./gray-star_icon.png"
                    alt="nostar"
                    className="h-7 w-7 sm:h-6 sm:w-6"
                />
            ))}
        </>
    );

    return (
        <div>
            <div className="flex justify-between items-center mt-6">
                <ProductPath path={['Спорт і захоплення', 'Ігрові види спорту', 'М’ячі для командних ігор']} />
                <ProductNav reviews={product.reviews} />
            </div>
            <div className="flex flex-col gap-5 mb-8">
                <ProductPreview stars={stars} product={product} />
                <ProductDescription text={product.text} features={product.features} />
                <ProductSpecs specs={product.specs} notes={product.notes} />
                <ProductReviews reviews={product.comments} />
                <MayInterestSection
                    items={[
                        { id: 1, image: './wilson.png', title: 'М`яч баскетбольний Wilson NBA ALL TEAM...', price: '1438', oldPrice: '799' },
                        { id: 2, image: './nike.png', title: 'М`яч баскетбольний Nike Everyday Play...', price: '1272', oldPrice: '1092' },
                        { id: 3, image: './jordan.png', title: 'М`яч баскетбольний Nike Jordan Playground', price: '1980', oldPrice: '1344  ' },
                        { id: 4, image: './falcon.png', title: 'М`яч баскетбольний Falcon Classic Orange', price: '689', oldPrice: '449' },
                        { id: 5, image: './ball.png', title: 'М`яч баскетбольний Nike Everyday Playground...', price: '1848', oldPrice: '1478' },
                        { id: 6, image: './nike.png', title: 'М`яч баскетбольний Nike Everyday Play...', price: '1272', oldPrice: '1092' },
                        { id: 7, image: './jordan.png', title: 'М`яч баскетбольний Nike Jordan Playground', price: '1980', oldPrice: '1344  ' },
                    ]}
                />
            </div>
        </div>
    )
}
