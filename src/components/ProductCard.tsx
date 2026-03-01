import Link from 'next/link'
import { Product } from '@/lib/products'

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="card-hover bg-white border border-parchment overflow-hidden group">
      {/* Book cover visual */}
      <div className="relative h-56 bg-gradient-to-br from-parchment to-cream flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(201,168,76,0.3) 10px, rgba(201,168,76,0.3) 11px)'
          }}
        />
        <div className="relative text-center">
          <div className="text-7xl mb-2 group-hover:scale-110 transition-transform duration-300">{product.emoji}</div>
          <div className="font-display text-xs text-gold tracking-widest uppercase">{product.category.replace('-', ' ')}</div>
        </div>
        {product.badge && (
          <div className="absolute top-4 right-4 bg-gold text-white text-xs font-bold tracking-widest uppercase px-3 py-1">
            {product.badge}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-display text-xl text-deep-navy mb-1 group-hover:text-gold transition-colors">
          {product.title}
        </h3>
        <p className="font-body text-sm text-deep-navy/60 mb-3">{product.subtitle}</p>
        <p className="font-body text-sm text-deep-navy/70 leading-relaxed mb-4 line-clamp-2">
          {product.description}
        </p>

        {/* Personalisation preview */}
        <div className="flex flex-wrap gap-1 mb-4">
          {product.personalisationFields.slice(0, 3).map(f => (
            <span key={f} className="text-xs bg-parchment text-deep-navy/60 px-2 py-0.5 rounded">
              {f}
            </span>
          ))}
          {product.personalisationFields.length > 3 && (
            <span className="text-xs text-gold">+{product.personalisationFields.length - 3} more</span>
          )}
        </div>

        <div className="flex items-center justify-between">
          <div className="font-display text-2xl text-gold">${product.price.toFixed(2)}</div>
          <Link href={`/personalise/${product.id}`} className="btn-gold text-xs">
            Personalise
          </Link>
        </div>
      </div>
    </div>
  )
}
