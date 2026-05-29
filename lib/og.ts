/**
 * Build an OG image URL pointing at /og?title=...&kind=... — the dynamic
 * generator at app/og/route.tsx renders the PNG at request time.
 */

import { SITE_URL } from "./site";

export function ogImage(title: string, kind?: string) {
  const params = new URLSearchParams({ title });
  if (kind) params.set("kind", kind);
  return {
    url: `${SITE_URL}/og?${params.toString()}`,
    width: 1200,
    height: 630,
    alt: title,
  };
}
