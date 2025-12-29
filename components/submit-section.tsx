"use client"

import { LargeButton } from "@/components/ui/large-button"
import Link from "next/link"
import { useEffect, useState } from "react"

export function SubmitSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="py-3 px-3 border-b border-l border-r border-dashed border-[#222222]/25">
      <div
        className={`py-16 px-12 rounded-lg flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-24 transition-all duration-700 ease-smooth hover:scale-[1.01] ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
        style={{
          borderRadius: "8px",
          background: "#67AD42",
          boxShadow: "0px 0px 64px 0px rgba(255, 255, 255, 0.40) inset",
        }}
      >
        <div className="max-w-2xl text-center lg:text-left">
          <h2 className="text-4xl font-bold text-white mb-3" style={{ letterSpacing: "-0.02em" }}>
            Know of any more Nooks?
          </h2>
          <p className="text-xl text-white/90">Let us know about any more great spaces for the coworking community.</p>
        </div>
        <div className="flex-shrink-0">
          <Link href="/submit">
            <LargeButton>Submit a location</LargeButton>
          </Link>
        </div>
      </div>
    </section>
  )
}
