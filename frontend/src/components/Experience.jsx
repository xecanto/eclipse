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
  
  const { ref: batcaveRef, inView: batcaveVisible } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const experiences = [
    {
      title: "Premium Shisha",
      description: "Experience our extensive selection of premium flavors served in state-of-the-art hookah equipment for the perfect smoke.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>,
      delay: 200
    },
    {
      title: "Global Cuisine",
      description: "Our menu features a fusion of global flavors and local favorites, crafted with fresh ingredients and served with passion.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>,
      delay: 400
    },
    {
      title: "Craft Beverages",
      description: "Enjoy our signature cocktails, mocktails, and refreshments designed to complement your food and elevate your experience.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
      delay: 600
    },
    {
      title: "Private Events",
      description: "From intimate gatherings to large celebrations, our space can be customized to create the perfect atmosphere for any occasion.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>,
      delay: 800
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
        
        {/* BatCave Feature Section */}
        <div 
          ref={batcaveRef}
          className={`relative mb-20 mt-10 transition-all duration-1000 ease-out ${
            batcaveVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-900/20 to-transparent"></div>
          <div className="w-full h-full absolute">
            <div className="w-24 h-24 absolute -top-8 -left-8 border-t-2 border-l-2 border-yellow-500/50"></div>
            <div className="w-24 h-24 absolute -bottom-8 -right-8 border-b-2 border-r-2 border-yellow-500/50"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
            <div className="p-10 flex flex-col justify-center">
              <div className="mb-6">
                <div className="inline-block bg-gradient-to-r from-yellow-500 to-amber-600 p-0.5 mb-4">
                  <div className="bg-black p-2">
                    <h3 className="text-yellow-500 text-sm tracking-widest uppercase">Exclusive Area</h3>
                  </div>
                </div>
                <h2 className="text-4xl font-serif font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500">The BatCave</h2>
                <p className="text-xl mb-8 text-yellow-100/80" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  Step into our one-of-a-kind private room designed for unforgettable nights and next-level vibes. 
                  Featuring state-of-the-art sound, dual TV karaoke setup, and vibrant LED lighting.
                </p>
                
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-yellow-500 mr-2"></div>
                    <span className="text-yellow-200">Premium Sound System</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-yellow-500 mr-2"></div>
                    <span className="text-yellow-200">Karaoke Experience</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-yellow-500 mr-2"></div>
                    <span className="text-yellow-200">Custom LED Lighting</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-yellow-500 mr-2"></div>
                    <span className="text-yellow-200">Private Bookings</span>
                  </div>
                </div>
                
                <Link to="/batcave" className="inline-flex items-center px-6 py-3 bg-yellow-500 text-black uppercase tracking-wider text-sm font-medium transition-all hover:bg-yellow-400 group">
                  Explore The BatCave
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-yellow-500/20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </div>
              <img 
                src="/eclipse/images/batcave-feature.jpg" 
                alt="The BatCave" 
                className="w-full h-full object-cover"
                style={{minHeight: "400px"}}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://placehold.co/800x600/111/222?text=The+BatCave';
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent h-1/3"></div>
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <p className="text-lg font-medium text-yellow-300" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  Available for private bookings
                </p>
                <a href="tel:6473317664" className="text-yellow-500 hover:text-yellow-400 transition-colors">647-331-7664</a>
              </div>
            </div>
          </div>
        </div>
        
        <h3 className="text-2xl font-serif text-yellow-300 mb-8 text-center">Our Signature Offerings</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-yellow-900/20">
          {experiences.map((exp, index) => (
            <div key={index} className="flex flex-col">
              <ExperienceCard
                title={exp.title}
                description={exp.description}
                icon={exp.icon}
                delay={exp.delay}
              />
              {exp.special && (
                <div className="bg-black p-4 border-t-0 border border-yellow-900/40 flex justify-center">
                  <Link to={exp.link} className="text-yellow-500 text-sm uppercase tracking-wider hover:text-yellow-300 transition-colors duration-300 flex items-center">
                    Learn More
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              )}
            </div>
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
