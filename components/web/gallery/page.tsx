"use client";

// import { useEffect, useState } from "react";
// import Image from "next/image";

// export default function GalleryPage() {
//   const [gallery, setGallery] = useState<any[]>([]);

//   useEffect(() => {
//     fetch("/api/gallery")
//       .then((res) => res.json())
//       .then(setGallery);
//   }, []);

//   return (
//     <section className="container mx-auto px-6 py-12 text-center">
//       <h1 className="text-4xl font-bold mb-8 text-green-700">Gallery</h1>

//       <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
//         {gallery.map((item, i) => (
//           <div
//             key={i}
//             className="relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
//           >
//             <Image
//               src={item.src}
//               alt={item.title}
//               width={400}
//               height={300}
//               className="w-full h-56 object-cover"
//             />
//             <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition flex items-center justify-center">
//               <p className="text-white text-lg font-semibold">{item.title}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }


import Image from "next/image";

export default function GalleryPage() {
  const galleryItems = [
    { src: "/images/gallery1.jpg", title: "Coffee Processing Plant" },
    { src: "/images/gallery2.jpg", title: "Export Logistics Hub" },
    { src: "/images/gallery3.jpg", title: "Team at Work" },
    { src: "/images/gallery4.jpg", title: "Branch Opening Ceremony" },
  ];

  return (
    <section className="container mx-auto px-6 py-12 text-center">
      <h1 className="text-4xl font-bold mb-8 text-green-700">Gallery</h1>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {galleryItems.map((item, i) => (
          <div
            key={i}
            className="relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
          >
            <Image
              src={item.src}
              alt={item.title}
              width={400}
              height={300}
              className="w-full h-56 object-cover"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition flex items-center justify-center">
              <p className="text-white text-lg font-semibold">{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
