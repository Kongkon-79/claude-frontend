import React from 'react'
import OurGrowthStory from './_components/our-growth-story'
import MeetOurCertified from './_components/meet-our-certified'
import AnalyticSoccer from './_components/analytic-soccer'
import OurPromiseToYou from './_components/our-promise-to-you'
import ActivateYourProfile from '../contact-us/_components/activate-your-profile'

const AboutUsPage = () => {
  return (
    <div>
      <AnalyticSoccer/>
      <OurGrowthStory/>
      <ActivateYourProfile/>
      <MeetOurCertified/>
      <OurPromiseToYou/>
    </div>
  )
}

export default AboutUsPage