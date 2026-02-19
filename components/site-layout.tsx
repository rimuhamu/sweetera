'use client'

import type { ReactNode } from 'react'
import { Header } from './header'
import { SiteFooter } from './site-footer'
import { CartDrawer } from './cart-drawer'

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <SiteFooter />
      <CartDrawer />
    </div>
  )
}
