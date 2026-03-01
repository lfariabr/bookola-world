# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server at http://localhost:3000
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run Next.js ESLint
```

No test framework is configured — Phase 1 is frontend-only with static data.

## Architecture

**Next.js 14 App Router** with TypeScript and Tailwind CSS. Zero external dependencies beyond the React/Next.js core.

### Routing & Pages

| Route | File | Notes |
|---|---|---|
| `/` | `src/app/page.tsx` | Server component — hero, categories, featured products, testimonials |
| `/shop` | `src/app/shop/page.tsx` | Client component — category filtering via `useSearchParams` |
| `/personalise/[productId]` | `src/app/personalise/[productId]/page.tsx` | Client component — dynamic form fields per product |
| `/about` | `src/app/about/page.tsx` | Server component |

The root layout (`src/app/layout.tsx`) wraps all pages with `<Navbar>` and `<Footer>`.

### Data Layer

All product data lives in `src/lib/products.ts` as a static TypeScript array — no database, no API. The `Product` type includes `personalisationFields: string[]` which drives the dynamic form in the personalise page. When adding products, add them here.

### Styling System

Tailwind utility-first. Custom brand tokens defined in `tailwind.config.ts`:

| Token | Value | Usage |
|---|---|---|
| `cream` | `#FAF7F2` | Page backgrounds |
| `parchment` | `#F0EAD6` | Card/section backgrounds |
| `gold` / `gold-light` | `#C9A84C` / `#E8C97A` | CTAs, accents, borders |
| `burgundy` | `#6B2737` | Secondary actions, badges |
| `deep-navy` | `#1A2744` | Text, dark sections |
| `warm` | `#8B6914` | Warm text accents |

Custom component classes (`.btn-gold`, `.card-hover`, fade-in animations) are in `src/app/globals.css`. Fonts: `font-display` = Playfair Display (headings), `font-body` = Lato (body).

### Phase 2 Integrations (Planned)

The personalisation form currently simulates submission with a 1.5s delay. The roadmap adds:
- **Sanity CMS** — replace static `products.ts` with CMS-driven content
- **PayPal SDK** — real payment on the personalise page
- **Print-on-demand API** (Lulu Direct / Printify) — fulfillment
- **Resend** — email confirmations
- Admin dashboard

## Deployment

Configured for Vercel (`vercel.json`). Push to GitHub and import on vercel.com, or use the Vercel CLI (`vercel`). Domain: bookola.world.
