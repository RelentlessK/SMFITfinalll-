'use client';

import { ReactNode } from 'react';
import '@/lib/i18n';

interface I18nProviderProps {
  children: ReactNode;
}

const I18nProvider = ({ children }: I18nProviderProps) => {
  return <>{children}</>;
};

export default I18nProvider;