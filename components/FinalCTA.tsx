import Image from "next/image";
import { Container } from "./ui/Container";
import { Reveal } from "./ui/Reveal";
import { Button } from "./ui/Button";
import { APPLY_URL } from "@/lib/site";

export function FinalCTA() {
  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden">
      <Image
        src="/images/hero/sunset-field-2.jpg"
        alt="제주 노을과 보리밭"
        fill
        sizes="100vw"
        className="object-cover"
        loading="lazy"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(37,37,33,0.15) 0%, rgba(37,37,33,0.1) 35%, rgba(37,37,33,0.55) 78%, rgba(37,37,33,0.8) 100%)",
        }}
      />
      <Container className="relative text-center">
        <Reveal>
          <p className="text-xs tracking-[0.2em] text-paper/70">JEJU AI LEARNCATION</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="balance mx-auto mt-6 max-w-2xl font-serif text-h2 md:text-h2-lg text-paper">
            아직도 생각만 하고 있는 일이 있나요?
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mx-auto mt-7 max-w-md text-body md:text-body-lg text-paper/90">
            당장 인생을 바꿀 필요는 없습니다.
            <br />
            제주에서 5일 동안
            <br />
            한 가지를 제대로 시작해보세요.
          </p>
        </Reveal>

        <Reveal delay={0.25}>
          <p className="balance mt-16 font-serif text-h2 md:text-h2-lg text-paper">
            생각만 하던 일을,
            <br />
            제주에서 완성합니다.
          </p>
        </Reveal>

        <Reveal delay={0.35}>
          <div className="mt-14">
            <Button href={APPLY_URL} variant="invert">
              Founding Cohort 신청하기 →
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
