import { Container } from "./ui/Container";
import { Reveal } from "./ui/Reveal";
import { Button } from "./ui/Button";
import { APPLY_URL } from "@/lib/site";

export function FoundingCohort() {
  return (
    <section className="bg-ocean py-24 md:py-36">
      <Container>
        <Reveal>
          <p className="text-center text-sm tracking-[0.2em] text-ivory/80">FIRST EDITION</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-5 text-center font-serif text-h2 md:text-h2-lg text-ivory">
            Founding Cohort
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-6 text-center font-serif text-6xl md:text-7xl text-ivory">5–6명</p>
        </Reveal>
        <Reveal delay={0.3}>
          <p className="mx-auto mt-8 max-w-md text-center text-base text-ivory/85">
            첫 기수는 소규모로 운영합니다.
            <br />
            각 참가자의 프로젝트를 실제로 완성시키는 데 집중하기 때문입니다.
          </p>
        </Reveal>
        <Reveal delay={0.4}>
          <div className="mt-10 flex justify-center">
            <Button href={APPLY_URL} variant="invert">
              첫 번째 참가자 되기
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
