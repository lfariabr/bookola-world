# Bookola.world 📖

Personalised book store with Christian values. Built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- 🏠 **Homepage** — Hero, categories, featured products, testimonials, CTA
- 🛍️ **Shop** — All products with live category filtering
- ✍️ **Personalisation** — Dynamic form per product, ready for PayPal
- 📱 **Fully responsive** — Mobile-first design
- ⚡ **Deploy-ready** — One-click Vercel deployment

## Product Categories

- Children's Books
- Christian Values
- Law of Attraction
- Diaries & Journals

## Deploy to Vercel (2 minutes)

### Option A — GitHub + Vercel (Recommended)
1. Push this folder to a GitHub repo
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your GitHub repo
4. Click **Deploy** — that's it!

### Option B — Vercel CLI
```bash
npm install -g vercel
cd bookola-world
npm install
vercel
```

## Local Development

```bash
npm install
npm run dev
# Open http://localhost:3000
```

## Next Steps (Phase 2)

- [ ] Connect Sanity CMS for product management
- [ ] Integrate real PayPal SDK
- [ ] Add print-on-demand API (Lulu Direct / Printify)
- [ ] Email confirmation with Resend
- [ ] Admin dashboard

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Fonts**: Playfair Display + Lato (Google Fonts)
- **Deployment**: Vercel
- **Domain**: bookola.world
