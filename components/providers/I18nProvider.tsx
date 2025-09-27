'use client';

import { useEffect, ReactNode } from 'react';
import '@/lib/i18n';

interface I18nProviderProps {
  children: ReactNode;
}

const I18nProvider = ({ children }: I18nProviderProps) => {
  useEffect(() => {
    // Dynamically load the i18n configuration
    import('@/lib/i18n');
  }, []);

  return <>{children}</>;
};

export default I18nProvider;