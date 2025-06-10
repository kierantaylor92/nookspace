"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { FilterRow } from "@/components/filter-row"
import { getAllWorkspaces, getWorkspacesByState } from "@/lib/workspaces"

export function WorkspaceGrid() {
  const [selectedState, setSelectedState] = useState<string | null>("All states")
  const allWorkspaces = getAllWorkspaces()
  const filteredWorkspaces = getWorkspacesByState(selectedState)

  return (
    <>
      <FilterRow count={filteredWorkspaces.length} selectedState={selectedState} onStateChange={setSelectedState} />

      <section className="py-3 px-3 border-b border-l border-r border-dashed border-[#222222]/25">
        <div className="mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {filteredWorkspaces.map((workspace) => (
              <Link key={workspace.id} href={`/spaces/${workspace.id}`}>
                <div
                  className="bg-white rounded-lg overflow-hidden cursor-pointer p-4 transition-all duration-300 ease-smooth focus-within:ring-2 focus-within:ring-[#67ad42] focus-within:ring-offset-2"
                  style={{
                    boxShadow:
                      "0px 15px 4px 0px rgba(0, 0, 0, 0.00), 0px 9px 4px 0px rgba(0, 0, 0, 0.00), 0px 5px 3px 0px rgba(0, 0, 0, 0.02), 0px 2px 2px 0px rgba(0, 0, 0, 0.03), 0px 1px 1px 0px rgba(0, 0, 0, 0.03)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0px 29px 8px 0px rgba(0, 0, 0, 0.00), 0px 19px 8px 0px rgba(0, 0, 0, 0.01), 0px 11px 6px 0px rgba(0, 0, 0, 0.02), 0px 5px 5px 0px rgba(0, 0, 0, 0.03), 0px 1px 3px 0px rgba(0, 0, 0, 0.04)"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0px 15px 4px 0px rgba(0, 0, 0, 0.00), 0px 9px 4px 0px rgba(0, 0, 0, 0.00), 0px 5px 3px 0px rgba(0, 0, 0, 0.02), 0px 2px 2px 0px rgba(0, 0, 0, 0.03), 0px 1px 1px 0px rgba(0, 0, 0, 0.03)"
                  }}
                >
                  <Image
                    src={workspace.images[0] || "/placeholder.svg"}
                    alt={`Interior view of ${workspace.name} coworking space in ${workspace.location}, ${workspace.state}`}
                    width={360}
                    height={202}
                    className="w-full aspect-video object-cover rounded-lg mb-4"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
                  />
                  <div>
                    <h3 className="text-[#00000A] font-medium text-base transition-colors duration-200 ease-smooth hover:text-black">
                      {workspace.name}{" "}
                      <span className="text-[#00000A]/72 font-normal">
                        {workspace.location}, {workspace.state}
                      </span>
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
