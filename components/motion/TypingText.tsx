"use client";

import { useEffect, useMemo, useState } from "react";

type Props = {
  texts: string[];
  className?: string;
  speed?: number; // ms per char
  deleteSpeed?: number; // ms per char
  pause?: number; // ms pause before delete/next
  loop?: boolean;
};

export default function TypingText({
  texts,
  className = "",
  speed = 42,
  deleteSpeed = 22,
  pause = 950,
  loop = true,
}: Props) {
  const safeTexts = useMemo(() => (texts?.length ? texts : [""]), [texts]);

  const [i, setI] = useState(0);
  const [sub, setSub] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = safeTexts[i] ?? "";
    let t: any;

    if (!deleting) {
      if (sub < current.length) {
        t = setTimeout(() => setSub((v) => v + 1), speed);
      } else {
        t = setTimeout(() => setDeleting(true), pause);
      }
    } else {
      if (sub > 0) {
        t = setTimeout(() => setSub((v) => v - 1), deleteSpeed);
      } else {
        setDeleting(false);
        setI((v) => {
          const next = v + 1;
          if (next >= safeTexts.length) return loop ? 0 : v;
          return next;
        });
      }
    }

    return () => clearTimeout(t);
  }, [safeTexts, i, sub, deleting, speed, deleteSpeed, pause, loop]);

  const shown = (safeTexts[i] ?? "").slice(0, sub);

  return (
    <span className={`typing ${className}`}>
      {shown}
      <span className="caret">|</span>
    </span>
  );
}