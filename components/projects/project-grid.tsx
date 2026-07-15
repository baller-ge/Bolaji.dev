import Image from "next/image";
import { type Project } from "#site/content";
import styles from "./project-grid.module.css";

export function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <ul className={styles.grid}>
      {projects.map((p) => (
        <li key={p.slug} className={styles.item}>
          <a
            href={p.url}
            target="_blank"
            rel="noreferrer noopener"
            className={styles.card}
          >
            <div className={styles.shot}>
              <Image
                src={p.cover.src}
                alt={`Screenshot of the ${p.title} website`}
                width={p.cover.width}
                height={p.cover.height}
                placeholder="blur"
                blurDataURL={p.cover.blurDataURL}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 38rem"
                className={styles.img}
              />
            </div>
            <div className={styles.body}>
              <div className={styles.meta}>
                <span className={styles.sector}>{p.sector}</span>
                <span className={styles.year}>{p.year}</span>
              </div>
              <h3 className={styles.title}>{p.title}</h3>
              <p className={styles.role}>{p.role}</p>
              <p className={styles.desc}>{p.description}</p>
              <span className={styles.visit}>
                Visit live site <span className={styles.arrow}>↗</span>
              </span>
            </div>
          </a>
        </li>
      ))}
    </ul>
  );
}
