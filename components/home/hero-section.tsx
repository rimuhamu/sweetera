import Image from 'next/image'
import Link from 'next/link'

export function HeroSection() {
  return (
    <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden">
      <Image
        src="/images/hero-bakery.jpg"
        alt="Sweetera patisserie display of fresh pastries and breads"
        fill
        className="object-cover"
        priority
        quality={90}
      />
      <div className="absolute inset-0 bg-foreground/35" />
      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <p className="mb-4 text-xs tracking-[0.3em] text-primary-foreground/80 uppercase">
          Artisan Patisserie & Bakery
        </p>
        <h1 className="font-serif text-4xl leading-tight text-primary-foreground sm:text-5xl md:text-6xl lg:text-7xl text-balance">
          Handcrafted Sweetness, Artfully Created
        </h1>
        <p className="mx-auto mt-6 max-w-lg text-sm leading-relaxed text-primary-foreground/85 sm:text-base">
          From our ovens to your table, each creation is a labour of love using
          the finest ingredients and time-honoured French techniques.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/products"
            className="inline-flex items-center justify-center bg-primary-foreground px-8 py-3.5 text-xs tracking-[0.2em] text-foreground transition-colors hover:bg-primary-foreground/90"
          >
            ORDER NOW
          </Link>
          <Link
            href="/products"
            className="inline-flex items-center justify-center border border-primary-foreground/60 px-8 py-3.5 text-xs tracking-[0.2em] text-primary-foreground transition-colors hover:bg-primary-foreground/10"
          >
            EXPLORE MENU
          </Link>
        </div>
      </div>
    </section>
  )
}
