import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "outline";

type Props = {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  type?: "button" | "submit";
  iconOnly?: boolean;
};

export default function Button({
  href,
  onClick,
  children,
  variant = "primary",
  className,
  type = "button",
  iconOnly = false,
}: Props) {
  const base =
    "inline-flex items-center justify-center rounded-xl text-sm font-semibold " +
    "transition-all duration-200 active:scale-[0.99] focus-visible:ring-4 focus-visible:ring-[rgba(11,58,106,0.18)]";

  const spacing = iconOnly ? "p-0" : "gap-2 px-4 py-2";

  const styles: Record<Variant, string> = {
    primary: "bg-navy text-white shadow-soft hover:bg-navyStrong hover:shadow-card",
    secondary:
      "bg-surface text-text border border-border shadow-soft hover:bg-[rgba(11,58,106,0.04)] hover:shadow-card",
    outline: "bg-transparent text-navy border border-border hover:bg-[rgba(11,58,106,0.08)]",
  };

  const cls = cn(base, spacing, styles[variant], className);

  if (href) return <Link href={href} className={cls}>{children}</Link>;

  return (
    <button type={type} onClick={onClick} className={cls}>
      {children}
    </button>
  );
}
