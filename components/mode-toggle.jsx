"use client"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Switch } from "@/components/ui/switch"
import { useEffect, useState } from "react"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="flex items-center space-x-2">
        <Sun className="h-4 w-4" />
        <div className="w-11 h-6 bg-gray-200 rounded-full animate-pulse" />
        <Moon className="h-4 w-4" />
      </div>
    )
  }

  const isDark = theme === "dark"

  const handleThemeChange = (checked) => {
    setTheme(checked ? "dark" : "light")
  }

  return (
    <div className="flex items-center space-x-3 bg-secondary/50 backdrop-blur-sm rounded-full px-3 py-2 border transition-all duration-300 hover:bg-secondary/70">
      <Sun
        className={`h-4 w-4 transition-all duration-300 ${!isDark ? "text-yellow-500 scale-110" : "text-muted-foreground scale-90"}`}
      />
      <Switch
        checked={isDark}
        onCheckedChange={handleThemeChange}
        className="data-[state=checked]:bg-purple-600 data-[state=unchecked]:bg-yellow-500"
      />
      <Moon
        className={`h-4 w-4 transition-all duration-300 ${isDark ? "text-purple-400 scale-110" : "text-muted-foreground scale-90"}`}
      />
    </div>
  )
}
