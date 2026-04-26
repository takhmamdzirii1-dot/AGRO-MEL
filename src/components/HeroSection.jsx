import { useRef } from 'react';
import { motion } from 'framer-motion';
import ImageSequence from './ImageSequence';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 }
};

const HeroSection = () => {
  const sectionRef = useRef(null);

  return (
    <section ref={sectionRef} className="relative h-[260vh] bg-brand-black" id="home">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageSequence containerRef={sectionRef} />
        </div>

        <div className="absolute inset-0 z-10 bg-gradient-to-b from-brand-black/70 via-brand-black/35 to-brand-black/90" />
        <div className="absolute -top-20 left-1/3 z-10 h-72 w-72 rounded-full bg-brand-soft-green/20 blur-[120px]" />
        <div className="absolute bottom-0 right-0 z-10 h-80 w-80 rounded-full bg-brand-honey/20 blur-[140px]" />

        <div className="relative z-20 mx-auto flex h-full w-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-8">
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-brand-cream backdrop-blur-md"
            >
              Agro-Mel • Agroalimentaire Factory
            </motion.div>

            <motion.h1
              {...fadeUp}
              transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
              className="text-4xl font-serif font-bold leading-tight text-white sm:text-5xl md:text-7xl"
            >
              Modern Agro Production,
              <span className="text-gradient-gold block">Beautifully Crafted.</span>
            </motion.h1>

            <motion.p
              {...fadeUp}
              transition={{ duration: 0.75, delay: 0.3, ease: 'easeOut' }}
              className="max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg md:text-xl"
            >
              We transform premium natural ingredients into trusted agro-food products with strict quality control,
              advanced processing, and elegant presentation built for global markets.
            </motion.p>

            <motion.div
              {...fadeUp}
              transition={{ duration: 0.7, delay: 0.45, ease: 'easeOut' }}
              className="flex flex-col gap-4 sm:flex-row"
            >
              <a
                href="#products"
                className="rounded-full bg-brand-honey px-8 py-4 text-center text-sm font-semibold uppercase tracking-[0.18em] text-brand-black shadow-[0_12px_40px_rgba(217,154,43,0.35)] transition hover:scale-[1.02] hover:bg-yellow-400"
              >
                Explore Products
              </a>
              <a
                href="#contact"
                className="rounded-full border border-white/35 bg-white/5 px-8 py-4 text-center text-sm font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-sm transition hover:border-white/70 hover:bg-white/10"
              >
                Contact Our Factory
              </a>
            </motion.div>

            <motion.div
              {...fadeUp}
              transition={{ duration: 0.7, delay: 0.55, ease: 'easeOut' }}
              className="grid max-w-2xl grid-cols-1 gap-3 pt-3 text-sm text-brand-cream/90 sm:grid-cols-3"
            >
              <div className="rounded-2xl border border-white/15 bg-black/35 px-4 py-3 backdrop-blur-md">HACCP Standards</div>
              <div className="rounded-2xl border border-white/15 bg-black/35 px-4 py-3 backdrop-blur-md">Traceable Sourcing</div>
              <div className="rounded-2xl border border-white/15 bg-black/35 px-4 py-3 backdrop-blur-md">Export Ready Quality</div>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <p className="mb-2 text-[10px] uppercase tracking-[0.35em] text-white/70">Scroll to animate</p>
          <motion.div
            className="mx-auto h-12 w-px bg-gradient-to-b from-white to-transparent"
            animate={{ y: [0, 16, 0], opacity: [0.2, 1, 0.2] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </div>

      <div className="pointer-events-none h-[160vh]" />
    </section>
  );
};

export default HeroSection;
