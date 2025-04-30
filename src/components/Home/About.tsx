import React, { useEffect, useRef, useState } from 'react';
import { ChevronRight as ChessKnight } from 'lucide-react';

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Decorative chess pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="chess-pattern"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div 
          ref={sectionRef}
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="flex justify-center mb-4">
              <ChessKnight size={36} className="text-emerald-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
              La jugada estratégica detrás de Enroke
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-md transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-bold mb-4 text-slate-900">Nuestro Origen</h3>
              <p className="text-slate-700">
                Enroke nace de la visión compartida de Roger y Kelly — una pareja que decidió unir sus talentos 
                para crear algo distinto. Nuestro nombre evoca el "enroque" en ajedrez: una jugada que fortalece 
                y protege. Así trabajamos con nuestros clientes: con inteligencia, visión y movimiento estratégico.
              </p>
            </div>
            
            <div className="bg-slate-900 text-white p-8 rounded-xl shadow-md transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-bold mb-4 text-emerald-400">Nuestra Filosofía</h3>
              <p className="text-slate-300">
                Creamos soluciones de marketing, IA y analítica para empresas que buscan crecer con propósito. 
                Combinamos datos, inteligencia artificial y creatividad para impulsar resultados que hacen la diferencia 
                para nuestros clientes.
              </p>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-lg text-slate-700 max-w-3xl mx-auto">
              Como en el ajedrez, creemos en pensar varios movimientos por delante, adaptarnos a un entorno cambiante 
              y utilizar cada pieza estratégicamente para conseguir la victoria.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;