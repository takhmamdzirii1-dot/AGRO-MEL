import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section 
      id="home"
      className="relative min-h-screen flex items-center"
    >
      {/* Dark overlay so text is readable over the 3D background */}
      <div className="absolute inset-0 bg-brand-black/50 pointer-events-none" />
      
      {/* Ambient glow effects */}
      <div className="absolute top-1/4 left-1/6 w-[500px] h-[500px] bg-brand-green/20 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/6 w-[400px] h-[400px] bg-brand-honey/8 rounded-full blur-[150px] pointer-events-none" />
      
      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-brand-black/90 to-transparent pointer-events-none z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 py-32">
        <div className="max-w-3xl">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Brand tag */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-8"
            >
              <span className="inline-flex items-center px-5 py-2 rounded-full glass-card text-brand-honey text-xs font-semibold uppercase tracking-[0.2em]">
                ✦ &nbsp; Agro Mel — Factory
              </span>
            </motion.div>

            <motion.h1 
              className="text-5xl sm:text-6xl md:text-8xl font-serif font-bold text-white leading-[1.05] mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.4 }}
            >
              {t.hero.titleLine1}<br />
              <span className="text-gradient-gold">{t.hero.titleLine2}</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-300/80 max-w-xl leading-relaxed mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {t.hero.subtitle}
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <a href="#showroom" className="btn-primary text-center">
                {t.hero.cta1}
              </a>
              <a href="#contact" className="btn-secondary text-center">
                {t.hero.cta2}
              </a>
            </motion.div>
          </motion.div>

        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <div className="text-[10px] uppercase tracking-[0.3em] mb-3 font-light text-gray-400">{t.hero.scrollHint}</div>
        <motion.div 
          className="w-[1px] h-10 bg-gradient-to-b from-brand-honey/60 to-transparent"
          animate={{ height: [0, 40, 0], y: [0, 20, 40] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
