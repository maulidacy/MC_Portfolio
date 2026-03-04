"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  /** default: "anim-fade-up" */
  animationClassName?: string;
  /** default: "d-0" */
  delayClassName?: string;
  /** default: 0.15 */
  threshold?: number;
  /** default: "-10% 0px -10% 0px" */
  rootMargin?: string;
  /** default: true (sekali muncul, tidak ulang) */
  once?: boolean;
};

export default function Reveal({
  children,
  className = "",
  animationClassName = "anim-fade-up",
  delayClassName = "d-0",
  threshold = 0.15,
  rootMargin = "-10% 0px -10% 0px",
  once = true,
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          if (once) obs.disconnect();
        } else if (!once) {
          setShown(false);
        }
      },
      { threshold, rootMargin }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold, rootMargin, once]);

  return (
    <div
      ref={ref}
      className={`${className} ${shown ? `${animationClassName} ${delayClassName}` : "opacity-0"}`}
    >
      {children}
    </div>
  );
}