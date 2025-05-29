"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { getUniqueStates } from "@/lib/workspaces"

interface FilterRowProps {
  count: number
  selectedState: string | null
  onStateChange: (state: string) => void
}

export function FilterRow({ count, selectedState, onStateChange }: FilterRowProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const states = ["All states", ...getUniqueStates()]

  return (
    <div className="py-3 px-3 border-b border-l border-r border-dashed border-[#222222]/25">
      <div className="mx-auto flex items-center justify-between font-mono font-normal text-sm">
        <div className="text-gray-600 transition-colors duration-200 ease-smooth">{count} Workspaces</div>
        <div className="relative">
          <button
            className="flex items-center space-x-1 hover:text-black text-gray-600 transition-all duration-200 ease-smooth"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <span>{selectedState}</span>
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-200 ease-smooth ${isDropdownOpen ? "rotate-180" : ""}`}
            />
          </button>

          {isDropdownOpen && (
            <div
              className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-10 py-1 border border-gray-200 transition-all duration-200 ease-smooth"
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              {states.map((state) => (
                <button
                  key={state}
                  className={`block w-full text-left px-4 py-2 text-sm transition-all duration-200 ease-smooth hover:bg-gray-100 ${
                    selectedState === state ? "text-[#67ad42] font-medium" : "text-gray-700"
                  }`}
                  onClick={() => {
                    onStateChange(state)
                    setIsDropdownOpen(false)
                  }}
                >
                  {state}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
