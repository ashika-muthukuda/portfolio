import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollAnimation } from "@/components/scroll-animation";
import { AnimatedCounter } from "@/components/animated-counter";
import HeroVortex from "@/components/hero-vortex";
import Link from "next/link";
import {
  Palette,
  Users,
  Zap,
  Star,
  Quote,
  ArrowRight,
  Sparkles,
  Target,
  Award,
  Brush,
  CodeXml,
  Brain,
  Leaf,
  CupSoda,
} from "lucide-react";
import Image from "next/image";

// Import all SVG icons
import figmaIcon from "@/assets/svgs/figma.svg";
import adobeXdIcon from "@/assets/svgs/adobe_xd.svg";
import photoshopIcon from "@/assets/svgs/photoshop.svg";
import illustratorIcon from "@/assets/svgs/illustrator.svg";
import coreldrawIcon from "@/assets/svgs/coreldraw-icon.svg";
import indesignIcon from "@/assets/svgs/indesign.svg";
import canvaIcon from "@/assets/svgs/canva.svg";

export default function Home() {
  const tools = [
    { name: "Figma", img: figmaIcon },
    { name: "Adobe XD", img: adobeXdIcon },
    { name: "Photoshop", img: photoshopIcon },
    { name: "Illustrator", img: illustratorIcon },
    { name: "CorelDRAW", img: coreldrawIcon },
    { name: "InDesign", img: indesignIcon },
    { name: "Canva", img: canvaIcon },
  ];

  const recentWorks = [
    {
      name: "Learning and Quiz Platform",
      description:
        "A sleek and engaging Figma design for 'QuizOne', a learning and quiz platform.",
      icon: Brain,
      color: "from-emerald-500 to-teal-500",
      metrics: "50K+ users",
    },
    {
      name: "Plant Store Web Landing",
      description:
        "A modern and visually appealing web design template for an online plant store, 'Breath Natural'.",
      icon: Leaf,
      color: "from-emerald-500 to-teal-500",
      metrics: "65% conversion ↑",
    },
    {
      name: "Beverage Menu Design",
      description:
        "A refreshing and vibrant Figma design for a smoothie bar menu, 'Juicy Smoothie Bar'.",
      icon: CupSoda,
      color: "from-teal-500 to-cyan-500",
      metrics: "99.2% accuracy",
    },
  ];

  const stats = [
    { number: "50+", label: "Projects Completed", icon: Target },
    { number: "98%", label: "Client Satisfaction", icon: Star },
    { number: "3+", label: "Years Experience", icon: Award },
    { number: "25+", label: "Happy Clients", icon: Users },
  ];

  const services = [
    {
      title: "UI/UX Design",
      description:
        "Designing user-centered digital experiences that balance aesthetics, usability, and performance.",
      features: [
        "User Research",
        "Wireframing",
        "Interactive Prototyping",
        "Responsive Web Design",
        "Visual Interface Design",
      ],
      icon: Palette,
    },
    {
      title: "Graphic Design",
      description:
        "Crafting visuals that communicate ideas clearly and creatively, from brand identities to marketing.",
      features: [
        "Logo & Brand Identity Design",
        "Social Media & Marketing Visuals",
        "Flyer & Event Artwork Design",
        "Photo Editing & Retouching",
      ],
      icon: Brush,
    },
    {
      title: "Creative Development",
      description:
        "Blending design with code to build interactive, responsive, and visually rich digital experiences.",
      features: [
        "HTML & CSS-Based UI Implementation",
        "Animations",
        "Interactive Web Components",
        "Design-to-Code Conversion",
      ],
      icon: CodeXml,
    },
  ];

  return (
    <div className="section-spacing">
      {/* Hero Section */}
      <HeroVortex />

      <div className="container-responsive section-spacing">
        {/* Services Section */}
        <ScrollAnimation>
          <section className="section-spacing">
            <div className="text-center space-y-4 mb-12 sm:mb-16">
              <h2 className="text-responsive-3xl font-bold">Areas I explore</h2>
              <p className="text-muted-foreground text-responsive-lg max-w-2xl mx-auto">
                Dedicated to growing my expertise across creative and digital
                design and from crafting user experiences to building visual
                identities. Academic Projects
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 stagger-children">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="border-0 gradient-bg-soft card-hover group cursor-pointer h-full"
                >
                  <CardContent className="p-6 sm:p-8 space-y-4 sm:space-y-6 h-full flex flex-col">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl gradient-bg flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                      <service.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <div className="space-y-3 flex-grow">
                      <h3 className="text-lg sm:text-xl font-bold group-hover:gradient-text transition-all duration-300">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                        {service.description}
                      </p>
                    </div>
                    <div className="space-y-3">
                      <div className="flex flex-wrap gap-2">
                        {service.features.map((feature, i) => (
                          <Badge
                            key={i}
                            variant="outline"
                            className="text-xs hover:scale-105 transition-transform"
                          >
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </ScrollAnimation>

        {/* Tools Section */}
        <ScrollAnimation>
          <section className="space-y-10 sm:space-y-12">
            <h2 className="text-responsive-3xl font-bold text-center">
              My Design Arsenal
            </h2>
            <div className="flex flex-wrap justify-center gap-5 sm:gap-8 stagger-children px-10 md:px-20">
              {tools.map((tool, index) => (
                <Badge
                  key={tool.name}
                  variant="secondary"
                  className="flex items-center gap-2 text-sm sm:text-lg py-2 sm:py-3 px-4 sm:px-6 
                     hover:scale-110 transition-all duration-300 card-hover cursor-pointer 
                     bg-gradient-to-r from-emerald-50 to-cyan-50 dark:from-emerald-900/20 dark:to-cyan-900/20 border-0"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Image
                    src={tool.img}
                    alt={tool.name}
                    className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
                  />
                  {tool.name}
                </Badge>
              ))}
            </div>
          </section>
        </ScrollAnimation>

        <section className="section-spacing">
          <div className="h-1"></div>
        </section>

        {/* Featured Projects */}
        <ScrollAnimation>
          <section className="section-spacing">
            <div className="text-center space-y-4 mb-3 sm:mb-8">
              <h2 className="text-responsive-3xl font-bold">
                Featured Projects
              </h2>
              <p className="text-muted-foreground text-responsive-lg max-w-2xl mx-auto">
                Explore my academic and self-initiated projects that reflect my
                passion for designing thoughtful and user-centered digital
                experiences.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 stagger-children">
              {recentWorks.map((work, index) => (
                <Card
                  key={index}
                  className="border-0 gradient-bg-soft card-hover group cursor-pointer overflow-hidden"
                >
                  <CardContent className="p-6 sm:p-8 space-y-4 sm:space-y-6">
                    <div className="flex items-center justify-between">
                      <div
                        className={`w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-r ${work.color} flex items-center justify-center group-hover:scale-110 transition-all duration-300`}
                      >
                        <work.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                      </div>
                      {/* <Badge
                        variant="secondary"
                        className="bg-green-100 text-green-800 border-0 text-xs sm:text-sm"
                      >
                        {work.metrics}
                      </Badge> */}
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-lg sm:text-xl font-bold group-hover:gradient-text transition-all duration-300">
                        {work.name}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                        {work.description}
                      </p>
                    </div>
                    <Link href="/projects">
                      <div className="flex items-center text-sm text-teal-600 font-medium group-hover:text-teal-700 transition-colors">
                        View Case Study
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="flex justify-center align-middle">
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-black/30 dark:border-white/30 
                         text-foreground 
                         hover:bg-black/10 dark:hover:bg-white/10 
                         backdrop-blur-sm transition-all duration-300 
                         hover:scale-105 group px-6 sm:px-8 py-3 sm:py-4 
                         text-base sm:text-lg font-semibold bg-transparent w-full sm:w-auto"
              >
                <Link href="/projects">
                  View My Work
                  <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </section>
        </ScrollAnimation>

        {/* CTA Section */}
        <ScrollAnimation>
          <section className="text-center section-padding">
            <div className="max-w-3xl mx-auto space-y-6">
              <h2 className="text-responsive-4xl font-bold">
                Ready to Create Something
                <br />
                <span className="gradient-text">Amazing Together?</span>
              </h2>
              <p className="text-responsive-xl text-muted-foreground leading-relaxed">
                Let’s transform ideas into digital experiences that inspire and engage. I’m always open to learning opportunities, collaborations, and creative projects.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6 sm:pt-8 px-30 sm:px-4">
              <Button
                asChild
                size="lg"
                className="gradient-bg text-white hover:scale-105 transition-all duration-300 group w-full sm:w-auto"
              >
                <Link href="/contact">
                  Start Your Project
                  <Sparkles className="w-4 h-4 ml-2 group-hover:rotate-12 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="hover:scale-105 transition-all duration-300 bg-transparent group w-full sm:w-auto"
              >
                <Link href="/projects">
                  See My Portfolio
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </section>
        </ScrollAnimation>
      </div>
    </div>
  );
}
