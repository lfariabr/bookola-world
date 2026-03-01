'use client'
import { useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { products } from '@/lib/products'
import Link from 'next/link'

export default function PersonalisePage() {
  const params = useParams()
  const router = useRouter()
  const product = products.find(p => p.id === params.productId)
  const [fields, setFields] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <div className="font-display text-2xl text-deep-navy">Book not found</div>
        <Link href="/shop" className="btn-gold">Back to Shop</Link>
      </div>
    )
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Simulate order processing
    await new Promise(r => setTimeout(r, 1500))
    setLoading(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-6 py-24 text-center">
        <div className="text-6xl mb-6">🎉</div>
        <h2 className="font-display text-4xl text-deep-navy mb-4">Your order is placed!</h2>
        <div className="w-16 h-0.5 bg-gold mx-auto mb-6" />
        <p className="font-body text-deep-navy/60 max-w-sm mb-2">
          Thank you for your order of <strong>{product.title}</strong>. We'll send a confirmation email shortly.
        </p>
        <p className="font-body text-sm text-gold mb-10 italic">Your personalised book is being crafted with love ✝️</p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/shop" className="btn-gold">Continue Shopping</Link>
          <Link href="/" className="btn-outline">Return Home</Link>
        </div>
      </div>
    )
  }

  return (
    <>
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
          <div>
            <h1 className="font-display text-3xl text-deep-navy mb-2">Personalise Your Book</h1>
            <div className="w-12 h-0.5 bg-gold mb-6" />
            <p className="font-body text-sm text-deep-navy/60 mb-8">
              Fill in the details below and we'll craft a book that feels like it was written just for you.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              {product.personalisationFields.map(field => (
                <div key={field}>
                  <label className="block font-body text-xs font-bold tracking-widest uppercase text-deep-navy/70 mb-2">
                    {field} <span className="text-gold">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={fields[field] || ''}
                    onChange={e => setFields(f => ({ ...f, [field]: e.target.value }))}
                    placeholder={`Enter ${field.toLowerCase()}...`}
                    className="w-full border border-parchment bg-cream px-4 py-3 font-body text-sm text-deep-navy focus:outline-none focus:border-gold transition-colors placeholder:text-deep-navy/30"
                  />
                </div>
              ))}

              <div className="border border-parchment bg-parchment/30 p-4 text-xs font-body text-deep-navy/60 leading-relaxed mt-2">
                🔒 Your information is used only to personalise your book and process your order. We never share your data.
              </div>

              <div className="pt-2">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-body text-sm text-deep-navy/60">Total</span>
                  <span className="font-display text-2xl text-gold">${product.price.toFixed(2)} AUD</span>
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full btn-gold justify-center flex items-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <span className="animate-spin">⏳</span> Processing...
                    </>
                  ) : (
                    <>
                      💛 Order & Pay with PayPal
                    </>
                  )}
                </button>
                <p className="text-center font-body text-xs text-deep-navy/40 mt-3">
                  Secure checkout · PayPal protected · Ships worldwide
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
