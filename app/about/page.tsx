import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'About | Sweetera Patisserie',
  description:
    'Learn about our story, our ingredients, and our dedication to artisan baking since 2012.',
}

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden">
        <Image
          src="/images/bakery-interior.jpg"
          alt="Sweetera bakery interior"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-foreground/40" />
        <div className="relative z-10 text-center px-6">
          <h1 className="font-serif text-4xl text-primary-foreground sm:text-5xl md:text-6xl text-balance">
            Our Story
          </h1>
          <p className="mt-4 text-sm text-primary-foreground/80 tracking-[0.2em] uppercase">
            Baked with Love Since 2012
          </p>
        </div>
      </section>

      {/* Story content */}
      <section className="mx-auto max-w-3xl px-6 py-20 lg:py-28">
        <div className="flex flex-col gap-8">
          <div>
            <h2 className="font-serif text-2xl text-foreground sm:text-3xl">
              From Paris, With Passion
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-foreground/80 sm:text-base">
              Sweetera was founded in 2012 by head patissier Marie Laurent, who
              trained for over a decade in some of Paris&apos;s most prestigious
              bakeries. Her vision was simple: create a neighbourhood patisserie
              where every item is made with the same care and precision as a
              Michelin-starred dessert.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-2xl text-foreground sm:text-3xl">
              Our Ingredients
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-foreground/80 sm:text-base">
              We source only the finest ingredients from trusted European
              suppliers. Our AOP butter comes from Normandy, our flour from
              heritage wheat mills in the French countryside, and our chocolate
              exclusively from Valrhona. We believe that extraordinary pastries
              begin with extraordinary ingredients.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-2xl text-foreground sm:text-3xl">
              Sustainability
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-foreground/80 sm:text-base">
              We are committed to sustainable practices. Our packaging is fully
              compostable, we work with local organic farms wherever possible, and
              any unsold items are donated to community kitchens at the end of
              each day. Great baking should nourish both people and planet.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-secondary">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-12 lg:py-28">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-3">
            <div className="text-center">
              <h3 className="font-serif text-xl text-foreground">
                Artisanal Quality
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/70">
                Every item is handcrafted in small batches using time-honoured
                French techniques passed down through generations.
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-serif text-xl text-foreground">
                Sustainable Sourcing
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/70">
                We partner with ethical farms and suppliers who share our
                commitment to quality and environmental responsibility.
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-serif text-xl text-foreground">
                Community First
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/70">
                From hiring locally to donating surplus, we believe a bakery
                should be the heart of its neighbourhood.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
