import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-deep-navy text-white/70">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="font-display text-3xl text-white mb-4">
              Bookola<span className="text-gold">.</span>world
            </div>
            <p className="font-body text-sm leading-relaxed text-white/60 max-w-xs">
              Personalised books rooted in faith, love, and intention. Every book is crafted with Christian values and made uniquely for you.
            </p>
            <div className="flex gap-4 mt-6">
              {['📖', '✝️', '🌟', '❤️'].map((e, i) => (
                <span key={i} className="text-xl">{e}</span>
              ))}
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-display text-white text-lg mb-4">Shop</h4>
            <ul className="space-y-3 text-sm">
              {[
                { href: '/shop?category=children', label: "Children's Books" },
                { href: '/shop?category=christian', label: 'Christian Values' },
                { href: '/shop?category=law-of-attraction', label: 'Law of Attraction' },
                { href: '/shop?category=diaries', label: 'Diaries & Journals' },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="hover:text-gold transition-colors animated-link">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="font-display text-white text-lg mb-4">Info</h4>
            <ul className="space-y-3 text-sm">
              {[
                { href: '/about', label: 'Our Story' },
                { href: '/how-it-works', label: 'How It Works' },
                { href: '/faq', label: 'FAQ' },
                { href: '/contact', label: 'Contact Us' },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="hover:text-gold transition-colors animated-link">{label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
          <p>© {new Date().getFullYear()} Bookola.world — All rights reserved</p>
          <p>Made with ❤️ and faith · Ships worldwide</p>
        </div>
      </div>
    </footer>
  )
}
