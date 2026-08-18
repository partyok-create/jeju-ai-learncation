import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "onDark" | "invert";
  className?: string;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-btn px-7 h-[52px] md:h-[56px] text-[15px] md:text-base font-medium transition-colors duration-300 ease-editorial";

const variants = {
  primary: "bg-ocean text-paper hover:bg-[#284d51]",
  secondary: "border border-charcoal/30 text-charcoal hover:border-charcoal",
  onDark: "border border-paper/50 text-paper hover:bg-paper/10",
  invert: "bg-paper text-ocean hover:bg-paper/90",
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
