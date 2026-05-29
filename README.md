# bolaji.dev

Personal portfolio of **Bolaji Adekunle** — frontend / product engineer at TD Africa.

The site itself is the portfolio piece: every page should demonstrate craft, not just describe it. See [`memory/project_portfolio_site.md`](../.claude/projects/) (in Claude's memory) for the locked-in aesthetic and identity decisions driving every choice here.

## Stack

| Concern        | Choice                                       |
| -------------- | -------------------------------------------- |
| Framework      | Next.js 15 (App Router, React 19, Turbo dev) |
| Styling        | Tailwind v4 + CSS Modules for signature work |
| Animation      | Motion (React) + GSAP (added in Phase 4)     |
| Theme          | next-themes, light default, system-aware     |
| Content        | Velite + MDX (added in Phase 2)              |
| Fonts          | Mona Sans (Google Fonts) + Geist Mono        |
| Icons          | Lucide                                       |
| Deploy         | Vercel (preview URL until domain locks)      |

## Running locally

```pwsh
npm install
npm run dev
```

Site boots on http://localhost:3000.

## Project structure

```
app/                   # App Router pages
  layout.tsx           # Root layout — fonts, theme, nav, footer
  page.tsx             # Home — hero + (future) selected work + writing
  not-found.tsx        # Themed 404
components/
  hero/                # Signature hero with animated "craft" underline
  nav/                 # Site nav + footer
  theme-provider.tsx   # next-themes wrapper
  theme-toggle.tsx     # Animated sun/moon toggle (Motion)
lib/
  fonts.ts             # Mona Sans + Geist Mono wiring
  utils.ts             # cn() — Tailwind class merger
styles/
  tokens.css           # Single source of truth for color/type/motion tokens
  globals.css          # Tailwind v4 + @theme inline wiring + base resets
```

## Aesthetic locks (do not drift without intent)

- **Accent**: acid green only. Used on hover, focus, the hero accent word, and lab demos. Never on large surfaces.
- **Fonts**: Mona Sans (display + body) + Geist Mono (code, role-line, footer, captions).
- **Theme**: both light and dark. Light is the default. System preference respected on first visit.
- **Motion**: spring on enter (`--ease-spring`), ease-out on exit. Nothing longer than 600ms outside `/lab`. Reduced-motion always honored.

## Roadmap

- [x] Phase 0 — discovery, identity, tokens
- [x] Phase 1 — scaffold (this commit): fonts, theme toggle, layout, hero, 404
- [ ] Phase 2 — design system + `/styleguide` route, MDX pipeline via Velite, cmdk palette
- [ ] Phase 3 — signature hero interaction (beyond the underline)
- [ ] Phase 4 — `/work` + case study template with embedded demos
- [ ] Phase 5 — `/writing` + `/lab` indexes + slug routes
- [ ] Phase 6 — `/about`, `/now`, `/uses`, OG image generator, RSS, sitemap
- [ ] Phase 7 — polish: Lighthouse CI, a11y pass, View Transitions per-route
- [ ] Phase 8 — ship to Vercel, write the launch post
