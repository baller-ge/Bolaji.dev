import type { ReactNode } from "react";

export function Lead({ children }: { children: ReactNode }) {
  return (
    <p className="font-sans text-xl leading-snug tracking-tight text-ink-muted not-prose mb-10">
      {children}
    </p>
  );
}
