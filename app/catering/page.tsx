import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Users, Building2, Heart, Briefcase } from "lucide-react"
import cateringData from "@/data/catering.json"

export const metadata: Metadata = {
  title: "Catering | Regino's Italian Restaurant",
  description: "Bring authentic Italian cuisine to your special events. Full-service catering for weddings, corporate events, and private parties.",
}

const eventTypes = [
  {
    icon: Heart,
    title: "Weddings",
    description: "Create unforgettable memories with authentic Italian cuisine on your special day. From intimate ceremonies to grand celebrations.",
  },
  {
    icon: Briefcase,
    title: "Corporate Events",
    description: "Impress clients and colleagues with professional catering for meetings, conferences, and company celebrations.",
  },
  {
    icon: Users,
    title: "Private Parties",
    description: "Birthday celebrations, anniversaries, graduations, and family reunions. We bring the warmth of Regino&apos;s to you.",
  },
  {
    icon: Building2,
    title: "On-Site Events",
    description: "Host your event in our private dining room for an intimate gathering of up to 40 guests with full restaurant service.",
  },
]

export default function CateringPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px]">
        <div className="absolute inset-0">
          <Image
            src="/images/catering-hero.jpg"
            alt="Catering Services"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-foreground/60" />
        </div>
        <div className="relative h-full flex items-center justify-center text-center px-4 pt-20">
          <div>
            <p className="text-background/90 tracking-[0.3em] uppercase text-sm mb-4">
              Full Service Catering
            </p>
            <h1 className="font-serif text-5xl md:text-6xl text-background mb-4">
              Your Event, Our Passion
            </h1>
            <p className="text-background/90 max-w-xl mx-auto">
              Bring the authentic flavors of Regino&apos;s to your special occasions. 
              From intimate gatherings to grand celebrations.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-primary tracking-[0.2em] uppercase text-sm mb-3">Since 1946</p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6 text-balance">
            Bringing Generations of Tradition to Your Table
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            For 80 years, our family has been creating memorable dining experiences. Now, let us bring 
            that same warmth, quality, and authentic Italian hospitality directly to your event. Whether 
            it&apos;s an intimate dinner party or a grand wedding celebration, our experienced catering team 
            will work closely with you to create a customized menu that exceeds your expectations.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Every dish is prepared with the same care and attention as if you were dining at our restaurant. 
            Fresh ingredients, house-made pastas, and recipes passed down through four generations.
          </p>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-20 px-4 bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-primary tracking-[0.2em] uppercase text-sm mb-3">We Cater To</p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground">Every Occasion</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {eventTypes.map((event, index) => (
              <Card key={index} className="p-6 text-center bg-card">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <event.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-serif text-xl mb-2 text-card-foreground">{event.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{event.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Catering Menu */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-primary tracking-[0.2em] uppercase text-sm mb-3">What We Offer</p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Catering Menu</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Serving sizes are approximate. Contact us to build a custom menu for your event.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-border">
                  <th className="text-left py-3 pr-6 font-sans text-xs tracking-[0.15em] uppercase text-muted-foreground font-medium">Item</th>
                  <th className="text-center py-3 px-4 font-sans text-xs tracking-[0.15em] uppercase text-muted-foreground font-medium whitespace-nowrap">Small</th>
                  <th className="text-center py-3 px-4 font-sans text-xs tracking-[0.15em] uppercase text-muted-foreground font-medium whitespace-nowrap">Large</th>
                  <th className="text-left py-3 pl-6 font-sans text-xs tracking-[0.15em] uppercase text-muted-foreground font-medium">Notes</th>
                </tr>
              </thead>
              <tbody>
                {cateringData.map((row, i) => (
                  <tr key={i} className="border-b border-border">
                    <td className="py-5 pr-6 font-serif text-lg text-foreground">{row.item}</td>
                    <td className="py-5 px-4 text-center text-muted-foreground text-sm">
                      {"smallServings" in row ? row.smallServings : "—"}
                    </td>
                    <td className="py-5 px-4 text-center text-muted-foreground text-sm">
                      {"largeServings" in row ? row.largeServings : "—"}
                    </td>
                    <td className="py-5 pl-6 text-muted-foreground text-sm">
                      {"notes" in row ? row.notes : ""}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 px-4 bg-muted">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-primary tracking-[0.2em] uppercase text-sm mb-3">Enhance Your Event</p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground">Additional Services</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            <Card className="p-6 bg-card">
              <h3 className="font-serif text-xl mb-2 text-card-foreground">Bar Service</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Full bar packages available including Italian wines, signature cocktails, and professional bartenders. 
                Beer and wine packages start at $25/person. Premium open bar from $45/person.
              </p>
            </Card>
            <Card className="p-6 bg-card">
              <h3 className="font-serif text-xl mb-2 text-card-foreground">Service Staff</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Professional servers, bartenders, and event coordinators available to ensure seamless service. 
                Staffing rates vary based on event size and duration.
              </p>
            </Card>
            <Card className="p-6 bg-card">
              <h3 className="font-serif text-xl mb-2 text-card-foreground">Rentals</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Linens, china, glassware, and flatware available for rent. We can also coordinate with preferred 
                vendors for tents, tables, and chairs.
              </p>
            </Card>
            <Card className="p-6 bg-card">
              <h3 className="font-serif text-xl mb-2 text-card-foreground">Dietary Accommodations</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Vegetarian, vegan, gluten-free, and allergen-friendly options available. We&apos;re committed to ensuring 
                every guest can enjoy our cuisine.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-primary text-primary-foreground">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-6">Ready to Plan Your Event?</h2>
          <p className="text-primary-foreground/90 mb-8 leading-relaxed">
            Our catering team is here to help make your event unforgettable. Contact us to discuss 
            your vision, request a custom quote, or schedule a tasting.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-background text-foreground hover:bg-background/90">
              Request a Quote
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Call (212) 555-1946
            </Button>
          </div>
          <p className="text-sm text-primary-foreground/70 mt-6">
            We recommend booking at least 4 weeks in advance for larger events.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
