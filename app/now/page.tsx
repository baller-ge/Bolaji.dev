import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Now",
  description: "What I'm working on, reading, and thinking about right now.",
};

const lastUpdated = "May 2026";

export default function NowPage() {
  return (
    <div className="mx-auto flex max-w-(--content-width) flex-col gap-12 py-16">
      <header className="flex flex-col gap-3 border-b border-hairline pb-8">
        <p className="font-mono text-sm text-ink-subtle">/now</p>
        <h1 className="font-sans text-3xl leading-tight font-medium tracking-tight text-ink sm:text-4xl">
          What I&rsquo;m up to
        </h1>
        <p className="mt-2 font-mono text-xs text-ink-subtle">
          Updated {lastUpdated} · this is a{" "}
          <Link
            href="https://nownownow.com/about"
            target="_blank"
            rel="noreferrer"
            className="border-b border-hairline text-ink-muted transition-colors duration-(--dur-fast) hover:border-accent hover:text-accent"
          >
            /now page
          </Link>
          .
        </p>
      </header>

      <section className="flex flex-col gap-4">
        <h2 className="font-mono text-xs tracking-wider text-ink-subtle uppercase">
          Working on
        </h2>
        <ul className="flex flex-col gap-3 text-base leading-relaxed text-ink">
          <li>
            <span className="text-accent">→</span> Building the design system
            and internal tooling for TD Africa.
          </li>
          <li>
            <span className="text-accent">→</span> [Add a specific current
            project — name it.]
          </li>
          <li>
            <span className="text-accent">→</span> [Something side-of-desk —
            an open-source contribution, a study, a small thing.]
          </li>
        </ul>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="font-mono text-xs tracking-wider text-ink-subtle uppercase">
          Reading
        </h2>
        <ul className="flex flex-col gap-2 font-mono text-sm text-ink-muted">
          <li>
            <span className="text-ink">[Book title]</span> — [Author]
          </li>
          <li>
            <span className="text-ink">[Article or essay]</span> — [Author]
          </li>
        </ul>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="font-mono text-xs tracking-wider text-ink-subtle uppercase">
          Thinking about
        </h2>
        <p className="text-base leading-relaxed text-ink-muted">
          [One or two sentences on a question you&rsquo;re actively turning
          over. Doesn&rsquo;t have to be resolved. The point of a /now page is
          to be honest about the present, not to summarize.]
        </p>
      </section>

      <section className="flex flex-col gap-2 border-t border-hairline pt-8">
        <p className="font-mono text-xs text-ink-subtle">
          The previous edition lived here too, until I overwrote it. The page
          replaces itself every few months. If you remember something I said
          here and can&rsquo;t find it, that&rsquo;s the system working.
        </p>
      </section>
    </div>
  );
}
