export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-[#05060a] text-white flex items-center justify-center px-6">
      <div className="relative max-w-xl w-full text-center">
        {/* Glow background */}
        <div className="absolute inset-0 blur-3xl opacity-40 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.6),transparent_60%)]" />

        <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.05] backdrop-blur-xl p-10 shadow-[0_20px_80px_rgba(0,0,0,0.4)]">
          <p className="text-sm uppercase tracking-[0.25em] text-white/60">
            Request received
          </p>

          <h1 className="mt-4 text-3xl sm:text-4xl font-semibold leading-tight">
            Thanks — we’ll get back to you shortly
          </h1>

          <p className="mt-6 text-[16px] leading-7 text-white/75 font-medium">
            Your request has been received. We will review what you sent and reach out with the next steps.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <a
              href="https://technology.cityconsulting.com"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:scale-[1.02]"
            >
              Back to home
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}