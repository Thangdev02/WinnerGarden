import React from 'react';
import HeroSection from '../components/home/HeroSection';
import AboutSection from '../components/home/AboutSection';
import BestSellerSection from '../components/home/BestSellerSection';
import WherePlantsSection from '../components/home/WherePlantsSection';

function HomePage() {
  return (
    <div className='min-h-screen' >
      <HeroSection />
      <AboutSection/>
      <BestSellerSection />
      <WherePlantsSection/>
      <div className=" py-20" style={{backgroundColor:'#061412'}}>
        <div className="container mx-auto px-4">
          <video className="w-full h-auto rounded-2xl shadow-2xl"  autoPlay muted loop>
            <source src="/assets/videos/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
}

export default HomePage;