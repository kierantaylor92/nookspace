import Image from "next/image"

export function HeroSection() {
  return (
    <section className="px-3 border-b border-l border-r border-dashed border-[#222222]/25">
      <div className="mx-auto">
        <div className="flex items-center">
          <div className="w-1/2 px-6 sm:px-12 md:px-16 lg:px-24">
            <h1 className="text-6xl font-bold text-[#67ad42] mb-4" style={{ letterSpacing: "-0.02em" }}>
              Nookspace.
            </h1>
            <p className="text-xl text-gray-600">Discover co-working spaces near you.</p>
          </div>

          <div className="w-1/2 flex justify-end">
            <Image
              src="/images/coworking-space-nook-eco-friendly-workspace-hero.jpg"
              alt="3D green leaf-shaped coworking space nook on grass representing eco-friendly workspace design"
              width={400}
              height={300}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
