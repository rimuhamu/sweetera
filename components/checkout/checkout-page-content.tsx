'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ShippingForm, PaymentForm } from './checkout-form'
import { OrderSummary } from './order-summary'
import { CartDrawer } from '@/components/cart-drawer'

export function CheckoutPageContent() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Simple header with logo only */}
      <header className="border-b border-border bg-background">
        <div className="mx-auto flex max-w-7xl items-center justify-center px-6 py-4">
          <Link href="/">
            <Image
              src="/images/logo.jpg"
              alt="Sweetera Logo"
              width={36}
              height={36}
              className="rounded-sm"
            />
          </Link>
        </div>
      </header>

      {/* Checkout content */}
      <main className="flex-1">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-10 lg:grid-cols-[1fr_380px] lg:gap-16 lg:px-12 lg:py-16"
        >
          {/* Left: forms */}
          <div className="flex flex-col gap-12">
            <ShippingForm />
            <PaymentForm />
          </div>

          {/* Right: order summary */}
          <div className="lg:sticky lg:top-8 lg:self-start">
            <OrderSummary />
          </div>
        </form>
      </main>

      <CartDrawer />
    </div>
  )
}
