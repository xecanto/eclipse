import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-amber-500">
        404 | Page Not Found
      </h1>
      <p className="text-xl md:text-2xl mb-10 max-w-lg text-yellow-100/80" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
        The page you're looking for has disappeared into the night.
      </p>
      <Link 
        to="/" 
        className="group px-8 py-4 rounded-none border-2 border-yellow-500 relative overflow-hidden text-yellow-500 
        hover:text-black transition-colors duration-500 font-medium cursor-pointer uppercase tracking-wider"
      >
        <span className="absolute inset-0 bg-yellow-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
        <span className="relative z-10">Return to Eclipse</span>
      </Link>
    </div>
  );
};

export default NotFound;
