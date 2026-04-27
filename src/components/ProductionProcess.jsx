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
  'text-brand-primary border-brand-primary/20 bg-brand-primary/5',
  'text-brand-accent border-brand-accent/20 bg-brand-accent/5',
  'text-brand-primary border-brand-primary/20 bg-brand-primary/5',
  'text-brand-accent border-brand-accent/20 bg-brand-accent/5',
  'text-brand-primary border-brand-primary/20 bg-brand-primary/5',
];

const ProductionProcess = () => {
  const { t } = useLanguage();

  return (
    <section id="process" className="py-24 md:py-32 bg-brand-bg relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-brand-primary/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-brand-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-primary uppercase tracking-[0.2em] text-xs font-bold mb-4"
          >
            {t.process.label}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-sans font-bold text-brand-text"
          >
            {t.process.title} <span className="text-brand-accent">{t.process.titleHighlight}</span>
          </motion.h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line - desktop only */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-[1px] bg-brand-border/40 -translate-y-1/2" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
            {t.process.steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="relative"
              >
                {/* Step icon/number */}
                <div className="flex items-center gap-3 mb-6 lg:justify-center">
                  <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center ${stepColors[idx]} shadow-sm`}>
                    {icons[idx]}
                  </div>
                </div>

                {/* Step card */}
                <div className="bg-white border border-brand-border/60 rounded-[28px] p-8 text-center shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                  <div className="text-[11px] text-brand-accent font-bold uppercase tracking-widest mb-4">
                    Step {String(idx + 1).padStart(2, '0')}
                  </div>
                  <h3 className="text-lg font-sans font-bold text-brand-text mb-4 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-brand-muted text-sm leading-relaxed">
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
