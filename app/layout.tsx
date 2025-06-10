import type React from "react"
import type { Metadata } from "next"
import { Public_Sans, IBM_Plex_Mono } from "next/font/google"
import { SkipLink } from "@/components/ui/skip-link"
import "./globals.css"

const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-public-sans",
  display: "swap", // Add font-display swap for better performance
})

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-ibm-plex-mono",
  display: "swap", // Add font-display swap for better performance
})

export const metadata: Metadata = {
  title: "Nookspace - Discover Coworking Spaces",
  description:
    "Find the perfect coworking space near you. Browse verified coworking spaces with amenities, pricing, and real photos.",
  keywords: "coworking, workspace, office space, remote work, shared office",
  authors: [{ name: "Nookspace" }],
  creator: "Nookspace",
  publisher: "Nookspace",
  robots: "index, follow",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${publicSans.variable} ${ibmPlexMono.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${publicSans.className} antialiased`}>
        <SkipLink />
        {children}
      </body>
    </html>
  )
}
