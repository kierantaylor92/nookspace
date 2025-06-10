import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { WorkspaceGrid } from "@/components/workspace-grid"
import { SubmitSection } from "@/components/submit-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#F2F2F2]">
      <div className="max-w-none mx-auto px-6 min-h-screen">
        <Header />
        <main id="main-content" role="main">
          <HeroSection />
          <WorkspaceGrid />
          <SubmitSection />
        </main>
        <Footer />
      </div>
    </div>
  )
}
