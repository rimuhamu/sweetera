import Link from 'next/link'
import { HeroSection } from '@/components/hero-section'
import { ProductCard } from '@/components/product-card'
import { StorySection } from '@/components/story-section'
import { SocialSection } from '@/components/social-section'
import { products } from '@/lib/products'

const featuredProducts = products.slice(0, 3)

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
      <SocialSection />
    </>
  )
}
