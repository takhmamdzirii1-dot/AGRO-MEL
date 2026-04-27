import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const accentColors = [
  { bg: 'bg-brand-accent/5', border: 'border-brand-accent/20' },
  { bg: 'bg-brand-primary/5', border: 'border-brand-primary/20' },
  { bg: 'bg-brand-accent-soft/10', border: 'border-brand-accent-soft/20' },
  { bg: 'bg-brand-primary/10', border: 'border-brand-primary/20' },
  { bg: 'bg-brand-accent/5', border: 'border-brand-accent/20' },
  { bg: 'bg-brand-accent-soft/10', border: 'border-brand-accent-soft/20' },
];

const FeaturedProducts = () => {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState(0);

  const categories = t.showroom.categories;
  const products = t.showroom.products;

  const filteredProducts = activeFilter === 0
    ? products
    : products.filter(p => p.category === categories[activeFilter]);

  return (
    <section id="products" className="py-24 md:py-32 bg-brand-surface relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-primary uppercase tracking-[0.2em] text-xs font-bold mb-4"
          >
            {t.showroom.label}
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-sans font-bold text-brand-text"
          >
            {t.showroom.title} <span className="text-brand-accent">{t.showroom.titleHighlight}</span>
          </motion.h2>
        </div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {categories.map((cat, idx) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(idx)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold tracking-tight transition-all duration-300 cursor-pointer ${
                activeFilter === idx
                  ? 'bg-brand-primary text-white shadow-lg shadow-brand-primary/20'
                  : 'bg-white border border-brand-border text-brand-muted hover:border-brand-primary hover:text-brand-primary'
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
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProducts.map((product, idx) => {
              const originalIdx = products.indexOf(product);
              const color = accentColors[originalIdx % accentColors.length];
              
              return (
                <motion.div
                  key={product.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.05 }}
                  className="glass-panel p-6 flex flex-col group overflow-hidden hover:shadow-[0_30px_60px_rgba(43,33,24,0.12)] hover:-translate-y-2 transition-all duration-500"
                >
                  {/* Product Visual Container */}
                  <div className={`h-48 w-full rounded-2xl ${color.bg} overflow-hidden mb-8 transition-transform duration-500 group-hover:scale-[1.02] relative`}>
                    <img src="/assets/products.png" alt={product.name} className="w-full h-full object-cover opacity-90" />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-surface/20 to-transparent mix-blend-multiply pointer-events-none" />
                  </div>

                  {/* Product Info */}
                  <div className="flex-1 flex flex-col">
                    <div className="text-[10px] text-brand-accent font-bold uppercase tracking-widest mb-2">{product.category}</div>
                    <h3 className="text-2xl font-sans font-bold text-brand-text mb-3 tracking-tight group-hover:text-brand-primary transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-brand-muted text-base leading-relaxed mb-8 flex-1 font-medium">
                      {product.desc}
                    </p>
                    
                    <button className="btn-secondary w-full py-3 text-sm rounded-2xl group-hover:bg-brand-primary group-hover:text-white group-hover:border-brand-primary transition-all">
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
