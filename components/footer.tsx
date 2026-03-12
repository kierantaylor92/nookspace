import { TextLink } from "@/components/ui/text-link"

export function Footer() {
  return (
    <footer className="py-3 px-3 border-l border-r border-dashed border-[#222222]/25">
      <div className="mx-auto flex items-center justify-between">
        <div className="font-mono font-normal text-sm text-gray-500">© 2025 Nookbase</div>
        <TextLink href="/about">About this site</TextLink>
      </div>
    </footer>
  )
}
