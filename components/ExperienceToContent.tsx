import { Container } from "./ui/Container";
import { Reveal } from "./ui/Reveal";

const flow = ["Walk", "Photo", "Voice Memo", "AI", "Blog / Reel / Story / Brand"];

export function ExperienceToContent() {
  return (
    <section className="bg-sand/40 py-24 md:py-36">
      <Container>
        <Reveal>
          <h2 className="balance text-center font-serif text-h2 md:text-h2-lg text-charcoal">
            경험은 여행에서 끝나지 않습니다.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-lg text-center text-sm md:text-base text-basalt">
            제주에서 찍고, 듣고, 기록한 모든 것이
            <br />
            AI를 통해 당신의 새로운 콘텐츠와 브랜드가 됩니다.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-14 flex flex-col items-center gap-3 md:flex-row md:justify-center md:gap-4">
            {flow.map((step, i) => (
              <div key={step} className="flex flex-col items-center gap-3 md:flex-row md:gap-4">
                <span
                  className={`rounded-full border border-charcoal/15 bg-ivory px-5 py-2.5 text-sm md:text-base ${
                    i === flow.length - 1 ? "text-ocean font-medium" : "text-charcoal/80"
                  }`}
                >
                  {step}
                </span>
                {i < flow.length - 1 && (
                  <span className="text-charcoal/30 md:-rotate-90">↓</span>
                )}
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
