import React, { useEffect, useRef } from 'react';
import { X, CheckCircle } from 'lucide-react';
import { CaseStudy } from '../../types';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  caseStudy: CaseStudy | null;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, caseStudy }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.body.style.overflow = 'unset';
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !caseStudy) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div 
        ref={modalRef}
        className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden relative animate-fade-in-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-emerald-600 p-8 text-white relative">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-white/30 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="inline-block px-3 py-1 bg-emerald-500 rounded-full text-xs font-semibold mb-3 tracking-wide">
            {caseStudy.category}
          </div>
          <h3 className="text-3xl font-bold">{caseStudy.title}</h3>
        </div>

        {/* Content */}
        <div className="p-8 max-h-[70vh] overflow-y-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h4 className="text-slate-900 font-bold mb-2 flex items-center gap-2">Problem</h4>
              <p className="text-slate-600 text-sm leading-relaxed">{caseStudy.problem}</p>
            </div>
            <div>
              <h4 className="text-slate-900 font-bold mb-2 flex items-center gap-2">Solution</h4>
              <p className="text-slate-600 text-sm leading-relaxed">{caseStudy.solution}</p>
            </div>
          </div>

          <div className="mb-8">
            <h4 className="text-slate-900 font-bold mb-4">Key Capabilities</h4>
            <div className="grid gap-3">
              {caseStudy.keyCapabilities.map((cap, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-slate-700 text-sm">{cap}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-100">
            <h4 className="text-emerald-900 font-bold mb-2">Impact</h4>
            <p className="text-emerald-800 font-medium">{caseStudy.impact}</p>
          </div>
        </div>
      </div>
    </div>
  );
};