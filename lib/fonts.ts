/**
 * Font wiring.
 *
 * Mona Sans (display + body) — GitHub's variable face, available on
 * Google Fonts since Oct 2024. Loaded via next/font/google for the
 * automatic CLS-prevention and preload behavior.
 *
 * Geist Mono (code) — Vercel's monospace, official `geist` package.
 *
 * Both expose CSS variables consumed by Tailwind v4's @theme block
 * in styles/globals.css (--font-mona, --font-geist-mono).
 */

import { Mona_Sans } from "next/font/google";
import { GeistMono } from "geist/font/mono";

export const monaSans = Mona_Sans({
  subsets: ["latin"],
  variable: "--font-mona",
  display: "swap",
  weight: "variable",
  axes: ["wdth"],
});

export const geistMono = GeistMono;

export const fontVariables = `${monaSans.variable} ${geistMono.variable}`;
