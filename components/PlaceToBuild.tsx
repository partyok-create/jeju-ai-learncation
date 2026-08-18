import Image from "next/image";
import { Reveal } from "./ui/Reveal";

export function PlaceToBuild() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 md:min-h-[80vh]">
      <div className="relative aspect-[4/3] md:aspect-auto md:order-2">
        <Image
          src="/images/jeju/idino-lounge.jpg"
          alt="아이디노 제주 라운지에서 바라본 노을과 바다"
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover"
          loading="lazy"
        />
      </div>

      <div className="relative flex items-center bg-ivory md:order-1">
        <div className="px-6 py-24 md:px-14 lg:px-20">
          <Reveal>
            <p className="text-xs tracking-[0.25em] text-basalt">
              EXPERIENCE OUTSIDE. BUILD INSIDE.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="balance mt-6 max-w-md font-serif text-h2 md:text-h2-lg text-charcoal">
              밖에서 경험하고,
              <br />
              이곳으로 돌아와 만듭니다.
            </h2>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
