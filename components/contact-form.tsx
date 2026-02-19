'use client'

import { useState } from 'react'

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="text-center">
          <h3 className="font-serif text-xl text-foreground">Message Sent</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Thank you for reaching out. We will get back to you shortly.
          </p>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="flex flex-col gap-6 sm:flex-row">
        <div className="flex-1">
          <label className="mb-2 block text-xs tracking-[0.15em] text-muted-foreground">
            NAME
          </label>
          <input
            type="text"
            placeholder="Your name"
            required
            className="w-full border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-ring"
          />
        </div>
        <div className="flex-1">
          <label className="mb-2 block text-xs tracking-[0.15em] text-muted-foreground">
            EMAIL
          </label>
          <input
            type="email"
            placeholder="your@email.com"
            required
            className="w-full border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-ring"
          />
        </div>
      </div>
      <div>
        <label className="mb-2 block text-xs tracking-[0.15em] text-muted-foreground">
          SUBJECT
        </label>
        <input
          type="text"
          placeholder="How can we help?"
          className="w-full border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-ring"
        />
      </div>
      <div>
        <label className="mb-2 block text-xs tracking-[0.15em] text-muted-foreground">
          MESSAGE
        </label>
        <textarea
          rows={5}
          placeholder="Tell us more..."
          required
          className="w-full resize-none border border-border bg-background px-4 py-3 text-sm leading-relaxed text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-ring"
        />
      </div>
      <button
        type="submit"
        className="self-start bg-primary px-10 py-3.5 text-xs tracking-[0.2em] text-primary-foreground transition-colors hover:bg-primary/90"
      >
        SEND MESSAGE
      </button>
    </form>
  )
}
