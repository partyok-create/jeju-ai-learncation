import { Container } from "./ui/Container";
import { Section } from "./ui/Section";
import { Reveal } from "./ui/Reveal";
import { Button } from "./ui/Button";
import { APPLY_URL } from "@/lib/site";

const stats = [
  { value: "4박5일", label: "" },
  { value: "6", label: "PEOPLE" },
  { value: "4", label: "PROJECTS" },
  { value: "1", label: "FINISHED OUTCOME" },
];

export function FoundingCohort() {
  return (
    <Section className="bg-ocean">
      <Container>
        <Reveal>
          <p className="text-xs tracking-[0.25em] text-paper/60">FIRST EDITION</p>
          <p className="mt-2 text-sm tracking-[0.2em] text-paper/70">FOUNDING COHORT · 01</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="balance mt-6 font-serif text-h2 md:text-h2-lg text-paper max-w-xl">
            단 여섯 사람과
            <br />
            처음 시작합니다.
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-7 max-w-lg text-body md:text-body-lg text-paper/80">
            첫 기수는 프로그램 규모를 키우는 것보다
            <br />
            각 참가자의 프로젝트 하나를 실제로 완성시키는 데 집중합니다.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-6">
            {stats.map((stat) => (
              <div key={stat.value + stat.label}>
                <p className="font-serif text-3xl md:text-4xl text-paper">{stat.value}</p>
                {stat.label && (
                  <p className="mt-1 text-xs tracking-[0.15em] text-paper/60">{stat.label}</p>
                )}
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.4}>
          <div className="mt-16">
            <Button href={APPLY_URL} variant="invert">
              첫 번째 참가자 되기 →
            </Button>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
