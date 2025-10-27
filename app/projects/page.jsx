import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollAnimation } from "@/components/scroll-animation";
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
} from "lucide-react";
import Link from "next/link";

import imgp11 from "../../assets/imgs/img-p11.png";
import imgp12 from "../../assets/imgs/img-p12.png";
import imgp13 from "../../assets/imgs/img-p13.png";
import imgp14 from "../../assets/imgs/img-p14.png";
import imgp21 from "../../assets/imgs/img-p21.png";
import imgp22 from "../../assets/imgs/img-p22.png";
import imgp23 from "../../assets/imgs/img-p23.png";
import imgp24 from "../../assets/imgs/img-p24.png";
import imgp31 from "../../assets/imgs/img-p31.png";
import imgp41 from "../../assets/imgs/img-p41.png";

export default function Projects() {
  const projects = [
    {
      name: "Donut Delight - Flavorful Donut Banner Design",
      category: "Food & Beverage • Web Designs",
      overview:
        "A vibrant and appetizing Figma design featuring a set of banner templates for a donut shop, 'Donut Delight.' This design showcases three unique flavors: Strawberry, Blueberry, and Green Apple, each with a colorful background and mint leaf accents. Perfect for promotional materials, websites, or social media, this template offers a playful yet professional look. Ideal for designers, food businesses, or marketers looking to highlight their products. Inspiration drawn from YouTube tutorials and Pinterest boards.",
      resources: [],
      colors: ["Pink", "purple", "green with white accents"],
      images: [imgp11, imgp12, imgp13, imgp14],
      icon: Monitor,
      color: "from-emerald-500 to-teal-500",
      featured: true,
      year: "2025",
      link: "#",
    },
    {
      name: "Breath Natural - Plant Store Web Design",
      category: "Plants • Nature • Web Designs",
      overview:
        "A modern and visually appealing web design template for an online plant store, 'Breath Natural'. This Figma design features a clean layout with sections for trendy plants, top-selling items, customer reviews, and best collections. Perfect for e-commerce platforms focused on indoor plants and gardening. The design includes a dark theme with vibrant plant imagery, easy navigation, and a responsive structure. Ideal for designers, developers, or plant enthusiasts looking to create a stunning online store. Resources for inspiration include YouTube tutorials and Pinterest boards.",
      resources: [
        "YouTube (for design tutorials and inspiration)",
        "Pinterest (for plant imagery and layout ideas)",
      ],
      colors: ["Dark green and white with vibrant accents"],
      images: [imgp21, imgp22, imgp23, imgp24],
      icon: Monitor,
      color: "from-emerald-500 to-teal-500",
      featured: true,
      year: "2025",
      link: "#",
    },
    {
      name: "Juicy Smoothie Bar - Beverage Menu Design",
      category: "Food & Beverage • Web Designs",
      overview:
        "A refreshing and vibrant Figma design for a smoothie bar menu, 'Juicy Smoothie Bar'. This template features a sleek layout showcasing four delicious flavors: Blueberry Bliss, Mango Magic, Avocado Dream, and Strawberry Spark. Each section includes vibrant imagery, flavor descriptions, and a call-to-action, all set against a modern color scheme. Perfect for beverage websites, menus, or promotional materials. Ideal for designers, food businesses, or health enthusiasts. Inspiration drawn from YouTube tutorials and Pinterest boards.",
      resources: [],
      colors: ["Purple, orange, green, and pink with white accents"],
      images: [imgp31],
      icon: Monitor,
      color: "from-emerald-500 to-teal-500",
      featured: true,
      year: "2025",
      link: "#",
    },
    {
      name: "Juicy Smoothie Bar - Beverage Menu Design",
      category: "Food & Beverage • Web Designs",
      overview:
        "A refreshing and vibrant Figma design for a smoothie bar menu, 'Juicy Smoothie Bar'. This template features a sleek layout showcasing four delicious flavors: Blueberry Bliss, Mango Magic, Avocado Dream, and Strawberry Spark. Each section includes vibrant imagery, flavor descriptions, and a call-to-action, all set against a modern color scheme. Perfect for beverage websites, menus, or promotional materials. Ideal for designers, food businesses, or health enthusiasts. Inspiration drawn from YouTube tutorials and Pinterest boards.",
      resources: [],
      colors: ["Purple, orange, green, and pink with white accents"],
      images: [imgp31],
      icon: Monitor,
      color: "from-emerald-500 to-teal-500",
      featured: true,
      year: "2025",
      link: "#",
    },
    {
      name: "Quizone - Learning and Quiz Platform Design",
      category: "Education • Web Designs",
      overview:
        "A sleek and engaging Figma design for 'QuizOne', a learning and quiz platform. This template features a modern layout with a vibrant purple color scheme accented by crisp white elements, creating an inviting and educational environment. Perfect for e-learning websites, quiz apps, or educational tools, it includes sections for courses, quizzes, and progress tracking.",
      resources: [],
      colors: ["Purple with white accents"],
      images: [imgp41],
      icon: Monitor,
      color: "from-emerald-500 to-teal-500",
      featured: true,
      year: "2024",
      link: "#",
    },

    {
      name: "Donut Delight - Flavorful Donut Banner Design",
      category: "Food & Beverage • Web Designs",
      overview:
        "A vibrant and appetizing Figma design featuring a set of banner templates for a donut shop, 'Donut Delight.' This design showcases three unique flavors: Strawberry, Blueberry, and Green Apple, each with a colorful background and mint leaf accents. Perfect for promotional materials, websites, or social media, this template offers a playful yet professional look. Ideal for designers, food businesses, or marketers looking to highlight their products. Inspiration drawn from YouTube tutorials and Pinterest boards.",
      resources: ["YouTube tutorials", "Pinterest boards"],
      colors: ["Pink", "purple", "green with white accents"],
      images: [imgp31],
      icon: Smartphone,
      color: "from-emerald-500 to-teal-500",
      featured: false,
      year: "2024",
      link: "#",
    },
  ];

  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  const projectCategories = [
    { name: "All Projects", count: projects.length },
    {
      name: "Mobile Apps",
      count: projects.filter((p) => p.category.includes("Mobile")).length,
    },
    {
      name: "Web Platforms",
      count: projects.filter((p) => p.category.includes("Web")).length,
    },
    {
      name: "Enterprise",
      count: projects.filter((p) => p.category.includes("Enterprise")).length,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 space-y-20">
      {/* Hero Section */}
      <section className="text-center space-y-8 py-12">
        <ScrollAnimation>
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold">
              Featured <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Explore my collection of design projects that showcase creativity,
              user-centered thinking, and visual storytelling — blending design
              aesthetics with functionality across various domains.
            </p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation delay={200}>
          <div className="flex flex-wrap justify-center gap-4">
            {projectCategories.map((category, index) => (
              <Badge
                key={category.name}
                variant="secondary"
                className="text-sm py-2 px-4 hover:scale-105 transition-all duration-300 cursor-pointer bg-gradient-to-r from-emerald-50 to-cyan-50 dark:from-emerald-900/20 dark:to-cyan-900/20 border-0"
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
            <h2 className="text-3xl md:text-4xl font-bold">
              Spotlight Projects
            </h2>
            <p className="text-muted-foreground text-lg max-w-4xl mx-auto">
              Explore my collection of design projects that showcase creativity,
              user-centered thinking, and visual storytelling — blending design
              aesthetics with functionality across various domains.
            </p>
          </div>

          <div className="space-y-12">
            {featuredProjects.map((project, index) => (
              <ScrollAnimation key={index} delay={index * 200}>
                <Card className="border-0 overflow-hidden gradient-bg-soft card-hover">
                  <CardContent className="">
                    <div className="flex flex-col xl:flex-row gap-6">
                      {/* Project Visual */}
                      <div
                        className={`xl:w-3/5 xl:pr-6 xl:border-r-1 border-muted-foreground/30 flex flex-col justify-center`}
                      >
                        <div className="space-y-8">
                          <div className="flex items-center justify-between">
                            <div className="w-20 h-20 bg-white/20 rounded-3xl flex items-center justify-center">
                              <project.icon className="w-10 h-10" />
                            </div>
                            <Badge
                              variant="secondary"
                              className="bg-white/20 border-0 flex items-center gap-1"
                            >
                              <Calendar className="w-3 h-3" />
                              {project.year}
                            </Badge>
                          </div>
                          <div className="space-y-4">
                            <Badge
                              variant="secondary"
                              className="bg-white/20 border-0"
                            >
                              {project.category}
                            </Badge>
                            <h3 className="text-3xl font-bold">
                              {project.name}
                            </h3>
                            <p className="text-xl opacity-90 leading-relaxed text-muted-foreground">
                              {project.overview}
                            </p>
                          </div>
                          {/* <div className="grid grid-cols-3 gap-4 pt-4">
                            {Object.entries(project.metrics).map(([key, value]) => (
                              <div key={key} className="text-center">
                                <div className="text-2xl font-bold">{value}</div>
                                <div className="text-sm opacity-75 capitalize">{key}</div>
                              </div>
                            ))}
                          </div> */}
                          {/* hide div in mobile view */}
                          <div className="space-y-1 xl:hidden">
                            <h4 className="font-semibold text-teal-600">
                              Color Scheme:
                            </h4>
                            <div className="flex flex-wrap gap-3">
                              {project.colors.map((skill, i) => (
                                <p key={i} className="text-muted-foreground">
                                  {"• "}
                                  {skill}
                                </p>
                              ))}
                            </div>
                          </div>

                          {project.resources.length > 0 && (
                            <div className="space-y-1">
                              <h4 className="font-semibold text-teal-600">
                                Resources:
                              </h4>
                              <div className="flex-wrap">
                                {project.resources.map((resource, i) => (
                                  <p key={i} className="text-muted-foreground">
                                    {"• "}
                                    {resource}
                                  </p>
                                ))}
                              </div>
                            </div>
                          )}

                          <Button
                            variant="outline"
                            className="hover:scale-105 transition-all duration-300 bg-transparent group border-1  "
                          >
                            View Prototype
                            <ExternalLink className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform" />
                          </Button>
                        </div>
                      </div>

                      {/* Project Details */}
                      <div className="xl:w-2/5 p-0 space-y-8">
                        {/* <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold text-teal-600 mb-2 flex items-center gap-2">
                              <Target className="w-4 h-4" />
                              My Role
                            </h4>
                            <p className="text-muted-foreground">
                              {project.role}
                            </p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-teal-600 mb-2 flex items-center gap-2">
                              <Calendar className="w-4 h-4" />
                              Duration
                            </h4>
                            <p className="text-muted-foreground">
                              {project.duration}
                            </p>
                          </div>
                          <div className="md:col-span-2">
                            <h4 className="font-semibold text-teal-600 mb-2 flex items-center gap-2">
                              <Users className="w-4 h-4" />
                              Team
                            </h4>
                            <p className="text-muted-foreground">
                              {project.team}
                            </p>
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold text-teal-600 mb-3">
                            Design Highlights
                          </h4>
                          <p className="text-muted-foreground leading-relaxed">
                            {project.highlights}
                          </p>
                        </div>

                        <div className="p-6 bg-green-50 dark:bg-green-900/20 rounded-xl border-l-4 border-green-500">
                          <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2 flex items-center gap-2">
                            <TrendingUp className="w-4 h-4" />
                            Business Impact
                          </h4>
                          <p className="text-green-700 dark:text-green-300">
                            {project.impact}
                          </p>
                        </div>

                        <div className="space-y-4">
                          <h4 className="font-semibold text-teal-600">
                            Skills Applied
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            <Badge
                              variant="secondary"
                              className="flex items-center space-x-1 bg-cyan-100 text-cyan-800 border-0"
                            >
                              <Figma className="w-3 h-3" />
                              <span>Figma</span>
                            </Badge>
                            {project.skills.map((skill, i) => (
                              <Badge
                                key={i}
                                variant="outline"
                                className="hover:scale-105 transition-transform"
                              >
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
                        </div> */}
                        <div className="space-y-1 xl:block hidden">
                          <h4 className="font-semibold text-teal-600">
                            Color Scheme:
                          </h4>
                          <div className="flex flex-wrap gap-3">
                            {project.colors.map((skill, i) => (
                              <p key={i} className="text-muted-foreground">
                                {"• "}
                                {skill}
                              </p>
                            ))}
                          </div>
                        </div>
                        <div className="space-y-3">
                          <h4 className="font-semibold text-teal-600">
                            Preview:
                          </h4>
                          <div className="space-y-3 flex-col border-1 border-muted-foreground/50 p-3 rounded-xl">
                            <div className="w-full">
                              <img
                                src={
                                  project.images[0]?.src || project.images[0]
                                }
                                alt={`${project.name}`}
                                className="w-full h-auto rounded-xl object-cover hover:scale-102 transition-transform duration-700"
                              />
                            </div>
                            <div className="grid grid-cols-3 gap-3 w-full">
                              {project.images.slice(1).map((src, i) => (
                                <div
                                  key={i}
                                  // onClick={() => setSelectedImage(src)}
                                  className="overflow-hidden rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
                                >
                                  <img
                                    src={src?.src || src}
                                    alt={`${project.name} screenshot ${i + 2}`}
                                    className="w-full h-auto object-cover hover:scale-110 transition-transform duration-300"
                                  />
                                </div>
                              ))}
                            </div>
                          </div>
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
            <p className="text-muted-foreground text-lg">
              Additional work showcasing diverse design challenges
            </p>
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
                        <Badge
                          variant="secondary"
                          className="text-xs mb-2 bg-gray-100 text-gray-800 border-0"
                        >
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
                      <p className="text-muted-foreground leading-relaxed text-sm">
                        {project.overview}
                      </p>
                      <div className="space-y-2">
                        <p className="text-xs text-teal-600 font-medium">
                          Color Scheme:
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.colors.slice(0, 3).map((color, i) => (
                            <Badge
                              key={i}
                              variant="outline"
                              className="text-xs"
                            >
                              {color}
                            </Badge>
                          ))}
                          {project.colors.length > 3 && (
                            <Badge variant="outline" className="text-xs">
                              +{project.colors.length - 3} more
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {/* <div className="p-4 bg-teal-50 dark:bg-teal-900/20 rounded-lg">
                        <p className="text-sm font-medium text-teal-800 dark:text-teal-200">
                          {project.impact}
                        </p>
                      </div> */}

                      {/* <div className="flex flex-wrap gap-2">
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
                      </div> */}

                      <Button
                        variant="ghost"
                        className=" justify-between group-hover:bg-primary/10 transition-colors"
                      >
                        View Prototype
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
                  Interested in My{" "}
                  <span className="gradient-text">Design Process?</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                  Each project tells a unique story of challenges overcome and
                  solutions crafted. I'd love to walk you through my detailed
                  case studies and share how I can help bring your vision to
                  life.
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
  );
}
