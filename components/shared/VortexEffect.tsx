"use client";

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';

interface VortexEffectProps {
  excludeHomepageHero?: boolean;
}

const VortexEffect = ({ excludeHomepageHero = true }: VortexEffectProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();
  const isHomepage = pathname === '/';

  // Check if we should show the effect based on scroll position on homepage
  useEffect(() => {
    // Disable three.js effects during static build
    if (typeof window === 'undefined') return;
    
    if (!excludeHomepageHero || !isHomepage) return;

    const handleScroll = () => {
      const shouldShow = window.scrollY > 650;
      setIsVisible(shouldShow);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [excludeHomepageHero, isHomepage]);

  // Disable three.js for static builds
  if (typeof window === 'undefined') {
    return null;
  }
  
  return (
    <div 
      className="vortex-container" 
      style={{ opacity: isVisible ? 1 : 0 }}
      aria-hidden="true"
    >
      {/* Simplified CSS animation fallback for static builds */}
      <div className="fixed inset-0 pointer-events-none opacity-10">
        <div 
          className="absolute w-2 h-2 bg-primary-300 rounded-full animate-pulse"
          style={{ top: '20%', left: '10%', animationDelay: '0s' }}
        />
        <div 
          className="absolute w-1 h-1 bg-primary-400 rounded-full animate-pulse"
          style={{ top: '60%', right: '15%', animationDelay: '1s' }}
        />
        <div 
          className="absolute w-1.5 h-1.5 bg-primary-200 rounded-full animate-pulse"
          style={{ bottom: '30%', left: '20%', animationDelay: '2s' }}
        />
      </div>
    </div>
  );
};

export default VortexEffect;