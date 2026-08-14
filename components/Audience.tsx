import { Container } from "./ui/Container";
import { Reveal } from "./ui/Reveal";

const audience = [
  "40~60대 인생2막을 준비하는 분",
  "1인사업자",
  "자영업자",
  "강사",
  "컨설턴트",
  "크리에이터",
  "개인브랜드를 만들고 싶은 분",
  "AI를 배우고 있지만 결과물을 만들지 못한 분",
];

export function Audience() {
  return (
    <section className="bg-ivory py-24 md:py-36">
      <Container>
        <Reveal>
          <h2 className="text-center font-serif text-h2 md:text-h2-lg text-charcoal">
            이런 분에게 추천합니다.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <ul className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
            {audience.map((item) => (
              <li key={item} className="flex items-start gap-3 text-base text-charcoal/85">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-ocean" />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-14 text-center font-serif text-h3 text-ocean">
            코딩 경험은 필요하지 않습니다.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
