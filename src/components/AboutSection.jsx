import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-28 section-bg relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-green/8 blur-[120px] pointer-events-none transform translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-brand-honey/4 blur-[100px] pointer-events-none" />
      <div className="section-divider absolute top-0 left-0 w-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] lg:h-[600px] rounded-3xl overflow-hidden glass-card"
          >
            {/* Factory Image Placeholder */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-black via-brand-dark to-brand-green/20" />
            
            {/* Simulated factory structure with CSS shapes */}
            <div className="absolute inset-0 flex items-end justify-center pb-20 opacity-20">
              <div className="w-24 h-48 bg-white/10 mx-1.5 rounded-t-sm" />
              <div className="w-36 h-72 bg-white/15 mx-1.5 rounded-t-sm" />
              <div className="w-20 h-40 bg-white/10 mx-1.5 rounded-t-sm" />
              <div className="w-28 h-56 bg-white/12 mx-1.5 rounded-t-sm" />
            </div>

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto border border-white/15 rounded-full flex items-center justify-center backdrop-blur-md mb-6 bg-white/5">
                  <span className="font-serif text-2xl text-white font-bold">AM</span>
                </div>
                <h3 className="text-white/40 uppercase tracking-[0.5em] text-sm">{t.about.est}</h3>
              </div>
            </div>
          </motion.div>

          <div>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-brand-honey uppercase tracking-[0.3em] text-sm font-semibold mb-4"
            >
              {t.about.label}
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-serif font-bold text-white mb-8"
            >
              {t.about.titleLine1}<br />
              <span className="italic font-light text-gray-400">{t.about.titleLine2}</span>
            </motion.h2>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-5 text-gray-400 text-base leading-relaxed"
            >
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
              <p>{t.about.p3}</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-10 grid grid-cols-3 gap-6 pt-10 border-t border-white/8"
            >
              <div>
                <h4 className="text-3xl font-serif font-bold text-white mb-2">100<span className="text-brand-honey">%</span></h4>
                <p className="text-xs uppercase tracking-widest text-gray-500">{t.about.stat1Label}</p>
              </div>
              <div>
                <h4 className="text-3xl font-serif font-bold text-white mb-2">50<span className="text-brand-honey">+</span></h4>
                <p className="text-xs uppercase tracking-widest text-gray-500">{t.about.stat2Label}</p>
              </div>
              <div>
                <h4 className="text-3xl font-serif font-bold text-white mb-2">24<span className="text-brand-honey">/7</span></h4>
                <p className="text-xs uppercase tracking-widest text-gray-500">{t.about.stat3Label}</p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
