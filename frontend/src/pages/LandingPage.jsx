import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Ambiance from '../components/Ambiance';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const LandingPage = () => {
  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Ambiance />
      <Contact />
      <Footer />
    </div>
  );
};

export default LandingPage;

