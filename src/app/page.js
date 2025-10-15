"use client";

import React from "react";
import { Briefcase, Calculator, FileText, ClipboardList, DollarSign, TrendingUp } from "lucide-react";
import Link from "next/link";
// ...

export default function HomePage() { 
  // Bright orange used for headers, buttons and icons
  const brightOrange = "#ff7a33"; // rgb(255,122,51)

  const services = [
    {
      title: "Bookkeeping / Write-up Services",
      text: "Accurate record-keeping is essential and time-consuming — we handle it for you.",
      icon: <ClipboardList className="w-6 h-6" style={{ color: brightOrange }} />,
    },
    {
      title: "Accounting Services",
      text: "Accurate reporting and financial guidance to help you reach your goals.",
      icon: <Calculator className="w-6 h-6" style={{ color: brightOrange }} />,
    },
    {
      title: "Assurance & Advisory",
      text: "Close client relationships that add long-term value.",
      icon: <FileText className="w-6 h-6" style={{ color: brightOrange }} />,
    },
    {
      title: "Tax Consulting",
      text: "Strategic tax planning to minimize liabilities and ensure compliance.",
      icon: <Briefcase className="w-6 h-6" style={{ color: brightOrange }} />,
    },
    {
      title: "Payroll Services",
      text: "Reduce admin time and ensure payroll accuracy and compliance.",
      icon: <DollarSign className="w-6 h-6" style={{ color: brightOrange }} />,
    },
    {
      title: "Debt & Finance Advising",
      text: "Structured advice to optimize capital and debt strategies.",
      icon: <TrendingUp className="w-6 h-6" style={{ color: brightOrange }} />,
    },
  ];

  return (
    <div className="min-h-screen font-sans text-slate-800">
      {/* NAV */}
<header className="bg-white border-b">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex items-center justify-between h-20 flex-wrap gap-4">
      <div className="flex items-center gap-4 flex-shrink-0">
        <a href="#" className="flex items-center gap-3">
          <div className="w-20 h-12 relative overflow-hidden">
            <img src="/logo.png" alt="City Consulting logo" className="object-contain w-full h-full" />
          </div>
          <span className="sr-only">City Consulting</span>
        </a>
      </div>

 <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
  <Link href="#home" className="hover:underline">HOME</Link>
  <Link href="#about" className="hover:underline">ABOUT</Link>
  <Link href="#services" className="hover:underline">SERVICES</Link>
  <Link href="#contact" className="hover:underline">CONTACT</Link>
</nav>

<div className="flex items-center gap-4 w-full md:w-auto justify-end">
  <Link
    href="/login"
    className="inline-flex items-center gap-2 rounded-md px-4 py-2 text-white font-semibold shadow-md w-full md:w-auto justify-center"
    style={{ backgroundColor: brightOrange }}
  >
    Login
  </Link>

  <Link
    href="#contact"
    className="inline-flex items-center gap-2 rounded-md px-4 py-2 text-white font-semibold shadow-md w-full md:w-auto justify-center"
    style={{ backgroundColor: brightOrange }}
  >
    Request Free Guidance
  </Link>
</div>

    </div>
  </div>
</header>


      {/* HERO */}
      <section id="home" className="bg-[linear-gradient(180deg,#0f2540_0%,#0f2540_80%)] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight" style={{ color: brightOrange }}>
                Efficient Accounting Solutions to Grow Your Business
              </h1>
              <p className="mt-4 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 opacity-90">
                City Consulting LLC provides a wide range of services for individuals and businesses — from tax
                management and bookkeeping to audits and financial planning. Let our experienced team handle the
                numbers so you can focus on running your business.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start">
                <a
                  href="#contact"
                  className="rounded-md px-5 py-3 text-white font-semibold shadow hover:opacity-95"
                  style={{ backgroundColor: brightOrange }}
                >
                  Schedule Free Guidance
                </a>
                <a href="#about" className="text-white/90 underline">
                  Learn More
                </a>
              </div>

              <dl className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-xl mx-auto lg:mx-0">
                <div className="text-center">
                  <dt className="text-2xl font-bold">30+</dt>
                  <dd className="text-sm mt-1">Years Track Record</dd>
                </div>
                <div className="text-center">
                  <dt className="text-2xl font-bold">1,500+</dt>
                  <dd className="text-sm mt-1">Professionals</dd>
                </div>
                <div className="text-center">
                  <dt className="text-2xl font-bold">20,000+</dt>
                  <dd className="text-sm mt-1">Clients Worldwide</dd>
                </div>
                <div className="text-center">
                  <dt className="text-2xl font-bold">100%</dt>
                  <dd className="text-sm mt-1">Confidential</dd>
                </div>
              </dl>
            </div>

            <div className="lg:col-span-6">
              <div className="w-full h-64 sm:h-72 lg:h-96 rounded-lg bg-orange-50 border border-orange-200 flex items-center justify-center">
                  {/* <div className="w-40 h-24 mx-auto bg-gray-200 rounded-md"></div> */}
                  <img src="/placeholder.png" alt="City Consulting logo" className=" w-full h-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold" style={{ color: brightOrange }}>
              We Cover An Array Of Individual & Corporate Services
            </h2>
            <p className="mt-3 text-slate-600">
              Tailored accounting, payroll, tax, assurance and advisory services designed for businesses of all sizes.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <article key={s.title} className="p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: "rgba(255,122,51,0.12)" }}>
                  {s.icon}
                </div>
                <h3 className="mt-4 font-semibold text-lg" style={{ color: brightOrange }}>
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">{s.text}</p>
                <a href="#contact" className="mt-4 inline-block font-medium" style={{ color: brightOrange }}>
                  Learn more →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-[rgba(15,37,64,1)] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold" style={{ color: brightOrange }}>
              Contact Info
            </h3>
            <p className="mt-3 text-slate-200 max-w-lg">
              1395 E. Dublin Granville Rd STE 222E, Columbus OH 43229
              <br /> cityconsultingllc@gmail.com
              <br /> +1 (614) 318-2825
            </p>
          </div>

          <div>
            <div className="bg-white text-[rgba(15,37,64,1)] rounded-lg p-6">
              <h4 className="font-semibold" style={{ color: brightOrange }}>
                Request Free Guidance
              </h4>
              <p className="text-sm mt-1">Fill out the form and we will contact you shortly.</p>

              <form className="mt-4 space-y-3" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="text-sm">Full name</label>
                  <input name="name" className="w-full mt-1 p-2 rounded border" placeholder="Your name" />
                </div>
                <div>
                  <label className="text-sm">Email</label>
                  <input name="email" className="w-full mt-1 p-2 rounded border" placeholder="you@example.com" />
                </div>
                <div>
                  <label className="text-sm">Message</label>
                  <textarea name="message" className="w-full mt-1 p-2 rounded border" rows={4} placeholder="How can we help?" />
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                  <button type="submit" className="px-4 py-2 rounded text-white font-medium w-full sm:w-auto" style={{ backgroundColor: brightOrange }}>
                    Send
                  </button>
                  <p className="text-sm text-white/70 text-center sm:text-left">
                    Or email us at cityconsultingllc@gmail.com
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="text-sm text-slate-600">©2025 - City Consulting LLC - All Rights Reserved.</div>
          <div className="text-sm text-slate-600">1395 E. Dublin Granville Rd STE 222E, Columbus OH 43229</div>
        </div>
      </footer>
    </div>
  );
}
