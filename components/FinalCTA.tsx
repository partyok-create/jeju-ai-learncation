import { Container } from "./ui/Container";
import { Reveal } from "./ui/Reveal";
import { Button } from "./ui/Button";
import { APPLY_URL } from "@/lib/site";

export function FinalCTA() {
  return (
    <section
      className="relative flex min-h-[90vh] items-center overflow-hidden"
      style={{
        background:
          "linear-gradient(200deg, #D9CBB8 0%, #C99A6E 35%, #8C5A4A 65%, #3A2E30 100%)",
      }}
    >
      <div
        className="absolute inset-0 opacity-45"
        style={{
          background:
            "radial-gradient(55% 45% at 50% 100%, rgba(34,34,34,0.5) 0%, rgba(34,34,34,0) 70%)",
        }}
      />
      <Container className="relative text-center">
        <Reveal>
          <h2 className="balance mx-auto max-w-2xl font-serif text-h2 md:text-h2-lg text-ivory">
            아직도 생각만 하고 있는 일이 있나요?
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-md text-base md:text-lg text-ivory/90">
            당장 회사를 그만둘 필요도,
            <br />
            큰 사업계획이 있을 필요도 없습니다.
            <br />
            단지 5일 동안
            <br />
            한 가지를 제대로 시작하면 됩니다.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-16 text-xs tracking-[0.2em] text-ivory/70">JEJU AI LEARNCATION</p>
        </Reveal>
        <Reveal delay={0.25}>
          <p className="balance mt-4 font-serif text-h2 md:text-h2-lg text-ivory">
            생각만 하던 일을,
            <br />
            제주에서 완성합니다.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-12">
            <Button href={APPLY_URL} variant="invert">
              Founding Cohort 신청하기
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
