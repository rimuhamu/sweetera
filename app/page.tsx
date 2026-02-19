import Link from 'next/link'
import { HeroSection } from '@/components/hero-section'
import { ProductCard } from '@/components/product-card'
import { StorySection } from '@/components/story-section'
import { NewsletterSection } from '@/components/newsletter-section'
import { products } from '@/lib/products'

const featuredProducts = products.slice(0, 3)

const categories = [
  { name: 'Pastries', slug: 'Pastries' },
  { name: 'Cakes', slug: 'Cakes' },
  { name: 'Breads', slug: 'Breads' },
  { name: 'Macarons', slug: 'Macarons' },
]

export default function HomePage() {
  return (
    <>
      <HeroSection />

      {/* Featured Products */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="text-xs tracking-[0.2em] text-muted-foreground">
              OUR SELECTION
            </p>
            <h2 className="mt-4 font-serif text-3xl text-foreground md:text-4xl">
              Featured Creations
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/products"
              className="inline-block border border-border px-8 py-3.5 text-xs tracking-[0.2em] text-foreground transition-colors hover:bg-secondary"
            >
              VIEW ALL PRODUCTS
            </Link>
          </div>
        </div>
      </section>

      <StorySection />

      {/* Categories */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="text-xs tracking-[0.2em] text-muted-foreground">
              EXPLORE
            </p>
            <h2 className="mt-4 font-serif text-3xl text-foreground md:text-4xl">
              Shop by Category
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/products?category=${cat.slug}`}
                className="group relative flex h-48 items-center justify-center overflow-hidden bg-secondary transition-colors hover:bg-border md:h-56"
              >
                <span className="font-serif text-2xl text-foreground transition-transform duration-300 group-hover:scale-105">
                  {cat.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <NewsletterSection />
    </>
  )
}
