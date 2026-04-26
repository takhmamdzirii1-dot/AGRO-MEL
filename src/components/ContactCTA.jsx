import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const ContactCTA = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-28 relative section-bg-alt overflow-hidden">
      <div className="section-divider absolute top-0 left-0 w-full" />
      
      {/* Background glow */}
      <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(circle at 20% 50%, rgba(26, 58, 42, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(200, 146, 42, 0.08) 0%, transparent 50%)`
      }} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full glass-card text-brand-honey uppercase tracking-widest text-xs font-semibold mb-6"
          >
            {t.contact.label}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-serif font-bold text-white mb-4"
          >
            {t.contact.title} <span className="text-gradient-gold">{t.contact.titleHighlight}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto"
          >
            {t.contact.description}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 glass-card rounded-3xl p-8 md:p-10"
          >
            <form className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <input
                    type="text"
                    placeholder={t.contact.form.name}
                    className="w-full glass-input rounded-xl px-5 py-3.5 text-white text-sm placeholder-gray-500"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder={t.contact.form.email}
                    className="w-full glass-input rounded-xl px-5 py-3.5 text-white text-sm placeholder-gray-500"
                  />
                </div>
              </div>
              <div>
                <input
                  type="text"
                  placeholder={t.contact.form.company}
                  className="w-full glass-input rounded-xl px-5 py-3.5 text-white text-sm placeholder-gray-500"
                />
              </div>
              <div>
                <textarea
                  rows={5}
                  placeholder={t.contact.form.message}
                  className="w-full glass-input rounded-xl px-5 py-3.5 text-white text-sm placeholder-gray-500 resize-none"
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button type="submit" className="btn-primary flex-1 gap-2">
                  <Send size={16} />
                  {t.contact.cta1}
                </button>
              </div>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-5"
          >
            {/* Phone */}
            <div className="glass-card glass-card-hover rounded-2xl p-6 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-honey/10 border border-brand-honey/20 flex items-center justify-center text-brand-honey flex-shrink-0 group-hover:bg-brand-honey/15 transition-all">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm mb-1">Téléphone</h4>
                  <p className="text-gray-400 text-sm">{t.contact.info.phone}</p>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="glass-card glass-card-hover rounded-2xl p-6 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-soft-green/10 border border-brand-soft-green/20 flex items-center justify-center text-brand-soft-green flex-shrink-0 group-hover:bg-brand-soft-green/15 transition-all">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm mb-1">Email</h4>
                  <p className="text-gray-400 text-sm">{t.contact.info.email}</p>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="glass-card glass-card-hover rounded-2xl p-6 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center text-brand-gold flex-shrink-0 group-hover:bg-brand-gold/15 transition-all">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm mb-1">Adresse</h4>
                  <p className="text-gray-400 text-sm">{t.contact.info.address}</p>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="glass-card rounded-2xl overflow-hidden h-40 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-green/10 to-brand-dark flex items-center justify-center">
                <div className="text-center">
                  <MapPin size={24} className="text-brand-honey/40 mx-auto mb-2" />
                  <p className="text-gray-500 text-xs uppercase tracking-widest">Google Maps</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
