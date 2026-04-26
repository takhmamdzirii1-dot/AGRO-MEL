import { motion } from 'framer-motion';
import { Leaf, Settings, ShieldCheck, Package, Award } from 'lucide-react';

const standards = [
  {
    icon: <Leaf className="w-8 h-8 text-brand-soft-green" />,
    title: "Selected Ingredients",
    description: "Sourced from trusted farmers, ensuring only the finest natural produce enters our facility."
  },
  {
    icon: <Settings className="w-8 h-8 text-brand-honey" />,
    title: "Controlled Production",
    description: "State-of-art manufacturing lines with strict temperature and hygiene controls."
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-brand-red" />,
    title: "Freshness Sealing",
    description: "Advanced vacuum sealing technology preserves natural flavor and extends shelf life."
  },
  {
    icon: <Package className="w-8 h-8 text-gray-300" />,
    title: "Retail-Ready Packaging",
    description: "Premium, durable packaging designed for modern retail shelves and logistics."
  },
  {
    icon: <Award className="w-8 h-8 text-brand-cream" />,
    title: "Consistent Quality",
    description: "Rigorous lab testing guarantees every batch meets international safety standards."
  }
];

const FactoryQuality = () => {
  return (
    <section id="quality" className="py-32 bg-black relative border-t border-white/5">
      <div className="absolute left-0 top-0 w-1/3 h-full bg-gradient-to-r from-brand-green/5 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-brand-soft-green uppercase tracking-[0.3em] text-sm font-semibold mb-4"
            >
              Excellence Assured
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-serif font-bold text-white mb-6"
            >
              Our Quality <span className="text-gradient-green italic font-light">Standards</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 text-lg leading-relaxed max-w-xl"
            >
              At AGRO MEL, we believe that premium quality is not an accident, but the result of rigorous processes, advanced technology, and a deep respect for nature's ingredients.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {standards.slice(0, 2).map((std, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + idx * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors duration-300"
              >
                <div className="mb-6 bg-black/50 w-16 h-16 rounded-full flex items-center justify-center border border-white/5">
                  {std.icon}
                </div>
                <h3 className="text-white font-serif font-bold text-xl mb-3">{std.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{std.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {standards.slice(2).map((std, idx) => (
            <motion.div
              key={idx + 2}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + idx * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors duration-300"
            >
              <div className="mb-6 bg-black/50 w-16 h-16 rounded-full flex items-center justify-center border border-white/5">
                {std.icon}
              </div>
              <h3 className="text-white font-serif font-bold text-xl mb-3">{std.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{std.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FactoryQuality;
