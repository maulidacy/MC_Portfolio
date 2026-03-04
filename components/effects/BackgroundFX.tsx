"use client";

export default function BackgroundFX() {
  return (
    <>
      {/* Grid subtle */}
      <div
        aria-hidden
        className="
          pointer-events-none
          fixed inset-0
          -z-50
          opacity-60
          bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)]
          bg-[size:64px_64px]
          will-change-transform
        "
      />

      {/* Blue ambient glow */}
      <div
        aria-hidden
        className="
          pointer-events-none
          fixed inset-0
          -z-40
          opacity-80
          bg-[radial-gradient(circle_at_50%_-10%,rgba(59,130,246,0.14),transparent_55%)]
        "
      />
    </>
  );
}