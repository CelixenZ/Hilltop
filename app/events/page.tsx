import { PageHeader } from "@/components/shared/page-header"
import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const upcomingEvents = [
  {
    id: 1,
    title: "Annual Science Fair 2026",
    date: "June 15, 2026",
    time: "9:00 AM - 4:00 PM",
    location: "Main Auditorium",
    category: "Academic",
    description: "Showcase of student science projects and innovations across all grade levels."
  },
  {
    id: 2,
    title: "Parent-Teacher Conference",
    date: "June 20, 2026",
    time: "2:00 PM - 6:00 PM",
    location: "Individual Classrooms",
    category: "Meeting",
    description: "Meet with teachers to discuss student progress and academic goals."
  },
  {
    id: 3,
    title: "Summer Sports Camp Registration",
    date: "June 25, 2026",
    time: "10:00 AM - 2:00 PM",
    location: "Sports Complex",
    category: "Sports",
    description: "Register for our exciting summer sports programs including basketball, soccer, and swimming."
  },
  {
    id: 4,
    title: "Graduation Ceremony",
    date: "July 10, 2026",
    time: "6:00 PM - 9:00 PM",
    location: "Grand Auditorium",
    category: "Ceremony",
    description: "Celebrating our graduating class of 2026 and their achievements."
  },
]

export default function EventsPage() {
  return (
    <>
      <PageHeader 
        title="Events"
        description="Stay connected with school activities, programs, and important dates throughout the academic year."
      />

      {/* Upcoming Events */}
      <section className="py-16 bg-[#f4f9f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#062c15] mb-8">Upcoming Events</h2>
          
          <div className="space-y-6">
            {upcomingEvents.map((event) => (
              <div 
                key={event.id}
                className="bg-white rounded-xl p-6 border border-[#d1e7d8] hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  {/* Date Box */}
                  <div className="w-20 h-20 bg-[#0f5132] rounded-xl flex flex-col items-center justify-center text-white shrink-0">
                    <span className="text-2xl font-bold">{event.date.split(" ")[1].replace(",", "")}</span>
                    <span className="text-sm">{event.date.split(" ")[0]}</span>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <span className="inline-block px-2.5 py-0.5 bg-[#e8f5ed] text-[#0f5132] text-xs font-medium rounded-full mb-2">
                          {event.category}
                        </span>
                        <h3 className="text-xl font-semibold text-[#062c15] mb-2">{event.title}</h3>
                        <p className="text-[#4a7c5f] text-sm mb-3">{event.description}</p>
                        <div className="flex flex-wrap gap-4 text-sm text-[#4a7c5f]">
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4 text-[#7dd3a8]" />
                            {event.time}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4 text-[#7dd3a8]" />
                            {event.location}
                          </span>
                        </div>
                      </div>
                      <Button variant="outline" className="hidden md:flex border-[#0f5132] text-[#0f5132] hover:bg-[#0f5132] hover:text-white">
                        Details
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calendar CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#062c15] rounded-2xl p-8 md:p-12 text-center">
            <Calendar className="w-12 h-12 text-[#7dd3a8] mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              View Full Academic Calendar
            </h2>
            <p className="text-gray-300 mb-6 max-w-xl mx-auto">
              Access our complete academic calendar with all important dates, holidays, exam schedules, and school events.
            </p>
            <Button asChild className="bg-[#0f5132] hover:bg-[#7dd3a8] hover:text-[#062c15] text-white">
              <Link href="#">
                Download Calendar
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
