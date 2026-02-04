export default function PricingPage() {
  return (
    <main className="p-10 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold">Pricing</h1>
      <p className="mt-4 text-gray-600">
        Transparent and affordable moving rates.
      </p>

      <div className="mt-10 grid md:grid-cols-3 gap-6">
        <PriceCard title="Small Move" price="$199+" desc="Apartment or single room move." />
        <PriceCard title="Home Move" price="$399+" desc="Full home moving service." />
        <PriceCard title="Long Distance" price="Call Us" desc="Custom quote based on miles." />
      </div>
    </main>
  );
}

function PriceCard({
  title,
  price,
  desc,
}: {
  title: string;
  price: string;
  desc: string;
}) {
  return (
    <div className="p-6 rounded-2xl shadow bg-white">
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="text-3xl mt-4 font-semibold">{price}</p>
      <p className="mt-3 text-gray-600">{desc}</p>
    </div>
  );
}
