import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <main className="max-w-4xl mx-auto p-4 sm:p-6 md:p-10 font-sans text-gray-800">
      <header className="mb-10 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">Juniper Fields Interiors</h1>
        <p className="text-base sm:text-lg md:text-xl">Interior Design | Home Goods | Paper Goods</p>
      </header>

      <section className="mb-12">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">Our Services</h2>
        <ul className="space-y-6">
          <li>
            <h3 className="text-lg sm:text-xl font-medium">Initial Virtual Consultation – Free (30 Minutes)</h3>
            <p className="text-sm sm:text-base">A one-time introductory session to learn about your space, goals, and style.</p>
          </li>
          <li>
            <h3 className="text-lg sm:text-xl font-medium">Virtual Consultation – $75/hour</h3>
            <p className="text-sm sm:text-base">Flexible hourly support for design questions, layout advice, product sourcing, and more.</p>
          </li>
          <li>
            <h3 className="text-lg sm:text-xl font-medium">In-Person Consultation – $150/hour (+ travel fees)</h3>
            <p className="text-sm sm:text-base">Hands-on guidance in your space. Includes follow-up notes and recommendations.</p>
          </li>
          <li>
            <h3 className="text-lg sm:text-xl font-medium">Room Design Package – Starting at $600</h3>
            <p className="text-sm sm:text-base">A complete plan for one room including layout, mood board, product links, and setup guide.</p>
          </li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">Book a Consultation</h2>
        <div
          className="calendly-inline-widget"
          data-url="https://calendly.com/hello-juniperfieldsco"
          style={{ minWidth: "320px", height: "630px" }}
        ></div>
      </section>

      <section className="mb-12">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">Visit Our Etsy Shop</h2>
        <p className="mb-4 text-sm sm:text-base">
          Explore our curated paper goods and handmade creations at Storybound by Juniper Fields.
        </p>
        <a
          href="https://www.etsy.com/shop/JuniperFieldsShop"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-2 text-white bg-black rounded-full hover:bg-gray-800"
        >
          Shop on Etsy
        </a>
      </section>

      <footer className="text-center text-xs sm:text-sm text-gray-500 mt-10">
        &copy; {new Date().getFullYear()} Juniper Fields Interiors. All rights reserved.
      </footer>
    </main>
  );
}
