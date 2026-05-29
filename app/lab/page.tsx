import type { Metadata } from "next";
import Link from "next/link";
import { labs } from "#site/content";

export const metadata: Metadata = {
  title: "Lab",
  description: "Small experiments and CSS / animation studies.",
};

export default function LabIndexPage() {
  const published = labs
    .filter((l) => l.published)
    .sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
    );

  return (
    <div className="flex flex-col gap-12 py-16">
      <header className="flex flex-col gap-2 border-b border-hairline pb-8">
        <p className="font-mono text-sm text-ink-subtle">/lab</p>
        <h1 className="font-sans text-3xl leading-tight font-medium tracking-tight text-ink sm:text-4xl">
          Lab
        </h1>
        <p className="mt-2 max-w-[56ch] font-sans text-xl leading-snug text-ink-muted">
          Small experiments — CSS demos, animation studies, prototypes. Most
          take an afternoon. Some break.
        </p>
      </header>

      {published.length === 0 ? (
        <p className="font-mono text-sm text-ink-subtle">No experiments yet.</p>
      ) : (
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {published.map((l) => (
            <li key={l.slug}>
              <Link
                href={l.permalink}
                className="group flex flex-col gap-3 rounded-(--radius) border border-hairline bg-bg-elevated p-5 transition-colors duration-(--dur-base) hover:border-accent"
              >
                <time
                  dateTime={l.date}
                  className="font-mono text-xs text-ink-subtle"
                >
                  {new Date(l.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                  })}
                </time>
                <h2 className="font-sans text-lg leading-tight font-medium tracking-tight text-ink transition-colors duration-(--dur-fast) group-hover:text-accent">
                  {l.title}
                </h2>
                <p className="text-sm leading-relaxed text-ink-muted">
                  {l.description}
                </p>
                <span className="mt-1 inline-flex items-center gap-1 font-mono text-xs text-ink-subtle transition-all duration-(--dur-fast) group-hover:translate-x-0.5 group-hover:text-accent">
                  see it →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
