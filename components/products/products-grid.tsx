'use client'

import { useState } from 'react'
import { CategoryTabs } from './category-tabs'
import { ProductCard } from './product-card'
import { getProductsByCategory } from '@/lib/products'

export function ProductsGrid() {
  const [activeCategory, setActiveCategory] = useState('All')
  const filtered = getProductsByCategory(activeCategory)

  return (
    <div>
      <CategoryTabs active={activeCategory} onChange={setActiveCategory} />
      <div className="mt-6 border-t border-border" />
      <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
