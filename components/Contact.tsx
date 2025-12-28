import React from 'react';
import { Mail, Linkedin, Phone } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white relative scroll-mt-28">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-emerald-50 rounded-3xl p-8 md:p-16 border border-emerald-100 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Let's Talk</h2>
          <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
            If you’re building AI voice agents that need to work in real business environments — I can help.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <a href="mailto:shakibmbh3@gmail.com" className="flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-white transition-colors">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-emerald-600">
                <Mail className="w-5 h-5" />
              </div>
              <span className="text-slate-900 font-medium text-sm">shakibmbh3@gmail.com</span>
            </a>
            
            <a href="https://linkedin.com/in/shakibmbh" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-white transition-colors">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-emerald-600">
                <Linkedin className="w-5 h-5" />
              </div>
              <span className="text-slate-900 font-medium text-sm">linkedin.com/shakibmbh</span>
            </a>

            <a href="https://wa.me/8801856778280" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-white transition-colors">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-emerald-600">
                <Phone className="w-5 h-5" />
              </div>
              <span className="text-slate-900 font-medium text-sm">+880 1856 778 280</span>
            </a>
          </div>

          <a 
            href="mailto:shakibmbh3@gmail.com"
            className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-white transition-all bg-emerald-600 rounded-full hover:bg-emerald-700 hover:shadow-lg hover:shadow-emerald-200"
          >
            Discuss Your Use Case
          </a>
        </div>
        
        <div className="mt-16 text-center text-slate-400 text-sm">
          © {new Date().getFullYear()} Shakib. All rights reserved.
        </div>
      </div>
    </section>
  );
};