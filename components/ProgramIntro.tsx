import { Reveal } from "./ui/Reveal";
import { Container } from "./ui/Container";
import { Section } from "./ui/Section";

export function ProgramIntro() {
  return (
    <Section id="program" className="bg-ivory">
      <Container>
        <Reveal>
          <p className="balance mx-auto max-w-3xl text-center font-serif text-h2 md:text-h2-lg text-charcoal">
            또 하나의 AI 강의를 들으러
            <br />
            제주에 오는 것이 아닙니다.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-9 max-w-xl text-center text-body md:text-body-lg leading-relaxed text-basalt">
            일상에서 잠시 떨어져
            <br />
            생각하고, 걷고, 배우고, 만들기 위해 제주에 옵니다.
            <br />
            <br />
            그리고 5일 뒤
            <br />
            무언가 하나를 완성해 돌아갑니다.
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
