import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import FeaturesSection from './components/FeaturesSection';
import FeaturedProducts from './components/FeaturedProducts';
import ProductionProcess from './components/ProductionProcess';
import ProductAnimation from './components/ProductAnimation';
import FactoryQuality from './components/FactoryQuality';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen text-brand-cream font-sans selection:bg-brand-honey/30 selection:text-white">
        <div className="relative z-10 bg-brand-bg">
          <Navbar />
          
          <main>
            <HeroSection />
            <AboutSection />
            <FeaturesSection />
            <FeaturedProducts />
            <ProductAnimation />
            <ProductionProcess />
            <FactoryQuality />
            <ContactCTA />
          </main>

          <Footer />
        </div>
      </div>
    </LanguageProvider>
  );
}

export default App;
