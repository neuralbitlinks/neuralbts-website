import Link from "next/link";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Stats } from "@/components/Stats";
import { CTASection } from "@/components/CTASection";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { FeatureCard, type IconKey } from "@/components/FeatureCard";
import { home } from "@/lib/content";

const serviceAccents = ["teal", "amber", "red", "purple", "blue", "orange"] as const;
const serviceIcons: IconKey[] = [
  "tool",
  "automation",
  "ml",
  "chat",
  "integration",
  "mlops",
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />

      {/* Services */}
      <section className="container-px py-20 md:py-28">
        <SectionHeading
          eyebrow={home.servicesIntro.eyebrow}
          title={home.servicesIntro.title}
          body={home.servicesIntro.body}
        />
        <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {home.services.map((s, i) => (
            <StaggerItem key={s.title}>
              <FeatureCard
                title={s.title}
                body={s.body}
                href="/services"
                accent={serviceAccents[i % serviceAccents.length]}
                icon={serviceIcons[i % serviceIcons.length]}
                uid={`svc-${i}`}
              />
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal className="mt-10" delay={0.1}>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-ink hover:gap-3 transition-all"
          >
            See all services <span aria-hidden>→</span>
          </Link>
        </Reveal>
      </section>

      {/* Why */}
      <section className="bg-bg-soft/60 py-20 md:py-28">
        <div className="container-px grid items-center gap-12 lg:grid-cols-2">
          <Reveal direction="right">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-line bg-gradient-to-br from-ink to-[#1c2742] p-8 shadow-lg">
              <div className="noise absolute inset-0" />
              <div className="relative flex h-full flex-col justify-between">
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-white/50">
                  Production-grade AI
                </span>
                <div className="grid grid-cols-2 gap-4">
                  {["Secure", "Monitored", "Explainable", "Owned by you"].map(
                    (t) => (
                      <div
                        key={t}
                        className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white backdrop-blur"
                      >
                        {t}
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </Reveal>
          <div>
            <SectionHeading
              eyebrow={home.why.eyebrow}
              title={home.why.title}
              body={home.why.body}
            />
            <div className="mt-8 space-y-5">
              {home.why.points.map((p, i) => (
                <Reveal key={p.title} delay={i * 0.08}>
                  <div className="flex gap-4">
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-ink text-xs text-white">
                      ✓
                    </span>
                    <p className="text-ink-soft">
                      <span className="font-semibold text-ink">{p.title}</span>{" "}
                      {p.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="container-px py-20 md:py-28">
        <SectionHeading
          eyebrow={home.process.eyebrow}
          title={home.process.title}
          align="center"
        />
        <div className="relative mt-14 grid gap-6 md:grid-cols-4">
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-line md:block" />
          {home.process.steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.1}>
              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-line bg-white font-display text-lg font-bold shadow-sm">
                  {i + 1}
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {step.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <Stats />

      {/* Testimonials */}
      <section className="container-px py-12 md:py-16">
        <SectionHeading title={home.testimonialsTitle} align="center" />
        <Stagger className="mt-12 grid gap-5 md:grid-cols-3">
          {home.testimonials.map((t) => (
            <StaggerItem key={t.name}>
              <figure className="card flex h-full flex-col">
                <div className="text-accent">★★★★★</div>
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-ink">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 border-t border-line pt-4">
                  <div className="font-display text-sm font-semibold">
                    {t.name}
                  </div>
                  <div className="text-xs text-ink-soft">{t.role}</div>
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <CTASection {...home.cta} />
    </>
  );
}
