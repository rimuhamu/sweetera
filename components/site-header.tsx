'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { cn } from '@/lib/utils'
import { useCart } from '@/lib/cart-context'

const navLinks = [
  { href: '/', label: 'HOME' },
  { href: '/products', label: 'PRODUCTS' },
  { href: '/about', label: 'ABOUT' },
  { href: '/contact', label: 'CONTACT' },
]

export function SiteHeader() {
  const pathname = usePathname()
  const { totalItems, setIsCartOpen } = useCart()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-12">
        {/* Mobile menu button */}
        <button
          className="lg:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>

        {/* Logo */}
        <Link href="/" className="absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0">
          <Image
            src="/images/logo.jpg"
            alt="Sweetera Logo"
            width={36}
            height={36}
            className="rounded-sm"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex lg:flex-1 lg:justify-center" aria-label="Main navigation">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    'text-xs tracking-[0.2em] transition-colors hover:text-foreground',
                    pathname === link.href
                      ? 'text-foreground font-medium'
                      : 'text-muted-foreground'
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right icons */}
        <div className="flex items-center gap-4">
          <button aria-label="Search" className="text-foreground/70 transition-colors hover:text-foreground">
            <Search className="size-4" />
          </button>
          <button
            aria-label="Shopping cart"
            className="relative text-foreground/70 transition-colors hover:text-foreground"
            onClick={() => setIsCartOpen(true)}
          >
            <ShoppingBag className="size-4" />
            {totalItems > 0 && (
              <span className="absolute -right-1.5 -top-1.5 flex size-4 items-center justify-center rounded-full bg-accent text-[10px] font-medium text-foreground">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile nav overlay */}
      {mobileOpen && (
        <nav className="border-t border-border bg-background px-6 py-6 lg:hidden" aria-label="Mobile navigation">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    'block text-sm tracking-[0.15em] transition-colors',
                    pathname === link.href
                      ? 'text-foreground font-medium'
                      : 'text-muted-foreground'
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
