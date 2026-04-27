import { motion } from 'framer-motion';
import { Leaf, Settings, ShieldCheck, Package, Award } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const icons = [
  <Leaf className="w-7 h-7 text-brand-primary" />,
  <Settings className="w-7 h-7 text-brand-accent" />,
  <ShieldCheck className="w-7 h-7 text-brand-primary" />,
  <Package className="w-7 h-7 text-brand-accent" />,
  <Award className="w-7 h-7 text-brand-primary" />,
];

const FactoryQuality = () => {
  const { t } = useLanguage();

  return (
    <section id="quality" className="py-24 md:py-32 bg-brand-surface/80 relative overflow-hidden">
      <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-brand-primary/5 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-16">
          <div>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-brand-primary uppercase tracking-[0.2em] text-xs font-bold mb-4 bg-brand-primary/10 inline-block px-3 py-1 rounded-full"
            >
              {t.quality.label}
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-sans font-bold text-brand-text mb-8 leading-tight"
            >
              {t.quality.title} <span className="text-brand-accent">{t.quality.titleHighlight}</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-brand-muted text-lg leading-relaxed max-w-xl"
            >
              {t.quality.description}
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {t.quality.items.slice(0, 2).map((std, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + idx * 0.1 }}
                className="soft-card group hover:bg-white transition-all duration-300"
              >
                <div className="mb-6 w-14 h-14 rounded-2xl bg-brand-bg border border-brand-border flex items-center justify-center group-hover:scale-110 transition-transform">
                  {icons[idx]}
                </div>
                <h3 className="text-brand-text font-sans font-bold text-lg mb-3">{std.title}</h3>
                <p className="text-brand-muted text-sm leading-relaxed">{std.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.quality.items.slice(2).map((std, idx) => (
            <motion.div
              key={idx + 2}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + idx * 0.1 }}
              className="soft-card group hover:bg-white transition-all duration-300"
            >
              <div className="mb-6 w-14 h-14 rounded-2xl bg-brand-bg border border-brand-border flex items-center justify-center group-hover:scale-110 transition-transform">
                {icons[idx + 2]}
              </div>
              <h3 className="text-brand-text font-sans font-bold text-lg mb-3">{std.title}</h3>
              <p className="text-brand-muted text-sm leading-relaxed">{std.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FactoryQuality;
