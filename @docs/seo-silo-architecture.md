# SEO Silo Architecture: Niche Landing Pages

To compete with StoryBug and other niche players, we are moving beyond a single shop page to **Niche SEO Silos**. This structure allows us to rank for specific, high-intent keywords by providing dedicated landing pages with custom content and metadata.

## 1. Targeted Silos

| Route | Target Keywords | Category Mapping |
| :--- | :--- | :--- |
| `/shop/christian-books` | Personalised Christian Gifts, Custom Baptism Books, Faith Devotionals | `christian` |
| `/shop/manifestation-journals` | Custom 369 Manifestation Journals, Law of Attraction Diaries | `law-of-attraction` |
| `/shop/personalized-gifts-for-kids` | Personalised Children's Books, Custom Story Books for Kids | `children` |
| `/shop/custom-diaries` | Personalised Diaries, Custom Journals, Family Legacy Books | `diaries` |

## 2. On-Page SEO Requirements

Each silo page will include:
1.  **Custom `generateMetadata`:** Unique Title tags and Meta Descriptions for the specific niche.
2.  **Optimized H1 & Intro:** A clear heading and 100-200 words of keyword-rich content at the top of the page.
3.  **Filtered Product Grid:** Only products relevant to that silo.
4.  **Structured Data:** `ItemList` and `BreadcrumbList` schema to help Google understand the collection.
5.  **Internal Linking:** Links from the homepage and main shop to these silos.

## 3. Technical Implementation

We will use a dynamic route `src/app/shop/[categorySlug]/page.tsx` and a mapping utility to translate the SEO-friendly slugs into our internal `Category` IDs.

---

## 4. Content Strategy per Silo

### Christian Books
- **Focus:** Milestones (Baptism, Confirmation, First Communion).
- **Keywords:** "Rooted in faith," "Scripture-based gifts," "Christian values."

### Manifestation Journals
- **Focus:** Self-improvement and manifestation techniques.
- **Keywords:** "Manifest your dreams," "369 method," "Intentional living," "Abundance."

### Kids Gifts
- **Focus:** Keepsake value and engagement.
- **Keywords:** "Starring your child," "Bedtime stories," "Birthday gift idea."
