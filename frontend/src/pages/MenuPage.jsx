import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { ShoppingCart, Clock, MapPin, Home, Plus, Minus } from 'lucide-react';
import { menuCategories, menuItems as Menu } from '../data/menuData';

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  // Menu categories
  const categories = menuCategories;
  
  // Menu items data
  const menuItems = Menu; 
  
  // Filter menu items based on active category
  const filteredItems = activeCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);


  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      
      <div className="container mx-auto px-4 md:px-6 pt-28 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-amber-500">
              Our Menu
            </h1>
            <div className="w-20 h-0.5 bg-yellow-800/50 mx-auto mb-6"></div>
            <p className="text-xl text-yellow-100/80 max-w-3xl mx-auto" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Discover our selection of global flavors, premium shisha, and craft beverages
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8"></div>
            <div className="lg:col-span-2">
              {/* Category Navigation */}
              <div className="overflow-x-auto scrollbar-hide mb-8">
                <div className="flex space-x-4 pb-2">
                  {categories.map(category => (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`px-4 py-2 whitespace-nowrap text-sm ${
                        activeCategory === category.id 
                          ? 'bg-yellow-500 text-black rounded-md' 
                          : 'text-yellow-500 hover:bg-yellow-950/20 rounded-md'
                      } transition-all duration-300`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Menu Items Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredItems.map(item => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border border-yellow-900/40 bg-black p-4 relative group"
                  >
                    {/* Gold corner accents */}
                    <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-yellow-500"></div>
                    <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-yellow-500"></div>
                    
                    <div className="flex">
                      <div className="w-24 h-24 overflow-hidden bg-yellow-950/20 flex-shrink-0">
                        <img 
                          src={item.image || '/images/menu/placeholder.jpg'} 
                          alt={item.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      
                      <div className="ml-4 flex-grow">
                        <div className="flex justify-between">
                          <h3 className="text-lg font-serif text-yellow-300">{item.name}</h3>
                          <span className="text-yellow-500 font-medium">${item.price.toFixed(2)}</span>
                        </div>
                        
                        <p className="text-yellow-100/70 text-sm my-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                          {item.description}
                        </p>
                        
                        <div className="flex justify-between items-center mt-3">
                          {item.popular && (
                            <span className="text-xs bg-yellow-950/30 text-yellow-400 px-2 py-1 rounded">
                              Popular
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
    </div>
      
      <Footer />
    </div>
  );
};

export default MenuPage;
