import React from 'react';
import { techStack } from '../data';

export const TechStack: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50 border-y border-slate-200">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-slate-900">Technical Stack & Capabilities</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {techStack.map((stack, index) => (
            <div key={index} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <h4 className="text-emerald-700 font-semibold mb-2 text-xs uppercase tracking-wider">{stack.category}</h4>
              <p className="text-slate-800 font-medium">{stack.tools}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};