export function AboutContent() {
  return (
    <section className="py-3 px-3 border-l border-r border-dashed border-[#222222]/25">
      <div className="mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          {/* Information Panel - Left Side */}
          <div className="lg:sticky lg:top-12 lg:h-fit">
            <div
              className="bg-white rounded-lg p-6 space-y-6"
              style={{
                boxShadow:
                  "0px 0px 0px 1px rgba(0, 0, 0, 0.04), 0px 1px 1px -0.5px rgba(0, 0, 0, 0.04), 0px 3px 3px -1.5px rgba(0, 0, 0, 0.04), 0px 6px 6px -3px rgba(0, 0, 0, 0.04), 0px 12px 12px -6px rgba(0, 0, 0, 0.04), 0px 24px 24px -12px rgba(0, 0, 0, 0.04)",
              }}
            >
              {/* Header */}
              <div>
                <h1 className="text-4xl font-bold text-[#222222] mb-2" style={{ letterSpacing: "-0.02em" }}>
                  About Nookspace
                </h1>
                <p className="text-[#672eec] text-lg">Connecting you with the perfect workspace</p>
              </div>

              {/* Divider */}
              <div className="border-t border-dashed border-[#222222]/25"></div>

              {/* Purpose */}
              <div>
                <h2 className="text-2xl font-bold text-[#222222] mb-3" style={{ letterSpacing: "-0.02em" }}>
                  Our Purpose
                </h2>
                <p className="text-[#222222] text-lg leading-relaxed mb-4">
                  Nookspace is a curated directory of coworking spaces designed to help remote workers, freelancers, and
                  digital nomads find their perfect workspace. We believe that the right environment can dramatically
                  improve productivity, creativity, and well-being.
                </p>
                <p className="text-[#222222] text-lg leading-relaxed">
                  Our mission is to make discovering and accessing quality coworking spaces as simple as possible,
                  whether you're looking for a quiet corner to focus, a collaborative environment to network, or a
                  professional space to meet clients.
                </p>
              </div>

              {/* Divider */}
              <div className="border-t border-dashed border-[#222222]/25"></div>

              {/* Features */}
              <div>
                <h2 className="text-2xl font-bold text-[#222222] mb-3" style={{ letterSpacing: "-0.02em" }}>
                  What We Offer
                </h2>
                <div className="grid grid-cols-1 gap-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-4 h-4 rounded-full bg-[#67ad42] flex items-center justify-center mt-1">
                      <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-[#222222] mb-1">Curated Listings</h3>
                      <p className="text-[#222222]/80">
                        Hand-picked coworking spaces with detailed information and honest reviews
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-4 h-4 rounded-full bg-[#67ad42] flex items-center justify-center mt-1">
                      <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-[#222222] mb-1">Location-Based Search</h3>
                      <p className="text-[#222222]/80">Find spaces by state and city to discover options near you</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-4 h-4 rounded-full bg-[#67ad42] flex items-center justify-center mt-1">
                      <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-[#222222] mb-1">Community Driven</h3>
                      <p className="text-[#222222]/80">Submit new spaces and help grow the coworking community</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-dashed border-[#222222]/25"></div>

              {/* Colophon */}
              <div>
                <h2 className="text-2xl font-bold text-[#222222] mb-3" style={{ letterSpacing: "-0.02em" }}>
                  Colophon
                </h2>
                <div className="space-y-3">
                  <div>
                    <h3 className="font-medium text-[#222222] mb-1">Design & Development</h3>
                    <p className="text-[#222222]/80 font-mono text-sm">
                      Built with Next.js, TypeScript, and Tailwind CSS
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium text-[#222222] mb-1">Typography</h3>
                    <p className="text-[#222222]/80 font-mono text-sm">
                      Public Sans for interface, IBM Plex Mono for data
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium text-[#222222] mb-1">Hosting</h3>
                    <p className="text-[#222222]/80 font-mono text-sm">
                      Deployed on Vercel with continuous integration
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium text-[#222222] mb-1">Version</h3>
                    <p className="text-[#222222]/80 font-mono text-sm">v1.0.0 - January 2025</p>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-dashed border-[#222222]/25"></div>

              {/* Contact */}
              <div>
                <h2 className="text-2xl font-bold text-[#222222] mb-3" style={{ letterSpacing: "-0.02em" }}>
                  Get In Touch
                </h2>
                <p className="text-[#222222] text-lg leading-relaxed mb-4">
                  Have a suggestion for a new space or feedback about the site? We'd love to hear from you.
                </p>
                <div className="flex items-center space-x-2">
                  <span className="text-[#672eec] text-lg font-mono">hello@nookspace.com</span>
                </div>
              </div>
            </div>
          </div>

          {/* Empty Right Column */}
          <div className="hidden lg:block">{/* Intentionally empty to match listing layout */}</div>
        </div>
      </div>
    </section>
  )
}
