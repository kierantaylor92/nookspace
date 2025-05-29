import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SubmitContent } from "@/components/submit-content"
import { SubmitSection } from "@/components/submit-section"

export default function SubmitPage() {
  return (
    <div className="min-h-screen bg-[#F2F2F2]">
      <div className="max-w-none mx-auto px-6 min-h-screen">
        <Header />
        <main>
          <SubmitContent />
          <SubmitSection />
        </main>
        <Footer />
      </div>
    </div>
  )
}
