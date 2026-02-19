import Image from 'next/image'
import Link from 'next/link'
import type { Product } from '@/lib/products'

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/products/${product.slug}`} className="group block">
      <div className="relative aspect-square overflow-hidden bg-secondary">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div className="pt-4">
        <h3 className="font-serif text-base text-foreground">{product.name}</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          ${product.price.toFixed(2)}
        </p>
      </div>
    </Link>
  )
}
