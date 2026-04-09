"use client";

export default function PlusIcon({ open }) {
  return (
    <span
      className={`inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-white/[0.06] text-xl transition-transform duration-300 ${
        open ? "rotate-45" : ""
      }`}
    >
      +
    </span>
  );
}