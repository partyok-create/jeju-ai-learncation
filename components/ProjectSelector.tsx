"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { Container } from "./ui/Container";
import { Section } from "./ui/Section";
import { Reveal } from "./ui/Reveal";
import { APPLY_URL } from "@/lib/site";

export function ProjectSelector() {
  const featured = projects.find((p) => p.featured)!;
  const rest = projects.filter((p) => !p.featured);

  return (
    <Section id="projects" className="bg-ivory">
      <Container>
        <Reveal>
          <h2 className="balance font-serif text-h2 md:text-h2-lg text-charcoal max-w-xl">
            제주에서 무엇을 완성하고 싶으세요?
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <a
            href={APPLY_URL}
            className="group mt-16 grid grid-cols-1 gap-10 md:grid-cols-[minmax(0,340px)_1fr] md:items-center md:gap-16"
          >
            <div
              className="relative aspect-[3/4] w-full max-w-[340px] rounded-[4px] flex flex-col justify-between p-8 shadow-[0_24px_60px_-20px_rgba(37,37,33,0.35)] transition-transform duration-500 ease-editorial group-hover:-translate-y-2"
              style={{ background: "linear-gradient(160deg, #315D62 0%, #223f43 100%)" }}
            >
              <span className="text-xs tracking-[0.2em] text-paper/60">PROJECT 01</span>
              <div>
                <p className="font-serif text-3xl leading-tight text-paper">
                  당신의
                  <br />
                  경험을
                  <br />
                  한 권의 책으로
                </p>
                <p className="mt-4 text-xs tracking-[0.15em] text-paper/50">JEJU AI LEARNCATION</p>
              </div>
            </div>

            <div>
              <span className="font-serif text-2xl text-ocean">{featured.number}</span>
              <h3 className="balance mt-3 font-serif text-h3 md:text-h3-lg text-charcoal">
                {featured.title}
              </h3>
              <p className="mt-4 font-serif text-lg md:text-xl text-charcoal/90">
                {featured.headline}
              </p>
              <p className="mt-4 max-w-lg text-body md:text-body-lg text-basalt">
                {featured.description}
              </p>

              <p className="mt-6 text-sm leading-relaxed text-basalt/80">
                {featured.deliverables.join(" · ")}
              </p>

              <span className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-ocean">
                이 프로젝트 선택하기
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </span>
            </div>
          </a>
        </Reveal>

        <div className="mt-24 divide-y divide-charcoal/10 border-t border-charcoal/10">
          {rest.map((project, i) => (
            <Reveal key={project.id} delay={i * 0.06}>
              <motion.a
                href={APPLY_URL}
                whileHover={{ x: 6 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="group flex flex-col gap-2 py-8 md:flex-row md:items-baseline md:gap-8"
              >
                <span className="font-serif text-xl text-ocean md:w-12 shrink-0">
                  {project.number}
                </span>
                <div className="md:flex-1">
                  <h3 className="font-serif text-xl md:text-2xl text-charcoal">{project.title}</h3>
                  <p className="mt-2 text-sm md:text-base text-basalt">{project.description}</p>
                </div>
                <span className="text-sm font-medium text-ocean whitespace-nowrap">
                  선택하기{" "}
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </motion.a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mt-16 text-sm md:text-base text-basalt">
            하나만 선택해도 좋습니다. 중요한 것은 5일 안에 실제 결과물을 만드는 것입니다.
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
