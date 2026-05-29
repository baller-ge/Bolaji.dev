import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteNav } from "@/components/nav/site-nav";
import { SiteFooter } from "@/components/nav/site-footer";
import { CommandPalette } from "@/components/command-palette";
import { fontVariables } from "@/lib/fonts";
import { ogImage } from "@/lib/og";
import "@/styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://bolaji.dev"),
  title: {
    default: "Bolaji Adekunle — Frontend / product engineer",
    template: "%s · Bolaji Adekunle",
  },
  description:
    "Bolaji Adekunle is a frontend / product engineer at TD Africa, crafting interfaces that move, respond, and stay out of your way.",
  openGraph: {
    title: "Bolaji Adekunle",
    description: "Frontend / product engineer at TD Africa.",
    type: "website",
    images: [ogImage("Bolaji Adekunle — frontend / product engineer")],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bolaji Adekunle",
    description: "Frontend / product engineer at TD Africa.",
    images: [ogImage("Bolaji Adekunle — frontend / product engineer").url],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf6ec" },
    { media: "(prefers-color-scheme: dark)", color: "#0e0e0c" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={fontVariables} suppressHydrationWarning>
      <body className="min-h-dvh font-sans">
        <ThemeProvider>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-(--radius-sm) focus:border focus:border-accent focus:bg-bg focus:px-3 focus:py-2 focus:font-mono focus:text-sm focus:text-ink"
          >
            Skip to content
          </a>
          <SiteNav />
          <main
            id="main"
            className="mx-auto max-w-(--wide-width) px-6"
            tabIndex={-1}
          >
            {children}
          </main>
          <SiteFooter />
          <CommandPalette />
        </ThemeProvider>
      </body>
    </html>
  );
}
