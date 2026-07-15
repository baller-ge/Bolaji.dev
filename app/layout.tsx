import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteNav } from "@/components/nav/site-nav";
import { SiteFooter } from "@/components/nav/site-footer";
import { CommandPalette } from "@/components/command-palette";
import { fontVariables } from "@/lib/fonts";
import { ogImage } from "@/lib/og";
import { SITE_URL } from "@/lib/site";
import "@/styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Abdul-Basit Hamzat — DevOps Engineer",
    template: "%s · Abdul-Basit Hamzat",
  },
  description:
    "Abdul-Basit Hamzat is a DevOps engineer who builds, secures, deploys, and maintains reliable corporate and professional-services websites.",
  openGraph: {
    title: "Abdul-Basit Hamzat",
    description:
      "DevOps engineer — reliable, secure, maintained corporate websites.",
    type: "website",
    images: [ogImage("Abdul-Basit Hamzat — DevOps Engineer")],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdul-Basit Hamzat",
    description:
      "DevOps engineer — reliable, secure, maintained corporate websites.",
    images: [ogImage("Abdul-Basit Hamzat — DevOps Engineer").url],
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
