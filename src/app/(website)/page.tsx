import React from 'react'
import HeroSection from './_components/hero-section'
import OurPartners from './_components/our-partners'
import { FaqSection } from './_components/faq-section'
import WhyDataMatters from './_components/why-data-matters'
import WhyYouNeedAProfile from './_components/why-you-need-profile'
import WhyWeAreUnique from './_components/why-we-are-unique'
import HowOurAnalytics from './_components/how-our-analytics'

const HomePage = () => {
    return (
        <div>
            <>
                <HeroSection />
                <HowOurAnalytics/>
                <WhyWeAreUnique/>
                <WhyYouNeedAProfile/>
                <WhyDataMatters/>
                <OurPartners/>
                <FaqSection />
            </>
        </div>
    )
}

export default HomePage