import { useState } from 'react';
import { FilterIcon } from 'lucide-react';
import { Link } from 'react-router-dom'
import FilterPanel from './FilterPanel';
import SortSelect from './SortSelect';
import Card from './Card';
import { offers } from '../db/data';
import { BALL_FILTERS } from '../db/filters';

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

export default function Category({ filters = BALL_FILTERS }) {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <section className="mx-auto px-4 lg:px-0 lg:mt-7 mb-10">
            <ProductPath path={['Спорт і захоплення', 'Ігрові види спорту', 'М’ячі для командних ігор']} />

            <section className="md:border-b-2 mt-5 py-3 md:flex md:items-end md:justify-between">
                <div>
                    <h1 className="text-3xl font-extrabold">Мʼячі</h1>
                    <p className="mt-4 lg:mt-10 text-sm">Знайдено {offers.length} товарів</p>
                </div>

                <div className="hidden md:block">
                    <SortSelect />
                </div>
            </section>

            {/* ---------- Панель керування (mobile) ---------- */}
            <div className="mb-4 grid grid-cols-2 gap-2 md:hidden">
                <button
                    onClick={() => setMobileOpen(true)}
                    className="flex w-full items-center justify-center gap-2 rounded-2xl
               bg-[--color-purple] px-4 py-2 text-white"
                >
                    <FilterIcon className="h-5 w-5" />
                    Фільтри
                </button>

                <SortSelect />
            </div>

            <>
                <div
                    onClick={() => setMobileOpen(false)}
                    className={`
                        fixed inset-0 z-40 bg-black/50 transition-opacity duration-300
                        ${mobileOpen ? 'opacity-100 pointer-events-auto'
                            : 'opacity-0 pointer-events-none'}
                    `}
                />
                <aside
                    className={`
                        fixed top-0 left-0 z-50 w-[360px] max-w-full
                        h-full
                        bg-white p-6 shadow-xl overflow-y-auto
                        transform transition-transform duration-300
                        ${mobileOpen ? 'translate-x-0' : '-translate-x-full'}
                    `}
                >
                    <FilterPanel filters={BALL_FILTERS} onClose={() => setMobileOpen(false)} />
                </aside>
            </>

            {/* ---------- Контент ---------- */}
            <div className="mt-7 grid gap-8 md:grid-cols-[370px_1fr]">
                <aside
                    className="
                        hidden md:block w-[370px] sticky 
                        top-4 h-[calc(100vh-2rem)] overflow-y-auto      
                        pr-3 hide-scrollbar         
                    "
                >
                    <FilterPanel filters={filters} />
                </aside>

                <div className="
                    grid grid-cols-2 gap-4 sm:gap-6
                    lg:grid-cols-[repeat(4,312px)]
                    justify-center   /* центрируем, чтобы колонки не “липли” к левому краю */
                ">
                    {offers.map((p) => (
                        <Card key={p.id} {...p} />
                    ))}
                </div>
            </div>
        </section>
    );
}
