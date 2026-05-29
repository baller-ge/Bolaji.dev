import type { Metadata } from "next";
import Link from "next/link";
import { writings } from "#site/content";

export const metadata: Metadata = {
  title: "Writing",
  description: "Essays and notes — Bolaji Adekunle.",
};

export default function WritingIndexPage() {
  const published = writings
    .filter((w) => w.published)
    .sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
    );

  return (
    <div className="flex flex-col gap-12 py-16">
      <header className="flex flex-col gap-2 border-b border-hairline pb-8">
        <p className="font-mono text-sm text-ink-subtle">/writing</p>
        <h1 className="font-sans text-3xl leading-tight font-medium tracking-tight text-ink sm:text-4xl">
          Writing
        </h1>
        <p className="mt-2 max-w-[56ch] font-sans text-xl leading-snug text-ink-muted">
          Notes on craft, the web, and the things I&rsquo;m learning. Updated
          when I have something worth saying.
        </p>
      </header>

      {published.length === 0 ? (
        <p className="font-mono text-sm text-ink-subtle">
          No posts published yet.
        </p>
      ) : (
        <ul className="flex flex-col">
          {published.map((p) => (
            <li key={p.slug}>
              <Link
                href={p.permalink}
                className="group relative grid grid-cols-[7rem_1fr] items-baseline gap-6 border-b border-hairline py-6 before:absolute before:right-0 before:bottom-[-1px] before:left-0 before:h-px before:origin-left before:scale-x-0 before:bg-accent before:transition-transform before:duration-(--dur-base) hover:before:scale-x-100"
              >
                <time
                  dateTime={p.date}
                  className="font-mono text-sm text-ink-subtle"
                >
                  {new Date(p.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </time>
                <div className="flex flex-col gap-1">
                  <h2 className="font-sans text-xl leading-tight font-medium tracking-tight text-ink transition-colors duration-(--dur-fast) group-hover:text-accent">
                    {p.title}
                  </h2>
                  <p className="max-w-[60ch] text-base leading-relaxed text-ink-muted">
                    {p.description}
                  </p>
                  {p.tags.length > 0 && (
                    <p className="mt-1 font-mono text-xs text-ink-subtle">
                      {p.tags.map((t) => `#${t}`).join(" ")}
                    </p>
                  )}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
