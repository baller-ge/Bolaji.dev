import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact",
  description: "How to reach Abdul-Basit Hamzat.",
};

const channels = [
  {
    label: "Email",
    value: "abdulbasithamzat@gmail.com",
    href: "mailto:abdulbasithamzat@gmail.com",
    note: "Best for everything — project scoping, support, anything.",
  },
  {
    label: "Phone",
    value: "+234 814 451 440",
    href: "tel:+234814451440",
    note: "Calls and WhatsApp.",
  },
  {
    label: "GitHub",
    value: "@tomorrow-TD",
    href: "https://github.com/tomorrow-TD",
    note: "Most of what I publish ends up here.",
  },
  {
    label: "LinkedIn",
    value: "Abdul-Basit Hamzat",
    href: "https://linkedin.com",
    note: "[Add your LinkedIn profile URL here.]",
  },
];

export default function ContactPage() {
  return (
    <div className="mx-auto flex max-w-(--content-width) flex-col gap-12 py-16">
      <header className="flex flex-col gap-3 border-b border-hairline pb-8">
        <p className="font-mono text-sm text-ink-subtle">/contact</p>
        <h1 className="font-sans text-3xl leading-tight font-medium tracking-tight text-ink sm:text-4xl">
          Get in touch
        </h1>
        <p className="mt-2 max-w-[56ch] font-sans text-xl leading-snug text-ink-muted">
          No form — just the channels I actually read. Email is fastest.
        </p>
      </header>

      <ul className="flex flex-col">
        {channels.map((c) => (
          <li
            key={c.label}
            className="grid grid-cols-[7rem_1fr] gap-6 border-b border-hairline py-5 last:border-b-0"
          >
            <span className="font-mono text-sm text-ink-subtle">
              {c.label}
            </span>
            <div className="flex flex-col gap-1">
              <Link
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noreferrer" : undefined}
                className="w-fit border-b border-hairline font-sans text-base text-ink transition-colors duration-(--dur-fast) hover:border-accent hover:text-accent"
              >
                {c.value}
              </Link>
              <p className="font-mono text-xs text-ink-subtle">{c.note}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
