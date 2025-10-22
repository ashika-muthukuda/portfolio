import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ScrollAnimation } from "@/components/scroll-animation";
import {
  Mail,
  Linkedin,
  Instagram,
  Twitter,
  ExternalLink,
  MapPin,
  Clock,
  Coffee,
  Send,
  Palette,
  Github,
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
      description: "Design thoughts and industry insights",
    },
  ];

  const workingHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM PST" },
    { day: "Saturday", hours: "10:00 AM - 2:00 PM PST" },
    { day: "Sunday", hours: "Closed" },
  ];

  const faqs = [
    {
      question: "What's your typical project timeline?",
      answer:
        "Most projects range from 4-12 weeks depending on scope. I'll provide a detailed timeline during our initial consultation.",
    },
    {
      question: "Do you work with startups?",
      answer:
        "I love working with startups and offer flexible pricing options to accommodate different budgets and growth stages.",
    },
    {
      question: "What's included in your design process?",
      answer:
        "My process includes user research, wireframing, prototyping, visual design, and usability testing. I'll customize the approach based on your needs.",
    },
    {
      question: "Do you provide ongoing support?",
      answer:
        "Yes! I offer post-launch support and can help with design system maintenance, user feedback analysis, and iterative improvements.",
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
              we can work together to craft something truly impactful — whether
              it’s a brand-new product, a redesign, or a creative concept that
              needs to come to life.
            </p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation delay={200}>
          <div className="flex justify-center">
            <Coffee className="w-16 h-16 text-purple-600 animate-float" />
          </div>
        </ScrollAnimation>
      </section>

      <div className="grid lg:grid-cols-3 gap-12">
        {/* Contact Form */}
        <ScrollAnimation className="lg:col-span-2">
          <section className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                Send Me a Message
              </h2>
              <p className="text-muted-foreground text-lg">
                Whether you have a clear vision or just an early idea, I’m
                always open to collaborating with passionate individuals,
                startups, and businesses who value creativity and thoughtful
                design.
              </p>
            </div>

            <Card className="border-0 gradient-bg-soft card-hover">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label
                        htmlFor="firstName"
                        className="text-sm font-medium"
                      >
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
                    <Label htmlFor="company" className="text-sm font-medium">
                      Company / Organization
                    </Label>
                    <Input
                      id="company"
                      placeholder="Your Company"
                      className="transition-all duration-300 focus:scale-105"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="projectType"
                      className="text-sm font-medium"
                    >
                      Project Type
                    </Label>
                    <select
                      id="projectType"
                      className="w-full px-3 py-2 border border-input bg-background rounded-md transition-all duration-300 focus:scale-105 focus:ring-2 focus:ring-ring"
                    >
                      <option value="">Select project type</option>
                      <option value="web-design">Web Design</option>
                      <option value="mobile-app">Mobile App Design</option>
                      <option value="dashboard">Dashboard/Analytics</option>
                      <option value="redesign">Product Redesign</option>
                      <option value="consultation">Design Consultation</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="budget" className="text-sm font-medium">
                      Project Budget
                    </Label>
                    <select
                      id="budget"
                      className="w-full px-3 py-2 border border-input bg-background rounded-md transition-all duration-300 focus:scale-105 focus:ring-2 focus:ring-ring"
                    >
                      <option value="">Select budget range</option>
                      <option value="5k-10k">$5,000 - $10,000</option>
                      <option value="10k-25k">$10,000 - $25,000</option>
                      <option value="25k-50k">$25,000 - $50,000</option>
                      <option value="50k+">$50,000+</option>
                      <option value="discuss">Let's discuss</option>
                    </select>
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
                    <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    I usually reply within 24 hours on business days.
                  </p>
                </form>
              </CardContent>
            </Card>
          </section>
        </ScrollAnimation>

        {/* Contact Info & Social */}
        <ScrollAnimation delay={300}>
          <section className="space-y-8">
            {/* Availability Status */}
            <Card className="border-0 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 card-hover">
              <CardContent className="px-6">
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                  <div>
                    <h3 className="text-lg font-semibold text-green-800 dark:text-green-200">
                      Available for New Projects
                    </h3>
                    <p className="text-green-700 dark:text-green-300 text-sm">
                      Currently accepting projects starting in Q2 2025
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Location & Hours */}
            <div className="space-y-4">
              <Card className="border-0 gradient-bg-soft card-hover">
                <CardContent className="px-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <MapPin className="w-5 h-5 text-purple-600" />
                    <h3 className="font-semibold">Location</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Kandy, Sri Lanka
                    <br />
                    Available for remote work worldwide
                  </p>
                </CardContent>
              </Card>

              {/* <Card className="border-0 gradient-bg-soft card-hover">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Clock className="w-5 h-5 text-purple-600" />
                    <h3 className="font-semibold">Working Hours</h3>
                  </div>
                  <div className="space-y-2">
                    {workingHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between text-sm">
                        <span className="text-muted-foreground">
                          {schedule.day}
                        </span>
                        <span className="font-medium">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card> */}
            </div>

            {/* Social Links */}
            <div className="space-y-4">
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
            </div>
          </section>
        </ScrollAnimation>
      </div>

      {/* FAQ Section
      <ScrollAnimation>
        <section className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground text-lg">
              Quick answers to common questions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <Card
                key={index}
                className="border-0 gradient-bg-soft card-hover"
              >
                <CardContent className="p-6 space-y-3">
                  <h3 className="font-semibold text-purple-600">
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </ScrollAnimation> */}

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
                <Link href="mailto:sarah.chen.design@gmail.com">
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
