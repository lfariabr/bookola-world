import { Metadata } from 'next'
import Link from 'next/link'
import { products, categories, Category } from '@/lib/products'
import ProductCard from '@/components/ProductCard'
import { notFound } from 'next/navigation'

interface SiloConfig {
  categoryId: Category
  title: string
  description: string
  h1: string
  intro: string
  keywords: string
}

const SILOS: Record<string, SiloConfig> = {
  'christian-books': {
    categoryId: 'christian',
    title: 'Personalised Christian Gifts & Faith Books | Bookola World',
    description: 'Explore our collection of personalised Christian books and devotionals. Rooted in faith, each book is custom-made for baptisms, milestones, and daily prayer.',
    h1: 'Personalised Christian Books',
    intro: 'Every spiritual journey is unique. Our personalised Christian books are designed to deepen that connection by weaving your name and story into scripture and devotionals. Whether you are seeking a custom baptism gift or a daily faith companion, our collection is rooted in values and crafted with love.',
    keywords: 'Personalised Christian Gifts, Custom Baptism Books, Faith Devotionals, Religious Keepsakes'
  },
  'manifestation-journals': {
    categoryId: 'law-of-attraction',
    title: 'Custom Manifestation Journals & 369 Method | Bookola World',
    description: 'Design your own manifestation journal. Personalised guides for law of attraction, abundance, and the 369 method to help you co-create your reality.',
    h1: 'Custom Manifestation Journals',
    intro: 'Align with the frequency of your dreams. Our personalised manifestation journals are more than just diaries; they are blueprints for your future. Personalise your abundance guide with your goals and affirmations to make your vision tangible.',
    keywords: 'Custom 369 Manifestation Journals, Law of Attraction Diaries, Personalised Abundance Blueprint'
  },
  'personalized-gifts-for-kids': {
    categoryId: 'children',
    title: "Personalised Children's Books — Custom Stories | Bookola World",
    description: 'The perfect gift for kids. Personalised story books where your child is the hero. Custom bedtime stories they will treasure forever.',
    h1: "Personalised Children's Books",
    intro: "See their eyes light up as they become the star of their very own story. Our custom children's books feature your child's name and appearance, making reading a magical experience that builds confidence and connection.",
    keywords: "Personalised Children's Books, Custom Story Books for Kids, Birthday Gift Idea"
  },
  'custom-diaries': {
    categoryId: 'diaries',
    title: 'Personalised Diaries & Family Legacy Books | Bookola World',
    description: 'Capture your life story in a personalised diary. Custom family legacy books to pass down through generations.',
    h1: 'Personalised Diaries & Journals',
    intro: 'Your life is a story worth telling. Our personalised diaries and family legacy books provide the perfect canvas to document your chapters. Customise the cover and introductory pages to create a truly one-of-a-kind keepsake.',
    keywords: 'Personalised Diaries, Custom Journals, Family Legacy Books'
  }
}

type Props = {
  params: { categorySlug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const silo = SILOS[params.categorySlug]
  if (!silo) return { title: 'Shop | Bookola World' }

  return {
    title: silo.title,
    description: silo.description,
    keywords: silo.keywords,
    openGraph: {
      title: silo.title,
      description: silo.description,
      type: 'website',
    }
  }
}

export default function CategorySiloPage({ params }: Props) {
  const silo = SILOS[params.categorySlug]

  if (!silo) {
    notFound()
  }

  const filteredProducts = products.filter(p => p.category === silo.categoryId)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: silo.h1,
    description: silo.description,
    url: `https://bookola.world/shop/${params.categorySlug}`,
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: filteredProducts.map((p, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        url: `https://bookola.world/personalise/${p.id}`,
        name: p.title,
      })),
    },
    breadcrumb: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://bookola.world' },
        { '@type': 'ListItem', position: 2, name: 'Shop', item: 'https://bookola.world/shop' },
        { '@type': 'ListItem', position: 3, name: silo.h1 },
      ],
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Hero Section */}
      <section className="bg-deep-navy text-white pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="font-body text-xs text-gold font-bold tracking-widest uppercase mb-4">
            Collection — {categories.find(c => c.id === silo.categoryId)?.label}
          </div>
          <h1 className="font-display text-5xl md:text-6xl mb-6">{silo.h1}</h1>
          <div className="w-16 h-0.5 bg-gold mx-auto mb-8" />
          <p className="font-body text-white/70 text-lg leading-relaxed max-w-2xl mx-auto">
            {silo.intro}
          </p>
        </div>
      </section>

      {/* Product Grid */}
      <section className="bg-cream py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between mb-12 pb-6 border-b border-parchment">
            <div className="font-body text-sm text-deep-navy/60">
              Showing {filteredProducts.length} books in this collection
            </div>
            <Link href="/shop" className="text-xs font-bold tracking-widest uppercase text-gold hover:text-burgundy transition-colors">
              ← View All Categories
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-24 text-deep-navy/40 font-body">
              New books in this collection are coming soon.
            </div>
          )}
        </div>
      </section>

      {/* SEO Footer Content */}
      <section className="bg-parchment/30 py-16 border-t border-parchment">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-display text-2xl text-deep-navy mb-4">Why choose our {silo.h1}?</h2>
          <p className="font-body text-sm text-deep-navy/60 leading-relaxed mb-6">
            At Bookola World, we believe that the most powerful books are the ones where you see yourself on the page. Our {silo.h1} are crafted using high-quality materials and printed locally to ensure fast delivery and a premium feel. Each personalisation is handled with care to maintain the integrity of our faith-based and spiritual themes.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="flex gap-4">
              <span className="text-gold">✝️</span>
              <div>
                <h4 className="font-display text-lg text-deep-navy">Rooted in Purpose</h4>
                <p className="font-body text-xs text-deep-navy/50">Intentional designs that serve your spiritual and manifestation goals.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-gold">📦</span>
              <div>
                <h4 className="font-display text-lg text-deep-navy">Global Shipping</h4>
                <p className="font-body text-xs text-deep-navy/50">We ship our personalised books to countries all over the world.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
