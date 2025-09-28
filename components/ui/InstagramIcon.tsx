"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Instagram } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';

const InstagramIcon = () => {
  const { t } = useTranslation('common');
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href="https://www.instagram.com/sabina.meruta/"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="p-3 rounded-full bg-gradient-to-br from-pink-400 to-purple-600 text-white shadow-lg hover:shadow-xl transition-shadow duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        title={t('instagram.followMe')}
        aria-label={t('instagram.followMe')}
      >
        <Instagram size={24} className="text-primary-600" />
        
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 px-3 py-1.5 bg-gray-800 text-white text-xs rounded-md whitespace-nowrap shadow-sm relative"
            >
              {t('instagram.followMe')}
              <div className="absolute left-1/2 -translate-x-1/2 bottom-[-6px] w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-4 border-t-gray-800"></div>
              <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-800" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </Link>
  );
};

export default InstagramIcon;