'use client'

import Image from 'next/image'
import { useCart } from '@/lib/cart-context'

const SHIPPING_COST = 12.0

export function OrderSummary() {
  const { items, subtotal } = useCart()
  const total = subtotal + (items.length > 0 ? SHIPPING_COST : 0)

  return (
    <div className="rounded-sm bg-secondary p-6 lg:p-8">
      <h2 className="font-serif text-2xl text-foreground">Order Summary</h2>

      {items.length === 0 ? (
        <p className="mt-6 text-sm text-muted-foreground">
          Your cart is empty.
        </p>
      ) : (
        <>
          <div className="mt-6 flex flex-col gap-6">
            {items.map((item) => (
              <div key={item.id} className="flex items-center gap-4">
                <div className="relative size-16 shrink-0 overflow-hidden rounded-sm bg-background">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 items-center justify-between gap-2">
                  <div>
                    <h3 className="text-sm font-medium text-foreground leading-tight">
                      {item.name}
                    </h3>
                    <p className="mt-0.5 text-xs tracking-[0.1em] text-muted-foreground">
                      QTY: {item.quantity}
                    </p>
                  </div>
                  <span className="text-sm text-foreground">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 border-t border-border pt-6">
            <div className="flex items-center justify-between text-sm">
              <span className="text-foreground/80">Subtotal</span>
              <span className="text-foreground">${subtotal.toFixed(2)}</span>
            </div>
            <div className="mt-2 flex items-center justify-between text-sm">
              <span className="text-foreground/80">Shipping</span>
              <span className="text-foreground">${SHIPPING_COST.toFixed(2)}</span>
            </div>
          </div>

          <div className="mt-4 border-t border-border pt-4">
            <div className="flex items-center justify-between">
              <span className="font-serif text-lg text-foreground">Total</span>
              <span className="font-serif text-xl text-foreground">
                ${total.toFixed(2)}
              </span>
            </div>
          </div>

          <button
            type="submit"
            className="mt-6 w-full bg-primary py-4 text-xs tracking-[0.2em] text-primary-foreground transition-colors hover:bg-primary/90"
          >
            COMPLETE PURCHASE
          </button>
          <p className="mt-4 text-center text-[10px] tracking-[0.15em] text-muted-foreground uppercase">
            Secure transaction powered by Sweetera
          </p>
        </>
      )}
    </div>
  )
}
