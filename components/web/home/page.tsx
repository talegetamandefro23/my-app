"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import AnimatedProgress from "@/components/web/home/animation";

export default function HomePage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % 5);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const images = [
    {
      src: "/1.jpeg",
      alt: "Slide 1",
      description:
        "Discover our flagship product – innovative and reliable for everyday use.",
    },
    {
      src: "/2.jpg",
      alt: "Slide 2",
      description:
        "Explore premium services designed to boost your business efficiency.",
    },
    {
      src: "/image.jpeg",
      alt: "Slide 3",
      description: "Unlock advanced features that drive growth and success.",
    },
    {
      src: "/image1.jpg",
      alt: "Slide 4",
      description: "Delivering excellence through technology-driven solutions.",
    },
    {
      src: "/image.jpg",
      alt: "Slide 5",
      description: "Partnering for progress, building the future together.",
    },
  ];

  const departments = [
    {
      title: "Marketing",
      description:
        "Creating value and visibility through strategic campaigns and customer insights.",
      icon: "📈",
    },
    {
      title: "Sales",
      description:
        "Building lasting relationships and driving business growth through results.",
      icon: "💼",
    },
    {
      title: "Finance",
      description:
        "Ensuring financial stability and strategic investment for sustainable success.",
      icon: "💰",
    },
    {
      title: "HR",
      description:
        "Fostering a culture of growth, inclusion, and empowerment for all employees.",
      icon: "👥",
    },
    {
      title: "Projects",
      description:
        "Delivering excellence through disciplined project execution and innovation.",
      icon: "🚀",
    },
  ];

  const services = [
    {
      title: "Digital Solutions",
      description:
        "Modern software systems that transform the way your business operates.",
      icon: "💻",
    },
    {
      title: "Consulting",
      description:
        "Expert guidance to streamline operations and drive performance.",
      icon: "📊",
    },
    {
      title: "Logistics",
      description:
        "Smart logistics management that ensures timely delivery and efficiency.",
      icon: "🚚",
    },
  ];

  const team = [
    { name: "Full Name", role: "Put role here", image: "/team1.jpg" },
    { name: "Full Name", role: "Put rol here", image: "/team2.jpg" },
    { name: "Full Name", role: "Put role here", image: "/team3.jpg" },
  ];

  const currentImage = images[currentImageIndex];

  return (
    <div className="space-y-0 text-foreground relative bg-white">
      {/* HERO SECTION */}
      <section className="relative h-[80vh] overflow-hidden">
        <img
          src={currentImage.src}
          alt={currentImage.alt}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Empowering Businesses Through Innovation
          </h1>
          <p className="text-lg md:text-xl mb-6 max-w-2xl">
            {currentImage.description}
          </p>
          <Button
            asChild
            className="bg-green-700 hover:bg-green-800 text-lg px-6 py-2 rounded-full"
          >
            <Link href="/web/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>

      {/* BUSINESS DESCRIPTION */}
      <section className="px-6 md:px-16 lg:px-24 text-center py-12">
        <h2 className="text-3xl font-semibold mb-4 text-green-700">
          Weyn Amba Trading
        </h2>
        <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-4xl mx-auto text-justify indent-8">
          Weyn Amba Trading is a dynamic enterprise dedicated to driving
          business excellence through innovation and technology. We combine
          strategic thinking, creativity, and modern tools to deliver impactful
          solutions across diverse industries. Our mission is to empower
          companies with efficiency, transparency, and measurable growth.
        </p>
      </section>

      {/* SERVICES SECTION */}
      <section className="px-6 md:px-16 lg:px-24 py-12 bg-gray-50 rounded-2xl">
        <h2 className="text-3xl font-semibold text-center mb-10 text-green-800">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="text-center p-6 shadow-md hover:shadow-lg transition rounded-xl"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <CardTitle className="text-xl font-semibold text-green-700">
                {service.title}
              </CardTitle>
              <CardDescription className="text-muted-foreground mt-3">
                {service.description}
              </CardDescription>
            </Card>
          ))}
        </div>
      </section>

      {/* DEPARTMENTS */}
      <section className="px-6 md:px-16 lg:px-24 py-12">
        <h2 className="text-3xl font-semibold text-center mb-10 text-green-800">
          Our Departments
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-justify">
          {departments.map((dept, index) => (
            <Card
              key={index}
              className="bg-card/90 text-card-foreground backdrop-blur-2xl border-t-8 border-b-0 border-x-0 border-green-800 rounded-t-2xl shadow-md hover:shadow-lg transition duration-300"
            >
              <CardHeader className="text-center">
                <div className="text-5xl mb-3">{dept.icon}</div>
                <CardTitle className="text-2xl font-semibold text-green-800">
                  {dept.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  {dept.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* LATEST NEWS */}
      <section className="px-6 md:px-16 lg:px-24 py-12 bg-gray-50 rounded-2xl">
        <h2 className="text-3xl font-semibold text-center mb-10 text-green-800">
          Latest News
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "New Partnership Announcement",
              description:
                "We are thrilled to announce our partnership with leading innovators.",
              image: "/N1.jpg",
            },
            {
              title: "Product Launch 2025",
              description:
                "Our latest AI-powered tools optimize workflows and decisions.",
              image: "/N2.jpg",
            },
            {
              title: "Community Outreach",
              description:
                "Supporting education through technology donations and mentorship.",
              image: "/N3.jpg",
            },
          ].map((news, i) => (
            <Card
              key={i}
              className="overflow-hidden shadow-md hover:shadow-lg transition rounded-xl"
            >
              <img
                src={news.image}
                alt={news.title}
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-green-700">
                  {news.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {news.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* GROWTH / PROGRESS */}
      <section className="px-6 md:px-16 lg:px-24 py-12">
        <h2 className="text-3xl font-semibold text-center mb-10 text-green-800">
          Our Growth at a Glance
        </h2>
        <AnimatedProgress />
      </section>

      {/* TESTIMONIALS */}
      <section className="px-6 md:px-16 lg:px-24 py-12 bg-green-50 rounded-2xl">
        <h2 className="text-3xl font-semibold text-center mb-10 text-green-800">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "John Doe",
              feedback:
                "Their professionalism and expertise transformed our operations.",
            },
            {
              name: "Amare N.",
              feedback:
                "Outstanding collaboration and innovation in every project.",
            },
            {
              name: "Daniel T.",
              feedback: "We saw real growth and better customer engagement.",
            },
          ].map((t, i) => (
            <Card key={i} className="p-6 shadow-md hover:shadow-lg rounded-xl">
              <CardDescription className="italic mb-3 text-lg">
                “{t.feedback}”
              </CardDescription>
              <p className="text-green-700 font-semibold">— {t.name}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="px-6 md:px-16 lg:px-24 py-12">
        <h2 className="text-3xl font-semibold text-center mb-10 text-green-800">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {team.map((member, i) => (
            <Card key={i} className="p-6 shadow-md hover:shadow-lg rounded-xl">
              <img
                src={member.image}
                alt={member.name}
                className="w-50 h-50 mx-auto rounded-full object-cover mb-4"
              />
              <CardTitle className="text-xl font-semibold text-green-700">
                {member.name}
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                {member.role}
              </CardDescription>
            </Card>
          ))}
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="px-6 md:px-16 lg:px-24 py-12 bg-gray-100 rounded-2xl">
        <h2 className="text-3xl font-semibold text-center mb-8 text-green-800">
          Get in Touch
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <form className="space-y-4 bg-white p-6 shadow-md rounded-xl">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-md px-4 py-2"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 rounded-md px-4 py-2"
            />
            <textarea
              placeholder="Your Message"
              className="w-full border border-gray-300 rounded-md px-4 py-2 h-32"
            ></textarea>
            <Button className="bg-green-700 hover:bg-green-800 w-full">
              Send Message
            </Button>
          </form>
          <div className="flex flex-col justify-center items-center text-center">
            <h3 className="text-xl font-semibold text-green-700 mb-2">
              Contact Details
            </h3>
            <p className="text-muted-foreground">📞 +251 937 922 229</p>
            <p className="text-muted-foreground">📧 admin@weynamba.com.et</p>
            <p className="text-muted-foreground">📍 Addis Ababa, Ethiopia</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      {/* <footer className="bg-green-600 text-white py-6 mt-12 text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Weyn Amba Trading. All rights reserved.</p>
        <div className="mt-2 flex justify-center space-x-4">
          <Link href="#">LinkedIn</Link>
          <Link href="#">Facebook</Link>
          <Link href="#">Twitter</Link>
        </div>
      </footer> */}
    </div>
  );
}
