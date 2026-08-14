import { NAV_LINKS } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-charcoal text-ivory/70 pb-28 pt-16 md:pb-16">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="font-serif text-xl text-ivory">JEJU AI LEARNCATION</p>
            <p className="mt-2 text-sm">생각만 하던 일을, 제주에서 완성합니다.</p>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="hover:text-ivory transition-colors">
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="mt-12 border-t border-ivory/15 pt-6 text-xs text-ivory/50">
          <p>제주는 또 하나의 교실이다 · JEJU AI LEARNCATION</p>
          <p className="mt-1">체험 프로그램은 계절, 날씨, 운영 상황에 따라 달라질 수 있습니다.</p>
        </div>
      </div>
    </footer>
  );
}
