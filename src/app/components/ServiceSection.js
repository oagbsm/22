"use client";

import { useEffect, useMemo } from "react";
import ServiceIcon from "./ServiceIcon";
import PlusIcon from "./PlusIcon";

const colorSets = [
  { accent: "from-red-400 to-orange-400", badge: "bg-red-500/10 text-red-300 border-red-400/20", cta: "bg-red-400" },
  { accent: "from-orange-400 to-amber-400", badge: "bg-orange-500/10 text-orange-300 border-orange-400/20", cta: "bg-orange-400" },
  { accent: "from-yellow-400 to-lime-400", badge: "bg-yellow-500/10 text-yellow-300 border-yellow-400/20", cta: "bg-yellow-400" },
  { accent: "from-green-400 to-emerald-400", badge: "bg-green-500/10 text-green-300 border-green-400/20", cta: "bg-green-400" },
  { accent: "from-blue-400 to-sky-400", badge: "bg-blue-500/10 text-blue-300 border-blue-400/20", cta: "bg-blue-400" },
  { accent: "from-indigo-400 to-purple-400", badge: "bg-indigo-500/10 text-indigo-300 border-indigo-400/20", cta: "bg-indigo-400" },
  { accent: "from-purple-400 to-pink-400", badge: "bg-purple-500/10 text-purple-300 border-purple-400/20", cta: "bg-purple-400" },
];

function normalizeServiceName(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

export default function ServiceSection({
  services,
  expandedService,
  setExpandedService,
}) {
  useEffect(() => {
    const applyServiceFromUrl = () => {
      const params = new URLSearchParams(window.location.search);
      const requestedService = params.get("service");
      if (!requestedService) return;

      const normalizedRequested = normalizeServiceName(requestedService);

      const matchedIndex = services.findIndex((service) => {
        const normalizedTitle = normalizeServiceName(service.title);
        const normalizedShort = normalizeServiceName(service.short);
        return (
          normalizedTitle.includes(normalizedRequested) ||
          normalizedRequested.includes(normalizedTitle) ||
          normalizedShort.includes(normalizedRequested)
        );
      });

      if (matchedIndex >= 0) {
        setExpandedService(matchedIndex);

        setTimeout(() => {
          const section = document.getElementById("services");
          if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 100);
      }
    };

    applyServiceFromUrl();
    window.addEventListener("popstate", applyServiceFromUrl);

    return () => window.removeEventListener("popstate", applyServiceFromUrl);
  }, [services, setExpandedService]);

  const activeService = useMemo(
    () => services[expandedService] ?? null,
    [services, expandedService]
  );

  return (
    <section id="services" className="relative overflow-hidden bg-[#05060a] text-white">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="absolute left-[-120px] top-20 h-72 w-72 rounded-full bg-fuchsia-500/10 blur-3xl" />
      <div className="absolute right-[-120px] top-40 h-72 w-72 rounded-full bg-orange-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-orange-300/85">
              Services
            </p>
            <h2 className="mt-5 max-w-xl text-4xl font-bold leading-[0.96] tracking-tight text-white sm:text-5xl lg:text-6xl">
              More than a service list. This is what we can actually build for you.
            </h2>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 shadow-[0_18px_60px_rgba(0,0,0,0.18)] backdrop-blur">
            <p className="text-sm leading-8 text-white/78 sm:text-lg">
              Every service here is built around real business use — not just features, but systems designed to bring in clients, streamline operations, and give you an edge where it actually counts.
            </p>
          </div>
        </div>

        {activeService ? (
          <div className="mt-10 rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-6 shadow-[0_20px_70px_rgba(0,0,0,0.22)] sm:p-7">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-300/90">
                  Currently exploring
                </p>
                <h3 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  {activeService.title}
                </h3>
                <p className="mt-4 max-w-3xl text-base leading-8 text-white/76 sm:text-lg">
                  {activeService.short}
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:scale-[1.01]"
                >
                  {activeService.cta}
                </a>
                <a
                  href="mailto:hello@technology.cityconsulting.com"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/[0.05] px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/[0.1]"
                >
                  Request more details
                </a>
              </div>
            </div>
          </div>
        ) : null}

        <div className="mt-10 space-y-5">
          {services.map((service, index) => {
            const isOpen = expandedService === index;
            const colors = colorSets[index % colorSets.length];

            return (
              <div
                key={service.title}
                className={`overflow-hidden rounded-[1.9rem] border transition-all duration-300 ${
                  isOpen
                    ? "border-white/18 bg-[linear-gradient(180deg,rgba(255,255,255,0.11),rgba(255,255,255,0.05))] shadow-[0_22px_80px_rgba(0,0,0,0.22)]"
                    : "border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.025))]"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setExpandedService(isOpen ? -1 : index)}
                  className="flex w-full items-start justify-between gap-4 px-6 py-6 text-left sm:px-7 sm:py-7"
                >
                  <div className="flex min-w-0 items-start gap-4 sm:gap-5">
                    <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br ${colors.accent} text-white shadow-[0_10px_30px_rgba(0,0,0,0.16)]`}>
                      <ServiceIcon type={service.icon} />
                    </div>

                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className={`rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] ${colors.badge}`}>
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <h3 className="text-2xl font-semibold tracking-tight text-white sm:text-[1.75rem]">
                          {service.title}
                        </h3>
                      </div>
                      <p className="mt-3 max-w-3xl text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
                        {service.short}
                      </p>
                    </div>
                  </div>

                  <div className="shrink-0">
                    <PlusIcon open={isOpen} />
                  </div>
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-white/10 px-6 py-6 sm:px-7 sm:py-7">
                      <div className="grid gap-8 lg:grid-cols-[1fr_320px] lg:items-start">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-300/90">
                            Included in this build
                          </p>
                          <div className="mt-4 grid gap-3 sm:grid-cols-2">
                            {service.details.map((detail) => (
                              <div
                                key={detail}
                                className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 text-sm leading-7 text-white/78 shadow-[0_10px_25px_rgba(0,0,0,0.12)]"
                              >
                                {detail}
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.05] p-5 shadow-[0_16px_45px_rgba(0,0,0,0.18)]">
                          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-300/90">
                            Start this build
                          </p>
                          <p className="mt-3 text-sm leading-7 text-white/74">
                            If this is what you're aiming to build, we’ll break it down, map it properly, and get it moving without unnecessary delays.
                          </p>
                          <div className="mt-5 flex flex-col gap-3">
                            <a
                              href="#contact"
                              className={`inline-flex items-center justify-center rounded-full ${colors.cta} px-6 py-3 text-sm font-semibold text-black transition hover:scale-[1.01]`}
                            >
                              {service.cta}
                            </a>
                            <a
                              href="https://wa.me/"
                              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/[0.05] px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/[0.1]"
                            >
                              Chat on WhatsApp
                            </a>
                            <a
                              href="mailto:hello@technology.cityconsulting.com"
                              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/[0.05] px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/[0.1]"
                            >
                              Email Us
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}