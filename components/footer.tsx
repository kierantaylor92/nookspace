import Link from "next/link"

export function Footer() {
  return (
    <footer className="py-3 px-3 border-l border-r border-dashed border-[#222222]/25">
      <div className="mx-auto flex items-center justify-between">
        <div className="font-mono font-normal text-sm text-gray-500">© 2025 Nookspace</div>
        <Link
          href="/about"
          className="font-mono font-normal text-sm text-gray-500 hover:text-[#67ad42] transition-colors duration-200"
        >
          About this site
        </Link>
      </div>
    </footer>
  )
}
