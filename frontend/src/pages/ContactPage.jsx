import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-amber-500">
                Contact Us
              </h1>
              <div className="w-20 h-0.5 bg-yellow-800/50 mx-auto mb-6"></div>
              <p className="text-xl text-yellow-100/80 max-w-3xl mx-auto" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Get in touch with us for reservations, events, feedback, or any inquiries
              </p>
            </div>
            
            <div 
              ref={ref}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-12 transition-all duration-1000 ease-out ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              {/* Contact Info Section */}
              <div className="lg:col-span-5 space-y-10">
                <div className="bg-black border border-yellow-900/40 p-8 relative">
                  {/* Gold corner accents */}
                  <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-yellow-500"></div>
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-yellow-500"></div>
                  
                  <h2 className="text-2xl font-serif font-semibold mb-6 text-yellow-300">Visit Eclipse</h2>
                  
                  <div className="space-y-8">
                    <div className="flex">
                      <div className="w-12 h-12 bg-yellow-950/20 flex items-center justify-center rounded-none border border-yellow-900/40 mr-4 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-yellow-100 mb-1">Our Location</h3>
                        <p className="text-yellow-100/70" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                          680 Silver Creek Blvd Unit 14,<br/>
                          Mississauga, ON L5A 3Z1, Canada
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="w-12 h-12 bg-yellow-950/20 flex items-center justify-center rounded-none border border-yellow-900/40 mr-4 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-yellow-100 mb-1">Call Us</h3>
                        <p className="text-yellow-100/70" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                          <a href="tel:+16473317664" className="hover:text-yellow-500 transition-colors">+1 (647) 331-7664</a><br/>
                          <a href="tel:+19055000720" className="hover:text-yellow-500 transition-colors">+1 (905) 500-0720</a>
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="w-12 h-12 bg-yellow-950/20 flex items-center justify-center rounded-none border border-yellow-900/40 mr-4 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-yellow-100 mb-1">Email Us</h3>
                        <p className="text-yellow-100/70" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                          <a href="mailto:info@eclipselounge.ca" className="hover:text-yellow-500 transition-colors">info@eclipselounge.ca</a>
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="w-12 h-12 bg-yellow-950/20 flex items-center justify-center rounded-none border border-yellow-900/40 mr-4 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-yellow-100 mb-1">Hours</h3>
                        <div className="space-y-1 text-yellow-100/70" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                          <p>Monday - Friday: 5:00 PM - 2:00 AM</p>
                          <p>Saturday: 5:00 PM - 3:00 AM</p>
                          <p>Sunday: 5:00 PM - 1:00 AM</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-10 pt-8 border-t border-yellow-900/20">
                    <h3 className="text-lg font-medium text-yellow-100 mb-4">Connect With Us</h3>
                    <div className="flex space-x-4">
                      {[
                        { icon: <Facebook size={20} />, link: 'https://facebook.com' },
                        { icon: <Instagram size={20} />, link: 'https://instagram.com' },
                        { icon: <Twitter size={20} />, link: 'https://twitter.com' },
                        { icon: <Linkedin size={20} />, link: 'https://linkedin.com' }
                      ].map((social, index) => (
                        <a
                          key={index}
                          href={social.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 border border-yellow-900/40 flex items-center justify-center text-yellow-500 hover:border-yellow-500 hover:bg-yellow-500/10 transition-all duration-300"
                        >
                          {social.icon}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Contact Form Section */}
              <div className="lg:col-span-7">
                <div className="bg-black border border-yellow-900/40 p-8 relative">
                  {/* Gold corner accents */}
                  <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-yellow-500"></div>
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-yellow-500"></div>
                  
                  <h2 className="text-2xl font-serif font-semibold mb-6 text-yellow-300">Send Us a Message</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-yellow-500 mb-2 uppercase tracking-wider text-sm">Your Name</label>
                        <input 
                          type="text" 
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full bg-black border border-yellow-900/40 py-3 px-4 text-yellow-100 placeholder-yellow-900/50 focus:outline-none focus:border-yellow-500/50"
                        />
                      </div>
                      <div>
                        <label className="block text-yellow-500 mb-2 uppercase tracking-wider text-sm">Your Email</label>
                        <input 
                          type="email" 
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full bg-black border border-yellow-900/40 py-3 px-4 text-yellow-100 placeholder-yellow-900/50 focus:outline-none focus:border-yellow-500/50"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-yellow-500 mb-2 uppercase tracking-wider text-sm">Phone Number</label>
                        <input 
                          type="tel" 
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full bg-black border border-yellow-900/40 py-3 px-4 text-yellow-100 placeholder-yellow-900/50 focus:outline-none focus:border-yellow-500/50"
                        />
                      </div>
                      <div>
                        <label className="block text-yellow-500 mb-2 uppercase tracking-wider text-sm">Subject</label>
                        <select 
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full bg-black border border-yellow-900/40 py-3 px-4 text-yellow-100 placeholder-yellow-900/50 focus:outline-none focus:border-yellow-500/50"
                        >
                          <option value="">Select a subject</option>
                          <option value="reservation">Reservation Inquiry</option>
                          <option value="event">Private Event</option>
                          <option value="feedback">Feedback</option>
                          <option value="job">Job Application</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-yellow-500 mb-2 uppercase tracking-wider text-sm">Your Message</label>
                      <textarea 
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="6" 
                        required
                        className="w-full bg-black border border-yellow-900/40 py-3 px-4 text-yellow-100 placeholder-yellow-900/50 focus:outline-none focus:border-yellow-500/50"
                      ></textarea>
                    </div>
                    
                    <div className="pt-4">
                      <button 
                        type="submit" 
                        className="group py-4 px-8 bg-yellow-500 border-2 border-yellow-500 text-black font-medium 
                        relative overflow-hidden transition-colors duration-500 uppercase tracking-wider"
                      >
                        <span className="absolute inset-0 bg-black transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
                        <span className="relative z-10 group-hover:text-yellow-500">Send Message</span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              
            </div>
            <div className="mt-10 p-8 bg-yellow-950/10 border border-yellow-900/20">
                  <h3 className="text-xl font-serif text-yellow-300 mb-4">Looking for Something Specific?</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-yellow-100/80" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    <div>
                      <h4 className="text-lg font-medium text-yellow-100 mb-2">Reservations</h4>
                      <p>For same-day reservations, please call us directly at <a href="tel:+16473317664" className="text-yellow-500 hover:underline">+1 (647) 331-7664</a></p>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-yellow-100 mb-2">Private Events</h4>
                      <p>To book private events or for special occasions, please email us at <a href="mailto:events@eclipselounge.ca" className="text-yellow-500 hover:underline">events@eclipselounge.ca</a></p>
                    </div>
                  </div>
                </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ContactPage;
