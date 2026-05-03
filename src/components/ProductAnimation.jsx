import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const ProductAnimation = () => {
  const { t } = useLanguage();
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [posterLoaded, setPosterLoaded] = useState(false);
  
  const frameCount = 120;
  const imagesRef = useRef([]);

  // Load first frame immediately, then background load the rest
  useEffect(() => {
    const images = new Array(frameCount);
    
    // Load frame 1
    const firstImg = new Image();
    firstImg.src = `/assets/frames/frame_0001.jpg`;
    firstImg.onload = () => {
      images[0] = firstImg;
      imagesRef.current = images;
      setPosterLoaded(true);
      
      // Now lazy-load the rest in the background
      for (let i = 2; i <= frameCount; i++) {
        const img = new Image();
        const frameIndex = i.toString().padStart(4, '0');
        img.src = `/assets/frames/frame_${frameIndex}.jpg`;
        images[i - 1] = img;
      }
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useEffect(() => {
    if (!posterLoaded || !canvasRef.current || !imagesRef.current[0]) return;

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
      
      let img = imagesRef.current[frameIndex];
      
      // If the target frame isn't loaded, search backwards for the nearest loaded frame
      if (!img || !img.complete || img.naturalWidth === 0) {
        let found = false;
        for (let i = frameIndex - 1; i >= 0; i--) {
          if (imagesRef.current[i] && imagesRef.current[i].complete && imagesRef.current[i].naturalWidth > 0) {
            img = imagesRef.current[i];
            found = true;
            break;
          }
        }
        if (!found) return; // shouldn't happen since frame 0 is always loaded
      }

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
  }, [posterLoaded, scrollYProgress]);

  // Use framer-motion to create some text animations synced with scroll
  const opacity1 = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.1], [0, -50]);
  
  const opacity2 = useTransform(scrollYProgress, [0.4, 0.5, 0.6], [0, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.4, 0.5, 0.6], [50, 0, -50]);
  
  const opacity3 = useTransform(scrollYProgress, [0.75, 0.85, 0.95], [0, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.75, 0.85, 0.95], [50, 0, -50]);

  return (
    <section ref={containerRef} className="relative h-[400vh] bg-brand-surface w-full">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        


        <canvas 
          ref={canvasRef} 
          className="absolute inset-0 z-0 pointer-events-none"
        />

        {/* Overlay Content */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          <div className="container mx-auto px-6 h-full relative">
            
            <motion.div 
              style={{ opacity: opacity1, y: y1 }}
              className="absolute bottom-[10%] left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none"
            >
              <div className="glass-panel px-6 py-4 rounded-full flex flex-col items-center shadow-[0_10px_40px_rgba(0,0,0,0.15)] bg-white/80 backdrop-blur-md border border-white/50">
                <span className="text-brand-text font-bold text-xs tracking-[0.2em] uppercase mb-2">Glissez vers le bas</span>
                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ChevronDown className="w-6 h-6 text-brand-primary" />
                </motion.div>
              </div>
            </motion.div>

            <motion.div 
              style={{ opacity: opacity2, y: y2 }}
              className="absolute top-[50%] left-[10%] md:left-[15%] glass-panel-strong p-8 max-w-sm pointer-events-auto"
            >
              <h3 className="text-xl font-bold text-brand-accent mb-2">Modern Clean Processing</h3>
              <p className="text-brand-text">Our facility utilizes state-of-the-art hygiene protocols. Your family's safety is baked into our manufacturing standards.</p>
            </motion.div>

            <motion.div 
              style={{ opacity: opacity3, y: y3 }}
              className="absolute top-[75%] right-[10%] md:right-[20%] glass-panel-strong p-8 max-w-sm pointer-events-auto"
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
