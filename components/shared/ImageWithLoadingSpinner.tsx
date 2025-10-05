'use client';

import { useState, useCallback } from 'react';
import Image from 'next/image';
import { Component as LumaSpin } from '@/components/ui/luma-spin';
import { cn } from '@/lib/utils';

interface ImageWithLoadingSpinnerProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  sizes?: string;
  className?: string;
  priority?: boolean;
  loading?: 'lazy' | 'eager';
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
  style?: React.CSSProperties;
  minLoadingTime?: number; // Minimum time to show spinner in ms
}

const ImageWithLoadingSpinner = ({
  src,
  alt,
  width,
  height,
  fill = false,
  sizes,
  className = '',
  priority = false,
  loading = 'lazy',
  placeholder,
  blurDataURL,
  style,
  minLoadingTime = 800, // Default minimum 800ms to show spinner
  ...props
}: ImageWithLoadingSpinnerProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadStartTime] = useState(Date.now());

  const handleLoadingComplete = useCallback(() => {
    const loadTime = Date.now() - loadStartTime;
    
    // If image loaded too quickly, delay hiding the spinner
    if (loadTime < minLoadingTime) {
      setTimeout(() => {
        setIsLoading(false);
      }, minLoadingTime - loadTime);
    } else {
      setIsLoading(false);
    }
  }, [loadStartTime, minLoadingTime]);

  const handleError = useCallback(() => {
    // Hide spinner on error after minimum time
    const loadTime = Date.now() - loadStartTime;
    if (loadTime < minLoadingTime) {
      setTimeout(() => {
        setIsLoading(false);
      }, minLoadingTime - loadTime);
    } else {
      setIsLoading(false);
    }
  }, [loadStartTime, minLoadingTime]);

  return (
    <div className={cn("relative", className)} style={style}>
      {/* Loading Spinner Overlay */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg z-10">
          <div className="flex flex-col items-center space-y-3">
            <LumaSpin className="text-pink-200 h-6 w-6" />
            <p className="text-pink-200/80 text-xs font-medium tracking-wide">Loading...</p>
          </div>
        </div>
      )}
      
      {/* Next.js Image */}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        fill={fill}
        sizes={sizes}
        priority={priority}
        loading={loading}
        placeholder={placeholder}
        blurDataURL={blurDataURL}
        onLoadingComplete={handleLoadingComplete}
        onError={handleError}
        className={cn("transition-opacity duration-300", isLoading ? "opacity-0" : "opacity-100")}
        {...props}
      />
    </div>
  );
};

export default ImageWithLoadingSpinner;