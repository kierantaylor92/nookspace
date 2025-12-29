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
    amenities: ["Fast WiFi", "24/7 Access", "Kitchenette", "Free Parking", "Event Space", "Bike Storage"],
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
      "Riff stands out as Perth's first coworking space and remains a hub for startups, freelancers, and small teams. It offers flexible coworking, resident desks, and private offices, all with access to a vibrant, supportive community and exclusive member benefits like business discounts and startup programs. Amenities include a podcast studio, event space, high-speed WiFi, and regular networking events. Riff's strong community focus and founder-friendly environment are major draws, though its popularity may mean busier common areas.",
    pricing: [
      { label: "Lite", price: 250 },
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
      "/images/riff-01.jpg",
      "/images/riff-02.jpg",
      "/images/riff-03.jpg",
      "/images/riff-04.jpg",
      "/images/riff-05.jpg",
      "/images/riff-06.jpg",
    ],
  },
  {
    id: "fern",
    name: "Fern",
    location: "Perth CBD",
    state: "WA",
    address: "79 St Georges Terrace, Perth, WA",
    description:
      "Fern delivers a boutique coworking experience in the heart of Perth's CBD, designed for professionals and growing teams seeking premium amenities. With private offices, resident desks, a high-tech boardroom, and a stylish lounge, Fern is ideal for those who value design and comfort. Members enjoy access to Spacecubed's broader perks and local business discounts.",
    pricing: [
      { label: "Lite", price: 250 },
      { label: "Part time", price: 350 },
      { label: "Full time", price: 450 },
    ],
    amenities: ["Meeting Rooms", "Lockerd", "Kitchen", "Meditation Room", "Phone Booths", "Free WiFi"],
    website: "https://spacecubed.com/space/fern/",
    images: [
      "/images/fern-1.jpg",
      "/images/fern-2.jpg",
      "/images/fern-3.jpg",
      "/images/fern-4.jpg",
      "/images/fern-5.jpg",
      "/images/fern-6.jpg",
      "/images/fern-7.jpg",
    ],
  },
  {
    id: "cleaver-street",
    name: "Cleaver Street",
    location: "West Perth",
    state: "WA",
    address: "14 Cleaver Street, West Perth",
    description:
      "Cleaver Street & Co. is a versatile coworking and event space in West Perth, known for its industrial charm, abundant natural light, and lush greenery. The venue is popular for both coworking and hosting events, offering WiFi, conference call facilities, projectors, and air conditioning. The open layout supports creativity and collaboration.",
    pricing: [{ label: "Daily", price: 40 }],
    amenities: ["Free parking", "Fast Wifi", "Barista coffee", "Meeting rooms", "Natural light", "Food"],
    website: "https://cleaverstreet.com.au/",
    images: [
      "/images/cleaver-1.jpg",
      "/images/cleaver-2.jpg",
      "/images/cleaver-3.jpg",
      "/images/cleaver-4.jpg",
      "/images/cleaver-5.jpg",
      "/images/cleaver-6.jpg",
    ],
  },
  {
    id: "wework-perth",
    name: "WeWork Perth",
    location: "Perth CBD",
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
      "Barista Coffee",
      "Meeting rooms",
      "Onsite staff",
    ],
    website: "https://www.wework.com/buildings/152-st-georges-terrace--perth--WA",
    images: [
      "/images/wework-1.jpg",
      "/images/wework-2.jpg",
      "/images/wework-3.jpg",
      "/images/wework-4.jpg",
      "/images/wework-5.jpg",
      "/images/wework-6.jpg",
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
    amenities: ["Communal Desks", "Lockable Studios", "Free Wifi", "Community Vibe"],
    website: "https://westendworkers.com/",
    images: ["/images/wew-1.jpg", "/images/wew-2.jpg", "/images/wew-3.jpg"],
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
      { label: "Lite", price: 250 },
      { label: "Part time", price: 350 },
      { label: "Full time", price: 450 },
    ],
    amenities: [
      "24/7 Access",
      "Free WiFi",
      "Community Kitchen",
      "Locker Storage",
      "Phone Booths",
      "Bike Room",
      "Free Printing",
      "Meeting Rooms",
      "Showers",
    ],
    website: "https://spacecubed.com/space/flux/",
    images: [
      "/images/flux-1.jpg",
      "/images/flux-2.jpg",
      "/images/flux-3.jpg",
      "/images/flux-4.jpg",
      "/images/flux-5.jpg",
      "/images/flux-6.jpg",
    ],
  },
  {
    id: "claisebrook-design-community",
    name: "Claisebrook Design Co.",
    location: "Claisebrook",
    state: "WA",
    address: "25 Gladstone Street, Perth 6000 Western Australia",
    description:
      "A vibrant community-focused coworking space that emphasizes networking, collaboration, and social interaction. Perfect for entrepreneurs and freelancers who thrive in a social environment.",
    pricing: [
      { label: "Desk", price: 430 },
      { label: "Office", price: 1635 },
    ],
    amenities: [
      "Air Con",
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
    images: ["/images/cbdc-1.jpg", "/images/cbdc-2.jpg", "/images/cbdc-3.jpg", "/images/cbdc-4.jpg"],
  },
  {
    id: "spaces-wentworth",
    name: "Spaces Wentworth",
    location: "Perth CBD",
    state: "WA",
    address: "300 Murray Street, Level 2 East, The Wentworth Building, Perth 6000, WA",
    description:
      "Aside from private offices, open meeting rooms and coworking areas, our super-fast Wi-Fi and smiling staff ensure that you're always at peak productivity. Located right above the Raine Square retail precinct, this bustling retail hub hosts a wide variety of eateries, meaning no two lunch breaks ever have to be the same. Just across the road is Perth Underground Station, giving you direct access to the city's fantastic transport network.",
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
      "/images/spaces-1.jpg",
      "/images/spaces-2.jpg",
      "/images/spaces-3.jpg",
      "/images/spaces-4.jpg",
      "/images/spaces-5.jpg",
    ],
  },
  {
    id: "hub-australia-melbourne",
    name: "Hub Australia Melbourne",
    location: "Melbourne CBD",
    state: "VIC",
    address: "Level 2, 31 Queen Street, Melbourne VIC 3000",
    description:
      "Hub Australia Melbourne is a premium coworking space in the heart of the CBD, designed for entrepreneurs, startups, and established businesses. Located in a heritage-listed building, it combines historic charm with modern amenities. The space features flexible hot desks, dedicated desks, private offices, and meeting rooms with state-of-the-art technology. Hub Australia is known for its vibrant community events, networking opportunities, and business support programs that help members grow their ventures.",
    pricing: [
      { label: "Hot Desk", price: "TBC" },
      { label: "Dedicated Desk", price: "TBC" },
      { label: "Private Office", price: "TBC" },
    ],
    amenities: [
      "High-speed WiFi",
      "Meeting Rooms",
      "Phone Booths",
      "Kitchen & Coffee",
      "Printing & Scanning",
      "Event Space",
      "24/7 Access",
      "Bike Storage",
      "Showers",
    ],
    website: "https://www.hubaustralia.com/melbourne/",
    images: [
      "/images/hub-melbourne-1.jpg",
      "/images/hub-melbourne-2.jpg",
      "/images/hub-melbourne-3.jpg",
      "/images/hub-melbourne-4.jpg",
    ],
  },
  {
    id: "wework-collins-street",
    name: "WeWork Collins Street",
    location: "Melbourne CBD",
    state: "VIC",
    address: "367 Collins Street, Melbourne VIC 3000",
    description:
      "WeWork Collins Street occupies a stunning Art Deco building in Melbourne's prestigious business district. This flagship location offers a sophisticated coworking environment with panoramic city views, premium amenities, and a diverse community of professionals. The space features modern workstations, private offices, meeting rooms, and social areas designed to foster collaboration and productivity. Members enjoy access to global WeWork locations, networking events, and business services.",
    pricing: [
      { label: "Hot Desk", price: "TBC" },
      { label: "Dedicated Desk", price: "TBC" },
      { label: "Private Office", price: "TBC" },
    ],
    amenities: [
      "Premium WiFi",
      "Meeting Rooms",
      "Phone Booths",
      "Barista Coffee",
      "Printing Services",
      "Event Spaces",
      "Wellness Room",
      "Bike Storage",
      "Onsite Staff",
    ],
    website: "https://www.wework.com/buildings/collins-street--melbourne",
    images: [
      "/images/wework-collins-1.jpg",
      "/images/wework-collins-2.jpg",
      "/images/wework-collins-3.jpg",
      "/images/wework-collins-4.jpg",
    ],
  },
  {
    id: "the-commons-collingwood",
    name: "The Commons Collingwood",
    location: "Collingwood",
    state: "VIC",
    address: "85 Rokeby Street, Collingwood VIC 3066",
    description:
      "The Commons Collingwood is a creative coworking space housed in a beautifully restored heritage building. Known for its artistic community and collaborative atmosphere, it attracts designers, creatives, and innovative businesses. The space features exposed brick walls, high ceilings, and abundant natural light, creating an inspiring work environment. With flexible membership options, event spaces, and a strong focus on sustainability, The Commons is perfect for those seeking a unique and environmentally conscious workspace.",
    pricing: [
      { label: "Part-time", price: "TBC" },
      { label: "Full-time", price: "TBC" },
      { label: "Private Office", price: "TBC" },
    ],
    amenities: [
      "High-speed WiFi",
      "Meeting Rooms",
      "Kitchen Facilities",
      "Event Space",
      "Printing Access",
      "Bike Storage",
      "Natural Light",
      "Community Garden",
      "Sustainability Focus",
    ],
    website: "https://thecommons.com.au/collingwood/",
    images: [
      "/images/commons-collingwood-1.jpg",
      "/images/commons-collingwood-2.jpg",
      "/images/commons-collingwood-3.jpg",
      "/images/commons-collingwood-4.jpg",
    ],
  },
  {
    id: "inspire9-richmond",
    name: "Inspire9 Richmond",
    location: "Richmond",
    state: "VIC",
    address: "41 Stewart Street, Richmond VIC 3121",
    description:
      "Inspire9 Richmond is Melbourne's original startup hub, fostering innovation and entrepreneurship since 2009. Located in a converted warehouse, this coworking space combines industrial aesthetics with modern functionality. It's home to a diverse community of startups, freelancers, and established businesses working on cutting-edge projects. The space offers flexible workstations, private offices, meeting rooms, and regular events including pitch nights, workshops, and networking sessions that make it a cornerstone of Melbourne's startup ecosystem.",
    pricing: [
      { label: "Hot Desk", price: "TBC" },
      { label: "Dedicated Desk", price: "TBC" },
      { label: "Private Office", price: "TBC" },
    ],
    amenities: [
      "Fast WiFi",
      "Meeting Rooms",
      "Phone Booths",
      "Kitchen & Coffee",
      "Printing Facilities",
      "Event Space",
      "Startup Programs",
      "Mentorship",
      "Networking Events",
    ],
    website: "https://inspire9.com/richmond/",
    images: [
      "/images/inspire9-richmond-1.jpg",
      "/images/inspire9-richmond-2.jpg",
      "/images/inspire9-richmond-3.jpg",
      "/images/inspire9-richmond-4.jpg",
    ],
  },
  {
    id: "york-butter-factory",
    name: "York Butter Factory",
    location: "Richmond",
    state: "VIC",
    address: "2-12 Bray Street, Richmond VIC 3121",
    description:
      "York Butter Factory is a premium coworking space housed in a heritage-listed former butter factory. This unique venue combines historical character with contemporary design, featuring exposed brick walls, timber beams, and industrial fixtures. The space caters to established businesses, creative professionals, and growing teams who appreciate quality design and a professional atmosphere. With flexible workspace options, state-of-the-art meeting facilities, and a focus on community building, it's become a sought-after location for Melbourne's business community.",
    pricing: [
      { label: "Hot Desk", price: "TBC" },
      { label: "Dedicated Desk", price: "TBC" },
      { label: "Private Office", price: "TBC" },
    ],
    amenities: [
      "Premium WiFi",
      "Meeting Rooms",
      "Phone Booths",
      "Barista Coffee",
      "Printing Services",
      "Event Facilities",
      "Heritage Building",
      "Professional Atmosphere",
      "Community Events",
    ],
    website: "https://yorkbutterfactory.com/",
    images: [
      "/images/york-butter-1.jpg",
      "/images/york-butter-2.jpg",
      "/images/york-butter-3.jpg",
      "/images/york-butter-4.jpg",
    ],
  },
  {
    id: "collective-campus-melbourne",
    name: "Collective Campus Melbourne",
    location: "Melbourne CBD",
    state: "VIC",
    address: "Level 1, 11 York Street, Sydney NSW 2000",
    description:
      "Collective Campus Melbourne is an innovation hub designed specifically for corporate innovation teams, startups, and entrepreneurs. This modern coworking space focuses on fostering collaboration between established companies and emerging startups. The facility features flexible workspaces, innovation labs, meeting rooms equipped with the latest technology, and event spaces for workshops and pitch sessions. With programs focused on corporate innovation, startup acceleration, and digital transformation, it's the perfect environment for forward-thinking professionals.",
    pricing: [
      { label: "Hot Desk", price: "TBC" },
      { label: "Dedicated Desk", price: "TBC" },
      { label: "Private Office", price: "TBC" },
    ],
    amenities: [
      "High-speed WiFi",
      "Innovation Labs",
      "Meeting Rooms",
      "Event Space",
      "Mentorship Programs",
      "Startup Acceleration",
      "Corporate Programs",
      "Kitchen Facilities",
      "Printing Access",
    ],
    website: "https://www.collectivecampus.io/melbourne",
    images: [
      "/images/collective-campus-1.jpg",
      "/images/collective-campus-2.jpg",
      "/images/collective-campus-3.jpg",
      "/images/collective-campus-4.jpg",
    ],
  },
  {
    id: "spaces-collins-square",
    name: "Spaces Collins Square",
    location: "Docklands",
    state: "VIC",
    address: "Level 25, 727 Collins Street, Docklands VIC 3008",
    description:
      "Spaces Collins Square offers a premium coworking experience with breathtaking views of Melbourne's skyline and Port Phillip Bay. Located on the 25th floor of a modern tower in Docklands, this space combines luxury with functionality. The contemporary design features open workspaces, private offices, meeting rooms, and social areas that encourage networking and collaboration. With its waterfront location, excellent transport links, and proximity to Melbourne's business district, it's ideal for professionals who want to work in style while enjoying spectacular views.",
    pricing: [
      { label: "Coworking", price: "TBC" },
      { label: "Dedicated Desk", price: "TBC" },
      { label: "Private Office", price: "TBC" },
    ],
    amenities: [
      "Premium WiFi",
      "Meeting Rooms",
      "Phone Booths",
      "Barista Coffee",
      "Panoramic Views",
      "Event Spaces",
      "Business Lounge",
      "Concierge Service",
      "Parking Available",
    ],
    website: "https://www.spacesworks.com/melbourne/collins-square/",
    images: [
      "/images/spaces-collins-1.jpg",
      "/images/spaces-collins-2.jpg",
      "/images/spaces-collins-3.jpg",
      "/images/spaces-collins-4.jpg",
    ],
  },
  {
    id: "the-hive-collingwood",
    name: "The Hive Collingwood",
    location: "Collingwood",
    state: "VIC",
    address: "Level 1, 18 Smith Street, Collingwood VIC 3066",
    description:
      "The Hive Collingwood is a boutique coworking space that emphasizes community, creativity, and collaboration. Located in the vibrant Smith Street precinct, it's surrounded by cafes, galleries, and creative businesses. The space features a warm, welcoming atmosphere with comfortable workstations, meeting rooms, and social areas designed to foster connections. The Hive is particularly popular among freelancers, small businesses, and creative professionals who value a supportive community environment and the energy of Collingwood's cultural scene.",
    pricing: [
      { label: "Part-time", price: "TBC" },
      { label: "Full-time", price: "TBC" },
      { label: "Private Office", price: "TBC" },
    ],
    amenities: [
      "Fast WiFi",
      "Meeting Rooms",
      "Kitchen Access",
      "Community Events",
      "Printing Facilities",
      "Bike Storage",
      "Creative Community",
      "Flexible Terms",
      "Local Partnerships",
    ],
    website: "https://thehivecollingwood.com.au/",
    images: [
      "/images/hive-collingwood-1.jpg",
      "/images/hive-collingwood-2.jpg",
      "/images/hive-collingwood-3.jpg",
      "/images/hive-collingwood-4.jpg",
    ],
  },
  {
    id: "studio-99-south-melbourne",
    name: "Studio 99 South Melbourne",
    location: "South Melbourne",
    state: "VIC",
    address: "99 Coventry Street, South Melbourne VIC 3205",
    description:
      "Studio 99 South Melbourne is a modern coworking space designed for professionals who value both productivity and work-life balance. Located in the trendy South Melbourne area, it offers easy access to the CBD while maintaining a more relaxed, community-focused atmosphere. The space features contemporary design, flexible workstations, private offices, and meeting rooms equipped with modern technology. With its emphasis on wellness, community events, and professional development, Studio 99 attracts a diverse mix of entrepreneurs, freelancers, and small businesses looking for a supportive work environment.",
    pricing: [
      { label: "Hot Desk", price: "TBC" },
      { label: "Dedicated Desk", price: "TBC" },
      { label: "Private Office", price: "TBC" },
    ],
    amenities: [
      "High-speed WiFi",
      "Meeting Rooms",
      "Phone Booths",
      "Kitchen & Coffee",
      "Wellness Programs",
      "Event Space",
      "Printing Access",
      "Community Focus",
      "Professional Development",
    ],
    website: "https://studio99.com.au/south-melbourne/",
    images: ["/images/studio99-1.jpg", "/images/studio99-2.jpg", "/images/studio99-3.jpg", "/images/studio99-4.jpg"],
  },
]

export function getWorkspaceById(id: string): Workspace | undefined {
  return workspaces.find((workspace) => workspace.id === id)
}

export function getAllWorkspaces(): Workspace[] {
  return workspaces.sort((a, b) => a.name.localeCompare(b.name))
}

export function getUniqueStates(): string[] {
  const states = workspaces.map((workspace) => workspace.state)
  const uniqueStates = Array.from(new Set(states))
  return uniqueStates.sort() // Sort alphabetically
}

export function getWorkspacesByState(state: string | null): Workspace[] {
  const filteredWorkspaces =
    !state || state === "All states" ? workspaces : workspaces.filter((workspace) => workspace.state === state)

  return filteredWorkspaces.sort((a, b) => a.name.localeCompare(b.name))
}
