"use client"

import { useActionState } from "react"
import { submitNook } from "@/app/actions/submit-nook"
import { YellowButton } from "@/components/ui/yellow-button"

export function SubmitContent() {
  const [state, action, isPending] = useActionState(submitNook, null)

  return (
    <section className="py-3 px-3 border-l border-r border-dashed border-[#222222]/25">
      <div className="mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          {/* Form Panel - Left Side */}
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
                  Submit a Nook
                </h1>
                <p className="text-[#672eec] text-lg">Help us grow the coworking community</p>
              </div>

              {/* Divider */}
              <div className="border-t border-dashed border-[#222222]/25"></div>

              {/* Description */}
              <div>
                <p className="text-[#222222] text-lg leading-relaxed mb-4">
                  Know of a great coworking space that's not listed on Nookbase? We'd love to hear about it! Share the
                  details with us and help fellow remote workers discover amazing new places to be productive.
                </p>
                <p className="text-[#222222] text-lg leading-relaxed">
                  Whether it's a hidden gem in your neighborhood or a popular spot that deserves more recognition, every
                  suggestion helps make our directory more comprehensive and useful for the community.
                </p>
              </div>

              {/* Divider */}
              <div className="border-t border-dashed border-[#222222]/25"></div>

              {/* Form */}
              <form action={action} className="space-y-6">
                <div>
                  <label htmlFor="spaceName" className="block text-lg font-medium text-[#222222] mb-2">
                    Space Name
                  </label>
                  <input
                    type="text"
                    id="spaceName"
                    name="spaceName"
                    required
                    disabled={isPending}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#67ad42] focus:border-transparent transition-all duration-200 ease-smooth disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="Enter the name of the coworking space"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-lg font-medium text-[#222222] mb-2">
                    Tell us more
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    disabled={isPending}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#67ad42] focus:border-transparent transition-all duration-200 ease-smooth disabled:opacity-50 disabled:cursor-not-allowed resize-none"
                    placeholder="Share details about the space - location, what makes it special, amenities, atmosphere, or anything else that would help us understand why it's a great addition to Nookbase..."
                  />
                </div>

                {/* Submit Button */}
                <div>
                  <YellowButton type="submit" disabled={isPending} className="w-full h-12">
                    {isPending ? "Submitting..." : "Submit Nook"}
                  </YellowButton>
                </div>
              </form>

              {/* Success/Error Message */}
              {state && (
                <div className="mt-4">
                  <div
                    className={`p-4 rounded-lg ${
                      state.success
                        ? "bg-green-50 border border-green-200 text-green-800"
                        : "bg-red-50 border border-red-200 text-red-800"
                    }`}
                  >
                    <p className="text-sm font-medium">{state.message}</p>
                  </div>
                </div>
              )}

              {/* Divider */}
              <div className="border-t border-dashed border-[#222222]/25"></div>

              {/* Additional Info */}
              <div>
                <h2 className="text-2xl font-bold text-[#222222] mb-3" style={{ letterSpacing: "-0.02em" }}>
                  What happens next?
                </h2>
                <div className="space-y-3">
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
                      <h3 className="font-medium text-[#222222] mb-1">Review Process</h3>
                      <p className="text-[#222222]/80">
                        We'll review your submission and research the space to ensure it meets our quality standards
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
                      <h3 className="font-medium text-[#222222] mb-1">Space Addition</h3>
                      <p className="text-[#222222]/80">
                        If approved, we'll add the space to our directory with full details and photos
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
                      <h3 className="font-medium text-[#222222] mb-1">Community Impact</h3>
                      <p className="text-[#222222]/80">
                        Your contribution helps fellow remote workers discover great new spaces to work
                      </p>
                    </div>
                  </div>
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
