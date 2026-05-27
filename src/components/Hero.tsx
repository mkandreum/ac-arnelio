import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

interface HeroProps {
  onScrollToCatalog: () => void;
}

export default function Hero({ onScrollToCatalog }: HeroProps) {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 150]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -100]);
  const y3 = useTransform(scrollY, [0, 1000], [0, 80]);

  const phrases = ["a medida.", "artesanal.", "de autor.", "para la mujer real."];
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullText = phrases[textIndex];
    let timing = isDeleting ? 75 : 150;

    if (!isDeleting && displayText === currentFullText) {
      timing = 3000; // Pause at end of word
      setTimeout(() => setIsDeleting(true), timing);
      return;
    }

    if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % phrases.length);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayText(prev => 
        isDeleting 
          ? currentFullText.substring(0, prev.length - 1)
          : currentFullText.substring(0, prev.length + 1)
      );
    }, timing);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, textIndex]);

  return (
    <section className="relative min-h-[110vh] sm:min-h-[115vh] md:min-h-[120vh] w-full pt-[140px] sm:pt-[160px] md:pt-36 pb-24 px-4 sm:px-6 md:px-12 flex flex-col justify-center overflow-hidden bg-brand-bg">
      
      {/* Editorial Title, Subtitle, and Buttons Centered Over Absolute Elements */}
      <div className="z-20 w-full flex flex-col items-center justify-center text-center relative min-h-[290px] md:min-h-[450px]">
         <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center justify-center w-full"
         >
           <h1 className="font-serif text-[4.2rem] sm:text-[5.8rem] md:text-[8rem] lg:text-[11rem] leading-[0.85] text-brand-navy tracking-tighter mix-blend-multiply flex flex-col items-center justify-center text-center">
             <span className="block mb-2 md:mb-4">Moda</span>
             <span className="relative flex items-center justify-center text-center">
               <span>{displayText}</span>
               <span className="inline-block w-[4px] md:w-[8px] h-[0.7em] bg-brand-navy animate-pulse ml-1.5 md:ml-4 translate-y-0.5 md:translate-y-2" />
             </span>
           </h1>
           
           <p className="font-sans text-[9px] md:text-[12px] uppercase tracking-[0.4em] text-brand-gray mt-5 md:mt-12">
             Conoce nuestras colecciones
           </p>

           {/* Buttons positioned cleanly below description - fully clickable & stylized */}
           <div className="mt-8 md:mt-16 flex flex-row items-center justify-center gap-3 sm:gap-4 z-30 relative pointer-events-auto w-full max-w-md px-4">
             <button
               onClick={onScrollToCatalog}
               className="flex-1 sm:flex-none px-6 md:px-10 py-3.5 md:py-5 bg-brand-navy text-white font-sans text-[9px] md:text-[10px] uppercase tracking-[0.25em] rounded-none border-[0.5px] border-brand-navy hover:bg-transparent hover:text-brand-navy transition-all duration-350 shadow-sm cursor-pointer text-center font-medium"
             >
               Ver más
             </button>
             <button
               onClick={() => document.getElementById('medida')?.scrollIntoView({ behavior: 'smooth' })}
               className="flex-1 sm:flex-none px-6 md:px-10 py-3.5 md:py-5 bg-white/90 border-[0.5px] border-brand-navy text-brand-navy font-sans text-[9px] md:text-[10px] uppercase tracking-[0.25em] rounded-none hover:bg-brand-navy hover:text-white transition-all duration-350 backdrop-blur-sm cursor-pointer text-center font-semibold"
             >
               Consígalo ahora
             </button>
           </div>
         </motion.div>
      </div>

      {/* Layered Absolute Media Assets (Fully Responsive absolute backdrops with pointer-events-none) */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        
        {/* Left Image (Drafts & Textures) */}
        <motion.div 
          style={{ y: y1 }}
          className="absolute left-[4%] sm:left-[8%] top-[14%] sm:top-[18%] md:top-[12%] w-[42%] sm:w-[35%] md:w-[25%] aspect-[3/4] overflow-hidden rounded-sm border-[0.5px] border-brand-black/10 bg-white shadow-sm opacity-70 md:opacity-100"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 0.70, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
        >
          <img 
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=1200" 
            alt="Detalle tejido" 
            className="w-full h-full object-cover grayscale opacity-85"
          />
        </motion.div>

        {/* Right Video (Dynamic Fashion Loop) */}
        <motion.div 
          style={{ y: y2 }}
          className="absolute right-[4%] sm:right-[8%] top-[38%] sm:top-[36%] md:top-[20%] w-[58%] sm:w-[50%] md:w-[30%] aspect-[4/5] overflow-hidden shadow-xl border-[0.5px] border-brand-black/10 bg-brand-bg rounded-sm opacity-[0.85] md:opacity-100"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 0.85, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.4 }}
        >
          <iframe 
            src="https://player.vimeo.com/video/174645690?autoplay=1&loop=1&title=0&byline=0&portrait=0&muted=1&background=1&quality=720p" 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220%] h-[130%] pointer-events-none blur-[0.5px] sepia-[0.15] contrast-[1.05] brightness-[1.02] opacity-85 saturate-[0.8]"
            frameBorder="0" 
            allow="autoplay; fullscreen" 
            title="Couture video loop backdrop"
          />
        </motion.div>

        {/* Center Bottom Image (High Fashion Model) */}
        <motion.div 
          style={{ y: y3 }}
          className="absolute left-[16%] sm:left-[20%] bottom-[16%] sm:bottom-[18%] md:bottom-[5%] md:left-[40%] w-[42%] sm:w-[32%] md:w-[22%] aspect-[3/4] overflow-hidden rounded-sm border-[0.5px] border-brand-black/10 bg-white shadow-sm opacity-75 md:opacity-100"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 0.75, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.6 }}
        >
          <img 
            src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=1400" 
            alt="Diseño de costura" 
            className="w-full h-full object-cover sepia-[0.1]"
          />
        </motion.div>
      </div>

    </section>
  );
}
