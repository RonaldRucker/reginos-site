import type { Metadata } from 'next'
import { Playfair_Display, Lato } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
  display: 'swap',
})

const lato = Lato({ 
  subsets: ["latin"],
  weight: ['300', '400', '700'],
  variable: '--font-lato',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Regino's Italian Restaurant | Authentic Italian Since 1946",
  description: "Experience 80 years of authentic Italian cuisine at Regino's Italian Restaurant. Family recipes passed down through four generations. Dine in, catering, and private events.",
  generator: 'v0.app',
  icons: {
    icon: '/images/R_logo.png',
    apple: '/images/R_logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${lato.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
