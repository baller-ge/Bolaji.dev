import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-hairline">
      <div className="mx-auto grid max-w-(--wide-width) gap-8 px-6 py-12 sm:grid-cols-[1fr_auto_auto] sm:items-start">
        <p className="font-mono text-xs leading-relaxed text-ink-subtle">
          &copy; {new Date().getFullYear()} Bolaji Adekunle.
          <br />
          Crafted with care, in Lagos.
        </p>
        <nav aria-labelledby="footer-sitelet" className="flex flex-col gap-1">
          <h3
            id="footer-sitelet"
            className="mb-1 font-mono text-xs text-ink-subtle"
          >
            Sitelet
          </h3>
          <ul className="flex flex-col gap-1 font-mono text-xs">
            <li>
              <Link
                href="/now"
                className="text-ink-muted transition-colors duration-(--dur-fast) hover:text-accent"
              >
                /now
              </Link>
            </li>
            <li>
              <Link
                href="/uses"
                className="text-ink-muted transition-colors duration-(--dur-fast) hover:text-accent"
              >
                /uses
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-ink-muted transition-colors duration-(--dur-fast) hover:text-accent"
              >
                /contact
              </Link>
            </li>
          </ul>
        </nav>
        <nav
          aria-labelledby="footer-elsewhere"
          className="flex flex-col gap-1"
        >
          <h3
            id="footer-elsewhere"
            className="mb-1 font-mono text-xs text-ink-subtle"
          >
            Elsewhere
          </h3>
          <ul className="flex flex-col gap-1 font-mono text-xs">
            <li>
              <Link
                href="https://github.com/tomorrow-TD"
                target="_blank"
                rel="noreferrer"
                className="text-ink-muted transition-colors duration-(--dur-fast) hover:text-accent"
              >
                github ↗
              </Link>
            </li>
            <li>
              <Link
                href="mailto:abdulbasithamzat@gmail.com"
                className="text-ink-muted transition-colors duration-(--dur-fast) hover:text-accent"
              >
                email ↗
              </Link>
            </li>
            <li>
              <Link
                href="/rss.xml"
                className="text-ink-muted transition-colors duration-(--dur-fast) hover:text-accent"
              >
                rss ↗
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
