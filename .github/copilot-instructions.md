# Bookola World — Copilot Instructions

## Commands

```bash
npm run dev      # Dev server at http://localhost:3000
npm run build    # Production build
npm run lint     # Next.js ESLint
```

No test framework is configured.

## Architecture

**Next.js 14 App Router** · TypeScript · Tailwind CSS. No external data fetching — all product data is static.

### Pages & Components

| Route | File | Type |
|---|---|---|
| `/` | `src/app/page.tsx` | Server component |
| `/shop` | `src/app/shop/page.tsx` | Client component (`useSearchParams`) |
| `/personalise/[productId]` | `src/app/personalise/[productId]/page.tsx` | Server component + `PersonalisationForm` client child |
| `/about` | `src/app/about/page.tsx` | Server component |

The root layout (`src/app/layout.tsx`) wraps everything with `<Navbar>` and `<Footer>`. The `@/` path alias maps to `src/`.

### Data Layer

`src/lib/products.ts` is the **single source of truth** — a static `Product[]` array plus a `categories` array. No database, no API calls. Adding a product = adding an entry here. The `personalisationFields: string[]` on each product directly drives the form inputs rendered in `PersonalisationForm`.

The `Category` union type (`'children' | 'christian' | 'law-of-attraction' | 'diaries'`) must stay in sync with the `categories` array IDs.

### Personalisation Flow

`/personalise/[productId]/page.tsx` is a server component that:
1. Looks up the product from the static array by `productId`
2. Generates SEO metadata and injects JSON-LD structured data
3. Renders a `<PersonalisationForm>` client component that currently simulates submission with a 1.5s delay

The form submission is a stub — Phase 2 will wire it to PayPal + a print-on-demand API.

### `/shop` Category Filtering

Category filter state lives in the URL (`?category=children`). The page reads `useSearchParams()` and syncs to local state. The entire `ShopContent` component is wrapped in `<Suspense>` (required by Next.js when using `useSearchParams` in client components).

## Styling Conventions

Tailwind utility-first. Custom brand tokens in `tailwind.config.ts`:

| Token | Hex | Usage |
|---|---|---|
| `cream` | `#FAF7F2` | Page backgrounds |
| `parchment` | `#F0EAD6` | Card/section backgrounds |
| `gold` | `#C9A84C` | CTAs, accents, borders |
| `gold-light` | `#E8C97A` | Hover states |
| `burgundy` | `#6B2737` | Secondary actions, badges |
| `deep-navy` | `#1A2744` | Primary text, dark sections |
| `warm` | `#8B6914` | Warm text accents |

Reusable component classes in `src/app/globals.css`:
- `.btn-gold` — primary CTA button
- `.btn-outline` — secondary outlined button
- `.section-title` — `font-display` heading style
- `.gold-divider` — decorative horizontal rule
- `.card-hover` — lift-on-hover card effect
- `.animated-link` — underline-on-hover link
- `.animate-fade-in` / `.animate-fade-in-delay-{1-4}` — staggered entrance animations

Typography: `font-display` = Playfair Display (headings), `font-body` = Lato (body text). Both loaded via `next/font/google` in `layout.tsx`.

## Phase 2 Planned Integrations

The codebase is intentionally minimal. Upcoming additions:
- **Sanity CMS** — replace `src/lib/products.ts` with CMS-driven content
- **PayPal SDK** — payment on the personalise page
- **Lulu Direct / Printify** — print-on-demand fulfillment
- **Resend** — transactional email

## Deployment

Vercel (`vercel.json` configured). Domain: `bookola.world`. Currency is AUD (set in the JSON-LD structured data).
