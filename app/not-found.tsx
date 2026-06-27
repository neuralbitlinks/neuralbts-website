import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-px flex min-h-[70vh] flex-col items-center justify-center pt-28 text-center">
      <span className="font-display text-7xl font-bold text-ink-faint">404</span>
      <h1 className="display mt-4 text-3xl">This page wandered off</h1>
      <p className="mt-3 max-w-sm text-ink-soft">
        The link you followed may be broken, or the page may have been moved.
      </p>
      <Link href="/" className="btn-primary mt-8">
        Back to home
      </Link>
    </section>
  );
}
