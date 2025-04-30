import React, { useEffect, useState, useRef } from 'react';

interface CaseStudyCardProps {
  title: string;
  metric: string;
  metricLabel: string;
  period: string;
  description: string;
  tags: string[];
  color: 'emerald' | 'amber' | 'indigo';
  index: number;
  parentRef: React.RefObject<HTMLDivElement>;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ 
  title, 
  metric, 
  metricLabel, 
  period, 
  description, 
  tags, 
  color,
  index,
  parentRef
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const getColorClasses = () => {
    switch (color) {
      case 'emerald':
        return 'bg-emerald-50 border-emerald-200 hover:border-emerald-300';
      case 'amber':
        return 'bg-amber-50 border-amber-200 hover:border-amber-300';
      case 'indigo':
        return 'bg-indigo-50 border-indigo-200 hover:border-indigo-300';
      default:
        return 'bg-emerald-50 border-emerald-200 hover:border-emerald-300';
    }
  };

  const getMetricColor = () => {
    switch (color) {
      case 'emerald':
        return 'text-emerald-600';
      case 'amber':
        return 'text-amber-600';
      case 'indigo':
        return 'text-indigo-600';
      default:
        return 'text-emerald-600';
    }
  };

  const getTagColor = () => {
    switch (color) {
      case 'emerald':
        return 'bg-emerald-100 text-emerald-800';
      case 'amber':
        return 'bg-amber-100 text-amber-800';
      case 'indigo':
        return 'bg-indigo-100 text-indigo-800';
      default:
        return 'bg-emerald-100 text-emerald-800';
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, index * 150);
        }
      },
      {
        threshold: 0.1,
        root: null,
        rootMargin: '0px'
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [index]);

  return (
    <div 
      ref={cardRef}
      className={`rounded-xl p-6 border shadow-md transition-all duration-500 ${getColorClasses()} ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <h3 className="text-xl font-bold mb-4 text-slate-900">{title}</h3>
      
      <div className="flex items-baseline mb-4">
        <span className={`text-4xl font-bold ${getMetricColor()}`}>{metric}</span>
        <div className="ml-2">
          <span className="block text-sm text-slate-600">{metricLabel}</span>
          <span className="block text-xs text-slate-500">en {period}</span>
        </div>
      </div>
      
      <p className="text-slate-700 mb-4">{description}</p>
      
      <div className="flex flex-wrap gap-2 mt-auto">
        {tags.map((tag, tagIndex) => (
          <span 
            key={tagIndex} 
            className={`text-xs px-2 py-1 rounded-full ${getTagColor()}`}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default CaseStudyCard;