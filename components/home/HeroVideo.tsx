"use client";

import { useEffect, useState } from 'react';

const HeroVideo = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="hero-video relative overflow-hidden min-h-[40vh] md:min-h-[50vh] lg:min-h-[60vh]">
      {/* Video Background */}
      <video
        className="hero-video__bg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        aria-label="Video background: short clip of the trainer doing exercises"
      >
        <source 
          src="https://vhqd75bvbs.ufs.sh/f/xRpe82xlR4uclILHWMYAo4dNGScRMZe6x8Fv3Os7Pnf2UtVb" 
          type="video/mp4" 
        />
        {/* Fallback for browsers that don't support video */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")'
          }}
        />
      </video>

      {/* Gradient Overlay */}
      <div 
        className="hero-overlay absolute inset-0 z-10"
        style={{
          background: 'linear-gradient(180deg, rgba(0,0,0,0.35), rgba(0,0,0,0.55))'
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div 
        className="hero-content relative z-20 h-full flex flex-col items-center justify-center text-center text-white p-6 pt-20 md:pt-6"
        role="region" 
        aria-label="Intro"
      >
        <div className="max-w-xs sm:max-w-2xl lg:max-w-4xl mx-auto">
          <h1 className="hero-title text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            Train Smarter. Get Stronger.
          </h1>
          <p className="hero-subtitle text-base sm:text-lg md:text-xl font-medium text-white/95 leading-relaxed">
            Personalized workouts, real motivation — results you can see in weeks.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroVideo;