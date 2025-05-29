"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, MapPin } from "lucide-react"

export function SearchSection() {
  const [location, setLocation] = useState("")

  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Find Your Perfect
            <span className="text-blue-600 block">Coworking Space</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Discover inspiring workspaces in your city. From quiet corners to collaborative hubs, find the perfect
            environment for your productivity.
          </p>

          <div className="max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Enter city, neighborhood, or address"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="pl-10 h-12 text-lg"
                />
              </div>
              <Button size="lg" className="h-12 px-8">
                <Search className="h-5 w-5 mr-2" />
                Search Spaces
              </Button>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-2">
            <span className="text-gray-600">Popular locations:</span>
            {["San Francisco", "New York", "London", "Berlin", "Tokyo"].map((city) => (
              <Button key={city} variant="link" className="text-blue-600 p-0 h-auto">
                {city}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
