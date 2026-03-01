import Link from 'next/link'
import { Product } from '@/lib/products'
import BookCover from '@/components/BookCover'

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="card-hover bg-white border border-parchment overflow-hidden group">
      {/* Book cover visual */}
      <div className="relative h-56 overflow-hidden group-hover:scale-[1.02] transition-transform duration-300">
        <BookCover title={product.title} subtitle={product.subtitle} category={product.category} size="sm" />
        {product.badge && (
          <div className="absolute top-4 right-4 bg-gold text-white text-xs font-bold tracking-widest uppercase px-3 py-1 z-10">
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
