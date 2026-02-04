export default function ServicesPage() {
  return (
    <main className="p-10 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold">Our Services</h1>

      <p className="mt-4 text-gray-600">
        Packman Moving & Delivery provides professional moving solutions in
        Huntsville, AL and beyond.
      </p>

      <div className="mt-10 grid md:grid-cols-2 gap-6">
        <Service title="Local Moves" desc="Fast and affordable moving across Huntsville." />
        <Service title="Long Distance Moves" desc="Safe transport across cities and states." />
        <Service title="Packing Services" desc="We provide packing supplies and full packing help." />
        <Service title="Furniture Delivery" desc="Same-day delivery and heavy item transport." />
      </div>
    </main>
  );
}

function Service({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="p-6 bg-white shadow rounded-2xl">
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="mt-2 text-gray-600">{desc}</p>
    </div>
  );
}
