import React from 'react';
import { useInView } from 'react-intersection-observer';
import image1 from '../assets/images/1.png';
import image2 from '../assets/images/2.png';

const About = () => {
  const { ref: sectionRef, inView: sectionVisible } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-24 bg-black relative"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-yellow-900/10 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-yellow-900/10 to-transparent"></div>
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-yellow-500/5 blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className={`transition-all duration-1000 ease-out ${
          sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="flex flex-col items-center mb-16">
            <div className="w-12 h-0.5 bg-yellow-500 mb-6"></div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-amber-500">
              Our Story
            </h2>
            <div className="w-20 h-0.5 bg-yellow-800/50"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 text-yellow-100/80" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              <p className="text-xl leading-relaxed">
                At Eclipse Lounge & Grill, we don't just serve food and shisha — we craft experiences designed to bring people together. Created by a team of passionate individuals from the community, for the community, Eclipse was built with one goal in mind: to be a place where everyone feels welcome, energized, and inspired to connect.
              </p>
              <p className="text-xl leading-relaxed">
                We've blended globally inspired cuisine, premium shisha, and handcrafted cocktails and mocktails into a one-of-a-kind lounge experience. Our menu reflects the diversity of our guests — a mix of bold flavors and familiar comforts, all made fresh and served with intention.
              </p>
              <p className="text-xl leading-relaxed italic text-yellow-400">
                More than a business, Eclipse is a movement — fueled by passion, powered by people, and rooted in the culture we live and love.
              </p>
              <div className="pt-4">
                <div className="inline-block border-b border-yellow-500/50 text-yellow-500 uppercase tracking-widest text-sm font-light hover:border-yellow-500 transition-colors cursor-pointer">
                  Our Philosophy
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-sm overflow-hidden shadow-2xl relative bg-black border border-yellow-900/30 p-1">
                <div className="absolute inset-0 bg-gradient-to-br from-black via-yellow-950/20 to-black overflow-hidden">
                  {/* You would replace this with an actual image */}
                  {/* <div className="h-full w-full flex items-center justify-center">
                    <span className="text-xl text-yellow-300/40 tracking-wider uppercase">Eclipse Ambiance</span>
                  </div> */}
                  <img src={image1} alt="Eclipse Ambiance" className="object-cover w-full h-full" />
                </div>
                {/* Gold corner accents */}
                <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-yellow-500"></div>
                <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-yellow-500"></div>
              </div>
              
              <div className="absolute -bottom-8 -right-8 h-2/3 w-2/3 overflow-hidden shadow-2xl bg-black border border-yellow-900/30 p-1">
                <div className="absolute inset-0 bg-gradient-to-br from-black via-yellow-950/20 to-black overflow-hidden">
                  {/* You would replace this with an actual image */}
                  {/* <div className="h-full w-full flex items-center justify-center">
                    <span className="text-xl text-yellow-300/40 tracking-wider uppercase">Our Team</span>
                  </div> */}

                  <img src={image2} alt="Eclipse Team" className="object-cover w-full h-full" />
                </div>
                {/* Gold corner accents */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-yellow-500"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-yellow-500"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
