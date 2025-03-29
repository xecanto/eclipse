import React from 'react';
import { Link } from 'react-router-dom';
import Masonry from 'react-masonry-css';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Ambiance from '../components/Ambiance';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { albumData } from '../data/albumData';

const LandingPage = () => {
  // Only show first 6 images in the preview
  const previewImages = albumData.slice(0, 6);
  
  // Responsive breakpoints for masonry grid
  const breakpointColumnsObj = {
    default: 2,
    640: 1
  };

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Ambiance />
      
      {/* Album Preview Section - Masonry Layout */}
      <section className="py-16 px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">Our Gallery</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Take a visual journey through our restaurant's ambiance, delicious dishes, and special moments.
          </p>
        </div>
        
        <div className="container mx-auto max-w-5xl">
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="flex w-auto -ml-4 mb-8"
            columnClassName="pl-4 bg-clip-padding"
          >
            {previewImages.map((photo, index) => (
              <div key={index} className="mb-4 rounded-lg overflow-hidden shadow-md">
                <img 
                  src={photo.src} 
                  alt={photo.alt} 
                  className="w-full h-auto object-cover" 
                />
              </div>
            ))}
          </Masonry>
        </div>
        
        <div className="text-center">
          <Link 
            to="/album" 
            className="inline-block px-6 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors font-medium"
          >
            View Full Gallery
          </Link>
        </div>
      </section>
      
      <Contact />
      <Footer />
    </div>
  );
};

export default LandingPage;

