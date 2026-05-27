import React from 'react';
import { motion } from 'motion/react';

export default function Fantasy() {
  return (
    <section id="fantasia" className="scroll-mt-28 py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Background soft lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-accent/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-24">
        {/* Costumes Image Frame */}
        <motion.div 
          className="w-full lg:w-5/12 relative mt-4 md:mt-0"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <div className="aspect-[3/4] overflow-hidden bg-brand-bg relative z-10 border-[0.5px] border-brand-black/10 shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1518834107812-67b0b7c58434?q=80&w=1200&auto=format&fit=crop" 
              alt="Modelos de fantasía y arte escénico" 
              className="object-cover w-full h-full scale-100 hover:scale-105 transition-transform duration-[3s] sepia-[0.05]"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md px-4 py-3 border-[0.5px] border-brand-black/10 text-[11px] text-brand-black leading-relaxed">
              <span className="font-serif italic text-brand-gray/80">Una mujer con un traje colorido está de pie junto a una estatua de un caballo.</span>
            </div>
          </div>
          <div className="absolute top-8 -right-8 bottom-8 -left-8 border-[0.5px] border-brand-navy/15 z-0 hidden lg:block pointer-events-none"></div>
        </motion.div>

        {/* Fantasy Text Content */}
        <motion.div 
          className="w-full lg:w-7/12 flex flex-col justify-center space-y-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-brand-gray block">Creatividad sin límites</span>
          
          <h2 className="font-serif text-5xl lg:text-7xl tracking-tighter text-brand-navy leading-none">
            Moda de <span className="italic font-light opacity-80">Fantasía</span>
          </h2>
          
          <span className="font-serif italic text-2xl lg:text-3xl font-light text-brand-gray/80 leading-relaxed block">
            Creamos vestuario a tu medida para proyectos artísticos
          </span>

          <div className="w-16 h-[1px] bg-brand-navy/30"></div>
          
          <div className="font-sans text-[14px] text-brand-gray leading-[2] font-light space-y-4 md:max-w-xl">
            <h4 className="font-serif italic text-xl text-brand-navy font-semibold">¡La vida es un carnaval!</h4>
            <p>
              Disfruto y vivo cada carnaval con auténtica pasión. En lo personal me ha permitido encontrar a grandes amigos, a través de los grupos y peñas con los que he trabajado. En lo profesional me permite explorar y dar rienda suelta a mi imaginación. Trabajar con formas sinuosas, volúmenes imposibles, remates inimaginables...
            </p>
            <p>
              Me gusta encontrar proyectos diferentes para seguir explorando y creciendo profesionalmente en el mundo de la costura, como en proyectos significativos como <strong className="font-medium text-brand-navy">Rodaje Sancho</strong>, obras de teatro, musicales, bailes, fiestas y producciones artísticas de gran escala.
            </p>
            <p className="font-serif italic text-base text-brand-navy pt-2">
              Vive mi creatividad en estado puro: la esencia de lo mágico en cada producción. Cuéntanos tu idea artística y diseñaremos una propuesta inolvidable.
            </p>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row gap-4">
            <button 
              type="button"
              onClick={() => document.getElementById('medida')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-brand-navy border border-brand-navy text-white hover:bg-brand-accent hover:text-brand-navy rounded-full font-sans text-[10px] uppercase tracking-[0.2em] transition-all duration-300 shadow-md inline-block cursor-pointer pointer-events-auto text-center"
            >
              Cuéntame tu idea artística
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
