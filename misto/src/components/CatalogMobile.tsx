import { useState } from 'react'

export default function CatalogMobile({ categories, open, onClose }: Props) {
  const [chosen, setChosen] = useState<Category | null>(null);
  if (!open) return null;

  return (
    <>
      <div className="fixed inset-0 z-40 bg-black/40" onClick={onClose} />

      {/* контейнер */}
      <div className="fixed inset-0 z-50 flex flex-col md:hidden bg-white">

        {/* ───── HEADER ───── */}
        <div className="sticky top-0 flex items-center justify-between
                        h-16 px-4 border-b shadow-sm bg-[#FFFDF9]">
          <img src="misto_logo.png" alt="logo" className="h-5"/>

          <button
            onClick={onClose}
            aria-label="Закрити"
            className="text-2xl leading-none"
          >
            <img src="./close.png" alt="close" className="w-7 h-7"/>
          </button>
        </div>

        {/* ───── Содержимое, прокручиваемое независимо от header ───── */}
        <div className="flex-1 overflow-y-auto">
          {chosen === null ? (
            /* экран категорий */
            <nav className="p-4 space-y-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setChosen(cat)}
                  className="flex w-full items-center gap-3 rounded-md px-3 py-3 hover:bg-gray-100"
                >
                  <img src={cat.icon} alt="" className="h-5 w-5 shrink-0" />
                  <span>{cat.title}</span>
                  <img className="w-5 ml-auto rotate-90" src="./forward_icon.png" alt="arrow" />
                </button>
              ))}
            </nav>
          ) : (
            /* экран «Популярні пропозиції» */
            <section className="p-4 space-y-4">
              <button
                onClick={() => setChosen(null)}
                className="flex items-center gap-2 text-base text-gray-600"
              >
                <img className="w-5 -rotate-90" src="./forward_icon.png" alt="arrow" /> Всі категорії
              </button>

              {/* строка с иконкой и названием категории */}
              <div className="flex items-center justify-center gap-2">
                <img src={chosen.icon} alt="" className="h-7 w-7 shrink-0" />
                <span className="text-lg">{chosen.title}</span>
              </div>

              <h3 className="text-center text-lg text-[#5F8EEB]">
                Популярні пропозиції
              </h3>

              <ul className="space-y-2 bg-orange-100 rounded-xl p-4">
                {chosen.columns[0]?.items.map((item) => (
                  <li
                    key={item}
                    className="cursor-pointer hover:text-[--color-purple]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </div>
    </>
  );
}
