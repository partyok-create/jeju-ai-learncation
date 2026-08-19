import Image from "next/image";
import { Reveal } from "./ui/Reveal";

export function JejuClassroom() {
  return (
    <section className="relative flex min-h-[85vh] items-center overflow-hidden">
      <Image
        src="/images/jeju/classroom-surf.jpg"
        alt="제주 해변에서 서핑을 즐기는 사람들"
        fill
        sizes="100vw"
        className="object-cover"
        loading="lazy"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(37,37,33,0.55) 0%, rgba(37,37,33,0.15) 45%, rgba(37,37,33,0) 70%)",
        }}
      />
      <div className="relative mx-auto w-full max-w-content px-6 py-24 md:px-10">
        <Reveal>
          <p className="text-sm tracking-[0.25em] text-paper/80">JEJU IS ANOTHER CLASSROOM</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="balance mt-6 max-w-2xl font-serif text-h2 md:text-h2-lg text-paper">
            제주는 또 하나의 교실입니다.
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-7 max-w-lg font-serif text-xl md:text-2xl text-paper/90">
            컴퓨터 앞에서만 배우지 않습니다.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <p className="mt-5 max-w-lg text-body md:text-body-lg leading-relaxed text-paper/75">
            걷고, 보고, 만나고, 기록합니다.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
