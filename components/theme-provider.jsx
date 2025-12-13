"use client"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { useEffect } from "react"

export function ThemeProvider({ children, ...props }) {
  // Initialize theme immediately to prevent flash on Samsung devices
  useEffect(() => {
    // Add a small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      const savedTheme = localStorage.getItem('theme-preference')
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      const theme = savedTheme || (prefersDark ? 'dark' : 'light')
      
      // Force apply theme to document root
      if (theme === 'dark') {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    }, 0)
    
    return () => clearTimeout(timer)
  }, [])

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
