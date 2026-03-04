"use client";

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function CursorGlow() {

  const ref = useRef<HTMLDivElement | null>(null);

  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });

  const raf = useRef<number | null>(null);

  useEffect(() => {

    const el = ref.current;
    if (!el) return;

    const move = (x: number, y: number) => {
      target.current.x = x;
      target.current.y = y;
      el.style.opacity = "1";
    };

    const pointerMove = (e: PointerEvent) => {
      move(e.pageX, e.pageY);
    };

    const touchMove = (e: TouchEvent) => {
      const t = e.touches[0];
      if (!t) return;
      move(t.pageX, t.pageY);
    };

    const loop = () => {

      pos.current.x += (target.current.x - pos.current.x) * 0.15;
      pos.current.y += (target.current.y - pos.current.y) * 0.15;

      el.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px,0)`;

      raf.current = requestAnimationFrame(loop);
    };

    raf.current = requestAnimationFrame(loop);

    window.addEventListener("pointermove", pointerMove, { passive: true });
    window.addEventListener("touchmove", touchMove, { passive: true });

    return () => {
      window.removeEventListener("pointermove", pointerMove);
      window.removeEventListener("touchmove", touchMove);
      if (raf.current) cancelAnimationFrame(raf.current);
    };

  }, []);

  const glow = (
    <div
      ref={ref}
      className="pointer-events-none fixed left-0 top-0 z-[999999] opacity-0 transition-opacity duration-200"
      style={{ width: 0, height: 0 }}
    >
      <div
        className="h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px]"
        style={{
          background: "rgba(37,99,235,0.35)"
        }}
      />
    </div>
  );

  if (typeof window === "undefined") return null;

  return createPortal(glow, document.body);
}