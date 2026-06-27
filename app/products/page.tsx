import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { CTASection } from "@/components/CTASection";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { products } from "@/lib/content";

export const metadata: Metadata = {
  title: "Products",
  description: products.hero.body,
};

export default function ProductsPage() {
  return (
    <>
      <PageHero {...products.hero} />

      {/* Agents */}
      <section className="container-px py-12 md:py-16">
        <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.agents.map((a) => (
            <StaggerItem key={a.title}>
              <article className="card-hover group relative h-full overflow-hidden">
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-accent/5 transition-transform duration-500 group-hover:scale-150" />
                <div className="relative">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-ink text-white">
                    <span className="h-2.5 w-2.5 rounded-full bg-accent" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold">
                    {a.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-ink-soft">
                    {a.body}
                  </p>
                </div>
              </article>
            </StaggerItem>
          ))}

          {/* Custom build card */}
          <StaggerItem>
            <article className="noise relative flex h-full flex-col justify-between overflow-hidden rounded-lg bg-ink p-7 text-white">
              <div className="pointer-events-none absolute -bottom-12 -right-8 h-44 w-44 rounded-full bg-accent-2/30 blur-2xl" />
              <div className="relative">
                <h3 className="font-display text-lg font-semibold">
                  {products.custom.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-white/70">
                  {products.custom.body}
                </p>
              </div>
              <Link
                href={products.custom.button.href}
                className="relative mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white hover:gap-3 transition-all"
              >
                {products.custom.button.label} <span aria-hidden>→</span>
              </Link>
            </article>
          </StaggerItem>
        </Stagger>
      </section>

      {/* Benefits */}
      <section className="bg-bg-soft/60 py-16 md:py-24">
        <div className="container-px">
          <SectionHeading
            title={products.benefitsTitle}
            body={products.benefitsBody}
            align="center"
          />
          <Stagger className="mt-12 grid gap-5 md:grid-cols-3">
            {products.benefits.map((b) => (
              <StaggerItem key={b.title}>
                <article className="card h-full text-center">
                  <h3 className="font-display text-lg font-semibold">
                    {b.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-ink-soft">
                    {b.body}
                  </p>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <CTASection {...products.cta} />
    </>
  );
}
