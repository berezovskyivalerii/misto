export default function Footer() {
    return (
        <footer className="h-[371px] border-t border-violet-200 bg-gray-50 text-sm text-gray-800">
            <div className="
                max-w-[110rem] mx-auto px-6 py-10
                grid gap-10
                md:grid-cols-2
                lg:[grid-template-columns:repeat(4,1fr)_200px]
            ">

                {/* Social media */}
                <div>
                    <h5 className="font-semibold text-lg">
                        <span className="text-[--color-purple]">Misto</span> в соціальних мережах
                    </h5>

                    <div className="mt-4 flex gap-5">
                        {['youtube_icon', 'tiktok_icon', 'instagram_icon', 'viber_icon'].map(icon => (
                            <img
                                key={icon}
                                src={`./${icon}.png`}
                                alt={icon.replace('_icon', '')}
                                className="h-10 w-10 cursor-pointer"
                            />
                        ))}
                    </div>
                </div>

                {/* Company info */}
                <div>
                    <h5 className="mb-4 font-semibold text-lg">Інформація про компанію</h5>
                    <ul className="space-y-2 text-lg">
                        {['Про нас', 'Умови використання', 'Контакти', 'Всі категорії'].map(t => (
                            <li key={t} className="hover:text-[--color-purple] cursor-pointer">{t}</li>
                        ))}
                    </ul>
                </div>

                {/* Help */}
                <div>
                    <h5 className="mb-4 font-semibold text-lg">Допомога</h5>
                    <ul className="space-y-2 text-lg">
                        {['Доставка та оплата', 'Кредит', 'Гарантія', 'Повернення товару', 'Сервісні центри']
                            .map(t => (
                                <li key={t} className="hover:text-[--color-purple] cursor-pointer">{t}</li>
                            ))}
                    </ul>
                </div>

                {/* Apps */}
                <div>
                    <h5 className="mb-4 font-semibold text-lg">
                        Скануйте QR-код та встановлюйте застосунок
                    </h5>

                    <div className="flex items-start gap-4">
                        <img src="./qrcode.png" alt="qrcode" className="h-24 w-24" />

                        <div className="flex flex-col gap-3">
                            <img src="./appstore_download.png" alt="App Store" className="h-10" />
                            <img src="./googleplay_download.png" alt="Google Play" className="h-10" />
                        </div>
                    </div>
                </div>

                {/* Come back */}
                <div className="hidden sm:flex flex-col justify-between items-center h-full">
                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="
                            h-14 w-14 flex items-center justify-center
                            rounded-[10px] border-[3px] border-gray-400 bg-white
                            "
                    >
                        <img src="./forward_icon.png" alt="↑" className="h-8 w-9" />
                    </button>

                    <p className="text-gray-500 text-lg">&copy; Misto 2025</p>
                </div>
            </div>

        </footer>
    );
}
