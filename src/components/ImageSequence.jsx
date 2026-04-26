import React, { useEffect, useRef, useState, useMemo } from 'react';
import { useScroll, useTransform, useMotionValueEvent } from 'framer-motion';

const ImageSequence = ({ 
  frameCount = 240, 
  baseUrl = '/assets/sequence/ezgif-frame-', 
  extension = '.jpg',
  containerRef 
}) => {
  const canvasRef = useRef(null);
  const [images, setImages] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Hook into the scroll progress of the parent container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

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
          loadedCount++; // Still count it to avoid hanging the loader
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

  // Draw function
  const renderCanvas = (index) => {
    const canvas = canvasRef.current;
    if (!canvas || !images[index]) return;

    const ctx = canvas.getContext('2d');
    const img = images[index];

    // Calculate aspect ratio to fit image in canvas
    const canvasAspect = canvas.width / canvas.height;
    const imgAspect = img.width / img.height;
    
    let drawWidth, drawHeight, offsetX, offsetY;

    if (canvasAspect > imgAspect) {
      drawHeight = canvas.height;
      drawWidth = canvas.height * imgAspect;
      offsetX = (canvas.width - drawWidth) / 2;
      offsetY = 0;
    } else {
      drawWidth = canvas.width;
      drawHeight = canvas.width / imgAspect;
      offsetX = 0;
      offsetY = (canvas.height - drawHeight) / 2;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  };

  // Update canvas when frameIndex changes
  useMotionValueEvent(frameIndex, "change", (latest) => {
    const index = Math.floor(latest);
    renderCanvas(index);
  });

  // Handle initial draw and resize
  useEffect(() => {
    if (isLoaded) {
      const handleResize = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        
        // Get parent dimensions
        const rect = canvas.parentElement.getBoundingClientRect();
        canvas.width = rect.width * window.devicePixelRatio;
        canvas.height = rect.height * window.devicePixelRatio;
        
        // Initial render
        renderCanvas(Math.floor(frameIndex.get()));
      };

      window.addEventListener('resize', handleResize);
      handleResize();

      return () => window.removeEventListener('resize', handleResize);
    }
  }, [isLoaded]);

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-brand-black/20 backdrop-blur-sm z-10">
          <div className="w-12 h-12 border-4 border-brand-honey border-t-transparent rounded-full animate-spin" />
        </div>
      )}
      <canvas 
        ref={canvasRef}
        className="w-full h-full object-contain pointer-events-none"
        style={{ maxWidth: '100%', maxHeight: '100%' }}
      />
    </div>
  );
};

export default ImageSequence;
