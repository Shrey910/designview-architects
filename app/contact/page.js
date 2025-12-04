'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    alert('Thank you for your message. We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-serif font-light mb-6">Contact Us</h1>
          <p className="text-neutral-500 max-w-2xl mx-auto">
            Ready to transform your space? Reach out to discuss your project and discover how we can bring your vision to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h2 className="text-2xl font-serif font-light mb-8">Get In Touch</h2>
            
            <div className="space-y-6 mb-12">
              <div>
                <h3 className="font-serif font-light text-lg mb-2">Email</h3>
                <p className="text-neutral-600">designview73@yahoo.com</p>
              </div>
              
              <div>
                <h3 className="font-serif font-light text-lg mb-2">Phone</h3>
                <p className="text-neutral-600">+91 9825254324</p>
              </div>
              
              <div>
                <h3 className="font-serif font-light text-lg mb-2">Studio</h3>
                <p className="text-neutral-600">Ahmedabad, Gujarat<br />India</p>
              </div>
            </div>
            
            <div>
              <h3 className="font-serif font-light text-lg mb-4">Follow Our Journey</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-neutral-600 hover:text-accent-600 transition-colors flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                </svg>
                                Instagram
                              </a>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {/* <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-light mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-neutral-300 focus:border-accent-500 focus:outline-none transition-colors"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-light mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-neutral-300 focus:border-accent-500 focus:outline-none transition-colors"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-light mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-neutral-300 focus:border-accent-500 focus:outline-none transition-colors"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-accent-600 text-white py-3 px-6 font-sans text-sm uppercase tracking-wider hover:bg-accent-700 transition-colors"
              >
                Send Message
              </button>
            </form> */}
          </motion.div>
        </div>
      </div>
    </div>
  );
}