"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="px-1 sm:px-3 border-b border-l border-r border-dashed border-[#222222]/25">
      <div className="mx-auto">
        <div className="flex flex-col md:flex-row md:items-center">
          <div
            className={`w-full md:w-1/2 px-4 sm:px-6 md:px-12 lg:px-24 py-8 md:py-0 transition-all duration-700 ease-smooth ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#67ad42] mb-4"
              style={{ letterSpacing: "-0.02em" }}
            >
              Nookspace.
            </h1>
            <p className="text-lg sm:text-xl text-gray-600">Discover co-working spaces near you.</p>
          </div>

          <div
            className={`w-full md:w-1/2 flex justify-center md:justify-end px-4 pb-8 md:pb-0 transition-all duration-700 ease-smooth delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
            }`}
          >
            <Image
              src="/images/coworking-space-nook-eco-friendly-workspace-hero.jpg"
              alt="3D green leaf-shaped coworking space nook on grass representing eco-friendly workspace design"
              width={400}
              height={300}
              className="object-contain max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
