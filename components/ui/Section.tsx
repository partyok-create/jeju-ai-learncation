import { ReactNode } from "react";

export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`py-[72px] md:py-[96px] lg:py-[140px] ${className}`}>
      {children}
    </section>
  );
}
