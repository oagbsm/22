'use client';

import { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Upload, LogOut, FileText, Trash2 } from 'lucide-react';

export default function DashboardPage() {
  const [user, setUser] = useState(null);
  const [invoices, setInvoices] = useState([]);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef(null);
  const router = useRouter();

  const brightOrange = '#ff7a33';
  const darkBlue = '#0f2540';

  useEffect(() => {
    async function checkUser() {
      const res = await fetch('/api/auth/me');
      if (!res.ok) {
        router.push('/login');
        return;
      }
      const data = await res.json();
      setUser(data.user);
    }
    checkUser();
  }, [router]);

  if (!user)
    return (
      <div className="min-h-screen flex items-center justify-center text-slate-600">
        Loading...
      </div>
    );

  async function handleLogout() {
    await fetch('/api/auth/logout', { method: 'POST' });
    router.push('/login');
  }

  async function handleUpload(e) {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    const formData = new FormData();
    formData.append('invoice', file);

    const res = await fetch('/api/upload-invoice', {
      method: 'POST',
      body: formData,
    });

    if (res.ok) {
      const uploaded = await res.json();
      setInvoices([...invoices, uploaded]);
    } else {
      alert('Upload failed');
    }

    setUploading(false);
    if (fileInputRef.current) fileInputRef.current.value = '';
  }

  function handleRemove(index) {
    const confirmDelete = confirm('Are you sure you want to remove this invoice?');
    if (confirmDelete) {
      setInvoices((prev) => prev.filter((_, i) => i !== index));
    }
  }

  return (
    <div className="min-h-screen font-sans bg-white text-slate-800">
      {/* NAVBAR */}
      <header
        className="flex items-center justify-between px-8 py-4 shadow-md"
        style={{ backgroundColor: darkBlue, color: 'white' }}
      >
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="City Consulting" className="h-10" />
          <h1 className="font-semibold text-lg">Client Dashboard</h1>
        </div>

        <button
          onClick={handleLogout}
          className="flex items-center gap-2 px-4 py-2 rounded text-white font-medium hover:opacity-90 transition"
          style={{ backgroundColor: brightOrange }}
        >
          <LogOut className="w-4 h-4" />
          Logout
        </button>
      </header>

      {/* MAIN CONTENT */}
      <main className="max-w-5xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold mb-2" style={{ color: darkBlue }}>
          Welcome, {user.name || user.email}
        </h2>
        <p className="text-slate-600 mb-8">Upload and manage your invoices below.</p>

        {/* UPLOAD AREA */}
        <div
          className="relative border-2 border-dashed rounded-2xl p-10 flex flex-col items-center justify-center text-center bg-orange-50/50 hover:bg-orange-100/40 transition cursor-pointer"
          onClick={() => fileInputRef.current?.click()}
        >
          <Upload className="w-10 h-10 mb-3" style={{ color: brightOrange }} />
          <p className="font-medium text-slate-700">
            Click here or drag a file to upload your invoice
          </p>
          <input
            type="file"
            accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
            onChange={handleUpload}
            ref={fileInputRef}
            className="hidden"
          />
        </div>

        {uploading && (
          <p className="mt-4 text-sm text-slate-500">Uploading invoice...</p>
        )}

        {/* INVOICE LIST */}
        <section className="mt-10">
          <h3 className="text-lg font-semibold mb-3" style={{ color: brightOrange }}>
            Uploaded Invoices
          </h3>

          {invoices.length === 0 ? (
            <p className="text-slate-500">No invoices uploaded yet.</p>
          ) : (
            <ul className="space-y-3">
              {invoices.map((inv, i) => (
                <li
                  key={i}
                  className="flex flex-col sm:flex-row items-start sm:items-center justify-between border rounded-lg p-4 hover:shadow transition"
                >
                  <div className="flex items-center gap-3 mb-2 sm:mb-0">
                    <FileText className="w-5 h-5" style={{ color: brightOrange }} />
                    <span className="text-sm text-slate-700 break-all">{inv.name}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <a
                      href={inv.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium hover:underline"
                      style={{ color: brightOrange }}
                    >
                      View
                    </a>
                    <button
                      onClick={() => handleRemove(i)}
                      className="flex items-center gap-1 text-sm text-red-600 hover:underline"
                    >
                      <Trash2 className="w-4 h-4" /> Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </section>
      </main>

      {/* FOOTER */}
      <footer className="py-6 border-t text-center text-sm text-slate-500">
        ©2025 City Consulting LLC — Secure Client Portal
      </footer>
    </div>
  );
}
