import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black py-12 border-t border-yellow-900/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <div className="font-serif text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-amber-500 mb-2">
              ECLIPSE
            </div>
            <p className="text-yellow-100/50 italic" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Where moments become memories
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center md:justify-end gap-x-10 gap-y-4 text-sm">
            <div className="text-yellow-500/70 hover:text-yellow-400 transition-colors uppercase tracking-wider">
              <a href="#">Privacy Policy</a>
            </div>
            <div className="text-yellow-500/70 hover:text-yellow-400 transition-colors uppercase tracking-wider">
              <a href="#">Terms of Service</a>
            </div>
            <div className="text-yellow-500/70 hover:text-yellow-400 transition-colors uppercase tracking-wider">
              <a href="#">Careers</a>
            </div>
            <div className="text-yellow-500/70 hover:text-yellow-400 transition-colors uppercase tracking-wider">
              <a href="#">Contact</a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-yellow-900/30 text-center text-yellow-100/40 text-sm">
          © {new Date().getFullYear()} Eclipse Lounge & Grill. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
