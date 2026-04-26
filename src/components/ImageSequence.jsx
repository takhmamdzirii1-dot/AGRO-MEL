import React, { useEffect, useRef, useState } from 'react';
import { useScroll, useTransform, useMotionValueEvent } from 'framer-motion';

const ImageSequence = ({ 
  frameCount = 240, 
  baseUrl = '/assets/sequence/ezgif-frame-', 
  extension = '.jpg',
}) => {
  const canvasRef = useRef(null);
  const [images, setImages] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Use entire document scroll for the animation
  const { scrollYProgress } = useScroll();

  // Map scroll progress (0 to 1) to frame index (1 to frameCount)
  const frameIndex = useTransform(scrollYProgress, [0, 1], [1, frameCount]);

  // Preload images
  useEffect(() => {
    const preloadImages = async () => {
      const loadedImages = [];
      let loadedCount = 0;

      for (let i = 1; i <= frameCount; i++) {
        const img = new Image();
        const frameStr = i.toString().padStart(3, '0');
        img.src = `${baseUrl}${frameStr}${extension}`;
        img.onload = () => {
          loadedCount++;
          if (loadedCount === frameCount) {
            setIsLoaded(true);
          }
        };
        img.onerror = () => {
          console.error(`Failed to load frame ${i}`);
          loadedCount++;
          if (loadedCount === frameCount) {
            setIsLoaded(true);
          }
        };
        loadedImages[i] = img;
      }
      setImages(loadedImages);
    };

    preloadImages();
  }, [frameCount, baseUrl, extension]);

  // Draw function — cover entire canvas
  const renderCanvas = (index) => {
    const canvas = canvasRef.current;
    if (!canvas || !images[index]) return;

    const ctx = canvas.getContext('2d');
    const img = images[index];

    // Use "cover" logic to fill the entire viewport
    const canvasAspect = canvas.width / canvas.height;
    const imgAspect = img.width / img.height;
    
    let drawWidth, drawHeight, offsetX, offsetY;

    if (canvasAspect > imgAspect) {
      // Canvas is wider — fill width, crop height
      drawWidth = canvas.width;
      drawHeight = canvas.width / imgAspect;
      offsetX = 0;
      offsetY = (canvas.height - drawHeight) / 2;
    } else {
      // Canvas is taller — fill height, crop width
      drawHeight = canvas.height;
      drawWidth = canvas.height * imgAspect;
      offsetX = (canvas.width - drawWidth) / 2;
      offsetY = 0;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  };

  // Update canvas when frameIndex changes
  useMotionValueEvent(frameIndex, "change", (latest) => {
    const index = Math.min(Math.max(Math.floor(latest), 1), frameCount);
    renderCanvas(index);
  });

  // Handle initial draw and resize
  useEffect(() => {
    if (isLoaded) {
      const handleResize = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        
        // Fill the entire viewport
        canvas.width = window.innerWidth * window.devicePixelRatio;
        canvas.height = window.innerHeight * window.devicePixelRatio;
        
        // Render current frame
        renderCanvas(Math.floor(frameIndex.get()));
      };

      window.addEventListener('resize', handleResize);
      handleResize();

      return () => window.removeEventListener('resize', handleResize);
    }
  }, [isLoaded]);

  return (
    <div className="fixed inset-0 w-full h-full z-0 pointer-events-none">
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-brand-black z-10">
          <div className="flex flex-col items-center gap-4">
            <div className="w-14 h-14 border-3 border-brand-honey/40 border-t-brand-honey rounded-full animate-spin" />
            <p className="text-gray-500 text-xs uppercase tracking-[0.3em]">Loading</p>
          </div>
        </div>
      )}
      <canvas 
        ref={canvasRef}
        className="w-full h-full pointer-events-none"
        style={{ display: 'block' }}
      />
    </div>
  );
};

export default ImageSequence;
