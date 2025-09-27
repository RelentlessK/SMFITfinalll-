"use client";

import { useEffect, useRef } from 'react';

const VIDEO_URL = "https://vhqd75bvbs.ufs.sh/f/xRpe82xlR4uclILHWMYAo4dNGScRMZe6x8Fv3Os7Pnf2UtVb";
const POSTER_URL = "https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

const HeroVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Ensure video plays immediately when loaded
      video.play().catch(() => {
        // If autoplay fails, we can handle it here
        console.log('Video autoplay was prevented');
      });
    }
  }, []);

  return (
    <section className="min-h-[40vh] sm:min-h-[50vh] lg:min-h-[60vh] relative w-full flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        ref={videoRef}
        className="absolute top-1/2 left-1/2 w-full h-full object-cover transform -translate-x-1/2 -translate-y-1/2 z-0"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster={POSTER_URL}
        aria-label="Video background: short clip of the trainer doing exercises"
      >
        <source src={VIDEO_URL} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Gradient Overlay */}
      <div 
        className="absolute inset-0 z-10"
        style={{
          background: 'linear-gradient(180deg, rgba(0,0,0,0.35), rgba(0,0,0,0.55))'
        }}
        aria-hidden="true"
      />

      {/* Text Content */}
      <div 
        className="relative z-20 flex flex-col items-center justify-center text-center text-white p-6 w-full h-full pt-16 sm:pt-0"
        role="region"
        aria-label="Intro"
      >
        <div className="max-w-xs sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
            Train Smarter. Get Stronger.
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl font-medium text-white/95">
            Personalized workouts, real motivation — results you can see in weeks.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroVideo;