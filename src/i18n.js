import i18n from 'i18next';
import i18nextBrowserLanguagedetector from 'i18next-browser-languagedetector';
import i18nextHttpBackend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .use(i18nextBrowserLanguagedetector)
  .use(i18nextHttpBackend)
  .init({
    fallbackLng: "uz",
    debug: true,
    detection: {
      order: ["localStorage", "queryString", "cookie", "navigator"],
      caches: ["localStorage", "cookie"],
    },
    interpolation: {
      escapeValue: false,
    },
  });


export default i18n;