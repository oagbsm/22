"use client";

import { useEffect, useState } from "react";
import ContactSection from "../components/ContactSection";

const starterPackItems = [
  {
    title: "Premium launch website",
    text: "A sharp, modern website designed to present your business clearly and make you look established from day one.",
    accent: "from-fuchsia-500 via-purple-500 to-orange-400",
  },
  {
    title: "Offer positioning",
    text: "We help shape how your service or business is presented so people understand what you do and why it matters.",
    accent: "from-sky-500 via-cyan-400 to-blue-500",
  },
  {
    title: "Enquiry focused structure",
    text: "Your pages are built around action, with a clean flow that helps visitors understand, trust, and contact you.",
    accent: "from-orange-400 via-amber-300 to-yellow-400",
  },
  {
    title: "Serious business presence",
    text: "The goal is not just to launch something online. It is to give your business a credible foundation that feels ready for the market.",
    accent: "from-emerald-400 via-teal-400 to-cyan-400",
  },
];

const reasons = [
  {
    title: "Clear launch presence",
    text: "A clean, credible website that explains your business properly and helps people trust you faster.",
  },
  {
    title: "Built for enquiries",
    text: "A structure designed to guide visitors toward contacting you instead of just browsing and leaving.",
  },
  {
    title: "Simple and ready",
    text: "A practical setup for founders who want to launch properly without wasting time on confusion.",
  },
];

export default function StartNowPage() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  useEffect(() => {
    document.title = "Business Starter Pack | City Consulting";

    const descriptionTag = document.querySelector('meta[name="description"]');
    if (descriptionTag) {
      descriptionTag.setAttribute(
        "content",
        "Launch your startup idea or small business with a premium business starter pack from City Consulting."
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
        <div className="absolute inset-0 z-0 opacity-70">
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

        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,6,10,0.82),rgba(5,6,10,0.96)),radial-gradient(circle_at_top_left,rgba(117,74,255,0.18),transparent_30%),radial-gradient(circle_at_top_right,rgba(255,140,66,0.14),transparent_28%)]" />
        <div className="absolute inset-x-0 bottom-[-140px] h-[360px] bg-[radial-gradient(circle,rgba(255,213,145,0.5),rgba(181,115,255,0.18)_34%,rgba(5,6,10,0)_70%)] blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-8 sm:px-8 lg:px-10 lg:pb-28">
          <div className="flex items-center justify-between rounded-full border border-white/10 bg-white/[0.05] px-5 py-4 backdrop-blur-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/78">
              City Consulting
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.05] px-5 py-2 text-sm font-semibold text-white transition hover:bg-white/[0.1]"
            >
              Enquire now
            </a>
          </div>

          <div className="grid gap-10 pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:pt-28">
            <div className="relative z-10">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/80">
                Business starter pack
              </p>

              <h1 className="mt-6 max-w-5xl text-5xl font-semibold leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
                Launch your startup idea or small business with a serious digital foundation
              </h1>

              <p className="mt-7 max-w-xl text-lg leading-8 text-white/88 sm:text-xl">
                We create a clean website and launch setup that helps your business look real, clear, and ready to win trust.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-base font-semibold text-black transition hover:scale-[1.01]"
                >
                  Start your pack
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/[0.05] px-7 py-3 text-base font-semibold text-white transition hover:bg-white/[0.1]"
                >
                  Talk to us
                </a>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-white/10 shadow-2xl shadow-fuchsia-950/20 backdrop-blur">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/30" />
              <div className="relative h-full p-6 sm:p-8">
                <div className="rounded-[1.9rem] border border-white/15 bg-[#0e111a]/75 p-6 shadow-2xl backdrop-blur-xl">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-orange-300/90">
                    What is included
                  </p>
                  <h3 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl">
                    What you get in the starter pack
                  </h3>

                  <div className="mt-8 grid gap-3">
                    {starterPackItems.map((item) => (
                      <div
                        key={item.title}
                        className="relative overflow-hidden rounded-[1.35rem] border border-white/10 bg-white/[0.06] p-[1px]"
                      >
                        <div className={`absolute inset-0 bg-gradient-to-r ${item.accent} opacity-90`} />
                        <div className="relative rounded-[1.3rem] bg-[#0b0d14] px-5 py-4">
                          <p className="text-lg font-semibold text-white sm:text-xl">{item.title}</p>
                          <p className="mt-2 text-sm leading-7 text-white/78 sm:text-base">{item.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
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
              We help founders launch with a strong first impression.
            </h2>
            <p className="mt-6 max-w-3xl text-base leading-8 text-[#4f5867] sm:text-lg">
              The starter pack gives you a polished business presence that explains your offer clearly and makes it easier for people to contact you.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {reasons.map((item) => (
              <div
                key={item.title}
                className="rounded-[1.75rem] border border-black/10 bg-[#f8f7fb] p-6 shadow-[0_18px_60px_rgba(15,23,42,0.08)]"
              >
                <h3 className="text-2xl font-semibold text-[#0a0d14]">{item.title}</h3>
                <p className="mt-4 text-base leading-8 text-[#4f5867]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#05060a] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-start">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 shadow-[0_18px_60px_rgba(0,0,0,0.18)] backdrop-blur">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-fuchsia-300/80">
                Who we are
              </p>
              <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                A team building serious digital foundations for new businesses.
              </h2>
              <p className="mt-6 text-base leading-8 text-white/78 sm:text-lg">
                City Consulting creates websites and digital systems that help businesses launch with more clarity, credibility, and structure.
              </p>
            </div>

            <div className="grid gap-6">
              <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.05] p-7 shadow-[0_18px_60px_rgba(0,0,0,0.22)] backdrop-blur">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-300/80">
                  Why we are different
                </p>
                <p className="mt-5 text-base leading-8 text-white/82 sm:text-lg">
                  We keep things simple, shape the message properly, and build something that feels credible from the start.
                </p>
              </div>

              <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-7">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
                  Why this works
                </p>
                <p className="mt-4 text-base leading-8 text-white/82">
                  Instead of overloading you, we focus on what matters most for an early business: clear presentation, trust, and a direct path to enquiry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white text-[#0a0d14]">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center sm:px-8 lg:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-fuchsia-600">
            Ready to launch
          </p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Tell us what you are building.
          </h2>
          <p className="mt-6 text-base leading-8 text-[#4f5867] sm:text-lg">
            Fill in the form below and we will help you shape the right starter pack.
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