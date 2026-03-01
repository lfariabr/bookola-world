# Technical SEO & Schema Implementation Plan

This document details the technical requirements for optimizing **Bookola World** for search engines and rich snippets.

## 1. Structured Data (JSON-LD)

Structured data helps Google understand the content of our pages and display "Rich Snippets" (stars, prices, etc.) in search results.

### A. Homepage: Organization & Website
**File:** `src/app/page.tsx`
- **Schema:** `Organization`, `WebSite`, and `AggregateRating`.
- **Goal:** Display the "4.9★" rating and brand information in search results.

### B. Product Pages: Product & Offer
**File:** `src/app/personalise/[productId]/page.tsx`
- **Schema:** `Product`, `Offer`, and `BreadcrumbList`.
- **Goal:** Show price, availability, and specific book details in Google Shopping and search results.

---

## 2. Dynamic Metadata (Next.js `generateMetadata`)

Currently, all pages use static metadata. We will implement the `generateMetadata` function to create unique, keyword-rich titles and descriptions for every book.

### Strategy:
- **Title Pattern:** `Personalised [Book Title] — Custom [Category] Gift | Bookola World`
- **Description Pattern:** `Create a custom [Book Title]. A [Category] book rooted in [Value] for [Target Audience]. Ships worldwide.`

---

## 3. Image SEO & Accessibility

- **Alt-Text:** All product images must have descriptive alt-text including the book title and keywords (e.g., "Personalised Christian children's book for baptism").
- **OpenGraph:** Dynamic OG images for product pages to improve click-through rates on social media.

---

## 4. Performance & Core Web Vitals

- **Fonts:** Continue using `next/font` for zero Layout Shift (CLS).
- **Images:** Use `next/image` with proper `priority` for the Hero section to optimize LCP (Largest Contentful Paint).

---

## 5. Niche Keyword Targeting (Silos)

We will create dedicated routes or optimized search parameters for:
- `/shop?category=children` -> "Personalised Christian Children's Books"
- `/shop?category=abundance` -> "Custom Manifestation & Abundance Journals"
