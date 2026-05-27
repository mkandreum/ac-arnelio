import React from 'react';
import { motion } from 'motion/react';

export default function Workshop() {
  const images = [
    {
      src: 'https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80&w=1600',
      alt: 'Atelier',
      className: 'col-span-2 md:col-span-2 row-span-2 md:row-span-2 aspect-square md:aspect-auto'
    },
    {
      src: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&q=80&w=1200',
      alt: 'Bocetos',
      className: 'col-span-1 md:col-span-1 row-span-1 md:row-span-1 aspect-[4/3] md:aspect-auto'
    },
    {
      src: 'https://images.unsplash.com/photo-1509631179647-0c114514616c?auto=format&fit=crop&q=80&w=1200',
      alt: 'Costura',
      className: 'col-span-1 md:col-span-1 row-span-1 md:row-span-1 aspect-[4/3] md:aspect-auto'
    },
    {
      src: 'https://images.unsplash.com/photo-1485230895905-9af82df3b05a?auto=format&fit=crop&q=80&w=1200',
      alt: 'Texturas',
      className: 'col-span-2 md:col-span-2 row-span-1 md:row-span-1 aspect-[21/9] md:aspect-auto'
    }
  ];

  return (
    <section id="proceso" className="scroll-mt-28 py-20 lg:py-32 bg-brand-bg relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-end pb-6 relative mt-12">
          <div>
            <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-brand-gray absolute -top-10 left-1 hidden md:block">Proceso Artesanal</span>
            <h2 className="font-serif text-5xl md:text-8xl text-brand-navy tracking-tighter leading-none mix-blend-multiply">
              En el <span className="italic font-light opacity-80">Taller</span>
            </h2>
          </div>
          <p className="font-sans text-brand-gray text-[14px] md:text-[15px] font-light mt-8 md:mt-0 md:max-w-xs md:text-right leading-relaxed">
            Cada pieza nace de un lienzo en blanco, esculpida a través de horas de precisión, paciencia y visión.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-[repeat(4,120px)] md:grid-rows-3 gap-2 md:gap-4 md:h-[800px] h-auto">
          {images.map((img, idx) => (
            <motion.div 
              key={idx}
              className={`group overflow-hidden bg-white ${img.className}`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <div className="w-full h-full relative overflow-hidden">
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out"
                />
                <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="font-sans text-[9px] uppercase tracking-widest bg-white/90 backdrop-blur-sm px-4 py-2 text-brand-black border-[0.5px] border-brand-black/15">
                    {img.alt}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Materiales Section */}
        <div id="materiales" className="scroll-mt-28 mt-24 lg:mt-32 pt-20 lg:pt-32 border-t-[0.5px] border-brand-black/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            
            {/* Left Column: Image of design table with sketches, scissors and pencil */}
            <div className="lg:col-span-6">
              <div className="aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] overflow-hidden bg-white border-[0.5px] border-brand-black/15 shadow-lg relative group">
                <img 
                  src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1200&auto=format&fit=crop" 
                  alt="Varios dibujos de vestidos están sobre una mesa con tijeras y un lápiz" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2.5s] ease-out"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-brand-bg/95 backdrop-blur-md px-6 py-4 border-[0.5px] border-brand-black/10">
                  <span className="font-serif italic text-xs text-brand-gray/80">Varios dibujos de vestidos están sobre una mesa con tijeras y un lápiz.</span>
                </div>
              </div>
            </div>
            
            {/* Right Column: Text Information */}
            <div className="lg:col-span-6 space-y-6">
              <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-brand-gray block">Calidad y tendencia</span>
              <h3 className="font-serif text-4xl lg:text-5xl text-brand-navy tracking-tight leading-tight">
                Materiales de <span className="italic font-light opacity-80">Alta Costura</span>
              </h3>
              <div className="w-12 h-[1px] bg-brand-navy/30"></div>
              
              <div className="font-sans text-[14px] text-brand-gray leading-[2] font-light space-y-4">
                <p>
                  Nuestra fórmula de éxito para ofrecer un diseño diferente, y adaptado personalmente a cada una de nuestras clientas se encuentra en nuestros materiales. Los diferentes tejidos, fornituras, adornos, remates que empleamos en cada uno de nuestros diseños hacen de cada uno de ellos piezas exclusivas, llenas de personalidad.
                </p>
                <p>
                  Trabajamos con firmas prestigiosas de primer nivel como <strong className="font-medium text-brand-navy">Ribes&Casals, Descad, Elite Textil…</strong> sus amplios catálogos me inspiran multitud de ideas que me permiten explorar mi creatividad.
                </p>
                <p>
                  Actualmente uno de nuestros principales proveedores es <strong className="font-medium text-brand-navy">Rafael Matías</strong>, una firma textil bilbaína de 60 años de tradición, con la que estamos colaborando activamente en diferentes proyectos coordinados.
                </p>
              </div>

              <div className="pt-2">
                <button 
                  onClick={() => document.getElementById('medida')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-6 py-3 bg-brand-navy text-white hover:bg-brand-accent hover:text-brand-navy transition-all duration-300 font-sans text-[9px] uppercase tracking-[0.2em] rounded-full shadow-sm cursor-pointer pointer-events-auto inline-block"
                >
                  Inspírate con nuestra colección
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
