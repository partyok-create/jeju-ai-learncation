import { Reveal } from "./ui/Reveal";

export function JejuClassroom() {
  return (
    <section
      className="relative flex min-h-[85vh] items-center overflow-hidden"
      style={{
        background: "linear-gradient(150deg, #9FC0C2 0%, #4D8388 55%, #2A4F53 100%)",
      }}
    >
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(65% 55% at 15% 25%, rgba(251,250,246,0.35) 0%, rgba(251,250,246,0) 60%)",
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
