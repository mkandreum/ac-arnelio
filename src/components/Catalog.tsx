import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CATALOG } from '../data';
import { Dress } from '../types';
import { Search } from 'lucide-react';

interface CatalogProps {
  onSelectDress: (dress: Dress) => void;
}

export default function Catalog({ onSelectDress }: CatalogProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCatalog = CATALOG.filter(dress => 
    dress.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    dress.shortDescription.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="coleccion" className="scroll-mt-28 py-20 lg:py-32 bg-brand-bg relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 pb-6 border-b-[0.5px] border-brand-black/10">
          <div className="w-full md:max-w-xl mb-6 md:mb-0 relative">
             <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-brand-gray absolute -top-10 left-1 hidden md:block">Colección de Autor</span>
             <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl text-brand-navy tracking-tighter leading-none mix-blend-multiply mb-6">
               Modelos <br/><span className="italic font-light opacity-80">Exclusivos</span>
             </h2>
             <p className="font-sans text-brand-gray text-[14px] leading-[1.8] font-light max-w-md">
               Nos complace hacer sentir con cada modelo la exclusividad que proporciona el diseño a medida. Creamos colecciones de prendas únicas, confeccionadas artesanalmente para adaptarse a cada cuerpo y estilo particular.
             </p>
          </div>
          
          <div className="relative w-full md:w-64">
            <input 
              type="text" 
              placeholder="Buscar por estilo..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full border-b-[0.5px] border-brand-black/15 pb-2 bg-transparent outline-none focus:border-brand-black transition-colors font-sans text-[11px] text-brand-black uppercase tracking-widest placeholder-brand-gray/50 pr-8"
            />
            <Search className="absolute right-0 top-0 text-brand-gray/50" size={14} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 md:gap-y-0 h-auto">
          {filteredCatalog.map((dress, index) => (
            <motion.div 
              key={dress.id}
              className={`group cursor-pointer flex flex-col ${index % 2 === 1 ? 'md:mt-32' : 'md:mb-32'}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              onClick={() => onSelectDress(dress)}
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-white border-[0.5px] border-brand-black/15 mb-6 shadow-sm">
                <img 
                  src={dress.thumbnailUrl} 
                  alt={dress.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s]"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-brand-black/10">
                  <span className="font-sans text-[10px] uppercase tracking-[0.2em] bg-white/90 backdrop-blur-sm text-brand-black px-6 py-3 border-[0.5px] border-brand-black/15">
                    Vista 360º
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-baseline mb-3">
                <h3 className="font-serif text-3xl font-light tracking-wide text-brand-navy transition-colors">{dress.name}</h3>
                <span className="font-sans text-[11px] uppercase tracking-widest text-brand-gray">Desde {dress.price.toLocaleString('es-ES')} €</span>
              </div>
              <p className="font-sans text-brand-gray text-[12px] font-light leading-relaxed max-w-sm mt-1">
                {dress.shortDescription}
              </p>
            </motion.div>
          ))}
          {filteredCatalog.length === 0 && (
            <div className="col-span-full py-24 text-center text-brand-gray font-sans text-sm italic">
              No se encontraron diseños que coincidan con la búsqueda.
            </div>
          )}
        </div>

        {/* Editorial Subsections: Antología, Comunión, Accesorios */}
        <div className="mt-20 lg:mt-32 border-t-[0.5px] border-brand-black/10 pt-20 lg:pt-32 space-y-24 lg:space-y-40">
          
          {/* Antología Block */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-brand-gray block">Boutique de Autor</span>
              <h3 className="font-serif text-4xl lg:text-5xl text-brand-navy tracking-tight leading-tight">
                Antología <br/>
                <span className="italic font-light text-brand-gray/80 text-2xl lg:text-3xl">“Cada diseño lleva tu nombre”</span>
              </h3>
              <div className="w-12 h-[1px] bg-brand-navy/30"></div>
              
              <div className="font-sans text-[13px] text-brand-gray leading-[2] font-light space-y-4">
                <p>
                  Nos gusta seguir las tendencias actuales, trabajar con los mejores materiales, y confeccionar cada diseño de manera artesanal. El resultado son piezas únicas. Nos complace hacer sentir con cada modelo la exclusividad que proporciona el diseño a medida.
                </p>
                <p>
                  Las colecciones cada año las marcan nuestros clientes. Cada diseño lleva tu nombre. Cada puntada lleva el sello de la dedicación y el cariño. Queremos acompañarte en los mayores acontecimientos de tu vida. Son nuestra motivación de aprender, y superarnos cada temporada.
                </p>
                <p className="font-serif italic text-lg text-brand-navy pt-2">
                  Nos encanta hacer realidad la idea que tienes en mente. Porque en nuestro taller todo es posible.
                </p>
              </div>

              <div className="pt-2">
                <button 
                  onClick={() => document.getElementById('medida')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-6 py-3 bg-brand-navy text-white hover:bg-brand-accent hover:text-brand-navy transition-all duration-300 font-sans text-[9px] uppercase tracking-[0.2em] rounded-full shadow-sm cursor-pointer pointer-events-auto"
                >
                  Confección a medida
                </button>
              </div>
            </div>
            
            <div className="lg:col-span-6">
              <div className="aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] overflow-hidden bg-brand-accent/5 border-[0.5px] border-brand-black/10 shadow-lg relative group">
                <img 
                  src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1200&auto=format&fit=crop" 
                  alt="Antología de diseño Arnelio Cruz"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s]"
                />
              </div>
            </div>
          </div>

          {/* Comunión y Ceremonia Block */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            
            {/* On mobile we want the text first, in desktop we put it on the right to alternate */}
            <div className="lg:col-span-6 lg:order-2 space-y-6">
              <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-brand-gray block">Línea Infantil y Juvenil</span>
              <h3 className="font-serif text-4xl lg:text-5xl text-brand-navy tracking-tight leading-tight">
                Comunión y Ceremonia <br/>
                <span className="italic font-light text-brand-gray/80 text-2xl lg:text-3xl">Pequeños eventos, grandes protagonistas</span>
              </h3>
              <div className="w-12 h-[1px] bg-brand-navy/30"></div>
              
              <div className="font-sans text-[13px] text-brand-gray leading-[2] font-light space-y-4">
                <p>
                  Nos adaptamos a cada niño o niña. Diseñamos para cada ocasión. Cuidamos con mimo cada detalle, utilizando los más nobles materiales con acabados preciosos, y guiños de alta moda.
                </p>
                <p>
                  Me encanta trabajar con niños y hacerlos partícipes del diseño de su modelo. Es una experiencia muy divertida que enriquece nuestro trabajo, y nos permite explorar desde la genialidad de los más pequeños.
                </p>
              </div>

              <div className="pt-2">
                <button 
                  onClick={() => document.getElementById('medida')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-6 py-3 border border-brand-navy hover:bg-brand-navy hover:text-white text-brand-navy transition-all duration-300 font-sans text-[9px] uppercase tracking-[0.2em] rounded-full cursor-pointer pointer-events-auto"
                >
                  Ver más / Solicitar cita
                </button>
              </div>
            </div>
            
            <div className="lg:col-span-6 lg:order-1">
              <div className="aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] overflow-hidden bg-brand-accent/5 border-[0.5px] border-brand-black/10 shadow-lg relative group">
                <img 
                  src="https://images.unsplash.com/photo-1560506840-ec74fad83016?q=80&w=1200&auto=format&fit=crop" 
                  alt="Diseños de Comunión y Ceremonia Infantil Arnelio Cruz"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s]"
                />
              </div>
            </div>
          </div>

          {/* Accesorios Block */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-brand-gray block">Complementos Exclusivos</span>
              <h3 className="font-serif text-4xl lg:text-5xl text-brand-navy tracking-tight leading-tight">
                Accesorios <br/>
                <span className="italic font-light text-brand-gray/80 text-2xl lg:text-3xl">Completando el “look”</span>
              </h3>
              <div className="w-12 h-[1px] bg-brand-navy/30"></div>
              
              <div className="font-sans text-[13px] text-brand-gray leading-[2] font-light space-y-4">
                <p>
                  Indago y me pierdo por ferias, marcas artesanas, y tiendas exclusivas para presentarte la mejor tendencia en accesorios. No son un simple complemento. Definen el estilismo, y proporcionan personalidad a cada diseño. Son una herramienta esencial que define la propia identidad y estética de quien los porta.
                </p>
                <p>
                  En nuestra tienda encontrarás un amplio abanico de estos elementos. Bolsos para cada ocasión, bisutería, fornituras y adornos exclusivos. Lo más novedoso de esta temporada son los tocados realizados a medida en nuestro taller.
                </p>
                <p>
                  Visítanos y disfruta de nuestra colección de accesorios y tocados. Siempre contarás con nuestro asesoramiento para completar tu estilismo.
                </p>
              </div>

              <div className="pt-2">
                <button 
                  onClick={() => document.getElementById('medida')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-6 py-3 border border-brand-navy hover:bg-brand-navy hover:text-white text-brand-navy transition-all duration-300 font-sans text-[9px] uppercase tracking-[0.2em] rounded-full cursor-pointer pointer-events-auto"
                >
                  Ver más Colecciones
                </button>
              </div>
            </div>
            
            <div className="lg:col-span-6">
              <div className="aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] overflow-hidden bg-brand-accent/5 border-[0.5px] border-brand-black/10 shadow-lg relative group">
                <img 
                  src="https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=1200&auto=format&fit=crop" 
                  alt="Alta tocados y accesorios boutique"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s]"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
