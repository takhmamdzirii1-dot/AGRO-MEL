import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const accentColors = [
  { gradient: 'from-red-500/15 to-red-900/30', border: 'hover:border-red-500/30' },
  { gradient: 'from-brand-honey/15 to-amber-900/30', border: 'hover:border-brand-honey/30' },
  { gradient: 'from-orange-400/15 to-orange-900/30', border: 'hover:border-orange-400/30' },
  { gradient: 'from-red-600/15 to-red-950/30', border: 'hover:border-red-600/30' },
  { gradient: 'from-brand-soft-green/15 to-green-900/30', border: 'hover:border-brand-soft-green/30' },
  { gradient: 'from-amber-600/15 to-amber-950/30', border: 'hover:border-amber-600/30' },
];

const FeaturedProducts = () => {
  const { t, language } = useLanguage();
  const [activeFilter, setActiveFilter] = useState(0);

  const categories = t.showroom.categories;
  const products = t.showroom.products;

  const filteredProducts = activeFilter === 0
    ? products
    : products.filter(p => p.category === categories[activeFilter]);

  return (
    <section id="showroom" className="py-28 section-bg relative">
      <div className="section-divider absolute top-0 left-0 w-full" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-honey uppercase tracking-[0.3em] text-sm font-semibold mb-4"
          >
            {t.showroom.label}
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-serif font-bold text-white"
          >
            {t.showroom.title} <span className="italic font-light text-gradient-gold">{t.showroom.titleHighlight}</span>
          </motion.h2>
        </div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-14"
        >
          {categories.map((cat, idx) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(idx)}
              className={`px-5 py-2 rounded-full text-sm font-medium tracking-wider transition-all duration-300 cursor-pointer ${
                activeFilter === idx
                  ? 'bg-brand-honey/15 text-brand-honey border border-brand-honey/30'
                  : 'glass-card text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Products Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7"
          >
            {filteredProducts.map((product, idx) => {
              // Get stable color index from original product list
              const originalIdx = products.indexOf(product);
              const color = accentColors[originalIdx] || accentColors[0];
              
              return (
                <motion.div
                  key={product.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`group relative glass-card glass-card-hover rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 ${color.border}`}
                >
                  {/* Product Visual */}
                  <div className="h-56 w-full relative overflow-hidden flex items-center justify-center p-8">
                    <div className={`absolute inset-0 bg-gradient-to-br ${color.gradient} opacity-60 transition-opacity duration-500 group-hover:opacity-90`} />
                    
                    {/* Simulated product glass container */}
                    <div className="relative w-20 h-28 bg-white/5 backdrop-blur-md border border-white/15 rounded-xl shadow-2xl transition-all duration-700 group-hover:scale-110 group-hover:-translate-y-2 flex items-center justify-center">
                      <div className="text-white/25 text-[10px] uppercase tracking-widest font-serif transform -rotate-90 whitespace-nowrap">AGRO MEL</div>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-7 relative z-10 bg-brand-black/30 backdrop-blur-md">
                    <div className="text-[10px] text-gray-500 uppercase tracking-widest mb-2">{product.category}</div>
                    <h3 className="text-lg font-serif font-bold text-white mb-3 group-hover:text-brand-cream transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-5">
                      {product.desc}
                    </p>
                    
                    <button className="w-full btn-secondary text-xs py-2.5 group-hover:border-brand-honey/30 group-hover:text-brand-honey transition-all duration-300">
                      {t.showroom.cta}
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default FeaturedProducts;
