import { schedule } from "@/data/schedule";
import { Container } from "./ui/Container";
import { Reveal } from "./ui/Reveal";

export function Journey() {
  return (
    <section id="schedule" className="bg-ivory py-24 md:py-36">
      <Container>
        <Reveal>
          <h2 className="text-center font-serif text-h2 md:text-h2-lg text-charcoal">
            5-Day Journey
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-0 md:grid-cols-5 md:gap-4">
          {schedule.map((day, i) => (
            <Reveal key={day.day} delay={i * 0.06} className="relative">
              <div className="flex md:flex-col gap-5 md:gap-0 border-t border-charcoal/10 py-6 md:border-t-0 md:border-l md:py-0 md:pl-5">
                <div className="shrink-0 md:shrink md:mb-4">
                  <span className="font-serif text-3xl text-ocean">
                    {String(day.day).padStart(2, "0")}
                  </span>
                </div>
                <div>
                  <p className="text-xs tracking-[0.15em] text-basalt">{day.title}</p>
                  <p className="mt-1 font-serif text-lg text-charcoal">{day.titleKo}</p>
                  <ul className="mt-4 space-y-1.5 text-sm text-charcoal/70">
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
    </section>
  );
}
