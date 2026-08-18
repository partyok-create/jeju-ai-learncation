import { Container } from "./ui/Container";
import { Section } from "./ui/Section";
import { Reveal } from "./ui/Reveal";

const flow = ["Walk", "Photo", "Voice Memo", "AI", "Blog / Reel / Story / Brand"];

export function ExperienceToContent() {
  return (
    <Section className="bg-sand/40">
      <Container>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-20 md:items-center">
          <Reveal>
            <div
              className="aspect-[4/3] rounded-[4px]"
              style={{
                background: "linear-gradient(155deg, #EADFCB 0%, #D9CBB8 55%, #A98F6F 100%)",
              }}
            />
          </Reveal>

          <div>
            <Reveal>
              <h2 className="balance font-serif text-h2 md:text-h2-lg text-charcoal">
                경험은 기록이 되고,
                <br />
                기록은 콘텐츠가 됩니다.
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <ul className="mt-10 space-y-3">
                {flow.map((step, i) => (
                  <li
                    key={step}
                    className={`font-serif text-2xl md:text-3xl ${
                      i === flow.length - 1 ? "text-ocean" : "text-charcoal/50"
                    }`}
                  >
                    {step}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-10 max-w-md text-body md:text-body-lg leading-relaxed text-basalt">
                제주에서 경험한 모든 것이
                <br />
                당신의 새로운 콘텐츠와 브랜드의 재료가 됩니다.
              </p>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}
