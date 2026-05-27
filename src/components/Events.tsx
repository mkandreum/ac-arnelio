import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { EVENTS } from '../data';
import { EventInfo } from '../types';
import { X } from 'lucide-react';

export default function Events() {
  const [selectedEvent, setSelectedEvent] = useState<EventInfo | null>(null);

  return (
    <section id="eventos" className="scroll-mt-28 py-20 lg:py-32 bg-brand-bg relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-24 pb-6 relative mt-12">
          <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-brand-gray absolute -top-10 left-1 hidden md:block">Prensa y Encuentros</span>
          <h2 className="font-serif text-6xl md:text-8xl text-brand-navy tracking-tighter leading-none mix-blend-multiply flex flex-col">
            Colocando <span className="italic font-light opacity-80 md:ml-24">la Aguja</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
          {EVENTS.map((evt, idx) => (
            <motion.div 
              key={evt.id}
              className={`group cursor-pointer flex flex-col ${idx % 2 === 1 ? 'md:mt-32' : 'md:mb-32'}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
              onClick={() => setSelectedEvent(evt)}
            >
              <div className={`overflow-hidden mb-8 border-[0.5px] border-brand-black/15 ${idx % 2 === 0 ? 'aspect-[4/3]' : 'aspect-[3/4]'}`}>
                <img 
                  src={evt.imageUrl} 
                  alt={evt.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s]"
                />
              </div>
              <div className="flex flex-col space-y-3">
                <span className="font-sans text-brand-gray text-[9px] uppercase tracking-[0.2em]">{evt.date}</span>
                <h3 className="font-serif text-2xl tracking-wide text-brand-navy group-hover:text-brand-accent transition-colors">{evt.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedEvent && (
          <motion.div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-brand-bg/95 backdrop-blur-md" onClick={() => setSelectedEvent(null)} />
            
            <motion.div 
              className="relative w-full max-w-5xl bg-[#FDFBF7] border-[0.5px] border-brand-black/15 shadow-2xl overflow-hidden flex flex-col md:flex-row h-full md:h-auto max-h-full"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
            >
              <button 
                onClick={() => setSelectedEvent(null)}
                className="absolute top-6 right-6 z-10 p-2 text-brand-black hover:opacity-50 transition-opacity"
              >
                <X size={24} strokeWidth={1} />
              </button>
              
              <div className="w-full md:w-1/2 h-64 md:h-[600px] border-b md:border-b-0 md:border-r border-brand-black/15">
                <img src={selectedEvent.imageUrl} alt={selectedEvent.title} className="w-full h-full object-cover" />
              </div>
              
              <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center overflow-y-auto">
                <span className="font-sans text-brand-gray text-[9px] uppercase tracking-[0.2em] mb-4">{selectedEvent.date}</span>
                <h3 className="font-serif text-3xl md:text-4xl tracking-wide text-brand-black mb-8">{selectedEvent.title}</h3>
                <div className="w-12 h-[0.5px] bg-brand-accent/50 mb-8"></div>
                
                <p className="font-sans text-[13px] text-brand-gray font-light leading-relaxed mb-6">
                  {selectedEvent.description}
                </p>
                <p className="font-sans text-[13px] text-brand-gray font-light leading-relaxed">
                   En colaboración con artesanos locales, descubrimos texturas y volúmenes en entornos excepcionales. La moda entendida como un diálogo constante.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
