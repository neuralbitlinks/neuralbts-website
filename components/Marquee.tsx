import { clientsBar } from "@/lib/content";

export function Marquee() {
  const row = [...clientsBar, ...clientsBar];
  return (
    <section className="border-y border-line bg-bg-soft/60 py-10">
      <div className="container-px">
        <p className="text-center text-xs font-medium uppercase tracking-[0.22em] text-ink-faint">
          Trusted by teams building with AI
        </p>
      </div>
      <div className="relative mt-7 flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <div className="flex shrink-0 animate-marquee items-center gap-14 pr-14">
          {row.map((name, i) => (
            <span
              key={i}
              className="whitespace-nowrap font-display text-xl font-semibold text-ink-faint transition-colors hover:text-ink"
            >
              {name}
            </span>
          ))}
        </div>
        <div
          aria-hidden
          className="flex shrink-0 animate-marquee items-center gap-14 pr-14"
        >
          {row.map((name, i) => (
            <span
              key={i}
              className="whitespace-nowrap font-display text-xl font-semibold text-ink-faint"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
