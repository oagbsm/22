"use client";

export default function TechnologyHeader({
  servicesMenuOpen,
  setServicesMenuOpen,
  mobileMenuOpen,
  setMobileMenuOpen,
  mobileServicesOpen,
  setMobileServicesOpen,
  serviceDropdownSections,
}) {
  return (
    <>
      <header className="fixed left-1/2 top-4 z-50 flex w-[calc(100%-1.5rem)] max-w-7xl -translate-x-1/2 items-center justify-between rounded-full border border-white/15 bg-black/55 px-4 py-3 shadow-[0_16px_50px_rgba(0,0,0,0.32)] backdrop-blur-2xl sm:w-[calc(100%-2rem)] sm:px-5">

        <a
          href="/technology"
          className="text-sm font-semibold tracking-tight text-white sm:text-lg"
        >
          IT Solutions
        </a>

        <nav className="hidden items-center gap-8 text-sm text-white/80 lg:flex lg:h-11">
          <a href="/technology" className="inline-flex h-11 items-center transition hover:text-white">
            Home
          </a>
          <div
            className="relative inline-flex h-11 items-center"
            onMouseEnter={() => setServicesMenuOpen(true)}
            onMouseLeave={() => setServicesMenuOpen(false)}
          >
            <button
              type="button"
              onClick={() => setServicesMenuOpen((prev) => !prev)}
              className="inline-flex h-11 items-center gap-2 transition hover:text-white"
            >
              Services
              <span className="text-white/60">▾</span>
            </button>

            <div
              className={`absolute left-1/2 top-full mt-0 w-[1100px] -translate-x-1/2 rounded-[1.75rem] border border-white/10 bg-white text-[#0a0d14] shadow-[0_24px_80px_rgba(15,23,42,0.22)] transition-all duration-200 ${
                servicesMenuOpen
                  ? "pointer-events-auto visible translate-y-0 opacity-100"
                  : "pointer-events-none invisible translate-y-2 opacity-0"
              }`}
            >
              <div className="grid grid-cols-3 overflow-hidden rounded-[1.75rem]">
                {serviceDropdownSections.map((section, index) => (
                  <div
                    key={section.label}
                    className={`p-8 ${
                      index < serviceDropdownSections.length - 1
                        ? "border-r border-[#111827]/10"
                        : ""
                    } ${index === 2 ? "bg-[#f5f7fc]" : "bg-white"}`}
                  >
                    <p className="mb-5 text-sm font-semibold uppercase tracking-[0.16em] text-[#2563eb]">
                      {section.label}
                    </p>
                    <div className="space-y-4">
                      {section.items.map((item) => (
                        <a
                          key={item}
                          href={`/technology?service=${encodeURIComponent(item)}#services`}
                          onClick={() => setServicesMenuOpen(false)}
                          className="block text-[15px] font-medium text-[#111827] transition hover:text-[#2563eb]"
                        >
                          {item}
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <a href="#solutions" className="inline-flex h-11 items-center transition hover:text-white">
            Solutions
          </a>
          <a href="#about" className="inline-flex h-11 items-center transition hover:text-white">
            About
          </a>
          <a
            href="#contact"
            className="inline-flex h-11 items-center rounded-full border border-orange-300/40 px-4 py-2 text-white transition hover:bg-white/10"
          >
            Contact
          </a>
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => {
            setMobileMenuOpen((prev) => !prev);
            setMobileServicesOpen(false);
          }}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white lg:hidden"
        >
          <span className="text-lg">☰</span>
        </button>
      </header>

      <div
        className={`fixed left-1/2 top-[5.5rem] z-40 w-[calc(100%-1.5rem)] max-w-7xl -translate-x-1/2 rounded-[1.5rem] border border-white/10 bg-[#0b0d14]/95 p-5 shadow-[0_18px_60px_rgba(0,0,0,0.28)] backdrop-blur-2xl transition-all duration-200 lg:hidden ${
          mobileMenuOpen
            ? "pointer-events-auto visible opacity-100"
            : "pointer-events-none invisible opacity-0"
        }`}
      >
        <div className="space-y-5">
          <a
            href="/technology"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-semibold text-white"
          >
            Home
          </a>
          <button
            type="button"
            onClick={() => setMobileServicesOpen((prev) => !prev)}
            className="flex w-full items-center justify-between text-left text-base font-semibold text-white"
          >
            <span>Services</span>
            <span
              className={`transition-transform duration-200 ${
                mobileServicesOpen ? "rotate-180" : ""
              }`}
            >
              ▾
            </span>
          </button>

          <div
            className={`grid transition-all duration-300 ${
              mobileServicesOpen
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <div className="grid gap-5 rounded-[1.25rem] border border-white/10 bg-white/[0.04] p-4 sm:grid-cols-2">
                {serviceDropdownSections.map((section) => (
                  <div key={section.label}>
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-orange-300/90">
                      {section.label}
                    </p>
                    <div className="space-y-2">
                      {section.items.map((item) => (
                        <a
                          key={item}
                          href={`/technology?service=${encodeURIComponent(item)}#services`}
                          onClick={() => {
                            setMobileServicesOpen(false);
                            setMobileMenuOpen(false);
                          }}
                          className="block text-sm text-white/80 transition hover:text-white"
                        >
                          {item}
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <a
            href="#solutions"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-semibold text-white"
          >
            Solutions
          </a>
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-semibold text-white"
          >
            About
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="inline-flex w-full items-center justify-center rounded-full border border-orange-300/40 px-4 py-3 text-base font-semibold text-white transition hover:bg-white/10"
          >
            Contact
          </a>
        </div>
      </div>
    </>
  );
}