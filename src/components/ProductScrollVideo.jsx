import React, { useEffect, useRef, useState } from 'react';
import { useScroll, useSpring } from 'framer-motion';

/**
 * ProductScrollVideo
 * A performance-optimized component that scrubs a video based on page scroll progress.
 * Uses requestAnimationFrame for smooth updates and avoids React state updates during scroll.
 */
const ProductScrollVideo = () => {
  const videoRef = useRef(null);
  const explosionVideoRef = useRef(null);
  const [isReady, setIsReady] = useState(false);
  const [error, setError] = useState(false);
  
  // Use scroll progress for the whole page
  const { scrollYProgress } = useScroll();
  
  // Apply a spring for smoother interpolation of scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 35,
    restDelta: 0.0001
  });

  useEffect(() => {
    let rafId;
    const video = videoRef.current;

    const updateVideoTime = () => {
      const progress = smoothProgress.get();
      
      if (video && video.readyState >= 1 && video.duration > 0) {
        // Map smooth progress (0-1) to video duration
        const targetTime = progress * video.duration;
        
        // Directly update the video currentTime to avoid React re-renders
        if (Math.abs(video.currentTime - targetTime) > 0.01) {
          video.currentTime = targetTime;
        }
      }

      const explosionVideo = explosionVideoRef.current;
      if (explosionVideo && explosionVideo.readyState >= 1 && explosionVideo.duration > 0) {
        // The explosion transition happens between 30% and 50% of the page scroll
        const start = 0.3;
        const end = 0.5;
        
        if (progress >= start && progress <= end) {
          const mappedProgress = (progress - start) / (end - start);
          const targetTime = mappedProgress * explosionVideo.duration;
          
          if (Math.abs(explosionVideo.currentTime - targetTime) > 0.01) {
            explosionVideo.currentTime = targetTime;
          }
          
          // Fade in/out at the edges for smoothness
          let opacity = 1;
          if (mappedProgress < 0.1) opacity = mappedProgress / 0.1;
          if (mappedProgress > 0.9) opacity = (1 - mappedProgress) / 0.1;
          
          explosionVideo.style.opacity = opacity;
        } else {
          explosionVideo.style.opacity = 0;
        }
      }

      rafId = requestAnimationFrame(updateVideoTime);
    };

    rafId = requestAnimationFrame(updateVideoTime);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [smoothProgress]);

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setIsReady(true);
      // Ensure initial frame matches current scroll position
      const initialTime = scrollYProgress.get() * videoRef.current.duration;
      videoRef.current.currentTime = initialTime;
    }
  };

  const handleError = () => {
    console.error("Video failed to load. Ensure assets are in /public/videos/");
    setError(true);
  };

  if (error) return null;

  return (
    <div className="fixed inset-0 w-full h-full z-0 pointer-events-none overflow-hidden bg-brand-bg">
      {/* Loading Overlay */}
      {!isReady && (
        <div className="absolute inset-0 flex items-center justify-center bg-brand-surface z-20">
          <div className="flex flex-col items-center gap-4">
            <div className="w-14 h-14 border-3 border-brand-accent/40 border-t-brand-accent rounded-full animate-spin" />
            <p className="text-brand-muted text-xs uppercase tracking-[0.2em] animate-pulse font-bold">Preparing Your Experience</p>
          </div>
        </div>
      )}

      {/* The Scroll-Driven Video */}
      <video
        ref={videoRef}
        muted
        playsInline
        preload="auto"
        controls={false}
        onLoadedMetadata={handleLoadedMetadata}
        onError={handleError}
        className="absolute inset-0 w-full h-full object-cover opacity-50" // Lower opacity to let warm background shine
        style={{ 
          filter: 'contrast(1.05) brightness(1.1) saturate(1.1)', // Warm, bright look
          willChange: 'currentTime'
        }}
      >
        <source src="/videos/product-animation.mp4" type="video/mp4" />
      </video>

      {/* The Explosion Video overlaying the product */}
      <video
        ref={explosionVideoRef}
        muted
        playsInline
        preload="auto"
        controls={false}
        className="absolute inset-0 w-full h-full object-contain pointer-events-none mix-blend-screen"
        style={{ 
          opacity: 0,
          willChange: 'currentTime, opacity',
          zIndex: 10
        }}
      >
        <source src="/videos/explosion.mp4" type="video/mp4" />
      </video>

      
      {/* Warm Cinematic Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-bg/80 via-transparent to-brand-bg/90" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(255,247,232,0.4)_100%)]" />
      
      {/* Soft grain/texture effect (optional for food brands) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />
    </div>
  );
};

export default ProductScrollVideo;
