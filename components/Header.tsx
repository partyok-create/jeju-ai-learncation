"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { NAV_LINKS, APPLY_URL } from "@/lib/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-ivory/90 backdrop-blur-sm border-b border-charcoal/10" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-content items-center justify-between px-6 py-4 md:px-10">
        <Link href="#top" className="font-serif text-lg md:text-xl tracking-wide">
          JEJU AI LEARNCATION
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm text-charcoal/80">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-charcoal transition-colors">
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={APPLY_URL}
          className="hidden md:inline-flex items-center rounded-btn bg-ocean px-5 h-11 text-sm font-medium text-ivory hover:bg-[#355c64] transition-colors"
        >
          Apply
        </a>

        <button
          aria-label="메뉴 열기"
          aria-expanded={menuOpen}
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className={`block h-[1.5px] w-6 bg-charcoal transition-transform ${menuOpen ? "translate-y-[6.5px] rotate-45" : ""}`} />
          <span className={`block h-[1.5px] w-6 bg-charcoal transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block h-[1.5px] w-6 bg-charcoal transition-transform ${menuOpen ? "-translate-y-[6.5px] -rotate-45" : ""}`} />
        </button>
      </div>

      {menuOpen && (
        <nav className="md:hidden bg-ivory border-t border-charcoal/10 px-6 py-6 flex flex-col gap-5">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-base text-charcoal/80"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href={APPLY_URL}
            className="inline-flex items-center justify-center rounded-btn bg-ocean px-5 h-12 text-sm font-medium text-ivory"
          >
            첫 기수 신청하기
          </a>
        </nav>
      )}
    </header>
  );
}
