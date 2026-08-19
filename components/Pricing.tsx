import { Container } from "./ui/Container";
import { Section } from "./ui/Section";
import { Reveal } from "./ui/Reveal";
import { Button } from "./ui/Button";
import { APPLY_URL } from "@/lib/site";

const results = ["Brand Book", "Website", "Content System", "AI Assistant"];

const included = [
  "AI Workshop",
  "Project Mentoring",
  "Workspace",
  "Jeju Experience",
  "Welcome Dinner",
  "Final Showcase",
  "30-Day Follow Up",
];

const notIncluded = [
  "Accommodation",
  "Flight / Ferry",
  "Personal Transportation",
  "Personal Meals",
  "Optional Activity Fees",
];

const benefits = [
  {
    number: "01",
    title: "1:1 Project Diagnosis",
    description: "참가 전 프로젝트의 목표와 5일 안에 완성할 범위를 함께 정합니다.",
  },
  {
    number: "02",
    title: "30-Day Follow Up",
    description: "프로그램 종료 후 30일 온라인 리뷰 세션을 제공합니다.",
  },
  {
    number: "03",
    title: "Founding Member",
    description:
      "앞으로 진행되는 IDINO JEJU Learncation, 워크숍 및 커뮤니티 프로그램에 Founding Member 우선 혜택을 제공합니다.",
  },
];

const flow = ["THINK", "PLAN", "BUILD", "REFINE", "SHARE"];

export function Pricing() {
  return (
    <>
      <Section id="pricing" className="bg-ivory">
        <Container>
          <Reveal>
            <p className="text-xs tracking-[0.25em] text-basalt">PRICING</p>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="mt-2 text-sm tracking-[0.2em] text-ocean">FOUNDING COHORT · 01</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="balance mt-6 max-w-2xl font-serif text-h2 md:text-h2-lg text-charcoal">
              5일 후에는
              <br />
              강의 자료가 아니라 결과물이 남습니다.
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-14 grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-4">
              {results.map((item) => (
                <p key={item} className="font-serif text-2xl md:text-3xl text-charcoal">
                  {item}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <p className="mt-10 max-w-lg text-body md:text-body-lg text-basalt">
              네 가지 프로젝트 중 하나를 선택해 제주에서 5일 동안 실제 결과물로 완성합니다.
            </p>
          </Reveal>

          <Reveal delay={0.35}>
            <div className="mt-16 border-t border-charcoal/10 pt-12">
              <p className="text-sm tracking-[0.1em] text-basalt/60 line-through">
                정가 ₩890,000
              </p>
              <p className="mt-3 font-serif text-6xl md:text-8xl text-ocean">₩690,000</p>
              <p className="mt-3 text-xs tracking-[0.2em] text-basalt">FOUNDING PRICE</p>
              <p className="mt-6 text-sm md:text-base text-charcoal/80">4박5일 · 6 PEOPLE</p>
            </div>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 gap-10 border-t border-charcoal/10 pt-14 md:grid-cols-2 md:gap-16">
            <Reveal delay={0.1}>
              <div>
                <p className="text-xs tracking-[0.2em] text-basalt/70">INCLUDED</p>
                <ul className="mt-5 space-y-3">
                  {included.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-base text-charcoal/85">
                      <span className="text-ocean">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <div>
                <p className="text-xs tracking-[0.2em] text-basalt/70">NOT INCLUDED</p>
                <ul className="mt-5 space-y-3">
                  {notIncluded.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-base text-charcoal/60">
                      <span className="text-charcoal/30">–</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section className="bg-sand/30">
        <Container>
          <Reveal>
            <p className="text-xs tracking-[0.2em] text-basalt">FOUNDING BENEFIT</p>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="mt-4 font-serif text-2xl md:text-3xl text-charcoal">
              첫 번째 참가자에게만 제공됩니다.
            </p>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-10">
            {benefits.map((b, i) => (
              <Reveal key={b.number} delay={i * 0.08}>
                <div>
                  <span className="font-serif text-5xl text-ocean">{b.number}</span>
                  <p className="mt-4 text-lg font-medium text-charcoal">{b.title}</p>
                  <p className="mt-3 text-sm leading-relaxed text-basalt">{b.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-ivory">
        <Container>
          <Reveal>
            <p className="text-xs tracking-[0.2em] text-basalt">WHY 5 DAYS?</p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="balance mt-6 max-w-lg font-serif text-2xl md:text-3xl text-charcoal">
              하루짜리 강의에서는 도구를 배울 수 있습니다.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-5 max-w-lg text-body md:text-body-lg leading-relaxed text-basalt">
              하지만 자신의 이야기를 정리하고, 만들고, 수정하고,
              <br />
              세상에 내놓기까지는 시간이 필요합니다.
            </p>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="mt-16 flex flex-wrap items-center gap-x-4 gap-y-4">
              {flow.map((step, i) => (
                <span key={step} className="flex items-center gap-4">
                  <span className="font-serif text-3xl tracking-wide text-ocean md:text-5xl">
                    {step}
                  </span>
                  {i < flow.length - 1 && <span className="text-charcoal/25">→</span>}
                </span>
              ))}
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section className="bg-paper">
        <Container className="max-w-2xl text-center">
          <Reveal>
            <p className="text-xs tracking-[0.2em] text-basalt">
              FOUNDING COHORT · LIMITED TO 6 PEOPLE
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="balance mt-6 font-serif text-h3 md:text-h3-lg text-charcoal">
              계속 미뤄온 프로젝트가 있나요?
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-4 text-body text-basalt">
              이번에는 배우는 데서 끝내지 마세요.
              <br />
              제주에서 5일, 한 가지를 제대로 완성해보세요.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-10">
              <Button href={APPLY_URL} variant="primary">
                첫 기수 신청하기 →
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.25}>
            <p className="mt-5 text-xs text-basalt/80">
              숙박 및 제주 왕복 교통은 포함되지 않습니다.
            </p>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
