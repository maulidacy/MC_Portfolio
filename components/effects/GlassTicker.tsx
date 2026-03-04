// components/effects/GlassTicker.tsx
"use client";

import { cn } from "@/lib/utils";

type Props = {
  topText?: string;
  bottomText?: string;
  className?: string;
};

export default function MarqueeDivider({
  topText = "APPLIED MACHINE LEARNING • DATA SCIENCE • NEXT.JS • FASTAPI • ",
  bottomText = "PROJECTS • DEPLOYMENT • DATA • MODELING • ",
  className,
}: Props) {
  return (
    <div
      className={cn(
        "relative w-screen left-1/2 -translate-x-1/2 py-5 overflow-hidden",
        className
      )}
    >
      {/* TOP STRIP */}
      <div className="relative overflow-hidden border-y border-black/40">
        <div className="flex whitespace-nowrap animate-marquee py-3 md:py-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <span
              key={i}
              className="pr-10 text-[22px] md:text-[34px] font-black tracking-[0.12em] uppercase text-black"
            >
              {topText}
            </span>
          ))}
        </div>
      </div>

      {/* BOTTOM STRIP */}
      <div className="relative overflow-hidden border-b border-black/40">
        <div className="flex whitespace-nowrap animate-marquee-reverse py-2.5 md:py-3">
          {Array.from({ length: 4 }).map((_, i) => (
            <span
              key={i}
              className="pr-10 text-[13px] md:text-[15px] font-mono font-bold tracking-[0.22em] uppercase text-black"
            >
              <span className="mr-2">&gt;</span>
              {bottomText}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}