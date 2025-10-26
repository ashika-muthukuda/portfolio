import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollAnimation } from "@/components/scroll-animation";
import {
  GraduationCap,
  Award,
  Heart,
  User,
  Target,
  Lightbulb,
  Coffee,
  MapPin,
  Calendar,
  Palette,
  Camera,
} from "lucide-react";

export default function About() {
  const skills = [
    "User Research & Usability Testing",
    "Wireframing & Interactive Prototyping",
    "Visual Design & Branding",
    "Figma & Design Systems",
    "Accessibility & Inclusive Design",
    "Cross-Functional Collaboration",
    "Design Thinking & Problem Solving",
    "Information Architecture",
    "A/B Testing & Feedback Loops",
    "Agile Methodology & Iterative Design",
  ];

  const values = [
    {
      icon: Heart,
      title: "Empathy-Driven",

      description:
        "I design with people in mind — understanding user emotions, behaviors, and needs to create human-centered solutions.",
      color: "from-emerald-500 to-teal-500",
    },
    {
      icon: Target,
      title: "Results-Focused",

      description:
        "Every design decision has a purpose. I focus on clarity, usability, and measurable outcomes that help brands grow.",
      color: "from-teal-500 to-cyan-500",
    },
    {
      icon: Lightbulb,
      title: "Innovation-Minded",

      description:
        "I love experimenting with new design tools, creative styles, and emerging technologies to build modern, future-ready interfaces.",
      color: "from-yellow-500 to-orange-500",
    },
  ];

  const journey = [
    {
      year: "2022 – Present",
      title: "BSc. (Hons) in Software Engineering",
      company: "Sri Lanka Technology Campus",
      description: "Expected Graduation: 2026",
      achievements: [
        "UI/UX Design & Human-Computer Interaction (HCI)",
        "Front-End Development",
        "Software Project Management",
        "Creative Problem Solving",
      ],
    },
  ];

  const personalInterests = [
    {
      icon: Palette,
      label: "Artist at Heart",
      description: "sketching and digital painting keep my creativity flowing.",
    },
    {
      icon: MapPin,
      label: "Nature Explorer",
      description: "I find clarity in hiking and outdoor adventures.",
    },
    {
      icon: Camera,
      label: "Photographer",
      description: "capturing light, texture, and emotion in everyday life.",
    },
  ];

  const certifications = [
    {
      name: "Professional Logo Design in Adobe Illustrator",
      year: "2024",
      issuer: "Udemy",
    },
    {
      name: "Photoshop for Web Design Beginners",
      year: "2024",
      issuer: "Udemy",
    },
    {
      name: "Programming in Python: Python for Beginners",
      year: "2024",
      issuer: "University of Moratuwa",
    },
    {
      name: "Web Design for Beginners",
      year: "2024",
      issuer: "University of Moratuwa",
    },
    {
      name: "Listening & Speech in English",
      year: "2023",
      issuer: "Open University",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 space-y-20">
      {/* Hero Section */}
      <section className="text-center space-y-8 py-16">
        <ScrollAnimation delay={200}>
          <div className="w-48 h-48 mx-auto rounded-full gradient-bg p-1 animate-pulse-glow">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-emerald-100 to-cyan-100 dark:from-emerald-900 dark:to-cyan-900 flex items-center justify-center">
              <User className="w-24 h-24 text-teal-600" />
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation>
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold">
              Hi, I'm <span className="gradient-text">Ashika</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              A BSc. (Hons) Software Engineering undergraduate at SLTC Research
              University and a UI/UX designer with a creative engineering
              mindset. I specialize in crafting user-centered digital
              experiences that balance functionality, emotion, and visual
              appeal. My design philosophy revolves around simplicity, empathy,
              and innovation — because I believe every design should make
              technology feel more human and purposeful.
              <br />
              <br />
              Beyond academics, I’m actively involved in creative and leadership
              roles at SLTC, contributing to projects that combine design,
              technology, and collaboration.
            </p>
          </div>
        </ScrollAnimation>
      </section>

      {/* Values */}
      <ScrollAnimation>
        <section className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              My Design Philosophy
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              These values shape every design I create and every collaboration I
              take part in.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 stagger-children">
            {values.map((value, index) => (
              <Card
                key={index}
                className="border-0 gradient-bg-soft card-hover text-center group"
              >
                <CardContent className="p-8 space-y-6">
                  <div
                    className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-r ${value.color} flex items-center justify-center group-hover:scale-110 transition-all duration-300`}
                  >
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold group-hover:gradient-text transition-all duration-300">
                      {value.title}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </ScrollAnimation>

      {/* Skills */}
      <ScrollAnimation>
        <section className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              What I Bring to the Table
            </h2>
            <p className="text-muted-foreground text-lg px-80">
              A blend of technical knowledge and design expertise built through
              hands-on experience and leadership roles in university
              organizations and creative projects.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 stagger-children">
            {skills.map((skill, index) => (
              <Badge
                key={skill}
                variant="secondary"
                className="text-base py-3 px-6 hover:scale-110 transition-all duration-300 card-hover cursor-pointer bg-gradient-to-r from-emerald-50 to-cyan-50 dark:from-emerald-900/20 dark:to-cyan-900/20 border-0"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {skill}
              </Badge>
            ))}
          </div>
        </section>
      </ScrollAnimation>

      {/* Journey */}
      <ScrollAnimation>
        <section className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              My Educational Journey
            </h2>

            <p className="text-muted-foreground text-lg">
              How I’ve grown as a designer and creative technologist.
            </p>
          </div>
          <div className="max-w-5xl mx-auto space-y-8">
            {journey.map((item, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row gap-8 items-start animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <Card className="flex-grow border-0 gradient-bg-soft card-hover">
                  <CardContent className="px-6 space-y-4">
                    <div className="flex justify-between items-start gap-4">
                      <div className="flex-shrink-0">
                        <h3 className="text-xl font-bold">{item.title}</h3>

                        <p className="text-teal-600 font-medium">
                          {item.company}
                        </p>
                      </div>
                      <div className="w-48 h-8 rounded-full flex items-center justify-center font-bold text-lg animate-pulse-glow">
                        {item.year}
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm text-teal-600">
                        Key Focus Areas:
                      </h4>
                      <ul className="space-y-1">
                        {item.achievements.map((achievement, i) => (
                          <li
                            key={i}
                            className="text-sm text-muted-foreground flex items-center"
                          >
                            <div className="w-1.5 h-1.5 bg-teal-500 rounded-full mr-2"></div>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </section>
      </ScrollAnimation>

      {/* Education & Achievements */}
      <ScrollAnimation>
        <section className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h2 className="text-2xl font-bold flex items-center space-x-3">
              <GraduationCap className="w-8 h-8 text-teal-600" />
              <span>Other Education</span>
            </h2>
            <div className="space-y-6">
              <Card className="border-0 gradient-bg-soft card-hover">
                <CardContent className="py-1 space-y-1">
                  <h3 className="text-lg font-semibold">
                    Graphic Design Course (NVQ Level 4)
                  </h3>

                  <p className="text-teal-600 font-medium">
                    National Youth Service Council, Polgolla
                  </p>
                  <p className="text-sm text-muted-foreground">2021</p>
                  <div className="flex flex-wrap gap-2 pt-6">
                    <Badge variant="outline" className="text-xs">
                      Visual Design
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Branding & Digital Art
                    </Badge>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-0 gradient-bg-soft card-hover">
                <CardContent className="py-1 space-y-1">
                  <h3 className="text-lg font-semibold">
                    Diploma in Information Technology
                  </h3>
                  <p className="text-teal-600 font-medium">
                    Sath Sahana Foundation
                  </p>
                  <p className="text-sm text-muted-foreground">2020</p>
                  <div className="flex flex-wrap gap-2 pt-6">
                    <Badge variant="outline" className="text-xs">
                      Web Design Fundamentals
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Basic Programming (Python, HTML, CSS)
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Digital Literacy
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* <div className="space-y-8">
            <h2 className="text-2xl font-bold flex items-center space-x-3">
              <Award className="w-8 h-8 text-teal-600" />
              <span>Recognition</span>
            </h2>
            <div className="space-y-6">
              <Card className="border-0 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 card-hover">
                <CardContent className="space-y-3">
                  <h3 className="text-lg font-semibold">
                    CodeMania Competition 2025
                  </h3>
                  <p className="text-muted-foreground">
                    Showcased design and problem-solving skills through
                    interactive UI prototyping.
                  </p>
                  <Badge
                    variant="secondary"
                    className="bg-green-100 text-green-800 border-0"
                  >
                    4th Place
                  </Badge>
                </CardContent>
              </Card>
              <Card className="border-0 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 card-hover">
                <CardContent className="space-y-3">
                  <h3 className="text-lg font-semibold">IEEE IAS SLTC</h3>

                  <p className="text-muted-foreground">
                    Recognized for exceptional contributions to design and
                    project execution.
                  </p>
                  <Badge
                    variant="secondary"
                    className="bg-green-100 text-green-800 border-0"
                  >
                    IEEE Volunteer of the Month — March & December 2023
                  </Badge>
                </CardContent>
              </Card>
              <Card className="border-0 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 card-hover">
                <CardContent className="space-y-3">
                  <h3 className="text-lg font-semibold">
                    Master Designer V2.0
                  </h3>

                  <p className="text-muted-foreground">
                    Successfully coordinated one of SLTC’s largest all-island
                    design competitions.{" "}
                  </p>
                  <Badge
                    variant="secondary"
                    className="bg-green-100 text-green-800 border-0"
                  >
                    Project Success{" "}
                  </Badge>
                </CardContent>
              </Card>
            </div>
          </div> */}

          <div className="space-y-8">
            {/* Certifications */}
            <div className="text-center space-y-4">
              <h2 className="text-2xl font-bold flex items-center space-x-3">
                <GraduationCap className="w-8 h-8 text-teal-600" />
                <span>Certifications & Learning</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {certifications.map((cert, index) => (
                <ScrollAnimation key={index} delay={index * 100}>
                  <Card className="border-0 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 card-hover">
                    <CardContent className="px-6 space-y-3">
                      <div className="flex items-start justify-between">
                        <div className="space-y-1">
                          <h3 className="font-semibold">{cert.name}</h3>
                          <p className="text-teal-600 font-medium">
                            {cert.issuer}
                          </p>
                        </div>
                        {/* <Badge
                          variant="secondary"
                          className="bg-cyan-100 text-cyan-800 border-0"
                        >
                          {cert.year}
                        </Badge> */}
                      </div>
                    </CardContent>
                  </Card>
                </ScrollAnimation>
              ))}
            </div>{" "}
          </div>

         
        </section>
      </ScrollAnimation>

      {/* Achievements */}
      <ScrollAnimation>
        <section className="space-y-12">
          <div className="text-center space-y-4 flex justify-center align-center">
            <h2 className="text-2xl font-bold items-center space-x-3 flex">
              <Award className="w-8 h-8 text-teal-600" />
              <span>Recognition</span>
            </h2>
          </div>

          <section className="grid md:grid-cols-2 gap-6">
                <Card className="border-0 gradient-bg-soft card-hover">
                  <CardContent className="space-y-3">
                    <h3 className="text-lg font-semibold">
                      CodeMania Competition 2025
                    </h3>
                    <p className="text-muted-foreground">
                      Showcased design and problem-solving skills through
                      interactive UI prototyping.
                    </p>
                    <Badge
                      variant="secondary"
                      className="bg-green-50 text-green-800 border-0"
                    >
                      4th Place
                    </Badge>
                  </CardContent>
                </Card>
                <Card className="border-0 gradient-bg-soft card-hover">
                  <CardContent className="space-y-3">
                    <h3 className="text-lg font-semibold">IEEE IAS SLTC</h3>

                    <p className="text-muted-foreground">
                      Recognized for exceptional contributions to design and
                      project execution.
                    </p>
                    <Badge
                      variant="secondary"
                      className="bg-green-50 text-green-800 border-0"
                    >
                      IEEE Volunteer of the Month — March & December 2023
                    </Badge>
                  </CardContent>
                </Card>
                <Card className="border-0 gradient-bg-soft card-hover">
                  <CardContent className="space-y-3">
                    <h3 className="text-lg font-semibold">
                      Master Designer V2.0
                    </h3>

                    <p className="text-muted-foreground">
                      Successfully coordinated one of SLTC’s largest all-island
                      design competitions.{" "}
                    </p>
                    <Badge
                      variant="secondary"
                      className="bg-green-50 text-green-800 border-0"
                    >
                      Project Success{" "}
                    </Badge>
                  </CardContent>
                </Card>
          </section>
        </section>
      </ScrollAnimation>

      {/* Personal Interests */}
      <ScrollAnimation>
        <section className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Beyond Design</h2>

            <p className="text-muted-foreground text-lg">
              What fuels my creativity outside the digital canvas.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {personalInterests.map((interest, index) => (
              <Card
                key={index}
                className="border-0 gradient-bg-soft card-hover text-center group"
              >
                <CardContent className="p-8 space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-2xl gradient-bg flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                    <interest.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold group-hover:gradient-text transition-all duration-300">
                      {interest.label}
                    </h3>

                    <p className="text-muted-foreground text-sm">
                      {interest.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </ScrollAnimation>

      {/* Personal Touch */}
      <ScrollAnimation>
        <section className="text-center space-y-8">
          <Card className="border-0 gradient-bg-soft max-w-4xl mx-auto card-hover">
            <CardContent className="p-12 space-y-8">
              <div className="flex justify-center">
                <Coffee className="w-16 h-16 text-teal-600 animate-float" />
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold">
                  Beyond the Pixels
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                  When I’m not designing, you’ll find me sketching concepts,
                  enjoying nature walks, or experimenting with photography. I
                  believe inspiration is everywhere, in colors, people, and
                  stories. These little experiences spark new ideas and help me
                  create designs that are authentic, emotional, and human.
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                <Badge
                  variant="secondary"
                  className="bg-orange-100 text-orange-800 border-0"
                >
                  ☕ Coffee Lover
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-green-100 text-green-800 border-0"
                >
                  🥾 Hiking
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-cyan-100 text-cyan-800 border-0"
                >
                  📚 Reading
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-emerald-100 text-emerald-800 border-0"
                >
                  🍳 Cooking
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-pink-100 text-pink-800 border-0"
                >
                  ✏️ Sketching
                </Badge>
              </div>
            </CardContent>
          </Card>
        </section>
      </ScrollAnimation>
    </div>
  );
}
