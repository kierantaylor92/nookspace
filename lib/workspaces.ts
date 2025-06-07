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
    id: "riff",
    name: "Riff",
    location: "Perth CBD",
    state: "WA",
    address: "45 St George's Terrace, Perth, WA",
    description:
      "Riff stands out as Perth’s first coworking space and remains a hub for startups, freelancers, and small teams. It offers flexible coworking, resident desks, and private offices, all with access to a vibrant, supportive community and exclusive member benefits like business discounts and startup programs. Amenities include a podcast studio, event space, high-speed WiFi, and regular networking events. Riff’s strong community focus and founder-friendly environment are major draws, though its popularity may mean busier common areas.",
    pricing: [
      { label: "Lite", price:  },
      { label: "Part time", price: 350 },
      { label: "Full time", price: 450 },
    ],
    amenities: [
      "24/7 Access",
      "Meeting Rooms",
      "Community Kitchen",
      "Locker Storage",
      "Showers",
      "Bike Room",
      "Free Printing",
      "Meditation Room",
      "Podcast Studio",
    ],
    website: "https://spacecubed.com/space/riff/",
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
    id: "fern",
    name: "Fern, powered by Spacecubed",
    location: "Perth CBD",
    state: "WA",
    address: "79 St Georges Terrace,
Perth, WA",
    description:
      "Fern delivers a boutique coworking experience in the heart of Perth’s CBD, designed for professionals and growing teams seeking premium amenities. With private offices, resident desks, a high-tech boardroom, and a stylish lounge, Fern is ideal for those who value design and comfort. Members enjoy access to Spacecubed’s broader perks and local business discounts. ",
    pricing: [
      { label: "Lite", price:  },
      { label: "Part time", price: 350 },
      { label: "Full time", price: 450 },
    ],
    amenities: [
      "Meeting Rooms",
      "Locker Storage",
      "Community Kitchen",
      "Meditation Room",
      "Private Phone Booths",
      "Free WiFi",
    ],
    website: "https://spacecubed.com/space/fern/",
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
    id: "cleaver-street",
    name: "Cleaver Street & Co.",
    location: "Northbridge",
    state: "WA",
    address: "14 Cleaver Street, West Perth",
    description:
      "Cleaver Street & Co. is a versatile coworking and event space in West Perth, known for its industrial charm, abundant natural light, and lush greenery. The venue is popular for both coworking and hosting events, offering WiFi, conference call facilities, projectors, and air conditioning. The open layout supports creativity and collaboration. ",
    pricing: [
      { label: "Daily", price: 0 },
    ],
    amenities: [
      "Free parking",
      "High speed wifi",
      "Barista coffee",
      "Meeting room hire",
      "Natural light",
      "Food",
    ],
    website: "https://cleaverstreet.com.au/",
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
    id: "wework-perth",
    name: "Business Center",
    location: "WeWork St Georges Terrace",
    state: "WA",
    address: "152 St Georges Terrace Perth, WA",
    description:
      "Situated in an iconic complex at the heart of the city, our coworking space in Central Park Tower is the ideal launchpad for your next venture. Your team will stay energized and collaborative in our light-filled lounges, while agile workstations and fully equipped conference rooms help fuel focus. Commuting is a breeze with the Perth Underground Station and the ferries at Elizabeth Quay nearby. After work, choose between waterfront cocktails in East Perth and the Botanic Gardens in West Perth—this location puts you at the center of it all. Make your mark in this vibrant hub of business at WeWork 152 St Georges Terrace.",
    pricing: [
      { label: "Daily", price: 55 },
      { label: "Monthly", price: 350 },
    ],
    amenities: [
      "Parking",
      "Outdoor Space",
      "Bike storage",
      "Parent's room",
      "Wellness room",
      "Showers",
      "Free Barista Coffee",
      "Meeting rooms",
      "Onsite staff",
    ],
    website: "https://www.wework.com/buildings/152-st-georges-terrace--perth--WA",
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
    id: "west-end-workers",
    name: "West End Workers",
    location: "Fremantle",
    state: "WA",
    address: "Unit 5/39 Cliff St, Fremantle WA 6160",
    description:
      "West End Workers Studio in Fremantle is a welcoming, LGBTQ+ friendly coworking space with a strong emphasis on inclusivity and community. It features gender-neutral restrooms and is recognized as a transgender safe space. The intimate environment is perfect for those seeking a supportive, diverse community. While it may not offer as many high-tech amenities as larger spaces, its focus on safety and acceptance is a significant differentiator.",
    pricing: [
      { label: "Desk", price: 70 },
      { label: "Studio", price: 120 },
    ],
    amenities: [
      "Communal Desks",
      "Gender Neutral Bathrooms",
      "Lockable Studios",
      "Free Wifi",
      "Community Vibe",
    ],
    website: "https://westendworkers.com/",
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
    id: "flux",
    name: "Flux",
    location: "Perth CBD",
    state: "WA",
    address: "191 St Georges Terrace, Perth, WA",
    description:
      "Spacecubed is a leading coworking provider in Perth, offering a range of spaces and services for startups, entrepreneurs, and established businesses. With a strong focus on networking, business support, and event hosting, Spacecubed is perfect for those looking to grow within a dynamic community. Features include flexible memberships, event spaces, business resources, and access to a broad network. Its central location and reputation make it a top choice, though it can be busy and competitive for resources.",
    pricing: [
      { label: "Lite", price:  },
      { label: "Part time", price: 350 },
      { label: "Full time", price: 450 },
    ],
    amenities: [
      "24/7 Access",
      "Free WiFi",
      "Community Kitchen",
      "Locker Storage",
      "Private Phone Booths",
      "Bike Room",
      "Free Printing",
      "Meeting Rooms",
      "Showers",
    ],
    website: "https://spacecubed.com/space/flux/",
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
    id: "claisebrook-design-community",
    name: "Claisebrook Design Community",
    location: "Claisebrook",
    state: "WA",
    address: "25 Gladstone Street, Perth 6000
Western Australia",
    description:
      "A vibrant community-focused coworking space that emphasizes networking, collaboration, and social interaction. Perfect for entrepreneurs and freelancers who thrive in a social environment.",
    pricing: [
      { label: "Desk", price: 430 },
      { label: "Office", price: 1,635 },
    ],
    amenities: [
      "Airconditioning",
      "Printing",
      "Café",
      "Mailbox",
      "Lockers",
      "Meeting Rooms",
      "Showers",
      "Boardroom",
      "Kitchen",
    ],
    website: "https://www.cbdc.co/",
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
    id: "spaces-wentworth",
    name: "Spaces – The Wenworth",
    location: "Perth CBD",
    state: "WA",
    address: "300 Murray Street, Level 2 East, The Wentworth Building, Perth 6000, WA",
    description:
      "Aside from private offices, open meeting rooms and coworking areas, our super-fast Wi-Fi and smiling staff ensure that you’re always at peak productivity. Located right above the Raine Square retail precinct, this bustling retail hub hosts a wide variety of eateries, meaning no two lunch breaks ever have to be the same. Just across the road is Perth Underground Station, giving you direct access to the city’s fantastic transport network.",
    pricing: [
      { label: "Coworking", price: 405 },
      { label: "Dedicated Desk", price: 629 },
      { label: "Office Space", price: 715 },
    ],
    amenities: [
      "3 Meeting Rooms",
      "Super fast Wi-Fi",
      "Showers",
      "3 Parking Spots",
      "Accessibility",
      "Breakout Areas",
      "80 Private Offices",
    ],
    website: "https://www.spacesworks.com/perth/the-wentworth/",
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
