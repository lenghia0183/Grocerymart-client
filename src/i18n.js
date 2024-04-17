import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

const languageDefault = localStorage.getItem('lang') || 'vi';

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    fallbackLng: languageDefault,
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  });
localStorage.setItem('lang', languageDefault);
export default i18n;
