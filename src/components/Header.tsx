import React, { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Offset calculation for precise positioning below the sticky header
      // The mobile header is a bit taller because of the 2-row layouts
      const isMobile = window.innerWidth < 1024;
      const headerOffset = isMobile ? (isScrolled ? 110 : 135) : (isScrolled ? 80 : 100);
      
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-brand-bg/95 backdrop-blur-md border-b-[0.5px] border-brand-black/10 py-2.5 shadow-sm' 
          : 'bg-transparent py-4 lg:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-2 lg:gap-0">
        
        {/* Logo and Brand Name */}
        <button 
          onClick={scrollToTop} 
          className="flex flex-col items-center justify-center text-brand-navy hover:opacity-75 transition-opacity cursor-pointer group"
        >
          <div className="font-serif text-3xl lg:text-3xl font-light tracking-tighter leading-none flex items-center mb-0.5">
            <span>a</span>
            <span className="relative ml-1">
              c
              <span className="absolute top-[58%] left-0 w-full h-[1px] bg-current -translate-y-1/2 scale-x-110"></span>
            </span>
          </div>
          <span className="font-sans text-[9.5px] lg:text-[8px] uppercase tracking-[0.25em] mt-0.5 opacity-90 flex items-center font-semibold">
            A
            <span className="relative">
              rnelio&nbsp;Cruz
              <span className="absolute top-1/2 left-0 w-full h-[0.5px] bg-current -translate-y-1/2 scale-x-[1.02]"></span>
            </span>
          </span>
        </button>

        {/* Desktop Nav - visible on large screens */}
        <nav className="hidden lg:flex items-center space-x-4 xl:space-x-8">
          <button onClick={scrollToTop} className="font-sans text-[10px] uppercase tracking-[0.2em] text-brand-navy/80 hover:text-brand-navy hover:font-bold transition-all py-1 cursor-pointer font-medium">Home</button>
          <button onClick={() => scrollToSection('arnelio-cruz')} className="font-sans text-[10px] uppercase tracking-[0.2em] text-brand-navy/80 hover:text-brand-navy hover:font-bold transition-all py-1 cursor-pointer font-medium">Arnelio Cruz</button>
          <button onClick={() => scrollToSection('coleccion')} className="font-sans text-[10px] uppercase tracking-[0.2em] text-brand-navy/80 hover:text-brand-navy hover:font-bold transition-all py-1 cursor-pointer font-medium">Colecciones</button>
          <button onClick={() => scrollToSection('proceso')} className="font-sans text-[10px] uppercase tracking-[0.2em] text-brand-navy/80 hover:text-brand-navy hover:font-bold transition-all py-1 cursor-pointer font-medium">Proceso</button>
          <button onClick={() => scrollToSection('fantasia')} className="font-sans text-[10px] uppercase tracking-[0.2em] text-brand-navy/80 hover:text-brand-navy hover:font-bold transition-all py-1 cursor-pointer font-medium">Fantasía</button>
          <button onClick={() => scrollToSection('eventos')} className="font-sans text-[10px] uppercase tracking-[0.2em] text-brand-navy/80 hover:text-brand-navy hover:font-bold transition-all py-1 cursor-pointer font-medium">Eventos</button>
          <button onClick={() => scrollToSection('medida')} className="font-sans text-[10px] uppercase tracking-[0.2em] text-brand-navy hover:text-brand-navy font-bold hover:tracking-[0.23em] transition-all py-1 cursor-pointer animate-pulse">Contacto</button>
        </nav>

        {/* Elegant Spacer or Micro-Detail on Desktop */}
        <div className="hidden lg:block w-[120px]"></div>

        {/* Mobile Header / Nav - DIRECT 2-row layout directly embedded */}
        <div className="lg:hidden w-full max-w-sm mx-auto flex flex-col items-center mt-1.5">
          {/* Row 1 */}
          <div className="flex justify-center items-center gap-x-2.5 flex-wrap border-t border-brand-navy/10 pt-1.5 w-full">
            <button 
              onClick={scrollToTop} 
              className="font-sans text-[9px] uppercase tracking-wider text-brand-navy/85 active:text-brand-navy active:font-bold py-1 px-0.5 cursor-pointer font-semibold"
            >
              Home
            </button>
            <span className="text-brand-navy/20 text-[7px]">|</span>
            <button 
              onClick={() => scrollToSection('arnelio-cruz')} 
              className="font-sans text-[9px] uppercase tracking-wider text-brand-navy/85 active:text-brand-navy active:font-bold py-1 px-0.5 cursor-pointer font-semibold"
            >
              Arnelio Cruz
            </button>
            <span className="text-brand-navy/20 text-[7px]">|</span>
            <button 
              onClick={() => scrollToSection('coleccion')} 
              className="font-sans text-[9px] uppercase tracking-wider text-brand-navy/85 active:text-brand-navy active:font-bold py-1 px-0.5 cursor-pointer font-semibold"
            >
              Colecciones
            </button>
            <span className="text-brand-navy/20 text-[7px]">|</span>
            <button 
              onClick={() => scrollToSection('proceso')} 
              className="font-sans text-[9px] uppercase tracking-wider text-brand-navy/85 active:text-brand-navy active:font-bold py-1 px-0.5 cursor-pointer font-semibold"
            >
              Proceso
            </button>
          </div>
          
          {/* Row 2 */}
          <div className="flex justify-center items-center gap-x-2.5 mt-0.5 pb-1 flex-wrap w-full">
            <button 
              onClick={() => scrollToSection('fantasia')} 
              className="font-sans text-[9px] uppercase tracking-wider text-brand-navy/85 active:text-brand-navy active:font-bold py-1 px-0.5 cursor-pointer font-semibold"
            >
              Fantasía
            </button>
            <span className="text-brand-navy/20 text-[7px]">|</span>
            <button 
              onClick={() => scrollToSection('eventos')} 
              className="font-sans text-[9px] uppercase tracking-wider text-brand-navy/85 active:text-brand-navy active:font-bold py-1 px-0.5 cursor-pointer font-semibold"
            >
              Eventos
            </button>
            <span className="text-brand-navy/20 text-[7px]">|</span>
            <button 
              onClick={() => scrollToSection('medida')} 
              className="font-sans text-[9px] uppercase tracking-wider text-brand-navy font-bold py-1 px-0.5 cursor-pointer underline decoration-[1.5px] decoration-brand-accent underline-offset-2"
            >
              Contacto
            </button>
          </div>
        </div>

      </div>
    </header>
  );
}
