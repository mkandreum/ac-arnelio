import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Dress } from '../types';
import { X, Camera } from 'lucide-react';

interface DetailViewProps {
  dress: Dress;
  onClose: () => void;
}

export default function DetailView({ dress, onClose }: DetailViewProps) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <motion.div 
      className="fixed inset-0 z-50 bg-[#FDFBF7] flex flex-col md:flex-row h-screen"
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <button 
        onClick={onClose}
        className="absolute top-8 right-8 z-50 p-2 text-brand-black hover:opacity-50 transition-opacity"
      >
        <X size={28} strokeWidth={1} />
      </button>

      {/* Image Area */}
      <div className="flex-1 relative bg-brand-bg md:border-r-[0.5px] border-brand-black/15 h-[40vh] md:h-full">
        <img 
          src={dress.thumbnailUrl} 
          alt={dress.name}
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Info Panel */}
      <div className="w-full md:w-[450px] lg:w-[500px] h-[60vh] md:h-full bg-brand-bg flex flex-col justify-between overflow-y-auto custom-scrollbar">
        <div className="p-8 md:p-16 pb-4">
          
          <span className="font-sans text-[9px] uppercase tracking-[0.2em] text-brand-gray mb-4 block">Detalle de pieza</span>
          
          <motion.h2 
            className="font-serif text-4xl md:text-5xl text-brand-navy mb-4 leading-none"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {dress.name}
          </motion.h2>
          
          <motion.div 
            className="font-sans text-brand-gray text-[14px] italic mb-10"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {dress.price.toLocaleString('es-ES')} €
          </motion.div>
          
          <motion.div 
            className="h-[0.5px] w-12 bg-brand-navy/30 mb-10"
            initial={{ width: 0 }}
            animate={{ width: 48 }}
            transition={{ delay: 0.5 }}
          />

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="w-full aspect-[4/5] overflow-hidden mb-10 border-[0.5px] border-brand-black/15 shadow-sm"
          >
             <img src={dress.thumbnailUrl} alt="Editorial view" className="w-full h-full object-cover" />
          </motion.div>

          <motion.div 
            className="space-y-6 text-brand-gray font-light font-sans"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <p className="leading-[1.8] text-[13px]">
              {dress.longDescription}
            </p>
            <p className="text-[11px] italic mt-8 text-brand-gray/80">
              {dress.shortDescription}
            </p>
          </motion.div>
        </div>

        <div className="p-8 md:p-16 pt-8 bg-gradient-to-t from-[#FDFBF7] via-[#FDFBF7] to-transparent sticky bottom-0">
          <div className="flex flex-col space-y-4">
            <button 
              onClick={onClose}
              className="w-full py-4 bg-brand-navy text-white font-sans text-[10px] uppercase tracking-[0.2em] rounded-full hover:bg-brand-accent transition-colors shadow-md"
            >
              Volver al Catálogo
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
