"use client"

import type { ButtonHTMLAttributes, ReactNode } from "react"

interface YellowButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

export function YellowButton({ children, className = "", ...props }: YellowButtonProps) {
  return (
    <button
      className={`inline-flex h-10 px-3 justify-center items-center gap-2.5 flex-shrink-0 rounded-lg border border-[#E09700] text-black text-base font-medium transition-all duration-300 ease-smooth ${className}`}
      style={{
        background: "linear-gradient(0deg, rgba(255, 255, 255, 0.00) 0%, rgba(255, 255, 255, 0.32) 100%), #FFAC00",
        boxShadow: "0px -2px 3px 0px rgba(0, 0, 0, 0.08) inset, 0px 2px 3px 0px rgba(255, 255, 255, 0.32) inset",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background =
          "linear-gradient(0deg, rgba(255, 255, 255, 0.00) 0%, rgba(255, 255, 255, 0.32) 100%), #E09700"
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background =
          "linear-gradient(0deg, rgba(255, 255, 255, 0.00) 0%, rgba(255, 255, 255, 0.32) 100%), #FFAC00"
      }}
      {...props}
    >
      {children}
    </button>
  )
}
