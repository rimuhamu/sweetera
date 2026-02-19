import Image from 'next/image'
import Link from 'next/link'
import type { Product } from '@/lib/products'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/products/${product.slug}`} className="group">
      <div className="relative aspect-[4/5] overflow-hidden bg-secondary">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <h3 className="mt-4 font-serif text-base text-foreground lg:text-lg">
        {product.name}
      </h3>
      <p className="mt-1 text-sm text-muted-foreground">
        ${product.price.toFixed(2)}
      </p>
    </Link>
  )
}
