import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Contact = () => {
  
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  

  return (
    <section 
      id="contact" 
      className="py-24 bg-black relative"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-yellow-900/10 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-yellow-900/10 to-transparent"></div>
      <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-yellow-500/5 blur-3xl"></div>
      
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
              Visit Eclipse
            </h2>
            <div className="w-20 h-0.5 bg-yellow-800/50"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-12">
              <div className="space-y-6 relative">
                <div className="absolute -left-6 top-0 w-0.5 h-full bg-yellow-800/30"></div>
                <h3 className="text-2xl font-serif font-semibold text-yellow-300">Find Us</h3>
                <p className="text-yellow-100/80 text-lg" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                680 Silver Creek Blvd Unit 14,<br/> Mississauga, ON L5A 3Z1, Canada
                </p>
                <div className="flex space-x-6">
                  <a 
                    href="tel:+16473317664" 
                    className="text-yellow-500 hover:text-yellow-400 transition-colors"
                  >
                    +1 (647) 331-7664
                  </a>
                  <span className="text-yellow-900/50">|</span>
                  <a 
                    href="tel:+19055000720" 
                    className="text-yellow-500 hover:text-yellow-400 transition-colors"
                  >
                    +1 (905) 500-0720
                  </a>
                  <span className="text-yellow-900/50">|</span>
                  <a 
                    href="mailto:info@eclipselounge.com" 
                    className="text-yellow-500 hover:text-yellow-400 transition-colors"
                  >
                    info@eclipselounge.ca
                  </a>
                </div>
              </div>
              
              <div className="space-y-6 relative">
                <div className="absolute -left-6 top-0 w-0.5 h-full bg-yellow-800/30"></div>
                <h3 className="text-2xl font-serif font-semibold text-yellow-300">Hours</h3>
                <div className="space-y-3 text-yellow-100/80" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  <div className="flex justify-between border-b border-yellow-900/20 pb-2">
                    <span>Monday - Fridday</span>
                    <span>05:00 PM - 02:00 AM</span>
                  </div>
                  {/* <div className="flex justify-between border-b border-yellow-900/20 pb-2">
                    <span>Friday</span>
                    <span>4 PM - 2 AM</span>
                  </div> */}
                  <div className="flex justify-between border-b border-yellow-900/20 pb-2">
                    <span>Saturday</span>
                    <span>05:00 PM - 03:00 AM</span>
                  </div>
                  <div className="flex justify-between border-b border-yellow-900/20 pb-2">
                    <span>Sunday</span>
                    <span>05:00 PM - 01:00 AM</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6 relative">
                <div className="absolute -left-6 top-0 w-0.5 h-full bg-yellow-800/30"></div>
                <h3 className="text-2xl font-serif font-semibold text-yellow-300">Connect</h3>
                <div className="flex space-x-5">
                  {[
                    { name: 'facebook', link: 'https://facebook.com', icon: <Facebook/> },
                    { name: 'instagram', link: 'https://instagram.com', icon: <Instagram/> },
                    { name: 'twitter', link: 'https://twitter.com', icon: <Twitter/> },
                    { name:'linkedin', link: 'https://linkedin.com', icon: <Linkedin/>}
                  ].map((social, i) => (
                    <a 
                      key={i}
                      href={social.link}
                      className="w-12 h-12 border border-yellow-800/50 flex items-center justify-center hover:border-yellow-500 hover:bg-yellow-500/10 transition-all duration-300 group"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="space-y-10">
              <div className="overflow-hidden shadow-xl bg-black border border-yellow-900/40 relative">
                <div className="h-[320px] bg-gradient-to-br from-yellow-950/20 to-black flex items-center justify-center p-2">
                  {/* Map would go here. For now, placeholder div */}
                  {/* <span className="text-xl text-yellow-500/40 tracking-wider uppercase">Interactive Map</span> */}
                  <a href='https://maps.app.goo.gl/oGSrtSe2BzA1mLQr7' className='w-full h-full block relative'>
                  <iframe className='w-full h-full pointer-events-none' title="Eclipse Lounge & Grill"
                    src="https://maps.google.com/maps?q=Eclipse%20lounge%20and%20grill%20Mississauga&z=15&output=embed"
                    allowfullscreen />
                    </a>
                </div>
                {/* Gold corner accents */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-yellow-500"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-yellow-500"></div>
              </div>
                  
                 {/* Add View Full Menu, Reservations and Contact us Buttons  */}

              <div className="flex sm:flex-row gap-4 flex-col justify-between">
                <Link
                                    to="/menu"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={800}
                                    className="group px-8 py-4 rounded-none border-2 border-yellow-500 relative overflow-hidden text-yellow-500 
                                    hover:text-black transition-colors duration-500 font-medium cursor-pointer"
                                  >
                                    <span className="absolute inset-0 bg-yellow-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
                                    <span className="relative z-10 tracking-wider">VIEW FULL MENU</span>
                                  </Link>
               <Link
                                   to="/reservations"
                                   spy={true}
                                   smooth={true}
                                   offset={-70}
                                   duration={800}
                                   className="group px-8 py-4 rounded-none border-2 border-yellow-500 relative overflow-hidden text-yellow-500 
                                    hover:text-black transition-colors duration-500 font-medium cursor-pointer"
                                  >
                                    <span className="absolute inset-0 bg-yellow-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
                                    <span className="relative z-10 tracking-wider">MAKE A RESERVATION</span>
                                  </Link>
                                  <Link
                                   to="/contact"
                                   spy={true}
                                   smooth={true}
                                   offset={-70}
                                   duration={800}
                                   className="group px-8 py-4 rounded-none border-2 border-yellow-500 relative overflow-hidden text-yellow-500 
                                    hover:text-black transition-colors duration-500 font-medium cursor-pointer"
                                  >
                                    <span className="absolute inset-0 bg-yellow-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
                                    <span className="relative z-10 tracking-wider">CONTACT US</span>
                                  </Link>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
