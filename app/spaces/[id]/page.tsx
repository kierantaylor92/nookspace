import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ListingContent } from "@/components/listing-content"
import { getWorkspaceById } from "@/lib/workspaces"
import { notFound } from "next/navigation"
import { SubmitSection } from "@/components/submit-section"

export default async function SpaceDetailPage({ params }: { params: { id: string } }) {
  const space = getWorkspaceById(params.id)

  if (!space) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-[#F2F2F2]">
      <div className="max-w-none mx-auto px-6 min-h-screen">
        <Header />
        <main>
          <ListingContent space={space} />
          <SubmitSection />
        </main>
        <Footer />
      </div>
    </div>
  )
}
