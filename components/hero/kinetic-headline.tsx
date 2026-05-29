"use client";

/**
 * KineticHeadline — per-character variable-font modulation driven by cursor
 * proximity. Each character runs along Mona Sans' wght (400→900) and wdth
 * (100→118) axes based on Euclidean distance from the cursor, smoothed via
 * a short CSS transition. One rAF loop drives all characters.
 *
 * Designed for very small surface area (one headline) — do not apply to
 * long-form prose, it'll thrash layout and burn CPU.
 */

import { useEffect, useRef } from "react";
import styles from "./kinetic-headline.module.css";

interface LineSpec {
  text: string;
  accent?: string;
  className?: string;
}

interface Props {
  lines: LineSpec[];
}

const RADIUS = 180;
const WGHT_MIN = 400;
const WGHT_MAX = 900;
const WDTH_MIN = 100;
const WDTH_MAX = 118;

export function KineticHeadline({ lines }: Props) {
  const charsRef = useRef<HTMLSpanElement[]>([]);

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return; // honor reduced motion — leave chars at baseline
    }

    let mouseX = -10000;
    let mouseY = -10000;
    let raf = 0;
    let active = true;

    const onMove = (e: PointerEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const onLeave = () => {
      mouseX = -10000;
      mouseY = -10000;
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerleave", onLeave);

    const tick = () => {
      if (!active) return;
      const vh = window.innerHeight;
      for (const el of charsRef.current) {
        if (!el) continue;
        const r = el.getBoundingClientRect();
        // Skip offscreen characters — saves work once scrolled past hero.
        if (r.bottom < 0 || r.top > vh) continue;

        const cx = r.left + r.width / 2;
        const cy = r.top + r.height / 2;
        const dx = mouseX - cx;
        const dy = mouseY - cy;
        const dist = Math.hypot(dx, dy);

        // Smooth falloff curve: ease-out quadratic
        const t = Math.max(0, 1 - dist / RADIUS);
        const eased = t * t * (3 - 2 * t); // smoothstep

        const wght = Math.round(WGHT_MIN + eased * (WGHT_MAX - WGHT_MIN));
        const wdth = Math.round(WDTH_MIN + eased * (WDTH_MAX - WDTH_MIN));

        el.style.setProperty(
          "font-variation-settings",
          `"wght" ${wght}, "wdth" ${wdth}`,
        );
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      active = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  charsRef.current = [];

  const renderChar = (ch: string, key: string) => (
    <span
      key={key}
      ref={(el) => {
        if (el) charsRef.current.push(el);
      }}
      className={styles.char}
      aria-hidden="true"
    >
      {ch === " " ? " " : ch}
    </span>
  );

  return (
    <>
      {lines.map((line, li) => {
        const accentIdx =
          line.accent && line.text.includes(line.accent)
            ? line.text.indexOf(line.accent)
            : -1;

        const before =
          accentIdx >= 0 ? line.text.slice(0, accentIdx) : line.text;
        const accentText =
          accentIdx >= 0
            ? line.text.slice(accentIdx, accentIdx + line.accent!.length)
            : "";
        const after =
          accentIdx >= 0
            ? line.text.slice(accentIdx + line.accent!.length)
            : "";

        return (
          <span
            key={li}
            className={`${styles.line} ${line.className ?? ""}`}
            aria-label={line.text}
          >
            {Array.from(before).map((ch, i) => renderChar(ch, `${li}-b-${i}`))}
            {accentText && (
              <span className={styles.accentWord}>
                {Array.from(accentText).map((ch, i) =>
                  renderChar(ch, `${li}-a-${i}`),
                )}
              </span>
            )}
            {Array.from(after).map((ch, i) => renderChar(ch, `${li}-af-${i}`))}
          </span>
        );
      })}
    </>
  );
}
