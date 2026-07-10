"use client";

import Image from "next/image";
import { useState } from "react";
import { X } from "lucide-react";

const galleryImages = [
  {
    src: "/images/gallery/truck-front-1.jpeg",
    title: "Fleet Vehicle",
    category: "Our Trucks",
  },
  {
    src: "/images/gallery/container-1.jpeg",
    title: "Ashok Leyland Truck",
    category: "Fleet",
  },
  {
    src: "/images/gallery/container-2.jpeg",
    title: "Container Transportation",
    category: "Containers",
  },
  {
    src: "/images/gallery/machinery-1.jpeg",
    title: "Heavy Machinery",
    category: "ODC",
  },
  {
    src: "/images/gallery/machinery-2.jpeg",
    title: "Equipment Transport",
    category: "Industrial",
  },
  {
    src: "/images/gallery/odc-1.jpeg",
    title: "ODC Movement",
    category: "Oversized Cargo",
  },
  {
    src: "/images/gallery/odc-2.jpeg",
    title: "Logistics Support",
    category: "Transport",
  },
  {
    src: "/images/gallery/steel-1.jpeg",
    title: "Steel Transport",
    category: "Industrial",
  },
  {
    src: "/images/gallery/pipes-1.jpeg",
    title: "Pipe Transportation",
    category: "Logistics",
  },
  {
    src: "/images/gallery/night-1.jpeg",
    title: "Night Operations",
    category: "Operations",
  },
  {
    src: "/images/gallery/night-2.jpeg",
    title: "Fleet at Night",
    category: "Fleet",
  },
  {
    src: "/images/gallery/night-3.jpeg",
    title: "Night Highway",
    category: "Operations",
  },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section
      id="gallery"
      className="py-28 bg-gradient-to-b from-white to-gray-100"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <p className="uppercase tracking-[5px] text-red-600 font-semibold">
            Gallery
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Our Work
          </h2>

          <p className="text-gray-600 mt-5 max-w-3xl mx-auto">
            Explore our fleet, container transportation, heavy equipment
            movement and logistics operations across South India.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {galleryImages.map((image) => (

            <div
              key={image.src}
              onClick={() => setSelectedImage(image.src)}
              className="group cursor-pointer bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-72 overflow-hidden">

                <Image
                  src={image.src}
                  alt={image.title}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-700"
                />

              </div>

              <div className="p-6">

                <p className="text-red-600 text-sm font-semibold">
                  {image.category}
                </p>

                <h3 className="text-2xl font-bold mt-2">
                  {image.title}
                </h3>

              </div>

            </div>

          ))}

        </div>

      </div>

      {selectedImage && (

        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[100] flex items-center justify-center p-6"
          onClick={() => setSelectedImage(null)}
        >

          <button
            className="absolute top-8 right-8 text-white"
            onClick={() => setSelectedImage(null)}
          >
            <X size={40} />
          </button>

          <div
            className="relative w-full max-w-6xl h-[80vh]"
            onClick={(e) => e.stopPropagation()}
          >

            <Image
              src={selectedImage}
              alt="Gallery"
              fill
              className="object-contain rounded-2xl"
            />

          </div>

        </div>

      )}
    </section>
  );
}