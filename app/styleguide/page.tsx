import type { Metadata } from "next";
import { Callout } from "@/components/mdx/callout";
import { MotionDemos } from "./motion-demos";
import styles from "./styleguide.module.css";

export const metadata: Metadata = {
  title: "Styleguide",
  description: "Design tokens, type scale, motion, and component primitives.",
};

const lightColors = [
  { name: "--bg", value: "#faf6ec", role: "Page background" },
  { name: "--bg-elevated", value: "#f2eddd", role: "Code, cards, tiles" },
  { name: "--ink", value: "#131211", role: "Body text" },
  { name: "--ink-muted", value: "#5c5751", role: "Secondary text" },
  { name: "--ink-subtle", value: "#8a857c", role: "Captions" },
  { name: "--hairline", value: "#e8e2d0", role: "Dividers, borders" },
  { name: "--accent", value: "#65a30d", role: "Hover, links, hero word" },
  { name: "--accent-hover", value: "#4d7c0f", role: "Active state" },
  { name: "--accent-soft", value: "#ecfccb", role: "Tag bg, highlight" },
];

const typeSteps = [
  { step: "--step--1", label: "small", sample: "Small mono caption — used in captions, footer, role line." },
  { step: "--step-0", label: "body", sample: "Body text sits at this size — most paragraph content lands here." },
  { step: "--step-1", label: "lead", sample: "Lead paragraphs use this larger step for opening lines." },
  { step: "--step-2", label: "h3", sample: "H3 subheadings" },
  { step: "--step-3", label: "h2", sample: "H2 section titles" },
  { step: "--step-4", label: "h1", sample: "H1 page titles" },
  { step: "--step-5", label: "hero", sample: "Hero display" },
];

const spaceSteps = [
  { token: "--space-1", px: 4 },
  { token: "--space-2", px: 8 },
  { token: "--space-3", px: 12 },
  { token: "--space-4", px: 16 },
  { token: "--space-6", px: 24 },
  { token: "--space-8", px: 32 },
  { token: "--space-12", px: 48 },
  { token: "--space-16", px: 64 },
  { token: "--space-24", px: 96 },
];

export default function StyleguidePage() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <p className={styles.eyebrow}>internal · /styleguide</p>
        <h1 className={styles.title}>Design system</h1>
        <p className={styles.lede}>
          Single page that proves the system holds together. If something on the
          site doesn&rsquo;t match what&rsquo;s here, this page is the tiebreaker.
        </p>
      </header>

      {/* COLORS */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <p className={styles.sectionLabel}>01 — color</p>
          <h2 className={styles.sectionTitle}>Tokens</h2>
        </div>
        <div className={styles.colorGrid}>
          {lightColors.map((c) => (
            <div className={styles.colorTile} key={c.name}>
              <div
                className={styles.swatch}
                style={{ background: `var(${c.name})` }}
              />
              <div>
                <p className={styles.colorName}>{c.name}</p>
                <p className={styles.colorHex}>{c.value} · {c.role}</p>
              </div>
            </div>
          ))}
        </div>
        <Callout type="note">
          Tokens flip via the <code>:root[data-theme=&quot;dark&quot;]</code>
          {" "}selector in <code>styles/tokens.css</code>. Use the toggle in the
          nav to see the dark palette inline.
        </Callout>
      </section>

      {/* TYPE */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <p className={styles.sectionLabel}>02 — type</p>
          <h2 className={styles.sectionTitle}>Scale</h2>
        </div>
        <div className={styles.typeStack}>
          {typeSteps.map((t) => (
            <div className={styles.typeRow} key={t.step}>
              <span className={styles.typeMeta}>{t.label}</span>
              <span
                className={styles.typeSpecimen}
                style={{ fontSize: `var(${t.step})` }}
              >
                {t.sample}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* MOTION */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <p className={styles.sectionLabel}>03 — motion</p>
          <h2 className={styles.sectionTitle}>Timings &amp; easings</h2>
        </div>
        <MotionDemos />
        <Callout type="info">
          Rule of thumb: spring on enter (<code>--ease-spring</code>), ease-out
          on exit (<code>--ease-out</code>). Nothing above 600ms outside
          {" "}<code>/lab</code>.
        </Callout>
      </section>

      {/* SPACING */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <p className={styles.sectionLabel}>04 — space</p>
          <h2 className={styles.sectionTitle}>Spacing</h2>
        </div>
        <div className={styles.spacingStack}>
          {spaceSteps.map((s) => (
            <div className={styles.spacingRow} key={s.token}>
              <span className={styles.spacingLabel}>
                {s.token} · {s.px}px
              </span>
              <div
                className={styles.spacingBar}
                style={{ width: `var(${s.token})` }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* COMPONENTS */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <p className={styles.sectionLabel}>05 — components</p>
          <h2 className={styles.sectionTitle}>Primitives</h2>
        </div>
        <div className={styles.componentRow}>
          <p className={styles.componentLabel}>Buttons</p>
          <button className={`${styles.btn} ${styles.btnPrimary}`}>
            Primary
          </button>
          <button className={`${styles.btn} ${styles.btnAccent}`}>
            Accent
          </button>
          <button className={styles.btn}>Ghost</button>
        </div>
        <div className={styles.componentRow}>
          <p className={styles.componentLabel}>Tags</p>
          <span className={styles.tag}>meta</span>
          <span className={styles.tag}>craft</span>
          <span className={styles.tag}>animation</span>
        </div>
        <div className={styles.componentRow}>
          <p className={styles.componentLabel}>Callouts</p>
          <div className="w-full max-w-xl">
            <Callout type="note">
              A note callout — used for asides that add color without
              interrupting the flow.
            </Callout>
            <Callout type="info">
              An info callout — used for definitions or links to related
              resources.
            </Callout>
            <Callout type="warn">
              A warn callout — used sparingly for &ldquo;don&rsquo;t do this&rdquo;
              moments.
            </Callout>
          </div>
        </div>
      </section>
    </div>
  );
}
