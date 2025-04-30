import React from 'react';
import { Brain, BarChart3, Rocket, Cpu } from 'lucide-react';
import ServiceCard from '../common/ServiceCard';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Brain size={40} className="text-emerald-500" />,
      title: "Estrategia de Marketing Digital",
      description: "Diseñamos campañas en redes sociales (pagadas y orgánicas) con foco en resultados y optimización constante."
    },
    {
      icon: <Cpu size={40} className="text-emerald-500" />,
      title: "Implementación de IA en Marketing y Ventas",
      description: "Automatiza tareas, personaliza experiencias y toma decisiones más inteligentes con IA aplicada a tu negocio."
    },
    {
      icon: <BarChart3 size={40} className="text-emerald-500" />,
      title: "Analítica Avanzada & Business Intelligence",
      description: "Convierte datos en decisiones. Creamos dashboards y modelos predictivos para que siempre sepas hacia dónde ir."
    },
    {
      icon: <Rocket size={40} className="text-emerald-500" />,
      title: "Transformación Digital",
      description: "Digitaliza tus procesos comerciales, optimiza recursos y prepárate para escalar. Somos tu socio tecnológico."
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Servicios</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Servicios diseñados para acelerar tu crecimiento, simplificar procesos y generar impacto.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;