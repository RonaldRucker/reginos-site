import type { Metadata } from "next"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Wine & Drinks | Regino's Italian Restaurant",
  description: "Explore our curated selection of Italian wines, signature cocktails, and refreshing beverages.",
}

const drinkSections = [
  {
    title: "Vini Rossi",
    subtitle: "Red Wines",
    description: "Our cellar features carefully selected wines from Italy&apos;s finest regions",
    items: [
      { name: "Chianti Classico Riserva", region: "Tuscany", price: "14 / 52", description: "Cherry, violet, earthy notes" },
      { name: "Barolo DOCG", region: "Piedmont", price: "22 / 85", description: "Rose, tar, truffle, complex tannins" },
      { name: "Brunello di Montalcino", region: "Tuscany", price: "24 / 95", description: "Dark fruit, leather, spice" },
      { name: "Amarone della Valpolicella", region: "Veneto", price: "20 / 78", description: "Dried cherry, chocolate, tobacco" },
      { name: "Super Tuscan Blend", region: "Tuscany", price: "18 / 68", description: "Blackberry, cassis, oak" },
      { name: "Montepulciano d&apos;Abruzzo", region: "Abruzzo", price: "11 / 42", description: "Plum, cherry, soft tannins" },
      { name: "Nero d&apos;Avola", region: "Sicily", price: "12 / 45", description: "Ripe fruit, pepper, herbs" },
    ]
  },
  {
    title: "Vini Bianchi",
    subtitle: "White Wines",
    items: [
      { name: "Pinot Grigio", region: "Friuli", price: "12 / 45", description: "Crisp, citrus, mineral" },
      { name: "Gavi di Gavi DOCG", region: "Piedmont", price: "14 / 52", description: "Lemon, almond, honeysuckle" },
      { name: "Vermentino di Sardegna", region: "Sardinia", price: "13 / 48", description: "Tropical, herbal, saline finish" },
      { name: "Greco di Tufo", region: "Campania", price: "14 / 52", description: "Peach, pear, almond" },
      { name: "Soave Classico", region: "Veneto", price: "11 / 42", description: "Apple, white flowers, fresh" },
      { name: "Falanghina", region: "Campania", price: "12 / 45", description: "Citrus, spice, honey notes" },
    ]
  },
  {
    title: "Spumante & Rosé",
    subtitle: "Sparkling & Rosé",
    items: [
      { name: "Prosecco Superiore DOCG", region: "Veneto", price: "12 / 48", description: "Green apple, pear, bubbles" },
      { name: "Franciacorta Brut", region: "Lombardy", price: "18 / 72", description: "Toast, citrus, elegant mousse" },
      { name: "Rosé di Toscana", region: "Tuscany", price: "13 / 50", description: "Strawberry, floral, refreshing" },
      { name: "Lambrusco", region: "Emilia-Romagna", price: "11 / 42", description: "Berry, light fizz, slightly sweet" },
    ]
  },
  {
    title: "Cocktails della Casa",
    subtitle: "House Cocktails",
    items: [
      { name: "Negroni Classico", price: "16", description: "Gin, Campari, sweet vermouth, orange peel" },
      { name: "Aperol Spritz", price: "14", description: "Aperol, prosecco, soda, orange slice" },
      { name: "Limoncello Martini", price: "15", description: "House limoncello, vodka, lemon, sugar rim" },
      { name: "Espresso Martini", price: "16", description: "Vodka, Kahlúa, fresh espresso, coffee beans" },
      { name: "Bellini", price: "14", description: "White peach purée, prosecco" },
      { name: "Americano", price: "14", description: "Campari, sweet vermouth, soda, orange" },
      { name: "The Godfather", price: "18", description: "Scotch, amaretto, orange twist" },
      { name: "Italian Margarita", price: "15", description: "Tequila, amaretto, lime, orange liqueur" },
    ]
  },
  {
    title: "Aperitivi & Digestivi",
    subtitle: "Before & After Dinner",
    items: [
      { name: "Campari", price: "10", description: "Classic Italian bitter" },
      { name: "Aperol", price: "10", description: "Light, bittersweet aperitif" },
      { name: "Amaro Montenegro", price: "12", description: "Aromatic herbal digestif" },
      { name: "Fernet Branca", price: "12", description: "Bold, minty bitter" },
      { name: "Limoncello", price: "10", description: "House-made lemon liqueur, chilled" },
      { name: "Sambuca", price: "10", description: "Anise-flavored, with coffee beans" },
      { name: "Grappa Riserva", price: "14", description: "Aged grape pomace spirit" },
      { name: "Vin Santo", price: "14", description: "Sweet dessert wine, served with biscotti" },
    ]
  },
  {
    title: "Birra Italiana",
    subtitle: "Italian Beer",
    items: [
      { name: "Peroni Nastro Azzurro", price: "8", description: "Crisp Italian lager" },
      { name: "Moretti", price: "8", description: "Golden, balanced pilsner" },
      { name: "Menabrea", price: "9", description: "Premium craft lager from Piedmont" },
      { name: "Seasonal Italian Craft", price: "10", description: "Ask your server" },
    ]
  },
  {
    title: "Bevande Analcoliche",
    subtitle: "Non-Alcoholic",
    items: [
      { name: "San Pellegrino", price: "6", description: "Sparkling mineral water" },
      { name: "Acqua Panna", price: "6", description: "Still natural spring water" },
      { name: "Limonata", price: "5", description: "Fresh-squeezed Italian lemonade" },
      { name: "Aranciata Rossa", price: "5", description: "Blood orange soda" },
      { name: "Espresso", price: "4", description: "Double shot, Italian roast" },
      { name: "Cappuccino", price: "6", description: "Traditional, served until 11am" },
    ]
  },
]

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
              Wine & Drinks
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
            </p>
          </div>

          {drinkSections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="mb-20">
              <div className="text-center mb-10">
                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-1">{section.title}</h2>
                <p className="text-primary tracking-[0.2em] uppercase text-sm">{section.subtitle}</p>
                {section.description && (
                  <p className="text-muted-foreground text-sm mt-3">{section.description}</p>
                )}
              </div>

              <div className="space-y-6">
                {section.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex justify-between items-start gap-4 border-b border-border pb-6">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-serif text-xl text-foreground">{item.name}</h3>
                        {"region" in item && item.region && (
                          <span className="text-xs bg-muted text-muted-foreground px-2 py-0.5 rounded">
                            {item.region}
                          </span>
                        )}
                      </div>
                      <p className="text-muted-foreground text-sm mt-1">{item.description}</p>
                    </div>
                    <p className="font-serif text-lg text-primary shrink-0">${item.price}</p>
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
