import { useMemo, useState } from 'react';
import { FilterIcon, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import FilterPanel from './FilterPanel';
import SortSelect from './SortSelect';
import Card from './Card';
import { balls } from '../db/cards';
import { BALL_FILTERS } from '../db/filters';

const PER_PAGE = 16;

function ProductPath({ path }) {
  return (
    <div className="hidden lg:flex items-center">
      <Link to="/">
        <img src="./home_icon.png" alt="home" className="h-9 w-auto" />
      </Link>
      {path.map((seg, i) => (
        <p key={i} className="text-lg">
          <span className="mx-2 text-xl">/</span>
          {seg}
        </p>
      ))}
    </div>
  );
}

function Pagination({ page, total, onPageChange }) {
  const pages = useMemo(
    () => {
      if (total <= 9) return Array.from({ length: total }, (_, i) => i + 1);

      const s = new Set([1, total, page, page - 1, page + 1]);
      [...s].forEach((n) => (n < 1 || n > total) && s.delete(n));

      const sorted = [...s].sort((a, b) => a - b);
      const out = [];

      sorted.forEach((n, idx) => {
        if (idx && n - sorted[idx - 1] > 1) out.push('dot');
        out.push(n);
      });
      return out;
    },
    [page, total]
  );

  return (
    <nav className="mt-10 flex justify-center items-center gap-2 select-none">
      <button
        disabled={page === 1}
        onClick={() => onPageChange(page - 1)}
        className="pagination-arrow disabled:opacity-40"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>

      {pages.map((p, i) =>
        p === 'dot' ? (
          <span key={i} className="px-1">
            …
          </span>
        ) : (
          <button
            key={p}
            onClick={() => onPageChange(p)}
            className={`h-9 w-9 rounded-md border border-[--color-purple] text-sm ${p === page ? 'bg-[--color-purple]/10' : ''
              }`}
          >
            {p}
          </button>
        )
      )}

      <button
        disabled={page === total}
        onClick={() => onPageChange(page + 1)}
        className="pagination-arrow disabled:opacity-40"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </nav>
  );
}

/* ────────── главная страница категории ────────── */
export default function Category({ filters = BALL_FILTERS }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(balls.length / PER_PAGE);
  const pagedballs = useMemo(
    () => balls.slice((page - 1) * PER_PAGE, page * PER_PAGE),
    [page]
  );

  return (
    <section className="mx-auto px-4 lg:px-0 lg:mt-7 mb-10">
      <ProductPath path={['Спорт і захоплення', 'Ігрові види спорту', 'М’ячі для командних ігор']} />

      {/* header */}
      <section className="md:border-b-2 mt-5 py-3 md:flex md:items-end md:justify-between">
        <div>
          <h1 className="text-3xl font-extrabold">Мʼячі</h1>
          <p className="mt-4 lg:mt-10 text-sm">Знайдено {balls.length} товарів</p>
        </div>
        <div className="hidden md:block">
          <SortSelect />
        </div>
      </section>

      {/* mobile controls */}
      <div className="mb-4 grid grid-cols-2 gap-2 md:hidden">
        <button
          onClick={() => setMobileOpen(true)}
          className="flex items-center justify-center gap-2 w-full rounded-2xl
                     bg-[--color-purple] px-4 py-2 text-white"
        >
          <FilterIcon className="h-5 w-5" />
          Фільтри
        </button>
        <SortSelect />
      </div>

      {/* mobile filters pane */}
      <>
        <div
          onClick={() => setMobileOpen(false)}
          className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
            }`}
        />
        <aside
          className={`fixed top-0 left-0 z-50 w-[360px] max-w-full h-full
                      bg-white p-6 shadow-xl overflow-y-auto transform
                      transition-transform duration-300 ${mobileOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
        >
          <FilterPanel filters={BALL_FILTERS} onClose={() => setMobileOpen(false)} />
        </aside>
      </>

      {/* content */}
      <div className="mt-7 grid gap-8 md:grid-cols-[370px_1fr]">
        {/* sidebar */}
        <aside className="hidden md:block w-[370px] sticky top-4 h-[calc(100vh-2rem)] overflow-y-auto pr-3 hide-scrollbar">
          <FilterPanel filters={filters} />
        </aside>

        {/* cards */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-[repeat(4,312px)] justify-center">
          {pagedballs.map(p => (
            <Link key={p.id} to={p.path ?? '/notfound'} className="contents">
              {/* `className="contents"` оставляет сетку неизменной */}
              <Card {...p} />
            </Link>
          ))}
        </div>
      </div>


      {/* pagination */}
      <Pagination page={page} total={totalPages} onPageChange={setPage} />
    </section>
  );
}

/* ────────── tailwind helper (где-нибудь в глобальном css) ──────────

*/
