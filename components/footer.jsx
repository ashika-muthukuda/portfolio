"use client"

import Link from "next/link"
import { Mail, Linkedin, Instagram, Twitter, Heart, ArrowUp, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const socialLinks = [
    {
      name: "Email",
      href: "mailto:ashikamuthukuda@gmail.com",
      icon: Mail,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/am-muthukuda",
      icon: Linkedin,
    },
    {
      name: "Instagram",
      href: "https://instagram.com/sarahdesigns",
      icon: Instagram,
    },
    {
      name: "Twitter",
      href: "https://twitter.com/sarahchen_ux",
      icon: Twitter,
    },
    {
      name: "Github",
      href: "https://github.com/ashikamuthukuda",
      icon: Github,
    },
  ]

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Experience", href: "/work" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <footer className="relative bg-background border-t border-border/50 mt-20">
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          size="icon"
          className="fixed bottom-6 right-6 z-50 rounded-full gradient-bg text-white shadow-lg hover:scale-110 transition-all duration-300 animate-bounce"
        >
          <ArrowUp className="w-4 h-4" />
        </Button>
      )}

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 gradient-bg rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">SC</span>
              </div>
              <span className="text-2xl font-bold gradient-text">Ashika Muthukuda</span>
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Passionate UI/UX designer & graphic designer creating meaningful digital experiences that connect users with brands and drive
              business success.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-secondary hover:bg-primary/10 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Get In Touch</h3>
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-muted-foreground">Email</p>
                <Link href="mailto:ashikamuthukuda@gmail.com" className="text-primary hover:underline font-medium">
                  ashikamuthukuda@gmail.com
                </Link>
              </div>
              <div>
                <p className="text-muted-foreground">Location</p>
                <p className="font-medium">Kandy, Sri Lanka</p>
              </div>
              <div>
                <p className="text-muted-foreground">Availability</p>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-green-600 font-medium text-xs">Available for projects</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/50 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span>© 2025 | Ashika Muthukuda</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
            </div>
            {/* <div className="flex items-center space-x-6 text-sm">
              <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  )
}
