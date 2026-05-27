import Link from "next/link"
import { ArrowRight, Calendar } from "lucide-react"

const newsItems = [
  {
    id: 1,
    title: "Students Excel at Regional Science Fair",
    excerpt: "Our students brought home multiple awards at the annual Regional Science Fair, showcasing innovative projects in environmental science and technology.",
    date: "May 15, 2026",
    category: "Achievements",
    image: "/placeholder-news-1.jpg"
  },
  {
    id: 2,
    title: "New STEM Lab Opening This Fall",
    excerpt: "We are excited to announce the opening of our state-of-the-art STEM laboratory, equipped with the latest technology and learning tools.",
    date: "May 10, 2026",
    category: "Facilities",
    image: "/placeholder-news-2.jpg"
  },
  {
    id: 3,
    title: "Annual Sports Day Celebration",
    excerpt: "Join us for our annual Sports Day celebration featuring athletic competitions, team events, and family activities.",
    date: "May 5, 2026",
    category: "Events",
    image: "/placeholder-news-3.jpg"
  }
]

export function LatestNews() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#062c15] mb-2">
              Latest News
            </h2>
            <p className="text-[#4a7c5f]">
              Stay updated with what&apos;s happening at ELT Education
            </p>
          </div>
          <Link 
            href="/news"
            className="hidden sm:flex items-center gap-2 text-[#0f5132] font-semibold hover:text-[#062c15] transition-colors"
          >
            View All
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <article 
              key={item.id}
              className="bg-[#f4f9f5] rounded-xl overflow-hidden border border-[#d1e7d8] hover:shadow-lg transition-shadow group"
            >
              <div className="aspect-video bg-[#e8f5ed] relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-[#0f5132]/20 rounded-full flex items-center justify-center">
                    <Calendar className="w-8 h-8 text-[#0f5132]" />
                  </div>
                </div>
                <span className="absolute top-4 left-4 px-3 py-1 bg-[#0f5132] text-white text-xs font-medium rounded-full">
                  {item.category}
                </span>
              </div>
              <div className="p-6">
                <p className="text-sm text-[#4a7c5f] mb-2">{item.date}</p>
                <h3 className="text-lg font-semibold text-[#062c15] mb-3 group-hover:text-[#0f5132] transition-colors">
                  {item.title}
                </h3>
                <p className="text-[#4a7c5f] text-sm leading-relaxed mb-4">
                  {item.excerpt}
                </p>
                <Link 
                  href={`/news/${item.id}`}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-[#0f5132] hover:text-[#062c15] transition-colors"
                >
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <Link 
          href="/news"
          className="flex sm:hidden items-center justify-center gap-2 mt-8 text-[#0f5132] font-semibold hover:text-[#062c15] transition-colors"
        >
          View All News
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  )
}
