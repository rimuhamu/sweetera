import type { Metadata } from 'next'
import { ContactForm } from '@/components/contact-form'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact | Sweetera Patisserie',
  description:
    'Get in touch with Sweetera Patisserie. Visit us, call, or send a message.',
}

const contactInfo = [
  {
    icon: MapPin,
    label: 'Address',
    value: '24 Rue de la Paix, 75002 Paris, France',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+33 1 42 00 12 34',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@sweetera.fr',
  },
  {
    icon: Clock,
    label: 'Hours',
    value: 'Tue - Sun: 7:00 AM - 7:00 PM',
  },
]

export default function ContactPage() {
  return (
    <div>
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-12 lg:py-24">
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs tracking-[0.3em] text-muted-foreground uppercase">
            Get in Touch
          </p>
          <h1 className="font-serif text-3xl text-foreground sm:text-4xl md:text-5xl text-balance">
            We&apos;d Love to Hear From You
          </h1>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[2fr_3fr] lg:gap-20">
          {/* Contact info */}
          <div className="flex flex-col gap-8">
            {contactInfo.map((info) => (
              <div key={info.label} className="flex items-start gap-4">
                <info.icon className="mt-0.5 size-5 shrink-0 text-muted-foreground" />
                <div>
                  <h3 className="text-xs tracking-[0.15em] text-muted-foreground uppercase">
                    {info.label}
                  </h3>
                  <p className="mt-1 text-sm text-foreground">{info.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact form */}
          <ContactForm />
        </div>
      </section>
    </div>
  )
}
