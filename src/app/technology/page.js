"use client";

import { useEffect, useMemo, useState } from "react";
import TechnologyHeader from "../components/TechnologyHeader";
import FeaturedSolutions from "../components/FeaturedSolutions";
import ServiceSection from "../components/ServiceSection";

import {
  rotatingServices,
  heroChips,
  stats,
  logoCompanies,
  serviceDropdownSections,
  services,
  featuredSolutions,
  actionBlocks,
} from "./data";


export default function TechnologyPage() {
const [activeService, setActiveService] = useState(0);
const [servicesMenuOpen, setServicesMenuOpen] = useState(false);
const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
const [expandedService, setExpandedService] = useState(0);
const [showScrollTop, setShowScrollTop] = useState(false);

const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  useEffect(() => {
    document.title =
      "Technology.CityConsulting | Bespoke Tech, Web & POS Solutions";

    const descriptionTag = document.querySelector('meta[name="description"]');
    if (descriptionTag) {
      descriptionTag.setAttribute(
        "content",
        "Premium web development, bespoke software, automation, cybersecurity support, and POS systems for ambitious businesses worldwide."
      );
    }

    const interval = setInterval(() => {
      setActiveService((current) => (current + 1) % rotatingServices.length);
    }, 2200);

    const handleScroll = () => {
  setShowScrollTop(window.scrollY > 150);
};

handleScroll();
window.addEventListener("scroll", handleScroll);

return () => {
  clearInterval(interval);
  window.removeEventListener("scroll", handleScroll);
};
  }, []);

  const activeServiceTitle = useMemo(
    () => rotatingServices[activeService],
    [activeService]
  );

  return (
    <main className="min-h-screen bg-[#05060a] text-white scroll-smooth">
      <section className="relative overflow-hidden border-b border-white/10 bg-[#05060a]">
<div className="absolute inset-0 z-0 opacity-80">          <video
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover scale-110"
          >
            <source src="/media2.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,6,10,0.75),rgba(5,6,10,0.9)),radial-gradient(circle_at_top_left,rgba(117,74,255,0.22),transparent_28%),radial-gradient(circle_at_top_right,rgba(255,140,66,0.20),transparent_26%),radial-gradient(circle_at_bottom,rgba(255,255,255,0.08),transparent_35%)]" />
        <div className="absolute inset-x-0 bottom-[-140px] h-[360px] bg-[radial-gradient(circle,rgba(255,213,145,0.95),rgba(181,115,255,0.35)_34%,rgba(5,6,10,0)_70%)] blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-6 sm:px-8 lg:px-10 lg:pb-28">
<TechnologyHeader
  servicesMenuOpen={servicesMenuOpen}
  setServicesMenuOpen={setServicesMenuOpen}
  mobileMenuOpen={mobileMenuOpen}
  setMobileMenuOpen={setMobileMenuOpen}
  mobileServicesOpen={mobileServicesOpen}
  setMobileServicesOpen={setMobileServicesOpen}
  serviceDropdownSections={serviceDropdownSections}
/>

          <div className="grid gap-10 pt-28 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:pt-32">
            <div className="relative z-10">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/80">
                Premium technology partner for ambitious businesses
              </p>

              <h1 className="mt-6 max-w-5xl text-5xl font-semibold leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
                Build your business with
                <span className="block min-h-[1.15em] bg-gradient-to-r from-fuchsia-400 via-orange-300 to-orange-500 bg-clip-text text-transparent transition-all duration-500">
                  {activeServiceTitle}
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/90 sm:text-xl">
                We create elite websites, bespoke software, POS systems,
                automation, and security-conscious digital infrastructure for
                businesses that want to look sharper, move faster, and close
                more clients.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-base font-semibold text-black transition hover:scale-[1.01]"
                >
                  Book a Free Strategy Call
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/[0.05] px-7 py-3 text-base font-semibold text-white transition hover:bg-white/[0.1]"
                >
                  Explore Services
                </a>
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                {heroChips.map((service, index) => (
                  <span
                    key={service}
                    className={`rounded-full border px-4 py-2 text-sm font-medium transition-all duration-500 ${
                      index === activeService
                        ? "border-orange-300/60 bg-white text-[#111111]"
                        : "border-white/15 bg-white/[0.05] text-white/82"
                    }`}
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-black/30 shadow-2xl shadow-fuchsia-950/20 backdrop-blur">
              <div className="absolute inset-0 bg-gradient-to-br from-black/65 via-black/25 to-black/60" />
              <video
                className="h-[420px] w-full object-cover sm:h-[520px]"
                autoPlay
                muted
                loop
                playsInline
                poster="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80"
              >
                <source src="/videos/technology-hero.mp4" type="video/mp4" />
              </video>

              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.18),transparent_25%),radial-gradient(circle_at_bottom_left,rgba(168,85,247,0.18),transparent_25%)]" />

              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <div className="max-w-md rounded-[1.5rem] border border-white/10 bg-[#0e111a]/80 p-5 shadow-2xl backdrop-blur-xl">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-orange-300/90">
                    Now delivering
                  </p>
                  <p className="mt-3 text-2xl font-semibold leading-tight text-white">
                    Premium websites, bespoke systems, POS platforms, and
                    automation designed to convert.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative mt-16 rounded-[2rem] border border-white/10 bg-white/[0.06] px-6 py-7 shadow-[0_18px_60px_rgba(0,0,0,0.22)] backdrop-blur sm:px-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/75">
              Inspired by the standard of world-class technology brands
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8">
              {logoCompanies.map((logo) => (
                <div
                  key={logo.name}
                  className="flex items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-4 text-center text-white"
                >
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="h-5 w-5 object-contain opacity-95"
                  />
                  <span className="text-sm font-semibold">{logo.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((item) => (
              <div
                key={item}
                className="rounded-[1.5rem] border border-white/15 bg-white/[0.12] px-5 py-5 text-sm font-semibold leading-7 text-white shadow-[0_10px_35px_rgba(0,0,0,0.28)] backdrop-blur"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[linear-gradient(180deg,#05060a,#0b0d14)]">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-3">
            {actionBlocks.map((block) => (
              <div
                key={block.title}
                className="rounded-[1.75rem] border border-white/10 bg-white/[0.05] p-6 shadow-[0_18px_60px_rgba(0,0,0,0.18)]"
              >
                <h3 className="text-xl font-semibold text-white">
                  {block.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-white/74">
                  {block.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-base font-semibold text-black transition hover:scale-[1.01]"
            >
              Start Your Project
            </a>
            <a
              href="#solutions"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/[0.05] px-7 py-3 text-base font-semibold text-white transition hover:bg-white/[0.1]"
            >
              See Live-Style Solutions
            </a>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="bg-[linear-gradient(180deg,#ffffff,#fbf8ff)] text-[#0a0d14]"
      >
        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-fuchsia-600">
              About us
            </p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              We blend premium presentation with business-first execution.
            </h2>
            <p className="mt-6 text-base leading-8 text-[#4f5867] sm:text-lg">
              Technology.CityConsulting exists to help serious businesses
              compete at a higher level. We combine polished design direction
              inspired by top global agencies with practical engineering that
              improves sales, operations, and scale. The goal is simple: make
              your company look elite and perform like it.
            </p>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="rounded-[2rem] bg-[#f5f6fb] p-5 shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1400&q=80"
                alt="Agency team meeting"
                className="h-[420px] w-full rounded-[1.5rem] object-cover"
              />
            </div>
            <div>
              <p className="inline-flex rounded-full border border-[#111827]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#111827]/70">
                Why clients choose us
              </p>
              <h3 className="mt-6 max-w-2xl text-4xl font-bold leading-[0.98] tracking-tight text-[#0a0d14] sm:text-5xl lg:text-6xl">
                We build the bridge between bold business ambitions and the
                systems required to win.
              </h3>
              <p className="mt-6 max-w-2xl text-base leading-8 text-[#4f5867] sm:text-lg">
                Unlike generic agencies, we are not trying to sell you design
                for the sake of design. We build assets that support lead
                generation, internal efficiency, stronger customer experience,
                and smarter long-term growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ServiceSection
        services={services}
        expandedService={expandedService}
        setExpandedService={setExpandedService}
      />

      <FeaturedSolutions items={featuredSolutions} />

      <section className="bg-[linear-gradient(180deg,#05060a,#0b0d14)] text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-24 sm:px-8 lg:grid-cols-[1fr_1fr] lg:px-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-300/80">
              POS & bespoke systems
            </p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Need something more specialized? We build for that too.
            </h2>
            <p className="mt-6 text-base leading-8 text-white/78 sm:text-lg">
              For retail, hospitality, service businesses, and operations-heavy
              teams, we create POS systems and bespoke software that fit the
              business instead of forcing the business to fit the software.
            </p>
            <div className="mt-8 space-y-4 text-white/82">
              <p>• Inventory tracking and reporting dashboards</p>
              <p>• Multi-branch sales visibility and role-based access</p>
              <p>• Customer credit, payment, and workflow modules</p>
              <p>• Tailored admin systems for your exact operation</p>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-base font-semibold text-black transition hover:scale-[1.01]"
              >
                Talk About a Bespoke Build
              </a>
              <a
                href="mailto:hello@technology.cityconsulting.com"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/[0.05] px-7 py-3 text-base font-semibold text-white transition hover:bg-white/[0.1]"
              >
                Send Requirements
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-5 shadow-[0_18px_60px_rgba(0,0,0,0.24)] backdrop-blur">
            <video
              className="h-[420px] w-full rounded-[1.5rem] object-cover"
              autoPlay
              muted
              loop
              playsInline
              poster="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80"
            >
              <source src="/videos/business-systems.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="bg-[linear-gradient(180deg,#ffffff,#f6f4ff)] text-[#0a0d14]"
      >
        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-10">
          <div className="rounded-[2.2rem] border border-[#111827]/10 bg-white p-10 shadow-[0_30px_80px_rgba(15,23,42,0.08)] sm:p-14">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-fuchsia-600">
                Let’s build something world-class
              </p>
              <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Your next website, platform, POS system, or bespoke build starts
                here.
              </h2>
              <p className="mt-6 text-base leading-8 text-[#4f5867] sm:text-lg">
                Tell us what you are building, what is broken, or where you want
                to grow. We will help you shape the right technology solution
                and move fast.
              </p>
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="mailto:hello@technology.cityconsulting.com"
                className="inline-flex items-center justify-center rounded-full bg-[#0a0d14] px-7 py-3 text-base font-semibold text-white transition hover:opacity-95"
              >
                hello@technology.cityconsulting.com
              </a>
              <a
                href="https://wa.me/"
                className="inline-flex items-center justify-center rounded-full border border-[#111827]/10 px-7 py-3 text-base font-semibold text-[#0a0d14] transition hover:bg-[#fafafa]"
              >
                Chat on WhatsApp
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-full border border-[#111827]/10 px-7 py-3 text-base font-semibold text-[#0a0d14] transition hover:bg-[#fafafa]"
              >
                Review Services Again
              </a>
            </div>
          </div>
        </div>
      </section>
<button
  type="button"
  aria-label="Scroll to top"
  onClick={scrollToTop}
  className={`fixed bottom-5 right-5 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.3)] transition-all duration-300 hover:scale-105 ${
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