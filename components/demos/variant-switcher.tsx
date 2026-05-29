"use client";

/**
 * VariantSwitcher — sample embedded demo for case studies.
 *
 * Shows three variants of a small UI element side-by-side, clickable to
 * preview each. Demonstrates the "<Demo>{<SomeInteractive />}</Demo>"
 * pattern that case study MDX can use to show real components inline.
 */

import { useState } from "react";
import { motion } from "motion/react";

const variants = [
  {
    name: "before",
    note: "the old style",
    sample: (
      <button className="rounded border-2 border-amber-700 bg-amber-300 px-4 py-2 font-mono text-xs text-amber-900 shadow-[2px_2px_0_#000]">
        confirm order
      </button>
    ),
  },
  {
    name: "iteration",
    note: "mid-redesign",
    sample: (
      <button className="rounded-lg border border-ink/30 bg-bg-elevated px-4 py-2 font-mono text-xs text-ink">
        confirm order
      </button>
    ),
  },
  {
    name: "after",
    note: "shipped",
    sample: (
      <button className="rounded-md border border-transparent bg-ink px-4 py-2 font-mono text-xs text-bg transition-colors duration-(--dur-fast) hover:bg-accent hover:text-ink">
        confirm order
      </button>
    ),
  },
];

export function VariantSwitcher() {
  const [active, setActive] = useState(2);
  const current = variants[active];

  return (
    <div className="flex w-full max-w-md flex-col items-center gap-6">
      <motion.div
        key={current.name}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
        className="flex h-20 items-center justify-center"
      >
        {current.sample}
      </motion.div>
      <div
        role="tablist"
        aria-label="Variants"
        className="flex gap-2 rounded-full border border-hairline bg-bg p-1"
      >
        {variants.map((v, i) => (
          <button
            key={v.name}
            role="tab"
            aria-selected={i === active}
            onClick={() => setActive(i)}
            className={`relative rounded-full px-3 py-1 font-mono text-[0.72rem] transition-colors duration-(--dur-fast) ${
              i === active
                ? "text-ink"
                : "text-ink-muted hover:text-ink"
            }`}
          >
            {i === active && (
              <motion.span
                layoutId="variant-pill"
                className="absolute inset-0 rounded-full bg-accent-soft"
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              />
            )}
            <span className="relative">{v.name}</span>
          </button>
        ))}
      </div>
      <p className="font-mono text-[0.7rem] text-ink-subtle">{current.note}</p>
    </div>
  );
}
