import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Slider({ slides = [] }) {
    const [index, setIndex] = useState(0);
    const total = slides.length;
    const prev = () => setIndex(i => (i - 1 + total) % total);
    const next = () => setIndex(i => (i + 1) % total);

    return (
        <div className="
            mt-6
            relative w-full     
            aspect-[400/195]    
            min-h-[195px]       
            sm:aspect-[1310/300]
            rounded-xl overflow-hidden bg-stone-400
        "
        >
            <div
                className="flex h-full transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${index * 100}%)` }}
            >
                {slides.map((src, i) => (
                    <div key={i} className="relative w-full h-full shrink-0">
                        <img
                            src={src}
                            alt=""
                            className="
                                absolute w-full h-full object-cover
                                select-none pointer-events-none
                            "
                        />
                    </div>
                ))}
            </div>

            <button
                onClick={prev}
                className="hidden sm:block absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-[--color-yellow] rounded-full shadow"
            >
                <ChevronLeft size={18} />
            </button>
            <button
                onClick={next}
                className="hidden sm:block absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-[--color-yellow] rounded-full shadow"
            >
                <ChevronRight size={18} />
            </button>

            <div className="sm:hidden absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
                {slides.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setIndex(i)}
                        className={`w-2 h-2 rounded-full ${i === index ? 'bg-[--color-purple]' : 'bg-gray-300'}`}
                        aria-label={`Go to slide ${i + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}