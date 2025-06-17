export default function SortSelect() {
  return (
    <select
      className="w-full rounded-2xl border border-gray-300 bg-white px-4 py-2 text-sm"
    >
      <option>За рейтингом</option>
      <option>Дешевші → Дорожчі</option>
      <option>Дорожчі → Дешевші</option>
    </select>
  );
}