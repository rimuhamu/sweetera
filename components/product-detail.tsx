'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Minus, Plus, ChevronDown } from 'lucide-react'
import { useCart } from '@/lib/cart-context'
import { ProductCard } from '@/components/product-card'
import type { Product } from '@/lib/products'

function QuantitySelector({
  quantity,
  onDecrease,
  onIncrease,
}: {
  quantity: number
  onDecrease: () => void
  onIncrease: () => void
}) {
  return (
    <div className="flex items-center border border-border">
      <button
        onClick={onDecrease}
        disabled={quantity <= 1}
        className="flex h-12 w-12 items-center justify-center text-foreground/60 transition-colors hover:text-foreground disabled:opacity-40"
        aria-label="Decrease quantity"
      >
        <Minus className="h-3.5 w-3.5" />
      </button>
      <span className="flex h-12 w-12 items-center justify-center text-sm text-foreground">
        {quantity}
      </span>
      <button
        onClick={onIncrease}
        className="flex h-12 w-12 items-center justify-center text-foreground/60 transition-colors hover:text-foreground"
        aria-label="Increase quantity"
      >
        <Plus className="h-3.5 w-3.5" />
      </button>
    </div>
  )
}

function AccordionItem({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-border">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-5"
        aria-expanded={isOpen}
      >
        <span className="text-xs tracking-[0.15em] text-foreground">{title}</span>
        <ChevronDown
          className={`h-4 w-4 text-muted-foreground transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      {isOpen && (
        <div className="pb-5 text-sm leading-relaxed text-muted-foreground">
          {children}
        </div>
      )}
    </div>
  )
}

export function ProductDetail({
  product,
  relatedProducts,
}: {
  product: Product
  relatedProducts: Product[]
}) {
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)
  const { addItem } = useCart()

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
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <div>
      {/* Back to shop bar */}
      <div className="mx-auto max-w-7xl px-6 py-4">
        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-xs tracking-[0.15em] text-foreground transition-colors hover:text-muted-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          BACK TO SHOP
        </Link>
      </div>

      {/* Product content */}
      <div className="mx-auto max-w-7xl px-6 pb-20 pt-4">
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-16">
          {/* Image */}
          <div className="relative aspect-square w-full overflow-hidden bg-secondary lg:w-1/2">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Info */}
          <div className="flex flex-1 flex-col lg:py-4">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 text-xs tracking-[0.1em] text-muted-foreground">
                <li>
                  <Link href="/products" className="transition-colors hover:text-foreground">
                    PATISSERIE
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-foreground">{product.name.toUpperCase()}</li>
              </ol>
            </nav>

            <h1 className="font-serif text-3xl text-foreground md:text-4xl text-balance">
              {product.name}
            </h1>

            <p className="mt-4 font-serif text-xl text-muted-foreground">
              ${product.price.toFixed(2)}
            </p>

            <p className="mt-6 leading-relaxed text-muted-foreground">
              {product.description}
            </p>

            {/* Add to cart */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <QuantitySelector
                quantity={quantity}
                onDecrease={() => setQuantity((q) => Math.max(1, q - 1))}
                onIncrease={() => setQuantity((q) => q + 1)}
              />
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-primary py-3.5 text-xs tracking-[0.2em] text-primary-foreground transition-colors hover:bg-primary/90 sm:max-w-xs"
              >
                {added ? 'ADDED TO CART' : 'ADD TO CART'}
              </button>
            </div>

            {/* Accordion details */}
            <div className="mt-10 border-t border-border">
              <AccordionItem title="INGREDIENTS">
                {product.ingredients}
              </AccordionItem>
              <AccordionItem title="NUTRITIONAL INFORMATION">
                {product.nutrition}
              </AccordionItem>
              <AccordionItem title="DELIVERY & STORAGE">
                {product.delivery}
              </AccordionItem>
            </div>
          </div>
        </div>

        {/* Related products */}
        {relatedProducts.length > 0 && (
          <section className="mt-20 border-t border-border pt-16">
            <h2 className="text-center font-serif text-2xl text-foreground">
              You May Also Like
            </h2>
            <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}
