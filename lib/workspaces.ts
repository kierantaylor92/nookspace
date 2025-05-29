export interface PricingOption {
  label: string
  price: number | string // Can be a number or a range like "30-50"
}

export interface Workspace {
  id: string
  name: string
  location: string
  state: "NSW" | "SA" | "TAS" | "VIC" | "WA"
  address: string
  description: string
  pricing: PricingOption[] // Now flexible array of pricing options
  amenities: string[]
  website: string
  images: string[]
}

export const workspaces: Workspace[] = [
  {
    id: "naval-store",
    name: "Naval Store",
    location: "Fremantle",
    state: "WA",
    address: "141 Queen Victoria St, Fremantle WA 6160",
    description:
      "Heritage-listed warehouse built as storage for the Australian navy in 1935. Now a multi-purpose space: Art gallery, photo/film studio, event space, market, live music venue & studios.",
    pricing: [
      { label: "Coworking", price: "30-50" },
      { label: "Studio", price: "300-500" },
    ],
    amenities: ["High-speed WiFi", "24/7 Access", "Kitchenette", "Free Parking", "Event Space", "Bike Storage"],
    website: "https://www.thenavalstore.com/",
    images: [
      "/images/naval-store-hero.webp",
      "/images/naval-store-warehouse.webp",
      "/images/naval-store-studio.webp",
      "/images/naval-store-lounge.webp",
    ],
  },
  {
    id: "creative-hub",
    name: "Creative Hub",
    location: "Perth CBD",
    state: "WA",
    address: "456 Creative Street, Perth, WA",
    description:
      "A vibrant creative workspace in the heart of Perth CBD. Perfect for designers, artists, and creative professionals looking for an inspiring environment to boost their productivity and collaborate with like-minded individuals.",
    pricing: [
      { label: "Daily", price: 35 },
      { label: "Weekly", price: 180 },
      { label: "Monthly", price: 650 },
    ],
    amenities: [
      "Design Software",
      "Art Supplies",
      "Gallery Space",
      "Workshop Area",
      "Natural Light",
      "Flexible Desks",
      "Community Events",
      "Mentorship",
      "Storage",
    ],
    website: "https://creativehub.com",
    images: [
      "/placeholder.svg?height=400&width=600&query=creative hub artistic workspace with easels",
      "/placeholder.svg?height=400&width=600&query=creative hub gallery space",
      "/placeholder.svg?height=400&width=600&query=creative hub workshop area",
      "/placeholder.svg?height=400&width=600&query=creative hub design studio",
      "/placeholder.svg?height=400&width=600&query=creative hub collaboration space",
      "/placeholder.svg?height=400&width=600&query=creative hub natural light workspace",
    ],
  },
  {
    id: "tech-space",
    name: "Tech Space",
    location: "Northbridge",
    state: "VIC",
    address: "789 Innovation Ave, Northbridge, Melbourne",
    description:
      "A cutting-edge technology workspace designed for startups, developers, and tech entrepreneurs. Features state-of-the-art equipment and a collaborative environment perfect for building the next big thing.",
    pricing: [
      { label: "Daily", price: 45 },
      { label: "Weekly", price: 220 },
      { label: "Monthly", price: 800 },
    ],
    amenities: [
      "High-speed Internet",
      "Dev Tools",
      "Server Room",
      "3D Printer",
      "VR Setup",
      "Gaming Area",
      "Pitch Room",
      "Investor Network",
      "Tech Support",
    ],
    website: "https://techspace.com",
    images: [
      "/placeholder.svg?height=400&width=600&query=tech space modern office with multiple monitors",
      "/placeholder.svg?height=400&width=600&query=tech space server room",
      "/placeholder.svg?height=400&width=600&query=tech space 3d printer area",
      "/placeholder.svg?height=400&width=600&query=tech space gaming lounge",
      "/placeholder.svg?height=400&width=600&query=tech space pitch presentation room",
      "/placeholder.svg?height=400&width=600&query=tech space collaborative coding area",
    ],
  },
  {
    id: "green-office",
    name: "Green Office",
    location: "Subiaco",
    state: "NSW",
    address: "321 Eco Lane, Subiaco, Sydney",
    description:
      "An environmentally conscious coworking space featuring sustainable design and eco-friendly practices. Perfect for environmentally minded professionals who want to work in a space that aligns with their values.",
    pricing: [
      { label: "Daily", price: 30 },
      { label: "Monthly", price: 550 },
    ],
    amenities: [
      "Solar Power",
      "Recycling",
      "Plant Walls",
      "Organic Coffee",
      "Bike Racks",
      "Composting",
      "Natural Materials",
      "Air Purification",
      "Wellness Room",
    ],
    website: "https://greenoffice.com",
    images: [
      "/placeholder.svg?height=400&width=600&query=green office with living plant walls",
      "/placeholder.svg?height=400&width=600&query=green office solar panels and natural light",
      "/placeholder.svg?height=400&width=600&query=green office recycling and composting area",
      "/placeholder.svg?height=400&width=600&query=green office wellness meditation room",
      "/placeholder.svg?height=400&width=600&query=green office organic coffee bar",
      "/placeholder.svg?height=400&width=600&query=green office bike storage area",
    ],
  },
  {
    id: "business-center",
    name: "Business Center",
    location: "West Perth",
    state: "WA",
    address: "654 Corporate Blvd, West Perth, WA",
    description:
      "A professional business environment designed for established companies and serious entrepreneurs. Features premium amenities and services to support your business growth and professional image.",
    pricing: [
      { label: "Daily", price: 55 },
      { label: "Weekly", price: 275 },
      { label: "Monthly", price: 1000 },
    ],
    amenities: [
      "Concierge",
      "Mail Service",
      "Board Rooms",
      "Video Conf",
      "Catering",
      "Valet Parking",
      "Business Lounge",
      "Admin Support",
      "Legal Services",
    ],
    website: "https://businesscenter.com",
    images: [
      "/placeholder.svg?height=400&width=600&query=business center executive boardroom",
      "/placeholder.svg?height=400&width=600&query=business center professional lobby",
      "/placeholder.svg?height=400&width=600&query=business center video conference room",
      "/placeholder.svg?height=400&width=600&query=business center business lounge",
      "/placeholder.svg?height=400&width=600&query=business center private offices",
      "/placeholder.svg?height=400&width=600&query=business center reception area",
    ],
  },
  {
    id: "makers-lab",
    name: "Makers Lab",
    location: "Fremantle",
    state: "SA",
    address: "987 Workshop St, Fremantle, Adelaide",
    description:
      "A hands-on workspace for makers, inventors, and craftspeople. Equipped with tools and equipment for prototyping, manufacturing, and bringing your ideas to life in a collaborative maker community.",
    pricing: [
      { label: "Daily", price: 40 },
      { label: "Weekly", price: 200 },
      { label: "Monthly", price: 750 },
    ],
    amenities: [
      "3D Printers",
      "Laser Cutter",
      "Wood Shop",
      "Electronics Lab",
      "Welding",
      "Tool Library",
      "Material Storage",
      "Safety Training",
      "Project Space",
    ],
    website: "https://makerslab.com",
    images: [
      "/placeholder.svg?height=400&width=600&query=makers lab with 3d printers and tools",
      "/placeholder.svg?height=400&width=600&query=makers lab wood workshop area",
      "/placeholder.svg?height=400&width=600&query=makers lab electronics and soldering station",
      "/placeholder.svg?height=400&width=600&query=makers lab laser cutting machine",
      "/placeholder.svg?height=400&width=600&query=makers lab welding and metalwork area",
      "/placeholder.svg?height=400&width=600&query=makers lab project showcase area",
    ],
  },
  {
    id: "quiet-corner",
    name: "Quiet Corner",
    location: "Mount Lawley",
    state: "TAS",
    address: "147 Peaceful Ave, Mount Lawley, Hobart",
    description:
      "A serene and focused workspace designed for deep work and concentration. Perfect for writers, researchers, and professionals who need a distraction-free environment to do their best work.",
    pricing: [
      { label: "Daily", price: 25 },
      { label: "Weekly", price: 125 },
      { label: "Monthly", price: 450 },
    ],
    amenities: [
      "Silent Zones",
      "Library",
      "Study Pods",
      "Noise Control",
      "Meditation Room",
      "Tea Station",
      "Comfortable Seating",
      "Natural Light",
      "Book Exchange",
    ],
    website: "https://quietcorner.com",
    images: [
      "/placeholder.svg?height=400&width=600&query=quiet corner library style workspace",
      "/placeholder.svg?height=400&width=600&query=quiet corner individual study pods",
      "/placeholder.svg?height=400&width=600&query=quiet corner meditation and wellness room",
      "/placeholder.svg?height=400&width=600&query=quiet corner comfortable reading area",
      "/placeholder.svg?height=400&width=600&query=quiet corner tea and refreshment station",
      "/placeholder.svg?height=400&width=600&query=quiet corner natural light workspace",
    ],
  },
  {
    id: "social-space",
    name: "Social Space",
    location: "Leederville",
    state: "NSW",
    address: "258 Community Rd, Leederville, Sydney",
    description:
      "A vibrant community-focused coworking space that emphasizes networking, collaboration, and social interaction. Perfect for entrepreneurs and freelancers who thrive in a social environment.",
    pricing: [
      { label: "Daily", price: 35 },
      { label: "Weekly", price: 175 },
      { label: "Monthly", price: 625 },
    ],
    amenities: [
      "Networking Events",
      "Community Kitchen",
      "Game Area",
      "Social Lounge",
      "Event Hosting",
      "Mentorship",
      "Skill Sharing",
      "Happy Hours",
      "Collaboration Tools",
    ],
    website: "https://socialspace.com",
    images: [
      "/placeholder.svg?height=400&width=600&query=social space community kitchen and dining",
      "/placeholder.svg?height=400&width=600&query=social space networking event area",
      "/placeholder.svg?height=400&width=600&query=social space game and recreation room",
      "/placeholder.svg?height=400&width=600&query=social space collaborative work area",
      "/placeholder.svg?height=400&width=600&query=social space social lounge seating",
      "/placeholder.svg?height=400&width=600&query=social space event and presentation space",
    ],
  },
  {
    id: "startup-garage",
    name: "Startup Garage",
    location: "Victoria Park",
    state: "VIC",
    address: "369 Innovation Dr, Victoria Park, Melbourne",
    description:
      "A dynamic startup-focused workspace designed for early-stage companies and entrepreneurs. Features flexible spaces, mentorship programs, and access to investor networks to help your startup succeed.",
    pricing: [
      { label: "Daily", price: 50 },
      { label: "Weekly", price: 250 },
      { label: "Monthly", price: 900 },
    ],
    amenities: [
      "Pitch Practice",
      "Investor Access",
      "Mentorship",
      "Flexible Desks",
      "Growth Programs",
      "Demo Days",
      "Legal Support",
      "Accounting Help",
      "Startup Library",
    ],
    website: "https://startupgarage.com",
    images: [
      "/placeholder.svg?height=400&width=600&query=startup garage pitch practice room",
      "/placeholder.svg?height=400&width=600&query=startup garage flexible workspace",
      "/placeholder.svg?height=400&width=600&query=startup garage mentorship meeting area",
      "/placeholder.svg?height=400&width=600&query=startup garage demo day presentation space",
      "/placeholder.svg?height=400&width=600&query=startup garage collaborative team area",
      "/placeholder.svg?height=400&width=600&query=startup garage startup resource library",
    ],
  },
]

export function getWorkspaceById(id: string): Workspace | undefined {
  return workspaces.find((workspace) => workspace.id === id)
}

export function getAllWorkspaces(): Workspace[] {
  return workspaces
}

export function getUniqueStates(): string[] {
  const states = workspaces.map((workspace) => workspace.state)
  const uniqueStates = Array.from(new Set(states))
  return uniqueStates.sort() // Sort alphabetically
}

export function getWorkspacesByState(state: string | null): Workspace[] {
  if (!state || state === "All states") {
    return workspaces
  }
  return workspaces.filter((workspace) => workspace.state === state)
}
