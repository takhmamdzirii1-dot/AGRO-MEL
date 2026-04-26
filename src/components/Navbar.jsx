import { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const { language, t, switchLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close lang dropdown on outside click
  useEffect(() => {
    const handleClick = () => setIsLangOpen(false);
    if (isLangOpen) {
      setTimeout(() => document.addEventListener('click', handleClick), 0);
      return () => document.removeEventListener('click', handleClick);
    }
  }, [isLangOpen]);

  const navLinks = [
    { name: t.nav.home, href: '#' },
    { name: t.nav.about, href: '#about' },
    { name: t.nav.products, href: '#products' },
    { name: t.nav.showroom, href: '#showroom' },
    { name: t.nav.quality, href: '#quality' },
    { name: t.nav.contact, href: '#contact' },
  ];

  const languages = [
    { code: 'fr', label: 'FR', full: 'Français' },
    { code: 'en', label: 'EN', full: 'English' },
    { code: 'ar', label: 'AR', full: 'العربية' },
  ];

  return (
    <nav
      id="navbar"
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'glass-navbar py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="text-2xl font-serif font-bold text-white tracking-wider">
              AGRO <span className="text-gradient-gold">MEL</span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-white transition-colors duration-200 text-[0.8125rem] uppercase tracking-widest font-medium relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-brand-honey transition-all duration-300 group-hover:w-full" />
              </a>
            ))}

            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={(e) => { e.stopPropagation(); setIsLangOpen(!isLangOpen); }}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full glass-card text-sm text-gray-300 hover:text-white transition-all duration-300 cursor-pointer"
                id="lang-switcher"
              >
                <Globe size={14} />
                <span className="font-medium tracking-wider">{languages.find(l => l.code === language)?.label}</span>
              </button>
              
              <AnimatePresence>
                {isLangOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full mt-2 end-0 w-40 glass-card rounded-xl overflow-hidden py-1"
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => { switchLanguage(lang.code); setIsLangOpen(false); }}
                        className={`w-full px-4 py-2.5 text-start text-sm transition-all duration-200 flex items-center justify-between cursor-pointer ${
                          language === lang.code
                            ? 'text-brand-honey bg-white/5'
                            : 'text-gray-300 hover:text-white hover:bg-white/5'
                        }`}
                      >
                        <span>{lang.full}</span>
                        <span className="text-xs tracking-wider opacity-50">{lang.label}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a
              href="#contact"
              className="btn-primary text-xs py-2.5 px-5"
            >
              {t.nav.contactBtn}
            </a>
          </div>

          {/* Mobile: lang + menu */}
          <div className="lg:hidden flex items-center gap-3">
            {/* Mobile Language Switcher */}
            <div className="relative">
              <button
                onClick={(e) => { e.stopPropagation(); setIsLangOpen(!isLangOpen); }}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full glass-card text-xs text-gray-300 hover:text-white transition-all cursor-pointer"
              >
                <Globe size={12} />
                <span className="font-medium">{languages.find(l => l.code === language)?.label}</span>
              </button>
              <AnimatePresence>
                {isLangOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full mt-2 end-0 w-36 glass-card rounded-xl overflow-hidden py-1 z-50"
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => { switchLanguage(lang.code); setIsLangOpen(false); }}
                        className={`w-full px-3 py-2 text-start text-sm transition-all duration-200 cursor-pointer ${
                          language === lang.code
                            ? 'text-brand-honey bg-white/5'
                            : 'text-gray-300 hover:text-white hover:bg-white/5'
                        }`}
                      >
                        {lang.full}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden glass-navbar absolute top-full left-0 w-full border-t border-white/5 overflow-hidden"
          >
            <div className="px-4 pt-3 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block px-4 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-3">
                <a
                  href="#contact"
                  className="block text-center btn-primary w-full py-3"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t.nav.contactBtn}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
