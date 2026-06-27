import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { blog } from "@/lib/content";

export const metadata: Metadata = {
  title: "Blog",
  description: blog.hero.body,
};

export default function BlogPage() {
  const [featured, ...rest] = blog.posts;

  return (
    <>
      <PageHero {...blog.hero} />

      {/* Featured */}
      <section className="container-px py-8 md:py-12">
        <Reveal>
          <article className="noise group relative grid overflow-hidden rounded-lg bg-ink text-white md:grid-cols-2">
            <div className="pointer-events-none absolute -right-16 top-0 h-72 w-72 rounded-full bg-accent/25 blur-3xl" />
            <div className="relative flex flex-col justify-center p-8 md:p-12">
              <span className="eyebrow border-white/15 bg-white/5 text-white/70">
                Featured · {featured.tag}
              </span>
              <h2 className="display mt-5 text-2xl md:text-3xl">
                {featured.title}
              </h2>
              <p className="mt-4 leading-relaxed text-white/70">
                {featured.body}
              </p>
              <span className="mt-6 text-sm text-white/50">
                {featured.read} read
              </span>
            </div>
            <div className="relative hidden items-center justify-center bg-gradient-to-br from-[#141c30] to-[#0b1120] md:flex">
              <div className="grid grid-cols-3 gap-3 p-10 opacity-60">
                {Array.from({ length: 9 }).map((_, i) => (
                  <span
                    key={i}
                    className="h-3 w-3 rounded-full bg-accent/70"
                    style={{ opacity: 0.3 + (i % 3) * 0.25 }}
                  />
                ))}
              </div>
            </div>
          </article>
        </Reveal>
      </section>

      {/* Grid */}
      <section className="container-px py-8 md:py-12">
        <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((post) => (
            <StaggerItem key={post.title}>
              <article className="card-hover group flex h-full cursor-pointer flex-col">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-bg-soft px-3 py-1 text-xs font-medium text-ink-soft">
                    {post.tag}
                  </span>
                  <span className="text-xs text-ink-faint">{post.read}</span>
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold leading-snug transition-colors group-hover:text-accent">
                  {post.title}
                </h3>
                <p className="mt-2.5 flex-1 text-sm leading-relaxed text-ink-soft">
                  {post.body}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-ink transition-all group-hover:gap-3">
                  Read article <span aria-hidden>→</span>
                </span>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* Newsletter */}
      <section className="container-px py-16 md:py-24">
        <Reveal>
          <div className="rounded-lg border border-line bg-bg-soft/60 px-7 py-12 text-center md:px-12">
            <h2 className="display text-2xl md:text-3xl">
              {blog.newsletter.title}
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm text-ink-soft">
              {blog.newsletter.body}
            </p>
            <form className="mx-auto mt-7 flex max-w-md flex-col gap-3 sm:flex-row">
              <input
                type="email"
                required
                placeholder="you@company.com"
                className="w-full rounded-full border border-line bg-white px-5 py-3 text-sm outline-none transition focus:border-ink/40"
              />
              <button type="submit" className="btn-primary shrink-0">
                Subscribe
              </button>
            </form>
          </div>
        </Reveal>
      </section>
    </>
  );
}
