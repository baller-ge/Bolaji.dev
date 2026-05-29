# bolaji.dev

The personal site of **Bolaji Adekunle** — frontend / product engineer at TD Africa.

The site itself is the work sample. Every animation, every type choice, and every interaction is a small argument for how I think about the web — kinetic headline typography over Mona Sans, an opinionated `/styleguide` that documents the system, and a dedicated `/lab` for the small CSS / motion studies that don&rsquo;t fit anywhere else.

## Stack

| Concern      | Choice                                                                       |
| ------------ | ---------------------------------------------------------------------------- |
| Framework    | [Next.js 15](https://nextjs.org) (App Router, React 19, Turbopack dev)       |
| Styling      | [Tailwind v4](https://tailwindcss.com) + CSS Modules for signature pieces   |
| Animation    | [Motion](https://motion.dev) (React) + GSAP available · View Transitions    |
| Theme        | [next-themes](https://github.com/pacocoursey/next-themes), light default     |
| Content      | [Velite](https://velite.js.org) + MDX + [rehype-pretty-code](https://rehype-pretty.pages.dev) |
| Fonts        | [Mona Sans](https://github.com/github/mona-sans) (display + body), Geist Mono (code) |
| Icons        | [Lucide](https://lucide.dev)                                                 |
| Command bar  | [cmdk](https://cmdk.paco.me) — ⌘K / Ctrl+K                                   |
| Deploy       | [Vercel](https://vercel.com) (preview URL until the domain locks)            |

Pure JAMstack — no database, no auth, no newsletter. Static where possible, edge-rendered where dynamic.

## Quick start

```pwsh
npm install
npm run dev
```

`npm run dev` runs Velite in watch mode and `next dev --turbo` in parallel via [concurrently](https://www.npmjs.com/package/concurrently). The site boots at <http://localhost:3000> in around 3 seconds.

### Other scripts

| Script                | What it does                                                     |
| --------------------- | ---------------------------------------------------------------- |
| `npm run build`       | `velite && next build` — generates content, then a prod build    |
| `npm run start`       | Serves the production build locally                              |
| `npm run lint`        | `next lint`                                                       |
| `npm run type-check`  | `tsc --noEmit`                                                   |
| `npm run format`      | Prettier writes                                                  |

> [!CAUTION]
> Don&rsquo;t run `npm run build` while the dev server is up — they share `.next/` and the build will leave dev returning 500s. If it happens: kill dev, `Remove-Item -Recurse -Force .next`, restart `npm run dev`.

## Project structure

```
app/
  (routes)                     # Each top-level dir is a route
    work/                      # Case studies index + [slug] renderer
    writing/                   # Posts index + [slug] renderer
    lab/                       # Experiments index + [slug] renderer
    about, now, uses, contact  # Chrome pages
    styleguide/                # Internal — design system proof page (unlisted)
  og/route.tsx                 # Dynamic OG image (Edge runtime, next/og)
  sitemap.ts                   # Aggregates static + Velite content
  robots.ts                    # Disallows /styleguide
  rss.xml/route.ts             # RSS feed from writings

components/
  hero/                        # Signature kinetic headline (variable-font modulation)
  mdx/                         # Components available inside MDX: Lead, Callout, Stat, Demo, Tag
  demos/                       # Interactive demos referenced from case studies + lab
  nav/                         # Header + footer
  theme-provider.tsx           # next-themes + MotionConfig wrapper
  theme-toggle.tsx             # Animated sun/moon swap
  command-palette.tsx          # cmdk-based ⌘K palette

content/
  work/*.mdx                   # Case studies
  writing/*.mdx                # Blog posts
  lab/*.mdx                    # Lab experiments

lib/
  fonts.ts                     # Mona Sans + Geist Mono wiring
  og.ts                        # Build /og?... URLs for metadata
  utils.ts                     # cn() — Tailwind class merger

styles/
  tokens.css                   # Single source of truth for color / type / motion / space
  globals.css                  # Tailwind v4 + @theme inline + base resets + prose

velite.config.ts               # Content collection schemas
```

## Adding content

Velite emits typed content to `.velite/` and exposes it via the `#site/content` import alias. Adding a piece is just adding an MDX file in the right collection — Velite picks it up in watch mode within a second.

### A new writing post

Create `content/writing/<slug>.mdx`:

```mdx
---
title: Some thoughts on something
slug: some-thoughts-on-something
date: 2026-06-12
description: One-sentence summary, 280 chars max.
tags: [meta, craft]
published: true
---

<Lead>The opening paragraph that does the work.</Lead>

Body content. Headings, code blocks, lists. Custom MDX components below.
```

Available MDX components: `<Lead>`, `<Callout type="note|info|warn">`, `<Stat value label hint>`, `<StatGrid>`, `<Demo caption source>`, `<Tag>`, and any registered embedded demo (see below).

### A new case study

Create `content/work/<slug>.mdx`:

```mdx
---
title: Case study title
slug: case-study-slug
company: Company name
role: Your role
period: 2024 — present
startYear: 2024
description: One-sentence summary, 280 chars max.
published: true
---

<Lead>The framing paragraph.</Lead>

## The problem
## What I did
## Outcomes
## What I'd do differently
```

`startYear` controls sort order on `/work` (descending — most recent first).

### A new lab experiment

Create `content/lab/<slug>.mdx`. Same shape as writing posts plus the embedded demo if there is one.

## Embedded demos in case studies and lab posts

Live components inline with the prose. Two-step:

1. **Create the demo** in `components/demos/your-demo.tsx`. It can be any client component — Motion, refs, rAF, whatever the interaction needs.
2. **Register it** in `components/mdx/mdx-content.tsx` by adding it to the `components` map.

Then use it in MDX wrapped in `<Demo>` for the consistent frame:

```mdx
<Demo caption="Try toggling between variants" source="https://github.com/…">
  <YourDemo />
</Demo>
```

Two demos ship as references: [`VariantSwitcher`](components/demos/variant-switcher.tsx) (Motion `layoutId` pill), [`CursorTrail`](components/demos/cursor-trail.tsx) (rAF lerp chain), [`MagneticLinks`](components/demos/magnetic-links.tsx) (Motion spring + window pointer listener).

## Design system

Every design decision is anchored to a single token in [styles/tokens.css](styles/tokens.css):

- **Color** — `--bg`, `--bg-elevated`, `--ink`, `--ink-muted`, `--ink-subtle`, `--hairline`, `--accent` (`#65a30d` lime-600 light, `#a3e635` lime-400 dark), `--accent-hover`, `--accent-soft`.
- **Type scale** — `--step--1` through `--step-6`, modular ratio ~1.25.
- **Motion** — durations `--dur-fast | --dur-base | --dur-slow` (120 / 220 / 480 ms), easings `--ease-out | --ease-in | --ease-spring`.
- **Space** — `--space-1` … `--space-24` on a 4px base.
- **Layout** — `--content-width: 68ch`, `--wide-width: 80rem`.

`/styleguide` is the canonical proof page — type, color, motion (interactive replay), spacing, primitives. When something on the site doesn&rsquo;t match what&rsquo;s there, the styleguide is the tiebreaker.

## Motion principles

Three rules I commit to so every animation feels like one piece:

1. **Spring on enter, ease-out on exit.** Things arriving use `--ease-spring`; things leaving use `--ease-out`. Linear curves are reserved for opacity.
2. **No animation longer than 600 ms outside `/lab`.** Longer becomes annoying on re-visit.
3. **Reduced-motion is honored everywhere.** Three layers: a global CSS override, a `MotionConfig reducedMotion="user"` wrapping the tree, and explicit `useReducedMotion` / `matchMedia` checks in the rAF-driven demos.

## Deploy

Designed to deploy to Vercel out of the box.

```pwsh
npm install -g vercel
vercel
```

The `/og` route is `runtime = "edge"` for low-latency social card generation. `/sitemap.xml`, `/robots.txt`, and `/rss.xml` are auto-generated.

### Things to change before launch

- Swap the placeholder `https://bolaji.dev` constant in [lib/og.ts](lib/og.ts), [app/sitemap.ts](app/sitemap.ts), [app/robots.ts](app/robots.ts), and [app/rss.xml/route.ts](app/rss.xml/route.ts) for the real domain.
- Fill in the bracketed placeholders in `/about`, `/now`, `/uses`, and the case-study scaffolds.
- Bundle a Mona Sans OTF into `public/fonts/og/` and pass to `next/og`&rsquo;s `fonts` option (Google Fonts CSS2 returns WOFF2 which Satori cannot decode).

## Roadmap

- [x] Phase 1 — scaffold
- [x] Phase 2 — design system (`/styleguide`, MDX, palette)
- [x] Phase 3 — kinetic hero (per-character variable font modulation on cursor proximity)
- [x] Phase 4 — work / writing / lab indexes; case study template; embedded demos
- [x] Phase 5 — real lab experiments (cursor-trail, magnetic-links)
- [x] Phase 6 — about, now, uses, contact, OG, sitemap, robots, RSS
- [x] Phase 7 — build clean, type clean, a11y, reduced-motion
- [ ] Phase 8 — content fill-in, domain, deploy, OG font bundle, launch post

---

© 2026 Bolaji Adekunle. Crafted with care, in Lagos.
