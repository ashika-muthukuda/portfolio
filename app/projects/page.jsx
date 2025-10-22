import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ScrollAnimation } from "@/components/scroll-animation"
import {
  Figma,
  Smartphone,
  Monitor,
  BarChart3,
  Users,
  ShoppingBag,
  Camera,
  ExternalLink,
  ArrowRight,
  Calendar,
  Target,
  TrendingUp,
} from "lucide-react"
import Link from "next/link"

export default function Projects() {
  const projects = [
    {
      name: "HealthFlow Mobile",
      category: "Healthcare • Mobile App",
      overview:
        "A comprehensive health tracking app that helps users monitor their wellness journey with AI-powered insights and personalized recommendations.",
      role: "Lead UI/UX Designer",
      duration: "4 months",
      team: "Product Manager, 2 Developers, Data Scientist",
      highlights:
        "Intuitive health data visualization, gamified wellness challenges, and accessible design for all age groups.",
      impact: "40% increase in daily active users, 60% improvement in health goal completion rates",
      metrics: {
        users: "50K+",
        rating: "4.8/5",
        retention: "85%",
      },
      skills: ["Mobile Design", "Health UX", "Data Visualization", "Accessibility", "User Research"],
      icon: Smartphone,
      color: "from-emerald-500 to-teal-500",
      featured: true,
      year: "2024",
    },
    {
      name: "EcoShop Redesign",
      category: "E-commerce • Web Platform",
      overview:
        "Complete redesign of a sustainable fashion e-commerce platform, focusing on storytelling and environmental impact visualization.",
      role: "Senior UI/UX Designer",
      duration: "6 months",
      team: "Creative Director, Frontend Developer, Marketing Team",
      highlights: "Sustainable product storytelling, carbon footprint calculator, and seamless checkout experience.",
      impact: "65% increase in conversion rate, 45% boost in average order value",
      metrics: {
        conversion: "+65%",
        revenue: "+120%",
        satisfaction: "96%",
      },
      skills: ["E-commerce UX", "Sustainability Design", "Conversion Optimization", "Brand Design"],
      icon: ShoppingBag,
      color: "from-green-500 to-emerald-500",
      featured: true,
      year: "2024",
    },
    {
      name: "DataViz Dashboard",
      category: "Enterprise • Analytics Platform",
      overview:
        "Enterprise analytics dashboard for financial services, providing real-time insights and customizable reporting tools.",
      role: "UI/UX Designer",
      duration: "8 months",
      team: "Product Owner, 3 Developers, Business Analyst",
      highlights: "Complex data simplification, customizable widgets, and role-based access controls.",
      impact: "50% reduction in report generation time, 35% increase in user adoption",
      metrics: {
        efficiency: "+50%",
        adoption: "+35%",
        accuracy: "99.2%",
      },
      skills: ["Enterprise UX", "Data Visualization", "Dashboard Design", "B2B UX"],
      icon: BarChart3,
      color: "from-blue-500 to-cyan-500",
      featured: false,
      year: "2023",
    },
    {
      name: "ConnectLocal Social",
      category: "Social • Community Platform",
      overview: "Social networking platform designed to connect local communities and promote neighborhood engagement.",
      role: "Lead Designer",
      duration: "5 months",
      team: "Startup Founder, Full-stack Developer, Community Manager",
      highlights: "Location-based networking, event discovery, and community-driven content moderation.",
      impact: "10K+ active community members, 200+ local events organized monthly",
      metrics: {
        communities: "150+",
        events: "200+/mo",
        engagement: "78%",
      },
      skills: ["Social UX", "Community Design", "Mobile-first Design", "Location Services"],
      icon: Users,
      color: "from-purple-500 to-pink-500",
      featured: false,
      year: "2023",
    },
    {
      name: "FitTrack Pro",
      category: "Fitness • Mobile App",
      overview: "Comprehensive fitness tracking app with AI-powered workout recommendations and social challenges.",
      role: "UI/UX Designer",
      duration: "3 months",
      team: "Product Manager, iOS Developer, Fitness Expert",
      highlights: "Gamified workout experience, social challenges, and personalized fitness plans.",
      impact: "70% user retention after 3 months, 4.9 App Store rating",
      metrics: {
        retention: "70%",
        rating: "4.9/5",
        workouts: "1M+",
      },
      skills: ["Fitness UX", "Gamification", "Social Features", "iOS Design"],
      icon: Monitor,
      color: "from-orange-500 to-red-500",
      featured: false,
      year: "2022",
    },
    {
      name: "PhotoPro Portfolio",
      category: "Creative • Portfolio Platform",
      overview:
        "Portfolio platform specifically designed for professional photographers to showcase their work and attract clients.",
      role: "Freelance Designer",
      duration: "2 months",
      team: "Photographer, Web Developer",
      highlights: "Image-focused layouts, client proofing system, and integrated booking functionality.",
      impact: "300% increase in client inquiries, featured in design galleries",
      metrics: {
        inquiries: "+300%",
        bookings: "+250%",
        satisfaction: "100%",
      },
      skills: ["Portfolio Design", "Photography UX", "Client Experience", "Visual Hierarchy"],
      icon: Camera,
      color: "from-indigo-500 to-purple-500",
      featured: false,
      year: "2022",
    },
  ]

  const featuredProjects = projects.filter((p) => p.featured)
  const otherProjects = projects.filter((p) => !p.featured)

  const projectCategories = [
    { name: "All Projects", count: projects.length },
    { name: "Mobile Apps", count: projects.filter((p) => p.category.includes("Mobile")).length },
    { name: "Web Platforms", count: projects.filter((p) => p.category.includes("Web")).length },
    { name: "Enterprise", count: projects.filter((p) => p.category.includes("Enterprise")).length },
  ]

  return (
    <div className="container mx-auto px-4 py-8 space-y-20">
      {/* Hero Section */}
      <section className="text-center space-y-8 py-16">
        <ScrollAnimation>
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold">
              Featured <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Explore my collection of design projects that showcase user-centered thinking, creative problem-solving,
              and measurable business impact across various industries.
            </p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation delay={200}>
          <div className="flex flex-wrap justify-center gap-4">
            {projectCategories.map((category, index) => (
              <Badge
                key={category.name}
                variant="secondary"
                className="text-sm py-2 px-4 hover:scale-105 transition-all duration-300 cursor-pointer bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border-0"
              >
                {category.name} ({category.count})
              </Badge>
            ))}
          </div>
        </ScrollAnimation>
      </section>

      {/* Featured Projects */}
      <ScrollAnimation>
        <section className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Spotlight Projects</h2>
            <p className="text-muted-foreground text-lg">Deep dives into my most impactful work</p>
          </div>

          <div className="space-y-16">
            {featuredProjects.map((project, index) => (
              <ScrollAnimation key={index} delay={index * 200}>
                <Card className="border-0 overflow-hidden gradient-bg-soft card-hover">
                  <CardContent className="p-0">
                    <div className="flex flex-col xl:flex-row">
                      {/* Project Visual */}
                      <div
                        className={`xl:w-2/5 p-12 bg-gradient-to-br ${project.color} text-white flex flex-col justify-center`}
                      >
                        <div className="space-y-8">
                          <div className="flex items-center justify-between">
                            <div className="w-20 h-20 bg-white/20 rounded-3xl flex items-center justify-center">
                              <project.icon className="w-10 h-10" />
                            </div>
                            <Badge
                              variant="secondary"
                              className="bg-white/20 text-white border-0 flex items-center gap-1"
                            >
                              <Calendar className="w-3 h-3" />
                              {project.year}
                            </Badge>
                          </div>
                          <div className="space-y-4">
                            <Badge variant="secondary" className="bg-white/20 text-white border-0">
                              {project.category}
                            </Badge>
                            <h3 className="text-3xl font-bold">{project.name}</h3>
                            <p className="text-xl opacity-90 leading-relaxed">{project.overview}</p>
                          </div>
                          <div className="grid grid-cols-3 gap-4 pt-4">
                            {Object.entries(project.metrics).map(([key, value]) => (
                              <div key={key} className="text-center">
                                <div className="text-2xl font-bold">{value}</div>
                                <div className="text-sm opacity-75 capitalize">{key}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Project Details */}
                      <div className="xl:w-3/5 p-12 space-y-8">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold text-purple-600 mb-2 flex items-center gap-2">
                              <Target className="w-4 h-4" />
                              My Role
                            </h4>
                            <p className="text-muted-foreground">{project.role}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-purple-600 mb-2 flex items-center gap-2">
                              <Calendar className="w-4 h-4" />
                              Duration
                            </h4>
                            <p className="text-muted-foreground">{project.duration}</p>
                          </div>
                          <div className="md:col-span-2">
                            <h4 className="font-semibold text-purple-600 mb-2 flex items-center gap-2">
                              <Users className="w-4 h-4" />
                              Team
                            </h4>
                            <p className="text-muted-foreground">{project.team}</p>
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold text-purple-600 mb-3">Design Highlights</h4>
                          <p className="text-muted-foreground leading-relaxed">{project.highlights}</p>
                        </div>

                        <div className="p-6 bg-green-50 dark:bg-green-900/20 rounded-xl border-l-4 border-green-500">
                          <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2 flex items-center gap-2">
                            <TrendingUp className="w-4 h-4" />
                            Business Impact
                          </h4>
                          <p className="text-green-700 dark:text-green-300">{project.impact}</p>
                        </div>

                        <div className="space-y-4">
                          <h4 className="font-semibold text-purple-600">Skills Applied</h4>
                          <div className="flex flex-wrap gap-2">
                            <Badge
                              variant="secondary"
                              className="flex items-center space-x-1 bg-blue-100 text-blue-800 border-0"
                            >
                              <Figma className="w-3 h-3" />
                              <span>Figma</span>
                            </Badge>
                            {project.skills.map((skill, i) => (
                              <Badge key={i} variant="outline" className="hover:scale-105 transition-transform">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                          <Button className="gradient-bg text-white hover:scale-105 transition-all duration-300 group">
                            View Case Study
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                          </Button>
                          <Button
                            variant="outline"
                            className="hover:scale-105 transition-all duration-300 bg-transparent group"
                          >
                            Live Demo
                            <ExternalLink className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </section>
      </ScrollAnimation>

      {/* Other Projects */}
      <ScrollAnimation>
        <section className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">More Projects</h2>
            <p className="text-muted-foreground text-lg">Additional work showcasing diverse design challenges</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {otherProjects.map((project, index) => (
              <ScrollAnimation key={index} delay={index * 100}>
                <Card className="border-0 gradient-bg-soft card-hover h-full group">
                  <CardContent className="p-8 space-y-6 h-full flex flex-col">
                    <div className="flex items-start justify-between">
                      <div
                        className={`w-14 h-14 rounded-xl bg-gradient-to-r ${project.color} flex items-center justify-center group-hover:scale-110 transition-all duration-300`}
                      >
                        <project.icon className="w-7 h-7 text-white" />
                      </div>
                      <div className="text-right">
                        <Badge variant="secondary" className="text-xs mb-2 bg-gray-100 text-gray-800 border-0">
                          {project.year}
                        </Badge>
                        <Badge variant="secondary" className="text-xs block">
                          {project.category}
                        </Badge>
                      </div>
                    </div>

                    <div className="space-y-3 flex-grow">
                      <h3 className="text-xl font-bold group-hover:gradient-text transition-all duration-300">
                        {project.name}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-sm">{project.overview}</p>
                      <p className="text-xs text-purple-600 font-medium">
                        {project.role} • {project.duration}
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                        <p className="text-sm font-medium text-blue-800 dark:text-blue-200">{project.impact}</p>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {project.skills.slice(0, 3).map((skill, i) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                        {project.skills.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{project.skills.length - 3} more
                          </Badge>
                        )}
                      </div>

                      <Button
                        variant="ghost"
                        className="w-full justify-between group-hover:bg-primary/10 transition-colors"
                      >
                        View Details
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </section>
      </ScrollAnimation>

      {/* Call to Action */}
      <ScrollAnimation>
        <section className="text-center space-y-8 py-16">
          <Card className="border-0 gradient-bg-soft max-w-4xl mx-auto card-hover">
            <CardContent className="p-12 space-y-8">
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold">
                  Interested in My <span className="gradient-text">Design Process?</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                  Each project tells a unique story of challenges overcome and solutions crafted. I'd love to walk you
                  through my detailed case studies and share how I can help bring your vision to life.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="gradient-bg text-white hover:scale-105 transition-all duration-300 group"
                >
                  <Link href="/contact">
                    Discuss Your Project
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="hover:scale-105 transition-all duration-300 bg-transparent group"
                >
                  <Link href="mailto:sarah@example.com">
                    Request Case Studies
                    <ExternalLink className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </ScrollAnimation>
    </div>
  )
}
