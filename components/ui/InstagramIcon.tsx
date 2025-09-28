"use client";

import { useTranslation } from 'react-i18next';
import { Instagram } from 'lucide-react';

const InstagramIcon = () => {
  const { t } = useTranslation('common');

  const handleClick = () => {
    window.open('https://www.instagram.com/sabina.meruta/', '_blank', 'noopener,noreferrer');
  };

  return (
    <div 
      className="fixed top-4 left-4 z-50 cursor-pointer group transition-all duration-300 hover:scale-110"
      onClick={handleClick}
      title={t('instagram.followMe')}
      role="button"
      aria-label={t('instagram.followMe')}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleClick();
        }
      }}
    >
      <div className="bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 p-2 rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300">
        <Instagram className="h-6 w-6 text-white" />
      </div>
    </div>
  );
};

export default InstagramIcon;