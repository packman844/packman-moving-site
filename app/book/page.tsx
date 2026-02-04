"use client";

import { useState } from "react";

export default function BookPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="p-10 max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold">Book a Move</h1>
      <p className="mt-3 text-gray-600">
        Fill out the form and we’ll contact you quickly.
      </p>

      {submitted ? (
        <p className="mt-6 p-4 bg-green-100 rounded-xl">
          ✅ Request received! We will call you soon.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <input
            required
            placeholder="Full Name"
            className="w-full p-3 border rounded-xl"
          />

          <input
            required
            placeholder="Phone Number"
            className="w-full p-3 border rounded-xl"
          />

          <input
            required
            placeholder="Moving From Address"
            className="w-full p-3 border rounded-xl"
          />

          <input
            required
            placeholder="Moving To Address"
            className="w-full p-3 border rounded-xl"
          />

          <input
            required
            type="date"
            className="w-full p-3 border rounded-xl"
          />

          <button className="w-full bg-black text-white py-3 rounded-xl font-bold">
            Submit Booking Request
          </button>
        </form>
      )}
    </main>
  );
}
