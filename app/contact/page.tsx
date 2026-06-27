import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { ContactForm } from "@/components/ContactForm";
import { FAQ } from "@/components/FAQ";
import { Reveal } from "@/components/Reveal";
import { contact, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description: contact.hero.body,
};

export default function ContactPage() {
  return (
    <>
      <PageHero {...contact.hero} />

      <section className="container-px py-12 md:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <ContactForm />
          </Reveal>

          <div className="space-y-5">
            <Reveal delay={0.1}>
              <div className="card">
                <h3 className="font-display text-lg font-semibold">
                  {contact.call.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink-soft">
                  {contact.call.body}
                </p>
                <a
                  href={`mailto:${site.email}`}
                  className="mt-5 inline-flex items-center gap-2 rounded-sm border border-line bg-bg-soft px-4 py-3 text-sm font-medium text-ink transition hover:border-ink/30"
                >
                  ✉ {site.email}
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="noise relative overflow-hidden rounded-lg bg-ink p-7 text-white">
                <div className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-accent/25 blur-2xl" />
                <p className="relative text-sm uppercase tracking-[0.18em] text-white/50">
                  Response time
                </p>
                <p className="relative mt-2 font-display text-3xl font-bold">
                  {"<"} 1 business day
                </p>
                <p className="relative mt-3 text-sm text-white/70">
                  We read every message ourselves — no bots, no call centres.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="container-px py-16 md:py-24">
        <SectionHeading title={contact.faqTitle} align="center" />
        <div className="mt-12">
          <FAQ items={contact.faqs} />
        </div>
      </section>
    </>
  );
}
