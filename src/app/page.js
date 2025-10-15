"use client";

import React, { useState, useEffect } from "react";

export default function ComingSoonPage() {
  // Fixed target date: 16 Oct 2025, 3 PM Somalia time (UTC+3)
  const targetTime = new Date("2025-10-16T15:00:00+03:00").getTime();

  const [timeLeft, setTimeLeft] = useState(targetTime - Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      setTimeLeft(targetTime - now);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (ms) => {
    if (ms <= 0) return "00:00:00";
    const totalSeconds = Math.floor(ms / 1000);
    const h = Math.floor(totalSeconds / 3600).toString().padStart(2, "0");
    const m = Math.floor((totalSeconds % 3600) / 60).toString().padStart(2, "0");
    const s = (totalSeconds % 60).toString().padStart(2, "0");
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
        {/* <p className="text-lg sm:text-xl mb-8">Launching at 3:00 PM Somalia Time, 16th October 2025</p> */}
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
