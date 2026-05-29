import type { ReactNode } from "react";

interface StatProps {
  value: string;
  label: string;
  hint?: string;
}

export function Stat({ value, label, hint }: StatProps) {
  return (
    <div className="not-prose flex flex-col gap-1">
      <span className="font-sans text-3xl leading-none font-medium tracking-tight text-accent sm:text-4xl">
        {value}
      </span>
      <span className="font-mono text-xs text-ink-muted">{label}</span>
      {hint && (
        <span className="font-mono text-[0.7rem] text-ink-subtle">{hint}</span>
      )}
    </div>
  );
}

export function StatGrid({ children }: { children: ReactNode }) {
  return (
    <div className="not-prose my-8 grid grid-cols-2 gap-6 border-y border-hairline py-6 sm:grid-cols-3">
      {children}
    </div>
  );
}
