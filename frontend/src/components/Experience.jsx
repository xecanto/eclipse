import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

const ExperienceCard = ({ title, description, icon, delay }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <div 
      ref={ref}
      className={`bg-black border border-yellow-900/40 p-8 relative transition-all duration-700 ease-out ${
        inView 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Gold corner accents */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-yellow-500"></div>
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-yellow-500"></div>
      
      <div className="mb-6 text-yellow-500">
        {icon}
      </div>
      <h3 className="text-xl font-serif mb-4 text-yellow-300">{title}</h3>
      <p className="text-yellow-100/70" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{description}</p>
    </div>
  );
};

const Experience = () => {
  const { ref: headingRef, inView: headingVisible } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const experiences = [
    {
      title: "Premium Shisha",
      description: "Experience our extensive selection of premium flavors served in state-of-the-art hookah equipment for the perfect smoke.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>,
      delay: 0
    },
    {
      title: "Global Cuisine",
      description: "Our menu features a fusion of global flavors and local favorites, crafted with fresh ingredients and served with passion.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>,
      delay: 200
    },
    {
      title: "Craft Beverages",
      description: "Enjoy our signature cocktails, mocktails, and refreshments designed to complement your food and elevate your experience.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
      delay: 400
    },
    {
      title: "Private Events",
      description: "From intimate gatherings to large celebrations, our space can be customized to create the perfect atmosphere for any occasion.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>,
      delay: 600
    }
  ];

  return (
    <section 
      id="experience" 
      className="py-24 bg-black relative"
    >
      {/* Decorative background */}
      <div className="absolute top-20 left-10 w-80 h-80 bg-yellow-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-yellow-500/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative">
        <div 
          ref={headingRef}
          className={`text-center mb-20 transition-all duration-700 ease-out ${
            headingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="flex flex-col items-center">
            <div className="w-12 h-0.5 bg-yellow-500 mb-6"></div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-amber-500">
              The Eclipse Experience
            </h2>
            <div className="w-20 h-0.5 bg-yellow-800/50 mb-8"></div>
            <p className="text-xl text-yellow-100/80 max-w-3xl mx-auto" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Immerse yourself in our unique blend of flavors, atmosphere, and community.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-yellow-900/20">
          {experiences.map((exp, index) => (
            <ExperienceCard 
              key={index}
              title={exp.title}
              description={exp.description}
              icon={exp.icon}
              delay={exp.delay}
            />
          ))}
        </div>
        
        {/* Menu teaser */}
        <div className={`mt-20 text-center transition-all duration-1000 ease-out delay-500 ${
          headingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <Link to="/menu" className="inline-block border-2 border-yellow-500 px-8 py-3 text-yellow-500 uppercase tracking-widest text-sm hover:bg-yellow-500 hover:text-black transition-all duration-500">
            View Our Full Menu
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Experience;
