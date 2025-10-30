"use client"; // Essential for hooks

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

export default function HomePage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    console.log("Current index:", currentImageIndex); // Debug (remove later)
    const interval = setInterval(() => {
      const nextIndex = (currentImageIndex + 1) % 5;
      console.log("Switching to index:", nextIndex);
      setCurrentImageIndex(nextIndex);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentImageIndex]);

  const images = [
    {
      src: "/1.jpeg",
      alt: "Animated Image 1",
      description:
        "Discover our flagship product – innovative and reliable for everyday use.",
    },
    {
      src: "/2.jpg",
      alt: "Animated Image 2",
      description:
        "Explore premium services designed to boost your business efficiency.",
    },
    {
      src: "/image.jpeg",
      alt: "Animated Image ",
      description: "Unlock advanced features that drive growth and success.",
    },
    {
      src: "/image1.jpg",
      alt: "Animated Image 3",
      description: "Unlock advanced features that drive growth and success.",
    },
    {
      src: "/image.jpg",
      alt: "Animated Image 3",
      description: "Unlock advanced features that drive growth and success.",
    },
  ];
  const slideColors = ["bg-red-200", "bg-blue-200", "bg-green-200"];
  const departments = [
    {
      title: "Marketing",
      description:
        "Marketing is the process of creating, communicating,and delivering products or services to customers to build brand awareness, attract new customers, and retain existing ones, ultimately driving sales. It involves understanding customer needs and wants, and then developing and promoting offerings that provide value to satisfy those needs, while also meeting business goals.  ",
      icon: "📈", // Emoji or replace with SVG/Image
    },
    {
      title: "Sales",
      description: "Close deals and build lasting client relationships.",
      icon: "💼",
    },
    {
      title: "Finance",
      description:
        "Manage budgets and ensure financial health for sustainable growth.",
      icon: "💰",
    },
    {
      title: "HR",
      description: "Foster a talented team and positive workplace culture.",
      icon: "👥",
    },
    {
      title: "Project",
      description:
        "A business project is a temporary set of activities with a defined timeline to achieve a specific goal, such as launching a new product, implementing a new system, or reorganizing a department. These projects are managed through a life cycle that includes initiation, planning, execution, and closure, and are crucial for strategic growth, operational efficiency, or fulfilling other business objectives.",
      icon: "👥",
    },
  ];
  const currentImage = images[currentImageIndex];
  return (
    <div
      className="space-y-6 text-foreground relative bg-white" // Added 'relative' to contain absolute overlay
      style={{ minHeight: "calc(100vh - 200px)" }} // Fit inside main (adjust if footer height changes)
    >
      {/* Background & Overlay - Now contained */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed -z-10" // Negative z to background
        // style={{ backgroundImage: "url('/background.jpeg')" }}
      />
      <div className="absolute inset-0 bg-black/20 -z-10" />{" "}
      {/* Overlay behind content */}
      <div className="relative z-0">
        {/* <Card className="bg-card/90 text-card-foreground backdrop-blur-sm"> */}
        {/* <CardHeader>
            <CardTitle className="text-card-foreground">
              Featured Animated Image
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              Dynamic visual showcasing our content – changes every 3 seconds.
            </CardDescription>
          </CardHeader> */}
        {/* <CardContent className="p-6"> */}
        <div className="relative w-full h-[500px] overflow-hidden rounded-lg shadow-lg border-2 border-gray-300">
          <div
            className="flex h-full transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${currentImageIndex * 100}%)`,
              width: `${images.length * 100}%`,
            }}
          >
            {images.map((image, index) => (
              <div
                key={index}
                className={cn(
                  "flex-shrink-0 w-full h-full flex items-center justify-center",
                  slideColors[index]
                )}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover rounded"
                  onLoad={() =>
                    console.log(`Image ${index + 1} loaded successfully`)
                  }
                  onError={(e) => console.error(`Image ${index + 1} error:`, e)}
                />
              </div>
            ))}
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/40 rounded-lg text-white text-center p-6">
              <h3 className="text-2xl font-bold mb-2">
                Explore Our Latest Innovations
              </h3>
              <p className="text-lg max-w-md">{currentImage.description}</p>
            </div>
          </div>
        </div>
        {/* </CardContent>
        </Card> */}
        <div>
          <br />
        </div>
        {/* Upper Two Cards: Side by Side */}

        {/* About Section */}
        {/* <div
          className="bg-cover bg-center bg-no-repeat px-6 py-12 rounded-2xl text-white"
          style={{ backgroundImage: "url('/background.jpeg')" }}
        >
            <h2 className="text-3xl font-bold mb-4">About Our Business</h2>
        </div> */}

        <div className="px-6 md:px-16 lg:px-24 text-center mb-12 pt-4">
          <h1 className="text-3xl font-semibold mb-4 text-green-700">
            Weyn Amba Trading
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-3xl mx-auto text-justify indent-8">
            A business description is a summary that outlines what a company
            does, who it serves, and what makes it unique, appearing in
            documents like business plans, online profiles, and directories. For
            internal use, such as in a business plan, it includes legal
            structure, ownership, and key regulations. For external use, like a
            Google Business Profile, it focuses on your mission, customer
            benefits, and how to contact you, often incorporating a clear call
            to action. We are dedicated to delivering innovative solutions that
            help businesses grow and transform digitally. Our team combines
            creativity, technology, and strategy to build impactful digital
            experiences that make a difference.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6 px-20 md:px-22 lg:px-24 mb-6">
          <Card className="bg-card/90 text-card-foreground backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-card-foreground">
                Welcome to Our Public Web
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                This is the main area for your business features like product
                listings or sign-ups.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild>
                <Link href="/signup">Get Started</Link>
              </Button>
            </CardContent>
          </Card>
          <Card className="bg-card/90 text-card-foreground backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-card-foreground">
                Our Products
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-foreground">
                <li className="flex justify-between items-center">
                  <span>Product 1 - Description</span>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </li>
                <li className="flex justify-between items-center">
                  <span>Product 2 - Description</span>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </li>
                <li className="flex justify-between items-center">
                  <span>Product 3 - Description</span>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-20 md:px-22 lg:px-24 text-justify pt-4">
          {departments.map((dept, index) => (
            <Card
              key={index}
              className="bg-card/90 text-card-foreground backdrop-blur-2xl border-t-8 border-x-0 border-b-0 border-green-800 rounded-t-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <CardHeader className="text-center">
                <div className="text-5xl mb-3">{dept.icon}</div>
                <CardTitle className="text-2xl font-semibold text-green-800">
                  {dept.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  {dept.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        {/* News Section */}
        <div className="px-6 md:px-16 lg:px-24 py-12 bg-gray-50 rounded-2xl mt-12">
          <h2 className="text-3xl font-semibold text-center mb-8 text-green-800">
            Latest News
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Single News Card */}
            {[
              {
                title: "New Partnership Announcement",
                description:
                  "We are thrilled to announce our new partnership with leading tech innovators to expand our digital solutions portfolio.",
                image: "/N1.jpg",
              },
              {
                title: "Product Launch 2025",
                description:
                  "Our latest product line introduces AI-powered tools to optimize business workflows and drive smarter decisions.",
                image: "/N2.jpg",
              },
              {
                title: "Community Outreach Program",
                description:
                  "Our team participated in a nationwide initiative to support education through technology donations and mentorship.",
                image: "/N3.jpg",
              },
            ].map((news, index) => (
              <Card
                key={index}
                className="bg-white text-foreground shadow-md hover:shadow-lg transition-shadow duration-300 rounded-xl overflow-hidden"
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
                  <CardDescription className="text-muted-foreground text-base leading-relaxed">
                    {news.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
        {/* Progress / Stats Section */}
        <div className="px-6 md:px-16 lg:px-24 py-16 bg-gray-50 rounded-2xl mt-12 text-center">
          <h2 className="text-3xl font-semibold mb-8 text-green-800">
            Our Growth at a Glance
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 justify-center items-center">
            {[
              {
                label: "Partner Companies",
                value: 20,
                color: "text-green-700",
              },
              {
                label: "Dedicated Employees",
                value: 80,
                color: "text-green-600",
              },
              { label: "Global Branches", value: 15, color: "text-green-500" },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                {/* Circular progress (SVG) */}
                <div className="relative w-36 h-36">
                  <svg className="w-full h-full -rotate-90">
                    <circle
                      cx="72"
                      cy="72"
                      r="64"
                      stroke="#e5e7eb" // gray-200 background ring
                      strokeWidth="12"
                      fill="transparent"
                    />
                    <circle
                      cx="72"
                      cy="72"
                      r="64"
                      stroke="currentColor"
                      strokeWidth="12"
                      fill="transparent"
                      strokeDasharray={2 * Math.PI * 64}
                      strokeDashoffset={
                        2 * Math.PI * 64 * (1 - Math.min(item.value / 100, 1))
                      }
                      className={`${item.color} transition-all duration-700 ease-out`}
                    />
                  </svg>

                  {/* Number in center */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-3xl font-bold text-green-700">
                      {item.value}+
                    </span>
                  </div>
                </div>

                {/* Label below */}
                <p className="mt-4 text-gray-600 text-lg font-medium">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-4"></div>
        <div className="col-6 flex justify-center items-center text-center"></div>
        <Card className="bg-card/90 text-card-foreground backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-card-foreground">About Us</CardTitle>
          </CardHeader>
          <CardContent className="text-foreground">
            <p>
              Learn more about your business and mission. Add dynamic content
              here!
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
