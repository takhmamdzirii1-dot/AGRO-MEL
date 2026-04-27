import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const ProductAnimation = () => {
  const { t } = useLanguage();
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  
  const frameCount = 120;
  const imagesRef = useRef([]);

  // Preload images
  useEffect(() => {
    let loadedCount = 0;
    const images = [];

    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      const frameIndex = i.toString().padStart(4, '0');
      img.src = `/assets/frames/frame_${frameIndex}.jpg`;
      img.onload = () => {
        loadedCount++;
        setLoadingProgress(Math.round((loadedCount / frameCount) * 100));
        if (loadedCount === frameCount) {
          imagesRef.current = images;
          setImagesLoaded(true);
        }
      };
      // In case of error, just act as if it loaded so it doesn't block forever
      img.onerror = () => {
        loadedCount++;
        if (loadedCount === frameCount) {
          imagesRef.current = images;
          setImagesLoaded(true);
        }
      };
      images.push(img);
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useEffect(() => {
    if (!imagesLoaded || !canvasRef.current || !imagesRef.current[0]) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    
    // Set canvas dimensions for retina displays
    const setCanvasSize = () => {
      canvas.width = window.innerWidth * window.devicePixelRatio;
      canvas.height = window.innerHeight * window.devicePixelRatio;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      
      // Draw current frame immediately after resize
      const unsubscribe = scrollYProgress.onChange(renderFrame);
      renderFrame(scrollYProgress.get());
      return unsubscribe;
    };

    const renderFrame = (progress) => {
      if (!imagesRef.current.length) return;
      
      const frameIndex = Math.min(
        frameCount - 1,
        Math.floor(progress * frameCount)
      );
      
      const img = imagesRef.current[frameIndex];
      if (!img || !img.complete || img.naturalWidth === 0) return;

      context.clearRect(0, 0, canvas.width, canvas.height);

      // Cover-fit logic
      const scale = Math.max(
        canvas.width / img.width,
        canvas.height / img.height
      );
      
      const x = (canvas.width / 2) - (img.width / 2) * scale;
      const y = (canvas.height / 2) - (img.height / 2) * scale;
      
      context.drawImage(img, x, y, img.width * scale, img.height * scale);
    };

    let unsub = setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      if (typeof unsub === 'function') unsub();
    };
  }, [imagesLoaded, scrollYProgress]);

  // Use framer-motion to create some text animations synced with scroll
  const opacity1 = useTransform(scrollYProgress, [0.05, 0.15, 0.25], [0, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0.05, 0.15, 0.25], [50, 0, -50]);
  
  const opacity2 = useTransform(scrollYProgress, [0.4, 0.5, 0.6], [0, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.4, 0.5, 0.6], [50, 0, -50]);
  
  const opacity3 = useTransform(scrollYProgress, [0.75, 0.85, 0.95], [0, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.75, 0.85, 0.95], [50, 0, -50]);

  return (
    <section ref={containerRef} className="relative h-[400vh] bg-brand-surface w-full">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        
        {/* Loading State */}
        {!imagesLoaded && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-brand-surface z-20">
            <div className="w-16 h-16 border-4 border-brand-border border-t-brand-primary rounded-full animate-spin mb-4"></div>
            <p className="text-brand-brown font-medium">Loading Experience {loadingProgress}%</p>
          </div>
        )}

        <canvas 
          ref={canvasRef} 
          className="absolute inset-0 z-0 pointer-events-none"
        />

        {/* Overlay Content */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          <div className="container mx-auto px-6 h-full relative">
            
            <motion.div 
              style={{ opacity: opacity1, y: y1 }}
              className="absolute top-[25%] right-[10%] md:right-[20%] soft-card max-w-sm pointer-events-auto"
            >
              <h3 className="text-xl font-bold text-brand-primary mb-2">Carefully Selected Ingredients</h3>
              <p className="text-brand-text">Every product begins with nature. We meticulously source our grains, honeys, and raw materials to guarantee purity from the very first step.</p>
            </motion.div>

            <motion.div 
              style={{ opacity: opacity2, y: y2 }}
              className="absolute top-[50%] left-[10%] md:left-[15%] soft-card max-w-sm pointer-events-auto"
            >
              <h3 className="text-xl font-bold text-brand-accent mb-2">Modern Clean Processing</h3>
              <p className="text-brand-text">Our facility utilizes state-of-the-art hygiene protocols. Your family's safety is baked into our manufacturing standards.</p>
            </motion.div>

            <motion.div 
              style={{ opacity: opacity3, y: y3 }}
              className="absolute top-[75%] right-[10%] md:right-[20%] soft-card max-w-sm pointer-events-auto"
            >
              <h3 className="text-xl font-bold text-brand-primary mb-2">Crafted for Your Home</h3>
              <p className="text-brand-text">Warm, nourishing, and made for the morning table. Experience the trusted quality of AGRO MEL in every bite.</p>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductAnimation;
