import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import * as React from "react"

type TextLinkProps = {
  href: string
  children: React.ReactNode
  className?: string
  external?: boolean
  variant?: "neutral" | "page"
}

export function TextLink({ href, children, className = "", external, variant = "neutral" }: TextLinkProps) {
  const isExternal = external ?? href.startsWith("http")

  const isPageVariant = variant === "page"

  const baseColorClass = isPageVariant ? "text-[#672EEC]" : "text-[#6b7280]"
  const hoverColorClass = isPageVariant ? "hover:text-[#4b22c0]" : "hover:text-[#222222]"
  const underlineColor = isPageVariant ? "after:bg-[#672EEC]/30" : "after:bg-[#222222]/30"

  const baseClasses = [
    "inline-flex items-center gap-2 font-mono font-medium text-sm",
    "transition-colors duration-200 group relative",
    baseColorClass,
  ].join(" ")

  const hoverClasses = [
    hoverColorClass,
    "after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-px after:w-full",
    underlineColor,
    "after:origin-left after:scale-x-0 after:translate-y-0.5",
    "after:transition-transform after:duration-200 group-hover:after:scale-x-100 group-hover:after:translate-y-0",
  ].join(" ")

  const content = (
    <span className={`${baseClasses} ${hoverClasses} ${className}`}>
      <span>{children}</span>
      {isExternal && (
        <ArrowUpRight className="h-4 w-4 transition-colors duration-200" aria-hidden="true" />
      )}
    </span>
  )

  if (href.startsWith("/")) {
    return <Link href={href}>{content}</Link>
  }

  return (
    <a href={href} target={isExternal ? "_blank" : undefined} rel={isExternal ? "noopener noreferrer" : undefined}>
      {content}
    </a>
  )
}

