"use client";

import { motion } from "framer-motion";

export function PageHero({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string[];
  body: string;
}) {
  return (
    <section className="relative overflow-hidden pb-12 pt-28 md:pb-16 md:pt-40">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[380px] w-[680px] -translate-x-1/2 rounded-full bg-gradient-to-b from-accent/10 to-transparent blur-3xl" />
      </div>
      <div className="container-px">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="eyebrow"
        >
          {eyebrow}
        </motion.span>
        <h1 className="display mt-5 max-w-4xl text-[2.4rem] leading-[1.04] sm:text-5xl md:text-[3.6rem]">
          {title.map((line, i) => (
            <span key={i} className="block overflow-hidden">
              <motion.span
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{
                  duration: 0.7,
                  delay: 0.12 + i * 0.09,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="inline-block"
              >
                {i === title.length - 1 ? (
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
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 max-w-2xl text-base leading-relaxed text-ink-soft md:text-lg"
        >
          {body}
        </motion.p>
      </div>
    </section>
  );
}
