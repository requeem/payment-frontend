import { FaqSection } from '@/src/components/landing/FaqSection'
import { FeaturesSection } from '@/src/components/landing/FeaturesSection'
import { HeroSection } from '@/src/components/landing/HeroSection'
import { PricingSection } from '@/src/components/landing/pricing/pricing-section'
import { SiteFooter } from '@/src/components/landing/SiteFooter'
import { SiteHeader } from '@/src/components/landing/SiteHeader'

export default function Home() {
   return (
      <div className='min-h-screen bg-background text-foreground'>
         <SiteHeader />
         <main>
            <HeroSection />
            <FeaturesSection />
            <PricingSection />
            <FaqSection />
         </main>
         <SiteFooter />
      </div>
   )
}
