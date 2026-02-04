export default function ContactPage() {
  return (
    <main className="p-10 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold">Contact Us</h1>

      <p className="mt-4 text-gray-600">
        Call or email Packman Moving anytime.
      </p>

      <div className="mt-8 space-y-4 text-lg">
        <p>📍 Huntsville, Alabama</p>
        <p>
          📞 Phone:{" "}
          <a className="text-blue-600" href="tel:2569804411">
            (256) 980-4411
          </a>
        </p>
        <p>✉️ Email: packmanmoving844@gmail.com</p>
      </div>
    </main>
  );
}
