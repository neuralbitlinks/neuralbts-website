import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { CTASection } from "@/components/CTASection";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { about } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description: about.hero.body,
};

export default function AboutPage() {
  return (
    <>
      <PageHero {...about.hero} />

      {/* Story */}
      <section className="container-px py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading
              eyebrow={about.story.eyebrow}
              title={about.story.title}
            />
          </div>
          <div className="space-y-5">
            {about.story.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <p className="text-base leading-relaxed text-ink-soft md:text-lg">
                  {p}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="bg-bg-soft/60 py-16 md:py-24">
        <div className="container-px grid gap-5 md:grid-cols-2">
          {about.missionVision.map((m, i) => (
            <Reveal key={m.title} delay={i * 0.1}>
              <div className="card h-full">
                <h3 className="font-display text-xl font-semibold">{m.title}</h3>
                <p className="mt-3 leading-relaxed text-ink-soft">{m.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="container-px py-16 md:py-24">
        <SectionHeading title={about.valuesTitle} align="center" />
        <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {about.values.map((v) => (
            <StaggerItem key={v.title}>
              <article className="card-hover h-full">
                <h3 className="font-display text-lg font-semibold">{v.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink-soft">
                  {v.body}
                </p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* Team */}
      <section className="container-px pb-8">
        <Reveal>
          <div className="noise relative overflow-hidden rounded-lg bg-ink px-7 py-14 text-center md:px-12">
            <div className="pointer-events-none absolute -right-10 -top-10 h-56 w-56 rounded-full bg-accent/25 blur-3xl" />
            <h2 className="display relative text-2xl text-white md:text-4xl">
              {about.team.title}
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-white/70">
              {about.team.body}
            </p>
            <div className="relative mt-8 flex flex-wrap justify-center gap-3">
              {["Finance", "Healthcare", "Retail", "Logistics"].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <CTASection {...about.cta} />
    </>
  );
}
