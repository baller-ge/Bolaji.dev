import Link from "next/link";
import { KineticHeadline } from "./kinetic-headline";
import styles from "./hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero}>
      <h1 className={styles.headline}>
        <KineticHeadline
          lines={[
            {
              text: "Hi, I'm Bolaji Adekunle.",
              className: styles.greeting,
            },
            {
              text: "I craft interfaces — the kind that",
              accent: "craft",
              className: styles.line2,
            },
            {
              text: "move, respond, and stay out of your way.",
              className: styles.line3,
            },
          ]}
        />
      </h1>
      <p className={styles.subline}>
        Frontend / product engineer at{" "}
        <Link href="https://tdafrica.com" target="_blank" rel="noreferrer">
          TD Africa
        </Link>
        .
      </p>
    </section>
  );
}
