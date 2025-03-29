import React from 'react';
import Masonry from 'react-masonry-css';
import { albumData } from '../data/albumData';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AlbumPage = () => {
  // Responsive breakpoints for masonry grid
  const breakpointColumnsObj = {
    default: 3,
    1024: 2,
    640: 1
  };

  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      
      <div className="container mx-auto py-20 px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Our Photo Gallery</h1>
        
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="flex w-auto -ml-4"
          columnClassName="pl-4 bg-clip-padding"
        >
          {albumData.map((photo, index) => (
            <div 
              key={index} 
              className="mb-4 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-[1.02]"
            >
              <img 
                src={photo.src} 
                alt={photo.alt} 
                className="w-full h-auto object-cover" 
              />
              <div className="p-4 bg-gray-900">
                <h3 className="text-xl font-semibold text-amber-500">{photo.title}</h3>
                <p className="text-gray-300">{photo.description}</p>
              </div>
            </div>
          ))}
        </Masonry>
      </div>
      
      <Footer />
    </div>
  );
};

export default AlbumPage;
