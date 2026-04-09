"use client";

export default function FeaturedSolutions({ items }) {
  return (
    <section id="solutions" className="bg-[linear-gradient(180deg,#ffffff,#f7f8fc)] text-[#0a0d14]">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-fuchsia-600">
            Featured solutions
          </p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Active, premium, in-market solution concepts that feel real.
          </h2>
          <p className="mt-6 text-base leading-8 text-[#4f5867] sm:text-lg">
            These are positioned like real delivery capabilities — not fake portfolio mockups.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {items.map((project) => (
            <article
              key={project.title}
              className="overflow-hidden rounded-[2rem] border border-[#111827]/10 bg-white shadow-[0_18px_60px_rgba(15,23,42,0.06)]"
            >
              <div className="relative h-[320px] overflow-hidden">
                <video
                  className="h-full w-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster={project.image}
                >
                  <source src={project.video} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-black/20" />
                <div className="absolute left-6 top-6 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white backdrop-blur">
                  {project.category}
                </div>
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="text-3xl font-semibold tracking-tight text-white">
                    {project.title}
                  </h3>
                </div>
              </div>

              <div className="p-6">
                <p className="text-base leading-8 text-[#4f5867] sm:text-lg">
                  {project.description}
                </p>

                <div className="mt-6 space-y-3">
                  {project.bullets.map((bullet) => (
                    <div
                      key={bullet}
                      className="rounded-2xl border border-[#111827]/10 bg-[#f7f8fc] px-4 py-4 text-sm font-medium text-[#111827]"
                    >
                      {bullet}
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center rounded-full bg-[#0a0d14] px-6 py-3 text-sm font-semibold text-white"
                  >
                    Discuss This Solution
                  </a>
                  <a
                    href="mailto:hello@technology.cityconsulting.com"
                    className="inline-flex items-center justify-center rounded-full border border-[#111827]/10 px-6 py-3 text-sm font-semibold text-[#0a0d14]"
                  >
                    Request a Proposal
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
