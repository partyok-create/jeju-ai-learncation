import { Reveal } from "./ui/Reveal";

export function JejuClassroom() {
  return (
    <section
      className="relative flex min-h-[85vh] items-center overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, #7C876A 0%, #5A6B57 45%, #33413A 100%)",
      }}
    >
      <div
        className="absolute inset-0 opacity-50"
        style={{
          background:
            "radial-gradient(70% 60% at 20% 30%, rgba(217,203,184,0.35) 0%, rgba(217,203,184,0) 60%)",
        }}
      />
      <div className="relative mx-auto w-full max-w-content px-6 py-24 md:px-10">
        <Reveal>
          <p className="text-sm tracking-[0.2em] text-ivory/80">JEJU IS ANOTHER CLASSROOM</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="balance mt-5 max-w-2xl font-serif text-h2 md:text-h2-lg text-ivory">
            제주는 또 하나의 교실입니다.
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-6 max-w-lg text-base md:text-lg text-ivory/85">
            수업이 끝나면 노트북을 덮고 제주로 나갑니다.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <p className="mt-8 max-w-lg text-sm md:text-base leading-relaxed text-ivory/70">
            걷고, 보고, 듣고, 만나고, 기록한 모든 경험이
            <br />
            다시 자신의 프로젝트와 콘텐츠의 재료가 됩니다.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
