import React, { useState } from 'react';
import { CheckCircle, CalendarClock, Mail, Instagram, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({
        name: '',
        email: '',
        company: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Listo para hacer tu próximo movimiento estratégico?
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Hablemos de cómo podemos ayudarte a escalar tu negocio con IA, marketing y analítica.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <div className="bg-slate-800 p-8 rounded-xl">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full p-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-white"
                    placeholder="Tu nombre"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full p-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-white"
                    placeholder="tu@email.com"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="company" className="block text-sm font-medium text-slate-300 mb-1">
                    Empresa
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formState.company}
                    onChange={handleChange}
                    className="w-full p-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-white"
                    placeholder="Nombre de tu empresa"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-1">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formState.message}
                    onChange={handleChange}
                    className="w-full p-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-white"
                    placeholder="¿Cómo podemos ayudarte?"
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-700 rounded-lg text-white font-medium transition-colors duration-300 flex items-center justify-center ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Enviando mensaje...
                    </>
                  ) : (
                    'Enviar mensaje'
                  )}
                </button>
              </form>
            ) : (
              <div className="text-center py-8">
                <CheckCircle size={48} className="text-emerald-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">¡Mensaje enviado con éxito!</h3>
                <p className="text-slate-300 mb-4">
                  Gracias por contactarnos. Te responderemos a la brevedad.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 inline-flex items-center px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg text-white transition-colors duration-300"
                >
                  Enviar otro mensaje
                </button>
              </div>
            )}
          </div>
          
          <div className="bg-slate-800 p-8 rounded-xl">
            <h3 className="text-xl font-bold mb-6 text-white">Conecta con nosotros</h3>
            
            <div className="space-y-6">
              <a href="#" className="flex items-center group">
                <div className="flex-shrink-0 w-12 h-12 bg-emerald-900/30 rounded-full flex items-center justify-center mr-4 group-hover:bg-emerald-800/40 transition-colors">
                  <CalendarClock className="text-emerald-500" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-medium group-hover:text-emerald-400 transition-colors">Agenda una reunión</h4>
                  <p className="text-slate-400 text-sm">Elige un horario que te convenga</p>
                </div>
              </a>
              
              <a href="mailto:contacto@enroke.com" className="flex items-center group">
                <div className="flex-shrink-0 w-12 h-12 bg-emerald-900/30 rounded-full flex items-center justify-center mr-4 group-hover:bg-emerald-800/40 transition-colors">
                  <Mail className="text-emerald-500" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-medium group-hover:text-emerald-400 transition-colors">Email</h4>
                  <p className="text-slate-400 text-sm">contacto@enroke.com</p>
                </div>
              </a>
              
              <div className="pt-6 border-t border-slate-700">
                <h4 className="text-white font-medium mb-4">Síguenos en redes</h4>
                <div className="flex space-x-4">
                  <a 
                    href="#" 
                    className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center hover:bg-emerald-900 transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram size={20} className="text-white" />
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center hover:bg-emerald-900 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} className="text-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;