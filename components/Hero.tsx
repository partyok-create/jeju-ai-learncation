"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/Button";
import { APPLY_URL } from "@/lib/site";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-end overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #E3E3D7 0%, #B7CBC7 30%, #6C959A 58%, #315D62 84%, #1F3F43 100%)",
      }}
    >
      <div
        className="absolute inset-0 opacity-35"
        style={{
          background:
            "radial-gradient(60% 45% at 50% 0%, rgba(251,250,246,0.5) 0%, rgba(251,250,246,0) 70%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-content px-6 pb-20 pt-32 md:px-10 md:pb-28">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6 text-sm tracking-[0.2em] text-paper/90"
        >
          JEJU AI LEARNCATION
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="balance font-serif text-h1 md:text-h1-lg text-paper max-w-3xl"
        >
          생각만 하던 일을,
          <br className="hidden md:block" /> 제주에서 완성합니다.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-7 font-serif text-xl md:text-2xl text-paper/90 tracking-wide"
        >
          AI × 제주 × 나만의 프로젝트
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-3 text-sm md:text-base text-paper/70"
        >
          4박5일 · 단 5–6명 · 제주 체류형 AI 프로젝트
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-11 flex flex-wrap items-center gap-6"
        >
          <Button href={APPLY_URL} variant="primary">
            첫 기수 신청하기
          </Button>
          <a
            href="#program"
            className="text-sm md:text-base text-paper/85 underline underline-offset-4 hover:text-paper transition-colors"
          >
            프로그램 살펴보기
          </a>
        </motion.div>
      </div>
    </section>
  );
}
