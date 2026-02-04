export default function Home() {
  return (
    <main className="font-sans">
     
     
        {/* HERO SECTION */}
      <section className="bg-black text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold">
          Packman Moving & Delivery 🚚 
        </h1>

        <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto text-gray-300">
          Professional, fast, and affordable moving services in Huntsville, AL.
          Local & long-distance moves, packing, delivery, and more.
        </p>

        <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
          <a
            href="tel:2569804411"
            className="bg-yellow-400 text-black px-6 py-3 rounded-xl font-semibold shadow-lg hover:bg-yellow-300"
          >
            Call Now: (256) 980-4411
          </a>

          <a
            href="#quote"
            className="bg-white text-black px-6 py-3 rounded-xl font-semibold shadow-lg hover:bg-gray-200"
          >
            Get a Free Quote
          </a>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center">
          Our Moving Services
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
          <ServiceCard
            title="Local Moving"
            desc="Reliable moves across Huntsville and nearby areas."
          />
          <ServiceCard
            title="Long Distance Moving"
            desc="Safe and secure moving services across state lines."
          />
          <ServiceCard
            title="Packing & Delivery"
            desc="We pack, load, deliver, and unload with care."
          />
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-16 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center">
          Why Choose Packman Moving?
        </h2>

        <div className="mt-10 max-w-4xl mx-auto grid gap-6 md:grid-cols-2">
          <Feature text="✅ Licensed & professional movers" />
          <Feature text="✅ Affordable pricing with no hidden fees" />
          <Feature text="✅ Same-day & weekend availability" />
          <Feature text="✅ Trusted by families and businesses" />
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center">
          Customer Reviews
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
          <Testimonial
            name="Sarah M."
            quote="Fast, friendly, and careful with everything. Highly recommend!"
          />
          <Testimonial
            name="James T."
            quote="Best moving company in Huntsville. Smooth experience from start to finish."
          />
          <Testimonial
            name="Lisa R."
            quote="Affordable and professional. They made moving stress-free."
          />
        </div>
      </section>

      {/* FREE QUOTE */}
      <section
        id="quote"
        className="py-20 px-6 bg-black text-white text-center"
      >
        <h2 className="text-4xl font-bold">
          Get Your Free Moving Quote Today
        </h2>

        <p className="mt-4 text-gray-300 max-w-xl mx-auto">
          Call now or request a quote online — we respond quickly!
        </p>

        <div className="mt-8">
          <a
            href="tel:2569804411"
            className="bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-300"
          >
            📞 Call (256) 980-4411
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 text-center bg-gray-900 text-gray-300">
        <p className="font-semibold">
          Packman Moving & Delivery — Huntsville, AL
        </p>
        <p className="mt-2">
          © {new Date().getFullYear()} Packman Moving. All rights reserved.
        </p>
      </footer>
    </main>
  );
}

/* COMPONENTS */

function ServiceCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="mt-3 text-gray-600">{desc}</p>
    </div>
  );
}

function Feature({ text }: { text: string }) {
  return (
    <div className="p-4 bg-gray-100 rounded-xl font-medium text-gray-800">
      {text}
    </div>
  );
}

function Testimonial({ name, quote }: { name: string; quote: string }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md">
      <p className="text-gray-700 italic">“{quote}”</p>
      <p className="mt-4 font-bold text-black">— {name}</p>
    </div>
  );
}

