import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Slider({ slides = [] }) {
    const [index, setIndex] = useState(0);
    const total = slides.length;

    const prev = () => setIndex(i => (i - 1 + total) % total);
    const next = () => setIndex(i => (i + 1) % total);

    return (
        <>
            <div className="relative w-full max-w-[1310px] mx-auto overflow-hidden rounded-xl bg-stone-400">
                <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${index * 100}%)` }}
                >
                    {slides.map((src, i) => (
                        <img
                            key={i}
                            src={src}
                            alt=""
                            className="shrink-0 w-full h-[18.75rem] object-cover select-none pointer-events-none"
                        />
                    ))}
                </div>

                <button
                    onClick={prev}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-[--color-yellow] rounded-full shadow"
                >
                    <ChevronLeft size={18} />
                </button>

                <button
                    onClick={next}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-[--color-yellow] rounded-full shadow"
                >
                    <ChevronRight size={18} />
                </button>
            </div>
            <a
                href="/all-promotions"
                className="text-lg text-[--color-purple] flex ml-auto mb-0 items-center gap-1"
            >
                Всі акції <ChevronRight size={18} />
            </a>
        </>
    );
}
