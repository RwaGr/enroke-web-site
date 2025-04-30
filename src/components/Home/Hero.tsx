import React, { useEffect, useState } from 'react';
import { ChevronRight as ChessKnight, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-20 pb-20 md:pt-32 md:pb-28 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Abstract animated chess patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="chess-grid"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`transition-transform duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex justify-center mb-6">
              <div className="bg-white/10 p-4 rounded-full backdrop-blur-sm">
                <ChessKnight size={48} className="text-emerald-500" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
              Movemos tu marca con 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600"> estrategia</span>, 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600"> IA </span> 
              y resultados reales.
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 mb-8 md:mb-10 max-w-3xl mx-auto">
              Enroke es más que una agencia. Somos tu partner estratégico en marketing digital, 
              analítica e innovación tecnológica.
            </p>
            
            <button 
              onClick={scrollToContact}
              className="inline-flex items-center px-6 py-3 md:px-8 md:py-4 bg-emerald-600 hover:bg-emerald-700 rounded-lg text-white font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-emerald-600/20 group"
            >
              <span>Agenda una reunión</span>
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </button>
          </div>
        </div>
      </div>
      
      {/* Chess pieces silhouette on bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-900 to-transparent"></div>
    </section>
  );
};

export default Hero;