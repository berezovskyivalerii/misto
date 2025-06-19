import { useState } from 'react';
import {Link} from 'react-router-dom'

type ColumnGroup = { subtitle: string; items: string[] };
type Category = { id: string; title: string; icon: string; columns: ColumnGroup[] };

export default function CatalogDesktop({
    categories,
    open,
    onClose,
}: {
    categories: Category[];
    open: boolean;
    onClose: () => void;
}) {
    const [active, setActive] = useState(categories[0].id);
    if (!open) return null;

    const current = categories.find((c) => c.id === active)!;

    const grid = buildGridPinnedFirst(current.columns);

    return (
        <>
            <div className="fixed inset-0 z-40 bg-black/50" onClick={onClose} />

            <div className="fixed left-1/2 -translate-x-1/2 top-[13%] z-50 h-[800px] w-[1760px] bg-white rounded-2xl shadow-xl flex">
                <nav className="w-[330px] shrink-0 border-r py-6 px-4 space-y-1.5 overflow-y-hidden">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onMouseEnter={() => setActive(cat.id)}
                            onClick={() => setActive(cat.id)}
                            className={`
                            flex items-center gap-3 w-full text-left rounded-md px-3 py-2
                            ${cat.id === active ? 'text-[--color-purple]' : 'hover:bg-gray-100'}
                        `}
                        >
                            <img src={cat.icon} alt="" className="h-6 w-6" />
                            <span>{cat.title}</span>
                        </button>
                    ))}
                </nav>

                <section className="grid grid-cols-[repeat(4,315px)] gap-x-7 grow overflow-y-auto px-6 py-6">
                    {grid.map((col, i) => (
                        <div
                            key={i}
                            className={`space-y-3 overflow-y-hidden px-4 ${i === 0 ? 'bg-orange-100 rounded-xl p-4 box-border' : ''
                                }`}
                        >
                            {col.map(({ subtitle, items }) => (
                                <ul key={subtitle} className="space-y-2">
                                    <li className="text-[--color-purple]">{subtitle}</li>

                                    {items.map(x => (
                                        <li key={x}>
                                            <Link
                                                to="/notfound"
                                                className="block text-sm hover:text-[--color-purple] cursor-pointer"
                                            >
                                                {x}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            ))}
                        </div>
                    ))}
                </section>
            </div>
        </>
    );
}

function buildGridPinnedFirst(cols: ColumnGroup[]) {
    if (cols.length === 0) return [];

    const COLS = 4;
    const grid: ColumnGroup[][] = Array.from({ length: COLS }, () => []);

    grid[0].push(cols[0]);
    const heights = Array(COLS).fill(0);
    heights[0] = cols[0].items.length + 1;

    cols.slice(1).forEach((g) => {
        const h = g.items.length + 1;
        const col = 1 + heights.slice(1).indexOf(Math.min(...heights.slice(1)));
        grid[col].push(g);
        heights[col] += h;
    });

    return grid;
}