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
    <section id="products" className="py-24 md:py-32 bg-brand-surface/80 relative overflow-hidden">
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
                  className={`soft-card flex flex-col group overflow-hidden border-brand-border/60`}
                >
                  {/* Product Visual Container */}
                  <div className={`h-48 w-full rounded-2xl ${color.bg} flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-[1.02]`}>
                    <div className="relative">
                       <div className="w-24 h-32 bg-white rounded-lg shadow-sm border border-brand-border/40 flex flex-col items-center justify-center p-3">
                          <div className="w-full h-1 bg-brand-primary/10 rounded-full mb-2" />
                          <div className="w-2/3 h-1 bg-brand-primary/5 rounded-full mb-4" />
                          <div className="text-[8px] font-bold text-brand-primary/30 uppercase tracking-widest text-center">AGRO MEL<br/>FACTORY</div>
                       </div>
                       {/* Subtle highlight */}
                       <div className="absolute -top-4 -right-4 w-12 h-12 bg-brand-accent-soft/30 blur-xl rounded-full" />
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="flex-1 flex flex-col">
                    <div className="text-[10px] text-brand-accent font-bold uppercase tracking-widest mb-2">{product.category}</div>
                    <h3 className="text-xl font-sans font-bold text-brand-text mb-3">
                      {product.name}
                    </h3>
                    <p className="text-brand-muted text-sm leading-relaxed mb-8 flex-1">
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
