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
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  colorScheme: 'light dark',
  viewport: 'width=device-width, initial-scale=1, color-scheme-preference=light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', content: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', content: '#000000' },
  ],
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning data-color-scheme="light dark">
      <head>
        <script dangerouslySetInnerHTML={{
          __html: `
            (function() {
              try {
                const stored = localStorage.getItem('theme-preference');
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                const isDark = stored ? stored === 'dark' : prefersDark;
                
                if (isDark) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (e) {}
            })();
          `
        }} />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem={true} disableTransitionOnChange={false} storageKey="theme-preference" forcedTheme={undefined} enableColorScheme={true}>
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
