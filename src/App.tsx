/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { CATALOG } from './data';
import { Dress } from './types';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Catalog from './components/Catalog';
import DetailView from './components/DetailView';
import Workshop from './components/Workshop';
import Fantasy from './components/Fantasy';
import Events from './components/Events';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

export default function App() {
  const [selectedDress, setSelectedDress] = useState<Dress | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initial loader simulation
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-brand-bg z-50">
        <div className="flex flex-col items-center text-brand-navy">
          <div className="font-serif text-4xl font-light tracking-tighter leading-none flex items-center">
            <span>a</span>
            <span className="relative ml-1">
              c
              <span className="absolute top-[58%] left-0 w-full h-[1.5px] bg-current -translate-y-1/2 scale-x-110"></span>
            </span>
          </div>
          <span className="font-sans text-[10px] uppercase tracking-[0.2em] mt-2 mb-6 opacity-80 flex items-center">
            A
            <span className="relative">
              rnelio&nbsp;Cruz
              <span className="absolute top-1/2 left-0 w-full h-[1px] bg-current -translate-y-1/2 scale-x-[1.02]"></span>
            </span>
          </span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-brand-navy via-brand-navy/50 to-transparent animate-pulse delay-75"></div>
          <span className="mt-6 font-sans text-[9px] uppercase tracking-[0.3em] text-brand-black/60">Iniciando</span>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-brand-bg select-none">
      <AnimatePresence>
        {!selectedDress ? (
          <motion.div
            key="main-content"
            initial={{ opacity: 0, filter: 'blur(4px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, filter: 'blur(2px)' }}
            transition={{ duration: 0.4 }}
          >
            <Header />
            <main>
              <Hero onScrollToCatalog={() => {
                document.getElementById('coleccion')?.scrollIntoView({ behavior: 'smooth' });
              }} />
              <About />
              <Catalog onSelectDress={setSelectedDress} />
              <Workshop />
              <Fantasy />
              <Events />
              <ContactForm />
            </main>
            <Footer />
          </motion.div>
        ) : (
          <DetailView 
            dress={selectedDress} 
            onClose={() => setSelectedDress(null)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
}
