import React from 'react';
import { whyMe } from '../data';
import { BadgeCheck } from 'lucide-react';

export const WhyMe: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900 text-white">
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
             <h2 className="text-2xl md:text-3xl font-bold">Why This Works in Production</h2>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8 md:gap-10">
          {whyMe.map((item, index) => (
            <div 
              key={index} 
              className="flex-1 min-w-[260px] max-w-[340px] bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <BadgeCheck className="w-6 h-6 text-emerald-400" />
                <h3 className="font-bold text-emerald-50 text-base">{item.title}</h3>
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