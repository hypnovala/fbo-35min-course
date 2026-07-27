import './globals.css'
import type { Metadata } from 'next'
import { Playfair_Display, Cormorant, Jost } from 'next/font/google'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
})

const cormorant = Cormorant({
  subsets: ['latin'],
  weight: ['400', '500'],
  style: ['italic'],
  variable: '--font-cormorant',
})

const jost = Jost({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '900'],
  variable: '--font-jost',
})

export const metadata: Metadata = {
  title: 'Full body Intro Orgasm Course | Brock Somatic Education',
  description: 'A somatic, breath-led course guiding women from tension to full-body sensation through awareness, presence, and nervous system regulation.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${cormorant.variable} ${jost.variable}`}>
      <body>{children}</body>
    </html>
  )
}
