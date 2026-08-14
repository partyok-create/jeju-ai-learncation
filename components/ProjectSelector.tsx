"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { Container } from "./ui/Container";
import { Reveal } from "./ui/Reveal";
import { APPLY_URL } from "@/lib/site";

export function ProjectSelector() {
  return (
    <section id="projects" className="bg-sand/40 py-24 md:py-36">
      <Container>
        <Reveal>
          <h2 className="balance text-center font-serif text-h2 md:text-h2-lg text-charcoal">
            제주에서 무엇을 완성하고 싶으세요?
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={i * 0.08}>
              <motion.a
                href={APPLY_URL}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="group block h-full rounded-card border border-charcoal/10 bg-ivory p-8 shadow-[0_1px_2px_rgba(34,34,34,0.04)]"
              >
                <span className="font-serif text-3xl text-ocean">{project.number}</span>
                <h3 className="mt-4 font-serif text-h3 md:text-h3-lg text-charcoal">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm md:text-base text-basalt">{project.description}</p>

                <ul className="mt-6 flex flex-wrap gap-2">
                  {project.deliverables.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-charcoal/15 px-3 py-1 text-xs text-charcoal/70"
                    >
                      {item}
                    </li>
                  ))}
                </ul>

                <span className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-ocean">
                  이 프로젝트 선택하기
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </span>
              </motion.a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <p className="mt-14 text-center text-sm md:text-base text-basalt">
            하나만 선택해도 좋습니다.
            <br />
            중요한 것은 5일 안에 실제 결과물을 만드는 것입니다.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
