'use client'

import { Minus, Plus } from 'lucide-react'

interface QuantitySelectorProps {
  value: number
  onChange: (value: number) => void
}

export function QuantitySelector({ value, onChange }: QuantitySelectorProps) {
  return (
    <div className="inline-flex items-center border border-border">
      <button
        onClick={() => onChange(Math.max(1, value - 1))}
        disabled={value <= 1}
        className="flex size-11 items-center justify-center text-foreground/60 transition-colors hover:text-foreground disabled:opacity-40"
        aria-label="Decrease quantity"
      >
        <Minus className="size-3.5" />
      </button>
      <span className="flex w-10 items-center justify-center text-sm text-foreground" aria-live="polite">
        {value}
      </span>
      <button
        onClick={() => onChange(value + 1)}
        className="flex size-11 items-center justify-center text-foreground/60 transition-colors hover:text-foreground"
        aria-label="Increase quantity"
      >
        <Plus className="size-3.5" />
      </button>
    </div>
  )
}
