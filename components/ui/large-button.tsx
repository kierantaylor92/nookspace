"use client"

import type { ButtonHTMLAttributes, ReactNode } from "react"

interface LargeButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  href?: string
}

export function LargeButton({ children, className = "", href, ...props }: LargeButtonProps) {
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex h-14 px-6 justify-center items-center gap-2.5 flex-shrink-0 rounded-lg border border-black text-white font-medium text-lg transition-all duration-300 ease-smooth hover:bg-[#0a0a0a] ${className}`}
        style={{
          background: "linear-gradient(0deg, rgba(255, 255, 255, 0.00) 0%, rgba(255, 255, 255, 0.16) 100%), #1E1E1E",
          boxShadow: "0px -2px 3px 0px rgba(0, 0, 0, 0.24) inset, 0px 2px 5px 0px rgba(255, 255, 255, 0.16) inset",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background =
            "linear-gradient(0deg, rgba(255, 255, 255, 0.00) 0%, rgba(255, 255, 255, 0.16) 100%), #0a0a0a"
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background =
            "linear-gradient(0deg, rgba(255, 255, 255, 0.00) 0%, rgba(255, 255, 255, 0.16) 100%), #1E1E1E"
        }}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      className={`inline-flex h-14 px-6 justify-center items-center gap-2.5 flex-shrink-0 rounded-lg border border-black text-white font-medium text-lg transition-all duration-300 ease-smooth hover:bg-[#0a0a0a] ${className}`}
      style={{
        background: "linear-gradient(0deg, rgba(255, 255, 255, 0.00) 0%, rgba(255, 255, 255, 0.16) 100%), #1E1E1E",
        boxShadow: "0px -2px 3px 0px rgba(0, 0, 0, 0.24) inset, 0px 2px 5px 0px rgba(255, 255, 255, 0.16) inset",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background =
          "linear-gradient(0deg, rgba(255, 255, 255, 0.00) 0%, rgba(255, 255, 255, 0.16) 100%), #0a0a0a"
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background =
          "linear-gradient(0deg, rgba(255, 255, 255, 0.00) 0%, rgba(255, 255, 255, 0.16) 100%), #1E1E1E"
      }}
      {...props}
    >
      {children}
    </button>
  )
}
