import type { ReactNode } from "react";

interface DemoProps {
  caption?: string;
  source?: string;
  children: ReactNode;
}

export function Demo({ caption, source, children }: DemoProps) {
  return (
    <figure className="not-prose my-8 overflow-hidden rounded-(--radius) border border-hairline bg-bg-elevated">
      <div className="flex min-h-[12rem] items-center justify-center p-8">
        {children}
      </div>
      {(caption || source) && (
        <figcaption className="flex items-center justify-between gap-4 border-t border-hairline px-4 py-2 font-mono text-xs text-ink-subtle">
          <span>{caption}</span>
          {source && (
            <a
              href={source}
              target="_blank"
              rel="noreferrer"
              className="text-ink-muted transition-colors hover:text-accent"
            >
              source ↗
            </a>
          )}
        </figcaption>
      )}
    </figure>
  );
}
