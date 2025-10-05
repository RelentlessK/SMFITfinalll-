'use client';

import { ReactNode, useEffect, useState } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { resources } from '@/lib/i18n';

interface I18nProviderProps {
  children: ReactNode;
}

const I18nProvider = ({ children }: I18nProviderProps) => {
  const [isInitialized, setIsInitialized] = useState(true);

  useEffect(() => {
    // Skip i18n initialization during static build
    if (typeof window === 'undefined') {
      return;
    }
    
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
      })
      .then(() => {
        setIsInitialized(true);
      })
      .catch((error) => {
        console.error('i18n initialization failed:', error);
        setIsInitialized(true); // Still render children even if i18n fails
      });
  }, []);

  if (typeof window !== 'undefined' && !isInitialized) {
    return null;
  }

  return (
    <I18nextProvider i18n={i18n}>
      {children}
    </I18nextProvider>
  );
};

export default I18nProvider;