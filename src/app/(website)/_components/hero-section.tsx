import React from 'react'
import Link from 'next/link';

const HeroSection = () => {
  return (
    <div>
      <div 
        style={{ backgroundImage: `url("/assets/images/hero.png")` }} 
        className="min-h-screen w-full bg-cover bg-no-repeat bg-center relative"
      >
        
        <Link 
          href="/services" 
          className="absolute bottom-36 md:bottom-20 lg:bottom-32 left-1/2 -translate-x-1/2"
        >
          <button className="h-[44px] md:h-[50px] lg:h-[56px] bg-[#E7E7E7] hover:bg-primary hover:text-white ease-in-out duration-200 transition-all py-3 px-10 lg:px-16 rounded-full text-base md:text-lg font-normal leading-[120%] text-primary">
            Buy Now
          </button>
        </Link>

      </div>
    </div>
  )
}

export default HeroSection
