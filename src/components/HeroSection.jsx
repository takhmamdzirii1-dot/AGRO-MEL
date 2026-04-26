import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ExplodedJar = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Animation values for spreading elements apart on scroll
  const lidY = useTransform(scrollYProgress, [0.3, 0.6], [0, -120]);
  const sealY = useTransform(scrollYProgress, [0.3, 0.6], [0, -70]);
  const labelZ = useTransform(scrollYProgress, [0.3, 0.6], [0, 50]);
  const labelScale = useTransform(scrollYProgress, [0.3, 0.6], [1, 1.1]);
  const jamY = useTransform(scrollYProgress, [0.3, 0.6], [0, 40]);
  const glassY = useTransform(scrollYProgress, [0.3, 0.6], [0, 20]);
  const particlesY = useTransform(scrollYProgress, [0.3, 0.6], [0, -200]);
  const particlesOpacity = useTransform(scrollYProgress, [0.3, 0.5, 0.6], [0, 1, 1]);

  return (
    <div ref={containerRef} className="relative w-full h-[600px] flex items-center justify-center perspective-[1000px]">
      <motion.div 
        className="relative w-64 h-80"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        {/* Floating Particles (Natural ingredients, seeds, etc.) */}
        <motion.div 
          style={{ y: particlesY, opacity: particlesOpacity }}
          className="absolute inset-0 z-0 pointer-events-none"
        >
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute rounded-full ${i % 3 === 0 ? 'bg-brand-red' : i % 2 === 0 ? 'bg-brand-soft-green' : 'bg-brand-honey'}`}
              style={{
                width: Math.random() * 8 + 4,
                height: Math.random() * 8 + 4,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                x: [0, Math.random() * 20 - 10, 0],
                rotate: [0, 360]
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 2
              }}
            />
          ))}
        </motion.div>

        {/* Jar Base / Glass Back */}
        <motion.div 
          style={{ y: glassY }}
          className="absolute bottom-0 left-4 right-4 h-64 bg-white/5 backdrop-blur-md rounded-[2rem] border border-white/20 shadow-[inset_0_0_40px_rgba(255,255,255,0.1)] z-10"
        />

        {/* Jam Content Layer */}
        <motion.div 
          style={{ y: jamY }}
          className="absolute bottom-4 left-6 right-6 h-56 bg-gradient-to-b from-brand-red/80 to-red-950/90 rounded-[1.5rem] overflow-hidden z-20 shadow-[0_0_30px_rgba(201,42,42,0.3)]"
        >
          {/* Strawberry pieces texture */}
          <div className="absolute inset-0 opacity-40" style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, #7f1d1d 2px, transparent 3px)`,
            backgroundSize: '20px 20px'
          }} />
        </motion.div>

        {/* Front Glass Reflection */}
        <motion.div 
          style={{ y: glassY }}
          className="absolute bottom-0 left-4 right-4 h-64 rounded-[2rem] bg-gradient-to-tr from-white/5 via-transparent to-white/20 z-30 pointer-events-none"
        />

        {/* Cream Label */}
        <motion.div 
          style={{ z: labelZ, scale: labelScale }}
          className="absolute top-32 left-0 right-0 h-28 bg-brand-cream rounded-lg shadow-2xl z-40 flex flex-col items-center justify-center border-y-2 border-brand-honey/30 px-4"
        >
          <div className="text-brand-green font-serif font-bold text-xl tracking-widest uppercase">AGRO MEL</div>
          <div className="text-brand-red text-[10px] uppercase tracking-[0.2em] mt-1 font-semibold">Premium</div>
          <div className="w-12 h-[1px] bg-brand-honey/50 my-1.5" />
          <div className="text-brand-black/70 text-xs italic font-serif">Strawberry Jam</div>
        </motion.div>

        {/* Quality Seal / Tag */}
        <motion.div
           style={{ z: labelZ, scale: labelScale }}
           className="absolute top-28 right-2 w-12 h-12 bg-brand-honey rounded-full flex items-center justify-center shadow-lg border border-yellow-200 z-50 transform rotate-12"
        >
          <div className="text-brand-black text-[8px] font-bold uppercase text-center leading-tight">100%<br/>Natural</div>
        </motion.div>

        {/* Freshness Seal Layer */}
        <motion.div 
          style={{ y: sealY }}
          className="absolute top-12 left-8 right-8 h-8 bg-brand-black border border-white/10 rounded-t-lg z-20"
        >
          <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.1)_50%,transparent_100%)]" />
        </motion.div>

        {/* Jar Lid */}
        <motion.div 
          style={{ y: lidY }}
          className="absolute top-8 left-6 right-6 h-10 bg-gradient-to-b from-brand-honey to-yellow-700 rounded-lg shadow-xl z-30 border border-yellow-300/50"
        >
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `repeating-linear-gradient(90deg, transparent, transparent 2px, #000 2px, #000 4px)`
          }} />
          <div className="absolute top-0 left-0 right-0 h-1 bg-yellow-200/50 rounded-t-lg" />
        </motion.div>

      </motion.div>
    </div>
  );
};

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-brand-black">
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
                Experience the true taste of nature.
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

          <div className="hidden lg:block relative h-full">
            <ExplodedJar />
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
        <div className="text-xs uppercase tracking-[0.3em] mb-2 font-light">Scroll to Explore</div>
        <motion.div 
          className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"
          animate={{ height: [0, 48, 0], y: [0, 24, 48] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
