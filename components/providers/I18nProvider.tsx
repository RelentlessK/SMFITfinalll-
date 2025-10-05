'use client';

import { ReactNode, useEffect, useState } from 'react';
import { I18nextProvider } from 'react-i18next';
import { getI18nInstance } from '@/lib/i18n';
import type { i18n as I18nType } from 'i18next';

interface I18nProviderProps {
  children: ReactNode;
}

const I18nProvider = ({ children }: I18nProviderProps) => {
  const [i18nInstance, setI18nInstance] = useState<I18nType | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // Initialize client-side i18n instance
    try {
      const instance = getI18nInstance(true);
      setI18nInstance(instance);
      setIsInitialized(true);
    } catch (error) {
      console.error('i18n initialization failed:', error);
      // Fallback to server instance
      const fallbackInstance = getI18nInstance(false, 'ro');
      setI18nInstance(fallbackInstance);
      setIsInitialized(true);
    }
  }, []);

  // During SSR, render with server instance
  if (typeof window === 'undefined') {
    const serverInstance = getI18nInstance(false, 'ro');
    return (
      <I18nextProvider i18n={serverInstance}>
        {children}
      </I18nextProvider>
    );
  }

  // During client-side, wait for initialization
  if (!isInitialized || !i18nInstance) {
    return null;
  }

  return (
    <I18nextProvider i18n={i18nInstance}>
      {children}
    </I18nextProvider>
  );
};

export default I18nProvider;