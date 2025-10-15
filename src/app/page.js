"use client";

import React, { useState, useEffect } from "react";

export default function ComingSoonPage() {
  // Set countdown target (24 hours from now)
  const [timeLeft, setTimeLeft] = useState(24 * 60 * 60); // in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Convert seconds to hh:mm:ss
  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600)
      .toString()
      .padStart(2, "0");
    const m = Math.floor((seconds % 3600) / 60)
      .toString()
      .padStart(2, "0");
    const s = Math.floor(seconds % 60)
      .toString()
      .padStart(2, "0");
    return `${h}:${m}:${s}`;
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#0f2540] text-white px-4">
      {/* Logo */}
      <div className="mb-12">
        <img src="/logo.png" alt="City Consulting Logo" className="w-40 h-auto" />
      </div>

      {/* Countdown */}
      <div className="text-center">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">Our Website is Coming Soon</h1>
        <p className="text-lg sm:text-xl mb-8">Launching in:</p>
        <div className="text-5xl sm:text-6xl font-extrabold tracking-wide bg-orange-500 px-8 py-4 rounded-lg shadow-lg">
          {formatTime(timeLeft)}
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-16 text-sm text-white/70 text-center">
        ©2025 City Consulting LLC
      </footer>
    </div>
  );
}
