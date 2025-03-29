import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { ShoppingCart, Clock, MapPin, Home, Plus, Minus } from 'lucide-react';

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [orderType, setOrderType] = useState('dine-in');
  const [cart, setCart] = useState([]);
  
  // Menu categories
  const categories = [
    { id: 'all', name: 'All Menu' },
    { id: 'appetizers', name: 'Appetizers' },
    { id: 'mains', name: 'Main Courses' },
    { id: 'grills', name: 'Grills' },
    { id: 'shisha', name: 'Premium Shisha' },
    { id: 'beverages', name: 'Beverages' },
    { id: 'desserts', name: 'Desserts' }
  ];
  
  // Menu items data
  const menuItems = [
    {
      id: 1,
      name: 'Mezze Platter',
      description: 'A selection of hummus, baba ganoush, tabbouleh, and warm pita bread',
      price: 16.99,
      category: 'appetizers',
      image: '/images/menu/mezze.jpg',
      featured: true,
      popular: true
    },
    {
      id: 2,
      name: 'Spicy Lamb Kofta',
      description: 'Grilled minced lamb skewers with Middle Eastern spices and yogurt sauce',
      price: 14.99,
      category: 'appetizers',
      image: '/images/menu/kofta.jpg',
      featured: false,
      popular: false
    },
    {
      id: 3,
      name: 'Mixed Grill Platter',
      description: 'Selection of chicken, beef, and lamb with grilled vegetables and rice',
      price: 28.99,
      category: 'grills',
      image: '/images/menu/mixed-grill.jpg',
      featured: true,
      popular: true
    },
    {
      id: 4,
      name: 'Citrus Mint Shisha',
      description: 'Refreshing blend of citrus and mint flavors with premium tobacco',
      price: 24.99,
      category: 'shisha',
      image: '/images/menu/shisha-mint.jpg',
      featured: true,
      popular: true
    },
    {
      id: 5,
      name: 'Lamb Tagine',
      description: 'Slow-cooked lamb with apricots, almonds, and Middle Eastern spices',
      price: 26.99,
      category: 'mains',
      image: '/images/menu/tagine.jpg',
      featured: false,
      popular: true
    },
    {
      id: 6,
      name: 'Signature Mocktail',
      description: 'Blend of fresh fruits, mint, and sparkling water with a hint of rose',
      price: 8.99,
      category: 'beverages',
      image: '/images/menu/mocktail.jpg',
      featured: false,
      popular: false
    },
    {
      id: 7,
      name: 'Baklava Plate',
      description: 'Assortment of traditional honey-soaked pastries with nuts',
      price: 10.99,
      category: 'desserts',
      image: '/images/menu/baklava.jpg',
      featured: false,
      popular: true
    },
    {
      id: 8,
      name: 'Double Apple Shisha',
      description: 'Classic double apple flavor with smooth smoke character',
      price: 22.99,
      category: 'shisha',
      image: '/images/menu/shisha-apple.jpg',
      featured: false,
      popular: false
    }
  ];
  
  // Filter menu items based on active category
  const filteredItems = activeCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);
  
  // Add item to cart
  const addToCart = (item) => {
    const itemInCart = cart.find(cartItem => cartItem.id === item.id);
    
    if (itemInCart) {
      setCart(cart.map(cartItem => 
        cartItem.id === item.id 
          ? { ...cartItem, quantity: cartItem.quantity + 1 } 
          : cartItem
      ));
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };
  
  // Remove item from cart
  const removeFromCart = (id) => {
    const itemInCart = cart.find(item => item.id === id);
    
    if (itemInCart.quantity === 1) {
      setCart(cart.filter(item => item.id !== id));
    } else {
      setCart(cart.map(item => 
        item.id === id 
          ? { ...item, quantity: item.quantity - 1 } 
          : item
      ));
    }
  };
  
  // Calculate cart total
  const cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  
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
          
          {/* Order Type Selection */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex rounded-md p-1 bg-yellow-950/20">
              <button
                onClick={() => setOrderType('dine-in')}
                className={`flex items-center px-4 py-2 rounded-md text-sm ${
                  orderType === 'dine-in' 
                    ? 'bg-yellow-500 text-black' 
                    : 'bg-transparent text-yellow-500'
                } transition-all duration-300`}
              >
                <MapPin size={16} className="mr-2" />
                Dine In
              </button>
              <button
                onClick={() => setOrderType('pickup')}
                className={`flex items-center px-4 py-2 rounded-md text-sm ${
                  orderType === 'pickup' 
                    ? 'bg-yellow-500 text-black' 
                    : 'bg-transparent text-yellow-500'
                } transition-all duration-300`}
              >
                <Clock size={16} className="mr-2" />
                Pickup
              </button>
              <button
                onClick={() => setOrderType('delivery')}
                className={`flex items-center px-4 py-2 rounded-md text-sm ${
                  orderType === 'delivery' 
                    ? 'bg-yellow-500 text-black' 
                    : 'bg-transparent text-yellow-500'
                } transition-all duration-300`}
              >
                <Home size={16} className="mr-2" />
                Delivery
              </button>
            </div>
          </div>
          
          {/* Order Type Message */}
          {orderType === 'dine-in' && (
            <div className="text-center mb-10 text-yellow-100/80 bg-yellow-950/10 p-4 rounded">
              For the full Eclipse experience, visit us in person to enjoy our ambiance and premium service.
            </div>
          )}
          
          {orderType === 'pickup' && (
            <div className="text-center mb-10 text-yellow-100/80 bg-yellow-950/10 p-4 rounded">
              Place your order for pickup. Ready in approximately 30 minutes.
              <div className="mt-2">
                <strong>Address:</strong> 680 Silver Creek Blvd Unit 14, Mississauga, ON L5A 3Z1
              </div>
            </div>
          )}
          
          {orderType === 'delivery' && (
            <div className="text-center mb-10 text-yellow-100/80 bg-yellow-950/10 p-4 rounded">
              We deliver within 10km of our location. Expected delivery time is 45-60 minutes.
              <div className="mt-2">
                <strong>Delivery Fee:</strong> $5.99 | <strong>Free Delivery</strong> on orders over $50
              </div>
            </div>
          )}
          
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
                          
                          <button 
                            onClick={() => addToCart(item)}
                            className="ml-auto text-yellow-500 hover:text-yellow-400 transition-colors"
                          >
                            <span className="sr-only">Add to cart</span>
                            <Plus size={18} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Cart Section */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 border border-yellow-900/40 bg-black p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-serif text-yellow-300 flex items-center">
                    <ShoppingCart size={20} className="mr-2" /> Your Order
                  </h3>
                  {orderType === 'dine-in' && <span className="text-yellow-500">Dine In</span>}
                  {orderType === 'pickup' && <span className="text-yellow-500">Pickup</span>}
                  {orderType === 'delivery' && <span className="text-yellow-500">Delivery</span>}
                </div>
                
                {cart.length === 0 ? (
                  <div className="text-center py-10 text-yellow-100/60">
                    Your cart is empty
                  </div>
                ) : (
                  <>
                    <div className="space-y-4 max-h-96 overflow-y-auto mb-6">
                      {cart.map(item => (
                        <div key={item.id} className="flex justify-between items-center py-3 border-b border-yellow-900/20">
                          <div className="flex items-center">
                            <div className="mr-4">
                              <button 
                                onClick={() => removeFromCart(item.id)}
                                className="text-yellow-500 hover:text-yellow-400"
                              >
                                <Minus size={16} />
                              </button>
                              <span className="mx-2 text-yellow-100">{item.quantity}</span>
                              <button 
                                onClick={() => addToCart(item)}
                                className="text-yellow-500 hover:text-yellow-400"
                              >
                                <Plus size={16} />
                              </button>
                            </div>
                            <span className="text-yellow-100/80">{item.name}</span>
                          </div>
                          <span className="text-yellow-500">${(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="space-y-3 pt-3 border-t border-yellow-900/40">
                      <div className="flex justify-between text-yellow-100/80">
                        <span>Subtotal</span>
                        <span>${cartTotal.toFixed(2)}</span>
                      </div>
                      
                      {orderType === 'delivery' && (
                        <div className="flex justify-between text-yellow-100/80">
                          <span>Delivery Fee</span>
                          <span>{cartTotal > 50 ? 'Free' : '$5.99'}</span>
                        </div>
                      )}
                      
                      <div className="flex justify-between text-yellow-100 font-medium pt-3 border-t border-yellow-900/20">
                        <span>Total</span>
                        <span>${(cartTotal + (orderType === 'delivery' && cartTotal <= 50 ? 5.99 : 0)).toFixed(2)}</span>
                      </div>
                    </div>
                    
                    <button 
                      className="w-full mt-6 group py-3 bg-yellow-500 border-2 border-yellow-500 text-black font-medium 
                      relative overflow-hidden transition-colors duration-500 uppercase tracking-wider"
                    >
                      <span className="absolute inset-0 bg-black transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
                      <span className="relative z-10 group-hover:text-yellow-500">
                        {orderType === 'dine-in' ? 'Reserve Table' : 'Checkout'}
                      </span>
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
    </div>
      
      <Footer />
    </div>
  );
};

export default MenuPage;
