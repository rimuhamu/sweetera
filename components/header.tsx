'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { useCart } from '@/lib/cart-context'

const navLinks = [
  { href: '/', label: 'HOME' },
  { href: '/products', label: 'PRODUCTS' },
  { href: '/#socials', label: 'SOCIALS' },
]

export function Header() {
  const pathname = usePathname()
  const { totalItems, setIsCartOpen } = useCart()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50" style={{ backgroundColor: '#4A2C1A' }}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Mobile menu button */}
        <button
          className="md:hidden text-[#F5E6D3] hover:text-white transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        {/* Desktop nav - left side empty for centering */}
        <nav className="hidden flex-1 md:block" aria-label="Main navigation">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-xs tracking-[0.2em] transition-colors ${
                    pathname === link.href
                      ? 'text-white font-medium'
                      : 'text-[#D4A574] hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Center logo */}
        <Link href="/" className="flex-shrink-0" aria-label="Sweetera home">
          <Image
            src="/images/logo.jpg"
            alt="Sweetera Logo"
            width={36}
            height={36}
            className="rounded-sm"
          />
        </Link>

        {/* Right side icons */}
        <div className="flex flex-1 items-center justify-end gap-4">
          <button
            aria-label={`Shopping cart with ${totalItems} items`}
            className="relative text-[#D4A574] transition-colors hover:text-white"
            onClick={() => setIsCartOpen(true)}
          >
            <ShoppingBag className="h-4 w-4" />
            {totalItems > 0 && (
              <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-[#D4A574] text-[10px] font-medium text-[#4A2C1A]">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <nav className="border-t border-[#6B3D22] px-6 py-4 md:hidden" aria-label="Mobile navigation">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-xs tracking-[0.2em] transition-colors ${
                    pathname === link.href
                      ? 'text-white font-medium'
                      : 'text-[#D4A574] hover:text-white'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
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
