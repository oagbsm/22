"use client";

import React, { useState, useEffect , useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
export default function CityConsultingHome() {
  const accent = "#ff7a33";
  const darkBlue = "#0f2540";
  const brightOrange = "#ff7a33";
  const [openService, setOpenService] = useState(null);
  const [showTop, setShowTop] = useState(false);
const formRef = useRef();
const [loading, setLoading] = useState(false);
const [success, setSuccess] = useState("");
const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

const handleSubmit = (e) => {
  e.preventDefault();
  setLoading(true);
  setSuccess("");

  emailjs
    .sendForm(
      "service_yhwl3xd",    // Your Service ID
      "template_82oslid",   // Your Template ID
      formRef.current,      // Form reference
      "gW6_TEFUvY4bT-hD7"  // Your Public Key
    )
    .then(
      (result) => {
        console.log(result.text);
        setSuccess("Message sent successfully!");
        e.target.reset();
      },
      (error) => {
        console.log(error.text);
        setSuccess("Oops! Something went wrong.");
      }
    )
    .finally(() => setLoading(false));
};

  useEffect(() => {
    function onScroll() {
      setShowTop(window.scrollY > 600);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const services = [
    {
      id: "quickbooks",
      title: "QuickBooks Accounting Help and Assistance",
      short:
        "QuickBooks delivers powerful financial statements and reports when set up and used correctly. We not only install the software — we make it work for you.",
      details:
        `QuickBooks solutions we offer:\n
• Personal Training — one-on-one or group on-site training so your team uses QuickBooks efficiently.\n
• Installation — selecting and installing the correct QuickBooks product for your needs.\n
• Setup — company setup, chart of accounts, tax setup, and chart mapping for accurate reporting.\n
• Support — ongoing technical and bookkeeping support to keep QuickBooks working smoothly.\n
• Review — periodic review and clean-up of your books to ensure reports are reliable and reconciled.\n
We train your staff either at your location or remotely, and tailor the setup to your workflows so reports and dashboards show the exact KPIs you need.`,
      image:
        "https://images.unsplash.com/photo-1559526324-593bc073d938?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&s=4f2c5d2b3f8a1f0f2d6b1b9a1f1d3c8a",
    },
    {
      id: "assurance",
      title: "Assurance and Advisory Services",
      short:
        "Objective analysis, audits, and advisory to improve information quality and drive better decisions.",
      details:
        `We focus on building close client relationships that add long-term value. Our assurance and advisory services include:\n
• Audits, reviews, and compilations (tailored to the level of assurance needed).\n• Entity selection and restructuring advice.\n• Accounting software selection, implementation, and support.\n• Business valuations and transaction advisory.\n• Debt and financing advising, mergers & acquisitions support.\n• Transaction structuring and negotiations.\n• Business succession planning and financial projections and forecasts.\n
These services improve the reliability of your financial information and provide the insights you need to grow with confidence.`,
      image:
        "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&s=9f7e3b2f3f0a5c6d8a9b3e4b2a5c7d6e",
    },
    {
      id: "bookkeeping",
      title: "Bookkeeping / Write-up",
      short:
        "Accurate day-to-day record-keeping so you can focus on running your business.",
      details:
        `We organize your books and perform write-ups so transactions are recorded timely and correctly. Services include:\n
• Accounts payable and receivable processing.\n• Bank and credit card reconciliations.\n• Monthly financial statement preparation.\n• Adjusting entries and closing procedures.\n• Clean-up and catch-up accounting for businesses behind on records.\n
Good bookkeeping is the foundation of trustworthy financial reporting and better business decisions.`,
      image:
        "https://images.unsplash.com/photo-1559526324-593bc073d938?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=abcd",
    },
    {
      id: "payroll",
      title: "Payroll Services",
      short:
        "Reliable payroll processing that saves time and reduces compliance risk.",
      details:
        `Our payroll services help you implement and run computerized payroll systems, including:\n
• Payroll processing and tax filings.\n• Employee and contractor payments.\n• Year-end W-2/1099 preparation.\n• Payroll tax compliance and deposits.\n• Integration with accounting systems for seamless reporting.\n
We prioritize timely payments, accurate withholdings, and compliance with local and federal payroll requirements.`,
      image:
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&s=7c6d5b4a3e2f1d0c9b8a7e6f5d4c3b2a",
    },
    {
      id: "cashflow",
      title: "Cash Flow & Budgeting Analysis",
      short:
        "Maintain optimal cash flow levels using forecasting, budgeting and operations tuning.",
      details:
        `We help clients maintain liquidity, reduce cost and increase profitability through:\n
• Cash flow analysis and forecasting.\n• Budget creation and variance analysis.\n• Working capital optimization and debt re-balancing.\n• Scenario planning for seasonality and growth.\n
A disciplined cash strategy is the key to surviving volatility and funding growth.`,
      image:
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&s=2a5b6c7d8e9f0a1b2c3d4e5f6a7b8c9d",
    },
    {
      id: "debt",
      title: "Debt & Finance Advising",
      short:
        "Guidance to lower payments, reduce interest and optimize financing decisions.",
      details:
        `Whether corporate or personal, we help analyze options for debt management and financing: \n
• Debt restructuring and refinancing analysis.\n• Loan sourcing and negotiation support.\n• Tax efficient debt planning.\n• Cash flow impact modeling and repayment roadmaps.`,
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&s=1f2e3d4c5b6a7c8d9e0f1a2b3c4d5e6f",
    },
    {
      id: "audits",
      title: "Audits, Reviews & Compilations",
      short:
        "Three levels of financial statement services to meet different assurance needs.",
      details:
        `We provide audits (highest assurance), reviews (limited assurance) and compilations (presentation of financials) depending on client needs. Audits include detailed testing, confirmation of balances and enhanced reporting to stakeholders.`,
      image:
        "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&s=3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e",
    },
    {
      id: "valuation",
      title: "Business Valuation",
      short:
        "In-depth analysis to identify the drivers of your company’s value for transactions, planning, or disputes.",
      details:
        `Uses include estate planning, buy/sell, divorce, ESOPs, and transaction planning. We combine market research, financial modeling, and scenario analysis to arrive at defensible valuations.`,
      image:
        "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&s=6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a",
    },
    {
      id: "tax",
      title: "Tax Consulting",
      short:
        "Strategic tax planning to minimize liabilities and maximize cash flow while staying compliant.",
      details:
        `We provide tax planning and preparation that navigates recent tax law changes to optimize your cash flow. Services include: ongoing tax strategy, filing preparation, nexus & multi-state guidance, credit and deduction analysis, and tax controversy support.`,
      image:
        "https://images.unsplash.com/photo-1554224154-22dec7ec8818?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&s=9a8b7c6d5e4f3a2b1c0d9e8f7a6b5c4d",
    },
  ];

  const testimonials = [
    {
      quote:
        "Working with City Consulting was a game-changer for our company. Their team's industry expertise and innovative solutions took our business to new heights. We saw a 30% increase in revenue within just six months of their consultation. Highly recommended!",
      name: "Virgie Mitchell",
    },
    {
      quote:
        "Their ability to understand our unique challenges and work closely with our team made the entire process seamless. They not only provided valuable insights but also ensured successful implementation.",
      name: "Robert Goodman",
    },
    {
      quote:
        "We hired City Consulting to tackle a complex operational issue, and the results were outstanding. Their analytical skills and attention to detail were impressive. They not only resolved the problem but also improved our processes, saving us both time and money.",
      name: "Lucinda Mitchell",
    },
  ];

  const sectionFade = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

  return (
    <div className="text-gray-900 font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="logo" className="w-20 h-12 rounded-md object-cover shadow" />
            <div>
              <h1 className="text-xl font-bold" style={{ color: darkBlue }}>
                City Consulting LLC
              </h1>
              <p className="text-xs text-gray-500">Efficient Accounting Solutions</p>
            </div>
          </div>

<nav className={`md:flex items-center gap-8 text-gray-700 font-medium ${mobileMenuOpen ? "flex flex-col absolute top-full left-0 w-full bg-white shadow-md py-4 md:py-0 md:relative md:flex-row" : "hidden md:flex"}`}>
  <a href="#home" className="hover:text-[#ff7a33] px-4 py-2">Home</a>
  <a href="/login" className="hover:text-[#ff7a33] px-4 py-2">Login</a>
  <a href="#services" className="hover:text-[#ff7a33] px-4 py-2">Services</a>
  <a href="#testimonials" className="hover:text-[#ff7a33] px-4 py-2">Testimonials</a>
  <a href="#contact" className="hover:text-[#ff7a33] px-4 py-2">Contact</a>
</nav>


          <div className="flex items-center gap-3">
            <a href="#contact" className="hidden sm:inline-block text-sm px-4 py-2 rounded-md bg-[#ff7a33] text-white font-semibold hover:bg-[#e96b28]">Get In Touch</a>
           <button 
  className="p-2 rounded-md text-gray-500 hover:bg-gray-100 md:hidden" 
  aria-label="menu"
  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
>
  ☰
</button>

          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className={`bg-[linear-gradient(180deg,${darkBlue}_0%,${darkBlue}_80%)] text-white`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight" style={{ color: brightOrange }}>
                Efficient Accounting Solutions to Grow Your Business
              </h1>
              <p className="mt-4 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 opacity-90">
                City Consulting LLC provides a wide range of services for individuals and businesses — from tax management and bookkeeping to audits and financial planning. Let our experienced team handle the numbers so you can focus on running your business.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start">
                <a href="#contact" className="rounded-md px-5 py-3 text-white font-semibold shadow hover:opacity-95" style={{ backgroundColor: brightOrange }}>Schedule Free Guidance</a>
                <a href="#about" className="text-white/90 underline">Learn More</a>
              </div>
            </div>
            <div className="lg:col-span-6">
              <div className="w-full h-64 sm:h-72 lg:h-96 rounded-lg bg-orange-50 border border-orange-200 flex items-center justify-center">
                <img src="/placeholder.png" alt="City Consulting logo" className="w-full h-full" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About / Assurance */}
            <motion.section id="services" initial="hidden" whileInView="visible" variants={sectionFade} transition={{ duration: 0.6 }} className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-8" style={{ color: darkBlue }}>Services</h3>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((s, idx) => (
              <motion.div key={s.id} whileHover={{ y: -6 }} className="bg-white rounded-2xl shadow-md overflow-hidden">
                <img src={s.image} alt={s.title} className="w-full h-44 object-cover" />
                <div className="p-6">
                  <h4 className="text-xl font-semibold mb-2" style={{ color: darkBlue }}>{s.title}</h4>
                  <p className="text-gray-600 mb-4">{s.short}</p>
                  <div className="flex items-center gap-3">
                    <button onClick={() => setOpenService(openService === s.id ? null : s.id)} className="text-sm font-semibold text-[#ff7a33] hover:underline">
                      {openService === s.id ? 'Hide details' : 'Learn more'}
                    </button>
                    <a href="#contact" className="ml-auto text-sm font-semibold text-white bg-[#ff7a33] px-4 py-2 rounded-md">Request a Schedule</a>
                  </div>

                  {openService === s.id && (
                    <motion.pre initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} transition={{ duration: 0.4 }} className="mt-4 text-sm text-gray-700 whitespace-pre-wrap">
                      {s.details}
                    </motion.pre>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* QuickBooks highlighted callout */}
          <div className="mt-12 bg-white rounded-2xl shadow-md p-8 flex flex-col md:flex-row items-center gap-6">
            <div className="md:w-2/3">
              <h4 className="text-2xl font-bold" style={{ color: darkBlue }}>QuickBooks Accounting Help and Assistance</h4>
              <p className="text-gray-600 mt-3">QuickBooks can provide useful and timely information in the form of financial statements, reports and graphs — but only when configured and used correctly. We don’t just help you use the software; we help you use it more efficiently and effectively.</p>
              <div className="mt-4 grid sm:grid-cols-2 gap-3">
                <div className="bg-gray-100 p-4 rounded-md">Personal Training — One-on-one or group training at your location.</div>
                <div className="bg-gray-100 p-4 rounded-md">Installation — Select and install the correct QuickBooks product.</div>
                <div className="bg-gray-100 p-4 rounded-md">Setup — Company file configuration, chart mapping and templates.</div>
                <div className="bg-gray-100 p-4 rounded-md">Support & Review — Ongoing help and periodic cleanups to keep books accurate.</div>
              </div>
            </div>
                        <img src="https://images.unsplash.com/photo-1559526324-593bc073d938?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&s=4f2c5d2b3f8a1f0f2d6b1b9a1f1d3c8a" alt="quickbooks" className="w-full md:w-1/3 rounded-lg object-cover" />

          </div>
        </div>
      </motion.section>
      <motion.section id="about" initial="hidden" whileInView="visible" variants={sectionFade} transition={{ duration: 0.6 }} className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <img src="https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&s=9f7e3b2f3f0a5c6d8a9b3e4b2a5c7d6e" alt="advisory" className="rounded-2xl shadow-lg w-full" />

          <div>
            <h3 className="text-3xl font-bold mb-4" style={{ color: accent }}>Assurance and Advisory Services</h3>
            <p className="text-black mb-4 text-lg">
              We focus on building close client relationships that add long-term value. This includes assuring the solidity of financial records, evaluating financial procedures and producing strategies that help our clients face the myriad challenges of business planning and execution.
            </p>
            <ul className="list-disc pl-5 text-black space-y-2">
              <li>Audits, reviews, and compilations</li>
              <li>Entity selection and restructuring</li>
              <li>Accounting software selection, implementation, and support</li>
              <li>Business valuations; mergers & acquisitions</li>
              <li>Transaction structuring and negotiations</li>
              <li>Financial projections and forecasts</li>
            </ul>
          </div>
        </div>
      </motion.section>

 
      {/* Testimonials */}
      <motion.section id="testimonials" initial="hidden" whileInView="visible" variants={sectionFade} transition={{ duration: 0.6 }} className="bg-darkblue-200 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-8" style={{ color: accent }}>Testimonials</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div key={i} className="bg-white p-8 rounded-2xl shadow-md text-left" whileHover={{ scale: 1.02 }}>
                <p className="text-gray-700 italic">“{t.quote}”</p>
                <div className="mt-4 font-semibold text-[#ff7a33]">{t.name}</div>
                <div className="text-sm text-gray-500">Client</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Contact */}
      <motion.section id="contact" initial="hidden" whileInView="visible" variants={sectionFade} transition={{ duration: 0.6 }} className="bg-gradient-to-br from-white to-orange-50 py-20">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-3xl font-bold mb-4" style={{ color: darkBlue }}>Let's Request A Schedule For Free Guidance</h3>
            <p className="text-gray-600 mb-6">Contact Info<br/>1395 E. Dublin Granville Rd STE 222E, Columbus OH 43229<br/>cityconsultingllc@gmail.com<br/>+1 (614) 318-2825</p>


          </div>

<form ref={formRef} onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-md space-y-4">
<input type="text" name="name" placeholder="Full name" required className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#ff7a33]" />
<input type="email" name="email" placeholder="Email" required className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#ff7a33]" />
<input type="tel" name="phone" placeholder="Phone" className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#ff7a33]" />
<select name="service" className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#ff7a33]">
  <option>Service of interest</option>
  {services.map(s => (<option key={s.id} value={s.id}>{s.title}</option>))}
</select>
<textarea name="message" placeholder="Tell us about your needs" rows={4} className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#ff7a33]"></textarea>


<button type="submit" disabled={loading} className="w-full bg-[#ff7a33] text-white py-3 rounded-md font-semibold hover:bg-[#e96b28]">
  {loading ? "Sending..." : "Request Free Guidance"}
</button>

          </form>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-[#0f2540] text-white py-12">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-[#ff7a33] font-bold mb-3">City Consulting LLC</h4>
            <p className="text-sm text-gray-200">1395 E. Dublin Granville Rd STE 222E, Columbus OH 43229<br/>cityconsultingllc@gmail.com<br/>+1 (614) 318-2825</p>
          </div>
          <div>
            <h5 className="text-[#ff7a33] font-semibold mb-3">Useful Links</h5>
            <ul className="text-sm text-gray-200 space-y-2">
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h5 className="text-[#ff7a33] font-semibold mb-3">Get Connected</h5>
            <p className="text-sm text-gray-200">Follow us for updates and insights into accounting and business advisory.</p>
          </div>
          <div className="flex items-start">
            <div>
              <h5 className="text-[#ff7a33] font-semibold mb-3">Legal</h5>
              <p className="text-sm text-gray-200">©2025 - City Consulting LLC - All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to top */}
      {showTop && (
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed right-6 bottom-8 bg-[#ff7a33] text-white p-3 rounded-full shadow-lg">⬆</button>
      )}
    </div>
  );
}
