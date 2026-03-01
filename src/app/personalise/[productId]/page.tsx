import { products } from '@/lib/products'
import { Metadata } from 'next'
import Link from 'next/link'
import PersonalisationForm from './PersonalisationForm'

type Props = {
  params: { productId: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = products.find(p => p.id === params.productId)
  
  if (!product) {
    return {
      title: 'Book Not Found | Bookola World',
    }
  }

  const categoryName = product.category.charAt(0).toUpperCase() + product.category.slice(1)

  return {
    title: `Personalised ${product.title} — Custom ${categoryName} Gift | Bookola World`,
    description: `Create your own ${product.title}. A ${product.category} book rooted in faith and abundance. Personalise with names, dedications, and more. Ships worldwide.`,
    openGraph: {
      title: `Personalised ${product.title}`,
      description: product.subtitle,
      images: [{ url: '/og-image.jpg' }], // Placeholder
    },
  }
}

export default function PersonalisePage({ params }: Props) {
  const product = products.find(p => p.id === params.productId)

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <div className="font-display text-2xl text-deep-navy">Book not found</div>
        <Link href="/shop" className="btn-gold">Back to Shop</Link>
      </div>
    )
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.title,
    description: product.description,
    image: `https://bookola.world/images/${product.id}.jpg`, // Placeholder
    offers: {
      '@type': 'Offer',
      price: product.price,
      priceCurrency: 'AUD',
      availability: 'https://schema.org/InStock',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '520',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Breadcrumb */}
      <div className="bg-parchment/50 border-b border-parchment py-3">
        <div className="max-w-4xl mx-auto px-6">
          <div className="font-body text-xs text-deep-navy/40 tracking-wide">
            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/shop" className="hover:text-gold transition-colors">Shop</Link>
            <span className="mx-2">›</span>
            <span className="text-deep-navy/70">{product.title}</span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Book Preview Panel */}
          <div>
            <div className="bg-gradient-to-br from-parchment to-cream border-2 border-gold/20 p-12 text-center mb-6">
              <div className="text-8xl mb-4">{product.emoji}</div>
              <h2 className="font-display text-2xl text-deep-navy mb-1">{product.title}</h2>
              <p className="font-body text-sm text-deep-navy/60 mb-4">{product.subtitle}</p>
              <div className="font-display text-3xl text-gold">${product.price.toFixed(2)}</div>
            </div>

            <div className="bg-white border border-parchment p-6">
              <h4 className="font-display text-lg text-deep-navy mb-3">About this book</h4>
              <p className="font-body text-sm text-deep-navy/70 leading-relaxed mb-4">{product.description}</p>
              <div className="flex items-center gap-2 text-sm text-gold">
                <span>✝️</span>
                <span className="font-body">Made with Christian values & love</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <PersonalisationForm product={product} />
        </div>
      </div>
    </>
  )
}

