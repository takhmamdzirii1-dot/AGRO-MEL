import { motion } from 'framer-motion';

const CategoriesSection = () => {
  const categories = [
    { name: "Preserves & Jams", color: "from-brand-red to-red-900" },
    { name: "Natural Honeys", color: "from-brand-honey to-amber-900" },
    { name: "Beverages", color: "from-orange-500 to-orange-900" },
    { name: "Sauces & Condiments", color: "from-red-600 to-red-950" },
    { name: "Canned Vegetables", color: "from-brand-soft-green to-green-900" }
  ];

  return (
    <section className="py-20 bg-brand-black border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-serif font-bold text-white mb-2">Explore Categories</h2>
            <p className="text-gray-400 text-sm">Comprehensive agro-food solutions for every need.</p>
          </div>
          <a href="#products" className="hidden md:inline-flex items-center text-brand-honey text-sm font-semibold uppercase tracking-wider hover:text-yellow-400 transition-colors">
            View All Products
            <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        <div className="flex space-x-6 overflow-x-auto pb-8 snap-x hide-scrollbar">
          {categories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="flex-none w-64 snap-center cursor-pointer group"
            >
              <div className={`h-40 rounded-2xl bg-gradient-to-br ${category.color} p-1 mb-4 opacity-80 group-hover:opacity-100 transition-opacity duration-300`}>
                <div className="w-full h-full bg-brand-black/40 backdrop-blur-sm rounded-xl flex items-end p-6 border border-white/10 group-hover:bg-transparent transition-colors duration-300">
                  <h3 className="text-white font-serif font-bold text-lg leading-tight group-hover:scale-105 transform origin-bottom-left transition-transform duration-300">
                    {category.name}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
