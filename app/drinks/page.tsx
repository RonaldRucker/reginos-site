import type { Metadata } from "next"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import drinksDataRaw from "@/data/drinks.json"

type DrinkItem = {
  name: string
  description: string
  glass: string | number
  bottle?: string | number
  note?: string
}

type DrinkSection = {
  title: string
  items: DrinkItem[]
}

const drinksData = drinksDataRaw as DrinkSection[]

export const metadata: Metadata = {
  title: "Wine & Drinks | Regino's Italian Restaurant",
  description: "Explore our curated selection of Italian wines, signature cocktails, and refreshing beverages.",
}

export default function DrinksPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px]">
        <div className="absolute inset-0">
          <Image
            src="/images/drinks-hero.jpg"
            alt="Wine and Drinks"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-foreground/60" />
        </div>
        <div className="relative h-full flex items-center justify-center text-center px-4 pt-20">
          <div>
            <p className="text-background/90 tracking-[0.3em] uppercase text-sm mb-4">
              Curated Selection
            </p>
            <h1 className="font-serif text-5xl md:text-6xl text-background mb-4">
              Wine &amp; Drinks
            </h1>
            <p className="text-background/90 max-w-xl mx-auto">
              From our carefully curated wine cellar to signature cocktails, the perfect pairing
              awaits for every dish and occasion.
            </p>
          </div>
        </div>
      </section>

      {/* Drink Menu Content */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-muted-foreground text-sm">
              Our sommelier is happy to assist with wine pairings for your meal.
              <br />
              Wine prices shown as Glass / Bottle. Half bottles available for select wines.
              <br />
              Corkage fee: $35 per bottle (limit 2 per table).
            </p>
          </div>

          {drinksData.map((section) => (
            <div key={section.title} className="mb-20">
              <div className="text-center mb-10">
                <h2 className="font-serif text-3xl md:text-4xl text-foreground">{section.title}</h2>
              </div>

              <div className="space-y-6">
                {section.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex justify-between items-start gap-4 border-b border-border pb-6">
                    <div className="flex-1">
                      <h3 className="font-serif text-xl text-foreground">{item.name}</h3>
                      <p className="text-muted-foreground text-sm mt-1">{item.description}</p>
                      {item.note && (
                        <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded mt-1 inline-block">
                          {item.note}
                        </span>
                      )}
                    </div>
                    <p className="font-serif text-lg text-primary shrink-0">
                      {item.bottle
                        ? `$${item.glass} / $${item.bottle}`
                        : `$${item.glass}`
                      }
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="text-center text-muted-foreground text-sm border-t border-border pt-10">
            <p className="mb-2">Corkage fee: $35 per bottle (limit 2 bottles per table)</p>
            <p>Please drink responsibly. We do not serve alcohol to anyone under 21.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
