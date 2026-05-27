"use client"

import { useState } from "react"
import Link from "next/link"
import { PageHeader } from "@/components/shared/page-header"
import { ArrowRight, Calendar, User, Image as ImageIcon } from "lucide-react"

const categories = ["All", "Achievements", "Events", "Facilities", "Arts", "Sports", "Community"]

const featuredNews = [
  {
    id: 1,
    title: "ELT Education Students Win National Science Olympiad",
    excerpt: "Our talented students brought home gold medals at the prestigious National Science Olympiad, showcasing exceptional skills in physics, chemistry, and biology competitions.",
    date: "May 20, 2026",
    author: "Dr. Sarah Mitchell",
    category: "Achievements",
  },
  {
    id: 2,
    title: "New State-of-the-Art Library Opening Next Month",
    excerpt: "We are thrilled to announce the completion of our new 10,000 square foot library facility, featuring modern study spaces, digital resources, and collaborative learning areas.",
    date: "May 18, 2026",
    author: "James Wilson",
    category: "Facilities",
  },
]

const recentNews = [
  {
    id: 3,
    title: "Annual Art Exhibition Showcases Student Talent",
    date: "May 15, 2026",
    category: "Arts",
  },
  {
    id: 4,
    title: "Basketball Team Advances to State Finals",
    date: "May 12, 2026",
    category: "Sports",
  },
  {
    id: 5,
    title: "Community Service Day: 500+ Hours Volunteered",
    date: "May 10, 2026",
    category: "Community",
  },
]

export default function NewsPage() {
  const [activeCategory, setActiveCategory] = useState("All")

  return (
    <>
      <PageHeader 
        title="News & Updates"
        description="Stay informed about the latest happenings, achievements, and events at ELT Education."
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

      {/* Featured News */}
      <section className="py-16 bg-[#f4f9f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#062c15] mb-8">Featured Stories</h2>
          
          <div className="space-y-6">
            {featuredNews.map((news) => (
              <article 
                key={news.id}
                className="bg-white rounded-xl overflow-hidden border border-[#d1e7d8] hover:shadow-lg transition-shadow"
              >
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Image Placeholder */}
                  <div className="aspect-video md:aspect-auto bg-[#e8f5ed] flex items-center justify-center">
                    <div className="text-center p-8">
                      <ImageIcon className="w-16 h-16 text-[#0f5132] mx-auto mb-2" />
                      <p className="text-sm text-[#4a7c5f]">Featured Image</p>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 lg:p-8 flex flex-col justify-center">
                    <span className="inline-block self-start px-3 py-1 bg-[#e8f5ed] text-[#0f5132] text-xs font-medium rounded-full mb-4">
                      {news.category}
                    </span>
                    <h3 className="text-xl lg:text-2xl font-bold text-[#062c15] mb-3">
                      {news.title}
                    </h3>
                    <p className="text-[#4a7c5f] leading-relaxed mb-4">
                      {news.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-[#4a7c5f] mb-4">
                      <span className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {news.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {news.date}
                      </span>
                    </div>
                    <Link 
                      href={`/news/${news.id}`}
                      className="inline-flex items-center gap-2 text-[#0f5132] font-semibold hover:text-[#062c15] transition-colors"
                    >
                      Read Full Article
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Recent News Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#062c15] mb-8">Recent Updates</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {recentNews.map((news) => (
              <article 
                key={news.id}
                className="bg-[#f4f9f5] rounded-xl overflow-hidden border border-[#d1e7d8] hover:shadow-md transition-shadow group"
              >
                {/* Thumbnail */}
                <div className="aspect-video bg-[#e8f5ed] flex items-center justify-center">
                  <ImageIcon className="w-10 h-10 text-[#0f5132]" />
                </div>
                
                {/* Content */}
                <div className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-0.5 bg-white text-[#0f5132] text-xs font-medium rounded-full border border-[#d1e7d8]">
                      {news.category}
                    </span>
                    <span className="text-xs text-[#4a7c5f]">{news.date}</span>
                  </div>
                  <h3 className="font-semibold text-[#062c15] group-hover:text-[#0f5132] transition-colors mb-3">
                    {news.title}
                  </h3>
                  <Link 
                    href={`/news/${news.id}`}
                    className="inline-flex items-center gap-1 text-sm font-medium text-[#0f5132] hover:text-[#062c15] transition-colors"
                  >
                    Read More
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
