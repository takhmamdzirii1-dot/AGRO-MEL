import { motion } from 'framer-motion';

const products = [
  {
    id: 1,
    name: 'Strawberry Jam',
    description: '100% natural, hand-picked strawberries preserved at peak freshness.',
    category: 'Preserves',
    accentColor: 'from-brand-red/20 to-red-900/40',
    borderColor: 'group-hover:border-brand-red/50',
    delay: 0.1
  },
  {
    id: 2,
    name: 'Natural Honey',
    description: 'Pure, raw honey sourced from local sustainable apiaries.',
    category: 'Sweeteners',
    accentColor: 'from-brand-honey/20 to-yellow-900/40',
    borderColor: 'group-hover:border-brand-honey/50',
    delay: 0.2
  },
  {
    id: 3,
    name: 'Fruit Juice',
    description: 'Cold-pressed natural fruit juices with zero added sugars.',
    category: 'Beverages',
    accentColor: 'from-orange-500/20 to-orange-900/40',
    borderColor: 'group-hover:border-orange-500/50',
    delay: 0.3
  },
  {
    id: 4,
    name: 'Tomato Sauce',
    description: 'Rich, authentic pasta sauce made with sun-ripened tomatoes.',
    category: 'Sauces',
    accentColor: 'from-red-600/20 to-red-950/40',
    borderColor: 'group-hover:border-red-600/50',
    delay: 0.4
  },
  {
    id: 5,
    name: 'Canned Food',
    description: 'Premium quality vegetables preserved for long-lasting freshness.',
    category: 'Pantry',
    accentColor: 'from-brand-soft-green/20 to-green-900/40',
    borderColor: 'group-hover:border-brand-soft-green/50',
    delay: 0.5
  },
  {
    id: 6,
    name: 'Natural Syrups',
    description: 'Artisanal flavor syrups crafted from pure botanical extracts.',
    category: 'Condiments',
    accentColor: 'from-amber-700/20 to-amber-950/40',
    borderColor: 'group-hover:border-amber-700/50',
    delay: 0.6
  }
];

const FeaturedProducts = () => {
  return (
    <section id="products" className="py-32 bg-brand-black relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-honey uppercase tracking-[0.3em] text-sm font-semibold mb-4"
          >
            Premium Selection
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif font-bold text-white"
          >
            Our Signature <span className="italic font-light">Products</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: product.delay }}
              className={`group relative glass-card rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 border border-white/5 ${product.borderColor}`}
            >
              {/* Product Visual Placeholder */}
              <div className="h-64 w-full relative overflow-hidden bg-black/50 flex items-center justify-center p-8">
                <div className={`absolute inset-0 bg-gradient-to-br ${product.accentColor} opacity-50 transition-opacity duration-500 group-hover:opacity-80`} />
                
                {/* Simulated product glass container */}
                <div className="relative w-24 h-32 bg-white/5 backdrop-blur-md border border-white/20 rounded-xl shadow-2xl transition-transform duration-700 group-hover:scale-110 group-hover:-translate-y-2 flex items-center justify-center">
                  <div className="text-white/30 text-xs uppercase tracking-widest font-serif transform -rotate-90 whitespace-nowrap">AGRO MEL</div>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-8 relative z-10 bg-black/40 backdrop-blur-md">
                <div className="text-[10px] text-gray-400 uppercase tracking-widest mb-2">{product.category}</div>
                <h3 className="text-xl font-serif font-bold text-white mb-3 group-hover:text-brand-cream transition-colors">
                  {product.name}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {product.description}
                </p>
                
                <div className="mt-6 flex items-center text-brand-honey text-sm font-semibold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <span>Discover</span>
                  <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
