import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, UtensilsCrossed, Wine, PartyPopper } from "lucide-react"

const galleryImages = [
  { src: "/images/owners.jpg", alt: "Father and son" },
  { src: "/images/gallery-2.jpg", alt: "Restaurant interior" },
  { src: "/images/gallery-3.jpg", alt: "Tiramisu dessert" },
  { src: "/images/gallery-4.jpg", alt: "Chef cooking" },
  { src: "/images/gallery-5.jpg", alt: "Wine selection" },
  { src: "/images/gallery-6.jpg", alt: "Fresh caprese salad" },
]

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[56vw] min-h-[500px] max-h-screen">
        <div className="absolute inset-0">
          <Image
            src="/images/spagetti_cover.jpg"
            alt="Regino's Italian Restaurant"
            fill
            className="object-cover object-[90%_70%]"
            priority
          />
          <div className="absolute inset-0 bg-foreground/50" />
        </div>
        <div className="relative h-full flex items-center justify-center text-center px-4 pt-20">
          <div className="max-w-4xl flex flex-col items-center">
            <p className="text-background/80 tracking-[0.3em] uppercase text-sm mb-6">
              Authentic Italian Since 1947
            </p>
            <Image
              src="/images/logo.png"
              alt="Regino's Italian Restaurant"
              width={600}
              height={210}
              className="w-[280px] sm:w-[400px] md:w-[500px] lg:w-[600px] h-auto mb-8 drop-shadow-2xl"
              priority
            />
            <p className="text-background/90 text-lg md:text-xl mb-10 max-w-xl mx-auto leading-relaxed">
              Four generations of passion, tradition, and authentic Italian flavors.
              Where every meal is a celebration of family.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-10">
              <Link href="/menu">View Our Menu</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary tracking-[0.2em] uppercase text-sm mb-3">Welcome to Our Table</p>
              <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6 text-balance">
                80 Years of Italian Excellence
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Since 1947, Regino&apos;s Italian Restaurant has been the heart of Little Italy. What started as
                a small family kitchen has grown into a beloved institution, serving generations of
                guests with the same recipes our Nonna brought from Naples.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Every dish tells a story. Every meal creates a memory. We invite you to become part
                of our extended family and experience the warmth, flavors, and traditions that have
                made us a cornerstone of the community for eight decades.
              </p>
              <Button asChild variant="outline" className="group">
                <Link href="/history">
                  Discover Our Story
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-[3/2] relative rounded-lg overflow-hidden">
                <Image
                  src="/images/owners.jpg"
                  alt="Father and son"
                  fill
                  className="object-cover object-center"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-lg shadow-lg">
                <p className="font-serif text-4xl">80</p>
                <p className="text-sm tracking-wide uppercase">Years of Tradition</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-primary tracking-[0.2em] uppercase text-sm mb-3">Explore</p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground">What We Offer</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group p-8 text-center hover:shadow-lg transition-shadow bg-card">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                <UtensilsCrossed className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-serif text-2xl mb-3 text-card-foreground">Our Menu</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                From classic antipasti to our legendary osso buco, experience authentic Italian cuisine made with love.
              </p>
              <Button asChild variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Link href="/menu">View Menu</Link>
              </Button>
            </Card>

            <Card className="group p-8 text-center hover:shadow-lg transition-shadow bg-card">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                <Wine className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-serif text-2xl mb-3 text-card-foreground">Wine & Drinks</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Curated selection of Italian wines, craft cocktails, and refreshing beverages to complement your meal.
              </p>
              <Button asChild variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Link href="/drinks">View Drinks</Link>
              </Button>
            </Card>

            <Card className="group p-8 text-center hover:shadow-lg transition-shadow bg-card">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                <PartyPopper className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-serif text-2xl mb-3 text-card-foreground">Catering</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Bring Regino&apos;s to your special events. Full-service catering for weddings, parties, and corporate events.
              </p>
              <Button asChild variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Link href="/catering">Learn More</Link>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-primary tracking-[0.2em] uppercase text-sm mb-3">Gallery</p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">A Taste of Regino&apos;s</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From our kitchen to your table, every detail is crafted with care and tradition.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className={`relative overflow-hidden rounded-lg ${index === 0 || index === 5 ? 'aspect-square' : 'aspect-[4/3]'
                  } group`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="font-serif text-2xl md:text-3xl leading-relaxed mb-8 italic">
            &ldquo;For three generations, my family has celebrated every milestone at Regino&apos;s.
            The food, the atmosphere, the people - it&apos;s like coming home. This isn&apos;t just a restaurant,
            it&apos;s where memories are made.&rdquo;
          </p>
          <p className="text-primary-foreground/80">
            &mdash; Maria S., Guest Since 1978
          </p>
        </div>
      </section>

      {/* Visit Us CTA */}
      <section className="py-24 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-primary tracking-[0.2em] uppercase text-sm mb-3">Visit Us</p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">Walk-Ins Welcome</h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            No reservations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Get Directions
            </Button>
            <Button size="lg" variant="outline">
              Call (757) 588-4300
            </Button>
          </div>
          <div className="mt-8 inline-grid grid-cols-2 gap-x-10 gap-y-2 text-sm text-left">
            {[
              { day: "Monday",    hours: "11:00 am – 9:30 pm" },
              { day: "Tuesday",   hours: "Closed" },
              { day: "Wednesday", hours: "11:00 am – 9:30 pm" },
              { day: "Thursday",  hours: "11:00 am – 9:30 pm" },
              { day: "Friday",    hours: "11:00 am – 10:30 pm" },
              { day: "Saturday",  hours: "11:00 am – 10:30 pm" },
              { day: "Sunday",    hours: "12:00 pm – 9:30 pm" },
            ].map(({ day, hours }) => (
              <React.Fragment key={day}>
                <span className="text-muted-foreground">{day}</span>
                <span className={hours === "Closed" ? "text-foreground font-bold" : "text-foreground font-medium"}>{hours}</span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
