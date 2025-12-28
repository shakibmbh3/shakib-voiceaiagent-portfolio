import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const Hero: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Gradient Mesh - Reduced opacity for cleaner look */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-emerald-50 to-white z-0" />
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-emerald-100/30 rounded-full blur-3xl opacity-50 transform translate-x-1/4 -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-emerald-100/30 rounded-full blur-3xl opacity-50 transform -translate-x-1/4 translate-y-1/4" />

      <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
        {/* Status Pill - Removed flashy ping animation */}
        <div className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/80 border border-emerald-200 text-emerald-800 text-sm font-medium animate-fade-in">
          <span className="relative flex h-2 w-2">
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          Available for new projects
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-[1.15] animate-fade-in-up">
          AI Voice Agents That <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-800">
            Call, Qualify, and Book
          </span>
        </h1>

        <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in-delayed">
          I build custom AI voice agents that handle real business calls, 
          automate follow-ups, and sync directly with your CRM.
        </p>

        <div className="flex flex-col items-center gap-3 mb-10 animate-fade-in-delayed [animation-delay:400ms]">
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base text-slate-700">
            {[
              "Production-ready AI voice agents",
              "Call flows, APIs, CRM integrations",
              "Fully custom. No templates"
            ].map((point, i) => (
              <div key={i} className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-emerald-100 shadow-sm transition-opacity duration-500" style={{ transitionDelay: `${i * 100}ms` }}>
                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                <span>{point}</span>
              </div>
            ))}
          </div>
          <p className="text-xs md:text-sm text-slate-500 font-medium tracking-wide opacity-80 mt-2">
            Built for real-world business operations.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-delayed [animation-delay:600ms]">
          <a 
            href="#case-studies"
            onClick={(e) => handleScroll(e, '#case-studies')}
            className="group px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-full transition-all shadow-lg hover:shadow-emerald-200/50 flex items-center gap-2"
          >
            View Case Studies
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href="#contact"
            onClick={(e) => handleScroll(e, '#contact')}
            className="px-8 py-4 bg-white hover:bg-emerald-50 text-slate-800 font-semibold rounded-full border border-emerald-200 transition-all shadow-sm hover:shadow-md"
          >
            Book A Call
          </a>
        </div>
      </div>
    </section>
  );
};