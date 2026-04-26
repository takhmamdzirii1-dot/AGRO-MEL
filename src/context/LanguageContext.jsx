import { createContext, useContext, useState, useEffect } from 'react';
import fr from '../translations/fr';
import en from '../translations/en';
import ar from '../translations/ar';

const translations = { fr, en, ar };

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('fr');

  const t = translations[language];

  useEffect(() => {
    // Update document direction and lang
    document.documentElement.dir = t.dir;
    document.documentElement.lang = t.lang;
    // Update font family for Arabic
    document.documentElement.style.fontFamily = t.fontFamily;
  }, [language, t]);

  const switchLanguage = (lang) => {
    if (translations[lang]) {
      setLanguage(lang);
    }
  };

  return (
    <LanguageContext.Provider value={{ language, t, switchLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export default LanguageContext;
