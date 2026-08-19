import Image from "next/image";
import { mentors, Mentor } from "@/data/mentors";
import { Container } from "./ui/Container";
import { Section } from "./ui/Section";
import { Reveal } from "./ui/Reveal";
import { Button } from "./ui/Button";

const toneGradient: Record<Mentor["tone"], string> = {
  sea: "linear-gradient(155deg, #9FC0C2 0%, #4D8388 55%, #2A4F53 100%)",
  deep: "linear-gradient(155deg, #6C959A 0%, #315D62 55%, #1F3F43 100%)",
  sand: "linear-gradient(155deg, #EADFCB 0%, #D9CBB8 55%, #A98F6F 100%)",
  moss: "linear-gradient(155deg, #A3AB8F 0%, #727B65 55%, #454B3B 100%)",
};

function MentorRow({ mentor, index }: { mentor: Mentor; index: number }) {
  const photoFirst = index % 2 === 0;

  const photo = (
    <Reveal className={photoFirst ? "" : "md:order-2"}>
      <div className="group relative aspect-[4/5] overflow-hidden rounded-[4px]">
        {mentor.image ? (
          <Image
            src={mentor.image}
            alt={mentor.imageAlt}
            fill
            sizes="(min-width: 768px) 48vw, 100vw"
            style={{ objectPosition: mentor.imagePosition ?? "center" }}
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
            loading="lazy"
          />
        ) : (
          <div
            className="h-full w-full transition-transform duration-500 ease-out group-hover:scale-[1.02]"
            style={{ background: toneGradient[mentor.tone] }}
          />
        )}
      </div>
      <p className="mt-3 text-xs tracking-[0.15em] text-basalt/70">
        {mentor.number} / {mentor.nameRoman}
      </p>
    </Reveal>
  );

  const text = (
    <div className={photoFirst ? "" : "md:order-1"}>
      <Reveal delay={0.05}>
        <span className="font-serif text-3xl text-ocean">{mentor.number}</span>
        <h3 className="mt-3 font-serif text-h3 md:text-h3-lg text-charcoal">{mentor.name}</h3>
        <p className="mt-2 text-xs tracking-[0.1em] text-basalt">{mentor.focus}</p>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-6 space-y-1">
          {mentor.roles.map((role) => (
            <p key={role} className="font-medium text-charcoal">
              {role}
            </p>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.15}>
        <p className="mt-5 max-w-md leading-relaxed text-basalt">{mentor.bio}</p>
      </Reveal>

      <Reveal delay={0.2}>
        <div className="mt-8 grid grid-cols-2 gap-8">
          <div>
            <p className="text-xs tracking-[0.15em] text-basalt/70">MENTORING</p>
            <ul className="mt-3 space-y-1.5">
              {mentor.mentoring.map((item) => (
                <li key={item} className="text-sm text-charcoal/80">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs tracking-[0.15em] text-basalt/70">CURRENT</p>
            <ul className="mt-3 space-y-1.5">
              {mentor.current.map((item) => (
                <li key={item} className="text-sm text-charcoal/80">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </div>
  );

  return (
    <div className="grid grid-cols-1 gap-8 border-t border-charcoal/10 py-16 md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] md:gap-16 md:py-24">
      {photo}
      {text}
    </div>
  );
}

export function AIMentors() {
  return (
    <Section id="mentors" className="bg-ivory">
      <Container>
        <Reveal>
          <p className="text-xs tracking-[0.25em] text-basalt">AI MENTORS</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="balance mt-6 max-w-xl font-serif text-h2 md:text-h2-lg text-charcoal">
            혼자 만드는 5일이 아닙니다.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-7 max-w-lg text-body md:text-body-lg leading-relaxed text-basalt">
            각자의 분야에서 AI를 실제 일과 삶에 적용해온 멘토들과 함께합니다.
            <br />
            도구 사용법만 알려주는 강사가 아니라 당신의 프로젝트가 실제 결과물이 될 수 있도록
            함께 만드는 사람들입니다.
          </p>
        </Reveal>

        <div>
          {mentors.map((mentor, i) => (
            <MentorRow key={mentor.number} mentor={mentor} index={i} />
          ))}
        </div>

        <div className="border-t border-charcoal/10 pt-16 md:pt-24">
          <Reveal>
            <p className="balance font-serif text-h2 md:text-h2-lg text-charcoal">
              FOUR MENTORS.
              <br />
              FOUR PERSPECTIVES.
              <br />
              ONE PROJECT.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-8 text-sm tracking-[0.1em] text-basalt">
              Marketing · Agent · Content · Career
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mt-10 max-w-lg text-body md:text-body-lg leading-relaxed text-basalt">
              AI를 배우는 목적은 AI 전문가가 되는 것이 아닙니다.
              <br />
              당신이 하고 싶었던 일을 AI와 함께 실제로 시작하는 것.
              <br />
              <br />
              JEJU AI LEARNCATION의 멘토들은 각자의 전문 영역에서 그 과정을 함께합니다.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-10">
              <Button href="#program" variant="secondary">
                프로그램 살펴보기 →
              </Button>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
