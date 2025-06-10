import Card from './Card';

export default function OfferSection({ items }) {
  return (
    <section>
      <h2 className="text-xl font-semibold mb-4">Актуальні пропозиції</h2>
      <div className="grid grid-cols-4 gap-4">
        {items.map(item => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
}