"use client";

import { useEffect, useState } from "react";

export default function useActiveSection(ids: string[]) {
  const [activeId, setActiveId] = useState(ids?.[0] ?? "home");

  useEffect(() => {
    if (!ids?.length) return;

    const els = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!els.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];

        if (visible?.target?.id) setActiveId(visible.target.id);
      },
      {
        root: null,
        threshold: [0.12, 0.2, 0.35, 0.5, 0.7],
        rootMargin: "-20% 0px -55% 0px",
      }
    );

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [ids]);

  return activeId;
}