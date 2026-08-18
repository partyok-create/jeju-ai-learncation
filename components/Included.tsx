import { Container } from "./ui/Container";
import { Section } from "./ui/Section";
import { Reveal } from "./ui/Reveal";

const included = [
  "AI Workshop",
  "Vibe Coding",
  "Project Mentoring",
  "Workspace",
  "Wi-Fi",
  "제주 체험",
  "Welcome Dinner",
  "Final Showcase",
];

const optional = ["숙소 안내", "1:1 멘토링", "프로필 사진", "공항 이동", "추가 체험"];

export function Included() {
  return (
    <Section className="bg-sand/40">
      <Container>
        <Reveal>
          <h2 className="text-center font-serif text-h2 md:text-h2-lg text-charcoal">
            What&apos;s Included
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
          <Reveal delay={0.1}>
            <div>
              <p className="text-xs tracking-[0.15em] text-basalt">포함 항목</p>
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

          <Reveal delay={0.2}>
            <div>
              <p className="text-xs tracking-[0.15em] text-basalt">옵션</p>
              <ul className="mt-5 space-y-3">
                {optional.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-base text-charcoal/60">
                    <span className="text-charcoal/30">+</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
