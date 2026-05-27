import { PageHeader } from "@/components/shared/page-header"
import { BookOpen, Calculator, FlaskConical, Globe, Palette, Music, Rocket, Cpu, Languages, HeartHandshake } from "lucide-react"

const departments = [
  {
    icon: BookOpen,
    title: "Language Arts",
    description: "Develop strong reading, writing, and communication skills through comprehensive literature and composition programs.",
    courses: ["English Literature", "Creative Writing", "Public Speaking", "Journalism"]
  },
  {
    icon: Calculator,
    title: "Mathematics",
    description: "Build strong analytical and problem-solving skills through our rigorous mathematics curriculum.",
    courses: ["Algebra", "Geometry", "Calculus", "Statistics"]
  },
  {
    icon: FlaskConical,
    title: "Sciences",
    description: "Explore the natural world through hands-on experiments and inquiry-based learning approaches.",
    courses: ["Biology", "Chemistry", "Physics", "Environmental Science"]
  },
  {
    icon: Globe,
    title: "Social Studies",
    description: "Understand human society, history, and global perspectives through engaging coursework.",
    courses: ["World History", "Geography", "Economics", "Civics"]
  },
  {
    icon: Palette,
    title: "Arts",
    description: "Express creativity and develop artistic skills through diverse visual and performing arts programs.",
    courses: ["Drawing & Painting", "Sculpture", "Drama", "Photography"]
  },
  {
    icon: Music,
    title: "Music",
    description: "Discover musical talents through instrumental, vocal, and music theory instruction.",
    courses: ["Band", "Choir", "Music Theory", "Orchestra"]
  },
]

const specialPrograms = [
  {
    icon: Rocket,
    title: "Advanced Placement (AP)",
    description: "College-level courses that challenge academically motivated students and offer the opportunity to earn college credit while still in high school.",
    features: ["College-level curriculum", "AP exam preparation", "GPA boost", "College credit potential"]
  },
  {
    icon: Cpu,
    title: "STEM Excellence",
    description: "Integrated science, technology, engineering, and mathematics program featuring hands-on projects, robotics, coding, and real-world problem solving.",
    features: ["Robotics lab access", "Coding bootcamps", "Science fair participation", "Industry partnerships"]
  },
  {
    icon: Languages,
    title: "English Language Learners (ELL)",
    description: "Dedicated support program for non-native English speakers, providing intensive language instruction while maintaining academic progress.",
    features: ["Personalized instruction", "Cultural integration", "Academic support", "Language assessment"]
  },
  {
    icon: HeartHandshake,
    title: "Special Education",
    description: "Comprehensive support services ensuring every student receives the individualized attention and accommodations needed to succeed.",
    features: ["IEP development", "Resource support", "Adaptive technology", "Inclusive classrooms"]
  },
]

export default function AcademicsPage() {
  return (
    <>
      <PageHeader 
        title="Academic Programs"
        description="Our comprehensive curriculum is designed to challenge, inspire, and prepare students for success in higher education and beyond."
      />

      {/* Departments Grid */}
      <section className="py-20 bg-[#f4f9f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-[#062c15] mb-4">Academic Departments</h2>
            <p className="text-[#4a7c5f] max-w-2xl mx-auto">
              Explore our diverse range of academic departments, each committed to excellence in education
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 border border-[#d1e7d8] hover:shadow-md hover:border-[#7dd3a8] transition-all"
              >
                <div className="w-12 h-12 bg-[#e8f5ed] rounded-lg flex items-center justify-center mb-4">
                  <dept.icon className="w-6 h-6 text-[#0f5132]" />
                </div>
                <h3 className="text-xl font-semibold text-[#062c15] mb-2">{dept.title}</h3>
                <p className="text-sm text-[#4a7c5f] mb-4 leading-relaxed">{dept.description}</p>
                <div>
                  <p className="text-xs font-semibold text-[#062c15] uppercase tracking-wide mb-2">Key Courses</p>
                  <ul className="space-y-1">
                    {dept.courses.map((course, i) => (
                      <li key={i} className="text-sm text-[#4a7c5f] flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-[#7dd3a8] rounded-full"></span>
                        {course}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Programs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-[#062c15] mb-4">Special Programs</h2>
            <p className="text-[#4a7c5f] max-w-2xl mx-auto">
              Specialized programs designed to meet the unique needs and aspirations of every student
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {specialPrograms.map((program, index) => (
              <div 
                key={index}
                className="bg-[#f4f9f5] rounded-xl p-8 border border-[#d1e7d8]"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-[#0f5132] rounded-xl flex items-center justify-center shrink-0">
                    <program.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#062c15] mb-2">{program.title}</h3>
                    <p className="text-sm text-[#4a7c5f] mb-4 leading-relaxed">{program.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {program.features.map((feature, i) => (
                        <span 
                          key={i}
                          className="px-3 py-1 bg-white text-xs font-medium text-[#0f5132] rounded-full border border-[#d1e7d8]"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
