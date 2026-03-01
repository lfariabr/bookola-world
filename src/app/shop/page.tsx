'use client'
import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { products, categories, Category } from '@/lib/products'
import ProductCard from '@/components/ProductCard'
import { Suspense } from 'react'

function ShopContent() {
  const searchParams = useSearchParams()
  const [activeCategory, setActiveCategory] = useState<Category | 'all'>('all')

  useEffect(() => {
    const cat = searchParams.get('category') as Category
    if (cat) setActiveCategory(cat)
  }, [searchParams])

  const filtered = activeCategory === 'all' ? products : products.filter(p => p.category === activeCategory)

  return (
    <>
      {/* Hero */}
      <section className="bg-deep-navy text-white py-20 text-center">
        <h1 className="font-display text-5xl md:text-6xl mb-4">The Collection</h1>
        <div className="w-16 h-0.5 bg-gold mx-auto mb-4" />
        <p className="font-body text-white/60 text-lg">Every book, made uniquely for you.</p>
      </section>

      {/* Filter tabs */}
      <section className="sticky top-16 z-30 bg-cream/95 backdrop-blur border-b border-parchment py-4">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveCategory('all')}
              className={`font-body text-xs font-bold tracking-widest uppercase px-4 py-2 border transition-all ${
                activeCategory === 'all'
                  ? 'bg-gold text-white border-gold'
                  : 'border-deep-navy/20 text-deep-navy/60 hover:border-gold hover:text-gold'
              }`}
            >
              All Books ({products.length})
            </button>
            {categories.map(cat => {
              const count = products.filter(p => p.category === cat.id).length
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id as Category)}
                  className={`font-body text-xs font-bold tracking-widest uppercase px-4 py-2 border transition-all ${
                    activeCategory === cat.id
                      ? 'bg-gold text-white border-gold'
                      : 'border-deep-navy/20 text-deep-navy/60 hover:border-gold hover:text-gold'
                  }`}
                >
                  {cat.emoji} {cat.label} ({count})
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Products grid */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(p => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
        {filtered.length === 0 && (
          <div className="text-center py-24 text-deep-navy/40 font-body">No books found.</div>
        )}
      </section>
    </>
  )
}

export default function ShopPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center font-display text-2xl text-gold">Loading...</div>}>
      <ShopContent />
    </Suspense>
  )
}
