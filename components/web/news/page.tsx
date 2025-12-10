"use client";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Linkedin, Send, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function NewsPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [submitted, setSubmitted] = useState(false);

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

  const newsItems = [
    {
      id: 1,
      title: "Weyn Amba Expands Its Coffee Export Business",
      image: "/N1.jpg",
      date: "October 10, 2025",
      description:
        "Our company is proud to announce expansion in the coffee export sector, partnering with local farmers to reach global markets.",
    },
    {
      id: 2,
      title: "New Branch Opened in Addis Ababa",
      image: "/N2.jpg",
      date: "September 15, 2025",
      description:
        "Weyn Amba Trading officially opened a new branch office in the heart of Addis Ababa to better serve our growing customer base.",
    },
    {
      id: 1,
      title: "Weyn Amba Expands Its Coffee Export Business",
      image: "/N1.jpg",
      date: "October 10, 2025",
      description:
        "Our company is proud to announce expansion in the coffee export sector, partnering with local farmers to reach global markets.",
    },
    {
      id: 2,
      title: "New Branch Opened in Addis Ababa",
      image: "/N2.jpg",
      date: "September 15, 2025",
      description:
        "Weyn Amba Trading officially opened a new branch office in the heart of Addis Ababa to better serve our growing customer base.",
    },
  ];

  const currentImage = images[currentImageIndex];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.firstName || !formData.lastName) return;
    console.log("Subscribed:", formData);
    setSubmitted(true);
    setFormData({ firstName: "", lastName: "", email: "" });
  };

  return (
    <div>
      {/* Hero Slider */}
      <section className="relative h-[60vh] overflow-hidden">
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

      {/* News Section */}
      <section className="container mx-auto px-20 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center text-green-700">
          Latest News
        </h1>

        <div className="grid gap-10 md:grid-cols-3">
          {newsItems.map((news) => (
            <div
              key={news.id}
              className="bg-white/90 rounded-xl shadow-md overflow-hidden border-t-4 border-green-700 hover:shadow-lg transition-shadow"
            >
              <Image
                src={news.image}
                alt={news.title}
                width={800}
                height={400}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                  {news.title}
                </h2>
                <p className="text-sm text-gray-500 mb-3">{news.date}</p>
                <p className="text-gray-600">{news.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Social Media & Subscription Section */}
      <section className="bg-green-50 py-12 mt-12">
        <h2 className="text-center text-3xl font-bold mb-4 text-green-700">
          Stay Updated!
        </h2>
        <div className="max-w-xl mx-auto bg-white rounded-xl shadow-md p-6">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">
            Subscribe to Our Newsletter
          </h3>
          <p className="text-gray-600 mb-6">
            Enter your details below to receive the latest news and updates
            directly in your inbox.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="First Name"
              value={formData.firstName}
              onChange={(e) =>
                setFormData({ ...formData, firstName: e.target.value })
              }
              required
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-700"
            />
            <input
              type="text"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={(e) =>
                setFormData({ ...formData, lastName: e.target.value })
              }
              required
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-700"
            />
            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-700"
            />
            <Button
              type="submit"
              className="bg-green-700 hover:bg-green-800 text-white px-6 py-2 rounded-md"
            >
              Subscribe
            </Button>
          </form>
          {submitted && (
            <p className="text-green-700 mt-4 font-medium">
              Thank you for subscribing!
            </p>
          )}
        </div>
        <div className="container mx-auto text-center px-6 pt-6">
          <p className="text-lg text-gray-700 mb-6">
            Join our social media channels to get the latest news, updates, and
            announcements.
          </p>
          <div className="flex justify-center flex-wrap gap-4 mb-8">
            <Link
              href="https://www.linkedin.com"
              target="_blank"
              className="bg-blue-600 text-white p-4 rounded-full hover:bg-gray-600 transition flex items-center justify-center"
            >
              <Linkedin className="w-6 h-6" />
            </Link>
            <Link
              href="https://www.facebook.com/weynamba"
              target="_blank"
              className="bg-blue-500 text-white p-4 rounded-full hover:bg-gray-600 transition flex items-center justify-center"
            >
              <Facebook className="w-6 h-6" />
            </Link>
            <Link
              href="https://www.twitter.com"
              target="_blank"
              className="bg-sky-400 text-white p-4 rounded-full hover:bg-gray-600 transition flex items-center justify-center"
            >
              <Twitter className="w-6 h-6" />
            </Link>
            <Link
              href="https://www.instagram.com"
              target="_blank"
              className="bg-pink-400 text-white p-4 rounded-full hover:bg-gray-600 transition flex items-center justify-center"
            >
              <Instagram className="w-6 h-6" />
            </Link>

            <Link
              href="https://t.me/+mv1Q1-EaVnU5MTRk"
              target="_blank"
              className="bg-sky-600 text-white p-4 rounded-full hover:bg-gray-600 transition flex items-center justify-center"
            >
              <Send />
            </Link>
          </div>

          {/* Subscription Form */}
        </div>
      </section>
    </div>
  );
}
