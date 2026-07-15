import Link from "next/link";
import { projects } from "#site/content";
import { serviceAreas } from "@/lib/services";
import { Hero } from "@/components/hero/hero";
import { ProjectGrid } from "@/components/projects/project-grid";
import { Testimonials } from "@/components/testimonials/testimonials";

export default function HomePage() {
  const published = projects
    .filter((p) => p.published)
    .sort((a, b) => a.order - b.order);

  const publishedCount = published.length;

  return (
    <>
      <Hero />

      {/* Positioning strip */}
      <section className="border-t border-hairline py-6">
        <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-sm text-ink-muted">
          <li className="text-ink">Corporate &amp; professional-services websites</li>
          <li className="text-ink-subtle" aria-hidden>
            /
          </li>
          <li>Built</li>
          <li className="text-ink-subtle" aria-hidden>
            /
          </li>
          <li>Secured</li>
          <li className="text-ink-subtle" aria-hidden>
            /
          </li>
          <li>Deployed</li>
          <li className="text-ink-subtle" aria-hidden>
            /
          </li>
          <li>Maintained</li>
        </ul>
      </section>

      {/* Selected projects */}
      <section className="flex flex-col gap-8 border-t border-hairline py-16">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="flex flex-col gap-2">
            <p className="font-mono text-xs tracking-wider text-ink-subtle uppercase">
              Selected work
            </p>
            <h2 className="font-sans text-2xl leading-tight font-medium tracking-tight text-ink sm:text-3xl">
               Sites in production right now
            </h2>
          </div>
          <Link
            href="/projects"
            className="font-mono text-sm text-ink-muted transition-colors duration-(--dur-fast) hover:text-accent"
          >
            View projects page →
          </Link>
        </div>
        <ProjectGrid projects={published} />
      </section>

      {/* Services teaser */}
      <section className="flex flex-col gap-8 border-t border-hairline py-16">
        <div className="flex flex-col gap-2">
          <p className="font-mono text-xs tracking-wider text-ink-subtle uppercase">
            How I work
          </p>
          <h2 className="font-sans text-2xl leading-tight font-medium tracking-tight text-ink sm:text-3xl">
            Security and support, not just a launch
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {serviceAreas.map((area) => (
            <Link
              key={area.key}
              href={`/services#${area.key}`}
              className="group flex flex-col gap-4 rounded-(--radius-lg) border border-hairline bg-bg-elevated p-6 transition-colors duration-(--dur-base) hover:border-accent"
            >
              <p className="font-mono text-xs tracking-wider text-ink-subtle uppercase">
                {area.eyebrow}
              </p>
              <h3 className="font-sans text-xl font-medium tracking-tight text-ink transition-colors duration-(--dur-fast) group-hover:text-accent">
                {area.title}
              </h3>
              <p className="text-base leading-relaxed text-ink-muted">
                {area.lede}
              </p>
              <ul className="mt-1 flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs text-ink-subtle">
                {area.items.map((it) => (
                  <li key={it.title}>· {it.title}</li>
                ))}
              </ul>
            </Link>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="flex flex-col gap-8 border-t border-hairline py-16">
        <div className="flex flex-col gap-2">
          <p className="font-mono text-xs tracking-wider text-ink-subtle uppercase">
            References
          </p>
          <h2 className="font-sans text-2xl leading-tight font-medium tracking-tight text-ink sm:text-3xl">
            What clients say
          </h2>
        </div>
        <Testimonials />
      </section>

      {/* CTA */}
      <section className="flex flex-col items-start gap-4 border-t border-hairline py-16">
        <h2 className="max-w-[24ch] font-sans text-2xl leading-tight font-medium tracking-tight text-ink sm:text-3xl">
          Need a website that ships, stays secure, and stays up?
        </h2>
        <Link
          href="/contact"
          className="rounded-(--radius) bg-accent px-5 py-2.5 font-mono text-sm text-bg transition-colors duration-(--dur-fast) hover:bg-accent-hover"
        >
          Get in touch →
        </Link>
      </section>
    </>
  );
}
