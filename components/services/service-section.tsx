import { type ServiceArea } from "@/lib/services";

export function ServiceSection({ area }: { area: ServiceArea }) {
  return (
    <section id={area.key} className="flex scroll-mt-24 flex-col gap-8">
      <header className="flex max-w-[60ch] flex-col gap-3">
        <p className="font-mono text-xs tracking-wider text-ink-subtle uppercase">
          {area.eyebrow}
        </p>
        <h2 className="font-sans text-2xl leading-tight font-medium tracking-tight text-ink sm:text-3xl">
          {area.title}
        </h2>
        <p className="text-lg leading-snug text-ink-muted">{area.lede}</p>
      </header>
      <dl className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
        {area.items.map((it) => (
          <div
            key={it.title}
            className="flex flex-col gap-1.5 border-t border-hairline pt-4"
          >
            <dt className="font-sans text-base font-medium text-ink">
              {it.title}
            </dt>
            <dd className="text-base leading-relaxed text-ink-muted">
              {it.body}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
