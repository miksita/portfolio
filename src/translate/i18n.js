import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Локализованные тексты
const resources = {
  ru: {
    translation: {
      welcome: 'Добро пожаловать',
      switchLanguage: 'Переключить на английский',
    },
  },
  en: {
    translation: {
      welcome: 'Welcome',
      switchLanguage: 'Switch to Russian',
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'ru', // Язык по умолчанию
  fallbackLng: 'ru', // Язык, если выбранный недоступен
  interpolation: {
    escapeValue: false, // Не экранировать HTML
  },
});

export default i18n;