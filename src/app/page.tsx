import { SiteHeader } from '@/src/components/landing/SiteHeader'
import { HeroSection } from '@/src/components/landing/HeroSection'
import { FeaturesSection } from '@/src/components/landing/FeaturesSection'
import { PricingSection } from '@/src/components/landing/PricingSection'
import { FaqSection } from '@/src/components/landing/FaqSection'
import { SiteFooter } from '@/src/components/landing/SiteFooter'

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
