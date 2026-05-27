import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-brand-bg pt-20 pb-12 border-t-[0.5px] border-brand-black/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-x-16">
            <div className="flex flex-col">
              <span className="font-sans text-[9px] uppercase tracking-widest text-brand-gray mb-3">Taller</span>
              <span className="font-sans text-[11px] text-brand-black/80 font-light tracking-wide leading-relaxed">
                Calle La Luz, 20.<br/>
                Villarta de San Juan,<br/>
                Ciudad Real, España.
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-sans text-[9px] uppercase tracking-widest text-brand-gray mb-3">Contacto</span>
              <a href="mailto:info@arneliocruz.com" className="font-sans text-[11px] text-brand-black/80 font-light tracking-wide hover:text-brand-accent transition-colors">info@arneliocruz.com</a>
              <a href="tel:926640299" className="font-sans text-[11px] text-brand-black/80 font-light tracking-wide hover:text-brand-accent transition-colors mt-1">926 640 299</a>
            </div>
            <div className="flex flex-col">
              <span className="font-sans text-[9px] uppercase tracking-widest text-brand-gray mb-3">Instagram</span>
              <a href="https://www.instagram.com/arneliocruz_modisto" target="_blank" rel="noreferrer" className="font-sans text-[11px] text-brand-black/80 font-light tracking-wide hover:text-brand-accent transition-colors">@arneliocruz_modisto</a>
            </div>
            <div className="flex flex-col">
              <span className="font-sans text-[9px] uppercase tracking-widest text-brand-gray mb-3">Facebook</span>
              <a href="https://www.facebook.com/arneliocruzmodisto" target="_blank" rel="noreferrer" className="font-sans text-[11px] text-brand-black/80 font-light tracking-wide hover:text-brand-accent transition-colors">Arnelio Cruz Modisto</a>
            </div>
          </div>
          
          <div className="flex flex-col items-start md:items-end justify-end">
            <p className="font-serif text-[14px] text-brand-black mb-1 italic">Cada puntada cuenta una historia.</p>
            <span className="font-sans text-[9px] uppercase tracking-[0.2em] text-brand-gray/60">Villarta de San Juan since 1998</span>
          </div>
        </div>

        <div className="w-full h-[0.5px] bg-brand-black/10 mb-8"></div>

        <div className="flex flex-col md:flex-row items-center justify-between w-full font-sans text-[9px] uppercase tracking-[0.2em] text-brand-gray/60 gap-4">
          <p className="mb-4 md:mb-0">© {new Date().getFullYear()} Arnelio Cruz Modisto. Todos los derechos reservados.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-brand-black transition-colors">Aviso Legal</a>
            <a href="#" className="hover:text-brand-black transition-colors">Política de Privacidad</a>
            <a href="#" className="hover:text-brand-black transition-colors">Cookies</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
