"use client"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export function ModeToggle() {
  const { theme, setTheme, themes } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="animate-pulse">
        <Sun className="h-5 w-5" />
      </Button>
    )
  }

  const isDark = theme === "dark"

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme)
    // Force update for Samsung devices
    setTimeout(() => {
      document.documentElement.style.colorScheme = newTheme === 'dark' ? 'dark light' : 'light dark'
    }, 0)
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => handleThemeChange(isDark ? "light" : "dark")}
      className="transition-all duration-300 hover:scale-110"
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      {isDark ? (
        <Sun className="h-5 w-5 text-teal-400 transition-all duration-300" />
      ) : (
        <Moon className="h-5 w-5 text-teal-400 transition-all duration-300" />
      )}
    </Button>
  )
}
