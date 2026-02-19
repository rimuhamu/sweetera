'use client'

import { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { ProductCard } from '@/components/product-card'
import { products, categories } from '@/lib/products'

export function ProductsGrid() {
  const searchParams = useSearchParams()
  const initialCategory = searchParams.get('category') || 'All'
  const [activeCategory, setActiveCategory] = useState(initialCategory)

  const filteredProducts =
    activeCategory === 'All'
      ? products
      : products.filter(
          (p) => p.category === activeCategory.toLowerCase()
        )

  return (
    <div>
      {/* Category Tabs */}
      <nav aria-label="Product categories" className="flex items-center gap-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`pb-1 text-sm transition-colors ${
              activeCategory === cat
                ? 'border-b border-foreground text-foreground'
                : 'text-muted-foreground hover:text-foreground'
            }`}
            aria-current={activeCategory === cat ? 'page' : undefined}
          >
            {cat}
          </button>
        ))}
      </nav>

      {/* Divider */}
      <div className="mt-4 border-t border-border" />

      {/* Grid */}
      <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <p className="py-20 text-center text-sm text-muted-foreground">
          No products found in this category.
        </p>
      )}
    </div>
  )
}
