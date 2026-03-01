import Link from 'next/link'

export default function AboutPage() {
  return (
    <>
      <section className="bg-deep-navy text-white py-20 text-center">
        <h1 className="font-display text-5xl md:text-6xl mb-4">Our Story</h1>
        <div className="w-16 h-0.5 bg-gold mx-auto mb-4" />
        <p className="font-body text-white/60 text-lg max-w-md mx-auto">
          A bookstore born from faith, love, and the belief that everyone deserves a book with their name in it.
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-24">
        <div className="prose-bookola">
          <div className="text-center mb-16">
            <div className="text-6xl mb-6">✝️</div>
            <h2 className="font-display text-3xl text-deep-navy mb-4">Built on Christian Values</h2>
            <p className="font-body text-deep-navy/70 leading-relaxed">
              Bookola.world was born from a simple idea: books are more powerful when they speak directly to you.
              We believe every person has a story worth telling, every child deserves to be the hero of their own adventure,
              and every soul deserves encouragement rooted in faith and love.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {[
              { emoji: '📖', title: 'Our Mission', text: 'To create personalised books that inspire, encourage, and connect people through stories rooted in Christian values.' },
              { emoji: '🌍', title: 'Our Reach', text: 'We ship worldwide, bringing personalised books to families across every continent.' },
              { emoji: '❤️', title: 'Our Values', text: 'Faith, family, intentionality, and the belief that every person\'s story matters.' },
              { emoji: '🌟', title: 'Our Vision', text: 'A world where every bookshelf has at least one book with your name in it.' },
            ].map(({ emoji, title, text }) => (
              <div key={title} className="border border-parchment p-6">
                <div className="text-3xl mb-3">{emoji}</div>
                <h3 className="font-display text-lg text-deep-navy mb-2">{title}</h3>
                <p className="font-body text-sm text-deep-navy/60 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/shop" className="btn-gold">Explore Our Books</Link>
          </div>
        </div>
      </section>
    </>
  )
}
