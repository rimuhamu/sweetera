'use client'

import { cn } from '@/lib/utils'
import { categories } from '@/lib/products'

interface CategoryTabsProps {
  active: string
  onChange: (category: string) => void
}

export function CategoryTabs({ active, onChange }: CategoryTabsProps) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6" role="tablist" aria-label="Product categories">
      {categories.map((cat) => (
        <button
          key={cat}
          role="tab"
          aria-selected={active === cat}
          onClick={() => onChange(cat)}
          className={cn(
            'pb-1 text-sm transition-colors',
            active === cat
              ? 'border-b border-foreground text-foreground font-medium'
              : 'text-muted-foreground hover:text-foreground'
          )}
        >
          {cat}
        </button>
      ))}
    </div>
  )
}
