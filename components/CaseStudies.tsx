import React, { useState } from 'react';
import { caseStudies } from '../data';
import { ArrowUpRight } from 'lucide-react';
import { Modal } from './ui/Modal';
import { CaseStudy } from '../types';

export const CaseStudies: React.FC = () => {
  const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openStudy = (study: CaseStudy) => {
    setSelectedStudy(study);
    setIsModalOpen(true);
  };

  const closeStudy = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedStudy(null), 300); // Wait for fade out if animated, though we use simple unmount here
  };

  return (
    <section id="case-studies" className="py-24 bg-white scroll-mt-28">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">Case Studies</h2>
            <p className="text-slate-500">Real-world results. Ultra-tight execution.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((study) => (
            <div 
              key={study.id}
              onClick={() => openStudy(study)}
              className="group cursor-pointer rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-300 relative"
            >
              <div className="p-8 h-full flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-wider rounded-full">
                    {study.category}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-slate-100 group-hover:bg-emerald-600 group-hover:border-emerald-600 transition-colors">
                    <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-emerald-700 transition-colors">
                  {study.title}
                </h3>
                
                <p className="text-slate-600 mb-6 flex-grow">
                  {study.problem}
                </p>

                <div className="text-sm font-semibold text-emerald-600 flex items-center gap-2">
                   Read Case Study 
                   <span className="block h-px w-8 bg-emerald-600 group-hover:w-12 transition-all" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Modal 
        isOpen={isModalOpen} 
        onClose={closeStudy} 
        caseStudy={selectedStudy} 
      />
    </section>
  );
};