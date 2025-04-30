import React, { useState, useEffect } from 'react';
import { ChevronRight as ChessKnight } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-slate-900 text-white shadow-lg py-2' 
          : 'bg-transparent text-white py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className="flex items-center">
          <ChessKnight className="h-8 w-8 text-emerald-500 mr-2" />
          <span className="text-2xl font-bold">Enroke</span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <button onClick={() => scrollToSection('services')} className="text-sm uppercase tracking-wider hover:text-emerald-400 transition-colors">
            Servicios
          </button>
          <button onClick={() => scrollToSection('about')} className="text-sm uppercase tracking-wider hover:text-emerald-400 transition-colors">
            Quiénes Somos
          </button>
          <button onClick={() => scrollToSection('cases')} className="text-sm uppercase tracking-wider hover:text-emerald-400 transition-colors">
            Casos de Éxito
          </button>
          <button onClick={() => scrollToSection('contact')} className="text-sm uppercase tracking-wider hover:text-emerald-400 transition-colors">
            Contacto
          </button>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900 text-white px-4 py-2">
          <nav className="flex flex-col space-y-3 py-3">
            <button onClick={() => scrollToSection('services')} className="text-sm uppercase tracking-wider py-2 hover:text-emerald-400 transition-colors">
              Servicios
            </button>
            <button onClick={() => scrollToSection('about')} className="text-sm uppercase tracking-wider py-2 hover:text-emerald-400 transition-colors">
              Quiénes Somos
            </button>
            <button onClick={() => scrollToSection('cases')} className="text-sm uppercase tracking-wider py-2 hover:text-emerald-400 transition-colors">
              Casos de Éxito
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-sm uppercase tracking-wider py-2 hover:text-emerald-400 transition-colors">
              Contacto
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;