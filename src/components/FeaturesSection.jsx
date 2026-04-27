import { motion } from 'framer-motion';
import { Award, Factory, Wrench, ShieldCheck, Package, Clock } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const icons = [
  <Award className="w-7 h-7" />,
  <Factory className="w-7 h-7" />,
  <Wrench className="w-7 h-7" />,
  <ShieldCheck className="w-7 h-7" />,
  <Package className="w-7 h-7" />,
  <Clock className="w-7 h-7" />,
];

const iconColors = [
  'text-brand-primary',
  'text-brand-accent',
  'text-brand-primary',
  'text-brand-accent',
  'text-brand-primary',
  'text-brand-accent',
];

const FeaturesSection = () => {
  const { t } = useLanguage();

  return (
    <section id="features" className="py-24 md:py-32 bg-brand-bg relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-brand-primary/5 rounded-full blur-[120px] pointer-events-none -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-brand-accent/5 rounded-full blur-[100px] pointer-events-none translate-x-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-primary uppercase tracking-[0.2em] text-xs font-bold mb-4"
          >
            {t.features.label}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-sans font-bold text-brand-text"
          >
            {t.features.title} <span className="text-brand-accent">{t.features.titleHighlight}</span>
          </motion.h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.features.items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="glass-panel p-8 group cursor-default hover:shadow-[0_30px_60px_rgba(43,33,24,0.12)] hover:-translate-y-2 transition-all duration-500"
            >
              <div className={`mb-8 w-16 h-16 rounded-full glass-panel flex items-center justify-center ${iconColors[idx]} border border-brand-white-border shadow-sm transition-all duration-300 group-hover:scale-110`}>
                {icons[idx]}
              </div>
              <h3 className="text-xl font-sans font-bold text-brand-text mb-4 group-hover:text-brand-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-brand-muted text-base leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
