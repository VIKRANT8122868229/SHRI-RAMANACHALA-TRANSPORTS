"use client";

import Image from "next/image";
import { useState } from "react";
import Reveal from "./Reveal";
import { X, ZoomIn } from "lucide-react";

const galleryImages = [
  {
    src: "/images/gallery/truck-front-1.jpeg",
    title: "Fleet Vehicle",
    category: "Fleet",
  },
  {
    src: "/images/gallery/container-1.jpeg",
    title: "Ashok Leyland",
    category: "Truck",
  },
  {
    src: "/images/gallery/container-2.jpeg",
    title: "Container Transport",
    category: "Container",
  },
  {
    src: "/images/gallery/machinery-1.jpeg",
    title: "Heavy Machinery",
    category: "ODC",
  },
  {
    src: "/images/gallery/machinery-2.jpeg",
    title: "Industrial Equipment",
    category: "Industrial",
  },
  {
    src: "/images/gallery/odc-1.jpeg",
    title: "Oversized Cargo",
    category: "ODC",
  },
  {
    src: "/images/gallery/odc-2.jpeg",
    title: "Logistics",
    category: "Transport",
  },
  {
    src: "/images/gallery/steel-1.jpeg",
    title: "Steel Cargo",
    category: "Industrial",
  },
  {
    src: "/images/gallery/pipes-1.jpeg",
    title: "Pipe Transport",
    category: "Logistics",
  },
  {
    src: "/images/gallery/night-1.jpeg",
    title: "Night Operations",
    category: "Operations",
  },
  {
    src: "/images/gallery/night-2.jpeg",
    title: "Fleet Movement",
    category: "Fleet",
  },
  {
    src: "/images/gallery/night-3.jpeg",
    title: "Highway Transport",
    category: "Operations",
  },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-gradient-to-br from-[#07182f] via-[#0B2447] to-[#123B73] py-28"
    >
      {/* Background */}

      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-red-600/10 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

        <Reveal>
          <div className="text-center max-w-3xl mx-auto">

            <span className="inline-flex bg-red-600 text-white px-5 py-2 rounded-full font-semibold">
              OUR GALLERY
            </span>

            <h2 className="mt-6 text-5xl font-black text-white">
              Our Fleet &
              <span className="text-red-500"> Operations</span>
            </h2>

            <p className="mt-6 text-gray-300 text-lg leading-8">
              A glimpse into our fleet, container transportation,
              heavy equipment movement and logistics operations
              across South India.
            </p>

          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

          {galleryImages.map((image, index) => (
            <Reveal
              key={image.src}
              delay={index * 0.08}
            >
              <div
                onClick={() => setSelectedImage(image.src)}
                className="group cursor-pointer overflow-hidden rounded-3xl bg-white/10 backdrop-blur-xl border border-white/10 hover:border-red-500 transition-all duration-500 hover:-translate-y-3"
              >
                <div className="relative h-72 overflow-hidden">

                  <Image
                    src={image.src}
                    alt={image.title}
                    fill
                    className="object-cover group-hover:scale-110 transition duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">

                    <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center">

                      <ZoomIn
                        size={30}
                        className="text-white"
                      />

                    </div>

                  </div>

                </div>

                <div className="p-6">

                  <span className="text-red-500 text-sm font-semibold uppercase tracking-wider">
                    {image.category}
                  </span>

                  <h3 className="mt-3 text-2xl font-bold text-white">
                    {image.title}
                  </h3>

                </div>

              </div>
            </Reveal>
          ))}

        </div>

      </div>

      {selectedImage && (

        <div
          className="fixed inset-0 bg-black/95 backdrop-blur-md z-[100] flex items-center justify-center p-6"
          onClick={() => setSelectedImage(null)}
        >

          <button
            className="absolute top-8 right-8 text-white hover:text-red-500 transition"
            onClick={() => setSelectedImage(null)}
          >
            <X size={40} />
          </button>

          <div
            className="relative w-full max-w-6xl h-[85vh]"
            onClick={(e) => e.stopPropagation()}
          >

            <Image
              src={selectedImage}
              alt="Gallery Image"
              fill
              className="object-contain rounded-3xl"
            />

          </div>

        </div>

      )}

    </section>
  );
}