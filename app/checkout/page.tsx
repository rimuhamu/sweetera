import type { Metadata } from 'next'
import { CheckoutContent } from '@/components/checkout-content'

export const metadata: Metadata = {
  title: 'Checkout | Sweetera Patisserie',
  description: 'Complete your order from Sweetera Patisserie.',
}

export default function CheckoutPage() {
  return <CheckoutContent />
}
