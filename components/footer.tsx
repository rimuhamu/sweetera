import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 sm:flex-row">
        <p className="text-xs tracking-[0.15em] text-muted-foreground">
          &copy; {new Date().getFullYear()} SWEETERA PATISSERIE
        </p>
        <nav aria-label="Footer navigation">
          <ul className="flex items-center gap-6">
            <li>
              <Link
                href="/sustainability"
                className="text-xs tracking-[0.15em] text-muted-foreground transition-colors hover:text-foreground"
              >
                SUSTAINABILITY
              </Link>
            </li>
            <li>
              <Link
                href="/shipping"
                className="text-xs tracking-[0.15em] text-muted-foreground transition-colors hover:text-foreground"
              >
                SHIPPING
              </Link>
            </li>
            <li>
              <Link
                href="/terms"
                className="text-xs tracking-[0.15em] text-muted-foreground transition-colors hover:text-foreground"
              >
                TERMS
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}
