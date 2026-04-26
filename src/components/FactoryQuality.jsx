import { motion } from 'framer-motion';
import { Leaf, Settings, ShieldCheck, Package, Award } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const icons = [
  <Leaf className="w-7 h-7 text-brand-soft-green" />,
  <Settings className="w-7 h-7 text-brand-honey" />,
  <ShieldCheck className="w-7 h-7 text-green-400" />,
  <Package className="w-7 h-7 text-brand-beige" />,
  <Award className="w-7 h-7 text-brand-gold" />,
];

const FactoryQuality = () => {
  const { t } = useLanguage();

  return (
    <section id="quality" className="py-28 section-bg relative overflow-hidden">
      <div className="section-divider absolute top-0 left-0 w-full" />
      <div className="absolute left-0 top-0 w-1/3 h-full bg-gradient-to-r from-brand-green/5 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-brand-soft-green uppercase tracking-[0.3em] text-sm font-semibold mb-4"
            >
              {t.quality.label}
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-serif font-bold text-white mb-6"
            >
              {t.quality.title} <span className="text-gradient-green italic font-light">{t.quality.titleHighlight}</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 text-base leading-relaxed max-w-xl"
            >
              {t.quality.description}
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {t.quality.items.slice(0, 2).map((std, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + idx * 0.1 }}
                className="glass-card glass-card-hover rounded-2xl p-7 transition-all duration-300 group"
              >
                <div className="mb-5 w-14 h-14 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center group-hover:bg-white/8 transition-all duration-300">
                  {icons[idx]}
                </div>
                <h3 className="text-white font-serif font-bold text-lg mb-3">{std.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{std.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {t.quality.items.slice(2).map((std, idx) => (
            <motion.div
              key={idx + 2}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + idx * 0.1 }}
              className="glass-card glass-card-hover rounded-2xl p-7 transition-all duration-300 group"
            >
              <div className="mb-5 w-14 h-14 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center group-hover:bg-white/8 transition-all duration-300">
                {icons[idx + 2]}
              </div>
              <h3 className="text-white font-serif font-bold text-lg mb-3">{std.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{std.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FactoryQuality;
