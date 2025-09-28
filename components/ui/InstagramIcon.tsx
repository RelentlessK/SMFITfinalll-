'use client';

import { useTranslation } from 'react-i18next';
import { Instagram } from 'lucide-react';

const InstagramIcon = () => {
  const { t } = useTranslation('common');

  return (
    <a
      href="https://www.instagram.com/sabina.meruta/"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50 bg-gradient-to-br from-pink-500 via-purple-500 to-orange-500 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
      title={t('instagram.followMe')}
      aria-label={t('instagram.followMe')}
    >
      <Instagram className="h-6 w-6" />
      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
        {t('instagram.followMe')}
      </div>
    </a>
  );
};

export default InstagramIcon;