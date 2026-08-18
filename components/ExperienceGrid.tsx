import Image from "next/image";
import { experiences, ExperienceCategory } from "@/data/experiences";
import { Container } from "./ui/Container";
import { Section } from "./ui/Section";
import { Reveal } from "./ui/Reveal";

const toneGradient: Record<ExperienceCategory["tone"], string> = {
  sea: "linear-gradient(150deg, #9FC0C2 0%, #4D8388 55%, #2A4F53 100%)",
  deep: "linear-gradient(150deg, #4D8388 0%, #315D62 55%, #172C2F 100%)",
  sand: "linear-gradient(150deg, #EADFCB 0%, #D9CBB8 55%, #A98F6F 100%)",
  moss: "linear-gradient(150deg, #A3AB8F 0%, #727B65 55%, #454B3B 100%)",
};

const toneText: Record<ExperienceCategory["tone"], string> = {
  sea: "text-paper/70",
  deep: "text-paper/70",
  sand: "text-charcoal/70",
  moss: "text-paper/70",
};

export function ExperienceGrid() {
  return (
    <Section id="experience" className="bg-ivory">
      <Container>
        <Reveal>
          <h2 className="font-serif text-h2 md:text-h2-lg text-charcoal max-w-xl">
            제주 경험
          </h2>
        </Reveal>
      </Container>

      <div className="mt-16 flex flex-col gap-6 md:gap-8">
        {experiences.map((category, i) => (
          <Reveal key={category.id} delay={i * 0.05}>
            <Container>
              <div
                className={`grid grid-cols-1 overflow-hidden rounded-[4px] md:grid-cols-2 ${
                  i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div
                  className="relative flex aspect-[4/3] flex-col justify-between p-8 md:aspect-auto md:min-h-[420px] md:p-12"
                  style={!category.image ? { background: toneGradient[category.tone] } : undefined}
                >
                  {category.image && (
                    <>
                      <Image
                        src={category.image}
                        alt={category.headline}
                        fill
                        sizes="(min-width: 768px) 50vw, 100vw"
                        className="object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent" />
                    </>
                  )}
                  <span className={`relative text-xs tracking-[0.25em] ${toneText[category.tone]}`}>
                    {category.title}
                  </span>
                </div>
                <div className="flex flex-col justify-center bg-paper p-8 md:p-14">
                  <p className="balance font-serif text-2xl md:text-3xl text-charcoal">
                    {category.headline}
                  </p>
                  <p className="mt-6 text-sm md:text-base text-basalt tracking-wide">
                    {category.items.join(" · ")}
                  </p>
                </div>
              </div>
            </Container>
          </Reveal>
        ))}
      </div>

      <Container>
        <Reveal delay={0.2}>
          <p className="mt-10 text-xs md:text-sm text-basalt/80">
            체험 프로그램은 계절, 날씨, 운영 상황에 따라 달라질 수 있습니다.
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
