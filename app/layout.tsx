import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Packman Moving & Delivery",
  description: "Moving services in Huntsville, AL",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans">

        {/* NAVBAR */}
        <nav className="bg-black text-white px-6 py-4 flex justify-between items-center">
          <Link href="/" className="font-bold text-xl">
            Packman Moving 🚚
          </Link>

          <div className="flex gap-4 text-sm md:text-base">
            <Link href="/services">Services</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/book">Book</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </nav>

        {/* PAGE CONTENT */}
        {children}
      </body>
    </html>
  );
}
