import type { ReactNode } from "react";

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-accent/30 bg-accent-soft px-2 py-[0.1rem] font-mono text-[0.72rem] text-ink">
      {children}
    </span>
  );
}
