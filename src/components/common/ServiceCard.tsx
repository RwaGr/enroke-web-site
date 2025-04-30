import React, { useEffect, useRef, useState } from 'react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay * 1000);
        }
      },
      {
        threshold: 0.1
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
  }, [delay]);

  return (
    <div 
      ref={cardRef}
      className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 border border-slate-100 group hover:border-emerald-200 h-full transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
    >
      <div className="mb-6 p-4 rounded-full bg-slate-50 inline-block group-hover:bg-emerald-50 transition-colors duration-300">
        {icon}
      </div>
      
      <h3 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-emerald-700 transition-colors duration-300">
        {title}
      </h3>
      
      <p className="text-slate-600">
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;