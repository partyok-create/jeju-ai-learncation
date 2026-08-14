"use client";

import { useState } from "react";
import { faq } from "@/data/faq";
import { Container } from "./ui/Container";
import { Reveal } from "./ui/Reveal";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-ivory py-24 md:py-36">
      <Container className="max-w-3xl">
        <Reveal>
          <h2 className="text-center font-serif text-h2 md:text-h2-lg text-charcoal">FAQ</h2>
        </Reveal>

        <div className="mt-14 divide-y divide-charcoal/10 border-t border-b border-charcoal/10">
          {faq.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={item.question}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-6 text-left"
                >
                  <span className="text-base md:text-lg text-charcoal">{item.question}</span>
                  <span
                    className={`shrink-0 text-xl text-ocean transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-editorial ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-6 text-sm md:text-base text-basalt">{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
