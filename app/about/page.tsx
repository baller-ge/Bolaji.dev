import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Bolaji Adekunle — frontend / product engineer based in Lagos.",
};

const timeline = [
  {
    period: "2024 — present",
    role: "Frontend / Product engineer",
    where: "TD Africa",
    note: "Internal tools, design system, the works.",
  },
  {
    period: "2022 — 2024",
    role: "Frontend Engineer",
    where: "Upwork (freelance)",
    note: "Built a variety of web products for clients across the US and Europe, including a marketplace for custom furniture, an admin dashboard for a chain of boutique hotels, and a design system for a B2B SaaS startup.",
  },
  {
    period: "2020 — 2021",
    role: "Software Engineer",
    where: "ComX by AFEX",
    note: "Built and maintained the design system and component library used across all of ComX, a logistics SaaS product for African freight forwarders. Worked on the order management and tracking surfaces, and the public website.",
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto flex max-w-(--content-width) flex-col gap-16 py-16">
      <header className="flex flex-col gap-3 border-b border-hairline pb-8">
        <p className="font-mono text-sm text-ink-subtle">/about</p>
        <h1 className="font-sans text-3xl leading-tight font-medium tracking-tight text-ink sm:text-4xl">
          About
        </h1>
        <p className="mt-2 max-w-[56ch] font-sans text-xl leading-snug text-ink-muted">
          I&rsquo;m Bolaji. I build software for the web with an eye on craft —
          how the surface feels under a finger, how a page settles after a
          click, the difference between fine and good.
        </p>
      </header>

      <section className="flex flex-col gap-6">
        <h2 className="font-mono text-xs tracking-wider text-ink-subtle uppercase">
          The shape of it
        </h2>
        <div className="flex flex-col gap-4 text-base leading-relaxed text-ink">
          <p>
            Currently a frontend / product engineer at{" "}
            <Link
              href="https://tdafrica.com"
              target="_blank"
              rel="noreferrer"
              className="border-b border-hairline transition-colors duration-(--dur-fast) hover:border-accent hover:text-accent"
            >
              TD Africa
            </Link>
            , where I work on the internal product surfaces that move our
            distribution business — order management, logistics, dashboards,
            the design system underneath all of it.
          </p>
          <p>
            [Add a paragraph or two about the way you work. The kind of
            problems you reach for. The values that show up in the code. Keep
            it specific — readers can tell when a sentence could have been
            written by anyone.]
          </p>
        </div>
      </section>

      <section className="flex flex-col gap-6">
        <h2 className="font-mono text-xs tracking-wider text-ink-subtle uppercase">
          Where I&rsquo;ve been
        </h2>
        <ol className="flex flex-col gap-6">
          {timeline.map((t) => (
            <li
              key={`${t.period}-${t.where}`}
              className="grid grid-cols-[10rem_1fr] gap-6 border-b border-hairline pb-6 last:border-b-0"
            >
              <span className="font-mono text-sm text-ink-subtle">
                {t.period}
              </span>
              <div className="flex flex-col gap-1">
                <h3 className="font-sans text-lg font-medium tracking-tight text-ink">
                  {t.role}{" "}
                  <span className="font-mono text-sm font-normal text-ink-muted">
                    · {t.where}
                  </span>
                </h3>
                <p className="text-base text-ink-muted">{t.note}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="font-mono text-xs tracking-wider text-ink-subtle uppercase">
          Outside the editor
        </h2>
        <p className="text-base leading-relaxed text-ink-muted">
          [A short paragraph on what you do when you&rsquo;re not building.
          Reading, walking, a sport, something you collect, music you&rsquo;re
          on lately. Two or three real things — not &ldquo;I love
          coffee.&rdquo;]
        </p>
      </section>

      <section className="flex flex-col gap-2 border-t border-hairline pt-8">
        <p className="font-mono text-xs text-ink-subtle">Reach out</p>
        <p className="text-base text-ink-muted">
          The best way to find me is{" "}
          <Link
            href="mailto:abdulbasithamzat@gmail.com"
            className="border-b border-hairline text-ink transition-colors duration-(--dur-fast) hover:border-accent hover:text-accent"
          >
            email
          </Link>
          .
        </p>
      </section>
    </div>
  );
}
