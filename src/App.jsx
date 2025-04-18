import { useEffect } from "react";
//import portfolio1 from "./assets/patio1.jpg";
//import portfolio2 from "./assets/patio2.jpg";
//import portfolio3 from "./assets/patio3.jpg";
//import logo from "./assets/logo.png";

export default function App() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="min-h-screen bg-[#f8f5f1] text-[#2e2b29] font-serif">
      <header className="text-center py-10 border-b border-[#d8d3cb] bg-white">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-2">Juniper Fields Interiors</h1>
        <p className="text-lg sm:text-xl italic text-[#5e5a57]">Designing spaces with story, soul, and subtle charm</p>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12 space-y-16">
        <section>
          <h2 className="text-2xl font-semibold mb-6 border-b border-[#ccc8c1] pb-2">Our Services</h2>
          <div className="grid gap-8">
            <div>
              <h3 className="text-xl font-medium">Initial Virtual Consultation – Free (30 Minutes)</h3>
              <p className="text-sm text-[#4a4847]">A one-time introductory session to learn about your space, goals, and style.</p>
            </div>
            <div>
              <h3 className="text-xl font-medium">Virtual Consultation – $75/hour</h3>
              <p className="text-sm text-[#4a4847]">Flexible hourly support for design questions, layout advice, product sourcing, and more.</p>
            </div>
            <div>
              <h3 className="text-xl font-medium">In-Person Consultation – $150/hour (+ travel fees)</h3>
              <p className="text-sm text-[#4a4847]">Hands-on guidance in your space. Includes follow-up notes and recommendations.</p>
            </div>
            <div>
              <h3 className="text-xl font-medium">Room Design Package – Starting at $500</h3>
              <p className="text-sm text-[#4a4847]">A complete plan for one room including layout, mood board, product links, and setup guide.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6 border-b border-[#ccc8c1] pb-2">Book a Consultation</h2>
          <div
            className="calendly-inline-widget border rounded-md"
            data-url="https://calendly.com/hello-juniperfieldsco"
            style={{ minWidth: "320px", height: "630px" }}
          ></div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6 border-b border-[#ccc8c1] pb-2">Visit Our Etsy Shop</h2>
          <p className="mb-4 text-[#4a4847]">
            Explore our curated paper goods and handmade creations at Storybound by Juniper Fields.
          </p>
          <a
            href="https://www.etsy.com/shop/JuniperFieldsShop"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-2 bg-[#2e2b29] text-white rounded-full hover:bg-[#4a4847] transition-colors"
          >
            Shop on Etsy
          </a>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6 border-b border-[#ccc8c1] pb-2">Portfolio</h2>
          <div className="text-[#4a4847] italic">
            Our latest projects will appear here soon. In the meantime, follow us on Instagram @juniperfieldsco.
          </div>
        </section>
      </main>

      <footer className="text-center text-xs text-[#857f79] py-8 border-t border-[#d8d3cb]">
        &copy; {new Date().getFullYear()} Juniper Fields Interiors. All rights reserved.
      </footer>
    </div>
  );
}