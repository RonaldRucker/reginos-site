import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-foreground text-background" style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}>
      <div className="h-[3px] bg-primary" />

      <div className="max-w-6xl mx-auto px-6 lg:px-8 pt-16 pb-10">

        {/* Logo + tagline */}
        <div className="text-center mb-12 pb-12 border-b border-background/10">
          <Image
            src="/images/logo.png"
            alt="Regino's Italian Restaurant"
            width={240}
            height={84}
            className="h-16 w-auto mx-auto mb-4"
          />
          <p className="text-background/50 text-xs tracking-[0.3em] uppercase">
            Authentic Italian Since 1947
          </p>
        </div>

        {/* Two columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-12">

          {/* Hours */}
          <div>
            <p className="text-primary text-xs tracking-[0.25em] uppercase font-medium mb-5">Hours</p>
            <div className="space-y-2 text-sm text-background/65">
              {[
                { days: "Mon, Wed – Thu", hours: "11am – 9:30pm" },
                { days: "Fri – Sat",      hours: "11am – 10:30pm" },
                { days: "Sunday",         hours: "12pm – 9:30pm" },
                { days: "Tuesday",        hours: "Closed" },
              ].map(({ days, hours }) => (
                <div key={days} className="flex justify-between gap-4">
                  <span>{days}</span>
                  <span className={hours === "Closed" ? "text-background/35" : "text-background/90"}>{hours}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Visit */}
          <div>
            <p className="text-primary text-xs tracking-[0.25em] uppercase font-medium mb-5">Visit Us</p>
            <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-background/65">
              <a
                href="https://maps.google.com/?q=3816+E+Little+Creek+Rd+Norfolk+VA+23518"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-background transition-colors leading-relaxed"
              >
                3816 E Little Creek Rd, Norfolk, VA 23518
              </a>
              <a href="tel:7575884300" className="hover:text-background transition-colors">
                (757) 588-4300
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-background/10 pt-8 text-center text-background/35 text-xs tracking-wide">
          <p>&copy; {new Date().getFullYear()} Regino&apos;s Italian Restaurant &middot; All rights reserved</p>
        </div>

      </div>
    </footer>
  )
}
