"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { home } from "@/lib/content";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function Stats() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!root.current) return;
    const ctx = gsap.context(() => {
      const nums = gsap.utils.toArray<HTMLElement>("[data-count]");
      nums.forEach((el) => {
        const target = parseFloat(el.dataset.count || "0");
        const decimals = (el.dataset.decimals && parseInt(el.dataset.decimals)) || 0;
        const obj = { v: 0 };
        gsap.to(obj, {
          v: target,
          duration: 1.8,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 85%", once: true },
          onUpdate: () => {
            el.textContent = obj.v.toFixed(decimals);
          },
        });
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="container-px py-16 md:py-20">
      <div className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-line bg-line lg:grid-cols-4">
        {home.stats.map((s) => {
          const decimals = s.value % 1 !== 0 ? 1 : 0;
          return (
            <div
              key={s.label}
              className="bg-white p-7 text-center md:p-9"
            >
              <div className="flex items-baseline justify-center font-display text-4xl font-bold tracking-tight md:text-5xl">
                <span data-count={s.value} data-decimals={decimals}>
                  0
                </span>
                <span className="text-accent">{s.suffix}</span>
              </div>
              <p className="mt-2 text-sm text-ink-soft">{s.label}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
