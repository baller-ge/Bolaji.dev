import { testimonials } from "@/lib/testimonials";

export function Testimonials() {
  return (
    <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {testimonials.map((t, i) => (
        <li
          key={i}
          className={`flex flex-col gap-4 rounded-(--radius-lg) border p-6 ${
            t.placeholder
              ? "border-dashed border-hairline"
              : "border-hairline bg-bg-elevated"
          }`}
        >
          {t.placeholder && (
            <span className="w-fit rounded-full border border-hairline px-2 py-0.5 font-mono text-[0.7rem] tracking-wide text-ink-subtle uppercase">
              Placeholder · awaiting sign-off
            </span>
          )}
          <p className="flex-1 text-base leading-relaxed text-ink">
            <span aria-hidden className="mr-1 text-accent">
              &ldquo;
            </span>
            {t.quote}
          </p>
          <div className="flex flex-col gap-0.5 border-t border-hairline pt-4">
            <span className="font-sans text-sm font-medium text-ink">
              {t.name}
            </span>
            <span className="font-mono text-xs text-ink-subtle">
              {t.role} · {t.company}
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
}
