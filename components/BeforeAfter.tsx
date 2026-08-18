import { Container } from "./ui/Container";
import { Section } from "./ui/Section";
import { Reveal } from "./ui/Reveal";

const afterItems = ["Brand", "Website", "Content System", "AI Assistant", "Next Step"];

export function BeforeAfter() {
  return (
    <Section className="bg-ivory">
      <Container className="max-w-2xl text-center">
        <Reveal>
          <p className="text-xs tracking-[0.2em] text-basalt/70">BEFORE JEJU</p>
          <p className="balance mt-5 font-serif text-2xl md:text-3xl text-basalt">
            &ldquo;생각은 있는데
            <br />
            어디서부터 시작해야 할지 모르겠어요.&rdquo;
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="my-12 flex flex-col items-center gap-2">
            <span className="h-16 w-px bg-charcoal/15" />
            <span className="text-xs tracking-[0.25em] text-ocean">5 DAYS IN JEJU</span>
            <span className="h-16 w-px bg-charcoal/15" />
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="text-xs tracking-[0.2em] text-basalt/70">AFTER JEJU</p>
          <p className="mt-5 font-serif text-2xl md:text-4xl text-charcoal">
            {afterItems.join(" · ")}
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <p className="balance mt-14 font-serif text-h3 md:text-h3-lg text-charcoal">
            5일 후에는 생각이 아니라 결과물이 남습니다.
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
