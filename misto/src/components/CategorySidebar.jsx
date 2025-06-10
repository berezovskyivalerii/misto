export default function CategorySidebar({ categories }) {
  return (
    <aside className="w-96 p-4 bg-white">
      <ul className="space-y-3">
        {categories.map(({ icon, label }) => (
          <li
            key={label}
            className="flex items-center gap-3 cursor-pointer hover:text-[--color-purple]"
          >
            <img src={icon} alt={label} className="h-6 w-auto" />
            <span className="text-base">{label}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}