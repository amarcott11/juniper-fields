
import { useEffect } from "react";
import { motion } from "framer-motion";
import logo from "./assets/logo.png";

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
        <img src={logo} alt="Juniper Fields logo" className="mx-auto h-20 w-auto mb-4" />
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

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-white border border-[#d8d3cb] rounded-xl shadow-sm p-6 sm:p-8"
        >
          <h2 className="text-2xl font-semibold mb-4 text-center border-b border-[#ccc8c1] pb-2">
            Book a Consultation
          </h2>
          <p className="text-center text-[#4a4847] text-sm mb-6">
            Schedule a virtual or in-person consultation directly through our calendar.
          </p>
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/hello-juniperfieldsco"
            style={{ minWidth: '320px', height: '630px' }}
          ></div>
          <noscript>
            <p className="text-center text-sm text-red-500 mt-4">
              Calendly failed to load. Please make sure JavaScript is enabled or{" "}
              <a
                href="https://calendly.com/hello-juniperfieldsco"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-blue-600"
              >
                click here to book directly.
              </a>
            </p>
          </noscript>
        </motion.section>

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
          <p className="text-[#4a4847] italic">Our latest projects will appear here soon. Follow us on Instagram @juniperfieldsco.</p>
        </section>

      </main>

      <footer className="text-center text-xs text-[#857f79] py-8 border-t border-[#d8d3cb]">
        &copy; {new Date().getFullYear()} Juniper Fields Interiors. All rights reserved.
      </footer>
    </div>
  );
}
