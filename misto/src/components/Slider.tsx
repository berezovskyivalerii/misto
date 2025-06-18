import { useState, useEffect, useMemo, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SliderProps {
  /** картинки по-умолчанию (десктоп) */
  slides: string[];
  /** картинки для мобильных; если пусто — берутся slides */
  mobileSlides?: string[];
  /** интервал автопрокрутки (мс, по умолчанию 3 000) */
  autoplayMs?: number;
}

export default function Slider({
  slides,
  mobileSlides = [],
  autoplayMs = 3000,
}: SliderProps) {
  /* ── определяем, мобильный ли экран ── */
  const [isMobile, setIsMobile] = useState<boolean>(
    window.matchMedia('(max-width: 639px)').matches
  );

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 639px)');
    const listener = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener('change', listener);
    return () => mq.removeEventListener('change', listener);
  }, []);

  /* ── набор картинок под текущее устройство ── */
  const imgs = useMemo(
    () => (isMobile && mobileSlides.length ? mobileSlides : slides),
    [isMobile, slides, mobileSlides]
  );

  const [index, setIndex] = useState(0);
  const total = imgs.length;

  /* гарантируем, что index не “вылетает” при смене набора */
  useEffect(() => {
    if (index >= total) setIndex(0);
  }, [total, index]);

  /* ── автопрокрутка только для мобильных ── */
  const timerRef = useRef<number | null>(null);
  useEffect(() => {
    if (isMobile && total > 1) {
      timerRef.current = window.setInterval(
        () => setIndex((i) => (i + 1) % total),
        autoplayMs
      );
    }
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, [isMobile, total, autoplayMs]);

  /* ── ручное листание (десктоп) ── */
  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);

  return (
    <div
      className="
        mt-6 relative w-full
        aspect-[400/195] min-h-[195px]
        sm:aspect-[1310/300]
        rounded-[25px] overflow-hidden bg-stone-400
      "
    >
      <div
        className="flex h-full transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {imgs.map((src, i) => (
          <div key={i} className="relative w-full h-full shrink-0">
            <img
              src={src}
              alt=""
              className="absolute w-full h-full object-cover
                         select-none pointer-events-none"
            />
          </div>
        ))}
      </div>

      {/* стрелки — видны только на >= sm */}
      <button
        onClick={prev}
        className="hidden sm:block absolute left-4 top-1/2 -translate-y-1/2
                   p-2 bg-[--color-yellow] rounded-full shadow"
      >
        <ChevronLeft size={18} />
      </button>
      <button
        onClick={next}
        className="hidden sm:block absolute right-4 top-1/2 -translate-y-1/2
                   p-2 bg-[--color-yellow] rounded-full shadow"
      >
        <ChevronRight size={18} />
      </button>

      {/* точки навигации — только на мобиле */}
      <div className="sm:hidden absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        {imgs.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`
              w-2 h-2 rounded-full
              ${i === index ? 'bg-[--color-purple]' : 'bg-gray-300'}
            `}
            aria-label={`Перейти к слайду ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
