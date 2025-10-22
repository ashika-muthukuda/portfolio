import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ScrollAnimation } from "@/components/scroll-animation";
import {
  Mail,
  Linkedin,
  Palette,
  Github,
  ExternalLink,
  MapPin,
  Coffee,
} from "lucide-react";
import Link from "next/link";

export default function Contact() {
  const socialLinks = [
    {
      name: "Email",
      handle: "ashikamuthukuda@gmail.com",
      url: "mailto:ashikamuthukuda@gmail.com",
      icon: Mail,
      color: "from-red-500 to-pink-500",
      description: "Best way to reach me for project inquiries",
    },
    {
      name: "LinkedIn",
      handle: "Ashika Muthukuda",
      url: "https://www.linkedin.com/in/am-muthukuda",
      icon: Linkedin,
      color: "from-blue-600 to-blue-700",
      description: "Professional network and career updates",
    },
    {
      name: "Behance",
      handle: "@ashikamuthukuda",
      url: "https://behance.net/ashikamuthukuda",
      icon: Palette,
      color: "from-purple-500 to-pink-500",
      description: "My design portfolio & creative showcases",
    },
    {
      name: "GitHub",
      handle: "@ashika-muthukuda",
      url: "https://github.com/ashika-muthukuda",
      icon: Github,
      color: "from-gray-800 to-gray-900",
      description: "Code and collaborative projects",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 space-y-20">
      {/* Hero Section */}
      <section className="text-center space-y-8 py-16">
        <ScrollAnimation>
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold">
              Let's Create Something{" "}
              <span className="gradient-text">Amazing</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Ready to bring your ideas to life through stunning, user-centered
              design? <br /> I’d love to hear about your project and explore how
              we can work together to craft something truly impactful.
            </p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation delay={200}>
          <div className="flex justify-center">
            <Coffee className="w-16 h-16 text-purple-600 animate-float" />
          </div>
        </ScrollAnimation>
      </section>

      {/* Contact Form */}
      <div className="grid lg:grid-cols-3 gap-12">
        <ScrollAnimation className="lg:col-span-2">
          <section className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                Send Me a Message
              </h2>
              <p className="text-muted-foreground text-lg">
                Whether you have a clear vision or just an early idea, I’m always
                open to collaborating with passionate individuals, startups, and
                businesses who value creativity and thoughtful design.
              </p>
            </div>

            <Card className="border-0 gradient-bg-soft card-hover">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-sm font-medium">
                        First Name *
                      </Label>
                      <Input
                        id="firstName"
                        placeholder="John"
                        className="transition-all duration-300 focus:scale-105"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-sm font-medium">
                        Last Name *
                      </Label>
                      <Input
                        id="lastName"
                        placeholder="Doe"
                        className="transition-all duration-300 focus:scale-105"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@company.com"
                      className="transition-all duration-300 focus:scale-105"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-medium">
                      Tell me about your project *
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Your goals, timeline, and the challenges you’re facing — the more you share, the better I can understand how to help!"
                      rows={6}
                      className="transition-all duration-300 focus:scale-105"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full gradient-bg text-white hover:scale-105 transition-all duration-300 animate-pulse-glow group"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </section>
        </ScrollAnimation>

        {/* Social Links */}
        <ScrollAnimation delay={300}>
          <section className="space-y-8">
            <h3 className="text-lg font-semibold">Connect With Me</h3>
            <div className="space-y-3">
              {socialLinks.map((social, index) => (
                <Card
                  key={index}
                  className="border-0 card-hover transition-all duration-300 hover:scale-105"
                >
                  <CardContent className="px-4 py-2">
                    <Link
                      href={social.url}
                      className="flex items-center space-x-4 group"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div
                        className={`w-10 h-10 rounded-lg bg-gradient-to-r ${social.color} flex items-center justify-center`}
                      >
                        <social.icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-grow">
                        <h4 className="font-medium">{social.name}</h4>
                        <p className="text-sm text-muted-foreground">
                          {social.handle}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {social.description}
                        </p>
                      </div>
                      <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </ScrollAnimation>
      </div>

      {/* Final CTA */}
      <ScrollAnimation>
        <section className="text-center space-y-8 py-16">
          <Card className="border-0 gradient-bg-soft max-w-6xl mx-auto card-hover">
            <CardContent className="p-12 space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Every great project starts with a conversation. Let's discuss
                your vision, challenges, and how we can create something amazing
                together.
              </p>
              <Button
                asChild
                size="lg"
                className="gradient-bg text-white hover:scale-105 transition-all duration-300 group"
              >
                <Link href="mailto:ashikamuthukuda@gmail.com">
                  Start the Conversation
                  <Coffee className="w-4 h-4 ml-2 group-hover:rotate-12 transition-transform" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </section>
      </ScrollAnimation>
    </div>
  );
}
