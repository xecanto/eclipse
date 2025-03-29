import React from 'react';
import { useInView } from 'react-intersection-observer';

const Ambiance = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section 
      id="ambiance" 
      className="py-24 bg-black relative"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-yellow-950/5"></div>
      <div className="absolute bottom-10 left-10 w-40 h-40 rounded-full bg-yellow-500/5 blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative">
        <div 
          ref={ref}
          className={`transition-all duration-1000 ease-out ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="flex flex-col items-center mb-16">
            <div className="w-12 h-0.5 bg-yellow-500 mb-6"></div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-amber-500">
              Immersive Atmosphere
            </h2>
            <div className="w-20 h-0.5 bg-yellow-800/50"></div>
          </div>
          
          <div className="relative mb-24">
            <div className="w-full overflow-hidden relative bg-black border border-yellow-900/40">
              {/* You would replace this with an actual image */}
              {/* <div className="h-full w-full bg-gradient-to-br from-yellow-950/30 to-black flex items-center justify-center p-12"> */}
                <div className="max-w-4xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-10 z-10 bg-gradient-to-br from-yellow-800/40 to-black">
                  <div className="text-yellow-500 mb-6">❝</div>
                  <p className="text-2xl md:text-3xl text-center text-yellow-100/90 italic" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    Inside, Eclipse is anything but ordinary. With LED walls, a state-of-the-art sound system, and immersive lighting, we've created a high-energy atmosphere that transforms every visit into a celebration.
                  </p>
                  <div className="text-yellow-500 text-right mt-6">❞</div>
                </div>
              {/* </div> */}
              <img src="/images/3.avif" alt="Eclipse Ambiance" className="object-cover w-full h-full" />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 border-t-2 border-l-2 border-yellow-500"></div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 border-b-2 border-r-2 border-yellow-500"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "LED Lighting",
                desc: "Our dynamic LED lighting transforms the space to match the mood, creating an immersive visual experience.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                )
              },
              {
                title: "Premium Sound",
                desc: "State-of-the-art sound systems deliver crystal clear music that sets the perfect tone for your visit.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15.536a5 5 0 010-7.072m12.728 0a9 9 0 010 12.728M3 12h.01M12 3v.01M21 12v.01M12 21v.01" />
                  </svg>
                )
              },
              {
                title: "Vibrant Energy",
                desc: "The energy at Eclipse is infectious, creating a space where memories are made and moments are cherished.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                )
              }
            ].map((item, i) => (
              <div 
                key={i}
                className={`border border-yellow-900/40 bg-black transition-all duration-700 ease-out ${
                  inView 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${i * 200}ms` }}
              >
                <div className="p-10 h-full flex flex-col">
                  <div className="text-yellow-500 mb-6">
                    {item.icon}
                  </div>
                  
                  <h3 className="text-xl font-serif mb-4 text-yellow-300">{item.title}</h3>
                  
                  <p className="text-yellow-100/70 mb-6 flex-grow" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    {item.desc}
                  </p>
                  
                  <div className="mt-auto">
                    <div className="inline-block border-b border-yellow-900/40 text-yellow-500/70 hover:text-yellow-500 hover:border-yellow-500 transition-all duration-300 cursor-pointer text-sm uppercase tracking-wider">
                      Explore
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ambiance;
