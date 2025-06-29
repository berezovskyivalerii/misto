import { Link } from 'react-router-dom';

export default function RegisterPage() {
    return (
        <div className="relative min-h-screen flex flex-col justify-center lg:flex-row">
            <div className="lg:hidden absolute inset-0 -z-10">
                <img
                    src='./bg-auth.png'
                    alt="bg"
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="flex items-center p-4 lg:p-10 w-full lg:max-w-[790px]">
                <div className="w-full bg-white/95 rounded-[30px] p-8 lg:p-10 space-y-8 relative z-10">
                    <div>
                        <Link to="/">
                            <img src="./forward_icon.png" alt="back" className="absolute w-5 h-4 lg:w-8 lg:h-7 lg:-top-5 -rotate-90 mb-8 cursor-pointer" />
                        </Link>
                        <h1 className="text-xl font-semibold mb-3 text-center lg:text-left">
                            Зареєструйтесь в <span className="text-[--color-purple]">Misto</span>
                        </h1>
                        <p className="text-sm text-gray-600 text-center lg:text-left">
                            Заповніть всі поля нижче, щоб створити свій профіль
                        </p>
                    </div>
                    <form className="space-y-3">
                        <label className="block">
                            <span className="text-sm">Номер телефону*</span>
                            <input
                                type="tel"
                                placeholder="+380(__) ___-__-__"
                                className="mt-1 w-full rounded border border-gray-300 px-3 py-2 text-sm outline-none focus:border-[--color-purple]"
                            />
                        </label>

                        <div className="flex gap-3 flex-col sm:flex-row">
                            <label className="flex-1">
                                <span className="text-sm">Ім’я*</span>
                                <input
                                    type="text"
                                    placeholder="Ваше ім’я"
                                    className="mt-1 w-full rounded border border-gray-300 px-3 py-2 text-sm outline-none focus:border-[--color-purple]"
                                />
                            </label>

                            <label className="flex-1">
                                <span className="text-sm">Прізвище*</span>
                                <input
                                    type="text"
                                    placeholder="Ваше прізвище"
                                    className="mt-1 w-full rounded border border-gray-300 px-3 py-2 text-sm outline-none focus:border-[--color-purple]"
                                />
                            </label>
                        </div>

                        <label className="flex items-center gap-2 text-[10px] lg:text-sm">
                            <input type="checkbox" className="h-4 w-4 accent-[--color-purple]" />
                            Так, надсилайте мені цікаві оновлення від Misto
                        </label>

                        <Link
                            to="/"
                            className="block w-full rounded-lg bg-[--color-purple] py-3 text-center text-white
             hover:bg-[#9462D2] transition-colors duration-500"
                        >
                            Зареєструйтеся
                        </Link>
                    </form>

                    {/* agree text */}
                    <p className="mt-4 text-[10px] lg:text-sm text-gray-500">
                        Реєструючись, ви погоджуєтесь з&nbsp;
                        <a href="#" className="underline">
                            угодою користувача
                        </a>{' '}
                        і&nbsp;
                        <a href="#" className="underline">
                            політикою конфіденційності
                        </a>
                        &nbsp;маркетплейсу
                    </p>

                    {/* social login */}
                    <div className="mt-6 space-y-3">
                        <p className="text-sm lg:text-lg text-gray-600 text-center">Або увійдіть за допомогою:</p>
                        <div className="flex gap-4 flex-col sm:flex-row">
                            <button className="flex-1 flex items-center justify-center gap-4 rounded border px-3 py-2 text-sm">
                                <img src="./google_icon.png" alt="google" className="h-5" /> Google
                            </button>
                            <button className="flex-1 flex items-center justify-center gap-2 rounded border px-3 py-2 text-sm">
                                <img src="./apple_icon.png" alt="apple" className="h-5" /> Apple
                            </button>
                        </div>
                    </div>

                    <p className="mt-6 text-sm lg:text-lg">
                        Вже є профіль?{' '}
                        <Link to="/login" className="text-[--color-purple]">
                            Увійдіть →
                        </Link>
                    </p>
                </div>
            </div>

            <div className="hidden lg:block relative
                 w-[calc(100vw-420px)]  
                 min-w-[700px]         
 ">                <img
                    src="./bg-auth.png"
                    alt="poster"
                    className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="max-w-[790px] absolute inset-0 flex flex-col justify-center m-auto">
                    <h2 className="text-6xl font-medium mb-12">Створи свій акаунт</h2>
                    <p className="text-2xl max-w-md ml-auto text-right">
                        Відкрий для себе світ зручних покупок та&nbsp;унікальних пропозицій
                    </p>
                </div>
            </div>
        </div >
    );
}
