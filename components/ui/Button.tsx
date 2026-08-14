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
  primary: "bg-ocean text-ivory hover:bg-[#355c64]",
  secondary: "border border-charcoal/30 text-charcoal hover:border-charcoal",
  onDark: "border border-ivory/50 text-ivory hover:bg-ivory/10",
  invert: "bg-ivory text-ocean hover:bg-ivory/90",
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
