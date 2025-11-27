// "use client";

// import { useEffect, useState } from "react";

// export default function AboutPage() {
//   const [sections, setSections] = useState<any[]>([]);

//   useEffect(() => {
//     fetch("/api/about")
//       .then((res) => res.json())
//       .then(setSections);
//   }, []);

//   return (
//     <section className="container mx-auto px-6 py-12 text-center">
//       <h1 className="text-4xl font-bold mb-8 text-green-700">About Us</h1>

//       <div className="grid gap-8 md:grid-cols-3">
//         {sections.map((section, i) => (
//           <div
//             key={i}
//             className="p-6 bg-white/80 rounded-xl shadow-md border-t-4 border-green-700"
//           >
//             <h2 className="text-2xl font-semibold mb-3">{section.title}</h2>
//             <p className="text-gray-600 leading-relaxed">{section.text}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function AboutPage() {
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

  const aboutSections = [
    {
      title: "Who We Are",
      text: "Weyn Amba Trading PLC is a diversified business company focused on quality, innovation, and sustainability across multiple sectors in Ethiopia.",
    },
    {
      title: "Our Mission",
      text: "To provide exceptional products and services that contribute to economic growth and customer satisfaction.",
    },
    {
      title: "Our Vision",
      text: "To become one of Ethiopia’s leading and most trusted trading companies, known for excellence and integrity.",
    },
  ];
  const currentImage = images[currentImageIndex];
  return (
    <div>
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
      <section className="container mx-auto px-6 py-12 text-center">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-green-700 mb-4">
            Weyn Amba Trading
          </h1>
          <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed indent-8">
            Weyn Amba Trading PLC is a dynamic and forward-thinking company
            dedicated to delivering high-quality products and services across
            multiple sectors including agriculture, coffee export, and
            logistics. Our mission is to empower local communities and create
            sustainable economic growth through innovation and technology.
          </p>
        </section>
        <div className="grid gap-8 md:grid-cols-3">
          {aboutSections.map((section, i) => (
            <div
              key={i}
              className="p-6 bg-white/80 rounded-xl shadow-md border-t-4 border-green-700"
            >
              <h2 className="text-2xl font-semibold mb-3">{section.title}</h2>
              <p className="text-gray-600 leading-relaxed">{section.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-gray-700 max-w-3xl mx-auto leading-relaxed">
          <p>
            We work closely with partners, clients, and communities to deliver
            impactful results and sustainable value. Our multidisciplinary
            approach ensures we adapt to the evolving needs of our customers.
          </p>
        </div>
      </section>
      <div className="container mx-auto px-6 py-12">
        <section className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <img
              src="/about/images.jpg"
              alt="Weyn Amba Trading"
              width={600}
              height={400}
              className="rounded-xl shadow-lg object-cover"
            />
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-green-700 mb-3">
              Business Objective Strategy
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              An effective business objective strategy involves setting SMART
              goals (Specific, Measurable, Achievable, Relevant, Time-bound)
              that align with the company's overall mission and vision. The
              strategy should focus on key areas such as financial health,
              operational efficiency, customer satisfaction, and employee
              development. These objectives act as a roadmap, guiding decisions,
              resource allocation, and daily actions toward achieving long-term
              success.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
