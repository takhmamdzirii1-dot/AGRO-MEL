import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturedProducts from './components/FeaturedProducts';
import FactoryQuality from './components/FactoryQuality';
import AboutSection from './components/AboutSection';
import CategoriesSection from './components/CategoriesSection';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-brand-black text-brand-cream font-sans selection:bg-brand-honey selection:text-brand-black">
      <Navbar />
      
      <main>
        <HeroSection />
        <FeaturedProducts />
        <AboutSection />
        <FactoryQuality />
        <CategoriesSection />
        <ContactCTA />
      </main>

      <Footer />
    </div>
  );
}

export default App;
