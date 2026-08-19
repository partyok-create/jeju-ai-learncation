"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "./ui/Button";
import { APPLY_URL } from "@/lib/site";

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100svh] items-end overflow-hidden">
      <Image
        src="/images/hero/sunset-field-mobile.jpg"
        alt="대평리 보리밭과 제주 절벽"
        fill
        priority
        sizes="100vw"
        className="object-cover md:hidden"
      />
      <Image
        src="/images/hero/sunset-field.jpg"
        alt="대평리 보리밭과 제주 절벽"
        fill
        priority
        sizes="100vw"
        className="hidden object-cover md:block"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(37,37,33,0.05) 0%, rgba(37,37,33,0) 25%, rgba(37,37,33,0.35) 72%, rgba(37,37,33,0.62) 100%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-content px-6 pb-20 pt-32 md:px-10 md:pb-28">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6 font-serif italic text-sm tracking-[0.1em] text-paper/80"
        >
          Inspired by Nature, Focused on Myself
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="balance font-serif text-[38px] leading-[1.1] md:text-[76px] md:leading-[1.05] text-paper max-w-3xl"
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
          4박5일, 5~6명, 제주 체류형 AI 런케이션 프로젝트
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-11 flex flex-wrap items-center gap-6"
        >
          <Button href={APPLY_URL} variant="primary">
            첫 기수 신청하기 →
          </Button>
          <a
            href="#program"
            className="text-sm md:text-base text-paper/85 underline underline-offset-4 hover:text-paper transition-colors"
          >
            프로그램 살펴보기 ↓
          </a>
        </motion.div>
      </div>
    </section>
  );
}
