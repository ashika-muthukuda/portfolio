"use client"
import { Vortex } from "@/components/ui/vortex"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"

export default function HeroVortex() {
  return (
    <div className="w-full mx-auto rounded-md h-screen overflow-hidden relative transition-colors duration-500">
      <Vortex
        backgroundColor="transparent"
        rangeY={800}
        particleCount={100}
        baseHue={170} /* shifted to teal/emerald */
        className="flex items-center flex-col justify-center px-4 sm:px-6 md:px-10 py-4 w-full h-full"
      >
        <div className="relative z-10 text-center space-y-6 sm:space-y-8 max-w-5xl mx-auto">
          {/* Availability Badge */}
          <div className="inline-block animate-float">
            <Badge
              variant="secondary"
              className="text-xs sm:text-sm px-4 sm:px-6 py-2 sm:py-3 mb-4 sm:mb-6 
                         bg-black/10 dark:bg-white/10 
                         backdrop-blur-sm 
                         text-black dark:text-white 
                         border border-black/20 dark:border-white/20 
                         hover:bg-black/20 dark:hover:bg-white/20 
                         transition-all duration-300"
            >
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2 sm:mr-3 animate-pulse"></div>
              Available for new projects
            </Badge>
          </div>

          {/* Main Heading */}
          <div className="space-y-4 sm:space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight 
                           text-black dark:text-white transition-colors duration-500">
              Crafting Digital
              <br />
              <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                Experiences
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl 
                          text-black/70 dark:text-white/80 
                          max-w-4xl mx-auto leading-relaxed font-light px-4 transition-colors duration-500">
              I'm Ashika Muthukuda, a passionate UI/UX designer who transforms complex ideas into intuitive, visually stunning
              digital experiences that users love and businesses thrive on.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center pt-6 sm:pt-8 px-4">
            <Button
              asChild
              size="lg"
              className="bg-black text-white dark:bg-white dark:text-black 
                         hover:bg-black/90 dark:hover:bg-white/90 
                         transition-all duration-300 hover:scale-105 group px-6 sm:px-8 py-3 sm:py-4 
                         text-base sm:text-lg font-semibold w-full sm:w-auto"
            >
              <Link href="/projects">
                View My Work
                <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-black/30 dark:border-white/30 
                         text-black dark:text-white 
                         hover:bg-black/10 dark:hover:bg-white/10 
                         backdrop-blur-sm transition-all duration-300 
                         hover:scale-105 group px-6 sm:px-8 py-3 sm:py-4 
                         text-base sm:text-lg font-semibold bg-transparent w-full sm:w-auto"
            >
              <Link href="/contact">
                Let's Collaborate
                <Sparkles className="w-4 sm:w-5 h-4 sm:h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </Button>
          </div>

          {/* Floating Elements - Hidden on mobile */}
          <div className="absolute top-20 left-10 hidden lg:block">
            <div className="w-20 h-20 rounded-full bg-gradient-to-r from-emerald-300 to-teal-300 opacity-20 animate-float"></div>
          </div>
          <div className="absolute bottom-20 right-10 hidden lg:block">
            <div
              className="w-16 h-16 rounded-full bg-gradient-to-r from-teal-400 to-cyan-400 opacity-20 animate-float"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>
          <div className="absolute top-1/2 left-20 hidden xl:block">
            <div
              className="w-12 h-12 rounded-full bg-gradient-to-r from-emerald-300 to-cyan-200 opacity-20 animate-float"
              style={{ animationDelay: "2s" }}
            ></div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-5 sm:w-6 h-8 sm:h-10 border-2 border-black/30 dark:border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-2 sm:h-3 bg-black/50 dark:bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </Vortex>
    </div>
  )
}
