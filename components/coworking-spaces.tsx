import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Star, Wifi, Coffee, Users } from "lucide-react"

// Mock data for coworking spaces
const coworkingSpaces = [
  {
    id: "1",
    name: "The Creative Hub",
    location: "Downtown San Francisco, CA",
    image: "/placeholder.svg?height=300&width=400&query=modern coworking space with large windows",
    rating: 4.8,
    reviewCount: 124,
    pricePerDay: 35,
    amenities: ["High-speed WiFi", "Coffee Bar", "Meeting Rooms"],
    type: "Creative Space",
  },
  {
    id: "2",
    name: "TechSpace Central",
    location: "SOMA, San Francisco, CA",
    image: "/placeholder.svg?height=300&width=400&query=tech startup office with modern desks",
    rating: 4.9,
    reviewCount: 89,
    pricePerDay: 45,
    amenities: ["24/7 Access", "Phone Booths", "Printing"],
    type: "Tech Hub",
  },
  {
    id: "3",
    name: "Quiet Corner",
    location: "Mission District, San Francisco, CA",
    image: "/placeholder.svg?height=300&width=400&query=quiet library-style coworking space",
    rating: 4.7,
    reviewCount: 156,
    pricePerDay: 25,
    amenities: ["Silent Zones", "Natural Light", "Ergonomic Chairs"],
    type: "Focus Space",
  },
  {
    id: "4",
    name: "Collaborative Commons",
    location: "Financial District, San Francisco, CA",
    image: "/placeholder.svg?height=300&width=400&query=open collaborative workspace with people working",
    rating: 4.6,
    reviewCount: 203,
    pricePerDay: 40,
    amenities: ["Event Space", "Networking Events", "Mentorship"],
    type: "Community",
  },
  {
    id: "5",
    name: "Startup Sanctuary",
    location: "Palo Alto, CA",
    image: "/placeholder.svg?height=300&width=400&query=startup office with ping pong table and modern furniture",
    rating: 4.8,
    reviewCount: 67,
    pricePerDay: 50,
    amenities: ["Investor Meetups", "Pitch Practice", "Legal Support"],
    type: "Startup Hub",
  },
  {
    id: "6",
    name: "Artisan Workspace",
    location: "Berkeley, CA",
    image: "/placeholder.svg?height=300&width=400&query=artistic workspace with plants and creative tools",
    rating: 4.5,
    reviewCount: 91,
    pricePerDay: 30,
    amenities: ["Art Supplies", "Workshop Space", "Gallery Wall"],
    type: "Creative Studio",
  },
]

export function CoworkingSpaces() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Featured Coworking Spaces</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Handpicked spaces that offer the best environment for productivity and collaboration
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coworkingSpaces.map((space) => (
            <Link key={space.id} href={`/spaces/${space.id}`}>
              <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden">
                <div className="relative">
                  <Image
                    src={space.image || "/placeholder.svg"}
                    alt={space.name}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-3 left-3 bg-white text-gray-900">{space.type}</Badge>
                </div>

                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {space.name}
                    </h3>
                    <div className="flex items-center text-sm text-gray-600">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                      <span className="font-medium">{space.rating}</span>
                      <span className="ml-1">({space.reviewCount})</span>
                    </div>
                  </div>

                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm">{space.location}</span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {space.amenities.slice(0, 2).map((amenity) => (
                      <Badge key={amenity} variant="secondary" className="text-xs">
                        {amenity}
                      </Badge>
                    ))}
                    {space.amenities.length > 2 && (
                      <Badge variant="secondary" className="text-xs">
                        +{space.amenities.length - 2} more
                      </Badge>
                    )}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-gray-900">
                      ${space.pricePerDay}
                      <span className="text-sm font-normal text-gray-600">/day</span>
                    </div>
                    <div className="flex items-center space-x-1 text-gray-400">
                      <Wifi className="h-4 w-4" />
                      <Coffee className="h-4 w-4" />
                      <Users className="h-4 w-4" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/spaces">
            <Button size="lg" variant="outline">
              View All Spaces
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
