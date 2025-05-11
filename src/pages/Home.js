import React from 'react';
import HeroSection from '../components/HeroSection';
import PhilosophySection from '../components/PhilosophySection';
import WhyLoveUs from '../components/WhyLoveUs';
import FavoriteProducts from '../components/FavoriteProducts'; // ✅ saktë
import TestimonialsSection from '../components/TestimonialsSection';
import CTASection from '../components/CTASection';
import SkinTypeSelector from '../components/SkinTypeSelector';
import SkinWellnessTips from '../components/SkinWellnessTips';
import SubscribeSection from '../components/SubscribeSection';
import Footer from '../components/Footer';





const Home = () => {
  return (
<>
  <HeroSection />
  <PhilosophySection />
  <FavoriteProducts /> 
  <WhyLoveUs />
  <SkinTypeSelector />  
  <CTASection />     
  <TestimonialsSection />
  <SkinWellnessTips />
  <SubscribeSection />
  <Footer />
</>
  );
};

export default Home;
