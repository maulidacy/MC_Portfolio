"use client";

import { cn } from "@/lib/utils";

type Props = {
  topText?: string;
  bottomText?: string;
  className?: string;
};

export default function MarqueeDivider({
  topText = "APPLIED MACHINE LEARNING • COMPUTER VISION • NLP • NEXT.JS • FASTAPI • ",
  bottomText = "PROJECTS • RESEARCH • DEPLOYMENT • DATA • MODELING • ",
  className,
}: Props) {
  return (
    <div className={cn("relative w-screen left-1/2 -translate-x-1/2", className)}>
      {/* TOP STRIP (dark) */}
      <div className="relative overflow-hidden bg-[#020617] border-y border-white/10">
        <div className="pointer-events-none absolute inset-0 opacity-70 bg-[radial-gradient(circle_at_50%_0%,rgba(46,91,255,0.18),transparent_55%)]" />

        <div className="flex whitespace-nowrap will-change-transform animate-marquee">
          {Array.from({ length: 4 }).map((_, i) => (
            <span
              key={i}
              className="py-4 md:py-5 pr-10 text-[22px] md:text-[32px] font-black tracking-[0.08em] text-[#2E5BFF]"
              style={{ textShadow: "0 0 18px rgba(46,91,255,0.25)" }}
            >
              {topText}
            </span>
          ))}
        </div>

        {/* subtle dots */}
        <div className="pointer-events-none absolute inset-0 opacity-25 bg-[radial-gradient(circle,rgba(255,255,255,0.25)_1px,transparent_1px)] [background-size:18px_18px]" />
      </div>

      {/* BOTTOM STRIP (light accent) */}
      <div className="relative overflow-hidden bg-[#2E5BFF] border-b border-black/15">
        <div className="flex whitespace-nowrap will-change-transform animate-marquee-reverse">
          {Array.from({ length: 4 }).map((_, i) => (
            <span
              key={i}
              className="py-3 md:py-4 pr-10 text-[16px] md:text-[20px] font-extrabold tracking-[0.12em] text-[#020617]"
            >
              {bottomText}
            </span>
          ))}
        </div>

        {/* shimmer */}
        <div className="pointer-events-none absolute inset-0 opacity-30 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.35),transparent)] [background-size:260px_100%] animate-sheen" />
      </div>

      {/* feather fade edges biar keliatan premium */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-[#0b1220] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-[#0b1220] to-transparent" />
    </div>
  );
}
