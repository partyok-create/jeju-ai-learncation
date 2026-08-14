import { experiences } from "@/data/experiences";
import { Container } from "./ui/Container";
import { Reveal } from "./ui/Reveal";

export function ExperienceGrid() {
  return (
    <section id="experience" className="bg-ivory py-24 md:py-36">
      <Container>
        <Reveal>
          <h2 className="text-center font-serif text-h2 md:text-h2-lg text-charcoal">
            제주 경험 옵션
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {experiences.map((category, i) => (
            <Reveal key={category.id} delay={i * 0.08}>
              <div className="h-full rounded-card border border-charcoal/10 bg-sand/30 p-7">
                <p className="font-serif text-2xl text-ocean tracking-wide">{category.title}</p>
                <p className="mt-1 text-xs text-basalt">{category.titleKo}</p>
                <ul className="mt-6 space-y-2.5 text-sm text-charcoal/80">
                  {category.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <p className="mt-10 text-center text-xs md:text-sm text-basalt">
            체험 프로그램은 계절, 날씨, 운영 상황에 따라 달라질 수 있습니다.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
