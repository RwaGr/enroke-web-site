import React, { useRef } from 'react';
import CaseStudyCard from '../common/CaseStudyCard';

const CaseStudies: React.FC = () => {
  const cases = [
    {
      title: 'Startup de e-commerce',
      metric: '+120%',
      metricLabel: 'Incremento en ventas',
      period: '3 meses',
      description: 'Implementamos campañas automatizadas con IA y BI para optimizar conversiones.',
      tags: ['Paid Media', 'IA', 'Analítica'],
      color: 'emerald'
    },
    {
      title: 'Empresa de servicios B2B',
      metric: 'x2.4',
      metricLabel: 'ROI',
      period: '6 meses',
      description: 'Rediseño de estrategia digital con dashboards interactivos para la toma de decisiones comerciales.',
      tags: ['Estrategia', 'BI', 'Transformación Digital'],
      color: 'amber'
    },
    {
      title: 'Marca de moda local',
      metric: '+300%',
      metricLabel: 'Engagement',
      period: '3 meses',
      description: 'Crecimiento orgánico en Instagram con contenido estratégico y analizado en tiempo real.',
      tags: ['Redes Sociales', 'Contenido', 'Analítica'],
      color: 'indigo'
    }
  ];

  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section id="cases" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6" ref={sectionRef}>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Casos de Éxito</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Historias que demuestran lo que podemos lograr juntos.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {cases.map((caseStudy, index) => (
            <CaseStudyCard 
              key={index}
              {...caseStudy}
              index={index}
              parentRef={sectionRef}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;