"use client";

export default function ServiceIcon({ type }) {
  const common = {
    className: "h-6 w-6",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  if (type === "code") {
    return (
      <svg {...common}>
        <path d="M8 16 4 12l4-4" />
        <path d="m16 8 4 4-4 4" />
        <path d="m14 4-4 16" />
      </svg>
    );
  }

  if (type === "layers") {
    return (
      <svg {...common}>
        <path d="m12 3 8 4.5-8 4.5L4 7.5 12 3Z" />
        <path d="m4 12 8 4.5 8-4.5" />
        <path d="m4 16.5 8 4.5 8-4.5" />
      </svg>
    );
  }

  if (type === "pos") {
    return (
      <svg {...common}>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M7 8h10" />
        <path d="M7 12h3" />
        <path d="M14 12h3" />
        <path d="M7 16h3" />
        <path d="M14 16h3" />
      </svg>
    );
  }

  if (type === "spark") {
    return (
      <svg {...common}>
        <path d="m12 3 1.8 4.7L18.5 9.5l-4.7 1.8L12 16l-1.8-4.7L5.5 9.5l4.7-1.8L12 3Z" />
        <path d="M19 3v4" />
        <path d="M21 5h-4" />
      </svg>
    );
  }

  if (type === "mobile") {
    return (
      <svg {...common}>
        <rect x="7" y="2.5" width="10" height="19" rx="2" />
        <path d="M11 18.5h2" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path d="M12 3 4.5 7v5c0 4.2 3 8 7.5 9 4.5-1 7.5-4.8 7.5-9V7L12 3Z" />
      <path d="m9.5 12 1.7 1.7 3.3-3.7" />
    </svg>
  );
}