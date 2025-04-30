import React from 'react';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Hero from './components/Home/Hero';
import Services from './components/Home/Services';
import About from './components/Home/About';
import CaseStudies from './components/Home/CaseStudies';
import Contact from './components/Home/Contact';

function App() {
  return (
    <div className="font-sans bg-slate-50 text-slate-800">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <CaseStudies />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;