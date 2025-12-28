import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { TechStack } from './components/TechStack';
import { CaseStudies } from './components/CaseStudies';
import { WhyMe } from './components/WhyMe';
import { Contact } from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Process />
        <TechStack />
        <CaseStudies />
        <WhyMe />
        <Contact />
      </main>
    </div>
  );
};

export default App;