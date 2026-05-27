import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen, Users, Lightbulb } from "lucide-react"

export function HeroSection() {
  return (
    <section className="bg-[#062c15] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="inline-block px-4 py-1.5 bg-[#0f5132] text-[#7dd3a8] text-sm font-medium rounded-full">
                Empowering Future Leaders
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-balance">
                Welcome to Hilltop
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed max-w-xl">
                We provide innovative teaching methods and a nurturing environment that inspires students 
                to achieve their full potential. Join us in shaping the leaders of tomorrow through 
                academic excellence and holistic development.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button 
                asChild
                size="lg"
                className="bg-[#0f5132] hover:bg-[#7dd3a8] hover:text-[#062c15] text-white font-semibold px-8"
              >
                <Link href="/contact">
                  Enroll Now
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button 
                asChild
                variant="outline" 
                size="lg"
                className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-[#062c15] font-semibold px-8"
              >
                <Link href="/about">Learn More</Link>
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-8 pt-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#0f5132] rounded-full flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-[#7dd3a8]" />
                </div>
                <div>
                  <p className="text-2xl font-bold">25+</p>
                  <p className="text-sm text-gray-400">Years Excellence</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#0f5132] rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-[#7dd3a8]" />
                </div>
                <div>
                  <p className="text-2xl font-bold">5000+</p>
                  <p className="text-sm text-gray-400">Students</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#0f5132] rounded-full flex items-center justify-center">
                  <Lightbulb className="w-6 h-6 text-[#7dd3a8]" />
                </div>
                <div>
                  <p className="text-2xl font-bold">98%</p>
                  <p className="text-sm text-gray-400">Success Rate</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-full max-w-lg">
              <div className="absolute inset-0 bg-[#0f5132] rounded-3xl transform rotate-3"></div>
              <div className="relative bg-gradient-to-br from-[#0f5132] to-[#062c15] border border-[#0f5132] rounded-3xl overflow-hidden">
                <Image
                  src="/images/hero-session.jpg"
                  alt="ELT Education Hero"
                  width={500}
                  height={500}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
