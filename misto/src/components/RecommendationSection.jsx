import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import CardSmall from './CardSmall';

export default function RecommendationSection({ items }) {
    const listRef = useRef(null);
    const scroll = dir => {
        const box = listRef.current;
        if (!box) return;
        box.scrollBy({
            left: dir === 'right' ? box.clientWidth : -box.clientWidth,
            behavior: 'smooth',
        });
    };

    return (
        <section className="mt-8">
            <h2 className="text-xl mb-2 tracking-wider">Рекомендації</h2>
            <div className="relative overflow-hidden">
                <div
                    className="flex gap-5 overflow-x-auto overflow-y-hidden scroll-smooth hide-scrollbar"
                >
                    {items.map(it => (
                        <div
                            key={it.id}
                            className="w-[165px] sm:w-[190px]"
                        >
                            <CardSmall {...it} />
                        </div>
                    ))}
                </div>

                <button
                    onClick={() => scroll('left')}
                    className="hidden sm:flex absolute left-2 top-1/2 -translate-y-1/2
                 h-10 w-10 items-center justify-center
                 bg-[--color-yellow] rounded-full shadow"
                >
                    <ChevronLeft size={18} />
                </button>
                <button
                    onClick={() => scroll('right')}
                    className="hidden sm:flex absolute right-2 top-1/2 -translate-y-1/2
                 h-10 w-10 items-center justify-center
                 bg-[--color-yellow] rounded-full shadow"
                >
                    <ChevronRight size={18} />
                </button>
            </div>
        </section>

    );
}
