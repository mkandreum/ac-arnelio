import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Heart, Award } from 'lucide-react';

export default function About() {
  return (
    <section id="arnelio-cruz" className="scroll-mt-28 py-20 lg:py-32 bg-brand-bg relative overflow-hidden border-t-[0.5px] border-brand-black/10">
      
      {/* Decorative background details */}
      <div className="absolute top-[20%] left-[-10%] w-[400px] h-[400px] bg-brand-accent/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[500px] h-[500px] bg-brand-navy/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Editorial Section Title */}
        <div className="mb-10 sm:mb-14 lg:mb-20 text-center relative z-10">
          <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-brand-gray block mb-3 sm:mb-4">El Diseñador</span>
          <h2 className="font-serif text-5xl lg:text-7xl tracking-tight text-brand-navy leading-none">
            Arnelio Cruz <span className="italic font-light opacity-85">– modisto</span>
          </h2>
          <div className="w-16 h-[1px] bg-brand-navy/30 mx-auto mt-5 sm:mt-6"></div>
        </div>

        {/* Story Spread: Photo & Biography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start mb-24 relative z-10">
          
          {/* Left Column: Portrait Frame in Black & White */}
          <motion.div 
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="aspect-[3/4] overflow-hidden bg-brand-accent/10 relative z-10 shadow-xl border-[0.5px] border-brand-black/10">
              <img 
                src="https://le-de.cdn-website.com/2403c1aeb6a246a78ff37dde6154e0bd/dms3rep/multi/opt/arnelio_cruz_presentacion-1920w.jpg" 
                alt="Arnelio Cruz con cinta métrica" 
                className="object-cover w-full h-full grayscale contrast-[1.12] brightness-[0.96] hover:grayscale-0 transition-all duration-[2s] sepia-[0.05]"
              />
            </div>
            {/* Elegant outer frame line */}
            <div className="absolute top-6 -right-6 bottom-6 -left-6 border-[0.5px] border-brand-navy/15 z-0 hidden lg:block pointer-events-none"></div>
            
            {/* Legend / Quote under the photo */}
            <div className="mt-8 text-center pt-4 lg:text-left">
              <p className="font-serif italic text-lg lg:text-xl text-brand-navy/95 leading-relaxed relative pl-4 lg:border-l-2 lg:border-brand-accent">
                “Adéntrate conmigo en una explosión de creatividad, pasión y dedicación a la costura, que es mi mundo”
              </p>
              <span className="font-sans text-[9px] uppercase tracking-[0.2em] text-brand-gray block mt-2">— Arnelio Cruz</span>
            </div>
          </motion.div>

          {/* Right Column: Editorial Memoir */}
          <motion.div 
            className="lg:col-span-7 space-y-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="font-sans text-[10px] uppercase tracking-[0.3em] font-medium text-brand-navy block bg-brand-accent/10 px-3 py-1.5 rounded-full inline-block">
              "Crecí rodeado de hilos y botones"
            </span>

            <div className="font-sans text-[14px] text-brand-gray leading-[2.1] font-light space-y-6">
              <p>
                De pequeño observaba a mi madre elaborar camisas, vestidos, faldas… Su pasión y dedicación a la costura fue, y es, mi mayor referente. Mis primeros trazos con un lápiz fueron figurines femeninos, llenos de colores y formas. Cada retal de tela que caía en mis manos lo transformaba en modelos de alta costura para las muñecas de mi hermana Elena.
              </p>

              <p>
                Estudié moda en Madrid, donde mis prácticas me permitieron aprender de grandes referentes y diseñadores prestigiosos de la talla de <span className="font-medium text-brand-navy">Ágata Ruiz de la Prada</span>, <span className="font-medium text-brand-navy">Justo Algaba</span>, <span className="font-medium text-brand-navy">Vacas Flacas</span> y <span className="font-medium text-brand-navy">Manuel Fernández</span>.
              </p>

              <p>
                Posteriormente trabajé en <span className="font-medium text-brand-navy">Román y Compañía</span>, una productora de amplio reconocimiento nacional e internacional, especializada en la creación y producción de contenidos con títeres y muñecos para teatro, cine, televisión y campañas de publicidad.
              </p>

              <p>
                Desde <span className="font-medium text-brand-navy">1998</span>, mantengo abierto mi propio taller artesanal en <span className="font-medium text-brand-navy">Villarta de San Juan (Ciudad Real)</span>, mi pueblo natal. 
              </p>

              <p className="font-serif italic text-lg text-brand-navy leading-relaxed pt-2">
                Hoy por hoy, vivo la costura no sólo como un trabajo, sino como una auténtica pasión. Es el motor que me hace despertar día a día con la mayor de las ilusiones y me motiva a superarme en cada nuevo proyecto.
              </p>
            </div>

            {/* Core commitments progress lines */}
            <div className="space-y-6 pt-6 border-t-[0.5px] border-brand-black/10">
              {/* Metric 1 */}
              <div>
                <div className="flex justify-between items-center mb-2 font-sans text-[11px] uppercase tracking-wider text-brand-navy font-semibold">
                  <span>Confección a medida</span>
                  <span>100%</span>
                </div>
                <div className="w-full h-[3px] bg-brand-accent/25 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-brand-navy"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                  />
                </div>
              </div>

              {/* Metric 2 */}
              <div>
                <div className="flex justify-between items-center mb-2 font-sans text-[11px] uppercase tracking-wider text-brand-navy font-semibold">
                  <span>Innovación en Diseño</span>
                  <span>100%</span>
                </div>
                <div className="w-full h-[3px] bg-brand-accent/25 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-brand-navy"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.1, ease: "easeInOut" }}
                  />
                </div>
              </div>

              {/* Metric 3 */}
              <div>
                <div className="flex justify-between items-center mb-2 font-sans text-[11px] uppercase tracking-wider text-brand-navy font-semibold">
                  <span>Compromiso Artesano</span>
                  <span>100%</span>
                </div>
                <div className="w-full h-[3px] bg-brand-accent/25 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-brand-navy"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.2, ease: "easeInOut" }}
                  />
                </div>
              </div>
            </div>

            {/* Aesthetic tags */}
            <div className="flex flex-wrap gap-2.5 pt-4">
              {[
                "Costura Arnelio Cruz", 
                "Confección a medida", 
                "Moda exclusiva", 
                "Arnelio Cruz Moda Artesanal", 
                "Materiales de primera", 
                "Arte y confección"
              ].map((tag, idx) => (
                <span 
                  key={idx} 
                  className="px-3.5 py-1.5 border-[0.5px] border-brand-navy/15 text-brand-gray font-sans text-[11px] rounded-full hover:border-brand-navy hover:text-brand-navy transition-colors duration-300"
                >
                  {tag}
                </span>
              ))}
            </div>

          </motion.div>
        </div>

        {/* Mission, Vision, and Values Block */}
        <motion.div 
          className="border-t-[0.5px] border-brand-black/10 pt-24 mt-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
        >
          <div className="text-center mb-12 lg:mb-20">
            <span className="font-sans text-[9px] uppercase tracking-[0.4em] text-brand-gray block mb-3">La Filosofía de la Costura</span>
            <h3 className="font-serif text-3xl lg:text-4xl text-brand-navy italic">Esencia, Rigor y Visión de nuestro taller</h3>
            <div className="w-12 h-[0.5px] bg-brand-navy/30 mx-auto mt-4"></div>
          </div>

          <div className="relative mt-12 lg:mt-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            {/* Left side: Editorial Texts of Mission, Vision, Values */}
            <div className="lg:col-span-6 space-y-12 md:space-y-16 relative z-20">
              <div className="relative group pl-6 border-l-[1px] border-brand-navy/10 hover:border-brand-navy transition-colors duration-500">
                <span className="font-sans text-[11px] uppercase tracking-[0.3em] font-semibold text-brand-navy block mb-2 opacity-60">I. Misión</span>
                <h4 className="font-serif text-2xl md:text-3xl text-brand-navy mb-4 italic font-light">
                  Crear piezas que trascienden el tiempo
                </h4>
                <p className="font-sans text-[14px] text-brand-gray leading-[1.8] font-light">
                  Diseñamos y confeccionamos prendas únicas para cada persona, ensalzando su individualidad a través de un proceso estrictamente artesanal, mimando cada costura y seleccionando tejidos extraordinarios de primera calidad.
                </p>
              </div>

              <div className="relative group pl-6 border-l-[1px] border-brand-navy/10 hover:border-brand-navy transition-colors duration-500">
                <span className="font-sans text-[11px] uppercase tracking-[0.3em] font-semibold text-brand-navy block mb-2 opacity-60">II. Visión</span>
                <h4 className="font-serif text-2xl md:text-3xl text-brand-navy mb-4 italic font-light">
                  El legado de la costura de autor
                </h4>
                <p className="font-sans text-[14px] text-brand-gray leading-[1.8] font-light">
                  Nuestra mirada se dirige a conservar vivo el oficio de modisto artesano. Deseamos seguir tejiendo historias reales de confianza y elegancia eterna, consagrando cada puntada al servicio de los momentos más memorables.
                </p>
              </div>

              <div className="relative group pl-6 border-l-[1px] border-brand-navy/10 hover:border-brand-navy transition-colors duration-500">
                <span className="font-sans text-[11px] uppercase tracking-[0.3em] font-semibold text-brand-navy block mb-2 opacity-60">III. Valores</span>
                <h4 className="font-serif text-2xl md:text-3xl text-brand-navy mb-4 italic font-light">
                  Honestidad, rigor y vocación
                </h4>
                <p className="font-sans text-[14px] text-brand-gray leading-[1.8] font-light">
                  Nos define el respeto absoluto por la materia prima, el trato cercano y transparente con cada cliente, y la obsesión por la perfección técnica. La devoción por el detalle es nuestro único lenguaje.
                </p>
              </div>
            </div>

            {/* Right side: Splendid collage without borders/cards, with overlapping and floating images */}
            <div className="lg:col-span-6 relative h-[520px] sm:h-[650px] md:h-[750px] w-full flex items-center justify-center pointer-events-none mt-4 lg:mt-0 overflow-hidden lg:overflow-visible">
              {/* Base offset bg text */}
              <div className="absolute right-[-10%] top-[-5%] font-serif text-[10rem] md:text-[14rem] text-brand-navy/[0.02] tracking-tighter leading-none select-none uppercase pointer-events-none">
                Costura
              </div>

              {/* Image 1: Silk draping (Back layer, slightly offset) */}
              <motion.div 
                className="absolute left-[4%] top-[8%] w-[52%] aspect-[3/4] z-10"
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                whileInView={{ opacity: 0.85, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.1 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1549439602-43ebca23d7af?auto=format&fit=crop&q=80&w=800" 
                  alt="Seda dorada alta costura" 
                  className="w-full h-full object-cover rounded-sm sepia-[0.1] shadow-2xl saturate-[0.85]"
                />
              </motion.div>

              {/* Image 2: Haute couture sketch / pattern drafting / tailoring tools (Overlaps silk and moves forward) */}
              <motion.div 
                className="absolute right-[4%] top-[22%] w-[48%] aspect-[4/5] z-30"
                initial={{ opacity: 0, scale: 0.95, y: -20 }}
                whileInView={{ opacity: 0.9, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.4, delay: 0.3 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&q=80&w=800"
                  alt="Detalle de costura y taller artesanal" 
                  className="w-full h-full object-cover rounded-sm border-[0.5px] border-brand-black/5 shadow-xl grayscale contrast-115"
                />
              </motion.div>

              {/* Image 3: Elegant motion dress / fashion silhouette model (Lower center layer, overlaps behind) */}
              <motion.div 
                className="absolute left-[20%] bottom-[4%] w-[46%] aspect-[3/4] z-20"
                initial={{ opacity: 0, scale: 0.95, y: 40 }}
                whileInView={{ opacity: 0.9, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.3, delay: 0.5 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=800" 
                  alt="Elegancia y movimiento de vestido a medida" 
                  className="w-full h-full object-cover rounded-sm sepia-[0.12] contrast-[1.05] shadow-lg brightness-[0.98]"
                />
              </motion.div>
            </div>
          </div>

          {/* Action trigger footer */}
          <div className="flex justify-center mt-12 lg:mt-24">
            <button 
              type="button"
              onClick={() => document.getElementById('medida')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-brand-navy text-white hover:bg-brand-accent hover:text-brand-navy font-sans text-[10px] uppercase tracking-[0.2em] rounded-full shadow-md transition-all duration-300 pointer-events-auto cursor-pointer"
            >
              Consultar cita / Contacto
            </button>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
