import Image from "next/image";
import { schedule } from "@/data/schedule";
import { Container } from "./ui/Container";
import { Section } from "./ui/Section";
import { Reveal } from "./ui/Reveal";

export function Journey() {
  return (
    <Section id="schedule" className="bg-ivory">
      <Container>
        <Reveal>
          <h2 className="text-center font-serif text-h2 md:text-h2-lg text-charcoal">
            5-Day Journey
          </h2>
        </Reveal>

        <div className="mt-20 grid grid-cols-1 gap-0 md:grid-cols-5 md:gap-6">
          {schedule.map((day, i) => (
            <Reveal key={day.day} delay={i * 0.06} className="relative">
              <div className="flex md:flex-col gap-5 md:gap-0 border-t border-charcoal/10 py-7 md:border-t-0 md:border-l md:py-0 md:pl-6">
                <div className="shrink-0 md:shrink md:mb-5">
                  <span className="text-xs tracking-[0.2em] text-basalt">
                    DAY {String(day.day).padStart(2, "0")} · {day.title}
                  </span>
                </div>
                <div>
                  <p className="font-serif text-2xl text-charcoal">{day.emotion}</p>
                  <ul className="mt-5 space-y-1.5 text-sm text-charcoal/60">
                    {day.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>

      <Reveal delay={0.2}>
        <div className="relative mt-20 aspect-[16/9] md:aspect-[21/9]">
          <Image
            src="/images/experiences/journey-ocean.jpg"
            alt="제주 바다를 바라보는 참가자들의 뒷모습"
            fill
            sizes="100vw"
            className="object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 via-transparent to-transparent" />
          <p className="absolute bottom-6 left-6 text-xs tracking-[0.2em] text-paper/90 md:bottom-10 md:left-10">
            DAY 03 · 제주로 나갑니다
          </p>
        </div>
      </Reveal>
    </Section>
  );
}
