import Header from '../components/Header';
import { Link } from 'react-router-dom';

export function PageNotFound() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1 items-center justify-center">
        <div className="flex flex-col items-center gap-5 lg:gap-8">
          <img
            src="./cat.png"
            alt="cat"
            className="max-h-[224px] max-w-[342px] lg:max-h-[386px] lg:max-w-[588px]"
          />
          <h3 className="text-[22px] text-center lg:text-[30px] font-semibold">
            Щось зламалося (може, лапами цього кота)
          </h3>
          <p className="text-lg lg:text-2xl">Але ми вже працюємо над цим!</p>
          <Link
            to="/"
            className="text-center text-[#FFFDF9] rounded-2xl text-lg lg:text-[24px] max-w-[342px] lg:max-w-[681px] w-full py-5 bg-[--color-purple]"
          >
            Повернутися на головну
          </Link>
        </div>
      </main>
    </div>
  );
}
