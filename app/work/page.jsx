"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
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
  X,
  ArrowRight,
  MoveRight,
} from "lucide-react";

import imgw11 from "../../assets/imgs/img-w11.jpeg";
import imgw12 from "../../assets/imgs/img-w12.jpeg";
import imgw13 from "../../assets/imgs/img-w13.jpeg";
import imgw21 from "../../assets/imgs/img-w21.jpeg";
import imgw22 from "../../assets/imgs/img-w22.jpeg";
import imgw31 from "../../assets/imgs/img-w31.jpeg";
import imgj11 from "../../assets/imgs/img-j11.jpg";
import imgj12 from "../../assets/imgs/img-j12.jpg";
import imgj13 from "../../assets/imgs/img-j13.jpg";
import imgj14 from "../../assets/imgs/img-j14.jpg";
import imgj15 from "../../assets/imgs/img-j15.jpg";
import imgj16 from "../../assets/imgs/img-j16.jpg";
import imgj17 from "../../assets/imgs/img-j17.jpg";
import imgj18 from "../../assets/imgs/img-j18.jpg"; 
import imgj19 from "../../assets/imgs/img-j19.jpg";

import Image from "next/image";
import { useState } from "react";

export default function Work() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [currentJobImages, setCurrentJobImages] = useState([]);
  const closeModal = () => setSelectedImage(null);

  const openGallery = (images) => {
    setCurrentJobImages(images);
    setGalleryOpen(true);
  };

  const workExperience = [
    {
      title: "Graphic Designer",
      company: "Isuru Creation (Pvt) Ltd",
      period: "2021 - 2022",
      type: "Full-Time",
      color: "from-green-500 to-teal-500",
      description:
        "During my time as a designer at Isuru Creation (Pvt) Ltd, I gained hands-on experience in delivering creative projects across print and digital media. I collaborated closely with clients and team members, contributing to innovative solutions while refining my design and project management skills.",
      achievements: [
        "Utilized Adobe Photoshop, Illustrator, InDesign, and CorelDRAW to design a wide range of creative materials.",
        "Created book covers, wedding cards, social media posts, banners, flyers, and other print and digital content.",
        "Collaborated closely with clients and team members to deliver visually engaging and high-quality designs.",
        "Assisted in conceptualizing creative ideas and layouts for various design projects.",
      ],
      skills: [
        "Adobe Photoshop",
        "Illustrator",
        "InDesign",
        "CorelDRAW",
        "Visual Design & Branding",
        "Print & Digital Media Design",
        "Layout & Typography",
        "Concept Development & Creative Ideation",
        "Client Collaboration & Communication",
        "Time Management & Project Execution",
      ],
      icon: Briefcase,
      color: "from-emerald-500 to-teal-500",
      images: [imgj11, imgj12, imgj13, imgj14, imgj15, imgj16, imgj17, imgj18, imgj19],
    },
  ];

  const volunteering = [
    {
      title: "Webmaster | Committee Head | Member",
      organization: "IEEE Industry Applications Society of SLTC",
      period: "Sep 2022 - Aug 2025",
      description:
        "I use design to create a positive impact in my community. As part of the IEEE Industry Applications Society of SLTC, I’ve helped improve its digital presence and engagement. First as a Member (2022–2023), then as Committee Head (2023–2024), and now as Webmaster (2024–2025).",
      projects: [
        {
          topic: "Project Advisory – Venturify’24",
          time: "Apr 2024 – Oct 2024",
          image: imgw11,
          desc: "Served as part of the advisory panel, providing design-focused guidance for Venturify’24, a collaborative project between SLTC and SLIIT. Supported the development of creative materials for workshops conducted both online and in-person for entrepreneurs.",
        },
        {
          topic: "Design Team Lead – InnovMind V2.0",
          time: "Jan 2024 – Aug 2024",
          image: imgw12,
          desc: "Led the design team in creating all visual materials, including flyers and presentations. Managed the project’s social media presence and supported event coordination to ensure a successful outcome.",
        },
        {
          topic: "Design Team Member – TechnoMind",
          time: "Oct 2022 – Nov 2023",
          image: imgw13,
          desc: "Contributed as a design team member for TechnoMind, a two-day collaborative initiative between SEDS SLTC and IEEE IAS SLTC. Created promotional materials and provided design support throughout the event and my first university project experience.",
        },
      ],
      skills: [
        "Team Leadership",
        "Creative Direction",
        "Collaboration & Communication",
        "Event Branding & Visual Strategy",
        "Time & Project Management",
      ],
      icon: Heart,
      color: "from-emerald-500 to-teal-500",
    },
    {
      title: "Secretary | Committee Deputy Head | Member",
      organization: "Media Unit of SLTC Research University",
      period: "Oct 2022 - Present",
      description:
        "As part of the Media Unit of SLTC Research University, I’ve grown through several roles. I’ve grown from a Member (2022–2023) to Committee Deputy (2023–2025) and finally served as Secretary (May 2025 – Nov 2025). During this journey, I contributed to managing media operations, leading design initiatives, and supporting creative communication efforts that strengthened the university’s media presence.",
      projects: [
        {
          topic: "Project Advisory – Vitharka 2025",
          time: "Jun 2025 – Sep 2025",
          image: imgw21,
          desc: "Served on the Advisory Panel for Vitharka 2025, an inter-school island-wide debate competition that encouraged critical thinking, teamwork, and effective communication among students. I provided guidance and creative input to support event planning and overall coordination, helping ensure a meaningful and inspiring experience for participants.",
        },
        {
          topic: "Project Secretary – Master Designer V2.0",
          time: "Apr 2024 – Jul 2024",
          image: imgw22,
          desc: "Served as the Secretary for Master Designer V2.0, an all-island design competition organized by the Media Unit of SLTC Research University. In this role, I supported project coordination, documentation, and communication, ensuring smooth execution and timely completion. I take pride in contributing to the project’s success, which celebrated creativity and design excellence across Sri Lanka.",
        },
      ],
      skills: [
        "Leadership & Coordination",
        "Project Planning",
        "Communication",
        "Creative Direction",
        "Team Collaboration",
        "Event Management",
        "Problem-Solving",
      ],
      icon: Heart,
      color: "from-emerald-500 to-teal-500",
    },
    {
      title: "Assistant Secretary",
      organization: "SEDS SLTC",
      period: "Jul 2024 – Oct 2025",
      description:
        "I believe in using design and creativity to make a positive impact in my community. As the Assistant Secretary of SEDS SLTC (Jul 2024 – Oct 2025), I contribute to organizing events, managing communication, and supporting initiatives that inspire students to explore innovation and space science through design and teamwork.",
      projects: [
        {
          topic: "Project Advisory – Stargaze’24",
          time: "Aug 2024 – Nov 2024",
          image: imgw31,
          desc: "Served as a Project Advisory Panel member for Stargaze’24, an inter-university competition that celebrated creativity, teamwork, and space science. I provided guidance on design and coordination to ensure a smooth event experience and a strong visual impact.",
        },
      ],
      skills: [
        "Creative Direction",
        "Project Coordination",
        "Team Collaboration",
        "Event Branding",
        "Leadership & Mentoring",
      ],
      icon: Heart,
      color: "from-emerald-500 to-teal-500",
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
              From a passionate learner to a creative design professional, my
              journey has been all about blending creativity, technology, and
              user empathy to craft meaningful digital experiences.
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
                          <h4 className="text-lg font-semibold text-teal-600">
                            Key Achievements
                          </h4>
                          <ul className="space-y-3">
                            {job.achievements.map((achievement, i) => (
                              <li
                                key={i}
                                className="flex items-start space-x-3"
                              >
                                <TrendingUp className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                <span className="text-muted-foreground text-sm">
                                  {achievement}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="space-y-3">
                          <h4 className="text-lg font-semibold text-teal-600">
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
                        <div className="grid grid-cols-5 gap-3 w-full relative group">
                          {job.images.slice(0, 5).map((src, i) => (
                            <div
                              key={i}
                              // onClick={() => setSelectedImage(src || src?.src)}
                              className="overflow-hidden rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer aspect-video"
                            >
                              <Image
                                src={src?.src || src}
                                alt={src}
                                width={400}
                                height={225}
                                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                              />
                            </div>
                          ))}
                          <>
                            <div 
                              onClick={() => openGallery(job.images)}
                              className="absolute right-0 top opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-l from-black via-black/70 to-transparent rounded-lg p-4 w-1/3 h-full flex items-center justify-end cursor-pointer"
                            >
                              <div className="flex flex-col items-center justify-center hover:scale-105 transition-transform">
                                <div className="border border-white rounded-full p-2">
                                  <MoveRight className="w-4 h-4 text-white" />
                                </div>
                                <h5 className="text-sm mt-2 text-white">See More</h5>
                              </div>
                            </div>
                          </>
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

          <div className="grid grid-cols-1 gap-8">
            {volunteering.map((volunteer, index) => (
              <ScrollAnimation key={index} delay={index * 200}>
                <Card className="border-0 gradient-bg-soft card-hover h-full">
                  <CardContent className="p-8  lg:flex gap-6 space-y-4">
                    <div className="space-y-6">
                      <div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${volunteer.color} flex items-center justify-center`}
                      >
                        <volunteer.icon className="w-8 h-8 text-white" />
                      </div>

                      <div className="space-y-4">
                        <div>
                          <h3 className="text-xl font-bold">
                            {volunteer.title}
                          </h3>
                          <p className="text-lg text-teal-600 font-medium">
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

                        <div className="space-y-2">
                          <h4 className="font-semibold text-teal-600 text-sm">
                            Key Skills:
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {volunteer.skills.map((project, i) => (
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
                    </div>
                    <div>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-teal-600 text-sm">
                          Projects & Contributions:
                        </h4>

                        {volunteer.projects.map((project, i) => (
                          <div
                            key={i}
                            className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border-l-4 border-green-500 flex gap-3 align-middle"
                          >
                            <div
                              onClick={() =>
                                setSelectedImage(
                                  project.image?.src || project.image
                                )
                              }
                              className="text-sm text-muted-foreground xl:w-1/5 w-full cursor-pointer hidden xl:block"
                            >
                              <Image
                                src={project.image}
                                alt={project.topic}
                                className="w-full h-auto rounded-lg object-cover hover:scale-102 transition-transform duration-700"
                              />
                            </div>
                            <div className="xl:w-4/5 w-full space-y-2">
                              <div className="xl:flex justify-between">
                                <h6 className="font-semibold">
                                  {project.topic}
                                </h6>
                                <Badge
                                  variant="secondary"
                                  className="bg-green-100 text-xs text-green-800 border-0 mb-2"
                                >
                                  {project.time}
                                </Badge>
                              </div>
                              <div
                                onClick={() =>
                                  setSelectedImage(
                                    project.image?.src || project.image
                                  )
                                }
                                className="text-sm text-muted-foreground w-full cursor-pointer xl:hidden"
                              >
                                <Image
                                  src={project.image}
                                  alt={project.topic}
                                  className="w-full h-auto rounded-lg object-cover hover:scale-102 transition-transform duration-700"
                                />
                              </div>
                              <p className="text-sm text-muted-foreground">
                                {project.desc}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
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
                Let's Build Something
                <span className="gradient-text">Amazing</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I’m always inspired to take on new creative challenges and
                collaborate with passionate teams. Whether it’s bringing a fresh
                idea to life, crafting meaningful designs, or helping a brand
                tell its story in a new way and I’m ready to create something
                truly remarkable together.
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
                  className="bg-cyan-100 text-cyan-800 border-0"
                >
                  Remote-friendly
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-emerald-100 text-emerald-800 border-0"
                >
                  Freelance & Contract
                </Badge>
              </div>
            </CardContent>
          </Card>
        </section>
      </ScrollAnimation>

      {/* Image Gallery Popup */}
      {galleryOpen && (
        <div
          onClick={() => setGalleryOpen(false)}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-[90vw] h-[90vh] bg-white dark:bg-slate-950 rounded-lg overflow-hidden flex flex-col"
          >
            <button
              onClick={() => setGalleryOpen(false)}
              className="absolute top-4 right-4 bg-black/60 text-white rounded-full p-3 hover:bg-black transition z-10"
              aria-label="Close gallery"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="p-6 flex-1 overflow-y-auto">
              <h2 className="text-3xl font-bold mb-6">Project Gallery</h2>
              
              {/* Masonry Image List */}
              <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">
                {currentJobImages.map((src, i) => (
                  <div
                    key={i}
                    onClick={() => setSelectedImage(src?.src || src)}
                    className="relative overflow-hidden rounded-lg cursor-pointer group shadow-md hover:shadow-xl transition-shadow break-inside-avoid"
                  >
                    <Image
                      src={src?.src || src}
                      alt={`Gallery ${i}`}
                      width={600}
                      height={600}
                      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Popup Modal */}
      {selectedImage && (
        <div
          onClick={closeModal}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50"
        >
          <div className="relative max-h-11/12 justify-center align-middle flex">
            <img
              src={selectedImage}
              alt="Preview"
              className="shadow-lg object-contain "
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
