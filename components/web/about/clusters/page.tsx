"use client";

import Image from "next/image";

export default function ClustersPage() {
  return (
    <div className="container mx-auto px-6 py-12">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-green-700 mb-4">
          About Our Clusters
        </h1>
        <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
          Weyn Amba operates through strategically organized clusters that focus
          on different sectors to enhance operational efficiency and service
          delivery. Each cluster is designed to address specific customer and
          market needs while maintaining synergy across our operations.
        </p>
      </section>

      <section className="grid md:grid-cols-3 gap-8 text-center">
        {[
          {
            title: "Coffee Export Cluster",
            description:
              "Handles sourcing, quality assurance, and export of Ethiopian coffee to global markets.",
            image: "/images/coffee-cluster.jpg",
          },
          {
            title: "Agricultural Products Cluster",
            description:
              "Focuses on value chain development for local agricultural products and fair trade practices.",
            image: "/images/agriculture-cluster.jpg",
          },
          {
            title: "Industrial Supply Cluster",
            description:
              "Provides machinery, construction materials, and technical support for growing industries.",
            image: "/images/industry-cluster.jpg",
          },
        ].map((cluster, index) => (
          <div
            key={index}
            className="bg-white/90 rounded-xl shadow-md overflow-hidden border-t-4 border-green-700"
          >
            <Image
              src={cluster.image}
              alt={cluster.title}
              width={400}
              height={250}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-green-700 mb-2">
                {cluster.title}
              </h2>
              <p className="text-gray-600">{cluster.description}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
