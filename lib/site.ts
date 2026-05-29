/**
 * Single source of truth for the site's canonical absolute URL.
 *
 * Resolution order:
 *   1. NEXT_PUBLIC_SITE_URL — set this in Vercel once a custom domain locks
 *      (e.g. "https://bolaji.dev"). It overrides everything below.
 *   2. VERCEL_PROJECT_PRODUCTION_URL — auto-injected by Vercel and pins to
 *      the project's production deployment, regardless of which branch
 *      built it. Works on previews too because previews still know their
 *      production sibling.
 *   3. Hardcoded fallback for local dev and the current Vercel preview.
 *
 * Returned without a trailing slash so callers can append paths cleanly.
 */

const FALLBACK = "https://bolaji-dev-eta.vercel.app";

function resolveSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/$/, "");

  const vercelProd = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercelProd) return `https://${vercelProd}`;

  return FALLBACK;
}

export const SITE_URL = resolveSiteUrl();
