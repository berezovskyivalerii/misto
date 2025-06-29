import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';

const STEP = 8;

export default function OfferSection({ items }) {
  const [visible, setVisible] = useState(STEP);

  useEffect(() => {
    const update = () =>
      window.innerWidth >= 640 ? setVisible(items.length) : setVisible(STEP);
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, [items.length]);

  const showMore = () => setVisible(v => Math.min(v + STEP, items.length));
  const hasMore = visible < items.length;

  return (
    <section className="mt-8 mb-10">
      <h2 className="text-xl mb-4 tracking-wider">Актуальні пропозиції</h2>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4">
        {items.slice(0, visible).map(it => (
          <Link key={it.id} to={it.path} className="contents">
            <Card {...it} />
          </Link>
        ))}
      </div>

      {hasMore && (
        <div className="flex justify-center mt-6 mb-5 sm:hidden">
          <button
            onClick={showMore}
            className="
              px-8 py-3 rounded-xl
              bg-[--color-purple] text-white text-lg font-medium
              flex items-center gap-2
            "
          >
            Показати ще
            <span className="text-2xl leading-none">↓</span>
          </button>
        </div>
      )}
    </section>
  );
}
