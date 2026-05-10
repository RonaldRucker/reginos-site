import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Clock, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="mb-6">
              <Image
                src="/images/logo.png"
                alt="Regino's Italian Restaurant"
                width={180}
                height={63}
                className="h-16 w-auto"
              />
            </div>
            <p className="text-background/70 text-sm leading-relaxed">
              Four generations of authentic Italian cuisine. Serving our community with love and tradition since 1946.
            </p>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-serif text-lg mb-4">Hours</h3>
            <div className="flex items-start gap-3 text-background/70 text-sm">
              <Clock className="h-4 w-4 mt-0.5 shrink-0" />
              <div className="space-y-1">
                <p>Mon, Wed–Thu: 11am – 9:30pm</p>
                <p>Fri–Sat: 11am – 10:30pm</p>
                <p>Sun: 12pm – 9:30pm</p>
                <p>Tue: Closed</p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-lg mb-4">Contact</h3>
            <div className="space-y-3 text-background/70 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <p>3816 E Little Creek Rd <br />Norfolk, VA 23518</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0" />
                <p>(757) 588-4300</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0" />
                <p>info@reginositalian.com</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg mb-4">Quick Links</h3>
            <div className="space-y-2 text-sm">
              <Link href="/menu" className="block text-background/70 hover:text-background transition-colors">
                Menu
              </Link>
              <Link href="/drinks" className="block text-background/70 hover:text-background transition-colors">
                Drinks
              </Link>
              <Link href="/catering" className="block text-background/70 hover:text-background transition-colors">
                Catering
              </Link>
              <Link href="/history" className="block text-background/70 hover:text-background transition-colors">
                Our Story
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8 text-center text-background/50 text-sm">
          <p>&copy; {new Date().getFullYear()} Regino&apos;s Italian Restaurant. All rights reserved.</p>
          <p className="mt-2">Proudly serving authentic Italian cuisine since 1947</p>
        </div>
      </div>
    </footer>
  )
}
