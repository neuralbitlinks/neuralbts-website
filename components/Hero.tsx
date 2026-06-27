"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { home } from "@/lib/content";

const NeuralScene = dynamic(() => import("./NeuralScene"), { ssr: false });

const word = {
  hidden: { opacity: 0, y: "100%" },
  show: (i: number) => ({
    opacity: 1,
    y: "0%",
    transition: { duration: 0.7, delay: 0.15 + i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function Hero() {
  const { hero } = home;

  return (
    <section className="relative overflow-hidden pb-16 pt-28 md:pb-24 md:pt-36">
      {/* soft background field */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-gradient-to-b from-accent/10 via-accent-2/5 to-transparent blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_55%,white)]" />
      </div>

      <div className="container-px grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="eyebrow"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {hero.badge}
          </motion.span>

          <h1 className="display mt-6 text-[2.6rem] leading-[1.02] sm:text-6xl lg:text-[4.2rem]">
            {hero.title.map((line, li) => (
              <span key={li} className="block overflow-hidden">
                <motion.span
                  custom={li}
                  variants={word}
                  initial="hidden"
                  animate="show"
                  className="inline-block"
                >
                  {li === hero.title.length - 1 ? (
                    <span className="text-gradient">{line}</span>
                  ) : (
                    line
                  )}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-ink-soft md:text-lg"
          >
            {hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <Link href={hero.primary.href} className="btn-primary">
              {hero.primary.label}
              <span aria-hidden>→</span>
            </Link>
            <Link href={hero.secondary.href} className="btn-ghost">
              {hero.secondary.label}
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto aspect-square w-full max-w-[460px]"
        >
          <div className="absolute inset-0 rounded-[2rem] border border-line bg-gradient-to-b from-bg-soft to-white shadow-lg" />
          <div className="absolute inset-0">
            <NeuralScene />
          </div>
          <div className="pointer-events-none absolute bottom-5 left-5 rounded-full border border-line bg-white/80 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-ink-soft backdrop-blur">
            Neural network · live
          </div>
        </motion.div>
      </div>
    </section>
  );
}
