import i18n from 'i18next';   
import { initReactI18next } from 'react-i18next';  

// import LanguageDetector from 'i18next-browser-languagedetector'; // <= new

import en from './en';
import fr from './fr';


i18n
 //  .use(LanguageDetector) // <= new
  .use(initReactI18next)
  
  .init({
  resources: {
    en,
    fr,
    
  },
  fallbackLng: 'en',
  debug: process.env.NODE_ENV !== 'production',
  ns: ['translations'],
  defaultNS: 'translations',
  keySeparator: false,
  interpolation: {
    escapeValue: false,
    formatSeparator: ',',
  },
  react: {
    wait: true,
  },
});
export default i18n;