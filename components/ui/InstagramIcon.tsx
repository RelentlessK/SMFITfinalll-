"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Instagram } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';

const InstagramIcon = () => {
  const { t } = useTranslation('common');
  const [isHovered, setIsHovered] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
  };

  const charVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.1,
        ease: 'easeOut',
      },
    },
  };

  const fullText = t('instagram.followMe');

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
        className="p-3 rounded-full bg-gradient-to-br from-pink-400 to-purple-600 border-2 border-white text-primary-500 shadow-lg cursor-pointer relative"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        title={fullText}
        aria-label={fullText}
      >
        <Instagram size={24} />
        
        <AnimatePresence>
          {isHovered && (
            <motion.div
              className="absolute bottom-1/2 left-full ml-3 translate-y-1/2 px-3 py-1.5 bg-gray-800 text-white text-xs rounded-md whitespace-nowrap shadow-sm"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg shadow-lg whitespace-nowrap pointer-events-none"
            >
              {fullText.split('').map((char, index) => (
                <motion.span
                  key={index}
                  variants={charVariants}
                  className="inline-block"
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
              <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-800" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </Link>
  );
};

export default InstagramIcon;