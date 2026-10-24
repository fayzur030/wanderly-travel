import { HeroBanner } from '@/components/home/hero-banner'
import { TestimonialsSection } from '@/components/home/testimonials-section'
import { WhyChooseSection } from '@/components/home/why-choose-section'
export default function Home() {
  return (
    <>
      <HeroBanner />
      <WhyChooseSection />
      <TestimonialsSection />
    </>
  )
}
