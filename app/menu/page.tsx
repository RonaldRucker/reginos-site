import type { Metadata } from "next"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import menuData from "@/data/menu.json"

export const metadata: Metadata = {
  title: "Menu | Regino's Italian Restaurant",
  description: "Explore our authentic Italian menu featuring traditional family recipes passed down through four generations.",
}

export default function MenuPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px]">
        <div className="absolute inset-0">
          <Image
            src="/images/menu-hero.jpg"
            alt="Our Menu"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-foreground/60" />
        </div>
        <div className="relative h-full flex items-center justify-center text-center px-4 pt-20">
          <div>
            <p className="text-background/90 tracking-[0.3em] uppercase text-sm mb-4">
              Authentic Italian Cuisine
            </p>
            <h1 className="font-serif text-5xl md:text-6xl text-background mb-4">
              Our Menu
            </h1>
            <p className="text-background/90 max-w-xl mx-auto">
              Traditional recipes passed down through four generations, made with the finest imported
              and locally sourced ingredients.
            </p>
          </div>
        </div>
      </section>

      {/* Menu Content */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-muted-foreground text-sm">
              All pasta is made fresh daily in house. Gluten-free pasta available upon request.
              <br />
              Please inform your server of any allergies or dietary restrictions.
            </p>
          </div>

          {menuData.map((section) => (
            <div key={section.title} className="mb-20">
              <div className="text-center mb-10">
                <h2 className="font-serif text-3xl md:text-4xl text-foreground">{section.title}</h2>
              </div>

              <div className="space-y-8">
                {section.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex justify-between items-start gap-4 border-b border-border pb-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-serif text-xl text-foreground">{item.name}</h3>
                        {"note" in item && item.note && (
                          <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded">
                            {item.note}
                          </span>
                        )}
                      </div>
                      <p className="text-muted-foreground text-sm mt-1 leading-relaxed">{item.description}</p>
                    </div>
                    <p className="font-serif text-xl text-primary shrink-0">
                      {"priceLg" in item && item.priceLg
                        ? `Sm $${item.priceSm} / Lg $${item.priceLg}`
                        : `$${item.priceSm}`
                      }
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="text-center text-muted-foreground text-sm border-t border-border pt-10">
            <p className="mb-2">A 20% gratuity will be added to parties of 6 or more.</p>
            <p>Consuming raw or undercooked meats, poultry, seafood, or eggs may increase your risk of foodborne illness.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
