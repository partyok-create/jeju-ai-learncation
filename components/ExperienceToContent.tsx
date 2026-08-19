import Image from "next/image";
import { Container } from "./ui/Container";
import { Section } from "./ui/Section";
import { Reveal } from "./ui/Reveal";

const flow = ["Walk", "Photo", "Voice Memo", "AI", "Blog / Reel / Story / Brand"];

export function ExperienceToContent() {
  return (
    <Section className="bg-sand/40">
      <Container>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-20 md:items-center">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[4px]">
              <Image
                src="/images/jeju/content-capture.jpg"
                alt="해변에서 스마트폰으로 사진을 기록하는 사람"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
                loading="lazy"
              />
            </div>
          </Reveal>

          <div>
            <Reveal>
              <h2 className="balance font-serif text-h2 md:text-h2-lg text-charcoal">
                경험은 기록이 되고,
                <br />
                기록은 콘텐츠가 됩니다.
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <ul className="mt-10 space-y-3">
                {flow.map((step, i) => (
                  <li
                    key={step}
                    className={`font-serif text-2xl md:text-3xl ${
                      i === flow.length - 1 ? "text-ocean" : "text-charcoal/50"
                    }`}
                  >
                    {step}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-10 max-w-md text-body md:text-body-lg leading-relaxed text-basalt">
                제주에서 경험한 모든 것이
                <br />
                당신의 새로운 콘텐츠와 브랜드의 재료가 됩니다.
              </p>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}
