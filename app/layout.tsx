import type { Metadata } from 'next'
import './globals.css'
import { Navigation } from '@/src/components/sections/layout/Navigation'
import { Footer } from '@/src/components/sections/layout/Footer'

export const metadata: Metadata = {
  title: 'Portfolio Violet - Développeur Full Stack',
  description: 'Portfolio personnel premium avec animations 3D et design futuriste',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className="min-h-screen">
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}


