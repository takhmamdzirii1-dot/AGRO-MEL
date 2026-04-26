import { useRef } from 'react';
import { motion } from 'framer-motion';
import ImageSequence from './ImageSequence';

const HeroSection = () => {
  const sectionRef = useRef(null);

  return (
    <section 
      ref={sectionRef} 
      className="relative h-[300vh] bg-brand-black"
    >
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-green/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-red/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="flex flex-col space-y-8"
            >
              <div>
                <motion.h1 
                  className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Nature,<br />
                  <span className="text-gradient-gold">Perfected.</span>
                </motion.h1>
                <motion.p 
                  className="mt-6 text-xl text-gray-400 max-w-lg leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  Premium agro-food products crafted with unparalleled quality, freshness, and trust. 
                  Experience the true taste of nature through our advanced manufacturing.
                </motion.p>
              </div>

              <motion.div 
                className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <a href="#products" className="px-8 py-4 bg-brand-honey hover:bg-yellow-500 text-brand-black font-semibold uppercase tracking-widest text-sm text-center transition-all duration-300 rounded-full shadow-[0_0_20px_rgba(217,154,43,0.3)] hover:shadow-[0_0_30px_rgba(217,154,43,0.5)]">
                  Explore Products
                </a>
                <a href="#contact" className="px-8 py-4 bg-transparent border border-white/20 hover:border-white/50 text-white font-semibold uppercase tracking-widest text-sm text-center transition-all duration-300 rounded-full">
                  Contact Factory
                </a>
              </motion.div>
            </motion.div>

            <div className="relative h-[500px] lg:h-[700px] flex items-center justify-center">
              <ImageSequence containerRef={sectionRef} />
              
              {/* Optional: Add a subtle overlay or shadow to the sequence for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/40 to-transparent pointer-events-none" />
            </div>

          </div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <div className="text-xs uppercase tracking-[0.3em] mb-2 font-light">Scroll to Animate</div>
          <motion.div 
            className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"
            animate={{ height: [0, 48, 0], y: [0, 24, 48] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>
      </div>

      {/* Spacer to allow for scrolling */}
      <div className="h-[200vh] pointer-events-none" />
    </section>
  );
};

export default HeroSection;
