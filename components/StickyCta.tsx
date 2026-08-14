import { APPLY_URL } from "@/lib/site";

export function StickyCta() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-charcoal/10 bg-ivory/95 backdrop-blur-sm p-4 md:hidden">
      <a
        href={APPLY_URL}
        className="flex h-12 w-full items-center justify-center rounded-btn bg-ocean text-ivory text-sm font-medium"
      >
        첫 기수 신청하기
      </a>
    </div>
  );
}
