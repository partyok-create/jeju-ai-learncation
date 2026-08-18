"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { Container } from "./ui/Container";
import { Section } from "./ui/Section";
import { Reveal } from "./ui/Reveal";
import { APPLY_URL } from "@/lib/site";

export function ProjectSelector() {
  const featured = projects.find((p) => p.featured)!;
  const rest = projects.filter((p) => !p.featured);
  const [expanded, setExpanded] = useState(false);

  return (
    <Section id="projects" className="bg-ivory">
      <Container>
        <Reveal>
          <h2 className="balance font-serif text-h2 md:text-h2-lg text-charcoal max-w-xl">
            제주에서 무엇을 완성하고 싶으세요?
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-[minmax(0,340px)_1fr] md:items-center md:gap-16">
            <div
              className="relative aspect-[3/4] w-full max-w-[340px] rounded-[4px] flex flex-col justify-between p-8 shadow-[0_24px_60px_-20px_rgba(37,37,33,0.35)]"
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
              <p className="mt-4 max-w-lg text-body md:text-body-lg text-basalt">
                {featured.description}
              </p>

              <p className="mt-7 text-xs tracking-[0.2em] text-basalt/70">YOU WILL LEAVE WITH</p>
              <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
                {featured.leaveWith.map((item) => (
                  <li key={item} className="text-sm text-charcoal/80">
                    {item}
                  </li>
                ))}
                {expanded &&
                  featured.moreDeliverables?.map((item) => (
                    <li key={item} className="text-sm text-charcoal/80">
                      {item}
                    </li>
                  ))}
              </ul>

              {featured.moreDeliverables && (
                <button
                  type="button"
                  onClick={() => setExpanded((v) => !v)}
                  className="mt-4 block text-xs text-ocean underline underline-offset-4"
                >
                  {expanded ? "간단히 보기" : "결과물 더 보기"}
                </button>
              )}

              <a
                href={APPLY_URL}
                className="group mt-8 flex w-fit items-center gap-2 text-sm font-medium text-ocean"
              >
                이 프로젝트로 시작하기
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>
        </Reveal>

        <div className="mt-20 grid grid-cols-1 gap-px bg-charcoal/10 md:grid-cols-3">
          {rest.map((project, i) => (
            <Reveal key={project.id} delay={i * 0.06} className="bg-ivory">
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="flex h-full flex-col border-t-2 border-ocean bg-paper p-8"
              >
                <span className="font-serif text-xl text-ocean">{project.number}</span>
                <h3 className="mt-3 font-serif text-xl text-charcoal">{project.title}</h3>
                <p className="mt-3 text-sm text-basalt">{project.description}</p>

                <p className="mt-6 text-xs tracking-[0.2em] text-basalt/70">YOU WILL LEAVE WITH</p>
                <ul className="mt-3 space-y-1.5">
                  {project.leaveWith.map((item) => (
                    <li key={item} className="text-sm text-charcoal/80">
                      {item}
                    </li>
                  ))}
                </ul>

                <a
                  href={APPLY_URL}
                  className="group mt-auto pt-7 inline-flex items-center gap-2 text-sm font-medium text-ocean"
                >
                  이 프로젝트로 시작하기
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </motion.div>
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
