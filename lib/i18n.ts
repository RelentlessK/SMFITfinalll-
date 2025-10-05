'use client';

import i18n, { InitOptions } from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translation files
import commonEn from '../public/locales/en/common.json';
import commonRo from '../public/locales/ro/common.json';
import pagesEn from '../public/locales/en/pages.json';
import pagesRo from '../public/locales/ro/pages.json';
import faqEn from '../public/locales/en/faq.json';
import faqRo from '../public/locales/ro/faq.json';

export const resources = {
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

export const getI18nInstance = (isClient = false) => {
}
export const getI18nInstance = (isClient = false, initialLng = 'en') => {
  const i18nInstance = i18n.createInstance();
  
  const config: InitOptions = {
    resources,
    fallbackLng: 'en',
    lng: initialLng,
    defaultNS: 'common',
    ns: ['common', 'pages', 'faq'],
    
    interpolation: {
      escapeValue: false,
    },
    
    react: {
      useSuspense: false,
    },
  };

  if (isClient) {
    i18nInstance
      .use(LanguageDetector)
      .use(initReactI18next)
      .init({
        ...config,
        detection: {
          order: ['localStorage', 'navigator'],
          caches: ['localStorage'],
        },
      });
  } else {
    i18nInstance
      .use(initReactI18next)
      .init(config);
  }

  return i18nInstance;
};
