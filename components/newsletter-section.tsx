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
    <section className="bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-xl px-6 text-center">
        <p className="text-xs tracking-[0.2em] text-muted-foreground">STAY CONNECTED</p>
        <h2 className="mt-4 font-serif text-3xl text-foreground md:text-4xl">
          Join Our Newsletter
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          Be the first to know about seasonal specials, new creations, and
          exclusive offers from our patisserie.
        </p>
        {submitted ? (
          <p className="mt-8 text-sm text-muted-foreground">
            Thank you for subscribing. Welcome to Sweetera.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-1 focus:ring-ring"
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
