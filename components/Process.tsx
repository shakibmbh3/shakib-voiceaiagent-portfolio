import React from 'react';
import { processSteps } from '../data';

export const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-slate-900 text-white relative overflow-hidden scroll-mt-28">
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How My Agents Work</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A systematic approach to building production-grade voice intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {processSteps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line (Desktop) */}
              {index !== processSteps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-slate-800 -z-10" />
              )}
              
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center mb-6 shadow-xl relative z-10">
                  <span className="text-emerald-400 font-bold text-xl">{step.number}</span>
                </div>
                <h3 className="text-lg font-bold mb-3">{step.title}</h3>
                <p className="text-sm text-slate-400 px-2">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};