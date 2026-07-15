import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Abdul-Basit Hamzat — DevOps engineer in Lagos. Experience, skills, and credentials.",
};

const timeline = [
  {
    period: "2024 — present",
    role: "DevOps / Product Engineer",
    where: "TD Africa",
    location: "Lagos, Nigeria",
    points: [
      "Lead deployment and release support for product platforms — repeatable build and release workflows that make shipping consistent.",
      "Configure and maintain application environments: server settings, DNS/SSL, environment variables, and access controls for secure releases.",
      "Work cross-functionally with product, frontend, backend, and QA to troubleshoot production issues and optimise performance.",
    ],
  },
  {
    period: "2022 — 2024",
    role: "DevOps / Web Engineer",
    where: "Freelance (Fiverr / Upwork)",
    location: "Lagos, Nigeria",
    points: [
      "Deployed and maintained client websites and web applications across shared hosting, VPS, and cloud environments.",
      "Handled server setup, domain configuration, SSL certificates, production migrations, and performance-focused deployment.",
      "Resolved bugs, configuration issues, and uptime problems that measurably improved site speed, stability, and user experience.",
    ],
  },
  {
    period: "2020 — 2022",
    role: "Software / DevOps Engineer",
    where: "ComX by AFEX",
    location: "Ibadan, Nigeria",
    points: [
      "Supported development, deployment, and maintenance of responsive web and app products, contributing to smoother release cycles.",
      "Automated repetitive engineering tasks and built reusable tooling that reduced effort and improved consistency.",
      "Optimised application performance and delivery workflows — load speed, SEO, engagement, and platform reliability.",
    ],
  },
];

const skillGroups = [
  {
    label: "Automation & DevOps",
    skills: [
      "CI/CD Pipelines",
      "GitHub Actions",
      "Docker",
      "Docker Compose",
      "Bash Scripting",
      "Python Automation",
    ],
  },
  {
    label: "Infrastructure & hosting",
    skills: [
      "Linux Administration",
      "VPS Management",
      "Cloud Deployment",
      "Nginx",
      "DNS/SSL",
    ],
  },
  {
    label: "Reliability & security",
    skills: [
      "Monitoring & Logging",
      "Access Controls",
      "Troubleshooting",
      "Performance Optimization",
    ],
  },
  {
    label: "Development",
    skills: [
      "Node.js",
      "TypeScript",
      "Database Management",
      "Git / GitHub",
    ],
  },
];

const credentials = [
  { title: "Microsoft 365 — MS-900 Certificate", year: "2025" },
  {
    title: "Google IT Automation with Python — Professional Certificate",
    year: "2023",
  },
  { title: "ALX Africa Software Engineering Programme", year: "2023" },
  { title: "I4G × Zuri Full-Stack Web Development Training", year: "2022" },
  { title: "ALX-T Udacity Web Development Course", year: "2022" },
];

export default function AboutPage() {
  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-16 py-16">
      <header className="flex flex-col gap-3 border-b border-hairline pb-8">
        <p className="font-mono text-sm text-ink-subtle">/about</p>
        <h1 className="font-sans text-3xl leading-tight font-medium tracking-tight text-ink sm:text-4xl">
          Abdul-Basit Hamzat
        </h1>
        <p className="mt-2 max-w-[60ch] font-sans text-xl leading-snug text-ink-muted">
          DevOps engineer with a software-development background, based in
          Lagos. I bridge development and operations to ship reliable, scalable,
          secure web applications — and keep them running.
        </p>
      </header>

      <section className="flex flex-col gap-6">
        <h2 className="font-mono text-xs tracking-wider text-ink-subtle uppercase">
          How I work
        </h2>
        <div className="flex max-w-[68ch] flex-col gap-4 text-base leading-relaxed text-ink">
          <p>
            I&rsquo;m a DevOps engineer at{" "}
            <Link
              href="https://tdafrica.com"
              target="_blank"
              rel="noreferrer"
              className="border-b border-hairline transition-colors duration-(--dur-fast) hover:border-accent hover:text-accent"
            >
              TD Africa
            </Link>
            , where I set up build and release pipelines, configure and secure
            application environments, and keep product platforms running in
            production.
          </p>
          <p>
            The thread through my work is reliability. I care about the parts of
            a website most people only notice when they break — SSL and DNS set
            up correctly, deployments that are repeatable instead of ad-hoc,
            monitoring that catches problems early, and support that&rsquo;s
            actually there after launch. For a corporate site, that&rsquo;s the
            difference between a cost and an asset.
          </p>
        </div>
      </section>

      <section className="flex flex-col gap-6">
        <h2 className="font-mono text-xs tracking-wider text-ink-subtle uppercase">
          Experience
        </h2>
        <ol className="flex flex-col gap-8">
          {timeline.map((t) => (
            <li
              key={`${t.period}-${t.where}`}
              className="grid grid-cols-1 gap-3 border-b border-hairline pb-8 last:border-b-0 sm:grid-cols-[11rem_1fr] sm:gap-6"
            >
              <div className="flex flex-col gap-1">
                <span className="font-mono text-sm text-ink-subtle">
                  {t.period}
                </span>
                <span className="font-mono text-xs text-ink-subtle">
                  {t.location}
                </span>
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="font-sans text-lg font-medium tracking-tight text-ink">
                  {t.role}{" "}
                  <span className="font-mono text-sm font-normal text-ink-muted">
                    · {t.where}
                  </span>
                </h3>
                <ul className="flex flex-col gap-2">
                  {t.points.map((p, i) => (
                    <li
                      key={i}
                      className="relative pl-4 text-base leading-relaxed text-ink-muted before:absolute before:left-0 before:text-accent before:content-['–']"
                    >
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="flex flex-col gap-6">
        <h2 className="font-mono text-xs tracking-wider text-ink-subtle uppercase">
          What I work with
        </h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {skillGroups.map((g) => (
            <div key={g.label} className="flex flex-col gap-3">
              <h3 className="font-sans text-base font-medium text-ink">
                {g.label}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {g.skills.map((s) => (
                  <li
                    key={s}
                    className="rounded-full border border-hairline px-3 py-1 font-mono text-xs text-ink-muted"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-6">
        <h2 className="font-mono text-xs tracking-wider text-ink-subtle uppercase">
          Education &amp; credentials
        </h2>
        <div className="flex flex-col gap-1 border-b border-hairline pb-6">
          <h3 className="font-sans text-lg font-medium tracking-tight text-ink">
            B.Tech, Civil Engineering
          </h3>
          <p className="font-mono text-sm text-ink-muted">
            Ladoke Akintola University of Technology (LAUTECH) · Ogbomoso, Oyo
            State, Nigeria
          </p>
        </div>
        <ul className="flex flex-col">
          {credentials.map((c) => (
            <li
              key={c.title}
              className="flex items-baseline justify-between gap-4 border-b border-hairline py-3 last:border-b-0"
            >
              <span className="text-base text-ink">{c.title}</span>
              <span className="font-mono text-sm text-ink-subtle">
                {c.year}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section className="flex flex-col gap-2 border-t border-hairline pt-8">
        <p className="font-mono text-xs text-ink-subtle">Reach out</p>
        <p className="text-base text-ink-muted">
          The best way to find me is{" "}
          <Link
            href="mailto:abdulbasithamzat@gmail.com"
            className="border-b border-hairline text-ink transition-colors duration-(--dur-fast) hover:border-accent hover:text-accent"
          >
            email
          </Link>
          , or see the{" "}
          <Link
            href="/contact"
            className="border-b border-hairline text-ink transition-colors duration-(--dur-fast) hover:border-accent hover:text-accent"
          >
            other channels
          </Link>
          .
        </p>
      </section>
    </div>
  );
}
