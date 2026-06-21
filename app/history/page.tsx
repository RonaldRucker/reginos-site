import type { Metadata } from "next"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Our Story | Regino's Italian Restaurant",
  description: "80 years of authentic Italian cuisine. Discover the rich history of Regino's Italian Restaurant, from our humble beginnings to four generations of culinary tradition.",
}

const timeline = [
  {
    year: "1946",
    title: "A Dream Begins",
    description: "Giuseppe and Maria Rossi arrive in New York from Naples with little more than their grandmother&apos;s recipes and a dream. They open a small 12-seat trattoria in the heart of Little Italy, serving the same dishes Maria learned from her Nonna in the Campania region.",
  },
  {
    year: "1958",
    title: "Expanding the Family Table",
    description: "With the help of their eldest son, Antonio, the Rossis expand into the neighboring storefront, doubling their capacity. The restaurant becomes known for its legendary Sunday dinners, drawing Italian families from across the five boroughs.",
  },
  {
    year: "1972",
    title: "A New Generation Takes the Helm",
    description: "Antonio and his wife Elena officially take over operations. They introduce new dishes while preserving the classics that made Regino&apos;s famous. The restaurant earns its first major review from The New York Times, calling it &ldquo;a taste of the old country.&rdquo;",
  },
  {
    year: "1989",
    title: "The Private Dining Room",
    description: "The Rossi family purchases the building next door, adding a beautiful private dining room that quickly becomes the go-to venue for Little Italy&apos;s most important celebrations. Countless weddings, christenings, and anniversaries are celebrated within its walls.",
  },
  {
    year: "1996",
    title: "50 Years of Tradition",
    description: "Regino&apos;s celebrates its golden anniversary with a week-long festival featuring dishes from every decade of our history. The celebration draws over 2,000 guests, including many who had been dining with us since the very beginning.",
  },
  {
    year: "2008",
    title: "The Third Generation",
    description: "Marco Rossi, grandson of Giuseppe and Maria, returns from culinary training in Italy to join the family business. He brings modern techniques while maintaining deep respect for the traditional recipes that define our kitchen.",
  },
  {
    year: "2020",
    title: "Standing Strong Through Challenges",
    description: "Like many restaurants, we faced unprecedented challenges. But with the support of our incredible community and loyal customers, Regino&apos;s persevered. Our family meal program fed over 5,000 frontline workers during the pandemic.",
  },
  {
    year: "2026",
    title: "80 Years and Counting",
    description: "Today, the fourth generation is learning the family recipes, ensuring that Regino&apos;s will continue to serve our community for decades to come. What started as a small dream has become a beloved institution, but our mission remains the same: to welcome every guest as family.",
  },
]

const values = [
  {
    title: "Family First",
    description: "Every decision we make starts with one question: what would Nonna do? Our family values guide everything from how we source ingredients to how we treat our staff and guests.",
  },
  {
    title: "Authentic Recipes",
    description: "Many of our dishes are made from the exact recipes Maria brought from Naples in 1946. We don&apos;t chase trends&mdash;we honor tradition while allowing our cuisine to evolve naturally.",
  },
  {
    title: "Community Roots",
    description: "We&apos;ve been part of Little Italy&apos;s fabric for 80 years. We support local schools, sponsor community events, and believe that a restaurant should give back to its neighborhood.",
  },
  {
    title: "Quality Without Compromise",
    description: "We make our pasta fresh daily, source the finest imported ingredients, and never take shortcuts. Giuseppe always said, &ldquo;If you wouldn&apos;t serve it to your mother, don&apos;t serve it at all.&rdquo;",
  },
]

export default function HistoryPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[45vh] sm:h-[60vh] min-h-[280px] sm:min-h-[500px]">
        <div className="absolute inset-0">
          <Image
            src="/images/history-hero.jpg"
            alt="La Famiglia through the years"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-foreground/50" />
        </div>
        <div className="relative h-full flex items-center justify-center text-center px-4 pt-20">
          <div>
            <p className="text-background/90 tracking-[0.3em] uppercase text-sm mb-4">
              Est. 1946
            </p>
            <h1 className="font-serif text-5xl md:text-6xl text-background mb-4">
              Our Story
            </h1>
            <p className="text-background/90 max-w-xl mx-auto">
              Four generations of passion, tradition, and authentic Italian flavors. 
              Discover the history behind Little Italy&apos;s beloved family restaurant.
            </p>
          </div>
        </div>
      </section>

      {/* Founders Story */}
      <section className="py-12 md:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="relative">
              <div className="aspect-[4/5] relative rounded-lg overflow-hidden">
                <Image
                  src="/images/founders.jpg"
                  alt="Giuseppe and Maria Rossi"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute bottom-4 right-4 lg:-bottom-4 lg:-right-4 bg-primary text-primary-foreground px-6 py-3 rounded shadow-lg">
                <p className="font-serif text-sm">Giuseppe & Maria Rossi, 1952</p>
              </div>
            </div>
            <div>
              <p className="text-primary tracking-[0.2em] uppercase text-sm mb-3">Where It All Began</p>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6 text-balance">
                From Naples to New York
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  In 1946, Giuseppe Rossi and his wife Maria stepped off the boat at Ellis Island with 
                  little more than the clothes on their backs and a leather-bound notebook filled with 
                  Maria&apos;s grandmother&apos;s recipes. Like millions of Italian immigrants before them, 
                  they came to America seeking opportunity and a better life for their family.
                </p>
                <p>
                  Giuseppe had been a fisherman in Naples, while Maria had learned to cook in her 
                  grandmother&apos;s kitchen in the Campania countryside. Together, they pooled their savings 
                  from odd jobs and, with a small loan from the local parish, opened a tiny trattoria 
                  on Mulberry Street in the heart of Little Italy.
                </p>
                <p>
                  Those first years were difficult. Maria cooked everything herself while Giuseppe 
                  waited tables, washed dishes, and charmed guests with stories of the old country. 
                  But word spread quickly about the young couple serving the most authentic Neapolitan 
                  cuisine outside of Italy. By 1950, there was a line out the door every Sunday.
                </p>
                <p className="font-serif italic text-foreground text-lg">
                  &ldquo;We didn&apos;t come to America to forget where we came from. We came to share it.&rdquo; 
                  <span className="text-muted-foreground not-italic text-base block mt-2">&mdash; Maria Rossi</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-12 md:py-24 px-4 bg-muted">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <p className="text-primary tracking-[0.2em] uppercase text-sm mb-3">80 Years</p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Our Journey</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Eight decades of milestones, memories, and moments that shaped who we are today.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-10 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-border" />

            {timeline.map((event, index) => (
              <div 
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Year badge */}
                <div className="absolute left-10 md:left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-serif text-lg z-10">
                  {event.year.slice(2)}
                </div>

                {/* Content */}
                <div className={`md:w-1/2 pl-24 md:pl-0 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                  <p className="text-primary font-serif text-xl mb-1">{event.year}</p>
                  <h3 className="font-serif text-2xl text-foreground mb-3">{event.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{event.description}</p>
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Today */}
      <section className="py-12 md:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <p className="text-primary tracking-[0.2em] uppercase text-sm mb-3">The Legacy Continues</p>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6 text-balance">
                Four Generations Strong
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Today, Regino&apos;s Italian Restaurant is run by Marco Rossi, Giuseppe and Maria&apos;s grandson, 
                  alongside his parents Antonio and Elena. But you&apos;ll often find Marco&apos;s children in the 
                  kitchen after school, learning the same recipes their great-great-grandmother brought 
                  from Naples 80 years ago.
                </p>
                <p>
                  While much has changed over the decades&mdash;we&apos;ve expanded, renovated, and evolved with 
                  the times&mdash;our core values remain unchanged. We still make our pasta by hand every 
                  morning. We still source the finest imported ingredients. And we still treat every 
                  guest who walks through our doors like a member of our family.
                </p>
                <p>
                  Giuseppe and Maria&apos;s dream was never about building an empire. It was about creating a 
                  place where people could gather, celebrate, and share in the warmth of Italian hospitality. 
                  Eighty years later, that dream lives on.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="aspect-[4/5] relative rounded-lg overflow-hidden">
                <Image
                  src="/images/family-today.jpg"
                  alt="The Rossi family today"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute bottom-4 left-4 lg:-bottom-4 lg:-left-4 bg-primary text-primary-foreground px-6 py-3 rounded shadow-lg">
                <p className="font-serif text-sm">The Rossi Family, 2026</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-12 md:py-24 px-4 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <p className="text-primary-foreground/80 tracking-[0.2em] uppercase text-sm mb-3">What Guides Us</p>
            <h2 className="font-serif text-3xl md:text-4xl">Our Values</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <h3 className="font-serif text-xl mb-3">{value.title}</h3>
                <p className="text-primary-foreground/80 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-12 md:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <p className="text-primary tracking-[0.2em] uppercase text-sm mb-3">Through the Years</p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Memories</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A glimpse into eight decades of celebrations, milestones, and the countless guests 
              who have become part of our extended family.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {["/images/gallery-1.jpg", "/images/gallery-2.jpg", "/images/gallery-3.jpg", "/images/gallery-4.jpg", "/images/gallery-5.jpg", "/images/gallery-6.jpg"].map((src, index) => (
              <div key={index} className="aspect-square relative overflow-hidden rounded-lg group">
                <Image
                  src={src}
                  alt={`Regino's memory ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
