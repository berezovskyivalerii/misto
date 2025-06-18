export default function SortSelect() {
  return (
    <select
      className="w-full rounded-2xl border border-gray-300 bg-white px-4 py-2 text-sm"
    >
      <option>За рейтингом</option>
      <option>Від дорогих до дешевих</option>
      <option>Від дешевих до дорогих</option>
      <option>Новинки</option>
    </select>
  );
}