"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X } from "lucide-react"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/drinks", label: "Drinks" },
  { href: "/catering", label: "Catering" },
  // { href: "/history", label: "Our Story" },
]

export function Navigation() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-foreground border-b border-background/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top bar */}
        <div className="flex items-center justify-between h-20">
          <Link href="/" onClick={() => setOpen(false)} className="flex flex-col items-start">
            <Image src="/images/logo-text.png" alt="Regino's" width={140} height={28} className="h-7 w-auto" style={{ width: 'auto' }} priority />
            <span className="text-[10px] tracking-[0.2em] text-white/50 uppercase -mt-0.5">Italian Restaurant</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm tracking-wide uppercase text-white/75 hover:text-white transition-colors">
                {link.label}
              </Link>
            ))}
          </nav>

          <Link href="/menu" className="hidden md:inline-flex items-center bg-primary text-primary-foreground text-sm font-medium px-4 py-2 rounded-md hover:bg-primary/90 transition-colors">
            View Menu
          </Link>

          {/* Hamburger button */}
          <button
            type="button"
            className="md:hidden p-2 text-white"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu — lives inside the header so it inherits z-50 */}
        {open && (
          <nav className="md:hidden border-t border-white/10 py-4 flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm tracking-wide uppercase text-white/75 py-4 border-b border-white/10 last:border-0"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/menu"
              className="mt-4 flex items-center justify-center bg-primary text-primary-foreground text-sm font-medium px-4 py-3 rounded-md"
              onClick={() => setOpen(false)}
            >
              View Menu
            </Link>
          </nav>
        )}

      </div>
    </header>
  )
}
