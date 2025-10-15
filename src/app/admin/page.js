"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { LogOut, PlusCircle } from "lucide-react";

export default function AdminPage() {
  const brightOrange = "#ff7a33";
  const darkBlue = "#0f2540";
  const router = useRouter();

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [creating, setCreating] = useState(false);

  // Fetch all users
  useEffect(() => {
    async function fetchUsers() {
      try {
        const res = await fetch("/api/admin");
        if (!res.ok) {
          const err = await res.json();
          throw new Error(err.error || "Failed to fetch users");
        }

        const data = await res.json();
        setUsers(data.users || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
  }, []);

  // Logout
  const handleLogout = () => {
    document.cookie = "token=; Max-Age=0; path=/";
    router.push("/login");
  };

  // Handle user creation
  const handleCreateUser = async (e) => {
    e.preventDefault();
    setCreating(true);
    setError("");

    try {
      const res = await fetch("/api/admin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Failed to create user");
        return;
      }

      // Refresh user list
      const updated = await fetch("/api/admin");
      const newUsers = await updated.json();
      setUsers(newUsers.users);

      setShowModal(false);
      setForm({ name: "", email: "", password: "" });
    } catch (err) {
      setError("Network error");
    } finally {
      setCreating(false);
    }
  };

  return (
    <div className="min-h-screen font-sans text-slate-800 bg-gray-50">
      {/* NAVBAR */}
      <header className="bg-white border-b shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20">
          <div className="flex items-center gap-4">
            <img src="/logo.png" alt="City Consulting" className="w-24 h-auto" />
            <h1 className="text-2xl font-bold flex items-center gap-3" style={{ color: brightOrange }}>
              Admin Dashboard
              <span
                onClick={() => setShowModal(true)}
                className="flex items-center gap-1 text-sm bg-orange-100 hover:bg-orange-200 text-orange-700 px-2 py-1 rounded cursor-pointer transition"
              >
                <PlusCircle size={16} /> Add User
              </span>
            </h1>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 rounded-md text-white font-semibold"
            style={{ backgroundColor: darkBlue }}
          >
            <LogOut className="w-5 h-5" /> Logout
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="bg-[linear-gradient(180deg,#0f2540_0%,#0f2540_80%)] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-3xl font-extrabold" style={{ color: brightOrange }}>
            Welcome, Admin
          </h2>
          <p className="mt-2 text-white/90 max-w-2xl">
            Here you can view all users and the documents they have uploaded. Use this dashboard to manage
            your platform efficiently.
          </p>
        </div>
      </section>

      {/* USERS TABLE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {loading ? (
          <p className="text-center text-gray-700">Loading users...</p>
        ) : error ? (
          <p className="text-center text-red-600 font-semibold">{error}</p>
        ) : users.length === 0 ? (
          <p className="text-center text-gray-700">No users found.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-200 rounded-lg shadow-lg bg-white">
              <thead className="bg-orange-100">
                <tr>
                  <th className="p-4 text-left font-semibold">Name</th>
                  <th className="p-4 text-left font-semibold">Email</th>
                  <th className="p-4 text-left font-semibold">Role</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id} className="hover:bg-orange-50 transition-colors">
                    <td className="p-4 border-b">{user.name}</td>
                    <td className="p-4 border-b">{user.email}</td>
                    <td className="p-4 border-b capitalize">{user.role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      {/* FOOTER */}
      <footer className="bg-white border-t mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="text-sm text-slate-600">©2025 - City Consulting LLC - All Rights Reserved.</div>
          <div className="text-sm text-slate-600">
            1395 E. Dublin Granville Rd STE 222E, Columbus OH 43229
          </div>
        </div>
      </footer>

      {/* ADD USER MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
            <h3 className="text-xl font-semibold mb-4" style={{ color: darkBlue }}>
              Add New User
            </h3>
            <form onSubmit={handleCreateUser} className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-orange-400 outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-orange-400 outline-none"
              />
              <input
                type="password"
                placeholder="Password"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                required
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-orange-400 outline-none"
              />

              {error && <p className="text-red-500 text-sm text-center">{error}</p>}

              <div className="flex justify-end gap-3 mt-6">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 rounded-md border text-gray-600 hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={creating}
                  className="px-4 py-2 rounded-md text-white font-semibold"
                  style={{ backgroundColor: brightOrange }}
                >
                  {creating ? "Creating..." : "Add User"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
