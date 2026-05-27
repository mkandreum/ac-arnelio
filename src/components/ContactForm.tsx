import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'motion/react';
import { UploadCloud, CheckCircle2 } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  type: string;
  date: string;
  story: string;
}

export default function ContactForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [fileName, setFileName] = useState('');

  const onSubmit = (data: FormData) => {
    console.log("Form data submitted:", data);
    setTimeout(() => {
      setIsSubmitted(true);
    }, 800);
  };

  return (
    <section id="medida" className="scroll-mt-28 py-20 lg:py-32 bg-brand-bg relative overflow-hidden border-t-[0.5px] border-brand-black/10">
      
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left Column: Workshop Details */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-12">
            <div className="space-y-8">
              <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-brand-gray block">Contacto</span>
              <h2 className="font-serif text-6xl md:text-7xl text-brand-navy tracking-tighter leading-none mix-blend-multiply">
                Solicita tu <br/><span className="italic font-light">diseño a medida</span>
              </h2>
              <div className="w-16 h-[1px] bg-brand-navy/30"></div>
              <p className="font-sans text-brand-gray text-[14px] font-light leading-relaxed">
                Nos complace dar forma a tus ideas exclusivas. Déjanos tus datos de contacto y un breve mensaje sobre tu proyecto, evento o el modelo de fantasía que tienes en mente para programar una cita en el taller.
              </p>
            </div>

            <div className="space-y-8 border-t-[0.5px] border-brand-black/10 pt-8 mt-8">
              <h3 className="font-serif text-2xl text-brand-navy font-light italic">Visítanos en nuestro taller</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6 font-sans text-[13px] text-brand-gray font-light">
                <div className="flex flex-col space-y-1.5">
                  <span className="text-[9px] uppercase tracking-[0.15em] text-brand-navy font-semibold">Taller</span>
                  <span className="leading-relaxed">
                    Calle La Luz, 20<br />
                    Villarta de San Juan, Ciudad Real<br />
                    13210, España
                  </span>
                </div>

                <div className="flex flex-col space-y-1.5">
                  <span className="text-[9px] uppercase tracking-[0.15em] text-brand-navy font-semibold">Teléfono</span>
                  <a href="tel:926640299" className="hover:text-brand-navy transition-colors font-medium text-brand-black">926 640 299</a>
                </div>

                <div className="flex flex-col space-y-1.5 md:col-span-2 lg:col-span-1">
                  <span className="text-[9px] uppercase tracking-[0.15em] text-brand-navy font-semibold">Email</span>
                  <a href="mailto:info@arneliocruz.com" className="hover:text-brand-navy transition-colors font-medium text-brand-black">info@arneliocruz.com</a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-white/60 backdrop-blur-md p-8 md:p-12 border-[0.5px] border-brand-black/10 shadow-sm relative">
            <span className="font-sans text-[9px] uppercase tracking-[0.2em] text-brand-gray/80 mb-8 block font-medium">Formulario de contacto</span>
            
            {isSubmitted ? (
              <motion.div 
                className="flex flex-col items-center justify-center space-y-6 py-16 text-center"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <CheckCircle2 size={48} className="text-brand-accent mb-2" strokeWidth={1} />
                <h3 className="font-serif text-3xl text-brand-black">Mensaje Recibido</h3>
                <p className="font-sans text-[12px] text-brand-gray font-light max-w-sm">
                  Gracias por tu mensaje. Nos pondremos en contacto contigo lo antes posible para dar forma a tu diseño exclusivo.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-8 font-sans text-[10px] uppercase tracking-[0.2em] text-brand-black border-b-[0.5px] border-brand-black pb-1 hover:text-brand-gray hover:border-brand-gray transition-colors"
                >
                  Nuevo Mensaje
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-12">
                
                <div className="space-y-10">
                  <div className="relative">
                    <input 
                      id="name"
                      {...register("name", { required: true })}
                      className="w-full peer border-b-[0.5px] border-brand-black/20 pb-3 bg-transparent placeholder-transparent focus:border-brand-navy outline-none font-sans text-[13px] transition-colors" 
                      placeholder="Nombre completo"
                    />
                    <label htmlFor="name" className="absolute left-0 -top-5 text-[9px] text-brand-gray uppercase tracking-[0.1em] peer-placeholder-shown:text-[13px] peer-placeholder-shown:top-0 peer-placeholder-shown:normal-case peer-focus:-top-5 peer-focus:text-[9px] peer-focus:uppercase transition-all">Nombre completo</label>
                    {errors.name && <span className="text-brand-accent text-[10px] italic mt-2 absolute -bottom-6 left-0">Campo requerido</span>}
                  </div>

                  <div className="relative">
                    <input 
                      id="email"
                      type="email"
                      {...register("email", { required: true })}
                      className="w-full peer border-b-[0.5px] border-brand-black/20 pb-3 bg-transparent placeholder-transparent focus:border-brand-navy outline-none font-sans text-[13px] transition-colors" 
                      placeholder="Correo electrónico"
                    />
                    <label htmlFor="email" className="absolute left-0 -top-5 text-[9px] text-brand-gray uppercase tracking-[0.1em] peer-placeholder-shown:text-[13px] peer-placeholder-shown:top-0 peer-placeholder-shown:normal-case peer-focus:-top-5 peer-focus:text-[9px] peer-focus:uppercase transition-all">Correo electrónico</label>
                    {errors.email && <span className="text-brand-accent text-[10px] italic mt-2 absolute -bottom-6 left-0">Campo requerido</span>}
                  </div>
                  
                  <div className="relative">
                    <input 
                      id="phone"
                      type="tel"
                      {...register("phone")}
                      className="w-full peer border-b-[0.5px] border-brand-black/20 pb-3 bg-transparent placeholder-transparent focus:border-brand-navy outline-none font-sans text-[13px] transition-colors" 
                      placeholder="Teléfono"
                    />
                    <label htmlFor="phone" className="absolute left-0 -top-5 text-[9px] text-brand-gray uppercase tracking-[0.1em] peer-placeholder-shown:text-[13px] peer-placeholder-shown:top-0 peer-placeholder-shown:normal-case peer-focus:-top-5 peer-focus:text-[9px] peer-focus:uppercase transition-all">Teléfono</label>
                  </div>

                  <div className="relative">
                    <select 
                      id="type"
                      {...register("type")}
                      className="w-full peer border-b-[0.5px] border-brand-black/20 pb-3 bg-transparent focus:border-brand-navy outline-none font-sans text-[13px] transition-colors appearance-none"
                      defaultValue=""
                    >
                      <option value="" disabled>Seleccionar tipo de diseño o motivo</option>
                      <option value="vestido-novia">Vestido de Novia</option>
                      <option value="vestido-fiesta">Vestido de Fiesta</option>
                      <option value="traje">Traje / Sastrería de Autor</option>
                      <option value="fantasia">Proyectos de Fantasía o Escénicos</option>
                      <option value="otro">Otro Motivo</option>
                    </select>
                    <label htmlFor="type" className="absolute left-0 -top-5 text-[9px] text-brand-gray uppercase tracking-[0.1em] transition-all">Motivo de contacto</label>
                    <div className="absolute right-0 top-1 pointer-events-none text-brand-gray/50 text-[10px]">▼</div>
                  </div>
                </div>

                <div className="relative pt-2">
                  <textarea 
                    id="story"
                    {...register("story")}
                    rows={3}
                    className="w-full peer border-b-[0.5px] border-brand-black/20 pb-3 bg-transparent placeholder-transparent focus:border-brand-navy outline-none font-sans text-[13px] transition-colors resize-none leading-relaxed" 
                    placeholder="Detalla tu idea, fecha del evento, o cualquier otra nota..."
                  />
                  <label htmlFor="story" className="absolute left-0 -top-5 text-[9px] text-brand-gray uppercase tracking-[0.1em] peer-placeholder-shown:text-[13px] peer-placeholder-shown:top-0 peer-placeholder-shown:normal-case peer-focus:-top-5 peer-focus:text-[9px] peer-focus:uppercase transition-all">Mensaje o motivo de contacto</label>
                </div>

                <div className="relative">
                  <p className="text-[9px] text-brand-gray uppercase tracking-[0.1em] mb-4">Material de Inspiración (Opcional)</p>
                  <label className="flex flex-col items-center justify-center w-full h-28 border-[0.5px] border-dashed border-brand-black/20 bg-white/30 hover:bg-white/70 cursor-pointer transition-colors group">
                    <div className="flex flex-col items-center justify-center pt-3 pb-4">
                      <UploadCloud className="w-5 h-5 text-brand-gray/50 mb-2 group-hover:text-brand-navy transition-colors" strokeWidth={1} />
                      <p className="mb-0.5 text-[11px] text-brand-gray font-light">
                        Click para subir boceto o idea
                      </p>
                      <p className="text-[9px] text-brand-gray/50 tracking-wider uppercase">{fileName || 'Archivos de imagen o pdf'}</p>
                    </div>
                    <input 
                      type="file" 
                      className="hidden" 
                      onChange={(e) => setFileName(e.target.files?.[0]?.name || '')}
                    />
                  </label>
                </div>

                <div className="flex justify-start pt-4">
                  <button 
                    type="submit"
                    className="px-12 py-5 bg-brand-navy text-white font-sans text-[9px] uppercase tracking-[0.25em] rounded-full hover:bg-brand-accent hover:text-brand-navy transition-all duration-350 shadow-md"
                  >
                    Enviar Mensaje
                  </button>
                </div>
                
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
