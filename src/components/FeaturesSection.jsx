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
  'text-brand-honey',
  'text-brand-soft-green',
  'text-brand-gold',
  'text-green-400',
  'text-brand-beige',
  'text-brand-light-gold',
];

const FeaturesSection = () => {
  const { t } = useLanguage();

  return (
    <section id="features" className="py-28 section-bg-alt relative overflow-hidden">
      <div className="section-divider absolute top-0 left-0 w-full" />
      
      {/* Background decorations */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-brand-green/8 rounded-full blur-[120px] pointer-events-none -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-brand-honey/5 rounded-full blur-[100px] pointer-events-none translate-x-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-honey uppercase tracking-[0.3em] text-sm font-semibold mb-4"
          >
            {t.features.label}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-serif font-bold text-white"
          >
            {t.features.title} <span className="text-gradient-gold italic font-light">{t.features.titleHighlight}</span>
          </motion.h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.features.items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card glass-card-hover rounded-2xl p-8 transition-all duration-500 group cursor-default"
            >
              <div className={`mb-6 w-14 h-14 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center ${iconColors[idx]} group-hover:bg-white/8 transition-all duration-300`}>
                {icons[idx]}
              </div>
              <h3 className="text-lg font-serif font-bold text-white mb-3 group-hover:text-brand-cream transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
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
