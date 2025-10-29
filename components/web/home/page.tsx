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
      src: "/image1.jpeg",
      alt: "Animated Image 1",
      description:
        "Discover our flagship product – innovative and reliable for everyday use.",
    },
    {
      src: "/image2.jpeg",
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

  // Debug colors (remove after)
  const slideColors = ["bg-red-200", "bg-blue-200", "bg-green-200"];
  const departments = [
    {
      title: "Marketing",
      description:
        "Drive brand growth and customer engagement through innovative strategies.",
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
  ];
  const currentImage = images[currentImageIndex];
  return (
    <div
      className="space-y-6 text-foreground relative" // Added 'relative' to contain absolute overlay
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
        <div className="grid grid-cols-2 gap-6">
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
        {/* About Section */}
        <div>
          <br />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {departments.map((dept, index) => (
            <Card
              key={index}
              className="bg-card/90 text-card-foreground backdrop-blur-sm"
            >
              <CardHeader className="text-center">
                <div className="text-4xl mb-2">{dept.icon}</div>{" "}
                {/* Icon/Emoji */}
                <CardTitle className="text-card-foreground">
                  {dept.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-muted-foreground">
                  {dept.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
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
