"use client";

/**
 * CursorTrail — a chain of dots that follow the pointer with progressive
 * damping. The lead dot lerps toward the pointer; each follower lerps
 * toward the previous follower. The chain produces an organic "ink trail"
 * without any spring math.
 *
 * Contained inside its own canvas — does not track the global cursor,
 * which would be distracting on a content page.
 */

import { useEffect, useRef } from "react";
import styles from "./cursor-trail.module.css";

const TRAIL = 14;
const LEAD_LERP = 0.45;
const FOLLOW_LERP = 0.36;

export function CursorTrail() {
  const canvasRef = useRef<HTMLDivElement>(null);
  const dotsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    if (
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    let pointerX = -1000;
    let pointerY = -1000;
    let active = false;
    let raf = 0;

    const positions = Array.from({ length: TRAIL }, () => ({
      x: -1000,
      y: -1000,
    }));

    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointerX = e.clientX - rect.left;
      pointerY = e.clientY - rect.top;
    };

    const onEnter = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointerX = e.clientX - rect.left;
      pointerY = e.clientY - rect.top;
      // seed positions so the trail doesn't snap from -1000 on first enter
      for (const p of positions) {
        p.x = pointerX;
        p.y = pointerY;
      }
      active = true;
    };

    const onLeave = () => {
      active = false;
    };

    canvas.addEventListener("pointermove", onMove);
    canvas.addEventListener("pointerenter", onEnter);
    canvas.addEventListener("pointerleave", onLeave);

    const tick = () => {
      // Lead dot tracks pointer
      positions[0].x += (pointerX - positions[0].x) * LEAD_LERP;
      positions[0].y += (pointerY - positions[0].y) * LEAD_LERP;
      // Each follower lerps toward the dot in front
      for (let i = 1; i < TRAIL; i++) {
        positions[i].x +=
          (positions[i - 1].x - positions[i].x) * FOLLOW_LERP;
        positions[i].y +=
          (positions[i - 1].y - positions[i].y) * FOLLOW_LERP;
      }
      for (let i = 0; i < TRAIL; i++) {
        const dot = dotsRef.current[i];
        if (!dot) continue;
        const scale = 1 - (i / TRAIL) * 0.8;
        dot.style.transform = `translate(${positions[i].x}px, ${positions[i].y}px) scale(${scale})`;
        dot.style.opacity = active ? `${1 - (i / TRAIL) * 0.85}` : "0";
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      canvas.removeEventListener("pointermove", onMove);
      canvas.removeEventListener("pointerenter", onEnter);
      canvas.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <div ref={canvasRef} className={styles.canvas}>
      <p className={styles.hint}>move within this area</p>
      {Array.from({ length: TRAIL }, (_, i) => (
        <div
          key={i}
          ref={(el) => {
            dotsRef.current[i] = el;
          }}
          className={styles.dot}
        />
      ))}
    </div>
  );
}
