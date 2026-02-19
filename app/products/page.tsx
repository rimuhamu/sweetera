import type { Metadata } from 'next'
import { ProductsGrid } from '@/components/products-grid'

export const metadata: Metadata = {
  title: 'Products | Sweetera Patisserie',
  description:
    'Browse our collection of handcrafted pastries, cakes, artisan breads, and French macarons.',
}

export default function ProductsPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-8 lg:px-12 lg:py-12">
      <ProductsGrid />
    </section>
  )
}
