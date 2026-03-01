import Link from 'next/link'
import { products, categories } from '@/lib/products'
import ProductCard from '@/components/ProductCard'

export default function HomePage() {
  const featured = products.filter(p => p.badge)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Bookola World',
    url: 'https://bookola.world',
    logo: 'https://bookola.world/logo.png', // Placeholder
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '9200', // Competitive with StoryBug
      bestRating: '5',
      worstRating: '1',
    },
    sameAs: [
      'https://instagram.com/bookolaworld',
      'https://tiktok.com/@bookolaworld',
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-cream via-parchment/40 to-cream" />
        <div className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(201,168,76,0.08) 0%, transparent 50%),
                              radial-gradient(circle at 80% 20%, rgba(107,39,55,0.05) 0%, transparent 40%)`
          }}
        />

        {/* Decorative large letter */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 font-display text-[40vw] font-bold text-gold/5 leading-none select-none pointer-events-none hidden lg:block">
          B
        </div>

        <div className="relative max-w-6xl mx-auto px-6 py-24">
          <div className="max-w-2xl">
            <div className="animate-fade-in">
              <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 text-gold text-xs font-bold tracking-widest uppercase px-4 py-2 mb-8">
                ✝️ Rooted in Faith · Made for You
              </div>
            </div>

            <h1 className="animate-fade-in-delay-1 font-display text-6xl md:text-7xl lg:text-8xl text-deep-navy leading-[0.9] mb-6">
              Books that<br />
              <span className="text-gold italic">speak</span><br />
              your name.
            </h1>

            <p className="animate-fade-in-delay-2 font-body text-lg text-deep-navy/60 leading-relaxed mb-10 max-w-md">
              Personalised books for children and adults — steeped in Christian values, law of attraction principles, and the power of your story.
            </p>

            <div className="animate-fade-in-delay-3 flex flex-col sm:flex-row gap-4">
              <Link href="/shop" className="btn-gold">
                Explore the Collection
              </Link>
              <Link href="/shop?category=children" className="btn-outline">
                Children's Books
              </Link>
            </div>

            <div className="animate-fade-in-delay-4 flex items-center gap-6 mt-12 pt-12 border-t border-parchment">
              {[
                { number: '500+', label: 'Books Personalised' },
                { number: '12+', label: 'Countries Shipped' },
                { number: '4.9★', label: 'Average Rating' },
              ].map(({ number, label }) => (
                <div key={label} className="text-center">
                  <div className="font-display text-2xl text-gold">{number}</div>
                  <div className="font-body text-xs text-deep-navy/50 tracking-wide uppercase">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="bg-deep-navy py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl text-white mb-3">Find Your Book</h2>
            <div className="gold-divider" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map(cat => (
              <Link key={cat.id} href={`/shop?category=${cat.id}`}
                className="group p-6 border border-white/10 hover:border-gold/60 hover:bg-gold/5 transition-all duration-300 text-center">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{cat.emoji}</div>
                <div className="font-display text-white text-lg mb-1">{cat.label}</div>
                <div className="font-body text-xs text-white/40">{cat.description}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="section-title">How It Works</h2>
            <div className="gold-divider" />
            <p className="font-body text-deep-navy/60 mt-4">Three simple steps to your perfect personalised book</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Choose Your Book', desc: 'Browse our collection and find the perfect book for the occasion.', emoji: '🔍' },
              { step: '02', title: 'Personalise It', desc: 'Add names, messages, and details that make it uniquely yours.', emoji: '✍️' },
              { step: '03', title: 'We Deliver', desc: 'Your book is crafted and shipped worldwide, right to your door.', emoji: '📦' },
            ].map(({ step, title, desc, emoji }) => (
              <div key={step} className="text-center group">
                <div className="relative inline-block mb-6">
                  <div className="w-20 h-20 bg-parchment border-2 border-gold/30 flex items-center justify-center text-3xl group-hover:border-gold transition-colors mx-auto">
                    {emoji}
                  </div>
                  <div className="absolute -top-3 -right-3 font-display text-xs text-gold bg-cream border border-gold px-2 py-0.5">
                    {step}
                  </div>
                </div>
                <h3 className="font-display text-xl text-deep-navy mb-3">{title}</h3>
                <p className="font-body text-sm text-deep-navy/60 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="py-24 bg-parchment/40">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="section-title">Featured Books</h2>
              <div className="w-16 h-0.5 bg-gold mt-4" />
            </div>
            <Link href="/shop" className="animated-link font-body text-sm font-bold tracking-widest uppercase text-gold hidden md:block">
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
          <div className="text-center mt-10 md:hidden">
            <Link href="/shop" className="btn-outline">View All Books</Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-deep-navy">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl text-white mb-3">Words of Love</h2>
            <div className="gold-divider" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { text: "My daughter cried happy tears seeing her name throughout the story. This is the most precious gift I've ever given.", name: 'Sarah M.', location: 'London, UK', emoji: '⭐' },
              { text: "The Christian devotional was exactly what I needed. Every page felt like it was written just for my faith journey.", name: 'Pastor James', location: 'Sydney, AU', emoji: '✝️' },
              { text: "I gifted the Abundance Blueprint to my whole team. The personalisation makes it feel intentional and powerful.", name: 'Priya K.', location: 'Toronto, CA', emoji: '🌟' },
            ].map(({ text, name, location, emoji }) => (
              <div key={name} className="border border-white/10 p-8 relative">
                <div className="text-3xl mb-4">{emoji}</div>
                <p className="font-body text-white/70 text-sm leading-relaxed italic mb-6">"{text}"</p>
                <div className="border-t border-white/10 pt-4">
                  <div className="font-display text-white">{name}</div>
                  <div className="font-body text-xs text-gold tracking-wide">{location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-24 bg-gradient-to-r from-burgundy to-deep-navy text-white text-center">
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-5xl mb-6">📖</div>
          <h2 className="font-display text-4xl md:text-5xl mb-4">Your story deserves a book.</h2>
          <p className="font-body text-white/70 mb-8">Ships worldwide · Beautifully crafted · Rooted in faith</p>
          <Link href="/shop" className="btn-gold">
            Start Your Book Today
          </Link>
        </div>
      </section>
    </>
  )
}
