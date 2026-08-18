import { Container } from "./ui/Container";
import { Section } from "./ui/Section";
import { Reveal } from "./ui/Reveal";

const mockups = [
  { label: "Book Cover", bg: "linear-gradient(160deg, #315D62 0%, #1F3F43 100%)" },
  { label: "Website", bg: "linear-gradient(160deg, #EADFCB 0%, #D9CBB8 100%)" },
  { label: "Social Content", bg: "linear-gradient(160deg, #9FC0C2 0%, #4D8388 100%)" },
  { label: "AI Assistant", bg: "linear-gradient(160deg, #A3AB8F 0%, #727B65 100%)" },
];

export function BeforeAfter() {
  return (
    <Section className="bg-sand/40">
      <Container>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">
          <Reveal>
            <div className="flex h-full flex-col justify-center">
              <p className="text-xs tracking-[0.2em] text-basalt">BEFORE JEJU</p>
              <p className="balance mt-6 font-serif text-2xl md:text-3xl text-charcoal">
                &ldquo;생각은 있는데 어디서부터 시작해야 할지 모르겠어요.&rdquo;
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div>
              <p className="text-xs tracking-[0.2em] text-basalt">AFTER JEJU</p>
              <div className="mt-6 grid grid-cols-2 gap-3">
                {mockups.map((m) => (
                  <div
                    key={m.label}
                    className="flex aspect-[4/3] items-end rounded-[4px] p-4"
                    style={{ background: m.bg }}
                  >
                    <span className="text-xs text-paper/90">{m.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.3}>
          <p className="balance mt-20 text-center font-serif text-h3 md:text-h3-lg text-charcoal">
            5일 후에는 생각이 아니라 결과물이 남습니다.
          </p>
        </Reveal>
        <Reveal delay={0.35}>
          <p className="mt-5 text-center text-body md:text-body-lg text-basalt">
            URL이 남고, 원고가 남고, 콘텐츠가 남습니다.
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
