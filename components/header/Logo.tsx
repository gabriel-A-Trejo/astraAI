import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <header
      className="flex justify-center gap-2 md:justify-start"
      role="banner"
    >
      <Link
        href="/"
        className="flex items-center gap-2"
        aria-label="Astra AI home"
      >
        <div
          className="flex h-8 w-8 items-center justify-center rounded-md bg-white border border-gray-200 shadow-sm"
          aria-hidden="true"
        >
          <svg
            viewBox="0 0 24 24"
            className="size-5 text-primary"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            role="img"
            aria-label="Astra AI logo"
          >
            <path
              d="M12 3L20 7.5V16.5L12 21L4 16.5V7.5L12 3Z"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="12" cy="12" r="3" />
            <path d="M12 9V3M20 7.5L12 12M12 12L4 7.5" strokeLinecap="round" />
          </svg>
        </div>
        <span className="text-lg font-semibold text-primary" aria-hidden="true">
          Astra AI
        </span>
      </Link>
    </header>
  );
};

export default Logo;
