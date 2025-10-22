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
      color: "from-red-500 to-pink-500",
    },
    {
      icon: Target,
      title: "Results-Focused",
      description:
        "Every design decision has a purpose. I focus on clarity, usability, and measurable outcomes that help brands grow.",
      color: "from-blue-500 to-cyan-500",
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
      year: "2024",
      title: "Senior UI/UX Designer",
      company: "TechFlow Solutions",
      description:
        "Leading design for enterprise SaaS products, mentoring junior designers, and establishing design systems that serve 100K+ users globally.",
      achievements: [
        "Led 5 major product launches",
        "Mentored 3 junior designers",
        "Established design system",
      ],
    },
    {
      year: "2023",
      title: "UI/UX Designer",
      company: "StartupHub Collective",
      description:
        "Designed mobile and web applications for various startups, focusing on user acquisition and retention strategies.",
      achievements: [
        "Delivered 12+ product launches",
        "Improved conversion by 35%",
        "Built user research processes",
      ],
    },
    {
      year: "2022",
      title: "Junior Designer",
      company: "Creative Digital Agency",
      description:
        "Started my professional journey creating digital experiences for diverse clients across healthcare, fintech, and e-commerce.",
      achievements: [
        "Completed 20+ client projects",
        "95% client satisfaction",
        "Accessibility expertise",
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

  return (
    <div className="container mx-auto px-4 py-8 space-y-20">
      {/* Hero Section */}
      <ScrollAnimation delay={200}>
        <div className="w-48 h-48 mx-auto rounded-full gradient-bg p-1 animate-pulse-glow">
          <div className="w-full h-full rounded-full bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 flex items-center justify-center">
            <User className="w-24 h-24 text-purple-600" />
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
                className="text-base py-3 px-6 hover:scale-110 transition-all duration-300 card-hover cursor-pointer bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-0"
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
            <h2 className="text-3xl md:text-4xl font-bold">My Journey</h2>
            <p className="text-muted-foreground text-lg">
              How I've grown as a designer over the years
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-8">
            {journey.map((item, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row gap-8 items-start animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-full gradient-bg flex items-center justify-center text-white font-bold text-lg animate-pulse-glow">
                    {item.year}
                  </div>
                </div>
                <Card className="flex-grow border-0 gradient-bg-soft card-hover">
                  <CardContent className="p-6 space-y-4">
                    <div>
                      <h3 className="text-xl font-bold">{item.title}</h3>
                      <p className="text-purple-600 font-medium">
                        {item.company}
                      </p>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm text-purple-600">
                        Key Achievements:
                      </h4>
                      <ul className="space-y-1">
                        {item.achievements.map((achievement, i) => (
                          <li
                            key={i}
                            className="text-sm text-muted-foreground flex items-center"
                          >
                            <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></div>
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
                <Coffee className="w-16 h-16 text-purple-600 animate-float" />
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold">
                  Beyond the Pixels
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                  When I’m not designing, you’ll find me sketching concepts,
                  enjoying nature walks, or experimenting with photography. I
                  believe inspiration is everywhere — in colors, people, and
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
                  className="bg-blue-100 text-blue-800 border-0"
                >
                  📚 Reading
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-purple-100 text-purple-800 border-0"
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
