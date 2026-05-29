import type { ReactNode } from "react";
import { Info, Lightbulb, AlertTriangle } from "lucide-react";

type CalloutType = "note" | "info" | "warn";

const icons: Record<CalloutType, typeof Info> = {
  note: Lightbulb,
  info: Info,
  warn: AlertTriangle,
};

export function Callout({
  type = "note",
  children,
}: {
  type?: CalloutType;
  children: ReactNode;
}) {
  const Icon = icons[type];
  return (
    <aside
      className="not-prose my-6 flex gap-3 rounded-lg border border-hairline bg-bg-elevated px-4 py-3 text-[0.95rem] leading-relaxed text-ink-muted"
      data-callout={type}
    >
      <Icon
        size={18}
        className="mt-1 shrink-0 text-accent"
        aria-hidden="true"
      />
      <div className="[&>p]:m-0 [&>p+p]:mt-2">{children}</div>
    </aside>
  );
}
