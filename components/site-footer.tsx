import Link from 'next/link'

const footerLinks = [
  { href: '/shipping', label: 'SHIPPING' },
  { href: '/terms', label: 'TERMS' },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 sm:flex-row lg:px-12">
        <p className="text-xs tracking-[0.1em] text-muted-foreground">
          &copy; {new Date().getFullYear()} SWEETERA PATISSERIE
        </p>
        <nav aria-label="Footer navigation">
          <ul className="flex items-center gap-6">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-xs tracking-[0.1em] text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  )
}
