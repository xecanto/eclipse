import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-scroll';
import VidFile from '../assets/videos/lounge-ambience.mp4';

const Hero = () => {
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const contentRef = useRef(null);
  const btnRef = useRef(null);
  const [loaded, setLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    setLoaded(true);
    const timer = setTimeout(() => {
      if (headingRef.current) headingRef.current.classList.add('opacity-100', 'translate-y-0');
      
      setTimeout(() => {
        if (subheadingRef.current) subheadingRef.current.classList.add('opacity-100', 'translate-y-0');
      }, 400);
      
      setTimeout(() => {
        if (contentRef.current) contentRef.current.classList.add('opacity-100', 'translate-y-0');
      }, 800);
      
      setTimeout(() => {
        if (btnRef.current) btnRef.current.classList.add('opacity-100', 'scale-100');
      }, 1200);
    }, 300);
    
    // Add video loading error handling
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.addEventListener('error', () => {
        console.error('Video failed to load');
        setVideoError(true);
      });
    }
    
    return () => {
      clearTimeout(timer);
      if (videoElement) {
        videoElement.removeEventListener('error', () => {});
      }
    };
  }, []);

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden"
    >
      {/* Video Background */}
<div className="video absolute inset-0 w-full h-full z-0 overflow-hidden">
  <div className="absolute inset-0 bg-black opacity-30 z-10"></div> {/* Black overlay */}
  
  {!videoError ? (
    <video 
      ref={videoRef}
      autoPlay 
      loop 
      muted 
      playsInline
      preload="auto"
      crossOrigin="anonymous"
      className="absolute w-full h-full object-cover z-0"
      style={{
        filter: 'brightness(0.6) saturate(1.2)',
        height: '100%',
        width: '100%',
        objectFit: 'cover',
        objectPosition: 'center center',
        opacity: 1
      }}
      onError={(e) => {
        console.error('Video failed to load', e);
        setVideoError(true);
      }}
      // src="/videos/lounge-ambience.mp4"
      src={VidFile}
    >
    </video>
  ) : (
    <div className="absolute w-full h-full overflow-hidden z-20">
    <div className="absolute inset-0 opacity-10 gold-shimmer"></div>
    </div>
  )}
</div>

      {/* Eclipse logo mark */}
      <div className="absolute w-full h-full overflow-hidden pointer-events-none z-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vh] h-[150vh] rounded-full border border-yellow-600/20"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140vh] h-[140vh] rounded-full border border-yellow-500/10"></div>
        {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130vh] h-[130vh] rounded-full border border-yellow-400/5"></div> */}
      </div>
      
      <div className="container mx-auto px-4 md:px-6 z-30 pt-20">
              <div className="text-center max-w-5xl mx-auto p-5">
              {/* <div class="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-yellow-500"></div>
              <div class="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-yellow-500"></div>   */}
                <div 
                  ref={headingRef}
                  className="mb-3 opacity-0 -translate-y-10 transition-all duration-1000 ease-out"
                >
                  <h1 className="text-6xl md:text-8xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-b from-yellow-300 via-amber-400 to-yellow-500 inline-block font-serif"
                    style={{ 
                      textShadow: '0 0 40px rgba(245, 158, 11, 0.3)',
                      fontFamily: "'Playfair Display', serif",
                      letterSpacing: '-1px'
                    }}
                  >
                    ECLIPSE
                  </h1>
                </div>
                
                <div
                  ref={subheadingRef}
                  className="opacity-0 -translate-y-8 transition-all duration-1000 ease-out delay-100"
                >
                  <h2 className="text-2xl md:text-3xl text-yellow-100/90 font-light tracking-wider uppercase mb-6"
                    style={{ fontFamily: "'Montserrat', sans-serif", letterSpacing: '0.3em' }}
                  >
                    Lounge & Grill
                  </h2>
                </div>
                
                <p 
                  ref={contentRef}
                  className="text-xl md:text-2xl text-yellow-100/80 mb-12 max-w-3xl mx-auto opacity-0 -translate-y-10 transition-all duration-1000 ease-out"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  An <span className="italic">elevated</span> experience of premium shisha,  culinary excellence and atmospheric indulgence
                  {/* <span className="inline-block mx-1 w-2 h-2 rounded-full bg-yellow-500/70 align-middle"></span>  */}
                </p>
                
                <div 
                  ref={btnRef}
                  className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 opacity-0 scale-95 transition-all duration-700 ease-out"
                >
                  <Link
                    to="experience"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={800}
                    className="group px-8 py-4 rounded-none border-2 border-yellow-500 relative overflow-hidden text-yellow-500 
                    hover:text-black transition-colors duration-500 font-medium cursor-pointer"
                  >
                    <span className="absolute inset-0 bg-yellow-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
                    <span className="relative z-10 tracking-wider">OUR OFFERINGS</span>
                  </Link>
                  
                  <Link
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={800}
                    className="group px-8 py-4 rounded-none bg-yellow-500 text-black relative overflow-hidden
                    hover:text-yellow-500 transition-colors duration-500 font-medium cursor-pointer"
                  >
                    <span className="absolute inset-0 bg-black border-2 border-yellow-500 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
                    <span className="relative z-10 tracking-wider">RESERVE NOW</span>
                  </Link>
                </div>
                
                
              </div>
              {/* Scroll indicator */}
              <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center opacity-80 hover:opacity-100 transition-opacity">
                  <span className="text-yellow-500/70 text-sm tracking-widest mb-2">SCROLL</span>
                  <div className="w-0.5 h-10 bg-gradient-to-b from-yellow-500/70 to-transparent animate-pulse"></div>
                </div>
            </div>
    </section>
  );
};

export default Hero;


