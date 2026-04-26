import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section id="factory" className="py-32 bg-brand-black relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-green/10 blur-[100px] pointer-events-none transform translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-brand-honey/5 blur-[100px] pointer-events-none transform -translate-x-1/4" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] rounded-3xl overflow-hidden glass-card border border-white/10"
          >
            {/* Factory Image Placeholder */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-black via-black to-brand-green/20" />
            
            {/* Simulated factory structure with CSS shapes */}
            <div className="absolute inset-0 flex items-end justify-center pb-20 opacity-30">
              <div className="w-32 h-64 bg-white/10 mx-2 rounded-t-sm" />
              <div className="w-48 h-80 bg-white/20 mx-2 rounded-t-sm" />
              <div className="w-24 h-48 bg-white/10 mx-2 rounded-t-sm" />
            </div>

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto border border-white/20 rounded-full flex items-center justify-center backdrop-blur-md mb-6 shadow-2xl">
                  <span className="font-serif text-2xl text-white font-bold">AM</span>
                </div>
                <h3 className="text-white/50 uppercase tracking-[0.5em] text-sm">Est. 2024</h3>
              </div>
            </div>
          </motion.div>

          <div>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-brand-honey uppercase tracking-[0.3em] text-sm font-semibold mb-4"
            >
              The Factory
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-serif font-bold text-white mb-8"
            >
              Modern Manufacturing,<br />
              <span className="italic font-light text-gray-400">Natural Origins.</span>
            </motion.h2>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6 text-gray-400 text-lg leading-relaxed"
            >
              <p>
                AGRO MEL is a state-of-the-art agro-food factory dedicated to transforming nature's finest ingredients into premium food products for modern retail and distribution.
              </p>
              <p>
                Our facility bridges the gap between traditional agricultural purity and contemporary manufacturing standards. With a relentless focus on quality control, reliable packaging, and natural ingredients, we ensure every product that leaves our factory meets the highest global standards.
              </p>
              <p>
                From farm to shelf, our process is designed to preserve freshness, taste, and nutritional value, making AGRO MEL a trusted partner for wholesalers, restaurants, and retailers worldwide.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-10 grid grid-cols-3 gap-6 pt-10 border-t border-white/10"
            >
              <div>
                <h4 className="text-3xl font-serif font-bold text-white mb-2">100<span className="text-brand-honey">%</span></h4>
                <p className="text-xs uppercase tracking-widest text-gray-500">Natural</p>
              </div>
              <div>
                <h4 className="text-3xl font-serif font-bold text-white mb-2">50<span className="text-brand-honey">+</span></h4>
                <p className="text-xs uppercase tracking-widest text-gray-500">Products</p>
              </div>
              <div>
                <h4 className="text-3xl font-serif font-bold text-white mb-2">24<span className="text-brand-honey">/7</span></h4>
                <p className="text-xs uppercase tracking-widest text-gray-500">Quality Control</p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
