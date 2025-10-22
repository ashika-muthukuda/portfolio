"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { Menu, X, Sparkles } from "lucide-react"
import { useState, useEffect } from "react"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Experience", href: "/experience" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
]

export default function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b shadow-lg" : "bg-background/95 backdrop-blur-sm border-b"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="w-8 h-8 gradient-bg rounded-lg flex items-center justify-center group-hover:animate-pulse-glow transition-all duration-300">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="text-2xl font-bold gradient-text group-hover:scale-105 transition-transform duration-300">
                Ashika Muthukuda
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-all duration-300 hover:text-primary hover:scale-105 relative ${
                  pathname === item.href ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {item.name}
                {pathname === item.href && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 gradient-bg rounded-full animate-scale-in" />
                )}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <ModeToggle />

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden transition-all duration-300 hover:scale-110"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5 transition-transform duration-300 rotate-90" />
              ) : (
                <Menu className="h-5 w-5 transition-transform duration-300" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            mobileMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t">
            {navigation.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block px-3 py-2 text-base font-medium transition-all duration-300 hover:text-primary hover:bg-primary/10 rounded-md ${
                  pathname === item.href ? "text-primary bg-primary/10" : "text-muted-foreground"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}
