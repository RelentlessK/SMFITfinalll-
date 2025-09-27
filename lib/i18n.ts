'use client';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translation files
import commonEn from '../public/locales/en/common.json';
import commonRo from '../public/locales/ro/common.json';
import pagesEn from '../public/locales/en/pages.json';
import pagesRo from '../public/locales/ro/pages.json';
import faqEn from '../public/locales/en/faq.json';
import faqRo from '../public/locales/ro/faq.json';

const resources = {
  en: {
    common: commonEn,
    pages: pagesEn,
    faq: faqEn,
  },
  ro: {
    common: commonRo,
    pages: pagesRo,
    faq: faqRo,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    defaultNS: 'common',
    ns: ['common', 'pages', 'faq'],
    
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },

    interpolation: {
      escapeValue: false,
    },

    react: {
      useSuspense: false,
    },
  });

export default i18n;