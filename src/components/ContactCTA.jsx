import { motion } from 'framer-motion';

const ContactCTA = () => {
  return (
    <section id="contact" className="py-32 relative bg-brand-black overflow-hidden">
      {/* Background with texture */}
      <div className="absolute inset-0 bg-brand-green/5" />
      <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(circle at 20% 50%, rgba(15, 61, 46, 0.4) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(217, 154, 43, 0.1) 0%, transparent 50%)`
      }} />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-panel rounded-3xl p-12 md:p-20 border border-white/10 shadow-2xl relative overflow-hidden"
        >
          {/* Decorative glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-gradient-to-b from-brand-honey/10 to-transparent pointer-events-none" />
          
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-brand-honey uppercase tracking-widest text-xs font-semibold mb-8">
            Distributors & Partners
          </span>
          
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">
            Partner with <span className="text-gradient-gold">AGRO MEL</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12 font-light">
            Premium agro-food products ready for modern markets. Join our global network of retailers, wholesalers, and restaurants.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="w-full sm:w-auto px-8 py-4 bg-brand-honey hover:bg-yellow-500 text-brand-black font-semibold uppercase tracking-widest text-sm transition-all duration-300 rounded-full shadow-[0_0_20px_rgba(217,154,43,0.3)] hover:shadow-[0_0_30px_rgba(217,154,43,0.5)]">
              Request Catalog
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/20 hover:border-white/50 text-white font-semibold uppercase tracking-widest text-sm transition-all duration-300 rounded-full">
              Contact Us
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA;
