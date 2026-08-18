import { Container } from "./ui/Container";
import { Section } from "./ui/Section";
import { Reveal } from "./ui/Reveal";

const audience = [
  "새로운 일을 시작하고 싶은 분",
  "자신의 경험과 전문성을 브랜드로 만들고 싶은 분",
  "1인사업자 · 강사 · 컨설턴트 · 크리에이터",
  "AI를 배우는 데서 그치지 않고 실제 결과물을 만들고 싶은 분",
  "혼자서는 계속 미루던 프로젝트가 있는 분",
];

export function Audience() {
  return (
    <Section className="bg-ivory">
      <Container>
        <Reveal>
          <h2 className="text-center font-serif text-h2 md:text-h2-lg text-charcoal">
            이런 분에게 추천합니다.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <ul className="mx-auto mt-12 max-w-xl space-y-4">
            {audience.map((item) => (
              <li key={item} className="flex items-start gap-3 text-base text-charcoal/85">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-ocean" />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </Section>
  );
}
