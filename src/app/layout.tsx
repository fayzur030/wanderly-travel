import type { Metadata } from 'next'
import { Manrope, Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const plusJakarataSans = Plus_Jakarta_Sans({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
})

const playfairDisplay = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Wanderly Travel',
  description:
    'Discover breathtaking destinations and create unforgettable memories with our curated travel experiences.',
}

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang='en'
      className={`${plusJakarataSans.className} ${playfairDisplay.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className='min-h-full flex flex-col'>{children}</body>
    </html>
  )
}
