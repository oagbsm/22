"use client";

import { useEffect, useState } from "react";
import ContactSection from "../components/ContactSection";

const points = [
  {
    title: "Websites",
    text: "Clean, credible websites built to help businesses look serious and convert better.",
  },
  {
    title: "Business systems",
    text: "Internal tools, dashboards, portals, and workflows designed around how your business actually runs.",
  },
  {
    title: "Bespoke software",
    text: "Custom software for businesses that need something more specific than off the shelf tools.",
  },
];

export default function FiverrPage() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  useEffect(() => {
    document.title = "Tired of Fiverr | City Consulting";

    const descriptionTag = document.querySelector('meta[name="description"]');
    if (descriptionTag) {
      descriptionTag.setAttribute(
        "content",
        "Tired of Fiverr? Work with City Consulting for websites, business systems, and bespoke software built properly."
      );
    }

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 150);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="min-h-screen bg-[#05060a] text-white scroll-smooth">
      <section className="relative overflow-hidden border-b border-white/10 bg-[#05060a]">
        <div className="absolute inset-0 z-0 opacity-50">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover scale-110"
          >
            <source src="/media2.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,6,10,0.7),rgba(5,6,10,0.9)),radial-gradient(circle_at_top_left,rgba(117,74,255,0.08),transparent_30%),radial-gradient(circle_at_top_right,rgba(255,140,66,0.06),transparent_28%)]" />

        <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-8 sm:px-8 lg:px-10 lg:pb-24">
          <div className="flex items-center justify-between rounded-full border border-white/10 bg-white/[0.05] px-5 py-4 backdrop-blur-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/78">
              City Consulting
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.05] px-5 py-2 text-sm font-semibold text-white transition hover:bg-white/[0.1]"
            >
              Contact us
            </a>
          </div>

          <div className="grid gap-10 pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:pt-24">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/80">
                Tired of Fiverr
              </p>
              <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
                Stop gambling on freelancers. Build it properly.
              </h1>
              <p className="mt-7 max-w-lg text-[17px] leading-7 font-medium text-white/80 sm:text-lg">
                We build websites, business systems, and bespoke software for businesses that want serious execution.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-base font-semibold text-black transition hover:scale-[1.01]"
                >
                  Start your project
                </a>
                <a
                  href="#what-we-do"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/[0.05] px-7 py-3 text-base font-semibold text-white transition hover:bg-white/[0.1]"
                >
                  See what we do
                </a>
              </div>
            </div>


          </div>
        </div>
      </section>

      <section
        id="what-we-do"
        className="border-b border-black/10 bg-white text-[#0a0d14]"
      >
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-fuchsia-600">
              What we do
            </p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              We do more than basic website work.
            </h2>
            <p className="mt-6 max-w-2xl text-[16px] leading-7 font-medium text-[#5a6475] sm:text-[17px]">
              If you need something clean, custom, and properly built, we can help.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {points.map((item) => (
              <div
                key={item.title}
                className="rounded-[1.75rem] border border-black/10 bg-[#f8f7fb] p-6 shadow-[0_18px_60px_rgba(15,23,42,0.08)]"
              >
                <h3 className="text-2xl font-semibold text-[#0a0d14]">{item.title}</h3>
                <p className="mt-3 text-[15px] leading-7 font-medium text-[#5a6475]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#05060a] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 shadow-[0_18px_60px_rgba(0,0,0,0.18)] backdrop-blur">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-fuchsia-300/80">
                Why clients move away from Fiverr
              </p>
              <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Delays, weak communication, and results that do not hold up.
              </h2>
              <p className="mt-5 text-[16px] leading-7 font-medium text-white/75 sm:text-[17px]">
                We offer a more serious alternative for businesses that want proper communication, stronger quality, and work that is built to last.
              </p>
            </div>

            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80"
              alt="Modern software workflow on screens"
              className="h-[360px] w-full rounded-[2rem] border border-white/10 object-cover shadow-[0_18px_60px_rgba(0,0,0,0.24)]"
            />
          </div>
        </div>
      </section>

      <section className="bg-white text-[#0a0d14]">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center sm:px-8 lg:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-fuchsia-600">
            Ready to move properly
          </p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Tell us what you need.
          </h2>
          <p className="mt-5 text-[16px] leading-7 font-medium text-[#5a6475] sm:text-[17px]">
            Use the form below and we will review your project.
          </p>
        </div>
      </section>

      <div id="contact">
        <ContactSection />
      </div>

      <button
        type="button"
        aria-label="Scroll to top"
        onClick={scrollToTop}
        className={`fixed bottom-5 right-5 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-white text-black shadow-[0_10px_30px_rgba(0,0,0,0.18)] transition-all duration-300 hover:scale-105 ${
          showScrollTop
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-3 pointer-events-none"
        }`}
      >
        ↑
      </button>
    </main>
  );
}