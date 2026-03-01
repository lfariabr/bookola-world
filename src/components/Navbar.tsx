'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur border-b border-parchment">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="font-display text-2xl text-deep-navy tracking-tight hover:text-gold transition-colors">
          Bookola<span className="text-gold">.</span>world
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {[
            { href: '/shop', label: 'Shop' },
            { href: '/shop?category=children', label: "Children's" },
            { href: '/shop?category=christian', label: 'Christian' },
            { href: '/shop?category=law-of-attraction', label: 'Manifest' },
            { href: '/shop?category=diaries', label: 'Diaries' },
          ].map(({ href, label }) => (
            <Link key={href} href={href} className="animated-link font-body text-sm font-bold tracking-widest uppercase text-deep-navy/70 hover:text-deep-navy transition-colors">
              {label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="/shop" className="btn-gold text-xs">
            Shop Now
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-deep-navy">
          <div className="space-y-1.5">
            <span className={`block w-6 h-0.5 bg-current transition-transform ${open ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-current transition-opacity ${open ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-current transition-transform ${open ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-cream border-t border-parchment px-6 py-6 flex flex-col gap-4">
          {[
            { href: '/shop', label: 'All Books' },
            { href: '/shop?category=children', label: "Children's Books" },
            { href: '/shop?category=christian', label: 'Christian Values' },
            { href: '/shop?category=law-of-attraction', label: 'Law of Attraction' },
            { href: '/shop?category=diaries', label: 'Diaries' },
          ].map(({ href, label }) => (
            <Link key={href} href={href} onClick={() => setOpen(false)}
              className="font-body font-bold tracking-widest uppercase text-sm text-deep-navy/70 hover:text-gold transition-colors">
              {label}
            </Link>
          ))}
          <Link href="/shop" onClick={() => setOpen(false)} className="btn-gold text-center mt-2">
            Shop Now
          </Link>
        </div>
      )}
    </header>
  )
}
