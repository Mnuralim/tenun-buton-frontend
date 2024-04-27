import WhyUs from '@/components/landing-page/why-us'
import BestSeller from '@/components/landing-page/best-seller'
import AboutUs from '@/components/landing-page/about-us'
import Testimonial from '@/components/landing-page/testimonial'
import HomeSection from '@/components/landing-page/home'

export default function Home() {
  return (
    <div className="lg:mt-44">
      <HomeSection />
      <WhyUs />
      <BestSeller />
      <AboutUs />
      <Testimonial />
    </div>
  )
}
