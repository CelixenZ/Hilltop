import { Award, Users, TrendingUp } from "lucide-react"

const pillars = [
  {
    icon: Award,
    title: "Academic Excellence",
    description: "Our rigorous curriculum and dedicated educators ensure students receive a world-class education that prepares them for future success in higher education and careers."
  },
  {
    icon: Users,
    title: "Expert Faculty",
    description: "Our team of highly qualified and passionate educators bring years of experience and innovative teaching methods to inspire and guide every student."
  },
  {
    icon: TrendingUp,
    title: "Proven Results",
    description: "With a consistent track record of high achievement scores and successful college placements, our students consistently exceed expectations."
  }
]

export function CorePillars() {
  return (
    <section className="py-20 bg-[#f4f9f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#062c15] mb-4">
            Why Choose hilltop
          </h2>
          <p className="text-[#4a7c5f] max-w-2xl mx-auto">
            We are committed to providing an exceptional educational experience built on three core pillars
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 shadow-sm border border-[#d1e7d8] hover:shadow-md hover:border-[#7dd3a8] transition-all group"
            >
              <div className="w-14 h-14 bg-[#e8f5ed] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#0f5132] transition-colors">
                <pillar.icon className="w-7 h-7 text-[#0f5132] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-[#062c15] mb-3">
                {pillar.title}
              </h3>
              <p className="text-[#4a7c5f] leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
