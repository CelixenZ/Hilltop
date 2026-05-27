import { HeroSection } from "@/components/home/hero-section"
import { CorePillars } from "@/components/home/core-pillars"
import { LatestNews } from "@/components/home/latest-news"
import { CommunityCTA } from "@/components/home/community-cta"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CorePillars />
      <LatestNews />
      <CommunityCTA />
    </>
  )
}
