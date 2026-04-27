import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 md:py-32 bg-brand-surface relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-primary/5 blur-[120px] pointer-events-none transform translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-brand-accent/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[450px] lg:h-[550px] rounded-[40px] overflow-hidden shadow-2xl"
          >
            {/* Factory Image Placeholder - Warm and Clean */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/20 via-brand-surface to-brand-accent/10" />
            
            {/* Visual representation of a clean factory/morning vibe */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <div className="w-64 h-64 bg-brand-accent-soft/20 rounded-full blur-3xl" />
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="text-center p-12 glass-panel-strong shadow-[0_30px_60px_rgba(43,33,24,0.12)]">
                      <span className="text-6xl mb-4 block drop-shadow-md">☀️</span>
                      <h4 className="text-brand-text font-bold text-2xl uppercase tracking-widest drop-shadow-sm">{t.about.est}</h4>
                   </div>
                </div>
              </div>
            </div>
          </motion.div>

          <div>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-brand-primary uppercase tracking-[0.2em] text-xs font-bold mb-4 bg-brand-primary/10 inline-block px-3 py-1 rounded-full"
            >
              {t.about.label}
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-sans font-bold text-brand-text mb-8 leading-tight"
            >
              {t.about.titleLine1}<br />
              <span className="text-brand-accent">{t.about.titleLine2}</span>
            </motion.h2>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6 text-brand-muted text-lg leading-relaxed"
            >
              <p>{t.about.p1}</p>
              <p className="font-medium text-brand-text/80">{t.about.p2}</p>
              <p>{t.about.p3}</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-12 grid grid-cols-3 gap-8 pt-10 border-t border-brand-border"
            >
              <div>
                <h4 className="text-3xl font-bold text-brand-primary mb-1">100<span className="text-brand-accent">%</span></h4>
                <p className="text-xs font-bold uppercase tracking-widest text-brand-muted">{t.about.stat1Label}</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-brand-primary mb-1">2024</h4>
                <p className="text-xs font-bold uppercase tracking-widest text-brand-muted">Launch Year</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-brand-primary mb-1">24<span className="text-brand-accent">/7</span></h4>
                <p className="text-xs font-bold uppercase tracking-widest text-brand-muted">{t.about.stat3Label}</p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
