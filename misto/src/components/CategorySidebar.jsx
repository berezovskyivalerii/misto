export default function CategorySidebar({ categories }) {
  return (
    <aside className="w-96 p-4 mt-3 border-r-2 bg-white  hidden sm:block">
      <ul className="space-y-5 border-b-2 pb-4">
        {categories.map(({ path, label }) => (
          <li
            key={label}
            className="flex items-center gap-5 cursor-pointer hover:text-[--color-purple]"
          >
            <img src={path} alt={label} className="h-10 w-auto" />
            <span className="text-lg tracking-wide">{label}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}