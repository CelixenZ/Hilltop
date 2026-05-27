"use client"

import { useState } from "react"
import Image from "next/image"
import { PageHeader } from "@/components/shared/page-header"
import { Image as ImageIcon } from "lucide-react"

const categories = ["All", "Campus", "Events", "Sports", "Academics", "Arts", "Community"]

const galleryItems = [
  { id: 1, title: "Main Campus Building", category: "Campus", image: "/images/galary1.jpg" },
  { id: 2, title: "Science Fair 2026", category: "Events", image: "/images/galary2.jpg" },
  { id: 3, title: "Basketball Championship", category: "Sports", image: "/images/galary3.jpg" },
  { id: 4, title: "Chemistry Lab Session", category: "Academics", image: "/images/galary4.jpg" },
  { id: 5, title: "Annual Art Exhibition", category: "Arts", image: "/images/galary5.jpg" },
  { id: 6, title: "Community Service Day", category: "Community", image: "/images/gallery6.jpg" },
  { id: 7, title: "School Library", category: "Campus", image: "/images/gallery7.jpg" },
  { id: 8, title: "Graduation Ceremony 2025", category: "Events", image: "/images/gallery8.jpg" },
  { id: 9, title: "Soccer Tournament", category: "Sports", image: "/images/gallery9.jpg" },
  { id: 10, title: "Robotics Club", category: "Academics", image: "/images/gallery10.jpg" },
  { id: 11, title: "Drama Performance", category: "Arts", image: "/images/gallery11.jpg" },
  { id: 12, title: "Parent-Teacher Meeting", category: "Community", image: "/images/gallery12.jpg" },
]

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredItems = activeCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory)

  return (
    <>
      <PageHeader 
        title="Photo Gallery"
        description="Explore moments captured across our campus, events, and student activities."
      />

      {/* Filter Bar */}
      <section className="bg-white border-b border-[#d1e7d8] sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 text-sm font-medium rounded-full whitespace-nowrap transition-colors ${
                  activeCategory === category
                    ? "bg-[#0f5132] text-white"
                    : "bg-[#e8f5ed] text-[#062c15] hover:bg-[#d1e7d8]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 bg-[#f4f9f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredItems.map((item) => (
              <div 
                key={item.id}
                className="group relative aspect-square rounded-xl overflow-hidden border border-[#d1e7d8] cursor-pointer hover:shadow-lg transition-all bg-[#e8f5ed]"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#062c15]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className="inline-block px-2 py-0.5 bg-[#0f5132] text-white text-xs font-medium rounded-full mb-2">
                      {item.category}
                    </span>
                    <h3 className="text-white font-medium">{item.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-16">
              <ImageIcon className="w-16 h-16 text-[#d1e7d8] mx-auto mb-4" />
              <p className="text-[#4a7c5f]">No images found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
