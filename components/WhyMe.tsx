import React from 'react';
import { whyMe } from '../data';
import { BadgeCheck } from 'lucide-react';

export const WhyMe: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-emerald-900 to-slate-900 text-white">
      <div className="container mx-auto px-6">
        <div className="mb-10 text-center">
             <h2 className="text-2xl font-bold">Why Teams Choose Me</h2>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6">
          {whyMe.map((item, index) => (
            <div 
              key={index} 
              className="flex-1 min-w-[250px] max-w-[300px] bg-white/5 backdrop-blur-sm border border-white/10 p-5 rounded-xl hover:bg-white/10 transition-colors"
            >
              <div className="flex items-center gap-3 mb-3">
                <BadgeCheck className="w-5 h-5 text-emerald-400" />
                <h3 className="font-bold text-emerald-50 text-sm">{item.title}</h3>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};