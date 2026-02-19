'use client'

import { useState } from 'react'

export function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail('')
    }
  }

  return (
    <section className="bg-secondary">
      <div className="mx-auto max-w-2xl px-6 py-20 text-center lg:py-28">
        <p className="mb-3 text-xs tracking-[0.3em] text-muted-foreground uppercase">
          Stay Connected
        </p>
        <h2 className="font-serif text-3xl text-foreground sm:text-4xl text-balance">
          Join Our Mailing List
        </h2>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-foreground/80">
          Be the first to hear about seasonal specials, new creations, and
          exclusive offers from Sweetera.
        </p>
        {submitted ? (
          <p className="mt-8 text-sm text-muted-foreground">
            Thank you for subscribing. We&apos;ll be in touch soon.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="flex-1 border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-ring focus:outline-none"
              aria-label="Email address"
            />
            <button
              type="submit"
              className="bg-primary px-8 py-3 text-xs tracking-[0.2em] text-primary-foreground transition-colors hover:bg-primary/90"
            >
              SUBSCRIBE
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
