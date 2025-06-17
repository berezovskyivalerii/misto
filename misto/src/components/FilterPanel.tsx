import { useState } from 'react';
import { Search, ChevronDown, ChevronRight } from 'lucide-react';
import { FilterGroup, OptionGroup } from '../db/filters';

function isOptionGroup(g: FilterGroup): g is OptionGroup {
  return 'options' in g;
}

export default function FilterPanel({
  filters,
  onClose,
}: {
  filters: readonly FilterGroup[];
  onClose?: () => void;
}) {
  const [queries, setQueries] = useState<Record<string, string>>({});
  const [open, setOpen] = useState<Record<string, boolean>>(
    () =>
      Object.fromEntries(
        filters.map((g) => [g.id, !g.collapsible]),
      ) as Record<string, boolean>,
  );

  return (
    <div className="space-y-8">
      {filters.map((group) => {
        const isOpen = open[group.id];
        const toggle = () =>
          group.collapsible && setOpen((s) => ({ ...s, [group.id]: !s[group.id] }));

        const query = queries[group.id] ?? '';
        const opts: OptionGroup['options'] =
          isOptionGroup(group)
            ? query
              ? group.options.filter((o) =>
                  o.label.toLowerCase().includes(query.toLowerCase()),
                )
              : group.options
            : [];

        return (
          <div
            key={group.id}
            className="border-b border-gray-300 pb-6 last:border-none"
          >
            {/* ---------- Заголовок секции ---------- */}
            <button
              type="button"
              onClick={toggle}
              className="
                flex w-full items-center justify-between
                text-left focus:outline-none mb-2
              "
            >
              <h2 className="text-2xl">{group.title}</h2>
              {group.collapsible && (
                isOpen ? (
                  <ChevronDown className="h-6 w-6" />
                ) : (
                  <ChevronRight className="h-6 w-6" />
                )
              )}
            </button>

            {/* ---------- Контент (если открыт) ---------- */}
            {isOpen && (
              <>
                {isOptionGroup(group) && group.searchable && (
                  <div className="relative mb-4 mt-4">
                    <input
                      type="text"
                      placeholder="Пошук"
                      value={query}
                      onChange={(e) =>
                        setQueries((s) => ({ ...s, [group.id]: e.target.value }))
                      }
                      className="w-full rounded-xl border border-[#5F5F5F] px-4 py-4 pr-10 text-base focus:outline-none focus:ring-2 focus:ring-[--color-purple]"
                    />
                    <Search className="absolute right-3 top-[20px] h-5 w-5" />
                  </div>
                )}

                {group.type === 'checkbox' &&
                  opts.map((o) => (
                    <label key={o.value} className="block">
                      <input
                        type="checkbox"
                        className="mr-2 mt-2 accent-[--color-purple]"
                      />
                      {o.label}
                    </label>
                  ))}

                {group.type === 'buttons' && (
                  <div className="mt-4 grid gap-3 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
                    {opts.map((o) => (
                      <button
                        key={o.value}
                        className="w-full rounded-[10px] border border-gray-400 py-2 text-lg transition-colors hover:bg-gray-100"
                      >
                        {o.label}
                      </button>
                    ))}
                  </div>
                )}

                {group.type === 'range' && (
                  <>
                    <div className="mt-6 flex items-center gap-2 lg:gap-5">
                      <input
                        type="number"
                        defaultValue={group.min}
                        className="w-28 rounded-[10px] border border-[#5F5F5F] px-3 py-2 text-lg"
                      />
                      <span>—</span>
                      <input
                        type="number"
                        defaultValue={group.max}
                        className="w-28 rounded-[10px] border border-[#5F5F5F] px-3 py-2 text-lg"
                      />
                      <button className="w-20 rounded-[10px] border border-[--color-purple] px-3 py-2 text-lg">
                        OK
                      </button>
                    </div>
                    <input
                      type="range"
                      min={group.min}
                      max={group.max}
                      defaultValue={group.max}
                      className="mt-7 w-full accent-[--color-purple]"
                    />
                  </>
                )}
              </>
            )}
          </div>
        );
      })}

      {onClose && (
        <button
          onClick={onClose}
          className="mt-4 w-full rounded-xl bg-[--color-purple] py-2 text-white"
        >
          Показати
        </button>
      )}
    </div>
  );
}
