export default function CatalogButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="
        max-w-[204px] w-full flex items-center gap-3 justify-around
        px-7 py-3 border-2 border-[--color-brown]
        text-[--color-brown] text-2xl font-medium rounded-[15px]
        hover:bg-[--color-yellow] transition-colors duration-500
      "
    >
      <img src="./catalog.png" alt="catalog" className="w-[30px] h-[30px]" />
      Каталог
    </button>
  );
}
