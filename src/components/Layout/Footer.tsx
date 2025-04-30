import React from 'react';
import { ChevronRight as ChessKnight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-white py-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-slate-800">
          <div>
            <div className="flex items-center mb-4">
              <ChessKnight className="h-6 w-6 text-emerald-500 mr-2" />
              <span className="text-xl font-bold">Enroke</span>
            </div>
            <p className="text-slate-400 mb-4">
              Tu socio estratégico en marketing digital, IA y analítica.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#about" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Quiénes Somos
                </a>
              </li>
              <li>
                <a href="#cases" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Casos de Éxito
                </a>
              </li>
              <li>
                <a href="#contact" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <address className="not-italic text-slate-400">
              <p>contacto@enroke.com</p>
              <p className="mt-2">México & Global</p>
            </address>
          </div>
        </div>
        
        <div className="pt-8 text-center text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Enroke. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;