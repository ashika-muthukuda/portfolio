import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollAnimation } from "@/components/scroll-animation";
import {
  Briefcase,
  Heart,
  Users,
  TrendingUp,
  Building,
  Rocket,
  Calendar,
  MapPin,
} from "lucide-react";

export default function Work() {
  const workExperience = [
    {
      title: "UI/UX Designer & Creative Technologist",
      company: "Freelance",
      period: "2023 - Present",
      type: "Freelance",
      location: "Remote",
      description:
        "Designing user-centered digital experiences for individuals and small businesses, focusing on clean interfaces and intuitive interactions.",
      achievements: [
        "Designed responsive web interfaces and brand identities for 15+ clients across various industries",
        "Improved usability and visual consistency in multiple startup projects",
        "Created wireframes, prototypes, and user flows aligning with client goals",
        "Enhanced accessibility and inclusivity in product design",
      ],
      skills: [
        "Figma",
        "User Research",
        "Prototyping",
        "Visual Design",
        "Accessibility",
        "Responsive Design",
      ],
      icon: Briefcase,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Lead Designer – DroneU Project",
      company: "IEEE Industry Applications Society (IAS), SLTC",
      period: "2024",
      type: "Project",
      location: "SLTC",
      description:
        "Led all creative and design aspects of the DroneU project, developing a consistent and futuristic visual identity that elevated the event's professional appeal.",
      achievements: [
        "Designed complete event branding, social media assets, and presentation materials",
        "Collaborated with engineering and marketing teams to maintain design coherence",
        "Increased participant engagement by 40% through visually appealing digital promotions",
      ],
      skills: [
        "Branding",
        "Event Design",
        "UI Composition",
        "Team Collaboration",
      ],
      icon: Rocket,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Secretary & Lead Designer",
      company: "Media Unit, SLTC",
      period: "2024",
      type: "Project",
      location: "SLTC",
      description:
        "Served as project secretary and design head for the Master Designer V2.0 All-Island Graphic Design Competition, managing over 120 participants and producing all visual and digital media content.",
      achievements: [
        "Designed the event logo, posters, and promotional materials",
        "Streamlined participant submissions and visual judging formats",
        "Helped achieve record participation and strong online visibility",
      ],
      skills: [
        "Graphic Design",
        "Visual Identity",
        "Project Coordination",
        "Adobe Creative Suite",
      ],
      icon: Building,
      color: "from-emerald-500 to-teal-500",
    },
    {
      title: "Design Team Deputy Head",
      company: "Media Unit, SLTC",
      period: "2023 - 2024",
      type: "Leadership",
      location: "SLTC",
      description:
        "Supported the creative direction of university events, digital media, and campaigns while mentoring junior designers.",
      achievements: [
        "Oversaw design content for 10+ university-level projects",
        "Trained junior members on Photoshop and Illustrator",
        "Ensured branding consistency across all student media channels",
      ],
      skills: [
        "Mentoring",
        "Leadership",
        "Adobe Illustrator",
        "Photoshop",
        "Layout Design",
      ],
      icon: Users,
      color: "from-green-500 to-teal-500",
    },
  ];

  const volunteering = [
    {
      title: "Public Visibility Sub-Committee Head",
      organization: "IEEE IAS, SLTC",
      period: "2023 - 2024",
      description:
        "Managed creative visibility campaigns, social media graphics, and event branding to increase community engagement.",
      impact: "Reached 10,000+ audience interactions through design-driven communication",
      projects: [
        "Social Media Campaigns",
        "Event Branding",
        "Community Engagement",
      ],
      icon: Heart,
      color: "from-red-500 to-pink-500",
    },
    {
      title: "Design Mentor",
      organization: "SLTC Design Circle",
      period: "2024 - Present",
      description:
        "Guiding junior designers in developing their creative portfolios, improving design fundamentals, and building confidence in UI/UX design principles.",
      impact: "Mentored 20+ students through one-on-one guidance and design review sessions",
      projects: [
        "Portfolio Reviews",
        "Design Fundamentals",
        "UI/UX Principles",
      ],
      icon: Users,
      color: "from-indigo-500 to-purple-500",
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
      name: "Graphic Design (NVQ4)",
      year: "2023",
      issuer: "National Youth Service Council",
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
        <ScrollAnimation>
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold">
              My Professional <span className="gradient-text">Journey</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              From a passionate learner to a creative design professional, my journey has been all about 
              blending creativity, technology, and user empathy to craft meaningful digital experiences.
            </p>
          </div>
        </ScrollAnimation>
      </section>

      {/* Work Experience */}
      <ScrollAnimation>
        <section className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              Professional Experience
            </h2>
            <p className="text-muted-foreground text-lg">
              Where I've made an impact and grown as a designer
            </p>
          </div>

          <div className="space-y-8">
            {workExperience.map((job, index) => (
              <ScrollAnimation key={index} delay={index * 100}>
                <Card className="border-0 gradient-bg-soft card-hover overflow-hidden">
                  <CardContent className="p-0">
                    <div className="flex flex-col lg:flex-row">
                      {/* Company Info */}
                      <div
                        className={`lg:w-1/3 p-8 bg-gradient-to-br ${job.color} text-white`}
                      >
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
                              <Badge
                                variant="secondary"
                                className="bg-white/20 text-white border-0"
                              >
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
                        <p className="text-lg text-muted-foreground leading-relaxed">
                          {job.description}
                        </p>

                        <div className="space-y-4">
                          <h4 className="text-lg font-semibold text-purple-600">
                            Key Achievements
                          </h4>
                          <ul className="space-y-3">
                            {job.achievements.map((achievement, i) => (
                              <li
                                key={i}
                                className="flex items-start space-x-3"
                              >
                                <TrendingUp className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                <span className="text-muted-foreground">
                                  {achievement}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="space-y-3">
                          <h4 className="text-lg font-semibold text-purple-600">
                            Core Skills
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {job.skills.map((skill, i) => (
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
            <p className="text-muted-foreground text-lg">
              Using design to make a positive impact in the community
            </p>
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
                        <p className="text-lg text-purple-600 font-medium">
                          {volunteer.organization}
                        </p>
                        <Badge
                          variant="outline"
                          className="mt-2 flex items-center gap-1 w-fit"
                        >
                          <Calendar className="w-3 h-3" />
                          {volunteer.period}
                        </Badge>
                      </div>

                      <p className="text-muted-foreground leading-relaxed">
                        {volunteer.description}
                      </p>

                      <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border-l-4 border-green-500">
                        <p className="font-medium text-green-800 dark:text-green-200">
                          Impact: {volunteer.impact}
                        </p>
                      </div>

                      <div className="space-y-2">
                        <h4 className="font-semibold text-purple-600 text-sm">
                          Key Projects:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {volunteer.projects.map((project, i) => (
                            <Badge
                              key={i}
                              variant="secondary"
                              className="text-xs"
                            >
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
            <h2 className="text-3xl md:text-4xl font-bold">
              Certifications & Learning
            </h2>
            <p className="text-muted-foreground text-lg">
              Continuous learning to stay at the forefront of design
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <ScrollAnimation key={index} delay={index * 100}>
                <Card className="border-0 gradient-bg-soft card-hover">
                  <CardContent className="p-6 space-y-3">
                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <h3 className="font-semibold">{cert.name}</h3>
                        <p className="text-purple-600 font-medium">
                          {cert.issuer}
                        </p>
                      </div>
                      <Badge
                        variant="secondary"
                        className="bg-blue-100 text-blue-800 border-0"
                      >
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
                Let's Build Something{" "}
                <span className="gradient-text">Amazing</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm always excited to take on new creative challenges and collaborate
                with passionate teams. Whether you're a startup building your first 
                product or an organization ready to reimagine your brand, let's create 
                something extraordinary together.
              </p>
              <div className="flex flex-wrap justify-center gap-3 pt-4">
                <Badge
                  variant="secondary"
                  className="bg-green-100 text-green-800 border-0"
                >
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                  Available for new projects
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-blue-100 text-blue-800 border-0"
                >
                  Remote-friendly
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-purple-100 text-purple-800 border-0"
                >
                  Freelance & Contract
                </Badge>
              </div>
            </CardContent>
          </Card>
        </section>
      </ScrollAnimation>
    </div>
  );
}
