import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section 
      id="home"
      className="relative min-h-screen flex items-center bg-brand-bg pt-20 overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <img 
          src="/assets/hero-bg.png" 
          alt="Morning Wheat" 
          className="w-full h-full object-cover object-right opacity-90 mix-blend-multiply" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-bg via-brand-bg/80 to-transparent"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-20">
        <div className="max-w-3xl">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Brand tag / Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-8"
            >
              <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-xs font-bold uppercase tracking-[0.1em]">
                ✦ &nbsp; {t.hero.badge}
              </span>
            </motion.div>

            <motion.h1 
              className="text-5xl sm:text-6xl md:text-7xl font-sans font-bold text-brand-text leading-[1.1] mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.4 }}
            >
              {t.hero.titleLine1}<br />
              <span className="text-brand-accent">{t.hero.titleHighlight}</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-brand-muted max-w-xl leading-relaxed mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {t.hero.subtitle}
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <a href="#about" className="btn-primary">
                {t.hero.cta1}
              </a>
              <a href="#contact" className="btn-secondary">
                {t.hero.cta2}
              </a>
            </motion.div>
          </motion.div>

        </div>
      </div>
      
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/2 h-full bg-brand-accent-soft/10 blur-[120px] rounded-full z-0 pointer-events-none" />

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <div className="text-[11px] uppercase tracking-[0.2em] mb-3 font-semibold text-brand-muted">{t.hero.scrollHint}</div>
        <motion.div 
          className="w-[2px] h-8 bg-brand-accent/30 rounded-full overflow-hidden"
        >
          <motion.div 
            className="w-full bg-brand-accent"
            animate={{ height: ['0%', '100%', '0%'], y: ['0%', '0%', '100%'] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
