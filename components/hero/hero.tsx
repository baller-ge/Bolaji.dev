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
              text: "Hi, I'm Abdul-Basit Hamzat.",
              className: styles.greeting,
            },
            {
              text: "I build, secure, and keep",
              accent: "secure",
              className: styles.line2,
            },
            {
              text: "corporate websites running.",
              className: styles.line3,
            },
          ]}
        />
      </h1>
      <p className={styles.subline}>
        DevOps engineer at{" "}
        <Link href="https://tdafrica.com" target="_blank" rel="noreferrer">
          TD Africa
        </Link>
        . I ship reliable, secure websites — and stay on to maintain them.
      </p>
    </section>
  );
}
