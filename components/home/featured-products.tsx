import Image from 'next/image'
import Link from 'next/link'
import { products } from '@/lib/products'

export function FeaturedProducts() {
  const featured = products.slice(0, 3)

  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-12 lg:py-28">
      <div className="mb-12 text-center">
        <p className="mb-3 text-xs tracking-[0.3em] text-muted-foreground uppercase">
          Our Selection
        </p>
        <h2 className="font-serif text-3xl text-foreground sm:text-4xl text-balance">
          Featured Creations
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((product) => (
          <Link
            key={product.id}
            href={`/products/${product.slug}`}
            className="group"
          >
            <div className="relative aspect-[4/5] overflow-hidden bg-secondary">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <h3 className="mt-4 font-serif text-lg text-foreground">
              {product.name}
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              ${product.price.toFixed(2)}
            </p>
          </Link>
        ))}
      </div>
      <div className="mt-12 text-center">
        <Link
          href="/products"
          className="inline-flex items-center justify-center border border-border px-8 py-3 text-xs tracking-[0.2em] text-foreground transition-colors hover:bg-secondary"
        >
          VIEW ALL PRODUCTS
        </Link>
      </div>
    </section>
  )
}
