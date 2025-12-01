import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

// Using Inter for modern, tech-forward aesthetic
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "EcoHomeTracker - Smarter Homes. Lower Bills. Smaller Footprint.",
  description:
    "Advanced energy monitors, smart water metering, efficiency dashboards, and eco-friendly automation guides for sustainable living.",
  keywords: ["smart home", "energy monitoring", "water tracking", "sustainability", "eco-friendly", "home automation"],
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><defs><linearGradient id='g' x1='0%25' y1='0%25' x2='100%25' y2='100%25'><stop offset='0%25' style='stop-color:%239EE5C3'/><stop offset='100%25' style='stop-color:%235DC4E0'/></linearGradient></defs><path fill='url(%23g)' d='M50 10 L90 30 L90 70 L50 90 L10 70 L10 30 Z'/><path fill='%231E1F24' d='M50 25 C35 25 30 35 30 45 C30 60 45 75 50 75 C50 65 45 60 45 50 C45 42 48 35 58 35 C68 45 70 55 65 65 C75 60 75 45 65 35 C60 28 55 25 50 25 Z'/></svg>",
        type: "image/svg+xml",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
