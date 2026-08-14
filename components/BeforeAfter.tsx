import { Container } from "./ui/Container";
import { Reveal } from "./ui/Reveal";

const afterItems = ["Brand", "Website", "Content", "AI Assistant", "Next Step"];

export function BeforeAfter() {
  return (
    <section className="bg-sand/40 py-24 md:py-36">
      <Container>
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-[1fr_auto_1fr] md:gap-6">
          <Reveal>
            <div className="rounded-card border border-charcoal/10 bg-ivory p-8 h-full">
              <p className="text-xs tracking-[0.15em] text-basalt">BEFORE JEJU</p>
              <p className="mt-5 font-serif text-xl md:text-2xl text-charcoal balance">
                &ldquo;생각은 있는데 어디서부터 시작해야 할지 모르겠어요.&rdquo;
              </p>
              <p className="mt-3 text-sm text-basalt italic">&ldquo;I have an idea.&rdquo;</p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex justify-center">
              <span className="font-serif text-2xl md:text-3xl text-ocean whitespace-nowrap px-4">
                5 DAYS
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="rounded-card border border-ocean/20 bg-ocean p-8 h-full">
              <p className="text-xs tracking-[0.15em] text-ivory/80">AFTER JEJU</p>
              <ul className="mt-5 space-y-3 text-base md:text-lg text-ivory">
                {afterItems.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span>{item}</span>
                    <span className="text-ivory/70">✓</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.3}>
          <p className="balance mt-14 text-center font-serif text-h3 md:text-h3-lg text-charcoal">
            5일 후에는 생각이 아니라 결과물이 남습니다.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
