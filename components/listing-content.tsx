"use client"

import Image from "next/image"
import { ExternalLink } from "lucide-react"
import { LargeButton } from "@/components/ui/large-button"
import type { Workspace } from "@/lib/workspaces"
import { useEffect, useState } from "react"

interface ListingContentProps {
  space: Workspace
}

export function ListingContent({ space }: ListingContentProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const gridCols = space.pricing.length === 2 ? "grid-cols-2" : "grid-cols-3"

  return (
    <section className="py-3 px-3 border-l border-r border-dashed border-[#222222]/25">
      <div className="mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          {/* Information Panel - Left Side */}
          <div
            className={`lg:sticky lg:top-12 lg:h-fit transition-all duration-700 ease-smooth ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
            }`}
          >
            <div
              className="bg-white rounded-lg p-6 space-y-6"
              style={{
                boxShadow:
                  "0px 0px 0px 1px rgba(0, 0, 0, 0.04), 0px 1px 1px -0.5px rgba(0, 0, 0, 0.04), 0px 3px 3px -1.5px rgba(0, 0, 0, 0.04), 0px 6px 6px -3px rgba(0, 0, 0, 0.04), 0px 12px 12px -6px rgba(0, 0, 0, 0.04), 0px 24px 24px -12px rgba(0, 0, 0, 0.04)",
              }}
            >
              {/* Header */}
              <div className="flex items-start justify-between">
                <div>
                  <h1 className="text-4xl font-bold text-[#222222] mb-2" style={{ letterSpacing: "-0.02em" }}>
                    {space.name}
                  </h1>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(space.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 hover:text-[#67ad42] transition-colors duration-200 group"
                  >
                    <span className="text-[#222222] text-base font-mono">{space.address}</span>
                    <ExternalLink className="h-4 w-4 text-[#222222] transition-all duration-200 ease-smooth group-hover:scale-110 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </div>

              <div className="border-t border-dashed border-[#222222]/25"></div>

              <div>
                <p className="text-[#222222] text-base leading-[140%]">{space.description}</p>
              </div>

              <div className="border-t border-dashed border-[#222222]/25"></div>

              <div className={`grid ${gridCols} gap-3`}>
                {space.pricing.map((option, index) => (
                  <div
                    key={index}
                    className="bg-[#f2f2f2] rounded-lg p-6 text-center"
                  >
                    <div className="text-[#222222] text-lg font-medium">
                      {option.label}: ${option.price}
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-dashed border-[#222222]/25"></div>

              <div className="grid grid-cols-3 gap-4">
                {space.amenities.map((amenity, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 opacity-0 animate-fade-in"
                    style={{
                      animationDelay: `${index * 50}ms`,
                      animationFillMode: "forwards",
                    }}
                  >
                    <div className="w-4 h-4 rounded-full bg-[#67ad42] flex items-center justify-center">
                      <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-[#222222]">{amenity}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-dashed border-[#222222]/25"></div>

              <div>
                <LargeButton href={space.website} className="w-full">
                  Visit website
                </LargeButton>
              </div>
            </div>
          </div>

          {/* Image Gallery - Right Side */}
          <div
            className={`space-y-3 transition-all duration-700 ease-smooth delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
            }`}
          >
            {space.images.map((image, index) => (
              <div
                key={index}
                className="w-full overflow-hidden rounded-lg opacity-0 animate-fade-in"
                style={{
                  animationDelay: `${(index + 2) * 150}ms`,
                  animationFillMode: "forwards",
                }}
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${space.name} view ${index + 1}`}
                  width={600}
                  height={338}
                  className="w-full aspect-video object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
