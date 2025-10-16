"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const brightOrange = "#ff7a33";
  const darkBlue = "#0f2540";

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (!res.ok) {
      setError(data.error || "Login failed");
      return;
    }

    // ✅ Redirect based on role or API response
    if (data.redirect) {
      router.push(data.redirect);
    } else {
      // fallback
      router.push("/dashboard");
    }
  }

  return (
    <div className="min-h-screen font-sans flex flex-col">
      {/* NAVBAR */}
              <title>login</title>

      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <a href="/" className="flex items-center gap-3">
              <div className="w-20 h-12 relative overflow-hidden">
                <img
                  src="/logo.png"
                  alt="City Consulting logo"
                  className="object-contain w-full h-full"
                />
              </div>
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="flex-grow bg-[linear-gradient(180deg,#0f2540_0%,#0f2540_80%)] flex items-center justify-center">
        <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 mx-4">
          <h2
            className="text-2xl font-bold mb-6 text-center"
            style={{ color: darkBlue }}
          >
            Client Login
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1 w-full px-3 py-2 border border-gray-300 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-1 text-black w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                placeholder="Enter your password"
              />
            </div>

            {error && (
              <p className="text-red-500 text-sm text-center">{error}</p>
            )}

            <button
              type="submit"
              className="w-full py-2 px-4 rounded-md font-semibold text-white"
              style={{ backgroundColor: brightOrange }}
            >
              Login
            </button>
          </form>

          <p className="mt-4 text-sm text-center text-slate-500">
            Forgot your password?{" "}
            <a href="#" className="text-orange-500 underline">
              Reset here
            </a>
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white border-t py-6 text-center text-sm text-slate-500">
        ©2025 - City Consulting LLC - All Rights Reserved.
      </footer>
    </div>
  );
}
