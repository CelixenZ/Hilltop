import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CommunityCTA() {
  return (
    <section className="py-20 bg-[#e8f5ed]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#062c15] mb-4">
            Ready to Join Our Community?
          </h2>
          <p className="text-[#4a7c5f] mb-8 leading-relaxed">
            Take the first step towards an exceptional educational journey. 
            Schedule a visit to explore our campus, meet our faculty, and discover 
            why hilltop Education is the right choice for your family.
          </p>
          <Button 
            asChild
            size="lg"
            className="bg-[#062c15] hover:bg-[#0f5132] text-white font-semibold px-10"
          >
            <Link href="/contact">
              Schedule a Visit
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
