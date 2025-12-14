import React from 'react'
import HeroSection from './_components/hero-section'
import OurPartners from './_components/our-partners'
import { FaqSection } from './_components/faq-section'

const HomePage = () => {
    return (
        <div>
            <>
                <HeroSection />
                <OurPartners/>
                <FaqSection />
            </>
        </div>
    )
}

export default HomePage