import Image from 'next/image'
import Link from 'next/link'

export function StorySection() {
  return (
    <section className="bg-secondary">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:gap-20 lg:px-12 lg:py-28">
        <div>
          <p className="mb-3 text-xs tracking-[0.3em] text-muted-foreground uppercase">
            Our Story
          </p>
          <h2 className="font-serif text-3xl text-foreground sm:text-4xl text-balance">
            A Tradition of French Excellence
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-foreground/80 sm:text-base">
            Founded in the heart of Paris, Sweetera Patisserie has been crafting
            exceptional pastries and breads since 2012. Our head patissier trained
            under some of France&apos;s most celebrated bakers, bringing
            generations of knowledge to every creation.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-foreground/80 sm:text-base">
            We source our ingredients from the finest suppliers across Europe
            &mdash; AOP butter from Normandy, flour from heritage wheat mills, and
            chocolate from Valrhona. Every item is made fresh daily in small batches
            to ensure the highest quality.
          </p>
          <Link
            href="/about"
            className="mt-8 inline-flex items-center text-xs tracking-[0.2em] text-foreground underline underline-offset-4 transition-colors hover:text-muted-foreground"
          >
            LEARN MORE
          </Link>
        </div>
        <div className="relative aspect-[4/5] overflow-hidden">
          <Image
            src="/images/bakery-interior.jpg"
            alt="Inside the Sweetera bakery"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  )
}
