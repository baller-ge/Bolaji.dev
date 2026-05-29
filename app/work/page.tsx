import type { Metadata } from "next";
import Link from "next/link";
import { works } from "#site/content";
import styles from "./work.module.css";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected case studies — Bolaji Adekunle.",
};

export default function WorkIndexPage() {
  const published = works.filter((w) => w.published);

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <p className={styles.eyebrow}>/work</p>
        <h1 className={styles.title}>Selected work</h1>
        <p className={styles.lede}>
          Case studies from the things I&rsquo;ve shipped — the problems they
          set out to solve, the decisions I made, and what changed.
        </p>
      </header>

      <ul className={styles.list}>
        {published.map((w, i) => (
          <li key={w.slug}>
            <Link href={w.permalink} className={styles.row}>
              <span className={styles.rowIndex}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className={styles.rowBody}>
                <p className={styles.rowMeta}>
                  <span>{w.company}</span>
                  <span>{w.role}</span>
                </p>
                <h2 className={styles.rowTitle}>{w.title}</h2>
                <p className={styles.rowDesc}>{w.description}</p>
              </div>
              <span className={styles.rowPeriod}>
                {w.period}
                <br />
                <span className={styles.rowArrow}>→</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>

      {published.length === 0 && (
        <p className="font-mono text-sm text-ink-subtle">
          No case studies published yet.
        </p>
      )}
    </div>
  );
}
