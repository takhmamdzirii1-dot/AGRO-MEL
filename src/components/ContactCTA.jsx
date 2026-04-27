import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const ContactCTA = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 md:py-32 relative bg-brand-bg overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(circle at 20% 50%, rgba(63, 125, 74, 0.05) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(245, 158, 11, 0.05) 0%, transparent 50%)`
      }} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1 rounded-full bg-brand-primary/10 text-brand-primary uppercase tracking-[0.1em] text-xs font-bold mb-6"
          >
            {t.contact.label}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-sans font-bold text-brand-text mb-6"
          >
            {t.contact.title} <span className="text-brand-accent">{t.contact.titleHighlight}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-brand-muted max-w-2xl mx-auto leading-relaxed"
          >
            {t.contact.description}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 bg-white border border-brand-border/60 rounded-[32px] p-8 md:p-12 shadow-xl"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-brand-text px-1">{t.contact.form.name}</label>
                  <input
                    type="text"
                    className="w-full bg-brand-surface border border-brand-border/40 rounded-2xl px-6 py-4 text-brand-text text-sm focus:outline-none focus:border-brand-primary transition-all shadow-sm"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-brand-text px-1">{t.contact.form.email}</label>
                  <input
                    type="email"
                    className="w-full bg-brand-surface border border-brand-border/40 rounded-2xl px-6 py-4 text-brand-text text-sm focus:outline-none focus:border-brand-primary transition-all shadow-sm"
                  />
                </div>
              </div>
              <div className="space-y-2">
                 <label className="text-sm font-bold text-brand-text px-1">{t.contact.form.company}</label>
                 <input
                  type="text"
                  className="w-full bg-brand-surface border border-brand-border/40 rounded-2xl px-6 py-4 text-brand-text text-sm focus:outline-none focus:border-brand-primary transition-all shadow-sm"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-brand-text px-1">{t.contact.form.message}</label>
                <textarea
                  rows={5}
                  className="w-full bg-brand-surface border border-brand-border/40 rounded-2xl px-6 py-4 text-brand-text text-sm focus:outline-none focus:border-brand-primary transition-all shadow-sm resize-none"
                />
              </div>
              <div className="pt-4">
                <button type="submit" className="btn-primary w-full gap-2 shadow-lg shadow-brand-primary/30">
                  <Send size={18} />
                  {t.contact.form.send}
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
            className="lg:col-span-2 space-y-6"
          >
            {/* Phone */}
            <div className="soft-card group hover:bg-white transition-all duration-300">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-brand-primary/10 flex items-center justify-center text-brand-primary flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-brand-text font-bold text-sm uppercase tracking-widest mb-1">Téléphone</h4>
                  <p className="text-brand-muted text-base font-medium">{t.contact.info.phone}</p>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="soft-card group hover:bg-white transition-all duration-300">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-brand-accent/10 flex items-center justify-center text-brand-accent flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-brand-text font-bold text-sm uppercase tracking-widest mb-1">Email</h4>
                  <p className="text-brand-muted text-base font-medium">{t.contact.info.email}</p>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="soft-card group hover:bg-white transition-all duration-300">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-brand-primary/10 flex items-center justify-center text-brand-primary flex-shrink-0 group-hover:scale-110 transition-transform">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-brand-text font-bold text-sm uppercase tracking-widest mb-1">Adresse</h4>
                  <p className="text-brand-muted text-base font-medium leading-relaxed">{t.contact.info.address}</p>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="soft-card p-0 overflow-hidden h-44 relative bg-brand-surface border-brand-border/40">
              <div className="absolute inset-0 bg-brand-accent/5 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md mx-auto mb-3">
                    <MapPin size={24} className="text-brand-accent" />
                  </div>
                  <p className="text-brand-muted text-[10px] uppercase font-bold tracking-[0.2em]">Map Visual</p>
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
