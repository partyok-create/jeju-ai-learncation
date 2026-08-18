import { Container } from "./ui/Container";
import { Section } from "./ui/Section";
import { Reveal } from "./ui/Reveal";

const flow = ["Experience", "Photo / Voice Memo", "AI", "Story", "Blog / Reel / Book / Brand"];

export function ExperienceToContent() {
  return (
    <Section className="bg-sand/40">
      <Container>
        <Reveal>
          <h2 className="balance text-center font-serif text-h2 md:text-h2-lg text-charcoal">
            경험은 여행에서 끝나지 않습니다.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-lg text-center text-body md:text-body-lg text-basalt">
            제주에서 찍고, 듣고, 기록한 모든 것이
            <br />
            AI를 통해 당신의 새로운 콘텐츠와 브랜드가 됩니다.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-16 flex flex-col items-center gap-3 md:flex-row md:justify-center md:gap-4">
            {flow.map((step, i) => (
              <div key={step} className="flex flex-col items-center gap-3 md:flex-row md:gap-4">
                <span
                  className={`rounded-full border border-charcoal/15 bg-paper px-5 py-2.5 text-sm md:text-base ${
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
    </Section>
  );
}
