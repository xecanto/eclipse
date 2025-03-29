import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Calendar, Clock, Users, Check, X } from 'lucide-react';
import { motion } from 'framer-motion';

const ReservationPage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(null);
  const [partySize, setPartySize] = useState(2);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');
  const [step, setStep] = useState(1);
  
  // Generate dates for the next 14 days
  const dates = Array.from({ length: 14 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() + i);
    return date;
  });
  
  // Format date for display
  const formatDate = (date) => {
    const options = { weekday: 'short', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };
  
  // Check if two dates are the same day
  const isSameDay = (date1, date2) => {
    return date1.getDate() === date2.getDate() && 
           date1.getMonth() === date2.getMonth() && 
           date1.getFullYear() === date2.getFullYear();
  };
  
  // Sample time slots with availability
  const timeSlots = [
    { time: '5:00 PM', available: true },
    { time: '5:30 PM', available: true },
    { time: '6:00 PM', available: true },
    { time: '6:30 PM', available: false },
    { time: '7:00 PM', available: true },
    { time: '7:30 PM', available: false },
    { time: '8:00 PM', available: true },
    { time: '8:30 PM', available: true },
    { time: '9:00 PM', available: true },
    { time: '9:30 PM', available: false },
    { time: '10:00 PM', available: true },
    { time: '10:30 PM', available: true },
    { time: '11:00 PM', available: true },
    { time: '11:30 PM', available: true },
  ];
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (step === 1 && selectedTime) {
      setStep(2);
      return;
    }
    
    // Process the reservation
    alert(`Reservation confirmed!\n\nDate: ${formatDate(selectedDate)}\nTime: ${selectedTime}\nParty Size: ${partySize}\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nSpecial Requests: ${specialRequests}`);
    
    // Reset form
    setSelectedTime(null);
    setPartySize(2);
    setName('');
    setEmail('');
    setPhone('');
    setSpecialRequests('');
    setStep(1);
  };
  
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      
      <div className="container mx-auto px-4 md:px-6 pt-28 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-amber-500">
              Make a Reservation
            </h1>
            <div className="w-20 h-0.5 bg-yellow-800/50 mx-auto mb-6"></div>
            <p className="text-xl text-yellow-100/80 max-w-3xl mx-auto" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Reserve your table at Eclipse Lounge & Grill for an unforgettable experience
            </p>
          </div>
          
          {/* Reservation Steps */}
          <div className="flex justify-center mb-10">
            <div className="flex items-center">
              <div className={`rounded-full ${step === 1 ? 'bg-yellow-500 text-black' : 'bg-yellow-500/20 text-yellow-500'} w-8 h-8 flex items-center justify-center`}>
                1
              </div>
              <div className={`h-0.5 w-20 ${step === 1 ? 'bg-yellow-900/40' : 'bg-yellow-500'}`}></div>
              <div className={`rounded-full ${step === 2 ? 'bg-yellow-500 text-black' : 'bg-yellow-900/40 text-yellow-100/60'} w-8 h-8 flex items-center justify-center`}>
                2
              </div>
            </div>
          </div>
          
          <div className="border border-yellow-900/40 bg-black p-8 mb-8 relative">
            {/* Gold corner accents */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-yellow-500"></div>
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-yellow-500"></div>
            
            <form onSubmit={handleSubmit}>
              {step === 1 ? (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl font-serif text-yellow-300 mb-6 flex items-center">
                    <Calendar size={20} className="mr-2" /> Select Date & Time
                  </h3>
                  
                  {/* Date Selection */}
                  <div className="mb-8">
                    <label className="block text-yellow-500 mb-4 uppercase tracking-wider text-sm">Date</label>
                    <div className="flex overflow-x-auto pb-4 scrollbar-hide">
                      {dates.map((date, index) => (
                        <button
                          key={index}
                          type="button"
                          className={`flex-shrink-0 w-24 h-24 rounded-none mr-4 flex flex-col items-center justify-center transition-all duration-300 ${
                            isSameDay(selectedDate, date) 
                              ? 'bg-yellow-500 text-black' 
                              : 'bg-yellow-950/20 text-yellow-100/80'
                          }`}
                          onClick={() => setSelectedDate(date)}
                        >
                          <span className="text-sm">{date.toLocaleDateString('en-US', { weekday: 'short' })}</span>
                          <span className="text-lg font-bold mt-1">{date.getDate()}</span>
                          <span className="text-xs mt-1">{date.toLocaleDateString('en-US', { month: 'short' })}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  {/* Party Size */}
                  <div className="mb-8">
                    <label className="text-yellow-500 mb-4 uppercase tracking-wider text-sm flex items-center">
                      <Users size={16} className="mr-2" /> Party Size
                    </label>
                    <div className="flex space-x-4">
                      {[1, 2, 4, 6, 8, 10, 'Custom'].map((size, index) => (
                        <button
                          key={index}
                          type="button"
                          className={`py-2 px-4 ${
                            partySize === size 
                              ? 'bg-yellow-500 text-black' 
                              : 'bg-yellow-950/20 text-yellow-100/80'
                          } transition-all duration-300`}
                          onClick={() => {
                            if (size === 'Custom') {
                              const custom = prompt('Enter party size (1-20):', '2');
                              const customSize = parseInt(custom, 10);
                              if (!isNaN(customSize) && customSize > 0 && customSize <= 20) {
                                setPartySize(customSize);
                              }
                            } else {
                              setPartySize(size);
                            }
                          }}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  {/* Time Slots */}
                  <div>
                    <label className="text-yellow-500 mb-4 uppercase tracking-wider text-sm flex items-center">
                      <Clock size={16} className="mr-2" /> Available Times
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                      {timeSlots.map((slot, index) => (
                        <button
                          key={index}
                          type="button"
                          disabled={!slot.available}
                          className={`py-3 relative ${
                            selectedTime === slot.time && slot.available
                              ? 'bg-yellow-500 text-black' 
                              : slot.available 
                                ? 'bg-yellow-950/20 text-yellow-100/80 hover:bg-yellow-950/30' 
                                : 'bg-yellow-950/10 text-yellow-100/30 cursor-not-allowed'
                          } transition-all duration-300`}
                          onClick={() => slot.available && setSelectedTime(slot.time)}
                        >
                          {slot.time}
                          {!slot.available && (
                            <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                              <X size={16} className="text-yellow-100/50" />
                            </div>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-10 text-right">
                    <button 
                      type="submit"
                      disabled={!selectedTime}
                      className={`group py-3 px-6 border-2 ${
                        selectedTime 
                          ? 'bg-yellow-500 border-yellow-500 text-black hover:text-yellow-500' 
                          : 'bg-yellow-950/20 border-yellow-900/40 text-yellow-100/30 cursor-not-allowed'
                      } font-medium relative overflow-hidden transition-colors duration-500 uppercase tracking-wider`}
                    >
                      <span className={`absolute inset-0 bg-black transform -translate-x-full ${selectedTime ? 'group-hover:translate-x-0' : ''} transition-transform duration-500`}></span>
                      <span className="relative z-10">Continue</span>
                    </button>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl font-serif text-yellow-300 mb-6">Your Information</h3>
                  
                  <div className="mb-4 p-4 bg-yellow-950/10 border border-yellow-900/20">
                    <p className="text-yellow-100/80">
                      <strong>Date:</strong> {formatDate(selectedDate)} at <strong>{selectedTime}</strong>
                    </p>
                    <p className="text-yellow-100/80">
                      <strong>Party Size:</strong> {partySize} {partySize === 1 ? 'person' : 'people'}
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-yellow-500 mb-2 uppercase tracking-wider text-sm">Your Name</label>
                      <input 
                        type="text" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-full bg-black border border-yellow-900/40 py-3 px-4 text-yellow-100 placeholder-yellow-900/50 focus:outline-none focus:border-yellow-500/50"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-yellow-500 mb-2 uppercase tracking-wider text-sm">Phone Number</label>
                      <input 
                        type="tel" 
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                        className="w-full bg-black border border-yellow-900/40 py-3 px-4 text-yellow-100 placeholder-yellow-900/50 focus:outline-none focus:border-yellow-500/50"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label className="block text-yellow-500 mb-2 uppercase tracking-wider text-sm">Email Address</label>
                    <input 
                      type="email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full bg-black border border-yellow-900/40 py-3 px-4 text-yellow-100 placeholder-yellow-900/50 focus:outline-none focus:border-yellow-500/50"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label className="block text-yellow-500 mb-2 uppercase tracking-wider text-sm">Special Requests (Optional)</label>
                    <textarea 
                      value={specialRequests}
                      onChange={(e) => setSpecialRequests(e.target.value)}
                      rows="3" 
                      className="w-full bg-black border border-yellow-900/40 py-3 px-4 text-yellow-100 placeholder-yellow-900/50 focus:outline-none focus:border-yellow-500/50"
                    ></textarea>
                  </div>
                  
                  <div className="flex justify-between mt-10">
                    <button 
                      type="button"
                      onClick={() => setStep(1)}
                      className="group py-3 px-6 border-2 border-yellow-900/40 text-yellow-500 font-medium relative overflow-hidden transition-colors duration-500 uppercase tracking-wider"
                    >
                      <span className="absolute inset-0 bg-yellow-900/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
                      <span className="relative z-10">Back</span>
                    </button>
                    
                    <button 
                      type="submit"
                      className="group py-3 px-6 bg-yellow-500 border-2 border-yellow-500 text-black font-medium relative overflow-hidden transition-colors duration-500 uppercase tracking-wider"
                    >
                      <span className="absolute inset-0 bg-black transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
                      <span className="relative z-10 group-hover:text-yellow-500">Confirm Reservation</span>
                    </button>
                  </div>
                </motion.div>
              )}
            </form>
          </div>
          
          {/* Reservation Policies */}
          <div className="bg-yellow-950/10 p-6 border border-yellow-900/20">
            <h3 className="text-lg font-serif text-yellow-300 mb-4">Reservation Policies</h3>
            <ul className="space-y-2 text-yellow-100/80" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              <li className="flex items-start">
                <Check size={18} className="text-yellow-500 mr-2 mt-1 flex-shrink-0" />
                <span>Reservations are held for 15 minutes past the reserved time.</span>
              </li>
              <li className="flex items-start">
                <Check size={18} className="text-yellow-500 mr-2 mt-1 flex-shrink-0" />
                <span>For parties larger than 8, please call us directly at (647) 331-7664.</span>
              </li>
              <li className="flex items-start">
                <Check size={18} className="text-yellow-500 mr-2 mt-1 flex-shrink-0" />
                <span>Special event reservations may require a deposit.</span>
              </li>
              <li className="flex items-start">
                <Check size={18} className="text-yellow-500 mr-2 mt-1 flex-shrink-0" />
                <span>Cancellations should be made at least 4 hours in advance.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ReservationPage;
