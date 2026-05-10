import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check, Users, Building2, Heart, Briefcase } from "lucide-react"

export const metadata: Metadata = {
  title: "Catering | Regino's Italian Restaurant",
  description: "Bring authentic Italian cuisine to your special events. Full-service catering for weddings, corporate events, and private parties.",
}

const cateringPackages = [
  {
    name: "Antipasto Package",
    price: "From $25/person",
    description: "Perfect for cocktail parties and receptions",
    includes: [
      "Assorted bruschetta platter",
      "Imported Italian meats and cheeses",
      "Marinated vegetables",
      "Olive and artichoke selection",
      "Fresh bread and focaccia",
      "Serving utensils included",
    ],
    minGuests: 20,
  },
  {
    name: "Family Style Dinner",
    price: "From $55/person",
    description: "Our most popular package - classic Italian hospitality",
    includes: [
      "Choice of 2 antipasti",
      "House salad",
      "Choice of 2 pasta dishes",
      "Choice of 1 main course",
      "Seasonal vegetables",
      "Fresh bread service",
      "Tiramisu or Panna Cotta",
    ],
    minGuests: 30,
    featured: true,
  },
  {
    name: "Grand Celebration",
    price: "From $85/person",
    description: "Full service for your most important occasions",
    includes: [
      "Passed hors d&apos;oeuvres (choice of 4)",
      "Antipasto display station",
      "Soup or salad course",
      "Choice of 3 pasta dishes",
      "Choice of 2 main courses",
      "Vegetable sides",
      "Dessert station with 3 selections",
      "Coffee and tea service",
    ],
    minGuests: 50,
  },
]

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

      {/* Catering Packages */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-primary tracking-[0.2em] uppercase text-sm mb-3">Our Packages</p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Catering Menus</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose from our signature packages or work with our chef to create a custom menu for your event.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {cateringPackages.map((pkg, index) => (
              <Card 
                key={index} 
                className={`p-8 flex flex-col ${pkg.featured ? 'ring-2 ring-primary bg-card' : 'bg-card'}`}
              >
                {pkg.featured && (
                  <p className="text-xs font-medium text-primary tracking-wide uppercase mb-4">
                    Most Popular
                  </p>
                )}
                <h3 className="font-serif text-2xl text-card-foreground mb-2">{pkg.name}</h3>
                <p className="text-2xl font-serif text-primary mb-2">{pkg.price}</p>
                <p className="text-muted-foreground text-sm mb-6">{pkg.description}</p>
                
                <div className="flex-1">
                  <p className="text-sm font-medium text-card-foreground mb-3">Includes:</p>
                  <ul className="space-y-2">
                    {pkg.includes.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="text-xs text-muted-foreground mt-6 pt-4 border-t border-border">
                  Minimum {pkg.minGuests} guests
                </p>
              </Card>
            ))}
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
