import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AboutContent } from "@/components/about-content"
import { SubmitSection } from "@/components/submit-section"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#F2F2F2]">
      <div className="max-w-none mx-auto px-6 min-h-screen">
        <Header />
        <main>
          <AboutContent />
          <SubmitSection />
        </main>
        <Footer />
      </div>
    </div>
  )
}
