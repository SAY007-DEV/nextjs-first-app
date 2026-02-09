"use client"

import Link from "next/link"
import { useState } from "react"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className="sticky top-4 z-50 px-4">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl shadow-[0_20px_40px_rgba(0,0,0,0.35)]">
          
          <div className="flex h-16 items-center justify-between px-6">
            
            {/* Logo */}
            <Link
              href="/"
              className="text-lg font-semibold tracking-tight text-white"
            >
              MyApp
            </Link>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-2">
              <NavLink href="/" active={pathname === "/"}>Home</NavLink>
              <NavLink href="/about" active={pathname === "/about"}>About</NavLink>
              <NavLink href="/contact" active={pathname === "/contact"}>Contact</NavLink>

              <Link
                href="/signup"
                className="ml-3 rounded-full bg-white px-5 py-2 text-sm font-medium text-black shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Button */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden rounded-full bg-white/10 px-4 py-2 text-white hover:bg-white/20 transition"
            >
              ☰
            </button>
          </div>

          {/* Mobile Menu */}
          {open && (
            <div className="md:hidden border-t border-white/10 px-6 py-6">
              <div className="flex flex-col gap-3">
                <MobileLink href="/" active={pathname === "/"} setOpen={setOpen}>Home</MobileLink>
                <MobileLink href="/about" active={pathname === "/about"} setOpen={setOpen}>About</MobileLink>
                <MobileLink href="/contact" active={pathname === "/contact"} setOpen={setOpen}>Contact</MobileLink>

                <Link
                  href="/signup"
                  onClick={() => setOpen(false)}
                  className="mt-3 rounded-xl bg-white py-3 text-center text-sm font-medium text-black shadow-lg"
                >
                  Get Started
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}

/* Desktop Nav Link */
function NavLink({ href, children, active }) {
  return (
    <Link
      href={href}
      className={`relative rounded-full px-4 py-2 text-sm transition
        ${active
          ? "text-white bg-white/20 shadow-inner"
          : "text-white/70 hover:text-white hover:bg-white/10"
        }`}
    >
      {children}
    </Link>
  )
}

/* Mobile Nav Link */
function MobileLink({ href, children, active, setOpen }) {
  return (
    <Link
      href={href}
      onClick={() => setOpen(false)}
      className={`rounded-lg px-3 py-2 text-sm transition
        ${active
          ? "bg-white/20 text-white"
          : "text-white/70 hover:bg-white/10 hover:text-white"
        }`}
    >
      {children}
    </Link>
  )
}
