"use client";

import { motion } from "motion/react";
import { useState } from "react";

const durations = [
  { name: "--dur-fast", value: 0.12, label: "120ms" },
  { name: "--dur-base", value: 0.22, label: "220ms" },
  { name: "--dur-slow", value: 0.48, label: "480ms" },
];

const eases = [
  {
    name: "--ease-out",
    value: [0.16, 1, 0.3, 1] as const,
    label: "smooth exit",
  },
  {
    name: "--ease-in",
    value: [0.7, 0, 0.84, 0] as const,
    label: "decisive in",
  },
  {
    name: "--ease-spring",
    value: [0.34, 1.56, 0.64, 1] as const,
    label: "playful spring",
  },
];

export function MotionDemos() {
  const [tick, setTick] = useState(0);

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <div className="rounded-(--radius) border border-hairline p-6">
        <p className="mb-4 font-mono text-xs text-ink-subtle">durations</p>
        <div className="flex flex-col gap-3">
          {durations.map((d) => (
            <button
              key={d.name}
              onClick={() => setTick((t) => t + 1)}
              className="group flex items-center gap-4 rounded-(--radius-sm) border border-transparent px-2 py-2 text-left transition-colors hover:border-hairline"
            >
              <span className="w-28 font-mono text-xs text-ink-muted">
                {d.label}
              </span>
              <span className="relative h-3 flex-1 overflow-hidden rounded-full bg-bg-elevated">
                <motion.span
                  key={`${d.name}-${tick}`}
                  initial={{ x: "-100%" }}
                  animate={{ x: 0 }}
                  transition={{ duration: d.value, ease: "easeOut" }}
                  className="absolute inset-y-0 left-0 right-0 bg-accent"
                />
              </span>
              <span className="font-mono text-xs text-ink-subtle group-hover:text-accent">
                replay ↺
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="rounded-(--radius) border border-hairline p-6">
        <p className="mb-4 font-mono text-xs text-ink-subtle">easings</p>
        <div className="flex flex-col gap-3">
          {eases.map((e) => (
            <button
              key={e.name}
              onClick={() => setTick((t) => t + 1)}
              className="group flex items-center gap-4 rounded-(--radius-sm) border border-transparent px-2 py-2 text-left transition-colors hover:border-hairline"
            >
              <span className="w-28 font-mono text-xs text-ink-muted">
                {e.label}
              </span>
              <span className="relative h-3 flex-1 overflow-hidden rounded-full bg-bg-elevated">
                <motion.span
                  key={`${e.name}-${tick}`}
                  initial={{ x: 0 }}
                  animate={{ x: "calc(100% - 12px)" }}
                  transition={{ duration: 0.6, ease: e.value }}
                  className="absolute top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-accent"
                />
              </span>
              <span className="font-mono text-xs text-ink-subtle group-hover:text-accent">
                replay ↺
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
