import type { Metadata } from "next"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Menu | Regino's Italian Restaurant",
  description: "Explore our authentic Italian menu featuring traditional family recipes passed down through four generations.",
}

const menuSections = [
  {
    title: "Antipasti",
    subtitle: "Starters",
    items: [
      { name: "Bruschetta Classica", description: "Grilled bread topped with fresh tomatoes, basil, garlic, and extra virgin olive oil", price: "12" },
      { name: "Calamari Fritti", description: "Crispy fried calamari served with marinara sauce and lemon aioli", price: "18" },
      { name: "Carpaccio di Manzo", description: "Thinly sliced raw beef, arugula, capers, shaved Parmigiano-Reggiano", price: "19" },
      { name: "Burrata Caprese", description: "Creamy burrata, heirloom tomatoes, fresh basil, aged balsamic reduction", price: "17" },
      { name: "Arancini", description: "Crispy risotto balls stuffed with mozzarella and peas, served with tomato sauce", price: "14" },
      { name: "Antipasto Misto", description: "Selection of Italian cured meats, cheeses, olives, and marinated vegetables", price: "24" },
    ]
  },
  {
    title: "Zuppe e Insalate",
    subtitle: "Soups & Salads",
    items: [
      { name: "Minestrone della Nonna", description: "Nonna&apos;s recipe: hearty vegetable soup with white beans and pasta", price: "11" },
      { name: "Italian Wedding Soup", description: "Chicken broth with mini meatballs, escarole, and acini di pepe pasta", price: "12" },
      { name: "Insalata Cesare", description: "Romaine hearts, house-made Caesar dressing, focaccia croutons, Parmigiano", price: "14" },
      { name: "Insalata Tricolore", description: "Arugula, radicchio, endive, shaved Parmigiano, lemon vinaigrette", price: "13" },
    ]
  },
  {
    title: "Pasta",
    subtitle: "House-Made Daily",
    items: [
      { name: "Spaghetti alla Carbonara", description: "Guanciale, egg yolk, Pecorino Romano, black pepper", price: "24" },
      { name: "Rigatoni alla Vodka", description: "San Marzano tomatoes, cream, vodka, fresh basil, Parmigiano", price: "22" },
      { name: "Fettuccine Alfredo", description: "Our signature creamy Alfredo sauce with fresh fettuccine", price: "21" },
      { name: "Lasagna della Casa", description: "Layered pasta with beef and pork ragù, béchamel, mozzarella", price: "26" },
      { name: "Ravioli di Ricotta", description: "House-made ravioli filled with ricotta and spinach, brown butter sage", price: "25" },
      { name: "Pappardelle al Ragù", description: "Wide ribbon pasta with slow-cooked Bolognese sauce", price: "26" },
      { name: "Linguine alle Vongole", description: "Fresh clams, white wine, garlic, parsley, touch of chili", price: "28" },
      { name: "Gnocchi Sorrentina", description: "Potato gnocchi, San Marzano tomato sauce, fresh mozzarella, basil", price: "23" },
    ]
  },
  {
    title: "Secondi",
    subtitle: "Main Courses",
    items: [
      { name: "Osso Buco alla Milanese", description: "Braised veal shank, gremolata, saffron risotto - Our signature dish", price: "48" },
      { name: "Pollo Parmigiana", description: "Breaded chicken cutlet, San Marzano marinara, mozzarella, spaghetti", price: "29" },
      { name: "Vitello Piccata", description: "Veal medallions, lemon caper butter sauce, roasted potatoes", price: "36" },
      { name: "Branzino al Forno", description: "Whole roasted Mediterranean sea bass, herbs, lemon, olive oil", price: "42" },
      { name: "Bistecca Fiorentina", description: "32oz bone-in ribeye, Tuscan style, rosemary, garlic, olive oil", price: "68", note: "For Two" },
      { name: "Saltimbocca alla Romana", description: "Veal scallopine, prosciutto, sage, white wine butter sauce", price: "34" },
      { name: "Gamberoni alla Griglia", description: "Grilled jumbo shrimp, garlic herb butter, grilled vegetables", price: "38" },
    ]
  },
  {
    title: "Contorni",
    subtitle: "Sides",
    items: [
      { name: "Sautéed Broccoli Rabe", description: "Garlic, olive oil, chili flakes", price: "10" },
      { name: "Roasted Brussels Sprouts", description: "Pancetta, aged balsamic", price: "11" },
      { name: "Truffle Fries", description: "Parmesan, truffle oil, fresh herbs", price: "12" },
      { name: "Risotto del Giorno", description: "Ask your server for today&apos;s preparation", price: "14" },
    ]
  },
  {
    title: "Dolci",
    subtitle: "Desserts",
    items: [
      { name: "Tiramisù della Casa", description: "Our famous family recipe - layers of espresso-soaked ladyfingers, mascarpone cream", price: "12" },
      { name: "Panna Cotta", description: "Vanilla bean cream, seasonal berry compote", price: "10" },
      { name: "Cannoli Siciliani", description: "Crispy shells, sweet ricotta filling, chocolate chips, pistachios", price: "11" },
      { name: "Affogato", description: "Vanilla gelato drowned in hot espresso, amaretti cookie", price: "9" },
      { name: "Torta di Limone", description: "Lemon olive oil cake, mascarpone whipped cream, candied lemon", price: "11" },
    ]
  },
]

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

          {menuSections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="mb-20">
              <div className="text-center mb-10">
                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-1">{section.title}</h2>
                <p className="text-primary tracking-[0.2em] uppercase text-sm">{section.subtitle}</p>
              </div>

              <div className="space-y-8">
                {section.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex justify-between items-start gap-4 border-b border-border pb-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-serif text-xl text-foreground">{item.name}</h3>
                        {item.note && (
                          <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded">
                            {item.note}
                          </span>
                        )}
                      </div>
                      <p className="text-muted-foreground text-sm mt-1 leading-relaxed">{item.description}</p>
                    </div>
                    <p className="font-serif text-xl text-primary shrink-0">${item.price}</p>
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
