import Image from 'next/image'
import Link from 'next/link'

export function HeroSection() {
  return (
    <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden">
      <Image
        src="/images/hero-bakery.jpg"
        alt="Sweetera patisserie display with artisan pastries and breads"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-foreground/30" />
      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <p className="mb-4 text-xs tracking-[0.3em] text-primary-foreground/80">
          ARTISAN PATISSERIE AND BAKERY
        </p>
        <h1 className="font-serif text-4xl leading-tight text-primary-foreground md:text-6xl md:leading-tight text-balance">
          Handcrafted Sweetness, Artfully Created
        </h1>
        <p className="mx-auto mt-6 max-w-lg text-sm leading-relaxed text-primary-foreground/80 md:text-base">
          Premium pastries, artisan breads, and exquisite cakes crafted with
          traditional French techniques and the finest ingredients.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/products"
            className="inline-block bg-primary-foreground px-8 py-3.5 text-xs tracking-[0.2em] text-foreground transition-colors hover:bg-primary-foreground/90"
          >
            ORDER NOW
          </Link>
          <Link
            href="/products"
            className="inline-block border border-primary-foreground/60 px-8 py-3.5 text-xs tracking-[0.2em] text-primary-foreground transition-colors hover:bg-primary-foreground/10"
          >
            EXPLORE MENU
          </Link>
        </div>
      </div>
    </section>
  )
}
