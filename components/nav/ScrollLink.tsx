"use client";

import React from "react";

type Props = {
  href: string;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
};

export default function ScrollLink({
  href,
  className = "",
  children,
  onClick,
}: Props) {
  return (
    <a
      href={href}
      className={className}
      onClick={(e) => {
        // jalankan onClick tambahan (misal untuk menutup mobile menu)
        onClick?.();

        const id = href.startsWith("#") ? href.slice(1) : href;
        const el = document.getElementById(id);
        if (!el) return;

        e.preventDefault();
        el.scrollIntoView({ behavior: "smooth", block: "start" });

        el.classList.remove("section-flash");
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        el.offsetHeight;
        el.classList.add("section-flash");
      }}
    >
      {children}
    </a>
  );
}