import Image from "next/image";
import { Reveal } from "./ui/Reveal";

export function JejuClassroom() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 md:min-h-[92vh]">
      <div
        className="relative flex items-center overflow-hidden"
        style={{
          background: "linear-gradient(160deg, #727B65 0%, #4C5541 48%, #26291F 100%)",
        }}
      >
        <div
          className="absolute inset-0 opacity-45"
          style={{
            background:
              "radial-gradient(65% 55% at 15% 25%, rgba(217,203,184,0.4) 0%, rgba(217,203,184,0) 60%)",
          }}
        />
        <div className="relative px-6 py-24 md:px-14 lg:px-20">
          <Reveal>
            <p className="text-sm tracking-[0.25em] text-paper/70">JEJU IS ANOTHER CLASSROOM</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="balance mt-6 max-w-md font-serif text-h2 md:text-h2-lg text-paper">
              제주는 또 하나의 교실입니다.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-7 max-w-md font-serif text-xl md:text-2xl text-paper/90">
              수업이 끝나면 노트북을 덮고 제주로 나갑니다.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="mt-9 max-w-md text-body md:text-body-lg leading-relaxed text-paper/70">
              걷고, 보고, 듣고, 만나고, 기록한 모든 경험이
              <br />
              다시 자신의 프로젝트와 콘텐츠의 재료가 됩니다.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="relative aspect-[4/3] md:aspect-auto">
        <Image
          src="/images/jeju/idino-lounge.jpg"
          alt="아이디노 제주 라운지에서 바라본 노을과 바다"
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover"
          loading="lazy"
        />
      </div>
    </section>
  );
}
