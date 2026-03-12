import type React from "react"
import type { Metadata } from "next"
import { Public_Sans, IBM_Plex_Mono } from "next/font/google"
import "./globals.css"

const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-public-sans",
})

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-ibm-plex-mono",
})

export const metadata: Metadata = {
  title: "Nookbase - Discover Coworking Spaces",
  description: "Find the perfect coworking space near you",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${publicSans.variable} ${ibmPlexMono.variable}`}>
      <body className={`${publicSans.className} antialiased`}>{children}</body>
    </html>
  )
}
