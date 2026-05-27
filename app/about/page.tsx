import { PageHeader } from "@/components/shared/page-header"
import { Target, Eye, Award, Heart, Users, Lightbulb, BookOpen } from "lucide-react"

const coreValues = [
  { icon: Award, label: "Excellence", description: "Striving for the highest standards in all we do" },
  { icon: Heart, label: "Integrity", description: "Acting with honesty and strong moral principles" },
  { icon: Users, label: "Community", description: "Fostering a supportive and inclusive environment" },
  { icon: Lightbulb, label: "Innovation", description: "Embracing new ideas and creative solutions" },
]

export default function AboutPage() {
  return (
    <>
      <PageHeader 
        title="About Hilltop Education"
        description="Established in 2001, Hilltop Education has been at the forefront of academic excellence, nurturing generations of future leaders through innovative teaching and holistic development."
      />

      {/* Our Story Section */}
      <section className="py-20 bg-[#f4f9f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-[#062c15]">Our Story</h2>
              <div className="space-y-4 text-[#4a7c5f] leading-relaxed">
                <p>
                  Hilltop Education was founded in 2001 with a vision to create an educational institution 
                  that goes beyond traditional teaching methods. Our founders believed that every student 
                  has unique potential waiting to be discovered and nurtured.
                </p>
                <p>
                  Over the past two decades, we have grown from a small institution with just 50 students 
                  to a thriving educational community of over 5,000 students. Our journey has been marked 
                  by continuous innovation, unwavering commitment to quality, and a deep dedication to 
                  our students&apos; success.
                </p>
                <p>
                  Today, Hilltop Education stands as a beacon of academic excellence, recognized for our 
                  comprehensive curriculum, state-of-the-art facilities, and most importantly, the 
                  achievements of our students who have gone on to become leaders in various fields 
                  across the globe.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-[#0f5132] rounded-2xl transform translate-x-4 translate-y-4"></div>
              <div className="relative aspect-[4/3] bg-[#e8f5ed] rounded-2xl overflow-hidden border border-[#d1e7d8] flex items-center justify-center">
                <div className="text-center p-8">
                  <BookOpen className="w-16 h-16 text-[#0f5132] mx-auto mb-4" />
                  <p className="text-[#4a7c5f] font-medium">School Library</p>
                  <p className="text-sm text-[#4a7c5f]/70">Image Placeholder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission Card */}
            <div className="bg-[#f4f9f5] rounded-xl p-8 border border-[#d1e7d8]">
              <div className="w-14 h-14 bg-[#0f5132] rounded-xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#062c15] mb-4">Our Mission</h3>
              <p className="text-[#4a7c5f] leading-relaxed">
                To provide exceptional, holistic education that empowers students to develop 
                intellectually, emotionally, and socially. We are committed to fostering 
                critical thinking, creativity, and character development while preparing 
                students to become responsible global citizens and leaders of tomorrow.
              </p>
            </div>

            {/* Vision Card */}
            <div className="bg-[#f4f9f5] rounded-xl p-8 border border-[#d1e7d8]">
              <div className="w-14 h-14 bg-[#0f5132] rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#062c15] mb-4">Our Vision</h3>
              <p className="text-[#4a7c5f] leading-relaxed">
                To be a globally recognized institution of learning excellence, known for 
                producing innovative thinkers, ethical leaders, and compassionate individuals 
                who contribute positively to society. We envision a community where every 
                student realizes their full potential and is inspired to make a difference.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-[#f4f9f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-[#062c15] mb-4">Our Core Values</h2>
            <p className="text-[#4a7c5f] max-w-2xl mx-auto">
              These fundamental values guide everything we do at Hilltop Education
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 text-center border border-[#d1e7d8] hover:shadow-md hover:border-[#7dd3a8] transition-all"
              >
                <div className="w-16 h-16 bg-[#e8f5ed] rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-[#0f5132]" />
                </div>
                <h3 className="text-lg font-semibold text-[#062c15] mb-2">{value.label}</h3>
                <p className="text-sm text-[#4a7c5f]">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
