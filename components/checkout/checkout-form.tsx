'use client'

interface FormFieldProps {
  label: string
  id: string
  type?: string
  placeholder?: string
  required?: boolean
}

function FormField({
  label,
  id,
  type = 'text',
  placeholder = '',
  required = true,
}: FormFieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={id}
        className="text-xs tracking-[0.15em] text-foreground/80 uppercase"
      >
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        required={required}
        className="border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-ring focus:outline-none"
      />
    </div>
  )
}

export function ShippingForm() {
  return (
    <div>
      <h2 className="font-serif text-2xl text-foreground sm:text-3xl">
        Shipping Information
      </h2>
      <div className="mt-8 flex flex-col gap-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <FormField label="First Name" id="firstName" placeholder="Jane" />
          <FormField label="Last Name" id="lastName" placeholder="Doe" />
        </div>
        <FormField
          label="Email Address"
          id="email"
          type="email"
          placeholder="jane@example.com"
        />
        <FormField
          label="Shipping Address"
          id="address"
          placeholder="123 Patisserie Lane"
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <FormField label="City" id="city" placeholder="Paris" />
          <FormField label="Postal Code" id="postalCode" placeholder="75001" />
        </div>
      </div>
    </div>
  )
}

export function PaymentForm() {
  return (
    <div>
      <h2 className="font-serif text-2xl text-foreground sm:text-3xl">
        Payment Details
      </h2>
      <div className="mt-8 flex flex-col gap-6">
        <FormField
          label="Card Number"
          id="cardNumber"
          placeholder="0000 0000 0000 0000"
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <FormField label="Expiry Date" id="expiry" placeholder="MM/YY" />
          <FormField
            label="Security Code (CVV)"
            id="cvv"
            placeholder="123"
          />
        </div>
      </div>
    </div>
  )
}
