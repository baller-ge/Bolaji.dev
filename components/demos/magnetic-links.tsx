"use client";

/**
 * MagneticLinks — buttons that drift toward the cursor when it's nearby.
 * Built with Motion's useMotionValue + useSpring so the pull feels physical
 * rather than ramped. Each button owns its own motion values; one global
 * pointermove listener fan-outs to all of them via context.
 */

import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "motion/react";
import { useEffect, useRef, type ReactNode } from "react";

const RADIUS = 140;
const STRENGTH = 0.32;

function MagneticButton({
  children,
  ariaLabel,
}: {
  children: ReactNode;
  ariaLabel: string;
}) {
  const ref = useRef<HTMLButtonElement>(null);
  const reduced = useReducedMotion();

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 220, damping: 22, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 220, damping: 22, mass: 0.5 });

  useEffect(() => {
    if (reduced) return;
    const el = ref.current;
    if (!el) return;

    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.hypot(dx, dy);
      if (dist > RADIUS) {
        x.set(0);
        y.set(0);
        return;
      }
      const t = 1 - dist / RADIUS;
      x.set(dx * STRENGTH * t);
      y.set(dy * STRENGTH * t);
    };

    const onLeave = () => {
      x.set(0);
      y.set(0);
    };

    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerleave", onLeave);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
    };
  }, [reduced, x, y]);

  return (
    <motion.button
      ref={ref}
      type="button"
      aria-label={ariaLabel}
      style={reduced ? undefined : { x: springX, y: springY }}
      className="group inline-flex items-center gap-2 rounded-full border border-ink/15 bg-bg px-5 py-2.5 font-mono text-sm text-ink transition-colors duration-(--dur-fast) hover:border-accent hover:text-accent focus-visible:border-accent focus-visible:text-accent"
    >
      {children}
    </motion.button>
  );
}

export function MagneticLinks() {
  return (
    <div className="flex w-full flex-wrap items-center justify-center gap-4">
      <MagneticButton ariaLabel="Read">
        <span>↗ Read</span>
      </MagneticButton>
      <MagneticButton ariaLabel="Watch">
        <span>↗ Watch</span>
      </MagneticButton>
      <MagneticButton ariaLabel="Try">
        <span>↗ Try</span>
      </MagneticButton>
      <MagneticButton ariaLabel="Subscribe">
        <span>↗ Subscribe</span>
      </MagneticButton>
    </div>
  );
}
