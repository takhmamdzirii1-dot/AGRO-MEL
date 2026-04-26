import { motion } from 'framer-motion';
import { Sprout, Cog, ClipboardCheck, PackageCheck, Truck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const icons = [
  <Sprout className="w-6 h-6" />,
  <Cog className="w-6 h-6" />,
  <ClipboardCheck className="w-6 h-6" />,
  <PackageCheck className="w-6 h-6" />,
  <Truck className="w-6 h-6" />,
];

const stepColors = [
  'text-brand-soft-green border-brand-soft-green/30 bg-brand-soft-green/10',
  'text-brand-honey border-brand-honey/30 bg-brand-honey/10',
  'text-green-400 border-green-400/30 bg-green-400/10',
  'text-brand-gold border-brand-gold/30 bg-brand-gold/10',
  'text-brand-beige border-brand-beige/30 bg-brand-beige/10',
];

const ProductionProcess = () => {
  const { t, language } = useLanguage();

  return (
    <section id="process" className="py-28 section-bg-alt relative overflow-hidden">
      <div className="section-divider absolute top-0 left-0 w-full" />
      
      {/* Background accents */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-brand-green/6 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-brand-honey/4 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-honey uppercase tracking-[0.3em] text-sm font-semibold mb-4"
          >
            {t.process.label}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-serif font-bold text-white"
          >
            {t.process.title} <span className="italic font-light text-gradient-gold">{t.process.titleHighlight}</span>
          </motion.h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line - desktop only */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-y-1/2" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
            {t.process.steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="relative"
              >
                {/* Step number */}
                <div className="flex items-center gap-3 mb-4 lg:justify-center">
                  <div className={`w-12 h-12 rounded-xl border flex items-center justify-center ${stepColors[idx]} transition-all duration-300`}>
                    {icons[idx]}
                  </div>
                </div>

                {/* Step card */}
                <div className="glass-card rounded-2xl p-6 text-center transition-all duration-300 hover:bg-white/6 group">
                  <div className="text-[10px] text-brand-honey/60 uppercase tracking-widest mb-3 font-semibold">
                    {String(idx + 1).padStart(2, '0')}
                  </div>
                  <h3 className="text-base font-serif font-bold text-white mb-3 group-hover:text-brand-cream transition-colors leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductionProcess;
