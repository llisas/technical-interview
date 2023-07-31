import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import enTranslation from "../technical-interview/public/locales/en/en.json"
import esTranslation from '../technical-interview/public/locales/es/es.json';
i18n.use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: enTranslation
      },
      es: {
        translation: esTranslation,
      },
    }
  });

export default i18n;