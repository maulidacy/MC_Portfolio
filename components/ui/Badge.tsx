import { cn } from "@/lib/utils";

export default function Badge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-border bg-surface px-3 py-1 text-xs font-semibold",
        "text-muted shadow-[0_8px_24px_rgba(15,23,42,0.06)]",
        className
      )}
    >
      {children}
    </span>
  );
}
