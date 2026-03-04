import { cn } from "@/lib/utils";

export default function Card({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "rounded-xl3 border border-border bg-surface shadow-soft",
        "transition-all duration-200",
        "hover:shadow-card hover:-translate-y-[1px]",
        className
      )}
    >
      {children}
    </div>
  );
}
