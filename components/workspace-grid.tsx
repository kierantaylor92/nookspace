"use client"

import { useState, useMemo } from "react"
import Image from "next/image"
import Link from "next/link"
import { FilterRow } from "@/components/filter-row"
import { Pagination } from "@/components/pagination"
import { getAllWorkspaces, getWorkspacesByState } from "@/lib/workspaces"

const ITEMS_PER_PAGE = 9

export function WorkspaceGrid() {
  const [selectedState, setSelectedState] = useState<string | null>("All states")
  const [currentPage, setCurrentPage] = useState(1)

  const allWorkspaces = getAllWorkspaces()
  const filteredWorkspaces = getWorkspacesByState(selectedState)

  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
    const endIndex = startIndex + ITEMS_PER_PAGE
    return filteredWorkspaces.slice(startIndex, endIndex)
  }, [filteredWorkspaces, currentPage])

  const totalPages = Math.ceil(filteredWorkspaces.length / ITEMS_PER_PAGE)

  const handleStateChange = (state: string) => {
    setSelectedState(state)
    setCurrentPage(1)
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <>
      <FilterRow count={filteredWorkspaces.length} selectedState={selectedState} onStateChange={handleStateChange} />

      <section className="py-3 px-3 border-b border-l border-r border-dashed border-[#222222]/25">
        <div className="mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 items-stretch">
            {paginatedData.map((workspace, index) => (
              <Link key={workspace.id} href={`/spaces/${workspace.id}`} className="h-full">
                <div
                  className="group h-full flex flex-col bg-white rounded-lg overflow-hidden cursor-pointer px-4 pt-4 pb-4 transition-all duration-300 ease-smooth opacity-0 animate-fade-in hover:-translate-y-1"
                  style={{
                    boxShadow:
                      "0px 15px 4px 0px rgba(0, 0, 0, 0.00), 0px 9px 4px 0px rgba(0, 0, 0, 0.00), 0px 5px 3px 0px rgba(0, 0, 0, 0.02), 0px 2px 2px 0px rgba(0, 0, 0, 0.03), 0px 1px 1px 0px rgba(0, 0, 0, 0.03)",
                    animationDelay: `${index * 100}ms`,
                    animationFillMode: "forwards",
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
                  <div className="overflow-hidden rounded-lg mb-3">
                    <Image
                      src={workspace.images[0] || "/placeholder.svg"}
                      alt={`${workspace.name} ${workspace.location}`}
                      width={360}
                      height={202}
                      className="w-full aspect-video object-cover transition-transform duration-500 ease-smooth group-hover:scale-110"
                    />
                  </div>
                  <div>
                    <h3 className="text-[#00000A] font-medium text-base">
                      {workspace.name}{" "}
                      <span className="text-muted-foreground font-normal">
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

      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
    </>
  )
}
