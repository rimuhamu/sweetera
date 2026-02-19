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
      <div className="flex items-center justify-center rounded-sm bg-secondary p-12">
        <div className="text-center">
          <h3 className="font-serif text-2xl text-foreground">Thank You</h3>
          <p className="mt-3 text-sm text-muted-foreground">
            We&apos;ve received your message and will get back to you shortly.
          </p>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="contact-name" className="text-xs tracking-[0.15em] text-foreground/80 uppercase">
            Name
          </label>
          <input
            id="contact-name"
            type="text"
            required
            placeholder="Your name"
            className="border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-ring focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="contact-email" className="text-xs tracking-[0.15em] text-foreground/80 uppercase">
            Email
          </label>
          <input
            id="contact-email"
            type="email"
            required
            placeholder="your@email.com"
            className="border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-ring focus:outline-none"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="contact-subject" className="text-xs tracking-[0.15em] text-foreground/80 uppercase">
          Subject
        </label>
        <input
          id="contact-subject"
          type="text"
          required
          placeholder="How can we help?"
          className="border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-ring focus:outline-none"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="contact-message" className="text-xs tracking-[0.15em] text-foreground/80 uppercase">
          Message
        </label>
        <textarea
          id="contact-message"
          required
          rows={5}
          placeholder="Your message..."
          className="border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-ring focus:outline-none resize-none"
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
