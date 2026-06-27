import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { CTASection } from "@/components/CTASection";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description: services.hero.body,
};

export default function ServicesPage() {
  return (
    <>
      <PageHero {...services.hero} />

      {/* Service list */}
      <section className="container-px py-12 md:py-16">
        <Stagger className="grid gap-5 md:grid-cols-2">
          {services.list.map((s, i) => (
            <StaggerItem key={s.title}>
              <article className="card-hover group flex h-full flex-col">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-bg-soft font-display text-sm font-bold transition-colors group-hover:bg-ink group-hover:text-white">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-xl font-semibold">
                    {s.title}
                  </h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                  {s.body}
                </p>
                <ul className="mt-5 space-y-2 border-t border-line pt-5">
                  {s.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-center gap-2.5 text-sm text-ink"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                      {b}
                    </li>
                  ))}
                </ul>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* Engagement */}
      <section className="bg-bg-soft/60 py-16 md:py-24">
        <div className="container-px">
          <SectionHeading
            eyebrow={services.engagement.eyebrow}
            title={services.engagement.title}
            align="center"
          />
          <div className="relative mt-14 grid gap-6 md:grid-cols-4">
            {services.engagement.steps.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.1}>
                <div className="card h-full">
                  <span className="font-display text-3xl font-bold text-ink-faint">
                    0{i + 1}
                  </span>
                  <h3 className="mt-3 font-display text-lg font-semibold">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                    {step.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement models */}
      <section className="container-px py-16 md:py-24">
        <SectionHeading title={services.models.title} align="center" />
        <Stagger className="mt-12 grid gap-5 md:grid-cols-3">
          {services.models.items.map((m) => (
            <StaggerItem key={m.title}>
              <article className="card-hover h-full">
                <h3 className="font-display text-lg font-semibold">{m.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink-soft">
                  {m.body}
                </p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <CTASection {...services.cta} />
    </>
  );
}
