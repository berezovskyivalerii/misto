// src/components/SidePanel.jsx
import { useState } from 'react';

export default function SidePanel({ isOpen, onClose }) {
    const [isHelpOpen, setHelpOpen] = useState(false);

    return (
        <aside>
            <div
                className={`
          fixed inset-y-0 left-0 w-[500px] bg-white z-50 shadow-xl
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
            >
                {/* Контейнер с прокруткой */}
                <div className="h-full flex flex-col overflow-y-auto">
                    {/* Заголовок */}
                    <div className="flex items-center justify-between p-6">
                        <img src="./misto_logo.png" alt="logo" className="h-7" />
                        <button onClick={onClose} className="p-1">
                            <img src="./close_icon.png" alt="close" />
                        </button>
                    </div>

                    <hr className="border-gray-200" />

                    {/* Каталог */}
                    <div className="p-6">
                        <button className="flex items-center bg-[--color-purple] rounded-2xl border-[3px] border-[--color-yellow] p-4 w-full justify-center gap-3">
                            <img src="./catalog-purple_icon.png" alt="catalog" className="h-8" />
                            <span className="text-2xl text-[--color-yellow]">Каталог товарів</span>
                        </button>
                    </div>

                    <hr className="border-gray-200" />

                    {/* Довідковий центр */}
                    <div className="p-6">
                        <div className="flex items-center gap-4 mb-4">
                            <img src="./q_icon.png" alt="question" className="h-10" />
                            <h3 className="text-lg">Довідковий центр</h3>
                        </div>
                        <div className="w-full border border-gray-300 rounded-2xl p-4">
                            <p className="mb-3 text-lg text-center">
                                Увійдіть в особистий кабінет, щоб отримувати бонуси, знижки і рекомендації.
                            </p>
                            <button
                                className="
                  block w-full max-w-[300px] mx-auto py-2
                  bg-[--color-purple] border-[3px] border-[--color-yellow]
                  rounded-2xl text-2xl font-semibold text-[--color-yellow]
                  transition-colors hover:bg-opacity-90
                "
                            >
                                Вхід
                            </button>
                        </div>
                    </div>

                    <hr className="border-gray-200" />

                    {/* Меню действий */}
                    <div className="p-6 space-y-2">
                        <ul className="mb-6 space-y-2">
                            <li className="flex items-center gap-3 text-[18px] cursor-pointer hover:text-[--color-purple]">
                                <img
                                    src="./shopping_icon.png"
                                    alt="shopping"
                                    className="h-[35px] w-auto"
                                />
                                <span>Ваш кошик</span>
                            </li>
                            <li className="flex items-center gap-3 text-[18px] cursor-pointer hover:text-[--color-purple]">
                                <img
                                    src="./scales_icon.png"
                                    alt="scales"
                                    className="h-[35px] w-auto"
                                />
                                <span>Списки порівнянь</span>
                            </li>
                            <li className="flex items-center gap-3 text-[18px] cursor-pointer hover:text-[--color-purple]">
                                <img
                                    src="./box_icon.png"
                                    alt="box"
                                    className="h-[35px] w-auto"
                                />
                                <span>Відстежуйте посилку</span>
                            </li>
                            <li className="flex items-center gap-3 text-[18px] cursor-pointer hover:text-[--color-purple]">
                                <img
                                    src="./tg_icon.png"
                                    alt="tg"
                                    className="h-[35px] w-auto"
                                />
                                <span className="text-[--color-purple]">Зв'язок з Misto</span>
                            </li>
                            <li className="flex items-center gap-3 text-[18px] cursor-pointer hover:text-[--color-purple]">
                                <img
                                    src="./shop_icon.png"
                                    alt="shop"
                                    className="h-[35px] w-auto"
                                />
                                <span>Найближчі магазини Misto</span>
                            </li>
                        </ul>
                    </div>

                    <hr className="border-gray-200" />

                    {/* Информация о компании */}
                    <div className="p-6">
                        <h4 className="font-semibold mb-2 text-lg">Інформація про компанію</h4>
                        <ul className="space-y-2">
                            {['Про нас', 'Умови використання', 'Контакти', 'Всі категорії'].map(item => (
                                <li
                                    key={item}
                                    className="cursor-pointer text-lg hover:text-[--color-purple]"
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <hr className="border-gray-200" />

                    {/* Секция «Допомога» */}
                    <div className="p-6">
                        <button
                            onClick={() => setHelpOpen(open => !open)}
                            className="flex  text-lg items-center justify-between w-full font-semibold"
                        >
                            Допомога
                            <img
                                src="./forward_icon.png"
                                alt={isHelpOpen ? 'up' : 'down'}
                                className={`w-5 h-5 transition-transform ${isHelpOpen ? 'rotate-180' : 'rotate-90'
                                    }`}
                            />
                        </button>
                        {isHelpOpen && (
                            <ul className="mt-4 space-y-2">
                                {[
                                    'Доставка та оплата',
                                    'Кредит',
                                    'Гарантія',
                                    'Повернення товару',
                                    'Сервісні центри',
                                ].map(item => (
                                    <li
                                        key={item}
                                        className="cursor-pointer text-lg hover:text-[--color-purple]"
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    <hr className="border-gray-200" />

                    {/* Социальные сети */}
                    <div className="p-6">
                        <h4 className="font-semibold mb-3 text-lg">Misto в соціальних мережах</h4>
                        <div className="flex gap-5">
                            {['youtube', 'tiktok', 'instagram', 'viber'].map(net => (
                                <img
                                    key={net}
                                    src={`./${net}_icon.png`}
                                    alt={net}
                                    className="h-9 w-9 cursor-pointer"
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Фон под панелью */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40"
                    onClick={onClose}
                />
            )}
        </aside>
    );
}
