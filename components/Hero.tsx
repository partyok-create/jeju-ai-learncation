"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/Button";
import { APPLY_URL } from "@/lib/site";

const tags = ["4박5일", "5~6명", "소규모 프로젝트", "코딩 경험 불필요"];

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-end overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #DCE9E6 0%, #B9D3CE 32%, #6E9C9C 60%, #3F6F78 82%, #2C4F56 100%)",
      }}
    >
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(60% 45% at 50% 0%, rgba(246,241,232,0.55) 0%, rgba(246,241,232,0) 70%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-content px-6 pb-16 pt-32 md:px-10 md:pb-24">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-4 text-sm tracking-[0.2em] text-ivory/90"
        >
          JEJU AI LEARNCATION
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="balance font-serif text-h1 md:text-h1-lg text-ivory max-w-3xl"
        >
          생각만 하던 일을,
          <br className="hidden md:block" /> 제주에서 완성합니다.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-xl text-base md:text-lg text-ivory/90"
        >
          AI를 배우고, 제주를 걷고,
          <br />
          내 브랜드와 일을 만들어가는 4박5일
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 flex flex-wrap gap-2"
        >
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-ivory/40 px-4 py-1.5 text-xs md:text-sm text-ivory/90"
            >
              {tag}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Button href={APPLY_URL} variant="primary">
            Founding Cohort 신청하기
          </Button>
          <a
            href="#program"
            className="text-sm md:text-base text-ivory/90 underline underline-offset-4 hover:text-ivory"
          >
            프로그램 보기 ↓
          </a>
        </motion.div>
      </div>
    </section>
  );
}
