"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function CTASection({
  title,
  body,
  button,
}: {
  title: string;
  body: string;
  button: { label: string; href: string };
}) {
  return (
    <section className="container-px py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="noise relative overflow-hidden rounded-lg bg-ink px-7 py-14 text-center md:px-12 md:py-20"
      >
        <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-accent/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-accent-2/30 blur-3xl" />

        <h2 className="display relative mx-auto max-w-2xl text-balance text-3xl text-white sm:text-4xl md:text-5xl">
          {title}
        </h2>
        <p className="relative mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
          {body}
        </p>
        <div className="relative mt-9 flex justify-center">
          <Link
            href={button.href}
            className="btn bg-white text-ink hover:-translate-y-0.5 hover:shadow-glow"
          >
            {button.label}
            <span aria-hidden>→</span>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
