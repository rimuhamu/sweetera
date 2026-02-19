'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Search, ShoppingBag } from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { QuantitySelector } from './quantity-selector'
import { useCart } from '@/lib/cart-context'
import type { Product } from '@/lib/products'
import { ProductCard } from './product-card'

interface ProductDetailProps {
  product: Product
  relatedProducts: Product[]
}

export function ProductDetail({ product, relatedProducts }: ProductDetailProps) {
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)
  const { addItem, totalItems, setIsCartOpen } = useCart()

  function handleAddToCart() {
    addItem(
      {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        slug: product.slug,
      },
      quantity
    )
    setAdded(true)
    setTimeout(() => setAdded(false), 1500)
  }

  return (
    <div className="flex min-h-screen flex-col">
      {/* Top bar */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-12">
          <Link
            href="/products"
            className="flex items-center gap-2 text-xs tracking-[0.15em] text-foreground transition-colors hover:text-muted-foreground"
          >
            <ArrowLeft className="size-4" />
            BACK TO SHOP
          </Link>

          <Link href="/" className="absolute left-1/2 -translate-x-1/2">
            <Image
              src="/images/logo.jpg"
              alt="Sweetera Logo"
              width={36}
              height={36}
              className="rounded-sm"
            />
          </Link>

          <div className="flex items-center gap-4">
            <button aria-label="Search" className="text-foreground/70 transition-colors hover:text-foreground">
              <Search className="size-4" />
            </button>
            <button
              aria-label="Shopping cart"
              className="relative text-foreground/70 transition-colors hover:text-foreground"
              onClick={() => setIsCartOpen(true)}
            >
              <ShoppingBag className="size-4" />
              {totalItems > 0 && (
                <span className="absolute -right-1.5 -top-1.5 flex size-4 items-center justify-center rounded-full bg-accent text-[10px] font-medium text-foreground">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-10 lg:grid-cols-2 lg:gap-16 lg:px-12 lg:py-16">
          {/* Product image */}
          <div className="relative aspect-[4/5] overflow-hidden bg-secondary">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Product info */}
          <div className="flex flex-col justify-center">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 text-xs tracking-[0.15em] text-muted-foreground">
                <li>
                  <Link href="/products" className="transition-colors hover:text-foreground">
                    PATISSERIE
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-foreground">{product.name.toUpperCase()}</li>
              </ol>
            </nav>

            <h1 className="font-serif text-3xl text-foreground sm:text-4xl lg:text-5xl text-balance">
              {product.name}
            </h1>

            <p className="mt-4 font-serif text-xl text-muted-foreground">
              ${product.price.toFixed(2)}
            </p>

            <p className="mt-6 text-sm leading-relaxed text-foreground/80 sm:text-base">
              {product.description}
            </p>

            {/* Add to cart */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <QuantitySelector value={quantity} onChange={setQuantity} />
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-primary py-3.5 text-xs tracking-[0.2em] text-primary-foreground transition-colors hover:bg-primary/90 sm:min-w-[200px] sm:flex-initial"
              >
                {added ? 'ADDED!' : 'ADD TO CART'}
              </button>
            </div>

            {/* Accordion details */}
            <div className="mt-10">
              <Accordion type="single" collapsible>
                <AccordionItem value="ingredients">
                  <AccordionTrigger className="text-xs tracking-[0.15em] hover:no-underline">
                    INGREDIENTS
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-sm leading-relaxed text-foreground/80">
                      {product.ingredients}
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="nutrition">
                  <AccordionTrigger className="text-xs tracking-[0.15em] hover:no-underline">
                    NUTRITIONAL INFORMATION
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-sm leading-relaxed text-foreground/80">
                      {product.nutrition}
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="delivery">
                  <AccordionTrigger className="text-xs tracking-[0.15em] hover:no-underline">
                    DELIVERY & STORAGE
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-sm leading-relaxed text-foreground/80">
                      {product.delivery}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related products */}
        {relatedProducts.length > 0 && (
          <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-12 lg:pb-24">
            <h2 className="mb-8 font-serif text-2xl text-foreground">
              You May Also Like
            </h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-background">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 sm:flex-row lg:px-12">
          <p className="text-xs tracking-[0.1em] text-muted-foreground">
            &copy; {new Date().getFullYear()} SWEETERA PATISSERIE
          </p>
          <nav aria-label="Footer navigation">
            <ul className="flex items-center gap-6">
              <li>
                <Link href="/sustainability" className="text-xs tracking-[0.1em] text-muted-foreground transition-colors hover:text-foreground">
                  SUSTAINABILITY
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-xs tracking-[0.1em] text-muted-foreground transition-colors hover:text-foreground">
                  SHIPPING
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-xs tracking-[0.1em] text-muted-foreground transition-colors hover:text-foreground">
                  TERMS
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  )
}
