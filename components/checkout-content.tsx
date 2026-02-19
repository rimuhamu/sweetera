'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useCart } from '@/lib/cart-context'

function FormField({
  label,
  placeholder,
  type = 'text',
  className = '',
}: {
  label: string
  placeholder: string
  type?: string
  className?: string
}) {
  return (
    <div className={className}>
      <label className="mb-2 block text-xs tracking-[0.15em] text-foreground">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-ring"
      />
    </div>
  )
}

function OrderItemRow({
  name,
  image,
  quantity,
  price,
}: {
  name: string
  image: string
  quantity: number
  price: number
}) {
  return (
    <div className="flex items-center gap-4">
      <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-sm bg-secondary">
        <Image src={image} alt={name} fill className="object-cover" sizes="64px" />
      </div>
      <div className="flex-1">
        <p className="text-sm font-medium text-foreground">{name}</p>
        <p className="text-xs text-muted-foreground">QTY: {quantity}</p>
      </div>
      <p className="text-sm text-foreground">${price.toFixed(2)}</p>
    </div>
  )
}

export function CheckoutContent() {
  const { items, subtotal } = useCart()
  const [submitted, setSubmitted] = useState(false)
  const shipping = items.length > 0 ? 12.0 : 0
  const total = subtotal + shipping

  if (submitted) {
    return (
      <div className="mx-auto flex max-w-xl flex-col items-center justify-center px-6 py-32 text-center">
        <h1 className="font-serif text-3xl text-foreground">Thank You</h1>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          Your order has been placed successfully. We will send you a
          confirmation email shortly.
        </p>
        <Link
          href="/products"
          className="mt-8 inline-block bg-primary px-8 py-3.5 text-xs tracking-[0.2em] text-primary-foreground transition-colors hover:bg-primary/90"
        >
          CONTINUE SHOPPING
        </Link>
      </div>
    )
  }

  if (items.length === 0) {
    return (
      <div className="mx-auto flex max-w-xl flex-col items-center justify-center px-6 py-32 text-center">
        <h1 className="font-serif text-3xl text-foreground">Your Cart is Empty</h1>
        <p className="mt-4 text-sm text-muted-foreground">
          Add some items to your cart before checking out.
        </p>
        <Link
          href="/products"
          className="mt-8 inline-block bg-primary px-8 py-3.5 text-xs tracking-[0.2em] text-primary-foreground transition-colors hover:bg-primary/90"
        >
          BROWSE PRODUCTS
        </Link>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-6xl px-6 py-10 lg:py-16">
      <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
        {/* Left column - Forms */}
        <div className="flex-1">
          {/* Shipping Information */}
          <h2 className="font-serif text-2xl text-foreground">
            Shipping Information
          </h2>
          <div className="mt-8 flex flex-col gap-6">
            <div className="flex flex-col gap-6 sm:flex-row">
              <FormField label="FIRST NAME" placeholder="Jane" className="flex-1" />
              <FormField label="LAST NAME" placeholder="Doe" className="flex-1" />
            </div>
            <FormField label="EMAIL ADDRESS" placeholder="jane@example.com" type="email" />
            <FormField label="SHIPPING ADDRESS" placeholder="123 Patisserie Lane" />
            <div className="flex flex-col gap-6 sm:flex-row">
              <FormField label="CITY" placeholder="Paris" className="flex-1" />
              <FormField label="POSTAL CODE" placeholder="75001" className="flex-1" />
            </div>
          </div>

          {/* Payment Details */}
          <h2 className="mt-12 font-serif text-2xl text-foreground">
            Payment Details
          </h2>
          <div className="mt-8 flex flex-col gap-6">
            <FormField label="CARD NUMBER" placeholder="0000 0000 0000 0000" />
            <div className="flex flex-col gap-6 sm:flex-row">
              <FormField label="EXPIRY DATE" placeholder="MM/YY" className="flex-1" />
              <FormField
                label="SECURITY CODE (CVV)"
                placeholder="123"
                className="flex-1"
              />
            </div>
          </div>
        </div>

        {/* Right column - Order Summary */}
        <div className="lg:w-96">
          <div className="sticky top-28 rounded-sm bg-secondary/50 p-8">
            <h2 className="font-serif text-xl text-foreground">Order Summary</h2>

            <div className="mt-6 flex flex-col gap-6">
              {items.map((item) => (
                <OrderItemRow
                  key={item.id}
                  name={item.name}
                  image={item.image}
                  quantity={item.quantity}
                  price={item.price * item.quantity}
                />
              ))}
            </div>

            <div className="mt-6 border-t border-border pt-6">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="text-foreground">${subtotal.toFixed(2)}</span>
              </div>
              <div className="mt-2 flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Shipping</span>
                <span className="text-foreground">${shipping.toFixed(2)}</span>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <span className="font-serif text-lg text-foreground">Total</span>
                <span className="font-serif text-lg text-foreground">
                  ${total.toFixed(2)}
                </span>
              </div>
            </div>

            <button
              onClick={() => setSubmitted(true)}
              className="mt-6 w-full bg-primary py-3.5 text-xs tracking-[0.2em] text-primary-foreground transition-colors hover:bg-primary/90"
            >
              COMPLETE PURCHASE
            </button>

            <p className="mt-4 text-center text-[10px] tracking-[0.15em] text-muted-foreground">
              SECURE TRANSACTION POWERED BY SWEETERA
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
