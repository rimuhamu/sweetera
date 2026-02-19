'use client'

import { Instagram, Facebook, Youtube, Twitter } from 'lucide-react'
import Image from 'next/image'

const socialPosts = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=400&fit=crop&q=80',
    alt: 'Freshly baked artisan bread',
    link: 'https://instagram.com/sweetera'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&h=400&fit=crop&q=80',
    alt: 'Exquisite dessert pastry',
    link: 'https://instagram.com/sweetera'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1558326567-98ae2405596b?w=400&h=400&fit=crop&q=80',
    alt: 'Box of assorted macarons',
    link: 'https://instagram.com/sweetera'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1517433670267-08bbd4be890f?w=400&h=400&fit=crop&q=80',
    alt: 'Cozy bakery interior',
    link: 'https://instagram.com/sweetera'
  }
]

export function SocialSection() {
  return (
    <section className="py-20 md:py-28 border-t border-border">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="max-w-md text-center md:text-left">
            <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
              Follow Our Journey
            </p>
            <h2 className="mt-4 font-serif text-3xl text-foreground md:text-4xl">
              Sweetera on Socials
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              Stay updated with our latest creations, seasonal specials, and a 
              behind-the-scenes look at our artisan bakery process. Join our community of dessert lovers.
            </p>
            <div className="mt-8 flex items-center justify-center gap-6 md:justify-start">
              <a href="#" className="text-muted-foreground transition-colors hover:text-foreground" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground transition-colors hover:text-foreground" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground transition-colors hover:text-foreground" aria-label="Youtube">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground transition-colors hover:text-foreground" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-4">
            {socialPosts.map((post) => (
              <a 
                key={post.id} 
                href={post.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative h-32 w-32 overflow-hidden bg-secondary md:h-40 md:w-40 lg:h-48 lg:w-48"
              >
                <Image
                  src={post.image}
                  alt={post.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-foreground/20 opacity-0 transition-opacity group-hover:opacity-100">
                  <Instagram className="h-6 w-6 text-primary-foreground" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
