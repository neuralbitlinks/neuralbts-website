import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { CTASection } from "@/components/CTASection";
import { Marquee } from "@/components/Marquee";
import { Stagger, StaggerItem } from "@/components/Reveal";
import { clients } from "@/lib/content";

export const metadata: Metadata = {
  title: "Clients",
  description: clients.hero.body,
};

export default function ClientsPage() {
  return (
    <>
      <PageHero {...clients.hero} />
      <Marquee />

      {/* Case studies */}
      <section className="container-px py-16 md:py-24">
        <SectionHeading title={clients.casesTitle} align="center" />
        <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {clients.cases.map((c) => (
            <StaggerItem key={c.title}>
              <article className="card-hover group flex h-full flex-col">
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-4xl font-bold tracking-tight text-ink">
                    {c.metric}
                  </span>
                  <span className="text-xs uppercase tracking-wide text-ink-faint">
                    {c.metricLabel}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold">
                  {c.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink-soft">
                  {c.body}
                </p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* Testimonials */}
      <section className="bg-bg-soft/60 py-16 md:py-24">
        <div className="container-px">
          <SectionHeading title={clients.testimonialsTitle} align="center" />
          <Stagger className="mt-12 grid gap-5 md:grid-cols-2">
            {clients.testimonials.map((t, i) => (
              <StaggerItem key={i}>
                <figure className="card h-full">
                  <div className="text-accent">★★★★★</div>
                  <blockquote className="mt-4 leading-relaxed text-ink">
                    “{t.quote}”
                  </blockquote>
                </figure>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Sectors */}
      <section className="container-px py-16 md:py-24">
        <SectionHeading title={clients.sectorsTitle} align="center" />
        <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {clients.sectors.map((s) => (
            <StaggerItem key={s.title}>
              <article className="card-hover h-full">
                <h3 className="font-display text-lg font-semibold">{s.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink-soft">
                  {s.body}
                </p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <CTASection {...clients.cta} />
    </>
  );
}
