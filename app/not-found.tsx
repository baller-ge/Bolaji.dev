import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] flex-col items-start justify-center gap-6">
      <p className="font-mono text-sm text-ink-subtle">404 / not found</p>
      <h1 className="font-sans text-4xl font-medium leading-tight tracking-tight text-ink sm:text-5xl">
        This page is out{" "}
        <span className="text-accent">crafting</span> something
        <br />
        somewhere else.
      </h1>
      <Link
        href="/"
        className="font-mono text-sm text-ink-muted underline decoration-hairline underline-offset-4 transition-colors duration-(--dur-fast) hover:text-accent hover:decoration-accent"
      >
        ← back home
      </Link>
    </section>
  );
}
