"use client"

import Link from "next/link"
import { useState } from "react"
import { YellowButton } from "@/components/ui/yellow-button"

export function Header() {
  const [isHovered, setIsHovered] = useState(false)
  const brand = "Nookbase."

  return (
    <header className="py-3 px-3 border-b border-l border-r border-dashed border-[#222222]/25">
      <div className="mx-auto flex items-center justify-between">
        <Link
          href="/"
          className="inline-flex h-10 px-3 justify-center items-center gap-2.5 flex-shrink-0 rounded-lg bg-white hover:bg-[#EBEBEB] text-[#67ad42] text-base font-medium transition-colors duration-200 ease-smooth overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <span className="flex">
            {brand.split("").map((letter, index) => (
              <span
                key={index}
                className="inline-block transition-transform duration-700 ease-in-out"
                style={{
                  transform: isHovered ? "translateY(-2px)" : "translateY(0)",
                  transitionDelay: isHovered
                    ? `${index * 60}ms`
                    : `${((brand.length - 1) - index) * 60 + 300}ms`,
                }}
              >
                {letter}
              </span>
            ))}
          </span>
        </Link>

        <div className="flex items-center gap-2">
          <Link
            href="/about"
            className="inline-flex h-10 px-3 justify-center items-center gap-2.5 flex-shrink-0 text-[#222222] hover:text-black text-base transition-all duration-200 ease-smooth"
            style={{
              borderRadius: "8px",
              background:
                "linear-gradient(0deg, rgba(255, 255, 255, 0.00) 0%, rgba(255, 255, 255, 0.32) 100%), #FFFAFA",
              boxShadow:
                "0 0 0 1px rgba(0, 0, 0, 0.04), 0 -2px 3px 0 rgba(0, 0, 0, 0.04) inset, 0 2px 3px 0 rgba(255, 255, 255, 0.32) inset",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background =
                "linear-gradient(0deg, rgba(255, 255, 255, 0.00) 0%, rgba(255, 255, 255, 0.32) 100%), #F3F0F0"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background =
                "linear-gradient(0deg, rgba(255, 255, 255, 0.00) 0%, rgba(255, 255, 255, 0.32) 100%), #FFFAFA"
            }}
          >
            About
          </Link>
          <Link href="/submit">
            <YellowButton>Submit</YellowButton>
          </Link>
        </div>
      </div>
    </header>
  )
}
