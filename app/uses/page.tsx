import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Uses",
  description: "The hardware, editor, and tools I rely on day to day.",
};

interface Item {
  name: string;
  note?: string;
  href?: string;
}

interface Section {
  label: string;
  items: Item[];
}

const sections: Section[] = [
  {
    label: "Hardware",
    items: [
      {
        name: "[MacBook Pro / desktop — your machine]",
        note: "[Specs, year, why.]",
      },
      {
        name: "[Monitor]",
        note: "[Size, resolution, mounting.]",
      },
      { name: "[Keyboard]", note: "[Layout, switches if mechanical.]" },
      { name: "[Pointer]", note: "[Trackpad / mouse / both.]" },
    ],
  },
  {
    label: "Editor & shell",
    items: [
      {
        name: "VS Code",
        note: "Theme + extensions noted on /writing once I write that post.",
        href: "https://code.visualstudio.com",
      },
      {
        name: "[Terminal of choice]",
        note: "[Warp / iTerm / Windows Terminal.]",
      },
      { name: "[Shell]", note: "[zsh / fish / pwsh.]" },
    ],
  },
  {
    label: "This site",
    items: [
      { name: "Next.js 15", note: "App Router, React 19, Turbopack dev.", href: "https://nextjs.org" },
      { name: "Tailwind v4", note: "Plus CSS Modules where craft warrants it.", href: "https://tailwindcss.com" },
      { name: "Motion", note: "The artist formerly known as Framer Motion.", href: "https://motion.dev" },
      { name: "Velite", note: "Type-safe MDX content layer.", href: "https://velite.js.org" },
      { name: "Mona Sans + Geist Mono", note: "Display/body + code.", href: "https://github.com/github/mona-sans" },
      { name: "shadcn/ui primitives", note: "Re-skinned, not vanilla.", href: "https://ui.shadcn.com" },
      { name: "Vercel", note: "Deploy + analytics.", href: "https://vercel.com" },
    ],
  },
  {
    label: "Tools",
    items: [
      { name: "Figma", note: "[Design + handoff.]", href: "https://figma.com" },
      { name: "Linear", note: "[Tracking work.]", href: "https://linear.app" },
      { name: "Raycast", note: "[Launcher + snippets.]", href: "https://raycast.com" },
      { name: "[Notes app]", note: "[Obsidian / Notion / paper.]" },
    ],
  },
];

export default function UsesPage() {
  return (
    <div className="mx-auto flex max-w-(--content-width) flex-col gap-16 py-16">
      <header className="flex flex-col gap-3 border-b border-hairline pb-8">
        <p className="font-mono text-sm text-ink-subtle">/uses</p>
        <h1 className="font-sans text-3xl leading-tight font-medium tracking-tight text-ink sm:text-4xl">
          What I use
        </h1>
        <p className="mt-2 max-w-[56ch] font-sans text-xl leading-snug text-ink-muted">
          A running list of the hardware, software, and services that show up
          in my day. Updated when something changes — not before.
        </p>
      </header>

      {sections.map((section) => (
        <section key={section.label} className="flex flex-col gap-4">
          <h2 className="font-mono text-xs tracking-wider text-ink-subtle uppercase">
            {section.label}
          </h2>
          <ul className="flex flex-col">
            {section.items.map((item) => (
              <li
                key={item.name}
                className="grid grid-cols-[1fr_auto] gap-6 border-b border-hairline py-3 last:border-b-0"
              >
                <div className="flex flex-col gap-1">
                  <p className="font-sans text-base font-medium text-ink">
                    {item.href ? (
                      <Link
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        className="transition-colors duration-(--dur-fast) hover:text-accent"
                      >
                        {item.name} ↗
                      </Link>
                    ) : (
                      item.name
                    )}
                  </p>
                  {item.note && (
                    <p className="font-mono text-xs text-ink-subtle">
                      {item.note}
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
