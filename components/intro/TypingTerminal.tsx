"use client";

import { useMemo } from "react";

export default function TypingTerminal({
  lines,
  typedCount,
}: {
  lines: string[];
  typedCount: number;
}) {

  const lineMeta = useMemo(() => {
    return lines.map((line, index) => {

      const start = lines
        .slice(0, index)
        .reduce((sum, l) => sum + l.length + 1, 0);

      const end = start + line.length;

      return { line, start, end };

    });
  }, [lines]);

  return (
    <div className="font-mono text-[13px] leading-relaxed tracking-[0.01em]">
      {lineMeta.map(({ line, start, end }, idx) => {

        const visible = Math.max(0, Math.min(line.length, typedCount - start));
        const text = line.slice(0, visible);

        const isActive = typedCount >= start && typedCount <= end;

        return (
          <div key={idx} className="whitespace-pre-wrap leading-relaxed">

            <span className="mr-1 select-none text-[#2E5BFF]/90">{">"}</span>

            <span className="text-inherit">{text}</span>

            {isActive && (
              <span
                className="ml-0.5 inline-block h-4 w-[2px] align-middle animate-pulse"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.95), rgba(46,91,255,0.85))",
                  boxShadow: "0 0 10px rgba(46,91,255,0.55)",
                }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}