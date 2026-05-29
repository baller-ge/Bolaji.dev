import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

const links = [
  { href: "/work", label: "Work" },
  { href: "/writing", label: "Writing" },
  { href: "/lab", label: "Lab" },
  { href: "/about", label: "About" },
];

export function SiteNav() {
  return (
    <header className="sticky top-0 z-40 border-b border-hairline bg-bg/80 backdrop-blur-md">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-(--wide-width) items-center justify-between px-6 py-4"
      >
        <Link
          href="/"
          className="font-mono text-sm text-ink transition-colors duration-(--dur-fast) hover:text-accent"
        >
          bolaji
          <span className="text-ink-subtle">.dev</span>
        </Link>
        <div className="flex items-center gap-1">
          <ul className="hidden items-center gap-1 sm:flex">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="rounded-md px-3 py-1.5 text-sm text-ink-muted transition-colors duration-(--dur-fast) hover:bg-bg-elevated hover:text-ink"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
