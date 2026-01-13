"use client";

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
  X,
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
import imgp51 from "../../assets/imgs/img-p51.png";
import imgp52 from "../../assets/imgs/img-p52.png";
import imgp53 from "../../assets/imgs/img-p53.png";
import imgp54 from "../../assets/imgs/img-p54.png";
import imgp61 from "../../assets/imgs/img-p61.png";
import imgp62 from "../../assets/imgs/img-p62.png";
import imgp63 from "../../assets/imgs/img-p63.png";
import imgp64 from "../../assets/imgs/img-p64.png";
import imgp71 from "../../assets/imgs/img-p71.jpeg";
import imgp72 from "../../assets/imgs/img-p72.png";
import imgp73 from "../../assets/imgs/img-p73.png";
import imgp74 from "../../assets/imgs/img-p74.png";
import imgp81 from "../../assets/imgs/img-p81.png";
import imgp82 from "../../assets/imgs/img-p82.png";
import imgp83 from "../../assets/imgs/img-p83.png";
import imgp84 from "../../assets/imgs/img-p84.png";

import Image from "next/image";
import { useState } from "react";

export default function Projects() {
  const [selectedImage, setSelectedImage] = useState(null);
  const closeModal = () => setSelectedImage(null);

  const projects = [
    {
      name: "HealthChat AI – Your Personal Health Assistant",
      category: "Healthcare • Web Designs",
      overview:
      "HealthChat AI is a web application designed to provide users with a friendly and intelligent health assistant experience. It combines conversational AI with an easy-to-use interface to help users get accurate health information, track symptoms, and receive personalized health guidance. The core idea is to make healthcare advice accessible, interactive, and reliable, without replacing medical professionals but supporting users with instant insights.",
      resources: [
        "Pinterest and Freepik (for imagery and layout ideas)",
      ],
      colors: ["Light Blue", "Blue with white accents"],
      images: [imgp51, imgp52, imgp53, imgp54],
      icon: Monitor,
      color: "from-emerald-500 to-teal-500",
      featured: true,
      normal: false,
      year: "2026",
      link: "https://bit.ly/3Nhtmv8",
    },
    {
      name: "Mood-Based Daily Planner",
      category: "Supportive Application • Mobile UI Designs",
      overview:
      "The Mood-Based Daily Planner is a mobile task planning interface designed to support productivity while respecting the user’s emotional state. Unlike traditional to-do list applications, this design adapts its layout, colors, and task suggestions based on how the user feels, creating a more personal and supportive experience. In my Mood-Based Daily Planner UI, I designed the interface around three main user moods (Happy, Tired, and Stressed). Each mood changes the visual style and task experience, making the app feel more personal and emotionally supportive.",
      resources: [
      ],
      colors: ["Orange, Purple, Green with white accents"],
      images: [imgp61],
      icon: Smartphone,
      color: "fai coursesrom-emerald-500 to-teal-500",
      featured: true,
      normal: false,
      year: "2026",
      link: "https://bit.ly/4suTPWc",
    },
    {
      name: "Visit Sri Lanka – Travel Discovery Web App",
      category: "Tourism • Web Designs",
      overview:
      "Visit Sri Lanka is a modern travel discovery web application UI designed to help users explore tourist destinations across Sri Lanka in a simple, visually engaging, and user-friendly way. This project focuses on creating a smooth digital experience that allows both local and international travelers to discover places, plan trips, and gain inspiration for their journeys.",
      resources: ["Pinterest, Google and Freepik (for imagery and layout ideas)"
      ],
      colors: ["Blue, Green with white accents"],
      images: [imgp81, imgp82, imgp83, imgp84],
      icon: Monitor,
      color: "from-emerald-500 to-teal-500",
      featured: true,
      normal: false,
      year: "2026",
      link: "https://bit.ly/3YyrMYe",
    },
    {
      name: "Local Makers – Sri Lankan Handicrafts Marketplace",
      category: "Business • Web Designs",
      overview:
      "Local Makers is a conceptual web-based marketplace designed to connect Sri Lankan artisans with conscious consumers who value authenticity, tradition, and handcrafted quality. The platform celebrates Sri Lanka’s rich craft heritage by providing a digital space where traditional artisans can showcase and sell their products while preserving cultural techniques and supporting sustainable livelihoods. This UI design was created with a focus on • Handicrafts • Heritage • Heart, ensuring a warm, human-centered experience that reflects the spirit of Sri Lankan craftsmanship.",
      resources: [
      ],
      colors: ["Warm terracotta", "amber", "earth tones reflecting clay, soil, and traditional dyes"],
      images: [imgp71, imgp72, imgp73, imgp74],
      icon: Monitor,
      color: "from-emerald-500 to-teal-500",
      featured: true,
      normal: false,
      year: "2026",
      link: "https://bit.ly/4qNq0P7",
    },
    {
      name: "Donut Delight - Flavorful Donut Banner Design",
      category: "Food & Beverage • Web Designs",
      overview:
        "A vibrant and appetizing Figma design featuring a set of banner templates for a donut shop, 'Donut Delight.' This design showcases three unique flavors: Strawberry, Blueberry, and Green Apple, each with a colorful background and mint leaf accents. Perfect for promotional materials, websites, or social media, this template offers a playful yet professional look. Ideal for designers, food businesses, or marketers looking to highlight their products. Inspiration drawn from YouTube tutorials and Pinterest boards.",
      resources: [
        "YouTube (for design tutorials and inspiration)",
        "Pinterest (for plant imagery and layout ideas)",
      ],
      colors: ["Pink", "purple", "green with white accents"],
      images: [imgp11, imgp12, imgp13, imgp14],
      icon: Monitor,
      color: "from-emerald-500 to-teal-500",
      normal: true,
      year: "2025",
      link: "https://bit.ly/3J7AHfd",
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
      link: "https://bit.ly/4qzd6F0",
    },
    {
      name: "Juicy Smoothie Bar - Beverage Menu Design",
      category: "Food & Beverage • Web Designs",
      overview:
        "A refreshing and vibrant Figma design for a smoothie bar menu, 'Juicy Smoothie Bar'. This template features a sleek layout showcasing four delicious flavors: Blueberry Bliss, Mango Magic, Avocado Dream, and Strawberry Spark. Each section includes vibrant imagery, flavor descriptions, and a call-to-action, all set against a modern color scheme. Perfect for beverage websites, menus, or promotional materials. Ideal for designers, food businesses, or health enthusiasts. Inspiration drawn from YouTube tutorials and Pinterest boards.",
      resources: [
        "YouTube (for design tutorials and inspiration)",
        "Pinterest (for plant imagery and layout ideas)",
      ],
      colors: ["Purple", "Orange", "Green", "Pink with white accents"],
      images: [imgp31],
      icon: Monitor,
      color: "from-emerald-500 to-teal-500",
      normal: true,
      year: "2025",
      link: "https://bit.ly/4qzdljo",
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
      link: "https://bit.ly/4qvmwRI",
    },

    {
      name: "Eduwingz – AI-Powered Teaching Assistant Web Application",
      category: "Education • Final Yaer Project • Web Designs",
      overview:
        "Eduwingz is an intelligent web application designed to enhance modern education by providing personalized support to both teachers and students. With AI-powered interaction and automation, the system simplifies classroom management, learning, and teaching processes. Built with a React (Material UI) frontend and a Django backend, Eduwingz seamlessly connects AI capabilities with a smooth, responsive user interface. Perfect for students, teachers, and educational platforms seeking a smart, interactive, and automated learning assistant.",
      resources: [
        "YouTube (for design tutorials and inspiration)",
        "Pinterest (for plant imagery and layout ideas)",
      ],
      colors: ["Orenge", "Yellow", "Black accents"],
      images: [imgp31],
      icon: Monitor,
      color: "from-emerald-500 to-teal-500",
      other: true,
      year: "2025",
      link: "https://github.com/ashika-muthukuda/eduwingz",
    },

    {
      name: "Z-Score Uni Finder – University & Degree Selection Tool",
      category: "Education • Web Designs",
      overview:
        "A smart and user-friendly web application built to help students accurately find universities and degree programs based on their Z-Score. This project allows users to select their district, stream, and Z-Score to instantly view compatible degree options across Sri Lankan universities. Designed with a clean interface and smooth navigation, the system displays results dynamically, making the decision-making process easier for A/L students. Perfect for students, counselors, and educational platforms looking for a quick and reliable Z-Score–based university search tool.",
      resources: [
        "YouTube (for design tutorials and inspiration)",
        "Pinterest (for plant imagery and layout ideas)",
      ],
      colors: ["Blue", "White", "Light Grey accents"],
      images: [imgp31],
      icon: Monitor,
      color: "from-emerald-500 to-teal-500",
      other: true,
      year: "2025",
      link: "https://github.com/ashika-muthukuda/Z-ScoreUniFinder",
    },

    {
      name: "GNN – OGBN Arxiv Dataset Project",
      category: "Graphs and Vectors • AI Projects",
      overview:
        "A deep learning project focused on implementing Graph Neural Network (GNN) models using the OGBN-Arxiv dataset. This work explores node classification on a large-scale citation network, where each paper is represented as a node with meaningful features and connections. The project includes data preprocessing, model training, performance evaluation, and comparisons between different GNN architectures. Ideal for students, researchers, or anyone interested in graph-based machine learning and citation network analysis.",
      resources: [
        "YouTube (for design tutorials and inspiration)",
        "Pinterest (for plant imagery and layout ideas)",
      ],
      colors: ["No any color"],
      images: [imgp31],
      icon: Monitor,
      color: "from-emerald-500 to-teal-500",
      other: true,
      year: "2025",
      link: "https://github.com/ashika-muthukuda/Z-ScoreUniFinder",
    },

    {
      name: "AR Animal Learning App for Kids – Interactive 3D Animal Education",
      category: "Other • AR Application",
      overview:
        "An engaging Augmented Reality (AR) app designed to help children explore and learn about animals in a fun, interactive way. By combining 3D animal models with real-world views, the app transforms traditional learning into an immersive experience. Kids can view animals like Cat, Tiger, Deer, and Horse by scanning images or markers, while a grassy background adds realism. The app also provides short descriptions for each animal, making learning informative and enjoyable. Perfect for educators, parents, or developers interested in child-friendly AR applications.",
      resources: [
        "YouTube (for design tutorials and inspiration)",
        "Pinterest (for plant imagery and layout ideas)",
      ],
      colors: ["White", "Gray"],
      images: [imgp31],
      icon: Monitor,
      color: "from-emerald-500 to-teal-500",
      other: true,
      year: "2025",
      link: "",
    },

    {
      name: "GlobalBooks SOA Project",
      category: "Education • Web Designs",
      overview:
        "GlobalBooks Inc. is migrating its legacy monolithic order-processing system to a Service-Oriented Architecture (SOA). This project implements four autonomous services - Catalog, Orders, Payments, and Shipping - designed, implemented, composed, secured, and governed according to SOA principles.",
      resources: [
        "YouTube (for design tutorials and inspiration)",
        "Pinterest (for plant imagery and layout ideas)",
      ],
      colors: [""],
      images: [imgp31],
      icon: Monitor,
      color: "from-emerald-500 to-teal-500",
      other: true,
      year: "2025",
      link: "https://github.com/ashika-muthukuda/soa_project",
    },

    {
      name: "NIC Decoder – National ID Information Extractor",
      category: "Education • Web Designs",
      overview:
        "A simple and efficient web tool that extracts key information from Sri Lankan National Identity Card (NIC) numbers. This project decodes the NIC to display the holder’s birth year, birth date, and gender in an easy-to-read format. Designed with a clean interface, the tool is perfect for developers, students, or anyone interested in quickly retrieving NIC-related data. Ideal for learning, demonstration, or practical use in local applications. Inspired by hands-on coding practice and personal project experimentation.",
      resources: [
        "YouTube (for design tutorials and inspiration)",
        "Pinterest (for plant imagery and layout ideas)",
      ],
      colors: [""],
      images: [imgp31],
      icon: Monitor,
      color: "from-emerald-500 to-teal-500",
      other: true,
      year: "2025",
      link: "https://github.com/ashika-muthukuda/soa_project",
    },
  ];

  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => p.other);
  const normalProjects = projects.filter((p) => p.normal);

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
      name: "Landing Pages",
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
                {category.name}
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
                            <h3 className="text-2xl font-bold">
                              {project.name}
                            </h3>
                            <p className="text-lg opacity-90 leading-relaxed text-muted-foreground">
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

                          <Link
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Button
                              variant="outline"
                              className="hover:scale-105 transition-all duration-300 bg-transparent group border-1  "
                            >
                              View Prototype
                              <ExternalLink className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform" />
                            </Button>
                          </Link>
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
                            <div
                              className="w-full"
                              onClick={() => setSelectedImage(project.images[0]?.src || project.images[0])}
                            >
                              <Image
                                src={
                                  project.images[0]?.src || project.images[0]
                                }
                                alt={`${project.name}`}
                                width={600}
                                height={400}
                                className="w-full h-auto rounded-xl object-cover hover:scale-102 transition-transform duration-700"
                              />
                            </div>
                            <div className="grid grid-cols-3 gap-3 w-full">
                              {project.images.slice(1).map((src, i) => (
                                <div
                                  key={i}
                                  onClick={() =>
                                    setSelectedImage(src || src?.src)
                                  }
                                  className="overflow-hidden rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
                                >
                                  <Image
                                    src={src?.src || src}
                                    alt={`${project.name} screenshot ${i + 2}`}
                                    width={200}
                                    height={200}
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
          <div className="grid md:grid-cols-2 gap-8">
            {normalProjects.map((project, index) => (
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

                    <div className="space-y-3 flex-col">
                      <h3 className="text-xl font-bold group-hover:gradient-text transition-all duration-300">
                        {project.name}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-sm">
                        {project.overview}
                      </p>
                      {/* {project.colors.length > 0 && (
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
                      )} */}
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
                      <div className="grid grid-cols-4 gap-2 w-full">
                        {project.images.slice(0).map((src, i) => (
                          <div
                            key={i}
                            onClick={() => setSelectedImage(src?.src || src)}
                            className="overflow-hidden rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
                          >
                            <Image
                              src={src?.src || src}
                              alt={`${project.name} screenshot ${i + 2}`}
                              width={250}
                              height={250}
                              className="object-contain hover:scale-110 transition-transform duration-300"
                            />
                          </div>
                        ))}
                      </div>

                      <Link href={project.link}>
                        <Button
                          variant="ghost"
                          className=" justify-between group-hover:bg-primary/10 transition-colors"
                        >
                          View Project
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
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
            <h2 className="text-3xl md:text-4xl font-bold">Other Projects</h2>
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

                    <div className="space-y-3 flex-col">
                      <h3 className="text-xl font-bold group-hover:gradient-text transition-all duration-300">
                        {project.name}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-sm">
                        {project.overview}
                      </p>
                      {/* {project.colors.length > 0 && (
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
                      )} */}
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

                      <Link href={project.link}>
                        <Button
                          variant="ghost"
                          className=" justify-between group-hover:bg-primary/10 transition-colors"
                        >
                          View Project
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
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

      {/* Popup Modal */}
      {selectedImage && (
        <div
          onClick={closeModal}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50"
        >
          <div className="relative max-h-11/12 max-w-11/12 justify-center align-middle flex">
            <Image
              src={selectedImage}
              alt="Preview"
              width={1000}
              height={800}
              className="shadow-lg object-contain"
            />
          </div>
          <button
            onClick={closeModal}
            className="absolute top-5 right-5 bg-black/60 text-white rounded-full p-3 hover:bg-black transition"
            aria-label="Close image preview"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      )}
    </div>
  );
}
