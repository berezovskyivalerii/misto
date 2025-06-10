import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Card from './Card';

export default function RecommendationSection({ items }) {
    const containerRef = useRef(null);

    const scrollByWidth = (direction = 'right') => {
        const container = containerRef.current;
        if (!container) return;
        const amount = container.clientWidth;
        container.scrollBy({
            left: direction === 'right' ? amount : -amount,
            behavior: 'smooth',
        });
    };

    return (
        <section className="relative mt-8">
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">Рекомендації</h2>
            </div>

            <div className="relative">
                <div
                    ref={containerRef}
                    className="flex gap-4 overflow-x-auto scroll-smooth hide-scrollbar"
                >
                    {items.map(item => (
                        <div key={item.id} className="shrink-0 w-60">
                            <Card {...item} />
                        </div>
                    ))}
                </div>


                <button
                    onClick={() => scrollByWidth('left')}
                    className="h-12 w-12 absolute left-4 top-1/2 -translate-y-1/2 flex items-center justify-center p-4 bg-[--color-yellow] rounded-full shadow"
                >
                    <ChevronLeft size={18} />
                </button>

                <button
                    onClick={() => scrollByWidth('right')}
                    className="h-12 w-12 absolute right-4 top-1/2 -translate-y-1/2 flex items-center justify-center bg-[--color-yellow] rounded-full shadow"
                >
                    <ChevronRight size={18} />
                </button>
            </div>
        </section>
    );
}
