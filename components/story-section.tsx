import Image from 'next/image'
import Link from 'next/link'

export function StorySection() {
  return (
    <section className="bg-secondary py-20 md:py-28">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 md:flex-row md:gap-16">
        <div className="flex-1">
          <p className="text-xs tracking-[0.2em] text-muted-foreground">OUR STORY</p>
          <h2 className="mt-4 font-serif text-3xl text-foreground md:text-4xl text-balance">
            A Tradition of Excellence Since 2012
          </h2>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            Founded in the heart of Paris by pastry chef Marie Laurent, Sweetera
            began as a small corner bakery with a singular vision: to create
            pastries that honor the centuries-old traditions of French
            patisserie while embracing modern creativity.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Every morning, our team of artisans begins work at dawn, shaping,
            folding, and baking with the same care and precision that has defined
            our craft from day one. We source only the finest ingredients -
            AOP butter from Normandy, stone-ground flour from heritage mills,
            and seasonal fruits from local farms.
          </p>
          <Link
            href="/about"
            className="mt-8 inline-block text-xs tracking-[0.2em] text-foreground underline underline-offset-4 transition-colors hover:text-muted-foreground"
          >
            LEARN MORE
          </Link>
        </div>
        <div className="relative aspect-[4/5] w-full flex-1 overflow-hidden">
          <Image
            src="/images/bakery-interior.jpg"
            alt="Sweetera bakery interior"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  )
}
