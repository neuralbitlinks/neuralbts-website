import Link from "next/link";
import { site } from "@/lib/content";

const columns = [
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Products", href: "/products" },
      { label: "Clients", href: "/clients" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Custom AI Tools", href: "/services" },
      { label: "Automation", href: "/services" },
      { label: "ML & Data Science", href: "/services" },
      { label: "Conversational AI", href: "/services" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden border-t border-line bg-bg-soft">
      <div className="container-px grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:pr-8">
          <Link href="/" className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-ink text-white">
              <span className="h-2 w-2 rounded-full bg-white" />
            </span>
            <span className="font-display text-[15px] font-bold tracking-tight">
              {site.name}
            </span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-soft">
            {site.description}
          </p>
          <div className="mt-5 flex gap-2">
            {site.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="flex h-9 items-center justify-center rounded-full border border-line bg-white px-3 text-xs font-medium text-ink-soft transition-colors hover:border-ink/30 hover:text-ink"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <h4 className="font-display text-sm font-semibold">{col.title}</h4>
            <ul className="mt-4 space-y-2.5">
              {col.links.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-ink-soft transition-colors hover:text-ink"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h4 className="font-display text-sm font-semibold">Get in touch</h4>
          <ul className="mt-4 space-y-2.5">
            <li>
              <a
                href={`mailto:${site.email}`}
                className="text-sm text-ink-soft transition-colors hover:text-ink"
              >
                {site.email}
              </a>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-sm text-ink-soft transition-colors hover:text-ink"
              >
                Contact form
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-sm text-ink-soft transition-colors hover:text-ink"
              >
                Book a call
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="container-px flex flex-col items-center justify-between gap-3 py-6 text-xs text-ink-faint sm:flex-row">
          <p>
            © {site.name}. All rights reserved. {new Date().getFullYear()}
          </p>
          <p>Built with care for ambitious, AI-curious teams.</p>
        </div>
      </div>
    </footer>
  );
}
