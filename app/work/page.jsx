import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollAnimation } from "@/components/scroll-animation"
import { Briefcase, Heart, Users, TrendingUp, Building, Rocket, Calendar, MapPin } from "lucide-react"

export default function Work() {
  const workExperience = [
    {
      title: "Senior UI/UX Designer",
      company: "TechFlow Solutions",
      period: "Jan 2024 - Present",
      type: "Full-time",
      location: "San Francisco, CA",
      description:
        "Leading design initiatives for enterprise SaaS products serving 100K+ users. Established comprehensive design system and mentored a team of 3 junior designers.",
      achievements: [
        "Increased user engagement by 45% through redesigned onboarding flow",
        "Reduced support tickets by 30% with improved information architecture",
        "Led design system adoption across 5 product teams",
        "Mentored 3 junior designers with 100% retention rate",
      ],
      skills: ["Design Leadership", "Enterprise UX", "Design Systems", "Mentoring", "Figma", "User Research"],
      icon: Briefcase,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "UI/UX Designer",
      company: "StartupHub Collective",
      period: "Jun 2022 - Dec 2023",
      type: "Full-time",
      location: "Remote",
      description:
        "Designed mobile and web applications for various startups in the collective, focusing on rapid prototyping and user validation.",
      achievements: [
        "Delivered 12+ successful product launches",
        "Improved average conversion rates by 35% across portfolio companies",
        "Established user research processes for early-stage startups",
        "Built design system used by 8 different products",
      ],
      skills: ["Mobile Design", "Rapid Prototyping", "User Research", "A/B Testing", "Startup Strategy"],
      icon: Rocket,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Junior UI/UX Designer",
      company: "Creative Digital Agency",
      period: "Aug 2021 - May 2022",
      type: "Full-time",
      location: "Los Angeles, CA",
      description:
        "Collaborated with cross-functional teams to create digital experiences for clients across healthcare, fintech, and e-commerce industries.",
      achievements: [
        "Contributed to 20+ client projects with 95% satisfaction rate",
        "Specialized in accessibility-first design approach",
        "Developed expertise in design for regulated industries",
        "Won 'Rising Star Designer' award in 2022",
      ],
      skills: ["Client Collaboration", "Accessibility", "Healthcare UX", "Fintech Design", "Adobe Creative Suite"],
      icon: Building,
      color: "from-emerald-500 to-teal-500",
    },
  ]

  const volunteering = [
    {
      title: "Lead UX Designer",
      organization: "Code for Good",
      period: "Mar 2023 - Present",
      description:
        "Leading design efforts for nonprofit organizations, focusing on creating accessible digital solutions for underserved communities.",
      impact: "Designed platforms serving 10,000+ community members",
      projects: ["Community Resource Portal", "Food Bank Management System", "Volunteer Coordination App"],
      icon: Heart,
      color: "from-red-500 to-pink-500",
    },
    {
      title: "Design Mentor",
      organization: "Women in Design Collective",
      period: "Jan 2023 - Present",
      description:
        "Mentoring aspiring female designers through career transitions, portfolio reviews, and skill development workshops.",
      impact: "Mentored 25+ designers with 80% job placement success",
      projects: ["Monthly Portfolio Reviews", "Career Transition Workshops", "Design Challenge Bootcamps"],
      icon: Users,
      color: "from-indigo-500 to-purple-500",
    },
  ]

  const certifications = [
    { name: "Google UX Design Professional Certificate", year: "2023", issuer: "Google" },
    { name: "Certified Usability Analyst (CUA)", year: "2023", issuer: "Human Factors International" },
    { name: "Accessibility Specialist Certification", year: "2022", issuer: "IAAP" },
    { name: "Design Thinking Facilitator", year: "2022", issuer: "IDEO" },
  ]

  return (
    <div className="container mx-auto px-4 py-8 space-y-20">
      {/* Hero Section */}
      <section className="text-center space-y-8 py-16">
        <ScrollAnimation>
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold">
              My Professional <span className="gradient-text">Journey</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              From junior designer to design leader, here's how I've grown while creating impactful digital experiences
              and building meaningful relationships along the way.
            </p>
          </div>
        </ScrollAnimation>
      </section>

      {/* Work Experience */}
      <ScrollAnimation>
        <section className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Professional Experience</h2>
            <p className="text-muted-foreground text-lg">Where I've made an impact and grown as a designer</p>
          </div>

          <div className="space-y-8">
            {workExperience.map((job, index) => (
              <ScrollAnimation key={index} delay={index * 100}>
                <Card className="border-0 gradient-bg-soft card-hover overflow-hidden">
                  <CardContent className="p-0">
                    <div className="flex flex-col lg:flex-row">
                      {/* Company Info */}
                      <div className={`lg:w-1/3 p-8 bg-gradient-to-br ${job.color} text-white`}>
                        <div className="space-y-6">
                          <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                            <job.icon className="w-8 h-8" />
                          </div>
                          <div className="space-y-3">
                            <h3 className="text-2xl font-bold">{job.title}</h3>
                            <p className="text-xl opacity-90">{job.company}</p>
                            <div className="flex flex-wrap gap-2">
                              <Badge
                                variant="secondary"
                                className="bg-white/20 text-white border-0 flex items-center gap-1"
                              >
                                <Calendar className="w-3 h-3" />
                                {job.period}
                              </Badge>
                              <Badge variant="secondary" className="bg-white/20 text-white border-0">
                                {job.type}
                              </Badge>
                              <Badge
                                variant="secondary"
                                className="bg-white/20 text-white border-0 flex items-center gap-1"
                              >
                                <MapPin className="w-3 h-3" />
                                {job.location}
                              </Badge>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Job Details */}
                      <div className="lg:w-2/3 p-8 space-y-8">
                        <p className="text-lg text-muted-foreground leading-relaxed">{job.description}</p>

                        <div className="space-y-4">
                          <h4 className="text-lg font-semibold text-purple-600">Key Achievements</h4>
                          <ul className="space-y-3">
                            {job.achievements.map((achievement, i) => (
                              <li key={i} className="flex items-start space-x-3">
                                <TrendingUp className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                <span className="text-muted-foreground">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="space-y-3">
                          <h4 className="text-lg font-semibold text-purple-600">Core Skills</h4>
                          <div className="flex flex-wrap gap-2">
                            {job.skills.map((skill, i) => (
                              <Badge key={i} variant="outline" className="hover:scale-105 transition-transform">
                                {skill}
                              </Badge>
                            ))}
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

      {/* Volunteering */}
      <ScrollAnimation>
        <section className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Giving Back</h2>
            <p className="text-muted-foreground text-lg">Using design to make a positive impact in the community</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {volunteering.map((volunteer, index) => (
              <ScrollAnimation key={index} delay={index * 200}>
                <Card className="border-0 gradient-bg-soft card-hover h-full">
                  <CardContent className="p-8 space-y-6">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${volunteer.color} flex items-center justify-center`}
                    >
                      <volunteer.icon className="w-8 h-8 text-white" />
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h3 className="text-xl font-bold">{volunteer.title}</h3>
                        <p className="text-lg text-purple-600 font-medium">{volunteer.organization}</p>
                        <Badge variant="outline" className="mt-2 flex items-center gap-1 w-fit">
                          <Calendar className="w-3 h-3" />
                          {volunteer.period}
                        </Badge>
                      </div>

                      <p className="text-muted-foreground leading-relaxed">{volunteer.description}</p>

                      <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border-l-4 border-green-500">
                        <p className="font-medium text-green-800 dark:text-green-200">Impact: {volunteer.impact}</p>
                      </div>

                      <div className="space-y-2">
                        <h4 className="font-semibold text-purple-600 text-sm">Key Projects:</h4>
                        <div className="flex flex-wrap gap-2">
                          {volunteer.projects.map((project, i) => (
                            <Badge key={i} variant="secondary" className="text-xs">
                              {project}
                            </Badge>
                          ))}
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

      {/* Certifications */}
      <ScrollAnimation>
        <section className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Certifications & Learning</h2>
            <p className="text-muted-foreground text-lg">Continuous learning to stay at the forefront of design</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <ScrollAnimation key={index} delay={index * 100}>
                <Card className="border-0 gradient-bg-soft card-hover">
                  <CardContent className="p-6 space-y-3">
                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <h3 className="font-semibold">{cert.name}</h3>
                        <p className="text-purple-600 font-medium">{cert.issuer}</p>
                      </div>
                      <Badge variant="secondary" className="bg-blue-100 text-blue-800 border-0">
                        {cert.year}
                      </Badge>
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
          <Card className="border-0 gradient-bg-soft max-w-3xl mx-auto card-hover">
            <CardContent className="p-12 space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold">
                Let's Build Something <span className="gradient-text">Amazing</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm always excited to take on new challenges and collaborate with passionate teams. Whether you're a
                startup looking to make your mark or an established company ready to innovate, let's create something
                extraordinary together.
              </p>
              <div className="flex flex-wrap justify-center gap-3 pt-4">
                <Badge variant="secondary" className="bg-green-100 text-green-800 border-0">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                  Available for new projects
                </Badge>
                <Badge variant="secondary" className="bg-blue-100 text-blue-800 border-0">
                  Remote-friendly
                </Badge>
                <Badge variant="secondary" className="bg-purple-100 text-purple-800 border-0">
                  Full-time & Contract
                </Badge>
              </div>
            </CardContent>
          </Card>
        </section>
      </ScrollAnimation>
    </div>
  )
}
