import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getProductBySlug, products } from '@/lib/products'
import { ProductDetail } from '@/components/product-detail'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const product = getProductBySlug(slug)
  if (!product) return { title: 'Product Not Found' }
  return {
    title: `${product.name} | Sweetera Patisserie`,
    description: product.description,
  }
}

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }))
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params
  const product = getProductBySlug(slug)
  if (!product) notFound()

  const related = products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, 3)

  const relatedProducts =
    related.length >= 2
      ? related
      : [
          ...related,
          ...products
            .filter(
              (p) =>
                p.id !== product.id &&
                !related.find((r) => r.id === p.id)
            )
            .slice(0, 3 - related.length),
        ]

  return (
    <ProductDetail product={product} relatedProducts={relatedProducts} />
  )
}
