import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"


const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Ashika Muthukuda - UI/UX Designer",
  description: "Transform ideas into intuitive, visually captivating digital experiences",
  other: {
    "google-site-verification": "scEH4fgpgNBNFlYnOazQ7Fwzx3g0GBIO8Z8NRYw9N-A",
  },
  icons: {
    icon: [
      { url: "/logo.jpg", type: "image/jpeg" },
      { url: "/placeholder-logo.png", type: "image/png" },
    ],
    shortcut: "/logo.jpg",
    apple: "/logo.jpg",
  },  
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem={true} disableTransitionOnChange={false} storageKey="theme-preference">
          <div className="min-h-screen bg-gradient-light dark:bg-gradient-dark transition-all duration-500 flex flex-col">
            <Header />
            <main className="animate-fade-in flex-grow">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
