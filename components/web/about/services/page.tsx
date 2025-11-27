"use client";

import Image from "next/image";
import { CheckCircle } from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      title: "Export Services",
      description:
        "We facilitate the export of premium Ethiopian goods including coffee, oilseeds, and pulses, ensuring quality and compliance with global standards.",
      image: "/images/export-service.jpg",
    },
    {
      title: "Logistics & Transportation",
      description:
        "Our logistics solutions guarantee efficient and timely delivery of goods from source to destination.",
      image: "/images/logistics.jpg",
    },
    {
      title: "Consulting & Business Support",
      description:
        "We provide strategic consulting for trade, procurement, and business development in Ethiopia and abroad.",
      image: "/images/consulting.jpg",
    },
  ];

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center text-green-700 mb-8">
        About Our Services
      </h1>

      <div className="space-y-12">
        {services.map((service, i) => (
          <div
            key={i}
            className="grid md:grid-cols-2 gap-8 items-center bg-white/90 rounded-xl shadow-md overflow-hidden border-t-4 border-green-700"
          >
            <Image
              src={service.image}
              alt={service.title}
              width={600}
              height={400}
              className="w-full h-80 object-cover"
            />
            <div className="p-8">
              <h2 className="text-2xl font-semibold text-green-700 mb-4 flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-green-600" />
                {service.title}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
